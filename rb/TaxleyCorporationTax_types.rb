# frozen_string_literal: true

# Typed models for the TaxleyCorporationTax SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# CapitalAllowance entity data model.
#
# @!attribute [rw] aia_shared
#   @return [Float, nil]
#
# @!attribute [rw] calculated_by
#   @return [String]
#
# @!attribute [rw] disclaimer
#   @return [String]
#
# @!attribute [rw] full_expensed_disposals
#   @return [Float, nil]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] main_pool_brought_forward
#   @return [Float, nil]
#
# @!attribute [rw] main_pool_disposals
#   @return [Float, nil]
#
# @!attribute [rw] new_main_plant
#   @return [Float, nil]
#
# @!attribute [rw] new_special_rate
#   @return [Float, nil]
#
# @!attribute [rw] other_cars_high_co2
#   @return [Float, nil]
#
# @!attribute [rw] other_cars_low_co2
#   @return [Float, nil]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_start
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] special_pool_brought_forward
#   @return [Float, nil]
#
# @!attribute [rw] spend_date
#   @return [String, nil]
#
# @!attribute [rw] tool
#   @return [String]
#
# @!attribute [rw] used_main_plant
#   @return [Float, nil]
#
# @!attribute [rw] used_special_rate
#   @return [Float, nil]
#
# @!attribute [rw] zero_emission_cars
#   @return [Float, nil]
CapitalAllowance = Struct.new(
  :aia_shared,
  :calculated_by,
  :disclaimer,
  :full_expensed_disposals,
  :input,
  :main_pool_brought_forward,
  :main_pool_disposals,
  :new_main_plant,
  :new_special_rate,
  :other_cars_high_co2,
  :other_cars_low_co2,
  :page_url,
  :period_end,
  :period_start,
  :result,
  :share_url,
  :special_pool_brought_forward,
  :spend_date,
  :tool,
  :used_main_plant,
  :used_special_rate,
  :zero_emission_cars,
  keyword_init: true
)

# Request payload for CapitalAllowance#load.
#
# @!attribute [rw] aia_shared
#   @return [Float, nil]
#
# @!attribute [rw] full_expensed_disposal
#   @return [Float, nil]
#
# @!attribute [rw] main_pool_brought_forward
#   @return [Float, nil]
#
# @!attribute [rw] main_pool_disposal
#   @return [Float, nil]
#
# @!attribute [rw] new_main_plant
#   @return [Float, nil]
#
# @!attribute [rw] new_special_rate
#   @return [Float, nil]
#
# @!attribute [rw] other_cars_high_co2
#   @return [Float, nil]
#
# @!attribute [rw] other_cars_low_co2
#   @return [Float, nil]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_start
#   @return [String]
#
# @!attribute [rw] special_pool_brought_forward
#   @return [Float, nil]
#
# @!attribute [rw] spend_date
#   @return [String, nil]
#
# @!attribute [rw] used_main_plant
#   @return [Float, nil]
#
# @!attribute [rw] used_special_rate
#   @return [Float, nil]
#
# @!attribute [rw] zero_emission_car
#   @return [Float, nil]
CapitalAllowanceLoadMatch = Struct.new(
  :aia_shared,
  :full_expensed_disposal,
  :main_pool_brought_forward,
  :main_pool_disposal,
  :new_main_plant,
  :new_special_rate,
  :other_cars_high_co2,
  :other_cars_low_co2,
  :period_end,
  :period_start,
  :special_pool_brought_forward,
  :spend_date,
  :used_main_plant,
  :used_special_rate,
  :zero_emission_car,
  keyword_init: true
)

# Request payload for CapitalAllowance#create.
#
# @!attribute [rw] aia_shared
#   @return [Float, nil]
#
# @!attribute [rw] full_expensed_disposals
#   @return [Float, nil]
#
# @!attribute [rw] main_pool_brought_forward
#   @return [Float, nil]
#
# @!attribute [rw] main_pool_disposals
#   @return [Float, nil]
#
# @!attribute [rw] new_main_plant
#   @return [Float, nil]
#
# @!attribute [rw] new_special_rate
#   @return [Float, nil]
#
# @!attribute [rw] other_cars_high_co2
#   @return [Float, nil]
#
# @!attribute [rw] other_cars_low_co2
#   @return [Float, nil]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_start
#   @return [String]
#
# @!attribute [rw] special_pool_brought_forward
#   @return [Float, nil]
#
# @!attribute [rw] spend_date
#   @return [String, nil]
#
# @!attribute [rw] used_main_plant
#   @return [Float, nil]
#
# @!attribute [rw] used_special_rate
#   @return [Float, nil]
#
# @!attribute [rw] zero_emission_cars
#   @return [Float, nil]
CapitalAllowanceCreateData = Struct.new(
  :aia_shared,
  :full_expensed_disposals,
  :main_pool_brought_forward,
  :main_pool_disposals,
  :new_main_plant,
  :new_special_rate,
  :other_cars_high_co2,
  :other_cars_low_co2,
  :period_end,
  :period_start,
  :special_pool_brought_forward,
  :spend_date,
  :used_main_plant,
  :used_special_rate,
  :zero_emission_cars,
  keyword_init: true
)

