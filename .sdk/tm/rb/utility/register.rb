# TaxleyCorporationTax SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

TaxleyCorporationTaxUtility.registrar = ->(u) {
  u.clean = TaxleyCorporationTaxUtilities::Clean
  u.clean_add = TaxleyCorporationTaxUtilities::CleanAdd
  u.clean_explain = TaxleyCorporationTaxUtilities::CleanExplain
  u.done = TaxleyCorporationTaxUtilities::Done
  u.make_error = TaxleyCorporationTaxUtilities::MakeError
  u.feature_add = TaxleyCorporationTaxUtilities::FeatureAdd
  u.feature_hook = TaxleyCorporationTaxUtilities::FeatureHook
  u.feature_init = TaxleyCorporationTaxUtilities::FeatureInit
  u.fetcher = TaxleyCorporationTaxUtilities::Fetcher
  u.make_fetch_def = TaxleyCorporationTaxUtilities::MakeFetchDef
  u.make_context = TaxleyCorporationTaxUtilities::MakeContext
  u.make_options = TaxleyCorporationTaxUtilities::MakeOptions
  u.make_request = TaxleyCorporationTaxUtilities::MakeRequest
  u.make_response = TaxleyCorporationTaxUtilities::MakeResponse
  u.make_result = TaxleyCorporationTaxUtilities::MakeResult
  u.make_point = TaxleyCorporationTaxUtilities::MakePoint
  u.make_spec = TaxleyCorporationTaxUtilities::MakeSpec
  u.make_url = TaxleyCorporationTaxUtilities::MakeUrl
  u.param = TaxleyCorporationTaxUtilities::Param
  u.prepare_auth = TaxleyCorporationTaxUtilities::PrepareAuth
  u.prepare_body = TaxleyCorporationTaxUtilities::PrepareBody
  u.prepare_headers = TaxleyCorporationTaxUtilities::PrepareHeaders
  u.prepare_method = TaxleyCorporationTaxUtilities::PrepareMethod
  u.prepare_params = TaxleyCorporationTaxUtilities::PrepareParams
  u.prepare_path = TaxleyCorporationTaxUtilities::PreparePath
  u.prepare_query = TaxleyCorporationTaxUtilities::PrepareQuery
  u.graphql_body = TaxleyCorporationTaxUtilities::GraphqlBody
  u.graphql_errors = TaxleyCorporationTaxUtilities::GraphqlErrors
  u.result_basic = TaxleyCorporationTaxUtilities::ResultBasic
  u.result_body = TaxleyCorporationTaxUtilities::ResultBody
  u.result_headers = TaxleyCorporationTaxUtilities::ResultHeaders
  u.transform_request = TaxleyCorporationTaxUtilities::TransformRequest
  u.transform_response = TaxleyCorporationTaxUtilities::TransformResponse
}
