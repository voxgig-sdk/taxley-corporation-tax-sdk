# TaxleyCorporationTax SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module TaxleyCorporationTaxFeatures
  def self.make_feature(name)
    case name
    when "base"
      TaxleyCorporationTaxBaseFeature.new
    when "ratelimit"
      TaxleyCorporationTaxRatelimitFeature.new
    when "retry"
      TaxleyCorporationTaxRetryFeature.new
    when "test"
      TaxleyCorporationTaxTestFeature.new
    when "timeout"
      TaxleyCorporationTaxTimeoutFeature.new
    else
      TaxleyCorporationTaxBaseFeature.new
    end
  end
end
