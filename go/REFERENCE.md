# TaxleyCorporationTax Golang SDK Reference

Complete API reference for the TaxleyCorporationTax Golang SDK.


## TaxleyCorporationTaxSDK

### Constructor

```go
func NewTaxleyCorporationTaxSDK(options map[string]any) *TaxleyCorporationTaxSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *TaxleyCorporationTaxSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *TaxleyCorporationTaxSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `CapitalAllowance(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `CapitalAllowance` entity instance. Pass `nil` for no initial data.

#### `ChargeableGain(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `ChargeableGain` entity instance. Pass `nil` for no initial data.

#### `CompanyCar(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `CompanyCar` entity instance. Pass `nil` for no initial data.

#### `CompanySize(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `CompanySize` entity instance. Pass `nil` for no initial data.

#### `CompanyVan(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `CompanyVan` entity instance. Pass `nil` for no initial data.

#### `CorporationTax(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `CorporationTax` entity instance. Pass `nil` for no initial data.

#### `Deadline(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `Deadline` entity instance. Pass `nil` for no initial data.

#### `DirectorPension(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `DirectorPension` entity instance. Pass `nil` for no initial data.

#### `DirectorsLoan(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `DirectorsLoan` entity instance. Pass `nil` for no initial data.

#### `DividendReserve(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `DividendReserve` entity instance. Pass `nil` for no initial data.

#### `HomeOffice(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `HomeOffice` entity instance. Pass `nil` for no initial data.

#### `LatePenalty(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `LatePenalty` entity instance. Pass `nil` for no initial data.

#### `LongPeriod(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `LongPeriod` entity instance. Pass `nil` for no initial data.

#### `MileageAllowance(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `MileageAllowance` entity instance. Pass `nil` for no initial data.

#### `SalaryDividend(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `SalaryDividend` entity instance. Pass `nil` for no initial data.

#### `SoleTraderVsLimited(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `SoleTraderVsLimited` entity instance. Pass `nil` for no initial data.

#### `Tool(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `Tool` entity instance. Pass `nil` for no initial data.

#### `TrivialBenefit(data map[string]any) TaxleyCorporationTaxEntity`

Create a new `TrivialBenefit` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## CapitalAllowanceEntity

```go
capitalAllowance := client.CapitalAllowance(nil)
fmt.Println(capitalAllowance.GetName()) // "capital_allowance"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aia_shared` | `float64` | No | Optional. |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `full_expensed_disposals` | `float64` | No | Sale proceeds of assets that had full expensing on their whole cost, sold this period. |
| `input` | `map[string]any` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `main_pool_brought_forward` | `float64` | No | Main pool balance carried forward from the previous accounting period (0 if none). |
| `main_pool_disposals` | `float64` | No | Sale proceeds of main pool assets sold this period that did NOT have full expensing (for example, assets that had the annual investment allowance or were pooled). |
| `new_main_plant` | `float64` | No | Cost of new and unused plant, machinery, equipment and vans (not cars). |
| `new_special_rate` | `float64` | No | Cost of new and unused integral features (electrical, lighting, heating, water, lifts, air conditioning), long-life assets, thermal insulation and solar panels. |
| `other_cars_high_co2` | `float64` | No | Cost of cars with CO2 emissions over 50 g/km. |
| `other_cars_low_co2` | `float64` | No | Cost of cars (other than new zero-emission cars) with CO2 emissions of 50 g/km or less. |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | Last day of the accounting period, as YYYY-MM-DD. |
| `period_start` | `string` | Yes | First day of the Corporation Tax accounting period, as YYYY-MM-DD. |
| `result` | `map[string]any` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `special_pool_brought_forward` | `float64` | No | Special rate pool balance carried forward from the previous accounting period (0 if none). |
| `spend_date` | `string` | No | Optional. |
| `tool` | `string` | Yes |  |
| `used_main_plant` | `float64` | No | Cost of second-hand main-rate plant, machinery, equipment and vans (not cars). |
| `used_special_rate` | `float64` | No | Cost of second-hand integral features, long-life assets, thermal insulation and solar panels. |
| `zero_emission_cars` | `float64` | No | Cost of new and unused cars with 0 g/km CO2 (fully electric). |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.CapitalAllowance(nil).Load(map[string]any{"period_end": "period_end", "period_start": "period_start"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CapitalAllowance(nil).Create(map[string]any{
    "period_end": "example_period_end",
    "period_start": "example_period_start",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CapitalAllowanceEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ChargeableGainEntity

```go
chargeableGain := client.ChargeableGain(nil)
fmt.Println(chargeableGain.GetName()) // "chargeable_gain"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acquisition_cost` | `float64` | Yes | What the company paid for the asset, in pounds. |
| `acquisition_costs` | `float64` | No | Optional. |
| `acquisition_date` | `string` | Yes | When the company bought the asset (exchange of contracts), as YYYY-MM-DD. |
| `asset_type` | `string` | Yes | "land_buildings": UK land or buildings (the company's whole interest; a freehold or a lease with more than 50 years left). |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `disposal_costs` | `float64` | No | Optional. |
| `disposal_date` | `string` | Yes | When the company sold the asset (exchange of contracts), as YYYY-MM-DD. |
| `enhancement_cost` | `float64` | No | Optional, land and buildings only. |
| `enhancement_date` | `string` | No | Optional, land and buildings only. |
| `input` | `map[string]any` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `proceeds` | `float64` | Yes | What the company sold the asset for, in pounds. |
| `result` | `map[string]any` | Yes |  |
| `sba_claimed` | `float64` | No | Optional, land and buildings only. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.ChargeableGain(nil).Load(map[string]any{"acquisition_date": "acquisition_date", "asset_type": "asset_type", "disposal_date": "disposal_date", "proceed": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

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
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChargeableGainEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CompanyCarEntity

```go
companyCar := client.CompanyCar(nil)
fmt.Println(companyCar.GetName()) // "company_car"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acquisition` | `string` | No | Optional. |
| `annual_lease_cost` | `float64` | No | For "lease": the lease rentals the company pays in its year, in pounds, excluding VAT it can reclaim. |
| `associated_companies` | `int` | No | Optional, with company_profits. |
| `calculated_by` | `string` | Yes |  |
| `capital_contribution` | `float64` | No | Optional. |
| `co2_gkm` | `int` | No | The car's approved CO2 emissions in g/km, from the V5C or certificate of conformity (WLTP for cars first registered from 6 April 2020, NEDC before; both give the same percentage in 2025/26 and 2026/27). |
| `company_profits` | `float64` | No | Optional. |
| `disclaimer` | `string` | Yes |  |
| `electric_range_miles` | `int` | No | For a plug-in hybrid only: the zero-emission (electric) range in miles from the certificate of conformity, rounded up. |
| `fuel_type` | `string` | Yes | "electric" (fully electric or any car with 0 g/km CO2), "petrol" (petrol, or ANY hybrid, petrol or diesel, including plug-in hybrids: hybrids never pay the diesel supplement), "diesel_rde2" (a diesel-only car certified to Euro 6d, also… |
| `income_tax_rate` | `string` | Yes | The director's top rate of Income Tax including the benefit: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | `map[string]any` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `lease_started` | `string` | No | Optional, for "lease": the date the hire period began, YYYY-MM-DD. |
| `list_price` | `float64` | Yes | The car's list price when new, including VAT, delivery and any optional extras (the P11D price), in pounds. |
| `months_available` | `int` | No | Optional. |
| `new_car` | `bool` | No | Optional, for "buy". |
| `page_url` | `string` | Yes |  |
| `phev_easement` | `bool` | No | Optional. |
| `price_paid` | `float64` | No | Optional, for "buy". |
| `private_fuel` | `bool` | No | Optional. |
| `result` | `map[string]any` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | Yes | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.CompanyCar(nil).Load(map[string]any{"fuel_type": "fuel_type", "income_tax_rate": "income_tax_rate", "list_price": 1, "tax_year": "tax_year"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

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
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CompanyCarEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CompanySizeEntity

```go
companySize := client.CompanySize(nil)
fmt.Println(companySize.GetName()) // "company_size"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `balance_sheet_total` | `float64` | Yes | Balance sheet total: gross assets (fixed plus current assets, before liabilities) at the year end, in pounds. |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `employees` | `float64` | Yes | Average number of employees in the year (monthly headcounts added up, divided by the number of months). |
| `first_year` | `bool` | No | True if this is the company's first financial year (then this year alone decides its size). |
| `input` | `map[string]any` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | Last day of the financial year, YYYY-MM-DD. |
| `period_start` | `string` | Yes | First day of the financial year (accounts period), YYYY-MM-DD. |
| `prev_balance_sheet_total` | `float64` | No | Optional: last year's balance sheet total (gross assets), in pounds. |
| `prev_employees` | `float64` | No | Optional: last year's average number of employees. |
| `prev_size` | `string` | No | Optional: what the company qualified as last year — micro, small (not micro) or medium_or_large (not small). |
| `prev_turnover` | `float64` | No | Optional: last financial year's turnover, in pounds (assumed a 12-month year). |
| `result` | `map[string]any` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |
| `turnover` | `float64` | Yes | Turnover for the financial year, in pounds. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.CompanySize(nil).Load(map[string]any{"balance_sheet_total": 1, "employee": 1, "period_end": "period_end", "period_start": "period_start", "turnover": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

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
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CompanySizeEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CompanyVanEntity

```go
companyVan := client.CompanyVan(nil)
fmt.Println(companyVan.GetName()) // "company_van"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `int` | No | Optional, with company_profits. |
| `calculated_by` | `string` | Yes |  |
| `company_profits` | `float64` | No | Optional. |
| `disclaimer` | `string` | Yes |  |
| `income_tax_rate` | `string` | Yes | The director's or employee's top rate of Income Tax: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | `map[string]any` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `months_available` | `int` | No | Optional. |
| `page_url` | `string` | Yes |  |
| `price_paid` | `float64` | No | Optional. |
| `private_fuel` | `bool` | No | Optional. |
| `result` | `map[string]any` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | Yes | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` | `string` | Yes |  |
| `zero_emission` | `bool` | No | Optional. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.CompanyVan(nil).Load(map[string]any{"income_tax_rate": "income_tax_rate", "tax_year": "tax_year"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CompanyVan(nil).Create(map[string]any{
    "income_tax_rate": "example_income_tax_rate",
    "tax_year": "example_tax_year",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CompanyVanEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CorporationTaxEntity

```go
corporationTax := client.CorporationTax(nil)
fmt.Println(corporationTax.GetName()) // "corporation_tax"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `int` | No | How many other companies are associated with this one (under common control) in the period. |
| `calculated_by` | `string` | Yes |  |
| `close_investment_holding` | `bool` | No | True if the company is a close investment-holding company in the period (CTA 2010 s.18N): a close company is one unless, throughout the period, it exists wholly or mainly to trade commercially, to let land to people not connected with it,… |
| `disclaimer` | `string` | Yes |  |
| `exempt_distributions` | `float64` | No | Exempt dividends received from companies outside the company's 51% group (and not from a trading company owned by a consortium it belongs to) (CTA 2010 s.18L), in pounds, used only to decide the rate. |
| `input` | `map[string]any` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | Last day of the accounting period, YYYY-MM-DD. |
| `period_start` | `string` | Yes | First day of the accounting period, YYYY-MM-DD (for example 2025-04-01). |
| `result` | `map[string]any` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `taxable_profits` | `float64` | Yes | Taxable total profits for the period in pounds, after tax adjustments and reliefs (CT600 box 315). |
| `tool` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.CorporationTax(nil).Load(map[string]any{"period_end": "period_end", "period_start": "period_start", "taxable_profit": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CorporationTax(nil).Create(map[string]any{
    "period_end": "example_period_end",
    "period_start": "example_period_start",
    "taxable_profits": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CorporationTaxEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## DeadlineEntity

```go
deadline := client.Deadline(nil)
fmt.Println(deadline.GetName()) // "deadline"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `input` | `map[string]any` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | The last day of the accounts period (the company's year end or accounting reference date), as YYYY-MM-DD. |
| `period_start` | `string` | No | Optional. |
| `result` | `map[string]any` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Deadline(nil).Load(map[string]any{"period_end": "period_end"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Deadline(nil).Create(map[string]any{
    "period_end": "example_period_end",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeadlineEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## DirectorPensionEntity

```go
directorPension := client.DirectorPension(nil)
fmt.Println(directorPension.GetName()) // "director_pension"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `int` | No | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` | `string` | Yes |  |
| `company_profit` | `float64` | Yes | The company's taxable profit for its year before this contribution, after the director's existing salary and other costs, in pounds. |
| `contribution` | `float64` | Yes | The amount the company would pay into the director's pension as an employer contribution, in pounds. |
| `director_only_employee` | `bool` | No | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `string` | Yes |  |
| `dividends` | `float64` | No | Dividends the director already takes this tax year, in pounds. |
| `input` | `map[string]any` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `money_purchase_allowance` | `bool` | No | true if the director has already flexibly accessed a pension (for example taken cash from drawdown or an uncrystallised lump sum), so the £10,000 money purchase annual allowance applies. |
| `other_income` | `float64` | No | The director's other taxable income for the tax year from outside the company, in pounds. |
| `other_pension_contributions` | `float64` | No | Everything else paid into the director's pensions this tax year (their own contributions, before tax relief, and any other employer's), in pounds. |
| `page_url` | `string` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `salary` | `float64` | No | The salary the director already takes from the company this tax year, in pounds. |
| `scottish_taxpayer` | `bool` | No | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | No | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.DirectorPension(nil).Load(map[string]any{"company_profit": 1, "contribution": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.DirectorPension(nil).Create(map[string]any{
    "company_profit": 1,
    "contribution": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DirectorPensionEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## DirectorsLoanEntity

```go
directorsLoan := client.DirectorsLoan(nil)
fmt.Println(directorsLoan.GetName()) // "directors_loan"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `benefit_closing_balance` | `float64` | No | Maximum loan balance on 5 April at the end of the selected tax year, or when the loan ended, in pounds. |
| `benefit_interest_paid` | `float64` | No | Interest the director was required to pay and actually paid for the selected tax year, in pounds. |
| `benefit_maximum_balance` | `float64` | No | Highest total beneficial-loan balance at any time in the tax year, in pounds, used for the £10,000 exemption. |
| `benefit_opening_balance` | `float64` | No | Maximum loan balance on 5 April before the selected tax year, or when the loan began, in pounds. |
| `benefit_tax_year` | `string` | No | Optional UK tax year for the beneficial-loan calculation: 2025-26 or 2026-27. |
| `benefit_whole_months` | `int` | No | Whole months the loan was outstanding in the selected tax year, from 1 to 12. |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `input` | `map[string]any` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `loan_made_on` | `string` | No | Date the loan was made, YYYY-MM-DD, within the accounting period. |
| `marginal_income_tax_rate` | `float64` | No | Director’s marginal Income Tax rate as a percentage, used only to estimate personal tax on the benefit. |
| `outstanding` | `float64` | Yes | Loan balance the director or other participator owed the company at the period end, in pounds. |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | Last day of the company's Corporation Tax accounting period, YYYY-MM-DD. |
| `repaid_within_9_months` | `float64` | No | Part of that balance repaid, released or written off after the period end and within 9 months of it (before the s.455 tax is due), in pounds. |
| `result` | `map[string]any` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.DirectorsLoan(nil).Load(map[string]any{"outstanding": 1, "period_end": "period_end"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.DirectorsLoan(nil).Create(map[string]any{
    "outstanding": 1,
    "period_end": "example_period_end",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DirectorsLoanEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## DividendReserveEntity

```go
dividendReserve := client.DividendReserve(nil)
fmt.Println(dividendReserve.GetName()) // "dividend_reserve"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `dividends_already_paid` | `float64` | Yes | Dividends already paid or declared from these profits, in pounds. |
| `input` | `map[string]any` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `profit_after_tax` | `float64` | Yes | This period’s realised profit after Corporation Tax, in pounds. |
| `proposed_dividend` | `float64` | Yes | Dividend now proposed, in pounds. |
| `result` | `map[string]any` | Yes |  |
| `retained_profits_brought_forward` | `float64` | Yes | Accumulated retained profits or losses brought forward, in pounds. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.DividendReserve(nil).Load(map[string]any{"dividends_already_paid": 1, "profit_after_tax": 1, "proposed_dividend": 1, "retained_profits_brought_forward": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

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
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DividendReserveEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## HomeOfficeEntity

```go
homeOffice := client.HomeOffice(nil)
fmt.Println(homeOffice.GetName()) // "home_office"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actual_additional_costs` | `float64` | No | Optional total reasonable additional household costs caused by working at home, in pounds, supported by records. |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `frequency` | `string` | Yes | Whether to use HMRC’s £6 weekly rate or £26 monthly rate. |
| `input` | `map[string]any` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `periods` | `int` | Yes | Number of weeks or months of regular homeworking in the tax year; no more than 52 weeks or 12 months. |
| `result` | `map[string]any` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | Yes | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.HomeOffice(nil).Load(map[string]any{"frequency": "frequency", "period": 1, "tax_year": "tax_year"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.HomeOffice(nil).Create(map[string]any{
    "frequency": "example_frequency",
    "periods": 1,
    "tax_year": "example_tax_year",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HomeOfficeEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## LatePenaltyEntity

```go
latePenalty := client.LatePenalty(nil)
fmt.Println(latePenalty.GetName()) // "late_penalty"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `filed_on` | `string` | Yes | The date the CT600 was, or will be, filed with HMRC. |
| `input` | `map[string]any` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `late_previous_two` | `bool` | No | True if the company was liable to a late filing penalty for each of its two previous accounting periods (consecutive, and within Corporation Tax throughout). |
| `page_url` | `string` | Yes |  |
| `paid_on` | `string` | No | The date the Corporation Tax was, or will be, paid in full. |
| `period_end` | `string` | Yes | Last day of the Corporation Tax accounting period the CT600 covers (YYYY-MM-DD), on or after 2015-04-01. |
| `period_of_account_end` | `string` | No | Only if the company's accounts cover more than 12 months (up to 18): the last day of that period of account, no more than 6 months after period_end. |
| `result` | `map[string]any` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_due` | `float64` | No | Corporation Tax payable for the accounting period, in pounds. |
| `tool` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.LatePenalty(nil).Load(map[string]any{"filed_on": "filed_on", "period_end": "period_end"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.LatePenalty(nil).Create(map[string]any{
    "filed_on": "example_filed_on",
    "period_end": "example_period_end",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LatePenaltyEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## LongPeriodEntity

```go
longPeriod := client.LongPeriod(nil)
fmt.Println(longPeriod.GetName()) // "long_period"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `first_accounts` | `bool` | No | Optional: true if these are the company's first accounts (sets the Companies House deadline). |
| `input` | `map[string]any` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | Last day of the accounts, YYYY-MM-DD. |
| `period_start` | `string` | Yes | First day of the accounts (period of account), YYYY-MM-DD. |
| `profit` | `float64` | No | Optional: trading profit for the whole period in pounds, to split by days. |
| `result` | `map[string]any` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.LongPeriod(nil).Load(map[string]any{"period_end": "period_end", "period_start": "period_start"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.LongPeriod(nil).Create(map[string]any{
    "period_end": "example_period_end",
    "period_start": "example_period_start",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LongPeriodEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## MileageAllowanceEntity

```go
mileageAllowance := client.MileageAllowance(nil)
fmt.Println(mileageAllowance.GetName()) // "mileage_allowance"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_miles` | `int` | Yes | Total qualifying business miles in this vehicle category during the tax year. |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `employer_payment` | `float64` | Yes | Total mileage allowance paid by the company for those miles, in pounds. |
| `input` | `map[string]any` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | Yes | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `string` | Yes |  |
| `vehicle` | `string` | Yes | The employee-owned vehicle used for business travel: car_van, motorcycle or bicycle. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.MileageAllowance(nil).Load(map[string]any{"business_mile": 1, "employer_payment": 1, "tax_year": "tax_year", "vehicle": "vehicle"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

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
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MileageAllowanceEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SalaryDividendEntity

```go
salaryDividend := client.SalaryDividend(nil)
fmt.Println(salaryDividend.GetName()) // "salary_dividend"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `int` | No | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` | `string` | Yes |  |
| `company_profit` | `float64` | Yes | The company's profit for the year before paying the director any salary, after all its other costs, in pounds. |
| `director_only_employee` | `bool` | No | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `string` | Yes |  |
| `input` | `map[string]any` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | `float64` | No | The director's other taxable income for the tax year from outside this company, such as another job, a pension or rental profit, in pounds. |
| `page_url` | `string` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `salary` | `float64` | No | Optional: a salary you want to compare with the standard options, in pounds a year. |
| `scottish_taxpayer` | `bool` | No | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | No | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.SalaryDividend(nil).Load(map[string]any{"company_profit": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.SalaryDividend(nil).Create(map[string]any{
    "company_profit": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SalaryDividendEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SoleTraderVsLimitedEntity

```go
soleTraderVsLimited := client.SoleTraderVsLimited(nil)
fmt.Println(soleTraderVsLimited.GetName()) // "sole_trader_vs_limited"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `string` | Yes |  |
| `director_only_employee` | `bool` | No | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `string` | Yes |  |
| `input` | `map[string]any` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | `float64` | No | The owner's other taxable income for the tax year, such as a job, a pension or rental profit, in pounds. |
| `page_url` | `string` | Yes |  |
| `profit` | `float64` | Yes | The business's profit for the year, after expenses and before any tax or pay to the owner, in pounds. |
| `result` | `map[string]any` | Yes |  |
| `scottish_taxpayer` | `bool` | No | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | No | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.SoleTraderVsLimited(nil).Load(map[string]any{"profit": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.SoleTraderVsLimited(nil).Create(map[string]any{
    "profit": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SoleTraderVsLimitedEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ToolEntity

```go
tool := client.Tool(nil)
fmt.Println(tool.GetName()) // "tool"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Tool(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ToolEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## TrivialBenefitEntity

```go
trivialBenefit := client.TrivialBenefit(nil)
fmt.Println(trivialBenefit.GetName()) // "trivial_benefit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `benefit_cost` | `float64` | Yes | Cost to the company of this individual benefit, in pounds. |
| `calculated_by` | `string` | Yes |  |
| `cash_or_cash_voucher` | `bool` | Yes | True if the benefit is cash or a voucher exchangeable for cash. |
| `close_company_director` | `bool` | Yes | True if the recipient is a director or office holder of a close company. |
| `disclaimer` | `string` | Yes |  |
| `in_contract` | `bool` | Yes | True if the benefit is promised in the employment contract or other contractual terms. |
| `input` | `map[string]any` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `qualifying_benefits_so_far` | `float64` | Yes | For a close-company director, total cost in pounds of earlier qualifying trivial benefits from this employer in the tax year. |
| `result` | `map[string]any` | Yes |  |
| `reward_for_work` | `bool` | Yes | True if the benefit rewards the employee’s work or performance. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | Yes | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.TrivialBenefit(nil).Load(map[string]any{"benefit_cost": 1, "cash_or_cash_voucher": true, "close_company_director": true, "in_contract": true, "qualifying_benefits_so_far": 1, "reward_for_work": true, "tax_year": "tax_year"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

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
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TrivialBenefitEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```go
client := sdk.NewTaxleyCorporationTaxSDK(map[string]any{
    "feature": map[string]any{
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `now` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

