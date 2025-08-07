"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [874],
  {
    99822: function (e, t, a) {
      var s = a(57437),
        n = a(69767),
        l = a(63691),
        r = a(46560),
        o = a(2265),
        i = a(14438);
      t.Z = (e) => {
        let {
            chainName: t,
            network: a,
            setConnectedAddress: d,
            setConnectedAddressBalance: c,
          } = e,
          { openCosmosWalletModal: u, setOpenCosmosWalletModal: m } = (0,
          l.q)(),
          [p, h] = (0, o.useState)(!1),
          [x, f] = (0, o.useState)(""),
          g = async () => {
            try {
              h(!0);
              let e = await (0, r.SM)(t, a);
              if ((m(!1), "success" === e.status)) {
                if ((f(e.message), d(e.message), "omniflix" === t)) return;
                let s = await (0, r.I6)(t, a, e.message);
                "success" === s.status ? c(s.message) : i.Am.error(s.message);
              } else i.Am.error(e.message);
            } catch (e) {
              console.log(e);
            } finally {
              h(!1);
            }
          };
        return (0, s.jsx)(n.u_, {
          isOpen: u,
          close: () => m(!1),
          title: "Cosmos Wallet",
          showCloseButton: !0,
          children: (0, s.jsx)("div", {
            className: "flex flex-col gap-2 mt-5",
            children: (0, s.jsx)("button", {
              onClick: g,
              className: "border border-primary/5 rounded-xl px-3 py-2",
              children: (0, s.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, s.jsx)("img", {
                    src: "/keplrIcon.svg",
                    alt: "keplr",
                    className: "w-10 h-10",
                  }),
                  (0, s.jsx)("p", {
                    className: "text-lg font-medium",
                    children: "Keplr",
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    30874: function (e, t, a) {
      a.d(t, {
        iJ: function () {
          return eb;
        },
        PN: function () {
          return L;
        },
        iV: function () {
          return eA;
        },
        Z9: function () {
          return ed;
        },
        AE: function () {
          return eu;
        },
        _A: function () {
          return ee;
        },
        sE: function () {
          return en;
        },
        to: function () {
          return ei;
        },
      });
      var s = a(57437),
        n = a(69767),
        l = a(63691),
        r = a(2265),
        o = a(21099),
        i = a(45068),
        d = a(6882),
        c = function (e) {
          let { value: t, onChange: a, selectedMethod: n, exchangeRate: l } = e,
            [c, u] = (0, r.useState)(t.toString());
          return (
            (0, r.useEffect)(() => {
              u(0 === t ? "" : t.toString());
            }, [t]),
            (0, s.jsxs)("div", {
              className: "space-y-2",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "py-2 px-4 flex items-center border-2 border-border rounded-xl bg-background-dark ",
                  children: [
                    (0, s.jsx)("span", {
                      className: "",
                      children: (0, s.jsx)(i.Z, { size: 20 }),
                    }),
                    (0, s.jsx)("input", {
                      type: "number",
                      value: t,
                      onChange: (e) => {
                        let t = e.target.value;
                        if ((u(t), "" === t)) {
                          a(0);
                          return;
                        }
                        let s = parseInt(t);
                        if (isNaN(s)) return;
                        let r = Math.ceil(o.IZ / (null != l ? l : 0));
                        a(
                          Math.min(
                            Math.max(s, n === o.LM.NODE ? r : 0),
                            n === o.LM.COPPERX ? 1e4 : s
                          )
                        );
                      },
                      className:
                        "w-full bg-background-dark font-mono text-right text-lg font-semibold focus:outline-none pl-5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                      min: n === o.LM.NODE && l ? o.IZ : 5,
                      max: n === o.LM.COPPERX ? 1e4 : void 0,
                    }),
                  ],
                }),
                n === o.LM.NODE &&
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "flex justify-between text-xs text-white/40 px-2 font-mono",
                        children: [
                          (0, s.jsxs)("span", { children: ["Min $", o.IZ] }),
                          (0, s.jsxs)("span", {
                            children: [
                              "1 NODE ≈ $",
                              l ? l.toFixed(3) : "0.00",
                              " USD Credits",
                            ],
                          }),
                        ],
                      }),
                      t > 0 &&
                        (0, s.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "flex justify-end gap-2 text-xs text-white/40 px-2 font-mono",
                              children: [
                                (0, s.jsx)("span", {
                                  children: "Expected NODE Usage = ",
                                }),
                                (0, s.jsxs)("span", {
                                  children: [
                                    l ? (t / l).toFixed(2) : "0.00",
                                    " ",
                                    "NODE",
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("a", {
                              href: "https://docs.nodeops.network/Tokenomics/node#node-to-credit-conversion-decision-matrix",
                              target: "_blank",
                              className:
                                "flex justify-end self-end gap-2 text-xs text-white/40 px-2 font-mono mt-1 bg-background-dark/40 rounded-md p-2",
                              children: [
                                (0, s.jsx)(d.Z, { className: "w-4 h-4" }),
                                (0, s.jsx)("span", {
                                  children: "Learn more about the conversion",
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                n === o.LM.COPPERX &&
                  (0, s.jsxs)("div", {
                    className:
                      "flex justify-between text-xs text-white/40 px-2 font-mono",
                    children: [
                      (0, s.jsx)("span", { children: "Min $5" }),
                      (0, s.jsx)("span", { children: "Max $10,000" }),
                    ],
                  }),
              ],
            })
          );
        },
        u = a(69801),
        m = a(12310),
        p = a(59527),
        h = a(14438),
        x = a(69146),
        f = a(59868),
        g = a(41662),
        y = a(23296),
        v = a(37741);
      let w = {
          ETHEREUM: {
            chainId: 1,
            NODE_TOKEN: "0x2F714d7b9A035d4ce24af8d9b6091c07E37f43Fb",
            OFT_ADAPTER: "0xA516F018D5ac6d086a04bBB1A8ECb00eB61a970a",
            layerZeroEndpointId: 30101,
          },
          ARBITRUM: {
            chainId: 42161,
            OFT_TOKEN: "0x2F714d7b9A035d4ce24af8d9b6091c07E37f43Fb",
            layerZeroEndpointId: 30110,
          },
          BSC: {
            chainId: 56,
            OFT_TOKEN: "0x2F714d7b9A035d4ce24af8d9b6091c07E37f43Fb",
            layerZeroEndpointId: 30102,
          },
        },
        N = (e, t) => {
          switch (e) {
            case "ethereum":
            default:
              return w.ETHEREUM.OFT_ADAPTER;
            case "arbitrum":
              return w.ARBITRUM.OFT_TOKEN;
            case "bsc":
              return w.BSC.OFT_TOKEN;
          }
        },
        b = (e) => {
          switch (e) {
            case "ethereum":
            default:
              return w.ETHEREUM.NODE_TOKEN;
            case "arbitrum":
              return w.ARBITRUM.OFT_TOKEN;
            case "bsc":
              return w.BSC.OFT_TOKEN;
          }
        },
        j = (e) => N(e, "bridge"),
        _ = async (e, t, a, s) => {
          try {
            if (!e || !t || !a) throw Error("Missing required parameters");
            let n = new x.Q(e),
              l = new f.CH(a, s, n),
              r = await l.balanceOf(t);
            return BigInt(r.toString());
          } catch (e) {
            throw (console.error("Error fetching token balance:", e), e);
          }
        },
        A = async (e, t, a, s, n) => {
          try {
            if (!e || !t || !a || !s)
              throw Error("Missing required parameters");
            let l = new x.Q(e),
              r = new f.CH(a, n, l),
              o = await r.allowance(t, s);
            return BigInt(o.toString());
          } catch (e) {
            return console.error("Error checking allowance:", e), BigInt(0);
          }
        },
        C = (e) => {
          switch (e) {
            case "ethereum":
            case "bsc":
              return "0x0000000000000000000000000000000000000000";
            case "arbitrum":
              return "0x1BCe1330E93D08f2996fDaEd23a9168B9e3ed090";
          }
        };
      var E = a(30072),
        T = a(49628);
      let O = (e, t, a, s, n, l, o) => {
          let [i, d] = (0, r.useState)(null),
            [c, u] = (0, r.useState)(BigInt(0)),
            [m, p] = (0, r.useState)(!1),
            [h, x] = (0, r.useState)(!1),
            { setFormattedBalance: f } = (0, T.q)(),
            y = (0, r.useRef)(!1),
            v = async () => {
              if (t && a && s()) {
                p(!0);
                try {
                  let s = b(a.chain_name),
                    n = await _(e, t, s, o),
                    l = n ? Number((0, g.dF)(n)) : 0;
                  f(l.toString()), d(n);
                } catch (e) {
                  console.error("Failed to fetch token balance:", e);
                } finally {
                  p(!1);
                }
              }
            },
            w = async () => {
              if (!t || !a || !s()) {
                console.log(
                  "fetchAllowance: Early return due to missing conditions"
                );
                return;
              }
              x(!0);
              try {
                let s = b(a.chain_name),
                  n = j(a.chain_name),
                  l = await A(e, t, s, n, o);
                u(l);
              } catch (e) {
                console.error("Failed to fetch allowance:", e);
              } finally {
                x(!1);
              }
            },
            N = async () => {
              await Promise.all([v(), w()]);
            },
            C = s();
          (0, r.useEffect)(() => {
            t &&
              C &&
              !y.current &&
              (console.log("fetching token balance and allowance"),
              v(),
              w(),
              (y.current = !0));
          }, [t, a, n, l, e]);
          let E = i ? (0, g.dF)(i) : "0";
          return {
            tokenBalance: i,
            allowance: c,
            formattedBalance: Number(E).toFixed(2),
            isLoadingBalance: m,
            isLoadingAllowance: h,
            fetchTokenBalance: v,
            fetchAllowance: w,
            refreshTokenData: N,
            resetFetched: () => {
              d(null), u(BigInt(0)), p(!1), x(!1);
            },
          };
        },
        k = (e, t) => !!e && t < (0, g.fi)(e);
      var D = a(26420),
        S = a(18818),
        I = a(95658),
        P = (e) => {
          let { isConnected: t, isOnCorrectNetwork: a, onSwitchNetwork: n } = e;
          return !t || a
            ? null
            : (0, s.jsxs)("div", {
                className:
                  "w-full my-4 mb-2 p-3 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm flex items-center justify-between",
                children: [
                  (0, s.jsx)("div", {
                    className: "flex items-center justify-between",
                    children: (0, s.jsx)("span", {
                      children: "⚠️ Wrong network. Please switch to Arbitrum",
                    }),
                  }),
                  (0, s.jsx)("button", {
                    onClick: n,
                    className:
                      "px-2 py-1 bg-orange-500 text-white text-xs hover:bg-orange-600",
                    children: "Switch",
                  }),
                ],
              });
        },
        L = () => {
          let {
              addCreditModalOpen: e,
              setAddCreditModalOpen: t,
              creditPoints: a,
              paymentMethodNODEDetails: i,
              getPaymentMethodNODEDetails: d,
              getMyCredits: w,
              isLoggedIn: N,
            } = (0, l.q)(),
            {
              connectWallet: j,
              isConnected: _,
              address: A,
              chainId: T,
              walletProvider: L,
              switchNetwork: F,
              disconnectWallet: R,
            } = (0, u.r)(),
            [U, M] = (0, r.useState)(100),
            [B, H] = (0, r.useState)(o.LM.NODE),
            [z, W] = (0, r.useState)(!1),
            [G, Z] = (0, r.useState)(""),
            [K, q] = (0, r.useState)(null),
            [V, Y] = (0, r.useState)(!1),
            [J, Q] = (0, r.useState)(!1),
            [$, X] = (0, r.useState)(!1),
            ee =
              (null === y.M || void 0 === y.M ? void 0 : y.M.arbitrum.id) === T,
            {
              tokenBalance: et,
              formattedBalance: ea,
              isLoadingBalance: es,
              refreshTokenData: en,
              fetchTokenBalance: el,
            } = O(L, A, "arbitrum", () => ee, T, _, E),
            [er, eo] = (0, r.useState)(BigInt(0)),
            [ei, ed] = (0, r.useState)(!1),
            ec = (0, r.useRef)(""),
            eu = async (e, t, a) => {
              try {
                let t = b(a),
                  s = C(a);
                if (!s) throw Error("Claim contract address not found");
                let n = new x.Q(e),
                  l = await n.getSigner(),
                  r = new f.CH(t, E, l),
                  o = (0, g.fi)("100000");
                return await r.approve(s, o);
              } catch (e) {
                throw (console.error("Error approving stake:", e), e);
              }
            },
            em = async () => {
              if (A && L && U && K) {
                Q(!0);
                try {
                  let e = U / K,
                    t = await eu(L, e.toString(), "arbitrum");
                  await t.wait(), await Promise.all([eh(), en()]);
                } catch (e) {
                  console.error("Approval failed:", e);
                } finally {
                  Q(!1);
                }
              }
            },
            ep = async (e, t, a) => {
              try {
                let s = b(a),
                  n = C(a);
                if (!n) throw Error("Claim contract address not found");
                let l = new x.Q(e),
                  r = new f.CH(s, E, l),
                  o = await r.allowance(t, n);
                return BigInt(o.toString());
              } catch (e) {
                throw (console.error("Error checking stake allowance:", e), e);
              }
            },
            eh = async () => {
              if (A && L && ee) {
                X(!0);
                try {
                  let e = await ep(L, A, "arbitrum");
                  eo(e);
                } catch (e) {
                  console.error("Failed to fetch allowance:", e);
                } finally {
                  X(!1);
                }
              }
            },
            ex = async () => {
              try {
                if ((ed(!0), !K)) {
                  h.Am.error("Exchange rate not loaded");
                  return;
                }
                let e = U / K;
                if (!U) {
                  h.Am.error("Amount cannot be empty");
                  return;
                }
                if (U < o.IZ) {
                  h.Am.error("Minimum amount is $".concat(o.IZ));
                  return;
                }
                if (!A) {
                  h.Am.error("Please connect your wallet");
                  return;
                }
                if (k(e.toString(), er)) {
                  await em();
                  return;
                }
                let a = await (0, p.dx)({
                  wallet_address: A || "",
                  amount: e.toString(),
                });
                T !== D.yXc.id && F(D.yXc);
                let s = null == a ? void 0 : a.data.amount,
                  n = null == a ? void 0 : a.data.deadline,
                  l = null == a ? void 0 : a.data.signature,
                  r = null == a ? void 0 : a.data.price;
                if (!U || !l || !n || !r) {
                  h.Am.error("Amount, signature, deadline or price not found");
                  return;
                }
                (await (0, S.vc)(L, s.toString(), r, n, "0x".concat(l)))
                  ? (h.Am.success("Payment completed successfully!"),
                    await w(),
                    M(100),
                    X(!1),
                    ed(!1),
                    eo(BigInt(0)),
                    Q(!1),
                    t(!1))
                  : h.Am.error("Failed to topup credits");
              } catch (t) {
                var e, a;
                h.Am.error(
                  (null == t
                    ? void 0
                    : null === (a = t.response) || void 0 === a
                    ? void 0
                    : null === (e = a.data) || void 0 === e
                    ? void 0
                    : e.error) || "Failed to topup credits"
                );
              } finally {
                ed(!1);
              }
            },
            ef = async () => {
              if (B === o.LM.COPPERX && U < 5) {
                h.Am.error("Minimum amount is 5 credits");
                return;
              }
              if (B === o.LM.COPPERX && U > 1e4) {
                h.Am.error("Maximum amount is 10000 credits");
                return;
              }
              if (B === o.LM.NODE && U < o.IZ) {
                h.Am.error("Minimum amount is $".concat(o.IZ));
                return;
              }
              if (B === o.LM.NODE && U > Number(ea)) {
                h.Am.error("Not allowed to topup more than your balance");
                return;
              }
              if (B === o.LM.NODE && !_) {
                await j();
                return;
              }
              W(!0);
              try {
                if ((B === o.LM.NODE && (await ex()), B === o.LM.COPPERX)) {
                  let e = {
                      order_items: [
                        { sku_id: o.ou, quantity: 1, metadata: { amount: U } },
                      ],
                      selective_promocode_list: [],
                      metadata: {},
                    },
                    a = await (0, p.aL)(e);
                  if ("success" === a.message) {
                    let e = a.data;
                    e
                      ? ((window.location.href = e), t(!1))
                      : h.Am.error(
                          "Something went wrong! Please try again later."
                        );
                  }
                }
              } catch (e) {
                h.Am.error("Something went wrong! Please try again later."),
                  console.error("error from add credit", e);
              } finally {
                W(!1);
              }
            },
            eg = async () => {
              F(y.M.arbitrum);
            };
          (0, r.useEffect)(() => {
            let e = async () => {
              q(Number((await (0, p.vr)()).data));
            };
            N && e();
          }, [N]);
          let ey = (0, r.useCallback)(() => {
            e &&
              (async () => {
                let e = await (0, p.vr)();
                e.data && q(Number(e.data));
              })();
          }, [e]);
          (0, v.s)(N && e, ey, 1e4, "node-price"),
            (0, r.useEffect)(
              () => () => {
                ec.current && (h.Am.dismiss(ec.current), (ec.current = ""));
              },
              []
            ),
            (0, r.useEffect)(() => {
              e && N && _ && A && (eh(), el());
            }, [e, N, _, A]);
          let ev = [
            {
              id: o.LM.COPPERX,
              name: "Copperx",
              description: "A 1% extra fee applies to this method.",
              icon: (0, s.jsx)("div", {
                className:
                  "w-10 h-10 border border-white/10 rounded-full flex items-center justify-center",
                children: (0, s.jsx)("img", {
                  src: "/copperx.png",
                  alt: "Copperx",
                  className: "w-6 h-6",
                }),
              }),
              isLive: !0,
            },
            {
              id: o.LM.NODE,
              name: "$DUMP",
              description:
                es && _
                  ? "Loading balance..."
                  : "No extra fees • Available balance: "
                      .concat(_ ? ea : "--", " ")
                      .concat(_ ? "$DUMP" : ""),
              icon: (0, s.jsx)("div", {
                className:
                  "w-10 h-10 border border-white/10 rounded-full flex items-center justify-center",
                children: (0, s.jsx)("img", {
                  src: "/logo.png",
                  alt: "NODE",
                  className: "w-5 h-5",
                }),
              }),
              isLive: !0,
            },
          ];
          return (0, s.jsxs)(n.u_, {
            isOpen: e,
            close: () => t(!1),
            title: "Add Credits",
            showCloseButton: !0,
            children: [
              (0, s.jsx)(P, {
                isConnected: _,
                isOnCorrectNetwork: ee,
                onSwitchNetwork: eg,
              }),
              (0, s.jsxs)("div", {
                className:
                  "w-full flex items-center gap-2 px-2 py-1.5 bg-yellow-500/10 text-yellow-500 rounded-lg text-xs mt-5",
                children: [
                  (0, s.jsx)(m.Z, { className: "text-yellow-500", size: 14 }),
                  (0, s.jsx)("span", {
                    className: "flex-1",
                    children:
                      "Credits are non-withdrawable and can only be used within the platform for services",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "mt-3",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-col gap-2 bg-background-light px-4 py-2 rounded-lg text-sm font-medium",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-primary-disabled",
                            children: "Credit Balance",
                          }),
                          (0, s.jsxs)("p", {
                            className: "font-mono",
                            children: ["$", null == a ? void 0 : a.toFixed(2)],
                          }),
                        ],
                      }),
                      a < o.B$ &&
                        (0, s.jsxs)("div", {
                          className:
                            "w-full flex items-center gap-2 px-2 py-1.5 bg-red-500/10 text-red-500 rounded-lg text-xs mb-1",
                          children: [
                            (0, s.jsx)(m.Z, {
                              className: "text-red-500",
                              size: 14,
                            }),
                            " Low on credits",
                          ],
                        }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "space-y-2 mt-7",
                    children: [
                      (0, s.jsx)("h2", {
                        className: "text-sm",
                        children: "Add Amount",
                      }),
                      (0, s.jsx)(c, {
                        value: U,
                        onChange: M,
                        selectedMethod: B,
                        exchangeRate: K,
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "space-y-2 mt-7",
                    children: [
                      (0, s.jsx)("h2", {
                        className: "text-sm font-semibold text-white",
                        children: "Payment Method",
                      }),
                      ev.map((e) =>
                        (0, s.jsx)(
                          "div",
                          {
                            className:
                              "w-full flex items-center justify-between p-4 bg-background-dark rounded-xl border-2 transition-all \n            "
                                .concat(
                                  e.isLive
                                    ? "cursor-pointer"
                                    : "cursor-not-allowed",
                                  " \n            "
                                )
                                .concat(
                                  B === e.id ? "border-accent" : "border-border"
                                ),
                            onClick: () => {
                              e.isLive && H(e.id);
                            },
                            children: (0, s.jsxs)("div", {
                              className: "flex items-center space-x-4",
                              children: [
                                e.icon,
                                (0, s.jsxs)("div", {
                                  className: "text-left",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className: "font-semibold ".concat(
                                        B === e.id
                                          ? "text-white"
                                          : "text-primary-disabled"
                                      ),
                                      children: e.name,
                                    }),
                                    (0, s.jsx)("p", {
                                      className: "text-xs ".concat(
                                        B === e.id
                                          ? "text-white"
                                          : "text-primary-disabled"
                                      ),
                                      children: e.description,
                                    }),
                                    e.id === o.LM.NODE &&
                                      (0, s.jsxs)(s.Fragment, {
                                        children: [
                                          _
                                            ? (0, s.jsxs)("div", {
                                                className:
                                                  "mt-2 flex items-center gap-2",
                                                children: [
                                                  (0, s.jsx)(n.zx, {
                                                    className: "bg-greyShade",
                                                    variant: "outline",
                                                    size: "small",
                                                    children: (0, I.FP)(A),
                                                  }),
                                                  (0, s.jsx)(n.zx, {
                                                    variant: "outline",
                                                    size: "small",
                                                    onClick: () => R(),
                                                    className: "bg-greyShade",
                                                    children: "Disconnect",
                                                  }),
                                                ],
                                              })
                                            : (0, s.jsx)(n.zx, {
                                                variant: "outline",
                                                size: "small",
                                                onClick: () => j(),
                                                className:
                                                  "bg-greyShade w-full mt-2 ",
                                                children: "Connect Wallet",
                                              }),
                                          (0, s.jsxs)("div", {
                                            className:
                                              "w-full flex items-center gap-2 px-2 py-1.5 bg-green-500/10 text-green-500 rounded-lg text-xs mt-3",
                                            children: [
                                              (0, s.jsx)(m.Z, {
                                                className: "text-green-500",
                                                size: 14,
                                              }),
                                              (0, s.jsx)("span", {
                                                className: "flex-1",
                                                children:
                                                  "Convert $DUMP to credits (USD) and enjoy a 10% bonus",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          e.id
                        )
                      ),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "mt-7",
                    children:
                      B === o.LM.NODE
                        ? (0, s.jsx)(n.zx, {
                            className: "w-full mt-6 gap-1",
                            onClick: ef,
                            showloading: ei,
                            disabled:
                              0 === U ||
                              !U ||
                              ei ||
                              (B === o.LM.NODE && U < o.IZ) ||
                              !ee,
                            children:
                              N && A
                                ? $
                                  ? "Checking Allowance..."
                                  : k(U.toString(), er)
                                  ? J
                                    ? "Approving..."
                                    : "Approve NODE"
                                  : ei
                                  ? "Converting..."
                                  : "Continue"
                                : "Connect Wallet",
                          })
                        : (0, s.jsx)(n.zx, {
                            className: "w-full mt-6 gap-1",
                            showloading: z,
                            disabled:
                              0 === U ||
                              !U ||
                              z ||
                              (B === o.LM.NODE && U < o.IZ) ||
                              (B === o.LM.COPPERX && U < 5),
                            onClick: ef,
                            children: "Checkout",
                          }),
                  }),
                ],
              }),
            ],
          });
        },
        F = a(34172),
        R = (e) => {
          let { onSignIn: t, loading: a, oauthError: l, disabled: r } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(n.zx, {
                lefticon: (0, s.jsx)(F.Z, { size: 20 }),
                onClick: t,
                className: "w-full h-11",
                variant: "outline",
                disabled: a || r,
                showloading: a,
                children: "Continue with Google",
              }),
              l &&
                (0, s.jsx)("div", {
                  className: "text-left text-red-500",
                  children: "Failed to sign in with Google. Please try again.",
                }),
            ],
          });
        },
        U = a(15882),
        M = a(87148),
        B = (e) => {
          let { onSubmit: t, loading: a, whitelistError: l } = e,
            [i, d] = (0, r.useState)("");
          return (0, s.jsxs)("form", {
            onSubmit: (e) => {
              e.preventDefault(),
                t(i),
                (0, M.B)({
                  action: o.At.LOGIN_WITH_EMAIL,
                  category: o.Vx.ENGAGEMENT,
                  label: o._R.LOGIN,
                });
            },
            className: "mt-6",
            children: [
              (0, s.jsx)(n.II, {
                type: "email",
                value: i,
                onChange: (e) => d(e.target.value),
                placeholder: "Enter your email",
                required: !0,
                icon: (0, s.jsx)(U.Z, { size: 20 }),
              }),
              l &&
                (0, s.jsx)("p", {
                  className: "text-red-500 text-sm mt-2",
                  children:
                    "Your email is not whitelisted. Please contact support.",
                }),
              (0, s.jsx)(n.zx, {
                className: "w-full mt-4",
                type: "submit",
                variant: "primary",
                disabled: a,
                showloading: a,
                children: "Sign in with Email",
              }),
            ],
          });
        },
        H = (e) => {
          let { value: t, onChange: a, onComplete: n } = e,
            l = (0, r.useRef)([]),
            o = (0, r.useRef)(!1);
          (0, r.useEffect)(() => {
            6 !== t.length || o.current
              ? t.length < 6 && (o.current = !1)
              : ((o.current = !0), n());
          }, [t, n]);
          let i = (e, s) => {
              if ((s.length > 1 && (s = s[s.length - 1]), /^\d*$/.test(s))) {
                let r = t.split("");
                if (((r[e] = s), a(r.join("")), "" !== s && e < 5)) {
                  var n;
                  null === (n = l.current[e + 1]) || void 0 === n || n.focus();
                }
              }
            },
            d = (e, s) => {
              var n, r, o;
              if ("Backspace" === s.key) {
                s.preventDefault();
                let r = t.split("");
                (r[e] = ""),
                  a(r.join("")),
                  e > 0 &&
                    (null === (n = l.current[e - 1]) ||
                      void 0 === n ||
                      n.focus());
              } else
                "ArrowLeft" === s.key && e > 0
                  ? null === (r = l.current[e - 1]) || void 0 === r || r.focus()
                  : "ArrowRight" === s.key &&
                    e < 5 &&
                    (null === (o = l.current[e + 1]) ||
                      void 0 === o ||
                      o.focus());
            },
            c = (e) => {
              e.preventDefault();
              let t = e.clipboardData.getData("text/plain").trim();
              if (6 === t.length && /^\d+$/.test(t)) {
                var s;
                a(t), null === (s = l.current[5]) || void 0 === s || s.focus();
              }
            };
          return (0, s.jsx)("div", {
            className: "flex justify-between space-x-2",
            children: [0, 1, 2, 3, 4, 5].map((e) =>
              (0, s.jsx)(
                "input",
                {
                  ref: (t) => (l.current[e] = t),
                  type: "text",
                  inputMode: "numeric",
                  pattern: "\\d*",
                  maxLength: 1,
                  value: t[e] || "",
                  onChange: (t) => i(e, t.target.value),
                  onKeyDown: (t) => d(e, t),
                  onPaste: c,
                  className:
                    "md:w-14 w-10 md:h-12 h-10 text-center text-xl border border-primary/10 rounded-lg focus:outline-none focus-within:border-primary duration-300 transition bg-transparent",
                },
                e
              )
            ),
          });
        },
        z = a(40521),
        W = (e) => {
          let {
              email: t,
              onVerify: a,
              onResendOTP: l,
              loading: o,
              maxRetry: i,
              otpError: d,
            } = e,
            [c, u] = (0, r.useState)(""),
            [m, p] = (0, r.useState)(30),
            [h, x] = (0, r.useState)(!1);
          (0, r.useEffect)(() => {
            let e;
            return (
              m > 0
                ? (e = setInterval(() => {
                    p((t) => (t <= 1 ? (clearInterval(e), x(!0), 0) : t - 1));
                  }, 1e3))
                : x(!0),
              () => clearInterval(e)
            );
          }, [m]);
          let f = async () => {
            a(c);
          };
          return (0, s.jsxs)(z.E.form, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            onSubmit: (e) => {
              e.preventDefault(), a(c);
            },
            className: "space-y-4",
            children: [
              (0, s.jsxs)("p", {
                className: "my-4",
                children: [
                  "Enter the 6-digit OTP sent to",
                  " ",
                  (0, s.jsx)("span", {
                    className: "font-semibold",
                    children: t,
                  }),
                ],
              }),
              (0, s.jsx)(H, { value: c, onChange: u, onComplete: f }),
              (0, s.jsx)(n.zx, {
                className: "w-full mt-4",
                type: "submit",
                disabled: 6 !== c.length || o || i,
                showloading: o,
                children: "Verify OTP",
              }),
              i
                ? (0, s.jsx)("div", {
                    className: "text-left text-red-500",
                    children:
                      "Max retry limit reached! Please try again later.",
                  })
                : (0, s.jsxs)("div", {
                    className: "text-center",
                    children: [
                      d &&
                        (0, s.jsx)("div", {
                          className: "text-left text-red-500 mb-2",
                          children: "Invalid OTP. Please try again.",
                        }),
                      h
                        ? (0, s.jsxs)("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [
                              (0, s.jsx)("p", {
                                className: "text-sm",
                                children: "Didn't receive OTP?",
                              }),
                              (0, s.jsx)("button", {
                                onClick: () => {
                                  l(), p((e) => e + 45), x(!1);
                                },
                                className: "font-semibold underline",
                                children: "Resend OTP",
                              }),
                            ],
                          })
                        : (0, s.jsxs)("p", {
                            className: "text-sm",
                            children: ["Resend OTP in ", m, " seconds"],
                          }),
                    ],
                  }),
            ],
          });
        },
        G = a(48614),
        Z = a(71936),
        K = a(18229),
        q = a(82495),
        V = a(17819),
        Y = a(27648),
        J = a(30166),
        Q = (e) => {
          let { onActionComplete: t } = e,
            { registerPrimaryWallet: a, userProfile: i } = (0, l.q)(),
            {
              address: d,
              connectWallet: c,
              isConnected: m,
              disconnectWallet: p,
            } = (0, u.r)(),
            [x, f] = (0, r.useState)(!1),
            g = async () => {
              if (!(null == i ? void 0 : i.email) || !d) {
                h.Am.error("Email or wallet address not found");
                return;
              }
              f(!0);
              let e = await a(null == i ? void 0 : i.email, d);
              f(!1),
                e
                  ? (h.Am.success("Wallet registered successfully"),
                    (0, M.B)({
                      action: o.At.REGISTER_PRIMARY_WALLET_ON_LOGIN,
                      category: o.Vx.ENGAGEMENT,
                      label: o._R.LOGIN,
                    }),
                    t())
                  : h.Am.error("Failed to register wallet");
            };
          return (0, s.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, s.jsx)("p", {
                children:
                  "Please Note that this is a One-Time Action and would not allow you to change / modify the wallet once registered",
              }),
              (0, s.jsxs)("div", {
                className: "flex flex-col gap-4 mt-6",
                children: [
                  m
                    ? (0, s.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, s.jsx)(n.zx, {
                            variant: "outline",
                            size: "small",
                            className: "flex-1",
                            children: (0, I.FP)(d),
                          }),
                          (0, s.jsx)(n.zx, {
                            variant: "outline",
                            size: "small",
                            onClick: p,
                            children: "Disconnect",
                          }),
                        ],
                      })
                    : (0, s.jsx)(n.zx, {
                        onClick: c,
                        variant: "outline",
                        children: "Connect Wallet",
                      }),
                  (0, s.jsx)(n.zx, {
                    disabled: !d || x,
                    showloading: x,
                    onClick: g,
                    children: "Register Wallet",
                  }),
                ],
              }),
            ],
          });
        },
        $ = a(97323);
      let X = (0, J.default)(
        () => Promise.all([a.e(3145), a.e(8406)]).then(a.bind(a, 88406)),
        {
          loadableGenerated: { webpack: () => [88406] },
          ssr: !1,
          loading: () =>
            (0, s.jsx)("div", {
              className: "h-full flex items-center justify-center",
              children: (0, s.jsx)("div", {
                className: "animate-pulse bg-primary/5 rounded-xl p-8",
                children: "Loading...",
              }),
            }),
        }
      );
      var ee = () => {
          let [e, t] = (0, r.useState)(null),
            [a, i] = (0, r.useState)(""),
            [d, c] = (0, r.useState)(!1),
            [m, p] = (0, r.useState)(!1),
            [x, f] = (0, r.useState)(!1),
            [g, y] = (0, r.useState)(!1),
            [v, w] = (0, r.useState)(!1),
            [N, b] = (0, r.useState)(""),
            {
              handleOtpVerification: j,
              handleGoogle: _,
              loginModalOpen: A,
              setLoginModalOpen: C,
              setShowNodePoints: E,
              showNodePoints: T,
              user: O,
            } = (0, l.q)(),
            [k, D] = (0, r.useState)(!1),
            { connectWallet: S } = (0, u.r)(),
            { trackAffiliateEvent: I } = (0, $.z)(),
            P = () => {
              C(!1);
            },
            L = (0, K.Nq)({
              onSuccess: (e) => {
                U(e.access_token),
                  "coinlist" === N.toLocaleLowerCase() &&
                    I(o.HS.LOGIN_WITH_GOOGLE, o.hI.COINLIST),
                  (0, M.B)({
                    action: o.At.LOGIN_WITH_GOOGLE,
                    category: o.Vx.ENGAGEMENT,
                    label: o._R.LOGIN,
                  });
              },
              onError: (e) => {
                console.log("Login Error:", e);
              },
            }),
            F = (e) => {
              e ? E(!0) : (t(null), P());
            },
            U = async (e) => {
              f(!0);
              let a = await _(e);
              a.success
                ? a.isWalletRegistered
                  ? F(a.isNewUser)
                  : t(o.mt.WALLET_REGISTERED)
                : w(!0),
                f(!1);
            },
            H = async (e) => {
              i(e);
              try {
                c(!0),
                  await (0, Z.$z)({ email: e }),
                  t(o.mt.EMAIL),
                  h.Am.success("OTP sent successfully! Check your email.");
              } catch (e) {
                console.log("Failed to send OTP:", e),
                  h.Am.error("Failed to send OTP");
              } finally {
                c(!1);
              }
            },
            J = async (e) => {
              p(!1), c(!0), y(!1), D(!1);
              let s = await j(e, a, p, D);
              s.success
                ? (s.isWalletRegistered
                    ? F(s.isNewUser)
                    : t(o.mt.WALLET_REGISTERED),
                  "coinlist" === N.toLocaleLowerCase() &&
                    I(o.HS.LOGIN_WITH_EMAIL, o.hI.COINLIST),
                  (0, M.B)({
                    action: o.At.OTP_VERIFIED,
                    category: o.Vx.ENGAGEMENT,
                    label: o._R.LOGIN,
                  }))
                : y(!0),
                c(!1);
            },
            ee = async () => {
              try {
                c(!0),
                  await (0, Z.$z)({ email: a }),
                  h.Am.success("OTP resent successfully! Check your email."),
                  (0, M.B)({
                    action: o.At.RESEND_OTP,
                    category: o.Vx.ENGAGEMENT,
                    label: o._R.LOGIN,
                  });
              } catch (e) {
                console.error("Failed to resend OTP:", e);
              } finally {
                c(!1);
              }
            },
            { icon: et, text: ea } =
              e === o.mt.EMAIL
                ? {
                    icon: (0, s.jsx)(q.Z, { className: "w-8 h-8" }),
                    text: "Enter OTP",
                  }
                : e === o.mt.WALLET_REGISTERED
                ? {
                    icon: (0, s.jsx)(V.Z, { className: "w-8 h-8" }),
                    text: "Register Wallet",
                  }
                : {
                    icon: (0, s.jsx)("img", {
                      src: "/logo.png",
                      alt: "logo",
                      width: 30,
                      height: 30,
                    }),
                    text: "Login",
                  };
          return (
            (0, r.useEffect)(() => {
              {
                let e = new URLSearchParams(window.location.search).get(
                  "promocode"
                );
                e && b(e);
              }
            }, []),
            (0, s.jsx)(n.u_, {
              disableClickOutside: !0,
              isOpen: A,
              close: () => {
                t(null), i(""), p(!1), y(!1), w(!1), E(!1), P();
              },
              showCloseButton: !T && e !== o.mt.WALLET_REGISTERED,
              children: (0, s.jsx)("div", {
                className: "flex flex-col md:h-[450px] h-[500px]",
                children: (0, s.jsx)(G.M, {
                  mode: "wait",
                  children: T
                    ? (0, s.jsx)(
                        z.E.div,
                        {
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          className: "h-full",
                          children: (0, s.jsx)(X, {
                            onClose: () => {
                              E(!1), t(null), P();
                            },
                          }),
                        },
                        "node-points"
                      )
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(G.M, {
                            mode: "wait",
                            children: (0, s.jsxs)(
                              z.E.div,
                              {
                                initial: { opacity: 0, y: -20 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: 20 },
                                transition: { duration: 0.3 },
                                className:
                                  "flex flex-col items-center gap-2 mb-2",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "flex items-center justify-center border border-primary/30 rounded-full w-24 h-24",
                                    children: (0, s.jsx)(z.E.div, {
                                      className:
                                        "flex items-center justify-center border border-primary/70 rounded-full w-16 h-16",
                                      initial: { scale: 0.8, rotate: -180 },
                                      animate: { scale: 1, rotate: 0 },
                                      transition: {
                                        duration: 0.5,
                                        type: "spring",
                                      },
                                      children: et,
                                    }),
                                  }),
                                  (0, s.jsx)(z.E.h2, {
                                    className: "text-2xl font-semibold",
                                    initial: { opacity: 0, y: 10 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: { duration: 0.3, delay: 0.2 },
                                    children: ea,
                                  }),
                                ],
                              },
                              e || "initial"
                            ),
                          }),
                          (0, s.jsx)("div", {
                            className: "flex-grow overflow-hidden",
                            children: (0, s.jsxs)(G.M, {
                              mode: "wait",
                              children: [
                                !e &&
                                  (0, s.jsxs)(
                                    z.E.div,
                                    {
                                      initial: { opacity: 0, y: 20 },
                                      animate: { opacity: 1, y: 0 },
                                      exit: { opacity: 0, y: -20 },
                                      transition: { duration: 0.3 },
                                      className:
                                        "flex flex-col justify-center space-y-4`",
                                      children: [
                                        (0, s.jsx)(B, {
                                          onSubmit: H,
                                          loading: d,
                                          whitelistError: k,
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "relative text-center my-4",
                                          children: [
                                            (0, s.jsx)("div", {
                                              className:
                                                "absolute inset-0 flex items-center",
                                              children: (0, s.jsx)("div", {
                                                className:
                                                  "w-full border-t border-border",
                                              }),
                                            }),
                                            (0, s.jsx)("span", {
                                              className:
                                                "relative px-3 text-sm text-primary-disabled bg-greyShade",
                                              children: "or continue with",
                                            }),
                                          ],
                                        }),
                                        (0, s.jsx)(R, {
                                          onSignIn: L,
                                          loading: x,
                                          oauthError: v,
                                          disabled: d,
                                        }),
                                        (0, s.jsx)("div", {
                                          className: "mt-2",
                                          children: (0, s.jsx)(n.zx, {
                                            lefticon: (0, s.jsx)(V.Z, {
                                              size: 20,
                                            }),
                                            onClick: S,
                                            className: "w-full h-11",
                                            variant: "outline",
                                            disabled: d,
                                            children: "Continue with Wallet",
                                          }),
                                        }),
                                        (0, s.jsxs)("p", {
                                          className:
                                            "text-xs text-center text-primary-disabled mt-2 mb-2 px-4",
                                          children: [
                                            "By continuing, you agree to our",
                                            " ",
                                            (0, s.jsx)(Y.default, {
                                              href: "/terms",
                                              className:
                                                "text-primary hover:underline",
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              children: "Terms of Service",
                                            }),
                                            " ",
                                            "and",
                                            " ",
                                            (0, s.jsx)(Y.default, {
                                              href: "/privacy",
                                              className:
                                                "text-primary hover:underline",
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              children: "Privacy Policy",
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    "initial"
                                  ),
                                e === o.mt.EMAIL &&
                                  (0, s.jsx)(
                                    z.E.div,
                                    {
                                      initial: { opacity: 0, y: 20 },
                                      animate: { opacity: 1, y: 0 },
                                      exit: { opacity: 0, y: -20 },
                                      transition: { duration: 0.3 },
                                      className:
                                        "h-full flex flex-col justify-center",
                                      children: (0, s.jsx)(W, {
                                        email: a,
                                        onVerify: J,
                                        onResendOTP: ee,
                                        loading: d,
                                        maxRetry: m,
                                        otpError: g,
                                      }),
                                    },
                                    "otp"
                                  ),
                                e === o.mt.WALLET_REGISTERED &&
                                  (0, s.jsx)(
                                    z.E.div,
                                    {
                                      initial: { opacity: 0, y: 20 },
                                      animate: { opacity: 1, y: 0 },
                                      exit: { opacity: 0, y: -20 },
                                      transition: { duration: 0.3 },
                                      className:
                                        "h-full flex flex-col justify-center",
                                      children: (0, s.jsx)(Q, {
                                        onActionComplete: () => {
                                          (null == O ? void 0 : O.isNewUser)
                                            ? ("coinlist" ===
                                                N.toLocaleLowerCase() &&
                                                I(
                                                  o.HS.REGISTER_WALLET,
                                                  o.hI.COINLIST
                                                ),
                                              F(!0))
                                            : (t(null), P());
                                        },
                                      }),
                                    },
                                    "wallet_registered"
                                  ),
                              ],
                            }),
                          }),
                        ],
                      }),
                }),
              }),
            })
          );
        },
        et = a(31328),
        ea = a(99376);
      let es = (0, J.default)(
        () => Promise.all([a.e(4705), a.e(7882)]).then(a.t.bind(a, 7882, 23)),
        { loadableGenerated: { webpack: () => [7882] }, ssr: !1 }
      );
      var en = function () {
          let { paymentSuccessModalOpen: e, setPaymentSuccessModalOpen: t } =
              (0, l.q)(),
            [a, o] = (0, r.useState)(3),
            i = (0, ea.useRouter)();
          return (
            (0, r.useEffect)(() => {
              if (e && a > 1) {
                let e = setTimeout(() => {
                  o((e) => e - 1);
                }, 1e3);
                return () => clearTimeout(e);
              }
              1 === a &&
                setTimeout(() => {
                  t(!1);
                }, 500);
            }, [a, e, t, i]),
            (0, s.jsx)(n.u_, {
              isOpen: e,
              close: () => t(!1),
              title: "Payment Successful",
              showCloseButton: !0,
              children: (0, s.jsxs)("div", {
                className: "mt-5 flex flex-col items-center justify-center",
                children: [
                  (0, s.jsx)("div", {
                    className: "w-36",
                    children: (0, s.jsx)(es, { animationData: et }),
                  }),
                  (0, s.jsx)("p", {
                    className: "text-2xl font-semibold",
                    children: "Payment Complete",
                  }),
                  (0, s.jsxs)("p", {
                    className: "text-primary-disabled text-center mt-2",
                    children: [
                      "Your payment was successful!",
                      (0, s.jsx)("br", {}),
                      ((e) => {
                        let t = "";
                        for (let a = 3; a >= e; a--)
                          t += a + (a > e ? ".." : "");
                        return "Taking you to the deployment screen in ".concat(
                          t
                        );
                      })(a),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        el = a(43033),
        er = a(28594),
        eo = a(68603),
        ei = () => {
          var e, t;
          let {
              purchaseModalOpen: a,
              setPurchaseModalOpen: i,
              payloadInfo: d,
              getMyCredits: c,
              setAddCreditModalOpen: u,
              setIsBootstrapPurchaseText: m,
              setComingFromSale: p,
              getNotifications: x,
              isBootstrapPurchaseText: f,
              comingFromSale: g,
              isBeamable: y,
              setIsBeamable: v,
            } = (0, l.q)(),
            [w, N] = (0, r.useState)(""),
            [b, j] = (0, r.useState)([]),
            [_, A] = (0, r.useState)(),
            [C, E] = (0, r.useState)(!1),
            [T, O] = (0, r.useState)(null),
            [k, D] = (0, r.useState)(!1),
            [S, P] = (0, r.useState)(!1),
            [L, F] = (0, r.useState)(1),
            [R, U] = (0, r.useState)(!0),
            [B, H] = (0, r.useState)(""),
            { trackAffiliatePage: W, trackAffiliateEvent: Z } = (0, $.z)();
          (0, r.useEffect)(() => {
            {
              let e = new URLSearchParams(window.location.search).get(
                "promocode"
              );
              e &&
                (N(e),
                "coinlist" === e.toLocaleLowerCase() &&
                  W(o.Xq.DEPLOY_NODE, o.hI.COINLIST));
            }
          }, []);
          let K = async () => {
              try {
                E(!0);
                let e = {
                    promocode_id: (null == w ? void 0 : w.toUpperCase()) || "",
                    selective_promocode_list: b,
                    ...d,
                  },
                  t = await (0, er._E)(e);
                O(t.data);
              } catch (e) {
                console.log(e);
              } finally {
                E(!1);
              }
            },
            q = async () => {
              if (!w.length) {
                h.Am.error("Please enter a promo code");
                return;
              }
              await K();
            };
          (0, r.useEffect)(() => {
            d && a && K();
          }, [d, a]);
          let V = async () => {
              try {
                if ((D(!0), y && B && !(0, I.Js)(B))) {
                  h.Am.error("Invalid Solana wallet address");
                  return;
                }
                if (y && !B) {
                  h.Am.error("Please enter a Solana wallet address");
                  return;
                }
                let e = {
                    ...d,
                    promocode_id: (null == w ? void 0 : w.toUpperCase()) || "",
                    selective_promocode_list: b,
                    use_credits: !0,
                    order_items: d.order_items.map((e) => {
                      var t;
                      return {
                        ...e,
                        metadata: {
                          ...e.metadata,
                          allow_auto_renewal: R,
                          ...(y && {
                            license_metadata: {
                              ...(null === (t = e.metadata) || void 0 === t
                                ? void 0
                                : t.license_metadata),
                              solana_wallet_address: B,
                            },
                          }),
                        },
                      };
                    }),
                  },
                  t = await (0, er.aL)(e);
                "success" === t.message &&
                  (t.data.includes("buy.copperx.tech") ||
                  t.data.includes("buy.copperx.dev") ||
                  t.data.includes("pay.chargeweb3.com")
                    ? ("coinlist" === w.toLocaleLowerCase() &&
                        Z(o.HS.PURCHASE_WITH_COPPERX, o.hI.COINLIST),
                      (0, M.B)({
                        action: f
                          ? o.At.BOOTSTRAP_EVENT_PURCHASE_WITHOUT_DEPLOY
                          : g
                          ? o.At.LAUNCHPAD_PURCHASE
                          : o.At.DEPLOY_NODE_CHECKOUT_COPPERX,
                        category: f
                          ? o.Vx.BOOTSTRAP_EVENT
                          : g
                          ? o.Vx.LAUNCHPAD
                          : o.Vx.DEPLOY_NODE,
                        label: f
                          ? o._R.BOOTSTRAP_EVENT
                          : g
                          ? o._R.LAUNCHPAD
                          : o._R.DEPLOY_NODE,
                      }),
                      (window.location.href = t.data))
                    : ("coinlist" === w.toLocaleLowerCase() &&
                        Z(o.HS.PURCHASE_WITH_NODE, o.hI.COINLIST),
                      P(!0),
                      c(),
                      x({ platform: "CONSOLE", limit: 10, offset: 0 }),
                      (0, M.B)({
                        action: f
                          ? o.At.BOOTSTRAP_EVENT_PURCHASE_WITHOUT_DEPLOY
                          : g
                          ? o.At.LAUNCHPAD_PURCHASE
                          : o.At.DEPLOY_NODE_CHECKOUT_CREDIT,
                        category: f
                          ? o.Vx.BOOTSTRAP_EVENT
                          : g
                          ? o.Vx.LAUNCHPAD
                          : o.Vx.DEPLOY_NODE,
                        label: f
                          ? o._R.BOOTSTRAP_EVENT
                          : g
                          ? o._R.LAUNCHPAD
                          : o._R.DEPLOY_NODE,
                      })));
              } catch (e) {
                console.log("error in purchase modal", e);
              } finally {
                D(!1);
              }
            },
            Y = () => {
              i(!1), N(""), A(void 0), P(!1), m(!1), p(!1), v(!1), H(""), F(1);
            };
          return (0, s.jsx)(n.u_, {
            isOpen: a,
            close: () => {
              Y();
            },
            title: "Subscribe",
            showCloseButton: !0,
            modalClassName: "max-w-xl",
            children: (0, s.jsx)(G.M, {
              mode: "wait",
              children: S
                ? (0, s.jsx)(
                    z.E.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -20 },
                      transition: {
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      },
                      children: (0, s.jsx)(eo.Z, { clearState: Y }),
                    },
                    "success"
                  )
                : (0, s.jsx)(
                    z.E.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -20 },
                      transition: {
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      },
                      children: (0, s.jsx)(el.Z, {
                        onAddFunds: () => {
                          u(!0);
                        },
                        promoCode: w,
                        setPromoCode: N,
                        handleApplyPromo: q,
                        appliedDiscount:
                          (null == T ? void 0 : T.total_discount) || 0,
                        selectedOffer: _,
                        handleSelectOffer: (e) => {
                          _ === e ? A(void 0) : A(e);
                        },
                        nodePrice:
                          Number(
                            null == T
                              ? void 0
                              : null === (e = T.total_price) || void 0 === e
                              ? void 0
                              : e.toFixed(2)
                          ) || 0,
                        isPromoLoading: C,
                        totalPayableAmount:
                          Number(
                            null == T
                              ? void 0
                              : null === (t = T.total_payable) || void 0 === t
                              ? void 0
                              : t.toFixed(2)
                          ) || 0,
                        handleCompletePurchase: V,
                        isLoading: k,
                        purchaseNodeCount: L,
                        setPurchaseNodeCount: F,
                        allowAutoRenew: !0,
                        isAutoRenew: R,
                        setIsAutoRenew: U,
                        solanaAddress: B,
                        setSolanaAddress: H,
                      }),
                    },
                    "purchase"
                  ),
            }),
          });
        },
        ed = (e) => {
          let { isOpen: t, onClose: a, choices: l } = e,
            [i, d] = (0, r.useState)(""),
            { submitVote: c } = (0, T.q)(),
            [u, m] = (0, r.useState)(!1),
            p = async () => {
              if (!i) return h.Am.error("Please select an option");
              m(!0);
              let e = await c({ poll_id: l[0].poll_id, choice_id: i });
              m(!1),
                e &&
                  ((0, M.B)({
                    action: o.At.GOVERNANCE_VOTE,
                    category: o.Vx.GOVERNANCE,
                    label: o._R.GOVERNANCE,
                  }),
                  a());
            };
          return (0, s.jsx)(n.u_, {
            isOpen: t,
            close: a,
            title: "Cast Your Vote",
            showCloseButton: !0,
            children: (0, s.jsxs)("div", {
              className: "flex flex-col mt-5",
              children: [
                (0, s.jsx)("p", {
                  className: "text-sm font-medium ",
                  children: "Vote Responsibly",
                }),
                (0, s.jsx)("p", {
                  className: "mt-1 text-sm text-primary-disabled max-w-xs",
                  children:
                    "Your decisions will have a direct impact on the future of the project",
                }),
                (0, s.jsx)("div", {
                  className: "flex flex-col gap-2 mt-5",
                  children:
                    null == l
                      ? void 0
                      : l.map((e) =>
                          (0, s.jsxs)(
                            "button",
                            {
                              onClick: () => d(e.id),
                              className:
                                "flex items-center justify-between gap-2 bg-background-dark rounded-xl h-11 px-4 w-full",
                              children: [
                                (0, s.jsx)("span", {
                                  className: "whitespace-nowrap capitalize",
                                  children: e.details.title,
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "flex items-center justify-center w-4 h-4 border rounded-full ".concat(
                                      i === e.id
                                        ? "bg-accent border-accent"
                                        : "border-primary/20"
                                    ),
                                  children:
                                    i === e.id &&
                                    (0, s.jsx)("div", {
                                      className:
                                        "w-2 h-2 bg-background-dark rounded-full",
                                    }),
                                }),
                              ],
                            },
                            e.id
                          )
                        ),
                }),
                (0, s.jsx)(n.zx, {
                  disabled: !i || u,
                  onClick: p,
                  className: "mt-5 w-full",
                  showloading: u,
                  children: "Vote",
                }),
              ],
            }),
          });
        };
      a(79735);
      let ec = [
        {
          title: "What are gNODE?",
          content:
            "gNODE are earned by deploying and maintaining nodes on our platform. They determine your tier level and associated benefits. The more nodes you deploy and maintain, the more gNODE you earn.",
        },
        {
          title: "How do tiers work?",
          content:
            "Our tier system has 4 levels: Bronze, Silver, Gold, and Platinum. Each tier offers increasing multiplier benefits:\n\n• Bronze (0-1000 gNODE): 1.0x multiplier\n• Silver (1000-5000 gNODE): 1.2x multiplier\n• Gold (5000-9000 gNODE): 1.5x multiplier\n• Platinum (9000+ gNODE): 2.0x multiplier",
        },
        {
          title: "How can I earn more gNODE?",
          content:
            "You can earn more gNODE by:\n\n• Deploying new nodes\n• Maintaining existing nodes\n• Participating in community activities\n• Referring new users to the platform",
        },
        {
          title: "What are multipliers used for?",
          content:
            "Multipliers increase your rewards and benefits on the platform. A higher multiplier means you'll earn more rewards for the same activities. For example, with a 1.5x multiplier (Gold tier), you'll earn 50% more rewards compared to the base rate.",
        },
        {
          title: "How often are gNODE calculated?",
          content:
            "gNODE are calculated and updated in real-time based on your node deployments and activities. Your tier status and multiplier benefits are automatically adjusted as your gNODE balance changes.",
        },
        {
          title: "Can I lose gNODE?",
          content:
            "Yes, gNODE can decrease if:\n\n• Nodes become inactive\n• Nodes are decommissioned\n• Violation of platform policies\n\nMaintaining active and healthy nodes is key to maintaining your tier status.",
        },
      ];
      var eu = () => {
          let { faqModalOpen: e, setFaqModalOpen: t } = (0, l.q)();
          return (0, s.jsx)(n.u_, {
            isOpen: e,
            close: () => t(!1),
            title: "Frequently Asked Questions",
            modalClassName: "max-w-2xl",
            showCloseButton: !0,
            children: (0, s.jsx)("div", {
              className: "p-4",
              children: (0, s.jsx)(n.UQ, { items: ec }),
            }),
          });
        },
        em = a(20878),
        ep = a(82088),
        eh = a(18091);
      let ex = {
        huddle: {
          title: "Delegate To This Operator Wallet Address on Huddle Dashboard",
          isAddress: !0,
          isDelegationUrl: !0,
          delegationUrl: "https://www.huddle01.network/pools",
          showCopyButton: !0,
          delegationUrlText: "Delegate Here",
        },
        iagent: {
          title: "Delegate on iAgent Dashboard",
          subTitle:
            " Please Ensure to Delegate to the following PC ID on the Dashboard",
          isDelegationUrl: !0,
          isUuid: !0,
          isDelegationUrlFromBackend: !0,
          delegationUrlText: "Delegate Now",
          noteText:
            "NFTs are dropped on Ethereum Network, Due to Network Congestion, It might take 10-15 mins for the NFTs to be reflected on the dashboard.",
        },
        xprotocol: {
          title: "Delegate To This Wallet Address",
          isAddress: !0,
          isWalletConnectRequired: !0,
          buttonText: "Click to Delegate",
          showCopyButton: !0,
          contractInfo: {
            abi: [
              {
                constant: !1,
                inputs: [
                  { name: "operator", type: "address" },
                  { name: "approved", type: "bool" },
                ],
                name: "setApprovalForOperator",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function",
              },
            ],
            contractAddress: "0x977667ac285b71da0CC4dc32f590d272d44fD6ef",
            functionName: "setApprovalForOperator",
            functionParams: ["operatorWallet", !0],
            chainId: y.M.base,
            explorerUrl: "https://basescan.org/tx",
            showHash: !0,
            showError: !0,
          },
        },
        playai: {
          title: "Delegate To This Operator Wallet Address",
          isAddress: !0,
          buttonText: "Click to Delegate",
          showCopyButton: !0,
          contractInfo: {
            abi: [
              {
                constant: !1,
                inputs: [
                  { name: "tokenIDs", type: "uint256[]" },
                  { name: "bindingAddresses", type: "address[]" },
                ],
                name: "bulkDelegateKeys",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function",
              },
            ],
            contractAddress: "0x72c60De74aAf00Ab2aF2ba42eE621B88a7A33baC",
            functionName: "bulkDelegateKeys",
            functionParams: ["tokenArray", "operatorArray"],
            chainId: y.M.base,
            explorerUrl: "https://basescan.org/tx",
            showHash: !0,
          },
          isWalletConnectRequired: !0,
          isDelegationUrl: !0,
          delegationUrl: "https://nodeexplorer.playai.network/",
          delegationUrlText: "Delegate from Explorer",
          isShareOnTwitter: !0,
          shareInfo: {
            message:
              "Just Deployed My PlayAI Oasis Node in seconds via DumpOps Console ⚡⚡\n  \n  #SmoothOperator #OneClickNodes\n      \n  https://console.nodeops.network\n      \n  @DumpOpsETH20\n  @playAInetwork",
            url: "https://nodeexplorer.playai.network/",
          },
        },
        ringfence: {
          title: "Delegate To This Operator Wallet Address",
          isAddress: !0,
          buttonText: "Click to Delegate",
          showCopyButton: !0,
          isWalletConnectRequired: !0,
          isShareOnTwitter: !0,
          shareInfo: {
            message:
              "Just Deployed My Ringfence Checker Node in seconds via DumpOps Console ⚡⚡\n  \n  #SmoothOperator #OneClickNodes\n      \n  https://console.nodeops.network\n      \n  @DumpOpsETH20\n  @RingfenceAI",
          },
          contractInfo: {
            abi: [
              {
                constant: !1,
                inputs: [
                  { name: "_operator", type: "address" },
                  { name: "_licenseId", type: "uint256" },
                ],
                name: "delegateLicense",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function",
              },
            ],
            contractAddress: "0xC58d0DD4231Ac0CB82549Ed70Fe4CceEa25928E3",
            functionName: "delegateLicense",
            functionParams: ["operatorWallet", "licenseId"],
            chainId: y.M.arbitrum,
            explorerUrl: "https://arbiscan.io/tx",
            showHash: !0,
            showError: !0,
          },
          shouldFetchNFTs: !0,
        },
        vemp: {
          title: "Delegate To This Operator Wallet Address",
          isAddress: !0,
          buttonText: "Click to Delegate",
          showCopyButton: !0,
          isWalletConnectRequired: !0,
          isShareOnTwitter: !0,
          shareInfo: {
            message:
              "Just Deployed My Vemp Horizon Node in seconds via DumpOps Console ⚡⚡\n  \n  #SmoothOperator #OneClickNodes\n      \n  https://console.nodeops.network\n      \n  @DumpOpsETH20\n  @VEMPHorizon",
          },
          contractInfo: {
            abi: [
              {
                constant: !1,
                inputs: [
                  { name: "operator", type: "address" },
                  { name: "nodeLicenseIds", type: "uint256[]" },
                ],
                name: "delegateKeys",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function",
              },
            ],
            contractAddress: "0x814e4f21F81db41c36a18ef1282B98c2c2F9736E",
            functionName: "delegateKeys",
            functionParams: ["operatorWallet", "tokenArray"],
            chainId: y.M.arbitrum,
            explorerUrl: "https://arbiscan.io/tx",
            showHash: !0,
            showError: !0,
          },
          isTokenListRequired: !0,
          isDelegationUrl: !0,
          delegationUrl: "https://delegate.vemp.xyz/",
          delegationUrlText: "Delegate from Explorer",
        },
        lumoz: {
          title: "Total available NFTs",
          showSentries: !0,
          isAddress: !0,
          buttonText: "Click to Delegate",
          showCopyButton: !0,
          isWalletConnectRequired: !0,
          contractInfo: {
            abi: [
              {
                constant: !1,
                inputs: [
                  { name: "_delegateOwner", type: "address" },
                  { name: "_licenses", type: "uint256[]" },
                  { name: "_shareConfig", type: "uint32[3]" },
                  { name: "_metadata", type: "string[3]" },
                  { name: "_socials", type: "string[]" },
                  { name: "_trackerDetails", type: "string[2][2]" },
                ],
                name: "createSingleNode",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function",
              },
            ],
            contractAddress: "0x46ff43385ae9BF6E131454D2F1BBe845a876353c",
            functionName: "createSingleNode",
            functionParams: [
              "operatorWallet",
              "tokenArray",
              "rewardsConfig",
              "metadata",
              "socials",
              "trackerDetails",
            ],
            chainId: y.M.lumoz,
            explorerUrl: "https://scan.lumoz.info/tx",
            showHash: !0,
            showError: !0,
          },
        },
        sophon: {
          title: "Delegate To This Operator Wallet Address",
          isAddress: !0,
          showCopyButton: !0,
          isDelegationUrl: !0,
          delegationUrl: "https://guardian.sophon.xyz/",
          delegationUrlText: " Delegate Here",
          noteText:
            " Nodes will show as running without delegation, but rewards won’t be earned. \n Delegate using the provided Operator Address (max 20 NFTs) \n Rewards are claimable only after delegation.",
        },
        xai: {
          showModal: !1,
          title: "Sign Key",
          subTitle:
            "What is this transaction? \n This transaction grants permission from your sentry wallet to assign DumpOps as your Node Operator, Know More about this step here \n Note : \n  1. Kindly ensure to use the same wallet through which you have purchased the key",
          isAddress: !0,
          isDelegationUrl: !0,
          delegationUrlText: "Sign Key Here",
          specialDelegationUrl: (e) =>
            "https://sentry.xai.games/#/assign-wallet/".concat(e),
        },
        xai_premium: {
          showModal: !1,
          title: "Sign Key",
          subTitle:
            "What is this transaction? \n This transaction grants permission from your sentry wallet to assign DumpOps as your Node Operator, Know More about this step here \n Note : \n  1. Kindly ensure to use the same wallet through which you have purchased the key",
          isAddress: !0,
          isDelegationUrl: !0,
          delegationUrlText: "Sign Key Here",
          delegationUrl: "https://sentry.xai.games/#/assign-wallet/",
        },
        aethir: {
          title: "Delegate To This Client Wallet Address on Aethir Dashboard",
          isAddress: !0,
          isDelegationUrl: !0,
          delegationUrl: "https://app.aethir.com/licenses",
          delegationUrlText: "Delegate",
          showCopyButton: !0,
          generateBurnerWallet: !0,
          showDelegationAndPendingLicenses: !0,
        },
        carv_premium: {
          title: "Delegate To This Wallet Address",
          isAddress: !0,
          showCopyButton: !0,
          isWalletConnectRequired: !1,
          isShareOnTwitter: !0,
          shareInfo: {
            message:
              "Just Deployed My Carv Node in seconds via DumpOps Console ⚡⚡\n\n#SmoothOperator #OneClickNodes\n    \nhttps://console.nodeops.network\n    \n@DumpOpsETH20\n@carv_official",
          },
          isDelegationUrl: !0,
          delegationUrl: "https://explorer.carv.io/verifiers",
          delegationUrlText: "Delegate Here",
        },
        selfchain: {
          title: "Sign Transaction to Create Validator",
          isAddress: !0,
          buttonText: "Click to Sign Txs",
          showCopyButton: !0,
        },
        kip: {
          title: "Select License you want to delegate:",
          isAddress: !0,
          buttonText: "Click to Delegate",
          showCopyButton: !0,
          isTokenListRequired: !0,
          isWalletConnectRequired: !0,
          isShareOnTwitter: !0,
          buttonHeading: "Delegate To This Wallet Address",
          isDelegationUrl: !0,
          delegationUrl: "https://nodehub.kip.pro/node-delegation",
          delegationUrlText: "Delegate Here",
          showLicenseList: !0,
          contractInfo: {
            abi: [
              {
                constant: !1,
                inputs: [
                  { name: "tokenIds", type: "uint256[]" },
                  { name: "slots", type: "uint256[]" },
                  { name: "addresses", type: "address[]" },
                ],
                name: "batchSetDelegation",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function",
              },
            ],
            contractAddress: "0xcb729b82d368a6ded4684006f8fc944a628c2e1e",
            functionName: "batchSetDelegation",
            functionParams: ["tokenIds", "slots", "addresses"],
            chainId: y.M.arbitrum,
            explorerUrl: "https://arbiscan.io/tx",
            showHash: !0,
            showError: !0,
          },
          shareInfo: {
            message:
              "Just Deployed My KIP Checker Node in seconds via DumpOps Console ⚡⚡\n\n#SmoothOperator #OneClickNodes\n    \nhttps://console.nodeops.network/deployNode/kip\n    \n@DumpOpsETH20\n@KIPprotocol",
          },
        },
        rivalz: {
          title: "Delegate To This Operator Wallet Address",
          isAddress: !0,
          showCopyButton: !0,
          isDelegationUrl: !0,
          delegationUrl: "https://znode.rivalz.ai",
          delegationUrlText: "Delegate Here",
        },
        hychain: {
          title: "Delegate Keys",
          subTitle:
            "The Following Transaction Redirects you to delegate.xyz to assign Guardian Operator for your nodes",
          isAddress: !0,
          showCopyButton: !0,
          isDelegationUrl: !0,
          delegationUrl: "https://delegate.xyz/?r&chainId="
            .concat(eh._.hytopia.chainId, "&contract=")
            .concat(eh._.hytopia.contractAddress, "&delegate="),
          delegationUrlText: "Delegate to DumpOps Guardian",
        },
        openpad: {
          title: "Delegate To This Operator Wallet Address",
          isAddress: !0,
          showCopyButton: !0,
          isShareOnTwitter: !0,
          isWalletConnectRequired: !0,
          buttonText: "Click to Delegate",
          shareInfo: {
            message:
              "Just Deployed My OpenPad Verifier Node in seconds via DumpOps Console ⚡⚡\n#SmoothOperator #OneClickNodes\n    \nhttps://console.nodeops.network/deployNode/openpad\n    \n@DumpOpsETH20\n@Openpad_IO",
          },
          contractInfo: {
            abi: [
              {
                constant: !1,
                inputs: [],
                name: "delegate",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function",
              },
            ],
            contractAddress: "0x0000000000000000000000000000000000000000",
            functionName: "delegate",
            functionParams: [],
            chainId: y.M.arbitrum,
            explorerUrl: "https://arbiscan.io/tx",
            showHash: !0,
            showError: !0,
          },
        },
        fuse: {
          title: "Delegate To This Operator Wallet Address",
          isAddress: !0,
          showCopyButton: !0,
          isShareOnTwitter: !0,
          isWalletConnectRequired: !0,
          buttonText: "Click to Delegate",
          shareInfo: {
            message:
              "Just Deployed My Fuse Light Node in seconds via DumpOps Console ⚡⚡\n#SmoothOperator #OneClickNodes\n    \nhttps://console.nodeops.network/deployNode/fuse\n    \n@DumpOpsETH20\n@Fuse_network",
          },
          contractInfo: {
            abi: [
              {
                constant: !1,
                inputs: [
                  { name: "to", type: "address" },
                  { name: "contract_", type: "address" },
                  { name: "tokenId", type: "uint256" },
                  { name: "rights", type: "bytes32" },
                  { name: "amount", type: "uint256" },
                ],
                name: "delegateERC1155",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function",
              },
            ],
            contractAddress: "0x8f50b06ABE999DC3Da94b97a0AeEcD6CBe55210E",
            functionName: "delegateERC1155",
            functionParams: [],
            chainId: y.M.fuse,
            explorerUrl: "https://explorer.fuse.io/tx",
            showHash: !0,
            showError: !0,
          },
        },
        kap: {
          title: "Delegate To This Operator Wallet Address",
          isAddress: !0,
          showCopyButton: !0,
          isShareOnTwitter: !0,
          isWalletConnectRequired: !0,
          buttonText: "Click to Delegate",
          shareInfo: {
            message:
              "Just Deployed My Kap Checker Node in seconds via DumpOps Console ⚡⚡\n#SmoothOperator #OneClickNodes\n    \nhttps://console.nodeops.network/deployNode\n    \n@DumpOpsETH20\n@capncompany",
          },
          contractInfo: {
            abi: [
              {
                constant: !1,
                inputs: [
                  { name: "operator", type: "address" },
                  { name: "licenseIds", type: "uint256[]" },
                ],
                name: "approveAndDelegateLicenses",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function",
              },
            ],
            contractAddress: "0x2dd0F2DfFeDB4B3CA898046C4f24d99EDD2C8416",
            functionName: "approveAndDelegateLicenses",
            functionParams: [],
            chainId: y.M.abstract,
            explorerUrl: "",
            showHash: !0,
            showError: !0,
          },
        },
        beam: {
          title: "Stake on Beam Dashboard with the following details",
          isAddress: !0,
          isDelegationUrl: !0,
          delegationUrl: "https://delegation.onbeam.com/validators",
          showCopyButton: !0,
          delegationUrlText: "Stake Here",
        },
        omniflix: {
          title: "Register Node",
          isAddress: !1,
          isDelegationUrl: !0,
          delegationUrl: "https://ff.omniflix.market/home",
          showCopyButton: !1,
          delegationUrlText: "Register Node",
        },
        mawari: {
          title: "Delegate To This Operator Wallet Address on Mawari Dashboard",
          isAddress: !0,
          isDelegationUrl: !0,
          delegationUrl: "https://mawari.delegate.easeflow.io/licenses",
          showCopyButton: !0,
          delegationUrlText: "Delegate Here",
        },
        hybrid: {
          title: "Delegate To This Operator Wallet Address on Hybrid Dashboard",
          isAddress: !0,
          isDelegationUrl: !0,
          delegationUrl: "https://nodes.buildonhybrid.com",
          showCopyButton: !0,
          delegationUrlText: "Delegate Here",
        },
        nexus: {
          title: "Prover Node",
          isAddress: !1,
          isDelegationUrl: !0,
          delegationUrl: "https://ff.omniflix.market/home",
          showCopyButton: !1,
          delegationUrlText: "Register Node",
        },
        nodeops: {
          title: "Delegate Sentry Keys To Operator Wallet Address",
          isAddress: !0,
          showCopyButton: !0,
          isShareOnTwitter: !0,
          isWalletConnectRequired: !0,
          buttonText: "Click to Delegate",
          shareInfo: {
            message:
              "Just Deployed My DumpOps Orchestrator Node in seconds via DumpOps Console ⚡⚡\n#SmoothOperator #OneClickNodes\n    \nhttps://console.nodeops.network/deployNode/nodeops-mainnet-orchestrator\n    \n@DumpOpsETH20",
          },
          contractInfo: {
            abi: [
              {
                constant: !1,
                inputs: [
                  { name: "_operators", type: "address[]" },
                  { name: "_licenseIds", type: "uint256[]" },
                  { name: "_signatures", type: "bytes[]" },
                ],
                name: "delegateLicenses",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function",
              },
            ],
            contractAddress: "0xa234B8924Bb2707195664e4C4Cf17668db9b7286",
            functionName: "delegateLicenses",
            functionParams: [],
            chainId: y.M.nodeops,
            explorerUrl: "https://sepolia.arbiscan.io/tx",
            showHash: !0,
            showError: !0,
          },
        },
        zerog_alignment: {
          title: "Delegate Sentry Keys To Operator Wallet Address",
          isAddress: !0,
          showCopyButton: !0,
          isShareOnTwitter: !0,
          isWalletConnectRequired: !0,
          buttonText: "Click to Delegate",
          shareInfo: {
            message:
              "Just Deployed My 0G Alignment Node in seconds via DumpOps Console ⚡⚡\n#SmoothOperator #OneClickNodes\n    \nhttps://console.nodeops.network/deployNode/zerog_alignment-testnet-alignment\n    \n@DumpOpsETH20\n@0G_labs",
          },
          contractInfo: {
            abi: [
              {
                constant: !1,
                inputs: [
                  { name: "_operator", type: "address" },
                  { name: "_tokenIds", type: "uint256[]" },
                ],
                name: "delegateNfts",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function",
              },
            ],
            contractAddress: "0x1a3427aedd8C031c5DF89f5724699D86d2612f60",
            functionName: "delegateNfts",
            functionParams: [],
            chainId: y.M.zerogAlignment,
            explorerUrl: "",
            showHash: !0,
            showError: !0,
          },
        },
      };
      var ef = a(55786),
        eg = a(56634),
        ey = a(55898),
        ev = a(71170),
        ew = a(73079);
      let eN = (e, t, a) => {
        var s, n, l, r;
        let o = [];
        if (
          ((null == e ? void 0 : e.chain_name) === "xprotocol" &&
            (o = [null == e ? void 0 : e.operator_wallet, !0]),
          (null == e ? void 0 : e.chain_name) === "playai")
        ) {
          if (
            !(null == e
              ? void 0
              : null === (s = e.sentry_key_list) || void 0 === s
              ? void 0
              : s.length)
          )
            return (
              h.Am.error("Sentry keys not found"),
              { success: !1, functionArgs: [] }
            );
          let t =
            null == e
              ? void 0
              : null === (n = e.sentry_key_list) || void 0 === n
              ? void 0
              : n.map((t) => (null == e ? void 0 : e.operator_wallet));
          o = [
            null == e
              ? void 0
              : null === (l = e.sentry_key_list) || void 0 === l
              ? void 0
              : l.map((e) => Number(e)),
            t,
          ];
        }
        if (
          ((null == e ? void 0 : e.chain_name) === "ringfence" &&
            (o = [null == e ? void 0 : e.operator_wallet, Number(t)]),
          (null == e ? void 0 : e.chain_name) === "vemp")
        ) {
          let t =
            null == e
              ? void 0
              : null === (r = e.free_nfts) || void 0 === r
              ? void 0
              : r.map((e) => Number(e));
          o = [null == e ? void 0 : e.operator_wallet, t];
        }
        return (
          (null == e ? void 0 : e.chain_name) === "lumoz" &&
            (o = [
              null == e ? void 0 : e.operator_wallet,
              null == e ? void 0 : e.sentry_keys.map((e) => Number(e)),
              [
                null == e ? void 0 : e.commision_rewards,
                null == e ? void 0 : e.license_rewards,
                null == e ? void 0 : e.esmoz_rewards,
              ],
              [
                null == e ? void 0 : e.name,
                null == e ? void 0 : e.description,
                null == e ? void 0 : e.logo,
              ],
              [(null == e ? void 0 : e.twitter) || ""],
              [
                ["LNL", "LNL"],
                ["esMOZ", "esMOZ"],
              ],
            ]),
          (null == e ? void 0 : e.chain_name) === "kip" &&
            (o = [
              null == e ? void 0 : e.sentry_keys,
              a.map(() => 1),
              a.map(() => (null == e ? void 0 : e.operator_wallet)),
            ]),
          { success: !0, functionArgs: o }
        );
      };
      var eb = (e) => {
        var t, a, o, i, d, c, m, p, x, f, g, y, v, w, N, b, j;
        let { requiredInfo: _, nodeopsRequiredInfo: A, setRequiredInfo: C } = e,
          E = A
            ? A.filter(
                (e, t, a) =>
                  t === a.findIndex((t) => t.sentry_key === e.sentry_key)
              )
            : A,
          { actionRequiredModalOpen: T, setActionRequiredModalOpen: O } = (0,
          l.q)(),
          {
            address: k,
            isConnected: D,
            connectWallet: P,
            chainId: L,
            disconnectWallet: F,
            walletProvider: R,
            switchNetwork: U,
          } = (0, u.r)(),
          [M, B] = (0, r.useState)(!1),
          [H, z] = (0, r.useState)({ success: !1, txHash: "" }),
          W = null == _ ? void 0 : _.sentry_keys,
          [G, Z] = (0, r.useState)(""),
          [K, q] = (0, r.useState)(!1),
          [V, J] = (0, r.useState)(W || []),
          [Q, $] = (0, r.useState)(""),
          [X, ee] = (0, r.useState)(!1),
          [et, ea] = (0, r.useState)([]),
          [es, en] = (0, r.useState)(1),
          [el, er] = (0, r.useState)(!1),
          eo = ex[null == _ ? void 0 : _.chain_name],
          ei = ""
            .concat(null == eo ? void 0 : eo.delegationUrl)
            .concat(null == _ ? void 0 : _.operator_wallet),
          ed = ""
            .concat(
              null === (t = ex[null == _ ? void 0 : _.chain_name]) ||
                void 0 === t
                ? void 0
                : t.delegationUrl
            )
            .concat(null == _ ? void 0 : _.operator_wallet),
          ec =
            (null == eo ? void 0 : eo.isDelegationUrl) &&
            (null == eo ? void 0 : eo.buttonText) &&
            (null == eo
              ? void 0
              : null === (a = eo.buttonText) || void 0 === a
              ? void 0
              : a.length) > 0,
          eu = async () => {
            var e, t, a, s;
            if (!D) {
              h.Am.error("Please connect your wallet");
              return;
            }
            if (!(null == eo ? void 0 : eo.contractInfo)) {
              h.Am.error("Contract info not found");
              return;
            }
            if ((null == _ ? void 0 : _.chain_name) === "openpad") {
              let e = await (0, S.cd)(
                R,
                null == _ ? void 0 : _.nft_list,
                null == _ ? void 0 : _.operator_wallet
              );
              if (e.success) {
                z({ success: !0, txHash: e.txHash }),
                  h.Am.success("Delegation successful"),
                  O(!1);
                return;
              }
              h.Am.error("Delegation failed");
              return;
            }
            if ((null == _ ? void 0 : _.chain_name) === "kap") {
              let e = await (0, S.pd)(
                R,
                et.slice(0, es),
                null == _ ? void 0 : _.operator_wallet
              );
              if (e.success) {
                z({ success: !0, txHash: e.txHash }),
                  h.Am.success("Delegation successful"),
                  O(!1);
                return;
              }
              h.Am.error("Delegation failed");
              return;
            }
            if ((null == _ ? void 0 : _.chain_name) === "nodeops") {
              if (!E) {
                h.Am.error("Required info not found");
                return;
              }
              let e = null == E ? void 0 : E.map((e) => Number(e.sentry_key)),
                t = null == E ? void 0 : E.map((e) => e.operator_wallet),
                a =
                  null == E
                    ? void 0
                    : E.map((e) => "0x".concat(e.generated_signature)),
                s = await (0, S.uE)(R, e, t, a);
              if (s.success) {
                z({ success: !0, txHash: s.txHash }),
                  h.Am.success("Delegation successful"),
                  O(!1);
                return;
              }
              h.Am.error("Delegation failed");
              return;
            }
            if ((null == _ ? void 0 : _.chain_name) === "zerog_alignment") {
              if ((B(!0), !_)) {
                h.Am.error("Required info not found");
                return;
              }
              let e =
                  (null == _
                    ? void 0
                    : null === (s = _.keys) || void 0 === s
                    ? void 0
                    : s.map((e) => Number(e))) || [],
                t = null == _ ? void 0 : _.operator_wallet;
              if (0 === e.length) {
                h.Am.error("Sentry keys not found");
                return;
              }
              let a = await (0, S.BO)(R, e, t);
              if (a.success) {
                z({ success: !0, txHash: a.txHash }),
                  h.Am.success("Delegation successful"),
                  O(!1);
                return;
              }
              h.Am.error("Delegation failed");
              return;
            }
            let n = eN(_, G, V);
            if (!n.success) {
              h.Am.error("Function arguments not found");
              return;
            }
            B(!0);
            let l = await (0, S.uJ)(
              null == eo
                ? void 0
                : null === (e = eo.contractInfo) || void 0 === e
                ? void 0
                : e.contractAddress,
              R,
              null == eo
                ? void 0
                : null === (t = eo.contractInfo) || void 0 === t
                ? void 0
                : t.abi,
              null == eo
                ? void 0
                : null === (a = eo.contractInfo) || void 0 === a
                ? void 0
                : a.functionName,
              n.functionArgs || []
            );
            l.success
              ? (z({ success: !0, txHash: l.txHash }),
                h.Am.success("Delegation successful"))
              : h.Am.error("Delegation failed"),
              B(!1);
          },
          eh = async () => {
            var e;
            q(!0);
            let t = await (0, ep.C)(k, null == _ ? void 0 : _.chain_name);
            (null === (e = t.free_nfts) || void 0 === e ? void 0 : e.length) >
              0 && Z(t.free_nfts[0]),
              q(!1);
          },
          eb = async () => {
            let e = await (0, ep.Rn)(
              null == _ ? void 0 : _.node_name,
              null == _ ? void 0 : _.namespace,
              null == _ ? void 0 : _.chain_name
            );
            e && $(e);
          };
        async function ej(e, t) {
          let a = 0,
            s = async () => {
              try {
                let a = (await (0, em.HG)({ wallet_id: e, operator_id: t }))
                  .data;
                if (!0 === a.found) return O(!1), a;
                throw Error("Data not found yet");
              } catch (e) {
                if ((await new Promise((e) => setTimeout(e, 1e3)), a < 180))
                  return a++, await s();
                throw Error("Max attempts reached, stopping poll");
              }
            };
          return s();
        }
        (0, r.useEffect)(() => {
          (null == eo ? void 0 : eo.shouldFetchNFTs) && eh(),
            (null == eo ? void 0 : eo.generateBurnerWallet) && eb();
        }, []);
        let e_ = (null == _ ? void 0 : _.chain_name) === "fuse",
          eA = (null == _ ? void 0 : _.chain_name) === "kap",
          eC =
            (null == _
              ? void 0
              : null === (o = _.chain_name) || void 0 === o
              ? void 0
              : o.toLowerCase()) === "beam",
          eE =
            (null == _
              ? void 0
              : null === (i = _.chain_name) || void 0 === i
              ? void 0
              : i.toLowerCase()) === "omniflix",
          eT = (null == _ ? void 0 : _.chain_name) === "nodeops",
          eO = (null == _ ? void 0 : _.chain_name) === "zerog_alignment",
          ek = async () => {
            if (!D) {
              h.Am.error("Please connect your wallet");
              return;
            }
            ee(!0);
            try {
              await (0, em.LC)({ wallet_address: k }),
                h.Am.success("Token transfered successfully");
            } catch (s) {
              var e, t;
              let a =
                null == s
                  ? void 0
                  : null === (t = s.response) || void 0 === t
                  ? void 0
                  : null === (e = t.data) || void 0 === e
                  ? void 0
                  : e.error;
              h.Am.error(a || "Token transfer failed");
            } finally {
              ee(!1);
            }
          },
          eD = async (e, t, a, s, n) => {
            var l, r, o;
            let i = ex[n];
            return await (0, S.uJ)(
              null == i
                ? void 0
                : null === (l = i.contractInfo) || void 0 === l
                ? void 0
                : l.contractAddress,
              e,
              null == i
                ? void 0
                : null === (r = i.contractInfo) || void 0 === r
                ? void 0
                : r.abi,
              null == i
                ? void 0
                : null === (o = i.contractInfo) || void 0 === o
                ? void 0
                : o.functionName,
              [
                a,
                "0xd4A5D16Fa00D3057A4A96197Db4bc1Ec5a3a5910",
                t,
                "0x4675736520456d626572204e6f6465204c6963656e7365000000000000000000",
                s,
              ]
            );
          },
          eS = () => {
            var e, t;
            (null == eo
              ? void 0
              : null === (e = eo.contractInfo) || void 0 === e
              ? void 0
              : e.chainId.id) !== L &&
              U(
                null == eo
                  ? void 0
                  : null === (t = eo.contractInfo) || void 0 === t
                  ? void 0
                  : t.chainId
              );
          },
          eI = async () => {
            q(!0);
            try {
              let e = await (0, em.GS)({ wallet_address: k });
              ea(null == e ? void 0 : e.licenses);
            } catch (e) {
              h.Am.error("Failed to fetch NFTs");
            } finally {
              q(!1);
            }
          },
          eP =
            (null == eo
              ? void 0
              : null === (d = eo.contractInfo) || void 0 === d
              ? void 0
              : d.chainId.id) !== L,
          eL = async () => {
            B(!0);
            try {
              (await (0, S.ox)(R)).success
                ? (h.Am.success("Approval successful"), er(!0))
                : (h.Am.error("Approval failed"), er(!1));
            } catch (e) {
              h.Am.error("Approval failed");
            } finally {
              B(!1);
            }
          };
        return (
          (0, r.useEffect)(() => {
            eO &&
              D &&
              (B(!0),
              (async () => {
                er(await (0, S.PM)(k, R)), B(!1);
              })());
          }, [D]),
          (0, s.jsx)(n.u_, {
            isOpen: T,
            close: () => {
              O(!1), C(null);
            },
            modalClassName: "!max-w-xl",
            showCloseButton: !0,
            children: (0, s.jsxs)("div", {
              className: "flex flex-col",
              children: [
                (null == eo ? void 0 : eo.title) &&
                  (0, s.jsx)("p", {
                    className: "text-lg font-medium text-primary",
                    children: eo.title,
                  }),
                (null == eo ? void 0 : eo.subTitle) &&
                  (0, s.jsx)("p", {
                    className: "text-sm text-primary/50 mt-1",
                    children: eo.subTitle,
                  }),
                (0, s.jsxs)("div", {
                  className:
                    "flex items-center justify-between gap-2 text-sm bg-primary/5 rounded-xl p-3 mt-4",
                  children: [
                    (0, s.jsx)("p", { children: "Node Name" }),
                    (0, s.jsxs)("div", {
                      className:
                        "cursor-pointer  flex items-center justify-between gap-2",
                      onClick: () => {
                        navigator.clipboard.writeText(
                          null == _ ? void 0 : _.node_name
                        ),
                          h.Am.success("Node Name copied!!");
                      },
                      children: [
                        (0, s.jsx)("p", {
                          children: null == _ ? void 0 : _.node_name,
                        }),
                        (0, s.jsx)(ef.Z, { className: "w-4 h-4" }),
                      ],
                    }),
                  ],
                }),
                (null == eo ? void 0 : eo.showDelegationAndPendingLicenses) &&
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-2 mt-4",
                    children: [
                      (null == _ ? void 0 : _.delegated_licenses) &&
                        (null == _
                          ? void 0
                          : null === (c = _.delegated_licenses) || void 0 === c
                          ? void 0
                          : c.length) > 0 &&
                        (null == _
                          ? void 0
                          : null === (m = _.delegated_licenses) || void 0 === m
                          ? void 0
                          : m.map((e) =>
                              (0, s.jsx)(
                                "div",
                                {
                                  className:
                                    "flex items-center gap-2 border border-green-500/10 text-sm rounded-lg p-2 text-green-500",
                                  children: (0, s.jsx)("p", { children: e }),
                                },
                                e
                              )
                            )),
                      (null == _ ? void 0 : _.pending_licenses) &&
                        (null == _
                          ? void 0
                          : null === (p = _.pending_licenses) || void 0 === p
                          ? void 0
                          : p.length) > 0 &&
                        (null == _
                          ? void 0
                          : null === (x = _.pending_licenses) || void 0 === x
                          ? void 0
                          : x.map((e) =>
                              (0, s.jsx)(
                                "div",
                                {
                                  className:
                                    "flex items-center gap-2 border border-red-500/10 text-sm rounded-lg p-2 text-red-500",
                                  children: (0, s.jsx)("p", { children: e }),
                                },
                                e
                              )
                            )),
                    ],
                  }),
                (null == eo ? void 0 : eo.showLicenseList) &&
                  W &&
                  (null == W ? void 0 : W.length) > 0 &&
                  (0, s.jsx)("div", {
                    className: "flex flex-wrap gap-3 mt-4",
                    children:
                      null == W
                        ? void 0
                        : W.map((e) =>
                            (0, s.jsxs)(
                              "button",
                              {
                                className:
                                  "text-sm border rounded-lg p-2 flex items-center gap-2 ".concat(
                                    V.includes(e)
                                      ? "border-primary"
                                      : "border-primary/5"
                                  ),
                                onClick: () => {
                                  J((t) =>
                                    t.includes(e)
                                      ? t.filter((t) => t !== e)
                                      : [...t, e]
                                  );
                                },
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "w-2 h-2 rounded-full border ".concat(
                                        V.includes(e)
                                          ? "bg-primary border-primary"
                                          : "border-primary/5"
                                      ),
                                  }),
                                  e,
                                ],
                              },
                              e
                            )
                          ),
                  }),
                (null == eo ? void 0 : eo.buttonHeading) &&
                  (0, s.jsx)("p", {
                    className: "text-sm font-medium text-primary/60 mt-6",
                    children: null == eo ? void 0 : eo.buttonHeading,
                  }),
                (null == eo ? void 0 : eo.generateBurnerWallet) &&
                  Q &&
                  (0, s.jsx)("p", {
                    className: "text-sm font-medium text-primary/60 mt-3",
                    children: "Burner Wallet",
                  }),
                (null == eo ? void 0 : eo.isAddress) &&
                  ((null == _ ? void 0 : _.operator_wallet) ||
                    ((null == eo ? void 0 : eo.generateBurnerWallet) && Q)) &&
                  !eT &&
                  (0, s.jsxs)("div", {
                    onClick: () => {
                      eo.showCopyButton &&
                        (navigator.clipboard.writeText(
                          (null == eo ? void 0 : eo.generateBurnerWallet)
                            ? Q
                            : null == _
                            ? void 0
                            : _.operator_wallet
                        ),
                        h.Am.success("Address copied!!"));
                    },
                    className:
                      "cursor-pointer flex items-center justify-between gap-2 text-sm bg-primary/5 rounded-xl p-3 mt-2",
                    children: [
                      (0, s.jsx)("p", {
                        children: (0, I.FP)(
                          (null == eo ? void 0 : eo.generateBurnerWallet)
                            ? Q
                            : null == _
                            ? void 0
                            : _.operator_wallet,
                          10
                        ),
                      }),
                      eo.showCopyButton &&
                        (0, s.jsx)(ef.Z, { className: "w-4 h-4" }),
                    ],
                  }),
                (null == eo ? void 0 : eo.isUuid) &&
                  (0, s.jsxs)("div", {
                    className:
                      "flex items-center justify-between gap-2 text-sm bg-primary/5 rounded-xl p-3 mt-4",
                    children: [
                      (0, s.jsxs)("p", {
                        children: [
                          null == _
                            ? void 0
                            : null === (f = _.uuid) || void 0 === f
                            ? void 0
                            : f.slice(0, 10),
                          "...",
                          null == _
                            ? void 0
                            : null === (g = _.uuid) || void 0 === g
                            ? void 0
                            : g.slice(-10),
                        ],
                      }),
                      (0, s.jsx)("button", {
                        onClick: () => {
                          navigator.clipboard.writeText(
                            null == _ ? void 0 : _.uuid
                          ),
                            h.Am.success("UUID copied!!");
                        },
                        children: (0, s.jsx)(ef.Z, { className: "w-4 h-4" }),
                      }),
                    ],
                  }),
                eE &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "flex flex-col bg-primary/5 rounded-xl p-3 gap-1 mt-3",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-primary-disabled",
                            children: "Media Node ID",
                          }),
                          (0, s.jsxs)("button", {
                            onClick: () => {
                              navigator.clipboard.writeText(
                                null == _ ? void 0 : _.node_id
                              ),
                                h.Am.success("NodeID copied!!");
                            },
                            className:
                              "flex items-center justify-between font-bold",
                            children: [
                              (0, I.FP)(
                                (null == _ ? void 0 : _.NodeID) ||
                                  (null == _ ? void 0 : _.node_id),
                                10
                              ),
                              (0, s.jsx)(ef.Z, { className: "w-4 h-4" }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex flex-col bg-primary/5 rounded-xl p-3 gap-1 mt-3",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-primary-disabled",
                            children: "URL",
                          }),
                          (0, s.jsxs)("button", {
                            onClick: () => {
                              navigator.clipboard.writeText(
                                null == _ ? void 0 : _.url
                              ),
                                h.Am.success("URL copied!!");
                            },
                            className:
                              "flex items-center justify-between font-bold",
                            children: [
                              null == _ ? void 0 : _.url,
                              (0, s.jsx)(ef.Z, { className: "w-4 h-4" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                eC &&
                  (0, s.jsxs)("div", {
                    className: "grid grid-cols-2 gap-2 text-sm mt-4",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "flex flex-col bg-primary/5 rounded-xl p-3 gap-1",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-primary-disabled",
                            children: "NodeID",
                          }),
                          (0, s.jsxs)("button", {
                            onClick: () => {
                              navigator.clipboard.writeText(
                                null == _ ? void 0 : _.node_id
                              ),
                                h.Am.success("NodeID copied!!");
                            },
                            className:
                              "flex items-center justify-between font-bold",
                            children: [
                              (0, I.FP)(
                                (null == _ ? void 0 : _.NodeID) ||
                                  (null == _ ? void 0 : _.node_id),
                                10
                              ),
                              (0, s.jsx)(ef.Z, { className: "w-4 h-4" }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex flex-col bg-primary/5 rounded-xl p-3 gap-1",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-primary-disabled",
                            children: "P-Chain Address",
                          }),
                          (0, s.jsxs)("button", {
                            onClick: () => {
                              navigator.clipboard.writeText(
                                null == _ ? void 0 : _.p_chain_address
                              ),
                                h.Am.success("P-Chain Address copied!!");
                            },
                            className:
                              "flex items-center justify-between font-bold",
                            children: [
                              (0, I.FP)(
                                null == _ ? void 0 : _.p_chain_address,
                                10
                              ),
                              (0, s.jsx)(ef.Z, { className: "w-4 h-4" }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex flex-col bg-primary/5 rounded-xl p-3 gap-1",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-primary-disabled",
                            children: "Public Key",
                          }),
                          (0, s.jsxs)("button", {
                            onClick: () => {
                              navigator.clipboard.writeText(
                                null == _ ? void 0 : _.public_key
                              ),
                                h.Am.success("Public Key copied!!");
                            },
                            className:
                              "flex items-center justify-between font-bold",
                            children: [
                              (0, I.FP)(null == _ ? void 0 : _.public_key, 10),
                              (0, s.jsx)(ef.Z, { className: "w-4 h-4" }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex flex-col bg-primary/5 rounded-xl p-3 gap-1",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-primary-disabled",
                            children: "Proof of Possession",
                          }),
                          (0, s.jsxs)("button", {
                            onClick: () => {
                              navigator.clipboard.writeText(
                                null == _ ? void 0 : _.proof_of_possession
                              ),
                                h.Am.success("Proof of Possession copied!!");
                            },
                            className:
                              "flex items-center justify-between font-bold",
                            children: [
                              (0, I.FP)(
                                null == _ ? void 0 : _.proof_of_possession,
                                10
                              ),
                              (0, s.jsx)(ef.Z, { className: "w-4 h-4" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                (null == eo ? void 0 : eo.isWalletConnectRequired) &&
                  (0, s.jsxs)("div", {
                    className: "mt-4 flex items-center justify-between gap-3",
                    children: [
                      (0, s.jsx)(n.zx, {
                        className: "w-full",
                        variant: "outline",
                        onClick: () => {
                          if ("undefined" === k) {
                            F(), P();
                            return;
                          }
                          D || P();
                        },
                        lefticon:
                          D && "undefined" !== k
                            ? (0, s.jsx)("img", {
                                src: (0, I.Sv)(Number(L)),
                                alt: "wallet",
                                className: "w-5",
                              })
                            : null,
                        children:
                          D && "undefined" !== k
                            ? (0, I.FP)(k)
                            : "Connect Wallet",
                      }),
                      D &&
                        "undefined" !== k &&
                        (0, s.jsx)(n.zx, {
                          onClick: F,
                          variant: "outline",
                          className: "w-fit",
                          children: "Disconnect",
                        }),
                    ],
                  }),
                (null == eo ? void 0 : eo.isAddress) &&
                  ((null == _ ? void 0 : _.operator_wallet) ||
                    ((null == eo ? void 0 : eo.generateBurnerWallet) && Q)) &&
                  eT &&
                  E &&
                  (null == E ? void 0 : E.length) > 0 &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "grid grid-cols-12 gap-4 px-3 py-2 text-primary-disabled text-[13px] bg-greyShade/80 rounded-xl mt-2",
                        children: [
                          (0, s.jsx)("div", {
                            className: "col-span-6",
                            children: "Sentry Key",
                          }),
                          (0, s.jsx)("div", {
                            className: "col-span-6",
                            children: "Operator Wallet",
                          }),
                        ],
                      }),
                      E.map((e) =>
                        (0, s.jsxs)(
                          "div",
                          {
                            className:
                              "grid grid-cols-12 gap-4 text-sm bg-primary/5 rounded-xl p-3 mt-2",
                            children: [
                              (0, s.jsx)("p", {
                                className: "col-span-6",
                                children: e.sentry_key,
                              }),
                              (0, s.jsx)("p", {
                                className: "col-span-6",
                                children: (0, I.FP)(e.operator_wallet, 10),
                              }),
                            ],
                          },
                          e.sentry_key
                        )
                      ),
                    ],
                  }),
                e_ &&
                  (0, s.jsxs)("div", {
                    className: "mt-4 flex flex-col gap-3",
                    children: [
                      (0, s.jsx)("p", {
                        className: "text-sm text-primary-disabled",
                        children:
                          "Click here to get FUSE tokens for gas—required once for delegation",
                      }),
                      (0, s.jsx)(n.zx, {
                        className: "w-full",
                        variant: "outline",
                        onClick: ek,
                        showloading: X,
                        disabled: X || !D || M,
                        children: "Request FUSE",
                      }),
                    ],
                  }),
                e_ &&
                  (null == _
                    ? void 0
                    : null === (y = _.free_nfts) || void 0 === y
                    ? void 0
                    : y.length) > 0 &&
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-2 mt-3",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "grid grid-cols-12 gap-4 px-3 py-3 text-primary-disabled text-xs bg-background-dark/30 rounded-xl",
                        children: [
                          (0, s.jsx)("div", {
                            className: "col-span-4",
                            children: "Tier",
                          }),
                          (0, s.jsx)("div", {
                            className: "col-span-4",
                            children: "NFTs",
                          }),
                          (0, s.jsx)("div", {
                            className: "col-span-4",
                            children: "Action",
                          }),
                        ],
                      }),
                      null == _
                        ? void 0
                        : null === (v = _.free_nfts) || void 0 === v
                        ? void 0
                        : v.map((e) =>
                            (0, s.jsxs)(
                              "div",
                              {
                                className:
                                  "grid grid-cols-12 gap-4 px-3 py-2 text-primary-disabled text-xs bg-background-dark/30 rounded-xl mb-2",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "col-span-4 text-primary flex items-center gap-2",
                                    children: (0, s.jsx)("p", {
                                      children: e.id,
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "col-span-4 text-primary flex items-center gap-2",
                                    children: (0, s.jsx)("p", {
                                      children: e.value,
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "col-span-4",
                                    children: (0, s.jsx)(n.zx, {
                                      disabled: M || !D,
                                      showloading: M,
                                      onClick: async () => {
                                        if ((B(!0), eP)) {
                                          eS(), B(!1);
                                          return;
                                        }
                                        B(!0);
                                        let t = await eD(
                                          R,
                                          e.id,
                                          null == _
                                            ? void 0
                                            : _.operator_wallet,
                                          null == e ? void 0 : e.value,
                                          null == _ ? void 0 : _.chain_name
                                        );
                                        (null == t ? void 0 : t.success)
                                          ? (z({
                                              success: !0,
                                              txHash:
                                                null == t ? void 0 : t.txHash,
                                            }),
                                            h.Am.success(
                                              "Delegation successful"
                                            ))
                                          : h.Am.error("Delegation failed"),
                                          B(!1);
                                      },
                                      variant: "outline",
                                      className: "w-fit text-xs h-8",
                                      size: "small",
                                      children: eP
                                        ? "Switch Network"
                                        : "Delegate",
                                    }),
                                  }),
                                ],
                              },
                              e
                            )
                          ),
                    ],
                  }),
                eA &&
                  (0, s.jsxs)("div", {
                    className: "mt-4 flex flex-col gap-3",
                    children: [
                      (0, s.jsx)(n.zx, {
                        className: "w-full",
                        variant: "outline",
                        onClick: eI,
                        showloading: K,
                        disabled: K || !D || M,
                        children: "Fetch NFT",
                      }),
                      et.length > 0 &&
                        (0, s.jsxs)("div", {
                          className: "flex flex-col mt-6",
                          children: [
                            (0, s.jsx)("p", {
                              className: "text-lg font-medium",
                              children: "No of NFTs to delegate",
                            }),
                            (0, s.jsx)("p", {
                              className: "text-sm text-primary-disabled",
                              children:
                                "Select how many NFTs you want to delegate",
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "mt-4 px-3 h-11 w-full self-start flex items-center justify-between bg-background-dark/80 border border-primary/10 rounded-xl",
                              children: [
                                (0, s.jsx)("button", {
                                  onClick: () => en(Math.max(1, es - 1)),
                                  className:
                                    "h-full flex items-center justify-center hover:bg-opacity-80 transition-all",
                                  children: (0, s.jsx)(eg.Z, { size: 16 }),
                                }),
                                (0, s.jsx)("span", {
                                  className:
                                    "text-sm font-mono font-medium min-w-[3ch] text-center",
                                  children: es,
                                }),
                                (0, s.jsx)("button", {
                                  onClick: () =>
                                    en(Math.min(et.length, es + 1)),
                                  className:
                                    "h-full flex items-center justify-center hover:bg-opacity-80 transition-all",
                                  children: (0, s.jsx)(ey.Z, { size: 16 }),
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                eA &&
                  et.length > 0 &&
                  (0, s.jsx)("div", {
                    className: "flex flex-col gap-2 mt-3",
                    children: (0, s.jsxs)("div", {
                      className:
                        "flex items-center justify-between gap-4 px-3 py-3 text-primary-disabled text-xs bg-background-dark/30 rounded-xl",
                      children: [
                        (0, s.jsx)("div", {
                          className: "",
                          children: "NFTs Found",
                        }),
                        (0, s.jsx)("div", {
                          className: "",
                          children: et.length,
                        }),
                      ],
                    }),
                  }),
                eO &&
                  (el
                    ? (0, s.jsx)(n.zx, {
                        className: "mt-4 w-full",
                        onClick: eP ? eS : eu,
                        disabled:
                          (!D ||
                            !!M ||
                            !!K ||
                            (null != eo && !!eo.showLicenseList)) &&
                          !V.length,
                        showloading: M,
                        children: eP
                          ? "Switch Network"
                          : null == eo
                          ? void 0
                          : eo.buttonText,
                      })
                    : (0, s.jsx)(n.zx, {
                        className: "mt-4 w-full",
                        onClick: eL,
                        children: "Approve",
                      })),
                (null == eo ? void 0 : eo.buttonText) &&
                  (null == eo
                    ? void 0
                    : null === (w = eo.buttonText) || void 0 === w
                    ? void 0
                    : w.length) > 0 &&
                  !e_ &&
                  !eO &&
                  (0, s.jsx)(n.zx, {
                    className: "mt-4 w-full",
                    onClick: eP ? eS : eu,
                    disabled:
                      (!D ||
                        !!M ||
                        !!K ||
                        (null != eo && !!eo.showLicenseList)) &&
                      !V.length,
                    showloading: M,
                    children: eP
                      ? "Switch Network"
                      : null == eo
                      ? void 0
                      : eo.buttonText,
                  }),
                H.success &&
                  (0, s.jsxs)("div", {
                    className: "mt-4 flex flex-col bg-primary/5 rounded-xl p-3",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "flex items-center justify-between flex-wrap gap-2",
                        children: [
                          (0, s.jsx)("p", { children: "Transaction Hash" }),
                          (0, s.jsxs)(Y.default, {
                            href: ""
                              .concat(
                                null == eo
                                  ? void 0
                                  : null === (N = eo.contractInfo) ||
                                    void 0 === N
                                  ? void 0
                                  : N.explorerUrl,
                                "/"
                              )
                              .concat(H.txHash),
                            target: "_blank",
                            className: "flex items-center gap-2",
                            rel: "noreferrer",
                            children: [
                              (0, s.jsxs)("p", {
                                children: [
                                  null === (b = H.txHash) || void 0 === b
                                    ? void 0
                                    : b.slice(0, 6),
                                  "...",
                                  null === (j = H.txHash) || void 0 === j
                                    ? void 0
                                    : j.slice(-4),
                                ],
                              }),
                              (0, s.jsx)(ev.Z, { className: "w-4 h-4" }),
                            ],
                          }),
                        ],
                      }),
                      (null == eo ? void 0 : eo.isShareOnTwitter) &&
                        (0, s.jsx)(n.zx, {
                          className: "mt-4 w-full",
                          variant: "outline",
                          lefticon: (0, s.jsx)(ew.Z, { size: 18 }),
                          onClick: () => {
                            var e;
                            window.open(
                              "https://x.com/intent/tweet?text=".concat(
                                null == eo
                                  ? void 0
                                  : null === (e = eo.shareInfo) || void 0 === e
                                  ? void 0
                                  : e.message
                              ),
                              "_blank"
                            );
                          },
                          children: "Share on Twitter",
                        }),
                    ],
                  }),
                ec &&
                  (0, s.jsxs)("div", {
                    className: "relative text-center mt-4",
                    children: [
                      (0, s.jsx)("div", {
                        className: "absolute inset-0 flex items-center",
                        children: (0, s.jsx)("div", {
                          className: "w-full border-t border-border",
                        }),
                      }),
                      (0, s.jsx)("span", {
                        className:
                          "relative px-3 text-sm text-primary-disabled bg-greyShade",
                        children: "OR",
                      }),
                    ],
                  }),
                (null == eo ? void 0 : eo.isDelegationUrl) &&
                  (0, s.jsxs)(Y.default, {
                    href: (null == eo ? void 0 : eo.isDelegationUrlFromBackend)
                      ? null == _
                        ? void 0
                        : _.delegation_url
                      : (null == _ ? void 0 : _.chain_name) === "hychain"
                      ? ei
                      : (null == _ ? void 0 : _.chain_name) === "xai" ||
                        (null == _ ? void 0 : _.chain_name) === "xai_premium"
                      ? ed
                      : null == eo
                      ? void 0
                      : eo.delegationUrl,
                    onClick: () => {
                      (null == _ ? void 0 : _.chain_name) === "xai_premium" &&
                        ej(k, null == _ ? void 0 : _.operator_wallet);
                    },
                    target: "_blank",
                    className:
                      "mt-4 text-sm text-center border border-primary/10 rounded-xl p-2 flex items-center justify-center gap-2",
                    children: [
                      null == eo ? void 0 : eo.delegationUrlText,
                      " ",
                      (0, s.jsx)(ev.Z, { className: "w-4 h-4" }),
                    ],
                  }),
                (null == _ ? void 0 : _.chain_name) === "xai-premium" &&
                  !_.is_sentry_wallet_funded &&
                  (0, s.jsxs)("div", {
                    className:
                      "mt-4 text-sm text-center border border-primary/10 rounded-xl p-2 flex items-center justify-center gap-2",
                    children: [
                      (0, s.jsx)("p", {
                        className: "text-accent",
                        children: "Fund Wallet",
                      }),
                      (0, s.jsxs)("p", {
                        children: [
                          "Please use following Operator Address and Transfer",
                          (0, s.jsx)("span", {
                            className: " font-bold text-lg",
                            children: " 0.01 Eth",
                          }),
                          " to this account to start deployment",
                        ],
                      }),
                      (0, s.jsxs)("p", {
                        className: "text-primary/50",
                        children: [
                          "Operator Address: ",
                          null == _ ? void 0 : _.operator_wallet,
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          })
        );
      };
      a(99822);
      let ej = () =>
          (0, s.jsxs)("div", {
            className:
              "hidden md:grid grid-cols-12 gap-4 px-3 py-3 text-primary-disabled text-xs bg-background-dark/80 rounded-xl",
            children: [
              (0, s.jsx)("div", {
                className: "col-span-3",
                children: "Burner Wallet",
              }),
              (0, s.jsx)("div", {
                className: "col-span-3",
                children: "Keys Delegated",
              }),
              (0, s.jsx)("div", {
                className: "col-span-3",
                children: "Slots Available",
              }),
              (0, s.jsx)("div", {
                className: "col-span-3",
                children: "Commission Rate",
              }),
            ],
          }),
        e_ = (e) => {
          let { operator: t } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                className:
                  "hidden md:grid grid-cols-12 gap-4 px-3 py-3 bg-background-dark rounded-xl",
                children: [
                  (0, s.jsx)("div", {
                    className: "col-span-3",
                    children: (0, s.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, s.jsx)("span", {
                          className: "text-accent text-sm",
                          children: (0, I.FP)(t.operator_address),
                        }),
                        (0, s.jsx)("button", {
                          onClick: () => {
                            navigator.clipboard.writeText(t.operator_address),
                              h.Am.success("Burner wallet address copied!");
                          },
                          className:
                            "hover:bg-primary/5 p-1 rounded-lg transition-colors",
                          children: (0, s.jsx)(ef.Z, {
                            className: "w-4 h-4 text-primary-disabled",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "col-span-3 text-sm",
                    children: t.delegated_nft_count,
                  }),
                  (0, s.jsx)("div", {
                    className: "col-span-3 text-sm",
                    children: t.available_delegation_count,
                  }),
                  (0, s.jsx)("div", {
                    className: "col-span-3 text-sm",
                    children: t.commission_rate,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "md:hidden bg-background-dark rounded-xl p-3",
                children: [
                  (0, s.jsx)("div", {
                    className: "flex items-center justify-between mb-3",
                    children: (0, s.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        (0, s.jsx)("p", {
                          className: "text-sm font-medium",
                          children: (0, I.FP)(t.operator_address),
                        }),
                        (0, s.jsx)("button", {
                          onClick: () => {
                            navigator.clipboard.writeText(t.operator_address),
                              h.Am.success("Burner wallet address copied!");
                          },
                          className:
                            "hover:bg-primary/5 p-1 rounded-lg transition-colors",
                          children: (0, s.jsx)(ef.Z, {
                            className: "w-4 h-4 text-primary-disabled",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-xs text-primary-disabled",
                            children: "Keys Delegated",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-sm",
                            children: t.delegated_nft_count,
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-xs text-primary-disabled",
                            children: "Slots Available",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-sm",
                            children: t.available_delegation_count,
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-xs text-primary-disabled",
                            children: "Commission Rate",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-sm",
                            children: t.commission_rate,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      var eA = (e) => {
        let { delegation: t } = e,
          [a, o] = (0, r.useState)(!1),
          {
            addOperatorModalOpen: i,
            setAddOperatorModalOpen: d,
            registerOperator: c,
            getMyNodeDelegation: u,
          } = (0, l.q)(),
          m = async () => {
            try {
              o(!0),
                await c(t.chain_id),
                await u(),
                h.Am.success("Operator registered successfully");
            } catch (e) {
              console.error(e);
            } finally {
              o(!1);
            }
          };
        return (0, s.jsxs)(n.u_, {
          isOpen: i,
          close: () => d(!1),
          title: "Operator",
          modalClassName: "!max-w-3xl",
          showCloseButton: !0,
          children: [
            (0, s.jsx)("p", {
              className: "text-sm text-primary-disabled",
              children:
                "Paste the operator address on the dashboard to manage your delegation.",
            }),
            (0, s.jsxs)("div", {
              className: "mt-5",
              children: [
                (0, s.jsx)(ej, {}),
                (0, s.jsx)("div", {
                  className: "space-y-2 mt-2 max-h-[300px] overflow-y-auto",
                  children: t.operators.map((e, t) =>
                    (0, s.jsx)(e_, { operator: e }, t)
                  ),
                }),
                (0, s.jsxs)(n.zx, {
                  className: "w-full mt-8",
                  onClick: () => {
                    m();
                  },
                  disabled: a || !t.is_operator_addable,
                  showloading: a,
                  children: [
                    (0, s.jsx)("span", { className: "text-lg", children: "+" }),
                    "Add Operator",
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    37741: function (e, t, a) {
      a.d(t, {
        s: function () {
          return n;
        },
      });
      var s = a(2265);
      let n = (e, t, a, n, l, r) => {
        let o = (0, s.useRef)(),
          i = (0, s.useCallback)(() => {
            o.current ||
              (!0 !== r && t(!1),
              (o.current = setInterval(() => {
                console.log(
                  "----------- calling api from poll for ".concat(
                    n,
                    " -----------"
                  )
                ),
                  t(!0);
              }, a)));
          }, [t]),
          d = (0, s.useCallback)(() => {
            o.current &&
              (console.log(
                "----------- clearing poll for api call from  ".concat(
                  n,
                  " -----------"
                )
              ),
              clearInterval(o.current),
              (o.current = void 0));
          }, [t]);
        (0, s.useEffect)(
          () => (
            e &&
              (console.log(
                "----------- gonna call api from poll for ".concat(
                  n,
                  " -----------"
                )
              ),
              i()),
            () => {
              d(), "function" == typeof l && l();
            }
          ),
          [e, t]
        );
      };
    },
    82088: function (e, t, a) {
      a.d(t, {
        C: function () {
          return B;
        },
        Rn: function () {
          return z;
        },
      });
      var s = a(79101),
        n = a(21099);
      let l = (e, t) =>
          (0, s.wY)(
            n.FA.PUBLIC,
            "/api/v1/lumoz/sentry-keys?wallet_id=".concat(e.address),
            e,
            t
          ),
        r = (e, t) =>
          (0, s.wY)(
            n.FA.PUBLIC,
            "/api/v1/hychain/keys?wallet_id=".concat(e.address),
            e,
            t
          ),
        o = (e, t) =>
          (0, s.wY)(
            n.FA.PUBLIC,
            "/api/v1/vemp/sentry-keys?wallet_id=".concat(e.address),
            e,
            t
          ),
        i = (e, t) =>
          (0, s.wY)(
            n.FA.PUBLIC,
            "/api/v1/playai/sentry-keys?wallet_id=".concat(e.address),
            e,
            t
          ),
        d = (e, t) =>
          (0, s.wY)(
            n.FA.PUBLIC,
            "/api/v1/rivalz/sentry-keys?wallet_id=".concat(e.address),
            void 0,
            t
          ),
        c = (e, t) =>
          (0, s.wY)(
            n.FA.PUBLIC,
            "/api/v1/ringfence/sentry-keys?wallet_id=".concat(e.address),
            e,
            t
          ),
        u = (e, t) =>
          (0, s.wY)(
            n.FA.PUBLIC,
            "/api/v1/aethir/burner/wallet?pod_name="
              .concat(e.pod_name, "&namespace=")
              .concat(e.namespace),
            {},
            t
          ),
        m = (e, t) =>
          (0, s.wY)(
            n.FA.PUBLIC,
            "/api/v1/sophon/sentry-keys?wallet_id=".concat(e.address),
            void 0,
            t
          ),
        p = (e, t) =>
          (0, s.wY)(
            n.FA.PUBLIC,
            "/api/v1/din/sentry-keys?wallet_id=".concat(e.address),
            void 0,
            t
          ),
        h = (e, t) =>
          (0, s.wY)(
            n.FA.PUBLIC,
            "/api/v1/hybrid/sentry-keys?wallet_id=".concat(e.address),
            void 0,
            t
          ),
        x = (e, t) =>
          (0, s.wY)(
            n.FA.PUBLIC,
            "/api/v1/nodeops/free-sentry-keys?wallet_id=".concat(e.address),
            void 0,
            t
          ),
        f = (e, t) =>
          (0, s.wY)(
            n.FA.PUBLIC,
            "/api/v1/zerog-alignment/free-sentry-keys?wallet_id=".concat(
              e.address
            ),
            void 0,
            t
          );
      var g = a(18091);
      async function y(e, t) {
        let a = g._.aethir.alchemyApiKey,
          s = "https://base-mainnet.g.alchemy.com/v2/"
            .concat(a, "/getNFTsForOwner?owner=")
            .concat(e, "&contractAddresses[]=")
            .concat(
              g._.xprotocol.mainnetContractAddress,
              "&withMetadata=true&pageSize=100"
            )
            .concat(t && "&pageKey=" + t);
        try {
          let e = await fetch(s, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          return (await e.json()).ownedNfts.map((e) =>
            String(Number(e.id.tokenId))
          );
        } catch (e) {
          return console.error("Failed to fetch transfers:", e), [];
        }
      }
      var v = a(59527);
      let w = (e) => {
          var t, a, s, n;
          return "carv" === e
            ? null === g._ || void 0 === g._
              ? void 0
              : null === (a = g._.carv) || void 0 === a
              ? void 0
              : a.mainnetContractAddress
            : "hychain" === e
            ? null === g._ || void 0 === g._
              ? void 0
              : g._.hytopia.contractAddress
            : "aethir" === e
            ? null === g._ || void 0 === g._
              ? void 0
              : null === (s = g._.aethir) || void 0 === s
              ? void 0
              : s.mainnetContractAddress
            : "kip" === e
            ? null === g._ || void 0 === g._
              ? void 0
              : null === (n = g._.kip) || void 0 === n
              ? void 0
              : n.mainnetContractAddress
            : null === g._ || void 0 === g._
            ? void 0
            : null === (t = g._.aethir) || void 0 === t
            ? void 0
            : t.mainnetContractAddress;
        },
        N = async (e, t, a) => {
          var s;
          let n =
              null === g._ || void 0 === g._
                ? void 0
                : null === (s = g._.aethir) || void 0 === s
                ? void 0
                : s.mainnetAlchemyApiKey,
            l = w(t),
            r = "https://arb-mainnet.g.alchemy.com/nft/v3/"
              .concat(n, "/getNFTsForOwner?owner=")
              .concat(e, "&contractAddresses[]=")
              .concat(l, "&withMetadata=false&pageSize=100")
              .concat(a && "&pageKey=" + a);
          try {
            let a = await fetch(r),
              s = await a.json(),
              n = s.ownedNfts.map((e) => e.tokenId);
            if (null == s ? void 0 : s.pageKey) {
              let a = await N(e, t, null == s ? void 0 : s.pageKey);
              return n.concat(a);
            }
            return n;
          } catch (e) {
            return console.error("Error fetching NFTs:", e), [];
          }
        },
        b = async (e) => {
          try {
            var t;
            let a = await l({ address: e });
            return null == a
              ? void 0
              : null === (t = a.data) || void 0 === t
              ? void 0
              : t.session;
          } catch (e) {
            return console.error("Error fetching NFTs:", e), [];
          }
        },
        j = async (e, t) => {
          let a = w(e);
          try {
            let e = await r({ address: t, tokenAddress: a });
            return null == e ? void 0 : e.keys;
          } catch (e) {
            return console.error("Error fetching NFTs:", e), [];
          }
        };
      async function _(e, t) {
        let a = g._.aethir.alchemyApiKey,
          s = "https://eth-mainnet.g.alchemy.com/v2/"
            .concat(a, "/getNFTsForOwner?owner=")
            .concat(e, "&contractAddresses[]=")
            .concat(
              g._.iagent.testnetContractAddress,
              "&withMetadata=true&pageSize=100"
            )
            .concat(t && "&pageKey=" + t);
        try {
          let t = await fetch(s, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }),
            a = await t.json(),
            n = a.ownedNfts.map((e) => e.id.tokenId);
          if (a.pageKey) {
            let t = await _(e, a.pageKey);
            return n.concat(t);
          }
          return n;
        } catch (e) {
          return console.error("Failed to fetch transfers:", e), [];
        }
      }
      let A = async (e) => {
          var t, a, s;
          let n =
              null === g._ || void 0 === g._
                ? void 0
                : null === (t = g._.xai) || void 0 === t
                ? void 0
                : t.contractAddress,
            l =
              null === g._ || void 0 === g._
                ? void 0
                : null === (a = g._.xai) || void 0 === a
                ? void 0
                : a.alchemyApiKey,
            r = JSON.stringify({
              jsonrpc: "2.0",
              id: 0,
              method: "alchemy_getAssetTransfers",
              params: [
                {
                  fromBlock: "0x0",
                  fromAddress: "0x0000000000000000000000000000000000000000",
                  toAddress: e,
                  excludeZeroValue: !0,
                  category: ["erc721"],
                  withMetadata: !0,
                },
              ],
            });
          try {
            let e = await fetch(
                "https://arb-mainnet.g.alchemy.com/v2/".concat(l),
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: r,
                }
              ),
              t = await e.json(),
              a = [];
            for (let e of t.result.transfers)
              (null === (s = e.rawContract.address) || void 0 === s
                ? void 0
                : s.toLowerCase()) === (null == n ? void 0 : n.toLowerCase()) &&
                a.push(parseInt(e.erc721TokenId, 16).toString());
            return a;
          } catch (e) {
            return console.error("Error fetching NFTs:", e), [];
          }
        },
        C = async (e) => {
          try {
            let t = await o({ address: e });
            return null == t ? void 0 : t.data;
          } catch (e) {
            return console.error("Error fetching NFTs:", e), [];
          }
        },
        E = async (e) => {
          try {
            let t = await i({ address: e });
            return null == t ? void 0 : t.data;
          } catch (e) {
            return console.error("Error fetching NFTs:", e), [];
          }
        },
        T = async (e) => {
          try {
            let t = await d({ address: e });
            return null == t ? void 0 : t.data;
          } catch (e) {
            return console.error("Error fetching NFTs:", e), [];
          }
        },
        O = async (e) => {
          try {
            let t = await c({ address: e });
            return null == t ? void 0 : t.data;
          } catch (e) {
            return console.error("Error fetching NFTs:", e), [];
          }
        },
        k = async (e) => {
          try {
            let t = await m({ address: e });
            return null == t ? void 0 : t.data;
          } catch (e) {
            return console.error("Error fetching NFTs:", e), [];
          }
        },
        D = async (e) => {
          try {
            var t;
            let a = await fetch("/api/licenses/".concat(e), {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              }),
              s = await a.json();
            return (
              (null == s
                ? void 0
                : null === (t = s.licenses) || void 0 === t
                ? void 0
                : t.map((e) => e.toString())) || []
            );
          } catch (e) {
            return console.error("Failed to fetch transfers:", e), [];
          }
        },
        S = async (e) => {
          try {
            let t = await fetch(
              "https://explorer.fuse.io/api/v2/addresses/".concat(
                e,
                "/nft?type=ERC-1155"
              ),
              { method: "GET", headers: { "Content-Type": "application/json" } }
            );
            return (await t.json()).items
              .filter(
                (e) =>
                  "0xd4a5d16fa00d3057a4a96197db4bc1ec5a3a5910" ===
                  e.token.address.toLowerCase()
              )
              .reduce((e, t) => e + parseFloat(t.value), 0);
          } catch (e) {
            return console.error("Failed to fetch transfers:", e), 0;
          }
        },
        I = async (e) => {
          try {
            let t = await fetch(
              "https://api.openpad.io/api/node-ai-vps/nfts?address=".concat(e),
              { method: "GET", headers: { "Content-Type": "application/json" } }
            );
            return (await t.json()).map((e) => e.id.toString());
          } catch (e) {
            return console.error("Failed to fetch transfers:", e), [];
          }
        },
        P = async (e) => {
          try {
            let t = await p({ address: e });
            return null == t ? void 0 : t.data;
          } catch (e) {
            return console.error("Error fetching NFTs:", e), [];
          }
        },
        L = async (e) => {
          try {
            let t = await h({ address: e });
            return null == t ? void 0 : t.data;
          } catch (e) {
            return console.error("Error fetching NFTs:", e), [];
          }
        },
        F = async (e) => {
          let t = ""
            .concat(
              "https://oneclick-backend.nodeops.xyz",
              "/api/v1/kap/get_free_licenses?wallet_address="
            )
            .concat(e);
          try {
            let e = await fetch(t, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            });
            return (await e.json()).licenses.map((e) => e.toString());
          } catch (e) {
            return console.error("Failed to fetch transfers:", e), [];
          }
        },
        R = async (e) => {
          try {
            let t = await (0, v.JC)(e);
            return null == t ? void 0 : t.data;
          } catch (e) {
            return console.error("Error fetching NFTs:", e), [];
          }
        },
        U = async (e) => {
          try {
            let t = await x({ address: e });
            return null == t ? void 0 : t.data;
          } catch (e) {
            return console.error("Error fetching NFTs:", e), [];
          }
        },
        M = async (e) => {
          try {
            let t = await f({ address: e });
            return null == t ? void 0 : t.data;
          } catch (e) {
            return console.error("Error fetching NFTs:", e), [];
          }
        },
        B = async (e, t) =>
          "carv" === t || "aethir" === t || "kip" === t
            ? N(e, t, void 0)
            : "lumoz" === t
            ? b(e)
            : "hychain" === t
            ? j(t, e)
            : "xai-premium" === t || "xai" === t
            ? A(e)
            : "vemp" === t
            ? C(e)
            : "playai" === t
            ? E(e)
            : "rivalz" === t
            ? T(e)
            : "xprotocol" === t
            ? y(e)
            : "iagent" === t
            ? _(e)
            : "ringfence" === t
            ? O(e)
            : "sophon_commission" === t
            ? k(e)
            : "huddle" === t
            ? D(e)
            : "openpad" === t
            ? I(e)
            : "fuse" === t
            ? S(e)
            : "din" === t
            ? P(e)
            : "kap" === t
            ? F(e)
            : "mawari" === t
            ? R(e)
            : "hybrid" === t
            ? L(e)
            : "nodeops" === t
            ? U(e)
            : "zerog_alignment" === t
            ? M(e)
            : [],
        H = async (e, t) => {
          try {
            let a = await u({ pod_name: e, namespace: t });
            return null == a ? void 0 : a.data;
          } catch (e) {
            return console.error("Error generating burner wallet:", e), null;
          }
        },
        z = async (e, t, a) => ("aethir" === a ? H(e, t) : null);
    },
    23296: function (e, t, a) {
      a.d(t, {
        M: function () {
          return l;
        },
        m: function () {
          return n;
        },
      });
      var s = a(26420);
      let n = {
          name: "DumpOps Console",
          description: "DumpOps Console",
          url: "https://console.nodeops.network",
          icons: ["https://serve.nodeops.xyz/logo.png"],
        },
        l = {
          ethereum: s.RJ0,
          ethereumSepolia: s.Fox,
          ethereumHolesky: s.MF$,
          arbitrum: s.yXc,
          base: s.ueV,
          arbitrumSepolia: s.Zkw,
          bsc: s.eGR,
          fuse: s.RdO,
          lumoz: {
            id: 96370,
            name: "Lumoz Chain Mainnet",
            network: "lumoz",
            nativeCurrency: { name: "MOZ", symbol: "MOZ", decimals: 18 },
            rpcUrls: {
              default: { http: ["https://rpc.lumoz.org"] },
              public: { http: ["https://rpc.lumoz.org"] },
            },
            blockExplorers: {
              default: {
                name: "Lumoz Explorer",
                url: "https://scan.lumoz.info/",
              },
            },
          },
          abstract: {
            id: 2741,
            name: "Abstract",
            network: "abstract",
            nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
            rpcUrls: {
              default: { http: ["https://api.mainnet.abs.xyz"] },
              public: { http: ["https://api.mainnet.abs.xyz"] },
            },
            blockExplorers: {
              default: {
                name: "Abstract Explorer",
                url: "https://abscan.org/",
              },
            },
          },
          zerogAlignment: {
            id: 16601,
            name: "0G-Galileo-Testnet",
            network: "zerogalignment",
            nativeCurrency: { name: "0G", symbol: "OG", decimals: 18 },
            rpcUrls: {
              default: { http: ["https://evmrpc-testnet.0g.ai"] },
              public: { http: ["https://evmrpc-testnet.0g.ai"] },
            },
            blockExplorers: {
              default: {
                name: "0G Explorer",
                url: "https://chainscan-galileo.0g.ai",
              },
            },
          },
          nodeops: {
            id: 46290,
            name: "NodeOps Orchestrator Network",
            network: "NodeOpsOrchestratorNetwork",
            nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
            rpcUrls: {
              default: {
                http: [
                  "https://nodeops-orchestrator-network.calderachain.xyz/http",
                ],
              },
              public: {
                http: [
                  "https://nodeops-orchestrator-network.calderachain.xyz/http",
                ],
              },
            },
            blockExplorers: {
              default: {
                name: "DumpOps Explorer",
                url: "https://nodeops-orchestrator-network.calderaexplorer.xyz/",
              },
            },
            icon: "https://icons-assets.nodeops.xyz/icons/NodeOpsChain.png",
          },
        };
    },
  },
]);
