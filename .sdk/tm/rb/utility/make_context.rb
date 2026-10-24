# TaxleyCorporationTax SDK utility: make_context
require_relative '../core/context'
module TaxleyCorporationTaxUtilities
  MakeContext = ->(ctxmap, basectx) {
    TaxleyCorporationTaxContext.new(ctxmap, basectx)
  }
end
