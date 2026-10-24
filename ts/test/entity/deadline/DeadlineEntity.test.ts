

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


describe('DeadlineEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TAXLEY_CORPORATION_TAX_TEST_LIVE=TRUE.
  afterEach(liveDelay('TAXLEY_CORPORATION_TAX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TaxleyCorporationTaxSDK.test()
    const ent = testsdk.Deadline()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TaxleyCorporationTaxSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Deadline().load({"period_end":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TAXLEY_CORPORATION_TAX_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'deadline.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"calculated_by":{"a":true,"h":"Calculated By","n":"calculated_by","r":true,"t":"`$STRING`","key$":"calculated_by","index$":0},"disclaimer":{"a":true,"h":"Disclaimer","n":"disclaimer","r":true,"t":"`$STRING`","key$":"disclaimer","index$":1},"input":{"a":true,"h":"Input","n":"input","r":true,"sh":"The input as the tool read it (dates YYYY-MM-DD, money in pounds).","t":"`$OBJECT`","key$":"input","index$":2},"page_url":{"a":true,"fo":"uri","h":"Page Url","n":"page_url","r":true,"t":"`$STRING`","key$":"page_url","index$":3},"period_end":{"a":true,"fo":"date","h":"Period End","n":"period_end","r":true,"sh":"The last day of the accounts period (the company's year end or accounting reference date), as YYYY-MM-DD.","t":"`$STRING`","key$":"period_end","index$":4},"period_start":{"a":true,"fo":"date","h":"Period Start","n":"period_start","r":false,"sh":"Optional.","t":"`$STRING`","key$":"period_start","index$":5},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":6},"share_url":{"a":true,"fo":"uri","h":"Share Url","n":"share_url","r":true,"sh":"A link to this result on taxley.co.uk.","t":"`$STRING`","key$":"share_url","index$":7},"tool":{"a":true,"h":"Tool","n":"tool","r":true,"t":"`$STRING`","key$":"tool","index$":8}},"name":"deadline","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["period_end","period_start"],"co":{"id":"POST /api/v1/tools/deadlines","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/tools/deadlines","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"deadlines"}],"t":{"req":{"period_end":"`reqdata.period_end`","period_start":"`reqdata.period_start`"},"res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/tools/deadlines","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"2026-03-31","k":"query","n":"period_end","or":"period_end","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"period_start","or":"period_start","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v1/tools/deadlines","q":{"exist":["period_end"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"deadlines"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"deadline","name__orig":"deadline","Name":"Deadline","name_":"deadline","name-":"deadline","NAME":"DEADLINE","index$":6}, {"active":true,"entity":"deadline","key$":"BasicDeadlineFlow","kind":"basic","name":"BasicDeadlineFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"deadline_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"deadline_ref01","srcdatavar":"deadline_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-deadline_ref01"}}],"index$":1}]}, 'Deadline', {"POST /api/v1/tools/deadlines":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"period_end":{"type":"string","format":"date","title":"Accounting period end date","description":"The last day of the accounts period (the company's year end or accounting reference date), as YYYY-MM-DD.","key$":"period_end"},"period_start":{"type":"string","format":"date","title":"Accounting period start date","description":"Optional. The first day of the accounts period, as YYYY-MM-DD. Give it when the accounts cover more than 12 months (for first accounts, the date of incorporation). Without it the period is taken to be 12 months or less.","key$":"period_start"}},"required":["period_end"],"additionalProperties":false,"index$":1},"example":{"period_end":"2026-03-31","period_start":"2025-04-01"}}}},"parameters":[]},"GET /api/v1/tools/deadlines":{"protocol":"http","parameters":[{"name":"period_end","in":"query","required":true,"description":"The last day of the accounts period (the company's year end or accounting reference date), as YYYY-MM-DD.","schema":{"type":"string","format":"date"},"example":"2026-03-31","index$":0},{"name":"period_start","in":"query","required":false,"description":"Optional. The first day of the accounts period, as YYYY-MM-DD. Give it when the accounts cover more than 12 months (for first accounts, the date of incorporation). Without it the period is taken to be 12 months or less.","schema":{"type":"string","format":"date"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const deadline_ref01_ent = client.Deadline()
    let deadline_ref01_data = setup.data.new.deadline['deadline_ref01']

    deadline_ref01_data = (await deadline_ref01_ent.create(deadline_ref01_data)).data()
    assert(null != deadline_ref01_data)


    // LOAD
    const deadline_ref01_match_dt0: any = {}
    const deadline_ref01_data_dt0 = (await deadline_ref01_ent.load(deadline_ref01_match_dt0)).data()
    assert(null != deadline_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/deadline/DeadlineTestData.json')

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
    ['deadline01','deadline02','deadline03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TAXLEY_CORPORATION_TAX_TEST_DEADLINE_ENTID': idmap,
    'TAXLEY_CORPORATION_TAX_TEST_LIVE': 'FALSE',
    'TAXLEY_CORPORATION_TAX_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TAXLEY_CORPORATION_TAX_TEST_DEADLINE_ENTID']

  const live = 'TRUE' === env.TAXLEY_CORPORATION_TAX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TAXLEY_CORPORATION_TAX_TEST_DEADLINE_ENTID']
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
  
