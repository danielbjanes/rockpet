/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Zr = "137",
    Cn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
    Rn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
    dc = 0,
    Mo = 1,
    fc = 2,
    bo = 1,
    pc = 2,
    _i = 3,
    vi = 0,
    it = 1,
    Ln = 2,
    wo = 1,
    Kt = 0,
    yi = 1,
    So = 2,
    Eo = 3,
    To = 4,
    mc = 5,
    Pn = 100,
    gc = 101,
    xc = 102,
    Ao = 103,
    Co = 104,
    _c = 200,
    vc = 201,
    yc = 202,
    Mc = 203,
    Ro = 204,
    Lo = 205,
    bc = 206,
    wc = 207,
    Sc = 208,
    Ec = 209,
    Tc = 210,
    Ac = 0,
    Cc = 1,
    Rc = 2,
    Jr = 3,
    Lc = 4,
    Pc = 5,
    Dc = 6,
    Ic = 7,
    Yi = 0,
    Fc = 1,
    Nc = 2,
    Qt = 0,
    Bc = 1,
    zc = 2,
    Oc = 3,
    Uc = 4,
    Hc = 5,
    Po = 300,
    Mi = 301,
    bi = 302,
    $r = 303,
    Kr = 304,
    Zi = 306,
    Qr = 307,
    es = 1e3,
    bt = 1001,
    ts = 1002,
    rt = 1003,
    Do = 1004,
    Io = 1005,
    ut = 1006,
    Vc = 1007,
    Ji = 1008,
    en = 1009,
    Gc = 1010,
    kc = 1011,
    wi = 1012,
    Wc = 1013,
    $i = 1014,
    vn = 1015,
    Dn = 1016,
    qc = 1017,
    Xc = 1018,
    In = 1020,
    jc = 1021,
    Yc = 1022,
    gt = 1023,
    Zc = 1024,
    Jc = 1025,
    yn = 1026,
    Fn = 1027,
    $c = 1028,
    Kc = 1029,
    Qc = 1030,
    eh = 1031,
    th = 1033,
    ns = 33776,
    is = 33777,
    rs = 33778,
    ss = 33779,
    Fo = 35840,
    No = 35841,
    Bo = 35842,
    zo = 35843,
    nh = 36196,
    Oo = 37492,
    Uo = 37496,
    Ho = 37808,
    Vo = 37809,
    Go = 37810,
    ko = 37811,
    Wo = 37812,
    qo = 37813,
    Xo = 37814,
    jo = 37815,
    Yo = 37816,
    Zo = 37817,
    Jo = 37818,
    $o = 37819,
    Ko = 37820,
    Qo = 37821,
    ea = 36492,
    ih = 2200,
    rh = 2201,
    sh = 2202,
    Ki = 2300,
    Qi = 2301,
    os = 2302,
    Nn = 2400,
    Bn = 2401,
    er = 2402,
    as = 2500,
    ta = 2501,
    oh = 0,
    tn = 3e3,
    je = 3001,
    ah = 3200,
    lh = 3201,
    zn = 0,
    ch = 1,
    ls = 7680,
    hh = 519,
    Si = 35044,
    tr = 35048,
    na = "300 es",
    cs = 1035;
class nn { addEventListener(e, t) { this._listeners === void 0 && (this._listeners = {}); const n = this._listeners;
        n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t) }
    hasEventListener(e, t) { if (this._listeners === void 0) return !1; const n = this._listeners; return n[e] !== void 0 && n[e].indexOf(t) !== -1 }
    removeEventListener(e, t) { if (this._listeners === void 0) return; const i = this._listeners[e]; if (i !== void 0) { const r = i.indexOf(t);
            r !== -1 && i.splice(r, 1) } }
    dispatchEvent(e) { if (this._listeners === void 0) return; const n = this._listeners[e.type]; if (n !== void 0) { e.target = this; const i = n.slice(0); for (let r = 0, o = i.length; r < o; r++) i[r].call(this, e);
            e.target = null } } }
const lt = [];
for (let s = 0; s < 256; s++) lt[s] = (s < 16 ? "0" : "") + s.toString(16);
const hs = Math.PI / 180,
    us = 180 / Math.PI;

function Ot() { const s = Math.random() * 4294967295 | 0,
        e = Math.random() * 4294967295 | 0,
        t = Math.random() * 4294967295 | 0,
        n = Math.random() * 4294967295 | 0; return (lt[s & 255] + lt[s >> 8 & 255] + lt[s >> 16 & 255] + lt[s >> 24 & 255] + "-" + lt[e & 255] + lt[e >> 8 & 255] + "-" + lt[e >> 16 & 15 | 64] + lt[e >> 24 & 255] + "-" + lt[t & 63 | 128] + lt[t >> 8 & 255] + "-" + lt[t >> 16 & 255] + lt[t >> 24 & 255] + lt[n & 255] + lt[n >> 8 & 255] + lt[n >> 16 & 255] + lt[n >> 24 & 255]).toUpperCase() }

function xt(s, e, t) { return Math.max(e, Math.min(t, s)) }

function uh(s, e) { return (s % e + e) % e }

function ds(s, e, t) { return (1 - t) * s + t * e }

function ia(s) { return (s & s - 1) == 0 && s !== 0 }

function dh(s) { return Math.pow(2, Math.floor(Math.log(s) / Math.LN2)) }
class J { constructor(e = 0, t = 0) { this.x = e, this.y = t }
    get width() { return this.x }
    set width(e) { this.x = e }
    get height() { return this.y }
    set height(e) { this.y = e }
    set(e, t) { return this.x = e, this.y = t, this }
    setScalar(e) { return this.x = e, this.y = e, this }
    setX(e) { return this.x = e, this }
    setY(e) { return this.y = e, this }
    setComponent(e, t) { switch (e) {
            case 0:
                this.x = t; break;
            case 1:
                this.y = t; break;
            default:
                throw new Error("index is out of range: " + e) } return this }
    getComponent(e) { switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + e) } }
    clone() { return new this.constructor(this.x, this.y) }
    copy(e) { return this.x = e.x, this.y = e.y, this }
    add(e, t) { return t !== void 0 ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this) }
    addScalar(e) { return this.x += e, this.y += e, this }
    addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this }
    addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this }
    sub(e, t) { return t !== void 0 ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this) }
    subScalar(e) { return this.x -= e, this.y -= e, this }
    subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this }
    multiply(e) { return this.x *= e.x, this.y *= e.y, this }
    multiplyScalar(e) { return this.x *= e, this.y *= e, this }
    divide(e) { return this.x /= e.x, this.y /= e.y, this }
    divideScalar(e) { return this.multiplyScalar(1 / e) }
    applyMatrix3(e) { const t = this.x,
            n = this.y,
            i = e.elements; return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this }
    min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this }
    max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this }
    clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this }
    clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this }
    clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) }
    floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this }
    ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this }
    round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this }
    roundToZero() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this }
    negate() { return this.x = -this.x, this.y = -this.y, this }
    dot(e) { return this.x * e.x + this.y * e.y }
    cross(e) { return this.x * e.y - this.y * e.x }
    lengthSq() { return this.x * this.x + this.y * this.y }
    length() { return Math.sqrt(this.x * this.x + this.y * this.y) }
    manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) }
    normalize() { return this.divideScalar(this.length() || 1) }
    angle() { return Math.atan2(-this.y, -this.x) + Math.PI }
    distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) }
    distanceToSquared(e) { const t = this.x - e.x,
            n = this.y - e.y; return t * t + n * n }
    manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) }
    setLength(e) { return this.normalize().multiplyScalar(e) }
    lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this }
    lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this }
    equals(e) { return e.x === this.x && e.y === this.y }
    fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this }
    toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e }
    fromBufferAttribute(e, t, n) { return n !== void 0 && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this }
    rotateAround(e, t) { const n = Math.cos(t),
            i = Math.sin(t),
            r = this.x - e.x,
            o = this.y - e.y; return this.x = r * n - o * i + e.x, this.y = r * i + o * n + e.y, this }
    random() { return this.x = Math.random(), this.y = Math.random(), this } * [Symbol.iterator]() { yield this.x, yield this.y } }
J.prototype.isVector2 = !0;
class ct { constructor() { this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.") }
    set(e, t, n, i, r, o, a, l, c) { const h = this.elements; return h[0] = e, h[1] = i, h[2] = a, h[3] = t, h[4] = r, h[5] = l, h[6] = n, h[7] = o, h[8] = c, this }
    identity() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this }
    copy(e) { const t = this.elements,
            n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this }
    extractBasis(e, t, n) { return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this }
    setFromMatrix4(e) { const t = e.elements; return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this }
    multiply(e) { return this.multiplyMatrices(this, e) }
    premultiply(e) { return this.multiplyMatrices(e, this) }
    multiplyMatrices(e, t) { const n = e.elements,
            i = t.elements,
            r = this.elements,
            o = n[0],
            a = n[3],
            l = n[6],
            c = n[1],
            h = n[4],
            u = n[7],
            d = n[2],
            f = n[5],
            g = n[8],
            x = i[0],
            v = i[3],
            m = i[6],
            p = i[1],
            T = i[4],
            y = i[7],
            w = i[2],
            R = i[5],
            P = i[8]; return r[0] = o * x + a * p + l * w, r[3] = o * v + a * T + l * R, r[6] = o * m + a * y + l * P, r[1] = c * x + h * p + u * w, r[4] = c * v + h * T + u * R, r[7] = c * m + h * y + u * P, r[2] = d * x + f * p + g * w, r[5] = d * v + f * T + g * R, r[8] = d * m + f * y + g * P, this }
    multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this }
    determinant() { const e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            r = e[3],
            o = e[4],
            a = e[5],
            l = e[6],
            c = e[7],
            h = e[8]; return t * o * h - t * a * c - n * r * h + n * a * l + i * r * c - i * o * l }
    invert() { const e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            r = e[3],
            o = e[4],
            a = e[5],
            l = e[6],
            c = e[7],
            h = e[8],
            u = h * o - a * c,
            d = a * l - h * r,
            f = c * r - o * l,
            g = t * u + n * d + i * f; if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); const x = 1 / g; return e[0] = u * x, e[1] = (i * c - h * n) * x, e[2] = (a * n - i * o) * x, e[3] = d * x, e[4] = (h * t - i * l) * x, e[5] = (i * r - a * t) * x, e[6] = f * x, e[7] = (n * l - c * t) * x, e[8] = (o * t - n * r) * x, this }
    transpose() { let e; const t = this.elements; return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this }
    getNormalMatrix(e) { return this.setFromMatrix4(e).invert().transpose() }
    transposeIntoArray(e) { const t = this.elements; return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this }
    setUvTransform(e, t, n, i, r, o, a) { const l = Math.cos(r),
            c = Math.sin(r); return this.set(n * l, n * c, -n * (l * o + c * a) + o + e, -i * c, i * l, -i * (-c * o + l * a) + a + t, 0, 0, 1), this }
    scale(e, t) { const n = this.elements; return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this }
    rotate(e) { const t = Math.cos(e),
            n = Math.sin(e),
            i = this.elements,
            r = i[0],
            o = i[3],
            a = i[6],
            l = i[1],
            c = i[4],
            h = i[7]; return i[0] = t * r + n * l, i[3] = t * o + n * c, i[6] = t * a + n * h, i[1] = -n * r + t * l, i[4] = -n * o + t * c, i[7] = -n * a + t * h, this }
    translate(e, t) { const n = this.elements; return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this }
    equals(e) { const t = this.elements,
            n = e.elements; for (let i = 0; i < 9; i++)
            if (t[i] !== n[i]) return !1;
        return !0 }
    fromArray(e, t = 0) { for (let n = 0; n < 9; n++) this.elements[n] = e[n + t]; return this }
    toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e }
    clone() { return new this.constructor().fromArray(this.elements) } }
ct.prototype.isMatrix3 = !0;

function ra(s) { for (let e = s.length - 1; e >= 0; --e)
        if (s[e] > 65535) return !0;
    return !1 }

function Ei(s) { return document.createElementNS("http://www.w3.org/1999/xhtml", s) }
const sa = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 },
    Rt = { h: 0, s: 0, l: 0 },
    nr = { h: 0, s: 0, l: 0 };

function fs(s, e, t) { return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s }

function On(s) { return s < .04045 ? s * .0773993808 : Math.pow(s * .9478672986 + .0521327014, 2.4) }

function ps(s) { return s < .0031308 ? s * 12.92 : 1.055 * Math.pow(s, .41666) - .055 }
class ve { constructor(e, t, n) { return t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n) }
    set(e) { return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this }
    setScalar(e) { return this.r = e, this.g = e, this.b = e, this }
    setHex(e) { return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, this }
    setRGB(e, t, n) { return this.r = e, this.g = t, this.b = n, this }
    setHSL(e, t, n) { if (e = uh(e, 1), t = xt(t, 0, 1), n = xt(n, 0, 1), t === 0) this.r = this.g = this.b = n;
        else { const i = n <= .5 ? n * (1 + t) : n + t - n * t,
                r = 2 * n - i;
            this.r = fs(r, i, e + 1 / 3), this.g = fs(r, i, e), this.b = fs(r, i, e - 1 / 3) } return this }
    setStyle(e) {
        function t(i) { i !== void 0 && parseFloat(i) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.") } let n; if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) { let i; const r = n[1],
                o = n[2]; switch (r) {
                case "rgb":
                case "rgba":
                    if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, t(i[4]), this; if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, t(i[4]), this; break;
                case "hsl":
                case "hsla":
                    if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) { const a = parseFloat(i[1]) / 360,
                            l = parseInt(i[2], 10) / 100,
                            c = parseInt(i[3], 10) / 100; return t(i[4]), this.setHSL(a, l, c) } break } } else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) { const i = n[1],
                r = i.length; if (r === 3) return this.r = parseInt(i.charAt(0) + i.charAt(0), 16) / 255, this.g = parseInt(i.charAt(1) + i.charAt(1), 16) / 255, this.b = parseInt(i.charAt(2) + i.charAt(2), 16) / 255, this; if (r === 6) return this.r = parseInt(i.charAt(0) + i.charAt(1), 16) / 255, this.g = parseInt(i.charAt(2) + i.charAt(3), 16) / 255, this.b = parseInt(i.charAt(4) + i.charAt(5), 16) / 255, this } return e && e.length > 0 ? this.setColorName(e) : this }
    setColorName(e) { const t = sa[e.toLowerCase()]; return t !== void 0 ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this }
    clone() { return new this.constructor(this.r, this.g, this.b) }
    copy(e) { return this.r = e.r, this.g = e.g, this.b = e.b, this }
    copySRGBToLinear(e) { return this.r = On(e.r), this.g = On(e.g), this.b = On(e.b), this }
    copyLinearToSRGB(e) { return this.r = ps(e.r), this.g = ps(e.g), this.b = ps(e.b), this }
    convertSRGBToLinear() { return this.copySRGBToLinear(this), this }
    convertLinearToSRGB() { return this.copyLinearToSRGB(this), this }
    getHex() { return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0 }
    getHexString() { return ("000000" + this.getHex().toString(16)).slice(-6) }
    getHSL(e) { const t = this.r,
            n = this.g,
            i = this.b,
            r = Math.max(t, n, i),
            o = Math.min(t, n, i); let a, l; const c = (o + r) / 2; if (o === r) a = 0, l = 0;
        else { const h = r - o; switch (l = c <= .5 ? h / (r + o) : h / (2 - r - o), r) {
                case t:
                    a = (n - i) / h + (n < i ? 6 : 0); break;
                case n:
                    a = (i - t) / h + 2; break;
                case i:
                    a = (t - n) / h + 4; break }
            a /= 6 } return e.h = a, e.s = l, e.l = c, e }
    getStyle() { return "rgb(" + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + ")" }
    offsetHSL(e, t, n) { return this.getHSL(Rt), Rt.h += e, Rt.s += t, Rt.l += n, this.setHSL(Rt.h, Rt.s, Rt.l), this }
    add(e) { return this.r += e.r, this.g += e.g, this.b += e.b, this }
    addColors(e, t) { return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this }
    addScalar(e) { return this.r += e, this.g += e, this.b += e, this }
    sub(e) { return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this }
    multiply(e) { return this.r *= e.r, this.g *= e.g, this.b *= e.b, this }
    multiplyScalar(e) { return this.r *= e, this.g *= e, this.b *= e, this }
    lerp(e, t) { return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this }
    lerpColors(e, t, n) { return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this }
    lerpHSL(e, t) { this.getHSL(Rt), e.getHSL(nr); const n = ds(Rt.h, nr.h, t),
            i = ds(Rt.s, nr.s, t),
            r = ds(Rt.l, nr.l, t); return this.setHSL(n, i, r), this }
    equals(e) { return e.r === this.r && e.g === this.g && e.b === this.b }
    fromArray(e, t = 0) { return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this }
    toArray(e = [], t = 0) { return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e }
    fromBufferAttribute(e, t) { return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), e.normalized === !0 && (this.r /= 255, this.g /= 255, this.b /= 255), this }
    toJSON() { return this.getHex() } }
ve.NAMES = sa;
ve.prototype.isColor = !0;
ve.prototype.r = 1;
ve.prototype.g = 1;
ve.prototype.b = 1;
let Un;
class Mn { static getDataURL(e) { if (/^data:/i.test(e.src) || typeof HTMLCanvasElement == "undefined") return e.src; let t; if (e instanceof HTMLCanvasElement) t = e;
        else { Un === void 0 && (Un = Ei("canvas")), Un.width = e.width, Un.height = e.height; const n = Un.getContext("2d");
            e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Un } return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png") }
    static sRGBToLinear(e) { if (typeof HTMLImageElement != "undefined" && e instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && e instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && e instanceof ImageBitmap) { const t = Ei("canvas");
            t.width = e.width, t.height = e.height; const n = t.getContext("2d");
            n.drawImage(e, 0, 0, e.width, e.height); const i = n.getImageData(0, 0, e.width, e.height),
                r = i.data; for (let o = 0; o < r.length; o++) r[o] = On(r[o] / 255) * 255; return n.putImageData(i, 0, 0), t } else if (e.data) { const t = e.data.slice(0); for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(On(t[n] / 255) * 255) : t[n] = On(t[n]); return { data: t, width: e.width, height: e.height } } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e } }
let fh = 0;
class ot extends nn { constructor(e = ot.DEFAULT_IMAGE, t = ot.DEFAULT_MAPPING, n = bt, i = bt, r = ut, o = Ji, a = gt, l = en, c = 1, h = tn) { super();
        Object.defineProperty(this, "id", { value: fh++ }), this.uuid = Ot(), this.name = "", this.image = e, this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new J(0, 0), this.repeat = new J(1, 1), this.center = new J(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ct, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1 }
    updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) }
    clone() { return new this.constructor().copy(this) }
    copy(e) { return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this }
    toJSON(e) { const t = e === void 0 || typeof e == "string"; if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid]; const n = { metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, mapping: this.mapping, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, type: this.type, encoding: this.encoding, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; if (this.image !== void 0) { const i = this.image; if (i.uuid === void 0 && (i.uuid = Ot()), !t && e.images[i.uuid] === void 0) { let r; if (Array.isArray(i)) { r = []; for (let o = 0, a = i.length; o < a; o++) i[o].isDataTexture ? r.push(ms(i[o].image)) : r.push(ms(i[o])) } else r = ms(i);
                e.images[i.uuid] = { uuid: i.uuid, url: r } }
            n.image = i.uuid } return JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n }
    dispose() { this.dispatchEvent({ type: "dispose" }) }
    transformUv(e) { if (this.mapping !== Po) return e; if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
            case es:
                e.x = e.x - Math.floor(e.x); break;
            case bt:
                e.x = e.x < 0 ? 0 : 1; break;
            case ts:
                Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x); break }
        if (e.y < 0 || e.y > 1) switch (this.wrapT) {
            case es:
                e.y = e.y - Math.floor(e.y); break;
            case bt:
                e.y = e.y < 0 ? 0 : 1; break;
            case ts:
                Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y); break }
        return this.flipY && (e.y = 1 - e.y), e }
    set needsUpdate(e) { e === !0 && this.version++ } }
ot.DEFAULT_IMAGE = void 0;
ot.DEFAULT_MAPPING = Po;
ot.prototype.isTexture = !0;

function ms(s) { return typeof HTMLImageElement != "undefined" && s instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && s instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && s instanceof ImageBitmap ? Mn.getDataURL(s) : s.data ? { data: Array.prototype.slice.call(s.data), width: s.width, height: s.height, type: s.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}) }
class We { constructor(e = 0, t = 0, n = 0, i = 1) { this.x = e, this.y = t, this.z = n, this.w = i }
    get width() { return this.z }
    set width(e) { this.z = e }
    get height() { return this.w }
    set height(e) { this.w = e }
    set(e, t, n, i) { return this.x = e, this.y = t, this.z = n, this.w = i, this }
    setScalar(e) { return this.x = e, this.y = e, this.z = e, this.w = e, this }
    setX(e) { return this.x = e, this }
    setY(e) { return this.y = e, this }
    setZ(e) { return this.z = e, this }
    setW(e) { return this.w = e, this }
    setComponent(e, t) { switch (e) {
            case 0:
                this.x = t; break;
            case 1:
                this.y = t; break;
            case 2:
                this.z = t; break;
            case 3:
                this.w = t; break;
            default:
                throw new Error("index is out of range: " + e) } return this }
    getComponent(e) { switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + e) } }
    clone() { return new this.constructor(this.x, this.y, this.z, this.w) }
    copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this }
    add(e, t) { return t !== void 0 ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this) }
    addScalar(e) { return this.x += e, this.y += e, this.z += e, this.w += e, this }
    addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this }
    addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this }
    sub(e, t) { return t !== void 0 ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this) }
    subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this }
    subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this }
    multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this }
    multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this }
    applyMatrix4(e) { const t = this.x,
            n = this.y,
            i = this.z,
            r = this.w,
            o = e.elements; return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * r, this }
    divideScalar(e) { return this.multiplyScalar(1 / e) }
    setAxisAngleFromQuaternion(e) { this.w = 2 * Math.acos(e.w); const t = Math.sqrt(1 - e.w * e.w); return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this }
    setAxisAngleFromRotationMatrix(e) { let t, n, i, r; const o = .01,
            a = .1,
            l = e.elements,
            c = l[0],
            h = l[4],
            u = l[8],
            d = l[1],
            f = l[5],
            g = l[9],
            x = l[2],
            v = l[6],
            m = l[10]; if (Math.abs(h - d) < o && Math.abs(u - x) < o && Math.abs(g - v) < o) { if (Math.abs(h + d) < a && Math.abs(u + x) < a && Math.abs(g + v) < a && Math.abs(c + f + m - 3) < a) return this.set(1, 0, 0, 0), this;
            t = Math.PI; const T = (c + 1) / 2,
                y = (f + 1) / 2,
                w = (m + 1) / 2,
                R = (h + d) / 4,
                P = (u + x) / 4,
                Z = (g + v) / 4; return T > y && T > w ? T < o ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(T), i = R / n, r = P / n) : y > w ? y < o ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(y), n = R / i, r = Z / i) : w < o ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(w), n = P / r, i = Z / r), this.set(n, i, r, t), this } let p = Math.sqrt((v - g) * (v - g) + (u - x) * (u - x) + (d - h) * (d - h)); return Math.abs(p) < .001 && (p = 1), this.x = (v - g) / p, this.y = (u - x) / p, this.z = (d - h) / p, this.w = Math.acos((c + f + m - 1) / 2), this }
    min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this }
    max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this }
    clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this }
    clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this }
    clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) }
    floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this }
    ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this }
    round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this }
    roundToZero() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this }
    negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this }
    dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w }
    lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w }
    length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) }
    manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) }
    normalize() { return this.divideScalar(this.length() || 1) }
    setLength(e) { return this.normalize().multiplyScalar(e) }
    lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this }
    lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this }
    equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w }
    fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this }
    toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e }
    fromBufferAttribute(e, t, n) { return n !== void 0 && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this }
    random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this } * [Symbol.iterator]() { yield this.x, yield this.y, yield this.z, yield this.w } }
We.prototype.isVector4 = !0;
class Et extends nn { constructor(e, t, n = {}) { super();
        this.width = e, this.height = t, this.depth = 1, this.scissor = new We(0, 0, e, t), this.scissorTest = !1, this.viewport = new We(0, 0, e, t), this.texture = new ot(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.image = { width: e, height: t, depth: 1 }, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : ut, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null }
    setTexture(e) { e.image = { width: this.width, height: this.height, depth: this.depth }, this.texture = e }
    setSize(e, t, n = 1) {
        (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t) }
    clone() { return new this.constructor().copy(this) }
    copy(e) { return this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.image = Object.assign({}, e.texture.image), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this }
    dispose() { this.dispatchEvent({ type: "dispose" }) } }
Et.prototype.isWebGLRenderTarget = !0;
class ph extends Et { constructor(e, t, n) { super(e, t); const i = this.texture;
        this.texture = []; for (let r = 0; r < n; r++) this.texture[r] = i.clone() }
    setSize(e, t, n = 1) { if (this.width !== e || this.height !== t || this.depth !== n) { this.width = e, this.height = t, this.depth = n; for (let i = 0, r = this.texture.length; i < r; i++) this.texture[i].image.width = e, this.texture[i].image.height = t, this.texture[i].image.depth = n;
            this.dispose() } return this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t), this }
    copy(e) { this.dispose(), this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this.texture.length = 0; for (let t = 0, n = e.texture.length; t < n; t++) this.texture[t] = e.texture[t].clone(); return this } }
ph.prototype.isWebGLMultipleRenderTargets = !0;
class gs extends Et { constructor(e, t, n = {}) { super(e, t, n);
        this.samples = 4, this.ignoreDepthForMultisampleCopy = n.ignoreDepth !== void 0 ? n.ignoreDepth : !0, this.useRenderToTexture = n.useRenderToTexture !== void 0 ? n.useRenderToTexture : !1, this.useRenderbuffer = this.useRenderToTexture === !1 }
    copy(e) { return super.copy.call(this, e), this.samples = e.samples, this.useRenderToTexture = e.useRenderToTexture, this.useRenderbuffer = e.useRenderbuffer, this } }
gs.prototype.isWebGLMultisampleRenderTarget = !0;
class dt { constructor(e = 0, t = 0, n = 0, i = 1) { this._x = e, this._y = t, this._z = n, this._w = i }
    static slerp(e, t, n, i) { return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(e, t, i) }
    static slerpFlat(e, t, n, i, r, o, a) { let l = n[i + 0],
            c = n[i + 1],
            h = n[i + 2],
            u = n[i + 3]; const d = r[o + 0],
            f = r[o + 1],
            g = r[o + 2],
            x = r[o + 3]; if (a === 0) { e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u; return } if (a === 1) { e[t + 0] = d, e[t + 1] = f, e[t + 2] = g, e[t + 3] = x; return } if (u !== x || l !== d || c !== f || h !== g) { let v = 1 - a; const m = l * d + c * f + h * g + u * x,
                p = m >= 0 ? 1 : -1,
                T = 1 - m * m; if (T > Number.EPSILON) { const w = Math.sqrt(T),
                    R = Math.atan2(w, m * p);
                v = Math.sin(v * R) / w, a = Math.sin(a * R) / w } const y = a * p; if (l = l * v + d * y, c = c * v + f * y, h = h * v + g * y, u = u * v + x * y, v === 1 - a) { const w = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
                l *= w, c *= w, h *= w, u *= w } }
        e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u }
    static multiplyQuaternionsFlat(e, t, n, i, r, o) { const a = n[i],
            l = n[i + 1],
            c = n[i + 2],
            h = n[i + 3],
            u = r[o],
            d = r[o + 1],
            f = r[o + 2],
            g = r[o + 3]; return e[t] = a * g + h * u + l * f - c * d, e[t + 1] = l * g + h * d + c * u - a * f, e[t + 2] = c * g + h * f + a * d - l * u, e[t + 3] = h * g - a * u - l * d - c * f, e }
    get x() { return this._x }
    set x(e) { this._x = e, this._onChangeCallback() }
    get y() { return this._y }
    set y(e) { this._y = e, this._onChangeCallback() }
    get z() { return this._z }
    set z(e) { this._z = e, this._onChangeCallback() }
    get w() { return this._w }
    set w(e) { this._w = e, this._onChangeCallback() }
    set(e, t, n, i) { return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this }
    clone() { return new this.constructor(this._x, this._y, this._z, this._w) }
    copy(e) { return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this }
    setFromEuler(e, t) { if (!(e && e.isEuler)) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."); const n = e._x,
            i = e._y,
            r = e._z,
            o = e._order,
            a = Math.cos,
            l = Math.sin,
            c = a(n / 2),
            h = a(i / 2),
            u = a(r / 2),
            d = l(n / 2),
            f = l(i / 2),
            g = l(r / 2); switch (o) {
            case "XYZ":
                this._x = d * h * u + c * f * g, this._y = c * f * u - d * h * g, this._z = c * h * g + d * f * u, this._w = c * h * u - d * f * g; break;
            case "YXZ":
                this._x = d * h * u + c * f * g, this._y = c * f * u - d * h * g, this._z = c * h * g - d * f * u, this._w = c * h * u + d * f * g; break;
            case "ZXY":
                this._x = d * h * u - c * f * g, this._y = c * f * u + d * h * g, this._z = c * h * g + d * f * u, this._w = c * h * u - d * f * g; break;
            case "ZYX":
                this._x = d * h * u - c * f * g, this._y = c * f * u + d * h * g, this._z = c * h * g - d * f * u, this._w = c * h * u + d * f * g; break;
            case "YZX":
                this._x = d * h * u + c * f * g, this._y = c * f * u + d * h * g, this._z = c * h * g - d * f * u, this._w = c * h * u - d * f * g; break;
            case "XZY":
                this._x = d * h * u - c * f * g, this._y = c * f * u - d * h * g, this._z = c * h * g + d * f * u, this._w = c * h * u + d * f * g; break;
            default:
                console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o) } return t !== !1 && this._onChangeCallback(), this }
    setFromAxisAngle(e, t) { const n = t / 2,
            i = Math.sin(n); return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this }
    setFromRotationMatrix(e) { const t = e.elements,
            n = t[0],
            i = t[4],
            r = t[8],
            o = t[1],
            a = t[5],
            l = t[9],
            c = t[2],
            h = t[6],
            u = t[10],
            d = n + a + u; if (d > 0) { const f = .5 / Math.sqrt(d + 1);
            this._w = .25 / f, this._x = (h - l) * f, this._y = (r - c) * f, this._z = (o - i) * f } else if (n > a && n > u) { const f = 2 * Math.sqrt(1 + n - a - u);
            this._w = (h - l) / f, this._x = .25 * f, this._y = (i + o) / f, this._z = (r + c) / f } else if (a > u) { const f = 2 * Math.sqrt(1 + a - n - u);
            this._w = (r - c) / f, this._x = (i + o) / f, this._y = .25 * f, this._z = (l + h) / f } else { const f = 2 * Math.sqrt(1 + u - n - a);
            this._w = (o - i) / f, this._x = (r + c) / f, this._y = (l + h) / f, this._z = .25 * f } return this._onChangeCallback(), this }
    setFromUnitVectors(e, t) { let n = e.dot(t) + 1; return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize() }
    angleTo(e) { return 2 * Math.acos(Math.abs(xt(this.dot(e), -1, 1))) }
    rotateTowards(e, t) { const n = this.angleTo(e); if (n === 0) return this; const i = Math.min(1, t / n); return this.slerp(e, i), this }
    identity() { return this.set(0, 0, 0, 1) }
    invert() { return this.conjugate() }
    conjugate() { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this }
    dot(e) { return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w }
    lengthSq() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w }
    length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) }
    normalize() { let e = this.length(); return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this }
    multiply(e, t) { return t !== void 0 ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e) }
    premultiply(e) { return this.multiplyQuaternions(e, this) }
    multiplyQuaternions(e, t) { const n = e._x,
            i = e._y,
            r = e._z,
            o = e._w,
            a = t._x,
            l = t._y,
            c = t._z,
            h = t._w; return this._x = n * h + o * a + i * c - r * l, this._y = i * h + o * l + r * a - n * c, this._z = r * h + o * c + n * l - i * a, this._w = o * h - n * a - i * l - r * c, this._onChangeCallback(), this }
    slerp(e, t) { if (t === 0) return this; if (t === 1) return this.copy(e); const n = this._x,
            i = this._y,
            r = this._z,
            o = this._w; let a = o * e._w + n * e._x + i * e._y + r * e._z; if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = n, this._y = i, this._z = r, this; const l = 1 - a * a; if (l <= Number.EPSILON) { const f = 1 - t; return this._w = f * o + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * r + t * this._z, this.normalize(), this._onChangeCallback(), this } const c = Math.sqrt(l),
            h = Math.atan2(c, a),
            u = Math.sin((1 - t) * h) / c,
            d = Math.sin(t * h) / c; return this._w = o * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this }
    slerpQuaternions(e, t, n) { return this.copy(e).slerp(t, n) }
    random() { const e = Math.random(),
            t = Math.sqrt(1 - e),
            n = Math.sqrt(e),
            i = 2 * Math.PI * Math.random(),
            r = 2 * Math.PI * Math.random(); return this.set(t * Math.cos(i), n * Math.sin(r), n * Math.cos(r), t * Math.sin(i)) }
    equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w }
    fromArray(e, t = 0) { return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this }
    toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e }
    fromBufferAttribute(e, t) { return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this }
    _onChange(e) { return this._onChangeCallback = e, this }
    _onChangeCallback() {} }
dt.prototype.isQuaternion = !0;
class S { constructor(e = 0, t = 0, n = 0) { this.x = e, this.y = t, this.z = n }
    set(e, t, n) { return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this }
    setScalar(e) { return this.x = e, this.y = e, this.z = e, this }
    setX(e) { return this.x = e, this }
    setY(e) { return this.y = e, this }
    setZ(e) { return this.z = e, this }
    setComponent(e, t) { switch (e) {
            case 0:
                this.x = t; break;
            case 1:
                this.y = t; break;
            case 2:
                this.z = t; break;
            default:
                throw new Error("index is out of range: " + e) } return this }
    getComponent(e) { switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + e) } }
    clone() { return new this.constructor(this.x, this.y, this.z) }
    copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this }
    add(e, t) { return t !== void 0 ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this) }
    addScalar(e) { return this.x += e, this.y += e, this.z += e, this }
    addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this }
    addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this }
    sub(e, t) { return t !== void 0 ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this) }
    subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this }
    subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this }
    multiply(e, t) { return t !== void 0 ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this) }
    multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this }
    multiplyVectors(e, t) { return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this }
    applyEuler(e) { return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(oa.setFromEuler(e)) }
    applyAxisAngle(e, t) { return this.applyQuaternion(oa.setFromAxisAngle(e, t)) }
    applyMatrix3(e) { const t = this.x,
            n = this.y,
            i = this.z,
            r = e.elements; return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this }
    applyNormalMatrix(e) { return this.applyMatrix3(e).normalize() }
    applyMatrix4(e) { const t = this.x,
            n = this.y,
            i = this.z,
            r = e.elements,
            o = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]); return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * o, this }
    applyQuaternion(e) { const t = this.x,
            n = this.y,
            i = this.z,
            r = e.x,
            o = e.y,
            a = e.z,
            l = e.w,
            c = l * t + o * i - a * n,
            h = l * n + a * t - r * i,
            u = l * i + r * n - o * t,
            d = -r * t - o * n - a * i; return this.x = c * l + d * -r + h * -a - u * -o, this.y = h * l + d * -o + u * -r - c * -a, this.z = u * l + d * -a + c * -o - h * -r, this }
    project(e) { return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix) }
    unproject(e) { return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld) }
    transformDirection(e) { const t = this.x,
            n = this.y,
            i = this.z,
            r = e.elements; return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize() }
    divide(e) { return this.x /= e.x, this.y /= e.y, this.z /= e.z, this }
    divideScalar(e) { return this.multiplyScalar(1 / e) }
    min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this }
    max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this }
    clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this }
    clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this }
    clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) }
    floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this }
    ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this }
    round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this }
    roundToZero() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this }
    negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this }
    dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z }
    lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z }
    length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) }
    manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) }
    normalize() { return this.divideScalar(this.length() || 1) }
    setLength(e) { return this.normalize().multiplyScalar(e) }
    lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this }
    lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this }
    cross(e, t) { return t !== void 0 ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e) }
    crossVectors(e, t) { const n = e.x,
            i = e.y,
            r = e.z,
            o = t.x,
            a = t.y,
            l = t.z; return this.x = i * l - r * a, this.y = r * o - n * l, this.z = n * a - i * o, this }
    projectOnVector(e) { const t = e.lengthSq(); if (t === 0) return this.set(0, 0, 0); const n = e.dot(this) / t; return this.copy(e).multiplyScalar(n) }
    projectOnPlane(e) { return xs.copy(this).projectOnVector(e), this.sub(xs) }
    reflect(e) { return this.sub(xs.copy(e).multiplyScalar(2 * this.dot(e))) }
    angleTo(e) { const t = Math.sqrt(this.lengthSq() * e.lengthSq()); if (t === 0) return Math.PI / 2; const n = this.dot(e) / t; return Math.acos(xt(n, -1, 1)) }
    distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) }
    distanceToSquared(e) { const t = this.x - e.x,
            n = this.y - e.y,
            i = this.z - e.z; return t * t + n * n + i * i }
    manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z) }
    setFromSpherical(e) { return this.setFromSphericalCoords(e.radius, e.phi, e.theta) }
    setFromSphericalCoords(e, t, n) { const i = Math.sin(t) * e; return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this }
    setFromCylindrical(e) { return this.setFromCylindricalCoords(e.radius, e.theta, e.y) }
    setFromCylindricalCoords(e, t, n) { return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this }
    setFromMatrixPosition(e) { const t = e.elements; return this.x = t[12], this.y = t[13], this.z = t[14], this }
    setFromMatrixScale(e) { const t = this.setFromMatrixColumn(e, 0).length(),
            n = this.setFromMatrixColumn(e, 1).length(),
            i = this.setFromMatrixColumn(e, 2).length(); return this.x = t, this.y = n, this.z = i, this }
    setFromMatrixColumn(e, t) { return this.fromArray(e.elements, t * 4) }
    setFromMatrix3Column(e, t) { return this.fromArray(e.elements, t * 3) }
    equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z }
    fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this }
    toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e }
    fromBufferAttribute(e, t, n) { return n !== void 0 && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this }
    random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this }
    randomDirection() { const e = (Math.random() - .5) * 2,
            t = Math.random() * Math.PI * 2,
            n = Math.sqrt(1 - e ** 2); return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this } * [Symbol.iterator]() { yield this.x, yield this.y, yield this.z } }
S.prototype.isVector3 = !0;
const xs = new S,
    oa = new dt;
class Lt { constructor(e = new S(1 / 0, 1 / 0, 1 / 0), t = new S(-1 / 0, -1 / 0, -1 / 0)) { this.min = e, this.max = t }
    set(e, t) { return this.min.copy(e), this.max.copy(t), this }
    setFromArray(e) { let t = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            o = -1 / 0,
            a = -1 / 0; for (let l = 0, c = e.length; l < c; l += 3) { const h = e[l],
                u = e[l + 1],
                d = e[l + 2];
            h < t && (t = h), u < n && (n = u), d < i && (i = d), h > r && (r = h), u > o && (o = u), d > a && (a = d) } return this.min.set(t, n, i), this.max.set(r, o, a), this }
    setFromBufferAttribute(e) { let t = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            o = -1 / 0,
            a = -1 / 0; for (let l = 0, c = e.count; l < c; l++) { const h = e.getX(l),
                u = e.getY(l),
                d = e.getZ(l);
            h < t && (t = h), u < n && (n = u), d < i && (i = d), h > r && (r = h), u > o && (o = u), d > a && (a = d) } return this.min.set(t, n, i), this.max.set(r, o, a), this }
    setFromPoints(e) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]); return this }
    setFromCenterAndSize(e, t) { const n = bn.copy(t).multiplyScalar(.5); return this.min.copy(e).sub(n), this.max.copy(e).add(n), this }
    setFromObject(e, t = !1) { return this.makeEmpty(), this.expandByObject(e, t) }
    clone() { return new this.constructor().copy(this) }
    copy(e) { return this.min.copy(e.min), this.max.copy(e.max), this }
    makeEmpty() { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this }
    isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z }
    getCenter(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5) }
    getSize(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min) }
    expandByPoint(e) { return this.min.min(e), this.max.max(e), this }
    expandByVector(e) { return this.min.sub(e), this.max.add(e), this }
    expandByScalar(e) { return this.min.addScalar(-e), this.max.addScalar(e), this }
    expandByObject(e, t = !1) { e.updateWorldMatrix(!1, !1); const n = e.geometry; if (n !== void 0)
            if (t && n.attributes != null && n.attributes.position !== void 0) { const r = n.attributes.position; for (let o = 0, a = r.count; o < a; o++) bn.fromBufferAttribute(r, o).applyMatrix4(e.matrixWorld), this.expandByPoint(bn) } else n.boundingBox === null && n.computeBoundingBox(), _s.copy(n.boundingBox), _s.applyMatrix4(e.matrixWorld), this.union(_s);
        const i = e.children; for (let r = 0, o = i.length; r < o; r++) this.expandByObject(i[r], t); return this }
    containsPoint(e) { return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z) }
    containsBox(e) { return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z }
    getParameter(e, t) { return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z)) }
    intersectsBox(e) { return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z) }
    intersectsSphere(e) { return this.clampPoint(e.center, bn), bn.distanceToSquared(e.center) <= e.radius * e.radius }
    intersectsPlane(e) { let t, n; return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant }
    intersectsTriangle(e) { if (this.isEmpty()) return !1;
        this.getCenter(Ti), ir.subVectors(this.max, Ti), Hn.subVectors(e.a, Ti), Vn.subVectors(e.b, Ti), Gn.subVectors(e.c, Ti), rn.subVectors(Vn, Hn), sn.subVectors(Gn, Vn), wn.subVectors(Hn, Gn); let t = [0, -rn.z, rn.y, 0, -sn.z, sn.y, 0, -wn.z, wn.y, rn.z, 0, -rn.x, sn.z, 0, -sn.x, wn.z, 0, -wn.x, -rn.y, rn.x, 0, -sn.y, sn.x, 0, -wn.y, wn.x, 0]; return !vs(t, Hn, Vn, Gn, ir) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !vs(t, Hn, Vn, Gn, ir)) ? !1 : (rr.crossVectors(rn, sn), t = [rr.x, rr.y, rr.z], vs(t, Hn, Vn, Gn, ir)) }
    clampPoint(e, t) { return t.copy(e).clamp(this.min, this.max) }
    distanceToPoint(e) { return bn.copy(e).clamp(this.min, this.max).sub(e).length() }
    getBoundingSphere(e) { return this.getCenter(e.center), e.radius = this.getSize(bn).length() * .5, e }
    intersect(e) { return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this }
    union(e) { return this.min.min(e.min), this.max.max(e.max), this }
    applyMatrix4(e) { return this.isEmpty() ? this : (Xt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Xt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Xt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Xt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Xt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Xt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Xt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Xt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Xt), this) }
    translate(e) { return this.min.add(e), this.max.add(e), this }
    equals(e) { return e.min.equals(this.min) && e.max.equals(this.max) } }
Lt.prototype.isBox3 = !0;
const Xt = [new S, new S, new S, new S, new S, new S, new S, new S],
    bn = new S,
    _s = new Lt,
    Hn = new S,
    Vn = new S,
    Gn = new S,
    rn = new S,
    sn = new S,
    wn = new S,
    Ti = new S,
    ir = new S,
    rr = new S,
    Sn = new S;

function vs(s, e, t, n, i) { for (let r = 0, o = s.length - 3; r <= o; r += 3) { Sn.fromArray(s, r); const a = i.x * Math.abs(Sn.x) + i.y * Math.abs(Sn.y) + i.z * Math.abs(Sn.z),
            l = e.dot(Sn),
            c = t.dot(Sn),
            h = n.dot(Sn); if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a) return !1 } return !0 }
const mh = new Lt,
    aa = new S,
    sr = new S,
    ys = new S;
class kn { constructor(e = new S, t = -1) { this.center = e, this.radius = t }
    set(e, t) { return this.center.copy(e), this.radius = t, this }
    setFromPoints(e, t) { const n = this.center;
        t !== void 0 ? n.copy(t) : mh.setFromPoints(e).getCenter(n); let i = 0; for (let r = 0, o = e.length; r < o; r++) i = Math.max(i, n.distanceToSquared(e[r])); return this.radius = Math.sqrt(i), this }
    copy(e) { return this.center.copy(e.center), this.radius = e.radius, this }
    isEmpty() { return this.radius < 0 }
    makeEmpty() { return this.center.set(0, 0, 0), this.radius = -1, this }
    containsPoint(e) { return e.distanceToSquared(this.center) <= this.radius * this.radius }
    distanceToPoint(e) { return e.distanceTo(this.center) - this.radius }
    intersectsSphere(e) { const t = this.radius + e.radius; return e.center.distanceToSquared(this.center) <= t * t }
    intersectsBox(e) { return e.intersectsSphere(this) }
    intersectsPlane(e) { return Math.abs(e.distanceToPoint(this.center)) <= this.radius }
    clampPoint(e, t) { const n = this.center.distanceToSquared(e); return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t }
    getBoundingBox(e) { return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e) }
    applyMatrix4(e) { return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this }
    translate(e) { return this.center.add(e), this }
    expandByPoint(e) { ys.subVectors(e, this.center); const t = ys.lengthSq(); if (t > this.radius * this.radius) { const n = Math.sqrt(t),
                i = (n - this.radius) * .5;
            this.center.add(ys.multiplyScalar(i / n)), this.radius += i } return this }
    union(e) { return this.center.equals(e.center) === !0 ? sr.set(0, 0, 1).multiplyScalar(e.radius) : sr.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(aa.copy(e.center).add(sr)), this.expandByPoint(aa.copy(e.center).sub(sr)), this }
    equals(e) { return e.center.equals(this.center) && e.radius === this.radius }
    clone() { return new this.constructor().copy(this) } }
const jt = new S,
    Ms = new S,
    or = new S,
    on = new S,
    bs = new S,
    ar = new S,
    ws = new S;
class Wn { constructor(e = new S, t = new S(0, 0, -1)) { this.origin = e, this.direction = t }
    set(e, t) { return this.origin.copy(e), this.direction.copy(t), this }
    copy(e) { return this.origin.copy(e.origin), this.direction.copy(e.direction), this }
    at(e, t) { return t.copy(this.direction).multiplyScalar(e).add(this.origin) }
    lookAt(e) { return this.direction.copy(e).sub(this.origin).normalize(), this }
    recast(e) { return this.origin.copy(this.at(e, jt)), this }
    closestPointToPoint(e, t) { t.subVectors(e, this.origin); const n = t.dot(this.direction); return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin) }
    distanceToPoint(e) { return Math.sqrt(this.distanceSqToPoint(e)) }
    distanceSqToPoint(e) { const t = jt.subVectors(e, this.origin).dot(this.direction); return t < 0 ? this.origin.distanceToSquared(e) : (jt.copy(this.direction).multiplyScalar(t).add(this.origin), jt.distanceToSquared(e)) }
    distanceSqToSegment(e, t, n, i) { Ms.copy(e).add(t).multiplyScalar(.5), or.copy(t).sub(e).normalize(), on.copy(this.origin).sub(Ms); const r = e.distanceTo(t) * .5,
            o = -this.direction.dot(or),
            a = on.dot(this.direction),
            l = -on.dot(or),
            c = on.lengthSq(),
            h = Math.abs(1 - o * o); let u, d, f, g; if (h > 0)
            if (u = o * l - a, d = o * a - l, g = r * h, u >= 0)
                if (d >= -g)
                    if (d <= g) { const x = 1 / h;
                        u *= x, d *= x, f = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * l) + c } else d = r, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * l) + c;
        else d = -r, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * l) + c;
        else d <= -g ? (u = Math.max(0, -(-o * r + a)), d = u > 0 ? -r : Math.min(Math.max(-r, -l), r), f = -u * u + d * (d + 2 * l) + c) : d <= g ? (u = 0, d = Math.min(Math.max(-r, -l), r), f = d * (d + 2 * l) + c) : (u = Math.max(0, -(o * r + a)), d = u > 0 ? r : Math.min(Math.max(-r, -l), r), f = -u * u + d * (d + 2 * l) + c);
        else d = o > 0 ? -r : r, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * l) + c; return n && n.copy(this.direction).multiplyScalar(u).add(this.origin), i && i.copy(or).multiplyScalar(d).add(Ms), f }
    intersectSphere(e, t) { jt.subVectors(e.center, this.origin); const n = jt.dot(this.direction),
            i = jt.dot(jt) - n * n,
            r = e.radius * e.radius; if (i > r) return null; const o = Math.sqrt(r - i),
            a = n - o,
            l = n + o; return a < 0 && l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t) }
    intersectsSphere(e) { return this.distanceSqToPoint(e.center) <= e.radius * e.radius }
    distanceToPlane(e) { const t = e.normal.dot(this.direction); if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null; const n = -(this.origin.dot(e.normal) + e.constant) / t; return n >= 0 ? n : null }
    intersectPlane(e, t) { const n = this.distanceToPlane(e); return n === null ? null : this.at(n, t) }
    intersectsPlane(e) { const t = e.distanceToPoint(this.origin); return t === 0 || e.normal.dot(this.direction) * t < 0 }
    intersectBox(e, t) { let n, i, r, o, a, l; const c = 1 / this.direction.x,
            h = 1 / this.direction.y,
            u = 1 / this.direction.z,
            d = this.origin; return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), h >= 0 ? (r = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (r = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), n > o || r > i || ((r > n || n !== n) && (n = r), (o < i || i !== i) && (i = o), u >= 0 ? (a = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), n > l || a > i) || ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t) }
    intersectsBox(e) { return this.intersectBox(e, jt) !== null }
    intersectTriangle(e, t, n, i, r) { bs.subVectors(t, e), ar.subVectors(n, e), ws.crossVectors(bs, ar); let o = this.direction.dot(ws),
            a; if (o > 0) { if (i) return null;
            a = 1 } else if (o < 0) a = -1, o = -o;
        else return null;
        on.subVectors(this.origin, e); const l = a * this.direction.dot(ar.crossVectors(on, ar)); if (l < 0) return null; const c = a * this.direction.dot(bs.cross(on)); if (c < 0 || l + c > o) return null; const h = -a * on.dot(ws); return h < 0 ? null : this.at(h / o, r) }
    applyMatrix4(e) { return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this }
    equals(e) { return e.origin.equals(this.origin) && e.direction.equals(this.direction) }
    clone() { return new this.constructor().copy(this) } }
class be { constructor() { this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.") }
    set(e, t, n, i, r, o, a, l, c, h, u, d, f, g, x, v) { const m = this.elements; return m[0] = e, m[4] = t, m[8] = n, m[12] = i, m[1] = r, m[5] = o, m[9] = a, m[13] = l, m[2] = c, m[6] = h, m[10] = u, m[14] = d, m[3] = f, m[7] = g, m[11] = x, m[15] = v, this }
    identity() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this }
    clone() { return new be().fromArray(this.elements) }
    copy(e) { const t = this.elements,
            n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this }
    copyPosition(e) { const t = this.elements,
            n = e.elements; return t[12] = n[12], t[13] = n[13], t[14] = n[14], this }
    setFromMatrix3(e) { const t = e.elements; return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this }
    extractBasis(e, t, n) { return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this }
    makeBasis(e, t, n) { return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this }
    extractRotation(e) { const t = this.elements,
            n = e.elements,
            i = 1 / qn.setFromMatrixColumn(e, 0).length(),
            r = 1 / qn.setFromMatrixColumn(e, 1).length(),
            o = 1 / qn.setFromMatrixColumn(e, 2).length(); return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this }
    makeRotationFromEuler(e) { e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."); const t = this.elements,
            n = e.x,
            i = e.y,
            r = e.z,
            o = Math.cos(n),
            a = Math.sin(n),
            l = Math.cos(i),
            c = Math.sin(i),
            h = Math.cos(r),
            u = Math.sin(r); if (e.order === "XYZ") { const d = o * h,
                f = o * u,
                g = a * h,
                x = a * u;
            t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = f + g * c, t[5] = d - x * c, t[9] = -a * l, t[2] = x - d * c, t[6] = g + f * c, t[10] = o * l } else if (e.order === "YXZ") { const d = l * h,
                f = l * u,
                g = c * h,
                x = c * u;
            t[0] = d + x * a, t[4] = g * a - f, t[8] = o * c, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = f * a - g, t[6] = x + d * a, t[10] = o * l } else if (e.order === "ZXY") { const d = l * h,
                f = l * u,
                g = c * h,
                x = c * u;
            t[0] = d - x * a, t[4] = -o * u, t[8] = g + f * a, t[1] = f + g * a, t[5] = o * h, t[9] = x - d * a, t[2] = -o * c, t[6] = a, t[10] = o * l } else if (e.order === "ZYX") { const d = o * h,
                f = o * u,
                g = a * h,
                x = a * u;
            t[0] = l * h, t[4] = g * c - f, t[8] = d * c + x, t[1] = l * u, t[5] = x * c + d, t[9] = f * c - g, t[2] = -c, t[6] = a * l, t[10] = o * l } else if (e.order === "YZX") { const d = o * l,
                f = o * c,
                g = a * l,
                x = a * c;
            t[0] = l * h, t[4] = x - d * u, t[8] = g * u + f, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -c * h, t[6] = f * u + g, t[10] = d - x * u } else if (e.order === "XZY") { const d = o * l,
                f = o * c,
                g = a * l,
                x = a * c;
            t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + x, t[5] = o * h, t[9] = f * u - g, t[2] = g * u - f, t[6] = a * h, t[10] = x * u + d } return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this }
    makeRotationFromQuaternion(e) { return this.compose(gh, e, xh) }
    lookAt(e, t, n) { const i = this.elements; return wt.subVectors(e, t), wt.lengthSq() === 0 && (wt.z = 1), wt.normalize(), an.crossVectors(n, wt), an.lengthSq() === 0 && (Math.abs(n.z) === 1 ? wt.x += 1e-4 : wt.z += 1e-4, wt.normalize(), an.crossVectors(n, wt)), an.normalize(), lr.crossVectors(wt, an), i[0] = an.x, i[4] = lr.x, i[8] = wt.x, i[1] = an.y, i[5] = lr.y, i[9] = wt.y, i[2] = an.z, i[6] = lr.z, i[10] = wt.z, this }
    multiply(e, t) { return t !== void 0 ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e) }
    premultiply(e) { return this.multiplyMatrices(e, this) }
    multiplyMatrices(e, t) { const n = e.elements,
            i = t.elements,
            r = this.elements,
            o = n[0],
            a = n[4],
            l = n[8],
            c = n[12],
            h = n[1],
            u = n[5],
            d = n[9],
            f = n[13],
            g = n[2],
            x = n[6],
            v = n[10],
            m = n[14],
            p = n[3],
            T = n[7],
            y = n[11],
            w = n[15],
            R = i[0],
            P = i[4],
            Z = i[8],
            oe = i[12],
            $ = i[1],
            _ = i[5],
            L = i[9],
            D = i[13],
            N = i[2],
            B = i[6],
            F = i[10],
            q = i[14],
            K = i[3],
            ue = i[7],
            k = i[11],
            Y = i[15]; return r[0] = o * R + a * $ + l * N + c * K, r[4] = o * P + a * _ + l * B + c * ue, r[8] = o * Z + a * L + l * F + c * k, r[12] = o * oe + a * D + l * q + c * Y, r[1] = h * R + u * $ + d * N + f * K, r[5] = h * P + u * _ + d * B + f * ue, r[9] = h * Z + u * L + d * F + f * k, r[13] = h * oe + u * D + d * q + f * Y, r[2] = g * R + x * $ + v * N + m * K, r[6] = g * P + x * _ + v * B + m * ue, r[10] = g * Z + x * L + v * F + m * k, r[14] = g * oe + x * D + v * q + m * Y, r[3] = p * R + T * $ + y * N + w * K, r[7] = p * P + T * _ + y * B + w * ue, r[11] = p * Z + T * L + y * F + w * k, r[15] = p * oe + T * D + y * q + w * Y, this }
    multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this }
    determinant() { const e = this.elements,
            t = e[0],
            n = e[4],
            i = e[8],
            r = e[12],
            o = e[1],
            a = e[5],
            l = e[9],
            c = e[13],
            h = e[2],
            u = e[6],
            d = e[10],
            f = e[14],
            g = e[3],
            x = e[7],
            v = e[11],
            m = e[15]; return g * (+r * l * u - i * c * u - r * a * d + n * c * d + i * a * f - n * l * f) + x * (+t * l * f - t * c * d + r * o * d - i * o * f + i * c * h - r * l * h) + v * (+t * c * u - t * a * f - r * o * u + n * o * f + r * a * h - n * c * h) + m * (-i * a * h - t * l * u + t * a * d + i * o * u - n * o * d + n * l * h) }
    transpose() { const e = this.elements; let t; return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this }
    setPosition(e, t, n) { const i = this.elements; return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this }
    invert() { const e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            r = e[3],
            o = e[4],
            a = e[5],
            l = e[6],
            c = e[7],
            h = e[8],
            u = e[9],
            d = e[10],
            f = e[11],
            g = e[12],
            x = e[13],
            v = e[14],
            m = e[15],
            p = u * v * c - x * d * c + x * l * f - a * v * f - u * l * m + a * d * m,
            T = g * d * c - h * v * c - g * l * f + o * v * f + h * l * m - o * d * m,
            y = h * x * c - g * u * c + g * a * f - o * x * f - h * a * m + o * u * m,
            w = g * u * l - h * x * l - g * a * d + o * x * d + h * a * v - o * u * v,
            R = t * p + n * T + i * y + r * w; if (R === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); const P = 1 / R; return e[0] = p * P, e[1] = (x * d * r - u * v * r - x * i * f + n * v * f + u * i * m - n * d * m) * P, e[2] = (a * v * r - x * l * r + x * i * c - n * v * c - a * i * m + n * l * m) * P, e[3] = (u * l * r - a * d * r - u * i * c + n * d * c + a * i * f - n * l * f) * P, e[4] = T * P, e[5] = (h * v * r - g * d * r + g * i * f - t * v * f - h * i * m + t * d * m) * P, e[6] = (g * l * r - o * v * r - g * i * c + t * v * c + o * i * m - t * l * m) * P, e[7] = (o * d * r - h * l * r + h * i * c - t * d * c - o * i * f + t * l * f) * P, e[8] = y * P, e[9] = (g * u * r - h * x * r - g * n * f + t * x * f + h * n * m - t * u * m) * P, e[10] = (o * x * r - g * a * r + g * n * c - t * x * c - o * n * m + t * a * m) * P, e[11] = (h * a * r - o * u * r - h * n * c + t * u * c + o * n * f - t * a * f) * P, e[12] = w * P, e[13] = (h * x * i - g * u * i + g * n * d - t * x * d - h * n * v + t * u * v) * P, e[14] = (g * a * i - o * x * i - g * n * l + t * x * l + o * n * v - t * a * v) * P, e[15] = (o * u * i - h * a * i + h * n * l - t * u * l - o * n * d + t * a * d) * P, this }
    scale(e) { const t = this.elements,
            n = e.x,
            i = e.y,
            r = e.z; return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this }
    getMaxScaleOnAxis() { const e = this.elements,
            t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
            n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
            i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10]; return Math.sqrt(Math.max(t, n, i)) }
    makeTranslation(e, t, n) { return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this }
    makeRotationX(e) { const t = Math.cos(e),
            n = Math.sin(e); return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this }
    makeRotationY(e) { const t = Math.cos(e),
            n = Math.sin(e); return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this }
    makeRotationZ(e) { const t = Math.cos(e),
            n = Math.sin(e); return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this }
    makeRotationAxis(e, t) { const n = Math.cos(t),
            i = Math.sin(t),
            r = 1 - n,
            o = e.x,
            a = e.y,
            l = e.z,
            c = r * o,
            h = r * a; return this.set(c * o + n, c * a - i * l, c * l + i * a, 0, c * a + i * l, h * a + n, h * l - i * o, 0, c * l - i * a, h * l + i * o, r * l * l + n, 0, 0, 0, 0, 1), this }
    makeScale(e, t, n) { return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this }
    makeShear(e, t, n, i, r, o) { return this.set(1, n, r, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this }
    compose(e, t, n) { const i = this.elements,
            r = t._x,
            o = t._y,
            a = t._z,
            l = t._w,
            c = r + r,
            h = o + o,
            u = a + a,
            d = r * c,
            f = r * h,
            g = r * u,
            x = o * h,
            v = o * u,
            m = a * u,
            p = l * c,
            T = l * h,
            y = l * u,
            w = n.x,
            R = n.y,
            P = n.z; return i[0] = (1 - (x + m)) * w, i[1] = (f + y) * w, i[2] = (g - T) * w, i[3] = 0, i[4] = (f - y) * R, i[5] = (1 - (d + m)) * R, i[6] = (v + p) * R, i[7] = 0, i[8] = (g + T) * P, i[9] = (v - p) * P, i[10] = (1 - (d + x)) * P, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this }
    decompose(e, t, n) { const i = this.elements; let r = qn.set(i[0], i[1], i[2]).length(); const o = qn.set(i[4], i[5], i[6]).length(),
            a = qn.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], Pt.copy(this); const c = 1 / r,
            h = 1 / o,
            u = 1 / a; return Pt.elements[0] *= c, Pt.elements[1] *= c, Pt.elements[2] *= c, Pt.elements[4] *= h, Pt.elements[5] *= h, Pt.elements[6] *= h, Pt.elements[8] *= u, Pt.elements[9] *= u, Pt.elements[10] *= u, t.setFromRotationMatrix(Pt), n.x = r, n.y = o, n.z = a, this }
    makePerspective(e, t, n, i, r, o) { o === void 0 && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."); const a = this.elements,
            l = 2 * r / (t - e),
            c = 2 * r / (n - i),
            h = (t + e) / (t - e),
            u = (n + i) / (n - i),
            d = -(o + r) / (o - r),
            f = -2 * o * r / (o - r); return a[0] = l, a[4] = 0, a[8] = h, a[12] = 0, a[1] = 0, a[5] = c, a[9] = u, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = d, a[14] = f, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this }
    makeOrthographic(e, t, n, i, r, o) { const a = this.elements,
            l = 1 / (t - e),
            c = 1 / (n - i),
            h = 1 / (o - r),
            u = (t + e) * l,
            d = (n + i) * c,
            f = (o + r) * h; return a[0] = 2 * l, a[4] = 0, a[8] = 0, a[12] = -u, a[1] = 0, a[5] = 2 * c, a[9] = 0, a[13] = -d, a[2] = 0, a[6] = 0, a[10] = -2 * h, a[14] = -f, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this }
    equals(e) { const t = this.elements,
            n = e.elements; for (let i = 0; i < 16; i++)
            if (t[i] !== n[i]) return !1;
        return !0 }
    fromArray(e, t = 0) { for (let n = 0; n < 16; n++) this.elements[n] = e[n + t]; return this }
    toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e } }
be.prototype.isMatrix4 = !0;
const qn = new S,
    Pt = new be,
    gh = new S(0, 0, 0),
    xh = new S(1, 1, 1),
    an = new S,
    lr = new S,
    wt = new S,
    la = new be,
    ca = new dt;
class Xn { constructor(e = 0, t = 0, n = 0, i = Xn.DefaultOrder) { this._x = e, this._y = t, this._z = n, this._order = i }
    get x() { return this._x }
    set x(e) { this._x = e, this._onChangeCallback() }
    get y() { return this._y }
    set y(e) { this._y = e, this._onChangeCallback() }
    get z() { return this._z }
    set z(e) { this._z = e, this._onChangeCallback() }
    get order() { return this._order }
    set order(e) { this._order = e, this._onChangeCallback() }
    set(e, t, n, i = this._order) { return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this }
    clone() { return new this.constructor(this._x, this._y, this._z, this._order) }
    copy(e) { return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this }
    setFromRotationMatrix(e, t = this._order, n = !0) { const i = e.elements,
            r = i[0],
            o = i[4],
            a = i[8],
            l = i[1],
            c = i[5],
            h = i[9],
            u = i[2],
            d = i[6],
            f = i[10]; switch (t) {
            case "XYZ":
                this._y = Math.asin(xt(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(d, c), this._z = 0); break;
            case "YXZ":
                this._x = Math.asin(-xt(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0); break;
            case "ZXY":
                this._x = Math.asin(xt(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r)); break;
            case "ZYX":
                this._y = Math.asin(-xt(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c)); break;
            case "YZX":
                this._z = Math.asin(xt(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(a, f)); break;
            case "XZY":
                this._z = Math.asin(-xt(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, f), this._y = 0); break;
            default:
                console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t) } return this._order = t, n === !0 && this._onChangeCallback(), this }
    setFromQuaternion(e, t, n) { return la.makeRotationFromQuaternion(e), this.setFromRotationMatrix(la, t, n) }
    setFromVector3(e, t = this._order) { return this.set(e.x, e.y, e.z, t) }
    reorder(e) { return ca.setFromEuler(this), this.setFromQuaternion(ca, e) }
    equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order }
    fromArray(e) { return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this }
    toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e }
    toVector3(e) { return e ? e.set(this._x, this._y, this._z) : new S(this._x, this._y, this._z) }
    _onChange(e) { return this._onChangeCallback = e, this }
    _onChangeCallback() {} }
Xn.prototype.isEuler = !0;
Xn.DefaultOrder = "XYZ";
Xn.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class ha { constructor() { this.mask = 1 | 0 }
    set(e) { this.mask = (1 << e | 0) >>> 0 }
    enable(e) { this.mask |= 1 << e | 0 }
    enableAll() { this.mask = 4294967295 | 0 }
    toggle(e) { this.mask ^= 1 << e | 0 }
    disable(e) { this.mask &= ~(1 << e | 0) }
    disableAll() { this.mask = 0 }
    test(e) { return (this.mask & e.mask) != 0 }
    isEnabled(e) { return (this.mask & (1 << e | 0)) != 0 } }
let _h = 0;
const ua = new S,
    jn = new dt,
    Yt = new be,
    cr = new S,
    Ai = new S,
    vh = new S,
    yh = new dt,
    da = new S(1, 0, 0),
    fa = new S(0, 1, 0),
    pa = new S(0, 0, 1),
    Mh = { type: "added" },
    ma = { type: "removed" };
class Ue extends nn { constructor() { super();
        Object.defineProperty(this, "id", { value: _h++ }), this.uuid = Ot(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ue.DefaultUp.clone(); const e = new S,
            t = new Xn,
            n = new dt,
            i = new S(1, 1, 1);

        function r() { n.setFromEuler(t, !1) }

        function o() { t.setFromQuaternion(n, void 0, !1) }
        t._onChange(r), n._onChange(o), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: e }, rotation: { configurable: !0, enumerable: !0, value: t }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: i }, modelViewMatrix: { value: new be }, normalMatrix: { value: new ct } }), this.matrix = new be, this.matrixWorld = new be, this.matrixAutoUpdate = Ue.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new ha, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {} }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale) }
    applyQuaternion(e) { return this.quaternion.premultiply(e), this }
    setRotationFromAxisAngle(e, t) { this.quaternion.setFromAxisAngle(e, t) }
    setRotationFromEuler(e) { this.quaternion.setFromEuler(e, !0) }
    setRotationFromMatrix(e) { this.quaternion.setFromRotationMatrix(e) }
    setRotationFromQuaternion(e) { this.quaternion.copy(e) }
    rotateOnAxis(e, t) { return jn.setFromAxisAngle(e, t), this.quaternion.multiply(jn), this }
    rotateOnWorldAxis(e, t) { return jn.setFromAxisAngle(e, t), this.quaternion.premultiply(jn), this }
    rotateX(e) { return this.rotateOnAxis(da, e) }
    rotateY(e) { return this.rotateOnAxis(fa, e) }
    rotateZ(e) { return this.rotateOnAxis(pa, e) }
    translateOnAxis(e, t) { return ua.copy(e).applyQuaternion(this.quaternion), this.position.add(ua.multiplyScalar(t)), this }
    translateX(e) { return this.translateOnAxis(da, e) }
    translateY(e) { return this.translateOnAxis(fa, e) }
    translateZ(e) { return this.translateOnAxis(pa, e) }
    localToWorld(e) { return e.applyMatrix4(this.matrixWorld) }
    worldToLocal(e) { return e.applyMatrix4(Yt.copy(this.matrixWorld).invert()) }
    lookAt(e, t, n) { e.isVector3 ? cr.copy(e) : cr.set(e, t, n); const i = this.parent;
        this.updateWorldMatrix(!0, !1), Ai.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Yt.lookAt(Ai, cr, this.up) : Yt.lookAt(cr, Ai, this.up), this.quaternion.setFromRotationMatrix(Yt), i && (Yt.extractRotation(i.matrixWorld), jn.setFromRotationMatrix(Yt), this.quaternion.premultiply(jn.invert())) }
    add(e) { if (arguments.length > 1) { for (let t = 0; t < arguments.length; t++) this.add(arguments[t]); return this } return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Mh)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this) }
    remove(e) { if (arguments.length > 1) { for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]); return this } const t = this.children.indexOf(e); return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(ma)), this }
    removeFromParent() { const e = this.parent; return e !== null && e.remove(this), this }
    clear() { for (let e = 0; e < this.children.length; e++) { const t = this.children[e];
            t.parent = null, t.dispatchEvent(ma) } return this.children.length = 0, this }
    attach(e) { return this.updateWorldMatrix(!0, !1), Yt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Yt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Yt), this.add(e), e.updateWorldMatrix(!1, !0), this }
    getObjectById(e) { return this.getObjectByProperty("id", e) }
    getObjectByName(e) { return this.getObjectByProperty("name", e) }
    getObjectByProperty(e, t) { if (this[e] === t) return this; for (let n = 0, i = this.children.length; n < i; n++) { const o = this.children[n].getObjectByProperty(e, t); if (o !== void 0) return o } }
    getWorldPosition(e) { return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld) }
    getWorldQuaternion(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ai, e, vh), e }
    getWorldScale(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ai, yh, e), e }
    getWorldDirection(e) { this.updateWorldMatrix(!0, !1); const t = this.matrixWorld.elements; return e.set(t[8], t[9], t[10]).normalize() }
    raycast() {}
    traverse(e) { e(this); const t = this.children; for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e) }
    traverseVisible(e) { if (this.visible === !1) return;
        e(this); const t = this.children; for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e) }
    traverseAncestors(e) { const t = this.parent;
        t !== null && (e(t), t.traverseAncestors(e)) }
    updateMatrix() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 }
    updateMatrixWorld(e) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0); const t = this.children; for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e) }
    updateWorldMatrix(e, t) { const n = this.parent; if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) { const i = this.children; for (let r = 0, o = i.length; r < o; r++) i[r].updateWorldMatrix(!1, !0) } }
    toJSON(e) { const t = e === void 0 || typeof e == "string",
            n = {};
        t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {} }, n.metadata = { version: 4.5, type: "Object", generator: "Object3D.toJSON" }); const i = {};
        i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));

        function r(a, l) { return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid } if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && (i.environment = this.environment.toJSON(e).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) { i.geometry = r(e.geometries, this.geometry); const a = this.geometry.parameters; if (a !== void 0 && a.shapes !== void 0) { const l = a.shapes; if (Array.isArray(l))
                    for (let c = 0, h = l.length; c < h; c++) { const u = l[c];
                        r(e.shapes, u) } else r(e.shapes, l) } } if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
            if (Array.isArray(this.material)) { const a = []; for (let l = 0, c = this.material.length; l < c; l++) a.push(r(e.materials, this.material[l]));
                i.material = a } else i.material = r(e.materials, this.material);
        if (this.children.length > 0) { i.children = []; for (let a = 0; a < this.children.length; a++) i.children.push(this.children[a].toJSON(e).object) } if (this.animations.length > 0) { i.animations = []; for (let a = 0; a < this.animations.length; a++) { const l = this.animations[a];
                i.animations.push(r(e.animations, l)) } } if (t) { const a = o(e.geometries),
                l = o(e.materials),
                c = o(e.textures),
                h = o(e.images),
                u = o(e.shapes),
                d = o(e.skeletons),
                f = o(e.animations);
            a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f) } return n.object = i, n;

        function o(a) { const l = []; for (const c in a) { const h = a[c];
                delete h.metadata, l.push(h) } return l } }
    clone(e) { return new this.constructor().copy(this, e) }
    copy(e, t = !0) { if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
            for (let n = 0; n < e.children.length; n++) { const i = e.children[n];
                this.add(i.clone()) }
        return this } }
Ue.DefaultUp = new S(0, 1, 0);
Ue.DefaultMatrixAutoUpdate = !0;
Ue.prototype.isObject3D = !0;
const Dt = new S,
    Zt = new S,
    Ss = new S,
    Jt = new S,
    Yn = new S,
    Zn = new S,
    ga = new S,
    Es = new S,
    Ts = new S,
    As = new S;
class et { constructor(e = new S, t = new S, n = new S) { this.a = e, this.b = t, this.c = n }
    static getNormal(e, t, n, i) { i.subVectors(n, t), Dt.subVectors(e, t), i.cross(Dt); const r = i.lengthSq(); return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0) }
    static getBarycoord(e, t, n, i, r) { Dt.subVectors(i, t), Zt.subVectors(n, t), Ss.subVectors(e, t); const o = Dt.dot(Dt),
            a = Dt.dot(Zt),
            l = Dt.dot(Ss),
            c = Zt.dot(Zt),
            h = Zt.dot(Ss),
            u = o * c - a * a; if (u === 0) return r.set(-2, -1, -1); const d = 1 / u,
            f = (c * l - a * h) * d,
            g = (o * h - a * l) * d; return r.set(1 - f - g, g, f) }
    static containsPoint(e, t, n, i) { return this.getBarycoord(e, t, n, i, Jt), Jt.x >= 0 && Jt.y >= 0 && Jt.x + Jt.y <= 1 }
    static getUV(e, t, n, i, r, o, a, l) { return this.getBarycoord(e, t, n, i, Jt), l.set(0, 0), l.addScaledVector(r, Jt.x), l.addScaledVector(o, Jt.y), l.addScaledVector(a, Jt.z), l }
    static isFrontFacing(e, t, n, i) { return Dt.subVectors(n, t), Zt.subVectors(e, t), Dt.cross(Zt).dot(i) < 0 }
    set(e, t, n) { return this.a.copy(e), this.b.copy(t), this.c.copy(n), this }
    setFromPointsAndIndices(e, t, n, i) { return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this }
    setFromAttributeAndIndices(e, t, n, i) { return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this }
    clone() { return new this.constructor().copy(this) }
    copy(e) { return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this }
    getArea() { return Dt.subVectors(this.c, this.b), Zt.subVectors(this.a, this.b), Dt.cross(Zt).length() * .5 }
    getMidpoint(e) { return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) }
    getNormal(e) { return et.getNormal(this.a, this.b, this.c, e) }
    getPlane(e) { return e.setFromCoplanarPoints(this.a, this.b, this.c) }
    getBarycoord(e, t) { return et.getBarycoord(e, this.a, this.b, this.c, t) }
    getUV(e, t, n, i, r) { return et.getUV(e, this.a, this.b, this.c, t, n, i, r) }
    containsPoint(e) { return et.containsPoint(e, this.a, this.b, this.c) }
    isFrontFacing(e) { return et.isFrontFacing(this.a, this.b, this.c, e) }
    intersectsBox(e) { return e.intersectsTriangle(this) }
    closestPointToPoint(e, t) { const n = this.a,
            i = this.b,
            r = this.c; let o, a;
        Yn.subVectors(i, n), Zn.subVectors(r, n), Es.subVectors(e, n); const l = Yn.dot(Es),
            c = Zn.dot(Es); if (l <= 0 && c <= 0) return t.copy(n);
        Ts.subVectors(e, i); const h = Yn.dot(Ts),
            u = Zn.dot(Ts); if (h >= 0 && u <= h) return t.copy(i); const d = l * u - h * c; if (d <= 0 && l >= 0 && h <= 0) return o = l / (l - h), t.copy(n).addScaledVector(Yn, o);
        As.subVectors(e, r); const f = Yn.dot(As),
            g = Zn.dot(As); if (g >= 0 && f <= g) return t.copy(r); const x = f * c - l * g; if (x <= 0 && c >= 0 && g <= 0) return a = c / (c - g), t.copy(n).addScaledVector(Zn, a); const v = h * g - f * u; if (v <= 0 && u - h >= 0 && f - g >= 0) return ga.subVectors(r, i), a = (u - h) / (u - h + (f - g)), t.copy(i).addScaledVector(ga, a); const m = 1 / (v + x + d); return o = x * m, a = d * m, t.copy(n).addScaledVector(Yn, o).addScaledVector(Zn, a) }
    equals(e) { return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c) } }
let bh = 0;
class ft extends nn { constructor() { super();
        Object.defineProperty(this, "id", { value: bh++ }), this.uuid = Ot(), this.name = "", this.type = "Material", this.fog = !0, this.blending = yi, this.side = vi, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = Ro, this.blendDst = Lo, this.blendEquation = Pn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Jr, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = hh, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ls, this.stencilZFail = ls, this.stencilZPass = ls, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0 }
    get alphaTest() { return this._alphaTest }
    set alphaTest(e) { this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() { return this.onBeforeCompile.toString() }
    setValues(e) { if (e !== void 0)
            for (const t in e) { const n = e[t]; if (n === void 0) { console.warn("THREE.Material: '" + t + "' parameter is undefined."); continue } if (t === "shading") { console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === wo; continue } const i = this[t]; if (i === void 0) { console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material."); continue }
                i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n } }
    toJSON(e) { const t = e === void 0 || typeof e == "string";
        t && (e = { textures: {}, images: {} }); const n = { metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" } };
        n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== yi && (n.blending = this.blending), this.side !== vi && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);

        function i(r) { const o = []; for (const a in r) { const l = r[a];
                delete l.metadata, o.push(l) } return o } if (t) { const r = i(e.textures),
                o = i(e.images);
            r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o) } return n }
    clone() { return new this.constructor().copy(this) }
    copy(e) { this.name = e.name, this.fog = e.fog, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite; const t = e.clippingPlanes; let n = null; if (t !== null) { const i = t.length;
            n = new Array(i); for (let r = 0; r !== i; ++r) n[r] = t[r].clone() } return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this }
    dispose() { this.dispatchEvent({ type: "dispose" }) }
    set needsUpdate(e) { e === !0 && this.version++ } }
ft.prototype.isMaterial = !0;
class Cs extends ft { constructor(e) { super();
        this.type = "MeshBasicMaterial", this.color = new ve(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Yi, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e) }
    copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this } }
Cs.prototype.isMeshBasicMaterial = !0;
const Xe = new S,
    hr = new J;
class st { constructor(e, t, n) { if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = Si, this.updateRange = { offset: 0, count: -1 }, this.version = 0 }
    onUploadCallback() {}
    set needsUpdate(e) { e === !0 && this.version++ }
    setUsage(e) { return this.usage = e, this }
    copy(e) { return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this }
    copyAt(e, t, n) { e *= this.itemSize, n *= t.itemSize; for (let i = 0, r = this.itemSize; i < r; i++) this.array[e + i] = t.array[n + i]; return this }
    copyArray(e) { return this.array.set(e), this }
    copyColorsArray(e) { const t = this.array; let n = 0; for (let i = 0, r = e.length; i < r; i++) { let o = e[i];
            o === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), o = new ve), t[n++] = o.r, t[n++] = o.g, t[n++] = o.b } return this }
    copyVector2sArray(e) { const t = this.array; let n = 0; for (let i = 0, r = e.length; i < r; i++) { let o = e[i];
            o === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), o = new J), t[n++] = o.x, t[n++] = o.y } return this }
    copyVector3sArray(e) { const t = this.array; let n = 0; for (let i = 0, r = e.length; i < r; i++) { let o = e[i];
            o === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), o = new S), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z } return this }
    copyVector4sArray(e) { const t = this.array; let n = 0; for (let i = 0, r = e.length; i < r; i++) { let o = e[i];
            o === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), o = new We), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z, t[n++] = o.w } return this }
    applyMatrix3(e) { if (this.itemSize === 2)
            for (let t = 0, n = this.count; t < n; t++) hr.fromBufferAttribute(this, t), hr.applyMatrix3(e), this.setXY(t, hr.x, hr.y);
        else if (this.itemSize === 3)
            for (let t = 0, n = this.count; t < n; t++) Xe.fromBufferAttribute(this, t), Xe.applyMatrix3(e), this.setXYZ(t, Xe.x, Xe.y, Xe.z); return this }
    applyMatrix4(e) { for (let t = 0, n = this.count; t < n; t++) Xe.x = this.getX(t), Xe.y = this.getY(t), Xe.z = this.getZ(t), Xe.applyMatrix4(e), this.setXYZ(t, Xe.x, Xe.y, Xe.z); return this }
    applyNormalMatrix(e) { for (let t = 0, n = this.count; t < n; t++) Xe.x = this.getX(t), Xe.y = this.getY(t), Xe.z = this.getZ(t), Xe.applyNormalMatrix(e), this.setXYZ(t, Xe.x, Xe.y, Xe.z); return this }
    transformDirection(e) { for (let t = 0, n = this.count; t < n; t++) Xe.x = this.getX(t), Xe.y = this.getY(t), Xe.z = this.getZ(t), Xe.transformDirection(e), this.setXYZ(t, Xe.x, Xe.y, Xe.z); return this }
    set(e, t = 0) { return this.array.set(e, t), this }
    getX(e) { return this.array[e * this.itemSize] }
    setX(e, t) { return this.array[e * this.itemSize] = t, this }
    getY(e) { return this.array[e * this.itemSize + 1] }
    setY(e, t) { return this.array[e * this.itemSize + 1] = t, this }
    getZ(e) { return this.array[e * this.itemSize + 2] }
    setZ(e, t) { return this.array[e * this.itemSize + 2] = t, this }
    getW(e) { return this.array[e * this.itemSize + 3] }
    setW(e, t) { return this.array[e * this.itemSize + 3] = t, this }
    setXY(e, t, n) { return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this }
    setXYZ(e, t, n, i) { return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this }
    setXYZW(e, t, n, i, r) { return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this }
    onUpload(e) { return this.onUploadCallback = e, this }
    clone() { return new this.constructor(this.array, this.itemSize).copy(this) }
    toJSON() { const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.prototype.slice.call(this.array), normalized: this.normalized }; return this.name !== "" && (e.name = this.name), this.usage !== Si && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e } }
st.prototype.isBufferAttribute = !0;
class xa extends st { constructor(e, t, n) { super(new Uint16Array(e), t, n) } }
class _a extends st { constructor(e, t, n) { super(new Uint32Array(e), t, n) } }
class wh extends st { constructor(e, t, n) { super(new Uint16Array(e), t, n) } }
wh.prototype.isFloat16BufferAttribute = !0;
class Ye extends st { constructor(e, t, n) { super(new Float32Array(e), t, n) } }
let Sh = 0;
const Tt = new be,
    Rs = new Ue,
    Jn = new S,
    St = new Lt,
    Ci = new Lt,
    at = new S;
class qe extends nn { constructor() { super();
        Object.defineProperty(this, "id", { value: Sh++ }), this.uuid = Ot(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {} }
    getIndex() { return this.index }
    setIndex(e) { return Array.isArray(e) ? this.index = new(ra(e) ? _a : xa)(e, 1) : this.index = e, this }
    getAttribute(e) { return this.attributes[e] }
    setAttribute(e, t) { return this.attributes[e] = t, this }
    deleteAttribute(e) { return delete this.attributes[e], this }
    hasAttribute(e) { return this.attributes[e] !== void 0 }
    addGroup(e, t, n = 0) { this.groups.push({ start: e, count: t, materialIndex: n }) }
    clearGroups() { this.groups = [] }
    setDrawRange(e, t) { this.drawRange.start = e, this.drawRange.count = t }
    applyMatrix4(e) { const t = this.attributes.position;
        t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0); const n = this.attributes.normal; if (n !== void 0) { const r = new ct().getNormalMatrix(e);
            n.applyNormalMatrix(r), n.needsUpdate = !0 } const i = this.attributes.tangent; return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this }
    applyQuaternion(e) { return Tt.makeRotationFromQuaternion(e), this.applyMatrix4(Tt), this }
    rotateX(e) { return Tt.makeRotationX(e), this.applyMatrix4(Tt), this }
    rotateY(e) { return Tt.makeRotationY(e), this.applyMatrix4(Tt), this }
    rotateZ(e) { return Tt.makeRotationZ(e), this.applyMatrix4(Tt), this }
    translate(e, t, n) { return Tt.makeTranslation(e, t, n), this.applyMatrix4(Tt), this }
    scale(e, t, n) { return Tt.makeScale(e, t, n), this.applyMatrix4(Tt), this }
    lookAt(e) { return Rs.lookAt(e), Rs.updateMatrix(), this.applyMatrix4(Rs.matrix), this }
    center() { return this.computeBoundingBox(), this.boundingBox.getCenter(Jn).negate(), this.translate(Jn.x, Jn.y, Jn.z), this }
    setFromPoints(e) { const t = []; for (let n = 0, i = e.length; n < i; n++) { const r = e[n];
            t.push(r.x, r.y, r.z || 0) } return this.setAttribute("position", new Ye(t, 3)), this }
    computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new Lt); const e = this.attributes.position,
            t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new S(-1 / 0, -1 / 0, -1 / 0), new S(1 / 0, 1 / 0, 1 / 0)); return } if (e !== void 0) { if (this.boundingBox.setFromBufferAttribute(e), t)
                for (let n = 0, i = t.length; n < i; n++) { const r = t[n];
                    St.setFromBufferAttribute(r), this.morphTargetsRelative ? (at.addVectors(this.boundingBox.min, St.min), this.boundingBox.expandByPoint(at), at.addVectors(this.boundingBox.max, St.max), this.boundingBox.expandByPoint(at)) : (this.boundingBox.expandByPoint(St.min), this.boundingBox.expandByPoint(St.max)) } } else this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this) }
    computeBoundingSphere() { this.boundingSphere === null && (this.boundingSphere = new kn); const e = this.attributes.position,
            t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new S, 1 / 0); return } if (e) { const n = this.boundingSphere.center; if (St.setFromBufferAttribute(e), t)
                for (let r = 0, o = t.length; r < o; r++) { const a = t[r];
                    Ci.setFromBufferAttribute(a), this.morphTargetsRelative ? (at.addVectors(St.min, Ci.min), St.expandByPoint(at), at.addVectors(St.max, Ci.max), St.expandByPoint(at)) : (St.expandByPoint(Ci.min), St.expandByPoint(Ci.max)) }
            St.getCenter(n); let i = 0; for (let r = 0, o = e.count; r < o; r++) at.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(at)); if (t)
                for (let r = 0, o = t.length; r < o; r++) { const a = t[r],
                        l = this.morphTargetsRelative; for (let c = 0, h = a.count; c < h; c++) at.fromBufferAttribute(a, c), l && (Jn.fromBufferAttribute(e, c), at.add(Jn)), i = Math.max(i, n.distanceToSquared(at)) }
            this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this) } }
    computeTangents() { const e = this.index,
            t = this.attributes; if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) { console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"); return } const n = e.array,
            i = t.position.array,
            r = t.normal.array,
            o = t.uv.array,
            a = i.length / 3;
        t.tangent === void 0 && this.setAttribute("tangent", new st(new Float32Array(4 * a), 4)); const l = t.tangent.array,
            c = [],
            h = []; for (let $ = 0; $ < a; $++) c[$] = new S, h[$] = new S; const u = new S,
            d = new S,
            f = new S,
            g = new J,
            x = new J,
            v = new J,
            m = new S,
            p = new S;

        function T($, _, L) { u.fromArray(i, $ * 3), d.fromArray(i, _ * 3), f.fromArray(i, L * 3), g.fromArray(o, $ * 2), x.fromArray(o, _ * 2), v.fromArray(o, L * 2), d.sub(u), f.sub(u), x.sub(g), v.sub(g); const D = 1 / (x.x * v.y - v.x * x.y);!isFinite(D) || (m.copy(d).multiplyScalar(v.y).addScaledVector(f, -x.y).multiplyScalar(D), p.copy(f).multiplyScalar(x.x).addScaledVector(d, -v.x).multiplyScalar(D), c[$].add(m), c[_].add(m), c[L].add(m), h[$].add(p), h[_].add(p), h[L].add(p)) } let y = this.groups;
        y.length === 0 && (y = [{ start: 0, count: n.length }]); for (let $ = 0, _ = y.length; $ < _; ++$) { const L = y[$],
                D = L.start,
                N = L.count; for (let B = D, F = D + N; B < F; B += 3) T(n[B + 0], n[B + 1], n[B + 2]) } const w = new S,
            R = new S,
            P = new S,
            Z = new S;

        function oe($) { P.fromArray(r, $ * 3), Z.copy(P); const _ = c[$];
            w.copy(_), w.sub(P.multiplyScalar(P.dot(_))).normalize(), R.crossVectors(Z, _); const D = R.dot(h[$]) < 0 ? -1 : 1;
            l[$ * 4] = w.x, l[$ * 4 + 1] = w.y, l[$ * 4 + 2] = w.z, l[$ * 4 + 3] = D } for (let $ = 0, _ = y.length; $ < _; ++$) { const L = y[$],
                D = L.start,
                N = L.count; for (let B = D, F = D + N; B < F; B += 3) oe(n[B + 0]), oe(n[B + 1]), oe(n[B + 2]) } }
    computeVertexNormals() { const e = this.index,
            t = this.getAttribute("position"); if (t !== void 0) { let n = this.getAttribute("normal"); if (n === void 0) n = new st(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
            else
                for (let d = 0, f = n.count; d < f; d++) n.setXYZ(d, 0, 0, 0); const i = new S,
                r = new S,
                o = new S,
                a = new S,
                l = new S,
                c = new S,
                h = new S,
                u = new S; if (e)
                for (let d = 0, f = e.count; d < f; d += 3) { const g = e.getX(d + 0),
                        x = e.getX(d + 1),
                        v = e.getX(d + 2);
                    i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, x), o.fromBufferAttribute(t, v), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), a.fromBufferAttribute(n, g), l.fromBufferAttribute(n, x), c.fromBufferAttribute(n, v), a.add(h), l.add(h), c.add(h), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(x, l.x, l.y, l.z), n.setXYZ(v, c.x, c.y, c.z) } else
                    for (let d = 0, f = t.count; d < f; d += 3) i.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
            this.normalizeNormals(), n.needsUpdate = !0 } }
    merge(e, t) { if (!(e && e.isBufferGeometry)) { console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e); return }
        t === void 0 && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.")); const n = this.attributes; for (const i in n) { if (e.attributes[i] === void 0) continue; const o = n[i].array,
                a = e.attributes[i],
                l = a.array,
                c = a.itemSize * t,
                h = Math.min(l.length, o.length - c); for (let u = 0, d = c; u < h; u++, d++) o[d] = l[u] } return this }
    normalizeNormals() { const e = this.attributes.normal; for (let t = 0, n = e.count; t < n; t++) at.fromBufferAttribute(e, t), at.normalize(), e.setXYZ(t, at.x, at.y, at.z) }
    toNonIndexed() {
        function e(a, l) { const c = a.array,
                h = a.itemSize,
                u = a.normalized,
                d = new c.constructor(l.length * h); let f = 0,
                g = 0; for (let x = 0, v = l.length; x < v; x++) { a.isInterleavedBufferAttribute ? f = l[x] * a.data.stride + a.offset : f = l[x] * h; for (let m = 0; m < h; m++) d[g++] = c[f++] } return new st(d, h, u) } if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; const t = new qe,
            n = this.index.array,
            i = this.attributes; for (const a in i) { const l = i[a],
                c = e(l, n);
            t.setAttribute(a, c) } const r = this.morphAttributes; for (const a in r) { const l = [],
                c = r[a]; for (let h = 0, u = c.length; h < u; h++) { const d = c[h],
                    f = e(d, n);
                l.push(f) }
            t.morphAttributes[a] = l }
        t.morphTargetsRelative = this.morphTargetsRelative; const o = this.groups; for (let a = 0, l = o.length; a < l; a++) { const c = o[a];
            t.addGroup(c.start, c.count, c.materialIndex) } return t }
    toJSON() { const e = { metadata: { version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) { const l = this.parameters; for (const c in l) l[c] !== void 0 && (e[c] = l[c]); return e }
        e.data = { attributes: {} }; const t = this.index;
        t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) }); const n = this.attributes; for (const l in n) { const c = n[l];
            e.data.attributes[l] = c.toJSON(e.data) } const i = {}; let r = !1; for (const l in this.morphAttributes) { const c = this.morphAttributes[l],
                h = []; for (let u = 0, d = c.length; u < d; u++) { const f = c[u];
                h.push(f.toJSON(e.data)) }
            h.length > 0 && (i[l] = h, r = !0) }
        r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative); const o = this.groups;
        o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o))); const a = this.boundingSphere; return a !== null && (e.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), e }
    clone() { return new this.constructor().copy(this) }
    copy(e) { this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null; const t = {};
        this.name = e.name; const n = e.index;
        n !== null && this.setIndex(n.clone(t)); const i = e.attributes; for (const c in i) { const h = i[c];
            this.setAttribute(c, h.clone(t)) } const r = e.morphAttributes; for (const c in r) { const h = [],
                u = r[c]; for (let d = 0, f = u.length; d < f; d++) h.push(u[d].clone(t));
            this.morphAttributes[c] = h }
        this.morphTargetsRelative = e.morphTargetsRelative; const o = e.groups; for (let c = 0, h = o.length; c < h; c++) { const u = o[c];
            this.addGroup(u.start, u.count, u.materialIndex) } const a = e.boundingBox;
        a !== null && (this.boundingBox = a.clone()); const l = e.boundingSphere; return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this }
    dispose() { this.dispatchEvent({ type: "dispose" }) } }
qe.prototype.isBufferGeometry = !0;
const va = new be,
    $n = new Wn,
    Ls = new kn,
    ln = new S,
    cn = new S,
    hn = new S,
    Ps = new S,
    Ds = new S,
    Is = new S,
    ur = new S,
    dr = new S,
    fr = new S,
    pr = new J,
    mr = new J,
    gr = new J,
    Fs = new S,
    xr = new S;
class _t extends Ue { constructor(e = new qe, t = new Cs) { super();
        this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets() }
    copy(e) { return super.copy(e), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this }
    updateMorphTargets() { const e = this.geometry; if (e.isBufferGeometry) { const t = e.morphAttributes,
                n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, o = i.length; r < o; r++) { const a = i[r].name || String(r);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r } } } } else { const t = e.morphTargets;
            t !== void 0 && t.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.") } }
    raycast(e, t) { const n = this.geometry,
            i = this.material,
            r = this.matrixWorld; if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), Ls.copy(n.boundingSphere), Ls.applyMatrix4(r), e.ray.intersectsSphere(Ls) === !1) || (va.copy(r).invert(), $n.copy(e.ray).applyMatrix4(va), n.boundingBox !== null && $n.intersectsBox(n.boundingBox) === !1)) return; let o; if (n.isBufferGeometry) { const a = n.index,
                l = n.attributes.position,
                c = n.morphAttributes.position,
                h = n.morphTargetsRelative,
                u = n.attributes.uv,
                d = n.attributes.uv2,
                f = n.groups,
                g = n.drawRange; if (a !== null)
                if (Array.isArray(i))
                    for (let x = 0, v = f.length; x < v; x++) { const m = f[x],
                            p = i[m.materialIndex],
                            T = Math.max(m.start, g.start),
                            y = Math.min(a.count, Math.min(m.start + m.count, g.start + g.count)); for (let w = T, R = y; w < R; w += 3) { const P = a.getX(w),
                                Z = a.getX(w + 1),
                                oe = a.getX(w + 2);
                            o = _r(this, p, e, $n, l, c, h, u, d, P, Z, oe), o && (o.faceIndex = Math.floor(w / 3), o.face.materialIndex = m.materialIndex, t.push(o)) } } else { const x = Math.max(0, g.start),
                            v = Math.min(a.count, g.start + g.count); for (let m = x, p = v; m < p; m += 3) { const T = a.getX(m),
                                y = a.getX(m + 1),
                                w = a.getX(m + 2);
                            o = _r(this, i, e, $n, l, c, h, u, d, T, y, w), o && (o.faceIndex = Math.floor(m / 3), t.push(o)) } } else if (l !== void 0)
                        if (Array.isArray(i))
                            for (let x = 0, v = f.length; x < v; x++) { const m = f[x],
                                    p = i[m.materialIndex],
                                    T = Math.max(m.start, g.start),
                                    y = Math.min(l.count, Math.min(m.start + m.count, g.start + g.count)); for (let w = T, R = y; w < R; w += 3) { const P = w,
                                        Z = w + 1,
                                        oe = w + 2;
                                    o = _r(this, p, e, $n, l, c, h, u, d, P, Z, oe), o && (o.faceIndex = Math.floor(w / 3), o.face.materialIndex = m.materialIndex, t.push(o)) } } else { const x = Math.max(0, g.start),
                                    v = Math.min(l.count, g.start + g.count); for (let m = x, p = v; m < p; m += 3) { const T = m,
                                        y = m + 1,
                                        w = m + 2;
                                    o = _r(this, i, e, $n, l, c, h, u, d, T, y, w), o && (o.faceIndex = Math.floor(m / 3), t.push(o)) } } } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.") } }
_t.prototype.isMesh = !0;

function Eh(s, e, t, n, i, r, o, a) { let l; if (e.side === it ? l = n.intersectTriangle(o, r, i, !0, a) : l = n.intersectTriangle(i, r, o, e.side !== Ln, a), l === null) return null;
    xr.copy(a), xr.applyMatrix4(s.matrixWorld); const c = t.ray.origin.distanceTo(xr); return c < t.near || c > t.far ? null : { distance: c, point: xr.clone(), object: s } }

function _r(s, e, t, n, i, r, o, a, l, c, h, u) { ln.fromBufferAttribute(i, c), cn.fromBufferAttribute(i, h), hn.fromBufferAttribute(i, u); const d = s.morphTargetInfluences; if (r && d) { ur.set(0, 0, 0), dr.set(0, 0, 0), fr.set(0, 0, 0); for (let g = 0, x = r.length; g < x; g++) { const v = d[g],
                m = r[g];
            v !== 0 && (Ps.fromBufferAttribute(m, c), Ds.fromBufferAttribute(m, h), Is.fromBufferAttribute(m, u), o ? (ur.addScaledVector(Ps, v), dr.addScaledVector(Ds, v), fr.addScaledVector(Is, v)) : (ur.addScaledVector(Ps.sub(ln), v), dr.addScaledVector(Ds.sub(cn), v), fr.addScaledVector(Is.sub(hn), v))) }
        ln.add(ur), cn.add(dr), hn.add(fr) }
    s.isSkinnedMesh && (s.boneTransform(c, ln), s.boneTransform(h, cn), s.boneTransform(u, hn)); const f = Eh(s, e, t, n, ln, cn, hn, Fs); if (f) { a && (pr.fromBufferAttribute(a, c), mr.fromBufferAttribute(a, h), gr.fromBufferAttribute(a, u), f.uv = et.getUV(Fs, ln, cn, hn, pr, mr, gr, new J)), l && (pr.fromBufferAttribute(l, c), mr.fromBufferAttribute(l, h), gr.fromBufferAttribute(l, u), f.uv2 = et.getUV(Fs, ln, cn, hn, pr, mr, gr, new J)); const g = { a: c, b: h, c: u, normal: new S, materialIndex: 0 };
        et.getNormal(ln, cn, hn, g.normal), f.face = g } return f }
class Ri extends qe { constructor(e = 1, t = 1, n = 1, i = 1, r = 1, o = 1) { super();
        this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: r, depthSegments: o }; const a = this;
        i = Math.floor(i), r = Math.floor(r), o = Math.floor(o); const l = [],
            c = [],
            h = [],
            u = []; let d = 0,
            f = 0;
        g("z", "y", "x", -1, -1, n, t, e, o, r, 0), g("z", "y", "x", 1, -1, n, t, -e, o, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, o, 2), g("x", "z", "y", 1, -1, e, n, -t, i, o, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new Ye(c, 3)), this.setAttribute("normal", new Ye(h, 3)), this.setAttribute("uv", new Ye(u, 2));

        function g(x, v, m, p, T, y, w, R, P, Z, oe) { const $ = y / P,
                _ = w / Z,
                L = y / 2,
                D = w / 2,
                N = R / 2,
                B = P + 1,
                F = Z + 1; let q = 0,
                K = 0; const ue = new S; for (let k = 0; k < F; k++) { const Y = k * _ - D; for (let se = 0; se < B; se++) { const fe = se * $ - L;
                    ue[x] = fe * p, ue[v] = Y * T, ue[m] = N, c.push(ue.x, ue.y, ue.z), ue[x] = 0, ue[v] = 0, ue[m] = R > 0 ? 1 : -1, h.push(ue.x, ue.y, ue.z), u.push(se / P), u.push(1 - k / Z), q += 1 } } for (let k = 0; k < Z; k++)
                for (let Y = 0; Y < P; Y++) { const se = d + Y + B * k,
                        fe = d + Y + B * (k + 1),
                        xe = d + (Y + 1) + B * (k + 1),
                        U = d + (Y + 1) + B * k;
                    l.push(se, fe, U), l.push(fe, xe, U), K += 6 }
            a.addGroup(f, K, oe), f += K, d += q } }
    static fromJSON(e) { return new Ri(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments) } }

function Kn(s) { const e = {}; for (const t in s) { e[t] = {}; for (const n in s[t]) { const i = s[t][n];
            i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i } } return e }

function pt(s) { const e = {}; for (let t = 0; t < s.length; t++) { const n = Kn(s[t]); for (const i in n) e[i] = n[i] } return e }
const Th = { clone: Kn, merge: pt };
var Ah = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
    Ch = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class En extends ft { constructor(e) { super();
        this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = Ah, this.fragmentShader = Ch, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && (e.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e)) }
    copy(e) { return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Kn(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this }
    toJSON(e) { const t = super.toJSON(e);
        t.glslVersion = this.glslVersion, t.uniforms = {}; for (const i in this.uniforms) { const o = this.uniforms[i].value;
            o && o.isTexture ? t.uniforms[i] = { type: "t", value: o.toJSON(e).uuid } : o && o.isColor ? t.uniforms[i] = { type: "c", value: o.getHex() } : o && o.isVector2 ? t.uniforms[i] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? t.uniforms[i] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? t.uniforms[i] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? t.uniforms[i] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? t.uniforms[i] = { type: "m4", value: o.toArray() } : t.uniforms[i] = { value: o } }
        Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader; const n = {}; for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0); return Object.keys(n).length > 0 && (t.extensions = n), t } }
En.prototype.isShaderMaterial = !0;
class Ns extends Ue { constructor() { super();
        this.type = "Camera", this.matrixWorldInverse = new be, this.projectionMatrix = new be, this.projectionMatrixInverse = new be }
    copy(e, t) { return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this }
    getWorldDirection(e) { this.updateWorldMatrix(!0, !1); const t = this.matrixWorld.elements; return e.set(-t[8], -t[9], -t[10]).normalize() }
    updateMatrixWorld(e) { super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert() }
    updateWorldMatrix(e, t) { super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert() }
    clone() { return new this.constructor().copy(this) } }
Ns.prototype.isCamera = !0;
class yt extends Ns { constructor(e = 50, t = 1, n = .1, i = 2e3) { super();
        this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() }
    copy(e, t) { return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this }
    setFocalLength(e) { const t = .5 * this.getFilmHeight() / e;
        this.fov = us * 2 * Math.atan(t), this.updateProjectionMatrix() }
    getFocalLength() { const e = Math.tan(hs * .5 * this.fov); return .5 * this.getFilmHeight() / e }
    getEffectiveFOV() { return us * 2 * Math.atan(Math.tan(hs * .5 * this.fov) / this.zoom) }
    getFilmWidth() { return this.filmGauge * Math.min(this.aspect, 1) }
    getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1) }
    setViewOffset(e, t, n, i, r, o) { this.aspect = e / t, this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix() }
    clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() }
    updateProjectionMatrix() { const e = this.near; let t = e * Math.tan(hs * .5 * this.fov) / this.zoom,
            n = 2 * t,
            i = this.aspect * n,
            r = -.5 * i; const o = this.view; if (this.view !== null && this.view.enabled) { const l = o.fullWidth,
                c = o.fullHeight;
            r += o.offsetX * i / l, t -= o.offsetY * n / c, i *= o.width / l, n *= o.height / c } const a = this.filmOffset;
        a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() }
    toJSON(e) { const t = super.toJSON(e); return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t } }
yt.prototype.isPerspectiveCamera = !0;
const Qn = 90,
    ei = 1;
class Bs extends Ue { constructor(e, t, n) { super(); if (this.type = "CubeCamera", n.isWebGLCubeRenderTarget !== !0) { console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."); return }
        this.renderTarget = n; const i = new yt(Qn, ei, e, t);
        i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new S(1, 0, 0)), this.add(i); const r = new yt(Qn, ei, e, t);
        r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new S(-1, 0, 0)), this.add(r); const o = new yt(Qn, ei, e, t);
        o.layers = this.layers, o.up.set(0, 0, 1), o.lookAt(new S(0, 1, 0)), this.add(o); const a = new yt(Qn, ei, e, t);
        a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new S(0, -1, 0)), this.add(a); const l = new yt(Qn, ei, e, t);
        l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new S(0, 0, 1)), this.add(l); const c = new yt(Qn, ei, e, t);
        c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new S(0, 0, -1)), this.add(c) }
    update(e, t) { this.parent === null && this.updateMatrixWorld(); const n = this.renderTarget,
            [i, r, o, a, l, c] = this.children,
            h = e.xr.enabled,
            u = e.getRenderTarget();
        e.xr.enabled = !1; const d = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, r), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, l), n.texture.generateMipmaps = d, e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(u), e.xr.enabled = h, n.texture.needsPMREMUpdate = !0 } }
class vr extends ot { constructor(e, t, n, i, r, o, a, l, c, h) { e = e !== void 0 ? e : [], t = t !== void 0 ? t : Mi;
        super(e, t, n, i, r, o, a, l, c, h);
        this.flipY = !1 }
    get images() { return this.image }
    set images(e) { this.image = e } }
vr.prototype.isCubeTexture = !0;
class ya extends Et { constructor(e, t, n) { Number.isInteger(t) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), t = n);
        super(e, e, t);
        t = t || {}, this.texture = new vr(void 0, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : ut }
    fromEquirectangularTexture(e, t) { this.texture.type = t.type, this.texture.format = gt, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter; const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` },
            i = new Ri(5, 5, 5),
            r = new En({ name: "CubemapFromEquirect", uniforms: Kn(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: it, blending: Kt });
        r.uniforms.tEquirect.value = t; const o = new _t(i, r),
            a = t.minFilter; return t.minFilter === Ji && (t.minFilter = ut), new Bs(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this }
    clear(e, t, n, i) { const r = e.getRenderTarget(); for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, i);
        e.setRenderTarget(r) } }
ya.prototype.isWebGLCubeRenderTarget = !0;
const zs = new S,
    Rh = new S,
    Lh = new ct;
class Ut { constructor(e = new S(1, 0, 0), t = 0) { this.normal = e, this.constant = t }
    set(e, t) { return this.normal.copy(e), this.constant = t, this }
    setComponents(e, t, n, i) { return this.normal.set(e, t, n), this.constant = i, this }
    setFromNormalAndCoplanarPoint(e, t) { return this.normal.copy(e), this.constant = -t.dot(this.normal), this }
    setFromCoplanarPoints(e, t, n) { const i = zs.subVectors(n, t).cross(Rh.subVectors(e, t)).normalize(); return this.setFromNormalAndCoplanarPoint(i, e), this }
    copy(e) { return this.normal.copy(e.normal), this.constant = e.constant, this }
    normalize() { const e = 1 / this.normal.length(); return this.normal.multiplyScalar(e), this.constant *= e, this }
    negate() { return this.constant *= -1, this.normal.negate(), this }
    distanceToPoint(e) { return this.normal.dot(e) + this.constant }
    distanceToSphere(e) { return this.distanceToPoint(e.center) - e.radius }
    projectPoint(e, t) { return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e) }
    intersectLine(e, t) { const n = e.delta(zs),
            i = this.normal.dot(n); if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null; const r = -(e.start.dot(this.normal) + this.constant) / i; return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start) }
    intersectsLine(e) { const t = this.distanceToPoint(e.start),
            n = this.distanceToPoint(e.end); return t < 0 && n > 0 || n < 0 && t > 0 }
    intersectsBox(e) { return e.intersectsPlane(this) }
    intersectsSphere(e) { return e.intersectsPlane(this) }
    coplanarPoint(e) { return e.copy(this.normal).multiplyScalar(-this.constant) }
    applyMatrix4(e, t) { const n = t || Lh.getNormalMatrix(e),
            i = this.coplanarPoint(zs).applyMatrix4(e),
            r = this.normal.applyMatrix3(n).normalize(); return this.constant = -i.dot(r), this }
    translate(e) { return this.constant -= e.dot(this.normal), this }
    equals(e) { return e.normal.equals(this.normal) && e.constant === this.constant }
    clone() { return new this.constructor().copy(this) } }
Ut.prototype.isPlane = !0;
const ti = new kn,
    yr = new S;
class Mr { constructor(e = new Ut, t = new Ut, n = new Ut, i = new Ut, r = new Ut, o = new Ut) { this.planes = [e, t, n, i, r, o] }
    set(e, t, n, i, r, o) { const a = this.planes; return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(o), this }
    copy(e) { const t = this.planes; for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]); return this }
    setFromProjectionMatrix(e) { const t = this.planes,
            n = e.elements,
            i = n[0],
            r = n[1],
            o = n[2],
            a = n[3],
            l = n[4],
            c = n[5],
            h = n[6],
            u = n[7],
            d = n[8],
            f = n[9],
            g = n[10],
            x = n[11],
            v = n[12],
            m = n[13],
            p = n[14],
            T = n[15]; return t[0].setComponents(a - i, u - l, x - d, T - v).normalize(), t[1].setComponents(a + i, u + l, x + d, T + v).normalize(), t[2].setComponents(a + r, u + c, x + f, T + m).normalize(), t[3].setComponents(a - r, u - c, x - f, T - m).normalize(), t[4].setComponents(a - o, u - h, x - g, T - p).normalize(), t[5].setComponents(a + o, u + h, x + g, T + p).normalize(), this }
    intersectsObject(e) { const t = e.geometry; return t.boundingSphere === null && t.computeBoundingSphere(), ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(ti) }
    intersectsSprite(e) { return ti.center.set(0, 0, 0), ti.radius = .7071067811865476, ti.applyMatrix4(e.matrixWorld), this.intersectsSphere(ti) }
    intersectsSphere(e) { const t = this.planes,
            n = e.center,
            i = -e.radius; for (let r = 0; r < 6; r++)
            if (t[r].distanceToPoint(n) < i) return !1;
        return !0 }
    intersectsBox(e) { const t = this.planes; for (let n = 0; n < 6; n++) { const i = t[n]; if (yr.x = i.normal.x > 0 ? e.max.x : e.min.x, yr.y = i.normal.y > 0 ? e.max.y : e.min.y, yr.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(yr) < 0) return !1 } return !0 }
    containsPoint(e) { const t = this.planes; for (let n = 0; n < 6; n++)
            if (t[n].distanceToPoint(e) < 0) return !1;
        return !0 }
    clone() { return new this.constructor().copy(this) } }

function Ma() { let s = null,
        e = !1,
        t = null,
        n = null;

    function i(r, o) { t(r, o), n = s.requestAnimationFrame(i) } return { start: function() { e !== !0 && t !== null && (n = s.requestAnimationFrame(i), e = !0) }, stop: function() { s.cancelAnimationFrame(n), e = !1 }, setAnimationLoop: function(r) { t = r }, setContext: function(r) { s = r } } }

function Ph(s, e) { const t = e.isWebGL2,
        n = new WeakMap;

    function i(c, h) { const u = c.array,
            d = c.usage,
            f = s.createBuffer();
        s.bindBuffer(h, f), s.bufferData(h, u, d), c.onUploadCallback(); let g = 5126; return u instanceof Float32Array ? g = 5126 : u instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : u instanceof Uint16Array ? c.isFloat16BufferAttribute ? t ? g = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : g = 5123 : u instanceof Int16Array ? g = 5122 : u instanceof Uint32Array ? g = 5125 : u instanceof Int32Array ? g = 5124 : u instanceof Int8Array ? g = 5120 : (u instanceof Uint8Array || u instanceof Uint8ClampedArray) && (g = 5121), { buffer: f, type: g, bytesPerElement: u.BYTES_PER_ELEMENT, version: c.version } }

    function r(c, h, u) { const d = h.array,
            f = h.updateRange;
        s.bindBuffer(u, c), f.count === -1 ? s.bufferSubData(u, 0, d) : (t ? s.bufferSubData(u, f.offset * d.BYTES_PER_ELEMENT, d, f.offset, f.count) : s.bufferSubData(u, f.offset * d.BYTES_PER_ELEMENT, d.subarray(f.offset, f.offset + f.count)), f.count = -1) }

    function o(c) { return c.isInterleavedBufferAttribute && (c = c.data), n.get(c) }

    function a(c) { c.isInterleavedBufferAttribute && (c = c.data); const h = n.get(c);
        h && (s.deleteBuffer(h.buffer), n.delete(c)) }

    function l(c, h) { if (c.isGLBufferAttribute) { const d = n.get(c);
            (!d || d.version < c.version) && n.set(c, { buffer: c.buffer, type: c.type, bytesPerElement: c.elementSize, version: c.version }); return }
        c.isInterleavedBufferAttribute && (c = c.data); const u = n.get(c);
        u === void 0 ? n.set(c, i(c, h)) : u.version < c.version && (r(u.buffer, c, h), u.version = c.version) } return { get: o, remove: a, update: l } }
class Os extends qe { constructor(e = 1, t = 1, n = 1, i = 1) { super();
        this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i }; const r = e / 2,
            o = t / 2,
            a = Math.floor(n),
            l = Math.floor(i),
            c = a + 1,
            h = l + 1,
            u = e / a,
            d = t / l,
            f = [],
            g = [],
            x = [],
            v = []; for (let m = 0; m < h; m++) { const p = m * d - o; for (let T = 0; T < c; T++) { const y = T * u - r;
                g.push(y, -p, 0), x.push(0, 0, 1), v.push(T / a), v.push(1 - m / l) } } for (let m = 0; m < l; m++)
            for (let p = 0; p < a; p++) { const T = p + c * m,
                    y = p + c * (m + 1),
                    w = p + 1 + c * (m + 1),
                    R = p + 1 + c * m;
                f.push(T, y, R), f.push(y, w, R) }
        this.setIndex(f), this.setAttribute("position", new Ye(g, 3)), this.setAttribute("normal", new Ye(x, 3)), this.setAttribute("uv", new Ye(v, 2)) }
    static fromJSON(e) { return new Os(e.width, e.height, e.widthSegments, e.heightSegments) } }
var Dh = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
    Ih = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    Fh = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
    Nh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
    Bh = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
    zh = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
    Oh = "vec3 transformed = vec3( position );",
    Uh = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
    Hh = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
    Vh = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
    Gh = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
    kh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
    Wh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
    qh = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
    Xh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
    jh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
    Yh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
    Zh = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
    Jh = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
    $h = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
    Kh = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
    Qh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
    eu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
    tu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
    nu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
    iu = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    ru = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
    su = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
    ou = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
    au = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
    lu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
    cu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
    hu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
    uu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
    du = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
    fu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
    pu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,
    mu = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
    gu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
    xu = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,
    _u = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
    vu = `#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
    yu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
    Mu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,
    bu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
    wu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,
    Su = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,
    Eu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
    Tu = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
    Au = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
    Cu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
    Ru = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
    Lu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
    Pu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
    Du = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
    Iu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
    Fu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
    Nu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
    Bu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    zu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
    Ou = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
    Uu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
    Hu = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
    Vu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
    Gu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
    ku = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
    Wu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    qu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    Xu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
    ju = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
    Yu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
    Zu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
    Ju = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
    $u = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
    Ku = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
    Qu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
    ed = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
    td = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
    nd = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
    id = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
    rd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
    sd = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
    od = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
    ad = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
    ld = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
    cd = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
    hd = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,
    ud = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
    dd = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
    fd = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
    pd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
    md = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
    gd = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
    xd = `#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,
    _d = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
    vd = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
    yd = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
    Md = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
    bd = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
    wd = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
    Sd = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
    Ed = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Td = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
    Ad = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    Cd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
    Rd = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    Ld = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
    Pd = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
    Dd = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
    Id = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
    Fd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
    Nd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    Bd = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
    zd = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    Od = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
    Ud = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    Hd = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    Vd = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    Gd = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
    kd = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    Wd = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
    qd = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
    Xd = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    jd = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    Yd = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
    Zd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    Jd = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    $d = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    Kd = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
    Qd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    ef = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    tf = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
    nf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
    rf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
    Pe = { alphamap_fragment: Dh, alphamap_pars_fragment: Ih, alphatest_fragment: Fh, alphatest_pars_fragment: Nh, aomap_fragment: Bh, aomap_pars_fragment: zh, begin_vertex: Oh, beginnormal_vertex: Uh, bsdfs: Hh, bumpmap_pars_fragment: Vh, clipping_planes_fragment: Gh, clipping_planes_pars_fragment: kh, clipping_planes_pars_vertex: Wh, clipping_planes_vertex: qh, color_fragment: Xh, color_pars_fragment: jh, color_pars_vertex: Yh, color_vertex: Zh, common: Jh, cube_uv_reflection_fragment: $h, defaultnormal_vertex: Kh, displacementmap_pars_vertex: Qh, displacementmap_vertex: eu, emissivemap_fragment: tu, emissivemap_pars_fragment: nu, encodings_fragment: iu, encodings_pars_fragment: ru, envmap_fragment: su, envmap_common_pars_fragment: ou, envmap_pars_fragment: au, envmap_pars_vertex: lu, envmap_physical_pars_fragment: vu, envmap_vertex: cu, fog_vertex: hu, fog_pars_vertex: uu, fog_fragment: du, fog_pars_fragment: fu, gradientmap_pars_fragment: pu, lightmap_fragment: mu, lightmap_pars_fragment: gu, lights_lambert_vertex: xu, lights_pars_begin: _u, lights_toon_fragment: yu, lights_toon_pars_fragment: Mu, lights_phong_fragment: bu, lights_phong_pars_fragment: wu, lights_physical_fragment: Su, lights_physical_pars_fragment: Eu, lights_fragment_begin: Tu, lights_fragment_maps: Au, lights_fragment_end: Cu, logdepthbuf_fragment: Ru, logdepthbuf_pars_fragment: Lu, logdepthbuf_pars_vertex: Pu, logdepthbuf_vertex: Du, map_fragment: Iu, map_pars_fragment: Fu, map_particle_fragment: Nu, map_particle_pars_fragment: Bu, metalnessmap_fragment: zu, metalnessmap_pars_fragment: Ou, morphnormal_vertex: Uu, morphtarget_pars_vertex: Hu, morphtarget_vertex: Vu, normal_fragment_begin: Gu, normal_fragment_maps: ku, normal_pars_fragment: Wu, normal_pars_vertex: qu, normal_vertex: Xu, normalmap_pars_fragment: ju, clearcoat_normal_fragment_begin: Yu, clearcoat_normal_fragment_maps: Zu, clearcoat_pars_fragment: Ju, output_fragment: $u, packing: Ku, premultiplied_alpha_fragment: Qu, project_vertex: ed, dithering_fragment: td, dithering_pars_fragment: nd, roughnessmap_fragment: id, roughnessmap_pars_fragment: rd, shadowmap_pars_fragment: sd, shadowmap_pars_vertex: od, shadowmap_vertex: ad, shadowmask_pars_fragment: ld, skinbase_vertex: cd, skinning_pars_vertex: hd, skinning_vertex: ud, skinnormal_vertex: dd, specularmap_fragment: fd, specularmap_pars_fragment: pd, tonemapping_fragment: md, tonemapping_pars_fragment: gd, transmission_fragment: xd, transmission_pars_fragment: _d, uv_pars_fragment: vd, uv_pars_vertex: yd, uv_vertex: Md, uv2_pars_fragment: bd, uv2_pars_vertex: wd, uv2_vertex: Sd, worldpos_vertex: Ed, background_vert: Td, background_frag: Ad, cube_vert: Cd, cube_frag: Rd, depth_vert: Ld, depth_frag: Pd, distanceRGBA_vert: Dd, distanceRGBA_frag: Id, equirect_vert: Fd, equirect_frag: Nd, linedashed_vert: Bd, linedashed_frag: zd, meshbasic_vert: Od, meshbasic_frag: Ud, meshlambert_vert: Hd, meshlambert_frag: Vd, meshmatcap_vert: Gd, meshmatcap_frag: kd, meshnormal_vert: Wd, meshnormal_frag: qd, meshphong_vert: Xd, meshphong_frag: jd, meshphysical_vert: Yd, meshphysical_frag: Zd, meshtoon_vert: Jd, meshtoon_frag: $d, points_vert: Kd, points_frag: Qd, shadow_vert: ef, shadow_frag: tf, sprite_vert: nf, sprite_frag: rf },
    ie = { common: { diffuse: { value: new ve(16777215) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new ct }, uv2Transform: { value: new ct }, alphaMap: { value: null }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } }, emissivemap: { emissiveMap: { value: null } }, bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalScale: { value: new J(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, roughnessmap: { roughnessMap: { value: null } }, metalnessmap: { metalnessMap: { value: null } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new ve(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotShadowMap: { value: [] }, spotShadowMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new ve(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaTest: { value: 0 }, uvTransform: { value: new ct } }, sprite: { diffuse: { value: new ve(16777215) }, opacity: { value: 1 }, center: { value: new J(.5, .5) }, rotation: { value: 0 }, map: { value: null }, alphaMap: { value: null }, alphaTest: { value: 0 }, uvTransform: { value: new ct } } },
    Ht = { basic: { uniforms: pt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.fog]), vertexShader: Pe.meshbasic_vert, fragmentShader: Pe.meshbasic_frag }, lambert: { uniforms: pt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.fog, ie.lights, { emissive: { value: new ve(0) } }]), vertexShader: Pe.meshlambert_vert, fragmentShader: Pe.meshlambert_frag }, phong: { uniforms: pt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, ie.lights, { emissive: { value: new ve(0) }, specular: { value: new ve(1118481) }, shininess: { value: 30 } }]), vertexShader: Pe.meshphong_vert, fragmentShader: Pe.meshphong_frag }, standard: { uniforms: pt([ie.common, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.roughnessmap, ie.metalnessmap, ie.fog, ie.lights, { emissive: { value: new ve(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Pe.meshphysical_vert, fragmentShader: Pe.meshphysical_frag }, toon: { uniforms: pt([ie.common, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.gradientmap, ie.fog, ie.lights, { emissive: { value: new ve(0) } }]), vertexShader: Pe.meshtoon_vert, fragmentShader: Pe.meshtoon_frag }, matcap: { uniforms: pt([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, { matcap: { value: null } }]), vertexShader: Pe.meshmatcap_vert, fragmentShader: Pe.meshmatcap_frag }, points: { uniforms: pt([ie.points, ie.fog]), vertexShader: Pe.points_vert, fragmentShader: Pe.points_frag }, dashed: { uniforms: pt([ie.common, ie.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Pe.linedashed_vert, fragmentShader: Pe.linedashed_frag }, depth: { uniforms: pt([ie.common, ie.displacementmap]), vertexShader: Pe.depth_vert, fragmentShader: Pe.depth_frag }, normal: { uniforms: pt([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, { opacity: { value: 1 } }]), vertexShader: Pe.meshnormal_vert, fragmentShader: Pe.meshnormal_frag }, sprite: { uniforms: pt([ie.sprite, ie.fog]), vertexShader: Pe.sprite_vert, fragmentShader: Pe.sprite_frag }, background: { uniforms: { uvTransform: { value: new ct }, t2D: { value: null } }, vertexShader: Pe.background_vert, fragmentShader: Pe.background_frag }, cube: { uniforms: pt([ie.envmap, { opacity: { value: 1 } }]), vertexShader: Pe.cube_vert, fragmentShader: Pe.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Pe.equirect_vert, fragmentShader: Pe.equirect_frag }, distanceRGBA: { uniforms: pt([ie.common, ie.displacementmap, { referencePosition: { value: new S }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Pe.distanceRGBA_vert, fragmentShader: Pe.distanceRGBA_frag }, shadow: { uniforms: pt([ie.lights, ie.fog, { color: { value: new ve(0) }, opacity: { value: 1 } }]), vertexShader: Pe.shadow_vert, fragmentShader: Pe.shadow_frag } };
Ht.physical = { uniforms: pt([Ht.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatNormalScale: { value: new J(1, 1) }, clearcoatNormalMap: { value: null }, sheen: { value: 0 }, sheenColor: { value: new ve(0) }, sheenColorMap: { value: null }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionSamplerSize: { value: new J }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, attenuationDistance: { value: 0 }, attenuationColor: { value: new ve(0) }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularColor: { value: new ve(1, 1, 1) }, specularColorMap: { value: null } }]), vertexShader: Pe.meshphysical_vert, fragmentShader: Pe.meshphysical_frag };

function sf(s, e, t, n, i, r) { const o = new ve(0); let a = i === !0 ? 0 : 1,
        l, c, h = null,
        u = 0,
        d = null;

    function f(x, v) { let m = !1,
            p = v.isScene === !0 ? v.background : null;
        p && p.isTexture && (p = e.get(p)); const T = s.xr,
            y = T.getSession && T.getSession();
        y && y.environmentBlendMode === "additive" && (p = null), p === null ? g(o, a) : p && p.isColor && (g(p, 1), m = !0), (s.autoClear || m) && s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil), p && (p.isCubeTexture || p.mapping === Zi) ? (c === void 0 && (c = new _t(new Ri(1, 1, 1), new En({ name: "BackgroundCubeMaterial", uniforms: Kn(Ht.cube.uniforms), vertexShader: Ht.cube.vertexShader, fragmentShader: Ht.cube.fragmentShader, side: it, depthTest: !1, depthWrite: !1, fog: !1 })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(w, R, P) { this.matrixWorld.copyPosition(P.matrixWorld) }, Object.defineProperty(c.material, "envMap", { get: function() { return this.uniforms.envMap.value } }), n.update(c)), c.material.uniforms.envMap.value = p, c.material.uniforms.flipEnvMap.value = p.isCubeTexture && p.isRenderTargetTexture === !1 ? -1 : 1, (h !== p || u !== p.version || d !== s.toneMapping) && (c.material.needsUpdate = !0, h = p, u = p.version, d = s.toneMapping), x.unshift(c, c.geometry, c.material, 0, 0, null)) : p && p.isTexture && (l === void 0 && (l = new _t(new Os(2, 2), new En({ name: "BackgroundMaterial", uniforms: Kn(Ht.background.uniforms), vertexShader: Ht.background.vertexShader, fragmentShader: Ht.background.fragmentShader, side: vi, depthTest: !1, depthWrite: !1, fog: !1 })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function() { return this.uniforms.t2D.value } }), n.update(l)), l.material.uniforms.t2D.value = p, p.matrixAutoUpdate === !0 && p.updateMatrix(), l.material.uniforms.uvTransform.value.copy(p.matrix), (h !== p || u !== p.version || d !== s.toneMapping) && (l.material.needsUpdate = !0, h = p, u = p.version, d = s.toneMapping), x.unshift(l, l.geometry, l.material, 0, 0, null)) }

    function g(x, v) { t.buffers.color.setClear(x.r, x.g, x.b, v, r) } return { getClearColor: function() { return o }, setClearColor: function(x, v = 1) { o.set(x), a = v, g(o, a) }, getClearAlpha: function() { return a }, setClearAlpha: function(x) { a = x, g(o, a) }, render: f } }

function of(s, e, t, n) { const i = s.getParameter(34921),
        r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
        o = n.isWebGL2 || r !== null,
        a = {},
        l = x(null); let c = l;

    function h(D, N, B, F, q) { let K = !1; if (o) { const ue = g(F, B, N);
            c !== ue && (c = ue, d(c.object)), K = v(F, q), K && m(F, q) } else { const ue = N.wireframe === !0;
            (c.geometry !== F.id || c.program !== B.id || c.wireframe !== ue) && (c.geometry = F.id, c.program = B.id, c.wireframe = ue, K = !0) }
        D.isInstancedMesh === !0 && (K = !0), q !== null && t.update(q, 34963), K && (P(D, N, B, F), q !== null && s.bindBuffer(34963, t.get(q).buffer)) }

    function u() { return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES() }

    function d(D) { return n.isWebGL2 ? s.bindVertexArray(D) : r.bindVertexArrayOES(D) }

    function f(D) { return n.isWebGL2 ? s.deleteVertexArray(D) : r.deleteVertexArrayOES(D) }

    function g(D, N, B) { const F = B.wireframe === !0; let q = a[D.id];
        q === void 0 && (q = {}, a[D.id] = q); let K = q[N.id];
        K === void 0 && (K = {}, q[N.id] = K); let ue = K[F]; return ue === void 0 && (ue = x(u()), K[F] = ue), ue }

    function x(D) { const N = [],
            B = [],
            F = []; for (let q = 0; q < i; q++) N[q] = 0, B[q] = 0, F[q] = 0; return { geometry: null, program: null, wireframe: !1, newAttributes: N, enabledAttributes: B, attributeDivisors: F, object: D, attributes: {}, index: null } }

    function v(D, N) { const B = c.attributes,
            F = D.attributes; let q = 0; for (const K in F) { const ue = B[K],
                k = F[K]; if (ue === void 0 || ue.attribute !== k || ue.data !== k.data) return !0;
            q++ } return c.attributesNum !== q || c.index !== N }

    function m(D, N) { const B = {},
            F = D.attributes; let q = 0; for (const K in F) { const ue = F[K],
                k = {};
            k.attribute = ue, ue.data && (k.data = ue.data), B[K] = k, q++ }
        c.attributes = B, c.attributesNum = q, c.index = N }

    function p() { const D = c.newAttributes; for (let N = 0, B = D.length; N < B; N++) D[N] = 0 }

    function T(D) { y(D, 0) }

    function y(D, N) { const B = c.newAttributes,
            F = c.enabledAttributes,
            q = c.attributeDivisors;
        B[D] = 1, F[D] === 0 && (s.enableVertexAttribArray(D), F[D] = 1), q[D] !== N && ((n.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](D, N), q[D] = N) }

    function w() { const D = c.newAttributes,
            N = c.enabledAttributes; for (let B = 0, F = N.length; B < F; B++) N[B] !== D[B] && (s.disableVertexAttribArray(B), N[B] = 0) }

    function R(D, N, B, F, q, K) { n.isWebGL2 === !0 && (B === 5124 || B === 5125) ? s.vertexAttribIPointer(D, N, B, q, K) : s.vertexAttribPointer(D, N, B, F, q, K) }

    function P(D, N, B, F) { if (n.isWebGL2 === !1 && (D.isInstancedMesh || F.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return;
        p(); const q = F.attributes,
            K = B.getAttributes(),
            ue = N.defaultAttributeValues; for (const k in K) { const Y = K[k]; if (Y.location >= 0) { let se = q[k]; if (se === void 0 && (k === "instanceMatrix" && D.instanceMatrix && (se = D.instanceMatrix), k === "instanceColor" && D.instanceColor && (se = D.instanceColor)), se !== void 0) { const fe = se.normalized,
                        xe = se.itemSize,
                        U = t.get(se); if (U === void 0) continue; const Fe = U.buffer,
                        ge = U.type,
                        Se = U.bytesPerElement; if (se.isInterleavedBufferAttribute) { const ce = se.data,
                            Ce = ce.stride,
                            we = se.offset; if (ce && ce.isInstancedInterleavedBuffer) { for (let X = 0; X < Y.locationSize; X++) y(Y.location + X, ce.meshPerAttribute);
                            D.isInstancedMesh !== !0 && F._maxInstanceCount === void 0 && (F._maxInstanceCount = ce.meshPerAttribute * ce.count) } else
                            for (let X = 0; X < Y.locationSize; X++) T(Y.location + X);
                        s.bindBuffer(34962, Fe); for (let X = 0; X < Y.locationSize; X++) R(Y.location + X, xe / Y.locationSize, ge, fe, Ce * Se, (we + xe / Y.locationSize * X) * Se) } else { if (se.isInstancedBufferAttribute) { for (let ce = 0; ce < Y.locationSize; ce++) y(Y.location + ce, se.meshPerAttribute);
                            D.isInstancedMesh !== !0 && F._maxInstanceCount === void 0 && (F._maxInstanceCount = se.meshPerAttribute * se.count) } else
                            for (let ce = 0; ce < Y.locationSize; ce++) T(Y.location + ce);
                        s.bindBuffer(34962, Fe); for (let ce = 0; ce < Y.locationSize; ce++) R(Y.location + ce, xe / Y.locationSize, ge, fe, xe * Se, xe / Y.locationSize * ce * Se) } } else if (ue !== void 0) { const fe = ue[k]; if (fe !== void 0) switch (fe.length) {
                        case 2:
                            s.vertexAttrib2fv(Y.location, fe); break;
                        case 3:
                            s.vertexAttrib3fv(Y.location, fe); break;
                        case 4:
                            s.vertexAttrib4fv(Y.location, fe); break;
                        default:
                            s.vertexAttrib1fv(Y.location, fe) } } } }
        w() }

    function Z() { _(); for (const D in a) { const N = a[D]; for (const B in N) { const F = N[B]; for (const q in F) f(F[q].object), delete F[q];
                delete N[B] }
            delete a[D] } }

    function oe(D) { if (a[D.id] === void 0) return; const N = a[D.id]; for (const B in N) { const F = N[B]; for (const q in F) f(F[q].object), delete F[q];
            delete N[B] }
        delete a[D.id] }

    function $(D) { for (const N in a) { const B = a[N]; if (B[D.id] === void 0) continue; const F = B[D.id]; for (const q in F) f(F[q].object), delete F[q];
            delete B[D.id] } }

    function _() { L(), c !== l && (c = l, d(c.object)) }

    function L() { l.geometry = null, l.program = null, l.wireframe = !1 } return { setup: h, reset: _, resetDefaultState: L, dispose: Z, releaseStatesOfGeometry: oe, releaseStatesOfProgram: $, initAttributes: p, enableAttribute: T, disableUnusedAttributes: w } }

function af(s, e, t, n) { const i = n.isWebGL2; let r;

    function o(c) { r = c }

    function a(c, h) { s.drawArrays(r, c, h), t.update(h, r, 1) }

    function l(c, h, u) { if (u === 0) return; let d, f; if (i) d = s, f = "drawArraysInstanced";
        else if (d = e.get("ANGLE_instanced_arrays"), f = "drawArraysInstancedANGLE", d === null) { console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); return }
        d[f](r, c, h, u), t.update(h, r, u) }
    this.setMode = o, this.render = a, this.renderInstances = l }

function lf(s, e, t) { let n;

    function i() { if (n !== void 0) return n; if (e.has("EXT_texture_filter_anisotropic") === !0) { const P = e.get("EXT_texture_filter_anisotropic");
            n = s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT) } else n = 0; return n }

    function r(P) { if (P === "highp") { if (s.getShaderPrecisionFormat(35633, 36338).precision > 0 && s.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
            P = "mediump" } return P === "mediump" && s.getShaderPrecisionFormat(35633, 36337).precision > 0 && s.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp" } const o = typeof WebGL2RenderingContext != "undefined" && s instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext != "undefined" && s instanceof WebGL2ComputeRenderingContext; let a = t.precision !== void 0 ? t.precision : "highp"; const l = r(a);
    l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a = l); const c = o || e.has("WEBGL_draw_buffers"),
        h = t.logarithmicDepthBuffer === !0,
        u = s.getParameter(34930),
        d = s.getParameter(35660),
        f = s.getParameter(3379),
        g = s.getParameter(34076),
        x = s.getParameter(34921),
        v = s.getParameter(36347),
        m = s.getParameter(36348),
        p = s.getParameter(36349),
        T = d > 0,
        y = o || e.has("OES_texture_float"),
        w = T && y,
        R = o ? s.getParameter(36183) : 0; return { isWebGL2: o, drawBuffers: c, getMaxAnisotropy: i, getMaxPrecision: r, precision: a, logarithmicDepthBuffer: h, maxTextures: u, maxVertexTextures: d, maxTextureSize: f, maxCubemapSize: g, maxAttributes: x, maxVertexUniforms: v, maxVaryings: m, maxFragmentUniforms: p, vertexTextures: T, floatFragmentTextures: y, floatVertexTextures: w, maxSamples: R } }

function cf(s) { const e = this; let t = null,
        n = 0,
        i = !1,
        r = !1; const o = new Ut,
        a = new ct,
        l = { value: null, needsUpdate: !1 };
    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d, f) { const g = u.length !== 0 || d || n !== 0 || i; return i = d, t = h(u, f, 0), n = u.length, g }, this.beginShadows = function() { r = !0, h(null) }, this.endShadows = function() { r = !1, c() }, this.setState = function(u, d, f) { const g = u.clippingPlanes,
            x = u.clipIntersection,
            v = u.clipShadows,
            m = s.get(u); if (!i || g === null || g.length === 0 || r && !v) r ? h(null) : c();
        else { const p = r ? 0 : n,
                T = p * 4; let y = m.clippingState || null;
            l.value = y, y = h(g, d, T, f); for (let w = 0; w !== T; ++w) y[w] = t[w];
            m.clippingState = y, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += p } };

    function c() { l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0 }

    function h(u, d, f, g) { const x = u !== null ? u.length : 0; let v = null; if (x !== 0) { if (v = l.value, g !== !0 || v === null) { const m = f + x * 4,
                    p = d.matrixWorldInverse;
                a.getNormalMatrix(p), (v === null || v.length < m) && (v = new Float32Array(m)); for (let T = 0, y = f; T !== x; ++T, y += 4) o.copy(u[T]).applyMatrix4(p, a), o.normal.toArray(v, y), v[y + 3] = o.constant }
            l.value = v, l.needsUpdate = !0 } return e.numPlanes = x, e.numIntersection = 0, v } }

function hf(s) { let e = new WeakMap;

    function t(o, a) { return a === $r ? o.mapping = Mi : a === Kr && (o.mapping = bi), o }

    function n(o) { if (o && o.isTexture && o.isRenderTargetTexture === !1) { const a = o.mapping; if (a === $r || a === Kr)
                if (e.has(o)) { const l = e.get(o).texture; return t(l, o.mapping) } else { const l = o.image; if (l && l.height > 0) { const c = new ya(l.height / 2); return c.fromEquirectangularTexture(s, o), e.set(o, c), o.addEventListener("dispose", i), t(c.texture, o.mapping) } else return null } } return o }

    function i(o) { const a = o.target;
        a.removeEventListener("dispose", i); const l = e.get(a);
        l !== void 0 && (e.delete(a), l.dispose()) }

    function r() { e = new WeakMap } return { get: n, dispose: r } }
class Us extends Ns { constructor(e = -1, t = 1, n = 1, i = -1, r = .1, o = 2e3) { super();
        this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = o, this.updateProjectionMatrix() }
    copy(e, t) { return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this }
    setViewOffset(e, t, n, i, r, o) { this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix() }
    clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() }
    updateProjectionMatrix() { const e = (this.right - this.left) / (2 * this.zoom),
            t = (this.top - this.bottom) / (2 * this.zoom),
            n = (this.right + this.left) / 2,
            i = (this.top + this.bottom) / 2; let r = n - e,
            o = n + e,
            a = i + t,
            l = i - t; if (this.view !== null && this.view.enabled) { const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
                h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            r += c * this.view.offsetX, o = r + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height }
        this.projectionMatrix.makeOrthographic(r, o, a, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() }
    toJSON(e) { const t = super.toJSON(e); return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t } }
Us.prototype.isOrthographicCamera = !0;
class br extends En { constructor(e) { super(e);
        this.type = "RawShaderMaterial" } }
br.prototype.isRawShaderMaterial = !0;
const ni = 4,
    un = 8,
    Vt = Math.pow(2, un),
    ba = [.125, .215, .35, .446, .526, .582],
    wa = un - ni + 1 + ba.length,
    ii = 20,
    Hs = new Us,
    { _lodPlanes: Li, _sizeLods: Sa, _sigmas: wr } = uf(),
    Ea = new ve;
let Vs = null;
const Tn = (1 + Math.sqrt(5)) / 2,
    ri = 1 / Tn,
    Ta = [new S(1, 1, 1), new S(-1, 1, 1), new S(1, 1, -1), new S(-1, 1, -1), new S(0, Tn, ri), new S(0, Tn, -ri), new S(ri, 0, Tn), new S(-ri, 0, Tn), new S(Tn, ri, 0), new S(-Tn, ri, 0)];
class Aa { constructor(e) { this._renderer = e, this._pingPongRenderTarget = null, this._blurMaterial = df(ii), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial) }
    fromScene(e, t = 0, n = .1, i = 100) { Vs = this._renderer.getRenderTarget(); const r = this._allocateTargets(); return this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r }
    fromEquirectangular(e, t = null) { return this._fromTexture(e, t) }
    fromCubemap(e, t = null) { return this._fromTexture(e, t) }
    compileCubemapShader() { this._cubemapShader === null && (this._cubemapShader = La(), this._compileMaterial(this._cubemapShader)) }
    compileEquirectangularShader() { this._equirectShader === null && (this._equirectShader = Ra(), this._compileMaterial(this._equirectShader)) }
    dispose() { this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose(), this._cubemapShader !== null && this._cubemapShader.dispose(), this._equirectShader !== null && this._equirectShader.dispose(); for (let e = 0; e < Li.length; e++) Li[e].dispose() }
    _cleanup(e) { this._renderer.setRenderTarget(Vs), e.scissorTest = !1, Sr(e, 0, 0, e.width, e.height) }
    _fromTexture(e, t) { Vs = this._renderer.getRenderTarget(); const n = t || this._allocateTargets(e); return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n }
    _allocateTargets(e) { const t = { magFilter: ut, minFilter: ut, generateMipmaps: !1, type: Dn, format: gt, encoding: tn, depthBuffer: !1 },
            n = Ca(t); return n.depthBuffer = !e, this._pingPongRenderTarget === null && (this._pingPongRenderTarget = Ca(t)), n }
    _compileMaterial(e) { const t = new _t(Li[0], e);
        this._renderer.compile(t, Hs) }
    _sceneToCubeUV(e, t, n, i) { const r = 90,
            o = 1,
            a = new yt(r, o, t, n),
            l = [1, -1, 1, 1, 1, 1],
            c = [1, 1, 1, -1, -1, -1],
            h = this._renderer,
            u = h.autoClear,
            d = h.toneMapping;
        h.getClearColor(Ea), h.toneMapping = Qt, h.autoClear = !1; const f = new Cs({ name: "PMREM.Background", side: it, depthWrite: !1, depthTest: !1 }),
            g = new _t(new Ri, f); let x = !1; const v = e.background;
        v ? v.isColor && (f.color.copy(v), e.background = null, x = !0) : (f.color.copy(Ea), x = !0); for (let m = 0; m < 6; m++) { const p = m % 3;
            p === 0 ? (a.up.set(0, l[m], 0), a.lookAt(c[m], 0, 0)) : p === 1 ? (a.up.set(0, 0, l[m]), a.lookAt(0, c[m], 0)) : (a.up.set(0, l[m], 0), a.lookAt(0, 0, c[m])), Sr(i, p * Vt, m > 2 ? Vt : 0, Vt, Vt), h.setRenderTarget(i), x && h.render(g, a), h.render(e, a) }
        g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = v }
    _textureToCubeUV(e, t) { const n = this._renderer,
            i = e.mapping === Mi || e.mapping === bi;
        i ? (this._cubemapShader === null && (this._cubemapShader = La()), this._cubemapShader.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectShader === null && (this._equirectShader = Ra()); const r = i ? this._cubemapShader : this._equirectShader,
            o = new _t(Li[0], r),
            a = r.uniforms;
        a.envMap.value = e, i || a.texelSize.value.set(1 / e.image.width, 1 / e.image.height), Sr(t, 0, 0, 3 * Vt, 2 * Vt), n.setRenderTarget(t), n.render(o, Hs) }
    _applyPMREM(e) { const t = this._renderer,
            n = t.autoClear;
        t.autoClear = !1; for (let i = 1; i < wa; i++) { const r = Math.sqrt(wr[i] * wr[i] - wr[i - 1] * wr[i - 1]),
                o = Ta[(i - 1) % Ta.length];
            this._blur(e, i - 1, i, r, o) }
        t.autoClear = n }
    _blur(e, t, n, i, r) { const o = this._pingPongRenderTarget;
        this._halfBlur(e, o, t, n, i, "latitudinal", r), this._halfBlur(o, e, n, n, i, "longitudinal", r) }
    _halfBlur(e, t, n, i, r, o, a) { const l = this._renderer,
            c = this._blurMaterial;
        o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!"); const h = 3,
            u = new _t(Li[i], c),
            d = c.uniforms,
            f = Sa[n] - 1,
            g = isFinite(r) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * ii - 1),
            x = r / g,
            v = isFinite(r) ? 1 + Math.floor(h * x) : ii;
        v > ii && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${ii}`); const m = []; let p = 0; for (let R = 0; R < ii; ++R) { const P = R / x,
                Z = Math.exp(-P * P / 2);
            m.push(Z), R === 0 ? p += Z : R < v && (p += 2 * Z) } for (let R = 0; R < m.length; R++) m[R] = m[R] / p;
        d.envMap.value = e.texture, d.samples.value = v, d.weights.value = m, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a), d.dTheta.value = g, d.mipInt.value = un - n; const T = Sa[i],
            y = 3 * Math.max(0, Vt - 2 * T),
            w = (i === 0 ? 0 : 2 * Vt) + 2 * T * (i > un - ni ? i - un + ni : 0);
        Sr(t, y, w, 3 * T, 2 * T), l.setRenderTarget(t), l.render(u, Hs) } }

function uf() { const s = [],
        e = [],
        t = []; let n = un; for (let i = 0; i < wa; i++) { const r = Math.pow(2, n);
        e.push(r); let o = 1 / r;
        i > un - ni ? o = ba[i - un + ni - 1] : i === 0 && (o = 0), t.push(o); const a = 1 / (r - 1),
            l = -a / 2,
            c = 1 + a / 2,
            h = [l, l, c, l, c, c, l, l, c, c, l, c],
            u = 6,
            d = 6,
            f = 3,
            g = 2,
            x = 1,
            v = new Float32Array(f * d * u),
            m = new Float32Array(g * d * u),
            p = new Float32Array(x * d * u); for (let y = 0; y < u; y++) { const w = y % 3 * 2 / 3 - 1,
                R = y > 2 ? 0 : -1,
                P = [w, R, 0, w + 2 / 3, R, 0, w + 2 / 3, R + 1, 0, w, R, 0, w + 2 / 3, R + 1, 0, w, R + 1, 0];
            v.set(P, f * d * y), m.set(h, g * d * y); const Z = [y, y, y, y, y, y];
            p.set(Z, x * d * y) } const T = new qe;
        T.setAttribute("position", new st(v, f)), T.setAttribute("uv", new st(m, g)), T.setAttribute("faceIndex", new st(p, x)), s.push(T), n > ni && n-- } return { _lodPlanes: s, _sizeLods: e, _sigmas: t } }

function Ca(s) { const e = new Et(3 * Vt, 3 * Vt, s); return e.texture.mapping = Zi, e.texture.name = "PMREM.cubeUv", e.scissorTest = !0, e }

function Sr(s, e, t, n, i) { s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i) }

function df(s) { const e = new Float32Array(s),
        t = new S(0, 1, 0); return new br({ name: "SphericalGaussianBlur", defines: { n: s }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: e }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: t } }, vertexShader: Gs(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: Kt, depthTest: !1, depthWrite: !1 }) }

function Ra() { const s = new J(1, 1); return new br({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null }, texelSize: { value: s } }, vertexShader: Gs(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = texture2D ( envMap, uv ).rgb;
				uv.x += texelSize.x;
				vec3 tr = texture2D ( envMap, uv ).rgb;
				uv.y += texelSize.y;
				vec3 br = texture2D ( envMap, uv ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = texture2D ( envMap, uv ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`, blending: Kt, depthTest: !1, depthWrite: !1 }) }

function La() { return new br({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Gs(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: Kt, depthTest: !1, depthWrite: !1 }) }

function Gs() { return `

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	` }

function ff(s) { let e = new WeakMap,
        t = null;

    function n(a) { if (a && a.isTexture) { const l = a.mapping,
                c = l === $r || l === Kr,
                h = l === Mi || l === bi; if (c || h)
                if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) { a.needsPMREMUpdate = !1; let u = e.get(a); return t === null && (t = new Aa(s)), u = c ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), e.set(a, u), u.texture } else { if (e.has(a)) return e.get(a).texture; { const u = a.image; if (c && u && u.height > 0 || h && u && i(u)) { t === null && (t = new Aa(s)); const d = c ? t.fromEquirectangular(a) : t.fromCubemap(a); return e.set(a, d), a.addEventListener("dispose", r), d.texture } else return null } } } return a }

    function i(a) { let l = 0; const c = 6; for (let h = 0; h < c; h++) a[h] !== void 0 && l++; return l === c }

    function r(a) { const l = a.target;
        l.removeEventListener("dispose", r); const c = e.get(l);
        c !== void 0 && (e.delete(l), c.dispose()) }

    function o() { e = new WeakMap, t !== null && (t.dispose(), t = null) } return { get: n, dispose: o } }

function pf(s) { const e = {};

    function t(n) { if (e[n] !== void 0) return e[n]; let i; switch (n) {
            case "WEBGL_depth_texture":
                i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture"); break;
            case "EXT_texture_filter_anisotropic":
                i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic"); break;
            case "WEBGL_compressed_texture_s3tc":
                i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"); break;
            case "WEBGL_compressed_texture_pvrtc":
                i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"); break;
            default:
                i = s.getExtension(n) } return e[n] = i, i } return { has: function(n) { return t(n) !== null }, init: function(n) { n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture") }, get: function(n) { const i = t(n); return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i } } }

function mf(s, e, t, n) { const i = {},
        r = new WeakMap;

    function o(u) { const d = u.target;
        d.index !== null && e.remove(d.index); for (const g in d.attributes) e.remove(d.attributes[g]);
        d.removeEventListener("dispose", o), delete i[d.id]; const f = r.get(d);
        f && (e.remove(f), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries-- }

    function a(u, d) { return i[d.id] === !0 || (d.addEventListener("dispose", o), i[d.id] = !0, t.memory.geometries++), d }

    function l(u) { const d = u.attributes; for (const g in d) e.update(d[g], 34962); const f = u.morphAttributes; for (const g in f) { const x = f[g]; for (let v = 0, m = x.length; v < m; v++) e.update(x[v], 34962) } }

    function c(u) { const d = [],
            f = u.index,
            g = u.attributes.position; let x = 0; if (f !== null) { const p = f.array;
            x = f.version; for (let T = 0, y = p.length; T < y; T += 3) { const w = p[T + 0],
                    R = p[T + 1],
                    P = p[T + 2];
                d.push(w, R, R, P, P, w) } } else { const p = g.array;
            x = g.version; for (let T = 0, y = p.length / 3 - 1; T < y; T += 3) { const w = T + 0,
                    R = T + 1,
                    P = T + 2;
                d.push(w, R, R, P, P, w) } } const v = new(ra(d) ? _a : xa)(d, 1);
        v.version = x; const m = r.get(u);
        m && e.remove(m), r.set(u, v) }

    function h(u) { const d = r.get(u); if (d) { const f = u.index;
            f !== null && d.version < f.version && c(u) } else c(u); return r.get(u) } return { get: a, update: l, getWireframeAttribute: h } }

function gf(s, e, t, n) { const i = n.isWebGL2; let r;

    function o(d) { r = d } let a, l;

    function c(d) { a = d.type, l = d.bytesPerElement }

    function h(d, f) { s.drawElements(r, f, a, d * l), t.update(f, r, 1) }

    function u(d, f, g) { if (g === 0) return; let x, v; if (i) x = s, v = "drawElementsInstanced";
        else if (x = e.get("ANGLE_instanced_arrays"), v = "drawElementsInstancedANGLE", x === null) { console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); return }
        x[v](r, f, a, d * l, g), t.update(f, r, g) }
    this.setMode = o, this.setIndex = c, this.render = h, this.renderInstances = u }

function xf(s) { const e = { geometries: 0, textures: 0 },
        t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };

    function n(r, o, a) { switch (t.calls++, o) {
            case 4:
                t.triangles += a * (r / 3); break;
            case 1:
                t.lines += a * (r / 2); break;
            case 3:
                t.lines += a * (r - 1); break;
            case 2:
                t.lines += a * r; break;
            case 0:
                t.points += a * r; break;
            default:
                console.error("THREE.WebGLInfo: Unknown draw mode:", o); break } }

    function i() { t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0 } return { memory: e, render: t, programs: null, autoReset: !0, reset: i, update: n } }
class ks extends ot { constructor(e = null, t = 1, n = 1, i = 1) { super(null);
        this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = rt, this.minFilter = rt, this.wrapR = bt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } }
ks.prototype.isDataTexture2DArray = !0;

function _f(s, e) { return s[0] - e[0] }

function vf(s, e) { return Math.abs(e[1]) - Math.abs(s[1]) }

function Pa(s, e) { let t = 1; const n = e.isInterleavedBufferAttribute ? e.data.array : e.array;
    n instanceof Int8Array ? t = 127 : n instanceof Int16Array ? t = 32767 : n instanceof Int32Array ? t = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", n), s.divideScalar(t) }

function yf(s, e, t) { const n = {},
        i = new Float32Array(8),
        r = new WeakMap,
        o = new S,
        a = []; for (let c = 0; c < 8; c++) a[c] = [c, 0];

    function l(c, h, u, d) { const f = c.morphTargetInfluences; if (e.isWebGL2 === !0) { const g = h.morphAttributes.position.length; let x = r.get(h); if (x === void 0 || x.count !== g) { let L = function() { $.dispose(), r.delete(h), h.removeEventListener("dispose", L) };
                x !== void 0 && x.texture.dispose(); const p = h.morphAttributes.normal !== void 0,
                    T = h.morphAttributes.position,
                    y = h.morphAttributes.normal || [],
                    w = h.attributes.position.count,
                    R = p === !0 ? 2 : 1; let P = w * R,
                    Z = 1;
                P > e.maxTextureSize && (Z = Math.ceil(P / e.maxTextureSize), P = e.maxTextureSize); const oe = new Float32Array(P * Z * 4 * g),
                    $ = new ks(oe, P, Z, g);
                $.format = gt, $.type = vn, $.needsUpdate = !0; const _ = R * 4; for (let D = 0; D < g; D++) { const N = T[D],
                        B = y[D],
                        F = P * Z * 4 * D; for (let q = 0; q < N.count; q++) { o.fromBufferAttribute(N, q), N.normalized === !0 && Pa(o, N); const K = q * _;
                        oe[F + K + 0] = o.x, oe[F + K + 1] = o.y, oe[F + K + 2] = o.z, oe[F + K + 3] = 0, p === !0 && (o.fromBufferAttribute(B, q), B.normalized === !0 && Pa(o, B), oe[F + K + 4] = o.x, oe[F + K + 5] = o.y, oe[F + K + 6] = o.z, oe[F + K + 7] = 0) } }
                x = { count: g, texture: $, size: new J(P, Z) }, r.set(h, x), h.addEventListener("dispose", L) } let v = 0; for (let p = 0; p < f.length; p++) v += f[p]; const m = h.morphTargetsRelative ? 1 : 1 - v;
            d.getUniforms().setValue(s, "morphTargetBaseInfluence", m), d.getUniforms().setValue(s, "morphTargetInfluences", f), d.getUniforms().setValue(s, "morphTargetsTexture", x.texture, t), d.getUniforms().setValue(s, "morphTargetsTextureSize", x.size) } else { const g = f === void 0 ? 0 : f.length; let x = n[h.id]; if (x === void 0 || x.length !== g) { x = []; for (let y = 0; y < g; y++) x[y] = [y, 0];
                n[h.id] = x } for (let y = 0; y < g; y++) { const w = x[y];
                w[0] = y, w[1] = f[y] }
            x.sort(vf); for (let y = 0; y < 8; y++) y < g && x[y][1] ? (a[y][0] = x[y][0], a[y][1] = x[y][1]) : (a[y][0] = Number.MAX_SAFE_INTEGER, a[y][1] = 0);
            a.sort(_f); const v = h.morphAttributes.position,
                m = h.morphAttributes.normal; let p = 0; for (let y = 0; y < 8; y++) { const w = a[y],
                    R = w[0],
                    P = w[1];
                R !== Number.MAX_SAFE_INTEGER && P ? (v && h.getAttribute("morphTarget" + y) !== v[R] && h.setAttribute("morphTarget" + y, v[R]), m && h.getAttribute("morphNormal" + y) !== m[R] && h.setAttribute("morphNormal" + y, m[R]), i[y] = P, p += P) : (v && h.hasAttribute("morphTarget" + y) === !0 && h.deleteAttribute("morphTarget" + y), m && h.hasAttribute("morphNormal" + y) === !0 && h.deleteAttribute("morphNormal" + y), i[y] = 0) } const T = h.morphTargetsRelative ? 1 : 1 - p;
            d.getUniforms().setValue(s, "morphTargetBaseInfluence", T), d.getUniforms().setValue(s, "morphTargetInfluences", i) } } return { update: l } }

function Mf(s, e, t, n) { let i = new WeakMap;

    function r(l) { const c = n.render.frame,
            h = l.geometry,
            u = e.get(l, h); return i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), t.update(l.instanceMatrix, 34962), l.instanceColor !== null && t.update(l.instanceColor, 34962)), u }

    function o() { i = new WeakMap }

    function a(l) { const c = l.target;
        c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor) } return { update: r, dispose: o } }
class Da extends ot { constructor(e = null, t = 1, n = 1, i = 1) { super(null);
        this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = rt, this.minFilter = rt, this.wrapR = bt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } }
Da.prototype.isDataTexture3D = !0;
const Ia = new ot,
    Fa = new ks,
    Na = new Da,
    Ba = new vr,
    za = [],
    Oa = [],
    Ua = new Float32Array(16),
    Ha = new Float32Array(9),
    Va = new Float32Array(4);

function si(s, e, t) { const n = s[0]; if (n <= 0 || n > 0) return s; const i = e * t; let r = za[i]; if (r === void 0 && (r = new Float32Array(i), za[i] = r), e !== 0) { n.toArray(r, 0); for (let o = 1, a = 0; o !== e; ++o) a += t, s[o].toArray(r, a) } return r }

function vt(s, e) { if (s.length !== e.length) return !1; for (let t = 0, n = s.length; t < n; t++)
        if (s[t] !== e[t]) return !1;
    return !0 }

function mt(s, e) { for (let t = 0, n = e.length; t < n; t++) s[t] = e[t] }

function Er(s, e) { let t = Oa[e];
    t === void 0 && (t = new Int32Array(e), Oa[e] = t); for (let n = 0; n !== e; ++n) t[n] = s.allocateTextureUnit(); return t }

function bf(s, e) { const t = this.cache;
    t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e) }

function wf(s, e) { const t = this.cache; if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else { if (vt(t, e)) return;
        s.uniform2fv(this.addr, e), mt(t, e) } }

function Sf(s, e) { const t = this.cache; if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else if (e.r !== void 0)(t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
    else { if (vt(t, e)) return;
        s.uniform3fv(this.addr, e), mt(t, e) } }

function Ef(s, e) { const t = this.cache; if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else { if (vt(t, e)) return;
        s.uniform4fv(this.addr, e), mt(t, e) } }

function Tf(s, e) { const t = this.cache,
        n = e.elements; if (n === void 0) { if (vt(t, e)) return;
        s.uniformMatrix2fv(this.addr, !1, e), mt(t, e) } else { if (vt(t, n)) return;
        Va.set(n), s.uniformMatrix2fv(this.addr, !1, Va), mt(t, n) } }

function Af(s, e) { const t = this.cache,
        n = e.elements; if (n === void 0) { if (vt(t, e)) return;
        s.uniformMatrix3fv(this.addr, !1, e), mt(t, e) } else { if (vt(t, n)) return;
        Ha.set(n), s.uniformMatrix3fv(this.addr, !1, Ha), mt(t, n) } }

function Cf(s, e) { const t = this.cache,
        n = e.elements; if (n === void 0) { if (vt(t, e)) return;
        s.uniformMatrix4fv(this.addr, !1, e), mt(t, e) } else { if (vt(t, n)) return;
        Ua.set(n), s.uniformMatrix4fv(this.addr, !1, Ua), mt(t, n) } }

function Rf(s, e) { const t = this.cache;
    t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e) }

function Lf(s, e) { const t = this.cache;
    vt(t, e) || (s.uniform2iv(this.addr, e), mt(t, e)) }

function Pf(s, e) { const t = this.cache;
    vt(t, e) || (s.uniform3iv(this.addr, e), mt(t, e)) }

function Df(s, e) { const t = this.cache;
    vt(t, e) || (s.uniform4iv(this.addr, e), mt(t, e)) }

function If(s, e) { const t = this.cache;
    t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e) }

function Ff(s, e) { const t = this.cache;
    vt(t, e) || (s.uniform2uiv(this.addr, e), mt(t, e)) }

function Nf(s, e) { const t = this.cache;
    vt(t, e) || (s.uniform3uiv(this.addr, e), mt(t, e)) }

function Bf(s, e) { const t = this.cache;
    vt(t, e) || (s.uniform4uiv(this.addr, e), mt(t, e)) }

function zf(s, e, t) { const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.safeSetTexture2D(e || Ia, i) }

function Of(s, e, t) { const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Na, i) }

function Uf(s, e, t) { const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.safeSetTextureCube(e || Ba, i) }

function Hf(s, e, t) { const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Fa, i) }

function Vf(s) { switch (s) {
        case 5126:
            return bf;
        case 35664:
            return wf;
        case 35665:
            return Sf;
        case 35666:
            return Ef;
        case 35674:
            return Tf;
        case 35675:
            return Af;
        case 35676:
            return Cf;
        case 5124:
        case 35670:
            return Rf;
        case 35667:
        case 35671:
            return Lf;
        case 35668:
        case 35672:
            return Pf;
        case 35669:
        case 35673:
            return Df;
        case 5125:
            return If;
        case 36294:
            return Ff;
        case 36295:
            return Nf;
        case 36296:
            return Bf;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return zf;
        case 35679:
        case 36299:
        case 36307:
            return Of;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return Uf;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return Hf } }

function Gf(s, e) { s.uniform1fv(this.addr, e) }

function kf(s, e) { const t = si(e, this.size, 2);
    s.uniform2fv(this.addr, t) }

function Wf(s, e) { const t = si(e, this.size, 3);
    s.uniform3fv(this.addr, t) }

function qf(s, e) { const t = si(e, this.size, 4);
    s.uniform4fv(this.addr, t) }

function Xf(s, e) { const t = si(e, this.size, 4);
    s.uniformMatrix2fv(this.addr, !1, t) }

function jf(s, e) { const t = si(e, this.size, 9);
    s.uniformMatrix3fv(this.addr, !1, t) }

function Yf(s, e) { const t = si(e, this.size, 16);
    s.uniformMatrix4fv(this.addr, !1, t) }

function Zf(s, e) { s.uniform1iv(this.addr, e) }

function Jf(s, e) { s.uniform2iv(this.addr, e) }

function $f(s, e) { s.uniform3iv(this.addr, e) }

function Kf(s, e) { s.uniform4iv(this.addr, e) }

function Qf(s, e) { s.uniform1uiv(this.addr, e) }

function ep(s, e) { s.uniform2uiv(this.addr, e) }

function tp(s, e) { s.uniform3uiv(this.addr, e) }

function np(s, e) { s.uniform4uiv(this.addr, e) }

function ip(s, e, t) { const n = e.length,
        i = Er(t, n);
    s.uniform1iv(this.addr, i); for (let r = 0; r !== n; ++r) t.safeSetTexture2D(e[r] || Ia, i[r]) }

function rp(s, e, t) { const n = e.length,
        i = Er(t, n);
    s.uniform1iv(this.addr, i); for (let r = 0; r !== n; ++r) t.setTexture3D(e[r] || Na, i[r]) }

function sp(s, e, t) { const n = e.length,
        i = Er(t, n);
    s.uniform1iv(this.addr, i); for (let r = 0; r !== n; ++r) t.safeSetTextureCube(e[r] || Ba, i[r]) }

function op(s, e, t) { const n = e.length,
        i = Er(t, n);
    s.uniform1iv(this.addr, i); for (let r = 0; r !== n; ++r) t.setTexture2DArray(e[r] || Fa, i[r]) }

function ap(s) { switch (s) {
        case 5126:
            return Gf;
        case 35664:
            return kf;
        case 35665:
            return Wf;
        case 35666:
            return qf;
        case 35674:
            return Xf;
        case 35675:
            return jf;
        case 35676:
            return Yf;
        case 5124:
        case 35670:
            return Zf;
        case 35667:
        case 35671:
            return Jf;
        case 35668:
        case 35672:
            return $f;
        case 35669:
        case 35673:
            return Kf;
        case 5125:
            return Qf;
        case 36294:
            return ep;
        case 36295:
            return tp;
        case 36296:
            return np;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return ip;
        case 35679:
        case 36299:
        case 36307:
            return rp;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return sp;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return op } }

function lp(s, e, t) { this.id = s, this.addr = t, this.cache = [], this.setValue = Vf(e.type) }

function Ga(s, e, t) { this.id = s, this.addr = t, this.cache = [], this.size = e.size, this.setValue = ap(e.type) }
Ga.prototype.updateCache = function(s) { const e = this.cache;
    s instanceof Float32Array && e.length !== s.length && (this.cache = new Float32Array(s.length)), mt(e, s) };

function ka(s) { this.id = s, this.seq = [], this.map = {} }
ka.prototype.setValue = function(s, e, t) { const n = this.seq; for (let i = 0, r = n.length; i !== r; ++i) { const o = n[i];
        o.setValue(s, e[o.id], t) } };
const Ws = /(\w+)(\])?(\[|\.)?/g;

function Wa(s, e) { s.seq.push(e), s.map[e.id] = e }

function cp(s, e, t) { const n = s.name,
        i = n.length; for (Ws.lastIndex = 0;;) { const r = Ws.exec(n),
            o = Ws.lastIndex; let a = r[1]; const l = r[2] === "]",
            c = r[3]; if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === i) { Wa(t, c === void 0 ? new lp(a, s, e) : new Ga(a, s, e)); break } else { let u = t.map[a];
            u === void 0 && (u = new ka(a), Wa(t, u)), t = u } } }

function dn(s, e) { this.seq = [], this.map = {}; const t = s.getProgramParameter(e, 35718); for (let n = 0; n < t; ++n) { const i = s.getActiveUniform(e, n),
            r = s.getUniformLocation(e, i.name);
        cp(i, r, this) } }
dn.prototype.setValue = function(s, e, t, n) { const i = this.map[e];
    i !== void 0 && i.setValue(s, t, n) };
dn.prototype.setOptional = function(s, e, t) { const n = e[t];
    n !== void 0 && this.setValue(s, t, n) };
dn.upload = function(s, e, t, n) { for (let i = 0, r = e.length; i !== r; ++i) { const o = e[i],
            a = t[o.id];
        a.needsUpdate !== !1 && o.setValue(s, a.value, n) } };
dn.seqWithValue = function(s, e) { const t = []; for (let n = 0, i = s.length; n !== i; ++n) { const r = s[n];
        r.id in e && t.push(r) } return t };

function qa(s, e, t) { const n = s.createShader(e); return s.shaderSource(n, t), s.compileShader(n), n }
let hp = 0;

function up(s) { const e = s.split(`
`); for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t]; return e.join(`
`) }

function dp(s) { switch (s) {
        case tn:
            return ["Linear", "( value )"];
        case je:
            return ["sRGB", "( value )"];
        default:
            return console.warn("THREE.WebGLProgram: Unsupported encoding:", s), ["Linear", "( value )"] } }

function Xa(s, e, t) { const n = s.getShaderParameter(e, 35713),
        i = s.getShaderInfoLog(e).trim(); return n && i === "" ? "" : t.toUpperCase() + `

` + i + `

` + up(s.getShaderSource(e)) }

function fp(s, e) { const t = dp(e); return "vec4 " + s + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }" }

function pp(s, e) { let t; switch (e) {
        case Bc:
            t = "Linear"; break;
        case zc:
            t = "Reinhard"; break;
        case Oc:
            t = "OptimizedCineon"; break;
        case Uc:
            t = "ACESFilmic"; break;
        case Hc:
            t = "Custom"; break;
        default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear" } return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }" }

function mp(s) { return [s.extensionDerivatives || s.envMapCubeUV || s.bumpMap || s.tangentSpaceNormalMap || s.clearcoatNormalMap || s.flatShading || s.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (s.extensionFragDepth || s.logarithmicDepthBuffer) && s.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", s.extensionDrawBuffers && s.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (s.extensionShaderTextureLOD || s.envMap || s.transmission) && s.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Pi).join(`
`) }

function gp(s) { const e = []; for (const t in s) { const n = s[t];
        n !== !1 && e.push("#define " + t + " " + n) } return e.join(`
`) }

function xp(s, e) { const t = {},
        n = s.getProgramParameter(e, 35721); for (let i = 0; i < n; i++) { const r = s.getActiveAttrib(e, i),
            o = r.name; let a = 1;
        r.type === 35674 && (a = 2), r.type === 35675 && (a = 3), r.type === 35676 && (a = 4), t[o] = { type: r.type, location: s.getAttribLocation(e, o), locationSize: a } } return t }

function Pi(s) { return s !== "" }

function ja(s, e) { return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows) }

function Ya(s, e) { return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection) }
const _p = /^[ \t]*#include +<([\w\d./]+)>/gm;

function qs(s) { return s.replace(_p, vp) }

function vp(s, e) { const t = Pe[e]; if (t === void 0) throw new Error("Can not resolve #include <" + e + ">"); return qs(t) }
const yp = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
    Mp = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

function Za(s) { return s.replace(Mp, Ja).replace(yp, bp) }

function bp(s, e, t, n) { return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Ja(s, e, t, n) }

function Ja(s, e, t, n) { let i = ""; for (let r = parseInt(e); r < parseInt(t); r++) i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r); return i }

function $a(s) { let e = "precision " + s.precision + ` float;
precision ` + s.precision + " int;"; return s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e }

function wp(s) { let e = "SHADOWMAP_TYPE_BASIC"; return s.shadowMapType === bo ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === pc ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === _i && (e = "SHADOWMAP_TYPE_VSM"), e }

function Sp(s) { let e = "ENVMAP_TYPE_CUBE"; if (s.envMap) switch (s.envMapMode) {
        case Mi:
        case bi:
            e = "ENVMAP_TYPE_CUBE"; break;
        case Zi:
        case Qr:
            e = "ENVMAP_TYPE_CUBE_UV"; break }
    return e }

function Ep(s) { let e = "ENVMAP_MODE_REFLECTION"; if (s.envMap) switch (s.envMapMode) {
        case bi:
        case Qr:
            e = "ENVMAP_MODE_REFRACTION"; break }
    return e }

function Tp(s) { let e = "ENVMAP_BLENDING_NONE"; if (s.envMap) switch (s.combine) {
        case Yi:
            e = "ENVMAP_BLENDING_MULTIPLY"; break;
        case Fc:
            e = "ENVMAP_BLENDING_MIX"; break;
        case Nc:
            e = "ENVMAP_BLENDING_ADD"; break }
    return e }

function Ap(s, e, t, n) { const i = s.getContext(),
        r = t.defines; let o = t.vertexShader,
        a = t.fragmentShader; const l = wp(t),
        c = Sp(t),
        h = Ep(t),
        u = Tp(t),
        d = t.isWebGL2 ? "" : mp(t),
        f = gp(r),
        g = i.createProgram(); let x, v, m = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
    t.isRawShaderMaterial ? (x = [f].filter(Pi).join(`
`), x.length > 0 && (x += `
`), v = [d, f].filter(Pi).join(`
`), v.length > 0 && (v += `
`)) : (x = [$a(t), "#define SHADER_NAME " + t.shaderName, f, t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define MAX_BONES " + t.maxBones, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.useVertexTexture ? "#define BONE_TEXTURE" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphTargets && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", t.morphTargets && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Pi).join(`
`), v = [d, $a(t), "#define SHADER_NAME " + t.shaderName, f, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Qt ? "#define TONE_MAPPING" : "", t.toneMapping !== Qt ? Pe.tonemapping_pars_fragment : "", t.toneMapping !== Qt ? pp("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.transparent ? "" : "#define OPAQUE", Pe.encodings_pars_fragment, fp("linearToOutputTexel", t.outputEncoding), t.depthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Pi).join(`
`)), o = qs(o), o = ja(o, t), o = Ya(o, t), a = qs(a), a = ja(a, t), a = Ya(a, t), o = Za(o), a = Za(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (m = `#version 300 es
`, x = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + x, v = ["#define varying in", t.glslVersion === na ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === na ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + v); const p = m + x + o,
        T = m + v + a,
        y = qa(i, 35633, p),
        w = qa(i, 35632, T); if (i.attachShader(g, y), i.attachShader(g, w), t.index0AttributeName !== void 0 ? i.bindAttribLocation(g, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(g, 0, "position"), i.linkProgram(g), s.debug.checkShaderErrors) { const Z = i.getProgramInfoLog(g).trim(),
            oe = i.getShaderInfoLog(y).trim(),
            $ = i.getShaderInfoLog(w).trim(); let _ = !0,
            L = !0; if (i.getProgramParameter(g, 35714) === !1) { _ = !1; const D = Xa(i, y, "vertex"),
                N = Xa(i, w, "fragment");
            console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(g, 35715) + `

Program Info Log: ` + Z + `
` + D + `
` + N) } else Z !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", Z) : (oe === "" || $ === "") && (L = !1);
        L && (this.diagnostics = { runnable: _, programLog: Z, vertexShader: { log: oe, prefix: x }, fragmentShader: { log: $, prefix: v } }) }
    i.deleteShader(y), i.deleteShader(w); let R;
    this.getUniforms = function() { return R === void 0 && (R = new dn(i, g)), R }; let P; return this.getAttributes = function() { return P === void 0 && (P = xp(i, g)), P }, this.destroy = function() { n.releaseStatesOfProgram(this), i.deleteProgram(g), this.program = void 0 }, this.name = t.shaderName, this.id = hp++, this.cacheKey = e, this.usedTimes = 1, this.program = g, this.vertexShader = y, this.fragmentShader = w, this }
let Cp = 0;
class Rp { constructor() { this.shaderCache = new Map, this.materialCache = new Map }
    update(e) { const t = e.vertexShader,
            n = e.fragmentShader,
            i = this._getShaderStage(t),
            r = this._getShaderStage(n),
            o = this._getShaderCacheForMaterial(e); return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(r) === !1 && (o.add(r), r.usedTimes++), this }
    remove(e) { const t = this.materialCache.get(e); for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n); return this.materialCache.delete(e), this }
    getVertexShaderID(e) { return this._getShaderStage(e.vertexShader).id }
    getFragmentShaderID(e) { return this._getShaderStage(e.fragmentShader).id }
    dispose() { this.shaderCache.clear(), this.materialCache.clear() }
    _getShaderCacheForMaterial(e) { const t = this.materialCache; return t.has(e) === !1 && t.set(e, new Set), t.get(e) }
    _getShaderStage(e) { const t = this.shaderCache; if (t.has(e) === !1) { const n = new Lp;
            t.set(e, n) } return t.get(e) } }
class Lp { constructor() { this.id = Cp++, this.usedTimes = 0 } }

function Pp(s, e, t, n, i, r, o) { const a = new ha,
        l = new Rp,
        c = [],
        h = i.isWebGL2,
        u = i.logarithmicDepthBuffer,
        d = i.floatVertexTextures,
        f = i.maxVertexUniforms,
        g = i.vertexTextures; let x = i.precision; const v = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };

    function m(_) { const D = _.skeleton.bones; if (d) return 1024; { const B = Math.floor((f - 20) / 4),
                F = Math.min(B, D.length); return F < D.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + D.length + " bones. This GPU supports " + F + "."), 0) : F } }

    function p(_, L, D, N, B) { const F = N.fog,
            q = _.isMeshStandardMaterial ? N.environment : null,
            K = (_.isMeshStandardMaterial ? t : e).get(_.envMap || q),
            ue = v[_.type],
            k = B.isSkinnedMesh ? m(B) : 0;
        _.precision !== null && (x = i.getMaxPrecision(_.precision), x !== _.precision && console.warn("THREE.WebGLProgram.getParameters:", _.precision, "not supported, using", x, "instead.")); let Y, se, fe, xe; if (ue) { const ce = Ht[ue];
            Y = ce.vertexShader, se = ce.fragmentShader } else Y = _.vertexShader, se = _.fragmentShader, l.update(_), fe = l.getVertexShaderID(_), xe = l.getFragmentShaderID(_); const U = s.getRenderTarget(),
            Fe = _.alphaTest > 0,
            ge = _.clearcoat > 0; return { isWebGL2: h, shaderID: ue, shaderName: _.type, vertexShader: Y, fragmentShader: se, defines: _.defines, customVertexShaderID: fe, customFragmentShaderID: xe, isRawShaderMaterial: _.isRawShaderMaterial === !0, glslVersion: _.glslVersion, precision: x, instancing: B.isInstancedMesh === !0, instancingColor: B.isInstancedMesh === !0 && B.instanceColor !== null, supportsVertexTextures: g, outputEncoding: U === null ? s.outputEncoding : U.isXRRenderTarget === !0 ? U.texture.encoding : tn, map: !!_.map, matcap: !!_.matcap, envMap: !!K, envMapMode: K && K.mapping, envMapCubeUV: !!K && (K.mapping === Zi || K.mapping === Qr), lightMap: !!_.lightMap, aoMap: !!_.aoMap, emissiveMap: !!_.emissiveMap, bumpMap: !!_.bumpMap, normalMap: !!_.normalMap, objectSpaceNormalMap: _.normalMapType === ch, tangentSpaceNormalMap: _.normalMapType === zn, decodeVideoTexture: !!_.map && _.map.isVideoTexture === !0 && _.map.encoding === je, clearcoat: ge, clearcoatMap: ge && !!_.clearcoatMap, clearcoatRoughnessMap: ge && !!_.clearcoatRoughnessMap, clearcoatNormalMap: ge && !!_.clearcoatNormalMap, displacementMap: !!_.displacementMap, roughnessMap: !!_.roughnessMap, metalnessMap: !!_.metalnessMap, specularMap: !!_.specularMap, specularIntensityMap: !!_.specularIntensityMap, specularColorMap: !!_.specularColorMap, transparent: _.transparent, alphaMap: !!_.alphaMap, alphaTest: Fe, gradientMap: !!_.gradientMap, sheen: _.sheen > 0, sheenColorMap: !!_.sheenColorMap, sheenRoughnessMap: !!_.sheenRoughnessMap, transmission: _.transmission > 0, transmissionMap: !!_.transmissionMap, thicknessMap: !!_.thicknessMap, combine: _.combine, vertexTangents: !!_.normalMap && !!B.geometry && !!B.geometry.attributes.tangent, vertexColors: _.vertexColors, vertexAlphas: _.vertexColors === !0 && !!B.geometry && !!B.geometry.attributes.color && B.geometry.attributes.color.itemSize === 4, vertexUvs: !!_.map || !!_.bumpMap || !!_.normalMap || !!_.specularMap || !!_.alphaMap || !!_.emissiveMap || !!_.roughnessMap || !!_.metalnessMap || !!_.clearcoatMap || !!_.clearcoatRoughnessMap || !!_.clearcoatNormalMap || !!_.displacementMap || !!_.transmissionMap || !!_.thicknessMap || !!_.specularIntensityMap || !!_.specularColorMap || !!_.sheenColorMap || !!_.sheenRoughnessMap, uvsVertexOnly: !(!!_.map || !!_.bumpMap || !!_.normalMap || !!_.specularMap || !!_.alphaMap || !!_.emissiveMap || !!_.roughnessMap || !!_.metalnessMap || !!_.clearcoatNormalMap || _.transmission > 0 || !!_.transmissionMap || !!_.thicknessMap || !!_.specularIntensityMap || !!_.specularColorMap || _.sheen > 0 || !!_.sheenColorMap || !!_.sheenRoughnessMap) && !!_.displacementMap, fog: !!F, useFog: _.fog, fogExp2: F && F.isFogExp2, flatShading: !!_.flatShading, sizeAttenuation: _.sizeAttenuation, logarithmicDepthBuffer: u, skinning: B.isSkinnedMesh === !0 && k > 0, maxBones: k, useVertexTexture: d, morphTargets: !!B.geometry && !!B.geometry.morphAttributes.position, morphNormals: !!B.geometry && !!B.geometry.morphAttributes.normal, morphTargetsCount: !!B.geometry && !!B.geometry.morphAttributes.position ? B.geometry.morphAttributes.position.length : 0, numDirLights: L.directional.length, numPointLights: L.point.length, numSpotLights: L.spot.length, numRectAreaLights: L.rectArea.length, numHemiLights: L.hemi.length, numDirLightShadows: L.directionalShadowMap.length, numPointLightShadows: L.pointShadowMap.length, numSpotLightShadows: L.spotShadowMap.length, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: _.dithering, shadowMapEnabled: s.shadowMap.enabled && D.length > 0, shadowMapType: s.shadowMap.type, toneMapping: _.toneMapped ? s.toneMapping : Qt, physicallyCorrectLights: s.physicallyCorrectLights, premultipliedAlpha: _.premultipliedAlpha, doubleSided: _.side === Ln, flipSided: _.side === it, depthPacking: _.depthPacking !== void 0 ? _.depthPacking : !1, index0AttributeName: _.index0AttributeName, extensionDerivatives: _.extensions && _.extensions.derivatives, extensionFragDepth: _.extensions && _.extensions.fragDepth, extensionDrawBuffers: _.extensions && _.extensions.drawBuffers, extensionShaderTextureLOD: _.extensions && _.extensions.shaderTextureLOD, rendererExtensionFragDepth: h || n.has("EXT_frag_depth"), rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"), customProgramCacheKey: _.customProgramCacheKey() } }

    function T(_) { const L = []; if (_.shaderID ? L.push(_.shaderID) : (L.push(_.customVertexShaderID), L.push(_.customFragmentShaderID)), _.defines !== void 0)
            for (const D in _.defines) L.push(D), L.push(_.defines[D]); return _.isRawShaderMaterial === !1 && (y(L, _), w(L, _), L.push(s.outputEncoding)), L.push(_.customProgramCacheKey), L.join() }

    function y(_, L) { _.push(L.precision), _.push(L.outputEncoding), _.push(L.envMapMode), _.push(L.combine), _.push(L.vertexUvs), _.push(L.fogExp2), _.push(L.sizeAttenuation), _.push(L.maxBones), _.push(L.morphTargetsCount), _.push(L.numDirLights), _.push(L.numPointLights), _.push(L.numSpotLights), _.push(L.numHemiLights), _.push(L.numRectAreaLights), _.push(L.numDirLightShadows), _.push(L.numPointLightShadows), _.push(L.numSpotLightShadows), _.push(L.shadowMapType), _.push(L.toneMapping), _.push(L.numClippingPlanes), _.push(L.numClipIntersection) }

    function w(_, L) { a.disableAll(), L.isWebGL2 && a.enable(0), L.supportsVertexTextures && a.enable(1), L.instancing && a.enable(2), L.instancingColor && a.enable(3), L.map && a.enable(4), L.matcap && a.enable(5), L.envMap && a.enable(6), L.envMapCubeUV && a.enable(7), L.lightMap && a.enable(8), L.aoMap && a.enable(9), L.emissiveMap && a.enable(10), L.bumpMap && a.enable(11), L.normalMap && a.enable(12), L.objectSpaceNormalMap && a.enable(13), L.tangentSpaceNormalMap && a.enable(14), L.clearcoat && a.enable(15), L.clearcoatMap && a.enable(16), L.clearcoatRoughnessMap && a.enable(17), L.clearcoatNormalMap && a.enable(18), L.displacementMap && a.enable(19), L.specularMap && a.enable(20), L.roughnessMap && a.enable(21), L.metalnessMap && a.enable(22), L.gradientMap && a.enable(23), L.alphaMap && a.enable(24), L.alphaTest && a.enable(25), L.vertexColors && a.enable(26), L.vertexAlphas && a.enable(27), L.vertexUvs && a.enable(28), L.vertexTangents && a.enable(29), L.uvsVertexOnly && a.enable(30), L.fog && a.enable(31), _.push(a.mask), a.disableAll(), L.useFog && a.enable(0), L.flatShading && a.enable(1), L.logarithmicDepthBuffer && a.enable(2), L.skinning && a.enable(3), L.useVertexTexture && a.enable(4), L.morphTargets && a.enable(5), L.morphNormals && a.enable(6), L.premultipliedAlpha && a.enable(7), L.shadowMapEnabled && a.enable(8), L.physicallyCorrectLights && a.enable(9), L.doubleSided && a.enable(10), L.flipSided && a.enable(11), L.depthPacking && a.enable(12), L.dithering && a.enable(13), L.specularIntensityMap && a.enable(14), L.specularColorMap && a.enable(15), L.transmission && a.enable(16), L.transmissionMap && a.enable(17), L.thicknessMap && a.enable(18), L.sheen && a.enable(19), L.sheenColorMap && a.enable(20), L.sheenRoughnessMap && a.enable(21), L.decodeVideoTexture && a.enable(22), L.transparent && a.enable(23), _.push(a.mask) }

    function R(_) { const L = v[_.type]; let D; if (L) { const N = Ht[L];
            D = Th.clone(N.uniforms) } else D = _.uniforms; return D }

    function P(_, L) { let D; for (let N = 0, B = c.length; N < B; N++) { const F = c[N]; if (F.cacheKey === L) { D = F, ++D.usedTimes; break } } return D === void 0 && (D = new Ap(s, L, _, r), c.push(D)), D }

    function Z(_) { if (--_.usedTimes == 0) { const L = c.indexOf(_);
            c[L] = c[c.length - 1], c.pop(), _.destroy() } }

    function oe(_) { l.remove(_) }

    function $() { l.dispose() } return { getParameters: p, getProgramCacheKey: T, getUniforms: R, acquireProgram: P, releaseProgram: Z, releaseShaderCache: oe, programs: c, dispose: $ } }

function Dp() { let s = new WeakMap;

    function e(r) { let o = s.get(r); return o === void 0 && (o = {}, s.set(r, o)), o }

    function t(r) { s.delete(r) }

    function n(r, o, a) { s.get(r)[o] = a }

    function i() { s = new WeakMap } return { get: e, remove: t, update: n, dispose: i } }

function Ip(s, e) { return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id }

function Ka(s, e) { return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id }

function Qa() { const s = []; let e = 0; const t = [],
        n = [],
        i = [];

    function r() { e = 0, t.length = 0, n.length = 0, i.length = 0 }

    function o(u, d, f, g, x, v) { let m = s[e]; return m === void 0 ? (m = { id: u.id, object: u, geometry: d, material: f, groupOrder: g, renderOrder: u.renderOrder, z: x, group: v }, s[e] = m) : (m.id = u.id, m.object = u, m.geometry = d, m.material = f, m.groupOrder = g, m.renderOrder = u.renderOrder, m.z = x, m.group = v), e++, m }

    function a(u, d, f, g, x, v) { const m = o(u, d, f, g, x, v);
        f.transmission > 0 ? n.push(m) : f.transparent === !0 ? i.push(m) : t.push(m) }

    function l(u, d, f, g, x, v) { const m = o(u, d, f, g, x, v);
        f.transmission > 0 ? n.unshift(m) : f.transparent === !0 ? i.unshift(m) : t.unshift(m) }

    function c(u, d) { t.length > 1 && t.sort(u || Ip), n.length > 1 && n.sort(d || Ka), i.length > 1 && i.sort(d || Ka) }

    function h() { for (let u = e, d = s.length; u < d; u++) { const f = s[u]; if (f.id === null) break;
            f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null } } return { opaque: t, transmissive: n, transparent: i, init: r, push: a, unshift: l, finish: h, sort: c } }

function Fp() { let s = new WeakMap;

    function e(n, i) { let r; return s.has(n) === !1 ? (r = new Qa, s.set(n, [r])) : i >= s.get(n).length ? (r = new Qa, s.get(n).push(r)) : r = s.get(n)[i], r }

    function t() { s = new WeakMap } return { get: e, dispose: t } }

function Np() { const s = {}; return { get: function(e) { if (s[e.id] !== void 0) return s[e.id]; let t; switch (e.type) {
                case "DirectionalLight":
                    t = { direction: new S, color: new ve }; break;
                case "SpotLight":
                    t = { position: new S, direction: new S, color: new ve, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 }; break;
                case "PointLight":
                    t = { position: new S, color: new ve, distance: 0, decay: 0 }; break;
                case "HemisphereLight":
                    t = { direction: new S, skyColor: new ve, groundColor: new ve }; break;
                case "RectAreaLight":
                    t = { color: new ve, position: new S, halfWidth: new S, halfHeight: new S }; break } return s[e.id] = t, t } } }

function Bp() { const s = {}; return { get: function(e) { if (s[e.id] !== void 0) return s[e.id]; let t; switch (e.type) {
                case "DirectionalLight":
                    t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new J }; break;
                case "SpotLight":
                    t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new J }; break;
                case "PointLight":
                    t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new J, shadowCameraNear: 1, shadowCameraFar: 1e3 }; break } return s[e.id] = t, t } } }
let zp = 0;

function Op(s, e) { return (e.castShadow ? 1 : 0) - (s.castShadow ? 1 : 0) }

function Up(s, e) { const t = new Np,
        n = Bp(),
        i = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotShadow: [], spotShadowMap: [], spotShadowMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [] }; for (let h = 0; h < 9; h++) i.probe.push(new S); const r = new S,
        o = new be,
        a = new be;

    function l(h, u) { let d = 0,
            f = 0,
            g = 0; for (let oe = 0; oe < 9; oe++) i.probe[oe].set(0, 0, 0); let x = 0,
            v = 0,
            m = 0,
            p = 0,
            T = 0,
            y = 0,
            w = 0,
            R = 0;
        h.sort(Op); const P = u !== !0 ? Math.PI : 1; for (let oe = 0, $ = h.length; oe < $; oe++) { const _ = h[oe],
                L = _.color,
                D = _.intensity,
                N = _.distance,
                B = _.shadow && _.shadow.map ? _.shadow.map.texture : null; if (_.isAmbientLight) d += L.r * D * P, f += L.g * D * P, g += L.b * D * P;
            else if (_.isLightProbe)
                for (let F = 0; F < 9; F++) i.probe[F].addScaledVector(_.sh.coefficients[F], D);
            else if (_.isDirectionalLight) { const F = t.get(_); if (F.color.copy(_.color).multiplyScalar(_.intensity * P), _.castShadow) { const q = _.shadow,
                        K = n.get(_);
                    K.shadowBias = q.bias, K.shadowNormalBias = q.normalBias, K.shadowRadius = q.radius, K.shadowMapSize = q.mapSize, i.directionalShadow[x] = K, i.directionalShadowMap[x] = B, i.directionalShadowMatrix[x] = _.shadow.matrix, y++ }
                i.directional[x] = F, x++ } else if (_.isSpotLight) { const F = t.get(_); if (F.position.setFromMatrixPosition(_.matrixWorld), F.color.copy(L).multiplyScalar(D * P), F.distance = N, F.coneCos = Math.cos(_.angle), F.penumbraCos = Math.cos(_.angle * (1 - _.penumbra)), F.decay = _.decay, _.castShadow) { const q = _.shadow,
                        K = n.get(_);
                    K.shadowBias = q.bias, K.shadowNormalBias = q.normalBias, K.shadowRadius = q.radius, K.shadowMapSize = q.mapSize, i.spotShadow[m] = K, i.spotShadowMap[m] = B, i.spotShadowMatrix[m] = _.shadow.matrix, R++ }
                i.spot[m] = F, m++ } else if (_.isRectAreaLight) { const F = t.get(_);
                F.color.copy(L).multiplyScalar(D), F.halfWidth.set(_.width * .5, 0, 0), F.halfHeight.set(0, _.height * .5, 0), i.rectArea[p] = F, p++ } else if (_.isPointLight) { const F = t.get(_); if (F.color.copy(_.color).multiplyScalar(_.intensity * P), F.distance = _.distance, F.decay = _.decay, _.castShadow) { const q = _.shadow,
                        K = n.get(_);
                    K.shadowBias = q.bias, K.shadowNormalBias = q.normalBias, K.shadowRadius = q.radius, K.shadowMapSize = q.mapSize, K.shadowCameraNear = q.camera.near, K.shadowCameraFar = q.camera.far, i.pointShadow[v] = K, i.pointShadowMap[v] = B, i.pointShadowMatrix[v] = _.shadow.matrix, w++ }
                i.point[v] = F, v++ } else if (_.isHemisphereLight) { const F = t.get(_);
                F.skyColor.copy(_.color).multiplyScalar(D * P), F.groundColor.copy(_.groundColor).multiplyScalar(D * P), i.hemi[T] = F, T++ } }
        p > 0 && (e.isWebGL2 || s.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ie.LTC_FLOAT_1, i.rectAreaLTC2 = ie.LTC_FLOAT_2) : s.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ie.LTC_HALF_1, i.rectAreaLTC2 = ie.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = f, i.ambient[2] = g; const Z = i.hash;
        (Z.directionalLength !== x || Z.pointLength !== v || Z.spotLength !== m || Z.rectAreaLength !== p || Z.hemiLength !== T || Z.numDirectionalShadows !== y || Z.numPointShadows !== w || Z.numSpotShadows !== R) && (i.directional.length = x, i.spot.length = m, i.rectArea.length = p, i.point.length = v, i.hemi.length = T, i.directionalShadow.length = y, i.directionalShadowMap.length = y, i.pointShadow.length = w, i.pointShadowMap.length = w, i.spotShadow.length = R, i.spotShadowMap.length = R, i.directionalShadowMatrix.length = y, i.pointShadowMatrix.length = w, i.spotShadowMatrix.length = R, Z.directionalLength = x, Z.pointLength = v, Z.spotLength = m, Z.rectAreaLength = p, Z.hemiLength = T, Z.numDirectionalShadows = y, Z.numPointShadows = w, Z.numSpotShadows = R, i.version = zp++) }

    function c(h, u) { let d = 0,
            f = 0,
            g = 0,
            x = 0,
            v = 0; const m = u.matrixWorldInverse; for (let p = 0, T = h.length; p < T; p++) { const y = h[p]; if (y.isDirectionalLight) { const w = i.directional[d];
                w.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), w.direction.sub(r), w.direction.transformDirection(m), d++ } else if (y.isSpotLight) { const w = i.spot[g];
                w.position.setFromMatrixPosition(y.matrixWorld), w.position.applyMatrix4(m), w.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), w.direction.sub(r), w.direction.transformDirection(m), g++ } else if (y.isRectAreaLight) { const w = i.rectArea[x];
                w.position.setFromMatrixPosition(y.matrixWorld), w.position.applyMatrix4(m), a.identity(), o.copy(y.matrixWorld), o.premultiply(m), a.extractRotation(o), w.halfWidth.set(y.width * .5, 0, 0), w.halfHeight.set(0, y.height * .5, 0), w.halfWidth.applyMatrix4(a), w.halfHeight.applyMatrix4(a), x++ } else if (y.isPointLight) { const w = i.point[f];
                w.position.setFromMatrixPosition(y.matrixWorld), w.position.applyMatrix4(m), f++ } else if (y.isHemisphereLight) { const w = i.hemi[v];
                w.direction.setFromMatrixPosition(y.matrixWorld), w.direction.transformDirection(m), w.direction.normalize(), v++ } } } return { setup: l, setupView: c, state: i } }

function el(s, e) { const t = new Up(s, e),
        n = [],
        i = [];

    function r() { n.length = 0, i.length = 0 }

    function o(u) { n.push(u) }

    function a(u) { i.push(u) }

    function l(u) { t.setup(n, u) }

    function c(u) { t.setupView(n, u) } return { init: r, state: { lightsArray: n, shadowsArray: i, lights: t }, setupLights: l, setupLightsView: c, pushLight: o, pushShadow: a } }

function Hp(s, e) { let t = new WeakMap;

    function n(r, o = 0) { let a; return t.has(r) === !1 ? (a = new el(s, e), t.set(r, [a])) : o >= t.get(r).length ? (a = new el(s, e), t.get(r).push(a)) : a = t.get(r)[o], a }

    function i() { t = new WeakMap } return { get: n, dispose: i } }
class tl extends ft { constructor(e) { super();
        this.type = "MeshDepthMaterial", this.depthPacking = ah, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e) }
    copy(e) { return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this } }
tl.prototype.isMeshDepthMaterial = !0;
class nl extends ft { constructor(e) { super();
        this.type = "MeshDistanceMaterial", this.referencePosition = new S, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e) }
    copy(e) { return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this } }
nl.prototype.isMeshDistanceMaterial = !0;
const Vp = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
    Gp = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;

function il(s, e, t) { let n = new Mr; const i = new J,
        r = new J,
        o = new We,
        a = new tl({ depthPacking: lh }),
        l = new nl,
        c = {},
        h = t.maxTextureSize,
        u = { 0: it, 1: vi, 2: Ln },
        d = new En({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new J }, radius: { value: 4 } }, vertexShader: Vp, fragmentShader: Gp }),
        f = d.clone();
    f.defines.HORIZONTAL_PASS = 1; const g = new qe;
    g.setAttribute("position", new st(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); const x = new _t(g, d),
        v = this;
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = bo, this.render = function(y, w, R) { if (v.enabled === !1 || v.autoUpdate === !1 && v.needsUpdate === !1 || y.length === 0) return; const P = s.getRenderTarget(),
            Z = s.getActiveCubeFace(),
            oe = s.getActiveMipmapLevel(),
            $ = s.state;
        $.setBlending(Kt), $.buffers.color.setClear(1, 1, 1, 1), $.buffers.depth.setTest(!0), $.setScissorTest(!1); for (let _ = 0, L = y.length; _ < L; _++) { const D = y[_],
                N = D.shadow; if (N === void 0) { console.warn("THREE.WebGLShadowMap:", D, "has no shadow."); continue } if (N.autoUpdate === !1 && N.needsUpdate === !1) continue;
            i.copy(N.mapSize); const B = N.getFrameExtents(); if (i.multiply(B), r.copy(N.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / B.x), i.x = r.x * B.x, N.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / B.y), i.y = r.y * B.y, N.mapSize.y = r.y)), N.map === null && !N.isPointLightShadow && this.type === _i) { const q = { minFilter: ut, magFilter: ut, format: gt };
                N.map = new Et(i.x, i.y, q), N.map.texture.name = D.name + ".shadowMap", N.mapPass = new Et(i.x, i.y, q), N.camera.updateProjectionMatrix() } if (N.map === null) { const q = { minFilter: rt, magFilter: rt, format: gt };
                N.map = new Et(i.x, i.y, q), N.map.texture.name = D.name + ".shadowMap", N.camera.updateProjectionMatrix() }
            s.setRenderTarget(N.map), s.clear(); const F = N.getViewportCount(); for (let q = 0; q < F; q++) { const K = N.getViewport(q);
                o.set(r.x * K.x, r.y * K.y, r.x * K.z, r.y * K.w), $.viewport(o), N.updateMatrices(D, q), n = N.getFrustum(), T(w, R, N.camera, D, this.type) }!N.isPointLightShadow && this.type === _i && m(N, R), N.needsUpdate = !1 }
        v.needsUpdate = !1, s.setRenderTarget(P, Z, oe) };

    function m(y, w) { const R = e.update(x);
        d.defines.VSM_SAMPLES !== y.blurSamples && (d.defines.VSM_SAMPLES = y.blurSamples, f.defines.VSM_SAMPLES = y.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), d.uniforms.shadow_pass.value = y.map.texture, d.uniforms.resolution.value = y.mapSize, d.uniforms.radius.value = y.radius, s.setRenderTarget(y.mapPass), s.clear(), s.renderBufferDirect(w, null, R, d, x, null), f.uniforms.shadow_pass.value = y.mapPass.texture, f.uniforms.resolution.value = y.mapSize, f.uniforms.radius.value = y.radius, s.setRenderTarget(y.map), s.clear(), s.renderBufferDirect(w, null, R, f, x, null) }

    function p(y, w, R, P, Z, oe, $) { let _ = null; const L = P.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial; if (L !== void 0 ? _ = L : _ = P.isPointLight === !0 ? l : a, s.localClippingEnabled && R.clipShadows === !0 && R.clippingPlanes.length !== 0 || R.displacementMap && R.displacementScale !== 0 || R.alphaMap && R.alphaTest > 0) { const D = _.uuid,
                N = R.uuid; let B = c[D];
            B === void 0 && (B = {}, c[D] = B); let F = B[N];
            F === void 0 && (F = _.clone(), B[N] = F), _ = F } return _.visible = R.visible, _.wireframe = R.wireframe, $ === _i ? _.side = R.shadowSide !== null ? R.shadowSide : R.side : _.side = R.shadowSide !== null ? R.shadowSide : u[R.side], _.alphaMap = R.alphaMap, _.alphaTest = R.alphaTest, _.clipShadows = R.clipShadows, _.clippingPlanes = R.clippingPlanes, _.clipIntersection = R.clipIntersection, _.displacementMap = R.displacementMap, _.displacementScale = R.displacementScale, _.displacementBias = R.displacementBias, _.wireframeLinewidth = R.wireframeLinewidth, _.linewidth = R.linewidth, P.isPointLight === !0 && _.isMeshDistanceMaterial === !0 && (_.referencePosition.setFromMatrixPosition(P.matrixWorld), _.nearDistance = Z, _.farDistance = oe), _ }

    function T(y, w, R, P, Z) { if (y.visible === !1) return; if (y.layers.test(w.layers) && (y.isMesh || y.isLine || y.isPoints) && (y.castShadow || y.receiveShadow && Z === _i) && (!y.frustumCulled || n.intersectsObject(y))) { y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse, y.matrixWorld); const _ = e.update(y),
                L = y.material; if (Array.isArray(L)) { const D = _.groups; for (let N = 0, B = D.length; N < B; N++) { const F = D[N],
                        q = L[F.materialIndex]; if (q && q.visible) { const K = p(y, _, q, P, R.near, R.far, Z);
                        s.renderBufferDirect(R, null, _, K, y, F) } } } else if (L.visible) { const D = p(y, _, L, P, R.near, R.far, Z);
                s.renderBufferDirect(R, null, _, D, y, null) } } const $ = y.children; for (let _ = 0, L = $.length; _ < L; _++) T($[_], w, R, P, Z) } }

function kp(s, e, t) { const n = t.isWebGL2;

    function i() { let C = !1; const he = new We; let ae = null; const Me = new We(0, 0, 0, 0); return { setMask: function(V) { ae !== V && !C && (s.colorMask(V, V, V, V), ae = V) }, setLocked: function(V) { C = V }, setClear: function(V, me, Ie, Je, Mt) { Mt === !0 && (V *= Je, me *= Je, Ie *= Je), he.set(V, me, Ie, Je), Me.equals(he) === !1 && (s.clearColor(V, me, Ie, Je), Me.copy(he)) }, reset: function() { C = !1, ae = null, Me.set(-1, 0, 0, 0) } } }

    function r() { let C = !1,
            he = null,
            ae = null,
            Me = null; return { setTest: function(V) { V ? U(2929) : Fe(2929) }, setMask: function(V) { he !== V && !C && (s.depthMask(V), he = V) }, setFunc: function(V) { if (ae !== V) { if (V) switch (V) {
                        case Ac:
                            s.depthFunc(512); break;
                        case Cc:
                            s.depthFunc(519); break;
                        case Rc:
                            s.depthFunc(513); break;
                        case Jr:
                            s.depthFunc(515); break;
                        case Lc:
                            s.depthFunc(514); break;
                        case Pc:
                            s.depthFunc(518); break;
                        case Dc:
                            s.depthFunc(516); break;
                        case Ic:
                            s.depthFunc(517); break;
                        default:
                            s.depthFunc(515) } else s.depthFunc(515);
                    ae = V } }, setLocked: function(V) { C = V }, setClear: function(V) { Me !== V && (s.clearDepth(V), Me = V) }, reset: function() { C = !1, he = null, ae = null, Me = null } } }

    function o() { let C = !1,
            he = null,
            ae = null,
            Me = null,
            V = null,
            me = null,
            Ie = null,
            Je = null,
            Mt = null; return { setTest: function(Ke) { C || (Ke ? U(2960) : Fe(2960)) }, setMask: function(Ke) { he !== Ke && !C && (s.stencilMask(Ke), he = Ke) }, setFunc: function(Ke, Ft, Wt) {
                (ae !== Ke || Me !== Ft || V !== Wt) && (s.stencilFunc(Ke, Ft, Wt), ae = Ke, Me = Ft, V = Wt) }, setOp: function(Ke, Ft, Wt) {
                (me !== Ke || Ie !== Ft || Je !== Wt) && (s.stencilOp(Ke, Ft, Wt), me = Ke, Ie = Ft, Je = Wt) }, setLocked: function(Ke) { C = Ke }, setClear: function(Ke) { Mt !== Ke && (s.clearStencil(Ke), Mt = Ke) }, reset: function() { C = !1, he = null, ae = null, Me = null, V = null, me = null, Ie = null, Je = null, Mt = null } } } const a = new i,
        l = new r,
        c = new o; let h = {},
        u = {},
        d = new WeakMap,
        f = [],
        g = null,
        x = !1,
        v = null,
        m = null,
        p = null,
        T = null,
        y = null,
        w = null,
        R = null,
        P = !1,
        Z = null,
        oe = null,
        $ = null,
        _ = null,
        L = null; const D = s.getParameter(35661); let N = !1,
        B = 0; const F = s.getParameter(7938);
    F.indexOf("WebGL") !== -1 ? (B = parseFloat(/^WebGL (\d)/.exec(F)[1]), N = B >= 1) : F.indexOf("OpenGL ES") !== -1 && (B = parseFloat(/^OpenGL ES (\d)/.exec(F)[1]), N = B >= 2); let q = null,
        K = {}; const ue = s.getParameter(3088),
        k = s.getParameter(2978),
        Y = new We().fromArray(ue),
        se = new We().fromArray(k);

    function fe(C, he, ae) { const Me = new Uint8Array(4),
            V = s.createTexture();
        s.bindTexture(C, V), s.texParameteri(C, 10241, 9728), s.texParameteri(C, 10240, 9728); for (let me = 0; me < ae; me++) s.texImage2D(he + me, 0, 6408, 1, 1, 0, 6408, 5121, Me); return V } const xe = {};
    xe[3553] = fe(3553, 3553, 1), xe[34067] = fe(34067, 34069, 6), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), U(2929), l.setFunc(Jr), ee(!1), le(Mo), U(2884), X(Kt);

    function U(C) { h[C] !== !0 && (s.enable(C), h[C] = !0) }

    function Fe(C) { h[C] !== !1 && (s.disable(C), h[C] = !1) }

    function ge(C, he) { return u[C] !== he ? (s.bindFramebuffer(C, he), u[C] = he, n && (C === 36009 && (u[36160] = he), C === 36160 && (u[36009] = he)), !0) : !1 }

    function Se(C, he) { let ae = f,
            Me = !1; if (C)
            if (ae = d.get(he), ae === void 0 && (ae = [], d.set(he, ae)), C.isWebGLMultipleRenderTargets) { const V = C.texture; if (ae.length !== V.length || ae[0] !== 36064) { for (let me = 0, Ie = V.length; me < Ie; me++) ae[me] = 36064 + me;
                    ae.length = V.length, Me = !0 } } else ae[0] !== 36064 && (ae[0] = 36064, Me = !0);
        else ae[0] !== 1029 && (ae[0] = 1029, Me = !0);
        Me && (t.isWebGL2 ? s.drawBuffers(ae) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae)) }

    function ce(C) { return g !== C ? (s.useProgram(C), g = C, !0) : !1 } const Ce = {
        [Pn]: 32774, [gc]: 32778, [xc]: 32779 }; if (n) Ce[Ao] = 32775, Ce[Co] = 32776;
    else { const C = e.get("EXT_blend_minmax");
        C !== null && (Ce[Ao] = C.MIN_EXT, Ce[Co] = C.MAX_EXT) } const we = {
        [_c]: 0, [vc]: 1, [yc]: 768, [Ro]: 770, [Tc]: 776, [Sc]: 774, [bc]: 772, [Mc]: 769, [Lo]: 771, [Ec]: 775, [wc]: 773 };

    function X(C, he, ae, Me, V, me, Ie, Je) { if (C === Kt) { x === !0 && (Fe(3042), x = !1); return } if (x === !1 && (U(3042), x = !0), C !== mc) { if (C !== v || Je !== P) { if ((m !== Pn || y !== Pn) && (s.blendEquation(32774), m = Pn, y = Pn), Je) switch (C) {
                    case yi:
                        s.blendFuncSeparate(1, 771, 1, 771); break;
                    case So:
                        s.blendFunc(1, 1); break;
                    case Eo:
                        s.blendFuncSeparate(0, 769, 0, 1); break;
                    case To:
                        s.blendFuncSeparate(0, 768, 0, 770); break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", C); break } else switch (C) {
                    case yi:
                        s.blendFuncSeparate(770, 771, 1, 771); break;
                    case So:
                        s.blendFunc(770, 1); break;
                    case Eo:
                        s.blendFuncSeparate(0, 769, 0, 1); break;
                    case To:
                        s.blendFunc(0, 768); break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", C); break }
                p = null, T = null, w = null, R = null, v = C, P = Je } return }
        V = V || he, me = me || ae, Ie = Ie || Me, (he !== m || V !== y) && (s.blendEquationSeparate(Ce[he], Ce[V]), m = he, y = V), (ae !== p || Me !== T || me !== w || Ie !== R) && (s.blendFuncSeparate(we[ae], we[Me], we[me], we[Ie]), p = ae, T = Me, w = me, R = Ie), v = C, P = null }

    function ne(C, he) { C.side === Ln ? Fe(2884) : U(2884); let ae = C.side === it;
        he && (ae = !ae), ee(ae), C.blending === yi && C.transparent === !1 ? X(Kt) : X(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.premultipliedAlpha), l.setFunc(C.depthFunc), l.setTest(C.depthTest), l.setMask(C.depthWrite), a.setMask(C.colorWrite); const Me = C.stencilWrite;
        c.setTest(Me), Me && (c.setMask(C.stencilWriteMask), c.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), c.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), ye(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === !0 ? U(32926) : Fe(32926) }

    function ee(C) { Z !== C && (C ? s.frontFace(2304) : s.frontFace(2305), Z = C) }

    function le(C) { C !== dc ? (U(2884), C !== oe && (C === Mo ? s.cullFace(1029) : C === fc ? s.cullFace(1028) : s.cullFace(1032))) : Fe(2884), oe = C }

    function re(C) { C !== $ && (N && s.lineWidth(C), $ = C) }

    function ye(C, he, ae) { C ? (U(32823), (_ !== he || L !== ae) && (s.polygonOffset(he, ae), _ = he, L = ae)) : Fe(32823) }

    function Ee(C) { C ? U(3089) : Fe(3089) }

    function De(C) { C === void 0 && (C = 33984 + D - 1), q !== C && (s.activeTexture(C), q = C) }

    function He(C, he) { q === null && De(); let ae = K[q];
        ae === void 0 && (ae = { type: void 0, texture: void 0 }, K[q] = ae), (ae.type !== C || ae.texture !== he) && (s.bindTexture(C, he || xe[C]), ae.type = C, ae.texture = he) }

    function ze() { const C = K[q];
        C !== void 0 && C.type !== void 0 && (s.bindTexture(C.type, null), C.type = void 0, C.texture = void 0) }

    function E() { try { s.compressedTexImage2D.apply(s, arguments) } catch (C) { console.error("THREE.WebGLState:", C) } }

    function M() { try { s.texSubImage2D.apply(s, arguments) } catch (C) { console.error("THREE.WebGLState:", C) } }

    function W() { try { s.texSubImage3D.apply(s, arguments) } catch (C) { console.error("THREE.WebGLState:", C) } }

    function te() { try { s.compressedTexSubImage2D.apply(s, arguments) } catch (C) { console.error("THREE.WebGLState:", C) } }

    function pe() { try { s.texStorage2D.apply(s, arguments) } catch (C) { console.error("THREE.WebGLState:", C) } }

    function G() { try { s.texStorage3D.apply(s, arguments) } catch (C) { console.error("THREE.WebGLState:", C) } }

    function _e() { try { s.texImage2D.apply(s, arguments) } catch (C) { console.error("THREE.WebGLState:", C) } }

    function A() { try { s.texImage3D.apply(s, arguments) } catch (C) { console.error("THREE.WebGLState:", C) } }

    function H(C) { Y.equals(C) === !1 && (s.scissor(C.x, C.y, C.z, C.w), Y.copy(C)) }

    function Q(C) { se.equals(C) === !1 && (s.viewport(C.x, C.y, C.z, C.w), se.copy(C)) }

    function de() { s.disable(3042), s.disable(2884), s.disable(2929), s.disable(32823), s.disable(3089), s.disable(2960), s.disable(32926), s.blendEquation(32774), s.blendFunc(1, 0), s.blendFuncSeparate(1, 0, 1, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(513), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(519, 0, 4294967295), s.stencilOp(7680, 7680, 7680), s.clearStencil(0), s.cullFace(1029), s.frontFace(2305), s.polygonOffset(0, 0), s.activeTexture(33984), s.bindFramebuffer(36160, null), n === !0 && (s.bindFramebuffer(36009, null), s.bindFramebuffer(36008, null)), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), h = {}, q = null, K = {}, u = {}, d = new WeakMap, f = [], g = null, x = !1, v = null, m = null, p = null, T = null, y = null, w = null, R = null, P = !1, Z = null, oe = null, $ = null, _ = null, L = null, Y.set(0, 0, s.canvas.width, s.canvas.height), se.set(0, 0, s.canvas.width, s.canvas.height), a.reset(), l.reset(), c.reset() } return { buffers: { color: a, depth: l, stencil: c }, enable: U, disable: Fe, bindFramebuffer: ge, drawBuffers: Se, useProgram: ce, setBlending: X, setMaterial: ne, setFlipSided: ee, setCullFace: le, setLineWidth: re, setPolygonOffset: ye, setScissorTest: Ee, activeTexture: De, bindTexture: He, unbindTexture: ze, compressedTexImage2D: E, texImage2D: _e, texImage3D: A, texStorage2D: pe, texStorage3D: G, texSubImage2D: M, texSubImage3D: W, compressedTexSubImage2D: te, scissor: H, viewport: Q, reset: de } }

function Wp(s, e, t, n, i, r, o) { const a = i.isWebGL2,
        l = i.maxTextures,
        c = i.maxCubemapSize,
        h = i.maxTextureSize,
        u = i.maxSamples,
        f = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : void 0,
        g = new WeakMap; let x, v = !1; try { v = typeof OffscreenCanvas != "undefined" && new OffscreenCanvas(1, 1).getContext("2d") !== null } catch {}

    function m(E, M) { return v ? new OffscreenCanvas(E, M) : Ei("canvas") }

    function p(E, M, W, te) { let pe = 1; if ((E.width > te || E.height > te) && (pe = te / Math.max(E.width, E.height)), pe < 1 || M === !0)
            if (typeof HTMLImageElement != "undefined" && E instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && E instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && E instanceof ImageBitmap) { const G = M ? dh : Math.floor,
                    _e = G(pe * E.width),
                    A = G(pe * E.height);
                x === void 0 && (x = m(_e, A)); const H = W ? m(_e, A) : x; return H.width = _e, H.height = A, H.getContext("2d").drawImage(E, 0, 0, _e, A), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + E.width + "x" + E.height + ") to (" + _e + "x" + A + ")."), H } else return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + E.width + "x" + E.height + ")."), E;
        return E }

    function T(E) { return ia(E.width) && ia(E.height) }

    function y(E) { return a ? !1 : E.wrapS !== bt || E.wrapT !== bt || E.minFilter !== rt && E.minFilter !== ut }

    function w(E, M) { return E.generateMipmaps && M && E.minFilter !== rt && E.minFilter !== ut }

    function R(E) { s.generateMipmap(E) }

    function P(E, M, W, te, pe = !1) { if (a === !1) return M; if (E !== null) { if (s[E] !== void 0) return s[E];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'") } let G = M; return M === 6403 && (W === 5126 && (G = 33326), W === 5131 && (G = 33325), W === 5121 && (G = 33321)), M === 33319 && (W === 5126 && (G = 33328), W === 5131 && (G = 33327), W === 5121 && (G = 33323)), M === 6408 && (W === 5126 && (G = 34836), W === 5131 && (G = 34842), W === 5121 && (G = te === je && pe === !1 ? 35907 : 32856), W === 32819 && (G = 32854), W === 32820 && (G = 32855)), (G === 33325 || G === 33326 || G === 33327 || G === 33328 || G === 34842 || G === 34836) && e.get("EXT_color_buffer_float"), G }

    function Z(E, M, W) { return w(E, W) === !0 || E.isFramebufferTexture && E.minFilter !== rt && E.minFilter !== ut ? Math.log2(Math.max(M.width, M.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? M.mipmaps.length : 1 }

    function oe(E) { return E === rt || E === Do || E === Io ? 9728 : 9729 }

    function $(E) { const M = E.target;
        M.removeEventListener("dispose", $), L(M), M.isVideoTexture && g.delete(M), o.memory.textures-- }

    function _(E) { const M = E.target;
        M.removeEventListener("dispose", _), D(M) }

    function L(E) { const M = n.get(E);
        M.__webglInit !== void 0 && (s.deleteTexture(M.__webglTexture), n.remove(E)) }

    function D(E) { const M = E.texture,
            W = n.get(E),
            te = n.get(M); if (!!E) { if (te.__webglTexture !== void 0 && (s.deleteTexture(te.__webglTexture), o.memory.textures--), E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget)
                for (let pe = 0; pe < 6; pe++) s.deleteFramebuffer(W.__webglFramebuffer[pe]), W.__webglDepthbuffer && s.deleteRenderbuffer(W.__webglDepthbuffer[pe]);
            else s.deleteFramebuffer(W.__webglFramebuffer), W.__webglDepthbuffer && s.deleteRenderbuffer(W.__webglDepthbuffer), W.__webglMultisampledFramebuffer && s.deleteFramebuffer(W.__webglMultisampledFramebuffer), W.__webglColorRenderbuffer && s.deleteRenderbuffer(W.__webglColorRenderbuffer), W.__webglDepthRenderbuffer && s.deleteRenderbuffer(W.__webglDepthRenderbuffer); if (E.isWebGLMultipleRenderTargets)
                for (let pe = 0, G = M.length; pe < G; pe++) { const _e = n.get(M[pe]);
                    _e.__webglTexture && (s.deleteTexture(_e.__webglTexture), o.memory.textures--), n.remove(M[pe]) }
            n.remove(M), n.remove(E) } } let N = 0;

    function B() { N = 0 }

    function F() { const E = N; return E >= l && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + l), N += 1, E }

    function q(E, M) { const W = n.get(E); if (E.isVideoTexture && re(E), E.version > 0 && W.__version !== E.version) { const te = E.image; if (te === void 0) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
            else if (te.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
            else { U(W, E, M); return } }
        t.activeTexture(33984 + M), t.bindTexture(3553, W.__webglTexture) }

    function K(E, M) { const W = n.get(E); if (E.version > 0 && W.__version !== E.version) { U(W, E, M); return }
        t.activeTexture(33984 + M), t.bindTexture(35866, W.__webglTexture) }

    function ue(E, M) { const W = n.get(E); if (E.version > 0 && W.__version !== E.version) { U(W, E, M); return }
        t.activeTexture(33984 + M), t.bindTexture(32879, W.__webglTexture) }

    function k(E, M) { const W = n.get(E); if (E.version > 0 && W.__version !== E.version) { Fe(W, E, M); return }
        t.activeTexture(33984 + M), t.bindTexture(34067, W.__webglTexture) } const Y = {
            [es]: 10497, [bt]: 33071, [ts]: 33648 },
        se = {
            [rt]: 9728, [Do]: 9984, [Io]: 9986, [ut]: 9729, [Vc]: 9985, [Ji]: 9987 };

    function fe(E, M, W) { if (W ? (s.texParameteri(E, 10242, Y[M.wrapS]), s.texParameteri(E, 10243, Y[M.wrapT]), (E === 32879 || E === 35866) && s.texParameteri(E, 32882, Y[M.wrapR]), s.texParameteri(E, 10240, se[M.magFilter]), s.texParameteri(E, 10241, se[M.minFilter])) : (s.texParameteri(E, 10242, 33071), s.texParameteri(E, 10243, 33071), (E === 32879 || E === 35866) && s.texParameteri(E, 32882, 33071), (M.wrapS !== bt || M.wrapT !== bt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), s.texParameteri(E, 10240, oe(M.magFilter)), s.texParameteri(E, 10241, oe(M.minFilter)), M.minFilter !== rt && M.minFilter !== ut && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) { const te = e.get("EXT_texture_filter_anisotropic"); if (M.type === vn && e.has("OES_texture_float_linear") === !1 || a === !1 && M.type === Dn && e.has("OES_texture_half_float_linear") === !1) return;
            (M.anisotropy > 1 || n.get(M).__currentAnisotropy) && (s.texParameterf(E, te.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, i.getMaxAnisotropy())), n.get(M).__currentAnisotropy = M.anisotropy) } }

    function xe(E, M) { E.__webglInit === void 0 && (E.__webglInit = !0, M.addEventListener("dispose", $), E.__webglTexture = s.createTexture(), o.memory.textures++) }

    function U(E, M, W) { let te = 3553;
        M.isDataTexture2DArray && (te = 35866), M.isDataTexture3D && (te = 32879), xe(E, M), t.activeTexture(33984 + W), t.bindTexture(te, E.__webglTexture), s.pixelStorei(37440, M.flipY), s.pixelStorei(37441, M.premultiplyAlpha), s.pixelStorei(3317, M.unpackAlignment), s.pixelStorei(37443, 0); const pe = y(M) && T(M.image) === !1; let G = p(M.image, pe, !1, h);
        G = ye(M, G); const _e = T(G) || a,
            A = r.convert(M.format, M.encoding); let H = r.convert(M.type),
            Q = P(M.internalFormat, A, H, M.encoding, M.isVideoTexture);
        fe(te, M, _e); let de; const C = M.mipmaps,
            he = a && M.isVideoTexture !== !0,
            ae = E.__version === void 0,
            Me = Z(M, G, _e); if (M.isDepthTexture) Q = 6402, a ? M.type === vn ? Q = 36012 : M.type === $i ? Q = 33190 : M.type === In ? Q = 35056 : Q = 33189 : M.type === vn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), M.format === yn && Q === 6402 && M.type !== wi && M.type !== $i && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), M.type = wi, H = r.convert(M.type)), M.format === Fn && Q === 6402 && (Q = 34041, M.type !== In && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), M.type = In, H = r.convert(M.type))), he && ae ? t.texStorage2D(3553, 1, Q, G.width, G.height) : t.texImage2D(3553, 0, Q, G.width, G.height, 0, A, H, null);
        else if (M.isDataTexture)
            if (C.length > 0 && _e) { he && ae && t.texStorage2D(3553, Me, Q, C[0].width, C[0].height); for (let V = 0, me = C.length; V < me; V++) de = C[V], he ? t.texSubImage2D(3553, 0, 0, 0, de.width, de.height, A, H, de.data) : t.texImage2D(3553, V, Q, de.width, de.height, 0, A, H, de.data);
                M.generateMipmaps = !1 } else he ? (ae && t.texStorage2D(3553, Me, Q, G.width, G.height), t.texSubImage2D(3553, 0, 0, 0, G.width, G.height, A, H, G.data)) : t.texImage2D(3553, 0, Q, G.width, G.height, 0, A, H, G.data);
        else if (M.isCompressedTexture) { he && ae && t.texStorage2D(3553, Me, Q, C[0].width, C[0].height); for (let V = 0, me = C.length; V < me; V++) de = C[V], M.format !== gt ? A !== null ? he ? t.compressedTexSubImage2D(3553, V, 0, 0, de.width, de.height, A, de.data) : t.compressedTexImage2D(3553, V, Q, de.width, de.height, 0, de.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : he ? t.texSubImage2D(3553, V, 0, 0, de.width, de.height, A, H, de.data) : t.texImage2D(3553, V, Q, de.width, de.height, 0, A, H, de.data) } else if (M.isDataTexture2DArray) he ? (ae && t.texStorage3D(35866, Me, Q, G.width, G.height, G.depth), t.texSubImage3D(35866, 0, 0, 0, 0, G.width, G.height, G.depth, A, H, G.data)) : t.texImage3D(35866, 0, Q, G.width, G.height, G.depth, 0, A, H, G.data);
        else if (M.isDataTexture3D) he ? (ae && t.texStorage3D(32879, Me, Q, G.width, G.height, G.depth), t.texSubImage3D(32879, 0, 0, 0, 0, G.width, G.height, G.depth, A, H, G.data)) : t.texImage3D(32879, 0, Q, G.width, G.height, G.depth, 0, A, H, G.data);
        else if (M.isFramebufferTexture) he && ae ? t.texStorage2D(3553, Me, Q, G.width, G.height) : t.texImage2D(3553, 0, Q, G.width, G.height, 0, A, H, null);
        else if (C.length > 0 && _e) { he && ae && t.texStorage2D(3553, Me, Q, C[0].width, C[0].height); for (let V = 0, me = C.length; V < me; V++) de = C[V], he ? t.texSubImage2D(3553, V, 0, 0, A, H, de) : t.texImage2D(3553, V, Q, A, H, de);
            M.generateMipmaps = !1 } else he ? (ae && t.texStorage2D(3553, Me, Q, G.width, G.height), t.texSubImage2D(3553, 0, 0, 0, A, H, G)) : t.texImage2D(3553, 0, Q, A, H, G);
        w(M, _e) && R(te), E.__version = M.version, M.onUpdate && M.onUpdate(M) }

    function Fe(E, M, W) { if (M.image.length !== 6) return;
        xe(E, M), t.activeTexture(33984 + W), t.bindTexture(34067, E.__webglTexture), s.pixelStorei(37440, M.flipY), s.pixelStorei(37441, M.premultiplyAlpha), s.pixelStorei(3317, M.unpackAlignment), s.pixelStorei(37443, 0); const te = M && (M.isCompressedTexture || M.image[0].isCompressedTexture),
            pe = M.image[0] && M.image[0].isDataTexture,
            G = []; for (let V = 0; V < 6; V++) !te && !pe ? G[V] = p(M.image[V], !1, !0, c) : G[V] = pe ? M.image[V].image : M.image[V], G[V] = ye(M, G[V]); const _e = G[0],
            A = T(_e) || a,
            H = r.convert(M.format, M.encoding),
            Q = r.convert(M.type),
            de = P(M.internalFormat, H, Q, M.encoding),
            C = a && M.isVideoTexture !== !0,
            he = E.__version === void 0; let ae = Z(M, _e, A);
        fe(34067, M, A); let Me; if (te) { C && he && t.texStorage2D(34067, ae, de, _e.width, _e.height); for (let V = 0; V < 6; V++) { Me = G[V].mipmaps; for (let me = 0; me < Me.length; me++) { const Ie = Me[me];
                    M.format !== gt ? H !== null ? C ? t.compressedTexSubImage2D(34069 + V, me, 0, 0, Ie.width, Ie.height, H, Ie.data) : t.compressedTexImage2D(34069 + V, me, de, Ie.width, Ie.height, 0, Ie.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : C ? t.texSubImage2D(34069 + V, me, 0, 0, Ie.width, Ie.height, H, Q, Ie.data) : t.texImage2D(34069 + V, me, de, Ie.width, Ie.height, 0, H, Q, Ie.data) } } } else { Me = M.mipmaps, C && he && (Me.length > 0 && ae++, t.texStorage2D(34067, ae, de, G[0].width, G[0].height)); for (let V = 0; V < 6; V++)
                if (pe) { C ? t.texSubImage2D(34069 + V, 0, 0, 0, G[V].width, G[V].height, H, Q, G[V].data) : t.texImage2D(34069 + V, 0, de, G[V].width, G[V].height, 0, H, Q, G[V].data); for (let me = 0; me < Me.length; me++) { const Je = Me[me].image[V].image;
                        C ? t.texSubImage2D(34069 + V, me + 1, 0, 0, Je.width, Je.height, H, Q, Je.data) : t.texImage2D(34069 + V, me + 1, de, Je.width, Je.height, 0, H, Q, Je.data) } } else { C ? t.texSubImage2D(34069 + V, 0, 0, 0, H, Q, G[V]) : t.texImage2D(34069 + V, 0, de, H, Q, G[V]); for (let me = 0; me < Me.length; me++) { const Ie = Me[me];
                        C ? t.texSubImage2D(34069 + V, me + 1, 0, 0, H, Q, Ie.image[V]) : t.texImage2D(34069 + V, me + 1, de, H, Q, Ie.image[V]) } } }
        w(M, A) && R(34067), E.__version = M.version, M.onUpdate && M.onUpdate(M) }

    function ge(E, M, W, te, pe) { const G = r.convert(W.format, W.encoding),
            _e = r.convert(W.type),
            A = P(W.internalFormat, G, _e, W.encoding);
        n.get(M).__hasExternalTextures || (pe === 32879 || pe === 35866 ? t.texImage3D(pe, 0, A, M.width, M.height, M.depth, 0, G, _e, null) : t.texImage2D(pe, 0, A, M.width, M.height, 0, G, _e, null)), t.bindFramebuffer(36160, E), M.useRenderToTexture ? f.framebufferTexture2DMultisampleEXT(36160, te, pe, n.get(W).__webglTexture, 0, le(M)) : s.framebufferTexture2D(36160, te, pe, n.get(W).__webglTexture, 0), t.bindFramebuffer(36160, null) }

    function Se(E, M, W) { if (s.bindRenderbuffer(36161, E), M.depthBuffer && !M.stencilBuffer) { let te = 33189; if (W || M.useRenderToTexture) { const pe = M.depthTexture;
                pe && pe.isDepthTexture && (pe.type === vn ? te = 36012 : pe.type === $i && (te = 33190)); const G = le(M);
                M.useRenderToTexture ? f.renderbufferStorageMultisampleEXT(36161, G, te, M.width, M.height) : s.renderbufferStorageMultisample(36161, G, te, M.width, M.height) } else s.renderbufferStorage(36161, te, M.width, M.height);
            s.framebufferRenderbuffer(36160, 36096, 36161, E) } else if (M.depthBuffer && M.stencilBuffer) { const te = le(M);
            W && M.useRenderbuffer ? s.renderbufferStorageMultisample(36161, te, 35056, M.width, M.height) : M.useRenderToTexture ? f.renderbufferStorageMultisampleEXT(36161, te, 35056, M.width, M.height) : s.renderbufferStorage(36161, 34041, M.width, M.height), s.framebufferRenderbuffer(36160, 33306, 36161, E) } else { const te = M.isWebGLMultipleRenderTargets === !0 ? M.texture[0] : M.texture,
                pe = r.convert(te.format, te.encoding),
                G = r.convert(te.type),
                _e = P(te.internalFormat, pe, G, te.encoding),
                A = le(M);
            W && M.useRenderbuffer ? s.renderbufferStorageMultisample(36161, A, _e, M.width, M.height) : M.useRenderToTexture ? f.renderbufferStorageMultisampleEXT(36161, A, _e, M.width, M.height) : s.renderbufferStorage(36161, _e, M.width, M.height) }
        s.bindRenderbuffer(36161, null) }

    function ce(E, M) { if (M && M.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported"); if (t.bindFramebuffer(36160, E), !(M.depthTexture && M.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        (!n.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = !0), q(M.depthTexture, 0); const te = n.get(M.depthTexture).__webglTexture,
            pe = le(M); if (M.depthTexture.format === yn) M.useRenderToTexture ? f.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, te, 0, pe) : s.framebufferTexture2D(36160, 36096, 3553, te, 0);
        else if (M.depthTexture.format === Fn) M.useRenderToTexture ? f.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, te, 0, pe) : s.framebufferTexture2D(36160, 33306, 3553, te, 0);
        else throw new Error("Unknown depthTexture format") }

    function Ce(E) { const M = n.get(E),
            W = E.isWebGLCubeRenderTarget === !0; if (E.depthTexture && !M.__autoAllocateDepthBuffer) { if (W) throw new Error("target.depthTexture not supported in Cube render targets");
            ce(M.__webglFramebuffer, E) } else if (W) { M.__webglDepthbuffer = []; for (let te = 0; te < 6; te++) t.bindFramebuffer(36160, M.__webglFramebuffer[te]), M.__webglDepthbuffer[te] = s.createRenderbuffer(), Se(M.__webglDepthbuffer[te], E, !1) } else t.bindFramebuffer(36160, M.__webglFramebuffer), M.__webglDepthbuffer = s.createRenderbuffer(), Se(M.__webglDepthbuffer, E, !1);
        t.bindFramebuffer(36160, null) }

    function we(E, M, W) { const te = n.get(E);
        M !== void 0 && ge(te.__webglFramebuffer, E, E.texture, 36064, 3553), W !== void 0 && Ce(E) }

    function X(E) { const M = E.texture,
            W = n.get(E),
            te = n.get(M);
        E.addEventListener("dispose", _), E.isWebGLMultipleRenderTargets !== !0 && (te.__webglTexture === void 0 && (te.__webglTexture = s.createTexture()), te.__version = M.version, o.memory.textures++); const pe = E.isWebGLCubeRenderTarget === !0,
            G = E.isWebGLMultipleRenderTargets === !0,
            _e = M.isDataTexture3D || M.isDataTexture2DArray,
            A = T(E) || a; if (pe) { W.__webglFramebuffer = []; for (let H = 0; H < 6; H++) W.__webglFramebuffer[H] = s.createFramebuffer() } else if (W.__webglFramebuffer = s.createFramebuffer(), G)
            if (i.drawBuffers) { const H = E.texture; for (let Q = 0, de = H.length; Q < de; Q++) { const C = n.get(H[Q]);
                    C.__webglTexture === void 0 && (C.__webglTexture = s.createTexture(), o.memory.textures++) } } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
        else if (E.useRenderbuffer)
            if (a) { W.__webglMultisampledFramebuffer = s.createFramebuffer(), W.__webglColorRenderbuffer = s.createRenderbuffer(), s.bindRenderbuffer(36161, W.__webglColorRenderbuffer); const H = r.convert(M.format, M.encoding),
                    Q = r.convert(M.type),
                    de = P(M.internalFormat, H, Q, M.encoding),
                    C = le(E);
                s.renderbufferStorageMultisample(36161, C, de, E.width, E.height), t.bindFramebuffer(36160, W.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(36160, 36064, 36161, W.__webglColorRenderbuffer), s.bindRenderbuffer(36161, null), E.depthBuffer && (W.__webglDepthRenderbuffer = s.createRenderbuffer(), Se(W.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(36160, null) } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
        if (pe) { t.bindTexture(34067, te.__webglTexture), fe(34067, M, A); for (let H = 0; H < 6; H++) ge(W.__webglFramebuffer[H], E, M, 36064, 34069 + H);
            w(M, A) && R(34067), t.unbindTexture() } else if (G) { const H = E.texture; for (let Q = 0, de = H.length; Q < de; Q++) { const C = H[Q],
                    he = n.get(C);
                t.bindTexture(3553, he.__webglTexture), fe(3553, C, A), ge(W.__webglFramebuffer, E, C, 36064 + Q, 3553), w(C, A) && R(3553) }
            t.unbindTexture() } else { let H = 3553;
            _e && (a ? H = M.isDataTexture3D ? 32879 : 35866 : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")), t.bindTexture(H, te.__webglTexture), fe(H, M, A), ge(W.__webglFramebuffer, E, M, 36064, H), w(M, A) && R(H), t.unbindTexture() }
        E.depthBuffer && Ce(E) }

    function ne(E) { const M = T(E) || a,
            W = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture]; for (let te = 0, pe = W.length; te < pe; te++) { const G = W[te]; if (w(G, M)) { const _e = E.isWebGLCubeRenderTarget ? 34067 : 3553,
                    A = n.get(G).__webglTexture;
                t.bindTexture(_e, A), R(_e), t.unbindTexture() } } }

    function ee(E) { if (E.useRenderbuffer)
            if (a) { const M = E.width,
                    W = E.height; let te = 16384; const pe = [36064],
                    G = E.stencilBuffer ? 33306 : 36096;
                E.depthBuffer && pe.push(G), E.ignoreDepthForMultisampleCopy || (E.depthBuffer && (te |= 256), E.stencilBuffer && (te |= 1024)); const _e = n.get(E);
                t.bindFramebuffer(36008, _e.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, _e.__webglFramebuffer), E.ignoreDepthForMultisampleCopy && (s.invalidateFramebuffer(36008, [G]), s.invalidateFramebuffer(36009, [G])), s.blitFramebuffer(0, 0, M, W, 0, 0, M, W, te, 9728), s.invalidateFramebuffer(36008, pe), t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, _e.__webglMultisampledFramebuffer) } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.") }

    function le(E) { return a && (E.useRenderbuffer || E.useRenderToTexture) ? Math.min(u, E.samples) : 0 }

    function re(E) { const M = o.render.frame;
        g.get(E) !== M && (g.set(E, M), E.update()) }

    function ye(E, M) { const W = E.encoding,
            te = E.format,
            pe = E.type; return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || E.format === cs || W !== tn && (W === je ? a === !1 ? e.has("EXT_sRGB") === !0 && te === gt ? (E.format = cs, E.minFilter = ut, E.generateMipmaps = !1) : M = Mn.sRGBToLinear(M) : (te !== gt || pe !== en) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", W)), M } let Ee = !1,
        De = !1;

    function He(E, M) { E && E.isWebGLRenderTarget && (Ee === !1 && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), Ee = !0), E = E.texture), q(E, M) }

    function ze(E, M) { E && E.isWebGLCubeRenderTarget && (De === !1 && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), De = !0), E = E.texture), k(E, M) }
    this.allocateTextureUnit = F, this.resetTextureUnits = B, this.setTexture2D = q, this.setTexture2DArray = K, this.setTexture3D = ue, this.setTextureCube = k, this.rebindTextures = we, this.setupRenderTarget = X, this.updateRenderTargetMipmap = ne, this.updateMultisampleRenderTarget = ee, this.setupDepthRenderbuffer = Ce, this.setupFrameBufferTexture = ge, this.safeSetTexture2D = He, this.safeSetTextureCube = ze }

function qp(s, e, t) { const n = t.isWebGL2;

    function i(r, o = null) { let a; if (r === en) return 5121; if (r === qc) return 32819; if (r === Xc) return 32820; if (r === Gc) return 5120; if (r === kc) return 5122; if (r === wi) return 5123; if (r === Wc) return 5124; if (r === $i) return 5125; if (r === vn) return 5126; if (r === Dn) return n ? 5131 : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null); if (r === jc) return 6406; if (r === gt) return 6408; if (r === Zc) return 6409; if (r === Jc) return 6410; if (r === yn) return 6402; if (r === Fn) return 34041; if (r === $c) return 6403; if (r === Yc) return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408; if (r === cs) return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null; if (r === Kc) return 36244; if (r === Qc) return 33319; if (r === eh) return 33320; if (r === th) return 36249; if (r === ns || r === is || r === rs || r === ss)
            if (o === je)
                if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) { if (r === ns) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT; if (r === is) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT; if (r === rs) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT; if (r === ss) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT } else return null;
        else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) { if (r === ns) return a.COMPRESSED_RGB_S3TC_DXT1_EXT; if (r === is) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (r === rs) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (r === ss) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT } else return null; if (r === Fo || r === No || r === Bo || r === zo)
            if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) { if (r === Fo) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (r === No) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (r === Bo) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (r === zo) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } else return null;
        if (r === nh) return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null; if (r === Oo || r === Uo)
            if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) { if (r === Oo) return o === je ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2; if (r === Uo) return o === je ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC } else return null;
        if (r === Ho || r === Vo || r === Go || r === ko || r === Wo || r === qo || r === Xo || r === jo || r === Yo || r === Zo || r === Jo || r === $o || r === Ko || r === Qo)
            if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) { if (r === Ho) return o === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR; if (r === Vo) return o === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR; if (r === Go) return o === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR; if (r === ko) return o === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR; if (r === Wo) return o === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR; if (r === qo) return o === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR; if (r === Xo) return o === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR; if (r === jo) return o === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR; if (r === Yo) return o === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR; if (r === Zo) return o === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR; if (r === Jo) return o === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR; if (r === $o) return o === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR; if (r === Ko) return o === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR; if (r === Qo) return o === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR } else return null;
        if (r === ea)
            if (a = e.get("EXT_texture_compression_bptc"), a !== null) { if (r === ea) return o === je ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT } else return null;
        if (r === In) return n ? 34042 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) } return { convert: i } }
class rl extends yt { constructor(e = []) { super();
        this.cameras = e } }
rl.prototype.isArrayCamera = !0;
class oi extends Ue { constructor() { super();
        this.type = "Group" } }
oi.prototype.isGroup = !0;
const Xp = { type: "move" };
class Xs { constructor() { this._targetRay = null, this._grip = null, this._hand = null }
    getHandSpace() { return this._hand === null && (this._hand = new oi, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand }
    getTargetRaySpace() { return this._targetRay === null && (this._targetRay = new oi, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new S, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new S), this._targetRay }
    getGripSpace() { return this._grip === null && (this._grip = new oi, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new S, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new S), this._grip }
    dispatchEvent(e) { return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this }
    disconnect(e) { return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this }
    update(e, t, n) { let i = null,
            r = null,
            o = null; const a = this._targetRay,
            l = this._grip,
            c = this._hand; if (e && t.session.visibilityState !== "visible-blurred")
            if (a !== null && (i = t.getPose(e.targetRaySpace, n), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Xp))), c && e.hand) { o = !0; for (const x of e.hand.values()) { const v = t.getJointPose(x, n); if (c.joints[x.jointName] === void 0) { const p = new oi;
                        p.matrixAutoUpdate = !1, p.visible = !1, c.joints[x.jointName] = p, c.add(p) } const m = c.joints[x.jointName];
                    v !== null && (m.matrix.fromArray(v.transform.matrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.jointRadius = v.radius), m.visible = v !== null } const h = c.joints["index-finger-tip"],
                    u = c.joints["thumb-tip"],
                    d = h.position.distanceTo(u.position),
                    f = .02,
                    g = .005;
                c.inputState.pinching && d > f + g ? (c.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && d <= f - g && (c.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this })) } else l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
        return a !== null && (a.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this } }
class js extends ot { constructor(e, t, n, i, r, o, a, l, c, h) { if (h = h !== void 0 ? h : yn, h !== yn && h !== Fn) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        n === void 0 && h === yn && (n = wi), n === void 0 && h === Fn && (n = In);
        super(null, i, r, o, a, l, h, n, c);
        this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : rt, this.minFilter = l !== void 0 ? l : rt, this.flipY = !1, this.generateMipmaps = !1 } }
js.prototype.isDepthTexture = !0;
class jp extends nn { constructor(e, t) { super(); const n = this; let i = null,
            r = 1,
            o = null,
            a = "local-floor"; const l = e.extensions.has("WEBGL_multisampled_render_to_texture"); let c = null,
            h = null,
            u = null,
            d = null,
            f = !1,
            g = null; const x = t.getContextAttributes(); let v = null,
            m = null; const p = [],
            T = new Map,
            y = new yt;
        y.layers.enable(1), y.viewport = new We; const w = new yt;
        w.layers.enable(2), w.viewport = new We; const R = [y, w],
            P = new rl;
        P.layers.enable(1), P.layers.enable(2); let Z = null,
            oe = null;
        this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(k) { let Y = p[k]; return Y === void 0 && (Y = new Xs, p[k] = Y), Y.getTargetRaySpace() }, this.getControllerGrip = function(k) { let Y = p[k]; return Y === void 0 && (Y = new Xs, p[k] = Y), Y.getGripSpace() }, this.getHand = function(k) { let Y = p[k]; return Y === void 0 && (Y = new Xs, p[k] = Y), Y.getHandSpace() };

        function $(k) { const Y = T.get(k.inputSource);
            Y && Y.dispatchEvent({ type: k.type, data: k.inputSource }) }

        function _() { T.forEach(function(k, Y) { k.disconnect(Y) }), T.clear(), Z = null, oe = null, e.setRenderTarget(v), d = null, u = null, h = null, i = null, m = null, ue.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" }) }
        this.setFramebufferScaleFactor = function(k) { r = k, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.") }, this.setReferenceSpaceType = function(k) { a = k, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.") }, this.getReferenceSpace = function() { return o }, this.getBaseLayer = function() { return u !== null ? u : d }, this.getBinding = function() { return h }, this.getFrame = function() { return g }, this.getSession = function() { return i }, this.setSession = async function(k) { if (i = k, i !== null) { if (v = e.getRenderTarget(), i.addEventListener("select", $), i.addEventListener("selectstart", $), i.addEventListener("selectend", $), i.addEventListener("squeeze", $), i.addEventListener("squeezestart", $), i.addEventListener("squeezeend", $), i.addEventListener("end", _), i.addEventListener("inputsourceschange", L), x.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) { const Y = { antialias: i.renderState.layers === void 0 ? x.antialias : !0, alpha: x.alpha, depth: x.depth, stencil: x.stencil, framebufferScaleFactor: r };
                    d = new XRWebGLLayer(i, t, Y), i.updateRenderState({ baseLayer: d }), m = new Et(d.framebufferWidth, d.framebufferHeight, { format: gt, type: en, encoding: e.outputEncoding }) } else { f = x.antialias; let Y = null,
                        se = null,
                        fe = null;
                    x.depth && (fe = x.stencil ? 35056 : 33190, Y = x.stencil ? Fn : yn, se = x.stencil ? In : wi); const xe = { colorFormat: e.outputEncoding === je ? 35907 : 32856, depthFormat: fe, scaleFactor: r };
                    h = new XRWebGLBinding(i, t), u = h.createProjectionLayer(xe), i.updateRenderState({ layers: [u] }), f ? m = new gs(u.textureWidth, u.textureHeight, { format: gt, type: en, depthTexture: new js(u.textureWidth, u.textureHeight, se, void 0, void 0, void 0, void 0, void 0, void 0, Y), stencilBuffer: x.stencil, ignoreDepth: u.ignoreDepthValues, useRenderToTexture: l, encoding: e.outputEncoding }) : m = new Et(u.textureWidth, u.textureHeight, { format: gt, type: en, depthTexture: new js(u.textureWidth, u.textureHeight, se, void 0, void 0, void 0, void 0, void 0, void 0, Y), stencilBuffer: x.stencil, ignoreDepth: u.ignoreDepthValues, encoding: e.outputEncoding }) }
                m.isXRRenderTarget = !0, this.setFoveation(1), o = await i.requestReferenceSpace(a), ue.setContext(i), ue.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" }) } };

        function L(k) { const Y = i.inputSources; for (let se = 0; se < p.length; se++) T.set(Y[se], p[se]); for (let se = 0; se < k.removed.length; se++) { const fe = k.removed[se],
                    xe = T.get(fe);
                xe && (xe.dispatchEvent({ type: "disconnected", data: fe }), T.delete(fe)) } for (let se = 0; se < k.added.length; se++) { const fe = k.added[se],
                    xe = T.get(fe);
                xe && xe.dispatchEvent({ type: "connected", data: fe }) } } const D = new S,
            N = new S;

        function B(k, Y, se) { D.setFromMatrixPosition(Y.matrixWorld), N.setFromMatrixPosition(se.matrixWorld); const fe = D.distanceTo(N),
                xe = Y.projectionMatrix.elements,
                U = se.projectionMatrix.elements,
                Fe = xe[14] / (xe[10] - 1),
                ge = xe[14] / (xe[10] + 1),
                Se = (xe[9] + 1) / xe[5],
                ce = (xe[9] - 1) / xe[5],
                Ce = (xe[8] - 1) / xe[0],
                we = (U[8] + 1) / U[0],
                X = Fe * Ce,
                ne = Fe * we,
                ee = fe / (-Ce + we),
                le = ee * -Ce;
            Y.matrixWorld.decompose(k.position, k.quaternion, k.scale), k.translateX(le), k.translateZ(ee), k.matrixWorld.compose(k.position, k.quaternion, k.scale), k.matrixWorldInverse.copy(k.matrixWorld).invert(); const re = Fe + ee,
                ye = ge + ee,
                Ee = X - le,
                De = ne + (fe - le),
                He = Se * ge / ye * re,
                ze = ce * ge / ye * re;
            k.projectionMatrix.makePerspective(Ee, De, He, ze, re, ye) }

        function F(k, Y) { Y === null ? k.matrixWorld.copy(k.matrix) : k.matrixWorld.multiplyMatrices(Y.matrixWorld, k.matrix), k.matrixWorldInverse.copy(k.matrixWorld).invert() }
        this.updateCamera = function(k) { if (i === null) return;
            P.near = w.near = y.near = k.near, P.far = w.far = y.far = k.far, (Z !== P.near || oe !== P.far) && (i.updateRenderState({ depthNear: P.near, depthFar: P.far }), Z = P.near, oe = P.far); const Y = k.parent,
                se = P.cameras;
            F(P, Y); for (let xe = 0; xe < se.length; xe++) F(se[xe], Y);
            P.matrixWorld.decompose(P.position, P.quaternion, P.scale), k.position.copy(P.position), k.quaternion.copy(P.quaternion), k.scale.copy(P.scale), k.matrix.copy(P.matrix), k.matrixWorld.copy(P.matrixWorld); const fe = k.children; for (let xe = 0, U = fe.length; xe < U; xe++) fe[xe].updateMatrixWorld(!0);
            se.length === 2 ? B(P, y, w) : P.projectionMatrix.copy(y.projectionMatrix) }, this.getCamera = function() { return P }, this.getFoveation = function() { if (u !== null) return u.fixedFoveation; if (d !== null) return d.fixedFoveation }, this.setFoveation = function(k) { u !== null && (u.fixedFoveation = k), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = k) }; let q = null;

        function K(k, Y) { if (c = Y.getViewerPose(o), g = Y, c !== null) { const fe = c.views;
                d !== null && (e.setRenderTargetFramebuffer(m, d.framebuffer), e.setRenderTarget(m)); let xe = !1;
                fe.length !== P.cameras.length && (P.cameras.length = 0, xe = !0); for (let U = 0; U < fe.length; U++) { const Fe = fe[U]; let ge = null; if (d !== null) ge = d.getViewport(Fe);
                    else { const ce = h.getViewSubImage(u, Fe);
                        ge = ce.viewport, U === 0 && (e.setRenderTargetTextures(m, ce.colorTexture, u.ignoreDepthValues ? void 0 : ce.depthStencilTexture), e.setRenderTarget(m)) } const Se = R[U];
                    Se.matrix.fromArray(Fe.transform.matrix), Se.projectionMatrix.fromArray(Fe.projectionMatrix), Se.viewport.set(ge.x, ge.y, ge.width, ge.height), U === 0 && P.matrix.copy(Se.matrix), xe === !0 && P.cameras.push(Se) } } const se = i.inputSources; for (let fe = 0; fe < p.length; fe++) { const xe = p[fe],
                    U = se[fe];
                xe.update(U, Y, o) }
            q && q(k, Y), g = null } const ue = new Ma;
        ue.setAnimationLoop(K), this.setAnimationLoop = function(k) { q = k }, this.dispose = function() {} } }

function Yp(s) {
    function e(m, p) { m.fogColor.value.copy(p.color), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density) }

    function t(m, p, T, y, w) { p.isMeshBasicMaterial ? n(m, p) : p.isMeshLambertMaterial ? (n(m, p), l(m, p)) : p.isMeshToonMaterial ? (n(m, p), h(m, p)) : p.isMeshPhongMaterial ? (n(m, p), c(m, p)) : p.isMeshStandardMaterial ? (n(m, p), p.isMeshPhysicalMaterial ? d(m, p, w) : u(m, p)) : p.isMeshMatcapMaterial ? (n(m, p), f(m, p)) : p.isMeshDepthMaterial ? (n(m, p), g(m, p)) : p.isMeshDistanceMaterial ? (n(m, p), x(m, p)) : p.isMeshNormalMaterial ? (n(m, p), v(m, p)) : p.isLineBasicMaterial ? (i(m, p), p.isLineDashedMaterial && r(m, p)) : p.isPointsMaterial ? o(m, p, T, y) : p.isSpriteMaterial ? a(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1) }

    function n(m, p) { m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map), p.alphaMap && (m.alphaMap.value = p.alphaMap), p.specularMap && (m.specularMap.value = p.specularMap), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest); const T = s.get(p).envMap;
        T && (m.envMap.value = T, m.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap && (m.lightMap.value = p.lightMap, m.lightMapIntensity.value = p.lightMapIntensity), p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity); let y;
        p.map ? y = p.map : p.specularMap ? y = p.specularMap : p.displacementMap ? y = p.displacementMap : p.normalMap ? y = p.normalMap : p.bumpMap ? y = p.bumpMap : p.roughnessMap ? y = p.roughnessMap : p.metalnessMap ? y = p.metalnessMap : p.alphaMap ? y = p.alphaMap : p.emissiveMap ? y = p.emissiveMap : p.clearcoatMap ? y = p.clearcoatMap : p.clearcoatNormalMap ? y = p.clearcoatNormalMap : p.clearcoatRoughnessMap ? y = p.clearcoatRoughnessMap : p.specularIntensityMap ? y = p.specularIntensityMap : p.specularColorMap ? y = p.specularColorMap : p.transmissionMap ? y = p.transmissionMap : p.thicknessMap ? y = p.thicknessMap : p.sheenColorMap ? y = p.sheenColorMap : p.sheenRoughnessMap && (y = p.sheenRoughnessMap), y !== void 0 && (y.isWebGLRenderTarget && (y = y.texture), y.matrixAutoUpdate === !0 && y.updateMatrix(), m.uvTransform.value.copy(y.matrix)); let w;
        p.aoMap ? w = p.aoMap : p.lightMap && (w = p.lightMap), w !== void 0 && (w.isWebGLRenderTarget && (w = w.texture), w.matrixAutoUpdate === !0 && w.updateMatrix(), m.uv2Transform.value.copy(w.matrix)) }

    function i(m, p) { m.diffuse.value.copy(p.color), m.opacity.value = p.opacity }

    function r(m, p) { m.dashSize.value = p.dashSize, m.totalSize.value = p.dashSize + p.gapSize, m.scale.value = p.scale }

    function o(m, p, T, y) { m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * T, m.scale.value = y * .5, p.map && (m.map.value = p.map), p.alphaMap && (m.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest); let w;
        p.map ? w = p.map : p.alphaMap && (w = p.alphaMap), w !== void 0 && (w.matrixAutoUpdate === !0 && w.updateMatrix(), m.uvTransform.value.copy(w.matrix)) }

    function a(m, p) { m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.rotation.value = p.rotation, p.map && (m.map.value = p.map), p.alphaMap && (m.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest); let T;
        p.map ? T = p.map : p.alphaMap && (T = p.alphaMap), T !== void 0 && (T.matrixAutoUpdate === !0 && T.updateMatrix(), m.uvTransform.value.copy(T.matrix)) }

    function l(m, p) { p.emissiveMap && (m.emissiveMap.value = p.emissiveMap) }

    function c(m, p) { m.specular.value.copy(p.specular), m.shininess.value = Math.max(p.shininess, 1e-4), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap), p.bumpMap && (m.bumpMap.value = p.bumpMap, m.bumpScale.value = p.bumpScale, p.side === it && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, m.normalScale.value.copy(p.normalScale), p.side === it && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias) }

    function h(m, p) { p.gradientMap && (m.gradientMap.value = p.gradientMap), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap), p.bumpMap && (m.bumpMap.value = p.bumpMap, m.bumpScale.value = p.bumpScale, p.side === it && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, m.normalScale.value.copy(p.normalScale), p.side === it && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias) }

    function u(m, p) { m.roughness.value = p.roughness, m.metalness.value = p.metalness, p.roughnessMap && (m.roughnessMap.value = p.roughnessMap), p.metalnessMap && (m.metalnessMap.value = p.metalnessMap), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap), p.bumpMap && (m.bumpMap.value = p.bumpMap, m.bumpScale.value = p.bumpScale, p.side === it && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, m.normalScale.value.copy(p.normalScale), p.side === it && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), s.get(p).envMap && (m.envMapIntensity.value = p.envMapIntensity) }

    function d(m, p, T) { u(m, p), m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap)), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap), p.clearcoatNormalMap && (m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), m.clearcoatNormalMap.value = p.clearcoatNormalMap, p.side === it && m.clearcoatNormalScale.value.negate())), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = T.texture, m.transmissionSamplerSize.value.set(T.width, T.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap) }

    function f(m, p) { p.matcap && (m.matcap.value = p.matcap), p.bumpMap && (m.bumpMap.value = p.bumpMap, m.bumpScale.value = p.bumpScale, p.side === it && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, m.normalScale.value.copy(p.normalScale), p.side === it && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias) }

    function g(m, p) { p.displacementMap && (m.displacementMap.value = p.displacementMap, m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias) }

    function x(m, p) { p.displacementMap && (m.displacementMap.value = p.displacementMap, m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), m.referencePosition.value.copy(p.referencePosition), m.nearDistance.value = p.nearDistance, m.farDistance.value = p.farDistance }

    function v(m, p) { p.bumpMap && (m.bumpMap.value = p.bumpMap, m.bumpScale.value = p.bumpScale, p.side === it && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, m.normalScale.value.copy(p.normalScale), p.side === it && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias) } return { refreshFogUniforms: e, refreshMaterialUniforms: t } }

function Zp() { const s = Ei("canvas"); return s.style.display = "block", s }

function ke(s = {}) { const e = s.canvas !== void 0 ? s.canvas : Zp(),
        t = s.context !== void 0 ? s.context : null,
        n = s.alpha !== void 0 ? s.alpha : !1,
        i = s.depth !== void 0 ? s.depth : !0,
        r = s.stencil !== void 0 ? s.stencil : !0,
        o = s.antialias !== void 0 ? s.antialias : !1,
        a = s.premultipliedAlpha !== void 0 ? s.premultipliedAlpha : !0,
        l = s.preserveDrawingBuffer !== void 0 ? s.preserveDrawingBuffer : !1,
        c = s.powerPreference !== void 0 ? s.powerPreference : "default",
        h = s.failIfMajorPerformanceCaveat !== void 0 ? s.failIfMajorPerformanceCaveat : !1; let u = null,
        d = null; const f = [],
        g = [];
    this.domElement = e, this.debug = { checkShaderErrors: !0 }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = tn, this.physicallyCorrectLights = !1, this.toneMapping = Qt, this.toneMappingExposure = 1; const x = this; let v = !1,
        m = 0,
        p = 0,
        T = null,
        y = -1,
        w = null; const R = new We,
        P = new We; let Z = null,
        oe = e.width,
        $ = e.height,
        _ = 1,
        L = null,
        D = null; const N = new We(0, 0, oe, $),
        B = new We(0, 0, oe, $); let F = !1; const q = new Mr; let K = !1,
        ue = !1,
        k = null; const Y = new be,
        se = new S,
        fe = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };

    function xe() { return T === null ? _ : 1 } let U = t;

    function Fe(b, I) { for (let O = 0; O < b.length; O++) { const z = b[O],
                j = e.getContext(z, I); if (j !== null) return j } return null } try { const b = { alpha: !0, depth: i, stencil: r, antialias: o, premultipliedAlpha: a, preserveDrawingBuffer: l, powerPreference: c, failIfMajorPerformanceCaveat: h }; if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Zr}`), e.addEventListener("webglcontextlost", de, !1), e.addEventListener("webglcontextrestored", C, !1), U === null) { const I = ["webgl2", "webgl", "experimental-webgl"]; if (x.isWebGL1Renderer === !0 && I.shift(), U = Fe(I, b), U === null) throw Fe(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.") }
        U.getShaderPrecisionFormat === void 0 && (U.getShaderPrecisionFormat = function() { return { rangeMin: 1, rangeMax: 1, precision: 1 } }) } catch (b) { throw console.error("THREE.WebGLRenderer: " + b.message), b } let ge, Se, ce, Ce, we, X, ne, ee, le, re, ye, Ee, De, He, ze, E, M, W, te, pe, G, _e, A;

    function H() { ge = new pf(U), Se = new lf(U, ge, s), ge.init(Se), _e = new qp(U, ge, Se), ce = new kp(U, ge, Se), Ce = new xf(U), we = new Dp, X = new Wp(U, ge, ce, we, Se, _e, Ce), ne = new hf(x), ee = new ff(x), le = new Ph(U, Se), A = new of(U, ge, le, Se), re = new mf(U, le, Ce, A), ye = new Mf(U, re, le, Ce), te = new yf(U, Se, X), E = new cf(we), Ee = new Pp(x, ne, ee, ge, Se, A, E), De = new Yp(we), He = new Fp, ze = new Hp(ge, Se), W = new sf(x, ne, ce, ye, n, a), M = new il(x, ye, Se), pe = new af(U, ge, Ce, Se), G = new gf(U, ge, Ce, Se), Ce.programs = Ee.programs, x.capabilities = Se, x.extensions = ge, x.properties = we, x.renderLists = He, x.shadowMap = M, x.state = ce, x.info = Ce }
    H(); const Q = new jp(x, U);
    this.xr = Q, this.getContext = function() { return U }, this.getContextAttributes = function() { return U.getContextAttributes() }, this.forceContextLoss = function() { const b = ge.get("WEBGL_lose_context");
        b && b.loseContext() }, this.forceContextRestore = function() { const b = ge.get("WEBGL_lose_context");
        b && b.restoreContext() }, this.getPixelRatio = function() { return _ }, this.setPixelRatio = function(b) { b !== void 0 && (_ = b, this.setSize(oe, $, !1)) }, this.getSize = function(b) { return b.set(oe, $) }, this.setSize = function(b, I, O) { if (Q.isPresenting) { console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."); return }
        oe = b, $ = I, e.width = Math.floor(b * _), e.height = Math.floor(I * _), O !== !1 && (e.style.width = b + "px", e.style.height = I + "px"), this.setViewport(0, 0, b, I) }, this.getDrawingBufferSize = function(b) { return b.set(oe * _, $ * _).floor() }, this.setDrawingBufferSize = function(b, I, O) { oe = b, $ = I, _ = O, e.width = Math.floor(b * O), e.height = Math.floor(I * O), this.setViewport(0, 0, b, I) }, this.getCurrentViewport = function(b) { return b.copy(R) }, this.getViewport = function(b) { return b.copy(N) }, this.setViewport = function(b, I, O, z) { b.isVector4 ? N.set(b.x, b.y, b.z, b.w) : N.set(b, I, O, z), ce.viewport(R.copy(N).multiplyScalar(_).floor()) }, this.getScissor = function(b) { return b.copy(B) }, this.setScissor = function(b, I, O, z) { b.isVector4 ? B.set(b.x, b.y, b.z, b.w) : B.set(b, I, O, z), ce.scissor(P.copy(B).multiplyScalar(_).floor()) }, this.getScissorTest = function() { return F }, this.setScissorTest = function(b) { ce.setScissorTest(F = b) }, this.setOpaqueSort = function(b) { L = b }, this.setTransparentSort = function(b) { D = b }, this.getClearColor = function(b) { return b.copy(W.getClearColor()) }, this.setClearColor = function() { W.setClearColor.apply(W, arguments) }, this.getClearAlpha = function() { return W.getClearAlpha() }, this.setClearAlpha = function() { W.setClearAlpha.apply(W, arguments) }, this.clear = function(b, I, O) { let z = 0;
        (b === void 0 || b) && (z |= 16384), (I === void 0 || I) && (z |= 256), (O === void 0 || O) && (z |= 1024), U.clear(z) }, this.clearColor = function() { this.clear(!0, !1, !1) }, this.clearDepth = function() { this.clear(!1, !0, !1) }, this.clearStencil = function() { this.clear(!1, !1, !0) }, this.dispose = function() { e.removeEventListener("webglcontextlost", de, !1), e.removeEventListener("webglcontextrestored", C, !1), He.dispose(), ze.dispose(), we.dispose(), ne.dispose(), ee.dispose(), ye.dispose(), A.dispose(), Ee.dispose(), Q.dispose(), Q.removeEventListener("sessionstart", Ie), Q.removeEventListener("sessionend", Je), k && (k.dispose(), k = null), Mt.stop() };

    function de(b) { b.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), v = !0 }

    function C() { console.log("THREE.WebGLRenderer: Context Restored."), v = !1; const b = Ce.autoReset,
            I = M.enabled,
            O = M.autoUpdate,
            z = M.needsUpdate,
            j = M.type;
        H(), Ce.autoReset = b, M.enabled = I, M.autoUpdate = O, M.needsUpdate = z, M.type = j }

    function he(b) { const I = b.target;
        I.removeEventListener("dispose", he), ae(I) }

    function ae(b) { Me(b), we.remove(b) }

    function Me(b) { const I = we.get(b).programs;
        I !== void 0 && (I.forEach(function(O) { Ee.releaseProgram(O) }), b.isShaderMaterial && Ee.releaseShaderCache(b)) }
    this.renderBufferDirect = function(b, I, O, z, j, Te) { I === null && (I = fe); const Ae = j.isMesh && j.matrixWorld.determinant() < 0,
            Le = cc(b, I, O, z, j);
        ce.setMaterial(z, Ae); let Re = O.index; const Ve = O.attributes.position; if (Re === null) { if (Ve === void 0 || Ve.count === 0) return } else if (Re.count === 0) return; let Ne = 1;
        z.wireframe === !0 && (Re = re.getWireframeAttribute(O), Ne = 2), A.setup(j, z, Le, O, Re); let Be, Qe = pe;
        Re !== null && (Be = le.get(Re), Qe = G, Qe.setIndex(Be)); const _n = Re !== null ? Re.count : Ve.count,
            An = O.drawRange.start * Ne,
            Oe = O.drawRange.count * Ne,
            Nt = Te !== null ? Te.start * Ne : 0,
            nt = Te !== null ? Te.count * Ne : 1 / 0,
            Bt = Math.max(An, Nt),
            ji = Math.min(_n, An + Oe, Nt + nt) - 1,
            zt = Math.max(0, ji - Bt + 1); if (zt !== 0) { if (j.isMesh) z.wireframe === !0 ? (ce.setLineWidth(z.wireframeLinewidth * xe()), Qe.setMode(1)) : Qe.setMode(4);
            else if (j.isLine) { let qt = z.linewidth;
                qt === void 0 && (qt = 1), ce.setLineWidth(qt * xe()), j.isLineSegments ? Qe.setMode(1) : j.isLineLoop ? Qe.setMode(2) : Qe.setMode(3) } else j.isPoints ? Qe.setMode(0) : j.isSprite && Qe.setMode(4); if (j.isInstancedMesh) Qe.renderInstances(Bt, zt, j.count);
            else if (O.isInstancedBufferGeometry) { const qt = Math.min(O.instanceCount, O._maxInstanceCount);
                Qe.renderInstances(Bt, zt, qt) } else Qe.render(Bt, zt) } }, this.compile = function(b, I) { d = ze.get(b), d.init(), g.push(d), b.traverseVisible(function(O) { O.isLight && O.layers.test(I.layers) && (d.pushLight(O), O.castShadow && d.pushShadow(O)) }), d.setupLights(x.physicallyCorrectLights), b.traverse(function(O) { const z = O.material; if (z)
                if (Array.isArray(z))
                    for (let j = 0; j < z.length; j++) { const Te = z[j];
                        Yr(Te, b, O) } else Yr(z, b, O) }), g.pop(), d = null }; let V = null;

    function me(b) { V && V(b) }

    function Ie() { Mt.stop() }

    function Je() { Mt.start() } const Mt = new Ma;
    Mt.setAnimationLoop(me), typeof window != "undefined" && Mt.setContext(window), this.setAnimationLoop = function(b) { V = b, Q.setAnimationLoop(b), b === null ? Mt.stop() : Mt.start() }, Q.addEventListener("sessionstart", Ie), Q.addEventListener("sessionend", Je), this.render = function(b, I) { if (I !== void 0 && I.isCamera !== !0) { console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); return } if (v === !0) return;
        b.autoUpdate === !0 && b.updateMatrixWorld(), I.parent === null && I.updateMatrixWorld(), Q.enabled === !0 && Q.isPresenting === !0 && (Q.cameraAutoUpdate === !0 && Q.updateCamera(I), I = Q.getCamera()), b.isScene === !0 && b.onBeforeRender(x, b, I, T), d = ze.get(b, g.length), d.init(), g.push(d), Y.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), q.setFromProjectionMatrix(Y), ue = this.localClippingEnabled, K = E.init(this.clippingPlanes, ue, I), u = He.get(b, f.length), u.init(), f.push(u), Ke(b, I, 0, x.sortObjects), u.finish(), x.sortObjects === !0 && u.sort(L, D), K === !0 && E.beginShadows(); const O = d.state.shadowsArray; if (M.render(O, b, I), K === !0 && E.endShadows(), this.info.autoReset === !0 && this.info.reset(), W.render(u, b), d.setupLights(x.physicallyCorrectLights), I.isArrayCamera) { const z = I.cameras; for (let j = 0, Te = z.length; j < Te; j++) { const Ae = z[j];
                Ft(u, b, Ae, Ae.viewport) } } else Ft(u, b, I);
        T !== null && (X.updateMultisampleRenderTarget(T), X.updateRenderTargetMipmap(T)), b.isScene === !0 && b.onAfterRender(x, b, I), ce.buffers.depth.setTest(!0), ce.buffers.depth.setMask(!0), ce.buffers.color.setMask(!0), ce.setPolygonOffset(!1), A.resetDefaultState(), y = -1, w = null, g.pop(), g.length > 0 ? d = g[g.length - 1] : d = null, f.pop(), f.length > 0 ? u = f[f.length - 1] : u = null };

    function Ke(b, I, O, z) { if (b.visible === !1) return; if (b.layers.test(I.layers)) { if (b.isGroup) O = b.renderOrder;
            else if (b.isLOD) b.autoUpdate === !0 && b.update(I);
            else if (b.isLight) d.pushLight(b), b.castShadow && d.pushShadow(b);
            else if (b.isSprite) { if (!b.frustumCulled || q.intersectsSprite(b)) { z && se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Y); const Ae = ye.update(b),
                        Le = b.material;
                    Le.visible && u.push(b, Ae, Le, O, se.z, null) } } else if ((b.isMesh || b.isLine || b.isPoints) && (b.isSkinnedMesh && b.skeleton.frame !== Ce.render.frame && (b.skeleton.update(), b.skeleton.frame = Ce.render.frame), !b.frustumCulled || q.intersectsObject(b))) { z && se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Y); const Ae = ye.update(b),
                    Le = b.material; if (Array.isArray(Le)) { const Re = Ae.groups; for (let Ve = 0, Ne = Re.length; Ve < Ne; Ve++) { const Be = Re[Ve],
                            Qe = Le[Be.materialIndex];
                        Qe && Qe.visible && u.push(b, Ae, Qe, O, se.z, Be) } } else Le.visible && u.push(b, Ae, Le, O, se.z, null) } } const Te = b.children; for (let Ae = 0, Le = Te.length; Ae < Le; Ae++) Ke(Te[Ae], I, O, z) }

    function Ft(b, I, O, z) { const j = b.opaque,
            Te = b.transmissive,
            Ae = b.transparent;
        d.setupLightsView(O), Te.length > 0 && Wt(j, I, O), z && ce.viewport(R.copy(z)), j.length > 0 && Xi(j, I, O), Te.length > 0 && Xi(Te, I, O), Ae.length > 0 && Xi(Ae, I, O) }

    function Wt(b, I, O) { if (k === null) { const Ae = o === !0 && Se.isWebGL2 === !0 ? gs : Et;
            k = new Ae(1024, 1024, { generateMipmaps: !0, type: _e.convert(Dn) !== null ? Dn : en, minFilter: Ji, magFilter: rt, wrapS: bt, wrapT: bt, useRenderToTexture: ge.has("WEBGL_multisampled_render_to_texture") }) } const z = x.getRenderTarget();
        x.setRenderTarget(k), x.clear(); const j = x.toneMapping;
        x.toneMapping = Qt, Xi(b, I, O), x.toneMapping = j, X.updateMultisampleRenderTarget(k), X.updateRenderTargetMipmap(k), x.setRenderTarget(z) }

    function Xi(b, I, O) { const z = I.isScene === !0 ? I.overrideMaterial : null; for (let j = 0, Te = b.length; j < Te; j++) { const Ae = b[j],
                Le = Ae.object,
                Re = Ae.geometry,
                Ve = z === null ? Ae.material : z,
                Ne = Ae.group;
            Le.layers.test(O.layers) && lc(Le, I, O, Re, Ve, Ne) } }

    function lc(b, I, O, z, j, Te) { b.onBeforeRender(x, I, O, z, j, Te), b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, b.matrixWorld), b.normalMatrix.getNormalMatrix(b.modelViewMatrix), j.onBeforeRender(x, I, O, z, b, Te), j.transparent === !0 && j.side === Ln ? (j.side = it, j.needsUpdate = !0, x.renderBufferDirect(O, I, z, j, b, Te), j.side = vi, j.needsUpdate = !0, x.renderBufferDirect(O, I, z, j, b, Te), j.side = Ln) : x.renderBufferDirect(O, I, z, j, b, Te), b.onAfterRender(x, I, O, z, j, Te) }

    function Yr(b, I, O) { I.isScene !== !0 && (I = fe); const z = we.get(b),
            j = d.state.lights,
            Te = d.state.shadowsArray,
            Ae = j.state.version,
            Le = Ee.getParameters(b, j.state, Te, I, O),
            Re = Ee.getProgramCacheKey(Le); let Ve = z.programs;
        z.environment = b.isMeshStandardMaterial ? I.environment : null, z.fog = I.fog, z.envMap = (b.isMeshStandardMaterial ? ee : ne).get(b.envMap || z.environment), Ve === void 0 && (b.addEventListener("dispose", he), Ve = new Map, z.programs = Ve); let Ne = Ve.get(Re); if (Ne !== void 0) { if (z.currentProgram === Ne && z.lightsStateVersion === Ae) return yo(b, Le), Ne } else Le.uniforms = Ee.getUniforms(b), b.onBuild(O, Le, x), b.onBeforeCompile(Le, x), Ne = Ee.acquireProgram(Le, Re), Ve.set(Re, Ne), z.uniforms = Le.uniforms; const Be = z.uniforms;
        (!b.isShaderMaterial && !b.isRawShaderMaterial || b.clipping === !0) && (Be.clippingPlanes = E.uniform), yo(b, Le), z.needsLights = uc(b), z.lightsStateVersion = Ae, z.needsLights && (Be.ambientLightColor.value = j.state.ambient, Be.lightProbe.value = j.state.probe, Be.directionalLights.value = j.state.directional, Be.directionalLightShadows.value = j.state.directionalShadow, Be.spotLights.value = j.state.spot, Be.spotLightShadows.value = j.state.spotShadow, Be.rectAreaLights.value = j.state.rectArea, Be.ltc_1.value = j.state.rectAreaLTC1, Be.ltc_2.value = j.state.rectAreaLTC2, Be.pointLights.value = j.state.point, Be.pointLightShadows.value = j.state.pointShadow, Be.hemisphereLights.value = j.state.hemi, Be.directionalShadowMap.value = j.state.directionalShadowMap, Be.directionalShadowMatrix.value = j.state.directionalShadowMatrix, Be.spotShadowMap.value = j.state.spotShadowMap, Be.spotShadowMatrix.value = j.state.spotShadowMatrix, Be.pointShadowMap.value = j.state.pointShadowMap, Be.pointShadowMatrix.value = j.state.pointShadowMatrix); const Qe = Ne.getUniforms(),
            _n = dn.seqWithValue(Qe.seq, Be); return z.currentProgram = Ne, z.uniformsList = _n, Ne }

    function yo(b, I) { const O = we.get(b);
        O.outputEncoding = I.outputEncoding, O.instancing = I.instancing, O.skinning = I.skinning, O.morphTargets = I.morphTargets, O.morphNormals = I.morphNormals, O.morphTargetsCount = I.morphTargetsCount, O.numClippingPlanes = I.numClippingPlanes, O.numIntersection = I.numClipIntersection, O.vertexAlphas = I.vertexAlphas, O.vertexTangents = I.vertexTangents, O.toneMapping = I.toneMapping }

    function cc(b, I, O, z, j) { I.isScene !== !0 && (I = fe), X.resetTextureUnits(); const Te = I.fog,
            Ae = z.isMeshStandardMaterial ? I.environment : null,
            Le = T === null ? x.outputEncoding : T.isXRRenderTarget === !0 ? T.texture.encoding : tn,
            Re = (z.isMeshStandardMaterial ? ee : ne).get(z.envMap || Ae),
            Ve = z.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4,
            Ne = !!z.normalMap && !!O.attributes.tangent,
            Be = !!O.morphAttributes.position,
            Qe = !!O.morphAttributes.normal,
            _n = O.morphAttributes.position ? O.morphAttributes.position.length : 0,
            An = z.toneMapped ? x.toneMapping : Qt,
            Oe = we.get(z),
            Nt = d.state.lights; if (K === !0 && (ue === !0 || b !== w)) { const Ct = b === w && z.id === y;
            E.setState(z, b, Ct) } let nt = !1;
        z.version === Oe.__version ? (Oe.needsLights && Oe.lightsStateVersion !== Nt.state.version || Oe.outputEncoding !== Le || j.isInstancedMesh && Oe.instancing === !1 || !j.isInstancedMesh && Oe.instancing === !0 || j.isSkinnedMesh && Oe.skinning === !1 || !j.isSkinnedMesh && Oe.skinning === !0 || Oe.envMap !== Re || z.fog && Oe.fog !== Te || Oe.numClippingPlanes !== void 0 && (Oe.numClippingPlanes !== E.numPlanes || Oe.numIntersection !== E.numIntersection) || Oe.vertexAlphas !== Ve || Oe.vertexTangents !== Ne || Oe.morphTargets !== Be || Oe.morphNormals !== Qe || Oe.toneMapping !== An || Se.isWebGL2 === !0 && Oe.morphTargetsCount !== _n) && (nt = !0) : (nt = !0, Oe.__version = z.version); let Bt = Oe.currentProgram;
        nt === !0 && (Bt = Yr(z, I, j)); let ji = !1,
            zt = !1,
            qt = !1; const ht = Bt.getUniforms(),
            xi = Oe.uniforms; if (ce.useProgram(Bt.program) && (ji = !0, zt = !0, qt = !0), z.id !== y && (y = z.id, zt = !0), ji || w !== b) { if (ht.setValue(U, "projectionMatrix", b.projectionMatrix), Se.logarithmicDepthBuffer && ht.setValue(U, "logDepthBufFC", 2 / (Math.log(b.far + 1) / Math.LN2)), w !== b && (w = b, zt = !0, qt = !0), z.isShaderMaterial || z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshStandardMaterial || z.envMap) { const Ct = ht.map.cameraPosition;
                Ct !== void 0 && Ct.setValue(U, se.setFromMatrixPosition(b.matrixWorld)) }(z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && ht.setValue(U, "isOrthographic", b.isOrthographicCamera === !0), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial || z.isShadowMaterial || j.isSkinnedMesh) && ht.setValue(U, "viewMatrix", b.matrixWorldInverse) } if (j.isSkinnedMesh) { ht.setOptional(U, j, "bindMatrix"), ht.setOptional(U, j, "bindMatrixInverse"); const Ct = j.skeleton;
            Ct && (Se.floatVertexTextures ? (Ct.boneTexture === null && Ct.computeBoneTexture(), ht.setValue(U, "boneTexture", Ct.boneTexture, X), ht.setValue(U, "boneTextureSize", Ct.boneTextureSize)) : ht.setOptional(U, Ct, "boneMatrices")) } return !!O && (O.morphAttributes.position !== void 0 || O.morphAttributes.normal !== void 0) && te.update(j, O, z, Bt), (zt || Oe.receiveShadow !== j.receiveShadow) && (Oe.receiveShadow = j.receiveShadow, ht.setValue(U, "receiveShadow", j.receiveShadow)), zt && (ht.setValue(U, "toneMappingExposure", x.toneMappingExposure), Oe.needsLights && hc(xi, qt), Te && z.fog && De.refreshFogUniforms(xi, Te), De.refreshMaterialUniforms(xi, z, _, $, k), dn.upload(U, Oe.uniformsList, xi, X)), z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (dn.upload(U, Oe.uniformsList, xi, X), z.uniformsNeedUpdate = !1), z.isSpriteMaterial && ht.setValue(U, "center", j.center), ht.setValue(U, "modelViewMatrix", j.modelViewMatrix), ht.setValue(U, "normalMatrix", j.normalMatrix), ht.setValue(U, "modelMatrix", j.matrixWorld), Bt }

    function hc(b, I) { b.ambientLightColor.needsUpdate = I, b.lightProbe.needsUpdate = I, b.directionalLights.needsUpdate = I, b.directionalLightShadows.needsUpdate = I, b.pointLights.needsUpdate = I, b.pointLightShadows.needsUpdate = I, b.spotLights.needsUpdate = I, b.spotLightShadows.needsUpdate = I, b.rectAreaLights.needsUpdate = I, b.hemisphereLights.needsUpdate = I }

    function uc(b) { return b.isMeshLambertMaterial || b.isMeshToonMaterial || b.isMeshPhongMaterial || b.isMeshStandardMaterial || b.isShadowMaterial || b.isShaderMaterial && b.lights === !0 }
    this.getActiveCubeFace = function() { return m }, this.getActiveMipmapLevel = function() { return p }, this.getRenderTarget = function() { return T }, this.setRenderTargetTextures = function(b, I, O) { we.get(b.texture).__webglTexture = I, we.get(b.depthTexture).__webglTexture = O; const z = we.get(b);
        z.__hasExternalTextures = !0, z.__hasExternalTextures && (z.__autoAllocateDepthBuffer = O === void 0, z.__autoAllocateDepthBuffer || b.useRenderToTexture && (console.warn("render-to-texture extension was disabled because an external texture was provided"), b.useRenderToTexture = !1, b.useRenderbuffer = !0)) }, this.setRenderTargetFramebuffer = function(b, I) { const O = we.get(b);
        O.__webglFramebuffer = I, O.__useDefaultFramebuffer = I === void 0 }, this.setRenderTarget = function(b, I = 0, O = 0) { T = b, m = I, p = O; let z = !0; if (b) { const Re = we.get(b);
            Re.__useDefaultFramebuffer !== void 0 ? (ce.bindFramebuffer(36160, null), z = !1) : Re.__webglFramebuffer === void 0 ? X.setupRenderTarget(b) : Re.__hasExternalTextures && X.rebindTextures(b, we.get(b.texture).__webglTexture, we.get(b.depthTexture).__webglTexture) } let j = null,
            Te = !1,
            Ae = !1; if (b) { const Re = b.texture;
            (Re.isDataTexture3D || Re.isDataTexture2DArray) && (Ae = !0); const Ve = we.get(b).__webglFramebuffer;
            b.isWebGLCubeRenderTarget ? (j = Ve[I], Te = !0) : b.useRenderbuffer ? j = we.get(b).__webglMultisampledFramebuffer : j = Ve, R.copy(b.viewport), P.copy(b.scissor), Z = b.scissorTest } else R.copy(N).multiplyScalar(_).floor(), P.copy(B).multiplyScalar(_).floor(), Z = F; if (ce.bindFramebuffer(36160, j) && Se.drawBuffers && z && ce.drawBuffers(b, j), ce.viewport(R), ce.scissor(P), ce.setScissorTest(Z), Te) { const Re = we.get(b.texture);
            U.framebufferTexture2D(36160, 36064, 34069 + I, Re.__webglTexture, O) } else if (Ae) { const Re = we.get(b.texture),
                Ve = I || 0;
            U.framebufferTextureLayer(36160, 36064, Re.__webglTexture, O || 0, Ve) }
        y = -1 }, this.readRenderTargetPixels = function(b, I, O, z, j, Te, Ae) { if (!(b && b.isWebGLRenderTarget)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); return } let Le = we.get(b).__webglFramebuffer; if (b.isWebGLCubeRenderTarget && Ae !== void 0 && (Le = Le[Ae]), Le) { ce.bindFramebuffer(36160, Le); try { const Re = b.texture,
                    Ve = Re.format,
                    Ne = Re.type; if (Ve !== gt && _e.convert(Ve) !== U.getParameter(35739)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."); return } const Be = Ne === Dn && (ge.has("EXT_color_buffer_half_float") || Se.isWebGL2 && ge.has("EXT_color_buffer_float")); if (Ne !== en && _e.convert(Ne) !== U.getParameter(35738) && !(Ne === vn && (Se.isWebGL2 || ge.has("OES_texture_float") || ge.has("WEBGL_color_buffer_float"))) && !Be) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."); return }
                U.checkFramebufferStatus(36160) === 36053 ? I >= 0 && I <= b.width - z && O >= 0 && O <= b.height - j && U.readPixels(I, O, z, j, _e.convert(Ve), _e.convert(Ne), Te) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") } finally { const Re = T !== null ? we.get(T).__webglFramebuffer : null;
                ce.bindFramebuffer(36160, Re) } } }, this.copyFramebufferToTexture = function(b, I, O = 0) { if (I.isFramebufferTexture !== !0) { console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture."); return } const z = Math.pow(2, -O),
            j = Math.floor(I.image.width * z),
            Te = Math.floor(I.image.height * z);
        X.setTexture2D(I, 0), U.copyTexSubImage2D(3553, O, 0, 0, b.x, b.y, j, Te), ce.unbindTexture() }, this.copyTextureToTexture = function(b, I, O, z = 0) { const j = I.image.width,
            Te = I.image.height,
            Ae = _e.convert(O.format),
            Le = _e.convert(O.type);
        X.setTexture2D(O, 0), U.pixelStorei(37440, O.flipY), U.pixelStorei(37441, O.premultiplyAlpha), U.pixelStorei(3317, O.unpackAlignment), I.isDataTexture ? U.texSubImage2D(3553, z, b.x, b.y, j, Te, Ae, Le, I.image.data) : I.isCompressedTexture ? U.compressedTexSubImage2D(3553, z, b.x, b.y, I.mipmaps[0].width, I.mipmaps[0].height, Ae, I.mipmaps[0].data) : U.texSubImage2D(3553, z, b.x, b.y, Ae, Le, I.image), z === 0 && O.generateMipmaps && U.generateMipmap(3553), ce.unbindTexture() }, this.copyTextureToTexture3D = function(b, I, O, z, j = 0) { if (x.isWebGL1Renderer) { console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."); return } const Te = b.max.x - b.min.x + 1,
            Ae = b.max.y - b.min.y + 1,
            Le = b.max.z - b.min.z + 1,
            Re = _e.convert(z.format),
            Ve = _e.convert(z.type); let Ne; if (z.isDataTexture3D) X.setTexture3D(z, 0), Ne = 32879;
        else if (z.isDataTexture2DArray) X.setTexture2DArray(z, 0), Ne = 35866;
        else { console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."); return }
        U.pixelStorei(37440, z.flipY), U.pixelStorei(37441, z.premultiplyAlpha), U.pixelStorei(3317, z.unpackAlignment); const Be = U.getParameter(3314),
            Qe = U.getParameter(32878),
            _n = U.getParameter(3316),
            An = U.getParameter(3315),
            Oe = U.getParameter(32877),
            Nt = O.isCompressedTexture ? O.mipmaps[0] : O.image;
        U.pixelStorei(3314, Nt.width), U.pixelStorei(32878, Nt.height), U.pixelStorei(3316, b.min.x), U.pixelStorei(3315, b.min.y), U.pixelStorei(32877, b.min.z), O.isDataTexture || O.isDataTexture3D ? U.texSubImage3D(Ne, j, I.x, I.y, I.z, Te, Ae, Le, Re, Ve, Nt.data) : O.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), U.compressedTexSubImage3D(Ne, j, I.x, I.y, I.z, Te, Ae, Le, Re, Nt.data)) : U.texSubImage3D(Ne, j, I.x, I.y, I.z, Te, Ae, Le, Re, Ve, Nt), U.pixelStorei(3314, Be), U.pixelStorei(32878, Qe), U.pixelStorei(3316, _n), U.pixelStorei(3315, An), U.pixelStorei(32877, Oe), j === 0 && z.generateMipmaps && U.generateMipmap(Ne), ce.unbindTexture() }, this.initTexture = function(b) { X.setTexture2D(b, 0), ce.unbindTexture() }, this.resetState = function() { m = 0, p = 0, T = null, ce.reset(), A.reset() }, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) }
ke.prototype.isWebGLRenderer = !0;
class Jp extends ke {}
Jp.prototype.isWebGL1Renderer = !0;
class sl extends Ue { constructor() { super();
        this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) }
    copy(e, t) { return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this }
    toJSON(e) { const t = super.toJSON(e); return this.fog !== null && (t.object.fog = this.fog.toJSON()), t } }
sl.prototype.isScene = !0;
class Di { constructor(e, t) { this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Si, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = Ot() }
    onUploadCallback() {}
    set needsUpdate(e) { e === !0 && this.version++ }
    setUsage(e) { return this.usage = e, this }
    copy(e) { return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this }
    copyAt(e, t, n) { e *= this.stride, n *= t.stride; for (let i = 0, r = this.stride; i < r; i++) this.array[e + i] = t.array[n + i]; return this }
    set(e, t = 0) { return this.array.set(e, t), this }
    clone(e) { e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ot()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer); const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),
            n = new this.constructor(t, this.stride); return n.setUsage(this.usage), n }
    onUpload(e) { return this.onUploadCallback = e, this }
    toJSON(e) { return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ot()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride } } }
Di.prototype.isInterleavedBuffer = !0;
const tt = new S;
class Ii { constructor(e, t, n, i = !1) { this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i === !0 }
    get count() { return this.data.count }
    get array() { return this.data.array }
    set needsUpdate(e) { this.data.needsUpdate = e }
    applyMatrix4(e) { for (let t = 0, n = this.data.count; t < n; t++) tt.x = this.getX(t), tt.y = this.getY(t), tt.z = this.getZ(t), tt.applyMatrix4(e), this.setXYZ(t, tt.x, tt.y, tt.z); return this }
    applyNormalMatrix(e) { for (let t = 0, n = this.count; t < n; t++) tt.x = this.getX(t), tt.y = this.getY(t), tt.z = this.getZ(t), tt.applyNormalMatrix(e), this.setXYZ(t, tt.x, tt.y, tt.z); return this }
    transformDirection(e) { for (let t = 0, n = this.count; t < n; t++) tt.x = this.getX(t), tt.y = this.getY(t), tt.z = this.getZ(t), tt.transformDirection(e), this.setXYZ(t, tt.x, tt.y, tt.z); return this }
    setX(e, t) { return this.data.array[e * this.data.stride + this.offset] = t, this }
    setY(e, t) { return this.data.array[e * this.data.stride + this.offset + 1] = t, this }
    setZ(e, t) { return this.data.array[e * this.data.stride + this.offset + 2] = t, this }
    setW(e, t) { return this.data.array[e * this.data.stride + this.offset + 3] = t, this }
    getX(e) { return this.data.array[e * this.data.stride + this.offset] }
    getY(e) { return this.data.array[e * this.data.stride + this.offset + 1] }
    getZ(e) { return this.data.array[e * this.data.stride + this.offset + 2] }
    getW(e) { return this.data.array[e * this.data.stride + this.offset + 3] }
    setXY(e, t, n) { return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this }
    setXYZ(e, t, n, i) { return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this }
    setXYZW(e, t, n, i, r) { return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this }
    clone(e) { if (e === void 0) { console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data."); const t = []; for (let n = 0; n < this.count; n++) { const i = n * this.data.stride + this.offset; for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]) } return new st(new this.array.constructor(t), this.itemSize, this.normalized) } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Ii(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized) }
    toJSON(e) { if (e === void 0) { console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data."); const t = []; for (let n = 0; n < this.count; n++) { const i = n * this.data.stride + this.offset; for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]) } return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized } } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: !0, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized } } }
Ii.prototype.isInterleavedBufferAttribute = !0;
class ol extends ft { constructor(e) { super();
        this.type = "SpriteMaterial", this.color = new ve(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(e) }
    copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this } }
ol.prototype.isSpriteMaterial = !0;
let ai;
const Fi = new S,
    li = new S,
    ci = new S,
    hi = new J,
    Ni = new J,
    al = new be,
    Tr = new S,
    Bi = new S,
    Ar = new S,
    ll = new J,
    Ys = new J,
    cl = new J;
class $p extends Ue { constructor(e) { super(); if (this.type = "Sprite", ai === void 0) { ai = new qe; const t = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),
                n = new Di(t, 5);
            ai.setIndex([0, 1, 2, 0, 2, 3]), ai.setAttribute("position", new Ii(n, 3, 0, !1)), ai.setAttribute("uv", new Ii(n, 2, 3, !1)) }
        this.geometry = ai, this.material = e !== void 0 ? e : new ol, this.center = new J(.5, .5) }
    raycast(e, t) { e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), li.setFromMatrixScale(this.matrixWorld), al.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), ci.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && li.multiplyScalar(-ci.z); const n = this.material.rotation; let i, r;
        n !== 0 && (r = Math.cos(n), i = Math.sin(n)); const o = this.center;
        Cr(Tr.set(-.5, -.5, 0), ci, o, li, i, r), Cr(Bi.set(.5, -.5, 0), ci, o, li, i, r), Cr(Ar.set(.5, .5, 0), ci, o, li, i, r), ll.set(0, 0), Ys.set(1, 0), cl.set(1, 1); let a = e.ray.intersectTriangle(Tr, Bi, Ar, !1, Fi); if (a === null && (Cr(Bi.set(-.5, .5, 0), ci, o, li, i, r), Ys.set(0, 1), a = e.ray.intersectTriangle(Tr, Ar, Bi, !1, Fi), a === null)) return; const l = e.ray.origin.distanceTo(Fi);
        l < e.near || l > e.far || t.push({ distance: l, point: Fi.clone(), uv: et.getUV(Fi, Tr, Bi, Ar, ll, Ys, cl, new J), face: null, object: this }) }
    copy(e) { return super.copy(e), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this } }
$p.prototype.isSprite = !0;

function Cr(s, e, t, n, i, r) { hi.subVectors(s, t).addScalar(.5).multiply(n), i !== void 0 ? (Ni.x = r * hi.x - i * hi.y, Ni.y = i * hi.x + r * hi.y) : Ni.copy(hi), s.copy(e), s.x += Ni.x, s.y += Ni.y, s.applyMatrix4(al) }
const hl = new S,
    ul = new We,
    dl = new We,
    Kp = new S,
    fl = new be;
class pl extends _t { constructor(e, t) { super(e, t);
        this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new be, this.bindMatrixInverse = new be }
    copy(e) { return super.copy(e), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this }
    bind(e, t) { this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert() }
    pose() { this.skeleton.pose() }
    normalizeSkinWeights() { const e = new We,
            t = this.geometry.attributes.skinWeight; for (let n = 0, i = t.count; n < i; n++) { e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.w = t.getW(n); const r = 1 / e.manhattanLength();
            r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w) } }
    updateMatrixWorld(e) { super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode) }
    boneTransform(e, t) { const n = this.skeleton,
            i = this.geometry;
        ul.fromBufferAttribute(i.attributes.skinIndex, e), dl.fromBufferAttribute(i.attributes.skinWeight, e), hl.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0); for (let r = 0; r < 4; r++) { const o = dl.getComponent(r); if (o !== 0) { const a = ul.getComponent(r);
                fl.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(Kp.copy(hl).applyMatrix4(fl), o) } } return t.applyMatrix4(this.bindMatrixInverse) } }
pl.prototype.isSkinnedMesh = !0;
class Qp extends Ue { constructor() { super();
        this.type = "Bone" } }
Qp.prototype.isBone = !0;
class em extends ot { constructor(e = null, t = 1, n = 1, i, r, o, a, l, c = rt, h = rt, u, d) { super(null, o, a, l, c, h, i, r, u, d);
        this.image = { data: e, width: t, height: n }, this.magFilter = c, this.minFilter = h, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } }
em.prototype.isDataTexture = !0;
class Zs extends st { constructor(e, t, n, i = 1) { typeof n == "number" && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));
        super(e, t, n);
        this.meshPerAttribute = i }
    copy(e) { return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this }
    toJSON() { const e = super.toJSON(); return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e } }
Zs.prototype.isInstancedBufferAttribute = !0;
const ml = new be,
    gl = new be,
    Rr = [],
    zi = new _t;
class tm extends _t { constructor(e, t, n) { super(e, t);
        this.instanceMatrix = new Zs(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1 }
    copy(e) { return super.copy(e), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this }
    getColorAt(e, t) { t.fromArray(this.instanceColor.array, e * 3) }
    getMatrixAt(e, t) { t.fromArray(this.instanceMatrix.array, e * 16) }
    raycast(e, t) { const n = this.matrixWorld,
            i = this.count; if (zi.geometry = this.geometry, zi.material = this.material, zi.material !== void 0)
            for (let r = 0; r < i; r++) { this.getMatrixAt(r, ml), gl.multiplyMatrices(n, ml), zi.matrixWorld = gl, zi.raycast(e, Rr); for (let o = 0, a = Rr.length; o < a; o++) { const l = Rr[o];
                    l.instanceId = r, l.object = this, t.push(l) }
                Rr.length = 0 } }
    setColorAt(e, t) { this.instanceColor === null && (this.instanceColor = new Zs(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3) }
    setMatrixAt(e, t) { t.toArray(this.instanceMatrix.array, e * 16) }
    updateMorphTargets() {}
    dispose() { this.dispatchEvent({ type: "dispose" }) } }
tm.prototype.isInstancedMesh = !0;
class ui extends ft { constructor(e) { super();
        this.type = "LineBasicMaterial", this.color = new ve(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(e) }
    copy(e) { return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this } }
ui.prototype.isLineBasicMaterial = !0;
const xl = new S,
    _l = new S,
    vl = new be,
    Js = new Wn,
    Lr = new kn;
class $s extends Ue { constructor(e = new qe, t = new ui) { super();
        this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets() }
    copy(e) { return super.copy(e), this.material = e.material, this.geometry = e.geometry, this }
    computeLineDistances() { const e = this.geometry; if (e.isBufferGeometry)
            if (e.index === null) { const t = e.attributes.position,
                    n = [0]; for (let i = 1, r = t.count; i < r; i++) xl.fromBufferAttribute(t, i - 1), _l.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += xl.distanceTo(_l);
                e.setAttribute("lineDistance", new Ye(n, 1)) } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else e.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."); return this }
    raycast(e, t) { const n = this.geometry,
            i = this.matrixWorld,
            r = e.params.Line.threshold,
            o = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), Lr.copy(n.boundingSphere), Lr.applyMatrix4(i), Lr.radius += r, e.ray.intersectsSphere(Lr) === !1) return;
        vl.copy(i).invert(), Js.copy(e.ray).applyMatrix4(vl); const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            l = a * a,
            c = new S,
            h = new S,
            u = new S,
            d = new S,
            f = this.isLineSegments ? 2 : 1; if (n.isBufferGeometry) { const g = n.index,
                v = n.attributes.position; if (g !== null) { const m = Math.max(0, o.start),
                    p = Math.min(g.count, o.start + o.count); for (let T = m, y = p - 1; T < y; T += f) { const w = g.getX(T),
                        R = g.getX(T + 1); if (c.fromBufferAttribute(v, w), h.fromBufferAttribute(v, R), Js.distanceSqToSegment(c, h, d, u) > l) continue;
                    d.applyMatrix4(this.matrixWorld); const Z = e.ray.origin.distanceTo(d);
                    Z < e.near || Z > e.far || t.push({ distance: Z, point: u.clone().applyMatrix4(this.matrixWorld), index: T, face: null, faceIndex: null, object: this }) } } else { const m = Math.max(0, o.start),
                    p = Math.min(v.count, o.start + o.count); for (let T = m, y = p - 1; T < y; T += f) { if (c.fromBufferAttribute(v, T), h.fromBufferAttribute(v, T + 1), Js.distanceSqToSegment(c, h, d, u) > l) continue;
                    d.applyMatrix4(this.matrixWorld); const R = e.ray.origin.distanceTo(d);
                    R < e.near || R > e.far || t.push({ distance: R, point: u.clone().applyMatrix4(this.matrixWorld), index: T, face: null, faceIndex: null, object: this }) } } } else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.") }
    updateMorphTargets() { const e = this.geometry; if (e.isBufferGeometry) { const t = e.morphAttributes,
                n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, o = i.length; r < o; r++) { const a = i[r].name || String(r);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r } } } } else { const t = e.morphTargets;
            t !== void 0 && t.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.") } } }
$s.prototype.isLine = !0;
const yl = new S,
    Ml = new S;
class Pr extends $s { constructor(e, t) { super(e, t);
        this.type = "LineSegments" }
    computeLineDistances() { const e = this.geometry; if (e.isBufferGeometry)
            if (e.index === null) { const t = e.attributes.position,
                    n = []; for (let i = 0, r = t.count; i < r; i += 2) yl.fromBufferAttribute(t, i), Ml.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + yl.distanceTo(Ml);
                e.setAttribute("lineDistance", new Ye(n, 1)) } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else e.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."); return this } }
Pr.prototype.isLineSegments = !0;
class nm extends $s { constructor(e, t) { super(e, t);
        this.type = "LineLoop" } }
nm.prototype.isLineLoop = !0;
class bl extends ft { constructor(e) { super();
        this.type = "PointsMaterial", this.color = new ve(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.setValues(e) }
    copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this } }
bl.prototype.isPointsMaterial = !0;
const wl = new be,
    Ks = new Wn,
    Dr = new kn,
    Ir = new S;
class im extends Ue { constructor(e = new qe, t = new bl) { super();
        this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets() }
    copy(e) { return super.copy(e), this.material = e.material, this.geometry = e.geometry, this }
    raycast(e, t) { const n = this.geometry,
            i = this.matrixWorld,
            r = e.params.Points.threshold,
            o = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), Dr.copy(n.boundingSphere), Dr.applyMatrix4(i), Dr.radius += r, e.ray.intersectsSphere(Dr) === !1) return;
        wl.copy(i).invert(), Ks.copy(e.ray).applyMatrix4(wl); const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            l = a * a; if (n.isBufferGeometry) { const c = n.index,
                u = n.attributes.position; if (c !== null) { const d = Math.max(0, o.start),
                    f = Math.min(c.count, o.start + o.count); for (let g = d, x = f; g < x; g++) { const v = c.getX(g);
                    Ir.fromBufferAttribute(u, v), Sl(Ir, v, l, i, e, t, this) } } else { const d = Math.max(0, o.start),
                    f = Math.min(u.count, o.start + o.count); for (let g = d, x = f; g < x; g++) Ir.fromBufferAttribute(u, g), Sl(Ir, g, l, i, e, t, this) } } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.") }
    updateMorphTargets() { const e = this.geometry; if (e.isBufferGeometry) { const t = e.morphAttributes,
                n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, o = i.length; r < o; r++) { const a = i[r].name || String(r);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r } } } } else { const t = e.morphTargets;
            t !== void 0 && t.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.") } } }
im.prototype.isPoints = !0;

function Sl(s, e, t, n, i, r, o) { const a = Ks.distanceSqToPoint(s); if (a < t) { const l = new S;
        Ks.closestPointToPoint(s, l), l.applyMatrix4(n); const c = i.ray.origin.distanceTo(l); if (c < i.near || c > i.far) return;
        r.push({ distance: c, distanceToRay: Math.sqrt(a), point: l, index: e, face: null, object: o }) } }
class rm extends ot { constructor(e, t, n, i, r, o, a, l, c) { super(e, t, n, i, r, o, a, l, c);
        this.minFilter = o !== void 0 ? o : ut, this.magFilter = r !== void 0 ? r : ut, this.generateMipmaps = !1; const h = this;

        function u() { h.needsUpdate = !0, e.requestVideoFrameCallback(u) } "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(u) }
    clone() { return new this.constructor(this.image).copy(this) }
    update() { const e = this.image; "requestVideoFrameCallback" in e === !1 && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0) } }
rm.prototype.isVideoTexture = !0;
class sm extends ot { constructor(e, t, n) { super({ width: e, height: t });
        this.format = n, this.magFilter = rt, this.minFilter = rt, this.generateMipmaps = !1, this.needsUpdate = !0 } }
sm.prototype.isFramebufferTexture = !0;
class om extends ot { constructor(e, t, n, i, r, o, a, l, c, h, u, d) { super(null, o, a, l, c, h, i, r, u, d);
        this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1 } }
om.prototype.isCompressedTexture = !0;
class am extends ot { constructor(e, t, n, i, r, o, a, l, c) { super(e, t, n, i, r, o, a, l, c);
        this.needsUpdate = !0 } }
am.prototype.isCanvasTexture = !0;
new S;
new S;
new S;
new et;
class At { constructor() { this.type = "Curve", this.arcLengthDivisions = 200 }
    getPoint() { return console.warn("THREE.Curve: .getPoint() not implemented."), null }
    getPointAt(e, t) { const n = this.getUtoTmapping(e); return this.getPoint(n, t) }
    getPoints(e = 5) { const t = []; for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e)); return t }
    getSpacedPoints(e = 5) { const t = []; for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e)); return t }
    getLength() { const e = this.getLengths(); return e[e.length - 1] }
    getLengths(e = this.arcLengthDivisions) { if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
        this.needsUpdate = !1; const t = []; let n, i = this.getPoint(0),
            r = 0;
        t.push(0); for (let o = 1; o <= e; o++) n = this.getPoint(o / e), r += n.distanceTo(i), t.push(r), i = n; return this.cacheArcLengths = t, t }
    updateArcLengths() { this.needsUpdate = !0, this.getLengths() }
    getUtoTmapping(e, t) { const n = this.getLengths(); let i = 0; const r = n.length; let o;
        t ? o = t : o = e * n[r - 1]; let a = 0,
            l = r - 1,
            c; for (; a <= l;)
            if (i = Math.floor(a + (l - a) / 2), c = n[i] - o, c < 0) a = i + 1;
            else if (c > 0) l = i - 1;
        else { l = i; break } if (i = l, n[i] === o) return i / (r - 1); const h = n[i],
            d = n[i + 1] - h,
            f = (o - h) / d; return (i + f) / (r - 1) }
    getTangent(e, t) { const n = 1e-4; let i = e - n,
            r = e + n;
        i < 0 && (i = 0), r > 1 && (r = 1); const o = this.getPoint(i),
            a = this.getPoint(r),
            l = t || (o.isVector2 ? new J : new S); return l.copy(a).sub(o).normalize(), l }
    getTangentAt(e, t) { const n = this.getUtoTmapping(e); return this.getTangent(n, t) }
    computeFrenetFrames(e, t) { const n = new S,
            i = [],
            r = [],
            o = [],
            a = new S,
            l = new be; for (let f = 0; f <= e; f++) { const g = f / e;
            i[f] = this.getTangentAt(g, new S) }
        r[0] = new S, o[0] = new S; let c = Number.MAX_VALUE; const h = Math.abs(i[0].x),
            u = Math.abs(i[0].y),
            d = Math.abs(i[0].z);
        h <= c && (c = h, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), o[0].crossVectors(i[0], r[0]); for (let f = 1; f <= e; f++) { if (r[f] = r[f - 1].clone(), o[f] = o[f - 1].clone(), a.crossVectors(i[f - 1], i[f]), a.length() > Number.EPSILON) { a.normalize(); const g = Math.acos(xt(i[f - 1].dot(i[f]), -1, 1));
                r[f].applyMatrix4(l.makeRotationAxis(a, g)) }
            o[f].crossVectors(i[f], r[f]) } if (t === !0) { let f = Math.acos(xt(r[0].dot(r[e]), -1, 1));
            f /= e, i[0].dot(a.crossVectors(r[0], r[e])) > 0 && (f = -f); for (let g = 1; g <= e; g++) r[g].applyMatrix4(l.makeRotationAxis(i[g], f * g)), o[g].crossVectors(i[g], r[g]) } return { tangents: i, normals: r, binormals: o } }
    clone() { return new this.constructor().copy(this) }
    copy(e) { return this.arcLengthDivisions = e.arcLengthDivisions, this }
    toJSON() { const e = { metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" } }; return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e }
    fromJSON(e) { return this.arcLengthDivisions = e.arcLengthDivisions, this } }
class Fr extends At { constructor(e = 0, t = 0, n = 1, i = 1, r = 0, o = Math.PI * 2, a = !1, l = 0) { super();
        this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = o, this.aClockwise = a, this.aRotation = l }
    getPoint(e, t) { const n = t || new J,
            i = Math.PI * 2; let r = this.aEndAngle - this.aStartAngle; const o = Math.abs(r) < Number.EPSILON; for (; r < 0;) r += i; for (; r > i;) r -= i;
        r < Number.EPSILON && (o ? r = 0 : r = i), this.aClockwise === !0 && !o && (r === i ? r = -i : r = r - i); const a = this.aStartAngle + e * r; let l = this.aX + this.xRadius * Math.cos(a),
            c = this.aY + this.yRadius * Math.sin(a); if (this.aRotation !== 0) { const h = Math.cos(this.aRotation),
                u = Math.sin(this.aRotation),
                d = l - this.aX,
                f = c - this.aY;
            l = d * h - f * u + this.aX, c = d * u + f * h + this.aY } return n.set(l, c) }
    copy(e) { return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this }
    toJSON() { const e = super.toJSON(); return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e }
    fromJSON(e) { return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this } }
Fr.prototype.isEllipseCurve = !0;
class El extends Fr { constructor(e, t, n, i, r, o) { super(e, t, n, n, i, r, o);
        this.type = "ArcCurve" } }
El.prototype.isArcCurve = !0;

function Qs() { let s = 0,
        e = 0,
        t = 0,
        n = 0;

    function i(r, o, a, l) { s = r, e = a, t = -3 * r + 3 * o - 2 * a - l, n = 2 * r - 2 * o + a + l } return { initCatmullRom: function(r, o, a, l, c) { i(o, a, c * (a - r), c * (l - o)) }, initNonuniformCatmullRom: function(r, o, a, l, c, h, u) { let d = (o - r) / c - (a - r) / (c + h) + (a - o) / h,
                f = (a - o) / h - (l - o) / (h + u) + (l - a) / u;
            d *= h, f *= h, i(o, a, d, f) }, calc: function(r) { const o = r * r,
                a = o * r; return s + e * r + t * o + n * a } } }
const Nr = new S,
    eo = new Qs,
    to = new Qs,
    no = new Qs;
class Tl extends At { constructor(e = [], t = !1, n = "centripetal", i = .5) { super();
        this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i }
    getPoint(e, t = new S) { const n = t,
            i = this.points,
            r = i.length,
            o = (r - (this.closed ? 0 : 1)) * e; let a = Math.floor(o),
            l = o - a;
        this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / r) + 1) * r : l === 0 && a === r - 1 && (a = r - 2, l = 1); let c, h;
        this.closed || a > 0 ? c = i[(a - 1) % r] : (Nr.subVectors(i[0], i[1]).add(i[0]), c = Nr); const u = i[a % r],
            d = i[(a + 1) % r]; if (this.closed || a + 2 < r ? h = i[(a + 2) % r] : (Nr.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), h = Nr), this.curveType === "centripetal" || this.curveType === "chordal") { const f = this.curveType === "chordal" ? .5 : .25; let g = Math.pow(c.distanceToSquared(u), f),
                x = Math.pow(u.distanceToSquared(d), f),
                v = Math.pow(d.distanceToSquared(h), f);
            x < 1e-4 && (x = 1), g < 1e-4 && (g = x), v < 1e-4 && (v = x), eo.initNonuniformCatmullRom(c.x, u.x, d.x, h.x, g, x, v), to.initNonuniformCatmullRom(c.y, u.y, d.y, h.y, g, x, v), no.initNonuniformCatmullRom(c.z, u.z, d.z, h.z, g, x, v) } else this.curveType === "catmullrom" && (eo.initCatmullRom(c.x, u.x, d.x, h.x, this.tension), to.initCatmullRom(c.y, u.y, d.y, h.y, this.tension), no.initCatmullRom(c.z, u.z, d.z, h.z, this.tension)); return n.set(eo.calc(l), to.calc(l), no.calc(l)), n }
    copy(e) { super.copy(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t];
            this.points.push(i.clone()) } return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this }
    toJSON() { const e = super.toJSON();
        e.points = []; for (let t = 0, n = this.points.length; t < n; t++) { const i = this.points[t];
            e.points.push(i.toArray()) } return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e }
    fromJSON(e) { super.fromJSON(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t];
            this.points.push(new S().fromArray(i)) } return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this } }
Tl.prototype.isCatmullRomCurve3 = !0;

function Al(s, e, t, n, i) { const r = (n - e) * .5,
        o = (i - t) * .5,
        a = s * s,
        l = s * a; return (2 * t - 2 * n + r + o) * l + (-3 * t + 3 * n - 2 * r - o) * a + r * s + t }

function lm(s, e) { const t = 1 - s; return t * t * e }

function cm(s, e) { return 2 * (1 - s) * s * e }

function hm(s, e) { return s * s * e }

function Oi(s, e, t, n) { return lm(s, e) + cm(s, t) + hm(s, n) }

function um(s, e) { const t = 1 - s; return t * t * t * e }

function dm(s, e) { const t = 1 - s; return 3 * t * t * s * e }

function fm(s, e) { return 3 * (1 - s) * s * s * e }

function pm(s, e) { return s * s * s * e }

function Ui(s, e, t, n, i) { return um(s, e) + dm(s, t) + fm(s, n) + pm(s, i) }
class io extends At { constructor(e = new J, t = new J, n = new J, i = new J) { super();
        this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i }
    getPoint(e, t = new J) { const n = t,
            i = this.v0,
            r = this.v1,
            o = this.v2,
            a = this.v3; return n.set(Ui(e, i.x, r.x, o.x, a.x), Ui(e, i.y, r.y, o.y, a.y)), n }
    copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this }
    toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e }
    fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this } }
io.prototype.isCubicBezierCurve = !0;
class Cl extends At { constructor(e = new S, t = new S, n = new S, i = new S) { super();
        this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i }
    getPoint(e, t = new S) { const n = t,
            i = this.v0,
            r = this.v1,
            o = this.v2,
            a = this.v3; return n.set(Ui(e, i.x, r.x, o.x, a.x), Ui(e, i.y, r.y, o.y, a.y), Ui(e, i.z, r.z, o.z, a.z)), n }
    copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this }
    toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e }
    fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this } }
Cl.prototype.isCubicBezierCurve3 = !0;
class Br extends At { constructor(e = new J, t = new J) { super();
        this.type = "LineCurve", this.v1 = e, this.v2 = t }
    getPoint(e, t = new J) { const n = t; return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n }
    getPointAt(e, t) { return this.getPoint(e, t) }
    getTangent(e, t) { const n = t || new J; return n.copy(this.v2).sub(this.v1).normalize(), n }
    copy(e) { return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this }
    toJSON() { const e = super.toJSON(); return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e }
    fromJSON(e) { return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } }
Br.prototype.isLineCurve = !0;
class mm extends At { constructor(e = new S, t = new S) { super();
        this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = e, this.v2 = t }
    getPoint(e, t = new S) { const n = t; return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n }
    getPointAt(e, t) { return this.getPoint(e, t) }
    copy(e) { return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this }
    toJSON() { const e = super.toJSON(); return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e }
    fromJSON(e) { return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } }
class ro extends At { constructor(e = new J, t = new J, n = new J) { super();
        this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n }
    getPoint(e, t = new J) { const n = t,
            i = this.v0,
            r = this.v1,
            o = this.v2; return n.set(Oi(e, i.x, r.x, o.x), Oi(e, i.y, r.y, o.y)), n }
    copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this }
    toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e }
    fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } }
ro.prototype.isQuadraticBezierCurve = !0;
class Rl extends At { constructor(e = new S, t = new S, n = new S) { super();
        this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n }
    getPoint(e, t = new S) { const n = t,
            i = this.v0,
            r = this.v1,
            o = this.v2; return n.set(Oi(e, i.x, r.x, o.x), Oi(e, i.y, r.y, o.y), Oi(e, i.z, r.z, o.z)), n }
    copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this }
    toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e }
    fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } }
Rl.prototype.isQuadraticBezierCurve3 = !0;
class so extends At { constructor(e = []) { super();
        this.type = "SplineCurve", this.points = e }
    getPoint(e, t = new J) { const n = t,
            i = this.points,
            r = (i.length - 1) * e,
            o = Math.floor(r),
            a = r - o,
            l = i[o === 0 ? o : o - 1],
            c = i[o],
            h = i[o > i.length - 2 ? i.length - 1 : o + 1],
            u = i[o > i.length - 3 ? i.length - 1 : o + 2]; return n.set(Al(a, l.x, c.x, h.x, u.x), Al(a, l.y, c.y, h.y, u.y)), n }
    copy(e) { super.copy(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t];
            this.points.push(i.clone()) } return this }
    toJSON() { const e = super.toJSON();
        e.points = []; for (let t = 0, n = this.points.length; t < n; t++) { const i = this.points[t];
            e.points.push(i.toArray()) } return e }
    fromJSON(e) { super.fromJSON(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t];
            this.points.push(new J().fromArray(i)) } return this } }
so.prototype.isSplineCurve = !0;
var Ll = Object.freeze({ __proto__: null, ArcCurve: El, CatmullRomCurve3: Tl, CubicBezierCurve: io, CubicBezierCurve3: Cl, EllipseCurve: Fr, LineCurve: Br, LineCurve3: mm, QuadraticBezierCurve: ro, QuadraticBezierCurve3: Rl, SplineCurve: so });
class gm extends At { constructor() { super();
        this.type = "CurvePath", this.curves = [], this.autoClose = !1 }
    add(e) { this.curves.push(e) }
    closePath() { const e = this.curves[0].getPoint(0),
            t = this.curves[this.curves.length - 1].getPoint(1);
        e.equals(t) || this.curves.push(new Br(t, e)) }
    getPoint(e, t) { const n = e * this.getLength(),
            i = this.getCurveLengths(); let r = 0; for (; r < i.length;) { if (i[r] >= n) { const o = i[r] - n,
                    a = this.curves[r],
                    l = a.getLength(),
                    c = l === 0 ? 0 : 1 - o / l; return a.getPointAt(c, t) }
            r++ } return null }
    getLength() { const e = this.getCurveLengths(); return e[e.length - 1] }
    updateArcLengths() { this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths() }
    getCurveLengths() { if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths; const e = []; let t = 0; for (let n = 0, i = this.curves.length; n < i; n++) t += this.curves[n].getLength(), e.push(t); return this.cacheLengths = e, e }
    getSpacedPoints(e = 40) { const t = []; for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e)); return this.autoClose && t.push(t[0]), t }
    getPoints(e = 12) { const t = []; let n; for (let i = 0, r = this.curves; i < r.length; i++) { const o = r[i],
                a = o && o.isEllipseCurve ? e * 2 : o && (o.isLineCurve || o.isLineCurve3) ? 1 : o && o.isSplineCurve ? e * o.points.length : e,
                l = o.getPoints(a); for (let c = 0; c < l.length; c++) { const h = l[c];
                n && n.equals(h) || (t.push(h), n = h) } } return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t }
    copy(e) { super.copy(e), this.curves = []; for (let t = 0, n = e.curves.length; t < n; t++) { const i = e.curves[t];
            this.curves.push(i.clone()) } return this.autoClose = e.autoClose, this }
    toJSON() { const e = super.toJSON();
        e.autoClose = this.autoClose, e.curves = []; for (let t = 0, n = this.curves.length; t < n; t++) { const i = this.curves[t];
            e.curves.push(i.toJSON()) } return e }
    fromJSON(e) { super.fromJSON(e), this.autoClose = e.autoClose, this.curves = []; for (let t = 0, n = e.curves.length; t < n; t++) { const i = e.curves[t];
            this.curves.push(new Ll[i.type]().fromJSON(i)) } return this } }
class oo extends gm { constructor(e) { super();
        this.type = "Path", this.currentPoint = new J, e && this.setFromPoints(e) }
    setFromPoints(e) { this.moveTo(e[0].x, e[0].y); for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y); return this }
    moveTo(e, t) { return this.currentPoint.set(e, t), this }
    lineTo(e, t) { const n = new Br(this.currentPoint.clone(), new J(e, t)); return this.curves.push(n), this.currentPoint.set(e, t), this }
    quadraticCurveTo(e, t, n, i) { const r = new ro(this.currentPoint.clone(), new J(e, t), new J(n, i)); return this.curves.push(r), this.currentPoint.set(n, i), this }
    bezierCurveTo(e, t, n, i, r, o) { const a = new io(this.currentPoint.clone(), new J(e, t), new J(n, i), new J(r, o)); return this.curves.push(a), this.currentPoint.set(r, o), this }
    splineThru(e) { const t = [this.currentPoint.clone()].concat(e),
            n = new so(t); return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this }
    arc(e, t, n, i, r, o) { const a = this.currentPoint.x,
            l = this.currentPoint.y; return this.absarc(e + a, t + l, n, i, r, o), this }
    absarc(e, t, n, i, r, o) { return this.absellipse(e, t, n, n, i, r, o), this }
    ellipse(e, t, n, i, r, o, a, l) { const c = this.currentPoint.x,
            h = this.currentPoint.y; return this.absellipse(e + c, t + h, n, i, r, o, a, l), this }
    absellipse(e, t, n, i, r, o, a, l) { const c = new Fr(e, t, n, i, r, o, a, l); if (this.curves.length > 0) { const u = c.getPoint(0);
            u.equals(this.currentPoint) || this.lineTo(u.x, u.y) }
        this.curves.push(c); const h = c.getPoint(1); return this.currentPoint.copy(h), this }
    copy(e) { return super.copy(e), this.currentPoint.copy(e.currentPoint), this }
    toJSON() { const e = super.toJSON(); return e.currentPoint = this.currentPoint.toArray(), e }
    fromJSON(e) { return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this } }
class Hi extends oo { constructor(e) { super(e);
        this.uuid = Ot(), this.type = "Shape", this.holes = [] }
    getPointsHoles(e) { const t = []; for (let n = 0, i = this.holes.length; n < i; n++) t[n] = this.holes[n].getPoints(e); return t }
    extractPoints(e) { return { shape: this.getPoints(e), holes: this.getPointsHoles(e) } }
    copy(e) { super.copy(e), this.holes = []; for (let t = 0, n = e.holes.length; t < n; t++) { const i = e.holes[t];
            this.holes.push(i.clone()) } return this }
    toJSON() { const e = super.toJSON();
        e.uuid = this.uuid, e.holes = []; for (let t = 0, n = this.holes.length; t < n; t++) { const i = this.holes[t];
            e.holes.push(i.toJSON()) } return e }
    fromJSON(e) { super.fromJSON(e), this.uuid = e.uuid, this.holes = []; for (let t = 0, n = e.holes.length; t < n; t++) { const i = e.holes[t];
            this.holes.push(new oo().fromJSON(i)) } return this } }
const xm = { triangulate: function(s, e, t = 2) { const n = e && e.length,
            i = n ? e[0] * t : s.length; let r = Pl(s, 0, i, t, !0); const o = []; if (!r || r.next === r.prev) return o; let a, l, c, h, u, d, f; if (n && (r = bm(s, e, r, t)), s.length > 80 * t) { a = c = s[0], l = h = s[1]; for (let g = t; g < i; g += t) u = s[g], d = s[g + 1], u < a && (a = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
            f = Math.max(c - a, h - l), f = f !== 0 ? 1 / f : 0 } return Vi(r, o, t, a, l, f), o } };

function Pl(s, e, t, n, i) { let r, o; if (i === Im(s, e, t, n) > 0)
        for (r = e; r < t; r += n) o = Fl(r, s[r], s[r + 1], o);
    else
        for (r = t - n; r >= e; r -= n) o = Fl(r, s[r], s[r + 1], o); return o && zr(o, o.next) && (ki(o), o = o.next), o }

function fn(s, e) { if (!s) return s;
    e || (e = s); let t = s,
        n;
    do
        if (n = !1, !t.steiner && (zr(t, t.next) || $e(t.prev, t, t.next) === 0)) { if (ki(t), t = e = t.prev, t === t.next) break;
            n = !0 } else t = t.next; while (n || t !== e);
    return e }

function Vi(s, e, t, n, i, r, o) { if (!s) return;!o && r && Am(s, n, i, r); let a = s,
        l, c; for (; s.prev !== s.next;) { if (l = s.prev, c = s.next, r ? vm(s, n, i, r) : _m(s)) { e.push(l.i / t), e.push(s.i / t), e.push(c.i / t), ki(s), s = c.next, a = c.next; continue } if (s = c, s === a) { o ? o === 1 ? (s = ym(fn(s), e, t), Vi(s, e, t, n, i, r, 2)) : o === 2 && Mm(s, e, t, n, i, r) : Vi(fn(s), e, t, n, i, r, 1); break } } }

function _m(s) { const e = s.prev,
        t = s,
        n = s.next; if ($e(e, t, n) >= 0) return !1; let i = s.next.next; for (; i !== s.prev;) { if (di(e.x, e.y, t.x, t.y, n.x, n.y, i.x, i.y) && $e(i.prev, i, i.next) >= 0) return !1;
        i = i.next } return !0 }

function vm(s, e, t, n) { const i = s.prev,
        r = s,
        o = s.next; if ($e(i, r, o) >= 0) return !1; const a = i.x < r.x ? i.x < o.x ? i.x : o.x : r.x < o.x ? r.x : o.x,
        l = i.y < r.y ? i.y < o.y ? i.y : o.y : r.y < o.y ? r.y : o.y,
        c = i.x > r.x ? i.x > o.x ? i.x : o.x : r.x > o.x ? r.x : o.x,
        h = i.y > r.y ? i.y > o.y ? i.y : o.y : r.y > o.y ? r.y : o.y,
        u = ao(a, l, e, t, n),
        d = ao(c, h, e, t, n); let f = s.prevZ,
        g = s.nextZ; for (; f && f.z >= u && g && g.z <= d;) { if (f !== s.prev && f !== s.next && di(i.x, i.y, r.x, r.y, o.x, o.y, f.x, f.y) && $e(f.prev, f, f.next) >= 0 || (f = f.prevZ, g !== s.prev && g !== s.next && di(i.x, i.y, r.x, r.y, o.x, o.y, g.x, g.y) && $e(g.prev, g, g.next) >= 0)) return !1;
        g = g.nextZ } for (; f && f.z >= u;) { if (f !== s.prev && f !== s.next && di(i.x, i.y, r.x, r.y, o.x, o.y, f.x, f.y) && $e(f.prev, f, f.next) >= 0) return !1;
        f = f.prevZ } for (; g && g.z <= d;) { if (g !== s.prev && g !== s.next && di(i.x, i.y, r.x, r.y, o.x, o.y, g.x, g.y) && $e(g.prev, g, g.next) >= 0) return !1;
        g = g.nextZ } return !0 }

function ym(s, e, t) { let n = s;
    do { const i = n.prev,
            r = n.next.next;!zr(i, r) && Dl(i, n, n.next, r) && Gi(i, r) && Gi(r, i) && (e.push(i.i / t), e.push(n.i / t), e.push(r.i / t), ki(n), ki(n.next), n = s = r), n = n.next } while (n !== s); return fn(n) }

function Mm(s, e, t, n, i, r) { let o = s;
    do { let a = o.next.next; for (; a !== o.prev;) { if (o.i !== a.i && Lm(o, a)) { let l = Il(o, a);
                o = fn(o, o.next), l = fn(l, l.next), Vi(o, e, t, n, i, r), Vi(l, e, t, n, i, r); return }
            a = a.next }
        o = o.next } while (o !== s) }

function bm(s, e, t, n) { const i = []; let r, o, a, l, c; for (r = 0, o = e.length; r < o; r++) a = e[r] * n, l = r < o - 1 ? e[r + 1] * n : s.length, c = Pl(s, a, l, n, !1), c === c.next && (c.steiner = !0), i.push(Rm(c)); for (i.sort(wm), r = 0; r < i.length; r++) Sm(i[r], t), t = fn(t, t.next); return t }

function wm(s, e) { return s.x - e.x }

function Sm(s, e) { if (e = Em(s, e), e) { const t = Il(e, s);
        fn(e, e.next), fn(t, t.next) } }

function Em(s, e) { let t = e; const n = s.x,
        i = s.y; let r = -1 / 0,
        o;
    do { if (i <= t.y && i >= t.next.y && t.next.y !== t.y) { const d = t.x + (i - t.y) * (t.next.x - t.x) / (t.next.y - t.y); if (d <= n && d > r) { if (r = d, d === n) { if (i === t.y) return t; if (i === t.next.y) return t.next }
                o = t.x < t.next.x ? t : t.next } }
        t = t.next } while (t !== e); if (!o) return null; if (n === r) return o; const a = o,
        l = o.x,
        c = o.y; let h = 1 / 0,
        u;
    t = o;
    do n >= t.x && t.x >= l && n !== t.x && di(i < c ? n : r, i, l, c, i < c ? r : n, i, t.x, t.y) && (u = Math.abs(i - t.y) / (n - t.x), Gi(t, s) && (u < h || u === h && (t.x > o.x || t.x === o.x && Tm(o, t))) && (o = t, h = u)), t = t.next; while (t !== a); return o }

function Tm(s, e) { return $e(s.prev, s, e.prev) < 0 && $e(e.next, s, s.next) < 0 }

function Am(s, e, t, n) { let i = s;
    do i.z === null && (i.z = ao(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next; while (i !== s);
    i.prevZ.nextZ = null, i.prevZ = null, Cm(i) }

function Cm(s) { let e, t, n, i, r, o, a, l, c = 1;
    do { for (t = s, s = null, r = null, o = 0; t;) { for (o++, n = t, a = 0, e = 0; e < c && (a++, n = n.nextZ, !!n); e++); for (l = c; a > 0 || l > 0 && n;) a !== 0 && (l === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, a--) : (i = n, n = n.nextZ, l--), r ? r.nextZ = i : s = i, i.prevZ = r, r = i;
            t = n }
        r.nextZ = null, c *= 2 } while (o > 1); return s }

function ao(s, e, t, n, i) { return s = 32767 * (s - t) * i, e = 32767 * (e - n) * i, s = (s | s << 8) & 16711935, s = (s | s << 4) & 252645135, s = (s | s << 2) & 858993459, s = (s | s << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, s | e << 1 }

function Rm(s) { let e = s,
        t = s;
    do(e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next; while (e !== s); return t }

function di(s, e, t, n, i, r, o, a) { return (i - o) * (e - a) - (s - o) * (r - a) >= 0 && (s - o) * (n - a) - (t - o) * (e - a) >= 0 && (t - o) * (r - a) - (i - o) * (n - a) >= 0 }

function Lm(s, e) { return s.next.i !== e.i && s.prev.i !== e.i && !Pm(s, e) && (Gi(s, e) && Gi(e, s) && Dm(s, e) && ($e(s.prev, s, e.prev) || $e(s, e.prev, e)) || zr(s, e) && $e(s.prev, s, s.next) > 0 && $e(e.prev, e, e.next) > 0) }

function $e(s, e, t) { return (e.y - s.y) * (t.x - e.x) - (e.x - s.x) * (t.y - e.y) }

function zr(s, e) { return s.x === e.x && s.y === e.y }

function Dl(s, e, t, n) { const i = Ur($e(s, e, t)),
        r = Ur($e(s, e, n)),
        o = Ur($e(t, n, s)),
        a = Ur($e(t, n, e)); return !!(i !== r && o !== a || i === 0 && Or(s, t, e) || r === 0 && Or(s, n, e) || o === 0 && Or(t, s, n) || a === 0 && Or(t, e, n)) }

function Or(s, e, t) { return e.x <= Math.max(s.x, t.x) && e.x >= Math.min(s.x, t.x) && e.y <= Math.max(s.y, t.y) && e.y >= Math.min(s.y, t.y) }

function Ur(s) { return s > 0 ? 1 : s < 0 ? -1 : 0 }

function Pm(s, e) { let t = s;
    do { if (t.i !== s.i && t.next.i !== s.i && t.i !== e.i && t.next.i !== e.i && Dl(t, t.next, s, e)) return !0;
        t = t.next } while (t !== s); return !1 }

function Gi(s, e) { return $e(s.prev, s, s.next) < 0 ? $e(s, e, s.next) >= 0 && $e(s, s.prev, e) >= 0 : $e(s, e, s.prev) < 0 || $e(s, s.next, e) < 0 }

function Dm(s, e) { let t = s,
        n = !1; const i = (s.x + e.x) / 2,
        r = (s.y + e.y) / 2;
    do t.y > r != t.next.y > r && t.next.y !== t.y && i < (t.next.x - t.x) * (r - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next; while (t !== s); return n }

function Il(s, e) { const t = new lo(s.i, s.x, s.y),
        n = new lo(e.i, e.x, e.y),
        i = s.next,
        r = e.prev; return s.next = e, e.prev = s, t.next = i, i.prev = t, n.next = t, t.prev = n, r.next = n, n.prev = r, n }

function Fl(s, e, t, n) { const i = new lo(s, e, t); return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i }

function ki(s) { s.next.prev = s.prev, s.prev.next = s.next, s.prevZ && (s.prevZ.nextZ = s.nextZ), s.nextZ && (s.nextZ.prevZ = s.prevZ) }

function lo(s, e, t) { this.i = s, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1 }

function Im(s, e, t, n) { let i = 0; for (let r = e, o = t - n; r < t; r += n) i += (s[o] - s[r]) * (s[r + 1] + s[o + 1]), o = r; return i }
class pn { static area(e) { const t = e.length; let n = 0; for (let i = t - 1, r = 0; r < t; i = r++) n += e[i].x * e[r].y - e[r].x * e[i].y; return n * .5 }
    static isClockWise(e) { return pn.area(e) < 0 }
    static triangulateShape(e, t) { const n = [],
            i = [],
            r = [];
        Nl(e), Bl(n, e); let o = e.length;
        t.forEach(Nl); for (let l = 0; l < t.length; l++) i.push(o), o += t[l].length, Bl(n, t[l]); const a = xm.triangulate(n, i); for (let l = 0; l < a.length; l += 3) r.push(a.slice(l, l + 3)); return r } }

function Nl(s) { const e = s.length;
    e > 2 && s[e - 1].equals(s[0]) && s.pop() }

function Bl(s, e) { for (let t = 0; t < e.length; t++) s.push(e[t].x), s.push(e[t].y) }
class fi extends qe { constructor(e = new Hi([new J(.5, .5), new J(-.5, .5), new J(-.5, -.5), new J(.5, -.5)]), t = {}) { super();
        this.type = "ExtrudeGeometry", this.parameters = { shapes: e, options: t }, e = Array.isArray(e) ? e : [e]; const n = this,
            i = [],
            r = []; for (let a = 0, l = e.length; a < l; a++) { const c = e[a];
            o(c) }
        this.setAttribute("position", new Ye(i, 3)), this.setAttribute("uv", new Ye(r, 2)), this.computeVertexNormals();

        function o(a) { const l = [],
                c = t.curveSegments !== void 0 ? t.curveSegments : 12,
                h = t.steps !== void 0 ? t.steps : 1; let u = t.depth !== void 0 ? t.depth : 1,
                d = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0,
                f = t.bevelThickness !== void 0 ? t.bevelThickness : .2,
                g = t.bevelSize !== void 0 ? t.bevelSize : f - .1,
                x = t.bevelOffset !== void 0 ? t.bevelOffset : 0,
                v = t.bevelSegments !== void 0 ? t.bevelSegments : 3; const m = t.extrudePath,
                p = t.UVGenerator !== void 0 ? t.UVGenerator : Fm;
            t.amount !== void 0 && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), u = t.amount); let T, y = !1,
                w, R, P, Z;
            m && (T = m.getSpacedPoints(h), y = !0, d = !1, w = m.computeFrenetFrames(h, !1), R = new S, P = new S, Z = new S), d || (v = 0, f = 0, g = 0, x = 0); const oe = a.extractPoints(c); let $ = oe.shape; const _ = oe.holes; if (!pn.isClockWise($)) { $ = $.reverse(); for (let X = 0, ne = _.length; X < ne; X++) { const ee = _[X];
                    pn.isClockWise(ee) && (_[X] = ee.reverse()) } } const D = pn.triangulateShape($, _),
                N = $; for (let X = 0, ne = _.length; X < ne; X++) { const ee = _[X];
                $ = $.concat(ee) }

            function B(X, ne, ee) { return ne || console.error("THREE.ExtrudeGeometry: vec does not exist"), ne.clone().multiplyScalar(ee).add(X) } const F = $.length,
                q = D.length;

            function K(X, ne, ee) { let le, re, ye; const Ee = X.x - ne.x,
                    De = X.y - ne.y,
                    He = ee.x - X.x,
                    ze = ee.y - X.y,
                    E = Ee * Ee + De * De,
                    M = Ee * ze - De * He; if (Math.abs(M) > Number.EPSILON) { const W = Math.sqrt(E),
                        te = Math.sqrt(He * He + ze * ze),
                        pe = ne.x - De / W,
                        G = ne.y + Ee / W,
                        _e = ee.x - ze / te,
                        A = ee.y + He / te,
                        H = ((_e - pe) * ze - (A - G) * He) / (Ee * ze - De * He);
                    le = pe + Ee * H - X.x, re = G + De * H - X.y; const Q = le * le + re * re; if (Q <= 2) return new J(le, re);
                    ye = Math.sqrt(Q / 2) } else { let W = !1;
                    Ee > Number.EPSILON ? He > Number.EPSILON && (W = !0) : Ee < -Number.EPSILON ? He < -Number.EPSILON && (W = !0) : Math.sign(De) === Math.sign(ze) && (W = !0), W ? (le = -De, re = Ee, ye = Math.sqrt(E)) : (le = Ee, re = De, ye = Math.sqrt(E / 2)) } return new J(le / ye, re / ye) } const ue = []; for (let X = 0, ne = N.length, ee = ne - 1, le = X + 1; X < ne; X++, ee++, le++) ee === ne && (ee = 0), le === ne && (le = 0), ue[X] = K(N[X], N[ee], N[le]); const k = []; let Y, se = ue.concat(); for (let X = 0, ne = _.length; X < ne; X++) { const ee = _[X];
                Y = []; for (let le = 0, re = ee.length, ye = re - 1, Ee = le + 1; le < re; le++, ye++, Ee++) ye === re && (ye = 0), Ee === re && (Ee = 0), Y[le] = K(ee[le], ee[ye], ee[Ee]);
                k.push(Y), se = se.concat(Y) } for (let X = 0; X < v; X++) { const ne = X / v,
                    ee = f * Math.cos(ne * Math.PI / 2),
                    le = g * Math.sin(ne * Math.PI / 2) + x; for (let re = 0, ye = N.length; re < ye; re++) { const Ee = B(N[re], ue[re], le);
                    ge(Ee.x, Ee.y, -ee) } for (let re = 0, ye = _.length; re < ye; re++) { const Ee = _[re];
                    Y = k[re]; for (let De = 0, He = Ee.length; De < He; De++) { const ze = B(Ee[De], Y[De], le);
                        ge(ze.x, ze.y, -ee) } } } const fe = g + x; for (let X = 0; X < F; X++) { const ne = d ? B($[X], se[X], fe) : $[X];
                y ? (P.copy(w.normals[0]).multiplyScalar(ne.x), R.copy(w.binormals[0]).multiplyScalar(ne.y), Z.copy(T[0]).add(P).add(R), ge(Z.x, Z.y, Z.z)) : ge(ne.x, ne.y, 0) } for (let X = 1; X <= h; X++)
                for (let ne = 0; ne < F; ne++) { const ee = d ? B($[ne], se[ne], fe) : $[ne];
                    y ? (P.copy(w.normals[X]).multiplyScalar(ee.x), R.copy(w.binormals[X]).multiplyScalar(ee.y), Z.copy(T[X]).add(P).add(R), ge(Z.x, Z.y, Z.z)) : ge(ee.x, ee.y, u / h * X) }
            for (let X = v - 1; X >= 0; X--) { const ne = X / v,
                    ee = f * Math.cos(ne * Math.PI / 2),
                    le = g * Math.sin(ne * Math.PI / 2) + x; for (let re = 0, ye = N.length; re < ye; re++) { const Ee = B(N[re], ue[re], le);
                    ge(Ee.x, Ee.y, u + ee) } for (let re = 0, ye = _.length; re < ye; re++) { const Ee = _[re];
                    Y = k[re]; for (let De = 0, He = Ee.length; De < He; De++) { const ze = B(Ee[De], Y[De], le);
                        y ? ge(ze.x, ze.y + T[h - 1].y, T[h - 1].x + ee) : ge(ze.x, ze.y, u + ee) } } }
            xe(), U();

            function xe() { const X = i.length / 3; if (d) { let ne = 0,
                        ee = F * ne; for (let le = 0; le < q; le++) { const re = D[le];
                        Se(re[2] + ee, re[1] + ee, re[0] + ee) }
                    ne = h + v * 2, ee = F * ne; for (let le = 0; le < q; le++) { const re = D[le];
                        Se(re[0] + ee, re[1] + ee, re[2] + ee) } } else { for (let ne = 0; ne < q; ne++) { const ee = D[ne];
                        Se(ee[2], ee[1], ee[0]) } for (let ne = 0; ne < q; ne++) { const ee = D[ne];
                        Se(ee[0] + F * h, ee[1] + F * h, ee[2] + F * h) } }
                n.addGroup(X, i.length / 3 - X, 0) }

            function U() { const X = i.length / 3; let ne = 0;
                Fe(N, ne), ne += N.length; for (let ee = 0, le = _.length; ee < le; ee++) { const re = _[ee];
                    Fe(re, ne), ne += re.length }
                n.addGroup(X, i.length / 3 - X, 1) }

            function Fe(X, ne) { let ee = X.length; for (; --ee >= 0;) { const le = ee; let re = ee - 1;
                    re < 0 && (re = X.length - 1); for (let ye = 0, Ee = h + v * 2; ye < Ee; ye++) { const De = F * ye,
                            He = F * (ye + 1),
                            ze = ne + le + De,
                            E = ne + re + De,
                            M = ne + re + He,
                            W = ne + le + He;
                        ce(ze, E, M, W) } } }

            function ge(X, ne, ee) { l.push(X), l.push(ne), l.push(ee) }

            function Se(X, ne, ee) { Ce(X), Ce(ne), Ce(ee); const le = i.length / 3,
                    re = p.generateTopUV(n, i, le - 3, le - 2, le - 1);
                we(re[0]), we(re[1]), we(re[2]) }

            function ce(X, ne, ee, le) { Ce(X), Ce(ne), Ce(le), Ce(ne), Ce(ee), Ce(le); const re = i.length / 3,
                    ye = p.generateSideWallUV(n, i, re - 6, re - 3, re - 2, re - 1);
                we(ye[0]), we(ye[1]), we(ye[3]), we(ye[1]), we(ye[2]), we(ye[3]) }

            function Ce(X) { i.push(l[X * 3 + 0]), i.push(l[X * 3 + 1]), i.push(l[X * 3 + 2]) }

            function we(X) { r.push(X.x), r.push(X.y) } } }
    toJSON() { const e = super.toJSON(),
            t = this.parameters.shapes,
            n = this.parameters.options; return Nm(t, n, e) }
    static fromJSON(e, t) { const n = []; for (let r = 0, o = e.shapes.length; r < o; r++) { const a = t[e.shapes[r]];
            n.push(a) } const i = e.options.extrudePath; return i !== void 0 && (e.options.extrudePath = new Ll[i.type]().fromJSON(i)), new fi(n, e.options) } }
const Fm = { generateTopUV: function(s, e, t, n, i) { const r = e[t * 3],
            o = e[t * 3 + 1],
            a = e[n * 3],
            l = e[n * 3 + 1],
            c = e[i * 3],
            h = e[i * 3 + 1]; return [new J(r, o), new J(a, l), new J(c, h)] }, generateSideWallUV: function(s, e, t, n, i, r) { const o = e[t * 3],
            a = e[t * 3 + 1],
            l = e[t * 3 + 2],
            c = e[n * 3],
            h = e[n * 3 + 1],
            u = e[n * 3 + 2],
            d = e[i * 3],
            f = e[i * 3 + 1],
            g = e[i * 3 + 2],
            x = e[r * 3],
            v = e[r * 3 + 1],
            m = e[r * 3 + 2]; return Math.abs(a - h) < Math.abs(o - c) ? [new J(o, 1 - l), new J(c, 1 - u), new J(d, 1 - g), new J(x, 1 - m)] : [new J(a, 1 - l), new J(h, 1 - u), new J(f, 1 - g), new J(v, 1 - m)] } };

function Nm(s, e, t) { if (t.shapes = [], Array.isArray(s))
        for (let n = 0, i = s.length; n < i; n++) { const r = s[n];
            t.shapes.push(r.uuid) } else t.shapes.push(s.uuid); return e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t }
class co extends qe { constructor(e = new Hi([new J(0, .5), new J(-.5, -.5), new J(.5, -.5)]), t = 12) { super();
        this.type = "ShapeGeometry", this.parameters = { shapes: e, curveSegments: t }; const n = [],
            i = [],
            r = [],
            o = []; let a = 0,
            l = 0; if (Array.isArray(e) === !1) c(e);
        else
            for (let h = 0; h < e.length; h++) c(e[h]), this.addGroup(a, l, h), a += l, l = 0;
        this.setIndex(n), this.setAttribute("position", new Ye(i, 3)), this.setAttribute("normal", new Ye(r, 3)), this.setAttribute("uv", new Ye(o, 2));

        function c(h) { const u = i.length / 3,
                d = h.extractPoints(t); let f = d.shape; const g = d.holes;
            pn.isClockWise(f) === !1 && (f = f.reverse()); for (let v = 0, m = g.length; v < m; v++) { const p = g[v];
                pn.isClockWise(p) === !0 && (g[v] = p.reverse()) } const x = pn.triangulateShape(f, g); for (let v = 0, m = g.length; v < m; v++) { const p = g[v];
                f = f.concat(p) } for (let v = 0, m = f.length; v < m; v++) { const p = f[v];
                i.push(p.x, p.y, 0), r.push(0, 0, 1), o.push(p.x, p.y) } for (let v = 0, m = x.length; v < m; v++) { const p = x[v],
                    T = p[0] + u,
                    y = p[1] + u,
                    w = p[2] + u;
                n.push(T, y, w), l += 3 } } }
    toJSON() { const e = super.toJSON(),
            t = this.parameters.shapes; return Bm(t, e) }
    static fromJSON(e, t) { const n = []; for (let i = 0, r = e.shapes.length; i < r; i++) { const o = t[e.shapes[i]];
            n.push(o) } return new co(n, e.curveSegments) } }

function Bm(s, e) { if (e.shapes = [], Array.isArray(s))
        for (let t = 0, n = s.length; t < n; t++) { const i = s[t];
            e.shapes.push(i.uuid) } else e.shapes.push(s.uuid); return e }
class zl extends qe { constructor(e = 1, t = 32, n = 16, i = 0, r = Math.PI * 2, o = 0, a = Math.PI) { super();
        this.type = "SphereGeometry", this.parameters = { radius: e, widthSegments: t, heightSegments: n, phiStart: i, phiLength: r, thetaStart: o, thetaLength: a }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n)); const l = Math.min(o + a, Math.PI); let c = 0; const h = [],
            u = new S,
            d = new S,
            f = [],
            g = [],
            x = [],
            v = []; for (let m = 0; m <= n; m++) { const p = [],
                T = m / n; let y = 0;
            m == 0 && o == 0 ? y = .5 / t : m == n && l == Math.PI && (y = -.5 / t); for (let w = 0; w <= t; w++) { const R = w / t;
                u.x = -e * Math.cos(i + R * r) * Math.sin(o + T * a), u.y = e * Math.cos(o + T * a), u.z = e * Math.sin(i + R * r) * Math.sin(o + T * a), g.push(u.x, u.y, u.z), d.copy(u).normalize(), x.push(d.x, d.y, d.z), v.push(R + y, 1 - T), p.push(c++) }
            h.push(p) } for (let m = 0; m < n; m++)
            for (let p = 0; p < t; p++) { const T = h[m][p + 1],
                    y = h[m][p],
                    w = h[m + 1][p],
                    R = h[m + 1][p + 1];
                (m !== 0 || o > 0) && f.push(T, y, R), (m !== n - 1 || l < Math.PI) && f.push(y, w, R) }
        this.setIndex(f), this.setAttribute("position", new Ye(g, 3)), this.setAttribute("normal", new Ye(x, 3)), this.setAttribute("uv", new Ye(v, 2)) }
    static fromJSON(e) { return new zl(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength) } }
class zm extends ft { constructor(e) { super();
        this.type = "ShadowMaterial", this.color = new ve(0), this.transparent = !0, this.setValues(e) }
    copy(e) { return super.copy(e), this.color.copy(e.color), this } }
zm.prototype.isShadowMaterial = !0;
class Ol extends ft { constructor(e) { super();
        this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new ve(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ve(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = zn, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(e) }
    copy(e) { return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this } }
Ol.prototype.isMeshStandardMaterial = !0;
class Om extends Ol { constructor(e) { super();
        this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new J(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() { return xt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1) }, set: function(t) { this.ior = (1 + .4 * t) / (1 - .4 * t) } }), this.sheenColor = new ve(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationColor = new ve(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new ve(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._transmission = 0, this.setValues(e) }
    get sheen() { return this._sheen }
    set sheen(e) { this._sheen > 0 != e > 0 && this.version++, this._sheen = e }
    get clearcoat() { return this._clearcoat }
    set clearcoat(e) { this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e }
    get transmission() { return this._transmission }
    set transmission(e) { this._transmission > 0 != e > 0 && this.version++, this._transmission = e }
    copy(e) { return super.copy(e), this.defines = { STANDARD: "", PHYSICAL: "" }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this } }
Om.prototype.isMeshPhysicalMaterial = !0;
class Um extends ft { constructor(e) { super();
        this.type = "MeshPhongMaterial", this.color = new ve(16777215), this.specular = new ve(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ve(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = zn, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Yi, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(e) }
    copy(e) { return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this } }
Um.prototype.isMeshPhongMaterial = !0;
class Hm extends ft { constructor(e) { super();
        this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new ve(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ve(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = zn, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e) }
    copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this } }
Hm.prototype.isMeshToonMaterial = !0;
class Vm extends ft { constructor(e) { super();
        this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = zn, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.flatShading = !1, this.setValues(e) }
    copy(e) { return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this } }
Vm.prototype.isMeshNormalMaterial = !0;
class Gm extends ft { constructor(e) { super();
        this.type = "MeshLambertMaterial", this.color = new ve(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ve(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Yi, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e) }
    copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this } }
Gm.prototype.isMeshLambertMaterial = !0;
class km extends ft { constructor(e) { super();
        this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new ve(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = zn, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.setValues(e) }
    copy(e) { return super.copy(e), this.defines = { MATCAP: "" }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.flatShading = e.flatShading, this } }
km.prototype.isMeshMatcapMaterial = !0;
class Wm extends ui { constructor(e) { super();
        this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e) }
    copy(e) { return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this } }
Wm.prototype.isLineDashedMaterial = !0;
const Ze = { arraySlice: function(s, e, t) { return Ze.isTypedArray(s) ? new s.constructor(s.subarray(e, t !== void 0 ? t : s.length)) : s.slice(e, t) }, convertArray: function(s, e, t) { return !s || !t && s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s) }, isTypedArray: function(s) { return ArrayBuffer.isView(s) && !(s instanceof DataView) }, getKeyframeOrder: function(s) {
        function e(i, r) { return s[i] - s[r] } const t = s.length,
            n = new Array(t); for (let i = 0; i !== t; ++i) n[i] = i; return n.sort(e), n }, sortedArray: function(s, e, t) { const n = s.length,
            i = new s.constructor(n); for (let r = 0, o = 0; o !== n; ++r) { const a = t[r] * e; for (let l = 0; l !== e; ++l) i[o++] = s[a + l] } return i }, flattenJSON: function(s, e, t, n) { let i = 1,
            r = s[0]; for (; r !== void 0 && r[n] === void 0;) r = s[i++]; if (r === void 0) return; let o = r[n]; if (o !== void 0)
            if (Array.isArray(o))
                do o = r[n], o !== void 0 && (e.push(r.time), t.push.apply(t, o)), r = s[i++]; while (r !== void 0);
            else if (o.toArray !== void 0)
            do o = r[n], o !== void 0 && (e.push(r.time), o.toArray(t, t.length)), r = s[i++]; while (r !== void 0);
        else
            do o = r[n], o !== void 0 && (e.push(r.time), t.push(o)), r = s[i++]; while (r !== void 0) }, subclip: function(s, e, t, n, i = 30) { const r = s.clone();
        r.name = e; const o = []; for (let l = 0; l < r.tracks.length; ++l) { const c = r.tracks[l],
                h = c.getValueSize(),
                u = [],
                d = []; for (let f = 0; f < c.times.length; ++f) { const g = c.times[f] * i; if (!(g < t || g >= n)) { u.push(c.times[f]); for (let x = 0; x < h; ++x) d.push(c.values[f * h + x]) } }
            u.length !== 0 && (c.times = Ze.convertArray(u, c.times.constructor), c.values = Ze.convertArray(d, c.values.constructor), o.push(c)) }
        r.tracks = o; let a = 1 / 0; for (let l = 0; l < r.tracks.length; ++l) a > r.tracks[l].times[0] && (a = r.tracks[l].times[0]); for (let l = 0; l < r.tracks.length; ++l) r.tracks[l].shift(-1 * a); return r.resetDuration(), r }, makeClipAdditive: function(s, e = 0, t = s, n = 30) { n <= 0 && (n = 30); const i = t.tracks.length,
            r = e / n; for (let o = 0; o < i; ++o) { const a = t.tracks[o],
                l = a.ValueTypeName; if (l === "bool" || l === "string") continue; const c = s.tracks.find(function(m) { return m.name === a.name && m.ValueTypeName === l }); if (c === void 0) continue; let h = 0; const u = a.getValueSize();
            a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (h = u / 3); let d = 0; const f = c.getValueSize();
            c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (d = f / 3); const g = a.times.length - 1; let x; if (r <= a.times[0]) { const m = h,
                    p = u - h;
                x = Ze.arraySlice(a.values, m, p) } else if (r >= a.times[g]) { const m = g * u + h,
                    p = m + u - h;
                x = Ze.arraySlice(a.values, m, p) } else { const m = a.createInterpolant(),
                    p = h,
                    T = u - h;
                m.evaluate(r), x = Ze.arraySlice(m.resultBuffer, p, T) }
            l === "quaternion" && new dt().fromArray(x).normalize().conjugate().toArray(x); const v = c.times.length; for (let m = 0; m < v; ++m) { const p = m * f + d; if (l === "quaternion") dt.multiplyQuaternionsFlat(c.values, p, x, 0, c.values, p);
                else { const T = f - d * 2; for (let y = 0; y < T; ++y) c.values[p + y] -= x[y] } } } return s.blendMode = ta, s } };
class mn { constructor(e, t, n, i) { this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {} }
    evaluate(e) { const t = this.parameterPositions; let n = this._cachedIndex,
            i = t[n],
            r = t[n - 1];
        e: { t: { let o;n: { i: if (!(e < i)) { for (let a = n + 2;;) { if (i === void 0) { if (e < r) break i; return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, r) } if (n === a) break; if (r = i, i = t[++n], e < i) break t }
                        o = t.length; break n } if (!(e >= r)) { const a = t[1];
                        e < a && (n = 2, r = a); for (let l = n - 2;;) { if (r === void 0) return this._cachedIndex = 0, this.beforeStart_(0, e, i); if (n === l) break; if (i = r, r = t[--n - 1], e >= r) break t }
                        o = n, n = 0; break n } break e } for (; n < o;) { const a = n + o >>> 1;
                    e < t[a] ? o = a : n = a + 1 } if (i = t[n], r = t[n - 1], r === void 0) return this._cachedIndex = 0, this.beforeStart_(0, e, i); if (i === void 0) return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, r, e) }
            this._cachedIndex = n, this.intervalChanged_(n, r, i) }
        return this.interpolate_(n, r, e, i) }
    getSettings_() { return this.settings || this.DefaultSettings_ }
    copySampleValue_(e) { const t = this.resultBuffer,
            n = this.sampleValues,
            i = this.valueSize,
            r = e * i; for (let o = 0; o !== i; ++o) t[o] = n[r + o]; return t }
    interpolate_() { throw new Error("call to abstract method") }
    intervalChanged_() {} }
mn.prototype.beforeStart_ = mn.prototype.copySampleValue_;
mn.prototype.afterEnd_ = mn.prototype.copySampleValue_;
class qm extends mn { constructor(e, t, n, i) { super(e, t, n, i);
        this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: Nn, endingEnd: Nn } }
    intervalChanged_(e, t, n) { const i = this.parameterPositions; let r = e - 2,
            o = e + 1,
            a = i[r],
            l = i[o]; if (a === void 0) switch (this.getSettings_().endingStart) {
            case Bn:
                r = e, a = 2 * t - n; break;
            case er:
                r = i.length - 2, a = t + i[r] - i[r + 1]; break;
            default:
                r = e, a = n }
        if (l === void 0) switch (this.getSettings_().endingEnd) {
            case Bn:
                o = e, l = 2 * n - t; break;
            case er:
                o = 1, l = n + i[1] - i[0]; break;
            default:
                o = e - 1, l = t }
        const c = (n - t) * .5,
            h = this.valueSize;
        this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = r * h, this._offsetNext = o * h }
    interpolate_(e, t, n, i) { const r = this.resultBuffer,
            o = this.sampleValues,
            a = this.valueSize,
            l = e * a,
            c = l - a,
            h = this._offsetPrev,
            u = this._offsetNext,
            d = this._weightPrev,
            f = this._weightNext,
            g = (n - t) / (i - t),
            x = g * g,
            v = x * g,
            m = -d * v + 2 * d * x - d * g,
            p = (1 + d) * v + (-1.5 - 2 * d) * x + (-.5 + d) * g + 1,
            T = (-1 - f) * v + (1.5 + f) * x + .5 * g,
            y = f * v - f * x; for (let w = 0; w !== a; ++w) r[w] = m * o[h + w] + p * o[c + w] + T * o[l + w] + y * o[u + w]; return r } }
class Ul extends mn { constructor(e, t, n, i) { super(e, t, n, i) }
    interpolate_(e, t, n, i) { const r = this.resultBuffer,
            o = this.sampleValues,
            a = this.valueSize,
            l = e * a,
            c = l - a,
            h = (n - t) / (i - t),
            u = 1 - h; for (let d = 0; d !== a; ++d) r[d] = o[c + d] * u + o[l + d] * h; return r } }
class Xm extends mn { constructor(e, t, n, i) { super(e, t, n, i) }
    interpolate_(e) { return this.copySampleValue_(e - 1) } }
class Gt { constructor(e, t, n, i) { if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined"); if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
        this.name = e, this.times = Ze.convertArray(t, this.TimeBufferType), this.values = Ze.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation) }
    static toJSON(e) { const t = e.constructor; let n; if (t.toJSON !== this.toJSON) n = t.toJSON(e);
        else { n = { name: e.name, times: Ze.convertArray(e.times, Array), values: Ze.convertArray(e.values, Array) }; const i = e.getInterpolation();
            i !== e.DefaultInterpolation && (n.interpolation = i) } return n.type = e.ValueTypeName, n }
    InterpolantFactoryMethodDiscrete(e) { return new Xm(this.times, this.values, this.getValueSize(), e) }
    InterpolantFactoryMethodLinear(e) { return new Ul(this.times, this.values, this.getValueSize(), e) }
    InterpolantFactoryMethodSmooth(e) { return new qm(this.times, this.values, this.getValueSize(), e) }
    setInterpolation(e) { let t; switch (e) {
            case Ki:
                t = this.InterpolantFactoryMethodDiscrete; break;
            case Qi:
                t = this.InterpolantFactoryMethodLinear; break;
            case os:
                t = this.InterpolantFactoryMethodSmooth; break } if (t === void 0) { const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name; if (this.createInterpolant === void 0)
                if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
                else throw new Error(n);
            return console.warn("THREE.KeyframeTrack:", n), this } return this.createInterpolant = t, this }
    getInterpolation() { switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return Ki;
            case this.InterpolantFactoryMethodLinear:
                return Qi;
            case this.InterpolantFactoryMethodSmooth:
                return os } }
    getValueSize() { return this.values.length / this.times.length }
    shift(e) { if (e !== 0) { const t = this.times; for (let n = 0, i = t.length; n !== i; ++n) t[n] += e } return this }
    scale(e) { if (e !== 1) { const t = this.times; for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e } return this }
    trim(e, t) { const n = this.times,
            i = n.length; let r = 0,
            o = i - 1; for (; r !== i && n[r] < e;) ++r; for (; o !== -1 && n[o] > t;) --o; if (++o, r !== 0 || o !== i) { r >= o && (o = Math.max(o, 1), r = o - 1); const a = this.getValueSize();
            this.times = Ze.arraySlice(n, r, o), this.values = Ze.arraySlice(this.values, r * a, o * a) } return this }
    validate() { let e = !0; const t = this.getValueSize();
        t - Math.floor(t) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1); const n = this.times,
            i = this.values,
            r = n.length;
        r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1); let o = null; for (let a = 0; a !== r; a++) { const l = n[a]; if (typeof l == "number" && isNaN(l)) { console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, l), e = !1; break } if (o !== null && o > l) { console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, o), e = !1; break }
            o = l } if (i !== void 0 && Ze.isTypedArray(i))
            for (let a = 0, l = i.length; a !== l; ++a) { const c = i[a]; if (isNaN(c)) { console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, c), e = !1; break } }
        return e }
    optimize() { const e = Ze.arraySlice(this.times),
            t = Ze.arraySlice(this.values),
            n = this.getValueSize(),
            i = this.getInterpolation() === os,
            r = e.length - 1; let o = 1; for (let a = 1; a < r; ++a) { let l = !1; const c = e[a],
                h = e[a + 1]; if (c !== h && (a !== 1 || c !== e[0]))
                if (i) l = !0;
                else { const u = a * n,
                        d = u - n,
                        f = u + n; for (let g = 0; g !== n; ++g) { const x = t[u + g]; if (x !== t[d + g] || x !== t[f + g]) { l = !0; break } } }
            if (l) { if (a !== o) { e[o] = e[a]; const u = a * n,
                        d = o * n; for (let f = 0; f !== n; ++f) t[d + f] = t[u + f] }++o } } if (r > 0) { e[o] = e[r]; for (let a = r * n, l = o * n, c = 0; c !== n; ++c) t[l + c] = t[a + c];++o } return o !== e.length ? (this.times = Ze.arraySlice(e, 0, o), this.values = Ze.arraySlice(t, 0, o * n)) : (this.times = e, this.values = t), this }
    clone() { const e = Ze.arraySlice(this.times, 0),
            t = Ze.arraySlice(this.values, 0),
            n = this.constructor,
            i = new n(this.name, e, t); return i.createInterpolant = this.createInterpolant, i } }
Gt.prototype.TimeBufferType = Float32Array;
Gt.prototype.ValueBufferType = Float32Array;
Gt.prototype.DefaultInterpolation = Qi;
class pi extends Gt {}
pi.prototype.ValueTypeName = "bool";
pi.prototype.ValueBufferType = Array;
pi.prototype.DefaultInterpolation = Ki;
pi.prototype.InterpolantFactoryMethodLinear = void 0;
pi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Hl extends Gt {}
Hl.prototype.ValueTypeName = "color";
class Hr extends Gt {}
Hr.prototype.ValueTypeName = "number";
class jm extends mn { constructor(e, t, n, i) { super(e, t, n, i) }
    interpolate_(e, t, n, i) { const r = this.resultBuffer,
            o = this.sampleValues,
            a = this.valueSize,
            l = (n - t) / (i - t); let c = e * a; for (let h = c + a; c !== h; c += 4) dt.slerpFlat(r, 0, o, c - a, o, c, l); return r } }
class Wi extends Gt { InterpolantFactoryMethodLinear(e) { return new jm(this.times, this.values, this.getValueSize(), e) } }
Wi.prototype.ValueTypeName = "quaternion";
Wi.prototype.DefaultInterpolation = Qi;
Wi.prototype.InterpolantFactoryMethodSmooth = void 0;
class mi extends Gt {}
mi.prototype.ValueTypeName = "string";
mi.prototype.ValueBufferType = Array;
mi.prototype.DefaultInterpolation = Ki;
mi.prototype.InterpolantFactoryMethodLinear = void 0;
mi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Vr extends Gt {}
Vr.prototype.ValueTypeName = "vector";
class Vl { constructor(e, t = -1, n, i = as) { this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Ot(), this.duration < 0 && this.resetDuration() }
    static parse(e) { const t = [],
            n = e.tracks,
            i = 1 / (e.fps || 1); for (let o = 0, a = n.length; o !== a; ++o) t.push(Zm(n[o]).scale(i)); const r = new this(e.name, e.duration, t, e.blendMode); return r.uuid = e.uuid, r }
    static toJSON(e) { const t = [],
            n = e.tracks,
            i = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode }; for (let r = 0, o = n.length; r !== o; ++r) t.push(Gt.toJSON(n[r])); return i }
    static CreateFromMorphTargetSequence(e, t, n, i) { const r = t.length,
            o = []; for (let a = 0; a < r; a++) { let l = [],
                c = [];
            l.push((a + r - 1) % r, a, (a + 1) % r), c.push(0, 1, 0); const h = Ze.getKeyframeOrder(l);
            l = Ze.sortedArray(l, 1, h), c = Ze.sortedArray(c, 1, h), !i && l[0] === 0 && (l.push(r), c.push(c[0])), o.push(new Hr(".morphTargetInfluences[" + t[a].name + "]", l, c).scale(1 / n)) } return new this(e, -1, o) }
    static findByName(e, t) { let n = e; if (!Array.isArray(e)) { const i = e;
            n = i.geometry && i.geometry.animations || i.animations } for (let i = 0; i < n.length; i++)
            if (n[i].name === t) return n[i];
        return null }
    static CreateClipsFromMorphTargetSequences(e, t, n) { const i = {},
            r = /^([\w-]*?)([\d]+)$/; for (let a = 0, l = e.length; a < l; a++) { const c = e[a],
                h = c.name.match(r); if (h && h.length > 1) { const u = h[1]; let d = i[u];
                d || (i[u] = d = []), d.push(c) } } const o = []; for (const a in i) o.push(this.CreateFromMorphTargetSequence(a, i[a], t, n)); return o }
    static parseAnimation(e, t) { if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null; const n = function(u, d, f, g, x) { if (f.length !== 0) { const v = [],
                        m = [];
                    Ze.flattenJSON(f, v, m, g), v.length !== 0 && x.push(new u(d, v, m)) } },
            i = [],
            r = e.name || "default",
            o = e.fps || 30,
            a = e.blendMode; let l = e.length || -1; const c = e.hierarchy || []; for (let u = 0; u < c.length; u++) { const d = c[u].keys; if (!(!d || d.length === 0))
                if (d[0].morphTargets) { const f = {}; let g; for (g = 0; g < d.length; g++)
                        if (d[g].morphTargets)
                            for (let x = 0; x < d[g].morphTargets.length; x++) f[d[g].morphTargets[x]] = -1;
                    for (const x in f) { const v = [],
                            m = []; for (let p = 0; p !== d[g].morphTargets.length; ++p) { const T = d[g];
                            v.push(T.time), m.push(T.morphTarget === x ? 1 : 0) }
                        i.push(new Hr(".morphTargetInfluence[" + x + "]", v, m)) }
                    l = f.length * (o || 1) } else { const f = ".bones[" + t[u].name + "]";
                    n(Vr, f + ".position", d, "pos", i), n(Wi, f + ".quaternion", d, "rot", i), n(Vr, f + ".scale", d, "scl", i) } } return i.length === 0 ? null : new this(r, l, i, a) }
    resetDuration() { const e = this.tracks; let t = 0; for (let n = 0, i = e.length; n !== i; ++n) { const r = this.tracks[n];
            t = Math.max(t, r.times[r.times.length - 1]) } return this.duration = t, this }
    trim() { for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration); return this }
    validate() { let e = !0; for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate(); return e }
    optimize() { for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize(); return this }
    clone() { const e = []; for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone()); return new this.constructor(this.name, this.duration, e, this.blendMode) }
    toJSON() { return this.constructor.toJSON(this) } }

function Ym(s) { switch (s.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
            return Hr;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
            return Vr;
        case "color":
            return Hl;
        case "quaternion":
            return Wi;
        case "bool":
        case "boolean":
            return pi;
        case "string":
            return mi } throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s) }

function Zm(s) { if (s.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse"); const e = Ym(s.type); if (s.times === void 0) { const t = [],
            n = [];
        Ze.flattenJSON(s.keys, t, n, "value"), s.times = t, s.values = n } return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation) }
const gi = { enabled: !1, files: {}, add: function(s, e) { this.enabled !== !1 && (this.files[s] = e) }, get: function(s) { if (this.enabled !== !1) return this.files[s] }, remove: function(s) { delete this.files[s] }, clear: function() { this.files = {} } };
class Jm { constructor(e, t, n) { const i = this; let r = !1,
            o = 0,
            a = 0,
            l; const c = [];
        this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) { a++, r === !1 && i.onStart !== void 0 && i.onStart(h, o, a), r = !0 }, this.itemEnd = function(h) { o++, i.onProgress !== void 0 && i.onProgress(h, o, a), o === a && (r = !1, i.onLoad !== void 0 && i.onLoad()) }, this.itemError = function(h) { i.onError !== void 0 && i.onError(h) }, this.resolveURL = function(h) { return l ? l(h) : h }, this.setURLModifier = function(h) { return l = h, this }, this.addHandler = function(h, u) { return c.push(h, u), this }, this.removeHandler = function(h) { const u = c.indexOf(h); return u !== -1 && c.splice(u, 2), this }, this.getHandler = function(h) { for (let u = 0, d = c.length; u < d; u += 2) { const f = c[u],
                    g = c[u + 1]; if (f.global && (f.lastIndex = 0), f.test(h)) return g } return null } } }
const $m = new Jm;
class gn { constructor(e) { this.manager = e !== void 0 ? e : $m, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {} }
    load() {}
    loadAsync(e, t) { const n = this; return new Promise(function(i, r) { n.load(e, i, t, r) }) }
    parse() {}
    setCrossOrigin(e) { return this.crossOrigin = e, this }
    setWithCredentials(e) { return this.withCredentials = e, this }
    setPath(e) { return this.path = e, this }
    setResourcePath(e) { return this.resourcePath = e, this }
    setRequestHeader(e) { return this.requestHeader = e, this } }
const $t = {};
class Km extends gn { constructor(e) { super(e) }
    load(e, t, n, i) { e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const r = gi.get(e); if (r !== void 0) return this.manager.itemStart(e), setTimeout(() => { t && t(r), this.manager.itemEnd(e) }, 0), r; if ($t[e] !== void 0) { $t[e].push({ onLoad: t, onProgress: n, onError: i }); return }
        $t[e] = [], $t[e].push({ onLoad: t, onProgress: n, onError: i }); const o = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }),
            a = this.mimeType,
            l = this.responseType;
        fetch(o).then(c => { if (c.status === 200 || c.status === 0) { if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream == "undefined" || c.body.getReader === void 0) return c; const h = $t[e],
                    u = c.body.getReader(),
                    d = c.headers.get("Content-Length"),
                    f = d ? parseInt(d) : 0,
                    g = f !== 0; let x = 0; const v = new ReadableStream({ start(m) { p();

                        function p() { u.read().then(({ done: T, value: y }) => { if (T) m.close();
                                else { x += y.byteLength; const w = new ProgressEvent("progress", { lengthComputable: g, loaded: x, total: f }); for (let R = 0, P = h.length; R < P; R++) { const Z = h[R];
                                        Z.onProgress && Z.onProgress(w) }
                                    m.enqueue(y), p() } }) } } }); return new Response(v) } else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`) }).then(c => { switch (l) {
                case "arraybuffer":
                    return c.arrayBuffer();
                case "blob":
                    return c.blob();
                case "document":
                    return c.text().then(h => new DOMParser().parseFromString(h, a));
                case "json":
                    return c.json();
                default:
                    if (a === void 0) return c.text(); { const u = /charset="?([^;"\s]*)"?/i.exec(a),
                            d = u && u[1] ? u[1].toLowerCase() : void 0,
                            f = new TextDecoder(d); return c.arrayBuffer().then(g => f.decode(g)) } } }).then(c => { gi.add(e, c); const h = $t[e];
            delete $t[e]; for (let u = 0, d = h.length; u < d; u++) { const f = h[u];
                f.onLoad && f.onLoad(c) } }).catch(c => { const h = $t[e]; if (h === void 0) throw this.manager.itemError(e), c;
            delete $t[e]; for (let u = 0, d = h.length; u < d; u++) { const f = h[u];
                f.onError && f.onError(c) }
            this.manager.itemError(e) }).finally(() => { this.manager.itemEnd(e) }), this.manager.itemStart(e) }
    setResponseType(e) { return this.responseType = e, this }
    setMimeType(e) { return this.mimeType = e, this } }
class Gl extends gn { constructor(e) { super(e) }
    load(e, t, n, i) { this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const r = this,
            o = gi.get(e); if (o !== void 0) return r.manager.itemStart(e), setTimeout(function() { t && t(o), r.manager.itemEnd(e) }, 0), o; const a = Ei("img");

        function l() { h(), gi.add(e, this), t && t(this), r.manager.itemEnd(e) }

        function c(u) { h(), i && i(u), r.manager.itemError(e), r.manager.itemEnd(e) }

        function h() { a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1) } return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), e.substr(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a } }
class Qm extends gn { constructor(e) { super(e) }
    load(e, t, n, i) { const r = new vr,
            o = new Gl(this.manager);
        o.setCrossOrigin(this.crossOrigin), o.setPath(this.path); let a = 0;

        function l(c) { o.load(e[c], function(h) { r.images[c] = h, a++, a === 6 && (r.needsUpdate = !0, t && t(r)) }, void 0, i) } for (let c = 0; c < e.length; ++c) l(c); return r } }
class eg extends gn { constructor(e) { super(e) }
    load(e, t, n, i) { const r = new ot,
            o = new Gl(this.manager); return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) { r.image = a, r.needsUpdate = !0, t !== void 0 && t(r) }, n, i), r } }
class kt extends Ue { constructor(e, t = 1) { super();
        this.type = "Light", this.color = new ve(e), this.intensity = t }
    dispose() {}
    copy(e) { return super.copy(e), this.color.copy(e.color), this.intensity = e.intensity, this }
    toJSON(e) { const t = super.toJSON(e); return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t } }
kt.prototype.isLight = !0;
class tg extends kt { constructor(e, t, n) { super(e, n);
        this.type = "HemisphereLight", this.position.copy(Ue.DefaultUp), this.updateMatrix(), this.groundColor = new ve(t) }
    copy(e) { return kt.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this } }
tg.prototype.isHemisphereLight = !0;
const kl = new be,
    Wl = new S,
    ql = new S;
class ho { constructor(e) { this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new J(512, 512), this.map = null, this.mapPass = null, this.matrix = new be, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Mr, this._frameExtents = new J(1, 1), this._viewportCount = 1, this._viewports = [new We(0, 0, 1, 1)] }
    getViewportCount() { return this._viewportCount }
    getFrustum() { return this._frustum }
    updateMatrices(e) { const t = this.camera,
            n = this.matrix;
        Wl.setFromMatrixPosition(e.matrixWorld), t.position.copy(Wl), ql.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(ql), t.updateMatrixWorld(), kl.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(kl), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse) }
    getViewport(e) { return this._viewports[e] }
    getFrameExtents() { return this._frameExtents }
    dispose() { this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose() }
    copy(e) { return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this }
    clone() { return new this.constructor().copy(this) }
    toJSON() { const e = {}; return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e } }
class Xl extends ho { constructor() { super(new yt(50, 1, .5, 500));
        this.focus = 1 }
    updateMatrices(e) { const t = this.camera,
            n = us * 2 * e.angle * this.focus,
            i = this.mapSize.width / this.mapSize.height,
            r = e.distance || t.far;
        (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e) }
    copy(e) { return super.copy(e), this.focus = e.focus, this } }
Xl.prototype.isSpotLightShadow = !0;
class ng extends kt { constructor(e, t, n = 0, i = Math.PI / 3, r = 0, o = 1) { super(e, t);
        this.type = "SpotLight", this.position.copy(Ue.DefaultUp), this.updateMatrix(), this.target = new Ue, this.distance = n, this.angle = i, this.penumbra = r, this.decay = o, this.shadow = new Xl }
    get power() { return this.intensity * Math.PI }
    set power(e) { this.intensity = e / Math.PI }
    dispose() { this.shadow.dispose() }
    copy(e) { return super.copy(e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this } }
ng.prototype.isSpotLight = !0;
const jl = new be,
    qi = new S,
    uo = new S;
class Yl extends ho { constructor() { super(new yt(90, 1, .5, 500));
        this._frameExtents = new J(4, 2), this._viewportCount = 6, this._viewports = [new We(2, 1, 1, 1), new We(0, 1, 1, 1), new We(3, 1, 1, 1), new We(1, 1, 1, 1), new We(3, 0, 1, 1), new We(1, 0, 1, 1)], this._cubeDirections = [new S(1, 0, 0), new S(-1, 0, 0), new S(0, 0, 1), new S(0, 0, -1), new S(0, 1, 0), new S(0, -1, 0)], this._cubeUps = [new S(0, 1, 0), new S(0, 1, 0), new S(0, 1, 0), new S(0, 1, 0), new S(0, 0, 1), new S(0, 0, -1)] }
    updateMatrices(e, t = 0) { const n = this.camera,
            i = this.matrix,
            r = e.distance || n.far;
        r !== n.far && (n.far = r, n.updateProjectionMatrix()), qi.setFromMatrixPosition(e.matrixWorld), n.position.copy(qi), uo.copy(n.position), uo.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(uo), n.updateMatrixWorld(), i.makeTranslation(-qi.x, -qi.y, -qi.z), jl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(jl) } }
Yl.prototype.isPointLightShadow = !0;
class ig extends kt { constructor(e, t, n = 0, i = 1) { super(e, t);
        this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Yl }
    get power() { return this.intensity * 4 * Math.PI }
    set power(e) { this.intensity = e / (4 * Math.PI) }
    dispose() { this.shadow.dispose() }
    copy(e) { return super.copy(e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this } }
ig.prototype.isPointLight = !0;
class Zl extends ho { constructor() { super(new Us(-5, 5, 5, -5, .5, 500)) } }
Zl.prototype.isDirectionalLightShadow = !0;
class rg extends kt { constructor(e, t) { super(e, t);
        this.type = "DirectionalLight", this.position.copy(Ue.DefaultUp), this.updateMatrix(), this.target = new Ue, this.shadow = new Zl }
    dispose() { this.shadow.dispose() }
    copy(e) { return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this } }
rg.prototype.isDirectionalLight = !0;
class sg extends kt { constructor(e, t) { super(e, t);
        this.type = "AmbientLight" } }
sg.prototype.isAmbientLight = !0;
class og extends kt { constructor(e, t, n = 10, i = 10) { super(e, t);
        this.type = "RectAreaLight", this.width = n, this.height = i }
    get power() { return this.intensity * this.width * this.height * Math.PI }
    set power(e) { this.intensity = e / (this.width * this.height * Math.PI) }
    copy(e) { return super.copy(e), this.width = e.width, this.height = e.height, this }
    toJSON(e) { const t = super.toJSON(e); return t.object.width = this.width, t.object.height = this.height, t } }
og.prototype.isRectAreaLight = !0;
class Jl { constructor() { this.coefficients = []; for (let e = 0; e < 9; e++) this.coefficients.push(new S) }
    set(e) { for (let t = 0; t < 9; t++) this.coefficients[t].copy(e[t]); return this }
    zero() { for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0); return this }
    getAt(e, t) { const n = e.x,
            i = e.y,
            r = e.z,
            o = this.coefficients; return t.copy(o[0]).multiplyScalar(.282095), t.addScaledVector(o[1], .488603 * i), t.addScaledVector(o[2], .488603 * r), t.addScaledVector(o[3], .488603 * n), t.addScaledVector(o[4], 1.092548 * (n * i)), t.addScaledVector(o[5], 1.092548 * (i * r)), t.addScaledVector(o[6], .315392 * (3 * r * r - 1)), t.addScaledVector(o[7], 1.092548 * (n * r)), t.addScaledVector(o[8], .546274 * (n * n - i * i)), t }
    getIrradianceAt(e, t) { const n = e.x,
            i = e.y,
            r = e.z,
            o = this.coefficients; return t.copy(o[0]).multiplyScalar(.886227), t.addScaledVector(o[1], 2 * .511664 * i), t.addScaledVector(o[2], 2 * .511664 * r), t.addScaledVector(o[3], 2 * .511664 * n), t.addScaledVector(o[4], 2 * .429043 * n * i), t.addScaledVector(o[5], 2 * .429043 * i * r), t.addScaledVector(o[6], .743125 * r * r - .247708), t.addScaledVector(o[7], 2 * .429043 * n * r), t.addScaledVector(o[8], .429043 * (n * n - i * i)), t }
    add(e) { for (let t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]); return this }
    addScaledSH(e, t) { for (let n = 0; n < 9; n++) this.coefficients[n].addScaledVector(e.coefficients[n], t); return this }
    scale(e) { for (let t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e); return this }
    lerp(e, t) { for (let n = 0; n < 9; n++) this.coefficients[n].lerp(e.coefficients[n], t); return this }
    equals(e) { for (let t = 0; t < 9; t++)
            if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
        return !0 }
    copy(e) { return this.set(e.coefficients) }
    clone() { return new this.constructor().copy(this) }
    fromArray(e, t = 0) { const n = this.coefficients; for (let i = 0; i < 9; i++) n[i].fromArray(e, t + i * 3); return this }
    toArray(e = [], t = 0) { const n = this.coefficients; for (let i = 0; i < 9; i++) n[i].toArray(e, t + i * 3); return e }
    static getBasisAt(e, t) { const n = e.x,
            i = e.y,
            r = e.z;
        t[0] = .282095, t[1] = .488603 * i, t[2] = .488603 * r, t[3] = .488603 * n, t[4] = 1.092548 * n * i, t[5] = 1.092548 * i * r, t[6] = .315392 * (3 * r * r - 1), t[7] = 1.092548 * n * r, t[8] = .546274 * (n * n - i * i) } }
Jl.prototype.isSphericalHarmonics3 = !0;
class fo extends kt { constructor(e = new Jl, t = 1) { super(void 0, t);
        this.sh = e }
    copy(e) { return super.copy(e), this.sh.copy(e.sh), this }
    fromJSON(e) { return this.intensity = e.intensity, this.sh.fromArray(e.sh), this }
    toJSON(e) { const t = super.toJSON(e); return t.object.sh = this.sh.toArray(), t } }
fo.prototype.isLightProbe = !0;
class ag { static decodeText(e) { if (typeof TextDecoder != "undefined") return new TextDecoder().decode(e); let t = ""; for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]); try { return decodeURIComponent(escape(t)) } catch { return t } }
    static extractUrlBase(e) { const t = e.lastIndexOf("/"); return t === -1 ? "./" : e.substr(0, t + 1) }
    static resolveURL(e, t) { return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e) } }
class lg extends qe { constructor() { super();
        this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0 }
    copy(e) { return super.copy(e), this.instanceCount = e.instanceCount, this }
    clone() { return new this.constructor().copy(this) }
    toJSON() { const e = super.toJSON(this); return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e } }
lg.prototype.isInstancedBufferGeometry = !0;
class cg extends gn { constructor(e) { super(e);
        typeof createImageBitmap == "undefined" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch == "undefined" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" } }
    setOptions(e) { return this.options = e, this }
    load(e, t, n, i) { e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const r = this,
            o = gi.get(e); if (o !== void 0) return r.manager.itemStart(e), setTimeout(function() { t && t(o), r.manager.itemEnd(e) }, 0), o; const a = {};
        a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader, fetch(e, a).then(function(l) { return l.blob() }).then(function(l) { return createImageBitmap(l, Object.assign(r.options, { colorSpaceConversion: "none" })) }).then(function(l) { gi.add(e, l), t && t(l), r.manager.itemEnd(e) }).catch(function(l) { i && i(l), r.manager.itemError(e), r.manager.itemEnd(e) }), r.manager.itemStart(e) } }
cg.prototype.isImageBitmapLoader = !0;
let Gr;
const hg = { getContext: function() { return Gr === void 0 && (Gr = new(window.AudioContext || window.webkitAudioContext)), Gr }, setContext: function(s) { Gr = s } };
class ug extends gn { constructor(e) { super(e) }
    load(e, t, n, i) { const r = this,
            o = new Km(this.manager);
        o.setResponseType("arraybuffer"), o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) { try { const l = a.slice(0);
                hg.getContext().decodeAudioData(l, function(h) { t(h) }) } catch (l) { i ? i(l) : console.error(l), r.manager.itemError(e) } }, n, i) } }
class dg extends fo { constructor(e, t, n = 1) { super(void 0, n); const i = new ve().set(e),
            r = new ve().set(t),
            o = new S(i.r, i.g, i.b),
            a = new S(r.r, r.g, r.b),
            l = Math.sqrt(Math.PI),
            c = l * Math.sqrt(.75);
        this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l), this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c) } }
dg.prototype.isHemisphereLightProbe = !0;
class fg extends fo { constructor(e, t = 1) { super(void 0, t); const n = new ve().set(e);
        this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI)) } }
fg.prototype.isAmbientLightProbe = !0;
class pg extends Ue { constructor(e) { super();
        this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [] }
    getOutput() { return this.gain }
    setNodeSource(e) { return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this }
    setMediaElementSource(e) { return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this }
    setMediaStreamSource(e) { return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this }
    setBuffer(e) { return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this }
    play(e = 0) { if (this.isPlaying === !0) { console.warn("THREE.Audio: Audio is already playing."); return } if (this.hasPlaybackControl === !1) { console.warn("THREE.Audio: this Audio has no playback control."); return }
        this._startedAt = this.context.currentTime + e; const t = this.context.createBufferSource(); return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect() }
    pause() { if (this.hasPlaybackControl === !1) { console.warn("THREE.Audio: this Audio has no playback control."); return } return this.isPlaying === !0 && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === !0 && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this }
    stop() { if (this.hasPlaybackControl === !1) { console.warn("THREE.Audio: this Audio has no playback control."); return } return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this }
    connect() { if (this.filters.length > 0) { this.source.connect(this.filters[0]); for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
            this.filters[this.filters.length - 1].connect(this.getOutput()) } else this.source.connect(this.getOutput()); return this._connected = !0, this }
    disconnect() { if (this.filters.length > 0) { this.source.disconnect(this.filters[0]); for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
            this.filters[this.filters.length - 1].disconnect(this.getOutput()) } else this.source.disconnect(this.getOutput()); return this._connected = !1, this }
    getFilters() { return this.filters }
    setFilters(e) { return e || (e = []), this._connected === !0 ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this }
    setDetune(e) { if (this.detune = e, this.source.detune !== void 0) return this.isPlaying === !0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this }
    getDetune() { return this.detune }
    getFilter() { return this.getFilters()[0] }
    setFilter(e) { return this.setFilters(e ? [e] : []) }
    setPlaybackRate(e) { if (this.hasPlaybackControl === !1) { console.warn("THREE.Audio: this Audio has no playback control."); return } return this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this }
    getPlaybackRate() { return this.playbackRate }
    onEnded() { this.isPlaying = !1 }
    getLoop() { return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop }
    setLoop(e) { if (this.hasPlaybackControl === !1) { console.warn("THREE.Audio: this Audio has no playback control."); return } return this.loop = e, this.isPlaying === !0 && (this.source.loop = this.loop), this }
    setLoopStart(e) { return this.loopStart = e, this }
    setLoopEnd(e) { return this.loopEnd = e, this }
    getVolume() { return this.gain.gain.value }
    setVolume(e) { return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this } }
class mg { constructor(e, t, n) { this.binding = e, this.valueSize = n; let i, r, o; switch (t) {
            case "quaternion":
                i = this._slerp, r = this._slerpAdditive, o = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5; break;
            case "string":
            case "bool":
                i = this._select, r = this._select, o = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5); break;
            default:
                i = this._lerp, r = this._lerpAdditive, o = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5) }
        this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = o, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0 }
    accumulate(e, t) { const n = this.buffer,
            i = this.valueSize,
            r = e * i + i; let o = this.cumulativeWeight; if (o === 0) { for (let a = 0; a !== i; ++a) n[r + a] = n[a];
            o = t } else { o += t; const a = t / o;
            this._mixBufferRegion(n, r, 0, a, i) }
        this.cumulativeWeight = o }
    accumulateAdditive(e) { const t = this.buffer,
            n = this.valueSize,
            i = n * this._addIndex;
        this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e }
    apply(e) { const t = this.valueSize,
            n = this.buffer,
            i = e * t + t,
            r = this.cumulativeWeight,
            o = this.cumulativeWeightAdditive,
            a = this.binding; if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) { const l = t * this._origIndex;
            this._mixBufferRegion(n, i, l, 1 - r, t) }
        o > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t); for (let l = t, c = t + t; l !== c; ++l)
            if (n[l] !== n[l + t]) { a.setValue(n, i); break } }
    saveOriginalState() { const e = this.binding,
            t = this.buffer,
            n = this.valueSize,
            i = n * this._origIndex;
        e.getValue(t, i); for (let r = n, o = i; r !== o; ++r) t[r] = t[i + r % n];
        this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0 }
    restoreOriginalState() { const e = this.valueSize * 3;
        this.binding.setValue(this.buffer, e) }
    _setAdditiveIdentityNumeric() { const e = this._addIndex * this.valueSize,
            t = e + this.valueSize; for (let n = e; n < t; n++) this.buffer[n] = 0 }
    _setAdditiveIdentityQuaternion() { this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1 }
    _setAdditiveIdentityOther() { const e = this._origIndex * this.valueSize,
            t = this._addIndex * this.valueSize; for (let n = 0; n < this.valueSize; n++) this.buffer[t + n] = this.buffer[e + n] }
    _select(e, t, n, i, r) { if (i >= .5)
            for (let o = 0; o !== r; ++o) e[t + o] = e[n + o] }
    _slerp(e, t, n, i) { dt.slerpFlat(e, t, e, t, e, n, i) }
    _slerpAdditive(e, t, n, i, r) { const o = this._workIndex * r;
        dt.multiplyQuaternionsFlat(e, o, e, t, e, n), dt.slerpFlat(e, t, e, t, e, o, i) }
    _lerp(e, t, n, i, r) { const o = 1 - i; for (let a = 0; a !== r; ++a) { const l = t + a;
            e[l] = e[l] * o + e[n + a] * i } }
    _lerpAdditive(e, t, n, i, r) { for (let o = 0; o !== r; ++o) { const a = t + o;
            e[a] = e[a] + e[n + o] * i } } }
const po = "\\[\\]\\.:\\/",
    gg = new RegExp("[" + po + "]", "g"),
    mo = "[^" + po + "]",
    xg = "[^" + po.replace("\\.", "") + "]",
    _g = /((?:WC+[\/:])*)/.source.replace("WC", mo),
    vg = /(WCOD+)?/.source.replace("WCOD", xg),
    yg = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", mo),
    Mg = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", mo),
    bg = new RegExp("^" + _g + vg + yg + Mg + "$"),
    wg = ["material", "materials", "bones"];
class Sg { constructor(e, t, n) { const i = n || Ge.parseTrackName(t);
        this._targetGroup = e, this._bindings = e.subscribe_(t, i) }
    getValue(e, t) { this.bind(); const n = this._targetGroup.nCachedObjects_,
            i = this._bindings[n];
        i !== void 0 && i.getValue(e, t) }
    setValue(e, t) { const n = this._bindings; for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(e, t) }
    bind() { const e = this._bindings; for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind() }
    unbind() { const e = this._bindings; for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind() } }
class Ge { constructor(e, t, n) { this.path = t, this.parsedPath = n || Ge.parseTrackName(t), this.node = Ge.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound }
    static create(e, t, n) { return e && e.isAnimationObjectGroup ? new Ge.Composite(e, t, n) : new Ge(e, t, n) }
    static sanitizeNodeName(e) { return e.replace(/\s/g, "_").replace(gg, "") }
    static parseTrackName(e) { const t = bg.exec(e); if (!t) throw new Error("PropertyBinding: Cannot parse trackName: " + e); const n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] },
            i = n.nodeName && n.nodeName.lastIndexOf("."); if (i !== void 0 && i !== -1) { const r = n.nodeName.substring(i + 1);
            wg.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r) } if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e); return n }
    static findNode(e, t) { if (!t || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e; if (e.skeleton) { const n = e.skeleton.getBoneByName(t); if (n !== void 0) return n } if (e.children) { const n = function(r) { for (let o = 0; o < r.length; o++) { const a = r[o]; if (a.name === t || a.uuid === t) return a; const l = n(a.children); if (l) return l } return null },
                i = n(e.children); if (i) return i } return null }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) { e[t] = this.targetObject[this.propertyName] }
    _getValue_array(e, t) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i) e[t++] = n[i] }
    _getValue_arrayElement(e, t) { e[t] = this.resolvedProperty[this.propertyIndex] }
    _getValue_toArray(e, t) { this.resolvedProperty.toArray(e, t) }
    _setValue_direct(e, t) { this.targetObject[this.propertyName] = e[t] }
    _setValue_direct_setNeedsUpdate(e, t) { this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0 }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) { this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0 }
    _setValue_array(e, t) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++] }
    _setValue_array_setNeedsUpdate(e, t) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
        this.targetObject.needsUpdate = !0 }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
        this.targetObject.matrixWorldNeedsUpdate = !0 }
    _setValue_arrayElement(e, t) { this.resolvedProperty[this.propertyIndex] = e[t] }
    _setValue_arrayElement_setNeedsUpdate(e, t) { this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0 }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) { this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0 }
    _setValue_fromArray(e, t) { this.resolvedProperty.fromArray(e, t) }
    _setValue_fromArray_setNeedsUpdate(e, t) { this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0 }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) { this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0 }
    _getValue_unbound(e, t) { this.bind(), this.getValue(e, t) }
    _setValue_unbound(e, t) { this.bind(), this.setValue(e, t) }
    bind() { let e = this.node; const t = this.parsedPath,
            n = t.objectName,
            i = t.propertyName; let r = t.propertyIndex; if (e || (e = Ge.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) { console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found."); return } if (n) { let c = t.objectIndex; switch (n) {
                case "materials":
                    if (!e.material) { console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this); return } if (!e.material.materials) { console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this); return }
                    e = e.material.materials; break;
                case "bones":
                    if (!e.skeleton) { console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this); return }
                    e = e.skeleton.bones; for (let h = 0; h < e.length; h++)
                        if (e[h].name === c) { c = h; break }
                    break;
                default:
                    if (e[n] === void 0) { console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this); return }
                    e = e[n] } if (c !== void 0) { if (e[c] === void 0) { console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e); return }
                e = e[c] } } const o = e[i]; if (o === void 0) { const c = t.nodeName;
            console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e); return } let a = this.Versioning.None;
        this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate); let l = this.BindingType.Direct; if (r !== void 0) { if (i === "morphTargetInfluences") { if (!e.geometry) { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this); return } if (e.geometry.isBufferGeometry) { if (!e.geometry.morphAttributes) { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this); return }
                    e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]) } else { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this); return } }
            l = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r } else o.fromArray !== void 0 && o.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
        this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a] }
    unbind() { this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound } }
Ge.Composite = Sg;
Ge.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
Ge.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
Ge.prototype.GetterByBindingType = [Ge.prototype._getValue_direct, Ge.prototype._getValue_array, Ge.prototype._getValue_arrayElement, Ge.prototype._getValue_toArray];
Ge.prototype.SetterByBindingTypeAndVersioning = [
    [Ge.prototype._setValue_direct, Ge.prototype._setValue_direct_setNeedsUpdate, Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],
    [Ge.prototype._setValue_array, Ge.prototype._setValue_array_setNeedsUpdate, Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],
    [Ge.prototype._setValue_arrayElement, Ge.prototype._setValue_arrayElement_setNeedsUpdate, Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],
    [Ge.prototype._setValue_fromArray, Ge.prototype._setValue_fromArray_setNeedsUpdate, Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]
];
class Eg { constructor(e, t, n = null, i = t.blendMode) { this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i; const r = t.tracks,
            o = r.length,
            a = new Array(o),
            l = { endingStart: Nn, endingEnd: Nn }; for (let c = 0; c !== o; ++c) { const h = r[c].createInterpolant(null);
            a[c] = h, h.settings = l }
        this._interpolantSettings = l, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = rh, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0 }
    play() { return this._mixer._activateAction(this), this }
    stop() { return this._mixer._deactivateAction(this), this.reset() }
    reset() { return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping() }
    isRunning() { return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this) }
    isScheduled() { return this._mixer._isActiveAction(this) }
    startAt(e) { return this._startTime = e, this }
    setLoop(e, t) { return this.loop = e, this.repetitions = t, this }
    setEffectiveWeight(e) { return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading() }
    getEffectiveWeight() { return this._effectiveWeight }
    fadeIn(e) { return this._scheduleFading(e, 0, 1) }
    fadeOut(e) { return this._scheduleFading(e, 1, 0) }
    crossFadeFrom(e, t, n) { if (e.fadeOut(t), this.fadeIn(t), n) { const i = this._clip.duration,
                r = e._clip.duration,
                o = r / i,
                a = i / r;
            e.warp(1, o, t), this.warp(a, 1, t) } return this }
    crossFadeTo(e, t, n) { return e.crossFadeFrom(this, t, n) }
    stopFading() { const e = this._weightInterpolant; return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this }
    setEffectiveTimeScale(e) { return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping() }
    getEffectiveTimeScale() { return this._effectiveTimeScale }
    setDuration(e) { return this.timeScale = this._clip.duration / e, this.stopWarping() }
    syncWith(e) { return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping() }
    halt(e) { return this.warp(this._effectiveTimeScale, 0, e) }
    warp(e, t, n) { const i = this._mixer,
            r = i.time,
            o = this.timeScale; let a = this._timeScaleInterpolant;
        a === null && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a); const l = a.parameterPositions,
            c = a.sampleValues; return l[0] = r, l[1] = r + n, c[0] = e / o, c[1] = t / o, this }
    stopWarping() { const e = this._timeScaleInterpolant; return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this }
    getMixer() { return this._mixer }
    getClip() { return this._clip }
    getRoot() { return this._localRoot || this._mixer._root }
    _update(e, t, n, i) { if (!this.enabled) { this._updateWeight(e); return } const r = this._startTime; if (r !== null) { const l = (e - r) * n; if (l < 0 || n === 0) return;
            this._startTime = null, t = n * l }
        t *= this._updateTimeScale(e); const o = this._updateTime(t),
            a = this._updateWeight(e); if (a > 0) { const l = this._interpolants,
                c = this._propertyBindings; switch (this.blendMode) {
                case ta:
                    for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(o), c[h].accumulateAdditive(a); break;
                case as:
                default:
                    for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(o), c[h].accumulate(i, a) } } }
    _updateWeight(e) { let t = 0; if (this.enabled) { t = this.weight; const n = this._weightInterpolant; if (n !== null) { const i = n.evaluate(e)[0];
                t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1)) } } return this._effectiveWeight = t, t }
    _updateTimeScale(e) { let t = 0; if (!this.paused) { t = this.timeScale; const n = this._timeScaleInterpolant;
            n !== null && (t *= n.evaluate(e)[0], e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t)) } return this._effectiveTimeScale = t, t }
    _updateTime(e) { const t = this._clip.duration,
            n = this.loop; let i = this.time + e,
            r = this._loopCount; const o = n === sh; if (e === 0) return r === -1 ? i : o && (r & 1) == 1 ? t - i : i; if (n === ih) { r === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
            e: { if (i >= t) i = t;
                else if (i < 0) i = 0;
                else { this.time = i; break e }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e < 0 ? -1 : 1 }) } } else { if (r === -1 && (e >= 0 ? (r = 0, this._setEndings(!0, this.repetitions === 0, o)) : this._setEndings(this.repetitions === 0, !0, o)), i >= t || i < 0) { const a = Math.floor(i / t);
                i -= t * a, r += Math.abs(a); const l = this.repetitions - r; if (l <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e > 0 ? 1 : -1 });
                else { if (l === 1) { const c = e < 0;
                        this._setEndings(c, !c, o) } else this._setEndings(!1, !1, o);
                    this._loopCount = r, this.time = i, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: a }) } } else this.time = i; if (o && (r & 1) == 1) return t - i } return i }
    _setEndings(e, t, n) { const i = this._interpolantSettings;
        n ? (i.endingStart = Bn, i.endingEnd = Bn) : (e ? i.endingStart = this.zeroSlopeAtStart ? Bn : Nn : i.endingStart = er, t ? i.endingEnd = this.zeroSlopeAtEnd ? Bn : Nn : i.endingEnd = er) }
    _scheduleFading(e, t, n) { const i = this._mixer,
            r = i.time; let o = this._weightInterpolant;
        o === null && (o = i._lendControlInterpolant(), this._weightInterpolant = o); const a = o.parameterPositions,
            l = o.sampleValues; return a[0] = r, l[0] = t, a[1] = r + e, l[1] = n, this } }
class Tg extends nn { constructor(e) { super();
        this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1 }
    _bindAction(e, t) { const n = e._localRoot || this._root,
            i = e._clip.tracks,
            r = i.length,
            o = e._propertyBindings,
            a = e._interpolants,
            l = n.uuid,
            c = this._bindingsByRootAndName; let h = c[l];
        h === void 0 && (h = {}, c[l] = h); for (let u = 0; u !== r; ++u) { const d = i[u],
                f = d.name; let g = h[f]; if (g !== void 0) ++g.referenceCount, o[u] = g;
            else { if (g = o[u], g !== void 0) { g._cacheIndex === null && (++g.referenceCount, this._addInactiveBinding(g, l, f)); continue } const x = t && t._propertyBindings[u].binding.parsedPath;
                g = new mg(Ge.create(n, f, x), d.ValueTypeName, d.getValueSize()), ++g.referenceCount, this._addInactiveBinding(g, l, f), o[u] = g }
            a[u].resultBuffer = g.buffer } }
    _activateAction(e) { if (!this._isActiveAction(e)) { if (e._cacheIndex === null) { const n = (e._localRoot || this._root).uuid,
                    i = e._clip.uuid,
                    r = this._actionsByClip[i];
                this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, i, n) } const t = e._propertyBindings; for (let n = 0, i = t.length; n !== i; ++n) { const r = t[n];
                r.useCount++ == 0 && (this._lendBinding(r), r.saveOriginalState()) }
            this._lendAction(e) } }
    _deactivateAction(e) { if (this._isActiveAction(e)) { const t = e._propertyBindings; for (let n = 0, i = t.length; n !== i; ++n) { const r = t[n];--r.useCount == 0 && (r.restoreOriginalState(), this._takeBackBinding(r)) }
            this._takeBackAction(e) } }
    _initMemoryManager() { this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0; const e = this;
        this.stats = { actions: {get total() { return e._actions.length }, get inUse() { return e._nActiveActions } }, bindings: {get total() { return e._bindings.length }, get inUse() { return e._nActiveBindings } }, controlInterpolants: {get total() { return e._controlInterpolants.length }, get inUse() { return e._nActiveControlInterpolants } } } }
    _isActiveAction(e) { const t = e._cacheIndex; return t !== null && t < this._nActiveActions }
    _addInactiveAction(e, t, n) { const i = this._actions,
            r = this._actionsByClip; let o = r[t]; if (o === void 0) o = { knownActions: [e], actionByRoot: {} }, e._byClipCacheIndex = 0, r[t] = o;
        else { const a = o.knownActions;
            e._byClipCacheIndex = a.length, a.push(e) }
        e._cacheIndex = i.length, i.push(e), o.actionByRoot[n] = e }
    _removeInactiveAction(e) { const t = this._actions,
            n = t[t.length - 1],
            i = e._cacheIndex;
        n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null; const r = e._clip.uuid,
            o = this._actionsByClip,
            a = o[r],
            l = a.knownActions,
            c = l[l.length - 1],
            h = e._byClipCacheIndex;
        c._byClipCacheIndex = h, l[h] = c, l.pop(), e._byClipCacheIndex = null; const u = a.actionByRoot,
            d = (e._localRoot || this._root).uuid;
        delete u[d], l.length === 0 && delete o[r], this._removeInactiveBindingsForAction(e) }
    _removeInactiveBindingsForAction(e) { const t = e._propertyBindings; for (let n = 0, i = t.length; n !== i; ++n) { const r = t[n];--r.referenceCount == 0 && this._removeInactiveBinding(r) } }
    _lendAction(e) { const t = this._actions,
            n = e._cacheIndex,
            i = this._nActiveActions++,
            r = t[i];
        e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r }
    _takeBackAction(e) { const t = this._actions,
            n = e._cacheIndex,
            i = --this._nActiveActions,
            r = t[i];
        e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r }
    _addInactiveBinding(e, t, n) { const i = this._bindingsByRootAndName,
            r = this._bindings; let o = i[t];
        o === void 0 && (o = {}, i[t] = o), o[n] = e, e._cacheIndex = r.length, r.push(e) }
    _removeInactiveBinding(e) { const t = this._bindings,
            n = e.binding,
            i = n.rootNode.uuid,
            r = n.path,
            o = this._bindingsByRootAndName,
            a = o[i],
            l = t[t.length - 1],
            c = e._cacheIndex;
        l._cacheIndex = c, t[c] = l, t.pop(), delete a[r], Object.keys(a).length === 0 && delete o[i] }
    _lendBinding(e) { const t = this._bindings,
            n = e._cacheIndex,
            i = this._nActiveBindings++,
            r = t[i];
        e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r }
    _takeBackBinding(e) { const t = this._bindings,
            n = e._cacheIndex,
            i = --this._nActiveBindings,
            r = t[i];
        e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r }
    _lendControlInterpolant() { const e = this._controlInterpolants,
            t = this._nActiveControlInterpolants++; let n = e[t]; return n === void 0 && (n = new Ul(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = t, e[t] = n), n }
    _takeBackControlInterpolant(e) { const t = this._controlInterpolants,
            n = e.__cacheIndex,
            i = --this._nActiveControlInterpolants,
            r = t[i];
        e.__cacheIndex = i, t[i] = e, r.__cacheIndex = n, t[n] = r }
    clipAction(e, t, n) { const i = t || this._root,
            r = i.uuid; let o = typeof e == "string" ? Vl.findByName(i, e) : e; const a = o !== null ? o.uuid : e,
            l = this._actionsByClip[a]; let c = null; if (n === void 0 && (o !== null ? n = o.blendMode : n = as), l !== void 0) { const u = l.actionByRoot[r]; if (u !== void 0 && u.blendMode === n) return u;
            c = l.knownActions[0], o === null && (o = c._clip) } if (o === null) return null; const h = new Eg(this, o, t, n); return this._bindAction(h, c), this._addInactiveAction(h, a, r), h }
    existingAction(e, t) { const n = t || this._root,
            i = n.uuid,
            r = typeof e == "string" ? Vl.findByName(n, e) : e,
            o = r ? r.uuid : e,
            a = this._actionsByClip[o]; return a !== void 0 && a.actionByRoot[i] || null }
    stopAllAction() { const e = this._actions,
            t = this._nActiveActions; for (let n = t - 1; n >= 0; --n) e[n].stop(); return this }
    update(e) { e *= this.timeScale; const t = this._actions,
            n = this._nActiveActions,
            i = this.time += e,
            r = Math.sign(e),
            o = this._accuIndex ^= 1; for (let c = 0; c !== n; ++c) t[c]._update(i, e, r, o); const a = this._bindings,
            l = this._nActiveBindings; for (let c = 0; c !== l; ++c) a[c].apply(o); return this }
    setTime(e) { this.time = 0; for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0; return this.update(e) }
    getRoot() { return this._root }
    uncacheClip(e) { const t = this._actions,
            n = e.uuid,
            i = this._actionsByClip,
            r = i[n]; if (r !== void 0) { const o = r.knownActions; for (let a = 0, l = o.length; a !== l; ++a) { const c = o[a];
                this._deactivateAction(c); const h = c._cacheIndex,
                    u = t[t.length - 1];
                c._cacheIndex = null, c._byClipCacheIndex = null, u._cacheIndex = h, t[h] = u, t.pop(), this._removeInactiveBindingsForAction(c) }
            delete i[n] } }
    uncacheRoot(e) { const t = e.uuid,
            n = this._actionsByClip; for (const o in n) { const a = n[o].actionByRoot,
                l = a[t];
            l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l)) } const i = this._bindingsByRootAndName,
            r = i[t]; if (r !== void 0)
            for (const o in r) { const a = r[o];
                a.restoreOriginalState(), this._removeInactiveBinding(a) } }
    uncacheAction(e, t) { const n = this.existingAction(e, t);
        n !== null && (this._deactivateAction(n), this._removeInactiveAction(n)) } }
Tg.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
class Ag extends Di { constructor(e, t, n = 1) { super(e, t);
        this.meshPerAttribute = n }
    copy(e) { return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this }
    clone(e) { const t = super.clone(e); return t.meshPerAttribute = this.meshPerAttribute, t }
    toJSON(e) { const t = super.toJSON(e); return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t } }
Ag.prototype.isInstancedInterleavedBuffer = !0;
class $l { constructor(e = 1, t = 0, n = 0) { return this.radius = e, this.phi = t, this.theta = n, this }
    set(e, t, n) { return this.radius = e, this.phi = t, this.theta = n, this }
    copy(e) { return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this }
    makeSafe() { const e = 1e-6; return this.phi = Math.max(e, Math.min(Math.PI - e, this.phi)), this }
    setFromVector3(e) { return this.setFromCartesianCoords(e.x, e.y, e.z) }
    setFromCartesianCoords(e, t, n) { return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(xt(t / this.radius, -1, 1))), this }
    clone() { return new this.constructor().copy(this) } }
const Kl = new S,
    kr = new S;
class Ql { constructor(e = new S, t = new S) { this.start = e, this.end = t }
    set(e, t) { return this.start.copy(e), this.end.copy(t), this }
    copy(e) { return this.start.copy(e.start), this.end.copy(e.end), this }
    getCenter(e) { return e.addVectors(this.start, this.end).multiplyScalar(.5) }
    delta(e) { return e.subVectors(this.end, this.start) }
    distanceSq() { return this.start.distanceToSquared(this.end) }
    distance() { return this.start.distanceTo(this.end) }
    at(e, t) { return this.delta(t).multiplyScalar(e).add(this.start) }
    closestPointToPointParameter(e, t) { Kl.subVectors(e, this.start), kr.subVectors(this.end, this.start); const n = kr.dot(kr); let r = kr.dot(Kl) / n; return t && (r = xt(r, 0, 1)), r }
    closestPointToPoint(e, t, n) { const i = this.closestPointToPointParameter(e, t); return this.delta(n).multiplyScalar(i).add(this.start) }
    applyMatrix4(e) { return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this }
    equals(e) { return e.start.equals(this.start) && e.end.equals(this.end) }
    clone() { return new this.constructor().copy(this) } }
const ec = new S;
class Fg extends Ue { constructor(e, t) { super();
        this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t; const n = new qe,
            i = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1]; for (let o = 0, a = 1, l = 32; o < l; o++, a++) { const c = o / l * Math.PI * 2,
                h = a / l * Math.PI * 2;
            i.push(Math.cos(c), Math.sin(c), 1, Math.cos(h), Math.sin(h), 1) }
        n.setAttribute("position", new Ye(i, 3)); const r = new ui({ fog: !1, toneMapped: !1 });
        this.cone = new Pr(n, r), this.add(this.cone), this.update() }
    dispose() { this.cone.geometry.dispose(), this.cone.material.dispose() }
    update() { this.light.updateMatrixWorld(); const e = this.light.distance ? this.light.distance : 1e3,
            t = e * Math.tan(this.light.angle);
        this.cone.scale.set(t, t, e), ec.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(ec), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color) } }
const xn = new S,
    Wr = new be,
    go = new be;
class Cg extends Pr { constructor(e) { const t = tc(e),
            n = new qe,
            i = [],
            r = [],
            o = new ve(0, 0, 1),
            a = new ve(0, 1, 0); for (let c = 0; c < t.length; c++) { const h = t[c];
            h.parent && h.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(o.r, o.g, o.b), r.push(a.r, a.g, a.b)) }
        n.setAttribute("position", new Ye(i, 3)), n.setAttribute("color", new Ye(r, 3)); const l = new ui({ vertexColors: !0, depthTest: !1, depthWrite: !1, toneMapped: !1, transparent: !0 });
        super(n, l);
        this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1 }
    updateMatrixWorld(e) { const t = this.bones,
            n = this.geometry,
            i = n.getAttribute("position");
        go.copy(this.root.matrixWorld).invert(); for (let r = 0, o = 0; r < t.length; r++) { const a = t[r];
            a.parent && a.parent.isBone && (Wr.multiplyMatrices(go, a.matrixWorld), xn.setFromMatrixPosition(Wr), i.setXYZ(o, xn.x, xn.y, xn.z), Wr.multiplyMatrices(go, a.parent.matrixWorld), xn.setFromMatrixPosition(Wr), i.setXYZ(o + 1, xn.x, xn.y, xn.z), o += 2) }
        n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(e) } }

function tc(s) { const e = [];
    s && s.isBone && e.push(s); for (let t = 0; t < s.children.length; t++) e.push.apply(e, tc(s.children[t])); return e }
class Rg extends Pr { constructor(e = 10, t = 10, n = 4473924, i = 8947848) { n = new ve(n), i = new ve(i); const r = t / 2,
            o = e / t,
            a = e / 2,
            l = [],
            c = []; for (let d = 0, f = 0, g = -a; d <= t; d++, g += o) { l.push(-a, 0, g, a, 0, g), l.push(g, 0, -a, g, 0, a); const x = d === r ? n : i;
            x.toArray(c, f), f += 3, x.toArray(c, f), f += 3, x.toArray(c, f), f += 3, x.toArray(c, f), f += 3 } const h = new qe;
        h.setAttribute("position", new Ye(l, 3)), h.setAttribute("color", new Ye(c, 3)); const u = new ui({ vertexColors: !0, toneMapped: !1 });
        super(h, u);
        this.type = "GridHelper" } }
const Lg = new Float32Array(1);
new Int32Array(Lg.buffer);
At.create = function(s, e) { return console.log("THREE.Curve.create() has been deprecated"), s.prototype = Object.create(At.prototype), s.prototype.constructor = s, s.prototype.getPoint = e, s };
oo.prototype.fromPoints = function(s) { return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(s) };
Rg.prototype.setColors = function() { console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.") };
Cg.prototype.update = function() { console.error("THREE.SkeletonHelper: update() no longer needs to be called.") };
gn.prototype.extractUrlBase = function(s) { return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), ag.extractUrlBase(s) };
gn.Handlers = { add: function() { console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.") }, get: function() { console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.") } };
Lt.prototype.center = function(s) { return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(s) };
Lt.prototype.empty = function() { return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty() };
Lt.prototype.isIntersectionBox = function(s) { return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(s) };
Lt.prototype.isIntersectionSphere = function(s) { return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(s) };
Lt.prototype.size = function(s) { return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(s) };
kn.prototype.empty = function() { return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty() };
Mr.prototype.setFromMatrix = function(s) { return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(s) };
Ql.prototype.center = function(s) { return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(s) };
ct.prototype.flattenToArrayOffset = function(s, e) { return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(s, e) };
ct.prototype.multiplyVector3 = function(s) { return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), s.applyMatrix3(this) };
ct.prototype.multiplyVector3Array = function() { console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.") };
ct.prototype.applyToBufferAttribute = function(s) { return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), s.applyMatrix3(this) };
ct.prototype.applyToVector3Array = function() { console.error("THREE.Matrix3: .applyToVector3Array() has been removed.") };
ct.prototype.getInverse = function(s) { return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(s).invert() };
be.prototype.extractPosition = function(s) { return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(s) };
be.prototype.flattenToArrayOffset = function(s, e) { return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(s, e) };
be.prototype.getPosition = function() { return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new S().setFromMatrixColumn(this, 3) };
be.prototype.setRotationFromQuaternion = function(s) { return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(s) };
be.prototype.multiplyToArray = function() { console.warn("THREE.Matrix4: .multiplyToArray() has been removed.") };
be.prototype.multiplyVector3 = function(s) { return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), s.applyMatrix4(this) };
be.prototype.multiplyVector4 = function(s) { return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), s.applyMatrix4(this) };
be.prototype.multiplyVector3Array = function() { console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.") };
be.prototype.rotateAxis = function(s) { console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), s.transformDirection(this) };
be.prototype.crossVector = function(s) { return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), s.applyMatrix4(this) };
be.prototype.translate = function() { console.error("THREE.Matrix4: .translate() has been removed.") };
be.prototype.rotateX = function() { console.error("THREE.Matrix4: .rotateX() has been removed.") };
be.prototype.rotateY = function() { console.error("THREE.Matrix4: .rotateY() has been removed.") };
be.prototype.rotateZ = function() { console.error("THREE.Matrix4: .rotateZ() has been removed.") };
be.prototype.rotateByAxis = function() { console.error("THREE.Matrix4: .rotateByAxis() has been removed.") };
be.prototype.applyToBufferAttribute = function(s) { return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), s.applyMatrix4(this) };
be.prototype.applyToVector3Array = function() { console.error("THREE.Matrix4: .applyToVector3Array() has been removed.") };
be.prototype.makeFrustum = function(s, e, t, n, i, r) { return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(s, e, n, t, i, r) };
be.prototype.getInverse = function(s) { return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(s).invert() };
Ut.prototype.isIntersectionLine = function(s) { return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(s) };
dt.prototype.multiplyVector3 = function(s) { return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), s.applyQuaternion(this) };
dt.prototype.inverse = function() { return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert() };
Wn.prototype.isIntersectionBox = function(s) { return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(s) };
Wn.prototype.isIntersectionPlane = function(s) { return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(s) };
Wn.prototype.isIntersectionSphere = function(s) { return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(s) };
et.prototype.area = function() { return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea() };
et.prototype.barycoordFromPoint = function(s, e) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(s, e) };
et.prototype.midpoint = function(s) { return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(s) };
et.prototypenormal = function(s) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(s) };
et.prototype.plane = function(s) { return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(s) };
et.barycoordFromPoint = function(s, e, t, n, i) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), et.getBarycoord(s, e, t, n, i) };
et.normal = function(s, e, t, n) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), et.getNormal(s, e, t, n) };
Hi.prototype.extractAllPoints = function(s) { return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(s) };
Hi.prototype.extrude = function(s) { return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new fi(this, s) };
Hi.prototype.makeGeometry = function(s) { return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new co(this, s) };
J.prototype.fromAttribute = function(s, e, t) { return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(s, e, t) };
J.prototype.distanceToManhattan = function(s) { return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(s) };
J.prototype.lengthManhattan = function() { return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() };
S.prototype.setEulerFromRotationMatrix = function() { console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.") };
S.prototype.setEulerFromQuaternion = function() { console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.") };
S.prototype.getPositionFromMatrix = function(s) { return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(s) };
S.prototype.getScaleFromMatrix = function(s) { return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(s) };
S.prototype.getColumnFromMatrix = function(s, e) { return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, s) };
S.prototype.applyProjection = function(s) { return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(s) };
S.prototype.fromAttribute = function(s, e, t) { return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(s, e, t) };
S.prototype.distanceToManhattan = function(s) { return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(s) };
S.prototype.lengthManhattan = function() { return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() };
We.prototype.fromAttribute = function(s, e, t) { return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(s, e, t) };
We.prototype.lengthManhattan = function() { return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() };
Ue.prototype.getChildByName = function(s) { return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(s) };
Ue.prototype.renderDepth = function() { console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.") };
Ue.prototype.translate = function(s, e) { return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, s) };
Ue.prototype.getWorldRotation = function() { console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.") };
Ue.prototype.applyMatrix = function(s) { return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(s) };
Object.defineProperties(Ue.prototype, { eulerOrder: { get: function() { return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order }, set: function(s) { console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = s } }, useQuaternion: { get: function() { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.") }, set: function() { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.") } } });
_t.prototype.setDrawMode = function() { console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.") };
Object.defineProperties(_t.prototype, { drawMode: { get: function() { return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), oh }, set: function() { console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.") } } });
pl.prototype.initBones = function() { console.error("THREE.SkinnedMesh: initBones() has been removed.") };
yt.prototype.setLens = function(s, e) { console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), e !== void 0 && (this.filmGauge = e), this.setFocalLength(s) };
Object.defineProperties(kt.prototype, { onlyShadow: { set: function() { console.warn("THREE.Light: .onlyShadow has been removed.") } }, shadowCameraFov: { set: function(s) { console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = s } }, shadowCameraLeft: { set: function(s) { console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = s } }, shadowCameraRight: { set: function(s) { console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = s } }, shadowCameraTop: { set: function(s) { console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = s } }, shadowCameraBottom: { set: function(s) { console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = s } }, shadowCameraNear: { set: function(s) { console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = s } }, shadowCameraFar: { set: function(s) { console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = s } }, shadowCameraVisible: { set: function() { console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.") } }, shadowBias: { set: function(s) { console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = s } }, shadowDarkness: { set: function() { console.warn("THREE.Light: .shadowDarkness has been removed.") } }, shadowMapWidth: { set: function(s) { console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = s } }, shadowMapHeight: { set: function(s) { console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = s } } });
Object.defineProperties(st.prototype, { length: { get: function() { return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length } }, dynamic: { get: function() { return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === tr }, set: function() { console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(tr) } } });
st.prototype.setDynamic = function(s) { return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(s === !0 ? tr : Si), this };
st.prototype.copyIndicesArray = function() { console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.") }, st.prototype.setArray = function() { console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers") };
qe.prototype.addIndex = function(s) { console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(s) };
qe.prototype.addAttribute = function(s, e) { return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), !(e && e.isBufferAttribute) && !(e && e.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(s, new st(arguments[1], arguments[2]))) : s === "index" ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(s, e) };
qe.prototype.addDrawCall = function(s, e, t) { t !== void 0 && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(s, e) };
qe.prototype.clearDrawCalls = function() { console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups() };
qe.prototype.computeOffsets = function() { console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.") };
qe.prototype.removeAttribute = function(s) { return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(s) };
qe.prototype.applyMatrix = function(s) { return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(s) };
Object.defineProperties(qe.prototype, { drawcalls: { get: function() { return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups } }, offsets: { get: function() { return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups } } });
Di.prototype.setDynamic = function(s) { return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(s === !0 ? tr : Si), this };
Di.prototype.setArray = function() { console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers") };
fi.prototype.getArrays = function() { console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.") };
fi.prototype.addShapeList = function() { console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.") };
fi.prototype.addShape = function() { console.error("THREE.ExtrudeGeometry: .addShape() has been removed.") };
sl.prototype.dispose = function() { console.error("THREE.Scene: .dispose() has been removed.") };
Object.defineProperties(ft.prototype, { wrapAround: { get: function() { console.warn("THREE.Material: .wrapAround has been removed.") }, set: function() { console.warn("THREE.Material: .wrapAround has been removed.") } }, overdraw: { get: function() { console.warn("THREE.Material: .overdraw has been removed.") }, set: function() { console.warn("THREE.Material: .overdraw has been removed.") } }, wrapRGB: { get: function() { return console.warn("THREE.Material: .wrapRGB has been removed."), new ve } }, shading: { get: function() { console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.") }, set: function(s) { console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = s === wo } }, stencilMask: { get: function() { return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask }, set: function(s) { console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = s } }, vertexTangents: { get: function() { console.warn("THREE." + this.type + ": .vertexTangents has been removed.") }, set: function() { console.warn("THREE." + this.type + ": .vertexTangents has been removed.") } } });
Object.defineProperties(En.prototype, { derivatives: { get: function() { return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives }, set: function(s) { console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = s } } });
ke.prototype.clearTarget = function(s, e, t, n) { console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(s), this.clear(e, t, n) };
ke.prototype.animate = function(s) { console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(s) };
ke.prototype.getCurrentRenderTarget = function() { return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget() };
ke.prototype.getMaxAnisotropy = function() { return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy() };
ke.prototype.getPrecision = function() { return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision };
ke.prototype.resetGLState = function() { return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset() };
ke.prototype.supportsFloatTextures = function() { return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float") };
ke.prototype.supportsHalfFloatTextures = function() { return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float") };
ke.prototype.supportsStandardDerivatives = function() { return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives") };
ke.prototype.supportsCompressedTextureS3TC = function() { return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc") };
ke.prototype.supportsCompressedTexturePVRTC = function() { return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc") };
ke.prototype.supportsBlendMinMax = function() { return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax") };
ke.prototype.supportsVertexTextures = function() { return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures };
ke.prototype.supportsInstancedArrays = function() { return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays") };
ke.prototype.enableScissorTest = function(s) { console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(s) };
ke.prototype.initMaterial = function() { console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.") };
ke.prototype.addPrePlugin = function() { console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.") };
ke.prototype.addPostPlugin = function() { console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.") };
ke.prototype.updateShadowMap = function() { console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.") };
ke.prototype.setFaceCulling = function() { console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.") };
ke.prototype.allocTextureUnit = function() { console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.") };
ke.prototype.setTexture = function() { console.warn("THREE.WebGLRenderer: .setTexture() has been removed.") };
ke.prototype.setTexture2D = function() { console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.") };
ke.prototype.setTextureCube = function() { console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.") };
ke.prototype.getActiveMipMapLevel = function() { return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel() };
Object.defineProperties(ke.prototype, { shadowMapEnabled: { get: function() { return this.shadowMap.enabled }, set: function(s) { console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = s } }, shadowMapType: { get: function() { return this.shadowMap.type }, set: function(s) { console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = s } }, shadowMapCullFace: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.") } }, context: { get: function() { return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext() } }, vr: { get: function() { return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr } }, gammaInput: { get: function() { return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1 }, set: function() { console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.") } }, gammaOutput: { get: function() { return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1 }, set: function(s) { console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = s === !0 ? je : tn } }, toneMappingWhitePoint: { get: function() { return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1 }, set: function() { console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.") } }, gammaFactor: { get: function() { return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2 }, set: function() { console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.") } } });
Object.defineProperties(il.prototype, { cullFace: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.") } }, renderReverseSided: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.") } }, renderSingleSided: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.") } } });
Object.defineProperties(Et.prototype, { wrapS: { get: function() { return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS }, set: function(s) { console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = s } }, wrapT: { get: function() { return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT }, set: function(s) { console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = s } }, magFilter: { get: function() { return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter }, set: function(s) { console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = s } }, minFilter: { get: function() { return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter }, set: function(s) { console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = s } }, anisotropy: { get: function() { return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy }, set: function(s) { console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = s } }, offset: { get: function() { return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset }, set: function(s) { console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = s } }, repeat: { get: function() { return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat }, set: function(s) { console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = s } }, format: { get: function() { return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format }, set: function(s) { console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = s } }, type: { get: function() { return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type }, set: function(s) { console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = s } }, generateMipmaps: { get: function() { return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps }, set: function(s) { console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = s } } });
pg.prototype.load = function(s) { console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."); const e = this; return new ug().load(s, function(n) { e.setBuffer(n) }), this };
Bs.prototype.updateCubeMap = function(s, e) { return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(s, e) };
Bs.prototype.clear = function(s, e, t, n) { return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(s, e, t, n) };
Mn.crossOrigin = void 0;
Mn.loadTexture = function(s, e, t, n) { console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."); const i = new eg;
    i.setCrossOrigin(this.crossOrigin); const r = i.load(s, t, void 0, n); return e && (r.mapping = e), r };
Mn.loadTextureCube = function(s, e, t, n) { console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."); const i = new Qm;
    i.setCrossOrigin(this.crossOrigin); const r = i.load(s, t, void 0, n); return e && (r.mapping = e), r };
Mn.loadCompressedTexture = function() { console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.") };
Mn.loadCompressedTextureCube = function() { console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.") };
typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: Zr } }));
typeof window != "undefined" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Zr);
const qr = 0,
    Pg = 1,
    Dg = new S,
    nc = new Ql,
    xo = new Ut,
    ic = new S,
    Xr = new et;
class rc { constructor() { this.tolerance = -1, this.faces = [], this.newFaces = [], this.assigned = new sc, this.unassigned = new sc, this.vertices = [] }
    setFromPoints(e) { if (e.length >= 4) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t++) this.vertices.push(new Ig(e[t]));
            this.compute() } return this }
    setFromObject(e) { const t = []; return e.updateMatrixWorld(!0), e.traverse(function(n) { const i = n.geometry; if (i !== void 0) { if (i.isGeometry) { console.error("THREE.ConvexHull no longer supports Geometry. Use THREE.BufferGeometry instead."); return } else if (i.isBufferGeometry) { const r = i.attributes.position; if (r !== void 0)
                        for (let o = 0, a = r.count; o < a; o++) { const l = new S;
                            l.fromBufferAttribute(r, o).applyMatrix4(n.matrixWorld), t.push(l) } } } }), this.setFromPoints(t) }
    containsPoint(e) { const t = this.faces; for (let n = 0, i = t.length; n < i; n++)
            if (t[n].distanceToPoint(e) > this.tolerance) return !1;
        return !0 }
    intersectRay(e, t) { const n = this.faces; let i = -1 / 0,
            r = 1 / 0; for (let o = 0, a = n.length; o < a; o++) { const l = n[o],
                c = l.distanceToPoint(e.origin),
                h = l.normal.dot(e.direction); if (c > 0 && h >= 0) return null; const u = h !== 0 ? -c / h : 0; if (!(u <= 0) && (h > 0 ? r = Math.min(u, r) : i = Math.max(u, i), i > r)) return null } return i !== -1 / 0 ? e.at(i, t) : e.at(r, t), t }
    intersectsRay(e) { return this.intersectRay(e, Dg) !== null }
    makeEmpty() { return this.faces = [], this.vertices = [], this }
    addVertexToFace(e, t) { return e.face = t, t.outside === null ? this.assigned.append(e) : this.assigned.insertBefore(t.outside, e), t.outside = e, this }
    removeVertexFromFace(e, t) { return e === t.outside && (e.next !== null && e.next.face === t ? t.outside = e.next : t.outside = null), this.assigned.remove(e), this }
    removeAllVerticesFromFace(e) { if (e.outside !== null) { const t = e.outside; let n = e.outside; for (; n.next !== null && n.next.face === e;) n = n.next; return this.assigned.removeSubList(t, n), t.prev = n.next = null, e.outside = null, t } }
    deleteFaceVertices(e, t) { const n = this.removeAllVerticesFromFace(e); if (n !== void 0)
            if (t === void 0) this.unassigned.appendChain(n);
            else { let i = n;
                do { const r = i.next;
                    t.distanceToPoint(i.point) > this.tolerance ? this.addVertexToFace(i, t) : this.unassigned.append(i), i = r } while (i !== null) }
        return this }
    resolveUnassignedPoints(e) { if (this.unassigned.isEmpty() === !1) { let t = this.unassigned.first();
            do { const n = t.next; let i = this.tolerance,
                    r = null; for (let o = 0; o < e.length; o++) { const a = e[o]; if (a.mark === qr) { const l = a.distanceToPoint(t.point); if (l > i && (i = l, r = a), i > 1e3 * this.tolerance) break } }
                r !== null && this.addVertexToFace(t, r), t = n } while (t !== null) } return this }
    computeExtremes() { const e = new S,
            t = new S,
            n = [],
            i = []; for (let r = 0; r < 3; r++) n[r] = i[r] = this.vertices[0];
        e.copy(this.vertices[0].point), t.copy(this.vertices[0].point); for (let r = 0, o = this.vertices.length; r < o; r++) { const a = this.vertices[r],
                l = a.point; for (let c = 0; c < 3; c++) l.getComponent(c) < e.getComponent(c) && (e.setComponent(c, l.getComponent(c)), n[c] = a); for (let c = 0; c < 3; c++) l.getComponent(c) > t.getComponent(c) && (t.setComponent(c, l.getComponent(c)), i[c] = a) } return this.tolerance = 3 * Number.EPSILON * (Math.max(Math.abs(e.x), Math.abs(t.x)) + Math.max(Math.abs(e.y), Math.abs(t.y)) + Math.max(Math.abs(e.z), Math.abs(t.z))), { min: n, max: i } }
    computeInitialHull() { const e = this.vertices,
            t = this.computeExtremes(),
            n = t.min,
            i = t.max; let r = 0,
            o = 0; for (let d = 0; d < 3; d++) { const f = i[d].point.getComponent(d) - n[d].point.getComponent(d);
            f > r && (r = f, o = d) } const a = n[o],
            l = i[o]; let c, h;
        r = 0, nc.set(a.point, l.point); for (let d = 0, f = this.vertices.length; d < f; d++) { const g = e[d]; if (g !== a && g !== l) { nc.closestPointToPoint(g.point, !0, ic); const x = ic.distanceToSquared(g.point);
                x > r && (r = x, c = g) } }
        r = -1, xo.setFromCoplanarPoints(a.point, l.point, c.point); for (let d = 0, f = this.vertices.length; d < f; d++) { const g = e[d]; if (g !== a && g !== l && g !== c) { const x = Math.abs(xo.distanceToPoint(g.point));
                x > r && (r = x, h = g) } } const u = []; if (xo.distanceToPoint(h.point) < 0) { u.push(It.create(a, l, c), It.create(h, l, a), It.create(h, c, l), It.create(h, a, c)); for (let d = 0; d < 3; d++) { const f = (d + 1) % 3;
                u[d + 1].getEdge(2).setTwin(u[0].getEdge(f)), u[d + 1].getEdge(1).setTwin(u[f + 1].getEdge(0)) } } else { u.push(It.create(a, c, l), It.create(h, a, l), It.create(h, l, c), It.create(h, c, a)); for (let d = 0; d < 3; d++) { const f = (d + 1) % 3;
                u[d + 1].getEdge(2).setTwin(u[0].getEdge((3 - d) % 3)), u[d + 1].getEdge(0).setTwin(u[f + 1].getEdge(1)) } } for (let d = 0; d < 4; d++) this.faces.push(u[d]); for (let d = 0, f = e.length; d < f; d++) { const g = e[d]; if (g !== a && g !== l && g !== c && g !== h) { r = this.tolerance; let x = null; for (let v = 0; v < 4; v++) { const m = this.faces[v].distanceToPoint(g.point);
                    m > r && (r = m, x = this.faces[v]) }
                x !== null && this.addVertexToFace(g, x) } } return this }
    reindexFaces() { const e = []; for (let t = 0; t < this.faces.length; t++) { const n = this.faces[t];
            n.mark === qr && e.push(n) } return this.faces = e, this }
    nextVertexToAdd() { if (this.assigned.isEmpty() === !1) { let e, t = 0; const n = this.assigned.first().face; let i = n.outside;
            do { const r = n.distanceToPoint(i.point);
                r > t && (t = r, e = i), i = i.next } while (i !== null && i.face === n); return e } }
    computeHorizon(e, t, n, i) { this.deleteFaceVertices(n), n.mark = Pg; let r;
        t === null ? r = t = n.getEdge(0) : r = t.next;
        do { const o = r.twin,
                a = o.face;
            a.mark === qr && (a.distanceToPoint(e) > this.tolerance ? this.computeHorizon(e, o, a, i) : i.push(r)), r = r.next } while (r !== t); return this }
    addAdjoiningFace(e, t) { const n = It.create(e, t.tail(), t.head()); return this.faces.push(n), n.getEdge(-1).setTwin(t.twin), n.getEdge(0) }
    addNewFaces(e, t) { this.newFaces = []; let n = null,
            i = null; for (let r = 0; r < t.length; r++) { const o = t[r],
                a = this.addAdjoiningFace(e, o);
            n === null ? n = a : a.next.setTwin(i), this.newFaces.push(a.face), i = a } return n.next.setTwin(i), this }
    addVertexToHull(e) { const t = []; return this.unassigned.clear(), this.removeVertexFromFace(e, e.face), this.computeHorizon(e.point, null, e.face, t), this.addNewFaces(e, t), this.resolveUnassignedPoints(this.newFaces), this }
    cleanup() { return this.assigned.clear(), this.unassigned.clear(), this.newFaces = [], this }
    compute() { let e; for (this.computeInitialHull();
            (e = this.nextVertexToAdd()) !== void 0;) this.addVertexToHull(e); return this.reindexFaces(), this.cleanup(), this } }
class It { constructor() { this.normal = new S, this.midpoint = new S, this.area = 0, this.constant = 0, this.outside = null, this.mark = qr, this.edge = null }
    static create(e, t, n) { const i = new It,
            r = new _o(e, i),
            o = new _o(t, i),
            a = new _o(n, i); return r.next = a.prev = o, o.next = r.prev = a, a.next = o.prev = r, i.edge = r, i.compute() }
    getEdge(e) { let t = this.edge; for (; e > 0;) t = t.next, e--; for (; e < 0;) t = t.prev, e++; return t }
    compute() { const e = this.edge.tail(),
            t = this.edge.head(),
            n = this.edge.next.head(); return Xr.set(e.point, t.point, n.point), Xr.getNormal(this.normal), Xr.getMidpoint(this.midpoint), this.area = Xr.getArea(), this.constant = this.normal.dot(this.midpoint), this }
    distanceToPoint(e) { return this.normal.dot(e) - this.constant } }
class _o { constructor(e, t) { this.vertex = e, this.prev = null, this.next = null, this.twin = null, this.face = t }
    head() { return this.vertex }
    tail() { return this.prev ? this.prev.vertex : null }
    length() { const e = this.head(),
            t = this.tail(); return t !== null ? t.point.distanceTo(e.point) : -1 }
    lengthSquared() { const e = this.head(),
            t = this.tail(); return t !== null ? t.point.distanceToSquared(e.point) : -1 }
    setTwin(e) { return this.twin = e, e.twin = this, this } }
class Ig { constructor(e) { this.point = e, this.prev = null, this.next = null, this.face = null } }
class sc { constructor() { this.head = null, this.tail = null }
    first() { return this.head }
    last() { return this.tail }
    clear() { return this.head = this.tail = null, this }
    insertBefore(e, t) { return t.prev = e.prev, t.next = e, t.prev === null ? this.head = t : t.prev.next = t, e.prev = t, this }
    insertAfter(e, t) { return t.prev = e, t.next = e.next, t.next === null ? this.tail = t : t.next.prev = t, e.next = t, this }
    append(e) { return this.head === null ? this.head = e : this.tail.next = e, e.prev = this.tail, e.next = null, this.tail = e, this }
    appendChain(e) { for (this.head === null ? this.head = e : this.tail.next = e, e.prev = this.tail; e.next !== null;) e = e.next; return this.tail = e, this }
    remove(e) { return e.prev === null ? this.head = e.next : e.prev.next = e.next, e.next === null ? this.tail = e.prev : e.next.prev = e.prev, this }
    removeSubList(e, t) { return e.prev === null ? this.head = t.next : e.prev.next = t.next, t.next === null ? this.tail = e.prev : t.next.prev = e.prev, this }
    isEmpty() { return this.head === null } }
class Ng extends qe { constructor(e = []) { super(); const t = [],
            n = [];
        rc === void 0 && console.error("THREE.ConvexBufferGeometry: ConvexBufferGeometry relies on ConvexHull"); const r = new rc().setFromPoints(e).faces; for (let o = 0; o < r.length; o++) { const a = r[o]; let l = a.edge;
            do { const c = l.head().point;
                t.push(c.x, c.y, c.z), n.push(a.normal.x, a.normal.y, a.normal.z), l = l.next } while (l !== a.edge) }
        this.setAttribute("position", new Ye(t, 3)), this.setAttribute("normal", new Ye(n, 3)) } }

function Bg(s, e) { const t = new oi; for (let n = 0, i = e.length; n < i; n++) t.add(new _t(s, e[n])); return t }
const oc = { type: "change" },
    vo = { type: "start" },
    ac = { type: "end" };
class zg extends nn { constructor(e, t) { super();
        t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new S, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Cn.ROTATE, MIDDLE: Cn.DOLLY, RIGHT: Cn.PAN }, this.touches = { ONE: Rn.ROTATE, TWO: Rn.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() { return a.phi }, this.getAzimuthalAngle = function() { return a.theta }, this.getDistance = function() { return this.object.position.distanceTo(this.target) }, this.listenToKeyEvents = function(A) { A.addEventListener("keydown", ze), this._domElementKeyEvents = A }, this.saveState = function() { n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom }, this.reset = function() { n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(oc), n.update(), r = i.NONE }, this.update = function() { const A = new S,
                H = new dt().setFromUnitVectors(e.up, new S(0, 1, 0)),
                Q = H.clone().invert(),
                de = new S,
                C = new dt,
                he = 2 * Math.PI; return function() { const Me = n.object.position;
                A.copy(Me).sub(n.target), A.applyQuaternion(H), a.setFromVector3(A), n.autoRotate && r === i.NONE && oe(P()), n.enableDamping ? (a.theta += l.theta * n.dampingFactor, a.phi += l.phi * n.dampingFactor) : (a.theta += l.theta, a.phi += l.phi); let V = n.minAzimuthAngle,
                    me = n.maxAzimuthAngle; return isFinite(V) && isFinite(me) && (V < -Math.PI ? V += he : V > Math.PI && (V -= he), me < -Math.PI ? me += he : me > Math.PI && (me -= he), V <= me ? a.theta = Math.max(V, Math.min(me, a.theta)) : a.theta = a.theta > (V + me) / 2 ? Math.max(V, a.theta) : Math.min(me, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), a.radius *= c, a.radius = Math.max(n.minDistance, Math.min(n.maxDistance, a.radius)), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), A.setFromSpherical(a), A.applyQuaternion(Q), Me.copy(n.target).add(A), n.object.lookAt(n.target), n.enableDamping === !0 ? (l.theta *= 1 - n.dampingFactor, l.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (l.set(0, 0, 0), h.set(0, 0, 0)), c = 1, u || de.distanceToSquared(n.object.position) > o || 8 * (1 - C.dot(n.object.quaternion)) > o ? (n.dispatchEvent(oc), de.copy(n.object.position), C.copy(n.object.quaternion), u = !1, !0) : !1 } }(), this.dispose = function() { n.domElement.removeEventListener("contextmenu", W), n.domElement.removeEventListener("pointerdown", ee), n.domElement.removeEventListener("pointercancel", ye), n.domElement.removeEventListener("wheel", He), n.domElement.removeEventListener("pointermove", le), n.domElement.removeEventListener("pointerup", re), n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", ze) }; const n = this,
            i = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }; let r = i.NONE; const o = 1e-6,
            a = new $l,
            l = new $l; let c = 1; const h = new S; let u = !1; const d = new J,
            f = new J,
            g = new J,
            x = new J,
            v = new J,
            m = new J,
            p = new J,
            T = new J,
            y = new J,
            w = [],
            R = {};

        function P() { return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed }

        function Z() { return Math.pow(.95, n.zoomSpeed) }

        function oe(A) { l.theta -= A }

        function $(A) { l.phi -= A } const _ = function() { const A = new S; return function(Q, de) { A.setFromMatrixColumn(de, 0), A.multiplyScalar(-Q), h.add(A) } }(),
            L = function() { const A = new S; return function(Q, de) { n.screenSpacePanning === !0 ? A.setFromMatrixColumn(de, 1) : (A.setFromMatrixColumn(de, 0), A.crossVectors(n.object.up, A)), A.multiplyScalar(Q), h.add(A) } }(),
            D = function() { const A = new S; return function(Q, de) { const C = n.domElement; if (n.object.isPerspectiveCamera) { const he = n.object.position;
                        A.copy(he).sub(n.target); let ae = A.length();
                        ae *= Math.tan(n.object.fov / 2 * Math.PI / 180), _(2 * Q * ae / C.clientHeight, n.object.matrix), L(2 * de * ae / C.clientHeight, n.object.matrix) } else n.object.isOrthographicCamera ? (_(Q * (n.object.right - n.object.left) / n.object.zoom / C.clientWidth, n.object.matrix), L(de * (n.object.top - n.object.bottom) / n.object.zoom / C.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1) } }();

        function N(A) { n.object.isPerspectiveCamera ? c /= A : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * A)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1) }

        function B(A) { n.object.isPerspectiveCamera ? c *= A : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / A)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1) }

        function F(A) { d.set(A.clientX, A.clientY) }

        function q(A) { p.set(A.clientX, A.clientY) }

        function K(A) { x.set(A.clientX, A.clientY) }

        function ue(A) { f.set(A.clientX, A.clientY), g.subVectors(f, d).multiplyScalar(n.rotateSpeed); const H = n.domElement;
            oe(2 * Math.PI * g.x / H.clientHeight), $(2 * Math.PI * g.y / H.clientHeight), d.copy(f), n.update() }

        function k(A) { T.set(A.clientX, A.clientY), y.subVectors(T, p), y.y > 0 ? N(Z()) : y.y < 0 && B(Z()), p.copy(T), n.update() }

        function Y(A) { v.set(A.clientX, A.clientY), m.subVectors(v, x).multiplyScalar(n.panSpeed), D(m.x, m.y), x.copy(v), n.update() }

        function se(A) { A.deltaY < 0 ? B(Z()) : A.deltaY > 0 && N(Z()), n.update() }

        function fe(A) { let H = !1; switch (A.code) {
                case n.keys.UP:
                    D(0, n.keyPanSpeed), H = !0; break;
                case n.keys.BOTTOM:
                    D(0, -n.keyPanSpeed), H = !0; break;
                case n.keys.LEFT:
                    D(n.keyPanSpeed, 0), H = !0; break;
                case n.keys.RIGHT:
                    D(-n.keyPanSpeed, 0), H = !0; break }
            H && (A.preventDefault(), n.update()) }

        function xe() { if (w.length === 1) d.set(w[0].pageX, w[0].pageY);
            else { const A = .5 * (w[0].pageX + w[1].pageX),
                    H = .5 * (w[0].pageY + w[1].pageY);
                d.set(A, H) } }

        function U() { if (w.length === 1) x.set(w[0].pageX, w[0].pageY);
            else { const A = .5 * (w[0].pageX + w[1].pageX),
                    H = .5 * (w[0].pageY + w[1].pageY);
                x.set(A, H) } }

        function Fe() { const A = w[0].pageX - w[1].pageX,
                H = w[0].pageY - w[1].pageY,
                Q = Math.sqrt(A * A + H * H);
            p.set(0, Q) }

        function ge() { n.enableZoom && Fe(), n.enablePan && U() }

        function Se() { n.enableZoom && Fe(), n.enableRotate && xe() }

        function ce(A) { if (w.length == 1) f.set(A.pageX, A.pageY);
            else { const Q = _e(A),
                    de = .5 * (A.pageX + Q.x),
                    C = .5 * (A.pageY + Q.y);
                f.set(de, C) }
            g.subVectors(f, d).multiplyScalar(n.rotateSpeed); const H = n.domElement;
            oe(2 * Math.PI * g.x / H.clientHeight), $(2 * Math.PI * g.y / H.clientHeight), d.copy(f) }

        function Ce(A) { if (w.length === 1) v.set(A.pageX, A.pageY);
            else { const H = _e(A),
                    Q = .5 * (A.pageX + H.x),
                    de = .5 * (A.pageY + H.y);
                v.set(Q, de) }
            m.subVectors(v, x).multiplyScalar(n.panSpeed), D(m.x, m.y), x.copy(v) }

        function we(A) { const H = _e(A),
                Q = A.pageX - H.x,
                de = A.pageY - H.y,
                C = Math.sqrt(Q * Q + de * de);
            T.set(0, C), y.set(0, Math.pow(T.y / p.y, n.zoomSpeed)), N(y.y), p.copy(T) }

        function X(A) { n.enableZoom && we(A), n.enablePan && Ce(A) }

        function ne(A) { n.enableZoom && we(A), n.enableRotate && ce(A) }

        function ee(A) { n.enabled !== !1 && (w.length === 0 && (n.domElement.setPointerCapture(A.pointerId), n.domElement.addEventListener("pointermove", le), n.domElement.addEventListener("pointerup", re)), te(A), A.pointerType === "touch" ? E(A) : Ee(A)) }

        function le(A) { n.enabled !== !1 && (A.pointerType === "touch" ? M(A) : De(A)) }

        function re(A) { pe(A), w.length === 0 && (n.domElement.releasePointerCapture(A.pointerId), n.domElement.removeEventListener("pointermove", le), n.domElement.removeEventListener("pointerup", re)), n.dispatchEvent(ac), r = i.NONE }

        function ye(A) { pe(A) }

        function Ee(A) { let H; switch (A.button) {
                case 0:
                    H = n.mouseButtons.LEFT; break;
                case 1:
                    H = n.mouseButtons.MIDDLE; break;
                case 2:
                    H = n.mouseButtons.RIGHT; break;
                default:
                    H = -1 } switch (H) {
                case Cn.DOLLY:
                    if (n.enableZoom === !1) return;
                    q(A), r = i.DOLLY; break;
                case Cn.ROTATE:
                    if (A.ctrlKey || A.metaKey || A.shiftKey) { if (n.enablePan === !1) return;
                        K(A), r = i.PAN } else { if (n.enableRotate === !1) return;
                        F(A), r = i.ROTATE } break;
                case Cn.PAN:
                    if (A.ctrlKey || A.metaKey || A.shiftKey) { if (n.enableRotate === !1) return;
                        F(A), r = i.ROTATE } else { if (n.enablePan === !1) return;
                        K(A), r = i.PAN } break;
                default:
                    r = i.NONE }
            r !== i.NONE && n.dispatchEvent(vo) }

        function De(A) { if (n.enabled !== !1) switch (r) {
                case i.ROTATE:
                    if (n.enableRotate === !1) return;
                    ue(A); break;
                case i.DOLLY:
                    if (n.enableZoom === !1) return;
                    k(A); break;
                case i.PAN:
                    if (n.enablePan === !1) return;
                    Y(A); break } }

        function He(A) { n.enabled === !1 || n.enableZoom === !1 || r !== i.NONE || (A.preventDefault(), n.dispatchEvent(vo), se(A), n.dispatchEvent(ac)) }

        function ze(A) { n.enabled === !1 || n.enablePan === !1 || fe(A) }

        function E(A) { switch (G(A), w.length) {
                case 1:
                    switch (n.touches.ONE) {
                        case Rn.ROTATE:
                            if (n.enableRotate === !1) return;
                            xe(), r = i.TOUCH_ROTATE; break;
                        case Rn.PAN:
                            if (n.enablePan === !1) return;
                            U(), r = i.TOUCH_PAN; break;
                        default:
                            r = i.NONE } break;
                case 2:
                    switch (n.touches.TWO) {
                        case Rn.DOLLY_PAN:
                            if (n.enableZoom === !1 && n.enablePan === !1) return;
                            ge(), r = i.TOUCH_DOLLY_PAN; break;
                        case Rn.DOLLY_ROTATE:
                            if (n.enableZoom === !1 && n.enableRotate === !1) return;
                            Se(), r = i.TOUCH_DOLLY_ROTATE; break;
                        default:
                            r = i.NONE } break;
                default:
                    r = i.NONE }
            r !== i.NONE && n.dispatchEvent(vo) }

        function M(A) { switch (G(A), r) {
                case i.TOUCH_ROTATE:
                    if (n.enableRotate === !1) return;
                    ce(A), n.update(); break;
                case i.TOUCH_PAN:
                    if (n.enablePan === !1) return;
                    Ce(A), n.update(); break;
                case i.TOUCH_DOLLY_PAN:
                    if (n.enableZoom === !1 && n.enablePan === !1) return;
                    X(A), n.update(); break;
                case i.TOUCH_DOLLY_ROTATE:
                    if (n.enableZoom === !1 && n.enableRotate === !1) return;
                    ne(A), n.update(); break;
                default:
                    r = i.NONE } }

        function W(A) { n.enabled !== !1 && A.preventDefault() }

        function te(A) { w.push(A) }

        function pe(A) { delete R[A.pointerId]; for (let H = 0; H < w.length; H++)
                if (w[H].pointerId == A.pointerId) { w.splice(H, 1); return } }

        function G(A) { let H = R[A.pointerId];
            H === void 0 && (H = new J, R[A.pointerId] = H), H.set(A.pageX, A.pageY) }

        function _e(A) { const H = A.pointerId === w[0].pointerId ? w[1] : w[0]; return R[H.pointerId] }
        n.domElement.addEventListener("contextmenu", W), n.domElement.addEventListener("pointerdown", ee), n.domElement.addEventListener("pointercancel", ye), n.domElement.addEventListener("wheel", He, { passive: !1 }), this.update() } }
var jr = function() { var s = 0,
        e = document.createElement("div");
    e.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", e.addEventListener("click", function(h) { h.preventDefault(), n(++s % e.children.length) }, !1);

    function t(h) { return e.appendChild(h.dom), h }

    function n(h) { for (var u = 0; u < e.children.length; u++) e.children[u].style.display = u === h ? "block" : "none";
        s = h } var i = (performance || Date).now(),
        r = i,
        o = 0,
        a = t(new jr.Panel("FPS", "#0ff", "#002")),
        l = t(new jr.Panel("MS", "#0f0", "#020")); if (self.performance && self.performance.memory) var c = t(new jr.Panel("MB", "#f08", "#201")); return n(0), { REVISION: 16, dom: e, addPanel: t, showPanel: n, begin: function() { i = (performance || Date).now() }, end: function() { o++; var h = (performance || Date).now(); if (l.update(h - i, 200), h >= r + 1e3 && (a.update(o * 1e3 / (h - r), 100), r = h, o = 0, c)) { var u = performance.memory;
                c.update(u.usedJSHeapSize / 1048576, u.jsHeapSizeLimit / 1048576) } return h }, update: function() { i = this.end() }, domElement: e, setMode: n } };
jr.Panel = function(s, e, t) { var n = 1 / 0,
        i = 0,
        r = Math.round,
        o = r(window.devicePixelRatio || 1),
        a = 80 * o,
        l = 48 * o,
        c = 3 * o,
        h = 2 * o,
        u = 3 * o,
        d = 15 * o,
        f = 74 * o,
        g = 30 * o,
        x = document.createElement("canvas");
    x.width = a, x.height = l, x.style.cssText = "width:80px;height:48px"; var v = x.getContext("2d"); return v.font = "bold " + 9 * o + "px Helvetica,Arial,sans-serif", v.textBaseline = "top", v.fillStyle = t, v.fillRect(0, 0, a, l), v.fillStyle = e, v.fillText(s, c, h), v.fillRect(u, d, f, g), v.fillStyle = t, v.globalAlpha = .9, v.fillRect(u, d, f, g), { dom: x, update: function(m, p) { n = Math.min(n, m), i = Math.max(i, m), v.fillStyle = t, v.globalAlpha = 1, v.fillRect(0, 0, a, d), v.fillStyle = e, v.fillText(r(m) + " " + s + " (" + r(n) + "-" + r(i) + ")", c, h), v.drawImage(x, u + o, d, f - o, g, u, d, f - o, g), v.fillRect(u + f - o, d, o, g), v.fillStyle = t, v.globalAlpha = .9, v.fillRect(u + f - o, d, o, r((1 - m / p) * g)) } } };
export { Ng as C, Ln as D, Um as M, Ue as O, pc as P, ng as S, eg as T, S as V, ke as W, Fg as a, yt as b, sl as c, jr as d, zl as e, _t as f, Cs as g, Bg as h, zg as i, Ol as j };