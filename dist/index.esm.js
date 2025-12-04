import ke, { memo as k, useEffect as re, useState as Pe, useRef as vr } from "react";
import { createPortal as pr } from "react-dom";
var ne = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function mr() {
  if (Se) return Y;
  Se = 1;
  var S = ke, a = Symbol.for("react.element"), v = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, b = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, s, R) {
    var h, _ = {}, T = null, g = null;
    R !== void 0 && (T = "" + R), s.key !== void 0 && (T = "" + s.key), s.ref !== void 0 && (g = s.ref);
    for (h in s) c.call(s, h) && !p.hasOwnProperty(h) && (_[h] = s[h]);
    if (m && m.defaultProps) for (h in s = m.defaultProps, s) _[h] === void 0 && (_[h] = s[h]);
    return { $$typeof: a, type: m, key: T, ref: g, props: _, _owner: b.current };
  }
  return Y.Fragment = v, Y.jsx = d, Y.jsxs = d, Y;
}
var B = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function _r() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var S = ke, a = Symbol.for("react.element"), v = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), m = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = Symbol.iterator, P = "@@iterator";
    function q(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = y && e[y] || e[P];
      return typeof r == "function" ? r : null;
    }
    var F = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++)
          n[t - 1] = arguments[t];
        Ne("error", e, n);
      }
    }
    function Ne(e, r, n) {
      {
        var t = F.ReactDebugCurrentFrame, u = t.getStackAddendum();
        u !== "" && (r += "%s", n = n.concat([u]));
        var f = n.map(function(o) {
          return String(o);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var De = !1, $e = !1, Fe = !1, Ae = !1, Ie = !1, te;
    te = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === p || Ie || e === b || e === R || e === h || Ae || e === g || De || $e || Fe || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === _ || e.$$typeof === d || e.$$typeof === m || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Le(e, r, n) {
      var t = e.displayName;
      if (t)
        return t;
      var u = r.displayName || r.name || "";
      return u !== "" ? n + "(" + u + ")" : n;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case v:
          return "Portal";
        case p:
          return "Profiler";
        case b:
          return "StrictMode";
        case R:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return ae(r) + ".Consumer";
          case d:
            var n = e;
            return ae(n._context) + ".Provider";
          case s:
            return Le(e, e.render, "ForwardRef");
          case _:
            var t = e.displayName || null;
            return t !== null ? t : N(e.type) || "Memo";
          case T: {
            var u = e, f = u._payload, o = u._init;
            try {
              return N(o(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, W = 0, ie, oe, se, ue, le, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ye() {
      {
        if (W === 0) {
          ie = console.log, oe = console.info, se = console.warn, ue = console.error, le = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Be() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ie
            }),
            info: D({}, e, {
              value: oe
            }),
            warn: D({}, e, {
              value: se
            }),
            error: D({}, e, {
              value: ue
            }),
            group: D({}, e, {
              value: le
            }),
            groupCollapsed: D({}, e, {
              value: ce
            }),
            groupEnd: D({}, e, {
              value: fe
            })
          });
        }
        W < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = F.ReactCurrentDispatcher, z;
    function M(e, r, n) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (u) {
            var t = u.stack.trim().match(/\n( *(at )?)/);
            z = t && t[1] || "";
          }
        return `
` + z + e;
      }
    }
    var G = !1, V;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Me();
    }
    function ve(e, r) {
      if (!e || G)
        return "";
      {
        var n = V.get(e);
        if (n !== void 0)
          return n;
      }
      var t;
      G = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = K.current, K.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (C) {
              t = C;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (C) {
              t = C;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            t = C;
          }
          e();
        }
      } catch (C) {
        if (C && t && typeof C.stack == "string") {
          for (var i = C.stack.split(`
`), x = t.stack.split(`
`), E = i.length - 1, j = x.length - 1; E >= 1 && j >= 0 && i[E] !== x[j]; )
            j--;
          for (; E >= 1 && j >= 0; E--, j--)
            if (i[E] !== x[j]) {
              if (E !== 1 || j !== 1)
                do
                  if (E--, j--, j < 0 || i[E] !== x[j]) {
                    var O = `
` + i[E].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, O), O;
                  }
                while (E >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        G = !1, K.current = f, Be(), Error.prepareStackTrace = u;
      }
      var I = e ? e.displayName || e.name : "", $ = I ? M(I) : "";
      return typeof e == "function" && V.set(e, $), $;
    }
    function Ve(e, r, n) {
      return ve(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ue(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case R:
          return M("Suspense");
        case h:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Ve(e.render);
          case _:
            return U(e.type, r, n);
          case T: {
            var t = e, u = t._payload, f = t._init;
            try {
              return U(f(u), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, pe = {}, me = F.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, n = U(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(n);
      } else
        me.setExtraStackFrame(null);
    }
    function Je(e, r, n, t, u) {
      {
        var f = Function.call.bind(L);
        for (var o in e)
          if (f(e, o)) {
            var i = void 0;
            try {
              if (typeof e[o] != "function") {
                var x = Error((t || "React class") + ": " + n + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              i = e[o](r, o, t, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              i = E;
            }
            i && !(i instanceof Error) && (J(u), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", n, o, typeof i), J(null)), i instanceof Error && !(i.message in pe) && (pe[i.message] = !0, J(u), w("Failed %s type: %s", n, i.message), J(null));
          }
      }
    }
    var qe = Array.isArray;
    function X(e) {
      return qe(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function ze(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function be(e) {
      if (ze(e))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), _e(e);
    }
    var he = F.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, ge;
    function Xe(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      typeof e.ref == "string" && he.current;
    }
    function Qe(e, r) {
      {
        var n = function() {
          ye || (ye = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var n = function() {
          ge || (ge = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, n, t, u, f, o) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: o,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: t
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function nr(e, r, n, t, u) {
      {
        var f, o = {}, i = null, x = null;
        n !== void 0 && (be(n), i = "" + n), He(r) && (be(r.key), i = "" + r.key), Xe(r) && (x = r.ref, Ze(r, u));
        for (f in r)
          L.call(r, f) && !Ge.hasOwnProperty(f) && (o[f] = r[f]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (f in E)
            o[f] === void 0 && (o[f] = E[f]);
        }
        if (i || x) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && Qe(o, j), x && er(o, j);
        }
        return rr(e, i, x, u, t, he.current, o);
      }
    }
    var H = F.ReactCurrentOwner, Ee = F.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, n = U(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(n);
      } else
        Ee.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Re() {
      {
        if (H.current) {
          var e = N(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var je = {};
    function ar(e) {
      {
        var r = Re();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = ar(r);
        if (je[n])
          return;
        je[n] = !0;
        var t = "";
        e && e._owner && e._owner !== H.current && (t = " It was passed a child from " + N(e._owner.type) + "."), A(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, t), A(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var n = 0; n < e.length; n++) {
            var t = e[n];
            Q(t) && we(t, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = q(e);
          if (typeof u == "function" && u !== e.entries)
            for (var f = u.call(e), o; !(o = f.next()).done; )
              Q(o.value) && we(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          n = r.propTypes;
        else
          return;
        if (n) {
          var t = N(r);
          Je(n, e.props, "prop", t, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var u = N(r);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var t = r[n];
          if (t !== "children" && t !== "key") {
            A(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var Te = {};
    function Ce(e, r, n, t, u, f) {
      {
        var o = We(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = tr();
          x ? i += x : i += Re();
          var E;
          e === null ? E = "null" : X(e) ? E = "array" : e !== void 0 && e.$$typeof === a ? (E = "<" + (N(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, i);
        }
        var j = nr(e, r, n, u, f);
        if (j == null)
          return j;
        if (o) {
          var O = r.children;
          if (O !== void 0)
            if (t)
              if (X(O)) {
                for (var I = 0; I < O.length; I++)
                  xe(O[I], e);
                Object.freeze && Object.freeze(O);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(O, e);
        }
        if (L.call(r, "key")) {
          var $ = N(e), C = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), ee = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[$ + ee]) {
            var fr = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, $, fr, $), Te[$ + ee] = !0;
          }
        }
        return e === c ? or(j) : ir(j), j;
      }
    }
    function sr(e, r, n) {
      return Ce(e, r, n, !0);
    }
    function ur(e, r, n) {
      return Ce(e, r, n, !1);
    }
    var lr = ur, cr = sr;
    B.Fragment = c, B.jsx = lr, B.jsxs = cr;
  }()), B;
}
process.env.NODE_ENV === "production" ? ne.exports = mr() : ne.exports = _r();
var l = ne.exports;
const br = k(function({
  children: a,
  variant: v = "text",
  size: c = "medium",
  active: b = !1,
  className: p = "",
  onClick: d,
  style: m = {},
  disabled: s = !1,
  type: R = "button",
  ...h
}) {
  const _ = [
    "ui-button",
    `ui-button--${v}`,
    `ui-button--${c}`,
    b && "ui-button--active",
    s && "ui-button--disabled",
    p
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      type: R,
      className: _,
      onClick: d,
      style: m,
      disabled: s,
      ...h,
      children: a
    }
  );
});
br.displayName = "Button";
const hr = k(function({
  children: a,
  className: v = "",
  style: c = {},
  elevated: b = !1,
  outlined: p = !1,
  ...d
}) {
  const m = [
    "ui-card",
    b && "ui-card--elevated",
    p && "ui-card--outlined",
    v
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsx("div", { className: m, style: c, ...d, children: a });
});
hr.displayName = "Card";
const yr = k(function({
  children: a,
  to: v,
  href: c,
  external: b = !1,
  variant: p = "default",
  className: d = "",
  ...m
}) {
  const s = [
    "ui-link",
    `ui-link--${p}`,
    d
  ].filter(Boolean).join(" "), R = c || v;
  return /* @__PURE__ */ l.jsx(
    "a",
    {
      href: R,
      className: s,
      target: b ? "_blank" : m.target,
      rel: b ? "noopener noreferrer" : m.rel,
      ...m,
      children: a
    }
  );
});
yr.displayName = "Link";
const gr = k(function({
  src: a,
  alt: v,
  className: c = "",
  style: b = {},
  baseUrl: p,
  lazy: d = !0,
  ...m
}) {
  const s = p && !a.startsWith("http") ? `${p}${a.startsWith("/") ? a : `/${a}`}` : a, R = ["ui-image", c].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsx(
    "img",
    {
      src: s,
      alt: v,
      className: R,
      style: b,
      loading: d ? "lazy" : "eager",
      ...m
    }
  );
});
gr.displayName = "Image";
const Er = k(function({
  children: a,
  className: v = "",
  style: c = {},
  variant: b = "default",
  background: p = !1,
  ...d
}) {
  const m = [
    "ui-section",
    `ui-section--${b}`,
    p && "ui-section--background",
    v
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsx("section", { className: m, style: c, ...d, children: a });
});
Er.displayName = "Section";
const Rr = k(function({
  children: a,
  className: v = "",
  style: c = {},
  size: b = "medium",
  ...p
}) {
  const d = [
    "ui-container",
    `ui-container--${b}`,
    v
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsx("div", { className: d, style: c, ...p, children: a });
});
Rr.displayName = "Container";
const jr = k(function({
  isOpen: a,
  onClose: v,
  title: c,
  children: b,
  size: p = "medium",
  closeOnBackdrop: d = !0,
  className: m = ""
}) {
  if (re(() => (a ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [a]), re(() => {
    const _ = (T) => {
      T.key === "Escape" && a && v();
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [a, v]), !a) return null;
  const s = (_) => {
    d && _.target === _.currentTarget && v();
  }, R = [
    "ui-modal",
    `ui-modal--${p}`,
    m
  ].filter(Boolean).join(" ");
  return pr(/* @__PURE__ */ l.jsx("div", { className: "ui-modal__backdrop", onClick: s, children: /* @__PURE__ */ l.jsxs("div", { className: R, children: [
    (c || d) && /* @__PURE__ */ l.jsxs("div", { className: "ui-modal__header", children: [
      c && /* @__PURE__ */ l.jsx("h2", { className: "ui-modal__title", children: c }),
      d && /* @__PURE__ */ l.jsx(
        "button",
        {
          className: "ui-modal__close",
          onClick: v,
          "aria-label": "Close modal",
          children: /* @__PURE__ */ l.jsx("span", { className: "material-icons", children: "close" })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "ui-modal__content", children: b })
  ] }) }), document.body);
});
jr.displayName = "Modal";
const wr = k(function({
  options: a,
  value: v,
  onChange: c,
  placeholder: b = "请选择...",
  disabled: p = !1,
  className: d = "",
  variant: m = "default"
}) {
  const [s, R] = Pe(!1), h = vr(null);
  re(() => {
    const y = (P) => {
      h.current && !h.current.contains(P.target) && R(!1);
    };
    return s && document.addEventListener("mousedown", y), () => {
      document.removeEventListener("mousedown", y);
    };
  }, [s]);
  const _ = a.find((y) => y.value === v), T = (y) => {
    var P;
    (P = a.find((q) => q.value === y)) != null && P.disabled || (c(y), R(!1));
  }, g = [
    "ui-dropdown",
    `ui-dropdown--${m}`,
    s && "ui-dropdown--open",
    p && "ui-dropdown--disabled",
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsxs("div", { className: g, ref: h, children: [
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        className: "ui-dropdown__trigger",
        onClick: () => !p && R(!s),
        disabled: p,
        type: "button",
        children: [
          /* @__PURE__ */ l.jsx("span", { className: "ui-dropdown__selected", children: _ ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            _.icon && /* @__PURE__ */ l.jsx("span", { className: "material-icons ui-dropdown__icon", children: _.icon }),
            _.label
          ] }) : /* @__PURE__ */ l.jsx("span", { className: "ui-dropdown__placeholder", children: b }) }),
          /* @__PURE__ */ l.jsx("span", { className: "material-icons ui-dropdown__arrow", children: s ? "expand_less" : "expand_more" })
        ]
      }
    ),
    s && /* @__PURE__ */ l.jsx("div", { className: "ui-dropdown__menu", children: a.map((y) => /* @__PURE__ */ l.jsxs(
      "button",
      {
        className: `ui-dropdown__option ${y.value === v ? "ui-dropdown__option--selected" : ""} ${y.disabled ? "ui-dropdown__option--disabled" : ""}`,
        onClick: () => T(y.value),
        disabled: y.disabled,
        type: "button",
        children: [
          y.icon && /* @__PURE__ */ l.jsx("span", { className: "material-icons ui-dropdown__option-icon", children: y.icon }),
          y.label
        ]
      },
      y.value
    )) })
  ] });
});
wr.displayName = "Dropdown";
const xr = k(function({
  tabs: a,
  defaultTab: v,
  onChange: c,
  variant: b = "default",
  className: p = ""
}) {
  var _, T;
  const [d, m] = Pe(
    v || ((_ = a[0]) == null ? void 0 : _.id) || ""
  ), s = (g) => {
    const y = a.find((P) => P.id === g);
    y && !y.disabled && (m(g), c == null || c(g));
  }, R = (T = a.find((g) => g.id === d)) == null ? void 0 : T.content, h = [
    "ui-tabs",
    `ui-tabs--${b}`,
    p
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsxs("div", { className: h, children: [
    /* @__PURE__ */ l.jsx("div", { className: "ui-tabs__header", children: a.map((g) => /* @__PURE__ */ l.jsxs(
      "button",
      {
        className: `ui-tabs__tab ${d === g.id ? "ui-tabs__tab--active" : ""} ${g.disabled ? "ui-tabs__tab--disabled" : ""}`,
        onClick: () => s(g.id),
        disabled: g.disabled,
        type: "button",
        children: [
          g.icon && /* @__PURE__ */ l.jsx("span", { className: "material-icons ui-tabs__tab-icon", children: g.icon }),
          g.label
        ]
      },
      g.id
    )) }),
    /* @__PURE__ */ l.jsx("div", { className: "ui-tabs__content", children: R })
  ] });
});
xr.displayName = "Tabs";
export {
  br as Button,
  hr as Card,
  Rr as Container,
  wr as Dropdown,
  gr as Image,
  yr as Link,
  jr as Modal,
  Er as Section,
  xr as Tabs
};
