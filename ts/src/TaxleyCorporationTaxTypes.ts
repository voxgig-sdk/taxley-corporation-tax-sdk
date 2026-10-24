// Typed models for the TaxleyCorporationTax SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface CapitalAllowance {
  aia_shared?: number
  calculated_by: string
  disclaimer: string
  full_expensed_disposals?: number
  input: Record<string, any>
  main_pool_brought_forward?: number
  main_pool_disposals?: number
  new_main_plant?: number
  new_special_rate?: number
  other_cars_high_co2?: number
  other_cars_low_co2?: number
  page_url: string
  period_end: string
  period_start: string
  result: Record<string, any>
  share_url: string
  special_pool_brought_forward?: number
  spend_date?: string
  tool: string
  used_main_plant?: number
  used_special_rate?: number
  zero_emission_cars?: number
}

export interface CapitalAllowanceLoadMatch {
  aia_shared?: number
  full_expensed_disposal?: number
  main_pool_brought_forward?: number
  main_pool_disposal?: number
  new_main_plant?: number
  new_special_rate?: number
  other_cars_high_co2?: number
  other_cars_low_co2?: number
  period_end: string
  period_start: string
  special_pool_brought_forward?: number
  spend_date?: string
  used_main_plant?: number
  used_special_rate?: number
  zero_emission_car?: number
}

export interface CapitalAllowanceCreateData {
  aia_shared?: number
  full_expensed_disposals?: number
  main_pool_brought_forward?: number
  main_pool_disposals?: number
  new_main_plant?: number
  new_special_rate?: number
  other_cars_high_co2?: number
  other_cars_low_co2?: number
  period_end: string
  period_start: string
  special_pool_brought_forward?: number
  spend_date?: string
  used_main_plant?: number
  used_special_rate?: number
  zero_emission_cars?: number
}

export interface ChargeableGain {
  acquisition_cost: number
  acquisition_costs?: number
  acquisition_date: string
  asset_type: string
  calculated_by: string
  disclaimer: string
  disposal_costs?: number
  disposal_date: string
  enhancement_cost?: number
  enhancement_date?: string
  input: Record<string, any>
  page_url: string
  proceeds: number
  result: Record<string, any>
  sba_claimed?: number
  share_url: string
  tool: string
}

export interface ChargeableGainLoadMatch {
  acquisition_cost?: number
  acquisition_date: string
  asset_type: string
  disposal_cost?: number
  disposal_date: string
  enhancement_cost?: number
  enhancement_date?: string
  proceed: number
  sba_claimed?: number
}

export interface ChargeableGainCreateData {
  acquisition_cost: number
  acquisition_costs?: number
  acquisition_date: string
  asset_type: string
  disposal_costs?: number
  disposal_date: string
  enhancement_cost?: number
  enhancement_date?: string
  proceeds: number
  sba_claimed?: number
}

export interface CompanyCar {
  acquisition?: string
  annual_lease_cost?: number
  associated_companies?: number
  calculated_by: string
  capital_contribution?: number
  co2_gkm?: number
  company_profits?: number
  disclaimer: string
  electric_range_miles?: number
  fuel_type: string
  income_tax_rate: string
  input: Record<string, any>
  lease_started?: string
  list_price: number
  months_available?: number
  new_car?: boolean
  page_url: string
  phev_easement?: boolean
  price_paid?: number
  private_fuel?: boolean
  result: Record<string, any>
  share_url: string
  tax_year: string
  tool: string
}

export interface CompanyCarLoadMatch {
  acquisition?: string
  annual_lease_cost?: number
  associated_company?: number
  capital_contribution?: number
  co2_gkm?: number
  company_profit?: number
  electric_range_mile?: number
  fuel_type: string
  income_tax_rate: string
  lease_started?: string
  list_price: number
  months_available?: number
  new_car?: boolean
  phev_easement?: boolean
  price_paid?: number
  private_fuel?: boolean
  tax_year: string
}

export interface CompanyCarCreateData {
  acquisition?: string
  annual_lease_cost?: number
  associated_companies?: number
  capital_contribution?: number
  co2_gkm?: number
  company_profits?: number
  electric_range_miles?: number
  fuel_type: string
  income_tax_rate: string
  lease_started?: string
  list_price: number
  months_available?: number
  new_car?: boolean
  phev_easement?: boolean
  price_paid?: number
  private_fuel?: boolean
  tax_year: string
}

export interface CompanySize {
  balance_sheet_total: number
  calculated_by: string
  disclaimer: string
  employees: number
  first_year?: boolean
  input: Record<string, any>
  page_url: string
  period_end: string
  period_start: string
  prev_balance_sheet_total?: number
  prev_employees?: number
  prev_size?: string
  prev_turnover?: number
  result: Record<string, any>
  share_url: string
  tool: string
  turnover: number
}

export interface CompanySizeLoadMatch {
  balance_sheet_total: number
  employee: number
  first_year?: boolean
  period_end: string
  period_start: string
  prev_balance_sheet_total?: number
  prev_employee?: number
  prev_size?: string
  prev_turnover?: number
  turnover: number
}

