"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6262],
  {
    52670: function (e, n, o) {
      o.r(n),
        o.d(n, {
          MsgAcknowledgement: function () {
            return G;
          },
          MsgAcknowledgementResponse: function () {
            return J;
          },
          MsgChannelCloseConfirm: function () {
            return E;
          },
          MsgChannelCloseConfirmResponse: function () {
            return w;
          },
          MsgChannelCloseInit: function () {
            return q;
          },
          MsgChannelCloseInitResponse: function () {
            return R;
          },
          MsgChannelOpenAck: function () {
            return I;
          },
          MsgChannelOpenAckResponse: function () {
            return M;
          },
          MsgChannelOpenConfirm: function () {
            return S;
          },
          MsgChannelOpenConfirmResponse: function () {
            return H;
          },
          MsgChannelOpenInit: function () {
            return y;
          },
          MsgChannelOpenInitResponse: function () {
            return U;
          },
          MsgChannelOpenTry: function () {
            return _;
          },
          MsgChannelOpenTryResponse: function () {
            return k;
          },
          MsgChannelUpgradeAck: function () {
            return ep;
          },
          MsgChannelUpgradeAckResponse: function () {
            return ea;
          },
          MsgChannelUpgradeCancel: function () {
            return e_;
          },
          MsgChannelUpgradeCancelResponse: function () {
            return eA;
          },
          MsgChannelUpgradeConfirm: function () {
            return ec;
          },
          MsgChannelUpgradeConfirmResponse: function () {
            return ed;
          },
          MsgChannelUpgradeInit: function () {
            return W;
          },
          MsgChannelUpgradeInitResponse: function () {
            return ee;
          },
          MsgChannelUpgradeOpen: function () {
            return ef;
          },
          MsgChannelUpgradeOpenResponse: function () {
            return eh;
          },
          MsgChannelUpgradeTimeout: function () {
            return em;
          },
          MsgChannelUpgradeTimeoutResponse: function () {
            return eU;
          },
          MsgChannelUpgradeTry: function () {
            return eo;
          },
          MsgChannelUpgradeTryResponse: function () {
            return et;
          },
          MsgPruneAcknowledgements: function () {
            return eC;
          },
          MsgPruneAcknowledgementsResponse: function () {
            return eH;
          },
          MsgRecvPacket: function () {
            return D;
          },
          MsgRecvPacketResponse: function () {
            return K;
          },
          MsgTimeout: function () {
            return B;
          },
          MsgTimeoutOnClose: function () {
            return Y;
          },
          MsgTimeoutOnCloseResponse: function () {
            return j;
          },
          MsgTimeoutResponse: function () {
            return F;
          },
          MsgUpdateParams: function () {
            return eP;
          },
          MsgUpdateParamsResponse: function () {
            return eI;
          },
          ResponseResultType: function () {
            return t;
          },
          ResponseResultTypeAmino: function () {
            return d;
          },
          ResponseResultTypeSDKType: function () {
            return g;
          },
          responseResultTypeFromJSON: function () {
            return u;
          },
          responseResultTypeToJSON: function () {
            return f;
          },
        });
      var r,
        t,
        i = o(54106),
        p = o(1715),
        s = o(49842),
        a = o(62150),
        l = o(292),
        c = o(91984);
      ((r = t || (t = {}))[(r.RESPONSE_RESULT_TYPE_UNSPECIFIED = 0)] =
        "RESPONSE_RESULT_TYPE_UNSPECIFIED"),
        (r[(r.RESPONSE_RESULT_TYPE_NOOP = 1)] = "RESPONSE_RESULT_TYPE_NOOP"),
        (r[(r.RESPONSE_RESULT_TYPE_SUCCESS = 2)] =
          "RESPONSE_RESULT_TYPE_SUCCESS"),
        (r[(r.RESPONSE_RESULT_TYPE_FAILURE = 3)] =
          "RESPONSE_RESULT_TYPE_FAILURE"),
        (r[(r.UNRECOGNIZED = -1)] = "UNRECOGNIZED");
      let g = t,
        d = t;
      function u(e) {
        switch (e) {
          case 0:
          case "RESPONSE_RESULT_TYPE_UNSPECIFIED":
            return t.RESPONSE_RESULT_TYPE_UNSPECIFIED;
          case 1:
          case "RESPONSE_RESULT_TYPE_NOOP":
            return t.RESPONSE_RESULT_TYPE_NOOP;
          case 2:
          case "RESPONSE_RESULT_TYPE_SUCCESS":
            return t.RESPONSE_RESULT_TYPE_SUCCESS;
          case 3:
          case "RESPONSE_RESULT_TYPE_FAILURE":
            return t.RESPONSE_RESULT_TYPE_FAILURE;
          default:
            return t.UNRECOGNIZED;
        }
      }
      function f(e) {
        switch (e) {
          case t.RESPONSE_RESULT_TYPE_UNSPECIFIED:
            return "RESPONSE_RESULT_TYPE_UNSPECIFIED";
          case t.RESPONSE_RESULT_TYPE_NOOP:
            return "RESPONSE_RESULT_TYPE_NOOP";
          case t.RESPONSE_RESULT_TYPE_SUCCESS:
            return "RESPONSE_RESULT_TYPE_SUCCESS";
          case t.RESPONSE_RESULT_TYPE_FAILURE:
            return "RESPONSE_RESULT_TYPE_FAILURE";
          case t.UNRECOGNIZED:
          default:
            return "UNRECOGNIZED";
        }
      }
      function h() {
        return { portId: "", channel: i.Channel.fromPartial({}), signer: "" };
      }
      let y = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
        aminoType: "cosmos-sdk/MsgChannelOpenInit",
        is: (e) =>
          e &&
          (e.$typeUrl === y.typeUrl ||
            ("string" == typeof e.portId &&
              i.Channel.is(e.channel) &&
              "string" == typeof e.signer)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === y.typeUrl ||
            ("string" == typeof e.port_id &&
              i.Channel.isSDK(e.channel) &&
              "string" == typeof e.signer)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === y.typeUrl ||
            ("string" == typeof e.port_id &&
              i.Channel.isAmino(e.channel) &&
              "string" == typeof e.signer)),
        encode: (e, n = a.Lt.create()) => (
          "" !== e.portId && n.uint32(10).string(e.portId),
          void 0 !== e.channel &&
            i.Channel.encode(e.channel, n.uint32(18).fork()).ldelim(),
          "" !== e.signer && n.uint32(26).string(e.signer),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = h();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.portId = o.string();
                break;
              case 2:
                t.channel = i.Channel.decode(o, o.uint32());
                break;
              case 3:
                t.signer = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = h();
          return (
            (n.portId = e.portId ?? ""),
            (n.channel =
              void 0 !== e.channel && null !== e.channel
                ? i.Channel.fromPartial(e.channel)
                : void 0),
            (n.signer = e.signer ?? ""),
            n
          );
        },
        fromAmino(e) {
          let n = h();
          return (
            void 0 !== e.port_id &&
              null !== e.port_id &&
              (n.portId = e.port_id),
            void 0 !== e.channel &&
              null !== e.channel &&
              (n.channel = i.Channel.fromAmino(e.channel)),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.port_id = "" === e.portId ? void 0 : e.portId),
            (n.channel = e.channel ? i.Channel.toAmino(e.channel) : void 0),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            n
          );
        },
        fromAminoMsg: (e) => y.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelOpenInit",
          value: y.toAmino(e),
        }),
        fromProtoMsg: (e) => y.decode(e.value),
        toProto: (e) => y.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
          value: y.encode(e).finish(),
        }),
      };
      function m() {
        return { channelId: "", version: "" };
      }
      l.q.register(y.typeUrl, y),
        l.q.registerAminoProtoMapping(y.aminoType, y.typeUrl);
      let U = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
        aminoType: "cosmos-sdk/MsgChannelOpenInitResponse",
        is: (e) =>
          e &&
          (e.$typeUrl === U.typeUrl ||
            ("string" == typeof e.channelId && "string" == typeof e.version)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === U.typeUrl ||
            ("string" == typeof e.channel_id && "string" == typeof e.version)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === U.typeUrl ||
            ("string" == typeof e.channel_id && "string" == typeof e.version)),
        encode: (e, n = a.Lt.create()) => (
          "" !== e.channelId && n.uint32(10).string(e.channelId),
          "" !== e.version && n.uint32(18).string(e.version),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = m();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.channelId = o.string();
                break;
              case 2:
                t.version = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = m();
          return (
            (n.channelId = e.channelId ?? ""), (n.version = e.version ?? ""), n
          );
        },
        fromAmino(e) {
          let n = m();
          return (
            void 0 !== e.channel_id &&
              null !== e.channel_id &&
              (n.channelId = e.channel_id),
            void 0 !== e.version &&
              null !== e.version &&
              (n.version = e.version),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.channel_id = "" === e.channelId ? void 0 : e.channelId),
            (n.version = "" === e.version ? void 0 : e.version),
            n
          );
        },
        fromAminoMsg: (e) => U.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelOpenInitResponse",
          value: U.toAmino(e),
        }),
        fromProtoMsg: (e) => U.decode(e.value),
        toProto: (e) => U.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
          value: U.encode(e).finish(),
        }),
      };
      function v() {
        return {
          portId: "",
          previousChannelId: "",
          channel: i.Channel.fromPartial({}),
          counterpartyVersion: "",
          proofInit: new Uint8Array(),
          proofHeight: p.Height.fromPartial({}),
          signer: "",
        };
      }
      l.q.register(U.typeUrl, U),
        l.q.registerAminoProtoMapping(U.aminoType, U.typeUrl);
      let _ = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
        aminoType: "cosmos-sdk/MsgChannelOpenTry",
        is: (e) =>
          e &&
          (e.$typeUrl === _.typeUrl ||
            ("string" == typeof e.portId &&
              "string" == typeof e.previousChannelId &&
              i.Channel.is(e.channel) &&
              "string" == typeof e.counterpartyVersion &&
              (e.proofInit instanceof Uint8Array ||
                "string" == typeof e.proofInit) &&
              p.Height.is(e.proofHeight) &&
              "string" == typeof e.signer)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === _.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.previous_channel_id &&
              i.Channel.isSDK(e.channel) &&
              "string" == typeof e.counterparty_version &&
              (e.proof_init instanceof Uint8Array ||
                "string" == typeof e.proof_init) &&
              p.Height.isSDK(e.proof_height) &&
              "string" == typeof e.signer)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === _.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.previous_channel_id &&
              i.Channel.isAmino(e.channel) &&
              "string" == typeof e.counterparty_version &&
              (e.proof_init instanceof Uint8Array ||
                "string" == typeof e.proof_init) &&
              p.Height.isAmino(e.proof_height) &&
              "string" == typeof e.signer)),
        encode: (e, n = a.Lt.create()) => (
          "" !== e.portId && n.uint32(10).string(e.portId),
          "" !== e.previousChannelId &&
            n.uint32(18).string(e.previousChannelId),
          void 0 !== e.channel &&
            i.Channel.encode(e.channel, n.uint32(26).fork()).ldelim(),
          "" !== e.counterpartyVersion &&
            n.uint32(34).string(e.counterpartyVersion),
          0 !== e.proofInit.length && n.uint32(42).bytes(e.proofInit),
          void 0 !== e.proofHeight &&
            p.Height.encode(e.proofHeight, n.uint32(50).fork()).ldelim(),
          "" !== e.signer && n.uint32(58).string(e.signer),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = v();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.portId = o.string();
                break;
              case 2:
                t.previousChannelId = o.string();
                break;
              case 3:
                t.channel = i.Channel.decode(o, o.uint32());
                break;
              case 4:
                t.counterpartyVersion = o.string();
                break;
              case 5:
                t.proofInit = o.bytes();
                break;
              case 6:
                t.proofHeight = p.Height.decode(o, o.uint32());
                break;
              case 7:
                t.signer = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = v();
          return (
            (n.portId = e.portId ?? ""),
            (n.previousChannelId = e.previousChannelId ?? ""),
            (n.channel =
              void 0 !== e.channel && null !== e.channel
                ? i.Channel.fromPartial(e.channel)
                : void 0),
            (n.counterpartyVersion = e.counterpartyVersion ?? ""),
            (n.proofInit = e.proofInit ?? new Uint8Array()),
            (n.proofHeight =
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? p.Height.fromPartial(e.proofHeight)
                : void 0),
            (n.signer = e.signer ?? ""),
            n
          );
        },
        fromAmino(e) {
          let n = v();
          return (
            void 0 !== e.port_id &&
              null !== e.port_id &&
              (n.portId = e.port_id),
            void 0 !== e.previous_channel_id &&
              null !== e.previous_channel_id &&
              (n.previousChannelId = e.previous_channel_id),
            void 0 !== e.channel &&
              null !== e.channel &&
              (n.channel = i.Channel.fromAmino(e.channel)),
            void 0 !== e.counterparty_version &&
              null !== e.counterparty_version &&
              (n.counterpartyVersion = e.counterparty_version),
            void 0 !== e.proof_init &&
              null !== e.proof_init &&
              (n.proofInit = (0, c.jm)(e.proof_init)),
            void 0 !== e.proof_height &&
              null !== e.proof_height &&
              (n.proofHeight = p.Height.fromAmino(e.proof_height)),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.port_id = "" === e.portId ? void 0 : e.portId),
            (n.previous_channel_id =
              "" === e.previousChannelId ? void 0 : e.previousChannelId),
            (n.channel = e.channel ? i.Channel.toAmino(e.channel) : void 0),
            (n.counterparty_version =
              "" === e.counterpartyVersion ? void 0 : e.counterpartyVersion),
            (n.proof_init = e.proofInit ? (0, c.Uz)(e.proofInit) : void 0),
            (n.proof_height = e.proofHeight
              ? p.Height.toAmino(e.proofHeight)
              : {}),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            n
          );
        },
        fromAminoMsg: (e) => _.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelOpenTry",
          value: _.toAmino(e),
        }),
        fromProtoMsg: (e) => _.decode(e.value),
        toProto: (e) => _.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
          value: _.encode(e).finish(),
        }),
      };
      function A() {
        return { version: "", channelId: "" };
      }
      l.q.register(_.typeUrl, _),
        l.q.registerAminoProtoMapping(_.aminoType, _.typeUrl);
      let k = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
        aminoType: "cosmos-sdk/MsgChannelOpenTryResponse",
        is: (e) =>
          e &&
          (e.$typeUrl === k.typeUrl ||
            ("string" == typeof e.version && "string" == typeof e.channelId)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === k.typeUrl ||
            ("string" == typeof e.version && "string" == typeof e.channel_id)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === k.typeUrl ||
            ("string" == typeof e.version && "string" == typeof e.channel_id)),
        encode: (e, n = a.Lt.create()) => (
          "" !== e.version && n.uint32(10).string(e.version),
          "" !== e.channelId && n.uint32(18).string(e.channelId),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = A();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.version = o.string();
                break;
              case 2:
                t.channelId = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = A();
          return (
            (n.version = e.version ?? ""), (n.channelId = e.channelId ?? ""), n
          );
        },
        fromAmino(e) {
          let n = A();
          return (
            void 0 !== e.version &&
              null !== e.version &&
              (n.version = e.version),
            void 0 !== e.channel_id &&
              null !== e.channel_id &&
              (n.channelId = e.channel_id),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.version = "" === e.version ? void 0 : e.version),
            (n.channel_id = "" === e.channelId ? void 0 : e.channelId),
            n
          );
        },
        fromAminoMsg: (e) => k.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelOpenTryResponse",
          value: k.toAmino(e),
        }),
        fromProtoMsg: (e) => k.decode(e.value),
        toProto: (e) => k.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
          value: k.encode(e).finish(),
        }),
      };
      function P() {
        return {
          portId: "",
          channelId: "",
          counterpartyChannelId: "",
          counterpartyVersion: "",
          proofTry: new Uint8Array(),
          proofHeight: p.Height.fromPartial({}),
          signer: "",
        };
      }
      l.q.register(k.typeUrl, k),
        l.q.registerAminoProtoMapping(k.aminoType, k.typeUrl);
      let I = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
        aminoType: "cosmos-sdk/MsgChannelOpenAck",
        is: (e) =>
          e &&
          (e.$typeUrl === I.typeUrl ||
            ("string" == typeof e.portId &&
              "string" == typeof e.channelId &&
              "string" == typeof e.counterpartyChannelId &&
              "string" == typeof e.counterpartyVersion &&
              (e.proofTry instanceof Uint8Array ||
                "string" == typeof e.proofTry) &&
              p.Height.is(e.proofHeight) &&
              "string" == typeof e.signer)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === I.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              "string" == typeof e.counterparty_channel_id &&
              "string" == typeof e.counterparty_version &&
              (e.proof_try instanceof Uint8Array ||
                "string" == typeof e.proof_try) &&
              p.Height.isSDK(e.proof_height) &&
              "string" == typeof e.signer)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === I.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              "string" == typeof e.counterparty_channel_id &&
              "string" == typeof e.counterparty_version &&
              (e.proof_try instanceof Uint8Array ||
                "string" == typeof e.proof_try) &&
              p.Height.isAmino(e.proof_height) &&
              "string" == typeof e.signer)),
        encode: (e, n = a.Lt.create()) => (
          "" !== e.portId && n.uint32(10).string(e.portId),
          "" !== e.channelId && n.uint32(18).string(e.channelId),
          "" !== e.counterpartyChannelId &&
            n.uint32(26).string(e.counterpartyChannelId),
          "" !== e.counterpartyVersion &&
            n.uint32(34).string(e.counterpartyVersion),
          0 !== e.proofTry.length && n.uint32(42).bytes(e.proofTry),
          void 0 !== e.proofHeight &&
            p.Height.encode(e.proofHeight, n.uint32(50).fork()).ldelim(),
          "" !== e.signer && n.uint32(58).string(e.signer),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = P();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.portId = o.string();
                break;
              case 2:
                t.channelId = o.string();
                break;
              case 3:
                t.counterpartyChannelId = o.string();
                break;
              case 4:
                t.counterpartyVersion = o.string();
                break;
              case 5:
                t.proofTry = o.bytes();
                break;
              case 6:
                t.proofHeight = p.Height.decode(o, o.uint32());
                break;
              case 7:
                t.signer = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = P();
          return (
            (n.portId = e.portId ?? ""),
            (n.channelId = e.channelId ?? ""),
            (n.counterpartyChannelId = e.counterpartyChannelId ?? ""),
            (n.counterpartyVersion = e.counterpartyVersion ?? ""),
            (n.proofTry = e.proofTry ?? new Uint8Array()),
            (n.proofHeight =
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? p.Height.fromPartial(e.proofHeight)
                : void 0),
            (n.signer = e.signer ?? ""),
            n
          );
        },
        fromAmino(e) {
          let n = P();
          return (
            void 0 !== e.port_id &&
              null !== e.port_id &&
              (n.portId = e.port_id),
            void 0 !== e.channel_id &&
              null !== e.channel_id &&
              (n.channelId = e.channel_id),
            void 0 !== e.counterparty_channel_id &&
              null !== e.counterparty_channel_id &&
              (n.counterpartyChannelId = e.counterparty_channel_id),
            void 0 !== e.counterparty_version &&
              null !== e.counterparty_version &&
              (n.counterpartyVersion = e.counterparty_version),
            void 0 !== e.proof_try &&
              null !== e.proof_try &&
              (n.proofTry = (0, c.jm)(e.proof_try)),
            void 0 !== e.proof_height &&
              null !== e.proof_height &&
              (n.proofHeight = p.Height.fromAmino(e.proof_height)),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.port_id = "" === e.portId ? void 0 : e.portId),
            (n.channel_id = "" === e.channelId ? void 0 : e.channelId),
            (n.counterparty_channel_id =
              "" === e.counterpartyChannelId
                ? void 0
                : e.counterpartyChannelId),
            (n.counterparty_version =
              "" === e.counterpartyVersion ? void 0 : e.counterpartyVersion),
            (n.proof_try = e.proofTry ? (0, c.Uz)(e.proofTry) : void 0),
            (n.proof_height = e.proofHeight
              ? p.Height.toAmino(e.proofHeight)
              : {}),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            n
          );
        },
        fromAminoMsg: (e) => I.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelOpenAck",
          value: I.toAmino(e),
        }),
        fromProtoMsg: (e) => I.decode(e.value),
        toProto: (e) => I.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
          value: I.encode(e).finish(),
        }),
      };
      l.q.register(I.typeUrl, I),
        l.q.registerAminoProtoMapping(I.aminoType, I.typeUrl);
      let M = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
        aminoType: "cosmos-sdk/MsgChannelOpenAckResponse",
        is: (e) => e && e.$typeUrl === M.typeUrl,
        isSDK: (e) => e && e.$typeUrl === M.typeUrl,
        isAmino: (e) => e && e.$typeUrl === M.typeUrl,
        encode: (e, n = a.Lt.create()) => n,
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n;
          for (; o.pos < r; ) {
            let e = o.uint32();
            o.skipType(7 & e);
          }
          return {};
        },
        fromPartial: (e) => ({}),
        fromAmino: (e) => ({}),
        toAmino: (e) => ({}),
        fromAminoMsg: (e) => M.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelOpenAckResponse",
          value: M.toAmino(e),
        }),
        fromProtoMsg: (e) => M.decode(e.value),
        toProto: (e) => M.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
          value: M.encode(e).finish(),
        }),
      };
      function C() {
        return {
          portId: "",
          channelId: "",
          proofAck: new Uint8Array(),
          proofHeight: p.Height.fromPartial({}),
          signer: "",
        };
      }
      l.q.register(M.typeUrl, M),
        l.q.registerAminoProtoMapping(M.aminoType, M.typeUrl);
      let S = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
        aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
        is: (e) =>
          e &&
          (e.$typeUrl === S.typeUrl ||
            ("string" == typeof e.portId &&
              "string" == typeof e.channelId &&
              (e.proofAck instanceof Uint8Array ||
                "string" == typeof e.proofAck) &&
              p.Height.is(e.proofHeight) &&
              "string" == typeof e.signer)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === S.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              (e.proof_ack instanceof Uint8Array ||
                "string" == typeof e.proof_ack) &&
              p.Height.isSDK(e.proof_height) &&
              "string" == typeof e.signer)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === S.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              (e.proof_ack instanceof Uint8Array ||
                "string" == typeof e.proof_ack) &&
              p.Height.isAmino(e.proof_height) &&
              "string" == typeof e.signer)),
        encode: (e, n = a.Lt.create()) => (
          "" !== e.portId && n.uint32(10).string(e.portId),
          "" !== e.channelId && n.uint32(18).string(e.channelId),
          0 !== e.proofAck.length && n.uint32(26).bytes(e.proofAck),
          void 0 !== e.proofHeight &&
            p.Height.encode(e.proofHeight, n.uint32(34).fork()).ldelim(),
          "" !== e.signer && n.uint32(42).string(e.signer),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = C();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.portId = o.string();
                break;
              case 2:
                t.channelId = o.string();
                break;
              case 3:
                t.proofAck = o.bytes();
                break;
              case 4:
                t.proofHeight = p.Height.decode(o, o.uint32());
                break;
              case 5:
                t.signer = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = C();
          return (
            (n.portId = e.portId ?? ""),
            (n.channelId = e.channelId ?? ""),
            (n.proofAck = e.proofAck ?? new Uint8Array()),
            (n.proofHeight =
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? p.Height.fromPartial(e.proofHeight)
                : void 0),
            (n.signer = e.signer ?? ""),
            n
          );
        },
        fromAmino(e) {
          let n = C();
          return (
            void 0 !== e.port_id &&
              null !== e.port_id &&
              (n.portId = e.port_id),
            void 0 !== e.channel_id &&
              null !== e.channel_id &&
              (n.channelId = e.channel_id),
            void 0 !== e.proof_ack &&
              null !== e.proof_ack &&
              (n.proofAck = (0, c.jm)(e.proof_ack)),
            void 0 !== e.proof_height &&
              null !== e.proof_height &&
              (n.proofHeight = p.Height.fromAmino(e.proof_height)),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.port_id = "" === e.portId ? void 0 : e.portId),
            (n.channel_id = "" === e.channelId ? void 0 : e.channelId),
            (n.proof_ack = e.proofAck ? (0, c.Uz)(e.proofAck) : void 0),
            (n.proof_height = e.proofHeight
              ? p.Height.toAmino(e.proofHeight)
              : {}),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            n
          );
        },
        fromAminoMsg: (e) => S.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelOpenConfirm",
          value: S.toAmino(e),
        }),
        fromProtoMsg: (e) => S.decode(e.value),
        toProto: (e) => S.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
          value: S.encode(e).finish(),
        }),
      };
      l.q.register(S.typeUrl, S),
        l.q.registerAminoProtoMapping(S.aminoType, S.typeUrl);
      let H = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
        aminoType: "cosmos-sdk/MsgChannelOpenConfirmResponse",
        is: (e) => e && e.$typeUrl === H.typeUrl,
        isSDK: (e) => e && e.$typeUrl === H.typeUrl,
        isAmino: (e) => e && e.$typeUrl === H.typeUrl,
        encode: (e, n = a.Lt.create()) => n,
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n;
          for (; o.pos < r; ) {
            let e = o.uint32();
            o.skipType(7 & e);
          }
          return {};
        },
        fromPartial: (e) => ({}),
        fromAmino: (e) => ({}),
        toAmino: (e) => ({}),
        fromAminoMsg: (e) => H.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelOpenConfirmResponse",
          value: H.toAmino(e),
        }),
        fromProtoMsg: (e) => H.decode(e.value),
        toProto: (e) => H.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
          value: H.encode(e).finish(),
        }),
      };
      function b() {
        return { portId: "", channelId: "", signer: "" };
      }
      l.q.register(H.typeUrl, H),
        l.q.registerAminoProtoMapping(H.aminoType, H.typeUrl);
      let q = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
        aminoType: "cosmos-sdk/MsgChannelCloseInit",
        is: (e) =>
          e &&
          (e.$typeUrl === q.typeUrl ||
            ("string" == typeof e.portId &&
              "string" == typeof e.channelId &&
              "string" == typeof e.signer)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === q.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              "string" == typeof e.signer)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === q.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              "string" == typeof e.signer)),
        encode: (e, n = a.Lt.create()) => (
          "" !== e.portId && n.uint32(10).string(e.portId),
          "" !== e.channelId && n.uint32(18).string(e.channelId),
          "" !== e.signer && n.uint32(26).string(e.signer),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = b();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.portId = o.string();
                break;
              case 2:
                t.channelId = o.string();
                break;
              case 3:
                t.signer = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = b();
          return (
            (n.portId = e.portId ?? ""),
            (n.channelId = e.channelId ?? ""),
            (n.signer = e.signer ?? ""),
            n
          );
        },
        fromAmino(e) {
          let n = b();
          return (
            void 0 !== e.port_id &&
              null !== e.port_id &&
              (n.portId = e.port_id),
            void 0 !== e.channel_id &&
              null !== e.channel_id &&
              (n.channelId = e.channel_id),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.port_id = "" === e.portId ? void 0 : e.portId),
            (n.channel_id = "" === e.channelId ? void 0 : e.channelId),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            n
          );
        },
        fromAminoMsg: (e) => q.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelCloseInit",
          value: q.toAmino(e),
        }),
        fromProtoMsg: (e) => q.decode(e.value),
        toProto: (e) => q.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
          value: q.encode(e).finish(),
        }),
      };
      l.q.register(q.typeUrl, q),
        l.q.registerAminoProtoMapping(q.aminoType, q.typeUrl);
      let R = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
        aminoType: "cosmos-sdk/MsgChannelCloseInitResponse",
        is: (e) => e && e.$typeUrl === R.typeUrl,
        isSDK: (e) => e && e.$typeUrl === R.typeUrl,
        isAmino: (e) => e && e.$typeUrl === R.typeUrl,
        encode: (e, n = a.Lt.create()) => n,
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n;
          for (; o.pos < r; ) {
            let e = o.uint32();
            o.skipType(7 & e);
          }
          return {};
        },
        fromPartial: (e) => ({}),
        fromAmino: (e) => ({}),
        toAmino: (e) => ({}),
        fromAminoMsg: (e) => R.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelCloseInitResponse",
          value: R.toAmino(e),
        }),
        fromProtoMsg: (e) => R.decode(e.value),
        toProto: (e) => R.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
          value: R.encode(e).finish(),
        }),
      };
      function T() {
        return {
          portId: "",
          channelId: "",
          proofInit: new Uint8Array(),
          proofHeight: p.Height.fromPartial({}),
          signer: "",
          counterpartyUpgradeSequence: BigInt(0),
        };
      }
      l.q.register(R.typeUrl, R),
        l.q.registerAminoProtoMapping(R.aminoType, R.typeUrl);
      let E = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
        aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
        is: (e) =>
          e &&
          (e.$typeUrl === E.typeUrl ||
            ("string" == typeof e.portId &&
              "string" == typeof e.channelId &&
              (e.proofInit instanceof Uint8Array ||
                "string" == typeof e.proofInit) &&
              p.Height.is(e.proofHeight) &&
              "string" == typeof e.signer &&
              "bigint" == typeof e.counterpartyUpgradeSequence)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === E.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              (e.proof_init instanceof Uint8Array ||
                "string" == typeof e.proof_init) &&
              p.Height.isSDK(e.proof_height) &&
              "string" == typeof e.signer &&
              "bigint" == typeof e.counterparty_upgrade_sequence)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === E.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              (e.proof_init instanceof Uint8Array ||
                "string" == typeof e.proof_init) &&
              p.Height.isAmino(e.proof_height) &&
              "string" == typeof e.signer &&
              "bigint" == typeof e.counterparty_upgrade_sequence)),
        encode: (e, n = a.Lt.create()) => (
          "" !== e.portId && n.uint32(10).string(e.portId),
          "" !== e.channelId && n.uint32(18).string(e.channelId),
          0 !== e.proofInit.length && n.uint32(26).bytes(e.proofInit),
          void 0 !== e.proofHeight &&
            p.Height.encode(e.proofHeight, n.uint32(34).fork()).ldelim(),
          "" !== e.signer && n.uint32(42).string(e.signer),
          e.counterpartyUpgradeSequence !== BigInt(0) &&
            n.uint32(48).uint64(e.counterpartyUpgradeSequence),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = T();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.portId = o.string();
                break;
              case 2:
                t.channelId = o.string();
                break;
              case 3:
                t.proofInit = o.bytes();
                break;
              case 4:
                t.proofHeight = p.Height.decode(o, o.uint32());
                break;
              case 5:
                t.signer = o.string();
                break;
              case 6:
                t.counterpartyUpgradeSequence = o.uint64();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = T();
          return (
            (n.portId = e.portId ?? ""),
            (n.channelId = e.channelId ?? ""),
            (n.proofInit = e.proofInit ?? new Uint8Array()),
            (n.proofHeight =
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? p.Height.fromPartial(e.proofHeight)
                : void 0),
            (n.signer = e.signer ?? ""),
            (n.counterpartyUpgradeSequence =
              void 0 !== e.counterpartyUpgradeSequence &&
              null !== e.counterpartyUpgradeSequence
                ? BigInt(e.counterpartyUpgradeSequence.toString())
                : BigInt(0)),
            n
          );
        },
        fromAmino(e) {
          let n = T();
          return (
            void 0 !== e.port_id &&
              null !== e.port_id &&
              (n.portId = e.port_id),
            void 0 !== e.channel_id &&
              null !== e.channel_id &&
              (n.channelId = e.channel_id),
            void 0 !== e.proof_init &&
              null !== e.proof_init &&
              (n.proofInit = (0, c.jm)(e.proof_init)),
            void 0 !== e.proof_height &&
              null !== e.proof_height &&
              (n.proofHeight = p.Height.fromAmino(e.proof_height)),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            void 0 !== e.counterparty_upgrade_sequence &&
              null !== e.counterparty_upgrade_sequence &&
              (n.counterpartyUpgradeSequence = BigInt(
                e.counterparty_upgrade_sequence
              )),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.port_id = "" === e.portId ? void 0 : e.portId),
            (n.channel_id = "" === e.channelId ? void 0 : e.channelId),
            (n.proof_init = e.proofInit ? (0, c.Uz)(e.proofInit) : void 0),
            (n.proof_height = e.proofHeight
              ? p.Height.toAmino(e.proofHeight)
              : {}),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            (n.counterparty_upgrade_sequence =
              e.counterpartyUpgradeSequence !== BigInt(0)
                ? e.counterpartyUpgradeSequence.toString()
                : void 0),
            n
          );
        },
        fromAminoMsg: (e) => E.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelCloseConfirm",
          value: E.toAmino(e),
        }),
        fromProtoMsg: (e) => E.decode(e.value),
        toProto: (e) => E.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
          value: E.encode(e).finish(),
        }),
      };
      l.q.register(E.typeUrl, E),
        l.q.registerAminoProtoMapping(E.aminoType, E.typeUrl);
      let w = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
        aminoType: "cosmos-sdk/MsgChannelCloseConfirmResponse",
        is: (e) => e && e.$typeUrl === w.typeUrl,
        isSDK: (e) => e && e.$typeUrl === w.typeUrl,
        isAmino: (e) => e && e.$typeUrl === w.typeUrl,
        encode: (e, n = a.Lt.create()) => n,
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n;
          for (; o.pos < r; ) {
            let e = o.uint32();
            o.skipType(7 & e);
          }
          return {};
        },
        fromPartial: (e) => ({}),
        fromAmino: (e) => ({}),
        toAmino: (e) => ({}),
        fromAminoMsg: (e) => w.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelCloseConfirmResponse",
          value: w.toAmino(e),
        }),
        fromProtoMsg: (e) => w.decode(e.value),
        toProto: (e) => w.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
          value: w.encode(e).finish(),
        }),
      };
      function $() {
        return {
          packet: i.Packet.fromPartial({}),
          proofCommitment: new Uint8Array(),
          proofHeight: p.Height.fromPartial({}),
          signer: "",
        };
      }
      l.q.register(w.typeUrl, w),
        l.q.registerAminoProtoMapping(w.aminoType, w.typeUrl);
      let D = {
        typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
        aminoType: "cosmos-sdk/MsgRecvPacket",
        is: (e) =>
          e &&
          (e.$typeUrl === D.typeUrl ||
            (i.Packet.is(e.packet) &&
              (e.proofCommitment instanceof Uint8Array ||
                "string" == typeof e.proofCommitment) &&
              p.Height.is(e.proofHeight) &&
              "string" == typeof e.signer)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === D.typeUrl ||
            (i.Packet.isSDK(e.packet) &&
              (e.proof_commitment instanceof Uint8Array ||
                "string" == typeof e.proof_commitment) &&
              p.Height.isSDK(e.proof_height) &&
              "string" == typeof e.signer)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === D.typeUrl ||
            (i.Packet.isAmino(e.packet) &&
              (e.proof_commitment instanceof Uint8Array ||
                "string" == typeof e.proof_commitment) &&
              p.Height.isAmino(e.proof_height) &&
              "string" == typeof e.signer)),
        encode: (e, n = a.Lt.create()) => (
          void 0 !== e.packet &&
            i.Packet.encode(e.packet, n.uint32(10).fork()).ldelim(),
          0 !== e.proofCommitment.length &&
            n.uint32(18).bytes(e.proofCommitment),
          void 0 !== e.proofHeight &&
            p.Height.encode(e.proofHeight, n.uint32(26).fork()).ldelim(),
          "" !== e.signer && n.uint32(34).string(e.signer),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = $();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.packet = i.Packet.decode(o, o.uint32());
                break;
              case 2:
                t.proofCommitment = o.bytes();
                break;
              case 3:
                t.proofHeight = p.Height.decode(o, o.uint32());
                break;
              case 4:
                t.signer = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = $();
          return (
            (n.packet =
              void 0 !== e.packet && null !== e.packet
                ? i.Packet.fromPartial(e.packet)
                : void 0),
            (n.proofCommitment = e.proofCommitment ?? new Uint8Array()),
            (n.proofHeight =
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? p.Height.fromPartial(e.proofHeight)
                : void 0),
            (n.signer = e.signer ?? ""),
            n
          );
        },
        fromAmino(e) {
          let n = $();
          return (
            void 0 !== e.packet &&
              null !== e.packet &&
              (n.packet = i.Packet.fromAmino(e.packet)),
            void 0 !== e.proof_commitment &&
              null !== e.proof_commitment &&
              (n.proofCommitment = (0, c.jm)(e.proof_commitment)),
            void 0 !== e.proof_height &&
              null !== e.proof_height &&
              (n.proofHeight = p.Height.fromAmino(e.proof_height)),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.packet = e.packet ? i.Packet.toAmino(e.packet) : void 0),
            (n.proof_commitment = e.proofCommitment
              ? (0, c.Uz)(e.proofCommitment)
              : void 0),
            (n.proof_height = e.proofHeight
              ? p.Height.toAmino(e.proofHeight)
              : {}),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            n
          );
        },
        fromAminoMsg: (e) => D.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgRecvPacket",
          value: D.toAmino(e),
        }),
        fromProtoMsg: (e) => D.decode(e.value),
        toProto: (e) => D.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
          value: D.encode(e).finish(),
        }),
      };
      function O() {
        return { result: 0 };
      }
      l.q.register(D.typeUrl, D),
        l.q.registerAminoProtoMapping(D.aminoType, D.typeUrl);
      let K = {
        typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
        aminoType: "cosmos-sdk/MsgRecvPacketResponse",
        is: (e) => e && (e.$typeUrl === K.typeUrl || (0, c.DM)(e.result)),
        isSDK: (e) => e && (e.$typeUrl === K.typeUrl || (0, c.DM)(e.result)),
        isAmino: (e) => e && (e.$typeUrl === K.typeUrl || (0, c.DM)(e.result)),
        encode: (e, n = a.Lt.create()) => (
          0 !== e.result && n.uint32(8).int32(e.result), n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = O();
          for (; o.pos < r; ) {
            let e = o.uint32();
            e >>> 3 == 1 ? (t.result = o.int32()) : o.skipType(7 & e);
          }
          return t;
        },
        fromPartial(e) {
          let n = O();
          return (n.result = e.result ?? 0), n;
        },
        fromAmino(e) {
          let n = O();
          return (
            void 0 !== e.result && null !== e.result && (n.result = e.result), n
          );
        },
        toAmino(e) {
          let n = {};
          return (n.result = 0 === e.result ? void 0 : e.result), n;
        },
        fromAminoMsg: (e) => K.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgRecvPacketResponse",
          value: K.toAmino(e),
        }),
        fromProtoMsg: (e) => K.decode(e.value),
        toProto: (e) => K.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
          value: K.encode(e).finish(),
        }),
      };
      function L() {
        return {
          packet: i.Packet.fromPartial({}),
          proofUnreceived: new Uint8Array(),
          proofHeight: p.Height.fromPartial({}),
          nextSequenceRecv: BigInt(0),
          signer: "",
        };
      }
      l.q.register(K.typeUrl, K),
        l.q.registerAminoProtoMapping(K.aminoType, K.typeUrl);
      let B = {
        typeUrl: "/ibc.core.channel.v1.MsgTimeout",
        aminoType: "cosmos-sdk/MsgTimeout",
        is: (e) =>
          e &&
          (e.$typeUrl === B.typeUrl ||
            (i.Packet.is(e.packet) &&
              (e.proofUnreceived instanceof Uint8Array ||
                "string" == typeof e.proofUnreceived) &&
              p.Height.is(e.proofHeight) &&
              "bigint" == typeof e.nextSequenceRecv &&
              "string" == typeof e.signer)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === B.typeUrl ||
            (i.Packet.isSDK(e.packet) &&
              (e.proof_unreceived instanceof Uint8Array ||
                "string" == typeof e.proof_unreceived) &&
              p.Height.isSDK(e.proof_height) &&
              "bigint" == typeof e.next_sequence_recv &&
              "string" == typeof e.signer)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === B.typeUrl ||
            (i.Packet.isAmino(e.packet) &&
              (e.proof_unreceived instanceof Uint8Array ||
                "string" == typeof e.proof_unreceived) &&
              p.Height.isAmino(e.proof_height) &&
              "bigint" == typeof e.next_sequence_recv &&
              "string" == typeof e.signer)),
        encode: (e, n = a.Lt.create()) => (
          void 0 !== e.packet &&
            i.Packet.encode(e.packet, n.uint32(10).fork()).ldelim(),
          0 !== e.proofUnreceived.length &&
            n.uint32(18).bytes(e.proofUnreceived),
          void 0 !== e.proofHeight &&
            p.Height.encode(e.proofHeight, n.uint32(26).fork()).ldelim(),
          e.nextSequenceRecv !== BigInt(0) &&
            n.uint32(32).uint64(e.nextSequenceRecv),
          "" !== e.signer && n.uint32(42).string(e.signer),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = L();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.packet = i.Packet.decode(o, o.uint32());
                break;
              case 2:
                t.proofUnreceived = o.bytes();
                break;
              case 3:
                t.proofHeight = p.Height.decode(o, o.uint32());
                break;
              case 4:
                t.nextSequenceRecv = o.uint64();
                break;
              case 5:
                t.signer = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = L();
          return (
            (n.packet =
              void 0 !== e.packet && null !== e.packet
                ? i.Packet.fromPartial(e.packet)
                : void 0),
            (n.proofUnreceived = e.proofUnreceived ?? new Uint8Array()),
            (n.proofHeight =
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? p.Height.fromPartial(e.proofHeight)
                : void 0),
            (n.nextSequenceRecv =
              void 0 !== e.nextSequenceRecv && null !== e.nextSequenceRecv
                ? BigInt(e.nextSequenceRecv.toString())
                : BigInt(0)),
            (n.signer = e.signer ?? ""),
            n
          );
        },
        fromAmino(e) {
          let n = L();
          return (
            void 0 !== e.packet &&
              null !== e.packet &&
              (n.packet = i.Packet.fromAmino(e.packet)),
            void 0 !== e.proof_unreceived &&
              null !== e.proof_unreceived &&
              (n.proofUnreceived = (0, c.jm)(e.proof_unreceived)),
            void 0 !== e.proof_height &&
              null !== e.proof_height &&
              (n.proofHeight = p.Height.fromAmino(e.proof_height)),
            void 0 !== e.next_sequence_recv &&
              null !== e.next_sequence_recv &&
              (n.nextSequenceRecv = BigInt(e.next_sequence_recv)),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.packet = e.packet ? i.Packet.toAmino(e.packet) : void 0),
            (n.proof_unreceived = e.proofUnreceived
              ? (0, c.Uz)(e.proofUnreceived)
              : void 0),
            (n.proof_height = e.proofHeight
              ? p.Height.toAmino(e.proofHeight)
              : {}),
            (n.next_sequence_recv =
              e.nextSequenceRecv !== BigInt(0)
                ? e.nextSequenceRecv.toString()
                : void 0),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            n
          );
        },
        fromAminoMsg: (e) => B.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgTimeout",
          value: B.toAmino(e),
        }),
        fromProtoMsg: (e) => B.decode(e.value),
        toProto: (e) => B.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgTimeout",
          value: B.encode(e).finish(),
        }),
      };
      function N() {
        return { result: 0 };
      }
      l.q.register(B.typeUrl, B),
        l.q.registerAminoProtoMapping(B.aminoType, B.typeUrl);
      let F = {
        typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
        aminoType: "cosmos-sdk/MsgTimeoutResponse",
        is: (e) => e && (e.$typeUrl === F.typeUrl || (0, c.DM)(e.result)),
        isSDK: (e) => e && (e.$typeUrl === F.typeUrl || (0, c.DM)(e.result)),
        isAmino: (e) => e && (e.$typeUrl === F.typeUrl || (0, c.DM)(e.result)),
        encode: (e, n = a.Lt.create()) => (
          0 !== e.result && n.uint32(8).int32(e.result), n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = N();
          for (; o.pos < r; ) {
            let e = o.uint32();
            e >>> 3 == 1 ? (t.result = o.int32()) : o.skipType(7 & e);
          }
          return t;
        },
        fromPartial(e) {
          let n = N();
          return (n.result = e.result ?? 0), n;
        },
        fromAmino(e) {
          let n = N();
          return (
            void 0 !== e.result && null !== e.result && (n.result = e.result), n
          );
        },
        toAmino(e) {
          let n = {};
          return (n.result = 0 === e.result ? void 0 : e.result), n;
        },
        fromAminoMsg: (e) => F.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgTimeoutResponse",
          value: F.toAmino(e),
        }),
        fromProtoMsg: (e) => F.decode(e.value),
        toProto: (e) => F.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
          value: F.encode(e).finish(),
        }),
      };
      function x() {
        return {
          packet: i.Packet.fromPartial({}),
          proofUnreceived: new Uint8Array(),
          proofClose: new Uint8Array(),
          proofHeight: p.Height.fromPartial({}),
          nextSequenceRecv: BigInt(0),
          signer: "",
          counterpartyUpgradeSequence: BigInt(0),
        };
      }
      l.q.register(F.typeUrl, F),
        l.q.registerAminoProtoMapping(F.aminoType, F.typeUrl);
      let Y = {
        typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
        aminoType: "cosmos-sdk/MsgTimeoutOnClose",
        is: (e) =>
          e &&
          (e.$typeUrl === Y.typeUrl ||
            (i.Packet.is(e.packet) &&
              (e.proofUnreceived instanceof Uint8Array ||
                "string" == typeof e.proofUnreceived) &&
              (e.proofClose instanceof Uint8Array ||
                "string" == typeof e.proofClose) &&
              p.Height.is(e.proofHeight) &&
              "bigint" == typeof e.nextSequenceRecv &&
              "string" == typeof e.signer &&
              "bigint" == typeof e.counterpartyUpgradeSequence)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === Y.typeUrl ||
            (i.Packet.isSDK(e.packet) &&
              (e.proof_unreceived instanceof Uint8Array ||
                "string" == typeof e.proof_unreceived) &&
              (e.proof_close instanceof Uint8Array ||
                "string" == typeof e.proof_close) &&
              p.Height.isSDK(e.proof_height) &&
              "bigint" == typeof e.next_sequence_recv &&
              "string" == typeof e.signer &&
              "bigint" == typeof e.counterparty_upgrade_sequence)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === Y.typeUrl ||
            (i.Packet.isAmino(e.packet) &&
              (e.proof_unreceived instanceof Uint8Array ||
                "string" == typeof e.proof_unreceived) &&
              (e.proof_close instanceof Uint8Array ||
                "string" == typeof e.proof_close) &&
              p.Height.isAmino(e.proof_height) &&
              "bigint" == typeof e.next_sequence_recv &&
              "string" == typeof e.signer &&
              "bigint" == typeof e.counterparty_upgrade_sequence)),
        encode: (e, n = a.Lt.create()) => (
          void 0 !== e.packet &&
            i.Packet.encode(e.packet, n.uint32(10).fork()).ldelim(),
          0 !== e.proofUnreceived.length &&
            n.uint32(18).bytes(e.proofUnreceived),
          0 !== e.proofClose.length && n.uint32(26).bytes(e.proofClose),
          void 0 !== e.proofHeight &&
            p.Height.encode(e.proofHeight, n.uint32(34).fork()).ldelim(),
          e.nextSequenceRecv !== BigInt(0) &&
            n.uint32(40).uint64(e.nextSequenceRecv),
          "" !== e.signer && n.uint32(50).string(e.signer),
          e.counterpartyUpgradeSequence !== BigInt(0) &&
            n.uint32(56).uint64(e.counterpartyUpgradeSequence),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = x();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.packet = i.Packet.decode(o, o.uint32());
                break;
              case 2:
                t.proofUnreceived = o.bytes();
                break;
              case 3:
                t.proofClose = o.bytes();
                break;
              case 4:
                t.proofHeight = p.Height.decode(o, o.uint32());
                break;
              case 5:
                t.nextSequenceRecv = o.uint64();
                break;
              case 6:
                t.signer = o.string();
                break;
              case 7:
                t.counterpartyUpgradeSequence = o.uint64();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = x();
          return (
            (n.packet =
              void 0 !== e.packet && null !== e.packet
                ? i.Packet.fromPartial(e.packet)
                : void 0),
            (n.proofUnreceived = e.proofUnreceived ?? new Uint8Array()),
            (n.proofClose = e.proofClose ?? new Uint8Array()),
            (n.proofHeight =
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? p.Height.fromPartial(e.proofHeight)
                : void 0),
            (n.nextSequenceRecv =
              void 0 !== e.nextSequenceRecv && null !== e.nextSequenceRecv
                ? BigInt(e.nextSequenceRecv.toString())
                : BigInt(0)),
            (n.signer = e.signer ?? ""),
            (n.counterpartyUpgradeSequence =
              void 0 !== e.counterpartyUpgradeSequence &&
              null !== e.counterpartyUpgradeSequence
                ? BigInt(e.counterpartyUpgradeSequence.toString())
                : BigInt(0)),
            n
          );
        },
        fromAmino(e) {
          let n = x();
          return (
            void 0 !== e.packet &&
              null !== e.packet &&
              (n.packet = i.Packet.fromAmino(e.packet)),
            void 0 !== e.proof_unreceived &&
              null !== e.proof_unreceived &&
              (n.proofUnreceived = (0, c.jm)(e.proof_unreceived)),
            void 0 !== e.proof_close &&
              null !== e.proof_close &&
              (n.proofClose = (0, c.jm)(e.proof_close)),
            void 0 !== e.proof_height &&
              null !== e.proof_height &&
              (n.proofHeight = p.Height.fromAmino(e.proof_height)),
            void 0 !== e.next_sequence_recv &&
              null !== e.next_sequence_recv &&
              (n.nextSequenceRecv = BigInt(e.next_sequence_recv)),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            void 0 !== e.counterparty_upgrade_sequence &&
              null !== e.counterparty_upgrade_sequence &&
              (n.counterpartyUpgradeSequence = BigInt(
                e.counterparty_upgrade_sequence
              )),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.packet = e.packet ? i.Packet.toAmino(e.packet) : void 0),
            (n.proof_unreceived = e.proofUnreceived
              ? (0, c.Uz)(e.proofUnreceived)
              : void 0),
            (n.proof_close = e.proofClose ? (0, c.Uz)(e.proofClose) : void 0),
            (n.proof_height = e.proofHeight
              ? p.Height.toAmino(e.proofHeight)
              : {}),
            (n.next_sequence_recv =
              e.nextSequenceRecv !== BigInt(0)
                ? e.nextSequenceRecv.toString()
                : void 0),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            (n.counterparty_upgrade_sequence =
              e.counterpartyUpgradeSequence !== BigInt(0)
                ? e.counterpartyUpgradeSequence.toString()
                : void 0),
            n
          );
        },
        fromAminoMsg: (e) => Y.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgTimeoutOnClose",
          value: Y.toAmino(e),
        }),
        fromProtoMsg: (e) => Y.decode(e.value),
        toProto: (e) => Y.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
          value: Y.encode(e).finish(),
        }),
      };
      function V() {
        return { result: 0 };
      }
      l.q.register(Y.typeUrl, Y),
        l.q.registerAminoProtoMapping(Y.aminoType, Y.typeUrl);
      let j = {
        typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
        aminoType: "cosmos-sdk/MsgTimeoutOnCloseResponse",
        is: (e) => e && (e.$typeUrl === j.typeUrl || (0, c.DM)(e.result)),
        isSDK: (e) => e && (e.$typeUrl === j.typeUrl || (0, c.DM)(e.result)),
        isAmino: (e) => e && (e.$typeUrl === j.typeUrl || (0, c.DM)(e.result)),
        encode: (e, n = a.Lt.create()) => (
          0 !== e.result && n.uint32(8).int32(e.result), n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = V();
          for (; o.pos < r; ) {
            let e = o.uint32();
            e >>> 3 == 1 ? (t.result = o.int32()) : o.skipType(7 & e);
          }
          return t;
        },
        fromPartial(e) {
          let n = V();
          return (n.result = e.result ?? 0), n;
        },
        fromAmino(e) {
          let n = V();
          return (
            void 0 !== e.result && null !== e.result && (n.result = e.result), n
          );
        },
        toAmino(e) {
          let n = {};
          return (n.result = 0 === e.result ? void 0 : e.result), n;
        },
        fromAminoMsg: (e) => j.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgTimeoutOnCloseResponse",
          value: j.toAmino(e),
        }),
        fromProtoMsg: (e) => j.decode(e.value),
        toProto: (e) => j.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
          value: j.encode(e).finish(),
        }),
      };
      function z() {
        return {
          packet: i.Packet.fromPartial({}),
          acknowledgement: new Uint8Array(),
          proofAcked: new Uint8Array(),
          proofHeight: p.Height.fromPartial({}),
          signer: "",
        };
      }
      l.q.register(j.typeUrl, j),
        l.q.registerAminoProtoMapping(j.aminoType, j.typeUrl);
      let G = {
        typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
        aminoType: "cosmos-sdk/MsgAcknowledgement",
        is: (e) =>
          e &&
          (e.$typeUrl === G.typeUrl ||
            (i.Packet.is(e.packet) &&
              (e.acknowledgement instanceof Uint8Array ||
                "string" == typeof e.acknowledgement) &&
              (e.proofAcked instanceof Uint8Array ||
                "string" == typeof e.proofAcked) &&
              p.Height.is(e.proofHeight) &&
              "string" == typeof e.signer)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === G.typeUrl ||
            (i.Packet.isSDK(e.packet) &&
              (e.acknowledgement instanceof Uint8Array ||
                "string" == typeof e.acknowledgement) &&
              (e.proof_acked instanceof Uint8Array ||
                "string" == typeof e.proof_acked) &&
              p.Height.isSDK(e.proof_height) &&
              "string" == typeof e.signer)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === G.typeUrl ||
            (i.Packet.isAmino(e.packet) &&
              (e.acknowledgement instanceof Uint8Array ||
                "string" == typeof e.acknowledgement) &&
              (e.proof_acked instanceof Uint8Array ||
                "string" == typeof e.proof_acked) &&
              p.Height.isAmino(e.proof_height) &&
              "string" == typeof e.signer)),
        encode: (e, n = a.Lt.create()) => (
          void 0 !== e.packet &&
            i.Packet.encode(e.packet, n.uint32(10).fork()).ldelim(),
          0 !== e.acknowledgement.length &&
            n.uint32(18).bytes(e.acknowledgement),
          0 !== e.proofAcked.length && n.uint32(26).bytes(e.proofAcked),
          void 0 !== e.proofHeight &&
            p.Height.encode(e.proofHeight, n.uint32(34).fork()).ldelim(),
          "" !== e.signer && n.uint32(42).string(e.signer),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = z();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.packet = i.Packet.decode(o, o.uint32());
                break;
              case 2:
                t.acknowledgement = o.bytes();
                break;
              case 3:
                t.proofAcked = o.bytes();
                break;
              case 4:
                t.proofHeight = p.Height.decode(o, o.uint32());
                break;
              case 5:
                t.signer = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = z();
          return (
            (n.packet =
              void 0 !== e.packet && null !== e.packet
                ? i.Packet.fromPartial(e.packet)
                : void 0),
            (n.acknowledgement = e.acknowledgement ?? new Uint8Array()),
            (n.proofAcked = e.proofAcked ?? new Uint8Array()),
            (n.proofHeight =
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? p.Height.fromPartial(e.proofHeight)
                : void 0),
            (n.signer = e.signer ?? ""),
            n
          );
        },
        fromAmino(e) {
          let n = z();
          return (
            void 0 !== e.packet &&
              null !== e.packet &&
              (n.packet = i.Packet.fromAmino(e.packet)),
            void 0 !== e.acknowledgement &&
              null !== e.acknowledgement &&
              (n.acknowledgement = (0, c.jm)(e.acknowledgement)),
            void 0 !== e.proof_acked &&
              null !== e.proof_acked &&
              (n.proofAcked = (0, c.jm)(e.proof_acked)),
            void 0 !== e.proof_height &&
              null !== e.proof_height &&
              (n.proofHeight = p.Height.fromAmino(e.proof_height)),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.packet = e.packet ? i.Packet.toAmino(e.packet) : void 0),
            (n.acknowledgement = e.acknowledgement
              ? (0, c.Uz)(e.acknowledgement)
              : void 0),
            (n.proof_acked = e.proofAcked ? (0, c.Uz)(e.proofAcked) : void 0),
            (n.proof_height = e.proofHeight
              ? p.Height.toAmino(e.proofHeight)
              : {}),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            n
          );
        },
        fromAminoMsg: (e) => G.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgAcknowledgement",
          value: G.toAmino(e),
        }),
        fromProtoMsg: (e) => G.decode(e.value),
        toProto: (e) => G.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
          value: G.encode(e).finish(),
        }),
      };
      function Z() {
        return { result: 0 };
      }
      l.q.register(G.typeUrl, G),
        l.q.registerAminoProtoMapping(G.aminoType, G.typeUrl);
      let J = {
        typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
        aminoType: "cosmos-sdk/MsgAcknowledgementResponse",
        is: (e) => e && (e.$typeUrl === J.typeUrl || (0, c.DM)(e.result)),
        isSDK: (e) => e && (e.$typeUrl === J.typeUrl || (0, c.DM)(e.result)),
        isAmino: (e) => e && (e.$typeUrl === J.typeUrl || (0, c.DM)(e.result)),
        encode: (e, n = a.Lt.create()) => (
          0 !== e.result && n.uint32(8).int32(e.result), n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = Z();
          for (; o.pos < r; ) {
            let e = o.uint32();
            e >>> 3 == 1 ? (t.result = o.int32()) : o.skipType(7 & e);
          }
          return t;
        },
        fromPartial(e) {
          let n = Z();
          return (n.result = e.result ?? 0), n;
        },
        fromAmino(e) {
          let n = Z();
          return (
            void 0 !== e.result && null !== e.result && (n.result = e.result), n
          );
        },
        toAmino(e) {
          let n = {};
          return (n.result = 0 === e.result ? void 0 : e.result), n;
        },
        fromAminoMsg: (e) => J.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgAcknowledgementResponse",
          value: J.toAmino(e),
        }),
        fromProtoMsg: (e) => J.decode(e.value),
        toProto: (e) => J.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
          value: J.encode(e).finish(),
        }),
      };
      function Q() {
        return {
          portId: "",
          channelId: "",
          fields: s.UpgradeFields.fromPartial({}),
          signer: "",
        };
      }
      l.q.register(J.typeUrl, J),
        l.q.registerAminoProtoMapping(J.aminoType, J.typeUrl);
      let W = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInit",
        aminoType: "cosmos-sdk/MsgChannelUpgradeInit",
        is: (e) =>
          e &&
          (e.$typeUrl === W.typeUrl ||
            ("string" == typeof e.portId &&
              "string" == typeof e.channelId &&
              s.UpgradeFields.is(e.fields) &&
              "string" == typeof e.signer)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === W.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              s.UpgradeFields.isSDK(e.fields) &&
              "string" == typeof e.signer)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === W.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              s.UpgradeFields.isAmino(e.fields) &&
              "string" == typeof e.signer)),
        encode: (e, n = a.Lt.create()) => (
          "" !== e.portId && n.uint32(10).string(e.portId),
          "" !== e.channelId && n.uint32(18).string(e.channelId),
          void 0 !== e.fields &&
            s.UpgradeFields.encode(e.fields, n.uint32(26).fork()).ldelim(),
          "" !== e.signer && n.uint32(34).string(e.signer),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = Q();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.portId = o.string();
                break;
              case 2:
                t.channelId = o.string();
                break;
              case 3:
                t.fields = s.UpgradeFields.decode(o, o.uint32());
                break;
              case 4:
                t.signer = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = Q();
          return (
            (n.portId = e.portId ?? ""),
            (n.channelId = e.channelId ?? ""),
            (n.fields =
              void 0 !== e.fields && null !== e.fields
                ? s.UpgradeFields.fromPartial(e.fields)
                : void 0),
            (n.signer = e.signer ?? ""),
            n
          );
        },
        fromAmino(e) {
          let n = Q();
          return (
            void 0 !== e.port_id &&
              null !== e.port_id &&
              (n.portId = e.port_id),
            void 0 !== e.channel_id &&
              null !== e.channel_id &&
              (n.channelId = e.channel_id),
            void 0 !== e.fields &&
              null !== e.fields &&
              (n.fields = s.UpgradeFields.fromAmino(e.fields)),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.port_id = "" === e.portId ? void 0 : e.portId),
            (n.channel_id = "" === e.channelId ? void 0 : e.channelId),
            (n.fields = e.fields ? s.UpgradeFields.toAmino(e.fields) : void 0),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            n
          );
        },
        fromAminoMsg: (e) => W.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelUpgradeInit",
          value: W.toAmino(e),
        }),
        fromProtoMsg: (e) => W.decode(e.value),
        toProto: (e) => W.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInit",
          value: W.encode(e).finish(),
        }),
      };
      function X() {
        return {
          upgrade: s.Upgrade.fromPartial({}),
          upgradeSequence: BigInt(0),
        };
      }
      l.q.register(W.typeUrl, W),
        l.q.registerAminoProtoMapping(W.aminoType, W.typeUrl);
      let ee = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInitResponse",
        aminoType: "cosmos-sdk/MsgChannelUpgradeInitResponse",
        is: (e) =>
          e &&
          (e.$typeUrl === ee.typeUrl ||
            (s.Upgrade.is(e.upgrade) && "bigint" == typeof e.upgradeSequence)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === ee.typeUrl ||
            (s.Upgrade.isSDK(e.upgrade) &&
              "bigint" == typeof e.upgrade_sequence)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === ee.typeUrl ||
            (s.Upgrade.isAmino(e.upgrade) &&
              "bigint" == typeof e.upgrade_sequence)),
        encode: (e, n = a.Lt.create()) => (
          void 0 !== e.upgrade &&
            s.Upgrade.encode(e.upgrade, n.uint32(10).fork()).ldelim(),
          e.upgradeSequence !== BigInt(0) &&
            n.uint32(16).uint64(e.upgradeSequence),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = X();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.upgrade = s.Upgrade.decode(o, o.uint32());
                break;
              case 2:
                t.upgradeSequence = o.uint64();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = X();
          return (
            (n.upgrade =
              void 0 !== e.upgrade && null !== e.upgrade
                ? s.Upgrade.fromPartial(e.upgrade)
                : void 0),
            (n.upgradeSequence =
              void 0 !== e.upgradeSequence && null !== e.upgradeSequence
                ? BigInt(e.upgradeSequence.toString())
                : BigInt(0)),
            n
          );
        },
        fromAmino(e) {
          let n = X();
          return (
            void 0 !== e.upgrade &&
              null !== e.upgrade &&
              (n.upgrade = s.Upgrade.fromAmino(e.upgrade)),
            void 0 !== e.upgrade_sequence &&
              null !== e.upgrade_sequence &&
              (n.upgradeSequence = BigInt(e.upgrade_sequence)),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.upgrade = e.upgrade ? s.Upgrade.toAmino(e.upgrade) : void 0),
            (n.upgrade_sequence =
              e.upgradeSequence !== BigInt(0)
                ? e.upgradeSequence.toString()
                : void 0),
            n
          );
        },
        fromAminoMsg: (e) => ee.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelUpgradeInitResponse",
          value: ee.toAmino(e),
        }),
        fromProtoMsg: (e) => ee.decode(e.value),
        toProto: (e) => ee.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInitResponse",
          value: ee.encode(e).finish(),
        }),
      };
      function en() {
        return {
          portId: "",
          channelId: "",
          proposedUpgradeConnectionHops: [],
          counterpartyUpgradeFields: s.UpgradeFields.fromPartial({}),
          counterpartyUpgradeSequence: BigInt(0),
          proofChannel: new Uint8Array(),
          proofUpgrade: new Uint8Array(),
          proofHeight: p.Height.fromPartial({}),
          signer: "",
        };
      }
      l.q.register(ee.typeUrl, ee),
        l.q.registerAminoProtoMapping(ee.aminoType, ee.typeUrl);
      let eo = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTry",
        aminoType: "cosmos-sdk/MsgChannelUpgradeTry",
        is: (e) =>
          e &&
          (e.$typeUrl === eo.typeUrl ||
            ("string" == typeof e.portId &&
              "string" == typeof e.channelId &&
              Array.isArray(e.proposedUpgradeConnectionHops) &&
              (!e.proposedUpgradeConnectionHops.length ||
                "string" == typeof e.proposedUpgradeConnectionHops[0]) &&
              s.UpgradeFields.is(e.counterpartyUpgradeFields) &&
              "bigint" == typeof e.counterpartyUpgradeSequence &&
              (e.proofChannel instanceof Uint8Array ||
                "string" == typeof e.proofChannel) &&
              (e.proofUpgrade instanceof Uint8Array ||
                "string" == typeof e.proofUpgrade) &&
              p.Height.is(e.proofHeight) &&
              "string" == typeof e.signer)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === eo.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              Array.isArray(e.proposed_upgrade_connection_hops) &&
              (!e.proposed_upgrade_connection_hops.length ||
                "string" == typeof e.proposed_upgrade_connection_hops[0]) &&
              s.UpgradeFields.isSDK(e.counterparty_upgrade_fields) &&
              "bigint" == typeof e.counterparty_upgrade_sequence &&
              (e.proof_channel instanceof Uint8Array ||
                "string" == typeof e.proof_channel) &&
              (e.proof_upgrade instanceof Uint8Array ||
                "string" == typeof e.proof_upgrade) &&
              p.Height.isSDK(e.proof_height) &&
              "string" == typeof e.signer)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === eo.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              Array.isArray(e.proposed_upgrade_connection_hops) &&
              (!e.proposed_upgrade_connection_hops.length ||
                "string" == typeof e.proposed_upgrade_connection_hops[0]) &&
              s.UpgradeFields.isAmino(e.counterparty_upgrade_fields) &&
              "bigint" == typeof e.counterparty_upgrade_sequence &&
              (e.proof_channel instanceof Uint8Array ||
                "string" == typeof e.proof_channel) &&
              (e.proof_upgrade instanceof Uint8Array ||
                "string" == typeof e.proof_upgrade) &&
              p.Height.isAmino(e.proof_height) &&
              "string" == typeof e.signer)),
        encode(e, n = a.Lt.create()) {
          for (let o of ("" !== e.portId && n.uint32(10).string(e.portId),
          "" !== e.channelId && n.uint32(18).string(e.channelId),
          e.proposedUpgradeConnectionHops))
            n.uint32(26).string(o);
          return (
            void 0 !== e.counterpartyUpgradeFields &&
              s.UpgradeFields.encode(
                e.counterpartyUpgradeFields,
                n.uint32(34).fork()
              ).ldelim(),
            e.counterpartyUpgradeSequence !== BigInt(0) &&
              n.uint32(40).uint64(e.counterpartyUpgradeSequence),
            0 !== e.proofChannel.length && n.uint32(50).bytes(e.proofChannel),
            0 !== e.proofUpgrade.length && n.uint32(58).bytes(e.proofUpgrade),
            void 0 !== e.proofHeight &&
              p.Height.encode(e.proofHeight, n.uint32(66).fork()).ldelim(),
            "" !== e.signer && n.uint32(74).string(e.signer),
            n
          );
        },
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = en();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.portId = o.string();
                break;
              case 2:
                t.channelId = o.string();
                break;
              case 3:
                t.proposedUpgradeConnectionHops.push(o.string());
                break;
              case 4:
                t.counterpartyUpgradeFields = s.UpgradeFields.decode(
                  o,
                  o.uint32()
                );
                break;
              case 5:
                t.counterpartyUpgradeSequence = o.uint64();
                break;
              case 6:
                t.proofChannel = o.bytes();
                break;
              case 7:
                t.proofUpgrade = o.bytes();
                break;
              case 8:
                t.proofHeight = p.Height.decode(o, o.uint32());
                break;
              case 9:
                t.signer = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = en();
          return (
            (n.portId = e.portId ?? ""),
            (n.channelId = e.channelId ?? ""),
            (n.proposedUpgradeConnectionHops =
              e.proposedUpgradeConnectionHops?.map((e) => e) || []),
            (n.counterpartyUpgradeFields =
              void 0 !== e.counterpartyUpgradeFields &&
              null !== e.counterpartyUpgradeFields
                ? s.UpgradeFields.fromPartial(e.counterpartyUpgradeFields)
                : void 0),
            (n.counterpartyUpgradeSequence =
              void 0 !== e.counterpartyUpgradeSequence &&
              null !== e.counterpartyUpgradeSequence
                ? BigInt(e.counterpartyUpgradeSequence.toString())
                : BigInt(0)),
            (n.proofChannel = e.proofChannel ?? new Uint8Array()),
            (n.proofUpgrade = e.proofUpgrade ?? new Uint8Array()),
            (n.proofHeight =
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? p.Height.fromPartial(e.proofHeight)
                : void 0),
            (n.signer = e.signer ?? ""),
            n
          );
        },
        fromAmino(e) {
          let n = en();
          return (
            void 0 !== e.port_id &&
              null !== e.port_id &&
              (n.portId = e.port_id),
            void 0 !== e.channel_id &&
              null !== e.channel_id &&
              (n.channelId = e.channel_id),
            (n.proposedUpgradeConnectionHops =
              e.proposed_upgrade_connection_hops?.map((e) => e) || []),
            void 0 !== e.counterparty_upgrade_fields &&
              null !== e.counterparty_upgrade_fields &&
              (n.counterpartyUpgradeFields = s.UpgradeFields.fromAmino(
                e.counterparty_upgrade_fields
              )),
            void 0 !== e.counterparty_upgrade_sequence &&
              null !== e.counterparty_upgrade_sequence &&
              (n.counterpartyUpgradeSequence = BigInt(
                e.counterparty_upgrade_sequence
              )),
            void 0 !== e.proof_channel &&
              null !== e.proof_channel &&
              (n.proofChannel = (0, c.jm)(e.proof_channel)),
            void 0 !== e.proof_upgrade &&
              null !== e.proof_upgrade &&
              (n.proofUpgrade = (0, c.jm)(e.proof_upgrade)),
            void 0 !== e.proof_height &&
              null !== e.proof_height &&
              (n.proofHeight = p.Height.fromAmino(e.proof_height)),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.port_id = "" === e.portId ? void 0 : e.portId),
            (n.channel_id = "" === e.channelId ? void 0 : e.channelId),
            e.proposedUpgradeConnectionHops
              ? (n.proposed_upgrade_connection_hops =
                  e.proposedUpgradeConnectionHops.map((e) => e))
              : (n.proposed_upgrade_connection_hops =
                  e.proposedUpgradeConnectionHops),
            (n.counterparty_upgrade_fields = e.counterpartyUpgradeFields
              ? s.UpgradeFields.toAmino(e.counterpartyUpgradeFields)
              : void 0),
            (n.counterparty_upgrade_sequence =
              e.counterpartyUpgradeSequence !== BigInt(0)
                ? e.counterpartyUpgradeSequence.toString()
                : void 0),
            (n.proof_channel = e.proofChannel
              ? (0, c.Uz)(e.proofChannel)
              : void 0),
            (n.proof_upgrade = e.proofUpgrade
              ? (0, c.Uz)(e.proofUpgrade)
              : void 0),
            (n.proof_height = e.proofHeight
              ? p.Height.toAmino(e.proofHeight)
              : {}),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            n
          );
        },
        fromAminoMsg: (e) => eo.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelUpgradeTry",
          value: eo.toAmino(e),
        }),
        fromProtoMsg: (e) => eo.decode(e.value),
        toProto: (e) => eo.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTry",
          value: eo.encode(e).finish(),
        }),
      };
      function er() {
        return {
          upgrade: s.Upgrade.fromPartial({}),
          upgradeSequence: BigInt(0),
          result: 0,
        };
      }
      l.q.register(eo.typeUrl, eo),
        l.q.registerAminoProtoMapping(eo.aminoType, eo.typeUrl);
      let et = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTryResponse",
        aminoType: "cosmos-sdk/MsgChannelUpgradeTryResponse",
        is: (e) =>
          e &&
          (e.$typeUrl === et.typeUrl ||
            (s.Upgrade.is(e.upgrade) &&
              "bigint" == typeof e.upgradeSequence &&
              (0, c.DM)(e.result))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === et.typeUrl ||
            (s.Upgrade.isSDK(e.upgrade) &&
              "bigint" == typeof e.upgrade_sequence &&
              (0, c.DM)(e.result))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === et.typeUrl ||
            (s.Upgrade.isAmino(e.upgrade) &&
              "bigint" == typeof e.upgrade_sequence &&
              (0, c.DM)(e.result))),
        encode: (e, n = a.Lt.create()) => (
          void 0 !== e.upgrade &&
            s.Upgrade.encode(e.upgrade, n.uint32(10).fork()).ldelim(),
          e.upgradeSequence !== BigInt(0) &&
            n.uint32(16).uint64(e.upgradeSequence),
          0 !== e.result && n.uint32(24).int32(e.result),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = er();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.upgrade = s.Upgrade.decode(o, o.uint32());
                break;
              case 2:
                t.upgradeSequence = o.uint64();
                break;
              case 3:
                t.result = o.int32();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = er();
          return (
            (n.upgrade =
              void 0 !== e.upgrade && null !== e.upgrade
                ? s.Upgrade.fromPartial(e.upgrade)
                : void 0),
            (n.upgradeSequence =
              void 0 !== e.upgradeSequence && null !== e.upgradeSequence
                ? BigInt(e.upgradeSequence.toString())
                : BigInt(0)),
            (n.result = e.result ?? 0),
            n
          );
        },
        fromAmino(e) {
          let n = er();
          return (
            void 0 !== e.upgrade &&
              null !== e.upgrade &&
              (n.upgrade = s.Upgrade.fromAmino(e.upgrade)),
            void 0 !== e.upgrade_sequence &&
              null !== e.upgrade_sequence &&
              (n.upgradeSequence = BigInt(e.upgrade_sequence)),
            void 0 !== e.result && null !== e.result && (n.result = e.result),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.upgrade = e.upgrade ? s.Upgrade.toAmino(e.upgrade) : void 0),
            (n.upgrade_sequence =
              e.upgradeSequence !== BigInt(0)
                ? e.upgradeSequence.toString()
                : void 0),
            (n.result = 0 === e.result ? void 0 : e.result),
            n
          );
        },
        fromAminoMsg: (e) => et.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelUpgradeTryResponse",
          value: et.toAmino(e),
        }),
        fromProtoMsg: (e) => et.decode(e.value),
        toProto: (e) => et.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTryResponse",
          value: et.encode(e).finish(),
        }),
      };
      function ei() {
        return {
          portId: "",
          channelId: "",
          counterpartyUpgrade: s.Upgrade.fromPartial({}),
          proofChannel: new Uint8Array(),
          proofUpgrade: new Uint8Array(),
          proofHeight: p.Height.fromPartial({}),
          signer: "",
        };
      }
      l.q.register(et.typeUrl, et),
        l.q.registerAminoProtoMapping(et.aminoType, et.typeUrl);
      let ep = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAck",
        aminoType: "cosmos-sdk/MsgChannelUpgradeAck",
        is: (e) =>
          e &&
          (e.$typeUrl === ep.typeUrl ||
            ("string" == typeof e.portId &&
              "string" == typeof e.channelId &&
              s.Upgrade.is(e.counterpartyUpgrade) &&
              (e.proofChannel instanceof Uint8Array ||
                "string" == typeof e.proofChannel) &&
              (e.proofUpgrade instanceof Uint8Array ||
                "string" == typeof e.proofUpgrade) &&
              p.Height.is(e.proofHeight) &&
              "string" == typeof e.signer)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === ep.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              s.Upgrade.isSDK(e.counterparty_upgrade) &&
              (e.proof_channel instanceof Uint8Array ||
                "string" == typeof e.proof_channel) &&
              (e.proof_upgrade instanceof Uint8Array ||
                "string" == typeof e.proof_upgrade) &&
              p.Height.isSDK(e.proof_height) &&
              "string" == typeof e.signer)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === ep.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              s.Upgrade.isAmino(e.counterparty_upgrade) &&
              (e.proof_channel instanceof Uint8Array ||
                "string" == typeof e.proof_channel) &&
              (e.proof_upgrade instanceof Uint8Array ||
                "string" == typeof e.proof_upgrade) &&
              p.Height.isAmino(e.proof_height) &&
              "string" == typeof e.signer)),
        encode: (e, n = a.Lt.create()) => (
          "" !== e.portId && n.uint32(10).string(e.portId),
          "" !== e.channelId && n.uint32(18).string(e.channelId),
          void 0 !== e.counterpartyUpgrade &&
            s.Upgrade.encode(
              e.counterpartyUpgrade,
              n.uint32(26).fork()
            ).ldelim(),
          0 !== e.proofChannel.length && n.uint32(34).bytes(e.proofChannel),
          0 !== e.proofUpgrade.length && n.uint32(42).bytes(e.proofUpgrade),
          void 0 !== e.proofHeight &&
            p.Height.encode(e.proofHeight, n.uint32(50).fork()).ldelim(),
          "" !== e.signer && n.uint32(58).string(e.signer),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = ei();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.portId = o.string();
                break;
              case 2:
                t.channelId = o.string();
                break;
              case 3:
                t.counterpartyUpgrade = s.Upgrade.decode(o, o.uint32());
                break;
              case 4:
                t.proofChannel = o.bytes();
                break;
              case 5:
                t.proofUpgrade = o.bytes();
                break;
              case 6:
                t.proofHeight = p.Height.decode(o, o.uint32());
                break;
              case 7:
                t.signer = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = ei();
          return (
            (n.portId = e.portId ?? ""),
            (n.channelId = e.channelId ?? ""),
            (n.counterpartyUpgrade =
              void 0 !== e.counterpartyUpgrade && null !== e.counterpartyUpgrade
                ? s.Upgrade.fromPartial(e.counterpartyUpgrade)
                : void 0),
            (n.proofChannel = e.proofChannel ?? new Uint8Array()),
            (n.proofUpgrade = e.proofUpgrade ?? new Uint8Array()),
            (n.proofHeight =
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? p.Height.fromPartial(e.proofHeight)
                : void 0),
            (n.signer = e.signer ?? ""),
            n
          );
        },
        fromAmino(e) {
          let n = ei();
          return (
            void 0 !== e.port_id &&
              null !== e.port_id &&
              (n.portId = e.port_id),
            void 0 !== e.channel_id &&
              null !== e.channel_id &&
              (n.channelId = e.channel_id),
            void 0 !== e.counterparty_upgrade &&
              null !== e.counterparty_upgrade &&
              (n.counterpartyUpgrade = s.Upgrade.fromAmino(
                e.counterparty_upgrade
              )),
            void 0 !== e.proof_channel &&
              null !== e.proof_channel &&
              (n.proofChannel = (0, c.jm)(e.proof_channel)),
            void 0 !== e.proof_upgrade &&
              null !== e.proof_upgrade &&
              (n.proofUpgrade = (0, c.jm)(e.proof_upgrade)),
            void 0 !== e.proof_height &&
              null !== e.proof_height &&
              (n.proofHeight = p.Height.fromAmino(e.proof_height)),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.port_id = "" === e.portId ? void 0 : e.portId),
            (n.channel_id = "" === e.channelId ? void 0 : e.channelId),
            (n.counterparty_upgrade = e.counterpartyUpgrade
              ? s.Upgrade.toAmino(e.counterpartyUpgrade)
              : void 0),
            (n.proof_channel = e.proofChannel
              ? (0, c.Uz)(e.proofChannel)
              : void 0),
            (n.proof_upgrade = e.proofUpgrade
              ? (0, c.Uz)(e.proofUpgrade)
              : void 0),
            (n.proof_height = e.proofHeight
              ? p.Height.toAmino(e.proofHeight)
              : {}),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            n
          );
        },
        fromAminoMsg: (e) => ep.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelUpgradeAck",
          value: ep.toAmino(e),
        }),
        fromProtoMsg: (e) => ep.decode(e.value),
        toProto: (e) => ep.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAck",
          value: ep.encode(e).finish(),
        }),
      };
      function es() {
        return { result: 0 };
      }
      l.q.register(ep.typeUrl, ep),
        l.q.registerAminoProtoMapping(ep.aminoType, ep.typeUrl);
      let ea = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAckResponse",
        aminoType: "cosmos-sdk/MsgChannelUpgradeAckResponse",
        is: (e) => e && (e.$typeUrl === ea.typeUrl || (0, c.DM)(e.result)),
        isSDK: (e) => e && (e.$typeUrl === ea.typeUrl || (0, c.DM)(e.result)),
        isAmino: (e) => e && (e.$typeUrl === ea.typeUrl || (0, c.DM)(e.result)),
        encode: (e, n = a.Lt.create()) => (
          0 !== e.result && n.uint32(8).int32(e.result), n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = es();
          for (; o.pos < r; ) {
            let e = o.uint32();
            e >>> 3 == 1 ? (t.result = o.int32()) : o.skipType(7 & e);
          }
          return t;
        },
        fromPartial(e) {
          let n = es();
          return (n.result = e.result ?? 0), n;
        },
        fromAmino(e) {
          let n = es();
          return (
            void 0 !== e.result && null !== e.result && (n.result = e.result), n
          );
        },
        toAmino(e) {
          let n = {};
          return (n.result = 0 === e.result ? void 0 : e.result), n;
        },
        fromAminoMsg: (e) => ea.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelUpgradeAckResponse",
          value: ea.toAmino(e),
        }),
        fromProtoMsg: (e) => ea.decode(e.value),
        toProto: (e) => ea.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAckResponse",
          value: ea.encode(e).finish(),
        }),
      };
      function el() {
        return {
          portId: "",
          channelId: "",
          counterpartyChannelState: 0,
          counterpartyUpgrade: s.Upgrade.fromPartial({}),
          proofChannel: new Uint8Array(),
          proofUpgrade: new Uint8Array(),
          proofHeight: p.Height.fromPartial({}),
          signer: "",
        };
      }
      l.q.register(ea.typeUrl, ea),
        l.q.registerAminoProtoMapping(ea.aminoType, ea.typeUrl);
      let ec = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirm",
        aminoType: "cosmos-sdk/MsgChannelUpgradeConfirm",
        is: (e) =>
          e &&
          (e.$typeUrl === ec.typeUrl ||
            ("string" == typeof e.portId &&
              "string" == typeof e.channelId &&
              (0, c.DM)(e.counterpartyChannelState) &&
              s.Upgrade.is(e.counterpartyUpgrade) &&
              (e.proofChannel instanceof Uint8Array ||
                "string" == typeof e.proofChannel) &&
              (e.proofUpgrade instanceof Uint8Array ||
                "string" == typeof e.proofUpgrade) &&
              p.Height.is(e.proofHeight) &&
              "string" == typeof e.signer)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === ec.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              (0, c.DM)(e.counterparty_channel_state) &&
              s.Upgrade.isSDK(e.counterparty_upgrade) &&
              (e.proof_channel instanceof Uint8Array ||
                "string" == typeof e.proof_channel) &&
              (e.proof_upgrade instanceof Uint8Array ||
                "string" == typeof e.proof_upgrade) &&
              p.Height.isSDK(e.proof_height) &&
              "string" == typeof e.signer)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === ec.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              (0, c.DM)(e.counterparty_channel_state) &&
              s.Upgrade.isAmino(e.counterparty_upgrade) &&
              (e.proof_channel instanceof Uint8Array ||
                "string" == typeof e.proof_channel) &&
              (e.proof_upgrade instanceof Uint8Array ||
                "string" == typeof e.proof_upgrade) &&
              p.Height.isAmino(e.proof_height) &&
              "string" == typeof e.signer)),
        encode: (e, n = a.Lt.create()) => (
          "" !== e.portId && n.uint32(10).string(e.portId),
          "" !== e.channelId && n.uint32(18).string(e.channelId),
          0 !== e.counterpartyChannelState &&
            n.uint32(24).int32(e.counterpartyChannelState),
          void 0 !== e.counterpartyUpgrade &&
            s.Upgrade.encode(
              e.counterpartyUpgrade,
              n.uint32(34).fork()
            ).ldelim(),
          0 !== e.proofChannel.length && n.uint32(42).bytes(e.proofChannel),
          0 !== e.proofUpgrade.length && n.uint32(50).bytes(e.proofUpgrade),
          void 0 !== e.proofHeight &&
            p.Height.encode(e.proofHeight, n.uint32(58).fork()).ldelim(),
          "" !== e.signer && n.uint32(66).string(e.signer),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = el();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.portId = o.string();
                break;
              case 2:
                t.channelId = o.string();
                break;
              case 3:
                t.counterpartyChannelState = o.int32();
                break;
              case 4:
                t.counterpartyUpgrade = s.Upgrade.decode(o, o.uint32());
                break;
              case 5:
                t.proofChannel = o.bytes();
                break;
              case 6:
                t.proofUpgrade = o.bytes();
                break;
              case 7:
                t.proofHeight = p.Height.decode(o, o.uint32());
                break;
              case 8:
                t.signer = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = el();
          return (
            (n.portId = e.portId ?? ""),
            (n.channelId = e.channelId ?? ""),
            (n.counterpartyChannelState = e.counterpartyChannelState ?? 0),
            (n.counterpartyUpgrade =
              void 0 !== e.counterpartyUpgrade && null !== e.counterpartyUpgrade
                ? s.Upgrade.fromPartial(e.counterpartyUpgrade)
                : void 0),
            (n.proofChannel = e.proofChannel ?? new Uint8Array()),
            (n.proofUpgrade = e.proofUpgrade ?? new Uint8Array()),
            (n.proofHeight =
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? p.Height.fromPartial(e.proofHeight)
                : void 0),
            (n.signer = e.signer ?? ""),
            n
          );
        },
        fromAmino(e) {
          let n = el();
          return (
            void 0 !== e.port_id &&
              null !== e.port_id &&
              (n.portId = e.port_id),
            void 0 !== e.channel_id &&
              null !== e.channel_id &&
              (n.channelId = e.channel_id),
            void 0 !== e.counterparty_channel_state &&
              null !== e.counterparty_channel_state &&
              (n.counterpartyChannelState = e.counterparty_channel_state),
            void 0 !== e.counterparty_upgrade &&
              null !== e.counterparty_upgrade &&
              (n.counterpartyUpgrade = s.Upgrade.fromAmino(
                e.counterparty_upgrade
              )),
            void 0 !== e.proof_channel &&
              null !== e.proof_channel &&
              (n.proofChannel = (0, c.jm)(e.proof_channel)),
            void 0 !== e.proof_upgrade &&
              null !== e.proof_upgrade &&
              (n.proofUpgrade = (0, c.jm)(e.proof_upgrade)),
            void 0 !== e.proof_height &&
              null !== e.proof_height &&
              (n.proofHeight = p.Height.fromAmino(e.proof_height)),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.port_id = "" === e.portId ? void 0 : e.portId),
            (n.channel_id = "" === e.channelId ? void 0 : e.channelId),
            (n.counterparty_channel_state =
              0 === e.counterpartyChannelState
                ? void 0
                : e.counterpartyChannelState),
            (n.counterparty_upgrade = e.counterpartyUpgrade
              ? s.Upgrade.toAmino(e.counterpartyUpgrade)
              : void 0),
            (n.proof_channel = e.proofChannel
              ? (0, c.Uz)(e.proofChannel)
              : void 0),
            (n.proof_upgrade = e.proofUpgrade
              ? (0, c.Uz)(e.proofUpgrade)
              : void 0),
            (n.proof_height = e.proofHeight
              ? p.Height.toAmino(e.proofHeight)
              : {}),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            n
          );
        },
        fromAminoMsg: (e) => ec.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelUpgradeConfirm",
          value: ec.toAmino(e),
        }),
        fromProtoMsg: (e) => ec.decode(e.value),
        toProto: (e) => ec.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirm",
          value: ec.encode(e).finish(),
        }),
      };
      function eg() {
        return { result: 0 };
      }
      l.q.register(ec.typeUrl, ec),
        l.q.registerAminoProtoMapping(ec.aminoType, ec.typeUrl);
      let ed = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse",
        aminoType: "cosmos-sdk/MsgChannelUpgradeConfirmResponse",
        is: (e) => e && (e.$typeUrl === ed.typeUrl || (0, c.DM)(e.result)),
        isSDK: (e) => e && (e.$typeUrl === ed.typeUrl || (0, c.DM)(e.result)),
        isAmino: (e) => e && (e.$typeUrl === ed.typeUrl || (0, c.DM)(e.result)),
        encode: (e, n = a.Lt.create()) => (
          0 !== e.result && n.uint32(8).int32(e.result), n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = eg();
          for (; o.pos < r; ) {
            let e = o.uint32();
            e >>> 3 == 1 ? (t.result = o.int32()) : o.skipType(7 & e);
          }
          return t;
        },
        fromPartial(e) {
          let n = eg();
          return (n.result = e.result ?? 0), n;
        },
        fromAmino(e) {
          let n = eg();
          return (
            void 0 !== e.result && null !== e.result && (n.result = e.result), n
          );
        },
        toAmino(e) {
          let n = {};
          return (n.result = 0 === e.result ? void 0 : e.result), n;
        },
        fromAminoMsg: (e) => ed.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelUpgradeConfirmResponse",
          value: ed.toAmino(e),
        }),
        fromProtoMsg: (e) => ed.decode(e.value),
        toProto: (e) => ed.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse",
          value: ed.encode(e).finish(),
        }),
      };
      function eu() {
        return {
          portId: "",
          channelId: "",
          counterpartyChannelState: 0,
          counterpartyUpgradeSequence: BigInt(0),
          proofChannel: new Uint8Array(),
          proofHeight: p.Height.fromPartial({}),
          signer: "",
        };
      }
      l.q.register(ed.typeUrl, ed),
        l.q.registerAminoProtoMapping(ed.aminoType, ed.typeUrl);
      let ef = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpen",
        aminoType: "cosmos-sdk/MsgChannelUpgradeOpen",
        is: (e) =>
          e &&
          (e.$typeUrl === ef.typeUrl ||
            ("string" == typeof e.portId &&
              "string" == typeof e.channelId &&
              (0, c.DM)(e.counterpartyChannelState) &&
              "bigint" == typeof e.counterpartyUpgradeSequence &&
              (e.proofChannel instanceof Uint8Array ||
                "string" == typeof e.proofChannel) &&
              p.Height.is(e.proofHeight) &&
              "string" == typeof e.signer)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === ef.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              (0, c.DM)(e.counterparty_channel_state) &&
              "bigint" == typeof e.counterparty_upgrade_sequence &&
              (e.proof_channel instanceof Uint8Array ||
                "string" == typeof e.proof_channel) &&
              p.Height.isSDK(e.proof_height) &&
              "string" == typeof e.signer)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === ef.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              (0, c.DM)(e.counterparty_channel_state) &&
              "bigint" == typeof e.counterparty_upgrade_sequence &&
              (e.proof_channel instanceof Uint8Array ||
                "string" == typeof e.proof_channel) &&
              p.Height.isAmino(e.proof_height) &&
              "string" == typeof e.signer)),
        encode: (e, n = a.Lt.create()) => (
          "" !== e.portId && n.uint32(10).string(e.portId),
          "" !== e.channelId && n.uint32(18).string(e.channelId),
          0 !== e.counterpartyChannelState &&
            n.uint32(24).int32(e.counterpartyChannelState),
          e.counterpartyUpgradeSequence !== BigInt(0) &&
            n.uint32(32).uint64(e.counterpartyUpgradeSequence),
          0 !== e.proofChannel.length && n.uint32(42).bytes(e.proofChannel),
          void 0 !== e.proofHeight &&
            p.Height.encode(e.proofHeight, n.uint32(50).fork()).ldelim(),
          "" !== e.signer && n.uint32(58).string(e.signer),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = eu();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.portId = o.string();
                break;
              case 2:
                t.channelId = o.string();
                break;
              case 3:
                t.counterpartyChannelState = o.int32();
                break;
              case 4:
                t.counterpartyUpgradeSequence = o.uint64();
                break;
              case 5:
                t.proofChannel = o.bytes();
                break;
              case 6:
                t.proofHeight = p.Height.decode(o, o.uint32());
                break;
              case 7:
                t.signer = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = eu();
          return (
            (n.portId = e.portId ?? ""),
            (n.channelId = e.channelId ?? ""),
            (n.counterpartyChannelState = e.counterpartyChannelState ?? 0),
            (n.counterpartyUpgradeSequence =
              void 0 !== e.counterpartyUpgradeSequence &&
              null !== e.counterpartyUpgradeSequence
                ? BigInt(e.counterpartyUpgradeSequence.toString())
                : BigInt(0)),
            (n.proofChannel = e.proofChannel ?? new Uint8Array()),
            (n.proofHeight =
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? p.Height.fromPartial(e.proofHeight)
                : void 0),
            (n.signer = e.signer ?? ""),
            n
          );
        },
        fromAmino(e) {
          let n = eu();
          return (
            void 0 !== e.port_id &&
              null !== e.port_id &&
              (n.portId = e.port_id),
            void 0 !== e.channel_id &&
              null !== e.channel_id &&
              (n.channelId = e.channel_id),
            void 0 !== e.counterparty_channel_state &&
              null !== e.counterparty_channel_state &&
              (n.counterpartyChannelState = e.counterparty_channel_state),
            void 0 !== e.counterparty_upgrade_sequence &&
              null !== e.counterparty_upgrade_sequence &&
              (n.counterpartyUpgradeSequence = BigInt(
                e.counterparty_upgrade_sequence
              )),
            void 0 !== e.proof_channel &&
              null !== e.proof_channel &&
              (n.proofChannel = (0, c.jm)(e.proof_channel)),
            void 0 !== e.proof_height &&
              null !== e.proof_height &&
              (n.proofHeight = p.Height.fromAmino(e.proof_height)),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.port_id = "" === e.portId ? void 0 : e.portId),
            (n.channel_id = "" === e.channelId ? void 0 : e.channelId),
            (n.counterparty_channel_state =
              0 === e.counterpartyChannelState
                ? void 0
                : e.counterpartyChannelState),
            (n.counterparty_upgrade_sequence =
              e.counterpartyUpgradeSequence !== BigInt(0)
                ? e.counterpartyUpgradeSequence.toString()
                : void 0),
            (n.proof_channel = e.proofChannel
              ? (0, c.Uz)(e.proofChannel)
              : void 0),
            (n.proof_height = e.proofHeight
              ? p.Height.toAmino(e.proofHeight)
              : {}),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            n
          );
        },
        fromAminoMsg: (e) => ef.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelUpgradeOpen",
          value: ef.toAmino(e),
        }),
        fromProtoMsg: (e) => ef.decode(e.value),
        toProto: (e) => ef.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpen",
          value: ef.encode(e).finish(),
        }),
      };
      l.q.register(ef.typeUrl, ef),
        l.q.registerAminoProtoMapping(ef.aminoType, ef.typeUrl);
      let eh = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse",
        aminoType: "cosmos-sdk/MsgChannelUpgradeOpenResponse",
        is: (e) => e && e.$typeUrl === eh.typeUrl,
        isSDK: (e) => e && e.$typeUrl === eh.typeUrl,
        isAmino: (e) => e && e.$typeUrl === eh.typeUrl,
        encode: (e, n = a.Lt.create()) => n,
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n;
          for (; o.pos < r; ) {
            let e = o.uint32();
            o.skipType(7 & e);
          }
          return {};
        },
        fromPartial: (e) => ({}),
        fromAmino: (e) => ({}),
        toAmino: (e) => ({}),
        fromAminoMsg: (e) => eh.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelUpgradeOpenResponse",
          value: eh.toAmino(e),
        }),
        fromProtoMsg: (e) => eh.decode(e.value),
        toProto: (e) => eh.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse",
          value: eh.encode(e).finish(),
        }),
      };
      function ey() {
        return {
          portId: "",
          channelId: "",
          counterpartyChannel: i.Channel.fromPartial({}),
          proofChannel: new Uint8Array(),
          proofHeight: p.Height.fromPartial({}),
          signer: "",
        };
      }
      l.q.register(eh.typeUrl, eh),
        l.q.registerAminoProtoMapping(eh.aminoType, eh.typeUrl);
      let em = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout",
        aminoType: "cosmos-sdk/MsgChannelUpgradeTimeout",
        is: (e) =>
          e &&
          (e.$typeUrl === em.typeUrl ||
            ("string" == typeof e.portId &&
              "string" == typeof e.channelId &&
              i.Channel.is(e.counterpartyChannel) &&
              (e.proofChannel instanceof Uint8Array ||
                "string" == typeof e.proofChannel) &&
              p.Height.is(e.proofHeight) &&
              "string" == typeof e.signer)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === em.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              i.Channel.isSDK(e.counterparty_channel) &&
              (e.proof_channel instanceof Uint8Array ||
                "string" == typeof e.proof_channel) &&
              p.Height.isSDK(e.proof_height) &&
              "string" == typeof e.signer)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === em.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              i.Channel.isAmino(e.counterparty_channel) &&
              (e.proof_channel instanceof Uint8Array ||
                "string" == typeof e.proof_channel) &&
              p.Height.isAmino(e.proof_height) &&
              "string" == typeof e.signer)),
        encode: (e, n = a.Lt.create()) => (
          "" !== e.portId && n.uint32(10).string(e.portId),
          "" !== e.channelId && n.uint32(18).string(e.channelId),
          void 0 !== e.counterpartyChannel &&
            i.Channel.encode(
              e.counterpartyChannel,
              n.uint32(26).fork()
            ).ldelim(),
          0 !== e.proofChannel.length && n.uint32(34).bytes(e.proofChannel),
          void 0 !== e.proofHeight &&
            p.Height.encode(e.proofHeight, n.uint32(42).fork()).ldelim(),
          "" !== e.signer && n.uint32(50).string(e.signer),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = ey();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.portId = o.string();
                break;
              case 2:
                t.channelId = o.string();
                break;
              case 3:
                t.counterpartyChannel = i.Channel.decode(o, o.uint32());
                break;
              case 4:
                t.proofChannel = o.bytes();
                break;
              case 5:
                t.proofHeight = p.Height.decode(o, o.uint32());
                break;
              case 6:
                t.signer = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = ey();
          return (
            (n.portId = e.portId ?? ""),
            (n.channelId = e.channelId ?? ""),
            (n.counterpartyChannel =
              void 0 !== e.counterpartyChannel && null !== e.counterpartyChannel
                ? i.Channel.fromPartial(e.counterpartyChannel)
                : void 0),
            (n.proofChannel = e.proofChannel ?? new Uint8Array()),
            (n.proofHeight =
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? p.Height.fromPartial(e.proofHeight)
                : void 0),
            (n.signer = e.signer ?? ""),
            n
          );
        },
        fromAmino(e) {
          let n = ey();
          return (
            void 0 !== e.port_id &&
              null !== e.port_id &&
              (n.portId = e.port_id),
            void 0 !== e.channel_id &&
              null !== e.channel_id &&
              (n.channelId = e.channel_id),
            void 0 !== e.counterparty_channel &&
              null !== e.counterparty_channel &&
              (n.counterpartyChannel = i.Channel.fromAmino(
                e.counterparty_channel
              )),
            void 0 !== e.proof_channel &&
              null !== e.proof_channel &&
              (n.proofChannel = (0, c.jm)(e.proof_channel)),
            void 0 !== e.proof_height &&
              null !== e.proof_height &&
              (n.proofHeight = p.Height.fromAmino(e.proof_height)),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.port_id = "" === e.portId ? void 0 : e.portId),
            (n.channel_id = "" === e.channelId ? void 0 : e.channelId),
            (n.counterparty_channel = e.counterpartyChannel
              ? i.Channel.toAmino(e.counterpartyChannel)
              : void 0),
            (n.proof_channel = e.proofChannel
              ? (0, c.Uz)(e.proofChannel)
              : void 0),
            (n.proof_height = e.proofHeight
              ? p.Height.toAmino(e.proofHeight)
              : {}),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            n
          );
        },
        fromAminoMsg: (e) => em.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelUpgradeTimeout",
          value: em.toAmino(e),
        }),
        fromProtoMsg: (e) => em.decode(e.value),
        toProto: (e) => em.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout",
          value: em.encode(e).finish(),
        }),
      };
      l.q.register(em.typeUrl, em),
        l.q.registerAminoProtoMapping(em.aminoType, em.typeUrl);
      let eU = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse",
        aminoType: "cosmos-sdk/MsgChannelUpgradeTimeoutResponse",
        is: (e) => e && e.$typeUrl === eU.typeUrl,
        isSDK: (e) => e && e.$typeUrl === eU.typeUrl,
        isAmino: (e) => e && e.$typeUrl === eU.typeUrl,
        encode: (e, n = a.Lt.create()) => n,
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n;
          for (; o.pos < r; ) {
            let e = o.uint32();
            o.skipType(7 & e);
          }
          return {};
        },
        fromPartial: (e) => ({}),
        fromAmino: (e) => ({}),
        toAmino: (e) => ({}),
        fromAminoMsg: (e) => eU.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelUpgradeTimeoutResponse",
          value: eU.toAmino(e),
        }),
        fromProtoMsg: (e) => eU.decode(e.value),
        toProto: (e) => eU.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse",
          value: eU.encode(e).finish(),
        }),
      };
      function ev() {
        return {
          portId: "",
          channelId: "",
          errorReceipt: s.ErrorReceipt.fromPartial({}),
          proofErrorReceipt: new Uint8Array(),
          proofHeight: p.Height.fromPartial({}),
          signer: "",
        };
      }
      l.q.register(eU.typeUrl, eU),
        l.q.registerAminoProtoMapping(eU.aminoType, eU.typeUrl);
      let e_ = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancel",
        aminoType: "cosmos-sdk/MsgChannelUpgradeCancel",
        is: (e) =>
          e &&
          (e.$typeUrl === e_.typeUrl ||
            ("string" == typeof e.portId &&
              "string" == typeof e.channelId &&
              s.ErrorReceipt.is(e.errorReceipt) &&
              (e.proofErrorReceipt instanceof Uint8Array ||
                "string" == typeof e.proofErrorReceipt) &&
              p.Height.is(e.proofHeight) &&
              "string" == typeof e.signer)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === e_.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              s.ErrorReceipt.isSDK(e.error_receipt) &&
              (e.proof_error_receipt instanceof Uint8Array ||
                "string" == typeof e.proof_error_receipt) &&
              p.Height.isSDK(e.proof_height) &&
              "string" == typeof e.signer)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === e_.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              s.ErrorReceipt.isAmino(e.error_receipt) &&
              (e.proof_error_receipt instanceof Uint8Array ||
                "string" == typeof e.proof_error_receipt) &&
              p.Height.isAmino(e.proof_height) &&
              "string" == typeof e.signer)),
        encode: (e, n = a.Lt.create()) => (
          "" !== e.portId && n.uint32(10).string(e.portId),
          "" !== e.channelId && n.uint32(18).string(e.channelId),
          void 0 !== e.errorReceipt &&
            s.ErrorReceipt.encode(e.errorReceipt, n.uint32(26).fork()).ldelim(),
          0 !== e.proofErrorReceipt.length &&
            n.uint32(34).bytes(e.proofErrorReceipt),
          void 0 !== e.proofHeight &&
            p.Height.encode(e.proofHeight, n.uint32(42).fork()).ldelim(),
          "" !== e.signer && n.uint32(50).string(e.signer),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = ev();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.portId = o.string();
                break;
              case 2:
                t.channelId = o.string();
                break;
              case 3:
                t.errorReceipt = s.ErrorReceipt.decode(o, o.uint32());
                break;
              case 4:
                t.proofErrorReceipt = o.bytes();
                break;
              case 5:
                t.proofHeight = p.Height.decode(o, o.uint32());
                break;
              case 6:
                t.signer = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = ev();
          return (
            (n.portId = e.portId ?? ""),
            (n.channelId = e.channelId ?? ""),
            (n.errorReceipt =
              void 0 !== e.errorReceipt && null !== e.errorReceipt
                ? s.ErrorReceipt.fromPartial(e.errorReceipt)
                : void 0),
            (n.proofErrorReceipt = e.proofErrorReceipt ?? new Uint8Array()),
            (n.proofHeight =
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? p.Height.fromPartial(e.proofHeight)
                : void 0),
            (n.signer = e.signer ?? ""),
            n
          );
        },
        fromAmino(e) {
          let n = ev();
          return (
            void 0 !== e.port_id &&
              null !== e.port_id &&
              (n.portId = e.port_id),
            void 0 !== e.channel_id &&
              null !== e.channel_id &&
              (n.channelId = e.channel_id),
            void 0 !== e.error_receipt &&
              null !== e.error_receipt &&
              (n.errorReceipt = s.ErrorReceipt.fromAmino(e.error_receipt)),
            void 0 !== e.proof_error_receipt &&
              null !== e.proof_error_receipt &&
              (n.proofErrorReceipt = (0, c.jm)(e.proof_error_receipt)),
            void 0 !== e.proof_height &&
              null !== e.proof_height &&
              (n.proofHeight = p.Height.fromAmino(e.proof_height)),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.port_id = "" === e.portId ? void 0 : e.portId),
            (n.channel_id = "" === e.channelId ? void 0 : e.channelId),
            (n.error_receipt = e.errorReceipt
              ? s.ErrorReceipt.toAmino(e.errorReceipt)
              : void 0),
            (n.proof_error_receipt = e.proofErrorReceipt
              ? (0, c.Uz)(e.proofErrorReceipt)
              : void 0),
            (n.proof_height = e.proofHeight
              ? p.Height.toAmino(e.proofHeight)
              : {}),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            n
          );
        },
        fromAminoMsg: (e) => e_.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelUpgradeCancel",
          value: e_.toAmino(e),
        }),
        fromProtoMsg: (e) => e_.decode(e.value),
        toProto: (e) => e_.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancel",
          value: e_.encode(e).finish(),
        }),
      };
      l.q.register(e_.typeUrl, e_),
        l.q.registerAminoProtoMapping(e_.aminoType, e_.typeUrl);
      let eA = {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse",
        aminoType: "cosmos-sdk/MsgChannelUpgradeCancelResponse",
        is: (e) => e && e.$typeUrl === eA.typeUrl,
        isSDK: (e) => e && e.$typeUrl === eA.typeUrl,
        isAmino: (e) => e && e.$typeUrl === eA.typeUrl,
        encode: (e, n = a.Lt.create()) => n,
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n;
          for (; o.pos < r; ) {
            let e = o.uint32();
            o.skipType(7 & e);
          }
          return {};
        },
        fromPartial: (e) => ({}),
        fromAmino: (e) => ({}),
        toAmino: (e) => ({}),
        fromAminoMsg: (e) => eA.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgChannelUpgradeCancelResponse",
          value: eA.toAmino(e),
        }),
        fromProtoMsg: (e) => eA.decode(e.value),
        toProto: (e) => eA.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse",
          value: eA.encode(e).finish(),
        }),
      };
      function ek() {
        return { authority: "", params: p.Params.fromPartial({}) };
      }
      l.q.register(eA.typeUrl, eA),
        l.q.registerAminoProtoMapping(eA.aminoType, eA.typeUrl);
      let eP = {
        typeUrl: "/ibc.core.channel.v1.MsgUpdateParams",
        aminoType: "cosmos-sdk/MsgUpdateParams",
        is: (e) =>
          e &&
          (e.$typeUrl === eP.typeUrl ||
            ("string" == typeof e.authority && p.Params.is(e.params))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === eP.typeUrl ||
            ("string" == typeof e.authority && p.Params.isSDK(e.params))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === eP.typeUrl ||
            ("string" == typeof e.authority && p.Params.isAmino(e.params))),
        encode: (e, n = a.Lt.create()) => (
          "" !== e.authority && n.uint32(10).string(e.authority),
          void 0 !== e.params &&
            p.Params.encode(e.params, n.uint32(18).fork()).ldelim(),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = ek();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.authority = o.string();
                break;
              case 2:
                t.params = p.Params.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = ek();
          return (
            (n.authority = e.authority ?? ""),
            (n.params =
              void 0 !== e.params && null !== e.params
                ? p.Params.fromPartial(e.params)
                : void 0),
            n
          );
        },
        fromAmino(e) {
          let n = ek();
          return (
            void 0 !== e.authority &&
              null !== e.authority &&
              (n.authority = e.authority),
            void 0 !== e.params &&
              null !== e.params &&
              (n.params = p.Params.fromAmino(e.params)),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.authority = "" === e.authority ? void 0 : e.authority),
            (n.params = e.params ? p.Params.toAmino(e.params) : void 0),
            n
          );
        },
        fromAminoMsg: (e) => eP.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgUpdateParams",
          value: eP.toAmino(e),
        }),
        fromProtoMsg: (e) => eP.decode(e.value),
        toProto: (e) => eP.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgUpdateParams",
          value: eP.encode(e).finish(),
        }),
      };
      l.q.register(eP.typeUrl, eP),
        l.q.registerAminoProtoMapping(eP.aminoType, eP.typeUrl);
      let eI = {
        typeUrl: "/ibc.core.channel.v1.MsgUpdateParamsResponse",
        aminoType: "cosmos-sdk/MsgUpdateParamsResponse",
        is: (e) => e && e.$typeUrl === eI.typeUrl,
        isSDK: (e) => e && e.$typeUrl === eI.typeUrl,
        isAmino: (e) => e && e.$typeUrl === eI.typeUrl,
        encode: (e, n = a.Lt.create()) => n,
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n;
          for (; o.pos < r; ) {
            let e = o.uint32();
            o.skipType(7 & e);
          }
          return {};
        },
        fromPartial: (e) => ({}),
        fromAmino: (e) => ({}),
        toAmino: (e) => ({}),
        fromAminoMsg: (e) => eI.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgUpdateParamsResponse",
          value: eI.toAmino(e),
        }),
        fromProtoMsg: (e) => eI.decode(e.value),
        toProto: (e) => eI.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgUpdateParamsResponse",
          value: eI.encode(e).finish(),
        }),
      };
      function eM() {
        return { portId: "", channelId: "", limit: BigInt(0), signer: "" };
      }
      l.q.register(eI.typeUrl, eI),
        l.q.registerAminoProtoMapping(eI.aminoType, eI.typeUrl);
      let eC = {
        typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgements",
        aminoType: "cosmos-sdk/MsgPruneAcknowledgements",
        is: (e) =>
          e &&
          (e.$typeUrl === eC.typeUrl ||
            ("string" == typeof e.portId &&
              "string" == typeof e.channelId &&
              "bigint" == typeof e.limit &&
              "string" == typeof e.signer)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === eC.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              "bigint" == typeof e.limit &&
              "string" == typeof e.signer)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === eC.typeUrl ||
            ("string" == typeof e.port_id &&
              "string" == typeof e.channel_id &&
              "bigint" == typeof e.limit &&
              "string" == typeof e.signer)),
        encode: (e, n = a.Lt.create()) => (
          "" !== e.portId && n.uint32(10).string(e.portId),
          "" !== e.channelId && n.uint32(18).string(e.channelId),
          e.limit !== BigInt(0) && n.uint32(24).uint64(e.limit),
          "" !== e.signer && n.uint32(34).string(e.signer),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = eM();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.portId = o.string();
                break;
              case 2:
                t.channelId = o.string();
                break;
              case 3:
                t.limit = o.uint64();
                break;
              case 4:
                t.signer = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = eM();
          return (
            (n.portId = e.portId ?? ""),
            (n.channelId = e.channelId ?? ""),
            (n.limit =
              void 0 !== e.limit && null !== e.limit
                ? BigInt(e.limit.toString())
                : BigInt(0)),
            (n.signer = e.signer ?? ""),
            n
          );
        },
        fromAmino(e) {
          let n = eM();
          return (
            void 0 !== e.port_id &&
              null !== e.port_id &&
              (n.portId = e.port_id),
            void 0 !== e.channel_id &&
              null !== e.channel_id &&
              (n.channelId = e.channel_id),
            void 0 !== e.limit &&
              null !== e.limit &&
              (n.limit = BigInt(e.limit)),
            void 0 !== e.signer && null !== e.signer && (n.signer = e.signer),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.port_id = "" === e.portId ? void 0 : e.portId),
            (n.channel_id = "" === e.channelId ? void 0 : e.channelId),
            (n.limit = e.limit !== BigInt(0) ? e.limit.toString() : void 0),
            (n.signer = "" === e.signer ? void 0 : e.signer),
            n
          );
        },
        fromAminoMsg: (e) => eC.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgPruneAcknowledgements",
          value: eC.toAmino(e),
        }),
        fromProtoMsg: (e) => eC.decode(e.value),
        toProto: (e) => eC.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgements",
          value: eC.encode(e).finish(),
        }),
      };
      function eS() {
        return {
          totalPrunedSequences: BigInt(0),
          totalRemainingSequences: BigInt(0),
        };
      }
      l.q.register(eC.typeUrl, eC),
        l.q.registerAminoProtoMapping(eC.aminoType, eC.typeUrl);
      let eH = {
        typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse",
        aminoType: "cosmos-sdk/MsgPruneAcknowledgementsResponse",
        is: (e) =>
          e &&
          (e.$typeUrl === eH.typeUrl ||
            ("bigint" == typeof e.totalPrunedSequences &&
              "bigint" == typeof e.totalRemainingSequences)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === eH.typeUrl ||
            ("bigint" == typeof e.total_pruned_sequences &&
              "bigint" == typeof e.total_remaining_sequences)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === eH.typeUrl ||
            ("bigint" == typeof e.total_pruned_sequences &&
              "bigint" == typeof e.total_remaining_sequences)),
        encode: (e, n = a.Lt.create()) => (
          e.totalPrunedSequences !== BigInt(0) &&
            n.uint32(8).uint64(e.totalPrunedSequences),
          e.totalRemainingSequences !== BigInt(0) &&
            n.uint32(16).uint64(e.totalRemainingSequences),
          n
        ),
        decode(e, n) {
          let o = e instanceof a.oP ? e : new a.oP(e),
            r = void 0 === n ? o.len : o.pos + n,
            t = eS();
          for (; o.pos < r; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                t.totalPrunedSequences = o.uint64();
                break;
              case 2:
                t.totalRemainingSequences = o.uint64();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return t;
        },
        fromPartial(e) {
          let n = eS();
          return (
            (n.totalPrunedSequences =
              void 0 !== e.totalPrunedSequences &&
              null !== e.totalPrunedSequences
                ? BigInt(e.totalPrunedSequences.toString())
                : BigInt(0)),
            (n.totalRemainingSequences =
              void 0 !== e.totalRemainingSequences &&
              null !== e.totalRemainingSequences
                ? BigInt(e.totalRemainingSequences.toString())
                : BigInt(0)),
            n
          );
        },
        fromAmino(e) {
          let n = eS();
          return (
            void 0 !== e.total_pruned_sequences &&
              null !== e.total_pruned_sequences &&
              (n.totalPrunedSequences = BigInt(e.total_pruned_sequences)),
            void 0 !== e.total_remaining_sequences &&
              null !== e.total_remaining_sequences &&
              (n.totalRemainingSequences = BigInt(e.total_remaining_sequences)),
            n
          );
        },
        toAmino(e) {
          let n = {};
          return (
            (n.total_pruned_sequences =
              e.totalPrunedSequences !== BigInt(0)
                ? e.totalPrunedSequences.toString()
                : void 0),
            (n.total_remaining_sequences =
              e.totalRemainingSequences !== BigInt(0)
                ? e.totalRemainingSequences.toString()
                : void 0),
            n
          );
        },
        fromAminoMsg: (e) => eH.fromAmino(e.value),
        toAminoMsg: (e) => ({
          type: "cosmos-sdk/MsgPruneAcknowledgementsResponse",
          value: eH.toAmino(e),
        }),
        fromProtoMsg: (e) => eH.decode(e.value),
        toProto: (e) => eH.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse",
          value: eH.encode(e).finish(),
        }),
      };
      l.q.register(eH.typeUrl, eH),
        l.q.registerAminoProtoMapping(eH.aminoType, eH.typeUrl);
    },
  },
]);
