# Typed models for the TaxleyCorporationTax SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class CapitalAllowanceRequired(TypedDict):
    calculated_by: str
    disclaimer: str
    input: dict
    page_url: str
    period_end: str
    period_start: str
    result: dict
    share_url: str
    tool: str


class CapitalAllowance(CapitalAllowanceRequired, total=False):
    aia_shared: float
    full_expensed_disposals: float
    main_pool_brought_forward: float
    main_pool_disposals: float
    new_main_plant: float
    new_special_rate: float
    other_cars_high_co2: float
    other_cars_low_co2: float
    special_pool_brought_forward: float
    spend_date: str
    used_main_plant: float
    used_special_rate: float
    zero_emission_cars: float


class CapitalAllowanceLoadMatchRequired(TypedDict):
    period_end: str
    period_start: str


class CapitalAllowanceLoadMatch(CapitalAllowanceLoadMatchRequired, total=False):
    aia_shared: float
    full_expensed_disposal: float
    main_pool_brought_forward: float
    main_pool_disposal: float
    new_main_plant: float
    new_special_rate: float
    other_cars_high_co2: float
    other_cars_low_co2: float
    special_pool_brought_forward: float
    spend_date: str
    used_main_plant: float
    used_special_rate: float
    zero_emission_car: float


class CapitalAllowanceCreateDataRequired(TypedDict):
    period_end: str
    period_start: str


class CapitalAllowanceCreateData(CapitalAllowanceCreateDataRequired, total=False):
    aia_shared: float
    full_expensed_disposals: float
    main_pool_brought_forward: float
    main_pool_disposals: float
    new_main_plant: float
    new_special_rate: float
    other_cars_high_co2: float
    other_cars_low_co2: float
    special_pool_brought_forward: float
    spend_date: str
    used_main_plant: float
    used_special_rate: float
    zero_emission_cars: float


class ChargeableGainRequired(TypedDict):
    acquisition_cost: float
    acquisition_date: str
    asset_type: str
    calculated_by: str
    disclaimer: str
    disposal_date: str
    input: dict
    page_url: str
    proceeds: float
    result: dict
    share_url: str
    tool: str


class ChargeableGain(ChargeableGainRequired, total=False):
    acquisition_costs: float
    disposal_costs: float
    enhancement_cost: float
    enhancement_date: str
    sba_claimed: float


class ChargeableGainLoadMatchRequired(TypedDict):
    acquisition_date: str
    asset_type: str
    disposal_date: str
    proceed: float


class ChargeableGainLoadMatch(ChargeableGainLoadMatchRequired, total=False):
    acquisition_cost: float
    disposal_cost: float
    enhancement_cost: float
    enhancement_date: str
    sba_claimed: float


class ChargeableGainCreateDataRequired(TypedDict):
    acquisition_cost: float
    acquisition_date: str
    asset_type: str
    disposal_date: str
    proceeds: float


class ChargeableGainCreateData(ChargeableGainCreateDataRequired, total=False):
    acquisition_costs: float
    disposal_costs: float
    enhancement_cost: float
    enhancement_date: str
    sba_claimed: float


class CompanyCarRequired(TypedDict):
    calculated_by: str
    disclaimer: str
    fuel_type: str
    income_tax_rate: str
    input: dict
    list_price: float
    page_url: str
    result: dict
    share_url: str
    tax_year: str
    tool: str


class CompanyCar(CompanyCarRequired, total=False):
    acquisition: str
    annual_lease_cost: float
    associated_companies: int
    capital_contribution: float
    co2_gkm: int
    company_profits: float
    electric_range_miles: int
    lease_started: str
    months_available: int
    new_car: bool
    phev_easement: bool
    price_paid: float
    private_fuel: bool


class CompanyCarLoadMatchRequired(TypedDict):
    fuel_type: str
    income_tax_rate: str
    list_price: float
    tax_year: str


class CompanyCarLoadMatch(CompanyCarLoadMatchRequired, total=False):
    acquisition: str
    annual_lease_cost: float
    associated_company: int
    capital_contribution: float
    co2_gkm: int
    company_profit: float
    electric_range_mile: int
    lease_started: str
    months_available: int
    new_car: bool
    phev_easement: bool
    price_paid: float
    private_fuel: bool


class CompanyCarCreateDataRequired(TypedDict):
    fuel_type: str
    income_tax_rate: str
    list_price: float
    tax_year: str


