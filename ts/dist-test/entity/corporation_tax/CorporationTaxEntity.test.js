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
(0, node_test_1.describe)('CorporationTaxEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TAXLEY_CORPORATION_TAX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TAXLEY_CORPORATION_TAX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TaxleyCorporationTaxSDK.test();
        const ent = testsdk.CorporationTax();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.TaxleyCorporationTaxSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.CorporationTax().load({ "associated_company": "x", "period_end": "x", "period_start": "x", "taxable_profit": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TAXLEY_CORPORATION_TAX_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'corporation_tax.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "associated_companies": { "a": true, "h": "Associated Companies", "n": "associated_companies", "r": false, "sh": "How many other companies are associated with this one (under common control) in the period.", "t": "`$INTEGER`", "key$": "associated_companies", "index$": 0 }, "calculated_by": { "a": true, "h": "Calculated By", "n": "calculated_by", "r": true, "t": "`$STRING`", "key$": "calculated_by", "index$": 1 }, "close_investment_holding": { "a": true, "h": "Close Investment Holding", "n": "close_investment_holding", "r": false, "sh": "True if the company is a close investment-holding company in the period (CTA 2010 s.18N): a close company is one unless, throughout the period, it exists wholly or mainly to trade commercially, to let land to people not connected with it,…", "t": "`$BOOLEAN`", "key$": "close_investment_holding", "index$": 2 }, "disclaimer": { "a": true, "h": "Disclaimer", "n": "disclaimer", "r": true, "t": "`$STRING`", "key$": "disclaimer", "index$": 3 }, "exempt_distributions": { "a": true, "h": "Exempt Distributions", "n": "exempt_distributions", "r": false, "sh": "Exempt dividends received from companies outside the company's 51% group (and not from a trading company owned by a consortium it belongs to) (CTA 2010 s.18L), in pounds, used only to decide the rate.", "t": "`$NUMBER`", "key$": "exempt_distributions", "index$": 4 }, "input": { "a": true, "h": "Input", "n": "input", "r": true, "sh": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).", "t": "`$OBJECT`", "key$": "input", "index$": 5 }, "page_url": { "a": true, "fo": "uri", "h": "Page Url", "n": "page_url", "r": true, "t": "`$STRING`", "key$": "page_url", "index$": 6 }, "period_end": { "a": true, "fo": "date", "h": "Period End", "n": "period_end", "r": true, "sh": "Last day of the accounting period, YYYY-MM-DD.", "t": "`$STRING`", "key$": "period_end", "index$": 7 }, "period_start": { "a": true, "fo": "date", "h": "Period Start", "n": "period_start", "r": true, "sh": "First day of the accounting period, YYYY-MM-DD (for example 2025-04-01).", "t": "`$STRING`", "key$": "period_start", "index$": 8 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 9 }, "share_url": { "a": true, "fo": "uri", "h": "Share Url", "n": "share_url", "r": true, "sh": "A link to this result on taxley.co.uk.", "t": "`$STRING`", "key$": "share_url", "index$": 10 }, "taxable_profits": { "a": true, "h": "Taxable Profits", "n": "taxable_profits", "r": true, "sh": "Taxable total profits for the period in pounds, after tax adjustments and reliefs (CT600 box 315).", "t": "`$NUMBER`", "key$": "taxable_profits", "index$": 11 }, "tool": { "a": true, "h": "Tool", "n": "tool", "r": true, "t": "`$STRING`", "key$": "tool", "index$": 12 } }, "name": "corporation_tax", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["associated_companies", "close_investment_holding", "exempt_distributions", "period_end", "period_start", "taxable_profits"], "co": { "id": "POST /api/v1/tools/corporation-tax", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v1/tools/corporation-tax", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "tools" }, { "lit": "corporation-tax" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/tools/corporation-tax", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 0, "k": "query", "n": "associated_company", "or": "associated_companies", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": false, "k": "query", "n": "close_investment_holding", "or": "close_investment_holding", "r": false, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "ex": 0, "k": "query", "n": "exempt_distribution", "or": "exempt_distributions", "r": false, "t": "`$NUMBER`", "index$": 2 }, { "a": true, "ex": "2026-03-31", "k": "query", "n": "period_end", "or": "period_end", "r": true, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "2025-04-01", "k": "query", "n": "period_start", "or": "period_start", "r": true, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": 100000, "k": "query", "n": "taxable_profit", "or": "taxable_profits", "r": true, "t": "`$NUMBER`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/api/v1/tools/corporation-tax", "q": { "exist": ["period_end", "period_start", "taxable_profit"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "tools" }, { "lit": "corporation-tax" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "corporation_tax", "name__orig": "corporation_tax", "Name": "CorporationTax", "name_": "corporation_tax", "name-": "corporation-tax", "NAME": "CORPORATION_TAX", "index$": 5 }, { "active": true, "entity": "corporation_tax", "key$": "BasicCorporationTaxFlow", "kind": "basic", "name": "BasicCorporationTaxFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "corporation_tax_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "corporation_tax_ref01", "srcdatavar": "corporation_tax_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-corporation_tax_ref01" } }], "index$": 1 }] }, 'CorporationTax', { "POST /api/v1/tools/corporation-tax": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "period_start": { "type": "string", "format": "date", "description": "First day of the accounting period, YYYY-MM-DD (for example 2025-04-01).", "key$": "period_start" }, "period_end": { "type": "string", "format": "date", "description": "Last day of the accounting period, YYYY-MM-DD. No more than 12 months after the start.", "key$": "period_end" }, "taxable_profits": { "type": "number", "minimum": 0, "maximum": 100000000000, "description": "Taxable total profits for the period in pounds, after tax adjustments and reliefs (CT600 box 315).", "key$": "taxable_profits" }, "associated_companies": { "type": "integer", "minimum": 0, "maximum": 100, "default": 0, "description": "How many other companies are associated with this one (under common control) in the period. Leave at 0 for a standalone company.", "key$": "associated_companies" }, "exempt_distributions": { "type": "number", "minimum": 0, "maximum": 100000000000, "default": 0, "description": "Exempt dividends received from companies outside the company's 51% group (and not from a trading company owned by a consortium it belongs to) (CTA 2010 s.18L), in pounds, used only to decide the rate. They are not taxed.", "key$": "exempt_distributions" }, "close_investment_holding": { "type": "boolean", "default": false, "description": "True if the company is a close investment-holding company in the period (CTA 2010 s.18N): a close company is one unless, throughout the period, it exists wholly or mainly to trade commercially, to let land to people not connected with it, or to hold, lend to, administer or serve companies under its (or its parent's) control that do (or that hold such companies). It pays the main rate on all its profits, with no small profits rate or marginal relief. Leave false for most companies.", "key$": "close_investment_holding" } }, "required": ["period_start", "period_end", "taxable_profits"], "index$": 1 }, "example": { "period_start": "2025-04-01", "period_end": "2026-03-31", "taxable_profits": 100000, "associated_companies": 0 } } } }, "parameters": [] }, "GET /api/v1/tools/corporation-tax": { "protocol": "http", "parameters": [{ "name": "period_start", "in": "query", "required": true, "description": "First day of the accounting period, YYYY-MM-DD (for example 2025-04-01).", "schema": { "type": "string", "format": "date" }, "example": "2025-04-01", "index$": 0 }, { "name": "period_end", "in": "query", "required": true, "description": "Last day of the accounting period, YYYY-MM-DD. No more than 12 months after the start.", "schema": { "type": "string", "format": "date" }, "example": "2026-03-31", "index$": 1 }, { "name": "taxable_profits", "in": "query", "required": true, "description": "Taxable total profits for the period in pounds, after tax adjustments and reliefs (CT600 box 315).", "schema": { "type": "number", "minimum": 0, "maximum": 100000000000 }, "example": 100000, "index$": 2 }, { "name": "associated_companies", "in": "query", "required": false, "description": "How many other companies are associated with this one (under common control) in the period. Leave at 0 for a standalone company.", "schema": { "type": "integer", "minimum": 0, "maximum": 100, "default": 0 }, "index$": 3 }, { "name": "exempt_distributions", "in": "query", "required": false, "description": "Exempt dividends received from companies outside the company's 51% group (and not from a trading company owned by a consortium it belongs to) (CTA 2010 s.18L), in pounds, used only to decide the rate. They are not taxed.", "schema": { "type": "number", "minimum": 0, "maximum": 100000000000, "default": 0 }, "index$": 4 }, { "name": "close_investment_holding", "in": "query", "required": false, "description": "True if the company is a close investment-holding company in the period (CTA 2010 s.18N): a close company is one unless, throughout the period, it exists wholly or mainly to trade commercially, to let land to people not connected with it, or to hold, lend to, administer or serve companies under its (or its parent's) control that do (or that hold such companies). It pays the main rate on all its profits, with no small profits rate or marginal relief. Leave false for most companies.", "schema": { "type": "boolean", "default": false }, "index$": 5 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const corporation_tax_ref01_ent = client.CorporationTax();
        let corporation_tax_ref01_data = setup.data.new.corporation_tax['corporation_tax_ref01'];
        corporation_tax_ref01_data = (await corporation_tax_ref01_ent.create(corporation_tax_ref01_data)).data();
        (0, node_assert_1.default)(null != corporation_tax_ref01_data);
        // LOAD
        const corporation_tax_ref01_match_dt0 = {};
        const corporation_tax_ref01_data_dt0 = (await corporation_tax_ref01_ent.load(corporation_tax_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != corporation_tax_ref01_data_dt0);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/corporation_tax/CorporationTaxTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TaxleyCorporationTaxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['corporation_tax01', 'corporation_tax02', 'corporation_tax03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TAXLEY_CORPORATION_TAX_TEST_CORPORATION_TAX_ENTID': idmap,
        'TAXLEY_CORPORATION_TAX_TEST_LIVE': 'FALSE',
        'TAXLEY_CORPORATION_TAX_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['TAXLEY_CORPORATION_TAX_TEST_CORPORATION_TAX_ENTID'];
    const live = 'TRUE' === env.TAXLEY_CORPORATION_TAX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TAXLEY_CORPORATION_TAX_TEST_CORPORATION_TAX_ENTID'];
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
//# sourceMappingURL=CorporationTaxEntity.test.js.map