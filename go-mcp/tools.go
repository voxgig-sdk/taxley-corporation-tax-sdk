package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/google/jsonschema-go/jsonschema"
	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/taxley-corporation-tax-sdk/go"
)

// LoadArgs is what an agent sends to taxley-corporation-tax_load.
type LoadArgs struct {
	Entity string         `json:"entity" jsonschema:"one of: capital_allowance | chargeable_gain | company_car | company_size | company_van | corporation_tax | deadline | director_pension | directors_loan | dividend_reserve | home_office | late_penalty | long_period | mileage_allowance | salary_dividend | sole_trader_vs_limited | tool | trivial_benefit"`
	Query  map[string]any `json:"query" jsonschema:"match map naming the record, such as {\"id\":1}"`
}

func registerTools(server *mcp.Server, client *sdk.TaxleyCorporationTaxSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name:        "taxley-corporation-tax_load",
		Description: "Load one record from TaxleyCorporationTax. Args: entity, query (match map naming the record, such as {\"id\":1}). Returns the record as JSON.",
		Annotations: &mcp.ToolAnnotations{ReadOnlyHint: true},
		InputSchema: entitySchema[LoadArgs]("capital_allowance", "chargeable_gain", "company_car", "company_size", "company_van", "corporation_tax", "deadline", "director_pension", "directors_loan", "dividend_reserve", "home_office", "late_penalty", "long_period", "mileage_allowance", "salary_dividend", "sole_trader_vs_limited", "tool", "trivial_benefit"),
	}, func(ctx context.Context, req *mcp.CallToolRequest, args LoadArgs) (*mcp.CallToolResult, any, error) {
		return runOp(ctx, client, "load", args.Entity, args.Query)
	})
}

// entitySchema is the schema inferred from In, its entity limited to the
// entities the tool serves.
func entitySchema[In any](names ...string) *jsonschema.Schema {
	schema, err := jsonschema.For[In](nil)
	if err != nil {
		panic(err)
	}
	enum := make([]any, len(names))
	for i, name := range names {
		enum[i] = name
	}
	schema.Properties["entity"].Enum = enum
	return schema
}

func runOp(_ context.Context, client *sdk.TaxleyCorporationTaxSDK, op string, entity string, input map[string]any) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(input, nil)
	case "load":
		result, err = ent.Load(input, nil)
	case "create":
		result, err = ent.Create(input, nil)
	case "update":
		result, err = ent.Update(input, nil)
	case "patch":
		result, err = ent.Patch(input, nil)
	case "remove":
		result, err = ent.Remove(input, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.TaxleyCorporationTaxSDK, name string) (sdk.TaxleyCorporationTaxEntity, error) {
	switch strings.ToLower(name) {
	case "capital_allowance":
		return client.CapitalAllowance(nil), nil
	case "chargeable_gain":
		return client.ChargeableGain(nil), nil
	case "company_car":
		return client.CompanyCar(nil), nil
	case "company_size":
		return client.CompanySize(nil), nil
	case "company_van":
		return client.CompanyVan(nil), nil
	case "corporation_tax":
		return client.CorporationTax(nil), nil
	case "deadline":
		return client.Deadline(nil), nil
	case "director_pension":
		return client.DirectorPension(nil), nil
	case "directors_loan":
		return client.DirectorsLoan(nil), nil
	case "dividend_reserve":
		return client.DividendReserve(nil), nil
	case "home_office":
		return client.HomeOffice(nil), nil
	case "late_penalty":
		return client.LatePenalty(nil), nil
	case "long_period":
		return client.LongPeriod(nil), nil
	case "mileage_allowance":
		return client.MileageAllowance(nil), nil
	case "salary_dividend":
		return client.SalaryDividend(nil), nil
	case "sole_trader_vs_limited":
		return client.SoleTraderVsLimited(nil), nil
	case "tool":
		return client.Tool(nil), nil
	case "trivial_benefit":
		return client.TrivialBenefit(nil), nil
	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}

// hint is an MCP annotation that defaults to true unless stated.
func hint(b bool) *bool {
	return &b
}
