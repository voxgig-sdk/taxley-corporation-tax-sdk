# TaxleyCorporationTax TypeScript SDK Reference

Complete API reference for the TaxleyCorporationTax TypeScript SDK.


## TaxleyCorporationTaxSDK

### Constructor

```ts
new TaxleyCorporationTaxSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TaxleyCorporationTaxSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = TaxleyCorporationTaxSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `TaxleyCorporationTaxSDK` instance in test mode.


### Instance Methods

#### `CapitalAllowance(data?: object)`

Create a new `CapitalAllowance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CapitalAllowanceEntity` instance.

#### `ChargeableGain(data?: object)`

Create a new `ChargeableGain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChargeableGainEntity` instance.

#### `CompanyCar(data?: object)`

Create a new `CompanyCar` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompanyCarEntity` instance.

#### `CompanySize(data?: object)`

Create a new `CompanySize` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompanySizeEntity` instance.

#### `CompanyVan(data?: object)`

Create a new `CompanyVan` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompanyVanEntity` instance.

#### `CorporationTax(data?: object)`

Create a new `CorporationTax` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CorporationTaxEntity` instance.

#### `Deadline(data?: object)`

Create a new `Deadline` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeadlineEntity` instance.

#### `DirectorPension(data?: object)`

Create a new `DirectorPension` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DirectorPensionEntity` instance.

#### `DirectorsLoan(data?: object)`

Create a new `DirectorsLoan` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DirectorsLoanEntity` instance.

#### `DividendReserve(data?: object)`

Create a new `DividendReserve` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DividendReserveEntity` instance.

#### `HomeOffice(data?: object)`

Create a new `HomeOffice` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HomeOfficeEntity` instance.

#### `LatePenalty(data?: object)`

Create a new `LatePenalty` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LatePenaltyEntity` instance.

#### `LongPeriod(data?: object)`

Create a new `LongPeriod` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LongPeriodEntity` instance.

#### `MileageAllowance(data?: object)`

Create a new `MileageAllowance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MileageAllowanceEntity` instance.

#### `SalaryDividend(data?: object)`

Create a new `SalaryDividend` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SalaryDividendEntity` instance.

#### `SoleTraderVsLimited(data?: object)`

Create a new `SoleTraderVsLimited` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SoleTraderVsLimitedEntity` instance.

#### `Tool(data?: object)`

Create a new `Tool` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ToolEntity` instance.

#### `TrivialBenefit(data?: object)`

Create a new `TrivialBenefit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TrivialBenefitEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |
| `fetchargs.ctrl.signal` | `AbortSignal` | Aborts the request in flight: `ok` is then `false` and `err.code` is `request_aborted`. |

**Returns:** `Promise<{ ok, status, headers, data }>`. On a failure
`ok` is `false` and `err` holds the error.

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `TaxleyCorporationTaxSDK.test()`.

**Returns:** `TaxleyCorporationTaxSDK` instance in test mode.

#### Cancelling a call

Every entity operation takes an optional `ctrl` object after its match or
data, and an `AbortSignal` in `ctrl.signal` cancels the request in flight.
The operation then rejects with an error whose `code` is
`request_aborted` and whose `cause` is the signal's reason. A request
whose signal has already aborted is not sent. `stream()` takes the signal
as `callopts.signal`, and ends when it aborts.


---

## CapitalAllowanceEntity

