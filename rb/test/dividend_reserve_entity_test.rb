# DividendReserve entity test

require "minitest/autorun"
require "json"
require_relative "../TaxleyCorporationTax_sdk"
require_relative "runner"

class DividendReserveEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = TaxleyCorporationTaxSDK.test(nil, nil)
    ent = testsdk.DividendReserve(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = TaxleyCorporationTaxConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = TaxleyCorporationTaxSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.DividendReserve(nil).load({ "dividends_already_paid" => "x", "profit_after_tax" => 1, "proposed_dividend" => 1, "retained_profits_brought_forward" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = dividend_reserve_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "dividend_reserve." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    client = setup[:client]

    # CREATE
    dividend_reserve_ref01_ent = client.DividendReserve(nil)
    dividend_reserve_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.dividend_reserve"), "dividend_reserve_ref01"))

    dividend_reserve_ref01_data_result = dividend_reserve_ref01_ent.create(dividend_reserve_ref01_data, nil)
    dividend_reserve_ref01_data = Helpers.to_map(dividend_reserve_ref01_data_result.respond_to?(:data_get) ? dividend_reserve_ref01_data_result.data_get : dividend_reserve_ref01_data_result)
    assert !dividend_reserve_ref01_data.nil?

    # LOAD
    dividend_reserve_ref01_match_dt0 = {}
    dividend_reserve_ref01_data_dt0_loaded = dividend_reserve_ref01_ent.load(dividend_reserve_ref01_match_dt0, nil)
    assert !dividend_reserve_ref01_data_dt0_loaded.nil?

  end
end

def dividend_reserve_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "dividend_reserve", "DividendReserveTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = TaxleyCorporationTaxSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["dividend_reserve01", "dividend_reserve02", "dividend_reserve03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["TAXLEY_CORPORATION_TAX_TEST_DIVIDEND_RESERVE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "TAXLEY_CORPORATION_TAX_TEST_DIVIDEND_RESERVE_ENTID" => idmap,
    "TAXLEY_CORPORATION_TAX_TEST_LIVE" => "FALSE",
    "TAXLEY_CORPORATION_TAX_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["TAXLEY_CORPORATION_TAX_TEST_DIVIDEND_RESERVE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["TAXLEY_CORPORATION_TAX_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
      },
      extra || {},
    ])
    client = TaxleyCorporationTaxSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["TAXLEY_CORPORATION_TAX_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["TAXLEY_CORPORATION_TAX_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