class CompanyCarCreateData(CompanyCarCreateDataRequired, total=False):
    acquisition: str
    annual_lease_cost: float
    associated_companies: int
    capital_contribution: float
    co2_gkm: int
    company_profits: float
    electric_range_miles: int
    lease_started: str
    months_available: int
    new_car: bool
    phev_easement: bool
    price_paid: float
    private_fuel: bool


class CompanySizeRequired(TypedDict):
    balance_sheet_total: float
    calculated_by: str
    disclaimer: str
    employees: float
    input: dict
    page_url: str
    period_end: str
    period_start: str
    result: dict
    share_url: str
    tool: str
    turnover: float


class CompanySize(CompanySizeRequired, total=False):
    first_year: bool
    prev_balance_sheet_total: float
    prev_employees: float
    prev_size: str
    prev_turnover: float


class CompanySizeLoadMatchRequired(TypedDict):
    balance_sheet_total: float
    employee: float
    period_end: str
    period_start: str
    turnover: float


class CompanySizeLoadMatch(CompanySizeLoadMatchRequired, total=False):
    first_year: bool
    prev_balance_sheet_total: float
    prev_employee: float
    prev_size: str
    prev_turnover: float


class CompanySizeCreateDataRequired(TypedDict):
    balance_sheet_total: float
    employees: float
    period_end: str
    period_start: str
    turnover: float


class CompanySizeCreateData(CompanySizeCreateDataRequired, total=False):
    first_year: bool
    prev_balance_sheet_total: float
    prev_employees: float
    prev_size: str
    prev_turnover: float


class CompanyVanRequired(TypedDict):
    calculated_by: str
    disclaimer: str
    income_tax_rate: str
    input: dict
    page_url: str
    result: dict
    share_url: str
    tax_year: str
    tool: str


class CompanyVan(CompanyVanRequired, total=False):
    associated_companies: int
    company_profits: float
    months_available: int
    price_paid: float
    private_fuel: bool
    zero_emission: bool


class CompanyVanLoadMatchRequired(TypedDict):
    income_tax_rate: str
    tax_year: str


class CompanyVanLoadMatch(CompanyVanLoadMatchRequired, total=False):
    associated_company: int
    company_profit: float
    months_available: int
    price_paid: float
    private_fuel: bool
    zero_emission: bool


class CompanyVanCreateDataRequired(TypedDict):
    income_tax_rate: str
    tax_year: str


class CompanyVanCreateData(CompanyVanCreateDataRequired, total=False):
    associated_companies: int
    company_profits: float
    months_available: int
    price_paid: float
    private_fuel: bool
    zero_emission: bool


class CorporationTaxRequired(TypedDict):
    calculated_by: str
    disclaimer: str
    input: dict
    page_url: str
    period_end: str
    period_start: str
    result: dict
    share_url: str
    taxable_profits: float
    tool: str


class CorporationTax(CorporationTaxRequired, total=False):
    associated_companies: int
    close_investment_holding: bool
    exempt_distributions: float


class CorporationTaxLoadMatchRequired(TypedDict):
    period_end: str
    period_start: str
    taxable_profit: float


class CorporationTaxLoadMatch(CorporationTaxLoadMatchRequired, total=False):
    associated_company: int
    close_investment_holding: bool
    exempt_distribution: float


class CorporationTaxCreateDataRequired(TypedDict):
    period_end: str
    period_start: str
    taxable_profits: float


class CorporationTaxCreateData(CorporationTaxCreateDataRequired, total=False):
    associated_companies: int
    close_investment_holding: bool
    exempt_distributions: float


class DeadlineRequired(TypedDict):
    calculated_by: str
    disclaimer: str
    input: dict
    page_url: str
    period_end: str
    result: dict
    share_url: str
    tool: str


class Deadline(DeadlineRequired, total=False):
    period_start: str


class DeadlineLoadMatchRequired(TypedDict):
    period_end: str


class DeadlineLoadMatch(DeadlineLoadMatchRequired, total=False):
    period_start: str


class DeadlineCreateDataRequired(TypedDict):
    period_end: str


class DeadlineCreateData(DeadlineCreateDataRequired, total=False):
    period_start: str


class DirectorPensionRequired(TypedDict):
    calculated_by: str
    company_profit: float
    contribution: float
    disclaimer: str
    input: dict
    page_url: str
    result: dict
    share_url: str
    tool: str


class DirectorPension(DirectorPensionRequired, total=False):
    associated_companies: int
    director_only_employee: bool
    dividends: float
    money_purchase_allowance: bool
    other_income: float
    other_pension_contributions: float
    salary: float
    scottish_taxpayer: bool
    tax_year: str