```ts
const capital_allowance = client.CapitalAllowance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aia_shared` | `number` | No | Optional. |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `full_expensed_disposals` | `number` | No | Sale proceeds of assets that had full expensing on their whole cost, sold this period. |
| `input` | `Record<string, any>` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `main_pool_brought_forward` | `number` | No | Main pool balance carried forward from the previous accounting period (0 if none). |
| `main_pool_disposals` | `number` | No | Sale proceeds of main pool assets sold this period that did NOT have full expensing (for example, assets that had the annual investment allowance or were pooled). |
| `new_main_plant` | `number` | No | Cost of new and unused plant, machinery, equipment and vans (not cars). |
| `new_special_rate` | `number` | No | Cost of new and unused integral features (electrical, lighting, heating, water, lifts, air conditioning), long-life assets, thermal insulation and solar panels. |
| `other_cars_high_co2` | `number` | No | Cost of cars with CO2 emissions over 50 g/km. |
| `other_cars_low_co2` | `number` | No | Cost of cars (other than new zero-emission cars) with CO2 emissions of 50 g/km or less. |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | Last day of the accounting period, as YYYY-MM-DD. |
| `period_start` | `string` | Yes | First day of the Corporation Tax accounting period, as YYYY-MM-DD. |
| `result` | `Record<string, any>` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `special_pool_brought_forward` | `number` | No | Special rate pool balance carried forward from the previous accounting period (0 if none). |
| `spend_date` | `string` | No | Optional. |
| `tool` | `string` | Yes |  |
| `used_main_plant` | `number` | No | Cost of second-hand main-rate plant, machinery, equipment and vans (not cars). |
| `used_special_rate` | `number` | No | Cost of second-hand integral features, long-life assets, thermal insulation and solar panels. |
| `zero_emission_cars` | `number` | No | Cost of new and unused cars with 0 g/km CO2 (fully electric). |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CapitalAllowance().create({
  period_end: 'example_period_end',
  period_start: 'example_period_start',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.CapitalAllowance().load({ period_end: 'period_end', period_start: 'period_start' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CapitalAllowanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChargeableGainEntity

```ts
const chargeable_gain = client.ChargeableGain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acquisition_cost` | `number` | Yes | What the company paid for the asset, in pounds. |
| `acquisition_costs` | `number` | No | Optional. |
| `acquisition_date` | `string` | Yes | When the company bought the asset (exchange of contracts), as YYYY-MM-DD. |
| `asset_type` | `string` | Yes | "land_buildings": UK land or buildings (the company's whole interest; a freehold or a lease with more than 50 years left). |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `disposal_costs` | `number` | No | Optional. |
| `disposal_date` | `string` | Yes | When the company sold the asset (exchange of contracts), as YYYY-MM-DD. |
| `enhancement_cost` | `number` | No | Optional, land and buildings only. |
| `enhancement_date` | `string` | No | Optional, land and buildings only. |
| `input` | `Record<string, any>` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `proceeds` | `number` | Yes | What the company sold the asset for, in pounds. |
| `result` | `Record<string, any>` | Yes |  |
| `sba_claimed` | `number` | No | Optional, land and buildings only. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ChargeableGain().create({
  acquisition_cost: 1,
  acquisition_date: 'example_acquisition_date',
  asset_type: 'example_asset_type',
  disposal_date: 'example_disposal_date',
  proceeds: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ChargeableGain().load({ acquisition_date: 'acquisition_date', asset_type: 'asset_type', disposal_date: 'disposal_date', proceed: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChargeableGainEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompanyCarEntity

```ts
const company_car = client.CompanyCar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acquisition` | `string` | No | Optional. |
| `annual_lease_cost` | `number` | No | For "lease": the lease rentals the company pays in its year, in pounds, excluding VAT it can reclaim. |
| `associated_companies` | `number` | No | Optional, with company_profits. |
| `calculated_by` | `string` | Yes |  |
| `capital_contribution` | `number` | No | Optional. |
| `co2_gkm` | `number` | No | The car's approved CO2 emissions in g/km, from the V5C or certificate of conformity (WLTP for cars first registered from 6 April 2020, NEDC before; both give the same percentage in 2025/26 and 2026/27). |
| `company_profits` | `number` | No | Optional. |
| `disclaimer` | `string` | Yes |  |
| `electric_range_miles` | `number` | No | For a plug-in hybrid only: the zero-emission (electric) range in miles from the certificate of conformity, rounded up. |
| `fuel_type` | `string` | Yes | "electric" (fully electric or any car with 0 g/km CO2), "petrol" (petrol, or ANY hybrid, petrol or diesel, including plug-in hybrids: hybrids never pay the diesel supplement), "diesel_rde2" (a diesel-only car certified to Euro 6d, also… |
| `income_tax_rate` | `string` | Yes | The director's top rate of Income Tax including the benefit: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | `Record<string, any>` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `lease_started` | `string` | No | Optional, for "lease": the date the hire period began, YYYY-MM-DD. |
| `list_price` | `number` | Yes | The car's list price when new, including VAT, delivery and any optional extras (the P11D price), in pounds. |
| `months_available` | `number` | No | Optional. |
| `new_car` | `boolean` | No | Optional, for "buy". |
| `page_url` | `string` | Yes |  |
| `phev_easement` | `boolean` | No | Optional. |
| `price_paid` | `number` | No | Optional, for "buy". |
| `private_fuel` | `boolean` | No | Optional. |
| `result` | `Record<string, any>` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | Yes | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CompanyCar().create({
  fuel_type: 'example_fuel_type',
  income_tax_rate: 'example_income_tax_rate',
  list_price: 1,
  tax_year: 'example_tax_year',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.CompanyCar().load({ fuel_type: 'fuel_type', income_tax_rate: 'income_tax_rate', list_price: 1, tax_year: 'tax_year' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompanyCarEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompanySizeEntity

```ts
const company_size = client.CompanySize()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `balance_sheet_total` | `number` | Yes | Balance sheet total: gross assets (fixed plus current assets, before liabilities) at the year end, in pounds. |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `employees` | `number` | Yes | Average number of employees in the year (monthly headcounts added up, divided by the number of months). |
| `first_year` | `boolean` | No | True if this is the company's first financial year (then this year alone decides its size). |
| `input` | `Record<string, any>` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | Last day of the financial year, YYYY-MM-DD. |
| `period_start` | `string` | Yes | First day of the financial year (accounts period), YYYY-MM-DD. |
| `prev_balance_sheet_total` | `number` | No | Optional: last year's balance sheet total (gross assets), in pounds. |
| `prev_employees` | `number` | No | Optional: last year's average number of employees. |
| `prev_size` | `string` | No | Optional: what the company qualified as last year — micro, small (not micro) or medium_or_large (not small). |
| `prev_turnover` | `number` | No | Optional: last financial year's turnover, in pounds (assumed a 12-month year). |
| `result` | `Record<string, any>` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |
| `turnover` | `number` | Yes | Turnover for the financial year, in pounds. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CompanySize().create({
  balance_sheet_total: 1,
  employees: 1,
  period_end: 'example_period_end',
  period_start: 'example_period_start',
  turnover: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.CompanySize().load({ balance_sheet_total: 1, employee: 1, period_end: 'period_end', period_start: 'period_start', turnover: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompanySizeEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompanyVanEntity

```ts
const company_van = client.CompanyVan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `number` | No | Optional, with company_profits. |
| `calculated_by` | `string` | Yes |  |
| `company_profits` | `number` | No | Optional. |
| `disclaimer` | `string` | Yes |  |
| `income_tax_rate` | `string` | Yes | The director's or employee's top rate of Income Tax: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | `Record<string, any>` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `months_available` | `number` | No | Optional. |
| `page_url` | `string` | Yes |  |
| `price_paid` | `number` | No | Optional. |
| `private_fuel` | `boolean` | No | Optional. |
| `result` | `Record<string, any>` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | Yes | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` | `string` | Yes |  |
| `zero_emission` | `boolean` | No | Optional. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CompanyVan().create({
  income_tax_rate: 'example_income_tax_rate',
  tax_year: 'example_tax_year',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.CompanyVan().load({ income_tax_rate: 'income_tax_rate', tax_year: 'tax_year' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompanyVanEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CorporationTaxEntity

```ts
const corporation_tax = client.CorporationTax()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `number` | No | How many other companies are associated with this one (under common control) in the period. |
| `calculated_by` | `string` | Yes |  |
| `close_investment_holding` | `boolean` | No | True if the company is a close investment-holding company in the period (CTA 2010 s.18N): a close company is one unless, throughout the period, it exists wholly or mainly to trade commercially, to let land to people not connected with it,… |
| `disclaimer` | `string` | Yes |  |
| `exempt_distributions` | `number` | No | Exempt dividends received from companies outside the company's 51% group (and not from a trading company owned by a consortium it belongs to) (CTA 2010 s.18L), in pounds, used only to decide the rate. |
| `input` | `Record<string, any>` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | Last day of the accounting period, YYYY-MM-DD. |
| `period_start` | `string` | Yes | First day of the accounting period, YYYY-MM-DD (for example 2025-04-01). |
| `result` | `Record<string, any>` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `taxable_profits` | `number` | Yes | Taxable total profits for the period in pounds, after tax adjustments and reliefs (CT600 box 315). |
| `tool` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CorporationTax().create({
  period_end: 'example_period_end',
  period_start: 'example_period_start',
  taxable_profits: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.CorporationTax().load({ period_end: 'period_end', period_start: 'period_start', taxable_profit: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CorporationTaxEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeadlineEntity

```ts
const deadline = client.Deadline()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `input` | `Record<string, any>` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | The last day of the accounts period (the company's year end or accounting reference date), as YYYY-MM-DD. |
| `period_start` | `string` | No | Optional. |
| `result` | `Record<string, any>` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Deadline().create({
  period_end: 'example_period_end',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Deadline().load({ period_end: 'period_end' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeadlineEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DirectorPensionEntity

```ts
const director_pension = client.DirectorPension()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `number` | No | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` | `string` | Yes |  |
| `company_profit` | `number` | Yes | The company's taxable profit for its year before this contribution, after the director's existing salary and other costs, in pounds. |
| `contribution` | `number` | Yes | The amount the company would pay into the director's pension as an employer contribution, in pounds. |
| `director_only_employee` | `boolean` | No | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `string` | Yes |  |
| `dividends` | `number` | No | Dividends the director already takes this tax year, in pounds. |
| `input` | `Record<string, any>` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `money_purchase_allowance` | `boolean` | No | true if the director has already flexibly accessed a pension (for example taken cash from drawdown or an uncrystallised lump sum), so the £10,000 money purchase annual allowance applies. |
| `other_income` | `number` | No | The director's other taxable income for the tax year from outside the company, in pounds. |
| `other_pension_contributions` | `number` | No | Everything else paid into the director's pensions this tax year (their own contributions, before tax relief, and any other employer's), in pounds. |
| `page_url` | `string` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `salary` | `number` | No | The salary the director already takes from the company this tax year, in pounds. |
| `scottish_taxpayer` | `boolean` | No | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | No | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DirectorPension().create({
  company_profit: 1,
  contribution: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.DirectorPension().load({ company_profit: 1, contribution: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DirectorPensionEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DirectorsLoanEntity

```ts
const directors_loan = client.DirectorsLoan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `benefit_closing_balance` | `number` | No | Maximum loan balance on 5 April at the end of the selected tax year, or when the loan ended, in pounds. |
| `benefit_interest_paid` | `number` | No | Interest the director was required to pay and actually paid for the selected tax year, in pounds. |
| `benefit_maximum_balance` | `number` | No | Highest total beneficial-loan balance at any time in the tax year, in pounds, used for the £10,000 exemption. |
| `benefit_opening_balance` | `number` | No | Maximum loan balance on 5 April before the selected tax year, or when the loan began, in pounds. |
| `benefit_tax_year` | `string` | No | Optional UK tax year for the beneficial-loan calculation: 2025-26 or 2026-27. |
| `benefit_whole_months` | `number` | No | Whole months the loan was outstanding in the selected tax year, from 1 to 12. |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `input` | `Record<string, any>` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `loan_made_on` | `string` | No | Date the loan was made, YYYY-MM-DD, within the accounting period. |
| `marginal_income_tax_rate` | `number` | No | Director’s marginal Income Tax rate as a percentage, used only to estimate personal tax on the benefit. |
| `outstanding` | `number` | Yes | Loan balance the director or other participator owed the company at the period end, in pounds. |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | Last day of the company's Corporation Tax accounting period, YYYY-MM-DD. |
| `repaid_within_9_months` | `number` | No | Part of that balance repaid, released or written off after the period end and within 9 months of it (before the s.455 tax is due), in pounds. |
| `result` | `Record<string, any>` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DirectorsLoan().create({
  outstanding: 1,
  period_end: 'example_period_end',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.DirectorsLoan().load({ outstanding: 1, period_end: 'period_end' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DirectorsLoanEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DividendReserveEntity

```ts
const dividend_reserve = client.DividendReserve()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `dividends_already_paid` | `number` | Yes | Dividends already paid or declared from these profits, in pounds. |
| `input` | `Record<string, any>` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `profit_after_tax` | `number` | Yes | This period’s realised profit after Corporation Tax, in pounds. |
| `proposed_dividend` | `number` | Yes | Dividend now proposed, in pounds. |
| `result` | `Record<string, any>` | Yes |  |
| `retained_profits_brought_forward` | `number` | Yes | Accumulated retained profits or losses brought forward, in pounds. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DividendReserve().create({
  dividends_already_paid: 1,
  profit_after_tax: 1,
  proposed_dividend: 1,
  retained_profits_brought_forward: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.DividendReserve().load({ dividends_already_paid: 1, profit_after_tax: 1, proposed_dividend: 1, retained_profits_brought_forward: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DividendReserveEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HomeOfficeEntity

```ts
const home_office = client.HomeOffice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actual_additional_costs` | `number` | No | Optional total reasonable additional household costs caused by working at home, in pounds, supported by records. |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `frequency` | `string` | Yes | Whether to use HMRC’s £6 weekly rate or £26 monthly rate. |
| `input` | `Record<string, any>` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `periods` | `number` | Yes | Number of weeks or months of regular homeworking in the tax year; no more than 52 weeks or 12 months. |
| `result` | `Record<string, any>` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | Yes | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.HomeOffice().create({
  frequency: 'example_frequency',
  periods: 1,
  tax_year: 'example_tax_year',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.HomeOffice().load({ frequency: 'frequency', period: 1, tax_year: 'tax_year' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HomeOfficeEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LatePenaltyEntity

```ts
const late_penalty = client.LatePenalty()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `filed_on` | `string` | Yes | The date the CT600 was, or will be, filed with HMRC. |
| `input` | `Record<string, any>` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `late_previous_two` | `boolean` | No | True if the company was liable to a late filing penalty for each of its two previous accounting periods (consecutive, and within Corporation Tax throughout). |
| `page_url` | `string` | Yes |  |
| `paid_on` | `string` | No | The date the Corporation Tax was, or will be, paid in full. |
| `period_end` | `string` | Yes | Last day of the Corporation Tax accounting period the CT600 covers (YYYY-MM-DD), on or after 2015-04-01. |
| `period_of_account_end` | `string` | No | Only if the company's accounts cover more than 12 months (up to 18): the last day of that period of account, no more than 6 months after period_end. |
| `result` | `Record<string, any>` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_due` | `number` | No | Corporation Tax payable for the accounting period, in pounds. |
| `tool` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.LatePenalty().create({
  filed_on: 'example_filed_on',
  period_end: 'example_period_end',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.LatePenalty().load({ filed_on: 'filed_on', period_end: 'period_end' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LatePenaltyEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LongPeriodEntity

```ts
const long_period = client.LongPeriod()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `first_accounts` | `boolean` | No | Optional: true if these are the company's first accounts (sets the Companies House deadline). |
| `input` | `Record<string, any>` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `period_end` | `string` | Yes | Last day of the accounts, YYYY-MM-DD. |
| `period_start` | `string` | Yes | First day of the accounts (period of account), YYYY-MM-DD. |
| `profit` | `number` | No | Optional: trading profit for the whole period in pounds, to split by days. |
| `result` | `Record<string, any>` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.LongPeriod().create({
  period_end: 'example_period_end',
  period_start: 'example_period_start',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.LongPeriod().load({ period_end: 'period_end', period_start: 'period_start' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LongPeriodEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MileageAllowanceEntity

```ts
const mileage_allowance = client.MileageAllowance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_miles` | `number` | Yes | Total qualifying business miles in this vehicle category during the tax year. |
| `calculated_by` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `employer_payment` | `number` | Yes | Total mileage allowance paid by the company for those miles, in pounds. |
| `input` | `Record<string, any>` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | Yes | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `string` | Yes |  |
| `vehicle` | `string` | Yes | The employee-owned vehicle used for business travel: car_van, motorcycle or bicycle. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.MileageAllowance().create({
  business_miles: 1,
  employer_payment: 1,
  tax_year: 'example_tax_year',
  vehicle: 'example_vehicle',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.MileageAllowance().load({ business_mile: 1, employer_payment: 1, tax_year: 'tax_year', vehicle: 'vehicle' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MileageAllowanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SalaryDividendEntity

```ts
const salary_dividend = client.SalaryDividend()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `number` | No | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` | `string` | Yes |  |
| `company_profit` | `number` | Yes | The company's profit for the year before paying the director any salary, after all its other costs, in pounds. |
| `director_only_employee` | `boolean` | No | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `string` | Yes |  |
| `input` | `Record<string, any>` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | `number` | No | The director's other taxable income for the tax year from outside this company, such as another job, a pension or rental profit, in pounds. |
| `page_url` | `string` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `salary` | `number` | No | Optional: a salary you want to compare with the standard options, in pounds a year. |
| `scottish_taxpayer` | `boolean` | No | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | No | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.SalaryDividend().create({
  company_profit: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.SalaryDividend().load({ company_profit: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SalaryDividendEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SoleTraderVsLimitedEntity

```ts
const sole_trader_vs_limited = client.SoleTraderVsLimited()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `string` | Yes |  |
| `director_only_employee` | `boolean` | No | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `string` | Yes |  |
| `input` | `Record<string, any>` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | `number` | No | The owner's other taxable income for the tax year, such as a job, a pension or rental profit, in pounds. |
| `page_url` | `string` | Yes |  |
| `profit` | `number` | Yes | The business's profit for the year, after expenses and before any tax or pay to the owner, in pounds. |
| `result` | `Record<string, any>` | Yes |  |
| `scottish_taxpayer` | `boolean` | No | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | No | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.SoleTraderVsLimited().create({
  profit: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.SoleTraderVsLimited().load({ profit: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SoleTraderVsLimitedEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ToolEntity

```ts
const tool = client.Tool()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Tool().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ToolEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TrivialBenefitEntity

```ts
const trivial_benefit = client.TrivialBenefit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `benefit_cost` | `number` | Yes | Cost to the company of this individual benefit, in pounds. |
| `calculated_by` | `string` | Yes |  |
| `cash_or_cash_voucher` | `boolean` | Yes | True if the benefit is cash or a voucher exchangeable for cash. |
| `close_company_director` | `boolean` | Yes | True if the recipient is a director or office holder of a close company. |
| `disclaimer` | `string` | Yes |  |
| `in_contract` | `boolean` | Yes | True if the benefit is promised in the employment contract or other contractual terms. |
| `input` | `Record<string, any>` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` | Yes |  |
| `qualifying_benefits_so_far` | `number` | Yes | For a close-company director, total cost in pounds of earlier qualifying trivial benefits from this employer in the tax year. |
| `result` | `Record<string, any>` | Yes |  |
| `reward_for_work` | `boolean` | Yes | True if the benefit rewards the employee’s work or performance. |
| `share_url` | `string` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | Yes | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.TrivialBenefit().create({
  benefit_cost: 1,
  cash_or_cash_voucher: true,
  close_company_director: true,
  in_contract: true,
  qualifying_benefits_so_far: 1,
  reward_for_work: true,
  tax_year: 'example_tax_year',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.TrivialBenefit().load({ benefit_cost: 1, cash_or_cash_voucher: true, close_company_director: true, in_contract: true, qualifying_benefits_so_far: 1, reward_for_work: true, tax_year: 'tax_year' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TrivialBenefitEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaxleyCorporationTaxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```ts
const client = new TaxleyCorporationTaxSDK({
  feature: {
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

