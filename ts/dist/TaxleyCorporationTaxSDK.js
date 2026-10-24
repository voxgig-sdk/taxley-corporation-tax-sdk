"use strict";
// TaxleyCorporationTax Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.TaxleyCorporationTaxSDK = exports.TaxleyCorporationTaxEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const CapitalAllowanceEntity_1 = require("./entity/CapitalAllowanceEntity");
const ChargeableGainEntity_1 = require("./entity/ChargeableGainEntity");
const CompanyCarEntity_1 = require("./entity/CompanyCarEntity");
const CompanySizeEntity_1 = require("./entity/CompanySizeEntity");
const CompanyVanEntity_1 = require("./entity/CompanyVanEntity");
const CorporationTaxEntity_1 = require("./entity/CorporationTaxEntity");
const DeadlineEntity_1 = require("./entity/DeadlineEntity");
const DirectorPensionEntity_1 = require("./entity/DirectorPensionEntity");
const DirectorsLoanEntity_1 = require("./entity/DirectorsLoanEntity");
const DividendReserveEntity_1 = require("./entity/DividendReserveEntity");
const HomeOfficeEntity_1 = require("./entity/HomeOfficeEntity");
const LatePenaltyEntity_1 = require("./entity/LatePenaltyEntity");
const LongPeriodEntity_1 = require("./entity/LongPeriodEntity");
const MileageAllowanceEntity_1 = require("./entity/MileageAllowanceEntity");
const SalaryDividendEntity_1 = require("./entity/SalaryDividendEntity");
const SoleTraderVsLimitedEntity_1 = require("./entity/SoleTraderVsLimitedEntity");
const ToolEntity_1 = require("./entity/ToolEntity");
const TrivialBenefitEntity_1 = require("./entity/TrivialBenefitEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const TaxleyCorporationTaxEntityBase_1 = require("./TaxleyCorporationTaxEntityBase");
Object.defineProperty(exports, "TaxleyCorporationTaxEntityBase", { enumerable: true, get: function () { return TaxleyCorporationTaxEntityBase_1.TaxleyCorporationTaxEntityBase; } });
const Utility_1 = require("./utility/Utility");
const ResultBodyUtility_1 = require("./utility/ResultBodyUtility");
const MakeRequestUtility_1 = require("./utility/MakeRequestUtility");
const PrepareMethodUtility_1 = require("./utility/PrepareMethodUtility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class TaxleyCorporationTaxSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        for (const key of ['_options', '_rootctx', '_features']) {
            Object.defineProperty(this, key, {
                value: this[key], enumerable: false, writable: true, configurable: true
            });
        }
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const method = String(fetchargs.method || 'GET').toUpperCase();
        if (!(0, PrepareMethodUtility_1.allowed)(options.allow.method, method)) {
            return ctx.error('spec_method_allow', 'Method "' + method +
                '" not allowed by SDK option allow.method value: "' + options.allow.method + '"');
        }
        const spec = {
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
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!(0, PrepareMethodUtility_1.allowed)(this._options.allow.op, 'direct')) {
            return {
                ok: false,
                err: new Error('TaxleyCorporationTaxSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return { ok: false, err: utility.clean(this._rootctx, fetchdef) };
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            if (true === fetchdef.signal?.aborted) {
                throw fetchdef.signal.reason;
            }
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: utility.clean(ctx, (0, MakeRequestUtility_1.abortError)(ctx, fetched)) };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            let err = undefined;
            if (!noBody) {
                let text = undefined;
                try {
                    const raw = fetched;
                    if ('function' === typeof raw.text) {
                        text = await raw.text();
                        json = '' === text.trim() ? undefined : JSON.parse(text);
                    }
                    else {
                        json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                    }
                }
                catch (parseErr) {
                    if ('SyntaxError' !== parseErr?.name) {
                        throw parseErr;
                    }
                    err = (0, ResultBodyUtility_1.unreadableBody)(ctx, {
                        status, headers, text: text ?? parseErr.text, sent: fetchdef.headers,
                        failed: 200 <= status && status < 300 ? undefined :
                            ctx.error('request_status', 'request: ' + status + ': ' + fetched.statusText),
                    });
                }
            }
            return {
                ok: null == err && status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
                ...(null == err ? {} : { err: utility.clean(ctx, err) }),
            };
        }
        catch (err) {
            return { ok: false, err: utility.clean(ctx, (0, MakeRequestUtility_1.abortError)(ctx, err)) };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!(0, PrepareMethodUtility_1.allowed)(options.allow.op, 'graphql')) {
            return {
                ok: false,
                err: new Error('TaxleyCorporationTaxSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('TaxleyCorporationTaxSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.CapitalAllowance().list()` / `client.CapitalAllowance().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CapitalAllowance(entopts) {
        const self = this;
        return new CapitalAllowanceEntity_1.CapitalAllowanceEntity(self, entopts);
    }
    // Entity access: `client.ChargeableGain().list()` / `client.ChargeableGain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ChargeableGain(entopts) {
        const self = this;
        return new ChargeableGainEntity_1.ChargeableGainEntity(self, entopts);
    }
    // Entity access: `client.CompanyCar().list()` / `client.CompanyCar().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CompanyCar(entopts) {
        const self = this;
        return new CompanyCarEntity_1.CompanyCarEntity(self, entopts);
    }
    // Entity access: `client.CompanySize().list()` / `client.CompanySize().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CompanySize(entopts) {
        const self = this;
        return new CompanySizeEntity_1.CompanySizeEntity(self, entopts);
    }
    // Entity access: `client.CompanyVan().list()` / `client.CompanyVan().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CompanyVan(entopts) {
        const self = this;
        return new CompanyVanEntity_1.CompanyVanEntity(self, entopts);
    }
    // Entity access: `client.CorporationTax().list()` / `client.CorporationTax().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CorporationTax(entopts) {
        const self = this;
        return new CorporationTaxEntity_1.CorporationTaxEntity(self, entopts);
    }
    // Entity access: `client.Deadline().list()` / `client.Deadline().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Deadline(entopts) {
        const self = this;
        return new DeadlineEntity_1.DeadlineEntity(self, entopts);
    }
    // Entity access: `client.DirectorPension().list()` / `client.DirectorPension().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DirectorPension(entopts) {
        const self = this;
        return new DirectorPensionEntity_1.DirectorPensionEntity(self, entopts);
    }
    // Entity access: `client.DirectorsLoan().list()` / `client.DirectorsLoan().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DirectorsLoan(entopts) {
        const self = this;
        return new DirectorsLoanEntity_1.DirectorsLoanEntity(self, entopts);
    }
    // Entity access: `client.DividendReserve().list()` / `client.DividendReserve().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DividendReserve(entopts) {
        const self = this;
        return new DividendReserveEntity_1.DividendReserveEntity(self, entopts);
    }
    // Entity access: `client.HomeOffice().list()` / `client.HomeOffice().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    HomeOffice(entopts) {
        const self = this;
        return new HomeOfficeEntity_1.HomeOfficeEntity(self, entopts);
    }
    // Entity access: `client.LatePenalty().list()` / `client.LatePenalty().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LatePenalty(entopts) {
        const self = this;
        return new LatePenaltyEntity_1.LatePenaltyEntity(self, entopts);
    }
    // Entity access: `client.LongPeriod().list()` / `client.LongPeriod().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LongPeriod(entopts) {
        const self = this;
        return new LongPeriodEntity_1.LongPeriodEntity(self, entopts);
    }
    // Entity access: `client.MileageAllowance().list()` / `client.MileageAllowance().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MileageAllowance(entopts) {
        const self = this;
        return new MileageAllowanceEntity_1.MileageAllowanceEntity(self, entopts);
    }
    // Entity access: `client.SalaryDividend().list()` / `client.SalaryDividend().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SalaryDividend(entopts) {
        const self = this;
        return new SalaryDividendEntity_1.SalaryDividendEntity(self, entopts);
    }
    // Entity access: `client.SoleTraderVsLimited().list()` / `client.SoleTraderVsLimited().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SoleTraderVsLimited(entopts) {
        const self = this;
        return new SoleTraderVsLimitedEntity_1.SoleTraderVsLimitedEntity(self, entopts);
    }
    // Entity access: `client.Tool().list()` / `client.Tool().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Tool(entopts) {
        const self = this;
        return new ToolEntity_1.ToolEntity(self, entopts);
    }
    // Entity access: `client.TrivialBenefit().list()` / `client.TrivialBenefit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TrivialBenefit(entopts) {
        const self = this;
        return new TrivialBenefitEntity_1.TrivialBenefitEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new TaxleyCorporationTaxSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return TaxleyCorporationTaxSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'TaxleyCorporationTax' };
    }
    toString() {
        return 'TaxleyCorporationTax ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.TaxleyCorporationTaxSDK = TaxleyCorporationTaxSDK;
const SDK = TaxleyCorporationTaxSDK;
exports.SDK = SDK;
//# sourceMappingURL=TaxleyCorporationTaxSDK.js.map