"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9799],
  {
    28579: function (e, t, o) {
      o.r(t),
        o.d(t, {
          CheckTxType: function () {
            return l;
          },
          CheckTxTypeAmino: function () {
            return b;
          },
          CheckTxTypeSDKType: function () {
            return k;
          },
          CommitInfo: function () {
            return e0;
          },
          Event: function () {
            return e1;
          },
          EventAttribute: function () {
            return e6;
          },
          ExtendedCommitInfo: function () {
            return e3;
          },
          ExtendedVoteInfo: function () {
            return ts;
          },
          Misbehavior: function () {
            return tl;
          },
          MisbehaviorType: function () {
            return c;
          },
          MisbehaviorTypeAmino: function () {
            return q;
          },
          MisbehaviorTypeSDKType: function () {
            return $;
          },
          Request: function () {
            return L;
          },
          RequestApplySnapshotChunk: function () {
            return em;
          },
          RequestBeginBlock: function () {
            return X;
          },
          RequestCheckTx: function () {
            return et;
          },
          RequestCommit: function () {
            return es;
          },
          RequestDeliverTx: function () {
            return ei;
          },
          RequestEcho: function () {
            return W;
          },
          RequestEndBlock: function () {
            return er;
          },
          RequestFlush: function () {
            return j;
          },
          RequestInfo: function () {
            return J;
          },
          RequestInitChain: function () {
            return Z;
          },
          RequestListSnapshots: function () {
            return ea;
          },
          RequestLoadSnapshotChunk: function () {
            return eu;
          },
          RequestOfferSnapshot: function () {
            return ed;
          },
          RequestPrepareProposal: function () {
            return ef;
          },
          RequestProcessProposal: function () {
            return eg;
          },
          RequestQuery: function () {
            return Y;
          },
          Response: function () {
            return eA;
          },
          ResponseApplySnapshotChunk: function () {
            return eG;
          },
          ResponseApplySnapshotChunk_Result: function () {
            return p;
          },
          ResponseApplySnapshotChunk_ResultAmino: function () {
            return I;
          },
          ResponseApplySnapshotChunk_ResultSDKType: function () {
            return B;
          },
          ResponseBeginBlock: function () {
            return eR;
          },
          ResponseCheckTx: function () {
            return eM;
          },
          ResponseCommit: function () {
            return eO;
          },
          ResponseDeliverTx: function () {
            return eD;
          },
          ResponseEcho: function () {
            return eP;
          },
          ResponseEndBlock: function () {
            return eq;
          },
          ResponseException: function () {
            return ek;
          },
          ResponseFlush: function () {
            return e_;
          },
          ResponseInfo: function () {
            return eS;
          },
          ResponseInitChain: function () {
            return eT;
          },
          ResponseListSnapshots: function () {
            return eL;
          },
          ResponseLoadSnapshotChunk: function () {
            return ez;
          },
          ResponseOfferSnapshot: function () {
            return eW;
          },
          ResponseOfferSnapshot_Result: function () {
            return d;
          },
          ResponseOfferSnapshot_ResultAmino: function () {
            return S;
          },
          ResponseOfferSnapshot_ResultSDKType: function () {
            return x;
          },
          ResponsePrepareProposal: function () {
            return eF;
          },
          ResponseProcessProposal: function () {
            return eQ;
          },
          ResponseProcessProposal_ProposalStatus: function () {
            return u;
          },
          ResponseProcessProposal_ProposalStatusAmino: function () {
            return M;
          },
          ResponseProcessProposal_ProposalStatusSDKType: function () {
            return w;
          },
          ResponseQuery: function () {
            return eI;
          },
          Snapshot: function () {
            return tp;
          },
          TxResult: function () {
            return e5;
          },
          Validator: function () {
            return te;
          },
          ValidatorUpdate: function () {
            return to;
          },
          VoteInfo: function () {
            return tn;
          },
          checkTxTypeFromJSON: function () {
            return P;
          },
          checkTxTypeToJSON: function () {
            return _;
          },
          misbehaviorTypeFromJSON: function () {
            return K;
          },
          misbehaviorTypeToJSON: function () {
            return O;
          },
          responseApplySnapshotChunk_ResultFromJSON: function () {
            return E;
          },
          responseApplySnapshotChunk_ResultToJSON: function () {
            return R;
          },
          responseOfferSnapshot_ResultFromJSON: function () {
            return C;
          },
          responseOfferSnapshot_ResultToJSON: function () {
            return T;
          },
          responseProcessProposal_ProposalStatusFromJSON: function () {
            return N;
          },
          responseProcessProposal_ProposalStatusToJSON: function () {
            return D;
          },
        });
      var i,
        n,
        r,
        s,
        a,
        l,
        d,
        p,
        u,
        c,
        m = o(88298),
        h = o(53825),
        f = o(69349),
        y = o(32811),
        g = o(90830),
        v = o(62150),
        A = o(292),
        U = o(91984);
      ((i = l || (l = {}))[(i.NEW = 0)] = "NEW"),
        (i[(i.RECHECK = 1)] = "RECHECK"),
        (i[(i.UNRECOGNIZED = -1)] = "UNRECOGNIZED");
      let k = l,
        b = l;
      function P(e) {
        switch (e) {
          case 0:
          case "NEW":
            return l.NEW;
          case 1:
          case "RECHECK":
            return l.RECHECK;
          default:
            return l.UNRECOGNIZED;
        }
      }
      function _(e) {
        switch (e) {
          case l.NEW:
            return "NEW";
          case l.RECHECK:
            return "RECHECK";
          case l.UNRECOGNIZED:
          default:
            return "UNRECOGNIZED";
        }
      }
      ((n = d || (d = {}))[(n.UNKNOWN = 0)] = "UNKNOWN"),
        (n[(n.ACCEPT = 1)] = "ACCEPT"),
        (n[(n.ABORT = 2)] = "ABORT"),
        (n[(n.REJECT = 3)] = "REJECT"),
        (n[(n.REJECT_FORMAT = 4)] = "REJECT_FORMAT"),
        (n[(n.REJECT_SENDER = 5)] = "REJECT_SENDER"),
        (n[(n.UNRECOGNIZED = -1)] = "UNRECOGNIZED");
      let x = d,
        S = d;
      function C(e) {
        switch (e) {
          case 0:
          case "UNKNOWN":
            return d.UNKNOWN;
          case 1:
          case "ACCEPT":
            return d.ACCEPT;
          case 2:
          case "ABORT":
            return d.ABORT;
          case 3:
          case "REJECT":
            return d.REJECT;
          case 4:
          case "REJECT_FORMAT":
            return d.REJECT_FORMAT;
          case 5:
          case "REJECT_SENDER":
            return d.REJECT_SENDER;
          default:
            return d.UNRECOGNIZED;
        }
      }
      function T(e) {
        switch (e) {
          case d.UNKNOWN:
            return "UNKNOWN";
          case d.ACCEPT:
            return "ACCEPT";
          case d.ABORT:
            return "ABORT";
          case d.REJECT:
            return "REJECT";
          case d.REJECT_FORMAT:
            return "REJECT_FORMAT";
          case d.REJECT_SENDER:
            return "REJECT_SENDER";
          case d.UNRECOGNIZED:
          default:
            return "UNRECOGNIZED";
        }
      }
      ((r = p || (p = {}))[(r.UNKNOWN = 0)] = "UNKNOWN"),
        (r[(r.ACCEPT = 1)] = "ACCEPT"),
        (r[(r.ABORT = 2)] = "ABORT"),
        (r[(r.RETRY = 3)] = "RETRY"),
        (r[(r.RETRY_SNAPSHOT = 4)] = "RETRY_SNAPSHOT"),
        (r[(r.REJECT_SNAPSHOT = 5)] = "REJECT_SNAPSHOT"),
        (r[(r.UNRECOGNIZED = -1)] = "UNRECOGNIZED");
      let B = p,
        I = p;
      function E(e) {
        switch (e) {
          case 0:
          case "UNKNOWN":
            return p.UNKNOWN;
          case 1:
          case "ACCEPT":
            return p.ACCEPT;
          case 2:
          case "ABORT":
            return p.ABORT;
          case 3:
          case "RETRY":
            return p.RETRY;
          case 4:
          case "RETRY_SNAPSHOT":
            return p.RETRY_SNAPSHOT;
          case 5:
          case "REJECT_SNAPSHOT":
            return p.REJECT_SNAPSHOT;
          default:
            return p.UNRECOGNIZED;
        }
      }
      function R(e) {
        switch (e) {
          case p.UNKNOWN:
            return "UNKNOWN";
          case p.ACCEPT:
            return "ACCEPT";
          case p.ABORT:
            return "ABORT";
          case p.RETRY:
            return "RETRY";
          case p.RETRY_SNAPSHOT:
            return "RETRY_SNAPSHOT";
          case p.REJECT_SNAPSHOT:
            return "REJECT_SNAPSHOT";
          case p.UNRECOGNIZED:
          default:
            return "UNRECOGNIZED";
        }
      }
      ((s = u || (u = {}))[(s.UNKNOWN = 0)] = "UNKNOWN"),
        (s[(s.ACCEPT = 1)] = "ACCEPT"),
        (s[(s.REJECT = 2)] = "REJECT"),
        (s[(s.UNRECOGNIZED = -1)] = "UNRECOGNIZED");
      let w = u,
        M = u;
      function N(e) {
        switch (e) {
          case 0:
          case "UNKNOWN":
            return u.UNKNOWN;
          case 1:
          case "ACCEPT":
            return u.ACCEPT;
          case 2:
          case "REJECT":
            return u.REJECT;
          default:
            return u.UNRECOGNIZED;
        }
      }
      function D(e) {
        switch (e) {
          case u.UNKNOWN:
            return "UNKNOWN";
          case u.ACCEPT:
            return "ACCEPT";
          case u.REJECT:
            return "REJECT";
          case u.UNRECOGNIZED:
          default:
            return "UNRECOGNIZED";
        }
      }
      ((a = c || (c = {}))[(a.UNKNOWN = 0)] = "UNKNOWN"),
        (a[(a.DUPLICATE_VOTE = 1)] = "DUPLICATE_VOTE"),
        (a[(a.LIGHT_CLIENT_ATTACK = 2)] = "LIGHT_CLIENT_ATTACK"),
        (a[(a.UNRECOGNIZED = -1)] = "UNRECOGNIZED");
      let $ = c,
        q = c;
      function K(e) {
        switch (e) {
          case 0:
          case "UNKNOWN":
            return c.UNKNOWN;
          case 1:
          case "DUPLICATE_VOTE":
            return c.DUPLICATE_VOTE;
          case 2:
          case "LIGHT_CLIENT_ATTACK":
            return c.LIGHT_CLIENT_ATTACK;
          default:
            return c.UNRECOGNIZED;
        }
      }
      function O(e) {
        switch (e) {
          case c.UNKNOWN:
            return "UNKNOWN";
          case c.DUPLICATE_VOTE:
            return "DUPLICATE_VOTE";
          case c.LIGHT_CLIENT_ATTACK:
            return "LIGHT_CLIENT_ATTACK";
          case c.UNRECOGNIZED:
          default:
            return "UNRECOGNIZED";
        }
      }
      function H() {
        return {
          echo: void 0,
          flush: void 0,
          info: void 0,
          initChain: void 0,
          query: void 0,
          beginBlock: void 0,
          checkTx: void 0,
          deliverTx: void 0,
          endBlock: void 0,
          commit: void 0,
          listSnapshots: void 0,
          offerSnapshot: void 0,
          loadSnapshotChunk: void 0,
          applySnapshotChunk: void 0,
          prepareProposal: void 0,
          processProposal: void 0,
        };
      }
      let L = {
        typeUrl: "/tendermint.abci.Request",
        is: (e) => e && e.$typeUrl === L.typeUrl,
        isSDK: (e) => e && e.$typeUrl === L.typeUrl,
        isAmino: (e) => e && e.$typeUrl === L.typeUrl,
        encode: (e, t = v.Lt.create()) => (
          void 0 !== e.echo && W.encode(e.echo, t.uint32(10).fork()).ldelim(),
          void 0 !== e.flush && j.encode(e.flush, t.uint32(18).fork()).ldelim(),
          void 0 !== e.info && J.encode(e.info, t.uint32(26).fork()).ldelim(),
          void 0 !== e.initChain &&
            Z.encode(e.initChain, t.uint32(42).fork()).ldelim(),
          void 0 !== e.query && Y.encode(e.query, t.uint32(50).fork()).ldelim(),
          void 0 !== e.beginBlock &&
            X.encode(e.beginBlock, t.uint32(58).fork()).ldelim(),
          void 0 !== e.checkTx &&
            et.encode(e.checkTx, t.uint32(66).fork()).ldelim(),
          void 0 !== e.deliverTx &&
            ei.encode(e.deliverTx, t.uint32(74).fork()).ldelim(),
          void 0 !== e.endBlock &&
            er.encode(e.endBlock, t.uint32(82).fork()).ldelim(),
          void 0 !== e.commit &&
            es.encode(e.commit, t.uint32(90).fork()).ldelim(),
          void 0 !== e.listSnapshots &&
            ea.encode(e.listSnapshots, t.uint32(98).fork()).ldelim(),
          void 0 !== e.offerSnapshot &&
            ed.encode(e.offerSnapshot, t.uint32(106).fork()).ldelim(),
          void 0 !== e.loadSnapshotChunk &&
            eu.encode(e.loadSnapshotChunk, t.uint32(114).fork()).ldelim(),
          void 0 !== e.applySnapshotChunk &&
            em.encode(e.applySnapshotChunk, t.uint32(122).fork()).ldelim(),
          void 0 !== e.prepareProposal &&
            ef.encode(e.prepareProposal, t.uint32(130).fork()).ldelim(),
          void 0 !== e.processProposal &&
            eg.encode(e.processProposal, t.uint32(138).fork()).ldelim(),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = H();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.echo = W.decode(o, o.uint32());
                break;
              case 2:
                n.flush = j.decode(o, o.uint32());
                break;
              case 3:
                n.info = J.decode(o, o.uint32());
                break;
              case 5:
                n.initChain = Z.decode(o, o.uint32());
                break;
              case 6:
                n.query = Y.decode(o, o.uint32());
                break;
              case 7:
                n.beginBlock = X.decode(o, o.uint32());
                break;
              case 8:
                n.checkTx = et.decode(o, o.uint32());
                break;
              case 9:
                n.deliverTx = ei.decode(o, o.uint32());
                break;
              case 10:
                n.endBlock = er.decode(o, o.uint32());
                break;
              case 11:
                n.commit = es.decode(o, o.uint32());
                break;
              case 12:
                n.listSnapshots = ea.decode(o, o.uint32());
                break;
              case 13:
                n.offerSnapshot = ed.decode(o, o.uint32());
                break;
              case 14:
                n.loadSnapshotChunk = eu.decode(o, o.uint32());
                break;
              case 15:
                n.applySnapshotChunk = em.decode(o, o.uint32());
                break;
              case 16:
                n.prepareProposal = ef.decode(o, o.uint32());
                break;
              case 17:
                n.processProposal = eg.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = H();
          return (
            (t.echo =
              void 0 !== e.echo && null !== e.echo
                ? W.fromPartial(e.echo)
                : void 0),
            (t.flush =
              void 0 !== e.flush && null !== e.flush
                ? j.fromPartial(e.flush)
                : void 0),
            (t.info =
              void 0 !== e.info && null !== e.info
                ? J.fromPartial(e.info)
                : void 0),
            (t.initChain =
              void 0 !== e.initChain && null !== e.initChain
                ? Z.fromPartial(e.initChain)
                : void 0),
            (t.query =
              void 0 !== e.query && null !== e.query
                ? Y.fromPartial(e.query)
                : void 0),
            (t.beginBlock =
              void 0 !== e.beginBlock && null !== e.beginBlock
                ? X.fromPartial(e.beginBlock)
                : void 0),
            (t.checkTx =
              void 0 !== e.checkTx && null !== e.checkTx
                ? et.fromPartial(e.checkTx)
                : void 0),
            (t.deliverTx =
              void 0 !== e.deliverTx && null !== e.deliverTx
                ? ei.fromPartial(e.deliverTx)
                : void 0),
            (t.endBlock =
              void 0 !== e.endBlock && null !== e.endBlock
                ? er.fromPartial(e.endBlock)
                : void 0),
            (t.commit =
              void 0 !== e.commit && null !== e.commit
                ? es.fromPartial(e.commit)
                : void 0),
            (t.listSnapshots =
              void 0 !== e.listSnapshots && null !== e.listSnapshots
                ? ea.fromPartial(e.listSnapshots)
                : void 0),
            (t.offerSnapshot =
              void 0 !== e.offerSnapshot && null !== e.offerSnapshot
                ? ed.fromPartial(e.offerSnapshot)
                : void 0),
            (t.loadSnapshotChunk =
              void 0 !== e.loadSnapshotChunk && null !== e.loadSnapshotChunk
                ? eu.fromPartial(e.loadSnapshotChunk)
                : void 0),
            (t.applySnapshotChunk =
              void 0 !== e.applySnapshotChunk && null !== e.applySnapshotChunk
                ? em.fromPartial(e.applySnapshotChunk)
                : void 0),
            (t.prepareProposal =
              void 0 !== e.prepareProposal && null !== e.prepareProposal
                ? ef.fromPartial(e.prepareProposal)
                : void 0),
            (t.processProposal =
              void 0 !== e.processProposal && null !== e.processProposal
                ? eg.fromPartial(e.processProposal)
                : void 0),
            t
          );
        },
        fromAmino(e) {
          let t = H();
          return (
            void 0 !== e.echo &&
              null !== e.echo &&
              (t.echo = W.fromAmino(e.echo)),
            void 0 !== e.flush &&
              null !== e.flush &&
              (t.flush = j.fromAmino(e.flush)),
            void 0 !== e.info &&
              null !== e.info &&
              (t.info = J.fromAmino(e.info)),
            void 0 !== e.init_chain &&
              null !== e.init_chain &&
              (t.initChain = Z.fromAmino(e.init_chain)),
            void 0 !== e.query &&
              null !== e.query &&
              (t.query = Y.fromAmino(e.query)),
            void 0 !== e.begin_block &&
              null !== e.begin_block &&
              (t.beginBlock = X.fromAmino(e.begin_block)),
            void 0 !== e.check_tx &&
              null !== e.check_tx &&
              (t.checkTx = et.fromAmino(e.check_tx)),
            void 0 !== e.deliver_tx &&
              null !== e.deliver_tx &&
              (t.deliverTx = ei.fromAmino(e.deliver_tx)),
            void 0 !== e.end_block &&
              null !== e.end_block &&
              (t.endBlock = er.fromAmino(e.end_block)),
            void 0 !== e.commit &&
              null !== e.commit &&
              (t.commit = es.fromAmino(e.commit)),
            void 0 !== e.list_snapshots &&
              null !== e.list_snapshots &&
              (t.listSnapshots = ea.fromAmino(e.list_snapshots)),
            void 0 !== e.offer_snapshot &&
              null !== e.offer_snapshot &&
              (t.offerSnapshot = ed.fromAmino(e.offer_snapshot)),
            void 0 !== e.load_snapshot_chunk &&
              null !== e.load_snapshot_chunk &&
              (t.loadSnapshotChunk = eu.fromAmino(e.load_snapshot_chunk)),
            void 0 !== e.apply_snapshot_chunk &&
              null !== e.apply_snapshot_chunk &&
              (t.applySnapshotChunk = em.fromAmino(e.apply_snapshot_chunk)),
            void 0 !== e.prepare_proposal &&
              null !== e.prepare_proposal &&
              (t.prepareProposal = ef.fromAmino(e.prepare_proposal)),
            void 0 !== e.process_proposal &&
              null !== e.process_proposal &&
              (t.processProposal = eg.fromAmino(e.process_proposal)),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.echo = e.echo ? W.toAmino(e.echo) : void 0),
            (t.flush = e.flush ? j.toAmino(e.flush) : void 0),
            (t.info = e.info ? J.toAmino(e.info) : void 0),
            (t.init_chain = e.initChain ? Z.toAmino(e.initChain) : void 0),
            (t.query = e.query ? Y.toAmino(e.query) : void 0),
            (t.begin_block = e.beginBlock ? X.toAmino(e.beginBlock) : void 0),
            (t.check_tx = e.checkTx ? et.toAmino(e.checkTx) : void 0),
            (t.deliver_tx = e.deliverTx ? ei.toAmino(e.deliverTx) : void 0),
            (t.end_block = e.endBlock ? er.toAmino(e.endBlock) : void 0),
            (t.commit = e.commit ? es.toAmino(e.commit) : void 0),
            (t.list_snapshots = e.listSnapshots
              ? ea.toAmino(e.listSnapshots)
              : void 0),
            (t.offer_snapshot = e.offerSnapshot
              ? ed.toAmino(e.offerSnapshot)
              : void 0),
            (t.load_snapshot_chunk = e.loadSnapshotChunk
              ? eu.toAmino(e.loadSnapshotChunk)
              : void 0),
            (t.apply_snapshot_chunk = e.applySnapshotChunk
              ? em.toAmino(e.applySnapshotChunk)
              : void 0),
            (t.prepare_proposal = e.prepareProposal
              ? ef.toAmino(e.prepareProposal)
              : void 0),
            (t.process_proposal = e.processProposal
              ? eg.toAmino(e.processProposal)
              : void 0),
            t
          );
        },
        fromAminoMsg: (e) => L.fromAmino(e.value),
        fromProtoMsg: (e) => L.decode(e.value),
        toProto: (e) => L.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.Request",
          value: L.encode(e).finish(),
        }),
      };
      function V() {
        return { message: "" };
      }
      A.q.register(L.typeUrl, L);
      let W = {
        typeUrl: "/tendermint.abci.RequestEcho",
        is: (e) =>
          e && (e.$typeUrl === W.typeUrl || "string" == typeof e.message),
        isSDK: (e) =>
          e && (e.$typeUrl === W.typeUrl || "string" == typeof e.message),
        isAmino: (e) =>
          e && (e.$typeUrl === W.typeUrl || "string" == typeof e.message),
        encode: (e, t = v.Lt.create()) => (
          "" !== e.message && t.uint32(10).string(e.message), t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = V();
          for (; o.pos < i; ) {
            let e = o.uint32();
            e >>> 3 == 1 ? (n.message = o.string()) : o.skipType(7 & e);
          }
          return n;
        },
        fromPartial(e) {
          let t = V();
          return (t.message = e.message ?? ""), t;
        },
        fromAmino(e) {
          let t = V();
          return (
            void 0 !== e.message &&
              null !== e.message &&
              (t.message = e.message),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (t.message = "" === e.message ? void 0 : e.message), t;
        },
        fromAminoMsg: (e) => W.fromAmino(e.value),
        fromProtoMsg: (e) => W.decode(e.value),
        toProto: (e) => W.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.RequestEcho",
          value: W.encode(e).finish(),
        }),
      };
      A.q.register(W.typeUrl, W);
      let j = {
        typeUrl: "/tendermint.abci.RequestFlush",
        is: (e) => e && e.$typeUrl === j.typeUrl,
        isSDK: (e) => e && e.$typeUrl === j.typeUrl,
        isAmino: (e) => e && e.$typeUrl === j.typeUrl,
        encode: (e, t = v.Lt.create()) => t,
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t;
          for (; o.pos < i; ) {
            let e = o.uint32();
            o.skipType(7 & e);
          }
          return {};
        },
        fromPartial: (e) => ({}),
        fromAmino: (e) => ({}),
        toAmino: (e) => ({}),
        fromAminoMsg: (e) => j.fromAmino(e.value),
        fromProtoMsg: (e) => j.decode(e.value),
        toProto: (e) => j.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.RequestFlush",
          value: j.encode(e).finish(),
        }),
      };
      function z() {
        return {
          version: "",
          blockVersion: BigInt(0),
          p2pVersion: BigInt(0),
          abciVersion: "",
        };
      }
      A.q.register(j.typeUrl, j);
      let J = {
        typeUrl: "/tendermint.abci.RequestInfo",
        is: (e) =>
          e &&
          (e.$typeUrl === J.typeUrl ||
            ("string" == typeof e.version &&
              "bigint" == typeof e.blockVersion &&
              "bigint" == typeof e.p2pVersion &&
              "string" == typeof e.abciVersion)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === J.typeUrl ||
            ("string" == typeof e.version &&
              "bigint" == typeof e.block_version &&
              "bigint" == typeof e.p2p_version &&
              "string" == typeof e.abci_version)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === J.typeUrl ||
            ("string" == typeof e.version &&
              "bigint" == typeof e.block_version &&
              "bigint" == typeof e.p2p_version &&
              "string" == typeof e.abci_version)),
        encode: (e, t = v.Lt.create()) => (
          "" !== e.version && t.uint32(10).string(e.version),
          e.blockVersion !== BigInt(0) && t.uint32(16).uint64(e.blockVersion),
          e.p2pVersion !== BigInt(0) && t.uint32(24).uint64(e.p2pVersion),
          "" !== e.abciVersion && t.uint32(34).string(e.abciVersion),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = z();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.version = o.string();
                break;
              case 2:
                n.blockVersion = o.uint64();
                break;
              case 3:
                n.p2pVersion = o.uint64();
                break;
              case 4:
                n.abciVersion = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = z();
          return (
            (t.version = e.version ?? ""),
            (t.blockVersion =
              void 0 !== e.blockVersion && null !== e.blockVersion
                ? BigInt(e.blockVersion.toString())
                : BigInt(0)),
            (t.p2pVersion =
              void 0 !== e.p2pVersion && null !== e.p2pVersion
                ? BigInt(e.p2pVersion.toString())
                : BigInt(0)),
            (t.abciVersion = e.abciVersion ?? ""),
            t
          );
        },
        fromAmino(e) {
          let t = z();
          return (
            void 0 !== e.version &&
              null !== e.version &&
              (t.version = e.version),
            void 0 !== e.block_version &&
              null !== e.block_version &&
              (t.blockVersion = BigInt(e.block_version)),
            void 0 !== e.p2p_version &&
              null !== e.p2p_version &&
              (t.p2pVersion = BigInt(e.p2p_version)),
            void 0 !== e.abci_version &&
              null !== e.abci_version &&
              (t.abciVersion = e.abci_version),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.version = "" === e.version ? void 0 : e.version),
            (t.block_version =
              e.blockVersion !== BigInt(0)
                ? e.blockVersion.toString()
                : void 0),
            (t.p2p_version =
              e.p2pVersion !== BigInt(0) ? e.p2pVersion.toString() : void 0),
            (t.abci_version = "" === e.abciVersion ? void 0 : e.abciVersion),
            t
          );
        },
        fromAminoMsg: (e) => J.fromAmino(e.value),
        fromProtoMsg: (e) => J.decode(e.value),
        toProto: (e) => J.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.RequestInfo",
          value: J.encode(e).finish(),
        }),
      };
      function G() {
        return {
          time: new Date(),
          chainId: "",
          consensusParams: void 0,
          validators: [],
          appStateBytes: new Uint8Array(),
          initialHeight: BigInt(0),
        };
      }
      A.q.register(J.typeUrl, J);
      let Z = {
        typeUrl: "/tendermint.abci.RequestInitChain",
        is: (e) =>
          e &&
          (e.$typeUrl === Z.typeUrl ||
            (m.Timestamp.is(e.time) &&
              "string" == typeof e.chainId &&
              Array.isArray(e.validators) &&
              (!e.validators.length || to.is(e.validators[0])) &&
              (e.appStateBytes instanceof Uint8Array ||
                "string" == typeof e.appStateBytes) &&
              "bigint" == typeof e.initialHeight)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === Z.typeUrl ||
            (m.Timestamp.isSDK(e.time) &&
              "string" == typeof e.chain_id &&
              Array.isArray(e.validators) &&
              (!e.validators.length || to.isSDK(e.validators[0])) &&
              (e.app_state_bytes instanceof Uint8Array ||
                "string" == typeof e.app_state_bytes) &&
              "bigint" == typeof e.initial_height)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === Z.typeUrl ||
            (m.Timestamp.isAmino(e.time) &&
              "string" == typeof e.chain_id &&
              Array.isArray(e.validators) &&
              (!e.validators.length || to.isAmino(e.validators[0])) &&
              (e.app_state_bytes instanceof Uint8Array ||
                "string" == typeof e.app_state_bytes) &&
              "bigint" == typeof e.initial_height)),
        encode(e, t = v.Lt.create()) {
          for (let o of (void 0 !== e.time &&
            m.Timestamp.encode((0, U.Uq)(e.time), t.uint32(10).fork()).ldelim(),
          "" !== e.chainId && t.uint32(18).string(e.chainId),
          void 0 !== e.consensusParams &&
            h.ConsensusParams.encode(
              e.consensusParams,
              t.uint32(26).fork()
            ).ldelim(),
          e.validators))
            to.encode(o, t.uint32(34).fork()).ldelim();
          return (
            0 !== e.appStateBytes.length && t.uint32(42).bytes(e.appStateBytes),
            e.initialHeight !== BigInt(0) &&
              t.uint32(48).int64(e.initialHeight),
            t
          );
        },
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = G();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.time = (0, U.Ol)(m.Timestamp.decode(o, o.uint32()));
                break;
              case 2:
                n.chainId = o.string();
                break;
              case 3:
                n.consensusParams = h.ConsensusParams.decode(o, o.uint32());
                break;
              case 4:
                n.validators.push(to.decode(o, o.uint32()));
                break;
              case 5:
                n.appStateBytes = o.bytes();
                break;
              case 6:
                n.initialHeight = o.int64();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = G();
          return (
            (t.time = e.time ?? void 0),
            (t.chainId = e.chainId ?? ""),
            (t.consensusParams =
              void 0 !== e.consensusParams && null !== e.consensusParams
                ? h.ConsensusParams.fromPartial(e.consensusParams)
                : void 0),
            (t.validators = e.validators?.map((e) => to.fromPartial(e)) || []),
            (t.appStateBytes = e.appStateBytes ?? new Uint8Array()),
            (t.initialHeight =
              void 0 !== e.initialHeight && null !== e.initialHeight
                ? BigInt(e.initialHeight.toString())
                : BigInt(0)),
            t
          );
        },
        fromAmino(e) {
          let t = G();
          return (
            void 0 !== e.time &&
              null !== e.time &&
              (t.time = (0, U.Ol)(m.Timestamp.fromAmino(e.time))),
            void 0 !== e.chain_id &&
              null !== e.chain_id &&
              (t.chainId = e.chain_id),
            void 0 !== e.consensus_params &&
              null !== e.consensus_params &&
              (t.consensusParams = h.ConsensusParams.fromAmino(
                e.consensus_params
              )),
            (t.validators = e.validators?.map((e) => to.fromAmino(e)) || []),
            void 0 !== e.app_state_bytes &&
              null !== e.app_state_bytes &&
              (t.appStateBytes = (0, U.jm)(e.app_state_bytes)),
            void 0 !== e.initial_height &&
              null !== e.initial_height &&
              (t.initialHeight = BigInt(e.initial_height)),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.time = e.time ? m.Timestamp.toAmino((0, U.Uq)(e.time)) : void 0),
            (t.chain_id = "" === e.chainId ? void 0 : e.chainId),
            (t.consensus_params = e.consensusParams
              ? h.ConsensusParams.toAmino(e.consensusParams)
              : void 0),
            e.validators
              ? (t.validators = e.validators.map((e) =>
                  e ? to.toAmino(e) : void 0
                ))
              : (t.validators = e.validators),
            (t.app_state_bytes = e.appStateBytes
              ? (0, U.Uz)(e.appStateBytes)
              : void 0),
            (t.initial_height =
              e.initialHeight !== BigInt(0)
                ? e.initialHeight.toString()
                : void 0),
            t
          );
        },
        fromAminoMsg: (e) => Z.fromAmino(e.value),
        fromProtoMsg: (e) => Z.decode(e.value),
        toProto: (e) => Z.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.RequestInitChain",
          value: Z.encode(e).finish(),
        }),
      };
      function F() {
        return {
          data: new Uint8Array(),
          path: "",
          height: BigInt(0),
          prove: !1,
        };
      }
      A.q.register(Z.typeUrl, Z);
      let Y = {
        typeUrl: "/tendermint.abci.RequestQuery",
        is: (e) =>
          e &&
          (e.$typeUrl === Y.typeUrl ||
            ((e.data instanceof Uint8Array || "string" == typeof e.data) &&
              "string" == typeof e.path &&
              "bigint" == typeof e.height &&
              "boolean" == typeof e.prove)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === Y.typeUrl ||
            ((e.data instanceof Uint8Array || "string" == typeof e.data) &&
              "string" == typeof e.path &&
              "bigint" == typeof e.height &&
              "boolean" == typeof e.prove)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === Y.typeUrl ||
            ((e.data instanceof Uint8Array || "string" == typeof e.data) &&
              "string" == typeof e.path &&
              "bigint" == typeof e.height &&
              "boolean" == typeof e.prove)),
        encode: (e, t = v.Lt.create()) => (
          0 !== e.data.length && t.uint32(10).bytes(e.data),
          "" !== e.path && t.uint32(18).string(e.path),
          e.height !== BigInt(0) && t.uint32(24).int64(e.height),
          !0 === e.prove && t.uint32(32).bool(e.prove),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = F();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.data = o.bytes();
                break;
              case 2:
                n.path = o.string();
                break;
              case 3:
                n.height = o.int64();
                break;
              case 4:
                n.prove = o.bool();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = F();
          return (
            (t.data = e.data ?? new Uint8Array()),
            (t.path = e.path ?? ""),
            (t.height =
              void 0 !== e.height && null !== e.height
                ? BigInt(e.height.toString())
                : BigInt(0)),
            (t.prove = e.prove ?? !1),
            t
          );
        },
        fromAmino(e) {
          let t = F();
          return (
            void 0 !== e.data &&
              null !== e.data &&
              (t.data = (0, U.jm)(e.data)),
            void 0 !== e.path && null !== e.path && (t.path = e.path),
            void 0 !== e.height &&
              null !== e.height &&
              (t.height = BigInt(e.height)),
            void 0 !== e.prove && null !== e.prove && (t.prove = e.prove),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.data = e.data ? (0, U.Uz)(e.data) : void 0),
            (t.path = "" === e.path ? void 0 : e.path),
            (t.height = e.height !== BigInt(0) ? e.height.toString() : void 0),
            (t.prove = !1 === e.prove ? void 0 : e.prove),
            t
          );
        },
        fromAminoMsg: (e) => Y.fromAmino(e.value),
        fromProtoMsg: (e) => Y.decode(e.value),
        toProto: (e) => Y.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.RequestQuery",
          value: Y.encode(e).finish(),
        }),
      };
      function Q() {
        return {
          hash: new Uint8Array(),
          header: f.Header.fromPartial({}),
          lastCommitInfo: e0.fromPartial({}),
          byzantineValidators: [],
        };
      }
      A.q.register(Y.typeUrl, Y);
      let X = {
        typeUrl: "/tendermint.abci.RequestBeginBlock",
        is: (e) =>
          e &&
          (e.$typeUrl === X.typeUrl ||
            ((e.hash instanceof Uint8Array || "string" == typeof e.hash) &&
              f.Header.is(e.header) &&
              e0.is(e.lastCommitInfo) &&
              Array.isArray(e.byzantineValidators) &&
              (!e.byzantineValidators.length ||
                tl.is(e.byzantineValidators[0])))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === X.typeUrl ||
            ((e.hash instanceof Uint8Array || "string" == typeof e.hash) &&
              f.Header.isSDK(e.header) &&
              e0.isSDK(e.last_commit_info) &&
              Array.isArray(e.byzantine_validators) &&
              (!e.byzantine_validators.length ||
                tl.isSDK(e.byzantine_validators[0])))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === X.typeUrl ||
            ((e.hash instanceof Uint8Array || "string" == typeof e.hash) &&
              f.Header.isAmino(e.header) &&
              e0.isAmino(e.last_commit_info) &&
              Array.isArray(e.byzantine_validators) &&
              (!e.byzantine_validators.length ||
                tl.isAmino(e.byzantine_validators[0])))),
        encode(e, t = v.Lt.create()) {
          for (let o of (0 !== e.hash.length && t.uint32(10).bytes(e.hash),
          void 0 !== e.header &&
            f.Header.encode(e.header, t.uint32(18).fork()).ldelim(),
          void 0 !== e.lastCommitInfo &&
            e0.encode(e.lastCommitInfo, t.uint32(26).fork()).ldelim(),
          e.byzantineValidators))
            tl.encode(o, t.uint32(34).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = Q();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.hash = o.bytes();
                break;
              case 2:
                n.header = f.Header.decode(o, o.uint32());
                break;
              case 3:
                n.lastCommitInfo = e0.decode(o, o.uint32());
                break;
              case 4:
                n.byzantineValidators.push(tl.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = Q();
          return (
            (t.hash = e.hash ?? new Uint8Array()),
            (t.header =
              void 0 !== e.header && null !== e.header
                ? f.Header.fromPartial(e.header)
                : void 0),
            (t.lastCommitInfo =
              void 0 !== e.lastCommitInfo && null !== e.lastCommitInfo
                ? e0.fromPartial(e.lastCommitInfo)
                : void 0),
            (t.byzantineValidators =
              e.byzantineValidators?.map((e) => tl.fromPartial(e)) || []),
            t
          );
        },
        fromAmino(e) {
          let t = Q();
          return (
            void 0 !== e.hash &&
              null !== e.hash &&
              (t.hash = (0, U.jm)(e.hash)),
            void 0 !== e.header &&
              null !== e.header &&
              (t.header = f.Header.fromAmino(e.header)),
            void 0 !== e.last_commit_info &&
              null !== e.last_commit_info &&
              (t.lastCommitInfo = e0.fromAmino(e.last_commit_info)),
            (t.byzantineValidators =
              e.byzantine_validators?.map((e) => tl.fromAmino(e)) || []),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.hash = e.hash ? (0, U.Uz)(e.hash) : void 0),
            (t.header = e.header ? f.Header.toAmino(e.header) : void 0),
            (t.last_commit_info = e.lastCommitInfo
              ? e0.toAmino(e.lastCommitInfo)
              : void 0),
            e.byzantineValidators
              ? (t.byzantine_validators = e.byzantineValidators.map((e) =>
                  e ? tl.toAmino(e) : void 0
                ))
              : (t.byzantine_validators = e.byzantineValidators),
            t
          );
        },
        fromAminoMsg: (e) => X.fromAmino(e.value),
        fromProtoMsg: (e) => X.decode(e.value),
        toProto: (e) => X.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.RequestBeginBlock",
          value: X.encode(e).finish(),
        }),
      };
      function ee() {
        return { tx: new Uint8Array(), type: 0 };
      }
      A.q.register(X.typeUrl, X);
      let et = {
        typeUrl: "/tendermint.abci.RequestCheckTx",
        is: (e) =>
          e &&
          (e.$typeUrl === et.typeUrl ||
            ((e.tx instanceof Uint8Array || "string" == typeof e.tx) &&
              (0, U.DM)(e.type))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === et.typeUrl ||
            ((e.tx instanceof Uint8Array || "string" == typeof e.tx) &&
              (0, U.DM)(e.type))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === et.typeUrl ||
            ((e.tx instanceof Uint8Array || "string" == typeof e.tx) &&
              (0, U.DM)(e.type))),
        encode: (e, t = v.Lt.create()) => (
          0 !== e.tx.length && t.uint32(10).bytes(e.tx),
          0 !== e.type && t.uint32(16).int32(e.type),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = ee();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.tx = o.bytes();
                break;
              case 2:
                n.type = o.int32();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = ee();
          return (t.tx = e.tx ?? new Uint8Array()), (t.type = e.type ?? 0), t;
        },
        fromAmino(e) {
          let t = ee();
          return (
            void 0 !== e.tx && null !== e.tx && (t.tx = (0, U.jm)(e.tx)),
            void 0 !== e.type && null !== e.type && (t.type = e.type),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.tx = e.tx ? (0, U.Uz)(e.tx) : void 0),
            (t.type = 0 === e.type ? void 0 : e.type),
            t
          );
        },
        fromAminoMsg: (e) => et.fromAmino(e.value),
        fromProtoMsg: (e) => et.decode(e.value),
        toProto: (e) => et.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.RequestCheckTx",
          value: et.encode(e).finish(),
        }),
      };
      function eo() {
        return { tx: new Uint8Array() };
      }
      A.q.register(et.typeUrl, et);
      let ei = {
        typeUrl: "/tendermint.abci.RequestDeliverTx",
        is: (e) =>
          e &&
          (e.$typeUrl === ei.typeUrl ||
            e.tx instanceof Uint8Array ||
            "string" == typeof e.tx),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === ei.typeUrl ||
            e.tx instanceof Uint8Array ||
            "string" == typeof e.tx),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === ei.typeUrl ||
            e.tx instanceof Uint8Array ||
            "string" == typeof e.tx),
        encode: (e, t = v.Lt.create()) => (
          0 !== e.tx.length && t.uint32(10).bytes(e.tx), t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = eo();
          for (; o.pos < i; ) {
            let e = o.uint32();
            e >>> 3 == 1 ? (n.tx = o.bytes()) : o.skipType(7 & e);
          }
          return n;
        },
        fromPartial(e) {
          let t = eo();
          return (t.tx = e.tx ?? new Uint8Array()), t;
        },
        fromAmino(e) {
          let t = eo();
          return (
            void 0 !== e.tx && null !== e.tx && (t.tx = (0, U.jm)(e.tx)), t
          );
        },
        toAmino(e) {
          let t = {};
          return (t.tx = e.tx ? (0, U.Uz)(e.tx) : void 0), t;
        },
        fromAminoMsg: (e) => ei.fromAmino(e.value),
        fromProtoMsg: (e) => ei.decode(e.value),
        toProto: (e) => ei.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.RequestDeliverTx",
          value: ei.encode(e).finish(),
        }),
      };
      function en() {
        return { height: BigInt(0) };
      }
      A.q.register(ei.typeUrl, ei);
      let er = {
        typeUrl: "/tendermint.abci.RequestEndBlock",
        is: (e) =>
          e && (e.$typeUrl === er.typeUrl || "bigint" == typeof e.height),
        isSDK: (e) =>
          e && (e.$typeUrl === er.typeUrl || "bigint" == typeof e.height),
        isAmino: (e) =>
          e && (e.$typeUrl === er.typeUrl || "bigint" == typeof e.height),
        encode: (e, t = v.Lt.create()) => (
          e.height !== BigInt(0) && t.uint32(8).int64(e.height), t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = en();
          for (; o.pos < i; ) {
            let e = o.uint32();
            e >>> 3 == 1 ? (n.height = o.int64()) : o.skipType(7 & e);
          }
          return n;
        },
        fromPartial(e) {
          let t = en();
          return (
            (t.height =
              void 0 !== e.height && null !== e.height
                ? BigInt(e.height.toString())
                : BigInt(0)),
            t
          );
        },
        fromAmino(e) {
          let t = en();
          return (
            void 0 !== e.height &&
              null !== e.height &&
              (t.height = BigInt(e.height)),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.height = e.height !== BigInt(0) ? e.height.toString() : void 0),
            t
          );
        },
        fromAminoMsg: (e) => er.fromAmino(e.value),
        fromProtoMsg: (e) => er.decode(e.value),
        toProto: (e) => er.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.RequestEndBlock",
          value: er.encode(e).finish(),
        }),
      };
      A.q.register(er.typeUrl, er);
      let es = {
        typeUrl: "/tendermint.abci.RequestCommit",
        is: (e) => e && e.$typeUrl === es.typeUrl,
        isSDK: (e) => e && e.$typeUrl === es.typeUrl,
        isAmino: (e) => e && e.$typeUrl === es.typeUrl,
        encode: (e, t = v.Lt.create()) => t,
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t;
          for (; o.pos < i; ) {
            let e = o.uint32();
            o.skipType(7 & e);
          }
          return {};
        },
        fromPartial: (e) => ({}),
        fromAmino: (e) => ({}),
        toAmino: (e) => ({}),
        fromAminoMsg: (e) => es.fromAmino(e.value),
        fromProtoMsg: (e) => es.decode(e.value),
        toProto: (e) => es.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.RequestCommit",
          value: es.encode(e).finish(),
        }),
      };
      A.q.register(es.typeUrl, es);
      let ea = {
        typeUrl: "/tendermint.abci.RequestListSnapshots",
        is: (e) => e && e.$typeUrl === ea.typeUrl,
        isSDK: (e) => e && e.$typeUrl === ea.typeUrl,
        isAmino: (e) => e && e.$typeUrl === ea.typeUrl,
        encode: (e, t = v.Lt.create()) => t,
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t;
          for (; o.pos < i; ) {
            let e = o.uint32();
            o.skipType(7 & e);
          }
          return {};
        },
        fromPartial: (e) => ({}),
        fromAmino: (e) => ({}),
        toAmino: (e) => ({}),
        fromAminoMsg: (e) => ea.fromAmino(e.value),
        fromProtoMsg: (e) => ea.decode(e.value),
        toProto: (e) => ea.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.RequestListSnapshots",
          value: ea.encode(e).finish(),
        }),
      };
      function el() {
        return { snapshot: void 0, appHash: new Uint8Array() };
      }
      A.q.register(ea.typeUrl, ea);
      let ed = {
        typeUrl: "/tendermint.abci.RequestOfferSnapshot",
        is: (e) =>
          e &&
          (e.$typeUrl === ed.typeUrl ||
            e.appHash instanceof Uint8Array ||
            "string" == typeof e.appHash),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === ed.typeUrl ||
            e.app_hash instanceof Uint8Array ||
            "string" == typeof e.app_hash),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === ed.typeUrl ||
            e.app_hash instanceof Uint8Array ||
            "string" == typeof e.app_hash),
        encode: (e, t = v.Lt.create()) => (
          void 0 !== e.snapshot &&
            tp.encode(e.snapshot, t.uint32(10).fork()).ldelim(),
          0 !== e.appHash.length && t.uint32(18).bytes(e.appHash),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = el();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.snapshot = tp.decode(o, o.uint32());
                break;
              case 2:
                n.appHash = o.bytes();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = el();
          return (
            (t.snapshot =
              void 0 !== e.snapshot && null !== e.snapshot
                ? tp.fromPartial(e.snapshot)
                : void 0),
            (t.appHash = e.appHash ?? new Uint8Array()),
            t
          );
        },
        fromAmino(e) {
          let t = el();
          return (
            void 0 !== e.snapshot &&
              null !== e.snapshot &&
              (t.snapshot = tp.fromAmino(e.snapshot)),
            void 0 !== e.app_hash &&
              null !== e.app_hash &&
              (t.appHash = (0, U.jm)(e.app_hash)),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.snapshot = e.snapshot ? tp.toAmino(e.snapshot) : void 0),
            (t.app_hash = e.appHash ? (0, U.Uz)(e.appHash) : void 0),
            t
          );
        },
        fromAminoMsg: (e) => ed.fromAmino(e.value),
        fromProtoMsg: (e) => ed.decode(e.value),
        toProto: (e) => ed.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.RequestOfferSnapshot",
          value: ed.encode(e).finish(),
        }),
      };
      function ep() {
        return { height: BigInt(0), format: 0, chunk: 0 };
      }
      A.q.register(ed.typeUrl, ed);
      let eu = {
        typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
        is: (e) =>
          e &&
          (e.$typeUrl === eu.typeUrl ||
            ("bigint" == typeof e.height &&
              "number" == typeof e.format &&
              "number" == typeof e.chunk)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === eu.typeUrl ||
            ("bigint" == typeof e.height &&
              "number" == typeof e.format &&
              "number" == typeof e.chunk)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === eu.typeUrl ||
            ("bigint" == typeof e.height &&
              "number" == typeof e.format &&
              "number" == typeof e.chunk)),
        encode: (e, t = v.Lt.create()) => (
          e.height !== BigInt(0) && t.uint32(8).uint64(e.height),
          0 !== e.format && t.uint32(16).uint32(e.format),
          0 !== e.chunk && t.uint32(24).uint32(e.chunk),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = ep();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.height = o.uint64();
                break;
              case 2:
                n.format = o.uint32();
                break;
              case 3:
                n.chunk = o.uint32();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = ep();
          return (
            (t.height =
              void 0 !== e.height && null !== e.height
                ? BigInt(e.height.toString())
                : BigInt(0)),
            (t.format = e.format ?? 0),
            (t.chunk = e.chunk ?? 0),
            t
          );
        },
        fromAmino(e) {
          let t = ep();
          return (
            void 0 !== e.height &&
              null !== e.height &&
              (t.height = BigInt(e.height)),
            void 0 !== e.format && null !== e.format && (t.format = e.format),
            void 0 !== e.chunk && null !== e.chunk && (t.chunk = e.chunk),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.height = e.height !== BigInt(0) ? e.height.toString() : void 0),
            (t.format = 0 === e.format ? void 0 : e.format),
            (t.chunk = 0 === e.chunk ? void 0 : e.chunk),
            t
          );
        },
        fromAminoMsg: (e) => eu.fromAmino(e.value),
        fromProtoMsg: (e) => eu.decode(e.value),
        toProto: (e) => eu.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
          value: eu.encode(e).finish(),
        }),
      };
      function ec() {
        return { index: 0, chunk: new Uint8Array(), sender: "" };
      }
      A.q.register(eu.typeUrl, eu);
      let em = {
        typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
        is: (e) =>
          e &&
          (e.$typeUrl === em.typeUrl ||
            ("number" == typeof e.index &&
              (e.chunk instanceof Uint8Array || "string" == typeof e.chunk) &&
              "string" == typeof e.sender)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === em.typeUrl ||
            ("number" == typeof e.index &&
              (e.chunk instanceof Uint8Array || "string" == typeof e.chunk) &&
              "string" == typeof e.sender)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === em.typeUrl ||
            ("number" == typeof e.index &&
              (e.chunk instanceof Uint8Array || "string" == typeof e.chunk) &&
              "string" == typeof e.sender)),
        encode: (e, t = v.Lt.create()) => (
          0 !== e.index && t.uint32(8).uint32(e.index),
          0 !== e.chunk.length && t.uint32(18).bytes(e.chunk),
          "" !== e.sender && t.uint32(26).string(e.sender),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = ec();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.index = o.uint32();
                break;
              case 2:
                n.chunk = o.bytes();
                break;
              case 3:
                n.sender = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = ec();
          return (
            (t.index = e.index ?? 0),
            (t.chunk = e.chunk ?? new Uint8Array()),
            (t.sender = e.sender ?? ""),
            t
          );
        },
        fromAmino(e) {
          let t = ec();
          return (
            void 0 !== e.index && null !== e.index && (t.index = e.index),
            void 0 !== e.chunk &&
              null !== e.chunk &&
              (t.chunk = (0, U.jm)(e.chunk)),
            void 0 !== e.sender && null !== e.sender && (t.sender = e.sender),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.index = 0 === e.index ? void 0 : e.index),
            (t.chunk = e.chunk ? (0, U.Uz)(e.chunk) : void 0),
            (t.sender = "" === e.sender ? void 0 : e.sender),
            t
          );
        },
        fromAminoMsg: (e) => em.fromAmino(e.value),
        fromProtoMsg: (e) => em.decode(e.value),
        toProto: (e) => em.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
          value: em.encode(e).finish(),
        }),
      };
      function eh() {
        return {
          maxTxBytes: BigInt(0),
          txs: [],
          localLastCommit: e3.fromPartial({}),
          misbehavior: [],
          height: BigInt(0),
          time: new Date(),
          nextValidatorsHash: new Uint8Array(),
          proposerAddress: new Uint8Array(),
        };
      }
      A.q.register(em.typeUrl, em);
      let ef = {
        typeUrl: "/tendermint.abci.RequestPrepareProposal",
        is: (e) =>
          e &&
          (e.$typeUrl === ef.typeUrl ||
            ("bigint" == typeof e.maxTxBytes &&
              Array.isArray(e.txs) &&
              (!e.txs.length ||
                e.txs[0] instanceof Uint8Array ||
                "string" == typeof e.txs[0]) &&
              e3.is(e.localLastCommit) &&
              Array.isArray(e.misbehavior) &&
              (!e.misbehavior.length || tl.is(e.misbehavior[0])) &&
              "bigint" == typeof e.height &&
              m.Timestamp.is(e.time) &&
              (e.nextValidatorsHash instanceof Uint8Array ||
                "string" == typeof e.nextValidatorsHash) &&
              (e.proposerAddress instanceof Uint8Array ||
                "string" == typeof e.proposerAddress))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === ef.typeUrl ||
            ("bigint" == typeof e.max_tx_bytes &&
              Array.isArray(e.txs) &&
              (!e.txs.length ||
                e.txs[0] instanceof Uint8Array ||
                "string" == typeof e.txs[0]) &&
              e3.isSDK(e.local_last_commit) &&
              Array.isArray(e.misbehavior) &&
              (!e.misbehavior.length || tl.isSDK(e.misbehavior[0])) &&
              "bigint" == typeof e.height &&
              m.Timestamp.isSDK(e.time) &&
              (e.next_validators_hash instanceof Uint8Array ||
                "string" == typeof e.next_validators_hash) &&
              (e.proposer_address instanceof Uint8Array ||
                "string" == typeof e.proposer_address))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === ef.typeUrl ||
            ("bigint" == typeof e.max_tx_bytes &&
              Array.isArray(e.txs) &&
              (!e.txs.length ||
                e.txs[0] instanceof Uint8Array ||
                "string" == typeof e.txs[0]) &&
              e3.isAmino(e.local_last_commit) &&
              Array.isArray(e.misbehavior) &&
              (!e.misbehavior.length || tl.isAmino(e.misbehavior[0])) &&
              "bigint" == typeof e.height &&
              m.Timestamp.isAmino(e.time) &&
              (e.next_validators_hash instanceof Uint8Array ||
                "string" == typeof e.next_validators_hash) &&
              (e.proposer_address instanceof Uint8Array ||
                "string" == typeof e.proposer_address))),
        encode(e, t = v.Lt.create()) {
          for (let o of (e.maxTxBytes !== BigInt(0) &&
            t.uint32(8).int64(e.maxTxBytes),
          e.txs))
            t.uint32(18).bytes(o);
          for (let o of (void 0 !== e.localLastCommit &&
            e3.encode(e.localLastCommit, t.uint32(26).fork()).ldelim(),
          e.misbehavior))
            tl.encode(o, t.uint32(34).fork()).ldelim();
          return (
            e.height !== BigInt(0) && t.uint32(40).int64(e.height),
            void 0 !== e.time &&
              m.Timestamp.encode(
                (0, U.Uq)(e.time),
                t.uint32(50).fork()
              ).ldelim(),
            0 !== e.nextValidatorsHash.length &&
              t.uint32(58).bytes(e.nextValidatorsHash),
            0 !== e.proposerAddress.length &&
              t.uint32(66).bytes(e.proposerAddress),
            t
          );
        },
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = eh();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.maxTxBytes = o.int64();
                break;
              case 2:
                n.txs.push(o.bytes());
                break;
              case 3:
                n.localLastCommit = e3.decode(o, o.uint32());
                break;
              case 4:
                n.misbehavior.push(tl.decode(o, o.uint32()));
                break;
              case 5:
                n.height = o.int64();
                break;
              case 6:
                n.time = (0, U.Ol)(m.Timestamp.decode(o, o.uint32()));
                break;
              case 7:
                n.nextValidatorsHash = o.bytes();
                break;
              case 8:
                n.proposerAddress = o.bytes();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = eh();
          return (
            (t.maxTxBytes =
              void 0 !== e.maxTxBytes && null !== e.maxTxBytes
                ? BigInt(e.maxTxBytes.toString())
                : BigInt(0)),
            (t.txs = e.txs?.map((e) => e) || []),
            (t.localLastCommit =
              void 0 !== e.localLastCommit && null !== e.localLastCommit
                ? e3.fromPartial(e.localLastCommit)
                : void 0),
            (t.misbehavior =
              e.misbehavior?.map((e) => tl.fromPartial(e)) || []),
            (t.height =
              void 0 !== e.height && null !== e.height
                ? BigInt(e.height.toString())
                : BigInt(0)),
            (t.time = e.time ?? void 0),
            (t.nextValidatorsHash = e.nextValidatorsHash ?? new Uint8Array()),
            (t.proposerAddress = e.proposerAddress ?? new Uint8Array()),
            t
          );
        },
        fromAmino(e) {
          let t = eh();
          return (
            void 0 !== e.max_tx_bytes &&
              null !== e.max_tx_bytes &&
              (t.maxTxBytes = BigInt(e.max_tx_bytes)),
            (t.txs = e.txs?.map((e) => U.jm(e)) || []),
            void 0 !== e.local_last_commit &&
              null !== e.local_last_commit &&
              (t.localLastCommit = e3.fromAmino(e.local_last_commit)),
            (t.misbehavior = e.misbehavior?.map((e) => tl.fromAmino(e)) || []),
            void 0 !== e.height &&
              null !== e.height &&
              (t.height = BigInt(e.height)),
            void 0 !== e.time &&
              null !== e.time &&
              (t.time = (0, U.Ol)(m.Timestamp.fromAmino(e.time))),
            void 0 !== e.next_validators_hash &&
              null !== e.next_validators_hash &&
              (t.nextValidatorsHash = (0, U.jm)(e.next_validators_hash)),
            void 0 !== e.proposer_address &&
              null !== e.proposer_address &&
              (t.proposerAddress = (0, U.jm)(e.proposer_address)),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.max_tx_bytes =
              e.maxTxBytes !== BigInt(0) ? e.maxTxBytes.toString() : void 0),
            e.txs ? (t.txs = e.txs.map((e) => (0, U.Uz)(e))) : (t.txs = e.txs),
            (t.local_last_commit = e.localLastCommit
              ? e3.toAmino(e.localLastCommit)
              : void 0),
            e.misbehavior
              ? (t.misbehavior = e.misbehavior.map((e) =>
                  e ? tl.toAmino(e) : void 0
                ))
              : (t.misbehavior = e.misbehavior),
            (t.height = e.height !== BigInt(0) ? e.height.toString() : void 0),
            (t.time = e.time ? m.Timestamp.toAmino((0, U.Uq)(e.time)) : void 0),
            (t.next_validators_hash = e.nextValidatorsHash
              ? (0, U.Uz)(e.nextValidatorsHash)
              : void 0),
            (t.proposer_address = e.proposerAddress
              ? (0, U.Uz)(e.proposerAddress)
              : void 0),
            t
          );
        },
        fromAminoMsg: (e) => ef.fromAmino(e.value),
        fromProtoMsg: (e) => ef.decode(e.value),
        toProto: (e) => ef.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.RequestPrepareProposal",
          value: ef.encode(e).finish(),
        }),
      };
      function ey() {
        return {
          txs: [],
          proposedLastCommit: e0.fromPartial({}),
          misbehavior: [],
          hash: new Uint8Array(),
          height: BigInt(0),
          time: new Date(),
          nextValidatorsHash: new Uint8Array(),
          proposerAddress: new Uint8Array(),
        };
      }
      A.q.register(ef.typeUrl, ef);
      let eg = {
        typeUrl: "/tendermint.abci.RequestProcessProposal",
        is: (e) =>
          e &&
          (e.$typeUrl === eg.typeUrl ||
            (Array.isArray(e.txs) &&
              (!e.txs.length ||
                e.txs[0] instanceof Uint8Array ||
                "string" == typeof e.txs[0]) &&
              e0.is(e.proposedLastCommit) &&
              Array.isArray(e.misbehavior) &&
              (!e.misbehavior.length || tl.is(e.misbehavior[0])) &&
              (e.hash instanceof Uint8Array || "string" == typeof e.hash) &&
              "bigint" == typeof e.height &&
              m.Timestamp.is(e.time) &&
              (e.nextValidatorsHash instanceof Uint8Array ||
                "string" == typeof e.nextValidatorsHash) &&
              (e.proposerAddress instanceof Uint8Array ||
                "string" == typeof e.proposerAddress))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === eg.typeUrl ||
            (Array.isArray(e.txs) &&
              (!e.txs.length ||
                e.txs[0] instanceof Uint8Array ||
                "string" == typeof e.txs[0]) &&
              e0.isSDK(e.proposed_last_commit) &&
              Array.isArray(e.misbehavior) &&
              (!e.misbehavior.length || tl.isSDK(e.misbehavior[0])) &&
              (e.hash instanceof Uint8Array || "string" == typeof e.hash) &&
              "bigint" == typeof e.height &&
              m.Timestamp.isSDK(e.time) &&
              (e.next_validators_hash instanceof Uint8Array ||
                "string" == typeof e.next_validators_hash) &&
              (e.proposer_address instanceof Uint8Array ||
                "string" == typeof e.proposer_address))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === eg.typeUrl ||
            (Array.isArray(e.txs) &&
              (!e.txs.length ||
                e.txs[0] instanceof Uint8Array ||
                "string" == typeof e.txs[0]) &&
              e0.isAmino(e.proposed_last_commit) &&
              Array.isArray(e.misbehavior) &&
              (!e.misbehavior.length || tl.isAmino(e.misbehavior[0])) &&
              (e.hash instanceof Uint8Array || "string" == typeof e.hash) &&
              "bigint" == typeof e.height &&
              m.Timestamp.isAmino(e.time) &&
              (e.next_validators_hash instanceof Uint8Array ||
                "string" == typeof e.next_validators_hash) &&
              (e.proposer_address instanceof Uint8Array ||
                "string" == typeof e.proposer_address))),
        encode(e, t = v.Lt.create()) {
          for (let o of e.txs) t.uint32(10).bytes(o);
          for (let o of (void 0 !== e.proposedLastCommit &&
            e0.encode(e.proposedLastCommit, t.uint32(18).fork()).ldelim(),
          e.misbehavior))
            tl.encode(o, t.uint32(26).fork()).ldelim();
          return (
            0 !== e.hash.length && t.uint32(34).bytes(e.hash),
            e.height !== BigInt(0) && t.uint32(40).int64(e.height),
            void 0 !== e.time &&
              m.Timestamp.encode(
                (0, U.Uq)(e.time),
                t.uint32(50).fork()
              ).ldelim(),
            0 !== e.nextValidatorsHash.length &&
              t.uint32(58).bytes(e.nextValidatorsHash),
            0 !== e.proposerAddress.length &&
              t.uint32(66).bytes(e.proposerAddress),
            t
          );
        },
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = ey();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.txs.push(o.bytes());
                break;
              case 2:
                n.proposedLastCommit = e0.decode(o, o.uint32());
                break;
              case 3:
                n.misbehavior.push(tl.decode(o, o.uint32()));
                break;
              case 4:
                n.hash = o.bytes();
                break;
              case 5:
                n.height = o.int64();
                break;
              case 6:
                n.time = (0, U.Ol)(m.Timestamp.decode(o, o.uint32()));
                break;
              case 7:
                n.nextValidatorsHash = o.bytes();
                break;
              case 8:
                n.proposerAddress = o.bytes();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = ey();
          return (
            (t.txs = e.txs?.map((e) => e) || []),
            (t.proposedLastCommit =
              void 0 !== e.proposedLastCommit && null !== e.proposedLastCommit
                ? e0.fromPartial(e.proposedLastCommit)
                : void 0),
            (t.misbehavior =
              e.misbehavior?.map((e) => tl.fromPartial(e)) || []),
            (t.hash = e.hash ?? new Uint8Array()),
            (t.height =
              void 0 !== e.height && null !== e.height
                ? BigInt(e.height.toString())
                : BigInt(0)),
            (t.time = e.time ?? void 0),
            (t.nextValidatorsHash = e.nextValidatorsHash ?? new Uint8Array()),
            (t.proposerAddress = e.proposerAddress ?? new Uint8Array()),
            t
          );
        },
        fromAmino(e) {
          let t = ey();
          return (
            (t.txs = e.txs?.map((e) => U.jm(e)) || []),
            void 0 !== e.proposed_last_commit &&
              null !== e.proposed_last_commit &&
              (t.proposedLastCommit = e0.fromAmino(e.proposed_last_commit)),
            (t.misbehavior = e.misbehavior?.map((e) => tl.fromAmino(e)) || []),
            void 0 !== e.hash &&
              null !== e.hash &&
              (t.hash = (0, U.jm)(e.hash)),
            void 0 !== e.height &&
              null !== e.height &&
              (t.height = BigInt(e.height)),
            void 0 !== e.time &&
              null !== e.time &&
              (t.time = (0, U.Ol)(m.Timestamp.fromAmino(e.time))),
            void 0 !== e.next_validators_hash &&
              null !== e.next_validators_hash &&
              (t.nextValidatorsHash = (0, U.jm)(e.next_validators_hash)),
            void 0 !== e.proposer_address &&
              null !== e.proposer_address &&
              (t.proposerAddress = (0, U.jm)(e.proposer_address)),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            e.txs ? (t.txs = e.txs.map((e) => (0, U.Uz)(e))) : (t.txs = e.txs),
            (t.proposed_last_commit = e.proposedLastCommit
              ? e0.toAmino(e.proposedLastCommit)
              : void 0),
            e.misbehavior
              ? (t.misbehavior = e.misbehavior.map((e) =>
                  e ? tl.toAmino(e) : void 0
                ))
              : (t.misbehavior = e.misbehavior),
            (t.hash = e.hash ? (0, U.Uz)(e.hash) : void 0),
            (t.height = e.height !== BigInt(0) ? e.height.toString() : void 0),
            (t.time = e.time ? m.Timestamp.toAmino((0, U.Uq)(e.time)) : void 0),
            (t.next_validators_hash = e.nextValidatorsHash
              ? (0, U.Uz)(e.nextValidatorsHash)
              : void 0),
            (t.proposer_address = e.proposerAddress
              ? (0, U.Uz)(e.proposerAddress)
              : void 0),
            t
          );
        },
        fromAminoMsg: (e) => eg.fromAmino(e.value),
        fromProtoMsg: (e) => eg.decode(e.value),
        toProto: (e) => eg.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.RequestProcessProposal",
          value: eg.encode(e).finish(),
        }),
      };
      function ev() {
        return {
          exception: void 0,
          echo: void 0,
          flush: void 0,
          info: void 0,
          initChain: void 0,
          query: void 0,
          beginBlock: void 0,
          checkTx: void 0,
          deliverTx: void 0,
          endBlock: void 0,
          commit: void 0,
          listSnapshots: void 0,
          offerSnapshot: void 0,
          loadSnapshotChunk: void 0,
          applySnapshotChunk: void 0,
          prepareProposal: void 0,
          processProposal: void 0,
        };
      }
      A.q.register(eg.typeUrl, eg);
      let eA = {
        typeUrl: "/tendermint.abci.Response",
        is: (e) => e && e.$typeUrl === eA.typeUrl,
        isSDK: (e) => e && e.$typeUrl === eA.typeUrl,
        isAmino: (e) => e && e.$typeUrl === eA.typeUrl,
        encode: (e, t = v.Lt.create()) => (
          void 0 !== e.exception &&
            ek.encode(e.exception, t.uint32(10).fork()).ldelim(),
          void 0 !== e.echo && eP.encode(e.echo, t.uint32(18).fork()).ldelim(),
          void 0 !== e.flush &&
            e_.encode(e.flush, t.uint32(26).fork()).ldelim(),
          void 0 !== e.info && eS.encode(e.info, t.uint32(34).fork()).ldelim(),
          void 0 !== e.initChain &&
            eT.encode(e.initChain, t.uint32(50).fork()).ldelim(),
          void 0 !== e.query &&
            eI.encode(e.query, t.uint32(58).fork()).ldelim(),
          void 0 !== e.beginBlock &&
            eR.encode(e.beginBlock, t.uint32(66).fork()).ldelim(),
          void 0 !== e.checkTx &&
            eM.encode(e.checkTx, t.uint32(74).fork()).ldelim(),
          void 0 !== e.deliverTx &&
            eD.encode(e.deliverTx, t.uint32(82).fork()).ldelim(),
          void 0 !== e.endBlock &&
            eq.encode(e.endBlock, t.uint32(90).fork()).ldelim(),
          void 0 !== e.commit &&
            eO.encode(e.commit, t.uint32(98).fork()).ldelim(),
          void 0 !== e.listSnapshots &&
            eL.encode(e.listSnapshots, t.uint32(106).fork()).ldelim(),
          void 0 !== e.offerSnapshot &&
            eW.encode(e.offerSnapshot, t.uint32(114).fork()).ldelim(),
          void 0 !== e.loadSnapshotChunk &&
            ez.encode(e.loadSnapshotChunk, t.uint32(122).fork()).ldelim(),
          void 0 !== e.applySnapshotChunk &&
            eG.encode(e.applySnapshotChunk, t.uint32(130).fork()).ldelim(),
          void 0 !== e.prepareProposal &&
            eF.encode(e.prepareProposal, t.uint32(138).fork()).ldelim(),
          void 0 !== e.processProposal &&
            eQ.encode(e.processProposal, t.uint32(146).fork()).ldelim(),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = ev();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.exception = ek.decode(o, o.uint32());
                break;
              case 2:
                n.echo = eP.decode(o, o.uint32());
                break;
              case 3:
                n.flush = e_.decode(o, o.uint32());
                break;
              case 4:
                n.info = eS.decode(o, o.uint32());
                break;
              case 6:
                n.initChain = eT.decode(o, o.uint32());
                break;
              case 7:
                n.query = eI.decode(o, o.uint32());
                break;
              case 8:
                n.beginBlock = eR.decode(o, o.uint32());
                break;
              case 9:
                n.checkTx = eM.decode(o, o.uint32());
                break;
              case 10:
                n.deliverTx = eD.decode(o, o.uint32());
                break;
              case 11:
                n.endBlock = eq.decode(o, o.uint32());
                break;
              case 12:
                n.commit = eO.decode(o, o.uint32());
                break;
              case 13:
                n.listSnapshots = eL.decode(o, o.uint32());
                break;
              case 14:
                n.offerSnapshot = eW.decode(o, o.uint32());
                break;
              case 15:
                n.loadSnapshotChunk = ez.decode(o, o.uint32());
                break;
              case 16:
                n.applySnapshotChunk = eG.decode(o, o.uint32());
                break;
              case 17:
                n.prepareProposal = eF.decode(o, o.uint32());
                break;
              case 18:
                n.processProposal = eQ.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = ev();
          return (
            (t.exception =
              void 0 !== e.exception && null !== e.exception
                ? ek.fromPartial(e.exception)
                : void 0),
            (t.echo =
              void 0 !== e.echo && null !== e.echo
                ? eP.fromPartial(e.echo)
                : void 0),
            (t.flush =
              void 0 !== e.flush && null !== e.flush
                ? e_.fromPartial(e.flush)
                : void 0),
            (t.info =
              void 0 !== e.info && null !== e.info
                ? eS.fromPartial(e.info)
                : void 0),
            (t.initChain =
              void 0 !== e.initChain && null !== e.initChain
                ? eT.fromPartial(e.initChain)
                : void 0),
            (t.query =
              void 0 !== e.query && null !== e.query
                ? eI.fromPartial(e.query)
                : void 0),
            (t.beginBlock =
              void 0 !== e.beginBlock && null !== e.beginBlock
                ? eR.fromPartial(e.beginBlock)
                : void 0),
            (t.checkTx =
              void 0 !== e.checkTx && null !== e.checkTx
                ? eM.fromPartial(e.checkTx)
                : void 0),
            (t.deliverTx =
              void 0 !== e.deliverTx && null !== e.deliverTx
                ? eD.fromPartial(e.deliverTx)
                : void 0),
            (t.endBlock =
              void 0 !== e.endBlock && null !== e.endBlock
                ? eq.fromPartial(e.endBlock)
                : void 0),
            (t.commit =
              void 0 !== e.commit && null !== e.commit
                ? eO.fromPartial(e.commit)
                : void 0),
            (t.listSnapshots =
              void 0 !== e.listSnapshots && null !== e.listSnapshots
                ? eL.fromPartial(e.listSnapshots)
                : void 0),
            (t.offerSnapshot =
              void 0 !== e.offerSnapshot && null !== e.offerSnapshot
                ? eW.fromPartial(e.offerSnapshot)
                : void 0),
            (t.loadSnapshotChunk =
              void 0 !== e.loadSnapshotChunk && null !== e.loadSnapshotChunk
                ? ez.fromPartial(e.loadSnapshotChunk)
                : void 0),
            (t.applySnapshotChunk =
              void 0 !== e.applySnapshotChunk && null !== e.applySnapshotChunk
                ? eG.fromPartial(e.applySnapshotChunk)
                : void 0),
            (t.prepareProposal =
              void 0 !== e.prepareProposal && null !== e.prepareProposal
                ? eF.fromPartial(e.prepareProposal)
                : void 0),
            (t.processProposal =
              void 0 !== e.processProposal && null !== e.processProposal
                ? eQ.fromPartial(e.processProposal)
                : void 0),
            t
          );
        },
        fromAmino(e) {
          let t = ev();
          return (
            void 0 !== e.exception &&
              null !== e.exception &&
              (t.exception = ek.fromAmino(e.exception)),
            void 0 !== e.echo &&
              null !== e.echo &&
              (t.echo = eP.fromAmino(e.echo)),
            void 0 !== e.flush &&
              null !== e.flush &&
              (t.flush = e_.fromAmino(e.flush)),
            void 0 !== e.info &&
              null !== e.info &&
              (t.info = eS.fromAmino(e.info)),
            void 0 !== e.init_chain &&
              null !== e.init_chain &&
              (t.initChain = eT.fromAmino(e.init_chain)),
            void 0 !== e.query &&
              null !== e.query &&
              (t.query = eI.fromAmino(e.query)),
            void 0 !== e.begin_block &&
              null !== e.begin_block &&
              (t.beginBlock = eR.fromAmino(e.begin_block)),
            void 0 !== e.check_tx &&
              null !== e.check_tx &&
              (t.checkTx = eM.fromAmino(e.check_tx)),
            void 0 !== e.deliver_tx &&
              null !== e.deliver_tx &&
              (t.deliverTx = eD.fromAmino(e.deliver_tx)),
            void 0 !== e.end_block &&
              null !== e.end_block &&
              (t.endBlock = eq.fromAmino(e.end_block)),
            void 0 !== e.commit &&
              null !== e.commit &&
              (t.commit = eO.fromAmino(e.commit)),
            void 0 !== e.list_snapshots &&
              null !== e.list_snapshots &&
              (t.listSnapshots = eL.fromAmino(e.list_snapshots)),
            void 0 !== e.offer_snapshot &&
              null !== e.offer_snapshot &&
              (t.offerSnapshot = eW.fromAmino(e.offer_snapshot)),
            void 0 !== e.load_snapshot_chunk &&
              null !== e.load_snapshot_chunk &&
              (t.loadSnapshotChunk = ez.fromAmino(e.load_snapshot_chunk)),
            void 0 !== e.apply_snapshot_chunk &&
              null !== e.apply_snapshot_chunk &&
              (t.applySnapshotChunk = eG.fromAmino(e.apply_snapshot_chunk)),
            void 0 !== e.prepare_proposal &&
              null !== e.prepare_proposal &&
              (t.prepareProposal = eF.fromAmino(e.prepare_proposal)),
            void 0 !== e.process_proposal &&
              null !== e.process_proposal &&
              (t.processProposal = eQ.fromAmino(e.process_proposal)),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.exception = e.exception ? ek.toAmino(e.exception) : void 0),
            (t.echo = e.echo ? eP.toAmino(e.echo) : void 0),
            (t.flush = e.flush ? e_.toAmino(e.flush) : void 0),
            (t.info = e.info ? eS.toAmino(e.info) : void 0),
            (t.init_chain = e.initChain ? eT.toAmino(e.initChain) : void 0),
            (t.query = e.query ? eI.toAmino(e.query) : void 0),
            (t.begin_block = e.beginBlock ? eR.toAmino(e.beginBlock) : void 0),
            (t.check_tx = e.checkTx ? eM.toAmino(e.checkTx) : void 0),
            (t.deliver_tx = e.deliverTx ? eD.toAmino(e.deliverTx) : void 0),
            (t.end_block = e.endBlock ? eq.toAmino(e.endBlock) : void 0),
            (t.commit = e.commit ? eO.toAmino(e.commit) : void 0),
            (t.list_snapshots = e.listSnapshots
              ? eL.toAmino(e.listSnapshots)
              : void 0),
            (t.offer_snapshot = e.offerSnapshot
              ? eW.toAmino(e.offerSnapshot)
              : void 0),
            (t.load_snapshot_chunk = e.loadSnapshotChunk
              ? ez.toAmino(e.loadSnapshotChunk)
              : void 0),
            (t.apply_snapshot_chunk = e.applySnapshotChunk
              ? eG.toAmino(e.applySnapshotChunk)
              : void 0),
            (t.prepare_proposal = e.prepareProposal
              ? eF.toAmino(e.prepareProposal)
              : void 0),
            (t.process_proposal = e.processProposal
              ? eQ.toAmino(e.processProposal)
              : void 0),
            t
          );
        },
        fromAminoMsg: (e) => eA.fromAmino(e.value),
        fromProtoMsg: (e) => eA.decode(e.value),
        toProto: (e) => eA.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.Response",
          value: eA.encode(e).finish(),
        }),
      };
      function eU() {
        return { error: "" };
      }
      A.q.register(eA.typeUrl, eA);
      let ek = {
        typeUrl: "/tendermint.abci.ResponseException",
        is: (e) =>
          e && (e.$typeUrl === ek.typeUrl || "string" == typeof e.error),
        isSDK: (e) =>
          e && (e.$typeUrl === ek.typeUrl || "string" == typeof e.error),
        isAmino: (e) =>
          e && (e.$typeUrl === ek.typeUrl || "string" == typeof e.error),
        encode: (e, t = v.Lt.create()) => (
          "" !== e.error && t.uint32(10).string(e.error), t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = eU();
          for (; o.pos < i; ) {
            let e = o.uint32();
            e >>> 3 == 1 ? (n.error = o.string()) : o.skipType(7 & e);
          }
          return n;
        },
        fromPartial(e) {
          let t = eU();
          return (t.error = e.error ?? ""), t;
        },
        fromAmino(e) {
          let t = eU();
          return (
            void 0 !== e.error && null !== e.error && (t.error = e.error), t
          );
        },
        toAmino(e) {
          let t = {};
          return (t.error = "" === e.error ? void 0 : e.error), t;
        },
        fromAminoMsg: (e) => ek.fromAmino(e.value),
        fromProtoMsg: (e) => ek.decode(e.value),
        toProto: (e) => ek.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ResponseException",
          value: ek.encode(e).finish(),
        }),
      };
      function eb() {
        return { message: "" };
      }
      A.q.register(ek.typeUrl, ek);
      let eP = {
        typeUrl: "/tendermint.abci.ResponseEcho",
        is: (e) =>
          e && (e.$typeUrl === eP.typeUrl || "string" == typeof e.message),
        isSDK: (e) =>
          e && (e.$typeUrl === eP.typeUrl || "string" == typeof e.message),
        isAmino: (e) =>
          e && (e.$typeUrl === eP.typeUrl || "string" == typeof e.message),
        encode: (e, t = v.Lt.create()) => (
          "" !== e.message && t.uint32(10).string(e.message), t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = eb();
          for (; o.pos < i; ) {
            let e = o.uint32();
            e >>> 3 == 1 ? (n.message = o.string()) : o.skipType(7 & e);
          }
          return n;
        },
        fromPartial(e) {
          let t = eb();
          return (t.message = e.message ?? ""), t;
        },
        fromAmino(e) {
          let t = eb();
          return (
            void 0 !== e.message &&
              null !== e.message &&
              (t.message = e.message),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (t.message = "" === e.message ? void 0 : e.message), t;
        },
        fromAminoMsg: (e) => eP.fromAmino(e.value),
        fromProtoMsg: (e) => eP.decode(e.value),
        toProto: (e) => eP.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ResponseEcho",
          value: eP.encode(e).finish(),
        }),
      };
      A.q.register(eP.typeUrl, eP);
      let e_ = {
        typeUrl: "/tendermint.abci.ResponseFlush",
        is: (e) => e && e.$typeUrl === e_.typeUrl,
        isSDK: (e) => e && e.$typeUrl === e_.typeUrl,
        isAmino: (e) => e && e.$typeUrl === e_.typeUrl,
        encode: (e, t = v.Lt.create()) => t,
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t;
          for (; o.pos < i; ) {
            let e = o.uint32();
            o.skipType(7 & e);
          }
          return {};
        },
        fromPartial: (e) => ({}),
        fromAmino: (e) => ({}),
        toAmino: (e) => ({}),
        fromAminoMsg: (e) => e_.fromAmino(e.value),
        fromProtoMsg: (e) => e_.decode(e.value),
        toProto: (e) => e_.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ResponseFlush",
          value: e_.encode(e).finish(),
        }),
      };
      function ex() {
        return {
          data: "",
          version: "",
          appVersion: BigInt(0),
          lastBlockHeight: BigInt(0),
          lastBlockAppHash: new Uint8Array(),
        };
      }
      A.q.register(e_.typeUrl, e_);
      let eS = {
        typeUrl: "/tendermint.abci.ResponseInfo",
        is: (e) =>
          e &&
          (e.$typeUrl === eS.typeUrl ||
            ("string" == typeof e.data &&
              "string" == typeof e.version &&
              "bigint" == typeof e.appVersion &&
              "bigint" == typeof e.lastBlockHeight &&
              (e.lastBlockAppHash instanceof Uint8Array ||
                "string" == typeof e.lastBlockAppHash))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === eS.typeUrl ||
            ("string" == typeof e.data &&
              "string" == typeof e.version &&
              "bigint" == typeof e.app_version &&
              "bigint" == typeof e.last_block_height &&
              (e.last_block_app_hash instanceof Uint8Array ||
                "string" == typeof e.last_block_app_hash))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === eS.typeUrl ||
            ("string" == typeof e.data &&
              "string" == typeof e.version &&
              "bigint" == typeof e.app_version &&
              "bigint" == typeof e.last_block_height &&
              (e.last_block_app_hash instanceof Uint8Array ||
                "string" == typeof e.last_block_app_hash))),
        encode: (e, t = v.Lt.create()) => (
          "" !== e.data && t.uint32(10).string(e.data),
          "" !== e.version && t.uint32(18).string(e.version),
          e.appVersion !== BigInt(0) && t.uint32(24).uint64(e.appVersion),
          e.lastBlockHeight !== BigInt(0) &&
            t.uint32(32).int64(e.lastBlockHeight),
          0 !== e.lastBlockAppHash.length &&
            t.uint32(42).bytes(e.lastBlockAppHash),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = ex();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.data = o.string();
                break;
              case 2:
                n.version = o.string();
                break;
              case 3:
                n.appVersion = o.uint64();
                break;
              case 4:
                n.lastBlockHeight = o.int64();
                break;
              case 5:
                n.lastBlockAppHash = o.bytes();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = ex();
          return (
            (t.data = e.data ?? ""),
            (t.version = e.version ?? ""),
            (t.appVersion =
              void 0 !== e.appVersion && null !== e.appVersion
                ? BigInt(e.appVersion.toString())
                : BigInt(0)),
            (t.lastBlockHeight =
              void 0 !== e.lastBlockHeight && null !== e.lastBlockHeight
                ? BigInt(e.lastBlockHeight.toString())
                : BigInt(0)),
            (t.lastBlockAppHash = e.lastBlockAppHash ?? new Uint8Array()),
            t
          );
        },
        fromAmino(e) {
          let t = ex();
          return (
            void 0 !== e.data && null !== e.data && (t.data = e.data),
            void 0 !== e.version &&
              null !== e.version &&
              (t.version = e.version),
            void 0 !== e.app_version &&
              null !== e.app_version &&
              (t.appVersion = BigInt(e.app_version)),
            void 0 !== e.last_block_height &&
              null !== e.last_block_height &&
              (t.lastBlockHeight = BigInt(e.last_block_height)),
            void 0 !== e.last_block_app_hash &&
              null !== e.last_block_app_hash &&
              (t.lastBlockAppHash = (0, U.jm)(e.last_block_app_hash)),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.data = "" === e.data ? void 0 : e.data),
            (t.version = "" === e.version ? void 0 : e.version),
            (t.app_version =
              e.appVersion !== BigInt(0) ? e.appVersion.toString() : void 0),
            (t.last_block_height =
              e.lastBlockHeight !== BigInt(0)
                ? e.lastBlockHeight.toString()
                : void 0),
            (t.last_block_app_hash = e.lastBlockAppHash
              ? (0, U.Uz)(e.lastBlockAppHash)
              : void 0),
            t
          );
        },
        fromAminoMsg: (e) => eS.fromAmino(e.value),
        fromProtoMsg: (e) => eS.decode(e.value),
        toProto: (e) => eS.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ResponseInfo",
          value: eS.encode(e).finish(),
        }),
      };
      function eC() {
        return {
          consensusParams: void 0,
          validators: [],
          appHash: new Uint8Array(),
        };
      }
      A.q.register(eS.typeUrl, eS);
      let eT = {
        typeUrl: "/tendermint.abci.ResponseInitChain",
        is: (e) =>
          e &&
          (e.$typeUrl === eT.typeUrl ||
            (Array.isArray(e.validators) &&
              (!e.validators.length || to.is(e.validators[0])) &&
              (e.appHash instanceof Uint8Array ||
                "string" == typeof e.appHash))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === eT.typeUrl ||
            (Array.isArray(e.validators) &&
              (!e.validators.length || to.isSDK(e.validators[0])) &&
              (e.app_hash instanceof Uint8Array ||
                "string" == typeof e.app_hash))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === eT.typeUrl ||
            (Array.isArray(e.validators) &&
              (!e.validators.length || to.isAmino(e.validators[0])) &&
              (e.app_hash instanceof Uint8Array ||
                "string" == typeof e.app_hash))),
        encode(e, t = v.Lt.create()) {
          for (let o of (void 0 !== e.consensusParams &&
            h.ConsensusParams.encode(
              e.consensusParams,
              t.uint32(10).fork()
            ).ldelim(),
          e.validators))
            to.encode(o, t.uint32(18).fork()).ldelim();
          return 0 !== e.appHash.length && t.uint32(26).bytes(e.appHash), t;
        },
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = eC();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.consensusParams = h.ConsensusParams.decode(o, o.uint32());
                break;
              case 2:
                n.validators.push(to.decode(o, o.uint32()));
                break;
              case 3:
                n.appHash = o.bytes();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = eC();
          return (
            (t.consensusParams =
              void 0 !== e.consensusParams && null !== e.consensusParams
                ? h.ConsensusParams.fromPartial(e.consensusParams)
                : void 0),
            (t.validators = e.validators?.map((e) => to.fromPartial(e)) || []),
            (t.appHash = e.appHash ?? new Uint8Array()),
            t
          );
        },
        fromAmino(e) {
          let t = eC();
          return (
            void 0 !== e.consensus_params &&
              null !== e.consensus_params &&
              (t.consensusParams = h.ConsensusParams.fromAmino(
                e.consensus_params
              )),
            (t.validators = e.validators?.map((e) => to.fromAmino(e)) || []),
            void 0 !== e.app_hash &&
              null !== e.app_hash &&
              (t.appHash = (0, U.jm)(e.app_hash)),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.consensus_params = e.consensusParams
              ? h.ConsensusParams.toAmino(e.consensusParams)
              : void 0),
            e.validators
              ? (t.validators = e.validators.map((e) =>
                  e ? to.toAmino(e) : void 0
                ))
              : (t.validators = e.validators),
            (t.app_hash = e.appHash ? (0, U.Uz)(e.appHash) : void 0),
            t
          );
        },
        fromAminoMsg: (e) => eT.fromAmino(e.value),
        fromProtoMsg: (e) => eT.decode(e.value),
        toProto: (e) => eT.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ResponseInitChain",
          value: eT.encode(e).finish(),
        }),
      };
      function eB() {
        return {
          code: 0,
          log: "",
          info: "",
          index: BigInt(0),
          key: new Uint8Array(),
          value: new Uint8Array(),
          proofOps: void 0,
          height: BigInt(0),
          codespace: "",
        };
      }
      A.q.register(eT.typeUrl, eT);
      let eI = {
        typeUrl: "/tendermint.abci.ResponseQuery",
        is: (e) =>
          e &&
          (e.$typeUrl === eI.typeUrl ||
            ("number" == typeof e.code &&
              "string" == typeof e.log &&
              "string" == typeof e.info &&
              "bigint" == typeof e.index &&
              (e.key instanceof Uint8Array || "string" == typeof e.key) &&
              (e.value instanceof Uint8Array || "string" == typeof e.value) &&
              "bigint" == typeof e.height &&
              "string" == typeof e.codespace)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === eI.typeUrl ||
            ("number" == typeof e.code &&
              "string" == typeof e.log &&
              "string" == typeof e.info &&
              "bigint" == typeof e.index &&
              (e.key instanceof Uint8Array || "string" == typeof e.key) &&
              (e.value instanceof Uint8Array || "string" == typeof e.value) &&
              "bigint" == typeof e.height &&
              "string" == typeof e.codespace)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === eI.typeUrl ||
            ("number" == typeof e.code &&
              "string" == typeof e.log &&
              "string" == typeof e.info &&
              "bigint" == typeof e.index &&
              (e.key instanceof Uint8Array || "string" == typeof e.key) &&
              (e.value instanceof Uint8Array || "string" == typeof e.value) &&
              "bigint" == typeof e.height &&
              "string" == typeof e.codespace)),
        encode: (e, t = v.Lt.create()) => (
          0 !== e.code && t.uint32(8).uint32(e.code),
          "" !== e.log && t.uint32(26).string(e.log),
          "" !== e.info && t.uint32(34).string(e.info),
          e.index !== BigInt(0) && t.uint32(40).int64(e.index),
          0 !== e.key.length && t.uint32(50).bytes(e.key),
          0 !== e.value.length && t.uint32(58).bytes(e.value),
          void 0 !== e.proofOps &&
            y.ProofOps.encode(e.proofOps, t.uint32(66).fork()).ldelim(),
          e.height !== BigInt(0) && t.uint32(72).int64(e.height),
          "" !== e.codespace && t.uint32(82).string(e.codespace),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = eB();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.code = o.uint32();
                break;
              case 3:
                n.log = o.string();
                break;
              case 4:
                n.info = o.string();
                break;
              case 5:
                n.index = o.int64();
                break;
              case 6:
                n.key = o.bytes();
                break;
              case 7:
                n.value = o.bytes();
                break;
              case 8:
                n.proofOps = y.ProofOps.decode(o, o.uint32());
                break;
              case 9:
                n.height = o.int64();
                break;
              case 10:
                n.codespace = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = eB();
          return (
            (t.code = e.code ?? 0),
            (t.log = e.log ?? ""),
            (t.info = e.info ?? ""),
            (t.index =
              void 0 !== e.index && null !== e.index
                ? BigInt(e.index.toString())
                : BigInt(0)),
            (t.key = e.key ?? new Uint8Array()),
            (t.value = e.value ?? new Uint8Array()),
            (t.proofOps =
              void 0 !== e.proofOps && null !== e.proofOps
                ? y.ProofOps.fromPartial(e.proofOps)
                : void 0),
            (t.height =
              void 0 !== e.height && null !== e.height
                ? BigInt(e.height.toString())
                : BigInt(0)),
            (t.codespace = e.codespace ?? ""),
            t
          );
        },
        fromAmino(e) {
          let t = eB();
          return (
            void 0 !== e.code && null !== e.code && (t.code = e.code),
            void 0 !== e.log && null !== e.log && (t.log = e.log),
            void 0 !== e.info && null !== e.info && (t.info = e.info),
            void 0 !== e.index &&
              null !== e.index &&
              (t.index = BigInt(e.index)),
            void 0 !== e.key && null !== e.key && (t.key = (0, U.jm)(e.key)),
            void 0 !== e.value &&
              null !== e.value &&
              (t.value = (0, U.jm)(e.value)),
            void 0 !== e.proof_ops &&
              null !== e.proof_ops &&
              (t.proofOps = y.ProofOps.fromAmino(e.proof_ops)),
            void 0 !== e.height &&
              null !== e.height &&
              (t.height = BigInt(e.height)),
            void 0 !== e.codespace &&
              null !== e.codespace &&
              (t.codespace = e.codespace),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.code = 0 === e.code ? void 0 : e.code),
            (t.log = "" === e.log ? void 0 : e.log),
            (t.info = "" === e.info ? void 0 : e.info),
            (t.index = e.index !== BigInt(0) ? e.index.toString() : void 0),
            (t.key = e.key ? (0, U.Uz)(e.key) : void 0),
            (t.value = e.value ? (0, U.Uz)(e.value) : void 0),
            (t.proof_ops = e.proofOps
              ? y.ProofOps.toAmino(e.proofOps)
              : void 0),
            (t.height = e.height !== BigInt(0) ? e.height.toString() : void 0),
            (t.codespace = "" === e.codespace ? void 0 : e.codespace),
            t
          );
        },
        fromAminoMsg: (e) => eI.fromAmino(e.value),
        fromProtoMsg: (e) => eI.decode(e.value),
        toProto: (e) => eI.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ResponseQuery",
          value: eI.encode(e).finish(),
        }),
      };
      function eE() {
        return { events: [] };
      }
      A.q.register(eI.typeUrl, eI);
      let eR = {
        typeUrl: "/tendermint.abci.ResponseBeginBlock",
        is: (e) =>
          e &&
          (e.$typeUrl === eR.typeUrl ||
            (Array.isArray(e.events) &&
              (!e.events.length || e1.is(e.events[0])))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === eR.typeUrl ||
            (Array.isArray(e.events) &&
              (!e.events.length || e1.isSDK(e.events[0])))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === eR.typeUrl ||
            (Array.isArray(e.events) &&
              (!e.events.length || e1.isAmino(e.events[0])))),
        encode(e, t = v.Lt.create()) {
          for (let o of e.events) e1.encode(o, t.uint32(10).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = eE();
          for (; o.pos < i; ) {
            let e = o.uint32();
            e >>> 3 == 1
              ? n.events.push(e1.decode(o, o.uint32()))
              : o.skipType(7 & e);
          }
          return n;
        },
        fromPartial(e) {
          let t = eE();
          return (t.events = e.events?.map((e) => e1.fromPartial(e)) || []), t;
        },
        fromAmino(e) {
          let t = eE();
          return (t.events = e.events?.map((e) => e1.fromAmino(e)) || []), t;
        },
        toAmino(e) {
          let t = {};
          return (
            e.events
              ? (t.events = e.events.map((e) => (e ? e1.toAmino(e) : void 0)))
              : (t.events = e.events),
            t
          );
        },
        fromAminoMsg: (e) => eR.fromAmino(e.value),
        fromProtoMsg: (e) => eR.decode(e.value),
        toProto: (e) => eR.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ResponseBeginBlock",
          value: eR.encode(e).finish(),
        }),
      };
      function ew() {
        return {
          code: 0,
          data: new Uint8Array(),
          log: "",
          info: "",
          gasWanted: BigInt(0),
          gasUsed: BigInt(0),
          events: [],
          codespace: "",
          sender: "",
          priority: BigInt(0),
          mempoolError: "",
        };
      }
      A.q.register(eR.typeUrl, eR);
      let eM = {
        typeUrl: "/tendermint.abci.ResponseCheckTx",
        is: (e) =>
          e &&
          (e.$typeUrl === eM.typeUrl ||
            ("number" == typeof e.code &&
              (e.data instanceof Uint8Array || "string" == typeof e.data) &&
              "string" == typeof e.log &&
              "string" == typeof e.info &&
              "bigint" == typeof e.gasWanted &&
              "bigint" == typeof e.gasUsed &&
              Array.isArray(e.events) &&
              (!e.events.length || e1.is(e.events[0])) &&
              "string" == typeof e.codespace &&
              "string" == typeof e.sender &&
              "bigint" == typeof e.priority &&
              "string" == typeof e.mempoolError)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === eM.typeUrl ||
            ("number" == typeof e.code &&
              (e.data instanceof Uint8Array || "string" == typeof e.data) &&
              "string" == typeof e.log &&
              "string" == typeof e.info &&
              "bigint" == typeof e.gas_wanted &&
              "bigint" == typeof e.gas_used &&
              Array.isArray(e.events) &&
              (!e.events.length || e1.isSDK(e.events[0])) &&
              "string" == typeof e.codespace &&
              "string" == typeof e.sender &&
              "bigint" == typeof e.priority &&
              "string" == typeof e.mempool_error)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === eM.typeUrl ||
            ("number" == typeof e.code &&
              (e.data instanceof Uint8Array || "string" == typeof e.data) &&
              "string" == typeof e.log &&
              "string" == typeof e.info &&
              "bigint" == typeof e.gas_wanted &&
              "bigint" == typeof e.gas_used &&
              Array.isArray(e.events) &&
              (!e.events.length || e1.isAmino(e.events[0])) &&
              "string" == typeof e.codespace &&
              "string" == typeof e.sender &&
              "bigint" == typeof e.priority &&
              "string" == typeof e.mempool_error)),
        encode(e, t = v.Lt.create()) {
          for (let o of (0 !== e.code && t.uint32(8).uint32(e.code),
          0 !== e.data.length && t.uint32(18).bytes(e.data),
          "" !== e.log && t.uint32(26).string(e.log),
          "" !== e.info && t.uint32(34).string(e.info),
          e.gasWanted !== BigInt(0) && t.uint32(40).int64(e.gasWanted),
          e.gasUsed !== BigInt(0) && t.uint32(48).int64(e.gasUsed),
          e.events))
            e1.encode(o, t.uint32(58).fork()).ldelim();
          return (
            "" !== e.codespace && t.uint32(66).string(e.codespace),
            "" !== e.sender && t.uint32(74).string(e.sender),
            e.priority !== BigInt(0) && t.uint32(80).int64(e.priority),
            "" !== e.mempoolError && t.uint32(90).string(e.mempoolError),
            t
          );
        },
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = ew();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.code = o.uint32();
                break;
              case 2:
                n.data = o.bytes();
                break;
              case 3:
                n.log = o.string();
                break;
              case 4:
                n.info = o.string();
                break;
              case 5:
                n.gasWanted = o.int64();
                break;
              case 6:
                n.gasUsed = o.int64();
                break;
              case 7:
                n.events.push(e1.decode(o, o.uint32()));
                break;
              case 8:
                n.codespace = o.string();
                break;
              case 9:
                n.sender = o.string();
                break;
              case 10:
                n.priority = o.int64();
                break;
              case 11:
                n.mempoolError = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = ew();
          return (
            (t.code = e.code ?? 0),
            (t.data = e.data ?? new Uint8Array()),
            (t.log = e.log ?? ""),
            (t.info = e.info ?? ""),
            (t.gasWanted =
              void 0 !== e.gasWanted && null !== e.gasWanted
                ? BigInt(e.gasWanted.toString())
                : BigInt(0)),
            (t.gasUsed =
              void 0 !== e.gasUsed && null !== e.gasUsed
                ? BigInt(e.gasUsed.toString())
                : BigInt(0)),
            (t.events = e.events?.map((e) => e1.fromPartial(e)) || []),
            (t.codespace = e.codespace ?? ""),
            (t.sender = e.sender ?? ""),
            (t.priority =
              void 0 !== e.priority && null !== e.priority
                ? BigInt(e.priority.toString())
                : BigInt(0)),
            (t.mempoolError = e.mempoolError ?? ""),
            t
          );
        },
        fromAmino(e) {
          let t = ew();
          return (
            void 0 !== e.code && null !== e.code && (t.code = e.code),
            void 0 !== e.data &&
              null !== e.data &&
              (t.data = (0, U.jm)(e.data)),
            void 0 !== e.log && null !== e.log && (t.log = e.log),
            void 0 !== e.info && null !== e.info && (t.info = e.info),
            void 0 !== e.gas_wanted &&
              null !== e.gas_wanted &&
              (t.gasWanted = BigInt(e.gas_wanted)),
            void 0 !== e.gas_used &&
              null !== e.gas_used &&
              (t.gasUsed = BigInt(e.gas_used)),
            (t.events = e.events?.map((e) => e1.fromAmino(e)) || []),
            void 0 !== e.codespace &&
              null !== e.codespace &&
              (t.codespace = e.codespace),
            void 0 !== e.sender && null !== e.sender && (t.sender = e.sender),
            void 0 !== e.priority &&
              null !== e.priority &&
              (t.priority = BigInt(e.priority)),
            void 0 !== e.mempool_error &&
              null !== e.mempool_error &&
              (t.mempoolError = e.mempool_error),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.code = 0 === e.code ? void 0 : e.code),
            (t.data = e.data ? (0, U.Uz)(e.data) : void 0),
            (t.log = "" === e.log ? void 0 : e.log),
            (t.info = "" === e.info ? void 0 : e.info),
            (t.gas_wanted =
              e.gasWanted !== BigInt(0) ? e.gasWanted.toString() : void 0),
            (t.gas_used =
              e.gasUsed !== BigInt(0) ? e.gasUsed.toString() : void 0),
            e.events
              ? (t.events = e.events.map((e) => (e ? e1.toAmino(e) : void 0)))
              : (t.events = e.events),
            (t.codespace = "" === e.codespace ? void 0 : e.codespace),
            (t.sender = "" === e.sender ? void 0 : e.sender),
            (t.priority =
              e.priority !== BigInt(0) ? e.priority.toString() : void 0),
            (t.mempool_error = "" === e.mempoolError ? void 0 : e.mempoolError),
            t
          );
        },
        fromAminoMsg: (e) => eM.fromAmino(e.value),
        fromProtoMsg: (e) => eM.decode(e.value),
        toProto: (e) => eM.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ResponseCheckTx",
          value: eM.encode(e).finish(),
        }),
      };
      function eN() {
        return {
          code: 0,
          data: new Uint8Array(),
          log: "",
          info: "",
          gasWanted: BigInt(0),
          gasUsed: BigInt(0),
          events: [],
          codespace: "",
        };
      }
      A.q.register(eM.typeUrl, eM);
      let eD = {
        typeUrl: "/tendermint.abci.ResponseDeliverTx",
        is: (e) =>
          e &&
          (e.$typeUrl === eD.typeUrl ||
            ("number" == typeof e.code &&
              (e.data instanceof Uint8Array || "string" == typeof e.data) &&
              "string" == typeof e.log &&
              "string" == typeof e.info &&
              "bigint" == typeof e.gasWanted &&
              "bigint" == typeof e.gasUsed &&
              Array.isArray(e.events) &&
              (!e.events.length || e1.is(e.events[0])) &&
              "string" == typeof e.codespace)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === eD.typeUrl ||
            ("number" == typeof e.code &&
              (e.data instanceof Uint8Array || "string" == typeof e.data) &&
              "string" == typeof e.log &&
              "string" == typeof e.info &&
              "bigint" == typeof e.gas_wanted &&
              "bigint" == typeof e.gas_used &&
              Array.isArray(e.events) &&
              (!e.events.length || e1.isSDK(e.events[0])) &&
              "string" == typeof e.codespace)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === eD.typeUrl ||
            ("number" == typeof e.code &&
              (e.data instanceof Uint8Array || "string" == typeof e.data) &&
              "string" == typeof e.log &&
              "string" == typeof e.info &&
              "bigint" == typeof e.gas_wanted &&
              "bigint" == typeof e.gas_used &&
              Array.isArray(e.events) &&
              (!e.events.length || e1.isAmino(e.events[0])) &&
              "string" == typeof e.codespace)),
        encode(e, t = v.Lt.create()) {
          for (let o of (0 !== e.code && t.uint32(8).uint32(e.code),
          0 !== e.data.length && t.uint32(18).bytes(e.data),
          "" !== e.log && t.uint32(26).string(e.log),
          "" !== e.info && t.uint32(34).string(e.info),
          e.gasWanted !== BigInt(0) && t.uint32(40).int64(e.gasWanted),
          e.gasUsed !== BigInt(0) && t.uint32(48).int64(e.gasUsed),
          e.events))
            e1.encode(o, t.uint32(58).fork()).ldelim();
          return "" !== e.codespace && t.uint32(66).string(e.codespace), t;
        },
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = eN();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.code = o.uint32();
                break;
              case 2:
                n.data = o.bytes();
                break;
              case 3:
                n.log = o.string();
                break;
              case 4:
                n.info = o.string();
                break;
              case 5:
                n.gasWanted = o.int64();
                break;
              case 6:
                n.gasUsed = o.int64();
                break;
              case 7:
                n.events.push(e1.decode(o, o.uint32()));
                break;
              case 8:
                n.codespace = o.string();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = eN();
          return (
            (t.code = e.code ?? 0),
            (t.data = e.data ?? new Uint8Array()),
            (t.log = e.log ?? ""),
            (t.info = e.info ?? ""),
            (t.gasWanted =
              void 0 !== e.gasWanted && null !== e.gasWanted
                ? BigInt(e.gasWanted.toString())
                : BigInt(0)),
            (t.gasUsed =
              void 0 !== e.gasUsed && null !== e.gasUsed
                ? BigInt(e.gasUsed.toString())
                : BigInt(0)),
            (t.events = e.events?.map((e) => e1.fromPartial(e)) || []),
            (t.codespace = e.codespace ?? ""),
            t
          );
        },
        fromAmino(e) {
          let t = eN();
          return (
            void 0 !== e.code && null !== e.code && (t.code = e.code),
            void 0 !== e.data &&
              null !== e.data &&
              (t.data = (0, U.jm)(e.data)),
            void 0 !== e.log && null !== e.log && (t.log = e.log),
            void 0 !== e.info && null !== e.info && (t.info = e.info),
            void 0 !== e.gas_wanted &&
              null !== e.gas_wanted &&
              (t.gasWanted = BigInt(e.gas_wanted)),
            void 0 !== e.gas_used &&
              null !== e.gas_used &&
              (t.gasUsed = BigInt(e.gas_used)),
            (t.events = e.events?.map((e) => e1.fromAmino(e)) || []),
            void 0 !== e.codespace &&
              null !== e.codespace &&
              (t.codespace = e.codespace),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.code = 0 === e.code ? void 0 : e.code),
            (t.data = e.data ? (0, U.Uz)(e.data) : void 0),
            (t.log = "" === e.log ? void 0 : e.log),
            (t.info = "" === e.info ? void 0 : e.info),
            (t.gas_wanted =
              e.gasWanted !== BigInt(0) ? e.gasWanted.toString() : void 0),
            (t.gas_used =
              e.gasUsed !== BigInt(0) ? e.gasUsed.toString() : void 0),
            e.events
              ? (t.events = e.events.map((e) => (e ? e1.toAmino(e) : void 0)))
              : (t.events = e.events),
            (t.codespace = "" === e.codespace ? void 0 : e.codespace),
            t
          );
        },
        fromAminoMsg: (e) => eD.fromAmino(e.value),
        fromProtoMsg: (e) => eD.decode(e.value),
        toProto: (e) => eD.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ResponseDeliverTx",
          value: eD.encode(e).finish(),
        }),
      };
      function e$() {
        return {
          validatorUpdates: [],
          consensusParamUpdates: void 0,
          events: [],
        };
      }
      A.q.register(eD.typeUrl, eD);
      let eq = {
        typeUrl: "/tendermint.abci.ResponseEndBlock",
        is: (e) =>
          e &&
          (e.$typeUrl === eq.typeUrl ||
            (Array.isArray(e.validatorUpdates) &&
              (!e.validatorUpdates.length || to.is(e.validatorUpdates[0])) &&
              Array.isArray(e.events) &&
              (!e.events.length || e1.is(e.events[0])))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === eq.typeUrl ||
            (Array.isArray(e.validator_updates) &&
              (!e.validator_updates.length ||
                to.isSDK(e.validator_updates[0])) &&
              Array.isArray(e.events) &&
              (!e.events.length || e1.isSDK(e.events[0])))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === eq.typeUrl ||
            (Array.isArray(e.validator_updates) &&
              (!e.validator_updates.length ||
                to.isAmino(e.validator_updates[0])) &&
              Array.isArray(e.events) &&
              (!e.events.length || e1.isAmino(e.events[0])))),
        encode(e, t = v.Lt.create()) {
          for (let o of e.validatorUpdates)
            to.encode(o, t.uint32(10).fork()).ldelim();
          for (let o of (void 0 !== e.consensusParamUpdates &&
            h.ConsensusParams.encode(
              e.consensusParamUpdates,
              t.uint32(18).fork()
            ).ldelim(),
          e.events))
            e1.encode(o, t.uint32(26).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = e$();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.validatorUpdates.push(to.decode(o, o.uint32()));
                break;
              case 2:
                n.consensusParamUpdates = h.ConsensusParams.decode(
                  o,
                  o.uint32()
                );
                break;
              case 3:
                n.events.push(e1.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = e$();
          return (
            (t.validatorUpdates =
              e.validatorUpdates?.map((e) => to.fromPartial(e)) || []),
            (t.consensusParamUpdates =
              void 0 !== e.consensusParamUpdates &&
              null !== e.consensusParamUpdates
                ? h.ConsensusParams.fromPartial(e.consensusParamUpdates)
                : void 0),
            (t.events = e.events?.map((e) => e1.fromPartial(e)) || []),
            t
          );
        },
        fromAmino(e) {
          let t = e$();
          return (
            (t.validatorUpdates =
              e.validator_updates?.map((e) => to.fromAmino(e)) || []),
            void 0 !== e.consensus_param_updates &&
              null !== e.consensus_param_updates &&
              (t.consensusParamUpdates = h.ConsensusParams.fromAmino(
                e.consensus_param_updates
              )),
            (t.events = e.events?.map((e) => e1.fromAmino(e)) || []),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            e.validatorUpdates
              ? (t.validator_updates = e.validatorUpdates.map((e) =>
                  e ? to.toAmino(e) : void 0
                ))
              : (t.validator_updates = e.validatorUpdates),
            (t.consensus_param_updates = e.consensusParamUpdates
              ? h.ConsensusParams.toAmino(e.consensusParamUpdates)
              : void 0),
            e.events
              ? (t.events = e.events.map((e) => (e ? e1.toAmino(e) : void 0)))
              : (t.events = e.events),
            t
          );
        },
        fromAminoMsg: (e) => eq.fromAmino(e.value),
        fromProtoMsg: (e) => eq.decode(e.value),
        toProto: (e) => eq.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ResponseEndBlock",
          value: eq.encode(e).finish(),
        }),
      };
      function eK() {
        return { data: new Uint8Array(), retainHeight: BigInt(0) };
      }
      A.q.register(eq.typeUrl, eq);
      let eO = {
        typeUrl: "/tendermint.abci.ResponseCommit",
        is: (e) =>
          e &&
          (e.$typeUrl === eO.typeUrl ||
            ((e.data instanceof Uint8Array || "string" == typeof e.data) &&
              "bigint" == typeof e.retainHeight)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === eO.typeUrl ||
            ((e.data instanceof Uint8Array || "string" == typeof e.data) &&
              "bigint" == typeof e.retain_height)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === eO.typeUrl ||
            ((e.data instanceof Uint8Array || "string" == typeof e.data) &&
              "bigint" == typeof e.retain_height)),
        encode: (e, t = v.Lt.create()) => (
          0 !== e.data.length && t.uint32(18).bytes(e.data),
          e.retainHeight !== BigInt(0) && t.uint32(24).int64(e.retainHeight),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = eK();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 2:
                n.data = o.bytes();
                break;
              case 3:
                n.retainHeight = o.int64();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = eK();
          return (
            (t.data = e.data ?? new Uint8Array()),
            (t.retainHeight =
              void 0 !== e.retainHeight && null !== e.retainHeight
                ? BigInt(e.retainHeight.toString())
                : BigInt(0)),
            t
          );
        },
        fromAmino(e) {
          let t = eK();
          return (
            void 0 !== e.data &&
              null !== e.data &&
              (t.data = (0, U.jm)(e.data)),
            void 0 !== e.retain_height &&
              null !== e.retain_height &&
              (t.retainHeight = BigInt(e.retain_height)),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.data = e.data ? (0, U.Uz)(e.data) : void 0),
            (t.retain_height =
              e.retainHeight !== BigInt(0)
                ? e.retainHeight.toString()
                : void 0),
            t
          );
        },
        fromAminoMsg: (e) => eO.fromAmino(e.value),
        fromProtoMsg: (e) => eO.decode(e.value),
        toProto: (e) => eO.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ResponseCommit",
          value: eO.encode(e).finish(),
        }),
      };
      function eH() {
        return { snapshots: [] };
      }
      A.q.register(eO.typeUrl, eO);
      let eL = {
        typeUrl: "/tendermint.abci.ResponseListSnapshots",
        is: (e) =>
          e &&
          (e.$typeUrl === eL.typeUrl ||
            (Array.isArray(e.snapshots) &&
              (!e.snapshots.length || tp.is(e.snapshots[0])))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === eL.typeUrl ||
            (Array.isArray(e.snapshots) &&
              (!e.snapshots.length || tp.isSDK(e.snapshots[0])))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === eL.typeUrl ||
            (Array.isArray(e.snapshots) &&
              (!e.snapshots.length || tp.isAmino(e.snapshots[0])))),
        encode(e, t = v.Lt.create()) {
          for (let o of e.snapshots) tp.encode(o, t.uint32(10).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = eH();
          for (; o.pos < i; ) {
            let e = o.uint32();
            e >>> 3 == 1
              ? n.snapshots.push(tp.decode(o, o.uint32()))
              : o.skipType(7 & e);
          }
          return n;
        },
        fromPartial(e) {
          let t = eH();
          return (
            (t.snapshots = e.snapshots?.map((e) => tp.fromPartial(e)) || []), t
          );
        },
        fromAmino(e) {
          let t = eH();
          return (
            (t.snapshots = e.snapshots?.map((e) => tp.fromAmino(e)) || []), t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            e.snapshots
              ? (t.snapshots = e.snapshots.map((e) =>
                  e ? tp.toAmino(e) : void 0
                ))
              : (t.snapshots = e.snapshots),
            t
          );
        },
        fromAminoMsg: (e) => eL.fromAmino(e.value),
        fromProtoMsg: (e) => eL.decode(e.value),
        toProto: (e) => eL.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ResponseListSnapshots",
          value: eL.encode(e).finish(),
        }),
      };
      function eV() {
        return { result: 0 };
      }
      A.q.register(eL.typeUrl, eL);
      let eW = {
        typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
        is: (e) => e && (e.$typeUrl === eW.typeUrl || (0, U.DM)(e.result)),
        isSDK: (e) => e && (e.$typeUrl === eW.typeUrl || (0, U.DM)(e.result)),
        isAmino: (e) => e && (e.$typeUrl === eW.typeUrl || (0, U.DM)(e.result)),
        encode: (e, t = v.Lt.create()) => (
          0 !== e.result && t.uint32(8).int32(e.result), t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = eV();
          for (; o.pos < i; ) {
            let e = o.uint32();
            e >>> 3 == 1 ? (n.result = o.int32()) : o.skipType(7 & e);
          }
          return n;
        },
        fromPartial(e) {
          let t = eV();
          return (t.result = e.result ?? 0), t;
        },
        fromAmino(e) {
          let t = eV();
          return (
            void 0 !== e.result && null !== e.result && (t.result = e.result), t
          );
        },
        toAmino(e) {
          let t = {};
          return (t.result = 0 === e.result ? void 0 : e.result), t;
        },
        fromAminoMsg: (e) => eW.fromAmino(e.value),
        fromProtoMsg: (e) => eW.decode(e.value),
        toProto: (e) => eW.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
          value: eW.encode(e).finish(),
        }),
      };
      function ej() {
        return { chunk: new Uint8Array() };
      }
      A.q.register(eW.typeUrl, eW);
      let ez = {
        typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
        is: (e) =>
          e &&
          (e.$typeUrl === ez.typeUrl ||
            e.chunk instanceof Uint8Array ||
            "string" == typeof e.chunk),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === ez.typeUrl ||
            e.chunk instanceof Uint8Array ||
            "string" == typeof e.chunk),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === ez.typeUrl ||
            e.chunk instanceof Uint8Array ||
            "string" == typeof e.chunk),
        encode: (e, t = v.Lt.create()) => (
          0 !== e.chunk.length && t.uint32(10).bytes(e.chunk), t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = ej();
          for (; o.pos < i; ) {
            let e = o.uint32();
            e >>> 3 == 1 ? (n.chunk = o.bytes()) : o.skipType(7 & e);
          }
          return n;
        },
        fromPartial(e) {
          let t = ej();
          return (t.chunk = e.chunk ?? new Uint8Array()), t;
        },
        fromAmino(e) {
          let t = ej();
          return (
            void 0 !== e.chunk &&
              null !== e.chunk &&
              (t.chunk = (0, U.jm)(e.chunk)),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (t.chunk = e.chunk ? (0, U.Uz)(e.chunk) : void 0), t;
        },
        fromAminoMsg: (e) => ez.fromAmino(e.value),
        fromProtoMsg: (e) => ez.decode(e.value),
        toProto: (e) => ez.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
          value: ez.encode(e).finish(),
        }),
      };
      function eJ() {
        return { result: 0, refetchChunks: [], rejectSenders: [] };
      }
      A.q.register(ez.typeUrl, ez);
      let eG = {
        typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
        is: (e) =>
          e &&
          (e.$typeUrl === eG.typeUrl ||
            ((0, U.DM)(e.result) &&
              Array.isArray(e.refetchChunks) &&
              (!e.refetchChunks.length ||
                "number" == typeof e.refetchChunks[0]) &&
              Array.isArray(e.rejectSenders) &&
              (!e.rejectSenders.length ||
                "string" == typeof e.rejectSenders[0]))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === eG.typeUrl ||
            ((0, U.DM)(e.result) &&
              Array.isArray(e.refetch_chunks) &&
              (!e.refetch_chunks.length ||
                "number" == typeof e.refetch_chunks[0]) &&
              Array.isArray(e.reject_senders) &&
              (!e.reject_senders.length ||
                "string" == typeof e.reject_senders[0]))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === eG.typeUrl ||
            ((0, U.DM)(e.result) &&
              Array.isArray(e.refetch_chunks) &&
              (!e.refetch_chunks.length ||
                "number" == typeof e.refetch_chunks[0]) &&
              Array.isArray(e.reject_senders) &&
              (!e.reject_senders.length ||
                "string" == typeof e.reject_senders[0]))),
        encode(e, t = v.Lt.create()) {
          for (let o of (0 !== e.result && t.uint32(8).int32(e.result),
          t.uint32(18).fork(),
          e.refetchChunks))
            t.uint32(o);
          for (let o of (t.ldelim(), e.rejectSenders)) t.uint32(26).string(o);
          return t;
        },
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = eJ();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.result = o.int32();
                break;
              case 2:
                if ((7 & e) == 2) {
                  let e = o.uint32() + o.pos;
                  for (; o.pos < e; ) n.refetchChunks.push(o.uint32());
                } else n.refetchChunks.push(o.uint32());
                break;
              case 3:
                n.rejectSenders.push(o.string());
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = eJ();
          return (
            (t.result = e.result ?? 0),
            (t.refetchChunks = e.refetchChunks?.map((e) => e) || []),
            (t.rejectSenders = e.rejectSenders?.map((e) => e) || []),
            t
          );
        },
        fromAmino(e) {
          let t = eJ();
          return (
            void 0 !== e.result && null !== e.result && (t.result = e.result),
            (t.refetchChunks = e.refetch_chunks?.map((e) => e) || []),
            (t.rejectSenders = e.reject_senders?.map((e) => e) || []),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.result = 0 === e.result ? void 0 : e.result),
            e.refetchChunks
              ? (t.refetch_chunks = e.refetchChunks.map((e) => e))
              : (t.refetch_chunks = e.refetchChunks),
            e.rejectSenders
              ? (t.reject_senders = e.rejectSenders.map((e) => e))
              : (t.reject_senders = e.rejectSenders),
            t
          );
        },
        fromAminoMsg: (e) => eG.fromAmino(e.value),
        fromProtoMsg: (e) => eG.decode(e.value),
        toProto: (e) => eG.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
          value: eG.encode(e).finish(),
        }),
      };
      function eZ() {
        return { txs: [] };
      }
      A.q.register(eG.typeUrl, eG);
      let eF = {
        typeUrl: "/tendermint.abci.ResponsePrepareProposal",
        is: (e) =>
          e &&
          (e.$typeUrl === eF.typeUrl ||
            (Array.isArray(e.txs) &&
              (!e.txs.length ||
                e.txs[0] instanceof Uint8Array ||
                "string" == typeof e.txs[0]))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === eF.typeUrl ||
            (Array.isArray(e.txs) &&
              (!e.txs.length ||
                e.txs[0] instanceof Uint8Array ||
                "string" == typeof e.txs[0]))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === eF.typeUrl ||
            (Array.isArray(e.txs) &&
              (!e.txs.length ||
                e.txs[0] instanceof Uint8Array ||
                "string" == typeof e.txs[0]))),
        encode(e, t = v.Lt.create()) {
          for (let o of e.txs) t.uint32(10).bytes(o);
          return t;
        },
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = eZ();
          for (; o.pos < i; ) {
            let e = o.uint32();
            e >>> 3 == 1 ? n.txs.push(o.bytes()) : o.skipType(7 & e);
          }
          return n;
        },
        fromPartial(e) {
          let t = eZ();
          return (t.txs = e.txs?.map((e) => e) || []), t;
        },
        fromAmino(e) {
          let t = eZ();
          return (t.txs = e.txs?.map((e) => U.jm(e)) || []), t;
        },
        toAmino(e) {
          let t = {};
          return (
            e.txs ? (t.txs = e.txs.map((e) => (0, U.Uz)(e))) : (t.txs = e.txs),
            t
          );
        },
        fromAminoMsg: (e) => eF.fromAmino(e.value),
        fromProtoMsg: (e) => eF.decode(e.value),
        toProto: (e) => eF.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ResponsePrepareProposal",
          value: eF.encode(e).finish(),
        }),
      };
      function eY() {
        return { status: 0 };
      }
      A.q.register(eF.typeUrl, eF);
      let eQ = {
        typeUrl: "/tendermint.abci.ResponseProcessProposal",
        is: (e) => e && (e.$typeUrl === eQ.typeUrl || (0, U.DM)(e.status)),
        isSDK: (e) => e && (e.$typeUrl === eQ.typeUrl || (0, U.DM)(e.status)),
        isAmino: (e) => e && (e.$typeUrl === eQ.typeUrl || (0, U.DM)(e.status)),
        encode: (e, t = v.Lt.create()) => (
          0 !== e.status && t.uint32(8).int32(e.status), t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = eY();
          for (; o.pos < i; ) {
            let e = o.uint32();
            e >>> 3 == 1 ? (n.status = o.int32()) : o.skipType(7 & e);
          }
          return n;
        },
        fromPartial(e) {
          let t = eY();
          return (t.status = e.status ?? 0), t;
        },
        fromAmino(e) {
          let t = eY();
          return (
            void 0 !== e.status && null !== e.status && (t.status = e.status), t
          );
        },
        toAmino(e) {
          let t = {};
          return (t.status = 0 === e.status ? void 0 : e.status), t;
        },
        fromAminoMsg: (e) => eQ.fromAmino(e.value),
        fromProtoMsg: (e) => eQ.decode(e.value),
        toProto: (e) => eQ.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ResponseProcessProposal",
          value: eQ.encode(e).finish(),
        }),
      };
      function eX() {
        return { round: 0, votes: [] };
      }
      A.q.register(eQ.typeUrl, eQ);
      let e0 = {
        typeUrl: "/tendermint.abci.CommitInfo",
        is: (e) =>
          e &&
          (e.$typeUrl === e0.typeUrl ||
            ("number" == typeof e.round &&
              Array.isArray(e.votes) &&
              (!e.votes.length || tn.is(e.votes[0])))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === e0.typeUrl ||
            ("number" == typeof e.round &&
              Array.isArray(e.votes) &&
              (!e.votes.length || tn.isSDK(e.votes[0])))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === e0.typeUrl ||
            ("number" == typeof e.round &&
              Array.isArray(e.votes) &&
              (!e.votes.length || tn.isAmino(e.votes[0])))),
        encode(e, t = v.Lt.create()) {
          for (let o of (0 !== e.round && t.uint32(8).int32(e.round), e.votes))
            tn.encode(o, t.uint32(18).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = eX();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.round = o.int32();
                break;
              case 2:
                n.votes.push(tn.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = eX();
          return (
            (t.round = e.round ?? 0),
            (t.votes = e.votes?.map((e) => tn.fromPartial(e)) || []),
            t
          );
        },
        fromAmino(e) {
          let t = eX();
          return (
            void 0 !== e.round && null !== e.round && (t.round = e.round),
            (t.votes = e.votes?.map((e) => tn.fromAmino(e)) || []),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.round = 0 === e.round ? void 0 : e.round),
            e.votes
              ? (t.votes = e.votes.map((e) => (e ? tn.toAmino(e) : void 0)))
              : (t.votes = e.votes),
            t
          );
        },
        fromAminoMsg: (e) => e0.fromAmino(e.value),
        fromProtoMsg: (e) => e0.decode(e.value),
        toProto: (e) => e0.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.CommitInfo",
          value: e0.encode(e).finish(),
        }),
      };
      function e2() {
        return { round: 0, votes: [] };
      }
      A.q.register(e0.typeUrl, e0);
      let e3 = {
        typeUrl: "/tendermint.abci.ExtendedCommitInfo",
        is: (e) =>
          e &&
          (e.$typeUrl === e3.typeUrl ||
            ("number" == typeof e.round &&
              Array.isArray(e.votes) &&
              (!e.votes.length || ts.is(e.votes[0])))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === e3.typeUrl ||
            ("number" == typeof e.round &&
              Array.isArray(e.votes) &&
              (!e.votes.length || ts.isSDK(e.votes[0])))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === e3.typeUrl ||
            ("number" == typeof e.round &&
              Array.isArray(e.votes) &&
              (!e.votes.length || ts.isAmino(e.votes[0])))),
        encode(e, t = v.Lt.create()) {
          for (let o of (0 !== e.round && t.uint32(8).int32(e.round), e.votes))
            ts.encode(o, t.uint32(18).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = e2();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.round = o.int32();
                break;
              case 2:
                n.votes.push(ts.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = e2();
          return (
            (t.round = e.round ?? 0),
            (t.votes = e.votes?.map((e) => ts.fromPartial(e)) || []),
            t
          );
        },
        fromAmino(e) {
          let t = e2();
          return (
            void 0 !== e.round && null !== e.round && (t.round = e.round),
            (t.votes = e.votes?.map((e) => ts.fromAmino(e)) || []),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.round = 0 === e.round ? void 0 : e.round),
            e.votes
              ? (t.votes = e.votes.map((e) => (e ? ts.toAmino(e) : void 0)))
              : (t.votes = e.votes),
            t
          );
        },
        fromAminoMsg: (e) => e3.fromAmino(e.value),
        fromProtoMsg: (e) => e3.decode(e.value),
        toProto: (e) => e3.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ExtendedCommitInfo",
          value: e3.encode(e).finish(),
        }),
      };
      function e8() {
        return { type: "", attributes: [] };
      }
      A.q.register(e3.typeUrl, e3);
      let e1 = {
        typeUrl: "/tendermint.abci.Event",
        is: (e) =>
          e &&
          (e.$typeUrl === e1.typeUrl ||
            ("string" == typeof e.type &&
              Array.isArray(e.attributes) &&
              (!e.attributes.length || e6.is(e.attributes[0])))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === e1.typeUrl ||
            ("string" == typeof e.type &&
              Array.isArray(e.attributes) &&
              (!e.attributes.length || e6.isSDK(e.attributes[0])))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === e1.typeUrl ||
            ("string" == typeof e.type &&
              Array.isArray(e.attributes) &&
              (!e.attributes.length || e6.isAmino(e.attributes[0])))),
        encode(e, t = v.Lt.create()) {
          for (let o of ("" !== e.type && t.uint32(10).string(e.type),
          e.attributes))
            e6.encode(o, t.uint32(18).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = e8();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.type = o.string();
                break;
              case 2:
                n.attributes.push(e6.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = e8();
          return (
            (t.type = e.type ?? ""),
            (t.attributes = e.attributes?.map((e) => e6.fromPartial(e)) || []),
            t
          );
        },
        fromAmino(e) {
          let t = e8();
          return (
            void 0 !== e.type && null !== e.type && (t.type = e.type),
            (t.attributes = e.attributes?.map((e) => e6.fromAmino(e)) || []),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.type = "" === e.type ? void 0 : e.type),
            e.attributes
              ? (t.attributes = e.attributes.map((e) =>
                  e ? e6.toAmino(e) : void 0
                ))
              : (t.attributes = e.attributes),
            t
          );
        },
        fromAminoMsg: (e) => e1.fromAmino(e.value),
        fromProtoMsg: (e) => e1.decode(e.value),
        toProto: (e) => e1.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.Event",
          value: e1.encode(e).finish(),
        }),
      };
      function e4() {
        return { key: "", value: "", index: !1 };
      }
      A.q.register(e1.typeUrl, e1);
      let e6 = {
        typeUrl: "/tendermint.abci.EventAttribute",
        is: (e) =>
          e &&
          (e.$typeUrl === e6.typeUrl ||
            ("string" == typeof e.key &&
              "string" == typeof e.value &&
              "boolean" == typeof e.index)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === e6.typeUrl ||
            ("string" == typeof e.key &&
              "string" == typeof e.value &&
              "boolean" == typeof e.index)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === e6.typeUrl ||
            ("string" == typeof e.key &&
              "string" == typeof e.value &&
              "boolean" == typeof e.index)),
        encode: (e, t = v.Lt.create()) => (
          "" !== e.key && t.uint32(10).string(e.key),
          "" !== e.value && t.uint32(18).string(e.value),
          !0 === e.index && t.uint32(24).bool(e.index),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = e4();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.key = o.string();
                break;
              case 2:
                n.value = o.string();
                break;
              case 3:
                n.index = o.bool();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = e4();
          return (
            (t.key = e.key ?? ""),
            (t.value = e.value ?? ""),
            (t.index = e.index ?? !1),
            t
          );
        },
        fromAmino(e) {
          let t = e4();
          return (
            void 0 !== e.key && null !== e.key && (t.key = e.key),
            void 0 !== e.value && null !== e.value && (t.value = e.value),
            void 0 !== e.index && null !== e.index && (t.index = e.index),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.key = "" === e.key ? void 0 : e.key),
            (t.value = "" === e.value ? void 0 : e.value),
            (t.index = !1 === e.index ? void 0 : e.index),
            t
          );
        },
        fromAminoMsg: (e) => e6.fromAmino(e.value),
        fromProtoMsg: (e) => e6.decode(e.value),
        toProto: (e) => e6.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.EventAttribute",
          value: e6.encode(e).finish(),
        }),
      };
      function e7() {
        return {
          height: BigInt(0),
          index: 0,
          tx: new Uint8Array(),
          result: eD.fromPartial({}),
        };
      }
      A.q.register(e6.typeUrl, e6);
      let e5 = {
        typeUrl: "/tendermint.abci.TxResult",
        is: (e) =>
          e &&
          (e.$typeUrl === e5.typeUrl ||
            ("bigint" == typeof e.height &&
              "number" == typeof e.index &&
              (e.tx instanceof Uint8Array || "string" == typeof e.tx) &&
              eD.is(e.result))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === e5.typeUrl ||
            ("bigint" == typeof e.height &&
              "number" == typeof e.index &&
              (e.tx instanceof Uint8Array || "string" == typeof e.tx) &&
              eD.isSDK(e.result))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === e5.typeUrl ||
            ("bigint" == typeof e.height &&
              "number" == typeof e.index &&
              (e.tx instanceof Uint8Array || "string" == typeof e.tx) &&
              eD.isAmino(e.result))),
        encode: (e, t = v.Lt.create()) => (
          e.height !== BigInt(0) && t.uint32(8).int64(e.height),
          0 !== e.index && t.uint32(16).uint32(e.index),
          0 !== e.tx.length && t.uint32(26).bytes(e.tx),
          void 0 !== e.result &&
            eD.encode(e.result, t.uint32(34).fork()).ldelim(),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = e7();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.height = o.int64();
                break;
              case 2:
                n.index = o.uint32();
                break;
              case 3:
                n.tx = o.bytes();
                break;
              case 4:
                n.result = eD.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = e7();
          return (
            (t.height =
              void 0 !== e.height && null !== e.height
                ? BigInt(e.height.toString())
                : BigInt(0)),
            (t.index = e.index ?? 0),
            (t.tx = e.tx ?? new Uint8Array()),
            (t.result =
              void 0 !== e.result && null !== e.result
                ? eD.fromPartial(e.result)
                : void 0),
            t
          );
        },
        fromAmino(e) {
          let t = e7();
          return (
            void 0 !== e.height &&
              null !== e.height &&
              (t.height = BigInt(e.height)),
            void 0 !== e.index && null !== e.index && (t.index = e.index),
            void 0 !== e.tx && null !== e.tx && (t.tx = (0, U.jm)(e.tx)),
            void 0 !== e.result &&
              null !== e.result &&
              (t.result = eD.fromAmino(e.result)),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.height = e.height !== BigInt(0) ? e.height.toString() : void 0),
            (t.index = 0 === e.index ? void 0 : e.index),
            (t.tx = e.tx ? (0, U.Uz)(e.tx) : void 0),
            (t.result = e.result ? eD.toAmino(e.result) : void 0),
            t
          );
        },
        fromAminoMsg: (e) => e5.fromAmino(e.value),
        fromProtoMsg: (e) => e5.decode(e.value),
        toProto: (e) => e5.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.TxResult",
          value: e5.encode(e).finish(),
        }),
      };
      function e9() {
        return { address: new Uint8Array(), power: BigInt(0) };
      }
      A.q.register(e5.typeUrl, e5);
      let te = {
        typeUrl: "/tendermint.abci.Validator",
        is: (e) =>
          e &&
          (e.$typeUrl === te.typeUrl ||
            ((e.address instanceof Uint8Array ||
              "string" == typeof e.address) &&
              "bigint" == typeof e.power)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === te.typeUrl ||
            ((e.address instanceof Uint8Array ||
              "string" == typeof e.address) &&
              "bigint" == typeof e.power)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === te.typeUrl ||
            ((e.address instanceof Uint8Array ||
              "string" == typeof e.address) &&
              "bigint" == typeof e.power)),
        encode: (e, t = v.Lt.create()) => (
          0 !== e.address.length && t.uint32(10).bytes(e.address),
          e.power !== BigInt(0) && t.uint32(24).int64(e.power),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = e9();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.address = o.bytes();
                break;
              case 3:
                n.power = o.int64();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = e9();
          return (
            (t.address = e.address ?? new Uint8Array()),
            (t.power =
              void 0 !== e.power && null !== e.power
                ? BigInt(e.power.toString())
                : BigInt(0)),
            t
          );
        },
        fromAmino(e) {
          let t = e9();
          return (
            void 0 !== e.address &&
              null !== e.address &&
              (t.address = (0, U.jm)(e.address)),
            void 0 !== e.power &&
              null !== e.power &&
              (t.power = BigInt(e.power)),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.address = e.address ? (0, U.Uz)(e.address) : void 0),
            (t.power = e.power !== BigInt(0) ? e.power.toString() : void 0),
            t
          );
        },
        fromAminoMsg: (e) => te.fromAmino(e.value),
        fromProtoMsg: (e) => te.decode(e.value),
        toProto: (e) => te.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.Validator",
          value: te.encode(e).finish(),
        }),
      };
      function tt() {
        return { pubKey: g.PublicKey.fromPartial({}), power: BigInt(0) };
      }
      A.q.register(te.typeUrl, te);
      let to = {
        typeUrl: "/tendermint.abci.ValidatorUpdate",
        is: (e) =>
          e &&
          (e.$typeUrl === to.typeUrl ||
            (g.PublicKey.is(e.pubKey) && "bigint" == typeof e.power)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === to.typeUrl ||
            (g.PublicKey.isSDK(e.pub_key) && "bigint" == typeof e.power)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === to.typeUrl ||
            (g.PublicKey.isAmino(e.pub_key) && "bigint" == typeof e.power)),
        encode: (e, t = v.Lt.create()) => (
          void 0 !== e.pubKey &&
            g.PublicKey.encode(e.pubKey, t.uint32(10).fork()).ldelim(),
          e.power !== BigInt(0) && t.uint32(16).int64(e.power),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = tt();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.pubKey = g.PublicKey.decode(o, o.uint32());
                break;
              case 2:
                n.power = o.int64();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = tt();
          return (
            (t.pubKey =
              void 0 !== e.pubKey && null !== e.pubKey
                ? g.PublicKey.fromPartial(e.pubKey)
                : void 0),
            (t.power =
              void 0 !== e.power && null !== e.power
                ? BigInt(e.power.toString())
                : BigInt(0)),
            t
          );
        },
        fromAmino(e) {
          let t = tt();
          return (
            void 0 !== e.pub_key &&
              null !== e.pub_key &&
              (t.pubKey = g.PublicKey.fromAmino(e.pub_key)),
            void 0 !== e.power &&
              null !== e.power &&
              (t.power = BigInt(e.power)),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.pub_key = e.pubKey ? g.PublicKey.toAmino(e.pubKey) : void 0),
            (t.power = e.power !== BigInt(0) ? e.power.toString() : void 0),
            t
          );
        },
        fromAminoMsg: (e) => to.fromAmino(e.value),
        fromProtoMsg: (e) => to.decode(e.value),
        toProto: (e) => to.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ValidatorUpdate",
          value: to.encode(e).finish(),
        }),
      };
      function ti() {
        return { validator: te.fromPartial({}), signedLastBlock: !1 };
      }
      A.q.register(to.typeUrl, to);
      let tn = {
        typeUrl: "/tendermint.abci.VoteInfo",
        is: (e) =>
          e &&
          (e.$typeUrl === tn.typeUrl ||
            (te.is(e.validator) && "boolean" == typeof e.signedLastBlock)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === tn.typeUrl ||
            (te.isSDK(e.validator) && "boolean" == typeof e.signed_last_block)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === tn.typeUrl ||
            (te.isAmino(e.validator) &&
              "boolean" == typeof e.signed_last_block)),
        encode: (e, t = v.Lt.create()) => (
          void 0 !== e.validator &&
            te.encode(e.validator, t.uint32(10).fork()).ldelim(),
          !0 === e.signedLastBlock && t.uint32(16).bool(e.signedLastBlock),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = ti();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.validator = te.decode(o, o.uint32());
                break;
              case 2:
                n.signedLastBlock = o.bool();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = ti();
          return (
            (t.validator =
              void 0 !== e.validator && null !== e.validator
                ? te.fromPartial(e.validator)
                : void 0),
            (t.signedLastBlock = e.signedLastBlock ?? !1),
            t
          );
        },
        fromAmino(e) {
          let t = ti();
          return (
            void 0 !== e.validator &&
              null !== e.validator &&
              (t.validator = te.fromAmino(e.validator)),
            void 0 !== e.signed_last_block &&
              null !== e.signed_last_block &&
              (t.signedLastBlock = e.signed_last_block),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.validator = e.validator ? te.toAmino(e.validator) : void 0),
            (t.signed_last_block =
              !1 === e.signedLastBlock ? void 0 : e.signedLastBlock),
            t
          );
        },
        fromAminoMsg: (e) => tn.fromAmino(e.value),
        fromProtoMsg: (e) => tn.decode(e.value),
        toProto: (e) => tn.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.VoteInfo",
          value: tn.encode(e).finish(),
        }),
      };
      function tr() {
        return {
          validator: te.fromPartial({}),
          signedLastBlock: !1,
          voteExtension: new Uint8Array(),
        };
      }
      A.q.register(tn.typeUrl, tn);
      let ts = {
        typeUrl: "/tendermint.abci.ExtendedVoteInfo",
        is: (e) =>
          e &&
          (e.$typeUrl === ts.typeUrl ||
            (te.is(e.validator) &&
              "boolean" == typeof e.signedLastBlock &&
              (e.voteExtension instanceof Uint8Array ||
                "string" == typeof e.voteExtension))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === ts.typeUrl ||
            (te.isSDK(e.validator) &&
              "boolean" == typeof e.signed_last_block &&
              (e.vote_extension instanceof Uint8Array ||
                "string" == typeof e.vote_extension))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === ts.typeUrl ||
            (te.isAmino(e.validator) &&
              "boolean" == typeof e.signed_last_block &&
              (e.vote_extension instanceof Uint8Array ||
                "string" == typeof e.vote_extension))),
        encode: (e, t = v.Lt.create()) => (
          void 0 !== e.validator &&
            te.encode(e.validator, t.uint32(10).fork()).ldelim(),
          !0 === e.signedLastBlock && t.uint32(16).bool(e.signedLastBlock),
          0 !== e.voteExtension.length && t.uint32(26).bytes(e.voteExtension),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = tr();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.validator = te.decode(o, o.uint32());
                break;
              case 2:
                n.signedLastBlock = o.bool();
                break;
              case 3:
                n.voteExtension = o.bytes();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = tr();
          return (
            (t.validator =
              void 0 !== e.validator && null !== e.validator
                ? te.fromPartial(e.validator)
                : void 0),
            (t.signedLastBlock = e.signedLastBlock ?? !1),
            (t.voteExtension = e.voteExtension ?? new Uint8Array()),
            t
          );
        },
        fromAmino(e) {
          let t = tr();
          return (
            void 0 !== e.validator &&
              null !== e.validator &&
              (t.validator = te.fromAmino(e.validator)),
            void 0 !== e.signed_last_block &&
              null !== e.signed_last_block &&
              (t.signedLastBlock = e.signed_last_block),
            void 0 !== e.vote_extension &&
              null !== e.vote_extension &&
              (t.voteExtension = (0, U.jm)(e.vote_extension)),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.validator = e.validator ? te.toAmino(e.validator) : void 0),
            (t.signed_last_block =
              !1 === e.signedLastBlock ? void 0 : e.signedLastBlock),
            (t.vote_extension = e.voteExtension
              ? (0, U.Uz)(e.voteExtension)
              : void 0),
            t
          );
        },
        fromAminoMsg: (e) => ts.fromAmino(e.value),
        fromProtoMsg: (e) => ts.decode(e.value),
        toProto: (e) => ts.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.ExtendedVoteInfo",
          value: ts.encode(e).finish(),
        }),
      };
      function ta() {
        return {
          type: 0,
          validator: te.fromPartial({}),
          height: BigInt(0),
          time: new Date(),
          totalVotingPower: BigInt(0),
        };
      }
      A.q.register(ts.typeUrl, ts);
      let tl = {
        typeUrl: "/tendermint.abci.Misbehavior",
        is: (e) =>
          e &&
          (e.$typeUrl === tl.typeUrl ||
            ((0, U.DM)(e.type) &&
              te.is(e.validator) &&
              "bigint" == typeof e.height &&
              m.Timestamp.is(e.time) &&
              "bigint" == typeof e.totalVotingPower)),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === tl.typeUrl ||
            ((0, U.DM)(e.type) &&
              te.isSDK(e.validator) &&
              "bigint" == typeof e.height &&
              m.Timestamp.isSDK(e.time) &&
              "bigint" == typeof e.total_voting_power)),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === tl.typeUrl ||
            ((0, U.DM)(e.type) &&
              te.isAmino(e.validator) &&
              "bigint" == typeof e.height &&
              m.Timestamp.isAmino(e.time) &&
              "bigint" == typeof e.total_voting_power)),
        encode: (e, t = v.Lt.create()) => (
          0 !== e.type && t.uint32(8).int32(e.type),
          void 0 !== e.validator &&
            te.encode(e.validator, t.uint32(18).fork()).ldelim(),
          e.height !== BigInt(0) && t.uint32(24).int64(e.height),
          void 0 !== e.time &&
            m.Timestamp.encode((0, U.Uq)(e.time), t.uint32(34).fork()).ldelim(),
          e.totalVotingPower !== BigInt(0) &&
            t.uint32(40).int64(e.totalVotingPower),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = ta();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.type = o.int32();
                break;
              case 2:
                n.validator = te.decode(o, o.uint32());
                break;
              case 3:
                n.height = o.int64();
                break;
              case 4:
                n.time = (0, U.Ol)(m.Timestamp.decode(o, o.uint32()));
                break;
              case 5:
                n.totalVotingPower = o.int64();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = ta();
          return (
            (t.type = e.type ?? 0),
            (t.validator =
              void 0 !== e.validator && null !== e.validator
                ? te.fromPartial(e.validator)
                : void 0),
            (t.height =
              void 0 !== e.height && null !== e.height
                ? BigInt(e.height.toString())
                : BigInt(0)),
            (t.time = e.time ?? void 0),
            (t.totalVotingPower =
              void 0 !== e.totalVotingPower && null !== e.totalVotingPower
                ? BigInt(e.totalVotingPower.toString())
                : BigInt(0)),
            t
          );
        },
        fromAmino(e) {
          let t = ta();
          return (
            void 0 !== e.type && null !== e.type && (t.type = e.type),
            void 0 !== e.validator &&
              null !== e.validator &&
              (t.validator = te.fromAmino(e.validator)),
            void 0 !== e.height &&
              null !== e.height &&
              (t.height = BigInt(e.height)),
            void 0 !== e.time &&
              null !== e.time &&
              (t.time = (0, U.Ol)(m.Timestamp.fromAmino(e.time))),
            void 0 !== e.total_voting_power &&
              null !== e.total_voting_power &&
              (t.totalVotingPower = BigInt(e.total_voting_power)),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.type = 0 === e.type ? void 0 : e.type),
            (t.validator = e.validator ? te.toAmino(e.validator) : void 0),
            (t.height = e.height !== BigInt(0) ? e.height.toString() : void 0),
            (t.time = e.time ? m.Timestamp.toAmino((0, U.Uq)(e.time)) : void 0),
            (t.total_voting_power =
              e.totalVotingPower !== BigInt(0)
                ? e.totalVotingPower.toString()
                : void 0),
            t
          );
        },
        fromAminoMsg: (e) => tl.fromAmino(e.value),
        fromProtoMsg: (e) => tl.decode(e.value),
        toProto: (e) => tl.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.Misbehavior",
          value: tl.encode(e).finish(),
        }),
      };
      function td() {
        return {
          height: BigInt(0),
          format: 0,
          chunks: 0,
          hash: new Uint8Array(),
          metadata: new Uint8Array(),
        };
      }
      A.q.register(tl.typeUrl, tl);
      let tp = {
        typeUrl: "/tendermint.abci.Snapshot",
        is: (e) =>
          e &&
          (e.$typeUrl === tp.typeUrl ||
            ("bigint" == typeof e.height &&
              "number" == typeof e.format &&
              "number" == typeof e.chunks &&
              (e.hash instanceof Uint8Array || "string" == typeof e.hash) &&
              (e.metadata instanceof Uint8Array ||
                "string" == typeof e.metadata))),
        isSDK: (e) =>
          e &&
          (e.$typeUrl === tp.typeUrl ||
            ("bigint" == typeof e.height &&
              "number" == typeof e.format &&
              "number" == typeof e.chunks &&
              (e.hash instanceof Uint8Array || "string" == typeof e.hash) &&
              (e.metadata instanceof Uint8Array ||
                "string" == typeof e.metadata))),
        isAmino: (e) =>
          e &&
          (e.$typeUrl === tp.typeUrl ||
            ("bigint" == typeof e.height &&
              "number" == typeof e.format &&
              "number" == typeof e.chunks &&
              (e.hash instanceof Uint8Array || "string" == typeof e.hash) &&
              (e.metadata instanceof Uint8Array ||
                "string" == typeof e.metadata))),
        encode: (e, t = v.Lt.create()) => (
          e.height !== BigInt(0) && t.uint32(8).uint64(e.height),
          0 !== e.format && t.uint32(16).uint32(e.format),
          0 !== e.chunks && t.uint32(24).uint32(e.chunks),
          0 !== e.hash.length && t.uint32(34).bytes(e.hash),
          0 !== e.metadata.length && t.uint32(42).bytes(e.metadata),
          t
        ),
        decode(e, t) {
          let o = e instanceof v.oP ? e : new v.oP(e),
            i = void 0 === t ? o.len : o.pos + t,
            n = td();
          for (; o.pos < i; ) {
            let e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.height = o.uint64();
                break;
              case 2:
                n.format = o.uint32();
                break;
              case 3:
                n.chunks = o.uint32();
                break;
              case 4:
                n.hash = o.bytes();
                break;
              case 5:
                n.metadata = o.bytes();
                break;
              default:
                o.skipType(7 & e);
            }
          }
          return n;
        },
        fromPartial(e) {
          let t = td();
          return (
            (t.height =
              void 0 !== e.height && null !== e.height
                ? BigInt(e.height.toString())
                : BigInt(0)),
            (t.format = e.format ?? 0),
            (t.chunks = e.chunks ?? 0),
            (t.hash = e.hash ?? new Uint8Array()),
            (t.metadata = e.metadata ?? new Uint8Array()),
            t
          );
        },
        fromAmino(e) {
          let t = td();
          return (
            void 0 !== e.height &&
              null !== e.height &&
              (t.height = BigInt(e.height)),
            void 0 !== e.format && null !== e.format && (t.format = e.format),
            void 0 !== e.chunks && null !== e.chunks && (t.chunks = e.chunks),
            void 0 !== e.hash &&
              null !== e.hash &&
              (t.hash = (0, U.jm)(e.hash)),
            void 0 !== e.metadata &&
              null !== e.metadata &&
              (t.metadata = (0, U.jm)(e.metadata)),
            t
          );
        },
        toAmino(e) {
          let t = {};
          return (
            (t.height = e.height !== BigInt(0) ? e.height.toString() : void 0),
            (t.format = 0 === e.format ? void 0 : e.format),
            (t.chunks = 0 === e.chunks ? void 0 : e.chunks),
            (t.hash = e.hash ? (0, U.Uz)(e.hash) : void 0),
            (t.metadata = e.metadata ? (0, U.Uz)(e.metadata) : void 0),
            t
          );
        },
        fromAminoMsg: (e) => tp.fromAmino(e.value),
        fromProtoMsg: (e) => tp.decode(e.value),
        toProto: (e) => tp.encode(e).finish(),
        toProtoMsg: (e) => ({
          typeUrl: "/tendermint.abci.Snapshot",
          value: tp.encode(e).finish(),
        }),
      };
      A.q.register(tp.typeUrl, tp);
    },
  },
]);
