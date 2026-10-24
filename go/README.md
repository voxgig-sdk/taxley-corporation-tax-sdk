# TaxleyCorporationTax Golang SDK



The Golang SDK for the TaxleyCorporationTax API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.CapitalAllowance(nil)` — each with the same small set of operations (`Load`, `Create`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/taxley-corporation-tax-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Tags](https://github.com/voxgig-sdk/taxley-corporation-tax-sdk/tags) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/taxley-corporation-tax-sdk/go=../taxley-corporation-tax-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the entity, and for
`List` a `[]any` of entities, one per record (there is no `{ok, data}`
wrapper), so check `err` and read a record through the entity's
`Data()`.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/taxley-corporation-tax-sdk/go"
)

func main() {
    client := sdk.New()

    // Load a single capitalAllowance — the value is the entity; Data() reads its record.
    capitalAllowance, err := client.CapitalAllowance(nil).Load(map[string]any{"period_end": "example_period_end", "period_start": "example_period_start"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(capitalAllowance.(sdk.Entity).Data())

    // Create a capitalAllowance.
    created, err := client.CapitalAllowance(nil).Create(map[string]any{"period_end": "example_period_end", "period_start": "example_period_start"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created.(sdk.Entity).Data())
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
corporationtax, err := client.CorporationTax(nil).Load(map[string]any{"period_end": "example", "period_start": "example", "taxable_profit": 1}, nil)
if err != nil {
    // handle err
    return
}
_ = corporationtax
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

corporationTax, err := client.CorporationTax(nil).Load(
    map[string]any{"period_end": "example", "period_start": "example", "taxable_profit": 1}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(corporationTax.(sdk.Entity).Data()) // the entity's mock record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewTaxleyCorporationTaxSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
TAXLEY_CORPORATION_TAX_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewTaxleyCorporationTaxSDK

```go
func NewTaxleyCorporationTaxSDK(options map[string]any) *TaxleyCorporationTaxSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *TaxleyCorporationTaxSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### TaxleyCorporationTaxSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `CapitalAllowance` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a CapitalAllowance entity instance. |
| `ChargeableGain` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a ChargeableGain entity instance. |
| `CompanyCar` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a CompanyCar entity instance. |
| `CompanySize` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a CompanySize entity instance. |
| `CompanyVan` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a CompanyVan entity instance. |
| `CorporationTax` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a CorporationTax entity instance. |
| `Deadline` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a Deadline entity instance. |
| `DirectorPension` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a DirectorPension entity instance. |
| `DirectorsLoan` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a DirectorsLoan entity instance. |
| `DividendReserve` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a DividendReserve entity instance. |
| `HomeOffice` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a HomeOffice entity instance. |
| `LatePenalty` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a LatePenalty entity instance. |
| `LongPeriod` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a LongPeriod entity instance. |
| `MileageAllowance` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a MileageAllowance entity instance. |
| `SalaryDividend` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a SalaryDividend entity instance. |
| `SoleTraderVsLimited` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a SoleTraderVsLimited entity instance. |
| `Tool` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a Tool entity instance. |
| `TrivialBenefit` | `(data map[string]any) TaxleyCorporationTaxEntity` | Create a TrivialBenefit entity instance. |

### Entity interface (TaxleyCorporationTaxEntity)

All entities implement the `TaxleyCorporationTaxEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria, and return it. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity, and return it. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the entity
itself — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` | the entity, whose `Data()` reads its record (`map[string]any`) |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    capitalAllowance, err := client.CapitalAllowance(nil).Load(map[string]any{"period_end": "example", "period_start": "example"}, nil)
    if err != nil { /* handle */ }
    // capitalAllowance is the entity; capitalAllowance.(sdk.Entity).Data() reads its record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### CapitalAllowance

| Field | Description |
| --- | --- |
| `"aia_shared"` | Optional. |
| `"calculated_by"` |  |
| `"disclaimer"` |  |
| `"full_expensed_disposals"` | Sale proceeds of assets that had full expensing on their whole cost, sold this period. |
| `"input"` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `"main_pool_brought_forward"` | Main pool balance carried forward from the previous accounting period (0 if none). |
| `"main_pool_disposals"` | Sale proceeds of main pool assets sold this period that did NOT have full expensing (for example, assets that had the annual investment allowance or were pooled). |
| `"new_main_plant"` | Cost of new and unused plant, machinery, equipment and vans (not cars). |
| `"new_special_rate"` | Cost of new and unused integral features (electrical, lighting, heating, water, lifts, air conditioning), long-life assets, thermal insulation and solar panels. |
| `"other_cars_high_co2"` | Cost of cars with CO2 emissions over 50 g/km. |
| `"other_cars_low_co2"` | Cost of cars (other than new zero-emission cars) with CO2 emissions of 50 g/km or less. |
| `"page_url"` |  |
| `"period_end"` | Last day of the accounting period, as YYYY-MM-DD. |
| `"period_start"` | First day of the Corporation Tax accounting period, as YYYY-MM-DD. |
| `"result"` |  |
| `"share_url"` | A link to this result on taxley.co.uk. |
| `"special_pool_brought_forward"` | Special rate pool balance carried forward from the previous accounting period (0 if none). |
| `"spend_date"` | Optional. |
| `"tool"` |  |
| `"used_main_plant"` | Cost of second-hand main-rate plant, machinery, equipment and vans (not cars). |
| `"used_special_rate"` | Cost of second-hand integral features, long-life assets, thermal insulation and solar panels. |
| `"zero_emission_cars"` | Cost of new and unused cars with 0 g/km CO2 (fully electric). |

