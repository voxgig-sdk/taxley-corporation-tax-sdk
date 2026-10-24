# TrivialBenefit entity test

require "minitest/autorun"
require "json"
require_relative "../TaxleyCorporationTax_sdk"
require_relative "runner"

class TrivialBenefitEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = TaxleyCorporationTaxSDK.test(nil, nil)
    ent = testsdk.TrivialBenefit(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = TaxleyCorporationTaxConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = TaxleyCorporationTaxSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.TrivialBenefit(nil).load({ "benefit_cost" => "x", "cash_or_cash_voucher" => true, "close_company_director" => true, "in_contract" => true, "qualifying_benefits_so_far" => 1, "reward_for_work" => true, "tax_year" => "x" }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = trivial_benefit_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "trivial_benefit." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    client = setup[:client]

    # CREATE
    trivial_benefit_ref01_ent = client.TrivialBenefit(nil)
    trivial_benefit_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.trivial_benefit"), "trivial_benefit_ref01"))

    trivial_benefit_ref01_data_result = trivial_benefit_ref01_ent.create(trivial_benefit_ref01_data, nil)
    trivial_benefit_ref01_data = Helpers.to_map(trivial_benefit_ref01_data_result.respond_to?(:data_get) ? trivial_benefit_ref01_data_result.data_get : trivial_benefit_ref01_data_result)
    assert !trivial_benefit_ref01_data.nil?

    # LOAD
    trivial_benefit_ref01_match_dt0 = {}
    trivial_benefit_ref01_data_dt0_loaded = trivial_benefit_ref01_ent.load(trivial_benefit_ref01_match_dt0, nil)
    assert !trivial_benefit_ref01_data_dt0_loaded.nil?

  end
end

def trivial_benefit_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "trivial_benefit", "TrivialBenefitTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = TaxleyCorporationTaxSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["trivial_benefit01", "trivial_benefit02", "trivial_benefit03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["TAXLEY_CORPORATION_TAX_TEST_TRIVIAL_BENEFIT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "TAXLEY_CORPORATION_TAX_TEST_TRIVIAL_BENEFIT_ENTID" => idmap,
    "TAXLEY_CORPORATION_TAX_TEST_LIVE" => "FALSE",
    "TAXLEY_CORPORATION_TAX_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["TAXLEY_CORPORATION_TAX_TEST_TRIVIAL_BENEFIT_ENTID"])
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
