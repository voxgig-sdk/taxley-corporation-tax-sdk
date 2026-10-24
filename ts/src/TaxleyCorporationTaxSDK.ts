// TaxleyCorporationTax Ts SDK

import { CapitalAllowanceEntity } from './entity/CapitalAllowanceEntity'
import { ChargeableGainEntity } from './entity/ChargeableGainEntity'
import { CompanyCarEntity } from './entity/CompanyCarEntity'
import { CompanySizeEntity } from './entity/CompanySizeEntity'
import { CompanyVanEntity } from './entity/CompanyVanEntity'
import { CorporationTaxEntity } from './entity/CorporationTaxEntity'
import { DeadlineEntity } from './entity/DeadlineEntity'
import { DirectorPensionEntity } from './entity/DirectorPensionEntity'
import { DirectorsLoanEntity } from './entity/DirectorsLoanEntity'
import { DividendReserveEntity } from './entity/DividendReserveEntity'
import { HomeOfficeEntity } from './entity/HomeOfficeEntity'
import { LatePenaltyEntity } from './entity/LatePenaltyEntity'
import { LongPeriodEntity } from './entity/LongPeriodEntity'
import { MileageAllowanceEntity } from './entity/MileageAllowanceEntity'
import { SalaryDividendEntity } from './entity/SalaryDividendEntity'
import { SoleTraderVsLimitedEntity } from './entity/SoleTraderVsLimitedEntity'
import { ToolEntity } from './entity/ToolEntity'
import { TrivialBenefitEntity } from './entity/TrivialBenefitEntity'

export type * from './TaxleyCorporationTaxTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { TaxleyCorporationTaxEntityBase } from './TaxleyCorporationTaxEntityBase'
import { Utility } from './utility/Utility'
import { unreadableBody } from './utility/ResultBodyUtility'
import { abortError } from './utility/MakeRequestUtility'
import { allowed } from './utility/PrepareMethodUtility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


// A request's outcome: ok is false alone on an error with no response, so a
// caller narrowing on it reaches the status and the data.
type DirectResult =
  | { ok: false, err: any, status?: undefined, headers?: undefined, data?: undefined }
  | { ok: boolean, status: number, headers: any, data: any, err?: any }


class TaxleyCorporationTaxSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    for (const key of ['_options', '_rootctx', '_features']) {
      Object.defineProperty(this, key, {
        value: (this as any)[key], enumerable: false, writable: true, configurable: true
      })
    }

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options
    const method = String(fetchargs.method || 'GET').toUpperCase()

    if (!allowed(options.allow.method, method)) {
      return ctx.error('spec_method_allow', 'Method "' + method +
        '" not allowed by SDK option allow.method value: "' + options.allow.method + '"')
    }

    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method,
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any): Promise<DirectResult> {
    if (!allowed(this._options.allow.op, 'direct')) {
      return {
        ok: false,
        err: new Error('TaxleyCorporationTaxSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any): Promise<DirectResult> {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return { ok: false, err: utility.clean(this._rootctx, fetchdef) }
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      if (true === fetchdef.signal?.aborted) {
        throw fetchdef.signal.reason
      }

      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: utility.clean(ctx, abortError(ctx, fetched)) }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      let err: any = undefined
      if (!noBody) {
        let text: any = undefined
        try {
          const raw: any = fetched
          if ('function' === typeof raw.text) {
            text = await raw.text()
            json = '' === text.trim() ? undefined : JSON.parse(text)
          }
          else {
            json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
          }
        }
        catch (parseErr: any) {
          if ('SyntaxError' !== parseErr?.name) {
            throw parseErr
          }
          err = unreadableBody(ctx, {
            status, headers, text: text ?? parseErr.text, sent: fetchdef.headers,
            failed: 200 <= status && status < 300 ? undefined :
              ctx.error('request_status', 'request: ' + status + ': ' + fetched.statusText),
          })
        }
      }

      return {
        ok: null == err && status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
        ...(null == err ? {} : { err: utility.clean(ctx, err) }),
      }
    }
    catch (err: any) {
      return { ok: false, err: utility.clean(ctx, abortError(ctx, err)) }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!allowed(options.allow.op, 'graphql')) {
      return {
        ok: false,
        err: new Error('TaxleyCorporationTaxSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('TaxleyCorporationTaxSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.CapitalAllowance().list()` / `client.CapitalAllowance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CapitalAllowance(entopts?: Record<string, any>) {
    const self = this
    return new CapitalAllowanceEntity(self, entopts)
  }


  // Entity access: `client.ChargeableGain().list()` / `client.ChargeableGain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ChargeableGain(entopts?: Record<string, any>) {
    const self = this
    return new ChargeableGainEntity(self, entopts)
  }


  // Entity access: `client.CompanyCar().list()` / `client.CompanyCar().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CompanyCar(entopts?: Record<string, any>) {
    const self = this
    return new CompanyCarEntity(self, entopts)
  }


  // Entity access: `client.CompanySize().list()` / `client.CompanySize().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CompanySize(entopts?: Record<string, any>) {
    const self = this
    return new CompanySizeEntity(self, entopts)
  }


  // Entity access: `client.CompanyVan().list()` / `client.CompanyVan().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CompanyVan(entopts?: Record<string, any>) {
    const self = this
    return new CompanyVanEntity(self, entopts)
  }


  // Entity access: `client.CorporationTax().list()` / `client.CorporationTax().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CorporationTax(entopts?: Record<string, any>) {
    const self = this
    return new CorporationTaxEntity(self, entopts)
  }


  // Entity access: `client.Deadline().list()` / `client.Deadline().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Deadline(entopts?: Record<string, any>) {
    const self = this
    return new DeadlineEntity(self, entopts)
  }


  // Entity access: `client.DirectorPension().list()` / `client.DirectorPension().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DirectorPension(entopts?: Record<string, any>) {
    const self = this
    return new DirectorPensionEntity(self, entopts)
  }


  // Entity access: `client.DirectorsLoan().list()` / `client.DirectorsLoan().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DirectorsLoan(entopts?: Record<string, any>) {
    const self = this
    return new DirectorsLoanEntity(self, entopts)
  }


  // Entity access: `client.DividendReserve().list()` / `client.DividendReserve().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DividendReserve(entopts?: Record<string, any>) {
    const self = this
    return new DividendReserveEntity(self, entopts)
  }


  // Entity access: `client.HomeOffice().list()` / `client.HomeOffice().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  HomeOffice(entopts?: Record<string, any>) {
    const self = this
    return new HomeOfficeEntity(self, entopts)
  }


  // Entity access: `client.LatePenalty().list()` / `client.LatePenalty().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LatePenalty(entopts?: Record<string, any>) {
    const self = this
    return new LatePenaltyEntity(self, entopts)
  }


  // Entity access: `client.LongPeriod().list()` / `client.LongPeriod().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LongPeriod(entopts?: Record<string, any>) {
    const self = this
    return new LongPeriodEntity(self, entopts)
  }


  // Entity access: `client.MileageAllowance().list()` / `client.MileageAllowance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MileageAllowance(entopts?: Record<string, any>) {
    const self = this
    return new MileageAllowanceEntity(self, entopts)
  }


  // Entity access: `client.SalaryDividend().list()` / `client.SalaryDividend().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SalaryDividend(entopts?: Record<string, any>) {
    const self = this
    return new SalaryDividendEntity(self, entopts)
  }


  // Entity access: `client.SoleTraderVsLimited().list()` / `client.SoleTraderVsLimited().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SoleTraderVsLimited(entopts?: Record<string, any>) {
    const self = this
    return new SoleTraderVsLimitedEntity(self, entopts)
  }


  // Entity access: `client.Tool().list()` / `client.Tool().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Tool(entopts?: Record<string, any>) {
    const self = this
    return new ToolEntity(self, entopts)
  }


  // Entity access: `client.TrivialBenefit().list()` / `client.TrivialBenefit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TrivialBenefit(entopts?: Record<string, any>) {
    const self = this
    return new TrivialBenefitEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new TaxleyCorporationTaxSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return TaxleyCorporationTaxSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'TaxleyCorporationTax' }
  }

  toString() {
    return 'TaxleyCorporationTax ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = TaxleyCorporationTaxSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  TaxleyCorporationTaxEntityBase,

  TaxleyCorporationTaxSDK,
  SDK,
}


export type { DirectResult }