class DirectorPensionLoadMatchRequired(TypedDict):
    company_profit: float
    contribution: float


class DirectorPensionLoadMatch(DirectorPensionLoadMatchRequired, total=False):
    associated_company: int
    director_only_employee: bool
    dividend: float
    money_purchase_allowance: bool
    other_income: float
    other_pension_contribution: float
    salary: float
    scottish_taxpayer: bool
    tax_year: str


class DirectorPensionCreateDataRequired(TypedDict):
    company_profit: float
    contribution: float


class DirectorPensionCreateData(DirectorPensionCreateDataRequired, total=False):
    associated_companies: int
    director_only_employee: bool
    dividends: float
    money_purchase_allowance: bool
    other_income: float
    other_pension_contributions: float
    salary: float
    scottish_taxpayer: bool
    tax_year: str


class DirectorsLoanRequired(TypedDict):
    calculated_by: str
    disclaimer: str
    input: dict
    outstanding: float
    page_url: str
    period_end: str
    result: dict
    share_url: str
    tool: str


class DirectorsLoan(DirectorsLoanRequired, total=False):
    benefit_closing_balance: float
    benefit_interest_paid: float
    benefit_maximum_balance: float
    benefit_opening_balance: float
    benefit_tax_year: str
    benefit_whole_months: int
    loan_made_on: str
    marginal_income_tax_rate: float
    repaid_within_9_months: float


class DirectorsLoanLoadMatchRequired(TypedDict):
    outstanding: float
    period_end: str


class DirectorsLoanLoadMatch(DirectorsLoanLoadMatchRequired, total=False):
    benefit_closing_balance: float
    benefit_interest_paid: float
    benefit_maximum_balance: float
    benefit_opening_balance: float
    benefit_tax_year: str
    benefit_whole_month: int
    loan_made_on: str
    marginal_income_tax_rate: float
    repaid_within_9_month: float


class DirectorsLoanCreateDataRequired(TypedDict):
    outstanding: float
    period_end: str


class DirectorsLoanCreateData(DirectorsLoanCreateDataRequired, total=False):
    benefit_closing_balance: float
    benefit_interest_paid: float
    benefit_maximum_balance: float
    benefit_opening_balance: float
    benefit_tax_year: str
    benefit_whole_months: int
    loan_made_on: str
    marginal_income_tax_rate: float
    repaid_within_9_months: float


class DividendReserve(TypedDict):
    calculated_by: str
    disclaimer: str
    dividends_already_paid: float
    input: dict
    page_url: str
    profit_after_tax: float
    proposed_dividend: float
    result: dict
    retained_profits_brought_forward: float
    share_url: str
    tool: str


class DividendReserveLoadMatch(TypedDict):
    dividends_already_paid: float
    profit_after_tax: float
    proposed_dividend: float
    retained_profits_brought_forward: float


class DividendReserveCreateData(TypedDict):
    dividends_already_paid: float
    profit_after_tax: float
    proposed_dividend: float
    retained_profits_brought_forward: float


class HomeOfficeRequired(TypedDict):
    calculated_by: str
    disclaimer: str
    frequency: str
    input: dict
    page_url: str
    periods: int
    result: dict
    share_url: str
    tax_year: str
    tool: str


class HomeOffice(HomeOfficeRequired, total=False):
    actual_additional_costs: float


class HomeOfficeLoadMatchRequired(TypedDict):
    frequency: str
    period: int
    tax_year: str


class HomeOfficeLoadMatch(HomeOfficeLoadMatchRequired, total=False):
    actual_additional_cost: float


class HomeOfficeCreateDataRequired(TypedDict):
    frequency: str
    periods: int
    tax_year: str


class HomeOfficeCreateData(HomeOfficeCreateDataRequired, total=False):
    actual_additional_costs: float


class LatePenaltyRequired(TypedDict):
    calculated_by: str
    disclaimer: str
    filed_on: str
    input: dict
    page_url: str
    period_end: str
    result: dict
    share_url: str
    tool: str


class LatePenalty(LatePenaltyRequired, total=False):
    late_previous_two: bool
    paid_on: str
    period_of_account_end: str
    tax_due: float


class LatePenaltyLoadMatchRequired(TypedDict):
    filed_on: str
    period_end: str


class LatePenaltyLoadMatch(LatePenaltyLoadMatchRequired, total=False):
    late_previous_two: bool
    paid_on: str
    period_of_account_end: str
    tax_due: float


