(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2608],
  {
    84976: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 53539));
    },
    53539: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return T;
          },
        });
      var a = r(57437),
        s = r(2265),
        l = r(2570),
        o = r(25082);
      let n = (0, r(67775).Z)("CircleLock01Icon", [
        [
          "path",
          {
            d: "M5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15Z",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M16.5 9.5V6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5V9.5",
            stroke: "currentColor",
            key: "k1",
          },
        ],
        ["path", { d: "M12 15H12.009", stroke: "currentColor", key: "k2" }],
      ]);
      var i = r(37179),
        d = r(99376),
        c = r(63691),
        u = r(27648),
        m = r(64060),
        p = (e) => {
          var t, r, s, p, x, C, h, y, k, f, b, v, g, N, j, w, Z;
          let { node: M } = e,
            L = i.Zr.includes(
              (null == M
                ? void 0
                : null === (r = M.metadata) || void 0 === r
                ? void 0
                : null === (t = r.chain) || void 0 === t
                ? void 0
                : t.toLowerCase()) || ""
            ),
            I = (0, d.useRouter)(),
            { setReminderModalOpen: S } = (0, c.q)(),
            T =
              (null === (s = M.metadata) || void 0 === s
                ? void 0
                : s.status) === "active",
            V =
              (null == M
                ? void 0
                : null === (p = M.metadata) || void 0 === p
                ? void 0
                : p.chain) === "nodeops";
          null == M ||
            null === (x = M.metadata) ||
            void 0 === x ||
            x.market_share_percentage;
          let H =
              (null == M
                ? void 0
                : null === (C = M.metadata) || void 0 === C
                ? void 0
                : C.categories) || [],
            _ = H[0],
            z = H.slice(1),
            D = H.length > 1;
          return (0, a.jsxs)("div", {
            className: "flex flex-col border-[0.5px] hover:border-primary/40 "
              .concat(
                V ? "border-accent/50" : "border-primary/10",
                " rounded-xl bg-background-dark p-1 group duration-300 cursor-pointer hover:translate-y-[-2px] "
              )
              .concat(L ? "bg-texture" : ""),
            onClick: () => {
              T && I.push("/deployNode/".concat(M.name));
            },
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center justify-between p-2",
                children: [
                  (0, a.jsx)("p", {
                    className: "text-primary-disabled capitalize text-sm",
                    children:
                      null == M
                        ? void 0
                        : null === (h = M.metadata) || void 0 === h
                        ? void 0
                        : h.network,
                  }),
                  M.metadata.tags.includes("new") &&
                    T &&
                    (0, a.jsx)("span", {
                      className:
                        "inline-flex shrink-0 items-center justify-center min-w-[24px] px-1.5 h-5 font-medium text-xs rounded-full bg-accent text-dark relative z-10",
                      children: "New",
                    }),
                  !T &&
                    (0, a.jsxs)("button", {
                      onClick: () => S(!0),
                      className: "flex items-center gap-1 text-xs text-accent",
                      children: [
                        (0, a.jsx)(l.Z, { className: "w-4 h-4" }),
                        (0, a.jsx)("p", { children: "Notify Me" }),
                      ],
                    }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col rounded-lg px-3 py-3 h-36 ".concat(
                  L ? "bg-greyShade/80" : "bg-greyShade"
                ),
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-2 h-14",
                    children: [
                      (0, a.jsx)("img", {
                        src:
                          null == M
                            ? void 0
                            : null === (y = M.metadata) || void 0 === y
                            ? void 0
                            : y.logoUrl,
                        className: "w-12",
                      }),
                      L
                        ? (0, a.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "font-medium text-lg text-gold-gradient",
                                children:
                                  null == M
                                    ? void 0
                                    : null === (k = M.metadata) || void 0 === k
                                    ? void 0
                                    : k.displayName,
                              }),
                              (0, a.jsx)("p", {
                                className: "text-xs text-gold-gradient -mt-1",
                                children: (0, i.x4)(
                                  (null == M
                                    ? void 0
                                    : null === (b = M.metadata) || void 0 === b
                                    ? void 0
                                    : null === (f = b.chain) || void 0 === f
                                    ? void 0
                                    : f.toLowerCase()) || ""
                                ),
                              }),
                            ],
                          })
                        : (0, a.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                              (0, a.jsx)("p", {
                                className: "font-medium text-lg",
                                children:
                                  null == M
                                    ? void 0
                                    : null === (v = M.metadata) || void 0 === v
                                    ? void 0
                                    : v.displayName,
                              }),
                              i.qd.includes(
                                (null == M
                                  ? void 0
                                  : null === (N = M.metadata) || void 0 === N
                                  ? void 0
                                  : null === (g = N.chain) || void 0 === g
                                  ? void 0
                                  : g.toLowerCase()) || ""
                              ) &&
                                (0, a.jsx)("p", {
                                  className:
                                    "text-xs text-primary-disabled -mt-1",
                                  children: (0, i.x4)(
                                    (null == M
                                      ? void 0
                                      : null === (w = M.metadata) ||
                                        void 0 === w
                                      ? void 0
                                      : null === (j = w.chain) || void 0 === j
                                      ? void 0
                                      : j.toLowerCase()) || ""
                                  ),
                                }),
                            ],
                          }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "flex flex-col justify-between h-20",
                    children:
                      T &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-2 mt-3",
                            children: [
                              _ &&
                                (0, a.jsx)("span", {
                                  className:
                                    "uppercase font-medium text-[10px] border border-primary-disabled text-primary-disabled px-2 py-0 rounded-full whitespace-nowrap shrink-0",
                                  children: _,
                                }),
                              D &&
                                (0, a.jsxs)("span", {
                                  className:
                                    "uppercase font-medium text-[10px] border border-primary/5 text-primary-disabled px-2 py-0 rounded-full whitespace-nowrap shrink-0",
                                  "data-tooltip-id": "categories-".concat(
                                    M.name
                                  ),
                                  "data-tooltip-content": z.join(", "),
                                  children: ["+", z.length],
                                }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "flex items-center justify-between mt-4 ",
                            children: (0, a.jsxs)(u.default, {
                              href:
                                null == M
                                  ? void 0
                                  : null === (Z = M.metadata) || void 0 === Z
                                  ? void 0
                                  : Z.product_doc_link,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              onClick: (e) => {
                                e.stopPropagation();
                              },
                              className:
                                "flex items-center gap-2 text-primary-disabled px-2 py-0.5 w-fit border border-primary/10 bg-background-dark/30 rounded-lg hover:border-primary/40 duration-300 hover:text-primary",
                              children: [
                                (0, a.jsx)("p", {
                                  className: " text-sm font-medium",
                                  children: "Read more",
                                }),
                                (0, a.jsx)(o.Z, { className: "w-4 h-4" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                  }),
                  !T &&
                    (0, a.jsxs)("div", {
                      className:
                        "bg-background-dark rounded-lg px-2 py-1 mt-2 flex items-center gap-2 w-fit",
                      children: [
                        (0, a.jsx)("p", {
                          className:
                            "text-sm font-medium text-primary-disabled",
                          children: "Coming Soon",
                        }),
                        (0, a.jsx)(n, {
                          className: "w-4 h-4 text-primary-disabled",
                        }),
                      ],
                    }),
                ],
              }),
              T
                ? (0, a.jsxs)("div", {
                    className:
                      "bg-green-500/10 rounded-lg px-2 py-1 h-full mt-1 flex items-center gap-2",
                    children: [
                      (0, a.jsx)("div", {
                        className: "w-2 h-2 bg-green-500 rounded-full",
                      }),
                      (0, a.jsx)("p", {
                        className: "text-sm font-medium text-green-500",
                        children: "Live",
                      }),
                    ],
                  })
                : null,
              (0, a.jsx)(m.u, {
                id: "categories-".concat(M.name),
                place: "top",
                className:
                  "!bg-background-dark !border !border-primary/10 !text-primary !px-3 !py-2 !rounded-lg !text-sm !opacity-100 !shadow-none",
                classNameArrow: "!border-b border-r !border-primary/10",
                delayShow: 100,
              }),
            ],
          });
        };
      let x = () =>
        (0, a.jsxs)("div", {
          className:
            "hidden md:grid grid-cols-12 gap-4 px-3 py-3 text-primary-disabled text-[13px] bg-greyShade/80 rounded-xl mb-2",
          children: [
            (0, a.jsx)("div", { className: "col-span-3", children: "Name" }),
            (0, a.jsx)("div", {
              className: "col-span-3",
              children: "Node Type",
            }),
            (0, a.jsx)("div", { className: "col-span-3", children: "Tags" }),
            (0, a.jsx)("div", { className: "col-span-3", children: "Status" }),
          ],
        });
      var C = (e) => {
          var t;
          let { node: r } = e,
            s = i.Zr.includes(r.metadata.chain.toLowerCase()),
            l = (0, d.useRouter)(),
            n = r.metadata.node_type,
            c = r.metadata.categories || [],
            p = c.slice(0, 1),
            x = c.slice(1),
            C = c.length > 1;
          return (0, a.jsxs)("div", {
            className: "flex flex-col cursor-pointer",
            onClick: () => l.push("/deployNode/".concat(r.name)),
            children: [
              (0, a.jsxs)("div", {
                className:
                  "md:grid md:grid-cols-12 flex flex-col gap-4 items-start md:items-center bg-background-dark rounded-xl px-3 py-3",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "md:col-span-3 w-full flex items-center justify-between",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center",
                            children: (0, a.jsx)("img", {
                              src: r.metadata.logoUrl,
                              alt: r.metadata.displayName,
                              className: "w-6 h-6",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex-1",
                            children: [
                              (0, a.jsx)("p", {
                                className: "text-[15px] font-medium ".concat(
                                  s ? "text-gold-gradient" : ""
                                ),
                                children: r.metadata.displayName,
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-primary-disabled text-xs capitalize",
                                children: r.metadata.network,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "flex md:hidden justify-between items-center mt-2",
                        children: (0, a.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "text-primary-disabled text-xs self-end",
                              children: "Type",
                            }),
                            (0, a.jsx)("p", {
                              className: "text-sm capitalize",
                              children:
                                null == n ? void 0 : n.split("_").join(" "),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "hidden md:block md:col-span-3",
                    children: (0, a.jsx)("p", {
                      className: "text-[15px] capitalize",
                      children: null == n ? void 0 : n.split("_").join(" "),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "md:col-span-3 w-full mt-3 md:mt-0",
                    children: (0, a.jsxs)("div", {
                      className: "flex items-center gap-1.5 flex-wrap",
                      children: [
                        p.map((e) =>
                          (0, a.jsx)(
                            "span",
                            {
                              className:
                                "uppercase text-[10px] font-medium border border-primary-disabled text-primary-disabled px-2 py-[2px] rounded-full whitespace-nowrap",
                              children: e,
                            },
                            e
                          )
                        ),
                        C &&
                          (0, a.jsxs)("span", {
                            className:
                              "uppercase text-[10px] font-medium border border-primary/5 text-primary-disabled px-2 py-[2px] rounded-full whitespace-nowrap",
                            "data-tooltip-id": "list-categories-".concat(
                              r.name
                            ),
                            "data-tooltip-content": x.join(", "),
                            children: ["+", x.length],
                          }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "md:col-span-3 w-full flex items-center justify-between mt-3 md:mt-0",
                    children: [
                      (0, a.jsx)("div", {
                        className: "flex items-center gap-6",
                        children: r.is_active
                          ? (0, a.jsxs)("div", {
                              className:
                                "border border-green-500/10 rounded-lg px-2 py-0.5 flex items-center gap-1.5",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "w-1.5 h-1.5 bg-green-500 rounded-full",
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-xs font-medium text-green-500",
                                  children: "Live",
                                }),
                              ],
                            })
                          : (0, a.jsxs)("div", {
                              className:
                                "border border-primary-disabled rounded-lg px-2 py-0.5 flex items-center gap-1.5",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "w-1.5 h-1.5 bg-primary-disabled rounded-full",
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-xs font-medium text-primary-disabled",
                                  children: "Coming Soon",
                                }),
                              ],
                            }),
                      }),
                      (0, a.jsx)("div", {
                        className: "flex items-center gap-3",
                        children: (0, a.jsxs)(u.default, {
                          href:
                            null == r
                              ? void 0
                              : null === (t = r.metadata) || void 0 === t
                              ? void 0
                              : t.product_doc_link,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          onClick: (e) => e.stopPropagation(),
                          className:
                            "text-primary-disabled hover:underline text-xs flex items-center gap-1",
                          children: [
                            "Read more",
                            (0, a.jsx)(o.Z, { className: "w-4 h-4" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(m.u, {
                id: "list-categories-".concat(r.name),
                place: "top",
                className:
                  "!bg-background-dark !border !border-primary/10 !text-primary !px-3 !py-2 !rounded-lg !text-sm !opacity-100 !shadow-none",
                classNameArrow: "!border-b border-r !border-primary/10",
                delayShow: 100,
              }),
            ],
          });
        },
        h = r(69767),
        y = r(49575),
        k = r(72966),
        f = r(95954),
        b = r(73742),
        v = r(66275),
        g = r(47488),
        N = r(17534),
        j = r(85912),
        w = r(21099),
        Z = (e) => {
          let {
              filters: t,
              activeTab: r,
              setActiveTab: l,
              searchTerm: o,
              setSearchTerm: n,
              viewType: i,
              setViewType: d,
              selectedNetworks: c,
              setSelectedNetworks: u,
              selectedCategories: p,
              setSelectedCategories: x,
            } = e,
            [C, Z] = (0, s.useState)(""),
            M = (0, s.useMemo)(() => {
              let e = w.tC,
                t = p.filter((t) => !e.includes(t));
              return Array.from(new Set([...e, ...t]));
            }, [p]),
            L = (0, s.useMemo)(
              () =>
                C
                  ? w.tC.filter(
                      (e) =>
                        !M.includes(e) &&
                        e.toLowerCase().includes(C.toLowerCase())
                    )
                  : [],
              [C, M]
            ),
            I = (e) => {
              x((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
            },
            S = p.length + c.length;
          return (0, a.jsxs)("div", {
            className:
              "flex xl:flex-row flex-col xl:items-center justify-between gap-2",
            children: [
              (0, a.jsx)("div", {
                className:
                  "border border-primary/10 bg-background-dark p-1 rounded-xl w-fit",
                children: (0, a.jsx)(h.mQ, {
                  tabs: t,
                  activeTab: r,
                  setActiveTab: (e) => {
                    l(e);
                  },
                  id: "tab-deploy-node",
                }),
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-wrap items-center lg:gap-4 gap-2",
                children: [
                  (0, a.jsxs)("div", {
                    className: "relative w-full xl:w-80",
                    children: [
                      (0, a.jsx)("input", {
                        type: "text",
                        placeholder: "Search...",
                        value: o,
                        onChange: (e) => n(e.target.value),
                        className:
                          "w-full h-11 px-9 rounded-xl bg-background-dark border border-primary/10 placeholder:text-primary-disabled focus:outline-none",
                      }),
                      (0, a.jsx)(y.Z, {
                        size: 19,
                        className:
                          "absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/40",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "relative w-full lg:w-auto",
                    children: (0, a.jsxs)(h.Lt, {
                      children: [
                        (0, a.jsx)(h.uw, {
                          children: (0, a.jsxs)("div", {
                            className:
                              "w-fit px-3 h-11 rounded-xl bg-background-dark border border-primary/10 flex items-center justify-center gap-1.5 cursor-pointer",
                            children: [
                              (0, a.jsx)(k.Z, {
                                size: 24,
                                className: "text-primary-disabled",
                              }),
                              (0, a.jsx)("span", {
                                className: "text-primary-disabled",
                                children: "Filter by",
                              }),
                              (0, a.jsx)(f.Z, {
                                className: "text-primary-disabled",
                              }),
                              S > 0 &&
                                (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "w-px h-4 bg-primary/20 mx-1",
                                    }),
                                    (0, a.jsx)("span", {
                                      className:
                                        "bg-accent text-sm w-5 h-5 text-dark rounded-full flex items-center justify-center",
                                      children: S,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                        (0, a.jsxs)(h.P2, {
                          menuClassName:
                            "w-full md:w-80 bg-background-dark left-0 md:left-auto md:right-0",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "flex items-center justify-between px-2 py-1.5",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "text-primary-disabled text-xs uppercase",
                                  children: "NETWORK",
                                }),
                                S > 0 &&
                                  (0, a.jsx)("button", {
                                    onClick: () => {
                                      x([]), u([]);
                                    },
                                    className:
                                      "text-xs text-accent hover:text-accent/80",
                                    children: "Clear filters",
                                  }),
                              ],
                            }),
                            (0, a.jsx)(h.hP, {
                              static: !0,
                              children: (0, a.jsxs)("button", {
                                onClick: (e) => {
                                  e.preventDefault(),
                                    e.stopPropagation(),
                                    u((e) =>
                                      e.includes("mainnet")
                                        ? e.filter((e) => "mainnet" !== e)
                                        : [...e, "mainnet"]
                                    );
                                },
                                className:
                                  "w-full flex items-center gap-2 px-2 py-1.5 hover:bg-primary/10 rounded-lg ".concat(
                                    c.includes("mainnet") ? "bg-primary/10" : ""
                                  ),
                                children: [
                                  (0, a.jsx)(b.Z, {
                                    size: 20,
                                    className: "text-primary",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "text-primary",
                                    children: "Mainnet",
                                  }),
                                  c.includes("mainnet") &&
                                    (0, a.jsx)(v.Z, {
                                      size: 18,
                                      className: "ml-auto text-primary",
                                    }),
                                ],
                              }),
                            }),
                            (0, a.jsx)(h.hP, {
                              static: !0,
                              children: (0, a.jsxs)("button", {
                                onClick: (e) => {
                                  e.preventDefault(),
                                    e.stopPropagation(),
                                    u((e) =>
                                      e.includes("testnet")
                                        ? e.filter((e) => "testnet" !== e)
                                        : [...e, "testnet"]
                                    );
                                },
                                className:
                                  "w-full mt-2 flex items-center gap-2 px-2 py-1.5 hover:bg-primary/10 rounded-lg ".concat(
                                    c.includes("testnet") ? "bg-primary/10" : ""
                                  ),
                                children: [
                                  (0, a.jsx)(g.Z, {
                                    size: 20,
                                    className: "text-primary",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "text-primary",
                                    children: "Testnet",
                                  }),
                                  c.includes("testnet") &&
                                    (0, a.jsx)(v.Z, {
                                      size: 18,
                                      className: "ml-auto text-primary",
                                    }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "text-primary-disabled py-1.5 text-xs uppercase mt-2 px-2",
                              children: "CATEGORY",
                            }),
                            (0, a.jsx)("div", {
                              className: "mb-2 px-2",
                              children: (0, a.jsx)("div", {
                                className: "relative",
                                children: (0, a.jsx)(h.II, {
                                  placeholder: "Search categories...",
                                  value: C,
                                  onChange: (e) => Z(e.target.value),
                                  icon: (0, a.jsx)(y.Z, {
                                    size: 16,
                                    className: "text-primary/40",
                                  }),
                                }),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "flex flex-wrap gap-2 mb-2 px-2",
                              children: M.map((e) =>
                                (0, a.jsx)(
                                  "button",
                                  {
                                    onClick: () => I(e),
                                    className:
                                      "px-3 py-1.5 rounded-xl border transition-colors ".concat(
                                        p.includes(e)
                                          ? "bg-primary/10 border-primary/20"
                                          : "border-primary/10 hover:bg-primary/5"
                                      ),
                                    children: (0, a.jsx)("span", {
                                      className: "text-primary text-sm",
                                      children: e,
                                    }),
                                  },
                                  e
                                )
                              ),
                            }),
                            L.length > 0 &&
                              (0, a.jsx)("div", {
                                className:
                                  "flex flex-wrap gap-2 pt-2 border-t border-primary/10 px-2",
                                children: L.map((e) =>
                                  (0, a.jsx)(
                                    "button",
                                    {
                                      onClick: () => I(e),
                                      className:
                                        "px-3 py-1.5 rounded-xl border transition-colors ".concat(
                                          p.includes(e)
                                            ? "bg-primary/10 border-primary/20"
                                            : "border-primary/10 hover:bg-primary/5"
                                        ),
                                      children: (0, a.jsx)("span", {
                                        className: "text-primary text-sm",
                                        children: e,
                                      }),
                                    },
                                    e
                                  )
                                ),
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex items-center gap-2 border border-primary/10 bg-background-dark p-1 rounded-xl h-11",
                    children: [
                      (0, a.jsx)("button", {
                        onClick: () => d(w.bW.GRID),
                        className: "p-1.5 rounded-lg transition-colors ".concat(
                          i === w.bW.GRID ? "bg-primary/10" : ""
                        ),
                        "data-tooltip-id": "deploy-grid-view-tooltip",
                        "data-tooltip-content": "Grid View",
                        children: (0, a.jsx)(N.Z, {
                          size: 18,
                          className:
                            i === w.bW.GRID
                              ? "text-primary"
                              : "text-primary/40",
                        }),
                      }),
                      (0, a.jsx)(m.u, {
                        id: "deploy-grid-view-tooltip",
                        place: "top",
                        className:
                          "!bg-background-dark !border !border-primary/10 !text-primary !px-3 !py-2 !rounded-lg !text-sm !opacity-100 !shadow-none z-[99999]",
                        classNameArrow: "!border-b border-r !border-primary/10",
                        delayShow: 100,
                      }),
                      (0, a.jsx)("button", {
                        onClick: () => d(w.bW.LIST),
                        className: "p-1.5 rounded-lg transition-colors ".concat(
                          i === w.bW.LIST ? "bg-primary/10" : ""
                        ),
                        "data-tooltip-id": "deploy-list-view-tooltip",
                        "data-tooltip-content": "List View",
                        children: (0, a.jsx)(j.Z, {
                          size: 18,
                          className:
                            i === w.bW.LIST
                              ? "text-primary"
                              : "text-primary/40",
                        }),
                      }),
                      (0, a.jsx)(m.u, {
                        id: "deploy-list-view-tooltip",
                        place: "top",
                        className:
                          "!bg-background-dark !border !border-primary/10 !text-primary !px-3 !py-2 !rounded-lg !text-sm !opacity-100 !shadow-none",
                        classNameArrow: "!border-b border-r !border-primary/10",
                        delayShow: 100,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        M = r(49628),
        L = r(35323),
        I = r(65726);
      let S = [
        { label: "All", value: w.$X.ALL },
        { label: "Live", value: w.$X.LIVE },
        { label: "Coming Soon", value: w.$X.COMING_SOON },
      ];
      var T = () => {
        let [e, t] = (0, s.useState)(!1),
          { deployNodes: r, getDeploymentProducts: l } = (0, M.q)(),
          [o, n] = (0, s.useState)(w.$X.LIVE),
          [i, d] = (0, s.useState)(""),
          [c, u] = (0, s.useState)(w.bW.GRID),
          [m, h] = (0, s.useState)([]),
          [y, k] = (0, s.useState)([]);
        (0, s.useEffect)(() => {
          t(!0), l().finally(() => t(!1));
        }, []);
        let f = (0, s.useMemo)(() => {
          let e =
            null == r
              ? void 0
              : r.filter((e) => {
                  var t, r, a, s, l, n;
                  let d =
                      o === w.$X.ALL ||
                      ((null === (t = e.metadata) || void 0 === t
                        ? void 0
                        : t.status) ===
                        "active") ==
                        (o === w.$X.LIVE),
                    c =
                      null === (s = e.metadata) || void 0 === s
                        ? void 0
                        : null === (a = s.displayName) || void 0 === a
                        ? void 0
                        : null === (r = a.toLowerCase()) || void 0 === r
                        ? void 0
                        : r.includes(i.toLowerCase()),
                    u =
                      0 === m.length ||
                      m.includes(
                        null === (l = e.metadata) || void 0 === l
                          ? void 0
                          : l.network
                      ),
                    p =
                      0 === y.length ||
                      ((null === (n = e.metadata) || void 0 === n
                        ? void 0
                        : n.categories) &&
                        y.some((t) =>
                          e.metadata.categories.some(
                            (e) => e.toLowerCase() === t.toLowerCase()
                          )
                        ));
                  return d && c && u && p;
                });
          return o === w.$X.ALL
            ? e.sort((e, t) =>
                e.is_active !== t.is_active ? (e.is_active ? -1 : 1) : 0
              )
            : e;
        }, [r, o, i, m, y]);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(Z, {
              filters: S,
              activeTab: o,
              setActiveTab: n,
              searchTerm: i,
              setSearchTerm: d,
              viewType: c,
              setViewType: u,
              selectedNetworks: m,
              setSelectedNetworks: h,
              selectedCategories: y,
              setSelectedCategories: k,
            }),
            (0, a.jsx)("div", {
              className: "mt-6 ".concat(
                c === w.bW.GRID
                  ? "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4"
                  : ""
              ),
              children: e
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(L.D, { bar: 4 }),
                      (0, a.jsx)(L.D, { bar: 4 }),
                      (0, a.jsx)(L.D, { bar: 4 }),
                      (0, a.jsx)(L.D, { bar: 4 }),
                    ],
                  })
                : e || 0 !== f.length
                ? c === w.bW.LIST
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(x, {}),
                        (0, a.jsx)("div", {
                          className: "space-y-2",
                          children: f.map((e) =>
                            (0, a.jsx)(C, { node: e }, e.id)
                          ),
                        }),
                      ],
                    })
                  : f.map((e) => (0, a.jsx)(p, { node: e }, e.id))
                : (0, a.jsx)("div", {
                    className:
                      "col-span-full flex justify-center items-center mt-20",
                    children: (0, a.jsx)(I.Z, {
                      type: "deployment",
                      size: "md",
                    }),
                  }),
            }),
          ],
        });
      };
    },
    65726: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return y;
        },
      });
      var a = r(57437),
        s = r(2265),
        l = r(61697),
        o = r(84744),
        n = r(65210),
        i = r(4936),
        d = r(26995),
        c = r(87684),
        u = r(59283),
        m = r(67609);
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
          icon: o.Z,
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
          icon: o.Z,
          href: "/deployNode",
          actionText: "Deploy Node",
        },
        launchpad: {
          title: "No nodes found",
          subtitle: "No nodes found",
          icon: i.Z,
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
          icon: c.Z,
          href: "/deployNode",
          actionText: "",
        },
        delegation: {
          title: "No delegation found",
          subtitle:
            "Looks like there aren’t any delegation available at the moment",
          icon: u.Z,
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
      var x = r(99376),
        C = r(69767),
        h = r(63691),
        y = (e) => {
          let { type: t, size: r = "md", titleText: l, subtitleText: o } = e,
            { title: n, subtitle: i, href: d, actionText: c, icon: u } = p[t],
            m = (0, x.useRouter)(),
            { setLoginModalOpen: y } = (0, h.q)();
          return (0, a.jsxs)("div", {
            className: "flex flex-col items-center justify-center h-full",
            children: [
              (0, a.jsx)("div", {
                className:
                  "flex justify-center items-center rounded-full ".concat(
                    "sm" === r ? "" : "border-primary/10 border p-3"
                  ),
                children: (0, a.jsx)("div", {
                  className:
                    "flex justify-center items-center rounded-full border-primary/30 border p-3",
                  children: (0, a.jsx)("div", {
                    className: "flex justify-center items-center gap-2 ".concat(
                      "sm" === r ? "w-20 h-20" : "w-24 h-24",
                      " border-primary/70 border rounded-full"
                    ),
                    children: s.createElement(u, {
                      className: "sm" === r ? "w-10 h-10" : "w-12 h-12",
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
                children: o || i,
              }),
              c &&
                (0, a.jsx)(C.zx, {
                  variant: "link",
                  className: "!text-accent mt-2",
                  onClick: () => {
                    "login" === t ? y(!0) : m.push(d);
                  },
                  children: c,
                }),
            ],
          });
        };
    },
    44537: function (e, t, r) {
      "use strict";
      var a = r(57437);
      r(2265),
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
    35323: function (e, t, r) {
      "use strict";
      r.d(t, {
        D: function () {
          return l;
        },
        a: function () {
          return a.Z;
        },
      });
      var a = r(44537),
        s = r(57437),
        l = (e) => {
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
    87684: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(67775).Z)("Blockchain01Icon", [
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
    73742: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(67775).Z)("CellularNetworkIcon", [
        ["path", { d: "M12 11L12 20", stroke: "currentColor", key: "k0" }],
        [
          "path",
          {
            d: "M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z",
            stroke: "currentColor",
            key: "k1",
          },
        ],
        [
          "path",
          {
            d: "M16.9588 6C17.6186 6.86961 18 7.89801 18 9C18 10.102 17.6186 11.1304 16.9588 12M7.04117 6C6.38143 6.86961 6 7.89801 6 9C6 10.102 6.38143 11.1304 7.04117 12",
            stroke: "currentColor",
            key: "k2",
          },
        ],
        [
          "path",
          {
            d: "M20.3159 4C21.3796 5.43008 22 7.14984 22 9C22 10.8502 21.3796 12.5699 20.3159 14M3.68409 4C2.62036 5.43008 2 7.14984 2 9C2 10.8502 2.62036 12.5699 3.68409 14",
            stroke: "currentColor",
            key: "k3",
          },
        ],
      ]);
    },
    47488: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(67775).Z)("CodeIcon", [
        [
          "path",
          {
            d: "M7.99996 12H8.00893M11.9955 12H12.0044M15.991 12H16",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M18 21C19.2322 21 20.231 19.8487 20.231 18.4286C20.231 16.1808 20.1312 14.6865 21.6733 12.9091C22.1089 12.407 22.1089 11.593 21.6733 11.0909C20.1312 9.31354 20.231 7.81916 20.231 5.57143C20.231 4.15127 19.2322 3 18 3",
            stroke: "currentColor",
            key: "k1",
          },
        ],
        [
          "path",
          {
            d: "M6 21C4.76784 21 3.76897 19.8487 3.76897 18.4286C3.76897 16.1808 3.86877 14.6865 2.32673 12.9091C1.89109 12.407 1.89109 11.593 2.32673 11.0909C3.83496 9.35251 3.76897 7.83992 3.76897 5.57143C3.76897 4.15127 4.76784 3 6 3",
            stroke: "currentColor",
            key: "k2",
          },
        ],
      ]);
    },
    65210: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(67775).Z)("DashboardCircleRemoveIcon", [
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
    59283: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(67775).Z)("Database02Icon", [
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
    26995: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(67775).Z)("File02Icon", [
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
    72966: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(67775).Z)("FilterMailCircleIcon", [
        [
          "path",
          {
            d: "M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        ["path", { d: "M9 12L15.0001 12", stroke: "currentColor", key: "k1" }],
        ["path", { d: "M10 15.5H14", stroke: "currentColor", key: "k2" }],
        ["path", { d: "M8 8.5H16", stroke: "currentColor", key: "k3" }],
      ]);
    },
    84744: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(67775).Z)("GiftIcon", [
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
    17534: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(67775).Z)("GridViewIcon", [
        [
          "path",
          {
            d: "M2 18C2 16.4596 2 15.6893 2.34673 15.1235C2.54074 14.8069 2.80693 14.5407 3.12353 14.3467C3.68934 14 4.45956 14 6 14C7.54044 14 8.31066 14 8.87647 14.3467C9.19307 14.5407 9.45926 14.8069 9.65327 15.1235C10 15.6893 10 16.4596 10 18C10 19.5404 10 20.3107 9.65327 20.8765C9.45926 21.1931 9.19307 21.4593 8.87647 21.6533C8.31066 22 7.54044 22 6 22C4.45956 22 3.68934 22 3.12353 21.6533C2.80693 21.4593 2.54074 21.1931 2.34673 20.8765C2 20.3107 2 19.5404 2 18Z",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z",
            stroke: "currentColor",
            key: "k1",
          },
        ],
        [
          "path",
          {
            d: "M2 6C2 4.45956 2 3.68934 2.34673 3.12353C2.54074 2.80693 2.80693 2.54074 3.12353 2.34673C3.68934 2 4.45956 2 6 2C7.54044 2 8.31066 2 8.87647 2.34673C9.19307 2.54074 9.45926 2.80693 9.65327 3.12353C10 3.68934 10 4.45956 10 6C10 7.54044 10 8.31066 9.65327 8.87647C9.45926 9.19307 9.19307 9.45926 8.87647 9.65327C8.31066 10 7.54044 10 6 10C4.45956 10 3.68934 10 3.12353 9.65327C2.80693 9.45926 2.54074 9.19307 2.34673 8.87647C2 8.31066 2 7.54044 2 6Z",
            stroke: "currentColor",
            key: "k2",
          },
        ],
        [
          "path",
          {
            d: "M14 6C14 4.45956 14 3.68934 14.3467 3.12353C14.5407 2.80693 14.8069 2.54074 15.1235 2.34673C15.6893 2 16.4596 2 18 2C19.5404 2 20.3107 2 20.8765 2.34673C21.1931 2.54074 21.4593 2.80693 21.6533 3.12353C22 3.68934 22 4.45956 22 6C22 7.54044 22 8.31066 21.6533 8.87647C21.4593 9.19307 21.1931 9.45926 20.8765 9.65327C20.3107 10 19.5404 10 18 10C16.4596 10 15.6893 10 15.1235 9.65327C14.8069 9.45926 14.5407 9.19307 14.3467 8.87647C14 8.31066 14 7.54044 14 6Z",
            stroke: "currentColor",
            key: "k3",
          },
        ],
      ]);
    },
    25082: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(67775).Z)("LinkSquare01Icon", [
        [
          "path",
          {
            d: "M11.1005 3.00208C7.45162 3.00864 5.54086 3.09822 4.31974 4.31931C3.00195 5.63706 3.00195 7.75796 3.00195 11.9997C3.00195 16.2415 3.00195 18.3624 4.31974 19.6801C5.63753 20.9979 7.75849 20.9979 12.0004 20.9979C16.2423 20.9979 18.3632 20.9979 19.6811 19.6801C20.9021 18.4591 20.9917 16.5484 20.9983 12.8996",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M20.4809 3.51751L14.9316 9.0515M20.4809 3.51751C19.9869 3.023 16.6593 3.0691 15.9558 3.0791M20.4809 3.51751C20.9748 4.01202 20.9288 7.34329 20.9188 8.04754",
            stroke: "currentColor",
            key: "k1",
          },
        ],
      ]);
    },
    85912: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(67775).Z)("ListViewIcon", [
        [
          "path",
          {
            d: "M2 11.4C2 10.2417 2.24173 10 3.4 10H20.6C21.7583 10 22 10.2417 22 11.4V12.6C22 13.7583 21.7583 14 20.6 14H3.4C2.24173 14 2 13.7583 2 12.6V11.4Z",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M2 3.4C2 2.24173 2.24173 2 3.4 2H20.6C21.7583 2 22 2.24173 22 3.4V4.6C22 5.75827 21.7583 6 20.6 6H3.4C2.24173 6 2 5.75827 2 4.6V3.4Z",
            stroke: "currentColor",
            key: "k1",
          },
        ],
        [
          "path",
          {
            d: "M2 19.4C2 18.2417 2.24173 18 3.4 18H20.6C21.7583 18 22 18.2417 22 19.4V20.6C22 21.7583 21.7583 22 20.6 22H3.4C2.24173 22 2 21.7583 2 20.6V19.4Z",
            stroke: "currentColor",
            key: "k2",
          },
        ],
      ]);
    },
    61697: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(67775).Z)("Login01Icon", [
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
    2570: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(67775).Z)("Notification02Icon", [
        [
          "path",
          {
            d: "M2.52992 14.7696C2.31727 16.1636 3.268 17.1312 4.43205 17.6134C8.89481 19.4622 15.1052 19.4622 19.5679 17.6134C20.732 17.1312 21.6827 16.1636 21.4701 14.7696C21.3394 13.9129 20.6932 13.1995 20.2144 12.5029C19.5873 11.5793 19.525 10.5718 19.5249 9.5C19.5249 5.35786 16.1559 2 12 2C7.84413 2 4.47513 5.35786 4.47513 9.5C4.47503 10.5718 4.41272 11.5793 3.78561 12.5029C3.30684 13.1995 2.66061 13.9129 2.52992 14.7696Z",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M8 19C8.45849 20.7252 10.0755 22 12 22C13.9245 22 15.5415 20.7252 16 19",
            stroke: "currentColor",
            key: "k1",
          },
        ],
      ]);
    },
    67609: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(67775).Z)("PoolIcon", [
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
    49575: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(67775).Z)("Search01Icon", [
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
    66275: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(67775).Z)("Tick02Icon", [
        [
          "path",
          { d: "M5 14L8.5 17.5L19 6.5", stroke: "currentColor", key: "k0" },
        ],
      ]);
    },
    4936: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, r(67775).Z)("ZapIcon", [
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
    37179: function (e, t, r) {
      "use strict";
      r.d(t, {
        F6: function () {
          return a;
        },
        Zr: function () {
          return s;
        },
        qd: function () {
          return l;
        },
        x4: function () {
          return o;
        },
      });
      let a = ["hybrid", "nexus", "kapgames", "beam", "din", "fuse", "nodeops"],
        s = ["xai-premium", "carv_premium", "din", "sophon"],
        l = ["timpi", "carv"],
        o = (e) => {
          switch (e) {
            case "xai_premium":
              return "Dedicated Sentry Operator";
            case "timpi":
              return "Enterpriser";
            case "carv":
              return "Commission based";
            default:
              return "Premium";
          }
        };
    },
  },
  function (e) {
    e.O(0, [3814, 5501, 3080, 3448, 4060, 5626, 2971, 5030, 1744], function () {
      return e((e.s = 84976));
    }),
      (_N_E = e.O());
  },
]);