export interface CompanySizeCreateData {
  balance_sheet_total: number
  employees: number
  first_year?: boolean
  period_end: string
  period_start: string
  prev_balance_sheet_total?: number
  prev_employees?: number
  prev_size?: string
  prev_turnover?: number
  turnover: number
}

export interface CompanyVan {
  associated_companies?: number
  calculated_by: string
  company_profits?: number
  disclaimer: string
  income_tax_rate: string
  input: Record<string, any>
  months_available?: number
  page_url: string
  price_paid?: number
  private_fuel?: boolean
  result: Record<string, any>
  share_url: string
  tax_year: string
  tool: string
  zero_emission?: boolean
}

export interface CompanyVanLoadMatch {
  associated_company?: number
  company_profit?: number
  income_tax_rate: string
  months_available?: number
  price_paid?: number
  private_fuel?: boolean
  tax_year: string
  zero_emission?: boolean
}

export interface CompanyVanCreateData {
  associated_companies?: number
  company_profits?: number
  income_tax_rate: string
  months_available?: number
  price_paid?: number
  private_fuel?: boolean
  tax_year: string
  zero_emission?: boolean
}

export interface CorporationTax {
  associated_companies?: number
  calculated_by: string
  close_investment_holding?: boolean
  disclaimer: string
  exempt_distributions?: number
  input: Record<string, any>
  page_url: string
  period_end: string
  period_start: string
  result: Record<string, any>
  share_url: string
  taxable_profits: number
  tool: string
}

export interface CorporationTaxLoadMatch {
  associated_company?: number
  close_investment_holding?: boolean
  exempt_distribution?: number
  period_end: string
  period_start: string
  taxable_profit: number
}

export interface CorporationTaxCreateData {
  associated_companies?: number
  close_investment_holding?: boolean
  exempt_distributions?: number
  period_end: string
  period_start: string
  taxable_profits: number
}

export interface Deadline {
  calculated_by: string
  disclaimer: string
  input: Record<string, any>
  page_url: string
  period_end: string
  period_start?: string
  result: Record<string, any>
  share_url: string
  tool: string
}

export interface DeadlineLoadMatch {
  period_end: string
  period_start?: string
}

export interface DeadlineCreateData {
  period_end: string
  period_start?: string
}

export interface DirectorPension {
  associated_companies?: number
  calculated_by: string
  company_profit: number
  contribution: number
  director_only_employee?: boolean
  disclaimer: string
  dividends?: number
  input: Record<string, any>
  money_purchase_allowance?: boolean
  other_income?: number
  other_pension_contributions?: number
  page_url: string
  result: Record<string, any>
  salary?: number
  scottish_taxpayer?: boolean
  share_url: string
  tax_year?: string
  tool: string
}

export interface DirectorPensionLoadMatch {
  associated_company?: number
  company_profit: number
  contribution: number
  director_only_employee?: boolean
  dividend?: number
  money_purchase_allowance?: boolean
  other_income?: number
  other_pension_contribution?: number
  salary?: number
  scottish_taxpayer?: boolean
  tax_year?: string
}

export interface DirectorPensionCreateData {
  associated_companies?: number
  company_profit: number
  contribution: number
  director_only_employee?: boolean
  dividends?: number
  money_purchase_allowance?: boolean
  other_income?: number
  other_pension_contributions?: number
  salary?: number
  scottish_taxpayer?: boolean
  tax_year?: string
}

export interface DirectorsLoan {
  benefit_closing_balance?: number
  benefit_interest_paid?: number
  benefit_maximum_balance?: number
  benefit_opening_balance?: number
  benefit_tax_year?: string
  benefit_whole_months?: number
  calculated_by: string
  disclaimer: string
  input: Record<string, any>
  loan_made_on?: string
  marginal_income_tax_rate?: number
  outstanding: number
  page_url: string
  period_end: string
  repaid_within_9_months?: number
  result: Record<string, any>
  share_url: string
  tool: string
}

export interface DirectorsLoanLoadMatch {
  benefit_closing_balance?: number
  benefit_interest_paid?: number
  benefit_maximum_balance?: number
  benefit_opening_balance?: number
  benefit_tax_year?: string
  benefit_whole_month?: number
  loan_made_on?: string
  marginal_income_tax_rate?: number
  outstanding: number
  period_end: string
  repaid_within_9_month?: number
}

export interface DirectorsLoanCreateData {
  benefit_closing_balance?: number
  benefit_interest_paid?: number
  benefit_maximum_balance?: number
  benefit_opening_balance?: number
  benefit_tax_year?: string
  benefit_whole_months?: number
  loan_made_on?: string
  marginal_income_tax_rate?: number
  outstanding: number
  period_end: string
  repaid_within_9_months?: number
}

export interface DividendReserve {
  calculated_by: string
  disclaimer: string
  dividends_already_paid: number
  input: Record<string, any>
  page_url: string
  profit_after_tax: number
  proposed_dividend: number
  result: Record<string, any>
  retained_profits_brought_forward: number
  share_url: string
  tool: string
}

