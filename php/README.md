# TaxleyCorporationTax PHP SDK



The PHP SDK for the TaxleyCorporationTax API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->CapitalAllowance()` — with named operations (`load`/`create`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/taxley-corporation-tax-sdk/tags)), or
from a clone as a Composer path repository:

```bash
git clone https://github.com/voxgig-sdk/taxley-corporation-tax-sdk
composer config repositories.taxley-corporation-tax-sdk path ./taxley-corporation-tax-sdk/php
composer require voxgig-sdk/taxley-corporation-tax-sdk:@dev
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'taxleycorporationtax_sdk.php';

$client = new TaxleyCorporationTaxSDK();
```

### 3. Load a capitalallowance

```php
try {
    // load() returns the ENTITY — call data_get() for the CapitalAllowance record (throws on error).
    $capitalallowance = $client->CapitalAllowance()->load(["period_end" => "example_period_end", "period_start" => "example_period_start"]);
    print_r($capitalallowance->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// create() returns the ENTITY — call data_get() for the created CapitalAllowance record.
$created = $client->CapitalAllowance()->create(["period_end" => "example_period_end", "period_start" => "example_period_start"]);

```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $corporationtax = $client->CorporationTax()->load(["period_end" => "example", "period_start" => "example", "taxable_profit" => 1]);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = TaxleyCorporationTaxSDK::test();

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$corporationtax = $client->CorporationTax()->load(["period_end" => "example", "period_start" => "example", "taxable_profit" => 1]);
print_r($corporationtax->data_get());
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new TaxleyCorporationTaxSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
TAXLEY_CORPORATION_TAX_TEST_LIVE=TRUE
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### TaxleyCorporationTaxSDK

```php
require_once 'taxleycorporationtax_sdk.php';
$client = new TaxleyCorporationTaxSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = TaxleyCorporationTaxSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### TaxleyCorporationTaxSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `CapitalAllowance` | `($data): CapitalAllowanceEntity` | Create a CapitalAllowance entity instance. |
| `ChargeableGain` | `($data): ChargeableGainEntity` | Create a ChargeableGain entity instance. |
| `CompanyCar` | `($data): CompanyCarEntity` | Create a CompanyCar entity instance. |
| `CompanySize` | `($data): CompanySizeEntity` | Create a CompanySize entity instance. |
| `CompanyVan` | `($data): CompanyVanEntity` | Create a CompanyVan entity instance. |
| `CorporationTax` | `($data): CorporationTaxEntity` | Create a CorporationTax entity instance. |
| `Deadline` | `($data): DeadlineEntity` | Create a Deadline entity instance. |
| `DirectorPension` | `($data): DirectorPensionEntity` | Create a DirectorPension entity instance. |
| `DirectorsLoan` | `($data): DirectorsLoanEntity` | Create a DirectorsLoan entity instance. |
| `DividendReserve` | `($data): DividendReserveEntity` | Create a DividendReserve entity instance. |
| `HomeOffice` | `($data): HomeOfficeEntity` | Create a HomeOffice entity instance. |
| `LatePenalty` | `($data): LatePenaltyEntity` | Create a LatePenalty entity instance. |
| `LongPeriod` | `($data): LongPeriodEntity` | Create a LongPeriod entity instance. |
| `MileageAllowance` | `($data): MileageAllowanceEntity` | Create a MileageAllowance entity instance. |
| `SalaryDividend` | `($data): SalaryDividendEntity` | Create a SalaryDividend entity instance. |
| `SoleTraderVsLimited` | `($data): SoleTraderVsLimitedEntity` | Create a SoleTraderVsLimited entity instance. |
| `Tool` | `($data): ToolEntity` | Create a Tool entity instance. |
| `TrivialBenefit` | `($data): TrivialBenefitEntity` | Create a TrivialBenefit entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): mixed` | Load a single entity by match criteria, and return it. |
| `create` | `($reqdata, $ctrl): mixed` | Create a new entity, and return it. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the entity, and `list` an `array` of entities, one
per record; an entity's `data_get()` reads its record (an `array`). They
throw on error, so wrap calls in `try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$capital_allowance = $client->CapitalAllowance();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aia_shared` | `float` | Optional. |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `full_expensed_disposals` | `float` | Sale proceeds of assets that had full expensing on their whole cost, sold this period. |
| `input` | `array` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `main_pool_brought_forward` | `float` | Main pool balance carried forward from the previous accounting period (0 if none). |
| `main_pool_disposals` | `float` | Sale proceeds of main pool assets sold this period that did NOT have full expensing (for example, assets that had the annual investment allowance or were pooled). |
| `new_main_plant` | `float` | Cost of new and unused plant, machinery, equipment and vans (not cars). |
| `new_special_rate` | `float` | Cost of new and unused integral features (electrical, lighting, heating, water, lifts, air conditioning), long-life assets, thermal insulation and solar panels. |
| `other_cars_high_co2` | `float` | Cost of cars with CO2 emissions over 50 g/km. |
| `other_cars_low_co2` | `float` | Cost of cars (other than new zero-emission cars) with CO2 emissions of 50 g/km or less. |
| `page_url` | `string` |  |
| `period_end` | `string` | Last day of the accounting period, as YYYY-MM-DD. |
| `period_start` | `string` | First day of the Corporation Tax accounting period, as YYYY-MM-DD. |
| `result` | `array` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `special_pool_brought_forward` | `float` | Special rate pool balance carried forward from the previous accounting period (0 if none). |
| `spend_date` | `string` | Optional. |
| `tool` | `string` |  |
| `used_main_plant` | `float` | Cost of second-hand main-rate plant, machinery, equipment and vans (not cars). |
| `used_special_rate` | `float` | Cost of second-hand integral features, long-life assets, thermal insulation and solar panels. |
| `zero_emission_cars` | `float` | Cost of new and unused cars with 0 g/km CO2 (fully electric). |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CapitalAllowance record (throws on error).
$capital_allowance = $client->CapitalAllowance()->load(["period_end" => "period_end", "period_start" => "period_start"]);
```

#### Example: Create

```php
$capital_allowance = $client->CapitalAllowance()->create([
    "period_end" => null, // string
    "period_start" => null, // string
]);
```


### ChargeableGain

Create an instance: `$chargeable_gain = $client->ChargeableGain();`

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
| `acquisition_date` | `string` | When the company bought the asset (exchange of contracts), as YYYY-MM-DD. |
| `asset_type` | `string` | "land_buildings": UK land or buildings (the company's whole interest; a freehold or a lease with more than 50 years left). |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `disposal_costs` | `float` | Optional. |
| `disposal_date` | `string` | When the company sold the asset (exchange of contracts), as YYYY-MM-DD. |
| `enhancement_cost` | `float` | Optional, land and buildings only. |
| `enhancement_date` | `string` | Optional, land and buildings only. |
| `input` | `array` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `proceeds` | `float` | What the company sold the asset for, in pounds. |
| `result` | `array` |  |
| `sba_claimed` | `float` | Optional, land and buildings only. |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tool` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ChargeableGain record (throws on error).
$chargeable_gain = $client->ChargeableGain()->load(["acquisition_date" => "acquisition_date", "asset_type" => "asset_type", "disposal_date" => "disposal_date", "proceed" => 1]);
```

#### Example: Create

```php
$chargeable_gain = $client->ChargeableGain()->create([
    "acquisition_cost" => null, // float
    "acquisition_date" => null, // string
    "asset_type" => null, // string
    "disposal_date" => null, // string
    "proceeds" => null, // float
]);
```


### CompanyCar

Create an instance: `$company_car = $client->CompanyCar();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acquisition` | `string` | Optional. |
| `annual_lease_cost` | `float` | For "lease": the lease rentals the company pays in its year, in pounds, excluding VAT it can reclaim. |
| `associated_companies` | `int` | Optional, with company_profits. |
| `calculated_by` | `string` |  |
| `capital_contribution` | `float` | Optional. |
| `co2_gkm` | `int` | The car's approved CO2 emissions in g/km, from the V5C or certificate of conformity (WLTP for cars first registered from 6 April 2020, NEDC before; both give the same percentage in 2025/26 and 2026/27). |
| `company_profits` | `float` | Optional. |
| `disclaimer` | `string` |  |
| `electric_range_miles` | `int` | For a plug-in hybrid only: the zero-emission (electric) range in miles from the certificate of conformity, rounded up. |
| `fuel_type` | `string` | "electric" (fully electric or any car with 0 g/km CO2), "petrol" (petrol, or ANY hybrid, petrol or diesel, including plug-in hybrids: hybrids never pay the diesel supplement), "diesel_rde2" (a diesel-only car certified to Euro 6d, also… |
| `income_tax_rate` | `string` | The director's top rate of Income Tax including the benefit: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | `array` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `lease_started` | `string` | Optional, for "lease": the date the hire period began, YYYY-MM-DD. |
| `list_price` | `float` | The car's list price when new, including VAT, delivery and any optional extras (the P11D price), in pounds. |
| `months_available` | `int` | Optional. |
| `new_car` | `bool` | Optional, for "buy". |
| `page_url` | `string` |  |
| `phev_easement` | `bool` | Optional. |
| `price_paid` | `float` | Optional, for "buy". |
| `private_fuel` | `bool` | Optional. |
| `result` | `array` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CompanyCar record (throws on error).
$company_car = $client->CompanyCar()->load(["fuel_type" => "fuel_type", "income_tax_rate" => "income_tax_rate", "list_price" => 1, "tax_year" => "tax_year"]);
```

#### Example: Create

```php
$company_car = $client->CompanyCar()->create([
    "fuel_type" => null, // string
    "income_tax_rate" => null, // string
    "list_price" => null, // float
    "tax_year" => null, // string
]);
```


### CompanySize

Create an instance: `$company_size = $client->CompanySize();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `balance_sheet_total` | `float` | Balance sheet total: gross assets (fixed plus current assets, before liabilities) at the year end, in pounds. |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `employees` | `float` | Average number of employees in the year (monthly headcounts added up, divided by the number of months). |
| `first_year` | `bool` | True if this is the company's first financial year (then this year alone decides its size). |
| `input` | `array` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `period_end` | `string` | Last day of the financial year, YYYY-MM-DD. |
| `period_start` | `string` | First day of the financial year (accounts period), YYYY-MM-DD. |
| `prev_balance_sheet_total` | `float` | Optional: last year's balance sheet total (gross assets), in pounds. |
| `prev_employees` | `float` | Optional: last year's average number of employees. |
| `prev_size` | `string` | Optional: what the company qualified as last year — micro, small (not micro) or medium_or_large (not small). |
| `prev_turnover` | `float` | Optional: last financial year's turnover, in pounds (assumed a 12-month year). |
| `result` | `array` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tool` | `string` |  |
| `turnover` | `float` | Turnover for the financial year, in pounds. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CompanySize record (throws on error).
$company_size = $client->CompanySize()->load(["balance_sheet_total" => 1, "employee" => 1, "period_end" => "period_end", "period_start" => "period_start", "turnover" => 1]);
```

#### Example: Create

```php
$company_size = $client->CompanySize()->create([
    "balance_sheet_total" => null, // float
    "employees" => null, // float
    "period_end" => null, // string
    "period_start" => null, // string
    "turnover" => null, // float
]);
```


### CompanyVan

Create an instance: `$company_van = $client->CompanyVan();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_companies` | `int` | Optional, with company_profits. |
| `calculated_by` | `string` |  |
| `company_profits` | `float` | Optional. |
| `disclaimer` | `string` |  |
| `income_tax_rate` | `string` | The director's or employee's top rate of Income Tax: "basic" (20%), "higher" (40%) or "additional" (45%). |
| `input` | `array` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `months_available` | `int` | Optional. |
| `page_url` | `string` |  |
| `price_paid` | `float` | Optional. |
| `private_fuel` | `bool` | Optional. |
| `result` | `array` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | UK tax year: "2025-26" (6 April 2025 to 5 April 2026) or "2026-27" (6 April 2026 to 5 April 2027). |
| `tool` | `string` |  |
| `zero_emission` | `bool` | Optional. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CompanyVan record (throws on error).
$company_van = $client->CompanyVan()->load(["income_tax_rate" => "income_tax_rate", "tax_year" => "tax_year"]);
```

#### Example: Create

```php
$company_van = $client->CompanyVan()->create([
    "income_tax_rate" => null, // string
    "tax_year" => null, // string
]);
```


### CorporationTax

Create an instance: `$corporation_tax = $client->CorporationTax();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_companies` | `int` | How many other companies are associated with this one (under common control) in the period. |
| `calculated_by` | `string` |  |
| `close_investment_holding` | `bool` | True if the company is a close investment-holding company in the period (CTA 2010 s.18N): a close company is one unless, throughout the period, it exists wholly or mainly to trade commercially, to let land to people not connected with it,… |
| `disclaimer` | `string` |  |
| `exempt_distributions` | `float` | Exempt dividends received from companies outside the company's 51% group (and not from a trading company owned by a consortium it belongs to) (CTA 2010 s.18L), in pounds, used only to decide the rate. |
| `input` | `array` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `period_end` | `string` | Last day of the accounting period, YYYY-MM-DD. |
| `period_start` | `string` | First day of the accounting period, YYYY-MM-DD (for example 2025-04-01). |
| `result` | `array` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `taxable_profits` | `float` | Taxable total profits for the period in pounds, after tax adjustments and reliefs (CT600 box 315). |
| `tool` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CorporationTax record (throws on error).
$corporation_tax = $client->CorporationTax()->load(["period_end" => "period_end", "period_start" => "period_start", "taxable_profit" => 1]);
```

#### Example: Create

```php
$corporation_tax = $client->CorporationTax()->create([
    "period_end" => null, // string
    "period_start" => null, // string
    "taxable_profits" => null, // float
]);
```


### Deadline

Create an instance: `$deadline = $client->Deadline();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `input` | `array` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `period_end` | `string` | The last day of the accounts period (the company's year end or accounting reference date), as YYYY-MM-DD. |
| `period_start` | `string` | Optional. |
| `result` | `array` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tool` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Deadline record (throws on error).
$deadline = $client->Deadline()->load(["period_end" => "period_end"]);
```

#### Example: Create

```php
$deadline = $client->Deadline()->create([
    "period_end" => null, // string
]);
```


### DirectorPension

Create an instance: `$director_pension = $client->DirectorPension();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_companies` | `int` | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` | `string` |  |
| `company_profit` | `float` | The company's taxable profit for its year before this contribution, after the director's existing salary and other costs, in pounds. |
| `contribution` | `float` | The amount the company would pay into the director's pension as an employer contribution, in pounds. |
| `director_only_employee` | `bool` | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `string` |  |
| `dividends` | `float` | Dividends the director already takes this tax year, in pounds. |
| `input` | `array` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `money_purchase_allowance` | `bool` | true if the director has already flexibly accessed a pension (for example taken cash from drawdown or an uncrystallised lump sum), so the £10,000 money purchase annual allowance applies. |
| `other_income` | `float` | The director's other taxable income for the tax year from outside the company, in pounds. |
| `other_pension_contributions` | `float` | Everything else paid into the director's pensions this tax year (their own contributions, before tax relief, and any other employer's), in pounds. |
| `page_url` | `string` |  |
| `result` | `array` |  |
| `salary` | `float` | The salary the director already takes from the company this tax year, in pounds. |
| `scottish_taxpayer` | `bool` | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DirectorPension record (throws on error).
$director_pension = $client->DirectorPension()->load(["company_profit" => 1, "contribution" => 1]);
```

#### Example: Create

```php
$director_pension = $client->DirectorPension()->create([
    "company_profit" => null, // float
    "contribution" => null, // float
]);
```


### DirectorsLoan

Create an instance: `$directors_loan = $client->DirectorsLoan();`

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
| `benefit_tax_year` | `string` | Optional UK tax year for the beneficial-loan calculation: 2025-26 or 2026-27. |
| `benefit_whole_months` | `int` | Whole months the loan was outstanding in the selected tax year, from 1 to 12. |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `input` | `array` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `loan_made_on` | `string` | Date the loan was made, YYYY-MM-DD, within the accounting period. |
| `marginal_income_tax_rate` | `float` | Director’s marginal Income Tax rate as a percentage, used only to estimate personal tax on the benefit. |
| `outstanding` | `float` | Loan balance the director or other participator owed the company at the period end, in pounds. |
| `page_url` | `string` |  |
| `period_end` | `string` | Last day of the company's Corporation Tax accounting period, YYYY-MM-DD. |
| `repaid_within_9_months` | `float` | Part of that balance repaid, released or written off after the period end and within 9 months of it (before the s.455 tax is due), in pounds. |
| `result` | `array` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tool` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DirectorsLoan record (throws on error).
$directors_loan = $client->DirectorsLoan()->load(["outstanding" => 1, "period_end" => "period_end"]);
```

#### Example: Create

```php
$directors_loan = $client->DirectorsLoan()->create([
    "outstanding" => null, // float
    "period_end" => null, // string
]);
```


### DividendReserve

Create an instance: `$dividend_reserve = $client->DividendReserve();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `dividends_already_paid` | `float` | Dividends already paid or declared from these profits, in pounds. |
| `input` | `array` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `profit_after_tax` | `float` | This period’s realised profit after Corporation Tax, in pounds. |
| `proposed_dividend` | `float` | Dividend now proposed, in pounds. |
| `result` | `array` |  |
| `retained_profits_brought_forward` | `float` | Accumulated retained profits or losses brought forward, in pounds. |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tool` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DividendReserve record (throws on error).
$dividend_reserve = $client->DividendReserve()->load(["dividends_already_paid" => 1, "profit_after_tax" => 1, "proposed_dividend" => 1, "retained_profits_brought_forward" => 1]);
```

#### Example: Create

```php
$dividend_reserve = $client->DividendReserve()->create([
    "dividends_already_paid" => null, // float
    "profit_after_tax" => null, // float
    "proposed_dividend" => null, // float
    "retained_profits_brought_forward" => null, // float
]);
```


### HomeOffice

Create an instance: `$home_office = $client->HomeOffice();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actual_additional_costs` | `float` | Optional total reasonable additional household costs caused by working at home, in pounds, supported by records. |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `frequency` | `string` | Whether to use HMRC’s £6 weekly rate or £26 monthly rate. |
| `input` | `array` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `periods` | `int` | Number of weeks or months of regular homeworking in the tax year; no more than 52 weeks or 12 months. |
| `result` | `array` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the HomeOffice record (throws on error).
$home_office = $client->HomeOffice()->load(["frequency" => "frequency", "period" => 1, "tax_year" => "tax_year"]);
```

#### Example: Create

```php
$home_office = $client->HomeOffice()->create([
    "frequency" => null, // string
    "periods" => null, // int
    "tax_year" => null, // string
]);
```


### LatePenalty

Create an instance: `$late_penalty = $client->LatePenalty();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `filed_on` | `string` | The date the CT600 was, or will be, filed with HMRC. |
| `input` | `array` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `late_previous_two` | `bool` | True if the company was liable to a late filing penalty for each of its two previous accounting periods (consecutive, and within Corporation Tax throughout). |
| `page_url` | `string` |  |
| `paid_on` | `string` | The date the Corporation Tax was, or will be, paid in full. |
| `period_end` | `string` | Last day of the Corporation Tax accounting period the CT600 covers (YYYY-MM-DD), on or after 2015-04-01. |
| `period_of_account_end` | `string` | Only if the company's accounts cover more than 12 months (up to 18): the last day of that period of account, no more than 6 months after period_end. |
| `result` | `array` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_due` | `float` | Corporation Tax payable for the accounting period, in pounds. |
| `tool` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the LatePenalty record (throws on error).
$late_penalty = $client->LatePenalty()->load(["filed_on" => "filed_on", "period_end" => "period_end"]);
```

#### Example: Create

```php
$late_penalty = $client->LatePenalty()->create([
    "filed_on" => null, // string
    "period_end" => null, // string
]);
```


### LongPeriod

Create an instance: `$long_period = $client->LongPeriod();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `first_accounts` | `bool` | Optional: true if these are the company's first accounts (sets the Companies House deadline). |
| `input` | `array` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `period_end` | `string` | Last day of the accounts, YYYY-MM-DD. |
| `period_start` | `string` | First day of the accounts (period of account), YYYY-MM-DD. |
| `profit` | `float` | Optional: trading profit for the whole period in pounds, to split by days. |
| `result` | `array` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tool` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the LongPeriod record (throws on error).
$long_period = $client->LongPeriod()->load(["period_end" => "period_end", "period_start" => "period_start"]);
```

#### Example: Create

```php
$long_period = $client->LongPeriod()->create([
    "period_end" => null, // string
    "period_start" => null, // string
]);
```


### MileageAllowance

Create an instance: `$mileage_allowance = $client->MileageAllowance();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_miles` | `int` | Total qualifying business miles in this vehicle category during the tax year. |
| `calculated_by` | `string` |  |
| `disclaimer` | `string` |  |
| `employer_payment` | `float` | Total mileage allowance paid by the company for those miles, in pounds. |
| `input` | `array` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `result` | `array` |  |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `string` |  |
| `vehicle` | `string` | The employee-owned vehicle used for business travel: car_van, motorcycle or bicycle. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the MileageAllowance record (throws on error).
$mileage_allowance = $client->MileageAllowance()->load(["business_mile" => 1, "employer_payment" => 1, "tax_year" => "tax_year", "vehicle" => "vehicle"]);
```

#### Example: Create

```php
$mileage_allowance = $client->MileageAllowance()->create([
    "business_miles" => null, // int
    "employer_payment" => null, // float
    "tax_year" => null, // string
    "vehicle" => null, // string
]);
```


### SalaryDividend

Create an instance: `$salary_dividend = $client->SalaryDividend();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_companies` | `int` | Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. |
| `calculated_by` | `string` |  |
| `company_profit` | `float` | The company's profit for the year before paying the director any salary, after all its other costs, in pounds. |
| `director_only_employee` | `bool` | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `string` |  |
| `input` | `array` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | `float` | The director's other taxable income for the tax year from outside this company, such as another job, a pension or rental profit, in pounds. |
| `page_url` | `string` |  |
| `result` | `array` |  |
| `salary` | `float` | Optional: a salary you want to compare with the standard options, in pounds a year. |
| `scottish_taxpayer` | `bool` | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SalaryDividend record (throws on error).
$salary_dividend = $client->SalaryDividend()->load(["company_profit" => 1]);
```

#### Example: Create

```php
$salary_dividend = $client->SalaryDividend()->create([
    "company_profit" => null, // float
]);
```


### SoleTraderVsLimited

Create an instance: `$sole_trader_vs_limited = $client->SoleTraderVsLimited();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calculated_by` | `string` |  |
| `director_only_employee` | `bool` | true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. |
| `disclaimer` | `string` |  |
| `input` | `array` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `other_income` | `float` | The owner's other taxable income for the tax year, such as a job, a pension or rental profit, in pounds. |
| `page_url` | `string` |  |
| `profit` | `float` | The business's profit for the year, after expenses and before any tax or pay to the owner, in pounds. |
| `result` | `array` |  |
| `scottish_taxpayer` | `bool` | true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | UK tax year, "2025-26" or "2026-27" (6 April to 5 April). |
| `tool` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SoleTraderVsLimited record (throws on error).
$sole_trader_vs_limited = $client->SoleTraderVsLimited()->load(["profit" => 1]);
```

#### Example: Create

```php
$sole_trader_vs_limited = $client->SoleTraderVsLimited()->create([
    "profit" => null, // float
]);
```


### Tool

Create an instance: `$tool = $client->Tool();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Tool record (throws on error).
$tool = $client->Tool()->load();
```


### TrivialBenefit

Create an instance: `$trivial_benefit = $client->TrivialBenefit();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `benefit_cost` | `float` | Cost to the company of this individual benefit, in pounds. |
| `calculated_by` | `string` |  |
| `cash_or_cash_voucher` | `bool` | True if the benefit is cash or a voucher exchangeable for cash. |
| `close_company_director` | `bool` | True if the recipient is a director or office holder of a close company. |
| `disclaimer` | `string` |  |
| `in_contract` | `bool` | True if the benefit is promised in the employment contract or other contractual terms. |
| `input` | `array` | The input as the tool read it (dates YYYY-MM-DD, money in pounds). |
| `page_url` | `string` |  |
| `qualifying_benefits_so_far` | `float` | For a close-company director, total cost in pounds of earlier qualifying trivial benefits from this employer in the tax year. |
| `result` | `array` |  |
| `reward_for_work` | `bool` | True if the benefit rewards the employee’s work or performance. |
| `share_url` | `string` | A link to this result on taxley.co.uk. |
| `tax_year` | `string` | UK tax year: 2025-26, 2026-27 or 2027-28. |
| `tool` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TrivialBenefit record (throws on error).
$trivial_benefit = $client->TrivialBenefit()->load(["benefit_cost" => 1, "cash_or_cash_voucher" => true, "close_company_director" => true, "in_contract" => true, "qualifying_benefits_so_far" => 1, "reward_for_work" => true, "tax_year" => "tax_year"]);
```

#### Example: Create

```php
$trivial_benefit = $client->TrivialBenefit()->create([
    "benefit_cost" => null, // float
    "cash_or_cash_voucher" => null, // bool
    "close_company_director" => null, // bool
    "in_contract" => null, // bool
    "qualifying_benefits_so_far" => null, // float
    "reward_for_work" => null, // bool
    "tax_year" => null, // string
]);
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── taxleycorporationtax_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`taxleycorporationtax_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$corporationtax = $client->CorporationTax();
$corporationtax->load(["period_end" => "example", "period_start" => "example", "taxable_profit" => 1]);

// $corporationtax->data_get() now returns the corporationtax data from the last load
// $corporationtax->match_get() returns the last match criteria
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
