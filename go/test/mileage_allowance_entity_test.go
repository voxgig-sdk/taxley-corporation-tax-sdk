package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/taxley-corporation-tax-sdk/go"
	"github.com/voxgig-sdk/taxley-corporation-tax-sdk/go/core"

	vs "github.com/voxgig-sdk/taxley-corporation-tax-sdk/go/utility/struct"
)

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const mileage_allowanceEntityLiveStrict = true


func TestMileageAllowanceEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.MileageAllowance(nil)
		if ent == nil {
			t.Fatal("expected non-nil MileageAllowanceEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.MileageAllowance(nil).Load(map[string]any{"business_mile": "x", "employer_payment": 1, "tax_year": "x", "vehicle": "x"}, nil)
		if sdkerr, ok := err.(*core.TaxleyCorporationTaxError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := mileage_allowanceBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "mileage_allowance." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		client := setup.client
		_ = client

		// CREATE
		mileageAllowanceRef01Ent := client.MileageAllowance(nil)
		mileageAllowanceRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "mileage_allowance"}), "mileage_allowance_ref01"))

		mileageAllowanceRef01DataResult, err := mileageAllowanceRef01Ent.Create(mileageAllowanceRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		mileageAllowanceRef01Data = core.ToMapAny(entityData(mileageAllowanceRef01DataResult))
		if mileageAllowanceRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LOAD
		mileageAllowanceRef01MatchDt0 := map[string]any{}
		mileageAllowanceRef01DataDt0Loaded, err := mileageAllowanceRef01Ent.Load(mileageAllowanceRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if mileageAllowanceRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func mileage_allowanceBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "mileage_allowance", "MileageAllowanceTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read mileage_allowance test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse mileage_allowance test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"mileage_allowance01", "mileage_allowance02", "mileage_allowance03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("TAXLEY_CORPORATION_TAX_TEST_MILEAGE_ALLOWANCE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TAXLEY_CORPORATION_TAX_TEST_MILEAGE_ALLOWANCE_ENTID": idmap,
		"TAXLEY_CORPORATION_TAX_TEST_LIVE":      "FALSE",
		"TAXLEY_CORPORATION_TAX_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["TAXLEY_CORPORATION_TAX_TEST_MILEAGE_ALLOWANCE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["TAXLEY_CORPORATION_TAX_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
			},
			extraOpts,
		})
		client = sdk.NewTaxleyCorporationTaxSDK(core.ToMapAny(mergedOpts))
	}

	live := env["TAXLEY_CORPORATION_TAX_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["TAXLEY_CORPORATION_TAX_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