# ChargeableGain entity data model.
#
# @!attribute [rw] acquisition_cost
#   @return [Float]
#
# @!attribute [rw] acquisition_costs
#   @return [Float, nil]
#
# @!attribute [rw] acquisition_date
#   @return [String]
#
# @!attribute [rw] asset_type
#   @return [String]
#
# @!attribute [rw] calculated_by
#   @return [String]
#
# @!attribute [rw] disclaimer
#   @return [String]
#
# @!attribute [rw] disposal_costs
#   @return [Float, nil]
#
# @!attribute [rw] disposal_date
#   @return [String]
#
# @!attribute [rw] enhancement_cost
#   @return [Float, nil]
#
# @!attribute [rw] enhancement_date
#   @return [String, nil]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] proceeds
#   @return [Float]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] sba_claimed
#   @return [Float, nil]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] tool
#   @return [String]
ChargeableGain = Struct.new(
  :acquisition_cost,
  :acquisition_costs,
  :acquisition_date,
  :asset_type,
  :calculated_by,
  :disclaimer,
  :disposal_costs,
  :disposal_date,
  :enhancement_cost,
  :enhancement_date,
  :input,
  :page_url,
  :proceeds,
  :result,
  :sba_claimed,
  :share_url,
  :tool,
  keyword_init: true
)

# Request payload for ChargeableGain#load.
#
# @!attribute [rw] acquisition_cost
#   @return [Float, nil]
#
# @!attribute [rw] acquisition_date
#   @return [String]
#
# @!attribute [rw] asset_type
#   @return [String]
#
# @!attribute [rw] disposal_cost
#   @return [Float, nil]
#
# @!attribute [rw] disposal_date
#   @return [String]
#
# @!attribute [rw] enhancement_cost
#   @return [Float, nil]
#
# @!attribute [rw] enhancement_date
#   @return [String, nil]
#
# @!attribute [rw] proceed
#   @return [Float]
#
# @!attribute [rw] sba_claimed
#   @return [Float, nil]
ChargeableGainLoadMatch = Struct.new(
  :acquisition_cost,
  :acquisition_date,
  :asset_type,
  :disposal_cost,
  :disposal_date,
  :enhancement_cost,
  :enhancement_date,
  :proceed,
  :sba_claimed,
  keyword_init: true
)

# Request payload for ChargeableGain#create.
#
# @!attribute [rw] acquisition_cost
#   @return [Float]
#
# @!attribute [rw] acquisition_costs
#   @return [Float, nil]
#
# @!attribute [rw] acquisition_date
#   @return [String]
#
# @!attribute [rw] asset_type
#   @return [String]
#
# @!attribute [rw] disposal_costs
#   @return [Float, nil]
#
# @!attribute [rw] disposal_date
#   @return [String]
#
# @!attribute [rw] enhancement_cost
#   @return [Float, nil]
#
# @!attribute [rw] enhancement_date
#   @return [String, nil]
#
# @!attribute [rw] proceeds
#   @return [Float]
#
# @!attribute [rw] sba_claimed
#   @return [Float, nil]
ChargeableGainCreateData = Struct.new(
  :acquisition_cost,
  :acquisition_costs,
  :acquisition_date,
  :asset_type,
  :disposal_costs,
  :disposal_date,
  :enhancement_cost,
  :enhancement_date,
  :proceeds,
  :sba_claimed,
  keyword_init: true
)

# CompanyCar entity data model.
#
# @!attribute [rw] acquisition
#   @return [String, nil]
#
# @!attribute [rw] annual_lease_cost
#   @return [Float, nil]
#
# @!attribute [rw] associated_companies
#   @return [Integer, nil]
#
# @!attribute [rw] calculated_by
#   @return [String]
#
# @!attribute [rw] capital_contribution
#   @return [Float, nil]
#
# @!attribute [rw] co2_gkm
#   @return [Integer, nil]
#
# @!attribute [rw] company_profits
#   @return [Float, nil]
#
# @!attribute [rw] disclaimer
#   @return [String]
#
# @!attribute [rw] electric_range_miles
#   @return [Integer, nil]
#
# @!attribute [rw] fuel_type
#   @return [String]
#
# @!attribute [rw] income_tax_rate
#   @return [String]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] lease_started
#   @return [String, nil]
#
# @!attribute [rw] list_price
#   @return [Float]
#
# @!attribute [rw] months_available
#   @return [Integer, nil]
#
# @!attribute [rw] new_car
#   @return [Boolean, nil]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] phev_easement
#   @return [Boolean, nil]
#
# @!attribute [rw] price_paid
#   @return [Float, nil]
#
# @!attribute [rw] private_fuel
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] tax_year
#   @return [String]
#
# @!attribute [rw] tool
#   @return [String]
CompanyCar = Struct.new(
  :acquisition,
  :annual_lease_cost,
  :associated_companies,
  :calculated_by,
  :capital_contribution,
  :co2_gkm,
  :company_profits,
  :disclaimer,
  :electric_range_miles,
  :fuel_type,
  :income_tax_rate,
  :input,
  :lease_started,
  :list_price,
  :months_available,
  :new_car,
  :page_url,
  :phev_easement,
  :price_paid,
  :private_fuel,
  :result,
  :share_url,
  :tax_year,
  :tool,
  keyword_init: true
)

# Request payload for CompanyCar#load.
#
# @!attribute [rw] acquisition
#   @return [String, nil]
#
# @!attribute [rw] annual_lease_cost
#   @return [Float, nil]
#
# @!attribute [rw] associated_company
#   @return [Integer, nil]
#
# @!attribute [rw] capital_contribution
#   @return [Float, nil]
#
# @!attribute [rw] co2_gkm
#   @return [Integer, nil]
#
# @!attribute [rw] company_profit
#   @return [Float, nil]
#
# @!attribute [rw] electric_range_mile
#   @return [Integer, nil]
#
# @!attribute [rw] fuel_type
#   @return [String]
#
# @!attribute [rw] income_tax_rate
#   @return [String]
#
# @!attribute [rw] lease_started
#   @return [String, nil]
#
# @!attribute [rw] list_price
#   @return [Float]
#
# @!attribute [rw] months_available
#   @return [Integer, nil]
#
# @!attribute [rw] new_car
#   @return [Boolean, nil]
#
# @!attribute [rw] phev_easement
#   @return [Boolean, nil]
#
# @!attribute [rw] price_paid
#   @return [Float, nil]
#
# @!attribute [rw] private_fuel
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_year
#   @return [String]
CompanyCarLoadMatch = Struct.new(
  :acquisition,
  :annual_lease_cost,
  :associated_company,
  :capital_contribution,
  :co2_gkm,
  :company_profit,
  :electric_range_mile,
  :fuel_type,
  :income_tax_rate,
  :lease_started,
  :list_price,
  :months_available,
  :new_car,
  :phev_easement,
  :price_paid,
  :private_fuel,
  :tax_year,
  keyword_init: true
)

