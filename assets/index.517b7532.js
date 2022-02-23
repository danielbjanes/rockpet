import { V as j, O as H, M as O, S as W, a as z, C as A, D, c as F, T as p, b as G, d as N, W as Y, P as _, e as E, f as V, A as B, g as I } from "./vendor.f596dd62.js";
import Z from "https://cdn.jsdelivr.net/npm/lil-gui@0.16/+esm";
const q = function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
    new MutationObserver(n => {
        for (const t of n)
            if (t.type === "childList")
                for (const s of t.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && i(s)
    }).observe(document, { childList: !0, subtree: !0 });

    function o(n) { const t = {}; return n.integrity && (t.integrity = n.integrity), n.referrerpolicy && (t.referrerPolicy = n.referrerpolicy), n.crossorigin === "use-credentials" ? t.credentials = "include" : n.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t }

    function i(n) {
        if (n.ep) return;
        n.ep = !0;
        const t = o(n);
        fetch(n.href, t)
    }
};
q();

function K(r, e, o) {
    var i = [];
    for (let f = 0; f < o; f++) {
        const d = -e / 2 + Math.round(Math.random() * e),
            h = -e / 2 + Math.round(Math.random() * e),
            P = -e / 2 + Math.round(Math.random() * e);
        i.push(new j(d, h, P))
    }
    new H;
    var n = new O({ color: 16711680, transparent: !1 });
    i.forEach(function(f) {
        var d = new W(1),
            h = new z(d, n);
        h.position.copy(f)
    });
    var t = new A(i),
        s = T(t, r);
    return s
}
const T = (r, e) => { const o = U(e); return o.side = D, F(r, [o]) },
    U = r => (new p().load("rock_texture.jpg"), new G({ color: r }));
class X {
    constructor(e) {
        var o = e,
            i = 5,
            n = 5,
            t = .5;
        document.addEventListener("keydown", s, !1);

        function s(f) {
            var d = f.which;
            d == 87 ? (o.position.y += n, o.rotation.x -= t) : d == 83 ? (o.position.y -= n, o.rotation.x += t) : d == 65 ? (o.position.x -= i, o.rotation.y -= t) : d == 68 ? (o.position.x += i, o.rotation.y += t) : d == 32 && o.position.set(0, 0, 0)
        }
    }
}
var u, a, m, c, l;
const g = 20,
    w = "#424242";
var k = 25;

function J() { c = new N }

function Q() { l = new Y({ antialias: !0 }), l.shadowMap.enabled = !0, l.shadowMap.type = _, l.setSize(window.innerWidth, window.innerHeight), document.body.appendChild(l.domElement) }

function M() { m = new E(45, window.innerWidth / window.innerHeight, 1, 1e4), m.position.set(0, 0, 100) }

function y() { a = K(w, g, k), c.add(a) }

function b(r) { new p().load(r, function(o) { c.background = o }) }

function S() {
    const r = new V(16777215, 2, 0, 15, 1, 1);
    r.position.set(0, 100, 100), c.add(r);
    const e = new B(16777215, .6);
    c.add(e)
}

function x() { u = new I(m, l.domElement, a), u.setDistance(50, 150), u.setZoomSpeed(10), u.enableZoom(), u.setRotationSpeed(.1), u.enableVerticalRotation(), u.enableHorizontalRotation() }

function R() { m.aspect = window.innerWidth / window.innerHeight, m.updateProjectionMatrix(), l.setSize(window.innerWidth, window.innerHeight) }

function $() { a && (a.rotation.x += .001, a.rotation.y += .001, a.rotation.z += .001) }

function ee() {
    const r = new Z({ width: 300 }),
        e = { "Rock Name": "Rocky the Rock", "Rock Weight": g, "Feed Rock": function() { alert("Rock fed"), e.Hunger += 10, e.Mood = v(e.Stamina, e.Hunger) }, "Walk Your Rock": function() { new X(a), e.Stamina -= 10, e.Mood = v(e.Stamina, e.Hunger) }, Background: "default_background.jpg", Hunger: 50, Stamina: 50, Mood: "HAPPY", Color: w },
        o = r.addFolder("Rock Vitals"),
        i = r.addFolder("Rock Actions"),
        n = r.addFolder("Rock Customizations");
    o.add(e, "Rock Weight").onChange(t => { k = t, c.clear(), y(), S(), M(), x() }), o.add(e, "Rock Name"), i.add(e, "Feed Rock").on, i.add(e, "Walk Your Rock"), n.add(e, "Background", ["default_background.jpg", "nature_background.jpg", "desert.jpg", "snowy_background.jpg"]).onChange(t => { b(t) }), n.addColor(e, "Color", 255).onChange(t => {
        if (a)
            for (const s of a.children) s.material.color.set(t)
    }), o.add(e, "Hunger", 0, 100, 10).listen().disable(), o.add(e, "Stamina", 0, 100, 10).listen().disable(), o.add(e, "Mood").listen().disable()
}

function v(r, e) { return (r + e) / 2 >= 50 ? "HAPPY" : "SAD" }

function C() { window.onload = L, window.onresize = R, requestAnimationFrame(C), l.render(c, m), $() }

function L() { Q(), J(), S(), y(), M(), x(), new p().load("default_background.jpg", function(e) { c.background = e }), b(), window.onresize = R }
L();
ee();
C();