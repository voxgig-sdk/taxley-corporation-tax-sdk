# TaxleyCorporationTax Ruby SDK Reference

Complete API reference for the TaxleyCorporationTax Ruby SDK.


## TaxleyCorporationTaxSDK

### Constructor

```ruby
require_relative 'TaxleyCorporationTax_sdk'

client = TaxleyCorporationTaxSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TaxleyCorporationTaxSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = TaxleyCorporationTaxSDK.test
```


### Instance Methods

#### `CapitalAllowance(data = nil)`

Create a new `CapitalAllowance` entity instance. Pass `nil` for no initial data.

#### `ChargeableGain(data = nil)`

Create a new `ChargeableGain` entity instance. Pass `nil` for no initial data.

#### `CompanyCar(data = nil)`

Create a new `CompanyCar` entity instance. Pass `nil` for no initial data.

#### `CompanySize(data = nil)`

Create a new `CompanySize` entity instance. Pass `nil` for no initial data.

#### `CompanyVan(data = nil)`

Create a new `CompanyVan` entity instance. Pass `nil` for no initial data.

#### `CorporationTax(data = nil)`

Create a new `CorporationTax` entity instance. Pass `nil` for no initial data.

#### `Deadline(data = nil)`

Create a new `Deadline` entity instance. Pass `nil` for no initial data.

#### `DirectorPension(data = nil)`

Create a new `DirectorPension` entity instance. Pass `nil` for no initial data.

#### `DirectorsLoan(data = nil)`

Create a new `DirectorsLoan` entity instance. Pass `nil` for no initial data.

#### `DividendReserve(data = nil)`

Create a new `DividendReserve` entity instance. Pass `nil` for no initial data.

#### `HomeOffice(data = nil)`

Create a new `HomeOffice` entity instance. Pass `nil` for no initial data.

#### `LatePenalty(data = nil)`

Create a new `LatePenalty` entity instance. Pass `nil` for no initial data.

#### `LongPeriod(data = nil)`

Create a new `LongPeriod` entity instance. Pass `nil` for no initial data.

#### `MileageAllowance(data = nil)`

Create a new `MileageAllowance` entity instance. Pass `nil` for no initial data.

#### `SalaryDividend(data = nil)`

Create a new `SalaryDividend` entity instance. Pass `nil` for no initial data.

#### `SoleTraderVsLimited(data = nil)`

Create a new `SoleTraderVsLimited` entity instance. Pass `nil` for no initial data.

#### `Tool(data = nil)`

Create a new `Tool` entity instance. Pass `nil` for no initial data.

#### `TrivialBenefit(data = nil)`

Create a new `TrivialBenefit` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## CapitalAllowanceEntity

