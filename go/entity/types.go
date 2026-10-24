// Typed models for the TaxleyCorporationTax SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/taxley-corporation-tax-sdk/go/core"
)

// CapitalAllowance is the typed data model for the capital_allowance entity.
type CapitalAllowance struct {
}

// CapitalAllowanceLoadMatch is the typed request payload for CapitalAllowance.LoadTyped.
type CapitalAllowanceLoadMatch struct {
	AiaShared *float64 `json:"aia_shared,omitempty"`
	FullExpensedDisposal *float64 `json:"full_expensed_disposal,omitempty"`
	MainPoolBroughtForward *float64 `json:"main_pool_brought_forward,omitempty"`
	MainPoolDisposal *float64 `json:"main_pool_disposal,omitempty"`
	NewMainPlant *float64 `json:"new_main_plant,omitempty"`
	NewSpecialRate *float64 `json:"new_special_rate,omitempty"`
	OtherCarsHighCo2 *float64 `json:"other_cars_high_co2,omitempty"`
	OtherCarsLowCo2 *float64 `json:"other_cars_low_co2,omitempty"`
	PeriodEnd string `json:"period_end"`
	PeriodStart string `json:"period_start"`
	SpecialPoolBroughtForward *float64 `json:"special_pool_brought_forward,omitempty"`
	SpendDate *string `json:"spend_date,omitempty"`
	UsedMainPlant *float64 `json:"used_main_plant,omitempty"`
	UsedSpecialRate *float64 `json:"used_special_rate,omitempty"`
	ZeroEmissionCar *float64 `json:"zero_emission_car,omitempty"`
}

// CapitalAllowanceCreateData is the typed request payload for CapitalAllowance.CreateTyped.
type CapitalAllowanceCreateData struct {
	AiaShared *float64 `json:"aia_shared,omitempty"`
	FullExpensedDisposals *float64 `json:"full_expensed_disposals,omitempty"`
	MainPoolBroughtForward *float64 `json:"main_pool_brought_forward,omitempty"`
	MainPoolDisposals *float64 `json:"main_pool_disposals,omitempty"`
	NewMainPlant *float64 `json:"new_main_plant,omitempty"`
	NewSpecialRate *float64 `json:"new_special_rate,omitempty"`
	OtherCarsHighCo2 *float64 `json:"other_cars_high_co2,omitempty"`
	OtherCarsLowCo2 *float64 `json:"other_cars_low_co2,omitempty"`
	PeriodEnd string `json:"period_end"`
	PeriodStart string `json:"period_start"`
	SpecialPoolBroughtForward *float64 `json:"special_pool_brought_forward,omitempty"`
	SpendDate *string `json:"spend_date,omitempty"`
	UsedMainPlant *float64 `json:"used_main_plant,omitempty"`
	UsedSpecialRate *float64 `json:"used_special_rate,omitempty"`
	ZeroEmissionCars *float64 `json:"zero_emission_cars,omitempty"`
}

// ChargeableGain is the typed data model for the chargeable_gain entity.
type ChargeableGain struct {
}

// ChargeableGainLoadMatch is the typed request payload for ChargeableGain.LoadTyped.
type ChargeableGainLoadMatch struct {
	AcquisitionCost *float64 `json:"acquisition_cost,omitempty"`
	AcquisitionDate string `json:"acquisition_date"`
	AssetType string `json:"asset_type"`
	DisposalCost *float64 `json:"disposal_cost,omitempty"`
	DisposalDate string `json:"disposal_date"`
	EnhancementCost *float64 `json:"enhancement_cost,omitempty"`
	EnhancementDate *string `json:"enhancement_date,omitempty"`
	Proceed float64 `json:"proceed"`
	SbaClaimed *float64 `json:"sba_claimed,omitempty"`
}

