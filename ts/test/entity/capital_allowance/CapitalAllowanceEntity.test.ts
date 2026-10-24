

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


describe('CapitalAllowanceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TAXLEY_CORPORATION_TAX_TEST_LIVE=TRUE.
  afterEach(liveDelay('TAXLEY_CORPORATION_TAX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TaxleyCorporationTaxSDK.test()
    const ent = testsdk.CapitalAllowance()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TaxleyCorporationTaxSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CapitalAllowance().load({"aia_shared":"x","period_end":"x","period_start":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TAXLEY_CORPORATION_TAX_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'capital_allowance.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"aia_shared":{"a":true,"h":"Aia Shared","n":"aia_shared","r":false,"sh":"Optional.","t":"`$NUMBER`","key$":"aia_shared","index$":0},"calculated_by":{"a":true,"h":"Calculated By","n":"calculated_by","r":true,"t":"`$STRING`","key$":"calculated_by","index$":1},"disclaimer":{"a":true,"h":"Disclaimer","n":"disclaimer","r":true,"t":"`$STRING`","key$":"disclaimer","index$":2},"full_expensed_disposals":{"a":true,"h":"Full Expensed Disposals","n":"full_expensed_disposals","r":false,"sh":"Sale proceeds of assets that had full expensing on their whole cost, sold this period.","t":"`$NUMBER`","key$":"full_expensed_disposals","index$":3},"input":{"a":true,"h":"Input","n":"input","r":true,"sh":"The input as the tool read it (dates YYYY-MM-DD, money in pounds).","t":"`$OBJECT`","key$":"input","index$":4},"main_pool_brought_forward":{"a":true,"h":"Main Pool Brought Forward","n":"main_pool_brought_forward","r":false,"sh":"Main pool balance carried forward from the previous accounting period (0 if none).","t":"`$NUMBER`","key$":"main_pool_brought_forward","index$":5},"main_pool_disposals":{"a":true,"h":"Main Pool Disposals","n":"main_pool_disposals","r":false,"sh":"Sale proceeds of main pool assets sold this period that did NOT have full expensing (for example, assets that had the annual investment allowance or were pooled).","t":"`$NUMBER`","key$":"main_pool_disposals","index$":6},"new_main_plant":{"a":true,"h":"New Main Plant","n":"new_main_plant","r":false,"sh":"Cost of new and unused plant, machinery, equipment and vans (not cars).","t":"`$NUMBER`","key$":"new_main_plant","index$":7},"new_special_rate":{"a":true,"h":"New Special Rate","n":"new_special_rate","r":false,"sh":"Cost of new and unused integral features (electrical, lighting, heating, water, lifts, air conditioning), long-life assets, thermal insulation and solar panels.","t":"`$NUMBER`","key$":"new_special_rate","index$":8},"other_cars_high_co2":{"a":true,"h":"Other Cars High Co2","n":"other_cars_high_co2","r":false,"sh":"Cost of cars with CO2 emissions over 50 g/km.","t":"`$NUMBER`","key$":"other_cars_high_co2","index$":9},"other_cars_low_co2":{"a":true,"h":"Other Cars Low Co2","n":"other_cars_low_co2","r":false,"sh":"Cost of cars (other than new zero-emission cars) with CO2 emissions of 50 g/km or less.","t":"`$NUMBER`","key$":"other_cars_low_co2","index$":10},"page_url":{"a":true,"fo":"uri","h":"Page Url","n":"page_url","r":true,"t":"`$STRING`","key$":"page_url","index$":11},"period_end":{"a":true,"fo":"date","h":"Period End","n":"period_end","r":true,"sh":"Last day of the accounting period, as YYYY-MM-DD.","t":"`$STRING`","key$":"period_end","index$":12},"period_start":{"a":true,"fo":"date","h":"Period Start","n":"period_start","r":true,"sh":"First day of the Corporation Tax accounting period, as YYYY-MM-DD.","t":"`$STRING`","key$":"period_start","index$":13},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":14},"share_url":{"a":true,"fo":"uri","h":"Share Url","n":"share_url","r":true,"sh":"A link to this result on taxley.co.uk.","t":"`$STRING`","key$":"share_url","index$":15},"special_pool_brought_forward":{"a":true,"h":"Special Pool Brought Forward","n":"special_pool_brought_forward","r":false,"sh":"Special rate pool balance carried forward from the previous accounting period (0 if none).","t":"`$NUMBER`","key$":"special_pool_brought_forward","index$":16},"spend_date":{"a":true,"fo":"date","h":"Spend Date","n":"spend_date","r":false,"sh":"Optional.","t":"`$STRING`","key$":"spend_date","index$":17},"tool":{"a":true,"h":"Tool","n":"tool","r":true,"t":"`$STRING`","key$":"tool","index$":18},"used_main_plant":{"a":true,"h":"Used Main Plant","n":"used_main_plant","r":false,"sh":"Cost of second-hand main-rate plant, machinery, equipment and vans (not cars).","t":"`$NUMBER`","key$":"used_main_plant","index$":19},"used_special_rate":{"a":true,"h":"Used Special Rate","n":"used_special_rate","r":false,"sh":"Cost of second-hand integral features, long-life assets, thermal insulation and solar panels.","t":"`$NUMBER`","key$":"used_special_rate","index$":20},"zero_emission_cars":{"a":true,"h":"Zero Emission Cars","n":"zero_emission_cars","r":false,"sh":"Cost of new and unused cars with 0 g/km CO2 (fully electric).","t":"`$NUMBER`","key$":"zero_emission_cars","index$":21}},"name":"capital_allowance","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["aia_shared","full_expensed_disposals","main_pool_brought_forward","main_pool_disposals","new_main_plant","new_special_rate","other_cars_high_co2","other_cars_low_co2","period_end","period_start","special_pool_brought_forward","spend_date","used_main_plant","used_special_rate","zero_emission_cars"],"co":{"id":"POST /api/v1/tools/capital-allowances","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/tools/capital-allowances","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"capital-allowances"}],"t":{"req":{"aia_shared":"`reqdata.aia_shared`","full_expensed_disposals":"`reqdata.full_expensed_disposal`","main_pool_brought_forward":"`reqdata.main_pool_brought_forward`","main_pool_disposals":"`reqdata.main_pool_disposal`","new_main_plant":"`reqdata.new_main_plant`","new_special_rate":"`reqdata.new_special_rate`","other_cars_high_co2":"`reqdata.other_cars_high_co2`","other_cars_low_co2":"`reqdata.other_cars_low_co2`","period_end":"`reqdata.period_end`","period_start":"`reqdata.period_start`","special_pool_brought_forward":"`reqdata.special_pool_brought_forward`","spend_date":"`reqdata.spend_date`","used_main_plant":"`reqdata.used_main_plant`","used_special_rate":"`reqdata.used_special_rate`","zero_emission_cars":"`reqdata.zero_emission_car`"},"res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/tools/capital-allowances","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"aia_shared","or":"aia_shared","r":false,"t":"`$NUMBER`","index$":0},{"a":true,"k":"query","n":"full_expensed_disposal","or":"full_expensed_disposals","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"k":"query","n":"main_pool_brought_forward","or":"main_pool_brought_forward","r":false,"t":"`$NUMBER`","index$":2},{"a":true,"k":"query","n":"main_pool_disposal","or":"main_pool_disposals","r":false,"t":"`$NUMBER`","index$":3},{"a":true,"ex":40000,"k":"query","n":"new_main_plant","or":"new_main_plant","r":false,"t":"`$NUMBER`","index$":4},{"a":true,"k":"query","n":"new_special_rate","or":"new_special_rate","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"other_cars_high_co2","or":"other_cars_high_co2","r":false,"t":"`$NUMBER`","index$":6},{"a":true,"k":"query","n":"other_cars_low_co2","or":"other_cars_low_co2","r":false,"t":"`$NUMBER`","index$":7},{"a":true,"ex":"2027-03-31","k":"query","n":"period_end","or":"period_end","r":true,"t":"`$STRING`","index$":8},{"a":true,"ex":"2026-04-01","k":"query","n":"period_start","or":"period_start","r":true,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"special_pool_brought_forward","or":"special_pool_brought_forward","r":false,"t":"`$NUMBER`","index$":10},{"a":true,"k":"query","n":"spend_date","or":"spend_date","r":false,"t":"`$STRING`","index$":11},{"a":true,"k":"query","n":"used_main_plant","or":"used_main_plant","r":false,"t":"`$NUMBER`","index$":12},{"a":true,"k":"query","n":"used_special_rate","or":"used_special_rate","r":false,"t":"`$NUMBER`","index$":13},{"a":true,"k":"query","n":"zero_emission_car","or":"zero_emission_cars","r":false,"t":"`$NUMBER`","index$":14}]},"k":"http","m":"GET","o":"/api/v1/tools/capital-allowances","q":{"exist":["period_end","period_start"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"capital-allowances"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"capital_allowance","name__orig":"capital_allowance","Name":"CapitalAllowance","name_":"capital_allowance","name-":"capital-allowance","NAME":"CAPITAL_ALLOWANCE","index$":0}, {"active":true,"entity":"capital_allowance","key$":"BasicCapitalAllowanceFlow","kind":"basic","name":"BasicCapitalAllowanceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"capital_allowance_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"capital_allowance_ref01","srcdatavar":"capital_allowance_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-capital_allowance_ref01"}}],"index$":1}]}, 'CapitalAllowance', {"POST /api/v1/tools/capital-allowances":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"period_start":{"type":"string","format":"date","title":"Accounting period start date","description":"First day of the Corporation Tax accounting period, as YYYY-MM-DD. Must be on or after 2023-04-01.","key$":"period_start"},"period_end":{"type":"string","format":"date","title":"Accounting period end date","description":"Last day of the accounting period, as YYYY-MM-DD. The period can be up to 12 months long.","key$":"period_end"},"spend_date":{"type":"string","format":"date","title":"Date of the purchases","description":"Optional. When the purchases were made (YYYY-MM-DD, inside the period). Defaults to the period end. It only changes the answer for zero-emission cars: their 100% first-year allowance is for spending up to 2027-03-31.","key$":"spend_date"},"new_main_plant":{"type":"number","minimum":0,"title":"New plant, machinery and vans","description":"Cost of new and unused plant, machinery, equipment and vans (not cars). Gets the annual investment allowance, then full expensing (100%) on any amount above it.","key$":"new_main_plant"},"used_main_plant":{"type":"number","minimum":0,"title":"Second-hand plant, machinery and vans","description":"Cost of second-hand main-rate plant, machinery, equipment and vans (not cars). Gets the annual investment allowance; any excess goes into the main pool.","key$":"used_main_plant"},"new_special_rate":{"type":"number","minimum":0,"title":"New special rate items","description":"Cost of new and unused integral features (electrical, lighting, heating, water, lifts, air conditioning), long-life assets, thermal insulation and solar panels. Gets the annual investment allowance, then the 50% first-year allowance on any excess.","key$":"new_special_rate"},"used_special_rate":{"type":"number","minimum":0,"title":"Second-hand special rate items","description":"Cost of second-hand integral features, long-life assets, thermal insulation and solar panels. Gets the annual investment allowance; any excess goes into the special rate pool.","key$":"used_special_rate"},"zero_emission_cars":{"type":"number","minimum":0,"title":"New zero-emission cars","description":"Cost of new and unused cars with 0 g/km CO2 (fully electric). 100% first-year allowance for spending up to 31 March 2027; after that they go into the main pool. Enter a second-hand electric car under other_cars_low_co2.","key$":"zero_emission_cars"},"other_cars_low_co2":{"type":"number","minimum":0,"title":"Cars with CO2 of 50 g/km or less","description":"Cost of cars (other than new zero-emission cars) with CO2 emissions of 50 g/km or less. They go into the main pool. Cars never get the annual investment allowance or full expensing.","key$":"other_cars_low_co2"},"other_cars_high_co2":{"type":"number","minimum":0,"title":"Cars with CO2 over 50 g/km","description":"Cost of cars with CO2 emissions over 50 g/km. They go into the special rate pool (6%).","key$":"other_cars_high_co2"},"main_pool_brought_forward":{"type":"number","minimum":0,"title":"Main pool brought forward","description":"Main pool balance carried forward from the previous accounting period (0 if none).","key$":"main_pool_brought_forward"},"special_pool_brought_forward":{"type":"number","minimum":0,"title":"Special rate pool brought forward","description":"Special rate pool balance carried forward from the previous accounting period (0 if none).","key$":"special_pool_brought_forward"},"main_pool_disposals":{"type":"number","minimum":0,"title":"Main pool assets sold","description":"Sale proceeds of main pool assets sold this period that did NOT have full expensing (for example, assets that had the annual investment allowance or were pooled). Enter the lower of the sale price and what the asset cost.","key$":"main_pool_disposals"},"full_expensed_disposals":{"type":"number","minimum":0,"title":"Full-expensed assets sold","description":"Sale proceeds of assets that had full expensing on their whole cost, sold this period. The whole amount is a balancing charge. Enter the lower of the sale price and what the asset cost.","key$":"full_expensed_disposals"},"aia_shared":{"type":"number","minimum":0,"title":"Annual investment allowance used by related companies","description":"Optional. Companies in a group or under common control share one £1,000,000 annual investment allowance. Enter the amount given to the other companies for this period; this company gets the rest.","key$":"aia_shared"}},"required":["period_start","period_end"],"additionalProperties":false,"index$":1},"example":{"period_start":"2026-04-01","period_end":"2027-03-31","new_main_plant":40000,"used_main_plant":15000,"main_pool_brought_forward":60000}}}},"parameters":[]},"GET /api/v1/tools/capital-allowances":{"protocol":"http","parameters":[{"name":"period_start","in":"query","required":true,"description":"First day of the Corporation Tax accounting period, as YYYY-MM-DD. Must be on or after 2023-04-01.","schema":{"type":"string","format":"date"},"example":"2026-04-01","index$":0},{"name":"period_end","in":"query","required":true,"description":"Last day of the accounting period, as YYYY-MM-DD. The period can be up to 12 months long.","schema":{"type":"string","format":"date"},"example":"2027-03-31","index$":1},{"name":"spend_date","in":"query","required":false,"description":"Optional. When the purchases were made (YYYY-MM-DD, inside the period). Defaults to the period end. It only changes the answer for zero-emission cars: their 100% first-year allowance is for spending up to 2027-03-31.","schema":{"type":"string","format":"date"},"index$":2},{"name":"new_main_plant","in":"query","required":false,"description":"Cost of new and unused plant, machinery, equipment and vans (not cars). Gets the annual investment allowance, then full expensing (100%) on any amount above it.","schema":{"type":"number","minimum":0},"example":40000,"index$":3},{"name":"used_main_plant","in":"query","required":false,"description":"Cost of second-hand main-rate plant, machinery, equipment and vans (not cars). Gets the annual investment allowance; any excess goes into the main pool.","schema":{"type":"number","minimum":0},"index$":4},{"name":"new_special_rate","in":"query","required":false,"description":"Cost of new and unused integral features (electrical, lighting, heating, water, lifts, air conditioning), long-life assets, thermal insulation and solar panels. Gets the annual investment allowance, then the 50% first-year allowance on any excess.","schema":{"type":"number","minimum":0},"index$":5},{"name":"used_special_rate","in":"query","required":false,"description":"Cost of second-hand integral features, long-life assets, thermal insulation and solar panels. Gets the annual investment allowance; any excess goes into the special rate pool.","schema":{"type":"number","minimum":0},"index$":6},{"name":"zero_emission_cars","in":"query","required":false,"description":"Cost of new and unused cars with 0 g/km CO2 (fully electric). 100% first-year allowance for spending up to 31 March 2027; after that they go into the main pool. Enter a second-hand electric car under other_cars_low_co2.","schema":{"type":"number","minimum":0},"index$":7},{"name":"other_cars_low_co2","in":"query","required":false,"description":"Cost of cars (other than new zero-emission cars) with CO2 emissions of 50 g/km or less. They go into the main pool. Cars never get the annual investment allowance or full expensing.","schema":{"type":"number","minimum":0},"index$":8},{"name":"other_cars_high_co2","in":"query","required":false,"description":"Cost of cars with CO2 emissions over 50 g/km. They go into the special rate pool (6%).","schema":{"type":"number","minimum":0},"index$":9},{"name":"main_pool_brought_forward","in":"query","required":false,"description":"Main pool balance carried forward from the previous accounting period (0 if none).","schema":{"type":"number","minimum":0},"index$":10},{"name":"special_pool_brought_forward","in":"query","required":false,"description":"Special rate pool balance carried forward from the previous accounting period (0 if none).","schema":{"type":"number","minimum":0},"index$":11},{"name":"main_pool_disposals","in":"query","required":false,"description":"Sale proceeds of main pool assets sold this period that did NOT have full expensing (for example, assets that had the annual investment allowance or were pooled). Enter the lower of the sale price and what the asset cost.","schema":{"type":"number","minimum":0},"index$":12},{"name":"full_expensed_disposals","in":"query","required":false,"description":"Sale proceeds of assets that had full expensing on their whole cost, sold this period. The whole amount is a balancing charge. Enter the lower of the sale price and what the asset cost.","schema":{"type":"number","minimum":0},"index$":13},{"name":"aia_shared","in":"query","required":false,"description":"Optional. Companies in a group or under common control share one £1,000,000 annual investment allowance. Enter the amount given to the other companies for this period; this company gets the rest.","schema":{"type":"number","minimum":0},"index$":14}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const capital_allowance_ref01_ent = client.CapitalAllowance()
    let capital_allowance_ref01_data = setup.data.new.capital_allowance['capital_allowance_ref01']

    capital_allowance_ref01_data = (await capital_allowance_ref01_ent.create(capital_allowance_ref01_data)).data()
    assert(null != capital_allowance_ref01_data)


    // LOAD
    const capital_allowance_ref01_match_dt0: any = {}
    const capital_allowance_ref01_data_dt0 = (await capital_allowance_ref01_ent.load(capital_allowance_ref01_match_dt0)).data()
    assert(null != capital_allowance_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/capital_allowance/CapitalAllowanceTestData.json')

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
    ['capital_allowance01','capital_allowance02','capital_allowance03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TAXLEY_CORPORATION_TAX_TEST_CAPITAL_ALLOWANCE_ENTID': idmap,
    'TAXLEY_CORPORATION_TAX_TEST_LIVE': 'FALSE',
    'TAXLEY_CORPORATION_TAX_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TAXLEY_CORPORATION_TAX_TEST_CAPITAL_ALLOWANCE_ENTID']

  const live = 'TRUE' === env.TAXLEY_CORPORATION_TAX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TAXLEY_CORPORATION_TAX_TEST_CAPITAL_ALLOWANCE_ENTID']
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
  
