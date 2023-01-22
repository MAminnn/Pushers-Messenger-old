! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Sweetalert2 = e() }(this, function() {
    "use strict";

    function r(t) { return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

    function a(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function c(t, e, n) { return e && o(t.prototype, e), n && o(t, n), t }

    function s() { return (s = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n, o = arguments[e]; for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]) } return t }).apply(this, arguments) }

    function u(t) { return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

    function l(t, e) { return (l = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

    function d() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (t) { return !1 } }

    function i(t, e, n) {
        return (i = d() ? Reflect.construct : function(t, e, n) {
            var o = [null];
            o.push.apply(o, e);
            o = new(Function.bind.apply(t, o));
            return n && l(o, n.prototype), o
        }).apply(null, arguments)
    }

    function p(t, e) { return !e || "object" != typeof e && "function" != typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

    function f(t, e, n) { return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) { t = function(t, e) { for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t));); return t }(t, e); if (t) { e = Object.getOwnPropertyDescriptor(t, e); return e.get ? e.get.call(n) : e.value } })(t, e, n || t) }

    function m(t) { return t.charAt(0).toUpperCase() + t.slice(1) }

    function h(e) { return Object.keys(e).map(function(t) { return e[t] }) }

    function g(t) { return Array.prototype.slice.call(t) }

    function v(t, e) { e = '"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.'), -1 === Y.indexOf(e) && (Y.push(e), W(e)) }

    function y(t) { return t && "function" == typeof t.toPromise }

    function b(t) { return y(t) ? t.toPromise() : Promise.resolve(t) }

    function w(t) { return t && Promise.resolve(t) === t }

    function C(t) { return t instanceof Element || "object" === r(t = t) && t.jquery }

    function k() { return document.body.querySelector(".".concat($.container)) }

    function A(t) { var e = k(); return e ? e.querySelector(t) : null }

    function t(t) { return A(".".concat(t)) }

    function x() { return t($.popup) }

    function n() { var t = x(); return g(t.querySelectorAll(".".concat($.icon))) }

    function B() { var t = n().filter(function(t) { return wt(t) }); return t.length ? t[0] : null }

    function P() { return t($.title) }

    function S() { return t($.content) }

    function E() { return t($.image) }

    function O() { return t($["progress-steps"]) }

    function T() { return t($["validation-message"]) }

    function L() { return A(".".concat($.actions, " .").concat($.confirm)) }

    function q() { return A(".".concat($.actions, " .").concat($.deny)) }

    function D() { return A(".".concat($.loader)) }

    function j() { return A(".".concat($.actions, " .").concat($.cancel)) }

    function I() { return t($.actions) }

    function M() { return t($.header) }

    function V() { return t($.footer) }

    function H() { return t($["timer-progress-bar"]) }

    function R() { return t($.close) }

    function N() {
        var t = g(x().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t, e) { return t = parseInt(t.getAttribute("tabindex")), (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0 }),
            e = g(x().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function(t) { return "-1" !== t.getAttribute("tabindex") });
        return function(t) { for (var e = [], n = 0; n < t.length; n++) - 1 === e.indexOf(t[n]) && e.push(t[n]); return e }(t.concat(e)).filter(function(t) { return wt(t) })
    }

    function U() { return !G() && !document.body.classList.contains($["no-backdrop"]) }

    function _(e, t) { e.textContent = "", t && (t = (new DOMParser).parseFromString(t, "text/html"), g(t.querySelector("head").childNodes).forEach(function(t) { e.appendChild(t) }), g(t.querySelector("body").childNodes).forEach(function(t) { e.appendChild(t) })) }

    function F(t, e) {
        if (e) {
            for (var n = e.split(/\s+/), o = 0; o < n.length; o++)
                if (!t.classList.contains(n[o])) return;
            return 1
        }
    }

    function z(t, e, n) {
        var o, i;
        if (i = e, g((o = t).classList).forEach(function(t) {-1 === h($).indexOf(t) && -1 === h(X).indexOf(t) && -1 === h(i.showClass).indexOf(t) && o.classList.remove(t) }), e.customClass && e.customClass[n]) {
            if ("string" != typeof e.customClass[n] && !e.customClass[n].forEach) return W("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(r(e.customClass[n]), '"'));
            vt(t, e.customClass[n])
        }
    }
    var e = "SweetAlert2:",
        W = function(t) { console.warn("".concat(e, " ").concat("object" === r(t) ? t.join(" ") : t)) },
        K = function(t) { console.error("".concat(e, " ").concat(t)) },
        Y = [],
        Z = function(t) { return "function" == typeof t ? t() : t },
        Q = Object.freeze({ cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer" }),
        J = function(t) { var e, n = {}; for (e in t) n[t[e]] = "swal2-" + t[e]; return n },
        $ = J(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "toast-column", "show", "hide", "close", "title", "header", "content", "html-container", "actions", "confirm", "deny", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
        X = J(["success", "warning", "info", "question", "error"]),
        G = function() { return document.body.classList.contains($["toast-shown"]) },
        tt = { previousBodyPadding: null };

    function et(t, e) {
        if (!e) return null;
        switch (e) {
            case "select":
            case "textarea":
            case "file":
                return bt(t, $[e]);
            case "checkbox":
                return t.querySelector(".".concat($.checkbox, " input"));
            case "radio":
                return t.querySelector(".".concat($.radio, " input:checked")) || t.querySelector(".".concat($.radio, " input:first-child"));
            case "range":
                return t.querySelector(".".concat($.range, " input"));
            default:
                return bt(t, $.input)
        }
    }

    function nt(t) {
        var e;
        t.focus(), "file" !== t.type && (e = t.value, t.value = "", t.value = e)
    }

    function ot(t, e, n) { t && e && ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)), e.forEach(function(e) { t.forEach ? t.forEach(function(t) { n ? t.classList.add(e) : t.classList.remove(e) }) : n ? t.classList.add(e) : t.classList.remove(e) })) }

    function it(t, e, n) { n === "".concat(parseInt(n)) && (n = parseInt(n)), n || 0 === parseInt(n) ? t.style[e] = "number" == typeof n ? "".concat(n, "px") : n : t.style.removeProperty(e) }

    function rt(t, e) { e = 1 < arguments.length && void 0 !== e ? e : "flex", t.style.display = e }

    function at(t) { t.style.display = "none" }

    function ct(t, e, n, o) {
        (e = t.querySelector(e)) && (e.style[n] = o)
    }

    function st(t, e, n) { e ? rt(t, n) : at(t) }

    function ut(t) { return !!(t.scrollHeight > t.clientHeight) }

    function lt(t) {
        var e = window.getComputedStyle(t),
            t = parseFloat(e.getPropertyValue("animation-duration") || "0"),
            e = parseFloat(e.getPropertyValue("transition-duration") || "0");
        return 0 < t || 0 < e
    }

    function dt(t, e) {
        var e = 1 < arguments.length && void 0 !== e && e,
            n = H();
        wt(n) && (e && (n.style.transition = "none", n.style.width = "100%"), setTimeout(function() { n.style.transition = "width ".concat(t / 1e3, "s linear"), n.style.width = "0%" }, 10))
    }

    function pt() { return "undefined" == typeof window || "undefined" == typeof document }

    function ft(t) { Dn.isVisible() && gt !== t.target.value && Dn.resetValidationMessage(), gt = t.target.value }

    function mt(t, e) { t instanceof HTMLElement ? e.appendChild(t) : "object" === r(t) ? At(t, e) : t && _(e, t) }

    function ht(t, e) {
        var n, o, i, r, a = I(),
            c = D(),
            s = L(),
            u = q(),
            l = j();
        e.showConfirmButton || e.showDenyButton || e.showCancelButton || at(a), z(a, e, "actions"), Pt(s, "confirm", e), Pt(u, "deny", e), Pt(l, "cancel", e), n = s, o = u, i = l, (r = e).buttonsStyling ? (vt([n, o, i], $.styled), r.confirmButtonColor && (n.style.backgroundColor = r.confirmButtonColor), r.denyButtonColor && (o.style.backgroundColor = r.denyButtonColor), r.cancelButtonColor && (i.style.backgroundColor = r.cancelButtonColor)) : yt([n, o, i], $.styled), e.reverseButtons && (a.insertBefore(l, c), a.insertBefore(u, c), a.insertBefore(s, c)), _(c, e.loaderHtml), z(c, e, "loader")
    }
    var gt, vt = function(t, e) { ot(t, e, !0) },
        yt = function(t, e) { ot(t, e, !1) },
        bt = function(t, e) {
            for (var n = 0; n < t.childNodes.length; n++)
                if (F(t.childNodes[n], e)) return t.childNodes[n]
        },
        wt = function(t) { return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length)) },
        Ct = '\n <div aria-labelledby="'.concat($.title, '" aria-describedby="').concat($.content, '" class="').concat($.popup, '" tabindex="-1">\n   <div class="').concat($.header, '">\n     <ul class="').concat($["progress-steps"], '"></ul>\n     <div class="').concat($.icon, " ").concat(X.error, '"></div>\n     <div class="').concat($.icon, " ").concat(X.question, '"></div>\n     <div class="').concat($.icon, " ").concat(X.warning, '"></div>\n     <div class="').concat($.icon, " ").concat(X.info, '"></div>\n     <div class="').concat($.icon, " ").concat(X.success, '"></div>\n     <img class="').concat($.image, '" />\n     <h2 class="').concat($.title, '" id="').concat($.title, '"></h2>\n     <button type="button" class="').concat($.close, '"></button>\n   </div>\n   <div class="').concat($.content, '">\n     <div id="').concat($.content, '" class="').concat($["html-container"], '"></div>\n     <input class="').concat($.input, '" />\n     <input type="file" class="').concat($.file, '" />\n     <div class="').concat($.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat($.select, '"></select>\n     <div class="').concat($.radio, '"></div>\n     <label for="').concat($.checkbox, '" class="').concat($.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat($.label, '"></span>\n     </label>\n     <textarea class="').concat($.textarea, '"></textarea>\n     <div class="').concat($["validation-message"], '" id="').concat($["validation-message"], '"></div>\n   </div>\n   <div class="').concat($.actions, '">\n     <div class="').concat($.loader, '"></div>\n     <button type="button" class="').concat($.confirm, '"></button>\n     <button type="button" class="').concat($.deny, '"></button>\n     <button type="button" class="').concat($.cancel, '"></button>\n   </div>\n   <div class="').concat($.footer, '"></div>\n   <div class="').concat($["timer-progress-bar-container"], '">\n     <div class="').concat($["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        kt = function(t) {
            var e, n, o, i, r, a = !!(i = k()) && (i.parentNode.removeChild(i), yt([document.documentElement, document.body], [$["no-backdrop"], $["toast-shown"], $["has-column"]]), !0);
            pt() ? K("SweetAlert2 requires document to initialize") : ((r = document.createElement("div")).className = $.container, a && vt(r, $["no-transition"]), _(r, Ct), (i = "string" == typeof(e = t.target) ? document.querySelector(e) : e).appendChild(r), a = t, (e = x()).setAttribute("role", a.toast ? "alert" : "dialog"), e.setAttribute("aria-live", a.toast ? "polite" : "assertive"), a.toast || e.setAttribute("aria-modal", "true"), r = i, "rtl" === window.getComputedStyle(r).direction && vt(k(), $.rtl), t = S(), a = bt(t, $.input), e = bt(t, $.file), n = t.querySelector(".".concat($.range, " input")), o = t.querySelector(".".concat($.range, " output")), i = bt(t, $.select), r = t.querySelector(".".concat($.checkbox, " input")), t = bt(t, $.textarea), a.oninput = ft, e.onchange = ft, i.onchange = ft, r.onchange = ft, t.oninput = ft, n.oninput = function(t) { ft(t), o.value = n.value }, n.onchange = function(t) { ft(t), n.nextSibling.value = n.value })
        },
        At = function(t, e) { t.jquery ? xt(e, t) : _(e, t.toString()) },
        xt = function(t, e) {
            if (t.textContent = "", 0 in e)
                for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
            else t.appendChild(e.cloneNode(!0))
        },
        Bt = function() {
            if (pt()) return !1;
            var t, e = document.createElement("div"),
                n = { WebkitAnimation: "webkitAnimationEnd", OAnimation: "oAnimationEnd oanimationend", animation: "animationend" };
            for (t in n)
                if (Object.prototype.hasOwnProperty.call(n, t) && void 0 !== e.style[t]) return n[t];
            return !1
        }();

    function Pt(t, e, n) { st(t, n["show".concat(m(e), "Button")], "inline-block"), _(t, n["".concat(e, "ButtonText")]), t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]), t.className = $[e], z(t, n, "".concat(e, "Button")), vt(t, n["".concat(e, "ButtonClass")]) }

    function St(t, e) {
        var n, o, i = k();
        i && (o = i, "string" == typeof(n = e.backdrop) ? o.style.background = n : n || vt([document.documentElement, document.body], $["no-backdrop"]), !e.backdrop && e.allowOutsideClick && W('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), o = i, (n = e.position) in $ ? vt(o, $[n]) : (W('The "position" parameter is not valid, defaulting to "center"'), vt(o, $.center)), n = i, !(o = e.grow) || "string" != typeof o || (o = "grow-".concat(o)) in $ && vt(n, $[o]), z(i, e, "container"), (e = document.body.getAttribute("data-swal2-queue-step")) && (i.setAttribute("data-queue-step", e), document.body.removeAttribute("data-swal2-queue-step")))
    }

    function Et(t, e) { t.placeholder && !e.inputPlaceholder || (t.placeholder = e.inputPlaceholder) }

    function Ot(t, e, n) {
        var o, i;
        n.inputLabel && (t.id = $.input, o = document.createElement("label"), i = $["input-label"], o.setAttribute("for", t.id), o.className = i, o.innerText = n.inputLabel, e.insertAdjacentElement("beforebegin", o))
    }
    var Tt = { promise: new WeakMap, innerParams: new WeakMap, domCache: new WeakMap },
        Lt = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
        qt = function(t) {
            if (!Mt[t.input]) return K('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
            var e = It(t.input),
                n = Mt[t.input](e, t);
            rt(n), setTimeout(function() { nt(n) })
        },
        Dt = function(t, e) {
            var n = et(S(), t);
            if (n)
                for (var o in ! function(t) { for (var e = 0; e < t.attributes.length; e++) { var n = t.attributes[e].name; - 1 === ["type", "value", "style"].indexOf(n) && t.removeAttribute(n) } }(n), e) "range" === t && "placeholder" === o || n.setAttribute(o, e[o])
        },
        jt = function(t) {
            var e = It(t.input);
            t.customClass && vt(e, t.customClass.input)
        },
        It = function(t) { t = $[t] || $.input; return bt(S(), t) },
        Mt = {};
    Mt.text = Mt.email = Mt.password = Mt.number = Mt.tel = Mt.url = function(t, e) { return "string" == typeof e.inputValue || "number" == typeof e.inputValue ? t.value = e.inputValue : w(e.inputValue) || W('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue), '"')), Ot(t, t, e), Et(t, e), t.type = e.input, t }, Mt.file = function(t, e) { return Ot(t, t, e), Et(t, e), t }, Mt.range = function(t, e) {
        var n = t.querySelector("input"),
            o = t.querySelector("output");
        return n.value = e.inputValue, n.type = e.input, o.value = e.inputValue, Ot(n, t, e), t
    }, Mt.select = function(t, e) { var n; return t.textContent = "", e.inputPlaceholder && (n = document.createElement("option"), _(n, e.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, t.appendChild(n)), Ot(t, t, e), t }, Mt.radio = function(t) { return t.textContent = "", t }, Mt.checkbox = function(t, e) {
        var n = et(S(), "checkbox");
        n.value = 1, n.id = $.checkbox, n.checked = Boolean(e.inputValue);
        n = t.querySelector("span");
        return _(n, e.inputPlaceholder), t
    }, Mt.textarea = function(e, t) {
        var n, o;
        return e.value = t.inputValue, Et(e, t), Ot(e, e, t), "MutationObserver" in window && (n = parseInt(window.getComputedStyle(x()).width), o = parseInt(window.getComputedStyle(x()).paddingLeft) + parseInt(window.getComputedStyle(x()).paddingRight), new MutationObserver(function() {
            var t = e.offsetWidth + o;
            x().style.width = n < t ? "".concat(t, "px") : null
        }).observe(e, { attributes: !0, attributeFilter: ["style"] })), e
    };

    function Vt(t, e) {
        var o, i, r, n = S().querySelector("#".concat($.content));
        e.html ? (mt(e.html, n), rt(n, "block")) : e.text ? (n.textContent = e.text, rt(n, "block")) : at(n), t = t, o = e, i = S(), t = Tt.innerParams.get(t), r = !t || o.input !== t.input, Lt.forEach(function(t) {
            var e = $[t],
                n = bt(i, e);
            Dt(t, o.inputAttributes), n.className = e, r && at(n)
        }), o.input && (r && qt(o), jt(o)), z(S(), e, "content")
    }

    function Ht() { return k() && k().getAttribute("data-queue-step") }

    function Rt(t, o) {
        var i = O();
        if (!o.progressSteps || 0 === o.progressSteps.length) return at(i), 0;
        rt(i), i.textContent = "";
        var r = parseInt(void 0 === o.currentProgressStep ? Ht() : o.currentProgressStep);
        r >= o.progressSteps.length && W("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), o.progressSteps.forEach(function(t, e) {
            var n, t = (n = t, t = document.createElement("li"), vt(t, $["progress-step"]), _(t, n), t);
            i.appendChild(t), e === r && vt(t, $["active-progress-step"]), e !== o.progressSteps.length - 1 && (t = o, e = document.createElement("li"), vt(e, $["progress-step-line"]), t.progressStepsDistance && (e.style.width = t.progressStepsDistance), e = e, i.appendChild(e))
        })
    }

    function Nt(t, e) {
        var n = M();
        z(n, e, "header"), Rt(0, e), n = t, t = e, (n = Tt.innerParams.get(n)) && t.icon === n.icon && B() ? zt(B(), t) : (Ft(), t.icon && (-1 !== Object.keys(X).indexOf(t.icon) ? (n = A(".".concat($.icon, ".").concat(X[t.icon])), rt(n), Kt(n, t), zt(n, t), vt(n, t.showClass.icon)) : K('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon, '"')))),
            function(t) {
                var e = E();
                if (!t.imageUrl) return at(e);
                rt(e, ""), e.setAttribute("src", t.imageUrl), e.setAttribute("alt", t.imageAlt), it(e, "width", t.imageWidth), it(e, "height", t.imageHeight), e.className = $.image, z(e, t, "image")
            }(e), n = e, t = P(), st(t, n.title || n.titleText), n.title && mt(n.title, t), n.titleText && (t.innerText = n.titleText), z(t, n, "title"), n = e, e = R(), _(e, n.closeButtonHtml), z(e, n, "closeButton"), st(e, n.showCloseButton), e.setAttribute("aria-label", n.closeButtonAriaLabel)
    }

    function Ut(t, e) {
        var n, o;
        o = e, n = x(), it(n, "width", o.width), it(n, "padding", o.padding), o.background && (n.style.background = o.background), Jt(n, o), St(0, e), Nt(t, e), Vt(t, e), ht(0, e), o = e, t = V(), st(t, o.footer), o.footer && mt(o.footer, t), z(t, o, "footer"), "function" == typeof e.didRender ? e.didRender(x()) : "function" == typeof e.onRender && e.onRender(x())
    }

    function _t() { return L() && L().click() }
    var Ft = function() { for (var t = n(), e = 0; e < t.length; e++) at(t[e]) },
        zt = function(t, e) { Yt(t, e), Wt(), z(t, e, "icon") },
        Wt = function() { for (var t = x(), e = window.getComputedStyle(t).getPropertyValue("background-color"), n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), o = 0; o < n.length; o++) n[o].style.backgroundColor = e },
        Kt = function(t, e) { t.textContent = "", e.iconHtml ? _(t, Zt(e.iconHtml)) : "success" === e.icon ? _(t, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === e.icon ? _(t, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : _(t, Zt({ question: "?", warning: "!", info: "i" }[e.icon])) },
        Yt = function(t, e) {
            if (e.iconColor) {
                t.style.color = e.iconColor, t.style.borderColor = e.iconColor;
                for (var n = 0, o = [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]; n < o.length; n++) ct(t, o[n], "backgroundColor", e.iconColor);
                ct(t, ".swal2-success-ring", "borderColor", e.iconColor)
            }
        },
        Zt = function(t) { return '<div class="'.concat($["icon-content"], '">').concat(t, "</div>") },
        Qt = [],
        Jt = function(t, e) { t.className = "".concat($.popup, " ").concat(wt(t) ? e.showClass.popup : ""), e.toast ? (vt([document.documentElement, document.body], $["toast-shown"]), vt(t, $.toast)) : vt(t, $.modal), z(t, e, "popup"), "string" == typeof e.customClass && vt(t, e.customClass), e.icon && vt(t, $["icon-".concat(e.icon)]) };

    function $t(t) {
        var e = x();
        e || Dn.fire(), e = x();
        var n = I(),
            o = D();
        !t && wt(L()) && (t = L()), rt(n), t && (at(t), o.setAttribute("data-button-to-replace", t.className)), o.parentNode.insertBefore(o, t), vt([e, n], $.loading), rt(o), e.setAttribute("data-loading", !0), e.setAttribute("aria-busy", !0), e.focus()
    }

    function Xt() {
        return new Promise(function(t) {
            var e = window.scrollX,
                n = window.scrollY;
            ie.restoreFocusTimeout = setTimeout(function() { ie.previousActiveElement && ie.previousActiveElement.focus ? (ie.previousActiveElement.focus(), ie.previousActiveElement = null) : document.body && document.body.focus(), t() }, 100), void 0 !== e && void 0 !== n && window.scrollTo(e, n)
        })
    }

    function Gt() {
        if (ie.timeout) return function() {
            var t = H(),
                e = parseInt(window.getComputedStyle(t).width);
            t.style.removeProperty("transition"), t.style.width = "100%";
            var n = parseInt(window.getComputedStyle(t).width),
                n = parseInt(e / n * 100);
            t.style.removeProperty("transition"), t.style.width = "".concat(n, "%")
        }(), ie.timeout.stop()
    }

    function te() { if (ie.timeout) { var t = ie.timeout.start(); return dt(t), t } }

    function ee(t) { return Object.prototype.hasOwnProperty.call(re, t) }

    function ne(t) { return ce[t] }

    function oe(t) { for (var e in t) ee(o = e) || W('Unknown parameter "'.concat(o, '"')), t.toast && (n = e, -1 !== se.indexOf(n) && W('The parameter "'.concat(n, '" is incompatible with toasts'))), ne(n = e) && v(n, ne(n)); var n, o }
    var ie = {},
        re = { title: "", titleText: "", text: "", html: "", footer: "", icon: void 0, iconColor: void 0, iconHtml: void 0, template: void 0, toast: !1, animation: !0, showClass: { popup: "swal2-show", backdrop: "swal2-backdrop-show", icon: "swal2-icon-show" }, hideClass: { popup: "swal2-hide", backdrop: "swal2-backdrop-hide", icon: "swal2-icon-hide" }, customClass: void 0, target: "body", backdrop: !0, heightAuto: !0, allowOutsideClick: !0, allowEscapeKey: !0, allowEnterKey: !0, stopKeydownPropagation: !0, keydownListenerCapture: !1, showConfirmButton: !0, showDenyButton: !1, showCancelButton: !1, preConfirm: void 0, preDeny: void 0, confirmButtonText: "OK", confirmButtonAriaLabel: "", confirmButtonColor: void 0, denyButtonText: "No", denyButtonAriaLabel: "", denyButtonColor: void 0, cancelButtonText: "Cancel", cancelButtonAriaLabel: "", cancelButtonColor: void 0, buttonsStyling: !0, reverseButtons: !1, focusConfirm: !0, focusDeny: !1, focusCancel: !1, showCloseButton: !1, closeButtonHtml: "&times;", closeButtonAriaLabel: "Close this dialog", loaderHtml: "", showLoaderOnConfirm: !1, imageUrl: void 0, imageWidth: void 0, imageHeight: void 0, imageAlt: "", timer: void 0, timerProgressBar: !1, width: void 0, padding: void 0, background: void 0, input: void 0, inputPlaceholder: "", inputLabel: "", inputValue: "", inputOptions: {}, inputAutoTrim: !0, inputAttributes: {}, inputValidator: void 0, returnInputValueOnDeny: !1, validationMessage: void 0, grow: !1, position: "center", progressSteps: [], currentProgressStep: void 0, progressStepsDistance: void 0, onBeforeOpen: void 0, onOpen: void 0, willOpen: void 0, didOpen: void 0, onRender: void 0, didRender: void 0, onClose: void 0, onAfterClose: void 0, willClose: void 0, didClose: void 0, onDestroy: void 0, didDestroy: void 0, scrollbarPadding: !0 },
        ae = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "onAfterClose", "onClose", "onDestroy", "progressSteps", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
        ce = { animation: 'showClass" and "hideClass', onBeforeOpen: "willOpen", onOpen: "didOpen", onRender: "didRender", onClose: "willClose", onAfterClose: "didClose", onDestroy: "didDestroy" },
        se = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "heightAuto", "keydownListenerCapture"],
        ue = Object.freeze({
            isValidParameter: ee,
            isUpdatableParameter: function(t) { return -1 !== ae.indexOf(t) },
            isDeprecatedParameter: ne,
            argsToParams: function(n) { var o = {}; return "object" !== r(n[0]) || C(n[0]) ? ["title", "html", "icon"].forEach(function(t, e) { e = n[e]; "string" == typeof e || C(e) ? o[t] = e : void 0 !== e && K("Unexpected type of ".concat(t, '! Expected "string" or "Element", got ').concat(r(e))) }) : s(o, n[0]), o },
            isVisible: function() { return wt(x()) },
            clickConfirm: _t,
            clickDeny: function() { return q() && q().click() },
            clickCancel: function() { return j() && j().click() },
            getContainer: k,
            getPopup: x,
            getTitle: P,
            getContent: S,
            getHtmlContainer: function() { return t($["html-container"]) },
            getImage: E,
            getIcon: B,
            getIcons: n,
            getInputLabel: function() { return t($["input-label"]) },
            getCloseButton: R,
            getActions: I,
            getConfirmButton: L,
            getDenyButton: q,
            getCancelButton: j,
            getLoader: D,
            getHeader: M,
            getFooter: V,
            getTimerProgressBar: H,
            getFocusableElements: N,
            getValidationMessage: T,
            isLoading: function() { return x().hasAttribute("data-loading") },
            fire: function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return i(this, e) },
            mixin: function(r) {
                return function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && l(t, e)
                    }(i, t);
                    var n, o, e = (n = i, o = d(), function() { var t, e = u(n); return p(this, o ? (t = u(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments)) });

                    function i() { return a(this, i), e.apply(this, arguments) }
                    return c(i, [{ key: "_main", value: function(t) { return f(u(i.prototype), "_main", this).call(this, s({}, r, t)) } }]), i
                }(this)
            },
            queue: function(t) {
                var r = this;
                Qt = t;

                function a(t, e) { Qt = [], t(e) }
                var c = [];
                return new Promise(function(i) {! function e(n, o) { n < Qt.length ? (document.body.setAttribute("data-swal2-queue-step", n), r.fire(Qt[n]).then(function(t) { void 0 !== t.value ? (c.push(t.value), e(n + 1, o)) : a(i, { dismiss: t.dismiss }) })) : a(i, { value: c }) }(0) })
            },
            getQueueStep: Ht,
            insertQueueStep: function(t, e) { return e && e < Qt.length ? Qt.splice(e, 0, t) : Qt.push(t) },
            deleteQueueStep: function(t) { void 0 !== Qt[t] && Qt.splice(t, 1) },
            showLoading: $t,
            enableLoading: $t,
            getTimerLeft: function() { return ie.timeout && ie.timeout.getTimerLeft() },
            stopTimer: Gt,
            resumeTimer: te,
            toggleTimer: function() { var t = ie.timeout; return t && (t.running ? Gt : te)() },
            increaseTimer: function(t) { if (ie.timeout) { t = ie.timeout.increase(t); return dt(t, !0), t } },
            isTimerRunning: function() { return ie.timeout && ie.timeout.isRunning() }
        });

    function le() {
        var t, e;
        Tt.innerParams.get(this) && (t = Tt.domCache.get(this), at(t.loader), (e = t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"))).length ? rt(e[0], "inline-block") : wt(L()) || wt(q()) || wt(j()) || at(t.actions), yt([t.popup, t.actions], $.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = !1, t.denyButton.disabled = !1, t.cancelButton.disabled = !1)
    }

    function de() {
        null === tt.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (tt.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(tt.previousBodyPadding + function() {
            var t = document.createElement("div");
            t.className = $["scrollbar-measure"], document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e
        }(), "px"))
    }

    function pe() { return !!window.MSInputMethodContext && !!document.documentMode }

    function fe() {
        var t = k(),
            e = x();
        t.style.removeProperty("align-items"), e.offsetTop < 0 && (t.style.alignItems = "flex-start")
    }
    var me = function() { navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i) || x().scrollHeight > window.innerHeight - 44 && (k().style.paddingBottom = "".concat(44, "px")) },
        he = function() {
            var e, t = k();
            t.ontouchstart = function(t) { e = ge(t) }, t.ontouchmove = function(t) { e && (t.preventDefault(), t.stopPropagation()) }
        },
        ge = function(t) {
            var e = t.target,
                n = k();
            return !ve(t) && !ye(t) && (e === n || !(ut(n) || "INPUT" === e.tagName || ut(S()) && S().contains(e)))
        },
        ve = function(t) { return t.touches && t.touches.length && "stylus" === t.touches[0].touchType },
        ye = function(t) { return t.touches && 1 < t.touches.length },
        be = { swalPromiseResolve: new WeakMap };

    function we(t, e, n, o) { n ? Pe(t, o) : (Xt().then(function() { return Pe(t, o) }), ie.keydownTarget.removeEventListener("keydown", ie.keydownHandler, { capture: ie.keydownListenerCapture }), ie.keydownHandlerAdded = !1), e.parentNode && !document.body.getAttribute("data-swal2-queue-step") && e.parentNode.removeChild(e), U() && (null !== tt.previousBodyPadding && (document.body.style.paddingRight = "".concat(tt.previousBodyPadding, "px"), tt.previousBodyPadding = null), F(document.body, $.iosfix) && (e = parseInt(document.body.style.top, 10), yt(document.body, $.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e), "undefined" != typeof window && pe() && window.removeEventListener("resize", fe), g(document.body.children).forEach(function(t) { t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden") })), yt([document.documentElement, document.body], [$.shown, $["height-auto"], $["no-backdrop"], $["toast-shown"], $["toast-column"]]) }

    function Ce(t) {
        var e, n, o, i = x();
        i && (t = ke(t), (e = Tt.innerParams.get(this)) && !F(i, e.hideClass.popup) && (n = be.swalPromiseResolve.get(this), yt(i, e.showClass.popup), vt(i, e.hideClass.popup), o = k(), yt(o, e.showClass.backdrop), vt(o, e.hideClass.backdrop), Ae(this, i, e), n(t)))
    }

    function ke(t) { return void 0 === t ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 } : s({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, t) }

    function Ae(t, e, n) {
        var o = k(),
            i = Bt && lt(e),
            r = n.onClose,
            a = n.onAfterClose,
            c = n.willClose,
            n = n.didClose;
        xe(e, c, r), i ? Be(t, e, o, n || a) : we(t, o, G(), n || a)
    }
    var xe = function(t, e, n) { null !== e && "function" == typeof e ? e(t) : null !== n && "function" == typeof n && n(t) },
        Be = function(t, e, n, o) { ie.swalCloseEventFinishedCallback = we.bind(null, t, n, G(), o), e.addEventListener(Bt, function(t) { t.target === e && (ie.swalCloseEventFinishedCallback(), delete ie.swalCloseEventFinishedCallback) }) },
        Pe = function(t, e) { setTimeout(function() { "function" == typeof e && e(), t._destroy() }) };

    function Se(t, e, n) {
        var o = Tt.domCache.get(t);
        e.forEach(function(t) { o[t].disabled = n })
    }

    function Ee(t, e) {
        if (!t) return !1;
        if ("radio" === t.type)
            for (var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0; o < n.length; o++) n[o].disabled = e;
        else t.disabled = e
    }
    var Oe = function() {
            function n(t, e) { a(this, n), this.callback = t, this.remaining = e, this.running = !1, this.start() }
            return c(n, [{ key: "start", value: function() { return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining } }, { key: "stop", value: function() { return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date - this.started), this.remaining } }, { key: "increase", value: function(t) { var e = this.running; return e && this.stop(), this.remaining += t, e && this.start(), this.remaining } }, { key: "getTimerLeft", value: function() { return this.running && (this.stop(), this.start()), this.remaining } }, { key: "isRunning", value: function() { return this.running } }]), n
        }(),
        Te = { email: function(t, e) { return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address") }, url: function(t, e) { return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL") } };

    function Le(t) {
        var e, n;
        (e = t).inputValidator || Object.keys(Te).forEach(function(t) { e.input === t && (e.inputValidator = Te[t]) }), t.showLoaderOnConfirm && !t.preConfirm && W("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), t.animation = Z(t.animation), (n = t).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (W('Target parameter is not valid, defaulting to "body"'), n.target = "body"), "string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")), kt(t)
    }

    function qe(t) {
        var e = k(),
            n = x();
        "function" == typeof t.willOpen ? t.willOpen(n) : "function" == typeof t.onBeforeOpen && t.onBeforeOpen(n);
        var o = window.getComputedStyle(document.body).overflowY;
        Ze(e, n, t), setTimeout(function() { Ke(e, n) }, 10), U() && (Ye(e, t.scrollbarPadding, o), g(document.body.children).forEach(function(t) { t === k() || function(t, e) { if ("function" == typeof t.contains) return t.contains(e) }(t, k()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true")) })), G() || ie.previousActiveElement || (ie.previousActiveElement = document.activeElement), We(n, t), yt(e, $["no-transition"])
    }

    function De(t) {
        var e = x();
        t.target === e && (t = k(), e.removeEventListener(Bt, De), t.style.overflowY = "auto")
    }

    function je(t, e) { t.closePopup({ isConfirmed: !0, value: e }) }

    function Ie(t, e, n) {
        var o = N();
        if (o.length) return (e += n) === o.length ? e = 0 : -1 === e && (e = o.length - 1), o[e].focus();
        x().focus()
    }
    var Me = ["swal-title", "swal-html", "swal-footer"],
        Ve = function(t) {
            var n = {};
            return g(t.querySelectorAll("swal-param")).forEach(function(t) {
                ze(t, ["name", "value"]);
                var e = t.getAttribute("name"),
                    t = t.getAttribute("value");
                "boolean" == typeof re[e] && "false" === t && (t = !1), "object" === r(re[e]) && (t = JSON.parse(t)), n[e] = t
            }), n
        },
        He = function(t) {
            var i = {};
            return g(t.querySelectorAll("swal-button")).forEach(function(t) {
                ze(t, ["type", "color", "aria-label"]);
                var e = t.getAttribute("type"),
                    n = t.getAttribute("color"),
                    o = t.getAttribute("aria-label") || "";
                i["".concat(e, "ButtonText")] = t.innerHTML, i["show".concat(m(e), "Button")] = !0, n && (i["".concat(e, "ButtonColor")] = n), i["".concat(e, "ButtonAriaLabel")] = o
            }), i
        },
        Re = function(t) {
            var e = {},
                t = t.querySelector("swal-image");
            return t && (ze(t, ["src", "width", "height", "alt"]), e.imageUrl = t.getAttribute("src"), e.imageWidth = t.getAttribute("width"), e.imageHeight = t.getAttribute("height"), e.imageAlt = t.getAttribute("alt") || ""), e
        },
        Ne = function(t) {
            var e = {},
                t = t.querySelector("swal-icon");
            return t && (ze(t, ["type", "color"]), e.icon = t.getAttribute("type"), e.iconColor = t.getAttribute("color"), e.iconHtml = t.innerHTML), e
        },
        Ue = function(t) {
            var n = {},
                e = t.querySelector("swal-input");
            e && (ze(e, ["type", "label", "placeholder", "value"]), n.input = e.getAttribute("type") || "text", n.inputLabel = e.getAttribute("label") || "", n.inputPlaceholder = e.getAttribute("placeholder") || "", n.inputValue = e.getAttribute("value") || "");
            t = t.querySelectorAll("swal-input-option");
            return t.length && (n.inputOptions = {}, g(t).forEach(function(t) {
                ze(t, ["value"]);
                var e = t.getAttribute("value"),
                    t = t.innerHTML;
                n.inputOptions[e] = t
            })), n
        },
        _e = function(t, e) {
            var n, o = {};
            for (n in e) {
                var i = e[n],
                    r = t.querySelector(i);
                r && (ze(r, []), o[i.replace(/^swal-/, "")] = r.innerHTML)
            }
            return o
        },
        Fe = function(t) {
            var e = Me.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
            g(t.querySelectorAll("*")).forEach(function(t) { t = t.tagName.toLowerCase(); - 1 === e.indexOf(t) && W("Unrecognized element <".concat(t, ">")) })
        },
        ze = function(e, n) { g(e.attributes).forEach(function(t) {-1 === n.indexOf(t.name) && W(['Unrecognized attribute "'.concat(t.name, '" on <').concat(e.tagName.toLowerCase(), ">."), "".concat(n.length ? "Allowed attributes are: ".concat(n.join(", ")) : "To set the value, use HTML within the element.")]) }) },
        We = function(t, e) { "function" == typeof e.didOpen ? setTimeout(function() { return e.didOpen(t) }) : "function" == typeof e.onOpen && setTimeout(function() { return e.onOpen(t) }) },
        Ke = function(t, e) { Bt && lt(e) ? (t.style.overflowY = "hidden", e.addEventListener(Bt, De)) : t.style.overflowY = "auto" },
        Ye = function(t, e, n) {
            var o;
            (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !F(document.body, $.iosfix) && (o = document.body.scrollTop, document.body.style.top = "".concat(-1 * o, "px"), vt(document.body, $.iosfix), he(), me()), "undefined" != typeof window && pe() && (fe(), window.addEventListener("resize", fe)), e && "hidden" !== n && de(), setTimeout(function() { t.scrollTop = 0 })
        },
        Ze = function(t, e, n) { vt(t, n.showClass.backdrop), e.style.setProperty("opacity", "0", "important"), rt(e), setTimeout(function() { vt(e, n.showClass.popup), e.style.removeProperty("opacity") }, 10), vt([document.documentElement, document.body], $.shown), n.heightAuto && n.backdrop && !n.toast && vt([document.documentElement, document.body], $["height-auto"]) },
        Qe = function(t) { return t.checked ? 1 : 0 },
        Je = function(t) { return t.checked ? t.value : null },
        $e = function(t) { return t.files.length ? null !== t.getAttribute("multiple") ? t.files : t.files[0] : null },
        Xe = function(e, n) {
            function o(t) { return tn[n.input](i, en(t), n) }
            var i = S();
            y(n.inputOptions) || w(n.inputOptions) ? ($t(), b(n.inputOptions).then(function(t) { e.hideLoading(), o(t) })) : "object" === r(n.inputOptions) ? o(n.inputOptions) : K("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)))
        },
        Ge = function(e, n) {
            var o = e.getInput();
            at(o), b(n.inputValue).then(function(t) { o.value = "number" === n.input ? parseFloat(t) || 0 : "".concat(t), rt(o), o.focus(), e.hideLoading() }).catch(function(t) { K("Error in inputValue promise: ".concat(t)), o.value = "", rt(o), o.focus(), e.hideLoading() })
        },
        tn = {
            select: function(t, e, i) {
                function o(t, e, n) {
                    var o = document.createElement("option");
                    o.value = n, _(o, e), o.selected = nn(n, i.inputValue), t.appendChild(o)
                }
                var r = bt(t, $.select);
                e.forEach(function(t) {
                    var e, n = t[0],
                        t = t[1];
                    Array.isArray(t) ? ((e = document.createElement("optgroup")).label = n, e.disabled = !1, r.appendChild(e), t.forEach(function(t) { return o(e, t[1], t[0]) })) : o(r, t, n)
                }), r.focus()
            },
            radio: function(t, e, i) {
                var r = bt(t, $.radio);
                e.forEach(function(t) {
                    var e = t[0],
                        n = t[1],
                        o = document.createElement("input"),
                        t = document.createElement("label");
                    o.type = "radio", o.name = $.radio, o.value = e, nn(e, i.inputValue) && (o.checked = !0);
                    e = document.createElement("span");
                    _(e, n), e.className = $.label, t.appendChild(o), t.appendChild(e), r.appendChild(t)
                });
                e = r.querySelectorAll("input");
                e.length && e[0].focus()
            }
        },
        en = function n(o) { var i = []; return "undefined" != typeof Map && o instanceof Map ? o.forEach(function(t, e) { "object" === r(t) && (t = n(t)), i.push([e, t]) }) : Object.keys(o).forEach(function(t) { var e = o[t]; "object" === r(e) && (e = n(e)), i.push([t, e]) }), i },
        nn = function(t, e) { return e && e.toString() === t.toString() },
        on = function(t, e, n) {
            var o = function(t, e) {
                var n = t.getInput();
                if (!n) return null;
                switch (e.input) {
                    case "checkbox":
                        return Qe(n);
                    case "radio":
                        return Je(n);
                    case "file":
                        return $e(n);
                    default:
                        return e.inputAutoTrim ? n.value.trim() : n.value
                }
            }(t, e);
            e.inputValidator ? rn(t, e, o) : t.getInput().checkValidity() ? ("deny" === n ? an : cn)(t, e, o) : (t.enableButtons(), t.showValidationMessage(e.validationMessage))
        },
        rn = function(e, n, o) { e.disableInput(), Promise.resolve().then(function() { return b(n.inputValidator(o, n.validationMessage)) }).then(function(t) { e.enableButtons(), e.enableInput(), t ? e.showValidationMessage(t) : cn(e, n, o) }) },
        an = function(e, t, n) { t.preDeny ? Promise.resolve().then(function() { return b(t.preDeny(n, t.validationMessage)) }).then(function(t) {!1 === t ? e.hideLoading() : e.closePopup({ isDenied: !0, value: void 0 === t ? n : t }) }) : e.closePopup({ isDenied: !0, value: n }) },
        cn = function(e, t, n) { t.showLoaderOnConfirm && $t(), t.preConfirm ? (e.resetValidationMessage(), Promise.resolve().then(function() { return b(t.preConfirm(n, t.validationMessage)) }).then(function(t) { wt(T()) || !1 === t ? e.hideLoading() : je(e, void 0 === t ? n : t) })) : je(e, n) },
        sn = ["ArrowRight", "ArrowDown", "Right", "Down"],
        un = ["ArrowLeft", "ArrowUp", "Left", "Up"],
        ln = ["Escape", "Esc"],
        dn = function(t, e, n) {
            var o = Tt.innerParams.get(t);
            o.stopKeydownPropagation && e.stopPropagation(), "Enter" === e.key ? pn(t, e, o) : "Tab" === e.key ? fn(e, o) : -1 !== [].concat(sn, un).indexOf(e.key) ? mn(e.key) : -1 !== ln.indexOf(e.key) && hn(e, o, n)
        },
        pn = function(t, e, n) { e.isComposing || e.target && t.getInput() && e.target.outerHTML === t.getInput().outerHTML && -1 === ["textarea", "file"].indexOf(n.input) && (_t(), e.preventDefault()) },
        fn = function(t) {
            for (var e = t.target, n = N(), o = -1, i = 0; i < n.length; i++)
                if (e === n[i]) { o = i; break }
            t.shiftKey ? Ie(0, o, -1) : Ie(0, o, 1), t.stopPropagation(), t.preventDefault()
        },
        mn = function(t) {-1 !== [L(), q(), j()].indexOf(document.activeElement) && (t = -1 !== sn.indexOf(t) ? "nextElementSibling" : "previousElementSibling", (t = document.activeElement[t]) && t.focus()) },
        hn = function(t, e, n) { Z(e.allowEscapeKey) && (t.preventDefault(), n(Q.esc)) },
        gn = function(e, t, n) {
            t.popup.onclick = function() {
                var t = Tt.innerParams.get(e);
                t.showConfirmButton || t.showDenyButton || t.showCancelButton || t.showCloseButton || t.input || n(Q.close)
            }
        },
        vn = !1,
        yn = function(e) { e.popup.onmousedown = function() { e.container.onmouseup = function(t) { e.container.onmouseup = void 0, t.target === e.container && (vn = !0) } } },
        bn = function(e) { e.container.onmousedown = function() { e.popup.onmouseup = function(t) { e.popup.onmouseup = void 0, t.target !== e.popup && !e.popup.contains(t.target) || (vn = !0) } } },
        wn = function(n, o, i) {
            o.container.onclick = function(t) {
                var e = Tt.innerParams.get(n);
                vn ? vn = !1 : t.target === o.container && Z(e.allowOutsideClick) && i(Q.backdrop)
            }
        };

    function Cn(t) {
        var e = s({}, re.showClass, t.showClass),
            n = s({}, re.hideClass, t.hideClass),
            o = function(t) {
                t = "string" == typeof t.template ? document.querySelector(t.template) : t.template;
                if (!t) return {};
                t = t.content || t;
                return Fe(t), s(Ve(t), He(t), Re(t), Ne(t), Ue(t), _e(t, Me))
            }(t);
        return (o = s({}, re, o, t)).showClass = e, o.hideClass = n, !1 === t.animation && (o.showClass = { popup: "swal2-noanimation", backdrop: "swal2-noanimation" }, o.hideClass = {}), o
    }

    function kn(a, c, s) {
        return new Promise(function(t) {
            function e(t) { a.closePopup({ isDismissed: !0, dismiss: t }) }
            var n, o, i, r;
            be.swalPromiseResolve.set(a, t), c.confirmButton.onclick = function() { return e = s, (t = a).disableButtons(), void(e.input ? on(t, e, "confirm") : cn(t, e, !0)); var t, e }, c.denyButton.onclick = function() { return e = s, (t = a).disableButtons(), void(e.returnInputValueOnDeny ? on(t, e, "deny") : an(t, e, !1)); var t, e }, c.cancelButton.onclick = function() { return t = e, a.disableButtons(), void t(Q.cancel); var t }, c.closeButton.onclick = function() { return e(Q.close) }, n = a, r = c, t = e, Tt.innerParams.get(n).toast ? gn(n, r, t) : (yn(r), bn(r), wn(n, r, t)), o = a, r = s, i = e, (t = ie).keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, { capture: t.keydownListenerCapture }), t.keydownHandlerAdded = !1), r.toast || (t.keydownHandler = function(t) { return dn(o, t, i) }, t.keydownTarget = r.keydownListenerCapture ? window : x(), t.keydownListenerCapture = r.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, { capture: t.keydownListenerCapture }), t.keydownHandlerAdded = !0), (s.toast && (s.input || s.footer || s.showCloseButton) ? vt : yt)(document.body, $["toast-column"]), r = a, "select" === (t = s).input || "radio" === t.input ? Xe(r, t) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(t.input) && (y(t.inputValue) || w(t.inputValue)) && Ge(r, t), qe(s), xn(ie, s, e), Bn(c, s), setTimeout(function() { c.container.scrollTop = 0 })
        })
    }

    function An(t) { var e = { popup: x(), container: k(), content: S(), actions: I(), confirmButton: L(), denyButton: q(), cancelButton: j(), loader: D(), closeButton: R(), validationMessage: T(), progressSteps: O() }; return Tt.domCache.set(t, e), e }
    var xn = function(t, e, n) {
            var o = H();
            at(o), e.timer && (t.timeout = new Oe(function() { n("timer"), delete t.timeout }, e.timer), e.timerProgressBar && (rt(o), setTimeout(function() { t.timeout.running && dt(e.timer) })))
        },
        Bn = function(t, e) { if (!e.toast) return Z(e.allowEnterKey) ? void(Pn(t, e) || Ie(0, -1, 1)) : Sn() },
        Pn = function(t, e) { return e.focusDeny && wt(t.denyButton) ? (t.denyButton.focus(), !0) : e.focusCancel && wt(t.cancelButton) ? (t.cancelButton.focus(), !0) : !(!e.focusConfirm || !wt(t.confirmButton)) && (t.confirmButton.focus(), !0) },
        Sn = function() { document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur() };

    function En(t) { "function" == typeof t.didDestroy ? t.didDestroy() : "function" == typeof t.onDestroy && t.onDestroy() }

    function On(t) { delete t.params, delete ie.keydownHandler, delete ie.keydownTarget, Ln(Tt), Ln(be) }
    var Tn, Ln = function(t) { for (var e in t) t[e] = new WeakMap },
        J = Object.freeze({
            hideLoading: le,
            disableLoading: le,
            getInput: function(t) { var e = Tt.innerParams.get(t || this); return (t = Tt.domCache.get(t || this)) ? et(t.content, e.input) : null },
            close: Ce,
            closePopup: Ce,
            closeModal: Ce,
            closeToast: Ce,
            enableButtons: function() { Se(this, ["confirmButton", "denyButton", "cancelButton"], !1) },
            disableButtons: function() { Se(this, ["confirmButton", "denyButton", "cancelButton"], !0) },
            enableInput: function() { return Ee(this.getInput(), !1) },
            disableInput: function() { return Ee(this.getInput(), !0) },
            showValidationMessage: function(t) {
                var e = Tt.domCache.get(this),
                    n = Tt.innerParams.get(this);
                _(e.validationMessage, t), e.validationMessage.className = $["validation-message"], n.customClass && n.customClass.validationMessage && vt(e.validationMessage, n.customClass.validationMessage), rt(e.validationMessage), (e = this.getInput()) && (e.setAttribute("aria-invalid", !0), e.setAttribute("aria-describedBy", $["validation-message"]), nt(e), vt(e, $.inputerror))
            },
            resetValidationMessage: function() {
                var t = Tt.domCache.get(this);
                t.validationMessage && at(t.validationMessage), (t = this.getInput()) && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedBy"), yt(t, $.inputerror))
            },
            getProgressSteps: function() { return Tt.domCache.get(this).progressSteps },
            _main: function(t) { oe(t), ie.currentInstance && ie.currentInstance._destroy(), ie.currentInstance = this; var e = Cn(t); return Le(e), Object.freeze(e), ie.timeout && (ie.timeout.stop(), delete ie.timeout), clearTimeout(ie.restoreFocusTimeout), t = An(this), Ut(this, e), Tt.innerParams.set(this, e), kn(this, t, e) },
            update: function(e) {
                var t = x(),
                    n = Tt.innerParams.get(this);
                if (!t || F(t, n.hideClass.popup)) return W("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
                var o = {};
                Object.keys(e).forEach(function(t) { Dn.isUpdatableParameter(t) ? o[t] = e[t] : W('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md')) }), n = s({}, n, o), Ut(this, n), Tt.innerParams.set(this, n), Object.defineProperties(this, { params: { value: s({}, this.params, e), writable: !1, enumerable: !0 } })
            },
            _destroy: function() {
                var t = Tt.domCache.get(this),
                    e = Tt.innerParams.get(this);
                e && (t.popup && ie.swalCloseEventFinishedCallback && (ie.swalCloseEventFinishedCallback(), delete ie.swalCloseEventFinishedCallback), ie.deferDisposalTimer && (clearTimeout(ie.deferDisposalTimer), delete ie.deferDisposalTimer), En(e), On(this))
            }
        }),
        qn = function() {
            function i() {
                if (a(this, i), "undefined" != typeof window) {
                    "undefined" == typeof Promise && K("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), Tn = this;
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    var o = Object.freeze(this.constructor.argsToParams(e));
                    Object.defineProperties(this, { params: { value: o, writable: !1, enumerable: !0, configurable: !0 } });
                    o = this._main(this.params);
                    Tt.promise.set(this, o)
                }
            }
            return c(i, [{ key: "then", value: function(t) { return Tt.promise.get(this).then(t) } }, { key: "finally", value: function(t) { return Tt.promise.get(this).finally(t) } }]), i
        }();
    s(qn.prototype, J), s(qn, ue), Object.keys(J).forEach(function(t) { qn[t] = function() { if (Tn) return Tn[t].apply(Tn, arguments) } }), qn.DismissReason = Q, qn.version = "10.11.0";
    var Dn = qn;
    return Dn.default = Dn
}), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);