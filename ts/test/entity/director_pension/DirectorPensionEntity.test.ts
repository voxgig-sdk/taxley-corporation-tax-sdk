

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


describe('DirectorPensionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TAXLEY_CORPORATION_TAX_TEST_LIVE=TRUE.
  afterEach(liveDelay('TAXLEY_CORPORATION_TAX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TaxleyCorporationTaxSDK.test()
    const ent = testsdk.DirectorPension()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TaxleyCorporationTaxSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DirectorPension().load({"associated_company":"x","company_profit":1,"contribution":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TAXLEY_CORPORATION_TAX_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'director_pension.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"associated_companies":{"a":true,"h":"Associated Companies","n":"associated_companies","r":false,"sh":"Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits.","t":"`$INTEGER`","key$":"associated_companies","index$":0},"calculated_by":{"a":true,"h":"Calculated By","n":"calculated_by","r":true,"t":"`$STRING`","key$":"calculated_by","index$":1},"company_profit":{"a":true,"h":"Company Profit","n":"company_profit","r":true,"sh":"The company's taxable profit for its year before this contribution, after the director's existing salary and other costs, in pounds.","t":"`$NUMBER`","key$":"company_profit","index$":2},"contribution":{"a":true,"h":"Contribution","n":"contribution","r":true,"sh":"The amount the company would pay into the director's pension as an employer contribution, in pounds.","t":"`$NUMBER`","key$":"contribution","index$":3},"director_only_employee":{"a":true,"h":"Director Only Employee","n":"director_only_employee","r":false,"sh":"true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance.","t":"`$BOOLEAN`","key$":"director_only_employee","index$":4},"disclaimer":{"a":true,"h":"Disclaimer","n":"disclaimer","r":true,"t":"`$STRING`","key$":"disclaimer","index$":5},"dividends":{"a":true,"h":"Dividends","n":"dividends","r":false,"sh":"Dividends the director already takes this tax year, in pounds.","t":"`$NUMBER`","key$":"dividends","index$":6},"input":{"a":true,"h":"Input","n":"input","r":true,"sh":"The input as the tool read it (dates YYYY-MM-DD, money in pounds).","t":"`$OBJECT`","key$":"input","index$":7},"money_purchase_allowance":{"a":true,"h":"Money Purchase Allowance","n":"money_purchase_allowance","r":false,"sh":"true if the director has already flexibly accessed a pension (for example taken cash from drawdown or an uncrystallised lump sum), so the £10,000 money purchase annual allowance applies.","t":"`$BOOLEAN`","key$":"money_purchase_allowance","index$":8},"other_income":{"a":true,"h":"Other Income","n":"other_income","r":false,"sh":"The director's other taxable income for the tax year from outside the company, in pounds.","t":"`$NUMBER`","key$":"other_income","index$":9},"other_pension_contributions":{"a":true,"h":"Other Pension Contributions","n":"other_pension_contributions","r":false,"sh":"Everything else paid into the director's pensions this tax year (their own contributions, before tax relief, and any other employer's), in pounds.","t":"`$NUMBER`","key$":"other_pension_contributions","index$":10},"page_url":{"a":true,"fo":"uri","h":"Page Url","n":"page_url","r":true,"t":"`$STRING`","key$":"page_url","index$":11},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":12},"salary":{"a":true,"h":"Salary","n":"salary","r":false,"sh":"The salary the director already takes from the company this tax year, in pounds.","t":"`$NUMBER`","key$":"salary","index$":13},"scottish_taxpayer":{"a":true,"h":"Scottish Taxpayer","n":"scottish_taxpayer","r":false,"sh":"true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands.","t":"`$BOOLEAN`","key$":"scottish_taxpayer","index$":14},"share_url":{"a":true,"fo":"uri","h":"Share Url","n":"share_url","r":true,"sh":"A link to this result on taxley.co.uk.","t":"`$STRING`","key$":"share_url","index$":15},"tax_year":{"a":true,"h":"Tax Year","n":"tax_year","r":false,"sh":"UK tax year, \"2025-26\" or \"2026-27\" (6 April to 5 April).","t":"`$STRING`","key$":"tax_year","index$":16},"tool":{"a":true,"h":"Tool","n":"tool","r":true,"t":"`$STRING`","key$":"tool","index$":17}},"name":"director_pension","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["associated_companies","company_profit","contribution","director_only_employee","dividends","money_purchase_allowance","other_income","other_pension_contributions","salary","scottish_taxpayer","tax_year"],"co":{"id":"POST /api/v1/tools/director-pension","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/tools/director-pension","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"director-pension"}],"t":{"req":{"associated_companies":"`reqdata.associated_company`","company_profit":"`reqdata.company_profit`","contribution":"`reqdata.contribution`","director_only_employee":"`reqdata.director_only_employee`","dividends":"`reqdata.dividend`","money_purchase_allowance":"`reqdata.money_purchase_allowance`","other_income":"`reqdata.other_income`","other_pension_contributions":"`reqdata.other_pension_contribution`","salary":"`reqdata.salary`","scottish_taxpayer":"`reqdata.scottish_taxpayer`","tax_year":"`reqdata.tax_year`"},"res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/tools/director-pension","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":0,"k":"query","n":"associated_company","or":"associated_companies","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":60000,"k":"query","n":"company_profit","or":"company_profit","r":true,"t":"`$NUMBER`","index$":1},{"a":true,"ex":10000,"k":"query","n":"contribution","or":"contribution","r":true,"t":"`$NUMBER`","index$":2},{"a":true,"ex":true,"k":"query","n":"director_only_employee","or":"director_only_employee","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"query","n":"dividend","or":"dividends","r":false,"t":"`$NUMBER`","index$":4},{"a":true,"ex":false,"k":"query","n":"money_purchase_allowance","or":"money_purchase_allowance","r":false,"t":"`$BOOLEAN`","index$":5},{"a":true,"k":"query","n":"other_income","or":"other_income","r":false,"t":"`$NUMBER`","index$":6},{"a":true,"k":"query","n":"other_pension_contribution","or":"other_pension_contributions","r":false,"t":"`$NUMBER`","index$":7},{"a":true,"k":"query","n":"salary","or":"salary","r":false,"t":"`$NUMBER`","index$":8},{"a":true,"ex":false,"k":"query","n":"scottish_taxpayer","or":"scottish_taxpayer","r":false,"t":"`$BOOLEAN`","index$":9},{"a":true,"ex":"2026-27","k":"query","n":"tax_year","or":"tax_year","r":false,"t":"`$STRING`","index$":10}]},"k":"http","m":"GET","o":"/api/v1/tools/director-pension","q":{"exist":["company_profit","contribution"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"director-pension"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"director_pension","name__orig":"director_pension","Name":"DirectorPension","name_":"director_pension","name-":"director-pension","NAME":"DIRECTOR_PENSION","index$":7}, {"active":true,"entity":"director_pension","key$":"BasicDirectorPensionFlow","kind":"basic","name":"BasicDirectorPensionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"director_pension_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"director_pension_ref01","srcdatavar":"director_pension_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-director_pension_ref01"}}],"index$":1}]}, 'DirectorPension', {"POST /api/v1/tools/director-pension":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"tax_year":{"type":"string","enum":["2025-26","2026-27"],"default":"2026-27","title":"Tax year","description":"UK tax year, \"2025-26\" or \"2026-27\" (6 April to 5 April). The company's year is taken as 1 April to 31 March alongside it. Default 2026-27.","key$":"tax_year"},"contribution":{"type":"number","minimum":1,"title":"Pension contribution","description":"The amount the company would pay into the director's pension as an employer contribution, in pounds. The same company money is then compared as extra salary and as an extra dividend.","key$":"contribution"},"company_profit":{"type":"number","minimum":0,"title":"Company profit","description":"The company's taxable profit for its year before this contribution, after the director's existing salary and other costs, in pounds. It must be at least the contribution.","key$":"company_profit"},"salary":{"type":"number","minimum":0,"title":"Your salary","description":"The salary the director already takes from the company this tax year, in pounds. Default 12,570.","key$":"salary"},"dividends":{"type":"number","minimum":0,"title":"Your dividends","description":"Dividends the director already takes this tax year, in pounds. Default 0.","key$":"dividends"},"other_income":{"type":"number","minimum":0,"title":"Other income","description":"The director's other taxable income for the tax year from outside the company, in pounds. Default 0.","key$":"other_income"},"other_pension_contributions":{"type":"number","minimum":0,"title":"Other pension contributions","description":"Everything else paid into the director's pensions this tax year (their own contributions, before tax relief, and any other employer's), in pounds. Counted with this contribution against the annual allowance. Default 0.","key$":"other_pension_contributions"},"money_purchase_allowance":{"type":"boolean","default":false,"title":"Pension already flexibly accessed","description":"true if the director has already flexibly accessed a pension (for example taken cash from drawdown or an uncrystallised lump sum), so the £10,000 money purchase annual allowance applies. Default false.","key$":"money_purchase_allowance"},"director_only_employee":{"type":"boolean","default":true,"title":"Director is the only employee","description":"true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. false if someone else is also paid over that, so the £10,500 Employment Allowance can cut employer National Insurance. Default true.","key$":"director_only_employee"},"scottish_taxpayer":{"type":"boolean","default":false,"title":"Scottish taxpayer","description":"true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. Dividends are taxed at UK rates either way. Default false (England, Wales and Northern Ireland, which have the same rates for these years).","key$":"scottish_taxpayer"},"associated_companies":{"type":"integer","minimum":0,"default":0,"title":"Associated companies","description":"Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. Default 0.","key$":"associated_companies"}},"required":["contribution","company_profit"],"additionalProperties":false,"index$":1},"example":{"tax_year":"2026-27","contribution":10000,"company_profit":60000,"salary":12570,"dividends":25000,"director_only_employee":true}}}},"parameters":[]},"GET /api/v1/tools/director-pension":{"protocol":"http","parameters":[{"name":"tax_year","in":"query","required":false,"description":"UK tax year, \"2025-26\" or \"2026-27\" (6 April to 5 April). The company's year is taken as 1 April to 31 March alongside it. Default 2026-27.","schema":{"type":"string","enum":["2025-26","2026-27"],"default":"2026-27"},"index$":0},{"name":"contribution","in":"query","required":true,"description":"The amount the company would pay into the director's pension as an employer contribution, in pounds. The same company money is then compared as extra salary and as an extra dividend.","schema":{"type":"number","minimum":1},"example":10000,"index$":1},{"name":"company_profit","in":"query","required":true,"description":"The company's taxable profit for its year before this contribution, after the director's existing salary and other costs, in pounds. It must be at least the contribution.","schema":{"type":"number","minimum":0},"example":60000,"index$":2},{"name":"salary","in":"query","required":false,"description":"The salary the director already takes from the company this tax year, in pounds. Default 12,570.","schema":{"type":"number","minimum":0},"index$":3},{"name":"dividends","in":"query","required":false,"description":"Dividends the director already takes this tax year, in pounds. Default 0.","schema":{"type":"number","minimum":0},"index$":4},{"name":"other_income","in":"query","required":false,"description":"The director's other taxable income for the tax year from outside the company, in pounds. Default 0.","schema":{"type":"number","minimum":0},"index$":5},{"name":"other_pension_contributions","in":"query","required":false,"description":"Everything else paid into the director's pensions this tax year (their own contributions, before tax relief, and any other employer's), in pounds. Counted with this contribution against the annual allowance. Default 0.","schema":{"type":"number","minimum":0},"index$":6},{"name":"money_purchase_allowance","in":"query","required":false,"description":"true if the director has already flexibly accessed a pension (for example taken cash from drawdown or an uncrystallised lump sum), so the £10,000 money purchase annual allowance applies. Default false.","schema":{"type":"boolean","default":false},"index$":7},{"name":"director_only_employee","in":"query","required":false,"description":"true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. false if someone else is also paid over that, so the £10,500 Employment Allowance can cut employer National Insurance. Default true.","schema":{"type":"boolean","default":true},"index$":8},{"name":"scottish_taxpayer","in":"query","required":false,"description":"true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. Dividends are taxed at UK rates either way. Default false (England, Wales and Northern Ireland, which have the same rates for these years).","schema":{"type":"boolean","default":false},"index$":9},{"name":"associated_companies","in":"query","required":false,"description":"Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits. Default 0.","schema":{"type":"integer","minimum":0,"default":0},"index$":10}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const director_pension_ref01_ent = client.DirectorPension()
    let director_pension_ref01_data = setup.data.new.director_pension['director_pension_ref01']

    director_pension_ref01_data = (await director_pension_ref01_ent.create(director_pension_ref01_data)).data()
    assert(null != director_pension_ref01_data)


    // LOAD
    const director_pension_ref01_match_dt0: any = {}
    const director_pension_ref01_data_dt0 = (await director_pension_ref01_ent.load(director_pension_ref01_match_dt0)).data()
    assert(null != director_pension_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/director_pension/DirectorPensionTestData.json')

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
    ['director_pension01','director_pension02','director_pension03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TAXLEY_CORPORATION_TAX_TEST_DIRECTOR_PENSION_ENTID': idmap,
    'TAXLEY_CORPORATION_TAX_TEST_LIVE': 'FALSE',
    'TAXLEY_CORPORATION_TAX_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TAXLEY_CORPORATION_TAX_TEST_DIRECTOR_PENSION_ENTID']

  const live = 'TRUE' === env.TAXLEY_CORPORATION_TAX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TAXLEY_CORPORATION_TAX_TEST_DIRECTOR_PENSION_ENTID']
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
  
