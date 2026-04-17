( () => {
    "use strict";
    var e, t = {
        159: () => {
            var e, t, n, r, i = !1, o = !1, a = [];
            function s(e) {
                !function(e) {
                    a.includes(e) || a.push(e);
                    o || i || (i = !0,
                    queueMicrotask(u))
                }(e)
            }
            function l(e) {
                let t = a.indexOf(e);
                -1 !== t && a.splice(t, 1)
            }
            function u() {
                i = !1,
                o = !0;
                for (let e = 0; e < a.length; e++)
                    a[e]();
                a.length = 0,
                o = !1
            }
            var c = !0;
            function f(e) {
                t = e
            }
            var d = []
              , p = []
              , h = [];
            function _(e, t) {
                "function" == typeof t ? (e._x_cleanups || (e._x_cleanups = []),
                e._x_cleanups.push(t)) : (t = e,
                p.push(t))
            }
            function g(e, t) {
                e._x_attributeCleanups && Object.entries(e._x_attributeCleanups).forEach(( ([n,r]) => {
                    (void 0 === t || t.includes(n)) && (r.forEach((e => e())),
                    delete e._x_attributeCleanups[n])
                }
                ))
            }
            var m = new MutationObserver(C)
              , v = !1;
            function w() {
                m.observe(document, {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    attributeOldValue: !0
                }),
                v = !0
            }
            function y() {
                (b = b.concat(m.takeRecords())).length && !x && (x = !0,
                queueMicrotask(( () => {
                    C(b),
                    b.length = 0,
                    x = !1
                }
                ))),
                m.disconnect(),
                v = !1
            }
            var b = []
              , x = !1;
            function E(e) {
                if (!v)
                    return e();
                y();
                let t = e();
                return w(),
                t
            }
            var A = !1
              , S = [];
            function C(e) {
                if (A)
                    return void (S = S.concat(e));
                let t = []
                  , n = []
                  , r = new Map
                  , i = new Map;
                for (let o = 0; o < e.length; o++)
                    if (!e[o].target._x_ignoreMutationObserver && ("childList" === e[o].type && (e[o].addedNodes.forEach((e => 1 === e.nodeType && t.push(e))),
                    e[o].removedNodes.forEach((e => 1 === e.nodeType && n.push(e)))),
                    "attributes" === e[o].type)) {
                        let t = e[o].target
                          , n = e[o].attributeName
                          , a = e[o].oldValue
                          , s = () => {
                            r.has(t) || r.set(t, []),
                            r.get(t).push({
                                name: n,
                                value: t.getAttribute(n)
                            })
                        }
                          , l = () => {
                            i.has(t) || i.set(t, []),
                            i.get(t).push(n)
                        }
                        ;
                        t.hasAttribute(n) && null === a ? s() : t.hasAttribute(n) ? (l(),
                        s()) : l()
                    }
                i.forEach(( (e, t) => {
                    g(t, e)
                }
                )),
                r.forEach(( (e, t) => {
                    d.forEach((n => n(t, e)))
                }
                ));
                for (let e of n)
                    if (!t.includes(e) && (p.forEach((t => t(e))),
                    e._x_cleanups))
                        for (; e._x_cleanups.length; )
                            e._x_cleanups.pop()();
                t.forEach((e => {
                    e._x_ignoreSelf = !0,
                    e._x_ignore = !0
                }
                ));
                for (let e of t)
                    n.includes(e) || e.isConnected && (delete e._x_ignoreSelf,
                    delete e._x_ignore,
                    h.forEach((t => t(e))),
                    e._x_ignore = !0,
                    e._x_ignoreSelf = !0);
                t.forEach((e => {
                    delete e._x_ignoreSelf,
                    delete e._x_ignore
                }
                )),
                t = null,
                n = null,
                r = null,
                i = null
            }
            function k(e) {
                return T(L(e))
            }
            function O(e, t, n) {
                return e._x_dataStack = [t, ...L(n || e)],
                () => {
                    e._x_dataStack = e._x_dataStack.filter((e => e !== t))
                }
            }
            function P(e, t) {
                let n = e._x_dataStack[0];
                Object.entries(t).forEach(( ([e,t]) => {
                    n[e] = t
                }
                ))
            }
            function L(e) {
                return e._x_dataStack ? e._x_dataStack : "function" == typeof ShadowRoot && e instanceof ShadowRoot ? L(e.host) : e.parentNode ? L(e.parentNode) : []
            }
            function T(e) {
                let t = new Proxy({},{
                    ownKeys: () => Array.from(new Set(e.flatMap((e => Object.keys(e))))),
                    has: (t, n) => e.some((e => e.hasOwnProperty(n))),
                    get: (n, r) => (e.find((e => {
                        if (e.hasOwnProperty(r)) {
                            let n = Object.getOwnPropertyDescriptor(e, r);
                            if (n.get && n.get._x_alreadyBound || n.set && n.set._x_alreadyBound)
                                return !0;
                            if ((n.get || n.set) && n.enumerable) {
                                let i = n.get
                                  , o = n.set
                                  , a = n;
                                i = i && i.bind(t),
                                o = o && o.bind(t),
                                i && (i._x_alreadyBound = !0),
                                o && (o._x_alreadyBound = !0),
                                Object.defineProperty(e, r, {
                                    ...a,
                                    get: i,
                                    set: o
                                })
                            }
                            return !0
                        }
                        return !1
                    }
                    )) || {})[r],
                    set: (t, n, r) => {
                        let i = e.find((e => e.hasOwnProperty(n)));
                        return i ? i[n] = r : e[e.length - 1][n] = r,
                        !0
                    }
                });
                return t
            }
            function j(e) {
                let t = (n, r="") => {
                    Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(( ([i,{value: o, enumerable: a}]) => {
                        if (!1 === a || void 0 === o)
                            return;
                        let s = "" === r ? i : `${r}.${i}`;
                        var l;
                        "object" == typeof o && null !== o && o._x_interceptor ? n[i] = o.initialize(e, s, i) : "object" != typeof (l = o) || Array.isArray(l) || null === l || o === n || o instanceof Element || t(o, s)
                    }
                    ))
                }
                ;
                return t(e)
            }
            function R(e, t=( () => {}
            )) {
                let n = {
                    initialValue: void 0,
                    _x_interceptor: !0,
                    initialize(t, n, r) {
                        return e(this.initialValue, ( () => function(e, t) {
                            return t.split(".").reduce(( (e, t) => e[t]), e)
                        }(t, n)), (e => N(t, n, e)), n, r)
                    }
                };
                return t(n),
                e => {
                    if ("object" == typeof e && null !== e && e._x_interceptor) {
                        let t = n.initialize.bind(n);
                        n.initialize = (r, i, o) => {
                            let a = e.initialize(r, i, o);
                            return n.initialValue = a,
                            t(r, i, o)
                        }
                    } else
                        n.initialValue = e;
                    return n
                }
            }
            function N(e, t, n) {
                if ("string" == typeof t && (t = t.split(".")),
                1 !== t.length) {
                    if (0 === t.length)
                        throw error;
                    return e[t[0]] || (e[t[0]] = {}),
                    N(e[t[0]], t.slice(1), n)
                }
                e[t[0]] = n
            }
            var I = {};
            function $(e, t) {
                I[e] = t
            }
            function D(e, t) {
                return Object.entries(I).forEach(( ([n,r]) => {
                    Object.defineProperty(e, `$${n}`, {
                        get() {
                            let[e,n] = te(t);
                            return e = {
                                interceptor: R,
                                ...e
                            },
                            _(t, n),
                            r(t, e)
                        },
                        enumerable: !1
                    })
                }
                )),
                e
            }
            function q(e, t, n, ...r) {
                try {
                    return n(...r)
                } catch (n) {
                    M(n, e, t)
                }
            }
            function M(e, t, n) {
                Object.assign(e, {
                    el: t,
                    expression: n
                }),
                console.warn(`Alpine Expression Error: ${e.message}\n\n${n ? 'Expression: "' + n + '"\n\n' : ""}`, t),
                setTimeout(( () => {
                    throw e
                }
                ), 0)
            }
            var U = !0;
            function K(e, t, n={}) {
                let r;
                return B(e, t)((e => r = e), n),
                r
            }
            function B(...e) {
                return Q(...e)
            }
            var Q = W;
            function W(e, t) {
                let n = {};
                D(n, e);
                let r = [n, ...L(e)];
                if ("function" == typeof t)
                    return function(e, t) {
                        return (n=( () => {}
                        ), {scope: r={}, params: i=[]}={}) => {
                            F(n, t.apply(T([r, ...e]), i))
                        }
                    }(r, t);
                let i = function(e, t, n) {
                    let r = function(e, t) {
                        if (z[e])
                            return z[e];
                        let n = Object.getPrototypeOf((async function() {}
                        )).constructor
                          , r = /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e) ? `(() => { ${e} })()` : e;
                        let i = ( () => {
                            try {
                                return new n(["__self", "scope"],`with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`)
                            } catch (n) {
                                return M(n, t, e),
                                Promise.resolve()
                            }
                        }
                        )();
                        return z[e] = i,
                        i
                    }(t, n);
                    return (i=( () => {}
                    ), {scope: o={}, params: a=[]}={}) => {
                        r.result = void 0,
                        r.finished = !1;
                        let s = T([o, ...e]);
                        if ("function" == typeof r) {
                            let e = r(r, s).catch((e => M(e, n, t)));
                            r.finished ? (F(i, r.result, s, a, n),
                            r.result = void 0) : e.then((e => {
                                F(i, e, s, a, n)
                            }
                            )).catch((e => M(e, n, t))).finally(( () => r.result = void 0))
                        }
                    }
                }(r, t, e);
                return q.bind(null, e, t, i)
            }
            var z = {};
            function F(e, t, n, r, i) {
                if (U && "function" == typeof t) {
                    let o = t.apply(n, r);
                    o instanceof Promise ? o.then((t => F(e, t, n, r))).catch((e => M(e, i, t))) : e(o)
                } else
                    e(t)
            }
            var G = "x-";
            function V(e="") {
                return G + e
            }
            var H = {};
            function Z(e, t) {
                H[e] = t
            }
            function Y(e, t, n) {
                let r = {}
                  , i = Array.from(t).map(re(( (e, t) => r[e] = t))).filter(ae).map(function(e, t) {
                    return ({name: n, value: r}) => {
                        let i = n.match(se())
                          , o = n.match(/:([a-zA-Z0-9\-:]+)/)
                          , a = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || []
                          , s = t || e[n] || n;
                        return {
                            type: i ? i[1] : null,
                            value: o ? o[1] : null,
                            modifiers: a.map((e => e.replace(".", ""))),
                            expression: r,
                            original: s
                        }
                    }
                }(r, n)).sort(ce);
                return i.map((t => function(e, t) {
                    let n = () => {}
                      , r = H[t.type] || n
                      , [i,o] = te(e);
                    !function(e, t, n) {
                        e._x_attributeCleanups || (e._x_attributeCleanups = {}),
                        e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
                        e._x_attributeCleanups[t].push(n)
                    }(e, t.original, o);
                    let a = () => {
                        e._x_ignore || e._x_ignoreSelf || (r.inline && r.inline(e, t, i),
                        r = r.bind(r, e, t, i),
                        J ? X.get(ee).push(r) : r())
                    }
                    ;
                    return a.runCleanups = o,
                    a
                }(e, t)))
            }
            var J = !1
              , X = new Map
              , ee = Symbol();
            function te(e) {
                let r = []
                  , [i,o] = function(e) {
                    let r = () => {}
                    ;
                    return [i => {
                        let o = t(i);
                        return e._x_effects || (e._x_effects = new Set,
                        e._x_runEffects = () => {
                            e._x_effects.forEach((e => e()))
                        }
                        ),
                        e._x_effects.add(o),
                        r = () => {
                            void 0 !== o && (e._x_effects.delete(o),
                            n(o))
                        }
                        ,
                        o
                    }
                    , () => {
                        r()
                    }
                    ]
                }(e);
                r.push(o);
                return [{
                    Alpine: Fe,
                    effect: i,
                    cleanup: e => r.push(e),
                    evaluateLater: B.bind(B, e),
                    evaluate: K.bind(K, e)
                }, () => r.forEach((e => e()))]
            }
            var ne = (e, t) => ({name: n, value: r}) => (n.startsWith(e) && (n = n.replace(e, t)),
            {
                name: n,
                value: r
            });
            function re(e=( () => {}
            )) {
                return ({name: t, value: n}) => {
                    let {name: r, value: i} = ie.reduce(( (e, t) => t(e)), {
                        name: t,
                        value: n
                    });
                    return r !== t && e(r, t),
                    {
                        name: r,
                        value: i
                    }
                }
            }
            var ie = [];
            function oe(e) {
                ie.push(e)
            }
            function ae({name: e}) {
                return se().test(e)
            }
            var se = () => new RegExp(`^${G}([^:^.]+)\\b`);
            var le = "DEFAULT"
              , ue = ["ignore", "ref", "data", "id", "bind", "init", "for", "mask", "model", "modelable", "transition", "show", "if", le, "teleport", "element"];
            function ce(e, t) {
                let n = -1 === ue.indexOf(e.type) ? le : e.type
                  , r = -1 === ue.indexOf(t.type) ? le : t.type;
                return ue.indexOf(n) - ue.indexOf(r)
            }
            function fe(e, t, n={}) {
                e.dispatchEvent(new CustomEvent(t,{
                    detail: n,
                    bubbles: !0,
                    composed: !0,
                    cancelable: !0
                }))
            }
            var de = []
              , pe = !1;
            function he(e=( () => {}
            )) {
                return queueMicrotask(( () => {
                    pe || setTimeout(( () => {
                        _e()
                    }
                    ))
                }
                )),
                new Promise((t => {
                    de.push(( () => {
                        e(),
                        t()
                    }
                    ))
                }
                ))
            }
            function _e() {
                for (pe = !1; de.length; )
                    de.shift()()
            }
            function ge(e, t) {
                if ("function" == typeof ShadowRoot && e instanceof ShadowRoot)
                    return void Array.from(e.children).forEach((e => ge(e, t)));
                let n = !1;
                if (t(e, ( () => n = !0)),
                n)
                    return;
                let r = e.firstElementChild;
                for (; r; )
                    ge(r, t),
                    r = r.nextElementSibling
            }
            function me(e, ...t) {
                console.warn(`Alpine Warning: ${e}`, ...t)
            }
            var ve = []
              , we = [];
            function ye() {
                return ve.map((e => e()))
            }
            function be() {
                return ve.concat(we).map((e => e()))
            }
            function xe(e) {
                ve.push(e)
            }
            function Ee(e) {
                we.push(e)
            }
            function Ae(e, t=!1) {
                return Se(e, (e => {
                    if ((t ? be() : ye()).some((t => e.matches(t))))
                        return !0
                }
                ))
            }
            function Se(e, t) {
                if (e) {
                    if (t(e))
                        return e;
                    if (e._x_teleportBack && (e = e._x_teleportBack),
                    e.parentElement)
                        return Se(e.parentElement, t)
                }
            }
            function Ce(e, t=ge) {
                !function(e) {
                    J = !0;
                    let t = Symbol();
                    ee = t,
                    X.set(t, []);
                    let n = () => {
                        for (; X.get(t).length; )
                            X.get(t).shift()();
                        X.delete(t)
                    }
                    ;
                    e(n),
                    J = !1,
                    n()
                }(( () => {
                    t(e, ( (e, t) => {
                        Y(e, e.attributes).forEach((e => e())),
                        e._x_ignore && t()
                    }
                    ))
                }
                ))
            }
            function ke(e, t) {
                return Array.isArray(t) ? Oe(e, t.join(" ")) : "object" == typeof t && null !== t ? function(e, t) {
                    let n = e => e.split(" ").filter(Boolean)
                      , r = Object.entries(t).flatMap(( ([e,t]) => !!t && n(e))).filter(Boolean)
                      , i = Object.entries(t).flatMap(( ([e,t]) => !t && n(e))).filter(Boolean)
                      , o = []
                      , a = [];
                    return i.forEach((t => {
                        e.classList.contains(t) && (e.classList.remove(t),
                        a.push(t))
                    }
                    )),
                    r.forEach((t => {
                        e.classList.contains(t) || (e.classList.add(t),
                        o.push(t))
                    }
                    )),
                    () => {
                        a.forEach((t => e.classList.add(t))),
                        o.forEach((t => e.classList.remove(t)))
                    }
                }(e, t) : "function" == typeof t ? ke(e, t()) : Oe(e, t)
            }
            function Oe(e, t) {
                return t = !0 === t ? t = "" : t || "",
                n = t.split(" ").filter((t => !e.classList.contains(t))).filter(Boolean),
                e.classList.add(...n),
                () => {
                    e.classList.remove(...n)
                }
                ;
                var n
            }
            function Pe(e, t) {
                return "object" == typeof t && null !== t ? function(e, t) {
                    let n = {};
                    return Object.entries(t).forEach(( ([t,r]) => {
                        n[t] = e.style[t],
                        t.startsWith("--") || (t = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()),
                        e.style.setProperty(t, r)
                    }
                    )),
                    setTimeout(( () => {
                        0 === e.style.length && e.removeAttribute("style")
                    }
                    )),
                    () => {
                        Pe(e, n)
                    }
                }(e, t) : function(e, t) {
                    let n = e.getAttribute("style", t);
                    return e.setAttribute("style", t),
                    () => {
                        e.setAttribute("style", n || "")
                    }
                }(e, t)
            }
            function Le(e, t=( () => {}
            )) {
                let n = !1;
                return function() {
                    n ? t.apply(this, arguments) : (n = !0,
                    e.apply(this, arguments))
                }
            }
            function Te(e, t, n={}) {
                e._x_transition || (e._x_transition = {
                    enter: {
                        during: n,
                        start: n,
                        end: n
                    },
                    leave: {
                        during: n,
                        start: n,
                        end: n
                    },
                    in(n=( () => {}
                    ), r=( () => {}
                    )) {
                        Re(e, t, {
                            during: this.enter.during,
                            start: this.enter.start,
                            end: this.enter.end
                        }, n, r)
                    },
                    out(n=( () => {}
                    ), r=( () => {}
                    )) {
                        Re(e, t, {
                            during: this.leave.during,
                            start: this.leave.start,
                            end: this.leave.end
                        }, n, r)
                    }
                })
            }
            function je(e) {
                let t = e.parentNode;
                if (t)
                    return t._x_hidePromise ? t : je(t)
            }
            function Re(e, t, {during: n, start: r, end: i}={}, o=( () => {}
            ), a=( () => {}
            )) {
                if (e._x_transitioning && e._x_transitioning.cancel(),
                0 === Object.keys(n).length && 0 === Object.keys(r).length && 0 === Object.keys(i).length)
                    return o(),
                    void a();
                let s, l, u;
                !function(e, t) {
                    let n, r, i, o = Le(( () => {
                        E(( () => {
                            n = !0,
                            r || t.before(),
                            i || (t.end(),
                            _e()),
                            t.after(),
                            e.isConnected && t.cleanup(),
                            delete e._x_transitioning
                        }
                        ))
                    }
                    ));
                    e._x_transitioning = {
                        beforeCancels: [],
                        beforeCancel(e) {
                            this.beforeCancels.push(e)
                        },
                        cancel: Le((function() {
                            for (; this.beforeCancels.length; )
                                this.beforeCancels.shift()();
                            o()
                        }
                        )),
                        finish: o
                    },
                    E(( () => {
                        t.start(),
                        t.during()
                    }
                    )),
                    pe = !0,
                    requestAnimationFrame(( () => {
                        if (n)
                            return;
                        let o = 1e3 * Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", ""))
                          , a = 1e3 * Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", ""));
                        0 === o && (o = 1e3 * Number(getComputedStyle(e).animationDuration.replace("s", ""))),
                        E(( () => {
                            t.before()
                        }
                        )),
                        r = !0,
                        requestAnimationFrame(( () => {
                            n || (E(( () => {
                                t.end()
                            }
                            )),
                            _e(),
                            setTimeout(e._x_transitioning.finish, o + a),
                            i = !0)
                        }
                        ))
                    }
                    ))
                }(e, {
                    start() {
                        s = t(e, r)
                    },
                    during() {
                        l = t(e, n)
                    },
                    before: o,
                    end() {
                        s(),
                        u = t(e, i)
                    },
                    after: a,
                    cleanup() {
                        l(),
                        u()
                    }
                })
            }
            function Ne(e, t, n) {
                if (-1 === e.indexOf(t))
                    return n;
                const r = e[e.indexOf(t) + 1];
                if (!r)
                    return n;
                if ("scale" === t && isNaN(r))
                    return n;
                if ("duration" === t) {
                    let e = r.match(/([0-9]+)ms/);
                    if (e)
                        return e[1]
                }
                return "origin" === t && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [r, e[e.indexOf(t) + 2]].join(" ") : r
            }
            Z("transition", ( (e, {value: t, modifiers: n, expression: r}, {evaluate: i}) => {
                "function" == typeof r && (r = i(r)),
                r ? function(e, t, n) {
                    Te(e, ke, ""),
                    {
                        enter: t => {
                            e._x_transition.enter.during = t
                        }
                        ,
                        "enter-start": t => {
                            e._x_transition.enter.start = t
                        }
                        ,
                        "enter-end": t => {
                            e._x_transition.enter.end = t
                        }
                        ,
                        leave: t => {
                            e._x_transition.leave.during = t
                        }
                        ,
                        "leave-start": t => {
                            e._x_transition.leave.start = t
                        }
                        ,
                        "leave-end": t => {
                            e._x_transition.leave.end = t
                        }
                    }[n](t)
                }(e, r, t) : function(e, t, n) {
                    Te(e, Pe);
                    let r = !t.includes("in") && !t.includes("out") && !n
                      , i = r || t.includes("in") || ["enter"].includes(n)
                      , o = r || t.includes("out") || ["leave"].includes(n);
                    t.includes("in") && !r && (t = t.filter(( (e, n) => n < t.indexOf("out"))));
                    t.includes("out") && !r && (t = t.filter(( (e, n) => n > t.indexOf("out"))));
                    let a = !t.includes("opacity") && !t.includes("scale")
                      , s = a || t.includes("opacity")
                      , l = a || t.includes("scale")
                      , u = s ? 0 : 1
                      , c = l ? Ne(t, "scale", 95) / 100 : 1
                      , f = Ne(t, "delay", 0)
                      , d = Ne(t, "origin", "center")
                      , p = "opacity, transform"
                      , h = Ne(t, "duration", 150) / 1e3
                      , _ = Ne(t, "duration", 75) / 1e3
                      , g = "cubic-bezier(0.4, 0.0, 0.2, 1)";
                    i && (e._x_transition.enter.during = {
                        transformOrigin: d,
                        transitionDelay: f,
                        transitionProperty: p,
                        transitionDuration: `${h}s`,
                        transitionTimingFunction: g
                    },
                    e._x_transition.enter.start = {
                        opacity: u,
                        transform: `scale(${c})`
                    },
                    e._x_transition.enter.end = {
                        opacity: 1,
                        transform: "scale(1)"
                    });
                    o && (e._x_transition.leave.during = {
                        transformOrigin: d,
                        transitionDelay: f,
                        transitionProperty: p,
                        transitionDuration: `${_}s`,
                        transitionTimingFunction: g
                    },
                    e._x_transition.leave.start = {
                        opacity: 1,
                        transform: "scale(1)"
                    },
                    e._x_transition.leave.end = {
                        opacity: u,
                        transform: `scale(${c})`
                    })
                }(e, n, t)
            }
            )),
            window.Element.prototype._x_toggleAndCascadeWithTransitions = function(e, t, n, r) {
                let i = () => {
                    "visible" === document.visibilityState ? requestAnimationFrame(n) : setTimeout(n)
                }
                ;
                t ? e._x_transition && (e._x_transition.enter || e._x_transition.leave) ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length) ? e._x_transition.in(n) : i() : e._x_transition ? e._x_transition.in(n) : i() : (e._x_hidePromise = e._x_transition ? new Promise(( (t, n) => {
                    e._x_transition.out(( () => {}
                    ), ( () => t(r))),
                    e._x_transitioning.beforeCancel(( () => n({
                        isFromCancelledTransition: !0
                    })))
                }
                )) : Promise.resolve(r),
                queueMicrotask(( () => {
                    let t = je(e);
                    t ? (t._x_hideChildren || (t._x_hideChildren = []),
                    t._x_hideChildren.push(e)) : queueMicrotask(( () => {
                        let t = e => {
                            let n = Promise.all([e._x_hidePromise, ...(e._x_hideChildren || []).map(t)]).then(( ([e]) => e()));
                            return delete e._x_hidePromise,
                            delete e._x_hideChildren,
                            n
                        }
                        ;
                        t(e).catch((e => {
                            if (!e.isFromCancelledTransition)
                                throw e
                        }
                        ))
                    }
                    ))
                }
                )))
            }
            ;
            var Ie = !1;
            function $e(e, t=( () => {}
            )) {
                return (...n) => Ie ? t(...n) : e(...n)
            }
            function De(t, n, r, i=[]) {
                switch (t._x_bindings || (t._x_bindings = e({})),
                t._x_bindings[n] = r,
                n = i.includes("camel") ? n.toLowerCase().replace(/-(\w)/g, ( (e, t) => t.toUpperCase())) : n) {
                case "value":
                    !function(e, t) {
                        if ("radio" === e.type)
                            void 0 === e.attributes.value && (e.value = t),
                            window.fromModel && (e.checked = qe(e.value, t));
                        else if ("checkbox" === e.type)
                            Number.isInteger(t) ? e.value = t : Number.isInteger(t) || Array.isArray(t) || "boolean" == typeof t || [null, void 0].includes(t) ? Array.isArray(t) ? e.checked = t.some((t => qe(t, e.value))) : e.checked = !!t : e.value = String(t);
                        else if ("SELECT" === e.tagName)
                            !function(e, t) {
                                const n = [].concat(t).map((e => e + ""));
                                Array.from(e.options).forEach((e => {
                                    e.selected = n.includes(e.value)
                                }
                                ))
                            }(e, t);
                        else {
                            if (e.value === t)
                                return;
                            e.value = t
                        }
                    }(t, r);
                    break;
                case "style":
                    !function(e, t) {
                        e._x_undoAddedStyles && e._x_undoAddedStyles();
                        e._x_undoAddedStyles = Pe(e, t)
                    }(t, r);
                    break;
                case "class":
                    !function(e, t) {
                        e._x_undoAddedClasses && e._x_undoAddedClasses();
                        e._x_undoAddedClasses = ke(e, t)
                    }(t, r);
                    break;
                default:
                    !function(e, t, n) {
                        [null, void 0, !1].includes(n) && function(e) {
                            return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e)
                        }(t) ? e.removeAttribute(t) : (Me(t) && (n = t),
                        function(e, t, n) {
                            e.getAttribute(t) != n && e.setAttribute(t, n)
                        }(e, t, n))
                    }(t, n, r)
                }
            }
            function qe(e, t) {
                return e == t
            }
            function Me(e) {
                return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e)
            }
            function Ue(e, t) {
                var n;
                return function() {
                    var r = this
                      , i = arguments
                      , o = function() {
                        n = null,
                        e.apply(r, i)
                    };
                    clearTimeout(n),
                    n = setTimeout(o, t)
                }
            }
            function Ke(e, t) {
                let n;
                return function() {
                    let r = this
                      , i = arguments;
                    n || (e.apply(r, i),
                    n = !0,
                    setTimeout(( () => n = !1), t))
                }
            }
            var Be = {}
              , Qe = !1;
            var We = {};
            var ze = {};
            var Fe = {
                get reactive() {
                    return e
                },
                get release() {
                    return n
                },
                get effect() {
                    return t
                },
                get raw() {
                    return r
                },
                version: "3.10.0",
                flushAndStopDeferringMutations: function() {
                    A = !1,
                    C(S),
                    S = []
                },
                dontAutoEvaluateFunctions: function(e) {
                    let t = U;
                    U = !1,
                    e(),
                    U = t
                },
                disableEffectScheduling: function(e) {
                    c = !1,
                    e(),
                    c = !0
                },
                setReactivityEngine: function(i) {
                    e = i.reactive,
                    n = i.release,
                    t = e => i.effect(e, {
                        scheduler: e => {
                            c ? s(e) : e()
                        }
                    }),
                    r = i.raw
                },
                closestDataStack: L,
                skipDuringClone: $e,
                addRootSelector: xe,
                addInitSelector: Ee,
                addScopeToNode: O,
                deferMutations: function() {
                    A = !0
                },
                mapAttributes: oe,
                evaluateLater: B,
                setEvaluator: function(e) {
                    Q = e
                },
                mergeProxies: T,
                findClosest: Se,
                closestRoot: Ae,
                interceptor: R,
                transition: Re,
                setStyles: Pe,
                mutateDom: E,
                directive: Z,
                throttle: Ke,
                debounce: Ue,
                evaluate: K,
                initTree: Ce,
                nextTick: he,
                prefixed: V,
                prefix: function(e) {
                    G = e
                },
                plugin: function(e) {
                    e(Fe)
                },
                magic: $,
                store: function(t, n) {
                    if (Qe || (Be = e(Be),
                    Qe = !0),
                    void 0 === n)
                        return Be[t];
                    Be[t] = n,
                    "object" == typeof n && null !== n && n.hasOwnProperty("init") && "function" == typeof n.init && Be[t].init(),
                    j(Be[t])
                },
                start: function() {
                    var e;
                    document.body || me("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),
                    fe(document, "alpine:init"),
                    fe(document, "alpine:initializing"),
                    w(),
                    e = e => Ce(e, ge),
                    h.push(e),
                    _((e => {
                        ge(e, (e => g(e)))
                    }
                    )),
                    function(e) {
                        d.push(e)
                    }(( (e, t) => {
                        Y(e, t).forEach((e => e()))
                    }
                    )),
                    Array.from(document.querySelectorAll(be())).filter((e => !Ae(e.parentElement, !0))).forEach((e => {
                        Ce(e)
                    }
                    )),
                    fe(document, "alpine:initialized")
                },
                clone: function(e, r) {
                    r._x_dataStack || (r._x_dataStack = e._x_dataStack),
                    Ie = !0,
                    function(e) {
                        let r = t;
                        f(( (e, t) => {
                            let i = r(e);
                            return n(i),
                            () => {}
                        }
                        )),
                        e(),
                        f(r)
                    }(( () => {
                        !function(e) {
                            let t = !1;
                            Ce(e, ( (e, n) => {
                                ge(e, ( (e, r) => {
                                    if (t && function(e) {
                                        return ye().some((t => e.matches(t)))
                                    }(e))
                                        return r();
                                    t = !0,
                                    n(e, r)
                                }
                                ))
                            }
                            ))
                        }(r)
                    }
                    )),
                    Ie = !1
                },
                bound: function(e, t, n) {
                    if (e._x_bindings && void 0 !== e._x_bindings[t])
                        return e._x_bindings[t];
                    let r = e.getAttribute(t);
                    return null === r ? "function" == typeof n ? n() : n : Me(t) ? !![t, "true"].includes(r) : "" === r || r
                },
                $data: k,
                data: function(e, t) {
                    ze[e] = t
                },
                bind: function(e, t) {
                    We[e] = "function" != typeof t ? () => t : t
                }
            };
            function Ge(e, t) {
                const n = Object.create(null)
                  , r = e.split(",");
                for (let e = 0; e < r.length; e++)
                    n[r[e]] = !0;
                return t ? e => !!n[e.toLowerCase()] : e => !!n[e]
            }
            var Ve, He = {}, Ze = Object.assign, Ye = Object.prototype.hasOwnProperty, Je = (e, t) => Ye.call(e, t), Xe = Array.isArray, et = e => "[object Map]" === it(e), tt = e => "symbol" == typeof e, nt = e => null !== e && "object" == typeof e, rt = Object.prototype.toString, it = e => rt.call(e), ot = e => "string" == typeof e && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e, at = e => {
                const t = Object.create(null);
                return n => t[n] || (t[n] = e(n))
            }
            , st = /-(\w)/g, lt = (at((e => e.replace(st, ( (e, t) => t ? t.toUpperCase() : "")))),
            /\B([A-Z])/g), ut = (at((e => e.replace(lt, "-$1").toLowerCase())),
            at((e => e.charAt(0).toUpperCase() + e.slice(1)))), ct = (at((e => e ? `on${ut(e)}` : "")),
            (e, t) => e !== t && (e == e || t == t)), ft = new WeakMap, dt = [], pt = Symbol(""), ht = Symbol("");
            var _t = 0;
            function gt(e) {
                const {deps: t} = e;
                if (t.length) {
                    for (let n = 0; n < t.length; n++)
                        t[n].delete(e);
                    t.length = 0
                }
            }
            var mt = !0
              , vt = [];
            function wt() {
                const e = vt.pop();
                mt = void 0 === e || e
            }
            function yt(e, t, n) {
                if (!mt || void 0 === Ve)
                    return;
                let r = ft.get(e);
                r || ft.set(e, r = new Map);
                let i = r.get(n);
                i || r.set(n, i = new Set),
                i.has(Ve) || (i.add(Ve),
                Ve.deps.push(i))
            }
            function bt(e, t, n, r, i, o) {
                const a = ft.get(e);
                if (!a)
                    return;
                const s = new Set
                  , l = e => {
                    e && e.forEach((e => {
                        (e !== Ve || e.allowRecurse) && s.add(e)
                    }
                    ))
                }
                ;
                if ("clear" === t)
                    a.forEach(l);
                else if ("length" === n && Xe(e))
                    a.forEach(( (e, t) => {
                        ("length" === t || t >= r) && l(e)
                    }
                    ));
                else
                    switch (void 0 !== n && l(a.get(n)),
                    t) {
                    case "add":
                        Xe(e) ? ot(n) && l(a.get("length")) : (l(a.get(pt)),
                        et(e) && l(a.get(ht)));
                        break;
                    case "delete":
                        Xe(e) || (l(a.get(pt)),
                        et(e) && l(a.get(ht)));
                        break;
                    case "set":
                        et(e) && l(a.get(pt))
                    }
                s.forEach((e => {
                    e.options.scheduler ? e.options.scheduler(e) : e()
                }
                ))
            }
            var xt = Ge("__proto__,__v_isRef,__isVue")
              , Et = new Set(Object.getOwnPropertyNames(Symbol).map((e => Symbol[e])).filter(tt))
              , At = Pt()
              , St = Pt(!1, !0)
              , Ct = Pt(!0)
              , kt = Pt(!0, !0)
              , Ot = {};
            function Pt(e=!1, t=!1) {
                return function(n, r, i) {
                    if ("__v_isReactive" === r)
                        return !e;
                    if ("__v_isReadonly" === r)
                        return e;
                    if ("__v_raw" === r && i === (e ? t ? rn : nn : t ? tn : en).get(n))
                        return n;
                    const o = Xe(n);
                    if (!e && o && Je(Ot, r))
                        return Reflect.get(Ot, r, i);
                    const a = Reflect.get(n, r, i);
                    if (tt(r) ? Et.has(r) : xt(r))
                        return a;
                    if (e || yt(n, 0, r),
                    t)
                        return a;
                    if (cn(a)) {
                        return !o || !ot(r) ? a.value : a
                    }
                    return nt(a) ? e ? sn(a) : an(a) : a
                }
            }
            function Lt(e=!1) {
                return function(t, n, r, i) {
                    let o = t[n];
                    if (!e && (r = un(r),
                    o = un(o),
                    !Xe(t) && cn(o) && !cn(r)))
                        return o.value = r,
                        !0;
                    const a = Xe(t) && ot(n) ? Number(n) < t.length : Je(t, n)
                      , s = Reflect.set(t, n, r, i);
                    return t === un(i) && (a ? ct(r, o) && bt(t, "set", n, r) : bt(t, "add", n, r)),
                    s
                }
            }
            ["includes", "indexOf", "lastIndexOf"].forEach((e => {
                const t = Array.prototype[e];
                Ot[e] = function(...e) {
                    const n = un(this);
                    for (let e = 0, t = this.length; e < t; e++)
                        yt(n, 0, e + "");
                    const r = t.apply(n, e);
                    return -1 === r || !1 === r ? t.apply(n, e.map(un)) : r
                }
            }
            )),
            ["push", "pop", "shift", "unshift", "splice"].forEach((e => {
                const t = Array.prototype[e];
                Ot[e] = function(...e) {
                    vt.push(mt),
                    mt = !1;
                    const n = t.apply(this, e);
                    return wt(),
                    n
                }
            }
            ));
            var Tt = {
                get: At,
                set: Lt(),
                deleteProperty: function(e, t) {
                    const n = Je(e, t)
                      , r = (e[t],
                    Reflect.deleteProperty(e, t));
                    return r && n && bt(e, "delete", t, void 0),
                    r
                },
                has: function(e, t) {
                    const n = Reflect.has(e, t);
                    return tt(t) && Et.has(t) || yt(e, 0, t),
                    n
                },
                ownKeys: function(e) {
                    return yt(e, 0, Xe(e) ? "length" : pt),
                    Reflect.ownKeys(e)
                }
            }
              , jt = {
                get: Ct,
                set: (e, t) => !0,
                deleteProperty: (e, t) => !0
            }
              , Rt = (Ze({}, Tt, {
                get: St,
                set: Lt(!0)
            }),
            Ze({}, jt, {
                get: kt
            }),
            e => nt(e) ? an(e) : e)
              , Nt = e => nt(e) ? sn(e) : e
              , It = e => e
              , $t = e => Reflect.getPrototypeOf(e);
            function Dt(e, t, n=!1, r=!1) {
                const i = un(e = e.__v_raw)
                  , o = un(t);
                t !== o && !n && yt(i, 0, t),
                !n && yt(i, 0, o);
                const {has: a} = $t(i)
                  , s = r ? It : n ? Nt : Rt;
                return a.call(i, t) ? s(e.get(t)) : a.call(i, o) ? s(e.get(o)) : void (e !== i && e.get(t))
            }
            function qt(e, t=!1) {
                const n = this.__v_raw
                  , r = un(n)
                  , i = un(e);
                return e !== i && !t && yt(r, 0, e),
                !t && yt(r, 0, i),
                e === i ? n.has(e) : n.has(e) || n.has(i)
            }
            function Mt(e, t=!1) {
                return e = e.__v_raw,
                !t && yt(un(e), 0, pt),
                Reflect.get(e, "size", e)
            }
            function Ut(e) {
                e = un(e);
                const t = un(this);
                return $t(t).has.call(t, e) || (t.add(e),
                bt(t, "add", e, e)),
                this
            }
            function Kt(e, t) {
                t = un(t);
                const n = un(this)
                  , {has: r, get: i} = $t(n);
                let o = r.call(n, e);
                o || (e = un(e),
                o = r.call(n, e));
                const a = i.call(n, e);
                return n.set(e, t),
                o ? ct(t, a) && bt(n, "set", e, t) : bt(n, "add", e, t),
                this
            }
            function Bt(e) {
                const t = un(this)
                  , {has: n, get: r} = $t(t);
                let i = n.call(t, e);
                i || (e = un(e),
                i = n.call(t, e));
                r && r.call(t, e);
                const o = t.delete(e);
                return i && bt(t, "delete", e, void 0),
                o
            }
            function Qt() {
                const e = un(this)
                  , t = 0 !== e.size
                  , n = e.clear();
                return t && bt(e, "clear", void 0, void 0),
                n
            }
            function Wt(e, t) {
                return function(n, r) {
                    const i = this
                      , o = i.__v_raw
                      , a = un(o)
                      , s = t ? It : e ? Nt : Rt;
                    return !e && yt(a, 0, pt),
                    o.forEach(( (e, t) => n.call(r, s(e), s(t), i)))
                }
            }
            function zt(e, t, n) {
                return function(...r) {
                    const i = this.__v_raw
                      , o = un(i)
                      , a = et(o)
                      , s = "entries" === e || e === Symbol.iterator && a
                      , l = "keys" === e && a
                      , u = i[e](...r)
                      , c = n ? It : t ? Nt : Rt;
                    return !t && yt(o, 0, l ? ht : pt),
                    {
                        next() {
                            const {value: e, done: t} = u.next();
                            return t ? {
                                value: e,
                                done: t
                            } : {
                                value: s ? [c(e[0]), c(e[1])] : c(e),
                                done: t
                            }
                        },
                        [Symbol.iterator]() {
                            return this
                        }
                    }
                }
            }
            function Ft(e) {
                return function(...t) {
                    return "delete" !== e && this
                }
            }
            var Gt = {
                get(e) {
                    return Dt(this, e)
                },
                get size() {
                    return Mt(this)
                },
                has: qt,
                add: Ut,
                set: Kt,
                delete: Bt,
                clear: Qt,
                forEach: Wt(!1, !1)
            }
              , Vt = {
                get(e) {
                    return Dt(this, e, !1, !0)
                },
                get size() {
                    return Mt(this)
                },
                has: qt,
                add: Ut,
                set: Kt,
                delete: Bt,
                clear: Qt,
                forEach: Wt(!1, !0)
            }
              , Ht = {
                get(e) {
                    return Dt(this, e, !0)
                },
                get size() {
                    return Mt(this, !0)
                },
                has(e) {
                    return qt.call(this, e, !0)
                },
                add: Ft("add"),
                set: Ft("set"),
                delete: Ft("delete"),
                clear: Ft("clear"),
                forEach: Wt(!0, !1)
            }
              , Zt = {
                get(e) {
                    return Dt(this, e, !0, !0)
                },
                get size() {
                    return Mt(this, !0)
                },
                has(e) {
                    return qt.call(this, e, !0)
                },
                add: Ft("add"),
                set: Ft("set"),
                delete: Ft("delete"),
                clear: Ft("clear"),
                forEach: Wt(!0, !0)
            };
            function Yt(e, t) {
                const n = t ? e ? Zt : Vt : e ? Ht : Gt;
                return (t, r, i) => "__v_isReactive" === r ? !e : "__v_isReadonly" === r ? e : "__v_raw" === r ? t : Reflect.get(Je(n, r) && r in t ? n : t, r, i)
            }
            ["keys", "values", "entries", Symbol.iterator].forEach((e => {
                Gt[e] = zt(e, !1, !1),
                Ht[e] = zt(e, !0, !1),
                Vt[e] = zt(e, !1, !0),
                Zt[e] = zt(e, !0, !0)
            }
            ));
            var Jt = {
                get: Yt(!1, !1)
            }
              , Xt = (Yt(!1, !0),
            {
                get: Yt(!0, !1)
            })
              , en = (Yt(!0, !0),
            new WeakMap)
              , tn = new WeakMap
              , nn = new WeakMap
              , rn = new WeakMap;
            function on(e) {
                return e.__v_skip || !Object.isExtensible(e) ? 0 : function(e) {
                    switch (e) {
                    case "Object":
                    case "Array":
                        return 1;
                    case "Map":
                    case "Set":
                    case "WeakMap":
                    case "WeakSet":
                        return 2;
                    default:
                        return 0
                    }
                }((e => it(e).slice(8, -1))(e))
            }
            function an(e) {
                return e && e.__v_isReadonly ? e : ln(e, !1, Tt, Jt, en)
            }
            function sn(e) {
                return ln(e, !0, jt, Xt, nn)
            }
            function ln(e, t, n, r, i) {
                if (!nt(e))
                    return e;
                if (e.__v_raw && (!t || !e.__v_isReactive))
                    return e;
                const o = i.get(e);
                if (o)
                    return o;
                const a = on(e);
                if (0 === a)
                    return e;
                const s = new Proxy(e,2 === a ? r : n);
                return i.set(e, s),
                s
            }
            function un(e) {
                return e && un(e.__v_raw) || e
            }
            function cn(e) {
                return Boolean(e && !0 === e.__v_isRef)
            }
            $("nextTick", ( () => he)),
            $("dispatch", (e => fe.bind(fe, e))),
            $("watch", ( (e, {evaluateLater: t, effect: n}) => (r, i) => {
                let o, a = t(r), s = !0, l = n(( () => a((e => {
                    JSON.stringify(e),
                    s ? o = e : queueMicrotask(( () => {
                        i(e, o),
                        o = e
                    }
                    )),
                    s = !1
                }
                ))));
                e._x_effects.delete(l)
            }
            )),
            $("store", (function() {
                return Be
            }
            )),
            $("data", (e => k(e))),
            $("root", (e => Ae(e))),
            $("refs", (e => (e._x_refs_proxy || (e._x_refs_proxy = T(function(e) {
                let t = []
                  , n = e;
                for (; n; )
                    n._x_refs && t.push(n._x_refs),
                    n = n.parentNode;
                return t
            }(e))),
            e._x_refs_proxy)));
            var fn = {};
            function dn(e) {
                return fn[e] || (fn[e] = 0),
                ++fn[e]
            }
            function pn(e, t, n) {
                $(t, (t => me(`You can't use [$${directiveName}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`, t)))
            }
            $("id", (e => (t, n=null) => {
                let r = function(e, t) {
                    return Se(e, (e => {
                        if (e._x_ids && e._x_ids[t])
                            return !0
                    }
                    ))
                }(e, t)
                  , i = r ? r._x_ids[t] : dn(t);
                return n ? `${t}-${i}-${n}` : `${t}-${i}`
            }
            )),
            $("el", (e => e)),
            pn("Focus", "focus", "focus"),
            pn("Persist", "persist", "persist"),
            Z("modelable", ( (e, {expression: t}, {effect: n, evaluateLater: r}) => {
                let i = r(t)
                  , o = () => {
                    let e;
                    return i((t => e = t)),
                    e
                }
                  , a = r(`${t} = __placeholder`)
                  , s = e => a(( () => {}
                ), {
                    scope: {
                        __placeholder: e
                    }
                })
                  , l = o();
                s(l),
                queueMicrotask(( () => {
                    if (!e._x_model)
                        return;
                    e._x_removeModelListeners.default();
                    let t = e._x_model.get
                      , r = e._x_model.set;
                    n(( () => s(t()))),
                    n(( () => r(o())))
                }
                ))
            }
            )),
            Z("teleport", ( (e, {expression: t}, {cleanup: n}) => {
                "template" !== e.tagName.toLowerCase() && me("x-teleport can only be used on a <template> tag", e);
                let r = document.querySelector(t);
                r || me(`Cannot find x-teleport element for selector: "${t}"`);
                let i = e.content.cloneNode(!0).firstElementChild;
                e._x_teleport = i,
                i._x_teleportBack = e,
                e._x_forwardEvents && e._x_forwardEvents.forEach((t => {
                    i.addEventListener(t, (t => {
                        t.stopPropagation(),
                        e.dispatchEvent(new t.constructor(t.type,t))
                    }
                    ))
                }
                )),
                O(i, {}, e),
                E(( () => {
                    r.appendChild(i),
                    Ce(i),
                    i._x_ignore = !0
                }
                )),
                n(( () => i.remove()))
            }
            ));
            var hn = () => {}
            ;
            function _n(e, t, n, r) {
                let i = e
                  , o = e => r(e)
                  , a = {}
                  , s = (e, t) => n => t(e, n);
                if (n.includes("dot") && (t = t.replace(/-/g, ".")),
                n.includes("camel") && (t = function(e) {
                    return e.toLowerCase().replace(/-(\w)/g, ( (e, t) => t.toUpperCase()))
                }(t)),
                n.includes("passive") && (a.passive = !0),
                n.includes("capture") && (a.capture = !0),
                n.includes("window") && (i = window),
                n.includes("document") && (i = document),
                n.includes("prevent") && (o = s(o, ( (e, t) => {
                    t.preventDefault(),
                    e(t)
                }
                ))),
                n.includes("stop") && (o = s(o, ( (e, t) => {
                    t.stopPropagation(),
                    e(t)
                }
                ))),
                n.includes("self") && (o = s(o, ( (t, n) => {
                    n.target === e && t(n)
                }
                ))),
                (n.includes("away") || n.includes("outside")) && (i = document,
                o = s(o, ( (t, n) => {
                    e.contains(n.target) || !1 !== n.target.isConnected && (e.offsetWidth < 1 && e.offsetHeight < 1 || !1 !== e._x_isShown && t(n))
                }
                ))),
                n.includes("once") && (o = s(o, ( (e, n) => {
                    e(n),
                    i.removeEventListener(t, o, a)
                }
                ))),
                o = s(o, ( (e, r) => {
                    (function(e) {
                        return ["keydown", "keyup"].includes(e)
                    }
                    )(t) && function(e, t) {
                        let n = t.filter((e => !["window", "document", "prevent", "stop", "once"].includes(e)));
                        if (n.includes("debounce")) {
                            let e = n.indexOf("debounce");
                            n.splice(e, gn((n[e + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
                        }
                        if (0 === n.length)
                            return !1;
                        if (1 === n.length && mn(e.key).includes(n[0]))
                            return !1;
                        const r = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((e => n.includes(e)));
                        if (n = n.filter((e => !r.includes(e))),
                        r.length > 0) {
                            if (r.filter((t => ("cmd" !== t && "super" !== t || (t = "meta"),
                            e[`${t}Key`]))).length === r.length && mn(e.key).includes(n[0]))
                                return !1
                        }
                        return !0
                    }(r, n) || e(r)
                }
                )),
                n.includes("debounce")) {
                    let e = n[n.indexOf("debounce") + 1] || "invalid-wait"
                      , t = gn(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
                    o = Ue(o, t)
                }
                if (n.includes("throttle")) {
                    let e = n[n.indexOf("throttle") + 1] || "invalid-wait"
                      , t = gn(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
                    o = Ke(o, t)
                }
                return i.addEventListener(t, o, a),
                () => {
                    i.removeEventListener(t, o, a)
                }
            }
            function gn(e) {
                return !Array.isArray(e) && !isNaN(e)
            }
            function mn(e) {
                if (!e)
                    return [];
                e = e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
                let t = {
                    ctrl: "control",
                    slash: "/",
                    space: "-",
                    spacebar: "-",
                    cmd: "meta",
                    esc: "escape",
                    up: "arrow-up",
                    down: "arrow-down",
                    left: "arrow-left",
                    right: "arrow-right",
                    period: ".",
                    equal: "="
                };
                return t[e] = e,
                Object.keys(t).map((n => {
                    if (t[n] === e)
                        return n
                }
                )).filter((e => e))
            }
            function vn(e) {
                let t = e ? parseFloat(e) : null;
                return n = t,
                Array.isArray(n) || isNaN(n) ? e : t;
                var n
            }
            function wn(e, t, n, r) {
                let i = {};
                if (/^\[.*\]$/.test(e.item) && Array.isArray(t)) {
                    e.item.replace("[", "").replace("]", "").split(",").map((e => e.trim())).forEach(( (e, n) => {
                        i[e] = t[n]
                    }
                    ))
                } else if (/^\{.*\}$/.test(e.item) && !Array.isArray(t) && "object" == typeof t) {
                    e.item.replace("{", "").replace("}", "").split(",").map((e => e.trim())).forEach((e => {
                        i[e] = t[e]
                    }
                    ))
                } else
                    i[e.item] = t;
                return e.index && (i[e.index] = n),
                e.collection && (i[e.collection] = r),
                i
            }
            function yn() {}
            function bn(e, t, n) {
                Z(t, (r => me(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`, r)))
            }
            hn.inline = (e, {modifiers: t}, {cleanup: n}) => {
                t.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0,
                n(( () => {
                    t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore
                }
                ))
            }
            ,
            Z("ignore", hn),
            Z("effect", ( (e, {expression: t}, {effect: n}) => n(B(e, t)))),
            Z("model", ( (e, {modifiers: t, expression: n}, {effect: r, cleanup: i}) => {
                let o = B(e, n)
                  , a = B(e, `${n} = rightSideOfExpression($event, ${n})`);
                var s = "select" === e.tagName.toLowerCase() || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
                let l = function(e, t, n) {
                    "radio" === e.type && E(( () => {
                        e.hasAttribute("name") || e.setAttribute("name", n)
                    }
                    ));
                    return (n, r) => E(( () => {
                        if (n instanceof CustomEvent && void 0 !== n.detail)
                            return n.detail || n.target.value;
                        if ("checkbox" === e.type) {
                            if (Array.isArray(r)) {
                                let e = t.includes("number") ? vn(n.target.value) : n.target.value;
                                return n.target.checked ? r.concat([e]) : r.filter((t => !(t == e)))
                            }
                            return n.target.checked
                        }
                        if ("select" === e.tagName.toLowerCase() && e.multiple)
                            return t.includes("number") ? Array.from(n.target.selectedOptions).map((e => vn(e.value || e.text))) : Array.from(n.target.selectedOptions).map((e => e.value || e.text));
                        {
                            let e = n.target.value;
                            return t.includes("number") ? vn(e) : t.includes("trim") ? e.trim() : e
                        }
                    }
                    ))
                }(e, t, n)
                  , u = _n(e, s, t, (e => {
                    a(( () => {}
                    ), {
                        scope: {
                            $event: e,
                            rightSideOfExpression: l
                        }
                    })
                }
                ));
                e._x_removeModelListeners || (e._x_removeModelListeners = {}),
                e._x_removeModelListeners.default = u,
                i(( () => e._x_removeModelListeners.default()));
                let c = B(e, `${n} = __placeholder`);
                e._x_model = {
                    get() {
                        let e;
                        return o((t => e = t)),
                        e
                    },
                    set(e) {
                        c(( () => {}
                        ), {
                            scope: {
                                __placeholder: e
                            }
                        })
                    }
                },
                e._x_forceModelUpdate = () => {
                    o((t => {
                        void 0 === t && n.match(/\./) && (t = ""),
                        window.fromModel = !0,
                        E(( () => De(e, "value", t))),
                        delete window.fromModel
                    }
                    ))
                }
                ,
                r(( () => {
                    t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate()
                }
                ))
            }
            )),
            Z("cloak", (e => queueMicrotask(( () => E(( () => e.removeAttribute(V("cloak")))))))),
            Ee(( () => `[${V("init")}]`)),
            Z("init", $e(( (e, {expression: t}, {evaluate: n}) => "string" == typeof t ? !!t.trim() && n(t, {}, !1) : n(t, {}, !1)))),
            Z("text", ( (e, {expression: t}, {effect: n, evaluateLater: r}) => {
                let i = r(t);
                n(( () => {
                    i((t => {
                        E(( () => {
                            e.textContent = t
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            )),
            Z("html", ( (e, {expression: t}, {effect: n, evaluateLater: r}) => {
                let i = r(t);
                n(( () => {
                    i((t => {
                        E(( () => {
                            e.innerHTML = t,
                            e._x_ignoreSelf = !0,
                            Ce(e),
                            delete e._x_ignoreSelf
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            )),
            oe(ne(":", V("bind:"))),
            Z("bind", ( (e, {value: t, modifiers: n, expression: r, original: i}, {effect: o}) => {
                if (!t)
                    return function(e, t, n, r) {
                        let i = {};
                        o = i,
                        Object.entries(We).forEach(( ([e,t]) => {
                            Object.defineProperty(o, e, {
                                get: () => (...e) => t(...e)
                            })
                        }
                        ));
                        var o;
                        let a = B(e, t)
                          , s = [];
                        for (; s.length; )
                            s.pop()();
                        a((t => {
                            let r = Object.entries(t).map(( ([e,t]) => ({
                                name: e,
                                value: t
                            })))
                              , i = function(e) {
                                return Array.from(e).map(re()).filter((e => !ae(e)))
                            }(r);
                            r = r.map((e => i.find((t => t.name === e.name)) ? {
                                name: `x-bind:${e.name}`,
                                value: `"${e.value}"`
                            } : e)),
                            Y(e, r, n).map((e => {
                                s.push(e.runCleanups),
                                e()
                            }
                            ))
                        }
                        ), {
                            scope: i
                        })
                    }(e, r, i);
                if ("key" === t)
                    return function(e, t) {
                        e._x_keyExpression = t
                    }(e, r);
                let a = B(e, r);
                o(( () => a((i => {
                    void 0 === i && r.match(/\./) && (i = ""),
                    E(( () => De(e, t, i, n)))
                }
                ))))
            }
            )),
            xe(( () => `[${V("data")}]`)),
            Z("data", $e(( (t, {expression: n}, {cleanup: r}) => {
                n = "" === n ? "{}" : n;
                let i = {};
                D(i, t);
                let o = {};
                var a, s;
                a = o,
                s = i,
                Object.entries(ze).forEach(( ([e,t]) => {
                    Object.defineProperty(a, e, {
                        get: () => (...e) => t.bind(s)(...e),
                        enumerable: !1
                    })
                }
                ));
                let l = K(t, n, {
                    scope: o
                });
                void 0 === l && (l = {}),
                D(l, t);
                let u = e(l);
                j(u);
                let c = O(t, u);
                u.init && K(t, u.init),
                r(( () => {
                    u.destroy && K(t, u.destroy),
                    c()
                }
                ))
            }
            ))),
            Z("show", ( (e, {modifiers: t, expression: n}, {effect: r}) => {
                let i = B(e, n);
                e._x_doHide || (e._x_doHide = () => {
                    E(( () => e.style.display = "none"))
                }
                ),
                e._x_doShow || (e._x_doShow = () => {
                    E(( () => {
                        1 === e.style.length && "none" === e.style.display ? e.removeAttribute("style") : e.style.removeProperty("display")
                    }
                    ))
                }
                );
                let o, a = () => {
                    e._x_doHide(),
                    e._x_isShown = !1
                }
                , s = () => {
                    e._x_doShow(),
                    e._x_isShown = !0
                }
                , l = () => setTimeout(s), u = Le((e => e ? s() : a()), (t => {
                    "function" == typeof e._x_toggleAndCascadeWithTransitions ? e._x_toggleAndCascadeWithTransitions(e, t, s, a) : t ? l() : a()
                }
                )), c = !0;
                r(( () => i((e => {
                    (c || e !== o) && (t.includes("immediate") && (e ? l() : a()),
                    u(e),
                    o = e,
                    c = !1)
                }
                ))))
            }
            )),
            Z("for", ( (t, {expression: n}, {effect: r, cleanup: i}) => {
                let o = function(e) {
                    let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
                      , n = /^\s*\(|\)\s*$/g
                      , r = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
                      , i = e.match(r);
                    if (!i)
                        return;
                    let o = {};
                    o.items = i[2].trim();
                    let a = i[1].replace(n, "").trim()
                      , s = a.match(t);
                    s ? (o.item = a.replace(t, "").trim(),
                    o.index = s[1].trim(),
                    s[2] && (o.collection = s[2].trim())) : o.item = a;
                    return o
                }(n)
                  , a = B(t, o.items)
                  , s = B(t, t._x_keyExpression || "index");
                t._x_prevKeys = [],
                t._x_lookup = {},
                r(( () => function(t, n, r, i) {
                    let o = e => "object" == typeof e && !Array.isArray(e)
                      , a = t;
                    r((r => {
                        var s;
                        s = r,
                        !Array.isArray(s) && !isNaN(s) && r >= 0 && (r = Array.from(Array(r).keys(), (e => e + 1))),
                        void 0 === r && (r = []);
                        let u = t._x_lookup
                          , c = t._x_prevKeys
                          , f = []
                          , d = [];
                        if (o(r))
                            r = Object.entries(r).map(( ([e,t]) => {
                                let o = wn(n, t, e, r);
                                i((e => d.push(e)), {
                                    scope: {
                                        index: e,
                                        ...o
                                    }
                                }),
                                f.push(o)
                            }
                            ));
                        else
                            for (let e = 0; e < r.length; e++) {
                                let t = wn(n, r[e], e, r);
                                i((e => d.push(e)), {
                                    scope: {
                                        index: e,
                                        ...t
                                    }
                                }),
                                f.push(t)
                            }
                        let p = []
                          , h = []
                          , _ = []
                          , g = [];
                        for (let e = 0; e < c.length; e++) {
                            let t = c[e];
                            -1 === d.indexOf(t) && _.push(t)
                        }
                        c = c.filter((e => !_.includes(e)));
                        let m = "template";
                        for (let e = 0; e < d.length; e++) {
                            let t = d[e]
                              , n = c.indexOf(t);
                            if (-1 === n)
                                c.splice(e, 0, t),
                                p.push([m, e]);
                            else if (n !== e) {
                                let t = c.splice(e, 1)[0]
                                  , r = c.splice(n - 1, 1)[0];
                                c.splice(e, 0, r),
                                c.splice(n, 0, t),
                                h.push([t, r])
                            } else
                                g.push(t);
                            m = t
                        }
                        for (let e = 0; e < _.length; e++) {
                            let t = _[e];
                            u[t]._x_effects && u[t]._x_effects.forEach(l),
                            u[t].remove(),
                            u[t] = null,
                            delete u[t]
                        }
                        for (let e = 0; e < h.length; e++) {
                            let[t,n] = h[e]
                              , r = u[t]
                              , i = u[n]
                              , o = document.createElement("div");
                            E(( () => {
                                i.after(o),
                                r.after(i),
                                i._x_currentIfEl && i.after(i._x_currentIfEl),
                                o.before(r),
                                r._x_currentIfEl && r.after(r._x_currentIfEl),
                                o.remove()
                            }
                            )),
                            P(i, f[d.indexOf(n)])
                        }
                        for (let t = 0; t < p.length; t++) {
                            let[n,r] = p[t]
                              , i = "template" === n ? a : u[n];
                            i._x_currentIfEl && (i = i._x_currentIfEl);
                            let o = f[r]
                              , s = d[r]
                              , l = document.importNode(a.content, !0).firstElementChild;
                            O(l, e(o), a),
                            E(( () => {
                                i.after(l),
                                Ce(l)
                            }
                            )),
                            "object" == typeof s && me("x-for key cannot be an object, it must be a string or an integer", a),
                            u[s] = l
                        }
                        for (let e = 0; e < g.length; e++)
                            P(u[g[e]], f[d.indexOf(g[e])]);
                        a._x_prevKeys = d
                    }
                    ))
                }(t, o, a, s))),
                i(( () => {
                    Object.values(t._x_lookup).forEach((e => e.remove())),
                    delete t._x_prevKeys,
                    delete t._x_lookup
                }
                ))
            }
            )),
            yn.inline = (e, {expression: t}, {cleanup: n}) => {
                let r = Ae(e);
                r._x_refs || (r._x_refs = {}),
                r._x_refs[t] = e,
                n(( () => delete r._x_refs[t]))
            }
            ,
            Z("ref", yn),
            Z("if", ( (e, {expression: t}, {effect: n, cleanup: r}) => {
                let i = B(e, t);
                n(( () => i((t => {
                    t ? ( () => {
                        if (e._x_currentIfEl)
                            return e._x_currentIfEl;
                        let t = e.content.cloneNode(!0).firstElementChild;
                        O(t, {}, e),
                        E(( () => {
                            e.after(t),
                            Ce(t)
                        }
                        )),
                        e._x_currentIfEl = t,
                        e._x_undoIf = () => {
                            ge(t, (e => {
                                e._x_effects && e._x_effects.forEach(l)
                            }
                            )),
                            t.remove(),
                            delete e._x_currentIfEl
                        }
                    }
                    )() : e._x_undoIf && (e._x_undoIf(),
                    delete e._x_undoIf)
                }
                )))),
                r(( () => e._x_undoIf && e._x_undoIf()))
            }
            )),
            Z("id", ( (e, {expression: t}, {evaluate: n}) => {
                n(t).forEach((t => function(e, t) {
                    e._x_ids || (e._x_ids = {}),
                    e._x_ids[t] || (e._x_ids[t] = dn(t))
                }(e, t)))
            }
            )),
            oe(ne("@", V("on:"))),
            Z("on", $e(( (e, {value: t, modifiers: n, expression: r}, {cleanup: i}) => {
                let o = r ? B(e, r) : () => {}
                ;
                "template" === e.tagName.toLowerCase() && (e._x_forwardEvents || (e._x_forwardEvents = []),
                e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
                let a = _n(e, t, n, (e => {
                    o(( () => {}
                    ), {
                        scope: {
                            $event: e
                        },
                        params: [e]
                    })
                }
                ));
                i(( () => a()))
            }
            ))),
            bn("Collapse", "collapse", "collapse"),
            bn("Intersect", "intersect", "intersect"),
            bn("Focus", "trap", "focus"),
            bn("Mask", "mask", "mask"),
            Fe.setEvaluator(W),
            Fe.setReactivityEngine({
                reactive: an,
                effect: function(e, t=He) {
                    (function(e) {
                        return e && !0 === e._isEffect
                    }
                    )(e) && (e = e.raw);
                    const n = function(e, t) {
                        const n = function() {
                            if (!n.active)
                                return e();
                            if (!dt.includes(n)) {
                                gt(n);
                                try {
                                    return vt.push(mt),
                                    mt = !0,
                                    dt.push(n),
                                    Ve = n,
                                    e()
                                } finally {
                                    dt.pop(),
                                    wt(),
                                    Ve = dt[dt.length - 1]
                                }
                            }
                        };
                        return n.id = _t++,
                        n.allowRecurse = !!t.allowRecurse,
                        n._isEffect = !0,
                        n.active = !0,
                        n.raw = e,
                        n.deps = [],
                        n.options = t,
                        n
                    }(e, t);
                    return t.lazy || n(),
                    n
                },
                release: function(e) {
                    e.active && (gt(e),
                    e.options.onStop && e.options.onStop(),
                    e.active = !1)
                },
                raw: un
            });
            var xn = Fe;
            const En = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
              , An = ["1-0", "0-1", "1/2-1/2", "*"]
              , Sn = {
                b: [16, 32, 17, 15],
                w: [-16, -32, -17, -15]
            }
              , Cn = {
                n: [-18, -33, -31, -14, 18, 33, 31, 14],
                b: [-17, -15, 17, 15],
                r: [-16, 1, 16, -1],
                q: [-17, -16, -15, 1, 17, 16, 15, -1],
                k: [-17, -16, -15, 1, 17, 16, 15, -1]
            }
              , kn = [20, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 20, 0, 0, 20, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 24, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 24, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 24, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 24, 2, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 53, 56, 53, 2, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 56, 0, 56, 24, 24, 24, 24, 24, 24, 0, 0, 0, 0, 0, 0, 2, 53, 56, 53, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 24, 2, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 24, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 24, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 24, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 20, 0, 0, 20, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 20]
              , On = [17, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 15, 0, 0, 17, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 17, 0, 0, 0, 0, 16, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 16, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 16, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 16, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 16, 15, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, -15, -16, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, -16, 0, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, 0, -16, 0, 0, -17, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, 0, 0, -16, 0, 0, 0, -17, 0, 0, 0, 0, 0, 0, -15, 0, 0, 0, 0, -16, 0, 0, 0, 0, -17, 0, 0, 0, 0, -15, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, -17, 0, 0, -15, 0, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, 0, -17]
              , Pn = {
                p: 0,
                n: 1,
                b: 2,
                r: 3,
                q: 4,
                k: 5
            }
              , Ln = {
                NORMAL: 1,
                CAPTURE: 2,
                BIG_PAWN: 4,
                EP_CAPTURE: 8,
                PROMOTION: 16,
                KSIDE_CASTLE: 32,
                QSIDE_CASTLE: 64
            }
              , Tn = {
                a8: 0,
                b8: 1,
                c8: 2,
                d8: 3,
                e8: 4,
                f8: 5,
                g8: 6,
                h8: 7,
                a7: 16,
                b7: 17,
                c7: 18,
                d7: 19,
                e7: 20,
                f7: 21,
                g7: 22,
                h7: 23,
                a6: 32,
                b6: 33,
                c6: 34,
                d6: 35,
                e6: 36,
                f6: 37,
                g6: 38,
                h6: 39,
                a5: 48,
                b5: 49,
                c5: 50,
                d5: 51,
                e5: 52,
                f5: 53,
                g5: 54,
                h5: 55,
                a4: 64,
                b4: 65,
                c4: 66,
                d4: 67,
                e4: 68,
                f4: 69,
                g4: 70,
                h4: 71,
                a3: 80,
                b3: 81,
                c3: 82,
                d3: 83,
                e3: 84,
                f3: 85,
                g3: 86,
                h3: 87,
                a2: 96,
                b2: 97,
                c2: 98,
                d2: 99,
                e2: 100,
                f2: 101,
                g2: 102,
                h2: 103,
                a1: 112,
                b1: 113,
                c1: 114,
                d1: 115,
                e1: 116,
                f1: 117,
                g1: 118,
                h1: 119
            }
              , jn = {
                w: [{
                    square: Tn.a1,
                    flag: Ln.QSIDE_CASTLE
                }, {
                    square: Tn.h1,
                    flag: Ln.KSIDE_CASTLE
                }],
                b: [{
                    square: Tn.a8,
                    flag: Ln.QSIDE_CASTLE
                }, {
                    square: Tn.h8,
                    flag: Ln.KSIDE_CASTLE
                }]
            };
            function Rn(e) {
                var t = e.charAt(0);
                if (t >= "a" && t <= "h") {
                    if (e.match(/[a-h]\d.*[a-h]\d/))
                        return;
                    return Wn
                }
                return "o" === (t = t.toLowerCase()) ? Fn : t
            }
            function Nn(e) {
                return e.replace(/=/, "").replace(/[+#]?[?!]*$/, "")
            }
            function In(e) {
                return e >> 4
            }
            function $n(e) {
                return 15 & e
            }
            function Dn(e) {
                var t = $n(e)
                  , n = In(e);
                return "abcdefgh".substring(t, t + 1) + "87654321".substring(n, n + 1)
            }
            function qn(e) {
                return e === Bn ? Kn : Bn
            }
            function Mn(e) {
                var t = e instanceof Array ? [] : {};
                for (var n in e)
                    t[n] = "object" == typeof n ? Mn(e[n]) : e[n];
                return t
            }
            function Un(e) {
                return e.replace(/^\s+|\s+$/g, "")
            }
            const Kn = "b"
              , Bn = "w"
              , Qn = -1
              , Wn = "p"
              , zn = "b"
              , Fn = "k"
              , Gn = (function() {
                for (var e = [], t = Tn.a8; t <= Tn.h1; t++)
                    136 & t ? t += 7 : e.push(Dn(t))
            }(),
            {
                NORMAL: "n",
                CAPTURE: "c",
                BIG_PAWN: "b",
                EP_CAPTURE: "e",
                PROMOTION: "p",
                KSIDE_CASTLE: "k",
                QSIDE_CASTLE: "q"
            })
              , Vn = function(e) {
                var t = new Array(128)
                  , n = {
                    w: Qn,
                    b: Qn
                }
                  , r = Bn
                  , i = {
                    w: 0,
                    b: 0
                }
                  , o = Qn
                  , a = 0
                  , s = 1
                  , l = []
                  , u = {}
                  , c = {};
                function f(e) {
                    void 0 === e && (e = !1),
                    t = new Array(128),
                    n = {
                        w: Qn,
                        b: Qn
                    },
                    r = Bn,
                    i = {
                        w: 0,
                        b: 0
                    },
                    o = Qn,
                    a = 0,
                    s = 1,
                    l = [],
                    e || (u = {}),
                    c = {},
                    v(g())
                }
                function d() {
                    for (var e = [], t = {}, n = function(e) {
                        e in c && (t[e] = c[e])
                    }; l.length > 0; )
                        e.push(j());
                    for (n(g()); e.length > 0; )
                        T(e.pop()),
                        n(g());
                    c = t
                }
                function p() {
                    h(En)
                }
                function h(e, t) {
                    void 0 === t && (t = !1);
                    var n = e.split(/\s+/)
                      , l = n[0]
                      , u = 0;
                    if (!_(e).valid)
                        return !1;
                    f(t);
                    for (var c = 0; c < l.length; c++) {
                        var d = l.charAt(c);
                        if ("/" === d)
                            u += 8;
                        else if (-1 !== "0123456789".indexOf(d))
                            u += parseInt(d, 10);
                        else {
                            var p = d < "a" ? Bn : Kn;
                            y({
                                type: d.toLowerCase(),
                                color: p
                            }, Dn(u)),
                            u++
                        }
                    }
                    return r = n[1],
                    n[2].indexOf("K") > -1 && (i.w |= Ln.KSIDE_CASTLE),
                    n[2].indexOf("Q") > -1 && (i.w |= Ln.QSIDE_CASTLE),
                    n[2].indexOf("k") > -1 && (i.b |= Ln.KSIDE_CASTLE),
                    n[2].indexOf("q") > -1 && (i.b |= Ln.QSIDE_CASTLE),
                    o = "-" === n[3] ? Qn : Tn[n[3]],
                    a = parseInt(n[4], 10),
                    s = parseInt(n[5], 10),
                    v(g()),
                    !0
                }
                function _(e) {
                    var t = "No errors."
                      , n = "FEN string must contain six space-delimited fields."
                      , r = "6th field (move number) must be a positive integer."
                      , i = "5th field (half move counter) must be a non-negative integer."
                      , o = "4th field (en-passant square) is invalid."
                      , a = "3rd field (castling availability) is invalid."
                      , s = "2nd field (side to move) is invalid."
                      , l = "1st field (piece positions) does not contain 8 '/'-delimited rows."
                      , u = "1st field (piece positions) is invalid [consecutive numbers]."
                      , c = "1st field (piece positions) is invalid [invalid piece]."
                      , f = "1st field (piece positions) is invalid [row too large]."
                      , d = "Illegal en-passant square"
                      , p = e.split(/\s+/);
                    if (6 !== p.length)
                        return {
                            valid: !1,
                            error_number: 1,
                            error: n
                        };
                    if (isNaN(p[5]) || parseInt(p[5], 10) <= 0)
                        return {
                            valid: !1,
                            error_number: 2,
                            error: r
                        };
                    if (isNaN(p[4]) || parseInt(p[4], 10) < 0)
                        return {
                            valid: !1,
                            error_number: 3,
                            error: i
                        };
                    if (!/^(-|[abcdefgh][36])$/.test(p[3]))
                        return {
                            valid: !1,
                            error_number: 4,
                            error: o
                        };
                    if (!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(p[2]))
                        return {
                            valid: !1,
                            error_number: 5,
                            error: a
                        };
                    if (!/^(w|b)$/.test(p[1]))
                        return {
                            valid: !1,
                            error_number: 6,
                            error: s
                        };
                    var h = p[0].split("/");
                    if (8 !== h.length)
                        return {
                            valid: !1,
                            error_number: 7,
                            error: l
                        };
                    for (var _ = 0; _ < h.length; _++) {
                        for (var g = 0, m = !1, v = 0; v < h[_].length; v++)
                            if (isNaN(h[_][v])) {
                                if (!/^[prnbqkPRNBQK]$/.test(h[_][v]))
                                    return {
                                        valid: !1,
                                        error_number: 9,
                                        error: c
                                    };
                                g += 1,
                                m = !1
                            } else {
                                if (m)
                                    return {
                                        valid: !1,
                                        error_number: 8,
                                        error: u
                                    };
                                g += parseInt(h[_][v], 10),
                                m = !0
                            }
                        if (8 !== g)
                            return {
                                valid: !1,
                                error_number: 10,
                                error: f
                            }
                    }
                    return "3" == p[3][1] && "w" == p[1] || "6" == p[3][1] && "b" == p[1] ? {
                        valid: !1,
                        error_number: 11,
                        error: d
                    } : {
                        valid: !0,
                        error_number: 0,
                        error: t
                    }
                }
                function g() {
                    for (var e = 0, n = "", l = Tn.a8; l <= Tn.h1; l++) {
                        if (null == t[l])
                            e++;
                        else {
                            e > 0 && (n += e,
                            e = 0);
                            var u = t[l].color
                              , c = t[l].type;
                            n += u === Bn ? c.toUpperCase() : c.toLowerCase()
                        }
                        l + 1 & 136 && (e > 0 && (n += e),
                        l !== Tn.h1 && (n += "/"),
                        e = 0,
                        l += 8)
                    }
                    var f = "";
                    i[Bn] & Ln.KSIDE_CASTLE && (f += "K"),
                    i[Bn] & Ln.QSIDE_CASTLE && (f += "Q"),
                    i[Kn] & Ln.KSIDE_CASTLE && (f += "k"),
                    i[Kn] & Ln.QSIDE_CASTLE && (f += "q"),
                    f = f || "-";
                    var d = o === Qn ? "-" : Dn(o);
                    return [n, r, f, d, a, s].join(" ")
                }
                function m(e) {
                    for (var t = 0; t < e.length; t += 2)
                        "string" == typeof e[t] && "string" == typeof e[t + 1] && (u[e[t]] = e[t + 1]);
                    return u
                }
                function v(e) {
                    l.length > 0 || (e !== En ? (u.SetUp = "1",
                    u.FEN = e) : (delete u.SetUp,
                    delete u.FEN))
                }
                function w(e) {
                    var n = t[Tn[e]];
                    return n ? {
                        type: n.type,
                        color: n.color
                    } : null
                }
                function y(e, r) {
                    if (!("type"in e) || !("color"in e))
                        return !1;
                    if (-1 === "pnbrqkPNBRQK".indexOf(e.type.toLowerCase()))
                        return !1;
                    if (!(r in Tn))
                        return !1;
                    var i = Tn[r];
                    return (e.type != Fn || n[e.color] == Qn || n[e.color] == i) && (t[i] = {
                        type: e.type,
                        color: e.color
                    },
                    e.type === Fn && (n[e.color] = i),
                    v(g()),
                    !0)
                }
                function b(e, t, n, i, o) {
                    var a = {
                        color: r,
                        from: t,
                        to: n,
                        flags: i,
                        piece: e[t].type
                    };
                    return o && (a.flags |= Ln.PROMOTION,
                    a.promotion = o),
                    e[n] ? a.captured = e[n].type : i & Ln.EP_CAPTURE && (a.captured = Wn),
                    a
                }
                function x(e) {
                    function a(e, t, n, r, i) {
                        if (e[n].type !== Wn || 0 !== In(r) && 7 !== In(r))
                            t.push(b(e, n, r, i));
                        else
                            for (var o = ["q", "r", zn, "n"], a = 0, s = o.length; a < s; a++)
                                t.push(b(e, n, r, i, o[a]))
                    }
                    var s = []
                      , l = r
                      , u = qn(l)
                      , c = {
                        b: 1,
                        w: 6
                    }
                      , f = Tn.a8
                      , d = Tn.h1
                      , p = !1
                      , h = void 0 === e || !("legal"in e) || e.legal
                      , _ = void 0 === e || !("piece"in e) || "string" != typeof e.piece || e.piece.toLowerCase();
                    if (void 0 !== e && "square"in e) {
                        if (!(e.square in Tn))
                            return [];
                        f = d = Tn[e.square],
                        p = !0
                    }
                    for (var g = f; g <= d; g++)
                        if (136 & g)
                            g += 7;
                        else {
                            var m = t[g];
                            if (null != m && m.color === l)
                                if (m.type !== Wn || !0 !== _ && _ !== Wn) {
                                    if (!0 === _ || _ === m.type)
                                        for (var v = 0, w = Cn[m.type].length; v < w; v++) {
                                            var y = Cn[m.type][v];
                                            for (x = g; !(136 & (x += y)); ) {
                                                if (null != t[x]) {
                                                    if (t[x].color === l)
                                                        break;
                                                    a(t, s, g, x, Ln.CAPTURE);
                                                    break
                                                }
                                                if (a(t, s, g, x, Ln.NORMAL),
                                                "n" === m.type || "k" === m.type)
                                                    break
                                            }
                                        }
                                } else {
                                    var x = g + Sn[l][0];
                                    if (null == t[x]) {
                                        a(t, s, g, x, Ln.NORMAL);
                                        var x = g + Sn[l][1];
                                        c[l] === In(g) && null == t[x] && a(t, s, g, x, Ln.BIG_PAWN)
                                    }
                                    for (v = 2; v < 4; v++) {
                                        136 & (x = g + Sn[l][v]) || (null != t[x] && t[x].color === u ? a(t, s, g, x, Ln.CAPTURE) : x === o && a(t, s, g, o, Ln.EP_CAPTURE))
                                    }
                                }
                        }
                    if (!(!0 !== _ && _ !== Fn || p && d !== n[l])) {
                        if (i[l] & Ln.KSIDE_CASTLE) {
                            var E = (C = n[l]) + 2;
                            null != t[C + 1] || null != t[E] || A(u, n[l]) || A(u, C + 1) || A(u, E) || a(t, s, n[l], E, Ln.KSIDE_CASTLE)
                        }
                        if (i[l] & Ln.QSIDE_CASTLE) {
                            var C;
                            E = (C = n[l]) - 2;
                            null != t[C - 1] || null != t[C - 2] || null != t[C - 3] || A(u, n[l]) || A(u, C - 1) || A(u, E) || a(t, s, n[l], E, Ln.QSIDE_CASTLE)
                        }
                    }
                    if (!h)
                        return s;
                    var k = [];
                    for (g = 0,
                    w = s.length; g < w; g++)
                        T(s[g]),
                        S(l) || k.push(s[g]),
                        j();
                    return k
                }
                function E(e, t) {
                    var n = "";
                    if (e.flags & Ln.KSIDE_CASTLE)
                        n = "O-O";
                    else if (e.flags & Ln.QSIDE_CASTLE)
                        n = "O-O-O";
                    else {
                        if (e.piece !== Wn) {
                            var r = function(e, t) {
                                for (var n = e.from, r = e.to, i = e.piece, o = 0, a = 0, s = 0, l = 0, u = t.length; l < u; l++) {
                                    var c = t[l].from
                                      , f = t[l].to;
                                    i === t[l].piece && n !== c && r === f && (o++,
                                    In(n) === In(c) && a++,
                                    $n(n) === $n(c) && s++)
                                }
                                return o > 0 ? a > 0 && s > 0 ? Dn(n) : s > 0 ? Dn(n).charAt(1) : Dn(n).charAt(0) : ""
                            }(e, t);
                            n += e.piece.toUpperCase() + r
                        }
                        e.flags & (Ln.CAPTURE | Ln.EP_CAPTURE) && (e.piece === Wn && (n += Dn(e.from)[0]),
                        n += "x"),
                        n += Dn(e.to),
                        e.flags & Ln.PROMOTION && (n += "=" + e.promotion.toUpperCase())
                    }
                    return T(e),
                    C() && (k() ? n += "#" : n += "+"),
                    j(),
                    n
                }
                function A(e, n) {
                    for (var r = Tn.a8; r <= Tn.h1; r++)
                        if (136 & r)
                            r += 7;
                        else if (null != t[r] && t[r].color === e) {
                            var i = t[r]
                              , o = r - n
                              , a = o + 119;
                            if (kn[a] & 1 << Pn[i.type]) {
                                if (i.type === Wn) {
                                    if (o > 0) {
                                        if (i.color === Bn)
                                            return !0
                                    } else if (i.color === Kn)
                                        return !0;
                                    continue
                                }
                                if ("n" === i.type || "k" === i.type)
                                    return !0;
                                for (var s = On[a], l = r + s, u = !1; l !== n; ) {
                                    if (null != t[l]) {
                                        u = !0;
                                        break
                                    }
                                    l += s
                                }
                                if (!u)
                                    return !0
                            }
                        }
                    return !1
                }
                function S(e) {
                    return A(qn(e), n[e])
                }
                function C() {
                    return S(r)
                }
                function k() {
                    return C() && 0 === x().length
                }
                function O() {
                    return !C() && 0 === x().length
                }
                function P() {
                    for (var e = {}, n = [], r = 0, i = 0, o = Tn.a8; o <= Tn.h1; o++)
                        if (i = (i + 1) % 2,
                        136 & o)
                            o += 7;
                        else {
                            var a = t[o];
                            a && (e[a.type] = a.type in e ? e[a.type] + 1 : 1,
                            a.type === zn && n.push(i),
                            r++)
                        }
                    if (2 === r)
                        return !0;
                    if (3 === r && (1 === e.b || 1 === e.n))
                        return !0;
                    if (r === e.b + 2) {
                        var s = 0
                          , l = n.length;
                        for (o = 0; o < l; o++)
                            s += n[o];
                        if (0 === s || s === l)
                            return !0
                    }
                    return !1
                }
                function L() {
                    for (var e = [], t = {}, n = !1; ; ) {
                        var r = j();
                        if (!r)
                            break;
                        e.push(r)
                    }
                    for (; ; ) {
                        var i = g().split(" ").slice(0, 4).join(" ");
                        if (t[i] = i in t ? t[i] + 1 : 1,
                        t[i] >= 3 && (n = !0),
                        !e.length)
                            break;
                        T(e.pop())
                    }
                    return n
                }
                function T(e) {
                    var u = r
                      , c = qn(u);
                    if (function(e) {
                        l.push({
                            move: e,
                            kings: {
                                b: n.b,
                                w: n.w
                            },
                            turn: r,
                            castling: {
                                b: i.b,
                                w: i.w
                            },
                            ep_square: o,
                            half_moves: a,
                            move_number: s
                        })
                    }(e),
                    t[e.to] = t[e.from],
                    t[e.from] = null,
                    e.flags & Ln.EP_CAPTURE && (r === Kn ? t[e.to - 16] = null : t[e.to + 16] = null),
                    e.flags & Ln.PROMOTION && (t[e.to] = {
                        type: e.promotion,
                        color: u
                    }),
                    t[e.to].type === Fn) {
                        if (n[t[e.to].color] = e.to,
                        e.flags & Ln.KSIDE_CASTLE) {
                            var f = e.to - 1
                              , d = e.to + 1;
                            t[f] = t[d],
                            t[d] = null
                        } else if (e.flags & Ln.QSIDE_CASTLE) {
                            f = e.to + 1,
                            d = e.to - 2;
                            t[f] = t[d],
                            t[d] = null
                        }
                        i[u] = ""
                    }
                    if (i[u])
                        for (var p = 0, h = jn[u].length; p < h; p++)
                            if (e.from === jn[u][p].square && i[u] & jn[u][p].flag) {
                                i[u] ^= jn[u][p].flag;
                                break
                            }
                    if (i[c])
                        for (p = 0,
                        h = jn[c].length; p < h; p++)
                            if (e.to === jn[c][p].square && i[c] & jn[c][p].flag) {
                                i[c] ^= jn[c][p].flag;
                                break
                            }
                    o = e.flags & Ln.BIG_PAWN ? "b" === r ? e.to - 16 : e.to + 16 : Qn,
                    e.piece === Wn || e.flags & (Ln.CAPTURE | Ln.EP_CAPTURE) ? a = 0 : a++,
                    r === Kn && s++,
                    r = qn(r)
                }
                function j() {
                    var e = l.pop();
                    if (null == e)
                        return null;
                    var u = e.move;
                    n = e.kings,
                    r = e.turn,
                    i = e.castling,
                    o = e.ep_square,
                    a = e.half_moves,
                    s = e.move_number;
                    var c, f, d = r, p = qn(r);
                    if (t[u.from] = t[u.to],
                    t[u.from].type = u.piece,
                    t[u.to] = null,
                    u.flags & Ln.CAPTURE)
                        t[u.to] = {
                            type: u.captured,
                            color: p
                        };
                    else if (u.flags & Ln.EP_CAPTURE) {
                        var h;
                        h = d === Kn ? u.to - 16 : u.to + 16,
                        t[h] = {
                            type: Wn,
                            color: p
                        }
                    }
                    u.flags & (Ln.KSIDE_CASTLE | Ln.QSIDE_CASTLE) && (u.flags & Ln.KSIDE_CASTLE ? (c = u.to + 1,
                    f = u.to - 1) : u.flags & Ln.QSIDE_CASTLE && (c = u.to - 2,
                    f = u.to + 1),
                    t[c] = t[f],
                    t[f] = null);
                    return u
                }
                function R(e, t) {
                    for (var n = Nn(e), r = 0; r < 2; r++) {
                        if (1 == r) {
                            if (!t)
                                return null;
                            var i = !1;
                            if (u = n.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/)) {
                                var o = u[1]
                                  , a = u[2]
                                  , s = u[3]
                                  , l = u[4];
                                1 == a.length && (i = !0)
                            } else {
                                var u;
                                if (u = n.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/)) {
                                    o = u[1],
                                    a = u[2],
                                    s = u[3],
                                    l = u[4];
                                    if (1 == a.length)
                                        i = !0
                                }
                            }
                        }
                        for (var c = Rn(n), f = x({
                            legal: !0,
                            piece: o || c
                        }), d = 0, p = f.length; d < p; d++)
                            switch (r) {
                            case 0:
                                if (n === Nn(E(f[d], f)))
                                    return f[d];
                                break;
                            case 1:
                                if (u) {
                                    if (!(o && o.toLowerCase() != f[d].piece || Tn[a] != f[d].from || Tn[s] != f[d].to || l && l.toLowerCase() != f[d].promotion))
                                        return f[d];
                                    if (i) {
                                        var h = Dn(f[d].from);
                                        if (!(o && o.toLowerCase() != f[d].piece || Tn[s] != f[d].to || a != h[0] && a != h[1] || l && l.toLowerCase() != f[d].promotion))
                                            return f[d]
                                    }
                                }
                            }
                    }
                    return null
                }
                function N(e) {
                    var t = Mn(e);
                    t.san = E(t, x({
                        legal: !0
                    })),
                    t.to = Dn(t.to),
                    t.from = Dn(t.from);
                    var n = "";
                    for (var r in Ln)
                        Ln[r] & t.flags && (n += Gn[r]);
                    return t.flags = n,
                    t
                }
                function I(e) {
                    for (var t = x({
                        legal: !1
                    }), n = 0, i = r, o = 0, a = t.length; o < a; o++) {
                        if (T(t[o]),
                        !S(i))
                            if (e - 1 > 0)
                                n += I(e - 1);
                            else
                                n++;
                        j()
                    }
                    return n
                }
                return h(void 0 === e ? En : e),
                {
                    load: function(e) {
                        return h(e)
                    },
                    reset: function() {
                        return p()
                    },
                    moves: function(e) {
                        for (var t = x(e), n = [], r = 0, i = t.length; r < i; r++)
                            void 0 !== e && "verbose"in e && e.verbose ? n.push(N(t[r])) : n.push(E(t[r], x({
                                legal: !0
                            })));
                        return n
                    },
                    in_check: function() {
                        return C()
                    },
                    in_checkmate: function() {
                        return k()
                    },
                    in_stalemate: function() {
                        return O()
                    },
                    in_draw: function() {
                        return a >= 100 || O() || P() || L()
                    },
                    insufficient_material: function() {
                        return P()
                    },
                    in_threefold_repetition: function() {
                        return L()
                    },
                    game_over: function() {
                        return a >= 100 || k() || O() || P() || L()
                    },
                    validate_fen: function(e) {
                        return _(e)
                    },
                    fen: function() {
                        return g()
                    },
                    board: function() {
                        for (var e = [], n = [], r = Tn.a8; r <= Tn.h1; r++)
                            null == t[r] ? n.push(null) : n.push({
                                square: Dn(r),
                                type: t[r].type,
                                color: t[r].color
                            }),
                            r + 1 & 136 && (e.push(n),
                            n = [],
                            r += 8);
                        return e
                    },
                    pgn: function(e) {
                        var t = "object" == typeof e && "string" == typeof e.newline_char ? e.newline_char : "\n"
                          , n = "object" == typeof e && "number" == typeof e.max_width ? e.max_width : 0
                          , r = []
                          , i = !1;
                        for (var o in u)
                            r.push("[" + o + ' "' + u[o] + '"]' + t),
                            i = !0;
                        i && l.length && r.push(t);
                        for (var a = function(e) {
                            var t = c[g()];
                            void 0 !== t && (e = `${e}${e.length > 0 ? " " : ""}{${t}}`);
                            return e
                        }, f = []; l.length > 0; )
                            f.push(j());
                        var d = []
                          , p = "";
                        for (0 === f.length && d.push(a("")); f.length > 0; ) {
                            p = a(p);
                            var h = f.pop();
                            l.length || "b" !== h.color ? "w" === h.color && (p.length && d.push(p),
                            p = s + ".") : p = s + ". ...",
                            p = p + " " + E(h, x({
                                legal: !0
                            })),
                            T(h)
                        }
                        if (p.length && d.push(a(p)),
                        void 0 !== u.Result && d.push(u.Result),
                        0 === n)
                            return r.join("") + d.join(" ");
                        var _ = function() {
                            return r.length > 0 && " " === r[r.length - 1] && (r.pop(),
                            !0)
                        }
                          , m = function(e, i) {
                            for (var o of i.split(" "))
                                if (o) {
                                    if (e + o.length > n) {
                                        for (; _(); )
                                            e--;
                                        r.push(t),
                                        e = 0
                                    }
                                    r.push(o),
                                    e += o.length,
                                    r.push(" "),
                                    e++
                                }
                            return _() && e--,
                            e
                        }
                          , v = 0;
                        for (o = 0; o < d.length; o++)
                            v + d[o].length > n && d[o].includes("{") ? v = m(v, d[o]) : (v + d[o].length > n && 0 !== o ? (" " === r[r.length - 1] && r.pop(),
                            r.push(t),
                            v = 0) : 0 !== o && (r.push(" "),
                            v++),
                            r.push(d[o]),
                            v += d[o].length);
                        return r.join("")
                    },
                    load_pgn: function(e, t) {
                        var n = void 0 !== t && "sloppy"in t && t.sloppy;
                        function r(e) {
                            return e.replace(/\\/g, "\\")
                        }
                        e = e.trim();
                        var i = "object" == typeof t && "string" == typeof t.newline_char ? t.newline_char : "\r?\n"
                          , o = new RegExp("^(\\[((?:" + r(i) + ")|.)*\\])(?:\\s*" + r(i) + "){2}")
                          , a = o.test(e) ? o.exec(e)[1] : "";
                        p();
                        var s = function(e, t) {
                            for (var n = "object" == typeof t && "string" == typeof t.newline_char ? t.newline_char : "\r?\n", i = {}, o = e.split(new RegExp(r(n))), a = "", s = "", l = 0; l < o.length; l++) {
                                var u = /^\s*\[([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
                                a = o[l].replace(u, "$1"),
                                s = o[l].replace(u, "$2"),
                                Un(a).length > 0 && (i[a] = s)
                            }
                            return i
                        }(a, t)
                          , l = "";
                        for (var f in s)
                            "fen" === f.toLowerCase() && (l = s[f]),
                            m([f, s[f]]);
                        if (n) {
                            if (l && !h(l, !0))
                                return !1
                        } else if (!("1" !== s.SetUp || "FEN"in s && h(s.FEN, !0)))
                            return !1;
                        for (var d = function(e) {
                            return `{${function(e) {
                                return Array.from(e).map((function(e) {
                                    return e.charCodeAt(0) < 128 ? e.charCodeAt(0).toString(16) : encodeURIComponent(e).replace(/\%/g, "").toLowerCase()
                                }
                                )).join("")
                            }((e = e.replace(new RegExp(r(i),"g"), " ")).slice(1, e.length - 1))}}`
                        }, _ = function(e) {
                            if (e.startsWith("{") && e.endsWith("}"))
                                return function(e) {
                                    return 0 == e.length ? "" : decodeURIComponent("%" + e.match(/.{1,2}/g).join("%"))
                                }(e.slice(1, e.length - 1))
                        }, v = e.replace(a, "").replace(new RegExp(`({[^}]*})+?|;([^${r(i)}]*)`,"g"), (function(e, t, n) {
                            return void 0 !== t ? d(t) : " " + d(`{${n.slice(1)}}`)
                        }
                        )).replace(new RegExp(r(i),"g"), " "), w = /(\([^\(\)]+\))+?/g; w.test(v); )
                            v = v.replace(w, "");
                        var y = Un(v = (v = (v = v.replace(/\d+\.(\.\.)?/g, "")).replace(/\.\.\./g, "")).replace(/\$\d+/g, "")).split(new RegExp(/\s+/));
                        y = y.join(",").replace(/,,+/g, ",").split(",");
                        for (var b = "", x = "", E = 0; E < y.length; E++) {
                            var A = _(y[E]);
                            if (void 0 === A)
                                if (null == (b = R(y[E], n))) {
                                    if (!(An.indexOf(y[E]) > -1))
                                        return !1;
                                    x = y[E]
                                } else
                                    x = "",
                                    T(b);
                            else
                                c[g()] = A
                        }
                        return x && Object.keys(u).length && !u.Result && m(["Result", x]),
                        !0
                    },
                    header: function() {
                        return m(arguments)
                    },
                    turn: function() {
                        return r
                    },
                    move: function(e, t) {
                        var n = void 0 !== t && "sloppy"in t && t.sloppy
                          , r = null;
                        if ("string" == typeof e)
                            r = R(e, n);
                        else if ("object" == typeof e)
                            for (var i = x(), o = 0, a = i.length; o < a; o++)
                                if (e.from === Dn(i[o].from) && e.to === Dn(i[o].to) && (!("promotion"in i[o]) || e.promotion === i[o].promotion)) {
                                    r = i[o];
                                    break
                                }
                        if (!r)
                            return null;
                        var s = N(r);
                        return T(r),
                        s
                    },
                    undo: function() {
                        var e = j();
                        return e ? N(e) : null
                    },
                    clear: function() {
                        return f()
                    },
                    put: function(e, t) {
                        return y(e, t)
                    },
                    get: function(e) {
                        return w(e)
                    },
                    ascii() {
                        for (var e = "   +------------------------+\n", n = Tn.a8; n <= Tn.h1; n++) {
                            if (0 === $n(n) && (e += " " + "87654321"[In(n)] + " |"),
                            null == t[n])
                                e += " . ";
                            else {
                                var r = t[n].type;
                                e += " " + (t[n].color === Bn ? r.toUpperCase() : r.toLowerCase()) + " "
                            }
                            n + 1 & 136 && (e += "|\n",
                            n += 8)
                        }
                        return e += "   +------------------------+\n",
                        e += "     a  b  c  d  e  f  g  h"
                    },
                    remove: function(e) {
                        return function(e) {
                            var r = w(e);
                            return t[Tn[e]] = null,
                            r && r.type === Fn && (n[r.color] = Qn),
                            v(g()),
                            r
                        }(e)
                    },
                    perft: function(e) {
                        return I(e)
                    },
                    square_color: function(e) {
                        if (e in Tn) {
                            var t = Tn[e];
                            return (In(t) + $n(t)) % 2 == 0 ? "light" : "dark"
                        }
                        return null
                    },
                    history: function(e) {
                        for (var t = [], n = [], r = (void 0 !== e && "verbose"in e && e.verbose); l.length > 0; )
                            t.push(j());
                        for (; t.length > 0; ) {
                            var i = t.pop();
                            r ? n.push(N(i)) : n.push(E(i, x({
                                legal: !0
                            }))),
                            T(i)
                        }
                        return n
                    },
                    get_comment: function() {
                        return c[g()]
                    },
                    set_comment: function(e) {
                        c[g()] = e.replace("{", "[").replace("}", "]")
                    },
                    delete_comment: function() {
                        var e = c[g()];
                        return delete c[g()],
                        e
                    },
                    get_comments: function() {
                        return d(),
                        Object.keys(c).map((function(e) {
                            return {
                                fen: e,
                                comment: c[e]
                            }
                        }
                        ))
                    },
                    delete_comments: function() {
                        return d(),
                        Object.keys(c).map((function(e) {
                            var t = c[e];
                            return delete c[e],
                            {
                                fen: e,
                                comment: t
                            }
                        }
                        ))
                    }
                }
            };
            function Hn(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Zn = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    this.chess = new Vn,
                    this.ai = new Worker("./js/ai/main.js",{
                        type: "module"
                    }),
                    this.config = {
                        pieceTheme: "img/chesspieces/font-awesome/{piece}.svg",
                        position: "start",
                        draggable: !0,
                        onDragStart: this.onDragStart,
                        onDrop: this.onDrop,
                        orientation: "white"
                    },
                    this.board = Chessboard("board", this.config),
                    this.moves = 0,
                    this.playingAs = "w"
                }
                var t, n, r;
                return t = e,
                n = [{
                    key: "update",
                    value: function() {
                        window.game.moves++,
                        window.Alpine.store("game").moves++,
                        "w" === window.game.playingAs && "w" !== window.game.chess.turn() ? window.game.board = Chessboard("board", {
                            pieceTheme: "img/chesspieces/font-awesome/{piece}.svg",
                            position: window.game.chess.fen(),
                            draggable: !0,
                            onDragStart: window.game.onDragStart,
                            onDrop: window.game.onDrop
                        }) : "b" === window.game.playingAs && "b" !== window.game.chess.turn() && (window.game.board = Chessboard("board", {
                            pieceTheme: "img/chesspieces/font-awesome/{piece}.svg",
                            position: window.game.chess.fen(),
                            draggable: !0,
                            onDragStart: window.game.onDragStart,
                            onDrop: window.game.onDrop,
                            orientation: "black"
                        }))
                    }
                }, {
                    key: "onDragStart",
                    value: function(e, t, n, r) {
                        return !0 !== window.game.chess.game_over() && !("w" === window.game.chess.turn() && -1 !== t.search(/^b/) || "b" === window.game.chess.turn() && -1 !== t.search(/^w/))
                    }
                }, {
                    key: "onDrop",
                    value: function(e, t, n) {
                        var r = window.game.chess.move({
                            from: e,
                            to: t,
                            promotion: "q"
                        });
                        if (null === r)
                            return "snapback";
                        window.game.update(),
                        window.game.logCapture(r),
                        window.game.hasGameEnded(),
                        document.getElementsByClassName("square-".concat(e))[0].classList.add("highlight-white"),
                        document.getElementsByClassName("square-".concat(t))[0].classList.add("highlight-white"),
                        window.Alpine.store("game").thinking = !0,
                        window.game.ai.postMessage({
                            position: window.game.chess.fen(),
                            lastPlayerMove: "P" === n.substring(1) ? t : n.substring(1).toUpperCase() + t,
                            numberOfMoves: window.game.moves,
                            allocatedSearchTime: window.Alpine.store("game").ai.allocatedSearchTime,
                            searchDepth: window.Alpine.store("game").ai.searchDepth
                        }),
                        window.game.ai.onmessage = function(e) {
                            window.Alpine.store("game").thinking = !1;
                            var t = window.game.chess.move(e.data);
                            if (window.game.logCapture(t),
                            !0 === window.game.chess.in_check()) {
                                var n = window.game.chess.board();
                                for (var r in n)
                                    for (var i in n[r])
                                        null !== n[r][i] && ("w" === n[r][i].color && "k" === n[r][i].type && "w" === window.game.playingAs || "b" === n[r][i].color && "k" === n[r][i].type && "b" === window.game.playingAs) && document.getElementsByClassName("square-".concat(n[r][i].square))[0].classList.add("highlight-check")
                            }
                            window.game.hasGameEnded(),
                            document.getElementsByClassName("square-".concat(t.from))[0].classList.add("highlight-black"),
                            document.getElementsByClassName("square-".concat(t.to))[0].classList.add("highlight-black"),
                            window.game.board.position(window.game.chess.fen()),
                            window.game.update()
                        }
                    }
                }, {
                    key: "flip",
                    value: function() {
                        window.game.board.orientation("flip"),
                        0 === window.game.moves && (window.game.playingAs = "w" === window.game.chess.turn() ? "b" : "w",
                        window.game.ai.postMessage({
                            originalPosition: window.game.chess.fen(),
                            lastPlayerMove: void 0,
                            numberOfMoves: window.game.moves,
                            allocatedSearchTime: window.Alpine.store("game").ai.allocatedSearchTime,
                            searchDepth: window.Alpine.store("game").ai.searchDepth
                        }),
                        window.game.ai.onmessage = function(e) {
                            window.game.chess.move(e.data),
                            window.game.board.position(window.game.chess.fen()),
                            window.game.update()
                        }
                        )
                    }
                }, {
                    key: "logCapture",
                    value: function(e) {
                        if (void 0 !== e.captured) {
                            var t = "w" === e.color ? "b" : "w";
                            window.Alpine.store("game").captures[t][e.captured]++
                        }
                    }
                }, {
                    key: "hasGameEnded",
                    value: function() {
                        !0 === window.game.chess.in_checkmate() ? window.Alpine.store("game").inCheckmate = !0 : !0 === window.game.chess.in_stalemate() ? window.Alpine.store("game").inStalemate = !0 : !0 === window.game.chess.insufficient_material() ? window.Alpine.store("game").insufficientMaterial = !0 : !0 === window.game.chess.in_draw() ? window.Alpine.store("game").inDraw = !0 : !0 === window.game.chess.in_threefold_repetition() && (window.Alpine.store("game").inThreefoldRepetition = !0)
                    }
                }, {
                    key: "reset",
                    value: function() {
                        window.game.ai.onmessage = void 0,
                        window.game.ai.terminate(),
                        window.game.ai = new Worker("./js/ai/main.js",{
                            type: "module"
                        }),
                        window.game.board.start(!0),
                        window.game.board.orientation("white"),
                        window.game.chess.reset(),
                        window.game.moves = 0,
                        window.Alpine.store("game").moves = 0,
                        window.Alpine.store("game").captures = {
                            w: {
                                p: 0,
                                n: 0,
                                b: 0,
                                r: 0,
                                q: 0
                            },
                            b: {
                                p: 0,
                                n: 0,
                                b: 0,
                                r: 0,
                                q: 0
                            }
                        },
                        window.Alpine.store("game").inCheckmate = !1,
                        window.Alpine.store("game").inStalemate = !1,
                        window.Alpine.store("game").inDraw = !1,
                        window.Alpine.store("game").inThreefoldRepetition = !1,
                        window.Alpine.store("game").insufficientMaterial = !1,
                        window.game.playingAs = "w",
                        window.game.lastPlayerMove = void 0
                    }
                }],
                n && Hn(t.prototype, n),
                r && Hn(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }()
              , Yn = new Zn;
            window.game = Yn,
            window.Alpine = xn,
            xn.store("game", {
                moves: window.game.moves,
                thinking: !1,
                captures: {
                    w: {
                        p: 0,
                        n: 0,
                        b: 0,
                        r: 0,
                        q: 0
                    },
                    b: {
                        p: 0,
                        n: 0,
                        b: 0,
                        r: 0,
                        q: 0
                    }
                },
                inCheckmate: !1,
                inStalemate: !1,
                inDraw: !1,
                inThreefoldRepetition: !1,
                insufficientMaterial: !1,
                ai: {
                    allocatedSearchTime: 2e3,
                    searchDepth: 2
                }
            }),
            xn.start()
        }
        ,
        361: () => {}
        ,
        985: () => {}
    }, n = {};
    function r(e) {
        var i = n[e];
        if (void 0 !== i)
            return i.exports;
        var o = n[e] = {
            exports: {}
        };
        return t[e](o, o.exports, r),
        o.exports
    }
    r.m = t,
    e = [],
    r.O = (t, n, i, o) => {
        if (!n) {
            var a = 1 / 0;
            for (c = 0; c < e.length; c++) {
                for (var [n,i,o] = e[c], s = !0, l = 0; l < n.length; l++)
                    (!1 & o || a >= o) && Object.keys(r.O).every((e => r.O[e](n[l]))) ? n.splice(l--, 1) : (s = !1,
                    o < a && (a = o));
                if (s) {
                    e.splice(c--, 1);
                    var u = i();
                    void 0 !== u && (t = u)
                }
            }
            return t
        }
        o = o || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > o; c--)
            e[c] = e[c - 1];
        e[c] = [n, i, o]
    }
    ,
    r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    ( () => {
        var e = {
            522: 0,
            870: 0,
            118: 0
        };
        r.O.j = t => 0 === e[t];
        var t = (t, n) => {
            var i, o, [a,s,l] = n, u = 0;
            if (a.some((t => 0 !== e[t]))) {
                for (i in s)
                    r.o(s, i) && (r.m[i] = s[i]);
                if (l)
                    var c = l(r)
            }
            for (t && t(n); u < a.length; u++)
                o = a[u],
                r.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return r.O(c)
        }
          , n = self.webpackChunklittle_chess = self.webpackChunklittle_chess || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }
    )(),
    r.O(void 0, [870, 118], ( () => r(159))),
    r.O(void 0, [870, 118], ( () => r(361)));
    var i = r.O(void 0, [870, 118], ( () => r(985)));
    i = r.O(i)
}
)();
