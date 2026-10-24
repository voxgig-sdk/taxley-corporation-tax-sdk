

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


describe('DirectorsLoanEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TAXLEY_CORPORATION_TAX_TEST_LIVE=TRUE.
  afterEach(liveDelay('TAXLEY_CORPORATION_TAX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TaxleyCorporationTaxSDK.test()
    const ent = testsdk.DirectorsLoan()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TaxleyCorporationTaxSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DirectorsLoan().load({"benefit_closing_balance":"x","outstanding":1,"period_end":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TAXLEY_CORPORATION_TAX_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'directors_loan.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"benefit_closing_balance":{"a":true,"h":"Benefit Closing Balance","n":"benefit_closing_balance","r":false,"sh":"Maximum loan balance on 5 April at the end of the selected tax year, or when the loan ended, in pounds.","t":"`$NUMBER`","key$":"benefit_closing_balance","index$":0},"benefit_interest_paid":{"a":true,"h":"Benefit Interest Paid","n":"benefit_interest_paid","r":false,"sh":"Interest the director was required to pay and actually paid for the selected tax year, in pounds.","t":"`$NUMBER`","key$":"benefit_interest_paid","index$":1},"benefit_maximum_balance":{"a":true,"h":"Benefit Maximum Balance","n":"benefit_maximum_balance","r":false,"sh":"Highest total beneficial-loan balance at any time in the tax year, in pounds, used for the £10,000 exemption.","t":"`$NUMBER`","key$":"benefit_maximum_balance","index$":2},"benefit_opening_balance":{"a":true,"h":"Benefit Opening Balance","n":"benefit_opening_balance","r":false,"sh":"Maximum loan balance on 5 April before the selected tax year, or when the loan began, in pounds.","t":"`$NUMBER`","key$":"benefit_opening_balance","index$":3},"benefit_tax_year":{"a":true,"h":"Benefit Tax Year","n":"benefit_tax_year","r":false,"sh":"Optional UK tax year for the beneficial-loan calculation: 2025-26 or 2026-27.","t":"`$STRING`","key$":"benefit_tax_year","index$":4},"benefit_whole_months":{"a":true,"h":"Benefit Whole Months","n":"benefit_whole_months","r":false,"sh":"Whole months the loan was outstanding in the selected tax year, from 1 to 12.","t":"`$INTEGER`","key$":"benefit_whole_months","index$":5},"calculated_by":{"a":true,"h":"Calculated By","n":"calculated_by","r":true,"t":"`$STRING`","key$":"calculated_by","index$":6},"disclaimer":{"a":true,"h":"Disclaimer","n":"disclaimer","r":true,"t":"`$STRING`","key$":"disclaimer","index$":7},"input":{"a":true,"h":"Input","n":"input","r":true,"sh":"The input as the tool read it (dates YYYY-MM-DD, money in pounds).","t":"`$OBJECT`","key$":"input","index$":8},"loan_made_on":{"a":true,"fo":"date","h":"Loan Made On","n":"loan_made_on","r":false,"sh":"Date the loan was made, YYYY-MM-DD, within the accounting period.","t":"`$STRING`","key$":"loan_made_on","index$":9},"marginal_income_tax_rate":{"a":true,"h":"Marginal Income Tax Rate","n":"marginal_income_tax_rate","r":false,"sh":"Director’s marginal Income Tax rate as a percentage, used only to estimate personal tax on the benefit.","t":"`$NUMBER`","key$":"marginal_income_tax_rate","index$":10},"outstanding":{"a":true,"h":"Outstanding","n":"outstanding","r":true,"sh":"Loan balance the director or other participator owed the company at the period end, in pounds.","t":"`$NUMBER`","key$":"outstanding","index$":11},"page_url":{"a":true,"fo":"uri","h":"Page Url","n":"page_url","r":true,"t":"`$STRING`","key$":"page_url","index$":12},"period_end":{"a":true,"fo":"date","h":"Period End","n":"period_end","r":true,"sh":"Last day of the company's Corporation Tax accounting period, YYYY-MM-DD.","t":"`$STRING`","key$":"period_end","index$":13},"repaid_within_9_months":{"a":true,"h":"Repaid Within 9 Months","n":"repaid_within_9_months","r":false,"sh":"Part of that balance repaid, released or written off after the period end and within 9 months of it (before the s.455 tax is due), in pounds.","t":"`$NUMBER`","key$":"repaid_within_9_months","index$":14},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":15},"share_url":{"a":true,"fo":"uri","h":"Share Url","n":"share_url","r":true,"sh":"A link to this result on taxley.co.uk.","t":"`$STRING`","key$":"share_url","index$":16},"tool":{"a":true,"h":"Tool","n":"tool","r":true,"t":"`$STRING`","key$":"tool","index$":17}},"name":"directors_loan","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["benefit_closing_balance","benefit_interest_paid","benefit_maximum_balance","benefit_opening_balance","benefit_tax_year","benefit_whole_months","loan_made_on","marginal_income_tax_rate","outstanding","period_end","repaid_within_9_months"],"co":{"id":"POST /api/v1/tools/directors-loan","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/tools/directors-loan","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"directors-loan"}],"t":{"req":{"benefit_closing_balance":"`reqdata.benefit_closing_balance`","benefit_interest_paid":"`reqdata.benefit_interest_paid`","benefit_maximum_balance":"`reqdata.benefit_maximum_balance`","benefit_opening_balance":"`reqdata.benefit_opening_balance`","benefit_tax_year":"`reqdata.benefit_tax_year`","benefit_whole_months":"`reqdata.benefit_whole_month`","loan_made_on":"`reqdata.loan_made_on`","marginal_income_tax_rate":"`reqdata.marginal_income_tax_rate`","outstanding":"`reqdata.outstanding`","period_end":"`reqdata.period_end`","repaid_within_9_months":"`reqdata.repaid_within_9_month`"},"res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/tools/directors-loan","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"benefit_closing_balance","or":"benefit_closing_balance","r":false,"t":"`$NUMBER`","index$":0},{"a":true,"k":"query","n":"benefit_interest_paid","or":"benefit_interest_paid","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"k":"query","n":"benefit_maximum_balance","or":"benefit_maximum_balance","r":false,"t":"`$NUMBER`","index$":2},{"a":true,"k":"query","n":"benefit_opening_balance","or":"benefit_opening_balance","r":false,"t":"`$NUMBER`","index$":3},{"a":true,"k":"query","n":"benefit_tax_year","or":"benefit_tax_year","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"benefit_whole_month","or":"benefit_whole_months","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"loan_made_on","or":"loan_made_on","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"marginal_income_tax_rate","or":"marginal_income_tax_rate","r":false,"t":"`$NUMBER`","index$":7},{"a":true,"ex":25000,"k":"query","n":"outstanding","or":"outstanding","r":true,"t":"`$NUMBER`","index$":8},{"a":true,"ex":"2026-03-31","k":"query","n":"period_end","or":"period_end","r":true,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"repaid_within_9_month","or":"repaid_within_9_months","r":false,"t":"`$NUMBER`","index$":10}]},"k":"http","m":"GET","o":"/api/v1/tools/directors-loan","q":{"exist":["outstanding","period_end"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"tools"},{"lit":"directors-loan"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"directors_loan","name__orig":"directors_loan","Name":"DirectorsLoan","name_":"directors_loan","name-":"directors-loan","NAME":"DIRECTORS_LOAN","index$":8}, {"active":true,"entity":"directors_loan","key$":"BasicDirectorsLoanFlow","kind":"basic","name":"BasicDirectorsLoanFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"directors_loan_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"directors_loan_ref01","srcdatavar":"directors_loan_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-directors_loan_ref01"}}],"index$":1}]}, 'DirectorsLoan', {"POST /api/v1/tools/directors-loan":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"period_end":{"type":"string","format":"date","description":"Last day of the company's Corporation Tax accounting period, YYYY-MM-DD.","key$":"period_end"},"outstanding":{"type":"number","minimum":1,"description":"Loan balance the director or other participator owed the company at the period end, in pounds.","key$":"outstanding"},"repaid_within_9_months":{"type":"number","minimum":0,"description":"Part of that balance repaid, released or written off after the period end and within 9 months of it (before the s.455 tax is due), in pounds. Default 0.","key$":"repaid_within_9_months"},"loan_made_on":{"type":"string","format":"date","description":"Date the loan was made, YYYY-MM-DD, within the accounting period. It sets the rate: 33.75% for loans made 6 April 2022 to 5 April 2026, 35.75% from 6 April 2026. Required when the 12 months to period_end include a rate change (for example a period ending between 6 April 2026 and 4 April 2027). Otherwise it defaults to the period end.","key$":"loan_made_on"},"benefit_tax_year":{"type":"string","enum":["2025-26","2026-27"],"description":"Optional UK tax year for the beneficial-loan calculation: 2025-26 or 2026-27. Omit to calculate s.455 only.","key$":"benefit_tax_year"},"benefit_opening_balance":{"type":"number","minimum":0,"description":"Maximum loan balance on 5 April before the selected tax year, or when the loan began, in pounds. Defaults to outstanding.","key$":"benefit_opening_balance"},"benefit_closing_balance":{"type":"number","minimum":0,"description":"Maximum loan balance on 5 April at the end of the selected tax year, or when the loan ended, in pounds. Defaults to outstanding.","key$":"benefit_closing_balance"},"benefit_maximum_balance":{"type":"number","minimum":0,"description":"Highest total beneficial-loan balance at any time in the tax year, in pounds, used for the £10,000 exemption. Defaults to the larger opening or closing balance.","key$":"benefit_maximum_balance"},"benefit_whole_months":{"type":"integer","minimum":1,"maximum":12,"description":"Whole months the loan was outstanding in the selected tax year, from 1 to 12. Defaults to 12.","key$":"benefit_whole_months"},"benefit_interest_paid":{"type":"number","minimum":0,"description":"Interest the director was required to pay and actually paid for the selected tax year, in pounds. Defaults to 0.","key$":"benefit_interest_paid"},"marginal_income_tax_rate":{"type":"number","minimum":0,"maximum":100,"description":"Director’s marginal Income Tax rate as a percentage, used only to estimate personal tax on the benefit. Defaults to 20.","key$":"marginal_income_tax_rate"}},"required":["period_end","outstanding"],"additionalProperties":false,"index$":1},"example":{"period_end":"2026-03-31","outstanding":25000,"repaid_within_9_months":10000,"benefit_tax_year":"2026-27","benefit_opening_balance":25000,"benefit_closing_balance":15000,"benefit_maximum_balance":25000,"benefit_whole_months":12,"benefit_interest_paid":0,"marginal_income_tax_rate":20}}}},"parameters":[]},"GET /api/v1/tools/directors-loan":{"protocol":"http","parameters":[{"name":"period_end","in":"query","required":true,"description":"Last day of the company's Corporation Tax accounting period, YYYY-MM-DD.","schema":{"type":"string","format":"date"},"example":"2026-03-31","index$":0},{"name":"outstanding","in":"query","required":true,"description":"Loan balance the director or other participator owed the company at the period end, in pounds.","schema":{"type":"number","minimum":1},"example":25000,"index$":1},{"name":"repaid_within_9_months","in":"query","required":false,"description":"Part of that balance repaid, released or written off after the period end and within 9 months of it (before the s.455 tax is due), in pounds. Default 0.","schema":{"type":"number","minimum":0},"index$":2},{"name":"loan_made_on","in":"query","required":false,"description":"Date the loan was made, YYYY-MM-DD, within the accounting period. It sets the rate: 33.75% for loans made 6 April 2022 to 5 April 2026, 35.75% from 6 April 2026. Required when the 12 months to period_end include a rate change (for example a period ending between 6 April 2026 and 4 April 2027). Otherwise it defaults to the period end.","schema":{"type":"string","format":"date"},"index$":3},{"name":"benefit_tax_year","in":"query","required":false,"description":"Optional UK tax year for the beneficial-loan calculation: 2025-26 or 2026-27. Omit to calculate s.455 only.","schema":{"type":"string","enum":["2025-26","2026-27"]},"index$":4},{"name":"benefit_opening_balance","in":"query","required":false,"description":"Maximum loan balance on 5 April before the selected tax year, or when the loan began, in pounds. Defaults to outstanding.","schema":{"type":"number","minimum":0},"index$":5},{"name":"benefit_closing_balance","in":"query","required":false,"description":"Maximum loan balance on 5 April at the end of the selected tax year, or when the loan ended, in pounds. Defaults to outstanding.","schema":{"type":"number","minimum":0},"index$":6},{"name":"benefit_maximum_balance","in":"query","required":false,"description":"Highest total beneficial-loan balance at any time in the tax year, in pounds, used for the £10,000 exemption. Defaults to the larger opening or closing balance.","schema":{"type":"number","minimum":0},"index$":7},{"name":"benefit_whole_months","in":"query","required":false,"description":"Whole months the loan was outstanding in the selected tax year, from 1 to 12. Defaults to 12.","schema":{"type":"integer","minimum":1,"maximum":12},"index$":8},{"name":"benefit_interest_paid","in":"query","required":false,"description":"Interest the director was required to pay and actually paid for the selected tax year, in pounds. Defaults to 0.","schema":{"type":"number","minimum":0},"index$":9},{"name":"marginal_income_tax_rate","in":"query","required":false,"description":"Director’s marginal Income Tax rate as a percentage, used only to estimate personal tax on the benefit. Defaults to 20.","schema":{"type":"number","minimum":0,"maximum":100},"index$":10}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const directors_loan_ref01_ent = client.DirectorsLoan()
    let directors_loan_ref01_data = setup.data.new.directors_loan['directors_loan_ref01']

    directors_loan_ref01_data = (await directors_loan_ref01_ent.create(directors_loan_ref01_data)).data()
    assert(null != directors_loan_ref01_data)


    // LOAD
    const directors_loan_ref01_match_dt0: any = {}
    const directors_loan_ref01_data_dt0 = (await directors_loan_ref01_ent.load(directors_loan_ref01_match_dt0)).data()
    assert(null != directors_loan_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/directors_loan/DirectorsLoanTestData.json')

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
    ['directors_loan01','directors_loan02','directors_loan03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TAXLEY_CORPORATION_TAX_TEST_DIRECTORS_LOAN_ENTID': idmap,
    'TAXLEY_CORPORATION_TAX_TEST_LIVE': 'FALSE',
    'TAXLEY_CORPORATION_TAX_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TAXLEY_CORPORATION_TAX_TEST_DIRECTORS_LOAN_ENTID']

  const live = 'TRUE' === env.TAXLEY_CORPORATION_TAX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TAXLEY_CORPORATION_TAX_TEST_DIRECTORS_LOAN_ENTID']
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
  
