!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [], i = e.document, r = Object.getPrototypeOf, o = n.slice, s = n.concat, a = n.push, l = n.indexOf, c = {},
        u = c.toString, f = c.hasOwnProperty, h = f.toString, d = h.call(Object), p = {}, g = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }, m = function (e) {
            return null != e && e === e.window
        }, v = {type: !0, src: !0, noModule: !0};

    function y(e, t, n) {
        var r, o = (t = t || i).createElement("script");
        if (o.text = e, n) for (r in v) n[r] && (o[r] = n[r]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
    }

    var _ = function (e, t) {
        return new _.fn.init(e, t)
    }, w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function E(e) {
        var t = !!e && "length" in e && e.length, n = b(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    _.fn = _.prototype = {
        jquery: "3.3.1", constructor: _, length: 0, toArray: function () {
            return o.call(this)
        }, get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = _.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return _.each(this, e)
        }, map: function (e) {
            return this.pushStack(_.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(o.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: a, sort: n.sort, splice: n.splice
    }, _.extend = _.fn.extend = function () {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || g(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (_.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && _.isPlainObject(n) ? n : {}, s[t] = _.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, _.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && ("function" != typeof (n = f.call(t, "constructor") && t.constructor) || h.call(n) !== d))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e) {
            y(e)
        }, each: function (e, t) {
            var n, i = 0;
            if (E(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(w, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (E(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        }, grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        }, map: function (e, t, n) {
            var i, r, o = 0, a = [];
            if (E(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r); else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
            return s.apply([], a)
        }, guid: 1, support: p
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var T = function (e) {
        var t, n, i, r, o, s, a, l, c, u, f, h, d, p, g, m, v, y, b, _ = "sizzle" + 1 * new Date, w = e.document, E = 0,
            T = 0, x = se(), C = se(), S = se(), A = function (e, t) {
                return e === t && (f = !0), 0
            }, D = {}.hasOwnProperty, N = [], k = N.pop, I = N.push, L = N.push, O = N.slice, j = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            R = "\\[" + P + "*(" + W + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + P + "*\\]",
            M = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            q = new RegExp(P + "+", "g"), Y = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            F = new RegExp("^" + P + "*," + P + "*"), X = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            B = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"), U = new RegExp(M),
            K = new RegExp("^" + W + "$"), Q = {
                ID: new RegExp("^#(" + W + ")"),
                CLASS: new RegExp("^\\.(" + W + ")"),
                TAG: new RegExp("^(" + W + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + M),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            }, V = /^(?:input|select|textarea|button)$/i, z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), ee = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, ie = function () {
                h()
            }, re = ye(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            L.apply(N = O.call(w.childNodes), w.childNodes), N[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: N.length ? function (e, t) {
                    I.apply(e, O.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, i, r) {
            var o, a, c, u, f, p, v, y = t && t.ownerDocument, E = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E) return i;
            if (!r && ((t ? t.ownerDocument || t : w) !== d && h(t), t = t || d, g)) {
                if (11 !== E && (f = G.exec(e))) if (o = f[1]) {
                    if (9 === E) {
                        if (!(c = t.getElementById(o))) return i;
                        if (c.id === o) return i.push(c), i
                    } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i
                } else {
                    if (f[2]) return L.apply(i, t.getElementsByTagName(e)), i;
                    if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(o)), i
                }
                if (n.qsa && !S[e + " "] && (!m || !m.test(e))) {
                    if (1 !== E) y = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = _), a = (p = s(e)).length; a--;) p[a] = "#" + u + " " + ve(p[a]);
                        v = p.join(","), y = J.test(e) && ge(t.parentNode) || t
                    }
                    if (v) try {
                        return L.apply(i, y.querySelectorAll(v)), i
                    } catch (e) {
                    } finally {
                        u === _ && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(Y, "$1"), t, i, r)
        }

        function se() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
        }

        function ae(e) {
            return e[_] = !0, e
        }

        function le(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
        }

        function ue(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function he(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function de(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function pe(e) {
            return ae(function (t) {
                return t = +t, ae(function (n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        for (t in n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, h = oe.setDocument = function (e) {
            var t, r, s = e ? e.ownerDocument || e : w;
            return s !== d && 9 === s.nodeType && s.documentElement ? (p = (d = s).documentElement, g = !o(d), w !== d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = le(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = le(function (e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = $.test(d.getElementsByClassName), n.getById = le(function (e) {
                return p.appendChild(e).id = _, !d.getElementsByName || !d.getElementsByName(_).length
            }), n.getById ? (i.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (i.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, v = [], m = [], (n.qsa = $.test(d.querySelectorAll)) && (le(function (e) {
                p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]")
            }), le(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
            })), (n.matchesSelector = $.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function (e) {
                n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", M)
            }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = $.test(p.compareDocumentPosition), b = t || $.test(p.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, A = t ? function (e, t) {
                if (e === t) return f = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === d || e.ownerDocument === w && b(w, e) ? -1 : t === d || t.ownerDocument === w && b(w, t) ? 1 : u ? j(u, e) - j(u, t) : 0 : 4 & i ? -1 : 1)
            } : function (e, t) {
                if (e === t) return f = !0, 0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], a = [t];
                if (!r || !o) return e === d ? -1 : t === d ? 1 : r ? -1 : o ? 1 : u ? j(u, e) - j(u, t) : 0;
                if (r === o) return ue(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (; s[i] === a[i];) i++;
                return i ? ue(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
            }, d) : d
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== d && h(e), t = t.replace(B, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                var i = y.call(e, t);
                if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {
            }
            return oe(t, d, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && h(e), b(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && h(e);
            var r = i.attrHandle[t.toLowerCase()],
                o = r && D.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, i = [], r = 0, o = 0;
            if (f = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(A), f) {
                for (; t = e[o++];) t === e[o] && (r = i.push(o));
                for (; r--;) e.splice(i[r], 1)
            }
            return u = null, e
        }, r = oe.getText = function (e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[i++];) n += r(t);
            return n
        }, (i = oe.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = x[e + " "];
                    return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && x(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, n) {
                    return function (i) {
                        var r = oe.attr(i, e);
                        return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, f, h, d, p, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (h = t; h = h[g];) if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                for (b = (d = (c = (u = (f = (h = m)[_] || (h[_] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === E && c[1]) && c[2], h = d && m.childNodes[d]; h = ++d && h && h[g] || (b = d = 0) || p.pop();) if (1 === h.nodeType && ++b && h === t) {
                                    u[e] = [E, d, b];
                                    break
                                }
                            } else if (y && (b = d = (c = (u = (f = (h = t)[_] || (h[_] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === E && c[1]), !1 === b) for (; (h = ++d && h && h[g] || (b = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (f = h[_] || (h[_] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] = [E, b]), h !== t));) ;
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return r[_] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, n) {
                        for (var i, o = r(e, t), s = o.length; s--;) e[i = j(e, o[s])] = !(n[i] = o[s])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: ae(function (e) {
                    var t = [], n = [], i = a(e.replace(Y, "$1"));
                    return i[_] ? ae(function (e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;) (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: ae(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }), contains: ae(function (e) {
                    return e = e.replace(Z, ee), function (t) {
                        return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                    }
                }), lang: ae(function (e) {
                    return K.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === p
                }, focus: function (e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: de(!1), disabled: de(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !i.pseudos.empty(e)
                }, header: function (e) {
                    return z.test(e.nodeName)
                }, input: function (e) {
                    return V.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: pe(function () {
                    return [0]
                }), last: pe(function (e, t) {
                    return [t - 1]
                }), eq: pe(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: pe(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: pe(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: pe(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }), gt: pe(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = i.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[t] = fe(t);
        for (t in {submit: !0, reset: !0}) i.pseudos[t] = he(t);

        function me() {
        }

        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ye(e, t, n) {
            var i = t.dir, r = t.next, o = r || i, s = n && "parentNode" === o, a = T++;
            return t.first ? function (t, n, r) {
                for (; t = t[i];) if (1 === t.nodeType || s) return e(t, n, r);
                return !1
            } : function (t, n, l) {
                var c, u, f, h = [E, a];
                if (l) {
                    for (; t = t[i];) if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else for (; t = t[i];) if (1 === t.nodeType || s) if (u = (f = t[_] || (t[_] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t; else {
                    if ((c = u[o]) && c[0] === E && c[1] === a) return h[2] = c[2];
                    if (u[o] = h, h[2] = e(t, n, l)) return !0
                }
                return !1
            }
        }

        function be(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function _e(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
            return s
        }

        function we(e, t, n, i, r, o) {
            return i && !i[_] && (i = we(i)), r && !r[_] && (r = we(r, o)), ae(function (o, s, a, l) {
                var c, u, f, h = [], d = [], p = s.length, g = o || function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []), m = !e || !o && t ? g : _e(g, h, e, a, l),
                    v = n ? r || (o ? e : p || i) ? [] : s : m;
                if (n && n(m, v, a, l), i) for (c = _e(v, d), i(c, [], a, l), u = c.length; u--;) (f = c[u]) && (v[d[u]] = !(m[d[u]] = f));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = v.length; u--;) (f = v[u]) && c.push(m[u] = f);
                            r(null, v = [], c, l)
                        }
                        for (u = v.length; u--;) (f = v[u]) && (c = r ? j(o, f) : h[u]) > -1 && (o[c] = !(s[c] = f))
                    }
                } else v = _e(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : L.apply(s, v)
            })
        }

        function Ee(e) {
            for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = ye(function (e) {
                return e === t
            }, a, !0), f = ye(function (e) {
                return j(t, e) > -1
            }, a, !0), h = [function (e, n, i) {
                var r = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : f(e, n, i));
                return t = null, r
            }]; l < o; l++) if (n = i.relative[e[l].type]) h = [ye(be(h), n)]; else {
                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                    for (r = ++l; r < o && !i.relative[e[r].type]; r++) ;
                    return we(l > 1 && be(h), l > 1 && ve(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(Y, "$1"), n, l < r && Ee(e.slice(l, r)), r < o && Ee(e = e.slice(r)), r < o && ve(e))
                }
                h.push(n)
            }
            return be(h)
        }

        function Te(e, t) {
            var n = t.length > 0, r = e.length > 0, o = function (o, s, a, l, u) {
                var f, p, m, v = 0, y = "0", b = o && [], _ = [], w = c, T = o || r && i.find.TAG("*", u),
                    x = E += null == w ? 1 : Math.random() || .1, C = T.length;
                for (u && (c = s === d || s || u); y !== C && null != (f = T[y]); y++) {
                    if (r && f) {
                        for (p = 0, s || f.ownerDocument === d || (h(f), a = !g); m = e[p++];) if (m(f, s || d, a)) {
                            l.push(f);
                            break
                        }
                        u && (E = x)
                    }
                    n && ((f = !m && f) && v--, o && b.push(f))
                }
                if (v += y, n && y !== v) {
                    for (p = 0; m = t[p++];) m(b, _, s, a);
                    if (o) {
                        if (v > 0) for (; y--;) b[y] || _[y] || (_[y] = k.call(l));
                        _ = _e(_)
                    }
                    L.apply(l, _), u && !o && _.length > 0 && v + t.length > 1 && oe.uniqueSort(l)
                }
                return u && (E = x, c = w), b
            };
            return n ? ae(o) : o
        }

        return me.prototype = i.filters = i.pseudos, i.setFilters = new me, s = oe.tokenize = function (e, t) {
            var n, r, o, s, a, l, c, u = C[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, l = [], c = i.preFilter; a;) {
                for (s in n && !(r = F.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(Y, " ")
                }), a = a.slice(n.length)), i.filter) !(r = Q[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? oe.error(e) : C(e, l).slice(0)
        }, a = oe.compile = function (e, t) {
            var n, i = [], r = [], o = S[e + " "];
            if (!o) {
                for (t || (t = s(e)), n = t.length; n--;) (o = Ee(t[n]))[_] ? i.push(o) : r.push(o);
                (o = S(e, Te(r, i))).selector = e
            }
            return o
        }, l = oe.select = function (e, t, n, r) {
            var o, l, c, u, f, h = "function" == typeof e && e, d = !r && s(e = h.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((l = d[0] = d[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = Q.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);) if ((f = i.find[u]) && (r = f(c.matches[0].replace(Z, ee), J.test(l[0].type) && ge(t.parentNode) || t))) {
                    if (l.splice(o, 1), !(e = r.length && ve(l))) return L.apply(n, r), n;
                    break
                }
            }
            return (h || a(e, d))(r, t, !g, n, !t || J.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = _.split("").sort(A).join("") === _, n.detectDuplicates = !!f, h(), n.sortDetached = le(function (e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), le(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && le(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function (e) {
            return null == e.getAttribute("disabled")
        }) || ce(H, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), oe
    }(e);
    _.find = T, _.expr = T.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = T.uniqueSort, _.text = T.getText, _.isXMLDoc = T.isXML, _.contains = T.contains, _.escapeSelector = T.escape;
    var x = function (e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (r && _(e).is(n)) break;
            i.push(e)
        }
        return i
    }, C = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, S = _.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function N(e, t, n) {
        return g(t) ? _.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? _.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? _.grep(e, function (e) {
            return l.call(t, e) > -1 !== n
        }) : _.filter(t, e, n)
    }

    _.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? _.find.matchesSelector(i, e) ? [i] : [] : _.find.matches(e, _.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, _.fn.extend({
        find: function (e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e) return this.pushStack(_(e).filter(function () {
                for (t = 0; t < i; t++) if (_.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) _.find(e, r[t], n);
            return i > 1 ? _.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(N(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(N(this, e || [], !0))
        }, is: function (e) {
            return !!N(this, "string" == typeof e && S.test(e) ? _(e) : e || [], !1).length
        }
    });
    var k, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || k, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), D.test(r[1]) && _.isPlainObject(t)) for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this)
    }).prototype = _.fn, k = _(i);
    var L = /^(?:parents|prev(?:Until|All))/, O = {children: !0, contents: !0, next: !0, prev: !0};

    function j(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    _.fn.extend({
        has: function (e) {
            var t = _(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (_.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, i = 0, r = this.length, o = [], s = "string" != typeof e && _(e);
            if (!S.test(e)) for (; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? _.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? l.call(_(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), _.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return x(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return x(e, "parentNode", n)
        }, next: function (e) {
            return j(e, "nextSibling")
        }, prev: function (e) {
            return j(e, "previousSibling")
        }, nextAll: function (e) {
            return x(e, "nextSibling")
        }, prevAll: function (e) {
            return x(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return x(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return x(e, "previousSibling", n)
        }, siblings: function (e) {
            return C((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return C(e.firstChild)
        }, contents: function (e) {
            return A(e, "iframe") ? e.contentDocument : (A(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
        }
    }, function (e, t) {
        _.fn[e] = function (n, i) {
            var r = _.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = _.filter(i, r)), this.length > 1 && (O[e] || _.uniqueSort(r), L.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function W(e) {
        throw e
    }

    function R(e, t, n, i) {
        var r;
        try {
            e && g(r = e.promise) ? r.call(e).done(t).fail(n) : e && g(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    _.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
            var t = {};
            return _.each(e.match(H) || [], function (e, n) {
                t[n] = !0
            }), t
        }(e) : _.extend({}, e);
        var t, n, i, r, o = [], s = [], a = -1, l = function () {
            for (r = r || e.once, i = t = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
            e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
        }, c = {
            add: function () {
                return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
                    _.each(n, function (n, i) {
                        g(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== b(i) && t(i)
                    })
                }(arguments), n && !t && l()), this
            }, remove: function () {
                return _.each(arguments, function (e, t) {
                    for (var n; (n = _.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                }), this
            }, has: function (e) {
                return e ? _.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return r = s = [], o = n = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return r = s = [], n || t || (o = n = ""), this
            }, locked: function () {
                return !!r
            }, fireWith: function (e, n) {
                return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return c
    }, _.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2], ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", r = {
                    state: function () {
                        return i
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return r.then(null, e)
                    }, pipe: function () {
                        var e = arguments;
                        return _.Deferred(function (t) {
                            _.each(n, function (n, i) {
                                var r = g(e[i[4]]) && e[i[4]];
                                o[i[1]](function () {
                                    var e = r && r.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, then: function (t, i, r) {
                        var o = 0;

                        function s(t, n, i, r) {
                            return function () {
                                var a = this, l = arguments, c = function () {
                                    var e, c;
                                    if (!(t < o)) {
                                        if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        c = e && ("object" == typeof e || "function" == typeof e) && e.then, g(c) ? r ? c.call(e, s(o, n, P, r), s(o, n, W, r)) : (o++, c.call(e, s(o, n, P, r), s(o, n, W, r), s(o, n, P, n.notifyWith))) : (i !== P && (a = void 0, l = [e]), (r || n.resolveWith)(a, l))
                                    }
                                }, u = r ? c : function () {
                                    try {
                                        c()
                                    } catch (e) {
                                        _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= o && (i !== W && (a = void 0, l = [e]), n.rejectWith(a, l))
                                    }
                                };
                                t ? u() : (_.Deferred.getStackHook && (u.stackTrace = _.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }

                        return _.Deferred(function (e) {
                            n[0][3].add(s(0, e, g(r) ? r : P, e.notifyWith)), n[1][3].add(s(0, e, g(t) ? t : P)), n[2][3].add(s(0, e, g(i) ? i : W))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? _.extend(e, r) : r
                    }
                }, o = {};
            return _.each(n, function (e, t) {
                var s = t[2], a = t[5];
                r[t[1]] = s.add, a && s.add(function () {
                    i = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), r.promise(o), t && t.call(o, o), o
        }, when: function (e) {
            var t = arguments.length, n = t, i = Array(n), r = o.call(arguments), s = _.Deferred(), a = function (e) {
                return function (n) {
                    i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || s.resolveWith(i, r)
                }
            };
            if (t <= 1 && (R(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || g(r[n] && r[n].then))) return s.then();
            for (; n--;) R(r[n], a(n), s.reject);
            return s.promise()
        }
    });
    var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && M.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, _.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var q = _.Deferred();

    function Y() {
        i.removeEventListener("DOMContentLoaded", Y), e.removeEventListener("load", Y), _.ready()
    }

    _.fn.ready = function (e) {
        return q.then(e).catch(function (e) {
            _.readyException(e)
        }), this
    }, _.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0, !0 !== e && --_.readyWait > 0 || q.resolveWith(i, [_]))
        }
    }), _.ready.then = q.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(_.ready) : (i.addEventListener("DOMContentLoaded", Y), e.addEventListener("load", Y));
    var F = function (e, t, n, i, r, o, s) {
        var a = 0, l = e.length, c = null == n;
        if ("object" === b(n)) for (a in r = !0, n) F(e, t, a, n[a], !0, o, s); else if (void 0 !== i && (r = !0, g(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
            return c.call(_(e), n)
        })), t)) for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
    }, X = /^-ms-/, B = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function K(e) {
        return e.replace(X, "ms-").replace(B, U)
    }

    var Q = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function V() {
        this.expando = _.expando + V.uid++
    }

    V.uid = 1, V.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[K(t)] = n; else for (i in t) r[K(i)] = t[i];
            return r
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in i ? [t] : t.match(H) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                (void 0 === t || _.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !_.isEmptyObject(t)
        }
    };
    var z = new V, $ = new V, G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, J = /[A-Z]/g;

    function Z(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = function (e) {
                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : G.test(e) ? JSON.parse(e) : e)
                }(n)
            } catch (e) {
            }
            $.set(e, t, n)
        } else n = void 0;
        return n
    }

    _.extend({
        hasData: function (e) {
            return $.hasData(e) || z.hasData(e)
        }, data: function (e, t, n) {
            return $.access(e, t, n)
        }, removeData: function (e, t) {
            $.remove(e, t)
        }, _data: function (e, t, n) {
            return z.access(e, t, n)
        }, _removeData: function (e, t) {
            z.remove(e, t)
        }
    }), _.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = $.get(o), 1 === o.nodeType && !z.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = K(i.slice(5)), Z(o, i, r[i]));
                    z.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                $.set(this, e)
            }) : F(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = $.get(o, e))) return n;
                    if (void 0 !== (n = Z(o, e))) return n
                } else this.each(function () {
                    $.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                $.remove(this, e)
            })
        }
    }), _.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = z.get(e, t), n && (!i || Array.isArray(n) ? i = z.access(e, t, _.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = _.queue(e, t), i = n.length, r = n.shift(), o = _._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
                _.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return z.get(e, n) || z.access(e, n, {
                empty: _.Callbacks("once memory").add(function () {
                    z.remove(e, [t + "queue", n])
                })
            })
        }
    }), _.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = _.queue(this, e, t);
                _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                _.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, r = _.Deferred(), o = this, s = this.length, a = function () {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = z.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"], ie = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && _.contains(e.ownerDocument, e) && "none" === _.css(e, "display")
        }, re = function (e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
            return r
        };

    function oe(e, t, n, i) {
        var r, o, s = 20, a = i ? function () {
                return i.cur()
            } : function () {
                return _.css(e, t, "")
            }, l = a(), c = n && n[3] || (_.cssNumber[t] ? "" : "px"),
            u = (_.cssNumber[t] || "px" !== c && +l) && te.exec(_.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) _.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
            u *= 2, _.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    var se = {};

    function ae(e) {
        var t, n = e.ownerDocument, i = e.nodeName, r = se[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = _.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), se[i] = r, r)
    }

    function le(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++) (i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = z.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ie(i) && (r[o] = ae(i))) : "none" !== n && (r[o] = "none", z.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }

    _.fn.extend({
        show: function () {
            return le(this, !0)
        }, hide: function () {
            return le(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ie(this) ? _(this).show() : _(this).hide()
            })
        }
    });
    var ce = /^(?:checkbox|radio)$/i, ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, fe = /^$|^module$|\/(?:java|ecma)script/i,
        he = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function de(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? _.merge([e], n) : n
    }

    function pe(e, t) {
        for (var n = 0, i = e.length; n < i; n++) z.set(e[n], "globalEval", !t || z.get(t[n], "globalEval"))
    }

    he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;
    var ge = /<|&#?\w+;/;

    function me(e, t, n, i, r) {
        for (var o, s, a, l, c, u, f = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++) if ((o = e[d]) || 0 === o) if ("object" === b(o)) _.merge(h, o.nodeType ? [o] : o); else if (ge.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (ue.exec(o) || ["", ""])[1].toLowerCase(), l = he[a] || he._default, s.innerHTML = l[1] + _.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
            _.merge(h, s.childNodes), (s = f.firstChild).textContent = ""
        } else h.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = h[d++];) if (i && _.inArray(o, i) > -1) r && r.push(o); else if (c = _.contains(o.ownerDocument, o), s = de(f.appendChild(o), "script"), c && pe(s), n) for (u = 0; o = s[u++];) fe.test(o.type || "") && n.push(o);
        return f
    }

    !function () {
        var e = i.createDocumentFragment().appendChild(i.createElement("div")), t = i.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), p.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var ve = i.documentElement, ye = /^key/, be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        _e = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Ee() {
        return !1
    }

    function Te() {
        try {
            return i.activeElement
        } catch (e) {
        }
    }

    function xe(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) xe(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ee; else if (!r) return e;
        return 1 === o && (s = r, (r = function (e) {
            return _().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = _.guid++)), e.each(function () {
            _.event.add(this, t, r, i, n)
        })
    }

    _.event = {
        global: {}, add: function (e, t, n, i, r) {
            var o, s, a, l, c, u, f, h, d, p, g, m = z.get(e);
            if (m) for (n.handler && (n = (o = n).handler, r = o.selector), r && _.find.matchesSelector(ve, r), n.guid || (n.guid = _.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
            }), c = (t = (t || "").match(H) || [""]).length; c--;) d = g = (a = _e.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), d && (f = _.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, f = _.event.special[d] || {}, u = _.extend({
                type: d,
                origType: g,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && _.expr.match.needsContext.test(r),
                namespace: p.join(".")
            }, o), (h = l[d]) || ((h = l[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), _.event.global[d] = !0)
        }, remove: function (e, t, n, i, r) {
            var o, s, a, l, c, u, f, h, d, p, g, m = z.hasData(e) && z.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(H) || [""]).length; c--;) if (d = g = (a = _e.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), d) {
                    for (f = _.event.special[d] || {}, h = l[d = (i ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) u = h[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(o, 1), u.selector && h.delegateCount--, f.remove && f.remove.call(e, u));
                    s && !h.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || _.removeEvent(e, d, m.handle), delete l[d])
                } else for (d in l) _.event.remove(e, d + t[c], n, i, !0);
                _.isEmptyObject(l) && z.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, i, r, o, s, a = _.event.fix(e), l = new Array(arguments.length),
                c = (z.get(this, "events") || {})[a.type] || [], u = _.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = _.event.handlers.call(this, a, c), t = 0; (r = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((_.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        }, handlers: function (e, t) {
            var n, i, r, o, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? _(r, this).index(c) > -1 : _.find(r, this, null, [c]).length), s[r] && o.push(i);
                o.length && a.push({elem: c, handlers: o})
            }
            return c = this, l < t.length && a.push({elem: c, handlers: t.slice(l)}), a
        }, addProp: function (e, t) {
            Object.defineProperty(_.Event.prototype, e, {
                enumerable: !0, configurable: !0, get: g(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                }, set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[_.expando] ? e : new _.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== Te() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === Te() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && A(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return A(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, _.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, _.Event = function (e, t) {
        if (!(this instanceof _.Event)) return new _.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0
    }, _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, _.event.addProp), _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        _.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = e.relatedTarget, r = e.handleObj;
                return i && (i === this || _.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), _.fn.extend({
        on: function (e, t, n, i) {
            return xe(this, e, t, n, i)
        }, one: function (e, t, n, i) {
            return xe(this, e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, _(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
                _.event.remove(this, e, n, t)
            })
        }
    });
    var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Se = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ne(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
    }

    function ke(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ie(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (z.hasData(e) && (o = z.access(e), s = z.set(t, o), c = o.events)) for (r in delete s.handle, s.events = {}, c) for (n = 0, i = c[r].length; n < i; n++) _.event.add(t, r, c[r][n]);
            $.hasData(e) && (a = $.access(e), l = _.extend({}, a), $.set(t, l))
        }
    }

    function Oe(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ce.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function je(e, t, n, i) {
        t = s.apply([], t);
        var r, o, a, l, c, u, f = 0, h = e.length, d = h - 1, m = t[0], v = g(m);
        if (v || h > 1 && "string" == typeof m && !p.checkClone && Ae.test(m)) return e.each(function (r) {
            var o = e.eq(r);
            v && (t[0] = m.call(this, r, o.html())), je(o, t, n, i)
        });
        if (h && (o = (r = me(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (l = (a = _.map(de(r, "script"), ke)).length; f < h; f++) c = r, f !== d && (c = _.clone(c, !0, !0), l && _.merge(a, de(c, "script"))), n.call(e[f], c, f);
            if (l) for (u = a[a.length - 1].ownerDocument, _.map(a, Ie), f = 0; f < l; f++) c = a[f], fe.test(c.type || "") && !z.access(c, "globalEval") && _.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? _._evalUrl && _._evalUrl(c.src) : y(c.textContent.replace(De, ""), u, c))
        }
        return e
    }

    function He(e, t, n) {
        for (var i, r = t ? _.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || _.cleanData(de(i)), i.parentNode && (n && _.contains(i.ownerDocument, i) && pe(de(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    _.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ce, "<$1></$2>")
        }, clone: function (e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0), l = _.contains(e.ownerDocument, e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e))) for (s = de(a), i = 0, r = (o = de(e)).length; i < r; i++) Oe(o[i], s[i]);
            if (t) if (n) for (o = o || de(e), s = s || de(a), i = 0, r = o.length; i < r; i++) Le(o[i], s[i]); else Le(e, a);
            return (s = de(a, "script")).length > 0 && pe(s, !l && de(e, "script")), a
        }, cleanData: function (e) {
            for (var t, n, i, r = _.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Q(n)) {
                if (t = n[z.expando]) {
                    if (t.events) for (i in t.events) r[i] ? _.event.remove(n, i) : _.removeEvent(n, i, t.handle);
                    n[z.expando] = void 0
                }
                n[$.expando] && (n[$.expando] = void 0)
            }
        }
    }), _.fn.extend({
        detach: function (e) {
            return He(this, e, !0)
        }, remove: function (e) {
            return He(this, e)
        }, text: function (e) {
            return F(this, function (e) {
                return void 0 === e ? _.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return je(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
            })
        }, prepend: function () {
            return je(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ne(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return je(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return je(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(de(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return _.clone(this, e, t)
            })
        }, html: function (e) {
            return F(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Se.test(e) && !he[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = _.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(de(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return je(this, arguments, function (t) {
                var n = this.parentNode;
                _.inArray(this, e) < 0 && (_.cleanData(de(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        _.fn[e] = function (e) {
            for (var n, i = [], r = _(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), _(r[s])[t](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), We = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, Re = new RegExp(ne.join("|"), "i");

    function Me(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || We(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || _.contains(e.ownerDocument, e) || (s = _.style(e, t)), !p.pixelBoxStyles() && Pe.test(s) && Re.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function qe(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ve.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                r = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", a = 36 === n(t.right), o = 36 === n(t.width), u.style.position = "absolute", s = 36 === u.offsetWidth || "absolute", ve.removeChild(c), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }

        var r, o, s, a, l, c = i.createElement("div"), u = i.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, _.extend(p, {
            boxSizingReliable: function () {
                return t(), o
            }, pixelBoxStyles: function () {
                return t(), a
            }, pixelPosition: function () {
                return t(), r
            }, reliableMarginLeft: function () {
                return t(), l
            }, scrollboxSize: function () {
                return t(), s
            }
        }))
    }();
    var Ye = /^(none|table(?!-c[ea]).+)/, Fe = /^--/,
        Xe = {position: "absolute", visibility: "hidden", display: "block"},
        Be = {letterSpacing: "0", fontWeight: "400"}, Ue = ["Webkit", "Moz", "ms"], Ke = i.createElement("div").style;

    function Qe(e) {
        var t = _.cssProps[e];
        return t || (t = _.cssProps[e] = function (e) {
            if (e in Ke) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;) if ((e = Ue[n] + t) in Ke) return e
        }(e) || e), t
    }

    function Ve(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function ze(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0, a = 0, l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += _.css(e, n + ne[s], !0, r)), i ? ("content" === n && (l -= _.css(e, "padding" + ne[s], !0, r)), "margin" !== n && (l -= _.css(e, "border" + ne[s] + "Width", !0, r))) : (l += _.css(e, "padding" + ne[s], !0, r), "padding" !== n ? l += _.css(e, "border" + ne[s] + "Width", !0, r) : a += _.css(e, "border" + ne[s] + "Width", !0, r));
        return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l
    }

    function $e(e, t, n) {
        var i = We(e), r = Me(e, t, i), o = "border-box" === _.css(e, "boxSizing", !1, i), s = o;
        if (Pe.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return s = s && (p.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === _.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + ze(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
    }

    function Ge(e, t, n, i, r) {
        return new Ge.prototype.init(e, t, n, i, r)
    }

    _.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Me(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = K(t), l = Fe.test(t), c = e.style;
                if (l || (t = Qe(a)), s = _.cssHooks[t] || _.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                "string" == (o = typeof n) && (r = te.exec(n)) && r[1] && (n = oe(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (_.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var r, o, s, a = K(t);
            return Fe.test(t) || (t = Qe(a)), (s = _.cssHooks[t] || _.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Me(e, t, i)), "normal" === r && t in Be && (r = Be[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), _.each(["height", "width"], function (e, t) {
        _.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !Ye.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? $e(e, t, i) : re(e, Xe, function () {
                    return $e(e, t, i)
                })
            }, set: function (e, n, i) {
                var r, o = We(e), s = "border-box" === _.css(e, "boxSizing", !1, o), a = i && ze(e, t, i, s, o);
                return s && p.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - ze(e, t, "border", !1, o) - .5)), a && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = _.css(e, t)), Ve(0, n, a)
            }
        }
    }), _.cssHooks.marginLeft = qe(p.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Me(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), _.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        _.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== e && (_.cssHooks[e + t].set = Ve)
    }), _.fn.extend({
        css: function (e, t) {
            return F(this, function (e, t, n) {
                var i, r, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = We(e), r = t.length; s < r; s++) o[t[s]] = _.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), _.Tween = Ge, Ge.prototype = {
        constructor: Ge, init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (_.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = Ge.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ge.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = Ge.propHooks[this.prop];
            return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ge.propHooks._default.set(this), this
        }
    }, Ge.prototype.init.prototype = Ge.prototype, Ge.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[_.cssProps[e.prop]] && !_.cssHooks[e.prop] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Ge.propHooks.scrollTop = Ge.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, _.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, _.fx = Ge.prototype.init, _.fx.step = {};
    var Je, Ze, et = /^(?:toggle|show|hide)$/, tt = /queueHooks$/;

    function nt() {
        Ze && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(nt) : e.setTimeout(nt, _.fx.interval), _.fx.tick())
    }

    function it() {
        return e.setTimeout(function () {
            Je = void 0
        }), Je = Date.now()
    }

    function rt(e, t) {
        var n, i = 0, r = {height: e};
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function ot(e, t, n) {
        for (var i, r = (st.tweeners[t] || []).concat(st.tweeners["*"]), o = 0, s = r.length; o < s; o++) if (i = r[o].call(n, t, e)) return i
    }

    function st(e, t, n) {
        var i, r, o = 0, s = st.prefilters.length, a = _.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r) return !1;
            for (var t = Je || it(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
            return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        }, c = a.promise({
            elem: e,
            props: _.extend({}, t),
            opts: _.extend(!0, {specialEasing: {}, easing: _.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Je || it(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = _.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? c.tweens.length : 0;
                if (r) return this;
                for (r = !0; n < i; n++) c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
            }
        }), u = c.props;
        for (function (e, t) {
            var n, i, r, o, s;
            for (n in e) if (r = t[i = K(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = _.cssHooks[i]) && "expand" in s) for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r); else t[i] = r
        }(u, c.opts.specialEasing); o < s; o++) if (i = st.prefilters[o].call(c, e, u, c.opts)) return g(i.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return _.map(u, ot, c), g(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), _.fx.timer(_.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    _.Animation = _.extend(st, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return oe(n.elem, e, te.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match(H);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], st.tweeners[n] = st.tweeners[n] || [], st.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var i, r, o, s, a, l, c, u, f = "width" in t || "height" in t, h = this, d = {}, p = e.style,
                g = e.nodeType && ie(e), m = z.get(e, "fxshow");
            for (i in n.queue || (null == (s = _._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                s.unqueued || a()
            }), s.unqueued++, h.always(function () {
                h.always(function () {
                    s.unqueued--, _.queue(e, "fx").length || s.empty.fire()
                })
            })), t) if (r = t[i], et.test(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    g = !0
                }
                d[i] = m && m[i] || _.style(e, i)
            }
            if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(d)) for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = z.get(e, "display")), "none" === (u = _.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = _.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === _.css(e, "float") && (l || (h.done(function () {
                p.display = c
            }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1, d) l || (m ? "hidden" in m && (g = m.hidden) : m = z.access(e, "fxshow", {display: c}), o && (m.hidden = !g), g && le([e], !0), h.done(function () {
                for (i in g || le([e]), z.remove(e, "fxshow"), d) _.style(e, i, d[i])
            })), l = ot(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }], prefilter: function (e, t) {
            t ? st.prefilters.unshift(e) : st.prefilters.push(e)
        }
    }), _.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? _.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            g(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue)
        }, i
    }, _.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(ie).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var r = _.isEmptyObject(e), o = _.speed(t, n, i), s = function () {
                var t = st(this, _.extend({}, e), o);
                (r || z.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, r = null != e && e + "queueHooks", o = _.timers, s = z.get(this);
                if (r) s[r] && s[r].stop && i(s[r]); else for (r in s) s[r] && s[r].stop && tt.test(r) && i(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                !t && n || _.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = z.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = _.timers, s = i ? i.length : 0;
                for (n.finish = !0, _.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function (e, t) {
        var n = _.fn[t];
        _.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(rt(t, !0), e, i, r)
        }
    }), _.each({
        slideDown: rt("show"),
        slideUp: rt("hide"),
        slideToggle: rt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        _.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), _.timers = [], _.fx.tick = function () {
        var e, t = 0, n = _.timers;
        for (Je = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || _.fx.stop(), Je = void 0
    }, _.fx.timer = function (e) {
        _.timers.push(e), _.fx.start()
    }, _.fx.interval = 13, _.fx.start = function () {
        Ze || (Ze = !0, nt())
    }, _.fx.stop = function () {
        Ze = null
    }, _.fx.speeds = {slow: 600, fast: 200, _default: 400}, _.fn.delay = function (t, n) {
        return t = _.fx && _.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(r)
            }
        })
    }, function () {
        var e = i.createElement("input"), t = i.createElement("select").appendChild(i.createElement("option"));
        e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
    }();
    var at, lt = _.expr.attrHandle;
    _.fn.extend({
        attr: function (e, t) {
            return F(this, _.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                _.removeAttr(this, e)
            })
        }
    }), _.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === o && _.isXMLDoc(e) || (r = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? at : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = _.find.attr(e, t)) ? void 0 : i)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!p.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i = 0, r = t && t.match(H);
            if (r && 1 === e.nodeType) for (; n = r[i++];) e.removeAttribute(n)
        }
    }), at = {
        set: function (e, t, n) {
            return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = lt[t] || _.find.attr;
        lt[t] = function (e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = lt[s], lt[s] = r, r = null != n(e, t, i) ? s : null, lt[s] = o), r
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i, ut = /^(?:a|area)$/i;

    function ft(e) {
        return (e.match(H) || []).join(" ")
    }

    function ht(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function dt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
    }

    _.fn.extend({
        prop: function (e, t) {
            return F(this, _.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[_.propFix[e] || e]
            })
        }
    }), _.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && _.isXMLDoc(e) || (t = _.propFix[t] || t, r = _.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = _.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), p.optSelected || (_.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        _.propFix[this.toLowerCase()] = this
    }), _.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (g(e)) return this.each(function (t) {
                _(this).addClass(e.call(this, t, ht(this)))
            });
            if ((t = dt(e)).length) for (; n = this[l++];) if (r = ht(n), i = 1 === n.nodeType && " " + ft(r) + " ") {
                for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                r !== (a = ft(i)) && n.setAttribute("class", a)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (g(e)) return this.each(function (t) {
                _(this).removeClass(e.call(this, t, ht(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = dt(e)).length) for (; n = this[l++];) if (r = ht(n), i = 1 === n.nodeType && " " + ft(r) + " ") {
                for (s = 0; o = t[s++];) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                r !== (a = ft(i)) && n.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                _(this).toggleClass(e.call(this, n, ht(this), t), t)
            }) : this.each(function () {
                var t, r, o, s;
                if (i) for (r = 0, o = _(this), s = dt(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = ht(this)) && z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : z.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + ft(ht(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var pt = /\r/g;
    _.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = g(e), this.each(function (n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, _(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = _.map(r, function (e) {
                    return null == e ? "" : e + ""
                })), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(pt, "") : null == n ? "" : n : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = _.find.attr(e, "value");
                    return null != t ? t : ft(_.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, i, r = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++) if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                        if (t = _(n).val(), s) return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    for (var n, i, r = e.options, o = _.makeArray(t), s = r.length; s--;) ((i = r[s]).selected = _.inArray(_.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), _.each(["radio", "checkbox"], function () {
        _.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = _.inArray(_(e).val(), t) > -1
            }
        }, p.checkOn || (_.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.focusin = "onfocusin" in e;
    var gt = /^(?:focusinfocus|focusoutblur)$/, mt = function (e) {
        e.stopPropagation()
    };
    _.extend(_.event, {
        trigger: function (t, n, r, o) {
            var s, a, l, c, u, h, d, p, v = [r || i], y = f.call(t, "type") ? t.type : t,
                b = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !gt.test(y + _.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[_.expando] ? t : new _.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : _.makeArray(n, [t]), d = _.event.special[y] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!o && !d.noBubble && !m(r)) {
                    for (c = d.delegateType || y, gt.test(c + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
                    l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0; (a = v[s++]) && !t.isPropagationStopped();) p = a, t.type = s > 1 ? c : d.bindType || y, (h = (z.get(a, "events") || {})[t.type] && z.get(a, "handle")) && h.apply(a, n), (h = u && a[u]) && h.apply && Q(a) && (t.result = h.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = y, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Q(r) || u && g(r[y]) && !m(r) && ((l = r[u]) && (r[u] = null), _.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, mt), r[y](), t.isPropagationStopped() && p.removeEventListener(y, mt), _.event.triggered = void 0, l && (r[u] = l)), t.result
            }
        }, simulate: function (e, t, n) {
            var i = _.extend(new _.Event, n, {type: e, isSimulated: !0});
            _.event.trigger(i, null, t)
        }
    }), _.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                _.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return _.event.trigger(e, t, n, !0)
        }
    }), p.focusin || _.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            _.event.simulate(t, e.target, _.event.fix(e))
        };
        _.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, r = z.access(i, t);
                r || i.addEventListener(e, n, !0), z.access(i, t, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, r = z.access(i, t) - 1;
                r ? z.access(i, t, r) : (i.removeEventListener(e, n, !0), z.remove(i, t))
            }
        }
    });
    var vt = e.location, yt = Date.now(), bt = /\?/;
    _.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + t), n
    };
    var _t = /\[\]$/, wt = /\r?\n/g, Et = /^(?:submit|button|image|reset|file)$/i,
        Tt = /^(?:input|select|textarea|keygen)/i;

    function xt(e, t, n, i) {
        var r;
        if (Array.isArray(t)) _.each(t, function (t, r) {
            n || _t.test(e) ? i(e, r) : xt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        }); else if (n || "object" !== b(t)) i(e, t); else for (r in t) xt(e + "[" + r + "]", t[r], n, i)
    }

    _.param = function (e, t) {
        var n, i = [], r = function (e, t) {
            var n = g(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function () {
            r(this.name, this.value)
        }); else for (n in e) xt(n, e[n], t, r);
        return i.join("&")
    }, _.fn.extend({
        serialize: function () {
            return _.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = _.prop(this, "elements");
                return e ? _.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !_(this).is(":disabled") && Tt.test(this.nodeName) && !Et.test(e) && (this.checked || !ce.test(e))
            }).map(function (e, t) {
                var n = _(this).val();
                return null == n ? null : Array.isArray(n) ? _.map(n, function (e) {
                    return {name: t.name, value: e.replace(wt, "\r\n")}
                }) : {name: t.name, value: n.replace(wt, "\r\n")}
            }).get()
        }
    });
    var Ct = /%20/g, St = /#.*$/, At = /([?&])_=[^&]*/, Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Nt = /^(?:GET|HEAD)$/,
        kt = /^\/\//, It = {}, Lt = {}, Ot = "*/".concat("*"), jt = i.createElement("a");

    function Ht(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, o = t.toLowerCase().match(H) || [];
            if (g(n)) for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Pt(e, t, n, i) {
        var r = {}, o = e === Lt;

        function s(a) {
            var l;
            return r[a] = !0, _.each(e[a] || [], function (e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
            }), l
        }

        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function Wt(e, t) {
        var n, i, r = _.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && _.extend(!0, e, i), e
    }

    jt.href = vt.href, _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(vt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ot,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": _.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Wt(Wt(e, _.ajaxSettings), t) : Wt(_.ajaxSettings, e)
        },
        ajaxPrefilter: Ht(It),
        ajaxTransport: Ht(Lt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, c, u, f, h, d, p = _.ajaxSetup({}, n), g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? _(g) : _.event, v = _.Deferred(),
                y = _.Callbacks("once memory"), b = p.statusCode || {}, w = {}, E = {}, T = "canceled", x = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (u) {
                            if (!a) for (a = {}; t = Dt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return u ? s : null
                    }, setRequestHeader: function (e, t) {
                        return null == u && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, w[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == u && (p.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (u) x.always(e[x.status]); else for (t in e) b[t] = [b[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || T;
                        return r && r.abort(t), C(0, t), this
                    }
                };
            if (v.promise(x), p.url = ((t || p.url || vt.href) + "").replace(kt, vt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [""], null == p.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = jt.protocol + "//" + jt.host != c.protocol + "//" + c.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = _.param(p.data, p.traditional)), Pt(It, p, n, x), u) return x;
            for (h in (f = _.event && p.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nt.test(p.type), o = p.url.replace(St, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ct, "+")) : (d = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (bt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(At, "$1"), d = (bt.test(o) ? "&" : "?") + "_=" + yt++ + d), p.url = o + d), p.ifModified && (_.lastModified[o] && x.setRequestHeader("If-Modified-Since", _.lastModified[o]), _.etag[o] && x.setRequestHeader("If-None-Match", _.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : p.accepts["*"]), p.headers) x.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, x, p) || u)) return x.abort();
            if (T = "abort", y.add(p.complete), x.done(p.success), x.fail(p.error), r = Pt(Lt, p, n, x)) {
                if (x.readyState = 1, f && m.trigger("ajaxSend", [x, p]), u) return x;
                p.async && p.timeout > 0 && (l = e.setTimeout(function () {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    u = !1, r.send(w, C)
                } catch (e) {
                    if (u) throw e;
                    C(-1, e)
                }
            } else C(-1, "No Transport");

            function C(t, n, i, a) {
                var c, h, d, w, E, T = n;
                u || (u = !0, l && e.clearTimeout(l), r = void 0, s = a || "", x.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (w = function (e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i) for (r in a) if (a[r] && a[r].test(i)) {
                        l.unshift(r);
                        break
                    }
                    if (l[0] in n) o = l[0]; else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(p, x, i)), w = function (e, t, n, i) {
                    var r, o, s, a, l, c = {}, u = e.dataTypes.slice();
                    if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (o = u.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o])) for (r in c) if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                            !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                            break
                        }
                        if (!0 !== s) if (s && e.throws) t = s(t); else try {
                            t = s(t)
                        } catch (e) {
                            return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o}
                        }
                    }
                    return {state: "success", data: t}
                }(p, w, x, c), c ? (p.ifModified && ((E = x.getResponseHeader("Last-Modified")) && (_.lastModified[o] = E), (E = x.getResponseHeader("etag")) && (_.etag[o] = E)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, h = w.data, c = !(d = w.error))) : (d = T, !t && T || (T = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || T) + "", c ? v.resolveWith(g, [h, T, x]) : v.rejectWith(g, [x, T, d]), x.statusCode(b), b = void 0, f && m.trigger(c ? "ajaxSuccess" : "ajaxError", [x, p, c ? h : d]), y.fireWith(g, [x, T]), f && (m.trigger("ajaxComplete", [x, p]), --_.active || _.event.trigger("ajaxStop")))
            }

            return x
        },
        getJSON: function (e, t, n) {
            return _.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return _.get(e, void 0, t, "script")
        }
    }), _.each(["get", "post"], function (e, t) {
        _[t] = function (e, n, i, r) {
            return g(n) && (r = r || i, i = n, n = void 0), _.ajax(_.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, _.isPlainObject(e) && e))
        }
    }), _._evalUrl = function (e) {
        return _.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, _.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return g(e) ? this.each(function (t) {
                _(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = _(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = g(e);
            return this.each(function (n) {
                _(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                _(this).replaceWith(this.childNodes)
            }), this
        }
    }), _.expr.pseudos.hidden = function (e) {
        return !_.expr.pseudos.visible(e)
    }, _.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, _.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var Rt = {0: 200, 1223: 204}, Mt = _.ajaxSettings.xhr();
    p.cors = !!Mt && "withCredentials" in Mt, p.ajax = Mt = !!Mt, _.ajaxTransport(function (t) {
        var n, i;
        if (p.cors || Mt && !t.crossDomain) return {
            send: function (r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                n = function (e) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Rt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            }, abort: function () {
                n && n()
            }
        }
    }), _.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), _.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return _.globalEval(e), e
            }
        }
    }), _.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), _.ajaxTransport("script", function (e) {
        var t, n;
        if (e.crossDomain) return {
            send: function (r, o) {
                t = _("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            }, abort: function () {
                n && n()
            }
        }
    });
    var qt = [], Yt = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = qt.pop() || _.expando + "_" + yt++;
            return this[e] = !0, e
        }
    }), _.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, o, s,
            a = !1 !== t.jsonp && (Yt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Yt, "$1" + r) : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return s || _.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === o ? _(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, qt.push(r)), s && g(o) && o(s[0]), s = o = void 0
        }), "script"
    }), p.createHTMLDocument = function () {
        var e = i.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), _.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), s = !n && [], (o = D.exec(e)) ? [t.createElement(o[1])] : (o = me([e], t, s), s && s.length && _(s).remove(), _.merge([], o.childNodes)));
        var r, o, s
    }, _.fn.load = function (e, t, n) {
        var i, r, o, s = this, a = e.indexOf(" ");
        return a > -1 && (i = ft(e.slice(a)), e = e.slice(0, a)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && _.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(i ? _("<div>").append(_.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        _.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), _.expr.pseudos.animated = function (e) {
        return _.grep(_.timers, function (t) {
            return e === t.elem
        }).length
    }, _.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, s, a, l, c = _.css(e, "position"), u = _(e), f = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), o = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), g(t) && (t = t.call(e, n, _.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : u.css(f)
        }
    }, _.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                _.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n, i = this[0], r = {top: 0, left: 0};
                if ("fixed" === _.css(i, "position")) t = i.getBoundingClientRect(); else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = _(e).offset()).top += _.css(e, "borderTopWidth", !0), r.left += _.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - _.css(i, "marginTop", !0),
                    left: t.left - r.left - _.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
                return e || ve
            })
        }
    }), _.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        _.fn[e] = function (i) {
            return F(this, function (e, i, r) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }), _.each(["top", "left"], function (e, t) {
        _.cssHooks[t] = qe(p.pixelPosition, function (e, n) {
            if (n) return n = Me(e, t), Pe.test(n) ? _(e).position()[t] + "px" : n
        })
    }), _.each({Height: "height", Width: "width"}, function (e, t) {
        _.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            _.fn[i] = function (r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return F(this, function (t, n, r) {
                    var o;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? _.css(t, n, a) : _.style(t, n, r, a)
                }, t, s ? r : void 0, s)
            }
        })
    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        _.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), _.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), _.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), _.proxy = function (e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return i = o.call(arguments, 2), (r = function () {
            return e.apply(t || this, i.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || _.guid++, r
    }, _.holdReady = function (e) {
        e ? _.readyWait++ : _.ready(!0)
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = A, _.isFunction = g, _.isWindow = m, _.camelCase = K, _.type = b, _.now = Date.now, _.isNumeric = function (e) {
        var t = _.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return _
    });
    var Ft = e.jQuery, Xt = e.$;
    return _.noConflict = function (t) {
        return e.$ === _ && (e.$ = Xt), t && e.jQuery === _ && (e.jQuery = Ft), _
    }, t || (e.jQuery = e.$ = _), _
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t(e.bootstrap = {}, e.jQuery)
}(this, function (e, t) {
    "use strict";

    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function i(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    }

    function r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function (t) {
                var i, r, o;
                i = e, o = n[r = t], r in i ? Object.defineProperty(i, r, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[r] = o
            })
        }
        return e
    }

    for (var o, s, a, l, c, u, f, h, d, p, g, m, v, y, b, _, w, E, T, x, C, S, A, D, N, k, I, L, O, j, H, P, W, R, M, q, Y, F, X, B, U, K, Q, V, z, $, G, J = function (e) {
        var t = "transitionend";
        var n = {
            TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
                for (; e += ~~(1e6 * Math.random()), document.getElementById(e);) ;
                return e
            }, getSelectorFromElement: function (e) {
                var t = e.getAttribute("data-target");
                t && "#" !== t || (t = e.getAttribute("href") || "");
                try {
                    return document.querySelector(t) ? t : null
                } catch (e) {
                    return null
                }
            }, getTransitionDurationFromElement: function (t) {
                if (!t) return 0;
                var n = e(t).css("transition-duration");
                return parseFloat(n) ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0
            }, reflow: function (e) {
                return e.offsetHeight
            }, triggerTransitionEnd: function (n) {
                e(n).trigger(t)
            }, supportsTransitionEnd: function () {
                return Boolean(t)
            }, isElement: function (e) {
                return (e[0] || e).nodeType
            }, typeCheckConfig: function (e, t, i) {
                for (var r in i) if (Object.prototype.hasOwnProperty.call(i, r)) {
                    var o = i[r], s = t[r],
                        a = s && n.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".')
                }
                var l
            }
        };
        return e.fn.emulateTransitionEnd = function (t) {
            var i = this, r = !1;
            return e(this).one(n.TRANSITION_END, function () {
                r = !0
            }), setTimeout(function () {
                r || n.triggerTransitionEnd(i)
            }, t), this
        }, e.event.special[n.TRANSITION_END] = {
            bindType: t, delegateType: t, handle: function (t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        }, n
    }(t = t && t.hasOwnProperty("default") ? t.default : t), Z = (s = "alert", l = "." + (a = "bs.alert"), c = (o = t).fn[s], u = {
        CLOSE: "close" + l,
        CLOSED: "closed" + l,
        CLICK_DATA_API: "click" + l + ".data-api"
    }, "alert", "fade", "show", f = function () {
        function e(e) {
            this._element = e
        }

        var t = e.prototype;
        return t.close = function (e) {
            var t = this._element;
            e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }, t.dispose = function () {
            o.removeData(this._element, a), this._element = null
        }, t._getRootElement = function (e) {
            var t = J.getSelectorFromElement(e), n = !1;
            return t && (n = document.querySelector(t)), n || (n = o(e).closest(".alert")[0]), n
        }, t._triggerCloseEvent = function (e) {
            var t = o.Event(u.CLOSE);
            return o(e).trigger(t), t
        }, t._removeElement = function (e) {
            var t = this;
            if (o(e).removeClass("show"), o(e).hasClass("fade")) {
                var n = J.getTransitionDurationFromElement(e);
                o(e).one(J.TRANSITION_END, function (n) {
                    return t._destroyElement(e, n)
                }).emulateTransitionEnd(n)
            } else this._destroyElement(e)
        }, t._destroyElement = function (e) {
            o(e).detach().trigger(u.CLOSED).remove()
        }, e._jQueryInterface = function (t) {
            return this.each(function () {
                var n = o(this), i = n.data(a);
                i || (i = new e(this), n.data(a, i)), "close" === t && i[t](this)
            })
        }, e._handleDismiss = function (e) {
            return function (t) {
                t && t.preventDefault(), e.close(this)
            }
        }, i(e, null, [{
            key: "VERSION", get: function () {
                return "4.1.3"
            }
        }]), e
    }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', f._handleDismiss(new f)), o.fn[s] = f._jQueryInterface, o.fn[s].Constructor = f, o.fn[s].noConflict = function () {
        return o.fn[s] = c, f._jQueryInterface
    }, f), ee = (d = "button", g = "." + (p = "bs.button"), m = ".data-api", v = (h = t).fn[d], y = "active", "btn", b = '[data-toggle^="button"]', '[data-toggle="buttons"]', "input", ".active", _ = ".btn", w = {
        CLICK_DATA_API: "click" + g + m,
        FOCUS_BLUR_DATA_API: "focus" + g + m + " blur" + g + m
    }, E = function () {
        function e(e) {
            this._element = e
        }

        var t = e.prototype;
        return t.toggle = function () {
            var e = !0, t = !0, n = h(this._element).closest('[data-toggle="buttons"]')[0];
            if (n) {
                var i = this._element.querySelector("input");
                if (i) {
                    if ("radio" === i.type) if (i.checked && this._element.classList.contains(y)) e = !1; else {
                        var r = n.querySelector(".active");
                        r && h(r).removeClass(y)
                    }
                    if (e) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                        i.checked = !this._element.classList.contains(y), h(i).trigger("change")
                    }
                    i.focus(), t = !1
                }
            }
            t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(y)), e && h(this._element).toggleClass(y)
        }, t.dispose = function () {
            h.removeData(this._element, p), this._element = null
        }, e._jQueryInterface = function (t) {
            return this.each(function () {
                var n = h(this).data(p);
                n || (n = new e(this), h(this).data(p, n)), "toggle" === t && n[t]()
            })
        }, i(e, null, [{
            key: "VERSION", get: function () {
                return "4.1.3"
            }
        }]), e
    }(), h(document).on(w.CLICK_DATA_API, b, function (e) {
        e.preventDefault();
        var t = e.target;
        h(t).hasClass("btn") || (t = h(t).closest(_)), E._jQueryInterface.call(h(t), "toggle")
    }).on(w.FOCUS_BLUR_DATA_API, b, function (e) {
        var t = h(e.target).closest(_)[0];
        h(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), h.fn[d] = E._jQueryInterface, h.fn[d].Constructor = E, h.fn[d].noConflict = function () {
        return h.fn[d] = v, E._jQueryInterface
    }, E), te = (x = "carousel", S = "." + (C = "bs.carousel"), A = ".data-api", D = (T = t).fn[x], N = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0
    }, k = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean"
    }, I = "next", L = "prev", "left", "right", O = {
        SLIDE: "slide" + S,
        SLID: "slid" + S,
        KEYDOWN: "keydown" + S,
        MOUSEENTER: "mouseenter" + S,
        MOUSELEAVE: "mouseleave" + S,
        TOUCHEND: "touchend" + S,
        LOAD_DATA_API: "load" + S + A,
        CLICK_DATA_API: "click" + S + A
    }, "carousel", j = "active", "slide", "carousel-item-right", "carousel-item-left", "carousel-item-next", "carousel-item-prev", ".active", H = ".active.carousel-item", ".carousel-item", ".carousel-item-next, .carousel-item-prev", P = ".carousel-indicators", "[data-slide], [data-slide-to]", '[data-ride="carousel"]', W = function () {
        function e(e, t) {
            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = T(e)[0], this._indicatorsElement = this._element.querySelector(P), this._addEventListeners()
        }

        var t = e.prototype;
        return t.next = function () {
            this._isSliding || this._slide(I)
        }, t.nextWhenVisible = function () {
            !document.hidden && T(this._element).is(":visible") && "hidden" !== T(this._element).css("visibility") && this.next()
        }, t.prev = function () {
            this._isSliding || this._slide(L)
        }, t.pause = function (e) {
            e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (J.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }, t.cycle = function (e) {
            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }, t.to = function (e) {
            var t = this;
            this._activeElement = this._element.querySelector(H);
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) T(this._element).one(O.SLID, function () {
                return t.to(e)
            }); else {
                if (n === e) return this.pause(), void this.cycle();
                var i = n < e ? I : L;
                this._slide(i, this._items[e])
            }
        }, t.dispose = function () {
            T(this._element).off(S), T.removeData(this._element, C), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
        }, t._getConfig = function (e) {
            return e = r({}, N, e), J.typeCheckConfig(x, e, k), e
        }, t._addEventListeners = function () {
            var e = this;
            this._config.keyboard && T(this._element).on(O.KEYDOWN, function (t) {
                return e._keydown(t)
            }), "hover" === this._config.pause && (T(this._element).on(O.MOUSEENTER, function (t) {
                return e.pause(t)
            }).on(O.MOUSELEAVE, function (t) {
                return e.cycle(t)
            }), "ontouchstart" in document.documentElement && T(this._element).on(O.TOUCHEND, function () {
                e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                    return e.cycle(t)
                }, 500 + e._config.interval)
            }))
        }, t._keydown = function (e) {
            if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                case 37:
                    e.preventDefault(), this.prev();
                    break;
                case 39:
                    e.preventDefault(), this.next()
            }
        }, t._getItemIndex = function (e) {
            return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
        }, t._getItemByDirection = function (e, t) {
            var n = e === I, i = e === L, r = this._getItemIndex(t), o = this._items.length - 1;
            if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
            var s = (r + (e === L ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }, t._triggerSlideEvent = function (e, t) {
            var n = this._getItemIndex(e), i = this._getItemIndex(this._element.querySelector(H)),
                r = T.Event(O.SLIDE, {relatedTarget: e, direction: t, from: i, to: n});
            return T(this._element).trigger(r), r
        }, t._setActiveIndicatorElement = function (e) {
            if (this._indicatorsElement) {
                var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                T(t).removeClass(j);
                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                n && T(n).addClass(j)
            }
        }, t._slide = function (e, t) {
            var n, i, r, o = this, s = this._element.querySelector(H), a = this._getItemIndex(s),
                l = t || s && this._getItemByDirection(e, s), c = this._getItemIndex(l), u = Boolean(this._interval);
            if (e === I ? (n = "carousel-item-left", i = "carousel-item-next", r = "left") : (n = "carousel-item-right", i = "carousel-item-prev", r = "right"), l && T(l).hasClass(j)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                var f = T.Event(O.SLID, {relatedTarget: l, direction: r, from: a, to: c});
                if (T(this._element).hasClass("slide")) {
                    T(l).addClass(i), J.reflow(l), T(s).addClass(n), T(l).addClass(n);
                    var h = J.getTransitionDurationFromElement(s);
                    T(s).one(J.TRANSITION_END, function () {
                        T(l).removeClass(n + " " + i).addClass(j), T(s).removeClass(j + " " + i + " " + n), o._isSliding = !1, setTimeout(function () {
                            return T(o._element).trigger(f)
                        }, 0)
                    }).emulateTransitionEnd(h)
                } else T(s).removeClass(j), T(l).addClass(j), this._isSliding = !1, T(this._element).trigger(f);
                u && this.cycle()
            }
        }, e._jQueryInterface = function (t) {
            return this.each(function () {
                var n = T(this).data(C), i = r({}, N, T(this).data());
                "object" == typeof t && (i = r({}, i, t));
                var o = "string" == typeof t ? t : i.slide;
                if (n || (n = new e(this, i), T(this).data(C, n)), "number" == typeof t) n.to(t); else if ("string" == typeof o) {
                    if (void 0 === n[o]) throw new TypeError('No method named "' + o + '"');
                    n[o]()
                } else i.interval && (n.pause(), n.cycle())
            })
        }, e._dataApiClickHandler = function (t) {
            var n = J.getSelectorFromElement(this);
            if (n) {
                var i = T(n)[0];
                if (i && T(i).hasClass("carousel")) {
                    var o = r({}, T(i).data(), T(this).data()), s = this.getAttribute("data-slide-to");
                    s && (o.interval = !1), e._jQueryInterface.call(T(i), o), s && T(i).data(C).to(s), t.preventDefault()
                }
            }
        }, i(e, null, [{
            key: "VERSION", get: function () {
                return "4.1.3"
            }
        }, {
            key: "Default", get: function () {
                return N
            }
        }]), e
    }(), T(document).on(O.CLICK_DATA_API, "[data-slide], [data-slide-to]", W._dataApiClickHandler), T(window).on(O.LOAD_DATA_API, function () {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
            var i = T(e[t]);
            W._jQueryInterface.call(i, i.data())
        }
    }), T.fn[x] = W._jQueryInterface, T.fn[x].Constructor = W, T.fn[x].noConflict = function () {
        return T.fn[x] = D, W._jQueryInterface
    }, W), ne = (M = "collapse", Y = "." + (q = "bs.collapse"), F = (R = t).fn[M], X = {
        toggle: !0,
        parent: ""
    }, B = {toggle: "boolean", parent: "(string|element)"}, U = {
        SHOW: "show" + Y,
        SHOWN: "shown" + Y,
        HIDE: "hide" + Y,
        HIDDEN: "hidden" + Y,
        CLICK_DATA_API: "click" + Y + ".data-api"
    }, K = "show", Q = "collapse", V = "collapsing", z = "collapsed", "width", "height", ".show, .collapsing", $ = '[data-toggle="collapse"]', G = function () {
        function e(e, t) {
            this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = R.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll($)), i = 0, r = n.length; i < r; i++) {
                var o = n[i], s = J.getSelectorFromElement(o),
                    a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
                        return t === e
                    });
                null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o))
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
        }

        var t = e.prototype;
        return t.toggle = function () {
            R(this._element).hasClass(K) ? this.hide() : this.show()
        }, t.show = function () {
            var t, n, i = this;
            if (!(this._isTransitioning || R(this._element).hasClass(K) || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (e) {
                return e.getAttribute("data-parent") === i._config.parent
            })).length && (t = null), t && (n = R(t).not(this._selector).data(q)) && n._isTransitioning))) {
                var r = R.Event(U.SHOW);
                if (R(this._element).trigger(r), !r.isDefaultPrevented()) {
                    t && (e._jQueryInterface.call(R(t).not(this._selector), "hide"), n || R(t).data(q, null));
                    var o = this._getDimension();
                    R(this._element).removeClass(Q).addClass(V), this._element.style[o] = 0, this._triggerArray.length && R(this._triggerArray).removeClass(z).attr("aria-expanded", !0), this.setTransitioning(!0);
                    var s = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                        a = J.getTransitionDurationFromElement(this._element);
                    R(this._element).one(J.TRANSITION_END, function () {
                        R(i._element).removeClass(V).addClass(Q).addClass(K), i._element.style[o] = "", i.setTransitioning(!1), R(i._element).trigger(U.SHOWN)
                    }).emulateTransitionEnd(a), this._element.style[o] = this._element[s] + "px"
                }
            }
        }, t.hide = function () {
            var e = this;
            if (!this._isTransitioning && R(this._element).hasClass(K)) {
                var t = R.Event(U.HIDE);
                if (R(this._element).trigger(t), !t.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", J.reflow(this._element), R(this._element).addClass(V).removeClass(Q).removeClass(K);
                    var i = this._triggerArray.length;
                    if (0 < i) for (var r = 0; r < i; r++) {
                        var o = this._triggerArray[r], s = J.getSelectorFromElement(o);
                        null !== s && (R([].slice.call(document.querySelectorAll(s))).hasClass(K) || R(o).addClass(z).attr("aria-expanded", !1))
                    }
                    this.setTransitioning(!0), this._element.style[n] = "";
                    var a = J.getTransitionDurationFromElement(this._element);
                    R(this._element).one(J.TRANSITION_END, function () {
                        e.setTransitioning(!1), R(e._element).removeClass(V).addClass(Q).trigger(U.HIDDEN)
                    }).emulateTransitionEnd(a)
                }
            }
        }, t.setTransitioning = function (e) {
            this._isTransitioning = e
        }, t.dispose = function () {
            R.removeData(this._element, q), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
        }, t._getConfig = function (e) {
            return (e = r({}, X, e)).toggle = Boolean(e.toggle), J.typeCheckConfig(M, e, B), e
        }, t._getDimension = function () {
            return R(this._element).hasClass("width") ? "width" : "height"
        }, t._getParent = function () {
            var t = this, n = null;
            J.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
            var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                r = [].slice.call(n.querySelectorAll(i));
            return R(r).each(function (n, i) {
                t._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
            }), n
        }, t._addAriaAndCollapsedClass = function (e, t) {
            if (e) {
                var n = R(e).hasClass(K);
                t.length && R(t).toggleClass(z, !n).attr("aria-expanded", n)
            }
        }, e._getTargetFromElement = function (e) {
            var t = J.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null
        }, e._jQueryInterface = function (t) {
            return this.each(function () {
                var n = R(this), i = n.data(q), o = r({}, X, n.data(), "object" == typeof t && t ? t : {});
                if (!i && o.toggle && /show|hide/.test(t) && (o.toggle = !1), i || (i = new e(this, o), n.data(q, i)), "string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                    i[t]()
                }
            })
        }, i(e, null, [{
            key: "VERSION", get: function () {
                return "4.1.3"
            }
        }, {
            key: "Default", get: function () {
                return X
            }
        }]), e
    }(), R(document).on(U.CLICK_DATA_API, $, function (e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var t = R(this), n = J.getSelectorFromElement(this), i = [].slice.call(document.querySelectorAll(n));
        R(i).each(function () {
            var e = R(this), n = e.data(q) ? "toggle" : t.data();
            G._jQueryInterface.call(e, n)
        })
    }), R.fn[M] = G._jQueryInterface, R.fn[M].Constructor = G, R.fn[M].noConflict = function () {
        return R.fn[M] = F, G._jQueryInterface
    }, G), ie = "undefined" != typeof window && "undefined" != typeof document, re = ["Edge", "Trident", "Firefox"], oe = 0, se = 0; se < re.length; se += 1) if (ie && 0 <= navigator.userAgent.indexOf(re[se])) {
        oe = 1;
        break
    }
    var ae = ie && window.Promise ? function (e) {
        var t = !1;
        return function () {
            t || (t = !0, window.Promise.resolve().then(function () {
                t = !1, e()
            }))
        }
    } : function (e) {
        var t = !1;
        return function () {
            t || (t = !0, setTimeout(function () {
                t = !1, e()
            }, oe))
        }
    };

    function le(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function ce(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function ue(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function fe(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case"HTML":
            case"BODY":
                return e.ownerDocument.body;
            case"#document":
                return e.body
        }
        var t = ce(e), n = t.overflow, i = t.overflowX, r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : fe(ue(e))
    }

    var he = ie && !(!window.MSInputMethodContext || !document.documentMode),
        de = ie && /MSIE 10/.test(navigator.userAgent);

    function pe(e) {
        return 11 === e ? he : 10 === e ? de : he || de
    }

    function ge(e) {
        if (!e) return document.documentElement;
        for (var t = pe(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === ce(n, "position") ? ge(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function me(e) {
        return null !== e.parentNode ? me(e.parentNode) : e
    }

    function ve(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? e : t, r = n ? t : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && ge(s.firstElementChild) !== s ? ge(l) : l;
        var c = me(e);
        return c.host ? ve(c.host, t) : ve(e, me(t).host)
    }

    function ye(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
    }

    function be(e, t) {
        var n = "x" === t ? "Left" : "Top", i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function _e(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], pe(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function we() {
        var e = document.body, t = document.documentElement, n = pe(10) && getComputedStyle(t);
        return {height: _e("Height", e, t, n), width: _e("Width", e, t, n)}
    }

    var Ee = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), Te = function (e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }, xe = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    };

    function Ce(e) {
        return xe({}, e, {right: e.left + e.width, bottom: e.top + e.height})
    }

    function Se(e) {
        var t = {};
        try {
            if (pe(10)) {
                t = e.getBoundingClientRect();
                var n = ye(e, "top"), i = ye(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i
            } else t = e.getBoundingClientRect()
        } catch (e) {
        }
        var r = {left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top},
            o = "HTML" === e.nodeName ? we() : {}, s = o.width || e.clientWidth || r.right - r.left,
            a = o.height || e.clientHeight || r.bottom - r.top, l = e.offsetWidth - s, c = e.offsetHeight - a;
        if (l || c) {
            var u = ce(e);
            l -= be(u, "x"), c -= be(u, "y"), r.width -= l, r.height -= c
        }
        return Ce(r)
    }

    function Ae(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = pe(10), r = "HTML" === t.nodeName,
            o = Se(e), s = Se(t), a = fe(e), l = ce(t), c = parseFloat(l.borderTopWidth, 10),
            u = parseFloat(l.borderLeftWidth, 10);
        n && "HTML" === t.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var f = Ce({top: o.top - s.top - c, left: o.left - s.left - u, width: o.width, height: o.height});
        if (f.marginTop = 0, f.marginLeft = 0, !i && r) {
            var h = parseFloat(l.marginTop, 10), d = parseFloat(l.marginLeft, 10);
            f.top -= c - h, f.bottom -= c - h, f.left -= u - d, f.right -= u - d, f.marginTop = h, f.marginLeft = d
        }
        return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (f = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = ye(t, "top"),
                r = ye(t, "left"), o = n ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
        }(f, t)), f
    }

    function De(e) {
        if (!e || !e.parentElement || pe()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === ce(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function Ne(e, t, n, i) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], o = {top: 0, left: 0},
            s = r ? De(e) : ve(e, t);
        if ("viewport" === i) o = function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement, i = Ae(e, n), r = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0), s = t ? 0 : ye(n), a = t ? 0 : ye(n, "left");
            return Ce({top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o})
        }(s, r); else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = fe(ue(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
            var l = Ae(a, s, r);
            if ("HTML" !== a.nodeName || function e(t) {
                var n = t.nodeName;
                return "BODY" !== n && "HTML" !== n && ("fixed" === ce(t, "position") || e(ue(t)))
            }(s)) o = l; else {
                var c = we(), u = c.height, f = c.width;
                o.top += l.top - l.marginTop, o.bottom = u + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left
            }
        }
        return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o
    }

    function ke(e, t, n, i, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = Ne(n, i, o, r), a = {
            top: {width: s.width, height: t.top - s.top},
            right: {width: s.right - t.right, height: s.height},
            bottom: {width: s.width, height: s.bottom - t.bottom},
            left: {width: t.left - s.left, height: s.height}
        }, l = Object.keys(a).map(function (e) {
            return xe({key: e}, a[e], {area: (t = a[e], t.width * t.height)});
            var t
        }).sort(function (e, t) {
            return t.area - e.area
        }), c = l.filter(function (e) {
            var t = e.width, i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight
        }), u = 0 < c.length ? c[0].key : l[0].key, f = e.split("-")[1];
        return u + (f ? "-" + f : "")
    }

    function Ie(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return Ae(n, i ? De(t) : ve(t, n), i)
    }

    function Le(e) {
        var t = getComputedStyle(e), n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {width: e.offsetWidth + i, height: e.offsetHeight + n}
    }

    function Oe(e) {
        var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }

    function je(e, t, n) {
        n = n.split("-")[0];
        var i = Le(e), r = {width: i.width, height: i.height}, o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left", a = o ? "left" : "top", l = o ? "height" : "width", c = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[Oe(a)], r
    }

    function He(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function Pe(e, t, n) {
        return (void 0 === n ? e : e.slice(0, function (e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
                return e[t] === n
            });
            var i = He(e, function (e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", n))).forEach(function (e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = e.function || e.fn;
            e.enabled && le(n) && (t.offsets.popper = Ce(t.offsets.popper), t.offsets.reference = Ce(t.offsets.reference), t = n(t, e))
        }), t
    }

    function We(e, t) {
        return e.some(function (e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }

    function Re(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i], o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function Me(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function qe(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function Ye(e, t) {
        Object.keys(t).forEach(function (n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && qe(t[n]) && (i = "px"), e.style[n] = t[n] + i
        })
    }

    function Fe(e, t, n) {
        var i = He(e, function (e) {
            return e.name === t
        }), r = !!i && e.some(function (e) {
            return e.name === n && e.enabled && e.order < i.order
        });
        if (!r) {
            var o = "`" + t + "`", s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }

    var Xe = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Be = Xe.slice(3);

    function Ue(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = Be.indexOf(e),
            i = Be.slice(n + 1).concat(Be.slice(0, n));
        return t ? i.reverse() : i
    }

    var Ke = {
        placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
        }, onUpdate: function () {
        }, modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (e) {
                    var t = e.placement, n = t.split("-")[0], i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets, o = r.reference, s = r.popper, a = -1 !== ["bottom", "top"].indexOf(n),
                            l = a ? "left" : "top", c = a ? "width" : "height",
                            u = {start: Te({}, l, o[l]), end: Te({}, l, o[l] + o[c] - s[c])};
                        e.offsets.popper = xe({}, s, u[i])
                    }
                    return e
                }
            }, offset: {
                order: 200, enabled: !0, fn: function (e, t) {
                    var n, i = t.offset, r = e.placement, o = e.offsets, s = o.popper, a = o.reference,
                        l = r.split("-")[0];
                    return n = qe(+i) ? [+i, 0] : function (e, t, n, i) {
                        var r = [0, 0], o = -1 !== ["right", "left"].indexOf(i),
                            s = e.split(/(\+|\-)/).map(function (e) {
                                return e.trim()
                            }), a = s.indexOf(He(s, function (e) {
                                return -1 !== e.search(/,|\s/)
                            }));
                        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                        var l = /\s*,\s*|\s+/,
                            c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                        return (c = c.map(function (e, i) {
                            var r = (1 === i ? !o : o) ? "height" : "width", s = !1;
                            return e.reduce(function (e, t) {
                                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                            }, []).map(function (e) {
                                return function (e, t, n, i) {
                                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +r[1], s = r[2];
                                    if (!o) return e;
                                    if (0 === s.indexOf("%")) {
                                        var a = void 0;
                                        switch (s) {
                                            case"%p":
                                                a = n;
                                                break;
                                            case"%":
                                            case"%r":
                                            default:
                                                a = i
                                        }
                                        return Ce(a)[t] / 100 * o
                                    }
                                    return "vh" === s || "vw" === s ? ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                                }(e, r, t, n)
                            })
                        })).forEach(function (e, t) {
                            e.forEach(function (n, i) {
                                qe(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
                            })
                        }), r
                    }(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), e.popper = s, e
                }, offset: 0
            }, preventOverflow: {
                order: 300, enabled: !0, fn: function (e, t) {
                    var n = t.boundariesElement || ge(e.instance.popper);
                    e.instance.reference === n && (n = ge(n));
                    var i = Re("transform"), r = e.instance.popper.style, o = r.top, s = r.left, a = r[i];
                    r.top = "", r.left = "", r[i] = "";
                    var l = Ne(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                    r.top = o, r.left = s, r[i] = a, t.boundaries = l;
                    var c = t.priority, u = e.offsets.popper, f = {
                        primary: function (e) {
                            var n = u[e];
                            return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), Te({}, e, n)
                        }, secondary: function (e) {
                            var n = "right" === e ? "left" : "top", i = u[n];
                            return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), Te({}, n, i)
                        }
                    };
                    return c.forEach(function (e) {
                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        u = xe({}, u, f[t](e))
                    }), e.offsets.popper = u, e
                }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
            }, keepTogether: {
                order: 400, enabled: !0, fn: function (e) {
                    var t = e.offsets, n = t.popper, i = t.reference, r = e.placement.split("-")[0], o = Math.floor,
                        s = -1 !== ["top", "bottom"].indexOf(r), a = s ? "right" : "bottom", l = s ? "left" : "top",
                        c = s ? "width" : "height";
                    return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                }
            }, arrow: {
                order: 500, enabled: !0, fn: function (e, t) {
                    var n;
                    if (!Fe(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var i = t.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i))) return e
                    } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var r = e.placement.split("-")[0], o = e.offsets, s = o.popper, a = o.reference,
                        l = -1 !== ["left", "right"].indexOf(r), c = l ? "height" : "width", u = l ? "Top" : "Left",
                        f = u.toLowerCase(), h = l ? "left" : "top", d = l ? "bottom" : "right", p = Le(i)[c];
                    a[d] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[d] - p)), a[f] + p > s[d] && (e.offsets.popper[f] += a[f] + p - s[d]), e.offsets.popper = Ce(e.offsets.popper);
                    var g = a[f] + a[c] / 2 - p / 2, m = ce(e.instance.popper), v = parseFloat(m["margin" + u], 10),
                        y = parseFloat(m["border" + u + "Width"], 10), b = g - e.offsets.popper[f] - v - y;
                    return b = Math.max(Math.min(s[c] - p, b), 0), e.arrowElement = i, e.offsets.arrow = (Te(n = {}, f, Math.round(b)), Te(n, h, ""), n), e
                }, element: "[x-arrow]"
            }, flip: {
                order: 600, enabled: !0, fn: function (e, t) {
                    if (We(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var n = Ne(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        i = e.placement.split("-")[0], r = Oe(i), o = e.placement.split("-")[1] || "", s = [];
                    switch (t.behavior) {
                        case"flip":
                            s = [i, r];
                            break;
                        case"clockwise":
                            s = Ue(i);
                            break;
                        case"counterclockwise":
                            s = Ue(i, !0);
                            break;
                        default:
                            s = t.behavior
                    }
                    return s.forEach(function (a, l) {
                        if (i !== a || s.length === l + 1) return e;
                        i = e.placement.split("-")[0], r = Oe(i);
                        var c, u = e.offsets.popper, f = e.offsets.reference, h = Math.floor,
                            d = "left" === i && h(u.right) > h(f.left) || "right" === i && h(u.left) < h(f.right) || "top" === i && h(u.bottom) > h(f.top) || "bottom" === i && h(u.top) < h(f.bottom),
                            p = h(u.left) < h(n.left), g = h(u.right) > h(n.right), m = h(u.top) < h(n.top),
                            v = h(u.bottom) > h(n.bottom),
                            y = "left" === i && p || "right" === i && g || "top" === i && m || "bottom" === i && v,
                            b = -1 !== ["top", "bottom"].indexOf(i),
                            _ = !!t.flipVariations && (b && "start" === o && p || b && "end" === o && g || !b && "start" === o && m || !b && "end" === o && v);
                        (d || y || _) && (e.flipped = !0, (d || y) && (i = s[l + 1]), _ && (o = "end" === (c = o) ? "start" : "start" === c ? "end" : c), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = xe({}, e.offsets.popper, je(e.instance.popper, e.offsets.reference, e.placement)), e = Pe(e.instance.modifiers, e, "flip"))
                    }), e
                }, behavior: "flip", padding: 5, boundariesElement: "viewport"
            }, inner: {
                order: 700, enabled: !1, fn: function (e) {
                    var t = e.placement, n = t.split("-")[0], i = e.offsets, r = i.popper, o = i.reference,
                        s = -1 !== ["left", "right"].indexOf(n), a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = Oe(t), e.offsets.popper = Ce(r), e
                }
            }, hide: {
                order: 800, enabled: !0, fn: function (e) {
                    if (!Fe(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference, n = He(e.instance.modifiers, function (e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            }, computeStyle: {
                order: 850, enabled: !0, fn: function (e, t) {
                    var n = t.x, i = t.y, r = e.offsets.popper, o = He(e.instance.modifiers, function (e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, a, l = void 0 !== o ? o : t.gpuAcceleration, c = Se(ge(e.instance.popper)),
                        u = {position: r.position}, f = {
                            left: Math.floor(r.left),
                            top: Math.round(r.top),
                            bottom: Math.round(r.bottom),
                            right: Math.floor(r.right)
                        }, h = "bottom" === n ? "top" : "bottom", d = "right" === i ? "left" : "right", p = Re("transform");
                    if (a = "bottom" === h ? -c.height + f.bottom : f.top, s = "right" === d ? -c.width + f.right : f.left, l && p) u[p] = "translate3d(" + s + "px, " + a + "px, 0)", u[h] = 0, u[d] = 0, u.willChange = "transform"; else {
                        var g = "bottom" === h ? -1 : 1, m = "right" === d ? -1 : 1;
                        u[h] = a * g, u[d] = s * m, u.willChange = h + ", " + d
                    }
                    var v = {"x-placement": e.placement};
                    return e.attributes = xe({}, v, e.attributes), e.styles = xe({}, u, e.styles), e.arrowStyles = xe({}, e.offsets.arrow, e.arrowStyles), e
                }, gpuAcceleration: !0, x: "bottom", y: "right"
            }, applyStyle: {
                order: 900, enabled: !0, fn: function (e) {
                    var t, n;
                    return Ye(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
                        !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                    }), e.arrowElement && Object.keys(e.arrowStyles).length && Ye(e.arrowElement, e.arrowStyles), e
                }, onLoad: function (e, t, n, i, r) {
                    var o = Ie(r, t, e, n.positionFixed),
                        s = ke(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s), Ye(t, {position: n.positionFixed ? "fixed" : "absolute"}), n
                }, gpuAcceleration: void 0
            }
        }
    }, Qe = function () {
        function e(t, n) {
            var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            !function (t, n) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this), this.scheduleUpdate = function () {
                return requestAnimationFrame(i.update)
            }, this.update = ae(this.update.bind(this)), this.options = xe({}, e.Defaults, r), this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(xe({}, e.Defaults.modifiers, r.modifiers)).forEach(function (t) {
                i.options.modifiers[t] = xe({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
            }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                return xe({name: e}, i.options.modifiers[e])
            }).sort(function (e, t) {
                return e.order - t.order
            }), this.modifiers.forEach(function (e) {
                e.enabled && le(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
            }), this.update();
            var o = this.options.eventsEnabled;
            o && this.enableEventListeners(), this.state.eventsEnabled = o
        }

        return Ee(e, [{
            key: "update", value: function () {
                return function () {
                    if (!this.state.isDestroyed) {
                        var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                        e.offsets.reference = Ie(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = ke(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = je(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = Pe(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                    }
                }.call(this)
            }
        }, {
            key: "destroy", value: function () {
                return function () {
                    return this.state.isDestroyed = !0, We(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Re("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }.call(this)
            }
        }, {
            key: "enableEventListeners", value: function () {
                return function () {
                    this.state.eventsEnabled || (this.state = function (e, t, n, i) {
                        n.updateBound = i, Me(e).addEventListener("resize", n.updateBound, {passive: !0});
                        var r = fe(e);
                        return function e(t, n, i, r) {
                            var o = "BODY" === t.nodeName, s = o ? t.ownerDocument.defaultView : t;
                            s.addEventListener(n, i, {passive: !0}), o || e(fe(s.parentNode), n, i, r), r.push(s)
                        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
                    }(this.reference, this.options, this.state, this.scheduleUpdate))
                }.call(this)
            }
        }, {
            key: "disableEventListeners", value: function () {
                return function () {
                    var e, t;
                    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, Me(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
                        e.removeEventListener("scroll", t.updateBound)
                    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                }.call(this)
            }
        }]), e
    }();
    Qe.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Qe.placements = Xe, Qe.Defaults = Ke;
    var Ve, ze, $e, Ge, Je, Ze, et, tt, nt, it, rt, ot, st, at, lt, ct, ut, ft, ht, dt, pt, gt, mt, vt, yt, bt, _t, wt,
        Et, Tt, xt, Ct, St, At, Dt, Nt, kt, It, Lt, Ot, jt, Ht, Pt, Wt, Rt, Mt, qt, Yt, Ft, Xt, Bt, Ut, Kt, Qt, Vt, zt,
        $t, Gt, Jt, Zt, en, tn, nn, rn, on, sn, an, ln, cn, un, fn, hn, dn, pn, gn, mn, vn, yn, bn, _n, wn, En, Tn,
        xn = (ze = "dropdown", Ge = "." + ($e = "bs.dropdown"), Je = ".data-api", Ze = (Ve = t).fn[ze], et = new RegExp("38|40|27"), tt = {
            HIDE: "hide" + Ge,
            HIDDEN: "hidden" + Ge,
            SHOW: "show" + Ge,
            SHOWN: "shown" + Ge,
            CLICK: "click" + Ge,
            CLICK_DATA_API: "click" + Ge + Je,
            KEYDOWN_DATA_API: "keydown" + Ge + Je,
            KEYUP_DATA_API: "keyup" + Ge + Je
        }, nt = "disabled", it = "show", "dropup", "dropright", "dropleft", rt = "dropdown-menu-right", "position-static", ot = '[data-toggle="dropdown"]', ".dropdown form", st = ".dropdown-menu", ".navbar-nav", ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", "top-start", "top-end", "bottom-start", "bottom-end", "right-start", "left-start", at = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, lt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, ct = function () {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            var t = e.prototype;
            return t.toggle = function () {
                if (!this._element.disabled && !Ve(this._element).hasClass(nt)) {
                    var t = e._getParentFromElement(this._element), n = Ve(this._menu).hasClass(it);
                    if (e._clearMenus(), !n) {
                        var i = {relatedTarget: this._element}, r = Ve.Event(tt.SHOW, i);
                        if (Ve(t).trigger(r), !r.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === Qe) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var o = this._element;
                                "parent" === this._config.reference ? o = t : J.isElement(this._config.reference) && (o = this._config.reference, void 0 !== this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && Ve(t).addClass("position-static"), this._popper = new Qe(o, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === Ve(t).closest(".navbar-nav").length && Ve(document.body).children().on("mouseover", null, Ve.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), Ve(this._menu).toggleClass(it), Ve(t).toggleClass(it).trigger(Ve.Event(tt.SHOWN, i))
                        }
                    }
                }
            }, t.dispose = function () {
                Ve.removeData(this._element, $e), Ve(this._element).off(Ge), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function () {
                var e = this;
                Ve(this._element).on(tt.CLICK, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function (e) {
                return e = r({}, this.constructor.Default, Ve(this._element).data(), e), J.typeCheckConfig(ze, e, this.constructor.DefaultType), e
            }, t._getMenuElement = function () {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(st))
                }
                return this._menu
            }, t._getPlacement = function () {
                var e = Ve(this._element.parentNode), t = "bottom-start";
                return e.hasClass("dropup") ? (t = "top-start", Ve(this._menu).hasClass(rt) && (t = "top-end")) : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : Ve(this._menu).hasClass(rt) && (t = "bottom-end"), t
            }, t._detectNavbar = function () {
                return 0 < Ve(this._element).closest(".navbar").length
            }, t._getPopperConfig = function () {
                var e = this, t = {};
                "function" == typeof this._config.offset ? t.fn = function (t) {
                    return t.offsets = r({}, t.offsets, e._config.offset(t.offsets) || {}), t
                } : t.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: t,
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {enabled: !1}), n
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = Ve(this).data($e);
                    if (n || (n = new e(this, "object" == typeof t ? t : null), Ve(this).data($e, n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, e._clearMenus = function (t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var n = [].slice.call(document.querySelectorAll(ot)), i = 0, r = n.length; i < r; i++) {
                    var o = e._getParentFromElement(n[i]), s = Ve(n[i]).data($e), a = {relatedTarget: n[i]};
                    if (t && "click" === t.type && (a.clickEvent = t), s) {
                        var l = s._menu;
                        if (Ve(o).hasClass(it) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && Ve.contains(o, t.target))) {
                            var c = Ve.Event(tt.HIDE, a);
                            Ve(o).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && Ve(document.body).children().off("mouseover", null, Ve.noop), n[i].setAttribute("aria-expanded", "false"), Ve(l).removeClass(it), Ve(o).removeClass(it).trigger(Ve.Event(tt.HIDDEN, a)))
                        }
                    }
                }
            }, e._getParentFromElement = function (e) {
                var t, n = J.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function (t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || Ve(t.target).closest(st).length)) : et.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !Ve(this).hasClass(nt))) {
                    var n = e._getParentFromElement(this), i = Ve(n).hasClass(it);
                    if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                        var r = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
                        if (0 !== r.length) {
                            var o = r.indexOf(t.target);
                            38 === t.which && 0 < o && o--, 40 === t.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var s = n.querySelector(ot);
                            Ve(s).trigger("focus")
                        }
                        Ve(this).trigger("click")
                    }
                }
            }, i(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default", get: function () {
                    return at
                }
            }, {
                key: "DefaultType", get: function () {
                    return lt
                }
            }]), e
        }(), Ve(document).on(tt.KEYDOWN_DATA_API, ot, ct._dataApiKeydownHandler).on(tt.KEYDOWN_DATA_API, st, ct._dataApiKeydownHandler).on(tt.CLICK_DATA_API + " " + tt.KEYUP_DATA_API, ct._clearMenus).on(tt.CLICK_DATA_API, ot, function (e) {
            e.preventDefault(), e.stopPropagation(), ct._jQueryInterface.call(Ve(this), "toggle")
        }).on(tt.CLICK_DATA_API, ".dropdown form", function (e) {
            e.stopPropagation()
        }), Ve.fn[ze] = ct._jQueryInterface, Ve.fn[ze].Constructor = ct, Ve.fn[ze].noConflict = function () {
            return Ve.fn[ze] = Ze, ct._jQueryInterface
        }, ct), Cn = (ft = "modal", dt = "." + (ht = "bs.modal"), pt = (ut = t).fn[ft], gt = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, mt = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, vt = {
            HIDE: "hide" + dt,
            HIDDEN: "hidden" + dt,
            SHOW: "show" + dt,
            SHOWN: "shown" + dt,
            FOCUSIN: "focusin" + dt,
            RESIZE: "resize" + dt,
            CLICK_DISMISS: "click.dismiss" + dt,
            KEYDOWN_DISMISS: "keydown.dismiss" + dt,
            MOUSEUP_DISMISS: "mouseup.dismiss" + dt,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + dt,
            CLICK_DATA_API: "click" + dt + ".data-api"
        }, "modal-scrollbar-measure", "modal-backdrop", yt = "modal-open", bt = "fade", _t = "show", wt = ".modal-dialog", '[data-toggle="modal"]', '[data-dismiss="modal"]', Et = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Tt = ".sticky-top", xt = function () {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(wt), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
            }

            var t = e.prototype;
            return t.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e)
            }, t.show = function (e) {
                var t = this;
                if (!this._isTransitioning && !this._isShown) {
                    ut(this._element).hasClass(bt) && (this._isTransitioning = !0);
                    var n = ut.Event(vt.SHOW, {relatedTarget: e});
                    ut(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), ut(document.body).addClass(yt), this._setEscapeEvent(), this._setResizeEvent(), ut(this._element).on(vt.CLICK_DISMISS, '[data-dismiss="modal"]', function (e) {
                        return t.hide(e)
                    }), ut(this._dialog).on(vt.MOUSEDOWN_DISMISS, function () {
                        ut(t._element).one(vt.MOUSEUP_DISMISS, function (e) {
                            ut(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return t._showElement(e)
                    }))
                }
            }, t.hide = function (e) {
                var t = this;
                if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = ut.Event(vt.HIDE);
                    if (ut(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = ut(this._element).hasClass(bt);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), ut(document).off(vt.FOCUSIN), ut(this._element).removeClass(_t), ut(this._element).off(vt.CLICK_DISMISS), ut(this._dialog).off(vt.MOUSEDOWN_DISMISS), i) {
                            var r = J.getTransitionDurationFromElement(this._element);
                            ut(this._element).one(J.TRANSITION_END, function (e) {
                                return t._hideModal(e)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function () {
                ut.removeData(this._element, ht), ut(window, document, this._element, this._backdrop).off(dt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, t.handleUpdate = function () {
                this._adjustDialog()
            }, t._getConfig = function (e) {
                return e = r({}, gt, e), J.typeCheckConfig(ft, e, mt), e
            }, t._showElement = function (e) {
                var t = this, n = ut(this._element).hasClass(bt);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && J.reflow(this._element), ut(this._element).addClass(_t), this._config.focus && this._enforceFocus();
                var i = ut.Event(vt.SHOWN, {relatedTarget: e}), r = function () {
                    t._config.focus && t._element.focus(), t._isTransitioning = !1, ut(t._element).trigger(i)
                };
                if (n) {
                    var o = J.getTransitionDurationFromElement(this._element);
                    ut(this._dialog).one(J.TRANSITION_END, r).emulateTransitionEnd(o)
                } else r()
            }, t._enforceFocus = function () {
                var e = this;
                ut(document).off(vt.FOCUSIN).on(vt.FOCUSIN, function (t) {
                    document !== t.target && e._element !== t.target && 0 === ut(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard ? ut(this._element).on(vt.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || ut(this._element).off(vt.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function () {
                var e = this;
                this._isShown ? ut(window).on(vt.RESIZE, function (t) {
                    return e.handleUpdate(t)
                }) : ut(window).off(vt.RESIZE)
            }, t._hideModal = function () {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                    ut(document.body).removeClass(yt), e._resetAdjustments(), e._resetScrollbar(), ut(e._element).trigger(vt.HIDDEN)
                })
            }, t._removeBackdrop = function () {
                this._backdrop && (ut(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function (e) {
                var t = this, n = ut(this._element).hasClass(bt) ? bt : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), ut(this._backdrop).appendTo(document.body), ut(this._element).on(vt.CLICK_DISMISS, function (e) {
                        t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                    }), n && J.reflow(this._backdrop), ut(this._backdrop).addClass(_t), !e) return;
                    if (!n) return void e();
                    var i = J.getTransitionDurationFromElement(this._backdrop);
                    ut(this._backdrop).one(J.TRANSITION_END, e).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    ut(this._backdrop).removeClass(_t);
                    var r = function () {
                        t._removeBackdrop(), e && e()
                    };
                    if (ut(this._element).hasClass(bt)) {
                        var o = J.getTransitionDurationFromElement(this._backdrop);
                        ut(this._backdrop).one(J.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r()
                } else e && e()
            }, t._adjustDialog = function () {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function () {
                var e = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(Et)), n = [].slice.call(document.querySelectorAll(Tt));
                    ut(t).each(function (t, n) {
                        var i = n.style.paddingRight, r = ut(n).css("padding-right");
                        ut(n).data("padding-right", i).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                    }), ut(n).each(function (t, n) {
                        var i = n.style.marginRight, r = ut(n).css("margin-right");
                        ut(n).data("margin-right", i).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                    });
                    var i = document.body.style.paddingRight, r = ut(document.body).css("padding-right");
                    ut(document.body).data("padding-right", i).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                }
            }, t._resetScrollbar = function () {
                var e = [].slice.call(document.querySelectorAll(Et));
                ut(e).each(function (e, t) {
                    var n = ut(t).data("padding-right");
                    ut(t).removeData("padding-right"), t.style.paddingRight = n || ""
                });
                var t = [].slice.call(document.querySelectorAll("" + Tt));
                ut(t).each(function (e, t) {
                    var n = ut(t).data("margin-right");
                    void 0 !== n && ut(t).css("margin-right", n).removeData("margin-right")
                });
                var n = ut(document.body).data("padding-right");
                ut(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, t._getScrollbarWidth = function () {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function (t, n) {
                return this.each(function () {
                    var i = ut(this).data(ht), o = r({}, gt, ut(this).data(), "object" == typeof t && t ? t : {});
                    if (i || (i = new e(this, o), ut(this).data(ht, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t](n)
                    } else o.show && i.show(n)
                })
            }, i(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default", get: function () {
                    return gt
                }
            }]), e
        }(), ut(document).on(vt.CLICK_DATA_API, '[data-toggle="modal"]', function (e) {
            var t, n = this, i = J.getSelectorFromElement(this);
            i && (t = document.querySelector(i));
            var o = ut(t).data(ht) ? "toggle" : r({}, ut(t).data(), ut(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var s = ut(t).one(vt.SHOW, function (e) {
                e.isDefaultPrevented() || s.one(vt.HIDDEN, function () {
                    ut(n).is(":visible") && n.focus()
                })
            });
            xt._jQueryInterface.call(ut(t), o, this)
        }), ut.fn[ft] = xt._jQueryInterface, ut.fn[ft].Constructor = xt, ut.fn[ft].noConflict = function () {
            return ut.fn[ft] = pt, xt._jQueryInterface
        }, xt),
        Sn = (St = "tooltip", Dt = "." + (At = "bs.tooltip"), Nt = (Ct = t).fn[St], kt = "bs-tooltip", It = new RegExp("(^|\\s)" + kt + "\\S+", "g"), jt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !(Ot = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}),
            selector: !(Lt = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }),
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, "out", Pt = {
            HIDE: "hide" + Dt,
            HIDDEN: "hidden" + Dt,
            SHOW: (Ht = "show") + Dt,
            SHOWN: "shown" + Dt,
            INSERTED: "inserted" + Dt,
            CLICK: "click" + Dt,
            FOCUSIN: "focusin" + Dt,
            FOCUSOUT: "focusout" + Dt,
            MOUSEENTER: "mouseenter" + Dt,
            MOUSELEAVE: "mouseleave" + Dt
        }, Wt = "fade", Rt = "show", ".tooltip-inner", ".arrow", Mt = "hover", qt = "focus", "click", "manual", Yt = function () {
            function e(e, t) {
                if (void 0 === Qe) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }

            var t = e.prototype;
            return t.enable = function () {
                this._isEnabled = !0
            }, t.disable = function () {
                this._isEnabled = !1
            }, t.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function (e) {
                if (this._isEnabled) if (e) {
                    var t = this.constructor.DATA_KEY, n = Ct(e.currentTarget).data(t);
                    n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), Ct(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (Ct(this.getTipElement()).hasClass(Rt)) return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, t.dispose = function () {
                clearTimeout(this._timeout), Ct.removeData(this.element, this.constructor.DATA_KEY), Ct(this.element).off(this.constructor.EVENT_KEY), Ct(this.element).closest(".modal").off("hide.bs.modal"), this.tip && Ct(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function () {
                var e = this;
                if ("none" === Ct(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = Ct.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    Ct(this.element).trigger(t);
                    var n = Ct.contains(this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !n) return;
                    var i = this.getTipElement(), r = J.getUID(this.constructor.NAME);
                    i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && Ct(i).addClass(Wt);
                    var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                        s = this._getAttachment(o);
                    this.addAttachmentClass(s);
                    var a = !1 === this.config.container ? document.body : Ct(document).find(this.config.container);
                    Ct(i).data(this.constructor.DATA_KEY, this), Ct.contains(this.element.ownerDocument.documentElement, this.tip) || Ct(i).appendTo(a), Ct(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Qe(this.element, i, {
                        placement: s,
                        modifiers: {
                            offset: {offset: this.config.offset},
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: ".arrow"},
                            preventOverflow: {boundariesElement: this.config.boundary}
                        },
                        onCreate: function (t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function (t) {
                            e._handlePopperPlacementChange(t)
                        }
                    }), Ct(i).addClass(Rt), "ontouchstart" in document.documentElement && Ct(document.body).children().on("mouseover", null, Ct.noop);
                    var l = function () {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, Ct(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e)
                    };
                    if (Ct(this.tip).hasClass(Wt)) {
                        var c = J.getTransitionDurationFromElement(this.tip);
                        Ct(this.tip).one(J.TRANSITION_END, l).emulateTransitionEnd(c)
                    } else l()
                }
            }, t.hide = function (e) {
                var t = this, n = this.getTipElement(), i = Ct.Event(this.constructor.Event.HIDE), r = function () {
                    t._hoverState !== Ht && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), Ct(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                };
                if (Ct(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (Ct(n).removeClass(Rt), "ontouchstart" in document.documentElement && Ct(document.body).children().off("mouseover", null, Ct.noop), this._activeTrigger.click = !1, this._activeTrigger[qt] = !1, this._activeTrigger[Mt] = !1, Ct(this.tip).hasClass(Wt)) {
                        var o = J.getTransitionDurationFromElement(n);
                        Ct(n).one(J.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r();
                    this._hoverState = ""
                }
            }, t.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function () {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function (e) {
                Ct(this.getTipElement()).addClass(kt + "-" + e)
            }, t.getTipElement = function () {
                return this.tip = this.tip || Ct(this.config.template)[0], this.tip
            }, t.setContent = function () {
                var e = this.getTipElement();
                this.setElementContent(Ct(e.querySelectorAll(".tooltip-inner")), this.getTitle()), Ct(e).removeClass(Wt + " " + Rt)
            }, t.setElementContent = function (e, t) {
                var n = this.config.html;
                "object" == typeof t && (t.nodeType || t.jquery) ? n ? Ct(t).parent().is(e) || e.empty().append(t) : e.text(Ct(t).text()) : e[n ? "html" : "text"](t)
            }, t.getTitle = function () {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, t._getAttachment = function (e) {
                return Ot[e.toUpperCase()]
            }, t._setListeners = function () {
                var e = this;
                this.config.trigger.split(" ").forEach(function (t) {
                    if ("click" === t) Ct(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                        return e.toggle(t)
                    }); else if ("manual" !== t) {
                        var n = t === Mt ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            i = t === Mt ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        Ct(e.element).on(n, e.config.selector, function (t) {
                            return e._enter(t)
                        }).on(i, e.config.selector, function (t) {
                            return e._leave(t)
                        })
                    }
                    Ct(e.element).closest(".modal").on("hide.bs.modal", function () {
                        return e.hide()
                    })
                }), this.config.selector ? this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || Ct(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), Ct(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? qt : Mt] = !0), Ct(t.getTipElement()).hasClass(Rt) || t._hoverState === Ht ? t._hoverState = Ht : (clearTimeout(t._timeout), t._hoverState = Ht, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
                    t._hoverState === Ht && t.show()
                }, t.config.delay.show) : t.show())
            }, t._leave = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || Ct(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), Ct(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? qt : Mt] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
                    "out" === t._hoverState && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, t._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                return !1
            }, t._getConfig = function (e) {
                return "number" == typeof (e = r({}, this.constructor.Default, Ct(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), J.typeCheckConfig(St, e, this.constructor.DefaultType), e
            }, t._getDelegateConfig = function () {
                var e = {};
                if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, t._cleanTipClass = function () {
                var e = Ct(this.getTipElement()), t = e.attr("class").match(It);
                null !== t && t.length && e.removeClass(t.join(""))
            }, t._handlePopperPlacementChange = function (e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, t._fixTransition = function () {
                var e = this.getTipElement(), t = this.config.animation;
                null === e.getAttribute("x-placement") && (Ct(e).removeClass(Wt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = Ct(this).data(At), i = "object" == typeof t && t;
                    if ((n || !/dispose|hide/.test(t)) && (n || (n = new e(this, i), Ct(this).data(At, n)), "string" == typeof t)) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default", get: function () {
                    return jt
                }
            }, {
                key: "NAME", get: function () {
                    return St
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return At
                }
            }, {
                key: "Event", get: function () {
                    return Pt
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return Dt
                }
            }, {
                key: "DefaultType", get: function () {
                    return Lt
                }
            }]), e
        }(), Ct.fn[St] = Yt._jQueryInterface, Ct.fn[St].Constructor = Yt, Ct.fn[St].noConflict = function () {
            return Ct.fn[St] = Nt, Yt._jQueryInterface
        }, Yt),
        An = (Xt = "popover", Ut = "." + (Bt = "bs.popover"), Kt = (Ft = t).fn[Xt], Qt = "bs-popover", Vt = new RegExp("(^|\\s)" + Qt + "\\S+", "g"), zt = r({}, Sn.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), $t = r({}, Sn.DefaultType, {content: "(string|element|function)"}), "fade", ".popover-header", ".popover-body", Gt = {
            HIDE: "hide" + Ut,
            HIDDEN: "hidden" + Ut,
            SHOW: "show" + Ut,
            SHOWN: "shown" + Ut,
            INSERTED: "inserted" + Ut,
            CLICK: "click" + Ut,
            FOCUSIN: "focusin" + Ut,
            FOCUSOUT: "focusout" + Ut,
            MOUSEENTER: "mouseenter" + Ut,
            MOUSELEAVE: "mouseleave" + Ut
        }, Jt = function (e) {
            var t, n;

            function r() {
                return e.apply(this, arguments) || this
            }

            n = e, (t = r).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
            var o = r.prototype;
            return o.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, o.addAttachmentClass = function (e) {
                Ft(this.getTipElement()).addClass(Qt + "-" + e)
            }, o.getTipElement = function () {
                return this.tip = this.tip || Ft(this.config.template)[0], this.tip
            }, o.setContent = function () {
                var e = Ft(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
            }, o._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, o._cleanTipClass = function () {
                var e = Ft(this.getTipElement()), t = e.attr("class").match(Vt);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, r._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = Ft(this).data(Bt), n = "object" == typeof e ? e : null;
                    if ((t || !/destroy|hide/.test(e)) && (t || (t = new r(this, n), Ft(this).data(Bt, t)), "string" == typeof e)) {
                        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, i(r, null, [{
                key: "VERSION", get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default", get: function () {
                    return zt
                }
            }, {
                key: "NAME", get: function () {
                    return Xt
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return Bt
                }
            }, {
                key: "Event", get: function () {
                    return Gt
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return Ut
                }
            }, {
                key: "DefaultType", get: function () {
                    return $t
                }
            }]), r
        }(Sn), Ft.fn[Xt] = Jt._jQueryInterface, Ft.fn[Xt].Constructor = Jt, Ft.fn[Xt].noConflict = function () {
            return Ft.fn[Xt] = Kt, Jt._jQueryInterface
        }, Jt), Dn = (en = "scrollspy", nn = "." + (tn = "bs.scrollspy"), rn = (Zt = t).fn[en], on = {
            offset: 10,
            method: "auto",
            target: ""
        }, sn = {offset: "number", method: "string", target: "(string|element)"}, an = {
            ACTIVATE: "activate" + nn,
            SCROLL: "scroll" + nn,
            LOAD_DATA_API: "load" + nn + ".data-api"
        }, "dropdown-item", ln = "active", '[data-spy="scroll"]', ".active", cn = ".nav, .list-group", un = ".nav-link", ".nav-item", fn = ".list-group-item", ".dropdown", hn = ".dropdown-item", ".dropdown-toggle", "offset", dn = "position", pn = function () {
            function e(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + un + "," + this._config.target + " " + fn + "," + this._config.target + " " + hn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Zt(this._scrollElement).on(an.SCROLL, function (e) {
                    return n._process(e)
                }), this.refresh(), this._process()
            }

            var t = e.prototype;
            return t.refresh = function () {
                var e = this, t = this._scrollElement === this._scrollElement.window ? "offset" : dn,
                    n = "auto" === this._config.method ? t : this._config.method, i = n === dn ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
                    var t, r = J.getSelectorFromElement(e);
                    if (r && (t = document.querySelector(r)), t) {
                        var o = t.getBoundingClientRect();
                        if (o.width || o.height) return [Zt(t)[n]().top + i, r]
                    }
                    return null
                }).filter(function (e) {
                    return e
                }).sort(function (e, t) {
                    return e[0] - t[0]
                }).forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function () {
                Zt.removeData(this._element, tn), Zt(this._scrollElement).off(nn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function (e) {
                if ("string" != typeof (e = r({}, on, "object" == typeof e && e ? e : {})).target) {
                    var t = Zt(e.target).attr("id");
                    t || (t = J.getUID(en), Zt(e.target).attr("id", t)), e.target = "#" + t
                }
                return J.typeCheckConfig(en, e, sn), e
            }, t._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function () {
                var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
            }, t._activate = function (e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",");
                t = t.map(function (t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var n = Zt([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(ln), n.addClass(ln)) : (n.addClass(ln), n.parents(cn).prev(un + ", " + fn).addClass(ln), n.parents(cn).prev(".nav-item").children(un).addClass(ln)), Zt(this._scrollElement).trigger(an.ACTIVATE, {relatedTarget: e})
            }, t._clear = function () {
                var e = [].slice.call(document.querySelectorAll(this._selector));
                Zt(e).filter(".active").removeClass(ln)
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = Zt(this).data(tn);
                    if (n || (n = new e(this, "object" == typeof t && t), Zt(this).data(tn, n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default", get: function () {
                    return on
                }
            }]), e
        }(), Zt(window).on(an.LOAD_DATA_API, function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
                var n = Zt(e[t]);
                pn._jQueryInterface.call(n, n.data())
            }
        }), Zt.fn[en] = pn._jQueryInterface, Zt.fn[en].Constructor = pn, Zt.fn[en].noConflict = function () {
            return Zt.fn[en] = rn, pn._jQueryInterface
        }, pn), Nn = (vn = "." + (mn = "bs.tab"), yn = (gn = t).fn.tab, bn = {
            HIDE: "hide" + vn,
            HIDDEN: "hidden" + vn,
            SHOW: "show" + vn,
            SHOWN: "shown" + vn,
            CLICK_DATA_API: "click" + vn + ".data-api"
        }, "dropdown-menu", _n = "active", "disabled", "fade", "show", ".dropdown", ".nav, .list-group", wn = ".active", En = "> li > .active", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', ".dropdown-toggle", "> .dropdown-menu .active", Tn = function () {
            function e(e) {
                this._element = e
            }

            var t = e.prototype;
            return t.show = function () {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && gn(this._element).hasClass(_n) || gn(this._element).hasClass("disabled"))) {
                    var t, n, i = gn(this._element).closest(".nav, .list-group")[0],
                        r = J.getSelectorFromElement(this._element);
                    if (i) {
                        var o = "UL" === i.nodeName ? En : wn;
                        n = (n = gn.makeArray(gn(i).find(o)))[n.length - 1]
                    }
                    var s = gn.Event(bn.HIDE, {relatedTarget: this._element}), a = gn.Event(bn.SHOW, {relatedTarget: n});
                    if (n && gn(n).trigger(s), gn(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        r && (t = document.querySelector(r)), this._activate(this._element, i);
                        var l = function () {
                            var t = gn.Event(bn.HIDDEN, {relatedTarget: e._element}),
                                i = gn.Event(bn.SHOWN, {relatedTarget: n});
                            gn(n).trigger(t), gn(e._element).trigger(i)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function () {
                gn.removeData(this._element, mn), this._element = null
            }, t._activate = function (e, t, n) {
                var i = this, r = ("UL" === t.nodeName ? gn(t).find(En) : gn(t).children(wn))[0],
                    o = n && r && gn(r).hasClass("fade"), s = function () {
                        return i._transitionComplete(e, r, n)
                    };
                if (r && o) {
                    var a = J.getTransitionDurationFromElement(r);
                    gn(r).one(J.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, t._transitionComplete = function (e, t, n) {
                if (t) {
                    gn(t).removeClass("show " + _n);
                    var i = gn(t.parentNode).find("> .dropdown-menu .active")[0];
                    i && gn(i).removeClass(_n), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (gn(e).addClass(_n), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), J.reflow(e), gn(e).addClass("show"), e.parentNode && gn(e.parentNode).hasClass("dropdown-menu")) {
                    var r = gn(e).closest(".dropdown")[0];
                    if (r) {
                        var o = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                        gn(o).addClass(_n)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = gn(this), i = n.data(mn);
                    if (i || (i = new e(this), n.data(mn, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.3"
                }
            }]), e
        }(), gn(document).on(bn.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
            e.preventDefault(), Tn._jQueryInterface.call(gn(this), "show")
        }), gn.fn.tab = Tn._jQueryInterface, gn.fn.tab.Constructor = Tn, gn.fn.tab.noConflict = function () {
            return gn.fn.tab = yn, Tn._jQueryInterface
        }, Tn);
    !function (e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = J, e.Alert = Z, e.Button = ee, e.Carousel = te, e.Collapse = ne, e.Dropdown = xn, e.Modal = Cn, e.Popover = An, e.Scrollspy = Dn, e.Tab = Nn, e.Tooltip = Sn, Object.defineProperty(e, "__esModule", {value: !0})
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.PerfectScrollbar = t()
}(this, function () {
    "use strict";

    function e(e) {
        return getComputedStyle(e)
    }

    function t(e, t) {
        for (var n in t) {
            var i = t[n];
            "number" == typeof i && (i += "px"), e.style[n] = i
        }
        return e
    }

    function n(e) {
        var t = document.createElement("div");
        return t.className = e, t
    }

    function i(e, t) {
        if (!g) throw new Error("No element matching method supported");
        return g.call(e, t)
    }

    function r(e) {
        e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
    }

    function o(e, t) {
        return Array.prototype.filter.call(e.children, function (e) {
            return i(e, t)
        })
    }

    function s(e, t) {
        var n = e.element.classList, i = m.state.scrolling(t);
        n.contains(i) ? clearTimeout(v[t]) : n.add(i)
    }

    function a(e, t) {
        v[t] = setTimeout(function () {
            return e.isAlive && e.element.classList.remove(m.state.scrolling(t))
        }, e.settings.scrollingThreshold)
    }

    function l(e, t) {
        s(e, t), a(e, t)
    }

    function c(e) {
        if ("function" == typeof window.CustomEvent) return new CustomEvent(e);
        var t = document.createEvent("CustomEvent");
        return t.initCustomEvent(e, !1, !1, void 0), t
    }

    function u(e) {
        return parseInt(e, 10) || 0
    }

    function f(e) {
        return i(e, "input,[contenteditable]") || i(e, "select,[contenteditable]") || i(e, "textarea,[contenteditable]") || i(e, "button,[contenteditable]")
    }

    function h(e, t) {
        return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
    }

    function d(e, n) {
        var i = {width: n.railXWidth}, r = Math.floor(e.scrollTop);
        n.isRtl ? i.left = n.negativeScrollAdjustment + e.scrollLeft + n.containerWidth - n.contentWidth : i.left = e.scrollLeft, n.isScrollbarXUsingBottom ? i.bottom = n.scrollbarXBottom - r : i.top = n.scrollbarXTop + r, t(n.scrollbarXRail, i);
        var o = {top: r, height: n.railYHeight};
        n.isScrollbarYUsingRight ? n.isRtl ? o.right = n.contentWidth - (n.negativeScrollAdjustment + e.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth : o.right = n.scrollbarYRight - e.scrollLeft : n.isRtl ? o.left = n.negativeScrollAdjustment + e.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth : o.left = n.scrollbarYLeft + e.scrollLeft, t(n.scrollbarYRail, o), t(n.scrollbarX, {
            left: n.scrollbarXLeft,
            width: n.scrollbarXWidth - n.railBorderXWidth
        }), t(n.scrollbarY, {top: n.scrollbarYTop, height: n.scrollbarYHeight - n.railBorderYWidth})
    }

    function p(e, t) {
        function n(t) {
            g[h] = v + b * (t[l] - y), s(e, d), T(e), t.stopPropagation(), t.preventDefault()
        }

        function i() {
            a(e, d), e[p].classList.remove(m.state.clicking), e.event.unbind(e.ownerDocument, "mousemove", n)
        }

        var r = t[0], o = t[1], l = t[2], c = t[3], u = t[4], f = t[5], h = t[6], d = t[7], p = t[8], g = e.element,
            v = null, y = null, b = null;
        e.event.bind(e[u], "mousedown", function (t) {
            v = g[h], y = t[l], b = (e[o] - e[r]) / (e[c] - e[f]), e.event.bind(e.ownerDocument, "mousemove", n), e.event.once(e.ownerDocument, "mouseup", i), e[p].classList.add(m.state.clicking), t.stopPropagation(), t.preventDefault()
        })
    }

    var g = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
        m = {
            main: "ps", element: {
                thumb: function (e) {
                    return "ps__thumb-" + e
                }, rail: function (e) {
                    return "ps__rail-" + e
                }, consuming: "ps__child--consume"
            }, state: {
                focus: "ps--focus", clicking: "ps--clicking", active: function (e) {
                    return "ps--active-" + e
                }, scrolling: function (e) {
                    return "ps--scrolling-" + e
                }
            }
        }, v = {x: null, y: null}, y = function (e) {
            this.element = e, this.handlers = {}
        }, b = {isEmpty: {configurable: !0}};
    y.prototype.bind = function (e, t) {
        void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1)
    }, y.prototype.unbind = function (e, t) {
        var n = this;
        this.handlers[e] = this.handlers[e].filter(function (i) {
            return !(!t || i === t) || (n.element.removeEventListener(e, i, !1), !1)
        })
    }, y.prototype.unbindAll = function () {
        for (var e in this.handlers) this.unbind(e)
    }, b.isEmpty.get = function () {
        var e = this;
        return Object.keys(this.handlers).every(function (t) {
            return 0 === e.handlers[t].length
        })
    }, Object.defineProperties(y.prototype, b);
    var _ = function () {
        this.eventElements = []
    };
    _.prototype.eventElement = function (e) {
        var t = this.eventElements.filter(function (t) {
            return t.element === e
        })[0];
        return t || (t = new y(e), this.eventElements.push(t)), t
    }, _.prototype.bind = function (e, t, n) {
        this.eventElement(e).bind(t, n)
    }, _.prototype.unbind = function (e, t, n) {
        var i = this.eventElement(e);
        i.unbind(t, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1)
    }, _.prototype.unbindAll = function () {
        this.eventElements.forEach(function (e) {
            return e.unbindAll()
        }), this.eventElements = []
    }, _.prototype.once = function (e, t, n) {
        var i = this.eventElement(e), r = function (e) {
            i.unbind(t, r), n(e)
        };
        i.bind(t, r)
    };
    var w = function (e, t, n, i, r) {
        var o;
        if (void 0 === i && (i = !0), void 0 === r && (r = !1), "top" === t) o = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"]; else {
            if ("left" !== t) throw new Error("A proper axis should be provided");
            o = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
        }
        !function (e, t, n, i, r) {
            var o = n[0], s = n[1], a = n[2], u = n[3], f = n[4], h = n[5];
            void 0 === i && (i = !0), void 0 === r && (r = !1);
            var d = e.element;
            e.reach[u] = null, d[a] < 1 && (e.reach[u] = "start"), d[a] > e[o] - e[s] - 1 && (e.reach[u] = "end"), t && (d.dispatchEvent(c("ps-scroll-" + u)), t < 0 ? d.dispatchEvent(c("ps-scroll-" + f)) : t > 0 && d.dispatchEvent(c("ps-scroll-" + h)), i && l(e, u)), e.reach[u] && (t || r) && d.dispatchEvent(c("ps-" + u + "-reach-" + e.reach[u]))
        }(e, n, o, i, r)
    }, E = {
        isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
        supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
        isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
    }, T = function (e) {
        var t = e.element, n = Math.floor(t.scrollTop);
        e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight, t.contains(e.scrollbarXRail) || (o(t, m.element.rail("x")).forEach(function (e) {
            return r(e)
        }), t.appendChild(e.scrollbarXRail)), t.contains(e.scrollbarYRail) || (o(t, m.element.rail("y")).forEach(function (e) {
            return r(e)
        }), t.appendChild(e.scrollbarYRail)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = h(e, u(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = u((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = h(e, u(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = u(n * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), d(t, e), e.scrollbarXActive ? t.classList.add(m.state.active("x")) : (t.classList.remove(m.state.active("x")), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, t.scrollLeft = 0), e.scrollbarYActive ? t.classList.add(m.state.active("y")) : (t.classList.remove(m.state.active("y")), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, t.scrollTop = 0)
    }, x = {
        "click-rail": function (e) {
            e.event.bind(e.scrollbarY, "mousedown", function (e) {
                return e.stopPropagation()
            }), e.event.bind(e.scrollbarYRail, "mousedown", function (t) {
                var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
                e.element.scrollTop += n * e.containerHeight, T(e), t.stopPropagation()
            }), e.event.bind(e.scrollbarX, "mousedown", function (e) {
                return e.stopPropagation()
            }), e.event.bind(e.scrollbarXRail, "mousedown", function (t) {
                var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
                e.element.scrollLeft += n * e.containerWidth, T(e), t.stopPropagation()
            })
        }, "drag-thumb": function (e) {
            p(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), p(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
        }, keyboard: function (e) {
            var t = e.element, n = function () {
                return i(t, ":hover")
            }, r = function () {
                return i(e.scrollbarX, ":focus") || i(e.scrollbarY, ":focus")
            };
            e.event.bind(e.ownerDocument, "keydown", function (i) {
                if (!(i.isDefaultPrevented && i.isDefaultPrevented() || i.defaultPrevented) && (n() || r())) {
                    var o = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                    if (o) {
                        if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement; else for (; o.shadowRoot;) o = o.shadowRoot.activeElement;
                        if (f(o)) return
                    }
                    var s = 0, a = 0;
                    switch (i.which) {
                        case 37:
                            s = i.metaKey ? -e.contentWidth : i.altKey ? -e.containerWidth : -30;
                            break;
                        case 38:
                            a = i.metaKey ? e.contentHeight : i.altKey ? e.containerHeight : 30;
                            break;
                        case 39:
                            s = i.metaKey ? e.contentWidth : i.altKey ? e.containerWidth : 30;
                            break;
                        case 40:
                            a = i.metaKey ? -e.contentHeight : i.altKey ? -e.containerHeight : -30;
                            break;
                        case 32:
                            a = i.shiftKey ? e.containerHeight : -e.containerHeight;
                            break;
                        case 33:
                            a = e.containerHeight;
                            break;
                        case 34:
                            a = -e.containerHeight;
                            break;
                        case 36:
                            a = e.contentHeight;
                            break;
                        case 35:
                            a = -e.contentHeight;
                            break;
                        default:
                            return
                    }
                    e.settings.suppressScrollX && 0 !== s || e.settings.suppressScrollY && 0 !== a || (t.scrollTop -= a, t.scrollLeft += s, T(e), function (n, i) {
                        var r = Math.floor(t.scrollTop);
                        if (0 === n) {
                            if (!e.scrollbarYActive) return !1;
                            if (0 === r && i > 0 || r >= e.contentHeight - e.containerHeight && i < 0) return !e.settings.wheelPropagation
                        }
                        var o = t.scrollLeft;
                        if (0 === i) {
                            if (!e.scrollbarXActive) return !1;
                            if (0 === o && n < 0 || o >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                        }
                        return !0
                    }(s, a) && i.preventDefault())
                }
            })
        }, wheel: function (t) {
            function n(t, n, i) {
                if (!E.isWebKit && r.querySelector("select:focus")) return !0;
                if (!r.contains(t)) return !1;
                for (var o = t; o && o !== r;) {
                    if (o.classList.contains(m.element.consuming)) return !0;
                    var s = e(o);
                    if ([s.overflow, s.overflowX, s.overflowY].join("").match(/(scroll|auto)/)) {
                        var a = o.scrollHeight - o.clientHeight;
                        if (a > 0 && !(0 === o.scrollTop && i > 0 || o.scrollTop === a && i < 0)) return !0;
                        var l = o.scrollWidth - o.clientWidth;
                        if (l > 0 && !(0 === o.scrollLeft && n < 0 || o.scrollLeft === l && n > 0)) return !0
                    }
                    o = o.parentNode
                }
                return !1
            }

            function i(e) {
                var i = function (e) {
                    var t = e.deltaX, n = -1 * e.deltaY;
                    return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t != t && n != n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n]
                }(e), o = i[0], s = i[1];
                if (!n(e.target, o, s)) {
                    var a = !1;
                    t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (s ? r.scrollTop -= s * t.settings.wheelSpeed : r.scrollTop += o * t.settings.wheelSpeed, a = !0) : t.scrollbarXActive && !t.scrollbarYActive && (o ? r.scrollLeft += o * t.settings.wheelSpeed : r.scrollLeft -= s * t.settings.wheelSpeed, a = !0) : (r.scrollTop -= s * t.settings.wheelSpeed, r.scrollLeft += o * t.settings.wheelSpeed), T(t), (a = a || function (e, n) {
                        var i = Math.floor(r.scrollTop), o = 0 === r.scrollTop,
                            s = i + r.offsetHeight === r.scrollHeight, a = 0 === r.scrollLeft,
                            l = r.scrollLeft + r.offsetWidth === r.scrollWidth;
                        return !(Math.abs(n) > Math.abs(e) ? o || s : a || l) || !t.settings.wheelPropagation
                    }(o, s)) && !e.ctrlKey && (e.stopPropagation(), e.preventDefault())
                }
            }

            var r = t.element;
            void 0 !== window.onwheel ? t.event.bind(r, "wheel", i) : void 0 !== window.onmousewheel && t.event.bind(r, "mousewheel", i)
        }, touch: function (t) {
            function n(e, n) {
                var i = Math.floor(u.scrollTop), r = u.scrollLeft, o = Math.abs(e), s = Math.abs(n);
                if (s > o) {
                    if (n < 0 && i === t.contentHeight - t.containerHeight || n > 0 && 0 === i) return 0 === window.scrollY && n > 0 && E.isChrome
                } else if (o > s && (e < 0 && r === t.contentWidth - t.containerWidth || e > 0 && 0 === r)) return !0;
                return !0
            }

            function i(e, n) {
                u.scrollTop -= n, u.scrollLeft -= e, T(t)
            }

            function r(e) {
                return e.targetTouches ? e.targetTouches[0] : e
            }

            function o(e) {
                return !(e.pointerType && "pen" === e.pointerType && 0 === e.buttons || (!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
            }

            function s(e) {
                if (o(e)) {
                    var t = r(e);
                    f.pageX = t.pageX, f.pageY = t.pageY, h = (new Date).getTime(), null !== p && clearInterval(p)
                }
            }

            function a(t, n, i) {
                if (!u.contains(t)) return !1;
                for (var r = t; r && r !== u;) {
                    if (r.classList.contains(m.element.consuming)) return !0;
                    var o = e(r);
                    if ([o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/)) {
                        var s = r.scrollHeight - r.clientHeight;
                        if (s > 0 && !(0 === r.scrollTop && i > 0 || r.scrollTop === s && i < 0)) return !0;
                        var a = r.scrollLeft - r.clientWidth;
                        if (a > 0 && !(0 === r.scrollLeft && n < 0 || r.scrollLeft === a && n > 0)) return !0
                    }
                    r = r.parentNode
                }
                return !1
            }

            function l(e) {
                if (o(e)) {
                    var t = r(e), s = {pageX: t.pageX, pageY: t.pageY}, l = s.pageX - f.pageX, c = s.pageY - f.pageY;
                    if (a(e.target, l, c)) return;
                    i(l, c), f = s;
                    var u = (new Date).getTime(), p = u - h;
                    p > 0 && (d.x = l / p, d.y = c / p, h = u), n(l, c) && e.preventDefault()
                }
            }

            function c() {
                t.settings.swipeEasing && (clearInterval(p), p = setInterval(function () {
                    t.isInitialized ? clearInterval(p) : d.x || d.y ? Math.abs(d.x) < .01 && Math.abs(d.y) < .01 ? clearInterval(p) : (i(30 * d.x, 30 * d.y), d.x *= .8, d.y *= .8) : clearInterval(p)
                }, 10))
            }

            if (E.supportsTouch || E.supportsIePointer) {
                var u = t.element, f = {}, h = 0, d = {}, p = null;
                E.supportsTouch ? (t.event.bind(u, "touchstart", s), t.event.bind(u, "touchmove", l), t.event.bind(u, "touchend", c)) : E.supportsIePointer && (window.PointerEvent ? (t.event.bind(u, "pointerdown", s), t.event.bind(u, "pointermove", l), t.event.bind(u, "pointerup", c)) : window.MSPointerEvent && (t.event.bind(u, "MSPointerDown", s), t.event.bind(u, "MSPointerMove", l), t.event.bind(u, "MSPointerUp", c)))
            }
        }
    }, C = function (i, r) {
        var o = this;
        if (void 0 === r && (r = {}), "string" == typeof i && (i = document.querySelector(i)), !i || !i.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
        for (var s in this.element = i, i.classList.add(m.main), this.settings = {
            handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollingThreshold: 1e3,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !0,
            wheelSpeed: 1
        }, r) o.settings[s] = r[s];
        this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
        var a = function () {
            return i.classList.add(m.state.focus)
        }, l = function () {
            return i.classList.remove(m.state.focus)
        };
        this.isRtl = "rtl" === e(i).direction, this.isNegativeScroll = function () {
            var e, t = i.scrollLeft;
            return i.scrollLeft = -1, e = i.scrollLeft < 0, i.scrollLeft = t, e
        }(), this.negativeScrollAdjustment = this.isNegativeScroll ? i.scrollWidth - i.clientWidth : 0, this.event = new _, this.ownerDocument = i.ownerDocument || document, this.scrollbarXRail = n(m.element.rail("x")), i.appendChild(this.scrollbarXRail), this.scrollbarX = n(m.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", a), this.event.bind(this.scrollbarX, "blur", l), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
        var c = e(this.scrollbarXRail);
        this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth), t(this.scrollbarXRail, {display: "block"}), this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight), t(this.scrollbarXRail, {display: ""}), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = n(m.element.rail("y")), i.appendChild(this.scrollbarYRail), this.scrollbarY = n(m.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", a), this.event.bind(this.scrollbarY, "blur", l), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
        var f = e(this.scrollbarYRail);
        this.scrollbarYRight = parseInt(f.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = u(f.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function (t) {
            var n = e(t);
            return u(n.width) + u(n.paddingLeft) + u(n.paddingRight) + u(n.borderLeftWidth) + u(n.borderRightWidth)
        }(this.scrollbarY) : null, this.railBorderYWidth = u(f.borderTopWidth) + u(f.borderBottomWidth), t(this.scrollbarYRail, {display: "block"}), this.railYMarginHeight = u(f.marginTop) + u(f.marginBottom), t(this.scrollbarYRail, {display: ""}), this.railYHeight = null, this.railYRatio = null, this.reach = {
            x: i.scrollLeft <= 0 ? "start" : i.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
            y: i.scrollTop <= 0 ? "start" : i.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
        }, this.isAlive = !0, this.settings.handlers.forEach(function (e) {
            return x[e](o)
        }), this.lastScrollTop = Math.floor(i.scrollTop), this.lastScrollLeft = i.scrollLeft, this.event.bind(this.element, "scroll", function (e) {
            return o.onScroll(e)
        }), T(this)
    };
    return C.prototype.update = function () {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, t(this.scrollbarXRail, {display: "block"}), t(this.scrollbarYRail, {display: "block"}), this.railXMarginWidth = u(e(this.scrollbarXRail).marginLeft) + u(e(this.scrollbarXRail).marginRight), this.railYMarginHeight = u(e(this.scrollbarYRail).marginTop) + u(e(this.scrollbarYRail).marginBottom), t(this.scrollbarXRail, {display: "none"}), t(this.scrollbarYRail, {display: "none"}), T(this), w(this, "top", 0, !1, !0), w(this, "left", 0, !1, !0), t(this.scrollbarXRail, {display: ""}), t(this.scrollbarYRail, {display: ""}))
    }, C.prototype.onScroll = function (e) {
        this.isAlive && (T(this), w(this, "top", this.element.scrollTop - this.lastScrollTop), w(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
    }, C.prototype.destroy = function () {
        this.isAlive && (this.event.unbindAll(), r(this.scrollbarX), r(this.scrollbarY), r(this.scrollbarXRail), r(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
    }, C.prototype.removePsClasses = function () {
        this.element.className = this.element.className.split(" ").filter(function (e) {
            return !e.match(/^ps([-_].+|)$/)
        }).join(" ")
    }, C
});
