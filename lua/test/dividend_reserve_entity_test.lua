-- DividendReserve entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("taxley-corporation-tax_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

-- main.kit.test.live.strict is true (the default is true): a live
-- request that fails, or a live test missing an input it needs,
-- fails the test.
-- An account with no record for a test to read skips it either way.
local LIVE_STRICT = true


describe("DividendReserveEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:DividendReserve(nil)
    assert.is_not_nil(ent)
  end)

  it("should refuse an invalid request", function()
    local config = require("config_shared")()
    if type(config.feature) ~= "table" or config.feature.validate == nil then
      pending("feature not present in this SDK: validate")
      return
    end
    local client = sdk.test(nil, { feature = { validate = { active = true } } })
    local _, err = client:DividendReserve(nil):load({ ["dividends_already_paid"] = "x", ["profit_after_tax"] = 1, ["proposed_dividend"] = 1, ["retained_profits_brought_forward"] = 1 }, nil)
    assert.are.equal("validate_failed", type(err) == "table" and err.code or nil)
  end)

  it("should run basic flow", function()
    local setup = dividend_reserve_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "dividend_reserve." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    local client = setup.client

    -- CREATE
    local dividend_reserve_ref01_ent = client:DividendReserve(nil)
    local dividend_reserve_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.dividend_reserve"), "dividend_reserve_ref01"))

    local dividend_reserve_ref01_data_result, err = dividend_reserve_ref01_ent:create(dividend_reserve_ref01_data, nil)
    assert.is_nil(err)
    dividend_reserve_ref01_data = helpers.to_map(type(dividend_reserve_ref01_data_result) == 'table' and dividend_reserve_ref01_data_result.data_get and dividend_reserve_ref01_data_result:data_get() or dividend_reserve_ref01_data_result)
    assert.is_not_nil(dividend_reserve_ref01_data)

    -- LOAD
    local dividend_reserve_ref01_match_dt0 = {}
    local dividend_reserve_ref01_data_dt0_loaded, err = dividend_reserve_ref01_ent:load(dividend_reserve_ref01_match_dt0, nil)
    assert.is_nil(err)
    assert.is_not_nil(dividend_reserve_ref01_data_dt0_loaded)

  end)
end)

function dividend_reserve_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/dividend_reserve/DividendReserveTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read dividend_reserve test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "dividend_reserve01", "dividend_reserve02", "dividend_reserve03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
  local entid_env_raw = os.getenv("TAXLEY_CORPORATION_TAX_TEST_DIVIDEND_RESERVE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["TAXLEY_CORPORATION_TAX_TEST_DIVIDEND_RESERVE_ENTID"] = idmap,
    ["TAXLEY_CORPORATION_TAX_TEST_LIVE"] = "FALSE",
    ["TAXLEY_CORPORATION_TAX_TEST_EXPLAIN"] = "FALSE",
  })

  local idmap_resolved = helpers.to_map(
    env["TAXLEY_CORPORATION_TAX_TEST_DIVIDEND_RESERVE_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["TAXLEY_CORPORATION_TAX_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["TAXLEY_CORPORATION_TAX_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["TAXLEY_CORPORATION_TAX_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
