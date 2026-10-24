# TaxleyCorporationTax SDK feature factory

from taxleycorporationtax_sdk.feature.base_feature import TaxleyCorporationTaxBaseFeature
from taxleycorporationtax_sdk.feature.ratelimit_feature import TaxleyCorporationTaxRatelimitFeature
from taxleycorporationtax_sdk.feature.retry_feature import TaxleyCorporationTaxRetryFeature
from taxleycorporationtax_sdk.feature.test_feature import TaxleyCorporationTaxTestFeature
from taxleycorporationtax_sdk.feature.timeout_feature import TaxleyCorporationTaxTimeoutFeature


_FEATURES = {
    "base": lambda: TaxleyCorporationTaxBaseFeature(),
    "ratelimit": lambda: TaxleyCorporationTaxRatelimitFeature(),
    "retry": lambda: TaxleyCorporationTaxRetryFeature(),
    "test": lambda: TaxleyCorporationTaxTestFeature(),
    "timeout": lambda: TaxleyCorporationTaxTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