```ruby
capital_allowance = client.CapitalAllowance
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aia_shared` | `Float` | No | Optional. |
| `calculated_by` | `String` | Yes |  |
| `disclaimer` | `String` | Yes |  |
| `full_expensed_disposals` | `Float` | No | Sale proceeds of assets that had full expensing on their whole cost, sold this period. |
| `input` | `Hash` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `main_pool_brought_forward` | `Float` | No | Main pool balance carried forward from the previous accounting period (0 if none). |
| `main_pool_disposals` | `Float` | No | Sale proceeds of main pool assets sold this period that did NOT have full expensing (for example, assets that had the annual investment allowance or were pooled). |
| `new_main_plant` | `Float` | No | Cost of new and unused plant, machinery, equipment and vans (not cars). |
| `new_special_rate` | `Float` | No | Cost of new and unused integral features (electrical, lighting, heating, water, lifts, air conditioning), long-life assets, thermal insulation and solar panels. |
| `other_cars_high_co2` | `Float` | No | Cost of cars with CO2 emissions over 50 g/km. |
| `other_cars_low_co2` | `Float` | No | Cost of cars (other than new zero-emission cars) with CO2 emissions of 50 g/km or less. |
| `page_url` | `String` | Yes |  |
| `period_end` | `String` | Yes | Last day of the accounting period, as YYYY-MM-DD. |
| `period_start` | `String` | Yes | First day of the Corporation Tax accounting period, as YYYY-MM-DD. |
| `result` | `Hash` | Yes |  |
| `share_url` | `String` | Yes | A link to this result on taxley.co.uk. |
| `special_pool_brought_forward` | `Float` | No | Special rate pool balance carried forward from the previous accounting period (0 if none). |
| `spend_date` | `String` | No | Optional. |
| `tool` | `String` | Yes |  |
| `used_main_plant` | `Float` | No | Cost of second-hand main-rate plant, machinery, equipment and vans (not cars). |
| `used_special_rate` | `Float` | No | Cost of second-hand integral features, long-life assets, thermal insulation and solar panels. |
| `zero_emission_cars` | `Float` | No | Cost of new and unused cars with 0 g/km CO2 (fully electric). |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CapitalAllowance.create({
  "period_end" => "example_period_end", # String
  "period_start" => "example_period_start", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.CapitalAllowance.load({ "period_end" => "period_end", "period_start" => "period_start" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CapitalAllowanceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ChargeableGainEntity

```ruby
chargeable_gain = client.ChargeableGain
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acquisition_cost` | `Float` | Yes | What the company paid for the asset, in pounds. |
| `acquisition_costs` | `Float` | No | Optional. |
| `acquisition_date` | `String` | Yes | When the company bought the asset (exchange of contracts), as YYYY-MM-DD. |
| `asset_type` | `String` | Yes | "land_buildings": UK land or buildings (the company's whole interest; a freehold or a lease with more than 50 years left). |
| `calculated_by` | `String` | Yes |  |
| `disclaimer` | `String` | Yes |  |
| `disposal_costs` | `Float` | No | Optional. |
| `disposal_date` | `String` | Yes | When the company sold the asset (exchange of contracts), as YYYY-MM-DD. |
| `enhancement_cost` | `Float` | No | Optional, land and buildings only. |
| `enhancement_date` | `String` | No | Optional, land and buildings only. |
| `input` | `Hash` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `String` | Yes |  |
| `proceeds` | `Float` | Yes | What the company sold the asset for, in pounds. |
| `result` | `Hash` | Yes |  |
| `sba_claimed` | `Float` | No | Optional, land and buildings only. |
| `share_url` | `String` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ChargeableGain.create({
  "acquisition_cost" => 1, # Float
  "acquisition_date" => "example_acquisition_date", # String
  "asset_type" => "example_asset_type", # String
  "disposal_date" => "example_disposal_date", # String
  "proceeds" => 1, # Float
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.ChargeableGain.load({ "acquisition_date" => "acquisition_date", "asset_type" => "asset_type", "disposal_date" => "disposal_date", "proceed" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ChargeableGainEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CompanyCarEntity

```ruby
company_car = client.CompanyCar
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acquisition` | `String` | No | Optional. |
| `annual_lease_cost` | `Float` | No | For "lease": the lease rentals the company pays in its year, in pounds, excluding VAT it can reclaim. |
| `associated_companies` | `Integer` | No | Optional, with company_profits. |
| `calculated_by` | `String` | Yes |  |
| `capital_contribution` | `Float` | No | Optional. |
| `co2_gkm` | `Integer` | No | The car's approved CO2 emissions in g/km, from the V5C or certificate of conformity (WLTP for cars first registered from 6 April 2020, NEDC before; both give the same percentage in 2025/26 and 2026/27). |
| `company_profits` | `Float` | No | Optional. |
| `disclaimer` | `String` | Yes |  |
| `electric_range_miles` | `Integer` | No | For a plug-in hybrid only: the zero-emission (electric) range in miles from the certificate of conformity, rounded up. |
| `fuel_type` | `String` | Yes | "electric" (fully electric or any car with 0 g/km CO2), "petrol" (petrol, or ANY hybrid, petrol or diesel, including plug-in hybrids: hybrids never pay the diesel supplement), "diesel_rde2" (a diesel-only car certified to Euro 6d, also… |
| `income_tax_rate` | `String` | Yes | The director's top rate of Income Tax including the benefit: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | `Hash` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `lease_started` | `String` | No | Optional, for "lease": the date the hire period began, YYYY-MM-DD. |
| `list_price` | `Float` | Yes | The car's list price when new, including VAT, delivery and any optional extras (the P11D price), in pounds. |
| `months_available` | `Integer` | No | Optional. |
| `new_car` | `Boolean` | No | Optional, for "buy". |
| `page_url` | `String` | Yes |  |
| `phev_easement` | `Boolean` | No | Optional. |
| `price_paid` | `Float` | No | Optional, for "buy". |
| `private_fuel` | `Boolean` | No | Optional. |
| `result` | `Hash` | Yes |  |
| `share_url` | `String` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `String` | Yes | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CompanyCar.create({
  "fuel_type" => "example_fuel_type", # String
  "income_tax_rate" => "example_income_tax_rate", # String
  "list_price" => 1, # Float
  "tax_year" => "example_tax_year", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.CompanyCar.load({ "fuel_type" => "fuel_type", "income_tax_rate" => "income_tax_rate", "list_price" => 1, "tax_year" => "tax_year" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CompanyCarEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CompanySizeEntity

```ruby
company_size = client.CompanySize
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `balance_sheet_total` | `Float` | Yes | Balance sheet total: gross assets (fixed plus current assets, before liabilities) at the year end, in pounds. |
| `calculated_by` | `String` | Yes |  |
| `disclaimer` | `String` | Yes |  |
| `employees` | `Float` | Yes | Average number of employees in the year (monthly headcounts added up, divided by the number of months). |
| `first_year` | `Boolean` | No | True if this is the company's first financial year (then this year alone decides its size). |
| `input` | `Hash` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `String` | Yes |  |
| `period_end` | `String` | Yes | Last day of the financial year, YYYY-MM-DD. |
| `period_start` | `String` | Yes | First day of the financial year (accounts period), YYYY-MM-DD. |
| `prev_balance_sheet_total` | `Float` | No | Optional: last year's balance sheet total (gross assets), in pounds. |
| `prev_employees` | `Float` | No | Optional: last year's average number of employees. |
| `prev_size` | `String` | No | Optional: what the company qualified as last year — micro, small (not micro) or medium_or_large (not small). |
| `prev_turnover` | `Float` | No | Optional: last financial year's turnover, in pounds (assumed a 12-month year). |
| `result` | `Hash` | Yes |  |
| `share_url` | `String` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `String` | Yes |  |
| `turnover` | `Float` | Yes | Turnover for the financial year, in pounds. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CompanySize.create({
  "balance_sheet_total" => 1, # Float
  "employees" => 1, # Float
  "period_end" => "example_period_end", # String
  "period_start" => "example_period_start", # String
  "turnover" => 1, # Float
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.CompanySize.load({ "balance_sheet_total" => 1, "employee" => 1, "period_end" => "period_end", "period_start" => "period_start", "turnover" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CompanySizeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CompanyVanEntity

```ruby
company_van = client.CompanyVan
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `Integer` | No | Optional, with company_profits. |
| `calculated_by` | `String` | Yes |  |
| `company_profits` | `Float` | No | Optional. |
| `disclaimer` | `String` | Yes |  |
| `income_tax_rate` | `String` | Yes | The director's or employee's top rate of Income Tax: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | `Hash` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `months_available` | `Integer` | No | Optional. |
| `page_url` | `String` | Yes |  |
| `price_paid` | `Float` | No | Optional. |
| `private_fuel` | `Boolean` | No | Optional. |
| `result` | `Hash` | Yes |  |
| `share_url` | `String` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `String` | Yes | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` | `String` | Yes |  |
| `zero_emission` | `Boolean` | No | Optional. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CompanyVan.create({
  "income_tax_rate" => "example_income_tax_rate", # String
  "tax_year" => "example_tax_year", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.CompanyVan.load({ "income_tax_rate" => "income_tax_rate", "tax_year" => "tax_year" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CompanyVanEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CorporationTaxEntity

```ruby
corporation_tax = client.CorporationTax
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `Integer` | No | How many other companies are associated with this one (under common control) in the period. |
| `calculated_by` | `String` | Yes |  |
| `close_investment_holding` | `Boolean` | No | True if the company is a close investment-holding company in the period (CTA 2010 s.18N): a close company is one unless, throughout the period, it exists wholly or mainly to trade commercially, to let land to people not connected with it,… |
| `disclaimer` | `String` | Yes |  |
| `exempt_distributions` | `Float` | No | Exempt dividends received from companies outside the company's 51% group (and not from a trading company owned by a consortium it belongs to) (CTA 2010 s.18L), in pounds, used only to decide the rate. |
| `input` | `Hash` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `String` | Yes |  |
| `period_end` | `String` | Yes | Last day of the accounting period, YYYY-MM-DD. |
| `period_start` | `String` | Yes | First day of the accounting period, YYYY-MM-DD (for example 2025-04-01). |
| `result` | `Hash` | Yes |  |
| `share_url` | `String` | Yes | A link to this result on taxley.co.uk. |
| `taxable_profits` | `Float` | Yes | Taxable total profits for the period in pounds, after tax adjustments and reliefs (CT600 box 315). |
| `tool` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CorporationTax.create({
  "period_end" => "example_period_end", # String
  "period_start" => "example_period_start", # String
  "taxable_profits" => 1, # Float
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.CorporationTax.load({ "period_end" => "period_end", "period_start" => "period_start", "taxable_profit" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CorporationTaxEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DeadlineEntity

```ruby
deadline = client.Deadline
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `String` | Yes |  |
| `disclaimer` | `String` | Yes |  |
| `input` | `Hash` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `String` | Yes |  |
| `period_end` | `String` | Yes | The last day of the accounts period (the company's year end or accounting reference date), as YYYY-MM-DD. |
| `period_start` | `String` | No | Optional. |
| `result` | `Hash` | Yes |  |
| `share_url` | `String` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Deadline.create({
  "period_end" => "example_period_end", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Deadline.load({ "period_end" => "period_end" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DeadlineEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DirectorPensionEntity

```ruby
director_pension = client.DirectorPension
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `Integer` | No | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` | `String` | Yes |  |
| `company_profit` | `Float` | Yes | The company's taxable profit for its year before this contribution, after the director's existing salary and other costs, in pounds. |
| `contribution` | `Float` | Yes | The amount the company would pay into the director's pension as an employer contribution, in pounds. |
| `director_only_employee` | `Boolean` | No | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `String` | Yes |  |
| `dividends` | `Float` | No | Dividends the director already takes this tax year, in pounds. |
| `input` | `Hash` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `money_purchase_allowance` | `Boolean` | No | true if the director has already flexibly accessed a pension (for example taken cash from drawdown or an uncrystallised lump sum), so the £10,000 money purchase annual allowance applies. |
| `other_income` | `Float` | No | The director's other taxable income for the tax year from outside the company, in pounds. |
| `other_pension_contributions` | `Float` | No | Everything else paid into the director's pensions this tax year (their own contributions, before tax relief, and any other employer's), in pounds. |
| `page_url` | `String` | Yes |  |
| `result` | `Hash` | Yes |  |
| `salary` | `Float` | No | The salary the director already takes from the company this tax year, in pounds. |
| `scottish_taxpayer` | `Boolean` | No | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `String` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `String` | No | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.DirectorPension.create({
  "company_profit" => 1, # Float
  "contribution" => 1, # Float
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.DirectorPension.load({ "company_profit" => 1, "contribution" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DirectorPensionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DirectorsLoanEntity

```ruby
directors_loan = client.DirectorsLoan
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `benefit_closing_balance` | `Float` | No | Maximum loan balance on 5 April at the end of the selected tax year, or when the loan ended, in pounds. |
| `benefit_interest_paid` | `Float` | No | Interest the director was required to pay and actually paid for the selected tax year, in pounds. |
| `benefit_maximum_balance` | `Float` | No | Highest total beneficial-loan balance at any time in the tax year, in pounds, used for the £10,000 exemption. |
| `benefit_opening_balance` | `Float` | No | Maximum loan balance on 5 April before the selected tax year, or when the loan began, in pounds. |
| `benefit_tax_year` | `String` | No | Optional UK tax year for the beneficial-loan calculation: 2025-26 or 2026-27. |
| `benefit_whole_months` | `Integer` | No | Whole months the loan was outstanding in the selected tax year, from 1 to 12. |
| `calculated_by` | `String` | Yes |  |
| `disclaimer` | `String` | Yes |  |
| `input` | `Hash` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `loan_made_on` | `String` | No | Date the loan was made, YYYY-MM-DD, within the accounting period. |
| `marginal_income_tax_rate` | `Float` | No | Director’s marginal Income Tax rate as a percentage, used only to estimate personal tax on the benefit. |
| `outstanding` | `Float` | Yes | Loan balance the director or other participator owed the company at the period end, in pounds. |
| `page_url` | `String` | Yes |  |
| `period_end` | `String` | Yes | Last day of the company's Corporation Tax accounting period, YYYY-MM-DD. |
| `repaid_within_9_months` | `Float` | No | Part of that balance repaid, released or written off after the period end and within 9 months of it (before the s.455 tax is due), in pounds. |
| `result` | `Hash` | Yes |  |
| `share_url` | `String` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.DirectorsLoan.create({
  "outstanding" => 1, # Float
  "period_end" => "example_period_end", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.DirectorsLoan.load({ "outstanding" => 1, "period_end" => "period_end" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DirectorsLoanEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DividendReserveEntity

```ruby
dividend_reserve = client.DividendReserve
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `String` | Yes |  |
| `disclaimer` | `String` | Yes |  |
| `dividends_already_paid` | `Float` | Yes | Dividends already paid or declared from these profits, in pounds. |
| `input` | `Hash` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `String` | Yes |  |
| `profit_after_tax` | `Float` | Yes | This period’s realised profit after Corporation Tax, in pounds. |
| `proposed_dividend` | `Float` | Yes | Dividend now proposed, in pounds. |
| `result` | `Hash` | Yes |  |
| `retained_profits_brought_forward` | `Float` | Yes | Accumulated retained profits or losses brought forward, in pounds. |
| `share_url` | `String` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.DividendReserve.create({
  "dividends_already_paid" => 1, # Float
  "profit_after_tax" => 1, # Float
  "proposed_dividend" => 1, # Float
  "retained_profits_brought_forward" => 1, # Float
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.DividendReserve.load({ "dividends_already_paid" => 1, "profit_after_tax" => 1, "proposed_dividend" => 1, "retained_profits_brought_forward" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DividendReserveEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HomeOfficeEntity

```ruby
home_office = client.HomeOffice
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actual_additional_costs` | `Float` | No | Optional total reasonable additional household costs caused by working at home, in pounds, supported by records. |
| `calculated_by` | `String` | Yes |  |
| `disclaimer` | `String` | Yes |  |
| `frequency` | `String` | Yes | Whether to use HMRC’s £6 weekly rate or £26 monthly rate. |
| `input` | `Hash` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `String` | Yes |  |
| `periods` | `Integer` | Yes | Number of weeks or months of regular homeworking in the tax year; no more than 52 weeks or 12 months. |
| `result` | `Hash` | Yes |  |
| `share_url` | `String` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `String` | Yes | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.HomeOffice.create({
  "frequency" => "example_frequency", # String
  "periods" => 1, # Integer
  "tax_year" => "example_tax_year", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.HomeOffice.load({ "frequency" => "frequency", "period" => 1, "tax_year" => "tax_year" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HomeOfficeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LatePenaltyEntity

```ruby
late_penalty = client.LatePenalty
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `String` | Yes |  |
| `disclaimer` | `String` | Yes |  |
| `filed_on` | `String` | Yes | The date the CT600 was, or will be, filed with HMRC. |
| `input` | `Hash` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `late_previous_two` | `Boolean` | No | True if the company was liable to a late filing penalty for each of its two previous accounting periods (consecutive, and within Corporation Tax throughout). |
| `page_url` | `String` | Yes |  |
| `paid_on` | `String` | No | The date the Corporation Tax was, or will be, paid in full. |
| `period_end` | `String` | Yes | Last day of the Corporation Tax accounting period the CT600 covers (YYYY-MM-DD), on or after 2015-04-01. |
| `period_of_account_end` | `String` | No | Only if the company's accounts cover more than 12 months (up to 18): the last day of that period of account, no more than 6 months after period_end. |
| `result` | `Hash` | Yes |  |
| `share_url` | `String` | Yes | A link to this result on taxley.co.uk. |
| `tax_due` | `Float` | No | Corporation Tax payable for the accounting period, in pounds. |
| `tool` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.LatePenalty.create({
  "filed_on" => "example_filed_on", # String
  "period_end" => "example_period_end", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.LatePenalty.load({ "filed_on" => "filed_on", "period_end" => "period_end" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LatePenaltyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LongPeriodEntity

```ruby
long_period = client.LongPeriod
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `String` | Yes |  |
| `disclaimer` | `String` | Yes |  |
| `first_accounts` | `Boolean` | No | Optional: true if these are the company's first accounts (sets the Companies House deadline). |
| `input` | `Hash` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `String` | Yes |  |
| `period_end` | `String` | Yes | Last day of the accounts, YYYY-MM-DD. |
| `period_start` | `String` | Yes | First day of the accounts (period of account), YYYY-MM-DD. |
| `profit` | `Float` | No | Optional: trading profit for the whole period in pounds, to split by days. |
| `result` | `Hash` | Yes |  |
| `share_url` | `String` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.LongPeriod.create({
  "period_end" => "example_period_end", # String
  "period_start" => "example_period_start", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.LongPeriod.load({ "period_end" => "period_end", "period_start" => "period_start" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LongPeriodEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MileageAllowanceEntity

```ruby
mileage_allowance = client.MileageAllowance
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_miles` | `Integer` | Yes | Total qualifying business miles in this vehicle category during the tax year. |
| `calculated_by` | `String` | Yes |  |
| `disclaimer` | `String` | Yes |  |
| `employer_payment` | `Float` | Yes | Total mileage allowance paid by the company for those miles, in pounds. |
| `input` | `Hash` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `String` | Yes |  |
| `result` | `Hash` | Yes |  |
| `share_url` | `String` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `String` | Yes | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `String` | Yes |  |
| `vehicle` | `String` | Yes | The employee-owned vehicle used for business travel: car_van, motorcycle or bicycle. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.MileageAllowance.create({
  "business_miles" => 1, # Integer
  "employer_payment" => 1, # Float
  "tax_year" => "example_tax_year", # String
  "vehicle" => "example_vehicle", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.MileageAllowance.load({ "business_mile" => 1, "employer_payment" => 1, "tax_year" => "tax_year", "vehicle" => "vehicle" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MileageAllowanceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SalaryDividendEntity

```ruby
salary_dividend = client.SalaryDividend
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `Integer` | No | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` | `String` | Yes |  |
| `company_profit` | `Float` | Yes | The company's profit for the year before paying the director any salary, after all its other costs, in pounds. |
| `director_only_employee` | `Boolean` | No | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `String` | Yes |  |
| `input` | `Hash` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | `Float` | No | The director's other taxable income for the tax year from outside this company, such as another job, a pension or rental profit, in pounds. |
| `page_url` | `String` | Yes |  |
| `result` | `Hash` | Yes |  |
| `salary` | `Float` | No | Optional: a salary you want to compare with the standard options, in pounds a year. |
| `scottish_taxpayer` | `Boolean` | No | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `String` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `String` | No | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.SalaryDividend.create({
  "company_profit" => 1, # Float
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.SalaryDividend.load({ "company_profit" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SalaryDividendEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SoleTraderVsLimitedEntity

```ruby
sole_trader_vs_limited = client.SoleTraderVsLimited
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `String` | Yes |  |
| `director_only_employee` | `Boolean` | No | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `String` | Yes |  |
| `input` | `Hash` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | `Float` | No | The owner's other taxable income for the tax year, such as a job, a pension or rental profit, in pounds. |
| `page_url` | `String` | Yes |  |
| `profit` | `Float` | Yes | The business's profit for the year, after expenses and before any tax or pay to the owner, in pounds. |
| `result` | `Hash` | Yes |  |
| `scottish_taxpayer` | `Boolean` | No | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `String` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `String` | No | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.SoleTraderVsLimited.create({
  "profit" => 1, # Float
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.SoleTraderVsLimited.load({ "profit" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SoleTraderVsLimitedEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ToolEntity

```ruby
tool = client.Tool
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Tool.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ToolEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TrivialBenefitEntity

```ruby
trivial_benefit = client.TrivialBenefit
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `benefit_cost` | `Float` | Yes | Cost to the company of this individual benefit, in pounds. |
| `calculated_by` | `String` | Yes |  |
| `cash_or_cash_voucher` | `Boolean` | Yes | True if the benefit is cash or a voucher exchangeable for cash. |
| `close_company_director` | `Boolean` | Yes | True if the recipient is a director or office holder of a close company. |
| `disclaimer` | `String` | Yes |  |
| `in_contract` | `Boolean` | Yes | True if the benefit is promised in the employment contract or other contractual terms. |
| `input` | `Hash` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `String` | Yes |  |
| `qualifying_benefits_so_far` | `Float` | Yes | For a close-company director, total cost in pounds of earlier qualifying trivial benefits from this employer in the tax year. |
| `result` | `Hash` | Yes |  |
| `reward_for_work` | `Boolean` | Yes | True if the benefit rewards the employee’s work or performance. |
| `share_url` | `String` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `String` | Yes | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.TrivialBenefit.create({
  "benefit_cost" => 1, # Float
  "cash_or_cash_voucher" => true, # Boolean
  "close_company_director" => true, # Boolean
  "in_contract" => true, # Boolean
  "qualifying_benefits_so_far" => 1, # Float
  "reward_for_work" => true, # Boolean
  "tax_year" => "example_tax_year", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.TrivialBenefit.load({ "benefit_cost" => 1, "cash_or_cash_voucher" => true, "close_company_director" => true, "in_contract" => true, "qualifying_benefits_so_far" => 1, "reward_for_work" => true, "tax_year" => "tax_year" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TrivialBenefitEntity` instance with the same client and
options.

#### `get_name -> String`

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

```ruby
client = TaxleyCorporationTaxSDK.new({
  "feature" => {
    "ratelimit" => { "active" => true },
    "retry" => { "active" => true },
    "test" => { "active" => true },
    "timeout" => { "active" => true },
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