class LatePenaltyCreateDataRequired(TypedDict):
    filed_on: str
    period_end: str


class LatePenaltyCreateData(LatePenaltyCreateDataRequired, total=False):
    late_previous_two: bool
    paid_on: str
    period_of_account_end: str
    tax_due: float


class LongPeriodRequired(TypedDict):
    calculated_by: str
    disclaimer: str
    input: dict
    page_url: str
    period_end: str
    period_start: str
    result: dict
    share_url: str
    tool: str


class LongPeriod(LongPeriodRequired, total=False):
    first_accounts: bool
    profit: float


class LongPeriodLoadMatchRequired(TypedDict):
    period_end: str
    period_start: str


class LongPeriodLoadMatch(LongPeriodLoadMatchRequired, total=False):
    first_account: bool
    profit: float


class LongPeriodCreateDataRequired(TypedDict):
    period_end: str
    period_start: str


class LongPeriodCreateData(LongPeriodCreateDataRequired, total=False):
    first_accounts: bool
    profit: float


class MileageAllowance(TypedDict):
    business_miles: int
    calculated_by: str
    disclaimer: str
    employer_payment: float
    input: dict
    page_url: str
    result: dict
    share_url: str
    tax_year: str
    tool: str
    vehicle: str


class MileageAllowanceLoadMatch(TypedDict):
    business_mile: int
    employer_payment: float
    tax_year: str
    vehicle: str


class MileageAllowanceCreateData(TypedDict):
    business_miles: int
    employer_payment: float
    tax_year: str
    vehicle: str


class SalaryDividendRequired(TypedDict):
    calculated_by: str
    company_profit: float
    disclaimer: str
    input: dict
    page_url: str
    result: dict
    share_url: str
    tool: str


class SalaryDividend(SalaryDividendRequired, total=False):
    associated_companies: int
    director_only_employee: bool
    other_income: float
    salary: float
    scottish_taxpayer: bool
    tax_year: str


class SalaryDividendLoadMatchRequired(TypedDict):
    company_profit: float


class SalaryDividendLoadMatch(SalaryDividendLoadMatchRequired, total=False):
    associated_company: int
    director_only_employee: bool
    other_income: float
    salary: float
    scottish_taxpayer: bool
    tax_year: str


class SalaryDividendCreateDataRequired(TypedDict):
    company_profit: float


class SalaryDividendCreateData(SalaryDividendCreateDataRequired, total=False):
    associated_companies: int
    director_only_employee: bool
    other_income: float
    salary: float
    scottish_taxpayer: bool
    tax_year: str


class SoleTraderVsLimitedRequired(TypedDict):
    calculated_by: str
    disclaimer: str
    input: dict
    page_url: str
    profit: float
    result: dict
    share_url: str
    tool: str


class SoleTraderVsLimited(SoleTraderVsLimitedRequired, total=False):
    director_only_employee: bool
    other_income: float
    scottish_taxpayer: bool
    tax_year: str


class SoleTraderVsLimitedLoadMatchRequired(TypedDict):
    profit: float


class SoleTraderVsLimitedLoadMatch(SoleTraderVsLimitedLoadMatchRequired, total=False):
    director_only_employee: bool
    other_income: float
    scottish_taxpayer: bool
    tax_year: str


class SoleTraderVsLimitedCreateDataRequired(TypedDict):
    profit: float


class SoleTraderVsLimitedCreateData(SoleTraderVsLimitedCreateDataRequired, total=False):
    director_only_employee: bool
    other_income: float
    scottish_taxpayer: bool
    tax_year: str


class Tool(TypedDict):
    pass


class ToolLoadMatch(TypedDict):
    pass


class TrivialBenefit(TypedDict):
    benefit_cost: float
    calculated_by: str
    cash_or_cash_voucher: bool
    close_company_director: bool
    disclaimer: str
    in_contract: bool
    input: dict
    page_url: str
    qualifying_benefits_so_far: float
    result: dict
    reward_for_work: bool
    share_url: str
    tax_year: str
    tool: str


class TrivialBenefitLoadMatch(TypedDict):
    benefit_cost: float
    cash_or_cash_voucher: bool
    close_company_director: bool
    in_contract: bool
    qualifying_benefits_so_far: float
    reward_for_work: bool
    tax_year: str


class TrivialBenefitCreateData(TypedDict):
    benefit_cost: float
    cash_or_cash_voucher: bool
    close_company_director: bool
    in_contract: bool
    qualifying_benefits_so_far: float
    reward_for_work: bool
    tax_year: str
