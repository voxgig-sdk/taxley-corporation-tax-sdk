

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


describe('DividendReserveEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TAXLEY_CORPORATION_TAX_TEST_LIVE=TRUE.
  afterEach(liveDelay('TAXLEY_CORPORATION_TAX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TaxleyCorporationTaxSDK.test()
    const ent = testsdk.DividendReserve()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TaxleyCorporationTaxSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DividendReserve().load({"dividends_already_paid":"x","profit_after_tax":1,"proposed_dividend":1,"retained_profits_brought_forward":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TAXLEY_CORPORATION_TAX_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dividend_reserve.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"calculated_by":{"a":true,"h":"Calculated By","n":"calculated_by","r":true,"t":"`$STRING`","key$":"calculated_by","index$":0},"disclaimer":{"a":true,"h":"Disclaimer","n":"disclaimer","r":true,"t":"`$STRING`","key$":"disclaimer","index$":1},"dividends_already_paid":{"a":true,"h":"Dividends Already Paid","n":"dividends_already_paid","r":true,"sh":"Dividends already paid or declared from these profits, in pounds.","t":"`$NUMBER`","key$":"dividends_already_paid","index$":2},"input":{"a":true,"h":"Input","n":"input","r":true,"sh":"The input as the tool read it (dates YYYY-MM-DD, money in pounds).","t":"`$OBJECT`","key$":"input","index$":3},"page_url":{"a":true,"fo":"uri","h":"Page Url","n":"page_url","r":true,"t":"`$STRING`","key$":"page_url","index$":4},"profit_after_tax":{"a":true,"h":"Profit After Tax","n":"profit_after_tax","r":true,"sh":"This period’s realised profit after Corporation Tax, in pounds.","t":"`$NUMBER`","key$":"profit_after_tax","index$":5},"proposed_dividend":{"a":true,"h":"Proposed Dividend","n":"proposed_dividend","r":true,"sh":"Dividend now proposed, in pounds.","t":"`$NUMBER`","key$":"proposed_dividend","index$":6},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":7},"retained_profits_brought_forward":{"a":true,"h":"Retained Profits Brought Forward","n":"retained_profits_brought_forward","r":true,"sh":"Accumulated retained profits or losses brought forward, in pounds.","t":"`$NUMBER`","key$":"retained_profits_brought_forward","index$":8},"share_url":{"a":true,"fo":"uri","h":"Share Url","n":"share_url","r":true,"sh":"A link to this result on taxley.co.uk.","t":"`$STRING`","key$":"share_url","index$":9},"tool":{"a":true,"h":"Tool","n":"tool","r":true,"t":"`$STRING`","key$":"tool","index$":10}},"name":"dividend_reserve","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["dividends_already_paid","profit_after_tax","proposed_dividend","retained_profits_brought_forward"],"co":{"id":"POST /api/v1/tools/dividend-reserves","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/tools/dividend-reserves","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"dividend-reserves"}],"t":{"req":{"dividends_already_paid":"`reqdata.dividends_already_paid`","profit_after_tax":"`reqdata.profit_after_tax`","proposed_dividend":"`reqdata.proposed_dividend`","retained_profits_brought_forward":"`reqdata.retained_profits_brought_forward`"},"res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/tools/dividend-reserves","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":5000,"k":"query","n":"dividends_already_paid","or":"dividends_already_paid","r":true,"t":"`$NUMBER`","index$":0},{"a":true,"ex":18000,"k":"query","n":"profit_after_tax","or":"profit_after_tax","r":true,"t":"`$NUMBER`","index$":1},{"a":true,"ex":20000,"k":"query","n":"proposed_dividend","or":"proposed_dividend","r":true,"t":"`$NUMBER`","index$":2},{"a":true,"ex":12000,"k":"query","n":"retained_profits_brought_forward","or":"retained_profits_brought_forward","r":true,"t":"`$NUMBER`","index$":3}]},"k":"http","m":"GET","o":"/api/v1/tools/dividend-reserves","q":{"exist":["dividends_already_paid","profit_after_tax","proposed_dividend","retained_profits_brought_forward"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"dividend-reserves"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"dividend_reserve","name__orig":"dividend_reserve","Name":"DividendReserve","name_":"dividend_reserve","name-":"dividend-reserve","NAME":"DIVIDEND_RESERVE","index$":9}, {"active":true,"entity":"dividend_reserve","key$":"BasicDividendReserveFlow","kind":"basic","name":"BasicDividendReserveFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"dividend_reserve_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"dividend_reserve_ref01","srcdatavar":"dividend_reserve_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dividend_reserve_ref01"}}],"index$":1}]}, 'DividendReserve', {"POST /api/v1/tools/dividend-reserves":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"retained_profits_brought_forward":{"type":"number","description":"Accumulated retained profits or losses brought forward, in pounds. Enter a loss as a negative number.","key$":"retained_profits_brought_forward"},"profit_after_tax":{"type":"number","description":"This period’s realised profit after Corporation Tax, in pounds. Enter a loss as a negative number.","key$":"profit_after_tax"},"dividends_already_paid":{"type":"number","minimum":0,"description":"Dividends already paid or declared from these profits, in pounds.","key$":"dividends_already_paid"},"proposed_dividend":{"type":"number","minimum":0,"description":"Dividend now proposed, in pounds.","key$":"proposed_dividend"}},"required":["retained_profits_brought_forward","profit_after_tax","dividends_already_paid","proposed_dividend"],"additionalProperties":false,"index$":1},"example":{"retained_profits_brought_forward":12000,"profit_after_tax":18000,"dividends_already_paid":5000,"proposed_dividend":20000}}}},"parameters":[]},"GET /api/v1/tools/dividend-reserves":{"protocol":"http","parameters":[{"name":"retained_profits_brought_forward","in":"query","required":true,"description":"Accumulated retained profits or losses brought forward, in pounds. Enter a loss as a negative number.","schema":{"type":"number"},"example":12000,"index$":0},{"name":"profit_after_tax","in":"query","required":true,"description":"This period’s realised profit after Corporation Tax, in pounds. Enter a loss as a negative number.","schema":{"type":"number"},"example":18000,"index$":1},{"name":"dividends_already_paid","in":"query","required":true,"description":"Dividends already paid or declared from these profits, in pounds.","schema":{"type":"number","minimum":0},"example":5000,"index$":2},{"name":"proposed_dividend","in":"query","required":true,"description":"Dividend now proposed, in pounds.","schema":{"type":"number","minimum":0},"example":20000,"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const dividend_reserve_ref01_ent = client.DividendReserve()
    let dividend_reserve_ref01_data = setup.data.new.dividend_reserve['dividend_reserve_ref01']

    dividend_reserve_ref01_data = (await dividend_reserve_ref01_ent.create(dividend_reserve_ref01_data)).data()
    assert(null != dividend_reserve_ref01_data)


    // LOAD
    const dividend_reserve_ref01_match_dt0: any = {}
    const dividend_reserve_ref01_data_dt0 = (await dividend_reserve_ref01_ent.load(dividend_reserve_ref01_match_dt0)).data()
    assert(null != dividend_reserve_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/dividend_reserve/DividendReserveTestData.json')

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
    ['dividend_reserve01','dividend_reserve02','dividend_reserve03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TAXLEY_CORPORATION_TAX_TEST_DIVIDEND_RESERVE_ENTID': idmap,
    'TAXLEY_CORPORATION_TAX_TEST_LIVE': 'FALSE',
    'TAXLEY_CORPORATION_TAX_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TAXLEY_CORPORATION_TAX_TEST_DIVIDEND_RESERVE_ENTID']

  const live = 'TRUE' === env.TAXLEY_CORPORATION_TAX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TAXLEY_CORPORATION_TAX_TEST_DIVIDEND_RESERVE_ENTID']
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
  
