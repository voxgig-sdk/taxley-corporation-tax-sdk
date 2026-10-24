package sdktest

import (
	"encoding/json"
	"os"
	"strings"
	"testing"

	sdk "github.com/voxgig-sdk/taxley-corporation-tax-sdk/go"
	"github.com/voxgig-sdk/taxley-corporation-tax-sdk/go/core"
)

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const company_sizeDirectLiveStrict = true

func TestCompanySizeDirect(t *testing.T) {
	t.Run("direct-load-company_size", func(t *testing.T) {
		setup := company_sizeDirectSetup(map[string]any{"id": "direct01"})
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		if _shouldSkip, _reason := isControlSkipped("direct", "direct-load-company_size", _mode); _shouldSkip {
			if _reason == "" {
				_reason = "skipped via sdk-test-control.json"
			}
			t.Skip(_reason)
			return
		}
		client := setup.client

		params := map[string]any{}
		query := map[string]any{}
		if setup.live {
			query["balance_sheet_total"] = 420000
			query["employee"] = 6
			query["period_end"] = "2026-04-30"
			query["period_start"] = "2025-05-01"
			query["turnover"] = 850000
		}

		result, err := client.Direct(map[string]any{
			"path":   "api/v1/tools/company-size",
			"method": "GET",
			"params": params,
			"query":  query,
		})
		if setup.live {
			if err != nil {
				liveMiss(t, company_sizeDirectLiveStrict, "Live load failed: %v", err)
			}
			if status := core.ToInt(result["status"]); result["ok"] != true || status < 200 || status >= 300 {
				liveMiss(t, company_sizeDirectLiveStrict, "Live load failed: %s", liveDescribe(result))
			}
			if result["data"] == nil {
				liveMiss(t, company_sizeDirectLiveStrict, "Live load returned no data: %s", liveDescribe(result))
			}
		} else {
			if err != nil {
				t.Fatalf("direct failed: %v", err)
			}
			if result["ok"] != true {
				t.Fatalf("expected ok to be true, got %v", result["ok"])
			}
			if core.ToInt(result["status"]) != 200 {
				t.Fatalf("expected status 200, got %v", result["status"])
			}
			if result["data"] == nil {
				t.Fatal("expected data to be non-nil")
			}
		}

		if !setup.live {
			if dataMap, ok := result["data"].(map[string]any); ok {
				if dataMap["id"] != "direct01" {
					t.Fatalf("expected data.id to be direct01, got %v", dataMap["id"])
				}
			}

			if len(*setup.calls) != 1 {
				t.Fatalf("expected 1 call, got %d", len(*setup.calls))
			}
			call := (*setup.calls)[0]
			if initMap, ok := call["init"].(map[string]any); ok {
				if initMap["method"] != "GET" {
					t.Fatalf("expected method GET, got %v", initMap["method"])
				}
			}
			if _, ok := call["url"].(string); ok {
			}
		}
	})

}

type company_sizeDirectSetupResult struct {
	client *sdk.TaxleyCorporationTaxSDK
	calls  *[]map[string]any
	live   bool
	idmap  map[string]any
}

func company_sizeDirectSetup(mockres any) *company_sizeDirectSetupResult {
	loadEnvLocal()

	calls := &[]map[string]any{}

	env := envOverride(map[string]any{
		"TAXLEY_CORPORATION_TAX_TEST_COMPANY_SIZE_ENTID": map[string]any{},
		"TAXLEY_CORPORATION_TAX_TEST_LIVE":    "FALSE",
	})

	live := env["TAXLEY_CORPORATION_TAX_TEST_LIVE"] == "TRUE"

	if live {
		// sdk-test-control.json's test.client.options seeds the live
		// client; the generated fields below overwrite anything they name.
		mergedOpts := map[string]any{}
		for k, v := range liveClientOptions() {
			mergedOpts[k] = v
		}
		for k, v := range map[string]any{
		} {
			mergedOpts[k] = v
		}
		client := sdk.NewTaxleyCorporationTaxSDK(mergedOpts)

		idmap := map[string]any{}
		if entidRaw, ok := env["TAXLEY_CORPORATION_TAX_TEST_COMPANY_SIZE_ENTID"]; ok {
			if entidStr, ok := entidRaw.(string); ok && strings.HasPrefix(entidStr, "{") {
				json.Unmarshal([]byte(entidStr), &idmap)
			} else if entidMap, ok := entidRaw.(map[string]any); ok {
				idmap = entidMap
			}
		}

		return &company_sizeDirectSetupResult{client: client, calls: calls, live: true, idmap: idmap}
	}

	mockFetch := func(url string, init map[string]any) (map[string]any, error) {
		*calls = append(*calls, map[string]any{"url": url, "init": init})
		return map[string]any{
			"status":     200,
			"statusText": "OK",
			"headers":    map[string]any{},
			"json": (func() any)(func() any {
				if mockres != nil {
					return mockres
				}
				return map[string]any{"id": "direct01"}
			}),
		}, nil
	}

	client := sdk.NewTaxleyCorporationTaxSDK(map[string]any{
		"base": "http://localhost:8080",
		"system": map[string]any{
			"fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
		},
	})

	return &company_sizeDirectSetupResult{client: client, calls: calls, live: false, idmap: map[string]any{}}
}

var _ = os.Getenv
var _ = json.Unmarshal
