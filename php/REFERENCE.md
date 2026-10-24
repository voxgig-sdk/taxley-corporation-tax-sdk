# TaxleyCorporationTax PHP SDK Reference

Complete API reference for the TaxleyCorporationTax PHP SDK.


## TaxleyCorporationTaxSDK

### Constructor

```php
require_once __DIR__ . '/taxleycorporationtax_sdk.php';

$client = new TaxleyCorporationTaxSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TaxleyCorporationTaxSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = TaxleyCorporationTaxSDK::test();
```


### Instance Methods

#### `CapitalAllowance($data = null)`

Create a new `CapitalAllowanceEntity` instance. Pass `null` for no initial data.

#### `ChargeableGain($data = null)`

Create a new `ChargeableGainEntity` instance. Pass `null` for no initial data.

#### `CompanyCar($data = null)`

Create a new `CompanyCarEntity` instance. Pass `null` for no initial data.

#### `CompanySize($data = null)`

Create a new `CompanySizeEntity` instance. Pass `null` for no initial data.

#### `CompanyVan($data = null)`

Create a new `CompanyVanEntity` instance. Pass `null` for no initial data.

#### `CorporationTax($data = null)`

Create a new `CorporationTaxEntity` instance. Pass `null` for no initial data.

#### `Deadline($data = null)`

Create a new `DeadlineEntity` instance. Pass `null` for no initial data.

#### `DirectorPension($data = null)`

Create a new `DirectorPensionEntity` instance. Pass `null` for no initial data.

#### `DirectorsLoan($data = null)`

Create a new `DirectorsLoanEntity` instance. Pass `null` for no initial data.

#### `DividendReserve($data = null)`

Create a new `DividendReserveEntity` instance. Pass `null` for no initial data.

#### `HomeOffice($data = null)`

Create a new `HomeOfficeEntity` instance. Pass `null` for no initial data.

#### `LatePenalty($data = null)`

Create a new `LatePenaltyEntity` instance. Pass `null` for no initial data.

#### `LongPeriod($data = null)`

Create a new `LongPeriodEntity` instance. Pass `null` for no initial data.

#### `MileageAllowance($data = null)`

Create a new `MileageAllowanceEntity` instance. Pass `null` for no initial data.

#### `SalaryDividend($data = null)`

Create a new `SalaryDividendEntity` instance. Pass `null` for no initial data.

#### `SoleTraderVsLimited($data = null)`

Create a new `SoleTraderVsLimitedEntity` instance. Pass `null` for no initial data.

#### `Tool($data = null)`

Create a new `ToolEntity` instance. Pass `null` for no initial data.

#### `TrivialBenefit($data = null)`

Create a new `TrivialBenefitEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): TaxleyCorporationTaxUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## CapitalAllowanceEntity

```php
$capital_allowance = $client->CapitalAllowance();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aia_shared` | `float` | No | Optional. |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `full_expensed_disposals` | `float` | No | Sale proceeds of assets that had full expensing on their whole cost, sold this period. |
| `input` | `array` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `main_pool_brought_forward` | `float` | No | Main pool balance carried forward from the previous accounting period (0 if none). |
| `main_pool_disposals` | `float` | No | Sale proceeds of main pool assets sold this period that did NOT have full expensing (for example, assets that had the annual investment allowance or were pooled). |
| `new_main_plant` | `float` | No | Cost of new and unused plant, machinery, equipment and vans (not cars). |
| `new_special_rate` | `float` | No | Cost of new and unused integral features (electrical, lighting, heating, water, lifts, air conditioning), long-life assets, thermal insulation and solar panels. |
| `other_cars_high_co2` | `float` | No | Cost of cars with CO2 emissions over 50 g/km. |
| `other_cars_low_co2` | `float` | No | Cost of cars (other than new zero-emission cars) with CO2 emissions of 50 g/km or less. |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | Last day of the accounting period, as YYYY-MM-DD. |
| `period_start` | `string` | Yes | First day of the Corporation Tax accounting period, as YYYY-MM-DD. |
| `result` | `array` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `special_pool_brought_forward` | `float` | No | Special rate pool balance carried forward from the previous accounting period (0 if none). |
| `spend_date` | `string` | No | Optional. |
| `tool` | `string` | Yes |  |
| `used_main_plant` | `float` | No | Cost of second-hand main-rate plant, machinery, equipment and vans (not cars). |
| `used_special_rate` | `float` | No | Cost of second-hand integral features, long-life assets, thermal insulation and solar panels. |
| `zero_emission_cars` | `float` | No | Cost of new and unused cars with 0 g/km CO2 (fully electric). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CapitalAllowance()->create([
  "period_end" => null, // string
  "period_start" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->CapitalAllowance()->load(["period_end" => "period_end", "period_start" => "period_start"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CapitalAllowanceEntity`