# Request payload for CompanyCar#create.
#
# @!attribute [rw] acquisition
#   @return [String, nil]
#
# @!attribute [rw] annual_lease_cost
#   @return [Float, nil]
#
# @!attribute [rw] associated_companies
#   @return [Integer, nil]
#
# @!attribute [rw] capital_contribution
#   @return [Float, nil]
#
# @!attribute [rw] co2_gkm
#   @return [Integer, nil]
#
# @!attribute [rw] company_profits
#   @return [Float, nil]
#
# @!attribute [rw] electric_range_miles
#   @return [Integer, nil]
#
# @!attribute [rw] fuel_type
#   @return [String]
#
# @!attribute [rw] income_tax_rate
#   @return [String]
#
# @!attribute [rw] lease_started
#   @return [String, nil]
#
# @!attribute [rw] list_price
#   @return [Float]
#
# @!attribute [rw] months_available
#   @return [Integer, nil]
#
# @!attribute [rw] new_car
#   @return [Boolean, nil]
#
# @!attribute [rw] phev_easement
#   @return [Boolean, nil]
#
# @!attribute [rw] price_paid
#   @return [Float, nil]
#
# @!attribute [rw] private_fuel
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_year
#   @return [String]
CompanyCarCreateData = Struct.new(
  :acquisition,
  :annual_lease_cost,
  :associated_companies,
  :capital_contribution,
  :co2_gkm,
  :company_profits,
  :electric_range_miles,
  :fuel_type,
  :income_tax_rate,
  :lease_started,
  :list_price,
  :months_available,
  :new_car,
  :phev_easement,
  :price_paid,
  :private_fuel,
  :tax_year,
  keyword_init: true
)

# CompanySize entity data model.
#
# @!attribute [rw] balance_sheet_total
#   @return [Float]
#
# @!attribute [rw] calculated_by
#   @return [String]
#
# @!attribute [rw] disclaimer
#   @return [String]
#
# @!attribute [rw] employees
#   @return [Float]
#
# @!attribute [rw] first_year
#   @return [Boolean, nil]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_start
#   @return [String]
#
# @!attribute [rw] prev_balance_sheet_total
#   @return [Float, nil]
#
# @!attribute [rw] prev_employees
#   @return [Float, nil]
#
# @!attribute [rw] prev_size
#   @return [String, nil]
#
# @!attribute [rw] prev_turnover
#   @return [Float, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] tool
#   @return [String]
#
# @!attribute [rw] turnover
#   @return [Float]
CompanySize = Struct.new(
  :balance_sheet_total,
  :calculated_by,
  :disclaimer,
  :employees,
  :first_year,
  :input,
  :page_url,
  :period_end,
  :period_start,
  :prev_balance_sheet_total,
  :prev_employees,
  :prev_size,
  :prev_turnover,
  :result,
  :share_url,
  :tool,
  :turnover,
  keyword_init: true
)

# Request payload for CompanySize#load.
#
# @!attribute [rw] balance_sheet_total
#   @return [Float]
#
# @!attribute [rw] employee
#   @return [Float]
#
# @!attribute [rw] first_year
#   @return [Boolean, nil]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_start
#   @return [String]
#
# @!attribute [rw] prev_balance_sheet_total
#   @return [Float, nil]
#
# @!attribute [rw] prev_employee
#   @return [Float, nil]
#
# @!attribute [rw] prev_size
#   @return [String, nil]
#
# @!attribute [rw] prev_turnover
#   @return [Float, nil]
#
# @!attribute [rw] turnover
#   @return [Float]
CompanySizeLoadMatch = Struct.new(
  :balance_sheet_total,
  :employee,
  :first_year,
  :period_end,
  :period_start,
  :prev_balance_sheet_total,
  :prev_employee,
  :prev_size,
  :prev_turnover,
  :turnover,
  keyword_init: true
)

# Request payload for CompanySize#create.
#
# @!attribute [rw] balance_sheet_total
#   @return [Float]
#
# @!attribute [rw] employees
#   @return [Float]
#
# @!attribute [rw] first_year
#   @return [Boolean, nil]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_start
#   @return [String]
#
# @!attribute [rw] prev_balance_sheet_total
#   @return [Float, nil]
#
# @!attribute [rw] prev_employees
#   @return [Float, nil]
#
# @!attribute [rw] prev_size
#   @return [String, nil]
#
# @!attribute [rw] prev_turnover
#   @return [Float, nil]
#
# @!attribute [rw] turnover
#   @return [Float]
CompanySizeCreateData = Struct.new(
  :balance_sheet_total,
  :employees,
  :first_year,
  :period_end,
  :period_start,
  :prev_balance_sheet_total,
  :prev_employees,
  :prev_size,
  :prev_turnover,
  :turnover,
  keyword_init: true
)

