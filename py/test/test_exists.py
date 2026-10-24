# TaxleyCorporationTax SDK exists test

import pytest
from taxleycorporationtax_sdk import TaxleyCorporationTaxSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = TaxleyCorporationTaxSDK.test(None, None)
        assert testsdk is not None
