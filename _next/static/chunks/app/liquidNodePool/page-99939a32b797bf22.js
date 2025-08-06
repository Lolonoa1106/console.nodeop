(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [354],
  {
    69580: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 68771));
    },
    68771: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return j;
          },
        });
      var s = r(57437),
        a = r(2265),
        o = r(35323),
        l = r(21099),
        i = r(99376),
        n = r(63691),
        d = r(64060),
        c = (e) => {
          let { pool: t } = e;
          (0, i.useRouter)();
          let { setReminderModalOpen: r } = (0, n.q)();
          return (0, s.jsxs)("div", {
            className:
              "border border-primary/10 bg-background-dark p-1 rounded-lg group duration-300 cursor-pointer hover:translate-y-[-2px] hover:border-primary/40",
            onClick: () => window.open(t.link, "_blank"),
            children: [
              (0, s.jsxs)("div", {
                className: "flex flex-col bg-greyShade p-3 rounded-lg",
                children: [
                  (0, s.jsx)("div", {
                    className: "bg-background-dark h-32 rounded-lg",
                    children: (0, s.jsx)("img", {
                      src:
                        (null == t ? void 0 : t.image) ||
                        "PlaceholderBanner.png",
                      alt: null == t ? void 0 : t.name,
                      className: "w-full h-full object-cover rounded-lg",
                      onError: (e) => {
                        e.currentTarget.src = "https://placehold.co/400";
                      },
                      loading: "lazy",
                    }),
                  }),
                  (0, s.jsx)("p", {
                    className: "text-lg font-semibold mt-2 capitalize",
                    children: null == t ? void 0 : t.name,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "bg-greyShade rounded-lg px-2 py-2 mt-1 space-y-1",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex items-center justify-between pt-2",
                    children: [
                      (0, s.jsx)("p", {
                        className: "text-primary-disabled text-sm",
                        children: "Total Delegated",
                      }),
                      (0, s.jsx)("p", {
                        className: "text-sm font-semibold font-mono capitalize",
                        children: (null == t ? void 0 : t.totalDelegated) || 0,
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex items-center justify-between pt-2",
                    children: [
                      (0, s.jsx)("p", {
                        className: "text-primary-disabled text-sm",
                        children: "VT Supply",
                      }),
                      (0, s.jsx)("p", {
                        className: "text-sm font-semibold font-mono capitalize",
                        children: (null == t ? void 0 : t.vtSupply) || 0,
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "bg-greyShade rounded-lg px-2 py-2 mt-1 space-y-1",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex gap-1 w-full pt-2",
                    children: [
                      (0, s.jsx)("div", {
                        className: "h-1 rounded-lg bg-emerald-500",
                        style: {
                          width: "".concat(
                            null == t ? void 0 : t.vtBuybacks,
                            "%"
                          ),
                        },
                      }),
                      (0, s.jsx)("div", {
                        className: "h-1 rounded-lg bg-background-dark",
                        style: {
                          width: "".concat(
                            100 - (null == t ? void 0 : t.vtBuybacks),
                            "%"
                          ),
                        },
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "pt-2",
                    children: (0, s.jsxs)("div", {
                      className:
                        "flex items-center justify-between gap-1 text-sm font-medium capitalize",
                      children: [
                        (0, s.jsxs)("p", {
                          className: "text-emerald-500",
                          children: [null == t ? void 0 : t.vtBuybacks, "%"],
                        }),
                        (0, s.jsx)("p", {
                          className: "text-primary-disabled",
                          children: "VT Buybacks",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, s.jsx)(d.u, {
                id: "pool-name-".concat(null == t ? void 0 : t.name),
                place: "top",
                className:
                  "!bg-background-dark !border !border-primary/10 !text-primary !px-3 !py-2 !rounded-lg !text-sm !opacity-100 !shadow-none",
                classNameArrow: "!border-b border-r !border-primary/10",
                delayShow: 100,
              }),
            ],
          });
        },
        u = r(65726),
        p = r(69767),
        m = r(49575),
        x = r(17534),
        h = r(85912),
        C = (e) => {
          let {
            filters: t,
            activeTab: r,
            setActiveTab: a,
            searchTerm: o,
            setSearchTerm: i,
            viewType: n,
            setViewType: c,
          } = e;
          return (0, s.jsxs)("div", {
            className:
              "flex xl:flex-row flex-col xl:items-center justify-between gap-2",
            children: [
              (0, s.jsx)("div", {
                className:
                  "border border-primary/10 bg-background-dark p-1 rounded-xl w-fit",
                children: (0, s.jsx)(p.mQ, {
                  tabs: t,
                  activeTab: r,
                  setActiveTab: (e) => {
                    a(e);
                  },
                  id: "tab-deploy-node",
                }),
              }),
              r === l.$X.LNT_VAULTS &&
                (0, s.jsxs)("div", {
                  className: "flex flex-wrap items-center gap-2",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "relative w-full xl:w-80",
                      children: [
                        (0, s.jsx)("input", {
                          type: "text",
                          placeholder: "Search Vault",
                          value: o,
                          onChange: (e) => i(e.target.value),
                          className:
                            "w-full h-11 px-9 rounded-xl bg-background-dark border border-primary/10 placeholder:text-primary-disabled focus:outline-none",
                        }),
                        (0, s.jsx)(m.Z, {
                          size: 19,
                          className:
                            "absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/40",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex items-center gap-2 border border-primary/10 bg-background-dark p-1 rounded-xl h-11",
                      children: [
                        (0, s.jsx)("button", {
                          onClick: () => c(l.bW.GRID),
                          className:
                            "p-1.5 rounded-lg transition-colors ".concat(
                              n === l.bW.GRID ? "bg-primary/10" : ""
                            ),
                          "data-tooltip-id": "grid-view-tooltip",
                          "data-tooltip-content": "Grid View",
                          children: (0, s.jsx)(x.Z, {
                            size: 18,
                            className:
                              n === l.bW.GRID
                                ? "text-primary"
                                : "text-primary/40",
                          }),
                        }),
                        (0, s.jsx)(d.u, {
                          id: "grid-view-tooltip",
                          place: "left",
                          className:
                            "!bg-background-dark !border !border-primary/10 !text-primary !px-3 !py-2 !rounded-lg !text-sm !opacity-100 !shadow-none",
                          classNameArrow:
                            "!border-b border-r !border-primary/10",
                          delayShow: 100,
                        }),
                        (0, s.jsx)("button", {
                          onClick: () => c(l.bW.LIST),
                          className:
                            "p-1.5 rounded-lg transition-colors ".concat(
                              n === l.bW.LIST ? "bg-primary/10" : ""
                            ),
                          "data-tooltip-id": "list-view-tooltip",
                          "data-tooltip-content": "List View",
                          children: (0, s.jsx)(h.Z, {
                            size: 18,
                            className:
                              n === l.bW.LIST
                                ? "text-primary"
                                : "text-primary/40",
                          }),
                        }),
                        (0, s.jsx)(d.u, {
                          id: "list-view-tooltip",
                          place: "top",
                          className:
                            "!bg-background-dark !border !border-primary/10 !text-primary !px-3 !py-2 !rounded-lg !text-sm !opacity-100 !shadow-none",
                          classNameArrow:
                            "!border-b border-r !border-primary/10",
                          delayShow: 100,
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        },
        y = r(19814);
      let f = () =>
        (0, s.jsxs)("div", {
          className:
            "hidden md:grid grid-cols-12 gap-4 px-3 py-3 text-primary-disabled text-[13px] bg-greyShade/80 rounded-xl mb-2",
          children: [
            (0, s.jsx)("div", { className: "col-span-3", children: "Name" }),
            (0, s.jsx)("div", {
              className: "col-span-2",
              children: "Total Delegated",
            }),
            (0, s.jsx)("div", {
              className: "col-span-2",
              children: "VT Supply",
            }),
            (0, s.jsx)("div", {
              className: "col-span-2",
              children: "VT Buybacks",
            }),
            (0, s.jsx)("div", { className: "col-span-1" }),
          ],
        });
      var k = (e) => {
        let { pool: t } = e;
        return (
          (0, i.useRouter)(),
          (0, s.jsxs)("div", {
            className: "flex flex-col cursor-pointer",
            onClick: () => window.open(t.link, "_blank"),
            children: [
              (0, s.jsxs)("div", {
                className:
                  "md:grid md:grid-cols-12 flex flex-col gap-4 items-start md:items-center bg-background-dark rounded-xl px-3 py-3",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "md:col-span-3 w-full flex items-center justify-between",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center",
                            children: (0, s.jsx)("img", {
                              src: "https://icons-assets.nodeops.xyz/icons/Ather.webp",
                              alt: t.name,
                              className: "w-6 h-6",
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: "flex-1",
                            children: (0, s.jsx)("p", {
                              className: "text-[15px] font-medium",
                              children: t.name,
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "flex md:hidden justify-between items-center mt-2",
                        children: (0, s.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            (0, s.jsx)("span", {
                              className:
                                "text-primary-disabled text-xs self-end",
                              children: "Total Delegated",
                            }),
                            (0, s.jsx)("p", {
                              className: "text-sm capitalize",
                              children: t.totalDelegated,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "hidden md:block md:col-span-2",
                    children: (0, s.jsx)("p", {
                      className: "text-[15px] capitalize text-primary-disabled",
                      children: t.totalDelegated,
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "hidden md:block md:col-span-2",
                    children: (0, s.jsx)("p", {
                      className: "text-[15px] capitalize text-primary-disabled",
                      children: t.vtSupply,
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "hidden md:flex md:col-span-2 gap-2",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex gap-1 w-full pt-2",
                        children: [
                          (0, s.jsx)("div", {
                            className: "h-[6px] rounded-[1px] bg-emerald-500",
                            style: {
                              width: "".concat(
                                null == t ? void 0 : t.vtBuybacks,
                                "%"
                              ),
                            },
                          }),
                          (0, s.jsx)("div", {
                            className: "h-[6px] rounded-[1px] bg-border",
                            style: {
                              width: "".concat(
                                100 - (null == t ? void 0 : t.vtBuybacks),
                                "%"
                              ),
                            },
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: "",
                        children: (0, s.jsx)("div", {
                          className:
                            "flex items-center justify-between gap-1 text-sm font-medium capitalize",
                          children: (0, s.jsxs)("p", {
                            className: "text-primary-disabled",
                            children: [null == t ? void 0 : t.vtBuybacks, "%"],
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "hidden md:flex md:col-span-1 gap-2 justify-end",
                    children: (0, s.jsx)(y.Z, {
                      className: "text-[#7A7A7A]",
                      size: 16,
                    }),
                  }),
                ],
              }),
              (0, s.jsx)(d.u, {
                id: "list-categories-".concat(t.name),
                place: "top",
                className:
                  "!bg-background-dark !border !border-primary/10 !text-primary !px-3 !py-2 !rounded-lg !text-sm !opacity-100 !shadow-none",
                classNameArrow: "!border-b border-r !border-primary/10",
                delayShow: 100,
              }),
            ],
          })
        );
      };
      let b = [
        {
          title: "Step 1: Deposit Your NFT",
          steps: [
            "If you own a transferable NFT from a supported Partner Project, you can deposit it into the LNT Vault.",
            "In return, you will receive Vesting Tokens (VT) instantly, which provide immediate liquidity.",
          ],
        },
        {
          title: "Step 2: Receive VT",
          steps: [
            "VT (Vesting Token): Representing the future rewards of your NFT and can be swapped for the project's native token (T) for liquidity.",
            "YT (Yield Token): Some projects design extra yield into holding the NFT such as network fee sharing or airdrops, in which case a YT will be minted to claim future yield. YT can also be traded.",
          ],
        },
        {
          title: "Step 3: Utilize Your VT",
          steps: [
            "Hold VT till maturity to redeem T at 1:1 ratio, without needing to delegate or run node.",
            "Trade any amount of VT for liquidity.",
            "Provide VT:T liquidity to earn extra swap fees.",
            "A suite of arbitrage opportunities to profit from VT:T's converging price.",
          ],
        },
        {
          title: "Step 4: Reclaim Your NFT (If Needed)",
          steps: [
            "To withdraw your NFT, simply return and burn the required VT.",
            "If applicable, a minimum lock-in period may apply.",
          ],
        },
        {
          title: "Where Do the NFTs Go?",
          steps: [
            "Deposited NFTs are used to spin up nodes via NodeOps.",
            "LNT receives native token rewards from the Partner Project and manages node operations.",
          ],
        },
        {
          title: "Track & Manage",
          steps: [
            "View your VT/YT balance and real-time rewards.",
            "Partner Project details & VT buyback rates are displayed in the UI.",
          ],
        },
      ];
      function g() {
        return (0, s.jsxs)("div", {
          className:
            "flex flex-col lg:flex-row justify-center w-full gap-9 mt-6",
          children: [
            (0, s.jsxs)("div", {
              className: "w-full lg:w-1/2",
              children: [
                (0, s.jsx)("h1", {
                  className: "text-lg font-medium",
                  children: "How it Works",
                }),
                (0, s.jsx)("div", {
                  className: "space-y-6 mt-6",
                  children: b.map((e) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        children: [
                          (0, s.jsx)("h2", {
                            className: "text-sm",
                            children: e.title,
                          }),
                          (0, s.jsx)("ul", {
                            className:
                              "text-sm text-[#7A7A7A] list-disc list-outside pl-4",
                            children: e.steps.map((e) =>
                              (0, s.jsx)("li", { children: e }, e)
                            ),
                          }),
                        ],
                      },
                      e.title
                    )
                  ),
                }),
                (0, s.jsx)("p", {
                  className: "text-sm text-[#7A7A7A] mt-6",
                  children:
                    "For more details, check our FAQ or support page. \uD83D\uDE80",
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "w-full lg:w-1/2",
              children: (0, s.jsx)("video", {
                src: "https://ik.imagekit.io/nodeops/assets/Zoo%20x%20Aethir%20Checker-LNT%20Vault%20Tutorial.mp4?updatedAt=1754462662341",
                className: "w-full rounded-lg",
                controls: !0,
              }),
            }),
          ],
        });
      }
      var v = r(83464);
      let N = [
        { label: "LNT Vaults", value: l.$X.LNT_VAULTS },
        { label: "User Guide", value: l.$X.USER_GUIDES },
      ];
      var j = () => {
        let [e, t] = (0, a.useState)(!1),
          [r, i] = (0, a.useState)(l.$X.LNT_VAULTS),
          [n, d] = (0, a.useState)(""),
          [p, m] = (0, a.useState)(l.bW.GRID),
          [x, h] = (0, a.useState)(null),
          y = [
            {
              name: "Aethir",
              totalDelegated: (null == x ? void 0 : x.totalDeposited) || 0,
              vtSupply: Number(null == x ? void 0 : x.vtSupply) || 0,
              ytSupply: Number(null == x ? void 0 : x.vtBuyback) || 0,
              vtBuybacks: Number(null == x ? void 0 : x.vtBuyback) || 0,
              link: "https://app.zoofi.io/lnt/vaults?vault=0xf8dfaa0967c812a43d02059f2b14786dceb84e8b",
              image:
                "https://ik.imagekit.io/nodeops/poll/Aethir/Aethir.webp?updatedAt=1741588152135",
            },
          ];
        (0, a.useEffect)(() => {
          (async () => {
            h(
              (
                await v.Z.get(
                  "https://api.zoofi.io/api/third/lntstat/0xf8dfaa0967c812a43d02059f2b14786dceb84e8b"
                )
              ).data.data
            );
          })();
        }, []);
        let b = (0, a.useMemo)(
          () =>
            null == y
              ? void 0
              : y.filter((e) => {
                  var t, r;
                  return null == e
                    ? void 0
                    : null === (r = e.name) || void 0 === r
                    ? void 0
                    : null === (t = r.toLowerCase()) || void 0 === t
                    ? void 0
                    : t.includes(n.toLowerCase());
                }),
          [y, n]
        );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(C, {
              filters: N,
              activeTab: r,
              setActiveTab: i,
              searchTerm: n,
              setSearchTerm: d,
              viewType: p,
              setViewType: m,
            }),
            r === l.$X.LNT_VAULTS
              ? (0, s.jsx)("div", {
                  className: "mt-6 ".concat(
                    p === l.bW.GRID
                      ? "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4"
                      : ""
                  ),
                  children: e
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(o.D, { bar: 4 }),
                          (0, s.jsx)(o.D, { bar: 4 }),
                          (0, s.jsx)(o.D, { bar: 4 }),
                          (0, s.jsx)(o.D, { bar: 4 }),
                        ],
                      })
                    : e || 0 !== b.length
                    ? p === l.bW.LIST
                      ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(f, {}),
                            (0, s.jsx)("div", {
                              className: "space-y-2",
                              children: b.map((e) =>
                                (0, s.jsx)(k, { pool: e }, e.name)
                              ),
                            }),
                          ],
                        })
                      : b.map((e) => (0, s.jsx)(c, { pool: e }, e.name))
                    : (0, s.jsx)("div", {
                        className:
                          "col-span-full flex justify-center items-center mt-20",
                        children: (0, s.jsx)(u.Z, {
                          type: "liquidNodePool",
                          size: "md",
                        }),
                      }),
                })
              : (0, s.jsx)(g, {}),
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
      var s = r(57437),
        a = r(2265),
        o = r(61697),
        l = r(84744),
        i = r(65210),
        n = r(4936),
        d = r(26995),
        c = r(87684),
        u = r(59283),
        p = r(67609);
      let m = {
        login: {
          title: "You are not logged in",
          subtitle: "Please login to continue",
          href: "/login",
          actionText: "Login",
          icon: o.Z,
        },
        refer: {
          title: "Not There Yet",
          subtitle:
            "Earn Node point to start referring your friends and get sweet multipliers",
          href: "/deployNode",
          actionText: "Deploy Node",
          icon: l.Z,
        },
        nodefolio: {
          title: "No deployed nodes",
          subtitle: "You have not deployed any nodes yet",
          icon: i.Z,
          href: "/deployNode",
          actionText: "Deploy Node",
        },
        default: {
          title: "No data found",
          subtitle: "There is no data to display",
          icon: l.Z,
          href: "/deployNode",
          actionText: "Deploy Node",
        },
        launchpad: {
          title: "No nodes found",
          subtitle: "No nodes found",
          icon: n.Z,
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
          icon: p.Z,
          href: "/liquidNodePool",
          actionText: "",
        },
      };
      var x = r(99376),
        h = r(69767),
        C = r(63691),
        y = (e) => {
          let { type: t, size: r = "md", titleText: o, subtitleText: l } = e,
            { title: i, subtitle: n, href: d, actionText: c, icon: u } = m[t],
            p = (0, x.useRouter)(),
            { setLoginModalOpen: y } = (0, C.q)();
          return (0, s.jsxs)("div", {
            className: "flex flex-col items-center justify-center h-full",
            children: [
              (0, s.jsx)("div", {
                className:
                  "flex justify-center items-center rounded-full ".concat(
                    "sm" === r ? "" : "border-primary/10 border p-3"
                  ),
                children: (0, s.jsx)("div", {
                  className:
                    "flex justify-center items-center rounded-full border-primary/30 border p-3",
                  children: (0, s.jsx)("div", {
                    className: "flex justify-center items-center gap-2 ".concat(
                      "sm" === r ? "w-20 h-20" : "w-24 h-24",
                      " border-primary/70 border rounded-full"
                    ),
                    children: a.createElement(u, {
                      className: "sm" === r ? "w-10 h-10" : "w-12 h-12",
                    }),
                  }),
                }),
              }),
              (0, s.jsx)("h3", {
                className: "text-lg font-semibold mt-4",
                children: o || i,
              }),
              (0, s.jsx)("p", {
                className:
                  "text-sm mt-1 text-primary-disabled max-w-sm text-center",
                children: l || n,
              }),
              c &&
                (0, s.jsx)(h.zx, {
                  variant: "link",
                  className: "!text-accent mt-2",
                  onClick: () => {
                    "login" === t ? y(!0) : p.push(d);
                  },
                  children: c,
                }),
            ],
          });
        };
    },
    44537: function (e, t, r) {
      "use strict";
      var s = r(57437);
      r(2265),
        (t.Z = () =>
          (0, s.jsxs)("svg", {
            className: "animate-spin h-5 w-5",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              (0, s.jsx)("circle", {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4",
              }),
              (0, s.jsx)("path", {
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
          return o;
        },
        a: function () {
          return s.Z;
        },
      });
      var s = r(44537),
        a = r(57437),
        o = (e) => {
          let { bar: t = 10 } = e;
          return (0, a.jsx)("div", {
            className: "space-y-4",
            children: [...Array(t)].map((e, t) =>
              (0, a.jsx)(
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
    19814: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      let s = (0, r(67775).Z)("ArrowRight01Icon", [
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
    87684: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      let s = (0, r(67775).Z)("Blockchain01Icon", [
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
    65210: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      let s = (0, r(67775).Z)("DashboardCircleRemoveIcon", [
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
          return s;
        },
      });
      let s = (0, r(67775).Z)("Database02Icon", [
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
          return s;
        },
      });
      let s = (0, r(67775).Z)("File02Icon", [
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
    84744: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      let s = (0, r(67775).Z)("GiftIcon", [
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
          return s;
        },
      });
      let s = (0, r(67775).Z)("GridViewIcon", [
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
    85912: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      let s = (0, r(67775).Z)("ListViewIcon", [
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
          return s;
        },
      });
      let s = (0, r(67775).Z)("Login01Icon", [
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
    67609: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      let s = (0, r(67775).Z)("PoolIcon", [
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
          return s;
        },
      });
      let s = (0, r(67775).Z)("Search01Icon", [
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
    4936: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      let s = (0, r(67775).Z)("ZapIcon", [
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
    99376: function (e, t, r) {
      "use strict";
      var s = r(35475);
      r.o(s, "useParams") &&
        r.d(t, {
          useParams: function () {
            return s.useParams;
          },
        }),
        r.o(s, "usePathname") &&
          r.d(t, {
            usePathname: function () {
              return s.usePathname;
            },
          }),
        r.o(s, "useRouter") &&
          r.d(t, {
            useRouter: function () {
              return s.useRouter;
            },
          });
    },
  },
  function (e) {
    e.O(0, [3814, 5501, 3080, 4060, 5626, 2971, 5030, 1744], function () {
      return e((e.s = 69580));
    }),
      (_N_E = e.O());
  },
]);