// ChargeableGainCreateData is the typed request payload for ChargeableGain.CreateTyped.
type ChargeableGainCreateData struct {
	AcquisitionCost float64 `json:"acquisition_cost"`
	AcquisitionCosts *float64 `json:"acquisition_costs,omitempty"`
	AcquisitionDate string `json:"acquisition_date"`
	AssetType string `json:"asset_type"`
	DisposalCosts *float64 `json:"disposal_costs,omitempty"`
	DisposalDate string `json:"disposal_date"`
	EnhancementCost *float64 `json:"enhancement_cost,omitempty"`
	EnhancementDate *string `json:"enhancement_date,omitempty"`
	Proceeds float64 `json:"proceeds"`
	SbaClaimed *float64 `json:"sba_claimed,omitempty"`
}

// CompanyCar is the typed data model for the company_car entity.
type CompanyCar struct {
}

// CompanyCarLoadMatch is the typed request payload for CompanyCar.LoadTyped.
type CompanyCarLoadMatch struct {
	Acquisition *string `json:"acquisition,omitempty"`
	AnnualLeaseCost *float64 `json:"annual_lease_cost,omitempty"`
	AssociatedCompany *int `json:"associated_company,omitempty"`
	CapitalContribution *float64 `json:"capital_contribution,omitempty"`
	Co2Gkm *int `json:"co2_gkm,omitempty"`
	CompanyProfit *float64 `json:"company_profit,omitempty"`
	ElectricRangeMile *int `json:"electric_range_mile,omitempty"`
	FuelType string `json:"fuel_type"`
	IncomeTaxRate string `json:"income_tax_rate"`
	LeaseStarted *string `json:"lease_started,omitempty"`
	ListPrice float64 `json:"list_price"`
	MonthsAvailable *int `json:"months_available,omitempty"`
	NewCar *bool `json:"new_car,omitempty"`
	PhevEasement *bool `json:"phev_easement,omitempty"`
	PricePaid *float64 `json:"price_paid,omitempty"`
	PrivateFuel *bool `json:"private_fuel,omitempty"`
	TaxYear string `json:"tax_year"`
}

// CompanyCarCreateData is the typed request payload for CompanyCar.CreateTyped.
type CompanyCarCreateData struct {
	Acquisition *string `json:"acquisition,omitempty"`
	AnnualLeaseCost *float64 `json:"annual_lease_cost,omitempty"`
	AssociatedCompanies *int `json:"associated_companies,omitempty"`
	CapitalContribution *float64 `json:"capital_contribution,omitempty"`
	Co2Gkm *int `json:"co2_gkm,omitempty"`
	CompanyProfits *float64 `json:"company_profits,omitempty"`
	ElectricRangeMiles *int `json:"electric_range_miles,omitempty"`
	FuelType string `json:"fuel_type"`
	IncomeTaxRate string `json:"income_tax_rate"`
	LeaseStarted *string `json:"lease_started,omitempty"`
	ListPrice float64 `json:"list_price"`
	MonthsAvailable *int `json:"months_available,omitempty"`
	NewCar *bool `json:"new_car,omitempty"`
	PhevEasement *bool `json:"phev_easement,omitempty"`
	PricePaid *float64 `json:"price_paid,omitempty"`
	PrivateFuel *bool `json:"private_fuel,omitempty"`
	TaxYear string `json:"tax_year"`
}

// CompanySize is the typed data model for the company_size entity.
type CompanySize struct {
}

// CompanySizeLoadMatch is the typed request payload for CompanySize.LoadTyped.
type CompanySizeLoadMatch struct {
	BalanceSheetTotal float64 `json:"balance_sheet_total"`
	Employee float64 `json:"employee"`
	FirstYear *bool `json:"first_year,omitempty"`
	PeriodEnd string `json:"period_end"`
	PeriodStart string `json:"period_start"`
	PrevBalanceSheetTotal *float64 `json:"prev_balance_sheet_total,omitempty"`
	PrevEmployee *float64 `json:"prev_employee,omitempty"`
	PrevSize *string `json:"prev_size,omitempty"`
	PrevTurnover *float64 `json:"prev_turnover,omitempty"`
	Turnover float64 `json:"turnover"`
}