# CompanyVan entity data model.
#
# @!attribute [rw] associated_companies
#   @return [Integer, nil]
#
# @!attribute [rw] calculated_by
#   @return [String]
#
# @!attribute [rw] company_profits
#   @return [Float, nil]
#
# @!attribute [rw] disclaimer
#   @return [String]
#
# @!attribute [rw] income_tax_rate
#   @return [String]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] months_available
#   @return [Integer, nil]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] price_paid
#   @return [Float, nil]
#
# @!attribute [rw] private_fuel
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] tax_year
#   @return [String]
#
# @!attribute [rw] tool
#   @return [String]
#
# @!attribute [rw] zero_emission
#   @return [Boolean, nil]
CompanyVan = Struct.new(
  :associated_companies,
  :calculated_by,
  :company_profits,
  :disclaimer,
  :income_tax_rate,
  :input,
  :months_available,
  :page_url,
  :price_paid,
  :private_fuel,
  :result,
  :share_url,
  :tax_year,
  :tool,
  :zero_emission,
  keyword_init: true
)

# Request payload for CompanyVan#load.
#
# @!attribute [rw] associated_company
#   @return [Integer, nil]
#
# @!attribute [rw] company_profit
#   @return [Float, nil]
#
# @!attribute [rw] income_tax_rate
#   @return [String]
#
# @!attribute [rw] months_available
#   @return [Integer, nil]
#
# @!attribute [rw] price_paid
#   @return [Float, nil]
#
# @!attribute [rw] private_fuel
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_year
#   @return [String]
#
# @!attribute [rw] zero_emission
#   @return [Boolean, nil]
CompanyVanLoadMatch = Struct.new(
  :associated_company,
  :company_profit,
  :income_tax_rate,
  :months_available,
  :price_paid,
  :private_fuel,
  :tax_year,
  :zero_emission,
  keyword_init: true
)

# Request payload for CompanyVan#create.
#
# @!attribute [rw] associated_companies
#   @return [Integer, nil]
#
# @!attribute [rw] company_profits
#   @return [Float, nil]
#
# @!attribute [rw] income_tax_rate
#   @return [String]
#
# @!attribute [rw] months_available
#   @return [Integer, nil]
#
# @!attribute [rw] price_paid
#   @return [Float, nil]
#
# @!attribute [rw] private_fuel
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_year
#   @return [String]
#
# @!attribute [rw] zero_emission
#   @return [Boolean, nil]
CompanyVanCreateData = Struct.new(
  :associated_companies,
  :company_profits,
  :income_tax_rate,
  :months_available,
  :price_paid,
  :private_fuel,
  :tax_year,
  :zero_emission,
  keyword_init: true
)

# CorporationTax entity data model.
#
# @!attribute [rw] associated_companies
#   @return [Integer, nil]
#
# @!attribute [rw] calculated_by
#   @return [String]
#
# @!attribute [rw] close_investment_holding
#   @return [Boolean, nil]
#
# @!attribute [rw] disclaimer
#   @return [String]
#
# @!attribute [rw] exempt_distributions
#   @return [Float, nil]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_start
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] taxable_profits
#   @return [Float]
#
# @!attribute [rw] tool
#   @return [String]
CorporationTax = Struct.new(
  :associated_companies,
  :calculated_by,
  :close_investment_holding,
  :disclaimer,
  :exempt_distributions,
  :input,
  :page_url,
  :period_end,
  :period_start,
  :result,
  :share_url,
  :taxable_profits,
  :tool,
  keyword_init: true
)

# Request payload for CorporationTax#load.
#
# @!attribute [rw] associated_company
#   @return [Integer, nil]
#
# @!attribute [rw] close_investment_holding
#   @return [Boolean, nil]
#
# @!attribute [rw] exempt_distribution
#   @return [Float, nil]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_start
#   @return [String]
#
# @!attribute [rw] taxable_profit
#   @return [Float]
CorporationTaxLoadMatch = Struct.new(
  :associated_company,
  :close_investment_holding,
  :exempt_distribution,
  :period_end,
  :period_start,
  :taxable_profit,
  keyword_init: true
)

# Request payload for CorporationTax#create.
#
# @!attribute [rw] associated_companies
#   @return [Integer, nil]
#
# @!attribute [rw] close_investment_holding
#   @return [Boolean, nil]
#
# @!attribute [rw] exempt_distributions
#   @return [Float, nil]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_start
#   @return [String]
#
# @!attribute [rw] taxable_profits
#   @return [Float]
CorporationTaxCreateData = Struct.new(
  :associated_companies,
  :close_investment_holding,
  :exempt_distributions,
  :period_end,
  :period_start,
  :taxable_profits,
  keyword_init: true
)

# Deadline entity data model.
#
# @!attribute [rw] calculated_by
#   @return [String]
#
# @!attribute [rw] disclaimer
#   @return [String]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_start
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] tool
#   @return [String]
Deadline = Struct.new(
  :calculated_by,
  :disclaimer,
  :input,
  :page_url,
  :period_end,
  :period_start,
  :result,
  :share_url,
  :tool,
  keyword_init: true
)

# Request payload for Deadline#load.
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_start
#   @return [String, nil]
DeadlineLoadMatch = Struct.new(
  :period_end,
  :period_start,
  keyword_init: true
)

# Request payload for Deadline#create.
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_start
#   @return [String, nil]
DeadlineCreateData = Struct.new(
  :period_end,
  :period_start,
  keyword_init: true
)

