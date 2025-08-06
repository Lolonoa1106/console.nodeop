"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1525],
  {
    43033: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return k;
        },
      });
      var t = a(57437),
        i = a(19814),
        l = a(12310),
        r = a(2265),
        n = a(69767),
        c = a(87148),
        o = a(21099),
        d = (e) => {
          let {
              value: s,
              onChange: a,
              onApply: i,
              appliedDiscount: l,
              actualPrice: d,
              isPromoLoading: x,
            } = e,
            [m, h] = (0, r.useState)(!1),
            p = async () => {
              h(!0),
                await i(),
                (0, c.B)({
                  action: o.At.DEPLOY_NODE_APPLY_PROMO_CODE,
                  category: o.Vx.DEPLOY_NODE,
                  label: o._R.DEPLOY_NODE,
                });
            };
          return (0, t.jsxs)("div", {
            className: "space-y-1 mt-6",
            children: [
              (0, t.jsx)("h2", {
                className: "text-white",
                children: "Promo Code",
              }),
              (0, t.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, t.jsx)(n.II, {
                    value: s,
                    onChange: (e) => a(e.target.value),
                    placeholder: "Enter promo code here",
                    wrapperClassName: "flex-1",
                  }),
                  (0, t.jsx)(n.zx, {
                    onClick: p,
                    disabled: x,
                    children: "Apply",
                  }),
                ],
              }),
              l > 0 &&
                (0, t.jsxs)("p", {
                  className: "text-green-500 text-xs font-mono",
                  children: [((l / d) * 100).toFixed(1), "% OFF Applied"],
                }),
              0 === l &&
                !x &&
                m &&
                (0, t.jsx)("p", {
                  className: "text-red-500 text-xs font-mono",
                  children: "Invalid promo code",
                }),
            ],
          });
        },
        x = a(49628),
        m = function (e) {
          let {
              nodePrice: s,
              discount: a,
              totalPayableAmount: i,
              handleCompletePurchase: l,
              isLoading: r,
              isEnoughCreditForPurchase: c,
              remainingCredit: o,
              isRenewal: d,
              solanaAddress: m,
              purchaseNodeCount: h,
            } = e,
            {
              creditPoints: p,
              isBootstrapPurchaseText: u,
              comingFromSale: k,
              isBeamable: f,
            } = (0, x.q)(),
            y = p - i;
          return (0, t.jsxs)("div", {
            className: "space-y-4 mt-6",
            children: [
              y > i &&
                (0, t.jsxs)("div", {
                  className:
                    "flex justify-between items-center border-b border-primary/10 pb-2",
                  children: [
                    (0, t.jsx)("span", {
                      className: "text-primary-disabled",
                      children: "Credits After Purchase",
                    }),
                    (0, t.jsxs)("span", {
                      children: ["$", null == y ? void 0 : y.toFixed(2)],
                    }),
                  ],
                }),
              (0, t.jsxs)("div", {
                className: "space-y-2",
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                      (0, t.jsx)("span", {
                        className: "text-primary-disabled",
                        children: "Node Price",
                      }),
                      (0, t.jsxs)("span", { children: ["$", s] }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                      (0, t.jsx)("span", {
                        className: "text-primary-disabled",
                        children: "Discount",
                      }),
                      (0, t.jsxs)("span", {
                        className: "text-green-500",
                        children: ["-$", null == a ? void 0 : a.toFixed(2)],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                      (0, t.jsx)("span", {
                        className: "text-primary-disabled",
                        children: "Total Amount",
                      }),
                      (0, t.jsxs)("span", {
                        children: ["$", null == i ? void 0 : i.toFixed(2)],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(n.zx, {
                showloading: r,
                disabled: r || (f && !m) || (f && (0 > Number(h) || !h)),
                className: "w-full",
                onClick: l,
                children: c
                  ? "Use $"
                      .concat(i, " credits to ")
                      .concat(u || k ? "purchase" : d ? "renew" : "deploy")
                  : Number(o) > 0
                  ? "Add $"
                      .concat(o, " and ")
                      .concat(u || k ? "purchase" : d ? "renew" : "deploy")
                  : 0 === i
                  ? d
                    ? "Renew Now"
                    : "Deploy Now"
                  : "Purchase Now",
              }),
            ],
          });
        },
        h = a(35323),
        p = a(63691),
        u = (e) => {
          let { quantity: s, setQuantity: a } = e,
            {
              availableNodesToPurchase: i,
              setPayloadInfo: l,
              payloadInfo: r,
              isBeamable: n,
            } = (0, p.q)();
          return (0, t.jsxs)("div", {
            className: "flex flex-col gap-2 mt-3",
            children: [
              (0, t.jsx)("p", { children: "No of Nodes" }),
              (0, t.jsxs)("div", {
                className:
                  "h-10 w-full flex items-center justify-between bg-background-dark/80 border border-primary/10 rounded-xl",
                children: [
                  (0, t.jsx)("button", {
                    onClick: () => {
                      var e;
                      a((e) => Math.max(1, e - 1)),
                        l({
                          ...r,
                          total_amount:
                            (null == r
                              ? void 0
                              : null === (e = r.order_items[0]) || void 0 === e
                              ? void 0
                              : e.price) * (s < 1 ? 1 : s - 1),
                          order_items: [
                            {
                              ...(null == r ? void 0 : r.order_items[0]),
                              quantity: s < 1 ? 1 : s - 1,
                            },
                          ],
                        });
                    },
                    className:
                      "w-10 h-full flex items-center justify-center text-2xl hover:bg-opacity-80 transition-all",
                    children: "-",
                  }),
                  (0, t.jsx)("input", {
                    type: "number",
                    value: s,
                    onChange: (e) => {
                      var s, t;
                      let n = e.target.value;
                      if ("" === n) {
                        a("");
                        return;
                      }
                      let c = Number(n);
                      !isNaN(c) &&
                        (c > i ||
                          (c < 1
                            ? (a(1),
                              l({
                                ...r,
                                total_amount:
                                  (null == r
                                    ? void 0
                                    : null === (s = r.order_items[0]) ||
                                      void 0 === s
                                    ? void 0
                                    : s.price) * 1,
                                order_items: [
                                  {
                                    ...(null == r ? void 0 : r.order_items[0]),
                                    quantity: 1,
                                  },
                                ],
                              }))
                            : (a(c),
                              l({
                                ...r,
                                total_amount:
                                  (null == r
                                    ? void 0
                                    : null === (t = r.order_items[0]) ||
                                      void 0 === t
                                    ? void 0
                                    : t.price) * c,
                                order_items: [
                                  {
                                    ...(null == r ? void 0 : r.order_items[0]),
                                    quantity: c,
                                  },
                                ],
                              }))));
                    },
                    onBlur: () => {
                      "" === s && a(1);
                    },
                    min: "1",
                    max: i,
                    className:
                      "w-full h-full text-center flex items-center justify-center text-sm focus:outline-none bg-transparent",
                  }),
                  (0, t.jsx)("button", {
                    onClick: () => {
                      if (s < i) {
                        var e;
                        a((e) => e + 1),
                          l({
                            ...r,
                            total_amount:
                              (null == r
                                ? void 0
                                : null === (e = r.order_items[0]) ||
                                  void 0 === e
                                ? void 0
                                : e.price) *
                              (s + 1),
                            order_items: [
                              {
                                ...(null == r ? void 0 : r.order_items[0]),
                                quantity: s + 1,
                              },
                            ],
                          });
                      }
                    },
                    className:
                      "w-10 h-full flex items-center justify-center text-sm hover:bg-opacity-80 transition-all",
                    children: "+",
                  }),
                ],
              }),
              n &&
                (0, t.jsx)("p", {
                  className: "text-yellow-500 text-xs",
                  children:
                    "20-license purchase limit per wallet, unless whitelisted.",
                }),
            ],
          });
        },
        k = (e) => {
          let {
              onAddFunds: s,
              promoCode: a,
              setPromoCode: r,
              handleApplyPromo: c,
              appliedDiscount: o,
              selectedOffer: x,
              handleSelectOffer: k,
              nodePrice: f,
              isPromoLoading: y,
              totalPayableAmount: j,
              handleCompletePurchase: b,
              isLoading: N,
              purchaseNodeCount: v,
              setPurchaseNodeCount: g,
              isRenewal: w,
              allowAutoRenew: E,
              isAutoRenew: _,
              setIsAutoRenew: C,
              solanaAddress: D,
              setSolanaAddress: A,
            } = e,
            { creditPoints: P, comingFromSale: F, isBeamable: S } = (0, p.q)(),
            B = P >= f,
            V = (j - P).toFixed(2);
          return (0, t.jsxs)("div", {
            className: "mt-5",
            children: [
              (0, t.jsxs)("div", {
                className: "bg-primary/5 p-2 rounded-lg text-sm font-medium",
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex items-center justify-between ",
                    children: [
                      (0, t.jsx)("div", {
                        className: "",
                        children: "Credit Balance",
                      }),
                      (0, t.jsxs)("div", {
                        className: "font-mono",
                        children: ["$", null == P ? void 0 : P.toFixed(2)],
                      }),
                    ],
                  }),
                  !B &&
                    (0, t.jsxs)("div", {
                      onClick: s,
                      className:
                        "mt-2 flex items-center justify-between bg-red-500/20 rounded-lg px-2 py-2 cursor-pointer",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, t.jsx)(l.Z, {
                              className: "text-red-500",
                              size: 20,
                            }),
                            (0, t.jsx)("span", {
                              className: "text-white text-xs",
                              children: "You have insufficient balance",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex items-center gap-1 text-accent",
                          children: [
                            (0, t.jsx)("span", {
                              className: "text-xs",
                              children: "Add Credits ",
                            }),
                            (0, t.jsx)(i.Z, {
                              className: "text-accent",
                              size: 16,
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              S &&
                A &&
                (0, t.jsxs)("div", {
                  className: "mt-4",
                  children: [
                    (0, t.jsxs)("h2", {
                      className: "text-white",
                      children: [
                        "Solana address",
                        (0, t.jsx)("span", {
                          className: "text-accent",
                          children: "*",
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: "flex items-center gap-2",
                      children: (0, t.jsx)(n.II, {
                        value: D,
                        onChange: (e) => A(e.target.value),
                        placeholder: "Paste your Solana wallet address here",
                        wrapperClassName: "flex-1",
                      }),
                    }),
                    (0, t.jsx)("p", {
                      className: "text-primary/40 text-xs mt-1",
                      children:
                        "This will be required to airdrop the NFT to your solana wallet",
                    }),
                  ],
                }),
              F && g && (0, t.jsx)(u, { quantity: v || 0, setQuantity: g }),
              (0, t.jsx)(d, {
                value: a,
                onChange: r,
                onApply: c,
                appliedDiscount: o,
                actualPrice: f,
                isPromoLoading: y,
              }),
              E &&
                !F &&
                (0, t.jsxs)("div", {
                  className:
                    "text-primary-disabled mt-6 flex items-center justify-between",
                  children: [
                    (0, t.jsx)("p", {
                      children:
                        "Enable to automatically renew for this subscription",
                    }),
                    (0, t.jsxs)("label", {
                      className: "toggle-label !block ",
                      children: [
                        (0, t.jsx)("input", {
                          type: "checkbox",
                          className: "toggle-checkbox",
                          checked: _,
                          onChange: () => (null == C ? void 0 : C(!_)),
                        }),
                        (0, t.jsx)("span", {
                          className: "toggle-label-table-span",
                          children: (0, t.jsx)("i", {}),
                        }),
                      ],
                    }),
                  ],
                }),
              y &&
                (0, t.jsx)("div", {
                  className: "flex flex-col gap-2 mt-6",
                  children: (0, t.jsx)(h.D, { bar: 3 }),
                }),
              !y &&
                (0, t.jsx)(t.Fragment, {
                  children: (0, t.jsx)(m, {
                    nodePrice: f,
                    discount: o,
                    totalPayableAmount: j,
                    handleCompletePurchase: b,
                    isLoading: N,
                    isEnoughCreditForPurchase: B,
                    remainingCredit: V,
                    isRenewal: w,
                    solanaAddress: D,
                    purchaseNodeCount: v,
                  }),
                }),
            ],
          });
        };
    },
    68603: function (e, s, a) {
      var t = a(57437),
        i = a(2265),
        l = a(30166),
        r = a(31328),
        n = a(99376);
      let c = (0, l.default)(
        () => Promise.all([a.e(4705), a.e(7882)]).then(a.t.bind(a, 7882, 23)),
        { loadableGenerated: { webpack: () => [7882] }, ssr: !1 }
      );
      s.Z = (e) => {
        let { clearState: s } = e,
          [a, l] = (0, i.useState)(3),
          o = (0, n.useRouter)();
        return (
          (0, i.useEffect)(() => {
            if (a > 1) {
              let e = setTimeout(() => {
                l((e) => e - 1);
              }, 1e3);
              return () => clearTimeout(e);
            }
            1 === a &&
              setTimeout(() => {
                s(), o.push("/dashboard");
              }, 1500);
          }, [a, o]),
          (0, t.jsxs)("div", {
            className: "mt-5 flex flex-col items-center justify-center",
            children: [
              (0, t.jsx)("div", {
                className: "w-36",
                children: (0, t.jsx)(c, { animationData: r }),
              }),
              (0, t.jsx)("p", {
                className: "text-2xl font-semibold",
                children: "Payment Complete",
              }),
              (0, t.jsxs)("p", {
                className: "text-primary-disabled text-center mt-2",
                children: [
                  "Your payment was successful!",
                  (0, t.jsx)("br", {}),
                  ((e) => {
                    let s = "";
                    for (let a = 3; a >= e; a--) s += a + (a > e ? ".." : "");
                    return "Taking you to the deployment screen in ".concat(s);
                  })(a),
                ],
              }),
            ],
          })
        );
      };
    },
    31328: function (e) {
      e.exports = JSON.parse(
        '{"nm":"HDFC Success","ddd":0,"h":512,"w":512,"meta":{"g":"LottieFiles AE 1.0.0"},"layers":[{"ty":4,"nm":"check","sr":1,"st":0,"op":240,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[256,256,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-82.5,4.5],[-31,55],[73,-52.5]]},"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":1,"y":0.076},"i":{"x":0.667,"y":1},"s":[0],"t":60},{"s":[100],"t":85}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":0,"k":0,"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":1},{"ty":4,"nm":"Shape Layer 2","sr":1,"st":0,"op":240,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.656,"y":0.872},"i":{"x":0,"y":0.98},"s":[0,0,100],"t":20},{"s":[150,150,100],"t":60}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[256,257.86,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":3,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[236,236],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.1725,0.8549,0.5804],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,-3],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":2},{"ty":4,"nm":"Shape Layer 1","sr":1,"st":0,"op":240,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.477,"y":0.587},"i":{"x":0,"y":0.999},"s":[0,0,100],"t":10},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[150,150,100],"t":50},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[150,150,100],"t":76},{"s":[210,210,100],"t":123}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[256,257.86,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.912,"y":0.073},"i":{"x":0.626,"y":0.729},"s":[100],"t":76},{"s":[0],"t":119}],"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":3,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[236,236],"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.7843,0.9451,0.8784],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,-3],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":3}],"v":"4.8.0","fr":60,"op":130,"ip":0,"assets":[]}'
      );
    },
  },
]);
