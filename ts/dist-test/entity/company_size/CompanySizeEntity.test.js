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
(0, node_test_1.describe)('CompanySizeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TAXLEY_CORPORATION_TAX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TAXLEY_CORPORATION_TAX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TaxleyCorporationTaxSDK.test();
        const ent = testsdk.CompanySize();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.TaxleyCorporationTaxSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.CompanySize().load({ "balance_sheet_total": "x", "employee": 1, "period_end": "x", "period_start": "x", "turnover": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TAXLEY_CORPORATION_TAX_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'company_size.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "balance_sheet_total": { "a": true, "h": "Balance Sheet Total", "n": "balance_sheet_total", "r": true, "sh": "Balance sheet total: gross assets (fixed plus current assets, before liabilities) at the year end, in pounds.", "t": "`$NUMBER`", "key$": "balance_sheet_total", "index$": 0 }, "calculated_by": { "a": true, "h": "Calculated By", "n": "calculated_by", "r": true, "t": "`$STRING`", "key$": "calculated_by", "index$": 1 }, "disclaimer": { "a": true, "h": "Disclaimer", "n": "disclaimer", "r": true, "t": "`$STRING`", "key$": "disclaimer", "index$": 2 }, "employees": { "a": true, "h": "Employees", "n": "employees", "r": true, "sh": "Average number of employees in the year (monthly headcounts added up, divided by the number of months).", "t": "`$NUMBER`", "key$": "employees", "index$": 3 }, "first_year": { "a": true, "h": "First Year", "n": "first_year", "r": false, "sh": "True if this is the company's first financial year (then this year alone decides its size).", "t": "`$BOOLEAN`", "key$": "first_year", "index$": 4 }, "input": { "a": true, "h": "Input", "n": "input", "r": true, "sh": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).", "t": "`$OBJECT`", "key$": "input", "index$": 5 }, "page_url": { "a": true, "fo": "uri", "h": "Page Url", "n": "page_url", "r": true, "t": "`$STRING`", "key$": "page_url", "index$": 6 }, "period_end": { "a": true, "fo": "date", "h": "Period End", "n": "period_end", "r": true, "sh": "Last day of the financial year, YYYY-MM-DD.", "t": "`$STRING`", "key$": "period_end", "index$": 7 }, "period_start": { "a": true, "fo": "date", "h": "Period Start", "n": "period_start", "r": true, "sh": "First day of the financial year (accounts period), YYYY-MM-DD.", "t": "`$STRING`", "key$": "period_start", "index$": 8 }, "prev_balance_sheet_total": { "a": true, "h": "Prev Balance Sheet Total", "n": "prev_balance_sheet_total", "r": false, "sh": "Optional: last year's balance sheet total (gross assets), in pounds.", "t": "`$NUMBER`", "key$": "prev_balance_sheet_total", "index$": 9 }, "prev_employees": { "a": true, "h": "Prev Employees", "n": "prev_employees", "r": false, "sh": "Optional: last year's average number of employees.", "t": "`$NUMBER`", "key$": "prev_employees", "index$": 10 }, "prev_size": { "a": true, "h": "Prev Size", "n": "prev_size", "r": false, "sh": "Optional: what the company qualified as last year — micro, small (not micro) or medium_or_large (not small).", "t": "`$STRING`", "key$": "prev_size", "index$": 11 }, "prev_turnover": { "a": true, "h": "Prev Turnover", "n": "prev_turnover", "r": false, "sh": "Optional: last financial year's turnover, in pounds (assumed a 12-month year).", "t": "`$NUMBER`", "key$": "prev_turnover", "index$": 12 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 13 }, "share_url": { "a": true, "fo": "uri", "h": "Share Url", "n": "share_url", "r": true, "sh": "A link to this result on taxley.co.uk.", "t": "`$STRING`", "key$": "share_url", "index$": 14 }, "tool": { "a": true, "h": "Tool", "n": "tool", "r": true, "t": "`$STRING`", "key$": "tool", "index$": 15 }, "turnover": { "a": true, "h": "Turnover", "n": "turnover", "r": true, "sh": "Turnover for the financial year, in pounds.", "t": "`$NUMBER`", "key$": "turnover", "index$": 16 } }, "name": "company_size", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["balance_sheet_total", "employees", "first_year", "period_end", "period_start", "prev_balance_sheet_total", "prev_employees", "prev_size", "prev_turnover", "turnover"], "co": { "id": "POST /api/v1/tools/company-size", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v1/tools/company-size", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "tools" }, { "lit": "company-size" }], "t": { "req": { "balance_sheet_total": "`reqdata.balance_sheet_total`", "employees": "`reqdata.employee`", "first_year": "`reqdata.first_year`", "period_end": "`reqdata.period_end`", "period_start": "`reqdata.period_start`", "prev_balance_sheet_total": "`reqdata.prev_balance_sheet_total`", "prev_employees": "`reqdata.prev_employee`", "prev_size": "`reqdata.prev_size`", "prev_turnover": "`reqdata.prev_turnover`", "turnover": "`reqdata.turnover`" }, "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/tools/company-size", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 420000, "k": "query", "n": "balance_sheet_total", "or": "balance_sheet_total", "r": true, "t": "`$NUMBER`", "index$": 0 }, { "a": true, "ex": 6, "k": "query", "n": "employee", "or": "employees", "r": true, "t": "`$NUMBER`", "index$": 1 }, { "a": true, "k": "query", "n": "first_year", "or": "first_year", "r": false, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "ex": "2026-04-30", "k": "query", "n": "period_end", "or": "period_end", "r": true, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "2025-05-01", "k": "query", "n": "period_start", "or": "period_start", "r": true, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "prev_balance_sheet_total", "or": "prev_balance_sheet_total", "r": false, "t": "`$NUMBER`", "index$": 5 }, { "a": true, "k": "query", "n": "prev_employee", "or": "prev_employees", "r": false, "t": "`$NUMBER`", "index$": 6 }, { "a": true, "k": "query", "n": "prev_size", "or": "prev_size", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "prev_turnover", "or": "prev_turnover", "r": false, "t": "`$NUMBER`", "index$": 8 }, { "a": true, "ex": 850000, "k": "query", "n": "turnover", "or": "turnover", "r": true, "t": "`$NUMBER`", "index$": 9 }] }, "k": "http", "m": "GET", "o": "/api/v1/tools/company-size", "q": { "exist": ["balance_sheet_total", "employee", "period_end", "period_start", "turnover"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "tools" }, { "lit": "company-size" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "company_size", "name__orig": "company_size", "Name": "CompanySize", "name_": "company_size", "name-": "company-size", "NAME": "COMPANY_SIZE", "index$": 3 }, { "active": true, "entity": "company_size", "key$": "BasicCompanySizeFlow", "kind": "basic", "name": "BasicCompanySizeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "company_size_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "company_size_ref01", "srcdatavar": "company_size_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-company_size_ref01" } }], "index$": 1 }] }, 'CompanySize', { "POST /api/v1/tools/company-size": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "period_start": { "type": "string", "format": "date", "description": "First day of the financial year (accounts period), YYYY-MM-DD. The limits depend on this date.", "key$": "period_start" }, "period_end": { "type": "string", "format": "date", "description": "Last day of the financial year, YYYY-MM-DD. At most 18 months after the start.", "key$": "period_end" }, "turnover": { "type": "number", "minimum": 0, "description": "Turnover for the financial year, in pounds.", "key$": "turnover" }, "balance_sheet_total": { "type": "number", "minimum": 0, "description": "Balance sheet total: gross assets (fixed plus current assets, before liabilities) at the year end, in pounds.", "key$": "balance_sheet_total" }, "employees": { "type": "number", "minimum": 0, "description": "Average number of employees in the year (monthly headcounts added up, divided by the number of months).", "key$": "employees" }, "first_year": { "type": "boolean", "description": "True if this is the company's first financial year (then this year alone decides its size).", "key$": "first_year" }, "prev_turnover": { "type": "number", "minimum": 0, "description": "Optional: last financial year's turnover, in pounds (assumed a 12-month year).", "key$": "prev_turnover" }, "prev_balance_sheet_total": { "type": "number", "minimum": 0, "description": "Optional: last year's balance sheet total (gross assets), in pounds.", "key$": "prev_balance_sheet_total" }, "prev_employees": { "type": "number", "minimum": 0, "description": "Optional: last year's average number of employees.", "key$": "prev_employees" }, "prev_size": { "type": "string", "enum": ["micro", "small", "medium_or_large"], "description": "Optional: what the company qualified as last year — micro, small (not micro) or medium_or_large (not small). Used by the two-year rule when this year's result differs from last year's figures.", "key$": "prev_size" } }, "required": ["period_start", "period_end", "turnover", "balance_sheet_total", "employees"], "additionalProperties": false, "index$": 1 }, "example": { "period_start": "2025-05-01", "period_end": "2026-04-30", "turnover": 850000, "balance_sheet_total": 420000, "employees": 6, "first_year": false, "prev_turnover": 780000, "prev_balance_sheet_total": 390000, "prev_employees": 5 } } } }, "parameters": [] }, "GET /api/v1/tools/company-size": { "protocol": "http", "parameters": [{ "name": "period_start", "in": "query", "required": true, "description": "First day of the financial year (accounts period), YYYY-MM-DD. The limits depend on this date.", "schema": { "type": "string", "format": "date" }, "example": "2025-05-01", "index$": 0 }, { "name": "period_end", "in": "query", "required": true, "description": "Last day of the financial year, YYYY-MM-DD. At most 18 months after the start.", "schema": { "type": "string", "format": "date" }, "example": "2026-04-30", "index$": 1 }, { "name": "turnover", "in": "query", "required": true, "description": "Turnover for the financial year, in pounds.", "schema": { "type": "number", "minimum": 0 }, "example": 850000, "index$": 2 }, { "name": "balance_sheet_total", "in": "query", "required": true, "description": "Balance sheet total: gross assets (fixed plus current assets, before liabilities) at the year end, in pounds.", "schema": { "type": "number", "minimum": 0 }, "example": 420000, "index$": 3 }, { "name": "employees", "in": "query", "required": true, "description": "Average number of employees in the year (monthly headcounts added up, divided by the number of months).", "schema": { "type": "number", "minimum": 0 }, "example": 6, "index$": 4 }, { "name": "first_year", "in": "query", "required": false, "description": "True if this is the company's first financial year (then this year alone decides its size).", "schema": { "type": "boolean" }, "index$": 5 }, { "name": "prev_turnover", "in": "query", "required": false, "description": "Optional: last financial year's turnover, in pounds (assumed a 12-month year).", "schema": { "type": "number", "minimum": 0 }, "index$": 6 }, { "name": "prev_balance_sheet_total", "in": "query", "required": false, "description": "Optional: last year's balance sheet total (gross assets), in pounds.", "schema": { "type": "number", "minimum": 0 }, "index$": 7 }, { "name": "prev_employees", "in": "query", "required": false, "description": "Optional: last year's average number of employees.", "schema": { "type": "number", "minimum": 0 }, "index$": 8 }, { "name": "prev_size", "in": "query", "required": false, "description": "Optional: what the company qualified as last year — micro, small (not micro) or medium_or_large (not small). Used by the two-year rule when this year's result differs from last year's figures.", "schema": { "type": "string", "enum": ["micro", "small", "medium_or_large"] }, "index$": 9 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const company_size_ref01_ent = client.CompanySize();
        let company_size_ref01_data = setup.data.new.company_size['company_size_ref01'];
        company_size_ref01_data = (await company_size_ref01_ent.create(company_size_ref01_data)).data();
        (0, node_assert_1.default)(null != company_size_ref01_data);
        // LOAD
        const company_size_ref01_match_dt0 = {};
        const company_size_ref01_data_dt0 = (await company_size_ref01_ent.load(company_size_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != company_size_ref01_data_dt0);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/company_size/CompanySizeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TaxleyCorporationTaxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['company_size01', 'company_size02', 'company_size03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TAXLEY_CORPORATION_TAX_TEST_COMPANY_SIZE_ENTID': idmap,
        'TAXLEY_CORPORATION_TAX_TEST_LIVE': 'FALSE',
        'TAXLEY_CORPORATION_TAX_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['TAXLEY_CORPORATION_TAX_TEST_COMPANY_SIZE_ENTID'];
    const live = 'TRUE' === env.TAXLEY_CORPORATION_TAX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TAXLEY_CORPORATION_TAX_TEST_COMPANY_SIZE_ENTID'];
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
//# sourceMappingURL=CompanySizeEntity.test.js.map