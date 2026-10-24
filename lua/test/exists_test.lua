-- TaxleyCorporationTax SDK exists test

local sdk = require("taxley-corporation-tax_sdk")

describe("TaxleyCorporationTaxSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