# DirectorPension entity data model.
#
# @!attribute [rw] associated_companies
#   @return [Integer, nil]
#
# @!attribute [rw] calculated_by
#   @return [String]
#
# @!attribute [rw] company_profit
#   @return [Float]
#
# @!attribute [rw] contribution
#   @return [Float]
#
# @!attribute [rw] director_only_employee
#   @return [Boolean, nil]
#
# @!attribute [rw] disclaimer
#   @return [String]
#
# @!attribute [rw] dividends
#   @return [Float, nil]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] money_purchase_allowance
#   @return [Boolean, nil]
#
# @!attribute [rw] other_income
#   @return [Float, nil]
#
# @!attribute [rw] other_pension_contributions
#   @return [Float, nil]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] salary
#   @return [Float, nil]
#
# @!attribute [rw] scottish_taxpayer
#   @return [Boolean, nil]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] tax_year
#   @return [String, nil]
#
# @!attribute [rw] tool
#   @return [String]
DirectorPension = Struct.new(
  :associated_companies,
  :calculated_by,
  :company_profit,
  :contribution,
  :director_only_employee,
  :disclaimer,
  :dividends,
  :input,
  :money_purchase_allowance,
  :other_income,
  :other_pension_contributions,
  :page_url,
  :result,
  :salary,
  :scottish_taxpayer,
  :share_url,
  :tax_year,
  :tool,
  keyword_init: true
)

# Request payload for DirectorPension#load.
#
# @!attribute [rw] associated_company
#   @return [Integer, nil]
#
# @!attribute [rw] company_profit
#   @return [Float]
#
# @!attribute [rw] contribution
#   @return [Float]
#
# @!attribute [rw] director_only_employee
#   @return [Boolean, nil]
#
# @!attribute [rw] dividend
#   @return [Float, nil]
#
# @!attribute [rw] money_purchase_allowance
#   @return [Boolean, nil]
#
# @!attribute [rw] other_income
#   @return [Float, nil]
#
# @!attribute [rw] other_pension_contribution
#   @return [Float, nil]
#
# @!attribute [rw] salary
#   @return [Float, nil]
#
# @!attribute [rw] scottish_taxpayer
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_year
#   @return [String, nil]
DirectorPensionLoadMatch = Struct.new(
  :associated_company,
  :company_profit,
  :contribution,
  :director_only_employee,
  :dividend,
  :money_purchase_allowance,
  :other_income,
  :other_pension_contribution,
  :salary,
  :scottish_taxpayer,
  :tax_year,
  keyword_init: true
)

# Request payload for DirectorPension#create.
#
# @!attribute [rw] associated_companies
#   @return [Integer, nil]
#
# @!attribute [rw] company_profit
#   @return [Float]
#
# @!attribute [rw] contribution
#   @return [Float]
#
# @!attribute [rw] director_only_employee
#   @return [Boolean, nil]
#
# @!attribute [rw] dividends
#   @return [Float, nil]
#
# @!attribute [rw] money_purchase_allowance
#   @return [Boolean, nil]
#
# @!attribute [rw] other_income
#   @return [Float, nil]
#
# @!attribute [rw] other_pension_contributions
#   @return [Float, nil]
#
# @!attribute [rw] salary
#   @return [Float, nil]
#
# @!attribute [rw] scottish_taxpayer
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_year
#   @return [String, nil]
DirectorPensionCreateData = Struct.new(
  :associated_companies,
  :company_profit,
  :contribution,
  :director_only_employee,
  :dividends,
  :money_purchase_allowance,
  :other_income,
  :other_pension_contributions,
  :salary,
  :scottish_taxpayer,
  :tax_year,
  keyword_init: true
)

# DirectorsLoan entity data model.
#
# @!attribute [rw] benefit_closing_balance
#   @return [Float, nil]
#
# @!attribute [rw] benefit_interest_paid
#   @return [Float, nil]
#
# @!attribute [rw] benefit_maximum_balance
#   @return [Float, nil]
#
# @!attribute [rw] benefit_opening_balance
#   @return [Float, nil]
#
# @!attribute [rw] benefit_tax_year
#   @return [String, nil]
#
# @!attribute [rw] benefit_whole_months
#   @return [Integer, nil]
#
# @!attribute [rw] calculated_by
#   @return [String]
#
# @!attribute [rw] disclaimer
#   @return [String]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] loan_made_on
#   @return [String, nil]
#
# @!attribute [rw] marginal_income_tax_rate
#   @return [Float, nil]
#
# @!attribute [rw] outstanding
#   @return [Float]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] repaid_within_9_months
#   @return [Float, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] tool
#   @return [String]
DirectorsLoan = Struct.new(
  :benefit_closing_balance,
  :benefit_interest_paid,
  :benefit_maximum_balance,
  :benefit_opening_balance,
  :benefit_tax_year,
  :benefit_whole_months,
  :calculated_by,
  :disclaimer,
  :input,
  :loan_made_on,
  :marginal_income_tax_rate,
  :outstanding,
  :page_url,
  :period_end,
  :repaid_within_9_months,
  :result,
  :share_url,
  :tool,
  keyword_init: true
)

# Request payload for DirectorsLoan#load.
#
# @!attribute [rw] benefit_closing_balance
#   @return [Float, nil]
#
# @!attribute [rw] benefit_interest_paid
#   @return [Float, nil]
#
# @!attribute [rw] benefit_maximum_balance
#   @return [Float, nil]
#
# @!attribute [rw] benefit_opening_balance
#   @return [Float, nil]
#
# @!attribute [rw] benefit_tax_year
#   @return [String, nil]
#
# @!attribute [rw] benefit_whole_month
#   @return [Integer, nil]
#
# @!attribute [rw] loan_made_on
#   @return [String, nil]
#
# @!attribute [rw] marginal_income_tax_rate
#   @return [Float, nil]
#
# @!attribute [rw] outstanding
#   @return [Float]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] repaid_within_9_month
#   @return [Float, nil]
DirectorsLoanLoadMatch = Struct.new(
  :benefit_closing_balance,
  :benefit_interest_paid,
  :benefit_maximum_balance,
  :benefit_opening_balance,
  :benefit_tax_year,
  :benefit_whole_month,
  :loan_made_on,
  :marginal_income_tax_rate,
  :outstanding,
  :period_end,
  :repaid_within_9_month,
  keyword_init: true
)

