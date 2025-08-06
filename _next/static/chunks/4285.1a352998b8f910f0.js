"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4285],
  {
    34285: function (e, t, i) {
      i.r(t),
        i.d(t, {
          W3mSendSelectTokenView: function () {
            return B;
          },
          W3mWalletSendPreviewView: function () {
            return _;
          },
          W3mWalletSendView: function () {
            return I;
          },
        });
      var o = i(31133),
        r = i(84927),
        n = i(35212),
        a = i(41272),
        s = i(86777),
        l = i(53357),
        c = i(55372),
        u = i(92413);
      i(97585), i(96277), i(92374);
      var d = i(77548),
        h = i(21278);
      i(4594), i(44732);
      var p = (0, o.iv)`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`,
        g = function (e, t, i, o) {
          var r,
            n = arguments.length,
            a =
              n < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (r = e[s]) &&
                (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
          return n > 3 && a && Object.defineProperty(t, i, a), a;
        };
      let w = class extends o.oi {
        constructor() {
          super(...arguments),
            (this.inputElementRef = (0, d.V)()),
            (this.instructionElementRef = (0, d.V)()),
            (this.instructionHidden = !!this.value),
            (this.pasting = !1),
            (this.onDebouncedSearch = l.j.debounce(async (e) => {
              let t = await h.ConnectionController.getEnsAddress(e);
              if ((n.S.setLoading(!1), t)) {
                n.S.setReceiverProfileName(e), n.S.setReceiverAddress(t);
                let i = await h.ConnectionController.getEnsAvatar(e);
                n.S.setReceiverProfileImageUrl(i || void 0);
              } else
                n.S.setReceiverAddress(e),
                  n.S.setReceiverProfileName(void 0),
                  n.S.setReceiverProfileImageUrl(void 0);
            }));
        }
        firstUpdated() {
          this.value && (this.instructionHidden = !0), this.checkHidden();
        }
        render() {
          return (0, o.dy)` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl", "l", "xl", "l"]}
    >
      <wui-text
        ${(0, d.i)(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${(0, d.i)(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value ?? ""}
        autocomplete="off"
      >
${this.value ?? ""}</textarea
      >
    </wui-flex>`;
        }
        async focusInput() {
          this.instructionElementRef.value &&
            ((this.instructionHidden = !0),
            await this.toggleInstructionFocus(!1),
            (this.instructionElementRef.value.style.pointerEvents = "none"),
            this.inputElementRef.value?.focus(),
            this.inputElementRef.value &&
              (this.inputElementRef.value.selectionStart =
                this.inputElementRef.value.selectionEnd =
                  this.inputElementRef.value.value.length));
        }
        async focusInstruction() {
          this.instructionElementRef.value &&
            ((this.instructionHidden = !1),
            await this.toggleInstructionFocus(!0),
            (this.instructionElementRef.value.style.pointerEvents = "auto"),
            this.inputElementRef.value?.blur());
        }
        async toggleInstructionFocus(e) {
          this.instructionElementRef.value &&
            (await this.instructionElementRef.value.animate(
              [{ opacity: e ? 0 : 1 }, { opacity: e ? 1 : 0 }],
              { duration: 100, easing: "ease", fill: "forwards" }
            ).finished);
        }
        onBoxClick() {
          this.value || this.instructionHidden || this.focusInput();
        }
        onBlur() {
          this.value ||
            !this.instructionHidden ||
            this.pasting ||
            this.focusInstruction();
        }
        checkHidden() {
          this.instructionHidden && this.focusInput();
        }
        async onPasteClick() {
          this.pasting = !0;
          let e = await navigator.clipboard.readText();
          n.S.setReceiverAddress(e), this.focusInput();
        }
        onInputChange(e) {
          this.pasting = !1;
          let t = e.target;
          t.value && !this.instructionHidden && this.focusInput(),
            n.S.setLoading(!0),
            this.onDebouncedSearch(t.value);
        }
      };
      (w.styles = p),
        g([(0, r.Cb)()], w.prototype, "value", void 0),
        g([(0, r.SB)()], w.prototype, "instructionHidden", void 0),
        g([(0, r.SB)()], w.prototype, "pasting", void 0),
        (w = g([(0, u.Mo)("w3m-input-address")], w));
      var v = i(23614),
        f = i(59712);
      let m = /[.*+?^${}()|[\]\\]/gu,
        b = /[0-9,.]/u;
      var x = i(84249),
        k = i(57116),
        y = (0, o.iv)`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`,
        S = function (e, t, i, o) {
          var r,
            n = arguments.length,
            a =
              n < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (r = e[s]) &&
                (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
          return n > 3 && a && Object.defineProperty(t, i, a), a;
        };
      let C = class extends o.oi {
        constructor() {
          super(...arguments),
            (this.inputElementRef = (0, d.V)()),
            (this.disabled = !1),
            (this.value = ""),
            (this.placeholder = "0");
        }
        render() {
          return (
            this.inputElementRef?.value &&
              this.value &&
              (this.inputElementRef.value.value = this.value),
            (0, o.dy)`<input
      ${(0, d.i)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value ?? ""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `
          );
        }
        dispatchInputChangeEvent(e) {
          let t = e.data;
          if (t && this.inputElementRef?.value) {
            if ("," === t) {
              let e = this.inputElementRef.value.value.replace(",", ".");
              (this.inputElementRef.value.value = e),
                (this.value = `${this.value}${e}`);
            } else
              b.test(t) ||
                (this.inputElementRef.value.value = this.value.replace(
                  RegExp(t.replace(m, "\\$&"), "gu"),
                  ""
                ));
          }
          this.dispatchEvent(
            new CustomEvent("inputChange", {
              detail: this.inputElementRef.value?.value,
              bubbles: !0,
              composed: !0,
            })
          );
        }
      };
      (C.styles = [x.ET, x.ZM, y]),
        S([(0, r.Cb)({ type: Boolean })], C.prototype, "disabled", void 0),
        S([(0, r.Cb)({ type: String })], C.prototype, "value", void 0),
        S([(0, r.Cb)({ type: String })], C.prototype, "placeholder", void 0),
        (C = S([(0, k.M)("wui-input-amount")], C)),
        i(51437),
        i(7060);
      var $ = (0, o.iv)`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`,
        P = function (e, t, i, o) {
          var r,
            n = arguments.length,
            a =
              n < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (r = e[s]) &&
                (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
          return n > 3 && a && Object.defineProperty(t, i, a), a;
        };
      let T = class extends o.oi {
        render() {
          return (0, o.dy)` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl", "s", "l", "l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token}
          .value=${this.sendTokenAmount ? String(this.sendTokenAmount) : ""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`;
        }
        buttonTemplate() {
          return this.token
            ? (0, o.dy)`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`
            : (0, o.dy)`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`;
        }
        handleSelectButtonClick() {
          s.RouterController.push("WalletSendSelectToken");
        }
        sendValueTemplate() {
          if (this.token && this.sendTokenAmount) {
            let e = this.token.price * this.sendTokenAmount;
            return (0,
            o.dy)`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${
          e ? `$${u.Hg.formatNumberToLocalString(e, 2)}` : "Incorrect value"
        }</wui-text
      >`;
          }
          return null;
        }
        maxAmountTemplate() {
          return this.token
            ? this.sendTokenAmount &&
              this.sendTokenAmount > Number(this.token.quantity.numeric)
              ? (0, o.dy)` <wui-text variant="small-400" color="error-100">
          ${u.Hg.roundNumber(Number(this.token.quantity.numeric), 6, 5)}
        </wui-text>`
              : (0, o.dy)` <wui-text variant="small-400" color="fg-200">
        ${u.Hg.roundNumber(Number(this.token.quantity.numeric), 6, 5)}
      </wui-text>`
            : null;
        }
        actionTemplate() {
          return this.token
            ? this.sendTokenAmount &&
              this.sendTokenAmount > Number(this.token.quantity.numeric)
              ? (0, o.dy)`<wui-link @click=${this.onBuyClick.bind(
                  this
                )}>Buy</wui-link>`
              : (0, o.dy)`<wui-link @click=${this.onMaxClick.bind(
                  this
                )}>Max</wui-link>`
            : null;
        }
        onInputChange(e) {
          n.S.setTokenAmount(e.detail);
        }
        onMaxClick() {
          if (this.token && void 0 !== this.gasPrice) {
            let e =
                void 0 === this.token.address ||
                Object.values(f.bq.NATIVE_TOKEN_ADDRESS).some(
                  (e) => this.token?.address === e
                ),
              t = v.C.bigNumber(this.gasPrice).div(
                v.C.bigNumber(10).pow(Number(this.token.quantity.decimals))
              ),
              i = e
                ? v.C.bigNumber(this.token.quantity.numeric).minus(t)
                : v.C.bigNumber(this.token.quantity.numeric);
            n.S.setTokenAmount(Number(i.toFixed(20)));
          }
        }
        onBuyClick() {
          s.RouterController.push("OnRampProviders");
        }
      };
      (T.styles = $),
        P([(0, r.Cb)({ type: Object })], T.prototype, "token", void 0),
        P(
          [(0, r.Cb)({ type: Number })],
          T.prototype,
          "sendTokenAmount",
          void 0
        ),
        P([(0, r.Cb)({ type: Number })], T.prototype, "gasPriceInUSD", void 0),
        P([(0, r.Cb)({ type: Number })], T.prototype, "gasPrice", void 0),
        (T = P([(0, u.Mo)("w3m-input-token")], T));
      var R = (0, o.iv)`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`,
        A = function (e, t, i, o) {
          var r,
            n = arguments.length,
            a =
              n < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (r = e[s]) &&
                (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
          return n > 3 && a && Object.defineProperty(t, i, a), a;
        };
      let I = class extends o.oi {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.token = n.S.state.token),
            (this.sendTokenAmount = n.S.state.sendTokenAmount),
            (this.receiverAddress = n.S.state.receiverAddress),
            (this.receiverProfileName = n.S.state.receiverProfileName),
            (this.loading = n.S.state.loading),
            (this.gasPriceInUSD = n.S.state.gasPriceInUSD),
            (this.gasPrice = n.S.state.gasPrice),
            (this.message = "Preview Send"),
            this.fetchNetworkPrice(),
            this.fetchBalances(),
            this.unsubscribe.push(
              n.S.subscribe((e) => {
                (this.token = e.token),
                  (this.sendTokenAmount = e.sendTokenAmount),
                  (this.receiverAddress = e.receiverAddress),
                  (this.gasPriceInUSD = e.gasPriceInUSD),
                  (this.receiverProfileName = e.receiverProfileName),
                  (this.loading = e.loading);
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return (
            this.getMessage(),
            (0, o.dy)` <wui-flex flexDirection="column" .padding=${[
              "0",
              "l",
              "l",
              "l",
            ]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
          .gasPrice=${this.gasPrice}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${
            this.receiverProfileName
              ? this.receiverProfileName
              : this.receiverAddress
          }
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l", "0", "0", "0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`
          );
        }
        async fetchBalances() {
          await n.S.fetchTokenBalance(), n.S.fetchNetworkBalance();
        }
        async fetchNetworkPrice() {
          await a.nY.getNetworkTokenPrice();
          let e = await a.nY.getInitialGasPrice();
          e?.gasPrice &&
            e?.gasPriceInUSD &&
            (n.S.setGasPrice(e.gasPrice),
            n.S.setGasPriceInUsd(e.gasPriceInUSD));
        }
        onButtonClick() {
          s.RouterController.push("WalletSendPreview");
        }
        getMessage() {
          (this.message = "Preview Send"),
            this.receiverAddress &&
              !l.j.isAddress(this.receiverAddress, c.R.state.activeChain) &&
              (this.message = "Invalid Address"),
            this.receiverAddress || (this.message = "Add Address"),
            n.S.hasInsufficientGasFunds() &&
              (this.message = "Insufficient Gas Funds"),
            this.sendTokenAmount &&
              this.token &&
              this.sendTokenAmount > Number(this.token.quantity.numeric) &&
              (this.message = "Insufficient Funds"),
            this.sendTokenAmount || (this.message = "Add Amount"),
            this.sendTokenAmount &&
              this.token?.price &&
              !(this.sendTokenAmount * this.token.price) &&
              (this.message = "Incorrect Value"),
            this.token || (this.message = "Select Token");
        }
      };
      (I.styles = R),
        A([(0, r.SB)()], I.prototype, "token", void 0),
        A([(0, r.SB)()], I.prototype, "sendTokenAmount", void 0),
        A([(0, r.SB)()], I.prototype, "receiverAddress", void 0),
        A([(0, r.SB)()], I.prototype, "receiverProfileName", void 0),
        A([(0, r.SB)()], I.prototype, "loading", void 0),
        A([(0, r.SB)()], I.prototype, "gasPriceInUSD", void 0),
        A([(0, r.SB)()], I.prototype, "gasPrice", void 0),
        A([(0, r.SB)()], I.prototype, "message", void 0),
        (I = A([(0, u.Mo)("w3m-wallet-send-view")], I)),
        i(64349),
        i(79207),
        i(39203);
      var N = (0, o.iv)`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`,
        j = function (e, t, i, o) {
          var r,
            n = arguments.length,
            a =
              n < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (r = e[s]) &&
                (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
          return n > 3 && a && Object.defineProperty(t, i, a), a;
        };
      let B = class extends o.oi {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tokenBalances = n.S.state.tokenBalances),
            (this.search = ""),
            (this.onDebouncedSearch = l.j.debounce((e) => {
              this.search = e;
            })),
            this.unsubscribe.push(
              n.S.subscribe((e) => {
                this.tokenBalances = e.tokenBalances;
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return (0, o.dy)`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `;
        }
        templateSearchInput() {
          return (0, o.dy)`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `;
        }
        templateTokens() {
          return (
            (this.tokens = this.tokenBalances?.filter(
              (e) => e.chainId === c.R.state.activeCaipNetwork?.caipNetworkId
            )),
            this.search
              ? (this.filteredTokens = this.tokenBalances?.filter((e) =>
                  e.name.toLowerCase().includes(this.search.toLowerCase())
                ))
              : (this.filteredTokens = this.tokens),
            (0, o.dy)`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0", "s", "0", "s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m", "s", "s", "s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${
            this.filteredTokens && this.filteredTokens.length > 0
              ? this.filteredTokens.map(
                  (e) => (0, o.dy)`<wui-list-token
                    @click=${this.handleTokenClick.bind(this, e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`
                )
              : (0, o.dy)`<wui-flex
                .padding=${["4xl", "0", "0", "0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`
          }
        </wui-flex>
      </wui-flex>
    `
          );
        }
        onBuyClick() {
          s.RouterController.push("OnRampProviders");
        }
        onInputChange(e) {
          this.onDebouncedSearch(e.detail);
        }
        handleTokenClick(e) {
          n.S.setToken(e),
            n.S.setTokenAmount(void 0),
            s.RouterController.goBack();
        }
      };
      (B.styles = N),
        j([(0, r.SB)()], B.prototype, "tokenBalances", void 0),
        j([(0, r.SB)()], B.prototype, "tokens", void 0),
        j([(0, r.SB)()], B.prototype, "filteredTokens", void 0),
        j([(0, r.SB)()], B.prototype, "search", void 0),
        (B = j([(0, u.Mo)("w3m-wallet-send-select-token-view")], B)),
        i(95137),
        i(23805),
        i(18360),
        i(5680),
        i(48682);
      var E = (0, o.iv)`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`,
        D = function (e, t, i, o) {
          var r,
            n = arguments.length,
            a =
              n < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (r = e[s]) &&
                (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
          return n > 3 && a && Object.defineProperty(t, i, a), a;
        };
      let O = class extends o.oi {
        constructor() {
          super(...arguments),
            (this.text = ""),
            (this.address = ""),
            (this.isAddress = !1);
        }
        render() {
          return (0, o.dy)`<wui-text variant="large-500" color="fg-100">${
            this.text
          }</wui-text>
      ${this.imageTemplate()}`;
        }
        imageTemplate() {
          return this.isAddress
            ? (0,
              o.dy)`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`
            : this.imageSrc
            ? (0, o.dy)`<wui-image src=${this.imageSrc}></wui-image>`
            : (0,
              o.dy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`;
        }
      };
      (O.styles = [x.ET, x.ZM, E]),
        D([(0, r.Cb)()], O.prototype, "text", void 0),
        D([(0, r.Cb)()], O.prototype, "address", void 0),
        D([(0, r.Cb)()], O.prototype, "imageSrc", void 0),
        D([(0, r.Cb)({ type: Boolean })], O.prototype, "isAddress", void 0),
        (O = D([(0, k.M)("wui-preview-item")], O));
      var z = i(32801),
        U = i(63043),
        M = (0, o.iv)`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,
        V = function (e, t, i, o) {
          var r,
            n = arguments.length,
            a =
              n < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (r = e[s]) &&
                (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
          return n > 3 && a && Object.defineProperty(t, i, a), a;
        };
      let H = class extends o.oi {
        constructor() {
          super(...arguments),
            (this.imageSrc = void 0),
            (this.textTitle = ""),
            (this.textValue = void 0);
        }
        render() {
          return (0, o.dy)`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${
          this.textValue ? "fg-200" : "fg-100"
        }>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `;
        }
        templateContent() {
          return this.imageSrc
            ? (0,
              o.dy)`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`
            : this.textValue
            ? (0,
              o.dy)` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`
            : (0,
              o.dy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`;
        }
      };
      (H.styles = [x.ET, x.ZM, M]),
        V([(0, r.Cb)()], H.prototype, "imageSrc", void 0),
        V([(0, r.Cb)()], H.prototype, "textTitle", void 0),
        V([(0, r.Cb)()], H.prototype, "textValue", void 0),
        (H = V([(0, k.M)("wui-list-content")], H));
      var F = (0, o.iv)`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`,
        q = function (e, t, i, o) {
          var r,
            n = arguments.length,
            a =
              n < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (r = e[s]) &&
                (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
          return n > 3 && a && Object.defineProperty(t, i, a), a;
        };
      let L = class extends o.oi {
        render() {
          return (0,
          o.dy)` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${(0, z.o)(
          u.Hg.formatNumberToLocalString(this.networkFee, 2)
        )}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${u.Hg.getTruncateString({
            string: this.receiverAddress ?? "",
            charsStart: 4,
            charsEnd: 4,
            truncate: "middle",
          })}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`;
        }
        networkTemplate() {
          return this.caipNetwork?.name
            ? (0, o.dy)` <wui-list-content
        @click=${() => this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${(0, z.o)(U.f.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`
            : null;
        }
        onNetworkClick(e) {
          e && s.RouterController.push("Networks", { network: e });
        }
      };
      (L.styles = F),
        q([(0, r.Cb)()], L.prototype, "receiverAddress", void 0),
        q([(0, r.Cb)({ type: Object })], L.prototype, "caipNetwork", void 0),
        q([(0, r.Cb)({ type: Number })], L.prototype, "networkFee", void 0),
        (L = q([(0, u.Mo)("w3m-wallet-send-details")], L));
      var W = (0, o.iv)`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`,
        Z = function (e, t, i, o) {
          var r,
            n = arguments.length,
            a =
              n < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (r = e[s]) &&
                (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
          return n > 3 && a && Object.defineProperty(t, i, a), a;
        };
      let _ = class extends o.oi {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.token = n.S.state.token),
            (this.sendTokenAmount = n.S.state.sendTokenAmount),
            (this.receiverAddress = n.S.state.receiverAddress),
            (this.receiverProfileName = n.S.state.receiverProfileName),
            (this.receiverProfileImageUrl = n.S.state.receiverProfileImageUrl),
            (this.gasPriceInUSD = n.S.state.gasPriceInUSD),
            (this.caipNetwork = c.R.state.activeCaipNetwork),
            this.unsubscribe.push(
              n.S.subscribe((e) => {
                (this.token = e.token),
                  (this.sendTokenAmount = e.sendTokenAmount),
                  (this.receiverAddress = e.receiverAddress),
                  (this.gasPriceInUSD = e.gasPriceInUSD),
                  (this.receiverProfileName = e.receiverProfileName),
                  (this.receiverProfileImageUrl = e.receiverProfileImageUrl);
              }),
              c.R.subscribeKey(
                "activeCaipNetwork",
                (e) => (this.caipNetwork = e)
              )
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return (0, o.dy)` <wui-flex flexDirection="column" .padding=${[
            "0",
            "l",
            "l",
            "l",
          ]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${[
        "0",
        "xs",
        "0",
        "xs",
      ]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${
              this.sendTokenAmount
                ? u.Hg.roundNumber(this.sendTokenAmount, 6, 5)
                : "unknown"
            } ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${
              this.receiverProfileName
                ? u.Hg.getTruncateString({
                    string: this.receiverProfileName,
                    charsStart: 20,
                    charsEnd: 0,
                    truncate: "end",
                  })
                : u.Hg.getTruncateString({
                    string: this.receiverAddress ? this.receiverAddress : "",
                    charsStart: 4,
                    charsEnd: 4,
                    truncate: "middle",
                  })
            }"
            address=${this.receiverAddress ?? ""}
            .imageSrc=${this.receiverProfileImageUrl ?? void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl", "0", "0", "0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${[
          "s",
          "0",
          "0",
          "0",
        ]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${[
          "l",
          "0",
          "0",
          "0",
        ]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`;
        }
        sendValueTemplate() {
          if (this.token && this.sendTokenAmount) {
            let e = this.token.price * this.sendTokenAmount;
            return (0, o.dy)`<wui-text variant="paragraph-400" color="fg-100"
        >$${e.toFixed(2)}</wui-text
      >`;
          }
          return null;
        }
        onSendClick() {
          n.S.sendToken();
        }
        onCancelClick() {
          s.RouterController.goBack();
        }
      };
      (_.styles = W),
        Z([(0, r.SB)()], _.prototype, "token", void 0),
        Z([(0, r.SB)()], _.prototype, "sendTokenAmount", void 0),
        Z([(0, r.SB)()], _.prototype, "receiverAddress", void 0),
        Z([(0, r.SB)()], _.prototype, "receiverProfileName", void 0),
        Z([(0, r.SB)()], _.prototype, "receiverProfileImageUrl", void 0),
        Z([(0, r.SB)()], _.prototype, "gasPriceInUSD", void 0),
        Z([(0, r.SB)()], _.prototype, "caipNetwork", void 0),
        (_ = Z([(0, u.Mo)("w3m-wallet-send-preview-view")], _));
    },
    92374: function (e, t, i) {
      i(1736);
    },
    4594: function (e, t, i) {
      i(95137);
    },
    64349: function (e, t, i) {
      i(4163);
    },
    51437: function (e, t, i) {
      var o = i(31133),
        r = i(84927),
        n = i(32801);
      i(18360);
      var a = i(84249),
        s = i(57116),
        l = (0, o.iv)`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`,
        c = function (e, t, i, o) {
          var r,
            n = arguments.length,
            a =
              n < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (r = e[s]) &&
                (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
          return n > 3 && a && Object.defineProperty(t, i, a), a;
        };
      let u = class extends o.oi {
        constructor() {
          super(...arguments),
            (this.tabIdx = void 0),
            (this.disabled = !1),
            (this.color = "inherit");
        }
        render() {
          return (0, o.dy)`
      <button ?disabled=${this.disabled} tabindex=${(0, n.o)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `;
        }
      };
      (u.styles = [a.ET, a.ZM, l]),
        c([(0, r.Cb)()], u.prototype, "tabIdx", void 0),
        c([(0, r.Cb)({ type: Boolean })], u.prototype, "disabled", void 0),
        c([(0, r.Cb)()], u.prototype, "color", void 0),
        c([(0, s.M)("wui-link")], u);
    },
    79207: function (e, t, i) {
      var o = i(31133),
        r = i(84927);
      i(95137), i(23805), i(18360), i(5680);
      var n = i(84249),
        a = i(3874),
        s = i(57116),
        l = (0, o.iv)`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`,
        c = function (e, t, i, o) {
          var r,
            n = arguments.length,
            a =
              n < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (r = e[s]) &&
                (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
          return n > 3 && a && Object.defineProperty(t, i, a), a;
        };
      let u = class extends o.oi {
        constructor() {
          super(...arguments),
            (this.tokenName = ""),
            (this.tokenImageUrl = ""),
            (this.tokenValue = 0),
            (this.tokenAmount = "0.0"),
            (this.tokenCurrency = ""),
            (this.clickable = !1);
        }
        render() {
          return (0, o.dy)`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${
              this.tokenName
            }</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${a.H.formatNumberToLocalString(this.tokenAmount, 4)} ${
            this.tokenCurrency
          }
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(
          2
        )}</wui-text>
      </button>
    `;
        }
        visualTemplate() {
          return this.tokenName && this.tokenImageUrl
            ? (0,
              o.dy)`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`
            : (0,
              o.dy)`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`;
        }
      };
      (u.styles = [n.ET, n.ZM, l]),
        c([(0, r.Cb)()], u.prototype, "tokenName", void 0),
        c([(0, r.Cb)()], u.prototype, "tokenImageUrl", void 0),
        c([(0, r.Cb)({ type: Number })], u.prototype, "tokenValue", void 0),
        c([(0, r.Cb)()], u.prototype, "tokenAmount", void 0),
        c([(0, r.Cb)()], u.prototype, "tokenCurrency", void 0),
        c([(0, r.Cb)({ type: Boolean })], u.prototype, "clickable", void 0),
        c([(0, s.M)("wui-list-token")], u);
    },
    39203: function (e, t, i) {
      var o = i(31133),
        r = i(84927);
      i(18360);
      var n = i(84249),
        a = i(57116),
        s = (0, o.iv)`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`,
        l = function (e, t, i, o) {
          var r,
            n = arguments.length,
            a =
              n < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (r = e[s]) &&
                (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
          return n > 3 && a && Object.defineProperty(t, i, a), a;
        };
      let c = class extends o.oi {
        constructor() {
          super(...arguments), (this.text = "");
        }
        render() {
          return (0, o.dy)`${this.template()}`;
        }
        template() {
          return this.text
            ? (0,
              o.dy)`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`
            : null;
        }
      };
      (c.styles = [n.ET, s]),
        l([(0, r.Cb)()], c.prototype, "text", void 0),
        l([(0, a.M)("wui-separator")], c);
    },
    7060: function (e, t, i) {
      var o = i(31133),
        r = i(84927);
      i(23805), i(18360);
      var n = i(84249),
        a = i(57116);
      i(1736);
      var s = (0, o.iv)`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`,
        l = function (e, t, i, o) {
          var r,
            n = arguments.length,
            a =
              n < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (r = e[s]) &&
                (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
          return n > 3 && a && Object.defineProperty(t, i, a), a;
        };
      let c = class extends o.oi {
        constructor() {
          super(...arguments), (this.text = "");
        }
        render() {
          return (0, o.dy)`
      <button>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `;
        }
        tokenTemplate() {
          return this.imageSrc
            ? (0, o.dy)`<wui-image src=${this.imageSrc}></wui-image>`
            : (0, o.dy)`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `;
        }
      };
      (c.styles = [n.ET, n.ZM, s]),
        l([(0, r.Cb)()], c.prototype, "imageSrc", void 0),
        l([(0, r.Cb)()], c.prototype, "text", void 0),
        l([(0, a.M)("wui-token-button")], c);
    },
    23805: function (e, t, i) {
      var o = i(31133),
        r = i(84927),
        n = i(84249),
        a = i(57116),
        s = (0, o.iv)`
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
        l = function (e, t, i, o) {
          var r,
            n = arguments.length,
            a =
              n < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (r = e[s]) &&
                (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
          return n > 3 && a && Object.defineProperty(t, i, a), a;
        };
      let c = class extends o.oi {
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
            o.dy)`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`
          );
        }
        handleImageError() {
          this.dispatchEvent(
            new CustomEvent("onLoadError", { bubbles: !0, composed: !0 })
          );
        }
      };
      (c.styles = [n.ET, n.Bp, s]),
        l([(0, r.Cb)()], c.prototype, "src", void 0),
        l([(0, r.Cb)()], c.prototype, "alt", void 0),
        l([(0, r.Cb)()], c.prototype, "size", void 0),
        l([(0, a.M)("wui-image")], c);
    },
    48682: function (e, t, i) {
      var o = i(31133),
        r = i(84927);
      i(23805);
      var n = i(84249),
        a = i(3874),
        s = i(57116),
        l = (0, o.iv)`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,
        c = function (e, t, i, o) {
          var r,
            n = arguments.length,
            a =
              n < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (r = e[s]) &&
                (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
          return n > 3 && a && Object.defineProperty(t, i, a), a;
        };
      let u = class extends o.oi {
        constructor() {
          super(...arguments),
            (this.imageSrc = void 0),
            (this.alt = void 0),
            (this.address = void 0),
            (this.size = "xl");
        }
        render() {
          return (
            (this.style.cssText = `
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `),
            (0, o.dy)`${this.visualTemplate()}`
          );
        }
        visualTemplate() {
          if (this.imageSrc)
            return (
              (this.dataset.variant = "image"),
              (0, o.dy)`<wui-image src=${this.imageSrc} alt=${
                this.alt ?? "avatar"
              }></wui-image>`
            );
          if (this.address) {
            this.dataset.variant = "generated";
            let e = a.H.generateAvatarColors(this.address);
            return (
              (this.style.cssText += `
 ${e}`),
              null
            );
          }
          return (this.dataset.variant = "default"), null;
        }
      };
      (u.styles = [n.ET, l]),
        c([(0, r.Cb)()], u.prototype, "imageSrc", void 0),
        c([(0, r.Cb)()], u.prototype, "alt", void 0),
        c([(0, r.Cb)()], u.prototype, "address", void 0),
        c([(0, r.Cb)()], u.prototype, "size", void 0),
        c([(0, s.M)("wui-avatar")], u);
    },
  },
]);
