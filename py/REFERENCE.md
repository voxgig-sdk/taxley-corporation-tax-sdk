# TaxleyCorporationTax Python SDK Reference

Complete API reference for the TaxleyCorporationTax Python SDK.


## TaxleyCorporationTaxSDK

### Constructor

```python
from taxleycorporationtax_sdk import TaxleyCorporationTaxSDK

client = TaxleyCorporationTaxSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TaxleyCorporationTaxSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = TaxleyCorporationTaxSDK.test()
```


### Instance Methods

#### `CapitalAllowance(data=None)`

Create a new `CapitalAllowanceEntity` instance. Pass `None` for no initial data.

#### `ChargeableGain(data=None)`

Create a new `ChargeableGainEntity` instance. Pass `None` for no initial data.

#### `CompanyCar(data=None)`

Create a new `CompanyCarEntity` instance. Pass `None` for no initial data.

#### `CompanySize(data=None)`

Create a new `CompanySizeEntity` instance. Pass `None` for no initial data.

#### `CompanyVan(data=None)`

Create a new `CompanyVanEntity` instance. Pass `None` for no initial data.

#### `CorporationTax(data=None)`

Create a new `CorporationTaxEntity` instance. Pass `None` for no initial data.

#### `Deadline(data=None)`

Create a new `DeadlineEntity` instance. Pass `None` for no initial data.

#### `DirectorPension(data=None)`

Create a new `DirectorPensionEntity` instance. Pass `None` for no initial data.

#### `DirectorsLoan(data=None)`

Create a new `DirectorsLoanEntity` instance. Pass `None` for no initial data.

#### `DividendReserve(data=None)`

Create a new `DividendReserveEntity` instance. Pass `None` for no initial data.

#### `HomeOffice(data=None)`

Create a new `HomeOfficeEntity` instance. Pass `None` for no initial data.

#### `LatePenalty(data=None)`

Create a new `LatePenaltyEntity` instance. Pass `None` for no initial data.

#### `LongPeriod(data=None)`

Create a new `LongPeriodEntity` instance. Pass `None` for no initial data.

#### `MileageAllowance(data=None)`

Create a new `MileageAllowanceEntity` instance. Pass `None` for no initial data.

#### `SalaryDividend(data=None)`

Create a new `SalaryDividendEntity` instance. Pass `None` for no initial data.

#### `SoleTraderVsLimited(data=None)`

Create a new `SoleTraderVsLimitedEntity` instance. Pass `None` for no initial data.

#### `Tool(data=None)`

Create a new `ToolEntity` instance. Pass `None` for no initial data.

#### `TrivialBenefit(data=None)`

