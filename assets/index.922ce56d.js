import { V as K, O as ye, M as Q, S as $, a as T, C as Me, D as xe, c as be, T as P, b as ee, F as ve, d as ke, E as Re, L as Se, e as Le, f as ze, W as je, P as De, g as Ye, h as Pe, i as Ae, A as Ce } from "./vendor.189eb542.js";
import Oe from "https://cdn.jsdelivr.net/npm/lil-gui@0.16/+esm";
const He = function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const c of i)
            if (c.type === "childList")
                for (const l of c.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }).observe(document, { childList: !0, subtree: !0 });

    function u(i) { const c = {}; return i.integrity && (c.integrity = i.integrity), i.referrerpolicy && (c.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? c.credentials = "include" : i.crossorigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const c = u(i);
        fetch(i.href, c)
    }
};
He();

function Xe(o, e, u) {
    this.setObjectToMove = function(t) { i = t }, this.getObjectToMove = function() { return i }, this.setZoomSpeed = function(t) { d = t }, this.setDistance = function(t, n) { l = t, c = n }, this.setRotationSpeed = function(t) { g = t }, this.setRotationSpeedTouchDevices = function(t) { p = t }, this.enableVerticalRotation = function() { z = !0 }, this.disableVerticalRotation = function() { z = !1 }, this.enableHorizontalRotation = function() { j = !0 }, this.disableHorizontalRotation = function() { j = !1 }, this.setMaxVerticalRotationAngle = function(t, n) { r.x.from = t, r.x.to = n, r.x.enabled = !0 }, this.setMaxHorizontalRotationAngle = function(t, n) { r.y.from = t, r.y.to = n, r.y.enabled = !0 }, this.disableMaxHorizontalAngleRotation = function() { r.y.enabled = !1 }, this.disableMaxVerticalAngleRotation = function() { r.x.enabled = !1 }, this.disableZoom = function() { D = !1 }, this.enableZoom = function() { D = !0 }, this.isUserInteractionActive = function() { return b }, e = e !== void 0 ? e : document;
    const r = { x: { enabled: !1, from: Math.PI / 8, to: Math.PI / 8 }, y: { enabled: !1, from: Math.PI / 4, to: Math.PI / 4 } };
    let i = u,
        c = 15,
        l = 6,
        d = .5,
        g = .05,
        p = .05,
        b = !1,
        z = !1,
        j = !0,
        D = !0,
        w = { x: 0, y: 0 },
        f = { X: null, Y: null },
        v = [];

    function F() { o.position.z -= d }

    function E() { o.position.z += d }

    function G(t, n) {
        if (n.length > 1) { for (let a = 0; a < n.length; a++) G(t, n[a]); return }
        n.rotation.x += Math.sign(t.y) * g
    }

    function V(t, n) {
        if (n.length > 1) { for (let a = 0; a < n.length; a++) V(t, n[a]); return }
        n.rotation.x += Math.sign(t.y) * p
    }

    function B(t, n) {
        if (n.length > 1) { for (let a = 0; a < n.length; a++) B(t, n[a]); return }
        n.rotation.y += Math.sign(t.x) * g
    }

    function Z(t, n) {
        if (n.length > 1) { for (let a = 0; a < n.length; a++) Z(t, n[a]); return }
        n.rotation.y += Math.sign(t.x) * p
    }

    function Y(t, n) {
        if (r[n].enabled) {
            if (i.length > 1) {
                let a = !0;
                for (let X = 0; X < i.length; X++) {
                    if (!a) return !1;
                    r[n].enabled && (a = U(i[X], t, n))
                }
                return a
            }
            return U(i, t, n)
        }
        return !0
    }

    function U(t, n, a) { return r[a].from * -1 < t.rotation[a] + n && t.rotation[a] + n < r[a].to }

    function q() { w = { x: 0, y: 0 } }

    function de(t) { b = !0 }

    function he(t) {
        if (b) {
            const n = { x: t.offsetX - w.x, y: t.offsetY - w.y };
            if (w = { x: t.offsetX, y: t.offsetY }, j && n.x != 0) {
                if (!Y(Math.sign(n.x) * g, "y")) return;
                B(n, i)
            }
            if (z && n.y != 0) {
                if (!Y(Math.sign(n.y) * g, "x")) return;
                G(n, i)
            }
        }
    }

    function J() { b = !1, q() }

    function ge(t) {
        if (!D) return;
        const n = t.wheelDelta ? t.wheelDelta : t.deltaY * -1;
        n > 0 && o.position.z > l ? F() : n < 0 && o.position.z < c && E()
    }

    function pe(t) { t.preventDefault(), t.touches.length === 2 ? (f.X = Math.abs(t.touches[0].clientX - t.touches[1].clientX), f.Y = Math.abs(t.touches[0].clientY - t.touches[1].clientY), v = new Array(2)) : w = { x: t.touches[0].pageX, y: t.touches[0].pageY } }

    function me(t) { f.X = null, f.Y = null, v.length > 0 ? v.pop() : v = [], t.preventDefault(), q() }

    function we(t) {
        if (t.preventDefault(), t.touches.length === 2 && D) {
            v = new Array(2);
            const n = Math.abs(t.touches[0].clientX - t.touches[1].clientX),
                a = Math.abs(t.touches[0].clientY - t.touches[1].clientY);
            f && f.X > 0 && f.Y > 0 && (n > f.X && a > f.Y && o.position.z > l ? F() : n < f.X && o.position.z < c && a < f.Y && E()), f.X = n, f.Y = a
        } else if (v.length === 0) {
            f.X = null, f.Y = null;
            const n = { x: t.touches[0].pageX - w.x, y: t.touches[0].pageY - w.y };
            if (w = { x: t.touches[0].pageX, y: t.touches[0].pageY }, j && n.x != 0) {
                if (!Y(Math.sign(n.x) * p, "y")) return;
                Z(n, i)
            }
            if (z && n.y != 0) {
                if (!Y(Math.sign(n.y) * p, "x")) return;
                V(n, i)
            }
        }
    }
    e.addEventListener("mousedown", de, !1), e.addEventListener("mousemove", he, !1), e.addEventListener("mouseup", J, !1), e.addEventListener("mouseout", J, !1), e.addEventListener("wheel", ge, !1), e.addEventListener("touchstart", pe, !1), e.addEventListener("touchmove", we, !1), e.addEventListener("touchend", me, !1)
}