# Request payload for DirectorsLoan#create.
#
# @!attribute [rw] benefit_closing_balance
#   @return [Float, nil]
#
# @!attribute [rw] benefit_interest_paid
#   @return [Float, nil]
#
# @!attribute [rw] benefit_maximum_balance
#   @return [Float, nil]
#
# @!attribute [rw] benefit_opening_balance
#   @return [Float, nil]
#
# @!attribute [rw] benefit_tax_year
#   @return [String, nil]
#
# @!attribute [rw] benefit_whole_months
#   @return [Integer, nil]
#
# @!attribute [rw] loan_made_on
#   @return [String, nil]
#
# @!attribute [rw] marginal_income_tax_rate
#   @return [Float, nil]
#
# @!attribute [rw] outstanding
#   @return [Float]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] repaid_within_9_months
#   @return [Float, nil]
DirectorsLoanCreateData = Struct.new(
  :benefit_closing_balance,
  :benefit_interest_paid,
  :benefit_maximum_balance,
  :benefit_opening_balance,
  :benefit_tax_year,
  :benefit_whole_months,
  :loan_made_on,
  :marginal_income_tax_rate,
  :outstanding,
  :period_end,
  :repaid_within_9_months,
  keyword_init: true
)

# DividendReserve entity data model.
#
# @!attribute [rw] calculated_by
#   @return [String]
#
# @!attribute [rw] disclaimer
#   @return [String]
#
# @!attribute [rw] dividends_already_paid
#   @return [Float]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] profit_after_tax
#   @return [Float]
#
# @!attribute [rw] proposed_dividend
#   @return [Float]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] retained_profits_brought_forward
#   @return [Float]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] tool
#   @return [String]
DividendReserve = Struct.new(
  :calculated_by,
  :disclaimer,
  :dividends_already_paid,
  :input,
  :page_url,
  :profit_after_tax,
  :proposed_dividend,
  :result,
  :retained_profits_brought_forward,
  :share_url,
  :tool,
  keyword_init: true
)

# Request payload for DividendReserve#load.
#
# @!attribute [rw] dividends_already_paid
#   @return [Float]
#
# @!attribute [rw] profit_after_tax
#   @return [Float]
#
# @!attribute [rw] proposed_dividend
#   @return [Float]
#
# @!attribute [rw] retained_profits_brought_forward
#   @return [Float]
DividendReserveLoadMatch = Struct.new(
  :dividends_already_paid,
  :profit_after_tax,
  :proposed_dividend,
  :retained_profits_brought_forward,
  keyword_init: true
)

# Request payload for DividendReserve#create.
#
# @!attribute [rw] dividends_already_paid
#   @return [Float]
#
# @!attribute [rw] profit_after_tax
#   @return [Float]
#
# @!attribute [rw] proposed_dividend
#   @return [Float]
#
# @!attribute [rw] retained_profits_brought_forward
#   @return [Float]
DividendReserveCreateData = Struct.new(
  :dividends_already_paid,
  :profit_after_tax,
  :proposed_dividend,
  :retained_profits_brought_forward,
  keyword_init: true
)

# HomeOffice entity data model.
#
# @!attribute [rw] actual_additional_costs
#   @return [Float, nil]
#
# @!attribute [rw] calculated_by
#   @return [String]
#
# @!attribute [rw] disclaimer
#   @return [String]
#
# @!attribute [rw] frequency
#   @return [String]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] periods
#   @return [Integer]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] tax_year
#   @return [String]
#
# @!attribute [rw] tool
#   @return [String]
HomeOffice = Struct.new(
  :actual_additional_costs,
  :calculated_by,
  :disclaimer,
  :frequency,
  :input,
  :page_url,
  :periods,
  :result,
  :share_url,
  :tax_year,
  :tool,
  keyword_init: true
)

# Request payload for HomeOffice#load.
#
# @!attribute [rw] actual_additional_cost
#   @return [Float, nil]
#
# @!attribute [rw] frequency
#   @return [String]
#
# @!attribute [rw] period
#   @return [Integer]
#
# @!attribute [rw] tax_year
#   @return [String]
HomeOfficeLoadMatch = Struct.new(
  :actual_additional_cost,
  :frequency,
  :period,
  :tax_year,
  keyword_init: true
)

# Request payload for HomeOffice#create.
#
# @!attribute [rw] actual_additional_costs
#   @return [Float, nil]
#
# @!attribute [rw] frequency
#   @return [String]
#
# @!attribute [rw] periods
#   @return [Integer]
#
# @!attribute [rw] tax_year
#   @return [String]
HomeOfficeCreateData = Struct.new(
  :actual_additional_costs,
  :frequency,
  :periods,
  :tax_year,
  keyword_init: true
)

# LatePenalty entity data model.
#
# @!attribute [rw] calculated_by
#   @return [String]
#
# @!attribute [rw] disclaimer
#   @return [String]
#
# @!attribute [rw] filed_on
#   @return [String]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] late_previous_two
#   @return [Boolean, nil]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] paid_on
#   @return [String, nil]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_of_account_end
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] tax_due
#   @return [Float, nil]
#
# @!attribute [rw] tool
#   @return [String]
LatePenalty = Struct.new(
  :calculated_by,
  :disclaimer,
  :filed_on,
  :input,
  :late_previous_two,
  :page_url,
  :paid_on,
  :period_end,
  :period_of_account_end,
  :result,
  :share_url,
  :tax_due,
  :tool,
  keyword_init: true
)

