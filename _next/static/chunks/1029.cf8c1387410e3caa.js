"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1029],
  {
    71029: function (e, t, r) {
      r.r(t),
        r.d(t, {
          W3mBuyInProgressView: function () {
            return ee;
          },
          W3mOnRampActivityView: function () {
            return $;
          },
          W3mOnRampProvidersView: function () {
            return V;
          },
          W3mOnrampFiatSelectView: function () {
            return _;
          },
          W3mOnrampTokensView: function () {
            return H;
          },
          W3mOnrampWidget: function () {
            return el;
          },
          W3mWhatIsABuyView: function () {
            return et;
          },
        });
      var i = r(31133),
        o = r(84927),
        a = r(32801),
        s = r(41262),
        n = r(15708),
        c = r(55543),
        l = r(44649),
        u = r(59712),
        d = r(68584),
        p = r(17766),
        h = r(61704),
        m = r(55372);
      let y = {
          id: "2b92315d-eab7-5bef-84fa-089a131333f5",
          name: "USD Coin",
          symbol: "USDC",
          networks: [
            {
              name: "ethereum-mainnet",
              display_name: "Ethereum",
              chain_id: "1",
              contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            },
            {
              name: "polygon-mainnet",
              display_name: "Polygon",
              chain_id: "137",
              contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
            },
          ],
        },
        w = {
          id: "USD",
          payment_method_limits: [
            { id: "card", min: "10.00", max: "7500.00" },
            { id: "ach_bank_account", min: "10.00", max: "25000.00" },
          ],
        },
        g = {
          providers: u.gy,
          selectedProvider: null,
          error: null,
          purchaseCurrency: y,
          paymentCurrency: w,
          purchaseCurrencies: [y],
          paymentCurrencies: [],
          quotesLoading: !1,
        },
        f = (0, n.sj)(g),
        b = {
          state: f,
          subscribe: (e) => (0, n.Ld)(f, () => e(f)),
          subscribeKey: (e, t) => (0, c.VW)(f, e, t),
          setSelectedProvider(e) {
            if (e && "meld" === e.name) {
              let t =
                  m.R.state.activeChain === l.b.CHAIN.SOLANA ? "SOL" : "USDC",
                r = d.AccountController.state.address ?? "",
                i = new URL(e.url);
              i.searchParams.append("publicKey", u.a$),
                i.searchParams.append("destinationCurrencyCode", t),
                i.searchParams.append("walletAddress", r),
                (e.url = i.toString());
            }
            f.selectedProvider = e;
          },
          setPurchaseCurrency(e) {
            f.purchaseCurrency = e;
          },
          setPaymentCurrency(e) {
            f.paymentCurrency = e;
          },
          setPurchaseAmount(e) {
            this.state.purchaseAmount = e;
          },
          setPaymentAmount(e) {
            this.state.paymentAmount = e;
          },
          async getAvailableCurrencies() {
            let e = await h.L.getOnrampOptions();
            (f.purchaseCurrencies = e.purchaseCurrencies),
              (f.paymentCurrencies = e.paymentCurrencies),
              (f.paymentCurrency = e.paymentCurrencies[0] || w),
              (f.purchaseCurrency = e.purchaseCurrencies[0] || y),
              await p.ApiController.fetchCurrencyImages(
                e.paymentCurrencies.map((e) => e.id)
              ),
              await p.ApiController.fetchTokenImages(
                e.purchaseCurrencies.map((e) => e.symbol)
              );
          },
          async getQuote() {
            f.quotesLoading = !0;
            try {
              let e = await h.L.getOnrampQuote({
                purchaseCurrency: f.purchaseCurrency,
                paymentCurrency: f.paymentCurrency,
                amount: f.paymentAmount?.toString() || "0",
                network: f.purchaseCurrency?.symbol,
              });
              return (
                (f.quotesLoading = !1),
                (f.purchaseAmount = Number(e?.purchaseAmount.amount)),
                e
              );
            } catch (e) {
              return (f.error = e.message), (f.quotesLoading = !1), null;
            } finally {
              f.quotesLoading = !1;
            }
          },
          resetState() {
            (f.providers = u.gy),
              (f.selectedProvider = null),
              (f.error = null),
              (f.purchaseCurrency = y),
              (f.paymentCurrency = w),
              (f.purchaseCurrencies = [y]),
              (f.paymentCurrencies = []),
              (f.paymentAmount = void 0),
              (f.purchaseAmount = void 0),
              (f.quotesLoading = !1);
          },
        };
      var v = r(70216),
        x = r(22472),
        C = r(48415),
        k = r(92413);
      r(96277), r(44732), r(89759), r(92374), r(23805), r(81255);
      var A = (0, i.iv)`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`,
        T = function (e, t, r, i) {
          var o,
            a = arguments.length,
            s =
              a < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, r))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, r, i);
          else
            for (var n = e.length - 1; n >= 0; n--)
              (o = e[n]) &&
                (s = (a < 3 ? o(s) : a > 3 ? o(t, r, s) : o(t, r)) || s);
          return a > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let R = class extends i.oi {
        constructor() {
          super(...arguments),
            (this.disabled = !1),
            (this.color = "inherit"),
            (this.label = "Bought"),
            (this.purchaseValue = ""),
            (this.purchaseCurrency = ""),
            (this.date = ""),
            (this.completed = !1),
            (this.inProgress = !1),
            (this.failed = !1),
            (this.onClick = null),
            (this.symbol = "");
        }
        firstUpdated() {
          this.icon || this.fetchTokenImage();
        }
        render() {
          return (0, i.dy)`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${
              this.label
            }</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${
          this.inProgress
            ? (0,
              i.dy)`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`
            : (0,
              i.dy)`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`
        }
      </wui-flex>
    `;
        }
        async fetchTokenImage() {
          await p.ApiController._fetchTokenImage(this.purchaseCurrency);
        }
        statusIconTemplate() {
          return this.inProgress
            ? null
            : this.completed
            ? this.boughtIconTemplate()
            : this.errorIconTemplate();
        }
        errorIconTemplate() {
          return (0, i.dy)`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`;
        }
        imageTemplate() {
          let e =
            this.icon ||
            `https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;
          return (0, i.dy)`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`;
        }
        boughtIconTemplate() {
          return (0, i.dy)`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`;
        }
      };
      (R.styles = [A]),
        T([(0, o.Cb)({ type: Boolean })], R.prototype, "disabled", void 0),
        T([(0, o.Cb)()], R.prototype, "color", void 0),
        T([(0, o.Cb)()], R.prototype, "label", void 0),
        T([(0, o.Cb)()], R.prototype, "purchaseValue", void 0),
        T([(0, o.Cb)()], R.prototype, "purchaseCurrency", void 0),
        T([(0, o.Cb)()], R.prototype, "date", void 0),
        T([(0, o.Cb)({ type: Boolean })], R.prototype, "completed", void 0),
        T([(0, o.Cb)({ type: Boolean })], R.prototype, "inProgress", void 0),
        T([(0, o.Cb)({ type: Boolean })], R.prototype, "failed", void 0),
        T([(0, o.Cb)()], R.prototype, "onClick", void 0),
        T([(0, o.Cb)()], R.prototype, "symbol", void 0),
        T([(0, o.Cb)()], R.prototype, "icon", void 0),
        (R = T([(0, k.Mo)("w3m-onramp-activity-item")], R));
      var I = (0, i.iv)`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`,
        P = function (e, t, r, i) {
          var o,
            a = arguments.length,
            s =
              a < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, r))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, r, i);
          else
            for (var n = e.length - 1; n >= 0; n--)
              (o = e[n]) &&
                (s = (a < 3 ? o(s) : a > 3 ? o(t, r, s) : o(t, r)) || s);
          return a > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let $ = class extends i.oi {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.selectedOnRampProvider = b.state.selectedProvider),
            (this.loading = !1),
            (this.coinbaseTransactions = v.s.state.coinbaseTransactions),
            (this.tokenImages = x.W.state.tokenImages),
            this.unsubscribe.push(
              b.subscribeKey("selectedProvider", (e) => {
                this.selectedOnRampProvider = e;
              }),
              x.W.subscribeKey("tokenImages", (e) => (this.tokenImages = e)),
              () => {
                clearTimeout(this.refetchTimeout);
              },
              v.s.subscribe((e) => {
                this.coinbaseTransactions = { ...e.coinbaseTransactions };
              })
            ),
            v.s.clearCursor(),
            this.fetchTransactions();
        }
        render() {
          return (0, i.dy)`
      <wui-flex flexDirection="column" .padding=${[
        "0",
        "s",
        "s",
        "s",
      ]} gap="xs">
        ${
          this.loading
            ? this.templateLoading()
            : this.templateTransactionsByYear()
        }
      </wui-flex>
    `;
        }
        templateTransactions(e) {
          return e?.map((e) => {
            let t = s.E.formatDate(e?.metadata?.minedAt),
              r = e.transfers[0],
              o = r?.fungible_info;
            if (!o) return null;
            let n = o?.icon?.url || this.tokenImages?.[o.symbol || ""];
            return i.dy`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${
            "ONRAMP_TRANSACTION_STATUS_SUCCESS" === e.metadata.status
          }
          .inProgress=${
            "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS" === e.metadata.status
          }
          .failed=${"ONRAMP_TRANSACTION_STATUS_FAILED" === e.metadata.status}
          purchaseCurrency=${a.o(o.symbol)}
          purchaseValue=${r.quantity.numeric}
          date=${t}
          icon=${a.o(n)}
          symbol=${a.o(o.symbol)}
        ></w3m-onramp-activity-item>
      `;
          });
        }
        templateTransactionsByYear() {
          return Object.keys(this.coinbaseTransactions)
            .sort()
            .reverse()
            .map((e) => {
              let t = parseInt(e, 10);
              return Array(12)
                .fill(null)
                .map((e, t) => t)
                .reverse()
                .map((e) => {
                  let r = k.AI.getTransactionGroupTitle(t, e),
                    o = this.coinbaseTransactions[t]?.[e];
                  return o
                    ? (0, i.dy)`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs", "s", "s", "s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${r}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(o)}
            </wui-flex>
          </wui-flex>
        `
                    : null;
                });
            });
        }
        async fetchTransactions() {
          await this.fetchCoinbaseTransactions();
        }
        async fetchCoinbaseTransactions() {
          let e = d.AccountController.state.address,
            t = C.OptionsController.state.projectId;
          if (!e) throw Error("No address found");
          if (!t) throw Error("No projectId found");
          (this.loading = !0),
            await v.s.fetchTransactions(e, "coinbase"),
            (this.loading = !1),
            this.refetchLoadingTransactions();
        }
        refetchLoadingTransactions() {
          let e = new Date();
          if (
            0 ===
            (
              this.coinbaseTransactions[e.getFullYear()]?.[e.getMonth()] || []
            ).filter(
              (e) =>
                "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS" === e.metadata.status
            ).length
          ) {
            clearTimeout(this.refetchTimeout);
            return;
          }
          this.refetchTimeout = setTimeout(async () => {
            let e = d.AccountController.state.address;
            await v.s.fetchTransactions(e, "coinbase"),
              this.refetchLoadingTransactions();
          }, 3e3);
        }
        templateLoading() {
          return Array(7)
            .fill(
              (0,
              i.dy)` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `
            )
            .map((e) => e);
        }
      };
      ($.styles = I),
        P([(0, o.SB)()], $.prototype, "selectedOnRampProvider", void 0),
        P([(0, o.SB)()], $.prototype, "loading", void 0),
        P([(0, o.SB)()], $.prototype, "coinbaseTransactions", void 0),
        P([(0, o.SB)()], $.prototype, "tokenImages", void 0),
        ($ = P([(0, k.Mo)("w3m-onramp-activity-view")], $));
      var O = r(89512);
      r(53774), r(34041), r(88239);
      var S = (0, i.iv)`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,
        B = function (e, t, r, i) {
          var o,
            a = arguments.length,
            s =
              a < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, r))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, r, i);
          else
            for (var n = e.length - 1; n >= 0; n--)
              (o = e[n]) &&
                (s = (a < 3 ? o(s) : a > 3 ? o(t, r, s) : o(t, r)) || s);
          return a > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let _ = class extends i.oi {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.selectedCurrency = b.state.paymentCurrency),
            (this.currencies = b.state.paymentCurrencies),
            (this.currencyImages = x.W.state.currencyImages),
            (this.checked = !1),
            this.unsubscribe.push(
              b.subscribe((e) => {
                (this.selectedCurrency = e.paymentCurrency),
                  (this.currencies = e.paymentCurrencies);
              }),
              x.W.subscribeKey(
                "currencyImages",
                (e) => (this.currencyImages = e)
              )
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          let { termsConditionsUrl: e, privacyPolicyUrl: t } =
              C.OptionsController.state,
            r = C.OptionsController.state.features?.legalCheckbox,
            o = !!(e || t) && !!r && !this.checked;
          return (0, i.dy)`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(
        this
      )}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0", "s", "s", "s"]}
        gap="xs"
        class=${(0, a.o)(o ? "disabled" : void 0)}
      >
        ${this.currenciesTemplate(o)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
        }
        currenciesTemplate(e = !1) {
          return this.currencies.map(
            (t) => (0, i.dy)`
        <wui-list-item
          imageSrc=${(0, a.o)(this.currencyImages?.[t.id])}
          @click=${() => this.selectCurrency(t)}
          variant="image"
          tabIdx=${(0, a.o)(e ? -1 : void 0)}
        >
          <wui-text variant="paragraph-500" color="fg-100">${t.id}</wui-text>
        </wui-list-item>
      `
          );
        }
        selectCurrency(e) {
          e && (b.setPaymentCurrency(e), O.I.close());
        }
        onCheckboxChange(e) {
          this.checked = !!e.detail;
        }
      };
      (_.styles = S),
        B([(0, o.SB)()], _.prototype, "selectedCurrency", void 0),
        B([(0, o.SB)()], _.prototype, "currencies", void 0),
        B([(0, o.SB)()], _.prototype, "currencyImages", void 0),
        B([(0, o.SB)()], _.prototype, "checked", void 0),
        (_ = B([(0, k.Mo)("w3m-onramp-fiat-select-view")], _));
      var j = r(86777),
        D = r(53357),
        N = r(31929),
        E = r(4786),
        L = r(63043);
      r(4594), r(68562);
      var z = (0, i.iv)`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`,
        W = function (e, t, r, i) {
          var o,
            a = arguments.length,
            s =
              a < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, r))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, r, i);
          else
            for (var n = e.length - 1; n >= 0; n--)
              (o = e[n]) &&
                (s = (a < 3 ? o(s) : a > 3 ? o(t, r, s) : o(t, r)) || s);
          return a > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let U = class extends i.oi {
        constructor() {
          super(...arguments),
            (this.disabled = !1),
            (this.color = "inherit"),
            (this.label = ""),
            (this.feeRange = ""),
            (this.loading = !1),
            (this.onClick = null);
        }
        render() {
          return (0, i.dy)`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${(0, a.o)(
          this.name
        )} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${
            this.label
          }</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${
          this.loading
            ? (0,
              i.dy)`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`
            : (0,
              i.dy)`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`
        }
      </button>
    `;
        }
        networksTemplate() {
          let e = m.R.getAllRequestedCaipNetworks(),
            t = e?.filter((e) => e?.assets?.imageId)?.slice(0, 5);
          return (0, i.dy)`
      <wui-flex class="networks">
        ${t?.map(
          (e) => i.dy`
            <wui-flex class="network-icon">
              <wui-image src=${a.o(L.f.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `
        )}
      </wui-flex>
    `;
        }
      };
      (U.styles = [z]),
        W([(0, o.Cb)({ type: Boolean })], U.prototype, "disabled", void 0),
        W([(0, o.Cb)()], U.prototype, "color", void 0),
        W([(0, o.Cb)()], U.prototype, "name", void 0),
        W([(0, o.Cb)()], U.prototype, "label", void 0),
        W([(0, o.Cb)()], U.prototype, "feeRange", void 0),
        W([(0, o.Cb)({ type: Boolean })], U.prototype, "loading", void 0),
        W([(0, o.Cb)()], U.prototype, "onClick", void 0),
        (U = W([(0, k.Mo)("w3m-onramp-provider-item")], U)),
        r(51437);
      var M = (0, i.iv)`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;
      let q = class extends i.oi {
        render() {
          let { termsConditionsUrl: e, privacyPolicyUrl: t } =
            C.OptionsController.state;
          return e || t
            ? (0, i.dy)`
      <wui-flex
        .padding=${["m", "s", "s", "s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `
            : null;
        }
        howDoesItWorkTemplate() {
          return (0, i.dy)` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`;
        }
        onWhatIsBuy() {
          N.X.sendEvent({
            type: "track",
            event: "SELECT_WHAT_IS_A_BUY",
            properties: {
              isSmartAccount:
                d.AccountController.state.preferredAccountType ===
                E.y_.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          }),
            j.RouterController.push("WhatIsABuy");
        }
      };
      (q.styles = [M]),
        (q = (function (e, t, r, i) {
          var o,
            a = arguments.length,
            s =
              a < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, r))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, r, i);
          else
            for (var n = e.length - 1; n >= 0; n--)
              (o = e[n]) &&
                (s = (a < 3 ? o(s) : a > 3 ? o(t, r, s) : o(t, r)) || s);
          return a > 3 && s && Object.defineProperty(t, r, s), s;
        })([(0, k.Mo)("w3m-onramp-providers-footer")], q));
      var K = function (e, t, r, i) {
        var o,
          a = arguments.length,
          s =
            a < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, r))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, i);
        else
          for (var n = e.length - 1; n >= 0; n--)
            (o = e[n]) &&
              (s = (a < 3 ? o(s) : a > 3 ? o(t, r, s) : o(t, r)) || s);
        return a > 3 && s && Object.defineProperty(t, r, s), s;
      };
      let V = class extends i.oi {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.providers = b.state.providers),
            this.unsubscribe.push(
              b.subscribeKey("providers", (e) => {
                this.providers = e;
              })
            );
        }
        firstUpdated() {
          Promise.all(
            this.providers.map(async (e) =>
              "coinbase" === e.name
                ? await this.getCoinbaseOnRampURL()
                : Promise.resolve(e?.url)
            )
          ).then((e) => {
            this.providers = this.providers.map((t, r) => ({
              ...t,
              url: e[r] || "",
            }));
          });
        }
        render() {
          return (0, i.dy)`
      <wui-flex flexDirection="column" .padding=${[
        "0",
        "s",
        "s",
        "s",
      ]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `;
        }
        onRampProvidersTemplate() {
          return this.providers
            .filter((e) =>
              e.supportedChains.includes(m.R.state.activeChain ?? "eip155")
            )
            .map(
              (e) => (0, i.dy)`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${() => {
              this.onClickProvider(e);
            }}
            ?disabled=${!e.url}
          ></w3m-onramp-provider-item>
        `
            );
        }
        onClickProvider(e) {
          b.setSelectedProvider(e),
            j.RouterController.push("BuyInProgress"),
            D.j.openHref(
              e.url,
              "popupWindow",
              "width=600,height=800,scrollbars=yes"
            ),
            N.X.sendEvent({
              type: "track",
              event: "SELECT_BUY_PROVIDER",
              properties: {
                provider: e.name,
                isSmartAccount:
                  d.AccountController.state.preferredAccountType ===
                  E.y_.ACCOUNT_TYPES.SMART_ACCOUNT,
              },
            });
        }
        async getCoinbaseOnRampURL() {
          let e = d.AccountController.state.address,
            t = m.R.state.activeCaipNetwork;
          if (!e) throw Error("No address found");
          if (!t?.name) throw Error("No network found");
          let r =
              u.bq.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name] ??
              u.bq.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,
            i = b.state.purchaseCurrency,
            o = i
              ? [i.symbol]
              : b.state.purchaseCurrencies.map((e) => e.symbol);
          return await h.L.generateOnRampURL({
            defaultNetwork: r,
            destinationWallets: [
              {
                address: e,
                blockchains: u.bq.WC_COINBASE_PAY_SDK_CHAINS,
                assets: o,
              },
            ],
            partnerUserId: e,
            purchaseAmount: b.state.purchaseAmount,
          });
        }
      };
      K([(0, o.SB)()], V.prototype, "providers", void 0),
        (V = K([(0, k.Mo)("w3m-onramp-providers-view")], V));
      var Y = (0, i.iv)`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,
        F = function (e, t, r, i) {
          var o,
            a = arguments.length,
            s =
              a < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, r))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, r, i);
          else
            for (var n = e.length - 1; n >= 0; n--)
              (o = e[n]) &&
                (s = (a < 3 ? o(s) : a > 3 ? o(t, r, s) : o(t, r)) || s);
          return a > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let H = class extends i.oi {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.selectedCurrency = b.state.purchaseCurrencies),
            (this.tokens = b.state.purchaseCurrencies),
            (this.tokenImages = x.W.state.tokenImages),
            (this.checked = !1),
            this.unsubscribe.push(
              b.subscribe((e) => {
                (this.selectedCurrency = e.purchaseCurrencies),
                  (this.tokens = e.purchaseCurrencies);
              }),
              x.W.subscribeKey("tokenImages", (e) => (this.tokenImages = e))
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          let { termsConditionsUrl: e, privacyPolicyUrl: t } =
              C.OptionsController.state,
            r = C.OptionsController.state.features?.legalCheckbox,
            o = !!(e || t) && !!r && !this.checked;
          return (0, i.dy)`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(
        this
      )}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0", "s", "s", "s"]}
        gap="xs"
        class=${(0, a.o)(o ? "disabled" : void 0)}
      >
        ${this.currenciesTemplate(o)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
        }
        currenciesTemplate(e = !1) {
          return this.tokens.map(
            (t) => (0, i.dy)`
        <wui-list-item
          imageSrc=${(0, a.o)(this.tokenImages?.[t.symbol])}
          @click=${() => this.selectToken(t)}
          variant="image"
          tabIdx=${(0, a.o)(e ? -1 : void 0)}
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${
              t.name
            }</wui-text>
            <wui-text variant="small-400" color="fg-200">${t.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `
          );
        }
        selectToken(e) {
          e && (b.setPurchaseCurrency(e), O.I.close());
        }
        onCheckboxChange(e) {
          this.checked = !!e.detail;
        }
      };
      (H.styles = Y),
        F([(0, o.SB)()], H.prototype, "selectedCurrency", void 0),
        F([(0, o.SB)()], H.prototype, "tokens", void 0),
        F([(0, o.SB)()], H.prototype, "tokenImages", void 0),
        F([(0, o.SB)()], H.prototype, "checked", void 0),
        (H = F([(0, k.Mo)("w3m-onramp-token-select-view")], H));
      var G = r(21278),
        Q = r(66909),
        X = r(52005);
      r(97585), r(87302);
      var J = (0, i.iv)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`,
        Z = function (e, t, r, i) {
          var o,
            a = arguments.length,
            s =
              a < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, r))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, r, i);
          else
            for (var n = e.length - 1; n >= 0; n--)
              (o = e[n]) &&
                (s = (a < 3 ? o(s) : a > 3 ? o(t, r, s) : o(t, r)) || s);
          return a > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let ee = class extends i.oi {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.selectedOnRampProvider = b.state.selectedProvider),
            (this.uri = G.ConnectionController.state.wcUri),
            (this.ready = !1),
            (this.showRetry = !1),
            (this.buffering = !1),
            (this.error = !1),
            (this.startTime = null),
            (this.isMobile = !1),
            (this.onRetry = void 0),
            this.unsubscribe.push(
              b.subscribeKey("selectedProvider", (e) => {
                this.selectedOnRampProvider = e;
              })
            ),
            this.watchTransactions();
        }
        disconnectedCallback() {
          this.intervalId && clearInterval(this.intervalId);
        }
        render() {
          let e = "Continue in external window";
          this.error
            ? (e = "Buy failed")
            : this.selectedOnRampProvider &&
              (e = `Buy in ${this.selectedOnRampProvider?.label}`);
          let t = this.error
            ? "Buy can be declined from your side or due to and error on the provider app"
            : `We’ll notify you once your Buy is processed`;
          return (0, i.dy)`
      <wui-flex
        data-error=${(0, a.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0, a.o)(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${
            this.error ? "error-100" : "fg-100"
          }>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error ? this.tryAgainTemplate() : null}
      </wui-flex>

      <wui-flex .padding=${["0", "xl", "xl", "xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `;
        }
        watchTransactions() {
          this.selectedOnRampProvider &&
            "coinbase" === this.selectedOnRampProvider.name &&
            ((this.startTime = Date.now()),
            this.initializeCoinbaseTransactions());
        }
        async initializeCoinbaseTransactions() {
          await this.watchCoinbaseTransactions(),
            (this.intervalId = setInterval(
              () => this.watchCoinbaseTransactions(),
              4e3
            ));
        }
        async watchCoinbaseTransactions() {
          try {
            let e = d.AccountController.state.address;
            if (!e) throw Error("No address found");
            (
              await h.L.fetchTransactions({ account: e, onramp: "coinbase" })
            ).data.filter(
              (e) =>
                new Date(e.metadata.minedAt) > new Date(this.startTime) ||
                "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS" === e.metadata.status
            ).length
              ? (clearInterval(this.intervalId),
                j.RouterController.replace("OnRampActivity"))
              : this.startTime &&
                Date.now() - this.startTime >= 18e4 &&
                (clearInterval(this.intervalId), (this.error = !0));
          } catch (e) {
            Q.SnackController.showError(e);
          }
        }
        onTryAgain() {
          this.selectedOnRampProvider &&
            ((this.error = !1),
            D.j.openHref(
              this.selectedOnRampProvider.url,
              "popupWindow",
              "width=600,height=800,scrollbars=yes"
            ));
        }
        tryAgainTemplate() {
          return this.selectedOnRampProvider?.url
            ? (0,
              i.dy)`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(
                this
              )}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`
            : null;
        }
        loaderTemplate() {
          let e =
              X.ThemeController.state.themeVariables[
                "--w3m-border-radius-master"
              ],
            t = e ? parseInt(e.replace("px", ""), 10) : 4;
          return (0, i.dy)`<wui-loading-thumbnail radius=${
            9 * t
          }></wui-loading-thumbnail>`;
        }
        onCopyUri() {
          if (!this.selectedOnRampProvider?.url) {
            Q.SnackController.showError("No link found"),
              j.RouterController.goBack();
            return;
          }
          try {
            D.j.copyToClopboard(this.selectedOnRampProvider.url),
              Q.SnackController.showSuccess("Link copied");
          } catch {
            Q.SnackController.showError("Failed to copy");
          }
        }
      };
      (ee.styles = J),
        Z([(0, o.SB)()], ee.prototype, "intervalId", void 0),
        Z([(0, o.SB)()], ee.prototype, "selectedOnRampProvider", void 0),
        Z([(0, o.SB)()], ee.prototype, "uri", void 0),
        Z([(0, o.SB)()], ee.prototype, "ready", void 0),
        Z([(0, o.SB)()], ee.prototype, "showRetry", void 0),
        Z([(0, o.SB)()], ee.prototype, "buffering", void 0),
        Z([(0, o.SB)()], ee.prototype, "error", void 0),
        Z([(0, o.SB)()], ee.prototype, "startTime", void 0),
        Z([(0, o.Cb)({ type: Boolean })], ee.prototype, "isMobile", void 0),
        Z([(0, o.Cb)()], ee.prototype, "onRetry", void 0),
        (ee = Z([(0, k.Mo)("w3m-buy-in-progress-view")], ee));
      let et = class extends i.oi {
        render() {
          return (0, i.dy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "3xl", "xl", "3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${j.RouterController.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `;
        }
      };
      (et = (function (e, t, r, i) {
        var o,
          a = arguments.length,
          s =
            a < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, r))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, i);
        else
          for (var n = e.length - 1; n >= 0; n--)
            (o = e[n]) &&
              (s = (a < 3 ? o(s) : a > 3 ? o(t, r, s) : o(t, r)) || s);
        return a > 3 && s && Object.defineProperty(t, r, s), s;
      })([(0, k.Mo)("w3m-what-is-a-buy-view")], et)),
        r(64349);
      var er = (0, i.iv)`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`,
        ei = function (e, t, r, i) {
          var o,
            a = arguments.length,
            s =
              a < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, r))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, r, i);
          else
            for (var n = e.length - 1; n >= 0; n--)
              (o = e[n]) &&
                (s = (a < 3 ? o(s) : a > 3 ? o(t, r, s) : o(t, r)) || s);
          return a > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let eo = class extends i.oi {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.type = "Token"),
            (this.value = 0),
            (this.currencies = []),
            (this.selectedCurrency = this.currencies?.[0]),
            (this.currencyImages = x.W.state.currencyImages),
            (this.tokenImages = x.W.state.tokenImages),
            this.unsubscribe.push(
              b.subscribeKey("purchaseCurrency", (e) => {
                e &&
                  "Fiat" !== this.type &&
                  (this.selectedCurrency = this.formatPurchaseCurrency(e));
              }),
              b.subscribeKey("paymentCurrency", (e) => {
                e &&
                  "Token" !== this.type &&
                  (this.selectedCurrency = this.formatPaymentCurrency(e));
              }),
              b.subscribe((e) => {
                "Fiat" === this.type
                  ? (this.currencies = e.purchaseCurrencies.map(
                      this.formatPurchaseCurrency
                    ))
                  : (this.currencies = e.paymentCurrencies.map(
                      this.formatPaymentCurrency
                    ));
              }),
              x.W.subscribe((e) => {
                (this.currencyImages = { ...e.currencyImages }),
                  (this.tokenImages = { ...e.tokenImages });
              })
            );
        }
        firstUpdated() {
          b.getAvailableCurrencies();
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          let e = this.selectedCurrency?.symbol || "",
            t = this.currencyImages[e] || this.tokenImages[e];
          return (0, i.dy)`<wui-input-text type="number" size="lg" value=${
            this.value
          }>
      ${
        this.selectedCurrency
          ? (0, i.dy)` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${() => O.I.open({ view: `OnRamp${this.type}Select` })}
          >
            <wui-image src=${(0, a.o)(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`
          : (0, i.dy)`<wui-loading-spinner></wui-loading-spinner>`
      }
    </wui-input-text>`;
        }
        formatPaymentCurrency(e) {
          return { name: e.id, symbol: e.id };
        }
        formatPurchaseCurrency(e) {
          return { name: e.name, symbol: e.symbol };
        }
      };
      (eo.styles = er),
        ei([(0, o.Cb)({ type: String })], eo.prototype, "type", void 0),
        ei([(0, o.Cb)({ type: Number })], eo.prototype, "value", void 0),
        ei([(0, o.SB)()], eo.prototype, "currencies", void 0),
        ei([(0, o.SB)()], eo.prototype, "selectedCurrency", void 0),
        ei([(0, o.SB)()], eo.prototype, "currencyImages", void 0),
        ei([(0, o.SB)()], eo.prototype, "tokenImages", void 0),
        (eo = ei([(0, k.Mo)("w3m-onramp-input")], eo));
      var ea = (0, i.iv)`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`,
        es = function (e, t, r, i) {
          var o,
            a = arguments.length,
            s =
              a < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, r))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, r, i);
          else
            for (var n = e.length - 1; n >= 0; n--)
              (o = e[n]) &&
                (s = (a < 3 ? o(s) : a > 3 ? o(t, r, s) : o(t, r)) || s);
          return a > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let en = { USD: "$", EUR: "€", GBP: "\xa3" },
        ec = [100, 250, 500, 1e3],
        el = class extends i.oi {
          constructor() {
            super(),
              (this.unsubscribe = []),
              (this.disabled = !1),
              (this.caipAddress = m.R.state.activeCaipAddress),
              (this.loading = O.I.state.loading),
              (this.paymentCurrency = b.state.paymentCurrency),
              (this.paymentAmount = b.state.paymentAmount),
              (this.purchaseAmount = b.state.purchaseAmount),
              (this.quoteLoading = b.state.quotesLoading),
              this.unsubscribe.push(
                m.R.subscribeKey(
                  "activeCaipAddress",
                  (e) => (this.caipAddress = e)
                ),
                O.I.subscribeKey("loading", (e) => {
                  this.loading = e;
                }),
                b.subscribe((e) => {
                  (this.paymentCurrency = e.paymentCurrency),
                    (this.paymentAmount = e.paymentAmount),
                    (this.purchaseAmount = e.purchaseAmount),
                    (this.quoteLoading = e.quotesLoading);
                })
              );
          }
          disconnectedCallback() {
            this.unsubscribe.forEach((e) => e());
          }
          render() {
            return (0, i.dy)`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount || 0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount || 0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${ec.map(
              (e) => (0, i.dy)`<wui-button
                  variant=${this.paymentAmount === e ? "accent" : "neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${() => this.selectPresetAmount(e)}
                  >${`${
                    en[this.paymentCurrency?.id || "USD"]
                  } ${e}`}</wui-button
                >`
            )}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `;
          }
          templateButton() {
            return this.caipAddress
              ? (0, i.dy)`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`
              : (0, i.dy)`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`;
          }
          getQuotes() {
            this.loading || O.I.open({ view: "OnRampProviders" });
          }
          openModal() {
            O.I.open({ view: "Connect" });
          }
          async onPaymentAmountChange(e) {
            b.setPaymentAmount(Number(e.detail)), await b.getQuote();
          }
          async selectPresetAmount(e) {
            b.setPaymentAmount(e), await b.getQuote();
          }
        };
      (el.styles = ea),
        es([(0, o.Cb)({ type: Boolean })], el.prototype, "disabled", void 0),
        es([(0, o.SB)()], el.prototype, "caipAddress", void 0),
        es([(0, o.SB)()], el.prototype, "loading", void 0),
        es([(0, o.SB)()], el.prototype, "paymentCurrency", void 0),
        es([(0, o.SB)()], el.prototype, "paymentAmount", void 0),
        es([(0, o.SB)()], el.prototype, "purchaseAmount", void 0),
        es([(0, o.SB)()], el.prototype, "quoteLoading", void 0),
        (el = es([(0, k.Mo)("w3m-onramp-widget")], el));
    },
    23805: function (e, t, r) {
      var i = r(31133),
        o = r(84927),
        a = r(84249),
        s = r(57116),
        n = (0, i.iv)`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,
        c = function (e, t, r, i) {
          var o,
            a = arguments.length,
            s =
              a < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, r))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, r, i);
          else
            for (var n = e.length - 1; n >= 0; n--)
              (o = e[n]) &&
                (s = (a < 3 ? o(s) : a > 3 ? o(t, r, s) : o(t, r)) || s);
          return a > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let l = class extends i.oi {
        constructor() {
          super(...arguments),
            (this.src = "./path/to/image.jpg"),
            (this.alt = "Image"),
            (this.size = void 0);
        }
        render() {
          return (
            (this.style.cssText = `
      --local-width: ${
        this.size ? `var(--wui-icon-size-${this.size});` : "100%"
      };
      --local-height: ${
        this.size ? `var(--wui-icon-size-${this.size});` : "100%"
      };
      `),
            (0,
            i.dy)`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`
          );
        }
        handleImageError() {
          this.dispatchEvent(
            new CustomEvent("onLoadError", { bubbles: !0, composed: !0 })
          );
        }
      };
      (l.styles = [a.ET, a.Bp, n]),
        c([(0, o.Cb)()], l.prototype, "src", void 0),
        c([(0, o.Cb)()], l.prototype, "alt", void 0),
        c([(0, o.Cb)()], l.prototype, "size", void 0),
        c([(0, s.M)("wui-image")], l);
    },
  },
]);
