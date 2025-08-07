(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5626],
  {
    46601: function () {},
    79101: function (e, t, n) {
      "use strict";
      n.d(t, {
        Wq: function () {
          return d;
        },
        wY: function () {
          return c;
        },
        ZL: function () {
          return u;
        },
      });
      var a = n(63691),
        r = n(83464),
        o = n(18091);
      let i = { url: o._.backendUrl, timeout: 1e5 },
        s = { url: o._.omsBackendUrl, timeout: 1e5 },
        l = {
          OMS: r.Z.create({ baseURL: s.url, timeout: s.timeout }),
          PUBLIC: r.Z.create({ baseURL: i.url, timeout: i.timeout }),
        },
        c = async (e, t, n, r) => {
          try {
            let o = a.q.getState().authToken;
            return (
              await l[e].get(t, {
                params: n,
                ...r,
                headers: { "X-Auth-Token": o },
              })
            ).data;
          } catch (e) {
            throw e;
          }
        },
        u = async (e, t, n, r) => {
          try {
            let o = a.q.getState().authToken;
            return (
              await l[e].post(t, n, { ...r, headers: { "X-Auth-Token": o } })
            ).data;
          } catch (e) {
            throw e;
          }
        },
        d = async (e, t, n, r) => {
          try {
            let o = a.q.getState().authToken;
            return (
              await l[e].delete(t, {
                data: n,
                ...r,
                headers: { "X-Auth-Token": o },
              })
            ).data;
          } catch (e) {
            throw e;
          }
        };
    },
    20878: function (e, t, n) {
      "use strict";
      n.d(t, {
        B$: function () {
          return f;
        },
        B0: function () {
          return C;
        },
        EE: function () {
          return v;
        },
        FG: function () {
          return i;
        },
        G4: function () {
          return c;
        },
        GS: function () {
          return O;
        },
        HG: function () {
          return A;
        },
        LC: function () {
          return w;
        },
        Oy: function () {
          return E;
        },
        Pw: function () {
          return o;
        },
        QP: function () {
          return u;
        },
        Qo: function () {
          return m;
        },
        Sh: function () {
          return y;
        },
        TH: function () {
          return p;
        },
        Ti: function () {
          return g;
        },
        Xl: function () {
          return d;
        },
        bU: function () {
          return N;
        },
        fq: function () {
          return b;
        },
        gS: function () {
          return L;
        },
        mj: function () {
          return h;
        },
        qz: function () {
          return l;
        },
        rd: function () {
          return _;
        },
        t8: function () {
          return s;
        },
      });
      var a = n(79101),
        r = n(21099);
      let o = (e) =>
          (0, a.wY)(r.FA.PUBLIC, "/api/v2/dashboard/deployments", {}, e),
        i = (e, t) => (0, a.ZL)(r.FA.PUBLIC, "/api/v1/carv/create_plan", e, t),
        s = (e) => (0, a.wY)(r.FA.PUBLIC, "/api/v1/carv/all_nodes", void 0, e),
        l = (e) => (0, a.wY)(r.FA.PUBLIC, "/api/v1/products/", void 0, e),
        c = (e, t) =>
          (0, a.wY)(
            r.FA.PUBLIC,
            "/api/v1/products/".concat(e.product_id),
            void 0,
            t
          ),
        u = (e, t) => (0, a.Wq)(r.FA.PUBLIC, "/api/v1/plan", e, t),
        d = (e) => (0, a.wY)(r.FA.PUBLIC, "/api/v1/plan/", {}, e),
        p = (e, t) =>
          (0, a.wY)(
            r.FA.PUBLIC,
            "/api/v1/deployment/carv/logs?pod_name="
              .concat(e.pod_name, "&namespace=")
              .concat(e.namespace),
            void 0,
            t
          ),
        f = (e, t) =>
          (0, a.wY)(
            r.FA.PUBLIC,
            "/api/v1/deployment/aethir/logs?pod_name="
              .concat(e.pod_name, "&namespace=")
              .concat(e.namespace),
            void 0,
            t
          ),
        m = (e, t) =>
          (0, a.wY)(
            r.FA.PUBLIC,
            "/api/v1/deployment/hychain/logs?deployment_name="
              .concat(e.deployment_name, "&namespace=")
              .concat(e.namespace),
            void 0,
            t
          ),
        v = (e, t) =>
          (0, a.wY)(
            r.FA.PUBLIC,
            "/api/v1/deployment/hychain/logs?chain_name="
              .concat(e.chain_name, "&pod_name=")
              .concat(e.deployment_name, "&namespace=")
              .concat(e.namespace, "&node=guardian_node_claim"),
            void 0,
            t
          ),
        h = (e, t) =>
          (0, a.wY)(
            r.FA.PUBLIC,
            "/api/v1/deployment/"
              .concat(e.chain_name, "/logs?pod_name=")
              .concat(e.pod_name, "&namespace=")
              .concat(e.namespace),
            void 0,
            t
          ),
        g = (e, t) =>
          (0, a.ZL)(
            r.FA.PUBLIC,
            "/api/v1/deployment/restart/"
              .concat(e.chain_name, "?namespace=")
              .concat(e.namespace),
            void 0,
            t
          ),
        y = (e, t) =>
          (0, a.wY)(
            r.FA.PUBLIC,
            "/api/v1/subscription/details?subscription_id=".concat(
              e.subscription_id
            ),
            void 0,
            t
          ),
        _ = (e, t) =>
          (0, a.wY)(
            r.FA.PUBLIC,
            "/api/v1/"
              .concat(e.chain_name, "/validator/check?valoper_address=")
              .concat(e.valoper_address),
            void 0,
            t
          ),
        A = (e, t) =>
          (0, a.wY)(
            r.FA.PUBLIC,
            "/api/v1/xai_premium/sentry/check?wallet_id="
              .concat(e.wallet_id, "&op_wallet=")
              .concat(e.operator_id),
            void 0,
            t
          ),
        E = (e, t) =>
          (0, a.ZL)(r.FA.PUBLIC, "/api/v1/sophon/create_plan", e, t),
        w = (e, t) =>
          (0, a.wY)(
            r.FA.PUBLIC,
            "/api/v1/fuse/topup?wallet_id=".concat(e.wallet_address),
            void 0,
            t
          ),
        O = (e, t) =>
          (0, a.wY)(
            r.FA.PUBLIC,
            "/api/v1/kap/get_free_licenses?wallet_address=".concat(
              e.wallet_address
            ),
            void 0,
            t
          ),
        L = (e, t) =>
          (0, a.wY)(
            r.FA.PUBLIC,
            "/api/v1/scripttv/balance?plan_id="
              .concat(e.plan_id, "&deployment_name=")
              .concat(e.deployment_name),
            void 0,
            t
          ),
        C = (e, t) =>
          (0, a.wY)(
            r.FA.PUBLIC,
            "/api/v1/scripttv/claim_balance?plan_id="
              .concat(e.plan_id, "&deployment_name=")
              .concat(e.deployment_name),
            void 0,
            t
          ),
        N = (e, t) =>
          (0, a.wY)(
            r.FA.PUBLIC,
            "/api/v1/sophon/deployment_details?plan_id=".concat(e.plan_id),
            void 0,
            t
          ),
        b = (e, t) =>
          (0, a.ZL)(
            r.FA.PUBLIC,
            "/api/v1/sophon/add_operator_wallet?plan_id=".concat(e.plan_id),
            void 0,
            t
          );
    },
    71936: function (e, t, n) {
      "use strict";
      n.d(t, {
        $z: function () {
          return i;
        },
        B4: function () {
          return c;
        },
        KK: function () {
          return o;
        },
        jv: function () {
          return l;
        },
        y: function () {
          return s;
        },
      });
      var a = n(79101),
        r = n(21099);
      let o = (e, t) =>
          (0, a.ZL)(r.FA.PUBLIC, "/api/v1/login/verify-signature", e, t),
        i = (e, t) => (0, a.ZL)(r.FA.PUBLIC, "/api/v1/login", e, t),
        s = (e, t) => (0, a.ZL)(r.FA.PUBLIC, "/api/v1/login/verify", e, t),
        l = (e, t) => (0, a.ZL)(r.FA.PUBLIC, "/api/v1/login/oauth", e, t),
        c = (e) => (0, a.wY)(r.FA.PUBLIC, "/api/v1/telegram/otp", void 0, e);
    },
    59527: function (e, t, n) {
      "use strict";
      n.d(t, {
        $Y: function () {
          return r.$Y;
        },
        B0: function () {
          return o.B0;
        },
        B4: function () {
          return a.B4;
        },
        DM: function () {
          return r.DM;
        },
        E7: function () {
          return r.E7;
        },
        FG: function () {
          return o.FG;
        },
        FS: function () {
          return r.FS;
        },
        G4: function () {
          return o.G4;
        },
        JC: function () {
          return r.JC;
        },
        L9: function () {
          return r.L9;
        },
        M3: function () {
          return r.M3;
        },
        Oy: function () {
          return o.Oy;
        },
        Pw: function () {
          return o.Pw;
        },
        Qs: function () {
          return r.Qs;
        },
        Rh: function () {
          return r.Rh;
        },
        T4: function () {
          return r.T4;
        },
        TS: function () {
          return r.TS;
        },
        UK: function () {
          return r.UK;
        },
        Xl: function () {
          return o.Xl;
        },
        Yw: function () {
          return r.Yw;
        },
        Z3: function () {
          return r.Z3;
        },
        ZB: function () {
          return r.ZB;
        },
        Zd: function () {
          return r.Zd;
        },
        _E: function () {
          return r._E;
        },
        aL: function () {
          return r.aL;
        },
        dw: function () {
          return r.dw;
        },
        dx: function () {
          return r.dx;
        },
        f5: function () {
          return r.f5;
        },
        gS: function () {
          return o.gS;
        },
        hI: function () {
          return r.hI;
        },
        ic: function () {
          return r.ic;
        },
        nJ: function () {
          return r.nJ;
        },
        qC: function () {
          return r.qC;
        },
        qz: function () {
          return o.qz;
        },
        t4: function () {
          return r.t4;
        },
        tq: function () {
          return r.tq;
        },
        vr: function () {
          return r.vr;
        },
        yN: function () {
          return r.yN;
        },
        zI: function () {
          return r.zI;
        },
      });
      var a = n(71936),
        r = n(28594),
        o = n(20878);
    },
    28594: function (e, t, n) {
      "use strict";
      n.d(t, {
        $Y: function () {
          return S;
        },
        $z: function () {
          return w;
        },
        B2: function () {
          return P;
        },
        CX: function () {
          return T;
        },
        DM: function () {
          return Y;
        },
        E7: function () {
          return q;
        },
        EK: function () {
          return x;
        },
        Et: function () {
          return R;
        },
        FS: function () {
          return H;
        },
        JC: function () {
          return j;
        },
        L9: function () {
          return l;
        },
        M3: function () {
          return D;
        },
        Mu: function () {
          return O;
        },
        Qs: function () {
          return d;
        },
        Rh: function () {
          return g;
        },
        T4: function () {
          return u;
        },
        TS: function () {
          return K;
        },
        UK: function () {
          return h;
        },
        UO: function () {
          return F;
        },
        Yg: function () {
          return o;
        },
        Yw: function () {
          return W;
        },
        Z3: function () {
          return Q;
        },
        ZB: function () {
          return z;
        },
        Zd: function () {
          return f;
        },
        _E: function () {
          return i;
        },
        _R: function () {
          return _;
        },
        aL: function () {
          return I;
        },
        aR: function () {
          return L;
        },
        av: function () {
          return N;
        },
        dw: function () {
          return v;
        },
        dx: function () {
          return V;
        },
        f5: function () {
          return U;
        },
        hI: function () {
          return c;
        },
        i8: function () {
          return b;
        },
        ic: function () {
          return s;
        },
        lJ: function () {
          return C;
        },
        nJ: function () {
          return m;
        },
        qC: function () {
          return M;
        },
        r9: function () {
          return A;
        },
        t4: function () {
          return B;
        },
        t_: function () {
          return G;
        },
        tq: function () {
          return Z;
        },
        vf: function () {
          return y;
        },
        vr: function () {
          return X;
        },
        yN: function () {
          return p;
        },
        yb: function () {
          return E;
        },
        zI: function () {
          return k;
        },
      });
      var a = n(79101),
        r = n(21099);
      let o = (e, t) => (0, a.ZL)(r.FA.OMS, "/api/v1/price", e, t),
        i = (e, t) => (0, a.ZL)(r.FA.OMS, "/api/v1/order/fetch", e, t),
        s = (e) => (0, a.wY)(r.FA.OMS, "/api/v1/bootstrapping", {}, e),
        l = (e, t) =>
          (0, a.wY)(r.FA.OMS, "/api/v1/bootstrapping?name=".concat(e), {}, t),
        c = (e, t) =>
          (0, a.wY)(
            r.FA.OMS,
            "/api/v1/bootstrapping/recent-orders?name=".concat(e.chain_name),
            {},
            t
          ),
        u = (e, t) =>
          (0, a.wY)(
            r.FA.OMS,
            "/api/v2/bootstrapping/tiers?wallet_id="
              .concat(e.wallet_id, "&name=")
              .concat(e.name),
            void 0,
            t
          ),
        d = (e, t) => (0, a.ZL)(r.FA.OMS, "/api/v2/bootstrapping/user", e, t),
        p = (e) => (0, a.wY)(r.FA.OMS, "/api/v1/launchpad/sales", {}, e),
        f = (e, t) =>
          (0, a.wY)(
            r.FA.OMS,
            "/api/v1/launchpad/sales/"
              .concat(e.partnerId)
              .concat(e.address ? "?wallet_address=".concat(e.address) : ""),
            {},
            t
          ),
        m = (e, t) =>
          (0, a.wY)(r.FA.OMS, "/api/v1/launchpad/licenses/".concat(e), {}, t),
        v = (e, t) =>
          (0, a.wY)(
            r.FA.OMS,
            "/api/v1/poll".concat(
              e.poll_id ? "?poll_id=".concat(e.poll_id) : ""
            ),
            {},
            t
          ),
        h = (e, t) =>
          (0, a.wY)(r.FA.OMS, "/api/v1/poll/user?poll_id=".concat(e), {}, t),
        g = (e, t) => (0, a.ZL)(r.FA.OMS, "/api/v1/poll/response", e, t),
        y = (e, t) => (0, a.ZL)(r.FA.OMS, "/api/v1/poll/register", e, t),
        _ = (e, t) =>
          (0, a.wY)(
            r.FA.OMS,
            "/api/v1/user/allowed-username?username=".concat(e.username),
            {},
            t
          ),
        A = (e, t) => (0, a.ZL)(r.FA.OMS, "/api/v1/user/username", e, t),
        E = (e) => (0, a.wY)(r.FA.OMS, "/api/v1/user/", {}, e),
        w = (e) => (0, a.wY)(r.FA.OMS, "/api/v1/user/wallet/details", {}, e),
        O = (e, t) => (0, a.ZL)(r.FA.OMS, "/api/v1/user/wallet", e, t),
        L = (e) => (0, a.wY)(r.FA.OMS, "/api/v1/refer/is-eligible", {}, e),
        C = (e) => (0, a.wY)(r.FA.OMS, "/api/v1/refer/code", {}, e),
        N = (e, t) => (0, a.ZL)(r.FA.OMS, "/api/v1/refer/code", e, t),
        b = async (e) =>
          (0, a.wY)(r.FA.OMS, "/api/v1/loyalty/amount?type=STNODE", void 0, e),
        x = (e) =>
          (0, a.wY)(r.FA.OMS, "/api/v1/loyalty/amount?type=CR", void 0, e),
        I = (e, t) => (0, a.ZL)(r.FA.OMS, "/api/v1/order", e, t),
        D = (e, t) =>
          (0, a.wY)(r.FA.OMS, "/api/v1/order?order_id=".concat(e), void 0, t),
        P = (e) => (0, a.wY)(r.FA.OMS, "/api/v1/loyalty/tiers", {}, e),
        T = (e) => (0, a.wY)(r.FA.OMS, "/api/v1/user/wallet/details", {}, e),
        M = (e, t) => (0, a.ZL)(r.FA.OMS, "/api/v1/price/renewal", e, t),
        F = (e, t) => (0, a.ZL)(r.FA.OMS, "/api/v1/user/link-primary", e, t),
        R = async (e, t) =>
          (0, a.ZL)(
            r.FA.OMS,
            "/api/v1/atlasmarketplace/user/add-email/oauth",
            e,
            t
          ),
        S = (e, t) => (0, a.ZL)(r.FA.OMS, "/api/v1/plans/auto-renew", e, t),
        k = (e, t) =>
          (0, a.wY)(
            r.FA.OMS,
            "/api/v1/notification?platform="
              .concat(e.platform, "&limit=")
              .concat(e.limit, "&offset=")
              .concat(e.offset, "/"),
            void 0,
            t
          ),
        U = (e, t) => (0, a.ZL)(r.FA.OMS, "/api/v1/notification/read", e, t),
        B = (e) =>
          (0, a.ZL)(r.FA.OMS, "/api/v1/notification/read", { read_all: !0 }, e),
        Y = (e, t) =>
          (0, a.ZL)(r.FA.OMS, "/api/v1/notification/subscribe", e, t),
        Z = (e) =>
          (0, a.wY)(r.FA.OMS, "/api/v1/notification/subscribe", void 0, e),
        W = (e, t) =>
          (0, a.wY)(
            r.FA.OMS,
            "/api/v1/announcement?platform="
              .concat(e.platform, "&limit=")
              .concat(e.limit, "&offset=")
              .concat(e.offset),
            void 0,
            t
          ),
        j = (e, t) =>
          (0, a.wY)(
            r.FA.PUBLIC,
            "/api/v1/mawari/have-sentry-keys?wallet_id=".concat(e),
            void 0,
            t
          ),
        G = async (e, t) =>
          (0, a.ZL)(
            r.FA.OMS,
            "/api/v1/atlasmarketplace/user/add-email/otp",
            e,
            t
          ),
        K = (e) => (0, a.wY)(r.FA.OMS, "/api/v1/delegation/chains", {}, e),
        H = (e) =>
          (0, a.wY)(r.FA.OMS, "/api/v1/delegation/my-delegations", {}, e),
        q = (e, t) =>
          (0, a.ZL)(
            r.FA.OMS,
            "/api/v1/delegation/".concat(e.chain_id, "/register"),
            {},
            t
          ),
        z = (e, t) =>
          (0, a.ZL)(
            r.FA.OMS,
            "/api/v1/delegation/".concat(e.chain_id, "/operator/register"),
            {},
            t
          ),
        V = (e, t) =>
          (0, a.ZL)(r.FA.OMS, "/api/v1/nodetoken/signed-price", e, t),
        X = (e) => (0, a.wY)(r.FA.OMS, "/api/v1/node-token/price", void 0, e),
        Q = (e) => (0, a.wY)(r.FA.OMS, "/api/v1/stake/apr", void 0, e);
    },
    55251: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return c;
        },
      });
      var a = n(57437),
        r = n(2265),
        o = n(61994);
      let i = {
          outline: "text-primary border border-primary/10 bg-background-dark",
          primary:
            "bg-accent text-dark disabled:bg-primary/10 disabled:text-primary-disabled",
          danger: "bg-red-500 text-white",
          link: "text-primary",
        },
        s = {
          small: "px-3 py-1 text-sm",
          medium: "px-4 py-2.5",
          large: "px-10 py-3 text-lg",
        },
        l = (0, r.forwardRef)((e, t) => {
          let {
              variant: n = "primary",
              className: r,
              children: l,
              size: c = "medium",
              ...u
            } = e,
            d = (0, o.Z)(
              "flex items-center justify-center gap-1.5 font-medium h-10 duration-300 transition rounded-xl focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
              i[n],
              s[c],
              r
            );
          return (0, a.jsx)("button", {
            ref: t,
            className: d,
            ...u,
            children: (null == e ? void 0 : e.showloading)
              ? (0, a.jsxs)("svg", {
                  className: "animate-spin h-5 w-5",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    (0, a.jsx)("circle", {
                      className: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      strokeWidth: "4",
                    }),
                    (0, a.jsx)("path", {
                      className: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                    }),
                  ],
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (null == e ? void 0 : e.lefticon) &&
                      (null == e ? void 0 : e.lefticon),
                    l,
                    (null == e ? void 0 : e.righticon) &&
                      (null == e ? void 0 : e.righticon),
                  ],
                }),
          });
        });
      l.displayName = "Button";
      var c = l;
    },
    79735: function (e, t, n) {
      "use strict";
      n.d(t, {
        Lt: function () {
          return c;
        },
        P2: function () {
          return l;
        },
        hP: function () {
          return i;
        },
        uw: function () {
          return s;
        },
      });
      var a = n(57437),
        r = n(98509),
        o = n(61994);
      let i = (e) =>
          e.static
            ? (0, a.jsx)("div", { children: e.children })
            : (0, a.jsx)(r.sN, { children: e.children }),
        s = (e) =>
          (0, a.jsx)(r.j2, {
            disabled: e.disabled,
            className: (0, o.Z)("inline-flex items-center", e.buttonClassName),
            children: e.children,
          }),
        l = (e) =>
          (0, a.jsx)(r.sd, {
            transition: !0,
            className: (0, o.Z)(
              "w-52 absolute top-12 text-left right-0 rounded-xl shadow-lg border border-primary/10 bg-background z-50 px-3 py-2 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0",
              e.menuClassName
            ),
            children: e.children,
          }),
        c = (e) =>
          (0, a.jsx)("div", {
            className: (0, o.Z)("relative", e.wrapperClassName),
            children: (0, a.jsx)(r.v2, { children: e.children }),
          });
    },
    84479: function (e, t, n) {
      "use strict";
      n.d(t, {
        Lt: function () {
          return a.Lt;
        },
        P2: function () {
          return a.P2;
        },
        hP: function () {
          return a.hP;
        },
        uw: function () {
          return a.uw;
        },
      });
      var a = n(79735);
    },
    37993: function (e, t, n) {
      "use strict";
      var a = n(57437),
        r = n(2265),
        o = n(75836),
        i = n(48614),
        s = n(40521),
        l = n(51064),
        c = n(61994);
      t.Z = (e) => {
        let {
            isOpen: t,
            close: n,
            children: u,
            title: d,
            showCloseButton: p = !1,
            modalClassName: f,
            disableClickOutside: m = !1,
          } = e,
          [v, h] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (t) {
              let e = setTimeout(() => h(!0), 300);
              return () => clearTimeout(e);
            }
            h(!1);
          }, [t]),
          (0, a.jsx)(i.M, {
            children:
              t &&
              (0, a.jsxs)(o.Vq, {
                open: t,
                static: !0,
                className: "relative z-50 focus:outline-none",
                onClose: m ? () => {} : n,
                children: [
                  (0, a.jsx)(s.E.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    className:
                      "fixed inset-0 bg-background-dark/40 backdrop-blur-sm",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "fixed inset-0 z-10 flex items-center justify-center p-4",
                    children: (0, a.jsx)(o.EM, {
                      as: s.E.div,
                      initial: { opacity: 0, scale: 0.95 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 0.95 },
                      className: (0, c.Z)(
                        "rounded-xl overflow-hidden p-2 backdrop-blur-2xl duration-300 ease-out relative max-w-lg w-full bg-background-dark border border-border",
                        f
                      ),
                      children: (0, a.jsxs)("div", {
                        className: "bg-greyShade rounded-lg px-5 py-4 relative",
                        children: [
                          p &&
                            (0, a.jsx)("div", {
                              className: "absolute right-3 top-3 z-10",
                              children: (0, a.jsx)("button", {
                                onClick: n,
                                className:
                                  "border border-border rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary/5 transition-colors",
                                children: (0, a.jsx)(l.Z, { size: 18 }),
                              }),
                            }),
                          d &&
                            (0, a.jsx)(o.$N, {
                              as: "h3",
                              className: "text-xl font-medium",
                              children: d,
                            }),
                          (0, a.jsx)("div", {
                            className: (0, c.Z)(
                              "max-h-[80vh] overflow-y-auto transition-all duration-300 hide-scrollbar",
                              v ? "overflow-y-auto" : "overflow-hidden"
                            ),
                            children: (0, a.jsx)("div", {
                              className: "overflow-hidden",
                              children: u,
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
          })
        );
      };
    },
    38796: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return i;
        },
      });
      var a = n(57437);
      n(2265);
      var r = n(40521);
      let o = (e) => {
        let { title: t, isActive: n, setActiveTab: o, id: i } = e;
        return (0, a.jsxs)("button", {
          className:
            "md:px-5 px-3 py-2 sm:text-sm text-xs font-medium transition-all relative w-full ".concat(
              n ? "text-primary" : "text-primary-disabled hover:text-primary"
            ),
          style: { WebkitTapHighlightColor: "transparent" },
          onClick: () => o(),
          children: [
            n &&
              (0, a.jsx)(r.E.span, {
                layoutId: "bubble-tab-".concat(i || ""),
                className:
                  "absolute inset-0 z-0 gradient-dark gradient-dark-active rounded-lg overflow-hidden border border-primary/10",
                transition: { type: "spring", bounce: 0.2, duration: 0.8 },
              }),
            (0, a.jsx)("span", {
              className: "relative text-nowrap z-10 ".concat(
                n ? "text-primary" : ""
              ),
              children: t,
            }),
          ],
        });
      };
      var i = (e) => {
        let { tabs: t, activeTab: n, setActiveTab: r, id: i } = e;
        return (0, a.jsx)("div", {
          className: "flex gap-4",
          children: t.map((e, t) =>
            (0, a.jsx)(
              o,
              {
                title: e.label,
                isActive: n === e.value,
                setActiveTab: () => r(e.value),
                id: i,
              },
              t
            )
          ),
        });
      };
    },
    69767: function (e, t, n) {
      "use strict";
      n.d(t, {
        UQ: function () {
          return f;
        },
        zx: function () {
          return l.z;
        },
        uw: function () {
          return m.uw;
        },
        P2: function () {
          return m.P2;
        },
        Lt: function () {
          return m.Lt;
        },
        hP: function () {
          return m.hP;
        },
        II: function () {
          return s;
        },
        u_: function () {
          return a.Z;
        },
        qm: function () {
          return h;
        },
        mQ: function () {
          return v.m;
        },
      });
      var a = n(37993),
        r = n(57437),
        o = n(2265),
        i = n(61994),
        s = (e) => {
          let {
              id: t,
              wrapperClassName: n = "",
              inputClassName: a = "",
              labelClassName: s = "",
              placeholder: l = "",
              label: c = "",
              type: u = "text",
              error: d = !1,
              errorText: p = "",
              isInputRequired: f = !1,
              icon: m,
              ...v
            } = e,
            [h, g] = (0, o.useState)(!1),
            y = (0, o.useRef)(null);
          return (0, r.jsxs)("div", {
            className: n,
            children: [
              (0, r.jsxs)("label", {
                htmlFor: t,
                className: (0, i.Z)("text-primary-disabled text-sm", s),
                children: [
                  c,
                  " ",
                  f &&
                    (0, r.jsx)("span", {
                      className: "text-red-500",
                      children: "*",
                    }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "bg-background-dark border border-primary/10 transition duration-300 ease-in-out rounded-xl mt-1 flex items-center ".concat(
                    d
                      ? "focus-within:border-red-500 border-red-500"
                      : "focus-within:border-primary/60"
                  ),
                onClick: () => {
                  var e;
                  return null == y
                    ? void 0
                    : null === (e = y.current) || void 0 === e
                    ? void 0
                    : e.focus();
                },
                children: [
                  m &&
                    (0, r.jsx)("div", {
                      className: (0, i.Z)(
                        "pl-3 transition-colors duration-300",
                        h ? "text-primary" : "text-primary-disabled"
                      ),
                      children: m,
                    }),
                  (0, r.jsx)("input", {
                    ref: y,
                    type: u,
                    className: (0, i.Z)(
                      "w-full px-2 h-10 text-primary text-base rounded-xl focus:outline-none bg-background-dark placeholder:text-primary-disabled/70 placeholder:text-sm",
                      a
                    ),
                    id: t,
                    placeholder: l,
                    required: f,
                    onFocus: () => g(!0),
                    onBlur: () => g(!1),
                    ...v,
                  }),
                ],
              }),
              p &&
                (0, r.jsx)("p", {
                  className: "text-xs pt-1 text-red-500",
                  children: p,
                }),
            ],
          });
        },
        l = n(55251),
        c = n(48614),
        u = n(40521),
        d = n(95954);
      let p = (e) => {
        let { title: t, content: n, isOpen: a, onToggle: o } = e;
        return (0, r.jsxs)("div", {
          className:
            "border border-primary/10 bg-background-dark/80 rounded-xl overflow-hidden",
          children: [
            (0, r.jsxs)("button", {
              className:
                "w-full px-4 py-3 flex items-center justify-between text-left",
              onClick: o,
              children: [
                (0, r.jsx)("span", { className: "font-medium", children: t }),
                (0, r.jsx)(d.Z, {
                  className: "transition-transform duration-300 ".concat(
                    a ? "rotate-180" : ""
                  ),
                }),
              ],
            }),
            (0, r.jsx)(c.M, {
              initial: !1,
              children:
                a &&
                (0, r.jsx)(u.E.div, {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.3 },
                  children: (0, r.jsx)("div", {
                    className: "px-4 pb-4 text-primary/70",
                    children:
                      "string" == typeof n
                        ? (0, r.jsx)("p", {
                            className: "whitespace-pre-wrap",
                            children: n,
                          })
                        : n,
                  }),
                }),
            }),
          ],
        });
      };
      var f = (e) => {
          let { items: t, allowMultiple: n = !1 } = e,
            [a, i] = o.useState([]),
            s = (e) => {
              n
                ? i((t) =>
                    t.includes(e) ? t.filter((t) => t !== e) : [...t, e]
                  )
                : i((t) => (t.includes(e) ? [] : [e]));
            };
          return (0, r.jsx)("div", {
            className: "space-y-3",
            children: t.map((e, t) =>
              (0, r.jsx)(
                p,
                {
                  title: e.title,
                  content: e.content,
                  isOpen: a.includes(t),
                  onToggle: () => s(t),
                },
                t
              )
            ),
          });
        },
        m = n(84479),
        v = n(38796),
        h = () =>
          (0, r.jsxs)("div", {
            className: "relative overflow-hidden w-full h-full",
            children: [
              (0, r.jsx)(u.E.div, {
                className:
                  "absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent",
                animate: { x: ["100%", "-100%"] },
                transition: {
                  duration: 1,
                  repeat: 1 / 0,
                  ease: "linear",
                  repeatType: "loop",
                  willChange: "transform",
                },
              }),
              (0, r.jsx)("div", {
                className: "w-full h-full bg-primary/5 rounded-md",
              }),
            ],
          });
    },
    63691: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return a.q;
        },
      });
      var a = n(49628);
    },
    49628: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return w;
        },
      });
      var a = n(69829),
        r = n(51103),
        o = n(64131),
        i = n(14438),
        s = n(71936),
        l = n(95658),
        c = n(25696),
        u = n(28594),
        d = n(21099);
      let p = {
          isLoggedIn: !1,
          authToken: null,
          userEmail: null,
          navConfig: c.K,
          userProfile: null,
          wallets: [],
          referralCodes: [],
          user: {
            walletAddress: null,
            isNewUser: !1,
            userEmail: null,
            type: d.xK.EMAIL,
          },
          creditPoints: 0,
          showNodePoints: !1,
          userNps: 0,
          myTiers: [],
          myWalletInfo: [],
          totalNodesDeployed: 0,
          isBootstrapPurchaseText: !1,
          comingFromSale: !1,
          availableNodesToPurchase: 0,
        },
        f = (e, t) => ({
          ...p,
          setIsBootstrapPurchaseText: (t) => {
            e({ isBootstrapPurchaseText: t });
          },
          setComingFromSale: (t) => {
            e({ comingFromSale: t });
          },
          setAvailableNodesToPurchase: (t) => {
            e({ availableNodesToPurchase: t });
          },
          updateNavConfig: (t, n, a) =>
            e((e) => {
              var r;
              return {
                navConfig: {
                  ...e.navConfig,
                  [t]: {
                    ...e.navConfig[t],
                    leftContent: {
                      ...(null === (r = e.navConfig[t]) || void 0 === r
                        ? void 0
                        : r.leftContent),
                      ...n,
                    },
                    ...a,
                  },
                },
              };
            }),
          setAuthToken: (t, n, a) => {
            e({
              authToken: t,
              isLoggedIn: !0,
              user: {
                walletAddress: a === d.xK.WALLET ? n : null,
                isNewUser: !1,
                userEmail: a === d.xK.EMAIL ? n : null,
                type: a === d.xK.EMAIL ? d.xK.EMAIL : d.xK.WALLET,
              },
            });
          },
          setShowNodePoints: (t) => {
            e({ showNodePoints: t });
          },
          handleOtpVerification: async (t, n, a, r) => {
            var l, c, u, p, f, m;
            try {
              if (6 !== t.length)
                return (
                  i.Am.error("Invalid OTP"),
                  { success: !1, isNewUser: !1, isWalletRegistered: !1 }
                );
              if (!n)
                return (
                  i.Am.error("Invalid email"),
                  { success: !1, isNewUser: !1, isWalletRegistered: !1 }
                );
              let a = await (0, s.y)({ email: n, otp: t });
              if (null === (l = a.data) || void 0 === l ? void 0 : l.token)
                return (
                  e({
                    authToken: a.data.token,
                    isLoggedIn: !0,
                    userEmail: n,
                    user: {
                      walletAddress: null,
                      isNewUser:
                        null == a
                          ? void 0
                          : null === (c = a.data) || void 0 === c
                          ? void 0
                          : c.is_new_user,
                      userEmail: n,
                      type: d.xK.EMAIL,
                    },
                  }),
                  o.Z.set("userUUID", a.data.uuid, { expires: 2 }),
                  o.Z.set("userToken", a.data.token, { expires: 2 }),
                  {
                    success: !0,
                    isNewUser: a.data.is_new_user,
                    isWalletRegistered: a.data.is_wallet_registered,
                  }
                );
              return { success: !1, isNewUser: !1, isWalletRegistered: !1 };
            } catch (n) {
              console.error("OTP verification failed:", n);
              let e =
                  null == n
                    ? void 0
                    : null === (p = n.response) || void 0 === p
                    ? void 0
                    : null === (u = p.data) || void 0 === u
                    ? void 0
                    : u.code,
                t =
                  null == n
                    ? void 0
                    : null === (m = n.response) || void 0 === m
                    ? void 0
                    : null === (f = m.data) || void 0 === f
                    ? void 0
                    : f.error;
              return (
                t.includes("whitelist") && r(!0),
                5001 === e && t.includes("max retries") && a(!0),
                { success: !1, isNewUser: !1, isWalletRegistered: !1 }
              );
            }
          },
          handleGoogle: async (t) => {
            try {
              var n, a;
              let r = await (0, s.jv)({ code: t });
              if (null === (n = r.data) || void 0 === n ? void 0 : n.token) {
                let t = (0, l.we)(r.data.token);
                return (
                  e({
                    authToken: r.data.token,
                    isLoggedIn: !0,
                    userEmail: t,
                    user: {
                      walletAddress: null,
                      isNewUser:
                        null == r
                          ? void 0
                          : null === (a = r.data) || void 0 === a
                          ? void 0
                          : a.is_new_user,
                      userEmail: t,
                      type: d.xK.EMAIL,
                    },
                  }),
                  o.Z.set("userUUID", r.data.uuid, { expires: 2 }),
                  o.Z.set("userToken", r.data.token, { expires: 2 }),
                  {
                    success: !0,
                    isNewUser: r.data.is_new_user,
                    isWalletRegistered: r.data.is_wallet_registered,
                  }
                );
              }
              return { success: !1, isNewUser: !1, isWalletRegistered: !1 };
            } catch (e) {
              return (
                console.log("error from handleGoogle", e),
                { success: !1, isNewUser: !1, isWalletRegistered: !1 }
              );
            }
          },
          verifySignature: async (n, a) => {
            try {
              var r, l;
              let i = await (0, s.KK)({ signature: n, message: a });
              if (
                null == i
                  ? void 0
                  : null === (r = i.data) || void 0 === r
                  ? void 0
                  : r.token
              )
                return (
                  e({
                    authToken: i.data.token,
                    isLoggedIn: !0,
                    user: {
                      walletAddress: i.data.registered_wallet,
                      isNewUser:
                        null == i
                          ? void 0
                          : null === (l = i.data) || void 0 === l
                          ? void 0
                          : l.is_new_user,
                      userEmail: null,
                      type: d.xK.WALLET,
                    },
                  }),
                  o.Z.set("userUUID", i.data.uuid, { expires: 2 }),
                  o.Z.set("userToken", i.data.token, { expires: 2 }),
                  i.data.is_new_user
                    ? t().setShowNodePoints(!0)
                    : t().setLoginModalOpen(!1),
                  { success: !0, isNewUser: i.data.is_new_user }
                );
              return { success: !1, isNewUser: !1 };
            } catch (e) {
              return (
                i.Am.error("Error verifying signature"),
                console.log("error from verifySignature", e),
                { success: !1, isNewUser: !1 }
              );
            }
          },
          logout: async () => {
            try {
              o.Z.remove("userUUID"),
                o.Z.remove("userToken"),
                e({
                  isLoggedIn: !1,
                  authToken: null,
                  userEmail: null,
                  user: {
                    walletAddress: null,
                    isNewUser: !1,
                    userEmail: null,
                    type: d.xK.EMAIL,
                  },
                });
            } catch (e) {
              console.log("error from logout", e);
            }
          },
          fetchUserProfile: async () => {
            var t;
            let n = await (0, u.yb)();
            (null == n
              ? void 0
              : null === (t = n.data) || void 0 === t
              ? void 0
              : t.length) > 0 && e({ userProfile: n.data[0] });
          },
          fetchWallets: async () => {
            e({ wallets: (await (0, u.$z)()).data });
          },
          saveWallet: async (e) => {
            try {
              await (0, u.Mu)(e);
              let { wallets: n } = t();
              return !0;
            } catch (e) {
              return console.log("error from saveWallet", e), !1;
            }
          },
          saveUsername: async (e) => {
            if (!e) return !1;
            try {
              return await (0, u.r9)({ username: e }), !0;
            } catch (e) {
              return console.log("error from saveUsername", e), !1;
            }
          },
          fetchReferralCodes: async () => {
            var t;
            let n = await (0, u.lJ)();
            e({
              referralCodes:
                null == n
                  ? void 0
                  : null === (t = n.data) || void 0 === t
                  ? void 0
                  : t.referral_codes,
            });
          },
          createReferralCode: async (n) => {
            try {
              let a = await (0, u.av)({ code: n }),
                { referralCodes: r } = t();
              return e({ referralCodes: [...r, a.data] }), !0;
            } catch (e) {
              return console.log("error from createReferralCode", e), !1;
            }
          },
          getUserPoints: async () => {
            try {
              let t = await (0, u.i8)();
              e({ userNps: t.data.amount });
            } catch (e) {
              console.log("error from getUserPoints", e);
            }
          },
          getMyCredits: async () => {
            try {
              let t = await (0, u.EK)();
              e({ creditPoints: t.data.amount });
            } catch (e) {
              console.log("error from getMyCredits", e);
            }
          },
          getMyTiers: async () => {
            try {
              let t = await (0, u.B2)();
              e({ myTiers: t.data });
            } catch (e) {
              console.log("error from getMyTiers", e);
            }
          },
          getMyWalletInfo: async () => {
            try {
              let t = await (0, u.CX)(),
                n = t.data;
              if ((null == n ? void 0 : n.length) > 0) {
                e({ myWalletInfo: t.data });
                let a = n.reduce((e, t) => {
                    var n;
                    return (
                      e +
                      (null === (n = t.protocol_list) || void 0 === n
                        ? void 0
                        : n.reduce((e, t) => e + t.no_of_nodes, 0))
                    );
                  }, 0),
                  r = n.reduce((e, t) => {
                    var n;
                    return (
                      e +
                      (null === (n = t.NodeList) || void 0 === n
                        ? void 0
                        : n.reduce((e, t) => e + t.no_of_nodes, 0))
                    );
                  }, 0);
                e({ totalNodesDeployed: a + r });
              }
            } catch (e) {
              console.log("error from getMyWalletInfo", e);
            }
          },
          registerPrimaryWallet: async (e, t) => {
            try {
              return await (0, u.UO)({ email_id: e, wallet_address: t }), !0;
            } catch (e) {
              return console.log("error from registerPrimaryWallet", e), !1;
            }
          },
          handleEmailRegisterOtpVerification: async (e, t, n) => {
            try {
              if (6 !== e.length)
                return (
                  i.Am.error("Invalid OTP"),
                  { success: !1, isWalletRegistered: !1 }
                );
              if (!t)
                return (
                  i.Am.error("Invalid email"),
                  { success: !1, isWalletRegistered: !1 }
                );
              return (
                await (0, u.t_)({ email: t, otp: e }),
                { success: !0, isWalletRegistered: !0 }
              );
            } catch (i) {
              var a, r, o, s;
              console.error("OTP verification failed:", i);
              let e =
                  null == i
                    ? void 0
                    : null === (r = i.response) || void 0 === r
                    ? void 0
                    : null === (a = r.data) || void 0 === a
                    ? void 0
                    : a.code,
                t =
                  null == i
                    ? void 0
                    : null === (s = i.response) || void 0 === s
                    ? void 0
                    : null === (o = s.data) || void 0 === o
                    ? void 0
                    : o.error;
              return (
                5001 === e && t.includes("max retries") && n(!0),
                { success: !1, isWalletRegistered: !1 }
              );
            }
          },
        }),
        m = {
          loginModalOpen: !1,
          addCreditModalOpen: !1,
          paymentSuccessModalOpen: !1,
          purchaseModalOpen: !1,
          reminderModalOpen: !1,
          faqModalOpen: !1,
          actionRequiredModalOpen: !1,
          deletePlanModalOpen: !1,
          openCosmosWalletModal: !1,
          autoPayModalOpen: !1,
          notificationOpen: !1,
          registerEmailModalOpen: !1,
          addOperatorModalOpen: !1,
        },
        v = (e) => ({
          ...m,
          setLoginModalOpen: (t) => e({ loginModalOpen: t }),
          setAddCreditModalOpen: (t) => e({ addCreditModalOpen: t }),
          setPaymentSuccessModalOpen: (t) => e({ paymentSuccessModalOpen: t }),
          setPurchaseModalOpen: (t) => e({ purchaseModalOpen: t }),
          setReminderModalOpen: (t) => e({ reminderModalOpen: t }),
          setFaqModalOpen: (t) => e({ faqModalOpen: t }),
          setActionRequiredModalOpen: (t) => e({ actionRequiredModalOpen: t }),
          setDeletePlanModalOpen: (t) => e({ deletePlanModalOpen: t }),
          setOpenCosmosWalletModal: (t) => e({ openCosmosWalletModal: t }),
          setAutoPayModalOpen: (t) => e({ autoPayModalOpen: t }),
          setNotificationOpen: (t) => e({ notificationOpen: t }),
          setRegisterEmailModalOpen: (t) => e({ registerEmailModalOpen: t }),
          setAddOperatorModalOpen: (t) => e({ addOperatorModalOpen: t }),
        });
      var h = n(59527);
      let g = {
          deployNodes: [],
          deployNodeDetails: null,
          bootstrapping: [],
          launchpadSales: [],
          bootstrapDetails: null,
          detailsLoading: !1,
          isInitialLoading: !0,
          launchpadDetails: null,
          governanceList: [],
          governanceDetails: null,
          nodeFolio: [],
          myPlan: [],
          payloadInfo: {},
          pricingNodeData: {
            quantity: 1,
            sku_id: "",
            payable_amount: 0,
            duration: 0,
            metadata: {},
          },
          paymentMethodNODEDetails: null,
          nodeDelegation: [],
          myNodeDelegation: [],
          apyData: null,
          formattedBalance: "0",
          isBeamable: !1,
        },
        y = (e, t) => ({
          ...g,
          setIsBeamable: (t) => {
            e({ isBeamable: t });
          },
          setPricingNodeData: (t) => {
            e({ pricingNodeData: t });
          },
          setPayloadInfo: (t) => {
            e({ payloadInfo: t });
          },
          getDeploymentProducts: async () => {
            e({ deployNodes: await (0, h.qz)() });
          },
          getProductDetails: async (n, a) => {
            e({ detailsLoading: !0, isInitialLoading: !0 });
            let r = await (0, h.G4)({ product_id: n });
            if (r) {
              e({ deployNodeDetails: r });
              let { updateNavConfig: n } = t();
              n(
                a,
                { title: r.product.metadata.displayName, subtitle: "" },
                {
                  rightContent: {
                    type:
                      "carv" === r.product.metadata.chain
                        ? "carv-mainnet"
                        : "deploy-node",
                  },
                }
              );
            }
            e({ detailsLoading: !1, isInitialLoading: !1 });
          },
          getBootstrapping: async () => {
            let t = await (0, h.ic)();
            (null == t ? void 0 : t.message) === "success" &&
              e({ bootstrapping: t.data });
          },
          getLaunchpadSales: async () => {
            let t = await (0, h.yN)();
            (null == t ? void 0 : t.message) === "success" &&
              e({ launchpadSales: t.data.partner_list });
          },
          getBootstrapDetails: async (n, a) => {
            e({ detailsLoading: !0, isInitialLoading: !0 });
            try {
              let i = await (0, h.L9)(n);
              if ((null == i ? void 0 : i.message) === "success") {
                var r, o;
                let { updateNavConfig: n } = t();
                e({
                  bootstrapDetails: i.data[0],
                  detailsLoading: !1,
                  isInitialLoading: !1,
                }),
                  n(
                    a,
                    {
                      title:
                        null === (o = i.data[0].metadata) || void 0 === o
                          ? void 0
                          : null === (r = o.bootstrapping_info) || void 0 === r
                          ? void 0
                          : r.name,
                      subtitle: "",
                    },
                    { rightContent: { type: "wallet-payment" } }
                  );
              }
            } catch (t) {
              e({ detailsLoading: !1, isInitialLoading: !1 }),
                console.error("Error fetching bootstrap details:", t);
            }
          },
          getLaunchpadDetails: async (n, a, r) => {
            e({ detailsLoading: !0, isInitialLoading: !0 });
            let o = await (0, h.Zd)({ partnerId: n, address: a });
            if ((null == o ? void 0 : o.message) === "success") {
              var i, s;
              e({ launchpadDetails: o.data.partner_list[0] });
              let { updateNavConfig: n } = t();
              n(
                r,
                {
                  title:
                    null === (s = o.data.partner_list[0].metadata) ||
                    void 0 === s
                      ? void 0
                      : null === (i = s.display_info) || void 0 === i
                      ? void 0
                      : i.title,
                  subtitle: "",
                },
                { rightContent: { type: "wallet-payment" } }
              );
            }
            e({ detailsLoading: !1, isInitialLoading: !1 });
          },
          getAllGovernance: async (t) => {
            let n = await (0, h.dw)(t);
            (null == n ? void 0 : n.message) === "success" &&
              e({ governanceList: n.data });
          },
          getGovernanceDetails: async (n, a) => {
            let r;
            let { isLoggedIn: o, updateNavConfig: i } = t();
            if (
              (e({ detailsLoading: !0, isInitialLoading: !0 }),
              (null ==
              (r = o ? await (0, h.UK)(n) : await (0, h.dw)({ poll_id: n }))
                ? void 0
                : r.message) === "success")
            ) {
              var s, l;
              e({ governanceDetails: r.data[0] }),
                i(
                  a,
                  {
                    title:
                      null === (l = r.data[0]) || void 0 === l
                        ? void 0
                        : null === (s = l.details) || void 0 === s
                        ? void 0
                        : s.title,
                    subtitle: "",
                  },
                  { rightContent: { type: "default" } }
                );
            }
            e({ detailsLoading: !1, isInitialLoading: !1 });
          },
          submitVote: async (n) => {
            let a = await (0, h.Rh)(n);
            if ((null == a ? void 0 : a.message) !== "success")
              return i.Am.error("Something went wrong"), !1;
            {
              let { governanceDetails: n } = t();
              return (
                n && e({ governanceDetails: { ...n, is_user_voted: !0 } }),
                i.Am.success("Vote submitted successfully"),
                !0
              );
            }
          },
          getNodeFolio: async () => {
            let t = await (0, h.Pw)();
            (null == t ? void 0 : t.data) && e({ nodeFolio: t.data });
          },
          getMyPlan: async () => {
            let t = await (0, h.Xl)();
            (null == t ? void 0 : t.data) && e({ myPlan: t.data });
          },
          getPaymentMethodNODEDetails: async (t) => {
            let n = await (0, h.M3)(t);
            (null == n ? void 0 : n.data) &&
              e({ paymentMethodNODEDetails: n.data });
          },
          setAutoPay: async (e) => {
            let t = await (0, h.$Y)(e);
            (null == t ? void 0 : t.message) === "success" &&
              i.Am.success("Auto pay set successfully");
          },
          getNodeDelegation: async () => {
            e({ nodeDelegation: await (0, h.TS)() });
          },
          getMyNodeDelegation: async () => {
            e({ myNodeDelegation: await (0, h.FS)() });
          },
          registerChain: async (e) => {
            let t = await (0, h.E7)({ chain_id: e });
            (null == t ? void 0 : t.message) === "success" &&
              i.Am.success("Chain registered successfully");
          },
          registerOperator: async (e) => {
            let t = await (0, h.ZB)({ chain_id: e });
            (null == t ? void 0 : t.message) === "success" &&
              i.Am.success("Operator registered successfully");
          },
          fetchAPYData: async () => {
            try {
              let t = await (0, h.Z3)();
              (null == t ? void 0 : t.data) && e({ apyData: t.data });
            } catch (e) {
              console.log("error from fetchAPYData", e);
            }
          },
          setFormattedBalance: (t) => e({ formattedBalance: t }),
        });
      var _ = n(83464);
      let A = {
          notifications: null,
          announcements: null,
          notificationSubscriptionStatus: null,
          isSubscribedForPushNotifications: !1,
        },
        E = (e) => ({
          ...A,
          getNotifications: async (t) => {
            let { platform: n = "CONSOLE", limit: a = 10, offset: r = 0 } = t;
            try {
              let t = await (0, h.zI)({ platform: n, limit: a, offset: r });
              e({ notifications: t.data });
            } catch (t) {
              if (_.Z.isAxiosError(t)) {
                var o;
                "ERR_NETWORK" === t.code
                  ? console.error(
                      "Network error: Unable to reach the notification service"
                    )
                  : (null === (o = t.response) || void 0 === o
                      ? void 0
                      : o.status) === 401
                  ? console.error(
                      "Authentication error: Please check your auth token"
                    )
                  : console.error("Error fetching notifications:", t.message);
              }
              e({ notifications: null });
            }
          },
          setNotifications: (t) => {
            e({ notifications: t });
          },
          markNotificationAsRead: async (e) => {
            try {
              await (0, h.f5)({ ids: e });
            } catch (e) {
              console.error("Error marking notification as read:", e);
            }
          },
          markAllNotificationsAsRead: async () => {
            try {
              await (0, h.t4)();
            } catch (e) {
              console.error("Error marking all notifications as read:", e);
            }
          },
          subscribeForPushNotifications: async (t) => {
            try {
              let n = await (0, h.DM)({ type: "FCM", token: t });
              "success" === n.message &&
                e({ isSubscribedForPushNotifications: !0 });
            } catch (e) {
              console.error("Error subscribing for push notifications:", e);
            }
          },
          getNotificationSubscriptionStatus: async () => {
            try {
              let t = await (0, h.tq)();
              e({ notificationSubscriptionStatus: t.data });
            } catch (e) {
              console.error(
                "Error getting notification subscription status:",
                e
              );
            }
          },
          getAnnouncements: async (t) => {
            let { platform: n = "CONSOLE", limit: a = 10, offset: r = 0 } = t;
            try {
              let t = await (0, h.Yw)({ platform: n, limit: a, offset: r });
              e({ announcements: t.data });
            } catch (t) {
              if (_.Z.isAxiosError(t)) {
                var o;
                "ERR_NETWORK" === t.code
                  ? console.error(
                      "Network error: Unable to reach the notification service"
                    )
                  : (null === (o = t.response) || void 0 === o
                      ? void 0
                      : o.status) === 401
                  ? console.error(
                      "Authentication error: Please check your auth token"
                    )
                  : console.error("Error fetching notifications:", t.message);
              }
              e({ announcements: null });
            }
          },
        });
      ({ ...p });
      let w = (0, a.F)()(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return { ...f(...t), ...v(...t), ...y(...t), ...E(...t) };
      }, r.X);
    },
    21099: function (e, t, n) {
      "use strict";
      var a,
        r,
        o,
        i,
        s,
        l,
        c,
        u,
        d,
        p,
        f,
        m,
        v,
        h,
        g,
        y,
        _,
        A,
        E,
        w,
        O,
        L,
        C,
        N,
        b,
        x,
        I,
        D,
        P,
        T,
        M,
        F,
        R;
      n.d(t, {
        $X: function () {
          return d;
        },
        At: function () {
          return g;
        },
        B$: function () {
          return Y;
        },
        F2: function () {
          return u;
        },
        FA: function () {
          return S;
        },
        HS: function () {
          return c;
        },
        Hk: function () {
          return m;
        },
        IZ: function () {
          return W;
        },
        KT: function () {
          return U;
        },
        LM: function () {
          return k;
        },
        T7: function () {
          return p;
        },
        Vx: function () {
          return _;
        },
        Xq: function () {
          return o;
        },
        Xz: function () {
          return v;
        },
        _R: function () {
          return y;
        },
        bW: function () {
          return f;
        },
        hI: function () {
          return i;
        },
        mt: function () {
          return a;
        },
        ou: function () {
          return Z;
        },
        q5: function () {
          return j;
        },
        tC: function () {
          return B;
        },
        xK: function () {
          return h;
        },
        yg: function () {
          return A;
        },
      }),
        ((E = a || (a = {})).GOOGLE = "google"),
        (E.EMAIL = "email"),
        (E.WALLET_REGISTERED = "wallet_registered"),
        ((r || (r = {})).COINLIST = "Coinlist"),
        ((o || (o = {})).DEPLOY_NODE = "Deploy Node"),
        ((i || (i = {})).COINLIST = "Coinlist"),
        ((w = s || (s = {})).NAVBAR_LOGIN_CTA = "Navbar Login CTA"),
        (w.CHECKER_LOGIN_CTA = "Checker Page Login CTA"),
        (w.CHECKER_FARM_NODE_CTA = "Farm Node CTA"),
        (w.FARM_NODE_TOP_UP_CTA = "Farm Node - Top Up CTA"),
        (w.FARM_NODE_DEPLOY_CTA = "Farm Node - Deploy CTA"),
        (w.FARM_NODE_FARM_CTA = "Farm Node - Farm CTA"),
        (w.FARM_NODE_MINT_CTA = "Farm Node - Mint CTA"),
        ((O = l || (l = {})).LOGIN_WITH_EMAIL = "Login with Email"),
        (O.LOGIN_WITH_WALLET = "Login with Wallet"),
        (O.LOGIN_WITH_GOOGLE = "Login with Google"),
        (O.REGISTER_WALLET = "Register Wallet"),
        ((L = c || (c = {})).PURCHASE_WITH_COPPERX = "Purchase with Copperx"),
        (L.PURCHASE_WITH_NODE = "Purchase with NODE"),
        (L.LOGIN_WITH_EMAIL = "Login with Email"),
        (L.LOGIN_WITH_WALLET = "Login with Wallet"),
        (L.LOGIN_WITH_GOOGLE = "Login with Google"),
        (L.REGISTER_WALLET = "Register Wallet");
      let S = { OMS: "OMS", PUBLIC: "PUBLIC" },
        k = { NODE: "NODE", COPPERX: "COPPERX", CREDIT: "CREDIT" };
      ((C = u || (u = {})).LAUNCHPAD = "launchpad"),
        (C.BOOTSTRAP_EVENT = "bootstrap-event"),
        ((N = d || (d = {})).ALL = "all"),
        (N.LIVE = "live"),
        (N.COMING_SOON = "coming-soon"),
        (N.COMPLETED = "completed"),
        (N.RUNNING = "running"),
        (N.PAUSED = "paused"),
        (N.PENDING = "pending"),
        (N.ACTIVE = "active"),
        (N.EXPIRED = "expired"),
        (N.LNT_VAULTS = "lnt-vaults"),
        (N.USER_GUIDES = "user-guides"),
        ((b = p || (p = {})).ACTIVE_DELEGATION = "active-delegation"),
        (b.MY_DELEGATION = "my-delegation"),
        ((x = f || (f = {})).GRID = "grid"),
        (x.LIST = "list");
      let U = {
        NODEOPS_STATS: "https://dune.com/nodeops/stats",
        DISCORD: "https://nodeops.network/discord",
        DOCS: "https://docs.nodeops.network/",
        TWITTER: "https://x.com/DumpOpsETH20",
        EMAIL: "support@nodeops.network",
        WEBSITE: "https://nodeops.network",
        LEADERBOARD: "https://dune.com/nodeops/stats",
        DUNE: "https://dune.com/nodeops/stats",
        AUDIT_HALBORN: "https://www.halborn.com/audits/nodeops",
        AUDIT_OAK:
          "",
        AUDIT_QUILL:
          "",
      };
      ((I = m || (m = {})).NODE_INFO = "nodeInfo"),
        (I.LOGS = "logs"),
        (I.CLAIM_REWARD = "claimReward"),
        ((D = v || (v = {})).OVERVIEW = "overview"),
        (D.REFERRAL = "referral");
      let B = [
        "AI",
        "AVS",
        "Chain",
        "Cloud-Compute",
        "Data Availability",
        "DePIN",
        "Entertainment",
        "Gaming",
        "Infrastructure Support",
        "Launchpad",
        "Oracle",
        "RaaS",
        "Restaking",
        "Social-Consumer",
        "Strategic Partners",
        "ZK",
        "DeFi",
        "Media",
        "SaaS",
      ];
      ((P = h || (h = {})).EMAIL = "email"),
        (P.WALLET = "wallet"),
        (P.ERROR = "error");
      let Y = 10,
        Z = "207c9a96-b8a7-4004-8a4b-aa63ef5d08a7",
        W = 5,
        j = ["carv"];
      ((T = g || (g = {})).LOGIN_CLICK = "login_click"),
        (T.LOGIN_WITH_EMAIL = "login_with_email"),
        (T.LOGIN_WITH_GOOGLE = "login_with_google"),
        (T.LOGIN_WITH_WALLET = "login_with_wallet"),
        (T.REGISTER_PRIMARY_WALLET_ON_LOGIN =
          "register_primary_wallet_on_login"),
        (T.OTP_VERIFIED = "otp_verified"),
        (T.RESEND_OTP = "resend_otp"),
        (T.PROFILE_EDIT_USERNAME = "profile_edit_username"),
        (T.PROFILE_REGISTER_EMAIL = "profile_register_email"),
        (T.PROFILE_SAVE_WALLET = "profile_save_wallet"),
        (T.PROFILE_CREATE_REFERRAL_CODE = "profile_create_referral_code"),
        (T.PROFILE_SHARE_TWITTER_REFERRAL_LINK =
          "profile_share_twitter_referral_link"),
        (T.PROFILE_SHARE_TELEGRAM_REFERRAL_LINK =
          "profile_share_telegram_referral_link"),
        (T.DEPLOY_NODE_APPLY_PROMO_CODE = "deploy_node_apply_promo_code"),
        (T.DEPLOY_NODE_CHECKOUT_COPPERX = "deploy_node_checkout_copperx"),
        (T.DEPLOY_NODE_CHECKOUT_CREDIT = "deploy_node_checkout_credit"),
        (T.DEPLOY_NODE_HOW_TO_DEPLOY_DOCS = "deploy_node_how_to_deploy_docs"),
        (T.DEPLOY_NODE_PROTOCOL_DOCS = "deploy_node_protocol_docs"),
        (T.RENEW_NODE_CHECKOUT_COPPERX = "renew_node_checkout_copperx"),
        (T.RENEW_NODE_CHECKOUT_CREDIT = "renew_node_checkout_credit"),
        (T.BOOTSTRAP_EVENT_CARD_CLICK = "bootstrap_event_card"),
        (T.BOOTSTRAP_EVENT_PURCHASE_WITHOUT_DEPLOY =
          "bootstrap_event_purchase_without_deploy"),
        (T.LAUNCHPAD_CARD_CLICK = "launchpad_card"),
        (T.LAUNCHPAD_PURCHASE = "launchpad_purchase"),
        (T.GOVERNANCE_CARD_CLICK = "governance_card"),
        (T.GOVERNANCE_VOTE = "governance_vote"),
        (T.NODEFOLIO_RESTART_NODE = "nodefolio_restart_node"),
        (T.NODEFOLIO_CLAIM_COMMISSION = "nodefolio_claim_commission"),
        (T.NODEFOLIO_CLAIM_REWARDS = "nodefolio_claim_rewards"),
        (T.NODEFOLIO_SHARE_X = "nodefolio_share_x"),
        (T.MYPLAN_DELETE_PLAN = "myplan_delete_plan"),
        (T.ADD_CREDIT_WITH_NODE = "add_credit_with_node"),
        (T.ADD_CREDIT_WITH_COPPERX = "add_credit_with_copperx"),
        ((M = y || (y = {})).LOGIN = "login"),
        (M.PROFILE = "profile"),
        (M.DEPLOY_NODE = "deploy_node"),
        (M.BOOTSTRAP_EVENT = "bootstrap_event"),
        (M.LAUNCHPAD = "launchpad"),
        (M.GOVERNANCE = "governance"),
        (M.NODEFOLIO = "nodefolio"),
        (M.MYPLAN = "myplan"),
        (M.ADD_CREDIT = "add_credit"),
        ((F = _ || (_ = {})).ENGAGEMENT = "engagement"),
        (F.PROFILE = "profile"),
        (F.DEPLOY_NODE = "deploy_node"),
        (F.BOOTSTRAP_EVENT = "bootstrap_event"),
        (F.LAUNCHPAD = "launchpad"),
        (F.GOVERNANCE = "governance"),
        (F.NODEFOLIO = "nodefolio"),
        (F.MYPLAN = "myplan"),
        (F.ADD_CREDIT = "add_credit"),
        ((R = A || (A = {})).GOOGLE = "google"),
        (R.EMAIL = "email");
    },
    18091: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return a;
        },
      });
      let a = {
        backendUrl: "https://oneclick-backend.nodeops.xyz",
        omsBackendUrl: "https://oms-oneclick.nodeops.xyz",
        copperxPaymentPageUrl:
          "https://api.copperx.io/api/v1/checkout/sessions",
        copperxSuccessUrl: "http://localhost:3001/dashboard",
        copperxKey:
          "pav1_m3Se38WrrMUtPfxKALb3tIB8lNiw7rdC4Nbhqa7MB1afpwZJrONBWlUEPCy4FKyO",
        payableAmount: "100000000",
        env: "prod",
        xai: {
          contractAddress: "0xbc14d8563b248b79689ecbc43bba53290e0b6b66",
          alchemyApiKey: "NFqozjUsc4bhmF8xMcwvghggr7rT4l71",
        },
        hytopia: {
          contractAddress: "0xE1060b30D9fF01Eef71248906Ce802801a670A48",
          chainId: "2911",
          explorerLink: "https://mainnet.explorer.hychain.com/address",
          networkType: "mainnet",
        },
        carv: {
          contractAddress: "0xD2DA5430Db4b0b3FbBcFC47D937f61060E780522",
          chainId: "2911",
          explorerLink: "https://testnet-explorer.carv.io/",
          networkType: "testnet",
          mainnetContractAddress: "0x6584533decbcb8c05fb7EAbFa93f92b7b3A85038",
        },
        aethir: {
          contractAddress: "0xd9cC262f6FcA4b2f360B85038B174862D391911B",
          alchemyApiKey: "nAyQNEbiYP4ZmCr694Y28DNh9uzbpulh",
          mainnetContractAddress: "0xc227e25544edd261a9066932c71a25f4504972f1",
          mainnetAlchemyApiKey: "APQL-_fqyuo57dnskXpyBMv_hw6f47yi",
        },
        emtn: {
          alchemyApiKey: "f8qLzz-hPGh1oynagwG79LHlf_eBtFeN",
          testnetContractAddress: "0x08a89bDc9e96438E4CaBF72CE07FfAc0bb296189",
          testnetContractAddressSignTxs:
            "0x9A15b9D52F2F7Ce8Ed7099C9B9C93c5601F7ad1c",
        },
        iagent: {
          testnetContractAddress: "0xff51A51F38F26BC03085642aA1a7082D7845c94d",
        },
        kip: {
          mainnetContractAddress: "0x454Eb80d6b198C6da0f90822436810641eE6554d",
          mainnetAlchemyApiKey: "nAyQNEbiYP4ZmCr694Y28DNh9uzbpulh",
        },
        huddle: {
          testnetContractAddress: "0xDe5783d5953f07b5FF9b019Dd74a836859CBa54d",
          testnetAlchemyApiKey: "nAyQNEbiYP4ZmCr694Y28DNh9uzbpulh",
        },
        xprotocol: {
          mainnetContractAddress: "0x6E4CB160bDA3Bd8c0AC32895e8D983C62EE59467",
        },
        rivalz: {
          mainnetContractAddress: "0x78bDE7b6C7eB8f5F1641658c698fD3BC49738367",
        },
        playai: {
          testnetContractAddress: "0x72c60De74aAf00Ab2aF2ba42eE621B88a7A33baC",
        },
        selfDelegations: {
          oraichain: Number("1"),
          archway: Number("1"),
          babylon: Number("1"),
          selfchain: Number("1"),
        },
        googleClientId:
          "821283446043-s0fkcj7at4354mtflf6ldljib885gdll.apps.googleusercontent.com",
        walletConnectProjectId: "05339b7f9b8d20842ce3b818af58c041",
        firebase: {
          apiKey: "AIzaSyDC4i1JvBIHm2wRQyxTvJSPMVpZHTNTCzI",
          authDomain: "notify-me-77871.firebaseapp.com",
          projectId: "notify-me-77871",
          storageBucket: "notify-me-77871.appspot.com",
          messagingSenderId: "61278213417",
          appId: "1:61278213417:web:5f603074768f2011831338",
        },
      };
    },
    25696: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return a;
        },
      });
      let a = {
        "/": {
          path: "/",
          leftContent: {
            title: "Hi There! \uD83D\uDC4B\uD83C\uDFFB",
            subtitle:
              "Welcome to DumpOps Console - your trusted, leading Node-As-A-Service (NaaS) provider",
          },
          rightContent: { type: "social" },
          isPrivate: !1,
        },
        "/deployNode": {
          path: "/deployNode",
          leftContent: {
            title: "Dump Deployment",
            subtitle: "Easily deploy nodes with just one click",
          },
          rightContent: { type: "social" },
          isPrivate: !1,
        },
        "/bootstrap-event": {
          path: "/bootstrap-event",
          leftContent: {
            title: "Bootstrap Event",
            subtitle: "Manage your bootstrap event",
          },
          rightContent: { type: "social" },
          isPrivate: !1,
        },
        "/launchpad": {
          path: "/launchpad",
          leftContent: {
            title: "Launchpad",
            subtitle: "Manage your launchpad",
          },
          rightContent: { type: "social" },
          isPrivate: !1,
        },
        "/dashboard": {
          path: "/dashboard",
          leftContent: {
            title: "NodeFolio",
            subtitle: "All your nodes at one glance",
          },
          rightContent: { type: "social" },
          isPrivate: !0,
        },
        "/myPlan": {
          path: "/myPlan",
          leftContent: {
            title: "My Plans",
            subtitle: "Manage your existing nodes",
          },
          rightContent: { type: "social" },
          isPrivate: !0,
        },
        "/profile": {
          path: "/profile",
          leftContent: {
            title: "My Profile",
            subtitle: "Manage your profile here",
          },
          rightContent: { type: "social" },
          isPrivate: !0,
        },
        "/deployNode/[partner]": {
          path: "/deployNode/[partner]",
          leftContent: {
            title: "Dump Deployment",
            subtitle: "Deploy your partner node",
          },
          rightContent: { type: "social" },
          isPrivate: !0,
        },
        "/node-delegation": {
          path: "/node-delegation",
          leftContent: {
            title: "Dump Delegation",
            subtitle: "Delegate your existing nodes to earn rewards",
          },
          rightContent: { type: "social" },
          isPrivate: !0,
        },
        "/liquidNodePool": {
          path: "/liquidNodePool",
          leftContent: { title: "Liquidity Pool", subtitle: "LNT Vault" },
          rightContent: { type: "social" },
          isPrivate: !0,
        },
      };
    },
    95658: function (e, t, n) {
      "use strict";
      n.d(t, {
        Cl: function () {
          return A;
        },
        F: function () {
          return v;
        },
        FP: function () {
          return g;
        },
        JH: function () {
          return f;
        },
        Js: function () {
          return w;
        },
        KR: function () {
          return _;
        },
        NO: function () {
          return y;
        },
        Sv: function () {
          return d;
        },
        jK: function () {
          return u;
        },
        mN: function () {
          return h;
        },
        n: function () {
          return m;
        },
        pi: function () {
          return E;
        },
        uf: function () {
          return p;
        },
        we: function () {
          return l;
        },
        xp: function () {
          return c;
        },
      });
      var a = n(14474),
        r = n(64131),
        o = n(21099),
        i = n(25696),
        s = n(64024);
      let l = (e) => (0, a.o)(e).aud,
        c = () => {
          let e = r.Z.get("userToken");
          if (!e)
            return r.Z.remove("userToken"), { type: o.xK.ERROR, value: "" };
          {
            let t = (0, a.o)(e);
            if ((null == t ? void 0 : t.exp) < Date.now() / 1e3)
              return r.Z.remove("userToken"), { type: o.xK.ERROR, value: "" };
            let n = t.aud;
            return n
              ? { type: o.xK.EMAIL, value: n }
              : { type: o.xK.WALLET, value: "" };
          }
        },
        u = (e) => {
          switch (e) {
            case "arbitrum":
              return "/network/Arbitrum.svg";
            case "Ethereum":
            case "sepolia":
            default:
              return "/network/Ethereum.svg";
            case "Base":
              return "/network/Base.svg";
            case "fuse":
              return "/network/fuse.svg";
          }
        },
        d = (e) => {
          switch (e) {
            case 1:
            default:
              return "/network/Ethereum.svg";
            case 42161:
            case 421614:
              return "/network/Arbitrum.svg";
            case 8453:
              return "/network/Base.svg";
          }
        };
      function p(e) {
        return e >= 1e9
          ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "B"
          : e >= 1e6
          ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
          : e >= 1e3
          ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "k"
          : e.toString();
      }
      function f(e, t, n) {
        let a;
        return function () {
          for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          let s = this,
            l = n && !a;
          a && clearTimeout(a),
            (a = setTimeout(() => {
              (a = null), n || e.apply(s, o);
            }, t)),
            l && e.apply(s, o);
        };
      }
      let m = (e) =>
          ""
            .concat("https://console.nodeops.network", "/deployNode?code=")
            .concat(e),
        v = (e) =>
          '\uD83D\uDE80 Unlock Your Exclusive @DumpOpsETH20 Offer! \uD83D\uDE80\n\nDive into the future with DumpOps! Use my promo code "'.concat(
            e,
            '" when you deploy your node or make any purchase with DumpOps, and receive an instant 5% Off\n              \n\uD83D\uDC49 Click to deploy \uD83C\uDF10\uD83D\uDCBC'
          ),
        h = (e) =>
          e.includes("http") || e.includes("https")
            ? e.replace(
                /(https?:\/\/[^\s]+)/g,
                '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-accent underline">$1</a>'
              )
            : e,
        g = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
          return "".concat(e.slice(0, t), "...").concat(e.slice(-t));
        },
        y = (e) => {
          if (i.K[e]) return i.K[e];
          let t = e.split("/");
          for (let e in i.K) {
            let n = e.split("/");
            if (
              n.length === t.length &&
              n.every((e, n) => e === t[n] || e.startsWith("["))
            )
              return i.K[e];
          }
          return { isPrivate: !1 };
        },
        _ = (e) => {
          let t = new Date(e),
            n = new Date(),
            a = Math.abs(t.getTime() - n.getTime()),
            r = Math.floor(a / 6e4),
            o = Math.floor(a / 36e5),
            i = Math.floor(a / 864e5);
          return t < n
            ? r < 60
              ? "Expired "
                  .concat(r, " ")
                  .concat(1 === r ? "minute" : "minutes", " ago")
              : o < 24
              ? "Expired "
                  .concat(o, " ")
                  .concat(1 === o ? "hour" : "hours", " ago")
              : "Expired "
                  .concat(i, " ")
                  .concat(1 === i ? "day" : "days", " ago")
            : r < 60
            ? "".concat(r, " ").concat(1 === r ? "minute" : "minutes")
            : o < 24
            ? "".concat(o, " ").concat(1 === o ? "hour" : "hours")
            : "".concat(i, " ").concat(1 === i ? "day" : "days");
        },
        A = (e) => {
          let t = new Date(e),
            n = new Date();
          return (n.getTime(), t < n)
            ? {
                containerClass: "border-primary/10",
                dotClass: "bg-red-500",
                textClass: "text-primary-disabled",
                text: "Expired",
                isExpired: !0,
              }
            : {
                containerClass: "border-primary/10",
                dotClass: "bg-green-500",
                textClass: "text-primary-disabled",
                text: "Live",
                isExpired: !1,
              };
        },
        E = (e) => {
          let t = new Date(e),
            n = Math.floor((new Date().getTime() - t.getTime()) / 1e3);
          if (n < 60)
            return ""
              .concat(n, " ")
              .concat(1 === n ? "second" : "seconds", " ago");
          let a = Math.floor(n / 60);
          if (a < 60)
            return "".concat(a, " ").concat(1 === a ? "min" : "mins", " ago");
          let r = Math.floor(a / 60);
          if (r < 24)
            return "".concat(r, " ").concat(1 === r ? "hour" : "hours", " ago");
          let o = Math.floor(r / 24);
          if (o < 30)
            return "".concat(o, " ").concat(1 === o ? "day" : "days", " ago");
          let i = Math.floor(o / 30);
          if (i < 12)
            return ""
              .concat(i, " ")
              .concat(1 === i ? "month" : "months", " ago");
          let s = Math.floor(i / 12);
          return "".concat(s, " ").concat(1 === s ? "year" : "years", " ago");
        },
        w = (e) => {
          try {
            let t = new s.nh(e);
            return s.nh.isOnCurve(t.toBytes());
          } catch (e) {
            return !1;
          }
        };
    },
  },
]);
