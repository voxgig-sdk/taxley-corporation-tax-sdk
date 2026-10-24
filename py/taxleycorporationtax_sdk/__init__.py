# TaxleyCorporationTax SDK

from taxleycorporationtax_sdk.utility.voxgig_struct import voxgig_struct as vs
from taxleycorporationtax_sdk.core.utility_type import TaxleyCorporationTaxUtility
from taxleycorporationtax_sdk.core.spec import TaxleyCorporationTaxSpec
from taxleycorporationtax_sdk.core import helpers
from taxleycorporationtax_sdk.utility.prepare_method import allowed
from taxleycorporationtax_sdk.utility.result_body import unreadable_body

# Load utility registration (populates Utility._registrar)
from taxleycorporationtax_sdk.utility import register

# Load features
from taxleycorporationtax_sdk.feature.base_feature import TaxleyCorporationTaxBaseFeature
from taxleycorporationtax_sdk.features import _has_feature, _make_feature


class TaxleyCorporationTaxSDK:
    # The options hold the credential. A slot keeps them reachable as
    # `client.options` and out of `vars(client)` and every attribute dump;
    # the dict entry keeps the instance open for everything else.
    __slots__ = ("_options", "__dict__")

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self._options = None

        utility = TaxleyCorporationTaxUtility()
        self._utility = utility

        from taxleycorporationtax_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    @property
    def options(self):
        return self._options

    @options.setter
    def options(self, value):
        self._options = value

    def __repr__(self):
        return "TaxleyCorporationTaxSDK(mode=" + repr(self.mode) + ")"

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return TaxleyCorporationTaxUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"
        method = method.upper()

        allow_method = vs.getpath(options, "allow.method")
        if not allowed(allow_method, method):
            raise ctx.make_error("spec_method_allow",
                'Method "' + method +
                '" not allowed by SDK option allow.method value: "' + str(allow_method) + '"')

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = TaxleyCorporationTaxSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        return allowed(vs.getpath(self.options, "allow.op"), op)

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "TaxleyCorporationTaxSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            # That error never passes through make_error, so it is cleaned.
            return {"ok": False, "err": utility.clean(self._rootctx, err)}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": utility.clean(ctx, fetch_err)}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            body_err = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None
                if vs.getprop(fetched, "unreadable") is True:
                    failed = None if 200 <= status < 300 else ctx.make_error(
                        "request_status",
                        "request: " + str(status) + ": " + str(vs.getprop(fetched, "statusText")))
                    body_err = unreadable_body(ctx, status, headers, vs.getprop(fetched, "body"),
                                               fetchdef.get("headers"), failed)

            out = {
                "ok": body_err is None and status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }
            if body_err is not None:
                out["err"] = utility.clean(ctx, body_err)
            return out

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("TaxleyCorporationTaxSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def CapitalAllowance(self, data=None) -> "CapitalAllowanceEntity":
        """Entity factory: client.CapitalAllowance().list() / client.CapitalAllowance().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.capital_allowance_entity import CapitalAllowanceEntity
        return CapitalAllowanceEntity(self, data)


    def ChargeableGain(self, data=None) -> "ChargeableGainEntity":
        """Entity factory: client.ChargeableGain().list() / client.ChargeableGain().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.chargeable_gain_entity import ChargeableGainEntity
        return ChargeableGainEntity(self, data)


    def CompanyCar(self, data=None) -> "CompanyCarEntity":
        """Entity factory: client.CompanyCar().list() / client.CompanyCar().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.company_car_entity import CompanyCarEntity
        return CompanyCarEntity(self, data)


    def CompanySize(self, data=None) -> "CompanySizeEntity":
        """Entity factory: client.CompanySize().list() / client.CompanySize().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.company_size_entity import CompanySizeEntity
        return CompanySizeEntity(self, data)


    def CompanyVan(self, data=None) -> "CompanyVanEntity":
        """Entity factory: client.CompanyVan().list() / client.CompanyVan().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.company_van_entity import CompanyVanEntity
        return CompanyVanEntity(self, data)


    def CorporationTax(self, data=None) -> "CorporationTaxEntity":
        """Entity factory: client.CorporationTax().list() / client.CorporationTax().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.corporation_tax_entity import CorporationTaxEntity
        return CorporationTaxEntity(self, data)


    def Deadline(self, data=None) -> "DeadlineEntity":
        """Entity factory: client.Deadline().list() / client.Deadline().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.deadline_entity import DeadlineEntity
        return DeadlineEntity(self, data)


    def DirectorPension(self, data=None) -> "DirectorPensionEntity":
        """Entity factory: client.DirectorPension().list() / client.DirectorPension().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.director_pension_entity import DirectorPensionEntity
        return DirectorPensionEntity(self, data)


    def DirectorsLoan(self, data=None) -> "DirectorsLoanEntity":
        """Entity factory: client.DirectorsLoan().list() / client.DirectorsLoan().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.directors_loan_entity import DirectorsLoanEntity
        return DirectorsLoanEntity(self, data)


    def DividendReserve(self, data=None) -> "DividendReserveEntity":
        """Entity factory: client.DividendReserve().list() / client.DividendReserve().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.dividend_reserve_entity import DividendReserveEntity
        return DividendReserveEntity(self, data)


    def HomeOffice(self, data=None) -> "HomeOfficeEntity":
        """Entity factory: client.HomeOffice().list() / client.HomeOffice().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.home_office_entity import HomeOfficeEntity
        return HomeOfficeEntity(self, data)


    def LatePenalty(self, data=None) -> "LatePenaltyEntity":
        """Entity factory: client.LatePenalty().list() / client.LatePenalty().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.late_penalty_entity import LatePenaltyEntity
        return LatePenaltyEntity(self, data)


    def LongPeriod(self, data=None) -> "LongPeriodEntity":
        """Entity factory: client.LongPeriod().list() / client.LongPeriod().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.long_period_entity import LongPeriodEntity
        return LongPeriodEntity(self, data)


    def MileageAllowance(self, data=None) -> "MileageAllowanceEntity":
        """Entity factory: client.MileageAllowance().list() / client.MileageAllowance().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.mileage_allowance_entity import MileageAllowanceEntity
        return MileageAllowanceEntity(self, data)


    def SalaryDividend(self, data=None) -> "SalaryDividendEntity":
        """Entity factory: client.SalaryDividend().list() / client.SalaryDividend().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.salary_dividend_entity import SalaryDividendEntity
        return SalaryDividendEntity(self, data)


    def SoleTraderVsLimited(self, data=None) -> "SoleTraderVsLimitedEntity":
        """Entity factory: client.SoleTraderVsLimited().list() / client.SoleTraderVsLimited().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.sole_trader_vs_limited_entity import SoleTraderVsLimitedEntity
        return SoleTraderVsLimitedEntity(self, data)


    def Tool(self, data=None) -> "ToolEntity":
        """Entity factory: client.Tool().list() / client.Tool().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.tool_entity import ToolEntity
        return ToolEntity(self, data)


    def TrivialBenefit(self, data=None) -> "TrivialBenefitEntity":
        """Entity factory: client.TrivialBenefit().list() / client.TrivialBenefit().load({"id": ...})."""
        from taxleycorporationtax_sdk.entity.trivial_benefit_entity import TrivialBenefitEntity
        return TrivialBenefitEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "TaxleyCorporationTaxSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from taxleycorporationtax_sdk.entity.capital_allowance_entity import CapitalAllowanceEntity
    from taxleycorporationtax_sdk.entity.chargeable_gain_entity import ChargeableGainEntity
    from taxleycorporationtax_sdk.entity.company_car_entity import CompanyCarEntity
    from taxleycorporationtax_sdk.entity.company_size_entity import CompanySizeEntity
    from taxleycorporationtax_sdk.entity.company_van_entity import CompanyVanEntity
    from taxleycorporationtax_sdk.entity.corporation_tax_entity import CorporationTaxEntity
    from taxleycorporationtax_sdk.entity.deadline_entity import DeadlineEntity
    from taxleycorporationtax_sdk.entity.director_pension_entity import DirectorPensionEntity
    from taxleycorporationtax_sdk.entity.directors_loan_entity import DirectorsLoanEntity
    from taxleycorporationtax_sdk.entity.dividend_reserve_entity import DividendReserveEntity
    from taxleycorporationtax_sdk.entity.home_office_entity import HomeOfficeEntity
    from taxleycorporationtax_sdk.entity.late_penalty_entity import LatePenaltyEntity
    from taxleycorporationtax_sdk.entity.long_period_entity import LongPeriodEntity
    from taxleycorporationtax_sdk.entity.mileage_allowance_entity import MileageAllowanceEntity
    from taxleycorporationtax_sdk.entity.salary_dividend_entity import SalaryDividendEntity
    from taxleycorporationtax_sdk.entity.sole_trader_vs_limited_entity import SoleTraderVsLimitedEntity
    from taxleycorporationtax_sdk.entity.tool_entity import ToolEntity
    from taxleycorporationtax_sdk.entity.trivial_benefit_entity import TrivialBenefitEntity
