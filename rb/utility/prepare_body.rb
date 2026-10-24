# TaxleyCorporationTax SDK utility: prepare_body
require_relative 'media'
module TaxleyCorporationTaxUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return TaxleyCorporationTaxUtilities.raw_body(ctx.reqdata) if TaxleyCorporationTaxUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
