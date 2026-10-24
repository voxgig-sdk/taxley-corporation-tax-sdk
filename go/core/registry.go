package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCapitalAllowanceEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

var NewChargeableGainEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

var NewCompanyCarEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

var NewCompanySizeEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

var NewCompanyVanEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

var NewCorporationTaxEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

var NewDeadlineEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

var NewDirectorPensionEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

var NewDirectorsLoanEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

var NewDividendReserveEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

var NewHomeOfficeEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

var NewLatePenaltyEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

var NewLongPeriodEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

var NewMileageAllowanceEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

var NewSalaryDividendEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

var NewSoleTraderVsLimitedEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

var NewToolEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

var NewTrivialBenefitEntityFunc func(client *TaxleyCorporationTaxSDK, entopts map[string]any) TaxleyCorporationTaxEntity

