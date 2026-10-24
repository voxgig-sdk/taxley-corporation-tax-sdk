package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "TaxleyCorporationTax",
			"slug": "taxley-corporation-tax",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"now": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://taxley.co.uk",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"capital_allowance": map[string]any{},
				"chargeable_gain": map[string]any{},
				"company_car": map[string]any{},
				"company_size": map[string]any{},
				"company_van": map[string]any{},
				"corporation_tax": map[string]any{},
				"deadline": map[string]any{},
				"director_pension": map[string]any{},
				"directors_loan": map[string]any{},
				"dividend_reserve": map[string]any{},
				"home_office": map[string]any{},
				"late_penalty": map[string]any{},
				"long_period": map[string]any{},
				"mileage_allowance": map[string]any{},
				"salary_dividend": map[string]any{},
				"sole_trader_vs_limited": map[string]any{},
				"tool": map[string]any{},
				"trivial_benefit": map[string]any{},
			},
		},
		"entity": map[string]any{
			"capital_allowance": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "aia_shared",
						"title": "Aia Shared",
						"type": "`$NUMBER`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "calculated_by",
						"title": "Calculated By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "full_expensed_disposals",
						"title": "Full Expensed Disposals",
						"type": "`$NUMBER`",
						"short": "Sale proceeds of assets that had full expensing on their whole cost, sold this period.",
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).",
					},
					map[string]any{
						"name": "main_pool_brought_forward",
						"title": "Main Pool Brought Forward",
						"type": "`$NUMBER`",
						"short": "Main pool balance carried forward from the previous accounting period (0 if none).",
					},
					map[string]any{
						"name": "main_pool_disposals",
						"title": "Main Pool Disposals",
						"type": "`$NUMBER`",
						"short": "Sale proceeds of main pool assets sold this period that did NOT have full expensing (for example, assets that had the annual investment allowance or were pooled).",
					},
					map[string]any{
						"name": "new_main_plant",
						"title": "New Main Plant",
						"type": "`$NUMBER`",
						"short": "Cost of new and unused plant, machinery, equipment and vans (not cars).",
					},
					map[string]any{
						"name": "new_special_rate",
						"title": "New Special Rate",
						"type": "`$NUMBER`",
						"short": "Cost of new and unused integral features (electrical, lighting, heating, water, lifts, air conditioning), long-life assets, thermal insulation and solar panels.",
					},
					map[string]any{
						"name": "other_cars_high_co2",
						"title": "Other Cars High Co2",
						"type": "`$NUMBER`",
						"short": "Cost of cars with CO2 emissions over 50 g/km.",
					},
					map[string]any{
						"name": "other_cars_low_co2",
						"title": "Other Cars Low Co2",
						"type": "`$NUMBER`",
						"short": "Cost of cars (other than new zero-emission cars) with CO2 emissions of 50 g/km or less.",
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "period_end",
						"title": "Period End",
						"type": "`$STRING`",
						"req": true,
						"short": "Last day of the accounting period, as YYYY-MM-DD.",
						"format": "date",
					},
					map[string]any{
						"name": "period_start",
						"title": "Period Start",
						"type": "`$STRING`",
						"req": true,
						"short": "First day of the Corporation Tax accounting period, as YYYY-MM-DD.",
						"format": "date",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "share_url",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A link to this result on taxley.co.uk.",
						"format": "uri",
					},
					map[string]any{
						"name": "special_pool_brought_forward",
						"title": "Special Pool Brought Forward",
						"type": "`$NUMBER`",
						"short": "Special rate pool balance carried forward from the previous accounting period (0 if none).",
					},
					map[string]any{
						"name": "spend_date",
						"title": "Spend Date",
						"type": "`$STRING`",
						"short": "Optional.",
						"format": "date",
					},
					map[string]any{
						"name": "tool",
						"title": "Tool",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "used_main_plant",
						"title": "Used Main Plant",
						"type": "`$NUMBER`",
						"short": "Cost of second-hand main-rate plant, machinery, equipment and vans (not cars).",
					},
					map[string]any{
						"name": "used_special_rate",
						"title": "Used Special Rate",
						"type": "`$NUMBER`",
						"short": "Cost of second-hand integral features, long-life assets, thermal insulation and solar panels.",
					},
					map[string]any{
						"name": "zero_emission_cars",
						"title": "Zero Emission Cars",
						"type": "`$NUMBER`",
						"short": "Cost of new and unused cars with 0 g/km CO2 (fully electric).",
					},
				},
				"name": "capital_allowance",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/tools/capital-allowances",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "capital-allowances",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"capital-allowances",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"aia_shared": "`reqdata.aia_shared`",
										"full_expensed_disposals": "`reqdata.full_expensed_disposal`",
										"main_pool_brought_forward": "`reqdata.main_pool_brought_forward`",
										"main_pool_disposals": "`reqdata.main_pool_disposal`",
										"new_main_plant": "`reqdata.new_main_plant`",
										"new_special_rate": "`reqdata.new_special_rate`",
										"other_cars_high_co2": "`reqdata.other_cars_high_co2`",
										"other_cars_low_co2": "`reqdata.other_cars_low_co2`",
										"period_end": "`reqdata.period_end`",
										"period_start": "`reqdata.period_start`",
										"special_pool_brought_forward": "`reqdata.special_pool_brought_forward`",
										"spend_date": "`reqdata.spend_date`",
										"used_main_plant": "`reqdata.used_main_plant`",
										"used_special_rate": "`reqdata.used_special_rate`",
										"zero_emission_cars": "`reqdata.zero_emission_car`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools/capital-allowances",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "capital-allowances",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"capital-allowances",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "aia_shared",
											"orig": "aia_shared",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "full_expensed_disposal",
											"orig": "full_expensed_disposals",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "main_pool_brought_forward",
											"orig": "main_pool_brought_forward",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "main_pool_disposal",
											"orig": "main_pool_disposals",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "new_main_plant",
											"orig": "new_main_plant",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 40000,
											"field": true,
										},
										map[string]any{
											"name": "new_special_rate",
											"orig": "new_special_rate",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "other_cars_high_co2",
											"orig": "other_cars_high_co2",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "other_cars_low_co2",
											"orig": "other_cars_low_co2",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "period_end",
											"orig": "period_end",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2027-03-31",
											"field": true,
										},
										map[string]any{
											"name": "period_start",
											"orig": "period_start",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2026-04-01",
											"field": true,
										},
										map[string]any{
											"name": "special_pool_brought_forward",
											"orig": "special_pool_brought_forward",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "spend_date",
											"orig": "spend_date",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "used_main_plant",
											"orig": "used_main_plant",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "used_special_rate",
											"orig": "used_special_rate",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "zero_emission_car",
											"orig": "zero_emission_cars",
											"type": "`$NUMBER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"period_end",
										"period_start",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"chargeable_gain": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "acquisition_cost",
						"title": "Acquisition Cost",
						"type": "`$NUMBER`",
						"req": true,
						"short": "What the company paid for the asset, in pounds.",
					},
					map[string]any{
						"name": "acquisition_costs",
						"title": "Acquisition Costs",
						"type": "`$NUMBER`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "acquisition_date",
						"title": "Acquisition Date",
						"type": "`$STRING`",
						"req": true,
						"short": "When the company bought the asset (exchange of contracts), as YYYY-MM-DD.",
						"format": "date",
					},
					map[string]any{
						"name": "asset_type",
						"title": "Asset Type",
						"type": "`$STRING`",
						"req": true,
						"short": "\"land_buildings\": UK land or buildings (the company's whole interest; a freehold or a lease with more than 50 years left).",
					},
					map[string]any{
						"name": "calculated_by",
						"title": "Calculated By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "disposal_costs",
						"title": "Disposal Costs",
						"type": "`$NUMBER`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "disposal_date",
						"title": "Disposal Date",
						"type": "`$STRING`",
						"req": true,
						"short": "When the company sold the asset (exchange of contracts), as YYYY-MM-DD.",
						"format": "date",
					},
					map[string]any{
						"name": "enhancement_cost",
						"title": "Enhancement Cost",
						"type": "`$NUMBER`",
						"short": "Optional, land and buildings only.",
					},
					map[string]any{
						"name": "enhancement_date",
						"title": "Enhancement Date",
						"type": "`$STRING`",
						"short": "Optional, land and buildings only.",
						"format": "date",
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).",
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "proceeds",
						"title": "Proceeds",
						"type": "`$NUMBER`",
						"req": true,
						"short": "What the company sold the asset for, in pounds.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "sba_claimed",
						"title": "Sba Claimed",
						"type": "`$NUMBER`",
						"short": "Optional, land and buildings only.",
					},
					map[string]any{
						"name": "share_url",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A link to this result on taxley.co.uk.",
						"format": "uri",
					},
					map[string]any{
						"name": "tool",
						"title": "Tool",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "chargeable_gain",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/tools/chargeable-gains",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "chargeable-gains",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"chargeable-gains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"acquisition_cost": "`reqdata.acquisition_cost`",
										"acquisition_costs": "`reqdata.acquisition_cost`",
										"acquisition_date": "`reqdata.acquisition_date`",
										"asset_type": "`reqdata.asset_type`",
										"disposal_costs": "`reqdata.disposal_cost`",
										"disposal_date": "`reqdata.disposal_date`",
										"enhancement_cost": "`reqdata.enhancement_cost`",
										"enhancement_date": "`reqdata.enhancement_date`",
										"proceeds": "`reqdata.proceed`",
										"sba_claimed": "`reqdata.sba_claimed`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools/chargeable-gains",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "chargeable-gains",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"chargeable-gains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "acquisition_cost",
											"orig": "acquisition_cost",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 250000,
											"field": true,
										},
										map[string]any{
											"name": "acquisition_cost",
											"orig": "acquisition_costs",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "acquisition_date",
											"orig": "acquisition_date",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2008-06-01",
											"field": true,
										},
										map[string]any{
											"name": "asset_type",
											"orig": "asset_type",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "land_buildings",
											"field": true,
										},
										map[string]any{
											"name": "disposal_cost",
											"orig": "disposal_costs",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "disposal_date",
											"orig": "disposal_date",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2026-06-30",
											"field": true,
										},
										map[string]any{
											"name": "enhancement_cost",
											"orig": "enhancement_cost",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "enhancement_date",
											"orig": "enhancement_date",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "proceed",
											"orig": "proceeds",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 420000,
										},
										map[string]any{
											"name": "sba_claimed",
											"orig": "sba_claimed",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"acquisition_cost",
										"acquisition_date",
										"asset_type",
										"disposal_date",
										"proceed",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"company_car": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "acquisition",
						"title": "Acquisition",
						"type": "`$STRING`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "annual_lease_cost",
						"title": "Annual Lease Cost",
						"type": "`$NUMBER`",
						"short": "For \"lease\": the lease rentals the company pays in its year, in pounds, excluding VAT it can reclaim.",
					},
					map[string]any{
						"name": "associated_companies",
						"title": "Associated Companies",
						"type": "`$INTEGER`",
						"short": "Optional, with company_profits.",
					},
					map[string]any{
						"name": "calculated_by",
						"title": "Calculated By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "capital_contribution",
						"title": "Capital Contribution",
						"type": "`$NUMBER`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "co2_gkm",
						"title": "Co2 Gkm",
						"type": "`$INTEGER`",
						"short": "The car's approved CO2 emissions in g/km, from the V5C or certificate of conformity (WLTP for cars first registered from 6 April 2020, NEDC before; both give the same percentage in 2025/26 and 2026/27).",
					},
					map[string]any{
						"name": "company_profits",
						"title": "Company Profits",
						"type": "`$NUMBER`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "electric_range_miles",
						"title": "Electric Range Miles",
						"type": "`$INTEGER`",
						"short": "For a plug-in hybrid only: the zero-emission (electric) range in miles from the certificate of conformity, rounded up.",
					},
					map[string]any{
						"name": "fuel_type",
						"title": "Fuel Type",
						"type": "`$STRING`",
						"req": true,
						"short": "\"electric\" (fully electric or any car with 0 g/km CO2), \"petrol\" (petrol, or ANY hybrid, petrol or diesel, including plug-in hybrids: hybrids never pay the diesel supplement), \"diesel_rde2\" (a diesel-only car certified to Euro 6d, also…",
					},
					map[string]any{
						"name": "income_tax_rate",
						"title": "Income Tax Rate",
						"type": "`$STRING`",
						"req": true,
						"short": "The director's top rate of Income Tax including the benefit: \"basic\" (20%), \"higher\" (40%) or \"additional\" (45%).",
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).",
					},
					map[string]any{
						"name": "lease_started",
						"title": "Lease Started",
						"type": "`$STRING`",
						"short": "Optional, for \"lease\": the date the hire period began, YYYY-MM-DD.",
						"format": "date",
					},
					map[string]any{
						"name": "list_price",
						"title": "List Price",
						"type": "`$NUMBER`",
						"req": true,
						"short": "The car's list price when new, including VAT, delivery and any optional extras (the P11D price), in pounds.",
					},
					map[string]any{
						"name": "months_available",
						"title": "Months Available",
						"type": "`$INTEGER`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "new_car",
						"title": "New Car",
						"type": "`$BOOLEAN`",
						"short": "Optional, for \"buy\".",
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "phev_easement",
						"title": "Phev Easement",
						"type": "`$BOOLEAN`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "price_paid",
						"title": "Price Paid",
						"type": "`$NUMBER`",
						"short": "Optional, for \"buy\".",
					},
					map[string]any{
						"name": "private_fuel",
						"title": "Private Fuel",
						"type": "`$BOOLEAN`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "share_url",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A link to this result on taxley.co.uk.",
						"format": "uri",
					},
					map[string]any{
						"name": "tax_year",
						"title": "Tax Year",
						"type": "`$STRING`",
						"req": true,
						"short": "UK tax year: \"2025-26\" (6 April 2025 to 5 April 2026) or \"2026-27\" (6 April 2026 to 5 April 2027).",
					},
					map[string]any{
						"name": "tool",
						"title": "Tool",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "company_car",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/tools/company-car",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "company-car",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"company-car",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"acquisition": "`reqdata.acquisition`",
										"annual_lease_cost": "`reqdata.annual_lease_cost`",
										"associated_companies": "`reqdata.associated_company`",
										"capital_contribution": "`reqdata.capital_contribution`",
										"co2_gkm": "`reqdata.co2_gkm`",
										"company_profits": "`reqdata.company_profit`",
										"electric_range_miles": "`reqdata.electric_range_mile`",
										"fuel_type": "`reqdata.fuel_type`",
										"income_tax_rate": "`reqdata.income_tax_rate`",
										"lease_started": "`reqdata.lease_started`",
										"list_price": "`reqdata.list_price`",
										"months_available": "`reqdata.months_available`",
										"new_car": "`reqdata.new_car`",
										"phev_easement": "`reqdata.phev_easement`",
										"price_paid": "`reqdata.price_paid`",
										"private_fuel": "`reqdata.private_fuel`",
										"tax_year": "`reqdata.tax_year`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools/company-car",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "company-car",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"company-car",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "acquisition",
											"orig": "acquisition",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "annual_lease_cost",
											"orig": "annual_lease_cost",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "associated_company",
											"orig": "associated_companies",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "capital_contribution",
											"orig": "capital_contribution",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "co2_gkm",
											"orig": "co2_gkm",
											"type": "`$INTEGER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "company_profit",
											"orig": "company_profits",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "electric_range_mile",
											"orig": "electric_range_miles",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "fuel_type",
											"orig": "fuel_type",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "electric",
											"field": true,
										},
										map[string]any{
											"name": "income_tax_rate",
											"orig": "income_tax_rate",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "basic",
											"field": true,
										},
										map[string]any{
											"name": "lease_started",
											"orig": "lease_started",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "list_price",
											"orig": "list_price",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 40000,
											"field": true,
										},
										map[string]any{
											"name": "months_available",
											"orig": "months_available",
											"type": "`$INTEGER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "new_car",
											"orig": "new_car",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "phev_easement",
											"orig": "phev_easement",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "price_paid",
											"orig": "price_paid",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "private_fuel",
											"orig": "private_fuel",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "tax_year",
											"orig": "tax_year",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2025-26",
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"fuel_type",
										"income_tax_rate",
										"list_price",
										"tax_year",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"company_size": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "balance_sheet_total",
						"title": "Balance Sheet Total",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Balance sheet total: gross assets (fixed plus current assets, before liabilities) at the year end, in pounds.",
					},
					map[string]any{
						"name": "calculated_by",
						"title": "Calculated By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "employees",
						"title": "Employees",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Average number of employees in the year (monthly headcounts added up, divided by the number of months).",
					},
					map[string]any{
						"name": "first_year",
						"title": "First Year",
						"type": "`$BOOLEAN`",
						"short": "True if this is the company's first financial year (then this year alone decides its size).",
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).",
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "period_end",
						"title": "Period End",
						"type": "`$STRING`",
						"req": true,
						"short": "Last day of the financial year, YYYY-MM-DD.",
						"format": "date",
					},
					map[string]any{
						"name": "period_start",
						"title": "Period Start",
						"type": "`$STRING`",
						"req": true,
						"short": "First day of the financial year (accounts period), YYYY-MM-DD.",
						"format": "date",
					},
					map[string]any{
						"name": "prev_balance_sheet_total",
						"title": "Prev Balance Sheet Total",
						"type": "`$NUMBER`",
						"short": "Optional: last year's balance sheet total (gross assets), in pounds.",
					},
					map[string]any{
						"name": "prev_employees",
						"title": "Prev Employees",
						"type": "`$NUMBER`",
						"short": "Optional: last year's average number of employees.",
					},
					map[string]any{
						"name": "prev_size",
						"title": "Prev Size",
						"type": "`$STRING`",
						"short": "Optional: what the company qualified as last year — micro, small (not micro) or medium_or_large (not small).",
					},
					map[string]any{
						"name": "prev_turnover",
						"title": "Prev Turnover",
						"type": "`$NUMBER`",
						"short": "Optional: last financial year's turnover, in pounds (assumed a 12-month year).",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "share_url",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A link to this result on taxley.co.uk.",
						"format": "uri",
					},
					map[string]any{
						"name": "tool",
						"title": "Tool",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "turnover",
						"title": "Turnover",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Turnover for the financial year, in pounds.",
					},
				},
				"name": "company_size",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/tools/company-size",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "company-size",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"company-size",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"balance_sheet_total": "`reqdata.balance_sheet_total`",
										"employees": "`reqdata.employee`",
										"first_year": "`reqdata.first_year`",
										"period_end": "`reqdata.period_end`",
										"period_start": "`reqdata.period_start`",
										"prev_balance_sheet_total": "`reqdata.prev_balance_sheet_total`",
										"prev_employees": "`reqdata.prev_employee`",
										"prev_size": "`reqdata.prev_size`",
										"prev_turnover": "`reqdata.prev_turnover`",
										"turnover": "`reqdata.turnover`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools/company-size",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "company-size",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"company-size",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "balance_sheet_total",
											"orig": "balance_sheet_total",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 420000,
											"field": true,
										},
										map[string]any{
											"name": "employee",
											"orig": "employees",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 6,
										},
										map[string]any{
											"name": "first_year",
											"orig": "first_year",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "period_end",
											"orig": "period_end",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2026-04-30",
											"field": true,
										},
										map[string]any{
											"name": "period_start",
											"orig": "period_start",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2025-05-01",
											"field": true,
										},
										map[string]any{
											"name": "prev_balance_sheet_total",
											"orig": "prev_balance_sheet_total",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "prev_employee",
											"orig": "prev_employees",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "prev_size",
											"orig": "prev_size",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "prev_turnover",
											"orig": "prev_turnover",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "turnover",
											"orig": "turnover",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 850000,
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"balance_sheet_total",
										"employee",
										"period_end",
										"period_start",
										"turnover",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"company_van": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "associated_companies",
						"title": "Associated Companies",
						"type": "`$INTEGER`",
						"short": "Optional, with company_profits.",
					},
					map[string]any{
						"name": "calculated_by",
						"title": "Calculated By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "company_profits",
						"title": "Company Profits",
						"type": "`$NUMBER`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "income_tax_rate",
						"title": "Income Tax Rate",
						"type": "`$STRING`",
						"req": true,
						"short": "The director's or employee's top rate of Income Tax: \"basic\" (20%), \"higher\" (40%) or \"additional\" (45%).",
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).",
					},
					map[string]any{
						"name": "months_available",
						"title": "Months Available",
						"type": "`$INTEGER`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "price_paid",
						"title": "Price Paid",
						"type": "`$NUMBER`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "private_fuel",
						"title": "Private Fuel",
						"type": "`$BOOLEAN`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "share_url",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A link to this result on taxley.co.uk.",
						"format": "uri",
					},
					map[string]any{
						"name": "tax_year",
						"title": "Tax Year",
						"type": "`$STRING`",
						"req": true,
						"short": "UK tax year: \"2025-26\" (6 April 2025 to 5 April 2026) or \"2026-27\" (6 April 2026 to 5 April 2027).",
					},
					map[string]any{
						"name": "tool",
						"title": "Tool",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "zero_emission",
						"title": "Zero Emission",
						"type": "`$BOOLEAN`",
						"short": "Optional.",
					},
				},
				"name": "company_van",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/tools/company-van",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "company-van",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"company-van",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"associated_companies": "`reqdata.associated_company`",
										"company_profits": "`reqdata.company_profit`",
										"income_tax_rate": "`reqdata.income_tax_rate`",
										"months_available": "`reqdata.months_available`",
										"price_paid": "`reqdata.price_paid`",
										"private_fuel": "`reqdata.private_fuel`",
										"tax_year": "`reqdata.tax_year`",
										"zero_emission": "`reqdata.zero_emission`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools/company-van",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "company-van",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"company-van",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "associated_company",
											"orig": "associated_companies",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "company_profit",
											"orig": "company_profits",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "income_tax_rate",
											"orig": "income_tax_rate",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "basic",
											"field": true,
										},
										map[string]any{
											"name": "months_available",
											"orig": "months_available",
											"type": "`$INTEGER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "price_paid",
											"orig": "price_paid",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "private_fuel",
											"orig": "private_fuel",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "tax_year",
											"orig": "tax_year",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2025-26",
											"field": true,
										},
										map[string]any{
											"name": "zero_emission",
											"orig": "zero_emission",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"income_tax_rate",
										"tax_year",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"corporation_tax": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "associated_companies",
						"title": "Associated Companies",
						"type": "`$INTEGER`",
						"short": "How many other companies are associated with this one (under common control) in the period.",
					},
					map[string]any{
						"name": "calculated_by",
						"title": "Calculated By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "close_investment_holding",
						"title": "Close Investment Holding",
						"type": "`$BOOLEAN`",
						"short": "True if the company is a close investment-holding company in the period (CTA 2010 s.18N): a close company is one unless, throughout the period, it exists wholly or mainly to trade commercially, to let land to people not connected with it,…",
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "exempt_distributions",
						"title": "Exempt Distributions",
						"type": "`$NUMBER`",
						"short": "Exempt dividends received from companies outside the company's 51% group (and not from a trading company owned by a consortium it belongs to) (CTA 2010 s.18L), in pounds, used only to decide the rate.",
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).",
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "period_end",
						"title": "Period End",
						"type": "`$STRING`",
						"req": true,
						"short": "Last day of the accounting period, YYYY-MM-DD.",
						"format": "date",
					},
					map[string]any{
						"name": "period_start",
						"title": "Period Start",
						"type": "`$STRING`",
						"req": true,
						"short": "First day of the accounting period, YYYY-MM-DD (for example 2025-04-01).",
						"format": "date",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "share_url",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A link to this result on taxley.co.uk.",
						"format": "uri",
					},
					map[string]any{
						"name": "taxable_profits",
						"title": "Taxable Profits",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Taxable total profits for the period in pounds, after tax adjustments and reliefs (CT600 box 315).",
					},
					map[string]any{
						"name": "tool",
						"title": "Tool",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "corporation_tax",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/tools/corporation-tax",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "corporation-tax",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"corporation-tax",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools/corporation-tax",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "corporation-tax",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"corporation-tax",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "associated_company",
											"orig": "associated_companies",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "close_investment_holding",
											"orig": "close_investment_holding",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
											"field": true,
										},
										map[string]any{
											"name": "exempt_distribution",
											"orig": "exempt_distributions",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "period_end",
											"orig": "period_end",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2026-03-31",
											"field": true,
										},
										map[string]any{
											"name": "period_start",
											"orig": "period_start",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2025-04-01",
											"field": true,
										},
										map[string]any{
											"name": "taxable_profit",
											"orig": "taxable_profits",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 100000,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"period_end",
										"period_start",
										"taxable_profit",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"deadline": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "calculated_by",
						"title": "Calculated By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).",
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "period_end",
						"title": "Period End",
						"type": "`$STRING`",
						"req": true,
						"short": "The last day of the accounts period (the company's year end or accounting reference date), as YYYY-MM-DD.",
						"format": "date",
					},
					map[string]any{
						"name": "period_start",
						"title": "Period Start",
						"type": "`$STRING`",
						"short": "Optional.",
						"format": "date",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "share_url",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A link to this result on taxley.co.uk.",
						"format": "uri",
					},
					map[string]any{
						"name": "tool",
						"title": "Tool",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "deadline",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/tools/deadlines",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "deadlines",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"deadlines",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"period_end": "`reqdata.period_end`",
										"period_start": "`reqdata.period_start`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools/deadlines",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "deadlines",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"deadlines",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "period_end",
											"orig": "period_end",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2026-03-31",
											"field": true,
										},
										map[string]any{
											"name": "period_start",
											"orig": "period_start",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"period_end",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"director_pension": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "associated_companies",
						"title": "Associated Companies",
						"type": "`$INTEGER`",
						"short": "Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits.",
					},
					map[string]any{
						"name": "calculated_by",
						"title": "Calculated By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "company_profit",
						"title": "Company Profit",
						"type": "`$NUMBER`",
						"req": true,
						"short": "The company's taxable profit for its year before this contribution, after the director's existing salary and other costs, in pounds.",
					},
					map[string]any{
						"name": "contribution",
						"title": "Contribution",
						"type": "`$NUMBER`",
						"req": true,
						"short": "The amount the company would pay into the director's pension as an employer contribution, in pounds.",
					},
					map[string]any{
						"name": "director_only_employee",
						"title": "Director Only Employee",
						"type": "`$BOOLEAN`",
						"short": "true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance.",
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "dividends",
						"title": "Dividends",
						"type": "`$NUMBER`",
						"short": "Dividends the director already takes this tax year, in pounds.",
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).",
					},
					map[string]any{
						"name": "money_purchase_allowance",
						"title": "Money Purchase Allowance",
						"type": "`$BOOLEAN`",
						"short": "true if the director has already flexibly accessed a pension (for example taken cash from drawdown or an uncrystallised lump sum), so the £10,000 money purchase annual allowance applies.",
					},
					map[string]any{
						"name": "other_income",
						"title": "Other Income",
						"type": "`$NUMBER`",
						"short": "The director's other taxable income for the tax year from outside the company, in pounds.",
					},
					map[string]any{
						"name": "other_pension_contributions",
						"title": "Other Pension Contributions",
						"type": "`$NUMBER`",
						"short": "Everything else paid into the director's pensions this tax year (their own contributions, before tax relief, and any other employer's), in pounds.",
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "salary",
						"title": "Salary",
						"type": "`$NUMBER`",
						"short": "The salary the director already takes from the company this tax year, in pounds.",
					},
					map[string]any{
						"name": "scottish_taxpayer",
						"title": "Scottish Taxpayer",
						"type": "`$BOOLEAN`",
						"short": "true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands.",
					},
					map[string]any{
						"name": "share_url",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A link to this result on taxley.co.uk.",
						"format": "uri",
					},
					map[string]any{
						"name": "tax_year",
						"title": "Tax Year",
						"type": "`$STRING`",
						"short": "UK tax year, \"2025-26\" or \"2026-27\" (6 April to 5 April).",
					},
					map[string]any{
						"name": "tool",
						"title": "Tool",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "director_pension",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/tools/director-pension",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "director-pension",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"director-pension",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"associated_companies": "`reqdata.associated_company`",
										"company_profit": "`reqdata.company_profit`",
										"contribution": "`reqdata.contribution`",
										"director_only_employee": "`reqdata.director_only_employee`",
										"dividends": "`reqdata.dividend`",
										"money_purchase_allowance": "`reqdata.money_purchase_allowance`",
										"other_income": "`reqdata.other_income`",
										"other_pension_contributions": "`reqdata.other_pension_contribution`",
										"salary": "`reqdata.salary`",
										"scottish_taxpayer": "`reqdata.scottish_taxpayer`",
										"tax_year": "`reqdata.tax_year`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools/director-pension",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "director-pension",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"director-pension",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "associated_company",
											"orig": "associated_companies",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "company_profit",
											"orig": "company_profit",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 60000,
											"field": true,
										},
										map[string]any{
											"name": "contribution",
											"orig": "contribution",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 10000,
											"field": true,
										},
										map[string]any{
											"name": "director_only_employee",
											"orig": "director_only_employee",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
											"field": true,
										},
										map[string]any{
											"name": "dividend",
											"orig": "dividends",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "money_purchase_allowance",
											"orig": "money_purchase_allowance",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
											"field": true,
										},
										map[string]any{
											"name": "other_income",
											"orig": "other_income",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "other_pension_contribution",
											"orig": "other_pension_contributions",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "salary",
											"orig": "salary",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "scottish_taxpayer",
											"orig": "scottish_taxpayer",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
											"field": true,
										},
										map[string]any{
											"name": "tax_year",
											"orig": "tax_year",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-27",
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_profit",
										"contribution",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"directors_loan": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "benefit_closing_balance",
						"title": "Benefit Closing Balance",
						"type": "`$NUMBER`",
						"short": "Maximum loan balance on 5 April at the end of the selected tax year, or when the loan ended, in pounds.",
					},
					map[string]any{
						"name": "benefit_interest_paid",
						"title": "Benefit Interest Paid",
						"type": "`$NUMBER`",
						"short": "Interest the director was required to pay and actually paid for the selected tax year, in pounds.",
					},
					map[string]any{
						"name": "benefit_maximum_balance",
						"title": "Benefit Maximum Balance",
						"type": "`$NUMBER`",
						"short": "Highest total beneficial-loan balance at any time in the tax year, in pounds, used for the £10,000 exemption.",
					},
					map[string]any{
						"name": "benefit_opening_balance",
						"title": "Benefit Opening Balance",
						"type": "`$NUMBER`",
						"short": "Maximum loan balance on 5 April before the selected tax year, or when the loan began, in pounds.",
					},
					map[string]any{
						"name": "benefit_tax_year",
						"title": "Benefit Tax Year",
						"type": "`$STRING`",
						"short": "Optional UK tax year for the beneficial-loan calculation: 2025-26 or 2026-27.",
					},
					map[string]any{
						"name": "benefit_whole_months",
						"title": "Benefit Whole Months",
						"type": "`$INTEGER`",
						"short": "Whole months the loan was outstanding in the selected tax year, from 1 to 12.",
					},
					map[string]any{
						"name": "calculated_by",
						"title": "Calculated By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).",
					},
					map[string]any{
						"name": "loan_made_on",
						"title": "Loan Made On",
						"type": "`$STRING`",
						"short": "Date the loan was made, YYYY-MM-DD, within the accounting period.",
						"format": "date",
					},
					map[string]any{
						"name": "marginal_income_tax_rate",
						"title": "Marginal Income Tax Rate",
						"type": "`$NUMBER`",
						"short": "Director’s marginal Income Tax rate as a percentage, used only to estimate personal tax on the benefit.",
					},
					map[string]any{
						"name": "outstanding",
						"title": "Outstanding",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Loan balance the director or other participator owed the company at the period end, in pounds.",
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "period_end",
						"title": "Period End",
						"type": "`$STRING`",
						"req": true,
						"short": "Last day of the company's Corporation Tax accounting period, YYYY-MM-DD.",
						"format": "date",
					},
					map[string]any{
						"name": "repaid_within_9_months",
						"title": "Repaid Within 9 Months",
						"type": "`$NUMBER`",
						"short": "Part of that balance repaid, released or written off after the period end and within 9 months of it (before the s.455 tax is due), in pounds.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "share_url",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A link to this result on taxley.co.uk.",
						"format": "uri",
					},
					map[string]any{
						"name": "tool",
						"title": "Tool",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "directors_loan",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/tools/directors-loan",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "directors-loan",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"directors-loan",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"benefit_closing_balance": "`reqdata.benefit_closing_balance`",
										"benefit_interest_paid": "`reqdata.benefit_interest_paid`",
										"benefit_maximum_balance": "`reqdata.benefit_maximum_balance`",
										"benefit_opening_balance": "`reqdata.benefit_opening_balance`",
										"benefit_tax_year": "`reqdata.benefit_tax_year`",
										"benefit_whole_months": "`reqdata.benefit_whole_month`",
										"loan_made_on": "`reqdata.loan_made_on`",
										"marginal_income_tax_rate": "`reqdata.marginal_income_tax_rate`",
										"outstanding": "`reqdata.outstanding`",
										"period_end": "`reqdata.period_end`",
										"repaid_within_9_months": "`reqdata.repaid_within_9_month`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools/directors-loan",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "directors-loan",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"directors-loan",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "benefit_closing_balance",
											"orig": "benefit_closing_balance",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "benefit_interest_paid",
											"orig": "benefit_interest_paid",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "benefit_maximum_balance",
											"orig": "benefit_maximum_balance",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "benefit_opening_balance",
											"orig": "benefit_opening_balance",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "benefit_tax_year",
											"orig": "benefit_tax_year",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "benefit_whole_month",
											"orig": "benefit_whole_months",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "loan_made_on",
											"orig": "loan_made_on",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "marginal_income_tax_rate",
											"orig": "marginal_income_tax_rate",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "outstanding",
											"orig": "outstanding",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 25000,
											"field": true,
										},
										map[string]any{
											"name": "period_end",
											"orig": "period_end",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2026-03-31",
											"field": true,
										},
										map[string]any{
											"name": "repaid_within_9_month",
											"orig": "repaid_within_9_months",
											"type": "`$NUMBER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"outstanding",
										"period_end",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dividend_reserve": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "calculated_by",
						"title": "Calculated By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "dividends_already_paid",
						"title": "Dividends Already Paid",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Dividends already paid or declared from these profits, in pounds.",
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).",
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "profit_after_tax",
						"title": "Profit After Tax",
						"type": "`$NUMBER`",
						"req": true,
						"short": "This period’s realised profit after Corporation Tax, in pounds.",
					},
					map[string]any{
						"name": "proposed_dividend",
						"title": "Proposed Dividend",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Dividend now proposed, in pounds.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "retained_profits_brought_forward",
						"title": "Retained Profits Brought Forward",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Accumulated retained profits or losses brought forward, in pounds.",
					},
					map[string]any{
						"name": "share_url",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A link to this result on taxley.co.uk.",
						"format": "uri",
					},
					map[string]any{
						"name": "tool",
						"title": "Tool",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "dividend_reserve",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/tools/dividend-reserves",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "dividend-reserves",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"dividend-reserves",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"dividends_already_paid": "`reqdata.dividends_already_paid`",
										"profit_after_tax": "`reqdata.profit_after_tax`",
										"proposed_dividend": "`reqdata.proposed_dividend`",
										"retained_profits_brought_forward": "`reqdata.retained_profits_brought_forward`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools/dividend-reserves",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "dividend-reserves",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"dividend-reserves",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "dividends_already_paid",
											"orig": "dividends_already_paid",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 5000,
											"field": true,
										},
										map[string]any{
											"name": "profit_after_tax",
											"orig": "profit_after_tax",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 18000,
											"field": true,
										},
										map[string]any{
											"name": "proposed_dividend",
											"orig": "proposed_dividend",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 20000,
											"field": true,
										},
										map[string]any{
											"name": "retained_profits_brought_forward",
											"orig": "retained_profits_brought_forward",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 12000,
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dividends_already_paid",
										"profit_after_tax",
										"proposed_dividend",
										"retained_profits_brought_forward",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"home_office": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actual_additional_costs",
						"title": "Actual Additional Costs",
						"type": "`$NUMBER`",
						"short": "Optional total reasonable additional household costs caused by working at home, in pounds, supported by records.",
					},
					map[string]any{
						"name": "calculated_by",
						"title": "Calculated By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "frequency",
						"title": "Frequency",
						"type": "`$STRING`",
						"req": true,
						"short": "Whether to use HMRC’s £6 weekly rate or £26 monthly rate.",
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).",
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "periods",
						"title": "Periods",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of weeks or months of regular homeworking in the tax year; no more than 52 weeks or 12 months.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "share_url",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A link to this result on taxley.co.uk.",
						"format": "uri",
					},
					map[string]any{
						"name": "tax_year",
						"title": "Tax Year",
						"type": "`$STRING`",
						"req": true,
						"short": "UK tax year: 2025-26, 2026-27 or 2027-28.",
					},
					map[string]any{
						"name": "tool",
						"title": "Tool",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "home_office",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/tools/home-office",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "home-office",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"home-office",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"actual_additional_costs": "`reqdata.actual_additional_cost`",
										"frequency": "`reqdata.frequency`",
										"periods": "`reqdata.period`",
										"tax_year": "`reqdata.tax_year`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools/home-office",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "home-office",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"home-office",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "actual_additional_cost",
											"orig": "actual_additional_costs",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "frequency",
											"orig": "frequency",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "weekly",
											"field": true,
										},
										map[string]any{
											"name": "period",
											"orig": "periods",
											"type": "`$INTEGER`",
											"kind": "query",
											"reqd": true,
											"example": 12,
										},
										map[string]any{
											"name": "tax_year",
											"orig": "tax_year",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2025-26",
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"frequency",
										"period",
										"tax_year",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"late_penalty": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "calculated_by",
						"title": "Calculated By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "filed_on",
						"title": "Filed On",
						"type": "`$STRING`",
						"req": true,
						"short": "The date the CT600 was, or will be, filed with HMRC.",
						"format": "date",
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).",
					},
					map[string]any{
						"name": "late_previous_two",
						"title": "Late Previous Two",
						"type": "`$BOOLEAN`",
						"short": "True if the company was liable to a late filing penalty for each of its two previous accounting periods (consecutive, and within Corporation Tax throughout).",
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "paid_on",
						"title": "Paid On",
						"type": "`$STRING`",
						"short": "The date the Corporation Tax was, or will be, paid in full.",
						"format": "date",
					},
					map[string]any{
						"name": "period_end",
						"title": "Period End",
						"type": "`$STRING`",
						"req": true,
						"short": "Last day of the Corporation Tax accounting period the CT600 covers (YYYY-MM-DD), on or after 2015-04-01.",
						"format": "date",
					},
					map[string]any{
						"name": "period_of_account_end",
						"title": "Period Of Account End",
						"type": "`$STRING`",
						"short": "Only if the company's accounts cover more than 12 months (up to 18): the last day of that period of account, no more than 6 months after period_end.",
						"format": "date",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "share_url",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A link to this result on taxley.co.uk.",
						"format": "uri",
					},
					map[string]any{
						"name": "tax_due",
						"title": "Tax Due",
						"type": "`$NUMBER`",
						"short": "Corporation Tax payable for the accounting period, in pounds.",
					},
					map[string]any{
						"name": "tool",
						"title": "Tool",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "late_penalty",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/tools/late-penalty",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "late-penalty",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"late-penalty",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"filed_on": "`reqdata.filed_on`",
										"late_previous_two": "`reqdata.late_previous_two`",
										"paid_on": "`reqdata.paid_on`",
										"period_end": "`reqdata.period_end`",
										"period_of_account_end": "`reqdata.period_of_account_end`",
										"tax_due": "`reqdata.tax_due`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools/late-penalty",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "late-penalty",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"late-penalty",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "filed_on",
											"orig": "filed_on",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2026-08-15",
											"field": true,
										},
										map[string]any{
											"name": "late_previous_two",
											"orig": "late_previous_two",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
											"field": true,
										},
										map[string]any{
											"name": "paid_on",
											"orig": "paid_on",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "period_end",
											"orig": "period_end",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2025-04-30",
											"field": true,
										},
										map[string]any{
											"name": "period_of_account_end",
											"orig": "period_of_account_end",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "tax_due",
											"orig": "tax_due",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filed_on",
										"period_end",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"long_period": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "calculated_by",
						"title": "Calculated By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "first_accounts",
						"title": "First Accounts",
						"type": "`$BOOLEAN`",
						"short": "Optional: true if these are the company's first accounts (sets the Companies House deadline).",
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).",
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "period_end",
						"title": "Period End",
						"type": "`$STRING`",
						"req": true,
						"short": "Last day of the accounts, YYYY-MM-DD.",
						"format": "date",
					},
					map[string]any{
						"name": "period_start",
						"title": "Period Start",
						"type": "`$STRING`",
						"req": true,
						"short": "First day of the accounts (period of account), YYYY-MM-DD.",
						"format": "date",
					},
					map[string]any{
						"name": "profit",
						"title": "Profit",
						"type": "`$NUMBER`",
						"short": "Optional: trading profit for the whole period in pounds, to split by days.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "share_url",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A link to this result on taxley.co.uk.",
						"format": "uri",
					},
					map[string]any{
						"name": "tool",
						"title": "Tool",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "long_period",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/tools/long-period",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "long-period",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"long-period",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"first_accounts": "`reqdata.first_account`",
										"period_end": "`reqdata.period_end`",
										"period_start": "`reqdata.period_start`",
										"profit": "`reqdata.profit`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools/long-period",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "long-period",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"long-period",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "first_account",
											"orig": "first_accounts",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "period_end",
											"orig": "period_end",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2026-03-31",
											"field": true,
										},
										map[string]any{
											"name": "period_start",
											"orig": "period_start",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2025-01-01",
											"field": true,
										},
										map[string]any{
											"name": "profit",
											"orig": "profit",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"period_end",
										"period_start",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"mileage_allowance": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "business_miles",
						"title": "Business Miles",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Total qualifying business miles in this vehicle category during the tax year.",
					},
					map[string]any{
						"name": "calculated_by",
						"title": "Calculated By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "employer_payment",
						"title": "Employer Payment",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Total mileage allowance paid by the company for those miles, in pounds.",
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).",
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "share_url",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A link to this result on taxley.co.uk.",
						"format": "uri",
					},
					map[string]any{
						"name": "tax_year",
						"title": "Tax Year",
						"type": "`$STRING`",
						"req": true,
						"short": "UK tax year: 2025-26, 2026-27 or 2027-28.",
					},
					map[string]any{
						"name": "tool",
						"title": "Tool",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "vehicle",
						"title": "Vehicle",
						"type": "`$STRING`",
						"req": true,
						"short": "The employee-owned vehicle used for business travel: car_van, motorcycle or bicycle.",
					},
				},
				"name": "mileage_allowance",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/tools/mileage-allowance",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "mileage-allowance",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"mileage-allowance",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"business_miles": "`reqdata.business_mile`",
										"employer_payment": "`reqdata.employer_payment`",
										"tax_year": "`reqdata.tax_year`",
										"vehicle": "`reqdata.vehicle`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools/mileage-allowance",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "mileage-allowance",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"mileage-allowance",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "business_mile",
											"orig": "business_miles",
											"type": "`$INTEGER`",
											"kind": "query",
											"reqd": true,
											"example": 12000,
										},
										map[string]any{
											"name": "employer_payment",
											"orig": "employer_payment",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 4200,
											"field": true,
										},
										map[string]any{
											"name": "tax_year",
											"orig": "tax_year",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2025-26",
											"field": true,
										},
										map[string]any{
											"name": "vehicle",
											"orig": "vehicle",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "car_van",
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_mile",
										"employer_payment",
										"tax_year",
										"vehicle",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"salary_dividend": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "associated_companies",
						"title": "Associated Companies",
						"type": "`$INTEGER`",
						"short": "Number of associated companies (companies under common control) that share the £50,000 and £250,000 Corporation Tax limits.",
					},
					map[string]any{
						"name": "calculated_by",
						"title": "Calculated By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "company_profit",
						"title": "Company Profit",
						"type": "`$NUMBER`",
						"req": true,
						"short": "The company's profit for the year before paying the director any salary, after all its other costs, in pounds.",
					},
					map[string]any{
						"name": "director_only_employee",
						"title": "Director Only Employee",
						"type": "`$BOOLEAN`",
						"short": "true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance.",
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).",
					},
					map[string]any{
						"name": "other_income",
						"title": "Other Income",
						"type": "`$NUMBER`",
						"short": "The director's other taxable income for the tax year from outside this company, such as another job, a pension or rental profit, in pounds.",
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "salary",
						"title": "Salary",
						"type": "`$NUMBER`",
						"short": "Optional: a salary you want to compare with the standard options, in pounds a year.",
					},
					map[string]any{
						"name": "scottish_taxpayer",
						"title": "Scottish Taxpayer",
						"type": "`$BOOLEAN`",
						"short": "true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands.",
					},
					map[string]any{
						"name": "share_url",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A link to this result on taxley.co.uk.",
						"format": "uri",
					},
					map[string]any{
						"name": "tax_year",
						"title": "Tax Year",
						"type": "`$STRING`",
						"short": "UK tax year, \"2025-26\" or \"2026-27\" (6 April to 5 April).",
					},
					map[string]any{
						"name": "tool",
						"title": "Tool",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "salary_dividend",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/tools/salary-dividends",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "salary-dividends",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"salary-dividends",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"associated_companies": "`reqdata.associated_company`",
										"company_profit": "`reqdata.company_profit`",
										"director_only_employee": "`reqdata.director_only_employee`",
										"other_income": "`reqdata.other_income`",
										"salary": "`reqdata.salary`",
										"scottish_taxpayer": "`reqdata.scottish_taxpayer`",
										"tax_year": "`reqdata.tax_year`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools/salary-dividends",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "salary-dividends",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"salary-dividends",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "associated_company",
											"orig": "associated_companies",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "company_profit",
											"orig": "company_profit",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 60000,
											"field": true,
										},
										map[string]any{
											"name": "director_only_employee",
											"orig": "director_only_employee",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
											"field": true,
										},
										map[string]any{
											"name": "other_income",
											"orig": "other_income",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "salary",
											"orig": "salary",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "scottish_taxpayer",
											"orig": "scottish_taxpayer",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
											"field": true,
										},
										map[string]any{
											"name": "tax_year",
											"orig": "tax_year",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-27",
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_profit",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"sole_trader_vs_limited": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "calculated_by",
						"title": "Calculated By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "director_only_employee",
						"title": "Director Only Employee",
						"type": "`$BOOLEAN`",
						"short": "true if the director is the company's only employee paid over £5,000 a year (the usual one-person company): the company then can't claim the Employment Allowance.",
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).",
					},
					map[string]any{
						"name": "other_income",
						"title": "Other Income",
						"type": "`$NUMBER`",
						"short": "The owner's other taxable income for the tax year, such as a job, a pension or rental profit, in pounds.",
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "profit",
						"title": "Profit",
						"type": "`$NUMBER`",
						"req": true,
						"short": "The business's profit for the year, after expenses and before any tax or pay to the owner, in pounds.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "scottish_taxpayer",
						"title": "Scottish Taxpayer",
						"type": "`$BOOLEAN`",
						"short": "true if the person pays Scottish Income Tax (their main home is in Scotland): salary, trading profit and other income use the Scottish bands.",
					},
					map[string]any{
						"name": "share_url",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A link to this result on taxley.co.uk.",
						"format": "uri",
					},
					map[string]any{
						"name": "tax_year",
						"title": "Tax Year",
						"type": "`$STRING`",
						"short": "UK tax year, \"2025-26\" or \"2026-27\" (6 April to 5 April).",
					},
					map[string]any{
						"name": "tool",
						"title": "Tool",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "sole_trader_vs_limited",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/tools/sole-trader-vs-limited",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "sole-trader-vs-limited",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"sole-trader-vs-limited",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"director_only_employee": "`reqdata.director_only_employee`",
										"other_income": "`reqdata.other_income`",
										"profit": "`reqdata.profit`",
										"scottish_taxpayer": "`reqdata.scottish_taxpayer`",
										"tax_year": "`reqdata.tax_year`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools/sole-trader-vs-limited",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "sole-trader-vs-limited",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"sole-trader-vs-limited",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "director_only_employee",
											"orig": "director_only_employee",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
											"field": true,
										},
										map[string]any{
											"name": "other_income",
											"orig": "other_income",
											"type": "`$NUMBER`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "profit",
											"orig": "profit",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 50000,
											"field": true,
										},
										map[string]any{
											"name": "scottish_taxpayer",
											"orig": "scottish_taxpayer",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
											"field": true,
										},
										map[string]any{
											"name": "tax_year",
											"orig": "tax_year",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-27",
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"profit",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tool": map[string]any{
				"fields": []any{},
				"name": "tool",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"trivial_benefit": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "benefit_cost",
						"title": "Benefit Cost",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Cost to the company of this individual benefit, in pounds.",
					},
					map[string]any{
						"name": "calculated_by",
						"title": "Calculated By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "cash_or_cash_voucher",
						"title": "Cash Or Cash Voucher",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "True if the benefit is cash or a voucher exchangeable for cash.",
					},
					map[string]any{
						"name": "close_company_director",
						"title": "Close Company Director",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "True if the recipient is a director or office holder of a close company.",
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "in_contract",
						"title": "In Contract",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "True if the benefit is promised in the employment contract or other contractual terms.",
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The input as the tool read it (dates YYYY-MM-DD, money in pounds).",
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "qualifying_benefits_so_far",
						"title": "Qualifying Benefits So Far",
						"type": "`$NUMBER`",
						"req": true,
						"short": "For a close-company director, total cost in pounds of earlier qualifying trivial benefits from this employer in the tax year.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "reward_for_work",
						"title": "Reward For Work",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "True if the benefit rewards the employee’s work or performance.",
					},
					map[string]any{
						"name": "share_url",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A link to this result on taxley.co.uk.",
						"format": "uri",
					},
					map[string]any{
						"name": "tax_year",
						"title": "Tax Year",
						"type": "`$STRING`",
						"req": true,
						"short": "UK tax year: 2025-26, 2026-27 or 2027-28.",
					},
					map[string]any{
						"name": "tool",
						"title": "Tool",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "trivial_benefit",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/tools/trivial-benefits",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "trivial-benefits",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"trivial-benefits",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"benefit_cost": "`reqdata.benefit_cost`",
										"cash_or_cash_voucher": "`reqdata.cash_or_cash_voucher`",
										"close_company_director": "`reqdata.close_company_director`",
										"in_contract": "`reqdata.in_contract`",
										"qualifying_benefits_so_far": "`reqdata.qualifying_benefits_so_far`",
										"reward_for_work": "`reqdata.reward_for_work`",
										"tax_year": "`reqdata.tax_year`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tools/trivial-benefits",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tools",
									},
									map[string]any{
										"lit": "trivial-benefits",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"tools",
									"trivial-benefits",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "benefit_cost",
											"orig": "benefit_cost",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 40,
											"field": true,
										},
										map[string]any{
											"name": "cash_or_cash_voucher",
											"orig": "cash_or_cash_voucher",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"reqd": true,
											"example": false,
											"field": true,
										},
										map[string]any{
											"name": "close_company_director",
											"orig": "close_company_director",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"reqd": true,
											"example": true,
											"field": true,
										},
										map[string]any{
											"name": "in_contract",
											"orig": "in_contract",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"reqd": true,
											"example": false,
											"field": true,
										},
										map[string]any{
											"name": "qualifying_benefits_so_far",
											"orig": "qualifying_benefits_so_far",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 240,
											"field": true,
										},
										map[string]any{
											"name": "reward_for_work",
											"orig": "reward_for_work",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"reqd": true,
											"example": false,
											"field": true,
										},
										map[string]any{
											"name": "tax_year",
											"orig": "tax_year",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2025-26",
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"benefit_cost",
										"cash_or_cash_voucher",
										"close_company_director",
										"in_contract",
										"qualifying_benefits_so_far",
										"reward_for_work",
										"tax_year",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