// CompanySizeCreateData is the typed request payload for CompanySize.CreateTyped.
type CompanySizeCreateData struct {
	BalanceSheetTotal float64 `json:"balance_sheet_total"`
	Employees float64 `json:"employees"`
	FirstYear *bool `json:"first_year,omitempty"`
	PeriodEnd string `json:"period_end"`
	PeriodStart string `json:"period_start"`
	PrevBalanceSheetTotal *float64 `json:"prev_balance_sheet_total,omitempty"`
	PrevEmployees *float64 `json:"prev_employees,omitempty"`
	PrevSize *string `json:"prev_size,omitempty"`
	PrevTurnover *float64 `json:"prev_turnover,omitempty"`
	Turnover float64 `json:"turnover"`
}

// CompanyVan is the typed data model for the company_van entity.
type CompanyVan struct {
}

// CompanyVanLoadMatch is the typed request payload for CompanyVan.LoadTyped.
type CompanyVanLoadMatch struct {
	AssociatedCompany *int `json:"associated_company,omitempty"`
	CompanyProfit *float64 `json:"company_profit,omitempty"`
	IncomeTaxRate string `json:"income_tax_rate"`
	MonthsAvailable *int `json:"months_available,omitempty"`
	PricePaid *float64 `json:"price_paid,omitempty"`
	PrivateFuel *bool `json:"private_fuel,omitempty"`
	TaxYear string `json:"tax_year"`
	ZeroEmission *bool `json:"zero_emission,omitempty"`
}

// CompanyVanCreateData is the typed request payload for CompanyVan.CreateTyped.
type CompanyVanCreateData struct {
	AssociatedCompanies *int `json:"associated_companies,omitempty"`
	CompanyProfits *float64 `json:"company_profits,omitempty"`
	IncomeTaxRate string `json:"income_tax_rate"`
	MonthsAvailable *int `json:"months_available,omitempty"`
	PricePaid *float64 `json:"price_paid,omitempty"`
	PrivateFuel *bool `json:"private_fuel,omitempty"`
	TaxYear string `json:"tax_year"`
	ZeroEmission *bool `json:"zero_emission,omitempty"`
}

// CorporationTax is the typed data model for the corporation_tax entity.
type CorporationTax struct {
}

// CorporationTaxLoadMatch is the typed request payload for CorporationTax.LoadTyped.
type CorporationTaxLoadMatch struct {
	AssociatedCompany *int `json:"associated_company,omitempty"`
	CloseInvestmentHolding *bool `json:"close_investment_holding,omitempty"`
	ExemptDistribution *float64 `json:"exempt_distribution,omitempty"`
	PeriodEnd string `json:"period_end"`
	PeriodStart string `json:"period_start"`
	TaxableProfit float64 `json:"taxable_profit"`
}

// CorporationTaxCreateData is the typed request payload for CorporationTax.CreateTyped.
type CorporationTaxCreateData struct {
	AssociatedCompanies *int `json:"associated_companies,omitempty"`
	CloseInvestmentHolding *bool `json:"close_investment_holding,omitempty"`
	ExemptDistributions *float64 `json:"exempt_distributions,omitempty"`
	PeriodEnd string `json:"period_end"`
	PeriodStart string `json:"period_start"`
	TaxableProfits float64 `json:"taxable_profits"`
}

// Deadline is the typed data model for the deadline entity.
type Deadline struct {
}

// DeadlineLoadMatch is the typed request payload for Deadline.LoadTyped.
type DeadlineLoadMatch struct {
	PeriodEnd string `json:"period_end"`
	PeriodStart *string `json:"period_start,omitempty"`
}

// DeadlineCreateData is the typed request payload for Deadline.CreateTyped.
type DeadlineCreateData struct {
	PeriodEnd string `json:"period_end"`
	PeriodStart *string `json:"period_start,omitempty"`
}

// DirectorPension is the typed data model for the director_pension entity.
type DirectorPension struct {
}

