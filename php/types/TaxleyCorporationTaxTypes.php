<?php
declare(strict_types=1);

// Typed models for the TaxleyCorporationTax SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** CapitalAllowance entity data model. */
class CapitalAllowance
{
    public ?float $aia_shared = null;
    public string $calculated_by;
    public string $disclaimer;
    public ?float $full_expensed_disposals = null;
    public array $input;
    public ?float $main_pool_brought_forward = null;
    public ?float $main_pool_disposals = null;
    public ?float $new_main_plant = null;
    public ?float $new_special_rate = null;
    public ?float $other_cars_high_co2 = null;
    public ?float $other_cars_low_co2 = null;
    public string $page_url;
    public string $period_end;
    public string $period_start;
    public array $result;
    public string $share_url;
    public ?float $special_pool_brought_forward = null;
    public ?string $spend_date = null;
    public string $tool;
    public ?float $used_main_plant = null;
    public ?float $used_special_rate = null;
    public ?float $zero_emission_cars = null;
}

/** Request payload for CapitalAllowance#load. */
class CapitalAllowanceLoadMatch
{
    public ?float $aia_shared = null;
    public ?float $full_expensed_disposal = null;
    public ?float $main_pool_brought_forward = null;
    public ?float $main_pool_disposal = null;
    public ?float $new_main_plant = null;
    public ?float $new_special_rate = null;
    public ?float $other_cars_high_co2 = null;
    public ?float $other_cars_low_co2 = null;
    public string $period_end;
    public string $period_start;
    public ?float $special_pool_brought_forward = null;
    public ?string $spend_date = null;
    public ?float $used_main_plant = null;
    public ?float $used_special_rate = null;
    public ?float $zero_emission_car = null;
}

/** Request payload for CapitalAllowance#create. */
class CapitalAllowanceCreateData
{
    public ?float $aia_shared = null;
    public ?float $full_expensed_disposals = null;
    public ?float $main_pool_brought_forward = null;
    public ?float $main_pool_disposals = null;
    public ?float $new_main_plant = null;
    public ?float $new_special_rate = null;
    public ?float $other_cars_high_co2 = null;
    public ?float $other_cars_low_co2 = null;
    public string $period_end;
    public string $period_start;
    public ?float $special_pool_brought_forward = null;
    public ?string $spend_date = null;
    public ?float $used_main_plant = null;
    public ?float $used_special_rate = null;
    public ?float $zero_emission_cars = null;
}

/** ChargeableGain entity data model. */
class ChargeableGain
{
    public float $acquisition_cost;
    public ?float $acquisition_costs = null;
    public string $acquisition_date;
    public string $asset_type;
    public string $calculated_by;
    public string $disclaimer;
    public ?float $disposal_costs = null;
    public string $disposal_date;
    public ?float $enhancement_cost = null;
    public ?string $enhancement_date = null;
    public array $input;
    public string $page_url;
    public float $proceeds;
    public array $result;
    public ?float $sba_claimed = null;
    public string $share_url;
    public string $tool;
}

/** Request payload for ChargeableGain#load. */
class ChargeableGainLoadMatch
{
    public ?float $acquisition_cost = null;
    public string $acquisition_date;
    public string $asset_type;
    public ?float $disposal_cost = null;
    public string $disposal_date;
    public ?float $enhancement_cost = null;
    public ?string $enhancement_date = null;
    public float $proceed;
    public ?float $sba_claimed = null;
}

/** Request payload for ChargeableGain#create. */
class ChargeableGainCreateData
{
    public float $acquisition_cost;
    public ?float $acquisition_costs = null;
    public string $acquisition_date;
    public string $asset_type;
    public ?float $disposal_costs = null;
    public string $disposal_date;
    public ?float $enhancement_cost = null;
    public ?string $enhancement_date = null;
    public float $proceeds;
    public ?float $sba_claimed = null;
}

