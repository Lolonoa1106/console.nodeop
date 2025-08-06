"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1950],
  {
    65726: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return g;
        },
      });
      var a = l(57437),
        r = l(2265),
        s = l(61697),
        n = l(84744),
        o = l(65210),
        i = l(4936),
        d = l(26995),
        c = l(87684),
        u = l(59283),
        m = l(67609);
      let p = {
        login: {
          title: "You are not logged in",
          subtitle: "Please login to continue",
          href: "/login",
          actionText: "Login",
          icon: s.Z,
        },
        refer: {
          title: "Not There Yet",
          subtitle:
            "Earn Node point to start referring your friends and get sweet multipliers",
          href: "/deployNode",
          actionText: "Deploy Node",
          icon: n.Z,
        },
        nodefolio: {
          title: "No deployed nodes",
          subtitle: "You have not deployed any nodes yet",
          icon: o.Z,
          href: "/deployNode",
          actionText: "Deploy Node",
        },
        default: {
          title: "No data found",
          subtitle: "There is no data to display",
          icon: n.Z,
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
      var x = l(99376),
        v = l(69767),
        h = l(63691),
        g = (e) => {
          let { type: t, size: l = "md", titleText: s, subtitleText: n } = e,
            { title: o, subtitle: i, href: d, actionText: c, icon: u } = p[t],
            m = (0, x.useRouter)(),
            { setLoginModalOpen: g } = (0, h.q)();
          return (0, a.jsxs)("div", {
            className: "flex flex-col items-center justify-center h-full",
            children: [
              (0, a.jsx)("div", {
                className:
                  "flex justify-center items-center rounded-full ".concat(
                    "sm" === l ? "" : "border-primary/10 border p-3"
                  ),
                children: (0, a.jsx)("div", {
                  className:
                    "flex justify-center items-center rounded-full border-primary/30 border p-3",
                  children: (0, a.jsx)("div", {
                    className: "flex justify-center items-center gap-2 ".concat(
                      "sm" === l ? "w-20 h-20" : "w-24 h-24",
                      " border-primary/70 border rounded-full"
                    ),
                    children: r.createElement(u, {
                      className: "sm" === l ? "w-10 h-10" : "w-12 h-12",
                    }),
                  }),
                }),
              }),
              (0, a.jsx)("h3", {
                className: "text-lg font-semibold mt-4",
                children: s || o,
              }),
              (0, a.jsx)("p", {
                className:
                  "text-sm mt-1 text-primary-disabled max-w-sm text-center",
                children: n || i,
              }),
              c &&
                (0, a.jsx)(v.zx, {
                  variant: "link",
                  className: "!text-accent mt-2",
                  onClick: () => {
                    "login" === t ? g(!0) : m.push(d);
                  },
                  children: c,
                }),
            ],
          });
        };
    },
    44537: function (e, t, l) {
      var a = l(57437);
      l(2265),
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
    35323: function (e, t, l) {
      l.d(t, {
        D: function () {
          return s;
        },
        a: function () {
          return a.Z;
        },
      });
      var a = l(44537),
        r = l(57437),
        s = (e) => {
          let { bar: t = 10 } = e;
          return (0, r.jsx)("div", {
            className: "space-y-4",
            children: [...Array(t)].map((e, t) =>
              (0, r.jsx)(
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
    11950: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return O;
        },
      });
      var a = l(57437),
        r = l(2265),
        s = l(99376),
        n = l(69767),
        o = l(49575);
      let i = (0, l(67775).Z)("Sorting05Icon", [
        ["path", { d: "M11 10L18 10", stroke: "currentColor", key: "k0" }],
        ["path", { d: "M11 14H16", stroke: "currentColor", key: "k1" }],
        ["path", { d: "M11 18H14", stroke: "currentColor", key: "k2" }],
        ["path", { d: "M11 6H21", stroke: "currentColor", key: "k3" }],
        [
          "path",
          {
            d: "M7 18.8125C6.60678 19.255 5.56018 21 5 21M3 18.8125C3.39322 19.255 4.43982 21 5 21M5 21L5 15",
            stroke: "currentColor",
            key: "k4",
          },
        ],
        [
          "path",
          {
            d: "M3 5.1875C3.39322 4.74501 4.43982 3 5 3M7 5.1875C6.60678 4.74501 5.56018 3 5 3M5 3L5 9",
            stroke: "currentColor",
            key: "k5",
          },
        ],
      ]);
      var d = l(95954),
        c = l(72966),
        u = l(73742),
        m = l(66275),
        p = l(47488),
        x = l(84479),
        v = l(21099),
        h = l(61994);
      let g = (e) => {
        switch (e) {
          case "Active":
          case "active":
            return "bg-green-500";
          case "Completed":
          case "complete":
          case "completed":
            return "bg-primary-disabled";
          case "Upcoming":
          case "upcoming":
            return "bg-yellow-500";
          default:
            return "";
        }
      };
      var f = (e) => {
          let {
              onFilterChange: t,
              onSearchChange: l,
              selectedNetworks: s,
              setSelectedNetworks: n,
              routeType: f,
            } = e,
            [b, y] = (0, r.useState)(""),
            [N, j] = (0, r.useState)(null),
            C = (0, r.useMemo)(
              () =>
                f === v.F2.BOOTSTRAP_EVENT
                  ? [
                      { label: "All", value: null },
                      { label: "Live", value: "active" },
                      { label: "Completed", value: "complete" },
                      { label: "Coming Soon", value: "upcoming" },
                    ]
                  : [
                      { label: "All", value: null },
                      { label: "Live", value: "Active" },
                      { label: "Completed", value: "Completed" },
                      { label: "Coming Soon", value: "Upcoming" },
                    ],
              [f]
            ),
            k = (e) => {
              e === N ? (j(null), t(null)) : (j(e), t(e));
            },
            w = s.length;
          return (0, a.jsxs)("div", {
            className: "flex flex-wrap items-center gap-4",
            children: [
              (0, a.jsxs)("div", {
                className: "relative w-full md:w-80",
                children: [
                  (0, a.jsx)("input", {
                    type: "text",
                    placeholder: "Search...",
                    value: b,
                    onChange: (e) => {
                      let t = e.target.value;
                      y(t), l(t);
                    },
                    className:
                      "w-full h-11 px-9 rounded-xl bg-background-dark border border-primary/10 placeholder:text-primary-disabled focus:outline-none",
                  }),
                  (0, a.jsx)(o.Z, {
                    size: 19,
                    className:
                      "absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/40",
                  }),
                ],
              }),
              (0, a.jsxs)(x.Lt, {
                children: [
                  (0, a.jsxs)(x.uw, {
                    buttonClassName:
                      "w-fit px-3 h-11 rounded-xl bg-background-dark border border-primary/10 flex items-center justify-center gap-1.5",
                    children: [
                      (0, a.jsx)(i, {
                        size: 24,
                        className: "text-primary-disabled",
                      }),
                      (0, a.jsx)("span", {
                        className: "text-primary-disabled",
                        children: "Sort by",
                      }),
                      (0, a.jsx)(d.Z, { className: "text-primary-disabled" }),
                    ],
                  }),
                  (0, a.jsx)(x.P2, {
                    menuClassName:
                      "bg-background-dark left-0 md:left-auto md:right-0",
                    children: C.map((e) =>
                      (0, a.jsx)(
                        x.hP,
                        {
                          children: (0, a.jsxs)("button", {
                            onClick: () => k(e.value),
                            className: (0, h.Z)(
                              "w-full text-left px-2 py-1.5 rounded-xl flex items-center gap-2",
                              {
                                "bg-primary/10": N === e.value,
                                "hover:bg-primary/5": N !== e.value,
                              }
                            ),
                            children: [
                              (0, a.jsx)("div", {
                                className: "w-2 h-2 rounded-full ".concat(
                                  g(e.value)
                                ),
                              }),
                              e.label,
                            ],
                          }),
                        },
                        e.label
                      )
                    ),
                  }),
                ],
              }),
              f === v.F2.BOOTSTRAP_EVENT &&
                (0, a.jsxs)(x.Lt, {
                  children: [
                    (0, a.jsxs)(x.uw, {
                      buttonClassName:
                        "w-fit px-3 h-11 rounded-xl bg-background-dark border border-primary/10 flex items-center justify-center gap-1.5",
                      children: [
                        (0, a.jsx)(c.Z, {
                          size: 24,
                          className: "text-primary-disabled",
                        }),
                        (0, a.jsx)("span", {
                          className: "text-primary-disabled",
                          children: "Filter by",
                        }),
                        (0, a.jsx)(d.Z, { className: "text-primary-disabled" }),
                        w > 0 &&
                          (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)("div", {
                                className: "w-px h-4 bg-primary/20 mx-1",
                              }),
                              (0, a.jsx)("span", {
                                className:
                                  "bg-accent text-sm w-5 h-5 text-dark rounded-full flex items-center justify-center",
                                children: w,
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, a.jsxs)(x.P2, {
                      menuClassName: "w-56 bg-background-dark",
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
                            w > 0 &&
                              (0, a.jsx)("button", {
                                onClick: () => {
                                  n([]);
                                },
                                className:
                                  "text-xs text-accent hover:text-accent/80",
                                children: "Clear filters",
                              }),
                          ],
                        }),
                        (0, a.jsx)(x.hP, {
                          static: !0,
                          children: (0, a.jsxs)("button", {
                            onClick: (e) => {
                              e.preventDefault(),
                                e.stopPropagation(),
                                n((e) =>
                                  e.includes("mainnet")
                                    ? e.filter((e) => "mainnet" !== e)
                                    : [...e, "mainnet"]
                                );
                            },
                            className:
                              "w-full flex items-center gap-2 px-2 py-1.5 hover:bg-primary/10 rounded-lg ".concat(
                                s.includes("mainnet") ? "bg-primary/10" : ""
                              ),
                            children: [
                              (0, a.jsx)(u.Z, {
                                size: 20,
                                className: "text-primary",
                              }),
                              (0, a.jsx)("span", {
                                className: "text-primary",
                                children: "Mainnet",
                              }),
                              s.includes("mainnet") &&
                                (0, a.jsx)(m.Z, {
                                  size: 18,
                                  className: "ml-auto text-primary",
                                }),
                            ],
                          }),
                        }),
                        (0, a.jsx)(x.hP, {
                          static: !0,
                          children: (0, a.jsxs)("button", {
                            onClick: (e) => {
                              e.preventDefault(),
                                e.stopPropagation(),
                                n((e) =>
                                  e.includes("testnet")
                                    ? e.filter((e) => "testnet" !== e)
                                    : [...e, "testnet"]
                                );
                            },
                            className:
                              "w-full mt-2 flex items-center gap-2 px-2 py-1.5 hover:bg-primary/10 rounded-lg ".concat(
                                s.includes("testnet") ? "bg-primary/10" : ""
                              ),
                            children: [
                              (0, a.jsx)(p.Z, {
                                size: 20,
                                className: "text-primary",
                              }),
                              (0, a.jsx)("span", {
                                className: "text-primary",
                                children: "Testnet",
                              }),
                              s.includes("testnet") &&
                                (0, a.jsx)(m.Z, {
                                  size: 18,
                                  className: "ml-auto text-primary",
                                }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        },
        b = l(73079),
        y = l(95830),
        N = l(75718),
        j = l(59610),
        C = l(57102),
        k = l(27648),
        w = l(95658),
        Z = l(64060),
        T = l(87148);
      let S = (e) => {
        switch (e) {
          case "twitter":
            return (0, a.jsx)(b.Z, { size: 16 });
          case "discord":
            return (0, a.jsx)(y.Z, { size: 16 });
          case "linkedin":
            return (0, a.jsx)(N.Z, { size: 16 });
          default:
            return null;
        }
      };
      var _ = (e) => {
          var t, l, r, n, o, i, d, c, u, m, p, x, h;
          let { node: g } = e,
            f = (0, s.useRouter)();
          return (0, a.jsxs)("div", {
            onClick: () => {
              (0, T.B)({
                action:
                  v.At.BOOTSTRAP_EVENT_CARD_CLICK +
                  "-".concat(null == g ? void 0 : g.name),
                category: v.Vx.BOOTSTRAP_EVENT,
                label: v._R.BOOTSTRAP_EVENT,
              }),
                f.push("/bootstrap-event/".concat(null == g ? void 0 : g.name));
            },
            className:
              "border border-primary/10 bg-background-dark p-1 rounded-lg group duration-300 cursor-pointer hover:translate-y-[-2px] hover:border-primary/40",
            children: [
              (0, a.jsx)("p", {
                className: "text-primary-disabled p-1 text-sm capitalize",
                children:
                  (null == g
                    ? void 0
                    : null === (r = g.metadata) || void 0 === r
                    ? void 0
                    : null === (l = r.bootstrapping_info) || void 0 === l
                    ? void 0
                    : null === (t = l.deployment_info) || void 0 === t
                    ? void 0
                    : t.network) || "testnet",
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col bg-greyShade p-3 rounded-lg",
                children: [
                  (0, a.jsx)("div", {
                    className: "bg-background-dark h-32 rounded-lg",
                    children: (0, a.jsx)("img", {
                      src:
                        null == g
                          ? void 0
                          : null === (o = g.metadata) || void 0 === o
                          ? void 0
                          : null === (n = o.bootstrapping_info) || void 0 === n
                          ? void 0
                          : n.image,
                      alt: "node",
                      className: "w-full h-full object-cover rounded-lg",
                    }),
                  }),
                  (0, a.jsx)("p", {
                    className: "text-lg font-semibold mt-2",
                    children:
                      null == g
                        ? void 0
                        : null === (d = g.metadata) || void 0 === d
                        ? void 0
                        : null === (i = d.bootstrapping_info) || void 0 === i
                        ? void 0
                        : i.name,
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "text-sm text-primary-disabled line-clamp-2 h-10 ",
                    children:
                      null == g
                        ? void 0
                        : null === (u = g.metadata) || void 0 === u
                        ? void 0
                        : null === (c = u.bootstrapping_info) || void 0 === c
                        ? void 0
                        : c.description,
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex items-center justify-between mt-3",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center gap-2 text-primary-disabled",
                        children: [
                          (0, a.jsx)("img", {
                            src: (0, w.jK)(
                              null == g
                                ? void 0
                                : null === (p = g.metadata) || void 0 === p
                                ? void 0
                                : null === (m = p.bootstrapping_info) ||
                                  void 0 === m
                                ? void 0
                                : m.chain
                            ),
                            alt: "Ethereum",
                            className: "w-4 h-4",
                          }),
                          (0, a.jsx)("p", {
                            className: "text-xs font-medium capitalize",
                            children:
                              null == g
                                ? void 0
                                : null === (h = g.metadata) || void 0 === h
                                ? void 0
                                : null === (x = h.bootstrapping_info) ||
                                  void 0 === x
                                ? void 0
                                : x.chain,
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "flex items-center gap-2 text-primary-disabled",
                        children:
                          null == g
                            ? void 0
                            : g.metadata.bootstrapping_info.social.map((e) =>
                                e.link
                                  ? (0, a.jsxs)(
                                      k.default,
                                      {
                                        href: e.link,
                                        target: "_blank",
                                        onClick: (e) => {
                                          e.stopPropagation();
                                        },
                                        "data-tooltip-id": "social-"
                                          .concat(e.title, "-")
                                          .concat(g.id),
                                        "data-tooltip-content": "".concat(
                                          e.title
                                        ),
                                        className: "capitalize",
                                        children: [
                                          S(e.title),
                                          (0, a.jsx)(Z.u, {
                                            id: "social-"
                                              .concat(e.title, "-")
                                              .concat(g.id),
                                            place: "top",
                                            className:
                                              "!bg-background-dark !border !border-primary/10 !text-primary !px-3 !py-2 !rounded-lg !text-sm !opacity-100 !shadow-none",
                                            classNameArrow:
                                              "!border-b border-r !border-primary/10",
                                            delayShow: 100,
                                          }),
                                        ],
                                      },
                                      e.link
                                    )
                                  : null
                              ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "bg-greyShade rounded-lg px-2 py-2 mt-1 flex items-center justify-between gap-2",
                children: [
                  (0, a.jsx)("p", {
                    className: "text-primary-disabled text-sm",
                    children: "Nodes Live",
                  }),
                  (0, a.jsx)("p", {
                    className: "text-sm font-semibold font-mono",
                    children: null == g ? void 0 : g.nodes_live,
                  }),
                ],
              }),
              (null == g ? void 0 : g.status) === "active" &&
                (0, a.jsxs)("div", {
                  className:
                    "bg-green-500/10 rounded-lg px-2 py-1 mt-1 flex items-center gap-2",
                  children: [
                    (0, a.jsx)("div", {
                      className: "w-2 h-2 bg-green-500 rounded-full",
                    }),
                    (0, a.jsx)("p", {
                      className: "text-sm font-medium text-green-500",
                      children: "Live",
                    }),
                  ],
                }),
              (null == g ? void 0 : g.status) === "complete" &&
                (0, a.jsxs)("div", {
                  className:
                    "bg-greyShade rounded-lg text-primary-disabled px-2 py-1 mt-1 flex items-center gap-2",
                  children: [
                    (0, a.jsx)(j.Z, { size: 16 }),
                    (0, a.jsx)("p", {
                      className: "text-sm font-medium",
                      children: "Completed",
                    }),
                  ],
                }),
              (null == g ? void 0 : g.status) === "upcoming" ||
                ((null == g ? void 0 : g.status) === "coming_soon" &&
                  (0, a.jsxs)("div", {
                    className:
                      "bg-greyShade rounded-lg text-primary-disabled px-2 py-1 mt-1 flex items-center gap-2",
                    children: [
                      (0, a.jsx)(C.Z, { size: 16 }),
                      (0, a.jsx)("p", {
                        className: "text-sm font-medium",
                        children: "Coming Soon",
                      }),
                    ],
                  })),
            ],
          });
        },
        L = l(67594);
      let M = (e) => {
        let { days: t, hours: l, minutes: r, type: s } = e;
        return (0, a.jsxs)("div", {
          className:
            "flex items-center justify-between gap-2 text-xs rounded-lg px-2 h-8 ".concat(
              "starts" === s
                ? "text-primary bg-primary/10"
                : "text-accent bg-accent/10"
            ),
          children: [
            (0, a.jsx)("span", {
              className: "".concat(
                "starts" === s ? "text-primary/60" : "text-accent/30"
              ),
              children: "starts" === s ? "Sale starts in" : "Sale ends in",
            }),
            (0, a.jsxs)("div", {
              className: "font-mono font-semibold",
              children: [
                String(t).padStart(2, "0"),
                "d : ",
                String(l).padStart(2, "0"),
                "h :",
                " ",
                String(r).padStart(2, "0"),
                "m",
              ],
            }),
          ],
        });
      };
      var A = (e) => {
          var t, l, r, n, o, i, d, c, u, m;
          let { node: p } = e,
            x = (0, s.useRouter)(),
            h = Date.now(),
            g = p.start_time ? new Date(p.start_time).getTime() : null,
            f = p.end_time ? new Date(p.end_time).getTime() : null,
            b =
              "Upcoming" === p.status && g
                ? { show: !0, date: g, type: "starts" }
                : "Active" === p.status &&
                  !!f &&
                  h < f && { show: !0, date: f, type: "ends" };
          return (0, a.jsxs)("div", {
            className:
              "flex flex-col border border-primary/10 bg-background-dark p-1 rounded-lg group duration-300 cursor-pointer hover:translate-y-[-2px] hover:border-primary/40",
            onClick: () => {
              (0, T.B)({
                action:
                  v.At.LAUNCHPAD_CARD_CLICK +
                  "-".concat(null == p ? void 0 : p.name),
                category: v.Vx.LAUNCHPAD,
                label: v._R.LAUNCHPAD,
              }),
                x.push("/launchpad/".concat(p.name));
            },
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-col bg-greyShade p-3 rounded-lg flex-1",
                children: [
                  (0, a.jsx)("div", {
                    className: "bg-background-dark h-32 rounded-lg",
                    children: (0, a.jsx)("img", {
                      src:
                        null === (l = p.metadata) || void 0 === l
                          ? void 0
                          : null === (t = l.display_info) || void 0 === t
                          ? void 0
                          : t.banner,
                      alt: p.name,
                      className: "w-full h-full object-cover rounded-lg",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex items-center justify-between mt-3",
                    children: [
                      (0, a.jsx)("p", {
                        className: "text-lg font-semibold",
                        children:
                          null === (n = p.metadata) || void 0 === n
                            ? void 0
                            : null === (r = n.display_info) || void 0 === r
                            ? void 0
                            : r.title,
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center gap-2 text-primary-disabled",
                        children: [
                          (0, a.jsx)("img", {
                            src:
                              null === (i = p.metadata) || void 0 === i
                                ? void 0
                                : null === (o = i.display_info) || void 0 === o
                                ? void 0
                                : o.network_logo,
                            alt:
                              null === (c = p.metadata) || void 0 === c
                                ? void 0
                                : null === (d = c.display_info) || void 0 === d
                                ? void 0
                                : d.network,
                            className: "w-4 h-4",
                          }),
                          (0, a.jsx)("p", {
                            className: "text-xs font-medium capitalize",
                            children:
                              null === (m = p.metadata) || void 0 === m
                                ? void 0
                                : null === (u = m.display_info) || void 0 === u
                                ? void 0
                                : u.network,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              "beamable" === p.name &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "bg-[#335CFF1A] text-primary text-sm rounded-lg px-2 py-2 mt-1 space-y-1",
                      "data-tooltip-id": "beamable-kyc-tooltip",
                      "data-tooltip-content": "Complete KYC after purchase",
                      children: "Complete KYC after purchase",
                    }),
                    (0, a.jsx)(Z.u, {
                      id: "beamable-kyc-tooltip",
                      place: "bottom",
                      className:
                        "!bg-background-dark !border !border-primary/10 !text-primary !px-3 !py-2 !rounded-lg !text-sm !opacity-100 !shadow-none",
                      classNameArrow: "!border-b border-r !border-primary/10",
                      delayShow: 100,
                    }),
                  ],
                }),
              (0, a.jsx)("div", {
                className: "bg-greyShade rounded-lg px-2 py-2 mt-1 space-y-1",
                children: b
                  ? (0, a.jsx)(L.ZP, {
                      date: b.date,
                      renderer: (e) => M({ ...e, type: b.type }),
                    })
                  : "Upcoming" !== p.status &&
                    (0, a.jsx)("div", {
                      className:
                        "bg-primary/10 rounded-lg px-2 h-8 flex items-center justify-center",
                      children: (0, a.jsx)("p", {
                        className: "text-sm text-primary/60",
                        children:
                          "Active" === p.status ? "Sale Live" : "Sale Ended",
                      }),
                    }),
              }),
              (null == p ? void 0 : p.status) === "Active" &&
                (0, a.jsxs)("div", {
                  className:
                    "bg-green-500/10 rounded-lg px-2 py-1 mt-1 flex items-center gap-2",
                  children: [
                    (0, a.jsx)("div", {
                      className: "w-2 h-2 bg-green-500 rounded-full",
                    }),
                    (0, a.jsx)("p", {
                      className: "text-sm font-medium text-green-500",
                      children: "Live",
                    }),
                  ],
                }),
              (null == p ? void 0 : p.status) === "Completed" &&
                (0, a.jsxs)("div", {
                  className:
                    "bg-greyShade rounded-lg text-primary-disabled px-2 py-1 mt-1 flex items-center gap-2",
                  children: [
                    (0, a.jsx)(j.Z, { size: 16 }),
                    (0, a.jsx)("p", {
                      className: "text-sm font-medium",
                      children: "Completed",
                    }),
                  ],
                }),
              (null == p ? void 0 : p.status) === "Upcoming" &&
                (0, a.jsxs)("div", {
                  className:
                    "bg-greyShade rounded-lg text-primary-disabled px-2 py-1 mt-1 flex items-center gap-2",
                  children: [
                    (0, a.jsx)(C.Z, { size: 16 }),
                    (0, a.jsx)("p", {
                      className: "text-sm font-medium",
                      children: "Coming Soon",
                    }),
                  ],
                }),
              (null == p ? void 0 : p.status) === "SoldOut" &&
                (0, a.jsxs)("div", {
                  className:
                    "bg-greyShade rounded-lg text-primary-disabled px-2 py-1 mt-1 flex items-center gap-2",
                  children: [
                    (0, a.jsx)(j.Z, { size: 16 }),
                    (0, a.jsx)("p", {
                      className: "text-sm font-medium",
                      children: "Sold Out",
                    }),
                  ],
                }),
            ],
          });
        },
        E = l(63691),
        P = l(35323),
        z = l(65726);
      let D = [
        { label: "Sale", value: "launchpad" },
        { label: "Bootstrapping", value: "bootstrap-event" },
      ];
      var O = (e) => {
        let { routeType: t, isLoading: l } = e,
          o = (0, s.useRouter)(),
          i = (0, s.usePathname)(),
          { bootstrapping: d, launchpadSales: c } = (0, E.q)(),
          [u, m] = r.useState(null),
          [p, x] = r.useState(""),
          [h, g] = r.useState([]),
          b = (e) => (u ? e.filter((e) => e.status === u) : e),
          y = (e) =>
            0 === h.length
              ? e
              : e.filter((e) => {
                  var l, a, r, s, n;
                  return t === v.F2.BOOTSTRAP_EVENT
                    ? h.includes(
                        (null ===
                          (a = e.metadata.bootstrapping_info.deployment_info) ||
                        void 0 === a
                          ? void 0
                          : null === (l = a.network) || void 0 === l
                          ? void 0
                          : l.toLowerCase()) || "testnet"
                      )
                    : h.includes(
                        (null === (n = e.metadata) || void 0 === n
                          ? void 0
                          : null === (s = n.display_info) || void 0 === s
                          ? void 0
                          : null === (r = s.network) || void 0 === r
                          ? void 0
                          : r.toLowerCase()) || "testnet"
                      );
                }),
          N = (e) => {
            if (!p) return e;
            let l = p.toLowerCase();
            return e.filter((e) => {
              var a, r, s, n, o, i, d, c, u, m;
              return t === v.F2.BOOTSTRAP_EVENT
                ? (null === (a = e.name) || void 0 === a
                    ? void 0
                    : a.toLowerCase().includes(l)) ||
                    (null === (r = e.description) || void 0 === r
                      ? void 0
                      : r.toLowerCase().includes(l)) ||
                    (null === (s = e.tokenSymbol) || void 0 === s
                      ? void 0
                      : s.toLowerCase().includes(l))
                : (null === (n = e.name) || void 0 === n
                    ? void 0
                    : n.toLowerCase().includes(l)) ||
                    (null === (d = e.metadata) || void 0 === d
                      ? void 0
                      : null === (i = d.display_info) || void 0 === i
                      ? void 0
                      : null === (o = i.title) || void 0 === o
                      ? void 0
                      : o.toLowerCase().includes(l)) ||
                    (null === (m = e.metadata) || void 0 === m
                      ? void 0
                      : null === (u = m.display_info) || void 0 === u
                      ? void 0
                      : null === (c = u.description) || void 0 === c
                      ? void 0
                      : c.toLowerCase().includes(l));
            });
          },
          j = N(y(b(d || []))),
          C = N(y(b(c || []))),
          k = p
            ? "No bootstrap events found matching your search"
            : (null == h ? void 0 : h.length) > 0
            ? "No bootstrap events found for selected network"
            : u
            ? "No bootstrap events found for selected status"
            : "No bootstrap events found",
          w = p
            ? "No sales found matching your search"
            : (null == h ? void 0 : h.length) > 0
            ? "No sales found for selected network"
            : u
            ? "No sales found for selected status"
            : "No sales found";
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className:
                "flex flex-col xl:flex-row xl:items-center justify-between gap-3",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "border border-primary/10 bg-background-dark p-1 rounded-xl w-fit",
                  children: (0, a.jsx)(n.mQ, {
                    tabs: D,
                    activeTab:
                      "/bootstrap-event" === i
                        ? "bootstrap-event"
                        : "launchpad",
                    setActiveTab: (e) => {
                      o.push("/".concat(e));
                    },
                    id: "nodepad-tabs",
                  }),
                }),
                (0, a.jsx)(f, {
                  onFilterChange: m,
                  onSearchChange: x,
                  selectedNetworks: h,
                  setSelectedNetworks: g,
                  routeType: t,
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "mt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5",
              children: [
                l &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(P.D, { bar: 6 }),
                      (0, a.jsx)(P.D, { bar: 6 }),
                      (0, a.jsx)(P.D, { bar: 6 }),
                      (0, a.jsx)(P.D, { bar: 6 }),
                    ],
                  }),
                t === v.F2.BOOTSTRAP_EVENT &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      !l &&
                        (null == j ? void 0 : j.length) === 0 &&
                        (0, a.jsx)("div", {
                          className:
                            "col-span-full flex flex-col items-center justify-center mt-20",
                          children: (0, a.jsx)(z.Z, {
                            type: "launchpad",
                            size: "md",
                            titleText: k,
                            subtitleText: k,
                          }),
                        }),
                      !l &&
                        (null == j
                          ? void 0
                          : j.map((e) => (0, a.jsx)(_, { node: e }, e.id))),
                    ],
                  }),
                t === v.F2.LAUNCHPAD &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      !l &&
                        (null == C ? void 0 : C.length) === 0 &&
                        (0, a.jsx)("div", {
                          className:
                            "col-span-full flex flex-col items-center justify-center mt-20",
                          children: (0, a.jsx)(z.Z, {
                            type: "launchpad",
                            size: "md",
                            titleText: w,
                            subtitleText: w,
                          }),
                        }),
                      !l &&
                        (null == C
                          ? void 0
                          : C.map((e) => (0, a.jsx)(A, { node: e }, e.id))),
                    ],
                  }),
              ],
            }),
          ],
        });
      };
    },
    87148: function (e, t, l) {
      l.d(t, {
        B: function () {
          return a;
        },
      });
      let a = (e) => {
        let { action: t, category: l, label: a, value: r } = e;
        window.gtag &&
          window.gtag("event", t, {
            event_category: l,
            event_label: a,
            value: r,
          });
      };
    },
    73742: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, l(67775).Z)("CellularNetworkIcon", [
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
    47488: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, l(67775).Z)("CodeIcon", [
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
    95830: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, l(67775).Z)("DiscordIcon", [
        [
          "path",
          {
            d: "M15.5009 17.75L16.7942 19.5205C16.9157 19.7127 17.149 19.7985 17.362 19.7224C18.1658 19.4353 20.1581 18.6572 21.7985 17.4725C21.9264 17.3801 22.0003 17.2261 21.9992 17.0673C21.9992 8.25 19.5009 5.75 19.5009 5.75C19.5009 5.75 17.5009 4.60213 15.3548 4.25602C15.1436 4.22196 14.9369 4.33509 14.8429 4.52891L14.398 5.44677C14.398 5.44677 13.2853 5.21397 12.0001 5.21397C10.7148 5.21397 9.60216 5.44677 9.60216 5.44677L9.15717 4.52891C9.0632 4.33509 8.8565 4.22196 8.64535 4.25602C6.50085 4.60187 4.50085 5.75 4.50085 5.75C4.50085 5.75 2.00086 8.25 2.00086 17.0673C1.99986 17.2261 2.07371 17.3801 2.20165 17.4725C3.84203 18.6572 5.83436 19.4353 6.63812 19.7224C6.85111 19.7985 7.08443 19.7127 7.20588 19.5205L8.50085 17.75",
            stroke: "currentColor",
            key: "k0",
          },
        ],
        [
          "path",
          {
            d: "M17.5009 16.75C17.5009 16.75 15.2058 18.25 12.0009 18.25C8.79593 18.25 6.50085 16.75 6.50085 16.75",
            stroke: "currentColor",
            key: "k1",
          },
        ],
        [
          "path",
          {
            d: "M17.2509 12.25C17.2509 13.3546 16.4674 14.25 15.5009 14.25C14.5344 14.25 13.7509 13.3546 13.7509 12.25C13.7509 11.1454 14.5344 10.25 15.5009 10.25C16.4674 10.25 17.2509 11.1454 17.2509 12.25Z",
            stroke: "currentColor",
            key: "k2",
          },
        ],
        [
          "path",
          {
            d: "M10.2509 12.25C10.2509 13.3546 9.46735 14.25 8.50085 14.25C7.53436 14.25 6.75085 13.3546 6.75085 12.25C6.75085 11.1454 7.53436 10.25 8.50085 10.25C9.46735 10.25 10.2509 11.1454 10.2509 12.25Z",
            stroke: "currentColor",
            key: "k3",
          },
        ],
      ]);
    },
    75718: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, l(67775).Z)("Linkedin01Icon", [
        ["path", { d: "M7 10V17", stroke: "currentColor", key: "k0" }],
        [
          "path",
          {
            d: "M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10",
            stroke: "currentColor",
            key: "k1",
          },
        ],
        [
          "path",
          { d: "M7.00801 7L6.99902 7", stroke: "currentColor", key: "k2" },
        ],
        [
          "path",
          {
            d: "M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z",
            stroke: "currentColor",
            key: "k3",
          },
        ],
      ]);
    },
    73079: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, l(67775).Z)("NewTwitterIcon", [
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
    66275: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, l(67775).Z)("Tick02Icon", [
        [
          "path",
          { d: "M5 14L8.5 17.5L19 6.5", stroke: "currentColor", key: "k0" },
        ],
      ]);
    },
  },
]);