// DirectorPensionLoadMatch is the typed request payload for DirectorPension.LoadTyped.
type DirectorPensionLoadMatch struct {
	AssociatedCompany *int `json:"associated_company,omitempty"`
	CompanyProfit float64 `json:"company_profit"`
	Contribution float64 `json:"contribution"`
	DirectorOnlyEmployee *bool `json:"director_only_employee,omitempty"`
	Dividend *float64 `json:"dividend,omitempty"`
	MoneyPurchaseAllowance *bool `json:"money_purchase_allowance,omitempty"`
	OtherIncome *float64 `json:"other_income,omitempty"`
	OtherPensionContribution *float64 `json:"other_pension_contribution,omitempty"`
	Salary *float64 `json:"salary,omitempty"`
	ScottishTaxpayer *bool `json:"scottish_taxpayer,omitempty"`
	TaxYear *string `json:"tax_year,omitempty"`
}

// DirectorPensionCreateData is the typed request payload for DirectorPension.CreateTyped.
type DirectorPensionCreateData struct {
	AssociatedCompanies *int `json:"associated_companies,omitempty"`
	CompanyProfit float64 `json:"company_profit"`
	Contribution float64 `json:"contribution"`
	DirectorOnlyEmployee *bool `json:"director_only_employee,omitempty"`
	Dividends *float64 `json:"dividends,omitempty"`
	MoneyPurchaseAllowance *bool `json:"money_purchase_allowance,omitempty"`
	OtherIncome *float64 `json:"other_income,omitempty"`
	OtherPensionContributions *float64 `json:"other_pension_contributions,omitempty"`
	Salary *float64 `json:"salary,omitempty"`
	ScottishTaxpayer *bool `json:"scottish_taxpayer,omitempty"`
	TaxYear *string `json:"tax_year,omitempty"`
}

// DirectorsLoan is the typed data model for the directors_loan entity.
type DirectorsLoan struct {
}

// DirectorsLoanLoadMatch is the typed request payload for DirectorsLoan.LoadTyped.
type DirectorsLoanLoadMatch struct {
	BenefitClosingBalance *float64 `json:"benefit_closing_balance,omitempty"`
	BenefitInterestPaid *float64 `json:"benefit_interest_paid,omitempty"`
	BenefitMaximumBalance *float64 `json:"benefit_maximum_balance,omitempty"`
	BenefitOpeningBalance *float64 `json:"benefit_opening_balance,omitempty"`
	BenefitTaxYear *string `json:"benefit_tax_year,omitempty"`
	BenefitWholeMonth *int `json:"benefit_whole_month,omitempty"`
	LoanMadeOn *string `json:"loan_made_on,omitempty"`
	MarginalIncomeTaxRate *float64 `json:"marginal_income_tax_rate,omitempty"`
	Outstanding float64 `json:"outstanding"`
	PeriodEnd string `json:"period_end"`
	RepaidWithin9Month *float64 `json:"repaid_within_9_month,omitempty"`
}

// DirectorsLoanCreateData is the typed request payload for DirectorsLoan.CreateTyped.
type DirectorsLoanCreateData struct {
	BenefitClosingBalance *float64 `json:"benefit_closing_balance,omitempty"`
	BenefitInterestPaid *float64 `json:"benefit_interest_paid,omitempty"`
	BenefitMaximumBalance *float64 `json:"benefit_maximum_balance,omitempty"`
	BenefitOpeningBalance *float64 `json:"benefit_opening_balance,omitempty"`
	BenefitTaxYear *string `json:"benefit_tax_year,omitempty"`
	BenefitWholeMonths *int `json:"benefit_whole_months,omitempty"`
	LoanMadeOn *string `json:"loan_made_on,omitempty"`
	MarginalIncomeTaxRate *float64 `json:"marginal_income_tax_rate,omitempty"`
	Outstanding float64 `json:"outstanding"`
	PeriodEnd string `json:"period_end"`
	RepaidWithin9Months *float64 `json:"repaid_within_9_months,omitempty"`
}

// DividendReserve is the typed data model for the dividend_reserve entity.
type DividendReserve struct {
}