/** CompanyCar entity data model. */
class CompanyCar
{
    public ?string $acquisition = null;
    public ?float $annual_lease_cost = null;
    public ?int $associated_companies = null;
    public string $calculated_by;
    public ?float $capital_contribution = null;
    public ?int $co2_gkm = null;
    public ?float $company_profits = null;
    public string $disclaimer;
    public ?int $electric_range_miles = null;
    public string $fuel_type;
    public string $income_tax_rate;
    public array $input;
    public ?string $lease_started = null;
    public float $list_price;
    public ?int $months_available = null;
    public ?bool $new_car = null;
    public string $page_url;
    public ?bool $phev_easement = null;
    public ?float $price_paid = null;
    public ?bool $private_fuel = null;
    public array $result;
    public string $share_url;
    public string $tax_year;
    public string $tool;
}

/** Request payload for CompanyCar#load. */
class CompanyCarLoadMatch
{
    public ?string $acquisition = null;
    public ?float $annual_lease_cost = null;
    public ?int $associated_company = null;
    public ?float $capital_contribution = null;
    public ?int $co2_gkm = null;
    public ?float $company_profit = null;
    public ?int $electric_range_mile = null;
    public string $fuel_type;
    public string $income_tax_rate;
    public ?string $lease_started = null;
    public float $list_price;
    public ?int $months_available = null;
    public ?bool $new_car = null;
    public ?bool $phev_easement = null;
    public ?float $price_paid = null;
    public ?bool $private_fuel = null;
    public string $tax_year;
}

/** Request payload for CompanyCar#create. */
class CompanyCarCreateData
{
    public ?string $acquisition = null;
    public ?float $annual_lease_cost = null;
    public ?int $associated_companies = null;
    public ?float $capital_contribution = null;
    public ?int $co2_gkm = null;
    public ?float $company_profits = null;
    public ?int $electric_range_miles = null;
    public string $fuel_type;
    public string $income_tax_rate;
    public ?string $lease_started = null;
    public float $list_price;
    public ?int $months_available = null;
    public ?bool $new_car = null;
    public ?bool $phev_easement = null;
    public ?float $price_paid = null;
    public ?bool $private_fuel = null;
    public string $tax_year;
}

/** CompanySize entity data model. */
class CompanySize
{
    public float $balance_sheet_total;
    public string $calculated_by;
    public string $disclaimer;
    public float $employees;
    public ?bool $first_year = null;
    public array $input;
    public string $page_url;
    public string $period_end;
    public string $period_start;
    public ?float $prev_balance_sheet_total = null;
    public ?float $prev_employees = null;
    public ?string $prev_size = null;
    public ?float $prev_turnover = null;
    public array $result;
    public string $share_url;
    public string $tool;
    public float $turnover;
}

/** Request payload for CompanySize#load. */
class CompanySizeLoadMatch
{
    public float $balance_sheet_total;
    public float $employee;
    public ?bool $first_year = null;
    public string $period_end;
    public string $period_start;
    public ?float $prev_balance_sheet_total = null;
    public ?float $prev_employee = null;
    public ?string $prev_size = null;
    public ?float $prev_turnover = null;
    public float $turnover;
}

/** Request payload for CompanySize#create. */
class CompanySizeCreateData
{
    public float $balance_sheet_total;
    public float $employees;
    public ?bool $first_year = null;
    public string $period_end;
    public string $period_start;
    public ?float $prev_balance_sheet_total = null;
    public ?float $prev_employees = null;
    public ?string $prev_size = null;
    public ?float $prev_turnover = null;
    public float $turnover;
}

/** CompanyVan entity data model. */
class CompanyVan
{
    public ?int $associated_companies = null;
    public string $calculated_by;
    public ?float $company_profits = null;
    public string $disclaimer;
    public string $income_tax_rate;
    public array $input;
    public ?int $months_available = null;
    public string $page_url;
    public ?float $price_paid = null;
    public ?bool $private_fuel = null;
    public array $result;
    public string $share_url;
    public string $tax_year;
    public string $tool;
    public ?bool $zero_emission = null;
}

/** Request payload for CompanyVan#load. */
class CompanyVanLoadMatch
{
    public ?int $associated_company = null;
    public ?float $company_profit = null;
    public string $income_tax_rate;
    public ?int $months_available = null;
    public ?float $price_paid = null;
    public ?bool $private_fuel = null;
    public string $tax_year;
    public ?bool $zero_emission = null;
}