Create a new `TrivialBenefitEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## CapitalAllowanceEntity

```python
capital_allowance = client.CapitalAllowance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aia_shared` | `float` | No | Optional. |
| `calculated_by` | `str` | Yes |  |
| `disclaimer` | `str` | Yes |  |
| `full_expensed_disposals` | `float` | No | Sale proceeds of assets that had full expensing on their whole cost, sold this period. |
| `input` | `dict` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `main_pool_brought_forward` | `float` | No | Main pool balance carried forward from the previous accounting period (0 if none). |
| `main_pool_disposals` | `float` | No | Sale proceeds of main pool assets sold this period that did NOT have full expensing (for example, assets that had the annual investment allowance or were pooled). |
| `new_main_plant` | `float` | No | Cost of new and unused plant, machinery, equipment and vans (not cars). |
| `new_special_rate` | `float` | No | Cost of new and unused integral features (electrical, lighting, heating, water, lifts, air conditioning), long-life assets, thermal insulation and solar panels. |
| `other_cars_high_co2` | `float` | No | Cost of cars with CO2 emissions over 50 g/km. |
| `other_cars_low_co2` | `float` | No | Cost of cars (other than new zero-emission cars) with CO2 emissions of 50 g/km or less. |
| `page_url` | `str` | Yes |  |
| `period_end` | `str` | Yes | Last day of the accounting period, as YYYY-MM-DD. |
| `period_start` | `str` | Yes | First day of the Corporation Tax accounting period, as YYYY-MM-DD. |
| `result` | `dict` | Yes |  |
| `share_url` | `str` | Yes | A link to this result on taxley.co.uk. |
| `special_pool_brought_forward` | `float` | No | Special rate pool balance carried forward from the previous accounting period (0 if none). |
| `spend_date` | `str` | No | Optional. |
| `tool` | `str` | Yes |  |
| `used_main_plant` | `float` | No | Cost of second-hand main-rate plant, machinery, equipment and vans (not cars). |
| `used_special_rate` | `float` | No | Cost of second-hand integral features, long-life assets, thermal insulation and solar panels. |
| `zero_emission_cars` | `float` | No | Cost of new and unused cars with 0 g/km CO2 (fully electric). |

### Operations

#### `create(reqdata, ctrl=None) -> CapitalAllowanceEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CapitalAllowance().create({
    "period_end": "example_period_end",  # str
    "period_start": "example_period_start",  # str
})
```

#### `load(reqmatch, ctrl=None) -> CapitalAllowanceEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.CapitalAllowance().load({"period_end": "period_end", "period_start": "period_start"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CapitalAllowanceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChargeableGainEntity

```python
chargeable_gain = client.ChargeableGain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acquisition_cost` | `float` | Yes | What the company paid for the asset, in pounds. |
| `acquisition_costs` | `float` | No | Optional. |
| `acquisition_date` | `str` | Yes | When the company bought the asset (exchange of contracts), as YYYY-MM-DD. |
| `asset_type` | `str` | Yes | "land_buildings": UK land or buildings (the company's whole interest; a freehold or a lease with more than 50 years left). |
| `calculated_by` | `str` | Yes |  |
| `disclaimer` | `str` | Yes |  |
| `disposal_costs` | `float` | No | Optional. |
| `disposal_date` | `str` | Yes | When the company sold the asset (exchange of contracts), as YYYY-MM-DD. |
| `enhancement_cost` | `float` | No | Optional, land and buildings only. |
| `enhancement_date` | `str` | No | Optional, land and buildings only. |
| `input` | `dict` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` | Yes |  |
| `proceeds` | `float` | Yes | What the company sold the asset for, in pounds. |
| `result` | `dict` | Yes |  |
| `sba_claimed` | `float` | No | Optional, land and buildings only. |
| `share_url` | `str` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ChargeableGainEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ChargeableGain().create({
    "acquisition_cost": 1,  # float
    "acquisition_date": "example_acquisition_date",  # str
    "asset_type": "example_asset_type",  # str
    "disposal_date": "example_disposal_date",  # str
    "proceeds": 1,  # float
})
```

#### `load(reqmatch, ctrl=None) -> ChargeableGainEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.ChargeableGain().load({"acquisition_date": "acquisition_date", "asset_type": "asset_type", "disposal_date": "disposal_date", "proceed": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChargeableGainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CompanyCarEntity

```python
company_car = client.CompanyCar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acquisition` | `str` | No | Optional. |
| `annual_lease_cost` | `float` | No | For "lease": the lease rentals the company pays in its year, in pounds, excluding VAT it can reclaim. |
| `associated_companies` | `int` | No | Optional, with company_profits. |
| `calculated_by` | `str` | Yes |  |
| `capital_contribution` | `float` | No | Optional. |
| `co2_gkm` | `int` | No | The car's approved CO2 emissions in g/km, from the V5C or certificate of conformity (WLTP for cars first registered from 6 April 2020, NEDC before; both give the same percentage in 2025/26 and 2026/27). |
| `company_profits` | `float` | No | Optional. |
| `disclaimer` | `str` | Yes |  |
| `electric_range_miles` | `int` | No | For a plug-in hybrid only: the zero-emission (electric) range in miles from the certificate of conformity, rounded up. |
| `fuel_type` | `str` | Yes | "electric" (fully electric or any car with 0 g/km CO2), "petrol" (petrol, or ANY hybrid, petrol or diesel, including plug-in hybrids: hybrids never pay the diesel supplement), "diesel_rde2" (a diesel-only car certified to Euro 6d, also… |
| `income_tax_rate` | `str` | Yes | The director's top rate of Income Tax including the benefit: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | `dict` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `lease_started` | `str` | No | Optional, for "lease": the date the hire period began, YYYY-MM-DD. |
| `list_price` | `float` | Yes | The car's list price when new, including VAT, delivery and any optional extras (the P11D price), in pounds. |
| `months_available` | `int` | No | Optional. |
| `new_car` | `bool` | No | Optional, for "buy". |
| `page_url` | `str` | Yes |  |
| `phev_easement` | `bool` | No | Optional. |
| `price_paid` | `float` | No | Optional, for "buy". |
| `private_fuel` | `bool` | No | Optional. |
| `result` | `dict` | Yes |  |
| `share_url` | `str` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `str` | Yes | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> CompanyCarEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CompanyCar().create({
    "fuel_type": "example_fuel_type",  # str
    "income_tax_rate": "example_income_tax_rate",  # str
    "list_price": 1,  # float
    "tax_year": "example_tax_year",  # str
})
```

#### `load(reqmatch, ctrl=None) -> CompanyCarEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.CompanyCar().load({"fuel_type": "fuel_type", "income_tax_rate": "income_tax_rate", "list_price": 1, "tax_year": "tax_year"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompanyCarEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CompanySizeEntity

```python
company_size = client.CompanySize()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `balance_sheet_total` | `float` | Yes | Balance sheet total: gross assets (fixed plus current assets, before liabilities) at the year end, in pounds. |
| `calculated_by` | `str` | Yes |  |
| `disclaimer` | `str` | Yes |  |
| `employees` | `float` | Yes | Average number of employees in the year (monthly headcounts added up, divided by the number of months). |
| `first_year` | `bool` | No | True if this is the company's first financial year (then this year alone decides its size). |
| `input` | `dict` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` | Yes |  |
| `period_end` | `str` | Yes | Last day of the financial year, YYYY-MM-DD. |
| `period_start` | `str` | Yes | First day of the financial year (accounts period), YYYY-MM-DD. |
| `prev_balance_sheet_total` | `float` | No | Optional: last year's balance sheet total (gross assets), in pounds. |
| `prev_employees` | `float` | No | Optional: last year's average number of employees. |
| `prev_size` | `str` | No | Optional: what the company qualified as last year — micro, small (not micro) or medium_or_large (not small). |
| `prev_turnover` | `float` | No | Optional: last financial year's turnover, in pounds (assumed a 12-month year). |
| `result` | `dict` | Yes |  |
| `share_url` | `str` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `str` | Yes |  |
| `turnover` | `float` | Yes | Turnover for the financial year, in pounds. |

### Operations

#### `create(reqdata, ctrl=None) -> CompanySizeEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CompanySize().create({
    "balance_sheet_total": 1,  # float
    "employees": 1,  # float
    "period_end": "example_period_end",  # str
    "period_start": "example_period_start",  # str
    "turnover": 1,  # float
})
```

#### `load(reqmatch, ctrl=None) -> CompanySizeEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.CompanySize().load({"balance_sheet_total": 1, "employee": 1, "period_end": "period_end", "period_start": "period_start", "turnover": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompanySizeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CompanyVanEntity

```python
company_van = client.CompanyVan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `int` | No | Optional, with company_profits. |
| `calculated_by` | `str` | Yes |  |
| `company_profits` | `float` | No | Optional. |
| `disclaimer` | `str` | Yes |  |
| `income_tax_rate` | `str` | Yes | The director's or employee's top rate of Income Tax: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | `dict` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `months_available` | `int` | No | Optional. |
| `page_url` | `str` | Yes |  |
| `price_paid` | `float` | No | Optional. |
| `private_fuel` | `bool` | No | Optional. |
| `result` | `dict` | Yes |  |
| `share_url` | `str` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `str` | Yes | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` | `str` | Yes |  |
| `zero_emission` | `bool` | No | Optional. |

### Operations

#### `create(reqdata, ctrl=None) -> CompanyVanEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CompanyVan().create({
    "income_tax_rate": "example_income_tax_rate",  # str
    "tax_year": "example_tax_year",  # str
})
```

#### `load(reqmatch, ctrl=None) -> CompanyVanEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.CompanyVan().load({"income_tax_rate": "income_tax_rate", "tax_year": "tax_year"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompanyVanEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CorporationTaxEntity

```python
corporation_tax = client.CorporationTax()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `int` | No | How many other companies are associated with this one (under common control) in the period. |
| `calculated_by` | `str` | Yes |  |
| `close_investment_holding` | `bool` | No | True if the company is a close investment-holding company in the period (CTA 2010 s.18N): a close company is one unless, throughout the period, it exists wholly or mainly to trade commercially, to let land to people not connected with it,… |
| `disclaimer` | `str` | Yes |  |
| `exempt_distributions` | `float` | No | Exempt dividends received from companies outside the company's 51% group (and not from a trading company owned by a consortium it belongs to) (CTA 2010 s.18L), in pounds, used only to decide the rate. |
| `input` | `dict` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` | Yes |  |
| `period_end` | `str` | Yes | Last day of the accounting period, YYYY-MM-DD. |
| `period_start` | `str` | Yes | First day of the accounting period, YYYY-MM-DD (for example 2025-04-01). |
| `result` | `dict` | Yes |  |
| `share_url` | `str` | Yes | A link to this result on taxley.co.uk. |
| `taxable_profits` | `float` | Yes | Taxable total profits for the period in pounds, after tax adjustments and reliefs (CT600 box 315). |
| `tool` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> CorporationTaxEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CorporationTax().create({
    "period_end": "example_period_end",  # str
    "period_start": "example_period_start",  # str
    "taxable_profits": 1,  # float
})
```

#### `load(reqmatch, ctrl=None) -> CorporationTaxEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.CorporationTax().load({"period_end": "period_end", "period_start": "period_start", "taxable_profit": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CorporationTaxEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeadlineEntity

```python
deadline = client.Deadline()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `str` | Yes |  |
| `disclaimer` | `str` | Yes |  |
| `input` | `dict` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` | Yes |  |
| `period_end` | `str` | Yes | The last day of the accounts period (the company's year end or accounting reference date), as YYYY-MM-DD. |
| `period_start` | `str` | No | Optional. |
| `result` | `dict` | Yes |  |
| `share_url` | `str` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> DeadlineEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Deadline().create({
    "period_end": "example_period_end",  # str
})
```

#### `load(reqmatch, ctrl=None) -> DeadlineEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Deadline().load({"period_end": "period_end"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeadlineEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DirectorPensionEntity

```python
director_pension = client.DirectorPension()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `int` | No | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` | `str` | Yes |  |
| `company_profit` | `float` | Yes | The company's taxable profit for its year before this contribution, after the director's existing salary and other costs, in pounds. |
| `contribution` | `float` | Yes | The amount the company would pay into the director's pension as an employer contribution, in pounds. |
| `director_only_employee` | `bool` | No | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `str` | Yes |  |
| `dividends` | `float` | No | Dividends the director already takes this tax year, in pounds. |
| `input` | `dict` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `money_purchase_allowance` | `bool` | No | true if the director has already flexibly accessed a pension (for example taken cash from drawdown or an uncrystallised lump sum), so the £10,000 money purchase annual allowance applies. |
| `other_income` | `float` | No | The director's other taxable income for the tax year from outside the company, in pounds. |
| `other_pension_contributions` | `float` | No | Everything else paid into the director's pensions this tax year (their own contributions, before tax relief, and any other employer's), in pounds. |
| `page_url` | `str` | Yes |  |
| `result` | `dict` | Yes |  |
| `salary` | `float` | No | The salary the director already takes from the company this tax year, in pounds. |
| `scottish_taxpayer` | `bool` | No | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `str` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `str` | No | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> DirectorPensionEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.DirectorPension().create({
    "company_profit": 1,  # float
    "contribution": 1,  # float
})
```

#### `load(reqmatch, ctrl=None) -> DirectorPensionEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.DirectorPension().load({"company_profit": 1, "contribution": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DirectorPensionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DirectorsLoanEntity

```python
directors_loan = client.DirectorsLoan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `benefit_closing_balance` | `float` | No | Maximum loan balance on 5 April at the end of the selected tax year, or when the loan ended, in pounds. |
| `benefit_interest_paid` | `float` | No | Interest the director was required to pay and actually paid for the selected tax year, in pounds. |
| `benefit_maximum_balance` | `float` | No | Highest total beneficial-loan balance at any time in the tax year, in pounds, used for the £10,000 exemption. |
| `benefit_opening_balance` | `float` | No | Maximum loan balance on 5 April before the selected tax year, or when the loan began, in pounds. |
| `benefit_tax_year` | `str` | No | Optional UK tax year for the beneficial-loan calculation: 2025-26 or 2026-27. |
| `benefit_whole_months` | `int` | No | Whole months the loan was outstanding in the selected tax year, from 1 to 12. |
| `calculated_by` | `str` | Yes |  |
| `disclaimer` | `str` | Yes |  |
| `input` | `dict` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `loan_made_on` | `str` | No | Date the loan was made, YYYY-MM-DD, within the accounting period. |
| `marginal_income_tax_rate` | `float` | No | Director’s marginal Income Tax rate as a percentage, used only to estimate personal tax on the benefit. |
| `outstanding` | `float` | Yes | Loan balance the director or other participator owed the company at the period end, in pounds. |
| `page_url` | `str` | Yes |  |
| `period_end` | `str` | Yes | Last day of the company's Corporation Tax accounting period, YYYY-MM-DD. |
| `repaid_within_9_months` | `float` | No | Part of that balance repaid, released or written off after the period end and within 9 months of it (before the s.455 tax is due), in pounds. |
| `result` | `dict` | Yes |  |
| `share_url` | `str` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> DirectorsLoanEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.DirectorsLoan().create({
    "outstanding": 1,  # float
    "period_end": "example_period_end",  # str
})
```

#### `load(reqmatch, ctrl=None) -> DirectorsLoanEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.DirectorsLoan().load({"outstanding": 1, "period_end": "period_end"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DirectorsLoanEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DividendReserveEntity

```python
dividend_reserve = client.DividendReserve()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `str` | Yes |  |
| `disclaimer` | `str` | Yes |  |
| `dividends_already_paid` | `float` | Yes | Dividends already paid or declared from these profits, in pounds. |
| `input` | `dict` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` | Yes |  |
| `profit_after_tax` | `float` | Yes | This period’s realised profit after Corporation Tax, in pounds. |
| `proposed_dividend` | `float` | Yes | Dividend now proposed, in pounds. |
| `result` | `dict` | Yes |  |
| `retained_profits_brought_forward` | `float` | Yes | Accumulated retained profits or losses brought forward, in pounds. |
| `share_url` | `str` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> DividendReserveEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.DividendReserve().create({
    "dividends_already_paid": 1,  # float
    "profit_after_tax": 1,  # float
    "proposed_dividend": 1,  # float
    "retained_profits_brought_forward": 1,  # float
})
```

#### `load(reqmatch, ctrl=None) -> DividendReserveEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.DividendReserve().load({"dividends_already_paid": 1, "profit_after_tax": 1, "proposed_dividend": 1, "retained_profits_brought_forward": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DividendReserveEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HomeOfficeEntity

```python
home_office = client.HomeOffice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actual_additional_costs` | `float` | No | Optional total reasonable additional household costs caused by working at home, in pounds, supported by records. |
| `calculated_by` | `str` | Yes |  |
| `disclaimer` | `str` | Yes |  |
| `frequency` | `str` | Yes | Whether to use HMRC’s £6 weekly rate or £26 monthly rate. |
| `input` | `dict` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` | Yes |  |
| `periods` | `int` | Yes | Number of weeks or months of regular homeworking in the tax year; no more than 52 weeks or 12 months. |
| `result` | `dict` | Yes |  |
| `share_url` | `str` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `str` | Yes | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> HomeOfficeEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.HomeOffice().create({
    "frequency": "example_frequency",  # str
    "periods": 1,  # int
    "tax_year": "example_tax_year",  # str
})
```

#### `load(reqmatch, ctrl=None) -> HomeOfficeEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.HomeOffice().load({"frequency": "frequency", "period": 1, "tax_year": "tax_year"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HomeOfficeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LatePenaltyEntity

```python
late_penalty = client.LatePenalty()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `str` | Yes |  |
| `disclaimer` | `str` | Yes |  |
| `filed_on` | `str` | Yes | The date the CT600 was, or will be, filed with HMRC. |
| `input` | `dict` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `late_previous_two` | `bool` | No | True if the company was liable to a late filing penalty for each of its two previous accounting periods (consecutive, and within Corporation Tax throughout). |
| `page_url` | `str` | Yes |  |
| `paid_on` | `str` | No | The date the Corporation Tax was, or will be, paid in full. |
| `period_end` | `str` | Yes | Last day of the Corporation Tax accounting period the CT600 covers (YYYY-MM-DD), on or after 2015-04-01. |
| `period_of_account_end` | `str` | No | Only if the company's accounts cover more than 12 months (up to 18): the last day of that period of account, no more than 6 months after period_end. |
| `result` | `dict` | Yes |  |
| `share_url` | `str` | Yes | A link to this result on taxley.co.uk. |
| `tax_due` | `float` | No | Corporation Tax payable for the accounting period, in pounds. |
| `tool` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> LatePenaltyEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.LatePenalty().create({
    "filed_on": "example_filed_on",  # str
    "period_end": "example_period_end",  # str
})
```

#### `load(reqmatch, ctrl=None) -> LatePenaltyEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.LatePenalty().load({"filed_on": "filed_on", "period_end": "period_end"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LatePenaltyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LongPeriodEntity

```python
long_period = client.LongPeriod()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `str` | Yes |  |
| `disclaimer` | `str` | Yes |  |
| `first_accounts` | `bool` | No | Optional: true if these are the company's first accounts (sets the Companies House deadline). |
| `input` | `dict` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` | Yes |  |
| `period_end` | `str` | Yes | Last day of the accounts, YYYY-MM-DD. |
| `period_start` | `str` | Yes | First day of the accounts (period of account), YYYY-MM-DD. |
| `profit` | `float` | No | Optional: trading profit for the whole period in pounds, to split by days. |
| `result` | `dict` | Yes |  |
| `share_url` | `str` | Yes | A link to this result on taxley.co.uk. |
| `tool` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> LongPeriodEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.LongPeriod().create({
    "period_end": "example_period_end",  # str
    "period_start": "example_period_start",  # str
})
```

#### `load(reqmatch, ctrl=None) -> LongPeriodEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.LongPeriod().load({"period_end": "period_end", "period_start": "period_start"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LongPeriodEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MileageAllowanceEntity

```python
mileage_allowance = client.MileageAllowance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_miles` | `int` | Yes | Total qualifying business miles in this vehicle category during the tax year. |
| `calculated_by` | `str` | Yes |  |
| `disclaimer` | `str` | Yes |  |
| `employer_payment` | `float` | Yes | Total mileage allowance paid by the company for those miles, in pounds. |
| `input` | `dict` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` | Yes |  |
| `result` | `dict` | Yes |  |
| `share_url` | `str` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `str` | Yes | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `str` | Yes |  |
| `vehicle` | `str` | Yes | The employee-owned vehicle used for business travel: car_van, motorcycle or bicycle. |

### Operations

#### `create(reqdata, ctrl=None) -> MileageAllowanceEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.MileageAllowance().create({
    "business_miles": 1,  # int
    "employer_payment": 1,  # float
    "tax_year": "example_tax_year",  # str
    "vehicle": "example_vehicle",  # str
})
```

#### `load(reqmatch, ctrl=None) -> MileageAllowanceEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.MileageAllowance().load({"business_mile": 1, "employer_payment": 1, "tax_year": "tax_year", "vehicle": "vehicle"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MileageAllowanceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SalaryDividendEntity

```python
salary_dividend = client.SalaryDividend()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_companies` | `int` | No | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` | `str` | Yes |  |
| `company_profit` | `float` | Yes | The company's profit for the year before paying the director any salary, after all its other costs, in pounds. |
| `director_only_employee` | `bool` | No | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `str` | Yes |  |
| `input` | `dict` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | `float` | No | The director's other taxable income for the tax year from outside this company, such as another job, a pension or rental profit, in pounds. |
| `page_url` | `str` | Yes |  |
| `result` | `dict` | Yes |  |
| `salary` | `float` | No | Optional: a salary you want to compare with the standard options, in pounds a year. |
| `scottish_taxpayer` | `bool` | No | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `str` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `str` | No | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> SalaryDividendEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.SalaryDividend().create({
    "company_profit": 1,  # float
})
```

#### `load(reqmatch, ctrl=None) -> SalaryDividendEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.SalaryDividend().load({"company_profit": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SalaryDividendEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SoleTraderVsLimitedEntity

```python
sole_trader_vs_limited = client.SoleTraderVsLimited()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calculated_by` | `str` | Yes |  |
| `director_only_employee` | `bool` | No | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `str` | Yes |  |
| `input` | `dict` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | `float` | No | The owner's other taxable income for the tax year, such as a job, a pension or rental profit, in pounds. |
| `page_url` | `str` | Yes |  |
| `profit` | `float` | Yes | The business's profit for the year, after expenses and before any tax or pay to the owner, in pounds. |
| `result` | `dict` | Yes |  |
| `scottish_taxpayer` | `bool` | No | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `str` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `str` | No | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> SoleTraderVsLimitedEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.SoleTraderVsLimited().create({
    "profit": 1,  # float
})
```

#### `load(reqmatch, ctrl=None) -> SoleTraderVsLimitedEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.SoleTraderVsLimited().load({"profit": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SoleTraderVsLimitedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ToolEntity

```python
tool = client.Tool()
```

### Operations

#### `load(reqmatch, ctrl=None) -> ToolEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Tool().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ToolEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TrivialBenefitEntity

```python
trivial_benefit = client.TrivialBenefit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `benefit_cost` | `float` | Yes | Cost to the company of this individual benefit, in pounds. |
| `calculated_by` | `str` | Yes |  |
| `cash_or_cash_voucher` | `bool` | Yes | True if the benefit is cash or a voucher exchangeable for cash. |
| `close_company_director` | `bool` | Yes | True if the recipient is a director or office holder of a close company. |
| `disclaimer` | `str` | Yes |  |
| `in_contract` | `bool` | Yes | True if the benefit is promised in the employment contract or other contractual terms. |
| `input` | `dict` | Yes | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` | Yes |  |
| `qualifying_benefits_so_far` | `float` | Yes | For a close-company director, total cost in pounds of earlier qualifying trivial benefits from this employer in the tax year. |
| `result` | `dict` | Yes |  |
| `reward_for_work` | `bool` | Yes | True if the benefit rewards the employee’s work or performance. |
| `share_url` | `str` | Yes | A link to this result on taxley.co.uk. |
| `tax_year` | `str` | Yes | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> TrivialBenefitEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.TrivialBenefit().create({
    "benefit_cost": 1,  # float
    "cash_or_cash_voucher": True,  # bool
    "close_company_director": True,  # bool
    "in_contract": True,  # bool
    "qualifying_benefits_so_far": 1,  # float
    "reward_for_work": True,  # bool
    "tax_year": "example_tax_year",  # str
})
```

#### `load(reqmatch, ctrl=None) -> TrivialBenefitEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.TrivialBenefit().load({"benefit_cost": 1, "cash_or_cash_voucher": True, "close_company_director": True, "in_contract": True, "qualifying_benefits_so_far": 1, "reward_for_work": True, "tax_year": "tax_year"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TrivialBenefitEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = TaxleyCorporationTaxSDK({
    "feature": {
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

