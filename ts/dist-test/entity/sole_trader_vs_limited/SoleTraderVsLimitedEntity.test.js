"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SoleTraderVsLimitedEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TAXLEY_CORPORATION_TAX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TAXLEY_CORPORATION_TAX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TaxleyCorporationTaxSDK.test();
        const ent = testsdk.SoleTraderVsLimited();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.TaxleyCorporationTaxSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.SoleTraderVsLimited().load({ "director_only_employee": "x", "profit": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TAXLEY_CORPORATION_TAX_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'sole_trader_vs_limited.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "calculated_by": { "a": true, "h": "Calculated By", "n": "calculated_by", "r": true, "t": "`$STRING`", "key$": "calculated_by", "index$": 0 }, "director_only_employee": { "a": true, "h": "Director Only Employee", "n": "director_only_employee", "r": false, "sh": "true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance.", "t": "`$BOOLEAN`", "key$": "director_only_employee", "index$": 1 }, "disclaimer": { "a": true, "h": "Disclaimer", "n": "disclaimer", "r": true, "t": "`$STRING`", "key$": "disclaimer", "index$": 2 }, "input": { "a": true, "h": "Input", "n": "input", "r": true, "sh": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).", "t": "`$OBJECT`", "key$": "input", "index$": 3 }, "other_income": { "a": true, "h": "Other Income", "n": "other_income", "r": false, "sh": "The owner's other taxable income for the tax year, such as a job, a pension or rental profit, in pounds.", "t": "`$NUMBER`", "key$": "other_income", "index$": 4 }, "page_url": { "a": true, "fo": "uri", "h": "Page Url", "n": "page_url", "r": true, "t": "`$STRING`", "key$": "page_url", "index$": 5 }, "profit": { "a": true, "h": "Profit", "n": "profit", "r": true, "sh": "The business's profit for the year, after expenses and before any tax or pay to the owner, in pounds.", "t": "`$NUMBER`", "key$": "profit", "index$": 6 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 7 }, "scottish_taxpayer": { "a": true, "h": "Scottish Taxpayer", "n": "scottish_taxpayer", "r": false, "sh": "true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands.", "t": "`$BOOLEAN`", "key$": "scottish_taxpayer", "index$": 8 }, "share_url": { "a": true, "fo": "uri", "h": "Share Url", "n": "share_url", "r": true, "sh": "A link to this result on taxley.co.uk.", "t": "`$STRING`", "key$": "share_url", "index$": 9 }, "tax_year": { "a": true, "h": "Tax Year", "n": "tax_year", "r": false, "sh": "UK tax year, \"2025-26\" or \"2026-27\" (6 April to 5 April).", "t": "`$STRING`", "key$": "tax_year", "index$": 10 }, "tool": { "a": true, "h": "Tool", "n": "tool", "r": true, "t": "`$STRING`", "key$": "tool", "index$": 11 } }, "name": "sole_trader_vs_limited", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["director_only_employee", "other_income", "profit", "scottish_taxpayer", "tax_year"], "co": { "id": "POST /api/v1/tools/sole-trader-vs-limited", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v1/tools/sole-trader-vs-limited", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "tools" }, { "lit": "sole-trader-vs-limited" }], "t": { "req": { "director_only_employee": "`reqdata.director_only_employee`", "other_income": "`reqdata.other_income`", "profit": "`reqdata.profit`", "scottish_taxpayer": "`reqdata.scottish_taxpayer`", "tax_year": "`reqdata.tax_year`" }, "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/tools/sole-trader-vs-limited", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": true, "k": "query", "n": "director_only_employee", "or": "director_only_employee", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "k": "query", "n": "other_income", "or": "other_income", "r": false, "t": "`$NUMBER`", "index$": 1 }, { "a": true, "ex": 50000, "k": "query", "n": "profit", "or": "profit", "r": true, "t": "`$NUMBER`", "index$": 2 }, { "a": true, "ex": false, "k": "query", "n": "scottish_taxpayer", "or": "scottish_taxpayer", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "ex": "2026-27", "k": "query", "n": "tax_year", "or": "tax_year", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/api/v1/tools/sole-trader-vs-limited", "q": { "exist": ["profit"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "tools" }, { "lit": "sole-trader-vs-limited" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "sole_trader_vs_limited", "name__orig": "sole_trader_vs_limited", "Name": "SoleTraderVsLimited", "name_": "sole_trader_vs_limited", "name-": "sole-trader-vs-limited", "NAME": "SOLE_TRADER_VS_LIMITED", "index$": 15 }, { "active": true, "entity": "sole_trader_vs_limited", "key$": "BasicSoleTraderVsLimitedFlow", "kind": "basic", "name": "BasicSoleTraderVsLimitedFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "sole_trader_vs_limited_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "sole_trader_vs_limited_ref01", "srcdatavar": "sole_trader_vs_limited_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-sole_trader_vs_limited_ref01" } }], "index$": 1 }] }, 'SoleTraderVsLimited', { "POST /api/v1/tools/sole-trader-vs-limited": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "tax_year": { "type": "string", "enum": ["2025-26", "2026-27"], "default": "2026-27", "title": "Tax year", "description": "UK tax year, \"2025-26\" or \"2026-27\" (6 April to 5 April). The company's year is taken as 1 April to 31 March alongside it. Default 2026-27.", "key$": "tax_year" }, "profit": { "type": "number", "minimum": 0, "title": "Business profit", "description": "The business's profit for the year, after expenses and before any tax or pay to the owner, in pounds. The same figure is used for both the sole trader and the company.", "key$": "profit" }, "other_income": { "type": "number", "minimum": 0, "title": "Other income", "description": "The owner's other taxable income for the tax year, such as a job, a pension or rental profit, in pounds. Default 0.", "key$": "other_income" }, "director_only_employee": { "type": "boolean", "default": true, "title": "Director is the only employee", "description": "true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. false if someone else is also paid over that, so the £10,500 Employment Allowance can cut employer National Insurance. Default true.", "key$": "director_only_employee" }, "scottish_taxpayer": { "type": "boolean", "default": false, "title": "Scottish taxpayer", "description": "true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. Dividends are taxed at UK rates either way. Default false (England, Wales and Northern Ireland, which have the same rates for these years).", "key$": "scottish_taxpayer" } }, "required": ["profit"], "additionalProperties": false, "index$": 1 }, "example": { "tax_year": "2026-27", "profit": 50000, "director_only_employee": true } } } }, "parameters": [] }, "GET /api/v1/tools/sole-trader-vs-limited": { "protocol": "http", "parameters": [{ "name": "tax_year", "in": "query", "required": false, "description": "UK tax year, \"2025-26\" or \"2026-27\" (6 April to 5 April). The company's year is taken as 1 April to 31 March alongside it. Default 2026-27.", "schema": { "type": "string", "enum": ["2025-26", "2026-27"], "default": "2026-27" }, "index$": 0 }, { "name": "profit", "in": "query", "required": true, "description": "The business's profit for the year, after expenses and before any tax or pay to the owner, in pounds. The same figure is used for both the sole trader and the company.", "schema": { "type": "number", "minimum": 0 }, "example": 50000, "index$": 1 }, { "name": "other_income", "in": "query", "required": false, "description": "The owner's other taxable income for the tax year, such as a job, a pension or rental profit, in pounds. Default 0.", "schema": { "type": "number", "minimum": 0 }, "index$": 2 }, { "name": "director_only_employee", "in": "query", "required": false, "description": "true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance. false if someone else is also paid over that, so the £10,500 Employment Allowance can cut employer National Insurance. Default true.", "schema": { "type": "boolean", "default": true }, "index$": 3 }, { "name": "scottish_taxpayer", "in": "query", "required": false, "description": "true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands. Dividends are taxed at UK rates either way. Default false (England, Wales and Northern Ireland, which have the same rates for these years).", "schema": { "type": "boolean", "default": false }, "index$": 4 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const sole_trader_vs_limited_ref01_ent = client.SoleTraderVsLimited();
        let sole_trader_vs_limited_ref01_data = setup.data.new.sole_trader_vs_limited['sole_trader_vs_limited_ref01'];
        sole_trader_vs_limited_ref01_data = (await sole_trader_vs_limited_ref01_ent.create(sole_trader_vs_limited_ref01_data)).data();
        (0, node_assert_1.default)(null != sole_trader_vs_limited_ref01_data);
        // LOAD
        const sole_trader_vs_limited_ref01_match_dt0 = {};
        const sole_trader_vs_limited_ref01_data_dt0 = (await sole_trader_vs_limited_ref01_ent.load(sole_trader_vs_limited_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != sole_trader_vs_limited_ref01_data_dt0);
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/sole_trader_vs_limited/SoleTraderVsLimitedTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TaxleyCorporationTaxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['sole_trader_vs_limited01', 'sole_trader_vs_limited02', 'sole_trader_vs_limited03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TAXLEY_CORPORATION_TAX_TEST_SOLE_TRADER_VS_LIMITED_ENTID': idmap,
        'TAXLEY_CORPORATION_TAX_TEST_LIVE': 'FALSE',
        'TAXLEY_CORPORATION_TAX_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['TAXLEY_CORPORATION_TAX_TEST_SOLE_TRADER_VS_LIMITED_ENTID'];
    const live = 'TRUE' === env.TAXLEY_CORPORATION_TAX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TAXLEY_CORPORATION_TAX_TEST_SOLE_TRADER_VS_LIMITED_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.TaxleyCorporationTaxSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=SoleTraderVsLimitedEntity.test.js.map