// DividendReserveLoadMatch is the typed request payload for DividendReserve.LoadTyped.
type DividendReserveLoadMatch struct {
	DividendsAlreadyPaid float64 `json:"dividends_already_paid"`
	ProfitAfterTax float64 `json:"profit_after_tax"`
	ProposedDividend float64 `json:"proposed_dividend"`
	RetainedProfitsBroughtForward float64 `json:"retained_profits_brought_forward"`
}

// DividendReserveCreateData is the typed request payload for DividendReserve.CreateTyped.
type DividendReserveCreateData struct {
	DividendsAlreadyPaid float64 `json:"dividends_already_paid"`
	ProfitAfterTax float64 `json:"profit_after_tax"`
	ProposedDividend float64 `json:"proposed_dividend"`
	RetainedProfitsBroughtForward float64 `json:"retained_profits_brought_forward"`
}

// HomeOffice is the typed data model for the home_office entity.
type HomeOffice struct {
}

// HomeOfficeLoadMatch is the typed request payload for HomeOffice.LoadTyped.
type HomeOfficeLoadMatch struct {
	ActualAdditionalCost *float64 `json:"actual_additional_cost,omitempty"`
	Frequency string `json:"frequency"`
	Period int `json:"period"`
	TaxYear string `json:"tax_year"`
}

// HomeOfficeCreateData is the typed request payload for HomeOffice.CreateTyped.
type HomeOfficeCreateData struct {
	ActualAdditionalCosts *float64 `json:"actual_additional_costs,omitempty"`
	Frequency string `json:"frequency"`
	Periods int `json:"periods"`
	TaxYear string `json:"tax_year"`
}

// LatePenalty is the typed data model for the late_penalty entity.
type LatePenalty struct {
}

// LatePenaltyLoadMatch is the typed request payload for LatePenalty.LoadTyped.
type LatePenaltyLoadMatch struct {
	FiledOn string `json:"filed_on"`
	LatePreviousTwo *bool `json:"late_previous_two,omitempty"`
	PaidOn *string `json:"paid_on,omitempty"`
	PeriodEnd string `json:"period_end"`
	PeriodOfAccountEnd *string `json:"period_of_account_end,omitempty"`
	TaxDue *float64 `json:"tax_due,omitempty"`
}

// LatePenaltyCreateData is the typed request payload for LatePenalty.CreateTyped.
type LatePenaltyCreateData struct {
	FiledOn string `json:"filed_on"`
	LatePreviousTwo *bool `json:"late_previous_two,omitempty"`
	PaidOn *string `json:"paid_on,omitempty"`
	PeriodEnd string `json:"period_end"`
	PeriodOfAccountEnd *string `json:"period_of_account_end,omitempty"`
	TaxDue *float64 `json:"tax_due,omitempty"`
}

// LongPeriod is the typed data model for the long_period entity.
type LongPeriod struct {
}

// LongPeriodLoadMatch is the typed request payload for LongPeriod.LoadTyped.
type LongPeriodLoadMatch struct {
	FirstAccount *bool `json:"first_account,omitempty"`
	PeriodEnd string `json:"period_end"`
	PeriodStart string `json:"period_start"`
	Profit *float64 `json:"profit,omitempty"`
}

// LongPeriodCreateData is the typed request payload for LongPeriod.CreateTyped.
type LongPeriodCreateData struct {
	FirstAccounts *bool `json:"first_accounts,omitempty"`
	PeriodEnd string `json:"period_end"`
	PeriodStart string `json:"period_start"`
	Profit *float64 `json:"profit,omitempty"`
}

// MileageAllowance is the typed data model for the mileage_allowance entity.
type MileageAllowance struct {
}

// MileageAllowanceLoadMatch is the typed request payload for MileageAllowance.LoadTyped.
type MileageAllowanceLoadMatch struct {
	BusinessMile int `json:"business_mile"`
	EmployerPayment float64 `json:"employer_payment"`
	TaxYear string `json:"tax_year"`
	Vehicle string `json:"vehicle"`
}

// MileageAllowanceCreateData is the typed request payload for MileageAllowance.CreateTyped.
type MileageAllowanceCreateData struct {
	BusinessMiles int `json:"business_miles"`
	EmployerPayment float64 `json:"employer_payment"`
	TaxYear string `json:"tax_year"`
	Vehicle string `json:"vehicle"`
}

