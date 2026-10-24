

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


describe('LatePenaltyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TAXLEY_CORPORATION_TAX_TEST_LIVE=TRUE.
  afterEach(liveDelay('TAXLEY_CORPORATION_TAX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TaxleyCorporationTaxSDK.test()
    const ent = testsdk.LatePenalty()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TaxleyCorporationTaxSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.LatePenalty().load({"filed_on":1,"period_end":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TAXLEY_CORPORATION_TAX_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'late_penalty.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"calculated_by":{"a":true,"h":"Calculated By","n":"calculated_by","r":true,"t":"`$STRING`","key$":"calculated_by","index$":0},"disclaimer":{"a":true,"h":"Disclaimer","n":"disclaimer","r":true,"t":"`$STRING`","key$":"disclaimer","index$":1},"filed_on":{"a":true,"fo":"date","h":"Filed On","n":"filed_on","r":true,"sh":"The date the CT600 was, or will be, filed with HMRC.","t":"`$STRING`","key$":"filed_on","index$":2},"input":{"a":true,"h":"Input","n":"input","r":true,"sh":"The input as the tool read it (dates YYYY-MM-DD, money in pounds).","t":"`$OBJECT`","key$":"input","index$":3},"late_previous_two":{"a":true,"h":"Late Previous Two","n":"late_previous_two","r":false,"sh":"True if the company was liable to a late filing penalty for each of its two previous accounting periods (consecutive, and within Corporation Tax throughout).","t":"`$BOOLEAN`","key$":"late_previous_two","index$":4},"page_url":{"a":true,"fo":"uri","h":"Page Url","n":"page_url","r":true,"t":"`$STRING`","key$":"page_url","index$":5},"paid_on":{"a":true,"fo":"date","h":"Paid On","n":"paid_on","r":false,"sh":"The date the Corporation Tax was, or will be, paid in full.","t":"`$STRING`","key$":"paid_on","index$":6},"period_end":{"a":true,"fo":"date","h":"Period End","n":"period_end","r":true,"sh":"Last day of the Corporation Tax accounting period the CT600 covers (YYYY-MM-DD), on or after 2015-04-01.","t":"`$STRING`","key$":"period_end","index$":7},"period_of_account_end":{"a":true,"fo":"date","h":"Period Of Account End","n":"period_of_account_end","r":false,"sh":"Only if the company's accounts cover more than 12 months (up to 18): the last day of that period of account, no more than 6 months after period_end.","t":"`$STRING`","key$":"period_of_account_end","index$":8},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":9},"share_url":{"a":true,"fo":"uri","h":"Share Url","n":"share_url","r":true,"sh":"A link to this result on taxley.co.uk.","t":"`$STRING`","key$":"share_url","index$":10},"tax_due":{"a":true,"h":"Tax Due","n":"tax_due","r":false,"sh":"Corporation Tax payable for the accounting period, in pounds.","t":"`$NUMBER`","key$":"tax_due","index$":11},"tool":{"a":true,"h":"Tool","n":"tool","r":true,"t":"`$STRING`","key$":"tool","index$":12}},"name":"late_penalty","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["filed_on","late_previous_two","paid_on","period_end","period_of_account_end","tax_due"],"co":{"id":"POST /api/v1/tools/late-penalty","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/tools/late-penalty","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"late-penalty"}],"t":{"req":{"filed_on":"`reqdata.filed_on`","late_previous_two":"`reqdata.late_previous_two`","paid_on":"`reqdata.paid_on`","period_end":"`reqdata.period_end`","period_of_account_end":"`reqdata.period_of_account_end`","tax_due":"`reqdata.tax_due`"},"res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/tools/late-penalty","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"2026-08-15","k":"query","n":"filed_on","or":"filed_on","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":false,"k":"query","n":"late_previous_two","or":"late_previous_two","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"k":"query","n":"paid_on","or":"paid_on","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"2025-04-30","k":"query","n":"period_end","or":"period_end","r":true,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"period_of_account_end","or":"period_of_account_end","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":0,"k":"query","n":"tax_due","or":"tax_due","r":false,"t":"`$NUMBER`","index$":5}]},"k":"http","m":"GET","o":"/api/v1/tools/late-penalty","q":{"exist":["filed_on","period_end"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"late-penalty"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"late_penalty","name__orig":"late_penalty","Name":"LatePenalty","name_":"late_penalty","name-":"late-penalty","NAME":"LATE_PENALTY","index$":11}, {"active":true,"entity":"late_penalty","key$":"BasicLatePenaltyFlow","kind":"basic","name":"BasicLatePenaltyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"late_penalty_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"late_penalty_ref01","srcdatavar":"late_penalty_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-late_penalty_ref01"}}],"index$":1}]}, 'LatePenalty', {"POST /api/v1/tools/late-penalty":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"period_end":{"type":"string","format":"date","description":"Last day of the Corporation Tax accounting period the CT600 covers (YYYY-MM-DD), on or after 2015-04-01.","key$":"period_end"},"period_of_account_end":{"type":"string","format":"date","description":"Only if the company's accounts cover more than 12 months (up to 18): the last day of that period of account, no more than 6 months after period_end. Every CT600 for those accounts is then due 12 months after this date. Leave out otherwise.","key$":"period_of_account_end"},"filed_on":{"type":"string","format":"date","description":"The date the CT600 was, or will be, filed with HMRC.","key$":"filed_on"},"tax_due":{"type":"number","minimum":0,"default":0,"description":"Corporation Tax payable for the accounting period, in pounds. 0 or leave out if there is none (the flat penalties still apply).","key$":"tax_due"},"paid_on":{"type":"string","format":"date","description":"The date the Corporation Tax was, or will be, paid in full. Leave out if it has not been paid: the tax then counts as unpaid for the 10%/20% penalty, and interest is worked out up to filed_on (it keeps running after that).","key$":"paid_on"},"late_previous_two":{"type":"boolean","default":false,"description":"True if the company was liable to a late filing penalty for each of its two previous accounting periods (consecutive, and within Corporation Tax throughout). A third late return in a row costs £1,000 or £2,000 instead of £200 or £400.","key$":"late_previous_two"}},"required":["period_end","filed_on"],"additionalProperties":false,"index$":1},"example":{"period_end":"2025-04-30","filed_on":"2026-08-15","tax_due":10000,"paid_on":"2026-08-01","late_previous_two":false}}}},"parameters":[]},"GET /api/v1/tools/late-penalty":{"protocol":"http","parameters":[{"name":"period_end","in":"query","required":true,"description":"Last day of the Corporation Tax accounting period the CT600 covers (YYYY-MM-DD), on or after 2015-04-01.","schema":{"type":"string","format":"date"},"example":"2025-04-30","index$":0},{"name":"period_of_account_end","in":"query","required":false,"description":"Only if the company's accounts cover more than 12 months (up to 18): the last day of that period of account, no more than 6 months after period_end. Every CT600 for those accounts is then due 12 months after this date. Leave out otherwise.","schema":{"type":"string","format":"date"},"index$":1},{"name":"filed_on","in":"query","required":true,"description":"The date the CT600 was, or will be, filed with HMRC.","schema":{"type":"string","format":"date"},"example":"2026-08-15","index$":2},{"name":"tax_due","in":"query","required":false,"description":"Corporation Tax payable for the accounting period, in pounds. 0 or leave out if there is none (the flat penalties still apply).","schema":{"type":"number","minimum":0,"default":0},"index$":3},{"name":"paid_on","in":"query","required":false,"description":"The date the Corporation Tax was, or will be, paid in full. Leave out if it has not been paid: the tax then counts as unpaid for the 10%/20% penalty, and interest is worked out up to filed_on (it keeps running after that).","schema":{"type":"string","format":"date"},"index$":4},{"name":"late_previous_two","in":"query","required":false,"description":"True if the company was liable to a late filing penalty for each of its two previous accounting periods (consecutive, and within Corporation Tax throughout). A third late return in a row costs £1,000 or £2,000 instead of £200 or £400.","schema":{"type":"boolean","default":false},"index$":5}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const late_penalty_ref01_ent = client.LatePenalty()
    let late_penalty_ref01_data = setup.data.new.late_penalty['late_penalty_ref01']

    late_penalty_ref01_data = (await late_penalty_ref01_ent.create(late_penalty_ref01_data)).data()
    assert(null != late_penalty_ref01_data)


    // LOAD
    const late_penalty_ref01_match_dt0: any = {}
    const late_penalty_ref01_data_dt0 = (await late_penalty_ref01_ent.load(late_penalty_ref01_match_dt0)).data()
    assert(null != late_penalty_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/late_penalty/LatePenaltyTestData.json')

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
    ['late_penalty01','late_penalty02','late_penalty03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TAXLEY_CORPORATION_TAX_TEST_LATE_PENALTY_ENTID': idmap,
    'TAXLEY_CORPORATION_TAX_TEST_LIVE': 'FALSE',
    'TAXLEY_CORPORATION_TAX_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TAXLEY_CORPORATION_TAX_TEST_LATE_PENALTY_ENTID']

  const live = 'TRUE' === env.TAXLEY_CORPORATION_TAX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TAXLEY_CORPORATION_TAX_TEST_LATE_PENALTY_ENTID']
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
  
