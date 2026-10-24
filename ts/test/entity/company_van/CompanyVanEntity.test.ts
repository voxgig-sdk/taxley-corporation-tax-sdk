

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TaxleyCorporationTaxSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CompanyVanEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TAXLEY_CORPORATION_TAX_TEST_LIVE=TRUE.
  afterEach(liveDelay('TAXLEY_CORPORATION_TAX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TaxleyCorporationTaxSDK.test()
    const ent = testsdk.CompanyVan()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TaxleyCorporationTaxSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CompanyVan().load({"associated_company":"x","income_tax_rate":"x","tax_year":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TAXLEY_CORPORATION_TAX_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'company_van.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"associated_companies":{"a":true,"h":"Associated Companies","n":"associated_companies","r":false,"sh":"Optional, with company_profits.","t":"`$INTEGER`","key$":"associated_companies","index$":0},"calculated_by":{"a":true,"h":"Calculated By","n":"calculated_by","r":true,"t":"`$STRING`","key$":"calculated_by","index$":1},"company_profits":{"a":true,"h":"Company Profits","n":"company_profits","r":false,"sh":"Optional.","t":"`$NUMBER`","key$":"company_profits","index$":2},"disclaimer":{"a":true,"h":"Disclaimer","n":"disclaimer","r":true,"t":"`$STRING`","key$":"disclaimer","index$":3},"income_tax_rate":{"a":true,"h":"Income Tax Rate","n":"income_tax_rate","r":true,"sh":"The director's or employee's top rate of Income Tax: \"basic\" (20%), \"higher\" (40%) or \"additional\" (45%).","t":"`$STRING`","key$":"income_tax_rate","index$":4},"input":{"a":true,"h":"Input","n":"input","r":true,"sh":"The input as the tool read it (dates YYYY-MM-DD, money in pounds).","t":"`$OBJECT`","key$":"input","index$":5},"months_available":{"a":true,"h":"Months Available","n":"months_available","r":false,"sh":"Optional.","t":"`$INTEGER`","key$":"months_available","index$":6},"page_url":{"a":true,"fo":"uri","h":"Page Url","n":"page_url","r":true,"t":"`$STRING`","key$":"page_url","index$":7},"price_paid":{"a":true,"h":"Price Paid","n":"price_paid","r":false,"sh":"Optional.","t":"`$NUMBER`","key$":"price_paid","index$":8},"private_fuel":{"a":true,"h":"Private Fuel","n":"private_fuel","r":false,"sh":"Optional.","t":"`$BOOLEAN`","key$":"private_fuel","index$":9},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":10},"share_url":{"a":true,"fo":"uri","h":"Share Url","n":"share_url","r":true,"sh":"A link to this result on taxley.co.uk.","t":"`$STRING`","key$":"share_url","index$":11},"tax_year":{"a":true,"h":"Tax Year","n":"tax_year","r":true,"sh":"UK tax year: \"2025-26\" (6 April 2025 to 5 April 2026) or \"2026-27\" (6 April 2026 to 5 April 2027).","t":"`$STRING`","key$":"tax_year","index$":12},"tool":{"a":true,"h":"Tool","n":"tool","r":true,"t":"`$STRING`","key$":"tool","index$":13},"zero_emission":{"a":true,"h":"Zero Emission","n":"zero_emission","r":false,"sh":"Optional.","t":"`$BOOLEAN`","key$":"zero_emission","index$":14}},"name":"company_van","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["associated_companies","company_profits","income_tax_rate","months_available","price_paid","private_fuel","tax_year","zero_emission"],"co":{"id":"POST /api/v1/tools/company-van","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/tools/company-van","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"company-van"}],"t":{"req":{"associated_companies":"`reqdata.associated_company`","company_profits":"`reqdata.company_profit`","income_tax_rate":"`reqdata.income_tax_rate`","months_available":"`reqdata.months_available`","price_paid":"`reqdata.price_paid`","private_fuel":"`reqdata.private_fuel`","tax_year":"`reqdata.tax_year`","zero_emission":"`reqdata.zero_emission`"},"res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/tools/company-van","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"associated_company","or":"associated_companies","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"company_profit","or":"company_profits","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"ex":"basic","k":"query","n":"income_tax_rate","or":"income_tax_rate","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"months_available","or":"months_available","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"price_paid","or":"price_paid","r":false,"t":"`$NUMBER`","index$":4},{"a":true,"k":"query","n":"private_fuel","or":"private_fuel","r":false,"t":"`$BOOLEAN`","index$":5},{"a":true,"ex":"2025-26","k":"query","n":"tax_year","or":"tax_year","r":true,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"zero_emission","or":"zero_emission","r":false,"t":"`$BOOLEAN`","index$":7}]},"k":"http","m":"GET","o":"/api/v1/tools/company-van","q":{"exist":["income_tax_rate","tax_year"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"company-van"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"company_van","name__orig":"company_van","Name":"CompanyVan","name_":"company_van","name-":"company-van","NAME":"COMPANY_VAN","index$":4}, {"active":true,"entity":"company_van","key$":"BasicCompanyVanFlow","kind":"basic","name":"BasicCompanyVanFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"company_van_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"company_van_ref01","srcdatavar":"company_van_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-company_van_ref01"}}],"index$":1}]}, 'CompanyVan', {"POST /api/v1/tools/company-van":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"tax_year":{"type":"string","enum":["2025-26","2026-27"],"title":"Tax year","description":"UK tax year: \"2025-26\" (6 April 2025 to 5 April 2026) or \"2026-27\" (6 April 2026 to 5 April 2027).","key$":"tax_year"},"zero_emission":{"type":"boolean","title":"Zero-emission van","description":"Optional. True for a van that cannot emit CO2 when driven (fully electric). Its van benefit is nil. Default false.","key$":"zero_emission"},"private_fuel":{"type":"boolean","title":"Company pays for private fuel","description":"Optional. True if the company pays for fuel for private journeys and the driver does not repay all of it. Adds the van fuel benefit (not for electricity). Default false.","key$":"private_fuel"},"months_available":{"type":"integer","minimum":1,"maximum":12,"title":"Months available","description":"Optional. Months in the tax year the van is available for private use, 1 to 12. Default 12.","key$":"months_available"},"income_tax_rate":{"type":"string","enum":["basic","higher","additional"],"title":"Driver's Income Tax rate","description":"The director's or employee's top rate of Income Tax: \"basic\" (20%), \"higher\" (40%) or \"additional\" (45%). Rates for England, Wales and Northern Ireland.","key$":"income_tax_rate"},"company_profits":{"type":"number","minimum":0,"title":"Company's taxable profits","description":"Optional. The company's taxable profits for its year before the van and the Class 1A, in pounds. With it, the Corporation Tax saved is worked out exactly (19%, marginal relief or 25%); without it, as a range at 19% and 25%.","key$":"company_profits"},"associated_companies":{"type":"integer","minimum":0,"maximum":100,"title":"Associated companies","description":"Optional, with company_profits. The number of other companies under common control. Default 0.","key$":"associated_companies"},"price_paid":{"type":"number","minimum":0,"title":"Price the company paid for the van","description":"Optional. What the company paid for the van this year, in pounds. A van gets the annual investment allowance (100%), so the whole cost is deducted from profits.","key$":"price_paid"}},"required":["tax_year","income_tax_rate"],"additionalProperties":false,"index$":1},"example":{"tax_year":"2026-27","private_fuel":true,"income_tax_rate":"basic"}}}},"parameters":[]},"GET /api/v1/tools/company-van":{"protocol":"http","parameters":[{"name":"tax_year","in":"query","required":true,"description":"UK tax year: \"2025-26\" (6 April 2025 to 5 April 2026) or \"2026-27\" (6 April 2026 to 5 April 2027).","schema":{"type":"string","enum":["2025-26","2026-27"]},"example":"2025-26","index$":0},{"name":"zero_emission","in":"query","required":false,"description":"Optional. True for a van that cannot emit CO2 when driven (fully electric). Its van benefit is nil. Default false.","schema":{"type":"boolean"},"index$":1},{"name":"private_fuel","in":"query","required":false,"description":"Optional. True if the company pays for fuel for private journeys and the driver does not repay all of it. Adds the van fuel benefit (not for electricity). Default false.","schema":{"type":"boolean"},"index$":2},{"name":"months_available","in":"query","required":false,"description":"Optional. Months in the tax year the van is available for private use, 1 to 12. Default 12.","schema":{"type":"integer","minimum":1,"maximum":12},"index$":3},{"name":"income_tax_rate","in":"query","required":true,"description":"The director's or employee's top rate of Income Tax: \"basic\" (20%), \"higher\" (40%) or \"additional\" (45%). Rates for England, Wales and Northern Ireland.","schema":{"type":"string","enum":["basic","higher","additional"]},"example":"basic","index$":4},{"name":"company_profits","in":"query","required":false,"description":"Optional. The company's taxable profits for its year before the van and the Class 1A, in pounds. With it, the Corporation Tax saved is worked out exactly (19%, marginal relief or 25%); without it, as a range at 19% and 25%.","schema":{"type":"number","minimum":0},"index$":5},{"name":"associated_companies","in":"query","required":false,"description":"Optional, with company_profits. The number of other companies under common control. Default 0.","schema":{"type":"integer","minimum":0,"maximum":100},"index$":6},{"name":"price_paid","in":"query","required":false,"description":"Optional. What the company paid for the van this year, in pounds. A van gets the annual investment allowance (100%), so the whole cost is deducted from profits.","schema":{"type":"number","minimum":0},"index$":7}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const company_van_ref01_ent = client.CompanyVan()
    let company_van_ref01_data = setup.data.new.company_van['company_van_ref01']

    company_van_ref01_data = (await company_van_ref01_ent.create(company_van_ref01_data)).data()
    assert(null != company_van_ref01_data)


    // LOAD
    const company_van_ref01_match_dt0: any = {}
    const company_van_ref01_data_dt0 = (await company_van_ref01_ent.load(company_van_ref01_match_dt0)).data()
    assert(null != company_van_ref01_data_dt0)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/company_van/CompanyVanTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TaxleyCorporationTaxSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['company_van01','company_van02','company_van03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TAXLEY_CORPORATION_TAX_TEST_COMPANY_VAN_ENTID': idmap,
    'TAXLEY_CORPORATION_TAX_TEST_LIVE': 'FALSE',
    'TAXLEY_CORPORATION_TAX_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TAXLEY_CORPORATION_TAX_TEST_COMPANY_VAN_ENTID']

  const live = 'TRUE' === env.TAXLEY_CORPORATION_TAX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TAXLEY_CORPORATION_TAX_TEST_COMPANY_VAN_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TaxleyCorporationTaxSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.TAXLEY_CORPORATION_TAX_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
