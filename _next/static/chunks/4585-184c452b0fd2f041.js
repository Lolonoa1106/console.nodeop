"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4585],
  {
    18229: function (e, t, n) {
      n.d(t, {
        Nq: function () {
          return o;
        },
        rg: function () {
          return l;
        },
      });
      var r = n(2265);
      let i = (0, r.createContext)(null);
      function l(e) {
        let {
            clientId: t,
            nonce: n,
            onScriptLoadSuccess: l,
            onScriptLoadError: o,
            children: u,
          } = e,
          a = (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              { nonce: t, onScriptLoadSuccess: n, onScriptLoadError: i } = e,
              [l, o] = (0, r.useState)(!1),
              u = (0, r.useRef)(n);
            u.current = n;
            let a = (0, r.useRef)(i);
            return (
              (a.current = i),
              (0, r.useEffect)(() => {
                let e = document.createElement("script");
                return (
                  (e.src = "https://accounts.google.com/gsi/client"),
                  (e.async = !0),
                  (e.defer = !0),
                  (e.nonce = t),
                  (e.onload = () => {
                    var e;
                    o(!0),
                      null === (e = u.current) || void 0 === e || e.call(u);
                  }),
                  (e.onerror = () => {
                    var e;
                    o(!1),
                      null === (e = a.current) || void 0 === e || e.call(a);
                  }),
                  document.body.appendChild(e),
                  () => {
                    document.body.removeChild(e);
                  }
                );
              }, [t]),
              l
            );
          })({ nonce: n, onScriptLoadSuccess: l, onScriptLoadError: o }),
          s = (0, r.useMemo)(
            () => ({ clientId: t, scriptLoadedSuccessfully: a }),
            [t, a]
          );
        return r.createElement(i.Provider, { value: s }, u);
      }
      function o(e) {
        let {
            flow: t = "implicit",
            scope: n = "",
            onSuccess: l,
            onError: o,
            onNonOAuthError: u,
            overrideScope: a,
            state: s,
            ...c
          } = e,
          { clientId: d, scriptLoadedSuccessfully: f } = (function () {
            let e = (0, r.useContext)(i);
            if (!e)
              throw Error(
                "Google OAuth components must be used within GoogleOAuthProvider"
              );
            return e;
          })(),
          h = (0, r.useRef)(),
          C = (0, r.useRef)(l);
        C.current = l;
        let m = (0, r.useRef)(o);
        m.current = o;
        let v = (0, r.useRef)(u);
        (v.current = u),
          (0, r.useEffect)(() => {
            var e, r;
            if (!f) return;
            let i = "implicit" === t ? "initTokenClient" : "initCodeClient",
              l =
                null ===
                  (r =
                    null === (e = null == window ? void 0 : window.google) ||
                    void 0 === e
                      ? void 0
                      : e.accounts) || void 0 === r
                  ? void 0
                  : r.oauth2[i]({
                      client_id: d,
                      scope: a ? n : "openid profile email ".concat(n),
                      callback: (e) => {
                        var t, n;
                        if (e.error)
                          return null === (t = m.current) || void 0 === t
                            ? void 0
                            : t.call(m, e);
                        null === (n = C.current) ||
                          void 0 === n ||
                          n.call(C, e);
                      },
                      error_callback: (e) => {
                        var t;
                        null === (t = v.current) ||
                          void 0 === t ||
                          t.call(v, e);
                      },
                      state: s,
                      ...c,
                    });
            h.current = l;
          }, [d, f, t, n, s]);
        let k = (0, r.useCallback)((e) => {
            var t;
            return null === (t = h.current) || void 0 === t
              ? void 0
              : t.requestAccessToken(e);
          }, []),
          g = (0, r.useCallback)(() => {
            var e;
            return null === (e = h.current) || void 0 === e
              ? void 0
              : e.requestCode();
          }, []);
        return "implicit" === t ? k : g;
      }
    },
    12310: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(67775).Z)("AlertCircleIcon", [
        [
          "circle",
          { cx: "12", cy: "12", r: "10", stroke: "currentColor", key: "k0" },
        ],
        ["path", { d: "M11.992 15H12.001", stroke: "currentColor", key: "k1" }],
        ["path", { d: "M12 12L12 8", stroke: "currentColor", key: "k2" }],
      ]);
    },
    19814: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(67775).Z)("ArrowRight01Icon", [
        [
          "path",
          {
            d: "M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18",
            stroke: "currentColor",
            key: "k0",
          },
        ],
      ]);
    },
    71170: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(67775).Z)("ArrowUpRight01Icon", [
        ["path", { d: "M17 7L6 18", stroke: "currentColor", key: "k0" }],
        [
          "path",
          {
            d: "M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13",
            stroke: "currentColor",
            key: "k1",
          },
        ],
      ]);
    },
    55786: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(67775).Z)("Copy01Icon", [
        [
          "path",
          {
            d: "M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999",
            stroke: "currentColor",
            key: "k1",
          },
        ],
      ]);
    },
    45068: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(67775).Z)("DollarCircleIcon", [
        [
          "path",
          {
            d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M14.7102 10.0611C14.6111 9.29844 13.7354 8.06622 12.1608 8.06619C10.3312 8.06616 9.56136 9.07946 9.40515 9.58611C9.16145 10.2638 9.21019 11.6571 11.3547 11.809C14.0354 11.999 15.1093 12.3154 14.9727 13.956C14.836 15.5965 13.3417 15.951 12.1608 15.9129C10.9798 15.875 9.04764 15.3325 8.97266 13.8733M11.9734 6.99805V8.06982M11.9734 15.9031V16.998",
            stroke: "currentColor",
            key: "k1",
          },
        ],
      ]);
    },
    34172: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(67775).Z)("GoogleIcon", [
        [
          "circle",
          { cx: "12", cy: "12", r: "10", stroke: "currentColor", key: "k0" },
        ],
        [
          "path",
          {
            d: "M12 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.3807 7 14.6307 7.55964 15.5355 8.46447",
            stroke: "currentColor",
            key: "k1",
          },
        ],
      ]);
    },
    6882: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(67775).Z)("InformationCircleIcon", [
        [
          "path",
          {
            d: "M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11",
            stroke: "currentColor",
            key: "k1",
          },
        ],
        ["path", { d: "M11.992 8H12.001", stroke: "currentColor", key: "k2" }],
      ]);
    },
    15882: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(67775).Z)("Mail01Icon", [
        [
          "path",
          {
            d: "M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z",
            stroke: "currentColor",
            key: "k1",
          },
        ],
      ]);
    },
    56634: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(67775).Z)("MinusSignIcon", [
        ["path", { d: "M20 12L4 12", stroke: "currentColor", key: "k0" }],
      ]);
    },
    73079: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(67775).Z)("NewTwitterIcon", [
        [
          "path",
          {
            d: "M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516",
            stroke: "currentColor",
            key: "k0",
          },
        ],
      ]);
    },
    55898: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(67775).Z)("PlusSignIcon", [
        ["path", { d: "M12 4V20M20 12H4", stroke: "currentColor", key: "k0" }],
      ]);
    },
    82495: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(67775).Z)("SmartPhone01Icon", [
        [
          "path",
          {
            d: "M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        ["path", { d: "M11 19H13", stroke: "currentColor", key: "k1" }],
        [
          "path",
          {
            d: "M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2",
            stroke: "currentColor",
            key: "k2",
          },
        ],
      ]);
    },
    17819: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(67775).Z)("Wallet01Icon", [
        [
          "path",
          {
            d: "M16 14C16 14.8284 16.6716 15.5 17.5 15.5C18.3284 15.5 19 14.8284 19 14C19 13.1716 18.3284 12.5 17.5 12.5C16.6716 12.5 16 13.1716 16 14Z",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M10 7H16C18.8284 7 20.2426 7 21.1213 7.87868C22 8.75736 22 10.1716 22 13V15C22 17.8284 22 19.2426 21.1213 20.1213C20.2426 21 18.8284 21 16 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C14.93 3 15.395 3 15.7765 3.10222C16.8117 3.37962 17.6204 4.18827 17.8978 5.22354C18 5.60504 18 6.07003 18 7",
            stroke: "currentColor",
            key: "k1",
          },
        ],
      ]);
    },
    30166: function (e, t, n) {
      n.d(t, {
        default: function () {
          return i.a;
        },
      });
      var r = n(55775),
        i = n.n(r);
    },
    55775: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(60917);
      n(57437), n(2265);
      let i = r._(n(15602));
      function l(e, t) {
        var n;
        let r = {
          loading: (e) => {
            let { error: t, isLoading: n, pastDelay: r } = e;
            return null;
          },
        };
        "function" == typeof e && (r.loader = e);
        let l = { ...r, ...t };
        return (0, i.default)({
          ...l,
          modules: null == (n = l.loadableGenerated) ? void 0 : n.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    81523: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(18993);
      function i(e) {
        let { reason: t, children: n } = e;
        if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
        return n;
      }
    },
    15602: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = n(57437),
        i = n(2265),
        l = n(81523),
        o = n(70049);
      function u(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let a = {
          loader: () => Promise.resolve(u(() => null)),
          loading: null,
          ssr: !0,
        },
        s = function (e) {
          let t = { ...a, ...e },
            n = (0, i.lazy)(() => t.loader().then(u)),
            s = t.loading;
          function c(e) {
            let u = s
                ? (0, r.jsx)(s, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              a = t.ssr
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, r.jsx)(o.PreloadCss, { moduleIds: t.modules })
                        : null,
                      (0, r.jsx)(n, { ...e }),
                    ],
                  })
                : (0, r.jsx)(l.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, r.jsx)(n, { ...e }),
                  });
            return (0, r.jsx)(i.Suspense, { fallback: u, children: a });
          }
          return (c.displayName = "LoadableComponent"), c;
        };
    },
    70049: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(57437),
        i = n(20544);
      function l(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let n = (0, i.getExpectedRequestStore)("next/dynamic css"),
          l = [];
        if (n.reactLoadableManifest && t) {
          let e = n.reactLoadableManifest;
          for (let n of t) {
            if (!e[n]) continue;
            let t = e[n].files.filter((e) => e.endsWith(".css"));
            l.push(...t);
          }
        }
        return 0 === l.length
          ? null
          : (0, r.jsx)(r.Fragment, {
              children: l.map((e) =>
                (0, r.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: n.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e
                )
              ),
            });
      }
    },
    26420: function (e, t, n) {
      n.d(t, {
        Fox: function () {
          return r.Fox;
        },
        MF$: function () {
          return r.MF$;
        },
        RJ0: function () {
          return r.RJ0;
        },
        RdO: function () {
          return r.RdO;
        },
        Zkw: function () {
          return r.Zkw;
        },
        eGR: function () {
          return r.eGR;
        },
        ueV: function () {
          return r.ueV;
        },
        yXc: function () {
          return r.yXc;
        },
      });
      var r = n(54170);
    },
    41662: function (e, t, n) {
      n.d(t, {
        dF: function () {
          return y;
        },
        bM: function () {
          return g;
        },
        fi: function () {
          return b;
        },
        vz: function () {
          return p;
        },
      });
      var r = n(35157),
        i = n(59369),
        l = n(45474),
        o = n(69781);
      let u = BigInt(-1),
        a = BigInt(0),
        s = BigInt(1),
        c = BigInt(5),
        d = {},
        f = "0000";
      for (; f.length < 80; ) f += f;
      function h(e) {
        let t = f;
        for (; t.length < e; ) t += t;
        return BigInt("1" + t.substring(0, e));
      }
      function C(e, t, n) {
        let i = BigInt(t.width);
        if (t.signed) {
          let t = s << (i - s);
          (0, r.hu)(
            null == n || (e >= -t && e < t),
            "overflow",
            "NUMERIC_FAULT",
            { operation: n, fault: "overflow", value: e }
          ),
            (e =
              e > a
                ? (0, l._Y)((0, l.sS)(e, i), i)
                : -(0, l._Y)((0, l.sS)(-e, i), i));
        } else {
          let t = s << i;
          (0, r.hu)(
            null == n || (e >= 0 && e < t),
            "overflow",
            "NUMERIC_FAULT",
            { operation: n, fault: "overflow", value: e }
          ),
            (e = ((e % t) + t) % t & (t - s));
        }
        return e;
      }
      function m(e) {
        "number" == typeof e && (e = `fixed128x${e}`);
        let t = !0,
          n = 128,
          i = 18;
        if ("string" == typeof e) {
          if ("fixed" === e);
          else if ("ufixed" === e) t = !1;
          else {
            let l = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
            (0, r.en)(l, "invalid fixed format", "format", e),
              (t = "u" !== l[1]),
              (n = parseInt(l[2])),
              (i = parseInt(l[3]));
          }
        } else if (e) {
          let l = e,
            o = (e, t, n) =>
              null == l[e]
                ? n
                : ((0, r.en)(
                    typeof l[e] === t,
                    "invalid fixed format (" + e + " not " + t + ")",
                    "format." + e,
                    l[e]
                  ),
                  l[e]);
          (t = o("signed", "boolean", t)),
            (n = o("width", "number", n)),
            (i = o("decimals", "number", i));
        }
        (0, r.en)(
          n % 8 == 0,
          "invalid FixedNumber width (not byte aligned)",
          "format.width",
          n
        ),
          (0, r.en)(
            i <= 80,
            "invalid FixedNumber decimals (too large)",
            "format.decimals",
            i
          );
        let l = (t ? "" : "u") + "fixed" + String(n) + "x" + String(i);
        return { signed: t, width: n, decimals: i, name: l };
      }
      class v {
        format;
        #e;
        #t;
        #n;
        _value;
        constructor(e, t, n) {
          (0, r.NK)(e, d, "FixedNumber"), (this.#t = t), (this.#e = n);
          let i = (function (e, t) {
            let n = "";
            e < a && ((n = "-"), (e *= u));
            let r = e.toString();
            if (0 === t) return n + r;
            for (; r.length <= t; ) r = f + r;
            let i = r.length - t;
            for (
              r = r.substring(0, i) + "." + r.substring(i);
              "0" === r[0] && "." !== r[1];

            )
              r = r.substring(1);
            for (; "0" === r[r.length - 1] && "." !== r[r.length - 2]; )
              r = r.substring(0, r.length - 1);
            return n + r;
          })(t, n.decimals);
          (0, o.h)(this, { format: n.name, _value: i }),
            (this.#n = h(n.decimals));
        }
        get signed() {
          return this.#e.signed;
        }
        get width() {
          return this.#e.width;
        }
        get decimals() {
          return this.#e.decimals;
        }
        get value() {
          return this.#t;
        }
        #r(e) {
          (0, r.en)(
            this.format === e.format,
            "incompatible format; use fixedNumber.toFormat",
            "other",
            e
          );
        }
        #i(e, t) {
          return new v(d, (e = C(e, this.#e, t)), this.#e);
        }
        #l(e, t) {
          return this.#r(e), this.#i(this.#t + e.#t, t);
        }
        addUnsafe(e) {
          return this.#l(e);
        }
        add(e) {
          return this.#l(e, "add");
        }
        #o(e, t) {
          return this.#r(e), this.#i(this.#t - e.#t, t);
        }
        subUnsafe(e) {
          return this.#o(e);
        }
        sub(e) {
          return this.#o(e, "sub");
        }
        #u(e, t) {
          return this.#r(e), this.#i((this.#t * e.#t) / this.#n, t);
        }
        mulUnsafe(e) {
          return this.#u(e);
        }
        mul(e) {
          return this.#u(e, "mul");
        }
        mulSignal(e) {
          this.#r(e);
          let t = this.#t * e.#t;
          return (
            (0, r.hu)(
              t % this.#n === a,
              "precision lost during signalling mul",
              "NUMERIC_FAULT",
              { operation: "mulSignal", fault: "underflow", value: this }
            ),
            this.#i(t / this.#n, "mulSignal")
          );
        }
        #a(e, t) {
          return (
            (0, r.hu)(e.#t !== a, "division by zero", "NUMERIC_FAULT", {
              operation: "div",
              fault: "divide-by-zero",
              value: this,
            }),
            this.#r(e),
            this.#i((this.#t * this.#n) / e.#t, t)
          );
        }
        divUnsafe(e) {
          return this.#a(e);
        }
        div(e) {
          return this.#a(e, "div");
        }
        divSignal(e) {
          (0, r.hu)(e.#t !== a, "division by zero", "NUMERIC_FAULT", {
            operation: "div",
            fault: "divide-by-zero",
            value: this,
          }),
            this.#r(e);
          let t = this.#t * this.#n;
          return (
            (0, r.hu)(
              t % e.#t === a,
              "precision lost during signalling div",
              "NUMERIC_FAULT",
              { operation: "divSignal", fault: "underflow", value: this }
            ),
            this.#i(t / e.#t, "divSignal")
          );
        }
        cmp(e) {
          let t = this.value,
            n = e.value,
            r = this.decimals - e.decimals;
          return (r > 0 ? (n *= h(r)) : r < 0 && (t *= h(-r)), t < n)
            ? -1
            : t > n
            ? 1
            : 0;
        }
        eq(e) {
          return 0 === this.cmp(e);
        }
        lt(e) {
          return 0 > this.cmp(e);
        }
        lte(e) {
          return 0 >= this.cmp(e);
        }
        gt(e) {
          return this.cmp(e) > 0;
        }
        gte(e) {
          return this.cmp(e) >= 0;
        }
        floor() {
          let e = this.#t;
          return (
            this.#t < a && (e -= this.#n - s),
            (e = (this.#t / this.#n) * this.#n),
            this.#i(e, "floor")
          );
        }
        ceiling() {
          let e = this.#t;
          return (
            this.#t > a && (e += this.#n - s),
            (e = (this.#t / this.#n) * this.#n),
            this.#i(e, "ceiling")
          );
        }
        round(e) {
          if ((null == e && (e = 0), e >= this.decimals)) return this;
          let t = this.decimals - e,
            n = c * h(t - 1),
            r = this.value + n,
            i = h(t);
          return C((r = (r / i) * i), this.#e, "round"), new v(d, r, this.#e);
        }
        isZero() {
          return this.#t === a;
        }
        isNegative() {
          return this.#t < a;
        }
        toString() {
          return this._value;
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(e) {
          return v.fromString(this.toString(), e);
        }
        static fromValue(e, t, n) {
          let i = null == t ? 0 : (0, l.Dx)(t),
            o = m(n),
            u = (0, l.yT)(e, "value"),
            s = i - o.decimals;
          if (s > 0) {
            let t = h(s);
            (0, r.hu)(
              u % t === a,
              "value loses precision for format",
              "NUMERIC_FAULT",
              { operation: "fromValue", fault: "underflow", value: e }
            ),
              (u /= t);
          } else s < 0 && (u *= h(-s));
          return C(u, o, "fromValue"), new v(d, u, o);
        }
        static fromString(e, t) {
          let n = e.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
          (0, r.en)(
            n && n[2].length + n[3].length > 0,
            "invalid FixedNumber string value",
            "value",
            e
          );
          let i = m(t),
            l = n[2] || "0",
            o = n[3] || "";
          for (; o.length < i.decimals; ) o += f;
          (0, r.hu)(
            o.substring(i.decimals).match(/^0*$/),
            "too many decimals for format",
            "NUMERIC_FAULT",
            { operation: "fromString", fault: "underflow", value: e }
          ),
            (o = o.substring(0, i.decimals));
          let u = BigInt(n[1] + l + o);
          return C(u, i, "fromString"), new v(d, u, i);
        }
        static fromBytes(e, t) {
          let n = (0, l.Gh)((0, i.Pw)(e, "value")),
            r = m(t);
          return (
            r.signed && (n = (0, l._Y)(n, r.width)),
            C(n, r, "fromBytes"),
            new v(d, n, r)
          );
        }
      }
      let k = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
      function g(e, t) {
        let n = 18;
        if ("string" == typeof t) {
          let e = k.indexOf(t);
          (0, r.en)(e >= 0, "invalid unit", "unit", t), (n = 3 * e);
        } else null != t && (n = (0, l.Dx)(t, "unit"));
        return v.fromValue(e, n, { decimals: n, width: 512 }).toString();
      }
      function p(e, t) {
        (0, r.en)("string" == typeof e, "value must be a string", "value", e);
        let n = 18;
        if ("string" == typeof t) {
          let e = k.indexOf(t);
          (0, r.en)(e >= 0, "invalid unit", "unit", t), (n = 3 * e);
        } else null != t && (n = (0, l.Dx)(t, "unit"));
        return v.fromString(e, { decimals: n, width: 512 }).value;
      }
      function y(e) {
        return g(e, 18);
      }
      function b(e) {
        return p(e, 18);
      }
    },
  },
]);
