(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3080],
  {
    69028: function (t, e, r) {
      "use strict";
      (e._O = e.Jq = e.KB = e.u8 = e.cv = void 0),
        (e.Ik = e.A9 = e.n_ = e.gM = void 0);
      let n = r(82957);
      function i(t) {
        if (!(t instanceof Uint8Array))
          throw TypeError("b must be a Uint8Array");
      }
      function o(t) {
        return i(t), n.Buffer.from(t.buffer, t.byteOffset, t.length);
      }
      class s {
        constructor(t, e) {
          if (!Number.isInteger(t)) throw TypeError("span must be an integer");
          (this.span = t), (this.property = e);
        }
        makeDestinationObject() {
          return {};
        }
        getSpan(t, e) {
          if (0 > this.span) throw RangeError("indeterminate span");
          return this.span;
        }
        replicate(t) {
          let e = Object.create(this.constructor.prototype);
          return Object.assign(e, this), (e.property = t), e;
        }
        fromArray(t) {}
      }
      function a(t, e) {
        return e.property ? t + "[" + e.property + "]" : t;
      }
      class l extends s {
        isCount() {
          throw Error("ExternalLayout is abstract");
        }
      }
      class u extends l {
        constructor(t, e = 0, r) {
          if (!(t instanceof s)) throw TypeError("layout must be a Layout");
          if (!Number.isInteger(e))
            throw TypeError("offset must be integer or undefined");
          super(t.span, r || t.property), (this.layout = t), (this.offset = e);
        }
        isCount() {
          return this.layout instanceof c || this.layout instanceof h;
        }
        decode(t, e = 0) {
          return this.layout.decode(t, e + this.offset);
        }
        encode(t, e, r = 0) {
          return this.layout.encode(t, e, r + this.offset);
        }
      }
      class c extends s {
        constructor(t, e) {
          if ((super(t, e), 6 < this.span))
            throw RangeError("span must not exceed 6 bytes");
        }
        decode(t, e = 0) {
          return o(t).readUIntLE(e, this.span);
        }
        encode(t, e, r = 0) {
          return o(e).writeUIntLE(t, r, this.span), this.span;
        }
      }
      class h extends s {
        constructor(t, e) {
          if ((super(t, e), 6 < this.span))
            throw RangeError("span must not exceed 6 bytes");
        }
        decode(t, e = 0) {
          return o(t).readUIntBE(e, this.span);
        }
        encode(t, e, r = 0) {
          return o(e).writeUIntBE(t, r, this.span), this.span;
        }
      }
      function f(t) {
        let e = Math.floor(t / 4294967296);
        return { hi32: e, lo32: t - 4294967296 * e };
      }
      function d(t, e) {
        return 4294967296 * t + e;
      }
      class p extends s {
        constructor(t) {
          super(8, t);
        }
        decode(t, e = 0) {
          let r = o(t),
            n = r.readUInt32LE(e);
          return d(r.readUInt32LE(e + 4), n);
        }
        encode(t, e, r = 0) {
          let n = f(t),
            i = o(e);
          return i.writeUInt32LE(n.lo32, r), i.writeUInt32LE(n.hi32, r + 4), 8;
        }
      }
      class m extends s {
        constructor(t) {
          super(8, t);
        }
        decode(t, e = 0) {
          let r = o(t),
            n = r.readUInt32LE(e);
          return d(r.readInt32LE(e + 4), n);
        }
        encode(t, e, r = 0) {
          let n = f(t),
            i = o(e);
          return i.writeUInt32LE(n.lo32, r), i.writeInt32LE(n.hi32, r + 4), 8;
        }
      }
      class g extends s {
        constructor(t, e, r) {
          if (!(t instanceof s))
            throw TypeError("elementLayout must be a Layout");
          if (
            !(
              (e instanceof l && e.isCount()) ||
              (Number.isInteger(e) && 0 <= e)
            )
          )
            throw TypeError(
              "count must be non-negative integer or an unsigned integer ExternalLayout"
            );
          let n = -1;
          e instanceof l || !(0 < t.span) || (n = e * t.span),
            super(n, r),
            (this.elementLayout = t),
            (this.count = e);
        }
        getSpan(t, e = 0) {
          if (0 <= this.span) return this.span;
          let r = 0,
            n = this.count;
          if (
            (n instanceof l && (n = n.decode(t, e)),
            0 < this.elementLayout.span)
          )
            r = n * this.elementLayout.span;
          else {
            let i = 0;
            for (; i < n; ) (r += this.elementLayout.getSpan(t, e + r)), ++i;
          }
          return r;
        }
        decode(t, e = 0) {
          let r = [],
            n = 0,
            i = this.count;
          for (i instanceof l && (i = i.decode(t, e)); n < i; )
            r.push(this.elementLayout.decode(t, e)),
              (e += this.elementLayout.getSpan(t, e)),
              (n += 1);
          return r;
        }
        encode(t, e, r = 0) {
          let n = this.elementLayout,
            i = t.reduce((t, i) => t + n.encode(i, e, r + t), 0);
          return (
            this.count instanceof l && this.count.encode(t.length, e, r), i
          );
        }
      }
      class y extends s {
        constructor(t, e, r) {
          if (
            !(Array.isArray(t) && t.reduce((t, e) => t && e instanceof s, !0))
          )
            throw TypeError("fields must be array of Layout instances");
          for (let n of ("boolean" == typeof e &&
            void 0 === r &&
            ((r = e), (e = void 0)),
          t))
            if (0 > n.span && void 0 === n.property)
              throw Error(
                "fields cannot contain unnamed variable-length layout"
              );
          let n = -1;
          try {
            n = t.reduce((t, e) => t + e.getSpan(), 0);
          } catch (t) {}
          super(n, e), (this.fields = t), (this.decodePrefixes = !!r);
        }
        getSpan(t, e = 0) {
          if (0 <= this.span) return this.span;
          let r = 0;
          try {
            r = this.fields.reduce((r, n) => {
              let i = n.getSpan(t, e);
              return (e += i), r + i;
            }, 0);
          } catch (t) {
            throw RangeError("indeterminate span");
          }
          return r;
        }
        decode(t, e = 0) {
          i(t);
          let r = this.makeDestinationObject();
          for (let n of this.fields)
            if (
              (void 0 !== n.property && (r[n.property] = n.decode(t, e)),
              (e += n.getSpan(t, e)),
              this.decodePrefixes && t.length === e)
            )
              break;
          return r;
        }
        encode(t, e, r = 0) {
          let n = r,
            i = 0,
            o = 0;
          for (let n of this.fields) {
            let s = n.span;
            if (((o = 0 < s ? s : 0), void 0 !== n.property)) {
              let i = t[n.property];
              void 0 !== i &&
                ((o = n.encode(i, e, r)), 0 > s && (s = n.getSpan(e, r)));
            }
            (i = r), (r += s);
          }
          return i + o - n;
        }
        fromArray(t) {
          let e = this.makeDestinationObject();
          for (let r of this.fields)
            void 0 !== r.property &&
              0 < t.length &&
              (e[r.property] = t.shift());
          return e;
        }
        layoutFor(t) {
          if ("string" != typeof t) throw TypeError("property must be string");
          for (let e of this.fields) if (e.property === t) return e;
        }
        offsetOf(t) {
          if ("string" != typeof t) throw TypeError("property must be string");
          let e = 0;
          for (let r of this.fields) {
            if (r.property === t) return e;
            0 > r.span ? (e = -1) : 0 <= e && (e += r.span);
          }
        }
      }
      class v {
        constructor(t) {
          this.property = t;
        }
        decode(t, e) {
          throw Error("UnionDiscriminator is abstract");
        }
        encode(t, e, r) {
          throw Error("UnionDiscriminator is abstract");
        }
      }
      class w extends v {
        constructor(t, e) {
          if (!(t instanceof l && t.isCount()))
            throw TypeError(
              "layout must be an unsigned integer ExternalLayout"
            );
          super(e || t.property || "variant"), (this.layout = t);
        }
        decode(t, e) {
          return this.layout.decode(t, e);
        }
        encode(t, e, r) {
          return this.layout.encode(t, e, r);
        }
      }
      class b extends s {
        constructor(t, e, r) {
          let n;
          if (t instanceof c || t instanceof h) n = new w(new u(t));
          else if (t instanceof l && t.isCount()) n = new w(t);
          else if (t instanceof v) n = t;
          else
            throw TypeError(
              "discr must be a UnionDiscriminator or an unsigned integer layout"
            );
          if ((void 0 === e && (e = null), !(null === e || e instanceof s)))
            throw TypeError("defaultLayout must be null or a Layout");
          if (null !== e) {
            if (0 > e.span)
              throw Error("defaultLayout must have constant span");
            void 0 === e.property && (e = e.replicate("content"));
          }
          let i = -1;
          e &&
            0 <= (i = e.span) &&
            (t instanceof c || t instanceof h) &&
            (i += n.layout.span),
            super(i, r),
            (this.discriminator = n),
            (this.usesPrefixDiscriminator = t instanceof c || t instanceof h),
            (this.defaultLayout = e),
            (this.registry = {});
          let o = this.defaultGetSourceVariant.bind(this);
          (this.getSourceVariant = function (t) {
            return o(t);
          }),
            (this.configGetSourceVariant = function (t) {
              o = t.bind(this);
            });
        }
        getSpan(t, e = 0) {
          if (0 <= this.span) return this.span;
          let r = this.getVariant(t, e);
          if (!r)
            throw Error("unable to determine span for unrecognized variant");
          return r.getSpan(t, e);
        }
        defaultGetSourceVariant(t) {
          if (
            Object.prototype.hasOwnProperty.call(t, this.discriminator.property)
          ) {
            if (
              this.defaultLayout &&
              this.defaultLayout.property &&
              Object.prototype.hasOwnProperty.call(
                t,
                this.defaultLayout.property
              )
            )
              return;
            let e = this.registry[t[this.discriminator.property]];
            if (
              e &&
              (!e.layout ||
                (e.property &&
                  Object.prototype.hasOwnProperty.call(t, e.property)))
            )
              return e;
          } else
            for (let e in this.registry) {
              let r = this.registry[e];
              if (
                r.property &&
                Object.prototype.hasOwnProperty.call(t, r.property)
              )
                return r;
            }
          throw Error("unable to infer src variant");
        }
        decode(t, e = 0) {
          let r;
          let n = this.discriminator,
            i = n.decode(t, e),
            o = this.registry[i];
          if (void 0 === o) {
            let o = this.defaultLayout,
              s = 0;
            this.usesPrefixDiscriminator && (s = n.layout.span),
              ((r = this.makeDestinationObject())[n.property] = i),
              (r[o.property] = o.decode(t, e + s));
          } else r = o.decode(t, e);
          return r;
        }
        encode(t, e, r = 0) {
          let n = this.getSourceVariant(t);
          if (void 0 === n) {
            let n = this.discriminator,
              i = this.defaultLayout,
              o = 0;
            return (
              this.usesPrefixDiscriminator && (o = n.layout.span),
              n.encode(t[n.property], e, r),
              o + i.encode(t[i.property], e, r + o)
            );
          }
          return n.encode(t, e, r);
        }
        addVariant(t, e, r) {
          let n = new E(this, t, e, r);
          return (this.registry[t] = n), n;
        }
        getVariant(t, e = 0) {
          let r;
          return (
            t instanceof Uint8Array
              ? (r = this.discriminator.decode(t, e))
              : (r = t),
            this.registry[r]
          );
        }
      }
      class E extends s {
        constructor(t, e, r, n) {
          if (!(t instanceof b)) throw TypeError("union must be a Union");
          if (!Number.isInteger(e) || 0 > e)
            throw TypeError("variant must be a (non-negative) integer");
          if (
            ("string" == typeof r && void 0 === n && ((n = r), (r = null)), r)
          ) {
            if (!(r instanceof s)) throw TypeError("layout must be a Layout");
            if (
              null !== t.defaultLayout &&
              0 <= r.span &&
              r.span > t.defaultLayout.span
            )
              throw Error("variant span exceeds span of containing union");
            if ("string" != typeof n)
              throw TypeError("variant must have a String property");
          }
          let i = t.span;
          0 > t.span &&
            0 <= (i = r ? r.span : 0) &&
            t.usesPrefixDiscriminator &&
            (i += t.discriminator.layout.span),
            super(i, n),
            (this.union = t),
            (this.variant = e),
            (this.layout = r || null);
        }
        getSpan(t, e = 0) {
          if (0 <= this.span) return this.span;
          let r = 0;
          this.union.usesPrefixDiscriminator &&
            (r = this.union.discriminator.layout.span);
          let n = 0;
          return this.layout && (n = this.layout.getSpan(t, e + r)), r + n;
        }
        decode(t, e = 0) {
          let r = this.makeDestinationObject();
          if (this !== this.union.getVariant(t, e))
            throw Error("variant mismatch");
          let n = 0;
          return (
            this.union.usesPrefixDiscriminator &&
              (n = this.union.discriminator.layout.span),
            this.layout
              ? (r[this.property] = this.layout.decode(t, e + n))
              : this.property
              ? (r[this.property] = !0)
              : this.union.usesPrefixDiscriminator &&
                (r[this.union.discriminator.property] = this.variant),
            r
          );
        }
        encode(t, e, r = 0) {
          let n = 0;
          if (
            (this.union.usesPrefixDiscriminator &&
              (n = this.union.discriminator.layout.span),
            this.layout &&
              !Object.prototype.hasOwnProperty.call(t, this.property))
          )
            throw TypeError("variant lacks property " + this.property);
          this.union.discriminator.encode(this.variant, e, r);
          let i = n;
          if (
            this.layout &&
            (this.layout.encode(t[this.property], e, r + n),
            (i += this.layout.getSpan(e, r + n)),
            0 <= this.union.span && i > this.union.span)
          )
            throw Error("encoded variant overruns containing union");
          return i;
        }
        fromArray(t) {
          if (this.layout) return this.layout.fromArray(t);
        }
      }
      function x(t) {
        return 0 > t && (t += 4294967296), t;
      }
      class M extends s {
        constructor(t, e, r) {
          if (!(t instanceof c || t instanceof h))
            throw TypeError("word must be a UInt or UIntBE layout");
          if (
            ("string" == typeof e && void 0 === r && ((r = e), (e = !1)),
            4 < t.span)
          )
            throw RangeError("word cannot exceed 32 bits");
          super(t.span, r),
            (this.word = t),
            (this.msb = !!e),
            (this.fields = []);
          let n = 0;
          (this._packedSetValue = function (t) {
            return (n = x(t)), this;
          }),
            (this._packedGetValue = function () {
              return n;
            });
        }
        decode(t, e = 0) {
          let r = this.makeDestinationObject(),
            n = this.word.decode(t, e);
          for (let e of (this._packedSetValue(n), this.fields))
            void 0 !== e.property && (r[e.property] = e.decode(t));
          return r;
        }
        encode(t, e, r = 0) {
          let n = this.word.decode(e, r);
          for (let e of (this._packedSetValue(n), this.fields))
            if (void 0 !== e.property) {
              let r = t[e.property];
              void 0 !== r && e.encode(r);
            }
          return this.word.encode(this._packedGetValue(), e, r);
        }
        addField(t, e) {
          let r = new S(this, t, e);
          return this.fields.push(r), r;
        }
        addBoolean(t) {
          let e = new A(this, t);
          return this.fields.push(e), e;
        }
        fieldFor(t) {
          if ("string" != typeof t) throw TypeError("property must be string");
          for (let e of this.fields) if (e.property === t) return e;
        }
      }
      class S {
        constructor(t, e, r) {
          if (!(t instanceof M))
            throw TypeError("container must be a BitStructure");
          if (!Number.isInteger(e) || 0 >= e)
            throw TypeError("bits must be positive integer");
          let n = 8 * t.span,
            i = t.fields.reduce((t, e) => t + e.bits, 0);
          if (e + i > n)
            throw Error(
              "bits too long for span remainder (" +
                (n - i) +
                " of " +
                n +
                " remain)"
            );
          (this.container = t),
            (this.bits = e),
            (this.valueMask = (1 << e) - 1),
            32 === e && (this.valueMask = 4294967295),
            (this.start = i),
            this.container.msb && (this.start = n - i - e),
            (this.wordMask = x(this.valueMask << this.start)),
            (this.property = r);
        }
        decode(t, e) {
          return (
            x(this.container._packedGetValue() & this.wordMask) >>> this.start
          );
        }
        encode(t) {
          if (
            "number" != typeof t ||
            !Number.isInteger(t) ||
            t !== x(t & this.valueMask)
          )
            throw TypeError(
              a("BitField.encode", this) +
                " value must be integer not exceeding " +
                this.valueMask
            );
          let e = this.container._packedGetValue(),
            r = x(t << this.start);
          this.container._packedSetValue(x(e & ~this.wordMask) | r);
        }
      }
      class A extends S {
        constructor(t, e) {
          super(t, 1, e);
        }
        decode(t, e) {
          return !!super.decode(t, e);
        }
        encode(t) {
          "boolean" == typeof t && (t = +t), super.encode(t);
        }
      }
      class T extends s {
        constructor(t, e) {
          if (
            !(
              (t instanceof l && t.isCount()) ||
              (Number.isInteger(t) && 0 <= t)
            )
          )
            throw TypeError(
              "length must be positive integer or an unsigned integer ExternalLayout"
            );
          let r = -1;
          t instanceof l || (r = t), super(r, e), (this.length = t);
        }
        getSpan(t, e) {
          let r = this.span;
          return 0 > r && (r = this.length.decode(t, e)), r;
        }
        decode(t, e = 0) {
          let r = this.span;
          return 0 > r && (r = this.length.decode(t, e)), o(t).slice(e, e + r);
        }
        encode(t, e, r) {
          let n = this.length;
          if (
            (this.length instanceof l && (n = t.length),
            !(t instanceof Uint8Array && n === t.length))
          )
            throw TypeError(
              a("Blob.encode", this) +
                " requires (length " +
                n +
                ") Uint8Array as src"
            );
          if (r + n > e.length)
            throw RangeError("encoding overruns Uint8Array");
          let i = o(t);
          return (
            o(e).write(i.toString("hex"), r, n, "hex"),
            this.length instanceof l && this.length.encode(n, e, r),
            n
          );
        }
      }
      (e.cv = (t, e, r) => new u(t, e, r)),
        (e.u8 = (t) => new c(1, t)),
        (e.KB = (t) => new c(2, t)),
        (e.Jq = (t) => new c(4, t)),
        (e._O = (t) => new p(t)),
        (e.gM = (t) => new m(t)),
        (e.n_ = (t, e, r) => new y(t, e, r)),
        (e.A9 = (t, e, r) => new g(t, e, r)),
        (e.Ik = (t, e) => new T(t, e));
    },
    80211: function (t, e, r) {
      "use strict";
      var n = r(73306).Buffer;
      t.exports = function (t) {
        if (t.length >= 255) throw TypeError("Alphabet too long");
        for (var e = new Uint8Array(256), r = 0; r < e.length; r++) e[r] = 255;
        for (var i = 0; i < t.length; i++) {
          var o = t.charAt(i),
            s = o.charCodeAt(0);
          if (255 !== e[s]) throw TypeError(o + " is ambiguous");
          e[s] = i;
        }
        var a = t.length,
          l = t.charAt(0),
          u = Math.log(a) / Math.log(256),
          c = Math.log(256) / Math.log(a);
        function h(t) {
          if ("string" != typeof t) throw TypeError("Expected String");
          if (0 === t.length) return n.alloc(0);
          for (var r = 0, i = 0, o = 0; t[r] === l; ) i++, r++;
          for (
            var s = ((t.length - r) * u + 1) >>> 0, c = new Uint8Array(s);
            r < t.length;

          ) {
            var h = t.charCodeAt(r);
            if (h > 255) return;
            var f = e[h];
            if (255 === f) return;
            for (var d = 0, p = s - 1; (0 !== f || d < o) && -1 !== p; p--, d++)
              (f += (a * c[p]) >>> 0),
                (c[p] = f % 256 >>> 0),
                (f = (f / 256) >>> 0);
            if (0 !== f) throw Error("Non-zero carry");
            (o = d), r++;
          }
          for (var m = s - o; m !== s && 0 === c[m]; ) m++;
          var g = n.allocUnsafe(i + (s - m));
          g.fill(0, 0, i);
          for (var y = i; m !== s; ) g[y++] = c[m++];
          return g;
        }
        return {
          encode: function (e) {
            if (
              ((Array.isArray(e) || e instanceof Uint8Array) && (e = n.from(e)),
              !n.isBuffer(e))
            )
              throw TypeError("Expected Buffer");
            if (0 === e.length) return "";
            for (var r = 0, i = 0, o = 0, s = e.length; o !== s && 0 === e[o]; )
              o++, r++;
            for (
              var u = ((s - o) * c + 1) >>> 0, h = new Uint8Array(u);
              o !== s;

            ) {
              for (
                var f = e[o], d = 0, p = u - 1;
                (0 !== f || d < i) && -1 !== p;
                p--, d++
              )
                (f += (256 * h[p]) >>> 0),
                  (h[p] = f % a >>> 0),
                  (f = (f / a) >>> 0);
              if (0 !== f) throw Error("Non-zero carry");
              (i = d), o++;
            }
            for (var m = u - i; m !== u && 0 === h[m]; ) m++;
            for (var g = l.repeat(r); m < u; ++m) g += t.charAt(h[m]);
            return g;
          },
          decodeUnsafe: h,
          decode: function (t) {
            var e = h(t);
            if (e) return e;
            throw Error("Non-base" + a + " character");
          },
        };
      };
    },
    7524: function (t, e, r) {
      var n = r(80211);
      t.exports = n(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
    },
    59196: function (t, e) {
      "use strict";
      (e.byteLength = function (t) {
        var e = l(t),
          r = e[0],
          n = e[1];
        return ((r + n) * 3) / 4 - n;
      }),
        (e.toByteArray = function (t) {
          var e,
            r,
            o = l(t),
            s = o[0],
            a = o[1],
            u = new i(((s + a) * 3) / 4 - a),
            c = 0,
            h = a > 0 ? s - 4 : s;
          for (r = 0; r < h; r += 4)
            (e =
              (n[t.charCodeAt(r)] << 18) |
              (n[t.charCodeAt(r + 1)] << 12) |
              (n[t.charCodeAt(r + 2)] << 6) |
              n[t.charCodeAt(r + 3)]),
              (u[c++] = (e >> 16) & 255),
              (u[c++] = (e >> 8) & 255),
              (u[c++] = 255 & e);
          return (
            2 === a &&
              ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
              (u[c++] = 255 & e)),
            1 === a &&
              ((e =
                (n[t.charCodeAt(r)] << 10) |
                (n[t.charCodeAt(r + 1)] << 4) |
                (n[t.charCodeAt(r + 2)] >> 2)),
              (u[c++] = (e >> 8) & 255),
              (u[c++] = 255 & e)),
            u
          );
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, n = t.length, i = n % 3, o = [], s = 0, a = n - i;
            s < a;
            s += 16383
          )
            o.push(
              (function (t, e, n) {
                for (var i, o = [], s = e; s < n; s += 3)
                  o.push(
                    r[
                      ((i =
                        ((t[s] << 16) & 16711680) +
                        ((t[s + 1] << 8) & 65280) +
                        (255 & t[s + 2])) >>
                        18) &
                        63
                    ] +
                      r[(i >> 12) & 63] +
                      r[(i >> 6) & 63] +
                      r[63 & i]
                  );
                return o.join("");
              })(t, s, s + 16383 > a ? a : s + 16383)
            );
          return (
            1 === i
              ? o.push(r[(e = t[n - 1]) >> 2] + r[(e << 4) & 63] + "==")
              : 2 === i &&
                o.push(
                  r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] +
                    r[(e >> 4) & 63] +
                    r[(e << 2) & 63] +
                    "="
                ),
            o.join("")
          );
        });
      for (
        var r = [],
          n = [],
          i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          o =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0,
          a = o.length;
        s < a;
        ++s
      )
        (r[s] = o[s]), (n[o.charCodeAt(s)] = s);
      function l(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        -1 === r && (r = e);
        var n = r === e ? 0 : 4 - (r % 4);
        return [r, n];
      }
      (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
    },
    44373: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        function n(t, e) {
          if (!t) throw Error(e || "Assertion failed");
        }
        function i(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" === e || "be" === e) && ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || "be"));
        }
        "object" == typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          h =
            "undefined" != typeof window && void 0 !== window.Buffer
              ? window.Buffer
              : r(46601).Buffer;
        } catch (t) {}
        function s(t, e) {
          var r = t.charCodeAt(e);
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : void n(!1, "Invalid character in " + t);
        }
        function a(t, e, r) {
          var n = s(t, r);
          return r - 1 >= e && (n |= s(t, r - 1) << 4), n;
        }
        function l(t, e, r, i) {
          for (var o = 0, s = 0, a = Math.min(t.length, r), l = e; l < a; l++) {
            var u = t.charCodeAt(l) - 48;
            (o *= i),
              (s = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u),
              n(u >= 0 && s < i, "Invalid character"),
              (o += s);
          }
          return o;
        }
        function u(t, e) {
          (t.words = e.words),
            (t.length = e.length),
            (t.negative = e.negative),
            (t.red = e.red);
        }
        if (
          ((o.isBN = function (t) {
            return (
              t instanceof o ||
              (null !== t &&
                "object" == typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return 0 > t.cmp(e) ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ("number" == typeof t) return this._initNumber(t, e, r);
            if ("object" == typeof t) return this._initArray(t, e, r);
            "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
            var i = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i),
                    "le" === r && this._initArray(this.toArray(), e, r)));
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((n("number" == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = Array(this.length));
            for (var i, o, s = 0; s < this.length; s++) this.words[s] = 0;
            var a = 0;
            if ("be" === r)
              for (s = t.length - 1, i = 0; s >= 0; s -= 3)
                (o = t[s] | (t[s - 1] << 8) | (t[s - 2] << 16)),
                  (this.words[i] |= (o << a) & 67108863),
                  (this.words[i + 1] = (o >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), i++);
            else if ("le" === r)
              for (s = 0, i = 0; s < t.length; s += 3)
                (o = t[s] | (t[s + 1] << 8) | (t[s + 2] << 16)),
                  (this.words[i] |= (o << a) & 67108863),
                  (this.words[i + 1] = (o >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), i++);
            return this._strip();
          }),
          (o.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = Array(this.length));
            for (var n, i = 0; i < this.length; i++) this.words[i] = 0;
            var o = 0,
              s = 0;
            if ("be" === r)
              for (i = t.length - 1; i >= e; i -= 2)
                (n = a(t, e, i) << o),
                  (this.words[s] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                    : (o += 8);
            else
              for (
                i = (t.length - e) % 2 == 0 ? e + 1 : e;
                i < t.length;
                i += 2
              )
                (n = a(t, e, i) << o),
                  (this.words[s] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                    : (o += 8);
            this._strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
            n--, (i = (i / e) | 0);
            for (
              var o = t.length - r,
                s = o % n,
                a = Math.min(o, o - s) + r,
                u = 0,
                c = r;
              c < a;
              c += n
            )
              (u = l(t, c, c + n, e)),
                this.imuln(i),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            if (0 !== s) {
              var h = 1;
              for (u = l(t, c, t.length, e), c = 0; c < s; c++) h *= e;
              this.imuln(h),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            }
            this._strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype._move = function (t) {
            u(t, this);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          "undefined" != typeof Symbol && "function" == typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = c;
          } catch (t) {
            o.prototype.inspect = c;
          }
        else o.prototype.inspect = c;
        function c() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var h,
          f = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          d = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          p = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function m(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = (t.length + e.length) | 0;
          (r.length = n), (n = (n - 1) | 0);
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            s = i * o,
            a = 67108863 & s,
            l = (s / 67108864) | 0;
          r.words[0] = a;
          for (var u = 1; u < n; u++) {
            for (
              var c = l >>> 26,
                h = 67108863 & l,
                f = Math.min(u, e.length - 1),
                d = Math.max(0, u - t.length + 1);
              d <= f;
              d++
            ) {
              var p = (u - d) | 0;
              (c +=
                ((s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + h) /
                  67108864) |
                0),
                (h = 67108863 & s);
            }
            (r.words[u] = 0 | h), (l = 0 | c);
          }
          return 0 !== l ? (r.words[u] = 0 | l) : r.length--, r._strip();
        }
        (o.prototype.toString = function (t, e) {
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var r, i = 0, o = 0, s = 0; s < this.length; s++) {
              var a = this.words[s],
                l = (((a << i) | o) & 16777215).toString(16);
              (o = (a >>> (24 - i)) & 16777215),
                (i += 2) >= 26 && ((i -= 26), s--),
                (r =
                  0 !== o || s !== this.length - 1
                    ? f[6 - l.length] + l + r
                    : l + r);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var u = d[t],
              c = p[t];
            r = "";
            var h = this.clone();
            for (h.negative = 0; !h.isZero(); ) {
              var m = h.modrn(c).toString(t);
              r = (h = h.idivn(c)).isZero() ? m + r : f[u - m.length] + m + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % e != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          n(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  n(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          h &&
            (o.prototype.toBuffer = function (t, e) {
              return this.toArrayLike(h, t, e);
            }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (o.prototype.toArrayLike = function (t, e, r) {
            this._strip();
            var i = this.byteLength(),
              o = r || Math.max(1, i);
            n(i <= o, "byte array longer than desired length"),
              n(o > 0, "Requested array length <= 0");
            var s = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
            return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, i), s;
          }),
          (o.prototype._toArrayLikeLE = function (t, e) {
            for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
              var s = (this.words[i] << o) | n;
              (t[r++] = 255 & s),
                r < t.length && (t[r++] = (s >> 8) & 255),
                r < t.length && (t[r++] = (s >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (s >> 24) & 255),
                    (n = 0),
                    (o = 0))
                  : ((n = s >>> 24), (o += 2));
            }
            if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0;
          }),
          (o.prototype._toArrayLikeBE = function (t, e) {
            for (
              var r = t.length - 1, n = 0, i = 0, o = 0;
              i < this.length;
              i++
            ) {
              var s = (this.words[i] << o) | n;
              (t[r--] = 255 & s),
                r >= 0 && (t[r--] = (s >> 8) & 255),
                r >= 0 && (t[r--] = (s >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (s >> 24) & 255), (n = 0), (o = 0))
                  : ((n = s >>> 24), (o += 2));
            }
            if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              (8191 & e) == 0 && ((r += 13), (e >>>= 13)),
              (127 & e) == 0 && ((r += 7), (e >>>= 7)),
              (15 & e) == 0 && ((r += 4), (e >>>= 4)),
              (3 & e) == 0 && ((r += 2), (e >>>= 2)),
              (1 & e) == 0 && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return (this.length - 1) * 26 + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this._strip();
          }),
          (o.prototype.ior = function (t) {
            return n((this.negative | t.negative) == 0), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.iand = function (t) {
            return n((this.negative | t.negative) == 0), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var e, r, n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n];
            if (this !== e)
              for (; n < e.length; n++) this.words[n] = e.words[n];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.ixor = function (t) {
            return n((this.negative | t.negative) == 0), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var i = 0; i < e; i++)
              this.words[i] = 67108863 & ~this.words[i];
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this._strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            n("number" == typeof t && t >= 0);
            var r = (t / 26) | 0,
              i = t % 26;
            return (
              this._expand(r + 1),
              e
                ? (this.words[r] = this.words[r] | (1 << i))
                : (this.words[r] = this.words[r] & ~(1 << i)),
              this._strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this));
            for (var e, r, n, i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e,
                r,
                n = this.iadd(t);
              return (t.negative = 1), n._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var i = this.cmp(t);
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            i > 0 ? ((e = this), (r = t)) : ((e = t), (r = this));
            for (var o = 0, s = 0; s < r.length; s++)
              (o = (n = (0 | e.words[s]) - (0 | r.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & n);
            for (; 0 !== o && s < e.length; s++)
              (o = (n = (0 | e.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & n);
            if (0 === o && s < e.length && e !== this)
              for (; s < e.length; s++) this.words[s] = e.words[s];
            return (
              (this.length = Math.max(this.length, s)),
              e !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var g = function (t, e, r) {
          var n,
            i,
            o,
            s = t.words,
            a = e.words,
            l = r.words,
            u = 0,
            c = 0 | s[0],
            h = 8191 & c,
            f = c >>> 13,
            d = 0 | s[1],
            p = 8191 & d,
            m = d >>> 13,
            g = 0 | s[2],
            y = 8191 & g,
            v = g >>> 13,
            w = 0 | s[3],
            b = 8191 & w,
            E = w >>> 13,
            x = 0 | s[4],
            M = 8191 & x,
            S = x >>> 13,
            A = 0 | s[5],
            T = 8191 & A,
            R = A >>> 13,
            P = 0 | s[6],
            B = 8191 & P,
            k = P >>> 13,
            L = 0 | s[7],
            O = 8191 & L,
            C = L >>> 13,
            I = 0 | s[8],
            F = 8191 & I,
            D = I >>> 13,
            U = 0 | s[9],
            N = 8191 & U,
            _ = U >>> 13,
            j = 0 | a[0],
            V = 8191 & j,
            z = j >>> 13,
            H = 0 | a[1],
            q = 8191 & H,
            $ = H >>> 13,
            W = 0 | a[2],
            Y = 8191 & W,
            Z = W >>> 13,
            K = 0 | a[3],
            G = 8191 & K,
            X = K >>> 13,
            J = 0 | a[4],
            Q = 8191 & J,
            tt = J >>> 13,
            te = 0 | a[5],
            tr = 8191 & te,
            tn = te >>> 13,
            ti = 0 | a[6],
            to = 8191 & ti,
            ts = ti >>> 13,
            ta = 0 | a[7],
            tl = 8191 & ta,
            tu = ta >>> 13,
            tc = 0 | a[8],
            th = 8191 & tc,
            tf = tc >>> 13,
            td = 0 | a[9],
            tp = 8191 & td,
            tm = td >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var tg =
            (((u + (n = Math.imul(h, V))) | 0) +
              ((8191 & (i = ((i = Math.imul(h, z)) + Math.imul(f, V)) | 0)) <<
                13)) |
            0;
          (u = ((((o = Math.imul(f, z)) + (i >>> 13)) | 0) + (tg >>> 26)) | 0),
            (tg &= 67108863),
            (n = Math.imul(p, V)),
            (i = ((i = Math.imul(p, z)) + Math.imul(m, V)) | 0),
            (o = Math.imul(m, z));
          var ty =
            (((u + (n = (n + Math.imul(h, q)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, $)) | 0) + Math.imul(f, q)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, $)) | 0) + (i >>> 13)) | 0) +
              (ty >>> 26)) |
            0),
            (ty &= 67108863),
            (n = Math.imul(y, V)),
            (i = ((i = Math.imul(y, z)) + Math.imul(v, V)) | 0),
            (o = Math.imul(v, z)),
            (n = (n + Math.imul(p, q)) | 0),
            (i = ((i = (i + Math.imul(p, $)) | 0) + Math.imul(m, q)) | 0),
            (o = (o + Math.imul(m, $)) | 0);
          var tv =
            (((u + (n = (n + Math.imul(h, Y)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, Z)) | 0) + Math.imul(f, Y)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, Z)) | 0) + (i >>> 13)) | 0) +
              (tv >>> 26)) |
            0),
            (tv &= 67108863),
            (n = Math.imul(b, V)),
            (i = ((i = Math.imul(b, z)) + Math.imul(E, V)) | 0),
            (o = Math.imul(E, z)),
            (n = (n + Math.imul(y, q)) | 0),
            (i = ((i = (i + Math.imul(y, $)) | 0) + Math.imul(v, q)) | 0),
            (o = (o + Math.imul(v, $)) | 0),
            (n = (n + Math.imul(p, Y)) | 0),
            (i = ((i = (i + Math.imul(p, Z)) | 0) + Math.imul(m, Y)) | 0),
            (o = (o + Math.imul(m, Z)) | 0);
          var tw =
            (((u + (n = (n + Math.imul(h, G)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, X)) | 0) + Math.imul(f, G)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, X)) | 0) + (i >>> 13)) | 0) +
              (tw >>> 26)) |
            0),
            (tw &= 67108863),
            (n = Math.imul(M, V)),
            (i = ((i = Math.imul(M, z)) + Math.imul(S, V)) | 0),
            (o = Math.imul(S, z)),
            (n = (n + Math.imul(b, q)) | 0),
            (i = ((i = (i + Math.imul(b, $)) | 0) + Math.imul(E, q)) | 0),
            (o = (o + Math.imul(E, $)) | 0),
            (n = (n + Math.imul(y, Y)) | 0),
            (i = ((i = (i + Math.imul(y, Z)) | 0) + Math.imul(v, Y)) | 0),
            (o = (o + Math.imul(v, Z)) | 0),
            (n = (n + Math.imul(p, G)) | 0),
            (i = ((i = (i + Math.imul(p, X)) | 0) + Math.imul(m, G)) | 0),
            (o = (o + Math.imul(m, X)) | 0);
          var tb =
            (((u + (n = (n + Math.imul(h, Q)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, tt)) | 0) + Math.imul(f, Q)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, tt)) | 0) + (i >>> 13)) | 0) +
              (tb >>> 26)) |
            0),
            (tb &= 67108863),
            (n = Math.imul(T, V)),
            (i = ((i = Math.imul(T, z)) + Math.imul(R, V)) | 0),
            (o = Math.imul(R, z)),
            (n = (n + Math.imul(M, q)) | 0),
            (i = ((i = (i + Math.imul(M, $)) | 0) + Math.imul(S, q)) | 0),
            (o = (o + Math.imul(S, $)) | 0),
            (n = (n + Math.imul(b, Y)) | 0),
            (i = ((i = (i + Math.imul(b, Z)) | 0) + Math.imul(E, Y)) | 0),
            (o = (o + Math.imul(E, Z)) | 0),
            (n = (n + Math.imul(y, G)) | 0),
            (i = ((i = (i + Math.imul(y, X)) | 0) + Math.imul(v, G)) | 0),
            (o = (o + Math.imul(v, X)) | 0),
            (n = (n + Math.imul(p, Q)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(m, Q)) | 0),
            (o = (o + Math.imul(m, tt)) | 0);
          var tE =
            (((u + (n = (n + Math.imul(h, tr)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, tn)) | 0) + Math.imul(f, tr)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, tn)) | 0) + (i >>> 13)) | 0) +
              (tE >>> 26)) |
            0),
            (tE &= 67108863),
            (n = Math.imul(B, V)),
            (i = ((i = Math.imul(B, z)) + Math.imul(k, V)) | 0),
            (o = Math.imul(k, z)),
            (n = (n + Math.imul(T, q)) | 0),
            (i = ((i = (i + Math.imul(T, $)) | 0) + Math.imul(R, q)) | 0),
            (o = (o + Math.imul(R, $)) | 0),
            (n = (n + Math.imul(M, Y)) | 0),
            (i = ((i = (i + Math.imul(M, Z)) | 0) + Math.imul(S, Y)) | 0),
            (o = (o + Math.imul(S, Z)) | 0),
            (n = (n + Math.imul(b, G)) | 0),
            (i = ((i = (i + Math.imul(b, X)) | 0) + Math.imul(E, G)) | 0),
            (o = (o + Math.imul(E, X)) | 0),
            (n = (n + Math.imul(y, Q)) | 0),
            (i = ((i = (i + Math.imul(y, tt)) | 0) + Math.imul(v, Q)) | 0),
            (o = (o + Math.imul(v, tt)) | 0),
            (n = (n + Math.imul(p, tr)) | 0),
            (i = ((i = (i + Math.imul(p, tn)) | 0) + Math.imul(m, tr)) | 0),
            (o = (o + Math.imul(m, tn)) | 0);
          var tx =
            (((u + (n = (n + Math.imul(h, to)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, ts)) | 0) + Math.imul(f, to)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, ts)) | 0) + (i >>> 13)) | 0) +
              (tx >>> 26)) |
            0),
            (tx &= 67108863),
            (n = Math.imul(O, V)),
            (i = ((i = Math.imul(O, z)) + Math.imul(C, V)) | 0),
            (o = Math.imul(C, z)),
            (n = (n + Math.imul(B, q)) | 0),
            (i = ((i = (i + Math.imul(B, $)) | 0) + Math.imul(k, q)) | 0),
            (o = (o + Math.imul(k, $)) | 0),
            (n = (n + Math.imul(T, Y)) | 0),
            (i = ((i = (i + Math.imul(T, Z)) | 0) + Math.imul(R, Y)) | 0),
            (o = (o + Math.imul(R, Z)) | 0),
            (n = (n + Math.imul(M, G)) | 0),
            (i = ((i = (i + Math.imul(M, X)) | 0) + Math.imul(S, G)) | 0),
            (o = (o + Math.imul(S, X)) | 0),
            (n = (n + Math.imul(b, Q)) | 0),
            (i = ((i = (i + Math.imul(b, tt)) | 0) + Math.imul(E, Q)) | 0),
            (o = (o + Math.imul(E, tt)) | 0),
            (n = (n + Math.imul(y, tr)) | 0),
            (i = ((i = (i + Math.imul(y, tn)) | 0) + Math.imul(v, tr)) | 0),
            (o = (o + Math.imul(v, tn)) | 0),
            (n = (n + Math.imul(p, to)) | 0),
            (i = ((i = (i + Math.imul(p, ts)) | 0) + Math.imul(m, to)) | 0),
            (o = (o + Math.imul(m, ts)) | 0);
          var tM =
            (((u + (n = (n + Math.imul(h, tl)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, tu)) | 0) + Math.imul(f, tl)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, tu)) | 0) + (i >>> 13)) | 0) +
              (tM >>> 26)) |
            0),
            (tM &= 67108863),
            (n = Math.imul(F, V)),
            (i = ((i = Math.imul(F, z)) + Math.imul(D, V)) | 0),
            (o = Math.imul(D, z)),
            (n = (n + Math.imul(O, q)) | 0),
            (i = ((i = (i + Math.imul(O, $)) | 0) + Math.imul(C, q)) | 0),
            (o = (o + Math.imul(C, $)) | 0),
            (n = (n + Math.imul(B, Y)) | 0),
            (i = ((i = (i + Math.imul(B, Z)) | 0) + Math.imul(k, Y)) | 0),
            (o = (o + Math.imul(k, Z)) | 0),
            (n = (n + Math.imul(T, G)) | 0),
            (i = ((i = (i + Math.imul(T, X)) | 0) + Math.imul(R, G)) | 0),
            (o = (o + Math.imul(R, X)) | 0),
            (n = (n + Math.imul(M, Q)) | 0),
            (i = ((i = (i + Math.imul(M, tt)) | 0) + Math.imul(S, Q)) | 0),
            (o = (o + Math.imul(S, tt)) | 0),
            (n = (n + Math.imul(b, tr)) | 0),
            (i = ((i = (i + Math.imul(b, tn)) | 0) + Math.imul(E, tr)) | 0),
            (o = (o + Math.imul(E, tn)) | 0),
            (n = (n + Math.imul(y, to)) | 0),
            (i = ((i = (i + Math.imul(y, ts)) | 0) + Math.imul(v, to)) | 0),
            (o = (o + Math.imul(v, ts)) | 0),
            (n = (n + Math.imul(p, tl)) | 0),
            (i = ((i = (i + Math.imul(p, tu)) | 0) + Math.imul(m, tl)) | 0),
            (o = (o + Math.imul(m, tu)) | 0);
          var tS =
            (((u + (n = (n + Math.imul(h, th)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, tf)) | 0) + Math.imul(f, th)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, tf)) | 0) + (i >>> 13)) | 0) +
              (tS >>> 26)) |
            0),
            (tS &= 67108863),
            (n = Math.imul(N, V)),
            (i = ((i = Math.imul(N, z)) + Math.imul(_, V)) | 0),
            (o = Math.imul(_, z)),
            (n = (n + Math.imul(F, q)) | 0),
            (i = ((i = (i + Math.imul(F, $)) | 0) + Math.imul(D, q)) | 0),
            (o = (o + Math.imul(D, $)) | 0),
            (n = (n + Math.imul(O, Y)) | 0),
            (i = ((i = (i + Math.imul(O, Z)) | 0) + Math.imul(C, Y)) | 0),
            (o = (o + Math.imul(C, Z)) | 0),
            (n = (n + Math.imul(B, G)) | 0),
            (i = ((i = (i + Math.imul(B, X)) | 0) + Math.imul(k, G)) | 0),
            (o = (o + Math.imul(k, X)) | 0),
            (n = (n + Math.imul(T, Q)) | 0),
            (i = ((i = (i + Math.imul(T, tt)) | 0) + Math.imul(R, Q)) | 0),
            (o = (o + Math.imul(R, tt)) | 0),
            (n = (n + Math.imul(M, tr)) | 0),
            (i = ((i = (i + Math.imul(M, tn)) | 0) + Math.imul(S, tr)) | 0),
            (o = (o + Math.imul(S, tn)) | 0),
            (n = (n + Math.imul(b, to)) | 0),
            (i = ((i = (i + Math.imul(b, ts)) | 0) + Math.imul(E, to)) | 0),
            (o = (o + Math.imul(E, ts)) | 0),
            (n = (n + Math.imul(y, tl)) | 0),
            (i = ((i = (i + Math.imul(y, tu)) | 0) + Math.imul(v, tl)) | 0),
            (o = (o + Math.imul(v, tu)) | 0),
            (n = (n + Math.imul(p, th)) | 0),
            (i = ((i = (i + Math.imul(p, tf)) | 0) + Math.imul(m, th)) | 0),
            (o = (o + Math.imul(m, tf)) | 0);
          var tA =
            (((u + (n = (n + Math.imul(h, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, tm)) | 0) + Math.imul(f, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(f, tm)) | 0) + (i >>> 13)) | 0) +
              (tA >>> 26)) |
            0),
            (tA &= 67108863),
            (n = Math.imul(N, q)),
            (i = ((i = Math.imul(N, $)) + Math.imul(_, q)) | 0),
            (o = Math.imul(_, $)),
            (n = (n + Math.imul(F, Y)) | 0),
            (i = ((i = (i + Math.imul(F, Z)) | 0) + Math.imul(D, Y)) | 0),
            (o = (o + Math.imul(D, Z)) | 0),
            (n = (n + Math.imul(O, G)) | 0),
            (i = ((i = (i + Math.imul(O, X)) | 0) + Math.imul(C, G)) | 0),
            (o = (o + Math.imul(C, X)) | 0),
            (n = (n + Math.imul(B, Q)) | 0),
            (i = ((i = (i + Math.imul(B, tt)) | 0) + Math.imul(k, Q)) | 0),
            (o = (o + Math.imul(k, tt)) | 0),
            (n = (n + Math.imul(T, tr)) | 0),
            (i = ((i = (i + Math.imul(T, tn)) | 0) + Math.imul(R, tr)) | 0),
            (o = (o + Math.imul(R, tn)) | 0),
            (n = (n + Math.imul(M, to)) | 0),
            (i = ((i = (i + Math.imul(M, ts)) | 0) + Math.imul(S, to)) | 0),
            (o = (o + Math.imul(S, ts)) | 0),
            (n = (n + Math.imul(b, tl)) | 0),
            (i = ((i = (i + Math.imul(b, tu)) | 0) + Math.imul(E, tl)) | 0),
            (o = (o + Math.imul(E, tu)) | 0),
            (n = (n + Math.imul(y, th)) | 0),
            (i = ((i = (i + Math.imul(y, tf)) | 0) + Math.imul(v, th)) | 0),
            (o = (o + Math.imul(v, tf)) | 0);
          var tT =
            (((u + (n = (n + Math.imul(p, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, tm)) | 0) + Math.imul(m, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(m, tm)) | 0) + (i >>> 13)) | 0) +
              (tT >>> 26)) |
            0),
            (tT &= 67108863),
            (n = Math.imul(N, Y)),
            (i = ((i = Math.imul(N, Z)) + Math.imul(_, Y)) | 0),
            (o = Math.imul(_, Z)),
            (n = (n + Math.imul(F, G)) | 0),
            (i = ((i = (i + Math.imul(F, X)) | 0) + Math.imul(D, G)) | 0),
            (o = (o + Math.imul(D, X)) | 0),
            (n = (n + Math.imul(O, Q)) | 0),
            (i = ((i = (i + Math.imul(O, tt)) | 0) + Math.imul(C, Q)) | 0),
            (o = (o + Math.imul(C, tt)) | 0),
            (n = (n + Math.imul(B, tr)) | 0),
            (i = ((i = (i + Math.imul(B, tn)) | 0) + Math.imul(k, tr)) | 0),
            (o = (o + Math.imul(k, tn)) | 0),
            (n = (n + Math.imul(T, to)) | 0),
            (i = ((i = (i + Math.imul(T, ts)) | 0) + Math.imul(R, to)) | 0),
            (o = (o + Math.imul(R, ts)) | 0),
            (n = (n + Math.imul(M, tl)) | 0),
            (i = ((i = (i + Math.imul(M, tu)) | 0) + Math.imul(S, tl)) | 0),
            (o = (o + Math.imul(S, tu)) | 0),
            (n = (n + Math.imul(b, th)) | 0),
            (i = ((i = (i + Math.imul(b, tf)) | 0) + Math.imul(E, th)) | 0),
            (o = (o + Math.imul(E, tf)) | 0);
          var tR =
            (((u + (n = (n + Math.imul(y, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(y, tm)) | 0) + Math.imul(v, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(v, tm)) | 0) + (i >>> 13)) | 0) +
              (tR >>> 26)) |
            0),
            (tR &= 67108863),
            (n = Math.imul(N, G)),
            (i = ((i = Math.imul(N, X)) + Math.imul(_, G)) | 0),
            (o = Math.imul(_, X)),
            (n = (n + Math.imul(F, Q)) | 0),
            (i = ((i = (i + Math.imul(F, tt)) | 0) + Math.imul(D, Q)) | 0),
            (o = (o + Math.imul(D, tt)) | 0),
            (n = (n + Math.imul(O, tr)) | 0),
            (i = ((i = (i + Math.imul(O, tn)) | 0) + Math.imul(C, tr)) | 0),
            (o = (o + Math.imul(C, tn)) | 0),
            (n = (n + Math.imul(B, to)) | 0),
            (i = ((i = (i + Math.imul(B, ts)) | 0) + Math.imul(k, to)) | 0),
            (o = (o + Math.imul(k, ts)) | 0),
            (n = (n + Math.imul(T, tl)) | 0),
            (i = ((i = (i + Math.imul(T, tu)) | 0) + Math.imul(R, tl)) | 0),
            (o = (o + Math.imul(R, tu)) | 0),
            (n = (n + Math.imul(M, th)) | 0),
            (i = ((i = (i + Math.imul(M, tf)) | 0) + Math.imul(S, th)) | 0),
            (o = (o + Math.imul(S, tf)) | 0);
          var tP =
            (((u + (n = (n + Math.imul(b, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(b, tm)) | 0) + Math.imul(E, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(E, tm)) | 0) + (i >>> 13)) | 0) +
              (tP >>> 26)) |
            0),
            (tP &= 67108863),
            (n = Math.imul(N, Q)),
            (i = ((i = Math.imul(N, tt)) + Math.imul(_, Q)) | 0),
            (o = Math.imul(_, tt)),
            (n = (n + Math.imul(F, tr)) | 0),
            (i = ((i = (i + Math.imul(F, tn)) | 0) + Math.imul(D, tr)) | 0),
            (o = (o + Math.imul(D, tn)) | 0),
            (n = (n + Math.imul(O, to)) | 0),
            (i = ((i = (i + Math.imul(O, ts)) | 0) + Math.imul(C, to)) | 0),
            (o = (o + Math.imul(C, ts)) | 0),
            (n = (n + Math.imul(B, tl)) | 0),
            (i = ((i = (i + Math.imul(B, tu)) | 0) + Math.imul(k, tl)) | 0),
            (o = (o + Math.imul(k, tu)) | 0),
            (n = (n + Math.imul(T, th)) | 0),
            (i = ((i = (i + Math.imul(T, tf)) | 0) + Math.imul(R, th)) | 0),
            (o = (o + Math.imul(R, tf)) | 0);
          var tB =
            (((u + (n = (n + Math.imul(M, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(M, tm)) | 0) + Math.imul(S, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(S, tm)) | 0) + (i >>> 13)) | 0) +
              (tB >>> 26)) |
            0),
            (tB &= 67108863),
            (n = Math.imul(N, tr)),
            (i = ((i = Math.imul(N, tn)) + Math.imul(_, tr)) | 0),
            (o = Math.imul(_, tn)),
            (n = (n + Math.imul(F, to)) | 0),
            (i = ((i = (i + Math.imul(F, ts)) | 0) + Math.imul(D, to)) | 0),
            (o = (o + Math.imul(D, ts)) | 0),
            (n = (n + Math.imul(O, tl)) | 0),
            (i = ((i = (i + Math.imul(O, tu)) | 0) + Math.imul(C, tl)) | 0),
            (o = (o + Math.imul(C, tu)) | 0),
            (n = (n + Math.imul(B, th)) | 0),
            (i = ((i = (i + Math.imul(B, tf)) | 0) + Math.imul(k, th)) | 0),
            (o = (o + Math.imul(k, tf)) | 0);
          var tk =
            (((u + (n = (n + Math.imul(T, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(T, tm)) | 0) + Math.imul(R, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(R, tm)) | 0) + (i >>> 13)) | 0) +
              (tk >>> 26)) |
            0),
            (tk &= 67108863),
            (n = Math.imul(N, to)),
            (i = ((i = Math.imul(N, ts)) + Math.imul(_, to)) | 0),
            (o = Math.imul(_, ts)),
            (n = (n + Math.imul(F, tl)) | 0),
            (i = ((i = (i + Math.imul(F, tu)) | 0) + Math.imul(D, tl)) | 0),
            (o = (o + Math.imul(D, tu)) | 0),
            (n = (n + Math.imul(O, th)) | 0),
            (i = ((i = (i + Math.imul(O, tf)) | 0) + Math.imul(C, th)) | 0),
            (o = (o + Math.imul(C, tf)) | 0);
          var tL =
            (((u + (n = (n + Math.imul(B, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(B, tm)) | 0) + Math.imul(k, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(k, tm)) | 0) + (i >>> 13)) | 0) +
              (tL >>> 26)) |
            0),
            (tL &= 67108863),
            (n = Math.imul(N, tl)),
            (i = ((i = Math.imul(N, tu)) + Math.imul(_, tl)) | 0),
            (o = Math.imul(_, tu)),
            (n = (n + Math.imul(F, th)) | 0),
            (i = ((i = (i + Math.imul(F, tf)) | 0) + Math.imul(D, th)) | 0),
            (o = (o + Math.imul(D, tf)) | 0);
          var tO =
            (((u + (n = (n + Math.imul(O, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(O, tm)) | 0) + Math.imul(C, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(C, tm)) | 0) + (i >>> 13)) | 0) +
              (tO >>> 26)) |
            0),
            (tO &= 67108863),
            (n = Math.imul(N, th)),
            (i = ((i = Math.imul(N, tf)) + Math.imul(_, th)) | 0),
            (o = Math.imul(_, tf));
          var tC =
            (((u + (n = (n + Math.imul(F, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(F, tm)) | 0) + Math.imul(D, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(D, tm)) | 0) + (i >>> 13)) | 0) +
              (tC >>> 26)) |
            0),
            (tC &= 67108863);
          var tI =
            (((u + (n = Math.imul(N, tp))) | 0) +
              ((8191 & (i = ((i = Math.imul(N, tm)) + Math.imul(_, tp)) | 0)) <<
                13)) |
            0;
          return (
            (u =
              ((((o = Math.imul(_, tm)) + (i >>> 13)) | 0) + (tI >>> 26)) | 0),
            (tI &= 67108863),
            (l[0] = tg),
            (l[1] = ty),
            (l[2] = tv),
            (l[3] = tw),
            (l[4] = tb),
            (l[5] = tE),
            (l[6] = tx),
            (l[7] = tM),
            (l[8] = tS),
            (l[9] = tA),
            (l[10] = tT),
            (l[11] = tR),
            (l[12] = tP),
            (l[13] = tB),
            (l[14] = tk),
            (l[15] = tL),
            (l[16] = tO),
            (l[17] = tC),
            (l[18] = tI),
            0 !== u && ((l[19] = u), r.length++),
            r
          );
        };
        function y(t, e, r) {
          (r.negative = e.negative ^ t.negative),
            (r.length = t.length + e.length);
          for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
            var s = i;
            i = 0;
            for (
              var a = 67108863 & n,
                l = Math.min(o, e.length - 1),
                u = Math.max(0, o - t.length + 1);
              u <= l;
              u++
            ) {
              var c = o - u,
                h = (0 | t.words[c]) * (0 | e.words[u]),
                f = 67108863 & h;
              (s = (s + ((h / 67108864) | 0)) | 0),
                (a = 67108863 & (f = (f + a) | 0)),
                (i += (s = (s + (f >>> 26)) | 0) >>> 26),
                (s &= 67108863);
            }
            (r.words[o] = a), (n = s), (s = i);
          }
          return 0 !== n ? (r.words[o] = n) : r.length--, r._strip();
        }
        function v(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (g = m),
          (o.prototype.mulTo = function (t, e) {
            var r,
              n = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? g(this, t, e)
              : n < 63
              ? m(this, t, e)
              : y(this, t, e);
          }),
          (v.prototype.makeRBT = function (t) {
            for (
              var e = Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t);
            return e;
          }),
          (v.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1);
            return n;
          }),
          (v.prototype.permute = function (t, e, r, n, i, o) {
            for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]]);
          }),
          (v.prototype.transform = function (t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i);
            for (var s = 1; s < i; s <<= 1)
              for (
                var a = s << 1,
                  l = Math.cos((2 * Math.PI) / a),
                  u = Math.sin((2 * Math.PI) / a),
                  c = 0;
                c < i;
                c += a
              )
                for (var h = l, f = u, d = 0; d < s; d++) {
                  var p = r[c + d],
                    m = n[c + d],
                    g = r[c + d + s],
                    y = n[c + d + s],
                    v = h * g - f * y;
                  (y = h * y + f * g),
                    (g = v),
                    (r[c + d] = p + g),
                    (n[c + d] = m + y),
                    (r[c + d + s] = p - g),
                    (n[c + d + s] = m - y),
                    d !== a &&
                      ((v = l * h - u * f), (f = l * f + u * h), (h = v));
                }
          }),
          (v.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + n);
          }),
          (v.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n];
                (t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i);
              }
          }),
          (v.prototype.normalize13b = function (t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r;
              (t[n] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return t;
          }),
          (v.prototype.convert13b = function (t, e, r, i) {
            for (var o = 0, s = 0; s < e; s++)
              (o += 0 | t[s]),
                (r[2 * s] = 8191 & o),
                (o >>>= 13),
                (r[2 * s + 1] = 8191 & o),
                (o >>>= 13);
            for (s = 2 * e; s < i; ++s) r[s] = 0;
            n(0 === o), n((-8192 & o) == 0);
          }),
          (v.prototype.stub = function (t) {
            for (var e = Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (v.prototype.mulp = function (t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              s = Array(n),
              a = Array(n),
              l = Array(n),
              u = Array(n),
              c = Array(n),
              h = Array(n),
              f = r.words;
            (f.length = n),
              this.convert13b(t.words, t.length, s, n),
              this.convert13b(e.words, e.length, u, n),
              this.transform(s, o, a, l, n, i),
              this.transform(u, o, c, h, n, i);
            for (var d = 0; d < n; d++) {
              var p = a[d] * c[d] - l[d] * h[d];
              (l[d] = a[d] * h[d] + l[d] * c[d]), (a[d] = p);
            }
            return (
              this.conjugate(a, l, n),
              this.transform(a, l, f, o, n, i),
              this.conjugate(f, o, n),
              this.normalize13b(f, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r._strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), this.mulTo(t, e);
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), y(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            var e = t < 0;
            e && (t = -t), n("number" == typeof t), n(t < 67108864);
            for (var r = 0, i = 0; i < this.length; i++) {
              var o = (0 | this.words[i]) * t,
                s = (67108863 & o) + (67108863 & r);
              (r >>= 26),
                (r += ((o / 67108864) | 0) + (s >>> 26)),
                (this.words[i] = 67108863 & s);
            }
            return (
              0 !== r && ((this.words[i] = r), this.length++),
              e ? this.ineg() : this
            );
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26;
                e[r] = (t.words[n] >>> i) & 1;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            n("number" == typeof t && t >= 0);
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var s = 0;
              for (e = 0; e < this.length; e++) {
                var a = this.words[e] & o,
                  l = ((0 | this.words[e]) - a) << r;
                (this.words[e] = l | s), (s = a >>> (26 - r));
              }
              s && ((this.words[e] = s), this.length++);
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e];
              for (e = 0; e < i; e++) this.words[e] = 0;
              this.length += i;
            }
            return this._strip();
          }),
          (o.prototype.ishln = function (t) {
            return n(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            n("number" == typeof t && t >= 0),
              (i = e ? (e - (e % 26)) / 26 : 0);
            var i,
              o = t % 26,
              s = Math.min((t - o) / 26, this.length),
              a = 67108863 ^ ((67108863 >>> o) << o);
            if (((i -= s), (i = Math.max(0, i)), r)) {
              for (var l = 0; l < s; l++) r.words[l] = this.words[l];
              r.length = s;
            }
            if (0 === s);
            else if (this.length > s)
              for (this.length -= s, l = 0; l < this.length; l++)
                this.words[l] = this.words[l + s];
            else (this.words[0] = 0), (this.length = 1);
            var u = 0;
            for (l = this.length - 1; l >= 0 && (0 !== u || l >= i); l--) {
              var c = 0 | this.words[l];
              (this.words[l] = (u << (26 - o)) | (c >>> o)), (u = c & a);
            }
            return (
              r && 0 !== u && (r.words[r.length++] = u),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return !(this.length <= r) && !!(this.words[r] & (1 << e));
          }),
          (o.prototype.imaskn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return (n(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= r)
              ? this
              : (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e &&
                  (this.words[this.length - 1] &=
                    67108863 ^ ((67108863 >>> e) << e)),
                this._strip());
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (n("number" == typeof t), n(t < 67108864), t < 0)
              ? this.isubn(-t)
              : 0 !== this.negative
              ? (1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0))
                  : ((this.negative = 0), this.isubn(t), (this.negative = 1)),
                this)
              : this._iaddn(t);
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((n("number" == typeof t), n(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this._strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var i,
              o,
              s = t.length + r;
            this._expand(s);
            var a = 0;
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + a;
              var l = (0 | t.words[i]) * e;
              (o -= 67108863 & l),
                (a = (o >> 26) - ((l / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o);
            }
            for (; i < this.length - r; i++)
              (a = (o = (0 | this.words[i + r]) + a) >> 26),
                (this.words[i + r] = 67108863 & o);
            if (0 === a) return this._strip();
            for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
              (a = (o = -(0 | this.words[i]) + a) >> 26),
                (this.words[i] = 67108863 & o);
            return (this.negative = 1), this._strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r,
              n = this.length - t.length,
              i = this.clone(),
              s = t,
              a = 0 | s.words[s.length - 1];
            0 != (n = 26 - this._countBits(a)) &&
              ((s = s.ushln(n)), i.iushln(n), (a = 0 | s.words[s.length - 1]));
            var l = i.length - s.length;
            if ("mod" !== e) {
              ((r = new o(null)).length = l + 1), (r.words = Array(r.length));
              for (var u = 0; u < r.length; u++) r.words[u] = 0;
            }
            var c = i.clone()._ishlnsubmul(s, 1, l);
            0 === c.negative && ((i = c), r && (r.words[l] = 1));
            for (var h = l - 1; h >= 0; h--) {
              var f =
                (0 | i.words[s.length + h]) * 67108864 +
                (0 | i.words[s.length + h - 1]);
              for (
                f = Math.min((f / a) | 0, 67108863), i._ishlnsubmul(s, f, h);
                0 !== i.negative;

              )
                f--,
                  (i.negative = 0),
                  i._ishlnsubmul(s, 1, h),
                  i.isZero() || (i.negative ^= 1);
              r && (r.words[h] = f);
            }
            return (
              r && r._strip(),
              i._strip(),
              "div" !== e && 0 !== n && i.iushrn(n),
              { div: r || null, mod: i }
            );
          }),
          (o.prototype.divmod = function (t, e, r) {
            var i, s, a;
            return (n(!t.isZero()), this.isZero())
              ? { div: new o(0), mod: new o(0) }
              : 0 !== this.negative && 0 === t.negative
              ? ((a = this.neg().divmod(t, e)),
                "mod" !== e && (i = a.div.neg()),
                "div" !== e &&
                  ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                { div: i, mod: s })
              : 0 === this.negative && 0 !== t.negative
              ? ((a = this.divmod(t.neg(), e)),
                "mod" !== e && (i = a.div.neg()),
                { div: i, mod: a.mod })
              : (this.negative & t.negative) != 0
              ? ((a = this.neg().divmod(t.neg(), e)),
                "div" !== e &&
                  ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)),
                { div: a.div, mod: s })
              : t.length > this.length || 0 > this.cmp(t)
              ? { div: new o(0), mod: this }
              : 1 === t.length
              ? "div" === e
                ? { div: this.divn(t.words[0]), mod: null }
                : "mod" === e
                ? { div: null, mod: new o(this.modrn(t.words[0])) }
                : {
                    div: this.divn(t.words[0]),
                    mod: new o(this.modrn(t.words[0])),
                  }
              : this._wordDiv(t, e);
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n);
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modrn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = 67108864 % t, i = 0, o = this.length - 1; o >= 0; o--)
              i = (r * i + (0 | this.words[o])) % t;
            return e ? -i : i;
          }),
          (o.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (o.prototype.idivn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = 0, i = this.length - 1; i >= 0; i--) {
              var o = (0 | this.words[i]) + 67108864 * r;
              (this.words[i] = (o / t) | 0), (r = o % t);
            }
            return this._strip(), e ? this.ineg() : this;
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i = new o(1), s = new o(0), a = new o(0), l = new o(1), u = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++u;
            for (var c = r.clone(), h = e.clone(); !e.isZero(); ) {
              for (
                var f = 0, d = 1;
                (e.words[0] & d) == 0 && f < 26;
                ++f, d <<= 1
              );
              if (f > 0)
                for (e.iushrn(f); f-- > 0; )
                  (i.isOdd() || s.isOdd()) && (i.iadd(c), s.isub(h)),
                    i.iushrn(1),
                    s.iushrn(1);
              for (
                var p = 0, m = 1;
                (r.words[0] & m) == 0 && p < 26;
                ++p, m <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (a.isOdd() || l.isOdd()) && (a.iadd(c), l.isub(h)),
                    a.iushrn(1),
                    l.iushrn(1);
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(a), s.isub(l))
                : (r.isub(e), a.isub(i), l.isub(s));
            }
            return { a: a, b: l, gcd: r.iushln(u) };
          }),
          (o.prototype._invmp = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e,
              r = this,
              i = t.clone();
            r = 0 !== r.negative ? r.umod(t) : r.clone();
            for (
              var s = new o(1), a = new o(0), l = i.clone();
              r.cmpn(1) > 0 && i.cmpn(1) > 0;

            ) {
              for (
                var u = 0, c = 1;
                (r.words[0] & c) == 0 && u < 26;
                ++u, c <<= 1
              );
              if (u > 0)
                for (r.iushrn(u); u-- > 0; )
                  s.isOdd() && s.iadd(l), s.iushrn(1);
              for (
                var h = 0, f = 1;
                (i.words[0] & f) == 0 && h < 26;
                ++h, f <<= 1
              );
              if (h > 0)
                for (i.iushrn(h); h-- > 0; )
                  a.isOdd() && a.iadd(l), a.iushrn(1);
              r.cmp(i) >= 0 ? (r.isub(i), s.isub(a)) : (i.isub(r), a.isub(s));
            }
            return 0 > (e = 0 === r.cmpn(1) ? s : a).cmpn(0) && e.iadd(t), e;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = e.cmp(r);
              if (i < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(n);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (o.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            n("number" == typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this;
            for (var o = i, s = r; 0 !== o && s < this.length; s++) {
              var a = 0 | this.words[s];
              (a += o), (o = a >>> 26), (a &= 67108863), (this.words[s] = a);
            }
            return 0 !== o && ((this.words[s] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this._strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), n(t <= 67108863, "Number is too big");
              var i = 0 | this.words[0];
              e = i === t ? 0 : i < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r];
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return 0 >= this.cmpn(t);
          }),
          (o.prototype.lte = function (t) {
            return 0 >= this.cmp(t);
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new A(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              n(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              n(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              n(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              n(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              n(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              n(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              n(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              n(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              n(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              n(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              n(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              n(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              n(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var w = { k256: null, p224: null, p192: null, p25519: null };
        function b(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function E() {
          b.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function x() {
          b.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function M() {
          b.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function S() {
          b.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function A(t) {
          if ("string" == typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            n(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function T(t) {
          A.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (b.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = Array(Math.ceil(this.n / 13))), t;
        }),
          (b.prototype.ireduce = function (t) {
            var e,
              r = t;
            do
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            while (e > this.n);
            var n = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (b.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (b.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(E, b),
          (E.prototype.split = function (t, e) {
            for (var r = Math.min(t.length, 9), n = 0; n < r; n++)
              e.words[n] = t.words[n];
            if (((e.length = r), t.length <= 9)) {
              (t.words[0] = 0), (t.length = 1);
              return;
            }
            var i = t.words[9];
            for (n = 10, e.words[e.length++] = 4194303 & i; n < t.length; n++) {
              var o = 0 | t.words[n];
              (t.words[n - 10] = ((4194303 & o) << 4) | (i >>> 22)), (i = o);
            }
            (i >>>= 22),
              (t.words[n - 10] = i),
              0 === i && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (E.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r];
              (e += 977 * n),
                (t.words[r] = 67108863 & e),
                (e = 64 * n + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          i(x, b),
          i(M, b),
          i(S, b),
          (S.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = (0 | t.words[r]) * 19 + e,
                i = 67108863 & n;
              (n >>>= 26), (t.words[r] = i), (e = n);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            var e;
            if (w[t]) return w[t];
            if ("k256" === t) e = new E();
            else if ("p224" === t) e = new x();
            else if ("p192" === t) e = new M();
            else if ("p25519" === t) e = new S();
            else throw Error("Unknown prime " + t);
            return (w[t] = e), e;
          }),
          (A.prototype._verify1 = function (t) {
            n(0 === t.negative, "red works only with positives"),
              n(t.red, "red works only with red numbers");
          }),
          (A.prototype._verify2 = function (t, e) {
            n((t.negative | e.negative) == 0, "red works only with positives"),
              n(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (A.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (u(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (A.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (A.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (A.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (A.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
          }),
          (A.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r;
          }),
          (A.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (A.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (A.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (A.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (A.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (A.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((n(e % 2 == 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var i = this.m.subn(1), s = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              s++, i.iushrn(1);
            n(!i.isZero());
            var a = new o(1).toRed(this),
              l = a.redNeg(),
              u = this.m.subn(1).iushrn(1),
              c = this.m.bitLength();
            for (
              c = new o(2 * c * c).toRed(this);
              0 !== this.pow(c, u).cmp(l);

            )
              c.redIAdd(l);
            for (
              var h = this.pow(c, i),
                f = this.pow(t, i.addn(1).iushrn(1)),
                d = this.pow(t, i),
                p = s;
              0 !== d.cmp(a);

            ) {
              for (var m = d, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
              n(g < p);
              var y = this.pow(h, new o(1).iushln(p - g - 1));
              (f = f.redMul(y)), (h = y.redSqr()), (d = d.redMul(h)), (p = g);
            }
            return f;
          }),
          (A.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (A.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
            var i = r[0],
              s = 0,
              a = 0,
              l = e.bitLength() % 26;
            for (0 === l && (l = 26), n = e.length - 1; n >= 0; n--) {
              for (var u = e.words[n], c = l - 1; c >= 0; c--) {
                var h = (u >> c) & 1;
                if ((i !== r[0] && (i = this.sqr(i)), 0 === h && 0 === s)) {
                  a = 0;
                  continue;
                }
                (s <<= 1),
                  (s |= h),
                  (4 == ++a || (0 === n && 0 === c)) &&
                    ((i = this.mul(i, r[s])), (a = 0), (s = 0));
              }
              l = 26;
            }
            return i;
          }),
          (A.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (A.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new T(t);
          }),
          i(T, A),
          (T.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (T.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (T.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : 0 > i.cmpn(0) && (o = i.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (T.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              s = i;
            return (
              i.cmp(this.m) >= 0
                ? (s = i.isub(this.m))
                : 0 > i.cmpn(0) && (s = i.iadd(this.m)),
              s._forceRed(this)
            );
          }),
          (T.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    88806: function (t, e, r) {
      "use strict";
      var n = r(82957).Buffer,
        i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  });
              }
            : function (t, e, r, n) {
                void 0 === n && (n = r), (t[n] = e[r]);
              }),
        o =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, e) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: e,
                });
              }
            : function (t, e) {
                t.default = e;
              }),
        s =
          (this && this.__decorate) ||
          function (t, e, r, n) {
            var i,
              o = arguments.length,
              s =
                o < 3
                  ? e
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(e, r))
                  : n;
            if (
              "object" == typeof Reflect &&
              "function" == typeof Reflect.decorate
            )
              s = Reflect.decorate(t, e, r, n);
            else
              for (var a = t.length - 1; a >= 0; a--)
                (i = t[a]) &&
                  (s = (o < 3 ? i(s) : o > 3 ? i(e, r, s) : i(e, r)) || s);
            return o > 3 && s && Object.defineProperty(e, r, s), s;
          },
        a =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var r in t)
                "default" !== r &&
                  Object.hasOwnProperty.call(t, r) &&
                  i(e, t, r);
            return o(e, t), e;
          },
        l =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.deserializeUnchecked =
          e.deserialize =
          e.serialize =
          e.BinaryReader =
          e.BinaryWriter =
          e.BorshError =
          e.baseDecode =
          e.baseEncode =
            void 0);
      let u = l(r(44373)),
        c = l(r(22525)),
        h = a(r(65768)),
        f = new (
          "function" != typeof TextDecoder ? h.TextDecoder : TextDecoder
        )("utf-8", { fatal: !0 });
      (e.baseEncode = function (t) {
        return (
          "string" == typeof t && (t = n.from(t, "utf8")),
          c.default.encode(n.from(t))
        );
      }),
        (e.baseDecode = function (t) {
          return n.from(c.default.decode(t));
        });
      class d extends Error {
        constructor(t) {
          super(t), (this.fieldPath = []), (this.originalMessage = t);
        }
        addToFieldPath(t) {
          this.fieldPath.splice(0, 0, t),
            (this.message =
              this.originalMessage + ": " + this.fieldPath.join("."));
        }
      }
      e.BorshError = d;
      class p {
        constructor() {
          (this.buf = n.alloc(1024)), (this.length = 0);
        }
        maybeResize() {
          this.buf.length < 16 + this.length &&
            (this.buf = n.concat([this.buf, n.alloc(1024)]));
        }
        writeU8(t) {
          this.maybeResize(),
            this.buf.writeUInt8(t, this.length),
            (this.length += 1);
        }
        writeU16(t) {
          this.maybeResize(),
            this.buf.writeUInt16LE(t, this.length),
            (this.length += 2);
        }
        writeU32(t) {
          this.maybeResize(),
            this.buf.writeUInt32LE(t, this.length),
            (this.length += 4);
        }
        writeU64(t) {
          this.maybeResize(),
            this.writeBuffer(n.from(new u.default(t).toArray("le", 8)));
        }
        writeU128(t) {
          this.maybeResize(),
            this.writeBuffer(n.from(new u.default(t).toArray("le", 16)));
        }
        writeU256(t) {
          this.maybeResize(),
            this.writeBuffer(n.from(new u.default(t).toArray("le", 32)));
        }
        writeU512(t) {
          this.maybeResize(),
            this.writeBuffer(n.from(new u.default(t).toArray("le", 64)));
        }
        writeBuffer(t) {
          (this.buf = n.concat([
            n.from(this.buf.subarray(0, this.length)),
            t,
            n.alloc(1024),
          ])),
            (this.length += t.length);
        }
        writeString(t) {
          this.maybeResize();
          let e = n.from(t, "utf8");
          this.writeU32(e.length), this.writeBuffer(e);
        }
        writeFixedArray(t) {
          this.writeBuffer(n.from(t));
        }
        writeArray(t, e) {
          for (let r of (this.maybeResize(), this.writeU32(t.length), t))
            this.maybeResize(), e(r);
        }
        toArray() {
          return this.buf.subarray(0, this.length);
        }
      }
      function m(t, e, r) {
        let n = r.value;
        r.value = function (...t) {
          try {
            return n.apply(this, t);
          } catch (t) {
            if (
              t instanceof RangeError &&
              ["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(
                t.code
              ) >= 0
            )
              throw new d("Reached the end of buffer when deserializing");
            throw t;
          }
        };
      }
      e.BinaryWriter = p;
      class g {
        constructor(t) {
          (this.buf = t), (this.offset = 0);
        }
        readU8() {
          let t = this.buf.readUInt8(this.offset);
          return (this.offset += 1), t;
        }
        readU16() {
          let t = this.buf.readUInt16LE(this.offset);
          return (this.offset += 2), t;
        }
        readU32() {
          let t = this.buf.readUInt32LE(this.offset);
          return (this.offset += 4), t;
        }
        readU64() {
          let t = this.readBuffer(8);
          return new u.default(t, "le");
        }
        readU128() {
          let t = this.readBuffer(16);
          return new u.default(t, "le");
        }
        readU256() {
          let t = this.readBuffer(32);
          return new u.default(t, "le");
        }
        readU512() {
          let t = this.readBuffer(64);
          return new u.default(t, "le");
        }
        readBuffer(t) {
          if (this.offset + t > this.buf.length)
            throw new d(`Expected buffer length ${t} isn't within bounds`);
          let e = this.buf.slice(this.offset, this.offset + t);
          return (this.offset += t), e;
        }
        readString() {
          let t = this.readU32(),
            e = this.readBuffer(t);
          try {
            return f.decode(e);
          } catch (t) {
            throw new d(`Error decoding UTF-8 string: ${t}`);
          }
        }
        readFixedArray(t) {
          return new Uint8Array(this.readBuffer(t));
        }
        readArray(t) {
          let e = this.readU32(),
            r = [];
          for (let n = 0; n < e; ++n) r.push(t());
          return r;
        }
      }
      function y(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      function v(t, e, r, n, i) {
        try {
          if ("string" == typeof n) i[`write${y(n)}`](r);
          else if (n instanceof Array) {
            if ("number" == typeof n[0]) {
              if (r.length !== n[0])
                throw new d(
                  `Expecting byte array of length ${n[0]}, but got ${r.length} bytes`
                );
              i.writeFixedArray(r);
            } else if (2 === n.length && "number" == typeof n[1]) {
              if (r.length !== n[1])
                throw new d(
                  `Expecting byte array of length ${n[1]}, but got ${r.length} bytes`
                );
              for (let e = 0; e < n[1]; e++) v(t, null, r[e], n[0], i);
            } else
              i.writeArray(r, (r) => {
                v(t, e, r, n[0], i);
              });
          } else if (void 0 !== n.kind)
            switch (n.kind) {
              case "option":
                null == r
                  ? i.writeU8(0)
                  : (i.writeU8(1), v(t, e, r, n.type, i));
                break;
              case "map":
                i.writeU32(r.size),
                  r.forEach((r, o) => {
                    v(t, e, o, n.key, i), v(t, e, r, n.value, i);
                  });
                break;
              default:
                throw new d(`FieldType ${n} unrecognized`);
            }
          else w(t, r, i);
        } catch (t) {
          throw (t instanceof d && t.addToFieldPath(e), t);
        }
      }
      function w(t, e, r) {
        if ("function" == typeof e.borshSerialize) {
          e.borshSerialize(r);
          return;
        }
        let n = t.get(e.constructor);
        if (!n) throw new d(`Class ${e.constructor.name} is missing in schema`);
        if ("struct" === n.kind)
          n.fields.map(([n, i]) => {
            v(t, n, e[n], i, r);
          });
        else if ("enum" === n.kind) {
          let i = e[n.field];
          for (let o = 0; o < n.values.length; ++o) {
            let [s, a] = n.values[o];
            if (s === i) {
              r.writeU8(o), v(t, s, e[s], a, r);
              break;
            }
          }
        } else
          throw new d(
            `Unexpected schema kind: ${n.kind} for ${e.constructor.name}`
          );
      }
      function b(t, e, r, n) {
        try {
          if ("string" == typeof r) return n[`read${y(r)}`]();
          if (r instanceof Array) {
            if ("number" == typeof r[0]) return n.readFixedArray(r[0]);
            if ("number" != typeof r[1])
              return n.readArray(() => b(t, e, r[0], n));
            {
              let e = [];
              for (let i = 0; i < r[1]; i++) e.push(b(t, null, r[0], n));
              return e;
            }
          }
          if ("option" === r.kind) {
            if (n.readU8()) return b(t, e, r.type, n);
            return;
          }
          if ("map" === r.kind) {
            let i = new Map(),
              o = n.readU32();
            for (let s = 0; s < o; s++) {
              let o = b(t, e, r.key, n),
                s = b(t, e, r.value, n);
              i.set(o, s);
            }
            return i;
          }
          return E(t, r, n);
        } catch (t) {
          throw (t instanceof d && t.addToFieldPath(e), t);
        }
      }
      function E(t, e, r) {
        if ("function" == typeof e.borshDeserialize)
          return e.borshDeserialize(r);
        let n = t.get(e);
        if (!n) throw new d(`Class ${e.name} is missing in schema`);
        if ("struct" === n.kind) {
          let n = {};
          for (let [i, o] of t.get(e).fields) n[i] = b(t, i, o, r);
          return new e(n);
        }
        if ("enum" === n.kind) {
          let i = r.readU8();
          if (i >= n.values.length)
            throw new d(`Enum index: ${i} is out of range`);
          let [o, s] = n.values[i],
            a = b(t, o, s, r);
          return new e({ [o]: a });
        }
        throw new d(
          `Unexpected schema kind: ${n.kind} for ${e.constructor.name}`
        );
      }
      s([m], g.prototype, "readU8", null),
        s([m], g.prototype, "readU16", null),
        s([m], g.prototype, "readU32", null),
        s([m], g.prototype, "readU64", null),
        s([m], g.prototype, "readU128", null),
        s([m], g.prototype, "readU256", null),
        s([m], g.prototype, "readU512", null),
        s([m], g.prototype, "readString", null),
        s([m], g.prototype, "readFixedArray", null),
        s([m], g.prototype, "readArray", null),
        (e.BinaryReader = g),
        (e.serialize = function (t, e, r = p) {
          let n = new r();
          return w(t, e, n), n.toArray();
        }),
        (e.deserialize = function (t, e, r, n = g) {
          let i = new n(r),
            o = E(t, e, i);
          if (i.offset < r.length)
            throw new d(
              `Unexpected ${r.length - i.offset} bytes after deserialized data`
            );
          return o;
        }),
        (e.deserializeUnchecked = function (t, e, r, n = g) {
          return E(t, e, new n(r));
        });
    },
    48644: function (t, e, r) {
      "use strict";
      var n = r(73306).Buffer;
      t.exports = function (t) {
        if (t.length >= 255) throw TypeError("Alphabet too long");
        for (var e = new Uint8Array(256), r = 0; r < e.length; r++) e[r] = 255;
        for (var i = 0; i < t.length; i++) {
          var o = t.charAt(i),
            s = o.charCodeAt(0);
          if (255 !== e[s]) throw TypeError(o + " is ambiguous");
          e[s] = i;
        }
        var a = t.length,
          l = t.charAt(0),
          u = Math.log(a) / Math.log(256),
          c = Math.log(256) / Math.log(a);
        function h(t) {
          if ("string" != typeof t) throw TypeError("Expected String");
          if (0 === t.length) return n.alloc(0);
          for (var r = 0, i = 0, o = 0; t[r] === l; ) i++, r++;
          for (
            var s = ((t.length - r) * u + 1) >>> 0, c = new Uint8Array(s);
            r < t.length;

          ) {
            var h = t.charCodeAt(r);
            if (h > 255) return;
            var f = e[h];
            if (255 === f) return;
            for (var d = 0, p = s - 1; (0 !== f || d < o) && -1 !== p; p--, d++)
              (f += (a * c[p]) >>> 0),
                (c[p] = f % 256 >>> 0),
                (f = (f / 256) >>> 0);
            if (0 !== f) throw Error("Non-zero carry");
            (o = d), r++;
          }
          for (var m = s - o; m !== s && 0 === c[m]; ) m++;
          var g = n.allocUnsafe(i + (s - m));
          g.fill(0, 0, i);
          for (var y = i; m !== s; ) g[y++] = c[m++];
          return g;
        }
        return {
          encode: function (e) {
            if (
              ((Array.isArray(e) || e instanceof Uint8Array) && (e = n.from(e)),
              !n.isBuffer(e))
            )
              throw TypeError("Expected Buffer");
            if (0 === e.length) return "";
            for (var r = 0, i = 0, o = 0, s = e.length; o !== s && 0 === e[o]; )
              o++, r++;
            for (
              var u = ((s - o) * c + 1) >>> 0, h = new Uint8Array(u);
              o !== s;

            ) {
              for (
                var f = e[o], d = 0, p = u - 1;
                (0 !== f || d < i) && -1 !== p;
                p--, d++
              )
                (f += (256 * h[p]) >>> 0),
                  (h[p] = f % a >>> 0),
                  (f = (f / a) >>> 0);
              if (0 !== f) throw Error("Non-zero carry");
              (i = d), o++;
            }
            for (var m = u - i; m !== u && 0 === h[m]; ) m++;
            for (var g = l.repeat(r); m < u; ++m) g += t.charAt(h[m]);
            return g;
          },
          decodeUnsafe: h,
          decode: function (t) {
            var e = h(t);
            if (e) return e;
            throw Error("Non-base" + a + " character");
          },
        };
      };
    },
    22525: function (t, e, r) {
      var n = r(48644);
      t.exports = n(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
    },
    82957: function (t, e, r) {
      "use strict";
      let n = r(59196),
        i = r(68848),
        o =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      function s(t) {
        if (t > 2147483647)
          throw RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
        let e = new Uint8Array(t);
        return Object.setPrototypeOf(e, a.prototype), e;
      }
      function a(t, e, r) {
        if ("number" == typeof t) {
          if ("string" == typeof e)
            throw TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return c(t);
        }
        return l(t, e, r);
      }
      function l(t, e, r) {
        if ("string" == typeof t)
          return (function (t, e) {
            if (
              (("string" != typeof e || "" === e) && (e = "utf8"),
              !a.isEncoding(e))
            )
              throw TypeError("Unknown encoding: " + e);
            let r = 0 | p(t, e),
              n = s(r),
              i = n.write(t, e);
            return i !== r && (n = n.slice(0, i)), n;
          })(t, e);
        if (ArrayBuffer.isView(t))
          return (function (t) {
            if (U(t, Uint8Array)) {
              let e = new Uint8Array(t);
              return f(e.buffer, e.byteOffset, e.byteLength);
            }
            return h(t);
          })(t);
        if (null == t)
          throw TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof t
          );
        if (
          U(t, ArrayBuffer) ||
          (t && U(t.buffer, ArrayBuffer)) ||
          ("undefined" != typeof SharedArrayBuffer &&
            (U(t, SharedArrayBuffer) || (t && U(t.buffer, SharedArrayBuffer))))
        )
          return f(t, e, r);
        if ("number" == typeof t)
          throw TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        let n = t.valueOf && t.valueOf();
        if (null != n && n !== t) return a.from(n, e, r);
        let i = (function (t) {
          var e;
          if (a.isBuffer(t)) {
            let e = 0 | d(t.length),
              r = s(e);
            return 0 === r.length || t.copy(r, 0, 0, e), r;
          }
          return void 0 !== t.length
            ? "number" != typeof t.length || (e = t.length) != e
              ? s(0)
              : h(t)
            : "Buffer" === t.type && Array.isArray(t.data)
            ? h(t.data)
            : void 0;
        })(t);
        if (i) return i;
        if (
          "undefined" != typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof t[Symbol.toPrimitive]
        )
          return a.from(t[Symbol.toPrimitive]("string"), e, r);
        throw TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof t
        );
      }
      function u(t) {
        if ("number" != typeof t)
          throw TypeError('"size" argument must be of type number');
        if (t < 0)
          throw RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
      }
      function c(t) {
        return u(t), s(t < 0 ? 0 : 0 | d(t));
      }
      function h(t) {
        let e = t.length < 0 ? 0 : 0 | d(t.length),
          r = s(e);
        for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
        return r;
      }
      function f(t, e, r) {
        let n;
        if (e < 0 || t.byteLength < e)
          throw RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (r || 0))
          throw RangeError('"length" is outside of buffer bounds');
        return (
          Object.setPrototypeOf(
            (n =
              void 0 === e && void 0 === r
                ? new Uint8Array(t)
                : void 0 === r
                ? new Uint8Array(t, e)
                : new Uint8Array(t, e, r)),
            a.prototype
          ),
          n
        );
      }
      function d(t) {
        if (t >= 2147483647)
          throw RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
          );
        return 0 | t;
      }
      function p(t, e) {
        if (a.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || U(t, ArrayBuffer)) return t.byteLength;
        if ("string" != typeof t)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          );
        let r = t.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        let i = !1;
        for (;;)
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return I(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return F(t).length;
            default:
              if (i) return n ? -1 : I(t).length;
              (e = ("" + e).toLowerCase()), (i = !0);
          }
      }
      function m(t, e, r) {
        let i = !1;
        if (
          ((void 0 === e || e < 0) && (e = 0),
          e > this.length ||
            ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0 || (r >>>= 0) <= (e >>>= 0)))
        )
          return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return (function (t, e, r) {
                let n = t.length;
                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                let i = "";
                for (let n = e; n < r; ++n) i += N[t[n]];
                return i;
              })(this, e, r);
            case "utf8":
            case "utf-8":
              return w(this, e, r);
            case "ascii":
              return (function (t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i)
                  n += String.fromCharCode(127 & t[i]);
                return n;
              })(this, e, r);
            case "latin1":
            case "binary":
              return (function (t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                return n;
              })(this, e, r);
            case "base64":
              var o, s;
              return (
                (o = e),
                (s = r),
                0 === o && s === this.length
                  ? n.fromByteArray(this)
                  : n.fromByteArray(this.slice(o, s))
              );
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (function (t, e, r) {
                let n = t.slice(e, r),
                  i = "";
                for (let t = 0; t < n.length - 1; t += 2)
                  i += String.fromCharCode(n[t] + 256 * n[t + 1]);
                return i;
              })(this, e, r);
            default:
              if (i) throw TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (i = !0);
          }
      }
      function g(t, e, r) {
        let n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      function y(t, e, r, n, i) {
        var o;
        if (0 === t.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (o = r = +r) != o && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (("string" == typeof e && (e = a.from(e, n)), a.isBuffer(e)))
          return 0 === e.length ? -1 : v(t, e, r, n, i);
        if ("number" == typeof e)
          return ((e &= 255), "function" == typeof Uint8Array.prototype.indexOf)
            ? i
              ? Uint8Array.prototype.indexOf.call(t, e, r)
              : Uint8Array.prototype.lastIndexOf.call(t, e, r)
            : v(t, [e], r, n, i);
        throw TypeError("val must be string, number or Buffer");
      }
      function v(t, e, r, n, i) {
        let o,
          s = 1,
          a = t.length,
          l = e.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (s = 2), (a /= 2), (l /= 2), (r /= 2);
        }
        function u(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s);
        }
        if (i) {
          let n = -1;
          for (o = r; o < a; o++)
            if (u(t, o) === u(e, -1 === n ? 0 : o - n)) {
              if ((-1 === n && (n = o), o - n + 1 === l)) return n * s;
            } else -1 !== n && (o -= o - n), (n = -1);
        } else
          for (r + l > a && (r = a - l), o = r; o >= 0; o--) {
            let r = !0;
            for (let n = 0; n < l; n++)
              if (u(t, o + n) !== u(e, n)) {
                r = !1;
                break;
              }
            if (r) return o;
          }
        return -1;
      }
      function w(t, e, r) {
        r = Math.min(t.length, r);
        let n = [],
          i = e;
        for (; i < r; ) {
          let e = t[i],
            o = null,
            s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
          if (i + s <= r) {
            let r, n, a, l;
            switch (s) {
              case 1:
                e < 128 && (o = e);
                break;
              case 2:
                (192 & (r = t[i + 1])) == 128 &&
                  (l = ((31 & e) << 6) | (63 & r)) > 127 &&
                  (o = l);
                break;
              case 3:
                (r = t[i + 1]),
                  (n = t[i + 2]),
                  (192 & r) == 128 &&
                    (192 & n) == 128 &&
                    (l = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)) >
                      2047 &&
                    (l < 55296 || l > 57343) &&
                    (o = l);
                break;
              case 4:
                (r = t[i + 1]),
                  (n = t[i + 2]),
                  (a = t[i + 3]),
                  (192 & r) == 128 &&
                    (192 & n) == 128 &&
                    (192 & a) == 128 &&
                    (l =
                      ((15 & e) << 18) |
                      ((63 & r) << 12) |
                      ((63 & n) << 6) |
                      (63 & a)) > 65535 &&
                    l < 1114112 &&
                    (o = l);
            }
          }
          null === o
            ? ((o = 65533), (s = 1))
            : o > 65535 &&
              ((o -= 65536),
              n.push(((o >>> 10) & 1023) | 55296),
              (o = 56320 | (1023 & o))),
            n.push(o),
            (i += s);
        }
        return (function (t) {
          let e = t.length;
          if (e <= 4096) return String.fromCharCode.apply(String, t);
          let r = "",
            n = 0;
          for (; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += 4096)));
          return r;
        })(n);
      }
      function b(t, e, r) {
        if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
        if (t + e > r)
          throw RangeError("Trying to access beyond buffer length");
      }
      function E(t, e, r, n, i, o) {
        if (!a.isBuffer(t))
          throw TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < o)
          throw RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw RangeError("Index out of range");
      }
      function x(t, e, r, n, i) {
        k(e, n, i, t, r, 7);
        let o = Number(e & BigInt(4294967295));
        (t[r++] = o),
          (o >>= 8),
          (t[r++] = o),
          (o >>= 8),
          (t[r++] = o),
          (o >>= 8),
          (t[r++] = o);
        let s = Number((e >> BigInt(32)) & BigInt(4294967295));
        return (
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          r
        );
      }
      function M(t, e, r, n, i) {
        k(e, n, i, t, r, 7);
        let o = Number(e & BigInt(4294967295));
        (t[r + 7] = o),
          (o >>= 8),
          (t[r + 6] = o),
          (o >>= 8),
          (t[r + 5] = o),
          (o >>= 8),
          (t[r + 4] = o);
        let s = Number((e >> BigInt(32)) & BigInt(4294967295));
        return (
          (t[r + 3] = s),
          (s >>= 8),
          (t[r + 2] = s),
          (s >>= 8),
          (t[r + 1] = s),
          (s >>= 8),
          (t[r] = s),
          r + 8
        );
      }
      function S(t, e, r, n, i, o) {
        if (r + n > t.length || r < 0) throw RangeError("Index out of range");
      }
      function A(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || S(t, e, r, 4, 34028234663852886e22, -34028234663852886e22),
          i.write(t, e, r, n, 23, 4),
          r + 4
        );
      }
      function T(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || S(t, e, r, 8, 17976931348623157e292, -17976931348623157e292),
          i.write(t, e, r, n, 52, 8),
          r + 8
        );
      }
      (e.Buffer = a),
        (e.SlowBuffer = function (t) {
          return +t != t && (t = 0), a.alloc(+t);
        }),
        (e.INSPECT_MAX_BYTES = 50),
        (e.kMaxLength = 2147483647),
        (a.TYPED_ARRAY_SUPPORT = (function () {
          try {
            let t = new Uint8Array(1),
              e = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(e, Uint8Array.prototype),
              Object.setPrototypeOf(t, e),
              42 === t.foo()
            );
          } catch (t) {
            return !1;
          }
        })()),
        a.TYPED_ARRAY_SUPPORT ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(a.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(a.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.byteOffset;
          },
        }),
        (a.poolSize = 8192),
        (a.from = function (t, e, r) {
          return l(t, e, r);
        }),
        Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(a, Uint8Array),
        (a.alloc = function (t, e, r) {
          return (u(t), t <= 0)
            ? s(t)
            : void 0 !== e
            ? "string" == typeof r
              ? s(t).fill(e, r)
              : s(t).fill(e)
            : s(t);
        }),
        (a.allocUnsafe = function (t) {
          return c(t);
        }),
        (a.allocUnsafeSlow = function (t) {
          return c(t);
        }),
        (a.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== a.prototype;
        }),
        (a.compare = function (t, e) {
          if (
            (U(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            U(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            !a.isBuffer(t) || !a.isBuffer(e))
          )
            throw TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (t === e) return 0;
          let r = t.length,
            n = e.length;
          for (let i = 0, o = Math.min(r, n); i < o; ++i)
            if (t[i] !== e[i]) {
              (r = t[i]), (n = e[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (a.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (a.concat = function (t, e) {
          let r;
          if (!Array.isArray(t))
            throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return a.alloc(0);
          if (void 0 === e)
            for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
          let n = a.allocUnsafe(e),
            i = 0;
          for (r = 0; r < t.length; ++r) {
            let e = t[r];
            if (U(e, Uint8Array))
              i + e.length > n.length
                ? (a.isBuffer(e) || (e = a.from(e)), e.copy(n, i))
                : Uint8Array.prototype.set.call(n, e, i);
            else if (a.isBuffer(e)) e.copy(n, i);
            else throw TypeError('"list" argument must be an Array of Buffers');
            i += e.length;
          }
          return n;
        }),
        (a.byteLength = p),
        (a.prototype._isBuffer = !0),
        (a.prototype.swap16 = function () {
          let t = this.length;
          if (t % 2 != 0)
            throw RangeError("Buffer size must be a multiple of 16-bits");
          for (let e = 0; e < t; e += 2) g(this, e, e + 1);
          return this;
        }),
        (a.prototype.swap32 = function () {
          let t = this.length;
          if (t % 4 != 0)
            throw RangeError("Buffer size must be a multiple of 32-bits");
          for (let e = 0; e < t; e += 4)
            g(this, e, e + 3), g(this, e + 1, e + 2);
          return this;
        }),
        (a.prototype.swap64 = function () {
          let t = this.length;
          if (t % 8 != 0)
            throw RangeError("Buffer size must be a multiple of 64-bits");
          for (let e = 0; e < t; e += 8)
            g(this, e, e + 7),
              g(this, e + 1, e + 6),
              g(this, e + 2, e + 5),
              g(this, e + 3, e + 4);
          return this;
        }),
        (a.prototype.toString = function () {
          let t = this.length;
          return 0 === t
            ? ""
            : 0 == arguments.length
            ? w(this, 0, t)
            : m.apply(this, arguments);
        }),
        (a.prototype.toLocaleString = a.prototype.toString),
        (a.prototype.equals = function (t) {
          if (!a.isBuffer(t)) throw TypeError("Argument must be a Buffer");
          return this === t || 0 === a.compare(this, t);
        }),
        (a.prototype.inspect = function () {
          let t = "",
            r = e.INSPECT_MAX_BYTES;
          return (
            (t = this.toString("hex", 0, r)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > r && (t += " ... "),
            "<Buffer " + t + ">"
          );
        }),
        o && (a.prototype[o] = a.prototype.inspect),
        (a.prototype.compare = function (t, e, r, n, i) {
          if (
            (U(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            !a.isBuffer(t))
          )
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            );
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw RangeError("out of range index");
          if (n >= i && e >= r) return 0;
          if (n >= i) return -1;
          if (e >= r) return 1;
          if (((e >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === t))
            return 0;
          let o = i - n,
            s = r - e,
            l = Math.min(o, s),
            u = this.slice(n, i),
            c = t.slice(e, r);
          for (let t = 0; t < l; ++t)
            if (u[t] !== c[t]) {
              (o = u[t]), (s = c[t]);
              break;
            }
          return o < s ? -1 : s < o ? 1 : 0;
        }),
        (a.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }),
        (a.prototype.indexOf = function (t, e, r) {
          return y(this, t, e, r, !0);
        }),
        (a.prototype.lastIndexOf = function (t, e, r) {
          return y(this, t, e, r, !1);
        }),
        (a.prototype.write = function (t, e, r, n) {
          var i, o, s, a, l, u, c, h;
          if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
          else if (void 0 === r && "string" == typeof e)
            (n = e), (r = this.length), (e = 0);
          else if (isFinite(e))
            (e >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          else
            throw Error(
              "Buffer.write(string, encoding, offset[, length]) is no longer supported"
            );
          let f = this.length - e;
          if (
            ((void 0 === r || r > f) && (r = f),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          let d = !1;
          for (;;)
            switch (n) {
              case "hex":
                return (function (t, e, r, n) {
                  let i;
                  r = Number(r) || 0;
                  let o = t.length - r;
                  n ? (n = Number(n)) > o && (n = o) : (n = o);
                  let s = e.length;
                  for (n > s / 2 && (n = s / 2), i = 0; i < n; ++i) {
                    let n = parseInt(e.substr(2 * i, 2), 16);
                    if (n != n) break;
                    t[r + i] = n;
                  }
                  return i;
                })(this, t, e, r);
              case "utf8":
              case "utf-8":
                return (i = e), (o = r), D(I(t, this.length - i), this, i, o);
              case "ascii":
              case "latin1":
              case "binary":
                return (
                  (s = e),
                  (a = r),
                  D(
                    (function (t) {
                      let e = [];
                      for (let r = 0; r < t.length; ++r)
                        e.push(255 & t.charCodeAt(r));
                      return e;
                    })(t),
                    this,
                    s,
                    a
                  )
                );
              case "base64":
                return (l = e), (u = r), D(F(t), this, l, u);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return (
                  (c = e),
                  (h = r),
                  D(
                    (function (t, e) {
                      let r, n;
                      let i = [];
                      for (let o = 0; o < t.length && !((e -= 2) < 0); ++o)
                        (n = (r = t.charCodeAt(o)) >> 8),
                          i.push(r % 256),
                          i.push(n);
                      return i;
                    })(t, this.length - c),
                    this,
                    c,
                    h
                  )
                );
              default:
                if (d) throw TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (d = !0);
            }
        }),
        (a.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (a.prototype.slice = function (t, e) {
          let r = this.length;
          (t = ~~t),
            (e = void 0 === e ? r : ~~e),
            t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            e < t && (e = t);
          let n = this.subarray(t, e);
          return Object.setPrototypeOf(n, a.prototype), n;
        }),
        (a.prototype.readUintLE = a.prototype.readUIntLE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
            let n = this[t],
              i = 1,
              o = 0;
            for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
            return n;
          }),
        (a.prototype.readUintBE = a.prototype.readUIntBE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
            let n = this[t + --e],
              i = 1;
            for (; e > 0 && (i *= 256); ) n += this[t + --e] * i;
            return n;
          }),
        (a.prototype.readUint8 = a.prototype.readUInt8 =
          function (t, e) {
            return (t >>>= 0), e || b(t, 1, this.length), this[t];
          }),
        (a.prototype.readUint16LE = a.prototype.readUInt16LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || b(t, 2, this.length),
              this[t] | (this[t + 1] << 8)
            );
          }),
        (a.prototype.readUint16BE = a.prototype.readUInt16BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || b(t, 2, this.length),
              (this[t] << 8) | this[t + 1]
            );
          }),
        (a.prototype.readUint32LE = a.prototype.readUInt32LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || b(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
        (a.prototype.readUint32BE = a.prototype.readUInt32BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || b(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
        (a.prototype.readBigUInt64LE = _(function (t) {
          L((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && O(t, this.length - 8);
          let n =
              e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t],
            i = this[++t] + 256 * this[++t] + 65536 * this[++t] + 16777216 * r;
          return BigInt(n) + (BigInt(i) << BigInt(32));
        })),
        (a.prototype.readBigUInt64BE = _(function (t) {
          L((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && O(t, this.length - 8);
          let n =
              16777216 * e + 65536 * this[++t] + 256 * this[++t] + this[++t],
            i = 16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r;
          return (BigInt(n) << BigInt(32)) + BigInt(i);
        })),
        (a.prototype.readIntLE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
          let n = this[t],
            i = 1,
            o = 0;
          for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
        }),
        (a.prototype.readIntBE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
          let n = e,
            i = 1,
            o = this[t + --n];
          for (; n > 0 && (i *= 256); ) o += this[t + --n] * i;
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
        }),
        (a.prototype.readInt8 = function (t, e) {
          return ((t >>>= 0), e || b(t, 1, this.length), 128 & this[t])
            ? -((255 - this[t] + 1) * 1)
            : this[t];
        }),
        (a.prototype.readInt16LE = function (t, e) {
          (t >>>= 0), e || b(t, 2, this.length);
          let r = this[t] | (this[t + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (a.prototype.readInt16BE = function (t, e) {
          (t >>>= 0), e || b(t, 2, this.length);
          let r = this[t + 1] | (this[t] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (a.prototype.readInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || b(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (a.prototype.readInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || b(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (a.prototype.readBigInt64LE = _(function (t) {
          L((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          return (
            (void 0 === e || void 0 === r) && O(t, this.length - 8),
            (BigInt(
              this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24)
            ) <<
              BigInt(32)) +
              BigInt(
                e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t]
              )
          );
        })),
        (a.prototype.readBigInt64BE = _(function (t) {
          L((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          return (
            (void 0 === e || void 0 === r) && O(t, this.length - 8),
            (BigInt(
              (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t]
            ) <<
              BigInt(32)) +
              BigInt(
                16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r
              )
          );
        })),
        (a.prototype.readFloatLE = function (t, e) {
          return (
            (t >>>= 0), e || b(t, 4, this.length), i.read(this, t, !0, 23, 4)
          );
        }),
        (a.prototype.readFloatBE = function (t, e) {
          return (
            (t >>>= 0), e || b(t, 4, this.length), i.read(this, t, !1, 23, 4)
          );
        }),
        (a.prototype.readDoubleLE = function (t, e) {
          return (
            (t >>>= 0), e || b(t, 8, this.length), i.read(this, t, !0, 52, 8)
          );
        }),
        (a.prototype.readDoubleBE = function (t, e) {
          return (
            (t >>>= 0), e || b(t, 8, this.length), i.read(this, t, !1, 52, 8)
          );
        }),
        (a.prototype.writeUintLE = a.prototype.writeUIntLE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              E(this, t, e, r, n, 0);
            }
            let i = 1,
              o = 0;
            for (this[e] = 255 & t; ++o < r && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + r;
          }),
        (a.prototype.writeUintBE = a.prototype.writeUIntBE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              E(this, t, e, r, n, 0);
            }
            let i = r - 1,
              o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + r;
          }),
        (a.prototype.writeUint8 = a.prototype.writeUInt8 =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || E(this, t, e, 1, 255, 0),
              (this[e] = 255 & t),
              e + 1
            );
          }),
        (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || E(this, t, e, 2, 65535, 0),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              e + 2
            );
          }),
        (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || E(this, t, e, 2, 65535, 0),
              (this[e] = t >>> 8),
              (this[e + 1] = 255 & t),
              e + 2
            );
          }),
        (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || E(this, t, e, 4, 4294967295, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = 255 & t),
              e + 4
            );
          }),
        (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || E(this, t, e, 4, 4294967295, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
        (a.prototype.writeBigUInt64LE = _(function (t, e = 0) {
          return x(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (a.prototype.writeBigUInt64BE = _(function (t, e = 0) {
          return M(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (a.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            E(this, t, e, r, n - 1, -n);
          }
          let i = 0,
            o = 1,
            s = 0;
          for (this[e] = 255 & t; ++i < r && (o *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1),
              (this[e + i] = (((t / o) >> 0) - s) & 255);
          return e + r;
        }),
        (a.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            E(this, t, e, r, n - 1, -n);
          }
          let i = r - 1,
            o = 1,
            s = 0;
          for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1),
              (this[e + i] = (((t / o) >> 0) - s) & 255);
          return e + r;
        }),
        (a.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || E(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (a.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || E(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          );
        }),
        (a.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || E(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          );
        }),
        (a.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || E(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          );
        }),
        (a.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || E(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          );
        }),
        (a.prototype.writeBigInt64LE = _(function (t, e = 0) {
          return x(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (a.prototype.writeBigInt64BE = _(function (t, e = 0) {
          return M(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (a.prototype.writeFloatLE = function (t, e, r) {
          return A(this, t, e, !0, r);
        }),
        (a.prototype.writeFloatBE = function (t, e, r) {
          return A(this, t, e, !1, r);
        }),
        (a.prototype.writeDoubleLE = function (t, e, r) {
          return T(this, t, e, !0, r);
        }),
        (a.prototype.writeDoubleBE = function (t, e, r) {
          return T(this, t, e, !1, r);
        }),
        (a.prototype.copy = function (t, e, r, n) {
          if (!a.isBuffer(t)) throw TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r || 0 === t.length || 0 === this.length)
          )
            return 0;
          if (e < 0) throw RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw RangeError("Index out of range");
          if (n < 0) throw RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r);
          let i = n - r;
          return (
            this === t && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, n)
              : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            i
          );
        }),
        (a.prototype.fill = function (t, e, r, n) {
          let i;
          if ("string" == typeof t) {
            if (
              ("string" == typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : "string" == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && "string" != typeof n)
            )
              throw TypeError("encoding must be a string");
            if ("string" == typeof n && !a.isEncoding(n))
              throw TypeError("Unknown encoding: " + n);
            if (1 === t.length) {
              let e = t.charCodeAt(0);
              (("utf8" === n && e < 128) || "latin1" === n) && (t = e);
            }
          } else
            "number" == typeof t
              ? (t &= 255)
              : "boolean" == typeof t && (t = Number(t));
          if (e < 0 || this.length < e || this.length < r)
            throw RangeError("Out of range index");
          if (r <= e) return this;
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            "number" == typeof t)
          )
            for (i = e; i < r; ++i) this[i] = t;
          else {
            let o = a.isBuffer(t) ? t : a.from(t, n),
              s = o.length;
            if (0 === s)
              throw TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              );
            for (i = 0; i < r - e; ++i) this[i + e] = o[i % s];
          }
          return this;
        });
      let R = {};
      function P(t, e, r) {
        R[t] = class extends r {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: e.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${t}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return t;
          }
          set code(t) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: t,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${t}]: ${this.message}`;
          }
        };
      }
      function B(t) {
        let e = "",
          r = t.length,
          n = "-" === t[0] ? 1 : 0;
        for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
        return `${t.slice(0, r)}${e}`;
      }
      function k(t, e, r, n, i, o) {
        if (t > r || t < e) {
          let n;
          let i = "bigint" == typeof e ? "n" : "";
          throw (
            ((n =
              o > 3
                ? 0 === e || e === BigInt(0)
                  ? `>= 0${i} and < 2${i} ** ${(o + 1) * 8}${i}`
                  : `>= -(2${i} ** ${(o + 1) * 8 - 1}${i}) and < 2 ** ${
                      (o + 1) * 8 - 1
                    }${i}`
                : `>= ${e}${i} and <= ${r}${i}`),
            new R.ERR_OUT_OF_RANGE("value", n, t))
          );
        }
        L(i, "offset"),
          (void 0 === n[i] || void 0 === n[i + o]) && O(i, n.length - (o + 1));
      }
      function L(t, e) {
        if ("number" != typeof t)
          throw new R.ERR_INVALID_ARG_TYPE(e, "number", t);
      }
      function O(t, e, r) {
        if (Math.floor(t) !== t)
          throw (
            (L(t, r), new R.ERR_OUT_OF_RANGE(r || "offset", "an integer", t))
          );
        if (e < 0) throw new R.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new R.ERR_OUT_OF_RANGE(
          r || "offset",
          `>= ${r ? 1 : 0} and <= ${e}`,
          t
        );
      }
      P(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (t) {
          return t
            ? `${t} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError
      ),
        P(
          "ERR_INVALID_ARG_TYPE",
          function (t, e) {
            return `The "${t}" argument must be of type number. Received type ${typeof e}`;
          },
          TypeError
        ),
        P(
          "ERR_OUT_OF_RANGE",
          function (t, e, r) {
            let n = `The value of "${t}" is out of range.`,
              i = r;
            return (
              Number.isInteger(r) && Math.abs(r) > 4294967296
                ? (i = B(String(r)))
                : "bigint" == typeof r &&
                  ((i = String(r)),
                  (r > BigInt(2) ** BigInt(32) ||
                    r < -(BigInt(2) ** BigInt(32))) &&
                    (i = B(i)),
                  (i += "n")),
              (n += ` It must be ${e}. Received ${i}`)
            );
          },
          RangeError
        );
      let C = /[^+/0-9A-Za-z-_]/g;
      function I(t, e) {
        let r;
        e = e || 1 / 0;
        let n = t.length,
          i = null,
          o = [];
        for (let s = 0; s < n; ++s) {
          if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319 || s + 1 === n) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
              continue;
            }
            r = (((i - 55296) << 10) | (r - 56320)) + 65536;
          } else i && (e -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            o.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else if (r < 1114112) {
            if ((e -= 4) < 0) break;
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          } else throw Error("Invalid code point");
        }
        return o;
      }
      function F(t) {
        return n.toByteArray(
          (function (t) {
            if ((t = (t = t.split("=")[0]).trim().replace(C, "")).length < 2)
              return "";
            for (; t.length % 4 != 0; ) t += "=";
            return t;
          })(t)
        );
      }
      function D(t, e, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= e.length) && !(i >= t.length); ++i)
          e[i + r] = t[i];
        return i;
      }
      function U(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        );
      }
      let N = (function () {
        let t = "0123456789abcdef",
          e = Array(256);
        for (let r = 0; r < 16; ++r) {
          let n = 16 * r;
          for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
        }
        return e;
      })();
      function _(t) {
        return "undefined" == typeof BigInt ? j : t;
      }
      function j() {
        throw Error("BigInt not supported");
      }
    },
    77625: function (t) {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        r = "~";
      function n() {}
      function i(t, e, r) {
        (this.fn = t), (this.context = e), (this.once = r || !1);
      }
      function o(t, e, n, o, s) {
        if ("function" != typeof n)
          throw TypeError("The listener must be a function");
        var a = new i(n, o || t, s),
          l = r ? r + e : e;
        return (
          t._events[l]
            ? t._events[l].fn
              ? (t._events[l] = [t._events[l], a])
              : t._events[l].push(a)
            : ((t._events[l] = a), t._eventsCount++),
          t
        );
      }
      function s(t, e) {
        0 == --t._eventsCount ? (t._events = new n()) : delete t._events[e];
      }
      function a() {
        (this._events = new n()), (this._eventsCount = 0);
      }
      Object.create &&
        ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
        (a.prototype.eventNames = function () {
          var t,
            n,
            i = [];
          if (0 === this._eventsCount) return i;
          for (n in (t = this._events))
            e.call(t, n) && i.push(r ? n.slice(1) : n);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(t))
            : i;
        }),
        (a.prototype.listeners = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, o = n.length, s = Array(o); i < o; i++)
            s[i] = n[i].fn;
          return s;
        }),
        (a.prototype.listenerCount = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (a.prototype.emit = function (t, e, n, i, o, s) {
          var a = r ? r + t : t;
          if (!this._events[a]) return !1;
          var l,
            u,
            c = this._events[a],
            h = arguments.length;
          if (c.fn) {
            switch ((c.once && this.removeListener(t, c.fn, void 0, !0), h)) {
              case 1:
                return c.fn.call(c.context), !0;
              case 2:
                return c.fn.call(c.context, e), !0;
              case 3:
                return c.fn.call(c.context, e, n), !0;
              case 4:
                return c.fn.call(c.context, e, n, i), !0;
              case 5:
                return c.fn.call(c.context, e, n, i, o), !0;
              case 6:
                return c.fn.call(c.context, e, n, i, o, s), !0;
            }
            for (u = 1, l = Array(h - 1); u < h; u++) l[u - 1] = arguments[u];
            c.fn.apply(c.context, l);
          } else {
            var f,
              d = c.length;
            for (u = 0; u < d; u++)
              switch (
                (c[u].once && this.removeListener(t, c[u].fn, void 0, !0), h)
              ) {
                case 1:
                  c[u].fn.call(c[u].context);
                  break;
                case 2:
                  c[u].fn.call(c[u].context, e);
                  break;
                case 3:
                  c[u].fn.call(c[u].context, e, n);
                  break;
                case 4:
                  c[u].fn.call(c[u].context, e, n, i);
                  break;
                default:
                  if (!l)
                    for (f = 1, l = Array(h - 1); f < h; f++)
                      l[f - 1] = arguments[f];
                  c[u].fn.apply(c[u].context, l);
              }
          }
          return !0;
        }),
        (a.prototype.on = function (t, e, r) {
          return o(this, t, e, r, !1);
        }),
        (a.prototype.once = function (t, e, r) {
          return o(this, t, e, r, !0);
        }),
        (a.prototype.removeListener = function (t, e, n, i) {
          var o = r ? r + t : t;
          if (!this._events[o]) return this;
          if (!e) return s(this, o), this;
          var a = this._events[o];
          if (a.fn)
            a.fn !== e ||
              (i && !a.once) ||
              (n && a.context !== n) ||
              s(this, o);
          else {
            for (var l = 0, u = [], c = a.length; l < c; l++)
              (a[l].fn !== e ||
                (i && !a[l].once) ||
                (n && a[l].context !== n)) &&
                u.push(a[l]);
            u.length
              ? (this._events[o] = 1 === u.length ? u[0] : u)
              : s(this, o);
          }
          return this;
        }),
        (a.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = r ? r + t : t), this._events[e] && s(this, e))
              : ((this._events = new n()), (this._eventsCount = 0)),
            this
          );
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prefixed = r),
        (a.EventEmitter = a),
        (t.exports = a);
    },
    67775: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = r(2265),
        i = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          strokeWidth: 1.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
      let o = (t, e) => {
        let r = (0, n.forwardRef)(
          (
            {
              color: t = "currentColor",
              size: r = 24,
              strokeWidth: o = 1.5,
              className: s = "",
              children: a,
              ...l
            },
            u
          ) => {
            let c = {
              ref: u,
              ...i,
              width: r,
              height: r,
              strokeWidth: o,
              color: t,
              className: s,
              ...l,
            };
            return (0, n.createElement)(
              "svg",
              c,
              e?.map(([t, e]) => n.createElement(t, { key: e.id, ...e })) ?? [],
              ...(Array.isArray(a) ? a : [a])
            );
          }
        );
        return (r.displayName = `${t}Icon`), r;
      };
    },
    95954: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(67775).Z)("ArrowDown01Icon", [
        [
          "path",
          {
            d: "M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9",
            stroke: "currentColor",
            key: "k0",
          },
        ],
      ]);
    },
    51064: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(67775).Z)("MultiplicationSignIcon", [
        [
          "path",
          {
            d: "M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6",
            stroke: "currentColor",
            key: "k0",
          },
        ],
      ]);
    },
    68848: function (t, e) {
      (e.read = function (t, e, r, n, i) {
        var o,
          s,
          a = 8 * i - n - 1,
          l = (1 << a) - 1,
          u = l >> 1,
          c = -7,
          h = r ? i - 1 : 0,
          f = r ? -1 : 1,
          d = t[e + h];
        for (
          h += f, o = d & ((1 << -c) - 1), d >>= -c, c += a;
          c > 0;
          o = 256 * o + t[e + h], h += f, c -= 8
        );
        for (
          s = o & ((1 << -c) - 1), o >>= -c, c += n;
          c > 0;
          s = 256 * s + t[e + h], h += f, c -= 8
        );
        if (0 === o) o = 1 - u;
        else {
          if (o === l) return s ? NaN : (1 / 0) * (d ? -1 : 1);
          (s += Math.pow(2, n)), (o -= u);
        }
        return (d ? -1 : 1) * s * Math.pow(2, o - n);
      }),
        (e.write = function (t, e, r, n, i, o) {
          var s,
            a,
            l,
            u = 8 * o - i - 1,
            c = (1 << u) - 1,
            h = c >> 1,
            f = 23 === i ? 5960464477539062e-23 : 0,
            d = n ? 0 : o - 1,
            p = n ? 1 : -1,
            m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            isNaN((e = Math.abs(e))) || e === 1 / 0
              ? ((a = isNaN(e) ? 1 : 0), (s = c))
              : ((s = Math.floor(Math.log(e) / Math.LN2)),
                e * (l = Math.pow(2, -s)) < 1 && (s--, (l *= 2)),
                s + h >= 1 ? (e += f / l) : (e += f * Math.pow(2, 1 - h)),
                e * l >= 2 && (s++, (l /= 2)),
                s + h >= c
                  ? ((a = 0), (s = c))
                  : s + h >= 1
                  ? ((a = (e * l - 1) * Math.pow(2, i)), (s += h))
                  : ((a = e * Math.pow(2, h - 1) * Math.pow(2, i)), (s = 0)));
            i >= 8;
            t[r + d] = 255 & a, d += p, a /= 256, i -= 8
          );
          for (
            s = (s << i) | a, u += i;
            u > 0;
            t[r + d] = 255 & s, d += p, s /= 256, u -= 8
          );
          t[r + d - p] |= 128 * m;
        });
    },
    69983: function (t, e, r) {
      "use strict";
      let n = r(37213).v4,
        i = r(40789),
        o = function (t, e) {
          if (!(this instanceof o)) return new o(t, e);
          e || (e = {}),
            (this.options = {
              reviver: void 0 !== e.reviver ? e.reviver : null,
              replacer: void 0 !== e.replacer ? e.replacer : null,
              generator:
                void 0 !== e.generator
                  ? e.generator
                  : function () {
                      return n();
                    },
              version: void 0 !== e.version ? e.version : 2,
              notificationIdNull:
                "boolean" == typeof e.notificationIdNull &&
                e.notificationIdNull,
            }),
            (this.callServer = t);
        };
      (t.exports = o),
        (o.prototype.request = function (t, e, r, n) {
          let o;
          let s = this,
            a = null,
            l = Array.isArray(t) && "function" == typeof e;
          if (1 === this.options.version && l)
            throw TypeError("JSON-RPC 1.0 does not support batching");
          let u = !l && t && "object" == typeof t && "function" == typeof e;
          if (l || u) (n = e), (a = t);
          else {
            "function" == typeof r && ((n = r), (r = void 0));
            let o = "function" == typeof n;
            try {
              a = i(t, e, r, {
                generator: this.options.generator,
                version: this.options.version,
                notificationIdNull: this.options.notificationIdNull,
              });
            } catch (t) {
              if (o) return n(t);
              throw t;
            }
            if (!o) return a;
          }
          try {
            o = JSON.stringify(a, this.options.replacer);
          } catch (t) {
            return n(t);
          }
          return (
            this.callServer(o, function (t, e) {
              s._parseResponse(t, e, n);
            }),
            a
          );
        }),
        (o.prototype._parseResponse = function (t, e, r) {
          let n;
          if (t) {
            r(t);
            return;
          }
          if (!e) return r();
          try {
            n = JSON.parse(e, this.options.reviver);
          } catch (t) {
            return r(t);
          }
          if (3 === r.length) {
            if (!Array.isArray(n)) return r(null, n.error, n.result);
            {
              let t = function (t) {
                return void 0 !== t.error;
              };
              return r(
                null,
                n.filter(t),
                n.filter(function (e) {
                  return !t(e);
                })
              );
            }
          }
          r(null, n);
        });
    },
    40789: function (t, e, r) {
      "use strict";
      let n = r(37213).v4;
      t.exports = function (t, e, r, i) {
        if ("string" != typeof t) throw TypeError(t + " must be a string");
        let o = "number" == typeof (i = i || {}).version ? i.version : 2;
        if (1 !== o && 2 !== o) throw TypeError(o + " must be 1 or 2");
        let s = { method: t };
        if ((2 === o && (s.jsonrpc = "2.0"), e)) {
          if ("object" != typeof e && !Array.isArray(e))
            throw TypeError(e + " must be an object, array or omitted");
          s.params = e;
        }
        if (void 0 === r) {
          let t =
            "function" == typeof i.generator
              ? i.generator
              : function () {
                  return n();
                };
          s.id = t(s, i);
        } else
          2 === o && null === r
            ? i.notificationIdNull && (s.id = null)
            : (s.id = r);
        return s;
      };
    },
    37213: function (t, e, r) {
      "use strict";
      r.d(e, {
        v4: function () {
          return u;
        },
      });
      for (
        var n,
          i = new Uint8Array(16),
          o =
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
          s = [],
          a = 0;
        a < 256;
        ++a
      )
        s.push((a + 256).toString(16).substr(1));
      var l = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r = (
              s[t[e + 0]] +
              s[t[e + 1]] +
              s[t[e + 2]] +
              s[t[e + 3]] +
              "-" +
              s[t[e + 4]] +
              s[t[e + 5]] +
              "-" +
              s[t[e + 6]] +
              s[t[e + 7]] +
              "-" +
              s[t[e + 8]] +
              s[t[e + 9]] +
              "-" +
              s[t[e + 10]] +
              s[t[e + 11]] +
              s[t[e + 12]] +
              s[t[e + 13]] +
              s[t[e + 14]] +
              s[t[e + 15]]
            ).toLowerCase();
          if (!("string" == typeof r && o.test(r)))
            throw TypeError("Stringified UUID is invalid");
          return r;
        },
        u = function (t, e, r) {
          var o =
            (t = t || {}).random ||
            (
              t.rng ||
              function () {
                if (
                  !n &&
                  !(n =
                    ("undefined" != typeof crypto &&
                      crypto.getRandomValues &&
                      crypto.getRandomValues.bind(crypto)) ||
                    ("undefined" != typeof msCrypto &&
                      "function" == typeof msCrypto.getRandomValues &&
                      msCrypto.getRandomValues.bind(msCrypto)))
                )
                  throw Error(
                    "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                  );
                return n(i);
              }
            )();
          if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), e)) {
            r = r || 0;
            for (var s = 0; s < 16; ++s) e[r + s] = o[s];
            return e;
          }
          return l(o);
        };
    },
    40257: function (t, e, r) {
      "use strict";
      var n, i;
      t.exports =
        (null == (n = r.g.process) ? void 0 : n.env) &&
        "object" == typeof (null == (i = r.g.process) ? void 0 : i.env)
          ? r.g.process
          : r(44227);
    },
    44227: function (t) {
      !(function () {
        var e = {
            229: function (t) {
              var e,
                r,
                n,
                i = (t.exports = {});
              function o() {
                throw Error("setTimeout has not been defined");
              }
              function s() {
                throw Error("clearTimeout has not been defined");
              }
              function a(t) {
                if (e === setTimeout) return setTimeout(t, 0);
                if ((e === o || !e) && setTimeout)
                  return (e = setTimeout), setTimeout(t, 0);
                try {
                  return e(t, 0);
                } catch (r) {
                  try {
                    return e.call(null, t, 0);
                  } catch (r) {
                    return e.call(this, t, 0);
                  }
                }
              }
              !(function () {
                try {
                  e = "function" == typeof setTimeout ? setTimeout : o;
                } catch (t) {
                  e = o;
                }
                try {
                  r = "function" == typeof clearTimeout ? clearTimeout : s;
                } catch (t) {
                  r = s;
                }
              })();
              var l = [],
                u = !1,
                c = -1;
              function h() {
                u &&
                  n &&
                  ((u = !1),
                  n.length ? (l = n.concat(l)) : (c = -1),
                  l.length && f());
              }
              function f() {
                if (!u) {
                  var t = a(h);
                  u = !0;
                  for (var e = l.length; e; ) {
                    for (n = l, l = []; ++c < e; ) n && n[c].run();
                    (c = -1), (e = l.length);
                  }
                  (n = null),
                    (u = !1),
                    (function (t) {
                      if (r === clearTimeout) return clearTimeout(t);
                      if ((r === s || !r) && clearTimeout)
                        return (r = clearTimeout), clearTimeout(t);
                      try {
                        r(t);
                      } catch (e) {
                        try {
                          return r.call(null, t);
                        } catch (e) {
                          return r.call(this, t);
                        }
                      }
                    })(t);
                }
              }
              function d(t, e) {
                (this.fun = t), (this.array = e);
              }
              function p() {}
              (i.nextTick = function (t) {
                var e = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++)
                    e[r - 1] = arguments[r];
                l.push(new d(t, e)), 1 !== l.length || u || a(f);
              }),
                (d.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (i.title = "browser"),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ""),
                (i.versions = {}),
                (i.on = p),
                (i.addListener = p),
                (i.once = p),
                (i.off = p),
                (i.removeListener = p),
                (i.removeAllListeners = p),
                (i.emit = p),
                (i.prependListener = p),
                (i.prependOnceListener = p),
                (i.listeners = function (t) {
                  return [];
                }),
                (i.binding = function (t) {
                  throw Error("process.binding is not supported");
                }),
                (i.cwd = function () {
                  return "/";
                }),
                (i.chdir = function (t) {
                  throw Error("process.chdir is not supported");
                }),
                (i.umask = function () {
                  return 0;
                });
            },
          },
          r = {};
        function n(t) {
          var i = r[t];
          if (void 0 !== i) return i.exports;
          var o = (r[t] = { exports: {} }),
            s = !0;
          try {
            e[t](o, o.exports, n), (s = !1);
          } finally {
            s && delete r[t];
          }
          return o.exports;
        }
        n.ab = "//";
        var i = n(229);
        t.exports = i;
      })();
    },
    73306: function (t, e, r) {
      var n = r(82957),
        i = n.Buffer;
      function o(t, e) {
        for (var r in t) e[r] = t[r];
      }
      function s(t, e, r) {
        return i(t, e, r);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (t.exports = n)
        : (o(n, e), (e.Buffer = s)),
        (s.prototype = Object.create(i.prototype)),
        o(i, s),
        (s.from = function (t, e, r) {
          if ("number" == typeof t)
            throw TypeError("Argument must not be a number");
          return i(t, e, r);
        }),
        (s.alloc = function (t, e, r) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          var n = i(t);
          return (
            void 0 !== e
              ? "string" == typeof r
                ? n.fill(e, r)
                : n.fill(e)
              : n.fill(0),
            n
          );
        }),
        (s.allocUnsafe = function (t) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          return i(t);
        }),
        (s.allocUnsafeSlow = function (t) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          return n.SlowBuffer(t);
        });
    },
    65768: function (t, e) {
      "use strict";
      function r(t, e, r) {
        return e <= t && t <= r;
      }
      function n(t) {
        if (void 0 === t) return {};
        if (t === Object(t)) return t;
        throw TypeError("Could not convert argument to dictionary");
      }
      function i(t) {
        this.tokens = [].slice.call(t);
      }
      function o(t, e) {
        if (t) throw TypeError("Decoder error");
        return e || 65533;
      }
      i.prototype = {
        endOfStream: function () {
          return !this.tokens.length;
        },
        read: function () {
          return this.tokens.length ? this.tokens.shift() : -1;
        },
        prepend: function (t) {
          if (Array.isArray(t)) for (; t.length; ) this.tokens.unshift(t.pop());
          else this.tokens.unshift(t);
        },
        push: function (t) {
          if (Array.isArray(t)) for (; t.length; ) this.tokens.push(t.shift());
          else this.tokens.push(t);
        },
      };
      var s = "utf-8";
      function a(t, e) {
        if (!(this instanceof a)) return new a(t, e);
        if ((t = void 0 !== t ? String(t).toLowerCase() : s) !== s)
          throw Error("Encoding not supported. Only utf-8 is supported");
        (e = n(e)),
          (this._streaming = !1),
          (this._BOMseen = !1),
          (this._decoder = null),
          (this._fatal = !!e.fatal),
          (this._ignoreBOM = !!e.ignoreBOM),
          Object.defineProperty(this, "encoding", { value: "utf-8" }),
          Object.defineProperty(this, "fatal", { value: this._fatal }),
          Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
      }
      function l(t, e) {
        if (!(this instanceof l)) return new l(t, e);
        if ((t = void 0 !== t ? String(t).toLowerCase() : s) !== s)
          throw Error("Encoding not supported. Only utf-8 is supported");
        (e = n(e)),
          (this._streaming = !1),
          (this._encoder = null),
          (this._options = { fatal: !!e.fatal }),
          Object.defineProperty(this, "encoding", { value: "utf-8" });
      }
      function u(t) {
        var e = t.fatal,
          n = 0,
          i = 0,
          s = 0,
          a = 128,
          l = 191;
        this.handler = function (t, u) {
          if (-1 === u && 0 !== s) return (s = 0), o(e);
          if (-1 === u) return -1;
          if (0 === s) {
            if (r(u, 0, 127)) return u;
            if (r(u, 194, 223)) (s = 1), (n = u - 192);
            else if (r(u, 224, 239))
              224 === u && (a = 160),
                237 === u && (l = 159),
                (s = 2),
                (n = u - 224);
            else {
              if (!r(u, 240, 244)) return o(e);
              240 === u && (a = 144),
                244 === u && (l = 143),
                (s = 3),
                (n = u - 240);
            }
            return (n <<= 6 * s), null;
          }
          if (!r(u, a, l))
            return (n = s = i = 0), (a = 128), (l = 191), t.prepend(u), o(e);
          if (
            ((a = 128),
            (l = 191),
            (i += 1),
            (n += (u - 128) << (6 * (s - i))),
            i !== s)
          )
            return null;
          var c = n;
          return (n = s = i = 0), c;
        };
      }
      function c(t) {
        t.fatal,
          (this.handler = function (t, e) {
            if (-1 === e) return -1;
            if (r(e, 0, 127)) return e;
            r(e, 128, 2047)
              ? ((n = 1), (i = 192))
              : r(e, 2048, 65535)
              ? ((n = 2), (i = 224))
              : r(e, 65536, 1114111) && ((n = 3), (i = 240));
            for (var n, i, o = [(e >> (6 * n)) + i]; n > 0; ) {
              var s = e >> (6 * (n - 1));
              o.push(128 | (63 & s)), (n -= 1);
            }
            return o;
          });
      }
      (a.prototype = {
        decode: function (t, e) {
          (r =
            "object" == typeof t && t instanceof ArrayBuffer
              ? new Uint8Array(t)
              : "object" == typeof t &&
                "buffer" in t &&
                t.buffer instanceof ArrayBuffer
              ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
              : new Uint8Array(0)),
            (e = n(e)),
            this._streaming ||
              ((this._decoder = new u({ fatal: this._fatal })),
              (this._BOMseen = !1)),
            (this._streaming = !!e.stream);
          for (
            var r, o, s = new i(r), a = [];
            !s.endOfStream() && -1 !== (o = this._decoder.handler(s, s.read()));

          )
            null !== o && (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
          if (!this._streaming) {
            do {
              if (-1 === (o = this._decoder.handler(s, s.read()))) break;
              if (null === o) continue;
              Array.isArray(o) ? a.push.apply(a, o) : a.push(o);
            } while (!s.endOfStream());
            this._decoder = null;
          }
          return (
            !a.length ||
              -1 === ["utf-8"].indexOf(this.encoding) ||
              this._ignoreBOM ||
              this._BOMseen ||
              (65279 === a[0]
                ? ((this._BOMseen = !0), a.shift())
                : (this._BOMseen = !0)),
            (function (t) {
              for (var e = "", r = 0; r < t.length; ++r) {
                var n = t[r];
                n <= 65535
                  ? (e += String.fromCharCode(n))
                  : ((n -= 65536),
                    (e += String.fromCharCode(
                      (n >> 10) + 55296,
                      (1023 & n) + 56320
                    )));
              }
              return e;
            })(a)
          );
        },
      }),
        (l.prototype = {
          encode: function (t, e) {
            (t = t ? String(t) : ""),
              (e = n(e)),
              this._streaming || (this._encoder = new c(this._options)),
              (this._streaming = !!e.stream);
            for (
              var r,
                o = [],
                s = new i(
                  (function (t) {
                    for (
                      var e = String(t), r = e.length, n = 0, i = [];
                      n < r;

                    ) {
                      var o = e.charCodeAt(n);
                      if (o < 55296 || o > 57343) i.push(o);
                      else if (56320 <= o && o <= 57343) i.push(65533);
                      else if (55296 <= o && o <= 56319) {
                        if (n === r - 1) i.push(65533);
                        else {
                          var s = t.charCodeAt(n + 1);
                          if (56320 <= s && s <= 57343) {
                            var a = 1023 & o,
                              l = 1023 & s;
                            i.push(65536 + (a << 10) + l), (n += 1);
                          } else i.push(65533);
                        }
                      }
                      n += 1;
                    }
                    return i;
                  })(t)
                );
              !s.endOfStream() &&
              -1 !== (r = this._encoder.handler(s, s.read()));

            )
              Array.isArray(r) ? o.push.apply(o, r) : o.push(r);
            if (!this._streaming) {
              for (; -1 !== (r = this._encoder.handler(s, s.read())); )
                Array.isArray(r) ? o.push.apply(o, r) : o.push(r);
              this._encoder = null;
            }
            return new Uint8Array(o);
          },
        }),
        (e.TextEncoder = l),
        (e.TextDecoder = a);
    },
    10034: function (t, e, r) {
      "use strict";
      var n = r(2265),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        o = n.useState,
        s = n.useEffect,
        a = n.useLayoutEffect,
        l = n.useDebugValue;
      function u(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
          var r = e();
          return !i(t, r);
        } catch (t) {
          return !0;
        }
      }
      var c =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (t, e) {
              return e();
            }
          : function (t, e) {
              var r = e(),
                n = o({ inst: { value: r, getSnapshot: e } }),
                i = n[0].inst,
                c = n[1];
              return (
                a(
                  function () {
                    (i.value = r), (i.getSnapshot = e), u(i) && c({ inst: i });
                  },
                  [t, r, e]
                ),
                s(
                  function () {
                    return (
                      u(i) && c({ inst: i }),
                      t(function () {
                        u(i) && c({ inst: i });
                      })
                    );
                  },
                  [t]
                ),
                l(r),
                r
              );
            };
      e.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c;
    },
    83044: function (t, e, r) {
      "use strict";
      var n = r(2265),
        i = r(82558),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        s = i.useSyncExternalStore,
        a = n.useRef,
        l = n.useEffect,
        u = n.useMemo,
        c = n.useDebugValue;
      e.useSyncExternalStoreWithSelector = function (t, e, r, n, i) {
        var h = a(null);
        if (null === h.current) {
          var f = { hasValue: !1, value: null };
          h.current = f;
        } else f = h.current;
        var d = s(
          t,
          (h = u(
            function () {
              function t(t) {
                if (!l) {
                  if (
                    ((l = !0), (s = t), (t = n(t)), void 0 !== i && f.hasValue)
                  ) {
                    var e = f.value;
                    if (i(e, t)) return (a = e);
                  }
                  return (a = t);
                }
                if (((e = a), o(s, t))) return e;
                var r = n(t);
                return void 0 !== i && i(e, r) ? e : ((s = t), (a = r));
              }
              var s,
                a,
                l = !1,
                u = void 0 === r ? null : r;
              return [
                function () {
                  return t(e());
                },
                null === u
                  ? void 0
                  : function () {
                      return t(u());
                    },
              ];
            },
            [e, r, n, i]
          ))[0],
          h[1]
        );
        return (
          l(
            function () {
              (f.hasValue = !0), (f.value = d);
            },
            [d]
          ),
          c(d),
          d
        );
      };
    },
    82558: function (t, e, r) {
      "use strict";
      t.exports = r(10034);
    },
    35195: function (t, e, r) {
      "use strict";
      t.exports = r(83044);
    },
    51050: function (t, e, r) {
      "use strict";
      r.d(e, {
        x7: function () {
          return k;
        },
        Me: function () {
          return S;
        },
        oo: function () {
          return L;
        },
        US: function () {
          return A;
        },
        RR: function () {
          return P;
        },
        cv: function () {
          return T;
        },
        uY: function () {
          return R;
        },
        dp: function () {
          return B;
        },
      });
      var n = r(72695);
      function i(t, e, r) {
        let i,
          { reference: o, floating: s } = t,
          a = (0, n.Qq)(e),
          l = (0, n.Wh)(e),
          u = (0, n.I4)(l),
          c = (0, n.k3)(e),
          h = "y" === a,
          f = o.x + o.width / 2 - s.width / 2,
          d = o.y + o.height / 2 - s.height / 2,
          p = o[u] / 2 - s[u] / 2;
        switch (c) {
          case "top":
            i = { x: f, y: o.y - s.height };
            break;
          case "bottom":
            i = { x: f, y: o.y + o.height };
            break;
          case "right":
            i = { x: o.x + o.width, y: d };
            break;
          case "left":
            i = { x: o.x - s.width, y: d };
            break;
          default:
            i = { x: o.x, y: o.y };
        }
        switch ((0, n.hp)(e)) {
          case "start":
            i[l] -= p * (r && h ? -1 : 1);
            break;
          case "end":
            i[l] += p * (r && h ? -1 : 1);
        }
        return i;
      }
      let o = async (t, e, r) => {
        let {
            placement: n = "bottom",
            strategy: o = "absolute",
            middleware: s = [],
            platform: a,
          } = r,
          l = s.filter(Boolean),
          u = await (null == a.isRTL ? void 0 : a.isRTL(e)),
          c = await a.getElementRects({
            reference: t,
            floating: e,
            strategy: o,
          }),
          { x: h, y: f } = i(c, n, u),
          d = n,
          p = {},
          m = 0;
        for (let r = 0; r < l.length; r++) {
          let { name: s, fn: g } = l[r],
            {
              x: y,
              y: v,
              data: w,
              reset: b,
            } = await g({
              x: h,
              y: f,
              initialPlacement: n,
              placement: d,
              strategy: o,
              middlewareData: p,
              rects: c,
              platform: a,
              elements: { reference: t, floating: e },
            });
          (h = null != y ? y : h),
            (f = null != v ? v : f),
            (p = { ...p, [s]: { ...p[s], ...w } }),
            b &&
              m <= 50 &&
              (m++,
              "object" == typeof b &&
                (b.placement && (d = b.placement),
                b.rects &&
                  (c =
                    !0 === b.rects
                      ? await a.getElementRects({
                          reference: t,
                          floating: e,
                          strategy: o,
                        })
                      : b.rects),
                ({ x: h, y: f } = i(c, d, u))),
              (r = -1));
        }
        return { x: h, y: f, placement: d, strategy: o, middlewareData: p };
      };
      async function s(t, e) {
        var r;
        void 0 === e && (e = {});
        let { x: i, y: o, platform: s, rects: a, elements: l, strategy: u } = t,
          {
            boundary: c = "clippingAncestors",
            rootBoundary: h = "viewport",
            elementContext: f = "floating",
            altBoundary: d = !1,
            padding: p = 0,
          } = (0, n.ku)(e, t),
          m = (0, n.yd)(p),
          g = l[d ? ("floating" === f ? "reference" : "floating") : f],
          y = (0, n.JB)(
            await s.getClippingRect({
              element:
                null ==
                  (r = await (null == s.isElement ? void 0 : s.isElement(g))) ||
                r
                  ? g
                  : g.contextElement ||
                    (await (null == s.getDocumentElement
                      ? void 0
                      : s.getDocumentElement(l.floating))),
              boundary: c,
              rootBoundary: h,
              strategy: u,
            })
          ),
          v =
            "floating" === f
              ? {
                  x: i,
                  y: o,
                  width: a.floating.width,
                  height: a.floating.height,
                }
              : a.reference,
          w = await (null == s.getOffsetParent
            ? void 0
            : s.getOffsetParent(l.floating)),
          b = ((await (null == s.isElement ? void 0 : s.isElement(w))) &&
            (await (null == s.getScale ? void 0 : s.getScale(w)))) || {
            x: 1,
            y: 1,
          },
          E = (0, n.JB)(
            s.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: l,
                  rect: v,
                  offsetParent: w,
                  strategy: u,
                })
              : v
          );
        return {
          top: (y.top - E.top + m.top) / b.y,
          bottom: (E.bottom - y.bottom + m.bottom) / b.y,
          left: (y.left - E.left + m.left) / b.x,
          right: (E.right - y.right + m.right) / b.x,
        };
      }
      async function a(t, e) {
        let { placement: r, platform: i, elements: o } = t,
          s = await (null == i.isRTL ? void 0 : i.isRTL(o.floating)),
          a = (0, n.k3)(r),
          l = (0, n.hp)(r),
          u = "y" === (0, n.Qq)(r),
          c = ["left", "top"].includes(a) ? -1 : 1,
          h = s && u ? -1 : 1,
          f = (0, n.ku)(e, t),
          {
            mainAxis: d,
            crossAxis: p,
            alignmentAxis: m,
          } = "number" == typeof f
            ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: f.mainAxis || 0,
                crossAxis: f.crossAxis || 0,
                alignmentAxis: f.alignmentAxis,
              };
        return (
          l && "number" == typeof m && (p = "end" === l ? -1 * m : m),
          u ? { x: p * h, y: d * c } : { x: d * c, y: p * h }
        );
      }
      var l = r(94046);
      function u(t) {
        let e = (0, l.Dx)(t),
          r = parseFloat(e.width) || 0,
          i = parseFloat(e.height) || 0,
          o = (0, l.Re)(t),
          s = o ? t.offsetWidth : r,
          a = o ? t.offsetHeight : i,
          u = (0, n.NM)(r) !== s || (0, n.NM)(i) !== a;
        return u && ((r = s), (i = a)), { width: r, height: i, $: u };
      }
      function c(t) {
        return (0, l.kK)(t) ? t : t.contextElement;
      }
      function h(t) {
        let e = c(t);
        if (!(0, l.Re)(e)) return (0, n.ze)(1);
        let r = e.getBoundingClientRect(),
          { width: i, height: o, $: s } = u(e),
          a = (s ? (0, n.NM)(r.width) : r.width) / i,
          h = (s ? (0, n.NM)(r.height) : r.height) / o;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (h && Number.isFinite(h)) || (h = 1),
          { x: a, y: h }
        );
      }
      let f = (0, n.ze)(0);
      function d(t) {
        let e = (0, l.Jj)(t);
        return (0, l.Pf)() && e.visualViewport
          ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop }
          : f;
      }
      function p(t, e, r, i) {
        var o;
        void 0 === e && (e = !1), void 0 === r && (r = !1);
        let s = t.getBoundingClientRect(),
          a = c(t),
          u = (0, n.ze)(1);
        e && (i ? (0, l.kK)(i) && (u = h(i)) : (u = h(t)));
        let f = (void 0 === (o = r) && (o = !1),
          i && (!o || i === (0, l.Jj)(a)) && o)
            ? d(a)
            : (0, n.ze)(0),
          p = (s.left + f.x) / u.x,
          m = (s.top + f.y) / u.y,
          g = s.width / u.x,
          y = s.height / u.y;
        if (a) {
          let t = (0, l.Jj)(a),
            e = i && (0, l.kK)(i) ? (0, l.Jj)(i) : i,
            r = t,
            n = (0, l.wK)(r);
          for (; n && i && e !== r; ) {
            let t = h(n),
              e = n.getBoundingClientRect(),
              i = (0, l.Dx)(n),
              o = e.left + (n.clientLeft + parseFloat(i.paddingLeft)) * t.x,
              s = e.top + (n.clientTop + parseFloat(i.paddingTop)) * t.y;
            (p *= t.x),
              (m *= t.y),
              (g *= t.x),
              (y *= t.y),
              (p += o),
              (m += s),
              (r = (0, l.Jj)(n)),
              (n = (0, l.wK)(r));
          }
        }
        return (0, n.JB)({ width: g, height: y, x: p, y: m });
      }
      function m(t, e) {
        let r = (0, l.Lw)(t).scrollLeft;
        return e ? e.left + r : p((0, l.tF)(t)).left + r;
      }
      function g(t, e, r) {
        void 0 === r && (r = !1);
        let n = t.getBoundingClientRect();
        return {
          x: n.left + e.scrollLeft - (r ? 0 : m(t, n)),
          y: n.top + e.scrollTop,
        };
      }
      function y(t, e, r) {
        let i;
        if ("viewport" === e)
          i = (function (t, e) {
            let r = (0, l.Jj)(t),
              n = (0, l.tF)(t),
              i = r.visualViewport,
              o = n.clientWidth,
              s = n.clientHeight,
              a = 0,
              u = 0;
            if (i) {
              (o = i.width), (s = i.height);
              let t = (0, l.Pf)();
              (!t || (t && "fixed" === e)) &&
                ((a = i.offsetLeft), (u = i.offsetTop));
            }
            return { width: o, height: s, x: a, y: u };
          })(t, r);
        else if ("document" === e)
          i = (function (t) {
            let e = (0, l.tF)(t),
              r = (0, l.Lw)(t),
              i = t.ownerDocument.body,
              o = (0, n.Fp)(
                e.scrollWidth,
                e.clientWidth,
                i.scrollWidth,
                i.clientWidth
              ),
              s = (0, n.Fp)(
                e.scrollHeight,
                e.clientHeight,
                i.scrollHeight,
                i.clientHeight
              ),
              a = -r.scrollLeft + m(t),
              u = -r.scrollTop;
            return (
              "rtl" === (0, l.Dx)(i).direction &&
                (a += (0, n.Fp)(e.clientWidth, i.clientWidth) - o),
              { width: o, height: s, x: a, y: u }
            );
          })((0, l.tF)(t));
        else if ((0, l.kK)(e))
          i = (function (t, e) {
            let r = p(t, !0, "fixed" === e),
              i = r.top + t.clientTop,
              o = r.left + t.clientLeft,
              s = (0, l.Re)(t) ? h(t) : (0, n.ze)(1),
              a = t.clientWidth * s.x;
            return {
              width: a,
              height: t.clientHeight * s.y,
              x: o * s.x,
              y: i * s.y,
            };
          })(e, r);
        else {
          let r = d(t);
          i = { x: e.x - r.x, y: e.y - r.y, width: e.width, height: e.height };
        }
        return (0, n.JB)(i);
      }
      function v(t) {
        return "static" === (0, l.Dx)(t).position;
      }
      function w(t, e) {
        if (!(0, l.Re)(t) || "fixed" === (0, l.Dx)(t).position) return null;
        if (e) return e(t);
        let r = t.offsetParent;
        return (0, l.tF)(t) === r && (r = r.ownerDocument.body), r;
      }
      function b(t, e) {
        let r = (0, l.Jj)(t);
        if ((0, l.tR)(t)) return r;
        if (!(0, l.Re)(t)) {
          let e = (0, l.Ow)(t);
          for (; e && !(0, l.Py)(e); ) {
            if ((0, l.kK)(e) && !v(e)) return e;
            e = (0, l.Ow)(e);
          }
          return r;
        }
        let n = w(t, e);
        for (; n && (0, l.Ze)(n) && v(n); ) n = w(n, e);
        return n && (0, l.Py)(n) && v(n) && !(0, l.hT)(n)
          ? r
          : n || (0, l.gQ)(t) || r;
      }
      let E = async function (t) {
          let e = this.getOffsetParent || b,
            r = this.getDimensions,
            i = await r(t.floating);
          return {
            reference: (function (t, e, r) {
              let i = (0, l.Re)(e),
                o = (0, l.tF)(e),
                s = "fixed" === r,
                a = p(t, !0, s, e),
                u = { scrollLeft: 0, scrollTop: 0 },
                c = (0, n.ze)(0);
              if (i || (!i && !s)) {
                if (
                  (("body" !== (0, l.wk)(e) || (0, l.ao)(o)) &&
                    (u = (0, l.Lw)(e)),
                  i)
                ) {
                  let t = p(e, !0, s, e);
                  (c.x = t.x + e.clientLeft), (c.y = t.y + e.clientTop);
                } else o && (c.x = m(o));
              }
              let h = !o || i || s ? (0, n.ze)(0) : g(o, u);
              return {
                x: a.left + u.scrollLeft - c.x - h.x,
                y: a.top + u.scrollTop - c.y - h.y,
                width: a.width,
                height: a.height,
              };
            })(t.reference, await e(t.floating), t.strategy),
            floating: { x: 0, y: 0, width: i.width, height: i.height },
          };
        },
        x = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
            let { elements: e, rect: r, offsetParent: i, strategy: o } = t,
              s = "fixed" === o,
              a = (0, l.tF)(i),
              u = !!e && (0, l.tR)(e.floating);
            if (i === a || (u && s)) return r;
            let c = { scrollLeft: 0, scrollTop: 0 },
              f = (0, n.ze)(1),
              d = (0, n.ze)(0),
              m = (0, l.Re)(i);
            if (
              (m || (!m && !s)) &&
              (("body" !== (0, l.wk)(i) || (0, l.ao)(a)) && (c = (0, l.Lw)(i)),
              (0, l.Re)(i))
            ) {
              let t = p(i);
              (f = h(i)), (d.x = t.x + i.clientLeft), (d.y = t.y + i.clientTop);
            }
            let y = !a || m || s ? (0, n.ze)(0) : g(a, c, !0);
            return {
              width: r.width * f.x,
              height: r.height * f.y,
              x: r.x * f.x - c.scrollLeft * f.x + d.x + y.x,
              y: r.y * f.y - c.scrollTop * f.y + d.y + y.y,
            };
          },
          getDocumentElement: l.tF,
          getClippingRect: function (t) {
            let { element: e, boundary: r, rootBoundary: i, strategy: o } = t,
              s = [
                ...("clippingAncestors" === r
                  ? (0, l.tR)(e)
                    ? []
                    : (function (t, e) {
                        let r = e.get(t);
                        if (r) return r;
                        let n = (0, l.Kx)(t, [], !1).filter(
                            (t) => (0, l.kK)(t) && "body" !== (0, l.wk)(t)
                          ),
                          i = null,
                          o = "fixed" === (0, l.Dx)(t).position,
                          s = o ? (0, l.Ow)(t) : t;
                        for (; (0, l.kK)(s) && !(0, l.Py)(s); ) {
                          let e = (0, l.Dx)(s),
                            r = (0, l.hT)(s);
                          r || "fixed" !== e.position || (i = null),
                            (
                              o
                                ? !r && !i
                                : (!r &&
                                    "static" === e.position &&
                                    !!i &&
                                    ["absolute", "fixed"].includes(
                                      i.position
                                    )) ||
                                  ((0, l.ao)(s) &&
                                    !r &&
                                    (function t(e, r) {
                                      let n = (0, l.Ow)(e);
                                      return (
                                        !(
                                          n === r ||
                                          !(0, l.kK)(n) ||
                                          (0, l.Py)(n)
                                        ) &&
                                        ("fixed" === (0, l.Dx)(n).position ||
                                          t(n, r))
                                      );
                                    })(t, s))
                            )
                              ? (n = n.filter((t) => t !== s))
                              : (i = e),
                            (s = (0, l.Ow)(s));
                        }
                        return e.set(t, n), n;
                      })(e, this._c)
                  : [].concat(r)),
                i,
              ],
              a = s[0],
              u = s.reduce((t, r) => {
                let i = y(e, r, o);
                return (
                  (t.top = (0, n.Fp)(i.top, t.top)),
                  (t.right = (0, n.VV)(i.right, t.right)),
                  (t.bottom = (0, n.VV)(i.bottom, t.bottom)),
                  (t.left = (0, n.Fp)(i.left, t.left)),
                  t
                );
              }, y(e, a, o));
            return {
              width: u.right - u.left,
              height: u.bottom - u.top,
              x: u.left,
              y: u.top,
            };
          },
          getOffsetParent: b,
          getElementRects: E,
          getClientRects: function (t) {
            return Array.from(t.getClientRects());
          },
          getDimensions: function (t) {
            let { width: e, height: r } = u(t);
            return { width: e, height: r };
          },
          getScale: h,
          isElement: l.kK,
          isRTL: function (t) {
            return "rtl" === (0, l.Dx)(t).direction;
          },
        };
      function M(t, e) {
        return (
          t.x === e.x &&
          t.y === e.y &&
          t.width === e.width &&
          t.height === e.height
        );
      }
      function S(t, e, r, i) {
        let o;
        void 0 === i && (i = {});
        let {
            ancestorScroll: s = !0,
            ancestorResize: a = !0,
            elementResize: u = "function" == typeof ResizeObserver,
            layoutShift: h = "function" == typeof IntersectionObserver,
            animationFrame: f = !1,
          } = i,
          d = c(t),
          m = s || a ? [...(d ? (0, l.Kx)(d) : []), ...(0, l.Kx)(e)] : [];
        m.forEach((t) => {
          s && t.addEventListener("scroll", r, { passive: !0 }),
            a && t.addEventListener("resize", r);
        });
        let g =
            d && h
              ? (function (t, e) {
                  let r,
                    i = null,
                    o = (0, l.tF)(t);
                  function s() {
                    var t;
                    clearTimeout(r),
                      null == (t = i) || t.disconnect(),
                      (i = null);
                  }
                  return (
                    !(function a(l, u) {
                      void 0 === l && (l = !1), void 0 === u && (u = 1), s();
                      let c = t.getBoundingClientRect(),
                        { left: h, top: f, width: d, height: p } = c;
                      if ((l || e(), !d || !p)) return;
                      let m = (0, n.GW)(f),
                        g = (0, n.GW)(o.clientWidth - (h + d)),
                        y = {
                          rootMargin:
                            -m +
                            "px " +
                            -g +
                            "px " +
                            -(0, n.GW)(o.clientHeight - (f + p)) +
                            "px " +
                            -(0, n.GW)(h) +
                            "px",
                          threshold: (0, n.Fp)(0, (0, n.VV)(1, u)) || 1,
                        },
                        v = !0;
                      function w(e) {
                        let n = e[0].intersectionRatio;
                        if (n !== u) {
                          if (!v) return a();
                          n
                            ? a(!1, n)
                            : (r = setTimeout(() => {
                                a(!1, 1e-7);
                              }, 1e3));
                        }
                        1 !== n || M(c, t.getBoundingClientRect()) || a(),
                          (v = !1);
                      }
                      try {
                        i = new IntersectionObserver(w, {
                          ...y,
                          root: o.ownerDocument,
                        });
                      } catch (t) {
                        i = new IntersectionObserver(w, y);
                      }
                      i.observe(t);
                    })(!0),
                    s
                  );
                })(d, r)
              : null,
          y = -1,
          v = null;
        u &&
          ((v = new ResizeObserver((t) => {
            let [n] = t;
            n &&
              n.target === d &&
              v &&
              (v.unobserve(e),
              cancelAnimationFrame(y),
              (y = requestAnimationFrame(() => {
                var t;
                null == (t = v) || t.observe(e);
              }))),
              r();
          })),
          d && !f && v.observe(d),
          v.observe(e));
        let w = f ? p(t) : null;
        return (
          f &&
            (function e() {
              let n = p(t);
              w && !M(w, n) && r(), (w = n), (o = requestAnimationFrame(e));
            })(),
          r(),
          () => {
            var t;
            m.forEach((t) => {
              s && t.removeEventListener("scroll", r),
                a && t.removeEventListener("resize", r);
            }),
              null == g || g(),
              null == (t = v) || t.disconnect(),
              (v = null),
              f && cancelAnimationFrame(o);
          }
        );
      }
      let A = s,
        T = function (t) {
          return (
            void 0 === t && (t = 0),
            {
              name: "offset",
              options: t,
              async fn(e) {
                var r, n;
                let { x: i, y: o, placement: s, middlewareData: l } = e,
                  u = await a(e, t);
                return s === (null == (r = l.offset) ? void 0 : r.placement) &&
                  null != (n = l.arrow) &&
                  n.alignmentOffset
                  ? {}
                  : { x: i + u.x, y: o + u.y, data: { ...u, placement: s } };
              },
            }
          );
        },
        R = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "shift",
              options: t,
              async fn(e) {
                let { x: r, y: i, placement: o } = e,
                  {
                    mainAxis: a = !0,
                    crossAxis: l = !1,
                    limiter: u = {
                      fn: (t) => {
                        let { x: e, y: r } = t;
                        return { x: e, y: r };
                      },
                    },
                    ...c
                  } = (0, n.ku)(t, e),
                  h = { x: r, y: i },
                  f = await s(e, c),
                  d = (0, n.Qq)((0, n.k3)(o)),
                  p = (0, n.Rn)(d),
                  m = h[p],
                  g = h[d];
                if (a) {
                  let t = "y" === p ? "top" : "left",
                    e = "y" === p ? "bottom" : "right",
                    r = m + f[t],
                    i = m - f[e];
                  m = (0, n.uZ)(r, m, i);
                }
                if (l) {
                  let t = "y" === d ? "top" : "left",
                    e = "y" === d ? "bottom" : "right",
                    r = g + f[t],
                    i = g - f[e];
                  g = (0, n.uZ)(r, g, i);
                }
                let y = u.fn({ ...e, [p]: m, [d]: g });
                return {
                  ...y,
                  data: { x: y.x - r, y: y.y - i, enabled: { [p]: a, [d]: l } },
                };
              },
            }
          );
        },
        P = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "flip",
              options: t,
              async fn(e) {
                var r, i, o, a, l;
                let {
                    placement: u,
                    middlewareData: c,
                    rects: h,
                    initialPlacement: f,
                    platform: d,
                    elements: p,
                  } = e,
                  {
                    mainAxis: m = !0,
                    crossAxis: g = !0,
                    fallbackPlacements: y,
                    fallbackStrategy: v = "bestFit",
                    fallbackAxisSideDirection: w = "none",
                    flipAlignment: b = !0,
                    ...E
                  } = (0, n.ku)(t, e);
                if (null != (r = c.arrow) && r.alignmentOffset) return {};
                let x = (0, n.k3)(u),
                  M = (0, n.Qq)(f),
                  S = (0, n.k3)(f) === f,
                  A = await (null == d.isRTL ? void 0 : d.isRTL(p.floating)),
                  T = y || (S || !b ? [(0, n.pw)(f)] : (0, n.gy)(f)),
                  R = "none" !== w;
                !y && R && T.push(...(0, n.KX)(f, b, w, A));
                let P = [f, ...T],
                  B = await s(e, E),
                  k = [],
                  L = (null == (i = c.flip) ? void 0 : i.overflows) || [];
                if ((m && k.push(B[x]), g)) {
                  let t = (0, n.i8)(u, h, A);
                  k.push(B[t[0]], B[t[1]]);
                }
                if (
                  ((L = [...L, { placement: u, overflows: k }]),
                  !k.every((t) => t <= 0))
                ) {
                  let t = ((null == (o = c.flip) ? void 0 : o.index) || 0) + 1,
                    e = P[t];
                  if (e)
                    return {
                      data: { index: t, overflows: L },
                      reset: { placement: e },
                    };
                  let r =
                    null ==
                    (a = L.filter((t) => t.overflows[0] <= 0).sort(
                      (t, e) => t.overflows[1] - e.overflows[1]
                    )[0])
                      ? void 0
                      : a.placement;
                  if (!r)
                    switch (v) {
                      case "bestFit": {
                        let t =
                          null ==
                          (l = L.filter((t) => {
                            if (R) {
                              let e = (0, n.Qq)(t.placement);
                              return e === M || "y" === e;
                            }
                            return !0;
                          })
                            .map((t) => [
                              t.placement,
                              t.overflows
                                .filter((t) => t > 0)
                                .reduce((t, e) => t + e, 0),
                            ])
                            .sort((t, e) => t[1] - e[1])[0])
                            ? void 0
                            : l[0];
                        t && (r = t);
                        break;
                      }
                      case "initialPlacement":
                        r = f;
                    }
                  if (u !== r) return { reset: { placement: r } };
                }
                return {};
              },
            }
          );
        },
        B = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "size",
              options: t,
              async fn(e) {
                var r, i;
                let o, a;
                let { placement: l, rects: u, platform: c, elements: h } = e,
                  { apply: f = () => {}, ...d } = (0, n.ku)(t, e),
                  p = await s(e, d),
                  m = (0, n.k3)(l),
                  g = (0, n.hp)(l),
                  y = "y" === (0, n.Qq)(l),
                  { width: v, height: w } = u.floating;
                "top" === m || "bottom" === m
                  ? ((o = m),
                    (a =
                      g ===
                      ((await (null == c.isRTL ? void 0 : c.isRTL(h.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((a = m), (o = "end" === g ? "top" : "bottom"));
                let b = w - p.top - p.bottom,
                  E = v - p.left - p.right,
                  x = (0, n.VV)(w - p[o], b),
                  M = (0, n.VV)(v - p[a], E),
                  S = !e.middlewareData.shift,
                  A = x,
                  T = M;
                if (
                  (null != (r = e.middlewareData.shift) &&
                    r.enabled.x &&
                    (T = E),
                  null != (i = e.middlewareData.shift) &&
                    i.enabled.y &&
                    (A = b),
                  S && !g)
                ) {
                  let t = (0, n.Fp)(p.left, 0),
                    e = (0, n.Fp)(p.right, 0),
                    r = (0, n.Fp)(p.top, 0),
                    i = (0, n.Fp)(p.bottom, 0);
                  y
                    ? (T =
                        v -
                        2 *
                          (0 !== t || 0 !== e
                            ? t + e
                            : (0, n.Fp)(p.left, p.right)))
                    : (A =
                        w -
                        2 *
                          (0 !== r || 0 !== i
                            ? r + i
                            : (0, n.Fp)(p.top, p.bottom)));
                }
                await f({ ...e, availableWidth: T, availableHeight: A });
                let R = await c.getDimensions(h.floating);
                return v !== R.width || w !== R.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        },
        k = (t) => ({
          name: "arrow",
          options: t,
          async fn(e) {
            let {
                x: r,
                y: i,
                placement: o,
                rects: s,
                platform: a,
                elements: l,
                middlewareData: u,
              } = e,
              { element: c, padding: h = 0 } = (0, n.ku)(t, e) || {};
            if (null == c) return {};
            let f = (0, n.yd)(h),
              d = { x: r, y: i },
              p = (0, n.Wh)(o),
              m = (0, n.I4)(p),
              g = await a.getDimensions(c),
              y = "y" === p,
              v = y ? "clientHeight" : "clientWidth",
              w = s.reference[m] + s.reference[p] - d[p] - s.floating[m],
              b = d[p] - s.reference[p],
              E = await (null == a.getOffsetParent
                ? void 0
                : a.getOffsetParent(c)),
              x = E ? E[v] : 0;
            (x && (await (null == a.isElement ? void 0 : a.isElement(E)))) ||
              (x = l.floating[v] || s.floating[m]);
            let M = x / 2 - g[m] / 2 - 1,
              S = (0, n.VV)(f[y ? "top" : "left"], M),
              A = (0, n.VV)(f[y ? "bottom" : "right"], M),
              T = x - g[m] - A,
              R = x / 2 - g[m] / 2 + (w / 2 - b / 2),
              P = (0, n.uZ)(S, R, T),
              B =
                !u.arrow &&
                null != (0, n.hp)(o) &&
                R !== P &&
                s.reference[m] / 2 - (R < S ? S : A) - g[m] / 2 < 0,
              k = B ? (R < S ? R - S : R - T) : 0;
            return {
              [p]: d[p] + k,
              data: {
                [p]: P,
                centerOffset: R - P - k,
                ...(B && { alignmentOffset: k }),
              },
              reset: B,
            };
          },
        }),
        L = (t, e, r) => {
          let n = new Map(),
            i = { platform: x, ...r },
            s = { ...i.platform, _c: n };
          return o(t, e, { ...i, platform: s });
        };
    },
    97859: function (t, e, r) {
      "use strict";
      r.d(e, {
        RR: function () {
          return p;
        },
        YF: function () {
          return h;
        },
        cv: function () {
          return f;
        },
        dp: function () {
          return m;
        },
        uY: function () {
          return d;
        },
      });
      var n = r(51050),
        i = r(2265),
        o = r(54887),
        s = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
      function a(t, e) {
        let r, n, i;
        if (t === e) return !0;
        if (typeof t != typeof e) return !1;
        if ("function" == typeof t && t.toString() === e.toString()) return !0;
        if (t && e && "object" == typeof t) {
          if (Array.isArray(t)) {
            if ((r = t.length) !== e.length) return !1;
            for (n = r; 0 != n--; ) if (!a(t[n], e[n])) return !1;
            return !0;
          }
          if ((r = (i = Object.keys(t)).length) !== Object.keys(e).length)
            return !1;
          for (n = r; 0 != n--; )
            if (!{}.hasOwnProperty.call(e, i[n])) return !1;
          for (n = r; 0 != n--; ) {
            let r = i[n];
            if (("_owner" !== r || !t.$$typeof) && !a(t[r], e[r])) return !1;
          }
          return !0;
        }
        return t != t && e != e;
      }
      function l(t) {
        return "undefined" == typeof window
          ? 1
          : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function u(t, e) {
        let r = l(t);
        return Math.round(e * r) / r;
      }
      function c(t) {
        let e = i.useRef(t);
        return (
          s(() => {
            e.current = t;
          }),
          e
        );
      }
      function h(t) {
        void 0 === t && (t = {});
        let {
            placement: e = "bottom",
            strategy: r = "absolute",
            middleware: h = [],
            platform: f,
            elements: { reference: d, floating: p } = {},
            transform: m = !0,
            whileElementsMounted: g,
            open: y,
          } = t,
          [v, w] = i.useState({
            x: 0,
            y: 0,
            strategy: r,
            placement: e,
            middlewareData: {},
            isPositioned: !1,
          }),
          [b, E] = i.useState(h);
        a(b, h) || E(h);
        let [x, M] = i.useState(null),
          [S, A] = i.useState(null),
          T = i.useCallback((t) => {
            t !== k.current && ((k.current = t), M(t));
          }, []),
          R = i.useCallback((t) => {
            t !== L.current && ((L.current = t), A(t));
          }, []),
          P = d || x,
          B = p || S,
          k = i.useRef(null),
          L = i.useRef(null),
          O = i.useRef(v),
          C = null != g,
          I = c(g),
          F = c(f),
          D = c(y),
          U = i.useCallback(() => {
            if (!k.current || !L.current) return;
            let t = { placement: e, strategy: r, middleware: b };
            F.current && (t.platform = F.current),
              (0, n.oo)(k.current, L.current, t).then((t) => {
                let e = { ...t, isPositioned: !1 !== D.current };
                N.current &&
                  !a(O.current, e) &&
                  ((O.current = e),
                  o.flushSync(() => {
                    w(e);
                  }));
              });
          }, [b, e, r, F, D]);
        s(() => {
          !1 === y &&
            O.current.isPositioned &&
            ((O.current.isPositioned = !1),
            w((t) => ({ ...t, isPositioned: !1 })));
        }, [y]);
        let N = i.useRef(!1);
        s(
          () => (
            (N.current = !0),
            () => {
              N.current = !1;
            }
          ),
          []
        ),
          s(() => {
            if ((P && (k.current = P), B && (L.current = B), P && B)) {
              if (I.current) return I.current(P, B, U);
              U();
            }
          }, [P, B, U, I, C]);
        let _ = i.useMemo(
            () => ({
              reference: k,
              floating: L,
              setReference: T,
              setFloating: R,
            }),
            [T, R]
          ),
          j = i.useMemo(() => ({ reference: P, floating: B }), [P, B]),
          V = i.useMemo(() => {
            let t = { position: r, left: 0, top: 0 };
            if (!j.floating) return t;
            let e = u(j.floating, v.x),
              n = u(j.floating, v.y);
            return m
              ? {
                  ...t,
                  transform: "translate(" + e + "px, " + n + "px)",
                  ...(l(j.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: r, left: e, top: n };
          }, [r, m, j.floating, v.x, v.y]);
        return i.useMemo(
          () => ({ ...v, update: U, refs: _, elements: j, floatingStyles: V }),
          [v, U, _, j, V]
        );
      }
      let f = (t, e) => ({ ...(0, n.cv)(t), options: [t, e] }),
        d = (t, e) => ({ ...(0, n.uY)(t), options: [t, e] }),
        p = (t, e) => ({ ...(0, n.RR)(t), options: [t, e] }),
        m = (t, e) => ({ ...(0, n.dp)(t), options: [t, e] });
    },
    89750: function (t, e, r) {
      "use strict";
      function n() {
        let t = navigator.userAgentData;
        return t && Array.isArray(t.brands)
          ? t.brands
              .map((t) => {
                let { brand: e, version: r } = t;
                return e + "/" + r;
              })
              .join(" ")
          : navigator.userAgent;
      }
      r.d(e, {
        ij: function () {
          return n;
        },
      });
    },
    94046: function (t, e, r) {
      "use strict";
      function n() {
        return "undefined" != typeof window;
      }
      function i(t) {
        return a(t) ? (t.nodeName || "").toLowerCase() : "#document";
      }
      function o(t) {
        var e;
        return (
          (null == t || null == (e = t.ownerDocument)
            ? void 0
            : e.defaultView) || window
        );
      }
      function s(t) {
        var e;
        return null ==
          (e = (a(t) ? t.ownerDocument : t.document) || window.document)
          ? void 0
          : e.documentElement;
      }
      function a(t) {
        return !!n() && (t instanceof Node || t instanceof o(t).Node);
      }
      function l(t) {
        return !!n() && (t instanceof Element || t instanceof o(t).Element);
      }
      function u(t) {
        return (
          !!n() && (t instanceof HTMLElement || t instanceof o(t).HTMLElement)
        );
      }
      function c(t) {
        return (
          !!n() &&
          "undefined" != typeof ShadowRoot &&
          (t instanceof ShadowRoot || t instanceof o(t).ShadowRoot)
        );
      }
      function h(t) {
        let { overflow: e, overflowX: r, overflowY: n, display: i } = v(t);
        return (
          /auto|scroll|overlay|hidden|clip/.test(e + n + r) &&
          !["inline", "contents"].includes(i)
        );
      }
      function f(t) {
        return ["table", "td", "th"].includes(i(t));
      }
      function d(t) {
        return [":popover-open", ":modal"].some((e) => {
          try {
            return t.matches(e);
          } catch (t) {
            return !1;
          }
        });
      }
      function p(t) {
        let e = g(),
          r = l(t) ? v(t) : t;
        return (
          ["transform", "translate", "scale", "rotate", "perspective"].some(
            (t) => !!r[t] && "none" !== r[t]
          ) ||
          (!!r.containerType && "normal" !== r.containerType) ||
          (!e && !!r.backdropFilter && "none" !== r.backdropFilter) ||
          (!e && !!r.filter && "none" !== r.filter) ||
          [
            "transform",
            "translate",
            "scale",
            "rotate",
            "perspective",
            "filter",
          ].some((t) => (r.willChange || "").includes(t)) ||
          ["paint", "layout", "strict", "content"].some((t) =>
            (r.contain || "").includes(t)
          )
        );
      }
      function m(t) {
        let e = b(t);
        for (; u(e) && !y(e); ) {
          if (p(e)) return e;
          if (d(e)) break;
          e = b(e);
        }
        return null;
      }
      function g() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function y(t) {
        return ["html", "body", "#document"].includes(i(t));
      }
      function v(t) {
        return o(t).getComputedStyle(t);
      }
      function w(t) {
        return l(t)
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
      }
      function b(t) {
        if ("html" === i(t)) return t;
        let e = t.assignedSlot || t.parentNode || (c(t) && t.host) || s(t);
        return c(e) ? e.host : e;
      }
      function E(t) {
        return t.parent && Object.getPrototypeOf(t.parent)
          ? t.frameElement
          : null;
      }
      r.d(e, {
        Dx: function () {
          return v;
        },
        Jj: function () {
          return o;
        },
        Kx: function () {
          return function t(e, r, n) {
            var i;
            void 0 === r && (r = []), void 0 === n && (n = !0);
            let s = (function t(e) {
                let r = b(e);
                return y(r)
                  ? e.ownerDocument
                    ? e.ownerDocument.body
                    : e.body
                  : u(r) && h(r)
                  ? r
                  : t(r);
              })(e),
              a = s === (null == (i = e.ownerDocument) ? void 0 : i.body),
              l = o(s);
            if (a) {
              let e = E(l);
              return r.concat(
                l,
                l.visualViewport || [],
                h(s) ? s : [],
                e && n ? t(e) : []
              );
            }
            return r.concat(s, t(s, [], n));
          };
        },
        Lw: function () {
          return w;
        },
        Ow: function () {
          return b;
        },
        Pf: function () {
          return g;
        },
        Py: function () {
          return y;
        },
        Re: function () {
          return u;
        },
        Ze: function () {
          return f;
        },
        ao: function () {
          return h;
        },
        gQ: function () {
          return m;
        },
        hT: function () {
          return p;
        },
        kK: function () {
          return l;
        },
        tF: function () {
          return s;
        },
        tR: function () {
          return d;
        },
        wK: function () {
          return E;
        },
        wk: function () {
          return i;
        },
      });
    },
    72695: function (t, e, r) {
      "use strict";
      r.d(e, {
        Fp: function () {
          return i;
        },
        GW: function () {
          return s;
        },
        I4: function () {
          return m;
        },
        JB: function () {
          return S;
        },
        KX: function () {
          return E;
        },
        NM: function () {
          return o;
        },
        Qq: function () {
          return g;
        },
        Rn: function () {
          return p;
        },
        VV: function () {
          return n;
        },
        Wh: function () {
          return y;
        },
        gy: function () {
          return w;
        },
        hp: function () {
          return d;
        },
        i8: function () {
          return v;
        },
        k3: function () {
          return f;
        },
        ku: function () {
          return h;
        },
        pw: function () {
          return x;
        },
        uZ: function () {
          return c;
        },
        yd: function () {
          return M;
        },
        ze: function () {
          return a;
        },
      });
      let n = Math.min,
        i = Math.max,
        o = Math.round,
        s = Math.floor,
        a = (t) => ({ x: t, y: t }),
        l = { left: "right", right: "left", bottom: "top", top: "bottom" },
        u = { start: "end", end: "start" };
      function c(t, e, r) {
        return i(t, n(e, r));
      }
      function h(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function f(t) {
        return t.split("-")[0];
      }
      function d(t) {
        return t.split("-")[1];
      }
      function p(t) {
        return "x" === t ? "y" : "x";
      }
      function m(t) {
        return "y" === t ? "height" : "width";
      }
      function g(t) {
        return ["top", "bottom"].includes(f(t)) ? "y" : "x";
      }
      function y(t) {
        return p(g(t));
      }
      function v(t, e, r) {
        void 0 === r && (r = !1);
        let n = d(t),
          i = y(t),
          o = m(i),
          s =
            "x" === i
              ? n === (r ? "end" : "start")
                ? "right"
                : "left"
              : "start" === n
              ? "bottom"
              : "top";
        return e.reference[o] > e.floating[o] && (s = x(s)), [s, x(s)];
      }
      function w(t) {
        let e = x(t);
        return [b(t), e, b(e)];
      }
      function b(t) {
        return t.replace(/start|end/g, (t) => u[t]);
      }
      function E(t, e, r, n) {
        let i = d(t),
          o = (function (t, e, r) {
            let n = ["left", "right"],
              i = ["right", "left"];
            switch (t) {
              case "top":
              case "bottom":
                if (r) return e ? i : n;
                return e ? n : i;
              case "left":
              case "right":
                return e ? ["top", "bottom"] : ["bottom", "top"];
              default:
                return [];
            }
          })(f(t), "start" === r, n);
        return (
          i && ((o = o.map((t) => t + "-" + i)), e && (o = o.concat(o.map(b)))),
          o
        );
      }
      function x(t) {
        return t.replace(/left|right|bottom|top/g, (t) => l[t]);
      }
      function M(t) {
        return "number" != typeof t
          ? { top: 0, right: 0, bottom: 0, left: 0, ...t }
          : { top: t, right: t, bottom: t, left: t };
      }
      function S(t) {
        let { x: e, y: r, width: n, height: i } = t;
        return {
          width: n,
          height: i,
          top: r,
          left: e,
          right: e + n,
          bottom: r + i,
          x: e,
          y: r,
        };
      }
    },
    33577: function (t, e, r) {
      "use strict";
      r.d(e, {
        dk: function () {
          return h;
        },
        fw: function () {
          return c;
        },
      });
      var n = r(2265),
        i = r(13323),
        o = r(64518),
        s = r(93689),
        a = r(6885),
        l = r(27847);
      let u = (0, n.createContext)(null);
      function c() {
        let [t, e] = (0, n.useState)([]);
        return [
          t.length > 0 ? t.join(" ") : void 0,
          (0, n.useMemo)(
            () =>
              function (t) {
                let r = (0, i.z)(
                    (t) => (
                      e((e) => [...e, t]),
                      () =>
                        e((e) => {
                          let r = e.slice(),
                            n = r.indexOf(t);
                          return -1 !== n && r.splice(n, 1), r;
                        })
                    )
                  ),
                  o = (0, n.useMemo)(
                    () => ({
                      register: r,
                      slot: t.slot,
                      name: t.name,
                      props: t.props,
                      value: t.value,
                    }),
                    [r, t.slot, t.name, t.props, t.value]
                  );
                return n.createElement(u.Provider, { value: o }, t.children);
              },
            [e]
          ),
        ];
      }
      u.displayName = "DescriptionContext";
      let h = Object.assign(
        (0, l.yV)(function (t, e) {
          let r = (0, n.useId)(),
            i = (0, a.B)(),
            { id: c = "headlessui-description-".concat(r), ...h } = t,
            f = (function t() {
              let e = (0, n.useContext)(u);
              if (null === e) {
                let e = Error(
                  "You used a <Description /> component, but it is not inside a relevant parent."
                );
                throw (
                  (Error.captureStackTrace && Error.captureStackTrace(e, t), e)
                );
              }
              return e;
            })(),
            d = (0, s.T)(e);
          (0, o.e)(() => f.register(c), [c, f.register]);
          let p = i || !1,
            m = (0, n.useMemo)(() => ({ ...f.slot, disabled: p }), [f.slot, p]),
            g = { ref: d, ...f.props, id: c };
          return (0, l.L6)()({
            ourProps: g,
            theirProps: h,
            slot: m,
            defaultTag: "p",
            name: f.name || "Description",
          });
        }),
        {}
      );
    },
    75836: function (t, e, r) {
      "use strict";
      let n, i, o, s, a, l;
      r.d(e, {
        Vq: function () {
          return tx;
        },
        EM: function () {
          return tb;
        },
        $N: function () {
          return tE;
        },
      });
      var u = r(2265),
        c = r(37388),
        h = r(31948);
      function f(t, e, r, n) {
        let i = (0, h.E)(r);
        (0, u.useEffect)(() => {
          function r(t) {
            i.current(t);
          }
          return (
            (t = null != t ? t : window).addEventListener(e, r, n),
            () => t.removeEventListener(e, r, n)
          );
        }, [t, e, n]);
      }
      var d = r(39834),
        p = r(13323),
        m = r(16821),
        g = r(64518),
        y = r(33106),
        v = r(32539),
        w = r(40048),
        b = r(27847),
        E =
          (((n = E || {})[(n.None = 1)] = "None"),
          (n[(n.Focusable = 2)] = "Focusable"),
          (n[(n.Hidden = 4)] = "Hidden"),
          n);
      let x = (0, b.yV)(function (t, e) {
        var r;
        let { features: n = 1, ...i } = t,
          o = {
            ref: e,
            "aria-hidden":
              (2 & n) == 2 || (null != (r = i["aria-hidden"]) ? r : void 0),
            hidden: (4 & n) == 4 || void 0,
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...((4 & n) == 4 && (2 & n) != 2 && { display: "none" }),
            },
          };
        return (0, b.L6)()({
          ourProps: o,
          theirProps: i,
          slot: {},
          defaultTag: "span",
          name: "Hidden",
        });
      });
      var M = r(40293);
      let S = (0, u.createContext)(null);
      function A(t) {
        let { children: e, node: r } = t,
          [n, i] = (0, u.useState)(null),
          o = T(null != r ? r : n);
        return u.createElement(
          S.Provider,
          { value: o },
          e,
          null === o &&
            u.createElement(x, {
              features: E.Hidden,
              ref: (t) => {
                var e, r;
                if (t) {
                  for (let n of null !=
                  (r =
                    null == (e = (0, M.r)(t))
                      ? void 0
                      : e.querySelectorAll("html > *, body > *"))
                    ? r
                    : [])
                    if (
                      n !== document.body &&
                      n !== document.head &&
                      n instanceof HTMLElement &&
                      null != n &&
                      n.contains(t)
                    ) {
                      i(n);
                      break;
                    }
                }
              },
            })
        );
      }
      function T() {
        var t;
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return null != (t = (0, u.useContext)(S)) ? t : e;
      }
      var R = r(53466),
        P = r(72238),
        B = r(93689);
      let k = (0, u.createContext)(() => {});
      function L(t) {
        let { value: e, children: r } = t;
        return u.createElement(k.Provider, { value: e }, r);
      }
      var O = r(37863),
        C = r(27988),
        I = r(24536),
        F = r(33577),
        D = r(90945);
      function U() {
        let t = (0, u.useRef)(!1);
        return (
          (0, g.e)(
            () => (
              (t.current = !0),
              () => {
                t.current = !1;
              }
            ),
            []
          ),
          t
        );
      }
      var N = r(99417),
        _ = r(3141),
        j =
          (((i = j || {})[(i.Forwards = 0)] = "Forwards"),
          (i[(i.Backwards = 1)] = "Backwards"),
          i);
      function V(t, e) {
        let r = (0, u.useRef)([]),
          n = (0, p.z)(t);
        (0, u.useEffect)(() => {
          let t = [...r.current];
          for (let [i, o] of e.entries())
            if (r.current[i] !== o) {
              let i = n(e, t);
              return (r.current = e), i;
            }
        }, [n, ...e]);
      }
      var z = r(37105);
      let H = [];
      !(function (t) {
        function e() {
          "loading" !== document.readyState &&
            (t(), document.removeEventListener("DOMContentLoaded", e));
        }
        "undefined" != typeof window &&
          "undefined" != typeof document &&
          (document.addEventListener("DOMContentLoaded", e), e());
      })(() => {
        function t(t) {
          if (
            !(t.target instanceof HTMLElement) ||
            t.target === document.body ||
            H[0] === t.target
          )
            return;
          let e = t.target;
          (e = e.closest(z.y)),
            H.unshift(null != e ? e : t.target),
            (H = H.filter((t) => null != t && t.isConnected)).splice(10);
        }
        window.addEventListener("click", t, { capture: !0 }),
          window.addEventListener("mousedown", t, { capture: !0 }),
          window.addEventListener("focus", t, { capture: !0 }),
          document.body.addEventListener("click", t, { capture: !0 }),
          document.body.addEventListener("mousedown", t, { capture: !0 }),
          document.body.addEventListener("focus", t, { capture: !0 });
      });
      var q = r(96822);
      function $(t) {
        if (!t) return new Set();
        if ("function" == typeof t) return new Set(t());
        let e = new Set();
        for (let r of t.current)
          r.current instanceof HTMLElement && e.add(r.current);
        return e;
      }
      var W =
        (((o = W || {})[(o.None = 0)] = "None"),
        (o[(o.InitialFocus = 1)] = "InitialFocus"),
        (o[(o.TabLock = 2)] = "TabLock"),
        (o[(o.FocusLock = 4)] = "FocusLock"),
        (o[(o.RestoreFocus = 8)] = "RestoreFocus"),
        (o[(o.AutoFocus = 16)] = "AutoFocus"),
        o);
      let Y = Object.assign(
        (0, b.yV)(function (t, e) {
          let r,
            n = (0, u.useRef)(null),
            i = (0, B.T)(n, e),
            {
              initialFocus: o,
              initialFocusFallback: s,
              containers: a,
              features: l = 15,
              ...c
            } = t;
          (0, P.H)() || (l = 0);
          let h = (0, w.i)(n);
          !(function (t, e) {
            let { ownerDocument: r } = e,
              n = !!(8 & t),
              i = (function () {
                let t =
                    !(arguments.length > 0) ||
                    void 0 === arguments[0] ||
                    arguments[0],
                  e = (0, u.useRef)(H.slice());
                return (
                  V(
                    (t, r) => {
                      let [n] = t,
                        [i] = r;
                      !0 === i &&
                        !1 === n &&
                        (0, q.Y)(() => {
                          e.current.splice(0);
                        }),
                        !1 === i && !0 === n && (e.current = H.slice());
                    },
                    [t, H, e]
                  ),
                  (0, p.z)(() => {
                    var t;
                    return null !=
                      (t = e.current.find((t) => null != t && t.isConnected))
                      ? t
                      : null;
                  })
                );
              })(n);
            V(() => {
              n ||
                ((null == r ? void 0 : r.activeElement) ===
                  (null == r ? void 0 : r.body) &&
                  (0, z.C5)(i()));
            }, [n]),
              (0, N.L)(() => {
                n && (0, z.C5)(i());
              });
          })(l, { ownerDocument: h });
          let m = (function (t, e) {
            let {
                ownerDocument: r,
                container: n,
                initialFocus: i,
                initialFocusFallback: o,
              } = e,
              s = (0, u.useRef)(null),
              a = (0, d.g)(!!(1 & t), "focus-trap#initial-focus"),
              l = U();
            return (
              V(() => {
                if (0 === t) return;
                if (!a) {
                  null != o && o.current && (0, z.C5)(o.current);
                  return;
                }
                let e = n.current;
                e &&
                  (0, q.Y)(() => {
                    if (!l.current) return;
                    let n = null == r ? void 0 : r.activeElement;
                    if (null != i && i.current) {
                      if ((null == i ? void 0 : i.current) === n) {
                        s.current = n;
                        return;
                      }
                    } else if (e.contains(n)) {
                      s.current = n;
                      return;
                    }
                    if (null != i && i.current) (0, z.C5)(i.current);
                    else {
                      if (16 & t) {
                        if (
                          (0, z.jA)(e, z.TO.First | z.TO.AutoFocus) !==
                          z.fE.Error
                        )
                          return;
                      } else if ((0, z.jA)(e, z.TO.First) !== z.fE.Error)
                        return;
                      if (
                        null != o &&
                        o.current &&
                        ((0, z.C5)(o.current),
                        (null == r ? void 0 : r.activeElement) === o.current)
                      )
                        return;
                      console.warn(
                        "There are no focusable elements inside the <FocusTrap />"
                      );
                    }
                    s.current = null == r ? void 0 : r.activeElement;
                  });
              }, [o, a, t]),
              s
            );
          })(l, {
            ownerDocument: h,
            container: n,
            initialFocus: o,
            initialFocusFallback: s,
          });
          !(function (t, e) {
            let {
                ownerDocument: r,
                container: n,
                containers: i,
                previousActiveElement: o,
              } = e,
              s = U(),
              a = !!(4 & t);
            f(
              null == r ? void 0 : r.defaultView,
              "focus",
              (t) => {
                if (!a || !s.current) return;
                let e = $(i);
                n.current instanceof HTMLElement && e.add(n.current);
                let r = o.current;
                if (!r) return;
                let l = t.target;
                l && l instanceof HTMLElement
                  ? Z(e, l)
                    ? ((o.current = l), (0, z.C5)(l))
                    : (t.preventDefault(), t.stopPropagation(), (0, z.C5)(r))
                  : (0, z.C5)(o.current);
              },
              !0
            );
          })(l, {
            ownerDocument: h,
            container: n,
            containers: a,
            previousActiveElement: m,
          });
          let g =
              ((r = (0, u.useRef)(0)),
              (0, _.s)(
                !0,
                "keydown",
                (t) => {
                  "Tab" === t.key && (r.current = t.shiftKey ? 1 : 0);
                },
                !0
              ),
              r),
            y = (0, p.z)((t) => {
              let e = n.current;
              e &&
                (0, I.E)(g.current, {
                  [j.Forwards]: () => {
                    (0, z.jA)(e, z.TO.First, {
                      skipElements: [t.relatedTarget, s],
                    });
                  },
                  [j.Backwards]: () => {
                    (0, z.jA)(e, z.TO.Last, {
                      skipElements: [t.relatedTarget, s],
                    });
                  },
                });
            }),
            v = (0, d.g)(!!(2 & l), "focus-trap#tab-lock"),
            M = (0, D.G)(),
            S = (0, u.useRef)(!1),
            A = (0, b.L6)();
          return u.createElement(
            u.Fragment,
            null,
            v &&
              u.createElement(x, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: y,
                features: E.Focusable,
              }),
            A({
              ourProps: {
                ref: i,
                onKeyDown(t) {
                  "Tab" == t.key &&
                    ((S.current = !0),
                    M.requestAnimationFrame(() => {
                      S.current = !1;
                    }));
                },
                onBlur(t) {
                  if (!(4 & l)) return;
                  let e = $(a);
                  n.current instanceof HTMLElement && e.add(n.current);
                  let r = t.relatedTarget;
                  r instanceof HTMLElement &&
                    "true" !== r.dataset.headlessuiFocusGuard &&
                    (Z(e, r) ||
                      (S.current
                        ? (0, z.jA)(
                            n.current,
                            (0, I.E)(g.current, {
                              [j.Forwards]: () => z.TO.Next,
                              [j.Backwards]: () => z.TO.Previous,
                            }) | z.TO.WrapAround,
                            { relativeTo: t.target }
                          )
                        : t.target instanceof HTMLElement &&
                          (0, z.C5)(t.target)));
                },
              },
              theirProps: c,
              defaultTag: "div",
              name: "FocusTrap",
            }),
            v &&
              u.createElement(x, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: y,
                features: E.Focusable,
              })
          );
        }),
        { features: W }
      );
      function Z(t, e) {
        for (let r of t) if (r.contains(e)) return !0;
        return !1;
      }
      var K = r(31094),
        G = r(34723),
        X = r(42120);
      function J(t) {
        var e;
        return (
          !!(
            t.enter ||
            t.enterFrom ||
            t.enterTo ||
            t.leave ||
            t.leaveFrom ||
            t.leaveTo
          ) ||
          (null != (e = t.as) ? e : ti) !== u.Fragment ||
          1 === u.Children.count(t.children)
        );
      }
      let Q = (0, u.createContext)(null);
      Q.displayName = "TransitionContext";
      var tt = (((s = tt || {}).Visible = "visible"), (s.Hidden = "hidden"), s);
      let te = (0, u.createContext)(null);
      function tr(t) {
        return "children" in t
          ? tr(t.children)
          : t.current
              .filter((t) => {
                let { el: e } = t;
                return null !== e.current;
              })
              .filter((t) => {
                let { state: e } = t;
                return "visible" === e;
              }).length > 0;
      }
      function tn(t, e) {
        let r = (0, h.E)(t),
          n = (0, u.useRef)([]),
          i = U(),
          o = (0, D.G)(),
          s = (0, p.z)(function (t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : b.l4.Hidden,
              s = n.current.findIndex((e) => {
                let { el: r } = e;
                return r === t;
              });
            -1 !== s &&
              ((0, I.E)(e, {
                [b.l4.Unmount]() {
                  n.current.splice(s, 1);
                },
                [b.l4.Hidden]() {
                  n.current[s].state = "hidden";
                },
              }),
              o.microTask(() => {
                var t;
                !tr(n) && i.current && (null == (t = r.current) || t.call(r));
              }));
          }),
          a = (0, p.z)((t) => {
            let e = n.current.find((e) => {
              let { el: r } = e;
              return r === t;
            });
            return (
              e
                ? "visible" !== e.state && (e.state = "visible")
                : n.current.push({ el: t, state: "visible" }),
              () => s(t, b.l4.Unmount)
            );
          }),
          l = (0, u.useRef)([]),
          c = (0, u.useRef)(Promise.resolve()),
          f = (0, u.useRef)({ enter: [], leave: [] }),
          d = (0, p.z)((t, r, n) => {
            l.current.splice(0),
              e &&
                (e.chains.current[r] = e.chains.current[r].filter((e) => {
                  let [r] = e;
                  return r !== t;
                })),
              null == e ||
                e.chains.current[r].push([
                  t,
                  new Promise((t) => {
                    l.current.push(t);
                  }),
                ]),
              null == e ||
                e.chains.current[r].push([
                  t,
                  new Promise((t) => {
                    Promise.all(
                      f.current[r].map((t) => {
                        let [e, r] = t;
                        return r;
                      })
                    ).then(() => t());
                  }),
                ]),
              "enter" === r
                ? (c.current = c.current
                    .then(() => (null == e ? void 0 : e.wait.current))
                    .then(() => n(r)))
                : n(r);
          }),
          m = (0, p.z)((t, e, r) => {
            Promise.all(
              f.current[e].splice(0).map((t) => {
                let [e, r] = t;
                return r;
              })
            )
              .then(() => {
                var t;
                null == (t = l.current.shift()) || t();
              })
              .then(() => r(e));
          });
        return (0, u.useMemo)(
          () => ({
            children: n,
            register: a,
            unregister: s,
            onStart: d,
            onStop: m,
            wait: c,
            chains: f,
          }),
          [a, s, n, d, m, f, c]
        );
      }
      te.displayName = "NestingContext";
      let ti = u.Fragment,
        to = b.VN.RenderStrategy,
        ts = (0, b.yV)(function (t, e) {
          let { show: r, appear: n = !1, unmount: i = !0, ...o } = t,
            s = (0, u.useRef)(null),
            a = J(t),
            l = (0, B.T)(...(a ? [s, e] : null === e ? [] : [e]));
          (0, P.H)();
          let c = (0, O.oJ)();
          if (
            (void 0 === r && null !== c && (r = (c & O.ZM.Open) === O.ZM.Open),
            void 0 === r)
          )
            throw Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop."
            );
          let [h, f] = (0, u.useState)(r ? "visible" : "hidden"),
            d = tn(() => {
              r || f("hidden");
            }),
            [m, y] = (0, u.useState)(!0),
            v = (0, u.useRef)([r]);
          (0, g.e)(() => {
            !1 !== m &&
              v.current[v.current.length - 1] !== r &&
              (v.current.push(r), y(!1));
          }, [v, r]);
          let w = (0, u.useMemo)(
            () => ({ show: r, appear: n, initial: m }),
            [r, n, m]
          );
          (0, g.e)(() => {
            r ? f("visible") : tr(d) || null === s.current || f("hidden");
          }, [r, d]);
          let E = { unmount: i },
            x = (0, p.z)(() => {
              var e;
              m && y(!1), null == (e = t.beforeEnter) || e.call(t);
            }),
            M = (0, p.z)(() => {
              var e;
              m && y(!1), null == (e = t.beforeLeave) || e.call(t);
            }),
            S = (0, b.L6)();
          return u.createElement(
            te.Provider,
            { value: d },
            u.createElement(
              Q.Provider,
              { value: w },
              S({
                ourProps: {
                  ...E,
                  as: u.Fragment,
                  children: u.createElement(ta, {
                    ref: l,
                    ...E,
                    ...o,
                    beforeEnter: x,
                    beforeLeave: M,
                  }),
                },
                theirProps: {},
                defaultTag: u.Fragment,
                features: to,
                visible: "visible" === h,
                name: "Transition",
              })
            )
          );
        }),
        ta = (0, b.yV)(function (t, e) {
          var r, n;
          let {
              transition: i = !0,
              beforeEnter: o,
              afterEnter: s,
              beforeLeave: a,
              afterLeave: l,
              enter: c,
              enterFrom: h,
              enterTo: f,
              entered: d,
              leave: m,
              leaveFrom: y,
              leaveTo: v,
              ...w
            } = t,
            [E, x] = (0, u.useState)(null),
            M = (0, u.useRef)(null),
            S = J(t),
            A = (0, B.T)(...(S ? [M, e, x] : null === e ? [] : [e])),
            T = null == (r = w.unmount) || r ? b.l4.Unmount : b.l4.Hidden,
            {
              show: R,
              appear: k,
              initial: L,
            } = (function () {
              let t = (0, u.useContext)(Q);
              if (null === t)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return t;
            })(),
            [C, F] = (0, u.useState)(R ? "visible" : "hidden"),
            D = (function () {
              let t = (0, u.useContext)(te);
              if (null === t)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return t;
            })(),
            { register: U, unregister: N } = D;
          (0, g.e)(() => U(M), [U, M]),
            (0, g.e)(() => {
              if (T === b.l4.Hidden && M.current) {
                if (R && "visible" !== C) {
                  F("visible");
                  return;
                }
                return (0, I.E)(C, { hidden: () => N(M), visible: () => U(M) });
              }
            }, [C, M, U, N, R, T]);
          let _ = (0, P.H)();
          (0, g.e)(() => {
            if (S && _ && "visible" === C && null === M.current)
              throw Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
              );
          }, [M, C, _, S]);
          let j = L && !k,
            V = k && R && L,
            z = (0, u.useRef)(!1),
            H = tn(() => {
              z.current || (F("hidden"), N(M));
            }, D),
            q = (0, p.z)((t) => {
              (z.current = !0),
                H.onStart(M, t ? "enter" : "leave", (t) => {
                  "enter" === t
                    ? null == o || o()
                    : "leave" === t && (null == a || a());
                });
            }),
            $ = (0, p.z)((t) => {
              let e = t ? "enter" : "leave";
              (z.current = !1),
                H.onStop(M, e, (t) => {
                  "enter" === t
                    ? null == s || s()
                    : "leave" === t && (null == l || l());
                }),
                "leave" !== e || tr(H) || (F("hidden"), N(M));
            });
          (0, u.useEffect)(() => {
            (S && i) || (q(R), $(R));
          }, [R, S, i]);
          let W = !(!i || !S || !_ || j),
            [, Y] = (0, G.Y)(W, E, R, { start: q, end: $ }),
            Z = (0, b.oA)({
              ref: A,
              className:
                (null ==
                (n = (0, X.A)(
                  w.className,
                  V && c,
                  V && h,
                  Y.enter && c,
                  Y.enter && Y.closed && h,
                  Y.enter && !Y.closed && f,
                  Y.leave && m,
                  Y.leave && !Y.closed && y,
                  Y.leave && Y.closed && v,
                  !Y.transition && R && d
                ))
                  ? void 0
                  : n.trim()) || void 0,
              ...(0, G.X)(Y),
            }),
            K = 0;
          "visible" === C && (K |= O.ZM.Open),
            "hidden" === C && (K |= O.ZM.Closed),
            Y.enter && (K |= O.ZM.Opening),
            Y.leave && (K |= O.ZM.Closing);
          let tt = (0, b.L6)();
          return u.createElement(
            te.Provider,
            { value: H },
            u.createElement(
              O.up,
              { value: K },
              tt({
                ourProps: Z,
                theirProps: w,
                defaultTag: ti,
                features: to,
                visible: "visible" === C,
                name: "Transition.Child",
              })
            )
          );
        }),
        tl = (0, b.yV)(function (t, e) {
          let r = null !== (0, u.useContext)(Q),
            n = null !== (0, O.oJ)();
          return u.createElement(
            u.Fragment,
            null,
            !r && n
              ? u.createElement(ts, { ref: e, ...t })
              : u.createElement(ta, { ref: e, ...t })
          );
        }),
        tu = Object.assign(ts, { Child: tl, Root: ts });
      var tc =
          (((a = tc || {})[(a.Open = 0)] = "Open"),
          (a[(a.Closed = 1)] = "Closed"),
          a),
        th = (((l = th || {})[(l.SetTitleId = 0)] = "SetTitleId"), l);
      let tf = {
          0: (t, e) => (t.titleId === e.id ? t : { ...t, titleId: e.id }),
        },
        td = (0, u.createContext)(null);
      function tp(t) {
        let e = (0, u.useContext)(td);
        if (null === e) {
          let e = Error(
            "<".concat(t, " /> is missing a parent <Dialog /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(e, tp), e);
        }
        return e;
      }
      function tm(t, e) {
        return (0, I.E)(e.type, tf, t, e);
      }
      td.displayName = "DialogContext";
      let tg = (0, b.yV)(function (t, e) {
          let r = (0, u.useId)(),
            {
              id: n = "headlessui-dialog-".concat(r),
              open: i,
              onClose: o,
              initialFocus: s,
              role: a = "dialog",
              autoFocus: l = !0,
              __demoMode: h = !1,
              unmount: E = !1,
              ...x
            } = t,
            M = (0, u.useRef)(!1);
          a =
            "dialog" === a || "alertdialog" === a
              ? a
              : (M.current ||
                  ((M.current = !0),
                  console.warn(
                    "Invalid role [".concat(
                      a,
                      "] passed to <Dialog />. Only `dialog` and and `alertdialog` are supported. Using `dialog` instead."
                    )
                  )),
                "dialog");
          let S = (0, O.oJ)();
          void 0 === i && null !== S && (i = (S & O.ZM.Open) === O.ZM.Open);
          let A = (0, u.useRef)(null),
            k = (0, B.T)(A, e),
            I = (0, w.i)(A),
            D = i ? 0 : 1,
            [U, N] = (0, u.useReducer)(tm, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, u.createRef)(),
            }),
            _ = (0, p.z)(() => o(!1)),
            j = (0, p.z)((t) => N({ type: 0, id: t })),
            V = !!(0, P.H)() && 0 === D,
            [z, H] = (0, K.kF)(),
            q = T(),
            { resolveContainers: $ } = (function () {
              let {
                  defaultContainers: t = [],
                  portals: e,
                  mainTreeNode: r,
                } = arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
                n = (0, w.i)(r),
                i = (0, p.z)(() => {
                  var i, o;
                  let s = [];
                  for (let e of t)
                    null !== e &&
                      (e instanceof HTMLElement
                        ? s.push(e)
                        : "current" in e &&
                          e.current instanceof HTMLElement &&
                          s.push(e.current));
                  if (null != e && e.current)
                    for (let t of e.current) s.push(t);
                  for (let t of null !=
                  (i =
                    null == n
                      ? void 0
                      : n.querySelectorAll("html > *, body > *"))
                    ? i
                    : [])
                    t !== document.body &&
                      t !== document.head &&
                      t instanceof HTMLElement &&
                      "headlessui-portal-root" !== t.id &&
                      ((r &&
                        (t.contains(r) ||
                          t.contains(
                            null == (o = null == r ? void 0 : r.getRootNode())
                              ? void 0
                              : o.host
                          ))) ||
                        s.some((e) => t.contains(e)) ||
                        s.push(t));
                  return s;
                });
              return {
                resolveContainers: i,
                contains: (0, p.z)((t) => i().some((e) => e.contains(t))),
              };
            })({
              mainTreeNode: q,
              portals: z,
              defaultContainers: [
                {
                  get current() {
                    var Z;
                    return null != (Z = U.panelRef.current) ? Z : A.current;
                  },
                },
              ],
            }),
            G = null !== S && (S & O.ZM.Closing) === O.ZM.Closing;
          (0, m.s)(!h && !G && V, {
            allowed: (0, p.z)(() => {
              var t, e;
              return [
                null !=
                (e =
                  null == (t = A.current)
                    ? void 0
                    : t.closest("[data-headlessui-portal]"))
                  ? e
                  : null,
              ];
            }),
            disallowed: (0, p.z)(() => {
              var t;
              return [
                null !=
                (t =
                  null == q
                    ? void 0
                    : q.closest("body > *:not(#headlessui-portal-root)"))
                  ? t
                  : null,
              ];
            }),
          }),
            (0, v.O)(V, $, (t) => {
              t.preventDefault(), _();
            }),
            (function (t) {
              let e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "undefined" != typeof document
                    ? document.defaultView
                    : null,
                r = arguments.length > 2 ? arguments[2] : void 0,
                n = (0, d.g)(t, "escape");
              f(e, "keydown", (t) => {
                n && (t.defaultPrevented || (t.key === c.R.Escape && r(t)));
              });
            })(V, null == I ? void 0 : I.defaultView, (t) => {
              t.preventDefault(),
                t.stopPropagation(),
                document.activeElement &&
                  "blur" in document.activeElement &&
                  "function" == typeof document.activeElement.blur &&
                  document.activeElement.blur(),
                _();
            }),
            (0, R.P)(!h && !G && V, I, $),
            (0, y.m)(V, A, _);
          let [X, J] = (0, F.fw)(),
            Q = (0, u.useMemo)(
              () => [
                { dialogState: D, close: _, setTitleId: j, unmount: E },
                U,
              ],
              [D, U, _, j, E]
            ),
            tt = (0, u.useMemo)(() => ({ open: 0 === D }), [D]),
            te = {
              ref: k,
              id: n,
              role: a,
              tabIndex: -1,
              "aria-modal": h ? void 0 : 0 === D || void 0,
              "aria-labelledby": U.titleId,
              "aria-describedby": X,
              unmount: E,
            },
            tr = !(function () {
              var t;
              let [e] = (0, u.useState)(() =>
                  "undefined" != typeof window &&
                  "function" == typeof window.matchMedia
                    ? window.matchMedia("(pointer: coarse)")
                    : null
                ),
                [r, n] = (0, u.useState)(
                  null != (t = null == e ? void 0 : e.matches) && t
                );
              return (
                (0, g.e)(() => {
                  if (e)
                    return (
                      e.addEventListener("change", t),
                      () => e.removeEventListener("change", t)
                    );
                  function t(t) {
                    n(t.matches);
                  }
                }, [e]),
                r
              );
            })(),
            tn = W.None;
          V &&
            !h &&
            ((tn |= W.RestoreFocus),
            (tn |= W.TabLock),
            l && (tn |= W.AutoFocus),
            tr && (tn |= W.InitialFocus));
          let ti = (0, b.L6)();
          return u.createElement(
            O.uu,
            null,
            u.createElement(
              C.O,
              { force: !0 },
              u.createElement(
                K.h_,
                null,
                u.createElement(
                  td.Provider,
                  { value: Q },
                  u.createElement(
                    K.wA,
                    { target: A },
                    u.createElement(
                      C.O,
                      { force: !1 },
                      u.createElement(
                        J,
                        { slot: tt },
                        u.createElement(
                          H,
                          null,
                          u.createElement(
                            Y,
                            {
                              initialFocus: s,
                              initialFocusFallback: A,
                              containers: $,
                              features: tn,
                            },
                            u.createElement(
                              L,
                              { value: _ },
                              ti({
                                ourProps: te,
                                theirProps: x,
                                slot: tt,
                                defaultTag: ty,
                                features: tv,
                                visible: 0 === D,
                                name: "Dialog",
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        ty = "div",
        tv = b.VN.RenderStrategy | b.VN.Static,
        tw = (0, b.yV)(function (t, e) {
          let { transition: r = !1, open: n, ...i } = t,
            o = (0, O.oJ)(),
            s = t.hasOwnProperty("open") || null !== o,
            a = t.hasOwnProperty("onClose");
          if (!s && !a)
            throw Error(
              "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
            );
          if (!s)
            throw Error(
              "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
            );
          if (!a)
            throw Error(
              "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
            );
          if (!o && "boolean" != typeof t.open)
            throw Error(
              "You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: ".concat(
                t.open
              )
            );
          if ("function" != typeof t.onClose)
            throw Error(
              "You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: ".concat(
                t.onClose
              )
            );
          return (void 0 !== n || r) && !i.static
            ? u.createElement(
                A,
                null,
                u.createElement(
                  tu,
                  { show: n, transition: r, unmount: i.unmount },
                  u.createElement(tg, { ref: e, ...i })
                )
              )
            : u.createElement(
                A,
                null,
                u.createElement(tg, { ref: e, open: n, ...i })
              );
        }),
        tb = (0, b.yV)(function (t, e) {
          let r = (0, u.useId)(),
            {
              id: n = "headlessui-dialog-panel-".concat(r),
              transition: i = !1,
              ...o
            } = t,
            [{ dialogState: s, unmount: a }, l] = tp("Dialog.Panel"),
            c = (0, B.T)(e, l.panelRef),
            h = (0, u.useMemo)(() => ({ open: 0 === s }), [s]),
            f = (0, p.z)((t) => {
              t.stopPropagation();
            }),
            d = i ? tl : u.Fragment,
            m = (0, b.L6)();
          return u.createElement(
            d,
            { ...(i ? { unmount: a } : {}) },
            m({
              ourProps: { ref: c, id: n, onClick: f },
              theirProps: o,
              slot: h,
              defaultTag: "div",
              name: "Dialog.Panel",
            })
          );
        }),
        tE =
          ((0, b.yV)(function (t, e) {
            let { transition: r = !1, ...n } = t,
              [{ dialogState: i, unmount: o }] = tp("Dialog.Backdrop"),
              s = (0, u.useMemo)(() => ({ open: 0 === i }), [i]),
              a = r ? tl : u.Fragment,
              l = (0, b.L6)();
            return u.createElement(
              a,
              { ...(r ? { unmount: o } : {}) },
              l({
                ourProps: { ref: e, "aria-hidden": !0 },
                theirProps: n,
                slot: s,
                defaultTag: "div",
                name: "Dialog.Backdrop",
              })
            );
          }),
          (0, b.yV)(function (t, e) {
            let r = (0, u.useId)(),
              { id: n = "headlessui-dialog-title-".concat(r), ...i } = t,
              [{ dialogState: o, setTitleId: s }] = tp("Dialog.Title"),
              a = (0, B.T)(e);
            (0, u.useEffect)(() => (s(n), () => s(null)), [n, s]);
            let l = (0, u.useMemo)(() => ({ open: 0 === o }), [o]);
            return (0, b.L6)()({
              ourProps: { ref: a, id: n },
              theirProps: i,
              slot: l,
              defaultTag: "h2",
              name: "Dialog.Title",
            });
          })),
        tx = Object.assign(tw, { Panel: tb, Title: tE, Description: F.dk });
    },
    37388: function (t, e, r) {
      "use strict";
      let n;
      r.d(e, {
        R: function () {
          return i;
        },
      });
      var i =
        (((n = i || {}).Space = " "),
        (n.Enter = "Enter"),
        (n.Escape = "Escape"),
        (n.Backspace = "Backspace"),
        (n.Delete = "Delete"),
        (n.ArrowLeft = "ArrowLeft"),
        (n.ArrowUp = "ArrowUp"),
        (n.ArrowRight = "ArrowRight"),
        (n.ArrowDown = "ArrowDown"),
        (n.Home = "Home"),
        (n.End = "End"),
        (n.PageUp = "PageUp"),
        (n.PageDown = "PageDown"),
        (n.Tab = "Tab"),
        n);
    },
    98509: function (t, e, r) {
      "use strict";
      let n, i, o, s;
      r.d(e, {
        v2: function () {
          return t$;
        },
        j2: function () {
          return tz;
        },
        sN: function () {
          return tq;
        },
        sd: function () {
          return tH;
        },
      });
      var a = r(2265);
      let l = "undefined" != typeof document ? a.useLayoutEffect : () => {};
      class u {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented;
        }
        preventDefault() {
          (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(),
            (this.isPropagationStopped = () => !0);
        }
        isPropagationStopped() {
          return !1;
        }
        persist() {}
        constructor(t, e) {
          (this.nativeEvent = e),
            (this.target = e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget),
            (this.bubbles = e.bubbles),
            (this.cancelable = e.cancelable),
            (this.defaultPrevented = e.defaultPrevented),
            (this.eventPhase = e.eventPhase),
            (this.isTrusted = e.isTrusted),
            (this.timeStamp = e.timeStamp),
            (this.type = t);
        }
      }
      function c(t) {
        let e = (0, a.useRef)({ isFocused: !1, observer: null });
        l(() => {
          let t = e.current;
          return () => {
            t.observer && (t.observer.disconnect(), (t.observer = null));
          };
        }, []);
        let r = (function (t) {
          let e = (0, a.useRef)(null);
          return (
            l(() => {
              e.current = t;
            }, [t]),
            (0, a.useCallback)((...t) => {
              let r = e.current;
              return null == r ? void 0 : r(...t);
            }, [])
          );
        })((e) => {
          null == t || t(e);
        });
        return (0, a.useCallback)(
          (t) => {
            if (
              t.target instanceof HTMLButtonElement ||
              t.target instanceof HTMLInputElement ||
              t.target instanceof HTMLTextAreaElement ||
              t.target instanceof HTMLSelectElement
            ) {
              e.current.isFocused = !0;
              let n = t.target;
              n.addEventListener(
                "focusout",
                (t) => {
                  (e.current.isFocused = !1),
                    n.disabled && r(new u("blur", t)),
                    e.current.observer &&
                      (e.current.observer.disconnect(),
                      (e.current.observer = null));
                },
                { once: !0 }
              ),
                (e.current.observer = new MutationObserver(() => {
                  if (e.current.isFocused && n.disabled) {
                    var t;
                    null === (t = e.current.observer) ||
                      void 0 === t ||
                      t.disconnect();
                    let r =
                      n === document.activeElement
                        ? null
                        : document.activeElement;
                    n.dispatchEvent(
                      new FocusEvent("blur", { relatedTarget: r })
                    ),
                      n.dispatchEvent(
                        new FocusEvent("focusout", {
                          bubbles: !0,
                          relatedTarget: r,
                        })
                      );
                  }
                })),
                e.current.observer.observe(n, {
                  attributes: !0,
                  attributeFilter: ["disabled"],
                });
            }
          },
          [r]
        );
      }
      function h(t) {
        var e;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          ((null === (e = window.navigator.userAgentData) || void 0 === e
            ? void 0
            : e.brands.some((e) => t.test(e.brand))) ||
            t.test(window.navigator.userAgent))
        );
      }
      function f(t) {
        var e;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          t.test(
            (null === (e = window.navigator.userAgentData) || void 0 === e
              ? void 0
              : e.platform) || window.navigator.platform
          )
        );
      }
      function d(t) {
        let e = null;
        return () => (null == e && (e = t()), e);
      }
      let p = d(function () {
          return f(/^Mac/i);
        }),
        m = d(function () {
          return f(/^iPhone/i);
        }),
        g = d(function () {
          return f(/^iPad/i) || (p() && navigator.maxTouchPoints > 1);
        }),
        y = d(function () {
          return m() || g();
        });
      d(function () {
        return p() || y();
      }),
        d(function () {
          return h(/AppleWebKit/i) && !v();
        });
      let v = d(function () {
          return h(/Chrome/i);
        }),
        w = d(function () {
          return h(/Android/i);
        });
      d(function () {
        return h(/Firefox/i);
      });
      let b = (t) => {
          var e;
          return null !== (e = null == t ? void 0 : t.ownerDocument) &&
            void 0 !== e
            ? e
            : document;
        },
        E = (t) =>
          t && "window" in t && t.window === t ? t : b(t).defaultView || window,
        x = null,
        M = new Set(),
        S = new Map(),
        A = !1,
        T = !1,
        R = { Tab: !0, Escape: !0 };
      function P(t, e) {
        for (let r of M) r(t, e);
      }
      function B(t) {
        (A = !0),
          t.metaKey ||
            (!p() && t.altKey) ||
            t.ctrlKey ||
            "Control" === t.key ||
            "Shift" === t.key ||
            "Meta" === t.key ||
            ((x = "keyboard"), P("keyboard", t));
      }
      function k(t) {
        (x = "pointer"),
          ("mousedown" === t.type || "pointerdown" === t.type) &&
            ((A = !0), P("pointer", t));
      }
      function L(t) {
        ((0 === t.mozInputSource && t.isTrusted) ||
          (w() && t.pointerType
            ? "click" === t.type && 1 === t.buttons
            : 0 === t.detail && !t.pointerType)) &&
          ((A = !0), (x = "virtual"));
      }
      function O(t) {
        t.target !== window &&
          t.target !== document &&
          t.isTrusted &&
          (A || T || ((x = "virtual"), P("virtual", t)), (A = !1), (T = !1));
      }
      function C() {
        (A = !1), (T = !0);
      }
      function I(t) {
        if ("undefined" == typeof window || S.get(E(t))) return;
        let e = E(t),
          r = b(t),
          n = e.HTMLElement.prototype.focus;
        (e.HTMLElement.prototype.focus = function () {
          (A = !0), n.apply(this, arguments);
        }),
          r.addEventListener("keydown", B, !0),
          r.addEventListener("keyup", B, !0),
          r.addEventListener("click", L, !0),
          e.addEventListener("focus", O, !0),
          e.addEventListener("blur", C, !1),
          "undefined" != typeof PointerEvent
            ? (r.addEventListener("pointerdown", k, !0),
              r.addEventListener("pointermove", k, !0),
              r.addEventListener("pointerup", k, !0))
            : (r.addEventListener("mousedown", k, !0),
              r.addEventListener("mousemove", k, !0),
              r.addEventListener("mouseup", k, !0)),
          e.addEventListener(
            "beforeunload",
            () => {
              F(t);
            },
            { once: !0 }
          ),
          S.set(e, { focus: n });
      }
      let F = (t, e) => {
        let r = E(t),
          n = b(t);
        e && n.removeEventListener("DOMContentLoaded", e),
          S.has(r) &&
            ((r.HTMLElement.prototype.focus = S.get(r).focus),
            n.removeEventListener("keydown", B, !0),
            n.removeEventListener("keyup", B, !0),
            n.removeEventListener("click", L, !0),
            r.removeEventListener("focus", O, !0),
            r.removeEventListener("blur", C, !1),
            "undefined" != typeof PointerEvent
              ? (n.removeEventListener("pointerdown", k, !0),
                n.removeEventListener("pointermove", k, !0),
                n.removeEventListener("pointerup", k, !0))
              : (n.removeEventListener("mousedown", k, !0),
                n.removeEventListener("mousemove", k, !0),
                n.removeEventListener("mouseup", k, !0)),
            S.delete(r));
      };
      function D() {
        return "pointer" !== x;
      }
      "undefined" != typeof document &&
        (function (t) {
          let e;
          let r = b(void 0);
          "loading" !== r.readyState
            ? I(void 0)
            : ((e = () => {
                I(void 0);
              }),
              r.addEventListener("DOMContentLoaded", e)),
            () => F(t, e);
        })();
      let U = new Set([
        "checkbox",
        "radio",
        "range",
        "color",
        "file",
        "image",
        "button",
        "submit",
        "reset",
      ]);
      function N(t, e) {
        return !!e && !!t && t.contains(e);
      }
      let _ = (t = document) => t.activeElement;
      function j() {
        let t = (0, a.useRef)(new Map()),
          e = (0, a.useCallback)((e, r, n, i) => {
            let o = (null == i ? void 0 : i.once)
              ? (...e) => {
                  t.current.delete(n), n(...e);
                }
              : n;
            t.current.set(n, { type: r, eventTarget: e, fn: o, options: i }),
              e.addEventListener(r, o, i);
          }, []),
          r = (0, a.useCallback)((e, r, n, i) => {
            var o;
            let s =
              (null === (o = t.current.get(n)) || void 0 === o
                ? void 0
                : o.fn) || n;
            e.removeEventListener(r, s, i), t.current.delete(n);
          }, []),
          n = (0, a.useCallback)(() => {
            t.current.forEach((t, e) => {
              r(t.eventTarget, t.type, e, t.options);
            });
          }, [r]);
        return (
          (0, a.useEffect)(() => n, [n]),
          {
            addGlobalListener: e,
            removeGlobalListener: r,
            removeAllGlobalListeners: n,
          }
        );
      }
      let V = !1,
        z = 0;
      function H() {
        (V = !0),
          setTimeout(() => {
            V = !1;
          }, 50);
      }
      function q(t) {
        "touch" === t.pointerType && H();
      }
      function $() {
        if ("undefined" != typeof document)
          return (
            "undefined" != typeof PointerEvent
              ? document.addEventListener("pointerup", q)
              : document.addEventListener("touchend", H),
            z++,
            () => {
              --z > 0 ||
                ("undefined" != typeof PointerEvent
                  ? document.removeEventListener("pointerup", q)
                  : document.removeEventListener("touchend", H));
            }
          );
      }
      var W = r(54887),
        Y = r(40293),
        Z = r(90945),
        K = r(13323),
        G = r(64518),
        X = r(16821),
        J = r(33106),
        Q = r(32539),
        tt = r(40048),
        te = r(53466),
        tr = r(93689);
      let tn =
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
      function ti(t) {
        var e, r;
        let n = null != (e = t.innerText) ? e : "",
          i = t.cloneNode(!0);
        if (!(i instanceof HTMLElement)) return n;
        let o = !1;
        for (let t of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
          t.remove(), (o = !0);
        let s = o ? (null != (r = i.innerText) ? r : "") : n;
        return tn.test(s) && (s = s.replace(tn, "")), s;
      }
      function to(t) {
        return [t.screenX, t.screenY];
      }
      var ts = r(34723),
        ta = r(61896),
        tl = r(97859),
        tu = r(51050);
      let tc = (0, a.createContext)({
        styles: void 0,
        setReference: () => {},
        setFloating: () => {},
        getReferenceProps: () => ({}),
        getFloatingProps: () => ({}),
        slot: {},
      });
      tc.displayName = "FloatingContext";
      let th = (0, a.createContext)(null);
      function tf(t) {
        var e, r, n;
        let i,
          o,
          s,
          { children: l, enabled: u = !0 } = t,
          [c, h] = (0, a.useState)(null),
          [f, d] = (0, a.useState)(0),
          p = (0, a.useRef)(null),
          [m, g] = (0, a.useState)(null);
        (0, G.e)(() => {
          if (!m) return;
          let t = new MutationObserver(() => {
            let t = window.getComputedStyle(m).maxHeight,
              e = parseFloat(t);
            if (isNaN(e)) return;
            let r = parseInt(t);
            isNaN(r) ||
              (e !== r && (m.style.maxHeight = "".concat(Math.ceil(e), "px")));
          });
          return (
            t.observe(m, { attributes: !0, attributeFilter: ["style"] }),
            () => {
              t.disconnect();
            }
          );
        }, [m]);
        let y = u && null !== c && null !== m,
          {
            to: v = "bottom",
            gap: w = 0,
            offset: b = 0,
            padding: E = 0,
            inner: x,
          } = ((i = td(
            null != (e = null == c ? void 0 : c.gap)
              ? e
              : "var(--anchor-gap, 0)",
            m
          )),
          (o = td(
            null != (r = null == c ? void 0 : c.offset)
              ? r
              : "var(--anchor-offset, 0)",
            m
          )),
          (s = td(
            null != (n = null == c ? void 0 : c.padding)
              ? n
              : "var(--anchor-padding, 0)",
            m
          )),
          { ...c, gap: i, offset: o, padding: s }),
          [M, S = "center"] = v.split(" ");
        (0, G.e)(() => {
          y && d(0);
        }, [y]);
        let {
            refs: A,
            floatingStyles: T,
            context: R,
          } = (0, ta.YF)({
            open: y,
            placement:
              "selection" === M
                ? "center" === S
                  ? "bottom"
                  : "bottom-".concat(S)
                : "center" === S
                ? "".concat(M)
                : "".concat(M, "-").concat(S),
            strategy: "absolute",
            transform: !1,
            middleware: [
              (0, tl.cv)({ mainAxis: "selection" === M ? 0 : w, crossAxis: b }),
              (0, tl.uY)({ padding: E }),
              "selection" !== M && (0, tl.RR)({ padding: E }),
              "selection" === M && x
                ? (0, ta.aN)({
                    ...x,
                    padding: E,
                    overflowRef: p,
                    offset: f,
                    minItemsVisible: 4,
                    referenceOverflowThreshold: E,
                    onFallbackChange(t) {
                      var e, r;
                      if (!t) return;
                      let n = R.elements.floating;
                      if (!n) return;
                      let i =
                          parseFloat(getComputedStyle(n).scrollPaddingBottom) ||
                          0,
                        o = Math.min(4, n.childElementCount),
                        s = 0,
                        a = 0;
                      for (let t of null !=
                      (r =
                        null == (e = R.elements.floating)
                          ? void 0
                          : e.childNodes)
                        ? r
                        : [])
                        if (t instanceof HTMLElement) {
                          let e = t.offsetTop,
                            r = e + t.clientHeight + i,
                            l = n.scrollTop,
                            u = l + n.clientHeight;
                          if (e >= l && r <= u) o--;
                          else {
                            (a = Math.max(0, Math.min(r, u) - Math.max(e, l))),
                              (s = t.clientHeight);
                            break;
                          }
                        }
                      o >= 1 &&
                        d((t) => {
                          let e = s * o - a + i;
                          return t >= e ? t : e;
                        });
                    },
                  })
                : null,
              (0, tl.dp)({
                padding: E,
                apply(t) {
                  let {
                    availableWidth: e,
                    availableHeight: r,
                    elements: n,
                  } = t;
                  Object.assign(n.floating.style, {
                    overflow: "auto",
                    maxWidth: "".concat(e, "px"),
                    maxHeight: "min(var(--anchor-max-height, 100vh), ".concat(
                      r,
                      "px)"
                    ),
                  });
                },
              }),
            ].filter(Boolean),
            whileElementsMounted: tu.Me,
          }),
          [P = M, B = S] = R.placement.split("-");
        "selection" === M && (P = "selection");
        let k = (0, a.useMemo)(
            () => ({ anchor: [P, B].filter(Boolean).join(" ") }),
            [P, B]
          ),
          L = (0, ta.Rz)(R, { overflowRef: p, onChange: d }),
          { getReferenceProps: O, getFloatingProps: C } = (0, ta.NI)([L]),
          I = (0, K.z)((t) => {
            g(t), A.setFloating(t);
          });
        return a.createElement(
          th.Provider,
          { value: h },
          a.createElement(
            tc.Provider,
            {
              value: {
                setFloating: I,
                setReference: A.setReference,
                styles: T,
                getReferenceProps: O,
                getFloatingProps: C,
                slot: k,
              },
            },
            l
          )
        );
      }
      function td(t, e) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : void 0,
          n = (0, Z.G)(),
          i = (0, K.z)((t, e) => {
            if (null == t) return [r, null];
            if ("number" == typeof t) return [t, null];
            if ("string" == typeof t) {
              if (!e) return [r, null];
              let i = tp(t, e);
              return [
                i,
                (r) => {
                  let o = (function t(e) {
                    let r = /var\((.*)\)/.exec(e);
                    if (r) {
                      let e = r[1].indexOf(",");
                      if (-1 === e) return [r[1]];
                      let n = r[1].slice(0, e).trim(),
                        i = r[1].slice(e + 1).trim();
                      return i ? [n, ...t(i)] : [n];
                    }
                    return [];
                  })(t);
                  {
                    let s = o.map((t) =>
                      window.getComputedStyle(e).getPropertyValue(t)
                    );
                    n.requestAnimationFrame(function a() {
                      n.nextFrame(a);
                      let l = !1;
                      for (let [t, r] of o.entries()) {
                        let n = window.getComputedStyle(e).getPropertyValue(r);
                        if (s[t] !== n) {
                          (s[t] = n), (l = !0);
                          break;
                        }
                      }
                      if (!l) return;
                      let u = tp(t, e);
                      i !== u && (r(u), (i = u));
                    });
                  }
                  return n.dispose;
                },
              ];
            }
            return [r, null];
          }),
          o = (0, a.useMemo)(() => i(t, e)[0], [t, e]),
          [s = o, l] = (0, a.useState)();
        return (
          (0, G.e)(() => {
            let [r, n] = i(t, e);
            if ((l(r), n)) return n(l);
          }, [t, e]),
          s
        );
      }
      function tp(t, e) {
        let r = document.createElement("div");
        e.appendChild(r),
          r.style.setProperty("margin-top", "0px", "important"),
          r.style.setProperty("margin-top", t, "important");
        let n = parseFloat(window.getComputedStyle(r).marginTop) || 0;
        return e.removeChild(r), n;
      }
      th.displayName = "PlacementContext";
      var tm = r(37863),
        tg =
          (((n = tg || {})[(n.First = 0)] = "First"),
          (n[(n.Previous = 1)] = "Previous"),
          (n[(n.Next = 2)] = "Next"),
          (n[(n.Last = 3)] = "Last"),
          (n[(n.Specific = 4)] = "Specific"),
          (n[(n.Nothing = 5)] = "Nothing"),
          n);
      function ty(t, e) {
        let r = e.resolveItems();
        if (r.length <= 0) return null;
        let n = e.resolveActiveIndex(),
          i = null != n ? n : -1;
        switch (t.focus) {
          case 0:
            for (let t = 0; t < r.length; ++t)
              if (!e.resolveDisabled(r[t], t, r)) return t;
            return n;
          case 1:
            -1 === i && (i = r.length);
            for (let t = i - 1; t >= 0; --t)
              if (!e.resolveDisabled(r[t], t, r)) return t;
            return n;
          case 2:
            for (let t = i + 1; t < r.length; ++t)
              if (!e.resolveDisabled(r[t], t, r)) return t;
            return n;
          case 3:
            for (let t = r.length - 1; t >= 0; --t)
              if (!e.resolveDisabled(r[t], t, r)) return t;
            return n;
          case 4:
            for (let n = 0; n < r.length; ++n)
              if (e.resolveId(r[n], n, r) === t.id) return n;
            return n;
          case 5:
            return null;
          default:
            !(function (t) {
              throw Error("Unexpected object: " + t);
            })(t);
        }
      }
      var tv = r(16015),
        tw = r(37105),
        tb = r(24536),
        tE = r(27847),
        tx = r(33577),
        tM = r(37388),
        tS = r(6885);
      let tA = (0, a.createContext)(void 0),
        tT = (0, a.createContext)(null);
      function tR() {
        let t = (0, a.useContext)(tT);
        if (null === t) {
          let t = Error(
            "You used a <Label /> component, but it is not inside a relevant parent."
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, tR), t);
        }
        return t;
      }
      function tP() {
        var t, e;
        let r,
          { inherit: n = !1 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = (r =
            null != (e = null == (t = (0, a.useContext)(tT)) ? void 0 : t.value)
              ? e
              : void 0),
          [o, s] = (0, a.useState)([]),
          l = n ? [i, ...o].filter(Boolean) : o;
        return [
          l.length > 0 ? l.join(" ") : void 0,
          (0, a.useMemo)(
            () =>
              function (t) {
                let e = (0, K.z)(
                    (t) => (
                      s((e) => [...e, t]),
                      () =>
                        s((e) => {
                          let r = e.slice(),
                            n = r.indexOf(t);
                          return -1 !== n && r.splice(n, 1), r;
                        })
                    )
                  ),
                  r = (0, a.useMemo)(
                    () => ({
                      register: e,
                      slot: t.slot,
                      name: t.name,
                      props: t.props,
                      value: t.value,
                    }),
                    [e, t.slot, t.name, t.props, t.value]
                  );
                return a.createElement(tT.Provider, { value: r }, t.children);
              },
            [s]
          ),
        ];
      }
      (tT.displayName = "LabelContext"),
        Object.assign(
          (0, tE.yV)(function (t, e) {
            var r;
            let n = (0, a.useId)(),
              i = tR(),
              o = (0, a.useContext)(tA),
              s = (0, tS.B)(),
              {
                id: l = "headlessui-label-".concat(n),
                htmlFor: u = null != o
                  ? o
                  : null == (r = i.props)
                  ? void 0
                  : r.htmlFor,
                passive: c = !1,
                ...h
              } = t,
              f = (0, tr.T)(e);
            (0, G.e)(() => i.register(l), [l, i.register]);
            let d = (0, K.z)((t) => {
                let e = t.currentTarget;
                if (
                  (e instanceof HTMLLabelElement && t.preventDefault(),
                  i.props &&
                    "onClick" in i.props &&
                    "function" == typeof i.props.onClick &&
                    i.props.onClick(t),
                  e instanceof HTMLLabelElement)
                ) {
                  let t = document.getElementById(e.htmlFor);
                  if (t) {
                    let e = t.getAttribute("disabled");
                    if ("true" === e || "" === e) return;
                    let r = t.getAttribute("aria-disabled");
                    if ("true" === r || "" === r) return;
                    ((t instanceof HTMLInputElement &&
                      ("radio" === t.type || "checkbox" === t.type)) ||
                      "radio" === t.role ||
                      "checkbox" === t.role ||
                      "switch" === t.role) &&
                      t.click(),
                      t.focus({ preventScroll: !0 });
                  }
                }
              }),
              p = s || !1,
              m = (0, a.useMemo)(
                () => ({ ...i.slot, disabled: p }),
                [i.slot, p]
              ),
              g = { ref: f, ...i.props, id: l, htmlFor: u, onClick: d };
            return (
              c &&
                ("onClick" in g && (delete g.htmlFor, delete g.onClick),
                "onClick" in h && delete h.onClick),
              (0, tE.L6)()({
                ourProps: g,
                theirProps: h,
                slot: m,
                defaultTag: u ? "label" : "div",
                name: i.name || "Label",
              })
            );
          }),
          {}
        );
      var tB = r(31094),
        tk =
          (((i = tk || {})[(i.Open = 0)] = "Open"),
          (i[(i.Closed = 1)] = "Closed"),
          i),
        tL =
          (((o = tL || {})[(o.Pointer = 0)] = "Pointer"),
          (o[(o.Other = 1)] = "Other"),
          o),
        tO =
          (((s = tO || {})[(s.OpenMenu = 0)] = "OpenMenu"),
          (s[(s.CloseMenu = 1)] = "CloseMenu"),
          (s[(s.GoToItem = 2)] = "GoToItem"),
          (s[(s.Search = 3)] = "Search"),
          (s[(s.ClearSearch = 4)] = "ClearSearch"),
          (s[(s.RegisterItem = 5)] = "RegisterItem"),
          (s[(s.UnregisterItem = 6)] = "UnregisterItem"),
          (s[(s.SetButtonElement = 7)] = "SetButtonElement"),
          (s[(s.SetItemsElement = 8)] = "SetItemsElement"),
          s);
      function tC(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (t) => t,
          r = null !== t.activeItemIndex ? t.items[t.activeItemIndex] : null,
          n = (0, tw.z2)(
            e(t.items.slice()),
            (t) => t.dataRef.current.domRef.current
          ),
          i = r ? n.indexOf(r) : null;
        return -1 === i && (i = null), { items: n, activeItemIndex: i };
      }
      let tI = {
          1: (t) =>
            1 === t.menuState
              ? t
              : { ...t, activeItemIndex: null, menuState: 1 },
          0: (t) =>
            0 === t.menuState ? t : { ...t, __demoMode: !1, menuState: 0 },
          2: (t, e) => {
            var r, n, i, o, s;
            if (1 === t.menuState) return t;
            let a = {
              ...t,
              searchQuery: "",
              activationTrigger: null != (r = e.trigger) ? r : 1,
              __demoMode: !1,
            };
            if (e.focus === tg.Nothing) return { ...a, activeItemIndex: null };
            if (e.focus === tg.Specific)
              return {
                ...a,
                activeItemIndex: t.items.findIndex((t) => t.id === e.id),
              };
            if (e.focus === tg.Previous) {
              let r = t.activeItemIndex;
              if (null !== r) {
                let o = t.items[r].dataRef.current.domRef,
                  s = ty(e, {
                    resolveItems: () => t.items,
                    resolveActiveIndex: () => t.activeItemIndex,
                    resolveId: (t) => t.id,
                    resolveDisabled: (t) => t.dataRef.current.disabled,
                  });
                if (null !== s) {
                  let e = t.items[s].dataRef.current.domRef;
                  if (
                    (null == (n = o.current)
                      ? void 0
                      : n.previousElementSibling) === e.current ||
                    (null == (i = e.current)
                      ? void 0
                      : i.previousElementSibling) === null
                  )
                    return { ...a, activeItemIndex: s };
                }
              }
            } else if (e.focus === tg.Next) {
              let r = t.activeItemIndex;
              if (null !== r) {
                let n = t.items[r].dataRef.current.domRef,
                  i = ty(e, {
                    resolveItems: () => t.items,
                    resolveActiveIndex: () => t.activeItemIndex,
                    resolveId: (t) => t.id,
                    resolveDisabled: (t) => t.dataRef.current.disabled,
                  });
                if (null !== i) {
                  let e = t.items[i].dataRef.current.domRef;
                  if (
                    (null == (o = n.current)
                      ? void 0
                      : o.nextElementSibling) === e.current ||
                    (null == (s = e.current)
                      ? void 0
                      : s.nextElementSibling) === null
                  )
                    return { ...a, activeItemIndex: i };
                }
              }
            }
            let l = tC(t),
              u = ty(e, {
                resolveItems: () => l.items,
                resolveActiveIndex: () => l.activeItemIndex,
                resolveId: (t) => t.id,
                resolveDisabled: (t) => t.dataRef.current.disabled,
              });
            return { ...a, ...l, activeItemIndex: u };
          },
          3: (t, e) => {
            let r = "" !== t.searchQuery ? 0 : 1,
              n = t.searchQuery + e.value.toLowerCase(),
              i = (
                null !== t.activeItemIndex
                  ? t.items
                      .slice(t.activeItemIndex + r)
                      .concat(t.items.slice(0, t.activeItemIndex + r))
                  : t.items
              ).find((t) => {
                var e;
                return (
                  (null == (e = t.dataRef.current.textValue)
                    ? void 0
                    : e.startsWith(n)) && !t.dataRef.current.disabled
                );
              }),
              o = i ? t.items.indexOf(i) : -1;
            return -1 === o || o === t.activeItemIndex
              ? { ...t, searchQuery: n }
              : {
                  ...t,
                  searchQuery: n,
                  activeItemIndex: o,
                  activationTrigger: 1,
                };
          },
          4: (t) =>
            "" === t.searchQuery
              ? t
              : { ...t, searchQuery: "", searchActiveItemIndex: null },
          5: (t, e) => {
            let r = tC(t, (t) => [...t, { id: e.id, dataRef: e.dataRef }]);
            return { ...t, ...r };
          },
          6: (t, e) => {
            let r = tC(t, (t) => {
              let r = t.findIndex((t) => t.id === e.id);
              return -1 !== r && t.splice(r, 1), t;
            });
            return { ...t, ...r, activationTrigger: 1 };
          },
          7: (t, e) =>
            t.buttonElement === e.element
              ? t
              : { ...t, buttonElement: e.element },
          8: (t, e) =>
            t.itemsElement === e.element
              ? t
              : { ...t, itemsElement: e.element },
        },
        tF = (0, a.createContext)(null);
      function tD(t) {
        let e = (0, a.useContext)(tF);
        if (null === e) {
          let e = Error(
            "<".concat(t, " /> is missing a parent <Menu /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(e, tD), e);
        }
        return e;
      }
      function tU(t, e) {
        return (0, tb.E)(e.type, tI, t, e);
      }
      tF.displayName = "MenuContext";
      let tN = a.Fragment,
        t_ = tE.VN.RenderStrategy | tE.VN.Static,
        tj = a.Fragment,
        tV = (0, tE.yV)(function (t, e) {
          let { __demoMode: r = !1, ...n } = t,
            i = (0, a.useReducer)(tU, {
              __demoMode: r,
              menuState: r ? 0 : 1,
              buttonElement: null,
              itemsElement: null,
              items: [],
              searchQuery: "",
              activeItemIndex: null,
              activationTrigger: 1,
            }),
            [{ menuState: o, itemsElement: s, buttonElement: l }, u] = i,
            c = (0, tr.T)(e);
          (0, Q.O)(0 === o, [l, s], (t, e) => {
            u({ type: 1 }),
              (0, tw.sP)(e, tw.tJ.Loose) ||
                (t.preventDefault(), null == l || l.focus());
          });
          let h = (0, K.z)(() => {
              u({ type: 1 });
            }),
            f = (0, a.useMemo)(() => ({ open: 0 === o, close: h }), [o, h]),
            d = (0, tE.L6)();
          return a.createElement(
            tf,
            null,
            a.createElement(
              tF.Provider,
              { value: i },
              a.createElement(
                tm.up,
                { value: (0, tb.E)(o, { 0: tm.ZM.Open, 1: tm.ZM.Closed }) },
                d({
                  ourProps: { ref: c },
                  theirProps: n,
                  slot: f,
                  defaultTag: tN,
                  name: "Menu",
                })
              )
            )
          );
        }),
        tz = (0, tE.yV)(function (t, e) {
          var r, n;
          let i = (0, a.useId)(),
            {
              id: o = "headlessui-menu-button-".concat(i),
              disabled: s = !1,
              autoFocus: l = !1,
              ...h
            } = t,
            [f, d] = tD("Menu.Button"),
            p = (0, a.useContext)(tc).getReferenceProps,
            m = (0, tr.T)(
              e,
              (0, a.useContext)(tc).setReference,
              (0, K.z)((t) => d({ type: 7, element: t }))
            ),
            g = (0, K.z)((t) => {
              switch (t.key) {
                case tM.R.Space:
                case tM.R.Enter:
                case tM.R.ArrowDown:
                  t.preventDefault(),
                    t.stopPropagation(),
                    (0, W.flushSync)(() => d({ type: 0 })),
                    d({ type: 2, focus: tg.First });
                  break;
                case tM.R.ArrowUp:
                  t.preventDefault(),
                    t.stopPropagation(),
                    (0, W.flushSync)(() => d({ type: 0 })),
                    d({ type: 2, focus: tg.Last });
              }
            }),
            y = (0, K.z)((t) => {
              t.key === tM.R.Space && t.preventDefault();
            }),
            v = (0, K.z)((t) => {
              var e;
              if (
                (function (t) {
                  let e = t.parentElement,
                    r = null;
                  for (; e && !(e instanceof HTMLFieldSetElement); )
                    e instanceof HTMLLegendElement && (r = e),
                      (e = e.parentElement);
                  let n =
                    (null == e ? void 0 : e.getAttribute("disabled")) === "";
                  return (
                    !(
                      n &&
                      (function (t) {
                        if (!t) return !1;
                        let e = t.previousElementSibling;
                        for (; null !== e; ) {
                          if (e instanceof HTMLLegendElement) return !1;
                          e = e.previousElementSibling;
                        }
                        return !0;
                      })(r)
                    ) && n
                  );
                })(t.currentTarget)
              )
                return t.preventDefault();
              s ||
                (0 === f.menuState
                  ? ((0, W.flushSync)(() => d({ type: 1 })),
                    null == (e = f.buttonElement) ||
                      e.focus({ preventScroll: !0 }))
                  : (t.preventDefault(), d({ type: 0 })));
            }),
            { isFocusVisible: w, focusProps: x } = (function (t = {}) {
              var e, r, n;
              let { autoFocus: i = !1, isTextInput: o, within: s } = t,
                l = (0, a.useRef)({ isFocused: !1, isFocusVisible: i || D() }),
                [h, f] = (0, a.useState)(!1),
                [d, p] = (0, a.useState)(
                  () => l.current.isFocused && l.current.isFocusVisible
                ),
                m = (0, a.useCallback)(
                  () => p(l.current.isFocused && l.current.isFocusVisible),
                  []
                ),
                g = (0, a.useCallback)(
                  (t) => {
                    (l.current.isFocused = t), f(t), m();
                  },
                  [m]
                );
              (e = (t) => {
                (l.current.isFocusVisible = t), m();
              }),
                (r = []),
                (n = { isTextInput: o }),
                I(),
                (0, a.useEffect)(() => {
                  let t = (t, r) => {
                    (function (t, e, r) {
                      let n = b(null == r ? void 0 : r.target),
                        i =
                          "undefined" != typeof window
                            ? E(null == r ? void 0 : r.target).HTMLInputElement
                            : HTMLInputElement,
                        o =
                          "undefined" != typeof window
                            ? E(null == r ? void 0 : r.target)
                                .HTMLTextAreaElement
                            : HTMLTextAreaElement,
                        s =
                          "undefined" != typeof window
                            ? E(null == r ? void 0 : r.target).HTMLElement
                            : HTMLElement,
                        a =
                          "undefined" != typeof window
                            ? E(null == r ? void 0 : r.target).KeyboardEvent
                            : KeyboardEvent;
                      return !(
                        (t =
                          t ||
                          (n.activeElement instanceof i &&
                            !U.has(n.activeElement.type)) ||
                          n.activeElement instanceof o ||
                          (n.activeElement instanceof s &&
                            n.activeElement.isContentEditable)) &&
                        "keyboard" === e &&
                        r instanceof a &&
                        !R[r.key]
                      );
                    })(!!(null == n ? void 0 : n.isTextInput), t, r) && e(D());
                  };
                  return (
                    M.add(t),
                    () => {
                      M.delete(t);
                    }
                  );
                }, r);
              let { focusProps: y } = (function (t) {
                  let {
                      isDisabled: e,
                      onFocus: r,
                      onBlur: n,
                      onFocusChange: i,
                    } = t,
                    o = (0, a.useCallback)(
                      (t) => {
                        if (t.target === t.currentTarget)
                          return n && n(t), i && i(!1), !0;
                      },
                      [n, i]
                    ),
                    s = c(o),
                    l = (0, a.useCallback)(
                      (t) => {
                        let e = b(t.target),
                          n = e ? _(e) : _();
                        t.target === t.currentTarget &&
                          n === t.nativeEvent.target &&
                          (r && r(t), i && i(!0), s(t));
                      },
                      [i, r, s]
                    );
                  return {
                    focusProps: {
                      onFocus: !e && (r || i || n) ? l : void 0,
                      onBlur: !e && (n || i) ? o : void 0,
                    },
                  };
                })({ isDisabled: s, onFocusChange: g }),
                { focusWithinProps: v } = (function (t) {
                  let {
                      isDisabled: e,
                      onBlurWithin: r,
                      onFocusWithin: n,
                      onFocusWithinChange: i,
                    } = t,
                    o = (0, a.useRef)({ isFocusWithin: !1 }),
                    { addGlobalListener: s, removeAllGlobalListeners: l } = j(),
                    h = (0, a.useCallback)(
                      (t) => {
                        t.currentTarget.contains(t.target) &&
                          o.current.isFocusWithin &&
                          !t.currentTarget.contains(t.relatedTarget) &&
                          ((o.current.isFocusWithin = !1),
                          l(),
                          r && r(t),
                          i && i(!1));
                      },
                      [r, i, o, l]
                    ),
                    f = c(h),
                    d = (0, a.useCallback)(
                      (t) => {
                        if (!t.currentTarget.contains(t.target)) return;
                        let e = b(t.target),
                          r = _(e);
                        if (
                          !o.current.isFocusWithin &&
                          r === t.nativeEvent.target
                        ) {
                          n && n(t),
                            i && i(!0),
                            (o.current.isFocusWithin = !0),
                            f(t);
                          let r = t.currentTarget;
                          s(
                            e,
                            "focus",
                            (t) => {
                              if (o.current.isFocusWithin && !N(r, t.target)) {
                                let n = new u(
                                  "blur",
                                  new e.defaultView.FocusEvent("blur", {
                                    relatedTarget: t.target,
                                  })
                                );
                                (n.target = r), (n.currentTarget = r), h(n);
                              }
                            },
                            { capture: !0 }
                          );
                        }
                      },
                      [n, i, f, s, h]
                    );
                  return e
                    ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
                    : { focusWithinProps: { onFocus: d, onBlur: h } };
                })({ isDisabled: !s, onFocusWithinChange: g });
              return { isFocused: h, isFocusVisible: d, focusProps: s ? v : y };
            })({ autoFocus: l }),
            { isHovered: S, hoverProps: A } = (function (t) {
              let {
                  onHoverStart: e,
                  onHoverChange: r,
                  onHoverEnd: n,
                  isDisabled: i,
                } = t,
                [o, s] = (0, a.useState)(!1),
                l = (0, a.useRef)({
                  isHovered: !1,
                  ignoreEmulatedMouseEvents: !1,
                  pointerType: "",
                  target: null,
                }).current;
              (0, a.useEffect)($, []);
              let { addGlobalListener: u, removeAllGlobalListeners: c } = j(),
                { hoverProps: h, triggerHoverEnd: f } = (0, a.useMemo)(() => {
                  let t = (t, n) => {
                      if (
                        ((l.pointerType = n),
                        i ||
                          "touch" === n ||
                          l.isHovered ||
                          !t.currentTarget.contains(t.target))
                      )
                        return;
                      l.isHovered = !0;
                      let a = t.currentTarget;
                      (l.target = a),
                        u(
                          b(t.target),
                          "pointerover",
                          (t) => {
                            l.isHovered &&
                              l.target &&
                              !N(l.target, t.target) &&
                              o(t, t.pointerType);
                          },
                          { capture: !0 }
                        ),
                        e &&
                          e({ type: "hoverstart", target: a, pointerType: n }),
                        r && r(!0),
                        s(!0);
                    },
                    o = (t, e) => {
                      let i = l.target;
                      (l.pointerType = ""),
                        (l.target = null),
                        "touch" !== e &&
                          l.isHovered &&
                          i &&
                          ((l.isHovered = !1),
                          c(),
                          n &&
                            n({ type: "hoverend", target: i, pointerType: e }),
                          r && r(!1),
                          s(!1));
                    },
                    a = {};
                  return (
                    "undefined" != typeof PointerEvent
                      ? ((a.onPointerEnter = (e) => {
                          (V && "mouse" === e.pointerType) ||
                            t(e, e.pointerType);
                        }),
                        (a.onPointerLeave = (t) => {
                          !i &&
                            t.currentTarget.contains(t.target) &&
                            o(t, t.pointerType);
                        }))
                      : ((a.onTouchStart = () => {
                          l.ignoreEmulatedMouseEvents = !0;
                        }),
                        (a.onMouseEnter = (e) => {
                          l.ignoreEmulatedMouseEvents || V || t(e, "mouse"),
                            (l.ignoreEmulatedMouseEvents = !1);
                        }),
                        (a.onMouseLeave = (t) => {
                          !i &&
                            t.currentTarget.contains(t.target) &&
                            o(t, "mouse");
                        })),
                    { hoverProps: a, triggerHoverEnd: o }
                  );
                }, [e, r, n, i, l, u, c]);
              return (
                (0, a.useEffect)(() => {
                  i && f({ currentTarget: l.target }, l.pointerType);
                }, [i]),
                { hoverProps: h, isHovered: o }
              );
            })({ isDisabled: s }),
            { pressed: T, pressProps: P } = (function () {
              let { disabled: t = !1 } =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e = (0, a.useRef)(null),
                [r, n] = (0, a.useState)(!1),
                i = (0, Z.G)(),
                o = (0, K.z)(() => {
                  (e.current = null), n(!1), i.dispose();
                }),
                s = (0, K.z)((t) => {
                  if ((i.dispose(), null === e.current)) {
                    (e.current = t.currentTarget), n(!0);
                    {
                      let r = (0, Y.r)(t.currentTarget);
                      i.addEventListener(r, "pointerup", o, !1),
                        i.addEventListener(
                          r,
                          "pointermove",
                          (t) => {
                            if (e.current) {
                              var r, i;
                              let o, s;
                              n(
                                ((o = t.width / 2),
                                (s = t.height / 2),
                                (r = {
                                  top: t.clientY - s,
                                  right: t.clientX + o,
                                  bottom: t.clientY + s,
                                  left: t.clientX - o,
                                }),
                                (i = e.current.getBoundingClientRect()),
                                !(
                                  !r ||
                                  !i ||
                                  r.right < i.left ||
                                  r.left > i.right ||
                                  r.bottom < i.top ||
                                  r.top > i.bottom
                                ))
                              );
                            }
                          },
                          !1
                        ),
                        i.addEventListener(r, "pointercancel", o, !1);
                    }
                  }
                });
              return {
                pressed: r,
                pressProps: t
                  ? {}
                  : { onPointerDown: s, onPointerUp: o, onClick: o },
              };
            })({ disabled: s }),
            B = (0, a.useMemo)(
              () => ({
                open: 0 === f.menuState,
                active: T || 0 === f.menuState,
                disabled: s,
                hover: S,
                focus: w,
                autofocus: l,
              }),
              [f, S, w, T, s, l]
            ),
            k = (0, tE.dG)(
              p(),
              {
                ref: m,
                id: o,
                type:
                  ((n = f.buttonElement),
                  (0, a.useMemo)(() => {
                    var e;
                    if (t.type) return t.type;
                    let r = null != (e = t.as) ? e : "button";
                    if (
                      ("string" == typeof r && "button" === r.toLowerCase()) ||
                      ((null == n ? void 0 : n.tagName) === "BUTTON" &&
                        !n.hasAttribute("type"))
                    )
                      return "button";
                  }, [t.type, t.as, n])),
                "aria-haspopup": "menu",
                "aria-controls": null == (r = f.itemsElement) ? void 0 : r.id,
                "aria-expanded": 0 === f.menuState,
                disabled: s || void 0,
                autoFocus: l,
                onKeyDown: g,
                onKeyUp: y,
                onClick: v,
              },
              x,
              A,
              P
            );
          return (0, tE.L6)()({
            ourProps: k,
            theirProps: h,
            slot: B,
            defaultTag: "button",
            name: "Menu.Button",
          });
        }),
        tH = (0, tE.yV)(function (t, e) {
          var r, n;
          let i = (0, a.useId)(),
            {
              id: o = "headlessui-menu-items-".concat(i),
              anchor: s,
              portal: l = !1,
              modal: u = !0,
              transition: c = !1,
              ...h
            } = t,
            f = (0, a.useMemo)(
              () => (s ? ("string" == typeof s ? { to: s } : s) : null),
              [s]
            ),
            [d, p] = tD("Menu.Items"),
            [m, g] = (function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              !1 === t && (t = null), "string" == typeof t && (t = { to: t });
              let e = (0, a.useContext)(th),
                r = (0, a.useMemo)(
                  () => t,
                  [
                    JSON.stringify(t, (t, e) => {
                      var r;
                      return null != (r = null == e ? void 0 : e.outerHTML)
                        ? r
                        : e;
                    }),
                  ]
                );
              (0, G.e)(() => {
                null == e || e(null != r ? r : null);
              }, [e, r]);
              let n = (0, a.useContext)(tc);
              return (0, a.useMemo)(
                () => [n.setFloating, t ? n.styles : {}],
                [n.setFloating, t, n.styles]
              );
            })(f),
            y = (function () {
              let { getFloatingProps: t, slot: e } = (0, a.useContext)(tc);
              return (0, a.useCallback)(
                function () {
                  for (
                    var r = arguments.length, n = Array(r), i = 0;
                    i < r;
                    i++
                  )
                    n[i] = arguments[i];
                  return Object.assign({}, t(...n), {
                    "data-anchor": e.anchor,
                  });
                },
                [t, e]
              );
            })(),
            [v, w] = (0, a.useState)(null),
            b = (0, tr.T)(
              e,
              f ? m : null,
              (0, K.z)((t) => p({ type: 8, element: t })),
              w
            ),
            E = (0, tt.i)(d.itemsElement);
          f && (l = !0);
          let x = (0, tm.oJ)(),
            [M, S] = (0, ts.Y)(
              c,
              v,
              null !== x ? (x & tm.ZM.Open) === tm.ZM.Open : 0 === d.menuState
            );
          (0, J.m)(M, d.buttonElement, () => {
            p({ type: 1 });
          });
          let A = !d.__demoMode && u && 0 === d.menuState;
          (0, te.P)(A, E);
          let T = !d.__demoMode && u && 0 === d.menuState;
          (0,
          X.s)(T, { allowed: (0, a.useCallback)(() => [d.buttonElement, d.itemsElement], [d.buttonElement, d.itemsElement]) });
          let R =
            !(function (t, e) {
              let r = (0, a.useRef)({ left: 0, top: 0 });
              if (
                ((0, G.e)(() => {
                  if (!e) return;
                  let t = e.getBoundingClientRect();
                  t && (r.current = t);
                }, [t, e]),
                null == e || !t || e === document.activeElement)
              )
                return !1;
              let n = e.getBoundingClientRect();
              return n.top !== r.current.top || n.left !== r.current.left;
            })(0 !== d.menuState, d.buttonElement) && M;
          (0, a.useEffect)(() => {
            let t = d.itemsElement;
            t &&
              0 === d.menuState &&
              t !== (null == E ? void 0 : E.activeElement) &&
              t.focus({ preventScroll: !0 });
          }, [d.menuState, d.itemsElement, E]),
            (function (t, e) {
              let { container: r, accept: n, walk: i } = e,
                o = (0, a.useRef)(n),
                s = (0, a.useRef)(i);
              (0, a.useEffect)(() => {
                (o.current = n), (s.current = i);
              }, [n, i]),
                (0, G.e)(() => {
                  if (!r || !t) return;
                  let e = (0, Y.r)(r);
                  if (!e) return;
                  let n = o.current,
                    i = s.current,
                    a = Object.assign((t) => n(t), { acceptNode: n }),
                    l = e.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, a, !1);
                  for (; l.nextNode(); ) i(l.currentNode);
                }, [r, t, o, s]);
            })(0 === d.menuState, {
              container: d.itemsElement,
              accept: (t) =>
                "menuitem" === t.getAttribute("role")
                  ? NodeFilter.FILTER_REJECT
                  : t.hasAttribute("role")
                  ? NodeFilter.FILTER_SKIP
                  : NodeFilter.FILTER_ACCEPT,
              walk(t) {
                t.setAttribute("role", "none");
              },
            });
          let P = (0, Z.G)(),
            B = (0, K.z)((t) => {
              var e, r, n;
              switch ((P.dispose(), t.key)) {
                case tM.R.Space:
                  if ("" !== d.searchQuery)
                    return (
                      t.preventDefault(),
                      t.stopPropagation(),
                      p({ type: 3, value: t.key })
                    );
                case tM.R.Enter:
                  if (
                    (t.preventDefault(),
                    t.stopPropagation(),
                    p({ type: 1 }),
                    null !== d.activeItemIndex)
                  ) {
                    let { dataRef: t } = d.items[d.activeItemIndex];
                    null ==
                      (r =
                        null == (e = t.current) ? void 0 : e.domRef.current) ||
                      r.click();
                  }
                  (0, tw.wI)(d.buttonElement);
                  break;
                case tM.R.ArrowDown:
                  return (
                    t.preventDefault(),
                    t.stopPropagation(),
                    p({ type: 2, focus: tg.Next })
                  );
                case tM.R.ArrowUp:
                  return (
                    t.preventDefault(),
                    t.stopPropagation(),
                    p({ type: 2, focus: tg.Previous })
                  );
                case tM.R.Home:
                case tM.R.PageUp:
                  return (
                    t.preventDefault(),
                    t.stopPropagation(),
                    p({ type: 2, focus: tg.First })
                  );
                case tM.R.End:
                case tM.R.PageDown:
                  return (
                    t.preventDefault(),
                    t.stopPropagation(),
                    p({ type: 2, focus: tg.Last })
                  );
                case tM.R.Escape:
                  t.preventDefault(),
                    t.stopPropagation(),
                    (0, W.flushSync)(() => p({ type: 1 })),
                    null == (n = d.buttonElement) ||
                      n.focus({ preventScroll: !0 });
                  break;
                case tM.R.Tab:
                  t.preventDefault(),
                    t.stopPropagation(),
                    (0, W.flushSync)(() => p({ type: 1 })),
                    (0, tw.EO)(
                      d.buttonElement,
                      t.shiftKey ? tw.TO.Previous : tw.TO.Next
                    );
                  break;
                default:
                  1 === t.key.length &&
                    (p({ type: 3, value: t.key }),
                    P.setTimeout(() => p({ type: 4 }), 350));
              }
            }),
            k = (0, K.z)((t) => {
              t.key === tM.R.Space && t.preventDefault();
            }),
            L = (0, a.useMemo)(
              () => ({ open: 0 === d.menuState }),
              [d.menuState]
            ),
            O = (0, tE.dG)(f ? y() : {}, {
              "aria-activedescendant":
                null === d.activeItemIndex ||
                null == (r = d.items[d.activeItemIndex])
                  ? void 0
                  : r.id,
              "aria-labelledby": null == (n = d.buttonElement) ? void 0 : n.id,
              id: o,
              onKeyDown: B,
              onKeyUp: k,
              role: "menu",
              tabIndex: 0 === d.menuState ? 0 : void 0,
              ref: b,
              style: {
                ...h.style,
                ...g,
                "--button-width": (function (t) {
                  let e =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    [r, n] = (0, a.useReducer)(() => ({}), {}),
                    i = (0, a.useMemo)(
                      () =>
                        (function (t) {
                          if (null === t) return { width: 0, height: 0 };
                          let { width: e, height: r } =
                            t.getBoundingClientRect();
                          return { width: e, height: r };
                        })(t),
                      [t, r]
                    );
                  return (
                    (0, G.e)(() => {
                      if (!t) return;
                      let e = new ResizeObserver(n);
                      return (
                        e.observe(t),
                        () => {
                          e.disconnect();
                        }
                      );
                    }, [t]),
                    e
                      ? {
                          width: "".concat(i.width, "px"),
                          height: "".concat(i.height, "px"),
                        }
                      : i
                  );
                })(d.buttonElement, !0).width,
              },
              ...(0, ts.X)(S),
            }),
            C = (0, tE.L6)();
          return a.createElement(
            tB.h_,
            { enabled: !!l && (t.static || M) },
            C({
              ourProps: O,
              theirProps: h,
              slot: L,
              defaultTag: "div",
              features: t_,
              visible: R,
              name: "Menu.Items",
            })
          );
        }),
        tq = (0, tE.yV)(function (t, e) {
          let r,
            n,
            i,
            o = (0, a.useId)(),
            {
              id: s = "headlessui-menu-item-".concat(o),
              disabled: l = !1,
              ...u
            } = t,
            [c, h] = tD("Menu.Item"),
            f =
              null !== c.activeItemIndex && c.items[c.activeItemIndex].id === s,
            d = (0, a.useRef)(null),
            p = (0, tr.T)(e, d);
          (0, G.e)(() => {
            if (
              !c.__demoMode &&
              0 === c.menuState &&
              f &&
              0 !== c.activationTrigger
            )
              return (0, tv.k)().requestAnimationFrame(() => {
                var t, e;
                null ==
                  (e = null == (t = d.current) ? void 0 : t.scrollIntoView) ||
                  e.call(t, { block: "nearest" });
              });
          }, [c.__demoMode, d, f, c.menuState, c.activationTrigger, c.activeItemIndex]);
          let m =
              ((r = (0, a.useRef)("")),
              (n = (0, a.useRef)("")),
              (0, K.z)(() => {
                let t = d.current;
                if (!t) return "";
                let e = t.innerText;
                if (r.current === e) return n.current;
                let i = (function (t) {
                  let e = t.getAttribute("aria-label");
                  if ("string" == typeof e) return e.trim();
                  let r = t.getAttribute("aria-labelledby");
                  if (r) {
                    let t = r
                      .split(" ")
                      .map((t) => {
                        let e = document.getElementById(t);
                        if (e) {
                          let t = e.getAttribute("aria-label");
                          return "string" == typeof t ? t.trim() : ti(e).trim();
                        }
                        return null;
                      })
                      .filter(Boolean);
                    if (t.length > 0) return t.join(", ");
                  }
                  return ti(t).trim();
                })(t)
                  .trim()
                  .toLowerCase();
                return (r.current = e), (n.current = i), i;
              })),
            g = (0, a.useRef)({
              disabled: l,
              domRef: d,
              get textValue() {
                return m();
              },
            });
          (0, G.e)(() => {
            g.current.disabled = l;
          }, [g, l]),
            (0, G.e)(
              () => (
                h({ type: 5, id: s, dataRef: g }), () => h({ type: 6, id: s })
              ),
              [g, s]
            );
          let y = (0, K.z)(() => {
              h({ type: 1 });
            }),
            v = (0, K.z)((t) => {
              if (l) return t.preventDefault();
              h({ type: 1 }), (0, tw.wI)(c.buttonElement);
            }),
            w = (0, K.z)(() => {
              if (l) return h({ type: 2, focus: tg.Nothing });
              h({ type: 2, focus: tg.Specific, id: s });
            }),
            b =
              ((i = (0, a.useRef)([-1, -1])),
              {
                wasMoved(t) {
                  let e = to(t);
                  return (
                    (i.current[0] !== e[0] || i.current[1] !== e[1]) &&
                    ((i.current = e), !0)
                  );
                },
                update(t) {
                  i.current = to(t);
                },
              }),
            E = (0, K.z)((t) => {
              b.update(t),
                !l &&
                  (f || h({ type: 2, focus: tg.Specific, id: s, trigger: 0 }));
            }),
            x = (0, K.z)((t) => {
              b.wasMoved(t) &&
                (l ||
                  f ||
                  h({ type: 2, focus: tg.Specific, id: s, trigger: 0 }));
            }),
            M = (0, K.z)((t) => {
              b.wasMoved(t) && (l || (f && h({ type: 2, focus: tg.Nothing })));
            }),
            [S, A] = tP(),
            [T, R] = (0, tx.fw)(),
            P = (0, a.useMemo)(
              () => ({ active: f, focus: f, disabled: l, close: y }),
              [f, l, y]
            ),
            B = (0, tE.L6)();
          return a.createElement(
            A,
            null,
            a.createElement(
              R,
              null,
              B({
                ourProps: {
                  id: s,
                  ref: p,
                  role: "menuitem",
                  tabIndex: !0 === l ? void 0 : -1,
                  "aria-disabled": !0 === l || void 0,
                  "aria-labelledby": S,
                  "aria-describedby": T,
                  disabled: void 0,
                  onClick: v,
                  onFocus: w,
                  onPointerEnter: E,
                  onMouseEnter: E,
                  onPointerMove: x,
                  onMouseMove: x,
                  onPointerLeave: M,
                  onMouseLeave: M,
                },
                theirProps: u,
                slot: P,
                defaultTag: tj,
                name: "Menu.Item",
              })
            )
          );
        }),
        t$ = Object.assign(tV, {
          Button: tz,
          Items: tH,
          Item: tq,
          Section: (0, tE.yV)(function (t, e) {
            let [r, n] = tP(),
              i = (0, tE.L6)();
            return a.createElement(
              n,
              null,
              i({
                ourProps: { ref: e, "aria-labelledby": r, role: "group" },
                theirProps: t,
                slot: {},
                defaultTag: "div",
                name: "Menu.Section",
              })
            );
          }),
          Heading: (0, tE.yV)(function (t, e) {
            let r = (0, a.useId)(),
              { id: n = "headlessui-menu-heading-".concat(r), ...i } = t,
              o = tR();
            (0, G.e)(() => o.register(n), [n, o.register]);
            let s = { id: n, ref: e, role: "presentation", ...o.props };
            return (0, tE.L6)()({
              ourProps: s,
              theirProps: i,
              slot: {},
              defaultTag: "header",
              name: "Menu.Heading",
            });
          }),
          Separator: (0, tE.yV)(function (t, e) {
            return (0, tE.L6)()({
              ourProps: { ref: e, role: "separator" },
              theirProps: t,
              slot: {},
              defaultTag: "div",
              name: "Menu.Separator",
            });
          }),
        });
    },
    31094: function (t, e, r) {
      "use strict";
      r.d(e, {
        h_: function () {
          return x;
        },
        kF: function () {
          return w;
        },
        wA: function () {
          return E;
        },
      });
      var n = r(2265),
        i = r(54887),
        o = r(13323),
        s = r(64518),
        a = r(99417),
        l = r(40048),
        u = r(72238),
        c = r(93689),
        h = r(27988),
        f = r(61424),
        d = r(27847);
      let p = n.Fragment,
        m = (0, d.yV)(function (t, e) {
          let r = (0, n.useRef)(null),
            o = (0, c.T)(
              (0, c.h)((t) => {
                r.current = t;
              }),
              e
            ),
            m = (0, l.i)(r),
            g = (function (t) {
              let e = (0, h.n)(),
                r = (0, n.useContext)(y),
                i = (0, l.i)(t),
                [o, s] = (0, n.useState)(() => {
                  var t;
                  if (!e && null !== r)
                    return null != (t = r.current) ? t : null;
                  if (f.O.isServer) return null;
                  let n =
                    null == i
                      ? void 0
                      : i.getElementById("headlessui-portal-root");
                  if (n) return n;
                  if (null === i) return null;
                  let o = i.createElement("div");
                  return (
                    o.setAttribute("id", "headlessui-portal-root"),
                    i.body.appendChild(o)
                  );
                });
              return (
                (0, n.useEffect)(() => {
                  null !== o &&
                    ((null != i && i.body.contains(o)) ||
                      null == i ||
                      i.body.appendChild(o));
                }, [o, i]),
                (0, n.useEffect)(() => {
                  e || (null !== r && s(r.current));
                }, [r, s, e]),
                o
              );
            })(r),
            [w] = (0, n.useState)(() => {
              var t;
              return f.O.isServer
                ? null
                : null != (t = null == m ? void 0 : m.createElement("div"))
                ? t
                : null;
            }),
            b = (0, n.useContext)(v),
            E = (0, u.H)();
          (0, s.e)(() => {
            !g ||
              !w ||
              g.contains(w) ||
              (w.setAttribute("data-headlessui-portal", ""), g.appendChild(w));
          }, [g, w]),
            (0, s.e)(() => {
              if (w && b) return b.register(w);
            }, [b, w]),
            (0, a.L)(() => {
              var t;
              g &&
                w &&
                (w instanceof Node && g.contains(w) && g.removeChild(w),
                g.childNodes.length <= 0 &&
                  (null == (t = g.parentElement) || t.removeChild(g)));
            });
          let x = (0, d.L6)();
          return E && g && w
            ? (0, i.createPortal)(
                x({
                  ourProps: { ref: o },
                  theirProps: t,
                  slot: {},
                  defaultTag: p,
                  name: "Portal",
                }),
                w
              )
            : null;
        }),
        g = n.Fragment,
        y = (0, n.createContext)(null),
        v = (0, n.createContext)(null);
      function w() {
        let t = (0, n.useContext)(v),
          e = (0, n.useRef)([]),
          r = (0, o.z)(
            (r) => (e.current.push(r), t && t.register(r), () => i(r))
          ),
          i = (0, o.z)((r) => {
            let n = e.current.indexOf(r);
            -1 !== n && e.current.splice(n, 1), t && t.unregister(r);
          }),
          s = (0, n.useMemo)(
            () => ({ register: r, unregister: i, portals: e }),
            [r, i, e]
          );
        return [
          e,
          (0, n.useMemo)(
            () =>
              function (t) {
                let { children: e } = t;
                return n.createElement(v.Provider, { value: s }, e);
              },
            [s]
          ),
        ];
      }
      let b = (0, d.yV)(function (t, e) {
          let r = (0, c.T)(e),
            { enabled: i = !0, ...o } = t,
            s = (0, d.L6)();
          return i
            ? n.createElement(m, { ...o, ref: r })
            : s({
                ourProps: { ref: r },
                theirProps: o,
                slot: {},
                defaultTag: p,
                name: "Portal",
              });
        }),
        E = (0, d.yV)(function (t, e) {
          let { target: r, ...i } = t,
            o = { ref: (0, c.T)(e) },
            s = (0, d.L6)();
          return n.createElement(
            y.Provider,
            { value: r },
            s({
              ourProps: o,
              theirProps: i,
              defaultTag: g,
              name: "Popover.Group",
            })
          );
        }),
        x = Object.assign(b, { Group: E });
    },
    90945: function (t, e, r) {
      "use strict";
      r.d(e, {
        G: function () {
          return o;
        },
      });
      var n = r(2265),
        i = r(16015);
      function o() {
        let [t] = (0, n.useState)(i.k);
        return (0, n.useEffect)(() => () => t.dispose(), [t]), t;
      }
    },
    13323: function (t, e, r) {
      "use strict";
      r.d(e, {
        z: function () {
          return o;
        },
      });
      var n = r(2265),
        i = r(31948);
      let o = function (t) {
        let e = (0, i.E)(t);
        return n.useCallback(
          function () {
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return e.current(...r);
          },
          [e]
        );
      };
    },
    16821: function (t, e, r) {
      "use strict";
      r.d(e, {
        s: function () {
          return c;
        },
      });
      var n = r(16015),
        i = r(40293),
        o = r(39834),
        s = r(64518);
      let a = new Map(),
        l = new Map();
      function u(t) {
        var e;
        let r = null != (e = l.get(t)) ? e : 0;
        return (
          l.set(t, r + 1),
          0 !== r ||
            (a.set(t, {
              "aria-hidden": t.getAttribute("aria-hidden"),
              inert: t.inert,
            }),
            t.setAttribute("aria-hidden", "true"),
            (t.inert = !0)),
          () =>
            (function (t) {
              var e;
              let r = null != (e = l.get(t)) ? e : 1;
              if ((1 === r ? l.delete(t) : l.set(t, r - 1), 1 !== r)) return;
              let n = a.get(t);
              n &&
                (null === n["aria-hidden"]
                  ? t.removeAttribute("aria-hidden")
                  : t.setAttribute("aria-hidden", n["aria-hidden"]),
                (t.inert = n.inert),
                a.delete(t));
            })(t)
        );
      }
      function c(t) {
        let { allowed: e, disallowed: r } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = (0, o.g)(t, "inert-others");
        (0, s.e)(() => {
          var t, o;
          if (!a) return;
          let s = (0, n.k)();
          for (let e of null != (t = null == r ? void 0 : r()) ? t : [])
            e && s.add(u(e));
          let l = null != (o = null == e ? void 0 : e()) ? o : [];
          for (let t of l) {
            if (!t) continue;
            let e = (0, i.r)(t);
            if (!e) continue;
            let r = t.parentElement;
            for (; r && r !== e.body; ) {
              for (let t of r.children)
                l.some((e) => t.contains(e)) || s.add(u(t));
              r = r.parentElement;
            }
          }
          return s.dispose;
        }, [a, e, r]);
      }
    },
    39834: function (t, e, r) {
      "use strict";
      r.d(e, {
        g: function () {
          return u;
        },
      });
      var n = r(2265);
      class i extends Map {
        get(t) {
          let e = super.get(t);
          return void 0 === e && ((e = this.factory(t)), this.set(t, e)), e;
        }
        constructor(t) {
          super(), (this.factory = t);
        }
      }
      var o = r(33906),
        s = r(64518),
        a = r(27944);
      let l = new i(() =>
        (0, o.M)(() => [], {
          ADD(t) {
            return this.includes(t) ? this : [...this, t];
          },
          REMOVE(t) {
            let e = this.indexOf(t);
            if (-1 === e) return this;
            let r = this.slice();
            return r.splice(e, 1), r;
          },
        })
      );
      function u(t, e) {
        let r = l.get(e),
          i = (0, n.useId)(),
          o = (0, a.o)(r);
        if (
          ((0, s.e)(() => {
            if (t) return r.dispatch("ADD", i), () => r.dispatch("REMOVE", i);
          }, [r, t]),
          !t)
        )
          return !1;
        let u = o.indexOf(i),
          c = o.length;
        return -1 === u && ((u = c), (c += 1)), u === c - 1;
      }
    },
    64518: function (t, e, r) {
      "use strict";
      r.d(e, {
        e: function () {
          return o;
        },
      });
      var n = r(2265),
        i = r(61424);
      let o = (t, e) => {
        i.O.isServer ? (0, n.useEffect)(t, e) : (0, n.useLayoutEffect)(t, e);
      };
    },
    31948: function (t, e, r) {
      "use strict";
      r.d(e, {
        E: function () {
          return o;
        },
      });
      var n = r(2265),
        i = r(64518);
      function o(t) {
        let e = (0, n.useRef)(t);
        return (
          (0, i.e)(() => {
            e.current = t;
          }, [t]),
          e
        );
      }
    },
    33106: function (t, e, r) {
      "use strict";
      r.d(e, {
        m: function () {
          return s;
        },
      });
      var n = r(2265),
        i = r(16015),
        o = r(31948);
      function s(t, e, r) {
        let s = (0, o.E)((t) => {
          let e = t.getBoundingClientRect();
          0 === e.x && 0 === e.y && 0 === e.width && 0 === e.height && r();
        });
        (0, n.useEffect)(() => {
          if (!t) return;
          let r = null === e ? null : e instanceof HTMLElement ? e : e.current;
          if (!r) return;
          let n = (0, i.k)();
          if ("undefined" != typeof ResizeObserver) {
            let t = new ResizeObserver(() => s.current(r));
            t.observe(r), n.add(() => t.disconnect());
          }
          if ("undefined" != typeof IntersectionObserver) {
            let t = new IntersectionObserver(() => s.current(r));
            t.observe(r), n.add(() => t.disconnect());
          }
          return () => n.dispose();
        }, [e, s, t]);
      }
    },
    99417: function (t, e, r) {
      "use strict";
      r.d(e, {
        L: function () {
          return s;
        },
      });
      var n = r(2265),
        i = r(96822),
        o = r(13323);
      function s(t) {
        let e = (0, o.z)(t),
          r = (0, n.useRef)(!1);
        (0, n.useEffect)(
          () => (
            (r.current = !1),
            () => {
              (r.current = !0),
                (0, i.Y)(() => {
                  r.current && e();
                });
            }
          ),
          [e]
        );
      }
    },
    32539: function (t, e, r) {
      "use strict";
      r.d(e, {
        O: function () {
          return c;
        },
      });
      var n = r(2265),
        i = r(37105),
        o = r(52108),
        s = r(31948);
      function a(t, e, r, i) {
        let o = (0, s.E)(r);
        (0, n.useEffect)(() => {
          if (t)
            return (
              document.addEventListener(e, r, i),
              () => document.removeEventListener(e, r, i)
            );
          function r(t) {
            o.current(t);
          }
        }, [t, e, i]);
      }
      var l = r(39834),
        u = r(3141);
      function c(t, e, r) {
        let c = (0, l.g)(t, "outside-click"),
          h = (0, s.E)(r),
          f = (0, n.useCallback)(
            function (t, r) {
              if (t.defaultPrevented) return;
              let n = r(t);
              if (null !== n && n.getRootNode().contains(n) && n.isConnected) {
                for (let r of (function t(e) {
                  return "function" == typeof e
                    ? t(e())
                    : Array.isArray(e) || e instanceof Set
                    ? e
                    : [e];
                })(e))
                  if (
                    null !== r &&
                    (r.contains(n) ||
                      (t.composed && t.composedPath().includes(r)))
                  )
                    return;
                return (
                  (0, i.sP)(n, i.tJ.Loose) ||
                    -1 === n.tabIndex ||
                    t.preventDefault(),
                  h.current(t, n)
                );
              }
            },
            [h, e]
          ),
          d = (0, n.useRef)(null);
        a(
          c,
          "pointerdown",
          (t) => {
            var e, r;
            d.current =
              (null == (r = null == (e = t.composedPath) ? void 0 : e.call(t))
                ? void 0
                : r[0]) || t.target;
          },
          !0
        ),
          a(
            c,
            "mousedown",
            (t) => {
              var e, r;
              d.current =
                (null == (r = null == (e = t.composedPath) ? void 0 : e.call(t))
                  ? void 0
                  : r[0]) || t.target;
            },
            !0
          ),
          a(
            c,
            "click",
            (t) => {
              (0, o.tq)() ||
                (d.current && (f(t, () => d.current), (d.current = null)));
            },
            !0
          );
        let p = (0, n.useRef)({ x: 0, y: 0 });
        a(
          c,
          "touchstart",
          (t) => {
            (p.current.x = t.touches[0].clientX),
              (p.current.y = t.touches[0].clientY);
          },
          !0
        ),
          a(
            c,
            "touchend",
            (t) => {
              let e = {
                x: t.changedTouches[0].clientX,
                y: t.changedTouches[0].clientY,
              };
              if (
                !(
                  Math.abs(e.x - p.current.x) >= 30 ||
                  Math.abs(e.y - p.current.y) >= 30
                )
              )
                return f(t, () =>
                  t.target instanceof HTMLElement ? t.target : null
                );
            },
            !0
          ),
          (0, u.s)(
            c,
            "blur",
            (t) =>
              f(t, () =>
                window.document.activeElement instanceof HTMLIFrameElement
                  ? window.document.activeElement
                  : null
              ),
            !0
          );
      }
    },
    40048: function (t, e, r) {
      "use strict";
      r.d(e, {
        i: function () {
          return o;
        },
      });
      var n = r(2265),
        i = r(40293);
      function o() {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return (0, n.useMemo)(() => (0, i.r)(...e), [...e]);
      }
    },
    53466: function (t, e, r) {
      "use strict";
      r.d(e, {
        P: function () {
          return c;
        },
      });
      var n = r(27944),
        i = r(64518),
        o = r(16015),
        s = r(33906),
        a = r(52108);
      let l = (0, s.M)(() => new Map(), {
        PUSH(t, e) {
          var r;
          let n =
            null != (r = this.get(t))
              ? r
              : { doc: t, count: 0, d: (0, o.k)(), meta: new Set() };
          return n.count++, n.meta.add(e), this.set(t, n), this;
        },
        POP(t, e) {
          let r = this.get(t);
          return r && (r.count--, r.meta.delete(e)), this;
        },
        SCROLL_PREVENT(t) {
          let e,
            { doc: r, d: n, meta: i } = t,
            s = {
              doc: r,
              d: n,
              meta: (function (t) {
                let e = {};
                for (let r of t) Object.assign(e, r(e));
                return e;
              })(i),
            },
            l = [
              (0, a.gn)()
                ? {
                    before(t) {
                      let { doc: e, d: r, meta: n } = t;
                      function i(t) {
                        return n.containers
                          .flatMap((t) => t())
                          .some((e) => e.contains(t));
                      }
                      r.microTask(() => {
                        var t;
                        if (
                          "auto" !==
                          window.getComputedStyle(e.documentElement)
                            .scrollBehavior
                        ) {
                          let t = (0, o.k)();
                          t.style(e.documentElement, "scrollBehavior", "auto"),
                            r.add(() => r.microTask(() => t.dispose()));
                        }
                        let n =
                            null != (t = window.scrollY)
                              ? t
                              : window.pageYOffset,
                          s = null;
                        r.addEventListener(
                          e,
                          "click",
                          (t) => {
                            if (t.target instanceof HTMLElement)
                              try {
                                let r = t.target.closest("a");
                                if (!r) return;
                                let { hash: n } = new URL(r.href),
                                  o = e.querySelector(n);
                                o && !i(o) && (s = o);
                              } catch (t) {}
                          },
                          !0
                        ),
                          r.addEventListener(e, "touchstart", (t) => {
                            if (t.target instanceof HTMLElement) {
                              if (i(t.target)) {
                                let e = t.target;
                                for (; e.parentElement && i(e.parentElement); )
                                  e = e.parentElement;
                                r.style(e, "overscrollBehavior", "contain");
                              } else r.style(t.target, "touchAction", "none");
                            }
                          }),
                          r.addEventListener(
                            e,
                            "touchmove",
                            (t) => {
                              if (
                                t.target instanceof HTMLElement &&
                                "INPUT" !== t.target.tagName
                              ) {
                                if (i(t.target)) {
                                  let e = t.target;
                                  for (
                                    ;
                                    e.parentElement &&
                                    "" !== e.dataset.headlessuiPortal &&
                                    !(
                                      e.scrollHeight > e.clientHeight ||
                                      e.scrollWidth > e.clientWidth
                                    );

                                  )
                                    e = e.parentElement;
                                  "" === e.dataset.headlessuiPortal &&
                                    t.preventDefault();
                                } else t.preventDefault();
                              }
                            },
                            { passive: !1 }
                          ),
                          r.add(() => {
                            var t;
                            n !==
                              (null != (t = window.scrollY)
                                ? t
                                : window.pageYOffset) && window.scrollTo(0, n),
                              s &&
                                s.isConnected &&
                                (s.scrollIntoView({ block: "nearest" }),
                                (s = null));
                          });
                      });
                    },
                  }
                : {},
              {
                before(t) {
                  var r;
                  let { doc: n } = t,
                    i = n.documentElement;
                  e = Math.max(
                    0,
                    (null != (r = n.defaultView) ? r : window).innerWidth -
                      i.clientWidth
                  );
                },
                after(t) {
                  let { doc: r, d: n } = t,
                    i = r.documentElement,
                    o = Math.max(0, i.clientWidth - i.offsetWidth),
                    s = Math.max(0, e - o);
                  n.style(i, "paddingRight", "".concat(s, "px"));
                },
              },
              {
                before(t) {
                  let { doc: e, d: r } = t;
                  r.style(e.documentElement, "overflow", "hidden");
                },
              },
            ];
          l.forEach((t) => {
            let { before: e } = t;
            return null == e ? void 0 : e(s);
          }),
            l.forEach((t) => {
              let { after: e } = t;
              return null == e ? void 0 : e(s);
            });
        },
        SCROLL_ALLOW(t) {
          let { d: e } = t;
          e.dispose();
        },
        TEARDOWN(t) {
          let { doc: e } = t;
          this.delete(e);
        },
      });
      l.subscribe(() => {
        let t = l.getSnapshot(),
          e = new Map();
        for (let [r] of t) e.set(r, r.documentElement.style.overflow);
        for (let r of t.values()) {
          let t = "hidden" === e.get(r.doc),
            n = 0 !== r.count;
          ((n && !t) || (!n && t)) &&
            l.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r),
            0 === r.count && l.dispatch("TEARDOWN", r);
        }
      });
      var u = r(39834);
      function c(t, e) {
        let r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : () => [document.body];
        !(function (t, e) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : () => ({ containers: [] }),
            o = (0, n.o)(l),
            s = e ? o.get(e) : void 0;
          s && s.count,
            (0, i.e)(() => {
              if (!(!e || !t))
                return l.dispatch("PUSH", e, r), () => l.dispatch("POP", e, r);
            }, [t, e]);
        })((0, u.g)(t, "scroll-lock"), e, (t) => {
          var e;
          return { containers: [...(null != (e = t.containers) ? e : []), r] };
        });
      }
    },
    72238: function (t, e, r) {
      "use strict";
      r.d(e, {
        H: function () {
          return s;
        },
      });
      var n,
        i = r(2265),
        o = r(61424);
      function s() {
        let t;
        let e =
            ((t = "undefined" == typeof document),
            (0, (n || (n = r.t(i, 2))).useSyncExternalStore)(
              () => () => {},
              () => !1,
              () => !t
            )),
          [s, a] = i.useState(o.O.isHandoffComplete);
        return (
          s && !1 === o.O.isHandoffComplete && a(!1),
          i.useEffect(() => {
            !0 !== s && a(!0);
          }, [s]),
          i.useEffect(() => o.O.handoff(), []),
          !e && s
        );
      }
    },
    27944: function (t, e, r) {
      "use strict";
      r.d(e, {
        o: function () {
          return i;
        },
      });
      var n = r(2265);
      function i(t) {
        return (0, n.useSyncExternalStore)(
          t.subscribe,
          t.getSnapshot,
          t.getSnapshot
        );
      }
    },
    93689: function (t, e, r) {
      "use strict";
      r.d(e, {
        T: function () {
          return a;
        },
        h: function () {
          return s;
        },
      });
      var n = r(2265),
        i = r(13323);
      let o = Symbol();
      function s(t) {
        let e =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return Object.assign(t, { [o]: e });
      }
      function a() {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        let s = (0, n.useRef)(e);
        (0, n.useEffect)(() => {
          s.current = e;
        }, [e]);
        let a = (0, i.z)((t) => {
          for (let e of s.current)
            null != e && ("function" == typeof e ? e(t) : (e.current = t));
        });
        return e.every((t) => null == t || (null == t ? void 0 : t[o]))
          ? void 0
          : a;
      }
    },
    34723: function (t, e, r) {
      "use strict";
      let n;
      r.d(e, {
        X: function () {
          return f;
        },
        Y: function () {
          return d;
        },
      });
      var i,
        o,
        s = r(2265),
        a = r(16015),
        l = r(90945),
        u = r(64518),
        c = r(40257);
      void 0 !== c &&
        "undefined" != typeof globalThis &&
        "undefined" != typeof Element &&
        (null == (i = null == c ? void 0 : c.env) ? void 0 : i.NODE_ENV) ===
          "test" &&
        void 0 ===
          (null == (o = null == Element ? void 0 : Element.prototype)
            ? void 0
            : o.getAnimations) &&
        (Element.prototype.getAnimations = function () {
          return (
            console.warn(
              "Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.\nPlease install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.\n\nExample usage:\n```js\nimport { mockAnimationsApi } from 'jsdom-testing-mocks'\nmockAnimationsApi()\n```"
            ),
            []
          );
        });
      var h =
        (((n = h || {})[(n.None = 0)] = "None"),
        (n[(n.Closed = 1)] = "Closed"),
        (n[(n.Enter = 2)] = "Enter"),
        (n[(n.Leave = 4)] = "Leave"),
        n);
      function f(t) {
        let e = {};
        for (let r in t) !0 === t[r] && (e["data-".concat(r)] = "");
        return e;
      }
      function d(t, e, r, n) {
        let [i, o] = (0, s.useState)(r),
          {
            hasFlag: c,
            addFlag: h,
            removeFlag: f,
          } = (function () {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              [e, r] = (0, s.useState)(t),
              n = (0, s.useCallback)((t) => r(t), [e]),
              i = (0, s.useCallback)((t) => r((e) => e | t), [e]),
              o = (0, s.useCallback)((t) => (e & t) === t, [e]);
            return {
              flags: e,
              setFlag: n,
              addFlag: i,
              hasFlag: o,
              removeFlag: (0, s.useCallback)((t) => r((e) => e & ~t), [r]),
              toggleFlag: (0, s.useCallback)((t) => r((e) => e ^ t), [r]),
            };
          })(t && i ? 3 : 0),
          d = (0, s.useRef)(!1),
          p = (0, s.useRef)(!1),
          m = (0, l.G)();
        return (
          (0, u.e)(() => {
            var i;
            if (t) {
              if ((r && o(!0), !e)) {
                r && h(3);
                return;
              }
              return (
                null == (i = null == n ? void 0 : n.start) || i.call(n, r),
                (function (t, e) {
                  let { prepare: r, run: n, done: i, inFlight: o } = e,
                    s = (0, a.k)();
                  return (
                    (function (t, e) {
                      let { inFlight: r, prepare: n } = e;
                      if (null != r && r.current) {
                        n();
                        return;
                      }
                      let i = t.style.transition;
                      (t.style.transition = "none"),
                        n(),
                        t.offsetHeight,
                        (t.style.transition = i);
                    })(t, { prepare: r, inFlight: o }),
                    s.nextFrame(() => {
                      n(),
                        s.requestAnimationFrame(() => {
                          s.add(
                            (function (t, e) {
                              var r, n;
                              let i = (0, a.k)();
                              if (!t) return i.dispose;
                              let o = !1;
                              i.add(() => {
                                o = !0;
                              });
                              let s =
                                null !=
                                (n =
                                  null == (r = t.getAnimations)
                                    ? void 0
                                    : r
                                        .call(t)
                                        .filter(
                                          (t) => t instanceof CSSTransition
                                        ))
                                  ? n
                                  : [];
                              return (
                                0 === s.length
                                  ? e()
                                  : Promise.allSettled(
                                      s.map((t) => t.finished)
                                    ).then(() => {
                                      o || e();
                                    }),
                                i.dispose
                              );
                            })(t, i)
                          );
                        });
                    }),
                    s.dispose
                  );
                })(e, {
                  inFlight: d,
                  prepare() {
                    p.current ? (p.current = !1) : (p.current = d.current),
                      (d.current = !0),
                      p.current || (r ? (h(3), f(4)) : (h(4), f(2)));
                  },
                  run() {
                    p.current
                      ? r
                        ? (f(3), h(4))
                        : (f(4), h(3))
                      : r
                      ? f(1)
                      : h(1);
                  },
                  done() {
                    var t;
                    (p.current &&
                      "function" == typeof e.getAnimations &&
                      e.getAnimations().length > 0) ||
                      ((d.current = !1),
                      f(7),
                      r || o(!1),
                      null == (t = null == n ? void 0 : n.end) || t.call(n, r));
                  },
                })
              );
            }
          }, [t, r, e, m]),
          t
            ? [
                i,
                {
                  closed: c(1),
                  enter: c(2),
                  leave: c(4),
                  transition: c(2) || c(4),
                },
              ]
            : [
                r,
                {
                  closed: void 0,
                  enter: void 0,
                  leave: void 0,
                  transition: void 0,
                },
              ]
        );
      }
    },
    3141: function (t, e, r) {
      "use strict";
      r.d(e, {
        s: function () {
          return o;
        },
      });
      var n = r(2265),
        i = r(31948);
      function o(t, e, r, o) {
        let s = (0, i.E)(r);
        (0, n.useEffect)(() => {
          if (t)
            return (
              window.addEventListener(e, r, o),
              () => window.removeEventListener(e, r, o)
            );
          function r(t) {
            s.current(t);
          }
        }, [t, e, o]);
      }
    },
    6885: function (t, e, r) {
      "use strict";
      r.d(e, {
        B: function () {
          return o;
        },
      });
      var n = r(2265);
      let i = (0, n.createContext)(void 0);
      function o() {
        return (0, n.useContext)(i);
      }
    },
    37863: function (t, e, r) {
      "use strict";
      let n;
      r.d(e, {
        ZM: function () {
          return s;
        },
        oJ: function () {
          return a;
        },
        up: function () {
          return l;
        },
        uu: function () {
          return u;
        },
      });
      var i = r(2265);
      let o = (0, i.createContext)(null);
      o.displayName = "OpenClosedContext";
      var s =
        (((n = s || {})[(n.Open = 1)] = "Open"),
        (n[(n.Closed = 2)] = "Closed"),
        (n[(n.Closing = 4)] = "Closing"),
        (n[(n.Opening = 8)] = "Opening"),
        n);
      function a() {
        return (0, i.useContext)(o);
      }
      function l(t) {
        let { value: e, children: r } = t;
        return i.createElement(o.Provider, { value: e }, r);
      }
      function u(t) {
        let { children: e } = t;
        return i.createElement(o.Provider, { value: null }, e);
      }
    },
    27988: function (t, e, r) {
      "use strict";
      r.d(e, {
        O: function () {
          return s;
        },
        n: function () {
          return o;
        },
      });
      var n = r(2265);
      let i = (0, n.createContext)(!1);
      function o() {
        return (0, n.useContext)(i);
      }
      function s(t) {
        return n.createElement(i.Provider, { value: t.force }, t.children);
      }
    },
    42120: function (t, e, r) {
      "use strict";
      function n() {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return Array.from(
          new Set(e.flatMap((t) => ("string" == typeof t ? t.split(" ") : [])))
        )
          .filter(Boolean)
          .join(" ");
      }
      r.d(e, {
        A: function () {
          return n;
        },
      });
    },
    16015: function (t, e, r) {
      "use strict";
      r.d(e, {
        k: function () {
          return function t() {
            let e = [],
              r = {
                addEventListener: (t, e, n, i) => (
                  t.addEventListener(e, n, i),
                  r.add(() => t.removeEventListener(e, n, i))
                ),
                requestAnimationFrame() {
                  for (
                    var t = arguments.length, e = Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  let i = requestAnimationFrame(...e);
                  return r.add(() => cancelAnimationFrame(i));
                },
                nextFrame() {
                  for (
                    var t = arguments.length, e = Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  return r.requestAnimationFrame(() =>
                    r.requestAnimationFrame(...e)
                  );
                },
                setTimeout() {
                  for (
                    var t = arguments.length, e = Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  let i = setTimeout(...e);
                  return r.add(() => clearTimeout(i));
                },
                microTask() {
                  for (
                    var t = arguments.length, e = Array(t), i = 0;
                    i < t;
                    i++
                  )
                    e[i] = arguments[i];
                  let o = { current: !0 };
                  return (
                    (0, n.Y)(() => {
                      o.current && e[0]();
                    }),
                    r.add(() => {
                      o.current = !1;
                    })
                  );
                },
                style(t, e, r) {
                  let n = t.style.getPropertyValue(e);
                  return (
                    Object.assign(t.style, { [e]: r }),
                    this.add(() => {
                      Object.assign(t.style, { [e]: n });
                    })
                  );
                },
                group(e) {
                  let r = t();
                  return e(r), this.add(() => r.dispose());
                },
                add: (t) => (
                  e.includes(t) || e.push(t),
                  () => {
                    let r = e.indexOf(t);
                    if (r >= 0) for (let t of e.splice(r, 1)) t();
                  }
                ),
                dispose() {
                  for (let t of e.splice(0)) t();
                },
              };
            return r;
          };
        },
      });
      var n = r(96822);
    },
    61424: function (t, e, r) {
      "use strict";
      r.d(e, {
        O: function () {
          return a;
        },
      });
      var n = Object.defineProperty,
        i = (t, e, r) =>
          e in t
            ? n(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        o = (t, e, r) => (i(t, "symbol" != typeof e ? e + "" : e, r), r);
      class s {
        set(t) {
          this.current !== t &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = t));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof window || "undefined" == typeof document
            ? "server"
            : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
        constructor() {
          o(this, "current", this.detect()),
            o(this, "handoffState", "pending"),
            o(this, "currentId", 0);
        }
      }
      let a = new s();
    },
    37105: function (t, e, r) {
      "use strict";
      let n, i, o, s, a;
      r.d(e, {
        C5: function () {
          return E;
        },
        EO: function () {
          return M;
        },
        TO: function () {
          return d;
        },
        fE: function () {
          return p;
        },
        jA: function () {
          return S;
        },
        sP: function () {
          return v;
        },
        tJ: function () {
          return y;
        },
        wI: function () {
          return w;
        },
        y: function () {
          return h;
        },
        z2: function () {
          return x;
        },
      });
      var l = r(16015),
        u = r(24536),
        c = r(40293);
      let h = [
          "[contentEditable=true]",
          "[tabindex]",
          "a[href]",
          "area[href]",
          "button:not([disabled])",
          "iframe",
          "input:not([disabled])",
          "select:not([disabled])",
          "textarea:not([disabled])",
        ]
          .map((t) => "".concat(t, ":not([tabindex='-1'])"))
          .join(","),
        f = ["[data-autofocus]"]
          .map((t) => "".concat(t, ":not([tabindex='-1'])"))
          .join(",");
      var d =
          (((n = d || {})[(n.First = 1)] = "First"),
          (n[(n.Previous = 2)] = "Previous"),
          (n[(n.Next = 4)] = "Next"),
          (n[(n.Last = 8)] = "Last"),
          (n[(n.WrapAround = 16)] = "WrapAround"),
          (n[(n.NoScroll = 32)] = "NoScroll"),
          (n[(n.AutoFocus = 64)] = "AutoFocus"),
          n),
        p =
          (((i = p || {})[(i.Error = 0)] = "Error"),
          (i[(i.Overflow = 1)] = "Overflow"),
          (i[(i.Success = 2)] = "Success"),
          (i[(i.Underflow = 3)] = "Underflow"),
          i),
        m =
          (((o = m || {})[(o.Previous = -1)] = "Previous"),
          (o[(o.Next = 1)] = "Next"),
          o);
      function g() {
        let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : document.body;
        return null == t
          ? []
          : Array.from(t.querySelectorAll(h)).sort((t, e) =>
              Math.sign(
                (t.tabIndex || Number.MAX_SAFE_INTEGER) -
                  (e.tabIndex || Number.MAX_SAFE_INTEGER)
              )
            );
      }
      var y =
        (((s = y || {})[(s.Strict = 0)] = "Strict"),
        (s[(s.Loose = 1)] = "Loose"),
        s);
      function v(t) {
        var e;
        let r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (
          t !== (null == (e = (0, c.r)(t)) ? void 0 : e.body) &&
          (0, u.E)(r, {
            0: () => t.matches(h),
            1() {
              let e = t;
              for (; null !== e; ) {
                if (e.matches(h)) return !0;
                e = e.parentElement;
              }
              return !1;
            },
          })
        );
      }
      function w(t) {
        let e = (0, c.r)(t);
        (0, l.k)().nextFrame(() => {
          e && !v(e.activeElement, 0) && E(t);
        });
      }
      var b =
        (((a = b || {})[(a.Keyboard = 0)] = "Keyboard"),
        (a[(a.Mouse = 1)] = "Mouse"),
        a);
      function E(t) {
        null == t || t.focus({ preventScroll: !0 });
      }
      function x(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (t) => t;
        return t.slice().sort((t, r) => {
          let n = e(t),
            i = e(r);
          if (null === n || null === i) return 0;
          let o = n.compareDocumentPosition(i);
          return o & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : o & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
        });
      }
      function M(t, e) {
        return S(g(), e, { relativeTo: t });
      }
      function S(t, e) {
        var r, n, i;
        let {
            sorted: o = !0,
            relativeTo: s = null,
            skipElements: a = [],
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {},
          l = Array.isArray(t)
            ? t.length > 0
              ? t[0].ownerDocument
              : document
            : t.ownerDocument,
          u = Array.isArray(t)
            ? o
              ? x(t)
              : t
            : 64 & e
            ? (function () {
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : document.body;
                return null == t
                  ? []
                  : Array.from(t.querySelectorAll(f)).sort((t, e) =>
                      Math.sign(
                        (t.tabIndex || Number.MAX_SAFE_INTEGER) -
                          (e.tabIndex || Number.MAX_SAFE_INTEGER)
                      )
                    );
              })(t)
            : g(t);
        a.length > 0 &&
          u.length > 1 &&
          (u = u.filter(
            (t) =>
              !a.some((e) =>
                null != e && "current" in e
                  ? (null == e ? void 0 : e.current) === t
                  : e === t
              )
          )),
          (s = null != s ? s : l.activeElement);
        let c = (() => {
            if (5 & e) return 1;
            if (10 & e) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          h = (() => {
            if (1 & e) return 0;
            if (2 & e) return Math.max(0, u.indexOf(s)) - 1;
            if (4 & e) return Math.max(0, u.indexOf(s)) + 1;
            if (8 & e) return u.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          d = 32 & e ? { preventScroll: !0 } : {},
          p = 0,
          m = u.length,
          y;
        do {
          if (p >= m || p + m <= 0) return 0;
          let t = h + p;
          if (16 & e) t = (t + m) % m;
          else {
            if (t < 0) return 3;
            if (t >= m) return 1;
          }
          null == (y = u[t]) || y.focus(d), (p += c);
        } while (y !== l.activeElement);
        return (
          6 & e &&
            null !=
              (i =
                null == (n = null == (r = y) ? void 0 : r.matches)
                  ? void 0
                  : n.call(r, "textarea,input")) &&
            i &&
            y.select(),
          2
        );
      }
      "undefined" != typeof window &&
        "undefined" != typeof document &&
        (document.addEventListener(
          "keydown",
          (t) => {
            t.metaKey ||
              t.altKey ||
              t.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ),
        document.addEventListener(
          "click",
          (t) => {
            1 === t.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === t.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ));
    },
    24536: function (t, e, r) {
      "use strict";
      function n(t, e) {
        for (
          var r = arguments.length, i = Array(r > 2 ? r - 2 : 0), o = 2;
          o < r;
          o++
        )
          i[o - 2] = arguments[o];
        if (t in e) {
          let r = e[t];
          return "function" == typeof r ? r(...i) : r;
        }
        let s = Error(
          'Tried to handle "'
            .concat(
              t,
              '" but there is no handler defined. Only defined handlers are: '
            )
            .concat(
              Object.keys(e)
                .map((t) => '"'.concat(t, '"'))
                .join(", "),
              "."
            )
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(s, n), s);
      }
      r.d(e, {
        E: function () {
          return n;
        },
      });
    },
    96822: function (t, e, r) {
      "use strict";
      function n(t) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(t)
          : Promise.resolve()
              .then(t)
              .catch((t) =>
                setTimeout(() => {
                  throw t;
                })
              );
      }
      r.d(e, {
        Y: function () {
          return n;
        },
      });
    },
    40293: function (t, e, r) {
      "use strict";
      r.d(e, {
        r: function () {
          return i;
        },
      });
      var n = r(61424);
      function i(t) {
        return n.O.isServer
          ? null
          : t instanceof Node
          ? t.ownerDocument
          : null != t &&
            t.hasOwnProperty("current") &&
            t.current instanceof Node
          ? t.current.ownerDocument
          : document;
      }
    },
    52108: function (t, e, r) {
      "use strict";
      function n() {
        return (
          /iPhone/gi.test(window.navigator.platform) ||
          (/Mac/gi.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 0)
        );
      }
      function i() {
        return n() || /Android/gi.test(window.navigator.userAgent);
      }
      r.d(e, {
        gn: function () {
          return n;
        },
        tq: function () {
          return i;
        },
      });
    },
    27847: function (t, e, r) {
      "use strict";
      let n, i;
      r.d(e, {
        L6: function () {
          return c;
        },
        VN: function () {
          return l;
        },
        dG: function () {
          return p;
        },
        l4: function () {
          return u;
        },
        oA: function () {
          return g;
        },
        yV: function () {
          return m;
        },
      });
      var o = r(2265),
        s = r(42120),
        a = r(24536),
        l =
          (((n = l || {})[(n.None = 0)] = "None"),
          (n[(n.RenderStrategy = 1)] = "RenderStrategy"),
          (n[(n.Static = 2)] = "Static"),
          n),
        u =
          (((i = u || {})[(i.Unmount = 0)] = "Unmount"),
          (i[(i.Hidden = 1)] = "Hidden"),
          i);
      function c() {
        let t, e;
        let r =
          ((t = (0, o.useRef)([])),
          (e = (0, o.useCallback)((e) => {
            for (let r of t.current)
              null != r && ("function" == typeof r ? r(e) : (r.current = e));
          }, [])),
          function () {
            for (var r = arguments.length, n = Array(r), i = 0; i < r; i++)
              n[i] = arguments[i];
            if (!n.every((t) => null == t)) return (t.current = n), e;
          });
        return (0, o.useCallback)(
          (t) =>
            (function (t) {
              let {
                ourProps: e,
                theirProps: r,
                slot: n,
                defaultTag: i,
                features: o,
                visible: s = !0,
                name: l,
                mergeRefs: u,
              } = t;
              u = null != u ? u : f;
              let c = d(r, e);
              if (s) return h(c, n, i, l, u);
              let p = null != o ? o : 0;
              if (2 & p) {
                let { static: t = !1, ...e } = c;
                if (t) return h(e, n, i, l, u);
              }
              if (1 & p) {
                let { unmount: t = !0, ...e } = c;
                return (0, a.E)(t ? 0 : 1, {
                  0: () => null,
                  1: () =>
                    h(
                      { ...e, hidden: !0, style: { display: "none" } },
                      n,
                      i,
                      l,
                      u
                    ),
                });
              }
              return h(c, n, i, l, u);
            })({ mergeRefs: r, ...t }),
          [r]
        );
      }
      function h(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          n = arguments.length > 3 ? arguments[3] : void 0,
          i = arguments.length > 4 ? arguments[4] : void 0,
          {
            as: a = r,
            children: l,
            refName: u = "ref",
            ...c
          } = y(t, ["unmount", "static"]),
          h = void 0 !== t.ref ? { [u]: t.ref } : {},
          f = "function" == typeof l ? l(e) : l;
        "className" in c &&
          c.className &&
          "function" == typeof c.className &&
          (c.className = c.className(e)),
          c["aria-labelledby"] &&
            c["aria-labelledby"] === c.id &&
            (c["aria-labelledby"] = void 0);
        let p = {};
        if (e) {
          let t = !1,
            r = [];
          for (let [n, i] of Object.entries(e))
            "boolean" == typeof i && (t = !0),
              !0 === i &&
                r.push(
                  n.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase()))
                );
          if (t)
            for (let t of ((p["data-headlessui-state"] = r.join(" ")), r))
              p["data-".concat(t)] = "";
        }
        if (
          a === o.Fragment &&
          (Object.keys(g(c)).length > 0 || Object.keys(g(p)).length > 0)
        ) {
          if (!(0, o.isValidElement)(f) || (Array.isArray(f) && f.length > 1)) {
            if (Object.keys(g(c)).length > 0)
              throw Error(
                [
                  'Passing props on "Fragment"!',
                  "",
                  "The current component <".concat(
                    n,
                    ' /> is rendering a "Fragment".'
                  ),
                  "However we need to passthrough the following props:",
                  Object.keys(g(c))
                    .concat(Object.keys(g(p)))
                    .map((t) => "  - ".concat(t))
                    .join("\n"),
                  "",
                  "You can apply a few solutions:",
                  [
                    'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                    "Render a single element as the child so that we can forward the props onto that element.",
                  ]
                    .map((t) => "  - ".concat(t))
                    .join("\n"),
                ].join("\n")
              );
          } else {
            let t = f.props,
              e = null == t ? void 0 : t.className,
              r =
                "function" == typeof e
                  ? function () {
                      for (
                        var t = arguments.length, r = Array(t), n = 0;
                        n < t;
                        n++
                      )
                        r[n] = arguments[n];
                      return (0, s.A)(e(...r), c.className);
                    }
                  : (0, s.A)(e, c.className),
              n = d(f.props, g(y(c, ["ref"])));
            for (let t in p) t in n && delete p[t];
            return (0, o.cloneElement)(
              f,
              Object.assign(
                {},
                n,
                p,
                h,
                {
                  ref: i(
                    o.version.split(".")[0] >= "19" ? f.props.ref : f.ref,
                    h.ref
                  ),
                },
                r ? { className: r } : {}
              )
            );
          }
        }
        return (0, o.createElement)(
          a,
          Object.assign(
            {},
            y(c, ["ref"]),
            a !== o.Fragment && h,
            a !== o.Fragment && p
          ),
          f
        );
      }
      function f() {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return e.every((t) => null == t)
          ? void 0
          : (t) => {
              for (let r of e)
                null != r && ("function" == typeof r ? r(t) : (r.current = t));
            };
      }
      function d() {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let n = {},
          i = {};
        for (let t of e)
          for (let e in t)
            e.startsWith("on") && "function" == typeof t[e]
              ? (null != i[e] || (i[e] = []), i[e].push(t[e]))
              : (n[e] = t[e]);
        if (n.disabled || n["aria-disabled"])
          for (let t in i)
            /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(t) &&
              (i[t] = [
                (t) => {
                  var e;
                  return null == (e = null == t ? void 0 : t.preventDefault)
                    ? void 0
                    : e.call(t);
                },
              ]);
        for (let t in i)
          Object.assign(n, {
            [t](e) {
              for (
                var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              for (let r of i[t]) {
                if (
                  (e instanceof Event ||
                    (null == e ? void 0 : e.nativeEvent) instanceof Event) &&
                  e.defaultPrevented
                )
                  return;
                r(e, ...n);
              }
            },
          });
        return n;
      }
      function p() {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let n = {},
          i = {};
        for (let t of e)
          for (let e in t)
            e.startsWith("on") && "function" == typeof t[e]
              ? (null != i[e] || (i[e] = []), i[e].push(t[e]))
              : (n[e] = t[e]);
        for (let t in i)
          Object.assign(n, {
            [t]() {
              for (var e = arguments.length, r = Array(e), n = 0; n < e; n++)
                r[n] = arguments[n];
              for (let e of i[t]) null == e || e(...r);
            },
          });
        return n;
      }
      function m(t) {
        var e;
        return Object.assign((0, o.forwardRef)(t), {
          displayName: null != (e = t.displayName) ? e : t.name,
        });
      }
      function g(t) {
        let e = Object.assign({}, t);
        for (let t in e) void 0 === e[t] && delete e[t];
        return e;
      }
      function y(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = Object.assign({}, t);
        for (let t of e) t in r && delete r[t];
        return r;
      }
    },
    33906: function (t, e, r) {
      "use strict";
      function n(t, e) {
        let r = t(),
          n = new Set();
        return {
          getSnapshot: () => r,
          subscribe: (t) => (n.add(t), () => n.delete(t)),
          dispatch(t) {
            for (
              var i = arguments.length, o = Array(i > 1 ? i - 1 : 0), s = 1;
              s < i;
              s++
            )
              o[s - 1] = arguments[s];
            let a = e[t].call(r, ...o);
            a && ((r = a), n.forEach((t) => t()));
          },
        };
      }
      r.d(e, {
        M: function () {
          return n;
        },
      });
    },
    33024: function (t, e, r) {
      "use strict";
      r.d(e, {
        D1: function () {
          return p;
        },
        Kd: function () {
          return m;
        },
        Mx: function () {
          return d;
        },
      });
      var n = r(27665),
        i = r(81025);
      let o = BigInt(0),
        s = BigInt(1);
      function a(t, e) {
        let r = e.negate();
        return t ? r : e;
      }
      function l(t, e) {
        if (!Number.isSafeInteger(t) || t <= 0 || t > e)
          throw Error(
            "invalid window size, expected [1.." + e + "], got W=" + t
          );
      }
      function u(t, e) {
        return (
          l(t, e), { windows: Math.ceil(e / t) + 1, windowSize: 2 ** (t - 1) }
        );
      }
      let c = new WeakMap(),
        h = new WeakMap();
      function f(t) {
        return h.get(t) || 1;
      }
      function d(t, e) {
        return {
          constTimeNegate: a,
          hasPrecomputes: (t) => 1 !== f(t),
          unsafeLadder(e, r, n = t.ZERO) {
            let i = e;
            for (; r > o; )
              r & s && (n = n.add(i)), (i = i.double()), (r >>= s);
            return n;
          },
          precomputeWindow(t, r) {
            let { windows: n, windowSize: i } = u(r, e),
              o = [],
              s = t,
              a = s;
            for (let t = 0; t < n; t++) {
              (a = s), o.push(a);
              for (let t = 1; t < i; t++) (a = a.add(s)), o.push(a);
              s = a.double();
            }
            return o;
          },
          wNAF(r, n, i) {
            let { windows: o, windowSize: l } = u(r, e),
              c = t.ZERO,
              h = t.BASE,
              f = BigInt(2 ** r - 1),
              d = 2 ** r,
              p = BigInt(r);
            for (let t = 0; t < o; t++) {
              let e = t * l,
                r = Number(i & f);
              (i >>= p), r > l && ((r -= d), (i += s));
              let o = e + Math.abs(r) - 1,
                u = t % 2 != 0,
                m = r < 0;
              0 === r ? (h = h.add(a(u, n[e]))) : (c = c.add(a(m, n[o])));
            }
            return { p: c, f: h };
          },
          wNAFUnsafe(r, n, i, a = t.ZERO) {
            let { windows: l, windowSize: c } = u(r, e),
              h = BigInt(2 ** r - 1),
              f = 2 ** r,
              d = BigInt(r);
            for (let t = 0; t < l; t++) {
              let e = t * c;
              if (i === o) break;
              let r = Number(i & h);
              if (((i >>= d), r > c && ((r -= f), (i += s)), 0 === r)) continue;
              let l = n[e + Math.abs(r) - 1];
              r < 0 && (l = l.negate()), (a = a.add(l));
            }
            return a;
          },
          getPrecomputes(t, e, r) {
            let n = c.get(e);
            return (
              n ||
                ((n = this.precomputeWindow(e, t)), 1 !== t && c.set(e, r(n))),
              n
            );
          },
          wNAFCached(t, e, r) {
            let n = f(t);
            return this.wNAF(n, this.getPrecomputes(n, t, r), e);
          },
          wNAFCachedUnsafe(t, e, r, n) {
            let i = f(t);
            return 1 === i
              ? this.unsafeLadder(t, e, n)
              : this.wNAFUnsafe(i, this.getPrecomputes(i, t, r), e, n);
          },
          setWindowSize(t, r) {
            l(r, e), h.set(t, r), c.delete(t);
          },
        };
      }
      function p(t, e, r, n) {
        if (
          (!(function (t, e) {
            if (!Array.isArray(t)) throw Error("array expected");
            t.forEach((t, r) => {
              if (!(t instanceof e)) throw Error("invalid point at index " + r);
            });
          })(r, t),
          !(function (t, e) {
            if (!Array.isArray(t)) throw Error("array of scalars expected");
            t.forEach((t, r) => {
              if (!e.isValid(t)) throw Error("invalid scalar at index " + r);
            });
          })(n, e),
          r.length !== n.length)
        )
          throw Error("arrays of points and scalars must have equal length");
        let o = t.ZERO,
          s = (0, i.Dd)(BigInt(r.length)),
          a = s > 12 ? s - 3 : s > 4 ? s - 2 : s ? 2 : 1,
          l = (1 << a) - 1,
          u = Array(l + 1).fill(o),
          c = Math.floor((e.BITS - 1) / a) * a,
          h = o;
        for (let t = c; t >= 0; t -= a) {
          u.fill(o);
          for (let e = 0; e < n.length; e++) {
            let i = Number((n[e] >> BigInt(t)) & BigInt(l));
            u[i] = u[i].add(r[e]);
          }
          let e = o;
          for (let t = u.length - 1, r = o; t > 0; t--)
            (r = r.add(u[t])), (e = e.add(r));
          if (((h = h.add(e)), 0 !== t))
            for (let t = 0; t < a; t++) h = h.double();
        }
        return h;
      }
      function m(t) {
        return (
          (0, n.OP)(t.Fp),
          (0, i.FF)(
            t,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({
            ...(0, n.kK)(t.n, t.nBitLength),
            ...t,
            p: t.Fp.ORDER,
          })
        );
      }
    },
    27665: function (t, e, r) {
      "use strict";
      r.d(e, {
        OP: function () {
          return g;
        },
        PS: function () {
          return b;
        },
        Tu: function () {
          return p;
        },
        U_: function () {
          return d;
        },
        Us: function () {
          return E;
        },
        gN: function () {
          return v;
        },
        kK: function () {
          return y;
        },
        oA: function () {
          return f;
        },
        wQ: function () {
          return h;
        },
      });
      var n = r(81025);
      let i = BigInt(0),
        o = BigInt(1),
        s = BigInt(2),
        a = BigInt(3),
        l = BigInt(4),
        u = BigInt(5),
        c = BigInt(8);
      function h(t, e) {
        let r = t % e;
        return r >= i ? r : e + r;
      }
      function f(t, e, r) {
        let n = t;
        for (; e-- > i; ) (n *= n), (n %= r);
        return n;
      }
      function d(t, e) {
        if (t === i) throw Error("invert: expected non-zero number");
        if (e <= i) throw Error("invert: expected positive modulus, got " + e);
        let r = h(t, e),
          n = e,
          s = i,
          a = o,
          l = o,
          u = i;
        for (; r !== i; ) {
          let t = n / r,
            e = n % r,
            i = s - l * t,
            o = a - u * t;
          (n = r), (r = e), (s = l), (a = u), (l = i), (u = o);
        }
        if (n !== o) throw Error("invert: does not exist");
        return h(s, e);
      }
      let p = (t, e) => (h(t, e) & o) === o,
        m = [
          "create",
          "isValid",
          "is0",
          "neg",
          "inv",
          "sqrt",
          "sqr",
          "eql",
          "add",
          "sub",
          "mul",
          "pow",
          "div",
          "addN",
          "subN",
          "mulN",
          "sqrN",
        ];
      function g(t) {
        let e = m.reduce((t, e) => ((t[e] = "function"), t), {
          ORDER: "bigint",
          MASK: "bigint",
          BYTES: "isSafeInteger",
          BITS: "isSafeInteger",
        });
        return (0, n.FF)(t, e);
      }
      function y(t, e) {
        let r = void 0 !== e ? e : t.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function v(t, e, r = !1, f = {}) {
        let p;
        if (t <= i) throw Error("invalid field: expected ORDER > 0, got " + t);
        let { nBitLength: m, nByteLength: g } = y(t, e);
        if (g > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let v = Object.freeze({
          ORDER: t,
          isLE: r,
          BITS: m,
          BYTES: g,
          MASK: (0, n.dQ)(m),
          ZERO: i,
          ONE: o,
          create: (e) => h(e, t),
          isValid: (e) => {
            if ("bigint" != typeof e)
              throw Error(
                "invalid field element: expected bigint, got " + typeof e
              );
            return i <= e && e < t;
          },
          is0: (t) => t === i,
          isOdd: (t) => (t & o) === o,
          neg: (e) => h(-e, t),
          eql: (t, e) => t === e,
          sqr: (e) => h(e * e, t),
          add: (e, r) => h(e + r, t),
          sub: (e, r) => h(e - r, t),
          mul: (e, r) => h(e * r, t),
          pow: (t, e) =>
            (function (t, e, r) {
              if (r < i) throw Error("invalid exponent, negatives unsupported");
              if (r === i) return t.ONE;
              if (r === o) return e;
              let n = t.ONE,
                s = e;
              for (; r > i; )
                r & o && (n = t.mul(n, s)), (s = t.sqr(s)), (r >>= o);
              return n;
            })(v, t, e),
          div: (e, r) => h(e * d(r, t), t),
          sqrN: (t) => t * t,
          addN: (t, e) => t + e,
          subN: (t, e) => t - e,
          mulN: (t, e) => t * e,
          inv: (e) => d(e, t),
          sqrt:
            f.sqrt ||
            ((e) => (
              p ||
                (p = (function (t) {
                  if (t % l === a) {
                    let e = (t + o) / l;
                    return function (t, r) {
                      let n = t.pow(r, e);
                      if (!t.eql(t.sqr(n), r))
                        throw Error("Cannot find square root");
                      return n;
                    };
                  }
                  if (t % c === u) {
                    let e = (t - u) / c;
                    return function (t, r) {
                      let n = t.mul(r, s),
                        i = t.pow(n, e),
                        o = t.mul(r, i),
                        a = t.mul(t.mul(o, s), i),
                        l = t.mul(o, t.sub(a, t.ONE));
                      if (!t.eql(t.sqr(l), r))
                        throw Error("Cannot find square root");
                      return l;
                    };
                  }
                  return (function (t) {
                    let e, r, n;
                    let a = (t - o) / s;
                    for (e = t - o, r = 0; e % s === i; e /= s, r++);
                    for (
                      n = s;
                      n < t &&
                      (function (t, e, r) {
                        if (e < i)
                          throw Error(
                            "invalid exponent, negatives unsupported"
                          );
                        if (r <= i) throw Error("invalid modulus");
                        if (r === o) return i;
                        let n = o;
                        for (; e > i; )
                          e & o && (n = (n * t) % r),
                            (t = (t * t) % r),
                            (e >>= o);
                        return n;
                      })(n, a, t) !==
                        t - o;
                      n++
                    )
                      if (n > 1e3)
                        throw Error(
                          "Cannot find square root: likely non-prime P"
                        );
                    if (1 === r) {
                      let e = (t + o) / l;
                      return function (t, r) {
                        let n = t.pow(r, e);
                        if (!t.eql(t.sqr(n), r))
                          throw Error("Cannot find square root");
                        return n;
                      };
                    }
                    let u = (e + o) / s;
                    return function (t, i) {
                      if (t.pow(i, a) === t.neg(t.ONE))
                        throw Error("Cannot find square root");
                      let s = r,
                        l = t.pow(t.mul(t.ONE, n), e),
                        c = t.pow(i, u),
                        h = t.pow(i, e);
                      for (; !t.eql(h, t.ONE); ) {
                        if (t.eql(h, t.ZERO)) return t.ZERO;
                        let e = 1;
                        for (let r = t.sqr(h); e < s && !t.eql(r, t.ONE); e++)
                          r = t.sqr(r);
                        let r = t.pow(l, o << BigInt(s - e - 1));
                        (l = t.sqr(r)),
                          (c = t.mul(c, r)),
                          (h = t.mul(h, l)),
                          (s = e);
                      }
                      return c;
                    };
                  })(t);
                })(t)),
              p(v, e)
            )),
          invertBatch: (t) =>
            (function (t, e) {
              let r = Array(e.length),
                n = e.reduce(
                  (e, n, i) => (t.is0(n) ? e : ((r[i] = e), t.mul(e, n))),
                  t.ONE
                ),
                i = t.inv(n);
              return (
                e.reduceRight(
                  (e, n, i) =>
                    t.is0(n) ? e : ((r[i] = t.mul(e, r[i])), t.mul(e, n)),
                  i
                ),
                r
              );
            })(v, t),
          cmov: (t, e, r) => (r ? e : t),
          toBytes: (t) => (r ? (0, n.S5)(t, g) : (0, n.tL)(t, g)),
          fromBytes: (t) => {
            if (t.length !== g)
              throw Error(
                "Field.fromBytes: expected " + g + " bytes, got " + t.length
              );
            return r ? (0, n.ty)(t) : (0, n.bytesToNumberBE)(t);
          },
        });
        return Object.freeze(v);
      }
      function w(t) {
        if ("bigint" != typeof t) throw Error("field order must be bigint");
        return Math.ceil(t.toString(2).length / 8);
      }
      function b(t) {
        let e = w(t);
        return e + Math.ceil(e / 2);
      }
      function E(t, e, r = !1) {
        let i = t.length,
          s = w(e),
          a = b(e);
        if (i < 16 || i < a || i > 1024)
          throw Error("expected " + a + "-1024 bytes of input, got " + i);
        let l = h(r ? (0, n.ty)(t) : (0, n.bytesToNumberBE)(t), e - o) + o;
        return r ? (0, n.S5)(l, s) : (0, n.tL)(l, s);
      }
    },
    81025: function (t, e, r) {
      "use strict";
      r.d(e, {
        Dd: function () {
          return A;
        },
        FF: function () {
          return L;
        },
        Fy: function () {
          return S;
        },
        H9: function () {
          return O;
        },
        S5: function () {
          return w;
        },
        Z2: function () {
          return M;
        },
        _t: function () {
          return s;
        },
        bytesToNumberBE: function () {
          return g;
        },
        ci: function () {
          return c;
        },
        dQ: function () {
          return T;
        },
        eV: function () {
          return E;
        },
        gk: function () {
          return a;
        },
        hexToBytes: function () {
          return m;
        },
        n$: function () {
          return B;
        },
        ql: function () {
          return b;
        },
        tL: function () {
          return v;
        },
        ty: function () {
          return y;
        },
        uw: function () {
          return l;
        },
        uz: function () {
          return h;
        },
      });
      let n = BigInt(0),
        i = BigInt(1),
        o = BigInt(2);
      function s(t) {
        return (
          t instanceof Uint8Array ||
          (ArrayBuffer.isView(t) && "Uint8Array" === t.constructor.name)
        );
      }
      function a(t) {
        if (!s(t)) throw Error("Uint8Array expected");
      }
      function l(t, e) {
        if ("boolean" != typeof e)
          throw Error(t + " boolean expected, got " + e);
      }
      let u = Array.from({ length: 256 }, (t, e) =>
        e.toString(16).padStart(2, "0")
      );
      function c(t) {
        a(t);
        let e = "";
        for (let r = 0; r < t.length; r++) e += u[t[r]];
        return e;
      }
      function h(t) {
        let e = t.toString(16);
        return 1 & e.length ? "0" + e : e;
      }
      function f(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        return "" === t ? n : BigInt("0x" + t);
      }
      let d = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function p(t) {
        return t >= d._0 && t <= d._9
          ? t - d._0
          : t >= d.A && t <= d.F
          ? t - (d.A - 10)
          : t >= d.a && t <= d.f
          ? t - (d.a - 10)
          : void 0;
      }
      function m(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        let e = t.length,
          r = e / 2;
        if (e % 2)
          throw Error("hex string expected, got unpadded hex of length " + e);
        let n = new Uint8Array(r);
        for (let e = 0, i = 0; e < r; e++, i += 2) {
          let r = p(t.charCodeAt(i)),
            o = p(t.charCodeAt(i + 1));
          if (void 0 === r || void 0 === o)
            throw Error(
              'hex string expected, got non-hex character "' +
                (t[i] + t[i + 1]) +
                '" at index ' +
                i
            );
          n[e] = 16 * r + o;
        }
        return n;
      }
      function g(t) {
        return f(c(t));
      }
      function y(t) {
        return a(t), f(c(Uint8Array.from(t).reverse()));
      }
      function v(t, e) {
        return m(t.toString(16).padStart(2 * e, "0"));
      }
      function w(t, e) {
        return v(t, e).reverse();
      }
      function b(t, e, r) {
        let n;
        if ("string" == typeof e)
          try {
            n = m(e);
          } catch (e) {
            throw Error(t + " must be hex string or Uint8Array, cause: " + e);
          }
        else if (s(e)) n = Uint8Array.from(e);
        else throw Error(t + " must be hex string or Uint8Array");
        let i = n.length;
        if ("number" == typeof r && i !== r)
          throw Error(t + " of length " + r + " expected, got " + i);
        return n;
      }
      function E(...t) {
        let e = 0;
        for (let r = 0; r < t.length; r++) {
          let n = t[r];
          a(n), (e += n.length);
        }
        let r = new Uint8Array(e);
        for (let e = 0, n = 0; e < t.length; e++) {
          let i = t[e];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      let x = (t) => "bigint" == typeof t && n <= t;
      function M(t, e, r) {
        return x(t) && x(e) && x(r) && e <= t && t < r;
      }
      function S(t, e, r, n) {
        if (!M(e, r, n))
          throw Error(
            "expected valid " + t + ": " + r + " <= n < " + n + ", got " + e
          );
      }
      function A(t) {
        let e;
        for (e = 0; t > n; t >>= i, e += 1);
        return e;
      }
      let T = (t) => (o << BigInt(t - 1)) - i,
        R = (t) => new Uint8Array(t),
        P = (t) => Uint8Array.from(t);
      function B(t, e, r) {
        if ("number" != typeof t || t < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof e || e < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof r) throw Error("hmacFn must be a function");
        let n = R(t),
          i = R(t),
          o = 0,
          s = () => {
            n.fill(1), i.fill(0), (o = 0);
          },
          a = (...t) => r(i, n, ...t),
          l = (t = R()) => {
            (i = a(P([0]), t)),
              (n = a()),
              0 !== t.length && ((i = a(P([1]), t)), (n = a()));
          },
          u = () => {
            if (o++ >= 1e3) throw Error("drbg: tried 1000 values");
            let t = 0,
              r = [];
            for (; t < e; ) {
              let e = (n = a()).slice();
              r.push(e), (t += n.length);
            }
            return E(...r);
          };
        return (t, e) => {
          let r;
          for (s(), l(t); !(r = e(u())); ) l();
          return s(), r;
        };
      }
      let k = {
        bigint: (t) => "bigint" == typeof t,
        function: (t) => "function" == typeof t,
        boolean: (t) => "boolean" == typeof t,
        string: (t) => "string" == typeof t,
        stringOrUint8Array: (t) => "string" == typeof t || s(t),
        isSafeInteger: (t) => Number.isSafeInteger(t),
        array: (t) => Array.isArray(t),
        field: (t, e) => e.Fp.isValid(t),
        hash: (t) =>
          "function" == typeof t && Number.isSafeInteger(t.outputLen),
      };
      function L(t, e, r = {}) {
        let n = (e, r, n) => {
          let i = k[r];
          if ("function" != typeof i) throw Error("invalid validator function");
          let o = t[e];
          if ((!n || void 0 !== o) && !i(o, t))
            throw Error(
              "param " + String(e) + " is invalid. Expected " + r + ", got " + o
            );
        };
        for (let [t, r] of Object.entries(e)) n(t, r, !1);
        for (let [t, e] of Object.entries(r)) n(t, e, !0);
        return t;
      }
      function O(t) {
        let e = new WeakMap();
        return (r, ...n) => {
          let i = e.get(r);
          if (void 0 !== i) return i;
          let o = t(r, ...n);
          return e.set(r, o), o;
        };
      }
    },
    23663: function (t, e, r) {
      "use strict";
      r.d(e, {
        UN: function () {
          return L;
        },
      });
      var n = r(56503);
      let i = BigInt(4294967296 - 1),
        o = BigInt(32);
      var s = {
          split: function (t, e = !1) {
            let r = new Uint32Array(t.length),
              n = new Uint32Array(t.length);
            for (let s = 0; s < t.length; s++) {
              let { h: a, l } = (function (t, e = !1) {
                return e
                  ? { h: Number(t & i), l: Number((t >> o) & i) }
                  : { h: 0 | Number((t >> o) & i), l: 0 | Number(t & i) };
              })(t[s], e);
              [r[s], n[s]] = [a, l];
            }
            return [r, n];
          },
          shrSH: (t, e, r) => t >>> r,
          shrSL: (t, e, r) => (t << (32 - r)) | (e >>> r),
          rotrSH: (t, e, r) => (t >>> r) | (e << (32 - r)),
          rotrSL: (t, e, r) => (t << (32 - r)) | (e >>> r),
          rotrBH: (t, e, r) => (t << (64 - r)) | (e >>> (r - 32)),
          rotrBL: (t, e, r) => (t >>> (r - 32)) | (e << (64 - r)),
          add: function (t, e, r, n) {
            let i = (e >>> 0) + (n >>> 0);
            return { h: (t + r + ((i / 4294967296) | 0)) | 0, l: 0 | i };
          },
          add3L: (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0),
          add3H: (t, e, r, n) => (e + r + n + ((t / 4294967296) | 0)) | 0,
          add4L: (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0),
          add4H: (t, e, r, n, i) =>
            (e + r + n + i + ((t / 4294967296) | 0)) | 0,
          add5H: (t, e, r, n, i, o) =>
            (e + r + n + i + o + ((t / 4294967296) | 0)) | 0,
          add5L: (t, e, r, n, i) =>
            (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
        },
        a = r(42491);
      let [l, u] = s.split(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((t) => BigInt(t))
        ),
        c = new Uint32Array(80),
        h = new Uint32Array(80);
      class f extends n.VR {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 1779033703),
            (this.Al = -205731576),
            (this.Bh = -1150833019),
            (this.Bl = -2067093701),
            (this.Ch = 1013904242),
            (this.Cl = -23791573),
            (this.Dh = -1521486534),
            (this.Dl = 1595750129),
            (this.Eh = 1359893119),
            (this.El = -1377402159),
            (this.Fh = -1694144372),
            (this.Fl = 725511199),
            (this.Gh = 528734635),
            (this.Gl = -79577749),
            (this.Hh = 1541459225),
            (this.Hl = 327033209);
        }
        get() {
          let {
            Ah: t,
            Al: e,
            Bh: r,
            Bl: n,
            Ch: i,
            Cl: o,
            Dh: s,
            Dl: a,
            Eh: l,
            El: u,
            Fh: c,
            Fl: h,
            Gh: f,
            Gl: d,
            Hh: p,
            Hl: m,
          } = this;
          return [t, e, r, n, i, o, s, a, l, u, c, h, f, d, p, m];
        }
        set(t, e, r, n, i, o, s, a, l, u, c, h, f, d, p, m) {
          (this.Ah = 0 | t),
            (this.Al = 0 | e),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | s),
            (this.Dl = 0 | a),
            (this.Eh = 0 | l),
            (this.El = 0 | u),
            (this.Fh = 0 | c),
            (this.Fl = 0 | h),
            (this.Gh = 0 | f),
            (this.Gl = 0 | d),
            (this.Hh = 0 | p),
            (this.Hl = 0 | m);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4)
            (c[r] = t.getUint32(e)), (h[r] = t.getUint32((e += 4)));
          for (let t = 16; t < 80; t++) {
            let e = 0 | c[t - 15],
              r = 0 | h[t - 15],
              n = s.rotrSH(e, r, 1) ^ s.rotrSH(e, r, 8) ^ s.shrSH(e, r, 7),
              i = s.rotrSL(e, r, 1) ^ s.rotrSL(e, r, 8) ^ s.shrSL(e, r, 7),
              o = 0 | c[t - 2],
              a = 0 | h[t - 2],
              l = s.rotrSH(o, a, 19) ^ s.rotrBH(o, a, 61) ^ s.shrSH(o, a, 6),
              u = s.rotrSL(o, a, 19) ^ s.rotrBL(o, a, 61) ^ s.shrSL(o, a, 6),
              f = s.add4L(i, u, h[t - 7], h[t - 16]),
              d = s.add4H(f, n, l, c[t - 7], c[t - 16]);
            (c[t] = 0 | d), (h[t] = 0 | f);
          }
          let {
            Ah: r,
            Al: n,
            Bh: i,
            Bl: o,
            Ch: a,
            Cl: f,
            Dh: d,
            Dl: p,
            Eh: m,
            El: g,
            Fh: y,
            Fl: v,
            Gh: w,
            Gl: b,
            Hh: E,
            Hl: x,
          } = this;
          for (let t = 0; t < 80; t++) {
            let e =
                s.rotrSH(m, g, 14) ^ s.rotrSH(m, g, 18) ^ s.rotrBH(m, g, 41),
              M = s.rotrSL(m, g, 14) ^ s.rotrSL(m, g, 18) ^ s.rotrBL(m, g, 41),
              S = (m & y) ^ (~m & w),
              A = (g & v) ^ (~g & b),
              T = s.add5L(x, M, A, u[t], h[t]),
              R = s.add5H(T, E, e, S, l[t], c[t]),
              P = 0 | T,
              B = s.rotrSH(r, n, 28) ^ s.rotrBH(r, n, 34) ^ s.rotrBH(r, n, 39),
              k = s.rotrSL(r, n, 28) ^ s.rotrBL(r, n, 34) ^ s.rotrBL(r, n, 39),
              L = (r & i) ^ (r & a) ^ (i & a),
              O = (n & o) ^ (n & f) ^ (o & f);
            (E = 0 | w),
              (x = 0 | b),
              (w = 0 | y),
              (b = 0 | v),
              (y = 0 | m),
              (v = 0 | g),
              ({ h: m, l: g } = s.add(0 | d, 0 | p, 0 | R, 0 | P)),
              (d = 0 | a),
              (p = 0 | f),
              (a = 0 | i),
              (f = 0 | o),
              (i = 0 | r),
              (o = 0 | n);
            let C = s.add3L(P, k, O);
            (r = s.add3H(C, R, B, L)), (n = 0 | C);
          }
          ({ h: r, l: n } = s.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
            ({ h: i, l: o } = s.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | o)),
            ({ h: a, l: f } = s.add(0 | this.Ch, 0 | this.Cl, 0 | a, 0 | f)),
            ({ h: d, l: p } = s.add(0 | this.Dh, 0 | this.Dl, 0 | d, 0 | p)),
            ({ h: m, l: g } = s.add(0 | this.Eh, 0 | this.El, 0 | m, 0 | g)),
            ({ h: y, l: v } = s.add(0 | this.Fh, 0 | this.Fl, 0 | y, 0 | v)),
            ({ h: w, l: b } = s.add(0 | this.Gh, 0 | this.Gl, 0 | w, 0 | b)),
            ({ h: E, l: x } = s.add(0 | this.Hh, 0 | this.Hl, 0 | E, 0 | x)),
            this.set(r, n, i, o, a, f, d, p, m, g, y, v, w, b, E, x);
        }
        roundClean() {
          c.fill(0), h.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      let d = (0, a.hE)(() => new f());
      var p = r(33024),
        m = r(27665),
        g = r(81025);
      let y = BigInt(0),
        v = BigInt(1),
        w = BigInt(2),
        b = BigInt(8),
        E = { zip215: !0 },
        x = BigInt(
          "57896044618658097711785492504343953926634992332820282019728792003956564819949"
        ),
        M = BigInt(
          "19681161376707505956807079304988542015446066515923890162744021073123829784752"
        ),
        S = BigInt(0),
        A = BigInt(1),
        T = BigInt(2);
      BigInt(3);
      let R = BigInt(5),
        P = BigInt(8);
      function B(t, e) {
        let r = (0, m.wQ)(e * e * e, x),
          n = (function (t) {
            let e = BigInt(10),
              r = BigInt(20),
              n = BigInt(40),
              i = BigInt(80),
              o = (((t * t) % x) * t) % x,
              s = ((0, m.oA)(o, T, x) * o) % x,
              a = ((0, m.oA)(s, A, x) * t) % x,
              l = ((0, m.oA)(a, R, x) * a) % x,
              u = ((0, m.oA)(l, e, x) * l) % x,
              c = ((0, m.oA)(u, r, x) * u) % x,
              h = ((0, m.oA)(c, n, x) * c) % x,
              f = ((0, m.oA)(h, i, x) * h) % x,
              d = ((0, m.oA)(f, i, x) * h) % x,
              p = ((0, m.oA)(d, e, x) * l) % x;
            return { pow_p_5_8: ((0, m.oA)(p, T, x) * t) % x, b2: o };
          })(t * (0, m.wQ)(r * r * e, x)).pow_p_5_8,
          i = (0, m.wQ)(t * r * n, x),
          o = (0, m.wQ)(e * i * i, x),
          s = i,
          a = (0, m.wQ)(i * M, x),
          l = o === t,
          u = o === (0, m.wQ)(-t, x),
          c = o === (0, m.wQ)(-t * M, x);
        return (
          l && (i = s),
          (u || c) && (i = a),
          (0, m.Tu)(i, x) && (i = (0, m.wQ)(-i, x)),
          { isValid: l || u, value: i }
        );
      }
      let k = (0, m.gN)(x, void 0, !0),
        L = (function (t) {
          let e = (function (t) {
              let e = (0, p.Kd)(t);
              return (
                g.FF(
                  t,
                  {
                    hash: "function",
                    a: "bigint",
                    d: "bigint",
                    randomBytes: "function",
                  },
                  {
                    adjustScalarBytes: "function",
                    domain: "function",
                    uvRatio: "function",
                    mapToCurve: "function",
                  }
                ),
                Object.freeze({ ...e })
              );
            })(t),
            {
              Fp: r,
              n: n,
              prehash: i,
              hash: o,
              randomBytes: s,
              nByteLength: a,
              h: l,
            } = e,
            u = w << (BigInt(8 * a) - v),
            c = r.create,
            h = (0, m.gN)(e.n, e.nBitLength),
            f =
              e.uvRatio ||
              ((t, e) => {
                try {
                  return { isValid: !0, value: r.sqrt(t * r.inv(e)) };
                } catch (t) {
                  return { isValid: !1, value: y };
                }
              }),
            d = e.adjustScalarBytes || ((t) => t),
            x =
              e.domain ||
              ((t, e, r) => {
                if (((0, g.uw)("phflag", r), e.length || r))
                  throw Error("Contexts/pre-hash are not supported");
                return t;
              });
          function M(t, e) {
            g.Fy("coordinate " + t, e, y, u);
          }
          function S(t) {
            if (!(t instanceof R)) throw Error("ExtendedPoint expected");
          }
          let A = (0, g.H9)((t, e) => {
              let { ex: n, ey: i, ez: o } = t,
                s = t.is0();
              null == e && (e = s ? b : r.inv(o));
              let a = c(n * e),
                l = c(i * e),
                u = c(o * e);
              if (s) return { x: y, y: v };
              if (u !== v) throw Error("invZ was invalid");
              return { x: a, y: l };
            }),
            T = (0, g.H9)((t) => {
              let { a: r, d: n } = e;
              if (t.is0()) throw Error("bad point: ZERO");
              let { ex: i, ey: o, ez: s, et: a } = t,
                l = c(i * i),
                u = c(o * o),
                h = c(s * s),
                f = c(h * h),
                d = c(l * r);
              if (c(h * c(d + u)) !== c(f + c(n * c(l * u))))
                throw Error("bad point: equation left != right (1)");
              if (c(i * o) !== c(s * a))
                throw Error("bad point: equation left != right (2)");
              return !0;
            });
          class R {
            constructor(t, e, r, n) {
              (this.ex = t),
                (this.ey = e),
                (this.ez = r),
                (this.et = n),
                M("x", t),
                M("y", e),
                M("z", r),
                M("t", n),
                Object.freeze(this);
            }
            get x() {
              return this.toAffine().x;
            }
            get y() {
              return this.toAffine().y;
            }
            static fromAffine(t) {
              if (t instanceof R) throw Error("extended point not allowed");
              let { x: e, y: r } = t || {};
              return M("x", e), M("y", r), new R(e, r, v, c(e * r));
            }
            static normalizeZ(t) {
              let e = r.invertBatch(t.map((t) => t.ez));
              return t.map((t, r) => t.toAffine(e[r])).map(R.fromAffine);
            }
            static msm(t, e) {
              return (0, p.D1)(R, h, t, e);
            }
            _setWindowSize(t) {
              k.setWindowSize(this, t);
            }
            assertValidity() {
              T(this);
            }
            equals(t) {
              S(t);
              let { ex: e, ey: r, ez: n } = this,
                { ex: i, ey: o, ez: s } = t,
                a = c(e * s),
                l = c(i * n),
                u = c(r * s),
                h = c(o * n);
              return a === l && u === h;
            }
            is0() {
              return this.equals(R.ZERO);
            }
            negate() {
              return new R(c(-this.ex), this.ey, this.ez, c(-this.et));
            }
            double() {
              let { a: t } = e,
                { ex: r, ey: n, ez: i } = this,
                o = c(r * r),
                s = c(n * n),
                a = c(w * c(i * i)),
                l = c(t * o),
                u = r + n,
                h = c(c(u * u) - o - s),
                f = l + s,
                d = f - a,
                p = l - s,
                m = c(h * d),
                g = c(f * p),
                y = c(h * p);
              return new R(m, g, c(d * f), y);
            }
            add(t) {
              S(t);
              let { a: r, d: n } = e,
                { ex: i, ey: o, ez: s, et: a } = this,
                { ex: l, ey: u, ez: h, et: f } = t;
              if (r === BigInt(-1)) {
                let t = c((o - i) * (u + l)),
                  e = c((o + i) * (u - l)),
                  r = c(e - t);
                if (r === y) return this.double();
                let n = c(s * w * f),
                  d = c(a * w * h),
                  p = d + n,
                  m = e + t,
                  g = d - n,
                  v = c(p * r),
                  b = c(m * g),
                  E = c(p * g);
                return new R(v, b, c(r * m), E);
              }
              let d = c(i * l),
                p = c(o * u),
                m = c(a * n * f),
                g = c(s * h),
                v = c((i + o) * (l + u) - d - p),
                b = g - m,
                E = g + m,
                x = c(p - r * d),
                M = c(v * b),
                A = c(E * x),
                T = c(v * x);
              return new R(M, A, c(b * E), T);
            }
            subtract(t) {
              return this.add(t.negate());
            }
            wNAF(t) {
              return k.wNAFCached(this, t, R.normalizeZ);
            }
            multiply(t) {
              g.Fy("scalar", t, v, n);
              let { p: e, f: r } = this.wNAF(t);
              return R.normalizeZ([e, r])[0];
            }
            multiplyUnsafe(t, e = R.ZERO) {
              return (g.Fy("scalar", t, y, n), t === y)
                ? B
                : this.is0() || t === v
                ? this
                : k.wNAFCachedUnsafe(this, t, R.normalizeZ, e);
            }
            isSmallOrder() {
              return this.multiplyUnsafe(l).is0();
            }
            isTorsionFree() {
              return k.unsafeLadder(this, n).is0();
            }
            toAffine(t) {
              return A(this, t);
            }
            clearCofactor() {
              let { h: t } = e;
              return t === v ? this : this.multiplyUnsafe(t);
            }
            static fromHex(t, n = !1) {
              let { d: i, a: o } = e,
                s = r.BYTES;
              (t = (0, g.ql)("pointHex", t, s)), (0, g.uw)("zip215", n);
              let a = t.slice(),
                l = t[s - 1];
              a[s - 1] = -129 & l;
              let h = g.ty(a),
                d = n ? u : r.ORDER;
              g.Fy("pointHex.y", h, y, d);
              let p = c(h * h),
                { isValid: m, value: w } = f(c(p - v), c(i * p - o));
              if (!m) throw Error("Point.fromHex: invalid y coordinate");
              let b = (w & v) === v,
                E = (128 & l) != 0;
              if (!n && w === y && E)
                throw Error("Point.fromHex: x=0 and x_0=1");
              return E !== b && (w = c(-w)), R.fromAffine({ x: w, y: h });
            }
            static fromPrivateKey(t) {
              return O(t).point;
            }
            toRawBytes() {
              let { x: t, y: e } = this.toAffine(),
                n = g.S5(e, r.BYTES);
              return (n[n.length - 1] |= t & v ? 128 : 0), n;
            }
            toHex() {
              return g.ci(this.toRawBytes());
            }
          }
          (R.BASE = new R(e.Gx, e.Gy, v, c(e.Gx * e.Gy))),
            (R.ZERO = new R(y, v, v, y));
          let { BASE: P, ZERO: B } = R,
            k = (0, p.Mx)(R, 8 * a);
          function L(t) {
            var e;
            return (e = g.ty(t)), (0, m.wQ)(e, n);
          }
          function O(t) {
            let e = r.BYTES;
            t = (0, g.ql)("private key", t, e);
            let n = (0, g.ql)("hashed private key", o(t), 2 * e),
              i = d(n.slice(0, e)),
              s = n.slice(e, 2 * e),
              a = L(i),
              l = P.multiply(a),
              u = l.toRawBytes();
            return { head: i, prefix: s, scalar: a, point: l, pointBytes: u };
          }
          function C(t = new Uint8Array(), ...e) {
            return L(o(x(g.eV(...e), (0, g.ql)("context", t), !!i)));
          }
          return (
            P._setWindowSize(8),
            {
              CURVE: e,
              getPublicKey: function (t) {
                return O(t).pointBytes;
              },
              sign: function (t, e, o = {}) {
                var s;
                (t = (0, g.ql)("message", t)), i && (t = i(t));
                let { prefix: a, scalar: l, pointBytes: u } = O(e),
                  c = C(o.context, a, t),
                  h = P.multiply(c).toRawBytes(),
                  f = ((s = c + C(o.context, h, u, t) * l), (0, m.wQ)(s, n));
                g.Fy("signature.s", f, y, n);
                let d = g.eV(h, g.S5(f, r.BYTES));
                return (0, g.ql)("result", d, 2 * r.BYTES);
              },
              verify: function (t, e, n, o = E) {
                let s, a, l;
                let { context: u, zip215: c } = o,
                  h = r.BYTES;
                (t = (0, g.ql)("signature", t, 2 * h)),
                  (e = (0, g.ql)("message", e)),
                  (n = (0, g.ql)("publicKey", n, h)),
                  void 0 !== c && (0, g.uw)("zip215", c),
                  i && (e = i(e));
                let f = g.ty(t.slice(h, 2 * h));
                try {
                  (s = R.fromHex(n, c)),
                    (a = R.fromHex(t.slice(0, h), c)),
                    (l = P.multiplyUnsafe(f));
                } catch (t) {
                  return !1;
                }
                if (!c && s.isSmallOrder()) return !1;
                let d = C(u, a.toRawBytes(), s.toRawBytes(), e);
                return a
                  .add(s.multiplyUnsafe(d))
                  .subtract(l)
                  .clearCofactor()
                  .equals(R.ZERO);
              },
              ExtendedPoint: R,
              utils: {
                getExtendedPublicKey: O,
                randomPrivateKey: () => s(r.BYTES),
                precompute: (t = 8, e = R.BASE) => (
                  e._setWindowSize(t), e.multiply(BigInt(3)), e
                ),
              },
            }
          );
        })({
          a: BigInt(-1),
          d: BigInt(
            "37095705934669439343138083508754565189542113879843219016388785533085940283555"
          ),
          Fp: k,
          n: BigInt(
            "7237005577332262213973186563042994240857116359379907606001950938285454250989"
          ),
          h: P,
          Gx: BigInt(
            "15112221349535400772501151409588531511454012693041857206046113283949847762202"
          ),
          Gy: BigInt(
            "46316835694926478169428394003475163141307993866256225615783033603165251855960"
          ),
          hash: d,
          randomBytes: a.O6,
          adjustScalarBytes: function (t) {
            return (t[0] &= 248), (t[31] &= 127), (t[31] |= 64), t;
          },
          uvRatio: B,
        });
      function O(t) {
        if (!(t instanceof D)) throw Error("RistrettoPoint expected");
      }
      let C = (t) => B(A, t),
        I = (t) => L.CURVE.Fp.create(null & bytesToNumberLE(t));
      function F(t) {
        let { d: e } = L.CURVE,
          r = L.CURVE.Fp.ORDER,
          n = L.CURVE.Fp.create,
          i = n(null * t * t),
          o = n((i + A) * null),
          s = BigInt(-1),
          a = n((s - e * i) * n(i + e)),
          { isValid: l, value: u } = B(o, a),
          c = n(u * t);
        isNegativeLE(c, r) || (c = n(-c)), l || (u = c), l || (s = i);
        let h = n(s * (i - A) * null - a),
          f = u * u,
          d = n((u + u) * a),
          p = n(null * h),
          m = n(A - f),
          g = n(A + f);
        return new L.ExtendedPoint(n(d * g), n(m * p), n(p * g), n(d * m));
      }
      class D {
        constructor(t) {
          this.ep = t;
        }
        static fromAffine(t) {
          return new D(L.ExtendedPoint.fromAffine(t));
        }
        static hashToCurve(t) {
          let e = F(I((t = ensureBytes("ristrettoHash", t, 64)).slice(0, 32))),
            r = F(I(t.slice(32, 64)));
          return new D(e.add(r));
        }
        static fromHex(t) {
          t = ensureBytes("ristrettoHex", t, 32);
          let { a: e, d: r } = L.CURVE,
            n = L.CURVE.Fp.ORDER,
            i = L.CURVE.Fp.create,
            o =
              "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint",
            s = I(t);
          if (!equalBytes(numberToBytesLE(s, 32), t) || isNegativeLE(s, n))
            throw Error(o);
          let a = i(s * s),
            l = i(A + e * a),
            u = i(A - e * a),
            c = i(l * l),
            h = i(u * u),
            f = i(e * r * c - h),
            { isValid: d, value: p } = C(i(f * h)),
            m = i(p * u),
            g = i(p * m * f),
            y = i((s + s) * m);
          isNegativeLE(y, n) && (y = i(-y));
          let v = i(l * g),
            w = i(y * v);
          if (!d || isNegativeLE(w, n) || v === S) throw Error(o);
          return new D(new L.ExtendedPoint(y, v, A, w));
        }
        static msm(t, e) {
          return pippenger(D, Field(L.CURVE.n, L.CURVE.nBitLength), t, e);
        }
        toRawBytes() {
          let t,
            { ex: e, ey: r, ez: n, et: i } = this.ep,
            o = L.CURVE.Fp.ORDER,
            s = L.CURVE.Fp.create,
            a = s(s(n + r) * s(n - r)),
            l = s(e * r),
            u = s(l * l),
            { value: c } = C(s(a * u)),
            h = s(c * a),
            f = s(c * l),
            d = s(h * f * i);
          if (isNegativeLE(i * d, o)) {
            let n = s(null * r),
              i = s(null * e);
            (e = n), (r = i), (t = s(null * h));
          } else t = f;
          isNegativeLE(e * d, o) && (r = s(-r));
          let p = s((n - r) * t);
          return isNegativeLE(p, o) && (p = s(-p)), numberToBytesLE(p, 32);
        }
        toHex() {
          return bytesToHex(this.toRawBytes());
        }
        toString() {
          return this.toHex();
        }
        equals(t) {
          O(t);
          let { ex: e, ey: r } = this.ep,
            { ex: n, ey: i } = t.ep,
            o = L.CURVE.Fp.create,
            s = o(e * i) === o(r * n),
            a = o(r * i) === o(e * n);
          return s || a;
        }
        add(t) {
          return O(t), new D(this.ep.add(t.ep));
        }
        subtract(t) {
          return O(t), new D(this.ep.subtract(t.ep));
        }
        multiply(t) {
          return new D(this.ep.multiply(t));
        }
        multiplyUnsafe(t) {
          return new D(this.ep.multiplyUnsafe(t));
        }
        double() {
          return new D(this.ep.double());
        }
        negate() {
          return new D(this.ep.negate());
        }
      }
    },
    40412: function (t, e, r) {
      "use strict";
      r.d(e, {
        kA: function () {
          return k;
        },
      });
      var n = r(56503),
        i = r(42491);
      let o = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        s = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        a = new Uint32Array(64);
      class l extends n.VR {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | s[0]),
            (this.B = 0 | s[1]),
            (this.C = 0 | s[2]),
            (this.D = 0 | s[3]),
            (this.E = 0 | s[4]),
            (this.F = 0 | s[5]),
            (this.G = 0 | s[6]),
            (this.H = 0 | s[7]);
        }
        get() {
          let { A: t, B: e, C: r, D: n, E: i, F: o, G: s, H: a } = this;
          return [t, e, r, n, i, o, s, a];
        }
        set(t, e, r, n, i, o, s, a) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | a);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4) a[r] = t.getUint32(e, !1);
          for (let t = 16; t < 64; t++) {
            let e = a[t - 15],
              r = a[t - 2],
              n = (0, i.np)(e, 7) ^ (0, i.np)(e, 18) ^ (e >>> 3),
              o = (0, i.np)(r, 17) ^ (0, i.np)(r, 19) ^ (r >>> 10);
            a[t] = (o + a[t - 7] + n + a[t - 16]) | 0;
          }
          let { A: r, B: s, C: l, D: u, E: c, F: h, G: f, H: d } = this;
          for (let t = 0; t < 64; t++) {
            let e =
                (d +
                  ((0, i.np)(c, 6) ^ (0, i.np)(c, 11) ^ (0, i.np)(c, 25)) +
                  (0, n.bc)(c, h, f) +
                  o[t] +
                  a[t]) |
                0,
              p =
                (((0, i.np)(r, 2) ^ (0, i.np)(r, 13) ^ (0, i.np)(r, 22)) +
                  (0, n.l3)(r, s, l)) |
                0;
            (d = f),
              (f = h),
              (h = c),
              (c = (u + e) | 0),
              (u = l),
              (l = s),
              (s = r),
              (r = (e + p) | 0);
          }
          (r = (r + this.A) | 0),
            (s = (s + this.B) | 0),
            (l = (l + this.C) | 0),
            (u = (u + this.D) | 0),
            (c = (c + this.E) | 0),
            (h = (h + this.F) | 0),
            (f = (f + this.G) | 0),
            (d = (d + this.H) | 0),
            this.set(r, s, l, u, c, h, f, d);
        }
        roundClean() {
          a.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let u = (0, i.hE)(() => new l());
      var c = r(66075);
      class h extends i.kb {
        constructor(t, e) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, c.z3)(t);
          let r = (0, i.O0)(e);
          if (
            ((this.iHash = t.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let n = this.blockLen,
            o = new Uint8Array(n);
          o.set(r.length > n ? t.create().update(r).digest() : r);
          for (let t = 0; t < o.length; t++) o[t] ^= 54;
          this.iHash.update(o), (this.oHash = t.create());
          for (let t = 0; t < o.length; t++) o[t] ^= 106;
          this.oHash.update(o), o.fill(0);
        }
        update(t) {
          return (0, c.$h)(this), this.iHash.update(t), this;
        }
        digestInto(t) {
          (0, c.$h)(this),
            (0, c.gk)(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy();
        }
        digest() {
          let t = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(t), t;
        }
        _cloneInto(t) {
          t || (t = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: e,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (t.finished = n),
            (t.destroyed = i),
            (t.blockLen = o),
            (t.outputLen = s),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = r._cloneInto(t.iHash)),
            t
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let f = (t, e, r) => new h(t, e).update(r).digest();
      f.create = (t, e) => new h(t, e);
      var d = r(33024),
        p = r(27665),
        m = r(81025);
      function g(t) {
        void 0 !== t.lowS && (0, m.uw)("lowS", t.lowS),
          void 0 !== t.prehash && (0, m.uw)("prehash", t.prehash);
      }
      let { bytesToNumberBE: y, hexToBytes: v } = m;
      class w extends Error {
        constructor(t = "") {
          super(t);
        }
      }
      let b = {
          Err: w,
          _tlv: {
            encode: (t, e) => {
              let { Err: r } = b;
              if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
              if (1 & e.length) throw new r("tlv.encode: unpadded data");
              let n = e.length / 2,
                i = m.uz(n);
              if ((i.length / 2) & 128)
                throw new r("tlv.encode: long form length too big");
              let o = n > 127 ? m.uz((i.length / 2) | 128) : "";
              return m.uz(t) + o + i + e;
            },
            decode(t, e) {
              let { Err: r } = b,
                n = 0;
              if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
              if (e.length < 2 || e[n++] !== t)
                throw new r("tlv.decode: wrong tlv");
              let i = e[n++],
                o = 0;
              if (128 & i) {
                let t = 127 & i;
                if (!t)
                  throw new r(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (t > 4)
                  throw new r("tlv.decode(long): byte length is too big");
                let s = e.subarray(n, n + t);
                if (s.length !== t)
                  throw new r("tlv.decode: length bytes not complete");
                if (0 === s[0])
                  throw new r("tlv.decode(long): zero leftmost byte");
                for (let t of s) o = (o << 8) | t;
                if (((n += t), o < 128))
                  throw new r("tlv.decode(long): not minimal encoding");
              } else o = i;
              let s = e.subarray(n, n + o);
              if (s.length !== o) throw new r("tlv.decode: wrong value length");
              return { v: s, l: e.subarray(n + o) };
            },
          },
          _int: {
            encode(t) {
              let { Err: e } = b;
              if (t < E)
                throw new e("integer: negative integers are not allowed");
              let r = m.uz(t);
              if (
                (8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length)
              )
                throw new e("unexpected DER parsing assertion: unpadded hex");
              return r;
            },
            decode(t) {
              let { Err: e } = b;
              if (128 & t[0])
                throw new e("invalid signature integer: negative");
              if (0 === t[0] && !(128 & t[1]))
                throw new e(
                  "invalid signature integer: unnecessary leading zero"
                );
              return y(t);
            },
          },
          toSig(t) {
            let { Err: e, _int: r, _tlv: n } = b,
              i = "string" == typeof t ? v(t) : t;
            m.gk(i);
            let { v: o, l: s } = n.decode(48, i);
            if (s.length)
              throw new e("invalid signature: left bytes after parsing");
            let { v: a, l: l } = n.decode(2, o),
              { v: u, l: c } = n.decode(2, l);
            if (c.length)
              throw new e("invalid signature: left bytes after parsing");
            return { r: r.decode(a), s: r.decode(u) };
          },
          hexFromSig(t) {
            let { _tlv: e, _int: r } = b,
              n = e.encode(2, r.encode(t.r)),
              i = e.encode(2, r.encode(t.s));
            return e.encode(48, n + i);
          },
        },
        E = BigInt(0),
        x = BigInt(1),
        M = (BigInt(2), BigInt(3));
      BigInt(4);
      let S = BigInt(
          "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
        ),
        A = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        T = BigInt(1),
        R = BigInt(2),
        P = (t, e) => (t + e / R) / e,
        B = (0, p.gN)(S, void 0, void 0, {
          sqrt: function (t) {
            let e = BigInt(3),
              r = BigInt(6),
              n = BigInt(11),
              i = BigInt(22),
              o = BigInt(23),
              s = BigInt(44),
              a = BigInt(88),
              l = (t * t * t) % S,
              u = (l * l * t) % S,
              c = ((0, p.oA)(u, e, S) * u) % S,
              h = ((0, p.oA)(c, e, S) * u) % S,
              f = ((0, p.oA)(h, R, S) * l) % S,
              d = ((0, p.oA)(f, n, S) * f) % S,
              m = ((0, p.oA)(d, i, S) * d) % S,
              g = ((0, p.oA)(m, s, S) * m) % S,
              y = ((0, p.oA)(g, a, S) * g) % S,
              v = ((0, p.oA)(y, s, S) * m) % S,
              w = ((0, p.oA)(v, e, S) * u) % S,
              b = ((0, p.oA)(w, o, S) * d) % S,
              E = ((0, p.oA)(b, r, S) * l) % S,
              x = (0, p.oA)(E, R, S);
            if (!B.eql(B.sqr(x), t)) throw Error("Cannot find square root");
            return x;
          },
        }),
        k = (function (t, e) {
          let r = (e) =>
            (function (t) {
              let e = (function (t) {
                  let e = (0, d.Kd)(t);
                  return (
                    m.FF(
                      e,
                      {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function",
                      },
                      {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean",
                      }
                    ),
                    Object.freeze({ lowS: !0, ...e })
                  );
                })(t),
                { Fp: r, n: n } = e,
                i = r.BYTES + 1,
                o = 2 * r.BYTES + 1;
              function s(t) {
                return p.wQ(t, n);
              }
              function a(t) {
                return p.U_(t, n);
              }
              let {
                  ProjectivePoint: l,
                  normPrivateKeyToScalar: u,
                  weierstrassEquation: c,
                  isWithinCurveOrder: h,
                } = (function (t) {
                  let e = (function (t) {
                      let e = (0, d.Kd)(t);
                      m.FF(
                        e,
                        { a: "field", b: "field" },
                        {
                          allowedPrivateKeyLengths: "array",
                          wrapPrivateKey: "boolean",
                          isTorsionFree: "function",
                          clearCofactor: "function",
                          allowInfinityPoint: "boolean",
                          fromBytes: "function",
                          toBytes: "function",
                        }
                      );
                      let { endo: r, Fp: n, a: i } = e;
                      if (r) {
                        if (!n.eql(i, n.ZERO))
                          throw Error(
                            "invalid endomorphism, can only be defined for Koblitz curves that have a=0"
                          );
                        if (
                          "object" != typeof r ||
                          "bigint" != typeof r.beta ||
                          "function" != typeof r.splitScalar
                        )
                          throw Error(
                            "invalid endomorphism, expected beta: bigint and splitScalar: function"
                          );
                      }
                      return Object.freeze({ ...e });
                    })(t),
                    { Fp: r } = e,
                    n = p.gN(e.n, e.nBitLength),
                    i =
                      e.toBytes ||
                      ((t, e, n) => {
                        let i = e.toAffine();
                        return m.eV(
                          Uint8Array.from([4]),
                          r.toBytes(i.x),
                          r.toBytes(i.y)
                        );
                      }),
                    o =
                      e.fromBytes ||
                      ((t) => {
                        let e = t.subarray(1);
                        return {
                          x: r.fromBytes(e.subarray(0, r.BYTES)),
                          y: r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES)),
                        };
                      });
                  function s(t) {
                    let { a: n, b: i } = e,
                      o = r.sqr(t),
                      s = r.mul(o, t);
                    return r.add(r.add(s, r.mul(t, n)), i);
                  }
                  if (!r.eql(r.sqr(e.Gy), s(e.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function a(t) {
                    let r;
                    let {
                      allowedPrivateKeyLengths: n,
                      nByteLength: i,
                      wrapPrivateKey: o,
                      n: s,
                    } = e;
                    if (n && "bigint" != typeof t) {
                      if (
                        (m._t(t) && (t = m.ci(t)),
                        "string" != typeof t || !n.includes(t.length))
                      )
                        throw Error("invalid private key");
                      t = t.padStart(2 * i, "0");
                    }
                    try {
                      r =
                        "bigint" == typeof t
                          ? t
                          : m.bytesToNumberBE((0, m.ql)("private key", t, i));
                    } catch (e) {
                      throw Error(
                        "invalid private key, expected hex or " +
                          i +
                          " bytes, got " +
                          typeof t
                      );
                    }
                    return (
                      o && (r = p.wQ(r, s)), m.Fy("private key", r, x, s), r
                    );
                  }
                  function l(t) {
                    if (!(t instanceof h))
                      throw Error("ProjectivePoint expected");
                  }
                  let u = (0, m.H9)((t, e) => {
                      let { px: n, py: i, pz: o } = t;
                      if (r.eql(o, r.ONE)) return { x: n, y: i };
                      let s = t.is0();
                      null == e && (e = s ? r.ONE : r.inv(o));
                      let a = r.mul(n, e),
                        l = r.mul(i, e),
                        u = r.mul(o, e);
                      if (s) return { x: r.ZERO, y: r.ZERO };
                      if (!r.eql(u, r.ONE)) throw Error("invZ was invalid");
                      return { x: a, y: l };
                    }),
                    c = (0, m.H9)((t) => {
                      if (t.is0()) {
                        if (e.allowInfinityPoint && !r.is0(t.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: n, y: i } = t.toAffine();
                      if (!r.isValid(n) || !r.isValid(i))
                        throw Error("bad point: x or y not FE");
                      let o = r.sqr(i),
                        a = s(n);
                      if (!r.eql(o, a))
                        throw Error("bad point: equation left != right");
                      if (!t.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  class h {
                    constructor(t, e, n) {
                      if (
                        ((this.px = t),
                        (this.py = e),
                        (this.pz = n),
                        null == t || !r.isValid(t))
                      )
                        throw Error("x required");
                      if (null == e || !r.isValid(e)) throw Error("y required");
                      if (null == n || !r.isValid(n)) throw Error("z required");
                      Object.freeze(this);
                    }
                    static fromAffine(t) {
                      let { x: e, y: n } = t || {};
                      if (!t || !r.isValid(e) || !r.isValid(n))
                        throw Error("invalid affine point");
                      if (t instanceof h)
                        throw Error("projective point not allowed");
                      let i = (t) => r.eql(t, r.ZERO);
                      return i(e) && i(n) ? h.ZERO : new h(e, n, r.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(t) {
                      let e = r.invertBatch(t.map((t) => t.pz));
                      return t
                        .map((t, r) => t.toAffine(e[r]))
                        .map(h.fromAffine);
                    }
                    static fromHex(t) {
                      let e = h.fromAffine(o((0, m.ql)("pointHex", t)));
                      return e.assertValidity(), e;
                    }
                    static fromPrivateKey(t) {
                      return h.BASE.multiply(a(t));
                    }
                    static msm(t, e) {
                      return (0, d.D1)(h, n, t, e);
                    }
                    _setWindowSize(t) {
                      g.setWindowSize(this, t);
                    }
                    assertValidity() {
                      c(this);
                    }
                    hasEvenY() {
                      let { y: t } = this.toAffine();
                      if (r.isOdd) return !r.isOdd(t);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(t) {
                      l(t);
                      let { px: e, py: n, pz: i } = this,
                        { px: o, py: s, pz: a } = t,
                        u = r.eql(r.mul(e, a), r.mul(o, i)),
                        c = r.eql(r.mul(n, a), r.mul(s, i));
                      return u && c;
                    }
                    negate() {
                      return new h(this.px, r.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: t, b: n } = e,
                        i = r.mul(n, M),
                        { px: o, py: s, pz: a } = this,
                        l = r.ZERO,
                        u = r.ZERO,
                        c = r.ZERO,
                        f = r.mul(o, o),
                        d = r.mul(s, s),
                        p = r.mul(a, a),
                        m = r.mul(o, s);
                      return (
                        (m = r.add(m, m)),
                        (c = r.mul(o, a)),
                        (c = r.add(c, c)),
                        (l = r.mul(t, c)),
                        (u = r.mul(i, p)),
                        (u = r.add(l, u)),
                        (l = r.sub(d, u)),
                        (u = r.add(d, u)),
                        (u = r.mul(l, u)),
                        (l = r.mul(m, l)),
                        (c = r.mul(i, c)),
                        (p = r.mul(t, p)),
                        (m = r.sub(f, p)),
                        (m = r.mul(t, m)),
                        (m = r.add(m, c)),
                        (c = r.add(f, f)),
                        (f = r.add(c, f)),
                        (f = r.add(f, p)),
                        (f = r.mul(f, m)),
                        (u = r.add(u, f)),
                        (p = r.mul(s, a)),
                        (p = r.add(p, p)),
                        (f = r.mul(p, m)),
                        (l = r.sub(l, f)),
                        (c = r.mul(p, d)),
                        (c = r.add(c, c)),
                        new h(l, u, (c = r.add(c, c)))
                      );
                    }
                    add(t) {
                      l(t);
                      let { px: n, py: i, pz: o } = this,
                        { px: s, py: a, pz: u } = t,
                        c = r.ZERO,
                        f = r.ZERO,
                        d = r.ZERO,
                        p = e.a,
                        m = r.mul(e.b, M),
                        g = r.mul(n, s),
                        y = r.mul(i, a),
                        v = r.mul(o, u),
                        w = r.add(n, i),
                        b = r.add(s, a);
                      (w = r.mul(w, b)),
                        (b = r.add(g, y)),
                        (w = r.sub(w, b)),
                        (b = r.add(n, o));
                      let E = r.add(s, u);
                      return (
                        (b = r.mul(b, E)),
                        (E = r.add(g, v)),
                        (b = r.sub(b, E)),
                        (E = r.add(i, o)),
                        (c = r.add(a, u)),
                        (E = r.mul(E, c)),
                        (c = r.add(y, v)),
                        (E = r.sub(E, c)),
                        (d = r.mul(p, b)),
                        (c = r.mul(m, v)),
                        (d = r.add(c, d)),
                        (c = r.sub(y, d)),
                        (d = r.add(y, d)),
                        (f = r.mul(c, d)),
                        (y = r.add(g, g)),
                        (y = r.add(y, g)),
                        (v = r.mul(p, v)),
                        (b = r.mul(m, b)),
                        (y = r.add(y, v)),
                        (v = r.sub(g, v)),
                        (v = r.mul(p, v)),
                        (b = r.add(b, v)),
                        (g = r.mul(y, b)),
                        (f = r.add(f, g)),
                        (g = r.mul(E, b)),
                        (c = r.mul(w, c)),
                        (c = r.sub(c, g)),
                        (g = r.mul(w, y)),
                        (d = r.mul(E, d)),
                        new h(c, f, (d = r.add(d, g)))
                      );
                    }
                    subtract(t) {
                      return this.add(t.negate());
                    }
                    is0() {
                      return this.equals(h.ZERO);
                    }
                    wNAF(t) {
                      return g.wNAFCached(this, t, h.normalizeZ);
                    }
                    multiplyUnsafe(t) {
                      let { endo: n, n: i } = e;
                      m.Fy("scalar", t, E, i);
                      let o = h.ZERO;
                      if (t === E) return o;
                      if (this.is0() || t === x) return this;
                      if (!n || g.hasPrecomputes(this))
                        return g.wNAFCachedUnsafe(this, t, h.normalizeZ);
                      let {
                          k1neg: s,
                          k1: a,
                          k2neg: l,
                          k2: u,
                        } = n.splitScalar(t),
                        c = o,
                        f = o,
                        d = this;
                      for (; a > E || u > E; )
                        a & x && (c = c.add(d)),
                          u & x && (f = f.add(d)),
                          (d = d.double()),
                          (a >>= x),
                          (u >>= x);
                      return (
                        s && (c = c.negate()),
                        l && (f = f.negate()),
                        (f = new h(r.mul(f.px, n.beta), f.py, f.pz)),
                        c.add(f)
                      );
                    }
                    multiply(t) {
                      let n, i;
                      let { endo: o, n: s } = e;
                      if ((m.Fy("scalar", t, x, s), o)) {
                        let {
                            k1neg: e,
                            k1: s,
                            k2neg: a,
                            k2: l,
                          } = o.splitScalar(t),
                          { p: u, f: c } = this.wNAF(s),
                          { p: f, f: d } = this.wNAF(l);
                        (u = g.constTimeNegate(e, u)),
                          (f = g.constTimeNegate(a, f)),
                          (f = new h(r.mul(f.px, o.beta), f.py, f.pz)),
                          (n = u.add(f)),
                          (i = c.add(d));
                      } else {
                        let { p: e, f: r } = this.wNAF(t);
                        (n = e), (i = r);
                      }
                      return h.normalizeZ([n, i])[0];
                    }
                    multiplyAndAddUnsafe(t, e, r) {
                      let n = h.BASE,
                        i = (t, e) =>
                          e !== E && e !== x && t.equals(n)
                            ? t.multiply(e)
                            : t.multiplyUnsafe(e),
                        o = i(this, e).add(i(t, r));
                      return o.is0() ? void 0 : o;
                    }
                    toAffine(t) {
                      return u(this, t);
                    }
                    isTorsionFree() {
                      let { h: t, isTorsionFree: r } = e;
                      if (t === x) return !0;
                      if (r) return r(h, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: t, clearCofactor: r } = e;
                      return t === x
                        ? this
                        : r
                        ? r(h, this)
                        : this.multiplyUnsafe(e.h);
                    }
                    toRawBytes(t = !0) {
                      return (
                        (0, m.uw)("isCompressed", t),
                        this.assertValidity(),
                        i(h, this, t)
                      );
                    }
                    toHex(t = !0) {
                      return (
                        (0, m.uw)("isCompressed", t), m.ci(this.toRawBytes(t))
                      );
                    }
                  }
                  (h.BASE = new h(e.Gx, e.Gy, r.ONE)),
                    (h.ZERO = new h(r.ZERO, r.ONE, r.ZERO));
                  let f = e.nBitLength,
                    g = (0, d.Mx)(h, e.endo ? Math.ceil(f / 2) : f);
                  return {
                    CURVE: e,
                    ProjectivePoint: h,
                    normPrivateKeyToScalar: a,
                    weierstrassEquation: s,
                    isWithinCurveOrder: function (t) {
                      return m.Z2(t, x, e.n);
                    },
                  };
                })({
                  ...e,
                  toBytes(t, e, n) {
                    let i = e.toAffine(),
                      o = r.toBytes(i.x),
                      s = m.eV;
                    return ((0, m.uw)("isCompressed", n), n)
                      ? s(Uint8Array.from([e.hasEvenY() ? 2 : 3]), o)
                      : s(Uint8Array.from([4]), o, r.toBytes(i.y));
                  },
                  fromBytes(t) {
                    let e = t.length,
                      n = t[0],
                      s = t.subarray(1);
                    if (e === i && (2 === n || 3 === n)) {
                      let t;
                      let e = m.bytesToNumberBE(s);
                      if (!m.Z2(e, x, r.ORDER))
                        throw Error("Point is not on curve");
                      let i = c(e);
                      try {
                        t = r.sqrt(i);
                      } catch (t) {
                        throw Error(
                          "Point is not on curve" +
                            (t instanceof Error ? ": " + t.message : "")
                        );
                      }
                      return (
                        ((1 & n) == 1) != ((t & x) === x) && (t = r.neg(t)),
                        { x: e, y: t }
                      );
                    }
                    if (e === o && 4 === n)
                      return {
                        x: r.fromBytes(s.subarray(0, r.BYTES)),
                        y: r.fromBytes(s.subarray(r.BYTES, 2 * r.BYTES)),
                      };
                    throw Error(
                      "invalid Point, expected length of " +
                        i +
                        ", or uncompressed " +
                        o +
                        ", got " +
                        e
                    );
                  },
                }),
                f = (t) => m.ci(m.tL(t, e.nByteLength)),
                y = (t, e, r) => m.bytesToNumberBE(t.slice(e, r));
              class v {
                constructor(t, e, r) {
                  (this.r = t),
                    (this.s = e),
                    (this.recovery = r),
                    this.assertValidity();
                }
                static fromCompact(t) {
                  let r = e.nByteLength;
                  return new v(
                    y((t = (0, m.ql)("compactSignature", t, 2 * r)), 0, r),
                    y(t, r, 2 * r)
                  );
                }
                static fromDER(t) {
                  let { r: e, s: r } = b.toSig((0, m.ql)("DER", t));
                  return new v(e, r);
                }
                assertValidity() {
                  m.Fy("r", this.r, x, n), m.Fy("s", this.s, x, n);
                }
                addRecoveryBit(t) {
                  return new v(this.r, this.s, t);
                }
                recoverPublicKey(t) {
                  let { r: n, s: i, recovery: o } = this,
                    u = A((0, m.ql)("msgHash", t));
                  if (null == o || ![0, 1, 2, 3].includes(o))
                    throw Error("recovery id invalid");
                  let c = 2 === o || 3 === o ? n + e.n : n;
                  if (c >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let h = (1 & o) == 0 ? "02" : "03",
                    d = l.fromHex(h + f(c)),
                    p = a(c),
                    g = s(-u * p),
                    y = s(i * p),
                    v = l.BASE.multiplyAndAddUnsafe(d, g, y);
                  if (!v) throw Error("point at infinify");
                  return v.assertValidity(), v;
                }
                hasHighS() {
                  return this.s > n >> x;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new v(this.r, s(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return m.hexToBytes(this.toDERHex());
                }
                toDERHex() {
                  return b.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return m.hexToBytes(this.toCompactHex());
                }
                toCompactHex() {
                  return f(this.r) + f(this.s);
                }
              }
              function w(t) {
                let e = m._t(t),
                  r = "string" == typeof t,
                  n = (e || r) && t.length;
                return e
                  ? n === i || n === o
                  : r
                  ? n === 2 * i || n === 2 * o
                  : t instanceof l;
              }
              let S =
                  e.bits2int ||
                  function (t) {
                    if (t.length > 8192) throw Error("input is too large");
                    let r = m.bytesToNumberBE(t),
                      n = 8 * t.length - e.nBitLength;
                    return n > 0 ? r >> BigInt(n) : r;
                  },
                A =
                  e.bits2int_modN ||
                  function (t) {
                    return s(S(t));
                  },
                T = m.dQ(e.nBitLength);
              function R(t) {
                return (
                  m.Fy("num < 2^" + e.nBitLength, t, E, T),
                  m.tL(t, e.nByteLength)
                );
              }
              let P = { lowS: e.lowS, prehash: !1 },
                B = { lowS: e.lowS, prehash: !1 };
              return (
                l.BASE._setWindowSize(8),
                {
                  CURVE: e,
                  getPublicKey: function (t, e = !0) {
                    return l.fromPrivateKey(t).toRawBytes(e);
                  },
                  getSharedSecret: function (t, e, r = !0) {
                    if (w(t)) throw Error("first arg must be private key");
                    if (!w(e)) throw Error("second arg must be public key");
                    return l.fromHex(e).multiply(u(t)).toRawBytes(r);
                  },
                  sign: function (t, i, o = P) {
                    let { seed: c, k2sig: f } = (function (t, i, o = P) {
                      if (["recovered", "canonical"].some((t) => t in o))
                        throw Error("sign() legacy options not supported");
                      let { hash: c, randomBytes: f } = e,
                        { lowS: d, prehash: p, extraEntropy: y } = o;
                      null == d && (d = !0),
                        (t = (0, m.ql)("msgHash", t)),
                        g(o),
                        p && (t = (0, m.ql)("prehashed msgHash", c(t)));
                      let w = A(t),
                        b = u(i),
                        M = [R(b), R(w)];
                      if (null != y && !1 !== y) {
                        let t = !0 === y ? f(r.BYTES) : y;
                        M.push((0, m.ql)("extraEntropy", t));
                      }
                      return {
                        seed: m.eV(...M),
                        k2sig: function (t) {
                          let e = S(t);
                          if (!h(e)) return;
                          let r = a(e),
                            i = l.BASE.multiply(e).toAffine(),
                            o = s(i.x);
                          if (o === E) return;
                          let u = s(r * s(w + o * b));
                          if (u === E) return;
                          let c = (i.x === o ? 0 : 2) | Number(i.y & x),
                            f = u;
                          if (d && u > n >> x)
                            (f = u > n >> x ? s(-u) : u), (c ^= 1);
                          return new v(o, f, c);
                        },
                      };
                    })(t, i, o);
                    return m.n$(e.hash.outputLen, e.nByteLength, e.hmac)(c, f);
                  },
                  verify: function (t, r, n, i = B) {
                    let o, u;
                    (r = (0, m.ql)("msgHash", r)),
                      (n = (0, m.ql)("publicKey", n));
                    let { lowS: c, prehash: h, format: f } = i;
                    if ((g(i), "strict" in i))
                      throw Error("options.strict was renamed to lowS");
                    if (void 0 !== f && "compact" !== f && "der" !== f)
                      throw Error("format must be compact or der");
                    let d = "string" == typeof t || m._t(t),
                      p =
                        !d &&
                        !f &&
                        "object" == typeof t &&
                        null !== t &&
                        "bigint" == typeof t.r &&
                        "bigint" == typeof t.s;
                    if (!d && !p)
                      throw Error(
                        "invalid signature, expected Uint8Array, hex string or Signature instance"
                      );
                    try {
                      if ((p && (u = new v(t.r, t.s)), d)) {
                        try {
                          "compact" !== f && (u = v.fromDER(t));
                        } catch (t) {
                          if (!(t instanceof b.Err)) throw t;
                        }
                        u || "der" === f || (u = v.fromCompact(t));
                      }
                      o = l.fromHex(n);
                    } catch (t) {
                      return !1;
                    }
                    if (!u || (c && u.hasHighS())) return !1;
                    h && (r = e.hash(r));
                    let { r: y, s: w } = u,
                      E = A(r),
                      x = a(w),
                      M = s(E * x),
                      S = s(y * x),
                      T = l.BASE.multiplyAndAddUnsafe(o, M, S)?.toAffine();
                    return !!T && s(T.x) === y;
                  },
                  ProjectivePoint: l,
                  Signature: v,
                  utils: {
                    isValidPrivateKey(t) {
                      try {
                        return u(t), !0;
                      } catch (t) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: u,
                    randomPrivateKey: () => {
                      let t = p.PS(e.n);
                      return p.Us(e.randomBytes(t), e.n);
                    },
                    precompute: (t = 8, e = l.BASE) => (
                      e._setWindowSize(t), e.multiply(BigInt(3)), e
                    ),
                  },
                }
              );
            })({
              ...t,
              hash: e,
              hmac: (t, ...r) => f(e, t, (0, i.eV)(...r)),
              randomBytes: i.O6,
            });
          return { ...r(e), create: r };
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: B,
            n: A,
            Gx: BigInt(
              "55066263022277343669578718895168534326250603453777594175500187360389116729240"
            ),
            Gy: BigInt(
              "32670510020758816978083085130507043184471273380659243275938904335757337482424"
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (t) => {
                let e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  r = -T * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  i = BigInt("0x100000000000000000000000000000000"),
                  o = P(e * t, A),
                  s = P(-r * t, A),
                  a = (0, p.wQ)(t - o * e - s * n, A),
                  l = (0, p.wQ)(-o * r - s * e, A),
                  u = a > i,
                  c = l > i;
                if ((u && (a = A - a), c && (l = A - l), a > i || l > i))
                  throw Error("splitScalar: Endomorphism failed, k=" + t);
                return { k1neg: u, k1: a, k2neg: c, k2: l };
              },
            },
          },
          u
        );
      BigInt(0), k.ProjectivePoint;
    },
    66075: function (t, e, r) {
      "use strict";
      function n(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw Error("positive integer expected, got " + t);
      }
      function i(t, ...e) {
        if (
          !(
            t instanceof Uint8Array ||
            (ArrayBuffer.isView(t) && "Uint8Array" === t.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (e.length > 0 && !e.includes(t.length))
          throw Error(
            "Uint8Array expected of length " + e + ", got length=" + t.length
          );
      }
      function o(t) {
        if ("function" != typeof t || "function" != typeof t.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        n(t.outputLen), n(t.blockLen);
      }
      function s(t, e = !0) {
        if (t.destroyed) throw Error("Hash instance has been destroyed");
        if (e && t.finished)
          throw Error("Hash#digest() has already been called");
      }
      function a(t, e) {
        i(t);
        let r = e.outputLen;
        if (t.length < r)
          throw Error(
            "digestInto() expects output buffer of length at least " + r
          );
      }
      r.d(e, {
        $h: function () {
          return s;
        },
        eB: function () {
          return a;
        },
        gk: function () {
          return i;
        },
        z3: function () {
          return o;
        },
      });
    },
    56503: function (t, e, r) {
      "use strict";
      r.d(e, {
        VR: function () {
          return a;
        },
        bc: function () {
          return o;
        },
        l3: function () {
          return s;
        },
      });
      var n = r(66075),
        i = r(42491);
      let o = (t, e, r) => (t & e) ^ (~t & r),
        s = (t, e, r) => (t & e) ^ (t & r) ^ (e & r);
      class a extends i.kb {
        constructor(t, e, r, n) {
          super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, i.GL)(this.buffer));
        }
        update(t) {
          (0, n.$h)(this);
          let { view: e, buffer: r, blockLen: o } = this,
            s = (t = (0, i.O0)(t)).length;
          for (let n = 0; n < s; ) {
            let a = Math.min(o - this.pos, s - n);
            if (a === o) {
              let e = (0, i.GL)(t);
              for (; o <= s - n; n += o) this.process(e, n);
              continue;
            }
            r.set(t.subarray(n, n + a), this.pos),
              (this.pos += a),
              (n += a),
              this.pos === o && (this.process(e, 0), (this.pos = 0));
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          (0, n.$h)(this), (0, n.eB)(t, this), (this.finished = !0);
          let { buffer: e, view: r, blockLen: o, isLE: s } = this,
            { pos: a } = this;
          (e[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > o - a && (this.process(r, 0), (a = 0));
          for (let t = a; t < o; t++) e[t] = 0;
          !(function (t, e, r, n) {
            if ("function" == typeof t.setBigUint64)
              return t.setBigUint64(e, r, n);
            let i = BigInt(32),
              o = BigInt(4294967295),
              s = Number((r >> i) & o),
              a = Number(r & o),
              l = n ? 4 : 0,
              u = n ? 0 : 4;
            t.setUint32(e + l, s, n), t.setUint32(e + u, a, n);
          })(r, o - 8, BigInt(8 * this.length), s),
            this.process(r, 0);
          let l = (0, i.GL)(t),
            u = this.outputLen;
          if (u % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let c = u / 4,
            h = this.get();
          if (c > h.length) throw Error("_sha2: outputLen bigger than state");
          for (let t = 0; t < c; t++) l.setUint32(4 * t, h[t], s);
        }
        digest() {
          let { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          let r = t.slice(0, e);
          return this.destroy(), r;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          let {
            blockLen: e,
            buffer: r,
            length: n,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (t.length = n),
            (t.pos = s),
            (t.finished = i),
            (t.destroyed = o),
            n % e && t.buffer.set(r),
            t
          );
        }
      }
    },
    42491: function (t, e, r) {
      "use strict";
      r.d(e, {
        kb: function () {
          return u;
        },
        eV: function () {
          return l;
        },
        GL: function () {
          return o;
        },
        O6: function () {
          return h;
        },
        np: function () {
          return s;
        },
        O0: function () {
          return a;
        },
        hE: function () {
          return c;
        },
      });
      let n =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      var i = r(66075);
      let o = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
        s = (t, e) => (t << (32 - e)) | (t >>> e);
      function a(t) {
        return (
          "string" == typeof t &&
            (t = (function (t) {
              if ("string" != typeof t)
                throw Error("utf8ToBytes expected string, got " + typeof t);
              return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
          (0, i.gk)(t),
          t
        );
      }
      function l(...t) {
        let e = 0;
        for (let r = 0; r < t.length; r++) {
          let n = t[r];
          (0, i.gk)(n), (e += n.length);
        }
        let r = new Uint8Array(e);
        for (let e = 0, n = 0; e < t.length; e++) {
          let i = t[e];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      class u {
        clone() {
          return this._cloneInto();
        }
      }
      function c(t) {
        let e = (e) => t().update(a(e)).digest(),
          r = t();
        return (
          (e.outputLen = r.outputLen),
          (e.blockLen = r.blockLen),
          (e.create = () => t()),
          e
        );
      }
      function h(t = 32) {
        if (n && "function" == typeof n.getRandomValues)
          return n.getRandomValues(new Uint8Array(t));
        if (n && "function" == typeof n.randomBytes) return n.randomBytes(t);
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    74043: function (t, e, r) {
      "use strict";
      function n(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw Error("positive integer expected, got " + t);
      }
      function i(t, ...e) {
        if (
          !(
            t instanceof Uint8Array ||
            (ArrayBuffer.isView(t) && "Uint8Array" === t.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (e.length > 0 && !e.includes(t.length))
          throw Error(
            "Uint8Array expected of length " + e + ", got length=" + t.length
          );
      }
      function o(t) {
        if ("function" != typeof t || "function" != typeof t.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        n(t.outputLen), n(t.blockLen);
      }
      function s(t, e = !0) {
        if (t.destroyed) throw Error("Hash instance has been destroyed");
        if (e && t.finished)
          throw Error("Hash#digest() has already been called");
      }
      function a(t, e) {
        i(t);
        let r = e.outputLen;
        if (t.length < r)
          throw Error(
            "digestInto() expects output buffer of length at least " + r
          );
      }
      r.d(e, {
        $h: function () {
          return s;
        },
        eB: function () {
          return a;
        },
        gk: function () {
          return i;
        },
        k8: function () {
          return n;
        },
        z3: function () {
          return o;
        },
      });
    },
    21512: function (t, e, r) {
      "use strict";
      r.d(e, {
        JQ: function () {
          return c;
        },
      });
      var n = r(74043),
        i = r(25884);
      class o extends i.kb {
        constructor(t, e, r, n) {
          super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, i.GL)(this.buffer));
        }
        update(t) {
          (0, n.$h)(this);
          let { view: e, buffer: r, blockLen: o } = this,
            s = (t = (0, i.O0)(t)).length;
          for (let n = 0; n < s; ) {
            let a = Math.min(o - this.pos, s - n);
            if (a === o) {
              let e = (0, i.GL)(t);
              for (; o <= s - n; n += o) this.process(e, n);
              continue;
            }
            r.set(t.subarray(n, n + a), this.pos),
              (this.pos += a),
              (n += a),
              this.pos === o && (this.process(e, 0), (this.pos = 0));
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          (0, n.$h)(this), (0, n.eB)(t, this), (this.finished = !0);
          let { buffer: e, view: r, blockLen: o, isLE: s } = this,
            { pos: a } = this;
          (e[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > o - a && (this.process(r, 0), (a = 0));
          for (let t = a; t < o; t++) e[t] = 0;
          !(function (t, e, r, n) {
            if ("function" == typeof t.setBigUint64)
              return t.setBigUint64(e, r, n);
            let i = BigInt(32),
              o = BigInt(4294967295),
              s = Number((r >> i) & o),
              a = Number(r & o),
              l = n ? 4 : 0,
              u = n ? 0 : 4;
            t.setUint32(e + l, s, n), t.setUint32(e + u, a, n);
          })(r, o - 8, BigInt(8 * this.length), s),
            this.process(r, 0);
          let l = (0, i.GL)(t),
            u = this.outputLen;
          if (u % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let c = u / 4,
            h = this.get();
          if (c > h.length) throw Error("_sha2: outputLen bigger than state");
          for (let t = 0; t < c; t++) l.setUint32(4 * t, h[t], s);
        }
        digest() {
          let { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          let r = t.slice(0, e);
          return this.destroy(), r;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          let {
            blockLen: e,
            buffer: r,
            length: n,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (t.length = n),
            (t.pos = s),
            (t.finished = i),
            (t.destroyed = o),
            n % e && t.buffer.set(r),
            t
          );
        }
      }
      let s = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        a = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        l = new Uint32Array(64);
      class u extends o {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | a[0]),
            (this.B = 0 | a[1]),
            (this.C = 0 | a[2]),
            (this.D = 0 | a[3]),
            (this.E = 0 | a[4]),
            (this.F = 0 | a[5]),
            (this.G = 0 | a[6]),
            (this.H = 0 | a[7]);
        }
        get() {
          let { A: t, B: e, C: r, D: n, E: i, F: o, G: s, H: a } = this;
          return [t, e, r, n, i, o, s, a];
        }
        set(t, e, r, n, i, o, s, a) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | a);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4) l[r] = t.getUint32(e, !1);
          for (let t = 16; t < 64; t++) {
            let e = l[t - 15],
              r = l[t - 2],
              n = (0, i.np)(e, 7) ^ (0, i.np)(e, 18) ^ (e >>> 3),
              o = (0, i.np)(r, 17) ^ (0, i.np)(r, 19) ^ (r >>> 10);
            l[t] = (o + l[t - 7] + n + l[t - 16]) | 0;
          }
          let { A: r, B: n, C: o, D: a, E: u, F: c, G: h, H: f } = this;
          for (let t = 0; t < 64; t++) {
            var d, p, m, g;
            let e =
                (f +
                  ((0, i.np)(u, 6) ^ (0, i.np)(u, 11) ^ (0, i.np)(u, 25)) +
                  (((d = u) & c) ^ (~d & h)) +
                  s[t] +
                  l[t]) |
                0,
              y =
                (((0, i.np)(r, 2) ^ (0, i.np)(r, 13) ^ (0, i.np)(r, 22)) +
                  (((p = r) & (m = n)) ^ (p & (g = o)) ^ (m & g))) |
                0;
            (f = h),
              (h = c),
              (c = u),
              (u = (a + e) | 0),
              (a = o),
              (o = n),
              (n = r),
              (r = (e + y) | 0);
          }
          (r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (o = (o + this.C) | 0),
            (a = (a + this.D) | 0),
            (u = (u + this.E) | 0),
            (c = (c + this.F) | 0),
            (h = (h + this.G) | 0),
            (f = (f + this.H) | 0),
            this.set(r, n, o, a, u, c, h, f);
        }
        roundClean() {
          l.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let c = (0, i.hE)(() => new u());
    },
    86691: function (t, e, r) {
      "use strict";
      r.d(e, {
        fr: function () {
          return A;
        },
      });
      var n = r(74043);
      let i = BigInt(4294967296 - 1),
        o = BigInt(32),
        s = (t, e, r) => (t << r) | (e >>> (32 - r)),
        a = (t, e, r) => (e << r) | (t >>> (32 - r)),
        l = (t, e, r) => (e << (r - 32)) | (t >>> (64 - r)),
        u = (t, e, r) => (t << (r - 32)) | (e >>> (64 - r));
      var c = r(25884);
      let h = [],
        f = [],
        d = [],
        p = BigInt(0),
        m = BigInt(1),
        g = BigInt(2),
        y = BigInt(7),
        v = BigInt(256),
        w = BigInt(113);
      for (let t = 0, e = m, r = 1, n = 0; t < 24; t++) {
        ([r, n] = [n, (2 * r + 3 * n) % 5]),
          h.push(2 * (5 * n + r)),
          f.push((((t + 1) * (t + 2)) / 2) % 64);
        let i = p;
        for (let t = 0; t < 7; t++)
          (e = ((e << m) ^ ((e >> y) * w)) % v) & g &&
            (i ^= m << ((m << BigInt(t)) - m));
        d.push(i);
      }
      let [b, E] = (function (t, e = !1) {
          let r = new Uint32Array(t.length),
            n = new Uint32Array(t.length);
          for (let s = 0; s < t.length; s++) {
            let { h: a, l } = (function (t, e = !1) {
              return e
                ? { h: Number(t & i), l: Number((t >> o) & i) }
                : { h: 0 | Number((t >> o) & i), l: 0 | Number(t & i) };
            })(t[s], e);
            [r[s], n[s]] = [a, l];
          }
          return [r, n];
        })(d, !0),
        x = (t, e, r) => (r > 32 ? l(t, e, r) : s(t, e, r)),
        M = (t, e, r) => (r > 32 ? u(t, e, r) : a(t, e, r));
      class S extends c.kb {
        constructor(t, e, r, i = !1, o = 24) {
          if (
            (super(),
            (this.blockLen = t),
            (this.suffix = e),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = o),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, n.k8)(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, c.Jq)(this.state));
        }
        keccak() {
          c.iA || (0, c.l1)(this.state32),
            (function (t, e = 24) {
              let r = new Uint32Array(10);
              for (let n = 24 - e; n < 24; n++) {
                for (let e = 0; e < 10; e++)
                  r[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
                for (let e = 0; e < 10; e += 2) {
                  let n = (e + 8) % 10,
                    i = (e + 2) % 10,
                    o = r[i],
                    s = r[i + 1],
                    a = x(o, s, 1) ^ r[n],
                    l = M(o, s, 1) ^ r[n + 1];
                  for (let r = 0; r < 50; r += 10)
                    (t[e + r] ^= a), (t[e + r + 1] ^= l);
                }
                let e = t[2],
                  i = t[3];
                for (let r = 0; r < 24; r++) {
                  let n = f[r],
                    o = x(e, i, n),
                    s = M(e, i, n),
                    a = h[r];
                  (e = t[a]), (i = t[a + 1]), (t[a] = o), (t[a + 1] = s);
                }
                for (let e = 0; e < 50; e += 10) {
                  for (let n = 0; n < 10; n++) r[n] = t[e + n];
                  for (let n = 0; n < 10; n++)
                    t[e + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
                }
                (t[0] ^= b[n]), (t[1] ^= E[n]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            c.iA || (0, c.l1)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(t) {
          (0, n.$h)(this);
          let { blockLen: e, state: r } = this,
            i = (t = (0, c.O0)(t)).length;
          for (let n = 0; n < i; ) {
            let o = Math.min(e - this.pos, i - n);
            for (let e = 0; e < o; e++) r[this.pos++] ^= t[n++];
            this.pos === e && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: t, suffix: e, pos: r, blockLen: n } = this;
          (t[r] ^= e),
            (128 & e) != 0 && r === n - 1 && this.keccak(),
            (t[n - 1] ^= 128),
            this.keccak();
        }
        writeInto(t) {
          (0, n.$h)(this, !1), (0, n.gk)(t), this.finish();
          let e = this.state,
            { blockLen: r } = this;
          for (let n = 0, i = t.length; n < i; ) {
            this.posOut >= r && this.keccak();
            let o = Math.min(r - this.posOut, i - n);
            t.set(e.subarray(this.posOut, this.posOut + o), n),
              (this.posOut += o),
              (n += o);
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(t);
        }
        xof(t) {
          return (0, n.k8)(t), this.xofInto(new Uint8Array(t));
        }
        digestInto(t) {
          if (((0, n.eB)(t, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(t), this.destroy(), t;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(t) {
          let {
            blockLen: e,
            suffix: r,
            outputLen: n,
            rounds: i,
            enableXOF: o,
          } = this;
          return (
            t || (t = new S(e, r, n, o, i)),
            t.state32.set(this.state32),
            (t.pos = this.pos),
            (t.posOut = this.posOut),
            (t.finished = this.finished),
            (t.rounds = i),
            (t.suffix = r),
            (t.outputLen = n),
            (t.enableXOF = o),
            (t.destroyed = this.destroyed),
            t
          );
        }
      }
      let A = (0, c.hE)(() => new S(136, 1, 32));
    },
    25884: function (t, e, r) {
      "use strict";
      r.d(e, {
        kb: function () {
          return p;
        },
        l1: function () {
          return u;
        },
        ci: function () {
          return h;
        },
        eV: function () {
          return d;
        },
        GL: function () {
          return s;
        },
        iA: function () {
          return l;
        },
        O6: function () {
          return g;
        },
        np: function () {
          return a;
        },
        O0: function () {
          return f;
        },
        Jq: function () {
          return o;
        },
        hE: function () {
          return m;
        },
      });
      let n =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      var i = r(74043);
      function o(t) {
        return new Uint32Array(
          t.buffer,
          t.byteOffset,
          Math.floor(t.byteLength / 4)
        );
      }
      function s(t) {
        return new DataView(t.buffer, t.byteOffset, t.byteLength);
      }
      function a(t, e) {
        return (t << (32 - e)) | (t >>> e);
      }
      let l = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
      function u(t) {
        for (let r = 0; r < t.length; r++) {
          var e;
          t[r] =
            (((e = t[r]) << 24) & 4278190080) |
            ((e << 8) & 16711680) |
            ((e >>> 8) & 65280) |
            ((e >>> 24) & 255);
        }
      }
      let c = Array.from({ length: 256 }, (t, e) =>
        e.toString(16).padStart(2, "0")
      );
      function h(t) {
        (0, i.gk)(t);
        let e = "";
        for (let r = 0; r < t.length; r++) e += c[t[r]];
        return e;
      }
      function f(t) {
        return (
          "string" == typeof t &&
            (t = (function (t) {
              if ("string" != typeof t)
                throw Error("utf8ToBytes expected string, got " + typeof t);
              return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
          (0, i.gk)(t),
          t
        );
      }
      function d(...t) {
        let e = 0;
        for (let r = 0; r < t.length; r++) {
          let n = t[r];
          (0, i.gk)(n), (e += n.length);
        }
        let r = new Uint8Array(e);
        for (let e = 0, n = 0; e < t.length; e++) {
          let i = t[e];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      class p {
        clone() {
          return this._cloneInto();
        }
      }
      function m(t) {
        let e = (e) => t().update(f(e)).digest(),
          r = t();
        return (
          (e.outputLen = r.outputLen),
          (e.blockLen = r.blockLen),
          (e.create = () => t()),
          e
        );
      }
      function g(t = 32) {
        if (n && "function" == typeof n.getRandomValues)
          return n.getRandomValues(new Uint8Array(t));
        if (n && "function" == typeof n.randomBytes) return n.randomBytes(t);
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    8822: function (t, e, r) {
      "use strict";
      function n([t, e]) {
        return `${t}=${(function t(e) {
          return Array.isArray(e)
            ? "%5B" + e.map(t).join("%2C%20") + "%5D"
            : "bigint" == typeof e
            ? `${e}n`
            : encodeURIComponent(
                String(
                  null != e && null === Object.getPrototypeOf(e) ? { ...e } : e
                )
              );
        })(e)}`;
      }
      r.d(e, {
        GH: function () {
          return h;
        },
        bP: function () {
          return u;
        },
      });
      var i,
        o = class extends Error {
          cause = this.cause;
          context;
          constructor(...[t, e]) {
            let r, i;
            if (e) {
              let { cause: t, ...n } = e;
              t && (i = { cause: t }), Object.keys(n).length > 0 && (r = n);
            }
            super(
              (function (t, e = {}) {
                {
                  let r = `Solana error #${t}; Decode this error by running \`npx @solana/errors decode -- ${t}`;
                  return (
                    Object.keys(e).length &&
                      (r += ` '${btoa(Object.entries(e).map(n).join("&"))}'`),
                    `${r}\``
                  );
                }
              })(t, r),
              i
            ),
              (this.context = { __code: t, ...r }),
              (this.name = "SolanaError");
          }
        };
      function s(t) {
        return "fixedSize" in t && "number" == typeof t.fixedSize;
      }
      var a =
        (((i = a || {})[(i.Little = 0)] = "Little"),
        (i[(i.Big = 1)] = "Big"),
        i);
      function l(t) {
        return t?.endian !== 1;
      }
      var u = (t = {}) => {
          var e, r;
          return Object.freeze({
            ...(r = {
              fixedSize: (e = {
                config: t,
                name: "u64",
                range: [0n, BigInt("0xffffffffffffffff")],
                set: (t, e, r) => t.setBigUint64(0, BigInt(e), r),
                size: 8,
              }).size,
              write(t, r, n) {
                e.range &&
                  (function (t, e, r, n) {
                    if (n < e || n > r)
                      throw new o(8078011, {
                        codecDescription: t,
                        max: r,
                        min: e,
                        value: n,
                      });
                  })(e.name, e.range[0], e.range[1], t);
                let i = new ArrayBuffer(e.size);
                return (
                  e.set(new DataView(i), t, l(e.config)),
                  r.set(new Uint8Array(i), n),
                  n + e.size
                );
              },
            }),
            encode: (t) => {
              let e = new Uint8Array(
                "fixedSize" in r ? r.fixedSize : r.getSizeFromValue(t)
              );
              return r.write(t, e, 0), e;
            },
          });
        },
        c = (t = {}) => {
          var e, r;
          return Object.freeze({
            ...(r = {
              fixedSize: (e = {
                config: t,
                get: (t, e) => t.getBigUint64(0, e),
                name: "u64",
                size: 8,
              }).size,
              read(t, r = 0) {
                !(function (t, e, r = 0) {
                  if (e.length - r <= 0)
                    throw new o(8078e3, { codecDescription: t });
                })(e.name, t, r),
                  (function (t, e, r, n = 0) {
                    let i = r.length - n;
                    if (i < e)
                      throw new o(8078001, {
                        bytesLength: i,
                        codecDescription: t,
                        expected: e,
                      });
                  })(e.name, e.size, t, r);
                let n = new DataView(
                  (function (t, e, r) {
                    let n = t.byteOffset + (e ?? 0),
                      i = r ?? t.byteLength;
                    return t.buffer.slice(n, n + i);
                  })(t, r, e.size)
                );
                return [e.get(n, l(e.config)), r + e.size];
              },
            }),
            decode: (t, e = 0) => r.read(t, e)[0],
          });
        },
        h = (t = {}) =>
          (function (t, e) {
            if (s(t) !== s(e)) throw new o(8078004);
            if (s(t) && s(e) && t.fixedSize !== e.fixedSize)
              throw new o(8078005, {
                decoderFixedSize: e.fixedSize,
                encoderFixedSize: t.fixedSize,
              });
            if (!s(t) && !s(e) && t.maxSize !== e.maxSize)
              throw new o(8078006, {
                decoderMaxSize: e.maxSize,
                encoderMaxSize: t.maxSize,
              });
            return {
              ...e,
              ...t,
              decode: e.decode,
              encode: t.encode,
              read: e.read,
              write: t.write,
            };
          })(u(t), c(t));
    },
    83464: function (t, e, r) {
      "use strict";
      let n, i, o, s, a;
      r.d(e, {
        Z: function () {
          return ed;
        },
      });
      var l,
        u,
        c,
        h,
        f,
        d = {};
      function p(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      }
      r.r(d),
        r.d(d, {
          hasBrowserEnv: function () {
            return tg;
          },
          hasStandardBrowserEnv: function () {
            return tv;
          },
          hasStandardBrowserWebWorkerEnv: function () {
            return tw;
          },
          navigator: function () {
            return ty;
          },
          origin: function () {
            return tb;
          },
        });
      var m = r(40257);
      let { toString: g } = Object.prototype,
        { getPrototypeOf: y } = Object,
        v =
          ((n = Object.create(null)),
          (t) => {
            let e = g.call(t);
            return n[e] || (n[e] = e.slice(8, -1).toLowerCase());
          }),
        w = (t) => ((t = t.toLowerCase()), (e) => v(e) === t),
        b = (t) => (e) => typeof e === t,
        { isArray: E } = Array,
        x = b("undefined"),
        M = w("ArrayBuffer"),
        S = b("string"),
        A = b("function"),
        T = b("number"),
        R = (t) => null !== t && "object" == typeof t,
        P = (t) => {
          if ("object" !== v(t)) return !1;
          let e = y(t);
          return (
            (null === e ||
              e === Object.prototype ||
              null === Object.getPrototypeOf(e)) &&
            !(Symbol.toStringTag in t) &&
            !(Symbol.iterator in t)
          );
        },
        B = w("Date"),
        k = w("File"),
        L = w("Blob"),
        O = w("FileList"),
        C = w("URLSearchParams"),
        [I, F, D, U] = ["ReadableStream", "Request", "Response", "Headers"].map(
          w
        );
      function N(t, e, { allOwnKeys: r = !1 } = {}) {
        let n, i;
        if (null != t) {
          if (("object" != typeof t && (t = [t]), E(t)))
            for (n = 0, i = t.length; n < i; n++) e.call(null, t[n], n, t);
          else {
            let i;
            let o = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
              s = o.length;
            for (n = 0; n < s; n++) (i = o[n]), e.call(null, t[i], i, t);
          }
        }
      }
      function _(t, e) {
        let r;
        e = e.toLowerCase();
        let n = Object.keys(t),
          i = n.length;
        for (; i-- > 0; ) if (e === (r = n[i]).toLowerCase()) return r;
        return null;
      }
      let j =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : global,
        V = (t) => !x(t) && t !== j,
        z =
          ((i = "undefined" != typeof Uint8Array && y(Uint8Array)),
          (t) => i && t instanceof i),
        H = w("HTMLFormElement"),
        q = (
          ({ hasOwnProperty: t }) =>
          (e, r) =>
            t.call(e, r)
        )(Object.prototype),
        $ = w("RegExp"),
        W = (t, e) => {
          let r = Object.getOwnPropertyDescriptors(t),
            n = {};
          N(r, (r, i) => {
            let o;
            !1 !== (o = e(r, i, t)) && (n[i] = o || r);
          }),
            Object.defineProperties(t, n);
        },
        Y = w("AsyncFunction"),
        Z =
          ((l = "function" == typeof setImmediate),
          (u = A(j.postMessage)),
          l
            ? setImmediate
            : u
            ? ((c = `axios@${Math.random()}`),
              (h = []),
              j.addEventListener(
                "message",
                ({ source: t, data: e }) => {
                  t === j && e === c && h.length && h.shift()();
                },
                !1
              ),
              (t) => {
                h.push(t), j.postMessage(c, "*");
              })
            : (t) => setTimeout(t)),
        K =
          "undefined" != typeof queueMicrotask
            ? queueMicrotask.bind(j)
            : (void 0 !== m && m.nextTick) || Z;
      var G = {
        isArray: E,
        isArrayBuffer: M,
        isBuffer: function (t) {
          return (
            null !== t &&
            !x(t) &&
            null !== t.constructor &&
            !x(t.constructor) &&
            A(t.constructor.isBuffer) &&
            t.constructor.isBuffer(t)
          );
        },
        isFormData: (t) => {
          let e;
          return (
            t &&
            (("function" == typeof FormData && t instanceof FormData) ||
              (A(t.append) &&
                ("formdata" === (e = v(t)) ||
                  ("object" === e &&
                    A(t.toString) &&
                    "[object FormData]" === t.toString()))))
          );
        },
        isArrayBufferView: function (t) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t && t.buffer && M(t.buffer);
        },
        isString: S,
        isNumber: T,
        isBoolean: (t) => !0 === t || !1 === t,
        isObject: R,
        isPlainObject: P,
        isReadableStream: I,
        isRequest: F,
        isResponse: D,
        isHeaders: U,
        isUndefined: x,
        isDate: B,
        isFile: k,
        isBlob: L,
        isRegExp: $,
        isFunction: A,
        isStream: (t) => R(t) && A(t.pipe),
        isURLSearchParams: C,
        isTypedArray: z,
        isFileList: O,
        forEach: N,
        merge: function t() {
          let { caseless: e } = (V(this) && this) || {},
            r = {},
            n = (n, i) => {
              let o = (e && _(r, i)) || i;
              P(r[o]) && P(n)
                ? (r[o] = t(r[o], n))
                : P(n)
                ? (r[o] = t({}, n))
                : E(n)
                ? (r[o] = n.slice())
                : (r[o] = n);
            };
          for (let t = 0, e = arguments.length; t < e; t++)
            arguments[t] && N(arguments[t], n);
          return r;
        },
        extend: (t, e, r, { allOwnKeys: n } = {}) => (
          N(
            e,
            (e, n) => {
              r && A(e) ? (t[n] = p(e, r)) : (t[n] = e);
            },
            { allOwnKeys: n }
          ),
          t
        ),
        trim: (t) =>
          t.trim
            ? t.trim()
            : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
        stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
        inherits: (t, e, r, n) => {
          (t.prototype = Object.create(e.prototype, n)),
            (t.prototype.constructor = t),
            Object.defineProperty(t, "super", { value: e.prototype }),
            r && Object.assign(t.prototype, r);
        },
        toFlatObject: (t, e, r, n) => {
          let i, o, s;
          let a = {};
          if (((e = e || {}), null == t)) return e;
          do {
            for (o = (i = Object.getOwnPropertyNames(t)).length; o-- > 0; )
              (s = i[o]),
                (!n || n(s, t, e)) && !a[s] && ((e[s] = t[s]), (a[s] = !0));
            t = !1 !== r && y(t);
          } while (t && (!r || r(t, e)) && t !== Object.prototype);
          return e;
        },
        kindOf: v,
        kindOfTest: w,
        endsWith: (t, e, r) => {
          (t = String(t)),
            (void 0 === r || r > t.length) && (r = t.length),
            (r -= e.length);
          let n = t.indexOf(e, r);
          return -1 !== n && n === r;
        },
        toArray: (t) => {
          if (!t) return null;
          if (E(t)) return t;
          let e = t.length;
          if (!T(e)) return null;
          let r = Array(e);
          for (; e-- > 0; ) r[e] = t[e];
          return r;
        },
        forEachEntry: (t, e) => {
          let r;
          let n = (t && t[Symbol.iterator]).call(t);
          for (; (r = n.next()) && !r.done; ) {
            let n = r.value;
            e.call(t, n[0], n[1]);
          }
        },
        matchAll: (t, e) => {
          let r;
          let n = [];
          for (; null !== (r = t.exec(e)); ) n.push(r);
          return n;
        },
        isHTMLForm: H,
        hasOwnProperty: q,
        hasOwnProp: q,
        reduceDescriptors: W,
        freezeMethods: (t) => {
          W(t, (e, r) => {
            if (A(t) && -1 !== ["arguments", "caller", "callee"].indexOf(r))
              return !1;
            if (A(t[r])) {
              if (((e.enumerable = !1), "writable" in e)) {
                e.writable = !1;
                return;
              }
              e.set ||
                (e.set = () => {
                  throw Error("Can not rewrite read-only method '" + r + "'");
                });
            }
          });
        },
        toObjectSet: (t, e) => {
          let r = {};
          return (
            ((t) => {
              t.forEach((t) => {
                r[t] = !0;
              });
            })(E(t) ? t : String(t).split(e)),
            r
          );
        },
        toCamelCase: (t) =>
          t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, r) {
            return e.toUpperCase() + r;
          }),
        noop: () => {},
        toFiniteNumber: (t, e) =>
          null != t && Number.isFinite((t = +t)) ? t : e,
        findKey: _,
        global: j,
        isContextDefined: V,
        isSpecCompliantForm: function (t) {
          return !!(
            t &&
            A(t.append) &&
            "FormData" === t[Symbol.toStringTag] &&
            t[Symbol.iterator]
          );
        },
        toJSONObject: (t) => {
          let e = Array(10),
            r = (t, n) => {
              if (R(t)) {
                if (e.indexOf(t) >= 0) return;
                if (!("toJSON" in t)) {
                  e[n] = t;
                  let i = E(t) ? [] : {};
                  return (
                    N(t, (t, e) => {
                      let o = r(t, n + 1);
                      x(o) || (i[e] = o);
                    }),
                    (e[n] = void 0),
                    i
                  );
                }
              }
              return t;
            };
          return r(t, 0);
        },
        isAsyncFn: Y,
        isThenable: (t) => t && (R(t) || A(t)) && A(t.then) && A(t.catch),
        setImmediate: Z,
        asap: K,
      };
      function X(t, e, r, n, i) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = Error().stack),
          (this.message = t),
          (this.name = "AxiosError"),
          e && (this.code = e),
          r && (this.config = r),
          n && (this.request = n),
          i &&
            ((this.response = i), (this.status = i.status ? i.status : null));
      }
      G.inherits(X, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: G.toJSONObject(this.config),
            code: this.code,
            status: this.status,
          };
        },
      });
      let J = X.prototype,
        Q = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((t) => {
        Q[t] = { value: t };
      }),
        Object.defineProperties(X, Q),
        Object.defineProperty(J, "isAxiosError", { value: !0 }),
        (X.from = (t, e, r, n, i, o) => {
          let s = Object.create(J);
          return (
            G.toFlatObject(
              t,
              s,
              function (t) {
                return t !== Error.prototype;
              },
              (t) => "isAxiosError" !== t
            ),
            X.call(s, t.message, e, r, n, i),
            (s.cause = t),
            (s.name = t.name),
            o && Object.assign(s, o),
            s
          );
        });
      var tt = r(82957).Buffer;
      function te(t) {
        return G.isPlainObject(t) || G.isArray(t);
      }
      function tr(t) {
        return G.endsWith(t, "[]") ? t.slice(0, -2) : t;
      }
      function tn(t, e, r) {
        return t
          ? t
              .concat(e)
              .map(function (t, e) {
                return (t = tr(t)), !r && e ? "[" + t + "]" : t;
              })
              .join(r ? "." : "")
          : e;
      }
      let ti = G.toFlatObject(G, {}, null, function (t) {
        return /^is[A-Z]/.test(t);
      });
      var to = function (t, e, r) {
        if (!G.isObject(t)) throw TypeError("target must be an object");
        e = e || new FormData();
        let n = (r = G.toFlatObject(
            r,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (t, e) {
              return !G.isUndefined(e[t]);
            }
          )).metaTokens,
          i = r.visitor || u,
          o = r.dots,
          s = r.indexes,
          a =
            (r.Blob || ("undefined" != typeof Blob && Blob)) &&
            G.isSpecCompliantForm(e);
        if (!G.isFunction(i)) throw TypeError("visitor must be a function");
        function l(t) {
          if (null === t) return "";
          if (G.isDate(t)) return t.toISOString();
          if (!a && G.isBlob(t))
            throw new X("Blob is not supported. Use a Buffer instead.");
          return G.isArrayBuffer(t) || G.isTypedArray(t)
            ? a && "function" == typeof Blob
              ? new Blob([t])
              : tt.from(t)
            : t;
        }
        function u(t, r, i) {
          let a = t;
          if (t && !i && "object" == typeof t) {
            if (G.endsWith(r, "{}"))
              (r = n ? r : r.slice(0, -2)), (t = JSON.stringify(t));
            else {
              var u;
              if (
                (G.isArray(t) && ((u = t), G.isArray(u) && !u.some(te))) ||
                ((G.isFileList(t) || G.endsWith(r, "[]")) && (a = G.toArray(t)))
              )
                return (
                  (r = tr(r)),
                  a.forEach(function (t, n) {
                    G.isUndefined(t) ||
                      null === t ||
                      e.append(
                        !0 === s ? tn([r], n, o) : null === s ? r : r + "[]",
                        l(t)
                      );
                  }),
                  !1
                );
            }
          }
          return !!te(t) || (e.append(tn(i, r, o), l(t)), !1);
        }
        let c = [],
          h = Object.assign(ti, {
            defaultVisitor: u,
            convertValue: l,
            isVisitable: te,
          });
        if (!G.isObject(t)) throw TypeError("data must be an object");
        return (
          !(function t(r, n) {
            if (!G.isUndefined(r)) {
              if (-1 !== c.indexOf(r))
                throw Error("Circular reference detected in " + n.join("."));
              c.push(r),
                G.forEach(r, function (r, o) {
                  !0 ===
                    (!(G.isUndefined(r) || null === r) &&
                      i.call(e, r, G.isString(o) ? o.trim() : o, n, h)) &&
                    t(r, n ? n.concat(o) : [o]);
                }),
                c.pop();
            }
          })(t),
          e
        );
      };
      function ts(t) {
        let e = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
          return e[t];
        });
      }
      function ta(t, e) {
        (this._pairs = []), t && to(t, this, e);
      }
      let tl = ta.prototype;
      function tu(t) {
        return encodeURIComponent(t)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function tc(t, e, r) {
        let n;
        if (!e) return t;
        let i = (r && r.encode) || tu;
        G.isFunction(r) && (r = { serialize: r });
        let o = r && r.serialize;
        if (
          (n = o
            ? o(e, r)
            : G.isURLSearchParams(e)
            ? e.toString()
            : new ta(e, r).toString(i))
        ) {
          let e = t.indexOf("#");
          -1 !== e && (t = t.slice(0, e)),
            (t += (-1 === t.indexOf("?") ? "?" : "&") + n);
        }
        return t;
      }
      (tl.append = function (t, e) {
        this._pairs.push([t, e]);
      }),
        (tl.toString = function (t) {
          let e = t
            ? function (e) {
                return t.call(this, e, ts);
              }
            : ts;
          return this._pairs
            .map(function (t) {
              return e(t[0]) + "=" + e(t[1]);
            }, "")
            .join("&");
        });
      class th {
        constructor() {
          this.handlers = [];
        }
        use(t, e, r) {
          return (
            this.handlers.push({
              fulfilled: t,
              rejected: e,
              synchronous: !!r && r.synchronous,
              runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }
        eject(t) {
          this.handlers[t] && (this.handlers[t] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(t) {
          G.forEach(this.handlers, function (e) {
            null !== e && t(e);
          });
        }
      }
      var tf = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        td = "undefined" != typeof URLSearchParams ? URLSearchParams : ta,
        tp = "undefined" != typeof FormData ? FormData : null,
        tm = "undefined" != typeof Blob ? Blob : null;
      let tg = "undefined" != typeof window && "undefined" != typeof document,
        ty = ("object" == typeof navigator && navigator) || void 0,
        tv =
          tg &&
          (!ty ||
            0 > ["ReactNative", "NativeScript", "NS"].indexOf(ty.product)),
        tw =
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" == typeof self.importScripts,
        tb = (tg && window.location.href) || "http://localhost";
      var tE = {
          ...d,
          isBrowser: !0,
          classes: { URLSearchParams: td, FormData: tp, Blob: tm },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        tx = function (t) {
          if (G.isFormData(t) && G.isFunction(t.entries)) {
            let e = {};
            return (
              G.forEachEntry(t, (t, r) => {
                !(function t(e, r, n, i) {
                  let o = e[i++];
                  if ("__proto__" === o) return !0;
                  let s = Number.isFinite(+o),
                    a = i >= e.length;
                  return (
                    ((o = !o && G.isArray(n) ? n.length : o), a)
                      ? G.hasOwnProp(n, o)
                        ? (n[o] = [n[o], r])
                        : (n[o] = r)
                      : ((n[o] && G.isObject(n[o])) || (n[o] = []),
                        t(e, r, n[o], i) &&
                          G.isArray(n[o]) &&
                          (n[o] = (function (t) {
                            let e, r;
                            let n = {},
                              i = Object.keys(t),
                              o = i.length;
                            for (e = 0; e < o; e++) n[(r = i[e])] = t[r];
                            return n;
                          })(n[o]))),
                    !s
                  );
                })(
                  G.matchAll(/\w+|\[(\w*)]/g, t).map((t) =>
                    "[]" === t[0] ? "" : t[1] || t[0]
                  ),
                  r,
                  e,
                  0
                );
              }),
              e
            );
          }
          return null;
        };
      let tM = {
        transitional: tf,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [
          function (t, e) {
            let r;
            let n = e.getContentType() || "",
              i = n.indexOf("application/json") > -1,
              o = G.isObject(t);
            if (
              (o && G.isHTMLForm(t) && (t = new FormData(t)), G.isFormData(t))
            )
              return i ? JSON.stringify(tx(t)) : t;
            if (
              G.isArrayBuffer(t) ||
              G.isBuffer(t) ||
              G.isStream(t) ||
              G.isFile(t) ||
              G.isBlob(t) ||
              G.isReadableStream(t)
            )
              return t;
            if (G.isArrayBufferView(t)) return t.buffer;
            if (G.isURLSearchParams(t))
              return (
                e.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                t.toString()
              );
            if (o) {
              if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                var s, a;
                return ((s = t),
                (a = this.formSerializer),
                to(
                  s,
                  new tE.classes.URLSearchParams(),
                  Object.assign(
                    {
                      visitor: function (t, e, r, n) {
                        return tE.isNode && G.isBuffer(t)
                          ? (this.append(e, t.toString("base64")), !1)
                          : n.defaultVisitor.apply(this, arguments);
                      },
                    },
                    a
                  )
                )).toString();
              }
              if (
                (r = G.isFileList(t)) ||
                n.indexOf("multipart/form-data") > -1
              ) {
                let e = this.env && this.env.FormData;
                return to(
                  r ? { "files[]": t } : t,
                  e && new e(),
                  this.formSerializer
                );
              }
            }
            return o || i
              ? (e.setContentType("application/json", !1),
                (function (t, e, r) {
                  if (G.isString(t))
                    try {
                      return (0, JSON.parse)(t), G.trim(t);
                    } catch (t) {
                      if ("SyntaxError" !== t.name) throw t;
                    }
                  return (0, JSON.stringify)(t);
                })(t))
              : t;
          },
        ],
        transformResponse: [
          function (t) {
            let e = this.transitional || tM.transitional,
              r = e && e.forcedJSONParsing,
              n = "json" === this.responseType;
            if (G.isResponse(t) || G.isReadableStream(t)) return t;
            if (t && G.isString(t) && ((r && !this.responseType) || n)) {
              let r = e && e.silentJSONParsing;
              try {
                return JSON.parse(t);
              } catch (t) {
                if (!r && n) {
                  if ("SyntaxError" === t.name)
                    throw X.from(
                      t,
                      X.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw t;
                }
              }
            }
            return t;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: tE.classes.FormData, Blob: tE.classes.Blob },
        validateStatus: function (t) {
          return t >= 200 && t < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
          },
        },
      };
      G.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
        tM.headers[t] = {};
      });
      let tS = G.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ]);
      var tA = (t) => {
        let e, r, n;
        let i = {};
        return (
          t &&
            t.split("\n").forEach(function (t) {
              (n = t.indexOf(":")),
                (e = t.substring(0, n).trim().toLowerCase()),
                (r = t.substring(n + 1).trim()),
                !e ||
                  (i[e] && tS[e]) ||
                  ("set-cookie" === e
                    ? i[e]
                      ? i[e].push(r)
                      : (i[e] = [r])
                    : (i[e] = i[e] ? i[e] + ", " + r : r));
            }),
          i
        );
      };
      let tT = Symbol("internals");
      function tR(t) {
        return t && String(t).trim().toLowerCase();
      }
      function tP(t) {
        return !1 === t || null == t ? t : G.isArray(t) ? t.map(tP) : String(t);
      }
      let tB = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
      function tk(t, e, r, n, i) {
        if (G.isFunction(n)) return n.call(this, e, r);
        if ((i && (e = r), G.isString(e))) {
          if (G.isString(n)) return -1 !== e.indexOf(n);
          if (G.isRegExp(n)) return n.test(e);
        }
      }
      class tL {
        constructor(t) {
          t && this.set(t);
        }
        set(t, e, r) {
          let n = this;
          function i(t, e, r) {
            let i = tR(e);
            if (!i) throw Error("header name must be a non-empty string");
            let o = G.findKey(n, i);
            (o &&
              void 0 !== n[o] &&
              !0 !== r &&
              (void 0 !== r || !1 === n[o])) ||
              (n[o || e] = tP(t));
          }
          let o = (t, e) => G.forEach(t, (t, r) => i(t, r, e));
          if (G.isPlainObject(t) || t instanceof this.constructor) o(t, e);
          else if (G.isString(t) && (t = t.trim()) && !tB(t)) o(tA(t), e);
          else if (G.isHeaders(t)) for (let [e, n] of t.entries()) i(n, e, r);
          else null != t && i(e, t, r);
          return this;
        }
        get(t, e) {
          if ((t = tR(t))) {
            let r = G.findKey(this, t);
            if (r) {
              let t = this[r];
              if (!e) return t;
              if (!0 === e)
                return (function (t) {
                  let e;
                  let r = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  for (; (e = n.exec(t)); ) r[e[1]] = e[2];
                  return r;
                })(t);
              if (G.isFunction(e)) return e.call(this, t, r);
              if (G.isRegExp(e)) return e.exec(t);
              throw TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(t, e) {
          if ((t = tR(t))) {
            let r = G.findKey(this, t);
            return !!(
              r &&
              void 0 !== this[r] &&
              (!e || tk(this, this[r], r, e))
            );
          }
          return !1;
        }
        delete(t, e) {
          let r = this,
            n = !1;
          function i(t) {
            if ((t = tR(t))) {
              let i = G.findKey(r, t);
              i && (!e || tk(r, r[i], i, e)) && (delete r[i], (n = !0));
            }
          }
          return G.isArray(t) ? t.forEach(i) : i(t), n;
        }
        clear(t) {
          let e = Object.keys(this),
            r = e.length,
            n = !1;
          for (; r--; ) {
            let i = e[r];
            (!t || tk(this, this[i], i, t, !0)) && (delete this[i], (n = !0));
          }
          return n;
        }
        normalize(t) {
          let e = this,
            r = {};
          return (
            G.forEach(this, (n, i) => {
              let o = G.findKey(r, i);
              if (o) {
                (e[o] = tP(n)), delete e[i];
                return;
              }
              let s = t
                ? i
                    .trim()
                    .toLowerCase()
                    .replace(
                      /([a-z\d])(\w*)/g,
                      (t, e, r) => e.toUpperCase() + r
                    )
                : String(i).trim();
              s !== i && delete e[i], (e[s] = tP(n)), (r[s] = !0);
            }),
            this
          );
        }
        concat(...t) {
          return this.constructor.concat(this, ...t);
        }
        toJSON(t) {
          let e = Object.create(null);
          return (
            G.forEach(this, (r, n) => {
              null != r &&
                !1 !== r &&
                (e[n] = t && G.isArray(r) ? r.join(", ") : r);
            }),
            e
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([t, e]) => t + ": " + e)
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(t) {
          return t instanceof this ? t : new this(t);
        }
        static concat(t, ...e) {
          let r = new this(t);
          return e.forEach((t) => r.set(t)), r;
        }
        static accessor(t) {
          let e = (this[tT] = this[tT] = { accessors: {} }).accessors,
            r = this.prototype;
          function n(t) {
            let n = tR(t);
            e[n] ||
              (!(function (t, e) {
                let r = G.toCamelCase(" " + e);
                ["get", "set", "has"].forEach((n) => {
                  Object.defineProperty(t, n + r, {
                    value: function (t, r, i) {
                      return this[n].call(this, e, t, r, i);
                    },
                    configurable: !0,
                  });
                });
              })(r, t),
              (e[n] = !0));
          }
          return G.isArray(t) ? t.forEach(n) : n(t), this;
        }
      }
      function tO(t, e) {
        let r = this || tM,
          n = e || r,
          i = tL.from(n.headers),
          o = n.data;
        return (
          G.forEach(t, function (t) {
            o = t.call(r, o, i.normalize(), e ? e.status : void 0);
          }),
          i.normalize(),
          o
        );
      }
      function tC(t) {
        return !!(t && t.__CANCEL__);
      }
      function tI(t, e, r) {
        X.call(this, null == t ? "canceled" : t, X.ERR_CANCELED, e, r),
          (this.name = "CanceledError");
      }
      function tF(t, e, r) {
        let n = r.config.validateStatus;
        !r.status || !n || n(r.status)
          ? t(r)
          : e(
              new X(
                "Request failed with status code " + r.status,
                [X.ERR_BAD_REQUEST, X.ERR_BAD_RESPONSE][
                  Math.floor(r.status / 100) - 4
                ],
                r.config,
                r.request,
                r
              )
            );
      }
      tL.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        G.reduceDescriptors(tL.prototype, ({ value: t }, e) => {
          let r = e[0].toUpperCase() + e.slice(1);
          return {
            get: () => t,
            set(t) {
              this[r] = t;
            },
          };
        }),
        G.freezeMethods(tL),
        G.inherits(tI, X, { __CANCEL__: !0 });
      var tD = function (t, e) {
          let r;
          let n = Array((t = t || 10)),
            i = Array(t),
            o = 0,
            s = 0;
          return (
            (e = void 0 !== e ? e : 1e3),
            function (a) {
              let l = Date.now(),
                u = i[s];
              r || (r = l), (n[o] = a), (i[o] = l);
              let c = s,
                h = 0;
              for (; c !== o; ) (h += n[c++]), (c %= t);
              if (((o = (o + 1) % t) === s && (s = (s + 1) % t), l - r < e))
                return;
              let f = u && l - u;
              return f ? Math.round((1e3 * h) / f) : void 0;
            }
          );
        },
        tU = function (t, e) {
          let r,
            n,
            i = 0,
            o = 1e3 / e,
            s = (e, o = Date.now()) => {
              (i = o),
                (r = null),
                n && (clearTimeout(n), (n = null)),
                t.apply(null, e);
            };
          return [
            (...t) => {
              let e = Date.now(),
                a = e - i;
              a >= o
                ? s(t, e)
                : ((r = t),
                  n ||
                    (n = setTimeout(() => {
                      (n = null), s(r);
                    }, o - a)));
            },
            () => r && s(r),
          ];
        };
      let tN = (t, e, r = 3) => {
          let n = 0,
            i = tD(50, 250);
          return tU((r) => {
            let o = r.loaded,
              s = r.lengthComputable ? r.total : void 0,
              a = o - n,
              l = i(a);
            (n = o),
              t({
                loaded: o,
                total: s,
                progress: s ? o / s : void 0,
                bytes: a,
                rate: l || void 0,
                estimated: l && s && o <= s ? (s - o) / l : void 0,
                event: r,
                lengthComputable: null != s,
                [e ? "download" : "upload"]: !0,
              });
          }, r);
        },
        t_ = (t, e) => {
          let r = null != t;
          return [
            (n) => e[0]({ lengthComputable: r, total: t, loaded: n }),
            e[1],
          ];
        },
        tj =
          (t) =>
          (...e) =>
            G.asap(() => t(...e));
      var tV = tE.hasStandardBrowserEnv
          ? ((o = new URL(tE.origin)),
            (s =
              tE.navigator && /(msie|trident)/i.test(tE.navigator.userAgent)),
            (t) => (
              (t = new URL(t, tE.origin)),
              o.protocol === t.protocol &&
                o.host === t.host &&
                (s || o.port === t.port)
            ))
          : () => !0,
        tz = tE.hasStandardBrowserEnv
          ? {
              write(t, e, r, n, i, o) {
                let s = [t + "=" + encodeURIComponent(e)];
                G.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()),
                  G.isString(n) && s.push("path=" + n),
                  G.isString(i) && s.push("domain=" + i),
                  !0 === o && s.push("secure"),
                  (document.cookie = s.join("; "));
              },
              read(t) {
                let e = document.cookie.match(
                  RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
                );
                return e ? decodeURIComponent(e[3]) : null;
              },
              remove(t) {
                this.write(t, "", Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function tH(t, e, r) {
        let n = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
        return t && (n || !1 == r)
          ? e
            ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "")
            : t
          : e;
      }
      let tq = (t) => (t instanceof tL ? { ...t } : t);
      function t$(t, e) {
        e = e || {};
        let r = {};
        function n(t, e, r, n) {
          return G.isPlainObject(t) && G.isPlainObject(e)
            ? G.merge.call({ caseless: n }, t, e)
            : G.isPlainObject(e)
            ? G.merge({}, e)
            : G.isArray(e)
            ? e.slice()
            : e;
        }
        function i(t, e, r, i) {
          return G.isUndefined(e)
            ? G.isUndefined(t)
              ? void 0
              : n(void 0, t, r, i)
            : n(t, e, r, i);
        }
        function o(t, e) {
          if (!G.isUndefined(e)) return n(void 0, e);
        }
        function s(t, e) {
          return G.isUndefined(e)
            ? G.isUndefined(t)
              ? void 0
              : n(void 0, t)
            : n(void 0, e);
        }
        function a(r, i, o) {
          return o in e ? n(r, i) : o in t ? n(void 0, r) : void 0;
        }
        let l = {
          url: o,
          method: o,
          data: o,
          baseURL: s,
          transformRequest: s,
          transformResponse: s,
          paramsSerializer: s,
          timeout: s,
          timeoutMessage: s,
          withCredentials: s,
          withXSRFToken: s,
          adapter: s,
          responseType: s,
          xsrfCookieName: s,
          xsrfHeaderName: s,
          onUploadProgress: s,
          onDownloadProgress: s,
          decompress: s,
          maxContentLength: s,
          maxBodyLength: s,
          beforeRedirect: s,
          transport: s,
          httpAgent: s,
          httpsAgent: s,
          cancelToken: s,
          socketPath: s,
          responseEncoding: s,
          validateStatus: a,
          headers: (t, e, r) => i(tq(t), tq(e), r, !0),
        };
        return (
          G.forEach(Object.keys(Object.assign({}, t, e)), function (n) {
            let o = l[n] || i,
              s = o(t[n], e[n], n);
            (G.isUndefined(s) && o !== a) || (r[n] = s);
          }),
          r
        );
      }
      var tW = (t) => {
          let e;
          let r = t$({}, t),
            {
              data: n,
              withXSRFToken: i,
              xsrfHeaderName: o,
              xsrfCookieName: s,
              headers: a,
              auth: l,
            } = r;
          if (
            ((r.headers = a = tL.from(a)),
            (r.url = tc(
              tH(r.baseURL, r.url, r.allowAbsoluteUrls),
              t.params,
              t.paramsSerializer
            )),
            l &&
              a.set(
                "Authorization",
                "Basic " +
                  btoa(
                    (l.username || "") +
                      ":" +
                      (l.password
                        ? unescape(encodeURIComponent(l.password))
                        : "")
                  )
              ),
            G.isFormData(n))
          ) {
            if (tE.hasStandardBrowserEnv || tE.hasStandardBrowserWebWorkerEnv)
              a.setContentType(void 0);
            else if (!1 !== (e = a.getContentType())) {
              let [t, ...r] = e
                ? e
                    .split(";")
                    .map((t) => t.trim())
                    .filter(Boolean)
                : [];
              a.setContentType([t || "multipart/form-data", ...r].join("; "));
            }
          }
          if (
            tE.hasStandardBrowserEnv &&
            (i && G.isFunction(i) && (i = i(r)), i || (!1 !== i && tV(r.url)))
          ) {
            let t = o && s && tz.read(s);
            t && a.set(o, t);
          }
          return r;
        },
        tY =
          "undefined" != typeof XMLHttpRequest &&
          function (t) {
            return new Promise(function (e, r) {
              let n, i, o, s, a;
              let l = tW(t),
                u = l.data,
                c = tL.from(l.headers).normalize(),
                {
                  responseType: h,
                  onUploadProgress: f,
                  onDownloadProgress: d,
                } = l;
              function p() {
                s && s(),
                  a && a(),
                  l.cancelToken && l.cancelToken.unsubscribe(n),
                  l.signal && l.signal.removeEventListener("abort", n);
              }
              let m = new XMLHttpRequest();
              function g() {
                if (!m) return;
                let n = tL.from(
                  "getAllResponseHeaders" in m && m.getAllResponseHeaders()
                );
                tF(
                  function (t) {
                    e(t), p();
                  },
                  function (t) {
                    r(t), p();
                  },
                  {
                    data:
                      h && "text" !== h && "json" !== h
                        ? m.response
                        : m.responseText,
                    status: m.status,
                    statusText: m.statusText,
                    headers: n,
                    config: t,
                    request: m,
                  }
                ),
                  (m = null);
              }
              m.open(l.method.toUpperCase(), l.url, !0),
                (m.timeout = l.timeout),
                "onloadend" in m
                  ? (m.onloadend = g)
                  : (m.onreadystatechange = function () {
                      m &&
                        4 === m.readyState &&
                        (0 !== m.status ||
                          (m.responseURL &&
                            0 === m.responseURL.indexOf("file:"))) &&
                        setTimeout(g);
                    }),
                (m.onabort = function () {
                  m &&
                    (r(new X("Request aborted", X.ECONNABORTED, t, m)),
                    (m = null));
                }),
                (m.onerror = function () {
                  r(new X("Network Error", X.ERR_NETWORK, t, m)), (m = null);
                }),
                (m.ontimeout = function () {
                  let e = l.timeout
                      ? "timeout of " + l.timeout + "ms exceeded"
                      : "timeout exceeded",
                    n = l.transitional || tf;
                  l.timeoutErrorMessage && (e = l.timeoutErrorMessage),
                    r(
                      new X(
                        e,
                        n.clarifyTimeoutError ? X.ETIMEDOUT : X.ECONNABORTED,
                        t,
                        m
                      )
                    ),
                    (m = null);
                }),
                void 0 === u && c.setContentType(null),
                "setRequestHeader" in m &&
                  G.forEach(c.toJSON(), function (t, e) {
                    m.setRequestHeader(e, t);
                  }),
                G.isUndefined(l.withCredentials) ||
                  (m.withCredentials = !!l.withCredentials),
                h && "json" !== h && (m.responseType = l.responseType),
                d && (([o, a] = tN(d, !0)), m.addEventListener("progress", o)),
                f &&
                  m.upload &&
                  (([i, s] = tN(f)),
                  m.upload.addEventListener("progress", i),
                  m.upload.addEventListener("loadend", s)),
                (l.cancelToken || l.signal) &&
                  ((n = (e) => {
                    m &&
                      (r(!e || e.type ? new tI(null, t, m) : e),
                      m.abort(),
                      (m = null));
                  }),
                  l.cancelToken && l.cancelToken.subscribe(n),
                  l.signal &&
                    (l.signal.aborted
                      ? n()
                      : l.signal.addEventListener("abort", n)));
              let y = (function (t) {
                let e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
                return (e && e[1]) || "";
              })(l.url);
              if (y && -1 === tE.protocols.indexOf(y)) {
                r(
                  new X("Unsupported protocol " + y + ":", X.ERR_BAD_REQUEST, t)
                );
                return;
              }
              m.send(u || null);
            });
          },
        tZ = (t, e) => {
          let { length: r } = (t = t ? t.filter(Boolean) : []);
          if (e || r) {
            let r,
              n = new AbortController(),
              i = function (t) {
                if (!r) {
                  (r = !0), s();
                  let e = t instanceof Error ? t : this.reason;
                  n.abort(
                    e instanceof X
                      ? e
                      : new tI(e instanceof Error ? e.message : e)
                  );
                }
              },
              o =
                e &&
                setTimeout(() => {
                  (o = null),
                    i(new X(`timeout ${e} of ms exceeded`, X.ETIMEDOUT));
                }, e),
              s = () => {
                t &&
                  (o && clearTimeout(o),
                  (o = null),
                  t.forEach((t) => {
                    t.unsubscribe
                      ? t.unsubscribe(i)
                      : t.removeEventListener("abort", i);
                  }),
                  (t = null));
              };
            t.forEach((t) => t.addEventListener("abort", i));
            let { signal: a } = n;
            return (a.unsubscribe = () => G.asap(s)), a;
          }
        };
      let tK = function* (t, e) {
          let r,
            n = t.byteLength;
          if (!e || n < e) {
            yield t;
            return;
          }
          let i = 0;
          for (; i < n; ) (r = i + e), yield t.slice(i, r), (i = r);
        },
        tG = async function* (t, e) {
          for await (let r of tX(t)) yield* tK(r, e);
        },
        tX = async function* (t) {
          if (t[Symbol.asyncIterator]) {
            yield* t;
            return;
          }
          let e = t.getReader();
          try {
            for (;;) {
              let { done: t, value: r } = await e.read();
              if (t) break;
              yield r;
            }
          } finally {
            await e.cancel();
          }
        },
        tJ = (t, e, r, n) => {
          let i;
          let o = tG(t, e),
            s = 0,
            a = (t) => {
              !i && ((i = !0), n && n(t));
            };
          return new ReadableStream(
            {
              async pull(t) {
                try {
                  let { done: e, value: n } = await o.next();
                  if (e) {
                    a(), t.close();
                    return;
                  }
                  let i = n.byteLength;
                  if (r) {
                    let t = (s += i);
                    r(t);
                  }
                  t.enqueue(new Uint8Array(n));
                } catch (t) {
                  throw (a(t), t);
                }
              },
              cancel: (t) => (a(t), o.return()),
            },
            { highWaterMark: 2 }
          );
        },
        tQ =
          "function" == typeof fetch &&
          "function" == typeof Request &&
          "function" == typeof Response,
        t0 = tQ && "function" == typeof ReadableStream,
        t1 =
          tQ &&
          ("function" == typeof TextEncoder
            ? ((a = new TextEncoder()), (t) => a.encode(t))
            : async (t) => new Uint8Array(await new Response(t).arrayBuffer())),
        t2 = (t, ...e) => {
          try {
            return !!t(...e);
          } catch (t) {
            return !1;
          }
        },
        t6 =
          t0 &&
          t2(() => {
            let t = !1,
              e = new Request(tE.origin, {
                body: new ReadableStream(),
                method: "POST",
                get duplex() {
                  return (t = !0), "half";
                },
              }).headers.has("Content-Type");
            return t && !e;
          }),
        t3 = t0 && t2(() => G.isReadableStream(new Response("").body)),
        t8 = { stream: t3 && ((t) => t.body) };
      tQ &&
        ((f = new Response()),
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
          t8[t] ||
            (t8[t] = G.isFunction(f[t])
              ? (e) => e[t]()
              : (e, r) => {
                  throw new X(
                    `Response type '${t}' is not supported`,
                    X.ERR_NOT_SUPPORT,
                    r
                  );
                });
        }));
      let t5 = async (t) => {
          if (null == t) return 0;
          if (G.isBlob(t)) return t.size;
          if (G.isSpecCompliantForm(t)) {
            let e = new Request(tE.origin, { method: "POST", body: t });
            return (await e.arrayBuffer()).byteLength;
          }
          return G.isArrayBufferView(t) || G.isArrayBuffer(t)
            ? t.byteLength
            : (G.isURLSearchParams(t) && (t += ""), G.isString(t))
            ? (await t1(t)).byteLength
            : void 0;
        },
        t4 = async (t, e) => {
          let r = G.toFiniteNumber(t.getContentLength());
          return null == r ? t5(e) : r;
        },
        t7 = {
          http: null,
          xhr: tY,
          fetch:
            tQ &&
            (async (t) => {
              let e,
                r,
                {
                  url: n,
                  method: i,
                  data: o,
                  signal: s,
                  cancelToken: a,
                  timeout: l,
                  onDownloadProgress: u,
                  onUploadProgress: c,
                  responseType: h,
                  headers: f,
                  withCredentials: d = "same-origin",
                  fetchOptions: p,
                } = tW(t);
              h = h ? (h + "").toLowerCase() : "text";
              let m = tZ([s, a && a.toAbortSignal()], l),
                g =
                  m &&
                  m.unsubscribe &&
                  (() => {
                    m.unsubscribe();
                  });
              try {
                if (
                  c &&
                  t6 &&
                  "get" !== i &&
                  "head" !== i &&
                  0 !== (r = await t4(f, o))
                ) {
                  let t,
                    e = new Request(n, {
                      method: "POST",
                      body: o,
                      duplex: "half",
                    });
                  if (
                    (G.isFormData(o) &&
                      (t = e.headers.get("content-type")) &&
                      f.setContentType(t),
                    e.body)
                  ) {
                    let [t, n] = t_(r, tN(tj(c)));
                    o = tJ(e.body, 65536, t, n);
                  }
                }
                G.isString(d) || (d = d ? "include" : "omit");
                let s = "credentials" in Request.prototype;
                e = new Request(n, {
                  ...p,
                  signal: m,
                  method: i.toUpperCase(),
                  headers: f.normalize().toJSON(),
                  body: o,
                  duplex: "half",
                  credentials: s ? d : void 0,
                });
                let a = await fetch(e),
                  l = t3 && ("stream" === h || "response" === h);
                if (t3 && (u || (l && g))) {
                  let t = {};
                  ["status", "statusText", "headers"].forEach((e) => {
                    t[e] = a[e];
                  });
                  let e = G.toFiniteNumber(a.headers.get("content-length")),
                    [r, n] = (u && t_(e, tN(tj(u), !0))) || [];
                  a = new Response(
                    tJ(a.body, 65536, r, () => {
                      n && n(), g && g();
                    }),
                    t
                  );
                }
                h = h || "text";
                let y = await t8[G.findKey(t8, h) || "text"](a, t);
                return (
                  !l && g && g(),
                  await new Promise((r, n) => {
                    tF(r, n, {
                      data: y,
                      headers: tL.from(a.headers),
                      status: a.status,
                      statusText: a.statusText,
                      config: t,
                      request: e,
                    });
                  })
                );
              } catch (r) {
                if (
                  (g && g(),
                  r && "TypeError" === r.name && /fetch/i.test(r.message))
                )
                  throw Object.assign(
                    new X("Network Error", X.ERR_NETWORK, t, e),
                    { cause: r.cause || r }
                  );
                throw X.from(r, r && r.code, t, e);
              }
            }),
        };
      G.forEach(t7, (t, e) => {
        if (t) {
          try {
            Object.defineProperty(t, "name", { value: e });
          } catch (t) {}
          Object.defineProperty(t, "adapterName", { value: e });
        }
      });
      let t9 = (t) => `- ${t}`,
        et = (t) => G.isFunction(t) || null === t || !1 === t;
      var ee = (t) => {
        let e, r;
        let { length: n } = (t = G.isArray(t) ? t : [t]),
          i = {};
        for (let o = 0; o < n; o++) {
          let n;
          if (
            ((r = e = t[o]),
            !et(e) && void 0 === (r = t7[(n = String(e)).toLowerCase()]))
          )
            throw new X(`Unknown adapter '${n}'`);
          if (r) break;
          i[n || "#" + o] = r;
        }
        if (!r) {
          let t = Object.entries(i).map(
            ([t, e]) =>
              `adapter ${t} ` +
              (!1 === e
                ? "is not supported by the environment"
                : "is not available in the build")
          );
          throw new X(
            "There is no suitable adapter to dispatch the request " +
              (n
                ? t.length > 1
                  ? "since :\n" + t.map(t9).join("\n")
                  : " " + t9(t[0])
                : "as no adapter specified"),
            "ERR_NOT_SUPPORT"
          );
        }
        return r;
      };
      function er(t) {
        if (
          (t.cancelToken && t.cancelToken.throwIfRequested(),
          t.signal && t.signal.aborted)
        )
          throw new tI(null, t);
      }
      function en(t) {
        return (
          er(t),
          (t.headers = tL.from(t.headers)),
          (t.data = tO.call(t, t.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(t.method) &&
            t.headers.setContentType("application/x-www-form-urlencoded", !1),
          ee(t.adapter || tM.adapter)(t).then(
            function (e) {
              return (
                er(t),
                (e.data = tO.call(t, t.transformResponse, e)),
                (e.headers = tL.from(e.headers)),
                e
              );
            },
            function (e) {
              return (
                !tC(e) &&
                  (er(t),
                  e &&
                    e.response &&
                    ((e.response.data = tO.call(
                      t,
                      t.transformResponse,
                      e.response
                    )),
                    (e.response.headers = tL.from(e.response.headers)))),
                Promise.reject(e)
              );
            }
          )
        );
      }
      let ei = "1.8.4",
        eo = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (t, e) => {
          eo[t] = function (r) {
            return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
          };
        }
      );
      let es = {};
      (eo.transitional = function (t, e, r) {
        function n(t, e) {
          return (
            "[Axios v" +
            ei +
            "] Transitional option '" +
            t +
            "'" +
            e +
            (r ? ". " + r : "")
          );
        }
        return (r, i, o) => {
          if (!1 === t)
            throw new X(
              n(i, " has been removed" + (e ? " in " + e : "")),
              X.ERR_DEPRECATED
            );
          return (
            e &&
              !es[i] &&
              ((es[i] = !0),
              console.warn(
                n(
                  i,
                  " has been deprecated since v" +
                    e +
                    " and will be removed in the near future"
                )
              )),
            !t || t(r, i, o)
          );
        };
      }),
        (eo.spelling = function (t) {
          return (e, r) => (
            console.warn(`${r} is likely a misspelling of ${t}`), !0
          );
        });
      var ea = {
        assertOptions: function (t, e, r) {
          if ("object" != typeof t)
            throw new X("options must be an object", X.ERR_BAD_OPTION_VALUE);
          let n = Object.keys(t),
            i = n.length;
          for (; i-- > 0; ) {
            let o = n[i],
              s = e[o];
            if (s) {
              let e = t[o],
                r = void 0 === e || s(e, o, t);
              if (!0 !== r)
                throw new X(
                  "option " + o + " must be " + r,
                  X.ERR_BAD_OPTION_VALUE
                );
              continue;
            }
            if (!0 !== r) throw new X("Unknown option " + o, X.ERR_BAD_OPTION);
          }
        },
        validators: eo,
      };
      let el = ea.validators;
      class eu {
        constructor(t) {
          (this.defaults = t),
            (this.interceptors = { request: new th(), response: new th() });
        }
        async request(t, e) {
          try {
            return await this._request(t, e);
          } catch (t) {
            if (t instanceof Error) {
              let e = {};
              Error.captureStackTrace
                ? Error.captureStackTrace(e)
                : (e = Error());
              let r = e.stack ? e.stack.replace(/^.+\n/, "") : "";
              try {
                t.stack
                  ? r &&
                    !String(t.stack).endsWith(r.replace(/^.+\n.+\n/, "")) &&
                    (t.stack += "\n" + r)
                  : (t.stack = r);
              } catch (t) {}
            }
            throw t;
          }
        }
        _request(t, e) {
          let r, n;
          "string" == typeof t ? ((e = e || {}).url = t) : (e = t || {});
          let {
            transitional: i,
            paramsSerializer: o,
            headers: s,
          } = (e = t$(this.defaults, e));
          void 0 !== i &&
            ea.assertOptions(
              i,
              {
                silentJSONParsing: el.transitional(el.boolean),
                forcedJSONParsing: el.transitional(el.boolean),
                clarifyTimeoutError: el.transitional(el.boolean),
              },
              !1
            ),
            null != o &&
              (G.isFunction(o)
                ? (e.paramsSerializer = { serialize: o })
                : ea.assertOptions(
                    o,
                    { encode: el.function, serialize: el.function },
                    !0
                  )),
            void 0 !== e.allowAbsoluteUrls ||
              (void 0 !== this.defaults.allowAbsoluteUrls
                ? (e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
                : (e.allowAbsoluteUrls = !0)),
            ea.assertOptions(
              e,
              {
                baseUrl: el.spelling("baseURL"),
                withXsrfToken: el.spelling("withXSRFToken"),
              },
              !0
            ),
            (e.method = (
              e.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let a = s && G.merge(s.common, s[e.method]);
          s &&
            G.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (t) => {
                delete s[t];
              }
            ),
            (e.headers = tL.concat(a, s));
          let l = [],
            u = !0;
          this.interceptors.request.forEach(function (t) {
            ("function" != typeof t.runWhen || !1 !== t.runWhen(e)) &&
              ((u = u && t.synchronous), l.unshift(t.fulfilled, t.rejected));
          });
          let c = [];
          this.interceptors.response.forEach(function (t) {
            c.push(t.fulfilled, t.rejected);
          });
          let h = 0;
          if (!u) {
            let t = [en.bind(this), void 0];
            for (
              t.unshift.apply(t, l),
                t.push.apply(t, c),
                n = t.length,
                r = Promise.resolve(e);
              h < n;

            )
              r = r.then(t[h++], t[h++]);
            return r;
          }
          n = l.length;
          let f = e;
          for (h = 0; h < n; ) {
            let t = l[h++],
              e = l[h++];
            try {
              f = t(f);
            } catch (t) {
              e.call(this, t);
              break;
            }
          }
          try {
            r = en.call(this, f);
          } catch (t) {
            return Promise.reject(t);
          }
          for (h = 0, n = c.length; h < n; ) r = r.then(c[h++], c[h++]);
          return r;
        }
        getUri(t) {
          return tc(
            tH((t = t$(this.defaults, t)).baseURL, t.url, t.allowAbsoluteUrls),
            t.params,
            t.paramsSerializer
          );
        }
      }
      G.forEach(["delete", "get", "head", "options"], function (t) {
        eu.prototype[t] = function (e, r) {
          return this.request(
            t$(r || {}, { method: t, url: e, data: (r || {}).data })
          );
        };
      }),
        G.forEach(["post", "put", "patch"], function (t) {
          function e(e) {
            return function (r, n, i) {
              return this.request(
                t$(i || {}, {
                  method: t,
                  headers: e ? { "Content-Type": "multipart/form-data" } : {},
                  url: r,
                  data: n,
                })
              );
            };
          }
          (eu.prototype[t] = e()), (eu.prototype[t + "Form"] = e(!0));
        });
      class ec {
        constructor(t) {
          let e;
          if ("function" != typeof t)
            throw TypeError("executor must be a function.");
          this.promise = new Promise(function (t) {
            e = t;
          });
          let r = this;
          this.promise.then((t) => {
            if (!r._listeners) return;
            let e = r._listeners.length;
            for (; e-- > 0; ) r._listeners[e](t);
            r._listeners = null;
          }),
            (this.promise.then = (t) => {
              let e;
              let n = new Promise((t) => {
                r.subscribe(t), (e = t);
              }).then(t);
              return (
                (n.cancel = function () {
                  r.unsubscribe(e);
                }),
                n
              );
            }),
            t(function (t, n, i) {
              r.reason || ((r.reason = new tI(t, n, i)), e(r.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(t) {
          if (this.reason) {
            t(this.reason);
            return;
          }
          this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
        }
        unsubscribe(t) {
          if (!this._listeners) return;
          let e = this._listeners.indexOf(t);
          -1 !== e && this._listeners.splice(e, 1);
        }
        toAbortSignal() {
          let t = new AbortController(),
            e = (e) => {
              t.abort(e);
            };
          return (
            this.subscribe(e),
            (t.signal.unsubscribe = () => this.unsubscribe(e)),
            t.signal
          );
        }
        static source() {
          let t;
          return {
            token: new ec(function (e) {
              t = e;
            }),
            cancel: t,
          };
        }
      }
      let eh = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(eh).forEach(([t, e]) => {
        eh[e] = t;
      });
      let ef = (function t(e) {
        let r = new eu(e),
          n = p(eu.prototype.request, r);
        return (
          G.extend(n, eu.prototype, r, { allOwnKeys: !0 }),
          G.extend(n, r, null, { allOwnKeys: !0 }),
          (n.create = function (r) {
            return t(t$(e, r));
          }),
          n
        );
      })(tM);
      (ef.Axios = eu),
        (ef.CanceledError = tI),
        (ef.CancelToken = ec),
        (ef.isCancel = tC),
        (ef.VERSION = ei),
        (ef.toFormData = to),
        (ef.AxiosError = X),
        (ef.Cancel = ef.CanceledError),
        (ef.all = function (t) {
          return Promise.all(t);
        }),
        (ef.spread = function (t) {
          return function (e) {
            return t.apply(null, e);
          };
        }),
        (ef.isAxiosError = function (t) {
          return G.isObject(t) && !0 === t.isAxiosError;
        }),
        (ef.mergeConfig = t$),
        (ef.AxiosHeaders = tL),
        (ef.formToJSON = (t) => tx(G.isHTMLForm(t) ? new FormData(t) : t)),
        (ef.getAdapter = ee),
        (ef.HttpStatusCode = eh),
        (ef.default = ef);
      var ed = ef;
    },
    61994: function (t, e, r) {
      "use strict";
      e.Z = function () {
        for (var t, e, r = 0, n = "", i = arguments.length; r < i; r++)
          (t = arguments[r]) &&
            (e = (function t(e) {
              var r,
                n,
                i = "";
              if ("string" == typeof e || "number" == typeof e) i += e;
              else if ("object" == typeof e) {
                if (Array.isArray(e)) {
                  var o = e.length;
                  for (r = 0; r < o; r++)
                    e[r] && (n = t(e[r])) && (i && (i += " "), (i += n));
                } else for (n in e) e[n] && (i && (i += " "), (i += n));
              }
              return i;
            })(t)) &&
            (n && (n += " "), (n += e));
        return n;
      };
    },
    87336: function (t, e, r) {
      "use strict";
      r.d(e, {
        v: function () {
          return n;
        },
      });
      var n = r(77625);
    },
    48614: function (t, e, r) {
      "use strict";
      r.d(e, {
        M: function () {
          return y;
        },
      });
      var n = r(57437),
        i = r(2265),
        o = r(58881),
        s = r(53576),
        a = r(64252),
        l = r(45750);
      class u extends i.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = this.props.sizeRef.current;
            (t.height = e.offsetHeight || 0),
              (t.width = e.offsetWidth || 0),
              (t.top = e.offsetTop),
              (t.left = e.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function c(t) {
        let { children: e, isPresent: r } = t,
          o = (0, i.useId)(),
          s = (0, i.useRef)(null),
          a = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: c } = (0, i.useContext)(l._);
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: t, height: e, top: n, left: i } = a.current;
            if (r || !s.current || !t || !e) return;
            s.current.dataset.motionPopId = o;
            let l = document.createElement("style");
            return (
              c && (l.nonce = c),
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      o,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(t, "px !important;\n            height: ")
                    .concat(e, "px !important;\n            top: ")
                    .concat(n, "px !important;\n            left: ")
                    .concat(i, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [r]),
          (0, n.jsx)(u, {
            isPresent: r,
            childRef: s,
            sizeRef: a,
            children: i.cloneElement(e, { ref: s }),
          })
        );
      }
      let h = (t) => {
        let {
            children: e,
            initial: r,
            isPresent: o,
            onExitComplete: l,
            custom: u,
            presenceAffectsLayout: h,
            mode: d,
          } = t,
          p = (0, s.h)(f),
          m = (0, i.useId)(),
          g = (0, i.useCallback)(
            (t) => {
              for (let e of (p.set(t, !0), p.values())) if (!e) return;
              l && l();
            },
            [p, l]
          ),
          y = (0, i.useMemo)(
            () => ({
              id: m,
              initial: r,
              isPresent: o,
              custom: u,
              onExitComplete: g,
              register: (t) => (p.set(t, !1), () => p.delete(t)),
            }),
            h ? [Math.random(), g] : [o, g]
          );
        return (
          (0, i.useMemo)(() => {
            p.forEach((t, e) => p.set(e, !1));
          }, [o]),
          i.useEffect(() => {
            o || p.size || !l || l();
          }, [o]),
          "popLayout" === d &&
            (e = (0, n.jsx)(c, { isPresent: o, children: e })),
          (0, n.jsx)(a.O.Provider, { value: y, children: e })
        );
      };
      function f() {
        return new Map();
      }
      var d = r(49637);
      let p = (t) => t.key || "";
      function m(t) {
        let e = [];
        return (
          i.Children.forEach(t, (t) => {
            (0, i.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      var g = r(11534);
      let y = (t) => {
        let {
            children: e,
            custom: r,
            initial: a = !0,
            onExitComplete: l,
            presenceAffectsLayout: u = !0,
            mode: c = "sync",
            propagate: f = !1,
          } = t,
          [y, v] = (0, d.oO)(f),
          w = (0, i.useMemo)(() => m(e), [e]),
          b = f && !y ? [] : w.map(p),
          E = (0, i.useRef)(!0),
          x = (0, i.useRef)(w),
          M = (0, s.h)(() => new Map()),
          [S, A] = (0, i.useState)(w),
          [T, R] = (0, i.useState)(w);
        (0, g.L)(() => {
          (E.current = !1), (x.current = w);
          for (let t = 0; t < T.length; t++) {
            let e = p(T[t]);
            b.includes(e) ? M.delete(e) : !0 !== M.get(e) && M.set(e, !1);
          }
        }, [T, b.length, b.join("-")]);
        let P = [];
        if (w !== S) {
          let t = [...w];
          for (let e = 0; e < T.length; e++) {
            let r = T[e],
              n = p(r);
            b.includes(n) || (t.splice(e, 0, r), P.push(r));
          }
          "wait" === c && P.length && (t = P), R(m(t)), A(w);
          return;
        }
        let { forceRender: B } = (0, i.useContext)(o.p);
        return (0, n.jsx)(n.Fragment, {
          children: T.map((t) => {
            let e = p(t),
              i = (!f || !!y) && (w === T || b.includes(e));
            return (0, n.jsx)(
              h,
              {
                isPresent: i,
                initial: (!E.current || !!a) && void 0,
                custom: i ? void 0 : r,
                presenceAffectsLayout: u,
                mode: c,
                onExitComplete: i
                  ? void 0
                  : () => {
                      if (!M.has(e)) return;
                      M.set(e, !0);
                      let t = !0;
                      M.forEach((e) => {
                        e || (t = !1);
                      }),
                        t &&
                          (null == B || B(),
                          R(x.current),
                          f && (null == v || v()),
                          l && l());
                    },
                children: t,
              },
              e
            );
          }),
        });
      };
    },
    49637: function (t, e, r) {
      "use strict";
      r.d(e, {
        oO: function () {
          return o;
        },
      });
      var n = r(2265),
        i = r(64252);
      function o(t = !0) {
        let e = (0, n.useContext)(i.O);
        if (null === e) return [!0, null];
        let { isPresent: r, onExitComplete: o, register: s } = e,
          a = (0, n.useId)();
        (0, n.useEffect)(() => {
          t && s(a);
        }, [t]);
        let l = (0, n.useCallback)(() => t && o && o(a), [a, o, t]);
        return !r && o ? [!1, l] : [!0];
      }
    },
    58881: function (t, e, r) {
      "use strict";
      r.d(e, {
        p: function () {
          return n;
        },
      });
      let n = (0, r(2265).createContext)({});
    },
    45750: function (t, e, r) {
      "use strict";
      r.d(e, {
        _: function () {
          return n;
        },
      });
      let n = (0, r(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    64252: function (t, e, r) {
      "use strict";
      r.d(e, {
        O: function () {
          return n;
        },
      });
      let n = (0, r(2265).createContext)(null);
    },
    40521: function (t, e, r) {
      "use strict";
      let n;
      function i(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      r.d(e, {
        E: function () {
          return og;
        },
      });
      let o = (t) => Array.isArray(t);
      function s(t, e) {
        if (!Array.isArray(e)) return !1;
        let r = e.length;
        if (r !== t.length) return !1;
        for (let n = 0; n < r; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function a(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function l(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, r) => {
              (e[0][r] = t.get()), (e[1][r] = t.getVelocity());
            }),
          e
        );
      }
      function u(t, e, r, n) {
        if ("function" == typeof e) {
          let [i, o] = l(n);
          e = e(void 0 !== r ? r : t.custom, i, o);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [i, o] = l(n);
          e = e(void 0 !== r ? r : t.custom, i, o);
        }
        return e;
      }
      function c(t, e, r) {
        let n = t.getProps();
        return u(n, e, void 0 !== r ? r : n.custom, t);
      }
      let h = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        f = ["initial", ...h];
      function d(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let p = d(() => void 0 !== window.ScrollTimeline);
      class m {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        get finished() {
          return Promise.all(
            this.animations.map((t) => ("finished" in t ? t.finished : t))
          );
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let r = 0; r < this.animations.length; r++)
            this.animations[r][t] = e;
        }
        attachTimeline(t, e) {
          let r = this.animations.map((r) =>
            p() && r.attachTimeline
              ? r.attachTimeline(t)
              : "function" == typeof e
              ? e(r)
              : void 0
          );
          return () => {
            r.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      class g extends m {
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
      }
      function y(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      function v(t) {
        let e = 0,
          r = t.next(e);
        for (; !r.done && e < 2e4; ) (e += 50), (r = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      function w(t) {
        return "function" == typeof t;
      }
      function b(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let E = (t) => Array.isArray(t) && "number" == typeof t[0],
        x = { linearEasing: void 0 },
        M = (function (t, e) {
          let r = d(t);
          return () => {
            var t;
            return null !== (t = x[e]) && void 0 !== t ? t : r();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        S = (t, e, r) => {
          let n = e - t;
          return 0 === n ? 1 : (r - t) / n;
        },
        A = (t, e, r = 10) => {
          let n = "",
            i = Math.max(Math.round(e / r), 2);
          for (let e = 0; e < i; e++) n += t(S(0, i - 1, e)) + ", ";
          return `linear(${n.substring(0, n.length - 2)})`;
        },
        T = ([t, e, r, n]) => `cubic-bezier(${t}, ${e}, ${r}, ${n})`,
        R = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: T([0, 0.65, 0.55, 1]),
          circOut: T([0.55, 0, 1, 0.45]),
          backIn: T([0.31, 0.01, 0.66, -0.59]),
          backOut: T([0.33, 1.53, 0.69, 0.99]),
        },
        P = { x: !1, y: !1 };
      function B(t, e) {
        let r = (function (t, e, r) {
            if (t instanceof Element) return [t];
            if ("string" == typeof t) {
              let e = document.querySelectorAll(t);
              return e ? Array.from(e) : [];
            }
            return Array.from(t);
          })(t),
          n = new AbortController();
        return [r, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
      }
      function k(t) {
        return (e) => {
          "touch" === e.pointerType || P.x || P.y || t(e);
        };
      }
      let L = (t, e) => !!e && (t === e || L(t, e.parentElement)),
        O = (t) =>
          "mouse" === t.pointerType
            ? "number" != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary,
        C = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        I = new WeakSet();
      function F(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function D(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let U = (t, e) => {
        let r = t.currentTarget;
        if (!r) return;
        let n = F(() => {
          if (I.has(r)) return;
          D(r, "down");
          let t = F(() => {
            D(r, "up");
          });
          r.addEventListener("keyup", t, e),
            r.addEventListener("blur", () => D(r, "cancel"), e);
        });
        r.addEventListener("keydown", n, e),
          r.addEventListener(
            "blur",
            () => r.removeEventListener("keydown", n),
            e
          );
      };
      function N(t) {
        return O(t) && !(P.x || P.y);
      }
      let _ = (t) => 1e3 * t,
        j = (t) => t / 1e3,
        V = (t) => t,
        z = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        H = new Set(z),
        q = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...z,
        ]),
        $ = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        W = (t) => (o(t) ? t[t.length - 1] || 0 : t),
        Y = { skipAnimations: !1, useManualTiming: !1 },
        Z = [
          "read",
          "resolveKeyframes",
          "update",
          "preRender",
          "render",
          "postRender",
        ];
      function K(t, e) {
        let r = !1,
          n = !0,
          i = { delta: 0, timestamp: 0, isProcessing: !1 },
          o = () => (r = !0),
          s = Z.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  r = new Set(),
                  n = !1,
                  i = !1,
                  o = new WeakSet(),
                  s = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  o.has(e) && (l.schedule(e), t()), e(s);
                }
                let l = {
                  schedule: (t, i = !1, s = !1) => {
                    let a = s && n ? e : r;
                    return i && o.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    r.delete(t), o.delete(t);
                  },
                  process: (t) => {
                    if (((s = t), n)) {
                      i = !0;
                      return;
                    }
                    (n = !0),
                      ([e, r] = [r, e]),
                      e.forEach(a),
                      e.clear(),
                      (n = !1),
                      i && ((i = !1), l.process(t));
                  },
                };
                return l;
              })(o)),
              t
            ),
            {}
          ),
          {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: c,
            render: h,
            postRender: f,
          } = s,
          d = () => {
            let o = Y.useManualTiming ? i.timestamp : performance.now();
            (r = !1),
              (i.delta = n
                ? 1e3 / 60
                : Math.max(Math.min(o - i.timestamp, 40), 1)),
              (i.timestamp = o),
              (i.isProcessing = !0),
              a.process(i),
              l.process(i),
              u.process(i),
              c.process(i),
              h.process(i),
              f.process(i),
              (i.isProcessing = !1),
              r && e && ((n = !1), t(d));
          },
          p = () => {
            (r = !0), (n = !0), i.isProcessing || t(d);
          };
        return {
          schedule: Z.reduce((t, e) => {
            let n = s[e];
            return (
              (t[e] = (t, e = !1, i = !1) => (r || p(), n.schedule(t, e, i))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < Z.length; e++) s[Z[e]].cancel(t);
          },
          state: i,
          steps: s,
        };
      }
      let {
        schedule: G,
        cancel: X,
        state: J,
        steps: Q,
      } = K(
        "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : V,
        !0
      );
      function tt() {
        n = void 0;
      }
      let te = {
        now: () => (
          void 0 === n &&
            te.set(
              J.isProcessing || Y.useManualTiming
                ? J.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(tt);
        },
      };
      function tr(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function tn(t, e) {
        let r = t.indexOf(e);
        r > -1 && t.splice(r, 1);
      }
      class ti {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return tr(this.subscriptions, t), () => tn(this.subscriptions, t);
        }
        notify(t, e, r) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, r);
            else
              for (let i = 0; i < n; i++) {
                let n = this.subscriptions[i];
                n && n(t, e, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let to = (t) => !isNaN(parseFloat(t)),
        ts = { current: void 0 };
      class ta {
        constructor(t, e = {}) {
          (this.version = "11.18.2"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let r = te.now();
              this.updatedAt !== r && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = te.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = to(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new ti());
          let r = this.events[t].add(e);
          return "change" === t
            ? () => {
                r(),
                  G.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, r) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - r);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return ts.current && ts.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = te.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let r = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            r ? (1e3 / r) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function tl(t, e) {
        return new ta(t, e);
      }
      let tu = (t) => !!(t && t.getVelocity);
      function tc(t, e) {
        let r = t.getValue("willChange");
        if (tu(r) && r.add) return r.add(e);
      }
      let th = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        tf = "data-" + th("framerAppearId"),
        td = { current: !1 },
        tp = (t, e, r) =>
          (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;
      function tm(t, e, r, n) {
        if (t === e && r === n) return V;
        let i = (e) =>
          (function (t, e, r, n, i) {
            let o, s;
            let a = 0;
            do
              (o = tp((s = e + (r - e) / 2), n, i) - t) > 0 ? (r = s) : (e = s);
            while (Math.abs(o) > 1e-7 && ++a < 12);
            return s;
          })(e, 0, 1, t, r);
        return (t) => (0 === t || 1 === t ? t : tp(i(t), e, n));
      }
      let tg = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        ty = (t) => (e) => 1 - t(1 - e),
        tv = tm(0.33, 1.53, 0.69, 0.99),
        tw = ty(tv),
        tb = tg(tw),
        tE = (t) =>
          (t *= 2) < 1 ? 0.5 * tw(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        tx = (t) => 1 - Math.sin(Math.acos(t)),
        tM = ty(tx),
        tS = tg(tx),
        tA = (t) => /^0[^.\s]+$/u.test(t),
        tT = (t, e, r) => (r > e ? e : r < t ? t : r),
        tR = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        tP = { ...tR, transform: (t) => tT(0, 1, t) },
        tB = { ...tR, default: 1 },
        tk = (t) => Math.round(1e5 * t) / 1e5,
        tL = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tO =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tC = (t, e) => (r) =>
          !!(
            ("string" == typeof r && tO.test(r) && r.startsWith(t)) ||
            (e && null != r && Object.prototype.hasOwnProperty.call(r, e))
          ),
        tI = (t, e, r) => (n) => {
          if ("string" != typeof n) return n;
          let [i, o, s, a] = n.match(tL);
          return {
            [t]: parseFloat(i),
            [e]: parseFloat(o),
            [r]: parseFloat(s),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        tF = (t) => tT(0, 255, t),
        tD = { ...tR, transform: (t) => Math.round(tF(t)) },
        tU = {
          test: tC("rgb", "red"),
          parse: tI("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: r, alpha: n = 1 }) =>
            "rgba(" +
            tD.transform(t) +
            ", " +
            tD.transform(e) +
            ", " +
            tD.transform(r) +
            ", " +
            tk(tP.transform(n)) +
            ")",
        },
        tN = {
          test: tC("#"),
          parse: function (t) {
            let e = "",
              r = "",
              n = "",
              i = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (r = t.substring(3, 5)),
                  (n = t.substring(5, 7)),
                  (i = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (r = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (i = t.substring(4, 5)),
                  (e += e),
                  (r += r),
                  (n += n),
                  (i += i)),
              {
                red: parseInt(e, 16),
                green: parseInt(r, 16),
                blue: parseInt(n, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: tU.transform,
        },
        t_ = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        tj = t_("deg"),
        tV = t_("%"),
        tz = t_("px"),
        tH = t_("vh"),
        tq = t_("vw"),
        t$ = {
          ...tV,
          parse: (t) => tV.parse(t) / 100,
          transform: (t) => tV.transform(100 * t),
        },
        tW = {
          test: tC("hsl", "hue"),
          parse: tI("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: r, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            tV.transform(tk(e)) +
            ", " +
            tV.transform(tk(r)) +
            ", " +
            tk(tP.transform(n)) +
            ")",
        },
        tY = {
          test: (t) => tU.test(t) || tN.test(t) || tW.test(t),
          parse: (t) =>
            tU.test(t) ? tU.parse(t) : tW.test(t) ? tW.parse(t) : tN.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
              ? tU.transform(t)
              : tW.transform(t),
        },
        tZ =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tK = "number",
        tG = "color",
        tX =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function tJ(t) {
        let e = t.toString(),
          r = [],
          n = { color: [], number: [], var: [] },
          i = [],
          o = 0,
          s = e
            .replace(
              tX,
              (t) => (
                tY.test(t)
                  ? (n.color.push(o), i.push(tG), r.push(tY.parse(t)))
                  : t.startsWith("var(")
                  ? (n.var.push(o), i.push("var"), r.push(t))
                  : (n.number.push(o), i.push(tK), r.push(parseFloat(t))),
                ++o,
                "${}"
              )
            )
            .split("${}");
        return { values: r, split: s, indexes: n, types: i };
      }
      function tQ(t) {
        return tJ(t).values;
      }
      function t0(t) {
        let { split: e, types: r } = tJ(t),
          n = e.length;
        return (t) => {
          let i = "";
          for (let o = 0; o < n; o++)
            if (((i += e[o]), void 0 !== t[o])) {
              let e = r[o];
              e === tK
                ? (i += tk(t[o]))
                : e === tG
                ? (i += tY.transform(t[o]))
                : (i += t[o]);
            }
          return i;
        };
      }
      let t1 = (t) => ("number" == typeof t ? 0 : t),
        t2 = {
          test: function (t) {
            var e, r;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(tL)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (r = t.match(tZ)) || void 0 === r
                  ? void 0
                  : r.length) || 0) >
                0
            );
          },
          parse: tQ,
          createTransformer: t0,
          getAnimatableNone: function (t) {
            let e = tQ(t);
            return t0(t)(e.map(t1));
          },
        },
        t6 = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function t3(t) {
        let [e, r] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = r.match(tL) || [];
        if (!n) return t;
        let i = r.replace(n, ""),
          o = t6.has(e) ? 1 : 0;
        return n !== r && (o *= 100), e + "(" + o + i + ")";
      }
      let t8 = /\b([a-z-]*)\(.*?\)/gu,
        t5 = {
          ...t2,
          getAnimatableNone: (t) => {
            let e = t.match(t8);
            return e ? e.map(t3).join(" ") : t;
          },
        },
        t4 = { ...tR, transform: Math.round },
        t7 = {
          borderWidth: tz,
          borderTopWidth: tz,
          borderRightWidth: tz,
          borderBottomWidth: tz,
          borderLeftWidth: tz,
          borderRadius: tz,
          radius: tz,
          borderTopLeftRadius: tz,
          borderTopRightRadius: tz,
          borderBottomRightRadius: tz,
          borderBottomLeftRadius: tz,
          width: tz,
          maxWidth: tz,
          height: tz,
          maxHeight: tz,
          top: tz,
          right: tz,
          bottom: tz,
          left: tz,
          padding: tz,
          paddingTop: tz,
          paddingRight: tz,
          paddingBottom: tz,
          paddingLeft: tz,
          margin: tz,
          marginTop: tz,
          marginRight: tz,
          marginBottom: tz,
          marginLeft: tz,
          backgroundPositionX: tz,
          backgroundPositionY: tz,
          rotate: tj,
          rotateX: tj,
          rotateY: tj,
          rotateZ: tj,
          scale: tB,
          scaleX: tB,
          scaleY: tB,
          scaleZ: tB,
          skew: tj,
          skewX: tj,
          skewY: tj,
          distance: tz,
          translateX: tz,
          translateY: tz,
          translateZ: tz,
          x: tz,
          y: tz,
          z: tz,
          perspective: tz,
          transformPerspective: tz,
          opacity: tP,
          originX: t$,
          originY: t$,
          originZ: tz,
          zIndex: t4,
          size: tz,
          fillOpacity: tP,
          strokeOpacity: tP,
          numOctaves: t4,
        },
        t9 = {
          ...t7,
          color: tY,
          backgroundColor: tY,
          outlineColor: tY,
          fill: tY,
          stroke: tY,
          borderColor: tY,
          borderTopColor: tY,
          borderRightColor: tY,
          borderBottomColor: tY,
          borderLeftColor: tY,
          filter: t5,
          WebkitFilter: t5,
        },
        et = (t) => t9[t];
      function ee(t, e) {
        let r = et(t);
        return (
          r !== t5 && (r = t2),
          r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
        );
      }
      let er = new Set(["auto", "none", "0"]),
        en = (t) => t === tR || t === tz,
        ei = (t, e) => parseFloat(t.split(", ")[e]),
        eo =
          (t, e) =>
          (r, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let i = n.match(/^matrix3d\((.+)\)$/u);
            if (i) return ei(i[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? ei(e[1], t) : 0;
            }
          },
        es = new Set(["x", "y", "z"]),
        ea = z.filter((t) => !es.has(t)),
        el = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: r = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(r),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: r = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(r),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: eo(4, 13),
          y: eo(5, 14),
        };
      (el.translateX = el.x), (el.translateY = el.y);
      let eu = new Set(),
        ec = !1,
        eh = !1;
      function ef() {
        if (eh) {
          let t = Array.from(eu).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            r = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                ea.forEach((r) => {
                  let n = t.getValue(r);
                  void 0 !== n &&
                    (e.push([r, n.get()]),
                    n.set(r.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (r.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = r.get(t);
              e &&
                e.forEach(([e, r]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(r);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (eh = !1), (ec = !1), eu.forEach((t) => t.complete()), eu.clear();
      }
      function ed() {
        eu.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (eh = !0);
        });
      }
      class ep {
        constructor(t, e, r, n, i, o = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = r),
            (this.motionValue = n),
            (this.element = i),
            (this.isAsync = o);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (eu.add(this),
                ec || ((ec = !0), G.read(ed), G.resolveKeyframes(ef)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: r,
            motionValue: n,
          } = this;
          for (let i = 0; i < t.length; i++)
            if (null === t[i]) {
              if (0 === i) {
                let i = null == n ? void 0 : n.get(),
                  o = t[t.length - 1];
                if (void 0 !== i) t[0] = i;
                else if (r && e) {
                  let n = r.readValue(e, o);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = o), n && void 0 === i && n.set(t[0]);
              } else t[i] = t[i - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            eu.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), eu.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let em = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        eg = (t) => (e) => "string" == typeof e && e.startsWith(t),
        ey = eg("--"),
        ev = eg("var(--"),
        ew = (t) => !!ev(t) && eb.test(t.split("/*")[0].trim()),
        eb =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        eE = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        ex = (t) => (e) => e.test(t),
        eM = [
          tR,
          tz,
          tV,
          tj,
          tq,
          tH,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        eS = (t) => eM.find(ex(t));
      class eA extends ep {
        constructor(t, e, r, n, i) {
          super(t, e, r, n, i, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: r } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let r = 0; r < t.length; r++) {
            let n = t[r];
            if ("string" == typeof n && ew((n = n.trim()))) {
              let i = (function t(e, r, n = 1) {
                V(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [i, o] = (function (t) {
                  let e = eE.exec(t);
                  if (!e) return [,];
                  let [, r, n, i] = e;
                  return [`--${null != r ? r : n}`, i];
                })(e);
                if (!i) return;
                let s = window.getComputedStyle(r).getPropertyValue(i);
                if (s) {
                  let t = s.trim();
                  return em(t) ? parseFloat(t) : t;
                }
                return ew(o) ? t(o, r, n + 1) : o;
              })(n, e.current);
              void 0 !== i && (t[r] = i),
                r === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !q.has(r) || 2 !== t.length))
            return;
          let [n, i] = t,
            o = eS(n),
            s = eS(i);
          if (o !== s) {
            if (en(o) && en(s))
              for (let e = 0; e < t.length; e++) {
                let r = t[e];
                "string" == typeof r && (t[e] = parseFloat(r));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            r = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            ("number" == typeof (n = t[e])
              ? 0 === n
              : null === n || "none" === n || "0" === n || tA(n)) && r.push(e);
          }
          r.length &&
            (function (t, e, r) {
              let n,
                i = 0;
              for (; i < t.length && !n; ) {
                let e = t[i];
                "string" == typeof e &&
                  !er.has(e) &&
                  tJ(e).values.length &&
                  (n = t[i]),
                  i++;
              }
              if (n && r) for (let i of e) t[i] = ee(r, n);
            })(t, r, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: r } = this;
          if (!t || !t.current) return;
          "height" === r && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = el[r](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(r, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: r, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let i = e.getValue(r);
          i && i.jump(this.measuredOrigin, !1);
          let o = n.length - 1,
            s = n[o];
          (n[o] = el[r](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== s &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = s),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, r]) => {
                e.getValue(t).set(r);
              }),
            this.resolveNoneKeyframes();
        }
      }
      let eT = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (t2.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        eR = (t) => null !== t;
      function eP(t, { repeat: e, repeatType: r = "loop" }, n) {
        let i = t.filter(eR),
          o = e && "loop" !== r && e % 2 == 1 ? 0 : i.length - 1;
        return o && void 0 !== n ? n : i[o];
      }
      class eB {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: r = "keyframes",
          repeat: n = 0,
          repeatDelay: i = 0,
          repeatType: o = "loop",
          ...s
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = te.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: r,
              repeat: n,
              repeatDelay: i,
              repeatType: o,
              ...s,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (ed(), ef()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = te.now()), (this.hasAttemptedResolve = !0);
          let {
            name: r,
            type: n,
            velocity: i,
            delay: o,
            onComplete: s,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, r, n) {
              let i = t[0];
              if (null === i) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let o = t[t.length - 1],
                s = eT(i, e),
                a = eT(o, e);
              return (
                V(
                  s === a,
                  `You are trying to animate ${e} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`
                ),
                !!s &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let r = 0; r < t.length; r++)
                      if (t[r] !== e) return !0;
                  })(t) ||
                    (("spring" === r || w(r)) && n))
              );
            })(t, r, n, i)
          ) {
            if (td.current || !o) {
              a && a(eP(t, this.options, e)),
                s && s(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      let ek = (t, e, r) => t + (e - t) * r;
      function eL(t, e, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? t + (e - t) * 6 * r
          : r < 0.5
          ? e
          : r < 2 / 3
          ? t + (e - t) * (2 / 3 - r) * 6
          : t;
      }
      function eO(t, e) {
        return (r) => (r > 0 ? e : t);
      }
      let eC = (t, e, r) => {
          let n = t * t,
            i = r * (e * e - n) + n;
          return i < 0 ? 0 : Math.sqrt(i);
        },
        eI = [tN, tU, tW],
        eF = (t) => eI.find((e) => e.test(t));
      function eD(t) {
        let e = eF(t);
        if (
          (V(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let r = e.parse(t);
        return (
          e === tW &&
            (r = (function ({ hue: t, saturation: e, lightness: r, alpha: n }) {
              (t /= 360), (r /= 100);
              let i = 0,
                o = 0,
                s = 0;
              if ((e /= 100)) {
                let n = r < 0.5 ? r * (1 + e) : r + e - r * e,
                  a = 2 * r - n;
                (i = eL(a, n, t + 1 / 3)),
                  (o = eL(a, n, t)),
                  (s = eL(a, n, t - 1 / 3));
              } else i = o = s = r;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: n,
              };
            })(r)),
          r
        );
      }
      let eU = (t, e) => {
          let r = eD(t),
            n = eD(e);
          if (!r || !n) return eO(t, e);
          let i = { ...r };
          return (t) => (
            (i.red = eC(r.red, n.red, t)),
            (i.green = eC(r.green, n.green, t)),
            (i.blue = eC(r.blue, n.blue, t)),
            (i.alpha = ek(r.alpha, n.alpha, t)),
            tU.transform(i)
          );
        },
        eN = (t, e) => (r) => e(t(r)),
        e_ = (...t) => t.reduce(eN),
        ej = new Set(["none", "hidden"]);
      function eV(t, e) {
        return (r) => ek(t, e, r);
      }
      function ez(t) {
        return "number" == typeof t
          ? eV
          : "string" == typeof t
          ? ew(t)
            ? eO
            : tY.test(t)
            ? eU
            : e$
          : Array.isArray(t)
          ? eH
          : "object" == typeof t
          ? tY.test(t)
            ? eU
            : eq
          : eO;
      }
      function eH(t, e) {
        let r = [...t],
          n = r.length,
          i = t.map((t, r) => ez(t)(t, e[r]));
        return (t) => {
          for (let e = 0; e < n; e++) r[e] = i[e](t);
          return r;
        };
      }
      function eq(t, e) {
        let r = { ...t, ...e },
          n = {};
        for (let i in r)
          void 0 !== t[i] && void 0 !== e[i] && (n[i] = ez(t[i])(t[i], e[i]));
        return (t) => {
          for (let e in n) r[e] = n[e](t);
          return r;
        };
      }
      let e$ = (t, e) => {
        let r = t2.createTransformer(e),
          n = tJ(t),
          i = tJ(e);
        return n.indexes.var.length === i.indexes.var.length &&
          n.indexes.color.length === i.indexes.color.length &&
          n.indexes.number.length >= i.indexes.number.length
          ? (ej.has(t) && !i.values.length) || (ej.has(e) && !n.values.length)
            ? ej.has(t)
              ? (r) => (r <= 0 ? t : e)
              : (r) => (r >= 1 ? e : t)
            : e_(
                eH(
                  (function (t, e) {
                    var r;
                    let n = [],
                      i = { color: 0, var: 0, number: 0 };
                    for (let o = 0; o < e.values.length; o++) {
                      let s = e.types[o],
                        a = t.indexes[s][i[s]],
                        l = null !== (r = t.values[a]) && void 0 !== r ? r : 0;
                      (n[o] = l), i[s]++;
                    }
                    return n;
                  })(n, i),
                  i.values
                ),
                r
              )
          : (V(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            eO(t, e));
      };
      function eW(t, e, r) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof r
          ? ek(t, e, r)
          : ez(t)(t, e);
      }
      function eY(t, e, r) {
        var n, i;
        let o = Math.max(e - 5, 0);
        return (n = r - t(o)), (i = e - o) ? (1e3 / i) * n : 0;
      }
      let eZ = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function eK(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let eG = ["duration", "bounce"],
        eX = ["stiffness", "damping", "mass"];
      function eJ(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function eQ(t = eZ.visualDuration, e = eZ.bounce) {
        let r;
        let n =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: i, restDelta: o } = n,
          s = n.keyframes[0],
          a = n.keyframes[n.keyframes.length - 1],
          l = { done: !1, value: s },
          {
            stiffness: u,
            damping: c,
            mass: h,
            duration: f,
            velocity: d,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: eZ.velocity,
              stiffness: eZ.stiffness,
              damping: eZ.damping,
              mass: eZ.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!eJ(t, eX) && eJ(t, eG)) {
              if (t.visualDuration) {
                let r = (2 * Math.PI) / (1.2 * t.visualDuration),
                  n = r * r,
                  i = 2 * tT(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                e = { ...e, mass: eZ.mass, stiffness: n, damping: i };
              } else {
                let r = (function ({
                  duration: t = eZ.duration,
                  bounce: e = eZ.bounce,
                  velocity: r = eZ.velocity,
                  mass: n = eZ.mass,
                }) {
                  let i, o;
                  V(
                    t <= _(eZ.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let s = 1 - e;
                  (s = tT(eZ.minDamping, eZ.maxDamping, s)),
                    (t = tT(eZ.minDuration, eZ.maxDuration, j(t))),
                    s < 1
                      ? ((i = (e) => {
                          let n = e * s,
                            i = n * t;
                          return 0.001 - ((n - r) / eK(e, s)) * Math.exp(-i);
                        }),
                        (o = (e) => {
                          let n = e * s * t,
                            o = Math.pow(s, 2) * Math.pow(e, 2) * t,
                            a = eK(Math.pow(e, 2), s);
                          return (
                            ((n * r + r - o) *
                              Math.exp(-n) *
                              (-i(e) + 0.001 > 0 ? -1 : 1)) /
                            a
                          );
                        }))
                      : ((i = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - r) * t + 1)),
                        (o = (e) => t * t * (r - e) * Math.exp(-e * t)));
                  let a = (function (t, e, r) {
                    let n = r;
                    for (let r = 1; r < 12; r++) n -= t(n) / e(n);
                    return n;
                  })(i, o, 5 / t);
                  if (((t = _(t)), isNaN(a)))
                    return {
                      stiffness: eZ.stiffness,
                      damping: eZ.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(a, 2) * n;
                    return {
                      stiffness: e,
                      damping: 2 * s * Math.sqrt(n * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...r, mass: eZ.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...n, velocity: -j(n.velocity || 0) }),
          m = d || 0,
          g = c / (2 * Math.sqrt(u * h)),
          y = a - s,
          w = j(Math.sqrt(u / h)),
          b = 5 > Math.abs(y);
        if (
          (i || (i = b ? eZ.restSpeed.granular : eZ.restSpeed.default),
          o || (o = b ? eZ.restDelta.granular : eZ.restDelta.default),
          g < 1)
        ) {
          let t = eK(w, g);
          r = (e) =>
            a -
            Math.exp(-g * w * e) *
              (((m + g * w * y) / t) * Math.sin(t * e) + y * Math.cos(t * e));
        } else if (1 === g)
          r = (t) => a - Math.exp(-w * t) * (y + (m + w * y) * t);
        else {
          let t = w * Math.sqrt(g * g - 1);
          r = (e) => {
            let r = Math.exp(-g * w * e),
              n = Math.min(t * e, 300);
            return (
              a -
              (r * ((m + g * w * y) * Math.sinh(n) + t * y * Math.cosh(n))) / t
            );
          };
        }
        let E = {
          calculatedDuration: (p && f) || null,
          next: (t) => {
            let e = r(t);
            if (p) l.done = t >= f;
            else {
              let n = 0;
              g < 1 && (n = 0 === t ? _(m) : eY(r, t, e));
              let s = Math.abs(n) <= i,
                u = Math.abs(a - e) <= o;
              l.done = s && u;
            }
            return (l.value = l.done ? a : e), l;
          },
          toString: () => {
            let t = Math.min(v(E), 2e4),
              e = A((e) => E.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return E;
      }
      function e0({
        keyframes: t,
        velocity: e = 0,
        power: r = 0.8,
        timeConstant: n = 325,
        bounceDamping: i = 10,
        bounceStiffness: o = 500,
        modifyTarget: s,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let h, f;
        let d = t[0],
          p = { done: !1, value: d },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          y = r * e,
          v = d + y,
          w = void 0 === s ? v : s(v);
        w !== v && (y = w - d);
        let b = (t) => -y * Math.exp(-t / n),
          E = (t) => w + b(t),
          x = (t) => {
            let e = b(t),
              r = E(t);
            (p.done = Math.abs(e) <= u), (p.value = p.done ? w : r);
          },
          M = (t) => {
            m(p.value) &&
              ((h = t),
              (f = eQ({
                keyframes: [p.value, g(p.value)],
                velocity: eY(E, t, p.value),
                damping: i,
                stiffness: o,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          M(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (f || void 0 !== h || ((e = !0), x(t), M(t)),
              void 0 !== h && t >= h)
                ? f.next(t - h)
                : (e || x(t), p);
            },
          }
        );
      }
      let e1 = tm(0.42, 0, 1, 1),
        e2 = tm(0, 0, 0.58, 1),
        e6 = tm(0.42, 0, 0.58, 1),
        e3 = (t) => Array.isArray(t) && "number" != typeof t[0],
        e8 = {
          linear: V,
          easeIn: e1,
          easeInOut: e6,
          easeOut: e2,
          circIn: tx,
          circInOut: tS,
          circOut: tM,
          backIn: tw,
          backInOut: tb,
          backOut: tv,
          anticipate: tE,
        },
        e5 = (t) => {
          if (E(t)) {
            V(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, r, n, i] = t;
            return tm(e, r, n, i);
          }
          return "string" == typeof t
            ? (V(void 0 !== e8[t], `Invalid easing type '${t}'`), e8[t])
            : t;
        };
      function e4({
        duration: t = 300,
        keyframes: e,
        times: r,
        ease: n = "easeInOut",
      }) {
        let i = e3(n) ? n.map(e5) : e5(n),
          o = { done: !1, value: e[0] },
          s = (function (t, e, { clamp: r = !0, ease: n, mixer: i } = {}) {
            let o = t.length;
            if (
              (V(
                o === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === o)
            )
              return () => e[0];
            if (2 === o && e[0] === e[1]) return () => e[1];
            let s = t[0] === t[1];
            t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let a = (function (t, e, r) {
                let n = [],
                  i = r || eW,
                  o = t.length - 1;
                for (let r = 0; r < o; r++) {
                  let o = i(t[r], t[r + 1]);
                  e && (o = e_(Array.isArray(e) ? e[r] || V : e, o)), n.push(o);
                }
                return n;
              })(e, n, i),
              l = a.length,
              u = (r) => {
                if (s && r < t[0]) return e[0];
                let n = 0;
                if (l > 1) for (; n < t.length - 2 && !(r < t[n + 1]); n++);
                let i = S(t[n], t[n + 1], r);
                return a[n](i);
              };
            return r ? (e) => u(tT(t[0], t[o - 1], e)) : u;
          })(
            (r && r.length === e.length
              ? r
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let r = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let i = S(0, e, n);
                        t.push(ek(r, 1, i));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(i)
                ? i
                : e.map(() => i || e6).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((o.value = s(e)), (o.done = e >= t), o),
        };
      }
      let e7 = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => G.update(e, !0),
            stop: () => X(e),
            now: () => (J.isProcessing ? J.timestamp : te.now()),
          };
        },
        e9 = { decay: e0, inertia: e0, tween: e4, keyframes: e4, spring: eQ },
        rt = (t) => t / 100;
      class re extends eB {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: r,
              element: n,
              keyframes: i,
            } = this.options,
            o = (null == n ? void 0 : n.KeyframeResolver) || ep;
          (this.resolver = new o(
            i,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            r,
            n
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let e, r;
          let {
              type: n = "keyframes",
              repeat: i = 0,
              repeatDelay: o = 0,
              repeatType: s,
              velocity: a = 0,
            } = this.options,
            l = w(n) ? n : e9[n] || e4;
          l !== e4 &&
            "number" != typeof t[0] &&
            ((e = e_(rt, eW(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === s &&
            (r = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration && (u.calculatedDuration = v(u));
          let { calculatedDuration: c } = u,
            h = c + o;
          return {
            generator: u,
            mirroredGenerator: r,
            mapPercentToKeyframes: e,
            calculatedDuration: c,
            resolvedDuration: h,
            totalDuration: h * (i + 1) - o,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: r } = this;
          if (!r) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: i,
            mirroredGenerator: o,
            mapPercentToKeyframes: s,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: c,
          } = r;
          if (null === this.startTime) return i.next(0);
          let {
            delay: h,
            repeat: f,
            repeatType: d,
            repeatDelay: p,
            onUpdate: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let v = this.currentTime,
            w = i;
          if (f) {
            let t = Math.min(this.currentTime, u) / c,
              e = Math.floor(t),
              r = t % 1;
            !r && t >= 1 && (r = 1),
              1 === r && e--,
              (e = Math.min(e, f + 1)) % 2 &&
                ("reverse" === d
                  ? ((r = 1 - r), p && (r -= p / c))
                  : "mirror" === d && (w = o)),
              (v = tT(0, 1, r) * c);
          }
          let b = y ? { done: !1, value: a[0] } : w.next(v);
          s && (b.value = s(b.value));
          let { done: E } = b;
          y ||
            null === l ||
            (E =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let x =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && E));
          return (
            x && void 0 !== n && (b.value = eP(a, this.options, n)),
            m && m(b.value),
            x && this.finish(),
            b
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? j(t.calculatedDuration) : 0;
        }
        get time() {
          return j(this.currentTime);
        }
        set time(t) {
          (t = _(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = j(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = e7, onPlay: e, startTime: r } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = n)
            : (this.startTime = null != r ? r : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let rr = new Set(["opacity", "clipPath", "filter", "transform"]),
        rn = d(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
        ri = { anticipate: tE, backInOut: tb, circInOut: tS };
      class ro extends eB {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: r,
            element: n,
            keyframes: i,
          } = this.options;
          (this.resolver = new eA(
            i,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            r,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var r;
          let {
            duration: n = 300,
            times: i,
            ease: o,
            type: s,
            motionValue: a,
            name: l,
            startTime: u,
          } = this.options;
          if (!a.owner || !a.owner.current) return !1;
          if (
            ("string" == typeof o && M() && o in ri && (o = ri[o]),
            w((r = this.options).type) ||
              "spring" === r.type ||
              !(function t(e) {
                return !!(
                  ("function" == typeof e && M()) ||
                  !e ||
                  ("string" == typeof e && (e in R || M())) ||
                  E(e) ||
                  (Array.isArray(e) && e.every(t))
                );
              })(r.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: r,
                motionValue: a,
                element: l,
                ...u
              } = this.options,
              c = (function (t, e) {
                let r = new re({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  i = [],
                  o = 0;
                for (; !n.done && o < 2e4; )
                  i.push((n = r.sample(o)).value), (o += 10);
                return {
                  times: void 0,
                  keyframes: i,
                  duration: o - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = c.keyframes).length && (t[1] = t[0]),
              (n = c.duration),
              (i = c.times),
              (o = c.ease),
              (s = "keyframes");
          }
          let c = (function (
            t,
            e,
            r,
            {
              delay: n = 0,
              duration: i = 300,
              repeat: o = 0,
              repeatType: s = "loop",
              ease: a = "easeInOut",
              times: l,
            } = {}
          ) {
            let u = { [e]: r };
            l && (u.offset = l);
            let c = (function t(e, r) {
              if (e)
                return "function" == typeof e && M()
                  ? A(e, r)
                  : E(e)
                  ? T(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, r) || R.easeOut)
                  : R[e];
            })(a, i);
            return (
              Array.isArray(c) && (u.easing = c),
              t.animate(u, {
                delay: n,
                duration: i,
                easing: Array.isArray(c) ? "linear" : c,
                fill: "both",
                iterations: o + 1,
                direction: "reverse" === s ? "alternate" : "normal",
              })
            );
          })(a.owner.current, l, t, {
            ...this.options,
            duration: n,
            times: i,
            ease: o,
          });
          return (
            (c.startTime = null != u ? u : this.calcStartTime()),
            this.pendingTimeline
              ? (b(c, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: r } = this.options;
                  a.set(eP(t, this.options, e)),
                    r && r(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: c,
              duration: n,
              times: i,
              type: s,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return j(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return j(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: r } = e;
          r.currentTime = _(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: r } = e;
          r.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return V;
            let { animation: r } = e;
            b(r, t);
          } else this.pendingTimeline = t;
          return V;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: r,
            duration: n,
            type: i,
            ease: o,
            times: s,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: a,
                element: l,
                ...u
              } = this.options,
              c = new re({
                ...u,
                keyframes: r,
                duration: n,
                type: i,
                ease: o,
                times: s,
                isGenerator: !0,
              }),
              h = _(this.time);
            t.setWithVelocity(c.sample(h - 10).value, c.sample(h).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: r,
            repeatDelay: n,
            repeatType: i,
            damping: o,
            type: s,
          } = t;
          if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
            return !1;
          let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
          return (
            rn() &&
            r &&
            rr.has(r) &&
            !a &&
            !l &&
            !n &&
            "mirror" !== i &&
            0 !== o &&
            "inertia" !== s
          );
        }
      }
      let rs = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        ra = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        rl = { type: "keyframes", duration: 0.8 },
        ru = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        rc = (t, { keyframes: e }) =>
          e.length > 2
            ? rl
            : H.has(t)
            ? t.startsWith("scale")
              ? ra(e[1])
              : rs
            : ru,
        rh =
          (t, e, r, n = {}, i, o) =>
          (s) => {
            let a = y(n, t) || {},
              l = a.delay || n.delay || 0,
              { elapsed: u = 0 } = n;
            u -= _(l);
            let c = {
              keyframes: Array.isArray(r) ? r : [null, r],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...a,
              delay: -u,
              onUpdate: (t) => {
                e.set(t), a.onUpdate && a.onUpdate(t);
              },
              onComplete: () => {
                s(), a.onComplete && a.onComplete();
              },
              name: t,
              motionValue: e,
              element: o ? void 0 : i,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: r,
              staggerChildren: n,
              staggerDirection: i,
              repeat: o,
              repeatType: s,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...c
            }) {
              return !!Object.keys(c).length;
            })(a) && (c = { ...c, ...rc(t, c) }),
              c.duration && (c.duration = _(c.duration)),
              c.repeatDelay && (c.repeatDelay = _(c.repeatDelay)),
              void 0 !== c.from && (c.keyframes[0] = c.from);
            let h = !1;
            if (
              ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
                ((c.duration = 0), 0 !== c.delay || (h = !0)),
              (td.current || Y.skipAnimations) &&
                ((h = !0), (c.duration = 0), (c.delay = 0)),
              h && !o && void 0 !== e.get())
            ) {
              let t = eP(c.keyframes, a);
              if (void 0 !== t)
                return (
                  G.update(() => {
                    c.onUpdate(t), c.onComplete();
                  }),
                  new g([])
                );
            }
            return !o && ro.supports(c) ? new ro(c) : new re(c);
          };
      function rf(t, e, { delay: r = 0, transitionOverride: n, type: i } = {}) {
        var o;
        let {
          transition: s = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e;
        n && (s = n);
        let u = [],
          h = i && t.animationState && t.animationState.getState()[i];
        for (let e in l) {
          let n = t.getValue(
              e,
              null !== (o = t.latestValues[e]) && void 0 !== o ? o : null
            ),
            i = l[e];
          if (
            void 0 === i ||
            (h &&
              (function ({ protectedKeys: t, needsAnimating: e }, r) {
                let n = t.hasOwnProperty(r) && !0 !== e[r];
                return (e[r] = !1), n;
              })(h, e))
          )
            continue;
          let a = { delay: r, ...y(s || {}, e) },
            c = !1;
          if (window.MotionHandoffAnimation) {
            let r = t.props[tf];
            if (r) {
              let t = window.MotionHandoffAnimation(r, e, G);
              null !== t && ((a.startTime = t), (c = !0));
            }
          }
          tc(t, e),
            n.start(
              rh(
                e,
                n,
                i,
                t.shouldReduceMotion && q.has(e) ? { type: !1 } : a,
                t,
                c
              )
            );
          let f = n.animation;
          f && u.push(f);
        }
        return (
          a &&
            Promise.all(u).then(() => {
              G.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: r = {},
                      transition: n = {},
                      ...i
                    } = c(t, e) || {};
                    for (let e in (i = { ...i, ...r })) {
                      let r = W(i[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(r)
                        : t.addValue(e, tl(r));
                    }
                  })(t, a);
              });
            }),
          u
        );
      }
      function rd(t, e, r = {}) {
        var n;
        let i = c(
            t,
            e,
            "exit" === r.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: o = t.getDefaultTransition() || {} } = i || {};
        r.transitionOverride && (o = r.transitionOverride);
        let s = i ? () => Promise.all(rf(t, i, r)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: i = 0,
                    staggerChildren: s,
                    staggerDirection: a,
                  } = o;
                  return (function (t, e, r = 0, n = 0, i = 1, o) {
                    let s = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === i ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(rp)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            s.push(
                              rd(t, e, { ...o, delay: r + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(s)
                    );
                  })(t, e, i + n, s, a, r);
                }
              : () => Promise.resolve(),
          { when: l } = o;
        if (!l) return Promise.all([s(), a(r.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [s, a] : [a, s];
          return t().then(() => e());
        }
      }
      function rp(t, e) {
        return t.sortNodePosition(e);
      }
      let rm = f.length,
        rg = [...h].reverse(),
        ry = h.length;
      function rv(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function rw() {
        return {
          animate: rv(!0),
          whileInView: rv(),
          whileHover: rv(),
          whileTap: rv(),
          whileDrag: rv(),
          whileFocus: rv(),
          exit: rv(),
        };
      }
      class rb {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class rE extends rb {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: r }) =>
                        (function (t, e, r = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => rd(t, e, r)));
                          else if ("string" == typeof e) n = rd(t, e, r);
                          else {
                            let i =
                              "function" == typeof e ? c(t, e, r.custom) : e;
                            n = Promise.all(rf(t, i, r));
                          }
                          return n.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, r)
                      )
                    ),
                  r = rw(),
                  n = !0,
                  l = (e) => (r, n) => {
                    var i;
                    let o = c(
                      t,
                      n,
                      "exit" === e
                        ? null === (i = t.presenceContext) || void 0 === i
                          ? void 0
                          : i.custom
                        : void 0
                    );
                    if (o) {
                      let { transition: t, transitionEnd: e, ...n } = o;
                      r = { ...r, ...n, ...e };
                    }
                    return r;
                  };
                function u(u) {
                  let { props: c } = t,
                    h =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let r = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (r.initial = e.props.initial),
                            r
                          );
                        }
                        let r = {};
                        for (let t = 0; t < rm; t++) {
                          let n = f[t],
                            i = e.props[n];
                          (a(i) || !1 === i) && (r[n] = i);
                        }
                        return r;
                      })(t.parent) || {},
                    d = [],
                    p = new Set(),
                    m = {},
                    g = 1 / 0;
                  for (let e = 0; e < ry; e++) {
                    var y;
                    let f = rg[e],
                      v = r[f],
                      w = void 0 !== c[f] ? c[f] : h[f],
                      b = a(w),
                      E = f === u ? v.isActive : null;
                    !1 === E && (g = e);
                    let x = w === h[f] && w !== c[f] && b;
                    if (
                      (x && n && t.manuallyAnimateOnMount && (x = !1),
                      (v.protectedKeys = { ...m }),
                      (!v.isActive && null === E) ||
                        (!w && !v.prevProp) ||
                        i(w) ||
                        "boolean" == typeof w)
                    )
                      continue;
                    let M =
                        ((y = v.prevProp),
                        "string" == typeof w
                          ? w !== y
                          : !!Array.isArray(w) && !s(w, y)),
                      S =
                        M || (f === u && v.isActive && !x && b) || (e > g && b),
                      A = !1,
                      T = Array.isArray(w) ? w : [w],
                      R = T.reduce(l(f), {});
                    !1 === E && (R = {});
                    let { prevResolvedValues: P = {} } = v,
                      B = { ...P, ...R },
                      k = (e) => {
                        (S = !0),
                          p.has(e) && ((A = !0), p.delete(e)),
                          (v.needsAnimating[e] = !0);
                        let r = t.getValue(e);
                        r && (r.liveStyle = !1);
                      };
                    for (let t in B) {
                      let e = R[t],
                        r = P[t];
                      if (!m.hasOwnProperty(t))
                        (o(e) && o(r) ? s(e, r) : e === r)
                          ? void 0 !== e && p.has(t)
                            ? k(t)
                            : (v.protectedKeys[t] = !0)
                          : null != e
                          ? k(t)
                          : p.add(t);
                    }
                    (v.prevProp = w),
                      (v.prevResolvedValues = R),
                      v.isActive && (m = { ...m, ...R }),
                      n && t.blockInitialAnimation && (S = !1);
                    let L = !(x && M) || A;
                    S &&
                      L &&
                      d.push(
                        ...T.map((t) => ({
                          animation: t,
                          options: { type: f },
                        }))
                      );
                  }
                  if (p.size) {
                    let e = {};
                    p.forEach((r) => {
                      let n = t.getBaseTarget(r),
                        i = t.getValue(r);
                      i && (i.liveStyle = !0), (e[r] = null != n ? n : null);
                    }),
                      d.push({ animation: e });
                  }
                  let v = !!d.length;
                  return (
                    n &&
                      (!1 === c.initial || c.initial === c.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (v = !1),
                    (n = !1),
                    v ? e(d) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: u,
                  setActive: function (e, n) {
                    var i;
                    if (r[e].isActive === n) return Promise.resolve();
                    null === (i = t.variantChildren) ||
                      void 0 === i ||
                      i.forEach((t) => {
                        var r;
                        return null === (r = t.animationState) || void 0 === r
                          ? void 0
                          : r.setActive(e, n);
                      }),
                      (r[e].isActive = n);
                    let o = u(e);
                    for (let t in r) r[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (r) {
                    e = r(t);
                  },
                  getState: () => r,
                  reset: () => {
                    (r = rw()), (n = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          i(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let rx = 0;
      class rM extends rb {
        constructor() {
          super(...arguments), (this.id = rx++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === r) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      function rS(t, e, r, n = { passive: !0 }) {
        return t.addEventListener(e, r, n), () => t.removeEventListener(e, r);
      }
      function rA(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let rT = (t) => (e) => O(e) && t(e, rA(e));
      function rR(t, e, r, n) {
        return rS(t, e, rT(r), n);
      }
      let rP = (t, e) => Math.abs(t - e);
      class rB {
        constructor(
          t,
          e,
          {
            transformPagePoint: r,
            contextWindow: n,
            dragSnapToOrigin: i = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let r = rO(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                i =
                  ((t = r.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(rP(t.x, e.x) ** 2 + rP(t.y, e.y) ** 2) >= 3);
              if (!n && !i) return;
              let { point: o } = r,
                { timestamp: s } = J;
              this.history.push({ ...o, timestamp: s });
              let { onStart: a, onMove: l } = this.handlers;
              n ||
                (a && a(this.lastMoveEvent, r),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, r);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = rk(e, this.transformPagePoint)),
                G.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: r,
                onSessionEnd: n,
                resumeAnimation: i,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && i && i(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let o = rO(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : rk(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && r && r(t, o), n && n(t, o);
            }),
            !O(t))
          )
            return;
          (this.dragSnapToOrigin = i),
            (this.handlers = e),
            (this.transformPagePoint = r),
            (this.contextWindow = n || window);
          let o = rk(rA(t), this.transformPagePoint),
            { point: s } = o,
            { timestamp: a } = J;
          this.history = [{ ...s, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, rO(o, this.history)),
            (this.removeListeners = e_(
              rR(this.contextWindow, "pointermove", this.handlePointerMove),
              rR(this.contextWindow, "pointerup", this.handlePointerUp),
              rR(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), X(this.updatePoint);
        }
      }
      function rk(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function rL(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function rO({ point: t }, e) {
        return {
          point: t,
          delta: rL(t, rC(e)),
          offset: rL(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let r = t.length - 1,
              n = null,
              i = rC(t);
            for (
              ;
              r >= 0 && ((n = t[r]), !(i.timestamp - n.timestamp > _(0.1)));

            )
              r--;
            if (!n) return { x: 0, y: 0 };
            let o = j(i.timestamp - n.timestamp);
            if (0 === o) return { x: 0, y: 0 };
            let s = { x: (i.x - n.x) / o, y: (i.y - n.y) / o };
            return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
          })(e, 0),
        };
      }
      function rC(t) {
        return t[t.length - 1];
      }
      function rI(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function rF(t) {
        return t.max - t.min;
      }
      function rD(t, e, r, n = 0.5) {
        (t.origin = n),
          (t.originPoint = ek(e.min, e.max, t.origin)),
          (t.scale = rF(r) / rF(e)),
          (t.translate = ek(r.min, r.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function rU(t, e, r, n) {
        rD(t.x, e.x, r.x, n ? n.originX : void 0),
          rD(t.y, e.y, r.y, n ? n.originY : void 0);
      }
      function rN(t, e, r) {
        (t.min = r.min + e.min), (t.max = t.min + rF(e));
      }
      function r_(t, e, r) {
        (t.min = e.min - r.min), (t.max = t.min + rF(e));
      }
      function rj(t, e, r) {
        r_(t.x, e.x, r.x), r_(t.y, e.y, r.y);
      }
      function rV(t, e, r) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0,
        };
      }
      function rz(t, e) {
        let r = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([r, n] = [n, r]), { min: r, max: n }
        );
      }
      function rH(t, e, r) {
        return { min: rq(t, e), max: rq(t, r) };
      }
      function rq(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let r$ = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        rW = () => ({ x: r$(), y: r$() }),
        rY = () => ({ min: 0, max: 0 }),
        rZ = () => ({ x: rY(), y: rY() });
      function rK(t) {
        return [t("x"), t("y")];
      }
      function rG({ top: t, left: e, right: r, bottom: n }) {
        return { x: { min: e, max: r }, y: { min: t, max: n } };
      }
      function rX(t) {
        return void 0 === t || 1 === t;
      }
      function rJ({ scale: t, scaleX: e, scaleY: r }) {
        return !rX(t) || !rX(e) || !rX(r);
      }
      function rQ(t) {
        return (
          rJ(t) ||
          r0(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function r0(t) {
        var e, r;
        return ((e = t.x) && "0%" !== e) || ((r = t.y) && "0%" !== r);
      }
      function r1(t, e, r, n, i) {
        return void 0 !== i && (t = n + i * (t - n)), n + r * (t - n) + e;
      }
      function r2(t, e = 0, r = 1, n, i) {
        (t.min = r1(t.min, e, r, n, i)), (t.max = r1(t.max, e, r, n, i));
      }
      function r6(t, { x: e, y: r }) {
        r2(t.x, e.translate, e.scale, e.originPoint),
          r2(t.y, r.translate, r.scale, r.originPoint);
      }
      function r3(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function r8(t, e, r, n, i = 0.5) {
        let o = ek(t.min, t.max, i);
        r2(t, e, r, o, n);
      }
      function r5(t, e) {
        r8(t.x, e.x, e.scaleX, e.scale, e.originX),
          r8(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function r4(t, e) {
        return rG(
          (function (t, e) {
            if (!e) return t;
            let r = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: r.y, left: r.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let r7 = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        r9 = new WeakMap();
      class nt {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = rZ()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: r } = this.visualElement;
          if (r && !1 === r.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new rB(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: r } = this.getProps();
                r ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(rA(t).point);
              },
              onStart: (t, e) => {
                let {
                  drag: r,
                  dragPropagation: n,
                  onDragStart: i,
                } = this.getProps();
                if (
                  r &&
                  !n &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock =
                    "x" === r || "y" === r
                      ? P[r]
                        ? null
                        : ((P[r] = !0),
                          () => {
                            P[r] = !1;
                          })
                      : P.x || P.y
                      ? null
                      : ((P.x = P.y = !0),
                        () => {
                          P.x = P.y = !1;
                        })),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  rK((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tV.test(e)) {
                      let { projection: r } = this.visualElement;
                      if (r && r.layout) {
                        let n = r.layout.layoutBox[t];
                        if (n) {
                          let t = rF(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  i && G.postRender(() => i(t, e)),
                  tc(this.visualElement, "transform");
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: r,
                  dragDirectionLock: n,
                  onDirectionLock: i,
                  onDrag: o,
                } = this.getProps();
                if (!r && !this.openDragLock) return;
                let { offset: s } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let r = null;
                    return (
                      Math.abs(t.y) > e
                        ? (r = "y")
                        : Math.abs(t.x) > e && (r = "x"),
                      r
                    );
                  })(s)),
                    null !== this.currentDirection &&
                      i &&
                      i(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, s),
                  this.updateAxis("y", e.point, s),
                  this.visualElement.render(),
                  o && o(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                rK((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: r7(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let r = this.isDragging;
          if ((this.cancel(), !r)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: i } = this.getProps();
          i && G.postRender(() => i(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: r } = this.getProps();
          !r &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, r) {
          let { drag: n } = this.getProps();
          if (!r || !ne(t, n, this.currentDirection)) return;
          let i = this.getAxisMotionValue(t),
            o = this.originPoint[t] + r[t];
          this.constraints &&
            this.constraints[t] &&
            (o = (function (t, { min: e, max: r }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? ek(e, t, n.min) : Math.max(t, e))
                  : void 0 !== r &&
                    t > r &&
                    (t = n ? ek(r, t, n.max) : Math.min(t, r)),
                t
              );
            })(o, this.constraints[t], this.elastic[t])),
            i.set(o);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: r } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            i = this.constraints;
          e && rI(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: r, bottom: n, right: i }
              ) {
                return { x: rV(t.x, r, i), y: rV(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: rH(t, "left", "right"), y: rH(t, "top", "bottom") }
              );
            })(r)),
            i !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              rK((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let r = {};
                    return (
                      void 0 !== e.min && (r.min = e.min - t.min),
                      void 0 !== e.max && (r.max = e.max - t.min),
                      r
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: r } =
            this.getProps();
          if (!e || !rI(e)) return !1;
          let n = e.current;
          V(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: i } = this.visualElement;
          if (!i || !i.layout) return !1;
          let o = (function (t, e, r) {
              let n = r4(t, r),
                { scroll: i } = e;
              return i && (r3(n.x, i.offset.x), r3(n.y, i.offset.y)), n;
            })(n, i.root, this.visualElement.getTransformPagePoint()),
            s = { x: rz((t = i.layout.layoutBox).x, o.x), y: rz(t.y, o.y) };
          if (r) {
            let t = r(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(s)
            );
            (this.hasMutatedConstraints = !!t), t && (s = rG(t));
          }
          return s;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: r,
              dragElastic: n,
              dragTransition: i,
              dragSnapToOrigin: o,
              onDragTransitionEnd: s,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            rK((s) => {
              if (!ne(s, e, this.currentDirection)) return;
              let l = (a && a[s]) || {};
              o && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: r ? t[s] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l,
              };
              return this.startAxisValueAnimation(s, u);
            })
          ).then(s);
        }
        startAxisValueAnimation(t, e) {
          let r = this.getAxisMotionValue(t);
          return (
            tc(this.visualElement, t),
            r.start(rh(t, r, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          rK((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          rK((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps();
          return (
            r[e] ||
            this.visualElement.getValue(
              t,
              (r.initial ? r.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          rK((e) => {
            let { drag: r } = this.getProps();
            if (!ne(e, r, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              i = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: r, max: o } = n.layout.layoutBox[e];
              i.set(t[e] - ek(r, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!rI(e) || !r || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          rK((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let r = e.get();
              n[t] = (function (t, e) {
                let r = 0.5,
                  n = rF(t),
                  i = rF(e);
                return (
                  i > n
                    ? (r = S(e.min, e.max - n, t.min))
                    : n > i && (r = S(t.min, t.max - i, e.min)),
                  tT(0, 1, r)
                );
              })({ min: r, max: r }, this.constraints[t]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            rK((e) => {
              if (!ne(e, t, null)) return;
              let r = this.getAxisMotionValue(e),
                { min: i, max: o } = this.constraints[e];
              r.set(ek(i, o, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          r9.set(this.visualElement, this);
          let t = rR(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: r = !0 } = this.getProps();
              e && r && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              rI(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            n = r.addEventListener("measure", e);
          r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
            G.read(e);
          let i = rS(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = r.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (rK((e) => {
                    let r = this.getAxisMotionValue(e);
                    r &&
                      ((this.originPoint[e] += t[e].translate),
                      r.set(r.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            i(), t(), n(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: r = !1,
              dragPropagation: n = !1,
              dragConstraints: i = !1,
              dragElastic: o = 0.35,
              dragMomentum: s = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: r,
            dragPropagation: n,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: s,
          };
        }
      }
      function ne(t, e, r) {
        return (!0 === e || e === t) && (null === r || r === t);
      }
      class nr extends rb {
        constructor(t) {
          super(t),
            (this.removeGroupControls = V),
            (this.removeListeners = V),
            (this.controls = new nt(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || V);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let nn = (t) => (e, r) => {
        t && G.postRender(() => t(e, r));
      };
      class ni extends rb {
        constructor() {
          super(...arguments), (this.removePointerDownListener = V);
        }
        onPointerDown(t) {
          this.session = new rB(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: r7(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: r,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: nn(t),
            onStart: nn(e),
            onMove: r,
            onEnd: (t, e) => {
              delete this.session, n && G.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = rR(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var no,
        ns,
        na,
        nl = r(57437),
        nu = r(2265),
        nc = r(49637),
        nh = r(58881);
      let nf = (0, nu.createContext)({}),
        nd = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function np(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let nm = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!tz.test(t)) return t;
              t = parseFloat(t);
            }
            let r = np(t, e.target.x),
              n = np(t, e.target.y);
            return `${r}% ${n}%`;
          },
        },
        ng = {},
        { schedule: ny, cancel: nv } = K(queueMicrotask, !1);
      class nw extends nu.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: r,
              layoutId: n,
            } = this.props,
            { projection: i } = t;
          Object.assign(ng, nE),
            i &&
              (e.group && e.group.add(i),
              r && r.register && n && r.register(i),
              i.root.didUpdate(),
              i.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (nd.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: r,
              drag: n,
              isPresent: i,
            } = this.props,
            o = r.projection;
          return (
            o &&
              ((o.isPresent = i),
              n || t.layoutDependency !== e || void 0 === e
                ? o.willUpdate()
                : this.safeToRemove(),
              t.isPresent === i ||
                (i
                  ? o.promote()
                  : o.relegate() ||
                    G.postRender(() => {
                      let t = o.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            ny.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: r,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            r && r.deregister && r.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function nb(t) {
        let [e, r] = (0, nc.oO)(),
          n = (0, nu.useContext)(nh.p);
        return (0, nl.jsx)(nw, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, nu.useContext)(nf),
          isPresent: e,
          safeToRemove: r,
        });
      }
      let nE = {
          borderRadius: {
            ...nm,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: nm,
          borderTopRightRadius: nm,
          borderBottomLeftRadius: nm,
          borderBottomRightRadius: nm,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: r }) => {
              let n = t2.parse(t);
              if (n.length > 5) return t;
              let i = t2.createTransformer(t),
                o = "number" != typeof n[0] ? 1 : 0,
                s = r.x.scale * e.x,
                a = r.y.scale * e.y;
              (n[0 + o] /= s), (n[1 + o] /= a);
              let l = ek(s, a, 0.5);
              return (
                "number" == typeof n[2 + o] && (n[2 + o] /= l),
                "number" == typeof n[3 + o] && (n[3 + o] /= l),
                i(n)
              );
            },
          },
        },
        nx = (t, e) => t.depth - e.depth;
      class nM {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          tr(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          tn(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nx),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      function nS(t) {
        let e = tu(t) ? t.get() : t;
        return $(e) ? e.toValue() : e;
      }
      let nA = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nT = nA.length,
        nR = (t) => ("string" == typeof t ? parseFloat(t) : t),
        nP = (t) => "number" == typeof t || tz.test(t);
      function nB(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nk = nO(0, 0.5, tM),
        nL = nO(0.5, 0.95, V);
      function nO(t, e, r) {
        return (n) => (n < t ? 0 : n > e ? 1 : r(S(t, e, n)));
      }
      function nC(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nI(t, e) {
        nC(t.x, e.x), nC(t.y, e.y);
      }
      function nF(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function nD(t, e, r, n, i) {
        return (
          (t -= e),
          (t = n + (1 / r) * (t - n)),
          void 0 !== i && (t = n + (1 / i) * (t - n)),
          t
        );
      }
      function nU(t, e, [r, n, i], o, s) {
        !(function (t, e = 0, r = 1, n = 0.5, i, o = t, s = t) {
          if (
            (tV.test(e) &&
              ((e = parseFloat(e)), (e = ek(s.min, s.max, e / 100) - s.min)),
            "number" != typeof e)
          )
            return;
          let a = ek(o.min, o.max, n);
          t === o && (a -= e),
            (t.min = nD(t.min, e, r, a, i)),
            (t.max = nD(t.max, e, r, a, i));
        })(t, e[r], e[n], e[i], e.scale, o, s);
      }
      let nN = ["x", "scaleX", "originX"],
        n_ = ["y", "scaleY", "originY"];
      function nj(t, e, r, n) {
        nU(t.x, e, nN, r ? r.x : void 0, n ? n.x : void 0),
          nU(t.y, e, n_, r ? r.y : void 0, n ? n.y : void 0);
      }
      function nV(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nz(t) {
        return nV(t.x) && nV(t.y);
      }
      function nH(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function nq(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function n$(t, e) {
        return nq(t.x, e.x) && nq(t.y, e.y);
      }
      function nW(t) {
        return rF(t.x) / rF(t.y);
      }
      function nY(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class nZ {
        constructor() {
          this.members = [];
        }
        add(t) {
          tr(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (tn(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let r = this.members.findIndex((e) => t === e);
          if (0 === r) return !1;
          for (let t = r; t >= 0; t--) {
            let r = this.members[t];
            if (!1 !== r.isPresent) {
              e = r;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let r = this.lead;
          if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
            r.instance && r.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = r),
              e && (t.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((t.snapshot = r.snapshot),
                (t.snapshot.latestValues =
                  r.animationValues || r.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: r } = t;
            e.onExitComplete && e.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let nK = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        nG = "undefined" != typeof window && void 0 !== window.MotionDebug,
        nX = ["", "X", "Y", "Z"],
        nJ = { visibility: "hidden" },
        nQ = 0;
      function n0(t, e, r, n) {
        let { latestValues: i } = e;
        i[t] && ((r[t] = i[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function n1({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: r,
        checkIsScrollRoot: n,
        resetTransform: i,
      }) {
        return class {
          constructor(t = {}, r = null == e ? void 0 : e()) {
            (this.id = nQ++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  nG &&
                    (nK.totalNodes =
                      nK.resolvedTargetDeltas =
                      nK.recalculatedProjection =
                        0),
                  this.nodes.forEach(n3),
                  this.nodes.forEach(ie),
                  this.nodes.forEach(ir),
                  this.nodes.forEach(n8),
                  nG && window.MotionDebug.record(nK);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nM());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new ti()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let r = this.eventHandlers.get(t);
            r && r.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, r = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: i, visualElement: o } = this.options;
            if (
              (o && !o.current && o.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              r && (i || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let r;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  r && r(),
                  (r = (function (t, e) {
                    let r = te.now(),
                      n = ({ timestamp: e }) => {
                        let i = e - r;
                        i >= 250 && (X(n), t(i - 250));
                      };
                    return G.read(n, !0), () => X(n);
                  })(n, 0)),
                  nd.hasAnimatedSinceResize &&
                    ((nd.hasAnimatedSinceResize = !1), this.nodes.forEach(it));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                o &&
                (n || i) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: r,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let i =
                        this.options.transition ||
                        o.getDefaultTransition() ||
                        iu,
                      {
                        onLayoutAnimationStart: s,
                        onLayoutAnimationComplete: a,
                      } = o.getProps(),
                      l = !this.targetLayout || !n$(this.targetLayout, n) || r,
                      u = !e && r;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...y(i, "layout"), onPlay: s, onComplete: a };
                      (o.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || it(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              X(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(ii),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: r } = e.options;
                  if (!r) return;
                  let n = r.props[tf];
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: r } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      G,
                      !(t || r)
                    );
                  }
                  let { parent: i } = e;
                  i && !i.hasCheckedOptimisedAppear && t(i);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: r } = this.options;
            if (void 0 === e && !r) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(n4);
              return;
            }
            this.isUpdating || this.nodes.forEach(n7),
              (this.isUpdating = !1),
              this.nodes.forEach(n9),
              this.nodes.forEach(n2),
              this.nodes.forEach(n6),
              this.clearAllSnapshots();
            let t = te.now();
            (J.delta = tT(0, 1e3 / 60, t - J.timestamp)),
              (J.timestamp = t),
              (J.isProcessing = !0),
              Q.update.process(J),
              Q.preRender.process(J),
              Q.render.process(J),
              (J.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), ny.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(n5), this.sharedNodes.forEach(io);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              G.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            G.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = rZ()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: r(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!i) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !nz(this.projectionDelta),
              r = this.getTransformTemplate(),
              n = r ? r(this.latestValues, "") : void 0,
              o = n !== this.prevTransformTemplateValue;
            t &&
              (e || rQ(this.latestValues) || o) &&
              (i(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let r = this.measurePageBox(),
              n = this.removeElementScroll(r);
            return (
              t && (n = this.removeTransform(n)),
              id((e = n).x),
              id(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: r,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return rZ();
            let r = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(im)
              )
            ) {
              let { scroll: t } = this.root;
              t && (r3(r.x, t.offset.x), r3(r.y, t.offset.y));
            }
            return r;
          }
          removeElementScroll(t) {
            var e;
            let r = rZ();
            if (
              (nI(r, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return r;
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e],
                { scroll: i, options: o } = n;
              n !== this.root &&
                i &&
                o.layoutScroll &&
                (i.wasRoot && nI(r, t),
                r3(r.x, i.offset.x),
                r3(r.y, i.offset.y));
            }
            return r;
          }
          applyTransform(t, e = !1) {
            let r = rZ();
            nI(r, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                r5(r, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                rQ(n.latestValues) && r5(r, n.latestValues);
            }
            return rQ(this.latestValues) && r5(r, this.latestValues), r;
          }
          removeTransform(t) {
            let e = rZ();
            nI(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              if (!r.instance || !rQ(r.latestValues)) continue;
              rJ(r.latestValues) && r.updateSnapshot();
              let n = rZ();
              nI(n, r.measurePageBox()),
                nj(
                  e,
                  r.latestValues,
                  r.snapshot ? r.snapshot.layoutBox : void 0,
                  n
                );
            }
            return rQ(this.latestValues) && nj(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== J.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, r, n, i;
            let o = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = o.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = o.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
            let s = !!this.resumingFrom || this !== o;
            if (
              !(
                t ||
                (s && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = J.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = rZ()),
                    (this.relativeTargetOrigin = rZ()),
                    rj(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    nI(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = rZ()), (this.targetWithTransforms = rZ())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (r = this.target),
                      (n = this.relativeTarget),
                      (i = this.relativeParent.target),
                      rN(r.x, n.x, i.x),
                      rN(r.y, n.y, i.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nI(this.target, this.layout.layoutBox),
                      r6(this.target, this.targetDelta))
                    : nI(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = rZ()),
                      (this.relativeTargetOrigin = rZ()),
                      rj(this.relativeTargetOrigin, this.target, t.target),
                      nI(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                nG && nK.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              rJ(this.parent.latestValues) ||
              r0(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              r = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              r &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === J.timestamp && (n = !1),
              n)
            )
              return;
            let { layout: i, layoutId: o } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(i || o))
            )
              return;
            nI(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, r, n = !1) {
              let i, o;
              let s = r.length;
              if (s) {
                e.x = e.y = 1;
                for (let a = 0; a < s; a++) {
                  o = (i = r[a]).projectionDelta;
                  let { visualElement: s } = i.options;
                  (!s ||
                    !s.props.style ||
                    "contents" !== s.props.style.display) &&
                    (n &&
                      i.options.layoutScroll &&
                      i.scroll &&
                      i !== i.root &&
                      r5(t, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                    o && ((e.x *= o.x.scale), (e.y *= o.y.scale), r6(t, o)),
                    n && rQ(i.latestValues) && r5(t, i.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, r),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = rZ()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (nF(this.prevProjectionDelta.x, this.projectionDelta.x),
                nF(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              rU(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === s &&
                this.treeScale.y === a &&
                nY(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                nY(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              nG && nK.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = rW()),
              (this.projectionDelta = rW()),
              (this.projectionDeltaWithTransform = rW());
          }
          setAnimationOrigin(t, e = !1) {
            let r;
            let n = this.snapshot,
              i = n ? n.latestValues : {},
              o = { ...this.latestValues },
              s = rW();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = rZ(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              h = !!(
                l &&
                !c &&
                !0 === this.options.crossfade &&
                !this.path.some(il)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (is(s.x, t.x, n),
                  is(s.y, t.y, n),
                  this.setTargetDelta(s),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, f, d, p;
                  rj(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (d = this.relativeTarget),
                    (p = this.relativeTargetOrigin),
                    ia(d.x, p.x, a.x, n),
                    ia(d.y, p.y, a.y, n),
                    r &&
                      ((u = this.relativeTarget),
                      (f = r),
                      nH(u.x, f.x) && nH(u.y, f.y)) &&
                      (this.isProjectionDirty = !1),
                    r || (r = rZ()),
                    nI(r, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = o),
                  (function (t, e, r, n, i, o) {
                    i
                      ? ((t.opacity = ek(
                          0,
                          void 0 !== r.opacity ? r.opacity : 1,
                          nk(n)
                        )),
                        (t.opacityExit = ek(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          nL(n)
                        )))
                      : o &&
                        (t.opacity = ek(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== r.opacity ? r.opacity : 1,
                          n
                        ));
                    for (let i = 0; i < nT; i++) {
                      let o = `border${nA[i]}Radius`,
                        s = nB(e, o),
                        a = nB(r, o);
                      (void 0 !== s || void 0 !== a) &&
                        (s || (s = 0),
                        a || (a = 0),
                        0 === s || 0 === a || nP(s) === nP(a)
                          ? ((t[o] = Math.max(ek(nR(s), nR(a), n), 0)),
                            (tV.test(a) || tV.test(s)) && (t[o] += "%"))
                          : (t[o] = a));
                    }
                    (e.rotate || r.rotate) &&
                      (t.rotate = ek(e.rotate || 0, r.rotate || 0, n));
                  })(o, i, this.latestValues, n, h, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (X(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = G.update(() => {
                (nd.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, r) {
                    let n = tu(0) ? 0 : tl(0);
                    return n.start(rh("", n, 1e3, r)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: r,
                layout: n,
                latestValues: i,
              } = t;
            if (e && r && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                ip(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                r = this.target || rZ();
                let e = rF(this.layout.layoutBox.x);
                (r.x.min = t.target.x.min), (r.x.max = r.x.min + e);
                let n = rF(this.layout.layoutBox.y);
                (r.y.min = t.target.y.min), (r.y.max = r.y.min + n);
              }
              nI(e, r),
                r5(e, i),
                rU(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  i
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nZ()),
              this.sharedNodes.get(t).add(e);
            let r = e.options.initialPromotionConfig;
            e.promote({
              transition: r ? r.transition : void 0,
              preserveFollowOpacity:
                r && r.shouldPreserveFollowOpacity
                  ? r.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: r,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, r),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: r } = t;
            if (
              ((r.z ||
                r.rotate ||
                r.rotateX ||
                r.rotateY ||
                r.rotateZ ||
                r.skewX ||
                r.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            r.z && n0("z", t, n, this.animationValues);
            for (let e = 0; e < nX.length; e++)
              n0(`rotate${nX[e]}`, t, n, this.animationValues),
                n0(`skew${nX[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, r;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return nJ;
            let n = { visibility: "" },
              i = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  nS(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = i ? i(this.latestValues, "") : "none"),
                n
              );
            let o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    nS(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !rQ(this.latestValues) &&
                  ((e.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let s = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = (function (t, e, r) {
                let n = "",
                  i = t.x.translate / e.x,
                  o = t.y.translate / e.y,
                  s = (null == r ? void 0 : r.z) || 0;
                if (
                  ((i || o || s) &&
                    (n = `translate3d(${i}px, ${o}px, ${s}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                  r)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: i,
                    rotateY: o,
                    skewX: s,
                    skewY: a,
                  } = r;
                  t && (n = `perspective(${t}px) ${n}`),
                    e && (n += `rotate(${e}deg) `),
                    i && (n += `rotateX(${i}deg) `),
                    o && (n += `rotateY(${o}deg) `),
                    s && (n += `skewX(${s}deg) `),
                    a && (n += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                  n || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, s)),
              i && (n.transform = i(s, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            o.animationValues
              ? (n.opacity =
                  o === this
                    ? null !==
                        (r =
                          null !== (e = s.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== r
                      ? r
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : s.opacityExit)
              : (n.opacity =
                  o === this
                    ? void 0 !== s.opacity
                      ? s.opacity
                      : ""
                    : void 0 !== s.opacityExit
                    ? s.opacityExit
                    : 0),
            ng)) {
              if (void 0 === s[t]) continue;
              let { correct: e, applyTo: r } = ng[t],
                i = "none" === n.transform ? s[t] : e(s[t], o);
              if (r) {
                let t = r.length;
                for (let e = 0; e < t; e++) n[r[e]] = i;
              } else n[t] = i;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  o === this
                    ? nS(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(n4),
              this.root.sharedNodes.clear();
          }
        };
      }
      function n2(t) {
        t.updateLayout();
      }
      function n6(t) {
        var e;
        let r =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: i } = t.options,
            o = r.source !== t.layout.source;
          "size" === i
            ? rK((t) => {
                let n = o ? r.measuredBox[t] : r.layoutBox[t],
                  i = rF(n);
                (n.min = e[t].min), (n.max = n.min + i);
              })
            : ip(i, r.layoutBox, e) &&
              rK((n) => {
                let i = o ? r.measuredBox[n] : r.layoutBox[n],
                  s = rF(e[n]);
                (i.max = i.min + s),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + s));
              });
          let s = rW();
          rU(s, e, r.layoutBox);
          let a = rW();
          o
            ? rU(a, t.applyTransform(n, !0), r.measuredBox)
            : rU(a, e, r.layoutBox);
          let l = !nz(s),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: i, layout: o } = n;
              if (i && o) {
                let s = rZ();
                rj(s, r.layoutBox, i.layoutBox);
                let a = rZ();
                rj(a, e, o.layoutBox),
                  n$(s, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = s),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: r,
            delta: a,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function n3(t) {
        nG && nK.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function n8(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function n5(t) {
        t.clearSnapshot();
      }
      function n4(t) {
        t.clearMeasurements();
      }
      function n7(t) {
        t.isLayoutDirty = !1;
      }
      function n9(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function it(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function ie(t) {
        t.resolveTargetDelta();
      }
      function ir(t) {
        t.calcProjection();
      }
      function ii(t) {
        t.resetSkewAndRotation();
      }
      function io(t) {
        t.removeLeadSnapshot();
      }
      function is(t, e, r) {
        (t.translate = ek(e.translate, 0, r)),
          (t.scale = ek(e.scale, 1, r)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function ia(t, e, r, n) {
        (t.min = ek(e.min, r.min, n)), (t.max = ek(e.max, r.max, n));
      }
      function il(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let iu = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        ic = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        ih = ic("applewebkit/") && !ic("chrome/") ? Math.round : V;
      function id(t) {
        (t.min = ih(t.min)), (t.max = ih(t.max));
      }
      function ip(t, e, r) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(nW(e) - nW(r))))
        );
      }
      function im(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let ig = n1({
          attachResizeListener: (t, e) => rS(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        iy = { current: void 0 },
        iv = n1({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!iy.current) {
              let t = new ig({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (iy.current = t);
            }
            return iy.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function iw(t, e, r) {
        let { props: n } = t;
        t.animationState &&
          n.whileHover &&
          t.animationState.setActive("whileHover", "Start" === r);
        let i = n["onHover" + r];
        i && G.postRender(() => i(e, rA(e)));
      }
      class ib extends rb {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, r = {}) {
              let [n, i, o] = B(t, r),
                s = k((t) => {
                  let { target: r } = t,
                    n = e(t);
                  if ("function" != typeof n || !r) return;
                  let o = k((t) => {
                    n(t), r.removeEventListener("pointerleave", o);
                  });
                  r.addEventListener("pointerleave", o, i);
                });
              return (
                n.forEach((t) => {
                  t.addEventListener("pointerenter", s, i);
                }),
                o
              );
            })(
              t,
              (t) => (iw(this.node, t, "Start"), (t) => iw(this.node, t, "End"))
            ));
        }
        unmount() {}
      }
      class iE extends rb {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = e_(
            rS(this.node.current, "focus", () => this.onFocus()),
            rS(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      function ix(t, e, r) {
        let { props: n } = t;
        t.animationState &&
          n.whileTap &&
          t.animationState.setActive("whileTap", "Start" === r);
        let i = n["onTap" + ("End" === r ? "" : r)];
        i && G.postRender(() => i(e, rA(e)));
      }
      class iM extends rb {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, r = {}) {
              let [n, i, o] = B(t, r),
                s = (t) => {
                  let n = t.currentTarget;
                  if (!N(t) || I.has(n)) return;
                  I.add(n);
                  let o = e(t),
                    s = (t, e) => {
                      window.removeEventListener("pointerup", a),
                        window.removeEventListener("pointercancel", l),
                        N(t) &&
                          I.has(n) &&
                          (I.delete(n),
                          "function" == typeof o && o(t, { success: e }));
                    },
                    a = (t) => {
                      s(t, r.useGlobalTarget || L(n, t.target));
                    },
                    l = (t) => {
                      s(t, !1);
                    };
                  window.addEventListener("pointerup", a, i),
                    window.addEventListener("pointercancel", l, i);
                };
              return (
                n.forEach((t) => {
                  C.has(t.tagName) ||
                    -1 !== t.tabIndex ||
                    null !== t.getAttribute("tabindex") ||
                    (t.tabIndex = 0),
                    (r.useGlobalTarget ? window : t).addEventListener(
                      "pointerdown",
                      s,
                      i
                    ),
                    t.addEventListener("focus", (t) => U(t, i), i);
                }),
                o
              );
            })(
              t,
              (t) => (
                ix(this.node, t, "Start"),
                (t, { success: e }) => ix(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let iS = new WeakMap(),
        iA = new WeakMap(),
        iT = (t) => {
          let e = iS.get(t.target);
          e && e(t);
        },
        iR = (t) => {
          t.forEach(iT);
        },
        iP = { some: 0, all: 1 };
      class iB extends rb {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: r, amount: n = "some", once: i } = t,
            o = {
              root: e ? e.current : void 0,
              rootMargin: r,
              threshold: "number" == typeof n ? n : iP[n],
            };
          return (function (t, e, r) {
            let n = (function ({ root: t, ...e }) {
              let r = t || document;
              iA.has(r) || iA.set(r, {});
              let n = iA.get(r),
                i = JSON.stringify(e);
              return (
                n[i] ||
                  (n[i] = new IntersectionObserver(iR, { root: t, ...e })),
                n[i]
              );
            })(e);
            return (
              iS.set(t, r),
              n.observe(t),
              () => {
                iS.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, o, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), i && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: r, onViewportLeave: n } =
                this.node.getProps(),
              o = e ? r : n;
            o && o(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (r) => t[r] !== e[r];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let ik = (0, nu.createContext)({ strict: !1 });
      var iL = r(45750);
      let iO = (0, nu.createContext)({});
      function iC(t) {
        return i(t.animate) || f.some((e) => a(t[e]));
      }
      function iI(t) {
        return !!(iC(t) || t.variants);
      }
      function iF(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var iD = r(44563);
      let iU = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        iN = {};
      for (let t in iU) iN[t] = { isEnabled: (e) => iU[t].some((t) => !!e[t]) };
      let i_ = Symbol.for("motionComponentSymbol");
      var ij = r(64252),
        iV = r(11534);
      let iz = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function iH(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (iz.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var iq = r(53576);
      let i$ = (t) => (e, r) => {
          let n = (0, nu.useContext)(iO),
            o = (0, nu.useContext)(ij.O),
            s = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onUpdate: r,
                },
                n,
                o,
                s
              ) {
                let a = {
                  latestValues: (function (t, e, r, n) {
                    let o = {},
                      s = n(t, {});
                    for (let t in s) o[t] = nS(s[t]);
                    let { initial: a, animate: l } = t,
                      c = iC(t),
                      h = iI(t);
                    e &&
                      h &&
                      !c &&
                      !1 !== t.inherit &&
                      (void 0 === a && (a = e.initial),
                      void 0 === l && (l = e.animate));
                    let f = !!r && !1 === r.initial,
                      d = (f = f || !1 === a) ? l : a;
                    if (d && "boolean" != typeof d && !i(d)) {
                      let e = Array.isArray(d) ? d : [d];
                      for (let r = 0; r < e.length; r++) {
                        let n = u(t, e[r]);
                        if (n) {
                          let { transitionEnd: t, transition: e, ...r } = n;
                          for (let t in r) {
                            let e = r[t];
                            if (Array.isArray(e)) {
                              let t = f ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (o[t] = e);
                          }
                          for (let e in t) o[e] = t[e];
                        }
                      }
                    }
                    return o;
                  })(n, o, s, t),
                  renderState: e(),
                };
                return (
                  r &&
                    ((a.onMount = (t) => r({ props: n, current: t, ...a })),
                    (a.onUpdate = (t) => r(t))),
                  a
                );
              })(t, e, n, o);
          return r ? s() : (0, iq.h)(s);
        },
        iW = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        iY = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        iZ = z.length;
      function iK(t, e, r) {
        let { style: n, vars: i, transformOrigin: o } = t,
          s = !1,
          a = !1;
        for (let t in e) {
          let r = e[t];
          if (H.has(t)) {
            s = !0;
            continue;
          }
          if (ey(t)) {
            i[t] = r;
            continue;
          }
          {
            let e = iW(r, t7[t]);
            t.startsWith("origin") ? ((a = !0), (o[t] = e)) : (n[t] = e);
          }
        }
        if (
          (!e.transform &&
            (s || r
              ? (n.transform = (function (t, e, r) {
                  let n = "",
                    i = !0;
                  for (let o = 0; o < iZ; o++) {
                    let s = z[o],
                      a = t[s];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === (s.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      r
                    ) {
                      let t = iW(a, t7[s]);
                      if (!l) {
                        i = !1;
                        let e = iY[s] || s;
                        n += `${e}(${t}) `;
                      }
                      r && (e[s] = t);
                    }
                  }
                  return (
                    (n = n.trim()),
                    r ? (n = r(e, i ? "" : n)) : i && (n = "none"),
                    n
                  );
                })(e, t.transform, r))
              : n.transform && (n.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: r = 0 } = o;
          n.transformOrigin = `${t} ${e} ${r}`;
        }
      }
      let iG = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        iX = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function iJ(t, e, r) {
        return "string" == typeof t ? t : tz.transform(e + r * t);
      }
      function iQ(
        t,
        {
          attrX: e,
          attrY: r,
          attrScale: n,
          originX: i,
          originY: o,
          pathLength: s,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        c,
        h
      ) {
        if ((iK(t, u, h), c)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: f, style: d, dimensions: p } = t;
        f.transform && (p && (d.transform = f.transform), delete f.transform),
          p &&
            (void 0 !== i || void 0 !== o || d.transform) &&
            (d.transformOrigin = (function (t, e, r) {
              let n = iJ(e, t.x, t.width),
                i = iJ(r, t.y, t.height);
              return `${n} ${i}`;
            })(p, void 0 !== i ? i : 0.5, void 0 !== o ? o : 0.5)),
          void 0 !== e && (f.x = e),
          void 0 !== r && (f.y = r),
          void 0 !== n && (f.scale = n),
          void 0 !== s &&
            (function (t, e, r = 1, n = 0, i = !0) {
              t.pathLength = 1;
              let o = i ? iG : iX;
              t[o.offset] = tz.transform(-n);
              let s = tz.transform(e),
                a = tz.transform(r);
              t[o.array] = `${s} ${a}`;
            })(f, s, a, l, !1);
      }
      let i0 = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        i1 = () => ({ ...i0(), attrs: {} }),
        i2 = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function i6(t, { style: e, vars: r }, n, i) {
        for (let o in (Object.assign(t.style, e, i && i.getProjectionStyles(n)),
        r))
          t.style.setProperty(o, r[o]);
      }
      let i3 = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function i8(t, e, r, n) {
        for (let r in (i6(t, e, void 0, n), e.attrs))
          t.setAttribute(i3.has(r) ? r : th(r), e.attrs[r]);
      }
      function i5(t, { layout: e, layoutId: r }) {
        return (
          H.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== r) && (!!ng[t] || "opacity" === t))
        );
      }
      function i4(t, e, r) {
        var n;
        let { style: i } = t,
          o = {};
        for (let s in i)
          (tu(i[s]) ||
            (e.style && tu(e.style[s])) ||
            i5(s, t) ||
            (null === (n = null == r ? void 0 : r.getValue(s)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (o[s] = i[s]);
        return o;
      }
      function i7(t, e, r) {
        let n = i4(t, e, r);
        for (let r in t)
          (tu(t[r]) || tu(e[r])) &&
            (n[
              -1 !== z.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = t[r]);
        return n;
      }
      let i9 = ["x", "y", "width", "height", "cx", "cy", "r"],
        ot = {
          useVisualState: i$({
            scrapeMotionValuesFromProps: i7,
            createRenderState: i1,
            onUpdate: ({
              props: t,
              prevProps: e,
              current: r,
              renderState: n,
              latestValues: i,
            }) => {
              if (!r) return;
              let o = !!t.drag;
              if (!o) {
                for (let t in i)
                  if (H.has(t)) {
                    o = !0;
                    break;
                  }
              }
              if (!o) return;
              let s = !e;
              if (e)
                for (let r = 0; r < i9.length; r++) {
                  let n = i9[r];
                  t[n] !== e[n] && (s = !0);
                }
              s &&
                G.read(() => {
                  !(function (t, e) {
                    try {
                      e.dimensions =
                        "function" == typeof t.getBBox
                          ? t.getBBox()
                          : t.getBoundingClientRect();
                    } catch (t) {
                      e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                    }
                  })(r, n),
                    G.render(() => {
                      iQ(n, i, i2(r.tagName), t.transformTemplate), i8(r, n);
                    });
                });
            },
          }),
        },
        oe = {
          useVisualState: i$({
            scrapeMotionValuesFromProps: i4,
            createRenderState: i0,
          }),
        };
      function or(t, e, r) {
        for (let n in e) tu(e[n]) || i5(n, r) || (t[n] = e[n]);
      }
      let on = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function oi(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          on.has(t)
        );
      }
      let oo = (t) => !oi(t);
      try {
        (no = require("@emotion/is-prop-valid").default) &&
          (oo = (t) => (t.startsWith("on") ? !oi(t) : no(t)));
      } catch (t) {}
      let os = { current: null },
        oa = { current: !1 },
        ol = [...eM, tY, t2],
        ou = (t) => ol.find(ex(t)),
        oc = new WeakMap(),
        oh = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class of {
        scrapeMotionValuesFromProps(t, e, r) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: r,
            reducedMotionConfig: n,
            blockInitialAnimation: i,
            visualState: o,
          },
          s = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = ep),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = te.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t), G.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l, onUpdate: u } = o;
          (this.onUpdate = u),
            (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = r),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = s),
            (this.blockInitialAnimation = !!i),
            (this.isControllingVariants = iC(e)),
            (this.isVariantNode = iI(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: c, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && tu(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            oc.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            oa.current ||
              (function () {
                if (((oa.current = !0), iD.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (os.current = t.matches);
                    t.addListener(e), e();
                  } else os.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || os.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (oc.delete(this.current),
          this.projection && this.projection.unmount(),
          X(this.notifyUpdate),
          X(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let r;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = H.has(t),
            i = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && G.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            o = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (r = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              i(), o(), r && r(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in iN) {
            let e = iN[t];
            if (!e) continue;
            let { isEnabled: r, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                r(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : rZ();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < oh.length; e++) {
            let r = oh[e];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let n = t["on" + r];
            n && (this.propEventSubscriptions[r] = this.on(r, n));
          }
          (this.prevMotionValues = (function (t, e, r) {
            for (let n in e) {
              let i = e[n],
                o = r[n];
              if (tu(i)) t.addValue(n, i);
              else if (tu(o)) t.addValue(n, tl(i, { owner: t }));
              else if (o !== i) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(i) : e.hasAnimated || e.set(i);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, tl(void 0 !== e ? e : i, { owner: t }));
                }
              }
            }
            for (let n in r) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this);
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let r = this.values.get(t);
          e !== r &&
            (r && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let r = this.values.get(t);
          return (
            void 0 === r &&
              void 0 !== e &&
              ((r = tl(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, r)),
            r
          );
        }
        readValue(t, e) {
          var r;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (r = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== r
                ? r
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && (em(n) || tA(n))
                ? (n = parseFloat(n))
                : !ou(n) && t2.test(e) && (n = ee(t, e)),
              this.setBaseTarget(t, tu(n) ? n.get() : n)),
            tu(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let r;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let i = u(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            i && (r = i[t]);
          }
          if (n && void 0 !== r) return r;
          let i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || tu(i)
            ? void 0 !== this.initialValues[t] && void 0 === r
              ? void 0
              : this.baseTarget[t]
            : i;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new ti()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class od extends of {
        constructor() {
          super(...arguments), (this.KeyframeResolver = eA);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: r }) {
          delete e[t], delete r[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          tu(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class op extends od {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = i6);
        }
        readValueFromInstance(t, e) {
          if (H.has(e)) {
            let t = et(e);
            return (t && t.default) || 0;
          }
          {
            let r = window.getComputedStyle(t),
              n = (ey(e) ? r.getPropertyValue(e) : r[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return r4(t, e);
        }
        build(t, e, r) {
          iK(t, e, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, r) {
          return i4(t, e, r);
        }
      }
      class om extends od {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = rZ);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (H.has(e)) {
            let t = et(e);
            return (t && t.default) || 0;
          }
          return (e = i3.has(e) ? e : th(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, r) {
          return i7(t, e, r);
        }
        build(t, e, r) {
          iQ(t, e, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(t, e, r, n) {
          i8(t, e, r, n);
        }
        mount(t) {
          (this.isSVGTag = i2(t.tagName)), super.mount(t);
        }
      }
      let og = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (r, n) =>
            "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n)),
        });
      })(
        ((ns = {
          animation: { Feature: rE },
          exit: { Feature: rM },
          inView: { Feature: iB },
          tap: { Feature: iM },
          focus: { Feature: iE },
          hover: { Feature: ib },
          pan: { Feature: ni },
          drag: { Feature: nr, ProjectionNode: iv, MeasureLayout: nb },
          layout: { ProjectionNode: iv, MeasureLayout: nb },
        }),
        (na = (t, e) =>
          iH(t)
            ? new om(e)
            : new op(e, { allowProjection: t !== nu.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            var e, r;
            let {
              preloadedFeatures: n,
              createVisualElement: i,
              useRender: o,
              useVisualState: s,
              Component: l,
            } = t;
            function u(t, e) {
              var r;
              let n;
              let u = {
                  ...(0, nu.useContext)(iL._),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      r = (0, nu.useContext)(nh.p).id;
                    return r && void 0 !== e ? r + "-" + e : e;
                  })(t),
                },
                { isStatic: c } = u,
                h = (function (t) {
                  let { initial: e, animate: r } = (function (t, e) {
                    if (iC(t)) {
                      let { initial: e, animate: r } = t;
                      return {
                        initial: !1 === e || a(e) ? e : void 0,
                        animate: a(r) ? r : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, nu.useContext)(iO));
                  return (0, nu.useMemo)(
                    () => ({ initial: e, animate: r }),
                    [iF(e), iF(r)]
                  );
                })(t),
                f = s(t, c);
              if (!c && iD.j) {
                (0, nu.useContext)(ik).strict;
                let t = (function (t) {
                  let { drag: e, layout: r } = iN;
                  if (!e && !r) return {};
                  let n = { ...e, ...r };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == r ? void 0 : r.isEnabled(t))
                        ? n.MeasureLayout
                        : void 0,
                    ProjectionNode: n.ProjectionNode,
                  };
                })(u);
                (n = t.MeasureLayout),
                  (h.visualElement = (function (t, e, r, n, i) {
                    var o, s;
                    let { visualElement: a } = (0, nu.useContext)(iO),
                      l = (0, nu.useContext)(ik),
                      u = (0, nu.useContext)(ij.O),
                      c = (0, nu.useContext)(iL._).reducedMotion,
                      h = (0, nu.useRef)(null);
                    (n = n || l.renderer),
                      !h.current &&
                        n &&
                        (h.current = n(t, {
                          visualState: e,
                          parent: a,
                          props: r,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: c,
                        }));
                    let f = h.current,
                      d = (0, nu.useContext)(nf);
                    f &&
                      !f.projection &&
                      i &&
                      ("html" === f.type || "svg" === f.type) &&
                      (function (t, e, r, n) {
                        let {
                          layoutId: i,
                          layout: o,
                          drag: s,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new r(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: i,
                            layout: o,
                            alwaysMeasureLayout: !!s || (a && rI(a)),
                            visualElement: t,
                            animationType: "string" == typeof o ? o : "both",
                            initialPromotionConfig: n,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(h.current, r, i, d);
                    let p = (0, nu.useRef)(!1);
                    (0, nu.useInsertionEffect)(() => {
                      f && p.current && f.update(r, u);
                    });
                    let m = r[tf],
                      g = (0, nu.useRef)(
                        !!m &&
                          !(null === (o = window.MotionHandoffIsComplete) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, m)) &&
                          (null === (s = window.MotionHasOptimisedAnimation) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, m))
                      );
                    return (
                      (0, iV.L)(() => {
                        f &&
                          ((p.current = !0),
                          (window.MotionIsMounted = !0),
                          f.updateFeatures(),
                          ny.render(f.render),
                          g.current &&
                            f.animationState &&
                            f.animationState.animateChanges());
                      }),
                      (0, nu.useEffect)(() => {
                        f &&
                          (!g.current &&
                            f.animationState &&
                            f.animationState.animateChanges(),
                          g.current &&
                            (queueMicrotask(() => {
                              var t;
                              null ===
                                (t = window.MotionHandoffMarkAsComplete) ||
                                void 0 === t ||
                                t.call(window, m);
                            }),
                            (g.current = !1)));
                      }),
                      f
                    );
                  })(l, f, u, i, t.ProjectionNode));
              }
              return (0, nl.jsxs)(iO.Provider, {
                value: h,
                children: [
                  n && h.visualElement
                    ? (0, nl.jsx)(n, { visualElement: h.visualElement, ...u })
                    : null,
                  o(
                    l,
                    t,
                    ((r = h.visualElement),
                    (0, nu.useCallback)(
                      (t) => {
                        t && f.onMount && f.onMount(t),
                          r && (t ? r.mount(t) : r.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : rI(e) && (e.current = t));
                      },
                      [r]
                    )),
                    f,
                    c,
                    h.visualElement
                  ),
                ],
              });
            }
            n &&
              (function (t) {
                for (let e in t) iN[e] = { ...iN[e], ...t[e] };
              })(n),
              (u.displayName = "motion.".concat(
                "string" == typeof l
                  ? l
                  : "create(".concat(
                      null !==
                        (r =
                          null !== (e = l.displayName) && void 0 !== e
                            ? e
                            : l.name) && void 0 !== r
                        ? r
                        : "",
                      ")"
                    )
              ));
            let c = (0, nu.forwardRef)(u);
            return (c[i_] = l), c;
          })({
            ...(iH(t) ? ot : oe),
            preloadedFeatures: ns,
            useRender: (function (t = !1) {
              return (e, r, n, { latestValues: i }, o) => {
                let s = (
                    iH(e)
                      ? function (t, e, r, n) {
                          let i = (0, nu.useMemo)(() => {
                            let r = i1();
                            return (
                              iQ(r, e, i2(n), t.transformTemplate),
                              { ...r.attrs, style: { ...r.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            or(e, t.style, t), (i.style = { ...e, ...i.style });
                          }
                          return i;
                        }
                      : function (t, e) {
                          let r = {},
                            n = (function (t, e) {
                              let r = t.style || {},
                                n = {};
                              return (
                                or(n, r, t),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, nu.useMemo)(() => {
                                      let r = i0();
                                      return (
                                        iK(r, e, t),
                                        Object.assign({}, r.vars, r.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                n
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((r.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (r.tabIndex = 0),
                            (r.style = n),
                            r
                          );
                        }
                  )(r, i, o, e),
                  a = (function (t, e, r) {
                    let n = {};
                    for (let i in t)
                      ("values" !== i || "object" != typeof t.values) &&
                        (oo(i) ||
                          (!0 === r && oi(i)) ||
                          (!e && !oi(i)) ||
                          (t.draggable && i.startsWith("onDrag"))) &&
                        (n[i] = t[i]);
                    return n;
                  })(r, "string" == typeof e, t),
                  l = e !== nu.Fragment ? { ...a, ...s, ref: n } : {},
                  { children: u } = r,
                  c = (0, nu.useMemo)(() => (tu(u) ? u.get() : u), [u]);
                return (0, nu.createElement)(e, { ...l, children: c });
              };
            })(e),
            createVisualElement: na,
            Component: t,
          });
        })
      );
    },
    44563: function (t, e, r) {
      "use strict";
      r.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof window;
    },
    53576: function (t, e, r) {
      "use strict";
      r.d(e, {
        h: function () {
          return i;
        },
      });
      var n = r(2265);
      function i(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    11534: function (t, e, r) {
      "use strict";
      r.d(e, {
        L: function () {
          return i;
        },
      });
      var n = r(2265);
      let i = r(44563).j ? n.useLayoutEffect : n.useEffect;
    },
    64131: function (t, e, r) {
      "use strict";
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) t[n] = r[n];
        }
        return t;
      }
      r.d(e, {
        Z: function () {
          return i;
        },
      });
      var i = (function t(e, r) {
        function i(t, i, o) {
          if ("undefined" != typeof document) {
            "number" == typeof (o = n({}, r, o)).expires &&
              (o.expires = new Date(Date.now() + 864e5 * o.expires)),
              o.expires && (o.expires = o.expires.toUTCString()),
              (t = encodeURIComponent(t)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape));
            var s = "";
            for (var a in o)
              o[a] &&
                ((s += "; " + a),
                !0 !== o[a] && (s += "=" + o[a].split(";")[0]));
            return (document.cookie = t + "=" + e.write(i, t) + s);
          }
        }
        return Object.create(
          {
            set: i,
            get: function (t) {
              if ("undefined" != typeof document && (!arguments.length || t)) {
                for (
                  var r = document.cookie ? document.cookie.split("; ") : [],
                    n = {},
                    i = 0;
                  i < r.length;
                  i++
                ) {
                  var o = r[i].split("="),
                    s = o.slice(1).join("=");
                  try {
                    var a = decodeURIComponent(o[0]);
                    if (((n[a] = e.read(s, a)), t === a)) break;
                  } catch (t) {}
                }
                return t ? n[t] : n;
              }
            },
            remove: function (t, e) {
              i(t, "", n({}, e, { expires: -1 }));
            },
            withAttributes: function (e) {
              return t(this.converter, n({}, this.attributes, e));
            },
            withConverter: function (e) {
              return t(n({}, this.converter, e), this.attributes);
            },
          },
          {
            attributes: { value: Object.freeze(r) },
            converter: { value: Object.freeze(e) },
          }
        );
      })(
        {
          read: function (t) {
            return (
              '"' === t[0] && (t = t.slice(1, -1)),
              t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            );
          },
          write: function (t) {
            return encodeURIComponent(t).replace(
              /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
              decodeURIComponent
            );
          },
        },
        { path: "/" }
      );
    },
    14474: function (t, e, r) {
      "use strict";
      r.d(e, {
        o: function () {
          return i;
        },
      });
      class n extends Error {}
      function i(t, e) {
        let r;
        if ("string" != typeof t)
          throw new n("Invalid token specified: must be a string");
        e || (e = {});
        let i = !0 === e.header ? 0 : 1,
          o = t.split(".")[i];
        if ("string" != typeof o)
          throw new n(`Invalid token specified: missing part #${i + 1}`);
        try {
          r = (function (t) {
            let e = t.replace(/-/g, "+").replace(/_/g, "/");
            switch (e.length % 4) {
              case 0:
                break;
              case 2:
                e += "==";
                break;
              case 3:
                e += "=";
                break;
              default:
                throw Error("base64 string is not of the correct length");
            }
            try {
              var r;
              return (
                (r = e),
                decodeURIComponent(
                  atob(r).replace(/(.)/g, (t, e) => {
                    let r = e.charCodeAt(0).toString(16).toUpperCase();
                    return r.length < 2 && (r = "0" + r), "%" + r;
                  })
                )
              );
            } catch (t) {
              return atob(e);
            }
          })(o);
        } catch (t) {
          throw new n(
            `Invalid token specified: invalid base64 for part #${i + 1} (${
              t.message
            })`
          );
        }
        try {
          return JSON.parse(r);
        } catch (t) {
          throw new n(
            `Invalid token specified: invalid json for part #${i + 1} (${
              t.message
            })`
          );
        }
      }
      n.prototype.name = "InvalidTokenError";
    },
    44633: function (t, e, r) {
      "use strict";
      r.d(e, {
        Ey: function () {
          return l;
        },
        XY: function () {
          return s;
        },
      });
      var n = r(82957),
        i = r(87336),
        o = class extends i.v {
          socket;
          constructor(t, e, r) {
            super(),
              (this.socket = new window.WebSocket(t, r)),
              (this.socket.onopen = () => this.emit("open")),
              (this.socket.onmessage = (t) => this.emit("message", t.data)),
              (this.socket.onerror = (t) => this.emit("error", t)),
              (this.socket.onclose = (t) => {
                this.emit("close", t.code, t.reason);
              });
          }
          send(t, e, r) {
            let n = r || e;
            try {
              this.socket.send(t), n();
            } catch (t) {
              n(t);
            }
          }
          close(t, e) {
            this.socket.close(t, e);
          }
          addEventListener(t, e, r) {
            this.socket.addEventListener(t, e, r);
          }
        };
      function s(t, e) {
        return new o(t, e);
      }
      var a = class {
          encode(t) {
            return JSON.stringify(t);
          }
          decode(t) {
            return JSON.parse(t);
          }
        },
        l = class extends i.v {
          address;
          rpc_id;
          queue;
          options;
          autoconnect;
          ready;
          reconnect;
          reconnect_timer_id;
          reconnect_interval;
          max_reconnects;
          rest_options;
          current_reconnects;
          generate_request_id;
          socket;
          webSocketFactory;
          dataPack;
          constructor(
            t,
            e = "ws://localhost:8080",
            {
              autoconnect: r = !0,
              reconnect: n = !0,
              reconnect_interval: i = 1e3,
              max_reconnects: o = 5,
              ...s
            } = {},
            l,
            u
          ) {
            super(),
              (this.webSocketFactory = t),
              (this.queue = {}),
              (this.rpc_id = 0),
              (this.address = e),
              (this.autoconnect = r),
              (this.ready = !1),
              (this.reconnect = n),
              (this.reconnect_timer_id = void 0),
              (this.reconnect_interval = i),
              (this.max_reconnects = o),
              (this.rest_options = s),
              (this.current_reconnects = 0),
              (this.generate_request_id =
                l ||
                (() =>
                  "number" == typeof this.rpc_id
                    ? ++this.rpc_id
                    : Number(this.rpc_id) + 1)),
              u ? (this.dataPack = u) : (this.dataPack = new a()),
              this.autoconnect &&
                this._connect(this.address, {
                  autoconnect: this.autoconnect,
                  reconnect: this.reconnect,
                  reconnect_interval: this.reconnect_interval,
                  max_reconnects: this.max_reconnects,
                  ...this.rest_options,
                });
          }
          connect() {
            this.socket ||
              this._connect(this.address, {
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects,
                ...this.rest_options,
              });
          }
          call(t, e, r, n) {
            return (
              n || "object" != typeof r || ((n = r), (r = null)),
              new Promise((i, o) => {
                if (!this.ready) return o(Error("socket not ready"));
                let s = this.generate_request_id(t, e);
                this.socket.send(
                  this.dataPack.encode({
                    jsonrpc: "2.0",
                    method: t,
                    params: e || void 0,
                    id: s,
                  }),
                  n,
                  (t) => {
                    if (t) return o(t);
                    (this.queue[s] = { promise: [i, o] }),
                      r &&
                        (this.queue[s].timeout = setTimeout(() => {
                          delete this.queue[s], o(Error("reply timeout"));
                        }, r));
                  }
                );
              })
            );
          }
          async login(t) {
            let e = await this.call("rpc.login", t);
            if (!e) throw Error("authentication failed");
            return e;
          }
          async listMethods() {
            return await this.call("__listMethods");
          }
          notify(t, e) {
            return new Promise((r, n) => {
              if (!this.ready) return n(Error("socket not ready"));
              this.socket.send(
                this.dataPack.encode({ jsonrpc: "2.0", method: t, params: e }),
                (t) => {
                  if (t) return n(t);
                  r();
                }
              );
            });
          }
          async subscribe(t) {
            "string" == typeof t && (t = [t]);
            let e = await this.call("rpc.on", t);
            if ("string" == typeof t && "ok" !== e[t])
              throw Error(
                "Failed subscribing to an event '" + t + "' with: " + e[t]
              );
            return e;
          }
          async unsubscribe(t) {
            "string" == typeof t && (t = [t]);
            let e = await this.call("rpc.off", t);
            if ("string" == typeof t && "ok" !== e[t])
              throw Error("Failed unsubscribing from an event with: " + e);
            return e;
          }
          close(t, e) {
            this.socket.close(t || 1e3, e);
          }
          setAutoReconnect(t) {
            this.reconnect = t;
          }
          setReconnectInterval(t) {
            this.reconnect_interval = t;
          }
          setMaxReconnects(t) {
            this.max_reconnects = t;
          }
          _connect(t, e) {
            clearTimeout(this.reconnect_timer_id),
              (this.socket = this.webSocketFactory(t, e)),
              this.socket.addEventListener("open", () => {
                (this.ready = !0),
                  this.emit("open"),
                  (this.current_reconnects = 0);
              }),
              this.socket.addEventListener("message", ({ data: t }) => {
                t instanceof ArrayBuffer && (t = n.Buffer.from(t).toString());
                try {
                  t = this.dataPack.decode(t);
                } catch (t) {
                  return;
                }
                if (t.notification && this.listeners(t.notification).length) {
                  if (!Object.keys(t.params).length)
                    return this.emit(t.notification);
                  let e = [t.notification];
                  if (t.params.constructor === Object) e.push(t.params);
                  else
                    for (let r = 0; r < t.params.length; r++)
                      e.push(t.params[r]);
                  return Promise.resolve().then(() => {
                    this.emit.apply(this, e);
                  });
                }
                if (!this.queue[t.id])
                  return t.method
                    ? Promise.resolve().then(() => {
                        this.emit(t.method, t?.params);
                      })
                    : void 0;
                "error" in t == "result" in t &&
                  this.queue[t.id].promise[1](
                    Error(
                      'Server response malformed. Response must include either "result" or "error", but not both.'
                    )
                  ),
                  this.queue[t.id].timeout &&
                    clearTimeout(this.queue[t.id].timeout),
                  t.error
                    ? this.queue[t.id].promise[1](t.error)
                    : this.queue[t.id].promise[0](t.result),
                  delete this.queue[t.id];
              }),
              this.socket.addEventListener("error", (t) =>
                this.emit("error", t)
              ),
              this.socket.addEventListener(
                "close",
                ({ code: r, reason: n }) => {
                  this.ready && setTimeout(() => this.emit("close", r, n), 0),
                    (this.ready = !1),
                    (this.socket = void 0),
                    1e3 !== r &&
                      (this.current_reconnects++,
                      this.reconnect &&
                        (this.max_reconnects > this.current_reconnects ||
                          0 === this.max_reconnects) &&
                        (this.reconnect_timer_id = setTimeout(
                          () => this._connect(t, e),
                          this.reconnect_interval
                        )));
                }
              );
          }
        };
    },
    14438: function (t, e, r) {
      "use strict";
      r.d(e, {
        Am: function () {
          return y;
        },
        x7: function () {
          return x;
        },
      });
      var n = r(2265),
        i = r(54887),
        o = (t) => {
          switch (t) {
            case "success":
              return l;
            case "info":
              return c;
            case "warning":
              return u;
            case "error":
              return h;
            default:
              return null;
          }
        },
        s = Array(12).fill(0),
        a = (t) => {
          let { visible: e, className: r } = t;
          return n.createElement(
            "div",
            {
              className: ["sonner-loading-wrapper", r]
                .filter(Boolean)
                .join(" "),
              "data-visible": e,
            },
            n.createElement(
              "div",
              { className: "sonner-spinner" },
              s.map((t, e) =>
                n.createElement("div", {
                  className: "sonner-loading-bar",
                  key: "spinner-bar-".concat(e),
                })
              )
            )
          );
        },
        l = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd",
          })
        ),
        u = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd",
          })
        ),
        c = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd",
          })
        ),
        h = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd",
          })
        ),
        f = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          n.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          n.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        ),
        d = () => {
          let [t, e] = n.useState(document.hidden);
          return (
            n.useEffect(() => {
              let t = () => {
                e(document.hidden);
              };
              return (
                document.addEventListener("visibilitychange", t),
                () => window.removeEventListener("visibilitychange", t)
              );
            }, []),
            t
          );
        },
        p = 1,
        m = new (class {
          constructor() {
            (this.subscribe = (t) => (
              this.subscribers.push(t),
              () => {
                let e = this.subscribers.indexOf(t);
                this.subscribers.splice(e, 1);
              }
            )),
              (this.publish = (t) => {
                this.subscribers.forEach((e) => e(t));
              }),
              (this.addToast = (t) => {
                this.publish(t), (this.toasts = [...this.toasts, t]);
              }),
              (this.create = (t) => {
                var e;
                let { message: r, ...n } = t,
                  i =
                    "number" == typeof (null == t ? void 0 : t.id) ||
                    (null == (e = t.id) ? void 0 : e.length) > 0
                      ? t.id
                      : p++,
                  o = this.toasts.find((t) => t.id === i),
                  s = void 0 === t.dismissible || t.dismissible;
                return (
                  this.dismissedToasts.has(i) && this.dismissedToasts.delete(i),
                  o
                    ? (this.toasts = this.toasts.map((e) =>
                        e.id === i
                          ? (this.publish({ ...e, ...t, id: i, title: r }),
                            { ...e, ...t, id: i, dismissible: s, title: r })
                          : e
                      ))
                    : this.addToast({ title: r, ...n, dismissible: s, id: i }),
                  i
                );
              }),
              (this.dismiss = (t) => (
                this.dismissedToasts.add(t),
                t ||
                  this.toasts.forEach((t) => {
                    this.subscribers.forEach((e) =>
                      e({ id: t.id, dismiss: !0 })
                    );
                  }),
                this.subscribers.forEach((e) => e({ id: t, dismiss: !0 })),
                t
              )),
              (this.message = (t, e) => this.create({ ...e, message: t })),
              (this.error = (t, e) =>
                this.create({ ...e, message: t, type: "error" })),
              (this.success = (t, e) =>
                this.create({ ...e, type: "success", message: t })),
              (this.info = (t, e) =>
                this.create({ ...e, type: "info", message: t })),
              (this.warning = (t, e) =>
                this.create({ ...e, type: "warning", message: t })),
              (this.loading = (t, e) =>
                this.create({ ...e, type: "loading", message: t })),
              (this.promise = (t, e) => {
                let r;
                if (!e) return;
                void 0 !== e.loading &&
                  (r = this.create({
                    ...e,
                    promise: t,
                    type: "loading",
                    message: e.loading,
                    description:
                      "function" != typeof e.description
                        ? e.description
                        : void 0,
                  }));
                let i = t instanceof Promise ? t : t(),
                  o = void 0 !== r,
                  s,
                  a = i
                    .then(async (t) => {
                      if (((s = ["resolve", t]), n.isValidElement(t)))
                        (o = !1),
                          this.create({ id: r, type: "default", message: t });
                      else if (g(t) && !t.ok) {
                        o = !1;
                        let n =
                            "function" == typeof e.error
                              ? await e.error(
                                  "HTTP error! status: ".concat(t.status)
                                )
                              : e.error,
                          i =
                            "function" == typeof e.description
                              ? await e.description(
                                  "HTTP error! status: ".concat(t.status)
                                )
                              : e.description;
                        this.create({
                          id: r,
                          type: "error",
                          message: n,
                          description: i,
                        });
                      } else if (void 0 !== e.success) {
                        o = !1;
                        let n =
                            "function" == typeof e.success
                              ? await e.success(t)
                              : e.success,
                          i =
                            "function" == typeof e.description
                              ? await e.description(t)
                              : e.description;
                        this.create({
                          id: r,
                          type: "success",
                          message: n,
                          description: i,
                        });
                      }
                    })
                    .catch(async (t) => {
                      if (((s = ["reject", t]), void 0 !== e.error)) {
                        o = !1;
                        let n =
                            "function" == typeof e.error
                              ? await e.error(t)
                              : e.error,
                          i =
                            "function" == typeof e.description
                              ? await e.description(t)
                              : e.description;
                        this.create({
                          id: r,
                          type: "error",
                          message: n,
                          description: i,
                        });
                      }
                    })
                    .finally(() => {
                      var t;
                      o && (this.dismiss(r), (r = void 0)),
                        null == (t = e.finally) || t.call(e);
                    }),
                  l = () =>
                    new Promise((t, e) =>
                      a
                        .then(() => ("reject" === s[0] ? e(s[1]) : t(s[1])))
                        .catch(e)
                    );
                return "string" != typeof r && "number" != typeof r
                  ? { unwrap: l }
                  : Object.assign(r, { unwrap: l });
              }),
              (this.custom = (t, e) => {
                let r = (null == e ? void 0 : e.id) || p++;
                return this.create({ jsx: t(r), id: r, ...e }), r;
              }),
              (this.getActiveToasts = () =>
                this.toasts.filter((t) => !this.dismissedToasts.has(t.id))),
              (this.subscribers = []),
              (this.toasts = []),
              (this.dismissedToasts = new Set());
          }
        })(),
        g = (t) =>
          t &&
          "object" == typeof t &&
          "ok" in t &&
          "boolean" == typeof t.ok &&
          "status" in t &&
          "number" == typeof t.status,
        y = Object.assign(
          (t, e) => {
            let r = (null == e ? void 0 : e.id) || p++;
            return m.addToast({ title: t, ...e, id: r }), r;
          },
          {
            success: m.success,
            info: m.info,
            warning: m.warning,
            error: m.error,
            custom: m.custom,
            message: m.message,
            promise: m.promise,
            dismiss: m.dismiss,
            loading: m.loading,
          },
          { getHistory: () => m.toasts, getToasts: () => m.getActiveToasts() }
        );
      function v(t) {
        return void 0 !== t.label;
      }
      function w() {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return e.filter(Boolean).join(" ");
      }
      !(function (t) {
        let { insertAt: e } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!t || "undefined" == typeof document) return;
        let r = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
        (n.type = "text/css"),
          "top" === e && r.firstChild
            ? r.insertBefore(n, r.firstChild)
            : r.appendChild(n),
          n.styleSheet
            ? (n.styleSheet.cssText = t)
            : n.appendChild(document.createTextNode(t));
      })(
        ':where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}\n'
      );
      var b = (t) => {
        var e, r, i, s, l, u, c, h, p, m, g, y, b, E;
        let {
            invert: x,
            toast: M,
            unstyled: S,
            interacting: A,
            setHeights: T,
            visibleToasts: R,
            heights: P,
            index: B,
            toasts: k,
            expanded: L,
            removeToast: O,
            defaultRichColors: C,
            closeButton: I,
            style: F,
            cancelButtonStyle: D,
            actionButtonStyle: U,
            className: N = "",
            descriptionClassName: _ = "",
            duration: j,
            position: V,
            gap: z,
            loadingIcon: H,
            expandByDefault: q,
            classNames: $,
            icons: W,
            closeButtonAriaLabel: Y = "Close toast",
            pauseWhenPageIsHidden: Z,
          } = t,
          [K, G] = n.useState(null),
          [X, J] = n.useState(null),
          [Q, tt] = n.useState(!1),
          [te, tr] = n.useState(!1),
          [tn, ti] = n.useState(!1),
          [to, ts] = n.useState(!1),
          [ta, tl] = n.useState(!1),
          [tu, tc] = n.useState(0),
          [th, tf] = n.useState(0),
          td = n.useRef(M.duration || j || 4e3),
          tp = n.useRef(null),
          tm = n.useRef(null),
          tg = 0 === B,
          ty = B + 1 <= R,
          tv = M.type,
          tw = !1 !== M.dismissible,
          tb = M.className || "",
          tE = M.descriptionClassName || "",
          tx = n.useMemo(
            () => P.findIndex((t) => t.toastId === M.id) || 0,
            [P, M.id]
          ),
          tM = n.useMemo(() => {
            var t;
            return null != (t = M.closeButton) ? t : I;
          }, [M.closeButton, I]),
          tS = n.useMemo(() => M.duration || j || 4e3, [M.duration, j]),
          tA = n.useRef(0),
          tT = n.useRef(0),
          tR = n.useRef(0),
          tP = n.useRef(null),
          [tB, tk] = V.split("-"),
          tL = n.useMemo(
            () => P.reduce((t, e, r) => (r >= tx ? t : t + e.height), 0),
            [P, tx]
          ),
          tO = d(),
          tC = M.invert || x,
          tI = "loading" === tv;
        (tT.current = n.useMemo(() => tx * z + tL, [tx, tL])),
          n.useEffect(() => {
            td.current = tS;
          }, [tS]),
          n.useEffect(() => {
            tt(!0);
          }, []),
          n.useEffect(() => {
            let t = tm.current;
            if (t) {
              let e = t.getBoundingClientRect().height;
              return (
                tf(e),
                T((t) => [
                  { toastId: M.id, height: e, position: M.position },
                  ...t,
                ]),
                () => T((t) => t.filter((t) => t.toastId !== M.id))
              );
            }
          }, [T, M.id]),
          n.useLayoutEffect(() => {
            if (!Q) return;
            let t = tm.current,
              e = t.style.height;
            t.style.height = "auto";
            let r = t.getBoundingClientRect().height;
            (t.style.height = e),
              tf(r),
              T((t) =>
                t.find((t) => t.toastId === M.id)
                  ? t.map((t) => (t.toastId === M.id ? { ...t, height: r } : t))
                  : [{ toastId: M.id, height: r, position: M.position }, ...t]
              );
          }, [Q, M.title, M.description, T, M.id]);
        let tF = n.useCallback(() => {
          tr(!0),
            tc(tT.current),
            T((t) => t.filter((t) => t.toastId !== M.id)),
            setTimeout(() => {
              O(M);
            }, 200);
        }, [M, O, T, tT]);
        return (
          n.useEffect(() => {
            let t;
            if (
              (!M.promise || "loading" !== tv) &&
              M.duration !== 1 / 0 &&
              "loading" !== M.type
            )
              return (
                L || A || (Z && tO)
                  ? (() => {
                      if (tR.current < tA.current) {
                        let t = new Date().getTime() - tA.current;
                        td.current = td.current - t;
                      }
                      tR.current = new Date().getTime();
                    })()
                  : td.current !== 1 / 0 &&
                    ((tA.current = new Date().getTime()),
                    (t = setTimeout(() => {
                      var t;
                      null == (t = M.onAutoClose) || t.call(M, M), tF();
                    }, td.current))),
                () => clearTimeout(t)
              );
          }, [L, A, M, tv, Z, tO, tF]),
          n.useEffect(() => {
            M.delete && tF();
          }, [tF, M.delete]),
          n.createElement(
            "li",
            {
              tabIndex: 0,
              ref: tm,
              className: w(
                N,
                tb,
                null == $ ? void 0 : $.toast,
                null == (e = null == M ? void 0 : M.classNames)
                  ? void 0
                  : e.toast,
                null == $ ? void 0 : $.default,
                null == $ ? void 0 : $[tv],
                null == (r = null == M ? void 0 : M.classNames) ? void 0 : r[tv]
              ),
              "data-sonner-toast": "",
              "data-rich-colors": null != (i = M.richColors) ? i : C,
              "data-styled": !(M.jsx || M.unstyled || S),
              "data-mounted": Q,
              "data-promise": !!M.promise,
              "data-swiped": ta,
              "data-removed": te,
              "data-visible": ty,
              "data-y-position": tB,
              "data-x-position": tk,
              "data-index": B,
              "data-front": tg,
              "data-swiping": tn,
              "data-dismissible": tw,
              "data-type": tv,
              "data-invert": tC,
              "data-swipe-out": to,
              "data-swipe-direction": X,
              "data-expanded": !!(L || (q && Q)),
              style: {
                "--index": B,
                "--toasts-before": B,
                "--z-index": k.length - B,
                "--offset": "".concat(te ? tu : tT.current, "px"),
                "--initial-height": q ? "auto" : "".concat(th, "px"),
                ...F,
                ...M.style,
              },
              onDragEnd: () => {
                ti(!1), G(null), (tP.current = null);
              },
              onPointerDown: (t) => {
                tI ||
                  !tw ||
                  ((tp.current = new Date()),
                  tc(tT.current),
                  t.target.setPointerCapture(t.pointerId),
                  "BUTTON" !== t.target.tagName &&
                    (ti(!0), (tP.current = { x: t.clientX, y: t.clientY })));
              },
              onPointerUp: () => {
                var t, e, r, n;
                if (to || !tw) return;
                tP.current = null;
                let i = Number(
                    (null == (t = tm.current)
                      ? void 0
                      : t.style
                          .getPropertyValue("--swipe-amount-x")
                          .replace("px", "")) || 0
                  ),
                  o = Number(
                    (null == (e = tm.current)
                      ? void 0
                      : e.style
                          .getPropertyValue("--swipe-amount-y")
                          .replace("px", "")) || 0
                  ),
                  s =
                    new Date().getTime() -
                    (null == (r = tp.current) ? void 0 : r.getTime()),
                  a = "x" === K ? i : o;
                if (Math.abs(a) >= 20 || Math.abs(a) / s > 0.11) {
                  tc(tT.current),
                    null == (n = M.onDismiss) || n.call(M, M),
                    J(
                      "x" === K
                        ? i > 0
                          ? "right"
                          : "left"
                        : o > 0
                        ? "down"
                        : "up"
                    ),
                    tF(),
                    ts(!0),
                    tl(!1);
                  return;
                }
                ti(!1), G(null);
              },
              onPointerMove: (e) => {
                var r, n, i, o;
                if (
                  !tP.current ||
                  !tw ||
                  (null == (r = window.getSelection())
                    ? void 0
                    : r.toString().length) > 0
                )
                  return;
                let s = e.clientY - tP.current.y,
                  a = e.clientX - tP.current.x,
                  l =
                    null != (n = t.swipeDirections)
                      ? n
                      : (function (t) {
                          let [e, r] = t.split("-"),
                            n = [];
                          return e && n.push(e), r && n.push(r), n;
                        })(V);
                !K &&
                  (Math.abs(a) > 1 || Math.abs(s) > 1) &&
                  G(Math.abs(a) > Math.abs(s) ? "x" : "y");
                let u = { x: 0, y: 0 };
                "y" === K
                  ? (l.includes("top") || l.includes("bottom")) &&
                    ((l.includes("top") && s < 0) ||
                      (l.includes("bottom") && s > 0)) &&
                    (u.y = s)
                  : "x" === K &&
                    (l.includes("left") || l.includes("right")) &&
                    ((l.includes("left") && a < 0) ||
                      (l.includes("right") && a > 0)) &&
                    (u.x = a),
                  (Math.abs(u.x) > 0 || Math.abs(u.y) > 0) && tl(!0),
                  null == (i = tm.current) ||
                    i.style.setProperty(
                      "--swipe-amount-x",
                      "".concat(u.x, "px")
                    ),
                  null == (o = tm.current) ||
                    o.style.setProperty(
                      "--swipe-amount-y",
                      "".concat(u.y, "px")
                    );
              },
            },
            tM && !M.jsx
              ? n.createElement(
                  "button",
                  {
                    "aria-label": Y,
                    "data-disabled": tI,
                    "data-close-button": !0,
                    onClick:
                      tI || !tw
                        ? () => {}
                        : () => {
                            var t;
                            tF(), null == (t = M.onDismiss) || t.call(M, M);
                          },
                    className: w(
                      null == $ ? void 0 : $.closeButton,
                      null == (s = null == M ? void 0 : M.classNames)
                        ? void 0
                        : s.closeButton
                    ),
                  },
                  null != (l = null == W ? void 0 : W.close) ? l : f
                )
              : null,
            M.jsx || (0, n.isValidElement)(M.title)
              ? M.jsx
                ? M.jsx
                : "function" == typeof M.title
                ? M.title()
                : M.title
              : n.createElement(
                  n.Fragment,
                  null,
                  tv || M.icon || M.promise
                    ? n.createElement(
                        "div",
                        {
                          "data-icon": "",
                          className: w(
                            null == $ ? void 0 : $.icon,
                            null == (u = null == M ? void 0 : M.classNames)
                              ? void 0
                              : u.icon
                          ),
                        },
                        M.promise || ("loading" === M.type && !M.icon)
                          ? M.icon ||
                              (null != W && W.loading
                                ? n.createElement(
                                    "div",
                                    {
                                      className: w(
                                        null == $ ? void 0 : $.loader,
                                        null ==
                                          (y =
                                            null == M ? void 0 : M.classNames)
                                          ? void 0
                                          : y.loader,
                                        "sonner-loader"
                                      ),
                                      "data-visible": "loading" === tv,
                                    },
                                    W.loading
                                  )
                                : H
                                ? n.createElement(
                                    "div",
                                    {
                                      className: w(
                                        null == $ ? void 0 : $.loader,
                                        null ==
                                          (b =
                                            null == M ? void 0 : M.classNames)
                                          ? void 0
                                          : b.loader,
                                        "sonner-loader"
                                      ),
                                      "data-visible": "loading" === tv,
                                    },
                                    H
                                  )
                                : n.createElement(a, {
                                    className: w(
                                      null == $ ? void 0 : $.loader,
                                      null ==
                                        (E = null == M ? void 0 : M.classNames)
                                        ? void 0
                                        : E.loader
                                    ),
                                    visible: "loading" === tv,
                                  }))
                          : null,
                        "loading" !== M.type
                          ? M.icon || (null == W ? void 0 : W[tv]) || o(tv)
                          : null
                      )
                    : null,
                  n.createElement(
                    "div",
                    {
                      "data-content": "",
                      className: w(
                        null == $ ? void 0 : $.content,
                        null == (c = null == M ? void 0 : M.classNames)
                          ? void 0
                          : c.content
                      ),
                    },
                    n.createElement(
                      "div",
                      {
                        "data-title": "",
                        className: w(
                          null == $ ? void 0 : $.title,
                          null == (h = null == M ? void 0 : M.classNames)
                            ? void 0
                            : h.title
                        ),
                      },
                      "function" == typeof M.title ? M.title() : M.title
                    ),
                    M.description
                      ? n.createElement(
                          "div",
                          {
                            "data-description": "",
                            className: w(
                              _,
                              tE,
                              null == $ ? void 0 : $.description,
                              null == (p = null == M ? void 0 : M.classNames)
                                ? void 0
                                : p.description
                            ),
                          },
                          "function" == typeof M.description
                            ? M.description()
                            : M.description
                        )
                      : null
                  ),
                  (0, n.isValidElement)(M.cancel)
                    ? M.cancel
                    : M.cancel && v(M.cancel)
                    ? n.createElement(
                        "button",
                        {
                          "data-button": !0,
                          "data-cancel": !0,
                          style: M.cancelButtonStyle || D,
                          onClick: (t) => {
                            var e, r;
                            v(M.cancel) &&
                              tw &&
                              (null == (r = (e = M.cancel).onClick) ||
                                r.call(e, t),
                              tF());
                          },
                          className: w(
                            null == $ ? void 0 : $.cancelButton,
                            null == (m = null == M ? void 0 : M.classNames)
                              ? void 0
                              : m.cancelButton
                          ),
                        },
                        M.cancel.label
                      )
                    : null,
                  (0, n.isValidElement)(M.action)
                    ? M.action
                    : M.action && v(M.action)
                    ? n.createElement(
                        "button",
                        {
                          "data-button": !0,
                          "data-action": !0,
                          style: M.actionButtonStyle || U,
                          onClick: (t) => {
                            var e, r;
                            v(M.action) &&
                              (null == (r = (e = M.action).onClick) ||
                                r.call(e, t),
                              t.defaultPrevented || tF());
                          },
                          className: w(
                            null == $ ? void 0 : $.actionButton,
                            null == (g = null == M ? void 0 : M.classNames)
                              ? void 0
                              : g.actionButton
                          ),
                        },
                        M.action.label
                      )
                    : null
                )
          )
        );
      };
      function E() {
        if ("undefined" == typeof window || "undefined" == typeof document)
          return "ltr";
        let t = document.documentElement.getAttribute("dir");
        return "auto" !== t && t
          ? t
          : window.getComputedStyle(document.documentElement).direction;
      }
      var x = (0, n.forwardRef)(function (t, e) {
        let {
            invert: r,
            position: o = "bottom-right",
            hotkey: s = ["altKey", "KeyT"],
            expand: a,
            closeButton: l,
            className: u,
            offset: c,
            mobileOffset: h,
            theme: f = "light",
            richColors: d,
            duration: p,
            style: g,
            visibleToasts: y = 3,
            toastOptions: v,
            dir: w = E(),
            gap: x = 14,
            loadingIcon: M,
            icons: S,
            containerAriaLabel: A = "Notifications",
            pauseWhenPageIsHidden: T,
          } = t,
          [R, P] = n.useState([]),
          B = n.useMemo(
            () =>
              Array.from(
                new Set(
                  [o].concat(R.filter((t) => t.position).map((t) => t.position))
                )
              ),
            [R, o]
          ),
          [k, L] = n.useState([]),
          [O, C] = n.useState(!1),
          [I, F] = n.useState(!1),
          [D, U] = n.useState(
            "system" !== f
              ? f
              : "undefined" != typeof window &&
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"
          ),
          N = n.useRef(null),
          _ = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
          j = n.useRef(null),
          V = n.useRef(!1),
          z = n.useCallback((t) => {
            P((e) => {
              var r;
              return (
                (null != (r = e.find((e) => e.id === t.id)) && r.delete) ||
                  m.dismiss(t.id),
                e.filter((e) => {
                  let { id: r } = e;
                  return r !== t.id;
                })
              );
            });
          }, []);
        return (
          n.useEffect(
            () =>
              m.subscribe((t) => {
                if (t.dismiss) {
                  P((e) =>
                    e.map((e) => (e.id === t.id ? { ...e, delete: !0 } : e))
                  );
                  return;
                }
                setTimeout(() => {
                  i.flushSync(() => {
                    P((e) => {
                      let r = e.findIndex((e) => e.id === t.id);
                      return -1 !== r
                        ? [
                            ...e.slice(0, r),
                            { ...e[r], ...t },
                            ...e.slice(r + 1),
                          ]
                        : [t, ...e];
                    });
                  });
                });
              }),
            []
          ),
          n.useEffect(() => {
            if ("system" !== f) {
              U(f);
              return;
            }
            if (
              ("system" === f &&
                (window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? U("dark")
                  : U("light")),
              "undefined" == typeof window)
            )
              return;
            let t = window.matchMedia("(prefers-color-scheme: dark)");
            try {
              t.addEventListener("change", (t) => {
                let { matches: e } = t;
                U(e ? "dark" : "light");
              });
            } catch (e) {
              t.addListener((t) => {
                let { matches: e } = t;
                try {
                  U(e ? "dark" : "light");
                } catch (t) {
                  console.error(t);
                }
              });
            }
          }, [f]),
          n.useEffect(() => {
            R.length <= 1 && C(!1);
          }, [R]),
          n.useEffect(() => {
            let t = (t) => {
              var e, r;
              s.every((e) => t[e] || t.code === e) &&
                (C(!0), null == (e = N.current) || e.focus()),
                "Escape" === t.code &&
                  (document.activeElement === N.current ||
                    (null != (r = N.current) &&
                      r.contains(document.activeElement))) &&
                  C(!1);
            };
            return (
              document.addEventListener("keydown", t),
              () => document.removeEventListener("keydown", t)
            );
          }, [s]),
          n.useEffect(() => {
            if (N.current)
              return () => {
                j.current &&
                  (j.current.focus({ preventScroll: !0 }),
                  (j.current = null),
                  (V.current = !1));
              };
          }, [N.current]),
          n.createElement(
            "section",
            {
              ref: e,
              "aria-label": "".concat(A, " ").concat(_),
              tabIndex: -1,
              "aria-live": "polite",
              "aria-relevant": "additions text",
              "aria-atomic": "false",
              suppressHydrationWarning: !0,
            },
            B.map((e, i) => {
              var o;
              let s;
              let [f, m] = e.split("-");
              return R.length
                ? n.createElement(
                    "ol",
                    {
                      key: e,
                      dir: "auto" === w ? E() : w,
                      tabIndex: -1,
                      ref: N,
                      className: u,
                      "data-sonner-toaster": !0,
                      "data-theme": D,
                      "data-y-position": f,
                      "data-lifted": O && R.length > 1 && !a,
                      "data-x-position": m,
                      style: {
                        "--front-toast-height": "".concat(
                          (null == (o = k[0]) ? void 0 : o.height) || 0,
                          "px"
                        ),
                        "--width": "".concat(356, "px"),
                        "--gap": "".concat(x, "px"),
                        ...g,
                        ...((s = {}),
                        [c, h].forEach((t, e) => {
                          let r = 1 === e,
                            n = r ? "--mobile-offset" : "--offset",
                            i = r ? "16px" : "32px";
                          function o(t) {
                            ["top", "right", "bottom", "left"].forEach((e) => {
                              s["".concat(n, "-").concat(e)] =
                                "number" == typeof t ? "".concat(t, "px") : t;
                            });
                          }
                          "number" == typeof t || "string" == typeof t
                            ? o(t)
                            : "object" == typeof t
                            ? ["top", "right", "bottom", "left"].forEach(
                                (e) => {
                                  void 0 === t[e]
                                    ? (s["".concat(n, "-").concat(e)] = i)
                                    : (s["".concat(n, "-").concat(e)] =
                                        "number" == typeof t[e]
                                          ? "".concat(t[e], "px")
                                          : t[e]);
                                }
                              )
                            : o(i);
                        }),
                        s),
                      },
                      onBlur: (t) => {
                        V.current &&
                          !t.currentTarget.contains(t.relatedTarget) &&
                          ((V.current = !1),
                          j.current &&
                            (j.current.focus({ preventScroll: !0 }),
                            (j.current = null)));
                      },
                      onFocus: (t) => {
                        (t.target instanceof HTMLElement &&
                          "false" === t.target.dataset.dismissible) ||
                          V.current ||
                          ((V.current = !0), (j.current = t.relatedTarget));
                      },
                      onMouseEnter: () => C(!0),
                      onMouseMove: () => C(!0),
                      onMouseLeave: () => {
                        I || C(!1);
                      },
                      onDragEnd: () => C(!1),
                      onPointerDown: (t) => {
                        (t.target instanceof HTMLElement &&
                          "false" === t.target.dataset.dismissible) ||
                          F(!0);
                      },
                      onPointerUp: () => F(!1),
                    },
                    R.filter(
                      (t) => (!t.position && 0 === i) || t.position === e
                    ).map((i, o) => {
                      var s, u;
                      return n.createElement(b, {
                        key: i.id,
                        icons: S,
                        index: o,
                        toast: i,
                        defaultRichColors: d,
                        duration:
                          null != (s = null == v ? void 0 : v.duration) ? s : p,
                        className: null == v ? void 0 : v.className,
                        descriptionClassName:
                          null == v ? void 0 : v.descriptionClassName,
                        invert: r,
                        visibleToasts: y,
                        closeButton:
                          null != (u = null == v ? void 0 : v.closeButton)
                            ? u
                            : l,
                        interacting: I,
                        position: e,
                        style: null == v ? void 0 : v.style,
                        unstyled: null == v ? void 0 : v.unstyled,
                        classNames: null == v ? void 0 : v.classNames,
                        cancelButtonStyle:
                          null == v ? void 0 : v.cancelButtonStyle,
                        actionButtonStyle:
                          null == v ? void 0 : v.actionButtonStyle,
                        removeToast: z,
                        toasts: R.filter((t) => t.position == i.position),
                        heights: k.filter((t) => t.position == i.position),
                        setHeights: L,
                        expandByDefault: a,
                        gap: x,
                        loadingIcon: M,
                        expanded: O,
                        pauseWhenPageIsHidden: T,
                        swipeDirections: t.swipeDirections,
                      });
                    })
                  )
                : null;
            })
          )
        );
      });
    },
    59367: function (t, e, r) {
      "use strict";
      r.d(e, {
        AG: function () {
          return v;
        },
        G0: function () {
          return A;
        },
        IM: function () {
          return E;
        },
        IX: function () {
          return p;
        },
        O7: function () {
          return m;
        },
        Rx: function () {
          return w;
        },
        Ue: function () {
          return c;
        },
        Yj: function () {
          return d;
        },
        Z_: function () {
          return x;
        },
        _4: function () {
          return T;
        },
        bc: function () {
          return M;
        },
        dt: function () {
          return S;
        },
        eE: function () {
          return g;
        },
        i0: function () {
          return y;
        },
        jt: function () {
          return b;
        },
        oQ: function () {
          return R;
        },
      });
      class n extends TypeError {
        constructor(t, e) {
          let r;
          let { message: n, explanation: i, ...o } = t,
            { path: s } = t,
            a = 0 === s.length ? n : `At path: ${s.join(".")} -- ${n}`;
          super(i ?? a),
            null != i && (this.cause = a),
            Object.assign(this, o),
            (this.name = this.constructor.name),
            (this.failures = () => r ?? (r = [t, ...e()]));
        }
      }
      function i(t) {
        return "object" == typeof t && null != t;
      }
      function o(t) {
        return i(t) && !Array.isArray(t);
      }
      function s(t) {
        return "symbol" == typeof t
          ? t.toString()
          : "string" == typeof t
          ? JSON.stringify(t)
          : `${t}`;
      }
      function* a(t, e, r, n) {
        var o;
        for (let a of ((i((o = t)) &&
          "function" == typeof o[Symbol.iterator]) ||
          (t = [t]),
        t)) {
          let t = (function (t, e, r, n) {
            if (!0 === t) return;
            !1 === t ? (t = {}) : "string" == typeof t && (t = { message: t });
            let { path: i, branch: o } = e,
              { type: a } = r,
              {
                refinement: l,
                message: u = `Expected a value of type \`${a}\`${
                  l ? ` with refinement \`${l}\`` : ""
                }, but received: \`${s(n)}\``,
              } = t;
            return {
              value: n,
              type: a,
              refinement: l,
              key: i[i.length - 1],
              path: i,
              branch: o,
              ...t,
              message: u,
            };
          })(a, e, r, n);
          t && (yield t);
        }
      }
      function* l(t, e, r = {}) {
        let { path: n = [], branch: o = [t], coerce: s = !1, mask: a = !1 } = r,
          u = { path: n, branch: o, mask: a };
        s && (t = e.coercer(t, u));
        let c = "valid";
        for (let n of e.validator(t, u))
          (n.explanation = r.message), (c = "not_valid"), yield [n, void 0];
        for (let [h, f, d] of e.entries(t, u))
          for (let e of l(f, d, {
            path: void 0 === h ? n : [...n, h],
            branch: void 0 === h ? o : [...o, f],
            coerce: s,
            mask: a,
            message: r.message,
          }))
            e[0]
              ? ((c = null != e[0].refinement ? "not_refined" : "not_valid"),
                yield [e[0], void 0])
              : s &&
                ((f = e[1]),
                void 0 === h
                  ? (t = f)
                  : t instanceof Map
                  ? t.set(h, f)
                  : t instanceof Set
                  ? t.add(f)
                  : i(t) && (void 0 !== f || h in t) && (t[h] = f));
        if ("not_valid" !== c)
          for (let n of e.refiner(t, u))
            (n.explanation = r.message), (c = "not_refined"), yield [n, void 0];
        "valid" === c && (yield [void 0, t]);
      }
      class u {
        constructor(t) {
          let {
            type: e,
            schema: r,
            validator: n,
            refiner: i,
            coercer: o = (t) => t,
            entries: s = function* () {},
          } = t;
          (this.type = e),
            (this.schema = r),
            (this.entries = s),
            (this.coercer = o),
            n
              ? (this.validator = (t, e) => a(n(t, e), e, this, t))
              : (this.validator = () => []),
            i
              ? (this.refiner = (t, e) => a(i(t, e), e, this, t))
              : (this.refiner = () => []);
        }
        assert(t, e) {
          return (function (t, e, r) {
            let n = h(t, e, { message: r });
            if (n[0]) throw n[0];
          })(t, this, e);
        }
        create(t, e) {
          return c(t, this, e);
        }
        is(t) {
          return !h(t, this)[0];
        }
        mask(t, e) {
          return (function (t, e, r) {
            let n = h(t, e, { coerce: !0, mask: !0, message: r });
            if (!n[0]) return n[1];
            throw n[0];
          })(t, this, e);
        }
        validate(t, e = {}) {
          return h(t, this, e);
        }
      }
      function c(t, e, r) {
        let n = h(t, e, { coerce: !0, message: r });
        if (!n[0]) return n[1];
        throw n[0];
      }
      function h(t, e, r = {}) {
        let i = l(t, e, r),
          o = (function (t) {
            let { done: e, value: r } = t.next();
            return e ? void 0 : r;
          })(i);
        return o[0]
          ? [
              new n(o[0], function* () {
                for (let t of i) t[0] && (yield t[0]);
              }),
              void 0,
            ]
          : [void 0, o[1]];
      }
      function f(t, e) {
        return new u({ type: t, schema: null, validator: e });
      }
      function d() {
        return f("any", () => !0);
      }
      function p(t) {
        return new u({
          type: "array",
          schema: t,
          *entries(e) {
            if (t && Array.isArray(e))
              for (let [r, n] of e.entries()) yield [r, n, t];
          },
          coercer: (t) => (Array.isArray(t) ? t.slice() : t),
          validator: (t) =>
            Array.isArray(t) ||
            `Expected an array value, but received: ${s(t)}`,
        });
      }
      function m() {
        return f("boolean", (t) => "boolean" == typeof t);
      }
      function g(t) {
        return f(
          "instance",
          (e) =>
            e instanceof t ||
            `Expected a \`${t.name}\` instance, but received: ${s(e)}`
        );
      }
      function y(t) {
        let e = s(t),
          r = typeof t;
        return new u({
          type: "literal",
          schema:
            "string" === r || "number" === r || "boolean" === r ? t : null,
          validator: (r) =>
            r === t || `Expected the literal \`${e}\`, but received: ${s(r)}`,
        });
      }
      function v(t) {
        return new u({
          ...t,
          validator: (e, r) => null === e || t.validator(e, r),
          refiner: (e, r) => null === e || t.refiner(e, r),
        });
      }
      function w() {
        return f(
          "number",
          (t) =>
            ("number" == typeof t && !isNaN(t)) ||
            `Expected a number, but received: ${s(t)}`
        );
      }
      function b(t) {
        return new u({
          ...t,
          validator: (e, r) => void 0 === e || t.validator(e, r),
          refiner: (e, r) => void 0 === e || t.refiner(e, r),
        });
      }
      function E(t, e) {
        return new u({
          type: "record",
          schema: null,
          *entries(r) {
            if (i(r))
              for (let n in r) {
                let i = r[n];
                yield [n, n, t], yield [n, i, e];
              }
          },
          validator: (t) => o(t) || `Expected an object, but received: ${s(t)}`,
          coercer: (t) => (o(t) ? { ...t } : t),
        });
      }
      function x() {
        return f(
          "string",
          (t) =>
            "string" == typeof t || `Expected a string, but received: ${s(t)}`
        );
      }
      function M(t) {
        let e = f("never", () => !1);
        return new u({
          type: "tuple",
          schema: null,
          *entries(r) {
            if (Array.isArray(r)) {
              let n = Math.max(t.length, r.length);
              for (let i = 0; i < n; i++) yield [i, r[i], t[i] || e];
            }
          },
          validator: (t) =>
            Array.isArray(t) || `Expected an array, but received: ${s(t)}`,
          coercer: (t) => (Array.isArray(t) ? t.slice() : t),
        });
      }
      function S(t) {
        let e = Object.keys(t);
        return new u({
          type: "type",
          schema: t,
          *entries(r) {
            if (i(r)) for (let n of e) yield [n, r[n], t[n]];
          },
          validator: (t) => o(t) || `Expected an object, but received: ${s(t)}`,
          coercer: (t) => (o(t) ? { ...t } : t),
        });
      }
      function A(t) {
        let e = t.map((t) => t.type).join(" | ");
        return new u({
          type: "union",
          schema: null,
          coercer(e, r) {
            for (let n of t) {
              let [t, i] = n.validate(e, { coerce: !0, mask: r.mask });
              if (!t) return i;
            }
            return e;
          },
          validator(r, n) {
            let i = [];
            for (let e of t) {
              let [...t] = l(r, e, n),
                [o] = t;
              if (!o[0]) return [];
              for (let [e] of t) e && i.push(e);
            }
            return [
              `Expected the value to satisfy a union of \`${e}\`, but received: ${s(
                r
              )}`,
              ...i,
            ];
          },
        });
      }
      function T() {
        return f("unknown", () => !0);
      }
      function R(t, e, r) {
        return new u({
          ...t,
          coercer: (n, i) =>
            h(n, e)[0] ? t.coercer(n, i) : t.coercer(r(n, i), i),
        });
      }
    },
    69829: function (t, e, r) {
      "use strict";
      r.d(e, {
        F: function () {
          return c;
        },
      });
      var n = r(2265),
        i = r(35195);
      let o = (t) => {
          let e;
          let r = new Set(),
            n = (t, n) => {
              let i = "function" == typeof t ? t(e) : t;
              if (!Object.is(i, e)) {
                let t = e;
                (e = (null != n ? n : "object" != typeof i || null === i)
                  ? i
                  : Object.assign({}, e, i)),
                  r.forEach((r) => r(e, t));
              }
            },
            i = () => e,
            o = {
              setState: n,
              getState: i,
              getInitialState: () => s,
              subscribe: (t) => (r.add(t), () => r.delete(t)),
            },
            s = (e = t(n, i, o));
          return o;
        },
        s = (t) => (t ? o(t) : o),
        { useSyncExternalStoreWithSelector: a } = i,
        l = (t) => t,
        u = (t, e) => {
          let r = s(t),
            i = (t, i = e) =>
              (function (t, e = l, r) {
                let i = a(t.subscribe, t.getState, t.getInitialState, e, r);
                return n.useDebugValue(i), i;
              })(r, t, i);
          return Object.assign(i, r), i;
        },
        c = (t, e) => (t ? u(t, e) : u);
    },
    51103: function (t, e, r) {
      "use strict";
      r.d(e, {
        X: function () {
          return a;
        },
      });
      let n = (t) => Symbol.iterator in t,
        i = (t) => "entries" in t,
        o = (t, e) => {
          let r = t instanceof Map ? t : new Map(t.entries()),
            n = e instanceof Map ? e : new Map(e.entries());
          if (r.size !== n.size) return !1;
          for (let [t, e] of r) if (!Object.is(e, n.get(t))) return !1;
          return !0;
        },
        s = (t, e) => {
          let r = t[Symbol.iterator](),
            n = e[Symbol.iterator](),
            i = r.next(),
            o = n.next();
          for (; !i.done && !o.done; ) {
            if (!Object.is(i.value, o.value)) return !1;
            (i = r.next()), (o = n.next());
          }
          return !!i.done && !!o.done;
        };
      function a(t, e) {
        return (
          !!Object.is(t, e) ||
          ("object" == typeof t &&
            null !== t &&
            "object" == typeof e &&
            null !== e &&
            (n(t) && n(e)
              ? i(t) && i(e)
                ? o(t, e)
                : s(t, e)
              : o(
                  { entries: () => Object.entries(t) },
                  { entries: () => Object.entries(e) }
                )))
        );
      }
    },
  },
]);
