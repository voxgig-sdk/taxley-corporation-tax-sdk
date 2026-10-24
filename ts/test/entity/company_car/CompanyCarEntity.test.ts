

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


describe('CompanyCarEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TAXLEY_CORPORATION_TAX_TEST_LIVE=TRUE.
  afterEach(liveDelay('TAXLEY_CORPORATION_TAX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TaxleyCorporationTaxSDK.test()
    const ent = testsdk.CompanyCar()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TaxleyCorporationTaxSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CompanyCar().load({"acquisition":1,"fuel_type":"x","income_tax_rate":"x","list_price":1,"tax_year":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TAXLEY_CORPORATION_TAX_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'company_car.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"acquisition":{"a":true,"h":"Acquisition","n":"acquisition","r":false,"sh":"Optional.","t":"`$STRING`","key$":"acquisition","index$":0},"annual_lease_cost":{"a":true,"h":"Annual Lease Cost","n":"annual_lease_cost","r":false,"sh":"For \"lease\": the lease rentals the company pays in its year, in pounds, excluding VAT it can reclaim.","t":"`$NUMBER`","key$":"annual_lease_cost","index$":1},"associated_companies":{"a":true,"h":"Associated Companies","n":"associated_companies","r":false,"sh":"Optional, with company_profits.","t":"`$INTEGER`","key$":"associated_companies","index$":2},"calculated_by":{"a":true,"h":"Calculated By","n":"calculated_by","r":true,"t":"`$STRING`","key$":"calculated_by","index$":3},"capital_contribution":{"a":true,"h":"Capital Contribution","n":"capital_contribution","r":false,"sh":"Optional.","t":"`$NUMBER`","key$":"capital_contribution","index$":4},"co2_gkm":{"a":true,"h":"Co2 Gkm","n":"co2_gkm","r":false,"sh":"The car's approved CO2 emissions in g/km, from the V5C or certificate of conformity (WLTP for cars first registered from 6 April 2020, NEDC before; both give the same percentage in 2025/26 and 2026/27).","t":"`$INTEGER`","key$":"co2_gkm","index$":5},"company_profits":{"a":true,"h":"Company Profits","n":"company_profits","r":false,"sh":"Optional.","t":"`$NUMBER`","key$":"company_profits","index$":6},"disclaimer":{"a":true,"h":"Disclaimer","n":"disclaimer","r":true,"t":"`$STRING`","key$":"disclaimer","index$":7},"electric_range_miles":{"a":true,"h":"Electric Range Miles","n":"electric_range_miles","r":false,"sh":"For a plug-in hybrid only: the zero-emission (electric) range in miles from the certificate of conformity, rounded up.","t":"`$INTEGER`","key$":"electric_range_miles","index$":8},"fuel_type":{"a":true,"h":"Fuel Type","n":"fuel_type","r":true,"sh":"\"electric\" (fully electric or any car with 0 g/km CO2), \"petrol\" (petrol, or ANY hybrid, petrol or diesel, including plug-in hybrids: hybrids never pay the diesel supplement), \"diesel_rde2\" (a diesel-only car certified to Euro 6d, also…","t":"`$STRING`","key$":"fuel_type","index$":9},"income_tax_rate":{"a":true,"h":"Income Tax Rate","n":"income_tax_rate","r":true,"sh":"The director's top rate of Income Tax including the benefit: \"basic\" (20%), \"higher\" (40%) or \"additional\" (45%).","t":"`$STRING`","key$":"income_tax_rate","index$":10},"input":{"a":true,"h":"Input","n":"input","r":true,"sh":"The input as the tool read it (dates YYYY-MM-DD, money in pounds).","t":"`$OBJECT`","key$":"input","index$":11},"lease_started":{"a":true,"fo":"date","h":"Lease Started","n":"lease_started","r":false,"sh":"Optional, for \"lease\": the date the hire period began, YYYY-MM-DD.","t":"`$STRING`","key$":"lease_started","index$":12},"list_price":{"a":true,"h":"List Price","n":"list_price","r":true,"sh":"The car's list price when new, including VAT, delivery and any optional extras (the P11D price), in pounds.","t":"`$NUMBER`","key$":"list_price","index$":13},"months_available":{"a":true,"h":"Months Available","n":"months_available","r":false,"sh":"Optional.","t":"`$INTEGER`","key$":"months_available","index$":14},"new_car":{"a":true,"h":"New Car","n":"new_car","r":false,"sh":"Optional, for \"buy\".","t":"`$BOOLEAN`","key$":"new_car","index$":15},"page_url":{"a":true,"fo":"uri","h":"Page Url","n":"page_url","r":true,"t":"`$STRING`","key$":"page_url","index$":16},"phev_easement":{"a":true,"h":"Phev Easement","n":"phev_easement","r":false,"sh":"Optional.","t":"`$BOOLEAN`","key$":"phev_easement","index$":17},"price_paid":{"a":true,"h":"Price Paid","n":"price_paid","r":false,"sh":"Optional, for \"buy\".","t":"`$NUMBER`","key$":"price_paid","index$":18},"private_fuel":{"a":true,"h":"Private Fuel","n":"private_fuel","r":false,"sh":"Optional.","t":"`$BOOLEAN`","key$":"private_fuel","index$":19},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":20},"share_url":{"a":true,"fo":"uri","h":"Share Url","n":"share_url","r":true,"sh":"A link to this result on taxley.co.uk.","t":"`$STRING`","key$":"share_url","index$":21},"tax_year":{"a":true,"h":"Tax Year","n":"tax_year","r":true,"sh":"UK tax year: \"2025-26\" (6 April 2025 to 5 April 2026) or \"2026-27\" (6 April 2026 to 5 April 2027).","t":"`$STRING`","key$":"tax_year","index$":22},"tool":{"a":true,"h":"Tool","n":"tool","r":true,"t":"`$STRING`","key$":"tool","index$":23}},"name":"company_car","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["acquisition","annual_lease_cost","associated_companies","capital_contribution","co2_gkm","company_profits","electric_range_miles","fuel_type","income_tax_rate","lease_started","list_price","months_available","new_car","phev_easement","price_paid","private_fuel","tax_year"],"co":{"id":"POST /api/v1/tools/company-car","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/tools/company-car","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"company-car"}],"t":{"req":{"acquisition":"`reqdata.acquisition`","annual_lease_cost":"`reqdata.annual_lease_cost`","associated_companies":"`reqdata.associated_company`","capital_contribution":"`reqdata.capital_contribution`","co2_gkm":"`reqdata.co2_gkm`","company_profits":"`reqdata.company_profit`","electric_range_miles":"`reqdata.electric_range_mile`","fuel_type":"`reqdata.fuel_type`","income_tax_rate":"`reqdata.income_tax_rate`","lease_started":"`reqdata.lease_started`","list_price":"`reqdata.list_price`","months_available":"`reqdata.months_available`","new_car":"`reqdata.new_car`","phev_easement":"`reqdata.phev_easement`","price_paid":"`reqdata.price_paid`","private_fuel":"`reqdata.private_fuel`","tax_year":"`reqdata.tax_year`"},"res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/tools/company-car","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"acquisition","or":"acquisition","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"annual_lease_cost","or":"annual_lease_cost","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"k":"query","n":"associated_company","or":"associated_companies","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"capital_contribution","or":"capital_contribution","r":false,"t":"`$NUMBER`","index$":3},{"a":true,"k":"query","n":"co2_gkm","or":"co2_gkm","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"company_profit","or":"company_profits","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"electric_range_mile","or":"electric_range_miles","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"ex":"electric","k":"query","n":"fuel_type","or":"fuel_type","r":true,"t":"`$STRING`","index$":7},{"a":true,"ex":"basic","k":"query","n":"income_tax_rate","or":"income_tax_rate","r":true,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"lease_started","or":"lease_started","r":false,"t":"`$STRING`","index$":9},{"a":true,"ex":40000,"k":"query","n":"list_price","or":"list_price","r":true,"t":"`$NUMBER`","index$":10},{"a":true,"k":"query","n":"months_available","or":"months_available","r":false,"t":"`$INTEGER`","index$":11},{"a":true,"k":"query","n":"new_car","or":"new_car","r":false,"t":"`$BOOLEAN`","index$":12},{"a":true,"k":"query","n":"phev_easement","or":"phev_easement","r":false,"t":"`$BOOLEAN`","index$":13},{"a":true,"k":"query","n":"price_paid","or":"price_paid","r":false,"t":"`$NUMBER`","index$":14},{"a":true,"k":"query","n":"private_fuel","or":"private_fuel","r":false,"t":"`$BOOLEAN`","index$":15},{"a":true,"ex":"2025-26","k":"query","n":"tax_year","or":"tax_year","r":true,"t":"`$STRING`","index$":16}]},"k":"http","m":"GET","o":"/api/v1/tools/company-car","q":{"exist":["fuel_type","income_tax_rate","list_price","tax_year"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"company-car"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"company_car","name__orig":"company_car","Name":"CompanyCar","name_":"company_car","name-":"company-car","NAME":"COMPANY_CAR","index$":2}, {"active":true,"entity":"company_car","key$":"BasicCompanyCarFlow","kind":"basic","name":"BasicCompanyCarFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"company_car_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"company_car_ref01","srcdatavar":"company_car_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-company_car_ref01"}}],"index$":1}]}, 'CompanyCar', {"POST /api/v1/tools/company-car":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"tax_year":{"type":"string","enum":["2025-26","2026-27"],"title":"Tax year","description":"UK tax year: \"2025-26\" (6 April 2025 to 5 April 2026) or \"2026-27\" (6 April 2026 to 5 April 2027).","key$":"tax_year"},"list_price":{"type":"number","minimum":0,"title":"List price (P11D value)","description":"The car's list price when new, including VAT, delivery and any optional extras (the P11D price), in pounds. Not the price the company paid.","key$":"list_price"},"capital_contribution":{"type":"number","minimum":0,"title":"Capital contribution","description":"Optional. What the director paid towards the cost of the car or its extras, in pounds. Up to £5,000 is deducted from the list price. Default 0.","key$":"capital_contribution"},"fuel_type":{"type":"string","enum":["electric","petrol","diesel_rde2","diesel"],"title":"Fuel type","description":"\"electric\" (fully electric or any car with 0 g/km CO2), \"petrol\" (petrol, or ANY hybrid, petrol or diesel, including plug-in hybrids: hybrids never pay the diesel supplement), \"diesel_rde2\" (a diesel-only car certified to Euro 6d, also called RDE2: no supplement), or \"diesel\" (any other diesel-only car: a 4% supplement, up to 37%).","key$":"fuel_type"},"co2_gkm":{"type":"integer","minimum":0,"maximum":999,"title":"CO2 emissions (g/km)","description":"The car's approved CO2 emissions in g/km, from the V5C or certificate of conformity (WLTP for cars first registered from 6 April 2020, NEDC before; both give the same percentage in 2025/26 and 2026/27). Required unless fuel_type is \"electric\".","key$":"co2_gkm"},"electric_range_miles":{"type":"integer","minimum":0,"maximum":2000,"title":"Electric range (miles)","description":"For a plug-in hybrid only: the zero-emission (electric) range in miles from the certificate of conformity, rounded up. Required for a car with CO2 of 1 to 50 g/km, or when phev_easement is true; ignored otherwise.","key$":"electric_range_miles"},"phev_easement":{"type":"boolean","title":"Plug-in hybrid under the 2025 easement","description":"Optional. True for a plug-in hybrid first registered on or after 1 January 2025 under Euro 6e-bis or a later emissions standard (not Euro 6d-ISC-FCM or Euro 6e) whose CO2 is 51 g/km or more. Its CO2 is then treated as 1 g/km, so it is taxed by electric range. Default false.","key$":"phev_easement"},"months_available":{"type":"integer","minimum":1,"maximum":12,"title":"Months available","description":"Optional. Months in the tax year the car is available for the director's private use, 1 to 12. Default 12. The benefit is reduced in proportion.","key$":"months_available"},"private_fuel":{"type":"boolean","title":"Company pays for private fuel","description":"Optional. True if the company pays for fuel for private journeys and the director does not repay all of it. Adds the car fuel benefit (not for electric cars). Default false.","key$":"private_fuel"},"income_tax_rate":{"type":"string","enum":["basic","higher","additional"],"title":"Director's Income Tax rate","description":"The director's top rate of Income Tax including the benefit: \"basic\" (20%), \"higher\" (40%) or \"additional\" (45%). Rates for England, Wales and Northern Ireland.","key$":"income_tax_rate"},"acquisition":{"type":"string","enum":["buy","lease"],"title":"Bought or leased","description":"Optional. \"buy\" if the company buys the car (capital allowances), \"lease\" if it leases it (the rental is deductible). Default \"buy\".","key$":"acquisition"},"price_paid":{"type":"number","minimum":0,"title":"Price the company paid","description":"Optional, for \"buy\". What the company paid for the car, in pounds, for its capital allowances. Default: the list price.","key$":"price_paid"},"new_car":{"type":"boolean","title":"New and unused","description":"Optional, for \"buy\". True if the car is new and unused. Only a new and unused zero-emission car gets the 100% first-year allowance. Default false.","key$":"new_car"},"annual_lease_cost":{"type":"number","minimum":0,"title":"Yearly lease rental","description":"For \"lease\": the lease rentals the company pays in its year, in pounds, excluding VAT it can reclaim. Required for \"lease\".","key$":"annual_lease_cost"},"lease_started":{"type":"string","format":"date","title":"Date the lease began","description":"Optional, for \"lease\": the date the hire period began, YYYY-MM-DD. It sets the CO2 threshold for the 15% restriction: 50 g/km from 1 April 2021, 110 g/km from 1 April 2018, 130 g/km from 1 April 2013, 160 g/km from 1 April 2009. Default: on or after 1 April 2021.","key$":"lease_started"},"company_profits":{"type":"number","minimum":0,"title":"Company's taxable profits","description":"Optional. The company's taxable profits for its year before the car's allowances or lease rentals and the Class 1A, in pounds. With it, the Corporation Tax saved is worked out exactly (19%, marginal relief or 25%); without it, as a range at 19% and 25%.","key$":"company_profits"},"associated_companies":{"type":"integer","minimum":0,"maximum":100,"title":"Associated companies","description":"Optional, with company_profits. The number of other companies under common control; it divides the £50,000 and £250,000 limits. Default 0.","key$":"associated_companies"}},"required":["tax_year","list_price","fuel_type","income_tax_rate"],"additionalProperties":false,"index$":1},"example":{"tax_year":"2026-27","list_price":40000,"fuel_type":"electric","income_tax_rate":"higher","acquisition":"buy","new_car":true}}}},"parameters":[]},"GET /api/v1/tools/company-car":{"protocol":"http","parameters":[{"name":"tax_year","in":"query","required":true,"description":"UK tax year: \"2025-26\" (6 April 2025 to 5 April 2026) or \"2026-27\" (6 April 2026 to 5 April 2027).","schema":{"type":"string","enum":["2025-26","2026-27"]},"example":"2025-26","index$":0},{"name":"list_price","in":"query","required":true,"description":"The car's list price when new, including VAT, delivery and any optional extras (the P11D price), in pounds. Not the price the company paid.","schema":{"type":"number","minimum":0},"example":40000,"index$":1},{"name":"capital_contribution","in":"query","required":false,"description":"Optional. What the director paid towards the cost of the car or its extras, in pounds. Up to £5,000 is deducted from the list price. Default 0.","schema":{"type":"number","minimum":0},"index$":2},{"name":"fuel_type","in":"query","required":true,"description":"\"electric\" (fully electric or any car with 0 g/km CO2), \"petrol\" (petrol, or ANY hybrid, petrol or diesel, including plug-in hybrids: hybrids never pay the diesel supplement), \"diesel_rde2\" (a diesel-only car certified to Euro 6d, also called RDE2: no supplement), or \"diesel\" (any other diesel-only car: a 4% supplement, up to 37%).","schema":{"type":"string","enum":["electric","petrol","diesel_rde2","diesel"]},"example":"electric","index$":3},{"name":"co2_gkm","in":"query","required":false,"description":"The car's approved CO2 emissions in g/km, from the V5C or certificate of conformity (WLTP for cars first registered from 6 April 2020, NEDC before; both give the same percentage in 2025/26 and 2026/27). Required unless fuel_type is \"electric\".","schema":{"type":"integer","minimum":0,"maximum":999},"index$":4},{"name":"electric_range_miles","in":"query","required":false,"description":"For a plug-in hybrid only: the zero-emission (electric) range in miles from the certificate of conformity, rounded up. Required for a car with CO2 of 1 to 50 g/km, or when phev_easement is true; ignored otherwise.","schema":{"type":"integer","minimum":0,"maximum":2000},"index$":5},{"name":"phev_easement","in":"query","required":false,"description":"Optional. True for a plug-in hybrid first registered on or after 1 January 2025 under Euro 6e-bis or a later emissions standard (not Euro 6d-ISC-FCM or Euro 6e) whose CO2 is 51 g/km or more. Its CO2 is then treated as 1 g/km, so it is taxed by electric range. Default false.","schema":{"type":"boolean"},"index$":6},{"name":"months_available","in":"query","required":false,"description":"Optional. Months in the tax year the car is available for the director's private use, 1 to 12. Default 12. The benefit is reduced in proportion.","schema":{"type":"integer","minimum":1,"maximum":12},"index$":7},{"name":"private_fuel","in":"query","required":false,"description":"Optional. True if the company pays for fuel for private journeys and the director does not repay all of it. Adds the car fuel benefit (not for electric cars). Default false.","schema":{"type":"boolean"},"index$":8},{"name":"income_tax_rate","in":"query","required":true,"description":"The director's top rate of Income Tax including the benefit: \"basic\" (20%), \"higher\" (40%) or \"additional\" (45%). Rates for England, Wales and Northern Ireland.","schema":{"type":"string","enum":["basic","higher","additional"]},"example":"basic","index$":9},{"name":"acquisition","in":"query","required":false,"description":"Optional. \"buy\" if the company buys the car (capital allowances), \"lease\" if it leases it (the rental is deductible). Default \"buy\".","schema":{"type":"string","enum":["buy","lease"]},"index$":10},{"name":"price_paid","in":"query","required":false,"description":"Optional, for \"buy\". What the company paid for the car, in pounds, for its capital allowances. Default: the list price.","schema":{"type":"number","minimum":0},"index$":11},{"name":"new_car","in":"query","required":false,"description":"Optional, for \"buy\". True if the car is new and unused. Only a new and unused zero-emission car gets the 100% first-year allowance. Default false.","schema":{"type":"boolean"},"index$":12},{"name":"annual_lease_cost","in":"query","required":false,"description":"For \"lease\": the lease rentals the company pays in its year, in pounds, excluding VAT it can reclaim. Required for \"lease\".","schema":{"type":"number","minimum":0},"index$":13},{"name":"lease_started","in":"query","required":false,"description":"Optional, for \"lease\": the date the hire period began, YYYY-MM-DD. It sets the CO2 threshold for the 15% restriction: 50 g/km from 1 April 2021, 110 g/km from 1 April 2018, 130 g/km from 1 April 2013, 160 g/km from 1 April 2009. Default: on or after 1 April 2021.","schema":{"type":"string","format":"date"},"index$":14},{"name":"company_profits","in":"query","required":false,"description":"Optional. The company's taxable profits for its year before the car's allowances or lease rentals and the Class 1A, in pounds. With it, the Corporation Tax saved is worked out exactly (19%, marginal relief or 25%); without it, as a range at 19% and 25%.","schema":{"type":"number","minimum":0},"index$":15},{"name":"associated_companies","in":"query","required":false,"description":"Optional, with company_profits. The number of other companies under common control; it divides the £50,000 and £250,000 limits. Default 0.","schema":{"type":"integer","minimum":0,"maximum":100},"index$":16}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const company_car_ref01_ent = client.CompanyCar()
    let company_car_ref01_data = setup.data.new.company_car['company_car_ref01']

    company_car_ref01_data = (await company_car_ref01_ent.create(company_car_ref01_data)).data()
    assert(null != company_car_ref01_data)


    // LOAD
    const company_car_ref01_match_dt0: any = {}
    const company_car_ref01_data_dt0 = (await company_car_ref01_ent.load(company_car_ref01_match_dt0)).data()
    assert(null != company_car_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/company_car/CompanyCarTestData.json')

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
    ['company_car01','company_car02','company_car03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TAXLEY_CORPORATION_TAX_TEST_COMPANY_CAR_ENTID': idmap,
    'TAXLEY_CORPORATION_TAX_TEST_LIVE': 'FALSE',
    'TAXLEY_CORPORATION_TAX_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TAXLEY_CORPORATION_TAX_TEST_COMPANY_CAR_ENTID']

  const live = 'TRUE' === env.TAXLEY_CORPORATION_TAX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TAXLEY_CORPORATION_TAX_TEST_COMPANY_CAR_ENTID']
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
  
