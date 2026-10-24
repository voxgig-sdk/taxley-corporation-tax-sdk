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
(0, node_test_1.describe)('HomeOfficeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TAXLEY_CORPORATION_TAX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TAXLEY_CORPORATION_TAX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TaxleyCorporationTaxSDK.test();
        const ent = testsdk.HomeOffice();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.TaxleyCorporationTaxSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.HomeOffice().load({ "actual_additional_cost": "x", "frequency": "x", "period": 1, "tax_year": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TAXLEY_CORPORATION_TAX_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'home_office.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "actual_additional_costs": { "a": true, "h": "Actual Additional Costs", "n": "actual_additional_costs", "r": false, "sh": "Optional total reasonable additional household costs caused by working at home, in pounds, supported by records.", "t": "`$NUMBER`", "key$": "actual_additional_costs", "index$": 0 }, "calculated_by": { "a": true, "h": "Calculated By", "n": "calculated_by", "r": true, "t": "`$STRING`", "key$": "calculated_by", "index$": 1 }, "disclaimer": { "a": true, "h": "Disclaimer", "n": "disclaimer", "r": true, "t": "`$STRING`", "key$": "disclaimer", "index$": 2 }, "frequency": { "a": true, "h": "Frequency", "n": "frequency", "r": true, "sh": "Whether to use HMRC’s £6 weekly rate or £26 monthly rate.", "t": "`$STRING`", "key$": "frequency", "index$": 3 }, "input": { "a": true, "h": "Input", "n": "input", "r": true, "sh": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).", "t": "`$OBJECT`", "key$": "input", "index$": 4 }, "page_url": { "a": true, "fo": "uri", "h": "Page Url", "n": "page_url", "r": true, "t": "`$STRING`", "key$": "page_url", "index$": 5 }, "periods": { "a": true, "h": "Periods", "n": "periods", "r": true, "sh": "Number of weeks or months of regular homeworking in the tax year; no more than 52 weeks or 12 months.", "t": "`$INTEGER`", "key$": "periods", "index$": 6 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 7 }, "share_url": { "a": true, "fo": "uri", "h": "Share Url", "n": "share_url", "r": true, "sh": "A link to this result on taxley.co.uk.", "t": "`$STRING`", "key$": "share_url", "index$": 8 }, "tax_year": { "a": true, "h": "Tax Year", "n": "tax_year", "r": true, "sh": "UK tax year: 2025-26, 2026-27 or 2027-28.", "t": "`$STRING`", "key$": "tax_year", "index$": 9 }, "tool": { "a": true, "h": "Tool", "n": "tool", "r": true, "t": "`$STRING`", "key$": "tool", "index$": 10 } }, "name": "home_office", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["actual_additional_costs", "frequency", "periods", "tax_year"], "co": { "id": "POST /api/v1/tools/home-office", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v1/tools/home-office", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "tools" }, { "lit": "home-office" }], "t": { "req": { "actual_additional_costs": "`reqdata.actual_additional_cost`", "frequency": "`reqdata.frequency`", "periods": "`reqdata.period`", "tax_year": "`reqdata.tax_year`" }, "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/tools/home-office", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "actual_additional_cost", "or": "actual_additional_costs", "r": false, "t": "`$NUMBER`", "index$": 0 }, { "a": true, "ex": "weekly", "k": "query", "n": "frequency", "or": "frequency", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 12, "k": "query", "n": "period", "or": "periods", "r": true, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": "2025-26", "k": "query", "n": "tax_year", "or": "tax_year", "r": true, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/api/v1/tools/home-office", "q": { "exist": ["frequency", "period", "tax_year"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "tools" }, { "lit": "home-office" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "home_office", "name__orig": "home_office", "Name": "HomeOffice", "name_": "home_office", "name-": "home-office", "NAME": "HOME_OFFICE", "index$": 10 }, { "active": true, "entity": "home_office", "key$": "BasicHomeOfficeFlow", "kind": "basic", "name": "BasicHomeOfficeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "home_office_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "home_office_ref01", "srcdatavar": "home_office_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-home_office_ref01" } }], "index$": 1 }] }, 'HomeOffice', { "POST /api/v1/tools/home-office": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "tax_year": { "type": "string", "enum": ["2025-26", "2026-27", "2027-28"], "description": "UK tax year: 2025-26, 2026-27 or 2027-28.", "key$": "tax_year" }, "frequency": { "type": "string", "enum": ["weekly", "monthly"], "description": "Whether to use HMRC’s £6 weekly rate or £26 monthly rate.", "key$": "frequency" }, "periods": { "type": "integer", "minimum": 1, "maximum": 52, "description": "Number of weeks or months of regular homeworking in the tax year; no more than 52 weeks or 12 months.", "key$": "periods" }, "actual_additional_costs": { "type": "number", "minimum": 0, "description": "Optional total reasonable additional household costs caused by working at home, in pounds, supported by records.", "key$": "actual_additional_costs" } }, "required": ["tax_year", "frequency", "periods"], "additionalProperties": false, "index$": 1 }, "example": { "tax_year": "2026-27", "frequency": "monthly", "periods": 12, "actual_additional_costs": 480 } } } }, "parameters": [] }, "GET /api/v1/tools/home-office": { "protocol": "http", "parameters": [{ "name": "tax_year", "in": "query", "required": true, "description": "UK tax year: 2025-26, 2026-27 or 2027-28.", "schema": { "type": "string", "enum": ["2025-26", "2026-27", "2027-28"] }, "example": "2025-26", "index$": 0 }, { "name": "frequency", "in": "query", "required": true, "description": "Whether to use HMRC’s £6 weekly rate or £26 monthly rate.", "schema": { "type": "string", "enum": ["weekly", "monthly"] }, "example": "weekly", "index$": 1 }, { "name": "periods", "in": "query", "required": true, "description": "Number of weeks or months of regular homeworking in the tax year; no more than 52 weeks or 12 months.", "schema": { "type": "integer", "minimum": 1, "maximum": 52 }, "example": 12, "index$": 2 }, { "name": "actual_additional_costs", "in": "query", "required": false, "description": "Optional total reasonable additional household costs caused by working at home, in pounds, supported by records.", "schema": { "type": "number", "minimum": 0 }, "index$": 3 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const home_office_ref01_ent = client.HomeOffice();
        let home_office_ref01_data = setup.data.new.home_office['home_office_ref01'];
        home_office_ref01_data = (await home_office_ref01_ent.create(home_office_ref01_data)).data();
        (0, node_assert_1.default)(null != home_office_ref01_data);
        // LOAD
        const home_office_ref01_match_dt0 = {};
        const home_office_ref01_data_dt0 = (await home_office_ref01_ent.load(home_office_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != home_office_ref01_data_dt0);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/home_office/HomeOfficeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TaxleyCorporationTaxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['home_office01', 'home_office02', 'home_office03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TAXLEY_CORPORATION_TAX_TEST_HOME_OFFICE_ENTID': idmap,
        'TAXLEY_CORPORATION_TAX_TEST_LIVE': 'FALSE',
        'TAXLEY_CORPORATION_TAX_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['TAXLEY_CORPORATION_TAX_TEST_HOME_OFFICE_ENTID'];
    const live = 'TRUE' === env.TAXLEY_CORPORATION_TAX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TAXLEY_CORPORATION_TAX_TEST_HOME_OFFICE_ENTID'];
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
//# sourceMappingURL=HomeOfficeEntity.test.js.map