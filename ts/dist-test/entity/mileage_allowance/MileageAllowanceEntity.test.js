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
(0, node_test_1.describe)('MileageAllowanceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TAXLEY_CORPORATION_TAX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TAXLEY_CORPORATION_TAX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TaxleyCorporationTaxSDK.test();
        const ent = testsdk.MileageAllowance();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.TaxleyCorporationTaxSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.MileageAllowance().load({ "business_mile": "x", "employer_payment": 1, "tax_year": "x", "vehicle": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TAXLEY_CORPORATION_TAX_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'mileage_allowance.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "business_miles": { "a": true, "h": "Business Miles", "n": "business_miles", "r": true, "sh": "Total qualifying business miles in this vehicle category during the tax year.", "t": "`$INTEGER`", "key$": "business_miles", "index$": 0 }, "calculated_by": { "a": true, "h": "Calculated By", "n": "calculated_by", "r": true, "t": "`$STRING`", "key$": "calculated_by", "index$": 1 }, "disclaimer": { "a": true, "h": "Disclaimer", "n": "disclaimer", "r": true, "t": "`$STRING`", "key$": "disclaimer", "index$": 2 }, "employer_payment": { "a": true, "h": "Employer Payment", "n": "employer_payment", "r": true, "sh": "Total mileage allowance paid by the company for those miles, in pounds.", "t": "`$NUMBER`", "key$": "employer_payment", "index$": 3 }, "input": { "a": true, "h": "Input", "n": "input", "r": true, "sh": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).", "t": "`$OBJECT`", "key$": "input", "index$": 4 }, "page_url": { "a": true, "fo": "uri", "h": "Page Url", "n": "page_url", "r": true, "t": "`$STRING`", "key$": "page_url", "index$": 5 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 6 }, "share_url": { "a": true, "fo": "uri", "h": "Share Url", "n": "share_url", "r": true, "sh": "A link to this result on taxley.co.uk.", "t": "`$STRING`", "key$": "share_url", "index$": 7 }, "tax_year": { "a": true, "h": "Tax Year", "n": "tax_year", "r": true, "sh": "UK tax year: 2025-26, 2026-27 or 2027-28.", "t": "`$STRING`", "key$": "tax_year", "index$": 8 }, "tool": { "a": true, "h": "Tool", "n": "tool", "r": true, "t": "`$STRING`", "key$": "tool", "index$": 9 }, "vehicle": { "a": true, "h": "Vehicle", "n": "vehicle", "r": true, "sh": "The employee-owned vehicle used for business travel: car_van, motorcycle or bicycle.", "t": "`$STRING`", "key$": "vehicle", "index$": 10 } }, "name": "mileage_allowance", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["business_miles", "employer_payment", "tax_year", "vehicle"], "co": { "id": "POST /api/v1/tools/mileage-allowance", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v1/tools/mileage-allowance", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "tools" }, { "lit": "mileage-allowance" }], "t": { "req": { "business_miles": "`reqdata.business_mile`", "employer_payment": "`reqdata.employer_payment`", "tax_year": "`reqdata.tax_year`", "vehicle": "`reqdata.vehicle`" }, "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/tools/mileage-allowance", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 12000, "k": "query", "n": "business_mile", "or": "business_miles", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 4200, "k": "query", "n": "employer_payment", "or": "employer_payment", "r": true, "t": "`$NUMBER`", "index$": 1 }, { "a": true, "ex": "2025-26", "k": "query", "n": "tax_year", "or": "tax_year", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "car_van", "k": "query", "n": "vehicle", "or": "vehicle", "r": true, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/api/v1/tools/mileage-allowance", "q": { "exist": ["business_mile", "employer_payment", "tax_year", "vehicle"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "tools" }, { "lit": "mileage-allowance" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "mileage_allowance", "name__orig": "mileage_allowance", "Name": "MileageAllowance", "name_": "mileage_allowance", "name-": "mileage-allowance", "NAME": "MILEAGE_ALLOWANCE", "index$": 13 }, { "active": true, "entity": "mileage_allowance", "key$": "BasicMileageAllowanceFlow", "kind": "basic", "name": "BasicMileageAllowanceFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "mileage_allowance_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "mileage_allowance_ref01", "srcdatavar": "mileage_allowance_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-mileage_allowance_ref01" } }], "index$": 1 }] }, 'MileageAllowance', { "POST /api/v1/tools/mileage-allowance": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "tax_year": { "type": "string", "enum": ["2025-26", "2026-27", "2027-28"], "description": "UK tax year: 2025-26, 2026-27 or 2027-28. The car and van rate changes on 6 April 2026.", "key$": "tax_year" }, "vehicle": { "type": "string", "enum": ["car_van", "motorcycle", "bicycle"], "description": "The employee-owned vehicle used for business travel: car_van, motorcycle or bicycle.", "key$": "vehicle" }, "business_miles": { "type": "integer", "minimum": 0, "description": "Total qualifying business miles in this vehicle category during the tax year.", "key$": "business_miles" }, "employer_payment": { "type": "number", "minimum": 0, "description": "Total mileage allowance paid by the company for those miles, in pounds. Enter 0 if nothing was paid.", "key$": "employer_payment" } }, "required": ["tax_year", "vehicle", "business_miles", "employer_payment"], "additionalProperties": false, "index$": 1 }, "example": { "tax_year": "2026-27", "vehicle": "car_van", "business_miles": 12000, "employer_payment": 4200 } } } }, "parameters": [] }, "GET /api/v1/tools/mileage-allowance": { "protocol": "http", "parameters": [{ "name": "tax_year", "in": "query", "required": true, "description": "UK tax year: 2025-26, 2026-27 or 2027-28. The car and van rate changes on 6 April 2026.", "schema": { "type": "string", "enum": ["2025-26", "2026-27", "2027-28"] }, "example": "2025-26", "index$": 0 }, { "name": "vehicle", "in": "query", "required": true, "description": "The employee-owned vehicle used for business travel: car_van, motorcycle or bicycle.", "schema": { "type": "string", "enum": ["car_van", "motorcycle", "bicycle"] }, "example": "car_van", "index$": 1 }, { "name": "business_miles", "in": "query", "required": true, "description": "Total qualifying business miles in this vehicle category during the tax year.", "schema": { "type": "integer", "minimum": 0 }, "example": 12000, "index$": 2 }, { "name": "employer_payment", "in": "query", "required": true, "description": "Total mileage allowance paid by the company for those miles, in pounds. Enter 0 if nothing was paid.", "schema": { "type": "number", "minimum": 0 }, "example": 4200, "index$": 3 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const mileage_allowance_ref01_ent = client.MileageAllowance();
        let mileage_allowance_ref01_data = setup.data.new.mileage_allowance['mileage_allowance_ref01'];
        mileage_allowance_ref01_data = (await mileage_allowance_ref01_ent.create(mileage_allowance_ref01_data)).data();
        (0, node_assert_1.default)(null != mileage_allowance_ref01_data);
        // LOAD
        const mileage_allowance_ref01_match_dt0 = {};
        const mileage_allowance_ref01_data_dt0 = (await mileage_allowance_ref01_ent.load(mileage_allowance_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != mileage_allowance_ref01_data_dt0);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/mileage_allowance/MileageAllowanceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TaxleyCorporationTaxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['mileage_allowance01', 'mileage_allowance02', 'mileage_allowance03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TAXLEY_CORPORATION_TAX_TEST_MILEAGE_ALLOWANCE_ENTID': idmap,
        'TAXLEY_CORPORATION_TAX_TEST_LIVE': 'FALSE',
        'TAXLEY_CORPORATION_TAX_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['TAXLEY_CORPORATION_TAX_TEST_MILEAGE_ALLOWANCE_ENTID'];
    const live = 'TRUE' === env.TAXLEY_CORPORATION_TAX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TAXLEY_CORPORATION_TAX_TEST_MILEAGE_ALLOWANCE_ENTID'];
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
//# sourceMappingURL=MileageAllowanceEntity.test.js.map