import { W as g, P as D, S as v, a as M, b as k, c as b, d as H, T as w, V as _, O as N, M as B, e as E, f as I, C as q, D as T, g as U, h as V, i as Y, j as K } from "./vendor.c5adbbf6.js";
import Z from "https://cdn.jsdelivr.net/npm/lil-gui@0.16/+esm";
const J = function() { const e = document.createElement("link").relList; if (e && e.supports && e.supports("modulepreload")) return; for (const n of document.querySelectorAll('link[rel="modulepreload"]')) d(n);
    new MutationObserver(n => { for (const r of n)
            if (r.type === "childList")
                for (const l of r.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && d(l) }).observe(document, { childList: !0, subtree: !0 });

    function o(n) { const r = {}; return n.integrity && (r.integrity = n.integrity), n.referrerpolicy && (r.referrerPolicy = n.referrerpolicy), n.crossorigin === "use-credentials" ? r.credentials = "include" : n.crossorigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r }

    function d(n) { if (n.ep) return;
        n.ep = !0; const r = o(n);
        fetch(n.href, r) } };
J();
var i = new g;
i.shadowMap.enabled = !0;
i.shadowMap.type = D;
var y = 15,
    c, f = new v(16777215, 2, 0, 15, 1, 1);
f.position.set(222, 222, 222);
let x = new M(f, 5);
f.add(x);
var h = new v(16777215, 1, 0, 15, 1, 1);
h.position.set(-400, -600, 100);
let C = new M(h, 16711680);
h.add(C);
var u = new k(75, window.innerWidth / window.innerHeight, .1, 1e3),
    a = new b;

function Q() { i = new g({ antialias: !0 }), i.setSize(window.innerWidth, window.innerHeight), document.body.appendChild(i.domElement) }

function X() { u = new k(45, window.innerWidth / window.innerHeight, 1, 1e4), u.position.set(300, 100, 600) }

function $() { a = new b }

function R(t) { new w().load(t, function(o) { a.background = o }) }

function ee() { p("#AA00FF") }

function p(t) { for (var e = [], o = 0; o < y; o++) { var d = -150 + Math.round(Math.random() * 300),
            n = -150 + Math.round(Math.random() * 300),
            r = -150 + Math.round(Math.random() * 300);
        e.push(new _(d, n, r)) } var l = new N,
        W = new B({ color: 16711680, transparent: !1 });
    e.forEach(function(O) { var z = new E(1),
            A = new I(z, W);
        A.position.copy(O) }), a.add(l); var P = new q(e),
        G = te(P, t);
    c = G }

function ne(t) { return new w().load("src/textures/rock_texture.jpg"), new K({ color: t }) }

function te(t, e) { console.log(t); var o = ne(e);
    o.side = T; var d = new U;
    d.wireframe = !0; var n = V(t, [o, d]); return n }
var s;

function oe() { s = new Y(u, i.domElement), s.enableDamping = !0, s.enableZoom = !0, s.autoRotate = !0, s.minDistance = 200, s.maxDistance = 1600, s.enablePan = !0 }

function S() { u.aspect = window.innerWidth / window.innerHeight, u.updateProjectionMatrix(), i.setSize(window.innerWidth, window.innerHeight) }

function re() { c && (c.rotation.x += .001, c.rotation.y += .001, c.rotation.z += .001, a.add(c)) }

function ae() { const t = new Z({ width: 500 }),
        e = { "Rock Name": "Rocky the Rock", "Rock Weight": 15, "Feed Rock": function() { alert("Rock fed") }, "Walk Your Rock": function() { alert("Rock walked") }, Background: "src/textures/default_background.jpg", Color: "#AA00FF" };
    t.add(e, "Rock Weight").onChange(o => { y = o, a.clear(), p(e.Color), m() }), t.add(e, "Rock Name"), t.add(e, "Feed Rock"), t.add(e, "Walk Your Rock"), t.add(e, "Background", ["src/textures/default_background.jpg", "src/textures/nature_background.jpg", "src/textures/desert.jpg", "src/textures/snowy_background.jpg"]).onChange(o => { R(o) }), t.addColor(e, "Color", 255).onChange(o => { a.clear(), p(o), m() }) }

function m() { a.add(f), a.add(x), a.add(h), a.add(C) }

function j() { requestAnimationFrame(j), window.onload = L, window.onresize = S, re(), i.render(a, u), F.update() }

function L() { Q(), $(), m(), ee(), X(), oe(), new w().load("src/textures/default_background.jpg", function(e) { a.background = e }), R(), window.onresize = S }
const F = H();
document.body.appendChild(F.dom);
ae();
j();
L();