function te(o, e, u) {
    var r = [];
    for (let d = 0; d < u; d++) {
        const g = -e / 2 + Math.round(Math.random() * e),
            p = -e / 2 + Math.round(Math.random() * e),
            b = -e / 2 + Math.round(Math.random() * e);
        r.push(new K(g, p, b))
    }
    new ye;
    var i = new Q({ color: 16711680, transparent: !1 });
    r.forEach(function(d) {
        var g = new $(1),
            p = new T(g, i);
        p.position.copy(d)
    });
    var c = new Me(r),
        l = Te(c, o);
    return l
}
const Te = (o, e) => { const u = We(e); return u.side = xe, be(o, [u]) },
    We = o => (new P().load("rock_texture.jpg"), new ee({ color: o }));

function k(o, e) { localStorage.setItem(o, JSON.stringify(e)) }

function R(o) { var e = JSON.parse(localStorage.getItem(o)); return e }
const ne = 20,
    A = "#424242";
var M, s, S, m, y, h, x;
x = R("font") ? R("font") : "Retronoid_Regular.json";
var L = R("polygons") | 25,
    C = R("name") ? R("name") : "Rocky";

function Ie() { m = new ze }

function _e() { y = new je({ antialias: !0 }), y.shadowMap.enabled = !0, y.shadowMap.type = De, y.setSize(window.innerWidth, window.innerHeight), document.body.appendChild(y.domElement) }

function oe() { S = new Ye(45, window.innerWidth / window.innerHeight, 1, 1e4), S.position.set(0, 0, 100) }

function ie() {
    const o = new Pe,
        e = R("mesh");
    e && (s = o.parse(e)), s || (s = te(A, ne, L), k("mesh", s)), m.add(s)
}

function W(o) { new P().load(o, function(u) { m.background = u }) }

function re() {
    const o = new Ae(16777215, 2, 0, 15, 1, 1);
    o.position.set(0, 100, 100), m.add(o);
    const e = new Ce(16777215, .6);
    m.add(e)
}

function ae() { M = new Xe(S, y.domElement, s), M.setDistance(50, 150), M.setZoomSpeed(10), M.enableZoom(), M.setRotationSpeed(.1), M.enableVerticalRotation(), M.enableHorizontalRotation() }

function se() { S.aspect = window.innerWidth / window.innerHeight, S.updateProjectionMatrix(), y.setSize(window.innerWidth, window.innerHeight) }

function Ne() { s && (s.rotation.x += .001, s.rotation.y += .001, s.rotation.z += .001) }

function Fe() { h && (h.rotation.y = Math.sin(Date.now() * .001) * Math.PI * .01, h.rotation.x = Math.tan(Date.now() * -.001) * -Math.PI * -.01, h.rotation.x = Math.cos(Date.now() * -.001) * -Math.PI * -.01) }

