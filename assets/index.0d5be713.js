import { W as p, P as D, S as m, a as g, b as v, c as M, d as H, T as h, V as N, O as B, M as E, e as _, f as I, C as T, D as q, g as A, h as U, i as V, j as Y } from "./vendor.c5adbbf6.js";
import K from "https://cdn.jsdelivr.net/npm/lil-gui@0.16/+esm";
const Z = function() { const e = document.createElement("link").relList; if (e && e.supports && e.supports("modulepreload")) return; for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
    new MutationObserver(n => { for (const r of n)
            if (r.type === "childList")
                for (const l of r.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && s(l) }).observe(document, { childList: !0, subtree: !0 });

    function o(n) { const r = {}; return n.integrity && (r.integrity = n.integrity), n.referrerpolicy && (r.referrerPolicy = n.referrerpolicy), n.crossorigin === "use-credentials" ? r.credentials = "include" : n.crossorigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r }

    function s(n) { if (n.ep) return;
        n.ep = !0; const r = o(n);
        fetch(n.href, r) } };
Z();
var i = new p;
i.shadowMap.enabled = !0;
i.shadowMap.type = D;
var k = 15,
    c, f = new m(16777215, 2, 0, 15, 1, 1);
f.position.set(222, 222, 222);
let b = new g(f, 5);
f.add(b);
var w = new m(16777215, 1, 0, 15, 1, 1);
w.position.set(-400, -600, 100);
let y = new g(w, 16711680);
w.add(y);
var u = new v(75, window.innerWidth / window.innerHeight, .1, 1e3),
    a = new M;

function J() { i = new p({ antialias: !0 }), i.setSize(window.innerWidth, window.innerHeight), document.body.appendChild(i.domElement) }

function Q() { u = new v(45, window.innerWidth / window.innerHeight, 1, 1e4), u.position.set(300, 100, 600) }

function X() { a = new M }

function x(t) { new h().load(t, function(o) { a.background = o }) }

function $() { R() }

function R() { for (var t = [], e = 0; e < k; e++) { var o = -150 + Math.round(Math.random() * 300),
            s = -150 + Math.round(Math.random() * 300),
            n = -150 + Math.round(Math.random() * 300);
        t.push(new N(o, s, n)) } var r = new B,
        l = new E({ color: 16711680, transparent: !1 });
    t.forEach(function(G) { var O = new _(1),
            z = new I(O, l);
        z.position.copy(G) }), a.add(r); var P = new T(t),
        F = te(P);
    c = F }

function ee() { const e = new h().load("dist/rock_texture.jpg"); return new Y({ map: e }) }

function te(t) { console.log(t); var e = ee();
    e.side = q; var o = new A;
    o.wireframe = !0; var s = U(t, [e, o]); return s }
var d;

function ne() { d = new V(u, i.domElement), d.enableDamping = !0, d.enableZoom = !0, d.autoRotate = !0, d.minDistance = 200, d.maxDistance = 1600, d.enablePan = !0 }

function S() { u.aspect = window.innerWidth / window.innerHeight, u.updateProjectionMatrix(), i.setSize(window.innerWidth, window.innerHeight) }

function oe() { c && (c.rotation.x += .001, c.rotation.y += .001, c.rotation.z += .001, a.add(c)) }

function re() { const t = new K({ width: 500 }),
        e = { "Rock Name": "Rocky the Rock", "Rock Weight": 15, "Feed Rock": function() { alert("Rock fed") }, "Walk Your Rock": function() { alert("Rock walked") }, Background: "Background 1" };
    t.add(e, "Rock Weight").onChange(o => { k = o, a.clear(), R(), L() }), t.add(e, "Rock Name"), t.add(e, "Feed Rock"), t.add(e, "Walk Your Rock"), t.add(e, "Texture", ["dist/nature_background.jpg", "dist/desert.jpg", "dist/snowy_background.jpg"]).onChange(o => { x(o) }) }

function L() { a.add(f), a.add(b), a.add(w), a.add(y) }

function W() { requestAnimationFrame(W), window.onload = j, window.onresize = S, oe(), i.render(a, u), C.update() }

function j() { J(), X(), L(), $(), Q(), ne(), new h().load("dist/default_background.jpg", function(e) { a.background = e }), x(), window.onresize = S }
const C = H();
document.body.appendChild(C.dom);
re();
W();
j();