Create a new `CapitalAllowanceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChargeableGainEntity

```php
$chargeable_gain = $client->ChargeableGain();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acquisition_cost` | `float` | Yes | What the company paid for the asset, in pounds. |
| `acquisition_costs` | `float` | No | Optional. |
| `acquisition_date` | `string` | Yes | When the company bought the asset (exchange of contracts), as YYYY-MM-DD. |
| `asset_type` | `string` | Yes | "land_buildings": UK land or buildings (the company's whole interest; a freehold or a lease with more than 50 years left). |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `disposal_costs` | `float` | No | Optional. |
| `disposal_date` | `string` | Yes | When the company sold the asset (exchange of contracts), as YYYY-MM-DD. |
| `enhancement_cost` | `float` | No | Optional, land and buildings only. |
| `enhancement_date` | `string` | No | Optional, land and buildings only. |
| `input` | `array` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `proceeds` | `float` | Yes | What the company sold the asset for, in pounds. |
| `result` | `array` | Yes |  |
| `sba_claimed` | `float` | No | Optional, land and buildings only. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ChargeableGain()->create([
  "acquisition_cost" => null, // float
  "acquisition_date" => null, // string
  "asset_type" => null, // string
  "disposal_date" => null, // string
  "proceeds" => null, // float
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ChargeableGain()->load(["acquisition_date" => "acquisition_date", "asset_type" => "asset_type", "disposal_date" => "disposal_date", "proceed" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChargeableGainEntity`

Create a new `ChargeableGainEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CompanyCarEntity

```php
$company_car = $client->CompanyCar();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acquisition` | `string` | No | Optional. |
| `annual_lease_cost` | `float` | No | For "lease": the lease rentals the company pays in its year, in pounds, excluding VAT it can reclaim. |
| `associated_companies` | `int` | No | Optional, with company_profits. |
| `calculated_by` | `string` | Yes |  |
| `capital_contribution` | `float` | No | Optional. |
| `co2_gkm` | `int` | No | The car's approved CO2 emissions in g/km, from the V5C or certificate of conformity (WLTP for cars first registered from 6 April 2020, NEDC before; both give the same percentage in 2025/26 and 2026/27). |
| `company_profits` | `float` | No | Optional. |
| `disclaimer` | `string` | Yes |  |
| `electric_range_miles` | `int` | No | For a plug-in hybrid only: the zero-emission (electric) range in miles from the certificate of conformity, rounded up. |
| `fuel_type` | `string` | Yes | "electric" (fully electric or any car with 0 g/km CO2), "petrol" (petrol, or ANY hybrid, petrol or diesel, including plug-in hybrids: hybrids never pay the diesel supplement), "diesel_rde2" (a diesel-only car certified to Euro 6d, also… |
| `income_tax_rate` | `string` | Yes | The director's top rate of Income Tax including the benefit: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | `array` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `lease_started` | `string` | No | Optional, for "lease": the date the hire period began, YYYY-MM-DD. |
| `list_price` | `float` | Yes | The car's list price when new, including VAT, delivery and any optional extras (the P11D price), in pounds. |
| `months_available` | `int` | No | Optional. |
| `new_car` | `bool` | No | Optional, for "buy". |
| `page_url` | `string` | Yes |  |
| `phev_easement` | `bool` | No | Optional. |
| `price_paid` | `float` | No | Optional, for "buy". |
| `private_fuel` | `bool` | No | Optional. |
| `result` | `array` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | Yes | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CompanyCar()->create([
  "fuel_type" => null, // string
  "income_tax_rate" => null, // string
  "list_price" => null, // float
  "tax_year" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->CompanyCar()->load(["fuel_type" => "fuel_type", "income_tax_rate" => "income_tax_rate", "list_price" => 1, "tax_year" => "tax_year"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CompanyCarEntity`

