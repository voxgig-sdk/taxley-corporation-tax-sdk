# Taxley free UK Corporation Tax tools

Free calculators for UK limited companies: the same results as the tool pages on `taxley.co.uk`. No key needed; please link to the `share_url` when you use a result. General guidance from Taxley&#39;s free calculator, based on the rules published on GOV.UK. It is not tax advice; check your own figures before you file or pay.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 18 entities and 35 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### CapitalAllowance

Results: The result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `aia_shared`: Optional.
- `full_expensed_disposals`: Sale proceeds of assets that had full expensing on their whole cost, sold this period.
- `input`: The input as the tool read it (dates YYYY-MM-DD, money in pounds).
- `main_pool_brought_forward`: Main pool balance carried forward from the previous accounting period (0 if none).
- `main_pool_disposals`: Sale proceeds of main pool assets sold this period that did NOT have full expensing (for example, assets that had the annual investment allowance or were pooled).

### ChargeableGain

Results: The result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `acquisition_cost`: What the company paid for the asset, in pounds.
- `acquisition_costs`: Optional.
- `acquisition_date`: When the company bought the asset (exchange of contracts), as YYYY-MM-DD.
- `asset_type`: &quot;`land_buildings`&quot;: UK land or buildings (the company&#39;s whole interest; a freehold or a lease with more than 50 years left).
- `disposal_costs`: Optional.

### CompanyCar

Results: The result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `acquisition`: Optional.
- `annual_lease_cost`: For &quot;lease&quot;: the lease rentals the company pays in its year, in pounds, excluding VAT it can reclaim.
- `associated_companies`: Optional, with `company_profits`.
- `capital_contribution`: Optional.
- `co2_gkm`: The car&#39;s approved CO2 emissions in g/km, from the V5C or certificate of conformity (WLTP for cars first registered from 6 April 2020, NEDC before; both give the same percentage in 2025/26 and 2026/27).

### CompanySize

Results: The result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `balance_sheet_total`: Balance sheet total: gross assets (fixed plus current assets, before liabilities) at the year end, in pounds.
- `employees`: Average number of employees in the year (monthly headcounts added up, divided by the number of months).
- `first_year`: True if this is the company&#39;s first financial year (then this year alone decides its size).
- `input`: The input as the tool read it (dates YYYY-MM-DD, money in pounds).
- `period_end`: Last day of the financial year, YYYY-MM-DD.

### CompanyVan

Results: The result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `associated_companies`: Optional, with `company_profits`.
- `company_profits`: Optional.
- `income_tax_rate`: The director&#39;s or employee&#39;s top rate of Income Tax: &quot;basic&quot; (20%), &quot;higher&quot; (40%) or &quot;additional&quot; (45%).
- `input`: The input as the tool read it (dates YYYY-MM-DD, money in pounds).
- `months_available`: Optional.

### CorporationTax

Results: The result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `associated_companies`: How many other companies are associated with this one (under common control) in the period.
- `close_investment_holding`: True if the company is a close investment-holding company in the period (CTA 2010 s.18N): a close company is one unless, throughout the period, it exists wholly or mainly to trade commercially, to let land to people not connected with it,…
- `exempt_distributions`: Exempt dividends received from companies outside the company&#39;s 51% group (and not from a trading company owned by a consortium it belongs to) (CTA 2010 s.18L), in pounds, used only to decide the rate.
- `input`: The input as the tool read it (dates YYYY-MM-DD, money in pounds).
- `period_end`: Last day of the accounting period, YYYY-MM-DD.

### Deadline

Results: The result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `input`: The input as the tool read it (dates YYYY-MM-DD, money in pounds).
- `period_end`: The last day of the accounts period (the company&#39;s year end or accounting reference date), as YYYY-MM-DD.
- `period_start`: Optional.
- `share_url`: A link to this result on `taxley.co.uk`.

### DirectorPension

Results: The result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `associated_companies`: Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits.
- `company_profit`: The company&#39;s taxable profit for its year before this contribution, after the director&#39;s existing salary and other costs, in pounds.
- `contribution`: The amount the company would pay into the director&#39;s pension as an employer contribution, in pounds.
- `director_only_employee`: true if the director is the company&#39;s only employee paid over £5,000 a year (the usual one-person company): the company then can&#39;t claim the Employment Allowance.
- `dividends`: Dividends the director already takes this tax year, in pounds.

### DirectorsLoan

Results: The result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `benefit_closing_balance`: Maximum loan balance on 5 April at the end of the selected tax year, or when the loan ended, in pounds.
- `benefit_interest_paid`: Interest the director was required to pay and actually paid for the selected tax year, in pounds.
- `benefit_maximum_balance`: Highest total beneficial-loan balance at any time in the tax year, in pounds, used for the £10,000 exemption.
- `benefit_opening_balance`: Maximum loan balance on 5 April before the selected tax year, or when the loan began, in pounds.
- `benefit_tax_year`: Optional UK tax year for the beneficial-loan calculation: 2025-26 or 2026-27.

### DividendReserve

Results: The result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `dividends_already_paid`: Dividends already paid or declared from these profits, in pounds.
- `input`: The input as the tool read it (dates YYYY-MM-DD, money in pounds).
- `profit_after_tax`: This period’s realised profit after Corporation Tax, in pounds.
- `proposed_dividend`: Dividend now proposed, in pounds.
- `retained_profits_brought_forward`: Accumulated retained profits or losses brought forward, in pounds.

### HomeOffice

Results: The result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `actual_additional_costs`: Optional total reasonable additional household costs caused by working at home, in pounds, supported by records.
- `frequency`: Whether to use HMRC’s £6 weekly rate or £26 monthly rate.
- `input`: The input as the tool read it (dates YYYY-MM-DD, money in pounds).
- `periods`: Number of weeks or months of regular homeworking in the tax year; no more than 52 weeks or 12 months.
- `share_url`: A link to this result on `taxley.co.uk`.

### LatePenalty

Results: The result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `filed_on`: The date the CT600 was, or will be, filed with HMRC.
- `input`: The input as the tool read it (dates YYYY-MM-DD, money in pounds).
- `late_previous_two`: True if the company was liable to a late filing penalty for each of its two previous accounting periods (consecutive, and within Corporation Tax throughout).
- `paid_on`: The date the Corporation Tax was, or will be, paid in full.
- `period_end`: Last day of the Corporation Tax accounting period the CT600 covers (YYYY-MM-DD), on or after 2015-04-01.

### LongPeriod

Results: The result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `first_accounts`: Optional: true if these are the company&#39;s first accounts (sets the Companies House deadline).
- `input`: The input as the tool read it (dates YYYY-MM-DD, money in pounds).
- `period_end`: Last day of the accounts, YYYY-MM-DD.
- `period_start`: First day of the accounts (period of account), YYYY-MM-DD.
- `profit`: Optional: trading profit for the whole period in pounds, to split by days.

### MileageAllowance

Results: The result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `business_miles`: Total qualifying business miles in this vehicle category during the tax year.
- `employer_payment`: Total mileage allowance paid by the company for those miles, in pounds.
- `input`: The input as the tool read it (dates YYYY-MM-DD, money in pounds).
- `share_url`: A link to this result on `taxley.co.uk`.
- `tax_year`: UK tax year: 2025-26, 2026-27 or 2027-28.

### SalaryDividend

Results: The result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `associated_companies`: Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits.
- `company_profit`: The company&#39;s profit for the year before paying the director any salary, after all its other costs, in pounds.
- `director_only_employee`: true if the director is the company&#39;s only employee paid over £5,000 a year (the usual one-person company): the company then can&#39;t claim the Employment Allowance.
- `input`: The input as the tool read it (dates YYYY-MM-DD, money in pounds).
- `other_income`: The director&#39;s other taxable income for the tax year from outside this company, such as another job, a pension or rental profit, in pounds.

### SoleTraderVsLimited

Results: The result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `director_only_employee`: true if the director is the company&#39;s only employee paid over £5,000 a year (the usual one-person company): the company then can&#39;t claim the Employment Allowance.
- `input`: The input as the tool read it (dates YYYY-MM-DD, money in pounds).
- `other_income`: The owner&#39;s other taxable income for the tax year, such as a job, a pension or rental profit, in pounds.
- `profit`: The business&#39;s profit for the year, after expenses and before any tax or pay to the owner, in pounds.
- `scottish_taxpayer`: true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands.

### Tool

Results: The tools, with their input schemas and example inputs.

SDK operations: `load`.

### TrivialBenefit

Results: The result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `benefit_cost`: Cost to the company of this individual benefit, in pounds.
- `cash_or_cash_voucher`: True if the benefit is cash or a voucher exchangeable for cash.
- `close_company_director`: True if the recipient is a director or office holder of a close company.
- `in_contract`: True if the benefit is promised in the employment contract or other contractual terms.
- `input`: The input as the tool read it (dates YYYY-MM-DD, money in pounds).

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| CapitalAllowance | `create` | `POST /api/v1/tools/capital-allowances` | See reference |
| CapitalAllowance | `load` | `GET /api/v1/tools/capital-allowances` | See reference |
| ChargeableGain | `create` | `POST /api/v1/tools/chargeable-gains` | See reference |
| ChargeableGain | `load` | `GET /api/v1/tools/chargeable-gains` | See reference |
| CompanyCar | `create` | `POST /api/v1/tools/company-car` | See reference |
| CompanyCar | `load` | `GET /api/v1/tools/company-car` | See reference |
| CompanySize | `create` | `POST /api/v1/tools/company-size` | See reference |
| CompanySize | `load` | `GET /api/v1/tools/company-size` | See reference |
| CompanyVan | `create` | `POST /api/v1/tools/company-van` | See reference |
| CompanyVan | `load` | `GET /api/v1/tools/company-van` | See reference |
| CorporationTax | `create` | `POST /api/v1/tools/corporation-tax` | See reference |
| CorporationTax | `load` | `GET /api/v1/tools/corporation-tax` | See reference |
| Deadline | `create` | `POST /api/v1/tools/deadlines` | See reference |
| Deadline | `load` | `GET /api/v1/tools/deadlines` | See reference |
| DirectorPension | `create` | `POST /api/v1/tools/director-pension` | See reference |
| DirectorPension | `load` | `GET /api/v1/tools/director-pension` | See reference |
| DirectorsLoan | `create` | `POST /api/v1/tools/directors-loan` | See reference |
| DirectorsLoan | `load` | `GET /api/v1/tools/directors-loan` | See reference |
| DividendReserve | `create` | `POST /api/v1/tools/dividend-reserves` | See reference |
| DividendReserve | `load` | `GET /api/v1/tools/dividend-reserves` | See reference |
| HomeOffice | `create` | `POST /api/v1/tools/home-office` | See reference |
| HomeOffice | `load` | `GET /api/v1/tools/home-office` | See reference |
| LatePenalty | `create` | `POST /api/v1/tools/late-penalty` | See reference |
| LatePenalty | `load` | `GET /api/v1/tools/late-penalty` | See reference |
| LongPeriod | `create` | `POST /api/v1/tools/long-period` | See reference |
| LongPeriod | `load` | `GET /api/v1/tools/long-period` | See reference |
| MileageAllowance | `create` | `POST /api/v1/tools/mileage-allowance` | See reference |
| MileageAllowance | `load` | `GET /api/v1/tools/mileage-allowance` | See reference |
| SalaryDividend | `create` | `POST /api/v1/tools/salary-dividends` | See reference |
| SalaryDividend | `load` | `GET /api/v1/tools/salary-dividends` | See reference |
| SoleTraderVsLimited | `create` | `POST /api/v1/tools/sole-trader-vs-limited` | See reference |
| SoleTraderVsLimited | `load` | `GET /api/v1/tools/sole-trader-vs-limited` | See reference |
| Tool | `load` | `GET /api/v1/tools` | See reference |
| TrivialBenefit | `create` | `POST /api/v1/tools/trivial-benefits` | See reference |
| TrivialBenefit | `load` | `GET /api/v1/tools/trivial-benefits` | See reference |

## Connect to the API

- API server: `https://taxley.co.uk`

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `taxley-corporation-tax_list`: List records for an entity. No active entity supports this operation.
- `taxley-corporation-tax_load`: Load one record for an entity. Supported entities: `capital_allowance`, `chargeable_gain`, `company_car`, `company_size`, `company_van`, `corporation_tax`, `deadline`, `director_pension`, `directors_loan`, `dividend_reserve`, `home_office`, `late_penalty`, `long_period`, `mileage_allowance`, `salary_dividend`, `sole_trader_vs_limited`, `tool`, `trivial_benefit`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

