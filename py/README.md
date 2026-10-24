# TaxleyCorporationTax Python SDK



The Python SDK for the TaxleyCorporationTax API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.CapitalAllowance()` — each
carrying a small, uniform set of operations (`load`, `create`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/taxley-corporation-tax-sdk/tags)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
from taxleycorporationtax_sdk import TaxleyCorporationTaxSDK

client = TaxleyCorporationTaxSDK()
```

### 3. Load a capitalallowance

`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    capitalallowance = client.CapitalAllowance().load({"period_end": "example_period_end", "period_start": "example_period_start"})
    print(capitalallowance.data_get())
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.CapitalAllowance().create({"period_end": "example_period_end", "period_start": "example_period_start"})

```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    corporationtax = client.CorporationTax().load({"period_end": "example", "period_start": "example", "taxable_profit": 1})
    print(corporationtax.data_get())
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = TaxleyCorporationTaxSDK.test()

# Entity ops return the entity, and list one per record; they raise on error.
corporationtax = client.CorporationTax().load({"period_end": "example", "period_start": "example", "taxable_profit": 1})
# data_get() on an entity reads its mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = TaxleyCorporationTaxSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### TaxleyCorporationTaxSDK

```python
from taxleycorporationtax_sdk import TaxleyCorporationTaxSDK

client = TaxleyCorporationTaxSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = TaxleyCorporationTaxSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### TaxleyCorporationTaxSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `CapitalAllowance` | `(data) -> CapitalAllowanceEntity` | Create a CapitalAllowance entity instance. |
| `ChargeableGain` | `(data) -> ChargeableGainEntity` | Create a ChargeableGain entity instance. |
| `CompanyCar` | `(data) -> CompanyCarEntity` | Create a CompanyCar entity instance. |
| `CompanySize` | `(data) -> CompanySizeEntity` | Create a CompanySize entity instance. |
| `CompanyVan` | `(data) -> CompanyVanEntity` | Create a CompanyVan entity instance. |
| `CorporationTax` | `(data) -> CorporationTaxEntity` | Create a CorporationTax entity instance. |
| `Deadline` | `(data) -> DeadlineEntity` | Create a Deadline entity instance. |
| `DirectorPension` | `(data) -> DirectorPensionEntity` | Create a DirectorPension entity instance. |
| `DirectorsLoan` | `(data) -> DirectorsLoanEntity` | Create a DirectorsLoan entity instance. |
| `DividendReserve` | `(data) -> DividendReserveEntity` | Create a DividendReserve entity instance. |
| `HomeOffice` | `(data) -> HomeOfficeEntity` | Create a HomeOffice entity instance. |
| `LatePenalty` | `(data) -> LatePenaltyEntity` | Create a LatePenalty entity instance. |
| `LongPeriod` | `(data) -> LongPeriodEntity` | Create a LongPeriod entity instance. |
| `MileageAllowance` | `(data) -> MileageAllowanceEntity` | Create a MileageAllowance entity instance. |
| `SalaryDividend` | `(data) -> SalaryDividendEntity` | Create a SalaryDividend entity instance. |
| `SoleTraderVsLimited` | `(data) -> SoleTraderVsLimitedEntity` | Create a SoleTraderVsLimited entity instance. |
| `Tool` | `(data) -> ToolEntity` | Create a Tool entity instance. |
| `TrivialBenefit` | `(data) -> TrivialBenefitEntity` | Create a TrivialBenefit entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria, and return it. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity, and return it. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the entity, and `list` a `list` of entities, one
per record; an entity's `data_get()` reads its record (a `dict`). They raise
on error, so wrap calls in `try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### CapitalAllowance

| Field | Description |
| --- | --- |
| `aia_shared` | Optional. |
| `calculated_by` |  |
| `disclaimer` |  |
| `full_expensed_disposals` | Sale proceeds of assets that had full expensing on their whole cost, sold this period. |
| `input` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `main_pool_brought_forward` | Main pool balance carried forward from the previous accounting period (0 if none). |
| `main_pool_disposals` | Sale proceeds of main pool assets sold this period that did NOT have full expensing (for example, assets that had the annual investment allowance or were pooled). |
| `new_main_plant` | Cost of new and unused plant, machinery, equipment and vans (not cars). |
| `new_special_rate` | Cost of new and unused integral features (electrical, lighting, heating, water, lifts, air conditioning), long-life assets, thermal insulation and solar panels. |
| `other_cars_high_co2` | Cost of cars with CO2 emissions over 50 g/km. |
| `other_cars_low_co2` | Cost of cars (other than new zero-emission cars) with CO2 emissions of 50 g/km or less. |
| `page_url` |  |
| `period_end` | Last day of the accounting period, as YYYY-MM-DD. |
| `period_start` | First day of the Corporation Tax accounting period, as YYYY-MM-DD. |
| `result` |  |
| `share_url` | A link to this result on taxley.co.uk. |
| `special_pool_brought_forward` | Special rate pool balance carried forward from the previous accounting period (0 if none). |
| `spend_date` | Optional. |
| `tool` |  |
| `used_main_plant` | Cost of second-hand main-rate plant, machinery, equipment and vans (not cars). |
| `used_special_rate` | Cost of second-hand integral features, long-life assets, thermal insulation and solar panels. |
| `zero_emission_cars` | Cost of new and unused cars with 0 g/km CO2 (fully electric). |

Operations: Create, Load.

API path: `/api/v1/tools/capital-allowances`

#### ChargeableGain

