package voxgigtaxleycorporationtaxsdk

import (
	"github.com/voxgig-sdk/taxley-corporation-tax-sdk/go/core"
	"github.com/voxgig-sdk/taxley-corporation-tax-sdk/go/entity"
	"github.com/voxgig-sdk/taxley-corporation-tax-sdk/go/feature"
	_ "github.com/voxgig-sdk/taxley-corporation-tax-sdk/go/utility"
)

// Type aliases preserve external API.
type TaxleyCorporationTaxSDK = core.TaxleyCorporationTaxSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type TaxleyCorporationTaxEntity = core.TaxleyCorporationTaxEntity
type StreamItem = core.StreamItem
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type TaxleyCorporationTaxError = core.TaxleyCorporationTaxError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewCapitalAllowanceEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewCapitalAllowanceEntity(client, entopts)
	}
	core.NewChargeableGainEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewChargeableGainEntity(client, entopts)
	}
	core.NewCompanyCarEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewCompanyCarEntity(client, entopts)
	}
	core.NewCompanySizeEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewCompanySizeEntity(client, entopts)
	}
	core.NewCompanyVanEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewCompanyVanEntity(client, entopts)
	}
	core.NewCorporationTaxEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewCorporationTaxEntity(client, entopts)
	}
	core.NewDeadlineEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewDeadlineEntity(client, entopts)
	}
	core.NewDirectorPensionEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewDirectorPensionEntity(client, entopts)
	}
	core.NewDirectorsLoanEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewDirectorsLoanEntity(client, entopts)
	}
	core.NewDividendReserveEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewDividendReserveEntity(client, entopts)
	}
	core.NewHomeOfficeEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewHomeOfficeEntity(client, entopts)
	}
	core.NewLatePenaltyEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewLatePenaltyEntity(client, entopts)
	}
	core.NewLongPeriodEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewLongPeriodEntity(client, entopts)
	}
	core.NewMileageAllowanceEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewMileageAllowanceEntity(client, entopts)
	}
	core.NewSalaryDividendEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewSalaryDividendEntity(client, entopts)
	}
	core.NewSoleTraderVsLimitedEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewSoleTraderVsLimitedEntity(client, entopts)
	}
	core.NewToolEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewToolEntity(client, entopts)
	}
	core.NewTrivialBenefitEntityFunc = func(client *core.TaxleyCorporationTaxSDK, entopts map[string]any) core.TaxleyCorporationTaxEntity {
		return entity.NewTrivialBenefitEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewTaxleyCorporationTaxSDK = core.NewTaxleyCorporationTaxSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewTaxleyCorporationTaxSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *TaxleyCorporationTaxSDK  { return NewTaxleyCorporationTaxSDK(nil) }
func Test() *TaxleyCorporationTaxSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
