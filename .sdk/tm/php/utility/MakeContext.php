<?php
declare(strict_types=1);

// TaxleyCorporationTax SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class TaxleyCorporationTaxMakeContext
{
    public static function call(array $ctxmap, ?TaxleyCorporationTaxContext $basectx): TaxleyCorporationTaxContext
    {
        return new TaxleyCorporationTaxContext($ctxmap, $basectx);
    }
}