Create a new `CompanyCarEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CompanySizeEntity

```php
$company_size = $client->CompanySize();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `balance_sheet_total` | `float` | Yes | Balance sheet total: gross assets (fixed plus current assets, before liabilities) at the year end, in pounds. |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `employees` | `float` | Yes | Average number of employees in the year (monthly headcounts added up, divided by the number of months). |
| `first_year` | `bool` | No | True if this is the company's first financial year (then this year alone decides its size). |
| `input` | `array` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | Last day of the financial year, YYYY-MM-DD. |
| `period_start` | `string` | Yes | First day of the financial year (accounts period), YYYY-MM-DD. |
| `prev_balance_sheet_total` | `float` | No | Optional: last year's balance sheet total (gross assets), in pounds. |
| `prev_employees` | `float` | No | Optional: last year's average number of employees. |
| `prev_size` | `string` | No | Optional: what the company qualified as last year — micro, small (not micro) or medium_or_large (not small). |
| `prev_turnover` | `float` | No | Optional: last financial year's turnover, in pounds (assumed a 12-month year). |
| `result` | `array` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |
| `turnover` | `float` | Yes | Turnover for the financial year, in pounds. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CompanySize()->create([
  "balance_sheet_total" => null, // float
  "employees" => null, // float
  "period_end" => null, // string
  "period_start" => null, // string
  "turnover" => null, // float
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->CompanySize()->load(["balance_sheet_total" => 1, "employee" => 1, "period_end" => "period_end", "period_start" => "period_start", "turnover" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CompanySizeEntity`

Create a new `CompanySizeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CompanyVanEntity

```php
$company_van = $client->CompanyVan();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `int` | No | Optional, with company_profits. |
| `calculated_by` | `string` | Yes |  |
| `company_profits` | `float` | No | Optional. |
| `disclaimer` | `string` | Yes |  |
| `income_tax_rate` | `string` | Yes | The director's or employee's top rate of Income Tax: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | `array` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `months_available` | `int` | No | Optional. |
| `page_url` | `string` | Yes |  |
| `price_paid` | `float` | No | Optional. |
| `private_fuel` | `bool` | No | Optional. |
| `result` | `array` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | Yes | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` | `string` | Yes |  |
| `zero_emission` | `bool` | No | Optional. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CompanyVan()->create([
  "income_tax_rate" => null, // string
  "tax_year" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->CompanyVan()->load(["income_tax_rate" => "income_tax_rate", "tax_year" => "tax_year"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CompanyVanEntity`

Create a new `CompanyVanEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CorporationTaxEntity

```php
$corporation_tax = $client->CorporationTax();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `int` | No | How many other companies are associated with this one (under common control) in the period. |
| `calculated_by` | `string` | Yes |  |
| `close_investment_holding` | `bool` | No | True if the company is a close investment-holding company in the period (CTA 2010 s.18N): a close company is one unless, throughout the period, it exists wholly or mainly to trade commercially, to let land to people not connected with it,… |
| `disclaimer` | `string` | Yes |  |
| `exempt_distributions` | `float` | No | Exempt dividends received from companies outside the company's 51% group (and not from a trading company owned by a consortium it belongs to) (CTA 2010 s.18L), in pounds, used only to decide the rate. |
| `input` | `array` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | Last day of the accounting period, YYYY-MM-DD. |
| `period_start` | `string` | Yes | First day of the accounting period, YYYY-MM-DD (for example 2025-04-01). |
| `result` | `array` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `taxable_profits` | `float` | Yes | Taxable total profits for the period in pounds, after tax adjustments and reliefs (CT600 box 315). |
| `tool` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CorporationTax()->create([
  "period_end" => null, // string
  "period_start" => null, // string
  "taxable_profits" => null, // float
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->CorporationTax()->load(["period_end" => "period_end", "period_start" => "period_start", "taxable_profit" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CorporationTaxEntity`

Create a new `CorporationTaxEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeadlineEntity

```php
$deadline = $client->Deadline();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `input` | `array` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | The last day of the accounts period (the company's year end or accounting reference date), as YYYY-MM-DD. |
| `period_start` | `string` | No | Optional. |
| `result` | `array` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Deadline()->create([
  "period_end" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Deadline()->load(["period_end" => "period_end"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeadlineEntity`

Create a new `DeadlineEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DirectorPensionEntity

```php
$director_pension = $client->DirectorPension();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `int` | No | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` | `string` | Yes |  |
| `company_profit` | `float` | Yes | The company's taxable profit for its year before this contribution, after the director's existing salary and other costs, in pounds. |
| `contribution` | `float` | Yes | The amount the company would pay into the director's pension as an employer contribution, in pounds. |
| `director_only_employee` | `bool` | No | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `string` | Yes |  |
| `dividends` | `float` | No | Dividends the director already takes this tax year, in pounds. |
| `input` | `array` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `money_purchase_allowance` | `bool` | No | true if the director has already flexibly accessed a pension (for example taken cash from drawdown or an uncrystallised lump sum), so the £10,000 money purchase annual allowance applies. |
| `other_income` | `float` | No | The director's other taxable income for the tax year from outside the company, in pounds. |
| `other_pension_contributions` | `float` | No | Everything else paid into the director's pensions this tax year (their own contributions, before tax relief, and any other employer's), in pounds. |
| `page_url` | `string` | Yes |  |
| `result` | `array` | Yes |  |
| `salary` | `float` | No | The salary the director already takes from the company this tax year, in pounds. |
| `scottish_taxpayer` | `bool` | No | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | No | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->DirectorPension()->create([
  "company_profit" => null, // float
  "contribution" => null, // float
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->DirectorPension()->load(["company_profit" => 1, "contribution" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DirectorPensionEntity`

Create a new `DirectorPensionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DirectorsLoanEntity

```php
$directors_loan = $client->DirectorsLoan();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `benefit_closing_balance` | `float` | No | Maximum loan balance on 5 April at the end of the selected tax year, or when the loan ended, in pounds. |
| `benefit_interest_paid` | `float` | No | Interest the director was required to pay and actually paid for the selected tax year, in pounds. |
| `benefit_maximum_balance` | `float` | No | Highest total beneficial-loan balance at any time in the tax year, in pounds, used for the £10,000 exemption. |
| `benefit_opening_balance` | `float` | No | Maximum loan balance on 5 April before the selected tax year, or when the loan began, in pounds. |
| `benefit_tax_year` | `string` | No | Optional UK tax year for the beneficial-loan calculation: 2025-26 or 2026-27. |
| `benefit_whole_months` | `int` | No | Whole months the loan was outstanding in the selected tax year, from 1 to 12. |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `input` | `array` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `loan_made_on` | `string` | No | Date the loan was made, YYYY-MM-DD, within the accounting period. |
| `marginal_income_tax_rate` | `float` | No | Director’s marginal Income Tax rate as a percentage, used only to estimate personal tax on the benefit. |
| `outstanding` | `float` | Yes | Loan balance the director or other participator owed the company at the period end, in pounds. |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | Last day of the company's Corporation Tax accounting period, YYYY-MM-DD. |
| `repaid_within_9_months` | `float` | No | Part of that balance repaid, released or written off after the period end and within 9 months of it (before the s.455 tax is due), in pounds. |
| `result` | `array` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->DirectorsLoan()->create([
  "outstanding" => null, // float
  "period_end" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->DirectorsLoan()->load(["outstanding" => 1, "period_end" => "period_end"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DirectorsLoanEntity`

Create a new `DirectorsLoanEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DividendReserveEntity

```php
$dividend_reserve = $client->DividendReserve();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `dividends_already_paid` | `float` | Yes | Dividends already paid or declared from these profits, in pounds. |
| `input` | `array` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `profit_after_tax` | `float` | Yes | This period’s realised profit after Corporation Tax, in pounds. |
| `proposed_dividend` | `float` | Yes | Dividend now proposed, in pounds. |
| `result` | `array` | Yes |  |
| `retained_profits_brought_forward` | `float` | Yes | Accumulated retained profits or losses brought forward, in pounds. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->DividendReserve()->create([
  "dividends_already_paid" => null, // float
  "profit_after_tax" => null, // float
  "proposed_dividend" => null, // float
  "retained_profits_brought_forward" => null, // float
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->DividendReserve()->load(["dividends_already_paid" => 1, "profit_after_tax" => 1, "proposed_dividend" => 1, "retained_profits_brought_forward" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DividendReserveEntity`

Create a new `DividendReserveEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HomeOfficeEntity

```php
$home_office = $client->HomeOffice();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actual_additional_costs` | `float` | No | Optional total reasonable additional household costs caused by working at home, in pounds, supported by records. |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `frequency` | `string` | Yes | Whether to use HMRC’s £6 weekly rate or £26 monthly rate. |
| `input` | `array` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `periods` | `int` | Yes | Number of weeks or months of regular homeworking in the tax year; no more than 52 weeks or 12 months. |
| `result` | `array` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | Yes | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->HomeOffice()->create([
  "frequency" => null, // string
  "periods" => null, // int
  "tax_year" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->HomeOffice()->load(["frequency" => "frequency", "period" => 1, "tax_year" => "tax_year"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HomeOfficeEntity`

Create a new `HomeOfficeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LatePenaltyEntity

```php
$late_penalty = $client->LatePenalty();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `filed_on` | `string` | Yes | The date the CT600 was, or will be, filed with HMRC. |
| `input` | `array` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `late_previous_two` | `bool` | No | True if the company was liable to a late filing penalty for each of its two previous accounting periods (consecutive, and within Corporation Tax throughout). |
| `page_url` | `string` | Yes |  |
| `paid_on` | `string` | No | The date the Corporation Tax was, or will be, paid in full. |
| `period_end` | `string` | Yes | Last day of the Corporation Tax accounting period the CT600 covers (YYYY-MM-DD), on or after 2015-04-01. |
| `period_of_account_end` | `string` | No | Only if the company's accounts cover more than 12 months (up to 18): the last day of that period of account, no more than 6 months after period_end. |
| `result` | `array` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_due` | `float` | No | Corporation Tax payable for the accounting period, in pounds. |
| `tool` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->LatePenalty()->create([
  "filed_on" => null, // string
  "period_end" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->LatePenalty()->load(["filed_on" => "filed_on", "period_end" => "period_end"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LatePenaltyEntity`

Create a new `LatePenaltyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LongPeriodEntity

```php
$long_period = $client->LongPeriod();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `first_accounts` | `bool` | No | Optional: true if these are the company's first accounts (sets the Companies House deadline). |
| `input` | `array` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | Last day of the accounts, YYYY-MM-DD. |
| `period_start` | `string` | Yes | First day of the accounts (period of account), YYYY-MM-DD. |
| `profit` | `float` | No | Optional: trading profit for the whole period in pounds, to split by days. |
| `result` | `array` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->LongPeriod()->create([
  "period_end" => null, // string
  "period_start" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->LongPeriod()->load(["period_end" => "period_end", "period_start" => "period_start"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LongPeriodEntity`

Create a new `LongPeriodEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MileageAllowanceEntity

```php
$mileage_allowance = $client->MileageAllowance();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_miles` | `int` | Yes | Total qualifying business miles in this vehicle category during the tax year. |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `employer_payment` | `float` | Yes | Total mileage allowance paid by the company for those miles, in pounds. |
| `input` | `array` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `result` | `array` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | Yes | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `string` | Yes |  |
| `vehicle` | `string` | Yes | The employee-owned vehicle used for business travel: car_van, motorcycle or bicycle. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->MileageAllowance()->create([
  "business_miles" => null, // int
  "employer_payment" => null, // float
  "tax_year" => null, // string
  "vehicle" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->MileageAllowance()->load(["business_mile" => 1, "employer_payment" => 1, "tax_year" => "tax_year", "vehicle" => "vehicle"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MileageAllowanceEntity`

Create a new `MileageAllowanceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SalaryDividendEntity

```php
$salary_dividend = $client->SalaryDividend();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `int` | No | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` | `string` | Yes |  |
| `company_profit` | `float` | Yes | The company's profit for the year before paying the director any salary, after all its other costs, in pounds. |
| `director_only_employee` | `bool` | No | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `string` | Yes |  |
| `input` | `array` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | `float` | No | The director's other taxable income for the tax year from outside this company, such as another job, a pension or rental profit, in pounds. |
| `page_url` | `string` | Yes |  |
| `result` | `array` | Yes |  |
| `salary` | `float` | No | Optional: a salary you want to compare with the standard options, in pounds a year. |
| `scottish_taxpayer` | `bool` | No | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | No | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->SalaryDividend()->create([
  "company_profit" => null, // float
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->SalaryDividend()->load(["company_profit" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SalaryDividendEntity`

Create a new `SalaryDividendEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SoleTraderVsLimitedEntity

```php
$sole_trader_vs_limited = $client->SoleTraderVsLimited();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `string` | Yes |  |
| `director_only_employee` | `bool` | No | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `string` | Yes |  |
| `input` | `array` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | `float` | No | The owner's other taxable income for the tax year, such as a job, a pension or rental profit, in pounds. |
| `page_url` | `string` | Yes |  |
| `profit` | `float` | Yes | The business's profit for the year, after expenses and before any tax or pay to the owner, in pounds. |
| `result` | `array` | Yes |  |
| `scottish_taxpayer` | `bool` | No | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | No | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->SoleTraderVsLimited()->create([
  "profit" => null, // float
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->SoleTraderVsLimited()->load(["profit" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SoleTraderVsLimitedEntity`

Create a new `SoleTraderVsLimitedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ToolEntity

```php
$tool = $client->Tool();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Tool()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ToolEntity`

Create a new `ToolEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TrivialBenefitEntity

```php
$trivial_benefit = $client->TrivialBenefit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `benefit_cost` | `float` | Yes | Cost to the company of this individual benefit, in pounds. |
| `calculated_by` | `string` | Yes |  |
| `cash_or_cash_voucher` | `bool` | Yes | True if the benefit is cash or a voucher exchangeable for cash. |
| `close_company_director` | `bool` | Yes | True if the recipient is a director or office holder of a close company. |
| `disclaimer` | `string` | Yes |  |
| `in_contract` | `bool` | Yes | True if the benefit is promised in the employment contract or other contractual terms. |
| `input` | `array` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `qualifying_benefits_so_far` | `float` | Yes | For a close-company director, total cost in pounds of earlier qualifying trivial benefits from this employer in the tax year. |
| `result` | `array` | Yes |  |
| `reward_for_work` | `bool` | Yes | True if the benefit rewards the employee’s work or performance. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | Yes | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->TrivialBenefit()->create([
  "benefit_cost" => null, // float
  "cash_or_cash_voucher" => null, // bool
  "close_company_director" => null, // bool
  "in_contract" => null, // bool
  "qualifying_benefits_so_far" => null, // float
  "reward_for_work" => null, // bool
  "tax_year" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->TrivialBenefit()->load(["benefit_cost" => 1, "cash_or_cash_voucher" => true, "close_company_director" => true, "in_contract" => true, "qualifying_benefits_so_far" => 1, "reward_for_work" => true, "tax_year" => "tax_year"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TrivialBenefitEntity`

Create a new `TrivialBenefitEntity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new TaxleyCorporationTaxSDK([
  "feature" => [
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

