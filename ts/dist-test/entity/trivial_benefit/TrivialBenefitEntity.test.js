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
(0, node_test_1.describe)('TrivialBenefitEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TAXLEY_CORPORATION_TAX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TAXLEY_CORPORATION_TAX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TaxleyCorporationTaxSDK.test();
        const ent = testsdk.TrivialBenefit();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.TaxleyCorporationTaxSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.TrivialBenefit().load({ "benefit_cost": "x", "cash_or_cash_voucher": true, "close_company_director": true, "in_contract": true, "qualifying_benefits_so_far": 1, "reward_for_work": true, "tax_year": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TAXLEY_CORPORATION_TAX_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'trivial_benefit.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "benefit_cost": { "a": true, "h": "Benefit Cost", "n": "benefit_cost", "r": true, "sh": "Cost to the company of this individual benefit, in pounds.", "t": "`$NUMBER`", "key$": "benefit_cost", "index$": 0 }, "calculated_by": { "a": true, "h": "Calculated By", "n": "calculated_by", "r": true, "t": "`$STRING`", "key$": "calculated_by", "index$": 1 }, "cash_or_cash_voucher": { "a": true, "h": "Cash Or Cash Voucher", "n": "cash_or_cash_voucher", "r": true, "sh": "True if the benefit is cash or a voucher exchangeable for cash.", "t": "`$BOOLEAN`", "key$": "cash_or_cash_voucher", "index$": 2 }, "close_company_director": { "a": true, "h": "Close Company Director", "n": "close_company_director", "r": true, "sh": "True if the recipient is a director or office holder of a close company.", "t": "`$BOOLEAN`", "key$": "close_company_director", "index$": 3 }, "disclaimer": { "a": true, "h": "Disclaimer", "n": "disclaimer", "r": true, "t": "`$STRING`", "key$": "disclaimer", "index$": 4 }, "in_contract": { "a": true, "h": "In Contract", "n": "in_contract", "r": true, "sh": "True if the benefit is promised in the employment contract or other contractual terms.", "t": "`$BOOLEAN`", "key$": "in_contract", "index$": 5 }, "input": { "a": true, "h": "Input", "n": "input", "r": true, "sh": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).", "t": "`$OBJECT`", "key$": "input", "index$": 6 }, "page_url": { "a": true, "fo": "uri", "h": "Page Url", "n": "page_url", "r": true, "t": "`$STRING`", "key$": "page_url", "index$": 7 }, "qualifying_benefits_so_far": { "a": true, "h": "Qualifying Benefits So Far", "n": "qualifying_benefits_so_far", "r": true, "sh": "For a close-company director, total cost in pounds of earlier qualifying trivial benefits from this employer in the tax year.", "t": "`$NUMBER`", "key$": "qualifying_benefits_so_far", "index$": 8 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 9 }, "reward_for_work": { "a": true, "h": "Reward For Work", "n": "reward_for_work", "r": true, "sh": "True if the benefit rewards the employee’s work or performance.", "t": "`$BOOLEAN`", "key$": "reward_for_work", "index$": 10 }, "share_url": { "a": true, "fo": "uri", "h": "Share Url", "n": "share_url", "r": true, "sh": "A link to this result on taxley.co.uk.", "t": "`$STRING`", "key$": "share_url", "index$": 11 }, "tax_year": { "a": true, "h": "Tax Year", "n": "tax_year", "r": true, "sh": "UK tax year: 2025-26, 2026-27 or 2027-28.", "t": "`$STRING`", "key$": "tax_year", "index$": 12 }, "tool": { "a": true, "h": "Tool", "n": "tool", "r": true, "t": "`$STRING`", "key$": "tool", "index$": 13 } }, "name": "trivial_benefit", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["benefit_cost", "cash_or_cash_voucher", "close_company_director", "in_contract", "qualifying_benefits_so_far", "reward_for_work", "tax_year"], "co": { "id": "POST /api/v1/tools/trivial-benefits", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v1/tools/trivial-benefits", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "tools" }, { "lit": "trivial-benefits" }], "t": { "req": { "benefit_cost": "`reqdata.benefit_cost`", "cash_or_cash_voucher": "`reqdata.cash_or_cash_voucher`", "close_company_director": "`reqdata.close_company_director`", "in_contract": "`reqdata.in_contract`", "qualifying_benefits_so_far": "`reqdata.qualifying_benefits_so_far`", "reward_for_work": "`reqdata.reward_for_work`", "tax_year": "`reqdata.tax_year`" }, "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/tools/trivial-benefits", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 40, "k": "query", "n": "benefit_cost", "or": "benefit_cost", "r": true, "t": "`$NUMBER`", "index$": 0 }, { "a": true, "ex": false, "k": "query", "n": "cash_or_cash_voucher", "or": "cash_or_cash_voucher", "r": true, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "ex": true, "k": "query", "n": "close_company_director", "or": "close_company_director", "r": true, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "ex": false, "k": "query", "n": "in_contract", "or": "in_contract", "r": true, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "ex": 240, "k": "query", "n": "qualifying_benefits_so_far", "or": "qualifying_benefits_so_far", "r": true, "t": "`$NUMBER`", "index$": 4 }, { "a": true, "ex": false, "k": "query", "n": "reward_for_work", "or": "reward_for_work", "r": true, "t": "`$BOOLEAN`", "index$": 5 }, { "a": true, "ex": "2025-26", "k": "query", "n": "tax_year", "or": "tax_year", "r": true, "t": "`$STRING`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/api/v1/tools/trivial-benefits", "q": { "exist": ["benefit_cost", "cash_or_cash_voucher", "close_company_director", "in_contract", "qualifying_benefits_so_far", "reward_for_work", "tax_year"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "tools" }, { "lit": "trivial-benefits" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "trivial_benefit", "name__orig": "trivial_benefit", "Name": "TrivialBenefit", "name_": "trivial_benefit", "name-": "trivial-benefit", "NAME": "TRIVIAL_BENEFIT", "index$": 17 }, { "active": true, "entity": "trivial_benefit", "key$": "BasicTrivialBenefitFlow", "kind": "basic", "name": "BasicTrivialBenefitFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "trivial_benefit_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "trivial_benefit_ref01", "srcdatavar": "trivial_benefit_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-trivial_benefit_ref01" } }], "index$": 1 }] }, 'TrivialBenefit', { "POST /api/v1/tools/trivial-benefits": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "tax_year": { "type": "string", "enum": ["2025-26", "2026-27", "2027-28"], "description": "UK tax year: 2025-26, 2026-27 or 2027-28.", "key$": "tax_year" }, "benefit_cost": { "type": "number", "minimum": 0.01, "description": "Cost to the company of this individual benefit, in pounds.", "key$": "benefit_cost" }, "cash_or_cash_voucher": { "type": "boolean", "description": "True if the benefit is cash or a voucher exchangeable for cash.", "key$": "cash_or_cash_voucher" }, "reward_for_work": { "type": "boolean", "description": "True if the benefit rewards the employee’s work or performance.", "key$": "reward_for_work" }, "in_contract": { "type": "boolean", "description": "True if the benefit is promised in the employment contract or other contractual terms.", "key$": "in_contract" }, "close_company_director": { "type": "boolean", "description": "True if the recipient is a director or office holder of a close company.", "key$": "close_company_director" }, "qualifying_benefits_so_far": { "type": "number", "minimum": 0, "description": "For a close-company director, total cost in pounds of earlier qualifying trivial benefits from this employer in the tax year.", "key$": "qualifying_benefits_so_far" } }, "required": ["tax_year", "benefit_cost", "cash_or_cash_voucher", "reward_for_work", "in_contract", "close_company_director", "qualifying_benefits_so_far"], "additionalProperties": false, "index$": 1 }, "example": { "tax_year": "2026-27", "benefit_cost": 40, "cash_or_cash_voucher": false, "reward_for_work": false, "in_contract": false, "close_company_director": true, "qualifying_benefits_so_far": 240 } } } }, "parameters": [] }, "GET /api/v1/tools/trivial-benefits": { "protocol": "http", "parameters": [{ "name": "tax_year", "in": "query", "required": true, "description": "UK tax year: 2025-26, 2026-27 or 2027-28.", "schema": { "type": "string", "enum": ["2025-26", "2026-27", "2027-28"] }, "example": "2025-26", "index$": 0 }, { "name": "benefit_cost", "in": "query", "required": true, "description": "Cost to the company of this individual benefit, in pounds.", "schema": { "type": "number", "minimum": 0.01 }, "example": 40, "index$": 1 }, { "name": "cash_or_cash_voucher", "in": "query", "required": true, "description": "True if the benefit is cash or a voucher exchangeable for cash.", "schema": { "type": "boolean" }, "example": false, "index$": 2 }, { "name": "reward_for_work", "in": "query", "required": true, "description": "True if the benefit rewards the employee’s work or performance.", "schema": { "type": "boolean" }, "example": false, "index$": 3 }, { "name": "in_contract", "in": "query", "required": true, "description": "True if the benefit is promised in the employment contract or other contractual terms.", "schema": { "type": "boolean" }, "example": false, "index$": 4 }, { "name": "close_company_director", "in": "query", "required": true, "description": "True if the recipient is a director or office holder of a close company.", "schema": { "type": "boolean" }, "example": true, "index$": 5 }, { "name": "qualifying_benefits_so_far", "in": "query", "required": true, "description": "For a close-company director, total cost in pounds of earlier qualifying trivial benefits from this employer in the tax year.", "schema": { "type": "number", "minimum": 0 }, "example": 240, "index$": 6 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const trivial_benefit_ref01_ent = client.TrivialBenefit();
        let trivial_benefit_ref01_data = setup.data.new.trivial_benefit['trivial_benefit_ref01'];
        trivial_benefit_ref01_data = (await trivial_benefit_ref01_ent.create(trivial_benefit_ref01_data)).data();
        (0, node_assert_1.default)(null != trivial_benefit_ref01_data);
        // LOAD
        const trivial_benefit_ref01_match_dt0 = {};
        const trivial_benefit_ref01_data_dt0 = (await trivial_benefit_ref01_ent.load(trivial_benefit_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != trivial_benefit_ref01_data_dt0);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/trivial_benefit/TrivialBenefitTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TaxleyCorporationTaxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['trivial_benefit01', 'trivial_benefit02', 'trivial_benefit03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TAXLEY_CORPORATION_TAX_TEST_TRIVIAL_BENEFIT_ENTID': idmap,
        'TAXLEY_CORPORATION_TAX_TEST_LIVE': 'FALSE',
        'TAXLEY_CORPORATION_TAX_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['TAXLEY_CORPORATION_TAX_TEST_TRIVIAL_BENEFIT_ENTID'];
    const live = 'TRUE' === env.TAXLEY_CORPORATION_TAX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TAXLEY_CORPORATION_TAX_TEST_TRIVIAL_BENEFIT_ENTID'];
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
//# sourceMappingURL=TrivialBenefitEntity.test.js.map