/** Request payload for CompanyVan#create. */
class CompanyVanCreateData
{
    public ?int $associated_companies = null;
    public ?float $company_profits = null;
    public string $income_tax_rate;
    public ?int $months_available = null;
    public ?float $price_paid = null;
    public ?bool $private_fuel = null;
    public string $tax_year;
    public ?bool $zero_emission = null;
}

/** CorporationTax entity data model. */
class CorporationTax
{
    public ?int $associated_companies = null;
    public string $calculated_by;
    public ?bool $close_investment_holding = null;
    public string $disclaimer;
    public ?float $exempt_distributions = null;
    public array $input;
    public string $page_url;
    public string $period_end;
    public string $period_start;
    public array $result;
    public string $share_url;
    public float $taxable_profits;
    public string $tool;
}

/** Request payload for CorporationTax#load. */
class CorporationTaxLoadMatch
{
    public ?int $associated_company = null;
    public ?bool $close_investment_holding = null;
    public ?float $exempt_distribution = null;
    public string $period_end;
    public string $period_start;
    public float $taxable_profit;
}

/** Request payload for CorporationTax#create. */
class CorporationTaxCreateData
{
    public ?int $associated_companies = null;
    public ?bool $close_investment_holding = null;
    public ?float $exempt_distributions = null;
    public string $period_end;
    public string $period_start;
    public float $taxable_profits;
}

/** Deadline entity data model. */
class Deadline
{
    public string $calculated_by;
    public string $disclaimer;
    public array $input;
    public string $page_url;
    public string $period_end;
    public ?string $period_start = null;
    public array $result;
    public string $share_url;
    public string $tool;
}

/** Request payload for Deadline#load. */
class DeadlineLoadMatch
{
    public string $period_end;
    public ?string $period_start = null;
}

/** Request payload for Deadline#create. */
class DeadlineCreateData
{
    public string $period_end;
    public ?string $period_start = null;
}

/** DirectorPension entity data model. */
class DirectorPension
{
    public ?int $associated_companies = null;
    public string $calculated_by;
    public float $company_profit;
    public float $contribution;
    public ?bool $director_only_employee = null;
    public string $disclaimer;
    public ?float $dividends = null;
    public array $input;
    public ?bool $money_purchase_allowance = null;
    public ?float $other_income = null;
    public ?float $other_pension_contributions = null;
    public string $page_url;
    public array $result;
    public ?float $salary = null;
    public ?bool $scottish_taxpayer = null;
    public string $share_url;
    public ?string $tax_year = null;
    public string $tool;
}

/** Request payload for DirectorPension#load. */
class DirectorPensionLoadMatch
{
    public ?int $associated_company = null;
    public float $company_profit;
    public float $contribution;
    public ?bool $director_only_employee = null;
    public ?float $dividend = null;
    public ?bool $money_purchase_allowance = null;
    public ?float $other_income = null;
    public ?float $other_pension_contribution = null;
    public ?float $salary = null;
    public ?bool $scottish_taxpayer = null;
    public ?string $tax_year = null;
}

/** Request payload for DirectorPension#create. */
class DirectorPensionCreateData
{
    public ?int $associated_companies = null;
    public float $company_profit;
    public float $contribution;
    public ?bool $director_only_employee = null;
    public ?float $dividends = null;
    public ?bool $money_purchase_allowance = null;
    public ?float $other_income = null;
    public ?float $other_pension_contributions = null;
    public ?float $salary = null;
    public ?bool $scottish_taxpayer = null;
    public ?string $tax_year = null;
}

/** DirectorsLoan entity data model. */
class DirectorsLoan
{
    public ?float $benefit_closing_balance = null;
    public ?float $benefit_interest_paid = null;
    public ?float $benefit_maximum_balance = null;
    public ?float $benefit_opening_balance = null;
    public ?string $benefit_tax_year = null;
    public ?int $benefit_whole_months = null;
    public string $calculated_by;
    public string $disclaimer;
    public array $input;
    public ?string $loan_made_on = null;
    public ?float $marginal_income_tax_rate = null;
    public float $outstanding;
    public string $page_url;
    public string $period_end;
    public ?float $repaid_within_9_months = null;
    public array $result;
    public string $share_url;
    public string $tool;
}

