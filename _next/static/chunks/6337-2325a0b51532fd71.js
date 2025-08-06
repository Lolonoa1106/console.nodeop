(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6337],
  {
    67883: function () {},
    35370: function () {},
    20131: function () {},
    16026: function () {},
    92596: function () {},
    46560: function (e, n, a) {
      "use strict";
      a.d(n, {
        rq: function () {
          return u;
        },
        m6: function () {
          return m;
        },
        SM: function () {
          return o;
        },
        uO: function () {
          return l;
        },
        I6: function () {
          return s;
        },
      });
      var i = a(77942),
        r = a(83066),
        t = a(12639);
      let c = (e, n) => {
        switch (e) {
          case "selfchain":
            if ("mainnet" === n)
              return {
                chainId: "self-1",
                networkData: {
                  chainId: "self-1",
                  chainName: "Self Chain",
                  chainSymbolImageUrl:
                    "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/selfchain/chain.png",
                  rpc: "https://rpc.selfchain.io:26657",
                  rest: "https://api.selfchain.io",
                  nodeProvider: {
                    name: "Self Chain",
                    email: "hello@frontier.xyz",
                    website: "https://selfchain.xyz",
                  },
                  bip44: { coinType: 118 },
                  bech32Config: {
                    bech32PrefixAccAddr: "self",
                    bech32PrefixAccPub: "selfpub",
                    bech32PrefixValAddr: "selfvaloper",
                    bech32PrefixValPub: "selfvaloperpub",
                    bech32PrefixConsAddr: "selfvalcons",
                    bech32PrefixConsPub: "selfvalconspub",
                  },
                  currencies: [
                    {
                      coinDenom: "uslf",
                      coinMinimalDenom: "uslf",
                      coinDecimals: 6,
                      coinGeckoId: "slf",
                    },
                  ],
                  feeCurrencies: [
                    {
                      coinDenom: "uslf",
                      coinMinimalDenom: "uslf",
                      coinDecimals: 6,
                      coinGeckoId: "slf",
                      gasPriceStep: { low: 0.005, average: 0.025, high: 0.03 },
                    },
                  ],
                  stakeCurrency: {
                    coinDenom: "SLF",
                    coinMinimalDenom: "uslf",
                    coinDecimals: 6,
                    coinGeckoId: "slf",
                  },
                  features: [],
                },
              };
            if ("testnet" === n)
              return {
                chainId: "self-dev-1",
                networkData: {
                  chainId: "self-dev-1",
                  chainName: "Self Chain Devnet",
                  rpc: "http://165.232.125.66:26657",
                  rest: "http://165.232.125.66:1317",
                  bip44: { coinType: 118 },
                  bech32Config: {
                    bech32PrefixAccAddr: "self",
                    bech32PrefixAccPub: "selfpub",
                    bech32PrefixValAddr: "selfvaloper",
                    bech32PrefixValPub: "selfvaloperpub",
                    bech32PrefixConsAddr: "selfvalcons",
                    bech32PrefixConsPub: "selfvalconspub",
                  },
                  currencies: [
                    {
                      coinDenom: "SELF",
                      coinMinimalDenom: "uself",
                      coinDecimals: 6,
                    },
                  ],
                  feeCurrencies: [
                    {
                      coinDenom: "SELF",
                      coinMinimalDenom: "uself",
                      coinDecimals: 6,
                    },
                  ],
                  stakeCurrency: {
                    coinDenom: "SELF",
                    coinMinimalDenom: "uself",
                    coinDecimals: 6,
                  },
                  features: ["stargate", "no-legacy-stdTx", "ibc-transfer"],
                },
              };
            break;
          case "archway":
            if ("mainnet" === n)
              return {
                chainId: "archway-1",
                networkData: {
                  chainId: "archway-1",
                  chainName: "Archway",
                  rpc: "https://rpc.mainnet.archway.io",
                  rest: "https://api.mainnet.archway.io",
                  bip44: { coinType: 118 },
                  bech32Config: {
                    bech32PrefixAccAddr: "archway",
                    bech32PrefixAccPub: "archwaypub",
                    bech32PrefixValAddr: "archwayvaloper",
                    bech32PrefixValPub: "archwayvaloperpub",
                    bech32PrefixConsAddr: "archwayvalcons",
                    bech32PrefixConsPub: "archwayvalconspub",
                  },
                  currencies: [
                    {
                      coinDenom: "aarch",
                      coinMinimalDenom: "aarch",
                      coinDecimals: 18,
                    },
                  ],
                  feeCurrencies: [
                    {
                      coinDenom: "aarch",
                      coinMinimalDenom: "aarch",
                      coinDecimals: 18,
                    },
                  ],
                  stakeCurrency: {
                    coinDenom: "aarch",
                    coinMinimalDenom: "arch",
                    coinDecimals: 18,
                  },
                  features: ["cosmwasm", "ibc-transfer", "ibc-go"],
                },
              };
            if ("testnet" === n)
              return {
                chainId: "constantine-3",
                networkData: {
                  chainId: "constantine-3",
                  chainName: "Constantine",
                  rpc: "https://rpc.constantine.archway.io",
                  rest: "https://api.constantine.archway.io",
                  bip44: { coinType: 118 },
                  bech32Config: {
                    bech32PrefixAccAddr: "archway",
                    bech32PrefixAccPub: "archwaypub",
                    bech32PrefixValAddr: "archwayvaloper",
                    bech32PrefixValPub: "archwayvaloperpub",
                    bech32PrefixConsAddr: "archwayvalcons",
                    bech32PrefixConsPub: "archwayvalconspub",
                  },
                  currencies: [
                    {
                      coinDenom: "arch",
                      coinMinimalDenom: "arch",
                      coinDecimals: 18,
                    },
                  ],
                  feeCurrencies: [
                    {
                      coinDenom: "arch",
                      coinMinimalDenom: "arch",
                      coinDecimals: 18,
                    },
                  ],
                  stakeCurrency: {
                    coinDenom: "arch",
                    coinMinimalDenom: "arch",
                    coinDecimals: 18,
                  },
                  features: ["cosmwasm", "ibc-transfer", "ibc-go"],
                },
              };
            break;
          case "orai":
          case "oraichain":
            if ("mainnet" === n)
              return {
                chainId: "Oraichain",
                networkData: {
                  chainId: "Oraichain",
                  chainName: "Oraichain",
                  rpc: "https://rpc.orai.io",
                  rest: "https://lcd.orai.io",
                  bip44: { coinType: 118 },
                  bech32Config: {
                    bech32PrefixAccAddr: "orai",
                    bech32PrefixAccPub: "oraipub",
                    bech32PrefixValAddr: "oraivaloper",
                    bech32PrefixValPub: "oraivaloperpub",
                    bech32PrefixConsAddr: "oraivalcons",
                    bech32PrefixConsPub: "oraivalconspub",
                  },
                  currencies: [
                    {
                      coinDenom: "orai",
                      coinMinimalDenom: "orai",
                      coinDecimals: 6,
                    },
                  ],
                  feeCurrencies: [
                    {
                      coinDenom: "orai",
                      coinMinimalDenom: "orai",
                      coinDecimals: 6,
                    },
                  ],
                  stakeCurrency: {
                    coinDenom: "orai",
                    coinMinimalDenom: "orai",
                    coinDecimals: 6,
                  },
                },
              };
            break;
          case "babylon":
            if ("testnet" === n)
              return {
                chainId: "bbn-test-3",
                networkData: {
                  chainId: "bbn-test-3",
                  chainName: "Babylon Testnet",
                  rpc: "https://rpc.testnet3.babylonchain.io",
                  rest: "https://lcd.testnet3.babylonchain.io",
                  bip44: { coinType: 118 },
                  bech32Config: {
                    bech32PrefixAccAddr: "bbn",
                    bech32PrefixAccPub: "bbnpub",
                    bech32PrefixValAddr: "bbnvaloper",
                    bech32PrefixValPub: "bbnvaloperpub",
                    bech32PrefixConsAddr: "bbnvalcons",
                    bech32PrefixConsPub: "bbnvalconspub",
                  },
                  currencies: [
                    {
                      coinDenom: "BBN",
                      coinMinimalDenom: "ubbn",
                      coinDecimals: 6,
                    },
                  ],
                  feeCurrencies: [
                    {
                      coinDenom: "BBN",
                      coinMinimalDenom: "ubbn",
                      coinDecimals: 6,
                    },
                  ],
                  stakeCurrency: {
                    coinDenom: "BBN",
                    coinMinimalDenom: "ubbn",
                    coinDecimals: 6,
                  },
                  features: ["cosmwasm"],
                },
              };
            break;
          case "omniflix":
            if ("mainnet" === n)
              return {
                chainId: "omniflixhub-1",
                networkData: {
                  chainId: "omniflixhub-1",
                  chainName: "Omniflix",
                  rpc: "https://omniflix-rpc.kingnodes.com",
                  rest: "https://api.omniflix.nodestake.org",
                  bip44: { coinType: 118 },
                  bech32Config: {
                    bech32PrefixAccAddr: "omniflix",
                    bech32PrefixAccPub: "omniflixpub",
                    bech32PrefixValAddr: "omniflixvaloper",
                    bech32PrefixValPub: "omniflixvaloperpub",
                    bech32PrefixConsAddr: "omniflixvalcons",
                    bech32PrefixConsPub: "omniflixvalconspub",
                  },
                  currencies: [
                    {
                      coinDenom: "uflix",
                      coinMinimalDenom: "uflix",
                      coinDecimals: 6,
                    },
                  ],
                  feeCurrencies: [
                    {
                      coinDenom: "uflix",
                      coinMinimalDenom: "uflix",
                      coinDecimals: 6,
                    },
                  ],
                  stakeCurrency: {
                    coinDenom: "uflix",
                    coinMinimalDenom: "uflix",
                    coinDecimals: 6,
                  },
                  features: ["cosmwasm"],
                },
              };
        }
      };
      async function o(e, n) {
        try {
          if (!window.keplr)
            return {
              status: "error",
              title: "Connection Error",
              message: "Keplr not found",
            };
          let a = c(e, n),
            i = null == a ? void 0 : a.chainId;
          await window.keplr.experimentalSuggestChain(a.networkData),
            await window.keplr.enable(i);
          let r = window.keplr.getOfflineSigner(i),
            t = await r.getAccounts();
          return {
            status: "success",
            title: "Connected Successfully",
            message: t[0].address,
          };
        } catch (e) {
          return { status: "error", title: "Keplr Error", message: e.message };
        }
      }
      async function s(e, n, a) {
        try {
          if (!window.keplr)
            return {
              status: "error",
              title: "Connection Error",
              message: "Keplr not found",
            };
          let i = c(e, n);
          if (!i)
            return {
              status: "error",
              title: "Chain Error",
              message: "Chain data not found",
            };
          let r = async (e) => {
            let n = await fetch(e, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              }),
              a = await n.json();
            return a.balances.some((e) => e.hasOwnProperty("amount"))
              ? {
                  status: "success",
                  title: "Wallet Balance",
                  message:
                    Number(a.balances[0].amount) /
                    10 ** i.networkData.currencies[0].coinDecimals,
                }
              : {
                  status: "error",
                  title: "Wallet Balance",
                  message: "Found low balance",
                };
          };
          if ("babylon" === e)
            return await r(
              "https://lcd.testnet3.babylonchain.io/cosmos/bank/v1beta1/balances/".concat(
                a
              )
            );
          if ("selfchain" === e)
            return await r(
              "https://api.selfchain.io/cosmos/bank/v1beta1/balances/".concat(a)
            );
          return await r(
            "https://rest.cosmos.directory/"
              .concat(e, "/cosmos/bank/v1beta1/balances/")
              .concat(a)
          );
        } catch (e) {
          return {
            status: "error",
            title: "Failed to Fetch Balance",
            message: e.message,
          };
        }
      }
      async function l(e) {
        try {
          let n = window;
          if (!n.keplr)
            return {
              status: "error",
              title: "Connection Error",
              message: "Keplr not found",
            };
          if (e) {
            let a = c(e.metadata.chain_name, e.metadata.network);
            if (!a) throw Error("Chain data not found");
            let o = String(a.chainId),
              s = String(a.networkData.rpc);
            await n.keplr.enable(o);
            let l = n.keplr.getOfflineSigner(o),
              u = await l.getAccounts(),
              m = u[0],
              { createValidator: f } =
                i.cosmos.staking.v1beta1.MessageComposer.fromPartial,
              h = null == e ? void 0 : e.chain_metadata.validator_public_key,
              d = (0, t.fromBase64)(h),
              b = new Uint8Array([10, d.length, ...Array.from(d)]),
              p = f({
                delegatorAddress: String(u[0].address),
                minSelfDelegation: String(e.metadata.minimumSelfDelegation),
                validatorAddress: String(e.chain_metadata.val_oper_address),
                commission: {
                  maxChangeRate: String(
                    1e18 * e.metadata.commissionMaxChangeRate
                  ),
                  maxRate: String(1e18 * e.metadata.commissionMaxRate),
                  rate: String(1e18 * e.metadata.commissionRate),
                },
                description: {
                  moniker: String(e.metadata.moniker),
                  identity: String(e.metadata.identity),
                  website: String(e.metadata.website),
                  securityContact: String(e.metadata.securityContact),
                  details: String(e.metadata.details),
                },
                pubkey: { typeUrl: "/cosmos.crypto.ed25519.PubKey", value: b },
                value: {
                  amount: "2000",
                  denom: String(a.networkData.currencies[0].coinDenom),
                },
              }),
              g = {
                amount: [
                  {
                    denom: String(a.networkData.currencies[0].coinDenom),
                    amount: "1000",
                  },
                ],
                gas: "200000",
              },
              w = await r.SigningStargateClient.connectWithSigner(s, l, o),
              D = await w.signAndBroadcast(m.address, [p], g);
            if (0 === D.code && D.transactionHash)
              return {
                status: "success",
                title: "Transaction successful",
                message: "Validator created successfully",
              };
            return { status: "info", title: "Transaction", message: D.rawLog };
          }
        } catch (e) {
          return { status: "error", title: "Keplr Error", message: e.message };
        }
      }
      async function u(e, n, a) {
        try {
          if (!window.keplr)
            return {
              status: "error",
              title: "Connection Error",
              message: "Keplr not found",
            };
          let t = c(n, a),
            o = String(null == t ? void 0 : t.chainId),
            s = String(null == t ? void 0 : t.networkData.rpc);
          await window.keplr.experimentalSuggestChain(
            null == t ? void 0 : t.networkData
          ),
            await window.keplr.enable(o);
          let l = window.keplr.getOfflineSigner(o),
            u = await l.getAccounts(),
            { withdrawValidatorCommission: m } =
              i.cosmos.distribution.v1beta1.MessageComposer.fromPartial,
            f = m({ validatorAddress: e }),
            h = {
              amount: [
                {
                  denom: String(
                    null == t ? void 0 : t.networkData.currencies[0].coinDenom
                  ),
                  amount: "1000",
                },
              ],
              gas: "200000",
            },
            d = await r.SigningStargateClient.connectWithSigner(s, l, o),
            b = await d.signAndBroadcast(u[0].address, [f], h);
          if (0 === b.code && b.transactionHash)
            return {
              status: "success",
              title: "Transaction successful",
              message: "Commission claimed successfully",
            };
          return { status: "info", title: "Transaction", message: b.rawLog };
        } catch (e) {
          return { status: "error", title: "Keplr Error", message: e.message };
        }
      }
      async function m(e, n, a, t) {
        try {
          if (!window.keplr)
            return {
              status: "error",
              title: "Connection Error",
              message: "Keplr not found",
            };
          let o = c(a, t),
            s = String(null == o ? void 0 : o.chainId),
            l = String(null == o ? void 0 : o.networkData.rpc);
          await window.keplr.experimentalSuggestChain(
            null == o ? void 0 : o.networkData
          ),
            await window.keplr.enable(s);
          let u = window.keplr.getOfflineSigner(s),
            m = await u.getAccounts(),
            { withdrawDelegatorReward: f } =
              i.cosmos.distribution.v1beta1.MessageComposer.fromPartial,
            h = f({ delegatorAddress: e, validatorAddress: n }),
            d = {
              amount: [
                {
                  denom: String(
                    null == o ? void 0 : o.networkData.currencies[0].coinDenom
                  ),
                  amount: "1000",
                },
              ],
              gas: "200000",
            },
            b = await r.SigningStargateClient.connectWithSigner(l, u, s),
            p = await b.signAndBroadcast(m[0].address, [h], d);
          if (0 === p.code && p.transactionHash)
            return {
              status: "success",
              title: "Transaction successful",
              message: "Rewards claimed successfully",
            };
          return { status: "info", title: "Transaction", message: p.rawLog };
        } catch (e) {
          return { status: "error", title: "Keplr Error", message: e.message };
        }
      }
    },
  },
]);