function I() { m.clear(), ie(), re(), oe(), ae() }
const Ee = ["default_background.jpg", "nature_background.jpg", "desert.jpg", "snowy_background.jpg"];

function Ge() {
    const o = new Oe({ width: 200 }),
        e = { "Rock Name": C, "Rock Weight": L, "Feed Rock": function() { e.Hunger < 95 ? (new Ve, e.Hunger += 10, e.Stamina += 5, e.Mood = ce(e.Stamina, e.Hunger)) : alert("Rock is full") }, "Walk Your Rock": function() { e.Stamina > 5 ? (new Be, e.Stamina -= 10, e.Hunger -= 5, e.Mood = ce(e.Stamina, e.Hunger), W(Ee[_(0, 3)])) : alert("Rock is tired") }, "Stop Walking Your Rock": function() { new Ze }, Background: "default_background.jpg", Hunger: 50, Stamina: 50, Mood: "HAPPY", Color: A },
        u = o.addFolder("Rock Name"),
        r = o.addFolder("Rock Vitals"),
        i = o.addFolder("Rock Actions"),
        c = o.addFolder("Rock Customizations");
    u.add(e, "Rock Name").onChange(l => { C = l, k("name", C), I(), O(x) }), u.add(e, "Font", ["NM_Regular.json", "Retronoid_Regular.json", "Rubik_Bold.json"]).onChange(l => { x = l, k("font", x), I(), O(x) }), r.add(e, "Rock Weight").onChange(l => { L = l, s = te(A, ne, L), k("mesh", s), k("polygons", L), I(), O(x) }), i.add(e, "Feed Rock").on, i.add(e, "Walk Your Rock"), i.add(e, "Stop Walking Your Rock"), c.add(e, "Background", ["default_background.jpg", "nature_background.jpg", "desert.jpg", "snowy_background.jpg"]).onChange(l => { W(l) }), c.addColor(e, "Color", 255).onChange(l => {
        if (s) {
            for (const d of s.children) d.material.color.set(l);
            k("mesh", s)
        }
    }), r.add(e, "Hunger", 0, 100, 10).listen().disable(), r.add(e, "Stamina", 0, 100, 10).listen().disable(), r.add(e, "Mood").listen().disable()
}

function ce(o, e) { return (o + e) / 2 >= 50 ? "HAPPY" : "SAD" }

function O(o) {
    new ve().load(o, function(u) {
        const r = new P().load("blue.jpg"),
            i = new ke(C, { font: u, size: 5, height: 6, curveSegments: 12 });
        i.computeBoundingBox();
        var c = new K;
        i.boundingBox.getCenter(c);
        const l = new Q({ map: r, alphaMap: r, reflectivity: 4, polygonOffset: !0, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: !0, opacity: 7 });
        h = new T(i, l), h.position.x = 0 - c.x, h.position.y = 20, h.updateMatrixWorld(), h.localToWorld(c);
        var d = new Re(h.geometry),
            g = new Se({ color: 2236962 }),
            p = new Le(d, g);
        h.add(p), m.add(h)
    })
}

function Ve() {
    const o = new $(1, 100, 60),
        e = new ee({ color: A, metalness: 0, roughness: 0 }),
        u = new T(o, e);
    u.position.x = _(-70, 70), u.position.y = _(-40, 40), m.add(u), setTimeout(function() { s.position.x = u.position.x, s.position.y = u.position.y, m.remove(u) }, 1e3)
}

function _(o, e) { return Math.floor(Math.random() * (e - o + 1) + o) }
var ue = 5,
    le = 5,
    H = .5;

function Be() { document.addEventListener("keydown", N, !1) }

function Ze() { document.removeEventListener("keydown", N, !1) }

function N(o) {
    var e = o.which;
    e == 87 ? (s.position.y += le, s.rotation.x -= H) : e == 83 ? (s.position.y -= le, s.rotation.x += H) : e == 65 ? (s.position.x -= ue, s.rotation.y -= H) : e == 68 ? (s.position.x += ue, s.rotation.y += H) : e == 32 && (s.position.set(0, 0, 0), document.removeEventListener("keydown", N, !1))
}

function fe() { window.onresize = se, requestAnimationFrame(fe), y.render(m, S), Ne(), Fe() }

function Ue() { _e(), Ie(), re(), ie(), oe(), ae(), O(x), new P().load("default_background.jpg", function(e) { m.background = e }), W(), window.onresize = se }
Ue();
Ge();
fe();