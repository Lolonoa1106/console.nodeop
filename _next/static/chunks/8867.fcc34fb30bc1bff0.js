"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8867],
  {
    5344: function (e, t, o) {
      o.d(t, {
        y0: function () {
          return p;
        },
      });
      var r = o(68584),
        i = o(55372),
        a = o(54173),
        n = o(31929),
        s = o(86777),
        l = o(66909),
        c = o(53357),
        u = o(36801);
      async function d() {
        s.RouterController.push("ConnectingFarcaster");
        let e = a.ConnectorController.getAuthConnector();
        if (e && !r.AccountController.state.farcasterUrl)
          try {
            let { url: t } = await e.provider.getFarcasterUri();
            r.AccountController.setFarcasterUrl(t, i.R.state.activeChain);
          } catch (e) {
            s.RouterController.goBack(), l.SnackController.showError(e);
          }
      }
      async function h(e) {
        s.RouterController.push("ConnectingSocial");
        let t = a.ConnectorController.getAuthConnector(),
          o = null;
        try {
          let a = setTimeout(() => {
            throw Error("Social login timed out. Please try again.");
          }, 45e3);
          if (t && e) {
            if (
              (c.j.isTelegram() ||
                (o = (function () {
                  try {
                    return c.j.returnOpenHref(
                      "",
                      "popupWindow",
                      "width=600,height=800,scrollbars=yes"
                    );
                  } catch (e) {
                    throw Error("Could not open social popup");
                  }
                })()),
              o)
            )
              r.AccountController.setSocialWindow(o, i.R.state.activeChain);
            else if (!c.j.isTelegram())
              throw Error("Could not create social popup");
            let { uri: n } = await t.provider.getSocialRedirectUri({
              provider: e,
            });
            if (!n)
              throw (
                (o?.close(), Error("Could not fetch the social redirect uri"))
              );
            if ((o && (o.location.href = n), c.j.isTelegram())) {
              u.M.setTelegramSocialProvider(e);
              let t = c.j.formatTelegramSocialLoginUrl(n);
              c.j.openHref(t, "_top");
            }
            clearTimeout(a);
          }
        } catch (e) {
          o?.close(), l.SnackController.showError(e?.message);
        }
      }
      async function p(e) {
        r.AccountController.setSocialProvider(e, i.R.state.activeChain),
          n.X.sendEvent({
            type: "track",
            event: "SOCIAL_LOGIN_STARTED",
            properties: { provider: e },
          }),
          "farcaster" === e ? await d() : await h(e);
      }
    },
    76654: function (e, t, o) {
      o.r(t),
        o.d(t, {
          W3mConnectSocialsView: function () {
            return w;
          },
          W3mConnectingFarcasterView: function () {
            return I;
          },
          W3mConnectingSocialView: function () {
            return P;
          },
        });
      var r = o(31133),
        i = o(84927),
        a = o(32801),
        n = o(48415),
        s = o(92413);
      o(96277), o(34041), o(88239);
      var l = o(54173),
        c = o(86777),
        u = o(59712),
        d = o(5344);
      o(15834);
      var h = (0, r.iv)`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,
        p = function (e, t, o, r) {
          var i,
            a = arguments.length,
            n =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, o))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, o, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (n = (a < 3 ? i(n) : a > 3 ? i(t, o, n) : i(t, o)) || n);
          return a > 3 && n && Object.defineProperty(t, o, n), n;
        };
      let g = class extends r.oi {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = l.ConnectorController.state.connectors),
            (this.authConnector = this.connectors.find(
              (e) => "AUTH" === e.type
            )),
            (this.features = n.OptionsController.state.features),
            this.unsubscribe.push(
              l.ConnectorController.subscribeKey("connectors", (e) => {
                (this.connectors = e),
                  (this.authConnector = this.connectors.find(
                    (e) => "AUTH" === e.type
                  ));
              }),
              n.OptionsController.subscribeKey(
                "features",
                (e) => (this.features = e)
              )
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          let e = this.features?.socials || [],
            t = !!this.authConnector,
            o = e?.length,
            i = "ConnectSocials" === c.RouterController.state.view;
          return (t && o) || i
            ? (i && !o && (e = u.bq.DEFAULT_FEATURES.socials),
              (0, r.dy)` <wui-flex flexDirection="column" gap="xs">
      ${e.map(
        (e) => (0, r.dy)`<wui-list-social
            @click=${() => {
              this.onSocialClick(e);
            }}
            name=${e}
            logo=${e}
            tabIdx=${(0, a.o)(this.tabIdx)}
          ></wui-list-social>`
      )}
    </wui-flex>`)
            : null;
        }
        async onSocialClick(e) {
          e && (await (0, d.y0)(e));
        }
      };
      (g.styles = h),
        p([(0, i.Cb)()], g.prototype, "tabIdx", void 0),
        p([(0, i.SB)()], g.prototype, "connectors", void 0),
        p([(0, i.SB)()], g.prototype, "authConnector", void 0),
        p([(0, i.SB)()], g.prototype, "features", void 0),
        (g = p([(0, s.Mo)("w3m-social-login-list")], g));
      var v = (0, r.iv)`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,
        b = function (e, t, o, r) {
          var i,
            a = arguments.length,
            n =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, o))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, o, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (n = (a < 3 ? i(n) : a > 3 ? i(t, o, n) : i(t, o)) || n);
          return a > 3 && n && Object.defineProperty(t, o, n), n;
        };
      let w = class extends r.oi {
        constructor() {
          super(...arguments), (this.checked = !1);
        }
        render() {
          let { termsConditionsUrl: e, privacyPolicyUrl: t } =
              n.OptionsController.state,
            o = n.OptionsController.state.features?.legalCheckbox,
            i = !!(e || t) && !!o,
            s = i && !this.checked;
          return (0, r.dy)`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(
        this
      )}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i ? ["0", "s", "s", "s"] : "s"}
        gap="xs"
        class=${(0, a.o)(s ? "disabled" : void 0)}
      >
        <w3m-social-login-list tabIdx=${(0, a.o)(
          s ? -1 : void 0
        )}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
        }
        onCheckboxChange(e) {
          this.checked = !!e.detail;
        }
      };
      (w.styles = v),
        b([(0, i.SB)()], w.prototype, "checked", void 0),
        (w = b([(0, s.Mo)("w3m-connect-socials-view")], w));
      var f = o(68584),
        y = o(55372),
        x = o(31929),
        m = o(36801),
        C = o(21278),
        k = o(66909),
        $ = o(89512),
        R = o(52005);
      o(92374), o(87302), o(84793), o(44732);
      var O = o(54946),
        S = (0, r.iv)`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
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
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
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
  .capitalize {
    text-transform: capitalize;
  }
`,
        T = function (e, t, o, r) {
          var i,
            a = arguments.length,
            n =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, o))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, o, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (n = (a < 3 ? i(n) : a > 3 ? i(t, o, n) : i(t, o)) || n);
          return a > 3 && n && Object.defineProperty(t, o, n), n;
        };
      let P = class extends r.oi {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.socialProvider = f.AccountController.state.socialProvider),
            (this.socialWindow = f.AccountController.state.socialWindow),
            (this.error = !1),
            (this.connecting = !1),
            (this.message = "Connect in the provider window"),
            (this.authConnector = l.ConnectorController.getAuthConnector()),
            (this.handleSocialConnection = async (e) => {
              if (e.data?.resultUri) {
                if (e.origin === O.b.SECURE_SITE_ORIGIN) {
                  window.removeEventListener(
                    "message",
                    this.handleSocialConnection,
                    !1
                  );
                  try {
                    if (this.authConnector && !this.connecting) {
                      this.socialWindow &&
                        (this.socialWindow.close(),
                        f.AccountController.setSocialWindow(
                          void 0,
                          y.R.state.activeChain
                        )),
                        (this.connecting = !0),
                        this.updateMessage();
                      let t = e.data.resultUri;
                      this.socialProvider &&
                        x.X.sendEvent({
                          type: "track",
                          event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
                          properties: { provider: this.socialProvider },
                        }),
                        await this.authConnector.provider.connectSocial(t),
                        this.socialProvider &&
                          (m.M.setConnectedSocialProvider(this.socialProvider),
                          await C.ConnectionController.connectExternal(
                            this.authConnector,
                            this.authConnector.chain
                          ),
                          x.X.sendEvent({
                            type: "track",
                            event: "SOCIAL_LOGIN_SUCCESS",
                            properties: { provider: this.socialProvider },
                          }));
                    }
                  } catch (e) {
                    (this.error = !0),
                      this.updateMessage(),
                      this.socialProvider &&
                        x.X.sendEvent({
                          type: "track",
                          event: "SOCIAL_LOGIN_ERROR",
                          properties: { provider: this.socialProvider },
                        });
                  }
                } else
                  c.RouterController.goBack(),
                    k.SnackController.showError("Untrusted Origin"),
                    this.socialProvider &&
                      x.X.sendEvent({
                        type: "track",
                        event: "SOCIAL_LOGIN_ERROR",
                        properties: { provider: this.socialProvider },
                      });
              }
            }),
            this.unsubscribe.push(
              f.AccountController.subscribe((e) => {
                e.socialProvider && (this.socialProvider = e.socialProvider),
                  e.socialWindow && (this.socialWindow = e.socialWindow),
                  e.address &&
                    ($.I.state.open ||
                      n.OptionsController.state.enableEmbedded) &&
                    $.I.close();
              })
            ),
            this.authConnector && this.connectSocial();
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e()),
            window.removeEventListener(
              "message",
              this.handleSocialConnection,
              !1
            ),
            this.socialWindow?.close(),
            f.AccountController.setSocialWindow(void 0, y.R.state.activeChain);
        }
        render() {
          return (0, r.dy)`
      <wui-flex
        data-error=${(0, a.o)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0, a.o)(this.socialProvider)}></wui-logo>
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
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${
              this.socialProvider ?? "Social"
            }</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${
            this.error ? "error-100" : "fg-200"
          }
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `;
        }
        loaderTemplate() {
          let e =
              R.ThemeController.state.themeVariables[
                "--w3m-border-radius-master"
              ],
            t = e ? parseInt(e.replace("px", ""), 10) : 4;
          return (0, r.dy)`<wui-loading-thumbnail radius=${
            9 * t
          }></wui-loading-thumbnail>`;
        }
        connectSocial() {
          let e = setInterval(() => {
            this.socialWindow?.closed &&
              (this.connecting ||
                "ConnectingSocial" !== c.RouterController.state.view ||
                (this.socialProvider &&
                  x.X.sendEvent({
                    type: "track",
                    event: "SOCIAL_LOGIN_CANCELED",
                    properties: { provider: this.socialProvider },
                  }),
                c.RouterController.goBack()),
              clearInterval(e));
          }, 1e3);
          window.addEventListener("message", this.handleSocialConnection, !1);
        }
        updateMessage() {
          this.error
            ? (this.message = "Something went wrong")
            : this.connecting
            ? (this.message = "Retrieving user data")
            : (this.message = "Connect in the provider window");
        }
      };
      (P.styles = S),
        T([(0, i.SB)()], P.prototype, "socialProvider", void 0),
        T([(0, i.SB)()], P.prototype, "socialWindow", void 0),
        T([(0, i.SB)()], P.prototype, "error", void 0),
        T([(0, i.SB)()], P.prototype, "connecting", void 0),
        T([(0, i.SB)()], P.prototype, "message", void 0),
        (P = T([(0, s.Mo)("w3m-connecting-social-view")], P));
      var j = o(53357);
      o(97585), o(4594), o(51437), o(930), o(80843);
      var E = (0, r.iv)`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`,
        z = function (e, t, o, r) {
          var i,
            a = arguments.length,
            n =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, o))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, o, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (n = (a < 3 ? i(n) : a > 3 ? i(t, o, n) : i(t, o)) || n);
          return a > 3 && n && Object.defineProperty(t, o, n), n;
        };
      let I = class extends r.oi {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.timeout = void 0),
            (this.socialProvider = f.AccountController.state.socialProvider),
            (this.uri = f.AccountController.state.farcasterUrl),
            (this.ready = !1),
            (this.loading = !1),
            (this.authConnector = l.ConnectorController.getAuthConnector()),
            (this.forceUpdate = () => {
              this.requestUpdate();
            }),
            this.unsubscribe.push(
              f.AccountController.subscribeKey("farcasterUrl", (e) => {
                e && ((this.uri = e), this.connectFarcaster());
              }),
              f.AccountController.subscribeKey("socialProvider", (e) => {
                e && (this.socialProvider = e);
              })
            ),
            window.addEventListener("resize", this.forceUpdate);
        }
        disconnectedCallback() {
          super.disconnectedCallback(),
            clearTimeout(this.timeout),
            window.removeEventListener("resize", this.forceUpdate);
        }
        render() {
          return this.onRenderProxy(), (0, r.dy)`${this.platformTemplate()}`;
        }
        platformTemplate() {
          return j.j.isMobile()
            ? (0, r.dy)`${this.mobileTemplate()}`
            : (0, r.dy)`${this.desktopTemplate()}`;
        }
        desktopTemplate() {
          return this.loading
            ? (0, r.dy)`${this.loadingTemplate()}`
            : (0, r.dy)`${this.qrTemplate()}`;
        }
        qrTemplate() {
          return (0, r.dy)` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0", "xl", "xl", "xl"]}
      gap="xl"
    >
      <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="paragraph-500" color="fg-100">
        Scan this QR Code with your phone
      </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`;
        }
        loadingTemplate() {
          return (0, r.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
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
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `;
        }
        mobileTemplate() {
          return (0, r.dy)` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl", "xl", "xl", "xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
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
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`;
        }
        loaderTemplate() {
          let e =
              R.ThemeController.state.themeVariables[
                "--w3m-border-radius-master"
              ],
            t = e ? parseInt(e.replace("px", ""), 10) : 4;
          return (0, r.dy)`<wui-loading-thumbnail radius=${
            9 * t
          }></wui-loading-thumbnail>`;
        }
        async connectFarcaster() {
          if (this.authConnector)
            try {
              await this.authConnector?.provider.connectFarcaster(),
                this.socialProvider &&
                  (m.M.setConnectedSocialProvider(this.socialProvider),
                  x.X.sendEvent({
                    type: "track",
                    event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
                    properties: { provider: this.socialProvider },
                  })),
                (this.loading = !0),
                await C.ConnectionController.connectExternal(
                  this.authConnector,
                  this.authConnector.chain
                ),
                this.socialProvider &&
                  x.X.sendEvent({
                    type: "track",
                    event: "SOCIAL_LOGIN_SUCCESS",
                    properties: { provider: this.socialProvider },
                  }),
                (this.loading = !1),
                $.I.close();
            } catch (e) {
              this.socialProvider &&
                x.X.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_ERROR",
                  properties: { provider: this.socialProvider },
                }),
                c.RouterController.goBack(),
                k.SnackController.showError(e);
            }
        }
        mobileLinkTemplate() {
          return (0, r.dy)`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri || this.loading}
      @click=${() => {
        this.uri && j.j.openHref(this.uri, "_blank");
      }}
    >
      Open farcaster</wui-button
    >`;
        }
        onRenderProxy() {
          !this.ready &&
            this.uri &&
            (this.timeout = setTimeout(() => {
              this.ready = !0;
            }, 200));
        }
        qrCodeTemplate() {
          if (!this.uri || !this.ready) return null;
          let e = this.getBoundingClientRect().width - 40;
          return (0, r.dy)` <wui-qr-code
      size=${e}
      theme=${R.ThemeController.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${(0, a.o)(
        R.ThemeController.state.themeVariables["--w3m-qr-color"]
      )}
    ></wui-qr-code>`;
        }
        copyTemplate() {
          let e = !this.uri || !this.ready;
          return (0, r.dy)`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`;
        }
        onCopyUri() {
          try {
            this.uri &&
              (j.j.copyToClopboard(this.uri),
              k.SnackController.showSuccess("Link copied"));
          } catch {
            k.SnackController.showError("Failed to copy");
          }
        }
      };
      (I.styles = E),
        z([(0, i.SB)()], I.prototype, "socialProvider", void 0),
        z([(0, i.SB)()], I.prototype, "uri", void 0),
        z([(0, i.SB)()], I.prototype, "ready", void 0),
        z([(0, i.SB)()], I.prototype, "loading", void 0),
        (I = z([(0, s.Mo)("w3m-connecting-farcaster-view")], I));
    },
    34041: function (e, t, o) {
      var r = o(31133),
        i = o(48415),
        a = o(92413),
        n = o(84927),
        s = o(32801),
        l = o(77548);
      o(95137);
      var c = o(84249),
        u = o(57116),
        d = (0, r.iv)`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`,
        h = function (e, t, o, r) {
          var i,
            a = arguments.length,
            n =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, o))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, o, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (n = (a < 3 ? i(n) : a > 3 ? i(t, o, n) : i(t, o)) || n);
          return a > 3 && n && Object.defineProperty(t, o, n), n;
        };
      let p = class extends r.oi {
        constructor() {
          super(...arguments),
            (this.inputElementRef = (0, l.V)()),
            (this.checked = void 0);
        }
        render() {
          return (0, r.dy)`
      <label>
        <input
          ${(0, l.i)(this.inputElementRef)}
          ?checked=${(0, s.o)(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `;
        }
        dispatchChangeEvent() {
          this.dispatchEvent(
            new CustomEvent("checkboxChange", {
              detail: this.inputElementRef.value?.checked,
              bubbles: !0,
              composed: !0,
            })
          );
        }
      };
      (p.styles = [c.ET, d]),
        h([(0, n.Cb)({ type: Boolean })], p.prototype, "checked", void 0),
        (p = h([(0, u.M)("wui-checkbox")], p)),
        o(44732);
      var g = (0, r.iv)`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;
      let v = class extends r.oi {
        render() {
          let { termsConditionsUrl: e, privacyPolicyUrl: t } =
              i.OptionsController.state,
            o = i.OptionsController.state.features?.legalCheckbox;
          return (e || t) && o
            ? (0, r.dy)`
      <wui-checkbox data-testid="wui-checkbox">
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `
            : null;
        }
        andTemplate() {
          let { termsConditionsUrl: e, privacyPolicyUrl: t } =
            i.OptionsController.state;
          return e && t ? "and" : "";
        }
        termsTemplate() {
          let { termsConditionsUrl: e } = i.OptionsController.state;
          return e
            ? (0,
              r.dy)`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`
            : null;
        }
        privacyTemplate() {
          let { privacyPolicyUrl: e } = i.OptionsController.state;
          return e
            ? (0,
              r.dy)`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`
            : null;
        }
      };
      (v.styles = [g]),
        (function (e, t, o, r) {
          var i,
            a = arguments.length,
            n =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, o))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, o, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (n = (a < 3 ? i(n) : a > 3 ? i(t, o, n) : i(t, o)) || n);
          a > 3 && n && Object.defineProperty(t, o, n);
        })([(0, a.Mo)("w3m-legal-checkbox")], v);
    },
    88239: function (e, t, o) {
      var r = o(31133),
        i = o(48415),
        a = o(92413);
      o(96277), o(44732), o(18742);
      var n = (0, r.iv)`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
    margin-top: var(--wui-spacing-s);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;
      let s = class extends r.oi {
        render() {
          let { termsConditionsUrl: e, privacyPolicyUrl: t } =
              i.OptionsController.state,
            o = i.OptionsController.state.features?.legalCheckbox;
          return (e || t) && !o
            ? (0, r.dy)`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m", "s", "s", "s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        <wui-ux-by-reown></wui-ux-by-reown>
      </wui-flex>
    `
            : null;
        }
        andTemplate() {
          let { termsConditionsUrl: e, privacyPolicyUrl: t } =
            i.OptionsController.state;
          return e && t ? "and" : "";
        }
        termsTemplate() {
          let { termsConditionsUrl: e } = i.OptionsController.state;
          return e ? (0, r.dy)`<a href=${e}>Terms of Service</a>` : null;
        }
        privacyTemplate() {
          let { privacyPolicyUrl: e } = i.OptionsController.state;
          return e ? (0, r.dy)`<a href=${e}>Privacy Policy</a>` : null;
        }
      };
      (s.styles = [n]),
        (function (e, t, o, r) {
          var i,
            a = arguments.length,
            n =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, o))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, o, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (n = (a < 3 ? i(n) : a > 3 ? i(t, o, n) : i(t, o)) || n);
          a > 3 && n && Object.defineProperty(t, o, n);
        })([(0, a.Mo)("w3m-legal-footer")], s);
    },
    97585: function (e, t, o) {
      o(98629);
    },
    92374: function (e, t, o) {
      o(1736);
    },
    4594: function (e, t, o) {
      o(95137);
    },
    51437: function (e, t, o) {
      var r = o(31133),
        i = o(84927),
        a = o(32801);
      o(18360);
      var n = o(84249),
        s = o(57116),
        l = (0, r.iv)`
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
        c = function (e, t, o, r) {
          var i,
            a = arguments.length,
            n =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, o))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, o, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (n = (a < 3 ? i(n) : a > 3 ? i(t, o, n) : i(t, o)) || n);
          return a > 3 && n && Object.defineProperty(t, o, n), n;
        };
      let u = class extends r.oi {
        constructor() {
          super(...arguments),
            (this.tabIdx = void 0),
            (this.disabled = !1),
            (this.color = "inherit");
        }
        render() {
          return (0, r.dy)`
      <button ?disabled=${this.disabled} tabindex=${(0, a.o)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `;
        }
      };
      (u.styles = [n.ET, n.ZM, l]),
        c([(0, i.Cb)()], u.prototype, "tabIdx", void 0),
        c([(0, i.Cb)({ type: Boolean })], u.prototype, "disabled", void 0),
        c([(0, i.Cb)()], u.prototype, "color", void 0),
        c([(0, s.M)("wui-link")], u);
    },
    15834: function (e, t, o) {
      var r = o(31133),
        i = o(84927),
        a = o(32801);
      o(18360);
      var n = o(84249),
        s = o(57116);
      o(84793);
      var l = (0, r.iv)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`,
        c = function (e, t, o, r) {
          var i,
            a = arguments.length,
            n =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, o))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, o, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (n = (a < 3 ? i(n) : a > 3 ? i(t, o, n) : i(t, o)) || n);
          return a > 3 && n && Object.defineProperty(t, o, n), n;
        };
      let u = class extends r.oi {
        constructor() {
          super(...arguments),
            (this.logo = "google"),
            (this.name = "Continue with google"),
            (this.align = "left"),
            (this.disabled = !1);
        }
        render() {
          return (0, r.dy)`
      <button ?disabled=${this.disabled} tabindex=${(0, a.o)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `;
        }
        templatePlacement() {
          return "center" === this.align
            ? (0,
              r.dy)` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`
            : null;
        }
      };
      (u.styles = [n.ET, n.ZM, l]),
        c([(0, i.Cb)()], u.prototype, "logo", void 0),
        c([(0, i.Cb)()], u.prototype, "name", void 0),
        c([(0, i.Cb)()], u.prototype, "align", void 0),
        c([(0, i.Cb)()], u.prototype, "tabIdx", void 0),
        c([(0, i.Cb)({ type: Boolean })], u.prototype, "disabled", void 0),
        c([(0, s.M)("wui-list-social")], u);
    },
    87302: function (e, t, o) {
      var r = o(31133),
        i = o(84927),
        a = o(84249),
        n = o(57116),
        s = (0, r.iv)`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,
        l = function (e, t, o, r) {
          var i,
            a = arguments.length,
            n =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, o))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, o, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (n = (a < 3 ? i(n) : a > 3 ? i(t, o, n) : i(t, o)) || n);
          return a > 3 && n && Object.defineProperty(t, o, n), n;
        };
      let c = class extends r.oi {
        constructor() {
          super(...arguments), (this.radius = 36);
        }
        render() {
          return this.svgLoaderTemplate();
        }
        svgLoaderTemplate() {
          let e = this.radius > 50 ? 50 : this.radius,
            t = 36 - e;
          return (0, r.dy)`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116 + t} ${245 + t}"
          stroke-dashoffset=${360 + 1.75 * t}
        />
      </svg>
    `;
        }
      };
      (c.styles = [a.ET, s]),
        l([(0, i.Cb)({ type: Number })], c.prototype, "radius", void 0),
        l([(0, n.M)("wui-loading-thumbnail")], c);
    },
    80843: function (e, t, o) {
      o(42653);
    },
    18742: function (e, t, o) {
      var r = o(31133);
      o(95137), o(18360), o(5680);
      var i = o(84249),
        a = o(57116),
        n = (0, r.iv)`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`;
      let s = class extends r.oi {
        render() {
          return (0, r.dy)`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0", "0", "l", "0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `;
        }
      };
      (s.styles = [i.ET, i.ZM, n]),
        (function (e, t, o, r) {
          var i,
            a = arguments.length,
            n =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, o))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, o, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (n = (a < 3 ? i(n) : a > 3 ? i(t, o, n) : i(t, o)) || n);
          a > 3 && n && Object.defineProperty(t, o, n);
        })([(0, a.M)("wui-ux-by-reown")], s);
    },
    21793: function (e, t, o) {
      var r = o(31133),
        i = o(84927),
        a = o(84249),
        n = o(57116),
        s = (0, r.iv)`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,
        l = function (e, t, o, r) {
          var i,
            a = arguments.length,
            n =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, o))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, o, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (n = (a < 3 ? i(n) : a > 3 ? i(t, o, n) : i(t, o)) || n);
          return a > 3 && n && Object.defineProperty(t, o, n), n;
        };
      let c = class extends r.oi {
        constructor() {
          super(...arguments), (this.color = "accent-100"), (this.size = "lg");
        }
        render() {
          return (
            (this.style.cssText = `--local-color: ${
              "inherit" === this.color
                ? "inherit"
                : `var(--wui-color-${this.color})`
            }`),
            (this.dataset.size = this.size),
            (0, r.dy)`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`
          );
        }
      };
      (c.styles = [a.ET, s]),
        l([(0, i.Cb)()], c.prototype, "color", void 0),
        l([(0, i.Cb)()], c.prototype, "size", void 0),
        l([(0, n.M)("wui-loading-spinner")], c);
    },
    42653: function (e, t, o) {
      var r = o(31133),
        i = o(84927),
        a = o(57116),
        n = (0, r.iv)`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,
        s = function (e, t, o, r) {
          var i,
            a = arguments.length,
            n =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, o))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, o, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (n = (a < 3 ? i(n) : a > 3 ? i(t, o, n) : i(t, o)) || n);
          return a > 3 && n && Object.defineProperty(t, o, n), n;
        };
      let l = class extends r.oi {
        constructor() {
          super(...arguments),
            (this.width = ""),
            (this.height = ""),
            (this.borderRadius = "m"),
            (this.variant = "default");
        }
        render() {
          return (
            (this.style.cssText = `
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `),
            (0, r.dy)`<slot></slot>`
          );
        }
      };
      (l.styles = [n]),
        s([(0, i.Cb)()], l.prototype, "width", void 0),
        s([(0, i.Cb)()], l.prototype, "height", void 0),
        s([(0, i.Cb)()], l.prototype, "borderRadius", void 0),
        s([(0, i.Cb)()], l.prototype, "variant", void 0),
        s([(0, a.M)("wui-shimmer")], l);
    },
    98629: function (e, t, o) {
      var r = o(31133),
        i = o(84927);
      o(21793), o(18360);
      var a = o(84249),
        n = o(57116),
        s = (0, r.iv)`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,
        l = function (e, t, o, r) {
          var i,
            a = arguments.length,
            n =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, o))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, o, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (n = (a < 3 ? i(n) : a > 3 ? i(t, o, n) : i(t, o)) || n);
          return a > 3 && n && Object.defineProperty(t, o, n), n;
        };
      let c = {
          main: "inverse-100",
          inverse: "inverse-000",
          accent: "accent-100",
          "accent-error": "error-100",
          "accent-success": "success-100",
          neutral: "fg-100",
          disabled: "gray-glass-020",
        },
        u = { lg: "paragraph-600", md: "small-600" },
        d = { lg: "md", md: "md" },
        h = class extends r.oi {
          constructor() {
            super(...arguments),
              (this.size = "lg"),
              (this.disabled = !1),
              (this.fullWidth = !1),
              (this.loading = !1),
              (this.variant = "main"),
              (this.hasIconLeft = !1),
              (this.hasIconRight = !1),
              (this.borderRadius = "m");
          }
          render() {
            this.style.cssText = `
    --local-width: ${this.fullWidth ? "100%" : "auto"};
    --local-opacity-100: ${this.loading ? 0 : 1};
    --local-opacity-000: ${this.loading ? 1 : 0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;
            let e = this.textVariant ?? u[this.size];
            return (0, r.dy)`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${() =>
          this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${() =>
          this.handleSlotRightChange()}></slot>
      </button>
    `;
          }
          handleSlotLeftChange() {
            this.hasIconLeft = !0;
          }
          handleSlotRightChange() {
            this.hasIconRight = !0;
          }
          loadingTemplate() {
            if (this.loading) {
              let e = d[this.size],
                t = this.disabled ? c.disabled : c[this.variant];
              return (0,
              r.dy)`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`;
            }
            return (0, r.dy)``;
          }
        };
      (h.styles = [a.ET, a.ZM, s]),
        l([(0, i.Cb)()], h.prototype, "size", void 0),
        l([(0, i.Cb)({ type: Boolean })], h.prototype, "disabled", void 0),
        l([(0, i.Cb)({ type: Boolean })], h.prototype, "fullWidth", void 0),
        l([(0, i.Cb)({ type: Boolean })], h.prototype, "loading", void 0),
        l([(0, i.Cb)()], h.prototype, "variant", void 0),
        l([(0, i.Cb)({ type: Boolean })], h.prototype, "hasIconLeft", void 0),
        l([(0, i.Cb)({ type: Boolean })], h.prototype, "hasIconRight", void 0),
        l([(0, i.Cb)()], h.prototype, "borderRadius", void 0),
        l([(0, i.Cb)()], h.prototype, "textVariant", void 0),
        l([(0, n.M)("wui-button")], h);
    },
    1736: function (e, t, o) {
      var r = o(31133),
        i = o(84927);
      o(95137);
      var a = o(84249),
        n = o(57116),
        s = (0, r.iv)`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,
        l = function (e, t, o, r) {
          var i,
            a = arguments.length,
            n =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, o))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, o, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (n = (a < 3 ? i(n) : a > 3 ? i(t, o, n) : i(t, o)) || n);
          return a > 3 && n && Object.defineProperty(t, o, n), n;
        };
      let c = class extends r.oi {
        constructor() {
          super(...arguments),
            (this.size = "md"),
            (this.backgroundColor = "accent-100"),
            (this.iconColor = "accent-100"),
            (this.background = "transparent"),
            (this.border = !1),
            (this.borderColor = "wui-color-bg-125"),
            (this.icon = "copy");
        }
        render() {
          let e = this.iconSize || this.size,
            t = "lg" === this.size,
            o = "xl" === this.size,
            i = "gray" === this.background,
            a = "opaque" === this.background,
            n =
              ("accent-100" === this.backgroundColor && a) ||
              ("success-100" === this.backgroundColor && a) ||
              ("error-100" === this.backgroundColor && a) ||
              ("inverse-100" === this.backgroundColor && a),
            s = `var(--wui-color-${this.backgroundColor})`;
          return (
            n
              ? (s = `var(--wui-icon-box-bg-${this.backgroundColor})`)
              : i && (s = `var(--wui-color-gray-${this.backgroundColor})`),
            (this.style.cssText = `
       --local-bg-value: ${s};
       --local-bg-mix: ${n || i ? "100%" : t ? "12%" : "16%"};
       --local-border-radius: var(--wui-border-radius-${
         t ? "xxs" : o ? "s" : "3xl"
       });
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${
         "wui-color-bg-125" === this.borderColor ? "2px" : "1px"
       } solid ${this.border ? `var(--${this.borderColor})` : "transparent"}
   `),
            (0,
            r.dy)` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `
          );
        }
      };
      (c.styles = [a.ET, a.ZM, s]),
        l([(0, i.Cb)()], c.prototype, "size", void 0),
        l([(0, i.Cb)()], c.prototype, "backgroundColor", void 0),
        l([(0, i.Cb)()], c.prototype, "iconColor", void 0),
        l([(0, i.Cb)()], c.prototype, "iconSize", void 0),
        l([(0, i.Cb)()], c.prototype, "background", void 0),
        l([(0, i.Cb)({ type: Boolean })], c.prototype, "border", void 0),
        l([(0, i.Cb)()], c.prototype, "borderColor", void 0),
        l([(0, i.Cb)()], c.prototype, "icon", void 0),
        l([(0, n.M)("wui-icon-box")], c);
    },
    84793: function (e, t, o) {
      var r = o(31133),
        i = o(84927);
      o(95137);
      var a = o(84249),
        n = o(57116),
        s = (0, r.iv)`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,
        l = function (e, t, o, r) {
          var i,
            a = arguments.length,
            n =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, o))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, o, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (n = (a < 3 ? i(n) : a > 3 ? i(t, o, n) : i(t, o)) || n);
          return a > 3 && n && Object.defineProperty(t, o, n), n;
        };
      let c = class extends r.oi {
        constructor() {
          super(...arguments), (this.logo = "google");
        }
        render() {
          return (0,
          r.dy)`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `;
        }
      };
      (c.styles = [a.ET, s]),
        l([(0, i.Cb)()], c.prototype, "logo", void 0),
        l([(0, n.M)("wui-logo")], c);
    },
    77548: function (e, t, o) {
      o.d(t, {
        V: function () {
          return n;
        },
        i: function () {
          return c;
        },
      });
      var r = o(81997),
        i = o(52144),
        a = o(42216);
      let n = () => new s();
      class s {}
      let l = new WeakMap(),
        c = (0, a.XM)(
          class extends i.sR {
            render(e) {
              return r.Ld;
            }
            update(e, [t]) {
              let o = t !== this.Y;
              return (
                o && void 0 !== this.Y && this.rt(void 0),
                (o || this.lt !== this.ct) &&
                  ((this.Y = t),
                  (this.ht = e.options?.host),
                  this.rt((this.ct = e.element))),
                r.Ld
              );
            }
            rt(e) {
              if (
                (this.isConnected || (e = void 0), "function" == typeof this.Y)
              ) {
                let t = this.ht ?? globalThis,
                  o = l.get(t);
                void 0 === o && ((o = new WeakMap()), l.set(t, o)),
                  void 0 !== o.get(this.Y) && this.Y.call(this.ht, void 0),
                  o.set(this.Y, e),
                  void 0 !== e && this.Y.call(this.ht, e);
              } else this.Y.value = e;
            }
            get lt() {
              return "function" == typeof this.Y
                ? l.get(this.ht ?? globalThis)?.get(this.Y)
                : this.Y?.value;
            }
            disconnected() {
              this.lt === this.ct && this.rt(void 0);
            }
            reconnected() {
              this.rt(this.ct);
            }
          }
        );
    },
  },
]);
