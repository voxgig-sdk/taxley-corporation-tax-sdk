# TaxleyCorporationTax SDK utility: make_context

from taxleycorporationtax_sdk.core.context import TaxleyCorporationTaxContext


def make_context_util(ctxmap, basectx):
    return TaxleyCorporationTaxContext(ctxmap, basectx)
