

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


describe('ChargeableGainEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TAXLEY_CORPORATION_TAX_TEST_LIVE=TRUE.
  afterEach(liveDelay('TAXLEY_CORPORATION_TAX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TaxleyCorporationTaxSDK.test()
    const ent = testsdk.ChargeableGain()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TaxleyCorporationTaxSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ChargeableGain().load({"acquisition_cost":"x","acquisition_date":"x","asset_type":"x","disposal_date":"x","proceed":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TAXLEY_CORPORATION_TAX_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'chargeable_gain.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"acquisition_cost":{"a":true,"h":"Acquisition Cost","n":"acquisition_cost","r":true,"sh":"What the company paid for the asset, in pounds.","t":"`$NUMBER`","key$":"acquisition_cost","index$":0},"acquisition_costs":{"a":true,"h":"Acquisition Costs","n":"acquisition_costs","r":false,"sh":"Optional.","t":"`$NUMBER`","key$":"acquisition_costs","index$":1},"acquisition_date":{"a":true,"fo":"date","h":"Acquisition Date","n":"acquisition_date","r":true,"sh":"When the company bought the asset (exchange of contracts), as YYYY-MM-DD.","t":"`$STRING`","key$":"acquisition_date","index$":2},"asset_type":{"a":true,"h":"Asset Type","n":"asset_type","r":true,"sh":"\"land_buildings\": UK land or buildings (the company's whole interest; a freehold or a lease with more than 50 years left).","t":"`$STRING`","key$":"asset_type","index$":3},"calculated_by":{"a":true,"h":"Calculated By","n":"calculated_by","r":true,"t":"`$STRING`","key$":"calculated_by","index$":4},"disclaimer":{"a":true,"h":"Disclaimer","n":"disclaimer","r":true,"t":"`$STRING`","key$":"disclaimer","index$":5},"disposal_costs":{"a":true,"h":"Disposal Costs","n":"disposal_costs","r":false,"sh":"Optional.","t":"`$NUMBER`","key$":"disposal_costs","index$":6},"disposal_date":{"a":true,"fo":"date","h":"Disposal Date","n":"disposal_date","r":true,"sh":"When the company sold the asset (exchange of contracts), as YYYY-MM-DD.","t":"`$STRING`","key$":"disposal_date","index$":7},"enhancement_cost":{"a":true,"h":"Enhancement Cost","n":"enhancement_cost","r":false,"sh":"Optional, land and buildings only.","t":"`$NUMBER`","key$":"enhancement_cost","index$":8},"enhancement_date":{"a":true,"fo":"date","h":"Enhancement Date","n":"enhancement_date","r":false,"sh":"Optional, land and buildings only.","t":"`$STRING`","key$":"enhancement_date","index$":9},"input":{"a":true,"h":"Input","n":"input","r":true,"sh":"The input as the tool read it (dates YYYY-MM-DD, money in pounds).","t":"`$OBJECT`","key$":"input","index$":10},"page_url":{"a":true,"fo":"uri","h":"Page Url","n":"page_url","r":true,"t":"`$STRING`","key$":"page_url","index$":11},"proceeds":{"a":true,"h":"Proceeds","n":"proceeds","r":true,"sh":"What the company sold the asset for, in pounds.","t":"`$NUMBER`","key$":"proceeds","index$":12},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":13},"sba_claimed":{"a":true,"h":"Sba Claimed","n":"sba_claimed","r":false,"sh":"Optional, land and buildings only.","t":"`$NUMBER`","key$":"sba_claimed","index$":14},"share_url":{"a":true,"fo":"uri","h":"Share Url","n":"share_url","r":true,"sh":"A link to this result on taxley.co.uk.","t":"`$STRING`","key$":"share_url","index$":15},"tool":{"a":true,"h":"Tool","n":"tool","r":true,"t":"`$STRING`","key$":"tool","index$":16}},"name":"chargeable_gain","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["acquisition_cost","acquisition_costs","acquisition_date","asset_type","disposal_costs","disposal_date","enhancement_cost","enhancement_date","proceeds","sba_claimed"],"co":{"id":"POST /api/v1/tools/chargeable-gains","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/tools/chargeable-gains","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"chargeable-gains"}],"t":{"req":{"acquisition_cost":"`reqdata.acquisition_cost`","acquisition_costs":"`reqdata.acquisition_cost`","acquisition_date":"`reqdata.acquisition_date`","asset_type":"`reqdata.asset_type`","disposal_costs":"`reqdata.disposal_cost`","disposal_date":"`reqdata.disposal_date`","enhancement_cost":"`reqdata.enhancement_cost`","enhancement_date":"`reqdata.enhancement_date`","proceeds":"`reqdata.proceed`","sba_claimed":"`reqdata.sba_claimed`"},"res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/tools/chargeable-gains","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":250000,"k":"query","n":"acquisition_cost","or":"acquisition_cost","r":true,"t":"`$NUMBER`","index$":0},{"a":true,"k":"query","n":"acquisition_cost","or":"acquisition_costs","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"ex":"2008-06-01","k":"query","n":"acquisition_date","or":"acquisition_date","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"land_buildings","k":"query","n":"asset_type","or":"asset_type","r":true,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"disposal_cost","or":"disposal_costs","r":false,"t":"`$NUMBER`","index$":4},{"a":true,"ex":"2026-06-30","k":"query","n":"disposal_date","or":"disposal_date","r":true,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"enhancement_cost","or":"enhancement_cost","r":false,"t":"`$NUMBER`","index$":6},{"a":true,"k":"query","n":"enhancement_date","or":"enhancement_date","r":false,"t":"`$STRING`","index$":7},{"a":true,"ex":420000,"k":"query","n":"proceed","or":"proceeds","r":true,"t":"`$NUMBER`","index$":8},{"a":true,"k":"query","n":"sba_claimed","or":"sba_claimed","r":false,"t":"`$NUMBER`","index$":9}]},"k":"http","m":"GET","o":"/api/v1/tools/chargeable-gains","q":{"exist":["acquisition_cost","acquisition_date","asset_type","disposal_date","proceed"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"chargeable-gains"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"chargeable_gain","name__orig":"chargeable_gain","Name":"ChargeableGain","name_":"chargeable_gain","name-":"chargeable-gain","NAME":"CHARGEABLE_GAIN","index$":1}, {"active":true,"entity":"chargeable_gain","key$":"BasicChargeableGainFlow","kind":"basic","name":"BasicChargeableGainFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"chargeable_gain_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"chargeable_gain_ref01","srcdatavar":"chargeable_gain_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-chargeable_gain_ref01"}}],"index$":1}]}, 'ChargeableGain', {"POST /api/v1/tools/chargeable-gains":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"asset_type":{"type":"string","enum":["land_buildings","shares"],"title":"What the company sold","description":"\"land_buildings\": UK land or buildings (the company's whole interest; a freehold or a lease with more than 50 years left). \"shares\": shares in one company that were all bought in a single purchase and all sold together. Other assets and shares bought at different times are not covered.","key$":"asset_type"},"acquisition_date":{"type":"string","format":"date","title":"Date bought","description":"When the company bought the asset (exchange of contracts), as YYYY-MM-DD. Must be on or after 1987-01-01.","key$":"acquisition_date"},"acquisition_cost":{"type":"number","minimum":0,"title":"Purchase price","description":"What the company paid for the asset, in pounds.","key$":"acquisition_cost"},"acquisition_costs":{"type":"number","minimum":0,"title":"Buying costs","description":"Optional. Costs of buying it: legal fees, Stamp Duty Land Tax, survey and agent fees.","key$":"acquisition_costs"},"enhancement_date":{"type":"string","format":"date","title":"Improvement date","description":"Optional, land and buildings only. When the company paid for one improvement (for example an extension), as YYYY-MM-DD. Give it with enhancement_cost.","key$":"enhancement_date"},"enhancement_cost":{"type":"number","minimum":0,"title":"Improvement cost","description":"Optional, land and buildings only. Cost of one capital improvement that is still reflected in the property when it is sold (not repairs or maintenance).","key$":"enhancement_cost"},"sba_claimed":{"type":"number","minimum":0,"title":"Structures and buildings allowance claimed","description":"Optional, land and buildings only. Total structures and buildings allowance the company claimed on the building. It is added to the sale price.","key$":"sba_claimed"},"disposal_date":{"type":"string","format":"date","title":"Date sold","description":"When the company sold the asset (exchange of contracts), as YYYY-MM-DD.","key$":"disposal_date"},"proceeds":{"type":"number","minimum":0,"title":"Sale price","description":"What the company sold the asset for, in pounds.","key$":"proceeds"},"disposal_costs":{"type":"number","minimum":0,"title":"Selling costs","description":"Optional. Costs of selling it: agent and legal fees.","key$":"disposal_costs"}},"required":["asset_type","acquisition_date","acquisition_cost","disposal_date","proceeds"],"additionalProperties":false,"index$":1},"example":{"asset_type":"land_buildings","acquisition_date":"2008-06-01","acquisition_cost":250000,"disposal_date":"2026-06-30","proceeds":420000}}}},"parameters":[]},"GET /api/v1/tools/chargeable-gains":{"protocol":"http","parameters":[{"name":"asset_type","in":"query","required":true,"description":"\"land_buildings\": UK land or buildings (the company's whole interest; a freehold or a lease with more than 50 years left). \"shares\": shares in one company that were all bought in a single purchase and all sold together. Other assets and shares bought at different times are not covered.","schema":{"type":"string","enum":["land_buildings","shares"]},"example":"land_buildings","index$":0},{"name":"acquisition_date","in":"query","required":true,"description":"When the company bought the asset (exchange of contracts), as YYYY-MM-DD. Must be on or after 1987-01-01.","schema":{"type":"string","format":"date"},"example":"2008-06-01","index$":1},{"name":"acquisition_cost","in":"query","required":true,"description":"What the company paid for the asset, in pounds.","schema":{"type":"number","minimum":0},"example":250000,"index$":2},{"name":"acquisition_costs","in":"query","required":false,"description":"Optional. Costs of buying it: legal fees, Stamp Duty Land Tax, survey and agent fees.","schema":{"type":"number","minimum":0},"index$":3},{"name":"enhancement_date","in":"query","required":false,"description":"Optional, land and buildings only. When the company paid for one improvement (for example an extension), as YYYY-MM-DD. Give it with enhancement_cost.","schema":{"type":"string","format":"date"},"index$":4},{"name":"enhancement_cost","in":"query","required":false,"description":"Optional, land and buildings only. Cost of one capital improvement that is still reflected in the property when it is sold (not repairs or maintenance).","schema":{"type":"number","minimum":0},"index$":5},{"name":"sba_claimed","in":"query","required":false,"description":"Optional, land and buildings only. Total structures and buildings allowance the company claimed on the building. It is added to the sale price.","schema":{"type":"number","minimum":0},"index$":6},{"name":"disposal_date","in":"query","required":true,"description":"When the company sold the asset (exchange of contracts), as YYYY-MM-DD.","schema":{"type":"string","format":"date"},"example":"2026-06-30","index$":7},{"name":"proceeds","in":"query","required":true,"description":"What the company sold the asset for, in pounds.","schema":{"type":"number","minimum":0},"example":420000,"index$":8},{"name":"disposal_costs","in":"query","required":false,"description":"Optional. Costs of selling it: agent and legal fees.","schema":{"type":"number","minimum":0},"index$":9}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const chargeable_gain_ref01_ent = client.ChargeableGain()
    let chargeable_gain_ref01_data = setup.data.new.chargeable_gain['chargeable_gain_ref01']

    chargeable_gain_ref01_data = (await chargeable_gain_ref01_ent.create(chargeable_gain_ref01_data)).data()
    assert(null != chargeable_gain_ref01_data)


    // LOAD
    const chargeable_gain_ref01_match_dt0: any = {}
    const chargeable_gain_ref01_data_dt0 = (await chargeable_gain_ref01_ent.load(chargeable_gain_ref01_match_dt0)).data()
    assert(null != chargeable_gain_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/chargeable_gain/ChargeableGainTestData.json')

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
    ['chargeable_gain01','chargeable_gain02','chargeable_gain03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TAXLEY_CORPORATION_TAX_TEST_CHARGEABLE_GAIN_ENTID': idmap,
    'TAXLEY_CORPORATION_TAX_TEST_LIVE': 'FALSE',
    'TAXLEY_CORPORATION_TAX_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TAXLEY_CORPORATION_TAX_TEST_CHARGEABLE_GAIN_ENTID']

  const live = 'TRUE' === env.TAXLEY_CORPORATION_TAX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TAXLEY_CORPORATION_TAX_TEST_CHARGEABLE_GAIN_ENTID']
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
  
