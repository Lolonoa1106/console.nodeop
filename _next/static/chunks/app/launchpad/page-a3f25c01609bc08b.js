(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5280],
  {
    16778: function (e, n, t) {
      Promise.resolve().then(t.bind(t, 37343));
    },
    37343: function (e, n, t) {
      "use strict";
      t.r(n);
      var u = t(57437),
        s = t(2265),
        f = t(11950),
        i = t(21099),
        r = t(63691);
      n.default = () => {
        let { getLaunchpadSales: e } = (0, r.q)(),
          [n, t] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            t(!0),
              e().finally(() => {
                t(!1);
              });
          }, []),
          (0, u.jsx)(f.Z, { routeType: i.F2.LAUNCHPAD, isLoading: n })
        );
      };
    },
  },
  function (e) {
    e.O(
      0,
      [3814, 5501, 3080, 3448, 4060, 6259, 5626, 1950, 2971, 5030, 1744],
      function () {
        return e((e.s = 16778));
      }
    ),
      (_N_E = e.O());
  },
]);
