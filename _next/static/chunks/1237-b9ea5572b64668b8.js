(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1237],
  {
    89214: function () {},
    85568: function () {},
    44537: function (e, t, n) {
      "use strict";
      var a = n(57437);
      n(2265),
        (t.Z = () =>
          (0, a.jsxs)("svg", {
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
          }));
    },
    35323: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return r;
        },
        a: function () {
          return a.Z;
        },
      });
      var a = n(44537),
        s = n(57437),
        r = (e) => {
          let { bar: t = 10 } = e;
          return (0, s.jsx)("div", {
            className: "space-y-4",
            children: [...Array(t)].map((e, t) =>
              (0, s.jsx)(
                "div",
                {
                  className:
                    "bg-primary/5 animate-pulse h-11 w-full rounded-lg",
                },
                t
              )
            ),
          });
        };
    },
    97323: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return i;
        },
      });
      let a = n(26228).Z.getInstance();
      a.init("38fdbfe3a3295663b2560ecaae9d7ead");
      var s = n(2265);
      let r = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (void 0 !== window.navigator)
            try {
              a.logEvent(e, t);
            } catch (e) {
              console.error("Analytics error:", e);
            }
        },
        i = () => {
          let e = (0, s.useCallback)(function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              r("Landed on ".concat(e), { ...t });
            }, []),
            t = (0, s.useCallback)(function (e, t) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              r("Affiliate Page Visit: ".concat(t, " - ").concat(e), { ...n });
            }, []);
          return {
            track: (e, t) => {
              a.logEvent(e, t);
            },
            trackPage: e,
            trackClick: (0, s.useCallback)(function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              r("Clicked on ".concat(e), { ...t });
            }, []),
            trackEvent: (0, s.useCallback)(function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              r("Event performed: ".concat(e), { ...t });
            }, []),
            trackAffiliatePage: t,
            trackAffiliateEvent: (0, s.useCallback)(function (e, t) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              r("Affiliate Event performed: ".concat(t, " - ").concat(e), {
                ...n,
              });
            }, []),
          };
        };
    },
    69801: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return p;
        },
      });
      var a = n(87148),
        s = n(63691),
        r = n(21099),
        i = n(18818),
        u = n(90487),
        o = n(2265),
        c = n(97323);
      let l = "Please sign this message to verify your wallet ownership.",
        p = () => {
          let { open: e } = (0, u.Ig)(),
            { disconnect: t } = (0, u.qL)(),
            { address: n, isConnected: p, status: y } = (0, u.Tj)(),
            { chainId: d, switchNetwork: f } = (0, u.U_)(),
            { walletProvider: m } = (0, u.cB)("eip155"),
            g = (0, o.useRef)(!1),
            w = (0, o.useRef)(!1),
            { verifySignature: b, isLoggedIn: h, logout: v } = (0, s.q)(),
            [C, T] = (0, o.useState)(""),
            { trackAffiliateEvent: D } = (0, c.z)(),
            k = (0, o.useCallback)(async () => {
              if (m && n && !g.current)
                try {
                  g.current = !0;
                  let e = await (0, i.l)(l, m);
                  e &&
                    (await b(e, l)).success &&
                    (localStorage.setItem("userSignature", e),
                    "coinlist" === C.toLocaleLowerCase() &&
                      D(r.HS.LOGIN_WITH_WALLET, r.hI.COINLIST),
                    (0, a.B)({
                      action: r.At.LOGIN_WITH_WALLET,
                      category: r.Vx.ENGAGEMENT,
                      label: r._R.LOGIN,
                    }));
                } catch (e) {
                  console.error("Error signing message:", e), t();
                } finally {
                  (g.current = !1), (w.current = !1);
                }
            }, [m, n, t, b]),
            x = (0, o.useCallback)(() => {
              localStorage.removeItem("userSignature"),
                (w.current = !0),
                p && !h ? k() : p || e();
            }, [e, p, h, k]),
            E = (0, o.useCallback)(() => {
              localStorage.removeItem("userSignature"),
                (w.current = !1),
                (g.current = !1),
                t(),
                v();
            }, [t, v]),
            A = (0, o.useCallback)(() => {
              t();
            }, [t]);
          return (
            (0, o.useEffect)(() => {
              if (!w.current) return;
              let e = localStorage.getItem("userSignature");
              !p || h || e || g.current || k();
            }, [p, h, k]),
            (0, o.useEffect)(() => {
              {
                let e = new URLSearchParams(window.location.search).get(
                  "promocode"
                );
                e && T(e);
              }
            }, []),
            {
              connectWallet: x,
              disconnectWallet: A,
              address: n,
              isConnected: p,
              status: y,
              chainId: d,
              walletProvider: m,
              disconnectWalletWithLogout: E,
              switchNetwork: f,
            }
          );
        };
    },
    87148: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return a;
        },
      });
      let a = (e) => {
        let { action: t, category: n, label: a, value: s } = e;
        window.gtag &&
          window.gtag("event", t, {
            event_category: n,
            event_label: a,
            value: s,
          });
      };
    },
    18818: function (e, t, n) {
      "use strict";
      n.d(t, {
        BO: function () {
          return w;
        },
        PM: function () {
          return m;
        },
        cd: function () {
          return p;
        },
        jL: function () {
          return o;
        },
        l: function () {
          return c;
        },
        ox: function () {
          return g;
        },
        pd: function () {
          return y;
        },
        uE: function () {
          return f;
        },
        uJ: function () {
          return l;
        },
        vc: function () {
          return d;
        },
      });
      var a = n(59868),
        s = n(31758),
        r = n(69146),
        i = n(30072);
      let u = [
          {
            inputs: [
              { internalType: "uint256", name: "tokenID", type: "uint256" },
              { internalType: "address", name: "to", type: "address" },
            ],
            name: "delegate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ name: "data", type: "bytes[]" }],
            name: "multicall",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        o = async (e, t, n) => {
          try {
            let i = new r.Q(t),
              o = await i.getSigner(),
              c = new a.CH("0xa91fF8b606BA57D8c6638Dd8CF3FC7eB15a9c634", u, o),
              l = n
                .map((t) => ({ tokenId: t, verifierAddress: e }))
                .slice(0, 100),
              p = new s.vU(u),
              y = l.map((e) =>
                p.encodeFunctionData("delegate", [e.tokenId, e.verifierAddress])
              ),
              d = await c.multicall(y);
            return await d.wait(), !0;
          } catch (e) {
            return console.log(e), !1;
          }
        },
        c = async (e, t) => {
          try {
            let n = new r.Q(t),
              a = await n.getSigner();
            return await a.signMessage(e);
          } catch (e) {
            return console.log("Error signing message:", e), "";
          }
        },
        l = async (e, t, n, s, i) => {
          if (!i.length || !s || !e || !n) return { success: !1 };
          try {
            let u = new r.Q(t),
              o = await u.getSigner(),
              c = new a.CH(e, n, o),
              l = await c[s](...i);
            return await l.wait(), { success: !0, txHash: l.hash };
          } catch (e) {
            return console.log(e), { success: !1 };
          }
        },
        p = async (e, t, n) => {
          let i = [
            {
              inputs: [
                { internalType: "uint256", name: "tokenID", type: "uint256" },
                { internalType: "address", name: "to", type: "address" },
              ],
              name: "delegate",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: !1,
              inputs: [{ name: "data", type: "bytes[]" }],
              name: "multicall",
              outputs: [],
              payable: !1,
              stateMutability: "nonpayable",
              type: "function",
            },
          ];
          t.sort((e, t) => Number(e) - Number(t));
          let u = t.map((e) => ({ tokenID: e, to: n })),
            o = new s.vU(i),
            c = u.map((e) =>
              o.encodeFunctionData("delegate", [BigInt(e.tokenID), e.to])
            );
          try {
            let t = new r.Q(e),
              n = await t.getSigner(),
              s = new a.CH("0x219b8EcFF60FEa781FbD8714503f1fE72325Ca9D", i, n),
              u = await s.multicall(c);
            return await u.wait(), { success: !0, txHash: u.hash };
          } catch (e) {
            return console.log(e), { success: !1 };
          }
        },
        y = async (e, t, n) => {
          try {
            let s = new r.Q(e),
              i = await s.getSigner(),
              u = new a.CH(
                "0x2dd0F2DfFeDB4B3CA898046C4f24d99EDD2C8416",
                [
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "operator",
                        type: "address",
                      },
                      {
                        internalType: "uint256[]",
                        name: "licenseIds",
                        type: "uint256[]",
                      },
                    ],
                    name: "approveAndDelegateLicenses",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                ],
                i
              ),
              o = await u.approveAndDelegateLicenses(n, t);
            return await o.wait(), { success: !0, txHash: o.hash };
          } catch (e) {
            return console.log(e), { success: !1 };
          }
        },
        d = async (e, t, n, s, u) => {
          try {
            let o = new r.Q(e),
              c = await o.getSigner(),
              l = new a.CH("0x1BCe1330E93D08f2996fDaEd23a9168B9e3ed090", i, c),
              p = await l.convertNodeToCredits(t, n, s, u);
            return await p.wait(), !0;
          } catch (e) {
            return console.log("Failed to claim:", e), !1;
          }
        },
        f = async (e, t, n, s) => {
          try {
            let i = new r.Q(e),
              u = await i.getSigner(),
              o = new a.CH(
                "0xa234B8924Bb2707195664e4C4Cf17668db9b7286",
                [
                  {
                    inputs: [
                      {
                        internalType: "address[]",
                        name: "_operators",
                        type: "address[]",
                      },
                      {
                        internalType: "uint256[]",
                        name: "_licenseIds",
                        type: "uint256[]",
                      },
                      {
                        internalType: "bytes[]",
                        name: "_signatures",
                        type: "bytes[]",
                      },
                    ],
                    name: "delegateLicenses",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                ],
                u
              ),
              c = await o.delegateLicenses(n, t, s);
            return await c.wait(), { success: !0, txHash: c.hash };
          } catch (e) {
            return console.log(e), { success: !1 };
          }
        },
        m = async (e, t) => {
          try {
            let n = new r.Q(t),
              s = await n.getSigner(),
              i = new a.CH(
                "0x09161538877e6a4DccB8D612EbA075a1ED2B0246",
                [
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "owner",
                        type: "address",
                      },
                      {
                        internalType: "address",
                        name: "operator",
                        type: "address",
                      },
                    ],
                    name: "isApprovedForAll",
                    outputs: [{ internalType: "bool", name: "", type: "bool" }],
                    stateMutability: "view",
                    type: "function",
                  },
                ],
                s
              );
            return await i.isApprovedForAll(
              e,
              "0x1a3427aedd8C031c5DF89f5724699D86d2612f60"
            );
          } catch (e) {
            return console.log(e), { success: !1 };
          }
        },
        g = async (e) => {
          try {
            let t = new r.Q(e),
              n = await t.getSigner(),
              s = new a.CH(
                "0x09161538877e6a4DccB8D612EbA075a1ED2B0246",
                [
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "operator",
                        type: "address",
                      },
                      { internalType: "bool", name: "approved", type: "bool" },
                    ],
                    name: "setApprovalForAll",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                ],
                n
              ),
              i = await s.setApprovalForAll(
                "0x1a3427aedd8C031c5DF89f5724699D86d2612f60",
                !0
              );
            return (
              await i.wait(),
              await m(n.address, e),
              { success: !0, txHash: i.hash }
            );
          } catch (e) {
            return console.log(e), { success: !1 };
          }
        },
        w = async (e, t, n) => {
          try {
            let s = new r.Q(e),
              i = await s.getSigner(),
              u = new a.CH(
                "0x1a3427aedd8C031c5DF89f5724699D86d2612f60",
                [
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "_operator",
                        type: "address",
                      },
                      {
                        internalType: "uint256[]",
                        name: "_tokenIds",
                        type: "uint256[]",
                      },
                    ],
                    name: "delegateNfts",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                ],
                i
              ),
              o = await u.delegateNfts(n, t);
            return await o.wait(), { success: !0, txHash: o.hash };
          } catch (e) {
            return console.log(e), { success: !1 };
          }
        };
    },
    30072: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '[{"name":"balanceOf","type":"function","inputs":[{"name":"account","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"stateMutability":"view"},{"name":"approve","type":"function","inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"stateMutability":"nonpayable"},{"name":"allowance","type":"function","inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"stateMutability":"view"},{"name":"transfer","type":"function","inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"stateMutability":"nonpayable"},{"inputs":[{"internalType":"uint256","name":"claimIndex","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"nodeAmount","type":"uint256"},{"internalType":"string","name":"conversionRate","type":"string"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"convertNodeToCredits","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
  },
]);