Operations: Create, Load.

API path: `/api/v1/tools/capital-allowances`

#### ChargeableGain

| Field | Description |
| --- | --- |
| `"acquisition_cost"` | What the company paid for the asset, in pounds. |
| `"acquisition_costs"` | Optional. |
| `"acquisition_date"` | When the company bought the asset (exchange of contracts), as YYYY-MM-DD. |
| `"asset_type"` | "land_buildings": UK land or buildings (the company's whole interest; a freehold or a lease with more than 50 years left). |
| `"calculated_by"` |  |
| `"disclaimer"` |  |
| `"disposal_costs"` | Optional. |
| `"disposal_date"` | When the company sold the asset (exchange of contracts), as YYYY-MM-DD. |
| `"enhancement_cost"` | Optional, land and buildings only. |
| `"enhancement_date"` | Optional, land and buildings only. |
| `"input"` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `"page_url"` |  |
| `"proceeds"` | What the company sold the asset for, in pounds. |
| `"result"` |  |
| `"sba_claimed"` | Optional, land and buildings only. |
| `"share_url"` | A link to this result on taxley.co.uk. |
| `"tool"` |  |

Operations: Create, Load.

API path: `/api/v1/tools/chargeable-gains`

#### CompanyCar

| Field | Description |
| --- | --- |
| `"acquisition"` | Optional. |
| `"annual_lease_cost"` | For "lease": the lease rentals the company pays in its year, in pounds, excluding VAT it can reclaim. |
| `"associated_companies"` | Optional, with company_profits. |
| `"calculated_by"` |  |
| `"capital_contribution"` | Optional. |
| `"co2_gkm"` | The car's approved CO2 emissions in g/km, from the V5C or certificate of conformity (WLTP for cars first registered from 6 April 2020, NEDC before; both give the same percentage in 2025/26 and 2026/27). |
| `"company_profits"` | Optional. |
| `"disclaimer"` |  |
| `"electric_range_miles"` | For a plug-in hybrid only: the zero-emission (electric) range in miles from the certificate of conformity, rounded up. |
| `"fuel_type"` | "electric" (fully electric or any car with 0 g/km CO2), "petrol" (petrol, or ANY hybrid, petrol or diesel, including plug-in hybrids: hybrids never pay the diesel supplement), "diesel_rde2" (a diesel-only car certified to Euro 6d, also… |
| `"income_tax_rate"` | The director's top rate of Income Tax including the benefit: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `"input"` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `"lease_started"` | Optional, for "lease": the date the hire period began, YYYY-MM-DD. |
| `"list_price"` | The car's list price when new, including VAT, delivery and any optional extras (the P11D price), in pounds. |
| `"months_available"` | Optional. |
| `"new_car"` | Optional, for "buy". |
| `"page_url"` |  |
| `"phev_easement"` | Optional. |
| `"price_paid"` | Optional, for "buy". |
| `"private_fuel"` | Optional. |
| `"result"` |  |
| `"share_url"` | A link to this result on taxley.co.uk. |
| `"tax_year"` | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `"tool"` |  |

Operations: Create, Load.

API path: `/api/v1/tools/company-car`

#### CompanySize

| Field | Description |
| --- | --- |
| `"balance_sheet_total"` | Balance sheet total: gross assets (fixed plus current assets, before liabilities) at the year end, in pounds. |
| `"calculated_by"` |  |
| `"disclaimer"` |  |
| `"employees"` | Average number of employees in the year (monthly headcounts added up, divided by the number of months). |
| `"first_year"` | True if this is the company's first financial year (then this year alone decides its size). |
| `"input"` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `"page_url"` |  |
| `"period_end"` | Last day of the financial year, YYYY-MM-DD. |
| `"period_start"` | First day of the financial year (accounts period), YYYY-MM-DD. |
| `"prev_balance_sheet_total"` | Optional: last year's balance sheet total (gross assets), in pounds. |
| `"prev_employees"` | Optional: last year's average number of employees. |
| `"prev_size"` | Optional: what the company qualified as last year — micro, small (not micro) or medium_or_large (not small). |
| `"prev_turnover"` | Optional: last financial year's turnover, in pounds (assumed a 12-month year). |
| `"result"` |  |
| `"share_url"` | A link to this result on taxley.co.uk. |
| `"tool"` |  |
| `"turnover"` | Turnover for the financial year, in pounds. |

Operations: Create, Load.

API path: `/api/v1/tools/company-size`

#### CompanyVan

| Field | Description |
| --- | --- |
| `"associated_companies"` | Optional, with company_profits. |
| `"calculated_by"` |  |
| `"company_profits"` | Optional. |
| `"disclaimer"` |  |
| `"income_tax_rate"` | The director's or employee's top rate of Income Tax: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `"input"` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `"months_available"` | Optional. |
| `"page_url"` |  |
| `"price_paid"` | Optional. |
| `"private_fuel"` | Optional. |
| `"result"` |  |
| `"share_url"` | A link to this result on taxley.co.uk. |
| `"tax_year"` | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `"tool"` |  |
| `"zero_emission"` | Optional. |

Operations: Create, Load.

API path: `/api/v1/tools/company-van`

#### CorporationTax

| Field | Description |
| --- | --- |
| `"associated_companies"` | How many other companies are associated with this one (under common control) in the period. |
| `"calculated_by"` |  |
| `"close_investment_holding"` | True if the company is a close investment-holding company in the period (CTA 2010 s.18N): a close company is one unless, throughout the period, it exists wholly or mainly to trade commercially, to let land to people not connected with it,… |
| `"disclaimer"` |  |
| `"exempt_distributions"` | Exempt dividends received from companies outside the company's 51% group (and not from a trading company owned by a consortium it belongs to) (CTA 2010 s.18L), in pounds, used only to decide the rate. |
| `"input"` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `"page_url"` |  |
| `"period_end"` | Last day of the accounting period, YYYY-MM-DD. |
| `"period_start"` | First day of the accounting period, YYYY-MM-DD (for example 2025-04-01). |
| `"result"` |  |
| `"share_url"` | A link to this result on taxley.co.uk. |
| `"taxable_profits"` | Taxable total profits for the period in pounds, after tax adjustments and reliefs (CT600 box 315). |
| `"tool"` |  |

Operations: Create, Load.

API path: `/api/v1/tools/corporation-tax`

#### Deadline

| Field | Description |
| --- | --- |
| `"calculated_by"` |  |
| `"disclaimer"` |  |
| `"input"` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `"page_url"` |  |
| `"period_end"` | The last day of the accounts period (the company's year end or accounting reference date), as YYYY-MM-DD. |
| `"period_start"` | Optional. |
| `"result"` |  |
| `"share_url"` | A link to this result on taxley.co.uk. |
| `"tool"` |  |

Operations: Create, Load.

API path: `/api/v1/tools/deadlines`

#### DirectorPension

| Field | Description |
| --- | --- |
| `"associated_companies"` | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `"calculated_by"` |  |
| `"company_profit"` | The company's taxable profit for its year before this contribution, after the director's existing salary and other costs, in pounds. |
| `"contribution"` | The amount the company would pay into the director's pension as an employer contribution, in pounds. |
| `"director_only_employee"` | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `"disclaimer"` |  |
| `"dividends"` | Dividends the director already takes this tax year, in pounds. |
| `"input"` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `"money_purchase_allowance"` | true if the director has already flexibly accessed a pension (for example taken cash from drawdown or an uncrystallised lump sum), so the £10,000 money purchase annual allowance applies. |
| `"other_income"` | The director's other taxable income for the tax year from outside the company, in pounds. |
| `"other_pension_contributions"` | Everything else paid into the director's pensions this tax year (their own contributions, before tax relief, and any other employer's), in pounds. |
| `"page_url"` |  |
| `"result"` |  |
| `"salary"` | The salary the director already takes from the company this tax year, in pounds. |
| `"scottish_taxpayer"` | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `"share_url"` | A link to this result on taxley.co.uk. |
| `"tax_year"` | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `"tool"` |  |

Operations: Create, Load.

API path: `/api/v1/tools/director-pension`

#### DirectorsLoan

| Field | Description |
| --- | --- |
| `"benefit_closing_balance"` | Maximum loan balance on 5 April at the end of the selected tax year, or when the loan ended, in pounds. |
| `"benefit_interest_paid"` | Interest the director was required to pay and actually paid for the selected tax year, in pounds. |
| `"benefit_maximum_balance"` | Highest total beneficial-loan balance at any time in the tax year, in pounds, used for the £10,000 exemption. |
| `"benefit_opening_balance"` | Maximum loan balance on 5 April before the selected tax year, or when the loan began, in pounds. |
| `"benefit_tax_year"` | Optional UK tax year for the beneficial-loan calculation: 2025-26 or 2026-27. |
| `"benefit_whole_months"` | Whole months the loan was outstanding in the selected tax year, from 1 to 12. |
| `"calculated_by"` |  |
| `"disclaimer"` |  |
| `"input"` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `"loan_made_on"` | Date the loan was made, YYYY-MM-DD, within the accounting period. |
| `"marginal_income_tax_rate"` | Director’s marginal Income Tax rate as a percentage, used only to estimate personal tax on the benefit. |
| `"outstanding"` | Loan balance the director or other participator owed the company at the period end, in pounds. |
| `"page_url"` |  |
| `"period_end"` | Last day of the company's Corporation Tax accounting period, YYYY-MM-DD. |
| `"repaid_within_9_months"` | Part of that balance repaid, released or written off after the period end and within 9 months of it (before the s.455 tax is due), in pounds. |
| `"result"` |  |
| `"share_url"` | A link to this result on taxley.co.uk. |
| `"tool"` |  |

Operations: Create, Load.

API path: `/api/v1/tools/directors-loan`

#### DividendReserve

| Field | Description |
| --- | --- |
| `"calculated_by"` |  |
| `"disclaimer"` |  |
| `"dividends_already_paid"` | Dividends already paid or declared from these profits, in pounds. |
| `"input"` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `"page_url"` |  |
| `"profit_after_tax"` | This period’s realised profit after Corporation Tax, in pounds. |
| `"proposed_dividend"` | Dividend now proposed, in pounds. |
| `"result"` |  |
| `"retained_profits_brought_forward"` | Accumulated retained profits or losses brought forward, in pounds. |
| `"share_url"` | A link to this result on taxley.co.uk. |
| `"tool"` |  |

Operations: Create, Load.

API path: `/api/v1/tools/dividend-reserves`

#### HomeOffice

| Field | Description |
| --- | --- |
| `"actual_additional_costs"` | Optional total reasonable additional household costs caused by working at home, in pounds, supported by records. |
| `"calculated_by"` |  |
| `"disclaimer"` |  |
| `"frequency"` | Whether to use HMRC’s £6 weekly rate or £26 monthly rate. |
| `"input"` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `"page_url"` |  |
| `"periods"` | Number of weeks or months of regular homeworking in the tax year; no more than 52 weeks or 12 months. |
| `"result"` |  |
| `"share_url"` | A link to this result on taxley.co.uk. |
| `"tax_year"` | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `"tool"` |  |

Operations: Create, Load.

API path: `/api/v1/tools/home-office`

#### LatePenalty

| Field | Description |
| --- | --- |
| `"calculated_by"` |  |
| `"disclaimer"` |  |
| `"filed_on"` | The date the CT600 was, or will be, filed with HMRC. |
| `"input"` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `"late_previous_two"` | True if the company was liable to a late filing penalty for each of its two previous accounting periods (consecutive, and within Corporation Tax throughout). |
| `"page_url"` |  |
| `"paid_on"` | The date the Corporation Tax was, or will be, paid in full. |
| `"period_end"` | Last day of the Corporation Tax accounting period the CT600 covers (YYYY-MM-DD), on or after 2015-04-01. |
| `"period_of_account_end"` | Only if the company's accounts cover more than 12 months (up to 18): the last day of that period of account, no more than 6 months after period_end. |
| `"result"` |  |
| `"share_url"` | A link to this result on taxley.co.uk. |
| `"tax_due"` | Corporation Tax payable for the accounting period, in pounds. |
| `"tool"` |  |

Operations: Create, Load.

API path: `/api/v1/tools/late-penalty`

#### LongPeriod

| Field | Description |
| --- | --- |
| `"calculated_by"` |  |
| `"disclaimer"` |  |
| `"first_accounts"` | Optional: true if these are the company's first accounts (sets the Companies House deadline). |
| `"input"` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `"page_url"` |  |
| `"period_end"` | Last day of the accounts, YYYY-MM-DD. |
| `"period_start"` | First day of the accounts (period of account), YYYY-MM-DD. |
| `"profit"` | Optional: trading profit for the whole period in pounds, to split by days. |
| `"result"` |  |
| `"share_url"` | A link to this result on taxley.co.uk. |
| `"tool"` |  |

Operations: Create, Load.

API path: `/api/v1/tools/long-period`

#### MileageAllowance

| Field | Description |
| --- | --- |
| `"business_miles"` | Total qualifying business miles in this vehicle category during the tax year. |
| `"calculated_by"` |  |
| `"disclaimer"` |  |
| `"employer_payment"` | Total mileage allowance paid by the company for those miles, in pounds. |
| `"input"` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `"page_url"` |  |
| `"result"` |  |
| `"share_url"` | A link to this result on taxley.co.uk. |
| `"tax_year"` | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `"tool"` |  |
| `"vehicle"` | The employee-owned vehicle used for business travel: car_van, motorcycle or bicycle. |

Operations: Create, Load.

API path: `/api/v1/tools/mileage-allowance`

#### SalaryDividend

| Field | Description |
| --- | --- |
| `"associated_companies"` | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `"calculated_by"` |  |
| `"company_profit"` | The company's profit for the year before paying the director any salary, after all its other costs, in pounds. |
| `"director_only_employee"` | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `"disclaimer"` |  |
| `"input"` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `"other_income"` | The director's other taxable income for the tax year from outside this company, such as another job, a pension or rental profit, in pounds. |
| `"page_url"` |  |
| `"result"` |  |
| `"salary"` | Optional: a salary you want to compare with the standard options, in pounds a year. |
| `"scottish_taxpayer"` | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `"share_url"` | A link to this result on taxley.co.uk. |
| `"tax_year"` | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `"tool"` |  |

Operations: Create, Load.

API path: `/api/v1/tools/salary-dividends`

#### SoleTraderVsLimited

| Field | Description |
| --- | --- |
| `"calculated_by"` |  |
| `"director_only_employee"` | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `"disclaimer"` |  |
| `"input"` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `"other_income"` | The owner's other taxable income for the tax year, such as a job, a pension or rental profit, in pounds. |
| `"page_url"` |  |
| `"profit"` | The business's profit for the year, after expenses and before any tax or pay to the owner, in pounds. |
| `"result"` |  |
| `"scottish_taxpayer"` | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `"share_url"` | A link to this result on taxley.co.uk. |
| `"tax_year"` | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `"tool"` |  |

Operations: Create, Load.

API path: `/api/v1/tools/sole-trader-vs-limited`

#### Tool

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/v1/tools`

#### TrivialBenefit

| Field | Description |
| --- | --- |
| `"benefit_cost"` | Cost to the company of this individual benefit, in pounds. |
| `"calculated_by"` |  |
| `"cash_or_cash_voucher"` | True if the benefit is cash or a voucher exchangeable for cash. |
| `"close_company_director"` | True if the recipient is a director or office holder of a close company. |
| `"disclaimer"` |  |
| `"in_contract"` | True if the benefit is promised in the employment contract or other contractual terms. |
| `"input"` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `"page_url"` |  |
| `"qualifying_benefits_so_far"` | For a close-company director, total cost in pounds of earlier qualifying trivial benefits from this employer in the tax year. |
| `"result"` |  |
| `"reward_for_work"` | True if the benefit rewards the employee’s work or performance. |
| `"share_url"` | A link to this result on taxley.co.uk. |
| `"tax_year"` | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `"tool"` |  |

Operations: Create, Load.

API path: `/api/v1/tools/trivial-benefits`



## Entities


### CapitalAllowance

Create an instance: `capitalAllowance := client.CapitalAllowance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aia_shared` | `float64` | Optional. |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `full_expensed_disposals` | `float64` | Sale proceeds of assets that had full expensing on their whole cost, sold this period. |
| `input` | `map[string]any` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `main_pool_brought_forward` | `float64` | Main pool balance carried forward from the previous accounting period (0 if none). |
| `main_pool_disposals` | `float64` | Sale proceeds of main pool assets sold this period that did NOT have full expensing (for example, assets that had the annual investment allowance or were pooled). |
| `new_main_plant` | `float64` | Cost of new and unused plant, machinery, equipment and vans (not cars). |
| `new_special_rate` | `float64` | Cost of new and unused integral features (electrical, lighting, heating, water, lifts, air conditioning), long-life assets, thermal insulation and solar panels. |
| `other_cars_high_co2` | `float64` | Cost of cars with CO2 emissions over 50 g/km. |
| `other_cars_low_co2` | `float64` | Cost of cars (other than new zero-emission cars) with CO2 emissions of 50 g/km or less. |
| `page_url` | `string` |  |
| `period_end` | `string` | Last day of the accounting period, as YYYY-MM-DD. |
| `period_start` | `string` | First day of the Corporation Tax accounting period, as YYYY-MM-DD. |
| `result` | `map[string]any` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `special_pool_brought_forward` | `float64` | Special rate pool balance carried forward from the previous accounting period (0 if none). |
| `spend_date` | `string` | Optional. |
| `tool` | `string` |  |
| `used_main_plant` | `float64` | Cost of second-hand main-rate plant, machinery, equipment and vans (not cars). |
| `used_special_rate` | `float64` | Cost of second-hand integral features, long-life assets, thermal insulation and solar panels. |
| `zero_emission_cars` | `float64` | Cost of new and unused cars with 0 g/km CO2 (fully electric). |

#### Example: Load

```go
capitalAllowance, err := client.CapitalAllowance(nil).Load(map[string]any{"period_end": "period_end", "period_start": "period_start"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(capitalAllowance.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.CapitalAllowance(nil).Create(map[string]any{
    "period_end": "example_period_end",
    "period_start": "example_period_start",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ChargeableGain

Create an instance: `chargeableGain := client.ChargeableGain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acquisition_cost` | `float64` | What the company paid for the asset, in pounds. |
| `acquisition_costs` | `float64` | Optional. |
| `acquisition_date` | `string` | When the company bought the asset (exchange of contracts), as YYYY-MM-DD. |
| `asset_type` | `string` | "land_buildings": UK land or buildings (the company's whole interest; a freehold or a lease with more than 50 years left). |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `disposal_costs` | `float64` | Optional. |
| `disposal_date` | `string` | When the company sold the asset (exchange of contracts), as YYYY-MM-DD. |
| `enhancement_cost` | `float64` | Optional, land and buildings only. |
| `enhancement_date` | `string` | Optional, land and buildings only. |
| `input` | `map[string]any` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `proceeds` | `float64` | What the company sold the asset for, in pounds. |
| `result` | `map[string]any` |  |
| `sba_claimed` | `float64` | Optional, land and buildings only. |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tool` | `string` |  |

#### Example: Load

```go
chargeableGain, err := client.ChargeableGain(nil).Load(map[string]any{"acquisition_date": "acquisition_date", "asset_type": "asset_type", "disposal_date": "disposal_date", "proceed": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(chargeableGain.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.ChargeableGain(nil).Create(map[string]any{
    "acquisition_cost": 1,
    "acquisition_date": "example_acquisition_date",
    "asset_type": "example_asset_type",
    "disposal_date": "example_disposal_date",
    "proceeds": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CompanyCar

Create an instance: `companyCar := client.CompanyCar(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acquisition` | `string` | Optional. |
| `annual_lease_cost` | `float64` | For "lease": the lease rentals the company pays in its year, in pounds, excluding VAT it can reclaim. |
| `associated_companies` | `int` | Optional, with company_profits. |
| `calculated_by` | `string` |  |
| `capital_contribution` | `float64` | Optional. |
| `co2_gkm` | `int` | The car's approved CO2 emissions in g/km, from the V5C or certificate of conformity (WLTP for cars first registered from 6 April 2020, NEDC before; both give the same percentage in 2025/26 and 2026/27). |
| `company_profits` | `float64` | Optional. |
| `disclaimer` | `string` |  |
| `electric_range_miles` | `int` | For a plug-in hybrid only: the zero-emission (electric) range in miles from the certificate of conformity, rounded up. |
| `fuel_type` | `string` | "electric" (fully electric or any car with 0 g/km CO2), "petrol" (petrol, or ANY hybrid, petrol or diesel, including plug-in hybrids: hybrids never pay the diesel supplement), "diesel_rde2" (a diesel-only car certified to Euro 6d, also… |
| `income_tax_rate` | `string` | The director's top rate of Income Tax including the benefit: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | `map[string]any` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `lease_started` | `string` | Optional, for "lease": the date the hire period began, YYYY-MM-DD. |
| `list_price` | `float64` | The car's list price when new, including VAT, delivery and any optional extras (the P11D price), in pounds. |
| `months_available` | `int` | Optional. |
| `new_car` | `bool` | Optional, for "buy". |
| `page_url` | `string` |  |
| `phev_easement` | `bool` | Optional. |
| `price_paid` | `float64` | Optional, for "buy". |
| `private_fuel` | `bool` | Optional. |
| `result` | `map[string]any` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` | `string` |  |

#### Example: Load

```go
companyCar, err := client.CompanyCar(nil).Load(map[string]any{"fuel_type": "fuel_type", "income_tax_rate": "income_tax_rate", "list_price": 1, "tax_year": "tax_year"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(companyCar.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.CompanyCar(nil).Create(map[string]any{
    "fuel_type": "example_fuel_type",
    "income_tax_rate": "example_income_tax_rate",
    "list_price": 1,
    "tax_year": "example_tax_year",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CompanySize

Create an instance: `companySize := client.CompanySize(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `balance_sheet_total` | `float64` | Balance sheet total: gross assets (fixed plus current assets, before liabilities) at the year end, in pounds. |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `employees` | `float64` | Average number of employees in the year (monthly headcounts added up, divided by the number of months). |
| `first_year` | `bool` | True if this is the company's first financial year (then this year alone decides its size). |
| `input` | `map[string]any` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `period_end` | `string` | Last day of the financial year, YYYY-MM-DD. |
| `period_start` | `string` | First day of the financial year (accounts period), YYYY-MM-DD. |
| `prev_balance_sheet_total` | `float64` | Optional: last year's balance sheet total (gross assets), in pounds. |
| `prev_employees` | `float64` | Optional: last year's average number of employees. |
| `prev_size` | `string` | Optional: what the company qualified as last year — micro, small (not micro) or medium_or_large (not small). |
| `prev_turnover` | `float64` | Optional: last financial year's turnover, in pounds (assumed a 12-month year). |
| `result` | `map[string]any` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tool` | `string` |  |
| `turnover` | `float64` | Turnover for the financial year, in pounds. |

#### Example: Load

```go
companySize, err := client.CompanySize(nil).Load(map[string]any{"balance_sheet_total": 1, "employee": 1, "period_end": "period_end", "period_start": "period_start", "turnover": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(companySize.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.CompanySize(nil).Create(map[string]any{
    "balance_sheet_total": 1,
    "employees": 1,
    "period_end": "example_period_end",
    "period_start": "example_period_start",
    "turnover": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CompanyVan

Create an instance: `companyVan := client.CompanyVan(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_companies` | `int` | Optional, with company_profits. |
| `calculated_by` | `string` |  |
| `company_profits` | `float64` | Optional. |
| `disclaimer` | `string` |  |
| `income_tax_rate` | `string` | The director's or employee's top rate of Income Tax: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | `map[string]any` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `months_available` | `int` | Optional. |
| `page_url` | `string` |  |
| `price_paid` | `float64` | Optional. |
| `private_fuel` | `bool` | Optional. |
| `result` | `map[string]any` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` | `string` |  |
| `zero_emission` | `bool` | Optional. |

#### Example: Load

```go
companyVan, err := client.CompanyVan(nil).Load(map[string]any{"income_tax_rate": "income_tax_rate", "tax_year": "tax_year"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(companyVan.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.CompanyVan(nil).Create(map[string]any{
    "income_tax_rate": "example_income_tax_rate",
    "tax_year": "example_tax_year",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CorporationTax

Create an instance: `corporationTax := client.CorporationTax(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_companies` | `int` | How many other companies are associated with this one (under common control) in the period. |
| `calculated_by` | `string` |  |
| `close_investment_holding` | `bool` | True if the company is a close investment-holding company in the period (CTA 2010 s.18N): a close company is one unless, throughout the period, it exists wholly or mainly to trade commercially, to let land to people not connected with it,… |
| `disclaimer` | `string` |  |
| `exempt_distributions` | `float64` | Exempt dividends received from companies outside the company's 51% group (and not from a trading company owned by a consortium it belongs to) (CTA 2010 s.18L), in pounds, used only to decide the rate. |
| `input` | `map[string]any` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `period_end` | `string` | Last day of the accounting period, YYYY-MM-DD. |
| `period_start` | `string` | First day of the accounting period, YYYY-MM-DD (for example 2025-04-01). |
| `result` | `map[string]any` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `taxable_profits` | `float64` | Taxable total profits for the period in pounds, after tax adjustments and reliefs (CT600 box 315). |
| `tool` | `string` |  |

#### Example: Load

```go
corporationTax, err := client.CorporationTax(nil).Load(map[string]any{"period_end": "period_end", "period_start": "period_start", "taxable_profit": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(corporationTax.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.CorporationTax(nil).Create(map[string]any{
    "period_end": "example_period_end",
    "period_start": "example_period_start",
    "taxable_profits": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Deadline

Create an instance: `deadline := client.Deadline(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `input` | `map[string]any` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `period_end` | `string` | The last day of the accounts period (the company's year end or accounting reference date), as YYYY-MM-DD. |
| `period_start` | `string` | Optional. |
| `result` | `map[string]any` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tool` | `string` |  |

#### Example: Load

```go
deadline, err := client.Deadline(nil).Load(map[string]any{"period_end": "period_end"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(deadline.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.Deadline(nil).Create(map[string]any{
    "period_end": "example_period_end",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### DirectorPension

Create an instance: `directorPension := client.DirectorPension(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_companies` | `int` | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` | `string` |  |
| `company_profit` | `float64` | The company's taxable profit for its year before this contribution, after the director's existing salary and other costs, in pounds. |
| `contribution` | `float64` | The amount the company would pay into the director's pension as an employer contribution, in pounds. |
| `director_only_employee` | `bool` | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `string` |  |
| `dividends` | `float64` | Dividends the director already takes this tax year, in pounds. |
| `input` | `map[string]any` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `money_purchase_allowance` | `bool` | true if the director has already flexibly accessed a pension (for example taken cash from drawdown or an uncrystallised lump sum), so the £10,000 money purchase annual allowance applies. |
| `other_income` | `float64` | The director's other taxable income for the tax year from outside the company, in pounds. |
| `other_pension_contributions` | `float64` | Everything else paid into the director's pensions this tax year (their own contributions, before tax relief, and any other employer's), in pounds. |
| `page_url` | `string` |  |
| `result` | `map[string]any` |  |
| `salary` | `float64` | The salary the director already takes from the company this tax year, in pounds. |
| `scottish_taxpayer` | `bool` | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `string` |  |

#### Example: Load

```go
directorPension, err := client.DirectorPension(nil).Load(map[string]any{"company_profit": 1, "contribution": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(directorPension.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.DirectorPension(nil).Create(map[string]any{
    "company_profit": 1,
    "contribution": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### DirectorsLoan

Create an instance: `directorsLoan := client.DirectorsLoan(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `benefit_closing_balance` | `float64` | Maximum loan balance on 5 April at the end of the selected tax year, or when the loan ended, in pounds. |
| `benefit_interest_paid` | `float64` | Interest the director was required to pay and actually paid for the selected tax year, in pounds. |
| `benefit_maximum_balance` | `float64` | Highest total beneficial-loan balance at any time in the tax year, in pounds, used for the £10,000 exemption. |
| `benefit_opening_balance` | `float64` | Maximum loan balance on 5 April before the selected tax year, or when the loan began, in pounds. |
| `benefit_tax_year` | `string` | Optional UK tax year for the beneficial-loan calculation: 2025-26 or 2026-27. |
| `benefit_whole_months` | `int` | Whole months the loan was outstanding in the selected tax year, from 1 to 12. |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `input` | `map[string]any` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `loan_made_on` | `string` | Date the loan was made, YYYY-MM-DD, within the accounting period. |
| `marginal_income_tax_rate` | `float64` | Director’s marginal Income Tax rate as a percentage, used only to estimate personal tax on the benefit. |
| `outstanding` | `float64` | Loan balance the director or other participator owed the company at the period end, in pounds. |
| `page_url` | `string` |  |
| `period_end` | `string` | Last day of the company's Corporation Tax accounting period, YYYY-MM-DD. |
| `repaid_within_9_months` | `float64` | Part of that balance repaid, released or written off after the period end and within 9 months of it (before the s.455 tax is due), in pounds. |
| `result` | `map[string]any` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tool` | `string` |  |

#### Example: Load

```go
directorsLoan, err := client.DirectorsLoan(nil).Load(map[string]any{"outstanding": 1, "period_end": "period_end"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(directorsLoan.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.DirectorsLoan(nil).Create(map[string]any{
    "outstanding": 1,
    "period_end": "example_period_end",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### DividendReserve

Create an instance: `dividendReserve := client.DividendReserve(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `dividends_already_paid` | `float64` | Dividends already paid or declared from these profits, in pounds. |
| `input` | `map[string]any` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `profit_after_tax` | `float64` | This period’s realised profit after Corporation Tax, in pounds. |
| `proposed_dividend` | `float64` | Dividend now proposed, in pounds. |
| `result` | `map[string]any` |  |
| `retained_profits_brought_forward` | `float64` | Accumulated retained profits or losses brought forward, in pounds. |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tool` | `string` |  |

#### Example: Load

```go
dividendReserve, err := client.DividendReserve(nil).Load(map[string]any{"dividends_already_paid": 1, "profit_after_tax": 1, "proposed_dividend": 1, "retained_profits_brought_forward": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dividendReserve.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.DividendReserve(nil).Create(map[string]any{
    "dividends_already_paid": 1,
    "profit_after_tax": 1,
    "proposed_dividend": 1,
    "retained_profits_brought_forward": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### HomeOffice

Create an instance: `homeOffice := client.HomeOffice(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actual_additional_costs` | `float64` | Optional total reasonable additional household costs caused by working at home, in pounds, supported by records. |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `frequency` | `string` | Whether to use HMRC’s £6 weekly rate or £26 monthly rate. |
| `input` | `map[string]any` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `periods` | `int` | Number of weeks or months of regular homeworking in the tax year; no more than 52 weeks or 12 months. |
| `result` | `map[string]any` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `string` |  |

#### Example: Load

```go
homeOffice, err := client.HomeOffice(nil).Load(map[string]any{"frequency": "frequency", "period": 1, "tax_year": "tax_year"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(homeOffice.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.HomeOffice(nil).Create(map[string]any{
    "frequency": "example_frequency",
    "periods": 1,
    "tax_year": "example_tax_year",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### LatePenalty

Create an instance: `latePenalty := client.LatePenalty(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `filed_on` | `string` | The date the CT600 was, or will be, filed with HMRC. |
| `input` | `map[string]any` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `late_previous_two` | `bool` | True if the company was liable to a late filing penalty for each of its two previous accounting periods (consecutive, and within Corporation Tax throughout). |
| `page_url` | `string` |  |
| `paid_on` | `string` | The date the Corporation Tax was, or will be, paid in full. |
| `period_end` | `string` | Last day of the Corporation Tax accounting period the CT600 covers (YYYY-MM-DD), on or after 2015-04-01. |
| `period_of_account_end` | `string` | Only if the company's accounts cover more than 12 months (up to 18): the last day of that period of account, no more than 6 months after period_end. |
| `result` | `map[string]any` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_due` | `float64` | Corporation Tax payable for the accounting period, in pounds. |
| `tool` | `string` |  |

#### Example: Load

```go
latePenalty, err := client.LatePenalty(nil).Load(map[string]any{"filed_on": "filed_on", "period_end": "period_end"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(latePenalty.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.LatePenalty(nil).Create(map[string]any{
    "filed_on": "example_filed_on",
    "period_end": "example_period_end",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### LongPeriod

Create an instance: `longPeriod := client.LongPeriod(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `first_accounts` | `bool` | Optional: true if these are the company's first accounts (sets the Companies House deadline). |
| `input` | `map[string]any` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `period_end` | `string` | Last day of the accounts, YYYY-MM-DD. |
| `period_start` | `string` | First day of the accounts (period of account), YYYY-MM-DD. |
| `profit` | `float64` | Optional: trading profit for the whole period in pounds, to split by days. |
| `result` | `map[string]any` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tool` | `string` |  |

#### Example: Load

```go
longPeriod, err := client.LongPeriod(nil).Load(map[string]any{"period_end": "period_end", "period_start": "period_start"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(longPeriod.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.LongPeriod(nil).Create(map[string]any{
    "period_end": "example_period_end",
    "period_start": "example_period_start",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### MileageAllowance

Create an instance: `mileageAllowance := client.MileageAllowance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_miles` | `int` | Total qualifying business miles in this vehicle category during the tax year. |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `employer_payment` | `float64` | Total mileage allowance paid by the company for those miles, in pounds. |
| `input` | `map[string]any` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `result` | `map[string]any` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `string` |  |
| `vehicle` | `string` | The employee-owned vehicle used for business travel: car_van, motorcycle or bicycle. |

#### Example: Load

```go
mileageAllowance, err := client.MileageAllowance(nil).Load(map[string]any{"business_mile": 1, "employer_payment": 1, "tax_year": "tax_year", "vehicle": "vehicle"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(mileageAllowance.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.MileageAllowance(nil).Create(map[string]any{
    "business_miles": 1,
    "employer_payment": 1,
    "tax_year": "example_tax_year",
    "vehicle": "example_vehicle",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### SalaryDividend

Create an instance: `salaryDividend := client.SalaryDividend(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_companies` | `int` | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` | `string` |  |
| `company_profit` | `float64` | The company's profit for the year before paying the director any salary, after all its other costs, in pounds. |
| `director_only_employee` | `bool` | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `string` |  |
| `input` | `map[string]any` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | `float64` | The director's other taxable income for the tax year from outside this company, such as another job, a pension or rental profit, in pounds. |
| `page_url` | `string` |  |
| `result` | `map[string]any` |  |
| `salary` | `float64` | Optional: a salary you want to compare with the standard options, in pounds a year. |
| `scottish_taxpayer` | `bool` | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `string` |  |

#### Example: Load

```go
salaryDividend, err := client.SalaryDividend(nil).Load(map[string]any{"company_profit": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(salaryDividend.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.SalaryDividend(nil).Create(map[string]any{
    "company_profit": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### SoleTraderVsLimited

Create an instance: `soleTraderVsLimited := client.SoleTraderVsLimited(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calculated_by` | `string` |  |
| `director_only_employee` | `bool` | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `string` |  |
| `input` | `map[string]any` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | `float64` | The owner's other taxable income for the tax year, such as a job, a pension or rental profit, in pounds. |
| `page_url` | `string` |  |
| `profit` | `float64` | The business's profit for the year, after expenses and before any tax or pay to the owner, in pounds. |
| `result` | `map[string]any` |  |
| `scottish_taxpayer` | `bool` | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `string` |  |

#### Example: Load

```go
soleTraderVsLimited, err := client.SoleTraderVsLimited(nil).Load(map[string]any{"profit": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(soleTraderVsLimited.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.SoleTraderVsLimited(nil).Create(map[string]any{
    "profit": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Tool

Create an instance: `tool := client.Tool(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
tool, err := client.Tool(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tool.(sdk.Entity).Data()) // the loaded entity's record
```


### TrivialBenefit

Create an instance: `trivialBenefit := client.TrivialBenefit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `benefit_cost` | `float64` | Cost to the company of this individual benefit, in pounds. |
| `calculated_by` | `string` |  |
| `cash_or_cash_voucher` | `bool` | True if the benefit is cash or a voucher exchangeable for cash. |
| `close_company_director` | `bool` | True if the recipient is a director or office holder of a close company. |
| `disclaimer` | `string` |  |
| `in_contract` | `bool` | True if the benefit is promised in the employment contract or other contractual terms. |
| `input` | `map[string]any` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `qualifying_benefits_so_far` | `float64` | For a close-company director, total cost in pounds of earlier qualifying trivial benefits from this employer in the tax year. |
| `result` | `map[string]any` |  |
| `reward_for_work` | `bool` | True if the benefit rewards the employee’s work or performance. |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `string` |  |

#### Example: Load

```go
trivialBenefit, err := client.TrivialBenefit(nil).Load(map[string]any{"benefit_cost": 1, "cash_or_cash_voucher": true, "close_company_director": true, "in_contract": true, "qualifying_benefits_so_far": 1, "reward_for_work": true, "tax_year": "tax_year"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(trivialBenefit.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.TrivialBenefit(nil).Create(map[string]any{
    "benefit_cost": 1,
    "cash_or_cash_voucher": true,
    "close_company_director": true,
    "in_contract": true,
    "qualifying_benefits_so_far": 1,
    "reward_for_work": true,
    "tax_year": "example_tax_year",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Rate limiting.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Retry.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

An operation returns the entity, and its `Data()` returns the record. Use
`core.ToMapAny()` to safely cast that record, or data nested in it, to
`map[string]any`: it returns `nil` for anything else, an entity included.

### Package structure

```
github.com/voxgig-sdk/taxley-corporation-tax-sdk/go/
├── taxley-corporation-tax.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/taxley-corporation-tax-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
corporationtax := client.CorporationTax(nil)
corporationtax.Load(map[string]any{"period_end": "example", "period_start": "example", "taxable_profit": 1}, nil)

// corporationtax.Data() now returns the corporationtax data from the last load
// corporationtax.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