// SalaryDividend is the typed data model for the salary_dividend entity.
type SalaryDividend struct {
}

// SalaryDividendLoadMatch is the typed request payload for SalaryDividend.LoadTyped.
type SalaryDividendLoadMatch struct {
	AssociatedCompany *int `json:"associated_company,omitempty"`
	CompanyProfit float64 `json:"company_profit"`
	DirectorOnlyEmployee *bool `json:"director_only_employee,omitempty"`
	OtherIncome *float64 `json:"other_income,omitempty"`
	Salary *float64 `json:"salary,omitempty"`
	ScottishTaxpayer *bool `json:"scottish_taxpayer,omitempty"`
	TaxYear *string `json:"tax_year,omitempty"`
}

// SalaryDividendCreateData is the typed request payload for SalaryDividend.CreateTyped.
type SalaryDividendCreateData struct {
	AssociatedCompanies *int `json:"associated_companies,omitempty"`
	CompanyProfit float64 `json:"company_profit"`
	DirectorOnlyEmployee *bool `json:"director_only_employee,omitempty"`
	OtherIncome *float64 `json:"other_income,omitempty"`
	Salary *float64 `json:"salary,omitempty"`
	ScottishTaxpayer *bool `json:"scottish_taxpayer,omitempty"`
	TaxYear *string `json:"tax_year,omitempty"`
}

// SoleTraderVsLimited is the typed data model for the sole_trader_vs_limited entity.
type SoleTraderVsLimited struct {
}

// SoleTraderVsLimitedLoadMatch is the typed request payload for SoleTraderVsLimited.LoadTyped.
type SoleTraderVsLimitedLoadMatch struct {
	DirectorOnlyEmployee *bool `json:"director_only_employee,omitempty"`
	OtherIncome *float64 `json:"other_income,omitempty"`
	Profit float64 `json:"profit"`
	ScottishTaxpayer *bool `json:"scottish_taxpayer,omitempty"`
	TaxYear *string `json:"tax_year,omitempty"`
}

// SoleTraderVsLimitedCreateData is the typed request payload for SoleTraderVsLimited.CreateTyped.
type SoleTraderVsLimitedCreateData struct {
	DirectorOnlyEmployee *bool `json:"director_only_employee,omitempty"`
	OtherIncome *float64 `json:"other_income,omitempty"`
	Profit float64 `json:"profit"`
	ScottishTaxpayer *bool `json:"scottish_taxpayer,omitempty"`
	TaxYear *string `json:"tax_year,omitempty"`
}

// Tool is the typed data model for the tool entity.
type Tool struct {
}

// ToolLoadMatch is the typed request payload for Tool.LoadTyped.
type ToolLoadMatch struct {
}

// TrivialBenefit is the typed data model for the trivial_benefit entity.
type TrivialBenefit struct {
}

// TrivialBenefitLoadMatch is the typed request payload for TrivialBenefit.LoadTyped.
type TrivialBenefitLoadMatch struct {
	BenefitCost float64 `json:"benefit_cost"`
	CashOrCashVoucher bool `json:"cash_or_cash_voucher"`
	CloseCompanyDirector bool `json:"close_company_director"`
	InContract bool `json:"in_contract"`
	QualifyingBenefitsSoFar float64 `json:"qualifying_benefits_so_far"`
	RewardForWork bool `json:"reward_for_work"`
	TaxYear string `json:"tax_year"`
}

// TrivialBenefitCreateData is the typed request payload for TrivialBenefit.CreateTyped.
type TrivialBenefitCreateData struct {
	BenefitCost float64 `json:"benefit_cost"`
	CashOrCashVoucher bool `json:"cash_or_cash_voucher"`
	CloseCompanyDirector bool `json:"close_company_director"`
	InContract bool `json:"in_contract"`
	QualifyingBenefitsSoFar float64 `json:"qualifying_benefits_so_far"`
	RewardForWork bool `json:"reward_for_work"`
	TaxYear string `json:"tax_year"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