| Field | Description |
| --- | --- |
| `acquisition_cost` | What the company paid for the asset, in pounds. |
| `acquisition_costs` | Optional. |
| `acquisition_date` | When the company bought the asset (exchange of contracts), as YYYY-MM-DD. |
| `asset_type` | "land_buildings": UK land or buildings (the company's whole interest; a freehold or a lease with more than 50 years left). |
| `calculated_by` |  |
| `disclaimer` |  |
| `disposal_costs` | Optional. |
| `disposal_date` | When the company sold the asset (exchange of contracts), as YYYY-MM-DD. |
| `enhancement_cost` | Optional, land and buildings only. |
| `enhancement_date` | Optional, land and buildings only. |
| `input` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` |  |
| `proceeds` | What the company sold the asset for, in pounds. |
| `result` |  |
| `sba_claimed` | Optional, land and buildings only. |
| `share_url` | A link to this result on taxley.co.uk. |
| `tool` |  |

Operations: Create, Load.

API path: `/api/v1/tools/chargeable-gains`

#### CompanyCar

| Field | Description |
| --- | --- |
| `acquisition` | Optional. |
| `annual_lease_cost` | For "lease": the lease rentals the company pays in its year, in pounds, excluding VAT it can reclaim. |
| `associated_companies` | Optional, with company_profits. |
| `calculated_by` |  |
| `capital_contribution` | Optional. |
| `co2_gkm` | The car's approved CO2 emissions in g/km, from the V5C or certificate of conformity (WLTP for cars first registered from 6 April 2020, NEDC before; both give the same percentage in 2025/26 and 2026/27). |
| `company_profits` | Optional. |
| `disclaimer` |  |
| `electric_range_miles` | For a plug-in hybrid only: the zero-emission (electric) range in miles from the certificate of conformity, rounded up. |
| `fuel_type` | "electric" (fully electric or any car with 0 g/km CO2), "petrol" (petrol, or ANY hybrid, petrol or diesel, including plug-in hybrids: hybrids never pay the diesel supplement), "diesel_rde2" (a diesel-only car certified to Euro 6d, also… |
| `income_tax_rate` | The director's top rate of Income Tax including the benefit: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `lease_started` | Optional, for "lease": the date the hire period began, YYYY-MM-DD. |
| `list_price` | The car's list price when new, including VAT, delivery and any optional extras (the P11D price), in pounds. |
| `months_available` | Optional. |
| `new_car` | Optional, for "buy". |
| `page_url` |  |
| `phev_easement` | Optional. |
| `price_paid` | Optional, for "buy". |
| `private_fuel` | Optional. |
| `result` |  |
| `share_url` | A link to this result on taxley.co.uk. |
| `tax_year` | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` |  |

Operations: Create, Load.

API path: `/api/v1/tools/company-car`

#### CompanySize

| Field | Description |
| --- | --- |
| `balance_sheet_total` | Balance sheet total: gross assets (fixed plus current assets, before liabilities) at the year end, in pounds. |
| `calculated_by` |  |
| `disclaimer` |  |
| `employees` | Average number of employees in the year (monthly headcounts added up, divided by the number of months). |
| `first_year` | True if this is the company's first financial year (then this year alone decides its size). |
| `input` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` |  |
| `period_end` | Last day of the financial year, YYYY-MM-DD. |
| `period_start` | First day of the financial year (accounts period), YYYY-MM-DD. |
| `prev_balance_sheet_total` | Optional: last year's balance sheet total (gross assets), in pounds. |
| `prev_employees` | Optional: last year's average number of employees. |
| `prev_size` | Optional: what the company qualified as last year — micro, small (not micro) or medium_or_large (not small). |
| `prev_turnover` | Optional: last financial year's turnover, in pounds (assumed a 12-month year). |
| `result` |  |
| `share_url` | A link to this result on taxley.co.uk. |
| `tool` |  |
| `turnover` | Turnover for the financial year, in pounds. |

Operations: Create, Load.

API path: `/api/v1/tools/company-size`

#### CompanyVan

| Field | Description |
| --- | --- |
| `associated_companies` | Optional, with company_profits. |
| `calculated_by` |  |
| `company_profits` | Optional. |
| `disclaimer` |  |
| `income_tax_rate` | The director's or employee's top rate of Income Tax: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `months_available` | Optional. |
| `page_url` |  |
| `price_paid` | Optional. |
| `private_fuel` | Optional. |
| `result` |  |
| `share_url` | A link to this result on taxley.co.uk. |
| `tax_year` | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` |  |
| `zero_emission` | Optional. |

Operations: Create, Load.

API path: `/api/v1/tools/company-van`

#### CorporationTax

| Field | Description |
| --- | --- |
| `associated_companies` | How many other companies are associated with this one (under common control) in the period. |
| `calculated_by` |  |
| `close_investment_holding` | True if the company is a close investment-holding company in the period (CTA 2010 s.18N): a close company is one unless, throughout the period, it exists wholly or mainly to trade commercially, to let land to people not connected with it,… |
| `disclaimer` |  |
| `exempt_distributions` | Exempt dividends received from companies outside the company's 51% group (and not from a trading company owned by a consortium it belongs to) (CTA 2010 s.18L), in pounds, used only to decide the rate. |
| `input` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` |  |
| `period_end` | Last day of the accounting period, YYYY-MM-DD. |
| `period_start` | First day of the accounting period, YYYY-MM-DD (for example 2025-04-01). |
| `result` |  |
| `share_url` | A link to this result on taxley.co.uk. |
| `taxable_profits` | Taxable total profits for the period in pounds, after tax adjustments and reliefs (CT600 box 315). |
| `tool` |  |

Operations: Create, Load.

API path: `/api/v1/tools/corporation-tax`

#### Deadline

| Field | Description |
| --- | --- |
| `calculated_by` |  |
| `disclaimer` |  |
| `input` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` |  |
| `period_end` | The last day of the accounts period (the company's year end or accounting reference date), as YYYY-MM-DD. |
| `period_start` | Optional. |
| `result` |  |
| `share_url` | A link to this result on taxley.co.uk. |
| `tool` |  |

Operations: Create, Load.

API path: `/api/v1/tools/deadlines`

#### DirectorPension

| Field | Description |
| --- | --- |
| `associated_companies` | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` |  |
| `company_profit` | The company's taxable profit for its year before this contribution, after the director's existing salary and other costs, in pounds. |
| `contribution` | The amount the company would pay into the director's pension as an employer contribution, in pounds. |
| `director_only_employee` | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` |  |
| `dividends` | Dividends the director already takes this tax year, in pounds. |
| `input` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `money_purchase_allowance` | true if the director has already flexibly accessed a pension (for example taken cash from drawdown or an uncrystallised lump sum), so the £10,000 money purchase annual allowance applies. |
| `other_income` | The director's other taxable income for the tax year from outside the company, in pounds. |
| `other_pension_contributions` | Everything else paid into the director's pensions this tax year (their own contributions, before tax relief, and any other employer's), in pounds. |
| `page_url` |  |
| `result` |  |
| `salary` | The salary the director already takes from the company this tax year, in pounds. |
| `scottish_taxpayer` | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | A link to this result on taxley.co.uk. |
| `tax_year` | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` |  |

Operations: Create, Load.

API path: `/api/v1/tools/director-pension`

#### DirectorsLoan

| Field | Description |
| --- | --- |
| `benefit_closing_balance` | Maximum loan balance on 5 April at the end of the selected tax year, or when the loan ended, in pounds. |
| `benefit_interest_paid` | Interest the director was required to pay and actually paid for the selected tax year, in pounds. |
| `benefit_maximum_balance` | Highest total beneficial-loan balance at any time in the tax year, in pounds, used for the £10,000 exemption. |
| `benefit_opening_balance` | Maximum loan balance on 5 April before the selected tax year, or when the loan began, in pounds. |
| `benefit_tax_year` | Optional UK tax year for the beneficial-loan calculation: 2025-26 or 2026-27. |
| `benefit_whole_months` | Whole months the loan was outstanding in the selected tax year, from 1 to 12. |
| `calculated_by` |  |
| `disclaimer` |  |
| `input` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `loan_made_on` | Date the loan was made, YYYY-MM-DD, within the accounting period. |
| `marginal_income_tax_rate` | Director’s marginal Income Tax rate as a percentage, used only to estimate personal tax on the benefit. |
| `outstanding` | Loan balance the director or other participator owed the company at the period end, in pounds. |
| `page_url` |  |
| `period_end` | Last day of the company's Corporation Tax accounting period, YYYY-MM-DD. |
| `repaid_within_9_months` | Part of that balance repaid, released or written off after the period end and within 9 months of it (before the s.455 tax is due), in pounds. |
| `result` |  |
| `share_url` | A link to this result on taxley.co.uk. |
| `tool` |  |

Operations: Create, Load.

API path: `/api/v1/tools/directors-loan`

#### DividendReserve

| Field | Description |
| --- | --- |
| `calculated_by` |  |
| `disclaimer` |  |
| `dividends_already_paid` | Dividends already paid or declared from these profits, in pounds. |
| `input` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` |  |
| `profit_after_tax` | This period’s realised profit after Corporation Tax, in pounds. |
| `proposed_dividend` | Dividend now proposed, in pounds. |
| `result` |  |
| `retained_profits_brought_forward` | Accumulated retained profits or losses brought forward, in pounds. |
| `share_url` | A link to this result on taxley.co.uk. |
| `tool` |  |

Operations: Create, Load.

API path: `/api/v1/tools/dividend-reserves`

#### HomeOffice

| Field | Description |
| --- | --- |
| `actual_additional_costs` | Optional total reasonable additional household costs caused by working at home, in pounds, supported by records. |
| `calculated_by` |  |
| `disclaimer` |  |
| `frequency` | Whether to use HMRC’s £6 weekly rate or £26 monthly rate. |
| `input` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` |  |
| `periods` | Number of weeks or months of regular homeworking in the tax year; no more than 52 weeks or 12 months. |
| `result` |  |
| `share_url` | A link to this result on taxley.co.uk. |
| `tax_year` | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` |  |

Operations: Create, Load.

API path: `/api/v1/tools/home-office`

#### LatePenalty

| Field | Description |
| --- | --- |
| `calculated_by` |  |
| `disclaimer` |  |
| `filed_on` | The date the CT600 was, or will be, filed with HMRC. |
| `input` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `late_previous_two` | True if the company was liable to a late filing penalty for each of its two previous accounting periods (consecutive, and within Corporation Tax throughout). |
| `page_url` |  |
| `paid_on` | The date the Corporation Tax was, or will be, paid in full. |
| `period_end` | Last day of the Corporation Tax accounting period the CT600 covers (YYYY-MM-DD), on or after 2015-04-01. |
| `period_of_account_end` | Only if the company's accounts cover more than 12 months (up to 18): the last day of that period of account, no more than 6 months after period_end. |
| `result` |  |
| `share_url` | A link to this result on taxley.co.uk. |
| `tax_due` | Corporation Tax payable for the accounting period, in pounds. |
| `tool` |  |

Operations: Create, Load.

API path: `/api/v1/tools/late-penalty`

#### LongPeriod

| Field | Description |
| --- | --- |
| `calculated_by` |  |
| `disclaimer` |  |
| `first_accounts` | Optional: true if these are the company's first accounts (sets the Companies House deadline). |
| `input` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` |  |
| `period_end` | Last day of the accounts, YYYY-MM-DD. |
| `period_start` | First day of the accounts (period of account), YYYY-MM-DD. |
| `profit` | Optional: trading profit for the whole period in pounds, to split by days. |
| `result` |  |
| `share_url` | A link to this result on taxley.co.uk. |
| `tool` |  |

Operations: Create, Load.

API path: `/api/v1/tools/long-period`

#### MileageAllowance

| Field | Description |
| --- | --- |
| `business_miles` | Total qualifying business miles in this vehicle category during the tax year. |
| `calculated_by` |  |
| `disclaimer` |  |
| `employer_payment` | Total mileage allowance paid by the company for those miles, in pounds. |
| `input` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` |  |
| `result` |  |
| `share_url` | A link to this result on taxley.co.uk. |
| `tax_year` | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` |  |
| `vehicle` | The employee-owned vehicle used for business travel: car_van, motorcycle or bicycle. |

Operations: Create, Load.

API path: `/api/v1/tools/mileage-allowance`

#### SalaryDividend

| Field | Description |
| --- | --- |
| `associated_companies` | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` |  |
| `company_profit` | The company's profit for the year before paying the director any salary, after all its other costs, in pounds. |
| `director_only_employee` | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` |  |
| `input` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | The director's other taxable income for the tax year from outside this company, such as another job, a pension or rental profit, in pounds. |
| `page_url` |  |
| `result` |  |
| `salary` | Optional: a salary you want to compare with the standard options, in pounds a year. |
| `scottish_taxpayer` | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | A link to this result on taxley.co.uk. |
| `tax_year` | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` |  |

Operations: Create, Load.

API path: `/api/v1/tools/salary-dividends`

#### SoleTraderVsLimited

| Field | Description |
| --- | --- |
| `calculated_by` |  |
| `director_only_employee` | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` |  |
| `input` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | The owner's other taxable income for the tax year, such as a job, a pension or rental profit, in pounds. |
| `page_url` |  |
| `profit` | The business's profit for the year, after expenses and before any tax or pay to the owner, in pounds. |
| `result` |  |
| `scottish_taxpayer` | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | A link to this result on taxley.co.uk. |
| `tax_year` | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` |  |

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
| `benefit_cost` | Cost to the company of this individual benefit, in pounds. |
| `calculated_by` |  |
| `cash_or_cash_voucher` | True if the benefit is cash or a voucher exchangeable for cash. |
| `close_company_director` | True if the recipient is a director or office holder of a close company. |
| `disclaimer` |  |
| `in_contract` | True if the benefit is promised in the employment contract or other contractual terms. |
| `input` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` |  |
| `qualifying_benefits_so_far` | For a close-company director, total cost in pounds of earlier qualifying trivial benefits from this employer in the tax year. |
| `result` |  |
| `reward_for_work` | True if the benefit rewards the employee’s work or performance. |
| `share_url` | A link to this result on taxley.co.uk. |
| `tax_year` | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` |  |

Operations: Create, Load.

API path: `/api/v1/tools/trivial-benefits`



## Entities


### CapitalAllowance

Create an instance: `capital_allowance = client.CapitalAllowance()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aia_shared` | `float` | Optional. |
| `calculated_by` | `str` |  |
| `disclaimer` | `str` |  |
| `full_expensed_disposals` | `float` | Sale proceeds of assets that had full expensing on their whole cost, sold this period. |
| `input` | `dict` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `main_pool_brought_forward` | `float` | Main pool balance carried forward from the previous accounting period (0 if none). |
| `main_pool_disposals` | `float` | Sale proceeds of main pool assets sold this period that did NOT have full expensing (for example, assets that had the annual investment allowance or were pooled). |
| `new_main_plant` | `float` | Cost of new and unused plant, machinery, equipment and vans (not cars). |
| `new_special_rate` | `float` | Cost of new and unused integral features (electrical, lighting, heating, water, lifts, air conditioning), long-life assets, thermal insulation and solar panels. |
| `other_cars_high_co2` | `float` | Cost of cars with CO2 emissions over 50 g/km. |
| `other_cars_low_co2` | `float` | Cost of cars (other than new zero-emission cars) with CO2 emissions of 50 g/km or less. |
| `page_url` | `str` |  |
| `period_end` | `str` | Last day of the accounting period, as YYYY-MM-DD. |
| `period_start` | `str` | First day of the Corporation Tax accounting period, as YYYY-MM-DD. |
| `result` | `dict` |  |
| `share_url` | `str` | A link to this result on taxley.co.uk. |
| `special_pool_brought_forward` | `float` | Special rate pool balance carried forward from the previous accounting period (0 if none). |
| `spend_date` | `str` | Optional. |
| `tool` | `str` |  |
| `used_main_plant` | `float` | Cost of second-hand main-rate plant, machinery, equipment and vans (not cars). |
| `used_special_rate` | `float` | Cost of second-hand integral features, long-life assets, thermal insulation and solar panels. |
| `zero_emission_cars` | `float` | Cost of new and unused cars with 0 g/km CO2 (fully electric). |

#### Example: Load

```python
capital_allowance = client.CapitalAllowance().load({"period_end": "period_end", "period_start": "period_start"})
```

#### Example: Create

```python
capital_allowance = client.CapitalAllowance().create({
    "period_end": "example_period_end",  # str
    "period_start": "example_period_start",  # str
})
```


### ChargeableGain

Create an instance: `chargeable_gain = client.ChargeableGain()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acquisition_cost` | `float` | What the company paid for the asset, in pounds. |
| `acquisition_costs` | `float` | Optional. |
| `acquisition_date` | `str` | When the company bought the asset (exchange of contracts), as YYYY-MM-DD. |
| `asset_type` | `str` | "land_buildings": UK land or buildings (the company's whole interest; a freehold or a lease with more than 50 years left). |
| `calculated_by` | `str` |  |
| `disclaimer` | `str` |  |
| `disposal_costs` | `float` | Optional. |
| `disposal_date` | `str` | When the company sold the asset (exchange of contracts), as YYYY-MM-DD. |
| `enhancement_cost` | `float` | Optional, land and buildings only. |
| `enhancement_date` | `str` | Optional, land and buildings only. |
| `input` | `dict` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` |  |
| `proceeds` | `float` | What the company sold the asset for, in pounds. |
| `result` | `dict` |  |
| `sba_claimed` | `float` | Optional, land and buildings only. |
| `share_url` | `str` | A link to this result on taxley.co.uk. |
| `tool` | `str` |  |

#### Example: Load

```python
chargeable_gain = client.ChargeableGain().load({"acquisition_date": "acquisition_date", "asset_type": "asset_type", "disposal_date": "disposal_date", "proceed": 1})
```

#### Example: Create

```python
chargeable_gain = client.ChargeableGain().create({
    "acquisition_cost": 1,  # float
    "acquisition_date": "example_acquisition_date",  # str
    "asset_type": "example_asset_type",  # str
    "disposal_date": "example_disposal_date",  # str
    "proceeds": 1,  # float
})
```


### CompanyCar

Create an instance: `company_car = client.CompanyCar()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acquisition` | `str` | Optional. |
| `annual_lease_cost` | `float` | For "lease": the lease rentals the company pays in its year, in pounds, excluding VAT it can reclaim. |
| `associated_companies` | `int` | Optional, with company_profits. |
| `calculated_by` | `str` |  |
| `capital_contribution` | `float` | Optional. |
| `co2_gkm` | `int` | The car's approved CO2 emissions in g/km, from the V5C or certificate of conformity (WLTP for cars first registered from 6 April 2020, NEDC before; both give the same percentage in 2025/26 and 2026/27). |
| `company_profits` | `float` | Optional. |
| `disclaimer` | `str` |  |
| `electric_range_miles` | `int` | For a plug-in hybrid only: the zero-emission (electric) range in miles from the certificate of conformity, rounded up. |
| `fuel_type` | `str` | "electric" (fully electric or any car with 0 g/km CO2), "petrol" (petrol, or ANY hybrid, petrol or diesel, including plug-in hybrids: hybrids never pay the diesel supplement), "diesel_rde2" (a diesel-only car certified to Euro 6d, also… |
| `income_tax_rate` | `str` | The director's top rate of Income Tax including the benefit: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | `dict` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `lease_started` | `str` | Optional, for "lease": the date the hire period began, YYYY-MM-DD. |
| `list_price` | `float` | The car's list price when new, including VAT, delivery and any optional extras (the P11D price), in pounds. |
| `months_available` | `int` | Optional. |
| `new_car` | `bool` | Optional, for "buy". |
| `page_url` | `str` |  |
| `phev_easement` | `bool` | Optional. |
| `price_paid` | `float` | Optional, for "buy". |
| `private_fuel` | `bool` | Optional. |
| `result` | `dict` |  |
| `share_url` | `str` | A link to this result on taxley.co.uk. |
| `tax_year` | `str` | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` | `str` |  |

#### Example: Load

```python
company_car = client.CompanyCar().load({"fuel_type": "fuel_type", "income_tax_rate": "income_tax_rate", "list_price": 1, "tax_year": "tax_year"})
```

#### Example: Create

```python
company_car = client.CompanyCar().create({
    "fuel_type": "example_fuel_type",  # str
    "income_tax_rate": "example_income_tax_rate",  # str
    "list_price": 1,  # float
    "tax_year": "example_tax_year",  # str
})
```


### CompanySize

Create an instance: `company_size = client.CompanySize()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `balance_sheet_total` | `float` | Balance sheet total: gross assets (fixed plus current assets, before liabilities) at the year end, in pounds. |
| `calculated_by` | `str` |  |
| `disclaimer` | `str` |  |
| `employees` | `float` | Average number of employees in the year (monthly headcounts added up, divided by the number of months). |
| `first_year` | `bool` | True if this is the company's first financial year (then this year alone decides its size). |
| `input` | `dict` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` |  |
| `period_end` | `str` | Last day of the financial year, YYYY-MM-DD. |
| `period_start` | `str` | First day of the financial year (accounts period), YYYY-MM-DD. |
| `prev_balance_sheet_total` | `float` | Optional: last year's balance sheet total (gross assets), in pounds. |
| `prev_employees` | `float` | Optional: last year's average number of employees. |
| `prev_size` | `str` | Optional: what the company qualified as last year — micro, small (not micro) or medium_or_large (not small). |
| `prev_turnover` | `float` | Optional: last financial year's turnover, in pounds (assumed a 12-month year). |
| `result` | `dict` |  |
| `share_url` | `str` | A link to this result on taxley.co.uk. |
| `tool` | `str` |  |
| `turnover` | `float` | Turnover for the financial year, in pounds. |

#### Example: Load

```python
company_size = client.CompanySize().load({"balance_sheet_total": 1, "employee": 1, "period_end": "period_end", "period_start": "period_start", "turnover": 1})
```

#### Example: Create

```python
company_size = client.CompanySize().create({
    "balance_sheet_total": 1,  # float
    "employees": 1,  # float
    "period_end": "example_period_end",  # str
    "period_start": "example_period_start",  # str
    "turnover": 1,  # float
})
```


### CompanyVan

Create an instance: `company_van = client.CompanyVan()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_companies` | `int` | Optional, with company_profits. |
| `calculated_by` | `str` |  |
| `company_profits` | `float` | Optional. |
| `disclaimer` | `str` |  |
| `income_tax_rate` | `str` | The director's or employee's top rate of Income Tax: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | `dict` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `months_available` | `int` | Optional. |
| `page_url` | `str` |  |
| `price_paid` | `float` | Optional. |
| `private_fuel` | `bool` | Optional. |
| `result` | `dict` |  |
| `share_url` | `str` | A link to this result on taxley.co.uk. |
| `tax_year` | `str` | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` | `str` |  |
| `zero_emission` | `bool` | Optional. |

#### Example: Load

```python
company_van = client.CompanyVan().load({"income_tax_rate": "income_tax_rate", "tax_year": "tax_year"})
```

#### Example: Create

```python
company_van = client.CompanyVan().create({
    "income_tax_rate": "example_income_tax_rate",  # str
    "tax_year": "example_tax_year",  # str
})
```


### CorporationTax

Create an instance: `corporation_tax = client.CorporationTax()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_companies` | `int` | How many other companies are associated with this one (under common control) in the period. |
| `calculated_by` | `str` |  |
| `close_investment_holding` | `bool` | True if the company is a close investment-holding company in the period (CTA 2010 s.18N): a close company is one unless, throughout the period, it exists wholly or mainly to trade commercially, to let land to people not connected with it,… |
| `disclaimer` | `str` |  |
| `exempt_distributions` | `float` | Exempt dividends received from companies outside the company's 51% group (and not from a trading company owned by a consortium it belongs to) (CTA 2010 s.18L), in pounds, used only to decide the rate. |
| `input` | `dict` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` |  |
| `period_end` | `str` | Last day of the accounting period, YYYY-MM-DD. |
| `period_start` | `str` | First day of the accounting period, YYYY-MM-DD (for example 2025-04-01). |
| `result` | `dict` |  |
| `share_url` | `str` | A link to this result on taxley.co.uk. |
| `taxable_profits` | `float` | Taxable total profits for the period in pounds, after tax adjustments and reliefs (CT600 box 315). |
| `tool` | `str` |  |

#### Example: Load

```python
corporation_tax = client.CorporationTax().load({"period_end": "period_end", "period_start": "period_start", "taxable_profit": 1})
```

#### Example: Create

```python
corporation_tax = client.CorporationTax().create({
    "period_end": "example_period_end",  # str
    "period_start": "example_period_start",  # str
    "taxable_profits": 1,  # float
})
```


### Deadline

Create an instance: `deadline = client.Deadline()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calculated_by` | `str` |  |
| `disclaimer` | `str` |  |
| `input` | `dict` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` |  |
| `period_end` | `str` | The last day of the accounts period (the company's year end or accounting reference date), as YYYY-MM-DD. |
| `period_start` | `str` | Optional. |
| `result` | `dict` |  |
| `share_url` | `str` | A link to this result on taxley.co.uk. |
| `tool` | `str` |  |

#### Example: Load

```python
deadline = client.Deadline().load({"period_end": "period_end"})
```

#### Example: Create

```python
deadline = client.Deadline().create({
    "period_end": "example_period_end",  # str
})
```


### DirectorPension

Create an instance: `director_pension = client.DirectorPension()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_companies` | `int` | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` | `str` |  |
| `company_profit` | `float` | The company's taxable profit for its year before this contribution, after the director's existing salary and other costs, in pounds. |
| `contribution` | `float` | The amount the company would pay into the director's pension as an employer contribution, in pounds. |
| `director_only_employee` | `bool` | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `str` |  |
| `dividends` | `float` | Dividends the director already takes this tax year, in pounds. |
| `input` | `dict` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `money_purchase_allowance` | `bool` | true if the director has already flexibly accessed a pension (for example taken cash from drawdown or an uncrystallised lump sum), so the £10,000 money purchase annual allowance applies. |
| `other_income` | `float` | The director's other taxable income for the tax year from outside the company, in pounds. |
| `other_pension_contributions` | `float` | Everything else paid into the director's pensions this tax year (their own contributions, before tax relief, and any other employer's), in pounds. |
| `page_url` | `str` |  |
| `result` | `dict` |  |
| `salary` | `float` | The salary the director already takes from the company this tax year, in pounds. |
| `scottish_taxpayer` | `bool` | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `str` | A link to this result on taxley.co.uk. |
| `tax_year` | `str` | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `str` |  |

#### Example: Load

```python
director_pension = client.DirectorPension().load({"company_profit": 1, "contribution": 1})
```

#### Example: Create

```python
director_pension = client.DirectorPension().create({
    "company_profit": 1,  # float
    "contribution": 1,  # float
})
```


### DirectorsLoan

Create an instance: `directors_loan = client.DirectorsLoan()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `benefit_closing_balance` | `float` | Maximum loan balance on 5 April at the end of the selected tax year, or when the loan ended, in pounds. |
| `benefit_interest_paid` | `float` | Interest the director was required to pay and actually paid for the selected tax year, in pounds. |
| `benefit_maximum_balance` | `float` | Highest total beneficial-loan balance at any time in the tax year, in pounds, used for the £10,000 exemption. |
| `benefit_opening_balance` | `float` | Maximum loan balance on 5 April before the selected tax year, or when the loan began, in pounds. |
| `benefit_tax_year` | `str` | Optional UK tax year for the beneficial-loan calculation: 2025-26 or 2026-27. |
| `benefit_whole_months` | `int` | Whole months the loan was outstanding in the selected tax year, from 1 to 12. |
| `calculated_by` | `str` |  |
| `disclaimer` | `str` |  |
| `input` | `dict` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `loan_made_on` | `str` | Date the loan was made, YYYY-MM-DD, within the accounting period. |
| `marginal_income_tax_rate` | `float` | Director’s marginal Income Tax rate as a percentage, used only to estimate personal tax on the benefit. |
| `outstanding` | `float` | Loan balance the director or other participator owed the company at the period end, in pounds. |
| `page_url` | `str` |  |
| `period_end` | `str` | Last day of the company's Corporation Tax accounting period, YYYY-MM-DD. |
| `repaid_within_9_months` | `float` | Part of that balance repaid, released or written off after the period end and within 9 months of it (before the s.455 tax is due), in pounds. |
| `result` | `dict` |  |
| `share_url` | `str` | A link to this result on taxley.co.uk. |
| `tool` | `str` |  |

#### Example: Load

```python
directors_loan = client.DirectorsLoan().load({"outstanding": 1, "period_end": "period_end"})
```

#### Example: Create

```python
directors_loan = client.DirectorsLoan().create({
    "outstanding": 1,  # float
    "period_end": "example_period_end",  # str
})
```


### DividendReserve

Create an instance: `dividend_reserve = client.DividendReserve()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calculated_by` | `str` |  |
| `disclaimer` | `str` |  |
| `dividends_already_paid` | `float` | Dividends already paid or declared from these profits, in pounds. |
| `input` | `dict` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` |  |
| `profit_after_tax` | `float` | This period’s realised profit after Corporation Tax, in pounds. |
| `proposed_dividend` | `float` | Dividend now proposed, in pounds. |
| `result` | `dict` |  |
| `retained_profits_brought_forward` | `float` | Accumulated retained profits or losses brought forward, in pounds. |
| `share_url` | `str` | A link to this result on taxley.co.uk. |
| `tool` | `str` |  |

#### Example: Load

```python
dividend_reserve = client.DividendReserve().load({"dividends_already_paid": 1, "profit_after_tax": 1, "proposed_dividend": 1, "retained_profits_brought_forward": 1})
```

#### Example: Create

```python
dividend_reserve = client.DividendReserve().create({
    "dividends_already_paid": 1,  # float
    "profit_after_tax": 1,  # float
    "proposed_dividend": 1,  # float
    "retained_profits_brought_forward": 1,  # float
})
```


### HomeOffice

Create an instance: `home_office = client.HomeOffice()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actual_additional_costs` | `float` | Optional total reasonable additional household costs caused by working at home, in pounds, supported by records. |
| `calculated_by` | `str` |  |
| `disclaimer` | `str` |  |
| `frequency` | `str` | Whether to use HMRC’s £6 weekly rate or £26 monthly rate. |
| `input` | `dict` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` |  |
| `periods` | `int` | Number of weeks or months of regular homeworking in the tax year; no more than 52 weeks or 12 months. |
| `result` | `dict` |  |
| `share_url` | `str` | A link to this result on taxley.co.uk. |
| `tax_year` | `str` | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `str` |  |

#### Example: Load

```python
home_office = client.HomeOffice().load({"frequency": "frequency", "period": 1, "tax_year": "tax_year"})
```

#### Example: Create

```python
home_office = client.HomeOffice().create({
    "frequency": "example_frequency",  # str
    "periods": 1,  # int
    "tax_year": "example_tax_year",  # str
})
```


### LatePenalty

Create an instance: `late_penalty = client.LatePenalty()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calculated_by` | `str` |  |
| `disclaimer` | `str` |  |
| `filed_on` | `str` | The date the CT600 was, or will be, filed with HMRC. |
| `input` | `dict` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `late_previous_two` | `bool` | True if the company was liable to a late filing penalty for each of its two previous accounting periods (consecutive, and within Corporation Tax throughout). |
| `page_url` | `str` |  |
| `paid_on` | `str` | The date the Corporation Tax was, or will be, paid in full. |
| `period_end` | `str` | Last day of the Corporation Tax accounting period the CT600 covers (YYYY-MM-DD), on or after 2015-04-01. |
| `period_of_account_end` | `str` | Only if the company's accounts cover more than 12 months (up to 18): the last day of that period of account, no more than 6 months after period_end. |
| `result` | `dict` |  |
| `share_url` | `str` | A link to this result on taxley.co.uk. |
| `tax_due` | `float` | Corporation Tax payable for the accounting period, in pounds. |
| `tool` | `str` |  |

#### Example: Load

```python
late_penalty = client.LatePenalty().load({"filed_on": "filed_on", "period_end": "period_end"})
```

#### Example: Create

```python
late_penalty = client.LatePenalty().create({
    "filed_on": "example_filed_on",  # str
    "period_end": "example_period_end",  # str
})
```


### LongPeriod

Create an instance: `long_period = client.LongPeriod()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calculated_by` | `str` |  |
| `disclaimer` | `str` |  |
| `first_accounts` | `bool` | Optional: true if these are the company's first accounts (sets the Companies House deadline). |
| `input` | `dict` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` |  |
| `period_end` | `str` | Last day of the accounts, YYYY-MM-DD. |
| `period_start` | `str` | First day of the accounts (period of account), YYYY-MM-DD. |
| `profit` | `float` | Optional: trading profit for the whole period in pounds, to split by days. |
| `result` | `dict` |  |
| `share_url` | `str` | A link to this result on taxley.co.uk. |
| `tool` | `str` |  |

#### Example: Load

```python
long_period = client.LongPeriod().load({"period_end": "period_end", "period_start": "period_start"})
```

#### Example: Create

```python
long_period = client.LongPeriod().create({
    "period_end": "example_period_end",  # str
    "period_start": "example_period_start",  # str
})
```


### MileageAllowance

Create an instance: `mileage_allowance = client.MileageAllowance()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_miles` | `int` | Total qualifying business miles in this vehicle category during the tax year. |
| `calculated_by` | `str` |  |
| `disclaimer` | `str` |  |
| `employer_payment` | `float` | Total mileage allowance paid by the company for those miles, in pounds. |
| `input` | `dict` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` |  |
| `result` | `dict` |  |
| `share_url` | `str` | A link to this result on taxley.co.uk. |
| `tax_year` | `str` | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `str` |  |
| `vehicle` | `str` | The employee-owned vehicle used for business travel: car_van, motorcycle or bicycle. |

#### Example: Load

```python
mileage_allowance = client.MileageAllowance().load({"business_mile": 1, "employer_payment": 1, "tax_year": "tax_year", "vehicle": "vehicle"})
```

#### Example: Create

```python
mileage_allowance = client.MileageAllowance().create({
    "business_miles": 1,  # int
    "employer_payment": 1,  # float
    "tax_year": "example_tax_year",  # str
    "vehicle": "example_vehicle",  # str
})
```


### SalaryDividend

Create an instance: `salary_dividend = client.SalaryDividend()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_companies` | `int` | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` | `str` |  |
| `company_profit` | `float` | The company's profit for the year before paying the director any salary, after all its other costs, in pounds. |
| `director_only_employee` | `bool` | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `str` |  |
| `input` | `dict` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | `float` | The director's other taxable income for the tax year from outside this company, such as another job, a pension or rental profit, in pounds. |
| `page_url` | `str` |  |
| `result` | `dict` |  |
| `salary` | `float` | Optional: a salary you want to compare with the standard options, in pounds a year. |
| `scottish_taxpayer` | `bool` | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `str` | A link to this result on taxley.co.uk. |
| `tax_year` | `str` | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `str` |  |

#### Example: Load

```python
salary_dividend = client.SalaryDividend().load({"company_profit": 1})
```

#### Example: Create

```python
salary_dividend = client.SalaryDividend().create({
    "company_profit": 1,  # float
})
```


### SoleTraderVsLimited

Create an instance: `sole_trader_vs_limited = client.SoleTraderVsLimited()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calculated_by` | `str` |  |
| `director_only_employee` | `bool` | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `str` |  |
| `input` | `dict` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | `float` | The owner's other taxable income for the tax year, such as a job, a pension or rental profit, in pounds. |
| `page_url` | `str` |  |
| `profit` | `float` | The business's profit for the year, after expenses and before any tax or pay to the owner, in pounds. |
| `result` | `dict` |  |
| `scottish_taxpayer` | `bool` | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `str` | A link to this result on taxley.co.uk. |
| `tax_year` | `str` | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `str` |  |

#### Example: Load

```python
sole_trader_vs_limited = client.SoleTraderVsLimited().load({"profit": 1})
```

#### Example: Create

```python
sole_trader_vs_limited = client.SoleTraderVsLimited().create({
    "profit": 1,  # float
})
```


### Tool

Create an instance: `tool = client.Tool()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
tool = client.Tool().load()
```


### TrivialBenefit

Create an instance: `trivial_benefit = client.TrivialBenefit()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `benefit_cost` | `float` | Cost to the company of this individual benefit, in pounds. |
| `calculated_by` | `str` |  |
| `cash_or_cash_voucher` | `bool` | True if the benefit is cash or a voucher exchangeable for cash. |
| `close_company_director` | `bool` | True if the recipient is a director or office holder of a close company. |
| `disclaimer` | `str` |  |
| `in_contract` | `bool` | True if the benefit is promised in the employment contract or other contractual terms. |
| `input` | `dict` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `str` |  |
| `qualifying_benefits_so_far` | `float` | For a close-company director, total cost in pounds of earlier qualifying trivial benefits from this employer in the tax year. |
| `result` | `dict` |  |
| `reward_for_work` | `bool` | True if the benefit rewards the employee’s work or performance. |
| `share_url` | `str` | A link to this result on taxley.co.uk. |
| `tax_year` | `str` | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `str` |  |

#### Example: Load

```python
trivial_benefit = client.TrivialBenefit().load({"benefit_cost": 1, "cash_or_cash_voucher": True, "close_company_director": True, "in_contract": True, "qualifying_benefits_so_far": 1, "reward_for_work": True, "tax_year": "tax_year"})
```

#### Example: Create

```python
trivial_benefit = client.TrivialBenefit().create({
    "benefit_cost": 1,  # float
    "cash_or_cash_voucher": True,  # bool
    "close_company_director": True,  # bool
    "in_contract": True,  # bool
    "qualifying_benefits_so_far": 1,  # float
    "reward_for_work": True,  # bool
    "tax_year": "example_tax_year",  # str
})
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── taxleycorporationtax_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`taxleycorporationtax_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
corporationtax = client.CorporationTax()
corporationtax.load({"period_end": "example", "period_start": "example", "taxable_profit": 1})

# corporationtax.data_get() now returns the corporationtax data from the last load
# corporationtax.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