/** Request payload for DirectorsLoan#load. */
class DirectorsLoanLoadMatch
{
    public ?float $benefit_closing_balance = null;
    public ?float $benefit_interest_paid = null;
    public ?float $benefit_maximum_balance = null;
    public ?float $benefit_opening_balance = null;
    public ?string $benefit_tax_year = null;
    public ?int $benefit_whole_month = null;
    public ?string $loan_made_on = null;
    public ?float $marginal_income_tax_rate = null;
    public float $outstanding;
    public string $period_end;
    public ?float $repaid_within_9_month = null;
}

/** Request payload for DirectorsLoan#create. */
class DirectorsLoanCreateData
{
    public ?float $benefit_closing_balance = null;
    public ?float $benefit_interest_paid = null;
    public ?float $benefit_maximum_balance = null;
    public ?float $benefit_opening_balance = null;
    public ?string $benefit_tax_year = null;
    public ?int $benefit_whole_months = null;
    public ?string $loan_made_on = null;
    public ?float $marginal_income_tax_rate = null;
    public float $outstanding;
    public string $period_end;
    public ?float $repaid_within_9_months = null;
}

/** DividendReserve entity data model. */
class DividendReserve
{
    public string $calculated_by;
    public string $disclaimer;
    public float $dividends_already_paid;
    public array $input;
    public string $page_url;
    public float $profit_after_tax;
    public float $proposed_dividend;
    public array $result;
    public float $retained_profits_brought_forward;
    public string $share_url;
    public string $tool;
}

/** Request payload for DividendReserve#load. */
class DividendReserveLoadMatch
{
    public float $dividends_already_paid;
    public float $profit_after_tax;
    public float $proposed_dividend;
    public float $retained_profits_brought_forward;
}

/** Request payload for DividendReserve#create. */
class DividendReserveCreateData
{
    public float $dividends_already_paid;
    public float $profit_after_tax;
    public float $proposed_dividend;
    public float $retained_profits_brought_forward;
}

/** HomeOffice entity data model. */
class HomeOffice
{
    public ?float $actual_additional_costs = null;
    public string $calculated_by;
    public string $disclaimer;
    public string $frequency;
    public array $input;
    public string $page_url;
    public int $periods;
    public array $result;
    public string $share_url;
    public string $tax_year;
    public string $tool;
}

/** Request payload for HomeOffice#load. */
class HomeOfficeLoadMatch
{
    public ?float $actual_additional_cost = null;
    public string $frequency;
    public int $period;
    public string $tax_year;
}

/** Request payload for HomeOffice#create. */
class HomeOfficeCreateData
{
    public ?float $actual_additional_costs = null;
    public string $frequency;
    public int $periods;
    public string $tax_year;
}

/** LatePenalty entity data model. */
class LatePenalty
{
    public string $calculated_by;
    public string $disclaimer;
    public string $filed_on;
    public array $input;
    public ?bool $late_previous_two = null;
    public string $page_url;
    public ?string $paid_on = null;
    public string $period_end;
    public ?string $period_of_account_end = null;
    public array $result;
    public string $share_url;
    public ?float $tax_due = null;
    public string $tool;
}

/** Request payload for LatePenalty#load. */
class LatePenaltyLoadMatch
{
    public string $filed_on;
    public ?bool $late_previous_two = null;
    public ?string $paid_on = null;
    public string $period_end;
    public ?string $period_of_account_end = null;
    public ?float $tax_due = null;
}

/** Request payload for LatePenalty#create. */
class LatePenaltyCreateData
{
    public string $filed_on;
    public ?bool $late_previous_two = null;
    public ?string $paid_on = null;
    public string $period_end;
    public ?string $period_of_account_end = null;
    public ?float $tax_due = null;
}

/** LongPeriod entity data model. */
class LongPeriod
{
    public string $calculated_by;
    public string $disclaimer;
    public ?bool $first_accounts = null;
    public array $input;
    public string $page_url;
    public string $period_end;
    public string $period_start;
    public ?float $profit = null;
    public array $result;
    public string $share_url;
    public string $tool;
}

/** Request payload for LongPeriod#load. */
class LongPeriodLoadMatch
{
    public ?bool $first_account = null;
    public string $period_end;
    public string $period_start;
    public ?float $profit = null;
}

/** Request payload for LongPeriod#create. */
class LongPeriodCreateData
{
    public ?bool $first_accounts = null;
    public string $period_end;
    public string $period_start;
    public ?float $profit = null;
}

