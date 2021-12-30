!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).Swiper = t());
})(this, function() {
  "use strict";
  function a(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function i(t = {}, s = {}) {
    Object.keys(s).forEach((e) => {
      void 0 === t[e]
        ? (t[e] = s[e])
        : a(s[e]) && a(t[e]) && 0 < Object.keys(s[e]).length && i(t[e], s[e]);
    });
  }
  const t = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return { initEvent() {} };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function E() {
    var e = "undefined" != typeof document ? document : {};
    return i(e, t), e;
  }
  const s = {
    document: t,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function() {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        },
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function k() {
    var e = "undefined" != typeof window ? window : {};
    return i(e, s), e;
  }
  class l extends Array {
    constructor(e) {
      super(...(e || [])),
        (function(e) {
          const t = e.__proto__;
          Object.defineProperty(e, "__proto__", {
            get() {
              return t;
            },
            set(e) {
              t.__proto__ = e;
            },
          });
        })(this);
    }
  }
  function r(e = []) {
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...r(e)) : t.push(e);
      }),
      t
    );
  }
  function n(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function O(e, t) {
    var s = k();
    const a = E();
    let i = [];
    if (!t && e instanceof l) return e;
    if (!e) return new l(i);
    if ("string" == typeof e) {
      const r = e.trim();
      if (0 <= r.indexOf("<") && 0 <= r.indexOf(">")) {
        let e = "div";
        0 === r.indexOf("<li") && (e = "ul"),
          0 === r.indexOf("<tr") && (e = "tbody"),
          (0 !== r.indexOf("<td") && 0 !== r.indexOf("<th")) || (e = "tr"),
          0 === r.indexOf("<tbody") && (e = "table"),
          0 === r.indexOf("<option") && (e = "select");
        const n = a.createElement(e);
        n.innerHTML = r;
        for (let e = 0; e < n.childNodes.length; e += 1)
          i.push(n.childNodes[e]);
      } else
        i = (function(e, t) {
          if ("string" != typeof e) return [e];
          const s = [];
          var a = t.querySelectorAll(e);
          for (let e = 0; e < a.length; e += 1) s.push(a[e]);
          return s;
        })(e.trim(), t || a);
    } else if (e.nodeType || e === s || e === a) i.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof l) return e;
      i = e;
    }
    return new l(
      (function(t) {
        const s = [];
        for (let e = 0; e < t.length; e += 1)
          -1 === s.indexOf(t[e]) && s.push(t[e]);
        return s;
      })(i)
    );
  }
  O.fn = l.prototype;
  const o = {
    addClass: function(...e) {
      const t = r(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function(...e) {
      const t = r(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function(...e) {
      const s = r(e.map((e) => e.split(" ")));
      return (
        0 <
        n(this, (t) => 0 < s.filter((e) => t.classList.contains(e)).length)
          .length
      );
    },
    toggleClass: function(...e) {
      const s = r(e.map((e) => e.split(" ")));
      this.forEach((t) => {
        s.forEach((e) => {
          t.classList.toggle(e);
        });
      });
    },
    attr: function(t, s) {
      if (1 === arguments.length && "string" == typeof t)
        return this[0] ? this[0].getAttribute(t) : void 0;
      for (let e = 0; e < this.length; e += 1)
        if (2 === arguments.length) this[e].setAttribute(t, s);
        else
          for (const a in t) (this[e][a] = t[a]), this[e].setAttribute(a, t[a]);
      return this;
    },
    removeAttr: function(t) {
      for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
      return this;
    },
    transform: function(t) {
      for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
      return this;
    },
    transition: function(t) {
      for (let e = 0; e < this.length; e += 1)
        this[e].style.transitionDuration = "string" != typeof t ? `${t}ms` : t;
      return this;
    },
    on: function(...e) {
      let [t, i, r, s] = e;
      function a(e) {
        var t = e.target;
        if (t) {
          const a = e.target.dom7EventData || [];
          if ((a.indexOf(e) < 0 && a.unshift(e), O(t).is(i))) r.apply(t, a);
          else {
            var s = O(t).parents();
            for (let e = 0; e < s.length; e += 1)
              O(s[e]).is(i) && r.apply(s[e], a);
          }
        }
      }
      function n(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }
      "function" == typeof e[1] && (([t, r, s] = e), (i = void 0)),
        (s = s || !1);
      var l = t.split(" ");
      let o;
      for (let e = 0; e < this.length; e += 1) {
        const p = this[e];
        if (i)
          for (o = 0; o < l.length; o += 1) {
            var d = l[o];
            p.dom7LiveListeners || (p.dom7LiveListeners = {}),
              p.dom7LiveListeners[d] || (p.dom7LiveListeners[d] = []),
              p.dom7LiveListeners[d].push({ listener: r, proxyListener: a }),
              p.addEventListener(d, a, s);
          }
        else
          for (o = 0; o < l.length; o += 1) {
            var c = l[o];
            p.dom7Listeners || (p.dom7Listeners = {}),
              p.dom7Listeners[c] || (p.dom7Listeners[c] = []),
              p.dom7Listeners[c].push({ listener: r, proxyListener: n }),
              p.addEventListener(c, n, s);
          }
      }
      return this;
    },
    off: function(...e) {
      let [t, s, a, i] = e;
      "function" == typeof e[1] && (([t, a, i] = e), (s = void 0)),
        (i = i || !1);
      var r = t.split(" ");
      for (let e = 0; e < r.length; e += 1) {
        var n = r[e];
        for (let e = 0; e < this.length; e += 1) {
          const o = this[e];
          let t;
          if (
            (!s && o.dom7Listeners
              ? (t = o.dom7Listeners[n])
              : s && o.dom7LiveListeners && (t = o.dom7LiveListeners[n]),
            t && t.length)
          )
            for (let e = t.length - 1; 0 <= e; --e) {
              var l = t[e];
              ((!a || l.listener !== a) &&
                !(
                  a &&
                  l.listener &&
                  l.listener.dom7proxy &&
                  l.listener.dom7proxy === a
                ) &&
                a) ||
                (o.removeEventListener(n, l.proxyListener, i), t.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function(...t) {
      const s = k();
      var a = t[0].split(" "),
        i = t[1];
      for (let e = 0; e < a.length; e += 1) {
        var r,
          n = a[e];
        for (let e = 0; e < this.length; e += 1) {
          const l = this[e];
          s.CustomEvent &&
            ((r = new s.CustomEvent(n, {
              detail: i,
              bubbles: !0,
              cancelable: !0,
            })),
            (l.dom7EventData = t.filter((e, t) => 0 < t)),
            l.dispatchEvent(r),
            (l.dom7EventData = []),
            delete l.dom7EventData);
        }
      }
      return this;
    },
    transitionEnd: function(s) {
      const a = this;
      return (
        s &&
          a.on("transitionend", function e(t) {
            t.target === this && (s.call(this, t), a.off("transitionend", e));
          }),
        this
      );
    },
    outerWidth: function(e) {
      if (0 < this.length) {
        if (e) {
          const t = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(t.getPropertyValue("margin-right")) +
            parseFloat(t.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function(e) {
      if (0 < this.length) {
        if (e) {
          const t = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(t.getPropertyValue("margin-top")) +
            parseFloat(t.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function() {
      const e = k();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function() {
      if (0 < this.length) {
        var e = k(),
          t = E();
        const r = this[0];
        var s = r.getBoundingClientRect(),
          a = t.body,
          i = r.clientTop || a.clientTop || 0,
          t = r.clientLeft || a.clientLeft || 0,
          a = r === e ? e.scrollY : r.scrollTop,
          e = r === e ? e.scrollX : r.scrollLeft;
        return { top: s.top + a - i, left: s.left + e - t };
      }
      return null;
    },
    css: function(e, t) {
      const s = k();
      let a;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1)
            for (const i in e) this[a].style[i] = e[i];
          return this;
        }
        if (this[0])
          return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 !== arguments.length || "string" != typeof e) return this;
      for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
      return this;
    },
    each: function(s) {
      return (
        s &&
          this.forEach((e, t) => {
            s.apply(e, [e, t]);
          }),
        this
      );
    },
    html: function(t) {
      if (void 0 === t) return this[0] ? this[0].innerHTML : null;
      for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
      return this;
    },
    text: function(t) {
      if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
      for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
      return this;
    },
    is: function(e) {
      var t = k(),
        s = E();
      const a = this[0];
      let i, r;
      if (!a || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (a.matches) return a.matches(e);
        if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
        if (a.msMatchesSelector) return a.msMatchesSelector(e);
        for (i = O(e), r = 0; r < i.length; r += 1) if (i[r] === a) return !0;
        return !1;
      }
      if (e === s) return a === s;
      if (e === t) return a === t;
      if (e.nodeType || e instanceof l) {
        for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
          if (i[r] === a) return !0;
        return !1;
      }
      return !1;
    },
    index: function() {
      let e = this[0],
        t;
      if (e) {
        for (t = 0; null !== (e = e.previousSibling); )
          1 === e.nodeType && (t += 1);
        return t;
      }
    },
    eq: function(e) {
      if (void 0 === e) return this;
      var t = this.length;
      if (t - 1 < e) return O([]);
      if (e < 0) {
        t = t + e;
        return t < 0 ? O([]) : O([this[t]]);
      }
      return O([this[e]]);
    },
    append: function(...t) {
      var s;
      const a = E();
      for (let e = 0; e < t.length; e += 1) {
        s = t[e];
        for (let t = 0; t < this.length; t += 1)
          if ("string" == typeof s) {
            const i = a.createElement("div");
            for (i.innerHTML = s; i.firstChild; )
              this[t].appendChild(i.firstChild);
          } else if (s instanceof l)
            for (let e = 0; e < s.length; e += 1) this[t].appendChild(s[e]);
          else this[t].appendChild(s);
      }
      return this;
    },
    prepend: function(e) {
      const t = E();
      let s, a;
      for (s = 0; s < this.length; s += 1)
        if ("string" == typeof e) {
          const i = t.createElement("div");
          for (i.innerHTML = e, a = i.childNodes.length - 1; 0 <= a; --a)
            this[s].insertBefore(i.childNodes[a], this[s].childNodes[0]);
        } else if (e instanceof l)
          for (a = 0; a < e.length; a += 1)
            this[s].insertBefore(e[a], this[s].childNodes[0]);
        else this[s].insertBefore(e, this[s].childNodes[0]);
      return this;
    },
    next: function(e) {
      return 0 < this.length
        ? e
          ? this[0].nextElementSibling && O(this[0].nextElementSibling).is(e)
            ? O([this[0].nextElementSibling])
            : O([])
          : this[0].nextElementSibling
          ? O([this[0].nextElementSibling])
          : O([])
        : O([]);
    },
    nextAll: function(e) {
      const t = [];
      let s = this[0];
      if (!s) return O([]);
      for (; s.nextElementSibling; ) {
        var a = s.nextElementSibling;
        (!e || O(a).is(e)) && t.push(a), (s = a);
      }
      return O(t);
    },
    prev: function(e) {
      if (0 < this.length) {
        var t = this[0];
        return e
          ? t.previousElementSibling && O(t.previousElementSibling).is(e)
            ? O([t.previousElementSibling])
            : O([])
          : t.previousElementSibling
          ? O([t.previousElementSibling])
          : O([]);
      }
      return O([]);
    },
    prevAll: function(e) {
      const t = [];
      let s = this[0];
      if (!s) return O([]);
      for (; s.previousElementSibling; ) {
        var a = s.previousElementSibling;
        (!e || O(a).is(e)) && t.push(a), (s = a);
      }
      return O(t);
    },
    parent: function(t) {
      const s = [];
      for (let e = 0; e < this.length; e += 1)
        null === this[e].parentNode ||
          (t && !O(this[e].parentNode).is(t)) ||
          s.push(this[e].parentNode);
      return O(s);
    },
    parents: function(s) {
      const a = [];
      for (let t = 0; t < this.length; t += 1) {
        let e = this[t].parentNode;
        for (; e; ) (s && !O(e).is(s)) || a.push(e), (e = e.parentNode);
      }
      return O(a);
    },
    closest: function(e) {
      let t = this;
      return void 0 === e ? O([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function(t) {
      const s = [];
      for (let e = 0; e < this.length; e += 1) {
        var a = this[e].querySelectorAll(t);
        for (let e = 0; e < a.length; e += 1) s.push(a[e]);
      }
      return O(s);
    },
    children: function(t) {
      const s = [];
      for (let e = 0; e < this.length; e += 1) {
        var a = this[e].children;
        for (let e = 0; e < a.length; e += 1)
          (t && !O(a[e]).is(t)) || s.push(a[e]);
      }
      return O(s);
    },
    filter: function(e) {
      return O(n(this, e));
    },
    remove: function() {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  function S(e, t = 0) {
    return setTimeout(e, t);
  }
  function v() {
    return Date.now();
  }
  function L(e, t = "x") {
    const s = k();
    let a, i, r;
    const n = (function(e) {
      const t = k();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        (s = s || e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((i = n.transform || n.webkitTransform),
          6 < i.split(",").length &&
            (i = i
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (r = new s.WebKitCSSMatrix("none" === i ? "" : i)))
        : ((r =
            n.MozTransform ||
            n.OTransform ||
            n.MsTransform ||
            n.msTransform ||
            n.transform ||
            n
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (a = r.toString().split(","))),
      "x" === t &&
        (i = s.WebKitCSSMatrix
          ? r.m41
          : 16 === a.length
          ? parseFloat(a[12])
          : parseFloat(a[4])),
      "y" === t &&
        (i = s.WebKitCSSMatrix
          ? r.m42
          : 16 === a.length
          ? parseFloat(a[13])
          : parseFloat(a[5])),
      i || 0
    );
  }
  function d(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function p(...t) {
    const s = Object(t[0]),
      a = ["__proto__", "constructor", "prototype"];
    for (let e = 1; e < t.length; e += 1) {
      var i = t[e];
      if (
        null != i &&
        ((o = i),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? o instanceof HTMLElement
          : o && (1 === o.nodeType || 11 === o.nodeType)))
      ) {
        var r = Object.keys(Object(i)).filter((e) => a.indexOf(e) < 0);
        for (let e = 0, t = r.length; e < t; e += 1) {
          var n = r[e],
            l = Object.getOwnPropertyDescriptor(i, n);
          void 0 !== l &&
            l.enumerable &&
            (d(s[n]) && d(i[n])
              ? i[n].__swiper__
                ? (s[n] = i[n])
                : p(s[n], i[n])
              : !d(s[n]) && d(i[n])
              ? ((s[n] = {}), i[n].__swiper__ ? (s[n] = i[n]) : p(s[n], i[n]))
              : (s[n] = i[n]));
        }
      }
    }
    var o;
    return s;
  }
  function X(e, t, s) {
    e.style.setProperty(t, s);
  }
  function C({ swiper: s, targetPosition: a, side: i }) {
    const r = k(),
      n = -s.translate;
    let l = null,
      o;
    const d = s.params.speed;
    (s.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(s.cssModeFrameID);
    const c = a > n ? "next" : "prev",
      p = (e, t) => ("next" === c && t <= e) || ("prev" === c && e <= t),
      u = () => {
        (o = new Date().getTime()), null === l && (l = o);
        var e = Math.max(Math.min((o - l) / d, 1), 0),
          e = 0.5 - Math.cos(e * Math.PI) / 2;
        let t = n + e * (a - n);
        if ((p(t, a) && (t = a), s.wrapperEl.scrollTo({ [i]: t }), p(t, a)))
          return (
            (s.wrapperEl.style.overflow = "hidden"),
            (s.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (s.wrapperEl.style.overflow = ""),
                s.wrapperEl.scrollTo({ [i]: t });
            }),
            void r.cancelAnimationFrame(s.cssModeFrameID)
          );
        s.cssModeFrameID = r.requestAnimationFrame(u);
      };
    u();
  }
  Object.keys(o).forEach((e) => {
    Object.defineProperty(O.fn, e, { value: o[e], writable: !0 });
  });
  let e;
  function u() {
    return (
      (e =
        e ||
        (function() {
          const s = k();
          var e = E();
          return {
            smoothScroll:
              e.documentElement && "scrollBehavior" in e.documentElement.style,
            touch: !!(
              "ontouchstart" in s ||
              (s.DocumentTouch && e instanceof s.DocumentTouch)
            ),
            passiveListener: (function() {
              let e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                  get() {
                    e = !0;
                  },
                });
                s.addEventListener("testPassiveListener", null, t);
              } catch (e) {}
              return e;
            })(),
            gestures: "ongesturestart" in s,
          };
        })()),
      e
    );
  }
  let c;
  function h(e = {}) {
    return (
      (c =
        c ||
        (function({ userAgent: e } = {}) {
          var t = u(),
            s = (c = k()).navigator.platform;
          const a = e || c.navigator.userAgent,
            i = { ios: !1, android: !1 };
          var r = c.screen.width,
            n = c.screen.height,
            l = a.match(/(Android);?[\s\/]+([\d.]+)?/);
          let o = a.match(/(iPad).*OS\s([\d_]+)/);
          var d = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            e = !o && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            c = "Win32" === s;
          let p = "MacIntel" === s;
          return (
            !o &&
              p &&
              t.touch &&
              0 <=
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${r}x${n}`) &&
              ((o = a.match(/(Version)\/([\d.]+)/)),
              (o = o || [0, 1, "13_0_0"]),
              (p = !1)),
            l && !c && ((i.os = "android"), (i.android = !0)),
            (o || e || d) && ((i.os = "ios"), (i.ios = !0)),
            i
          );
        })(e)),
      c
    );
  }
  let m;
  function f() {
    const t = k();
    return {
      isSafari: (function() {
        const e = t.navigator.userAgent.toLowerCase();
        return (
          0 <= e.indexOf("safari") &&
          e.indexOf("chrome") < 0 &&
          e.indexOf("android") < 0
        );
      })(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        t.navigator.userAgent
      ),
    };
  }
  function g({ swiper: e, runCallbacks: t, direction: s, step: a }) {
    var { activeIndex: i, previousIndex: r } = e;
    let n = s;
    (n = n || (r < i ? "next" : i < r ? "prev" : "reset")),
      e.emit(`transition${a}`),
      t &&
        i !== r &&
        ("reset" !== n
          ? (e.emit(`slideChangeTransition${a}`),
            "next" === n
              ? e.emit(`slideNextTransition${a}`)
              : e.emit(`slidePrevTransition${a}`))
          : e.emit(`slideResetTransition${a}`));
  }
  function x(s, e = this) {
    return (function e(t) {
      return t && t !== E() && t !== k()
        ? (t = t.assignedSlot || t).closest(s) || e(t.getRootNode().host)
        : null;
    })(e);
  }
  function w() {
    var e,
      t,
      s = this,
      { params: a, el: i } = s;
    (i && 0 === i.offsetWidth) ||
      (a.breakpoints && s.setBreakpoint(),
      ({ allowSlideNext: e, allowSlidePrev: t, snapGrid: i } = s),
      (s.allowSlideNext = !0),
      (s.allowSlidePrev = !0),
      s.updateSize(),
      s.updateSlides(),
      s.updateSlidesClasses(),
      ("auto" === a.slidesPerView || 1 < a.slidesPerView) &&
      s.isEnd &&
      !s.isBeginning &&
      !s.params.centeredSlides
        ? s.slideTo(s.slides.length - 1, 0, !1, !0)
        : s.slideTo(s.activeIndex, 0, !1, !0),
      s.autoplay && s.autoplay.running && s.autoplay.paused && s.autoplay.run(),
      (s.allowSlidePrev = t),
      (s.allowSlideNext = e),
      s.params.watchOverflow && i !== s.snapGrid && s.checkOverflow());
  }
  let b = !1;
  function y() {}
  const T = (e, t) => {
    const s = E(),
      {
        params: a,
        touchEvents: i,
        el: r,
        wrapperEl: n,
        device: l,
        support: o,
      } = e;
    var d = !!a.nested,
      c = "on" === t ? "addEventListener" : "removeEventListener",
      p = t;
    o.touch
      ? ((t = !(
          "touchstart" !== i.start ||
          !o.passiveListener ||
          !a.passiveListeners
        ) && { passive: !0, capture: !1 }),
        r[c](i.start, e.onTouchStart, t),
        r[c](
          i.move,
          e.onTouchMove,
          o.passiveListener ? { passive: !1, capture: d } : d
        ),
        r[c](i.end, e.onTouchEnd, t),
        i.cancel && r[c](i.cancel, e.onTouchEnd, t))
      : (r[c](i.start, e.onTouchStart, !1),
        s[c](i.move, e.onTouchMove, d),
        s[c](i.end, e.onTouchEnd, !1)),
      (a.preventClicks || a.preventClicksPropagation) &&
        r[c]("click", e.onClick, !0),
      a.cssMode && n[c]("scroll", e.onScroll),
      a.updateOnWindowResize
        ? e[p](
            l.ios || l.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            w,
            !0
          )
        : e[p]("observerUpdate", w, !0);
  };
  const $ = (e, t) => e.grid && t.grid && 1 < t.grid.rows;
  var M = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  const P = {
      eventsEmitter: {
        on(e, t, s) {
          const a = this;
          if ("function" != typeof t) return a;
          const i = s ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              a.eventsListeners[e] || (a.eventsListeners[e] = []),
                a.eventsListeners[e][i](t);
            }),
            a
          );
        },
        once(t, s, e) {
          const a = this;
          return "function" != typeof s
            ? a
            : ((i.__emitterProxy = s), a.on(t, i, e));
          function i(...e) {
            a.off(t, i),
              i.__emitterProxy && delete i.__emitterProxy,
              s.apply(a, e);
          }
        },
        onAny(e, t) {
          if ("function" != typeof e) return this;
          t = t ? "unshift" : "push";
          return (
            this.eventsAnyListeners.indexOf(e) < 0 &&
              this.eventsAnyListeners[t](e),
            this
          );
        },
        offAny(e) {
          var t = this;
          if (!t.eventsAnyListeners) return t;
          e = t.eventsAnyListeners.indexOf(e);
          return 0 <= e && t.eventsAnyListeners.splice(e, 1), t;
        },
        off(e, a) {
          const i = this;
          return (
            i.eventsListeners &&
              e.split(" ").forEach((s) => {
                void 0 === a
                  ? (i.eventsListeners[s] = [])
                  : i.eventsListeners[s] &&
                    i.eventsListeners[s].forEach((e, t) => {
                      (e === a ||
                        (e.__emitterProxy && e.__emitterProxy === a)) &&
                        i.eventsListeners[s].splice(t, 1);
                    });
              }),
            i
          );
        },
        emit(...e) {
          const s = this;
          if (!s.eventsListeners) return s;
          let t, a, i;
          (i =
            "string" == typeof e[0] || Array.isArray(e[0])
              ? ((t = e[0]), (a = e.slice(1, e.length)), s)
              : ((t = e[0].events), (a = e[0].data), e[0].context || s)),
            a.unshift(i);
          const r = Array.isArray(t) ? t : t.split(" ");
          return (
            r.forEach((t) => {
              s.eventsAnyListeners &&
                s.eventsAnyListeners.length &&
                s.eventsAnyListeners.forEach((e) => {
                  e.apply(i, [t, ...a]);
                }),
                s.eventsListeners &&
                  s.eventsListeners[t] &&
                  s.eventsListeners[t].forEach((e) => {
                    e.apply(i, a);
                  });
            }),
            s
          );
        },
      },
      update: {
        updateSize: function() {
          var e = this;
          let t, s;
          const a = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : a[0].clientWidth),
            (s =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : a[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === s && e.isVertical()) ||
              ((t =
                t -
                parseInt(a.css("padding-left") || 0, 10) -
                parseInt(a.css("padding-right") || 0, 10)),
              (s =
                s -
                parseInt(a.css("padding-top") || 0, 10) -
                parseInt(a.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(s) && (s = 0),
              Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s,
              }));
        },
        updateSlides: function() {
          const s = this;
          function a(e) {
            return s.isHorizontal()
              ? e
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[e];
          }
          function i(e, t) {
            return parseFloat(e.getPropertyValue(a(t)) || 0);
          }
          const r = s.params,
            { $wrapperEl: e, size: n, rtlTranslate: l, wrongRTL: o } = s;
          var d = s.virtual && r.virtual.enabled,
            c = (d ? s.virtual : s).slides.length;
          const p = e.children(`.${s.params.slideClass}`);
          var u = (d ? s.virtual.slides : p).length;
          let h = [];
          const m = [],
            f = [];
          let g = r.slidesOffsetBefore;
          "function" == typeof g && (g = r.slidesOffsetBefore.call(s));
          let v = r.slidesOffsetAfter;
          "function" == typeof v && (v = r.slidesOffsetAfter.call(s));
          var x = s.snapGrid.length,
            w = s.slidesGrid.length;
          let b = r.spaceBetween,
            y = -g,
            E = 0,
            S = 0;
          if (void 0 !== n) {
            "string" == typeof b &&
              0 <= b.indexOf("%") &&
              (b = (parseFloat(b.replace("%", "")) / 100) * n),
              (s.virtualSize = -b),
              l
                ? p.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : p.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              r.centeredSlides &&
                r.cssMode &&
                (X(s.wrapperEl, "--swiper-centered-offset-before", ""),
                X(s.wrapperEl, "--swiper-centered-offset-after", ""));
            var C = r.grid && 1 < r.grid.rows && s.grid;
            C && s.grid.initSlides(u);
            let t;
            var T =
              "auto" === r.slidesPerView &&
              r.breakpoints &&
              0 <
                Object.keys(r.breakpoints).filter(
                  (e) => void 0 !== r.breakpoints[e].slidesPerView
                ).length;
            for (let e = 0; e < u; e += 1) {
              t = 0;
              const N = p.eq(e);
              if (
                (C && s.grid.updateSlide(e, N, u, a),
                "none" !== N.css("display"))
              ) {
                if ("auto" === r.slidesPerView) {
                  T && (p[e].style[a("width")] = "");
                  const D = getComputedStyle(N[0]);
                  var $,
                    M,
                    P,
                    z,
                    k,
                    O,
                    L,
                    A = N[0].style.transform,
                    I = N[0].style.webkitTransform;
                  A && (N[0].style.transform = "none"),
                    I && (N[0].style.webkitTransform = "none"),
                    (t = r.roundLengths
                      ? s.isHorizontal()
                        ? N.outerWidth(!0)
                        : N.outerHeight(!0)
                      : (($ = i(D, "width")),
                        (M = i(D, "padding-left")),
                        (P = i(D, "padding-right")),
                        (z = i(D, "margin-left")),
                        (k = i(D, "margin-right")),
                        (L = D.getPropertyValue("box-sizing")) &&
                        "border-box" === L
                          ? $ + z + k
                          : (({ clientWidth: O, offsetWidth: L } = N[0]),
                            $ + M + P + z + k + (L - O)))),
                    A && (N[0].style.transform = A),
                    I && (N[0].style.webkitTransform = I),
                    r.roundLengths && (t = Math.floor(t));
                } else
                  (t = (n - (r.slidesPerView - 1) * b) / r.slidesPerView),
                    r.roundLengths && (t = Math.floor(t)),
                    p[e] && (p[e].style[a("width")] = `${t}px`);
                p[e] && (p[e].swiperSlideSize = t),
                  f.push(t),
                  r.centeredSlides
                    ? ((y = y + t / 2 + E / 2 + b),
                      0 === E && 0 !== e && (y = y - n / 2 - b),
                      0 === e && (y = y - n / 2 - b),
                      Math.abs(y) < 0.001 && (y = 0),
                      r.roundLengths && (y = Math.floor(y)),
                      S % r.slidesPerGroup == 0 && h.push(y),
                      m.push(y))
                    : (r.roundLengths && (y = Math.floor(y)),
                      (S - Math.min(s.params.slidesPerGroupSkip, S)) %
                        s.params.slidesPerGroup ==
                        0 && h.push(y),
                      m.push(y),
                      (y = y + t + b)),
                  (s.virtualSize += t + b),
                  (E = t),
                  (S += 1);
              }
            }
            if (
              ((s.virtualSize = Math.max(s.virtualSize, n) + v),
              l &&
                o &&
                ("slide" === r.effect || "coverflow" === r.effect) &&
                e.css({ width: `${s.virtualSize + r.spaceBetween}px` }),
              r.setWrapperSize &&
                e.css({ [a("width")]: `${s.virtualSize + r.spaceBetween}px` }),
              C && s.grid.updateWrapperSize(t, h, a),
              !r.centeredSlides)
            ) {
              const B = [];
              for (let t = 0; t < h.length; t += 1) {
                let e = h[t];
                r.roundLengths && (e = Math.floor(e)),
                  h[t] <= s.virtualSize - n && B.push(e);
              }
              (h = B),
                1 <
                  Math.floor(s.virtualSize - n) - Math.floor(h[h.length - 1]) &&
                  h.push(s.virtualSize - n);
            }
            if (
              (0 === h.length && (h = [0]),
              0 !== r.spaceBetween &&
                ((d = s.isHorizontal() && l ? "marginLeft" : a("marginRight")),
                p
                  .filter((e, t) => !r.cssMode || t !== p.length - 1)
                  .css({ [d]: `${b}px` })),
              r.centeredSlides && r.centeredSlidesBounds)
            ) {
              let t = 0;
              f.forEach((e) => {
                t += e + (r.spaceBetween || 0);
              }),
                (t -= r.spaceBetween);
              const G = t - n;
              h = h.map((e) => (e < 0 ? -g : e > G ? G + v : e));
            }
            if (r.centerInsufficientSlides) {
              let t = 0;
              if (
                (f.forEach((e) => {
                  t += e + (r.spaceBetween || 0);
                }),
                (t -= r.spaceBetween),
                t < n)
              ) {
                const _ = (n - t) / 2;
                h.forEach((e, t) => {
                  h[t] = e - _;
                }),
                  m.forEach((e, t) => {
                    m[t] = e + _;
                  });
              }
            }
            if (
              (Object.assign(s, {
                slides: p,
                snapGrid: h,
                slidesGrid: m,
                slidesSizesGrid: f,
              }),
              r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
            ) {
              X(s.wrapperEl, "--swiper-centered-offset-before", `${-h[0]}px`),
                X(
                  s.wrapperEl,
                  "--swiper-centered-offset-after",
                  `${s.size / 2 - f[f.length - 1] / 2}px`
                );
              const j = -s.snapGrid[0],
                H = -s.slidesGrid[0];
              (s.snapGrid = s.snapGrid.map((e) => e + j)),
                (s.slidesGrid = s.slidesGrid.map((e) => e + H));
            }
            u !== c && s.emit("slidesLengthChange"),
              h.length !== x &&
                (s.params.watchOverflow && s.checkOverflow(),
                s.emit("snapGridLengthChange")),
              m.length !== w && s.emit("slidesGridLengthChange"),
              r.watchSlidesProgress && s.updateSlidesOffset();
          }
        },
        updateAutoHeight: function(e) {
          const s = this,
            t = [],
            a = s.virtual && s.params.virtual.enabled;
          let i = 0,
            r;
          "number" == typeof e
            ? s.setTransition(e)
            : !0 === e && s.setTransition(s.params.speed);
          var n,
            l = (t) =>
              (a
                ? s.slides.filter(
                    (e) =>
                      parseInt(
                        e.getAttribute("data-swiper-slide-index"),
                        10
                      ) === t
                  )
                : s.slides.eq(t))[0];
          if ("auto" !== s.params.slidesPerView && 1 < s.params.slidesPerView)
            if (s.params.centeredSlides)
              s.visibleSlides.each((e) => {
                t.push(e);
              });
            else
              for (r = 0; r < Math.ceil(s.params.slidesPerView); r += 1) {
                var o = s.activeIndex + r;
                if (o > s.slides.length && !a) break;
                t.push(l(o));
              }
          else t.push(l(s.activeIndex));
          for (r = 0; r < t.length; r += 1)
            void 0 !== t[r] && ((n = t[r].offsetHeight), (i = n > i ? n : i));
          i && s.$wrapperEl.css("height", `${i}px`);
        },
        updateSlidesOffset: function() {
          const t = this.slides;
          for (let e = 0; e < t.length; e += 1)
            t[e].swiperSlideOffset = this.isHorizontal()
              ? t[e].offsetLeft
              : t[e].offsetTop;
        },
        updateSlidesProgress: function(e = (this && this.translate) || 0) {
          var a = this,
            i = a.params;
          const { slides: r, rtlTranslate: n, snapGrid: l } = a;
          if (0 !== r.length) {
            void 0 === r[0].swiperSlideOffset && a.updateSlidesOffset();
            let s = n ? e : -e;
            r.removeClass(i.slideVisibleClass),
              (a.visibleSlidesIndexes = []),
              (a.visibleSlides = []);
            for (let t = 0; t < r.length; t += 1) {
              const u = r[t];
              let e = u.swiperSlideOffset;
              i.cssMode && i.centeredSlides && (e -= r[0].swiperSlideOffset);
              var o =
                  (s + (i.centeredSlides ? a.minTranslate() : 0) - e) /
                  (u.swiperSlideSize + i.spaceBetween),
                d =
                  (s - l[0] + (i.centeredSlides ? a.minTranslate() : 0) - e) /
                  (u.swiperSlideSize + i.spaceBetween),
                c = -(s - e),
                p = c + a.slidesSizesGrid[t];
              ((0 <= c && c < a.size - 1) ||
                (1 < p && p <= a.size) ||
                (c <= 0 && p >= a.size)) &&
                (a.visibleSlides.push(u),
                a.visibleSlidesIndexes.push(t),
                r.eq(t).addClass(i.slideVisibleClass)),
                (u.progress = n ? -o : o),
                (u.originalProgress = n ? -d : d);
            }
            a.visibleSlides = O(a.visibleSlides);
          }
        },
        updateProgress: function(e) {
          var t = this;
          void 0 === e &&
            ((o = t.rtlTranslate ? -1 : 1),
            (e = (t && t.translate && t.translate * o) || 0));
          var s = t.params,
            a = t.maxTranslate() - t.minTranslate();
          let { progress: i, isBeginning: r, isEnd: n } = t;
          var l = r,
            o = n;
          (n =
            0 == a
              ? ((i = 0), (r = !0))
              : ((i = (e - t.minTranslate()) / a), (r = i <= 0), 1 <= i)),
            Object.assign(t, { progress: i, isBeginning: r, isEnd: n }),
            (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
              t.updateSlidesProgress(e),
            r && !l && t.emit("reachBeginning toEdge"),
            n && !o && t.emit("reachEnd toEdge"),
            ((l && !r) || (o && !n)) && t.emit("fromEdge"),
            t.emit("progress", i);
        },
        updateSlidesClasses: function() {
          const {
            slides: e,
            params: t,
            $wrapperEl: s,
            activeIndex: a,
            realIndex: i,
          } = this;
          var r = this.virtual && t.virtual.enabled;
          e.removeClass(
            `${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`
          );
          let n;
          (n = r
            ? this.$wrapperEl.find(
                `.${t.slideClass}[data-swiper-slide-index="${a}"]`
              )
            : e.eq(a)),
            n.addClass(t.slideActiveClass),
            t.loop &&
              (n.hasClass(t.slideDuplicateClass)
                ? s.children(
                    `.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${i}"]`
                  )
                : s.children(
                    `.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${i}"]`
                  )
              ).addClass(t.slideDuplicateActiveClass);
          let l = n
            .nextAll(`.${t.slideClass}`)
            .eq(0)
            .addClass(t.slideNextClass);
          t.loop &&
            0 === l.length &&
            ((l = e.eq(0)), l.addClass(t.slideNextClass));
          let o = n
            .prevAll(`.${t.slideClass}`)
            .eq(0)
            .addClass(t.slidePrevClass);
          t.loop &&
            0 === o.length &&
            ((o = e.eq(-1)), o.addClass(t.slidePrevClass)),
            t.loop &&
              ((l.hasClass(t.slideDuplicateClass)
                ? s.children(
                    `.${t.slideClass}:not(.${
                      t.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                : s.children(
                    `.${t.slideClass}.${
                      t.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
              ).addClass(t.slideDuplicateNextClass),
              (o.hasClass(t.slideDuplicateClass)
                ? s.children(
                    `.${t.slideClass}:not(.${
                      t.slideDuplicateClass
                    })[data-swiper-slide-index="${o.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                : s.children(
                    `.${t.slideClass}.${
                      t.slideDuplicateClass
                    }[data-swiper-slide-index="${o.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
              ).addClass(t.slideDuplicatePrevClass)),
            this.emitSlidesClasses();
        },
        updateActiveIndex: function(e) {
          var t,
            s = this,
            a = s.rtlTranslate ? s.translate : -s.translate;
          const {
            slidesGrid: i,
            snapGrid: r,
            params: n,
            activeIndex: l,
            realIndex: o,
            snapIndex: d,
          } = s;
          let c = e,
            p;
          if (void 0 === c) {
            for (let e = 0; e < i.length; e += 1)
              void 0 !== i[e + 1]
                ? a >= i[e] && a < i[e + 1] - (i[e + 1] - i[e]) / 2
                  ? (c = e)
                  : a >= i[e] && a < i[e + 1] && (c = e + 1)
                : a >= i[e] && (c = e);
            n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
          }
          (p =
            0 <= r.indexOf(a)
              ? r.indexOf(a)
              : (t = Math.min(n.slidesPerGroupSkip, c)) +
                Math.floor((c - t) / n.slidesPerGroup)),
            p >= r.length && (p = r.length - 1),
            c !== l
              ? ((t = parseInt(
                  s.slides.eq(c).attr("data-swiper-slide-index") || c,
                  10
                )),
                Object.assign(s, {
                  snapIndex: p,
                  realIndex: t,
                  previousIndex: l,
                  activeIndex: c,
                }),
                s.emit("activeIndexChange"),
                s.emit("snapIndexChange"),
                o !== t && s.emit("realIndexChange"),
                (s.initialized || s.params.runCallbacksOnInit) &&
                  s.emit("slideChange"))
              : p !== d && ((s.snapIndex = p), s.emit("snapIndexChange"));
        },
        updateClickedSlide: function(e) {
          var t = this,
            s = t.params,
            a = O(e).closest(`.${s.slideClass}`)[0];
          let i = !1,
            r;
          if (a)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === a) {
                (i = !0), (r = e);
                break;
              }
          if (!a || !i)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = a),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  O(a).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = r),
            s.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      },
      translate: {
        getTranslate: function(e = this.isHorizontal() ? "x" : "y") {
          var {
            params: t,
            rtlTranslate: s,
            translate: a,
            $wrapperEl: i,
          } = this;
          if (t.virtualTranslate) return s ? -a : a;
          if (t.cssMode) return a;
          let r = L(i[0], e);
          return s && (r = -r), r || 0;
        },
        setTranslate: function(e, t) {
          var s = this;
          const {
            rtlTranslate: a,
            params: i,
            $wrapperEl: r,
            wrapperEl: n,
            progress: l,
          } = s;
          let o = 0,
            d = 0;
          s.isHorizontal() ? (o = a ? -e : e) : (d = e),
            i.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
            i.cssMode
              ? (n[
                  s.isHorizontal() ? "scrollLeft" : "scrollTop"
                ] = s.isHorizontal() ? -o : -d)
              : i.virtualTranslate ||
                r.transform(`translate3d(${o}px, ${d}px, 0px)`),
            (s.previousTranslate = s.translate),
            (s.translate = s.isHorizontal() ? o : d);
          let c;
          var p = s.maxTranslate() - s.minTranslate();
          (c = 0 == p ? 0 : (e - s.minTranslate()) / p),
            c !== l && s.updateProgress(e),
            s.emit("setTranslate", s.translate, t);
        },
        minTranslate: function() {
          return -this.snapGrid[0];
        },
        maxTranslate: function() {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function(e = 0, t = this.params.speed, s = !0, a = !0, i) {
          const r = this,
            { params: n, wrapperEl: l } = r;
          if (r.animating && n.preventInteractionOnTransition) return !1;
          var o = r.minTranslate(),
            d = r.maxTranslate();
          let c;
          if (
            ((c = a && o < e ? o : a && e < d ? d : e),
            r.updateProgress(c),
            n.cssMode)
          ) {
            e = r.isHorizontal();
            if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
            else {
              if (!r.support.smoothScroll)
                return (
                  C({
                    swiper: r,
                    targetPosition: -c,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(c),
                s &&
                  (r.emit("beforeTransitionStart", t, i),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(c),
                s &&
                  (r.emit("beforeTransitionStart", t, i),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function(e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        s && r.emit("transitionEnd"));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      },
      transition: {
        setTransition: function(e, t) {
          this.params.cssMode || this.$wrapperEl.transition(e),
            this.emit("setTransition", e, t);
        },
        transitionStart: function(e = !0, t) {
          var s = this["params"];
          s.cssMode ||
            (s.autoHeight && this.updateAutoHeight(),
            g({ swiper: this, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function(e = !0, t) {
          var s = this["params"];
          (this.animating = !1),
            s.cssMode ||
              (this.setTransition(0),
              g({ swiper: this, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: {
        slideTo: function(e = 0, t = this.params.speed, s = !0, a, i) {
          if ("number" != typeof e && "string" != typeof e)
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            var r = parseInt(e, 10);
            if (!isFinite(r))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = r;
          }
          const n = this;
          let l = e;
          l < 0 && (l = 0);
          const {
            params: o,
            snapGrid: d,
            slidesGrid: c,
            previousIndex: p,
            activeIndex: u,
            rtlTranslate: h,
            wrapperEl: m,
            enabled: f,
          } = n;
          if (
            (n.animating && o.preventInteractionOnTransition) ||
            (!f && !a && !i)
          )
            return !1;
          let g =
            (r = Math.min(n.params.slidesPerGroupSkip, l)) +
            Math.floor((l - r) / n.params.slidesPerGroup);
          g >= d.length && (g = d.length - 1),
            (u || o.initialSlide || 0) === (p || 0) &&
              s &&
              n.emit("beforeSlideChangeStart");
          var v = -d[g];
          if ((n.updateProgress(v), o.normalizeSlideIndex))
            for (let e = 0; e < c.length; e += 1) {
              var x = -Math.floor(100 * v),
                w = Math.floor(100 * c[e]),
                b = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? w <= x && x < b - (b - w) / 2
                  ? (l = e)
                  : w <= x && x < b && (l = e + 1)
                : w <= x && (l = e);
            }
          if (n.initialized && l !== u) {
            if (!n.allowSlideNext && v < n.translate && v < n.minTranslate())
              return !1;
            if (
              !n.allowSlidePrev &&
              v > n.translate &&
              v > n.maxTranslate() &&
              (u || 0) !== l
            )
              return !1;
          }
          let y;
          if (
            ((y = l > u ? "next" : l < u ? "prev" : "reset"),
            (h && -v === n.translate) || (!h && v === n.translate))
          )
            return (
              n.updateActiveIndex(l),
              o.autoHeight && n.updateAutoHeight(),
              n.updateSlidesClasses(),
              "slide" !== o.effect && n.setTranslate(v),
              "reset" !== y && (n.transitionStart(s, y), n.transitionEnd(s, y)),
              !1
            );
          if (o.cssMode) {
            (e = n.isHorizontal()), (i = h ? v : -v);
            if (0 === t) {
              r = n.virtual && n.params.virtual.enabled;
              r &&
                ((n.wrapperEl.style.scrollSnapType = "none"),
                (n._immediateVirtual = !0)),
                (m[e ? "scrollLeft" : "scrollTop"] = i),
                r &&
                  requestAnimationFrame(() => {
                    (n.wrapperEl.style.scrollSnapType = ""),
                      (n._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!n.support.smoothScroll)
                return (
                  C({ swiper: n, targetPosition: i, side: e ? "left" : "top" }),
                  !0
                );
              m.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (n.setTransition(0),
                n.setTranslate(v),
                n.updateActiveIndex(l),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", t, a),
                n.transitionStart(s, y),
                n.transitionEnd(s, y))
              : (n.setTransition(t),
                n.setTranslate(v),
                n.updateActiveIndex(l),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", t, a),
                n.transitionStart(s, y),
                n.animating ||
                  ((n.animating = !0),
                  n.onSlideToWrapperTransitionEnd ||
                    (n.onSlideToWrapperTransitionEnd = function(e) {
                      n &&
                        !n.destroyed &&
                        e.target === this &&
                        (n.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          n.onSlideToWrapperTransitionEnd
                        ),
                        n.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          n.onSlideToWrapperTransitionEnd
                        ),
                        (n.onSlideToWrapperTransitionEnd = null),
                        delete n.onSlideToWrapperTransitionEnd,
                        n.transitionEnd(s, y));
                    }),
                  n.$wrapperEl[0].addEventListener(
                    "transitionend",
                    n.onSlideToWrapperTransitionEnd
                  ),
                  n.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    n.onSlideToWrapperTransitionEnd
                  ))),
            !0
          );
        },
        slideToLoop: function(e = 0, t = this.params.speed, s = !0, a) {
          let i = e;
          return (
            this.params.loop && (i += this.loopedSlides),
            this.slideTo(i, t, s, a)
          );
        },
        slideNext: function(e = this.params.speed, t = !0, s) {
          var a = this,
            { animating: i, enabled: r, params: n } = a;
          if (!r) return a;
          let l = n.slidesPerGroup;
          if (
            ("auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              (l = Math.max(a.slidesPerViewDynamic("current", !0), 1)),
            (r = a.activeIndex < n.slidesPerGroupSkip ? 1 : l),
            n.loop)
          ) {
            if (i && n.loopPreventsSlide) return !1;
            a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
          }
          return a.slideTo(a.activeIndex + r, e, t, s);
        },
        slidePrev: function(e = this.params.speed, t = !0, s) {
          var a = this;
          const {
            params: i,
            animating: r,
            snapGrid: n,
            slidesGrid: l,
            rtlTranslate: o,
            enabled: d,
          } = a;
          if (!d) return a;
          if (i.loop) {
            if (r && i.loopPreventsSlide) return !1;
            a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
          }
          function c(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const p = c(o ? a.translate : -a.translate),
            u = n.map((e) => c(e));
          let h = n[u.indexOf(p) - 1];
          if (void 0 === h && i.cssMode) {
            let s;
            n.forEach((e, t) => {
              p >= e && (s = t);
            }),
              void 0 !== s && (h = n[0 < s ? s - 1 : s]);
          }
          let m = 0;
          return (
            void 0 !== h &&
              ((m = l.indexOf(h)),
              m < 0 && (m = a.activeIndex - 1),
              "auto" === i.slidesPerView &&
                1 === i.slidesPerGroup &&
                i.slidesPerGroupAuto &&
                ((m = m - a.slidesPerViewDynamic("previous", !0) + 1),
                (m = Math.max(m, 0)))),
            a.slideTo(m, e, t, s)
          );
        },
        slideReset: function(e = this.params.speed, t = !0, s) {
          return this.slideTo(this.activeIndex, e, t, s);
        },
        slideToClosest: function(e = this.params.speed, t = !0, s, a = 0.5) {
          var i = this;
          let r = i.activeIndex;
          var n = Math.min(i.params.slidesPerGroupSkip, r),
            l = n + Math.floor((r - n) / i.params.slidesPerGroup),
            o = i.rtlTranslate ? i.translate : -i.translate;
          return (
            o >= i.snapGrid[l]
              ? ((n = i.snapGrid[l]),
                (i.snapGrid[l + 1] - n) * a < o - n &&
                  (r += i.params.slidesPerGroup))
              : o - (o = i.snapGrid[l - 1]) <= (i.snapGrid[l] - o) * a &&
                (r -= i.params.slidesPerGroup),
            (r = Math.max(r, 0)),
            (r = Math.min(r, i.slidesGrid.length - 1)),
            i.slideTo(r, e, t, s)
          );
        },
        slideToClickedSlide: function() {
          const e = this,
            { params: t, $wrapperEl: s } = e;
          var a,
            i =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let r = e.clickedIndex;
          t.loop
            ? e.animating ||
              ((a = parseInt(
                O(e.clickedSlide).attr("data-swiper-slide-index"),
                10
              )),
              t.centeredSlides
                ? r < e.loopedSlides - i / 2 ||
                  r > e.slides.length - e.loopedSlides + i / 2
                  ? (e.loopFix(),
                    (r = s
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    S(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r)
                : r > e.slides.length - i
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  S(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r))
            : e.slideTo(r);
        },
      },
      loop: {
        loopCreate: function() {
          const a = this,
            t = E(),
            { params: s, $wrapperEl: e } = a,
            i = 0 < e.children().length ? O(e.children()[0].parentNode) : e;
          i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
          let r = i.children(`.${s.slideClass}`);
          if (s.loopFillGroupWithBlank) {
            var n = s.slidesPerGroup - (r.length % s.slidesPerGroup);
            if (n !== s.slidesPerGroup) {
              for (let e = 0; e < n; e += 1) {
                var l = O(t.createElement("div")).addClass(
                  `${s.slideClass} ${s.slideBlankClass}`
                );
                i.append(l);
              }
              r = i.children(`.${s.slideClass}`);
            }
          }
          "auto" !== s.slidesPerView ||
            s.loopedSlides ||
            (s.loopedSlides = r.length),
            (a.loopedSlides = Math.ceil(
              parseFloat(s.loopedSlides || s.slidesPerView, 10)
            )),
            (a.loopedSlides += s.loopAdditionalSlides),
            a.loopedSlides > r.length && (a.loopedSlides = r.length);
          const o = [],
            d = [];
          r.each((e, t) => {
            const s = O(e);
            t < a.loopedSlides && d.push(e),
              t < r.length && t >= r.length - a.loopedSlides && o.push(e),
              s.attr("data-swiper-slide-index", t);
          });
          for (let e = 0; e < d.length; e += 1)
            i.append(O(d[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
          for (let e = o.length - 1; 0 <= e; --e)
            i.prepend(O(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        },
        loopFix: function() {
          var e = this;
          e.emit("beforeLoopFix");
          var {
            activeIndex: t,
            slides: s,
            loopedSlides: a,
            allowSlidePrev: i,
            allowSlideNext: r,
            snapGrid: n,
            rtlTranslate: l,
          } = e;
          let o;
          (e.allowSlidePrev = !0),
            (e.allowSlideNext = !0),
            (n = -n[t] - e.getTranslate()),
            t < a
              ? ((o = s.length - 3 * a + t),
                (o += a),
                e.slideTo(o, 0, !1, !0) &&
                  0 != n &&
                  e.setTranslate((l ? -e.translate : e.translate) - n))
              : t >= s.length - a &&
                ((o = -s.length + t + a),
                (o += a),
                e.slideTo(o, 0, !1, !0) &&
                  0 != n &&
                  e.setTranslate((l ? -e.translate : e.translate) - n)),
            (e.allowSlidePrev = i),
            (e.allowSlideNext = r),
            e.emit("loopFix");
        },
        loopDestroy: function() {
          const { $wrapperEl: e, params: t, slides: s } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            s.removeAttr("data-swiper-slide-index");
        },
      },
      grabCursor: {
        setGrabCursor: function(e) {
          var t = this;
          if (
            !(
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
          ) {
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (s.style.cursor = e ? "grabbing" : "grab");
          }
        },
        unsetGrabCursor: function() {
          var e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: {
        attachEvents: function() {
          var e = this;
          const t = E();
          var { params: s, support: a } = e;
          (e.onTouchStart = function(e) {
            var a = this;
            const i = E();
            var r = k();
            const n = a.touchEventsData,
              { params: l, touches: o, enabled: t } = a;
            if (t && (!a.animating || !l.preventInteractionOnTransition)) {
              !a.animating && l.cssMode && l.loop && a.loopFix();
              let t = e;
              t.originalEvent && (t = t.originalEvent);
              let s = O(t.target);
              if (
                ("wrapper" !== l.touchEventsTarget ||
                  s.closest(a.wrapperEl).length) &&
                ((n.isTouchEvent = "touchstart" === t.type),
                (n.isTouchEvent || !("which" in t) || 3 !== t.which) &&
                  !(
                    (!n.isTouchEvent && "button" in t && 0 < t.button) ||
                    (n.isTouched && n.isMoved)
                  ))
              ) {
                !!l.noSwipingClass &&
                  "" !== l.noSwipingClass &&
                  t.target &&
                  t.target.shadowRoot &&
                  e.path &&
                  e.path[0] &&
                  (s = O(e.path[0]));
                var d = l.noSwipingSelector || `.${l.noSwipingClass}`,
                  c = !(!t.target || !t.target.shadowRoot);
                if (l.noSwiping && (c ? x(d, t.target) : s.closest(d)[0]))
                  a.allowClick = !0;
                else if (!l.swipeHandler || s.closest(l.swipeHandler)[0]) {
                  (o.currentX = ("touchstart" === t.type
                    ? t.targetTouches[0]
                    : t
                  ).pageX),
                    (o.currentY = ("touchstart" === t.type
                      ? t.targetTouches[0]
                      : t
                    ).pageY);
                  var p = o.currentX,
                    u = o.currentY,
                    c = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
                    d = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
                  if (c && (p <= d || p >= r.innerWidth - d)) {
                    if ("prevent" !== c) return;
                    e.preventDefault();
                  }
                  if (
                    (Object.assign(n, {
                      isTouched: !0,
                      isMoved: !1,
                      allowTouchCallbacks: !0,
                      isScrolling: void 0,
                      startMoving: void 0,
                    }),
                    (o.startX = p),
                    (o.startY = u),
                    (n.touchStartTime = v()),
                    (a.allowClick = !0),
                    a.updateSize(),
                    (a.swipeDirection = void 0),
                    0 < l.threshold && (n.allowThresholdMove = !1),
                    "touchstart" !== t.type)
                  ) {
                    let e = !0;
                    s.is(n.focusableElements) && (e = !1),
                      i.activeElement &&
                        O(i.activeElement).is(n.focusableElements) &&
                        i.activeElement !== s[0] &&
                        i.activeElement.blur();
                    u = e && a.allowTouchMove && l.touchStartPreventDefault;
                    (!l.touchStartForcePreventDefault && !u) ||
                      s[0].isContentEditable ||
                      t.preventDefault();
                  }
                  a.emit("touchStart", t);
                }
              }
            }
          }.bind(e)),
            (e.onTouchMove = function(i) {
              var r = E(),
                n = this;
              const l = n.touchEventsData,
                { params: o, touches: d, rtlTranslate: c, enabled: e } = n;
              if (e) {
                let a = i;
                if ((a.originalEvent && (a = a.originalEvent), l.isTouched)) {
                  if (!l.isTouchEvent || "touchmove" === a.type) {
                    var t =
                        "touchmove" === a.type &&
                        a.targetTouches &&
                        (a.targetTouches[0] || a.changedTouches[0]),
                      i = ("touchmove" === a.type ? t : a).pageX,
                      t = ("touchmove" === a.type ? t : a).pageY;
                    if (a.preventedByNestedSwiper)
                      return (d.startX = i), void (d.startY = t);
                    if (!n.allowTouchMove)
                      return (
                        (n.allowClick = !1),
                        void (
                          l.isTouched &&
                          (Object.assign(d, {
                            startX: i,
                            startY: t,
                            currentX: i,
                            currentY: t,
                          }),
                          (l.touchStartTime = v()))
                        )
                      );
                    if (l.isTouchEvent && o.touchReleaseOnEdges && !o.loop)
                      if (n.isVertical()) {
                        if (
                          (t < d.startY && n.translate <= n.maxTranslate()) ||
                          (t > d.startY && n.translate >= n.minTranslate())
                        )
                          return (l.isTouched = !1), void (l.isMoved = !1);
                      } else if (
                        (i < d.startX && n.translate <= n.maxTranslate()) ||
                        (i > d.startX && n.translate >= n.minTranslate())
                      )
                        return;
                    if (
                      l.isTouchEvent &&
                      r.activeElement &&
                      a.target === r.activeElement &&
                      O(a.target).is(l.focusableElements)
                    )
                      return (l.isMoved = !0), void (n.allowClick = !1);
                    if (
                      (l.allowTouchCallbacks && n.emit("touchMove", a),
                      !(a.targetTouches && 1 < a.targetTouches.length))
                    ) {
                      (d.currentX = i), (d.currentY = t);
                      (r = d.currentX - d.startX), (i = d.currentY - d.startY);
                      if (
                        !(
                          n.params.threshold &&
                          Math.sqrt(r ** 2 + i ** 2) < n.params.threshold
                        )
                      )
                        if (
                          (void 0 === l.isScrolling &&
                            ((n.isHorizontal() && d.currentY === d.startY) ||
                            (n.isVertical() && d.currentX === d.startX)
                              ? (l.isScrolling = !1)
                              : 25 <= r * r + i * i &&
                                ((t =
                                  (180 * Math.atan2(Math.abs(i), Math.abs(r))) /
                                  Math.PI),
                                (l.isScrolling = n.isHorizontal()
                                  ? t > o.touchAngle
                                  : 90 - t > o.touchAngle))),
                          l.isScrolling && n.emit("touchMoveOpposite", a),
                          void 0 === l.startMoving &&
                            ((d.currentX === d.startX &&
                              d.currentY === d.startY) ||
                              (l.startMoving = !0)),
                          l.isScrolling)
                        )
                          l.isTouched = !1;
                        else if (l.startMoving) {
                          (n.allowClick = !1),
                            !o.cssMode && a.cancelable && a.preventDefault(),
                            o.touchMoveStopPropagation &&
                              !o.nested &&
                              a.stopPropagation(),
                            l.isMoved ||
                              (o.loop && !o.cssMode && n.loopFix(),
                              (l.startTranslate = n.getTranslate()),
                              n.setTransition(0),
                              n.animating &&
                                n.$wrapperEl.trigger(
                                  "webkitTransitionEnd transitionend"
                                ),
                              (l.allowMomentumBounce = !1),
                              !o.grabCursor ||
                                (!0 !== n.allowSlideNext &&
                                  !0 !== n.allowSlidePrev) ||
                                n.setGrabCursor(!0),
                              n.emit("sliderFirstMove", a)),
                            n.emit("sliderMove", a),
                            (l.isMoved = !0);
                          let e = n.isHorizontal() ? r : i;
                          (d.diff = e),
                            (e *= o.touchRatio),
                            c && (e = -e),
                            (n.swipeDirection = 0 < e ? "prev" : "next"),
                            (l.currentTranslate = e + l.startTranslate);
                          let t = !0,
                            s = o.resistanceRatio;
                          if (
                            (o.touchReleaseOnEdges && (s = 0),
                            0 < e && l.currentTranslate > n.minTranslate()
                              ? ((t = !1),
                                o.resistance &&
                                  (l.currentTranslate =
                                    n.minTranslate() -
                                    1 +
                                    (-n.minTranslate() +
                                      l.startTranslate +
                                      e) **
                                      s))
                              : e < 0 &&
                                l.currentTranslate < n.maxTranslate() &&
                                ((t = !1),
                                o.resistance &&
                                  (l.currentTranslate =
                                    n.maxTranslate() +
                                    1 -
                                    (n.maxTranslate() - l.startTranslate - e) **
                                      s)),
                            t && (a.preventedByNestedSwiper = !0),
                            !n.allowSlideNext &&
                              "next" === n.swipeDirection &&
                              l.currentTranslate < l.startTranslate &&
                              (l.currentTranslate = l.startTranslate),
                            !n.allowSlidePrev &&
                              "prev" === n.swipeDirection &&
                              l.currentTranslate > l.startTranslate &&
                              (l.currentTranslate = l.startTranslate),
                            n.allowSlidePrev ||
                              n.allowSlideNext ||
                              (l.currentTranslate = l.startTranslate),
                            0 < o.threshold)
                          ) {
                            if (
                              !(
                                Math.abs(e) > o.threshold ||
                                l.allowThresholdMove
                              )
                            )
                              return void (l.currentTranslate =
                                l.startTranslate);
                            if (!l.allowThresholdMove)
                              return (
                                (l.allowThresholdMove = !0),
                                (d.startX = d.currentX),
                                (d.startY = d.currentY),
                                (l.currentTranslate = l.startTranslate),
                                void (d.diff = n.isHorizontal()
                                  ? d.currentX - d.startX
                                  : d.currentY - d.startY)
                              );
                          }
                          o.followFinger &&
                            !o.cssMode &&
                            (((o.freeMode &&
                              o.freeMode.enabled &&
                              n.freeMode) ||
                              o.watchSlidesProgress) &&
                              (n.updateActiveIndex(), n.updateSlidesClasses()),
                            n.params.freeMode &&
                              o.freeMode.enabled &&
                              n.freeMode &&
                              n.freeMode.onTouchMove(),
                            n.updateProgress(l.currentTranslate),
                            n.setTranslate(l.currentTranslate));
                        }
                    }
                  }
                } else
                  l.startMoving &&
                    l.isScrolling &&
                    n.emit("touchMoveOpposite", a);
              }
            }.bind(e)),
            (e.onTouchEnd = function(t) {
              const i = this,
                s = i.touchEventsData;
              var {
                params: r,
                touches: n,
                rtlTranslate: l,
                slidesGrid: o,
                enabled: d,
              } = i;
              if (d) {
                let e = t;
                if (
                  (e.originalEvent && (e = e.originalEvent),
                  s.allowTouchCallbacks && i.emit("touchEnd", e),
                  (s.allowTouchCallbacks = !1),
                  !s.isTouched)
                )
                  return (
                    s.isMoved && r.grabCursor && i.setGrabCursor(!1),
                    (s.isMoved = !1),
                    void (s.startMoving = !1)
                  );
                r.grabCursor &&
                  s.isMoved &&
                  s.isTouched &&
                  (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) &&
                  i.setGrabCursor(!1);
                var c = v(),
                  d = c - s.touchStartTime;
                if (
                  (i.allowClick &&
                    ((t = e.path || (e.composedPath && e.composedPath())),
                    i.updateClickedSlide((t && t[0]) || e.target),
                    i.emit("tap click", e),
                    d < 300 &&
                      c - s.lastClickTime < 300 &&
                      i.emit("doubleTap doubleClick", e)),
                  (s.lastClickTime = v()),
                  S(() => {
                    i.destroyed || (i.allowClick = !0);
                  }),
                  !s.isTouched ||
                    !s.isMoved ||
                    !i.swipeDirection ||
                    0 === n.diff ||
                    s.currentTranslate === s.startTranslate)
                )
                  return (
                    (s.isTouched = !1),
                    (s.isMoved = !1),
                    void (s.startMoving = !1)
                  );
                (s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1);
                let a;
                if (
                  ((a = r.followFinger
                    ? l
                      ? i.translate
                      : -i.translate
                    : -s.currentTranslate),
                  !r.cssMode)
                )
                  if (i.params.freeMode && r.freeMode.enabled)
                    i.freeMode.onTouchEnd({ currentPos: a });
                  else {
                    let t = 0,
                      s = i.slidesSizesGrid[0];
                    for (
                      let e = 0;
                      e < o.length;
                      e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
                    ) {
                      const p =
                        e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                      void 0 !== o[e + p]
                        ? a >= o[e] &&
                          a < o[e + p] &&
                          ((t = e), (s = o[e + p] - o[e]))
                        : a >= o[e] &&
                          ((t = e), (s = o[o.length - 1] - o[o.length - 2]));
                    }
                    l = (a - o[t]) / s;
                    const p =
                      t < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                    d > r.longSwipesMs
                      ? r.longSwipes
                        ? ("next" === i.swipeDirection &&
                            (l >= r.longSwipesRatio
                              ? i.slideTo(t + p)
                              : i.slideTo(t)),
                          "prev" === i.swipeDirection &&
                            (l > 1 - r.longSwipesRatio
                              ? i.slideTo(t + p)
                              : i.slideTo(t)))
                        : i.slideTo(i.activeIndex)
                      : r.shortSwipes
                      ? i.navigation &&
                        (e.target === i.navigation.nextEl ||
                          e.target === i.navigation.prevEl)
                        ? e.target === i.navigation.nextEl
                          ? i.slideTo(t + p)
                          : i.slideTo(t)
                        : ("next" === i.swipeDirection && i.slideTo(t + p),
                          "prev" === i.swipeDirection && i.slideTo(t))
                      : i.slideTo(i.activeIndex);
                  }
              }
            }.bind(e)),
            s.cssMode &&
              (e.onScroll = function() {
                var t = this,
                  { wrapperEl: s, rtlTranslate: a, enabled: e } = t;
                if (e) {
                  (t.previousTranslate = t.translate),
                    t.isHorizontal()
                      ? (t.translate = -s.scrollLeft)
                      : (t.translate = -s.scrollTop),
                    -0 === t.translate && (t.translate = 0),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
                  let e;
                  s = t.maxTranslate() - t.minTranslate();
                  (e = 0 == s ? 0 : (t.translate - t.minTranslate()) / s),
                    e !== t.progress &&
                      t.updateProgress(a ? -t.translate : t.translate),
                    t.emit("setTranslate", t.translate, !1);
                }
              }.bind(e)),
            (e.onClick = function(e) {
              var t = this;
              t.enabled &&
                (t.allowClick ||
                  (t.params.preventClicks && e.preventDefault(),
                  t.params.preventClicksPropagation &&
                    t.animating &&
                    (e.stopPropagation(), e.stopImmediatePropagation())));
            }.bind(e)),
            a.touch && !b && (t.addEventListener("touchstart", y), (b = !0)),
            T(e, "on");
        },
        detachEvents: function() {
          T(this, "off");
        },
      },
      breakpoints: {
        setBreakpoint: function() {
          var e = this;
          const {
            activeIndex: t,
            initialized: s,
            loopedSlides: a = 0,
            params: i,
            $el: r,
          } = e;
          var n,
            l,
            o,
            d,
            c = i.breakpoints;
          !c ||
            0 === Object.keys(c).length ||
            ((n = e.getBreakpoint(c, e.params.breakpointsBase, e.el)) &&
              e.currentBreakpoint !== n &&
              ((l = (n in c ? c[n] : void 0) || e.originalParams),
              (d = $(e, i)),
              (o = $(e, l)),
              (c = i.enabled),
              d && !o
                ? (r.removeClass(
                    `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !d &&
                  o &&
                  (r.addClass(`${i.containerModifierClass}grid`),
                  ((l.grid.fill && "column" === l.grid.fill) ||
                    (!l.grid.fill && "column" === i.grid.fill)) &&
                    r.addClass(`${i.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
              (d = l.direction && l.direction !== i.direction),
              (o = i.loop && (l.slidesPerView !== i.slidesPerView || d)),
              d && s && e.changeDirection(),
              p(e.params, l),
              (d = e.params.enabled),
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
              c && !d ? e.disable() : !c && d && e.enable(),
              (e.currentBreakpoint = n),
              e.emit("_beforeBreakpoint", l),
              o &&
                s &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - a + e.loopedSlides, 0, !1)),
              e.emit("breakpoint", l)));
        },
        getBreakpoint: function(e, s = "window", a) {
          if (e && ("container" !== s || a)) {
            let t = !1;
            const n = k(),
              l = "window" === s ? n.innerHeight : a.clientHeight,
              o = Object.keys(e).map((e) => {
                if ("string" != typeof e || 0 !== e.indexOf("@"))
                  return { value: e, point: e };
                var t = parseFloat(e.substr(1));
                return { value: l * t, point: e };
              });
            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < o.length; e += 1) {
              var { point: i, value: r } = o[e];
              "window" === s
                ? n.matchMedia(`(min-width: ${r}px)`).matches && (t = i)
                : r <= a.clientWidth && (t = i);
            }
            return t || "max";
          }
        },
      },
      checkOverflow: {
        checkOverflow: function() {
          var e,
            t,
            s = this,
            { isLocked: a, params: i } = s;
          (t = i["slidesOffsetBefore"])
            ? ((e = s.slides.length - 1),
              (t = s.slidesGrid[e] + s.slidesSizesGrid[e] + 2 * t),
              (s.isLocked = s.size > t))
            : (s.isLocked = 1 === s.snapGrid.length),
            !0 === i.allowSlideNext && (s.allowSlideNext = !s.isLocked),
            !0 === i.allowSlidePrev && (s.allowSlidePrev = !s.isLocked),
            a && a !== s.isLocked && (s.isEnd = !1),
            a !== s.isLocked && s.emit(s.isLocked ? "lock" : "unlock");
        },
      },
      classes: {
        addClasses: function() {
          const {
            classNames: e,
            params: t,
            rtl: s,
            $el: a,
            device: i,
            support: r,
          } = this;
          var n = (function(e, s) {
            const a = [];
            return (
              e.forEach((t) => {
                "object" == typeof t
                  ? Object.keys(t).forEach((e) => {
                      t[e] && a.push(s + e);
                    })
                  : "string" == typeof t && a.push(s + t);
              }),
              a
            );
          })(
            [
              "initialized",
              t.direction,
              { "pointer-events": !r.touch },
              { "free-mode": this.params.freeMode && t.freeMode.enabled },
              { autoheight: t.autoHeight },
              { rtl: s },
              { grid: t.grid && 1 < t.grid.rows },
              {
                "grid-column":
                  t.grid && 1 < t.grid.rows && "column" === t.grid.fill,
              },
              { android: i.android },
              { ios: i.ios },
              { "css-mode": t.cssMode },
              { centered: t.cssMode && t.centeredSlides },
            ],
            t.containerModifierClass
          );
          e.push(...n),
            a.addClass([...e].join(" ")),
            this.emitContainerClasses();
        },
        removeClasses: function() {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      },
      images: {
        loadImage: function(e, t, s, a, i, r) {
          const n = k();
          let l;
          function o() {
            r && r();
          }
          !(O(e).parent("picture")[0] || (e.complete && i)) && t
            ? ((l = new n.Image()),
              (l.onload = o),
              (l.onerror = o),
              a && (l.sizes = a),
              s && (l.srcset = s),
              t && (l.src = t))
            : o();
        },
        preloadImages: function() {
          const t = this;
          function s() {
            void 0 !== t &&
              null !== t &&
              t &&
              !t.destroyed &&
              (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
              t.imagesLoaded === t.imagesToLoad.length &&
                (t.params.updateOnImagesReady && t.update(),
                t.emit("imagesReady")));
          }
          t.imagesToLoad = t.$el.find("img");
          for (let e = 0; e < t.imagesToLoad.length; e += 1) {
            const a = t.imagesToLoad[e];
            t.loadImage(
              a,
              a.currentSrc || a.getAttribute("src"),
              a.srcset || a.getAttribute("srcset"),
              a.sizes || a.getAttribute("sizes"),
              !0,
              s
            );
          }
        },
      },
    },
    z = {};
  class A {
    constructor(...e) {
      let t, s;
      if (
        (1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (s = e[0])
          : ([t, s] = e),
        (s = s || {}),
        (s = p({}, s)),
        t && !s.el && (s.el = t),
        s.el && 1 < O(s.el).length)
      ) {
        const i = [];
        return (
          O(s.el).each((e) => {
            e = p({}, s, { el: e });
            i.push(new A(e));
          }),
          i
        );
      }
      const r = this;
      (r.__swiper__ = !0),
        (r.support = u()),
        (r.device = h({ userAgent: s.userAgent })),
        (r.browser = ((m = m || f()), m)),
        (r.eventsListeners = {}),
        (r.eventsAnyListeners = []),
        (r.modules = [...r.__modules__]),
        s.modules && Array.isArray(s.modules) && r.modules.push(...s.modules);
      const n = {};
      r.modules.forEach((e) => {
        var a, i;
        e({
          swiper: r,
          extendParams:
            ((a = s),
            (i = n),
            function(e = {}) {
              var t = Object.keys(e)[0],
                s = e[t];
              "object" == typeof s &&
                null !== s &&
                (0 <= ["navigation", "pagination", "scrollbar"].indexOf(t) &&
                  !0 === a[t] &&
                  (a[t] = { auto: !0 }),
                t in a &&
                  "enabled" in s &&
                  (!0 === a[t] && (a[t] = { enabled: !0 }),
                  "object" != typeof a[t] ||
                    "enabled" in a[t] ||
                    (a[t].enabled = !0),
                  a[t] || (a[t] = { enabled: !1 }))),
                p(i, e);
            }),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r),
        });
      });
      var a = p({}, M, n);
      return (
        (r.params = p({}, a, z, s)),
        (r.originalParams = p({}, r.params)),
        (r.passedParams = p({}, s)),
        r.params &&
          r.params.on &&
          Object.keys(r.params.on).forEach((e) => {
            r.on(e, r.params.on[e]);
          }),
        r.params && r.params.onAny && r.onAny(r.params.onAny),
        (r.$ = O),
        Object.assign(r, {
          enabled: r.params.enabled,
          el: t,
          classNames: [],
          slides: O(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return "horizontal" === r.params.direction;
          },
          isVertical() {
            return "vertical" === r.params.direction;
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: r.params.allowSlideNext,
          allowSlidePrev: r.params.allowSlidePrev,
          touchEvents:
            ((e = ["touchstart", "touchmove", "touchend", "touchcancel"]),
            (a = ["pointerdown", "pointermove", "pointerup"]),
            (r.touchEventsTouch = {
              start: e[0],
              move: e[1],
              end: e[2],
              cancel: e[3],
            }),
            (r.touchEventsDesktop = { start: a[0], move: a[1], end: a[2] }),
            r.support.touch || !r.params.simulateTouch
              ? r.touchEventsTouch
              : r.touchEventsDesktop),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: r.params.focusableElements,
            lastClickTime: v(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: r.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        r.emit("_swiper"),
        r.params.init && r.init(),
        r
      );
    }
    enable() {
      var e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      var e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      var s = this;
      e = Math.min(Math.max(e, 0), 1);
      var a = s.minTranslate(),
        i = s.maxTranslate();
      s.translateTo((i - a) * e + a, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const t = this;
      if (t.params._emitClasses && t.el) {
        const e = t.el.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper") ||
              0 === e.indexOf(t.params.containerModifierClass)
          );
        t.emit("_containerClasses", e.join(" "));
      }
    }
    getSlideClasses(e) {
      const t = this;
      return e.className
        .split(" ")
        .filter(
          (e) =>
            0 === e.indexOf("swiper-slide") ||
            0 === e.indexOf(t.params.slideClass)
        )
        .join(" ");
    }
    emitSlidesClasses() {
      const s = this;
      if (s.params._emitClasses && s.el) {
        const a = [];
        s.slides.each((e) => {
          var t = s.getSlideClasses(e);
          a.push({ slideEl: e, classNames: t }), s.emit("_slideClass", e, t);
        }),
          s.emit("_slideClasses", a);
      }
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      var {
        params: s,
        slides: a,
        slidesGrid: i,
        slidesSizesGrid: r,
        size: n,
        activeIndex: l,
      } = this;
      let o = 1;
      if (s.centeredSlides) {
        let t = a[l].swiperSlideSize,
          s;
        for (let e = l + 1; e < a.length; e += 1)
          a[e] &&
            !s &&
            ((t += a[e].swiperSlideSize), (o += 1), t > n && (s = !0));
        for (let e = l - 1; 0 <= e; --e)
          a[e] &&
            !s &&
            ((t += a[e].swiperSlideSize), (o += 1), t > n && (s = !0));
      } else if ("current" === e)
        for (let e = l + 1; e < a.length; e += 1)
          (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
      else for (let e = l - 1; 0 <= e; --e) i[l] - i[e] < n && (o += 1);
      return o;
    }
    update() {
      const t = this;
      if (t && !t.destroyed) {
        var { snapGrid: s, params: a } = t;
        a.breakpoints && t.setBreakpoint(),
          t.updateSize(),
          t.updateSlides(),
          t.updateProgress(),
          t.updateSlidesClasses();
        let e;
        function i() {
          var e = t.rtlTranslate ? -1 * t.translate : t.translate,
            e = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
          t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
        }
        t.params.freeMode && t.params.freeMode.enabled
          ? (i(), t.params.autoHeight && t.updateAutoHeight())
          : ((e =
              ("auto" === t.params.slidesPerView ||
                1 < t.params.slidesPerView) &&
              t.isEnd &&
              !t.params.centeredSlides
                ? t.slideTo(t.slides.length - 1, 0, !1, !0)
                : t.slideTo(t.activeIndex, 0, !1, !0)),
            e || i()),
          a.watchOverflow && s !== t.snapGrid && t.checkOverflow(),
          t.emit("update");
      }
    }
    changeDirection(t, e = !0) {
      var s = this,
        a = s.params.direction;
      return (
        (t = t || ("horizontal" === a ? "vertical" : "horizontal")) === a ||
          ("horizontal" !== t && "vertical" !== t) ||
          (s.$el
            .removeClass(`${s.params.containerModifierClass}${a}`)
            .addClass(`${s.params.containerModifierClass}${t}`),
          s.emitContainerClasses(),
          (s.params.direction = t),
          s.slides.each((e) => {
            "vertical" === t ? (e.style.width = "") : (e.style.height = "");
          }),
          s.emit("changeDirection"),
          e && s.update()),
        s
      );
    }
    mount(t) {
      const e = this;
      if (e.mounted) return !0;
      const s = O(t || e.params.el);
      if (!(t = s[0])) return !1;
      t.swiper = e;
      const a = () =>
        `.${(e.params.wrapperClass || "")
          .trim()
          .split(" ")
          .join(".")}`;
      let i = (() => {
        if (t && t.shadowRoot && t.shadowRoot.querySelector) {
          const e = O(t.shadowRoot.querySelector(a()));
          return (e.children = (e) => s.children(e)), e;
        }
        return s.children(a());
      })();
      if (0 === i.length && e.params.createElements) {
        const r = E(),
          n = r.createElement("div");
        (i = O(n)),
          (n.className = e.params.wrapperClass),
          s.append(n),
          s.children(`.${e.params.slideClass}`).each((e) => {
            i.append(e);
          });
      }
      return (
        Object.assign(e, {
          $el: s,
          el: t,
          $wrapperEl: i,
          wrapperEl: i[0],
          mounted: !0,
          rtl: "rtl" === t.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate:
            "horizontal" === e.params.direction &&
            ("rtl" === t.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === i.css("display"),
        }),
        !0
      );
    }
    init(e) {
      var t = this;
      return (
        t.initialized ||
          !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e = !0, t = !0) {
      const s = this,
        { params: a, $el: i, $wrapperEl: r, slides: n } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          a.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            i.removeAttr("style"),
            r.removeAttr("style"),
            n &&
              n.length &&
              n
                .removeClass(
                  [
                    a.slideVisibleClass,
                    a.slideActiveClass,
                    a.slideNextClass,
                    a.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.$el[0].swiper = null),
            (function(e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      p(z, e);
    }
    static get extendedDefaults() {
      return z;
    }
    static get defaults() {
      return M;
    }
    static installModule(e) {
      A.prototype.__modules__ || (A.prototype.__modules__ = []);
      const t = A.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return (
        Array.isArray(e)
          ? e.forEach((e) => A.installModule(e))
          : A.installModule(e),
        A
      );
    }
  }
  function I(s, a, i, r) {
    const n = E();
    return (
      s.params.createElements &&
        Object.keys(r).forEach((t) => {
          if (!i[t] && !0 === i.auto) {
            let e = s.$el.children(`.${r[t]}`)[0];
            e ||
              ((e = n.createElement("div")),
              (e.className = r[t]),
              s.$el.append(e)),
              (i[t] = e),
              (a[t] = e);
          }
        }),
      i
    );
  }
  function N(e = "") {
    return `.${e
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function D(e) {
    const {
      effect: s,
      swiper: a,
      on: t,
      setTranslate: i,
      setTransition: r,
      overwriteParams: n,
      perspective: l,
    } = e;
    t("beforeInit", () => {
      var e;
      a.params.effect === s &&
        (a.classNames.push(`${a.params.containerModifierClass}${s}`),
        l && l() && a.classNames.push(`${a.params.containerModifierClass}3d`),
        (e = n ? n() : {}),
        Object.assign(a.params, e),
        Object.assign(a.originalParams, e));
    }),
      t("setTranslate", () => {
        a.params.effect === s && i();
      }),
      t("setTransition", (e, t) => {
        a.params.effect === s && r(t);
      });
  }
  function B(e, t) {
    return e.transformEl
      ? t.find(e.transformEl).css({
          "backface-visibility": "hidden",
          "-webkit-backface-visibility": "hidden",
        })
      : t;
  }
  function G({ swiper: s, duration: e, transformEl: a, allSlides: i }) {
    const { slides: r, activeIndex: n, $wrapperEl: l } = s;
    if (s.params.virtualTranslate && 0 !== e) {
      let e = !1,
        t;
      (t = i ? (a ? r.find(a) : r) : a ? r.eq(n).find(a) : r.eq(n)),
        t.transitionEnd(() => {
          if (!e && s && !s.destroyed) {
            (e = !0), (s.animating = !1);
            var t = ["webkitTransitionEnd", "transitionend"];
            for (let e = 0; e < t.length; e += 1) l.trigger(t[e]);
          }
        });
    }
  }
  function _(e, t, s) {
    var a = `swiper-slide-shadow${s ? `-${s}` : ""}`;
    const i = e.transformEl ? t.find(e.transformEl) : t;
    let r = i.children(`.${a}`);
    return (
      r.length ||
        ((r = O(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`)),
        i.append(r)),
      r
    );
  }
  Object.keys(P).forEach((t) => {
    Object.keys(P[t]).forEach((e) => {
      A.prototype[e] = P[t][e];
    });
  }),
    A.use([
      function({ swiper: r, on: e, emit: t }) {
        const s = k();
        let a = null;
        const n = () => {
            r &&
              !r.destroyed &&
              r.initialized &&
              (t("beforeResize"), t("resize"));
          },
          i = () => {
            r && !r.destroyed && r.initialized && t("orientationchange");
          };
        e("init", () => {
          r.params.resizeObserver && void 0 !== s.ResizeObserver
            ? r &&
              !r.destroyed &&
              r.initialized &&
              ((a = new ResizeObserver((e) => {
                var { width: t, height: s } = r;
                let a = t,
                  i = s;
                e.forEach(
                  ({ contentBoxSize: e, contentRect: t, target: s }) => {
                    (s && s !== r.el) ||
                      ((a = t ? t.width : (e[0] || e).inlineSize),
                      (i = t ? t.height : (e[0] || e).blockSize));
                  }
                ),
                  (a === t && i === s) || n();
              })),
              a.observe(r.el))
            : (s.addEventListener("resize", n),
              s.addEventListener("orientationchange", i));
        }),
          e("destroy", () => {
            a && a.unobserve && r.el && (a.unobserve(r.el), (a = null)),
              s.removeEventListener("resize", n),
              s.removeEventListener("orientationchange", i);
          });
      },
      function({ swiper: e, extendParams: t, on: s, emit: i }) {
        const r = [],
          n = k(),
          a = (e, t = {}) => {
            const s = n.MutationObserver || n.WebkitMutationObserver,
              a = new s((e) => {
                var t;
                1 !== e.length
                  ? ((t = function() {
                      i("observerUpdate", e[0]);
                    }),
                    n.requestAnimationFrame
                      ? n.requestAnimationFrame(t)
                      : n.setTimeout(t, 0))
                  : i("observerUpdate", e[0]);
              });
            a.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              r.push(a);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                var t = e.$el.parents();
                for (let e = 0; e < t.length; e += 1) a(t[e]);
              }
              a(e.$el[0], { childList: e.params.observeSlideChildren }),
                a(e.$wrapperEl[0], { attributes: !1 });
            }
          }),
          s("destroy", () => {
            r.forEach((e) => {
              e.disconnect();
            }),
              r.splice(0, r.length);
          });
      },
    ]);
  var j = [
    function({ swiper: b, extendParams: e, on: t }) {
      e({
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      });
      let s;
      function y(e, t) {
        const s = b.params.virtual;
        if (s.cache && b.virtual.cache[t]) return b.virtual.cache[t];
        const a = s.renderSlide
          ? O(s.renderSlide.call(b, e, t))
          : O(
              `<div class="${b.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
            );
        return (
          a.attr("data-swiper-slide-index") ||
            a.attr("data-swiper-slide-index", t),
          s.cache && (b.virtual.cache[t] = a),
          a
        );
      }
      function n(t) {
        var {
            slidesPerView: e,
            slidesPerGroup: s,
            centeredSlides: a,
          } = b.params,
          { addSlidesBefore: i, addSlidesAfter: r } = b.params.virtual;
        const {
          from: n,
          to: l,
          slides: o,
          slidesGrid: d,
          offset: c,
        } = b.virtual;
        b.params.cssMode || b.updateActiveIndex();
        var p = b.activeIndex || 0;
        let u;
        u = b.rtlTranslate ? "right" : b.isHorizontal() ? "left" : "top";
        let h, m;
        m = a
          ? ((h = Math.floor(e / 2) + s + r), Math.floor(e / 2) + s + i)
          : ((h = e + (s - 1) + r), s + i);
        const f = Math.max((p || 0) - m, 0),
          g = Math.min((p || 0) + h, o.length - 1);
        p = (b.slidesGrid[f] || 0) - (b.slidesGrid[0] || 0);
        function v() {
          b.updateSlides(),
            b.updateProgress(),
            b.updateSlidesClasses(),
            b.lazy && b.params.lazy.enabled && b.lazy.load();
        }
        if (
          (Object.assign(b.virtual, {
            from: f,
            to: g,
            offset: p,
            slidesGrid: b.slidesGrid,
          }),
          n === f && l === g && !t)
        )
          return (
            b.slidesGrid !== d && p !== c && b.slides.css(u, `${p}px`),
            void b.updateProgress()
          );
        if (b.params.virtual.renderExternal)
          return (
            b.params.virtual.renderExternal.call(b, {
              offset: p,
              from: f,
              to: g,
              slides: (function() {
                const t = [];
                for (let e = f; e <= g; e += 1) t.push(o[e]);
                return t;
              })(),
            }),
            void (b.params.virtual.renderExternalUpdate && v())
          );
        const x = [],
          w = [];
        if (t) b.$wrapperEl.find(`.${b.params.slideClass}`).remove();
        else
          for (let e = n; e <= l; e += 1)
            (e < f || e > g) &&
              b.$wrapperEl
                .find(`.${b.params.slideClass}[data-swiper-slide-index="${e}"]`)
                .remove();
        for (let e = 0; e < o.length; e += 1)
          e >= f &&
            e <= g &&
            (void 0 === l || t
              ? w.push(e)
              : (e > l && w.push(e), e < n && x.push(e)));
        w.forEach((e) => {
          b.$wrapperEl.append(y(o[e], e));
        }),
          x
            .sort((e, t) => t - e)
            .forEach((e) => {
              b.$wrapperEl.prepend(y(o[e], e));
            }),
          b.$wrapperEl.children(".swiper-slide").css(u, `${p}px`),
          v();
      }
      (b.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: [],
      }),
        t("beforeInit", () => {
          b.params.virtual.enabled &&
            ((b.virtual.slides = b.params.virtual.slides),
            b.classNames.push(`${b.params.containerModifierClass}virtual`),
            (b.params.watchSlidesProgress = !0),
            (b.originalParams.watchSlidesProgress = !0),
            b.params.initialSlide || n());
        }),
        t("setTranslate", () => {
          b.params.virtual.enabled &&
            (b.params.cssMode && !b._immediateVirtual
              ? (clearTimeout(s),
                (s = setTimeout(() => {
                  n();
                }, 100)))
              : n());
        }),
        t("init update resize", () => {
          b.params.virtual.enabled &&
            b.params.cssMode &&
            X(b.wrapperEl, "--swiper-virtual-size", `${b.virtualSize}px`);
        }),
        Object.assign(b.virtual, {
          appendSlide: function(t) {
            if ("object" == typeof t && "length" in t)
              for (let e = 0; e < t.length; e += 1)
                t[e] && b.virtual.slides.push(t[e]);
            else b.virtual.slides.push(t);
            n(!0);
          },
          prependSlide: function(t) {
            var e = b.activeIndex;
            let s = e + 1,
              a = 1;
            if (Array.isArray(t)) {
              for (let e = 0; e < t.length; e += 1)
                t[e] && b.virtual.slides.unshift(t[e]);
              (s = e + t.length), (a = t.length);
            } else b.virtual.slides.unshift(t);
            if (b.params.virtual.cache) {
              const i = b.virtual.cache,
                r = {};
              Object.keys(i).forEach((e) => {
                const t = i[e];
                var s = t.attr("data-swiper-slide-index");
                s && t.attr("data-swiper-slide-index", parseInt(s, 10) + a),
                  (r[parseInt(e, 10) + a] = t);
              }),
                (b.virtual.cache = r);
            }
            n(!0), b.slideTo(s, 0);
          },
          removeSlide: function(s) {
            if (null != s) {
              let t = b.activeIndex;
              if (Array.isArray(s))
                for (let e = s.length - 1; 0 <= e; --e)
                  b.virtual.slides.splice(s[e], 1),
                    b.params.virtual.cache && delete b.virtual.cache[s[e]],
                    s[e] < t && --t,
                    (t = Math.max(t, 0));
              else
                b.virtual.slides.splice(s, 1),
                  b.params.virtual.cache && delete b.virtual.cache[s],
                  s < t && --t,
                  (t = Math.max(t, 0));
              n(!0), b.slideTo(t, 0);
            }
          },
          removeAllSlides: function() {
            (b.virtual.slides = []),
              b.params.virtual.cache && (b.virtual.cache = {}),
              n(!0),
              b.slideTo(0, 0);
          },
          update: n,
        });
    },
    function({ swiper: g, extendParams: e, on: t, emit: v }) {
      const x = E(),
        w = k();
      function s(s) {
        if (g.enabled) {
          var a = g["rtlTranslate"];
          let e = s;
          e.originalEvent && (e = e.originalEvent);
          var t = e.keyCode || e.charCode,
            i = g.params.keyboard.pageUpDown,
            r = i && 33 === t,
            n = i && 34 === t,
            l = 37 === t,
            o = 39 === t,
            d = 38 === t,
            c = 40 === t;
          if (
            !g.allowSlideNext &&
            ((g.isHorizontal() && o) || (g.isVertical() && c) || n)
          )
            return !1;
          if (
            !g.allowSlidePrev &&
            ((g.isHorizontal() && l) || (g.isVertical() && d) || r)
          )
            return !1;
          if (
            !(
              e.shiftKey ||
              e.altKey ||
              e.ctrlKey ||
              e.metaKey ||
              (x.activeElement &&
                x.activeElement.nodeName &&
                ("input" === x.activeElement.nodeName.toLowerCase() ||
                  "textarea" === x.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              g.params.keyboard.onlyInViewport &&
              (r || n || l || o || d || c)
            ) {
              let t = !1;
              if (
                0 < g.$el.parents(`.${g.params.slideClass}`).length &&
                0 === g.$el.parents(`.${g.params.slideActiveClass}`).length
              )
                return;
              var s = g.$el,
                i = s[0].clientWidth,
                s = s[0].clientHeight,
                p = w.innerWidth,
                u = w.innerHeight;
              const f = g.$el.offset();
              a && (f.left -= g.$el[0].scrollLeft);
              var h = [
                [f.left, f.top],
                [f.left + i, f.top],
                [f.left, f.top + s],
                [f.left + i, f.top + s],
              ];
              for (let e = 0; e < h.length; e += 1) {
                var m = h[e];
                0 <= m[0] &&
                  m[0] <= p &&
                  0 <= m[1] &&
                  m[1] <= u &&
                  ((0 === m[0] && 0 === m[1]) || (t = !0));
              }
              if (!t) return;
            }
            g.isHorizontal()
              ? ((r || n || l || o) &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : (e.returnValue = !1)),
                (((n || o) && !a) || ((r || l) && a)) && g.slideNext(),
                (((r || l) && !a) || ((n || o) && a)) && g.slidePrev())
              : ((r || n || d || c) &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : (e.returnValue = !1)),
                (n || c) && g.slideNext(),
                (r || d) && g.slidePrev()),
              v("keyPress", t);
          }
        }
      }
      function a() {
        g.keyboard.enabled ||
          (O(x).on("keydown", s), (g.keyboard.enabled = !0));
      }
      function i() {
        g.keyboard.enabled &&
          (O(x).off("keydown", s), (g.keyboard.enabled = !1));
      }
      e({
        keyboard: {
          enabled: !(g.keyboard = { enabled: !1 }),
          onlyInViewport: !0,
          pageUpDown: !0,
        },
      }),
        t("init", () => {
          g.params.keyboard.enabled && a();
        }),
        t("destroy", () => {
          g.keyboard.enabled && i();
        }),
        Object.assign(g.keyboard, { enable: a, disable: i });
    },
    function({ swiper: p, extendParams: e, on: t, emit: u }) {
      const s = k();
      e({
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null,
        },
      }),
        (p.mousewheel = { enabled: !1 });
      let h,
        a = v(),
        m;
      const f = [];
      function i() {
        p.enabled && (p.mouseEntered = !0);
      }
      function r() {
        p.enabled && (p.mouseEntered = !1);
      }
      function g(e) {
        if (
          !(
            (p.params.mousewheel.thresholdDelta &&
              e.delta < p.params.mousewheel.thresholdDelta) ||
            (p.params.mousewheel.thresholdTime &&
              v() - a < p.params.mousewheel.thresholdTime)
          )
        ) {
          if (6 <= e.delta && v() - a < 60) return 1;
          e.direction < 0
            ? (p.isEnd && !p.params.loop) ||
              p.animating ||
              (p.slideNext(), u("scroll", e.raw))
            : (p.isBeginning && !p.params.loop) ||
              p.animating ||
              (p.slidePrev(), u("scroll", e.raw)),
            (a = new s.Date().getTime());
        }
      }
      function n(a) {
        let i = a;
        if (p.enabled) {
          var r = p.params.mousewheel;
          p.params.cssMode && i.preventDefault();
          let e = p.$el;
          if (
            ("container" !== p.params.mousewheel.eventsTarget &&
              (e = O(p.params.mousewheel.eventsTarget)),
            !p.mouseEntered && !e[0].contains(i.target) && !r.releaseOnEdges)
          )
            return !0;
          i.originalEvent && (i = i.originalEvent);
          let t = 0;
          var n = p.rtlTranslate ? -1 : 1,
            l = (function(e) {
              let t = 0,
                s = 0,
                a = 0,
                i = 0;
              return (
                "detail" in e && (s = e.detail),
                "wheelDelta" in e && (s = -e.wheelDelta / 120),
                "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
                "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                "axis" in e &&
                  e.axis === e.HORIZONTAL_AXIS &&
                  ((t = s), (s = 0)),
                (a = 10 * t),
                (i = 10 * s),
                "deltaY" in e && (i = e.deltaY),
                "deltaX" in e && (a = e.deltaX),
                e.shiftKey && !a && ((a = i), (i = 0)),
                (a || i) &&
                  e.deltaMode &&
                  (1 === e.deltaMode
                    ? ((a *= 40), (i *= 40))
                    : ((a *= 800), (i *= 800))),
                a && !t && (t = a < 1 ? -1 : 1),
                i && !s && (s = i < 1 ? -1 : 1),
                { spinX: t, spinY: s, pixelX: a, pixelY: i }
              );
            })(i);
          if (r.forceToAxis)
            if (p.isHorizontal()) {
              if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
              t = -l.pixelX * n;
            } else {
              if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
              t = -l.pixelY;
            }
          else
            t =
              Math.abs(l.pixelX) > Math.abs(l.pixelY)
                ? -l.pixelX * n
                : -l.pixelY;
          if (0 === t) return !0;
          r.invert && (t = -t);
          let s = p.getTranslate() + t * r.sensitivity;
          if (
            (s >= p.minTranslate() && (s = p.minTranslate()),
            s <= p.maxTranslate() && (s = p.maxTranslate()),
            (!!p.params.loop ||
              !(s === p.minTranslate() || s === p.maxTranslate())) &&
              p.params.nested &&
              i.stopPropagation(),
            p.params.freeMode && p.params.freeMode.enabled)
          ) {
            const d = {
              time: v(),
              delta: Math.abs(t),
              direction: Math.sign(t),
            };
            var o =
              m &&
              d.time < m.time + 500 &&
              d.delta <= m.delta &&
              d.direction === m.direction;
            if (!o) {
              (m = void 0), p.params.loop && p.loopFix();
              let e = p.getTranslate() + t * r.sensitivity;
              (l = p.isBeginning), (r = p.isEnd);
              if (
                (e >= p.minTranslate() && (e = p.minTranslate()),
                e <= p.maxTranslate() && (e = p.maxTranslate()),
                p.setTransition(0),
                p.setTranslate(e),
                p.updateProgress(),
                p.updateActiveIndex(),
                p.updateSlidesClasses(),
                ((!l && p.isBeginning) || (!r && p.isEnd)) &&
                  p.updateSlidesClasses(),
                p.params.freeMode.sticky)
              ) {
                clearTimeout(h), (h = void 0), 15 <= f.length && f.shift();
                (l = f.length ? f[f.length - 1] : void 0), (r = f[0]);
                if (
                  (f.push(d),
                  l && (d.delta > l.delta || d.direction !== l.direction))
                )
                  f.splice(0);
                else if (
                  15 <= f.length &&
                  d.time - r.time < 500 &&
                  1 <= r.delta - d.delta &&
                  d.delta <= 6
                ) {
                  const c = 0 < t ? 0.8 : 0.2;
                  (m = d),
                    f.splice(0),
                    (h = S(() => {
                      p.slideToClosest(p.params.speed, !0, void 0, c);
                    }, 0));
                }
                h =
                  h ||
                  S(() => {
                    (m = d),
                      f.splice(0),
                      p.slideToClosest(p.params.speed, !0, void 0, 0.5);
                  }, 500);
              }
              if (
                (o || u("scroll", i),
                p.params.autoplay &&
                  p.params.autoplayDisableOnInteraction &&
                  p.autoplay.stop(),
                e === p.minTranslate() || e === p.maxTranslate())
              )
                return !0;
            }
          } else {
            o = {
              time: v(),
              delta: Math.abs(t),
              direction: Math.sign(t),
              raw: a,
            };
            2 <= f.length && f.shift();
            a = f.length ? f[f.length - 1] : void 0;
            if (
              (f.push(o),
              (!a ||
                o.direction !== a.direction ||
                o.delta > a.delta ||
                o.time > a.time + 150) &&
                g(o),
              (function(e) {
                var t = p.params.mousewheel;
                if (e.direction < 0) {
                  if (p.isEnd && !p.params.loop && t.releaseOnEdges) return 1;
                } else if (p.isBeginning && !p.params.loop && t.releaseOnEdges)
                  return 1;
              })(o))
            )
              return !0;
          }
          return (
            i.preventDefault ? i.preventDefault() : (i.returnValue = !1), !1
          );
        }
      }
      function l(e) {
        let t = p.$el;
        "container" !== p.params.mousewheel.eventsTarget &&
          (t = O(p.params.mousewheel.eventsTarget)),
          t[e]("mouseenter", i),
          t[e]("mouseleave", r),
          t[e]("wheel", n);
      }
      function o() {
        return p.params.cssMode
          ? (p.wrapperEl.removeEventListener("wheel", n), !0)
          : !p.mousewheel.enabled && (l("on"), (p.mousewheel.enabled = !0));
      }
      function d() {
        return p.params.cssMode
          ? (p.wrapperEl.addEventListener(event, n), !0)
          : !!p.mousewheel.enabled && (l("off"), !(p.mousewheel.enabled = !1));
      }
      t("init", () => {
        !p.params.mousewheel.enabled && p.params.cssMode && d(),
          p.params.mousewheel.enabled && o();
      }),
        t("destroy", () => {
          p.params.cssMode && o(), p.mousewheel.enabled && d();
        }),
        Object.assign(p.mousewheel, { enable: o, disable: d });
    },
    function({ swiper: i, extendParams: e, on: t, emit: r }) {
      function a(e) {
        let t;
        return (
          e &&
            ((t = O(e)),
            i.params.uniqueNavElements &&
              "string" == typeof e &&
              1 < t.length &&
              1 === i.$el.find(e).length &&
              (t = i.$el.find(e))),
          t
        );
      }
      function s(e, t) {
        var s = i.params.navigation;
        e &&
          0 < e.length &&
          (e[t ? "addClass" : "removeClass"](s.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t),
          i.params.watchOverflow &&
            i.enabled &&
            e[i.isLocked ? "addClass" : "removeClass"](s.lockClass));
      }
      function n() {
        var e, t;
        i.params.loop ||
          (({ $nextEl: e, $prevEl: t } = i.navigation),
          s(t, i.isBeginning),
          s(e, i.isEnd));
      }
      function l(e) {
        e.preventDefault(), (i.isBeginning && !i.params.loop) || i.slidePrev();
      }
      function o(e) {
        e.preventDefault(), (i.isEnd && !i.params.loop) || i.slideNext();
      }
      function d() {
        var e = i.params.navigation;
        if (
          ((i.params.navigation = I(
            i,
            i.originalParams.navigation,
            i.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          e.nextEl || e.prevEl)
        ) {
          const t = a(e.nextEl),
            s = a(e.prevEl);
          t && 0 < t.length && t.on("click", o),
            s && 0 < s.length && s.on("click", l),
            Object.assign(i.navigation, {
              $nextEl: t,
              nextEl: t && t[0],
              $prevEl: s,
              prevEl: s && s[0],
            }),
            i.enabled ||
              (t && t.addClass(e.lockClass), s && s.addClass(e.lockClass));
        }
      }
      function c() {
        const { $nextEl: e, $prevEl: t } = i.navigation;
        e &&
          e.length &&
          (e.off("click", o), e.removeClass(i.params.navigation.disabledClass)),
          t &&
            t.length &&
            (t.off("click", l),
            t.removeClass(i.params.navigation.disabledClass));
      }
      e({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      }),
        (i.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        t("init", () => {
          d(), n();
        }),
        t("toEdge fromEdge lock unlock", () => {
          n();
        }),
        t("destroy", () => {
          c();
        }),
        t("enable disable", () => {
          const { $nextEl: e, $prevEl: t } = i.navigation;
          e &&
            e[i.enabled ? "removeClass" : "addClass"](
              i.params.navigation.lockClass
            ),
            t &&
              t[i.enabled ? "removeClass" : "addClass"](
                i.params.navigation.lockClass
              );
        }),
        t("click", (e, t) => {
          const { $nextEl: s, $prevEl: a } = i.navigation;
          t = t.target;
          if (
            i.params.navigation.hideOnClick &&
            !O(t).is(a) &&
            !O(t).is(s) &&
            (!(
              i.pagination &&
              i.params.pagination &&
              i.params.pagination.clickable
            ) ||
              (i.pagination.el !== t && !i.pagination.el.contains(t)))
          ) {
            let e;
            s
              ? (e = s.hasClass(i.params.navigation.hiddenClass))
              : a && (e = a.hasClass(i.params.navigation.hiddenClass)),
              !0 === e ? r("navigationShow") : r("navigationHide"),
              s && s.toggleClass(i.params.navigation.hiddenClass),
              a && a.toggleClass(i.params.navigation.hiddenClass);
          }
        }),
        Object.assign(i.navigation, { update: n, init: d, destroy: c });
    },
    function({ swiper: h, extendParams: e, on: t, emit: m }) {
      var s = "swiper-pagination";
      e({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${s}-bullet`,
          bulletActiveClass: `${s}-bullet-active`,
          modifierClass: `${s}-`,
          currentClass: `${s}-current`,
          totalClass: `${s}-total`,
          hiddenClass: `${s}-hidden`,
          progressbarFillClass: `${s}-progressbar-fill`,
          progressbarOppositeClass: `${s}-progressbar-opposite`,
          clickableClass: `${s}-clickable`,
          lockClass: `${s}-lock`,
          horizontalClass: `${s}-horizontal`,
          verticalClass: `${s}-vertical`,
        },
      }),
        (h.pagination = { el: null, $el: null, bullets: [] });
      let f,
        g = 0;
      function v() {
        return (
          !h.params.pagination.el ||
          !h.pagination.el ||
          !h.pagination.$el ||
          0 === h.pagination.$el.length
        );
      }
      function x(e, t) {
        var s = h.params.pagination["bulletActiveClass"];
        e[t]()
          .addClass(`${s}-${t}`)
          [t]()
          .addClass(`${s}-${t}-${t}`);
      }
      function a() {
        var t = h.rtl;
        const r = h.params.pagination;
        if (!v()) {
          var n = (h.virtual && h.params.virtual.enabled ? h.virtual : h).slides
            .length;
          const c = h.pagination.$el;
          let i;
          var a = h.params.loop
            ? Math.ceil((n - 2 * h.loopedSlides) / h.params.slidesPerGroup)
            : h.snapGrid.length;
          if (
            (h.params.loop
              ? ((i = Math.ceil(
                  (h.activeIndex - h.loopedSlides) / h.params.slidesPerGroup
                )),
                i > n - 1 - 2 * h.loopedSlides && (i -= n - 2 * h.loopedSlides),
                i > a - 1 && (i -= a),
                i < 0 && "bullets" !== h.params.paginationType && (i = a + i))
              : (i = void 0 !== h.snapIndex ? h.snapIndex : h.activeIndex || 0),
            "bullets" === r.type &&
              h.pagination.bullets &&
              0 < h.pagination.bullets.length)
          ) {
            const p = h.pagination.bullets;
            let s, a, e;
            if (
              (r.dynamicBullets &&
                ((f = p
                  .eq(0)
                  [h.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                c.css(
                  h.isHorizontal() ? "width" : "height",
                  `${f * (r.dynamicMainBullets + 4)}px`
                ),
                1 < r.dynamicMainBullets &&
                  void 0 !== h.previousIndex &&
                  ((g += i - h.previousIndex),
                  g > r.dynamicMainBullets - 1
                    ? (g = r.dynamicMainBullets - 1)
                    : g < 0 && (g = 0)),
                (s = i - g),
                (a = s + (Math.min(p.length, r.dynamicMainBullets) - 1)),
                (e = (a + s) / 2)),
              p.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${r.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              1 < c.length)
            )
              p.each((e) => {
                const t = O(e);
                e = t.index();
                e === i && t.addClass(r.bulletActiveClass),
                  r.dynamicBullets &&
                    (e >= s &&
                      e <= a &&
                      t.addClass(`${r.bulletActiveClass}-main`),
                    e === s && x(t, "prev"),
                    e === a && x(t, "next"));
              });
            else {
              const u = p.eq(i);
              var l = u.index();
              if ((u.addClass(r.bulletActiveClass), r.dynamicBullets)) {
                var o = p.eq(s),
                  n = p.eq(a);
                for (let e = s; e <= a; e += 1)
                  p.eq(e).addClass(`${r.bulletActiveClass}-main`);
                if (h.params.loop)
                  if (l >= p.length - r.dynamicMainBullets) {
                    for (let e = r.dynamicMainBullets; 0 <= e; --e)
                      p.eq(p.length - e).addClass(
                        `${r.bulletActiveClass}-main`
                      );
                    p.eq(p.length - r.dynamicMainBullets - 1).addClass(
                      `${r.bulletActiveClass}-prev`
                    );
                  } else x(o, "prev"), x(n, "next");
                else x(o, "prev"), x(n, "next");
              }
            }
            r.dynamicBullets &&
              ((d = Math.min(p.length, r.dynamicMainBullets + 4)),
              (d = (f * d - f) / 2 - e * f),
              (t = t ? "right" : "left"),
              p.css(h.isHorizontal() ? t : "top", `${d}px`));
          }
          if (
            ("fraction" === r.type &&
              (c.find(N(r.currentClass)).text(r.formatFractionCurrent(i + 1)),
              c.find(N(r.totalClass)).text(r.formatFractionTotal(a))),
            "progressbar" === r.type)
          ) {
            let e;
            e = r.progressbarOpposite
              ? h.isHorizontal()
                ? "vertical"
                : "horizontal"
              : h.isHorizontal()
              ? "horizontal"
              : "vertical";
            var d = (i + 1) / a;
            let t = 1,
              s = 1;
            "horizontal" === e ? (t = d) : (s = d),
              c
                .find(N(r.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${t}) scaleY(${s})`)
                .transition(h.params.speed);
          }
          "custom" === r.type && r.renderCustom
            ? (c.html(r.renderCustom(h, i + 1, a)), m("paginationRender", c[0]))
            : m("paginationUpdate", c[0]),
            h.params.watchOverflow &&
              h.enabled &&
              c[h.isLocked ? "addClass" : "removeClass"](r.lockClass);
        }
      }
      function i() {
        const a = h.params.pagination;
        if (!v()) {
          var e = (h.virtual && h.params.virtual.enabled ? h.virtual : h).slides
            .length;
          const i = h.pagination.$el;
          let s = "";
          if ("bullets" === a.type) {
            let t = h.params.loop
              ? Math.ceil((e - 2 * h.loopedSlides) / h.params.slidesPerGroup)
              : h.snapGrid.length;
            h.params.freeMode &&
              h.params.freeMode.enabled &&
              !h.params.loop &&
              t > e &&
              (t = e);
            for (let e = 0; e < t; e += 1)
              a.renderBullet
                ? (s += a.renderBullet.call(h, e, a.bulletClass))
                : (s += `<${a.bulletElement} class="${a.bulletClass}"></${a.bulletElement}>`);
            i.html(s), (h.pagination.bullets = i.find(N(a.bulletClass)));
          }
          "fraction" === a.type &&
            ((s = a.renderFraction
              ? a.renderFraction.call(h, a.currentClass, a.totalClass)
              : `<span class="${a.currentClass}"></span>` +
                " / " +
                `<span class="${a.totalClass}"></span>`),
            i.html(s)),
            "progressbar" === a.type &&
              ((s = a.renderProgressbar
                ? a.renderProgressbar.call(h, a.progressbarFillClass)
                : `<span class="${a.progressbarFillClass}"></span>`),
              i.html(s)),
            "custom" !== a.type && m("paginationRender", h.pagination.$el[0]);
        }
      }
      function r() {
        h.params.pagination = I(
          h,
          h.originalParams.pagination,
          h.params.pagination,
          { el: "swiper-pagination" }
        );
        const t = h.params.pagination;
        if (t.el) {
          let e = O(t.el);
          0 !== e.length &&
            (h.params.uniqueNavElements &&
              "string" == typeof t.el &&
              1 < e.length &&
              ((e = h.$el.find(t.el)),
              1 < e.length &&
                (e = e.filter((e) => O(e).parents(".swiper")[0] === h.el))),
            "bullets" === t.type && t.clickable && e.addClass(t.clickableClass),
            e.addClass(t.modifierClass + t.type),
            e.addClass(t.modifierClass + h.params.direction),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (e.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (g = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              e.addClass(t.progressbarOppositeClass),
            t.clickable &&
              e.on("click", N(t.bulletClass), function(e) {
                e.preventDefault();
                let t = O(this).index() * h.params.slidesPerGroup;
                h.params.loop && (t += h.loopedSlides), h.slideTo(t);
              }),
            Object.assign(h.pagination, { $el: e, el: e[0] }),
            h.enabled || e.addClass(t.lockClass));
        }
      }
      function n() {
        var e = h.params.pagination;
        if (!v()) {
          const t = h.pagination.$el;
          t.removeClass(e.hiddenClass),
            t.removeClass(e.modifierClass + e.type),
            t.removeClass(e.modifierClass + h.params.direction),
            h.pagination.bullets &&
              h.pagination.bullets.removeClass &&
              h.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && t.off("click", N(e.bulletClass));
        }
      }
      t("init", () => {
        r(), i(), a();
      }),
        t("activeIndexChange", () => {
          (h.params.loop || void 0 === h.snapIndex) && a();
        }),
        t("snapIndexChange", () => {
          h.params.loop || a();
        }),
        t("slidesLengthChange", () => {
          h.params.loop && (i(), a());
        }),
        t("snapGridLengthChange", () => {
          h.params.loop || (i(), a());
        }),
        t("destroy", () => {
          n();
        }),
        t("enable disable", () => {
          const e = h.pagination["$el"];
          e &&
            e[h.enabled ? "removeClass" : "addClass"](
              h.params.pagination.lockClass
            );
        }),
        t("lock unlock", () => {
          a();
        }),
        t("click", (e, t) => {
          t = t.target;
          const s = h.pagination["$el"];
          h.params.pagination.el &&
            h.params.pagination.hideOnClick &&
            0 < s.length &&
            !O(t).hasClass(h.params.pagination.bulletClass) &&
            ((h.navigation &&
              ((h.navigation.nextEl && t === h.navigation.nextEl) ||
                (h.navigation.prevEl && t === h.navigation.prevEl))) ||
              ((t = s.hasClass(h.params.pagination.hiddenClass)),
              m(!0 === t ? "paginationShow" : "paginationHide"),
              s.toggleClass(h.params.pagination.hiddenClass)));
        }),
        Object.assign(h.pagination, {
          render: i,
          update: a,
          init: r,
          destroy: n,
        });
    },
    function({ swiper: l, extendParams: e, on: t, emit: n }) {
      const o = E();
      let d = !1,
        c = null,
        p = null,
        u,
        h,
        m,
        a;
      function s() {
        if (l.params.scrollbar.el && l.scrollbar.el) {
          var { scrollbar: s, rtlTranslate: a, progress: i } = l;
          const { $dragEl: r, $el: n } = s;
          s = l.params.scrollbar;
          let e = h,
            t = (m - h) * i;
          a
            ? ((t = -t),
              0 < t ? ((e = h - t), (t = 0)) : -t + h > m && (e = m + t))
            : t < 0
            ? ((e = h + t), (t = 0))
            : t + h > m && (e = m - t),
            l.isHorizontal()
              ? (r.transform(`translate3d(${t}px, 0, 0)`),
                (r[0].style.width = `${e}px`))
              : (r.transform(`translate3d(0px, ${t}px, 0)`),
                (r[0].style.height = `${e}px`)),
            s.hide &&
              (clearTimeout(c),
              (n[0].style.opacity = 1),
              (c = setTimeout(() => {
                (n[0].style.opacity = 0), n.transition(400);
              }, 1e3)));
        }
      }
      function i() {
        if (l.params.scrollbar.el && l.scrollbar.el) {
          const e = l["scrollbar"],
            { $dragEl: t, $el: s } = e;
          (t[0].style.width = ""),
            (t[0].style.height = ""),
            (m = l.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight),
            (a =
              l.size /
              (l.virtualSize +
                l.params.slidesOffsetBefore -
                (l.params.centeredSlides ? l.snapGrid[0] : 0))),
            (h =
              "auto" === l.params.scrollbar.dragSize
                ? m * a
                : parseInt(l.params.scrollbar.dragSize, 10)),
            l.isHorizontal()
              ? (t[0].style.width = `${h}px`)
              : (t[0].style.height = `${h}px`),
            1 <= a ? (s[0].style.display = "none") : (s[0].style.display = ""),
            l.params.scrollbar.hide && (s[0].style.opacity = 0),
            l.params.watchOverflow &&
              l.enabled &&
              e.$el[l.isLocked ? "addClass" : "removeClass"](
                l.params.scrollbar.lockClass
              );
        }
      }
      function f(e) {
        return l.isHorizontal()
          ? ("touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0]
              : e
            ).clientX
          : ("touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0]
              : e
            ).clientY;
      }
      function g(e) {
        var { scrollbar: t, rtlTranslate: s } = l;
        const a = t["$el"];
        let i;
        (i =
          (f(e) -
            a.offset()[l.isHorizontal() ? "left" : "top"] -
            (null !== u ? u : h / 2)) /
          (m - h)),
          (i = Math.max(Math.min(i, 1), 0)),
          s && (i = 1 - i);
        s = l.minTranslate() + (l.maxTranslate() - l.minTranslate()) * i;
        l.updateProgress(s),
          l.setTranslate(s),
          l.updateActiveIndex(),
          l.updateSlidesClasses();
      }
      function v(e) {
        var t = l.params.scrollbar;
        const { scrollbar: s, $wrapperEl: a } = l,
          { $el: i, $dragEl: r } = s;
        (d = !0),
          (u =
            e.target === r[0] || e.target === r
              ? f(e) -
                e.target.getBoundingClientRect()[
                  l.isHorizontal() ? "left" : "top"
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          a.transition(100),
          r.transition(100),
          g(e),
          clearTimeout(p),
          i.transition(0),
          t.hide && i.css("opacity", 1),
          l.params.cssMode && l.$wrapperEl.css("scroll-snap-type", "none"),
          n("scrollbarDragStart", e);
      }
      function x(e) {
        const { scrollbar: t, $wrapperEl: s } = l,
          { $el: a, $dragEl: i } = t;
        d &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          g(e),
          s.transition(0),
          a.transition(0),
          i.transition(0),
          n("scrollbarDragMove", e));
      }
      function w(e) {
        var t = l.params.scrollbar;
        const { scrollbar: s, $wrapperEl: a } = l,
          i = s["$el"];
        d &&
          ((d = !1),
          l.params.cssMode &&
            (l.$wrapperEl.css("scroll-snap-type", ""), a.transition("")),
          t.hide &&
            (clearTimeout(p),
            (p = S(() => {
              i.css("opacity", 0), i.transition(400);
            }, 1e3))),
          n("scrollbarDragEnd", e),
          t.snapOnRelease && l.slideToClosest());
      }
      function r(e) {
        var {
          scrollbar: t,
          touchEventsTouch: s,
          touchEventsDesktop: a,
          params: i,
          support: r,
        } = l;
        const n = t.$el[0];
        (t = !(!r.passiveListener || !i.passiveListeners) && {
          passive: !1,
          capture: !1,
        }),
          (i = !(!r.passiveListener || !i.passiveListeners) && {
            passive: !0,
            capture: !1,
          });
        n &&
          ((e = "on" === e ? "addEventListener" : "removeEventListener"),
          r.touch
            ? (n[e](s.start, v, t), n[e](s.move, x, t), n[e](s.end, w, i))
            : (n[e](a.start, v, t), o[e](a.move, x, t), o[e](a.end, w, i)));
      }
      function b() {
        const { scrollbar: s, $el: a } = l;
        l.params.scrollbar = I(
          l,
          l.originalParams.scrollbar,
          l.params.scrollbar,
          { el: "swiper-scrollbar" }
        );
        var i = l.params.scrollbar;
        if (i.el) {
          let e = O(i.el);
          l.params.uniqueNavElements &&
            "string" == typeof i.el &&
            1 < e.length &&
            1 === a.find(i.el).length &&
            (e = a.find(i.el));
          let t = e.find(`.${l.params.scrollbar.dragClass}`);
          0 === t.length &&
            ((t = O(`<div class="${l.params.scrollbar.dragClass}"></div>`)),
            e.append(t)),
            Object.assign(s, { $el: e, el: e[0], $dragEl: t, dragEl: t[0] }),
            i.draggable && l.params.scrollbar.el && r("on"),
            e &&
              e[l.enabled ? "removeClass" : "addClass"](
                l.params.scrollbar.lockClass
              );
        }
      }
      function y() {
        l.params.scrollbar.el && r("off");
      }
      e({
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag",
        },
      }),
        (l.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
        t("init", () => {
          b(), i(), s();
        }),
        t("update resize observerUpdate lock unlock", () => {
          i();
        }),
        t("setTranslate", () => {
          s();
        }),
        t("setTransition", (e, t) => {
          (t = t),
            l.params.scrollbar.el &&
              l.scrollbar.el &&
              l.scrollbar.$dragEl.transition(t);
        }),
        t("enable disable", () => {
          const e = l.scrollbar["$el"];
          e &&
            e[l.enabled ? "removeClass" : "addClass"](
              l.params.scrollbar.lockClass
            );
        }),
        t("destroy", () => {
          y();
        }),
        Object.assign(l.scrollbar, {
          updateSize: i,
          setTranslate: s,
          init: b,
          destroy: y,
        });
    },
    function({ swiper: o, extendParams: e, on: t }) {
      e({ parallax: { enabled: !1 } });
      const r = (e, t) => {
          var s = o["rtl"];
          const a = O(e);
          var i = s ? -1 : 1,
            r = a.attr("data-swiper-parallax") || "0";
          let n = a.attr("data-swiper-parallax-x"),
            l = a.attr("data-swiper-parallax-y");
          (e = a.attr("data-swiper-parallax-scale")),
            (s = a.attr("data-swiper-parallax-opacity"));
          n || l
            ? ((n = n || "0"), (l = l || "0"))
            : o.isHorizontal()
            ? ((n = r), (l = "0"))
            : ((l = r), (n = "0")),
            (n =
              0 <= n.indexOf("%")
                ? `${parseInt(n, 10) * t * i}%`
                : `${n * t * i}px`),
            (l =
              0 <= l.indexOf("%") ? `${parseInt(l, 10) * t}%` : `${l * t}px`),
            null != s &&
              ((s = s - (s - 1) * (1 - Math.abs(t))), (a[0].style.opacity = s)),
            null == e
              ? a.transform(`translate3d(${n}, ${l}, 0px)`)
              : ((t = e - (e - 1) * (1 - Math.abs(t))),
                a.transform(`translate3d(${n}, ${l}, 0px) scale(${t})`));
        },
        s = () => {
          const { $el: e, slides: t, progress: a, snapGrid: i } = o;
          e
            .children(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            )
            .each((e) => {
              r(e, a);
            }),
            t.each((e, t) => {
              let s = e.progress;
              1 < o.params.slidesPerGroup &&
                "auto" !== o.params.slidesPerView &&
                (s += Math.ceil(t / 2) - a * (i.length - 1)),
                (s = Math.min(Math.max(s, -1), 1)),
                O(e)
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                  )
                  .each((e) => {
                    r(e, s);
                  });
            });
        };
      t("beforeInit", () => {
        o.params.parallax.enabled &&
          ((o.params.watchSlidesProgress = !0),
          (o.originalParams.watchSlidesProgress = !0));
      }),
        t("init", () => {
          o.params.parallax.enabled && s();
        }),
        t("setTranslate", () => {
          o.params.parallax.enabled && s();
        }),
        t("setTransition", (e, t) => {
          o.params.parallax.enabled &&
            ((a = o.params.speed) => {
              const e = o["$el"];
              e.find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              ).each((e) => {
                const t = O(e);
                let s =
                  parseInt(t.attr("data-swiper-parallax-duration"), 10) || a;
                0 === a && (s = 0), t.transition(s);
              });
            })(t);
        });
    },
    function({ swiper: p, extendParams: e, on: t, emit: a }) {
      const u = k();
      e({
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed",
        },
      }),
        (p.zoom = { enabled: !1 });
      let h = 1,
        r = !1,
        s,
        n,
        l;
      const m = {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3,
        },
        f = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {},
        },
        o = {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0,
        };
      let i = 1;
      function d(e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          s = e.targetTouches[0].pageY,
          a = e.targetTouches[1].pageX,
          e = e.targetTouches[1].pageY;
        return Math.sqrt((a - t) ** 2 + (e - s) ** 2);
      }
      function c(e) {
        var t = p.support,
          s = p.params.zoom;
        if (((n = !1), (l = !1), !t.gestures)) {
          if (
            "touchstart" !== e.type ||
            ("touchstart" === e.type && e.targetTouches.length < 2)
          )
            return;
          (n = !0), (m.scaleStart = d(e));
        }
        (m.$slideEl && m.$slideEl.length) ||
        ((m.$slideEl = O(e.target).closest(`.${p.params.slideClass}`)),
        0 === m.$slideEl.length && (m.$slideEl = p.slides.eq(p.activeIndex)),
        (m.$imageEl = m.$slideEl
          .find(`.${s.containerClass}`)
          .eq(0)
          .find("picture, img, svg, canvas, .swiper-zoom-target")
          .eq(0)),
        (m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`)),
        (m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
        0 !== m.$imageWrapEl.length)
          ? (m.$imageEl && m.$imageEl.transition(0), (r = !0))
          : (m.$imageEl = void 0);
      }
      function g(e) {
        var t = p.support,
          s = p.params.zoom;
        const a = p.zoom;
        if (!t.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (l = !0), (m.scaleMove = d(e));
        }
        m.$imageEl && 0 !== m.$imageEl.length
          ? (t.gestures
              ? (a.scale = e.scale * h)
              : (a.scale = (m.scaleMove / m.scaleStart) * h),
            a.scale > m.maxRatio &&
              (a.scale = m.maxRatio - 1 + (a.scale - m.maxRatio + 1) ** 0.5),
            a.scale < s.minRatio &&
              (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** 0.5),
            m.$imageEl.transform(`translate3d(0,0,0) scale(${a.scale})`))
          : "gesturechange" === e.type && c(e);
      }
      function v(e) {
        var t = p.device,
          s = p.support,
          a = p.params.zoom;
        const i = p.zoom;
        if (!s.gestures) {
          if (!n || !l) return;
          if (
            "touchend" !== e.type ||
            ("touchend" === e.type && e.changedTouches.length < 2 && !t.android)
          )
            return;
          (n = !1), (l = !1);
        }
        m.$imageEl &&
          0 !== m.$imageEl.length &&
          ((i.scale = Math.max(Math.min(i.scale, m.maxRatio), a.minRatio)),
          m.$imageEl
            .transition(p.params.speed)
            .transform(`translate3d(0,0,0) scale(${i.scale})`),
          (h = i.scale),
          (r = !1),
          1 === i.scale && (m.$slideEl = void 0));
      }
      function x(e) {
        var t = p.zoom;
        if (
          m.$imageEl &&
          0 !== m.$imageEl.length &&
          ((p.allowClick = !1), f.isTouched && m.$slideEl)
        ) {
          f.isMoved ||
            ((f.width = m.$imageEl[0].offsetWidth),
            (f.height = m.$imageEl[0].offsetHeight),
            (f.startX = L(m.$imageWrapEl[0], "x") || 0),
            (f.startY = L(m.$imageWrapEl[0], "y") || 0),
            (m.slideWidth = m.$slideEl[0].offsetWidth),
            (m.slideHeight = m.$slideEl[0].offsetHeight),
            m.$imageWrapEl.transition(0));
          var s = f.width * t.scale,
            t = f.height * t.scale;
          if (!(s < m.slideWidth && t < m.slideHeight)) {
            if (
              ((f.minX = Math.min(m.slideWidth / 2 - s / 2, 0)),
              (f.maxX = -f.minX),
              (f.minY = Math.min(m.slideHeight / 2 - t / 2, 0)),
              (f.maxY = -f.minY),
              (f.touchesCurrent.x = ("touchmove" === e.type
                ? e.targetTouches[0]
                : e
              ).pageX),
              (f.touchesCurrent.y = ("touchmove" === e.type
                ? e.targetTouches[0]
                : e
              ).pageY),
              !f.isMoved && !r)
            ) {
              if (
                p.isHorizontal() &&
                ((Math.floor(f.minX) === Math.floor(f.startX) &&
                  f.touchesCurrent.x < f.touchesStart.x) ||
                  (Math.floor(f.maxX) === Math.floor(f.startX) &&
                    f.touchesCurrent.x > f.touchesStart.x))
              )
                return void (f.isTouched = !1);
              if (
                !p.isHorizontal() &&
                ((Math.floor(f.minY) === Math.floor(f.startY) &&
                  f.touchesCurrent.y < f.touchesStart.y) ||
                  (Math.floor(f.maxY) === Math.floor(f.startY) &&
                    f.touchesCurrent.y > f.touchesStart.y))
              )
                return void (f.isTouched = !1);
            }
            e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              (f.isMoved = !0),
              (f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX),
              (f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY),
              f.currentX < f.minX &&
                (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
              f.currentX > f.maxX &&
                (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
              f.currentY < f.minY &&
                (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
              f.currentY > f.maxY &&
                (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
              o.prevPositionX || (o.prevPositionX = f.touchesCurrent.x),
              o.prevPositionY || (o.prevPositionY = f.touchesCurrent.y),
              o.prevTime || (o.prevTime = Date.now()),
              (o.x =
                (f.touchesCurrent.x - o.prevPositionX) /
                (Date.now() - o.prevTime) /
                2),
              (o.y =
                (f.touchesCurrent.y - o.prevPositionY) /
                (Date.now() - o.prevTime) /
                2),
              Math.abs(f.touchesCurrent.x - o.prevPositionX) < 2 && (o.x = 0),
              Math.abs(f.touchesCurrent.y - o.prevPositionY) < 2 && (o.y = 0),
              (o.prevPositionX = f.touchesCurrent.x),
              (o.prevPositionY = f.touchesCurrent.y),
              (o.prevTime = Date.now()),
              m.$imageWrapEl.transform(
                `translate3d(${f.currentX}px, ${f.currentY}px,0)`
              );
          }
        }
      }
      function w() {
        const e = p.zoom;
        m.$slideEl &&
          p.previousIndex !== p.activeIndex &&
          (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"),
          (e.scale = 1),
          (h = 1),
          (m.$slideEl = void 0),
          (m.$imageEl = void 0),
          (m.$imageWrapEl = void 0));
      }
      function b(i) {
        const r = p.zoom;
        var n,
          l,
          o,
          d,
          c = p.params.zoom;
        if (
          (m.$slideEl ||
            (i &&
              i.target &&
              (m.$slideEl = O(i.target).closest(`.${p.params.slideClass}`)),
            m.$slideEl ||
              (p.params.virtual && p.params.virtual.enabled && p.virtual
                ? (m.$slideEl = p.$wrapperEl.children(
                    `.${p.params.slideActiveClass}`
                  ))
                : (m.$slideEl = p.slides.eq(p.activeIndex))),
            (m.$imageEl = m.$slideEl
              .find(`.${c.containerClass}`)
              .eq(0)
              .find("picture, img, svg, canvas, .swiper-zoom-target")
              .eq(0)),
            (m.$imageWrapEl = m.$imageEl.parent(`.${c.containerClass}`))),
          m.$imageEl &&
            0 !== m.$imageEl.length &&
            m.$imageWrapEl &&
            0 !== m.$imageWrapEl.length)
        ) {
          p.params.cssMode &&
            ((p.wrapperEl.style.overflow = "hidden"),
            (p.wrapperEl.style.touchAction = "none")),
            m.$slideEl.addClass(`${c.zoomedSlideClass}`);
          let e, t;
          let s, a;
          (t =
            void 0 === f.touchesStart.x && i
              ? ((e = ("touchend" === i.type ? i.changedTouches[0] : i).pageX),
                ("touchend" === i.type ? i.changedTouches[0] : i).pageY)
              : ((e = f.touchesStart.x), f.touchesStart.y)),
            (r.scale = m.$imageWrapEl.attr("data-swiper-zoom") || c.maxRatio),
            (h = m.$imageWrapEl.attr("data-swiper-zoom") || c.maxRatio),
            i
              ? ((o = m.$slideEl[0].offsetWidth),
                (d = m.$slideEl[0].offsetHeight),
                (n = m.$slideEl.offset().left + u.scrollX),
                (l = m.$slideEl.offset().top + u.scrollY),
                (c = n + o / 2 - e),
                (i = l + d / 2 - t),
                (n = m.$imageEl[0].offsetWidth),
                (l = m.$imageEl[0].offsetHeight),
                (n = n * r.scale),
                (l = l * r.scale),
                (n = -(o = Math.min(o / 2 - n / 2, 0))),
                (l = -(d = Math.min(d / 2 - l / 2, 0))),
                (s = c * r.scale),
                (a = i * r.scale),
                s < o && (s = o),
                s > n && (s = n),
                a < d && (a = d),
                a > l && (a = l))
              : ((s = 0), (a = 0)),
            m.$imageWrapEl
              .transition(300)
              .transform(`translate3d(${s}px, ${a}px,0)`),
            m.$imageEl
              .transition(300)
              .transform(`translate3d(0,0,0) scale(${r.scale})`);
        }
      }
      function y() {
        const e = p.zoom;
        var t = p.params.zoom;
        m.$slideEl ||
          (p.params.virtual && p.params.virtual.enabled && p.virtual
            ? (m.$slideEl = p.$wrapperEl.children(
                `.${p.params.slideActiveClass}`
              ))
            : (m.$slideEl = p.slides.eq(p.activeIndex)),
          (m.$imageEl = m.$slideEl
            .find(`.${t.containerClass}`)
            .eq(0)
            .find("picture, img, svg, canvas, .swiper-zoom-target")
            .eq(0)),
          (m.$imageWrapEl = m.$imageEl.parent(`.${t.containerClass}`))),
          m.$imageEl &&
            0 !== m.$imageEl.length &&
            m.$imageWrapEl &&
            0 !== m.$imageWrapEl.length &&
            (p.params.cssMode &&
              ((p.wrapperEl.style.overflow = ""),
              (p.wrapperEl.style.touchAction = "")),
            (e.scale = 1),
            (h = 1),
            m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            m.$slideEl.removeClass(`${t.zoomedSlideClass}`),
            (m.$slideEl = void 0));
      }
      function E(e) {
        var t = p.zoom;
        t.scale && 1 !== t.scale ? y() : b(e);
      }
      function S() {
        var e = p.support;
        return {
          passiveListener: !(
            "touchstart" !== p.touchEvents.start ||
            !e.passiveListener ||
            !p.params.passiveListeners
          ) && { passive: !0, capture: !1 },
          activeListenerWithCapture: !e.passiveListener || {
            passive: !1,
            capture: !0,
          },
        };
      }
      function C() {
        return `.${p.params.slideClass}`;
      }
      function T(e) {
        var t = S()["passiveListener"],
          s = C();
        p.$wrapperEl[e]("gesturestart", s, c, t),
          p.$wrapperEl[e]("gesturechange", s, g, t),
          p.$wrapperEl[e]("gestureend", s, v, t);
      }
      function $() {
        s || ((s = !0), T("on"));
      }
      function M() {
        s && ((s = !1), T("off"));
      }
      function P() {
        const e = p.zoom;
        var t, s, a, i;
        e.enabled ||
          ((e.enabled = !0),
          (t = p.support),
          ({ passiveListener: s, activeListenerWithCapture: a } = S()),
          (i = C()),
          t.gestures
            ? (p.$wrapperEl.on(p.touchEvents.start, $, s),
              p.$wrapperEl.on(p.touchEvents.end, M, s))
            : "touchstart" === p.touchEvents.start &&
              (p.$wrapperEl.on(p.touchEvents.start, i, c, s),
              p.$wrapperEl.on(p.touchEvents.move, i, g, a),
              p.$wrapperEl.on(p.touchEvents.end, i, v, s),
              p.touchEvents.cancel &&
                p.$wrapperEl.on(p.touchEvents.cancel, i, v, s)),
          p.$wrapperEl.on(
            p.touchEvents.move,
            `.${p.params.zoom.containerClass}`,
            x,
            a
          ));
      }
      function z() {
        const e = p.zoom;
        var t, s, a, i;
        e.enabled &&
          ((t = p.support),
          (e.enabled = !1),
          ({ passiveListener: s, activeListenerWithCapture: a } = S()),
          (i = C()),
          t.gestures
            ? (p.$wrapperEl.off(p.touchEvents.start, $, s),
              p.$wrapperEl.off(p.touchEvents.end, M, s))
            : "touchstart" === p.touchEvents.start &&
              (p.$wrapperEl.off(p.touchEvents.start, i, c, s),
              p.$wrapperEl.off(p.touchEvents.move, i, g, a),
              p.$wrapperEl.off(p.touchEvents.end, i, v, s),
              p.touchEvents.cancel &&
                p.$wrapperEl.off(p.touchEvents.cancel, i, v, s)),
          p.$wrapperEl.off(
            p.touchEvents.move,
            `.${p.params.zoom.containerClass}`,
            x,
            a
          ));
      }
      Object.defineProperty(p.zoom, "scale", {
        get() {
          return i;
        },
        set(e) {
          var t, s;
          i !== e &&
            ((t = m.$imageEl ? m.$imageEl[0] : void 0),
            (s = m.$slideEl ? m.$slideEl[0] : void 0),
            a("zoomChange", e, t, s)),
            (i = e);
        },
      }),
        t("init", () => {
          p.params.zoom.enabled && P();
        }),
        t("destroy", () => {
          z();
        }),
        t("touchStart", (e, t) => {
          var s;
          p.zoom.enabled &&
            ((s = t),
            (t = p.device),
            m.$imageEl &&
              0 !== m.$imageEl.length &&
              (f.isTouched ||
                (t.android && s.cancelable && s.preventDefault(),
                (f.isTouched = !0),
                (f.touchesStart.x = ("touchstart" === s.type
                  ? s.targetTouches[0]
                  : s
                ).pageX),
                (f.touchesStart.y = ("touchstart" === s.type
                  ? s.targetTouches[0]
                  : s
                ).pageY))));
        }),
        t("touchEnd", (e, t) => {
          p.zoom.enabled &&
            (function() {
              var s = p.zoom;
              if (m.$imageEl && 0 !== m.$imageEl.length) {
                if (!f.isTouched || !f.isMoved)
                  return (f.isTouched = !1), (f.isMoved = !1);
                (f.isTouched = !1), (f.isMoved = !1);
                let e = 300,
                  t = 300;
                var a = o.x * e,
                  i = f.currentX + a,
                  r = o.y * t,
                  a = f.currentY + r;
                0 !== o.x && (e = Math.abs((i - f.currentX) / o.x)),
                  0 !== o.y && (t = Math.abs((a - f.currentY) / o.y));
                r = Math.max(e, t);
                (f.currentX = i), (f.currentY = a);
                (a = f.width * s.scale), (s = f.height * s.scale);
                (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0)),
                  (f.maxX = -f.minX),
                  (f.minY = Math.min(m.slideHeight / 2 - s / 2, 0)),
                  (f.maxY = -f.minY),
                  (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
                  (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
                  m.$imageWrapEl
                    .transition(r)
                    .transform(
                      `translate3d(${f.currentX}px, ${f.currentY}px,0)`
                    );
              }
            })();
        }),
        t("doubleTap", (e, t) => {
          !p.animating &&
            p.params.zoom.enabled &&
            p.zoom.enabled &&
            p.params.zoom.toggle &&
            E(t);
        }),
        t("transitionEnd", () => {
          p.zoom.enabled && p.params.zoom.enabled && w();
        }),
        t("slideChange", () => {
          p.zoom.enabled && p.params.zoom.enabled && p.params.cssMode && w();
        }),
        Object.assign(p.zoom, {
          enable: P,
          disable: z,
          in: b,
          out: y,
          toggle: E,
        });
    },
    function({ swiper: u, extendParams: e, on: t, emit: h }) {
      e({
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: "",
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader",
        },
      });
      let d = !(u.lazy = {}),
        p = !1;
      function m(e, d = !0) {
        const c = u.params.lazy;
        if (void 0 !== e && 0 !== u.slides.length) {
          const p =
              u.virtual && u.params.virtual.enabled
                ? u.$wrapperEl.children(
                    `.${u.params.slideClass}[data-swiper-slide-index="${e}"]`
                  )
                : u.slides.eq(e),
            t = p.find(
              `.${c.elementClass}:not(.${c.loadedClass}):not(.${c.loadingClass})`
            );
          !p.hasClass(c.elementClass) ||
            p.hasClass(c.loadedClass) ||
            p.hasClass(c.loadingClass) ||
            t.push(p[0]),
            0 !== t.length &&
              t.each((e) => {
                const a = O(e);
                a.addClass(c.loadingClass);
                const i = a.attr("data-background"),
                  r = a.attr("data-src"),
                  n = a.attr("data-srcset"),
                  l = a.attr("data-sizes"),
                  o = a.parent("picture");
                u.loadImage(a[0], r || i, n, l, !1, () => {
                  if (null != u && u && (!u || u.params) && !u.destroyed) {
                    if (
                      (i
                        ? (a.css("background-image", `url("${i}")`),
                          a.removeAttr("data-background"))
                        : (n &&
                            (a.attr("srcset", n), a.removeAttr("data-srcset")),
                          l && (a.attr("sizes", l), a.removeAttr("data-sizes")),
                          o.length &&
                            o.children("source").each((e) => {
                              const t = O(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          r && (a.attr("src", r), a.removeAttr("data-src"))),
                      a.addClass(c.loadedClass).removeClass(c.loadingClass),
                      p.find(`.${c.preloaderClass}`).remove(),
                      u.params.loop && d)
                    ) {
                      var e = p.attr("data-swiper-slide-index");
                      if (p.hasClass(u.params.slideDuplicateClass)) {
                        const t = u.$wrapperEl.children(
                          `[data-swiper-slide-index="${e}"]:not(.${u.params.slideDuplicateClass})`
                        );
                        m(t.index(), !1);
                      } else {
                        const s = u.$wrapperEl.children(
                          `.${u.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                        );
                        m(s.index(), !1);
                      }
                    }
                    h("lazyImageReady", p[0], a[0]),
                      u.params.autoHeight && u.updateAutoHeight();
                  }
                }),
                  h("lazyImageLoad", p[0], a[0]);
              });
        }
      }
      function c() {
        const { $wrapperEl: t, params: s, slides: a, activeIndex: i } = u,
          r = u.virtual && s.virtual.enabled;
        var e = s.lazy;
        let n = s.slidesPerView;
        function l(e) {
          if (r) {
            if (
              t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`)
                .length
            )
              return 1;
          } else if (a[e]) return 1;
        }
        function o(e) {
          return r ? O(e).attr("data-swiper-slide-index") : O(e).index();
        }
        if (
          ("auto" === n && (n = 0), (p = p || !0), u.params.watchSlidesProgress)
        )
          t.children(`.${s.slideVisibleClass}`).each((e) => {
            m(r ? O(e).attr("data-swiper-slide-index") : O(e).index());
          });
        else if (1 < n) for (let e = i; e < i + n; e += 1) l(e) && m(e);
        else m(i);
        if (e.loadPrevNext)
          if (1 < n || (e.loadPrevNextAmount && 1 < e.loadPrevNextAmount)) {
            var d = e.loadPrevNextAmount,
              e = n,
              c = Math.min(i + e + Math.max(d, e), a.length),
              d = Math.max(i - Math.max(e, d), 0);
            for (let e = i + n; e < c; e += 1) l(e) && m(e);
            for (let e = d; e < i; e += 1) l(e) && m(e);
          } else {
            d = t.children(`.${s.slideNextClass}`);
            0 < d.length && m(o(d));
            d = t.children(`.${s.slidePrevClass}`);
            0 < d.length && m(o(d));
          }
      }
      function f() {
        var e = k();
        if (u && !u.destroyed) {
          const l = u.params.lazy.scrollingElement
            ? O(u.params.lazy.scrollingElement)
            : O(e);
          var s = l[0] === e,
            a = s ? e.innerWidth : l[0].offsetWidth,
            i = s ? e.innerHeight : l[0].offsetHeight;
          const o = u.$el.offset();
          var e = u["rtlTranslate"];
          let t = !1;
          e && (o.left -= u.$el[0].scrollLeft);
          var r = [
            [o.left, o.top],
            [o.left + u.width, o.top],
            [o.left, o.top + u.height],
            [o.left + u.width, o.top + u.height],
          ];
          for (let e = 0; e < r.length; e += 1) {
            var n = r[e];
            0 <= n[0] &&
              n[0] <= a &&
              0 <= n[1] &&
              n[1] <= i &&
              ((0 === n[0] && 0 === n[1]) || (t = !0));
          }
          e = !(
            "touchstart" !== u.touchEvents.start ||
            !u.support.passiveListener ||
            !u.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          t
            ? (c(), l.off("scroll", f, e))
            : d || ((d = !0), l.on("scroll", f, e));
        }
      }
      t("beforeInit", () => {
        u.params.lazy.enabled &&
          u.params.preloadImages &&
          (u.params.preloadImages = !1);
      }),
        t("init", () => {
          u.params.lazy.enabled && (u.params.lazy.checkInView ? f : c)();
        }),
        t("scroll", () => {
          u.params.freeMode &&
            u.params.freeMode.enabled &&
            !u.params.freeMode.sticky &&
            c();
        }),
        t("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
          u.params.lazy.enabled && (u.params.lazy.checkInView ? f : c)();
        }),
        t("transitionStart", () => {
          u.params.lazy.enabled &&
            ((!u.params.lazy.loadOnTransitionStart &&
              (u.params.lazy.loadOnTransitionStart || p)) ||
              (u.params.lazy.checkInView ? f : c)());
        }),
        t("transitionEnd", () => {
          u.params.lazy.enabled &&
            !u.params.lazy.loadOnTransitionStart &&
            (u.params.lazy.checkInView ? f : c)();
        }),
        t("slideChange", () => {
          var {
            lazy: e,
            cssMode: t,
            watchSlidesProgress: s,
            touchReleaseOnEdges: a,
            resistanceRatio: i,
          } = u.params;
          e.enabled && (t || (s && (a || 0 === i))) && c();
        }),
        Object.assign(u.lazy, { load: c, loadInSlide: m });
    },
    function({ swiper: l, extendParams: e, on: t }) {
      function o(e, t) {
        const s = (function() {
          let s, a, i;
          return (e, t) => {
            for (a = -1, s = e.length; 1 < s - a; )
              (i = (s + a) >> 1), e[i] <= t ? (a = i) : (s = i);
            return s;
          };
        })();
        (this.x = e), (this.y = t), (this.lastIndex = e.length - 1);
        let a, i;
        return (
          (this.interpolate = function(e) {
            return e
              ? ((i = s(this.x, e)),
                (a = i - 1),
                ((e - this.x[a]) * (this.y[i] - this.y[a])) /
                  (this.x[i] - this.x[a]) +
                  this.y[a])
              : 0;
          }),
          this
        );
      }
      function s() {
        l.controller.control &&
          l.controller.spline &&
          ((l.controller.spline = void 0), delete l.controller.spline);
      }
      e({ controller: { control: void 0, inverse: !1, by: "slide" } }),
        (l.controller = { control: void 0 }),
        t("beforeInit", () => {
          l.controller.control = l.params.controller.control;
        }),
        t("update", () => {
          s();
        }),
        t("resize", () => {
          s();
        }),
        t("observerUpdate", () => {
          s();
        }),
        t("setTranslate", (e, t, s) => {
          l.controller.control && l.controller.setTranslate(t, s);
        }),
        t("setTransition", (e, t, s) => {
          l.controller.control && l.controller.setTransition(t, s);
        }),
        Object.assign(l.controller, {
          setTranslate: function(e, t) {
            var s = l.controller.control;
            let a, i;
            var r = l.constructor;
            function n(e) {
              var t,
                s = l.rtlTranslate ? -l.translate : l.translate;
              "slide" === l.params.controller.by &&
                ((t = e),
                l.controller.spline ||
                  (l.controller.spline = l.params.loop
                    ? new o(l.slidesGrid, t.slidesGrid)
                    : new o(l.snapGrid, t.snapGrid)),
                (i = -l.controller.spline.interpolate(-s))),
                (i && "container" !== l.params.controller.by) ||
                  ((a =
                    (e.maxTranslate() - e.minTranslate()) /
                    (l.maxTranslate() - l.minTranslate())),
                  (i = (s - l.minTranslate()) * a + e.minTranslate())),
                l.params.controller.inverse && (i = e.maxTranslate() - i),
                e.updateProgress(i),
                e.setTranslate(i, l),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            if (Array.isArray(s))
              for (let e = 0; e < s.length; e += 1)
                s[e] !== t && s[e] instanceof r && n(s[e]);
            else s instanceof r && t !== s && n(s);
          },
          setTransition: function(t, e) {
            var s = l.constructor;
            const a = l.controller.control;
            let i;
            function r(e) {
              e.setTransition(t, l),
                0 !== t &&
                  (e.transitionStart(),
                  e.params.autoHeight &&
                    S(() => {
                      e.updateAutoHeight();
                    }),
                  e.$wrapperEl.transitionEnd(() => {
                    a &&
                      (e.params.loop &&
                        "slide" === l.params.controller.by &&
                        e.loopFix(),
                      e.transitionEnd());
                  }));
            }
            if (Array.isArray(a))
              for (i = 0; i < a.length; i += 1)
                a[i] !== e && a[i] instanceof s && r(a[i]);
            else a instanceof s && e !== a && r(a);
          },
        });
    },
    function({ swiper: l, extendParams: e, on: t }) {
      e({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
        },
      });
      let o = null;
      function a(e) {
        const t = o;
        0 !== t.length && (t.html(""), t.html(e));
      }
      function i(e) {
        e.attr("tabIndex", "0");
      }
      function s(e) {
        e.attr("tabIndex", "-1");
      }
      function d(e, t) {
        e.attr("role", t);
      }
      function c(e, t) {
        e.attr("aria-roledescription", t);
      }
      function p(e, t) {
        e.attr("aria-label", t);
      }
      function r(e) {
        e.attr("aria-disabled", !0);
      }
      function n(e) {
        e.attr("aria-disabled", !1);
      }
      function u(e) {
        if (13 === e.keyCode || 32 === e.keyCode) {
          var t = l.params.a11y;
          const s = O(e.target);
          l.navigation &&
            l.navigation.$nextEl &&
            s.is(l.navigation.$nextEl) &&
            ((l.isEnd && !l.params.loop) || l.slideNext(),
            l.isEnd ? a(t.lastSlideMessage) : a(t.nextSlideMessage)),
            l.navigation &&
              l.navigation.$prevEl &&
              s.is(l.navigation.$prevEl) &&
              ((l.isBeginning && !l.params.loop) || l.slidePrev(),
              l.isBeginning ? a(t.firstSlideMessage) : a(t.prevSlideMessage)),
            l.pagination &&
              s.is(N(l.params.pagination.bulletClass)) &&
              s[0].click();
        }
      }
      function h() {
        var e, t;
        !l.params.loop &&
          l.navigation &&
          (({ $nextEl: e, $prevEl: t } = l.navigation),
          t && 0 < t.length && (l.isBeginning ? (r(t), s(t)) : (n(t), i(t))),
          e && 0 < e.length && (l.isEnd ? (r(e), s(e)) : (n(e), i(e))));
      }
      function m() {
        return (
          l.pagination &&
          l.params.pagination.clickable &&
          l.pagination.bullets &&
          l.pagination.bullets.length
        );
      }
      const f = (e, t, s) => {
        i(e),
          "BUTTON" !== e[0].tagName && (d(e, "button"), e.on("keydown", u)),
          p(e, s),
          e.attr("aria-controls", t);
      };
      function g() {
        const a = l.params.a11y;
        l.$el.append(o);
        var e = l.$el;
        a.containerRoleDescriptionMessage &&
          c(e, a.containerRoleDescriptionMessage),
          a.containerMessage && p(e, a.containerMessage);
        const t = l.$wrapperEl;
        var e =
            t.attr("id") ||
            `swiper-wrapper-${((s = 16),
            "x"
              .repeat(s)
              .replace(/x/g, () =>
                Math.round(16 * Math.random()).toString(16)
              ))}`,
          s = l.params.autoplay && l.params.autoplay.enabled ? "off" : "polite";
        t.attr("id", e),
          t.attr("aria-live", s),
          a.itemRoleDescriptionMessage &&
            c(O(l.slides), a.itemRoleDescriptionMessage),
          d(O(l.slides), a.slideRole);
        const i = (l.params.loop
          ? l.slides.filter(
              (e) => !e.classList.contains(l.params.slideDuplicateClass)
            )
          : l.slides
        ).length;
        l.slides.each((e, t) => {
          const s = O(e);
          (t = l.params.loop
            ? parseInt(s.attr("data-swiper-slide-index"), 10)
            : t),
            (t = a.slideLabelMessage
              .replace(/\{\{index\}\}/, t + 1)
              .replace(/\{\{slidesLength\}\}/, i));
          p(s, t);
        });
        let r, n;
        l.navigation && l.navigation.$nextEl && (r = l.navigation.$nextEl),
          l.navigation && l.navigation.$prevEl && (n = l.navigation.$prevEl),
          r && r.length && f(r, e, a.nextSlideMessage),
          n && n.length && f(n, e, a.prevSlideMessage),
          m() &&
            l.pagination.$el.on(
              "keydown",
              N(l.params.pagination.bulletClass),
              u
            );
      }
      t("beforeInit", () => {
        o = O(
          `<span class="${l.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
        );
      }),
        t("afterInit", () => {
          l.params.a11y.enabled && (g(), h());
        }),
        t("toEdge", () => {
          l.params.a11y.enabled && h();
        }),
        t("fromEdge", () => {
          l.params.a11y.enabled && h();
        }),
        t("paginationUpdate", () => {
          l.params.a11y.enabled &&
            (function() {
              const s = l.params.a11y;
              m() &&
                l.pagination.bullets.each((e) => {
                  const t = O(e);
                  i(t),
                    l.params.pagination.renderBullet ||
                      (d(t, "button"),
                      p(
                        t,
                        s.paginationBulletMessage.replace(
                          /\{\{index\}\}/,
                          t.index() + 1
                        )
                      ));
                });
            })();
        }),
        t("destroy", () => {
          l.params.a11y.enabled &&
            (function() {
              o && 0 < o.length && o.remove();
              let e, t;
              l.navigation &&
                l.navigation.$nextEl &&
                (e = l.navigation.$nextEl),
                l.navigation &&
                  l.navigation.$prevEl &&
                  (t = l.navigation.$prevEl),
                e && e.off("keydown", u),
                t && t.off("keydown", u),
                m() &&
                  l.pagination.$el.off(
                    "keydown",
                    N(l.params.pagination.bulletClass),
                    u
                  );
            })();
        });
    },
    function({ swiper: l, extendParams: e, on: t }) {
      e({
        history: { enabled: !1, root: "", replaceState: !1, key: "slides" },
      });
      let n = !1,
        s = {};
      const o = (e) =>
          e
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, ""),
        a = (e) => {
          var t = k();
          let s;
          s = e ? new URL(e) : t.location;
          (e = s.pathname
            .slice(1)
            .split("/")
            .filter((e) => "" !== e)),
            (t = e.length);
          return { key: e[t - 2], value: e[t - 1] };
        },
        i = (s, a) => {
          const i = k();
          if (n && l.params.history.enabled) {
            let e;
            e = l.params.url ? new URL(l.params.url) : i.location;
            const r = l.slides.eq(a);
            let t = o(r.attr("data-history"));
            if (0 < l.params.history.root.length) {
              let e = l.params.history.root;
              "/" === e[e.length - 1] && (e = e.slice(0, e.length - 1)),
                (t = `${e}/${s}/${t}`);
            } else e.pathname.includes(s) || (t = `${s}/${t}`);
            s = i.history.state;
            (s && s.value === t) ||
              (l.params.history.replaceState
                ? i.history.replaceState({ value: t }, null, t)
                : i.history.pushState({ value: t }, null, t));
          }
        },
        r = (s, a, i) => {
          if (a)
            for (let e = 0, t = l.slides.length; e < t; e += 1) {
              const n = l.slides.eq(e);
              var r;
              o(n.attr("data-history")) !== a ||
                n.hasClass(l.params.slideDuplicateClass) ||
                ((r = n.index()), l.slideTo(r, s, i));
            }
          else l.slideTo(0, s, i);
        },
        d = () => {
          (s = a(l.params.url)), r(l.params.speed, l.paths.value, !1);
        };
      t("init", () => {
        l.params.history.enabled &&
          (() => {
            const e = k();
            if (l.params.history) {
              if (!e.history || !e.history.pushState)
                return (
                  (l.params.history.enabled = !1),
                  (l.params.hashNavigation.enabled = !0)
                );
              (n = !0),
                (s = a(l.params.url)),
                (s.key || s.value) &&
                  (r(0, s.value, l.params.runCallbacksOnInit),
                  l.params.history.replaceState ||
                    e.addEventListener("popstate", d));
            }
          })();
      }),
        t("destroy", () => {
          l.params.history.enabled &&
            (() => {
              const e = k();
              l.params.history.replaceState ||
                e.removeEventListener("popstate", d);
            })();
        }),
        t("transitionEnd _freeModeNoMomentumRelease", () => {
          n && i(l.params.history.key, l.activeIndex);
        }),
        t("slideChange", () => {
          n && l.params.cssMode && i(l.params.history.key, l.activeIndex);
        });
    },
    function({ swiper: r, extendParams: e, emit: s, on: t }) {
      let n = !1;
      const l = E(),
        o = k();
      e({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
      const d = () => {
          s("hashChange");
          var e = l.location.hash.replace("#", "");
          e === r.slides.eq(r.activeIndex).attr("data-hash") ||
            (void 0 !==
              (e = r.$wrapperEl
                .children(`.${r.params.slideClass}[data-hash="${e}"]`)
                .index()) &&
              r.slideTo(e));
        },
        a = () => {
          if (n && r.params.hashNavigation.enabled)
            if (
              r.params.hashNavigation.replaceState &&
              o.history &&
              o.history.replaceState
            )
              o.history.replaceState(
                null,
                null,
                `#${r.slides.eq(r.activeIndex).attr("data-hash")}` || ""
              ),
                s("hashSet");
            else {
              const t = r.slides.eq(r.activeIndex);
              var e = t.attr("data-hash") || t.attr("data-history");
              (l.location.hash = e || ""), s("hashSet");
            }
        };
      t("init", () => {
        r.params.hashNavigation.enabled &&
          (() => {
            if (
              !(
                !r.params.hashNavigation.enabled ||
                (r.params.history && r.params.history.enabled)
              )
            ) {
              n = !0;
              var s = l.location.hash.replace("#", "");
              if (s) {
                var a;
                for (let e = 0, t = r.slides.length; e < t; e += 1) {
                  const i = r.slides.eq(e);
                  (i.attr("data-hash") || i.attr("data-history")) !== s ||
                    i.hasClass(r.params.slideDuplicateClass) ||
                    ((a = i.index()),
                    r.slideTo(a, 0, r.params.runCallbacksOnInit, !0));
                }
              }
              r.params.hashNavigation.watchState && O(o).on("hashchange", d);
            }
          })();
      }),
        t("destroy", () => {
          r.params.hashNavigation.enabled &&
            r.params.hashNavigation.watchState &&
            O(o).off("hashchange", d);
        }),
        t("transitionEnd _freeModeNoMomentumRelease", () => {
          n && a();
        }),
        t("slideChange", () => {
          n && r.params.cssMode && a();
        });
    },
    function({ swiper: a, extendParams: e, on: t, emit: s }) {
      let i;
      function r() {
        const e = a.slides.eq(a.activeIndex);
        let t = a.params.autoplay.delay;
        e.attr("data-swiper-autoplay") &&
          (t = e.attr("data-swiper-autoplay") || a.params.autoplay.delay),
          clearTimeout(i),
          (i = S(() => {
            let e;
            a.params.autoplay.reverseDirection
              ? a.params.loop
                ? (a.loopFix(),
                  (e = a.slidePrev(a.params.speed, !0, !0)),
                  s("autoplay"))
                : a.isBeginning
                ? a.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((e = a.slideTo(
                      a.slides.length - 1,
                      a.params.speed,
                      !0,
                      !0
                    )),
                    s("autoplay"))
                : ((e = a.slidePrev(a.params.speed, !0, !0)), s("autoplay"))
              : a.params.loop
              ? (a.loopFix(),
                (e = a.slideNext(a.params.speed, !0, !0)),
                s("autoplay"))
              : a.isEnd
              ? a.params.autoplay.stopOnLastSlide
                ? l()
                : ((e = a.slideTo(0, a.params.speed, !0, !0)), s("autoplay"))
              : ((e = a.slideNext(a.params.speed, !0, !0)), s("autoplay")),
              ((a.params.cssMode && a.autoplay.running) || !1 === e) && r();
          }, t));
      }
      function n() {
        return (
          void 0 === i &&
          !a.autoplay.running &&
          ((a.autoplay.running = !0), s("autoplayStart"), r(), !0)
        );
      }
      function l() {
        return (
          !!a.autoplay.running &&
          void 0 !== i &&
          (i && (clearTimeout(i), (i = void 0)),
          (a.autoplay.running = !1),
          s("autoplayStop"),
          !0)
        );
      }
      function o(e) {
        a.autoplay.running &&
          (a.autoplay.paused ||
            (i && clearTimeout(i),
            (a.autoplay.paused = !0),
            0 !== e && a.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                  a.$wrapperEl[0].addEventListener(e, c);
                })
              : ((a.autoplay.paused = !1), r())));
      }
      function d() {
        var e = E();
        "hidden" === e.visibilityState && a.autoplay.running && o(),
          "visible" === e.visibilityState &&
            a.autoplay.paused &&
            (r(), (a.autoplay.paused = !1));
      }
      function c(e) {
        a &&
          !a.destroyed &&
          a.$wrapperEl &&
          e.target === a.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((e) => {
            a.$wrapperEl[0].removeEventListener(e, c);
          }),
          (a.autoplay.paused = !1),
          (a.autoplay.running ? r : l)());
      }
      function p() {
        (a.params.autoplay.disableOnInteraction ? l : o)(),
          ["transitionend", "webkitTransitionEnd"].forEach((e) => {
            a.$wrapperEl[0].removeEventListener(e, c);
          });
      }
      function u() {
        a.params.autoplay.disableOnInteraction ||
          ((a.autoplay.paused = !1), r());
      }
      e({
        autoplay: {
          enabled: !(a.autoplay = { running: !1, paused: !1 }),
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1,
        },
      }),
        t("init", () => {
          if (a.params.autoplay.enabled) {
            n();
            const e = E();
            e.addEventListener("visibilitychange", d),
              a.params.autoplay.pauseOnMouseEnter &&
                (a.$el.on("mouseenter", p), a.$el.on("mouseleave", u));
          }
        }),
        t("beforeTransitionStart", (e, t, s) => {
          a.autoplay.running &&
            (s || !a.params.autoplay.disableOnInteraction
              ? a.autoplay.pause(t)
              : l());
        }),
        t("sliderFirstMove", () => {
          a.autoplay.running &&
            (a.params.autoplay.disableOnInteraction ? l : o)();
        }),
        t("touchEnd", () => {
          a.params.cssMode &&
            a.autoplay.paused &&
            !a.params.autoplay.disableOnInteraction &&
            r();
        }),
        t("destroy", () => {
          a.$el.off("mouseenter", p),
            a.$el.off("mouseleave", u),
            a.autoplay.running && l();
          const e = E();
          e.removeEventListener("visibilitychange", d);
        }),
        Object.assign(a.autoplay, { pause: o, run: r, start: n, stop: l });
    },
    function({ swiper: c, extendParams: e, on: t }) {
      e({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let s = !1,
        a = !1;
      function i() {
        var s = c.thumbs.swiper;
        if (s) {
          var a = s.clickedIndex,
            e = s.clickedSlide;
          if (
            !(
              (e && O(e).hasClass(c.params.thumbs.slideThumbActiveClass)) ||
              null == a
            )
          ) {
            let t;
            if (
              ((t = s.params.loop
                ? parseInt(
                    O(s.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : a),
              c.params.loop)
            ) {
              let e = c.activeIndex;
              c.slides.eq(e).hasClass(c.params.slideDuplicateClass) &&
                (c.loopFix(),
                (c._clientLeft = c.$wrapperEl[0].clientLeft),
                (e = c.activeIndex));
              (s = c.slides
                .eq(e)
                .prevAll(`[data-swiper-slide-index="${t}"]`)
                .eq(0)
                .index()),
                (a = c.slides
                  .eq(e)
                  .nextAll(`[data-swiper-slide-index="${t}"]`)
                  .eq(0)
                  .index());
              t = void 0 === s || (void 0 !== a && a - e < e - s) ? a : s;
            }
            c.slideTo(t);
          }
        }
      }
      function r() {
        var e = c.params["thumbs"];
        if (s) return !1;
        s = !0;
        const t = c.constructor;
        return (
          e.swiper instanceof t
            ? ((c.thumbs.swiper = e.swiper),
              Object.assign(c.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              Object.assign(c.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }))
            : d(e.swiper) &&
              ((e = Object.assign({}, e.swiper)),
              Object.assign(e, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              (c.thumbs.swiper = new t(e)),
              (a = !0)),
          c.thumbs.swiper.$el.addClass(c.params.thumbs.thumbsContainerClass),
          c.thumbs.swiper.on("tap", i),
          !0
        );
      }
      function n(a) {
        const i = c.thumbs.swiper;
        if (i) {
          var r,
            n,
            l =
              "auto" === i.params.slidesPerView
                ? i.slidesPerViewDynamic()
                : i.params.slidesPerView,
            o = c.params.thumbs.autoScrollOffset,
            d = o && !i.params.loop;
          if (c.realIndex !== i.realIndex || d) {
            let e = i.activeIndex,
              t,
              s;
            (s = i.params.loop
              ? (i.slides.eq(e).hasClass(i.params.slideDuplicateClass) &&
                  (i.loopFix(),
                  (i._clientLeft = i.$wrapperEl[0].clientLeft),
                  (e = i.activeIndex)),
                (r = i.slides
                  .eq(e)
                  .prevAll(`[data-swiper-slide-index="${c.realIndex}"]`)
                  .eq(0)
                  .index()),
                (n = i.slides
                  .eq(e)
                  .nextAll(`[data-swiper-slide-index="${c.realIndex}"]`)
                  .eq(0)
                  .index()),
                (t =
                  void 0 === r
                    ? n
                    : void 0 === n
                    ? r
                    : n - e == e - r
                    ? 1 < i.params.slidesPerGroup
                      ? n
                      : e
                    : n - e < e - r
                    ? n
                    : r),
                c.activeIndex > c.previousIndex ? "next" : "prev")
              : ((t = c.realIndex), t > c.previousIndex ? "next" : "prev")),
              d && (t += "next" === s ? o : -1 * o),
              i.visibleSlidesIndexes &&
                i.visibleSlidesIndexes.indexOf(t) < 0 &&
                (i.params.centeredSlides
                  ? (t =
                      t > e
                        ? t - Math.floor(l / 2) + 1
                        : t + Math.floor(l / 2) - 1)
                  : t > e && i.params.slidesPerGroup,
                i.slideTo(t, a ? 0 : void 0));
          }
          let t = 1;
          var s = c.params.thumbs.slideThumbActiveClass;
          if (
            (1 < c.params.slidesPerView &&
              !c.params.centeredSlides &&
              (t = c.params.slidesPerView),
            c.params.thumbs.multipleActiveThumbs || (t = 1),
            (t = Math.floor(t)),
            i.slides.removeClass(s),
            i.params.loop || (i.params.virtual && i.params.virtual.enabled))
          )
            for (let e = 0; e < t; e += 1)
              i.$wrapperEl
                .children(`[data-swiper-slide-index="${c.realIndex + e}"]`)
                .addClass(s);
          else
            for (let e = 0; e < t; e += 1)
              i.slides.eq(c.realIndex + e).addClass(s);
        }
      }
      (c.thumbs = { swiper: null }),
        t("beforeInit", () => {
          var e = c.params["thumbs"];
          e && e.swiper && (r(), n(!0));
        }),
        t("slideChange update resize observerUpdate", () => {
          c.thumbs.swiper && n();
        }),
        t("setTransition", (e, t) => {
          const s = c.thumbs.swiper;
          s && s.setTransition(t);
        }),
        t("beforeDestroy", () => {
          const e = c.thumbs.swiper;
          e && a && e && e.destroy();
        }),
        Object.assign(c.thumbs, { init: r, update: n });
    },
    function({ swiper: h, extendParams: e, emit: m, once: f }) {
      e({
        freeMode: {
          enabled: !1,
          momentum: !0,
          momentumRatio: 1,
          momentumBounce: !0,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: !1,
          minimumVelocity: 0.02,
        },
      }),
        Object.assign(h, {
          freeMode: {
            onTouchMove: function() {
              const { touchEventsData: e, touches: t } = h;
              0 === e.velocities.length &&
                e.velocities.push({
                  position: t[h.isHorizontal() ? "startX" : "startY"],
                  time: e.touchStartTime,
                }),
                e.velocities.push({
                  position: t[h.isHorizontal() ? "currentX" : "currentY"],
                  time: v(),
                });
            },
            onTouchEnd: function({ currentPos: r }) {
              const {
                params: n,
                $wrapperEl: l,
                rtlTranslate: o,
                snapGrid: d,
                touchEventsData: c,
              } = h;
              var e = v() - c.touchStartTime;
              if (r < -h.minTranslate()) h.slideTo(h.activeIndex);
              else if (r > -h.maxTranslate())
                h.slides.length < d.length
                  ? h.slideTo(d.length - 1)
                  : h.slideTo(h.slides.length - 1);
              else {
                if (n.freeMode.momentum) {
                  1 < c.velocities.length
                    ? ((u = c.velocities.pop()),
                      (p = c.velocities.pop()),
                      (r = u.position - p.position),
                      (p = u.time - p.time),
                      (h.velocity = r / p),
                      (h.velocity /= 2),
                      Math.abs(h.velocity) < n.freeMode.minimumVelocity &&
                        (h.velocity = 0),
                      (150 < p || 300 < v() - u.time) && (h.velocity = 0))
                    : (h.velocity = 0),
                    (h.velocity *= n.freeMode.momentumVelocityRatio),
                    (c.velocities.length = 0);
                  let e = 1e3 * n.freeMode.momentumRatio;
                  var p = h.velocity * e;
                  let s = h.translate + p;
                  o && (s = -s);
                  let t = !1,
                    a;
                  var u =
                    20 * Math.abs(h.velocity) * n.freeMode.momentumBounceRatio;
                  let i;
                  if (s < h.maxTranslate())
                    n.freeMode.momentumBounce
                      ? (s + h.maxTranslate() < -u &&
                          (s = h.maxTranslate() - u),
                        (a = h.maxTranslate()),
                        (t = !0),
                        (c.allowMomentumBounce = !0))
                      : (s = h.maxTranslate()),
                      n.loop && n.centeredSlides && (i = !0);
                  else if (s > h.minTranslate())
                    n.freeMode.momentumBounce
                      ? (s - h.minTranslate() > u && (s = h.minTranslate() + u),
                        (a = h.minTranslate()),
                        (t = !0),
                        (c.allowMomentumBounce = !0))
                      : (s = h.minTranslate()),
                      n.loop && n.centeredSlides && (i = !0);
                  else if (n.freeMode.sticky) {
                    let t;
                    for (let e = 0; e < d.length; e += 1)
                      if (d[e] > -s) {
                        t = e;
                        break;
                      }
                    (s =
                      Math.abs(d[t] - s) < Math.abs(d[t - 1] - s) ||
                      "next" === h.swipeDirection
                        ? d[t]
                        : d[t - 1]),
                      (s = -s);
                  }
                  if (
                    (i &&
                      f("transitionEnd", () => {
                        h.loopFix();
                      }),
                    0 !== h.velocity)
                  )
                    (e = o
                      ? Math.abs((-s - h.translate) / h.velocity)
                      : Math.abs((s - h.translate) / h.velocity)),
                      n.freeMode.sticky &&
                        ((p = Math.abs((o ? -s : s) - h.translate)),
                        (u = h.slidesSizesGrid[h.activeIndex]),
                        (e =
                          p < u
                            ? n.speed
                            : p < 2 * u
                            ? 1.5 * n.speed
                            : 2.5 * n.speed));
                  else if (n.freeMode.sticky) return void h.slideToClosest();
                  n.freeMode.momentumBounce && t
                    ? (h.updateProgress(a),
                      h.setTransition(e),
                      h.setTranslate(s),
                      h.transitionStart(!0, h.swipeDirection),
                      (h.animating = !0),
                      l.transitionEnd(() => {
                        h &&
                          !h.destroyed &&
                          c.allowMomentumBounce &&
                          (m("momentumBounce"),
                          h.setTransition(n.speed),
                          setTimeout(() => {
                            h.setTranslate(a),
                              l.transitionEnd(() => {
                                h && !h.destroyed && h.transitionEnd();
                              });
                          }, 0));
                      }))
                    : h.velocity
                    ? (m("_freeModeNoMomentumRelease"),
                      h.updateProgress(s),
                      h.setTransition(e),
                      h.setTranslate(s),
                      h.transitionStart(!0, h.swipeDirection),
                      h.animating ||
                        ((h.animating = !0),
                        l.transitionEnd(() => {
                          h && !h.destroyed && h.transitionEnd();
                        })))
                    : h.updateProgress(s),
                    h.updateActiveIndex(),
                    h.updateSlidesClasses();
                } else {
                  if (n.freeMode.sticky) return void h.slideToClosest();
                  n.freeMode && m("_freeModeNoMomentumRelease");
                }
                (!n.freeMode.momentum || e >= n.longSwipesMs) &&
                  (h.updateProgress(),
                  h.updateActiveIndex(),
                  h.updateSlidesClasses());
              }
            },
          },
        });
    },
    function({ swiper: u, extendParams: e }) {
      e({ grid: { rows: 1, fill: "column" } });
      let h, m, f;
      u.grid = {
        initSlides: (e) => {
          var t = u.params["slidesPerView"],
            { rows: s, fill: a } = u.params.grid;
          (m = h / s),
            (f = Math.floor(e / s)),
            (h = Math.floor(e / s) === e / s ? e : Math.ceil(e / s) * s),
            "auto" !== t && "row" === a && (h = Math.max(h, t * s));
        },
        updateSlide: (e, t, s, a) => {
          var i,
            r,
            { slidesPerGroup: n, spaceBetween: l } = u.params,
            { rows: o, fill: d } = u.params.grid;
          let c, p;
          "row" === d && 1 < n
            ? ((r = e - o * n * (i = Math.floor(e / (n * o)))),
              (s = 0 === i ? n : Math.min(Math.ceil((s - i * o * n) / o), n)),
              (p = Math.floor(r / s)),
              (c = r - p * s + i * n),
              (n = c + (p * h) / o),
              t.css({ "-webkit-order": n, order: n }))
            : "column" === d
            ? ((c = Math.floor(e / o)),
              (p = e - c * o),
              (c > f || (c === f && p === o - 1)) &&
                ((p += 1), p >= o && ((p = 0), (c += 1))))
            : ((p = Math.floor(e / m)), (c = e - p * m)),
            t.css(a("margin-top"), 0 !== p ? l && `${l}px` : "");
        },
        updateWrapperSize: (e, s, t) => {
          var {
              spaceBetween: a,
              centeredSlides: i,
              roundLengths: r,
            } = u.params,
            n = u.params.grid["rows"];
          if (
            ((u.virtualSize = (e + a) * h),
            (u.virtualSize = Math.ceil(u.virtualSize / n) - a),
            u.$wrapperEl.css({ [t("width")]: `${u.virtualSize + a}px` }),
            i)
          ) {
            s.splice(0, s.length);
            const l = [];
            for (let t = 0; t < s.length; t += 1) {
              let e = s[t];
              r && (e = Math.floor(e)),
                s[t] < u.virtualSize + s[0] && l.push(e);
            }
            s.push(...l);
          }
        },
      };
    },
    function({ swiper: e }) {
      Object.assign(e, {
        appendSlide: function(t) {
          const { $wrapperEl: s, params: e } = this;
          if (
            (e.loop && this.loopDestroy(),
            "object" == typeof t && "length" in t)
          )
            for (let e = 0; e < t.length; e += 1) t[e] && s.append(t[e]);
          else s.append(t);
          e.loop && this.loopCreate(), e.observer || this.update();
        }.bind(e),
        prependSlide: function(t) {
          var e = this;
          const { params: s, $wrapperEl: a, activeIndex: i } = e;
          s.loop && e.loopDestroy();
          let r = i + 1;
          if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && a.prepend(t[e]);
            r = i + t.length;
          } else a.prepend(t);
          s.loop && e.loopCreate(),
            s.observer || e.update(),
            e.slideTo(r, 0, !1);
        }.bind(e),
        addSlide: function(t, s) {
          var a = this;
          const { $wrapperEl: i, params: r, activeIndex: e } = a;
          let n = e;
          r.loop &&
            ((n -= a.loopedSlides),
            a.loopDestroy(),
            (a.slides = i.children(`.${r.slideClass}`)));
          var l = a.slides.length;
          if (t <= 0) a.prependSlide(s);
          else if (l <= t) a.appendSlide(s);
          else {
            let e = n > t ? n + 1 : n;
            const o = [];
            for (let e = l - 1; e >= t; --e) {
              const d = a.slides.eq(e);
              d.remove(), o.unshift(d);
            }
            if ("object" == typeof s && "length" in s) {
              for (let e = 0; e < s.length; e += 1) s[e] && i.append(s[e]);
              e = n > t ? n + s.length : n;
            } else i.append(s);
            for (let e = 0; e < o.length; e += 1) i.append(o[e]);
            r.loop && a.loopCreate(),
              r.observer || a.update(),
              r.loop
                ? a.slideTo(e + a.loopedSlides, 0, !1)
                : a.slideTo(e, 0, !1);
          }
        }.bind(e),
        removeSlide: function(t) {
          var s = this;
          const { params: e, $wrapperEl: a, activeIndex: i } = s;
          let r = i;
          e.loop &&
            ((r -= s.loopedSlides),
            s.loopDestroy(),
            (s.slides = a.children(`.${e.slideClass}`)));
          let n = r,
            l;
          if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1)
              (l = t[e]), s.slides[l] && s.slides.eq(l).remove(), l < n && --n;
            n = Math.max(n, 0);
          } else
            (l = t),
              s.slides[l] && s.slides.eq(l).remove(),
              l < n && --n,
              (n = Math.max(n, 0));
          e.loop && s.loopCreate(),
            e.observer || s.update(),
            e.loop ? s.slideTo(n + s.loopedSlides, 0, !1) : s.slideTo(n, 0, !1);
        }.bind(e),
        removeAllSlides: function() {
          const t = [];
          for (let e = 0; e < this.slides.length; e += 1) t.push(e);
          this.removeSlide(t);
        }.bind(e),
      });
    },
    function({ swiper: l, extendParams: e, on: t }) {
      e({ fadeEffect: { crossFade: !1, transformEl: null } }),
        D({
          effect: "fade",
          swiper: l,
          on: t,
          setTranslate: () => {
            var e = l["slides"],
              a = l.params.fadeEffect;
            for (let s = 0; s < e.length; s += 1) {
              var i = l.slides.eq(s);
              let e = -i[0].swiperSlideOffset;
              l.params.virtualTranslate || (e -= l.translate);
              let t = 0;
              l.isHorizontal() || ((t = e), (e = 0));
              var r = l.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(i[0].progress), 0)
                : 1 + Math.min(Math.max(i[0].progress, -1), 0);
              const n = B(a, i);
              n.css({ opacity: r }).transform(
                `translate3d(${e}px, ${t}px, 0px)`
              );
            }
          },
          setTransition: (e) => {
            var t = l.params.fadeEffect["transformEl"];
            const s = t ? l.slides.find(t) : l.slides;
            s.transition(e),
              G({ swiper: l, duration: e, transformEl: t, allSlides: !0 });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !l.params.cssMode,
          }),
        });
    },
    function({ swiper: w, extendParams: e, on: t }) {
      e({
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      }),
        D({
          effect: "cube",
          swiper: w,
          on: t,
          setTranslate: () => {
            const {
              $el: e,
              $wrapperEl: t,
              slides: l,
              width: s,
              height: a,
              rtlTranslate: o,
              size: d,
              browser: i,
            } = w;
            var r,
              n,
              c = w.params.cubeEffect,
              p = w.isHorizontal(),
              u = w.virtual && w.params.virtual.enabled;
            let h = 0,
              m;
            c.shadow &&
              (p
                ? ((m = t.find(".swiper-cube-shadow")),
                  0 === m.length &&
                    ((m = O('<div class="swiper-cube-shadow"></div>')),
                    t.append(m)),
                  m.css({ height: `${s}px` }))
                : ((m = e.find(".swiper-cube-shadow")),
                  0 === m.length &&
                    ((m = O('<div class="swiper-cube-shadow"></div>')),
                    e.append(m))));
            for (let n = 0; n < l.length; n += 1) {
              const x = l.eq(n);
              let e = n;
              u && (e = parseInt(x.attr("data-swiper-slide-index"), 10));
              let t = 90 * e,
                s = Math.floor(t / 360);
              o && ((t = -t), (s = Math.floor(-t / 360)));
              var f = Math.max(Math.min(x[0].progress, 1), -1);
              let a = 0,
                i = 0,
                r = 0;
              e % 4 == 0
                ? ((a = 4 * -s * d), (r = 0))
                : (e - 1) % 4 == 0
                ? ((a = 0), (r = 4 * -s * d))
                : (e - 2) % 4 == 0
                ? ((a = d + 4 * s * d), (r = d))
                : (e - 3) % 4 == 0 && ((a = -d), (r = 3 * d + 4 * d * s)),
                o && (a = -a),
                p || ((i = a), (a = 0));
              var g = `rotateX(${p ? 0 : -t}deg) rotateY(${
                p ? t : 0
              }deg) translate3d(${a}px, ${i}px, ${r}px)`;
              if (
                (f <= 1 &&
                  -1 < f &&
                  ((h = 90 * e + 90 * f), o && (h = 90 * -e - 90 * f)),
                x.transform(g),
                c.slideShadows)
              ) {
                let e = p
                    ? x.find(".swiper-slide-shadow-left")
                    : x.find(".swiper-slide-shadow-top"),
                  t = p
                    ? x.find(".swiper-slide-shadow-right")
                    : x.find(".swiper-slide-shadow-bottom");
                0 === e.length &&
                  ((e = O(
                    `<div class="swiper-slide-shadow-${
                      p ? "left" : "top"
                    }"></div>`
                  )),
                  x.append(e)),
                  0 === t.length &&
                    ((t = O(
                      `<div class="swiper-slide-shadow-${
                        p ? "right" : "bottom"
                      }"></div>`
                    )),
                    x.append(t)),
                  e.length && (e[0].style.opacity = Math.max(-f, 0)),
                  t.length && (t[0].style.opacity = Math.max(f, 0));
              }
            }
            t.css({
              "-webkit-transform-origin": `50% 50% -${d / 2}px`,
              "transform-origin": `50% 50% -${d / 2}px`,
            }),
              c.shadow &&
                (p
                  ? m.transform(
                      `translate3d(0px, ${s / 2 + c.shadowOffset}px, ${-s /
                        2}px) rotateX(90deg) rotateZ(0deg) scale(${
                        c.shadowScale
                      })`
                    )
                  : ((v = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90)),
                    (n =
                      1.5 -
                      (Math.sin((2 * v * Math.PI) / 360) / 2 +
                        Math.cos((2 * v * Math.PI) / 360) / 2)),
                    (r = c.shadowScale),
                    (v = c.shadowScale / n),
                    (n = c.shadowOffset),
                    m.transform(
                      `scale3d(${r}, 1, ${v}) translate3d(0px, ${a / 2 +
                        n}px, ${-a / 2 / v}px) rotateX(-90deg)`
                    )));
            var v = i.isSafari || i.isWebView ? -d / 2 : 0;
            t.transform(
              `translate3d(0px,0,${v}px) rotateX(${
                w.isHorizontal() ? 0 : h
              }deg) rotateY(${w.isHorizontal() ? -h : 0}deg)`
            );
          },
          setTransition: (e) => {
            const { $el: t, slides: s } = w;
            s
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e),
              w.params.cubeEffect.shadow &&
                !w.isHorizontal() &&
                t.find(".swiper-cube-shadow").transition(e);
          },
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0,
          }),
        });
    },
    function({ swiper: u, extendParams: e, on: t }) {
      e({
        flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null },
      }),
        D({
          effect: "flip",
          swiper: u,
          on: t,
          setTranslate: () => {
            const { slides: n, rtlTranslate: l } = u;
            var o = u.params.flipEffect;
            for (let r = 0; r < n.length; r += 1) {
              const c = n.eq(r);
              let s = c[0].progress;
              u.params.flipEffect.limitRotation &&
                (s = Math.max(Math.min(c[0].progress, 1), -1));
              var d = c[0].swiperSlideOffset;
              let e = -180 * s,
                t = 0,
                a = u.params.cssMode ? -d - u.translate : -d,
                i = 0;
              if (
                (u.isHorizontal()
                  ? l && (e = -e)
                  : ((i = a), (a = 0), (t = -e), (e = 0)),
                (c[0].style.zIndex = -Math.abs(Math.round(s)) + n.length),
                o.slideShadows)
              ) {
                let e = u.isHorizontal()
                    ? c.find(".swiper-slide-shadow-left")
                    : c.find(".swiper-slide-shadow-top"),
                  t = u.isHorizontal()
                    ? c.find(".swiper-slide-shadow-right")
                    : c.find(".swiper-slide-shadow-bottom");
                0 === e.length &&
                  (e = _(o, c, u.isHorizontal() ? "left" : "top")),
                  0 === t.length &&
                    (t = _(o, c, u.isHorizontal() ? "right" : "bottom")),
                  e.length && (e[0].style.opacity = Math.max(-s, 0)),
                  t.length && (t[0].style.opacity = Math.max(s, 0));
              }
              d = `translate3d(${a}px, ${i}px, 0px) rotateX(${t}deg) rotateY(${e}deg)`;
              const p = B(o, c);
              p.transform(d);
            }
          },
          setTransition: (e) => {
            var t = u.params.flipEffect["transformEl"];
            const s = t ? u.slides.find(t) : u.slides;
            s
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e),
              G({ swiper: u, duration: e, transformEl: t });
          },
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !u.params.cssMode,
          }),
        });
    },
    function({ swiper: a, extendParams: e, on: t }) {
      e({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0,
          transformEl: null,
        },
      }),
        D({
          effect: "coverflow",
          swiper: a,
          on: t,
          setTranslate: () => {
            const { width: e, height: t, slides: o, slidesSizesGrid: d } = a;
            var c = a.params.coverflowEffect,
              p = a.isHorizontal(),
              s = a.translate,
              u = p ? e / 2 - s : t / 2 - s,
              h = p ? c.rotate : -c.rotate,
              m = c.depth;
            for (let l = 0, e = o.length; l < e; l += 1) {
              const v = o.eq(l);
              var f = d[l],
                g = ((u - v[0].swiperSlideOffset - f / 2) / f) * c.modifier;
              let e = p ? h * g : 0,
                t = p ? 0 : h * g,
                s = -m * Math.abs(g),
                a = c.stretch;
              "string" == typeof a &&
                -1 !== a.indexOf("%") &&
                (a = (parseFloat(c.stretch) / 100) * f);
              let i = p ? 0 : a * g,
                r = p ? a * g : 0,
                n = 1 - (1 - c.scale) * Math.abs(g);
              Math.abs(r) < 0.001 && (r = 0),
                Math.abs(i) < 0.001 && (i = 0),
                Math.abs(s) < 0.001 && (s = 0),
                Math.abs(e) < 0.001 && (e = 0),
                Math.abs(t) < 0.001 && (t = 0),
                Math.abs(n) < 0.001 && (n = 0);
              f = `translate3d(${r}px,${i}px,${s}px)  rotateX(${t}deg) rotateY(${e}deg) scale(${n})`;
              const x = B(c, v);
              if (
                (x.transform(f),
                (v[0].style.zIndex = 1 - Math.abs(Math.round(g))),
                c.slideShadows)
              ) {
                let e = p
                    ? v.find(".swiper-slide-shadow-left")
                    : v.find(".swiper-slide-shadow-top"),
                  t = p
                    ? v.find(".swiper-slide-shadow-right")
                    : v.find(".swiper-slide-shadow-bottom");
                0 === e.length && (e = _(c, v, p ? "left" : "top")),
                  0 === t.length && (t = _(c, v, p ? "right" : "bottom")),
                  e.length && (e[0].style.opacity = 0 < g ? g : 0),
                  t.length && (t[0].style.opacity = 0 < -g ? -g : 0);
              }
            }
          },
          setTransition: (e) => {
            var t = a.params.coverflowEffect["transformEl"];
            const s = t ? a.slides.find(t) : a.slides;
            s.transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e);
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0 }),
        });
    },
    function({ swiper: v, extendParams: e, on: t }) {
      e({
        creativeEffect: {
          transformEl: null,
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
        },
      }),
        D({
          effect: "creative",
          swiper: v,
          on: t,
          setTranslate: () => {
            const { slides: i, $wrapperEl: e, slidesSizesGrid: t } = v;
            var r = v.params.creativeEffect;
            const n = r["progressMultiplier"];
            var s,
              l = v.params.centeredSlides;
            l &&
              ((s = t[0] / 2 - v.params.slidesOffsetBefore || 0),
              e.transform(`translateX(calc(50% - ${s}px))`));
            for (let a = 0; a < i.length; a += 1) {
              const u = i.eq(a);
              var o = u[0].progress;
              const h = Math.min(
                Math.max(u[0].progress, -r.limitProgress),
                r.limitProgress
              );
              let e = h;
              l ||
                (e = Math.min(
                  Math.max(u[0].originalProgress, -r.limitProgress),
                  r.limitProgress
                ));
              var d = u[0].swiperSlideOffset;
              const m = [v.params.cssMode ? -d - v.translate : -d, 0, 0],
                f = [0, 0, 0];
              let t = !1;
              v.isHorizontal() || ((m[1] = m[0]), (m[0] = 0));
              let s = {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                scale: 1,
                opacity: 1,
              };
              h < 0
                ? ((s = r.next), (t = !0))
                : 0 < h && ((s = r.prev), (t = !0)),
                m.forEach((e, t) => {
                  m[t] = `calc(${e}px + (${((t = s.translate[t]),
                  "string" == typeof t ? t : `${t}px`)} * ${Math.abs(h * n)}))`;
                }),
                f.forEach((e, t) => {
                  f[t] = s.rotate[t] * Math.abs(h * n);
                }),
                (u[0].style.zIndex = -Math.abs(Math.round(o)) + i.length);
              var c = m.join(", "),
                p = `rotateX(${f[0]}deg) rotateY(${f[1]}deg) rotateZ(${f[2]}deg)`,
                d =
                  e < 0
                    ? `scale(${1 + (1 - s.scale) * e * n})`
                    : `scale(${1 - (1 - s.scale) * e * n})`,
                o =
                  e < 0
                    ? 1 + (1 - s.opacity) * e * n
                    : 1 - (1 - s.opacity) * e * n,
                p = `translate3d(${c}) ${p} ${d}`;
              if ((t && s.shadow) || !t) {
                let e = u.children(".swiper-slide-shadow");
                0 === e.length && s.shadow && (e = _(r, u)),
                  e.length &&
                    ((d = r.shadowPerProgress ? h * (1 / r.limitProgress) : h),
                    (e[0].style.opacity = Math.min(
                      Math.max(Math.abs(d), 0),
                      1
                    )));
              }
              const g = B(r, u);
              g.transform(p).css({ opacity: o }),
                s.origin && g.css("transform-origin", s.origin);
            }
          },
          setTransition: (e) => {
            var t = v.params.creativeEffect["transformEl"];
            const s = t ? v.slides.find(t) : v.slides;
            s
              .transition(e)
              .find(".swiper-slide-shadow")
              .transition(e),
              G({ swiper: v, duration: e, transformEl: t, allSlides: !0 });
          },
          perspective: () => v.params.creativeEffect.perspective,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !v.params.cssMode,
          }),
        });
    },
    function({ swiper: y, extendParams: e, on: t }) {
      e({ cardsEffect: { slideShadows: !0, transformEl: null } }),
        D({
          effect: "cards",
          swiper: y,
          on: t,
          setTranslate: () => {
            const { slides: l, activeIndex: o } = y;
            var d = y.params.cardsEffect,
              { startTranslate: c, isTouched: p } = y.touchEventsData,
              u = y.translate;
            for (let n = 0; n < l.length; n += 1) {
              const w = l.eq(n);
              var h = w[0].progress,
                m = Math.min(Math.max(h, -4), 4);
              let e = w[0].swiperSlideOffset;
              y.params.centeredSlides &&
                !y.params.cssMode &&
                y.$wrapperEl.transform(`translateX(${y.minTranslate()}px)`),
                y.params.centeredSlides &&
                  y.params.cssMode &&
                  (e -= l[0].swiperSlideOffset);
              let t = y.params.cssMode ? -e - y.translate : -e,
                s = 0;
              var f = -100 * Math.abs(m);
              let a = 1,
                i = -2 * m,
                r = 8 - 0.75 * Math.abs(m);
              var g =
                  (n === o || n === o - 1) &&
                  0 < m &&
                  m < 1 &&
                  (p || y.params.cssMode) &&
                  u < c,
                v =
                  (n === o || n === o + 1) &&
                  m < 0 &&
                  -1 < m &&
                  (p || y.params.cssMode) &&
                  c < u;
              (g || v) &&
                ((v = (1 - Math.abs((Math.abs(m) - 0.5) / 0.5)) ** 0.5),
                (i += -28 * m * v),
                (a += -0.5 * v),
                (r += 96 * v),
                (s = `${-25 * v * Math.abs(m)}%`)),
                (t =
                  m < 0
                    ? `calc(${t}px + (${r * Math.abs(m)}%))`
                    : 0 < m
                    ? `calc(${t}px + (-${r * Math.abs(m)}%))`
                    : `${t}px`),
                y.isHorizontal() || ((x = s), (s = t), (t = x));
              var x = m < 0 ? `${1 + (1 - a) * m}` : `${1 - (1 - a) * m}`,
                x = `
        translate3d(${t}, ${s}, ${f}px)
        rotateZ(${i}deg)
        scale(${x})
      `;
              if (d.slideShadows) {
                let e = w.find(".swiper-slide-shadow");
                0 === e.length && (e = _(d, w)),
                  e.length &&
                    (e[0].style.opacity = Math.min(
                      Math.max((Math.abs(m) - 0.5) / 0.5, 0),
                      1
                    ));
              }
              w[0].style.zIndex = -Math.abs(Math.round(h)) + l.length;
              const b = B(d, w);
              b.transform(x);
            }
          },
          setTransition: (e) => {
            var t = y.params.cardsEffect["transformEl"];
            const s = t ? y.slides.find(t) : y.slides;
            s
              .transition(e)
              .find(".swiper-slide-shadow")
              .transition(e),
              G({ swiper: y, duration: e, transformEl: t });
          },
          perspective: () => !0,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !y.params.cssMode,
          }),
        });
    },
  ];
  return A.use(j), A;
}),
  (function(e, t) {
    "function" == typeof define && define.amd
      ? define("Chartist", [], function() {
          return (e.Chartist = t());
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t())
      : (e.Chartist = t());
  })(this, function() {
    var e = { version: "0.11.4" };
    return (
      (function(e, m) {
        "use strict";
        var d = e.window,
          u = e.document;
        (m.namespaces = {
          svg: "http://www.w3.org/2000/svg",
          xmlns: "http://www.w3.org/2000/xmlns/",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          ct: "http://gionkunz.github.com/chartist-js/ct",
        }),
          (m.noop = function(e) {
            return e;
          }),
          (m.alphaNumerate = function(e) {
            return String.fromCharCode(97 + (e % 26));
          }),
          (m.extend = function(e) {
            var t, s, a;
            for (e = e || {}, t = 1; t < arguments.length; t++)
              for (var i in (s = arguments[t]))
                "object" != typeof (a = s[i]) ||
                null === a ||
                a instanceof Array
                  ? (e[i] = a)
                  : (e[i] = m.extend(e[i], a));
            return e;
          }),
          (m.replaceAll = function(e, t, s) {
            return e.replace(new RegExp(t, "g"), s);
          }),
          (m.ensureUnit = function(e, t) {
            return "number" == typeof e && (e += t), e;
          }),
          (m.quantity = function(e) {
            if ("string" != typeof e) return { value: e };
            e = /^(\d+)\s*(.*)$/g.exec(e);
            return { value: +e[1], unit: e[2] || void 0 };
          }),
          (m.querySelector = function(e) {
            return e instanceof Node ? e : u.querySelector(e);
          }),
          (m.times = function(e) {
            return Array.apply(null, new Array(e));
          }),
          (m.sum = function(e, t) {
            return e + (t || 0);
          }),
          (m.mapMultiply = function(t) {
            return function(e) {
              return e * t;
            };
          }),
          (m.mapAdd = function(t) {
            return function(e) {
              return e + t;
            };
          }),
          (m.serialMap = function(a, i) {
            var r = [],
              e = Math.max.apply(
                null,
                a.map(function(e) {
                  return e.length;
                })
              );
            return (
              m.times(e).forEach(function(e, t) {
                var s = a.map(function(e) {
                  return e[t];
                });
                r[t] = i.apply(null, s);
              }),
              r
            );
          }),
          (m.roundWithPrecision = function(e, t) {
            t = Math.pow(10, t || m.precision);
            return Math.round(e * t) / t;
          }),
          (m.precision = 8),
          (m.escapingMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;",
          }),
          (m.serialize = function(e) {
            return null == e
              ? e
              : ("number" == typeof e
                  ? (e = "" + e)
                  : "object" == typeof e && (e = JSON.stringify({ data: e })),
                Object.keys(m.escapingMap).reduce(function(e, t) {
                  return m.replaceAll(e, t, m.escapingMap[t]);
                }, e));
          }),
          (m.deserialize = function(e) {
            if ("string" != typeof e) return e;
            e = Object.keys(m.escapingMap).reduce(function(e, t) {
              return m.replaceAll(e, m.escapingMap[t], t);
            }, e);
            try {
              e = void 0 !== (e = JSON.parse(e)).data ? e.data : e;
            } catch (e) {}
            return e;
          }),
          (m.createSvg = function(t, e, s, a) {
            return (
              (e = e || "100%"),
              (s = s || "100%"),
              Array.prototype.slice
                .call(t.querySelectorAll("svg"))
                .filter(function(e) {
                  return e.getAttributeNS(m.namespaces.xmlns, "ct");
                })
                .forEach(function(e) {
                  t.removeChild(e);
                }),
              ((a = new m.Svg("svg")
                .attr({ width: e, height: s })
                .addClass(a))._node.style.width = e),
              (a._node.style.height = s),
              t.appendChild(a._node),
              a
            );
          }),
          (m.normalizeData = function(e, t, s) {
            var a = { raw: e, normalized: {} };
            return (
              (a.normalized.series = m.getDataArray(
                { series: e.series || [] },
                t,
                s
              )),
              (s = a.normalized.series.every(function(e) {
                return e instanceof Array;
              })
                ? Math.max.apply(
                    null,
                    a.normalized.series.map(function(e) {
                      return e.length;
                    })
                  )
                : a.normalized.series.length),
              (a.normalized.labels = (e.labels || []).slice()),
              Array.prototype.push.apply(
                a.normalized.labels,
                m
                  .times(Math.max(0, s - a.normalized.labels.length))
                  .map(function() {
                    return "";
                  })
              ),
              t && m.reverseData(a.normalized),
              a
            );
          }),
          (m.safeHasProperty = function(e, t) {
            return null !== e && "object" == typeof e && e.hasOwnProperty(t);
          }),
          (m.isDataHoleValue = function(e) {
            return null == e || ("number" == typeof e && isNaN(e));
          }),
          (m.reverseData = function(e) {
            e.labels.reverse(), e.series.reverse();
            for (var t = 0; t < e.series.length; t++)
              "object" == typeof e.series[t] && void 0 !== e.series[t].data
                ? e.series[t].data.reverse()
                : e.series[t] instanceof Array && e.series[t].reverse();
          }),
          (m.getDataArray = function(e, t, a) {
            return e.series.map(function e(t) {
              if (m.safeHasProperty(t, "value")) return e(t.value);
              if (m.safeHasProperty(t, "data")) return e(t.data);
              if (t instanceof Array) return t.map(e);
              if (!m.isDataHoleValue(t)) {
                if (a) {
                  var s = {};
                  return (
                    "string" == typeof a
                      ? (s[a] = m.getNumberOrUndefined(t))
                      : (s.y = m.getNumberOrUndefined(t)),
                    (s.x = t.hasOwnProperty("x")
                      ? m.getNumberOrUndefined(t.x)
                      : s.x),
                    (s.y = t.hasOwnProperty("y")
                      ? m.getNumberOrUndefined(t.y)
                      : s.y),
                    s
                  );
                }
                return m.getNumberOrUndefined(t);
              }
            });
          }),
          (m.normalizePadding = function(e, t) {
            return (
              (t = t || 0),
              "number" == typeof e
                ? { top: e, right: e, bottom: e, left: e }
                : {
                    top: "number" == typeof e.top ? e.top : t,
                    right: "number" == typeof e.right ? e.right : t,
                    bottom: "number" == typeof e.bottom ? e.bottom : t,
                    left: "number" == typeof e.left ? e.left : t,
                  }
            );
          }),
          (m.getMetaData = function(e, t) {
            t = (e.data || e)[t];
            return t ? t.meta : void 0;
          }),
          (m.orderOfMagnitude = function(e) {
            return Math.floor(Math.log(Math.abs(e)) / Math.LN10);
          }),
          (m.projectLength = function(e, t, s) {
            return (t / s.range) * e;
          }),
          (m.getAvailableHeight = function(e, t) {
            return Math.max(
              (m.quantity(t.height).value || e.height()) -
                (t.chartPadding.top + t.chartPadding.bottom) -
                t.axisX.offset,
              0
            );
          }),
          (m.getHighLow = function(e, t, i) {
            var r = {
                high:
                  void 0 ===
                  (t = m.extend({}, t, i ? t["axis" + i.toUpperCase()] : {}))
                    .high
                    ? -Number.MAX_VALUE
                    : +t.high,
                low: void 0 === t.low ? Number.MAX_VALUE : +t.low,
              },
              n = void 0 === t.high,
              l = void 0 === t.low;
            return (
              (n || l) &&
                (function e(t) {
                  if (void 0 !== t)
                    if (t instanceof Array)
                      for (var s = 0; s < t.length; s++) e(t[s]);
                    else {
                      var a = i ? +t[i] : +t;
                      n && a > r.high && (r.high = a),
                        l && a < r.low && (r.low = a);
                    }
                })(e),
              (!t.referenceValue && 0 !== t.referenceValue) ||
                ((r.high = Math.max(t.referenceValue, r.high)),
                (r.low = Math.min(t.referenceValue, r.low))),
              r.high <= r.low &&
                (0 === r.low
                  ? (r.high = 1)
                  : r.low < 0
                  ? (r.high = 0)
                  : (0 < r.high || (r.high = 1), (r.low = 0))),
              r
            );
          }),
          (m.isNumeric = function(e) {
            return null !== e && isFinite(e);
          }),
          (m.isFalseyButZero = function(e) {
            return !e && 0 !== e;
          }),
          (m.getNumberOrUndefined = function(e) {
            return m.isNumeric(e) ? +e : void 0;
          }),
          (m.isMultiValue = function(e) {
            return "object" == typeof e && ("x" in e || "y" in e);
          }),
          (m.getMultiValue = function(e, t) {
            return m.isMultiValue(e)
              ? m.getNumberOrUndefined(e[t || "y"])
              : m.getNumberOrUndefined(e);
          }),
          (m.rho = function(e) {
            if (1 === e) return e;
            function t(e) {
              return e * e + 1;
            }
            var s,
              a = 2,
              i = 2;
            if (e % 2 == 0) return 2;
            for (
              ;
              (a = t(a) % e),
                (i = t(t(i)) % e),
                1 ===
                  (s = (function e(t, s) {
                    return t % s == 0 ? s : e(s, t % s);
                  })(Math.abs(a - i), e));

            );
            return s;
          }),
          (m.getBounds = function(e, t, s, a) {
            var i,
              r,
              n = 0,
              l = { high: t.high, low: t.low };
            (l.valueRange = l.high - l.low),
              (l.oom = m.orderOfMagnitude(l.valueRange)),
              (l.step = Math.pow(10, l.oom)),
              (l.min = Math.floor(l.low / l.step) * l.step),
              (l.max = Math.ceil(l.high / l.step) * l.step),
              (l.range = l.max - l.min),
              (l.numberOfSteps = Math.round(l.range / l.step));
            var o = m.projectLength(e, l.step, l) < s,
              t = a ? m.rho(l.range) : 0;
            if (a && m.projectLength(e, 1, l) >= s) l.step = 1;
            else if (a && t < l.step && m.projectLength(e, t, l) >= s)
              l.step = t;
            else
              for (;;) {
                if (o && m.projectLength(e, l.step, l) <= s) l.step *= 2;
                else {
                  if (o || !(m.projectLength(e, l.step / 2, l) >= s)) break;
                  if (((l.step /= 2), a && l.step % 1 != 0)) {
                    l.step *= 2;
                    break;
                  }
                }
                if (1e3 < n++)
                  throw new Error(
                    "Exceeded maximum number of iterations while optimizing scale step!"
                  );
              }
            var d = 2221e-19;
            function c(e, t) {
              return e === (e += t) && (e *= 1 + (0 < t ? d : -d)), e;
            }
            for (
              l.step = Math.max(l.step, d), i = l.min, r = l.max;
              i + l.step <= l.low;

            )
              i = c(i, l.step);
            for (; r - l.step >= l.high; ) r = c(r, -l.step);
            (l.min = i), (l.max = r), (l.range = l.max - l.min);
            for (var p = [], u = l.min; u <= l.max; u = c(u, l.step)) {
              var h = m.roundWithPrecision(u);
              h !== p[p.length - 1] && p.push(h);
            }
            return (l.values = p), l;
          }),
          (m.polarToCartesian = function(e, t, s, a) {
            a = ((a - 90) * Math.PI) / 180;
            return { x: e + s * Math.cos(a), y: t + s * Math.sin(a) };
          }),
          (m.createChartRect = function(e, t, s) {
            var a = !(!t.axisX && !t.axisY),
              i = a ? t.axisY.offset : 0,
              r = a ? t.axisX.offset : 0,
              n = e.width() || m.quantity(t.width).value || 0,
              l = e.height() || m.quantity(t.height).value || 0,
              e = m.normalizePadding(t.chartPadding, s),
              n = Math.max(n, i + e.left + e.right),
              l = Math.max(l, r + e.top + e.bottom),
              s = {
                padding: e,
                width: function() {
                  return this.x2 - this.x1;
                },
                height: function() {
                  return this.y1 - this.y2;
                },
              };
            return (
              a
                ? ("start" === t.axisX.position
                    ? ((s.y2 = e.top + r),
                      (s.y1 = Math.max(l - e.bottom, s.y2 + 1)))
                    : ((s.y2 = e.top),
                      (s.y1 = Math.max(l - e.bottom - r, s.y2 + 1))),
                  "start" === t.axisY.position
                    ? ((s.x1 = e.left + i),
                      (s.x2 = Math.max(n - e.right, s.x1 + 1)))
                    : ((s.x1 = e.left),
                      (s.x2 = Math.max(n - e.right - i, s.x1 + 1))))
                : ((s.x1 = e.left),
                  (s.x2 = Math.max(n - e.right, s.x1 + 1)),
                  (s.y2 = e.top),
                  (s.y1 = Math.max(l - e.bottom, s.y2 + 1))),
              s
            );
          }),
          (m.createGrid = function(e, t, s, a, i, r, n, l) {
            var o = {};
            (o[s.units.pos + "1"] = e),
              (o[s.units.pos + "2"] = e),
              (o[s.counterUnits.pos + "1"] = a),
              (o[s.counterUnits.pos + "2"] = a + i);
            n = r.elem("line", o, n.join(" "));
            l.emit(
              "draw",
              m.extend(
                { type: "grid", axis: s, index: t, group: r, element: n },
                o
              )
            );
          }),
          (m.createGridBackground = function(e, t, s, a) {
            s = e.elem(
              "rect",
              { x: t.x1, y: t.y2, width: t.width(), height: t.height() },
              s,
              !0
            );
            a.emit("draw", { type: "gridBackground", group: e, element: s });
          }),
          (m.createLabel = function(e, t, s, a, i, r, n, l, o, d, c) {
            var p = {};
            (p[i.units.pos] = e + n[i.units.pos]),
              (p[i.counterUnits.pos] = n[i.counterUnits.pos]),
              (p[i.units.len] = t),
              (p[i.counterUnits.len] = Math.max(0, r - 10)),
              (o = d
                ? (((d = u.createElement("span")).className = o.join(" ")),
                  d.setAttribute("xmlns", m.namespaces.xhtml),
                  (d.innerText = a[s]),
                  (d.style[i.units.len] = Math.round(p[i.units.len]) + "px"),
                  (d.style[i.counterUnits.len] =
                    Math.round(p[i.counterUnits.len]) + "px"),
                  l.foreignObject(
                    d,
                    m.extend({ style: "overflow: visible;" }, p)
                  ))
                : l.elem("text", p, o.join(" ")).text(a[s])),
              c.emit(
                "draw",
                m.extend(
                  {
                    type: "label",
                    axis: i,
                    index: s,
                    group: l,
                    element: o,
                    text: a[s],
                  },
                  p
                )
              );
          }),
          (m.getSeriesOption = function(e, t, s) {
            if (e.name && t.series && t.series[e.name]) {
              e = t.series[e.name];
              return (e.hasOwnProperty(s) ? e : t)[s];
            }
            return t[s];
          }),
          (m.optionsProvider = function(e, s, a) {
            var i,
              r,
              n = m.extend({}, e),
              t = [];
            function l(e) {
              var t = i;
              if (((i = m.extend({}, n)), s))
                for (r = 0; r < s.length; r++)
                  d.matchMedia(s[r][0]).matches && (i = m.extend(i, s[r][1]));
              a &&
                e &&
                a.emit("optionsChanged", {
                  previousOptions: t,
                  currentOptions: i,
                });
            }
            if (!d.matchMedia)
              throw "window.matchMedia not found! Make sure you're using a polyfill.";
            if (s)
              for (r = 0; r < s.length; r++) {
                var o = d.matchMedia(s[r][0]);
                o.addListener(l), t.push(o);
              }
            return (
              l(),
              {
                removeMediaQueryListeners: function() {
                  t.forEach(function(e) {
                    e.removeListener(l);
                  });
                },
                getCurrentOptions: function() {
                  return m.extend({}, i);
                },
              }
            );
          }),
          (m.splitIntoSegments = function(e, t, s) {
            s = m.extend({}, { increasingX: !1, fillHoles: !1 }, s);
            for (var a = [], i = !0, r = 0; r < e.length; r += 2)
              void 0 === m.getMultiValue(t[r / 2].value)
                ? s.fillHoles || (i = !0)
                : ((i = s.increasingX && 2 <= r && e[r] <= e[r - 2] ? !0 : i) &&
                    (a.push({ pathCoordinates: [], valueData: [] }), (i = !1)),
                  a[a.length - 1].pathCoordinates.push(e[r], e[r + 1]),
                  a[a.length - 1].valueData.push(t[r / 2]));
            return a;
          });
      })(this || global, e),
      (function(f) {
        "use strict";
        (f.Interpolation = {}),
          (f.Interpolation.none = function(o) {
            return (
              (o = f.extend({}, { fillHoles: !1 }, o)),
              function(e, t) {
                for (
                  var s = new f.Svg.Path(), a = !0, i = 0;
                  i < e.length;
                  i += 2
                ) {
                  var r = e[i],
                    n = e[i + 1],
                    l = t[i / 2];
                  void 0 !== f.getMultiValue(l.value)
                    ? (a ? s.move(r, n, !1, l) : s.line(r, n, !1, l), (a = !1))
                    : o.fillHoles || (a = !0);
                }
                return s;
              }
            );
          }),
          (f.Interpolation.simple = function(p) {
            p = f.extend({}, { divisor: 2, fillHoles: !1 }, p);
            var u = 1 / Math.max(1, p.divisor);
            return function(e, t) {
              for (
                var s, a, i, r = new f.Svg.Path(), n = 0;
                n < e.length;
                n += 2
              ) {
                var l = e[n],
                  o = e[n + 1],
                  d = (l - s) * u,
                  c = t[n / 2];
                void 0 !== c.value
                  ? (void 0 === i
                      ? r.move(l, o, !1, c)
                      : r.curve(s + d, a, l - d, o, l, o, !1, c),
                    (s = l),
                    (a = o),
                    (i = c))
                  : p.fillHoles || (s = l = i = void 0);
              }
              return r;
            };
          }),
          (f.Interpolation.cardinal = function(d) {
            d = f.extend({}, { tension: 1, fillHoles: !1 }, d);
            var c = Math.min(1, Math.max(0, d.tension)),
              p = 1 - c;
            return function t(e, s) {
              var a = f.splitIntoSegments(e, s, { fillHoles: d.fillHoles });
              if (a.length) {
                if (1 < a.length) {
                  var i = [];
                  return (
                    a.forEach(function(e) {
                      i.push(t(e.pathCoordinates, e.valueData));
                    }),
                    f.Svg.Path.join(i)
                  );
                }
                if (
                  ((e = a[0].pathCoordinates),
                  (s = a[0].valueData),
                  e.length <= 4)
                )
                  return f.Interpolation.none()(e, s);
                for (
                  var r = new f.Svg.Path().move(e[0], e[1], !1, s[0]),
                    n = 0,
                    l = e.length;
                  n < l - 2;
                  n += 2
                ) {
                  var o = [
                    { x: +e[n - 2], y: +e[n - 1] },
                    { x: +e[n], y: +e[n + 1] },
                    { x: +e[n + 2], y: +e[n + 3] },
                    { x: +e[n + 4], y: +e[n + 5] },
                  ];
                  l - 4 === n
                    ? (o[3] = o[2])
                    : n || (o[0] = { x: +e[n], y: +e[n + 1] }),
                    r.curve(
                      (c * (-o[0].x + 6 * o[1].x + o[2].x)) / 6 + p * o[2].x,
                      (c * (-o[0].y + 6 * o[1].y + o[2].y)) / 6 + p * o[2].y,
                      (c * (o[1].x + 6 * o[2].x - o[3].x)) / 6 + p * o[2].x,
                      (c * (o[1].y + 6 * o[2].y - o[3].y)) / 6 + p * o[2].y,
                      o[2].x,
                      o[2].y,
                      !1,
                      s[(n + 2) / 2]
                    );
                }
                return r;
              }
              return f.Interpolation.none()([]);
            };
          }),
          (f.Interpolation.monotoneCubic = function(m) {
            return (
              (m = f.extend({}, { fillHoles: !1 }, m)),
              function t(e, s) {
                var a = f.splitIntoSegments(e, s, {
                  fillHoles: m.fillHoles,
                  increasingX: !0,
                });
                if (a.length) {
                  if (1 < a.length) {
                    var i = [];
                    return (
                      a.forEach(function(e) {
                        i.push(t(e.pathCoordinates, e.valueData));
                      }),
                      f.Svg.Path.join(i)
                    );
                  }
                  if (
                    ((e = a[0].pathCoordinates),
                    (s = a[0].valueData),
                    e.length <= 4)
                  )
                    return f.Interpolation.none()(e, s);
                  for (
                    var r,
                      n = [],
                      l = [],
                      o = e.length / 2,
                      d = [],
                      c = [],
                      p = [],
                      u = [],
                      h = 0;
                    h < o;
                    h++
                  )
                    (n[h] = e[2 * h]), (l[h] = e[2 * h + 1]);
                  for (h = 0; h < o - 1; h++)
                    (p[h] = l[h + 1] - l[h]),
                      (u[h] = n[h + 1] - n[h]),
                      (c[h] = p[h] / u[h]);
                  for (d[0] = c[0], d[o - 1] = c[o - 2], h = 1; h < o - 1; h++)
                    0 === c[h] || 0 === c[h - 1] || 0 < c[h - 1] != 0 < c[h]
                      ? (d[h] = 0)
                      : ((d[h] =
                          (3 * (u[h - 1] + u[h])) /
                          ((2 * u[h] + u[h - 1]) / c[h - 1] +
                            (u[h] + 2 * u[h - 1]) / c[h])),
                        isFinite(d[h]) || (d[h] = 0));
                  for (
                    r = new f.Svg.Path().move(n[0], l[0], !1, s[0]), h = 0;
                    h < o - 1;
                    h++
                  )
                    r.curve(
                      n[h] + u[h] / 3,
                      l[h] + (d[h] * u[h]) / 3,
                      n[h + 1] - u[h] / 3,
                      l[h + 1] - (d[h + 1] * u[h]) / 3,
                      n[h + 1],
                      l[h + 1],
                      !1,
                      s[h + 1]
                    );
                  return r;
                }
                return f.Interpolation.none()([]);
              }
            );
          }),
          (f.Interpolation.step = function(c) {
            return (
              (c = f.extend({}, { postpone: !0, fillHoles: !1 }, c)),
              function(e, t) {
                for (
                  var s, a, i, r = new f.Svg.Path(), n = 0;
                  n < e.length;
                  n += 2
                ) {
                  var l = e[n],
                    o = e[n + 1],
                    d = t[n / 2];
                  void 0 !== d.value
                    ? (void 0 === i
                        ? r.move(l, o, !1, d)
                        : (c.postpone
                            ? r.line(l, a, !1, i)
                            : r.line(s, o, !1, d),
                          r.line(l, o, !1, d)),
                      (s = l),
                      (a = o),
                      (i = d))
                    : c.fillHoles || (s = a = i = void 0);
                }
                return r;
              }
            );
          });
      })((this || global, e)),
      (function() {
        "use strict";
        e.EventEmitter = function() {
          var a = [];
          return {
            addEventHandler: function(e, t) {
              (a[e] = a[e] || []), a[e].push(t);
            },
            removeEventHandler: function(e, t) {
              a[e] &&
                (t
                  ? (a[e].splice(a[e].indexOf(t), 1),
                    0 === a[e].length && delete a[e])
                  : delete a[e]);
            },
            emit: function(t, s) {
              a[t] &&
                a[t].forEach(function(e) {
                  e(s);
                }),
                a["*"] &&
                  a["*"].forEach(function(e) {
                    e(t, s);
                  });
            },
          };
        };
      })(this || global),
      (function(a) {
        "use strict";
        a.Class = {
          extend: function(e, t) {
            var t = t || this.prototype || a.Class,
              s = Object.create(t);
            return (
              a.Class.cloneDefinitions(s, e),
              ((e = function() {
                var e = s.constructor || function() {},
                  t = this === a ? Object.create(s) : this;
                return e.apply(t, Array.prototype.slice.call(arguments, 0)), t;
              }).prototype = s),
              (e.super = t),
              (e.extend = this.extend),
              e
            );
          },
          cloneDefinitions: function() {
            var e = (function(e) {
                var t = [];
                if (e.length) for (var s = 0; s < e.length; s++) t.push(e[s]);
                return t;
              })(arguments),
              s = e[0];
            return (
              e.splice(1, e.length - 1).forEach(function(t) {
                Object.getOwnPropertyNames(t).forEach(function(e) {
                  delete s[e],
                    Object.defineProperty(
                      s,
                      e,
                      Object.getOwnPropertyDescriptor(t, e)
                    );
                });
              }),
              s
            );
          },
        };
      })((this || global, e)),
      (function(e, r) {
        "use strict";
        var n = e.window;
        r.Base = r.Class.extend({
          constructor: function(e, t, s, a, i) {
            (this.container = r.querySelector(e)),
              (this.data = t || {}),
              (this.data.labels = this.data.labels || []),
              (this.data.series = this.data.series || []),
              (this.defaultOptions = s),
              (this.options = a),
              (this.responsiveOptions = i),
              (this.eventEmitter = r.EventEmitter()),
              (this.supportsForeignObject = r.Svg.isSupported("Extensibility")),
              (this.supportsAnimations = r.Svg.isSupported(
                "AnimationEventsAttribute"
              )),
              (this.resizeListener = function() {
                this.update();
              }.bind(this)),
              this.container &&
                (this.container.__chartist__ &&
                  this.container.__chartist__.detach(),
                (this.container.__chartist__ = this)),
              (this.initializeTimeoutId = setTimeout(
                function() {
                  n.addEventListener("resize", this.resizeListener),
                    (this.optionsProvider = r.optionsProvider(
                      this.options,
                      this.responsiveOptions,
                      this.eventEmitter
                    )),
                    this.eventEmitter.addEventHandler(
                      "optionsChanged",
                      function() {
                        this.update();
                      }.bind(this)
                    ),
                    this.options.plugins &&
                      this.options.plugins.forEach(
                        function(e) {
                          e instanceof Array ? e[0](this, e[1]) : e(this);
                        }.bind(this)
                      ),
                    this.eventEmitter.emit("data", {
                      type: "initial",
                      data: this.data,
                    }),
                    this.createChart(this.optionsProvider.getCurrentOptions()),
                    (this.initializeTimeoutId = void 0);
                }.bind(this),
                0
              ));
          },
          optionsProvider: void 0,
          container: void 0,
          svg: void 0,
          eventEmitter: void 0,
          createChart: function() {
            throw new Error("Base chart type can't be instantiated!");
          },
          update: function(e, t, s) {
            return (
              e &&
                ((this.data = e || {}),
                (this.data.labels = this.data.labels || []),
                (this.data.series = this.data.series || []),
                this.eventEmitter.emit("data", {
                  type: "update",
                  data: this.data,
                })),
              t &&
                ((this.options = r.extend(
                  {},
                  s ? this.options : this.defaultOptions,
                  t
                )),
                this.initializeTimeoutId ||
                  (this.optionsProvider.removeMediaQueryListeners(),
                  (this.optionsProvider = r.optionsProvider(
                    this.options,
                    this.responsiveOptions,
                    this.eventEmitter
                  )))),
              this.initializeTimeoutId ||
                this.createChart(this.optionsProvider.getCurrentOptions()),
              this
            );
          },
          detach: function() {
            return (
              this.initializeTimeoutId
                ? n.clearTimeout(this.initializeTimeoutId)
                : (n.removeEventListener("resize", this.resizeListener),
                  this.optionsProvider.removeMediaQueryListeners()),
              this
            );
          },
          on: function(e, t) {
            return this.eventEmitter.addEventHandler(e, t), this;
          },
          off: function(e, t) {
            return this.eventEmitter.removeEventHandler(e, t), this;
          },
          version: r.version,
          supportsForeignObject: !1,
        });
      })(this || global, e),
      (function(e, o) {
        "use strict";
        var r = e.document;
        (o.Svg = o.Class.extend({
          constructor: function(e, t, s, a, i) {
            e instanceof Element
              ? (this._node = e)
              : ((this._node = r.createElementNS(o.namespaces.svg, e)),
                "svg" === e && this.attr({ "xmlns:ct": o.namespaces.ct })),
              t && this.attr(t),
              s && this.addClass(s),
              a &&
                (i && a._node.firstChild
                  ? a._node.insertBefore(this._node, a._node.firstChild)
                  : a._node.appendChild(this._node));
          },
          attr: function(s, e) {
            return "string" == typeof s
              ? e
                ? this._node.getAttributeNS(e, s)
                : this._node.getAttribute(s)
              : (Object.keys(s).forEach(
                  function(e) {
                    var t;
                    void 0 !== s[e] &&
                      (-1 !== e.indexOf(":")
                        ? ((t = e.split(":")),
                          this._node.setAttributeNS(
                            o.namespaces[t[0]],
                            e,
                            s[e]
                          ))
                        : this._node.setAttribute(e, s[e]));
                  }.bind(this)
                ),
                this);
          },
          elem: function(e, t, s, a) {
            return new o.Svg(e, t, s, this, a);
          },
          parent: function() {
            return this._node.parentNode instanceof SVGElement
              ? new o.Svg(this._node.parentNode)
              : null;
          },
          root: function() {
            for (var e = this._node; "svg" !== e.nodeName; ) e = e.parentNode;
            return new o.Svg(e);
          },
          querySelector: function(e) {
            return (e = this._node.querySelector(e)) ? new o.Svg(e) : null;
          },
          querySelectorAll: function(e) {
            return (e = this._node.querySelectorAll(e)).length
              ? new o.Svg.List(e)
              : null;
          },
          getNode: function() {
            return this._node;
          },
          foreignObject: function(e, t, s, a) {
            var i;
            return (
              "string" == typeof e &&
                (((i = r.createElement("div")).innerHTML = e),
                (e = i.firstChild)),
              e.setAttribute("xmlns", o.namespaces.xmlns),
              (a = this.elem("foreignObject", t, s, a))._node.appendChild(e),
              a
            );
          },
          text: function(e) {
            return this._node.appendChild(r.createTextNode(e)), this;
          },
          empty: function() {
            for (; this._node.firstChild; )
              this._node.removeChild(this._node.firstChild);
            return this;
          },
          remove: function() {
            return this._node.parentNode.removeChild(this._node), this.parent();
          },
          replace: function(e) {
            return this._node.parentNode.replaceChild(e._node, this._node), e;
          },
          append: function(e, t) {
            return (
              t && this._node.firstChild
                ? this._node.insertBefore(e._node, this._node.firstChild)
                : this._node.appendChild(e._node),
              this
            );
          },
          classes: function() {
            return this._node.getAttribute("class")
              ? this._node
                  .getAttribute("class")
                  .trim()
                  .split(/\s+/)
              : [];
          },
          addClass: function(e) {
            return (
              this._node.setAttribute(
                "class",
                this.classes(this._node)
                  .concat(e.trim().split(/\s+/))
                  .filter(function(e, t, s) {
                    return s.indexOf(e) === t;
                  })
                  .join(" ")
              ),
              this
            );
          },
          removeClass: function(e) {
            var t = e.trim().split(/\s+/);
            return (
              this._node.setAttribute(
                "class",
                this.classes(this._node)
                  .filter(function(e) {
                    return -1 === t.indexOf(e);
                  })
                  .join(" ")
              ),
              this
            );
          },
          removeAllClasses: function() {
            return this._node.setAttribute("class", ""), this;
          },
          height: function() {
            return this._node.getBoundingClientRect().height;
          },
          width: function() {
            return this._node.getBoundingClientRect().width;
          },
          animate: function(e, s, l) {
            return (
              void 0 === s && (s = !0),
              Object.keys(e).forEach(
                function(n) {
                  function t(t, e) {
                    var s,
                      a,
                      i,
                      r = {};
                    t.easing &&
                      ((i =
                        t.easing instanceof Array
                          ? t.easing
                          : o.Svg.Easing[t.easing]),
                      delete t.easing),
                      (t.begin = o.ensureUnit(t.begin, "ms")),
                      (t.dur = o.ensureUnit(t.dur, "ms")),
                      i &&
                        ((t.calcMode = "spline"),
                        (t.keySplines = i.join(" ")),
                        (t.keyTimes = "0;1")),
                      e &&
                        ((t.fill = "freeze"),
                        (r[n] = t.from),
                        this.attr(r),
                        (a = o.quantity(t.begin || 0).value),
                        (t.begin = "indefinite")),
                      (s = this.elem(
                        "animate",
                        o.extend({ attributeName: n }, t)
                      )),
                      e &&
                        setTimeout(
                          function() {
                            try {
                              s._node.beginElement();
                            } catch (e) {
                              (r[n] = t.to), this.attr(r), s.remove();
                            }
                          }.bind(this),
                          a
                        ),
                      l &&
                        s._node.addEventListener(
                          "beginEvent",
                          function() {
                            l.emit("animationBegin", {
                              element: this,
                              animate: s._node,
                              params: t,
                            });
                          }.bind(this)
                        ),
                      s._node.addEventListener(
                        "endEvent",
                        function() {
                          l &&
                            l.emit("animationEnd", {
                              element: this,
                              animate: s._node,
                              params: t,
                            }),
                            e && ((r[n] = t.to), this.attr(r), s.remove());
                        }.bind(this)
                      );
                  }
                  e[n] instanceof Array
                    ? e[n].forEach(
                        function(e) {
                          t.bind(this)(e, !1);
                        }.bind(this)
                      )
                    : t.bind(this)(e[n], s);
                }.bind(this)
              ),
              this
            );
          },
        })),
          (o.Svg.isSupported = function(e) {
            return r.implementation.hasFeature(
              "http://www.w3.org/TR/SVG11/feature#" + e,
              "1.1"
            );
          });
        (o.Svg.Easing = {
          easeInSine: [0.47, 0, 0.745, 0.715],
          easeOutSine: [0.39, 0.575, 0.565, 1],
          easeInOutSine: [0.445, 0.05, 0.55, 0.95],
          easeInQuad: [0.55, 0.085, 0.68, 0.53],
          easeOutQuad: [0.25, 0.46, 0.45, 0.94],
          easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
          easeInCubic: [0.55, 0.055, 0.675, 0.19],
          easeOutCubic: [0.215, 0.61, 0.355, 1],
          easeInOutCubic: [0.645, 0.045, 0.355, 1],
          easeInQuart: [0.895, 0.03, 0.685, 0.22],
          easeOutQuart: [0.165, 0.84, 0.44, 1],
          easeInOutQuart: [0.77, 0, 0.175, 1],
          easeInQuint: [0.755, 0.05, 0.855, 0.06],
          easeOutQuint: [0.23, 1, 0.32, 1],
          easeInOutQuint: [0.86, 0, 0.07, 1],
          easeInExpo: [0.95, 0.05, 0.795, 0.035],
          easeOutExpo: [0.19, 1, 0.22, 1],
          easeInOutExpo: [1, 0, 0, 1],
          easeInCirc: [0.6, 0.04, 0.98, 0.335],
          easeOutCirc: [0.075, 0.82, 0.165, 1],
          easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
          easeInBack: [0.6, -0.28, 0.735, 0.045],
          easeOutBack: [0.175, 0.885, 0.32, 1.275],
          easeInOutBack: [0.68, -0.55, 0.265, 1.55],
        }),
          (o.Svg.List = o.Class.extend({
            constructor: function(e) {
              var a = this;
              this.svgElements = [];
              for (var t = 0; t < e.length; t++)
                this.svgElements.push(new o.Svg(e[t]));
              Object.keys(o.Svg.prototype)
                .filter(function(e) {
                  return (
                    -1 ===
                    [
                      "constructor",
                      "parent",
                      "querySelector",
                      "querySelectorAll",
                      "replace",
                      "append",
                      "classes",
                      "height",
                      "width",
                    ].indexOf(e)
                  );
                })
                .forEach(function(s) {
                  a[s] = function() {
                    var t = Array.prototype.slice.call(arguments, 0);
                    return (
                      a.svgElements.forEach(function(e) {
                        o.Svg.prototype[s].apply(e, t);
                      }),
                      a
                    );
                  };
                });
            },
          }));
      })(this || global, e),
      (function(l) {
        "use strict";
        var n = {
            m: ["x", "y"],
            l: ["x", "y"],
            c: ["x1", "y1", "x2", "y2", "x", "y"],
            a: ["rx", "ry", "xAr", "lAf", "sf", "x", "y"],
          },
          s = { accuracy: 3 };
        function d(e, t, s, a, i, r) {
          r = l.extend(
            { command: i ? e.toLowerCase() : e.toUpperCase() },
            t,
            r ? { data: r } : {}
          );
          s.splice(a, 0, r);
        }
        function e(i, r) {
          i.forEach(function(s, a) {
            n[s.command.toLowerCase()].forEach(function(e, t) {
              r(s, e, a, t, i);
            });
          });
        }
        (l.Svg.Path = l.Class.extend({
          constructor: function(e, t) {
            (this.pathElements = []),
              (this.pos = 0),
              (this.close = e),
              (this.options = l.extend({}, s, t));
          },
          position: function(e) {
            return void 0 !== e
              ? ((this.pos = Math.max(
                  0,
                  Math.min(this.pathElements.length, e)
                )),
                this)
              : this.pos;
          },
          remove: function(e) {
            return this.pathElements.splice(this.pos, e), this;
          },
          move: function(e, t, s, a) {
            return (
              d("M", { x: +e, y: +t }, this.pathElements, this.pos++, s, a),
              this
            );
          },
          line: function(e, t, s, a) {
            return (
              d("L", { x: +e, y: +t }, this.pathElements, this.pos++, s, a),
              this
            );
          },
          curve: function(e, t, s, a, i, r, n, l) {
            return (
              d(
                "C",
                { x1: +e, y1: +t, x2: +s, y2: +a, x: +i, y: +r },
                this.pathElements,
                this.pos++,
                n,
                l
              ),
              this
            );
          },
          arc: function(e, t, s, a, i, r, n, l, o) {
            return (
              d(
                "A",
                { rx: +e, ry: +t, xAr: +s, lAf: +a, sf: +i, x: +r, y: +n },
                this.pathElements,
                this.pos++,
                l,
                o
              ),
              this
            );
          },
          scale: function(s, a) {
            return (
              e(this.pathElements, function(e, t) {
                e[t] *= "x" === t[0] ? s : a;
              }),
              this
            );
          },
          translate: function(s, a) {
            return (
              e(this.pathElements, function(e, t) {
                e[t] += "x" === t[0] ? s : a;
              }),
              this
            );
          },
          transform: function(r) {
            return (
              e(this.pathElements, function(e, t, s, a, i) {
                i = r(e, t, s, a, i);
                (!i && 0 !== i) || (e[t] = i);
              }),
              this
            );
          },
          parse: function(e) {
            var t = e
              .replace(/([A-Za-z])([0-9])/g, "$1 $2")
              .replace(/([0-9])([A-Za-z])/g, "$1 $2")
              .split(/[\s,]+/)
              .reduce(function(e, t) {
                return (
                  t.match(/[A-Za-z]/) && e.push([]), e[e.length - 1].push(t), e
                );
              }, []);
            return (
              "Z" === t[t.length - 1][0].toUpperCase() && t.pop(),
              (e = t.map(function(a) {
                var e = a.shift(),
                  t = n[e.toLowerCase()];
                return l.extend(
                  { command: e },
                  t.reduce(function(e, t, s) {
                    return (e[t] = +a[s]), e;
                  }, {})
                );
              })),
              (t = [this.pos, 0]),
              Array.prototype.push.apply(t, e),
              Array.prototype.splice.apply(this.pathElements, t),
              (this.pos += e.length),
              this
            );
          },
          stringify: function() {
            var a = Math.pow(10, this.options.accuracy);
            return (
              this.pathElements.reduce(
                function(e, t) {
                  var s = n[t.command.toLowerCase()].map(
                    function(e) {
                      return this.options.accuracy
                        ? Math.round(t[e] * a) / a
                        : t[e];
                    }.bind(this)
                  );
                  return e + t.command + s.join(",");
                }.bind(this),
                ""
              ) + (this.close ? "Z" : "")
            );
          },
          clone: function(e) {
            return (
              ((e = new l.Svg.Path(e || this.close)).pos = this.pos),
              (e.pathElements = this.pathElements.slice().map(function(e) {
                return l.extend({}, e);
              })),
              (e.options = l.extend({}, this.options)),
              e
            );
          },
          splitByCommand: function(t) {
            var s = [new l.Svg.Path()];
            return (
              this.pathElements.forEach(function(e) {
                e.command === t.toUpperCase() &&
                  0 !== s[s.length - 1].pathElements.length &&
                  s.push(new l.Svg.Path()),
                  s[s.length - 1].pathElements.push(e);
              }),
              s
            );
          },
        })),
          (l.Svg.Path.elementDescriptions = n),
          (l.Svg.Path.join = function(e, t, s) {
            for (var a = new l.Svg.Path(t, s), i = 0; i < e.length; i++)
              for (var r = e[i], n = 0; n < r.pathElements.length; n++)
                a.pathElements.push(r.pathElements[n]);
            return a;
          });
      })((this || global, e)),
      (function(e, u) {
        "use strict";
        e.window, e.document;
        var i = {
          x: {
            pos: "x",
            len: "width",
            dir: "horizontal",
            rectStart: "x1",
            rectEnd: "x2",
            rectOffset: "y2",
          },
          y: {
            pos: "y",
            len: "height",
            dir: "vertical",
            rectStart: "y2",
            rectEnd: "y1",
            rectOffset: "x1",
          },
        };
        (u.Axis = u.Class.extend({
          constructor: function(e, t, s, a) {
            (this.units = e),
              (this.counterUnits = e === i.x ? i.y : i.x),
              (this.chartRect = t),
              (this.axisLength = t[e.rectEnd] - t[e.rectStart]),
              (this.gridOffset = t[e.rectOffset]),
              (this.ticks = s),
              (this.options = a);
          },
          createGridAndLabels: function(i, r, n, l, o) {
            var d = l["axis" + this.units.pos.toUpperCase()],
              c = this.ticks.map(this.projectValue.bind(this)),
              p = this.ticks.map(d.labelInterpolationFnc);
            c.forEach(
              function(e, t) {
                var s = { x: 0, y: 0 },
                  a = c[t + 1]
                    ? c[t + 1] - e
                    : Math.max(this.axisLength - e, 30);
                (u.isFalseyButZero(p[t]) && "" !== p[t]) ||
                  ("x" === this.units.pos
                    ? ((e = this.chartRect.x1 + e),
                      (s.x = l.axisX.labelOffset.x),
                      "start" === l.axisX.position
                        ? (s.y =
                            this.chartRect.padding.top +
                            l.axisX.labelOffset.y +
                            (n ? 5 : 20))
                        : (s.y =
                            this.chartRect.y1 +
                            l.axisX.labelOffset.y +
                            (n ? 5 : 20)))
                    : ((e = this.chartRect.y1 - e),
                      (s.y = l.axisY.labelOffset.y - (n ? a : 0)),
                      "start" === l.axisY.position
                        ? (s.x = n
                            ? this.chartRect.padding.left +
                              l.axisY.labelOffset.x
                            : this.chartRect.x1 - 10)
                        : (s.x =
                            this.chartRect.x2 + l.axisY.labelOffset.x + 10)),
                  d.showGrid &&
                    u.createGrid(
                      e,
                      t,
                      this,
                      this.gridOffset,
                      this.chartRect[this.counterUnits.len](),
                      i,
                      [l.classNames.grid, l.classNames[this.units.dir]],
                      o
                    ),
                  d.showLabel &&
                    u.createLabel(
                      e,
                      a,
                      t,
                      p,
                      this,
                      d.offset,
                      s,
                      r,
                      [
                        l.classNames.label,
                        l.classNames[this.units.dir],
                        "start" === d.position
                          ? l.classNames[d.position]
                          : l.classNames.end,
                      ],
                      n,
                      o
                    ));
              }.bind(this)
            );
          },
          projectValue: function(e, t, s) {
            throw new Error("Base axis can't be instantiated!");
          },
        })),
          (u.Axis.units = i);
      })(this || global, e),
      (function(e, i) {
        "use strict";
        e.window, e.document;
        i.AutoScaleAxis = i.Axis.extend({
          constructor: function(e, t, s, a) {
            (t = a.highLow || i.getHighLow(t, a, e.pos)),
              (this.bounds = i.getBounds(
                s[e.rectEnd] - s[e.rectStart],
                t,
                a.scaleMinSpace || 20,
                a.onlyInteger
              )),
              (this.range = { min: this.bounds.min, max: this.bounds.max }),
              i.AutoScaleAxis.super.constructor.call(
                this,
                e,
                s,
                this.bounds.values,
                a
              );
          },
          projectValue: function(e) {
            return (
              (this.axisLength *
                (+i.getMultiValue(e, this.units.pos) - this.bounds.min)) /
              this.bounds.range
            );
          },
        });
      })(this || global, e),
      (function(e, r) {
        "use strict";
        e.window, e.document;
        r.FixedScaleAxis = r.Axis.extend({
          constructor: function(e, t, s, a) {
            var i = a.highLow || r.getHighLow(t, a, e.pos);
            (this.divisor = a.divisor || 1),
              (this.ticks =
                a.ticks ||
                r.times(this.divisor).map(
                  function(e, t) {
                    return i.low + ((i.high - i.low) / this.divisor) * t;
                  }.bind(this)
                )),
              this.ticks.sort(function(e, t) {
                return e - t;
              }),
              (this.range = { min: i.low, max: i.high }),
              r.FixedScaleAxis.super.constructor.call(
                this,
                e,
                s,
                this.ticks,
                a
              ),
              (this.stepLength = this.axisLength / this.divisor);
          },
          projectValue: function(e) {
            return (
              (this.axisLength *
                (+r.getMultiValue(e, this.units.pos) - this.range.min)) /
              (this.range.max - this.range.min)
            );
          },
        });
      })(this || global, e),
      (function(e, i) {
        "use strict";
        e.window, e.document;
        i.StepAxis = i.Axis.extend({
          constructor: function(e, t, s, a) {
            i.StepAxis.super.constructor.call(this, e, s, a.ticks, a),
              (a = Math.max(1, a.ticks.length - (a.stretch ? 1 : 0))),
              (this.stepLength = this.axisLength / a);
          },
          projectValue: function(e, t) {
            return this.stepLength * t;
          },
        });
      })(this || global, e),
      (function(e, f) {
        "use strict";
        e.window, e.document;
        var i = {
          axisX: {
            offset: 30,
            position: "end",
            labelOffset: { x: 0, y: 0 },
            showLabel: !0,
            showGrid: !0,
            labelInterpolationFnc: f.noop,
            type: void 0,
          },
          axisY: {
            offset: 40,
            position: "start",
            labelOffset: { x: 0, y: 0 },
            showLabel: !0,
            showGrid: !0,
            labelInterpolationFnc: f.noop,
            type: void 0,
            scaleMinSpace: 20,
            onlyInteger: !1,
          },
          width: void 0,
          height: void 0,
          showLine: !0,
          showPoint: !0,
          showArea: !1,
          areaBase: 0,
          lineSmooth: !0,
          showGridBackground: !1,
          low: void 0,
          high: void 0,
          chartPadding: { top: 15, right: 15, bottom: 5, left: 10 },
          fullWidth: !1,
          reverseData: !1,
          classNames: {
            chart: "ct-chart-line",
            label: "ct-label",
            labelGroup: "ct-labels",
            series: "ct-series",
            line: "ct-line",
            point: "ct-point",
            area: "ct-area",
            grid: "ct-grid",
            gridGroup: "ct-grids",
            gridBackground: "ct-grid-background",
            vertical: "ct-vertical",
            horizontal: "ct-horizontal",
            start: "ct-start",
            end: "ct-end",
          },
        };
        f.Line = f.Base.extend({
          constructor: function(e, t, s, a) {
            f.Line.super.constructor.call(this, e, t, i, f.extend({}, i, s), a);
          },
          createChart: function(d) {
            var c = f.normalizeData(this.data, d.reverseData, !0);
            this.svg = f.createSvg(
              this.container,
              d.width,
              d.height,
              d.classNames.chart
            );
            var e = this.svg.elem("g").addClass(d.classNames.gridGroup),
              p = this.svg.elem("g"),
              t = this.svg.elem("g").addClass(d.classNames.labelGroup),
              u = f.createChartRect(this.svg, d, i.padding),
              h =
                void 0 === d.axisX.type
                  ? new f.StepAxis(
                      f.Axis.units.x,
                      c.normalized.series,
                      u,
                      f.extend({}, d.axisX, {
                        ticks: c.normalized.labels,
                        stretch: d.fullWidth,
                      })
                    )
                  : d.axisX.type.call(
                      f,
                      f.Axis.units.x,
                      c.normalized.series,
                      u,
                      d.axisX
                    ),
              m =
                void 0 === d.axisY.type
                  ? new f.AutoScaleAxis(
                      f.Axis.units.y,
                      c.normalized.series,
                      u,
                      f.extend({}, d.axisY, {
                        high: (f.isNumeric(d.high) ? d : d.axisY).high,
                        low: (f.isNumeric(d.low) ? d : d.axisY).low,
                      })
                    )
                  : d.axisY.type.call(
                      f,
                      f.Axis.units.y,
                      c.normalized.series,
                      u,
                      d.axisY
                    );
            h.createGridAndLabels(
              e,
              t,
              this.supportsForeignObject,
              d,
              this.eventEmitter
            ),
              m.createGridAndLabels(
                e,
                t,
                this.supportsForeignObject,
                d,
                this.eventEmitter
              ),
              d.showGridBackground &&
                f.createGridBackground(
                  e,
                  u,
                  d.classNames.gridBackground,
                  this.eventEmitter
                ),
              c.raw.series.forEach(
                function(a, i) {
                  var s = p.elem("g");
                  s.attr({
                    "ct:series-name": a.name,
                    "ct:meta": f.serialize(a.meta),
                  }),
                    s.addClass(
                      [
                        d.classNames.series,
                        a.className ||
                          d.classNames.series + "-" + f.alphaNumerate(i),
                      ].join(" ")
                    );
                  var r = [],
                    n = [];
                  c.normalized.series[i].forEach(
                    function(e, t) {
                      var s = {
                        x: u.x1 + h.projectValue(e, t, c.normalized.series[i]),
                        y: u.y1 - m.projectValue(e, t, c.normalized.series[i]),
                      };
                      r.push(s.x, s.y),
                        n.push({
                          value: e,
                          valueIndex: t,
                          meta: f.getMetaData(a, t),
                        });
                    }.bind(this)
                  );
                  var e,
                    l,
                    t = {
                      lineSmooth: f.getSeriesOption(a, d, "lineSmooth"),
                      showPoint: f.getSeriesOption(a, d, "showPoint"),
                      showLine: f.getSeriesOption(a, d, "showLine"),
                      showArea: f.getSeriesOption(a, d, "showArea"),
                      areaBase: f.getSeriesOption(a, d, "areaBase"),
                    },
                    o = ("function" == typeof t.lineSmooth
                      ? t.lineSmooth
                      : t.lineSmooth
                      ? f.Interpolation.monotoneCubic()
                      : f.Interpolation.none())(r, n);
                  t.showPoint &&
                    o.pathElements.forEach(
                      function(e) {
                        var t = s
                          .elem(
                            "line",
                            { x1: e.x, y1: e.y, x2: e.x + 0.01, y2: e.y },
                            d.classNames.point
                          )
                          .attr({
                            "ct:value": [e.data.value.x, e.data.value.y]
                              .filter(f.isNumeric)
                              .join(","),
                            "ct:meta": f.serialize(e.data.meta),
                          });
                        this.eventEmitter.emit("draw", {
                          type: "point",
                          value: e.data.value,
                          index: e.data.valueIndex,
                          meta: e.data.meta,
                          series: a,
                          seriesIndex: i,
                          axisX: h,
                          axisY: m,
                          group: s,
                          element: t,
                          x: e.x,
                          y: e.y,
                        });
                      }.bind(this)
                    ),
                    t.showLine &&
                      ((e = s.elem(
                        "path",
                        { d: o.stringify() },
                        d.classNames.line,
                        !0
                      )),
                      this.eventEmitter.emit("draw", {
                        type: "line",
                        values: c.normalized.series[i],
                        path: o.clone(),
                        chartRect: u,
                        index: i,
                        series: a,
                        seriesIndex: i,
                        seriesMeta: a.meta,
                        axisX: h,
                        axisY: m,
                        group: s,
                        element: e,
                      })),
                    t.showArea &&
                      m.range &&
                      ((t = Math.max(
                        Math.min(t.areaBase, m.range.max),
                        m.range.min
                      )),
                      (l = u.y1 - m.projectValue(t)),
                      o
                        .splitByCommand("M")
                        .filter(function(e) {
                          return 1 < e.pathElements.length;
                        })
                        .map(function(e) {
                          var t = e.pathElements[0],
                            s = e.pathElements[e.pathElements.length - 1];
                          return e
                            .clone(!0)
                            .position(0)
                            .remove(1)
                            .move(t.x, l)
                            .line(t.x, t.y)
                            .position(e.pathElements.length + 1)
                            .line(s.x, l);
                        })
                        .forEach(
                          function(e) {
                            var t = s.elem(
                              "path",
                              { d: e.stringify() },
                              d.classNames.area,
                              !0
                            );
                            this.eventEmitter.emit("draw", {
                              type: "area",
                              values: c.normalized.series[i],
                              path: e.clone(),
                              series: a,
                              seriesIndex: i,
                              axisX: h,
                              axisY: m,
                              chartRect: u,
                              index: i,
                              group: s,
                              element: t,
                            });
                          }.bind(this)
                        ));
                }.bind(this)
              ),
              this.eventEmitter.emit("created", {
                bounds: m.bounds,
                chartRect: u,
                axisX: h,
                axisY: m,
                svg: this.svg,
                options: d,
              });
          },
        });
      })(this || global, e),
      (function(e, w) {
        "use strict";
        e.window, e.document;
        var r = {
          axisX: {
            offset: 30,
            position: "end",
            labelOffset: { x: 0, y: 0 },
            showLabel: !0,
            showGrid: !0,
            labelInterpolationFnc: w.noop,
            scaleMinSpace: 30,
            onlyInteger: !1,
          },
          axisY: {
            offset: 40,
            position: "start",
            labelOffset: { x: 0, y: 0 },
            showLabel: !0,
            showGrid: !0,
            labelInterpolationFnc: w.noop,
            scaleMinSpace: 20,
            onlyInteger: !1,
          },
          width: void 0,
          height: void 0,
          high: void 0,
          low: void 0,
          referenceValue: 0,
          chartPadding: { top: 15, right: 15, bottom: 5, left: 10 },
          seriesBarDistance: 15,
          stackBars: !1,
          stackMode: "accumulate",
          horizontalBars: !1,
          distributeSeries: !1,
          reverseData: !1,
          showGridBackground: !1,
          classNames: {
            chart: "ct-chart-bar",
            horizontalBars: "ct-horizontal-bars",
            label: "ct-label",
            labelGroup: "ct-labels",
            series: "ct-series",
            bar: "ct-bar",
            grid: "ct-grid",
            gridGroup: "ct-grids",
            gridBackground: "ct-grid-background",
            vertical: "ct-vertical",
            horizontal: "ct-horizontal",
            start: "ct-start",
            end: "ct-end",
          },
        };
        w.Bar = w.Base.extend({
          constructor: function(e, t, s, a) {
            w.Bar.super.constructor.call(this, e, t, r, w.extend({}, r, s), a);
          },
          createChart: function(c) {
            var p;
            c.distributeSeries
              ? ((p = w.normalizeData(
                  this.data,
                  c.reverseData,
                  c.horizontalBars ? "x" : "y"
                )).normalized.series = p.normalized.series.map(function(e) {
                  return [e];
                }))
              : (p = w.normalizeData(
                  this.data,
                  c.reverseData,
                  c.horizontalBars ? "x" : "y"
                )),
              (this.svg = w.createSvg(
                this.container,
                c.width,
                c.height,
                c.classNames.chart +
                  (c.horizontalBars ? " " + c.classNames.horizontalBars : "")
              ));
            var e,
              t = this.svg.elem("g").addClass(c.classNames.gridGroup),
              s = this.svg.elem("g"),
              a = this.svg.elem("g").addClass(c.classNames.labelGroup);
            ((e =
              c.stackBars && 0 !== p.normalized.series.length
                ? ((i = w.serialMap(p.normalized.series, function() {
                    return Array.prototype.slice
                      .call(arguments)
                      .map(function(e) {
                        return e;
                      })
                      .reduce(
                        function(e, t) {
                          return {
                            x: e.x + (t && t.x) || 0,
                            y: e.y + (t && t.y) || 0,
                          };
                        },
                        { x: 0, y: 0 }
                      );
                  })),
                  w.getHighLow([i], c, c.horizontalBars ? "x" : "y"))
                : w.getHighLow(
                    p.normalized.series,
                    c,
                    c.horizontalBars ? "x" : "y"
                  )).high = +c.high || (0 === c.high ? 0 : e.high)),
              (e.low = +c.low || (0 === c.low ? 0 : e.low));
            var u,
              h,
              m,
              f,
              g = w.createChartRect(this.svg, c, r.padding),
              i =
                c.distributeSeries && c.stackBars
                  ? p.normalized.labels.slice(0, 1)
                  : p.normalized.labels;
            c.horizontalBars
              ? ((u = m =
                  void 0 === c.axisX.type
                    ? new w.AutoScaleAxis(
                        w.Axis.units.x,
                        p.normalized.series,
                        g,
                        w.extend({}, c.axisX, { highLow: e, referenceValue: 0 })
                      )
                    : c.axisX.type.call(
                        w,
                        w.Axis.units.x,
                        p.normalized.series,
                        g,
                        w.extend({}, c.axisX, { highLow: e, referenceValue: 0 })
                      )),
                (h = f =
                  void 0 === c.axisY.type
                    ? new w.StepAxis(w.Axis.units.y, p.normalized.series, g, {
                        ticks: i,
                      })
                    : c.axisY.type.call(
                        w,
                        w.Axis.units.y,
                        p.normalized.series,
                        g,
                        c.axisY
                      )))
              : ((h = m =
                  void 0 === c.axisX.type
                    ? new w.StepAxis(w.Axis.units.x, p.normalized.series, g, {
                        ticks: i,
                      })
                    : c.axisX.type.call(
                        w,
                        w.Axis.units.x,
                        p.normalized.series,
                        g,
                        c.axisX
                      )),
                (u = f =
                  void 0 === c.axisY.type
                    ? new w.AutoScaleAxis(
                        w.Axis.units.y,
                        p.normalized.series,
                        g,
                        w.extend({}, c.axisY, { highLow: e, referenceValue: 0 })
                      )
                    : c.axisY.type.call(
                        w,
                        w.Axis.units.y,
                        p.normalized.series,
                        g,
                        w.extend({}, c.axisY, { highLow: e, referenceValue: 0 })
                      )));
            var v = c.horizontalBars
                ? g.x1 + u.projectValue(0)
                : g.y1 - u.projectValue(0),
              x = [];
            h.createGridAndLabels(
              t,
              a,
              this.supportsForeignObject,
              c,
              this.eventEmitter
            ),
              u.createGridAndLabels(
                t,
                a,
                this.supportsForeignObject,
                c,
                this.eventEmitter
              ),
              c.showGridBackground &&
                w.createGridBackground(
                  t,
                  g,
                  c.classNames.gridBackground,
                  this.eventEmitter
                ),
              p.raw.series.forEach(
                function(r, n) {
                  var l = n - (p.raw.series.length - 1) / 2,
                    o =
                      c.distributeSeries && !c.stackBars
                        ? h.axisLength / p.normalized.series.length / 2
                        : c.distributeSeries && c.stackBars
                        ? h.axisLength / 2
                        : h.axisLength / p.normalized.series[n].length / 2,
                    d = s.elem("g");
                  d.attr({
                    "ct:series-name": r.name,
                    "ct:meta": w.serialize(r.meta),
                  }),
                    d.addClass(
                      [
                        c.classNames.series,
                        r.className ||
                          c.classNames.series + "-" + w.alphaNumerate(n),
                      ].join(" ")
                    ),
                    p.normalized.series[n].forEach(
                      function(e, t) {
                        var s,
                          a =
                            c.distributeSeries && !c.stackBars
                              ? n
                              : c.distributeSeries && c.stackBars
                              ? 0
                              : t,
                          i = c.horizontalBars
                            ? {
                                x:
                                  g.x1 +
                                  u.projectValue(
                                    e && e.x ? e.x : 0,
                                    t,
                                    p.normalized.series[n]
                                  ),
                                y:
                                  g.y1 -
                                  h.projectValue(
                                    e && e.y ? e.y : 0,
                                    a,
                                    p.normalized.series[n]
                                  ),
                              }
                            : {
                                x:
                                  g.x1 +
                                  h.projectValue(
                                    e && e.x ? e.x : 0,
                                    a,
                                    p.normalized.series[n]
                                  ),
                                y:
                                  g.y1 -
                                  u.projectValue(
                                    e && e.y ? e.y : 0,
                                    t,
                                    p.normalized.series[n]
                                  ),
                              };
                        h instanceof w.StepAxis &&
                          (h.options.stretch ||
                            (i[h.units.pos] += o * (c.horizontalBars ? -1 : 1)),
                          (i[h.units.pos] +=
                            c.stackBars || c.distributeSeries
                              ? 0
                              : l *
                                c.seriesBarDistance *
                                (c.horizontalBars ? -1 : 1))),
                          (s = x[t] || v),
                          (x[t] = s - (v - i[h.counterUnits.pos])),
                          void 0 !== e &&
                            (((a = {})[h.units.pos + "1"] = i[h.units.pos]),
                            (a[h.units.pos + "2"] = i[h.units.pos]),
                            !c.stackBars ||
                            ("accumulate" !== c.stackMode && c.stackMode)
                              ? ((a[h.counterUnits.pos + "1"] = v),
                                (a[h.counterUnits.pos + "2"] =
                                  i[h.counterUnits.pos]))
                              : ((a[h.counterUnits.pos + "1"] = s),
                                (a[h.counterUnits.pos + "2"] = x[t])),
                            (a.x1 = Math.min(Math.max(a.x1, g.x1), g.x2)),
                            (a.x2 = Math.min(Math.max(a.x2, g.x1), g.x2)),
                            (a.y1 = Math.min(Math.max(a.y1, g.y2), g.y1)),
                            (a.y2 = Math.min(Math.max(a.y2, g.y2), g.y1)),
                            (i = w.getMetaData(r, t)),
                            (s = d.elem("line", a, c.classNames.bar).attr({
                              "ct:value": [e.x, e.y]
                                .filter(w.isNumeric)
                                .join(","),
                              "ct:meta": w.serialize(i),
                            })),
                            this.eventEmitter.emit(
                              "draw",
                              w.extend(
                                {
                                  type: "bar",
                                  value: e,
                                  index: t,
                                  meta: i,
                                  series: r,
                                  seriesIndex: n,
                                  axisX: m,
                                  axisY: f,
                                  chartRect: g,
                                  group: d,
                                  element: s,
                                },
                                a
                              )
                            ));
                      }.bind(this)
                    );
                }.bind(this)
              ),
              this.eventEmitter.emit("created", {
                bounds: u.bounds,
                chartRect: g,
                axisX: m,
                axisY: f,
                svg: this.svg,
                options: c,
              });
          },
        });
      })(this || global, e),
      (function(e, x) {
        "use strict";
        e.window, e.document;
        var i = {
          width: void 0,
          height: void 0,
          chartPadding: 5,
          classNames: {
            chartPie: "ct-chart-pie",
            chartDonut: "ct-chart-donut",
            series: "ct-series",
            slicePie: "ct-slice-pie",
            sliceDonut: "ct-slice-donut",
            sliceDonutSolid: "ct-slice-donut-solid",
            label: "ct-label",
          },
          startAngle: 0,
          total: void 0,
          donut: !1,
          donutSolid: !1,
          donutWidth: 60,
          showLabel: !0,
          labelOffset: 0,
          labelPosition: "inside",
          labelInterpolationFnc: x.noop,
          labelDirection: "neutral",
          reverseData: !1,
          ignoreEmptyValues: !1,
        };
        function w(e, t, s) {
          e = t.x > e.x;
          return (e && "explode" === s) || (!e && "implode" === s)
            ? "start"
            : (e && "implode" === s) || (!e && "explode" === s)
            ? "end"
            : "middle";
        }
        x.Pie = x.Base.extend({
          constructor: function(e, t, s, a) {
            x.Pie.super.constructor.call(this, e, t, i, x.extend({}, i, s), a);
          },
          createChart: function(l) {
            var o,
              d,
              c = x.normalizeData(this.data),
              p = [],
              u = l.startAngle;
            this.svg = x.createSvg(
              this.container,
              l.width,
              l.height,
              l.donut ? l.classNames.chartDonut : l.classNames.chartPie
            );
            var e = x.createChartRect(this.svg, l, i.padding),
              h = Math.min(e.width() / 2, e.height() / 2),
              m =
                l.total ||
                c.normalized.series.reduce(function(e, t) {
                  return e + t;
                }, 0),
              f = x.quantity(l.donutWidth);
            "%" === f.unit && (f.value *= h / 100),
              (h -= l.donut && !l.donutSolid ? f.value / 2 : 0),
              (d =
                "outside" === l.labelPosition || (l.donut && !l.donutSolid)
                  ? h
                  : "center" === l.labelPosition
                  ? 0
                  : l.donutSolid
                  ? h - f.value / 2
                  : h / 2),
              (d += l.labelOffset);
            var g = { x: e.x1 + e.width() / 2, y: e.y2 + e.height() / 2 },
              v =
                1 ===
                c.raw.series.filter(function(e) {
                  return e.hasOwnProperty("value") ? 0 !== e.value : 0 !== e;
                }).length;
            c.raw.series.forEach(
              function(e, t) {
                p[t] = this.svg.elem("g", null, null);
              }.bind(this)
            ),
              l.showLabel && (o = this.svg.elem("g", null, null)),
              c.raw.series.forEach(
                function(e, t) {
                  var s, a, i, r, n;
                  (0 === c.normalized.series[t] && l.ignoreEmptyValues) ||
                    (p[t].attr({ "ct:series-name": e.name }),
                    p[t].addClass(
                      [
                        l.classNames.series,
                        e.className ||
                          l.classNames.series + "-" + x.alphaNumerate(t),
                      ].join(" ")
                    ),
                    359.99 <=
                      (s = 0 < m ? u + (c.normalized.series[t] / m) * 360 : 0) -
                        (r = Math.max(0, u - (0 === t || v ? 0 : 0.2))) &&
                      (s = r + 359.99),
                    (a = x.polarToCartesian(g.x, g.y, h, r)),
                    (i = x.polarToCartesian(g.x, g.y, h, s)),
                    (r = new x.Svg.Path(!l.donut || l.donutSolid)
                      .move(i.x, i.y)
                      .arc(h, h, 0, 180 < s - u, 0, a.x, a.y)),
                    l.donut
                      ? l.donutSolid &&
                        ((i = h - f.value),
                        (a = x.polarToCartesian(
                          g.x,
                          g.y,
                          i,
                          u - (0 === t || v ? 0 : 0.2)
                        )),
                        (n = x.polarToCartesian(g.x, g.y, i, s)),
                        r.line(a.x, a.y),
                        r.arc(i, i, 0, 180 < s - u, 1, n.x, n.y))
                      : r.line(g.x, g.y),
                    (n = l.classNames.slicePie),
                    l.donut &&
                      ((n = l.classNames.sliceDonut),
                      l.donutSolid && (n = l.classNames.sliceDonutSolid)),
                    (n = p[t].elem("path", { d: r.stringify() }, n)).attr({
                      "ct:value": c.normalized.series[t],
                      "ct:meta": x.serialize(e.meta),
                    }),
                    l.donut &&
                      !l.donutSolid &&
                      (n._node.style.strokeWidth = f.value + "px"),
                    this.eventEmitter.emit("draw", {
                      type: "slice",
                      value: c.normalized.series[t],
                      totalDataSum: m,
                      index: t,
                      meta: e.meta,
                      series: e,
                      group: p[t],
                      element: n,
                      path: r.clone(),
                      center: g,
                      radius: h,
                      startAngle: u,
                      endAngle: s,
                    }),
                    l.showLabel &&
                      ((e =
                        1 === c.raw.series.length
                          ? { x: g.x, y: g.y }
                          : x.polarToCartesian(g.x, g.y, d, u + (s - u) / 2)),
                      (n = (c.normalized.labels &&
                      !x.isFalseyButZero(c.normalized.labels[t])
                        ? c.normalized.labels
                        : c.normalized.series)[t]),
                      (!(r = l.labelInterpolationFnc(n, t)) && 0 !== r) ||
                        ((n = o
                          .elem(
                            "text",
                            {
                              dx: e.x,
                              dy: e.y,
                              "text-anchor": w(g, e, l.labelDirection),
                            },
                            l.classNames.label
                          )
                          .text("" + r)),
                        this.eventEmitter.emit("draw", {
                          type: "label",
                          index: t,
                          group: o,
                          element: n,
                          text: "" + r,
                          x: e.x,
                          y: e.y,
                        }))),
                    (u = s));
                }.bind(this)
              ),
              this.eventEmitter.emit("created", {
                chartRect: e,
                svg: this.svg,
                options: l,
              });
          },
          determineAnchorPosition: w,
        });
      })(this || global, e),
      e
    );
  });
