
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TaxleyCorporationTaxSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TaxleyCorporationTaxSDK.test()
    equal(testsdk instanceof TaxleyCorporationTaxSDK, true,
      'TaxleyCorporationTaxSDK.test() must return a client synchronously')
  })

})
