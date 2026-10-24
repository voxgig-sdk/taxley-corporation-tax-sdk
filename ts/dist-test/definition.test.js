"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "capital_allowance",
        "accessor": "CapitalAllowance",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/tools/capital-allowances",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "capital_allowance",
        "accessor": "CapitalAllowance",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools/capital-allowances",
        "args": [],
        "select": {
            "period_end": "2027-03-31",
            "period_start": "2026-04-01",
            "aia_shared": "v1",
            "full_expensed_disposal": "v1",
            "main_pool_brought_forward": "v1",
            "main_pool_disposal": "v1",
            "new_main_plant": 40000,
            "new_special_rate": "v1",
            "other_cars_high_co2": "v1",
            "other_cars_low_co2": "v1",
            "special_pool_brought_forward": "v1",
            "spend_date": "v1",
            "used_main_plant": "v1",
            "used_special_rate": "v1",
            "zero_emission_car": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "period_start",
            "period_end",
            "spend_date",
            "new_main_plant",
            "used_main_plant",
            "new_special_rate",
            "used_special_rate",
            "zero_emission_cars",
            "other_cars_low_co2",
            "other_cars_high_co2",
            "main_pool_brought_forward",
            "special_pool_brought_forward",
            "main_pool_disposals",
            "full_expensed_disposals",
            "aia_shared"
        ],
        "queryArgs": [
            {
                "name": "aia_shared",
                "wire": "aia_shared"
            },
            {
                "name": "full_expensed_disposal",
                "wire": "full_expensed_disposals"
            },
            {
                "name": "main_pool_brought_forward",
                "wire": "main_pool_brought_forward"
            },
            {
                "name": "main_pool_disposal",
                "wire": "main_pool_disposals"
            },
            {
                "name": "new_main_plant",
                "wire": "new_main_plant"
            },
            {
                "name": "new_special_rate",
                "wire": "new_special_rate"
            },
            {
                "name": "other_cars_high_co2",
                "wire": "other_cars_high_co2"
            },
            {
                "name": "other_cars_low_co2",
                "wire": "other_cars_low_co2"
            },
            {
                "name": "period_end",
                "wire": "period_end"
            },
            {
                "name": "period_start",
                "wire": "period_start"
            },
            {
                "name": "special_pool_brought_forward",
                "wire": "special_pool_brought_forward"
            },
            {
                "name": "spend_date",
                "wire": "spend_date"
            },
            {
                "name": "used_main_plant",
                "wire": "used_main_plant"
            },
            {
                "name": "used_special_rate",
                "wire": "used_special_rate"
            },
            {
                "name": "zero_emission_car",
                "wire": "zero_emission_cars"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "chargeable_gain",
        "accessor": "ChargeableGain",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/tools/chargeable-gains",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "chargeable_gain",
        "accessor": "ChargeableGain",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools/chargeable-gains",
        "args": [],
        "select": {
            "acquisition_cost": 250000,
            "acquisition_date": "2008-06-01",
            "asset_type": "land_buildings",
            "disposal_date": "2026-06-30",
            "proceed": "v1",
            "disposal_cost": "v1",
            "enhancement_cost": "v1",
            "enhancement_date": "v1",
            "sba_claimed": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "asset_type",
            "acquisition_date",
            "acquisition_cost",
            "acquisition_costs",
            "enhancement_date",
            "enhancement_cost",
            "sba_claimed",
            "disposal_date",
            "proceeds",
            "disposal_costs"
        ],
        "queryArgs": [
            {
                "name": "acquisition_cost",
                "wire": "acquisition_cost"
            },
            {
                "name": "acquisition_cost",
                "wire": "acquisition_costs"
            },
            {
                "name": "acquisition_date",
                "wire": "acquisition_date"
            },
            {
                "name": "asset_type",
                "wire": "asset_type"
            },
            {
                "name": "disposal_cost",
                "wire": "disposal_costs"
            },
            {
                "name": "disposal_date",
                "wire": "disposal_date"
            },
            {
                "name": "enhancement_cost",
                "wire": "enhancement_cost"
            },
            {
                "name": "enhancement_date",
                "wire": "enhancement_date"
            },
            {
                "name": "proceed",
                "wire": "proceeds"
            },
            {
                "name": "sba_claimed",
                "wire": "sba_claimed"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "company_car",
        "accessor": "CompanyCar",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/tools/company-car",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "company_car",
        "accessor": "CompanyCar",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools/company-car",
        "args": [],
        "select": {
            "fuel_type": "electric",
            "income_tax_rate": "basic",
            "list_price": 40000,
            "tax_year": "2025-26",
            "acquisition": "v1",
            "annual_lease_cost": "v1",
            "associated_company": "v1",
            "capital_contribution": "v1",
            "co2_gkm": "v1",
            "company_profit": "v1",
            "electric_range_mile": "v1",
            "lease_started": "v1",
            "months_available": "v1",
            "new_car": "v1",
            "phev_easement": "v1",
            "price_paid": "v1",
            "private_fuel": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "tax_year",
            "list_price",
            "capital_contribution",
            "fuel_type",
            "co2_gkm",
            "electric_range_miles",
            "phev_easement",
            "months_available",
            "private_fuel",
            "income_tax_rate",
            "acquisition",
            "price_paid",
            "new_car",
            "annual_lease_cost",
            "lease_started",
            "company_profits",
            "associated_companies"
        ],
        "queryArgs": [
            {
                "name": "acquisition",
                "wire": "acquisition"
            },
            {
                "name": "annual_lease_cost",
                "wire": "annual_lease_cost"
            },
            {
                "name": "associated_company",
                "wire": "associated_companies"
            },
            {
                "name": "capital_contribution",
                "wire": "capital_contribution"
            },
            {
                "name": "co2_gkm",
                "wire": "co2_gkm"
            },
            {
                "name": "company_profit",
                "wire": "company_profits"
            },
            {
                "name": "electric_range_mile",
                "wire": "electric_range_miles"
            },
            {
                "name": "fuel_type",
                "wire": "fuel_type"
            },
            {
                "name": "income_tax_rate",
                "wire": "income_tax_rate"
            },
            {
                "name": "lease_started",
                "wire": "lease_started"
            },
            {
                "name": "list_price",
                "wire": "list_price"
            },
            {
                "name": "months_available",
                "wire": "months_available"
            },
            {
                "name": "new_car",
                "wire": "new_car"
            },
            {
                "name": "phev_easement",
                "wire": "phev_easement"
            },
            {
                "name": "price_paid",
                "wire": "price_paid"
            },
            {
                "name": "private_fuel",
                "wire": "private_fuel"
            },
            {
                "name": "tax_year",
                "wire": "tax_year"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "company_size",
        "accessor": "CompanySize",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/tools/company-size",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "company_size",
        "accessor": "CompanySize",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools/company-size",
        "args": [],
        "select": {
            "balance_sheet_total": 420000,
            "employee": "v1",
            "period_end": "2026-04-30",
            "period_start": "2025-05-01",
            "turnover": 850000,
            "first_year": "v1",
            "prev_balance_sheet_total": "v1",
            "prev_employee": "v1",
            "prev_size": "v1",
            "prev_turnover": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "period_start",
            "period_end",
            "turnover",
            "balance_sheet_total",
            "employees",
            "first_year",
            "prev_turnover",
            "prev_balance_sheet_total",
            "prev_employees",
            "prev_size"
        ],
        "queryArgs": [
            {
                "name": "balance_sheet_total",
                "wire": "balance_sheet_total"
            },
            {
                "name": "employee",
                "wire": "employees"
            },
            {
                "name": "first_year",
                "wire": "first_year"
            },
            {
                "name": "period_end",
                "wire": "period_end"
            },
            {
                "name": "period_start",
                "wire": "period_start"
            },
            {
                "name": "prev_balance_sheet_total",
                "wire": "prev_balance_sheet_total"
            },
            {
                "name": "prev_employee",
                "wire": "prev_employees"
            },
            {
                "name": "prev_size",
                "wire": "prev_size"
            },
            {
                "name": "prev_turnover",
                "wire": "prev_turnover"
            },
            {
                "name": "turnover",
                "wire": "turnover"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "company_van",
        "accessor": "CompanyVan",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/tools/company-van",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "company_van",
        "accessor": "CompanyVan",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools/company-van",
        "args": [],
        "select": {
            "income_tax_rate": "basic",
            "tax_year": "2025-26",
            "associated_company": "v1",
            "company_profit": "v1",
            "months_available": "v1",
            "price_paid": "v1",
            "private_fuel": "v1",
            "zero_emission": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "tax_year",
            "zero_emission",
            "private_fuel",
            "months_available",
            "income_tax_rate",
            "company_profits",
            "associated_companies",
            "price_paid"
        ],
        "queryArgs": [
            {
                "name": "associated_company",
                "wire": "associated_companies"
            },
            {
                "name": "company_profit",
                "wire": "company_profits"
            },
            {
                "name": "income_tax_rate",
                "wire": "income_tax_rate"
            },
            {
                "name": "months_available",
                "wire": "months_available"
            },
            {
                "name": "price_paid",
                "wire": "price_paid"
            },
            {
                "name": "private_fuel",
                "wire": "private_fuel"
            },
            {
                "name": "tax_year",
                "wire": "tax_year"
            },
            {
                "name": "zero_emission",
                "wire": "zero_emission"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "corporation_tax",
        "accessor": "CorporationTax",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/tools/corporation-tax",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "corporation_tax",
        "accessor": "CorporationTax",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools/corporation-tax",
        "args": [],
        "select": {
            "period_end": "2026-03-31",
            "period_start": "2025-04-01",
            "taxable_profit": "v1",
            "associated_company": 0,
            "close_investment_holding": "v1",
            "exempt_distribution": 0
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "period_start",
            "period_end",
            "taxable_profits",
            "associated_companies",
            "exempt_distributions",
            "close_investment_holding"
        ],
        "queryArgs": [
            {
                "name": "associated_company",
                "wire": "associated_companies"
            },
            {
                "name": "close_investment_holding",
                "wire": "close_investment_holding"
            },
            {
                "name": "exempt_distribution",
                "wire": "exempt_distributions"
            },
            {
                "name": "period_end",
                "wire": "period_end"
            },
            {
                "name": "period_start",
                "wire": "period_start"
            },
            {
                "name": "taxable_profit",
                "wire": "taxable_profits"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "deadline",
        "accessor": "Deadline",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/tools/deadlines",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "deadline",
        "accessor": "Deadline",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools/deadlines",
        "args": [],
        "select": {
            "period_end": "2026-03-31",
            "period_start": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "period_end",
            "period_start"
        ],
        "queryArgs": [
            {
                "name": "period_end",
                "wire": "period_end"
            },
            {
                "name": "period_start",
                "wire": "period_start"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "director_pension",
        "accessor": "DirectorPension",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/tools/director-pension",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "director_pension",
        "accessor": "DirectorPension",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools/director-pension",
        "args": [],
        "select": {
            "company_profit": 60000,
            "contribution": 10000,
            "associated_company": 0,
            "director_only_employee": "v1",
            "dividend": "v1",
            "money_purchase_allowance": "v1",
            "other_income": "v1",
            "other_pension_contribution": "v1",
            "salary": "v1",
            "scottish_taxpayer": "v1",
            "tax_year": "2026-27"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "tax_year",
            "contribution",
            "company_profit",
            "salary",
            "dividends",
            "other_income",
            "other_pension_contributions",
            "money_purchase_allowance",
            "director_only_employee",
            "scottish_taxpayer",
            "associated_companies"
        ],
        "queryArgs": [
            {
                "name": "associated_company",
                "wire": "associated_companies"
            },
            {
                "name": "company_profit",
                "wire": "company_profit"
            },
            {
                "name": "contribution",
                "wire": "contribution"
            },
            {
                "name": "director_only_employee",
                "wire": "director_only_employee"
            },
            {
                "name": "dividend",
                "wire": "dividends"
            },
            {
                "name": "money_purchase_allowance",
                "wire": "money_purchase_allowance"
            },
            {
                "name": "other_income",
                "wire": "other_income"
            },
            {
                "name": "other_pension_contribution",
                "wire": "other_pension_contributions"
            },
            {
                "name": "salary",
                "wire": "salary"
            },
            {
                "name": "scottish_taxpayer",
                "wire": "scottish_taxpayer"
            },
            {
                "name": "tax_year",
                "wire": "tax_year"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "directors_loan",
        "accessor": "DirectorsLoan",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/tools/directors-loan",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "directors_loan",
        "accessor": "DirectorsLoan",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools/directors-loan",
        "args": [],
        "select": {
            "outstanding": 25000,
            "period_end": "2026-03-31",
            "benefit_closing_balance": "v1",
            "benefit_interest_paid": "v1",
            "benefit_maximum_balance": "v1",
            "benefit_opening_balance": "v1",
            "benefit_tax_year": "v1",
            "benefit_whole_month": "v1",
            "loan_made_on": "v1",
            "marginal_income_tax_rate": "v1",
            "repaid_within_9_month": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "period_end",
            "outstanding",
            "repaid_within_9_months",
            "loan_made_on",
            "benefit_tax_year",
            "benefit_opening_balance",
            "benefit_closing_balance",
            "benefit_maximum_balance",
            "benefit_whole_months",
            "benefit_interest_paid",
            "marginal_income_tax_rate"
        ],
        "queryArgs": [
            {
                "name": "benefit_closing_balance",
                "wire": "benefit_closing_balance"
            },
            {
                "name": "benefit_interest_paid",
                "wire": "benefit_interest_paid"
            },
            {
                "name": "benefit_maximum_balance",
                "wire": "benefit_maximum_balance"
            },
            {
                "name": "benefit_opening_balance",
                "wire": "benefit_opening_balance"
            },
            {
                "name": "benefit_tax_year",
                "wire": "benefit_tax_year"
            },
            {
                "name": "benefit_whole_month",
                "wire": "benefit_whole_months"
            },
            {
                "name": "loan_made_on",
                "wire": "loan_made_on"
            },
            {
                "name": "marginal_income_tax_rate",
                "wire": "marginal_income_tax_rate"
            },
            {
                "name": "outstanding",
                "wire": "outstanding"
            },
            {
                "name": "period_end",
                "wire": "period_end"
            },
            {
                "name": "repaid_within_9_month",
                "wire": "repaid_within_9_months"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "dividend_reserve",
        "accessor": "DividendReserve",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/tools/dividend-reserves",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "dividend_reserve",
        "accessor": "DividendReserve",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools/dividend-reserves",
        "args": [],
        "select": {
            "dividends_already_paid": 5000,
            "profit_after_tax": 18000,
            "proposed_dividend": 20000,
            "retained_profits_brought_forward": 12000
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "retained_profits_brought_forward",
            "profit_after_tax",
            "dividends_already_paid",
            "proposed_dividend"
        ],
        "queryArgs": [
            {
                "name": "dividends_already_paid",
                "wire": "dividends_already_paid"
            },
            {
                "name": "profit_after_tax",
                "wire": "profit_after_tax"
            },
            {
                "name": "proposed_dividend",
                "wire": "proposed_dividend"
            },
            {
                "name": "retained_profits_brought_forward",
                "wire": "retained_profits_brought_forward"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "home_office",
        "accessor": "HomeOffice",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/tools/home-office",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "home_office",
        "accessor": "HomeOffice",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools/home-office",
        "args": [],
        "select": {
            "frequency": "weekly",
            "period": "v1",
            "tax_year": "2025-26",
            "actual_additional_cost": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "tax_year",
            "frequency",
            "periods",
            "actual_additional_costs"
        ],
        "queryArgs": [
            {
                "name": "actual_additional_cost",
                "wire": "actual_additional_costs"
            },
            {
                "name": "frequency",
                "wire": "frequency"
            },
            {
                "name": "period",
                "wire": "periods"
            },
            {
                "name": "tax_year",
                "wire": "tax_year"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "late_penalty",
        "accessor": "LatePenalty",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/tools/late-penalty",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "late_penalty",
        "accessor": "LatePenalty",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools/late-penalty",
        "args": [],
        "select": {
            "filed_on": "2026-08-15",
            "period_end": "2025-04-30",
            "late_previous_two": "v1",
            "paid_on": "v1",
            "period_of_account_end": "v1",
            "tax_due": 0
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "period_end",
            "period_of_account_end",
            "filed_on",
            "tax_due",
            "paid_on",
            "late_previous_two"
        ],
        "queryArgs": [
            {
                "name": "filed_on",
                "wire": "filed_on"
            },
            {
                "name": "late_previous_two",
                "wire": "late_previous_two"
            },
            {
                "name": "paid_on",
                "wire": "paid_on"
            },
            {
                "name": "period_end",
                "wire": "period_end"
            },
            {
                "name": "period_of_account_end",
                "wire": "period_of_account_end"
            },
            {
                "name": "tax_due",
                "wire": "tax_due"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "long_period",
        "accessor": "LongPeriod",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/tools/long-period",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "long_period",
        "accessor": "LongPeriod",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools/long-period",
        "args": [],
        "select": {
            "period_end": "2026-03-31",
            "period_start": "2025-01-01",
            "first_account": "v1",
            "profit": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "period_start",
            "period_end",
            "profit",
            "first_accounts"
        ],
        "queryArgs": [
            {
                "name": "first_account",
                "wire": "first_accounts"
            },
            {
                "name": "period_end",
                "wire": "period_end"
            },
            {
                "name": "period_start",
                "wire": "period_start"
            },
            {
                "name": "profit",
                "wire": "profit"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "mileage_allowance",
        "accessor": "MileageAllowance",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/tools/mileage-allowance",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "mileage_allowance",
        "accessor": "MileageAllowance",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools/mileage-allowance",
        "args": [],
        "select": {
            "business_mile": "v1",
            "employer_payment": 4200,
            "tax_year": "2025-26",
            "vehicle": "car_van"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "tax_year",
            "vehicle",
            "business_miles",
            "employer_payment"
        ],
        "queryArgs": [
            {
                "name": "business_mile",
                "wire": "business_miles"
            },
            {
                "name": "employer_payment",
                "wire": "employer_payment"
            },
            {
                "name": "tax_year",
                "wire": "tax_year"
            },
            {
                "name": "vehicle",
                "wire": "vehicle"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "salary_dividend",
        "accessor": "SalaryDividend",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/tools/salary-dividends",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "salary_dividend",
        "accessor": "SalaryDividend",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools/salary-dividends",
        "args": [],
        "select": {
            "company_profit": 60000,
            "associated_company": 0,
            "director_only_employee": "v1",
            "other_income": "v1",
            "salary": "v1",
            "scottish_taxpayer": "v1",
            "tax_year": "2026-27"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "tax_year",
            "company_profit",
            "other_income",
            "director_only_employee",
            "salary",
            "scottish_taxpayer",
            "associated_companies"
        ],
        "queryArgs": [
            {
                "name": "associated_company",
                "wire": "associated_companies"
            },
            {
                "name": "company_profit",
                "wire": "company_profit"
            },
            {
                "name": "director_only_employee",
                "wire": "director_only_employee"
            },
            {
                "name": "other_income",
                "wire": "other_income"
            },
            {
                "name": "salary",
                "wire": "salary"
            },
            {
                "name": "scottish_taxpayer",
                "wire": "scottish_taxpayer"
            },
            {
                "name": "tax_year",
                "wire": "tax_year"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "sole_trader_vs_limited",
        "accessor": "SoleTraderVsLimited",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/tools/sole-trader-vs-limited",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "sole_trader_vs_limited",
        "accessor": "SoleTraderVsLimited",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools/sole-trader-vs-limited",
        "args": [],
        "select": {
            "profit": 50000,
            "director_only_employee": "v1",
            "other_income": "v1",
            "scottish_taxpayer": "v1",
            "tax_year": "2026-27"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "tax_year",
            "profit",
            "other_income",
            "director_only_employee",
            "scottish_taxpayer"
        ],
        "queryArgs": [
            {
                "name": "director_only_employee",
                "wire": "director_only_employee"
            },
            {
                "name": "other_income",
                "wire": "other_income"
            },
            {
                "name": "profit",
                "wire": "profit"
            },
            {
                "name": "scottish_taxpayer",
                "wire": "scottish_taxpayer"
            },
            {
                "name": "tax_year",
                "wire": "tax_year"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "tool",
        "accessor": "Tool",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {},
        "idField": "id"
    },
    {
        "entity": "trivial_benefit",
        "accessor": "TrivialBenefit",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/tools/trivial-benefits",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    },
    {
        "entity": "trivial_benefit",
        "accessor": "TrivialBenefit",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/tools/trivial-benefits",
        "args": [],
        "select": {
            "benefit_cost": 40,
            "cash_or_cash_voucher": "v1",
            "close_company_director": "v1",
            "in_contract": "v1",
            "qualifying_benefits_so_far": 240,
            "reward_for_work": "v1",
            "tax_year": "2025-26"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "tax_year",
            "benefit_cost",
            "cash_or_cash_voucher",
            "reward_for_work",
            "in_contract",
            "close_company_director",
            "qualifying_benefits_so_far"
        ],
        "queryArgs": [
            {
                "name": "benefit_cost",
                "wire": "benefit_cost"
            },
            {
                "name": "cash_or_cash_voucher",
                "wire": "cash_or_cash_voucher"
            },
            {
                "name": "close_company_director",
                "wire": "close_company_director"
            },
            {
                "name": "in_contract",
                "wire": "in_contract"
            },
            {
                "name": "qualifying_benefits_so_far",
                "wire": "qualifying_benefits_so_far"
            },
            {
                "name": "reward_for_work",
                "wire": "reward_for_work"
            },
            {
                "name": "tax_year",
                "wire": "tax_year"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "tool": "x",
            "input": {},
            "result": {
                "answer": "x",
                "figures": [
                    {
                        "label": "x",
                        "value": "x"
                    }
                ],
                "data": {},
                "notes": [
                    "x"
                ],
                "sources": [
                    {
                        "title": "x",
                        "url": "x"
                    }
                ]
            },
            "page_url": "x",
            "share_url": "x",
            "calculated_by": "x",
            "disclaimer": "x"
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map