(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1055],
  {
    52010: function (e, s, t) {
      Promise.resolve().then(t.bind(t, 4398));
    },
    4398: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return _;
          },
        });
      var a = t(57437),
        r = t(38796),
        l = t(21099),
        i = t(49575),
        n = t(2265);
      let c = [
        { label: "Active Delegations", value: l.T7.ACTIVE_DELEGATION },
        { label: "My Delegations", value: l.T7.MY_DELEGATION },
      ];
      var d = (e) => {
          let {
            activeTab: s,
            setActiveTab: t,
            searchTerm: l,
            setSearchTerm: n,
          } = e;
          return (0, a.jsxs)("div", {
            className:
              "flex md:flex-row flex-col md:items-center justify-between gap-2",
            children: [
              (0, a.jsx)("div", {
                className:
                  "border border-primary/10 bg-background-dark p-1 rounded-xl w-fit",
                children: (0, a.jsx)(r.m, {
                  tabs: c,
                  activeTab: s,
                  setActiveTab: (e) => {
                    t(e);
                  },
                  id: "my-plan-filter",
                }),
              }),
              (0, a.jsx)("div", {
                className: "flex flex-wrap items-center gap-4",
                children: (0, a.jsxs)("div", {
                  className: "relative w-full md:w-80",
                  children: [
                    (0, a.jsx)("input", {
                      type: "text",
                      placeholder: "Search Chain name...",
                      value: l,
                      onChange: (e) => n(e.target.value),
                      className:
                        "w-full h-11 px-9 rounded-xl bg-background-dark border border-primary/10 placeholder:text-primary-disabled focus:outline-none",
                    }),
                    (0, a.jsx)(i.Z, {
                      size: 19,
                      className:
                        "absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/40",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        o = t(69767);
      let x = (0, t(67775).Z)("NodeAddIcon", [
        [
          "path",
          {
            d: "M13.5 19.5H13C10.1716 19.5 8.75736 19.5 7.87868 18.6213C7 17.7426 7 16.3284 7 13.5V11.5M7 10.5V11.5M7 11.5H13.5",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M13.5 11.5C13.5 10.3215 13.5 9.73223 13.8515 9.36612C14.2029 9 14.7686 9 15.9 9H17.1C18.2314 9 18.7971 9 19.1485 9.36612C19.5 9.73223 19.5 10.3215 19.5 11.5C19.5 12.6785 19.5 13.2678 19.1485 13.6339C18.7971 14 18.2314 14 17.1 14H15.9C14.7686 14 14.2029 14 13.8515 13.6339C13.5 13.2678 13.5 12.6785 13.5 11.5Z",
            stroke: "currentColor",
            key: "k1",
          },
        ],
        [
          "path",
          {
            d: "M13.5 19.5C13.5 18.3215 13.5 17.7322 13.8515 17.3661C14.2029 17 14.7686 17 15.9 17H17.1C18.2314 17 18.7971 17 19.1485 17.3661C19.5 17.7322 19.5 18.3215 19.5 19.5C19.5 20.6785 19.5 21.2678 19.1485 21.6339C18.7971 22 18.2314 22 17.1 22H15.9C14.7686 22 14.2029 22 13.8515 21.6339C13.5 21.2678 13.5 20.6785 13.5 19.5Z",
            stroke: "currentColor",
            key: "k2",
          },
        ],
        ["path", { d: "M7 2V8M10 5L4 5", stroke: "currentColor", key: "k3" }],
      ]);
      var m = t(49628),
        p = t(14438);
      let h = () =>
        (0, a.jsxs)("div", {
          className:
            "hidden md:grid grid-cols-12 gap-4 px-3 py-3 text-primary-disabled text-xs bg-greyShade/80 rounded-xl mb-2",
          children: [
            (0, a.jsx)("div", { className: "col-span-3", children: "Name" }),
            (0, a.jsx)("div", { className: "col-span-1", children: "Network" }),
            (0, a.jsx)("div", {
              className: "col-span-1",
              children: "Node Type",
            }),
            (0, a.jsx)("div", { className: "col-span-2", children: "Tags" }),
            (0, a.jsx)("div", {
              className: "col-span-2",
              children: "NFTs Delegated",
            }),
            (0, a.jsx)("div", { className: "col-span-3" }),
          ],
        });
      var u = (e) => {
          var s;
          let { delegation: t, setActiveTab: r } = e,
            { registerChain: i } = (0, m.q)(),
            n = () => {
              r(l.T7.MY_DELEGATION);
            },
            c = async () => {
              await i(t.chain_id),
                p.Am.success("Chain registered successfully"),
                n();
            };
          return (0, a.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "hidden md:grid grid-cols-12 gap-4 items-center bg-background-dark rounded-xl px-3 py-3",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-span-3",
                    children: (0, a.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center",
                          children: (0, a.jsx)("img", {
                            src: t.metadata.image,
                            alt: "Chain Icon",
                            className: "w-6 h-6",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("p", {
                              className: "text-sm font-medium",
                              children: t.metadata.display_name,
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-primary-disabled text-xs capitalize",
                              children: t.metadata.network,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-span-1",
                    children: (0, a.jsx)("p", {
                      className: "text-sm text-primary-disabled capitalize",
                      children:
                        null == t
                          ? void 0
                          : null === (s = t.metadata) || void 0 === s
                          ? void 0
                          : s.network,
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-span-1",
                    children: (0, a.jsx)("p", {
                      className: "text-sm text-primary-disabled capitalize",
                      children: t.metadata.node_type,
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-span-2",
                    children: (0, a.jsx)("div", {
                      className: "flex flex-wrap gap-2",
                      children: t.metadata.tags.map((e, s) =>
                        (0, a.jsx)(
                          "div",
                          {
                            className:
                              "px-2 py-0.5 border border-primary/10 rounded-full text-xs text-primary-disabled uppercase",
                            children: e,
                          },
                          s
                        )
                      ),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-span-2",
                    children: (0, a.jsx)("p", {
                      className: "text-sm text-primary-disabled capitalize",
                      children: null == t ? void 0 : t.total_nft_delegated,
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-span-3 flex justify-end",
                    children:
                      (null == t ? void 0 : t.my_nft_count) > 0
                        ? (0, a.jsx)(o.zx, {
                            size: "small",
                            variant: "link",
                            className: "h-8 !text-accent",
                            lefticon: t.is_registered
                              ? null
                              : (0, a.jsx)(x, {}),
                            onClick: c,
                            disabled: t.is_registered,
                            children: t.is_registered
                              ? "Registered"
                              : "Register",
                          })
                        : (0, a.jsx)(o.zx, {
                            size: "small",
                            variant: "link",
                            className:
                              "h-8 !text-primary/50 font-normal text-sm",
                            onClick: c,
                            disabled: 0 === t.my_nft_count || t.is_registered,
                            children: "NFT required to Delegate",
                          }),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "md:hidden bg-background-dark rounded-xl p-3",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-3 mb-3",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center",
                            children: (0, a.jsx)("img", {
                              src: t.metadata.image,
                              alt: "Chain Icon",
                              className: "w-6 h-6",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("p", {
                                className: "text-sm font-medium",
                                children: t.metadata.display_name,
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-primary-disabled text-xs capitalize",
                                children: t.metadata.network,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(o.zx, {
                        size: "small",
                        variant: "link",
                        className: "h-8 !text-accent",
                        lefticon: (0, a.jsx)(x, {}),
                        disabled: 0 === t.my_nft_count || t.is_registered,
                        children: "Register",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, a.jsx)("p", {
                            className: "text-xs text-primary-disabled",
                            children: "Chain",
                          }),
                          (0, a.jsxs)("p", {
                            className: "text-sm capitalize",
                            children: [" ", t.chain_symbol],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, a.jsx)("p", {
                            className: "text-xs text-primary-disabled",
                            children: "Node Type",
                          }),
                          (0, a.jsx)("p", {
                            className: "text-sm capitalize",
                            children: t.metadata.node_type,
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, a.jsx)("p", {
                            className: "text-xs text-primary-disabled mb-1",
                            children: "Tags",
                          }),
                          (0, a.jsx)("div", {
                            className: "flex flex-wrap gap-2",
                            children: t.metadata.tags.map((e, s) =>
                              (0, a.jsx)(
                                "div",
                                {
                                  className:
                                    "px-2 py-0.5 border border-primary/10 rounded-full text-xs text-primary-disabled",
                                  children: e,
                                },
                                s
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        f = t(19814),
        j = t(70414),
        N = t(63691),
        C = t(30874),
        y = t(27648);
      let k = () =>
        (0, a.jsxs)("div", {
          className:
            "hidden md:grid grid-cols-12 gap-4 px-3 py-3 text-primary-disabled text-xs bg-greyShade/80 rounded-xl mb-2",
          children: [
            (0, a.jsx)("div", { className: "col-span-2", children: "Name" }),
            (0, a.jsx)("div", { className: "col-span-1", children: "Network" }),
            (0, a.jsx)("div", {
              className: "col-span-1",
              children: "Node Type",
            }),
            (0, a.jsx)("div", { className: "col-span-2", children: "Tags" }),
            (0, a.jsx)("div", {
              className: "col-span-1",
              children: "Operator",
            }),
            (0, a.jsx)("div", {
              className: "col-span-1",
              children: "NFT Balance",
            }),
            (0, a.jsx)("div", {
              className: "col-span-2",
              children: "Delegated NFT",
            }),
            (0, a.jsx)("div", { className: "col-span-2" }),
          ],
        });
      var v = (e) => {
          var s;
          let { delegation: t } = e,
            r = t.delegated_nft_count > 0,
            { nodeDelegation: l, setAddOperatorModalOpen: i } = (0, N.q)(),
            [c, d] = (0, n.useState)(null),
            x = l.find((e) => e.chain_id === t.chain_id);
          return x
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "hidden md:grid grid-cols-12 gap-4 items-center bg-background-dark rounded-xl px-3 py-3",
                        children: [
                          (0, a.jsx)("div", {
                            className: "col-span-2",
                            children: (0, a.jsxs)("div", {
                              className: "flex items-center gap-3",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center",
                                  children: (0, a.jsx)("img", {
                                    src: x.metadata.image,
                                    alt: "Chain Icon",
                                    className: "w-6 h-6",
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsx)("p", {
                                      className: "text-sm font-medium",
                                      children: x.metadata.display_name,
                                    }),
                                    (0, a.jsx)("p", {
                                      className:
                                        "text-primary-disabled text-xs capitalize",
                                      children: x.metadata.network,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-span-1",
                            children: (0, a.jsx)("p", {
                              className:
                                "text-sm text-primary-disabled capitalize",
                              children:
                                null == x
                                  ? void 0
                                  : null === (s = x.metadata) || void 0 === s
                                  ? void 0
                                  : s.network,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-span-1",
                            children: (0, a.jsx)("p", {
                              className:
                                "text-sm text-primary-disabled capitalize",
                              children: x.metadata.node_type,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-span-2",
                            children: (0, a.jsx)("div", {
                              className: "flex flex-wrap gap-2",
                              children: x.metadata.tags.map((e, s) =>
                                (0, a.jsx)(
                                  "div",
                                  {
                                    className:
                                      "px-2 py-0.5 border border-primary/10 rounded-full text-xs text-primary-disabled uppercase",
                                    children: e,
                                  },
                                  s
                                )
                              ),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-span-1",
                            children: (0, a.jsxs)("div", {
                              className:
                                "flex items-center gap-2 cursor-pointer",
                              onClick: () => {
                                d(t), i(!0);
                              },
                              children: [
                                (0, a.jsx)("span", {
                                  className: "text-accent",
                                  children: t.operators.length,
                                }),
                                (0, a.jsx)(f.Z, {
                                  className: "w-4 h-4 text-accent",
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-span-1",
                            children: (0, a.jsx)("p", {
                              className: "text-sm",
                              children: t.nft_count,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-span-2",
                            children: (0, a.jsx)("p", {
                              className: "text-sm",
                              children: t.delegated_nft_count,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-span-2 flex justify-end",
                            children: r
                              ? (0, a.jsxs)("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    (0, a.jsx)(y.default, {
                                      href: t.metadata.delegation_link,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      children: (0, a.jsx)(o.zx, {
                                        size: "small",
                                        variant: "link",
                                        className: "h-8 !text-accent",
                                        righticon: (0, a.jsx)(j.Z, {
                                          size: 16,
                                        }),
                                        children: "Delegate",
                                      }),
                                    }),
                                    (0, a.jsx)(y.default, {
                                      href: t.metadata.delegation_link,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      children: (0, a.jsx)(o.zx, {
                                        size: "small",
                                        variant: "link",
                                        className: "h-8 !text-accent",
                                        righticon: (0, a.jsx)(j.Z, {
                                          size: 16,
                                        }),
                                        children: "Undelegate",
                                      }),
                                    }),
                                  ],
                                })
                              : t.operators.length > 0
                              ? (0, a.jsx)(y.default, {
                                  href: t.metadata.delegation_link,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: (0, a.jsx)(o.zx, {
                                    size: "small",
                                    variant: "link",
                                    className: "h-8 !text-accent",
                                    children: "Delegate",
                                  }),
                                })
                              : null,
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "md:hidden bg-background-dark rounded-xl p-3",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center",
                                    children: (0, a.jsx)("img", {
                                      src: x.metadata.image,
                                      alt: "Chain Icon",
                                      className: "w-6 h-6",
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("p", {
                                        className: "text-sm font-medium",
                                        children: x.metadata.display_name,
                                      }),
                                      (0, a.jsx)("p", {
                                        className:
                                          "text-primary-disabled text-xs capitalize  ",
                                        children: x.chain_symbol,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              r
                                ? (0, a.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, a.jsx)(o.zx, {
                                        size: "small",
                                        variant: "link",
                                        className: "h-8 !text-accent",
                                        righticon: (0, a.jsx)(j.Z, {
                                          size: 16,
                                        }),
                                        children: "Delegate",
                                      }),
                                      (0, a.jsx)(o.zx, {
                                        size: "small",
                                        variant: "link",
                                        className: "h-8 !text-accent",
                                        righticon: (0, a.jsx)(j.Z, {
                                          size: 16,
                                        }),
                                        children: "Undelegate",
                                      }),
                                    ],
                                  })
                                : (0, a.jsx)(o.zx, {
                                    size: "small",
                                    variant: "link",
                                    className: "h-8 !text-accent",
                                    children: "Delegate",
                                  }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  (0, a.jsx)("p", {
                                    className: "text-xs text-primary-disabled",
                                    children: "Node Type",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-sm capitalize",
                                    children: x.metadata.node_type,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-xs text-primary-disabled mb-1",
                                    children: "Tags",
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: x.metadata.tags.map((e, s) =>
                                      (0, a.jsx)(
                                        "div",
                                        {
                                          className:
                                            "px-2 py-0.5 border border-primary/10 rounded-full text-xs text-primary-disabled",
                                          children: e,
                                        },
                                        s
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  (0, a.jsx)("p", {
                                    className: "text-xs text-primary-disabled",
                                    children: "Operator",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "flex items-center gap-2 cursor-pointer",
                                    onClick: () => i(!0),
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "text-accent",
                                        children: t.operators.length,
                                      }),
                                      (0, a.jsx)(f.Z, {
                                        className: "w-4 h-4 text-accent",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  (0, a.jsx)("p", {
                                    className: "text-xs text-primary-disabled",
                                    children: "NFT Balance",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-sm",
                                    children: t.nft_count,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  (0, a.jsx)("p", {
                                    className: "text-xs text-primary-disabled",
                                    children: "Delegated NFT",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-sm",
                                    children: t.delegated_nft_count,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  c && (0, a.jsx)(C.iV, { delegation: c }),
                ],
              })
            : null;
        },
        g = t(35323),
        b = t(65726),
        _ = () => {
          let [e, s] = (0, n.useState)(!1),
            [t, r] = (0, n.useState)(l.T7.ACTIVE_DELEGATION),
            [i, c] = (0, n.useState)(""),
            {
              nodeDelegation: o,
              getNodeDelegation: x,
              myNodeDelegation: p,
              getMyNodeDelegation: f,
            } = (0, m.q)(),
            j = t === l.T7.MY_DELEGATION;
          (0, n.useEffect)(() => {
            s(!0), j ? f().finally(() => s(!1)) : x().finally(() => s(!1));
          }, [t]);
          let N = (0, n.useMemo)(
              () =>
                null == o
                  ? void 0
                  : o.filter((e) => {
                      var s, t, a;
                      return null === (a = e.metadata) || void 0 === a
                        ? void 0
                        : null === (t = a.display_name) || void 0 === t
                        ? void 0
                        : null === (s = t.toLowerCase()) || void 0 === s
                        ? void 0
                        : s.includes(i.toLowerCase());
                    }),
              [o, t, i]
            ),
            C = (0, n.useMemo)(
              () =>
                null == p
                  ? void 0
                  : p.filter((e) => {
                      var s, t;
                      return null === (t = e.chain_name) || void 0 === t
                        ? void 0
                        : null === (s = t.toLowerCase()) || void 0 === s
                        ? void 0
                        : s.includes(i.toLowerCase());
                    }),
              [p, i, t]
            );
          return (0, a.jsxs)("div", {
            className: "space-y-4",
            children: [
              (0, a.jsx)(d, {
                activeTab: t,
                setActiveTab: r,
                searchTerm: i,
                setSearchTerm: c,
              }),
              (0, a.jsx)("div", {
                className: "space-y-2",
                children: j
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(k, {}),
                        e
                          ? (0, a.jsx)(g.D, { bar: 12 })
                          : e || 0 !== C.length
                          ? C.map((e) =>
                              (0, a.jsx)(v, { delegation: e }, e.chain_id)
                            )
                          : (0, a.jsx)("div", {
                              className:
                                "col-span-full flex justify-center items-center !mt-20",
                              children: (0, a.jsx)(b.Z, {
                                type: "delegation",
                                size: "md",
                              }),
                            }),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(h, {}),
                        e
                          ? (0, a.jsx)(g.D, { bar: 12 })
                          : e || 0 !== N.length
                          ? N.map((e) =>
                              (0, a.jsx)(
                                u,
                                { delegation: e, setActiveTab: r },
                                e.chain_id
                              )
                            )
                          : (0, a.jsx)("div", {
                              className:
                                "col-span-full flex justify-center items-center !mt-20",
                              children: (0, a.jsx)(b.Z, {
                                type: "delegation",
                                size: "md",
                              }),
                            }),
                      ],
                    }),
              }),
            ],
          });
        };
    },
    65726: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return j;
        },
      });
      var a = t(57437),
        r = t(2265),
        l = t(61697),
        i = t(84744),
        n = t(65210),
        c = t(4936),
        d = t(26995),
        o = t(87684),
        x = t(59283),
        m = t(67609);
      let p = {
        login: {
          title: "You are not logged in",
          subtitle: "Please login to continue",
          href: "/login",
          actionText: "Login",
          icon: l.Z,
        },
        refer: {
          title: "Not There Yet",
          subtitle:
            "Earn Node point to start referring your friends and get sweet multipliers",
          href: "/deployNode",
          actionText: "Deploy Node",
          icon: i.Z,
        },
        nodefolio: {
          title: "No deployed nodes",
          subtitle: "You have not deployed any nodes yet",
          icon: n.Z,
          href: "/deployNode",
          actionText: "Deploy Node",
        },
        default: {
          title: "No data found",
          subtitle: "There is no data to display",
          icon: i.Z,
          href: "/deployNode",
          actionText: "Deploy Node",
        },
        launchpad: {
          title: "No nodes found",
          subtitle: "No nodes found",
          icon: c.Z,
          href: "/launchpad",
          actionText: "",
        },
        governance: {
          title: "No governance found",
          subtitle: "No governance found",
          icon: d.Z,
          href: "/governance",
          actionText: "",
        },
        bootstrap: {
          title: "No Bootstrapping Event",
          subtitle: "No Bootstrapping Event",
          icon: d.Z,
          href: "/bootstrap-event",
          actionText: "",
        },
        deployment: {
          title: "No nodes found",
          subtitle: "Looks like there aren’t any nodes available at the moment",
          icon: o.Z,
          href: "/deployNode",
          actionText: "",
        },
        delegation: {
          title: "No delegation found",
          subtitle:
            "Looks like there aren’t any delegation available at the moment",
          icon: x.Z,
          href: "/node-delegation",
          actionText: "",
        },
        liquidNodePool: {
          title: "No vaults found",
          subtitle: "Looks like there aren’t any vaults",
          icon: m.Z,
          href: "/liquidNodePool",
          actionText: "",
        },
      };
      var h = t(99376),
        u = t(69767),
        f = t(63691),
        j = (e) => {
          let { type: s, size: t = "md", titleText: l, subtitleText: i } = e,
            { title: n, subtitle: c, href: d, actionText: o, icon: x } = p[s],
            m = (0, h.useRouter)(),
            { setLoginModalOpen: j } = (0, f.q)();
          return (0, a.jsxs)("div", {
            className: "flex flex-col items-center justify-center h-full",
            children: [
              (0, a.jsx)("div", {
                className:
                  "flex justify-center items-center rounded-full ".concat(
                    "sm" === t ? "" : "border-primary/10 border p-3"
                  ),
                children: (0, a.jsx)("div", {
                  className:
                    "flex justify-center items-center rounded-full border-primary/30 border p-3",
                  children: (0, a.jsx)("div", {
                    className: "flex justify-center items-center gap-2 ".concat(
                      "sm" === t ? "w-20 h-20" : "w-24 h-24",
                      " border-primary/70 border rounded-full"
                    ),
                    children: r.createElement(x, {
                      className: "sm" === t ? "w-10 h-10" : "w-12 h-12",
                    }),
                  }),
                }),
              }),
              (0, a.jsx)("h3", {
                className: "text-lg font-semibold mt-4",
                children: l || n,
              }),
              (0, a.jsx)("p", {
                className:
                  "text-sm mt-1 text-primary-disabled max-w-sm text-center",
                children: i || c,
              }),
              o &&
                (0, a.jsx)(u.zx, {
                  variant: "link",
                  className: "!text-accent mt-2",
                  onClick: () => {
                    "login" === s ? j(!0) : m.push(d);
                  },
                  children: o,
                }),
            ],
          });
        };
    },
    87684: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return a;
        },
      });
      let a = (0, t(67775).Z)("Blockchain01Icon", [
        [
          "path",
          {
            d: "M12 21C12.2792 21 12.5388 20.8728 13.0579 20.6184L17.2304 18.5737C19.0768 17.6688 20 17.2164 20 16.5V7.5M12 21C11.7208 21 11.4612 20.8728 10.9421 20.6184L6.76956 18.5737C4.92319 17.6688 4 17.2164 4 16.5V7.5M12 21V12",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M10.9421 3.38159C11.4612 3.1272 11.7208 3 12 3C12.2792 3 12.5388 3.1272 13.0579 3.38159L17.2304 5.42635C19.0768 6.33116 20 6.78357 20 7.5C20 8.21643 19.0768 8.66884 17.2304 9.57365L13.0579 11.6184C12.5388 11.8728 12.2792 12 12 12C11.7208 12 11.4612 11.8728 10.9421 11.6184L6.76956 9.57365C4.92319 8.66884 4 8.21643 4 7.5C4 6.78357 4.92319 6.33116 6.76956 5.42635L10.9421 3.38159Z",
            stroke: "currentColor",
            key: "k1",
          },
        ],
      ]);
    },
    65210: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return a;
        },
      });
      let a = (0, t(67775).Z)("DashboardCircleRemoveIcon", [
        [
          "circle",
          {
            cx: "6.25",
            cy: "6.25",
            r: "4.25",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "circle",
          {
            cx: "17.75",
            cy: "17.75",
            r: "4.25",
            stroke: "currentColor",
            key: "k1",
          },
        ],
        [
          "circle",
          {
            cx: "6.25",
            cy: "17.75",
            r: "4.25",
            stroke: "currentColor",
            key: "k2",
          },
        ],
        ["path", { d: "M22 6.00013L14 6", stroke: "currentColor", key: "k3" }],
      ]);
    },
    59283: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return a;
        },
      });
      let a = (0, t(67775).Z)("Database02Icon", [
        [
          "ellipse",
          {
            cx: "12",
            cy: "5",
            rx: "8",
            ry: "3",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12",
            stroke: "currentColor",
            key: "k1",
          },
        ],
        [
          "path",
          {
            d: "M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5",
            stroke: "currentColor",
            key: "k2",
          },
        ],
        ["path", { d: "M8 8V10", stroke: "currentColor", key: "k3" }],
        ["path", { d: "M8 15V17", stroke: "currentColor", key: "k4" }],
      ]);
    },
    26995: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return a;
        },
      });
      let a = (0, t(67775).Z)("File02Icon", [
        ["path", { d: "M8 17H16", stroke: "currentColor", key: "k0" }],
        ["path", { d: "M8 13H12", stroke: "currentColor", key: "k1" }],
        [
          "path",
          {
            d: "M13 2.5V3C13 5.82843 13 7.24264 13.8787 8.12132C14.7574 9 16.1716 9 19 9H19.5M20 10.6569V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V9.45584C4 6.21082 4 4.58831 4.88607 3.48933C5.06508 3.26731 5.26731 3.06508 5.48933 2.88607C6.58831 2 8.21082 2 11.4558 2C12.1614 2 12.5141 2 12.8372 2.11401C12.9044 2.13772 12.9702 2.165 13.0345 2.19575C13.3436 2.34355 13.593 2.593 14.0919 3.09188L18.8284 7.82843C19.4065 8.40649 19.6955 8.69552 19.8478 9.06306C20 9.4306 20 9.83935 20 10.6569Z",
            stroke: "currentColor",
            key: "k2",
          },
        ],
      ]);
    },
    84744: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return a;
        },
      });
      let a = (0, t(67775).Z)("GiftIcon", [
        [
          "path",
          {
            d: "M4 11V15C4 18.2998 4 19.9497 5.02513 20.9749C6.05025 22 7.70017 22 11 22H13C16.2998 22 17.9497 22 18.9749 20.9749C20 19.9497 20 18.2998 20 15V11",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M3 9C3 8.25231 3 7.87846 3.20096 7.6C3.33261 7.41758 3.52197 7.26609 3.75 7.16077C4.09808 7 4.56538 7 5.5 7H18.5C19.4346 7 19.9019 7 20.25 7.16077C20.478 7.26609 20.6674 7.41758 20.799 7.6C21 7.87846 21 8.25231 21 9C21 9.74769 21 10.1215 20.799 10.4C20.6674 10.5824 20.478 10.7339 20.25 10.8392C19.9019 11 19.4346 11 18.5 11H5.5C4.56538 11 4.09808 11 3.75 10.8392C3.52197 10.7339 3.33261 10.5824 3.20096 10.4C3 10.1215 3 9.74769 3 9Z",
            stroke: "currentColor",
            key: "k1",
          },
        ],
        [
          "path",
          {
            d: "M6 3.78571C6 2.79949 6.79949 2 7.78571 2H8.14286C10.2731 2 12 3.7269 12 5.85714V7H9.21429C7.43908 7 6 5.56091 6 3.78571Z",
            stroke: "currentColor",
            key: "k2",
          },
        ],
        [
          "path",
          {
            d: "M18 3.78571C18 2.79949 17.2005 2 16.2143 2H15.8571C13.7269 2 12 3.7269 12 5.85714V7H14.7857C16.5609 7 18 5.56091 18 3.78571Z",
            stroke: "currentColor",
            key: "k3",
          },
        ],
        ["path", { d: "M12 11L12 22", stroke: "currentColor", key: "k4" }],
      ]);
    },
    70414: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return a;
        },
      });
      let a = (0, t(67775).Z)("LinkSquare02Icon", [
        [
          "path",
          {
            d: "M11.0988 3.00012C7.4498 3.00669 5.53898 3.09629 4.31783 4.31764C3 5.63568 3 7.75704 3 11.9997C3 16.2424 3 18.3638 4.31783 19.6818C5.63565 20.9999 7.75668 20.9999 11.9987 20.9999C16.2407 20.9999 18.3617 20.9999 19.6796 19.6818C20.9007 18.4605 20.9903 16.5493 20.9969 12.8998",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M20.5561 3.49612L11.0488 13.0586M20.5561 3.49612C20.0622 3.00151 16.7345 3.04761 16.031 3.05762M20.5561 3.49612C21.0501 3.99074 21.0041 7.32273 20.9941 8.02714",
            stroke: "currentColor",
            key: "k1",
          },
        ],
      ]);
    },
    61697: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return a;
        },
      });
      let a = (0, t(67775).Z)("Login01Icon", [
        [
          "path",
          {
            d: "M14 3.09502C13.543 3.03241 13.0755 3 12.6 3C7.29807 3 3 7.02944 3 12C3 16.9706 7.29807 21 12.6 21C13.0755 21 13.543 20.9676 14 20.905",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M13.5 14.5C12.9943 14.0085 11 12.7002 11 12M13.5 9.5C12.9943 9.99153 11 11.2998 11 12M11 12L21 12",
            stroke: "currentColor",
            key: "k1",
          },
        ],
      ]);
    },
    67609: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return a;
        },
      });
      let a = (0, t(67775).Z)("PoolIcon", [
        [
          "path",
          {
            d: "M22 21H21C19.5486 21 18.278 20.1411 18 19C17.722 20.1411 16.4514 21 15 21C13.5486 21 12.278 20.1411 12 19C11.722 20.1411 10.4514 21 9 21C7.54863 21 6.27796 20.1411 6 19C5.72204 20.1411 4.45137 21 3 21H2",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M19 3L18.7351 3.0883C17.4151 3.52832 16.755 3.74832 16.3775 4.2721C16 4.79587 16 5.49159 16 6.88304L16 17",
            stroke: "currentColor",
            key: "k1",
          },
        ],
        [
          "path",
          {
            d: "M11 3L10.7351 3.0883C9.41505 3.52832 8.75503 3.74832 8.37752 4.2721C8 4.79587 8 5.49159 8 6.88304L8 17",
            stroke: "currentColor",
            key: "k2",
          },
        ],
        [
          "path",
          { d: "M8 7H16M8 11H16M8 15H16", stroke: "currentColor", key: "k3" },
        ],
      ]);
    },
    49575: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return a;
        },
      });
      let a = (0, t(67775).Z)("Search01Icon", [
        ["path", { d: "M17.5 17.5L22 22", stroke: "currentColor", key: "k0" }],
        [
          "path",
          {
            d: "M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z",
            stroke: "currentColor",
            key: "k1",
          },
        ],
      ]);
    },
    4936: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return a;
        },
      });
      let a = (0, t(67775).Z)("ZapIcon", [
        [
          "path",
          {
            d: "M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65083L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10188C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83775 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9822 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4782 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z",
            stroke: "currentColor",
            key: "k0",
          },
        ],
      ]);
    },
  },
  function (e) {
    e.O(
      0,
      [
        3814, 5501, 3010, 4350, 9799, 6262, 9228, 8933, 1293, 9242, 3080, 3448,
        1984, 8129, 3282, 4585, 5626, 1237, 6337, 1525, 874, 2971, 5030, 1744,
      ],
      function () {
        return e((e.s = 52010));
      }
    ),
      (_N_E = e.O());
  },
]);
