function _i($) {
  return $ && $.__esModule && Object.prototype.hasOwnProperty.call($, "default") ? $.default : $;
}
var ci = { exports: {} };
(function($, y) {
  (function(g, k) {
    $.exports = k();
  })(window, function() {
    return function(g) {
      var k = {};
      function z(v) {
        if (k[v])
          return k[v].exports;
        var b = k[v] = { i: v, l: false, exports: {} };
        return g[v].call(b.exports, b, b.exports, z), b.l = true, b.exports;
      }
      return z.m = g, z.c = k, z.d = function(v, b, a) {
        z.o(v, b) || Object.defineProperty(v, b, { enumerable: true, get: a });
      }, z.r = function(v) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(v, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(v, "__esModule", { value: true });
      }, z.t = function(v, b) {
        if (1 & b && (v = z(v)), 8 & b || 4 & b && typeof v == "object" && v && v.__esModule)
          return v;
        var a = /* @__PURE__ */ Object.create(null);
        if (z.r(a), Object.defineProperty(a, "default", { enumerable: true, value: v }), 2 & b && typeof v != "string")
          for (var h in v)
            z.d(a, h, function(T) {
              return v[T];
            }.bind(null, h));
        return a;
      }, z.n = function(v) {
        var b = v && v.__esModule ? function() {
          return v.default;
        } : function() {
          return v;
        };
        return z.d(b, "a", b), b;
      }, z.o = function(v, b) {
        return Object.prototype.hasOwnProperty.call(v, b);
      }, z.p = "", z(z.s = 1);
    }([function(g, k, z) {
      var v, b;
      v = [z(2)], (b = function(a) {
        function h(t) {
          if (h.is(t, "function"))
            return T ? t() : a.on("raphael.DOMload", t);
          if (h.is(t, gt))
            return h._engine.create[W](h, t.splice(0, 3 + h.is(t[0], ut))).add(t);
          var e = Array.prototype.slice.call(arguments, 0);
          if (h.is(e[e.length - 1], "function")) {
            var i = e.pop();
            return T ? i.call(h._engine.create[W](h, e)) : a.on("raphael.DOMload", function() {
              i.call(h._engine.create[W](h, e));
            });
          }
          return h._engine.create[W](h, arguments);
        }
        h.version = "2.3.0", h.eve = a;
        var T, D, et = /[, ]+/, P = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 }, dt = /\{(\d+)\}/g, K = "hasOwnProperty", Q = { doc: document, win: window }, wt = { was: Object.prototype[K].call(Q.win, "Raphael"), is: Q.win.Raphael }, Et = function() {
          this.ca = this.customAttributes = {};
        }, W = "apply", Y = "concat", ht = "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch, tt = "", q = " ", L = String, Z = "split", X = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[Z](q), xt = { mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend" }, st = L.prototype.toLowerCase, U = Math, nt = U.max, it = U.min, yt = U.abs, Lt = U.pow, At = U.PI, ut = "number", gt = "array", Tt = Object.prototype.toString, c = (h._ISURL = /^url\(['"]?(.+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i), o = { NaN: 1, Infinity: 1, "-Infinity": 1 }, s = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, u = U.round, x = parseFloat, w = parseInt, _ = L.prototype.toUpperCase, M = h._availableAttrs = { "arrow-end": "none", "arrow-start": "none", blur: 0, "clip-rect": "0 0 1e9 1e9", cursor: "default", cx: 0, cy: 0, fill: "#fff", "fill-opacity": 1, font: '10px "Arial"', "font-family": '"Arial"', "font-size": "10", "font-style": "normal", "font-weight": 400, gradient: 0, height: 0, href: "http://raphaeljs.com/", "letter-spacing": 0, opacity: 1, path: "M0,0", r: 0, rx: 0, ry: 0, src: "", stroke: "#000", "stroke-dasharray": "", "stroke-linecap": "butt", "stroke-linejoin": "butt", "stroke-miterlimit": 0, "stroke-opacity": 1, "stroke-width": 1, target: "_blank", "text-anchor": "middle", title: "Raphael", transform: "", width: 0, x: 0, y: 0, class: "" }, B = h._availableAnimAttrs = { blur: ut, "clip-rect": "csv", cx: ut, cy: ut, fill: "colour", "fill-opacity": ut, "font-size": ut, height: ut, opacity: ut, path: "path", r: ut, rx: ut, ry: ut, stroke: "colour", "stroke-opacity": ut, "stroke-width": ut, transform: "transform", width: ut, x: ut, y: ut }, V = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/, H = { hs: 1, rg: 1 }, rt = /,?([achlmqrstvxz]),?/gi, ft = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, mt = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, pt = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi, kt = (h._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}), Bt = function(t, e) {
          return x(t) - x(e);
        }, bt = function(t) {
          return t;
        }, at = h._rectPath = function(t, e, i, r, n) {
          return n ? [["M", t + n, e], ["l", i - 2 * n, 0], ["a", n, n, 0, 0, 1, n, n], ["l", 0, r - 2 * n], ["a", n, n, 0, 0, 1, -n, n], ["l", 2 * n - i, 0], ["a", n, n, 0, 0, 1, -n, -n], ["l", 0, 2 * n - r], ["a", n, n, 0, 0, 1, n, -n], ["z"]] : [["M", t, e], ["l", i, 0], ["l", 0, r], ["l", -i, 0], ["z"]];
        }, St = function(t, e, i, r) {
          return r == null && (r = i), [["M", t, e], ["m", 0, -r], ["a", i, r, 0, 1, 1, 0, 2 * r], ["a", i, r, 0, 1, 1, 0, -2 * r], ["z"]];
        }, Mt = h._getPath = { path: function(t) {
          return t.attr("path");
        }, circle: function(t) {
          var e = t.attrs;
          return St(e.cx, e.cy, e.r);
        }, ellipse: function(t) {
          var e = t.attrs;
          return St(e.cx, e.cy, e.rx, e.ry);
        }, rect: function(t) {
          var e = t.attrs;
          return at(e.x, e.y, e.width, e.height, e.r);
        }, image: function(t) {
          var e = t.attrs;
          return at(e.x, e.y, e.width, e.height);
        }, text: function(t) {
          var e = t._getBBox();
          return at(e.x, e.y, e.width, e.height);
        }, set: function(t) {
          var e = t._getBBox();
          return at(e.x, e.y, e.width, e.height);
        } }, Pt = h.mapPath = function(t, e) {
          if (!e)
            return t;
          var i, r, n, l, p, f, d;
          for (n = 0, p = (t = _e(t)).length; n < p; n++)
            for (l = 1, f = (d = t[n]).length; l < f; l += 2)
              i = e.x(d[l], d[l + 1]), r = e.y(d[l], d[l + 1]), d[l] = i, d[l + 1] = r;
          return t;
        };
        if (h._g = Q, h.type = Q.win.SVGAngle || Q.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", h.type == "VML") {
          var Ct, It = Q.doc.createElement("div");
          if (It.innerHTML = '<v:shape adj="1"/>', (Ct = It.firstChild).style.behavior = "url(#default#VML)", !Ct || typeof Ct.adj != "object")
            return h.type = tt;
          It = null;
        }
        function Xt(t) {
          if (typeof t == "function" || Object(t) !== t)
            return t;
          var e = new t.constructor();
          for (var i in t)
            t[K](i) && (e[i] = Xt(t[i]));
          return e;
        }
        h.svg = !(h.vml = h.type == "VML"), h._Paper = Et, h.fn = D = Et.prototype = h.prototype, h._id = 0, h.is = function(t, e) {
          return (e = st.call(e)) == "finite" ? !o[K](+t) : e == "array" ? t instanceof Array : e == "null" && t === null || e == typeof t && t !== null || e == "object" && t === Object(t) || e == "array" && Array.isArray && Array.isArray(t) || Tt.call(t).slice(8, -1).toLowerCase() == e;
        }, h.angle = function(t, e, i, r, n, l) {
          if (n == null) {
            var p = t - i, f = e - r;
            return p || f ? (180 + 180 * U.atan2(-f, -p) / At + 360) % 360 : 0;
          }
          return h.angle(t, e, n, l) - h.angle(i, r, n, l);
        }, h.rad = function(t) {
          return t % 360 * At / 180;
        }, h.deg = function(t) {
          return Math.round(180 * t / At % 360 * 1e3) / 1e3;
        }, h.snapTo = function(t, e, i) {
          if (i = h.is(i, "finite") ? i : 10, h.is(t, gt)) {
            for (var r = t.length; r--; )
              if (yt(t[r] - e) <= i)
                return t[r];
          } else {
            var n = e % (t = +t);
            if (n < i)
              return e - n;
            if (n > t - i)
              return e - n + t;
          }
          return e;
        };
        var $t, ye;
        h.createUUID = ($t = /[xy]/g, ye = function(t) {
          var e = 16 * U.random() | 0;
          return (t == "x" ? e : 3 & e | 8).toString(16);
        }, function() {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace($t, ye).toUpperCase();
        }), h.setWindow = function(t) {
          a("raphael.setWindow", h, Q.win, t), Q.win = t, Q.doc = Q.win.document, h._engine.initWin && h._engine.initWin(Q.win);
        };
        var Ut = function(t) {
          if (h.vml) {
            var e, i = /^\s+|\s+$/g;
            try {
              var r = new ActiveXObject("htmlfile");
              r.write("<body>"), r.close(), e = r.body;
            } catch {
              e = createPopup().document.body;
            }
            var n = e.createTextRange();
            Ut = Ft(function(p) {
              try {
                e.style.color = L(p).replace(i, tt);
                var f = n.queryCommandValue("ForeColor");
                return "#" + ("000000" + (f = (255 & f) << 16 | 65280 & f | (16711680 & f) >>> 16).toString(16)).slice(-6);
              } catch {
                return "none";
              }
            });
          } else {
            var l = Q.doc.createElement("i");
            l.title = "Raphaël Colour Picker", l.style.display = "none", Q.doc.body.appendChild(l), Ut = Ft(function(p) {
              return l.style.color = p, Q.doc.defaultView.getComputedStyle(l, tt).getPropertyValue("color");
            });
          }
          return Ut(t);
        }, ne = function() {
          return "hsb(" + [this.h, this.s, this.b] + ")";
        }, se = function() {
          return "hsl(" + [this.h, this.s, this.l] + ")";
        }, me = function() {
          return this.hex;
        }, oe = function(t, e, i) {
          if (e == null && h.is(t, "object") && "r" in t && "g" in t && "b" in t && (i = t.b, e = t.g, t = t.r), e == null && h.is(t, "string")) {
            var r = h.getRGB(t);
            t = r.r, e = r.g, i = r.b;
          }
          return (t > 1 || e > 1 || i > 1) && (t /= 255, e /= 255, i /= 255), [t, e, i];
        }, Be = function(t, e, i, r) {
          var n = { r: t *= 255, g: e *= 255, b: i *= 255, hex: h.rgb(t, e, i), toString: me };
          return h.is(r, "finite") && (n.opacity = r), n;
        };
        function Ft(t, e, i) {
          return function r() {
            var n = Array.prototype.slice.call(arguments, 0), l = n.join("␀"), p = r.cache = r.cache || {}, f = r.count = r.count || [];
            return p[K](l) ? (function(d, m) {
              for (var A = 0, N = d.length; A < N; A++)
                if (d[A] === m)
                  return d.push(d.splice(A, 1)[0]);
            }(f, l), i ? i(p[l]) : p[l]) : (f.length >= 1e3 && delete p[f.shift()], f.push(l), p[l] = t[W](e, n), i ? i(p[l]) : p[l]);
          };
        }
        h.color = function(t) {
          var e;
          return h.is(t, "object") && "h" in t && "s" in t && "b" in t ? (e = h.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : h.is(t, "object") && "h" in t && "s" in t && "l" in t ? (e = h.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : (h.is(t, "string") && (t = h.getRGB(t)), h.is(t, "object") && "r" in t && "g" in t && "b" in t ? (e = h.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = h.rgb2hsb(t), t.v = e.b) : (t = { hex: "none" }).r = t.g = t.b = t.h = t.s = t.v = t.l = -1), t.toString = me, t;
        }, h.hsb2rgb = function(t, e, i, r) {
          var n, l, p, f, d;
          return this.is(t, "object") && "h" in t && "s" in t && "b" in t && (i = t.b, e = t.s, r = t.o, t = t.h), f = (d = i * e) * (1 - yt((t = (t *= 360) % 360 / 60) % 2 - 1)), n = l = p = i - d, Be(n += [d, f, 0, 0, f, d][t = ~~t], l += [f, d, d, f, 0, 0][t], p += [0, 0, f, d, d, f][t], r);
        }, h.hsl2rgb = function(t, e, i, r) {
          var n, l, p, f, d;
          return this.is(t, "object") && "h" in t && "s" in t && "l" in t && (i = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || i > 1) && (t /= 360, e /= 100, i /= 100), f = (d = 2 * e * (i < 0.5 ? i : 1 - i)) * (1 - yt((t = (t *= 360) % 360 / 60) % 2 - 1)), n = l = p = i - d / 2, Be(n += [d, f, 0, 0, f, d][t = ~~t], l += [f, d, d, f, 0, 0][t], p += [0, 0, f, d, d, f][t], r);
        }, h.rgb2hsb = function(t, e, i) {
          var r, n;
          return t = (i = oe(t, e, i))[0], e = i[1], i = i[2], { h: (((n = (r = nt(t, e, i)) - it(t, e, i)) == 0 ? null : r == t ? (e - i) / n : r == e ? (i - t) / n + 2 : (t - e) / n + 4) + 360) % 6 * 60 / 360, s: n == 0 ? 0 : n / r, b: r, toString: ne };
        }, h.rgb2hsl = function(t, e, i) {
          var r, n, l, p;
          return t = (i = oe(t, e, i))[0], e = i[1], i = i[2], r = ((n = nt(t, e, i)) + (l = it(t, e, i))) / 2, { h: (((p = n - l) == 0 ? null : n == t ? (e - i) / p : n == e ? (i - t) / p + 2 : (t - e) / p + 4) + 360) % 6 * 60 / 360, s: p == 0 ? 0 : r < 0.5 ? p / (2 * r) : p / (2 - 2 * r), l: r, toString: se };
        }, h._path2string = function() {
          return this.join(",").replace(rt, "$1");
        }, h._preload = function(t, e) {
          var i = Q.doc.createElement("img");
          i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function() {
            e.call(this), this.onload = null, Q.doc.body.removeChild(this);
          }, i.onerror = function() {
            Q.doc.body.removeChild(this);
          }, Q.doc.body.appendChild(i), i.src = t;
        };
        function Ht() {
          return this.hex;
        }
        function ae(t, e) {
          for (var i = [], r = 0, n = t.length; n - 2 * !e > r; r += 2) {
            var l = [{ x: +t[r - 2], y: +t[r - 1] }, { x: +t[r], y: +t[r + 1] }, { x: +t[r + 2], y: +t[r + 3] }, { x: +t[r + 4], y: +t[r + 5] }];
            e ? r ? n - 4 == r ? l[3] = { x: +t[0], y: +t[1] } : n - 2 == r && (l[2] = { x: +t[0], y: +t[1] }, l[3] = { x: +t[2], y: +t[3] }) : l[0] = { x: +t[n - 2], y: +t[n - 1] } : n - 4 == r ? l[3] = l[2] : r || (l[0] = { x: +t[r], y: +t[r + 1] }), i.push(["C", (-l[0].x + 6 * l[1].x + l[2].x) / 6, (-l[0].y + 6 * l[1].y + l[2].y) / 6, (l[1].x + 6 * l[2].x - l[3].x) / 6, (l[1].y + 6 * l[2].y - l[3].y) / 6, l[2].x, l[2].y]);
          }
          return i;
        }
        h.getRGB = Ft(function(t) {
          if (!t || (t = L(t)).indexOf("-") + 1)
            return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: Ht };
          if (t == "none")
            return { r: -1, g: -1, b: -1, hex: "none", toString: Ht };
          !H[K](t.toLowerCase().substring(0, 2)) && t.charAt() != "#" && (t = Ut(t));
          var e, i, r, n, l, p, f = t.match(c);
          return f ? (f[2] && (r = w(f[2].substring(5), 16), i = w(f[2].substring(3, 5), 16), e = w(f[2].substring(1, 3), 16)), f[3] && (r = w((l = f[3].charAt(3)) + l, 16), i = w((l = f[3].charAt(2)) + l, 16), e = w((l = f[3].charAt(1)) + l, 16)), f[4] && (p = f[4][Z](V), e = x(p[0]), p[0].slice(-1) == "%" && (e *= 2.55), i = x(p[1]), p[1].slice(-1) == "%" && (i *= 2.55), r = x(p[2]), p[2].slice(-1) == "%" && (r *= 2.55), f[1].toLowerCase().slice(0, 4) == "rgba" && (n = x(p[3])), p[3] && p[3].slice(-1) == "%" && (n /= 100)), f[5] ? (p = f[5][Z](V), e = x(p[0]), p[0].slice(-1) == "%" && (e *= 2.55), i = x(p[1]), p[1].slice(-1) == "%" && (i *= 2.55), r = x(p[2]), p[2].slice(-1) == "%" && (r *= 2.55), (p[0].slice(-3) == "deg" || p[0].slice(-1) == "°") && (e /= 360), f[1].toLowerCase().slice(0, 4) == "hsba" && (n = x(p[3])), p[3] && p[3].slice(-1) == "%" && (n /= 100), h.hsb2rgb(e, i, r, n)) : f[6] ? (p = f[6][Z](V), e = x(p[0]), p[0].slice(-1) == "%" && (e *= 2.55), i = x(p[1]), p[1].slice(-1) == "%" && (i *= 2.55), r = x(p[2]), p[2].slice(-1) == "%" && (r *= 2.55), (p[0].slice(-3) == "deg" || p[0].slice(-1) == "°") && (e /= 360), f[1].toLowerCase().slice(0, 4) == "hsla" && (n = x(p[3])), p[3] && p[3].slice(-1) == "%" && (n /= 100), h.hsl2rgb(e, i, r, n)) : ((f = { r: e, g: i, b: r, toString: Ht }).hex = "#" + (16777216 | r | i << 8 | e << 16).toString(16).slice(1), h.is(n, "finite") && (f.opacity = n), f)) : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: Ht };
        }, h), h.hsb = Ft(function(t, e, i) {
          return h.hsb2rgb(t, e, i).hex;
        }), h.hsl = Ft(function(t, e, i) {
          return h.hsl2rgb(t, e, i).hex;
        }), h.rgb = Ft(function(t, e, i) {
          function r(n) {
            return n + 0.5 | 0;
          }
          return "#" + (16777216 | r(i) | r(e) << 8 | r(t) << 16).toString(16).slice(1);
        }), h.getColor = function(t) {
          var e = this.getColor.start = this.getColor.start || { h: 0, s: 1, b: t || 0.75 }, i = this.hsb2rgb(e.h, e.s, e.b);
          return e.h += 0.075, e.h > 1 && (e.h = 0, e.s -= 0.2, e.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: e.b })), i.hex;
        }, h.getColor.reset = function() {
          delete this.start;
        }, h.parsePathString = function(t) {
          if (!t)
            return null;
          var e = Yt(t);
          if (e.arr)
            return Nt(e.arr);
          var i = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 }, r = [];
          return h.is(t, gt) && h.is(t[0], gt) && (r = Nt(t)), r.length || L(t).replace(ft, function(n, l, p) {
            var f = [], d = l.toLowerCase();
            if (p.replace(pt, function(m, A) {
              A && f.push(+A);
            }), d == "m" && f.length > 2 && (r.push([l][Y](f.splice(0, 2))), d = "l", l = l == "m" ? "l" : "L"), d == "r")
              r.push([l][Y](f));
            else
              for (; f.length >= i[d] && (r.push([l][Y](f.splice(0, i[d]))), i[d]); )
                ;
          }), r.toString = h._path2string, e.arr = Nt(r), r;
        }, h.parseTransformString = Ft(function(t) {
          if (!t)
            return null;
          var e = [];
          return h.is(t, gt) && h.is(t[0], gt) && (e = Nt(t)), e.length || L(t).replace(mt, function(i, r, n) {
            var l = [];
            st.call(r), n.replace(pt, function(p, f) {
              f && l.push(+f);
            }), e.push([r][Y](l));
          }), e.toString = h._path2string, e;
        }, this, function(t) {
          if (!t)
            return t;
          for (var e = [], i = 0; i < t.length; i++) {
            for (var r = [], n = 0; n < t[i].length; n++)
              r.push(t[i][n]);
            e.push(r);
          }
          return e;
        });
        var Yt = function(t) {
          var e = Yt.ps = Yt.ps || {};
          return e[t] ? e[t].sleep = 100 : e[t] = { sleep: 100 }, setTimeout(function() {
            for (var i in e)
              e[K](i) && i != t && (e[i].sleep--, !e[i].sleep && delete e[i]);
          }), e[t];
        };
        function he(t, e, i, r, n) {
          return t * (t * (-3 * e + 9 * i - 9 * r + 3 * n) + 6 * e - 12 * i + 6 * r) - 3 * e + 3 * i;
        }
        function Dt(t, e, i, r, n, l, p, f, d) {
          d == null && (d = 1);
          for (var m = (d = d > 1 ? 1 : d < 0 ? 0 : d) / 2, A = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816], N = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472], S = 0, C = 0; C < 12; C++) {
            var F = m * A[C] + m, R = he(F, t, i, n, p), O = he(F, e, r, l, f), E = R * R + O * O;
            S += N[C] * U.sqrt(E);
          }
          return m * S;
        }
        function ve(t, e, i, r, n, l, p, f) {
          if (!(nt(t, i) < it(n, p) || it(t, i) > nt(n, p) || nt(e, r) < it(l, f) || it(e, r) > nt(l, f))) {
            var d = (t - i) * (l - f) - (e - r) * (n - p);
            if (d) {
              var m = ((t * r - e * i) * (n - p) - (t - i) * (n * f - l * p)) / d, A = ((t * r - e * i) * (l - f) - (e - r) * (n * f - l * p)) / d, N = +m.toFixed(2), S = +A.toFixed(2);
              if (!(N < +it(t, i).toFixed(2) || N > +nt(t, i).toFixed(2) || N < +it(n, p).toFixed(2) || N > +nt(n, p).toFixed(2) || S < +it(e, r).toFixed(2) || S > +nt(e, r).toFixed(2) || S < +it(l, f).toFixed(2) || S > +nt(l, f).toFixed(2)))
                return { x: m, y: A };
            }
          }
        }
        function le(t, e, i) {
          var r = h.bezierBBox(t), n = h.bezierBBox(e);
          if (!h.isBBoxIntersect(r, n))
            return i ? 0 : [];
          for (var l = Dt.apply(0, t), p = Dt.apply(0, e), f = nt(~~(l / 5), 1), d = nt(~~(p / 5), 1), m = [], A = [], N = {}, S = i ? 0 : [], C = 0; C < f + 1; C++) {
            var F = h.findDotsAtSegment.apply(h, t.concat(C / f));
            m.push({ x: F.x, y: F.y, t: C / f });
          }
          for (C = 0; C < d + 1; C++)
            F = h.findDotsAtSegment.apply(h, e.concat(C / d)), A.push({ x: F.x, y: F.y, t: C / d });
          for (C = 0; C < f; C++)
            for (var R = 0; R < d; R++) {
              var O = m[C], E = m[C + 1], J = A[R], I = A[R + 1], G = yt(E.x - O.x) < 1e-3 ? "y" : "x", j = yt(I.x - J.x) < 1e-3 ? "y" : "x", lt = ve(O.x, O.y, E.x, E.y, J.x, J.y, I.x, I.y);
              if (lt) {
                if (N[lt.x.toFixed(4)] == lt.y.toFixed(4))
                  continue;
                N[lt.x.toFixed(4)] = lt.y.toFixed(4);
                var ot = O.t + yt((lt[G] - O[G]) / (E[G] - O[G])) * (E.t - O.t), ct = J.t + yt((lt[j] - J[j]) / (I[j] - J[j])) * (I.t - J.t);
                ot >= 0 && ot <= 1.001 && ct >= 0 && ct <= 1.001 && (i ? S++ : S.push({ x: lt.x, y: lt.y, t1: it(ot, 1), t2: it(ct, 1) }));
              }
            }
          return S;
        }
        function be(t, e, i) {
          t = h._path2curve(t), e = h._path2curve(e);
          for (var r, n, l, p, f, d, m, A, N, S, C = i ? 0 : [], F = 0, R = t.length; F < R; F++) {
            var O = t[F];
            if (O[0] == "M")
              r = f = O[1], n = d = O[2];
            else {
              O[0] == "C" ? (N = [r, n].concat(O.slice(1)), r = N[6], n = N[7]) : (N = [r, n, r, n, f, d, f, d], r = f, n = d);
              for (var E = 0, J = e.length; E < J; E++) {
                var I = e[E];
                if (I[0] == "M")
                  l = m = I[1], p = A = I[2];
                else {
                  I[0] == "C" ? (S = [l, p].concat(I.slice(1)), l = S[6], p = S[7]) : (S = [l, p, l, p, m, A, m, A], l = m, p = A);
                  var G = le(N, S, i);
                  if (i)
                    C += G;
                  else {
                    for (var j = 0, lt = G.length; j < lt; j++)
                      G[j].segment1 = F, G[j].segment2 = E, G[j].bez1 = N, G[j].bez2 = S;
                    C = C.concat(G);
                  }
                }
              }
            }
          }
          return C;
        }
        h.findDotsAtSegment = function(t, e, i, r, n, l, p, f, d) {
          var m = 1 - d, A = Lt(m, 3), N = Lt(m, 2), S = d * d, C = S * d, F = A * t + 3 * N * d * i + 3 * m * d * d * n + C * p, R = A * e + 3 * N * d * r + 3 * m * d * d * l + C * f, O = t + 2 * d * (i - t) + S * (n - 2 * i + t), E = e + 2 * d * (r - e) + S * (l - 2 * r + e), J = i + 2 * d * (n - i) + S * (p - 2 * n + i), I = r + 2 * d * (l - r) + S * (f - 2 * l + r), G = m * t + d * i, j = m * e + d * r, lt = m * n + d * p, ot = m * l + d * f, ct = 90 - 180 * U.atan2(O - J, E - I) / At;
          return (O > J || E < I) && (ct += 180), { x: F, y: R, m: { x: O, y: E }, n: { x: J, y: I }, start: { x: G, y: j }, end: { x: lt, y: ot }, alpha: ct };
        }, h.bezierBBox = function(t, e, i, r, n, l, p, f) {
          h.is(t, "array") || (t = [t, e, i, r, n, l, p, f]);
          var d = Ae.apply(null, t);
          return { x: d.min.x, y: d.min.y, x2: d.max.x, y2: d.max.y, width: d.max.x - d.min.x, height: d.max.y - d.min.y };
        }, h.isPointInsideBBox = function(t, e, i) {
          return e >= t.x && e <= t.x2 && i >= t.y && i <= t.y2;
        }, h.isBBoxIntersect = function(t, e) {
          var i = h.isPointInsideBBox;
          return i(e, t.x, t.y) || i(e, t.x2, t.y) || i(e, t.x, t.y2) || i(e, t.x2, t.y2) || i(t, e.x, e.y) || i(t, e.x2, e.y) || i(t, e.x, e.y2) || i(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y);
        }, h.pathIntersection = function(t, e) {
          return be(t, e);
        }, h.pathIntersectionNumber = function(t, e) {
          return be(t, e, 1);
        }, h.isPointInsidePath = function(t, e, i) {
          var r = h.pathBBox(t);
          return h.isPointInsideBBox(r, e, i) && be(t, [["M", e, i], ["H", r.x2 + 10]], 1) % 2 == 1;
        }, h._removedFactory = function(t) {
          return function() {
            a("raphael.log", null, "Raphaël: you are calling to method “" + t + "” of removed object", t);
          };
        };
        var Qt = h.pathBBox = function(t) {
          var e = Yt(t);
          if (e.bbox)
            return Xt(e.bbox);
          if (!t)
            return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };
          for (var i, r = 0, n = 0, l = [], p = [], f = 0, d = (t = _e(t)).length; f < d; f++)
            if ((i = t[f])[0] == "M")
              r = i[1], n = i[2], l.push(r), p.push(n);
            else {
              var m = Ae(r, n, i[1], i[2], i[3], i[4], i[5], i[6]);
              l = l[Y](m.min.x, m.max.x), p = p[Y](m.min.y, m.max.y), r = i[5], n = i[6];
            }
          var A = it[W](0, l), N = it[W](0, p), S = nt[W](0, l), C = nt[W](0, p), F = S - A, R = C - N, O = { x: A, y: N, x2: S, y2: C, width: F, height: R, cx: A + F / 2, cy: N + R / 2 };
          return e.bbox = Xt(O), O;
        }, Nt = function(t) {
          var e = Xt(t);
          return e.toString = h._path2string, e;
        }, qe = h._pathToRelative = function(t) {
          var e = Yt(t);
          if (e.rel)
            return Nt(e.rel);
          h.is(t, gt) && h.is(t && t[0], gt) || (t = h.parsePathString(t));
          var i = [], r = 0, n = 0, l = 0, p = 0, f = 0;
          t[0][0] == "M" && (l = r = t[0][1], p = n = t[0][2], f++, i.push(["M", r, n]));
          for (var d = f, m = t.length; d < m; d++) {
            var A = i[d] = [], N = t[d];
            if (N[0] != st.call(N[0]))
              switch (A[0] = st.call(N[0]), A[0]) {
                case "a":
                  A[1] = N[1], A[2] = N[2], A[3] = N[3], A[4] = N[4], A[5] = N[5], A[6] = +(N[6] - r).toFixed(3), A[7] = +(N[7] - n).toFixed(3);
                  break;
                case "v":
                  A[1] = +(N[1] - n).toFixed(3);
                  break;
                case "m":
                  l = N[1], p = N[2];
                default:
                  for (var S = 1, C = N.length; S < C; S++)
                    A[S] = +(N[S] - (S % 2 ? r : n)).toFixed(3);
              }
            else {
              A = i[d] = [], N[0] == "m" && (l = N[1] + r, p = N[2] + n);
              for (var F = 0, R = N.length; F < R; F++)
                i[d][F] = N[F];
            }
            var O = i[d].length;
            switch (i[d][0]) {
              case "z":
                r = l, n = p;
                break;
              case "h":
                r += +i[d][O - 1];
                break;
              case "v":
                n += +i[d][O - 1];
                break;
              default:
                r += +i[d][O - 2], n += +i[d][O - 1];
            }
          }
          return i.toString = h._path2string, e.rel = Nt(i), i;
        }, ce = h._pathToAbsolute = function(t) {
          var e = Yt(t);
          if (e.abs)
            return Nt(e.abs);
          if (h.is(t, gt) && h.is(t && t[0], gt) || (t = h.parsePathString(t)), !t || !t.length)
            return [["M", 0, 0]];
          var i = [], r = 0, n = 0, l = 0, p = 0, f = 0;
          t[0][0] == "M" && (l = r = +t[0][1], p = n = +t[0][2], f++, i[0] = ["M", r, n]);
          for (var d, m, A = t.length == 3 && t[0][0] == "M" && t[1][0].toUpperCase() == "R" && t[2][0].toUpperCase() == "Z", N = f, S = t.length; N < S; N++) {
            if (i.push(d = []), (m = t[N])[0] != _.call(m[0]))
              switch (d[0] = _.call(m[0]), d[0]) {
                case "A":
                  d[1] = m[1], d[2] = m[2], d[3] = m[3], d[4] = m[4], d[5] = m[5], d[6] = +(m[6] + r), d[7] = +(m[7] + n);
                  break;
                case "V":
                  d[1] = +m[1] + n;
                  break;
                case "H":
                  d[1] = +m[1] + r;
                  break;
                case "R":
                  for (var C = [r, n][Y](m.slice(1)), F = 2, R = C.length; F < R; F++)
                    C[F] = +C[F] + r, C[++F] = +C[F] + n;
                  i.pop(), i = i[Y](ae(C, A));
                  break;
                case "M":
                  l = +m[1] + r, p = +m[2] + n;
                default:
                  for (F = 1, R = m.length; F < R; F++)
                    d[F] = +m[F] + (F % 2 ? r : n);
              }
            else if (m[0] == "R")
              C = [r, n][Y](m.slice(1)), i.pop(), i = i[Y](ae(C, A)), d = ["R"][Y](m.slice(-2));
            else
              for (var O = 0, E = m.length; O < E; O++)
                d[O] = m[O];
            switch (d[0]) {
              case "Z":
                r = l, n = p;
                break;
              case "H":
                r = d[1];
                break;
              case "V":
                n = d[1];
                break;
              case "M":
                l = d[d.length - 2], p = d[d.length - 1];
              default:
                r = d[d.length - 2], n = d[d.length - 1];
            }
          }
          return i.toString = h._path2string, e.abs = Nt(i), i;
        }, ue = function(t, e, i, r) {
          return [t, e, i, r, i, r];
        }, Zt = function(t, e, i, r, n, l) {
          return [1 / 3 * t + 2 / 3 * i, 1 / 3 * e + 2 / 3 * r, 1 / 3 * n + 2 / 3 * i, 1 / 3 * l + 2 / 3 * r, n, l];
        }, Ce = function(t, e, i, r, n, l, p, f, d, m) {
          var A, N = 120 * At / 180, S = At / 180 * (+n || 0), C = [], F = Ft(function(hi, li, Se) {
            return { x: hi * U.cos(Se) - li * U.sin(Se), y: hi * U.sin(Se) + li * U.cos(Se) };
          });
          if (m)
            ot = m[0], ct = m[1], j = m[2], lt = m[3];
          else {
            t = (A = F(t, e, -S)).x, e = A.y, f = (A = F(f, d, -S)).x, d = A.y;
            var R = (t - f) / 2, O = (e - d) / 2, E = R * R / (i * i) + O * O / (r * r);
            E > 1 && (i *= E = U.sqrt(E), r *= E);
            var J = i * i, I = r * r, G = (l == p ? -1 : 1) * U.sqrt(yt((J * I - J * O * O - I * R * R) / (J * O * O + I * R * R))), j = G * i * O / r + (t + f) / 2, lt = G * -r * R / i + (e + d) / 2, ot = U.asin(((e - lt) / r).toFixed(9)), ct = U.asin(((d - lt) / r).toFixed(9));
            (ot = t < j ? At - ot : ot) < 0 && (ot = 2 * At + ot), (ct = f < j ? At - ct : ct) < 0 && (ct = 2 * At + ct), p && ot > ct && (ot -= 2 * At), !p && ct > ot && (ct -= 2 * At);
          }
          var pe = ct - ot;
          if (yt(pe) > N) {
            var Le = ct, Rt = f, Vt = d;
            ct = ot + N * (p && ct > ot ? 1 : -1), f = j + i * U.cos(ct), d = lt + r * U.sin(ct), C = Ce(f, d, i, r, n, 0, p, Rt, Vt, [ct, Le, j, lt]);
          }
          pe = ct - ot;
          var de = U.cos(ot), ge = U.sin(ot), Ee = U.cos(ct), Gt = U.sin(ct), ie = U.tan(pe / 4), Me = 4 / 3 * i * ie, ri = 4 / 3 * r * ie, ni = [t, e], xe = [t + Me * ge, e - ri * de], si = [f + Me * Gt, d - ri * Ee], oi = [f, d];
          if (xe[0] = 2 * ni[0] - xe[0], xe[1] = 2 * ni[1] - xe[1], m)
            return [xe, si, oi][Y](C);
          for (var ai = [], Wt = 0, bi = (C = [xe, si, oi][Y](C).join()[Z](",")).length; Wt < bi; Wt++)
            ai[Wt] = Wt % 2 ? F(C[Wt - 1], C[Wt], S).y : F(C[Wt], C[Wt + 1], S).x;
          return ai;
        }, Kt = function(t, e, i, r, n, l, p, f, d) {
          var m = 1 - d;
          return { x: Lt(m, 3) * t + 3 * Lt(m, 2) * d * i + 3 * m * d * d * n + Lt(d, 3) * p, y: Lt(m, 3) * e + 3 * Lt(m, 2) * d * r + 3 * m * d * d * l + Lt(d, 3) * f };
        }, Ae = Ft(function(t, e, i, r, n, l, p, f) {
          var d, m = n - 2 * i + t - (p - 2 * n + i), A = 2 * (i - t) - 2 * (n - i), N = t - i, S = (-A + U.sqrt(A * A - 4 * m * N)) / 2 / m, C = (-A - U.sqrt(A * A - 4 * m * N)) / 2 / m, F = [e, f], R = [t, p];
          return yt(S) > "1e12" && (S = 0.5), yt(C) > "1e12" && (C = 0.5), S > 0 && S < 1 && (d = Kt(t, e, i, r, n, l, p, f, S), R.push(d.x), F.push(d.y)), C > 0 && C < 1 && (d = Kt(t, e, i, r, n, l, p, f, C), R.push(d.x), F.push(d.y)), m = l - 2 * r + e - (f - 2 * l + r), N = e - r, S = (-(A = 2 * (r - e) - 2 * (l - r)) + U.sqrt(A * A - 4 * m * N)) / 2 / m, C = (-A - U.sqrt(A * A - 4 * m * N)) / 2 / m, yt(S) > "1e12" && (S = 0.5), yt(C) > "1e12" && (C = 0.5), S > 0 && S < 1 && (d = Kt(t, e, i, r, n, l, p, f, S), R.push(d.x), F.push(d.y)), C > 0 && C < 1 && (d = Kt(t, e, i, r, n, l, p, f, C), R.push(d.x), F.push(d.y)), { min: { x: it[W](0, R), y: it[W](0, F) }, max: { x: nt[W](0, R), y: nt[W](0, F) } };
        }), _e = h._path2curve = Ft(function(t, e) {
          var i = !e && Yt(t);
          if (!e && i.curve)
            return Nt(i.curve);
          for (var r = ce(t), n = e && ce(e), l = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, p = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, f = function(G, j, lt) {
            var ot, ct;
            if (!G)
              return ["C", j.x, j.y, j.x, j.y, j.x, j.y];
            switch (!(G[0] in { T: 1, Q: 1 }) && (j.qx = j.qy = null), G[0]) {
              case "M":
                j.X = G[1], j.Y = G[2];
                break;
              case "A":
                G = ["C"][Y](Ce[W](0, [j.x, j.y][Y](G.slice(1))));
                break;
              case "S":
                lt == "C" || lt == "S" ? (ot = 2 * j.x - j.bx, ct = 2 * j.y - j.by) : (ot = j.x, ct = j.y), G = ["C", ot, ct][Y](G.slice(1));
                break;
              case "T":
                lt == "Q" || lt == "T" ? (j.qx = 2 * j.x - j.qx, j.qy = 2 * j.y - j.qy) : (j.qx = j.x, j.qy = j.y), G = ["C"][Y](Zt(j.x, j.y, j.qx, j.qy, G[1], G[2]));
                break;
              case "Q":
                j.qx = G[1], j.qy = G[2], G = ["C"][Y](Zt(j.x, j.y, G[1], G[2], G[3], G[4]));
                break;
              case "L":
                G = ["C"][Y](ue(j.x, j.y, G[1], G[2]));
                break;
              case "H":
                G = ["C"][Y](ue(j.x, j.y, G[1], j.y));
                break;
              case "V":
                G = ["C"][Y](ue(j.x, j.y, j.x, G[1]));
                break;
              case "Z":
                G = ["C"][Y](ue(j.x, j.y, j.X, j.Y));
            }
            return G;
          }, d = function(G, j) {
            if (G[j].length > 7) {
              G[j].shift();
              for (var lt = G[j]; lt.length; )
                A[j] = "A", n && (N[j] = "A"), G.splice(j++, 0, ["C"][Y](lt.splice(0, 6)));
              G.splice(j, 1), R = nt(r.length, n && n.length || 0);
            }
          }, m = function(G, j, lt, ot, ct) {
            G && j && G[ct][0] == "M" && j[ct][0] != "M" && (j.splice(ct, 0, ["M", ot.x, ot.y]), lt.bx = 0, lt.by = 0, lt.x = G[ct][1], lt.y = G[ct][2], R = nt(r.length, n && n.length || 0));
          }, A = [], N = [], S = "", C = "", F = 0, R = nt(r.length, n && n.length || 0); F < R; F++) {
            r[F] && (S = r[F][0]), S != "C" && (A[F] = S, F && (C = A[F - 1])), r[F] = f(r[F], l, C), A[F] != "A" && S == "C" && (A[F] = "C"), d(r, F), n && (n[F] && (S = n[F][0]), S != "C" && (N[F] = S, F && (C = N[F - 1])), n[F] = f(n[F], p, C), N[F] != "A" && S == "C" && (N[F] = "C"), d(n, F)), m(r, n, l, p, F), m(n, r, p, l, F);
            var O = r[F], E = n && n[F], J = O.length, I = n && E.length;
            l.x = O[J - 2], l.y = O[J - 1], l.bx = x(O[J - 4]) || l.x, l.by = x(O[J - 3]) || l.y, p.bx = n && (x(E[I - 4]) || p.x), p.by = n && (x(E[I - 3]) || p.y), p.x = n && E[I - 2], p.y = n && E[I - 1];
          }
          return n || (i.curve = Nt(r)), n ? [r, n] : r;
        }, null, Nt), Te = (h._parseDots = Ft(function(t) {
          for (var e = [], i = 0, r = t.length; i < r; i++) {
            var n = {}, l = t[i].match(/^([^:]*):?([\d\.]*)/);
            if (n.color = h.getRGB(l[1]), n.color.error)
              return null;
            n.opacity = n.color.opacity, n.color = n.color.hex, l[2] && (n.offset = l[2] + "%"), e.push(n);
          }
          for (i = 1, r = e.length - 1; i < r; i++)
            if (!e[i].offset) {
              for (var p = x(e[i - 1].offset || 0), f = 0, d = i + 1; d < r; d++)
                if (e[d].offset) {
                  f = e[d].offset;
                  break;
                }
              f || (f = 100, d = r);
              for (var m = ((f = x(f)) - p) / (d - i + 1); i < d; i++)
                p += m, e[i].offset = p + "%";
            }
          return e;
        }), h._tear = function(t, e) {
          t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next);
        }), fi = (h._tofront = function(t, e) {
          e.top !== t && (Te(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t);
        }, h._toback = function(t, e) {
          e.bottom !== t && (Te(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t);
        }, h._insertafter = function(t, e, i) {
          Te(t, i), e == i.top && (i.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t;
        }, h._insertbefore = function(t, e, i) {
          Te(t, i), e == i.bottom && (i.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e;
        }, h.toMatrix = function(t, e) {
          var i = Qt(t), r = { _: { transform: tt }, getBBox: function() {
            return i;
          } };
          return Ge(r, e), r.matrix;
        }), Ge = (h.transformPath = function(t, e) {
          return Pt(t, fi(t, e));
        }, h._extractTransform = function(t, e) {
          if (e == null)
            return t._.transform;
          e = L(e).replace(/\.{3}|\u2026/g, t._.transform || tt);
          var i, r, n = h.parseTransformString(e), l = 0, p = 1, f = 1, d = t._, m = new te();
          if (d.transform = n || [], n)
            for (var A = 0, N = n.length; A < N; A++) {
              var S, C, F, R, O, E = n[A], J = E.length, I = L(E[0]).toLowerCase(), G = E[0] != I, j = G ? m.invert() : 0;
              I == "t" && J == 3 ? G ? (S = j.x(0, 0), C = j.y(0, 0), F = j.x(E[1], E[2]), R = j.y(E[1], E[2]), m.translate(F - S, R - C)) : m.translate(E[1], E[2]) : I == "r" ? J == 2 ? (O = O || t.getBBox(1), m.rotate(E[1], O.x + O.width / 2, O.y + O.height / 2), l += E[1]) : J == 4 && (G ? (F = j.x(E[2], E[3]), R = j.y(E[2], E[3]), m.rotate(E[1], F, R)) : m.rotate(E[1], E[2], E[3]), l += E[1]) : I == "s" ? J == 2 || J == 3 ? (O = O || t.getBBox(1), m.scale(E[1], E[J - 1], O.x + O.width / 2, O.y + O.height / 2), p *= E[1], f *= E[J - 1]) : J == 5 && (G ? (F = j.x(E[3], E[4]), R = j.y(E[3], E[4]), m.scale(E[1], E[2], F, R)) : m.scale(E[1], E[2], E[3], E[4]), p *= E[1], f *= E[2]) : I == "m" && J == 7 && m.add(E[1], E[2], E[3], E[4], E[5], E[6]), d.dirtyT = 1, t.matrix = m;
            }
          t.matrix = m, d.sx = p, d.sy = f, d.deg = l, d.dx = i = m.e, d.dy = r = m.f, p == 1 && f == 1 && !l && d.bbox ? (d.bbox.x += +i, d.bbox.y += +r) : d.dirtyT = 1;
        }), $e = function(t) {
          var e = t[0];
          switch (e.toLowerCase()) {
            case "t":
              return [e, 0, 0];
            case "m":
              return [e, 1, 0, 0, 1, 0, 0];
            case "r":
              return t.length == 4 ? [e, 0, t[2], t[3]] : [e, 0];
            case "s":
              return t.length == 5 ? [e, 1, 1, t[3], t[4]] : t.length == 3 ? [e, 1, 1] : [e, 1];
          }
        }, pi = h._equaliseTransform = function(t, e) {
          e = L(e).replace(/\.{3}|\u2026/g, t), t = h.parseTransformString(t) || [], e = h.parseTransformString(e) || [];
          for (var i, r, n, l, p = nt(t.length, e.length), f = [], d = [], m = 0; m < p; m++) {
            if (n = t[m] || $e(e[m]), l = e[m] || $e(n), n[0] != l[0] || n[0].toLowerCase() == "r" && (n[2] != l[2] || n[3] != l[3]) || n[0].toLowerCase() == "s" && (n[3] != l[3] || n[4] != l[4]))
              return;
            for (f[m] = [], d[m] = [], i = 0, r = nt(n.length, l.length); i < r; i++)
              i in n && (f[m][i] = n[i]), i in l && (d[m][i] = l[i]);
          }
          return { from: f, to: d };
        };
        function te(t, e, i, r, n, l) {
          t != null ? (this.a = +t, this.b = +e, this.c = +i, this.d = +r, this.e = +n, this.f = +l) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0);
        }
        h._getContainer = function(t, e, i, r) {
          var n;
          if ((n = r != null || h.is(t, "object") ? t : Q.doc.getElementById(t)) != null)
            return n.tagName ? e == null ? { container: n, width: n.style.pixelWidth || n.offsetWidth, height: n.style.pixelHeight || n.offsetHeight } : { container: n, width: e, height: i } : { container: 1, x: t, y: e, width: i, height: r };
        }, h.pathToRelative = qe, h._engine = {}, h.path2curve = _e, h.matrix = function(t, e, i, r, n, l) {
          return new te(t, e, i, r, n, l);
        }, function(t) {
          function e(r) {
            return r[0] * r[0] + r[1] * r[1];
          }
          function i(r) {
            var n = U.sqrt(e(r));
            r[0] && (r[0] /= n), r[1] && (r[1] /= n);
          }
          t.add = function(r, n, l, p, f, d) {
            var m, A, N, S, C = [[], [], []], F = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]], R = [[r, l, f], [n, p, d], [0, 0, 1]];
            for (r && r instanceof te && (R = [[r.a, r.c, r.e], [r.b, r.d, r.f], [0, 0, 1]]), m = 0; m < 3; m++)
              for (A = 0; A < 3; A++) {
                for (S = 0, N = 0; N < 3; N++)
                  S += F[m][N] * R[N][A];
                C[m][A] = S;
              }
            this.a = C[0][0], this.b = C[1][0], this.c = C[0][1], this.d = C[1][1], this.e = C[0][2], this.f = C[1][2];
          }, t.invert = function() {
            var r = this, n = r.a * r.d - r.b * r.c;
            return new te(r.d / n, -r.b / n, -r.c / n, r.a / n, (r.c * r.f - r.d * r.e) / n, (r.b * r.e - r.a * r.f) / n);
          }, t.clone = function() {
            return new te(this.a, this.b, this.c, this.d, this.e, this.f);
          }, t.translate = function(r, n) {
            this.add(1, 0, 0, 1, r, n);
          }, t.scale = function(r, n, l, p) {
            n == null && (n = r), (l || p) && this.add(1, 0, 0, 1, l, p), this.add(r, 0, 0, n, 0, 0), (l || p) && this.add(1, 0, 0, 1, -l, -p);
          }, t.rotate = function(r, n, l) {
            r = h.rad(r), n = n || 0, l = l || 0;
            var p = +U.cos(r).toFixed(9), f = +U.sin(r).toFixed(9);
            this.add(p, f, -f, p, n, l), this.add(1, 0, 0, 1, -n, -l);
          }, t.x = function(r, n) {
            return r * this.a + n * this.c + this.e;
          }, t.y = function(r, n) {
            return r * this.b + n * this.d + this.f;
          }, t.get = function(r) {
            return +this[L.fromCharCode(97 + r)].toFixed(4);
          }, t.toString = function() {
            return h.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
          }, t.toFilter = function() {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
          }, t.offset = function() {
            return [this.e.toFixed(4), this.f.toFixed(4)];
          }, t.split = function() {
            var r = {};
            r.dx = this.e, r.dy = this.f;
            var n = [[this.a, this.c], [this.b, this.d]];
            r.scalex = U.sqrt(e(n[0])), i(n[0]), r.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * r.shear, n[1][1] - n[0][1] * r.shear], r.scaley = U.sqrt(e(n[1])), i(n[1]), r.shear /= r.scaley;
            var l = -n[0][1], p = n[1][1];
            return p < 0 ? (r.rotate = h.deg(U.acos(p)), l < 0 && (r.rotate = 360 - r.rotate)) : r.rotate = h.deg(U.asin(l)), r.isSimple = !(+r.shear.toFixed(9) || r.scalex.toFixed(9) != r.scaley.toFixed(9) && r.rotate), r.isSuperSimple = !+r.shear.toFixed(9) && r.scalex.toFixed(9) == r.scaley.toFixed(9) && !r.rotate, r.noRotation = !+r.shear.toFixed(9) && !r.rotate, r;
          }, t.toTransformString = function(r) {
            var n = r || this[Z]();
            return n.isSimple ? (n.scalex = +n.scalex.toFixed(4), n.scaley = +n.scaley.toFixed(4), n.rotate = +n.rotate.toFixed(4), (n.dx || n.dy ? "t" + [n.dx, n.dy] : tt) + (n.scalex != 1 || n.scaley != 1 ? "s" + [n.scalex, n.scaley, 0, 0] : tt) + (n.rotate ? "r" + [n.rotate, 0, 0] : tt)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
          };
        }(te.prototype);
        for (var di = function() {
          this.returnValue = false;
        }, gi = function() {
          return this.originalEvent.preventDefault();
        }, xi = function() {
          this.cancelBubble = true;
        }, yi = function() {
          return this.originalEvent.stopPropagation();
        }, Ue = function(t) {
          var e = Q.doc.documentElement.scrollTop || Q.doc.body.scrollTop, i = Q.doc.documentElement.scrollLeft || Q.doc.body.scrollLeft;
          return { x: t.clientX + i, y: t.clientY + e };
        }, mi = Q.doc.addEventListener ? function(t, e, i, r) {
          var n = function(p) {
            var f = Ue(p);
            return i.call(r, p, f.x, f.y);
          };
          if (t.addEventListener(e, n, false), ht && xt[e]) {
            var l = function(p) {
              for (var f = Ue(p), d = p, m = 0, A = p.targetTouches && p.targetTouches.length; m < A; m++)
                if (p.targetTouches[m].target == t) {
                  (p = p.targetTouches[m]).originalEvent = d, p.preventDefault = gi, p.stopPropagation = yi;
                  break;
                }
              return i.call(r, p, f.x, f.y);
            };
            t.addEventListener(xt[e], l, false);
          }
          return function() {
            return t.removeEventListener(e, n, false), ht && xt[e] && t.removeEventListener(xt[e], l, false), true;
          };
        } : Q.doc.attachEvent ? function(t, e, i, r) {
          var n = function(l) {
            l = l || Q.win.event;
            var p = Q.doc.documentElement.scrollTop || Q.doc.body.scrollTop, f = Q.doc.documentElement.scrollLeft || Q.doc.body.scrollLeft, d = l.clientX + f, m = l.clientY + p;
            return l.preventDefault = l.preventDefault || di, l.stopPropagation = l.stopPropagation || xi, i.call(r, l, d, m);
          };
          return t.attachEvent("on" + e, n), function() {
            return t.detachEvent("on" + e, n), true;
          };
        } : void 0, Jt = [], Oe = function(t) {
          for (var e, i = t.clientX, r = t.clientY, n = Q.doc.documentElement.scrollTop || Q.doc.body.scrollTop, l = Q.doc.documentElement.scrollLeft || Q.doc.body.scrollLeft, p = Jt.length; p--; ) {
            if (e = Jt[p], ht && t.touches) {
              for (var f, d = t.touches.length; d--; )
                if ((f = t.touches[d]).identifier == e.el._drag.id) {
                  i = f.clientX, r = f.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                  break;
                }
            } else
              t.preventDefault();
            var m, A = e.el.node, N = A.nextSibling, S = A.parentNode, C = A.style.display;
            Q.win.opera && S.removeChild(A), A.style.display = "none", m = e.el.paper.getElementByPoint(i, r), A.style.display = C, Q.win.opera && (N ? S.insertBefore(A, N) : S.appendChild(A)), m && a("raphael.drag.over." + e.el.id, e.el, m), i += l, r += n, a("raphael.drag.move." + e.el.id, e.move_scope || e.el, i - e.el._drag.x, r - e.el._drag.y, i, r, t);
          }
        }, Xe = function(t) {
          h.unmousemove(Oe).unmouseup(Xe);
          for (var e, i = Jt.length; i--; )
            (e = Jt[i]).el._drag = {}, a("raphael.drag.end." + e.el.id, e.end_scope || e.start_scope || e.move_scope || e.el, t);
          Jt = [];
        }, _t = h.el = {}, He = X.length; He--; )
          (function(t) {
            h[t] = _t[t] = function(e, i) {
              return h.is(e, "function") && (this.events = this.events || [], this.events.push({ name: t, f: e, unbind: mi(this.shape || this.node || Q.doc, t, e, i || this) })), this;
            }, h["un" + t] = _t["un" + t] = function(e) {
              for (var i = this.events || [], r = i.length; r--; )
                i[r].name != t || !h.is(e, "undefined") && i[r].f != e || (i[r].unbind(), i.splice(r, 1), !i.length && delete this.events);
              return this;
            };
          })(X[He]);
        _t.data = function(t, e) {
          var i = kt[this.id] = kt[this.id] || {};
          if (arguments.length == 0)
            return i;
          if (arguments.length == 1) {
            if (h.is(t, "object")) {
              for (var r in t)
                t[K](r) && this.data(r, t[r]);
              return this;
            }
            return a("raphael.data.get." + this.id, this, i[t], t), i[t];
          }
          return i[t] = e, a("raphael.data.set." + this.id, this, e, t), this;
        }, _t.removeData = function(t) {
          return t == null ? delete kt[this.id] : kt[this.id] && delete kt[this.id][t], this;
        }, _t.getData = function() {
          return Xt(kt[this.id] || {});
        }, _t.hover = function(t, e, i, r) {
          return this.mouseover(t, i).mouseout(e, r || i);
        }, _t.unhover = function(t, e) {
          return this.unmouseover(t).unmouseout(e);
        };
        var fe = [];
        _t.drag = function(t, e, i, r, n, l) {
          function p(f) {
            (f.originalEvent || f).preventDefault();
            var d = f.clientX, m = f.clientY, A = Q.doc.documentElement.scrollTop || Q.doc.body.scrollTop, N = Q.doc.documentElement.scrollLeft || Q.doc.body.scrollLeft;
            if (this._drag.id = f.identifier, ht && f.touches) {
              for (var S, C = f.touches.length; C--; )
                if (S = f.touches[C], this._drag.id = S.identifier, S.identifier == this._drag.id) {
                  d = S.clientX, m = S.clientY;
                  break;
                }
            }
            this._drag.x = d + N, this._drag.y = m + A, !Jt.length && h.mousemove(Oe).mouseup(Xe), Jt.push({ el: this, move_scope: r, start_scope: n, end_scope: l }), e && a.on("raphael.drag.start." + this.id, e), t && a.on("raphael.drag.move." + this.id, t), i && a.on("raphael.drag.end." + this.id, i), a("raphael.drag.start." + this.id, n || r || this, this._drag.x, this._drag.y, f);
          }
          return this._drag = {}, fe.push({ el: this, start: p }), this.mousedown(p), this;
        }, _t.onDragOver = function(t) {
          t ? a.on("raphael.drag.over." + this.id, t) : a.unbind("raphael.drag.over." + this.id);
        }, _t.undrag = function() {
          for (var t = fe.length; t--; )
            fe[t].el == this && (this.unmousedown(fe[t].start), fe.splice(t, 1), a.unbind("raphael.drag.*." + this.id));
          !fe.length && h.unmousemove(Oe).unmouseup(Xe), Jt = [];
        }, D.circle = function(t, e, i) {
          var r = h._engine.circle(this, t || 0, e || 0, i || 0);
          return this.__set__ && this.__set__.push(r), r;
        }, D.rect = function(t, e, i, r, n) {
          var l = h._engine.rect(this, t || 0, e || 0, i || 0, r || 0, n || 0);
          return this.__set__ && this.__set__.push(l), l;
        }, D.ellipse = function(t, e, i, r) {
          var n = h._engine.ellipse(this, t || 0, e || 0, i || 0, r || 0);
          return this.__set__ && this.__set__.push(n), n;
        }, D.path = function(t) {
          t && !h.is(t, "string") && !h.is(t[0], gt) && (t += tt);
          var e = h._engine.path(h.format[W](h, arguments), this);
          return this.__set__ && this.__set__.push(e), e;
        }, D.image = function(t, e, i, r, n) {
          var l = h._engine.image(this, t || "about:blank", e || 0, i || 0, r || 0, n || 0);
          return this.__set__ && this.__set__.push(l), l;
        }, D.text = function(t, e, i) {
          var r = h._engine.text(this, t || 0, e || 0, L(i));
          return this.__set__ && this.__set__.push(r), r;
        }, D.set = function(t) {
          !h.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
          var e = new ke(t);
          return this.__set__ && this.__set__.push(e), e.paper = this, e.type = "set", e;
        }, D.setStart = function(t) {
          this.__set__ = t || this.set();
        }, D.setFinish = function(t) {
          var e = this.__set__;
          return delete this.__set__, e;
        }, D.getSize = function() {
          var t = this.canvas.parentNode;
          return { width: t.offsetWidth, height: t.offsetHeight };
        }, D.setSize = function(t, e) {
          return h._engine.setSize.call(this, t, e);
        }, D.setViewBox = function(t, e, i, r, n) {
          return h._engine.setViewBox.call(this, t, e, i, r, n);
        }, D.top = D.bottom = null, D.raphael = h;
        function Qe() {
          return this.x + q + this.y + q + this.width + " × " + this.height;
        }
        D.getElementByPoint = function(t, e) {
          var i, r, n, l, p, f, d, m = this.canvas, A = Q.doc.elementFromPoint(t, e);
          if (Q.win.opera && A.tagName == "svg") {
            var N = (r = (i = m).getBoundingClientRect(), n = i.ownerDocument, l = n.body, p = n.documentElement, f = p.clientTop || l.clientTop || 0, d = p.clientLeft || l.clientLeft || 0, { y: r.top + (Q.win.pageYOffset || p.scrollTop || l.scrollTop) - f, x: r.left + (Q.win.pageXOffset || p.scrollLeft || l.scrollLeft) - d }), S = m.createSVGRect();
            S.x = t - N.x, S.y = e - N.y, S.width = S.height = 1;
            var C = m.getIntersectionList(S, null);
            C.length && (A = C[C.length - 1]);
          }
          if (!A)
            return null;
          for (; A.parentNode && A != m.parentNode && !A.raphael; )
            A = A.parentNode;
          return A == this.canvas.parentNode && (A = m), A = A && A.raphael ? this.getById(A.raphaelid) : null;
        }, D.getElementsByBBox = function(t) {
          var e = this.set();
          return this.forEach(function(i) {
            h.isBBoxIntersect(i.getBBox(), t) && e.push(i);
          }), e;
        }, D.getById = function(t) {
          for (var e = this.bottom; e; ) {
            if (e.id == t)
              return e;
            e = e.next;
          }
          return null;
        }, D.forEach = function(t, e) {
          for (var i = this.bottom; i; ) {
            if (t.call(e, i) === false)
              return this;
            i = i.next;
          }
          return this;
        }, D.getElementsByPoint = function(t, e) {
          var i = this.set();
          return this.forEach(function(r) {
            r.isPointInside(t, e) && i.push(r);
          }), i;
        }, _t.isPointInside = function(t, e) {
          var i = this.realPath = Mt[this.type](this);
          return this.attr("transform") && this.attr("transform").length && (i = h.transformPath(i, this.attr("transform"))), h.isPointInsidePath(i, t, e);
        }, _t.getBBox = function(t) {
          if (this.removed)
            return {};
          var e = this._;
          return t ? (!e.dirty && e.bboxwt || (this.realPath = Mt[this.type](this), e.bboxwt = Qt(this.realPath), e.bboxwt.toString = Qe, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && (!e.dirty && this.realPath || (e.bboxwt = 0, this.realPath = Mt[this.type](this)), e.bbox = Qt(Pt(this.realPath, this.matrix)), e.bbox.toString = Qe, e.dirty = e.dirtyT = 0), e.bbox);
        }, _t.clone = function() {
          if (this.removed)
            return null;
          var t = this.paper[this.type]().attr(this.attr());
          return this.__set__ && this.__set__.push(t), t;
        }, _t.glow = function(t) {
          if (this.type == "text")
            return null;
          var e = { width: ((t = t || {}).width || 10) + (+this.attr("stroke-width") || 1), fill: t.fill || false, opacity: t.opacity == null ? 0.5 : t.opacity, offsetx: t.offsetx || 0, offsety: t.offsety || 0, color: t.color || "#000" }, i = e.width / 2, r = this.paper, n = r.set(), l = this.realPath || Mt[this.type](this);
          l = this.matrix ? Pt(l, this.matrix) : l;
          for (var p = 1; p < i + 1; p++)
            n.push(r.path(l).attr({ stroke: e.color, fill: e.fill ? e.color : "none", "stroke-linejoin": "round", "stroke-linecap": "round", "stroke-width": +(e.width / i * p).toFixed(3), opacity: +(e.opacity / i).toFixed(3) }));
          return n.insertBefore(this).translate(e.offsetx, e.offsety);
        };
        var Ne = function(t, e, i, r, n, l, p, f, d) {
          return d == null ? Dt(t, e, i, r, n, l, p, f) : h.findDotsAtSegment(t, e, i, r, n, l, p, f, function(m, A, N, S, C, F, R, O, E) {
            if (!(E < 0 || Dt(m, A, N, S, C, F, R, O) < E)) {
              var J, I = 0.5, G = 1 - I;
              for (J = Dt(m, A, N, S, C, F, R, O, G); yt(J - E) > 0.01; )
                J = Dt(m, A, N, S, C, F, R, O, G += (J < E ? 1 : -1) * (I /= 2));
              return G;
            }
          }(t, e, i, r, n, l, p, f, d));
        }, Re = function(t, e) {
          return function(i, r, n) {
            for (var l, p, f, d, m, A = "", N = {}, S = 0, C = 0, F = (i = _e(i)).length; C < F; C++) {
              if ((f = i[C])[0] == "M")
                l = +f[1], p = +f[2];
              else {
                if (S + (d = Ne(l, p, f[1], f[2], f[3], f[4], f[5], f[6])) > r) {
                  if (e && !N.start) {
                    if (A += ["C" + (m = Ne(l, p, f[1], f[2], f[3], f[4], f[5], f[6], r - S)).start.x, m.start.y, m.m.x, m.m.y, m.x, m.y], n)
                      return A;
                    N.start = A, A = ["M" + m.x, m.y + "C" + m.n.x, m.n.y, m.end.x, m.end.y, f[5], f[6]].join(), S += d, l = +f[5], p = +f[6];
                    continue;
                  }
                  if (!t && !e)
                    return { x: (m = Ne(l, p, f[1], f[2], f[3], f[4], f[5], f[6], r - S)).x, y: m.y, alpha: m.alpha };
                }
                S += d, l = +f[5], p = +f[6];
              }
              A += f.shift() + f;
            }
            return N.end = A, (m = t ? S : e ? N : h.findDotsAtSegment(l, p, f[0], f[1], f[2], f[3], f[4], f[5], 1)).alpha && (m = { x: m.x, y: m.y, alpha: m.alpha }), m;
          };
        }, Ze = Re(1), Je = Re(), Ie = Re(0, 1);
        h.getTotalLength = Ze, h.getPointAtLength = Je, h.getSubpath = function(t, e, i) {
          if (this.getTotalLength(t) - i < 1e-6)
            return Ie(t, e).end;
          var r = Ie(t, i, 1);
          return e ? Ie(r, e).end : r;
        }, _t.getTotalLength = function() {
          var t = this.getPath();
          if (t)
            return this.node.getTotalLength ? this.node.getTotalLength() : Ze(t);
        }, _t.getPointAtLength = function(t) {
          var e = this.getPath();
          if (e)
            return Je(e, t);
        }, _t.getPath = function() {
          var t, e = h._getPath[this.type];
          if (this.type != "text" && this.type != "set")
            return e && (t = e(this)), t;
        }, _t.getSubpath = function(t, e) {
          var i = this.getPath();
          if (i)
            return h.getSubpath(i, t, e);
        };
        var jt = h.easing_formulas = { linear: function(t) {
          return t;
        }, "<": function(t) {
          return Lt(t, 1.7);
        }, ">": function(t) {
          return Lt(t, 0.48);
        }, "<>": function(t) {
          var e = 0.48 - t / 1.04, i = U.sqrt(0.1734 + e * e), r = i - e, n = -i - e, l = Lt(yt(r), 1 / 3) * (r < 0 ? -1 : 1) + Lt(yt(n), 1 / 3) * (n < 0 ? -1 : 1) + 0.5;
          return 3 * (1 - l) * l * l + l * l * l;
        }, backIn: function(t) {
          var e = 1.70158;
          return t * t * ((e + 1) * t - e);
        }, backOut: function(t) {
          var e = 1.70158;
          return (t -= 1) * t * ((e + 1) * t + e) + 1;
        }, elastic: function(t) {
          return t == !!t ? t : Lt(2, -10 * t) * U.sin(2 * At * (t - 0.075) / 0.3) + 1;
        }, bounce: function(t) {
          var e = 7.5625, i = 2.75;
          return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + 0.75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + 0.9375 : e * (t -= 2.625 / i) * t + 0.984375;
        } };
        jt.easeIn = jt["ease-in"] = jt["<"], jt.easeOut = jt["ease-out"] = jt[">"], jt.easeInOut = jt["ease-in-out"] = jt["<>"], jt["back-in"] = jt.backIn, jt["back-out"] = jt.backOut;
        var vt = [], We = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
          setTimeout(t, 16);
        }, je = function() {
          for (var t = +/* @__PURE__ */ new Date(), e = 0; e < vt.length; e++) {
            var i = vt[e];
            if (!i.el.removed && !i.paused) {
              var r, n, l = t - i.start, p = i.ms, f = i.easing, d = i.from, m = i.diff, A = i.to, N = (i.t, i.el), S = {}, C = {};
              if (i.initstatus ? (l = (i.initstatus * i.anim.top - i.prev) / (i.percent - i.prev) * p, i.status = i.initstatus, delete i.initstatus, i.stop && vt.splice(e--, 1)) : i.status = (i.prev + (i.percent - i.prev) * (l / p)) / i.anim.top, !(l < 0))
                if (l < p) {
                  var F = f(l / p);
                  for (var R in d)
                    if (d[K](R)) {
                      switch (B[R]) {
                        case ut:
                          r = +d[R] + F * p * m[R];
                          break;
                        case "colour":
                          r = "rgb(" + [Ye(u(d[R].r + F * p * m[R].r)), Ye(u(d[R].g + F * p * m[R].g)), Ye(u(d[R].b + F * p * m[R].b))].join(",") + ")";
                          break;
                        case "path":
                          r = [];
                          for (var O = 0, E = d[R].length; O < E; O++) {
                            r[O] = [d[R][O][0]];
                            for (var J = 1, I = d[R][O].length; J < I; J++)
                              r[O][J] = +d[R][O][J] + F * p * m[R][O][J];
                            r[O] = r[O].join(q);
                          }
                          r = r.join(q);
                          break;
                        case "transform":
                          if (m[R].real)
                            for (r = [], O = 0, E = d[R].length; O < E; O++)
                              for (r[O] = [d[R][O][0]], J = 1, I = d[R][O].length; J < I; J++)
                                r[O][J] = d[R][O][J] + F * p * m[R][O][J];
                          else {
                            var G = function(lt) {
                              return +d[R][lt] + F * p * m[R][lt];
                            };
                            r = [["m", G(0), G(1), G(2), G(3), G(4), G(5)]];
                          }
                          break;
                        case "csv":
                          if (R == "clip-rect")
                            for (r = [], O = 4; O--; )
                              r[O] = +d[R][O] + F * p * m[R][O];
                          break;
                        default:
                          var j = [][Y](d[R]);
                          for (r = [], O = N.paper.customAttributes[R].length; O--; )
                            r[O] = +j[O] + F * p * m[R][O];
                      }
                      S[R] = r;
                    }
                  N.attr(S), function(lt, ot, ct) {
                    setTimeout(function() {
                      a("raphael.anim.frame." + lt, ot, ct);
                    });
                  }(N.id, N, i.anim);
                } else {
                  if (function(lt, ot, ct) {
                    setTimeout(function() {
                      a("raphael.anim.frame." + ot.id, ot, ct), a("raphael.anim.finish." + ot.id, ot, ct), h.is(lt, "function") && lt.call(ot);
                    });
                  }(i.callback, N, i.anim), N.attr(A), vt.splice(e--, 1), i.repeat > 1 && !i.next) {
                    for (n in A)
                      A[K](n) && (C[n] = i.totalOrigin[n]);
                    i.el.attr(C), we(i.anim, i.el, i.anim.percents[0], null, i.totalOrigin, i.repeat - 1);
                  }
                  i.next && !i.stop && we(i.anim, i.el, i.next, null, i.totalOrigin, i.repeat);
                }
            }
          }
          vt.length && We(je);
        }, Ye = function(t) {
          return t > 255 ? 255 : t < 0 ? 0 : t;
        };
        function vi(t, e, i, r, n, l) {
          var p = 3 * e, f = 3 * (r - e) - p, d = 1 - p - f, m = 3 * i, A = 3 * (n - i) - m, N = 1 - m - A;
          function S(C) {
            return ((d * C + f) * C + p) * C;
          }
          return function(C, F) {
            var R = function(O, E) {
              var J, I, G, j, lt, ot;
              for (G = O, ot = 0; ot < 8; ot++) {
                if (j = S(G) - O, yt(j) < E)
                  return G;
                if (yt(lt = (3 * d * G + 2 * f) * G + p) < 1e-6)
                  break;
                G -= j / lt;
              }
              if (I = 1, (G = O) < (J = 0))
                return J;
              if (G > I)
                return I;
              for (; J < I; ) {
                if (j = S(G), yt(j - O) < E)
                  return G;
                O > j ? J = G : I = G, G = (I - J) / 2 + J;
              }
              return G;
            }(C, F);
            return ((N * R + A) * R + m) * R;
          }(t, 1 / (200 * l));
        }
        function qt(t, e) {
          var i = [], r = {};
          if (this.ms = e, this.times = 1, t) {
            for (var n in t)
              t[K](n) && (r[x(n)] = t[n], i.push(x(n)));
            i.sort(Bt);
          }
          this.anim = r, this.top = i[i.length - 1], this.percents = i;
        }
        function we(t, e, i, r, n, l) {
          i = x(i);
          var p, f, d, m, A, N, S = t.ms, C = {}, F = {}, R = {};
          if (r)
            for (E = 0, J = vt.length; E < J; E++) {
              var O = vt[E];
              if (O.el.id == e.id && O.anim == t) {
                O.percent != i ? (vt.splice(E, 1), d = 1) : f = O, e.attr(O.totalOrigin);
                break;
              }
            }
          else
            r = +F;
          for (var E = 0, J = t.percents.length; E < J; E++) {
            if (t.percents[E] == i || t.percents[E] > r * t.top) {
              i = t.percents[E], A = t.percents[E - 1] || 0, S = S / t.top * (i - A), m = t.percents[E + 1], p = t.anim[i];
              break;
            }
            r && e.attr(t.anim[t.percents[E]]);
          }
          if (p) {
            if (f)
              f.initstatus = r, f.start = /* @__PURE__ */ new Date() - f.ms * r;
            else {
              for (var I in p)
                if (p[K](I) && (B[K](I) || e.paper.customAttributes[K](I)))
                  switch (C[I] = e.attr(I), C[I] == null && (C[I] = M[I]), F[I] = p[I], B[I]) {
                    case ut:
                      R[I] = (F[I] - C[I]) / S;
                      break;
                    case "colour":
                      C[I] = h.getRGB(C[I]);
                      var G = h.getRGB(F[I]);
                      R[I] = { r: (G.r - C[I].r) / S, g: (G.g - C[I].g) / S, b: (G.b - C[I].b) / S };
                      break;
                    case "path":
                      var j = _e(C[I], F[I]), lt = j[1];
                      for (C[I] = j[0], R[I] = [], E = 0, J = C[I].length; E < J; E++) {
                        R[I][E] = [0];
                        for (var ot = 1, ct = C[I][E].length; ot < ct; ot++)
                          R[I][E][ot] = (lt[E][ot] - C[I][E][ot]) / S;
                      }
                      break;
                    case "transform":
                      var pe = e._, Le = pi(pe[I], F[I]);
                      if (Le)
                        for (C[I] = Le.from, F[I] = Le.to, R[I] = [], R[I].real = true, E = 0, J = C[I].length; E < J; E++)
                          for (R[I][E] = [C[I][E][0]], ot = 1, ct = C[I][E].length; ot < ct; ot++)
                            R[I][E][ot] = (F[I][E][ot] - C[I][E][ot]) / S;
                      else {
                        var Rt = e.matrix || new te(), Vt = { _: { transform: pe.transform }, getBBox: function() {
                          return e.getBBox(1);
                        } };
                        C[I] = [Rt.a, Rt.b, Rt.c, Rt.d, Rt.e, Rt.f], Ge(Vt, F[I]), F[I] = Vt._.transform, R[I] = [(Vt.matrix.a - Rt.a) / S, (Vt.matrix.b - Rt.b) / S, (Vt.matrix.c - Rt.c) / S, (Vt.matrix.d - Rt.d) / S, (Vt.matrix.e - Rt.e) / S, (Vt.matrix.f - Rt.f) / S];
                      }
                      break;
                    case "csv":
                      var de = L(p[I])[Z](et), ge = L(C[I])[Z](et);
                      if (I == "clip-rect")
                        for (C[I] = ge, R[I] = [], E = ge.length; E--; )
                          R[I][E] = (de[E] - C[I][E]) / S;
                      F[I] = de;
                      break;
                    default:
                      for (de = [][Y](p[I]), ge = [][Y](C[I]), R[I] = [], E = e.paper.customAttributes[I].length; E--; )
                        R[I][E] = ((de[E] || 0) - (ge[E] || 0)) / S;
                  }
              var Ee = p.easing, Gt = h.easing_formulas[Ee];
              if (!Gt)
                if ((Gt = L(Ee).match(s)) && Gt.length == 5) {
                  var ie = Gt;
                  Gt = function(Me) {
                    return vi(Me, +ie[1], +ie[2], +ie[3], +ie[4], S);
                  };
                } else
                  Gt = bt;
              if (O = { anim: t, percent: i, timestamp: N = p.start || t.start || +/* @__PURE__ */ new Date(), start: N + (t.del || 0), status: 0, initstatus: r || 0, stop: false, ms: S, easing: Gt, from: C, diff: R, to: F, el: e, callback: p.callback, prev: A, next: m, repeat: l || t.times, origin: e.attr(), totalOrigin: n }, vt.push(O), r && !f && !d && (O.stop = true, O.start = /* @__PURE__ */ new Date() - S * r, vt.length == 1))
                return je();
              d && (O.start = /* @__PURE__ */ new Date() - O.ms * r), vt.length == 1 && We(je);
            }
            a("raphael.anim.start." + e.id, e, t);
          }
        }
        function Ke(t) {
          for (var e = 0; e < vt.length; e++)
            vt[e].el.paper == t && vt.splice(e--, 1);
        }
        _t.animateWith = function(t, e, i, r, n, l) {
          if (this.removed)
            return l && l.call(this), this;
          var p = i instanceof qt ? i : h.animation(i, r, n, l);
          we(p, this, p.percents[0], null, this.attr());
          for (var f = 0, d = vt.length; f < d; f++)
            if (vt[f].anim == e && vt[f].el == t) {
              vt[d - 1].start = vt[f].start;
              break;
            }
          return this;
        }, _t.onAnimation = function(t) {
          return t ? a.on("raphael.anim.frame." + this.id, t) : a.unbind("raphael.anim.frame." + this.id), this;
        }, qt.prototype.delay = function(t) {
          var e = new qt(this.anim, this.ms);
          return e.times = this.times, e.del = +t || 0, e;
        }, qt.prototype.repeat = function(t) {
          var e = new qt(this.anim, this.ms);
          return e.del = this.del, e.times = U.floor(nt(t, 0)) || 1, e;
        }, h.animation = function(t, e, i, r) {
          if (t instanceof qt)
            return t;
          !h.is(i, "function") && i || (r = r || i || null, i = null), t = Object(t), e = +e || 0;
          var n, l, p = {};
          for (l in t)
            t[K](l) && x(l) != l && x(l) + "%" != l && (n = true, p[l] = t[l]);
          if (n)
            return i && (p.easing = i), r && (p.callback = r), new qt({ 100: p }, e);
          if (r) {
            var f = 0;
            for (var d in t) {
              var m = w(d);
              t[K](d) && m > f && (f = m);
            }
            !t[f += "%"].callback && (t[f].callback = r);
          }
          return new qt(t, e);
        }, _t.animate = function(t, e, i, r) {
          if (this.removed)
            return r && r.call(this), this;
          var n = t instanceof qt ? t : h.animation(t, e, i, r);
          return we(n, this, n.percents[0], null, this.attr()), this;
        }, _t.setTime = function(t, e) {
          return t && e != null && this.status(t, it(e, t.ms) / t.ms), this;
        }, _t.status = function(t, e) {
          var i, r, n = [], l = 0;
          if (e != null)
            return we(t, this, -1, it(e, 1)), this;
          for (i = vt.length; l < i; l++)
            if ((r = vt[l]).el.id == this.id && (!t || r.anim == t)) {
              if (t)
                return r.status;
              n.push({ anim: r.anim, status: r.status });
            }
          return t ? 0 : n;
        }, _t.pause = function(t) {
          for (var e = 0; e < vt.length; e++)
            vt[e].el.id != this.id || t && vt[e].anim != t || a("raphael.anim.pause." + this.id, this, vt[e].anim) !== false && (vt[e].paused = true);
          return this;
        }, _t.resume = function(t) {
          for (var e = 0; e < vt.length; e++)
            if (vt[e].el.id == this.id && (!t || vt[e].anim == t)) {
              var i = vt[e];
              a("raphael.anim.resume." + this.id, this, i.anim) !== false && (delete i.paused, this.status(i.anim, i.status));
            }
          return this;
        }, _t.stop = function(t) {
          for (var e = 0; e < vt.length; e++)
            vt[e].el.id != this.id || t && vt[e].anim != t || a("raphael.anim.stop." + this.id, this, vt[e].anim) !== false && vt.splice(e--, 1);
          return this;
        }, a.on("raphael.remove", Ke), a.on("raphael.clear", Ke), _t.toString = function() {
          return "Raphaël’s object";
        };
        var ti, ei, ee, ii, ke = function(t) {
          if (this.items = [], this.length = 0, this.type = "set", t)
            for (var e = 0, i = t.length; e < i; e++)
              !t[e] || t[e].constructor != _t.constructor && t[e].constructor != ke || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++);
        }, Ot = ke.prototype;
        for (var De in Ot.push = function() {
          for (var t, e, i = 0, r = arguments.length; i < r; i++)
            !(t = arguments[i]) || t.constructor != _t.constructor && t.constructor != ke || (this[e = this.items.length] = this.items[e] = t, this.length++);
          return this;
        }, Ot.pop = function() {
          return this.length && delete this[this.length--], this.items.pop();
        }, Ot.forEach = function(t, e) {
          for (var i = 0, r = this.items.length; i < r; i++)
            if (t.call(e, this.items[i], i) === false)
              return this;
          return this;
        }, _t)
          _t[K](De) && (Ot[De] = function(t) {
            return function() {
              var e = arguments;
              return this.forEach(function(i) {
                i[t][W](i, e);
              });
            };
          }(De));
        return Ot.attr = function(t, e) {
          if (t && h.is(t, gt) && h.is(t[0], "object"))
            for (var i = 0, r = t.length; i < r; i++)
              this.items[i].attr(t[i]);
          else
            for (var n = 0, l = this.items.length; n < l; n++)
              this.items[n].attr(t, e);
          return this;
        }, Ot.clear = function() {
          for (; this.length; )
            this.pop();
        }, Ot.splice = function(t, e, i) {
          t = t < 0 ? nt(this.length + t, 0) : t, e = nt(0, it(this.length - t, e));
          var r, n = [], l = [], p = [];
          for (r = 2; r < arguments.length; r++)
            p.push(arguments[r]);
          for (r = 0; r < e; r++)
            l.push(this[t + r]);
          for (; r < this.length - t; r++)
            n.push(this[t + r]);
          var f = p.length;
          for (r = 0; r < f + n.length; r++)
            this.items[t + r] = this[t + r] = r < f ? p[r] : n[r - f];
          for (r = this.items.length = this.length -= e - f; this[r]; )
            delete this[r++];
          return new ke(l);
        }, Ot.exclude = function(t) {
          for (var e = 0, i = this.length; e < i; e++)
            if (this[e] == t)
              return this.splice(e, 1), true;
        }, Ot.animate = function(t, e, i, r) {
          (h.is(i, "function") || !i) && (r = i || null);
          var n, l, p = this.items.length, f = p, d = this;
          if (!p)
            return this;
          r && (l = function() {
            !--p && r.call(d);
          }), i = h.is(i, "string") ? i : l;
          var m = h.animation(t, e, i, l);
          for (n = this.items[--f].animate(m); f--; )
            this.items[f] && !this.items[f].removed && this.items[f].animateWith(n, m, m), this.items[f] && !this.items[f].removed || p--;
          return this;
        }, Ot.insertAfter = function(t) {
          for (var e = this.items.length; e--; )
            this.items[e].insertAfter(t);
          return this;
        }, Ot.getBBox = function() {
          for (var t = [], e = [], i = [], r = [], n = this.items.length; n--; )
            if (!this.items[n].removed) {
              var l = this.items[n].getBBox();
              t.push(l.x), e.push(l.y), i.push(l.x + l.width), r.push(l.y + l.height);
            }
          return { x: t = it[W](0, t), y: e = it[W](0, e), x2: i = nt[W](0, i), y2: r = nt[W](0, r), width: i - t, height: r - e };
        }, Ot.clone = function(t) {
          t = this.paper.set();
          for (var e = 0, i = this.items.length; e < i; e++)
            t.push(this.items[e].clone());
          return t;
        }, Ot.toString = function() {
          return "Raphaël‘s set";
        }, Ot.glow = function(t) {
          var e = this.paper.set();
          return this.forEach(function(i, r) {
            var n = i.glow(t);
            n != null && n.forEach(function(l, p) {
              e.push(l);
            });
          }), e;
        }, Ot.isPointInside = function(t, e) {
          var i = false;
          return this.forEach(function(r) {
            if (r.isPointInside(t, e))
              return i = true, false;
          }), i;
        }, h.registerFont = function(t) {
          if (!t.face)
            return t;
          this.fonts = this.fonts || {};
          var e = { w: t.w, face: {}, glyphs: {} }, i = t.face["font-family"];
          for (var r in t.face)
            t.face[K](r) && (e.face[r] = t.face[r]);
          if (this.fonts[i] ? this.fonts[i].push(e) : this.fonts[i] = [e], !t.svg) {
            for (var n in e.face["units-per-em"] = w(t.face["units-per-em"], 10), t.glyphs)
              if (t.glyphs[K](n)) {
                var l = t.glyphs[n];
                if (e.glyphs[n] = { w: l.w, k: {}, d: l.d && "M" + l.d.replace(/[mlcxtrv]/g, function(f) {
                  return { l: "L", c: "C", x: "z", t: "m", r: "l", v: "c" }[f] || "M";
                }) + "z" }, l.k)
                  for (var p in l.k)
                    l[K](p) && (e.glyphs[n].k[p] = l.k[p]);
              }
          }
          return t;
        }, D.getFont = function(t, e, i, r) {
          if (r = r || "normal", i = i || "normal", e = +e || { normal: 400, bold: 700, lighter: 300, bolder: 800 }[e] || 400, h.fonts) {
            var n, l = h.fonts[t];
            if (!l) {
              var p = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, tt) + "(\\s|$)", "i");
              for (var f in h.fonts)
                if (h.fonts[K](f) && p.test(f)) {
                  l = h.fonts[f];
                  break;
                }
            }
            if (l)
              for (var d = 0, m = l.length; d < m && ((n = l[d]).face["font-weight"] != e || n.face["font-style"] != i && n.face["font-style"] || n.face["font-stretch"] != r); d++)
                ;
            return n;
          }
        }, D.print = function(t, e, i, r, n, l, p, f) {
          l = l || "middle", p = nt(it(p || 0, 1), -1), f = nt(it(f || 1, 3), 1);
          var d, m = L(i)[Z](tt), A = 0, N = 0, S = tt;
          if (h.is(r, "string") && (r = this.getFont(r)), r) {
            d = (n || 16) / r.face["units-per-em"];
            for (var C = r.face.bbox[Z](et), F = +C[0], R = C[3] - C[1], O = 0, E = +C[1] + (l == "baseline" ? R + +r.face.descent : R / 2), J = 0, I = m.length; J < I; J++) {
              if (m[J] == `
`)
                A = 0, j = 0, N = 0, O += R * f;
              else {
                var G = N && r.glyphs[m[J - 1]] || {}, j = r.glyphs[m[J]];
                A += N ? (G.w || r.w) + (G.k && G.k[m[J]] || 0) + r.w * p : 0, N = 1;
              }
              j && j.d && (S += h.transformPath(j.d, ["t", A * d, O * d, "s", d, d, F, E, "t", (t - F) / d, (e - E) / d]));
            }
          }
          return this.path(S).attr({ fill: "#000", stroke: "none" });
        }, D.add = function(t) {
          if (h.is(t, "array"))
            for (var e, i = this.set(), r = 0, n = t.length; r < n; r++)
              e = t[r] || {}, P[K](e.type) && i.push(this[e.type]().attr(e));
          return i;
        }, h.format = function(t, e) {
          var i = h.is(e, gt) ? [0][Y](e) : arguments;
          return t && h.is(t, "string") && i.length - 1 && (t = t.replace(dt, function(r, n) {
            return i[++n] == null ? tt : i[n];
          })), t || tt;
        }, h.fullfill = (ti = /\{([^\}]+)\}/g, ei = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, function(t, e) {
          return String(t).replace(ti, function(i, r) {
            return function(n, l, p) {
              var f = p;
              return l.replace(ei, function(d, m, A, N, S) {
                m = m || N, f && (m in f && (f = f[m]), typeof f == "function" && S && (f = f()));
              }), f = (f == null || f == p ? n : f) + "";
            }(i, r, e);
          });
        }), h.ninja = function() {
          if (wt.was)
            Q.win.Raphael = wt.is;
          else {
            window.Raphael = void 0;
            try {
              delete window.Raphael;
            } catch {
            }
          }
          return h;
        }, h.st = Ot, a.on("raphael.DOMload", function() {
          T = true;
        }), (ee = document).readyState == null && ee.addEventListener && (ee.addEventListener("DOMContentLoaded", ii = function() {
          ee.removeEventListener("DOMContentLoaded", ii, false), ee.readyState = "complete";
        }, false), ee.readyState = "loading"), function t() {
          /in/.test(ee.readyState) ? setTimeout(t, 9) : h.eve("raphael.DOMload");
        }(), h;
      }.apply(k, v)) === void 0 || (g.exports = b);
    }, function(g, k, z) {
      var v, b;
      v = [z(0), z(3), z(4)], (b = function(a) {
        return a;
      }.apply(k, v)) === void 0 || (g.exports = b);
    }, function(g, k, z) {
      var v, b, a, h, T, D, et, P, dt, K, Q, wt, Et, W;
      h = "hasOwnProperty", T = /[\.\/]/, D = /\s*,\s*/, et = function(Y, ht) {
        return Y - ht;
      }, P = { n: {} }, dt = function() {
        for (var Y = 0, ht = this.length; Y < ht; Y++)
          if (this[Y] !== void 0)
            return this[Y];
      }, K = function() {
        for (var Y = this.length; --Y; )
          if (this[Y] !== void 0)
            return this[Y];
      }, Q = Object.prototype.toString, wt = String, Et = Array.isArray || function(Y) {
        return Y instanceof Array || Q.call(Y) == "[object Array]";
      }, (W = function(Y, ht) {
        var tt, q = a, L = Array.prototype.slice.call(arguments, 2), Z = W.listeners(Y), X = 0, xt = [], st = {}, U = [], nt = b;
        U.firstDefined = dt, U.lastDefined = K, b = Y, a = 0;
        for (var it = 0, yt = Z.length; it < yt; it++)
          "zIndex" in Z[it] && (xt.push(Z[it].zIndex), Z[it].zIndex < 0 && (st[Z[it].zIndex] = Z[it]));
        for (xt.sort(et); xt[X] < 0; )
          if (tt = st[xt[X++]], U.push(tt.apply(ht, L)), a)
            return a = q, U;
        for (it = 0; it < yt; it++)
          if ("zIndex" in (tt = Z[it]))
            if (tt.zIndex == xt[X]) {
              if (U.push(tt.apply(ht, L)), a)
                break;
              do
                if ((tt = st[xt[++X]]) && U.push(tt.apply(ht, L)), a)
                  break;
              while (tt);
            } else
              st[tt.zIndex] = tt;
          else if (U.push(tt.apply(ht, L)), a)
            break;
        return a = q, b = nt, U;
      })._events = P, W.listeners = function(Y) {
        var ht, tt, q, L, Z, X, xt, st, U = Et(Y) ? Y : Y.split(T), nt = P, it = [nt], yt = [];
        for (L = 0, Z = U.length; L < Z; L++) {
          for (st = [], X = 0, xt = it.length; X < xt; X++)
            for (tt = [(nt = it[X].n)[U[L]], nt["*"]], q = 2; q--; )
              (ht = tt[q]) && (st.push(ht), yt = yt.concat(ht.f || []));
          it = st;
        }
        return yt;
      }, W.separator = function(Y) {
        Y ? (Y = "[" + (Y = wt(Y).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]", T = new RegExp(Y)) : T = /[\.\/]/;
      }, W.on = function(Y, ht) {
        if (typeof ht != "function")
          return function() {
          };
        for (var tt = Et(Y) ? Et(Y[0]) ? Y : [Y] : wt(Y).split(D), q = 0, L = tt.length; q < L; q++)
          (function(Z) {
            for (var X, xt = Et(Z) ? Z : wt(Z).split(T), st = P, U = 0, nt = xt.length; U < nt; U++)
              st = (st = st.n).hasOwnProperty(xt[U]) && st[xt[U]] || (st[xt[U]] = { n: {} });
            for (st.f = st.f || [], U = 0, nt = st.f.length; U < nt; U++)
              if (st.f[U] == ht) {
                X = true;
                break;
              }
            !X && st.f.push(ht);
          })(tt[q]);
        return function(Z) {
          +Z == +Z && (ht.zIndex = +Z);
        };
      }, W.f = function(Y) {
        var ht = [].slice.call(arguments, 1);
        return function() {
          W.apply(null, [Y, null].concat(ht).concat([].slice.call(arguments, 0)));
        };
      }, W.stop = function() {
        a = 1;
      }, W.nt = function(Y) {
        var ht = Et(b) ? b.join(".") : b;
        return Y ? new RegExp("(?:\\.|\\/|^)" + Y + "(?:\\.|\\/|$)").test(ht) : ht;
      }, W.nts = function() {
        return Et(b) ? b : b.split(T);
      }, W.off = W.unbind = function(Y, ht) {
        if (Y) {
          var tt = Et(Y) ? Et(Y[0]) ? Y : [Y] : wt(Y).split(D);
          if (tt.length > 1)
            for (var q = 0, L = tt.length; q < L; q++)
              W.off(tt[q], ht);
          else {
            tt = Et(Y) ? Y : wt(Y).split(T);
            var Z, X, xt, st, U, nt = [P];
            for (q = 0, L = tt.length; q < L; q++)
              for (st = 0; st < nt.length; st += xt.length - 2) {
                if (xt = [st, 1], Z = nt[st].n, tt[q] != "*")
                  Z[tt[q]] && xt.push(Z[tt[q]]);
                else
                  for (X in Z)
                    Z[h](X) && xt.push(Z[X]);
                nt.splice.apply(nt, xt);
              }
            for (q = 0, L = nt.length; q < L; q++)
              for (Z = nt[q]; Z.n; ) {
                if (ht) {
                  if (Z.f) {
                    for (st = 0, U = Z.f.length; st < U; st++)
                      if (Z.f[st] == ht) {
                        Z.f.splice(st, 1);
                        break;
                      }
                    !Z.f.length && delete Z.f;
                  }
                  for (X in Z.n)
                    if (Z.n[h](X) && Z.n[X].f) {
                      var it = Z.n[X].f;
                      for (st = 0, U = it.length; st < U; st++)
                        if (it[st] == ht) {
                          it.splice(st, 1);
                          break;
                        }
                      !it.length && delete Z.n[X].f;
                    }
                } else
                  for (X in delete Z.f, Z.n)
                    Z.n[h](X) && Z.n[X].f && delete Z.n[X].f;
                Z = Z.n;
              }
          }
        } else
          W._events = P = { n: {} };
      }, W.once = function(Y, ht) {
        var tt = function() {
          return W.off(Y, tt), ht.apply(this, arguments);
        };
        return W.on(Y, tt);
      }, W.version = "0.5.0", W.toString = function() {
        return "You are running Eve 0.5.0";
      }, g.exports ? g.exports = W : (v = function() {
        return W;
      }.apply(k, [])) === void 0 || (g.exports = v);
    }, function(g, k, z) {
      var v, b;
      v = [z(0)], (b = function(a) {
        if (!a || a.svg) {
          var h = "hasOwnProperty", T = String, D = parseFloat, et = parseInt, P = Math, dt = P.max, K = P.abs, Q = P.pow, wt = /[, ]+/, Et = a.eve, W = "", Y = " ", ht = "http://www.w3.org/1999/xlink", tt = { block: "M5,0 0,2.5 5,5z", classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z", diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z", open: "M6,1 1,3.5 6,6", oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z" }, q = {};
          a.toString = function() {
            return `Your browser supports SVG.
You are running Raphaël ` + this.version;
          };
          var L = function(c, o) {
            if (o)
              for (var s in typeof c == "string" && (c = L(c)), o)
                o[h](s) && (s.substring(0, 6) == "xlink:" ? c.setAttributeNS(ht, s.substring(6), T(o[s])) : c.setAttribute(s, T(o[s])));
            else
              (c = a._g.doc.createElementNS("http://www.w3.org/2000/svg", c)).style && (c.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
            return c;
          }, Z = function(c, o) {
            var s = "linear", u = c.id + o, x = 0.5, w = 0.5, _ = c.node, M = c.paper, B = _.style, V = a._g.doc.getElementById(u);
            if (!V) {
              if (o = (o = T(o).replace(a._radial_gradient, function(Bt, bt, at) {
                if (s = "radial", bt && at) {
                  x = D(bt);
                  var St = 2 * ((w = D(at)) > 0.5) - 1;
                  Q(x - 0.5, 2) + Q(w - 0.5, 2) > 0.25 && (w = P.sqrt(0.25 - Q(x - 0.5, 2)) * St + 0.5) && w != 0.5 && (w = w.toFixed(5) - 1e-5 * St);
                }
                return W;
              })).split(/\s*\-\s*/), s == "linear") {
                var H = o.shift();
                if (H = -D(H), isNaN(H))
                  return null;
                var rt = [0, 0, P.cos(a.rad(H)), P.sin(a.rad(H))], ft = 1 / (dt(K(rt[2]), K(rt[3])) || 1);
                rt[2] *= ft, rt[3] *= ft, rt[2] < 0 && (rt[0] = -rt[2], rt[2] = 0), rt[3] < 0 && (rt[1] = -rt[3], rt[3] = 0);
              }
              var mt = a._parseDots(o);
              if (!mt)
                return null;
              if (u = u.replace(/[\(\)\s,\xb0#]/g, "_"), c.gradient && u != c.gradient.id && (M.defs.removeChild(c.gradient), delete c.gradient), !c.gradient) {
                V = L(s + "Gradient", { id: u }), c.gradient = V, L(V, s == "radial" ? { fx: x, fy: w } : { x1: rt[0], y1: rt[1], x2: rt[2], y2: rt[3], gradientTransform: c.matrix.invert() }), M.defs.appendChild(V);
                for (var pt = 0, kt = mt.length; pt < kt; pt++)
                  V.appendChild(L("stop", { offset: mt[pt].offset ? mt[pt].offset : pt ? "100%" : "0%", "stop-color": mt[pt].color || "#fff", "stop-opacity": isFinite(mt[pt].opacity) ? mt[pt].opacity : 1 }));
              }
            }
            return L(_, { fill: X(u), opacity: 1, "fill-opacity": 1 }), B.fill = W, B.opacity = 1, B.fillOpacity = 1, 1;
          }, X = function(c) {
            if ((o = document.documentMode) && (o === 9 || o === 10))
              return "url('#" + c + "')";
            var o, s = document.location;
            return "url('" + (s.protocol + "//" + s.host + s.pathname + s.search) + "#" + c + "')";
          }, xt = function(c) {
            var o = c.getBBox(1);
            L(c.pattern, { patternTransform: c.matrix.invert() + " translate(" + o.x + "," + o.y + ")" });
          }, st = function(c, o, s) {
            if (c.type == "path") {
              for (var u, x, w, _, M, B = T(o).toLowerCase().split("-"), V = c.paper, H = s ? "end" : "start", rt = c.node, ft = c.attrs, mt = ft["stroke-width"], pt = B.length, kt = "classic", Bt = 3, bt = 3, at = 5; pt--; )
                switch (B[pt]) {
                  case "block":
                  case "classic":
                  case "oval":
                  case "diamond":
                  case "open":
                  case "none":
                    kt = B[pt];
                    break;
                  case "wide":
                    bt = 5;
                    break;
                  case "narrow":
                    bt = 2;
                    break;
                  case "long":
                    Bt = 5;
                    break;
                  case "short":
                    Bt = 2;
                }
              if (kt == "open" ? (Bt += 2, bt += 2, at += 2, w = 1, _ = s ? 4 : 1, M = { fill: "none", stroke: ft.stroke }) : (_ = w = Bt / 2, M = { fill: ft.stroke, stroke: "none" }), c._.arrows ? s ? (c._.arrows.endPath && q[c._.arrows.endPath]--, c._.arrows.endMarker && q[c._.arrows.endMarker]--) : (c._.arrows.startPath && q[c._.arrows.startPath]--, c._.arrows.startMarker && q[c._.arrows.startMarker]--) : c._.arrows = {}, kt != "none") {
                var St = "raphael-marker-" + kt, Mt = "raphael-marker-" + H + kt + Bt + bt + "-obj" + c.id;
                a._g.doc.getElementById(St) ? q[St]++ : (V.defs.appendChild(L(L("path"), { "stroke-linecap": "round", d: tt[kt], id: St })), q[St] = 1);
                var Pt, Ct = a._g.doc.getElementById(Mt);
                Ct ? (q[Mt]++, Pt = Ct.getElementsByTagName("use")[0]) : (Ct = L(L("marker"), { id: Mt, markerHeight: bt, markerWidth: Bt, orient: "auto", refX: _, refY: bt / 2 }), Pt = L(L("use"), { "xlink:href": "#" + St, transform: (s ? "rotate(180 " + Bt / 2 + " " + bt / 2 + ") " : W) + "scale(" + Bt / at + "," + bt / at + ")", "stroke-width": (1 / ((Bt / at + bt / at) / 2)).toFixed(4) }), Ct.appendChild(Pt), V.defs.appendChild(Ct), q[Mt] = 1), L(Pt, M);
                var It = w * (kt != "diamond" && kt != "oval");
                s ? (u = c._.arrows.startdx * mt || 0, x = a.getTotalLength(ft.path) - It * mt) : (u = It * mt, x = a.getTotalLength(ft.path) - (c._.arrows.enddx * mt || 0)), (M = {})["marker-" + H] = "url(#" + Mt + ")", (x || u) && (M.d = a.getSubpath(ft.path, u, x)), L(rt, M), c._.arrows[H + "Path"] = St, c._.arrows[H + "Marker"] = Mt, c._.arrows[H + "dx"] = It, c._.arrows[H + "Type"] = kt, c._.arrows[H + "String"] = o;
              } else
                s ? (u = c._.arrows.startdx * mt || 0, x = a.getTotalLength(ft.path) - u) : (u = 0, x = a.getTotalLength(ft.path) - (c._.arrows.enddx * mt || 0)), c._.arrows[H + "Path"] && L(rt, { d: a.getSubpath(ft.path, u, x) }), delete c._.arrows[H + "Path"], delete c._.arrows[H + "Marker"], delete c._.arrows[H + "dx"], delete c._.arrows[H + "Type"], delete c._.arrows[H + "String"];
              for (M in q)
                if (q[h](M) && !q[M]) {
                  var Xt = a._g.doc.getElementById(M);
                  Xt && Xt.parentNode.removeChild(Xt);
                }
            }
          }, U = { "-": [3, 1], ".": [1, 1], "-.": [3, 1, 1, 1], "-..": [3, 1, 1, 1, 1, 1], ". ": [1, 3], "- ": [4, 3], "--": [8, 3], "- .": [4, 3, 1, 3], "--.": [8, 3, 1, 3], "--..": [8, 3, 1, 3, 1, 3] }, nt = function(c, o, s) {
            if (o = U[T(o).toLowerCase()]) {
              for (var u = c.attrs["stroke-width"] || "1", x = { round: u, square: u, butt: 0 }[c.attrs["stroke-linecap"] || s["stroke-linecap"]] || 0, w = [], _ = o.length; _--; )
                w[_] = o[_] * u + (_ % 2 ? 1 : -1) * x;
              L(c.node, { "stroke-dasharray": w.join(",") });
            } else
              L(c.node, { "stroke-dasharray": "none" });
          }, it = function(c, o) {
            var s = c.node, u = c.attrs, x = s.style.visibility;
            for (var w in s.style.visibility = "hidden", o)
              if (o[h](w)) {
                if (!a._availableAttrs[h](w))
                  continue;
                var _ = o[w];
                switch (u[w] = _, w) {
                  case "blur":
                    c.blur(_);
                    break;
                  case "title":
                    var M = s.getElementsByTagName("title");
                    if (M.length && (M = M[0]))
                      M.firstChild.nodeValue = _;
                    else {
                      M = L("title");
                      var B = a._g.doc.createTextNode(_);
                      M.appendChild(B), s.appendChild(M);
                    }
                    break;
                  case "href":
                  case "target":
                    var V = s.parentNode;
                    if (V.tagName.toLowerCase() != "a") {
                      var H = L("a");
                      V.insertBefore(H, s), H.appendChild(s), V = H;
                    }
                    w == "target" ? V.setAttributeNS(ht, "show", _ == "blank" ? "new" : _) : V.setAttributeNS(ht, w, _);
                    break;
                  case "cursor":
                    s.style.cursor = _;
                    break;
                  case "transform":
                    c.transform(_);
                    break;
                  case "arrow-start":
                    st(c, _);
                    break;
                  case "arrow-end":
                    st(c, _, 1);
                    break;
                  case "clip-rect":
                    var rt = T(_).split(wt);
                    if (rt.length == 4) {
                      c.clip && c.clip.parentNode.parentNode.removeChild(c.clip.parentNode);
                      var ft = L("clipPath"), mt = L("rect");
                      ft.id = a.createUUID(), L(mt, { x: rt[0], y: rt[1], width: rt[2], height: rt[3] }), ft.appendChild(mt), c.paper.defs.appendChild(ft), L(s, { "clip-path": "url(#" + ft.id + ")" }), c.clip = mt;
                    }
                    if (!_) {
                      var pt = s.getAttribute("clip-path");
                      if (pt) {
                        var kt = a._g.doc.getElementById(pt.replace(/(^url\(#|\)$)/g, W));
                        kt && kt.parentNode.removeChild(kt), L(s, { "clip-path": W }), delete c.clip;
                      }
                    }
                    break;
                  case "path":
                    c.type == "path" && (L(s, { d: _ ? u.path = a._pathToAbsolute(_) : "M0,0" }), c._.dirty = 1, c._.arrows && ("startString" in c._.arrows && st(c, c._.arrows.startString), "endString" in c._.arrows && st(c, c._.arrows.endString, 1)));
                    break;
                  case "width":
                    if (s.setAttribute(w, _), c._.dirty = 1, !u.fx)
                      break;
                    w = "x", _ = u.x;
                  case "x":
                    u.fx && (_ = -u.x - (u.width || 0));
                  case "rx":
                    if (w == "rx" && c.type == "rect")
                      break;
                  case "cx":
                    s.setAttribute(w, _), c.pattern && xt(c), c._.dirty = 1;
                    break;
                  case "height":
                    if (s.setAttribute(w, _), c._.dirty = 1, !u.fy)
                      break;
                    w = "y", _ = u.y;
                  case "y":
                    u.fy && (_ = -u.y - (u.height || 0));
                  case "ry":
                    if (w == "ry" && c.type == "rect")
                      break;
                  case "cy":
                    s.setAttribute(w, _), c.pattern && xt(c), c._.dirty = 1;
                    break;
                  case "r":
                    c.type == "rect" ? L(s, { rx: _, ry: _ }) : s.setAttribute(w, _), c._.dirty = 1;
                    break;
                  case "src":
                    c.type == "image" && s.setAttributeNS(ht, "href", _);
                    break;
                  case "stroke-width":
                    c._.sx == 1 && c._.sy == 1 || (_ /= dt(K(c._.sx), K(c._.sy)) || 1), s.setAttribute(w, _), u["stroke-dasharray"] && nt(c, u["stroke-dasharray"], o), c._.arrows && ("startString" in c._.arrows && st(c, c._.arrows.startString), "endString" in c._.arrows && st(c, c._.arrows.endString, 1));
                    break;
                  case "stroke-dasharray":
                    nt(c, _, o);
                    break;
                  case "fill":
                    var Bt = T(_).match(a._ISURL);
                    if (Bt) {
                      ft = L("pattern");
                      var bt = L("image");
                      ft.id = a.createUUID(), L(ft, { x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1 }), L(bt, { x: 0, y: 0, "xlink:href": Bt[1] }), ft.appendChild(bt), function(Ct) {
                        a._preload(Bt[1], function() {
                          var It = this.offsetWidth, Xt = this.offsetHeight;
                          L(Ct, { width: It, height: Xt }), L(bt, { width: It, height: Xt });
                        });
                      }(ft), c.paper.defs.appendChild(ft), L(s, { fill: "url(#" + ft.id + ")" }), c.pattern = ft, c.pattern && xt(c);
                      break;
                    }
                    var at = a.getRGB(_);
                    if (at.error) {
                      if ((c.type == "circle" || c.type == "ellipse" || T(_).charAt() != "r") && Z(c, _)) {
                        if ("opacity" in u || "fill-opacity" in u) {
                          var St = a._g.doc.getElementById(s.getAttribute("fill").replace(/^url\(#|\)$/g, W));
                          if (St) {
                            var Mt = St.getElementsByTagName("stop");
                            L(Mt[Mt.length - 1], { "stop-opacity": ("opacity" in u ? u.opacity : 1) * ("fill-opacity" in u ? u["fill-opacity"] : 1) });
                          }
                        }
                        u.gradient = _, u.fill = "none";
                        break;
                      }
                    } else
                      delete o.gradient, delete u.gradient, !a.is(u.opacity, "undefined") && a.is(o.opacity, "undefined") && L(s, { opacity: u.opacity }), !a.is(u["fill-opacity"], "undefined") && a.is(o["fill-opacity"], "undefined") && L(s, { "fill-opacity": u["fill-opacity"] });
                    at[h]("opacity") && L(s, { "fill-opacity": at.opacity > 1 ? at.opacity / 100 : at.opacity });
                  case "stroke":
                    at = a.getRGB(_), s.setAttribute(w, at.hex), w == "stroke" && at[h]("opacity") && L(s, { "stroke-opacity": at.opacity > 1 ? at.opacity / 100 : at.opacity }), w == "stroke" && c._.arrows && ("startString" in c._.arrows && st(c, c._.arrows.startString), "endString" in c._.arrows && st(c, c._.arrows.endString, 1));
                    break;
                  case "gradient":
                    (c.type == "circle" || c.type == "ellipse" || T(_).charAt() != "r") && Z(c, _);
                    break;
                  case "opacity":
                    u.gradient && !u[h]("stroke-opacity") && L(s, { "stroke-opacity": _ > 1 ? _ / 100 : _ });
                  case "fill-opacity":
                    if (u.gradient) {
                      (St = a._g.doc.getElementById(s.getAttribute("fill").replace(/^url\(#|\)$/g, W))) && (Mt = St.getElementsByTagName("stop"), L(Mt[Mt.length - 1], { "stop-opacity": _ }));
                      break;
                    }
                  default:
                    w == "font-size" && (_ = et(_, 10) + "px");
                    var Pt = w.replace(/(\-.)/g, function(Ct) {
                      return Ct.substring(1).toUpperCase();
                    });
                    s.style[Pt] = _, c._.dirty = 1, s.setAttribute(w, _);
                }
              }
            yt(c, o), s.style.visibility = x;
          }, yt = function(c, o) {
            if (c.type == "text" && (o[h]("text") || o[h]("font") || o[h]("font-size") || o[h]("x") || o[h]("y"))) {
              var s = c.attrs, u = c.node, x = u.firstChild ? et(a._g.doc.defaultView.getComputedStyle(u.firstChild, W).getPropertyValue("font-size"), 10) : 10;
              if (o[h]("text")) {
                for (s.text = o.text; u.firstChild; )
                  u.removeChild(u.firstChild);
                for (var w, _ = T(o.text).split(`
`), M = [], B = 0, V = _.length; B < V; B++)
                  w = L("tspan"), B && L(w, { dy: 1.2 * x, x: s.x }), w.appendChild(a._g.doc.createTextNode(_[B])), u.appendChild(w), M[B] = w;
              } else
                for (B = 0, V = (M = u.getElementsByTagName("tspan")).length; B < V; B++)
                  B ? L(M[B], { dy: 1.2 * x, x: s.x }) : L(M[0], { dy: 0 });
              L(u, { x: s.x, y: s.y }), c._.dirty = 1;
              var H = c._getBBox(), rt = s.y - (H.y + H.height / 2);
              rt && a.is(rt, "finite") && L(M[0], { dy: rt });
            }
          }, Lt = function(c) {
            return c.parentNode && c.parentNode.tagName.toLowerCase() === "a" ? c.parentNode : c;
          }, At = function(c, o) {
            this[0] = this.node = c, c.raphael = true, this.id = ("0000" + (Math.random() * Math.pow(36, 5) << 0).toString(36)).slice(-5), c.raphaelid = this.id, this.matrix = a.matrix(), this.realPath = null, this.paper = o, this.attrs = this.attrs || {}, this._ = { transform: [], sx: 1, sy: 1, deg: 0, dx: 0, dy: 0, dirty: 1 }, !o.bottom && (o.bottom = this), this.prev = o.top, o.top && (o.top.next = this), o.top = this, this.next = null;
          }, ut = a.el;
          At.prototype = ut, ut.constructor = At, a._engine.path = function(c, o) {
            var s = L("path");
            o.canvas && o.canvas.appendChild(s);
            var u = new At(s, o);
            return u.type = "path", it(u, { fill: "none", stroke: "#000", path: c }), u;
          }, ut.rotate = function(c, o, s) {
            if (this.removed)
              return this;
            if ((c = T(c).split(wt)).length - 1 && (o = D(c[1]), s = D(c[2])), c = D(c[0]), s == null && (o = s), o == null || s == null) {
              var u = this.getBBox(1);
              o = u.x + u.width / 2, s = u.y + u.height / 2;
            }
            return this.transform(this._.transform.concat([["r", c, o, s]])), this;
          }, ut.scale = function(c, o, s, u) {
            if (this.removed)
              return this;
            if ((c = T(c).split(wt)).length - 1 && (o = D(c[1]), s = D(c[2]), u = D(c[3])), c = D(c[0]), o == null && (o = c), u == null && (s = u), s == null || u == null)
              var x = this.getBBox(1);
            return s = s ?? x.x + x.width / 2, u = u ?? x.y + x.height / 2, this.transform(this._.transform.concat([["s", c, o, s, u]])), this;
          }, ut.translate = function(c, o) {
            return this.removed ? this : ((c = T(c).split(wt)).length - 1 && (o = D(c[1])), c = D(c[0]) || 0, o = +o || 0, this.transform(this._.transform.concat([["t", c, o]])), this);
          }, ut.transform = function(c) {
            var o = this._;
            if (c == null)
              return o.transform;
            if (a._extractTransform(this, c), this.clip && L(this.clip, { transform: this.matrix.invert() }), this.pattern && xt(this), this.node && L(this.node, { transform: this.matrix }), o.sx != 1 || o.sy != 1) {
              var s = this.attrs[h]("stroke-width") ? this.attrs["stroke-width"] : 1;
              this.attr({ "stroke-width": s });
            }
            return this;
          }, ut.hide = function() {
            return this.removed || (this.node.style.display = "none"), this;
          }, ut.show = function() {
            return this.removed || (this.node.style.display = ""), this;
          }, ut.remove = function() {
            var c = Lt(this.node);
            if (!this.removed && c.parentNode) {
              var o = this.paper;
              for (var s in o.__set__ && o.__set__.exclude(this), Et.unbind("raphael.*.*." + this.id), this.gradient && o.defs.removeChild(this.gradient), a._tear(this, o), c.parentNode.removeChild(c), this.removeData(), this)
                this[s] = typeof this[s] == "function" ? a._removedFactory(s) : null;
              this.removed = true;
            }
          }, ut._getBBox = function() {
            if (this.node.style.display == "none") {
              this.show();
              var c = true;
            }
            var o, s = false;
            this.paper.canvas.parentElement ? o = this.paper.canvas.parentElement.style : this.paper.canvas.parentNode && (o = this.paper.canvas.parentNode.style), o && o.display == "none" && (s = true, o.display = "");
            var u = {};
            try {
              u = this.node.getBBox();
            } catch {
              u = { x: this.node.clientLeft, y: this.node.clientTop, width: this.node.clientWidth, height: this.node.clientHeight };
            } finally {
              u = u || {}, s && (o.display = "none");
            }
            return c && this.hide(), u;
          }, ut.attr = function(c, o) {
            if (this.removed)
              return this;
            if (c == null) {
              var s = {};
              for (var u in this.attrs)
                this.attrs[h](u) && (s[u] = this.attrs[u]);
              return s.gradient && s.fill == "none" && (s.fill = s.gradient) && delete s.gradient, s.transform = this._.transform, s;
            }
            if (o == null && a.is(c, "string")) {
              if (c == "fill" && this.attrs.fill == "none" && this.attrs.gradient)
                return this.attrs.gradient;
              if (c == "transform")
                return this._.transform;
              for (var x = c.split(wt), w = {}, _ = 0, M = x.length; _ < M; _++)
                (c = x[_]) in this.attrs ? w[c] = this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? w[c] = this.paper.customAttributes[c].def : w[c] = a._availableAttrs[c];
              return M - 1 ? w : w[x[0]];
            }
            if (o == null && a.is(c, "array")) {
              for (w = {}, _ = 0, M = c.length; _ < M; _++)
                w[c[_]] = this.attr(c[_]);
              return w;
            }
            if (o != null) {
              var B = {};
              B[c] = o;
            } else
              c != null && a.is(c, "object") && (B = c);
            for (var V in B)
              Et("raphael.attr." + V + "." + this.id, this, B[V]);
            for (V in this.paper.customAttributes)
              if (this.paper.customAttributes[h](V) && B[h](V) && a.is(this.paper.customAttributes[V], "function")) {
                var H = this.paper.customAttributes[V].apply(this, [].concat(B[V]));
                for (var rt in this.attrs[V] = B[V], H)
                  H[h](rt) && (B[rt] = H[rt]);
              }
            return it(this, B), this;
          }, ut.toFront = function() {
            if (this.removed)
              return this;
            var c = Lt(this.node);
            c.parentNode.appendChild(c);
            var o = this.paper;
            return o.top != this && a._tofront(this, o), this;
          }, ut.toBack = function() {
            if (this.removed)
              return this;
            var c = Lt(this.node), o = c.parentNode;
            return o.insertBefore(c, o.firstChild), a._toback(this, this.paper), this.paper, this;
          }, ut.insertAfter = function(c) {
            if (this.removed || !c)
              return this;
            var o = Lt(this.node), s = Lt(c.node || c[c.length - 1].node);
            return s.nextSibling ? s.parentNode.insertBefore(o, s.nextSibling) : s.parentNode.appendChild(o), a._insertafter(this, c, this.paper), this;
          }, ut.insertBefore = function(c) {
            if (this.removed || !c)
              return this;
            var o = Lt(this.node), s = Lt(c.node || c[0].node);
            return s.parentNode.insertBefore(o, s), a._insertbefore(this, c, this.paper), this;
          }, ut.blur = function(c) {
            var o = this;
            if (+c != 0) {
              var s = L("filter"), u = L("feGaussianBlur");
              o.attrs.blur = c, s.id = a.createUUID(), L(u, { stdDeviation: +c || 1.5 }), s.appendChild(u), o.paper.defs.appendChild(s), o._blur = s, L(o.node, { filter: "url(#" + s.id + ")" });
            } else
              o._blur && (o._blur.parentNode.removeChild(o._blur), delete o._blur, delete o.attrs.blur), o.node.removeAttribute("filter");
            return o;
          }, a._engine.circle = function(c, o, s, u) {
            var x = L("circle");
            c.canvas && c.canvas.appendChild(x);
            var w = new At(x, c);
            return w.attrs = { cx: o, cy: s, r: u, fill: "none", stroke: "#000" }, w.type = "circle", L(x, w.attrs), w;
          }, a._engine.rect = function(c, o, s, u, x, w) {
            var _ = L("rect");
            c.canvas && c.canvas.appendChild(_);
            var M = new At(_, c);
            return M.attrs = { x: o, y: s, width: u, height: x, rx: w || 0, ry: w || 0, fill: "none", stroke: "#000" }, M.type = "rect", L(_, M.attrs), M;
          }, a._engine.ellipse = function(c, o, s, u, x) {
            var w = L("ellipse");
            c.canvas && c.canvas.appendChild(w);
            var _ = new At(w, c);
            return _.attrs = { cx: o, cy: s, rx: u, ry: x, fill: "none", stroke: "#000" }, _.type = "ellipse", L(w, _.attrs), _;
          }, a._engine.image = function(c, o, s, u, x, w) {
            var _ = L("image");
            L(_, { x: s, y: u, width: x, height: w, preserveAspectRatio: "none" }), _.setAttributeNS(ht, "href", o), c.canvas && c.canvas.appendChild(_);
            var M = new At(_, c);
            return M.attrs = { x: s, y: u, width: x, height: w, src: o }, M.type = "image", M;
          }, a._engine.text = function(c, o, s, u) {
            var x = L("text");
            c.canvas && c.canvas.appendChild(x);
            var w = new At(x, c);
            return w.attrs = { x: o, y: s, "text-anchor": "middle", text: u, "font-family": a._availableAttrs["font-family"], "font-size": a._availableAttrs["font-size"], stroke: "none", fill: "#000" }, w.type = "text", it(w, w.attrs), w;
          }, a._engine.setSize = function(c, o) {
            return this.width = c || this.width, this.height = o || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this;
          }, a._engine.create = function() {
            var c = a._getContainer.apply(0, arguments), o = c && c.container;
            if (!o)
              throw new Error("SVG container not found.");
            var s, u = c.x, x = c.y, w = c.width, _ = c.height, M = L("svg"), B = "overflow:hidden;";
            return u = u || 0, x = x || 0, L(M, { height: _ = _ || 342, version: 1.1, width: w = w || 512, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }), o == 1 ? (M.style.cssText = B + "position:absolute;left:" + u + "px;top:" + x + "px", a._g.doc.body.appendChild(M), s = 1) : (M.style.cssText = B + "position:relative", o.firstChild ? o.insertBefore(M, o.firstChild) : o.appendChild(M)), (o = new a._Paper()).width = w, o.height = _, o.canvas = M, o.clear(), o._left = o._top = 0, s && (o.renderfix = function() {
            }), o.renderfix(), o;
          }, a._engine.setViewBox = function(c, o, s, u, x) {
            Et("raphael.setViewBox", this, this._viewBox, [c, o, s, u, x]);
            var w, _, M = this.getSize(), B = dt(s / M.width, u / M.height), V = this.top, H = x ? "xMidYMid meet" : "xMinYMin";
            for (c == null ? (this._vbSize && (B = 1), delete this._vbSize, w = "0 0 " + this.width + Y + this.height) : (this._vbSize = B, w = c + Y + o + Y + s + Y + u), L(this.canvas, { viewBox: w, preserveAspectRatio: H }); B && V; )
              _ = "stroke-width" in V.attrs ? V.attrs["stroke-width"] : 1, V.attr({ "stroke-width": _ }), V._.dirty = 1, V._.dirtyT = 1, V = V.prev;
            return this._viewBox = [c, o, s, u, !!x], this;
          }, a.prototype.renderfix = function() {
            var c, o = this.canvas, s = o.style;
            try {
              c = o.getScreenCTM() || o.createSVGMatrix();
            } catch {
              c = o.createSVGMatrix();
            }
            var u = -c.e % 1, x = -c.f % 1;
            (u || x) && (u && (this._left = (this._left + u) % 1, s.left = this._left + "px"), x && (this._top = (this._top + x) % 1, s.top = this._top + "px"));
          }, a.prototype.clear = function() {
            a.eve("raphael.clear", this);
            for (var c = this.canvas; c.firstChild; )
              c.removeChild(c.firstChild);
            this.bottom = this.top = null, (this.desc = L("desc")).appendChild(a._g.doc.createTextNode("Created with Raphaël " + a.version)), c.appendChild(this.desc), c.appendChild(this.defs = L("defs"));
          }, a.prototype.remove = function() {
            for (var c in Et("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this)
              this[c] = typeof this[c] == "function" ? a._removedFactory(c) : null;
          };
          var gt = a.st;
          for (var Tt in ut)
            ut[h](Tt) && !gt[h](Tt) && (gt[Tt] = function(c) {
              return function() {
                var o = arguments;
                return this.forEach(function(s) {
                  s[c].apply(s, o);
                });
              };
            }(Tt));
        }
      }.apply(k, v)) === void 0 || (g.exports = b);
    }, function(g, k, z) {
      var v, b;
      v = [z(0)], (b = function(a) {
        if (!a || a.vml) {
          var h = "hasOwnProperty", T = String, D = parseFloat, et = Math, P = et.round, dt = et.max, K = et.min, Q = et.abs, wt = /[, ]+/, Et = a.eve, W = " ", Y = "", ht = { M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x" }, tt = /([clmz]),?([^clmz]*)/gi, q = / progid:\S+Blur\([^\)]+\)/g, L = /-?[^,\s-]+/g, Z = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)", X = 21600, xt = { path: 1, rect: 1, image: 1 }, st = { circle: 1, ellipse: 1 }, U = function(o, s, u) {
            var x = a.matrix();
            return x.rotate(-o, 0.5, 0.5), { dx: x.x(s, u), dy: x.y(s, u) };
          }, nt = function(o, s, u, x, w, _) {
            var M = o._, B = o.matrix, V = M.fillpos, H = o.node, rt = H.style, ft = 1, mt = "", pt = X / s, kt = X / u;
            if (rt.visibility = "hidden", s && u) {
              if (H.coordsize = Q(pt) + W + Q(kt), rt.rotation = _ * (s * u < 0 ? -1 : 1), _) {
                var Bt = U(_, x, w);
                x = Bt.dx, w = Bt.dy;
              }
              if (s < 0 && (mt += "x"), u < 0 && (mt += " y") && (ft = -1), rt.flip = mt, H.coordorigin = x * -pt + W + w * -kt, V || M.fillsize) {
                var bt = H.getElementsByTagName("fill");
                bt = bt && bt[0], H.removeChild(bt), V && (Bt = U(_, B.x(V[0], V[1]), B.y(V[0], V[1])), bt.position = Bt.dx * ft + W + Bt.dy * ft), M.fillsize && (bt.size = M.fillsize[0] * Q(s) + W + M.fillsize[1] * Q(u)), H.appendChild(bt);
              }
              rt.visibility = "visible";
            }
          };
          a.toString = function() {
            return `Your browser doesn’t support SVG. Falling down to VML.
You are running Raphaël ` + this.version;
          };
          var it, yt = function(o, s, u) {
            for (var x = T(s).toLowerCase().split("-"), w = u ? "end" : "start", _ = x.length, M = "classic", B = "medium", V = "medium"; _--; )
              switch (x[_]) {
                case "block":
                case "classic":
                case "oval":
                case "diamond":
                case "open":
                case "none":
                  M = x[_];
                  break;
                case "wide":
                case "narrow":
                  V = x[_];
                  break;
                case "long":
                case "short":
                  B = x[_];
              }
            var H = o.node.getElementsByTagName("stroke")[0];
            H[w + "arrow"] = M, H[w + "arrowlength"] = B, H[w + "arrowwidth"] = V;
          }, Lt = function(o, s) {
            o.attrs = o.attrs || {};
            var u = o.node, x = o.attrs, w = u.style, _ = xt[o.type] && (s.x != x.x || s.y != x.y || s.width != x.width || s.height != x.height || s.cx != x.cx || s.cy != x.cy || s.rx != x.rx || s.ry != x.ry || s.r != x.r), M = st[o.type] && (x.cx != s.cx || x.cy != s.cy || x.r != s.r || x.rx != s.rx || x.ry != s.ry), B = o;
            for (var V in s)
              s[h](V) && (x[V] = s[V]);
            if (_ && (x.path = a._getPath[o.type](o), o._.dirty = 1), s.href && (u.href = s.href), s.title && (u.title = s.title), s.target && (u.target = s.target), s.cursor && (w.cursor = s.cursor), "blur" in s && o.blur(s.blur), (s.path && o.type == "path" || _) && (u.path = function(Ft) {
              var Ht = /[ahqstv]/gi, ae = a._pathToAbsolute;
              if (T(Ft).match(Ht) && (ae = a._path2curve), Ht = /[clmz]/g, ae == a._pathToAbsolute && !T(Ft).match(Ht)) {
                var Yt = T(Ft).replace(tt, function(qe, ce, ue) {
                  var Zt = [], Ce = ce.toLowerCase() == "m", Kt = ht[ce];
                  return ue.replace(L, function(Ae) {
                    Ce && Zt.length == 2 && (Kt += Zt + ht[ce == "m" ? "l" : "L"], Zt = []), Zt.push(P(Ae * X));
                  }), Kt + Zt;
                });
                return Yt;
              }
              var he, Dt, ve = ae(Ft);
              Yt = [];
              for (var le = 0, be = ve.length; le < be; le++) {
                he = ve[le], (Dt = ve[le][0].toLowerCase()) == "z" && (Dt = "x");
                for (var Qt = 1, Nt = he.length; Qt < Nt; Qt++)
                  Dt += P(he[Qt] * X) + (Qt != Nt - 1 ? "," : Y);
                Yt.push(Dt);
              }
              return Yt.join(W);
            }(~T(x.path).toLowerCase().indexOf("r") ? a._pathToAbsolute(x.path) : x.path), o._.dirty = 1, o.type == "image" && (o._.fillpos = [x.x, x.y], o._.fillsize = [x.width, x.height], nt(o, 1, 1, 0, 0, 0))), "transform" in s && o.transform(s.transform), M) {
              var H = +x.cx, rt = +x.cy, ft = +x.rx || +x.r || 0, mt = +x.ry || +x.r || 0;
              u.path = a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", P((H - ft) * X), P((rt - mt) * X), P((H + ft) * X), P((rt + mt) * X), P(H * X)), o._.dirty = 1;
            }
            if ("clip-rect" in s) {
              var pt = T(s["clip-rect"]).split(wt);
              if (pt.length == 4) {
                pt[2] = +pt[2] + +pt[0], pt[3] = +pt[3] + +pt[1];
                var kt = u.clipRect || a._g.doc.createElement("div"), Bt = kt.style;
                Bt.clip = a.format("rect({1}px {2}px {3}px {0}px)", pt), u.clipRect || (Bt.position = "absolute", Bt.top = 0, Bt.left = 0, Bt.width = o.paper.width + "px", Bt.height = o.paper.height + "px", u.parentNode.insertBefore(kt, u), kt.appendChild(u), u.clipRect = kt);
              }
              s["clip-rect"] || u.clipRect && (u.clipRect.style.clip = "auto");
            }
            if (o.textpath) {
              var bt = o.textpath.style;
              s.font && (bt.font = s.font), s["font-family"] && (bt.fontFamily = '"' + s["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, Y) + '"'), s["font-size"] && (bt.fontSize = s["font-size"]), s["font-weight"] && (bt.fontWeight = s["font-weight"]), s["font-style"] && (bt.fontStyle = s["font-style"]);
            }
            if ("arrow-start" in s && yt(B, s["arrow-start"]), "arrow-end" in s && yt(B, s["arrow-end"], 1), s.opacity != null || s.fill != null || s.src != null || s.stroke != null || s["stroke-width"] != null || s["stroke-opacity"] != null || s["fill-opacity"] != null || s["stroke-dasharray"] != null || s["stroke-miterlimit"] != null || s["stroke-linejoin"] != null || s["stroke-linecap"] != null) {
              var at = u.getElementsByTagName("fill");
              if (!(at = at && at[0]) && (at = it("fill")), o.type == "image" && s.src && (at.src = s.src), s.fill && (at.on = true), at.on != null && s.fill != "none" && s.fill !== null || (at.on = false), at.on && s.fill) {
                var St = T(s.fill).match(a._ISURL);
                if (St) {
                  at.parentNode == u && u.removeChild(at), at.rotate = true, at.src = St[1], at.type = "tile";
                  var Mt = o.getBBox(1);
                  at.position = Mt.x + W + Mt.y, o._.fillpos = [Mt.x, Mt.y], a._preload(St[1], function() {
                    o._.fillsize = [this.offsetWidth, this.offsetHeight];
                  });
                } else
                  at.color = a.getRGB(s.fill).hex, at.src = Y, at.type = "solid", a.getRGB(s.fill).error && (B.type in { circle: 1, ellipse: 1 } || T(s.fill).charAt() != "r") && At(B, s.fill, at) && (x.fill = "none", x.gradient = s.fill, at.rotate = false);
              }
              if ("fill-opacity" in s || "opacity" in s) {
                var Pt = ((+x["fill-opacity"] + 1 || 2) - 1) * ((+x.opacity + 1 || 2) - 1) * ((+a.getRGB(s.fill).o + 1 || 2) - 1);
                Pt = K(dt(Pt, 0), 1), at.opacity = Pt, at.src && (at.color = "none");
              }
              u.appendChild(at);
              var Ct = u.getElementsByTagName("stroke") && u.getElementsByTagName("stroke")[0], It = false;
              !Ct && (It = Ct = it("stroke")), (s.stroke && s.stroke != "none" || s["stroke-width"] || s["stroke-opacity"] != null || s["stroke-dasharray"] || s["stroke-miterlimit"] || s["stroke-linejoin"] || s["stroke-linecap"]) && (Ct.on = true), (s.stroke == "none" || s.stroke === null || Ct.on == null || s.stroke == 0 || s["stroke-width"] == 0) && (Ct.on = false);
              var Xt = a.getRGB(s.stroke);
              Ct.on && s.stroke && (Ct.color = Xt.hex), Pt = ((+x["stroke-opacity"] + 1 || 2) - 1) * ((+x.opacity + 1 || 2) - 1) * ((+Xt.o + 1 || 2) - 1);
              var $t = 0.75 * (D(s["stroke-width"]) || 1);
              if (Pt = K(dt(Pt, 0), 1), s["stroke-width"] == null && ($t = x["stroke-width"]), s["stroke-width"] && (Ct.weight = $t), $t && $t < 1 && (Pt *= $t) && (Ct.weight = 1), Ct.opacity = Pt, s["stroke-linejoin"] && (Ct.joinstyle = s["stroke-linejoin"] || "miter"), Ct.miterlimit = s["stroke-miterlimit"] || 8, s["stroke-linecap"] && (Ct.endcap = s["stroke-linecap"] == "butt" ? "flat" : s["stroke-linecap"] == "square" ? "square" : "round"), "stroke-dasharray" in s) {
                var ye = { "-": "shortdash", ".": "shortdot", "-.": "shortdashdot", "-..": "shortdashdotdot", ". ": "dot", "- ": "dash", "--": "longdash", "- .": "dashdot", "--.": "longdashdot", "--..": "longdashdotdot" };
                Ct.dashstyle = ye[h](s["stroke-dasharray"]) ? ye[s["stroke-dasharray"]] : Y;
              }
              It && u.appendChild(Ct);
            }
            if (B.type == "text") {
              B.paper.canvas.style.display = Y;
              var Ut = B.paper.span, ne = x.font && x.font.match(/\d+(?:\.\d*)?(?=px)/);
              w = Ut.style, x.font && (w.font = x.font), x["font-family"] && (w.fontFamily = x["font-family"]), x["font-weight"] && (w.fontWeight = x["font-weight"]), x["font-style"] && (w.fontStyle = x["font-style"]), ne = D(x["font-size"] || ne && ne[0]) || 10, w.fontSize = 100 * ne + "px", B.textpath.string && (Ut.innerHTML = T(B.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
              var se = Ut.getBoundingClientRect();
              B.W = x.w = (se.right - se.left) / 100, B.H = x.h = (se.bottom - se.top) / 100, B.X = x.x, B.Y = x.y + B.H / 2, ("x" in s || "y" in s) && (B.path.v = a.format("m{0},{1}l{2},{1}", P(x.x * X), P(x.y * X), P(x.x * X) + 1));
              for (var me = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], oe = 0, Be = me.length; oe < Be; oe++)
                if (me[oe] in s) {
                  B._.dirty = 1;
                  break;
                }
              switch (x["text-anchor"]) {
                case "start":
                  B.textpath.style["v-text-align"] = "left", B.bbx = B.W / 2;
                  break;
                case "end":
                  B.textpath.style["v-text-align"] = "right", B.bbx = -B.W / 2;
                  break;
                default:
                  B.textpath.style["v-text-align"] = "center", B.bbx = 0;
              }
              B.textpath.style["v-text-kern"] = true;
            }
          }, At = function(o, s, u) {
            o.attrs = o.attrs || {}, o.attrs;
            var x = Math.pow, w = "linear", _ = ".5 .5";
            if (o.attrs.gradient = s, s = (s = T(s).replace(a._radial_gradient, function(ft, mt, pt) {
              return w = "radial", mt && pt && (mt = D(mt), pt = D(pt), x(mt - 0.5, 2) + x(pt - 0.5, 2) > 0.25 && (pt = et.sqrt(0.25 - x(mt - 0.5, 2)) * (2 * (pt > 0.5) - 1) + 0.5), _ = mt + W + pt), Y;
            })).split(/\s*\-\s*/), w == "linear") {
              var M = s.shift();
              if (M = -D(M), isNaN(M))
                return null;
            }
            var B = a._parseDots(s);
            if (!B)
              return null;
            if (o = o.shape || o.node, B.length) {
              o.removeChild(u), u.on = true, u.method = "none", u.color = B[0].color, u.color2 = B[B.length - 1].color;
              for (var V = [], H = 0, rt = B.length; H < rt; H++)
                B[H].offset && V.push(B[H].offset + W + B[H].color);
              u.colors = V.length ? V.join() : "0% " + u.color, w == "radial" ? (u.type = "gradientTitle", u.focus = "100%", u.focussize = "0 0", u.focusposition = _, u.angle = 0) : (u.type = "gradient", u.angle = (270 - M) % 360), o.appendChild(u);
            }
            return 1;
          }, ut = function(o, s) {
            this[0] = this.node = o, o.raphael = true, this.id = a._oid++, o.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = s, this.matrix = a.matrix(), this._ = { transform: [], sx: 1, sy: 1, dx: 0, dy: 0, deg: 0, dirty: 1, dirtyT: 1 }, !s.bottom && (s.bottom = this), this.prev = s.top, s.top && (s.top.next = this), s.top = this, this.next = null;
          }, gt = a.el;
          ut.prototype = gt, gt.constructor = ut, gt.transform = function(o) {
            if (o == null)
              return this._.transform;
            var s, u = this.paper._viewBoxShift, x = u ? "s" + [u.scale, u.scale] + "-1-1t" + [u.dx, u.dy] : Y;
            u && (s = o = T(o).replace(/\.{3}|\u2026/g, this._.transform || Y)), a._extractTransform(this, x + o);
            var w, _ = this.matrix.clone(), M = this.skew, B = this.node, V = ~T(this.attrs.fill).indexOf("-"), H = !T(this.attrs.fill).indexOf("url(");
            if (_.translate(1, 1), H || V || this.type == "image")
              if (M.matrix = "1 0 0 1", M.offset = "0 0", w = _.split(), V && w.noRotation || !w.isSimple) {
                B.style.filter = _.toFilter();
                var rt = this.getBBox(), ft = this.getBBox(1), mt = rt.x - ft.x, pt = rt.y - ft.y;
                B.coordorigin = mt * -X + W + pt * -X, nt(this, 1, 1, mt, pt, 0);
              } else
                B.style.filter = Y, nt(this, w.scalex, w.scaley, w.dx, w.dy, w.rotate);
            else
              B.style.filter = Y, M.matrix = T(_), M.offset = _.offset();
            return s !== null && (this._.transform = s, a._extractTransform(this, s)), this;
          }, gt.rotate = function(o, s, u) {
            if (this.removed)
              return this;
            if (o != null) {
              if ((o = T(o).split(wt)).length - 1 && (s = D(o[1]), u = D(o[2])), o = D(o[0]), u == null && (s = u), s == null || u == null) {
                var x = this.getBBox(1);
                s = x.x + x.width / 2, u = x.y + x.height / 2;
              }
              return this._.dirtyT = 1, this.transform(this._.transform.concat([["r", o, s, u]])), this;
            }
          }, gt.translate = function(o, s) {
            return this.removed ? this : ((o = T(o).split(wt)).length - 1 && (s = D(o[1])), o = D(o[0]) || 0, s = +s || 0, this._.bbox && (this._.bbox.x += o, this._.bbox.y += s), this.transform(this._.transform.concat([["t", o, s]])), this);
          }, gt.scale = function(o, s, u, x) {
            if (this.removed)
              return this;
            if ((o = T(o).split(wt)).length - 1 && (s = D(o[1]), u = D(o[2]), x = D(o[3]), isNaN(u) && (u = null), isNaN(x) && (x = null)), o = D(o[0]), s == null && (s = o), x == null && (u = x), u == null || x == null)
              var w = this.getBBox(1);
            return u = u ?? w.x + w.width / 2, x = x ?? w.y + w.height / 2, this.transform(this._.transform.concat([["s", o, s, u, x]])), this._.dirtyT = 1, this;
          }, gt.hide = function() {
            return !this.removed && (this.node.style.display = "none"), this;
          }, gt.show = function() {
            return !this.removed && (this.node.style.display = Y), this;
          }, gt.auxGetBBox = a.el.getBBox, gt.getBBox = function() {
            var o = this.auxGetBBox();
            if (this.paper && this.paper._viewBoxShift) {
              var s = {}, u = 1 / this.paper._viewBoxShift.scale;
              return s.x = o.x - this.paper._viewBoxShift.dx, s.x *= u, s.y = o.y - this.paper._viewBoxShift.dy, s.y *= u, s.width = o.width * u, s.height = o.height * u, s.x2 = s.x + s.width, s.y2 = s.y + s.height, s;
            }
            return o;
          }, gt._getBBox = function() {
            return this.removed ? {} : { x: this.X + (this.bbx || 0) - this.W / 2, y: this.Y - this.H, width: this.W, height: this.H };
          }, gt.remove = function() {
            if (!this.removed && this.node.parentNode) {
              for (var o in this.paper.__set__ && this.paper.__set__.exclude(this), a.eve.unbind("raphael.*.*." + this.id), a._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape), this)
                this[o] = typeof this[o] == "function" ? a._removedFactory(o) : null;
              this.removed = true;
            }
          }, gt.attr = function(o, s) {
            if (this.removed)
              return this;
            if (o == null) {
              var u = {};
              for (var x in this.attrs)
                this.attrs[h](x) && (u[x] = this.attrs[x]);
              return u.gradient && u.fill == "none" && (u.fill = u.gradient) && delete u.gradient, u.transform = this._.transform, u;
            }
            if (s == null && a.is(o, "string")) {
              if (o == "fill" && this.attrs.fill == "none" && this.attrs.gradient)
                return this.attrs.gradient;
              for (var w = o.split(wt), _ = {}, M = 0, B = w.length; M < B; M++)
                (o = w[M]) in this.attrs ? _[o] = this.attrs[o] : a.is(this.paper.customAttributes[o], "function") ? _[o] = this.paper.customAttributes[o].def : _[o] = a._availableAttrs[o];
              return B - 1 ? _ : _[w[0]];
            }
            if (this.attrs && s == null && a.is(o, "array")) {
              for (_ = {}, M = 0, B = o.length; M < B; M++)
                _[o[M]] = this.attr(o[M]);
              return _;
            }
            var V;
            for (var H in s != null && ((V = {})[o] = s), s == null && a.is(o, "object") && (V = o), V)
              Et("raphael.attr." + H + "." + this.id, this, V[H]);
            if (V) {
              for (H in this.paper.customAttributes)
                if (this.paper.customAttributes[h](H) && V[h](H) && a.is(this.paper.customAttributes[H], "function")) {
                  var rt = this.paper.customAttributes[H].apply(this, [].concat(V[H]));
                  for (var ft in this.attrs[H] = V[H], rt)
                    rt[h](ft) && (V[ft] = rt[ft]);
                }
              V.text && this.type == "text" && (this.textpath.string = V.text), Lt(this, V);
            }
            return this;
          }, gt.toFront = function() {
            return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && a._tofront(this, this.paper), this;
          }, gt.toBack = function() {
            return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), a._toback(this, this.paper)), this);
          }, gt.insertAfter = function(o) {
            return this.removed ? this : (o.constructor == a.st.constructor && (o = o[o.length - 1]), o.node.nextSibling ? o.node.parentNode.insertBefore(this.node, o.node.nextSibling) : o.node.parentNode.appendChild(this.node), a._insertafter(this, o, this.paper), this);
          }, gt.insertBefore = function(o) {
            return this.removed ? this : (o.constructor == a.st.constructor && (o = o[0]), o.node.parentNode.insertBefore(this.node, o.node), a._insertbefore(this, o, this.paper), this);
          }, gt.blur = function(o) {
            var s = this.node.runtimeStyle, u = s.filter;
            return u = u.replace(q, Y), +o != 0 ? (this.attrs.blur = o, s.filter = u + W + " progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+o || 1.5) + ")", s.margin = a.format("-{0}px 0 0 -{0}px", P(+o || 1.5))) : (s.filter = u, s.margin = 0, delete this.attrs.blur), this;
          }, a._engine.path = function(o, s) {
            var u = it("shape");
            u.style.cssText = Z, u.coordsize = X + W + X, u.coordorigin = s.coordorigin;
            var x = new ut(u, s), w = { fill: "none", stroke: "#000" };
            o && (w.path = o), x.type = "path", x.path = [], x.Path = Y, Lt(x, w), s.canvas && s.canvas.appendChild(u);
            var _ = it("skew");
            return _.on = true, u.appendChild(_), x.skew = _, x.transform(Y), x;
          }, a._engine.rect = function(o, s, u, x, w, _) {
            var M = a._rectPath(s, u, x, w, _), B = o.path(M), V = B.attrs;
            return B.X = V.x = s, B.Y = V.y = u, B.W = V.width = x, B.H = V.height = w, V.r = _, V.path = M, B.type = "rect", B;
          }, a._engine.ellipse = function(o, s, u, x, w) {
            var _ = o.path();
            return _.attrs, _.X = s - x, _.Y = u - w, _.W = 2 * x, _.H = 2 * w, _.type = "ellipse", Lt(_, { cx: s, cy: u, rx: x, ry: w }), _;
          }, a._engine.circle = function(o, s, u, x) {
            var w = o.path();
            return w.attrs, w.X = s - x, w.Y = u - x, w.W = w.H = 2 * x, w.type = "circle", Lt(w, { cx: s, cy: u, r: x }), w;
          }, a._engine.image = function(o, s, u, x, w, _) {
            var M = a._rectPath(u, x, w, _), B = o.path(M).attr({ stroke: "none" }), V = B.attrs, H = B.node, rt = H.getElementsByTagName("fill")[0];
            return V.src = s, B.X = V.x = u, B.Y = V.y = x, B.W = V.width = w, B.H = V.height = _, V.path = M, B.type = "image", rt.parentNode == H && H.removeChild(rt), rt.rotate = true, rt.src = s, rt.type = "tile", B._.fillpos = [u, x], B._.fillsize = [w, _], H.appendChild(rt), nt(B, 1, 1, 0, 0, 0), B;
          }, a._engine.text = function(o, s, u, x) {
            var w = it("shape"), _ = it("path"), M = it("textpath");
            s = s || 0, u = u || 0, x = x || "", _.v = a.format("m{0},{1}l{2},{1}", P(s * X), P(u * X), P(s * X) + 1), _.textpathok = true, M.string = T(x), M.on = true, w.style.cssText = Z, w.coordsize = X + W + X, w.coordorigin = "0 0";
            var B = new ut(w, o), V = { fill: "#000", stroke: "none", font: a._availableAttrs.font, text: x };
            B.shape = w, B.path = _, B.textpath = M, B.type = "text", B.attrs.text = T(x), B.attrs.x = s, B.attrs.y = u, B.attrs.w = 1, B.attrs.h = 1, Lt(B, V), w.appendChild(M), w.appendChild(_), o.canvas.appendChild(w);
            var H = it("skew");
            return H.on = true, w.appendChild(H), B.skew = H, B.transform(Y), B;
          }, a._engine.setSize = function(o, s) {
            var u = this.canvas.style;
            return this.width = o, this.height = s, o == +o && (o += "px"), s == +s && (s += "px"), u.width = o, u.height = s, u.clip = "rect(0 " + o + " " + s + " 0)", this._viewBox && a._engine.setViewBox.apply(this, this._viewBox), this;
          }, a._engine.setViewBox = function(o, s, u, x, w) {
            a.eve("raphael.setViewBox", this, this._viewBox, [o, s, u, x, w]);
            var _, M, B = this.getSize(), V = B.width, H = B.height;
            return w && (u * (_ = H / x) < V && (o -= (V - u * _) / 2 / _), x * (M = V / u) < H && (s -= (H - x * M) / 2 / M)), this._viewBox = [o, s, u, x, !!w], this._viewBoxShift = { dx: -o, dy: -s, scale: B }, this.forEach(function(rt) {
              rt.transform("...");
            }), this;
          }, a._engine.initWin = function(o) {
            var s = o.document;
            s.styleSheets.length < 31 ? s.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : s.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
            try {
              !s.namespaces.rvml && s.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), it = function(u) {
                return s.createElement("<rvml:" + u + ' class="rvml">');
              };
            } catch {
              it = function(x) {
                return s.createElement("<" + x + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
              };
            }
          }, a._engine.initWin(a._g.win), a._engine.create = function() {
            var o = a._getContainer.apply(0, arguments), s = o.container, u = o.height, x = o.width, w = o.x, _ = o.y;
            if (!s)
              throw new Error("VML container not found.");
            var M = new a._Paper(), B = M.canvas = a._g.doc.createElement("div"), V = B.style;
            return w = w || 0, _ = _ || 0, x = x || 512, u = u || 342, M.width = x, M.height = u, x == +x && (x += "px"), u == +u && (u += "px"), M.coordsize = 216e5 + W + 216e5, M.coordorigin = "0 0", M.span = a._g.doc.createElement("span"), M.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", B.appendChild(M.span), V.cssText = a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", x, u), s == 1 ? (a._g.doc.body.appendChild(B), V.left = w + "px", V.top = _ + "px", V.position = "absolute") : s.firstChild ? s.insertBefore(B, s.firstChild) : s.appendChild(B), M.renderfix = function() {
            }, M;
          }, a.prototype.clear = function() {
            a.eve("raphael.clear", this), this.canvas.innerHTML = Y, this.span = a._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null;
          }, a.prototype.remove = function() {
            for (var o in a.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas), this)
              this[o] = typeof this[o] == "function" ? a._removedFactory(o) : null;
            return true;
          };
          var Tt = a.st;
          for (var c in gt)
            gt[h](c) && !Tt[h](c) && (Tt[c] = function(o) {
              return function() {
                var s = arguments;
                return this.forEach(function(u) {
                  u[o].apply(u, s);
                });
              };
            }(c));
        }
      }.apply(k, v)) === void 0 || (g.exports = b);
    }]);
  });
})(ci);
var wi = ci.exports, ki = _i(wi);
const Li = { x: 0, y: 0, "text-margin": 10, "font-size": 14, "font-color": "black", "line-width": 3, "line-length": 50, "line-color": "black", "element-color": "black", fill: "white", "yes-text": "yes", "no-text": "no", "arrow-end": "block", class: "flowchart", scale: 1, symbols: { start: {}, end: {}, condition: {}, inputoutput: {}, operation: {}, subroutine: {}, parallel: {} } }, Bi = ($, y, g, k, z, v, b, a) => {
  const h = { x: null, y: null, onLine1: false, onLine2: false }, T = (a - v) * (g - $) - (b - z) * (k - y);
  if (T === 0)
    return h;
  const D = y - v, et = $ - z, P = (b - z) * D - (a - v) * et, dt = (g - $) * D - (k - y) * et, K = P / T, Q = dt / T;
  return h.x = $ + K * (g - $), h.y = y + K * (k - y), K > 0 && K < 1 && (h.onLine1 = true), Q > 0 && Q < 1 && (h.onLine2 = true), h;
}, ui = ($, y, g) => {
  let k = "M{0},{1}";
  for (let T = 2; T < 2 * g.length + 2; T += 2)
    k += ` L{${T}},{${T + 1}}`;
  const z = [y, ...g].map(({ x: T, y: D }) => [T, D]).flat(), v = $.paper.path(k, z);
  v.attr("stroke", $.options["element-color"]), v.attr("stroke-width", $.options["line-width"]);
  const b = $.options.font, a = $.options["font-family"], h = $.options["font-weight"];
  return b && v.attr({ font: b }), a && v.attr({ "font-family": a }), h && v.attr({ "font-weight": h }), v;
}, zt = ($, y, g, k) => {
  let z = "M{0},{1}";
  Object.prototype.toString.call(g) !== "[object Array]" && (g = [g]);
  for (let D = 2; D < 2 * g.length + 2; D += 2)
    z += ` L{${D}},{${D + 1}}`;
  const v = [y, ...g].map(({ x: D, y: et }) => [D, et]).flat(), b = $.paper.path(z, v);
  b.attr({ stroke: $.options["line-color"], "stroke-width": $.options["line-width"], "arrow-end": $.options["arrow-end"] });
  const a = $.options.font, h = $.options["font-family"], T = $.options["font-weight"];
  if (a && b.attr({ font: a }), h && b.attr({ "font-family": h }), T && b.attr({ "font-weight": T }), k) {
    const D = $.paper.text(0, 0, k);
    let et = "start", P = false;
    const dt = g[0];
    y.y === dt.y && (P = true);
    let K = 0, Q = 0;
    K = y.x, Q = y.y, P ? (y.x > dt.x ? (K -= $.options["text-margin"] / 2, et = "end") : K += $.options["text-margin"] / 2, Q -= $.options["text-margin"]) : (K += $.options["text-margin"] / 2, Q += $.options["text-margin"], y.y > dt.y && (Q -= $.options["text-margin"] * 2)), D.attr({ "text-anchor": et, "font-size": $.options["font-size"], fill: $.options["font-color"], x: K, y: Q }), a && D.attr({ font: a }), h && D.attr({ "font-family": h }), T && D.attr({ "font-weight": T });
  }
  return b;
};
class re {
  constructor(y, g, k) {
    this.connectedTo = [], this.leftLines = [], this.rightLines = [], this.topLines = [], this.bottomLines = [], this.width = 0, this.height = 0, this.chart = y, this.group = this.chart.paper.set(), this.symbol = k, this.symbolType = g.symbolType, this.flowstate = g.flowstate || "future", this.lineStyle = g.lineStyle || {}, this.key = g.key || "", this.params = g.params || {}, this.next_direction = g.next && g.direction_next ? g.direction_next : void 0, this.text = this.chart.paper.text(0, 0, g.text || ""), g.key && (this.text.node.id = `${g.key}t`), this.text.node.setAttribute("class", `${this.getAttr("class")}t`), this.text.attr({ "text-anchor": "start", x: this.getAttr("text-margin"), fill: this.getAttr("font-color"), "font-size": this.getAttr("font-size") });
    const z = this.getAttr("font"), v = this.getAttr("font-family"), b = this.getAttr("font-weight");
    z && this.text.attr({ font: z }), v && this.text.attr({ "font-family": v }), b && this.text.attr({ "font-weight": b }), g.link && this.text.attr("href", g.link), g.target && this.text.attr("target", g.target), g.function && (this.text.attr({ cursor: "pointer" }), this.text.node.addEventListener("click", (h) => {
      window[g.function](h, g);
    }, false));
    const a = this.getAttr("maxWidth");
    if (a) {
      const h = g.text.split(" ");
      let T = "";
      h.forEach((D) => {
        this.text.attr("text", `${T} ${D}`), this.text.getBBox().width > a ? T += `
${D}` : T += ` ${D}`;
      }), this.text.attr("text", T.substring(1));
    }
    if (this.group.push(this.text), k) {
      k.node.setAttribute("class", this.getAttr("class"));
      const h = this.getAttr("text-margin");
      k.attr({ fill: this.getAttr("fill"), stroke: this.getAttr("element-color"), "stroke-width": this.getAttr("line-width"), width: this.text.getBBox().width + 2 * h, height: this.text.getBBox().height + 2 * h });
      const T = this.getAttr("roundness");
      isNaN(T) || (k.node.setAttribute("ry", T.toString()), k.node.setAttribute("rx", T.toString())), g.link && k.attr("href", g.link), g.target && k.attr("target", g.target), g.function && (k.node.addEventListener("click", (D) => {
        window[g.function](D, g);
      }, false), k.attr({ cursor: "pointer" })), g.key && (k.node.id = g.key), this.group.push(k), k.insertBefore(this.text), this.text.attr({ y: k.getBBox().height / 2 }), this.initialize();
    }
  }
  getAttr(y) {
    if (!this.chart)
      return;
    const g = this.chart.options ? this.chart.options[y] : void 0, k = this.chart.options.symbols ? this.chart.options.symbols[this.symbolType][y] : void 0;
    if (this.chart.options.flowstate && this.chart.options.flowstate[this.flowstate]) {
      const z = this.chart.options.flowstate[this.flowstate][y];
      if (z)
        return z;
    }
    return k || g;
  }
  initialize() {
    this.group.transform(`t${this.getAttr("line-width")},${this.getAttr("line-width")}`);
    const y = this.group.getBBox();
    this.width = y.width, this.height = y.height;
  }
  getCenter() {
    return { x: this.getX() + this.width / 2, y: this.getY() + this.height / 2 };
  }
  getX() {
    return this.group.getBBox().x;
  }
  getY() {
    return this.group.getBBox().y;
  }
  shiftX(y) {
    this.group.transform(`t${this.getX() + y},${this.getY()}`);
  }
  setX(y) {
    this.group.transform(`t${y},${this.getY()}`);
  }
  shiftY(y) {
    this.group.transform(`$t${this.getX()},${this.getY() + y}`);
  }
  setY(y) {
    this.group.transform(`t${this.getX()},${y}`);
  }
  getTop() {
    return { x: this.getX() + this.width / 2, y: this.getY() };
  }
  getBottom() {
    return { x: this.getX() + this.width / 2, y: this.getY() + this.height };
  }
  getLeft() {
    return { x: this.getX(), y: this.getY() + this.group.getBBox().height / 2 };
  }
  getRight() {
    return { x: this.getX() + this.group.getBBox().width, y: this.getY() + this.group.getBBox().height / 2 };
  }
  render() {
    if (this.next) {
      const y = this.getAttr("line-length");
      if (this.next_direction === "right") {
        const g = this.getRight();
        if (!this.next.isPositioned) {
          this.next.setY(g.y - this.next.height / 2), this.next.shiftX(this.group.getBBox().x + this.width + y);
          const k = () => {
            let z = false, v;
            for (let b = 0; b < this.chart.symbols.length; b++) {
              v = this.chart.symbols[b];
              const a = Math.abs(v.getCenter().x - this.next.getCenter().x);
              if (v.getCenter().y > this.next.getCenter().y && a <= this.next.width / 2) {
                z = true;
                break;
              }
            }
            if (z) {
              if (this.next.symbolType === "end")
                return;
              this.next.setX(v.getX() + v.width + y), k();
            }
          };
          k(), this.next.isPositioned = true, this.next.render();
        }
      } else if (this.next_direction === "left") {
        const g = this.getLeft();
        if (!this.next.isPositioned) {
          this.next.setY(g.y - this.next.height / 2), this.next.shiftX(-(this.group.getBBox().x + this.width + y));
          const k = () => {
            let z = false, v;
            for (let b = 0; b < this.chart.symbols.length; b++) {
              v = this.chart.symbols[b];
              const a = Math.abs(v.getCenter().x - this.next.getCenter().x);
              if (v.getCenter().y > this.next.getCenter().y && a <= this.next.width / 2) {
                z = true;
                break;
              }
            }
            if (z) {
              if (this.next.symbolType === "end")
                return;
              this.next.setX(v.getX() + v.width + y), k();
            }
          };
          k(), this.next.isPositioned = true, this.next.render();
        }
      } else {
        const g = this.getBottom();
        this.next.isPositioned || (this.next.shiftY(this.getY() + this.height + y), this.next.setX(g.x - this.next.width / 2), this.next.isPositioned = true, this.next.render());
      }
    }
  }
  renderLines() {
    this.next && (this.next_direction ? this.drawLineTo(this.next, this.getAttr("arrow-text") || "", this.next_direction) : this.drawLineTo(this.next, this.getAttr("arrow-text") || ""));
  }
  drawLineTo(y, g, k) {
    this.connectedTo.indexOf(y) < 0 && this.connectedTo.push(y);
    const { x: z, y: v } = this.getCenter(), b = this.getRight(), a = this.getBottom(), h = this.getTop(), T = this.getLeft(), { x: D, y: et } = y.getCenter(), P = y.getTop(), dt = y.getRight(), K = y.getLeft(), Q = z === D, wt = v === et, Et = v < et, W = v > et || this === y, Y = z > D, ht = z < D;
    let tt = 0, q;
    const L = this.getAttr("line-length"), Z = this.getAttr("line-width");
    if ((!k || k === "bottom") && Q && Et) {
      if (y.topLines.length === 0 && this.bottomLines.length === 0)
        q = zt(this.chart, a, [P], g);
      else {
        const X = Math.max(y.topLines.length, this.bottomLines.length) * 10;
        q = zt(this.chart, a, [{ x: P.x, y: P.y - X }, { x: P.x, y: P.y }], g);
      }
      this.bottomLines.push(q), y.topLines.push(q), this.bottomStart = true, y.topEnd = true, tt = a.x;
    } else if ((!k || k === "right") && wt && ht) {
      if (y.leftLines.length === 0 && this.rightLines.length === 0)
        q = zt(this.chart, b, [K], g);
      else {
        const X = Math.max(y.leftLines.length, this.rightLines.length) * 10;
        q = zt(this.chart, b, [{ x: b.x, y: b.y - X }, { x: b.x, y: K.y - X }, { x: K.x, y: K.y - X }, { x: K.x, y: K.y }], g);
      }
      this.rightLines.push(q), y.leftLines.push(q), this.rightStart = true, y.leftEnd = true, tt = K.x;
    } else if ((!k || k === "left") && wt && Y) {
      if (y.rightLines.length === 0 && this.leftLines.length === 0)
        q = zt(this.chart, T, [dt], g);
      else {
        const X = Math.max(y.rightLines.length, this.leftLines.length) * 10;
        q = zt(this.chart, b, [{ x: b.x, y: b.y - X }, { x: b.x, y: dt.y - X }, { x: dt.x, y: dt.y - X }, { x: dt.x, y: dt.y }], g);
      }
      this.leftLines.push(q), y.rightLines.push(q), this.leftStart = true, y.rightEnd = true, tt = dt.x;
    } else if ((!k || k === "right") && Q && W) {
      const X = Math.max(y.topLines.length, this.rightLines.length) * 10;
      q = zt(this.chart, b, [{ x: b.x + L / 2, y: b.y - X }, { x: b.x + L / 2, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.rightLines.push(q), y.topLines.push(q), this.rightStart = true, y.topEnd = true, tt = b.x + L / 2;
    } else if ((!k || k === "right") && Q && Et) {
      const X = Math.max(y.topLines.length, this.rightLines.length) * 10;
      q = zt(this.chart, b, [{ x: b.x + L / 2, y: b.y - X }, { x: b.x + L / 2, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.rightLines.push(q), y.topLines.push(q), this.rightStart = true, y.topEnd = true, tt = b.x + L / 2;
    } else if ((!k || k === "bottom") && Y) {
      const X = Math.max(y.topLines.length, this.bottomLines.length) * 10;
      this.leftEnd && W ? q = zt(this.chart, a, [{ x: a.x, y: a.y + L / 2 - X }, { x: a.x + (a.x - P.x) / 2, y: a.y + L / 2 - X }, { x: a.x + (a.x - P.x) / 2, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g) : q = zt(this.chart, a, [{ x: a.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.bottomLines.push(q), y.topLines.push(q), this.bottomStart = true, y.topEnd = true, tt = a.x + (a.x - P.x) / 2;
    } else if ((!k || k === "bottom") && ht && Et) {
      const X = Math.max(y.topLines.length, this.bottomLines.length) * 10;
      q = zt(this.chart, a, [{ x: a.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.bottomLines.push(q), y.topLines.push(q), this.bottomStart = true, y.topEnd = true, tt = a.x, P.x > tt && (tt = P.x);
    } else if ((!k || k === "bottom") && ht) {
      const X = Math.max(y.topLines.length, this.bottomLines.length) * 10;
      q = zt(this.chart, a, [{ x: a.x, y: a.y + L / 2 - X }, { x: a.x + (a.x - P.x) / 2, y: a.y + L / 2 - X }, { x: a.x + (a.x - P.x) / 2, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.bottomLines.push(q), y.topLines.push(q), this.bottomStart = true, y.topEnd = true, tt = a.x + (a.x - P.x) / 2;
    } else if (k && k === "right" && Y) {
      const X = Math.max(y.topLines.length, this.rightLines.length) * 10;
      q = zt(this.chart, b, [{ x: b.x + L / 2, y: b.y }, { x: b.x + L / 2, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.rightLines.push(q), y.topLines.push(q), this.rightStart = true, y.topEnd = true, tt = b.x + L / 2;
    } else if (k && k === "right" && ht) {
      const X = Math.max(y.topLines.length, this.rightLines.length) * 10;
      q = zt(this.chart, b, [{ x: P.x, y: b.y - X }, { x: P.x, y: P.y - X }], g), this.rightLines.push(q), y.topLines.push(q), this.rightStart = true, y.topEnd = true, tt = b.x + L / 2;
    } else if (k && k === "bottom" && Q && W) {
      const X = Math.max(y.topLines.length, this.bottomLines.length) * 10;
      q = zt(this.chart, a, [{ x: a.x, y: a.y + L / 2 - X }, { x: b.x + L / 2, y: a.y + L / 2 - X }, { x: b.x + L / 2, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.bottomLines.push(q), y.topLines.push(q), this.bottomStart = true, y.topEnd = true, tt = a.x + L / 2;
    } else if (k === "left" && Q && W) {
      let X = T.x - L / 2;
      K.x < T.x && (X = K.x - L / 2);
      const xt = Math.max(y.topLines.length, this.leftLines.length) * 10;
      q = zt(this.chart, T, [{ x: X, y: T.y - xt }, { x: X, y: P.y - L / 2 - xt }, { x: P.x, y: P.y - L / 2 - xt }, { x: P.x, y: P.y }], g), this.leftLines.push(q), y.topLines.push(q), this.leftStart = true, y.topEnd = true, tt = T.x;
    } else if (k === "left") {
      const X = Math.max(y.topLines.length, this.leftLines.length) * 10;
      q = zt(this.chart, T, [{ x: P.x + (T.x - P.x) / 2, y: T.y }, { x: P.x + (T.x - P.x) / 2, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.leftLines.push(q), y.topLines.push(q), this.leftStart = true, y.topEnd = true, tt = T.x;
    } else if (k === "top") {
      const X = Math.max(y.topLines.length, this.topLines.length) * 10;
      q = zt(this.chart, h, [{ x: h.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.topLines.push(q), y.topLines.push(q), this.topStart = true, y.topEnd = true, tt = h.x;
    }
    if (this.lineStyle[y.key] && q && q.attr(this.lineStyle[y.key]), q) {
      for (let X = 0, xt = this.chart.lines.length; X < xt; X++) {
        const st = this.chart.lines[X].attr("path"), U = q.attr("path");
        for (let nt = 0, it = st.length - 1; nt < it; nt++) {
          const yt = [];
          yt.push(["M", st[nt][1], st[nt][2]]), yt.push(["L", st[nt + 1][1], st[nt + 1][2]]);
          const Lt = yt[0][1], At = yt[0][2], ut = yt[1][1], gt = yt[1][2];
          for (let Tt = 0, c = U.length - 1; Tt < c; Tt++) {
            const o = [];
            o.push(["M", U[Tt][1], U[Tt][2]]), o.push(["L", U[Tt + 1][1], U[Tt + 1][2]]);
            const s = o[0][1], u = o[0][2], x = o[1][1], w = o[1][2], _ = Bi(Lt, At, ut, gt, s, u, x, w);
            if (_.onLine1 && _.onLine2) {
              let M;
              u === w ? s > x ? (M = ["L", _.x + Z * 2, u], U.splice(Tt + 1, 0, M), M = ["C", _.x + Z * 2, u, _.x, u - Z * 4, _.x - Z * 2, u], U.splice(Tt + 2, 0, M), q.attr("path", U)) : (M = ["L", _.x - Z * 2, u], U.splice(Tt + 1, 0, M), M = ["C", _.x - Z * 2, u, _.x, u - Z * 4, _.x + Z * 2, u], U.splice(Tt + 2, 0, M), q.attr("path", U)) : u > w ? (M = ["L", s, _.y + Z * 2], U.splice(Tt + 1, 0, M), M = ["C", s, _.y + Z * 2, s + Z * 4, _.y, s, _.y - Z * 2], U.splice(Tt + 2, 0, M), q.attr("path", U)) : (M = ["L", s, _.y - Z * 2], U.splice(Tt + 1, 0, M), M = ["C", s, _.y - Z * 2, s + Z * 4, _.y, s, _.y + Z * 2], U.splice(Tt + 2, 0, M), q.attr("path", U)), Tt += 2;
            }
          }
        }
      }
      this.chart.lines.push(q), (this.chart.minXFromSymbols === void 0 || this.chart.minXFromSymbols > T.x) && (this.chart.minXFromSymbols = T.x);
    }
    (!this.chart.maxXFromLine || this.chart.maxXFromLine && tt > this.chart.maxXFromLine) && (this.chart.maxXFromLine = tt);
  }
}
let Pe = class extends re {
  constructor(y, g = {}) {
    super(y, g), this.yes_annotation = g.yes_annotation, this.no_annotation = g.no_annotation, this.textMargin = this.getAttr("text-margin");
    let { direction_yes: k, direction_no: z } = g;
    !z && k === "right" ? z = "bottom" : !k && z === "bottom" && (k = "right"), this.yes_direction = k || "bottom", this.no_direction = z || "right", this.text.attr({ x: this.textMargin * 2 });
    let v = this.text.getBBox().width + 3 * this.textMargin;
    v += v / 2;
    let b = this.text.getBBox().height + 2 * this.textMargin;
    b += b / 2, b = Math.max(v * 0.5, b);
    const a = v / 4, h = b / 4;
    this.text.attr({ x: a + this.textMargin / 2 });
    const T = { x: a, y: h }, D = [{ x: a - v / 4, y: h + b / 4 }, { x: a - v / 4 + v / 2, y: h + b / 4 + b / 2 }, { x: a - v / 4 + v, y: h + b / 4 }, { x: a - v / 4 + v / 2, y: h + b / 4 - b / 2 }, { x: a - v / 4, y: h + b / 4 }], et = ui(y, T, D);
    et.attr({ stroke: this.getAttr("element-color"), "stroke-width": this.getAttr("line-width"), fill: this.getAttr("fill") }), g.link && et.attr("href", g.link), g.target && et.attr("target", g.target), g.key && (et.node.id = g.key), et.node.setAttribute("class", this.getAttr("class")), this.text.attr({ y: et.getBBox().height / 2 }), this.group.push(et), et.insertBefore(this.text), this.initialize();
  }
  render() {
    this.yes_direction && (this[`${this.yes_direction}_symbol`] = this.yes_symbol), this.no_direction && (this[`${this.no_direction}_symbol`] = this.no_symbol);
    const y = this.getAttr("line-length");
    if (this.bottom_symbol) {
      const g = this.getBottom();
      this.bottom_symbol.isPositioned || (this.bottom_symbol.shiftY(this.getY() + this.height + y), this.bottom_symbol.setX(g.x - this.bottom_symbol.width / 2), this.bottom_symbol.isPositioned = true, this.bottom_symbol.render());
    }
    if (this.right_symbol) {
      const g = this.getRight();
      if (!this.right_symbol.isPositioned) {
        this.right_symbol.setY(g.y - this.right_symbol.height / 2), this.right_symbol.shiftX(this.group.getBBox().x + this.width + y);
        const k = () => {
          let z = false, v;
          for (let b = 0; b < this.chart.symbols.length; b++)
            if (v = this.chart.symbols[b], !this.params["align-next"] || this.params["align-next"] !== "no") {
              const a = Math.abs(v.getCenter().x - this.right_symbol.getCenter().x);
              if (v.getCenter().y > this.right_symbol.getCenter().y && a <= this.right_symbol.width / 2) {
                z = true;
                break;
              }
            }
          if (z) {
            if (this.right_symbol.symbolType === "end")
              return;
            this.right_symbol.setX(v.getX() + v.width + y), k();
          }
        };
        k(), this.right_symbol.isPositioned = true, this.right_symbol.render();
      }
    }
    if (this.left_symbol) {
      const g = this.getLeft();
      if (!this.left_symbol.isPositioned) {
        this.left_symbol.setY(g.y - this.left_symbol.height / 2), this.left_symbol.shiftX(-(this.group.getBBox().x + this.width + y));
        const k = () => {
          let z = false, v;
          for (let b = 0; b < this.chart.symbols.length; b++)
            if (v = this.chart.symbols[b], !this.params["align-next"] || this.params["align-next"] !== "no") {
              const a = Math.abs(v.getCenter().x - this.left_symbol.getCenter().x);
              if (v.getCenter().y > this.left_symbol.getCenter().y && a <= this.left_symbol.width / 2) {
                z = true;
                break;
              }
            }
          if (z) {
            if (this.left_symbol.symbolType === "end")
              return;
            this.left_symbol.setX(v.getX() + v.width + y), k();
          }
        };
        k(), this.left_symbol.isPositioned = true, this.left_symbol.render();
      }
    }
  }
  renderLines() {
    this.yes_symbol && this.drawLineTo(this.yes_symbol, this.yes_annotation || this.getAttr("yes-text") || "Yes", this.yes_direction), this.no_symbol && this.drawLineTo(this.no_symbol, this.no_annotation || this.getAttr("no-text") || "No", this.no_direction);
  }
};
class ze extends re {
  constructor(y, g = {}) {
    const k = y.paper.rect(0, 0, 0, 0);
    super(y, g, k), this.path1_annotation = g.path1_annotation || "", this.path2_annotation = g.path2_annotation || "", this.path3_annotation = g.path3_annotation || "", this.textMargin = this.getAttr("text-margin"), this.path1_direction = "bottom", this.path2_direction = "right", this.path3_direction = "top", g.direction_next === "path1" && !g[g.direction_next] && g.next && (g[g.direction_next] = g.next), g.direction_next === "path2" && !g[g.direction_next] && g.next && (g[g.direction_next] = g.next), g.direction_next === "path3" && !g[g.direction_next] && g.next && (g[g.direction_next] = g.next), g.path1 && g.direction_path1 && g.path2 && !g.direction_path2 && g.path3 && !g.direction_path3 ? g.direction_path1 === "right" ? (this.path2_direction = "bottom", this.path1_direction = "right", this.path3_direction = "top") : g.direction_path1 === "top" ? (this.path2_direction = "right", this.path1_direction = "top", this.path3_direction = "bottom") : g.direction_path1 === "left" ? (this.path2_direction = "right", this.path1_direction = "left", this.path3_direction = "bottom") : (this.path2_direction = "right", this.path1_direction = "bottom", this.path3_direction = "top") : g.path1 && !g.direction_path1 && g.path2 && g.direction_path2 && g.path3 && !g.direction_path3 ? g.direction_path2 === "right" ? (this.path1_direction = "bottom", this.path2_direction = "right", this.path3_direction = "top") : g.direction_path2 === "left" ? (this.path1_direction = "bottom", this.path2_direction = "left", this.path3_direction = "right") : (this.path1_direction = "right", this.path2_direction = "bottom", this.path3_direction = "top") : g.path1 && !g.direction_path1 && g.path2 && !g.direction_path2 && g.path3 && g.direction_path3 ? g.direction_path2 === "right" ? (this.path1_direction = "bottom", this.path2_direction = "top", this.path3_direction = "right") : g.direction_path2 === "left" ? (this.path1_direction = "bottom", this.path2_direction = "right", this.path3_direction = "left") : (this.path1_direction = "right", this.path2_direction = "bottom", this.path3_direction = "top") : (this.path1_direction = g.direction_path1, this.path2_direction = g.direction_path2, this.path3_direction = g.direction_path3), this.path1_direction = this.path1_direction || "bottom", this.path2_direction = this.path2_direction || "right", this.path3_direction = this.path3_direction || "top", this.initialize();
  }
  render() {
    this.path1_direction && (this[this.path1_direction + "_symbol"] = this.path1_symbol), this.path2_direction && (this[this.path2_direction + "_symbol"] = this.path2_symbol), this.path3_direction && (this[this.path3_direction + "_symbol"] = this.path3_symbol);
    const y = this.getAttr("line-length");
    if (this.bottom_symbol) {
      const g = this.getBottom();
      this.bottom_symbol.isPositioned || (this.bottom_symbol.shiftY(this.getY() + this.height + y), this.bottom_symbol.setX(g.x - this.bottom_symbol.width / 2), this.bottom_symbol.isPositioned = true, this.bottom_symbol.render());
    }
    if (this.top_symbol) {
      const g = this.getTop();
      this.top_symbol.isPositioned || (this.top_symbol.shiftY(this.getY() - this.top_symbol.height - y), this.top_symbol.setX(g.x + this.top_symbol.width), this.top_symbol.isPositioned = true, this.top_symbol.render());
    }
    if (this.left_symbol) {
      const g = this.getLeft();
      if (!this.left_symbol.isPositioned) {
        this.left_symbol.setY(g.y - this.left_symbol.height / 2), this.left_symbol.shiftX(-(this.group.getBBox().x + this.width + y));
        const k = () => {
          let z = false, v;
          for (let b = 0; b < this.chart.symbols.length; b++)
            if (v = this.chart.symbols[b], !this.params["align-next"] || this.params["align-next"] !== "no") {
              const a = Math.abs(v.getCenter().x - this.left_symbol.getCenter().x);
              if (v.getCenter().y > this.left_symbol.getCenter().y && a <= this.left_symbol.width / 2) {
                z = true;
                break;
              }
            }
          if (z) {
            if (this.left_symbol.symbolType === "end")
              return;
            this.left_symbol.setX(v.getX() + v.width + y), k();
          }
        };
        k(), this.left_symbol.isPositioned = true, this.left_symbol.render();
      }
    }
    if (this.right_symbol) {
      const g = this.getRight();
      if (!this.right_symbol.isPositioned) {
        this.right_symbol.setY(g.y - this.right_symbol.height / 2), this.right_symbol.shiftX(this.group.getBBox().x + this.width + y);
        const k = () => {
          let z = false, v;
          for (let b = 0; b < this.chart.symbols.length; b++)
            if (v = this.chart.symbols[b], !this.params["align-next"] || this.params["align-next"] !== "no") {
              const a = Math.abs(v.getCenter().x - this.right_symbol.getCenter().x);
              if (v.getCenter().y > this.right_symbol.getCenter().y && a <= this.right_symbol.width / 2) {
                z = true;
                break;
              }
            }
          if (z) {
            if (this.right_symbol.symbolType === "end")
              return;
            this.right_symbol.setX(v.getX() + v.width + y), k();
          }
        };
        k(), this.right_symbol.isPositioned = true, this.right_symbol.render();
      }
    }
  }
  renderLines() {
    this.path1_symbol && this.drawLineTo(this.path1_symbol, this.path1_annotation, this.path1_direction), this.path2_symbol && this.drawLineTo(this.path2_symbol, this.path2_annotation, this.path2_direction), this.path3_symbol && this.drawLineTo(this.path3_symbol, this.path3_annotation, this.path3_direction);
  }
}
const Ve = ($, ...y) => {
  if (y.length === 0)
    return $;
  const g = y.shift();
  return Object.keys(g).forEach((k) => {
    typeof $[k] == "object" && !Array.isArray($[k]) && typeof g[k] == "object" && !Array.isArray(g[k]) ? Ve($[k], g[k]) : typeof g[k] == "object" ? Array.isArray(g[k]) ? $[k] = [...g[k]] : $[k] = { ...g[k] } : $[k] = g[k];
  }), Ve($, ...y);
};
let Ci = class {
  constructor(y, g = {}) {
    this.symbols = [], this.lines = [], this.start = null, this.minXFromSymbols = 0, this.maxXFromLine = 0, this.paper = new ki(y, g.width, g.height), this.options = Ve(g, Li);
  }
  handle(y) {
    return this.symbols.indexOf(y) <= -1 && this.symbols.push(y), y instanceof Pe ? (y.yes = (g) => (y.yes_symbol = g, y.no_symbol && (y.pathOk = true), this.handle(g)), y.no = (g) => (y.no_symbol = g, y.yes_symbol && (y.pathOk = true), this.handle(g))) : y instanceof ze ? (y.path1 = (g) => (y.path1_symbol = g, y.path2_symbol && (y.pathOk = true), this.handle(g)), y.path2 = (g) => (y.path2_symbol = g, y.path3_symbol && (y.pathOk = true), this.handle(g)), y.path3 = (g) => (y.path3_symbol = g, y.path1_symbol && (y.pathOk = true), this.handle(g))) : y.then = (g) => (y.next = g, y.pathOk = true, this.handle(g)), y;
  }
  startWith(y) {
    return this.start = y, this.handle(y);
  }
  render() {
    const y = this.symbols.reduce((et, { width: P }) => Math.max(et, P), 0), g = this.symbols.reduce((et, { height: P }) => Math.max(et, P), 0);
    this.symbols.forEach((et) => {
      et.shiftX(this.options.x + (y - et.width) / 2 + this.options["line-width"]), et.shiftY(this.options.y + (g - et.height) / 2 + this.options["line-width"]);
    }), this.start.render(), this.symbols.forEach((et) => {
      et.renderLines();
    });
    let k = this.maxXFromLine, z = 0, v = 0, b = 0;
    this.symbols.forEach((et) => {
      const P = et.getX(), dt = P + et.width, K = et.getY() + et.height;
      P < v && (v = P), dt > k && (k = dt), K > z && (z = K);
    }), this.lines.forEach((et) => {
      const P = et.getBBox(), { x: dt, y: K, x2: Q, y2: wt } = P;
      dt < v && (v = dt), K < b && (b = K), Q > k && (k = Q), wt > z && (z = wt);
    });
    const a = this.options.scale, h = this.options["line-width"];
    this.minXFromSymbols < v && (v = this.minXFromSymbols), v < 0 && (v -= h), b < 0 && (b -= h);
    const T = k + h - v, D = z + h - b;
    this.paper.setSize(T * a, D * a), this.paper.setViewBox(v, b, T, D, true);
  }
  clean() {
    if (this.paper) {
      const y = this.paper.canvas;
      y.parentNode && y.parentNode.removeChild(y);
    }
  }
}, Ai = class extends re {
  constructor(y, g = {}) {
    const k = y.paper.rect(0, 0, 0, 0, 20);
    super(y, { text: "End", ...g }, k);
  }
};
class Ti extends re {
  constructor(y, g = {}) {
    super(y, g), this.textMargin = this.getAttr("text-margin"), this.text.attr({ x: this.textMargin * 3 });
    const k = this.text.getBBox().width + 4 * this.textMargin, z = this.text.getBBox().height + 2 * this.textMargin, v = this.textMargin, b = z / 2, a = { x: v, y: b }, h = [{ x: v - this.textMargin, y: z }, { x: v - this.textMargin + k, y: z }, { x: v - this.textMargin + k + 2 * this.textMargin, y: 0 }, { x: v - this.textMargin + 2 * this.textMargin, y: 0 }, { x: v, y: b }], T = ui(y, a, h);
    T.attr({ stroke: this.getAttr("element-color"), "stroke-width": this.getAttr("line-width"), fill: this.getAttr("fill") }), g.link && T.attr("href", g.link), g.target && T.attr("target", g.target), g.key && (T.node.id = g.key), T.node.setAttribute("class", this.getAttr("class")), this.text.attr({ y: T.getBBox().height / 2 }), this.group.push(T), T.insertBefore(this.text), this.symbol = T, this.initialize();
  }
  getLeft() {
    return { x: this.getX() + this.textMargin, y: this.getY() + this.group.getBBox().height / 2 };
  }
  getRight() {
    return { x: this.getX() + this.group.getBBox().width - this.textMargin, y: this.getY() + this.group.getBBox().height / 2 };
  }
}
let Ei = class extends re {
  constructor(y, g = {}) {
    const k = y.paper.rect(0, 0, 0, 0, 0);
    super(y, { text: "End", ...g }, k);
  }
};
class Mi extends re {
  constructor(y, g = {}) {
    const k = y.paper.rect(0, 0, 0, 0, 20);
    super(y, { text: "Start", ...g }, k);
  }
}
class Si extends re {
  constructor(y, g = {}) {
    const k = y.paper.rect(0, 0, 0, 0);
    super(y, g, k), k.attr({ width: this.text.getBBox().width + 4 * this.getAttr("text-margin") }), this.text.attr({ x: 2 * this.getAttr("text-margin") });
    const z = y.paper.rect(0, 0, 0, 0);
    z.attr({ x: this.getAttr("text-margin"), stroke: this.getAttr("element-color"), "stroke-width": this.getAttr("line-width"), width: this.text.getBBox().width + 2 * this.getAttr("text-margin"), height: this.text.getBBox().height + 2 * this.getAttr("text-margin"), fill: this.getAttr("fill") }), g.key && (z.node.id = `${g.key}i`);
    const v = this.getAttr("font"), b = this.getAttr("font-family"), a = this.getAttr("font-weight");
    v && z.attr({ font: v }), b && z.attr({ "font-family": b }), a && z.attr({ "font-weight": a }), g.link && z.attr("href", g.link), g.target && z.attr("target", g.target), this.group.push(z), z.insertBefore(this.text), this.initialize();
  }
}
const Pi = () => ({ symbols: {}, start: null, diagram: null, draw($, y = {}) {
  this.diagram && this.diagram.clean();
  const g = new Ci($, y);
  this.diagram = g;
  const k = {}, z = (b) => {
    const { key: a, symbolType: h } = b;
    if (k[a])
      return k[a];
    switch (h) {
      case "start":
        k[a] = new Mi(g, b);
        break;
      case "end":
        k[a] = new Ai(g, b);
        break;
      case "operation":
        k[a] = new Ei(g, b);
        break;
      case "inputoutput":
        k[a] = new Ti(g, b);
        break;
      case "subroutine":
        k[a] = new Si(g, b);
        break;
      case "condition":
        k[a] = new Pe(g, b);
        break;
      case "parallel":
        k[a] = new ze(g, b);
        break;
      default:
        throw new Error(`Unknown symbol type ${h}!`);
    }
    return k[a];
  }, v = (b, a, h) => {
    const T = z(b);
    return this.start === b ? g.startWith(T) : a && h && !a.pathOk && (a instanceof Pe ? (h.yes === b && a.yes(T), h.no === b && a.no(T)) : a instanceof ze ? (h.path1 === b && a.path1(T), h.path2 === b && a.path2(T), h.path3 === b && a.path3(T)) : a.then(T)), T.pathOk || (T instanceof Pe ? (b.yes && v(b.yes, T, b), b.no && v(b.no, T, b)) : T instanceof ze ? (b.path1 && v(b.path1, T, b), b.path2 && v(b.path2, T, b), b.path3 && v(b.path3, T, b)) : b.next && v(b.next, T, b)), T;
  };
  v(this.start), g.render();
}, clean() {
  var $;
  ($ = this.diagram) == null || $.clean();
}, options() {
  var $;
  return (($ = this.diagram) == null ? void 0 : $.options) || {};
} }), zi = ($) => {
  const y = [];
  let g = 0;
  for (let k = 1; k < $.length; k++)
    if ($[k] === `
` && $[k - 1] !== "\\") {
      const z = $.substring(g, k);
      g = k + 1, y.push(z.replace(/\\\n/g, `
`));
    }
  g < $.length && y.push($.substring(g));
  for (let k = 1, { length: z } = y; k < z; ) {
    const v = y[k];
    v.indexOf("->") < 0 && v.indexOf("=>") < 0 && v.indexOf("@>") < 0 ? (y[k - 1] += `
${v}`, y.splice(k, 1), z--) : k++;
  }
  return y;
}, Fi = ($) => {
  const y = $.indexOf("(") + 1, g = $.indexOf(")");
  return y >= 0 && g >= 0 ? $.substring(y, g) : "{}";
}, Oi = ($) => {
  const y = $.indexOf("(") + 1, g = $.indexOf(")");
  return y >= 0 && g >= 0 ? $.substring(y, g) : "";
}, Fe = ($, y) => {
  const g = $.indexOf("(") + 1, k = $.indexOf(")");
  return g >= 0 && k >= 0 ? y.symbols[$.substring(0, g - 1)] : y.symbols[$];
}, Xi = ($) => {
  const y = $.indexOf("(") + 1, g = $.indexOf(")");
  let k = $.substring(y, g);
  k.indexOf(",") > 0 && (k = k.substring(0, k.indexOf(",")));
  const z = k.split("@");
  return z.length > 1 && y >= 0 && g >= 0 ? z[1] : "";
}, Ni = ($ = "") => {
  const y = Pi(), g = zi($.trim());
  for (; g.length > 0; ) {
    let k = g.splice(0, 1)[0].trim();
    if (k.indexOf("=>") >= 0) {
      const z = k.split("=>"), v = { key: z[0].replace(/\(.*\)/, ""), symbolType: z[1], text: null, link: null, target: null, flowstate: null, function: null, lineStyle: {}, params: {} }, b = z[0].match(/\((.*)\)/);
      if (b && b.length > 1) {
        const h = b[1].split(",");
        for (let T = 0; T < h.length; T++) {
          const D = h[T].split("=");
          D.length == 2 && (v.params[D[0]] = D[1]);
        }
      }
      let a;
      if (v.symbolType.indexOf(": ") >= 0 && (a = v.symbolType.split(": "), v.symbolType = a.shift(), v.text = a.join(": ")), v.text && v.text.indexOf(":$") >= 0 ? (a = v.text.split(":$"), v.text = a.shift(), v.function = a.join(":$")) : v.symbolType.indexOf(":$") >= 0 ? (a = v.symbolType.split(":$"), v.symbolType = a.shift(), v.function = a.join(":$")) : v.text && v.text.indexOf(":>") >= 0 ? (a = v.text.split(":>"), v.text = a.shift(), v.link = a.join(":>")) : v.symbolType.indexOf(":>") >= 0 && (a = v.symbolType.split(":>"), v.symbolType = a.shift(), v.link = a.join(":>")), v.symbolType.indexOf(`
`) >= 0 && (v.symbolType = v.symbolType.split(`
`)[0]), v.link) {
        const h = v.link.indexOf("[") + 1, T = v.link.indexOf("]");
        h >= 0 && T >= 0 && (v.target = v.link.substring(h, T), v.link = v.link.substring(0, h - 1));
      }
      if (v.text && v.text.indexOf("|") >= 0) {
        const h = v.text.split("|");
        v.flowstate = h.pop().trim(), v.text = h.join("|");
      }
      y.symbols[v.key] = v;
    } else if (k.indexOf("->") >= 0) {
      let z = Xi(k);
      z && (k = k.replace("@" + z, ""));
      const v = k.split("->");
      for (let b = 0, a = v.length; b < a; b++) {
        let h = v[b];
        const T = Oi(h);
        (T === "true" || T === "false") && (h = h.replace("true", "yes"), h = h.replace("false", "no"));
        let D = ((dt) => {
          let K = "next";
          const Q = dt.indexOf("(") + 1, wt = dt.indexOf(")");
          return Q >= 0 && wt >= 0 && (K = h.substring(Q, wt), K.indexOf(",") < 0 && K !== "yes" && K !== "no" && (K = `next, ${K}`)), K;
        })(h);
        const et = Fe(h, y);
        let P = null;
        if (D.indexOf(",") >= 0) {
          const dt = D.split(",");
          D = dt[0], P = dt[1].trim();
        }
        if (z && (et.symbolType === "condition" ? D == "yes" || D == "true" ? et.yes_annotation = z : et.no_annotation = z : et.symbolType === "parallel" && (D === "path1" ? et.path1_annotation = z : D === "path2" ? et.path2_annotation = z : D === "path3" && (et.path3_annotation = z)), z = null), y.start || (y.start = et), b + 1 < a) {
          const dt = v[b + 1];
          et[D] = Fe(dt, y), et["direction_" + D] = P, P = null;
        }
      }
    } else if (k.indexOf("@>") >= 0) {
      const z = k.split("@>");
      for (let v = 0, b = z.length; v < b; v++)
        if (v + 1 !== b) {
          const a = Fe(z[v], y), h = Fe(z[v + 1], y);
          a.lineStyle[h.key] = JSON.parse(Fi(z[v + 1]));
        }
    }
  }
  return y;
};
export {
  Ni as parse
};