/** MileageAllowance entity data model. */
class MileageAllowance
{
    public int $business_miles;
    public string $calculated_by;
    public string $disclaimer;
    public float $employer_payment;
    public array $input;
    public string $page_url;
    public array $result;
    public string $share_url;
    public string $tax_year;
    public string $tool;
    public string $vehicle;
}

/** Request payload for MileageAllowance#load. */
class MileageAllowanceLoadMatch
{
    public int $business_mile;
    public float $employer_payment;
    public string $tax_year;
    public string $vehicle;
}

/** Request payload for MileageAllowance#create. */
class MileageAllowanceCreateData
{
    public int $business_miles;
    public float $employer_payment;
    public string $tax_year;
    public string $vehicle;
}

/** SalaryDividend entity data model. */
class SalaryDividend
{
    public ?int $associated_companies = null;
    public string $calculated_by;
    public float $company_profit;
    public ?bool $director_only_employee = null;
    public string $disclaimer;
    public array $input;
    public ?float $other_income = null;
    public string $page_url;
    public array $result;
    public ?float $salary = null;
    public ?bool $scottish_taxpayer = null;
    public string $share_url;
    public ?string $tax_year = null;
    public string $tool;
}

/** Request payload for SalaryDividend#load. */
class SalaryDividendLoadMatch
{
    public ?int $associated_company = null;
    public float $company_profit;
    public ?bool $director_only_employee = null;
    public ?float $other_income = null;
    public ?float $salary = null;
    public ?bool $scottish_taxpayer = null;
    public ?string $tax_year = null;
}

/** Request payload for SalaryDividend#create. */
class SalaryDividendCreateData
{
    public ?int $associated_companies = null;
    public float $company_profit;
    public ?bool $director_only_employee = null;
    public ?float $other_income = null;
    public ?float $salary = null;
    public ?bool $scottish_taxpayer = null;
    public ?string $tax_year = null;
}

/** SoleTraderVsLimited entity data model. */
class SoleTraderVsLimited
{
    public string $calculated_by;
    public ?bool $director_only_employee = null;
    public string $disclaimer;
    public array $input;
    public ?float $other_income = null;
    public string $page_url;
    public float $profit;
    public array $result;
    public ?bool $scottish_taxpayer = null;
    public string $share_url;
    public ?string $tax_year = null;
    public string $tool;
}

/** Request payload for SoleTraderVsLimited#load. */
class SoleTraderVsLimitedLoadMatch
{
    public ?bool $director_only_employee = null;
    public ?float $other_income = null;
    public float $profit;
    public ?bool $scottish_taxpayer = null;
    public ?string $tax_year = null;
}

/** Request payload for SoleTraderVsLimited#create. */
class SoleTraderVsLimitedCreateData
{
    public ?bool $director_only_employee = null;
    public ?float $other_income = null;
    public float $profit;
    public ?bool $scottish_taxpayer = null;
    public ?string $tax_year = null;
}

/** Tool entity data model. */
class Tool
{
}

/** Request payload for Tool#load. */
class ToolLoadMatch
{
}

/** TrivialBenefit entity data model. */
class TrivialBenefit
{
    public float $benefit_cost;
    public string $calculated_by;
    public bool $cash_or_cash_voucher;
    public bool $close_company_director;
    public string $disclaimer;
    public bool $in_contract;
    public array $input;
    public string $page_url;
    public float $qualifying_benefits_so_far;
    public array $result;
    public bool $reward_for_work;
    public string $share_url;
    public string $tax_year;
    public string $tool;
}

/** Request payload for TrivialBenefit#load. */
class TrivialBenefitLoadMatch
{
    public float $benefit_cost;
    public bool $cash_or_cash_voucher;
    public bool $close_company_director;
    public bool $in_contract;
    public float $qualifying_benefits_so_far;
    public bool $reward_for_work;
    public string $tax_year;
}

/** Request payload for TrivialBenefit#create. */
class TrivialBenefitCreateData
{
    public float $benefit_cost;
    public bool $cash_or_cash_voucher;
    public bool $close_company_director;
    public bool $in_contract;
    public float $qualifying_benefits_so_far;
    public bool $reward_for_work;
    public string $tax_year;
}

