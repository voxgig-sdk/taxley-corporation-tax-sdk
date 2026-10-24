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
const long_periodEntityLiveStrict = true


func TestLongPeriodEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.LongPeriod(nil)
		if ent == nil {
			t.Fatal("expected non-nil LongPeriodEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.LongPeriod(nil).Load(map[string]any{"first_account": "x", "period_end": "x", "period_start": "x"}, nil)
		if sdkerr, ok := err.(*core.TaxleyCorporationTaxError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := long_periodBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "long_period." + _op, _mode); _shouldSkip {
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
		longPeriodRef01Ent := client.LongPeriod(nil)
		longPeriodRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "long_period"}), "long_period_ref01"))

		longPeriodRef01DataResult, err := longPeriodRef01Ent.Create(longPeriodRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		longPeriodRef01Data = core.ToMapAny(entityData(longPeriodRef01DataResult))
		if longPeriodRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LOAD
		longPeriodRef01MatchDt0 := map[string]any{}
		longPeriodRef01DataDt0Loaded, err := longPeriodRef01Ent.Load(longPeriodRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if longPeriodRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func long_periodBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "long_period", "LongPeriodTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read long_period test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse long_period test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"long_period01", "long_period02", "long_period03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("TAXLEY_CORPORATION_TAX_TEST_LONG_PERIOD_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TAXLEY_CORPORATION_TAX_TEST_LONG_PERIOD_ENTID": idmap,
		"TAXLEY_CORPORATION_TAX_TEST_LIVE":      "FALSE",
		"TAXLEY_CORPORATION_TAX_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["TAXLEY_CORPORATION_TAX_TEST_LONG_PERIOD_ENTID"])
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
