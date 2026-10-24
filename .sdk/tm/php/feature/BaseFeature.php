<?php
declare(strict_types=1);

// TaxleyCorporationTax SDK base feature

class TaxleyCorporationTaxBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(TaxleyCorporationTaxContext $ctx, array $options): void {}
    public function PostConstruct(TaxleyCorporationTaxContext $ctx): void {}
    public function PostConstructEntity(TaxleyCorporationTaxContext $ctx): void {}
    public function SetData(TaxleyCorporationTaxContext $ctx): void {}
    public function GetData(TaxleyCorporationTaxContext $ctx): void {}
    public function GetMatch(TaxleyCorporationTaxContext $ctx): void {}
    public function SetMatch(TaxleyCorporationTaxContext $ctx): void {}
    public function PrePoint(TaxleyCorporationTaxContext $ctx): void {}
    public function PreSpec(TaxleyCorporationTaxContext $ctx): void {}
    public function PreRequest(TaxleyCorporationTaxContext $ctx): void {}
    public function PreResponse(TaxleyCorporationTaxContext $ctx): void {}
    public function PreResult(TaxleyCorporationTaxContext $ctx): void {}
    public function PreDone(TaxleyCorporationTaxContext $ctx): void {}
    public function PreUnexpected(TaxleyCorporationTaxContext $ctx): void {}
}
