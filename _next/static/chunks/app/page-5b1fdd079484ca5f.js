(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1931],
  {
    30066: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 66968));
    },
    66968: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return w;
          },
        });
      var s = l(57437),
        o = l(65726),
        a = l(19814),
        n = l(27648),
        i = l(2265),
        r = l(95658),
        d = () => {
          var e, t, l, o, a, n, d;
          let [c, x] = (0, i.useState)(null);
          return (
            (0, i.useEffect)(() => {
              try {
                fetch(
                  "https://oms-oneclick.nodeops.xyz/api/v1/dune/stats?refresh=true"
                )
                  .then((e) => e.json())
                  .then((e) => {
                    x(null == e ? void 0 : e.data);
                  });
              } catch (e) {
                console.log(e);
              }
            }, []),
            (0, s.jsxs)("div", {
              className:
                "grid grid-cols-1 xl:grid-cols-4 xl:grid-rows-6 gap-3 h-auto xl:h-[calc(100%-30px)]",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "col-span-1 xl:col-span-2 xl:row-span-4 backdrop-blur-xl bg-[#333333]/30 rounded-xl flex flex-col justify-between p-3 min-h-[120px]",
                  children: [
                    (0, s.jsxs)("h2", {
                      className: "text-2xl xl:text-3xl font-medium font-mono",
                      children: [
                        (0, r.uf)(
                          null !==
                            (t =
                              null == c
                                ? void 0
                                : null ===
                                    (e = c.total_nodepoints_distributed) ||
                                  void 0 === e
                                ? void 0
                                : e.value) && void 0 !== t
                            ? t
                            : 0
                        ),
                        "+",
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: "text-primary/60 text-xs xl:text-sm",
                      children: "Node Points Distributed",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "col-span-1 xl:col-span-2 xl:row-span-2 xl:col-start-1 xl:row-start-5 backdrop-blur-xl bg-[#333333]/30 rounded-xl flex flex-col justify-between p-3 min-h-[100px]",
                  children: [
                    (0, s.jsx)("h2", {
                      className: "text-2xl xl:text-3xl font-medium font-mono",
                      children: (0, r.uf)(
                        null !==
                          (l =
                            null == c ? void 0 : c.ecosystem_partners.value) &&
                          void 0 !== l
                          ? l
                          : 0
                      ),
                    }),
                    (0, s.jsx)("p", {
                      className: "text-primary/60 text-xs xl:text-sm",
                      children: "Protocols Supported",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "col-span-1 xl:col-span-2 xl:row-span-2 xl:col-start-3 xl:row-start-1 backdrop-blur-xl bg-[#333333]/30 rounded-xl flex flex-col justify-between p-3 min-h-[100px]",
                  children: [
                    (0, s.jsxs)("h2", {
                      className: "text-2xl xl:text-3xl font-medium font-mono",
                      children: [
                        (0, r.uf)(
                          null !==
                            (o =
                              null == c
                                ? void 0
                                : c.assets_under_management.value) &&
                            void 0 !== o
                            ? o
                            : 0
                        ),
                        "+",
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: "text-primary/60 text-xs xl:text-sm",
                      children: "Assets Under Management",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "col-span-1 xl:row-span-2 xl:col-start-3 xl:row-start-3 backdrop-blur-xl bg-[#333333]/30 rounded-xl flex flex-col justify-between p-3 min-h-[100px]",
                  children: [
                    (0, s.jsxs)("h2", {
                      className: "text-xl xl:text-2xl font-medium font-mono",
                      children: [
                        (0, r.uf)(
                          null !==
                            (a =
                              null == c ? void 0 : c.nodefolio_created.value) &&
                            void 0 !== a
                            ? a
                            : 0
                        ),
                        "+",
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: "text-primary/60 text-xs",
                      children: "NodeFolio Created",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "col-span-1 xl:row-span-2 xl:col-start-4 xl:row-start-3 backdrop-blur-xl bg-[#333333]/30 rounded-xl flex flex-col justify-between p-3 min-h-[100px]",
                  children: [
                    (0, s.jsxs)("h2", {
                      className: "text-xl xl:text-2xl font-medium font-mono",
                      children: [
                        (0, r.uf)(
                          null !==
                            (n = null == c ? void 0 : c.total_nodes.value) &&
                            void 0 !== n
                            ? n
                            : 0
                        ),
                        "+",
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: "text-primary/60 text-xs",
                      children: "Total Nodes",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "col-span-1 xl:col-span-2 xl:row-span-2 xl:col-start-3 xl:row-start-5 backdrop-blur-xl bg-[#333333]/30 rounded-xl flex flex-col justify-between p-3 min-h-[100px]",
                  children: [
                    (0, s.jsxs)("h2", {
                      className: "text-2xl xl:text-3xl font-medium font-mono",
                      children: [
                        (0, r.uf)(
                          null !==
                            (d =
                              null == c
                                ? void 0
                                : c.monthly_active_users.value) && void 0 !== d
                            ? d
                            : 0
                        ),
                        "+",
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: "text-primary/60 text-xs xl:text-sm",
                      children: "Monthly Active Users",
                    }),
                  ],
                }),
              ],
            })
          );
        };
      l(7354), l(70099), l(86275);
      var c = l(19764),
        x = l(14435);
      let m = [
        {
          image:
            "https://ik.imagekit.io/nodeops/assets/Beamable_Ad.webp?updatedAt=1753084523650",
          title: "Beamable",
          description: "",
          code: "",
          link: "https://console.nodeops.network/launchpad/beamable",
          isComingSoon: !1,
          ctaText: "Purchase",
          ctaMode: "Light",
          showReminderCTA: "",
          releaseDate: "",
          releaseTitle: "",
          totalNodes: 3e3,
          rewards:
            "1% of the Total $BMB supply (10 Million tokens) will be emitted to the 3,000 buyers of the Alpha Checker Node Sale.",
          socials: {
            website: "https://beamable.network",
            docs: "https://docs.beamable.network",
            twitter: "https://x.com/beamablenetwork",
          },
        },
        {
          image: "NodeOpsBanner.webp",
          title: "Deploy UNO node",
          description: "",
          code: "",
          link: "https://console.nodeops.network/deployNode/nodeops-mainnet-orchestrator",
          isComingSoon: !1,
          ctaText: "Deploy",
          ctaMode: "Light",
          showReminderCTA: "",
          releaseDate: "",
          releaseTitle: "",
          totalNodes: 1e4,
          rewards: "15% of the total supply allocated to Protocol incentives",
          socials: {
            website: "https://nodeops.network",
            docs: "https://docs.nodeops.network",
            twitter: "https://x.com/NodeOpsHQ",
          },
        },
        {
          image: "NodeOpsStakeBanner.webp",
          title: "Stake $NODE",
          description: "",
          code: "",
          link: "https://portal.nodeops.network/stake",
          isComingSoon: !1,
          ctaText: "Stake",
          ctaMode: "Light",
          showReminderCTA: "",
          releaseDate: "",
          releaseTitle: "",
          totalNodes: 0,
          rewards:
            "47.5% of the total supply allocated to Community incentives",
          socials: {
            website: "https://nodeops.network",
            docs: "https://docs.nodeops.network",
            twitter: "https://x.com/NodeOpsHQ",
          },
        },
        {
          image: "BeamBanner.webp",
          title: "Beam",
          description: "Validator Node Deployment is live now",
          code: "",
          link: "https://console.nodeops.xyz/deployNode",
          isComingSoon: !1,
          ctaText: "Deploy",
          ctaMode: "Light",
          showReminderCTA: "",
          releaseDate: "",
          releaseTitle: "",
          totalNodes: 0,
          rewards: "",
          socials: {
            website: "https://onbeam.com/",
            docs: "https://docs.onbeam.com/nodes",
            twitter: "https://x.com/BuildOnBeam",
          },
        },
      ];
      var u = l(75224),
        p = l(18488),
        h = l(73079),
        f = l(2570),
        g = l(55251),
        A = () => {
          let [e, t] = (0, i.useState)(0),
            l = (0, i.useRef)(null);
          return (0, s.jsx)("div", {
            className: "w-full h-full flex flex-col",
            children: (0, s.jsx)("div", {
              className: "w-full relative h-full ",
              children: (0, s.jsx)(c.tq, {
                loop: !0,
                modules: [x.pt],
                autoplay: { delay: 6e3, disableOnInteraction: !1 },
                slidesPerView: 1,
                onSlideChange: (e) => {
                  t(e.realIndex);
                },
                onAutoplayTimeLeft: (e, t, s) => {
                  l.current &&
                    (l.current.style.width = "".concat(
                      Math.ceil((1 - s) * 100),
                      "%"
                    ));
                },
                spaceBetween: 32,
                className:
                  "!overflow-hidden xl:!w-full md:!w-[600px] !w-[280px]",
                children: m.map((e, t) =>
                  (0, s.jsxs)(
                    c.o5,
                    {
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "flex flex-wrap justify-between items-center gap-2",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex flex-wrap items-center gap-2",
                              children: [
                                e.socials.website &&
                                  (0, s.jsxs)(n.default, {
                                    href: e.socials.website,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "flex items-center gap-2 border border-primary/5 rounded-lg py-1 px-2",
                                    children: [
                                      (0, s.jsx)(u.Z, { size: 16 }),
                                      (0, s.jsx)("p", {
                                        className: "text-sm",
                                        children: "Website",
                                      }),
                                    ],
                                  }),
                                e.socials.docs &&
                                  (0, s.jsxs)(n.default, {
                                    href: e.socials.docs,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "flex items-center gap-2 border border-primary/5 rounded-lg py-1 px-2",
                                    children: [
                                      (0, s.jsx)(p.Z, { size: 16 }),
                                      (0, s.jsx)("p", {
                                        className: "text-sm",
                                        children: "Docs",
                                      }),
                                    ],
                                  }),
                                e.socials.twitter &&
                                  (0, s.jsxs)(n.default, {
                                    href: e.socials.twitter,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "flex items-center gap-2 border border-primary/5 rounded-lg py-1 px-2",
                                    children: [
                                      (0, s.jsx)(h.Z, { size: 16 }),
                                      (0, s.jsx)("p", {
                                        className: "text-sm",
                                        children: "X (Twitter)",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            (null == e ? void 0 : e.showReminderCTA) !== ""
                              ? (0, s.jsx)(g.z, {
                                  lefticon: (0, s.jsx)(f.Z, { size: 16 }),
                                  size: "small",
                                  className: "h-7 !rounded-lg",
                                  children: "Notify Me",
                                })
                              : (null == e ? void 0 : e.ctaText) !== "" &&
                                !(null == e ? void 0 : e.isComingSoon) &&
                                (0, s.jsx)(g.z, {
                                  righticon: (0, s.jsx)(a.Z, { size: 16 }),
                                  size: "small",
                                  className: "h-7 !rounded-lg",
                                  onClick: () => {
                                    var t;
                                    null === (t = window) ||
                                      void 0 === t ||
                                      t.open(
                                        null == e ? void 0 : e.link,
                                        "_blank"
                                      );
                                  },
                                  children: null == e ? void 0 : e.ctaText,
                                }),
                            (null == e ? void 0 : e.isComingSoon) &&
                              (0, s.jsx)(g.z, {
                                size: "small",
                                className: "h-7 !rounded-lg",
                                disabled: !0,
                                children: "Coming Soon",
                              }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex flex-col justify-between gap-2 w-full mt-3",
                          children: [
                            (0, s.jsx)("img", {
                              src: e.image,
                              alt: e.title || "Slide ".concat(t + 1),
                              className: "w-full h-64 object-cover rounded-xl",
                              loading: "eager",
                            }),
                            (0, s.jsxs)("div", {
                              className: "flex flex-col gap-2 mt-3",
                              children: [
                                (0, s.jsx)("h2", {
                                  className: "font-semibold text-2xl uppercase",
                                  children: e.title,
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "flex md:flex-row flex-col gap-3 justify-between items-start",
                                  children: [
                                    e.description
                                      ? (0, s.jsxs)("div", {
                                          className:
                                            "flex flex-col items-start",
                                          children: [
                                            (0, s.jsx)("p", {
                                              className: "font-medium",
                                              children: e.description,
                                            }),
                                            (0, s.jsx)("p", {
                                              className:
                                                "font-medium text-xs text-primary/60",
                                              children: "Info",
                                            }),
                                          ],
                                        })
                                      : (0, s.jsxs)("div", {
                                          className:
                                            "flex flex-col items-start",
                                          children: [
                                            (0, s.jsx)("p", {
                                              className: "font-medium text-xs",
                                              children: e.rewards,
                                            }),
                                            (0, s.jsx)("p", {
                                              className:
                                                "font-medium text-xs text-primary/60",
                                              children: "Rewards",
                                            }),
                                          ],
                                        }),
                                    e.totalNodes > 0 &&
                                      (0, s.jsxs)("div", {
                                        className:
                                          "flex flex-col md:items-end items-start",
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: "font-medium font-mono",
                                            children: e.totalNodes,
                                          }),
                                          (0, s.jsx)("p", {
                                            className:
                                              "font-medium text-xs text-primary/60 text-nowrap",
                                            children: "Total Nodes",
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    "".concat(e.title, "-").concat(t)
                  )
                ),
              }),
            }),
          });
        },
        b = () =>
          (0, s.jsxs)("div", {
            className:
              "bg-background-dark p-3 rounded-lg flex flex-col xl:flex-row gap-4 home-bg xl:h-[450px]",
            children: [
              (0, s.jsxs)("div", {
                className: "xl:w-1/2 w-full",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex justify-between items-center mb-1",
                    children: [
                      (0, s.jsx)("p", {
                        className: "text-lg font-medium",
                        children: "About NodeOps",
                      }),
                      (0, s.jsxs)(n.default, {
                        href: "https://dune.com/nodeops/stats",
                        className:
                          "text-accent flex items-center gap-1 text-sm",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                          "Check Stats ",
                          (0, s.jsx)(a.Z, { size: 16 }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)(d, {}),
                ],
              }),
              (0, s.jsx)("div", {
                className:
                  "xl:w-1/2 w-full backdrop-blur-xl bg-[#333333]/30 rounded-xl h-full p-4",
                children: (0, s.jsx)(A, {}),
              }),
            ],
          }),
        N = l(75184),
        v = l(63691),
        w = () => {
          let { isLoggedIn: e } = (0, v.q)();
          return (0, s.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, s.jsx)(b, {}),
              e
                ? (0, s.jsx)("div", {
                    className: "mt-5",
                    children: (0, s.jsx)(N.Z, { isLanding: !0 }),
                  })
                : (0, s.jsx)("div", {
                    className: "mt-5 bg-background-dark px-3 py-6 rounded-lg",
                    children: (0, s.jsx)(o.Z, { type: "login", size: "sm" }),
                  }),
            ],
          });
        };
    },
    54715: function (e, t, l) {
      "use strict";
      l.d(t, {
        w: function () {
          return s;
        },
      });
      let s = {
        logoIcon: {
          src: "/_next/static/media/logoIcon.b04d1afb.svg",
          height: 151,
          width: 228,
          blurWidth: 0,
          blurHeight: 0,
        },
        badge1: {
          src: "/_next/static/media/Badge1.d4a905ce.png",
          height: 401,
          width: 401,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAgUlEQVR42gWAvQ7BUBSAz+uczUt4IjFI1GZsGonaTIRUy9ZF/J2LhYmnkDS5+z3LJ4L8NNjG1x6sU0Q6PccpfXqMOMao8rWWZZowIE8VH5OXV9wJXGgpeboEL5jz5saYAScXs4Is5cwYpoyrSdAmlizYsmIXHypIo7VVvveD1Yr8ARNCXfAPrZOsAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        badge2: {
          src: "/_next/static/media/Badge2.bd2b3cfb.png",
          height: 494,
          width: 450,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAz0lEQVR42mOAgf8f51s9PL5y6f9P860Qgv8/8j6+fr1rWd+9f1HKH/4v6733D8QHiTM8vnWzd2Lhh/+cDP//Zyf+/+0JpBcVf/j/5PbNXobrZ2/NLDL98b8y5//vPVf//+9r/P+7yuTnf5A4w52rj+YU2vz5H2X/8deCne/++4R9+BVh8ff/baA4w8Ob52rXTnr2P5zhPxC//+0FpJdOev4fJM4ABEy3d6Um75h68HlP1tv/O6ceen5nV0oySJwBBloSGeTmd9mXtSQxyMHEAAGFff5C5kajAAAAAElFTkSuQmCC",
          blurWidth: 7,
          blurHeight: 8,
        },
        badge3: {
          src: "/_next/static/media/Badge3.f179e92d.png",
          height: 429,
          width: 400,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA4klEQVR42jWO20oCQQCGx9epd+shCgk6gEReBNVGoU4nd7OCthbMA8oqeqGoKLreKIqIF7qyMzsz+7sKfpf//118ZEvmdnFoUff163Gt/pLum2YsDnZHruTFyzZX36aPyxhD4Ymja3L1n/euSdURmDCg1VfS+uSYFZVEA2jXJchvU04rA4HliAeQgOuwYF6QqNlySmjW712kGeKxgRrrI9xcDdV9SiBtiR55MLyz4zuOo9OVyGpOkKFMRBMCmu6dh0n5yEuC0WQYYn8odEyJ92eeIoRGyJ6y7kdLP6Fg+Cf7bQNsy58tHYeu7gAAAABJRU5ErkJggg==",
          blurWidth: 7,
          blurHeight: 8,
        },
        badge4: {
          src: "/_next/static/media/Badge4.8f1f42cf.png",
          height: 400,
          width: 400,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AQAAAABqRAAJLDGyXywsNW8SIv8AAxbokSgmHqHOwcz3AQAeAAl1DcnEAQAmMjoV+wAcUf8Att4DAAkM3s5DFcA8AW0AsmhWMzCX1wv4+5nC8QMpJwgAAQjl/eYA4gUrBhFpAeiy2dcIspIonxhv/jJTJQLSvAAA2r7Z/tTu8wJ0byLYAdev0dfpvVgovQm7/gcYFALu7v4ACQHv/gxFCwI+8A/YAYlY5GjlMpGX8gUG+wSIZgP86fsAILH2/TItGgXrIu5pAY0A/wnphLDE8CzmMvgFNgAF8RMA/tsDAAz08s5Bi/Q8AWcA3wDVAPIJRmTYXwNGIm/48REA72XakQ4A16H3ABv3AmZu1pFfcJsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        duneIcon: {
          src: "/_next/static/media/DuneIcon.c54d1173.svg",
          height: 20,
          width: 21,
          blurWidth: 0,
          blurHeight: 0,
        },
      };
    },
    65726: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return g;
        },
      });
      var s = l(57437),
        o = l(2265),
        a = l(61697),
        n = l(84744),
        i = l(65210),
        r = l(4936),
        d = l(26995),
        c = l(87684),
        x = l(59283),
        m = l(67609);
      let u = {
        login: {
          title: "You are not logged in",
          subtitle: "Please login to continue",
          href: "/login",
          actionText: "Login",
          icon: a.Z,
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
          icon: i.Z,
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
          icon: r.Z,
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
      var p = l(99376),
        h = l(69767),
        f = l(63691),
        g = (e) => {
          let { type: t, size: l = "md", titleText: a, subtitleText: n } = e,
            { title: i, subtitle: r, href: d, actionText: c, icon: x } = u[t],
            m = (0, p.useRouter)(),
            { setLoginModalOpen: g } = (0, f.q)();
          return (0, s.jsxs)("div", {
            className: "flex flex-col items-center justify-center h-full",
            children: [
              (0, s.jsx)("div", {
                className:
                  "flex justify-center items-center rounded-full ".concat(
                    "sm" === l ? "" : "border-primary/10 border p-3"
                  ),
                children: (0, s.jsx)("div", {
                  className:
                    "flex justify-center items-center rounded-full border-primary/30 border p-3",
                  children: (0, s.jsx)("div", {
                    className: "flex justify-center items-center gap-2 ".concat(
                      "sm" === l ? "w-20 h-20" : "w-24 h-24",
                      " border-primary/70 border rounded-full"
                    ),
                    children: o.createElement(x, {
                      className: "sm" === l ? "w-10 h-10" : "w-12 h-12",
                    }),
                  }),
                }),
              }),
              (0, s.jsx)("h3", {
                className: "text-lg font-semibold mt-4",
                children: a || i,
              }),
              (0, s.jsx)("p", {
                className:
                  "text-sm mt-1 text-primary-disabled max-w-sm text-center",
                children: n || r,
              }),
              c &&
                (0, s.jsx)(h.zx, {
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
    75184: function (e, t, l) {
      "use strict";
      var s = l(57437);
      l(2265);
      var o = l(95950),
        a = l(2550),
        n = l(19814),
        i = l(27648),
        r = l(63691),
        d = l(54715),
        c = l(33145);
      let x = {
        bronze: d.w.badge1,
        silver: d.w.badge2,
        gold: d.w.badge3,
        platinum: d.w.badge4,
      };
      t.Z = (e) => {
        let { isLanding: t = !1 } = e,
          { userNps: l, myTiers: m, myPlan: u, nodeFolio: p } = (0, r.q)(),
          h =
            null == m
              ? void 0
              : m.find(
                  (e) =>
                    l >= Number(e.metadata.min_points) &&
                    l <= Number(e.metadata.max_points)
                ),
          f =
            null == p
              ? void 0
              : p.reduce(
                  (e, t) =>
                    e +
                    t.deployments.reduce(
                      (e, t) => e + (null == t ? void 0 : t.no_of_nodes),
                      0
                    ),
                  0
                ),
          g = x[(null == h ? void 0 : h.name.toLowerCase()) || "bronze"],
          A = [
            {
              icon: (0, s.jsx)(c.default, {
                src: d.w.logoIcon,
                alt: "tier",
                width: 30,
                height: 30,
              }),
              title: "gNODE",
              value: l,
            },
            {
              icon: (0, s.jsx)(o.Z, {}),
              title: "Your Deployed Nodes",
              value: f,
            },
            {
              icon: (0, s.jsx)(a.Z, {}),
              title: "Active Subscriptions",
              value: (null == u ? void 0 : u.length) || 0,
              isTopCta: !0,
              ctaText: "View",
              ctaLink: "/myPlan",
            },
            {
              icon: (0, s.jsx)(c.default, {
                src: g,
                alt: "tier",
                width: 30,
                height: 30,
                className: "w-8",
              }),
              title: "Current Tier",
              value: null == h ? void 0 : h.name,
              isTopCta: !0,
              ctaText: "Rank Up",
              ctaLink: "/profile",
            },
          ],
          b = t ? [A[0], A[2], A[3]] : A;
        return (0, s.jsxs)("div", {
          className:
            "bg-background-dark p-3 rounded-lg border border-primary/5",
          children: [
            (0, s.jsx)("p", {
              className: "text-lg font-medium",
              children: "Overview",
            }),
            (0, s.jsx)("div", {
              className: "grid ".concat(
                t
                  ? "xl:grid-cols-3 md:grid-cols-2"
                  : "xl:grid-cols-4 md:grid-cols-2",
                " gap-4 mt-2"
              ),
              children:
                null == b
                  ? void 0
                  : b.map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className:
                            "flex flex-col justify-between gap-2 bg-greyShade p-4 rounded-lg h-40",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex justify-between items-center",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "flex items-center justify-center border border-primary/10 rounded-full h-12 w-12",
                                  children: e.icon,
                                }),
                                e.isTopCta &&
                                  (0, s.jsxs)(i.default, {
                                    href: e.ctaLink,
                                    className:
                                      "text-sm font-medium !text-accent flex items-center gap-1",
                                    children: [
                                      e.ctaText,
                                      " ",
                                      (0, s.jsx)(n.Z, { size: 16 }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("p", {
                                  className:
                                    "text-4xl font-medium font-mono capitalize",
                                  children: e.value,
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "text-xs text-primary-disabled font-medium pt-1",
                                  children: e.title,
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      )
                    ),
            }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(
      0,
      [9041, 3814, 5501, 3080, 3448, 3145, 7207, 5626, 2971, 5030, 1744],
      function () {
        return e((e.s = 30066));
      }
    ),
      (_N_E = e.O());
  },
]);