# Request payload for LatePenalty#load.
#
# @!attribute [rw] filed_on
#   @return [String]
#
# @!attribute [rw] late_previous_two
#   @return [Boolean, nil]
#
# @!attribute [rw] paid_on
#   @return [String, nil]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_of_account_end
#   @return [String, nil]
#
# @!attribute [rw] tax_due
#   @return [Float, nil]
LatePenaltyLoadMatch = Struct.new(
  :filed_on,
  :late_previous_two,
  :paid_on,
  :period_end,
  :period_of_account_end,
  :tax_due,
  keyword_init: true
)

# Request payload for LatePenalty#create.
#
# @!attribute [rw] filed_on
#   @return [String]
#
# @!attribute [rw] late_previous_two
#   @return [Boolean, nil]
#
# @!attribute [rw] paid_on
#   @return [String, nil]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_of_account_end
#   @return [String, nil]
#
# @!attribute [rw] tax_due
#   @return [Float, nil]
LatePenaltyCreateData = Struct.new(
  :filed_on,
  :late_previous_two,
  :paid_on,
  :period_end,
  :period_of_account_end,
  :tax_due,
  keyword_init: true
)

# LongPeriod entity data model.
#
# @!attribute [rw] calculated_by
#   @return [String]
#
# @!attribute [rw] disclaimer
#   @return [String]
#
# @!attribute [rw] first_accounts
#   @return [Boolean, nil]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_start
#   @return [String]
#
# @!attribute [rw] profit
#   @return [Float, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] tool
#   @return [String]
LongPeriod = Struct.new(
  :calculated_by,
  :disclaimer,
  :first_accounts,
  :input,
  :page_url,
  :period_end,
  :period_start,
  :profit,
  :result,
  :share_url,
  :tool,
  keyword_init: true
)

# Request payload for LongPeriod#load.
#
# @!attribute [rw] first_account
#   @return [Boolean, nil]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_start
#   @return [String]
#
# @!attribute [rw] profit
#   @return [Float, nil]
LongPeriodLoadMatch = Struct.new(
  :first_account,
  :period_end,
  :period_start,
  :profit,
  keyword_init: true
)

# Request payload for LongPeriod#create.
#
# @!attribute [rw] first_accounts
#   @return [Boolean, nil]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_start
#   @return [String]
#
# @!attribute [rw] profit
#   @return [Float, nil]
LongPeriodCreateData = Struct.new(
  :first_accounts,
  :period_end,
  :period_start,
  :profit,
  keyword_init: true
)

# MileageAllowance entity data model.
#
# @!attribute [rw] business_miles
#   @return [Integer]
#
# @!attribute [rw] calculated_by
#   @return [String]
#
# @!attribute [rw] disclaimer
#   @return [String]
#
# @!attribute [rw] employer_payment
#   @return [Float]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] tax_year
#   @return [String]
#
# @!attribute [rw] tool
#   @return [String]
#
# @!attribute [rw] vehicle
#   @return [String]
MileageAllowance = Struct.new(
  :business_miles,
  :calculated_by,
  :disclaimer,
  :employer_payment,
  :input,
  :page_url,
  :result,
  :share_url,
  :tax_year,
  :tool,
  :vehicle,
  keyword_init: true
)

# Request payload for MileageAllowance#load.
#
# @!attribute [rw] business_mile
#   @return [Integer]
#
# @!attribute [rw] employer_payment
#   @return [Float]
#
# @!attribute [rw] tax_year
#   @return [String]
#
# @!attribute [rw] vehicle
#   @return [String]
MileageAllowanceLoadMatch = Struct.new(
  :business_mile,
  :employer_payment,
  :tax_year,
  :vehicle,
  keyword_init: true
)

# Request payload for MileageAllowance#create.
#
# @!attribute [rw] business_miles
#   @return [Integer]
#
# @!attribute [rw] employer_payment
#   @return [Float]
#
# @!attribute [rw] tax_year
#   @return [String]
#
# @!attribute [rw] vehicle
#   @return [String]
MileageAllowanceCreateData = Struct.new(
  :business_miles,
  :employer_payment,
  :tax_year,
  :vehicle,
  keyword_init: true
)

# SalaryDividend entity data model.
#
# @!attribute [rw] associated_companies
#   @return [Integer, nil]
#
# @!attribute [rw] calculated_by
#   @return [String]
#
# @!attribute [rw] company_profit
#   @return [Float]
#
# @!attribute [rw] director_only_employee
#   @return [Boolean, nil]
#
# @!attribute [rw] disclaimer
#   @return [String]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] other_income
#   @return [Float, nil]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] salary
#   @return [Float, nil]
#
# @!attribute [rw] scottish_taxpayer
#   @return [Boolean, nil]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] tax_year
#   @return [String, nil]
#
# @!attribute [rw] tool
#   @return [String]
SalaryDividend = Struct.new(
  :associated_companies,
  :calculated_by,
  :company_profit,
  :director_only_employee,
  :disclaimer,
  :input,
  :other_income,
  :page_url,
  :result,
  :salary,
  :scottish_taxpayer,
  :share_url,
  :tax_year,
  :tool,
  keyword_init: true
)

# Request payload for SalaryDividend#load.
#
# @!attribute [rw] associated_company
#   @return [Integer, nil]
#
# @!attribute [rw] company_profit
#   @return [Float]
#
# @!attribute [rw] director_only_employee
#   @return [Boolean, nil]
#
# @!attribute [rw] other_income
#   @return [Float, nil]
#
# @!attribute [rw] salary
#   @return [Float, nil]
#
# @!attribute [rw] scottish_taxpayer
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_year
#   @return [String, nil]
SalaryDividendLoadMatch = Struct.new(
  :associated_company,
  :company_profit,
  :director_only_employee,
  :other_income,
  :salary,
  :scottish_taxpayer,
  :tax_year,
  keyword_init: true
)