export interface DividendReserveLoadMatch {
  dividends_already_paid: number
  profit_after_tax: number
  proposed_dividend: number
  retained_profits_brought_forward: number
}

export interface DividendReserveCreateData {
  dividends_already_paid: number
  profit_after_tax: number
  proposed_dividend: number
  retained_profits_brought_forward: number
}

export interface HomeOffice {
  actual_additional_costs?: number
  calculated_by: string
  disclaimer: string
  frequency: string
  input: Record<string, any>
  page_url: string
  periods: number
  result: Record<string, any>
  share_url: string
  tax_year: string
  tool: string
}

export interface HomeOfficeLoadMatch {
  actual_additional_cost?: number
  frequency: string
  period: number
  tax_year: string
}

export interface HomeOfficeCreateData {
  actual_additional_costs?: number
  frequency: string
  periods: number
  tax_year: string
}

export interface LatePenalty {
  calculated_by: string
  disclaimer: string
  filed_on: string
  input: Record<string, any>
  late_previous_two?: boolean
  page_url: string
  paid_on?: string
  period_end: string
  period_of_account_end?: string
  result: Record<string, any>
  share_url: string
  tax_due?: number
  tool: string
}

export interface LatePenaltyLoadMatch {
  filed_on: string
  late_previous_two?: boolean
  paid_on?: string
  period_end: string
  period_of_account_end?: string
  tax_due?: number
}

export interface LatePenaltyCreateData {
  filed_on: string
  late_previous_two?: boolean
  paid_on?: string
  period_end: string
  period_of_account_end?: string
  tax_due?: number
}

export interface LongPeriod {
  calculated_by: string
  disclaimer: string
  first_accounts?: boolean
  input: Record<string, any>
  page_url: string
  period_end: string
  period_start: string
  profit?: number
  result: Record<string, any>
  share_url: string
  tool: string
}

export interface LongPeriodLoadMatch {
  first_account?: boolean
  period_end: string
  period_start: string
  profit?: number
}

export interface LongPeriodCreateData {
  first_accounts?: boolean
  period_end: string
  period_start: string
  profit?: number
}

export interface MileageAllowance {
  business_miles: number
  calculated_by: string
  disclaimer: string
  employer_payment: number
  input: Record<string, any>
  page_url: string
  result: Record<string, any>
  share_url: string
  tax_year: string
  tool: string
  vehicle: string
}

export interface MileageAllowanceLoadMatch {
  business_mile: number
  employer_payment: number
  tax_year: string
  vehicle: string
}

export interface MileageAllowanceCreateData {
  business_miles: number
  employer_payment: number
  tax_year: string
  vehicle: string
}

export interface SalaryDividend {
  associated_companies?: number
  calculated_by: string
  company_profit: number
  director_only_employee?: boolean
  disclaimer: string
  input: Record<string, any>
  other_income?: number
  page_url: string
  result: Record<string, any>
  salary?: number
  scottish_taxpayer?: boolean
  share_url: string
  tax_year?: string
  tool: string
}

export interface SalaryDividendLoadMatch {
  associated_company?: number
  company_profit: number
  director_only_employee?: boolean
  other_income?: number
  salary?: number
  scottish_taxpayer?: boolean
  tax_year?: string
}

export interface SalaryDividendCreateData {
  associated_companies?: number
  company_profit: number
  director_only_employee?: boolean
  other_income?: number
  salary?: number
  scottish_taxpayer?: boolean
  tax_year?: string
}

export interface SoleTraderVsLimited {
  calculated_by: string
  director_only_employee?: boolean
  disclaimer: string
  input: Record<string, any>
  other_income?: number
  page_url: string
  profit: number
  result: Record<string, any>
  scottish_taxpayer?: boolean
  share_url: string
  tax_year?: string
  tool: string
}

export interface SoleTraderVsLimitedLoadMatch {
  director_only_employee?: boolean
  other_income?: number
  profit: number
  scottish_taxpayer?: boolean
  tax_year?: string
}

export interface SoleTraderVsLimitedCreateData {
  director_only_employee?: boolean
  other_income?: number
  profit: number
  scottish_taxpayer?: boolean
  tax_year?: string
}

export interface Tool {
}

export interface ToolLoadMatch {
}

export interface TrivialBenefit {
  benefit_cost: number
  calculated_by: string
  cash_or_cash_voucher: boolean
  close_company_director: boolean
  disclaimer: string
  in_contract: boolean
  input: Record<string, any>
  page_url: string
  qualifying_benefits_so_far: number
  result: Record<string, any>
  reward_for_work: boolean
  share_url: string
  tax_year: string
  tool: string
}

export interface TrivialBenefitLoadMatch {
  benefit_cost: number
  cash_or_cash_voucher: boolean
  close_company_director: boolean
  in_contract: boolean
  qualifying_benefits_so_far: number
  reward_for_work: boolean
  tax_year: string
}

export interface TrivialBenefitCreateData {
  benefit_cost: number
  cash_or_cash_voucher: boolean
  close_company_director: boolean
  in_contract: boolean
  qualifying_benefits_so_far: number
  reward_for_work: boolean
  tax_year: string
}

