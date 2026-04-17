/*! For license information please see chessboard.js.LICENSE.txt */
( () => {
    function e(r) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        e(r)
    }
    !function() {
        "use strict";
        var r = window.jQuery
          , n = "abcdefgh".split("")
          , t = "1.8.3"
          , o = P("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR")
          , a = {};
        function i(e, r, n) {
            function t() {
                o = 0,
                a && (a = !1,
                s())
            }
            var o = 0
              , a = !1
              , i = []
              , s = function() {
                o = window.setTimeout(t, r),
                e.apply(n, i)
            };
            return function(e) {
                i = arguments,
                o ? a = !0 : s()
            }
        }
        function s() {
            return "xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx".replace(/x/g, (function(e) {
                return (16 * Math.random() | 0).toString(16)
            }
            ))
        }
        function p(e) {
            return JSON.parse(JSON.stringify(e))
        }
        function c(e) {
            var r = e.split(".");
            return {
                major: parseInt(r[0], 10),
                minor: parseInt(r[1], 10),
                patch: parseInt(r[2], 10)
            }
        }
        function u(e, r) {
            for (var n in r)
                if (r.hasOwnProperty(n))
                    for (var t = "{" + n + "}", o = r[n]; -1 !== e.indexOf(t); )
                        e = e.replace(t, o);
            return e
        }
        function f(e) {
            return "string" == typeof e
        }
        function d(e) {
            return "function" == typeof e
        }
        function l(e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }
        function h(e) {
            return "fast" === e || "slow" === e || !!l(e) && 0 <= e
        }
        function v(e) {
            if (!f(e))
                return !1;
            var r = e.split("-");
            return 2 === r.length && g(r[0]) && g(r[1])
        }
        function g(e) {
            return f(e) && -1 !== e.search(/^[a-h][1-8]$/)
        }
        function w(e) {
            return f(e) && -1 !== e.search(/^[bw][KQRNBP]$/)
        }
        function b(e) {
            if (!f(e))
                return !1;
            var r = (e = function(e) {
                return e.replace(/8/g, "11111111").replace(/7/g, "1111111").replace(/6/g, "111111").replace(/5/g, "11111").replace(/4/g, "1111").replace(/3/g, "111").replace(/2/g, "11")
            }(e = e.replace(/ .+$/, ""))).split("/");
            if (8 !== r.length)
                return !1;
            for (var n = 0; n < 8; n++)
                if (8 !== r[n].length || -1 !== r[n].search(/[^kqrnbpKQRNBP1]/))
                    return !1;
            return !0
        }
        function m(e) {
            if (!r.isPlainObject(e))
                return !1;
            for (var n in e)
                if (e.hasOwnProperty(n) && (!g(n) || !w(e[n])))
                    return !1;
            return !0
        }
        function y() {
            return e(window.$) && r.fn && r.fn.jquery && function(e, r) {
                e = c(e),
                r = c(r);
                var n = 1e5 * e.major * 1e5 + 1e5 * e.minor + e.patch;
                return 1e5 * r.major * 1e5 + 1e5 * r.minor + r.patch <= n
            }(r.fn.jquery, t)
        }
        function P(e) {
            if (!b(e))
                return !1;
            for (var r, t = (e = e.replace(/ .+$/, "")).split("/"), o = {}, a = 8, i = 0; i < 8; i++) {
                for (var s = t[i].split(""), p = 0, c = 0; c < s.length; c++)
                    -1 !== s[c].search(/[1-8]/) ? p += parseInt(s[c], 10) : (o[n[p] + a] = (r = s[c]).toLowerCase() === r ? "b" + r.toUpperCase() : "w" + r.toUpperCase(),
                    p += 1);
                a -= 1
            }
            return o
        }
        function x(e) {
            if (!m(e))
                return !1;
            for (var r, t = "", o = 8, a = 0; a < 8; a++) {
                for (var i = 0; i < 8; i++) {
                    var s = n[i] + o;
                    e.hasOwnProperty(s) ? t += (r = void 0,
                    "w" === (r = e[s].split(""))[0] ? r[1].toUpperCase() : r[1].toLowerCase()) : t += "1"
                }
                7 !== a && (t += "/"),
                o -= 1
            }
            return function(e) {
                return e.replace(/11111111/g, "8").replace(/1111111/g, "7").replace(/111111/g, "6").replace(/11111/g, "5").replace(/1111/g, "4").replace(/111/g, "3").replace(/11/g, "2")
            }(t)
        }
        function O(e, r, t) {
            for (var o = function(e) {
                for (var r = [], t = 0; t < 8; t++)
                    for (var o = 0; o < 8; o++) {
                        var a = n[t] + (o + 1);
                        e !== a && r.push({
                            square: a,
                            distance: (i = e,
                            s = a,
                            p = i.split(""),
                            c = n.indexOf(p[0]) + 1,
                            u = parseInt(p[1], 10),
                            f = s.split(""),
                            d = n.indexOf(f[0]) + 1,
                            l = parseInt(f[1], 10),
                            h = Math.abs(c - d),
                            v = Math.abs(u - l),
                            v <= h ? h : v)
                        })
                    }
                var i, s, p, c, u, f, d, l, h, v;
                r.sort((function(e, r) {
                    return e.distance - r.distance
                }
                ));
                var g = [];
                for (t = 0; t < r.length; t++)
                    g.push(r[t].square);
                return g
            }(t), a = 0; a < o.length; a++) {
                var i = o[a];
                if (e.hasOwnProperty(i) && e[i] === r)
                    return i
            }
            return !1
        }
        function S(e) {
            return "black" !== e.orientation && (e.orientation = "white"),
            !1 !== e.showNotation && (e.showNotation = !0),
            !0 !== e.draggable && (e.draggable = !1),
            "trash" !== e.dropOffBoard && (e.dropOffBoard = "snapback"),
            !0 !== e.sparePieces && (e.sparePieces = !1),
            e.sparePieces && (e.draggable = !0),
            e.hasOwnProperty("pieceTheme") && (f(e.pieceTheme) || d(e.pieceTheme)) || (e.pieceTheme = "img/chesspieces/wikipedia/{piece}.png"),
            h(e.appearSpeed) || (e.appearSpeed = 200),
            h(e.moveSpeed) || (e.moveSpeed = 200),
            h(e.snapbackSpeed) || (e.snapbackSpeed = 60),
            h(e.snapSpeed) || (e.snapSpeed = 30),
            h(e.trashSpeed) || (e.trashSpeed = 100),
            function(e) {
                return l(e) && 1 <= e
            }(e.dragThrottleRate) || (e.dragThrottleRate = 20),
            e
        }
        a.alpha = "alpha-d2270",
        a.black = "black-3c85d",
        a.board = "board-b72b1",
        a.chessboard = "chessboard-63f37",
        a.clearfix = "clearfix-7da63",
        a.highlight1 = "highlight1-32417",
        a.highlight2 = "highlight2-9c5d2",
        a.notation = "notation-322f9",
        a.numeric = "numeric-fc462",
        a.piece = "piece-417db",
        a.row = "row-5277c",
        a.sparePieces = "spare-pieces-7492f",
        a.sparePiecesBottom = "spare-pieces-bottom-ae20f",
        a.sparePiecesTop = "spare-pieces-top-4028b",
        a.square = "square-55d63",
        a.white = "white-1e1d7",
        window.Chessboard = function(t, c) {
            if (!function() {
                if (y())
                    return !0;
                return window.alert("Chessboard Error 1005: Unable to find a valid version of jQuery. Please include jQuery 1.8.3 or higher on the page\n\nExiting…"),
                !1
            }())
                return null;
            var l = function(e) {
                if ("" === e) {
                    return window.alert("Chessboard Error 1001: The first argument to Chessboard() cannot be an empty string.\n\nExiting…"),
                    !1
                }
                f(e) && "#" !== e.charAt(0) && (e = "#" + e);
                var n = r(e);
                if (1 === n.length)
                    return n;
                return window.alert("Chessboard Error 1003: The first argument to Chessboard() must be the ID of a DOM node, an ID query selector, or a single DOM node.\n\nExiting…"),
                !1
            }(t);
            if (!l)
                return null;
            c = S(c = function(e) {
                return "start" === e ? e = {
                    position: p(o)
                } : b(e) ? e = {
                    position: P(e)
                } : m(e) && (e = {
                    position: p(e)
                }),
                r.isPlainObject(e) || (e = {}),
                e
            }(c));
            var h = null
              , w = null
              , T = null
              , q = null
              , k = {}
              , E = 2
              , C = "white"
              , B = {}
              , I = null
              , M = null
              , N = null
              , j = !1
              , D = {}
              , R = {}
              , Q = {}
              , X = 16;
            function Y(r, n, t) {
                if (!0 === c.hasOwnProperty("showErrors") && !1 !== c.showErrors) {
                    var o = "Chessboard Error " + r + ": " + n;
                    return "console" === c.showErrors && "object" == ("undefined" == typeof console ? "undefined" : e(console)) && "function" == typeof console.log ? (console.log(o),
                    void (2 <= arguments.length && console.log(t))) : "alert" === c.showErrors ? (t && (o += "\n\n" + JSON.stringify(t)),
                    void window.alert(o)) : void (d(c.showErrors) && c.showErrors(r, n, t))
                }
            }
            function K(e) {
                return d(c.pieceTheme) ? c.pieceTheme(e) : f(c.pieceTheme) ? u(c.pieceTheme, {
                    piece: e
                }) : (Y(8272, "Unable to build image source for config.pieceTheme."),
                "")
            }
            function L(e, r, n) {
                var t = '<img src="' + K(e) + '" ';
                return f(n) && "" !== n && (t += 'id="' + n + '" '),
                t += 'alt="" class="{piece}" data-piece="' + e + '" style="width:' + X + "px;height:" + X + "px;",
                r && (t += "display:none;"),
                u(t += '" />', a)
            }
            function U(e) {
                var r = ["wK", "wQ", "wR", "wB", "wN", "wP"];
                "black" === e && (r = ["bK", "bQ", "bR", "bB", "bN", "bP"]);
                for (var n = "", t = 0; t < r.length; t++)
                    n += L(r[t], !1, D[r[t]]);
                return n
            }
            function $(e, n, t, o) {
                var i = r("#" + R[e])
                  , p = i.offset()
                  , u = r("#" + R[n])
                  , f = u.offset()
                  , l = s();
                r("body").append(L(t, !0, l));
                var h = r("#" + l);
                h.css({
                    display: "",
                    position: "absolute",
                    top: p.top,
                    left: p.left
                }),
                i.find("." + a.piece).remove();
                var v = {
                    duration: c.moveSpeed,
                    complete: function() {
                        u.append(L(t)),
                        h.remove(),
                        d(o) && o()
                    }
                };
                h.animate(f, v)
            }
            function J(e, n, t) {
                var o = r("#" + D[e]).offset()
                  , i = r("#" + R[n])
                  , p = i.offset()
                  , u = s();
                r("body").append(L(e, !0, u));
                var f = r("#" + u);
                f.css({
                    display: "",
                    position: "absolute",
                    left: o.left,
                    top: o.top
                });
                var l = {
                    duration: c.moveSpeed,
                    complete: function() {
                        i.find("." + a.piece).remove(),
                        i.append(L(e)),
                        f.remove(),
                        d(t) && t()
                    }
                };
                f.animate(p, l)
            }
            function z() {
                for (var e in h.find("." + a.piece).remove(),
                B)
                    B.hasOwnProperty(e) && r("#" + R[e]).append(L(B[e]))
            }
            function F() {
                h.html(function(e) {
                    "black" !== e && (e = "white");
                    var r = ""
                      , t = p(n)
                      , o = 8;
                    "black" === e && (t.reverse(),
                    o = 1);
                    for (var i = "white", s = 0; s < 8; s++) {
                        r += '<div class="{row}">';
                        for (var f = 0; f < 8; f++) {
                            var d = t[f] + o;
                            r += '<div class="{square} ' + a[i] + " square-" + d + '" style="width:' + X + "px;height:" + X + 'px;" id="' + R[d] + '" data-square="' + d + '">',
                            c.showNotation && (("white" === e && 1 === o || "black" === e && 8 === o) && (r += '<div class="{notation} {alpha}">' + t[f] + "</div>"),
                            0 === f && (r += '<div class="{notation} {numeric}">' + o + "</div>")),
                            r += "</div>",
                            i = "white" === i ? "black" : "white"
                        }
                        r += '<div class="{clearfix}"></div></div>',
                        i = "white" === i ? "black" : "white",
                        "white" === e ? o -= 1 : o += 1
                    }
                    return u(r, a)
                }(C, c.showNotation)),
                z(),
                c.sparePieces && ("white" === C ? (T.html(U("black")),
                q.html(U("white"))) : (T.html(U("white")),
                q.html(U("black"))))
            }
            function A(e) {
                var r = p(B)
                  , n = p(e);
                x(r) !== x(n) && (d(c.onChange) && c.onChange(r, n),
                B = e)
            }
            function W(e, r) {
                for (var n in Q)
                    if (Q.hasOwnProperty(n)) {
                        var t = Q[n];
                        if (e >= t.left && e < t.left + X && r >= t.top && r < t.top + X)
                            return n
                    }
                return "offboard"
            }
            function G() {
                h.find("." + a.square).removeClass(a.highlight1 + " " + a.highlight2)
            }
            function H() {
                G();
                var e = p(B);
                delete e[N],
                A(e),
                z(),
                w.fadeOut(c.trashSpeed),
                j = !1
            }
            function V(e, n, t, o) {
                d(c.onDragStart) && !1 === c.onDragStart(e, n, p(B), C) || (j = !0,
                I = n,
                M = "spare" === (N = e) ? "offboard" : e,
                function() {
                    for (var e in Q = {},
                    R)
                        R.hasOwnProperty(e) && (Q[e] = r("#" + R[e]).offset())
                }(),
                w.attr("src", K(n)).css({
                    display: "",
                    position: "absolute",
                    left: t - X / 2,
                    top: o - X / 2
                }),
                "spare" !== e && r("#" + R[e]).addClass(a.highlight1).find("." + a.piece).css("display", "none"))
            }
            function Z(e, n) {
                w.css({
                    left: e - X / 2,
                    top: n - X / 2
                });
                var t = W(e, n);
                t !== M && (g(M) && r("#" + R[M]).removeClass(a.highlight2),
                g(t) && r("#" + R[t]).addClass(a.highlight2),
                d(c.onDragMove) && c.onDragMove(t, M, N, I, p(B), C),
                M = t)
            }
            function _(e) {
                var n = "drop";
                if ("offboard" === e && "snapback" === c.dropOffBoard && (n = "snapback"),
                "offboard" === e && "trash" === c.dropOffBoard && (n = "trash"),
                d(c.onDrop)) {
                    var t = p(B);
                    "spare" === N && g(e) && (t[e] = I),
                    g(N) && "offboard" === e && delete t[N],
                    g(N) && g(e) && (delete t[N],
                    t[e] = I);
                    var o = p(B)
                      , a = c.onDrop(N, e, I, t, o, C);
                    "snapback" !== a && "trash" !== a || (n = a)
                }
                "snapback" === n ? function() {
                    if ("spare" !== N) {
                        G();
                        var e = r("#" + R[N]).offset()
                          , n = {
                            duration: c.snapbackSpeed,
                            complete: function() {
                                z(),
                                w.css("display", "none"),
                                d(c.onSnapbackEnd) && c.onSnapbackEnd(I, N, p(B), C)
                            }
                        };
                        w.animate(e, n),
                        j = !1
                    } else
                        H()
                }() : "trash" === n ? H() : "drop" === n && function(e) {
                    G();
                    var n = p(B);
                    delete n[N],
                    n[e] = I,
                    A(n);
                    var t = r("#" + R[e]).offset()
                      , o = {
                        duration: c.snapSpeed,
                        complete: function() {
                            z(),
                            w.css("display", "none"),
                            d(c.onSnapEnd) && c.onSnapEnd(N, e, I)
                        }
                    };
                    w.animate(t, o),
                    j = !1
                }(e)
            }
            function ee(e) {
                e.preventDefault()
            }
            function re(e) {
                if (c.draggable) {
                    var n = r(this).attr("data-square");
                    g(n) && B.hasOwnProperty(n) && V(n, B[n], e.pageX, e.pageY)
                }
            }
            function ne(e) {
                if (c.draggable) {
                    var n = r(this).attr("data-square");
                    g(n) && B.hasOwnProperty(n) && (e = e.originalEvent,
                    V(n, B[n], e.changedTouches[0].pageX, e.changedTouches[0].pageY))
                }
            }
            function te(e) {
                c.sparePieces && V("spare", r(this).attr("data-piece"), e.pageX, e.pageY)
            }
            function oe(e) {
                c.sparePieces && V("spare", r(this).attr("data-piece"), (e = e.originalEvent).changedTouches[0].pageX, e.changedTouches[0].pageY)
            }
            k.clear = function(e) {
                k.position({}, e)
            }
            ,
            k.destroy = function() {
                l.html(""),
                w.remove(),
                l.unbind()
            }
            ,
            k.fen = function() {
                return k.position("fen")
            }
            ,
            k.flip = function() {
                return k.orientation("flip")
            }
            ,
            k.move = function() {
                if (0 !== arguments.length) {
                    for (var e = !0, r = {}, n = 0; n < arguments.length; n++)
                        if (!1 !== arguments[n])
                            if (v(arguments[n])) {
                                var t = arguments[n].split("-");
                                r[t[0]] = t[1]
                            } else
                                Y(2826, "Invalid move passed to the move method.", arguments[n]);
                        else
                            e = !1;
                    var o = function(e, r) {
                        var n = p(e);
                        for (var t in r)
                            if (r.hasOwnProperty(t) && n.hasOwnProperty(t)) {
                                var o = n[t];
                                delete n[t],
                                n[r[t]] = o
                            }
                        return n
                    }(B, r);
                    return k.position(o, e),
                    o
                }
            }
            ,
            k.orientation = function(e) {
                return 0 === arguments.length ? C : "white" === e || "black" === e ? (C = e,
                F(),
                C) : "flip" === e ? (C = "white" === C ? "black" : "white",
                F(),
                C) : void Y(5482, "Invalid value passed to the orientation method.", e)
            }
            ,
            k.position = function(e, n) {
                return 0 === arguments.length ? p(B) : f(e) && "fen" === e.toLowerCase() ? x(B) : (f(e) && "start" === e.toLowerCase() && (e = p(o)),
                b(e) && (e = P(e)),
                void (m(e) ? (!1 !== n && (n = !0),
                n ? (function(e, n, t) {
                    if (0 !== e.length)
                        for (var o = 0, i = 0; i < e.length; i++) {
                            var s = e[i];
                            "clear" === s.type ? r("#" + R[s.square] + " ." + a.piece).fadeOut(c.trashSpeed, u) : "add" !== s.type || c.sparePieces ? "add" === s.type && c.sparePieces ? J(s.piece, s.square, u) : "move" === s.type && $(s.source, s.destination, s.piece, u) : r("#" + R[s.square]).append(L(s.piece, !0)).find("." + a.piece).fadeIn(c.appearSpeed, u)
                        }
                    function u() {
                        (o += 1) === e.length && (z(),
                        d(c.onMoveEnd) && c.onMoveEnd(p(n), p(t)))
                    }
                }(function(e, r) {
                    e = p(e),
                    r = p(r);
                    var n = []
                      , t = {};
                    for (var o in r)
                        r.hasOwnProperty(o) && e.hasOwnProperty(o) && e[o] === r[o] && (delete e[o],
                        delete r[o]);
                    for (o in r)
                        if (r.hasOwnProperty(o)) {
                            var a = O(e, r[o], o);
                            a && (n.push({
                                type: "move",
                                source: a,
                                destination: o,
                                piece: r[o]
                            }),
                            delete e[a],
                            delete r[o],
                            t[o] = !0)
                        }
                    for (o in r)
                        r.hasOwnProperty(o) && (n.push({
                            type: "add",
                            square: o,
                            piece: r[o]
                        }),
                        delete r[o]);
                    for (o in e)
                        e.hasOwnProperty(o) && (t.hasOwnProperty(o) || (n.push({
                            type: "clear",
                            square: o,
                            piece: e[o]
                        }),
                        delete e[o]));
                    return n
                }(B, e), B, e),
                A(e)) : (A(e),
                z())) : Y(6482, "Invalid value passed to the position method.", e)))
            }
            ,
            k.resize = function() {
                X = function() {
                    var e = parseInt(l.width(), 10);
                    if (!e || e <= 0)
                        return 0;
                    for (var r = e - 1; r % 8 != 0 && 0 < r; )
                        r -= 1;
                    return r / 8
                }(),
                h.css("width", 8 * X + "px"),
                w.css({
                    height: X,
                    width: X
                }),
                c.sparePieces && l.find("." + a.sparePieces).css("paddingLeft", X + E + "px"),
                F()
            }
            ,
            k.start = function(e) {
                k.position("start", e)
            }
            ;
            var ae = i((function(e) {
                j && Z(e.pageX, e.pageY)
            }
            ), c.dragThrottleRate)
              , ie = i((function(e) {
                j && (e.preventDefault(),
                Z(e.originalEvent.changedTouches[0].pageX, e.originalEvent.changedTouches[0].pageY))
            }
            ), c.dragThrottleRate);
            function se(e) {
                j && _(W(e.pageX, e.pageY))
            }
            function pe(e) {
                j && _(W(e.originalEvent.changedTouches[0].pageX, e.originalEvent.changedTouches[0].pageY))
            }
            function ce(e) {
                if (!j && d(c.onMouseoverSquare)) {
                    var n = r(e.currentTarget).attr("data-square");
                    if (g(n)) {
                        var t = !1;
                        B.hasOwnProperty(n) && (t = B[n]),
                        c.onMouseoverSquare(n, t, p(B), C)
                    }
                }
            }
            function ue(e) {
                if (!j && d(c.onMouseoutSquare)) {
                    var n = r(e.currentTarget).attr("data-square");
                    if (g(n)) {
                        var t = !1;
                        B.hasOwnProperty(n) && (t = B[n]),
                        c.onMouseoutSquare(n, t, p(B), C)
                    }
                }
            }
            return C = c.orientation,
            c.hasOwnProperty("position") && ("start" === c.position ? B = p(o) : b(c.position) ? B = P(c.position) : m(c.position) ? B = p(c.position) : Y(7263, "Invalid value passed to config.position.", c.position)),
            function() {
                !function() {
                    for (var e = 0; e < n.length; e++)
                        for (var r = 1; r <= 8; r++) {
                            var t = n[e] + r;
                            R[t] = t + "-" + s()
                        }
                    var o = "KQRNBP".split("");
                    for (e = 0; e < o.length; e++) {
                        var a = "w" + o[e]
                          , i = "b" + o[e];
                        D[a] = a + "-" + s(),
                        D[i] = i + "-" + s()
                    }
                }(),
                l.html(function(e) {
                    var r = '<div class="{chessboard}">';
                    return e && (r += '<div class="{sparePieces} {sparePiecesTop}"></div>'),
                    r += '<div class="{board}"></div>',
                    e && (r += '<div class="{sparePieces} {sparePiecesBottom}"></div>'),
                    u(r += "</div>", a)
                }(c.sparePieces)),
                h = l.find("." + a.board),
                c.sparePieces && (T = l.find("." + a.sparePiecesTop),
                q = l.find("." + a.sparePiecesBottom));
                var e = s();
                r("body").append(L("wP", !0, e)),
                w = r("#" + e),
                E = parseInt(h.css("borderLeftWidth"), 10),
                k.resize()
            }(),
            function() {
                r("body").on("mousedown mousemove", "." + a.piece, ee),
                h.on("mousedown", "." + a.square, re),
                l.on("mousedown", "." + a.sparePieces + " ." + a.piece, te),
                h.on("mouseenter", "." + a.square, ce).on("mouseleave", "." + a.square, ue);
                var e = r(window);
                e.on("mousemove", ae).on("mouseup", se),
                "ontouchstart"in document.documentElement && (h.on("touchstart", "." + a.square, ne),
                l.on("touchstart", "." + a.sparePieces + " ." + a.piece, oe),
                e.on("touchmove", ie).on("touchend", pe))
            }(),
            k
        }
        ,
        window.ChessBoard = window.Chessboard,
        window.Chessboard.fenToObj = P,
        window.Chessboard.objToFen = x
    }()
}
)();