# Request payload for SalaryDividend#create.
#
# @!attribute [rw] associated_companies
#   @return [Integer, nil]
#
# @!attribute [rw] company_profit
#   @return [Float]
#
# @!attribute [rw] director_only_employee
#   @return [Boolean, nil]
#
# @!attribute [rw] other_income
#   @return [Float, nil]
#
# @!attribute [rw] salary
#   @return [Float, nil]
#
# @!attribute [rw] scottish_taxpayer
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_year
#   @return [String, nil]
SalaryDividendCreateData = Struct.new(
  :associated_companies,
  :company_profit,
  :director_only_employee,
  :other_income,
  :salary,
  :scottish_taxpayer,
  :tax_year,
  keyword_init: true
)

# SoleTraderVsLimited entity data model.
#
# @!attribute [rw] calculated_by
#   @return [String]
#
# @!attribute [rw] director_only_employee
#   @return [Boolean, nil]
#
# @!attribute [rw] disclaimer
#   @return [String]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] other_income
#   @return [Float, nil]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] profit
#   @return [Float]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] scottish_taxpayer
#   @return [Boolean, nil]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] tax_year
#   @return [String, nil]
#
# @!attribute [rw] tool
#   @return [String]
SoleTraderVsLimited = Struct.new(
  :calculated_by,
  :director_only_employee,
  :disclaimer,
  :input,
  :other_income,
  :page_url,
  :profit,
  :result,
  :scottish_taxpayer,
  :share_url,
  :tax_year,
  :tool,
  keyword_init: true
)

# Request payload for SoleTraderVsLimited#load.
#
# @!attribute [rw] director_only_employee
#   @return [Boolean, nil]
#
# @!attribute [rw] other_income
#   @return [Float, nil]
#
# @!attribute [rw] profit
#   @return [Float]
#
# @!attribute [rw] scottish_taxpayer
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_year
#   @return [String, nil]
SoleTraderVsLimitedLoadMatch = Struct.new(
  :director_only_employee,
  :other_income,
  :profit,
  :scottish_taxpayer,
  :tax_year,
  keyword_init: true
)

# Request payload for SoleTraderVsLimited#create.
#
# @!attribute [rw] director_only_employee
#   @return [Boolean, nil]
#
# @!attribute [rw] other_income
#   @return [Float, nil]
#
# @!attribute [rw] profit
#   @return [Float]
#
# @!attribute [rw] scottish_taxpayer
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_year
#   @return [String, nil]
SoleTraderVsLimitedCreateData = Struct.new(
  :director_only_employee,
  :other_income,
  :profit,
  :scottish_taxpayer,
  :tax_year,
  keyword_init: true
)

# Tool entity data model.
class Tool
end

# Request payload for Tool#load.
class ToolLoadMatch
end

# TrivialBenefit entity data model.
#
# @!attribute [rw] benefit_cost
#   @return [Float]
#
# @!attribute [rw] calculated_by
#   @return [String]
#
# @!attribute [rw] cash_or_cash_voucher
#   @return [Boolean]
#
# @!attribute [rw] close_company_director
#   @return [Boolean]
#
# @!attribute [rw] disclaimer
#   @return [String]
#
# @!attribute [rw] in_contract
#   @return [Boolean]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] qualifying_benefits_so_far
#   @return [Float]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] reward_for_work
#   @return [Boolean]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] tax_year
#   @return [String]
#
# @!attribute [rw] tool
#   @return [String]
TrivialBenefit = Struct.new(
  :benefit_cost,
  :calculated_by,
  :cash_or_cash_voucher,
  :close_company_director,
  :disclaimer,
  :in_contract,
  :input,
  :page_url,
  :qualifying_benefits_so_far,
  :result,
  :reward_for_work,
  :share_url,
  :tax_year,
  :tool,
  keyword_init: true
)

# Request payload for TrivialBenefit#load.
#
# @!attribute [rw] benefit_cost
#   @return [Float]
#
# @!attribute [rw] cash_or_cash_voucher
#   @return [Boolean]
#
# @!attribute [rw] close_company_director
#   @return [Boolean]
#
# @!attribute [rw] in_contract
#   @return [Boolean]
#
# @!attribute [rw] qualifying_benefits_so_far
#   @return [Float]
#
# @!attribute [rw] reward_for_work
#   @return [Boolean]
#
# @!attribute [rw] tax_year
#   @return [String]
TrivialBenefitLoadMatch = Struct.new(
  :benefit_cost,
  :cash_or_cash_voucher,
  :close_company_director,
  :in_contract,
  :qualifying_benefits_so_far,
  :reward_for_work,
  :tax_year,
  keyword_init: true
)

# Request payload for TrivialBenefit#create.
#
# @!attribute [rw] benefit_cost
#   @return [Float]
#
# @!attribute [rw] cash_or_cash_voucher
#   @return [Boolean]
#
# @!attribute [rw] close_company_director
#   @return [Boolean]
#
# @!attribute [rw] in_contract
#   @return [Boolean]
#
# @!attribute [rw] qualifying_benefits_so_far
#   @return [Float]
#
# @!attribute [rw] reward_for_work
#   @return [Boolean]
#
# @!attribute [rw] tax_year
#   @return [String]
TrivialBenefitCreateData = Struct.new(
  :benefit_cost,
  :cash_or_cash_voucher,
  :close_company_director,
  :in_contract,
  :qualifying_benefits_so_far,
  :reward_for_work,
  :tax_year,
  keyword_init: true
)

