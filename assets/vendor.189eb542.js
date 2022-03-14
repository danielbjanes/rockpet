/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ls = "137",
    rh = 0,
    ra = 1,
    sh = 2,
    sa = 1,
    oh = 2,
    Ei = 3,
    Ai = 0,
    st = 1,
    Nn = 2,
    oa = 1,
    nn = 0,
    Ci = 1,
    aa = 2,
    la = 3,
    ca = 4,
    ah = 5,
    Bn = 100,
    lh = 101,
    ch = 102,
    ha = 103,
    ua = 104,
    hh = 200,
    uh = 201,
    dh = 202,
    fh = 203,
    da = 204,
    fa = 205,
    ph = 206,
    mh = 207,
    gh = 208,
    xh = 209,
    yh = 210,
    vh = 0,
    _h = 1,
    Mh = 2,
    Ps = 3,
    bh = 4,
    wh = 5,
    Sh = 6,
    Th = 7,
    rr = 0,
    Eh = 1,
    Ah = 2,
    rn = 0,
    Ch = 1,
    Rh = 2,
    Lh = 3,
    Ph = 4,
    Dh = 5,
    Ds = 300,
    zn = 301,
    On = 302,
    sr = 303,
    or = 304,
    Ri = 306,
    ar = 307,
    lr = 1e3,
    _t = 1001,
    cr = 1002,
    it = 1003,
    Is = 1004,
    Fs = 1005,
    ct = 1006,
    pa = 1007,
    Li = 1008,
    sn = 1009,
    Ih = 1010,
    Fh = 1011,
    Pi = 1012,
    Nh = 1013,
    hr = 1014,
    on = 1015,
    Un = 1016,
    Bh = 1017,
    zh = 1018,
    Hn = 1020,
    Oh = 1021,
    Uh = 1022,
    ft = 1023,
    Hh = 1024,
    Gh = 1025,
    wn = 1026,
    Gn = 1027,
    kh = 1028,
    Vh = 1029,
    Wh = 1030,
    qh = 1031,
    Xh = 1033,
    Ns = 33776,
    Bs = 33777,
    zs = 33778,
    Os = 33779,
    ma = 35840,
    ga = 35841,
    xa = 35842,
    ya = 35843,
    Jh = 36196,
    va = 37492,
    _a = 37496,
    Ma = 37808,
    ba = 37809,
    wa = 37810,
    Sa = 37811,
    Ta = 37812,
    Ea = 37813,
    Aa = 37814,
    Ca = 37815,
    Ra = 37816,
    La = 37817,
    Pa = 37818,
    Da = 37819,
    Ia = 37820,
    Fa = 37821,
    Na = 36492,
    Yh = 2200,
    Zh = 2201,
    $h = 2202,
    ur = 2300,
    dr = 2301,
    Us = 2302,
    kn = 2400,
    Vn = 2401,
    fr = 2402,
    Hs = 2500,
    Ba = 2501,
    Kh = 0,
    an = 3e3,
    Ye = 3001,
    Qh = 3200,
    jh = 3201,
    Wn = 0,
    eu = 1,
    Gs = 7680,
    tu = 519,
    Di = 35044,
    pr = 35048,
    za = "300 es",
    ks = 1035;
class Sn { addEventListener(e, t) { this._listeners === void 0 && (this._listeners = {}); const n = this._listeners;
        n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t) }
    hasEventListener(e, t) { if (this._listeners === void 0) return !1; const n = this._listeners; return n[e] !== void 0 && n[e].indexOf(t) !== -1 }
    removeEventListener(e, t) { if (this._listeners === void 0) return; const i = this._listeners[e]; if (i !== void 0) { const r = i.indexOf(t);
            r !== -1 && i.splice(r, 1) } }
    dispatchEvent(e) { if (this._listeners === void 0) return; const n = this._listeners[e.type]; if (n !== void 0) { e.target = this; const i = n.slice(0); for (let r = 0, s = i.length; r < s; r++) i[r].call(this, e);
            e.target = null } } }
const ht = [];
for (let o = 0; o < 256; o++) ht[o] = (o < 16 ? "0" : "") + o.toString(16);
const mr = Math.PI / 180,
    Vs = 180 / Math.PI;

function Lt() { const o = Math.random() * 4294967295 | 0,
        e = Math.random() * 4294967295 | 0,
        t = Math.random() * 4294967295 | 0,
        n = Math.random() * 4294967295 | 0; return (ht[o & 255] + ht[o >> 8 & 255] + ht[o >> 16 & 255] + ht[o >> 24 & 255] + "-" + ht[e & 255] + ht[e >> 8 & 255] + "-" + ht[e >> 16 & 15 | 64] + ht[e >> 24 & 255] + "-" + ht[t & 63 | 128] + ht[t >> 8 & 255] + "-" + ht[t >> 16 & 255] + ht[t >> 24 & 255] + ht[n & 255] + ht[n >> 8 & 255] + ht[n >> 16 & 255] + ht[n >> 24 & 255]).toUpperCase() }

function xt(o, e, t) { return Math.max(e, Math.min(t, o)) }

function nu(o, e) { return (o % e + e) % e }

function Ws(o, e, t) { return (1 - t) * o + t * e }

function Oa(o) { return (o & o - 1) == 0 && o !== 0 }

function iu(o) { return Math.pow(2, Math.ceil(Math.log(o) / Math.LN2)) }

function ru(o) { return Math.pow(2, Math.floor(Math.log(o) / Math.LN2)) }
class $ { constructor(e = 0, t = 0) { this.x = e, this.y = t }
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
            s = this.y - e.y; return this.x = r * n - s * i + e.x, this.y = r * i + s * n + e.y, this }
    random() { return this.x = Math.random(), this.y = Math.random(), this } * [Symbol.iterator]() { yield this.x, yield this.y } }
$.prototype.isVector2 = !0;
class at { constructor() { this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.") }
    set(e, t, n, i, r, s, a, l, c) { const h = this.elements; return h[0] = e, h[1] = i, h[2] = a, h[3] = t, h[4] = r, h[5] = l, h[6] = n, h[7] = s, h[8] = c, this }
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
            s = n[0],
            a = n[3],
            l = n[6],
            c = n[1],
            h = n[4],
            u = n[7],
            d = n[2],
            f = n[5],
            m = n[8],
            x = i[0],
            v = i[3],
            g = i[6],
            p = i[1],
            M = i[4],
            y = i[7],
            b = i[2],
            E = i[5],
            C = i[8]; return r[0] = s * x + a * p + l * b, r[3] = s * v + a * M + l * E, r[6] = s * g + a * y + l * C, r[1] = c * x + h * p + u * b, r[4] = c * v + h * M + u * E, r[7] = c * g + h * y + u * C, r[2] = d * x + f * p + m * b, r[5] = d * v + f * M + m * E, r[8] = d * g + f * y + m * C, this }
    multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this }
    determinant() { const e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            r = e[3],
            s = e[4],
            a = e[5],
            l = e[6],
            c = e[7],
            h = e[8]; return t * s * h - t * a * c - n * r * h + n * a * l + i * r * c - i * s * l }
    invert() { const e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            r = e[3],
            s = e[4],
            a = e[5],
            l = e[6],
            c = e[7],
            h = e[8],
            u = h * s - a * c,
            d = a * l - h * r,
            f = c * r - s * l,
            m = t * u + n * d + i * f; if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); const x = 1 / m; return e[0] = u * x, e[1] = (i * c - h * n) * x, e[2] = (a * n - i * s) * x, e[3] = d * x, e[4] = (h * t - i * l) * x, e[5] = (i * r - a * t) * x, e[6] = f * x, e[7] = (n * l - c * t) * x, e[8] = (s * t - n * r) * x, this }
    transpose() { let e; const t = this.elements; return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this }
    getNormalMatrix(e) { return this.setFromMatrix4(e).invert().transpose() }
    transposeIntoArray(e) { const t = this.elements; return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this }
    setUvTransform(e, t, n, i, r, s, a) { const l = Math.cos(r),
            c = Math.sin(r); return this.set(n * l, n * c, -n * (l * s + c * a) + s + e, -i * c, i * l, -i * (-c * s + l * a) + a + t, 0, 0, 1), this }
    scale(e, t) { const n = this.elements; return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this }
    rotate(e) { const t = Math.cos(e),
            n = Math.sin(e),
            i = this.elements,
            r = i[0],
            s = i[3],
            a = i[6],
            l = i[1],
            c = i[4],
            h = i[7]; return i[0] = t * r + n * l, i[3] = t * s + n * c, i[6] = t * a + n * h, i[1] = -n * r + t * l, i[4] = -n * s + t * c, i[7] = -n * a + t * h, this }
    translate(e, t) { const n = this.elements; return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this }
    equals(e) { const t = this.elements,
            n = e.elements; for (let i = 0; i < 9; i++)
            if (t[i] !== n[i]) return !1;
        return !0 }
    fromArray(e, t = 0) { for (let n = 0; n < 9; n++) this.elements[n] = e[n + t]; return this }
    toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e }
    clone() { return new this.constructor().fromArray(this.elements) } }
at.prototype.isMatrix3 = !0;

function Ua(o) { for (let e = o.length - 1; e >= 0; --e)
        if (o[e] > 65535) return !0;
    return !1 }
const su = { Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array };

function qn(o, e) { return new su[o](e) }

function Ii(o) { return document.createElementNS("http://www.w3.org/1999/xhtml", o) }
const Ha = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 },
    Pt = { h: 0, s: 0, l: 0 },
    gr = { h: 0, s: 0, l: 0 };

function qs(o, e, t) { return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? o + (e - o) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? o + (e - o) * 6 * (2 / 3 - t) : o }

function Xn(o) { return o < .04045 ? o * .0773993808 : Math.pow(o * .9478672986 + .0521327014, 2.4) }

function Xs(o) { return o < .0031308 ? o * 12.92 : 1.055 * Math.pow(o, .41666) - .055 }
class he { constructor(e, t, n) { return t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n) }
    set(e) { return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this }
    setScalar(e) { return this.r = e, this.g = e, this.b = e, this }
    setHex(e) { return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, this }
    setRGB(e, t, n) { return this.r = e, this.g = t, this.b = n, this }
    setHSL(e, t, n) { if (e = nu(e, 1), t = xt(t, 0, 1), n = xt(n, 0, 1), t === 0) this.r = this.g = this.b = n;
        else { const i = n <= .5 ? n * (1 + t) : n + t - n * t,
                r = 2 * n - i;
            this.r = qs(r, i, e + 1 / 3), this.g = qs(r, i, e), this.b = qs(r, i, e - 1 / 3) } return this }
    setStyle(e) {
        function t(i) { i !== void 0 && parseFloat(i) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.") } let n; if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) { let i; const r = n[1],
                s = n[2]; switch (r) {
                case "rgb":
                case "rgba":
                    if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, t(i[4]), this; if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, t(i[4]), this; break;
                case "hsl":
                case "hsla":
                    if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) { const a = parseFloat(i[1]) / 360,
                            l = parseInt(i[2], 10) / 100,
                            c = parseInt(i[3], 10) / 100; return t(i[4]), this.setHSL(a, l, c) } break } } else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) { const i = n[1],
                r = i.length; if (r === 3) return this.r = parseInt(i.charAt(0) + i.charAt(0), 16) / 255, this.g = parseInt(i.charAt(1) + i.charAt(1), 16) / 255, this.b = parseInt(i.charAt(2) + i.charAt(2), 16) / 255, this; if (r === 6) return this.r = parseInt(i.charAt(0) + i.charAt(1), 16) / 255, this.g = parseInt(i.charAt(2) + i.charAt(3), 16) / 255, this.b = parseInt(i.charAt(4) + i.charAt(5), 16) / 255, this } return e && e.length > 0 ? this.setColorName(e) : this }
    setColorName(e) { const t = Ha[e.toLowerCase()]; return t !== void 0 ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this }
    clone() { return new this.constructor(this.r, this.g, this.b) }
    copy(e) { return this.r = e.r, this.g = e.g, this.b = e.b, this }
    copySRGBToLinear(e) { return this.r = Xn(e.r), this.g = Xn(e.g), this.b = Xn(e.b), this }
    copyLinearToSRGB(e) { return this.r = Xs(e.r), this.g = Xs(e.g), this.b = Xs(e.b), this }
    convertSRGBToLinear() { return this.copySRGBToLinear(this), this }
    convertLinearToSRGB() { return this.copyLinearToSRGB(this), this }
    getHex() { return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0 }
    getHexString() { return ("000000" + this.getHex().toString(16)).slice(-6) }
    getHSL(e) { const t = this.r,
            n = this.g,
            i = this.b,
            r = Math.max(t, n, i),
            s = Math.min(t, n, i); let a, l; const c = (s + r) / 2; if (s === r) a = 0, l = 0;
        else { const h = r - s; switch (l = c <= .5 ? h / (r + s) : h / (2 - r - s), r) {
                case t:
                    a = (n - i) / h + (n < i ? 6 : 0); break;
                case n:
                    a = (i - t) / h + 2; break;
                case i:
                    a = (t - n) / h + 4; break }
            a /= 6 } return e.h = a, e.s = l, e.l = c, e }
    getStyle() { return "rgb(" + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + ")" }
    offsetHSL(e, t, n) { return this.getHSL(Pt), Pt.h += e, Pt.s += t, Pt.l += n, this.setHSL(Pt.h, Pt.s, Pt.l), this }
    add(e) { return this.r += e.r, this.g += e.g, this.b += e.b, this }
    addColors(e, t) { return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this }
    addScalar(e) { return this.r += e, this.g += e, this.b += e, this }
    sub(e) { return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this }
    multiply(e) { return this.r *= e.r, this.g *= e.g, this.b *= e.b, this }
    multiplyScalar(e) { return this.r *= e, this.g *= e, this.b *= e, this }
    lerp(e, t) { return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this }
    lerpColors(e, t, n) { return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this }
    lerpHSL(e, t) { this.getHSL(Pt), e.getHSL(gr); const n = Ws(Pt.h, gr.h, t),
            i = Ws(Pt.s, gr.s, t),
            r = Ws(Pt.l, gr.l, t); return this.setHSL(n, i, r), this }
    equals(e) { return e.r === this.r && e.g === this.g && e.b === this.b }
    fromArray(e, t = 0) { return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this }
    toArray(e = [], t = 0) { return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e }
    fromBufferAttribute(e, t) { return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), e.normalized === !0 && (this.r /= 255, this.g /= 255, this.b /= 255), this }
    toJSON() { return this.getHex() } }
he.NAMES = Ha;
he.prototype.isColor = !0;
he.prototype.r = 1;
he.prototype.g = 1;
he.prototype.b = 1;
let Jn;
class Tn { static getDataURL(e) { if (/^data:/i.test(e.src) || typeof HTMLCanvasElement == "undefined") return e.src; let t; if (e instanceof HTMLCanvasElement) t = e;
        else { Jn === void 0 && (Jn = Ii("canvas")), Jn.width = e.width, Jn.height = e.height; const n = Jn.getContext("2d");
            e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Jn } return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png") }
    static sRGBToLinear(e) { if (typeof HTMLImageElement != "undefined" && e instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && e instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && e instanceof ImageBitmap) { const t = Ii("canvas");
            t.width = e.width, t.height = e.height; const n = t.getContext("2d");
            n.drawImage(e, 0, 0, e.width, e.height); const i = n.getImageData(0, 0, e.width, e.height),
                r = i.data; for (let s = 0; s < r.length; s++) r[s] = Xn(r[s] / 255) * 255; return n.putImageData(i, 0, 0), t } else if (e.data) { const t = e.data.slice(0); for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Xn(t[n] / 255) * 255) : t[n] = Xn(t[n]); return { data: t, width: e.width, height: e.height } } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e } }
let ou = 0;
class ot extends Sn { constructor(e = ot.DEFAULT_IMAGE, t = ot.DEFAULT_MAPPING, n = _t, i = _t, r = ct, s = Li, a = ft, l = sn, c = 1, h = an) { super();
        Object.defineProperty(this, "id", { value: ou++ }), this.uuid = Lt(), this.name = "", this.image = e, this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = s, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new $(0, 0), this.repeat = new $(1, 1), this.center = new $(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new at, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1 }
    updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) }
    clone() { return new this.constructor().copy(this) }
    copy(e) { return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this }
    toJSON(e) { const t = e === void 0 || typeof e == "string"; if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid]; const n = { metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, mapping: this.mapping, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, type: this.type, encoding: this.encoding, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; if (this.image !== void 0) { const i = this.image; if (i.uuid === void 0 && (i.uuid = Lt()), !t && e.images[i.uuid] === void 0) { let r; if (Array.isArray(i)) { r = []; for (let s = 0, a = i.length; s < a; s++) i[s].isDataTexture ? r.push(Js(i[s].image)) : r.push(Js(i[s])) } else r = Js(i);
                e.images[i.uuid] = { uuid: i.uuid, url: r } }
            n.image = i.uuid } return JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n }
    dispose() { this.dispatchEvent({ type: "dispose" }) }
    transformUv(e) { if (this.mapping !== Ds) return e; if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
            case lr:
                e.x = e.x - Math.floor(e.x); break;
            case _t:
                e.x = e.x < 0 ? 0 : 1; break;
            case cr:
                Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x); break }
        if (e.y < 0 || e.y > 1) switch (this.wrapT) {
            case lr:
                e.y = e.y - Math.floor(e.y); break;
            case _t:
                e.y = e.y < 0 ? 0 : 1; break;
            case cr:
                Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y); break }
        return this.flipY && (e.y = 1 - e.y), e }
    set needsUpdate(e) { e === !0 && this.version++ } }
ot.DEFAULT_IMAGE = void 0;
ot.DEFAULT_MAPPING = Ds;
ot.prototype.isTexture = !0;

function Js(o) { return typeof HTMLImageElement != "undefined" && o instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && o instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && o instanceof ImageBitmap ? Tn.getDataURL(o) : o.data ? { data: Array.prototype.slice.call(o.data), width: o.width, height: o.height, type: o.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}) }
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
            s = e.elements; return this.x = s[0] * t + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * t + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * t + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * t + s[7] * n + s[11] * i + s[15] * r, this }
    divideScalar(e) { return this.multiplyScalar(1 / e) }
    setAxisAngleFromQuaternion(e) { this.w = 2 * Math.acos(e.w); const t = Math.sqrt(1 - e.w * e.w); return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this }
    setAxisAngleFromRotationMatrix(e) { let t, n, i, r; const s = .01,
            a = .1,
            l = e.elements,
            c = l[0],
            h = l[4],
            u = l[8],
            d = l[1],
            f = l[5],
            m = l[9],
            x = l[2],
            v = l[6],
            g = l[10]; if (Math.abs(h - d) < s && Math.abs(u - x) < s && Math.abs(m - v) < s) { if (Math.abs(h + d) < a && Math.abs(u + x) < a && Math.abs(m + v) < a && Math.abs(c + f + g - 3) < a) return this.set(1, 0, 0, 0), this;
            t = Math.PI; const M = (c + 1) / 2,
                y = (f + 1) / 2,
                b = (g + 1) / 2,
                E = (h + d) / 4,
                C = (u + x) / 4,
                P = (m + v) / 4; return M > y && M > b ? M < s ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(M), i = E / n, r = C / n) : y > b ? y < s ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(y), n = E / i, r = P / i) : b < s ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(b), n = C / r, i = P / r), this.set(n, i, r, t), this } let p = Math.sqrt((v - m) * (v - m) + (u - x) * (u - x) + (d - h) * (d - h)); return Math.abs(p) < .001 && (p = 1), this.x = (v - m) / p, this.y = (u - x) / p, this.z = (d - h) / p, this.w = Math.acos((c + f + g - 1) / 2), this }
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
class Tt extends Sn { constructor(e, t, n = {}) { super();
        this.width = e, this.height = t, this.depth = 1, this.scissor = new We(0, 0, e, t), this.scissorTest = !1, this.viewport = new We(0, 0, e, t), this.texture = new ot(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.image = { width: e, height: t, depth: 1 }, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : ct, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null }
    setTexture(e) { e.image = { width: this.width, height: this.height, depth: this.depth }, this.texture = e }
    setSize(e, t, n = 1) {
        (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t) }
    clone() { return new this.constructor().copy(this) }
    copy(e) { return this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.image = Object.assign({}, e.texture.image), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this }
    dispose() { this.dispatchEvent({ type: "dispose" }) } }
Tt.prototype.isWebGLRenderTarget = !0;
class au extends Tt { constructor(e, t, n) { super(e, t); const i = this.texture;
        this.texture = []; for (let r = 0; r < n; r++) this.texture[r] = i.clone() }
    setSize(e, t, n = 1) { if (this.width !== e || this.height !== t || this.depth !== n) { this.width = e, this.height = t, this.depth = n; for (let i = 0, r = this.texture.length; i < r; i++) this.texture[i].image.width = e, this.texture[i].image.height = t, this.texture[i].image.depth = n;
            this.dispose() } return this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t), this }
    copy(e) { this.dispose(), this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this.texture.length = 0; for (let t = 0, n = e.texture.length; t < n; t++) this.texture[t] = e.texture[t].clone(); return this } }
au.prototype.isWebGLMultipleRenderTargets = !0;
class Ys extends Tt { constructor(e, t, n = {}) { super(e, t, n);
        this.samples = 4, this.ignoreDepthForMultisampleCopy = n.ignoreDepth !== void 0 ? n.ignoreDepth : !0, this.useRenderToTexture = n.useRenderToTexture !== void 0 ? n.useRenderToTexture : !1, this.useRenderbuffer = this.useRenderToTexture === !1 }
    copy(e) { return super.copy.call(this, e), this.samples = e.samples, this.useRenderToTexture = e.useRenderToTexture, this.useRenderbuffer = e.useRenderbuffer, this } }
Ys.prototype.isWebGLMultisampleRenderTarget = !0;
class Mt { constructor(e = 0, t = 0, n = 0, i = 1) { this._x = e, this._y = t, this._z = n, this._w = i }
    static slerp(e, t, n, i) { return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(e, t, i) }
    static slerpFlat(e, t, n, i, r, s, a) { let l = n[i + 0],
            c = n[i + 1],
            h = n[i + 2],
            u = n[i + 3]; const d = r[s + 0],
            f = r[s + 1],
            m = r[s + 2],
            x = r[s + 3]; if (a === 0) { e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u; return } if (a === 1) { e[t + 0] = d, e[t + 1] = f, e[t + 2] = m, e[t + 3] = x; return } if (u !== x || l !== d || c !== f || h !== m) { let v = 1 - a; const g = l * d + c * f + h * m + u * x,
                p = g >= 0 ? 1 : -1,
                M = 1 - g * g; if (M > Number.EPSILON) { const b = Math.sqrt(M),
                    E = Math.atan2(b, g * p);
                v = Math.sin(v * E) / b, a = Math.sin(a * E) / b } const y = a * p; if (l = l * v + d * y, c = c * v + f * y, h = h * v + m * y, u = u * v + x * y, v === 1 - a) { const b = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
                l *= b, c *= b, h *= b, u *= b } }
        e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u }
    static multiplyQuaternionsFlat(e, t, n, i, r, s) { const a = n[i],
            l = n[i + 1],
            c = n[i + 2],
            h = n[i + 3],
            u = r[s],
            d = r[s + 1],
            f = r[s + 2],
            m = r[s + 3]; return e[t] = a * m + h * u + l * f - c * d, e[t + 1] = l * m + h * d + c * u - a * f, e[t + 2] = c * m + h * f + a * d - l * u, e[t + 3] = h * m - a * u - l * d - c * f, e }
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
            s = e._order,
            a = Math.cos,
            l = Math.sin,
            c = a(n / 2),
            h = a(i / 2),
            u = a(r / 2),
            d = l(n / 2),
            f = l(i / 2),
            m = l(r / 2); switch (s) {
            case "XYZ":
                this._x = d * h * u + c * f * m, this._y = c * f * u - d * h * m, this._z = c * h * m + d * f * u, this._w = c * h * u - d * f * m; break;
            case "YXZ":
                this._x = d * h * u + c * f * m, this._y = c * f * u - d * h * m, this._z = c * h * m - d * f * u, this._w = c * h * u + d * f * m; break;
            case "ZXY":
                this._x = d * h * u - c * f * m, this._y = c * f * u + d * h * m, this._z = c * h * m + d * f * u, this._w = c * h * u - d * f * m; break;
            case "ZYX":
                this._x = d * h * u - c * f * m, this._y = c * f * u + d * h * m, this._z = c * h * m - d * f * u, this._w = c * h * u + d * f * m; break;
            case "YZX":
                this._x = d * h * u + c * f * m, this._y = c * f * u + d * h * m, this._z = c * h * m - d * f * u, this._w = c * h * u - d * f * m; break;
            case "XZY":
                this._x = d * h * u - c * f * m, this._y = c * f * u - d * h * m, this._z = c * h * m + d * f * u, this._w = c * h * u + d * f * m; break;
            default:
                console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s) } return t !== !1 && this._onChangeCallback(), this }
    setFromAxisAngle(e, t) { const n = t / 2,
            i = Math.sin(n); return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this }
    setFromRotationMatrix(e) { const t = e.elements,
            n = t[0],
            i = t[4],
            r = t[8],
            s = t[1],
            a = t[5],
            l = t[9],
            c = t[2],
            h = t[6],
            u = t[10],
            d = n + a + u; if (d > 0) { const f = .5 / Math.sqrt(d + 1);
            this._w = .25 / f, this._x = (h - l) * f, this._y = (r - c) * f, this._z = (s - i) * f } else if (n > a && n > u) { const f = 2 * Math.sqrt(1 + n - a - u);
            this._w = (h - l) / f, this._x = .25 * f, this._y = (i + s) / f, this._z = (r + c) / f } else if (a > u) { const f = 2 * Math.sqrt(1 + a - n - u);
            this._w = (r - c) / f, this._x = (i + s) / f, this._y = .25 * f, this._z = (l + h) / f } else { const f = 2 * Math.sqrt(1 + u - n - a);
            this._w = (s - i) / f, this._x = (r + c) / f, this._y = (l + h) / f, this._z = .25 * f } return this._onChangeCallback(), this }
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
            s = e._w,
            a = t._x,
            l = t._y,
            c = t._z,
            h = t._w; return this._x = n * h + s * a + i * c - r * l, this._y = i * h + s * l + r * a - n * c, this._z = r * h + s * c + n * l - i * a, this._w = s * h - n * a - i * l - r * c, this._onChangeCallback(), this }
    slerp(e, t) { if (t === 0) return this; if (t === 1) return this.copy(e); const n = this._x,
            i = this._y,
            r = this._z,
            s = this._w; let a = s * e._w + n * e._x + i * e._y + r * e._z; if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = s, this._x = n, this._y = i, this._z = r, this; const l = 1 - a * a; if (l <= Number.EPSILON) { const f = 1 - t; return this._w = f * s + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * r + t * this._z, this.normalize(), this._onChangeCallback(), this } const c = Math.sqrt(l),
            h = Math.atan2(c, a),
            u = Math.sin((1 - t) * h) / c,
            d = Math.sin(t * h) / c; return this._w = s * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this }
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
Mt.prototype.isQuaternion = !0;
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
    applyEuler(e) { return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(Ga.setFromEuler(e)) }
    applyAxisAngle(e, t) { return this.applyQuaternion(Ga.setFromAxisAngle(e, t)) }
    applyMatrix3(e) { const t = this.x,
            n = this.y,
            i = this.z,
            r = e.elements; return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this }
    applyNormalMatrix(e) { return this.applyMatrix3(e).normalize() }
    applyMatrix4(e) { const t = this.x,
            n = this.y,
            i = this.z,
            r = e.elements,
            s = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]); return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * s, this }
    applyQuaternion(e) { const t = this.x,
            n = this.y,
            i = this.z,
            r = e.x,
            s = e.y,
            a = e.z,
            l = e.w,
            c = l * t + s * i - a * n,
            h = l * n + a * t - r * i,
            u = l * i + r * n - s * t,
            d = -r * t - s * n - a * i; return this.x = c * l + d * -r + h * -a - u * -s, this.y = h * l + d * -s + u * -r - c * -a, this.z = u * l + d * -a + c * -s - h * -r, this }
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
            s = t.x,
            a = t.y,
            l = t.z; return this.x = i * l - r * a, this.y = r * s - n * l, this.z = n * a - i * s, this }
    projectOnVector(e) { const t = e.lengthSq(); if (t === 0) return this.set(0, 0, 0); const n = e.dot(this) / t; return this.copy(e).multiplyScalar(n) }
    projectOnPlane(e) { return Zs.copy(this).projectOnVector(e), this.sub(Zs) }
    reflect(e) { return this.sub(Zs.copy(e).multiplyScalar(2 * this.dot(e))) }
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
const Zs = new S,
    Ga = new Mt;
class Dt { constructor(e = new S(1 / 0, 1 / 0, 1 / 0), t = new S(-1 / 0, -1 / 0, -1 / 0)) { this.min = e, this.max = t }
    set(e, t) { return this.min.copy(e), this.max.copy(t), this }
    setFromArray(e) { let t = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            s = -1 / 0,
            a = -1 / 0; for (let l = 0, c = e.length; l < c; l += 3) { const h = e[l],
                u = e[l + 1],
                d = e[l + 2];
            h < t && (t = h), u < n && (n = u), d < i && (i = d), h > r && (r = h), u > s && (s = u), d > a && (a = d) } return this.min.set(t, n, i), this.max.set(r, s, a), this }
    setFromBufferAttribute(e) { let t = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            s = -1 / 0,
            a = -1 / 0; for (let l = 0, c = e.count; l < c; l++) { const h = e.getX(l),
                u = e.getY(l),
                d = e.getZ(l);
            h < t && (t = h), u < n && (n = u), d < i && (i = d), h > r && (r = h), u > s && (s = u), d > a && (a = d) } return this.min.set(t, n, i), this.max.set(r, s, a), this }
    setFromPoints(e) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]); return this }
    setFromCenterAndSize(e, t) { const n = En.copy(t).multiplyScalar(.5); return this.min.copy(e).sub(n), this.max.copy(e).add(n), this }
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
            if (t && n.attributes != null && n.attributes.position !== void 0) { const r = n.attributes.position; for (let s = 0, a = r.count; s < a; s++) En.fromBufferAttribute(r, s).applyMatrix4(e.matrixWorld), this.expandByPoint(En) } else n.boundingBox === null && n.computeBoundingBox(), $s.copy(n.boundingBox), $s.applyMatrix4(e.matrixWorld), this.union($s);
        const i = e.children; for (let r = 0, s = i.length; r < s; r++) this.expandByObject(i[r], t); return this }
    containsPoint(e) { return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z) }
    containsBox(e) { return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z }
    getParameter(e, t) { return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z)) }
    intersectsBox(e) { return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z) }
    intersectsSphere(e) { return this.clampPoint(e.center, En), En.distanceToSquared(e.center) <= e.radius * e.radius }
    intersectsPlane(e) { let t, n; return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant }
    intersectsTriangle(e) { if (this.isEmpty()) return !1;
        this.getCenter(Fi), xr.subVectors(this.max, Fi), Yn.subVectors(e.a, Fi), Zn.subVectors(e.b, Fi), $n.subVectors(e.c, Fi), ln.subVectors(Zn, Yn), cn.subVectors($n, Zn), An.subVectors(Yn, $n); let t = [0, -ln.z, ln.y, 0, -cn.z, cn.y, 0, -An.z, An.y, ln.z, 0, -ln.x, cn.z, 0, -cn.x, An.z, 0, -An.x, -ln.y, ln.x, 0, -cn.y, cn.x, 0, -An.y, An.x, 0]; return !Ks(t, Yn, Zn, $n, xr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ks(t, Yn, Zn, $n, xr)) ? !1 : (yr.crossVectors(ln, cn), t = [yr.x, yr.y, yr.z], Ks(t, Yn, Zn, $n, xr)) }
    clampPoint(e, t) { return t.copy(e).clamp(this.min, this.max) }
    distanceToPoint(e) { return En.copy(e).clamp(this.min, this.max).sub(e).length() }
    getBoundingSphere(e) { return this.getCenter(e.center), e.radius = this.getSize(En).length() * .5, e }
    intersect(e) { return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this }
    union(e) { return this.min.min(e.min), this.max.max(e.max), this }
    applyMatrix4(e) { return this.isEmpty() ? this : (Jt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Jt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Jt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Jt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Jt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Jt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Jt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Jt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Jt), this) }
    translate(e) { return this.min.add(e), this.max.add(e), this }
    equals(e) { return e.min.equals(this.min) && e.max.equals(this.max) } }
Dt.prototype.isBox3 = !0;
const Jt = [new S, new S, new S, new S, new S, new S, new S, new S],
    En = new S,
    $s = new Dt,
    Yn = new S,
    Zn = new S,
    $n = new S,
    ln = new S,
    cn = new S,
    An = new S,
    Fi = new S,
    xr = new S,
    yr = new S,
    Cn = new S;

function Ks(o, e, t, n, i) { for (let r = 0, s = o.length - 3; r <= s; r += 3) { Cn.fromArray(o, r); const a = i.x * Math.abs(Cn.x) + i.y * Math.abs(Cn.y) + i.z * Math.abs(Cn.z),
            l = e.dot(Cn),
            c = t.dot(Cn),
            h = n.dot(Cn); if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a) return !1 } return !0 }
const lu = new Dt,
    ka = new S,
    vr = new S,
    Qs = new S;
class Rn { constructor(e = new S, t = -1) { this.center = e, this.radius = t }
    set(e, t) { return this.center.copy(e), this.radius = t, this }
    setFromPoints(e, t) { const n = this.center;
        t !== void 0 ? n.copy(t) : lu.setFromPoints(e).getCenter(n); let i = 0; for (let r = 0, s = e.length; r < s; r++) i = Math.max(i, n.distanceToSquared(e[r])); return this.radius = Math.sqrt(i), this }
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
    expandByPoint(e) { Qs.subVectors(e, this.center); const t = Qs.lengthSq(); if (t > this.radius * this.radius) { const n = Math.sqrt(t),
                i = (n - this.radius) * .5;
            this.center.add(Qs.multiplyScalar(i / n)), this.radius += i } return this }
    union(e) { return this.center.equals(e.center) === !0 ? vr.set(0, 0, 1).multiplyScalar(e.radius) : vr.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(ka.copy(e.center).add(vr)), this.expandByPoint(ka.copy(e.center).sub(vr)), this }
    equals(e) { return e.center.equals(this.center) && e.radius === this.radius }
    clone() { return new this.constructor().copy(this) } }
const Yt = new S,
    js = new S,
    _r = new S,
    hn = new S,
    eo = new S,
    Mr = new S,
    to = new S;
class Kn { constructor(e = new S, t = new S(0, 0, -1)) { this.origin = e, this.direction = t }
    set(e, t) { return this.origin.copy(e), this.direction.copy(t), this }
    copy(e) { return this.origin.copy(e.origin), this.direction.copy(e.direction), this }
    at(e, t) { return t.copy(this.direction).multiplyScalar(e).add(this.origin) }
    lookAt(e) { return this.direction.copy(e).sub(this.origin).normalize(), this }
    recast(e) { return this.origin.copy(this.at(e, Yt)), this }
    closestPointToPoint(e, t) { t.subVectors(e, this.origin); const n = t.dot(this.direction); return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin) }
    distanceToPoint(e) { return Math.sqrt(this.distanceSqToPoint(e)) }
    distanceSqToPoint(e) { const t = Yt.subVectors(e, this.origin).dot(this.direction); return t < 0 ? this.origin.distanceToSquared(e) : (Yt.copy(this.direction).multiplyScalar(t).add(this.origin), Yt.distanceToSquared(e)) }
    distanceSqToSegment(e, t, n, i) { js.copy(e).add(t).multiplyScalar(.5), _r.copy(t).sub(e).normalize(), hn.copy(this.origin).sub(js); const r = e.distanceTo(t) * .5,
            s = -this.direction.dot(_r),
            a = hn.dot(this.direction),
            l = -hn.dot(_r),
            c = hn.lengthSq(),
            h = Math.abs(1 - s * s); let u, d, f, m; if (h > 0)
            if (u = s * l - a, d = s * a - l, m = r * h, u >= 0)
                if (d >= -m)
                    if (d <= m) { const x = 1 / h;
                        u *= x, d *= x, f = u * (u + s * d + 2 * a) + d * (s * u + d + 2 * l) + c } else d = r, u = Math.max(0, -(s * d + a)), f = -u * u + d * (d + 2 * l) + c;
        else d = -r, u = Math.max(0, -(s * d + a)), f = -u * u + d * (d + 2 * l) + c;
        else d <= -m ? (u = Math.max(0, -(-s * r + a)), d = u > 0 ? -r : Math.min(Math.max(-r, -l), r), f = -u * u + d * (d + 2 * l) + c) : d <= m ? (u = 0, d = Math.min(Math.max(-r, -l), r), f = d * (d + 2 * l) + c) : (u = Math.max(0, -(s * r + a)), d = u > 0 ? r : Math.min(Math.max(-r, -l), r), f = -u * u + d * (d + 2 * l) + c);
        else d = s > 0 ? -r : r, u = Math.max(0, -(s * d + a)), f = -u * u + d * (d + 2 * l) + c; return n && n.copy(this.direction).multiplyScalar(u).add(this.origin), i && i.copy(_r).multiplyScalar(d).add(js), f }
    intersectSphere(e, t) { Yt.subVectors(e.center, this.origin); const n = Yt.dot(this.direction),
            i = Yt.dot(Yt) - n * n,
            r = e.radius * e.radius; if (i > r) return null; const s = Math.sqrt(r - i),
            a = n - s,
            l = n + s; return a < 0 && l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t) }
    intersectsSphere(e) { return this.distanceSqToPoint(e.center) <= e.radius * e.radius }
    distanceToPlane(e) { const t = e.normal.dot(this.direction); if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null; const n = -(this.origin.dot(e.normal) + e.constant) / t; return n >= 0 ? n : null }
    intersectPlane(e, t) { const n = this.distanceToPlane(e); return n === null ? null : this.at(n, t) }
    intersectsPlane(e) { const t = e.distanceToPoint(this.origin); return t === 0 || e.normal.dot(this.direction) * t < 0 }
    intersectBox(e, t) { let n, i, r, s, a, l; const c = 1 / this.direction.x,
            h = 1 / this.direction.y,
            u = 1 / this.direction.z,
            d = this.origin; return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), h >= 0 ? (r = (e.min.y - d.y) * h, s = (e.max.y - d.y) * h) : (r = (e.max.y - d.y) * h, s = (e.min.y - d.y) * h), n > s || r > i || ((r > n || n !== n) && (n = r), (s < i || i !== i) && (i = s), u >= 0 ? (a = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), n > l || a > i) || ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t) }
    intersectsBox(e) { return this.intersectBox(e, Yt) !== null }
    intersectTriangle(e, t, n, i, r) { eo.subVectors(t, e), Mr.subVectors(n, e), to.crossVectors(eo, Mr); let s = this.direction.dot(to),
            a; if (s > 0) { if (i) return null;
            a = 1 } else if (s < 0) a = -1, s = -s;
        else return null;
        hn.subVectors(this.origin, e); const l = a * this.direction.dot(Mr.crossVectors(hn, Mr)); if (l < 0) return null; const c = a * this.direction.dot(eo.cross(hn)); if (c < 0 || l + c > s) return null; const h = -a * hn.dot(to); return h < 0 ? null : this.at(h / s, r) }
    applyMatrix4(e) { return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this }
    equals(e) { return e.origin.equals(this.origin) && e.direction.equals(this.direction) }
    clone() { return new this.constructor().copy(this) } }
class ge { constructor() { this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.") }
    set(e, t, n, i, r, s, a, l, c, h, u, d, f, m, x, v) { const g = this.elements; return g[0] = e, g[4] = t, g[8] = n, g[12] = i, g[1] = r, g[5] = s, g[9] = a, g[13] = l, g[2] = c, g[6] = h, g[10] = u, g[14] = d, g[3] = f, g[7] = m, g[11] = x, g[15] = v, this }
    identity() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this }
    clone() { return new ge().fromArray(this.elements) }
    copy(e) { const t = this.elements,
            n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this }
    copyPosition(e) { const t = this.elements,
            n = e.elements; return t[12] = n[12], t[13] = n[13], t[14] = n[14], this }
    setFromMatrix3(e) { const t = e.elements; return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this }
    extractBasis(e, t, n) { return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this }
    makeBasis(e, t, n) { return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this }
    extractRotation(e) { const t = this.elements,
            n = e.elements,
            i = 1 / Qn.setFromMatrixColumn(e, 0).length(),
            r = 1 / Qn.setFromMatrixColumn(e, 1).length(),
            s = 1 / Qn.setFromMatrixColumn(e, 2).length(); return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * s, t[9] = n[9] * s, t[10] = n[10] * s, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this }
    makeRotationFromEuler(e) { e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."); const t = this.elements,
            n = e.x,
            i = e.y,
            r = e.z,
            s = Math.cos(n),
            a = Math.sin(n),
            l = Math.cos(i),
            c = Math.sin(i),
            h = Math.cos(r),
            u = Math.sin(r); if (e.order === "XYZ") { const d = s * h,
                f = s * u,
                m = a * h,
                x = a * u;
            t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = f + m * c, t[5] = d - x * c, t[9] = -a * l, t[2] = x - d * c, t[6] = m + f * c, t[10] = s * l } else if (e.order === "YXZ") { const d = l * h,
                f = l * u,
                m = c * h,
                x = c * u;
            t[0] = d + x * a, t[4] = m * a - f, t[8] = s * c, t[1] = s * u, t[5] = s * h, t[9] = -a, t[2] = f * a - m, t[6] = x + d * a, t[10] = s * l } else if (e.order === "ZXY") { const d = l * h,
                f = l * u,
                m = c * h,
                x = c * u;
            t[0] = d - x * a, t[4] = -s * u, t[8] = m + f * a, t[1] = f + m * a, t[5] = s * h, t[9] = x - d * a, t[2] = -s * c, t[6] = a, t[10] = s * l } else if (e.order === "ZYX") { const d = s * h,
                f = s * u,
                m = a * h,
                x = a * u;
            t[0] = l * h, t[4] = m * c - f, t[8] = d * c + x, t[1] = l * u, t[5] = x * c + d, t[9] = f * c - m, t[2] = -c, t[6] = a * l, t[10] = s * l } else if (e.order === "YZX") { const d = s * l,
                f = s * c,
                m = a * l,
                x = a * c;
            t[0] = l * h, t[4] = x - d * u, t[8] = m * u + f, t[1] = u, t[5] = s * h, t[9] = -a * h, t[2] = -c * h, t[6] = f * u + m, t[10] = d - x * u } else if (e.order === "XZY") { const d = s * l,
                f = s * c,
                m = a * l,
                x = a * c;
            t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + x, t[5] = s * h, t[9] = f * u - m, t[2] = m * u - f, t[6] = a * h, t[10] = x * u + d } return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this }
    makeRotationFromQuaternion(e) { return this.compose(cu, e, hu) }
    lookAt(e, t, n) { const i = this.elements; return wt.subVectors(e, t), wt.lengthSq() === 0 && (wt.z = 1), wt.normalize(), un.crossVectors(n, wt), un.lengthSq() === 0 && (Math.abs(n.z) === 1 ? wt.x += 1e-4 : wt.z += 1e-4, wt.normalize(), un.crossVectors(n, wt)), un.normalize(), br.crossVectors(wt, un), i[0] = un.x, i[4] = br.x, i[8] = wt.x, i[1] = un.y, i[5] = br.y, i[9] = wt.y, i[2] = un.z, i[6] = br.z, i[10] = wt.z, this }
    multiply(e, t) { return t !== void 0 ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e) }
    premultiply(e) { return this.multiplyMatrices(e, this) }
    multiplyMatrices(e, t) { const n = e.elements,
            i = t.elements,
            r = this.elements,
            s = n[0],
            a = n[4],
            l = n[8],
            c = n[12],
            h = n[1],
            u = n[5],
            d = n[9],
            f = n[13],
            m = n[2],
            x = n[6],
            v = n[10],
            g = n[14],
            p = n[3],
            M = n[7],
            y = n[11],
            b = n[15],
            E = i[0],
            C = i[4],
            P = i[8],
            H = i[12],
            B = i[1],
            _ = i[5],
            R = i[9],
            D = i[13],
            N = i[2],
            z = i[6],
            F = i[10],
            W = i[14],
            K = i[3],
            ce = i[7],
            k = i[11],
            Z = i[15]; return r[0] = s * E + a * B + l * N + c * K, r[4] = s * C + a * _ + l * z + c * ce, r[8] = s * P + a * R + l * F + c * k, r[12] = s * H + a * D + l * W + c * Z, r[1] = h * E + u * B + d * N + f * K, r[5] = h * C + u * _ + d * z + f * ce, r[9] = h * P + u * R + d * F + f * k, r[13] = h * H + u * D + d * W + f * Z, r[2] = m * E + x * B + v * N + g * K, r[6] = m * C + x * _ + v * z + g * ce, r[10] = m * P + x * R + v * F + g * k, r[14] = m * H + x * D + v * W + g * Z, r[3] = p * E + M * B + y * N + b * K, r[7] = p * C + M * _ + y * z + b * ce, r[11] = p * P + M * R + y * F + b * k, r[15] = p * H + M * D + y * W + b * Z, this }
    multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this }
    determinant() { const e = this.elements,
            t = e[0],
            n = e[4],
            i = e[8],
            r = e[12],
            s = e[1],
            a = e[5],
            l = e[9],
            c = e[13],
            h = e[2],
            u = e[6],
            d = e[10],
            f = e[14],
            m = e[3],
            x = e[7],
            v = e[11],
            g = e[15]; return m * (+r * l * u - i * c * u - r * a * d + n * c * d + i * a * f - n * l * f) + x * (+t * l * f - t * c * d + r * s * d - i * s * f + i * c * h - r * l * h) + v * (+t * c * u - t * a * f - r * s * u + n * s * f + r * a * h - n * c * h) + g * (-i * a * h - t * l * u + t * a * d + i * s * u - n * s * d + n * l * h) }
    transpose() { const e = this.elements; let t; return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this }
    setPosition(e, t, n) { const i = this.elements; return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this }
    invert() { const e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            r = e[3],
            s = e[4],
            a = e[5],
            l = e[6],
            c = e[7],
            h = e[8],
            u = e[9],
            d = e[10],
            f = e[11],
            m = e[12],
            x = e[13],
            v = e[14],
            g = e[15],
            p = u * v * c - x * d * c + x * l * f - a * v * f - u * l * g + a * d * g,
            M = m * d * c - h * v * c - m * l * f + s * v * f + h * l * g - s * d * g,
            y = h * x * c - m * u * c + m * a * f - s * x * f - h * a * g + s * u * g,
            b = m * u * l - h * x * l - m * a * d + s * x * d + h * a * v - s * u * v,
            E = t * p + n * M + i * y + r * b; if (E === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); const C = 1 / E; return e[0] = p * C, e[1] = (x * d * r - u * v * r - x * i * f + n * v * f + u * i * g - n * d * g) * C, e[2] = (a * v * r - x * l * r + x * i * c - n * v * c - a * i * g + n * l * g) * C, e[3] = (u * l * r - a * d * r - u * i * c + n * d * c + a * i * f - n * l * f) * C, e[4] = M * C, e[5] = (h * v * r - m * d * r + m * i * f - t * v * f - h * i * g + t * d * g) * C, e[6] = (m * l * r - s * v * r - m * i * c + t * v * c + s * i * g - t * l * g) * C, e[7] = (s * d * r - h * l * r + h * i * c - t * d * c - s * i * f + t * l * f) * C, e[8] = y * C, e[9] = (m * u * r - h * x * r - m * n * f + t * x * f + h * n * g - t * u * g) * C, e[10] = (s * x * r - m * a * r + m * n * c - t * x * c - s * n * g + t * a * g) * C, e[11] = (h * a * r - s * u * r - h * n * c + t * u * c + s * n * f - t * a * f) * C, e[12] = b * C, e[13] = (h * x * i - m * u * i + m * n * d - t * x * d - h * n * v + t * u * v) * C, e[14] = (m * a * i - s * x * i - m * n * l + t * x * l + s * n * v - t * a * v) * C, e[15] = (s * u * i - h * a * i + h * n * l - t * u * l - s * n * d + t * a * d) * C, this }
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
            s = e.x,
            a = e.y,
            l = e.z,
            c = r * s,
            h = r * a; return this.set(c * s + n, c * a - i * l, c * l + i * a, 0, c * a + i * l, h * a + n, h * l - i * s, 0, c * l - i * a, h * l + i * s, r * l * l + n, 0, 0, 0, 0, 1), this }
    makeScale(e, t, n) { return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this }
    makeShear(e, t, n, i, r, s) { return this.set(1, n, r, 0, e, 1, s, 0, t, i, 1, 0, 0, 0, 0, 1), this }
    compose(e, t, n) { const i = this.elements,
            r = t._x,
            s = t._y,
            a = t._z,
            l = t._w,
            c = r + r,
            h = s + s,
            u = a + a,
            d = r * c,
            f = r * h,
            m = r * u,
            x = s * h,
            v = s * u,
            g = a * u,
            p = l * c,
            M = l * h,
            y = l * u,
            b = n.x,
            E = n.y,
            C = n.z; return i[0] = (1 - (x + g)) * b, i[1] = (f + y) * b, i[2] = (m - M) * b, i[3] = 0, i[4] = (f - y) * E, i[5] = (1 - (d + g)) * E, i[6] = (v + p) * E, i[7] = 0, i[8] = (m + M) * C, i[9] = (v - p) * C, i[10] = (1 - (d + x)) * C, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this }
    decompose(e, t, n) { const i = this.elements; let r = Qn.set(i[0], i[1], i[2]).length(); const s = Qn.set(i[4], i[5], i[6]).length(),
            a = Qn.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], It.copy(this); const c = 1 / r,
            h = 1 / s,
            u = 1 / a; return It.elements[0] *= c, It.elements[1] *= c, It.elements[2] *= c, It.elements[4] *= h, It.elements[5] *= h, It.elements[6] *= h, It.elements[8] *= u, It.elements[9] *= u, It.elements[10] *= u, t.setFromRotationMatrix(It), n.x = r, n.y = s, n.z = a, this }
    makePerspective(e, t, n, i, r, s) { s === void 0 && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."); const a = this.elements,
            l = 2 * r / (t - e),
            c = 2 * r / (n - i),
            h = (t + e) / (t - e),
            u = (n + i) / (n - i),
            d = -(s + r) / (s - r),
            f = -2 * s * r / (s - r); return a[0] = l, a[4] = 0, a[8] = h, a[12] = 0, a[1] = 0, a[5] = c, a[9] = u, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = d, a[14] = f, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this }
    makeOrthographic(e, t, n, i, r, s) { const a = this.elements,
            l = 1 / (t - e),
            c = 1 / (n - i),
            h = 1 / (s - r),
            u = (t + e) * l,
            d = (n + i) * c,
            f = (s + r) * h; return a[0] = 2 * l, a[4] = 0, a[8] = 0, a[12] = -u, a[1] = 0, a[5] = 2 * c, a[9] = 0, a[13] = -d, a[2] = 0, a[6] = 0, a[10] = -2 * h, a[14] = -f, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this }
    equals(e) { const t = this.elements,
            n = e.elements; for (let i = 0; i < 16; i++)
            if (t[i] !== n[i]) return !1;
        return !0 }
    fromArray(e, t = 0) { for (let n = 0; n < 16; n++) this.elements[n] = e[n + t]; return this }
    toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e } }
ge.prototype.isMatrix4 = !0;
const Qn = new S,
    It = new ge,
    cu = new S(0, 0, 0),
    hu = new S(1, 1, 1),
    un = new S,
    br = new S,
    wt = new S,
    Va = new ge,
    Wa = new Mt;
class jn { constructor(e = 0, t = 0, n = 0, i = jn.DefaultOrder) { this._x = e, this._y = t, this._z = n, this._order = i }
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
            s = i[4],
            a = i[8],
            l = i[1],
            c = i[5],
            h = i[9],
            u = i[2],
            d = i[6],
            f = i[10]; switch (t) {
            case "XYZ":
                this._y = Math.asin(xt(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(d, c), this._z = 0); break;
            case "YXZ":
                this._x = Math.asin(-xt(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0); break;
            case "ZXY":
                this._x = Math.asin(xt(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-s, c)) : (this._y = 0, this._z = Math.atan2(l, r)); break;
            case "ZYX":
                this._y = Math.asin(-xt(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-s, c)); break;
            case "YZX":
                this._z = Math.asin(xt(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(a, f)); break;
            case "XZY":
                this._z = Math.asin(-xt(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, f), this._y = 0); break;
            default:
                console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t) } return this._order = t, n === !0 && this._onChangeCallback(), this }
    setFromQuaternion(e, t, n) { return Va.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Va, t, n) }
    setFromVector3(e, t = this._order) { return this.set(e.x, e.y, e.z, t) }
    reorder(e) { return Wa.setFromEuler(this), this.setFromQuaternion(Wa, e) }
    equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order }
    fromArray(e) { return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this }
    toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e }
    toVector3(e) { return e ? e.set(this._x, this._y, this._z) : new S(this._x, this._y, this._z) }
    _onChange(e) { return this._onChangeCallback = e, this }
    _onChangeCallback() {} }
jn.prototype.isEuler = !0;
jn.DefaultOrder = "XYZ";
jn.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class qa { constructor() { this.mask = 1 | 0 }
    set(e) { this.mask = (1 << e | 0) >>> 0 }
    enable(e) { this.mask |= 1 << e | 0 }
    enableAll() { this.mask = 4294967295 | 0 }
    toggle(e) { this.mask ^= 1 << e | 0 }
    disable(e) { this.mask &= ~(1 << e | 0) }
    disableAll() { this.mask = 0 }
    test(e) { return (this.mask & e.mask) != 0 }
    isEnabled(e) { return (this.mask & (1 << e | 0)) != 0 } }
let uu = 0;
const Xa = new S,
    ei = new Mt,
    Zt = new ge,
    wr = new S,
    Ni = new S,
    du = new S,
    fu = new Mt,
    Ja = new S(1, 0, 0),
    Ya = new S(0, 1, 0),
    Za = new S(0, 0, 1),
    pu = { type: "added" },
    $a = { type: "removed" };
class He extends Sn { constructor() { super();
        Object.defineProperty(this, "id", { value: uu++ }), this.uuid = Lt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = He.DefaultUp.clone(); const e = new S,
            t = new jn,
            n = new Mt,
            i = new S(1, 1, 1);

        function r() { n.setFromEuler(t, !1) }

        function s() { t.setFromQuaternion(n, void 0, !1) }
        t._onChange(r), n._onChange(s), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: e }, rotation: { configurable: !0, enumerable: !0, value: t }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: i }, modelViewMatrix: { value: new ge }, normalMatrix: { value: new at } }), this.matrix = new ge, this.matrixWorld = new ge, this.matrixAutoUpdate = He.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new qa, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {} }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale) }
    applyQuaternion(e) { return this.quaternion.premultiply(e), this }
    setRotationFromAxisAngle(e, t) { this.quaternion.setFromAxisAngle(e, t) }
    setRotationFromEuler(e) { this.quaternion.setFromEuler(e, !0) }
    setRotationFromMatrix(e) { this.quaternion.setFromRotationMatrix(e) }
    setRotationFromQuaternion(e) { this.quaternion.copy(e) }
    rotateOnAxis(e, t) { return ei.setFromAxisAngle(e, t), this.quaternion.multiply(ei), this }
    rotateOnWorldAxis(e, t) { return ei.setFromAxisAngle(e, t), this.quaternion.premultiply(ei), this }
    rotateX(e) { return this.rotateOnAxis(Ja, e) }
    rotateY(e) { return this.rotateOnAxis(Ya, e) }
    rotateZ(e) { return this.rotateOnAxis(Za, e) }
    translateOnAxis(e, t) { return Xa.copy(e).applyQuaternion(this.quaternion), this.position.add(Xa.multiplyScalar(t)), this }
    translateX(e) { return this.translateOnAxis(Ja, e) }
    translateY(e) { return this.translateOnAxis(Ya, e) }
    translateZ(e) { return this.translateOnAxis(Za, e) }
    localToWorld(e) { return e.applyMatrix4(this.matrixWorld) }
    worldToLocal(e) { return e.applyMatrix4(Zt.copy(this.matrixWorld).invert()) }
    lookAt(e, t, n) { e.isVector3 ? wr.copy(e) : wr.set(e, t, n); const i = this.parent;
        this.updateWorldMatrix(!0, !1), Ni.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Zt.lookAt(Ni, wr, this.up) : Zt.lookAt(wr, Ni, this.up), this.quaternion.setFromRotationMatrix(Zt), i && (Zt.extractRotation(i.matrixWorld), ei.setFromRotationMatrix(Zt), this.quaternion.premultiply(ei.invert())) }
    add(e) { if (arguments.length > 1) { for (let t = 0; t < arguments.length; t++) this.add(arguments[t]); return this } return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(pu)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this) }
    remove(e) { if (arguments.length > 1) { for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]); return this } const t = this.children.indexOf(e); return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent($a)), this }
    removeFromParent() { const e = this.parent; return e !== null && e.remove(this), this }
    clear() { for (let e = 0; e < this.children.length; e++) { const t = this.children[e];
            t.parent = null, t.dispatchEvent($a) } return this.children.length = 0, this }
    attach(e) { return this.updateWorldMatrix(!0, !1), Zt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Zt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Zt), this.add(e), e.updateWorldMatrix(!1, !0), this }
    getObjectById(e) { return this.getObjectByProperty("id", e) }
    getObjectByName(e) { return this.getObjectByProperty("name", e) }
    getObjectByProperty(e, t) { if (this[e] === t) return this; for (let n = 0, i = this.children.length; n < i; n++) { const s = this.children[n].getObjectByProperty(e, t); if (s !== void 0) return s } }
    getWorldPosition(e) { return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld) }
    getWorldQuaternion(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ni, e, du), e }
    getWorldScale(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ni, fu, e), e }
    getWorldDirection(e) { this.updateWorldMatrix(!0, !1); const t = this.matrixWorld.elements; return e.set(t[8], t[9], t[10]).normalize() }
    raycast() {}
    traverse(e) { e(this); const t = this.children; for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e) }
    traverseVisible(e) { if (this.visible === !1) return;
        e(this); const t = this.children; for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e) }
    traverseAncestors(e) { const t = this.parent;
        t !== null && (e(t), t.traverseAncestors(e)) }
    updateMatrix() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 }
    updateMatrixWorld(e) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0); const t = this.children; for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e) }
    updateWorldMatrix(e, t) { const n = this.parent; if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) { const i = this.children; for (let r = 0, s = i.length; r < s; r++) i[r].updateWorldMatrix(!1, !0) } }
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
                i.animations.push(r(e.animations, l)) } } if (t) { const a = s(e.geometries),
                l = s(e.materials),
                c = s(e.textures),
                h = s(e.images),
                u = s(e.shapes),
                d = s(e.skeletons),
                f = s(e.animations);
            a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f) } return n.object = i, n;

        function s(a) { const l = []; for (const c in a) { const h = a[c];
                delete h.metadata, l.push(h) } return l } }
    clone(e) { return new this.constructor().copy(this, e) }
    copy(e, t = !0) { if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
            for (let n = 0; n < e.children.length; n++) { const i = e.children[n];
                this.add(i.clone()) }
        return this } }
He.DefaultUp = new S(0, 1, 0);
He.DefaultMatrixAutoUpdate = !0;
He.prototype.isObject3D = !0;
const Ft = new S,
    $t = new S,
    no = new S,
    Kt = new S,
    ti = new S,
    ni = new S,
    Ka = new S,
    io = new S,
    ro = new S,
    so = new S;
class tt { constructor(e = new S, t = new S, n = new S) { this.a = e, this.b = t, this.c = n }
    static getNormal(e, t, n, i) { i.subVectors(n, t), Ft.subVectors(e, t), i.cross(Ft); const r = i.lengthSq(); return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0) }
    static getBarycoord(e, t, n, i, r) { Ft.subVectors(i, t), $t.subVectors(n, t), no.subVectors(e, t); const s = Ft.dot(Ft),
            a = Ft.dot($t),
            l = Ft.dot(no),
            c = $t.dot($t),
            h = $t.dot(no),
            u = s * c - a * a; if (u === 0) return r.set(-2, -1, -1); const d = 1 / u,
            f = (c * l - a * h) * d,
            m = (s * h - a * l) * d; return r.set(1 - f - m, m, f) }
    static containsPoint(e, t, n, i) { return this.getBarycoord(e, t, n, i, Kt), Kt.x >= 0 && Kt.y >= 0 && Kt.x + Kt.y <= 1 }
    static getUV(e, t, n, i, r, s, a, l) { return this.getBarycoord(e, t, n, i, Kt), l.set(0, 0), l.addScaledVector(r, Kt.x), l.addScaledVector(s, Kt.y), l.addScaledVector(a, Kt.z), l }
    static isFrontFacing(e, t, n, i) { return Ft.subVectors(n, t), $t.subVectors(e, t), Ft.cross($t).dot(i) < 0 }
    set(e, t, n) { return this.a.copy(e), this.b.copy(t), this.c.copy(n), this }
    setFromPointsAndIndices(e, t, n, i) { return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this }
    setFromAttributeAndIndices(e, t, n, i) { return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this }
    clone() { return new this.constructor().copy(this) }
    copy(e) { return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this }
    getArea() { return Ft.subVectors(this.c, this.b), $t.subVectors(this.a, this.b), Ft.cross($t).length() * .5 }
    getMidpoint(e) { return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) }
    getNormal(e) { return tt.getNormal(this.a, this.b, this.c, e) }
    getPlane(e) { return e.setFromCoplanarPoints(this.a, this.b, this.c) }
    getBarycoord(e, t) { return tt.getBarycoord(e, this.a, this.b, this.c, t) }
    getUV(e, t, n, i, r) { return tt.getUV(e, this.a, this.b, this.c, t, n, i, r) }
    containsPoint(e) { return tt.containsPoint(e, this.a, this.b, this.c) }
    isFrontFacing(e) { return tt.isFrontFacing(this.a, this.b, this.c, e) }
    intersectsBox(e) { return e.intersectsTriangle(this) }
    closestPointToPoint(e, t) { const n = this.a,
            i = this.b,
            r = this.c; let s, a;
        ti.subVectors(i, n), ni.subVectors(r, n), io.subVectors(e, n); const l = ti.dot(io),
            c = ni.dot(io); if (l <= 0 && c <= 0) return t.copy(n);
        ro.subVectors(e, i); const h = ti.dot(ro),
            u = ni.dot(ro); if (h >= 0 && u <= h) return t.copy(i); const d = l * u - h * c; if (d <= 0 && l >= 0 && h <= 0) return s = l / (l - h), t.copy(n).addScaledVector(ti, s);
        so.subVectors(e, r); const f = ti.dot(so),
            m = ni.dot(so); if (m >= 0 && f <= m) return t.copy(r); const x = f * c - l * m; if (x <= 0 && c >= 0 && m <= 0) return a = c / (c - m), t.copy(n).addScaledVector(ni, a); const v = h * m - f * u; if (v <= 0 && u - h >= 0 && f - m >= 0) return Ka.subVectors(r, i), a = (u - h) / (u - h + (f - m)), t.copy(i).addScaledVector(Ka, a); const g = 1 / (v + x + d); return s = x * g, a = d * g, t.copy(n).addScaledVector(ti, s).addScaledVector(ni, a) }
    equals(e) { return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c) } }
let mu = 0;
class ut extends Sn { constructor() { super();
        Object.defineProperty(this, "id", { value: mu++ }), this.uuid = Lt(), this.name = "", this.type = "Material", this.fog = !0, this.blending = Ci, this.side = Ai, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = da, this.blendDst = fa, this.blendEquation = Bn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Ps, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = tu, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Gs, this.stencilZFail = Gs, this.stencilZPass = Gs, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0 }
    get alphaTest() { return this._alphaTest }
    set alphaTest(e) { this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() { return this.onBeforeCompile.toString() }
    setValues(e) { if (e !== void 0)
            for (const t in e) { const n = e[t]; if (n === void 0) { console.warn("THREE.Material: '" + t + "' parameter is undefined."); continue } if (t === "shading") { console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === oa; continue } const i = this[t]; if (i === void 0) { console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material."); continue }
                i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n } }
    toJSON(e) { const t = e === void 0 || typeof e == "string";
        t && (e = { textures: {}, images: {} }); const n = { metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" } };
        n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ci && (n.blending = this.blending), this.side !== Ai && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);

        function i(r) { const s = []; for (const a in r) { const l = r[a];
                delete l.metadata, s.push(l) } return s } if (t) { const r = i(e.textures),
                s = i(e.images);
            r.length > 0 && (n.textures = r), s.length > 0 && (n.images = s) } return n }
    clone() { return new this.constructor().copy(this) }
    copy(e) { this.name = e.name, this.fog = e.fog, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite; const t = e.clippingPlanes; let n = null; if (t !== null) { const i = t.length;
            n = new Array(i); for (let r = 0; r !== i; ++r) n[r] = t[r].clone() } return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this }
    dispose() { this.dispatchEvent({ type: "dispose" }) }
    set needsUpdate(e) { e === !0 && this.version++ } }
ut.prototype.isMaterial = !0;
class Sr extends ut { constructor(e) { super();
        this.type = "MeshBasicMaterial", this.color = new he(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = rr, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e) }
    copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this } }
Sr.prototype.isMeshBasicMaterial = !0;
const Je = new S,
    Tr = new $;
class et { constructor(e, t, n) { if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = Di, this.updateRange = { offset: 0, count: -1 }, this.version = 0 }
    onUploadCallback() {}
    set needsUpdate(e) { e === !0 && this.version++ }
    setUsage(e) { return this.usage = e, this }
    copy(e) { return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this }
    copyAt(e, t, n) { e *= this.itemSize, n *= t.itemSize; for (let i = 0, r = this.itemSize; i < r; i++) this.array[e + i] = t.array[n + i]; return this }
    copyArray(e) { return this.array.set(e), this }
    copyColorsArray(e) { const t = this.array; let n = 0; for (let i = 0, r = e.length; i < r; i++) { let s = e[i];
            s === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), s = new he), t[n++] = s.r, t[n++] = s.g, t[n++] = s.b } return this }
    copyVector2sArray(e) { const t = this.array; let n = 0; for (let i = 0, r = e.length; i < r; i++) { let s = e[i];
            s === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), s = new $), t[n++] = s.x, t[n++] = s.y } return this }
    copyVector3sArray(e) { const t = this.array; let n = 0; for (let i = 0, r = e.length; i < r; i++) { let s = e[i];
            s === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), s = new S), t[n++] = s.x, t[n++] = s.y, t[n++] = s.z } return this }
    copyVector4sArray(e) { const t = this.array; let n = 0; for (let i = 0, r = e.length; i < r; i++) { let s = e[i];
            s === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), s = new We), t[n++] = s.x, t[n++] = s.y, t[n++] = s.z, t[n++] = s.w } return this }
    applyMatrix3(e) { if (this.itemSize === 2)
            for (let t = 0, n = this.count; t < n; t++) Tr.fromBufferAttribute(this, t), Tr.applyMatrix3(e), this.setXY(t, Tr.x, Tr.y);
        else if (this.itemSize === 3)
            for (let t = 0, n = this.count; t < n; t++) Je.fromBufferAttribute(this, t), Je.applyMatrix3(e), this.setXYZ(t, Je.x, Je.y, Je.z); return this }
    applyMatrix4(e) { for (let t = 0, n = this.count; t < n; t++) Je.x = this.getX(t), Je.y = this.getY(t), Je.z = this.getZ(t), Je.applyMatrix4(e), this.setXYZ(t, Je.x, Je.y, Je.z); return this }
    applyNormalMatrix(e) { for (let t = 0, n = this.count; t < n; t++) Je.x = this.getX(t), Je.y = this.getY(t), Je.z = this.getZ(t), Je.applyNormalMatrix(e), this.setXYZ(t, Je.x, Je.y, Je.z); return this }
    transformDirection(e) { for (let t = 0, n = this.count; t < n; t++) Je.x = this.getX(t), Je.y = this.getY(t), Je.z = this.getZ(t), Je.transformDirection(e), this.setXYZ(t, Je.x, Je.y, Je.z); return this }
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
    toJSON() { const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.prototype.slice.call(this.array), normalized: this.normalized }; return this.name !== "" && (e.name = this.name), this.usage !== Di && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e } }
et.prototype.isBufferAttribute = !0;
class Qa extends et { constructor(e, t, n) { super(new Uint16Array(e), t, n) } }
class ja extends et { constructor(e, t, n) { super(new Uint32Array(e), t, n) } }
class gu extends et { constructor(e, t, n) { super(new Uint16Array(e), t, n) } }
gu.prototype.isFloat16BufferAttribute = !0;
class _e extends et { constructor(e, t, n) { super(new Float32Array(e), t, n) } }
let xu = 0;
const Et = new ge,
    oo = new He,
    ii = new S,
    St = new Dt,
    Bi = new Dt,
    lt = new S;
class De extends Sn { constructor() { super();
        Object.defineProperty(this, "id", { value: xu++ }), this.uuid = Lt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {} }
    getIndex() { return this.index }
    setIndex(e) { return Array.isArray(e) ? this.index = new(Ua(e) ? ja : Qa)(e, 1) : this.index = e, this }
    getAttribute(e) { return this.attributes[e] }
    setAttribute(e, t) { return this.attributes[e] = t, this }
    deleteAttribute(e) { return delete this.attributes[e], this }
    hasAttribute(e) { return this.attributes[e] !== void 0 }
    addGroup(e, t, n = 0) { this.groups.push({ start: e, count: t, materialIndex: n }) }
    clearGroups() { this.groups = [] }
    setDrawRange(e, t) { this.drawRange.start = e, this.drawRange.count = t }
    applyMatrix4(e) { const t = this.attributes.position;
        t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0); const n = this.attributes.normal; if (n !== void 0) { const r = new at().getNormalMatrix(e);
            n.applyNormalMatrix(r), n.needsUpdate = !0 } const i = this.attributes.tangent; return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this }
    applyQuaternion(e) { return Et.makeRotationFromQuaternion(e), this.applyMatrix4(Et), this }
    rotateX(e) { return Et.makeRotationX(e), this.applyMatrix4(Et), this }
    rotateY(e) { return Et.makeRotationY(e), this.applyMatrix4(Et), this }
    rotateZ(e) { return Et.makeRotationZ(e), this.applyMatrix4(Et), this }
    translate(e, t, n) { return Et.makeTranslation(e, t, n), this.applyMatrix4(Et), this }
    scale(e, t, n) { return Et.makeScale(e, t, n), this.applyMatrix4(Et), this }
    lookAt(e) { return oo.lookAt(e), oo.updateMatrix(), this.applyMatrix4(oo.matrix), this }
    center() { return this.computeBoundingBox(), this.boundingBox.getCenter(ii).negate(), this.translate(ii.x, ii.y, ii.z), this }
    setFromPoints(e) { const t = []; for (let n = 0, i = e.length; n < i; n++) { const r = e[n];
            t.push(r.x, r.y, r.z || 0) } return this.setAttribute("position", new _e(t, 3)), this }
    computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new Dt); const e = this.attributes.position,
            t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new S(-1 / 0, -1 / 0, -1 / 0), new S(1 / 0, 1 / 0, 1 / 0)); return } if (e !== void 0) { if (this.boundingBox.setFromBufferAttribute(e), t)
                for (let n = 0, i = t.length; n < i; n++) { const r = t[n];
                    St.setFromBufferAttribute(r), this.morphTargetsRelative ? (lt.addVectors(this.boundingBox.min, St.min), this.boundingBox.expandByPoint(lt), lt.addVectors(this.boundingBox.max, St.max), this.boundingBox.expandByPoint(lt)) : (this.boundingBox.expandByPoint(St.min), this.boundingBox.expandByPoint(St.max)) } } else this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this) }
    computeBoundingSphere() { this.boundingSphere === null && (this.boundingSphere = new Rn); const e = this.attributes.position,
            t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new S, 1 / 0); return } if (e) { const n = this.boundingSphere.center; if (St.setFromBufferAttribute(e), t)
                for (let r = 0, s = t.length; r < s; r++) { const a = t[r];
                    Bi.setFromBufferAttribute(a), this.morphTargetsRelative ? (lt.addVectors(St.min, Bi.min), St.expandByPoint(lt), lt.addVectors(St.max, Bi.max), St.expandByPoint(lt)) : (St.expandByPoint(Bi.min), St.expandByPoint(Bi.max)) }
            St.getCenter(n); let i = 0; for (let r = 0, s = e.count; r < s; r++) lt.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(lt)); if (t)
                for (let r = 0, s = t.length; r < s; r++) { const a = t[r],
                        l = this.morphTargetsRelative; for (let c = 0, h = a.count; c < h; c++) lt.fromBufferAttribute(a, c), l && (ii.fromBufferAttribute(e, c), lt.add(ii)), i = Math.max(i, n.distanceToSquared(lt)) }
            this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this) } }
    computeTangents() { const e = this.index,
            t = this.attributes; if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) { console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"); return } const n = e.array,
            i = t.position.array,
            r = t.normal.array,
            s = t.uv.array,
            a = i.length / 3;
        t.tangent === void 0 && this.setAttribute("tangent", new et(new Float32Array(4 * a), 4)); const l = t.tangent.array,
            c = [],
            h = []; for (let B = 0; B < a; B++) c[B] = new S, h[B] = new S; const u = new S,
            d = new S,
            f = new S,
            m = new $,
            x = new $,
            v = new $,
            g = new S,
            p = new S;

        function M(B, _, R) { u.fromArray(i, B * 3), d.fromArray(i, _ * 3), f.fromArray(i, R * 3), m.fromArray(s, B * 2), x.fromArray(s, _ * 2), v.fromArray(s, R * 2), d.sub(u), f.sub(u), x.sub(m), v.sub(m); const D = 1 / (x.x * v.y - v.x * x.y);!isFinite(D) || (g.copy(d).multiplyScalar(v.y).addScaledVector(f, -x.y).multiplyScalar(D), p.copy(f).multiplyScalar(x.x).addScaledVector(d, -v.x).multiplyScalar(D), c[B].add(g), c[_].add(g), c[R].add(g), h[B].add(p), h[_].add(p), h[R].add(p)) } let y = this.groups;
        y.length === 0 && (y = [{ start: 0, count: n.length }]); for (let B = 0, _ = y.length; B < _; ++B) { const R = y[B],
                D = R.start,
                N = R.count; for (let z = D, F = D + N; z < F; z += 3) M(n[z + 0], n[z + 1], n[z + 2]) } const b = new S,
            E = new S,
            C = new S,
            P = new S;

        function H(B) { C.fromArray(r, B * 3), P.copy(C); const _ = c[B];
            b.copy(_), b.sub(C.multiplyScalar(C.dot(_))).normalize(), E.crossVectors(P, _); const D = E.dot(h[B]) < 0 ? -1 : 1;
            l[B * 4] = b.x, l[B * 4 + 1] = b.y, l[B * 4 + 2] = b.z, l[B * 4 + 3] = D } for (let B = 0, _ = y.length; B < _; ++B) { const R = y[B],
                D = R.start,
                N = R.count; for (let z = D, F = D + N; z < F; z += 3) H(n[z + 0]), H(n[z + 1]), H(n[z + 2]) } }
    computeVertexNormals() { const e = this.index,
            t = this.getAttribute("position"); if (t !== void 0) { let n = this.getAttribute("normal"); if (n === void 0) n = new et(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
            else
                for (let d = 0, f = n.count; d < f; d++) n.setXYZ(d, 0, 0, 0); const i = new S,
                r = new S,
                s = new S,
                a = new S,
                l = new S,
                c = new S,
                h = new S,
                u = new S; if (e)
                for (let d = 0, f = e.count; d < f; d += 3) { const m = e.getX(d + 0),
                        x = e.getX(d + 1),
                        v = e.getX(d + 2);
                    i.fromBufferAttribute(t, m), r.fromBufferAttribute(t, x), s.fromBufferAttribute(t, v), h.subVectors(s, r), u.subVectors(i, r), h.cross(u), a.fromBufferAttribute(n, m), l.fromBufferAttribute(n, x), c.fromBufferAttribute(n, v), a.add(h), l.add(h), c.add(h), n.setXYZ(m, a.x, a.y, a.z), n.setXYZ(x, l.x, l.y, l.z), n.setXYZ(v, c.x, c.y, c.z) } else
                    for (let d = 0, f = t.count; d < f; d += 3) i.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), s.fromBufferAttribute(t, d + 2), h.subVectors(s, r), u.subVectors(i, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
            this.normalizeNormals(), n.needsUpdate = !0 } }
    merge(e, t) { if (!(e && e.isBufferGeometry)) { console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e); return }
        t === void 0 && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.")); const n = this.attributes; for (const i in n) { if (e.attributes[i] === void 0) continue; const s = n[i].array,
                a = e.attributes[i],
                l = a.array,
                c = a.itemSize * t,
                h = Math.min(l.length, s.length - c); for (let u = 0, d = c; u < h; u++, d++) s[d] = l[u] } return this }
    normalizeNormals() { const e = this.attributes.normal; for (let t = 0, n = e.count; t < n; t++) lt.fromBufferAttribute(e, t), lt.normalize(), e.setXYZ(t, lt.x, lt.y, lt.z) }
    toNonIndexed() {
        function e(a, l) { const c = a.array,
                h = a.itemSize,
                u = a.normalized,
                d = new c.constructor(l.length * h); let f = 0,
                m = 0; for (let x = 0, v = l.length; x < v; x++) { a.isInterleavedBufferAttribute ? f = l[x] * a.data.stride + a.offset : f = l[x] * h; for (let g = 0; g < h; g++) d[m++] = c[f++] } return new et(d, h, u) } if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; const t = new De,
            n = this.index.array,
            i = this.attributes; for (const a in i) { const l = i[a],
                c = e(l, n);
            t.setAttribute(a, c) } const r = this.morphAttributes; for (const a in r) { const l = [],
                c = r[a]; for (let h = 0, u = c.length; h < u; h++) { const d = c[h],
                    f = e(d, n);
                l.push(f) }
            t.morphAttributes[a] = l }
        t.morphTargetsRelative = this.morphTargetsRelative; const s = this.groups; for (let a = 0, l = s.length; a < l; a++) { const c = s[a];
            t.addGroup(c.start, c.count, c.materialIndex) } return t }
    toJSON() { const e = { metadata: { version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) { const l = this.parameters; for (const c in l) l[c] !== void 0 && (e[c] = l[c]); return e }
        e.data = { attributes: {} }; const t = this.index;
        t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) }); const n = this.attributes; for (const l in n) { const c = n[l];
            e.data.attributes[l] = c.toJSON(e.data) } const i = {}; let r = !1; for (const l in this.morphAttributes) { const c = this.morphAttributes[l],
                h = []; for (let u = 0, d = c.length; u < d; u++) { const f = c[u];
                h.push(f.toJSON(e.data)) }
            h.length > 0 && (i[l] = h, r = !0) }
        r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative); const s = this.groups;
        s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s))); const a = this.boundingSphere; return a !== null && (e.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), e }
    clone() { return new this.constructor().copy(this) }
    copy(e) { this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null; const t = {};
        this.name = e.name; const n = e.index;
        n !== null && this.setIndex(n.clone(t)); const i = e.attributes; for (const c in i) { const h = i[c];
            this.setAttribute(c, h.clone(t)) } const r = e.morphAttributes; for (const c in r) { const h = [],
                u = r[c]; for (let d = 0, f = u.length; d < f; d++) h.push(u[d].clone(t));
            this.morphAttributes[c] = h }
        this.morphTargetsRelative = e.morphTargetsRelative; const s = e.groups; for (let c = 0, h = s.length; c < h; c++) { const u = s[c];
            this.addGroup(u.start, u.count, u.materialIndex) } const a = e.boundingBox;
        a !== null && (this.boundingBox = a.clone()); const l = e.boundingSphere; return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this }
    dispose() { this.dispatchEvent({ type: "dispose" }) } }
De.prototype.isBufferGeometry = !0;
const el = new ge,
    ri = new Kn,
    ao = new Rn,
    dn = new S,
    fn = new S,
    pn = new S,
    lo = new S,
    co = new S,
    ho = new S,
    Er = new S,
    Ar = new S,
    Cr = new S,
    Rr = new $,
    Lr = new $,
    Pr = new $,
    uo = new S,
    Dr = new S;
class pt extends He { constructor(e = new De, t = new Sr) { super();
        this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets() }
    copy(e) { return super.copy(e), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this }
    updateMorphTargets() { const e = this.geometry; if (e.isBufferGeometry) { const t = e.morphAttributes,
                n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, s = i.length; r < s; r++) { const a = i[r].name || String(r);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r } } } } else { const t = e.morphTargets;
            t !== void 0 && t.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.") } }
    raycast(e, t) { const n = this.geometry,
            i = this.material,
            r = this.matrixWorld; if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), ao.copy(n.boundingSphere), ao.applyMatrix4(r), e.ray.intersectsSphere(ao) === !1) || (el.copy(r).invert(), ri.copy(e.ray).applyMatrix4(el), n.boundingBox !== null && ri.intersectsBox(n.boundingBox) === !1)) return; let s; if (n.isBufferGeometry) { const a = n.index,
                l = n.attributes.position,
                c = n.morphAttributes.position,
                h = n.morphTargetsRelative,
                u = n.attributes.uv,
                d = n.attributes.uv2,
                f = n.groups,
                m = n.drawRange; if (a !== null)
                if (Array.isArray(i))
                    for (let x = 0, v = f.length; x < v; x++) { const g = f[x],
                            p = i[g.materialIndex],
                            M = Math.max(g.start, m.start),
                            y = Math.min(a.count, Math.min(g.start + g.count, m.start + m.count)); for (let b = M, E = y; b < E; b += 3) { const C = a.getX(b),
                                P = a.getX(b + 1),
                                H = a.getX(b + 2);
                            s = Ir(this, p, e, ri, l, c, h, u, d, C, P, H), s && (s.faceIndex = Math.floor(b / 3), s.face.materialIndex = g.materialIndex, t.push(s)) } } else { const x = Math.max(0, m.start),
                            v = Math.min(a.count, m.start + m.count); for (let g = x, p = v; g < p; g += 3) { const M = a.getX(g),
                                y = a.getX(g + 1),
                                b = a.getX(g + 2);
                            s = Ir(this, i, e, ri, l, c, h, u, d, M, y, b), s && (s.faceIndex = Math.floor(g / 3), t.push(s)) } } else if (l !== void 0)
                        if (Array.isArray(i))
                            for (let x = 0, v = f.length; x < v; x++) { const g = f[x],
                                    p = i[g.materialIndex],
                                    M = Math.max(g.start, m.start),
                                    y = Math.min(l.count, Math.min(g.start + g.count, m.start + m.count)); for (let b = M, E = y; b < E; b += 3) { const C = b,
                                        P = b + 1,
                                        H = b + 2;
                                    s = Ir(this, p, e, ri, l, c, h, u, d, C, P, H), s && (s.faceIndex = Math.floor(b / 3), s.face.materialIndex = g.materialIndex, t.push(s)) } } else { const x = Math.max(0, m.start),
                                    v = Math.min(l.count, m.start + m.count); for (let g = x, p = v; g < p; g += 3) { const M = g,
                                        y = g + 1,
                                        b = g + 2;
                                    s = Ir(this, i, e, ri, l, c, h, u, d, M, y, b), s && (s.faceIndex = Math.floor(g / 3), t.push(s)) } } } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.") } }
pt.prototype.isMesh = !0;

function yu(o, e, t, n, i, r, s, a) { let l; if (e.side === st ? l = n.intersectTriangle(s, r, i, !0, a) : l = n.intersectTriangle(i, r, s, e.side !== Nn, a), l === null) return null;
    Dr.copy(a), Dr.applyMatrix4(o.matrixWorld); const c = t.ray.origin.distanceTo(Dr); return c < t.near || c > t.far ? null : { distance: c, point: Dr.clone(), object: o } }

function Ir(o, e, t, n, i, r, s, a, l, c, h, u) { dn.fromBufferAttribute(i, c), fn.fromBufferAttribute(i, h), pn.fromBufferAttribute(i, u); const d = o.morphTargetInfluences; if (r && d) { Er.set(0, 0, 0), Ar.set(0, 0, 0), Cr.set(0, 0, 0); for (let m = 0, x = r.length; m < x; m++) { const v = d[m],
                g = r[m];
            v !== 0 && (lo.fromBufferAttribute(g, c), co.fromBufferAttribute(g, h), ho.fromBufferAttribute(g, u), s ? (Er.addScaledVector(lo, v), Ar.addScaledVector(co, v), Cr.addScaledVector(ho, v)) : (Er.addScaledVector(lo.sub(dn), v), Ar.addScaledVector(co.sub(fn), v), Cr.addScaledVector(ho.sub(pn), v))) }
        dn.add(Er), fn.add(Ar), pn.add(Cr) }
    o.isSkinnedMesh && (o.boneTransform(c, dn), o.boneTransform(h, fn), o.boneTransform(u, pn)); const f = yu(o, e, t, n, dn, fn, pn, uo); if (f) { a && (Rr.fromBufferAttribute(a, c), Lr.fromBufferAttribute(a, h), Pr.fromBufferAttribute(a, u), f.uv = tt.getUV(uo, dn, fn, pn, Rr, Lr, Pr, new $)), l && (Rr.fromBufferAttribute(l, c), Lr.fromBufferAttribute(l, h), Pr.fromBufferAttribute(l, u), f.uv2 = tt.getUV(uo, dn, fn, pn, Rr, Lr, Pr, new $)); const m = { a: c, b: h, c: u, normal: new S, materialIndex: 0 };
        tt.getNormal(dn, fn, pn, m.normal), f.face = m } return f }
class Ln extends De { constructor(e = 1, t = 1, n = 1, i = 1, r = 1, s = 1) { super();
        this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: r, depthSegments: s }; const a = this;
        i = Math.floor(i), r = Math.floor(r), s = Math.floor(s); const l = [],
            c = [],
            h = [],
            u = []; let d = 0,
            f = 0;
        m("z", "y", "x", -1, -1, n, t, e, s, r, 0), m("z", "y", "x", 1, -1, n, t, -e, s, r, 1), m("x", "z", "y", 1, 1, e, n, t, i, s, 2), m("x", "z", "y", 1, -1, e, n, -t, i, s, 3), m("x", "y", "z", 1, -1, e, t, n, i, r, 4), m("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new _e(c, 3)), this.setAttribute("normal", new _e(h, 3)), this.setAttribute("uv", new _e(u, 2));

        function m(x, v, g, p, M, y, b, E, C, P, H) { const B = y / C,
                _ = b / P,
                R = y / 2,
                D = b / 2,
                N = E / 2,
                z = C + 1,
                F = P + 1; let W = 0,
                K = 0; const ce = new S; for (let k = 0; k < F; k++) { const Z = k * _ - D; for (let ie = 0; ie < z; ie++) { const de = ie * B - R;
                    ce[x] = de * p, ce[v] = Z * M, ce[g] = N, c.push(ce.x, ce.y, ce.z), ce[x] = 0, ce[v] = 0, ce[g] = E > 0 ? 1 : -1, h.push(ce.x, ce.y, ce.z), u.push(ie / C), u.push(1 - k / P), W += 1 } } for (let k = 0; k < P; k++)
                for (let Z = 0; Z < C; Z++) { const ie = d + Z + z * k,
                        de = d + Z + z * (k + 1),
                        xe = d + (Z + 1) + z * (k + 1),
                        G = d + (Z + 1) + z * k;
                    l.push(ie, de, G), l.push(de, xe, G), K += 6 }
            a.addGroup(f, K, H), f += K, d += W } }
    static fromJSON(e) { return new Ln(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments) } }

function si(o) { const e = {}; for (const t in o) { e[t] = {}; for (const n in o[t]) { const i = o[t][n];
            i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i } } return e }

function mt(o) { const e = {}; for (let t = 0; t < o.length; t++) { const n = si(o[t]); for (const i in n) e[i] = n[i] } return e }
const vu = { clone: si, merge: mt };
var _u = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
    Mu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class mn extends ut { constructor(e) { super();
        this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = _u, this.fragmentShader = Mu, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && (e.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e)) }
    copy(e) { return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = si(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this }
    toJSON(e) { const t = super.toJSON(e);
        t.glslVersion = this.glslVersion, t.uniforms = {}; for (const i in this.uniforms) { const s = this.uniforms[i].value;
            s && s.isTexture ? t.uniforms[i] = { type: "t", value: s.toJSON(e).uuid } : s && s.isColor ? t.uniforms[i] = { type: "c", value: s.getHex() } : s && s.isVector2 ? t.uniforms[i] = { type: "v2", value: s.toArray() } : s && s.isVector3 ? t.uniforms[i] = { type: "v3", value: s.toArray() } : s && s.isVector4 ? t.uniforms[i] = { type: "v4", value: s.toArray() } : s && s.isMatrix3 ? t.uniforms[i] = { type: "m3", value: s.toArray() } : s && s.isMatrix4 ? t.uniforms[i] = { type: "m4", value: s.toArray() } : t.uniforms[i] = { value: s } }
        Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader; const n = {}; for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0); return Object.keys(n).length > 0 && (t.extensions = n), t } }
mn.prototype.isShaderMaterial = !0;
class fo extends He { constructor() { super();
        this.type = "Camera", this.matrixWorldInverse = new ge, this.projectionMatrix = new ge, this.projectionMatrixInverse = new ge }
    copy(e, t) { return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this }
    getWorldDirection(e) { this.updateWorldMatrix(!0, !1); const t = this.matrixWorld.elements; return e.set(-t[8], -t[9], -t[10]).normalize() }
    updateMatrixWorld(e) { super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert() }
    updateWorldMatrix(e, t) { super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert() }
    clone() { return new this.constructor().copy(this) } }
fo.prototype.isCamera = !0;
class yt extends fo { constructor(e = 50, t = 1, n = .1, i = 2e3) { super();
        this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() }
    copy(e, t) { return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this }
    setFocalLength(e) { const t = .5 * this.getFilmHeight() / e;
        this.fov = Vs * 2 * Math.atan(t), this.updateProjectionMatrix() }
    getFocalLength() { const e = Math.tan(mr * .5 * this.fov); return .5 * this.getFilmHeight() / e }
    getEffectiveFOV() { return Vs * 2 * Math.atan(Math.tan(mr * .5 * this.fov) / this.zoom) }
    getFilmWidth() { return this.filmGauge * Math.min(this.aspect, 1) }
    getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1) }
    setViewOffset(e, t, n, i, r, s) { this.aspect = e / t, this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix() }
    clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() }
    updateProjectionMatrix() { const e = this.near; let t = e * Math.tan(mr * .5 * this.fov) / this.zoom,
            n = 2 * t,
            i = this.aspect * n,
            r = -.5 * i; const s = this.view; if (this.view !== null && this.view.enabled) { const l = s.fullWidth,
                c = s.fullHeight;
            r += s.offsetX * i / l, t -= s.offsetY * n / c, i *= s.width / l, n *= s.height / c } const a = this.filmOffset;
        a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() }
    toJSON(e) { const t = super.toJSON(e); return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t } }
yt.prototype.isPerspectiveCamera = !0;
const oi = 90,
    ai = 1;
class po extends He { constructor(e, t, n) { super(); if (this.type = "CubeCamera", n.isWebGLCubeRenderTarget !== !0) { console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."); return }
        this.renderTarget = n; const i = new yt(oi, ai, e, t);
        i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new S(1, 0, 0)), this.add(i); const r = new yt(oi, ai, e, t);
        r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new S(-1, 0, 0)), this.add(r); const s = new yt(oi, ai, e, t);
        s.layers = this.layers, s.up.set(0, 0, 1), s.lookAt(new S(0, 1, 0)), this.add(s); const a = new yt(oi, ai, e, t);
        a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new S(0, -1, 0)), this.add(a); const l = new yt(oi, ai, e, t);
        l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new S(0, 0, 1)), this.add(l); const c = new yt(oi, ai, e, t);
        c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new S(0, 0, -1)), this.add(c) }
    update(e, t) { this.parent === null && this.updateMatrixWorld(); const n = this.renderTarget,
            [i, r, s, a, l, c] = this.children,
            h = e.xr.enabled,
            u = e.getRenderTarget();
        e.xr.enabled = !1; const d = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, r), e.setRenderTarget(n, 2), e.render(t, s), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, l), n.texture.generateMipmaps = d, e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(u), e.xr.enabled = h, n.texture.needsPMREMUpdate = !0 } }
class zi extends ot { constructor(e, t, n, i, r, s, a, l, c, h) { e = e !== void 0 ? e : [], t = t !== void 0 ? t : zn;
        super(e, t, n, i, r, s, a, l, c, h);
        this.flipY = !1 }
    get images() { return this.image }
    set images(e) { this.image = e } }
zi.prototype.isCubeTexture = !0;
class tl extends Tt { constructor(e, t, n) { Number.isInteger(t) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), t = n);
        super(e, e, t);
        t = t || {}, this.texture = new zi(void 0, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : ct }
    fromEquirectangularTexture(e, t) { this.texture.type = t.type, this.texture.format = ft, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter; const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

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
            i = new Ln(5, 5, 5),
            r = new mn({ name: "CubemapFromEquirect", uniforms: si(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: st, blending: nn });
        r.uniforms.tEquirect.value = t; const s = new pt(i, r),
            a = t.minFilter; return t.minFilter === Li && (t.minFilter = ct), new po(1, 10, this).update(e, s), t.minFilter = a, s.geometry.dispose(), s.material.dispose(), this }
    clear(e, t, n, i) { const r = e.getRenderTarget(); for (let s = 0; s < 6; s++) e.setRenderTarget(this, s), e.clear(t, n, i);
        e.setRenderTarget(r) } }
tl.prototype.isWebGLCubeRenderTarget = !0;
const mo = new S,
    bu = new S,
    wu = new at;
class Ht { constructor(e = new S(1, 0, 0), t = 0) { this.normal = e, this.constant = t }
    set(e, t) { return this.normal.copy(e), this.constant = t, this }
    setComponents(e, t, n, i) { return this.normal.set(e, t, n), this.constant = i, this }
    setFromNormalAndCoplanarPoint(e, t) { return this.normal.copy(e), this.constant = -t.dot(this.normal), this }
    setFromCoplanarPoints(e, t, n) { const i = mo.subVectors(n, t).cross(bu.subVectors(e, t)).normalize(); return this.setFromNormalAndCoplanarPoint(i, e), this }
    copy(e) { return this.normal.copy(e.normal), this.constant = e.constant, this }
    normalize() { const e = 1 / this.normal.length(); return this.normal.multiplyScalar(e), this.constant *= e, this }
    negate() { return this.constant *= -1, this.normal.negate(), this }
    distanceToPoint(e) { return this.normal.dot(e) + this.constant }
    distanceToSphere(e) { return this.distanceToPoint(e.center) - e.radius }
    projectPoint(e, t) { return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e) }
    intersectLine(e, t) { const n = e.delta(mo),
            i = this.normal.dot(n); if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null; const r = -(e.start.dot(this.normal) + this.constant) / i; return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start) }
    intersectsLine(e) { const t = this.distanceToPoint(e.start),
            n = this.distanceToPoint(e.end); return t < 0 && n > 0 || n < 0 && t > 0 }
    intersectsBox(e) { return e.intersectsPlane(this) }
    intersectsSphere(e) { return e.intersectsPlane(this) }
    coplanarPoint(e) { return e.copy(this.normal).multiplyScalar(-this.constant) }
    applyMatrix4(e, t) { const n = t || wu.getNormalMatrix(e),
            i = this.coplanarPoint(mo).applyMatrix4(e),
            r = this.normal.applyMatrix3(n).normalize(); return this.constant = -i.dot(r), this }
    translate(e) { return this.constant -= e.dot(this.normal), this }
    equals(e) { return e.normal.equals(this.normal) && e.constant === this.constant }
    clone() { return new this.constructor().copy(this) } }
Ht.prototype.isPlane = !0;
const li = new Rn,
    Fr = new S;
class Nr { constructor(e = new Ht, t = new Ht, n = new Ht, i = new Ht, r = new Ht, s = new Ht) { this.planes = [e, t, n, i, r, s] }
    set(e, t, n, i, r, s) { const a = this.planes; return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this }
    copy(e) { const t = this.planes; for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]); return this }
    setFromProjectionMatrix(e) { const t = this.planes,
            n = e.elements,
            i = n[0],
            r = n[1],
            s = n[2],
            a = n[3],
            l = n[4],
            c = n[5],
            h = n[6],
            u = n[7],
            d = n[8],
            f = n[9],
            m = n[10],
            x = n[11],
            v = n[12],
            g = n[13],
            p = n[14],
            M = n[15]; return t[0].setComponents(a - i, u - l, x - d, M - v).normalize(), t[1].setComponents(a + i, u + l, x + d, M + v).normalize(), t[2].setComponents(a + r, u + c, x + f, M + g).normalize(), t[3].setComponents(a - r, u - c, x - f, M - g).normalize(), t[4].setComponents(a - s, u - h, x - m, M - p).normalize(), t[5].setComponents(a + s, u + h, x + m, M + p).normalize(), this }
    intersectsObject(e) { const t = e.geometry; return t.boundingSphere === null && t.computeBoundingSphere(), li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(li) }
    intersectsSprite(e) { return li.center.set(0, 0, 0), li.radius = .7071067811865476, li.applyMatrix4(e.matrixWorld), this.intersectsSphere(li) }
    intersectsSphere(e) { const t = this.planes,
            n = e.center,
            i = -e.radius; for (let r = 0; r < 6; r++)
            if (t[r].distanceToPoint(n) < i) return !1;
        return !0 }
    intersectsBox(e) { const t = this.planes; for (let n = 0; n < 6; n++) { const i = t[n]; if (Fr.x = i.normal.x > 0 ? e.max.x : e.min.x, Fr.y = i.normal.y > 0 ? e.max.y : e.min.y, Fr.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Fr) < 0) return !1 } return !0 }
    containsPoint(e) { const t = this.planes; for (let n = 0; n < 6; n++)
            if (t[n].distanceToPoint(e) < 0) return !1;
        return !0 }
    clone() { return new this.constructor().copy(this) } }

function nl() { let o = null,
        e = !1,
        t = null,
        n = null;

    function i(r, s) { t(r, s), n = o.requestAnimationFrame(i) } return { start: function() { e !== !0 && t !== null && (n = o.requestAnimationFrame(i), e = !0) }, stop: function() { o.cancelAnimationFrame(n), e = !1 }, setAnimationLoop: function(r) { t = r }, setContext: function(r) { o = r } } }

function Su(o, e) { const t = e.isWebGL2,
        n = new WeakMap;

    function i(c, h) { const u = c.array,
            d = c.usage,
            f = o.createBuffer();
        o.bindBuffer(h, f), o.bufferData(h, u, d), c.onUploadCallback(); let m = 5126; return u instanceof Float32Array ? m = 5126 : u instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : u instanceof Uint16Array ? c.isFloat16BufferAttribute ? t ? m = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : m = 5123 : u instanceof Int16Array ? m = 5122 : u instanceof Uint32Array ? m = 5125 : u instanceof Int32Array ? m = 5124 : u instanceof Int8Array ? m = 5120 : (u instanceof Uint8Array || u instanceof Uint8ClampedArray) && (m = 5121), { buffer: f, type: m, bytesPerElement: u.BYTES_PER_ELEMENT, version: c.version } }

    function r(c, h, u) { const d = h.array,
            f = h.updateRange;
        o.bindBuffer(u, c), f.count === -1 ? o.bufferSubData(u, 0, d) : (t ? o.bufferSubData(u, f.offset * d.BYTES_PER_ELEMENT, d, f.offset, f.count) : o.bufferSubData(u, f.offset * d.BYTES_PER_ELEMENT, d.subarray(f.offset, f.offset + f.count)), f.count = -1) }

    function s(c) { return c.isInterleavedBufferAttribute && (c = c.data), n.get(c) }

    function a(c) { c.isInterleavedBufferAttribute && (c = c.data); const h = n.get(c);
        h && (o.deleteBuffer(h.buffer), n.delete(c)) }

    function l(c, h) { if (c.isGLBufferAttribute) { const d = n.get(c);
            (!d || d.version < c.version) && n.set(c, { buffer: c.buffer, type: c.type, bytesPerElement: c.elementSize, version: c.version }); return }
        c.isInterleavedBufferAttribute && (c = c.data); const u = n.get(c);
        u === void 0 ? n.set(c, i(c, h)) : u.version < c.version && (r(u.buffer, c, h), u.version = c.version) } return { get: s, remove: a, update: l } }
class Oi extends De { constructor(e = 1, t = 1, n = 1, i = 1) { super();
        this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i }; const r = e / 2,
            s = t / 2,
            a = Math.floor(n),
            l = Math.floor(i),
            c = a + 1,
            h = l + 1,
            u = e / a,
            d = t / l,
            f = [],
            m = [],
            x = [],
            v = []; for (let g = 0; g < h; g++) { const p = g * d - s; for (let M = 0; M < c; M++) { const y = M * u - r;
                m.push(y, -p, 0), x.push(0, 0, 1), v.push(M / a), v.push(1 - g / l) } } for (let g = 0; g < l; g++)
            for (let p = 0; p < a; p++) { const M = p + c * g,
                    y = p + c * (g + 1),
                    b = p + 1 + c * (g + 1),
                    E = p + 1 + c * g;
                f.push(M, y, E), f.push(y, b, E) }
        this.setIndex(f), this.setAttribute("position", new _e(m, 3)), this.setAttribute("normal", new _e(x, 3)), this.setAttribute("uv", new _e(v, 2)) }
    static fromJSON(e) { return new Oi(e.width, e.height, e.widthSegments, e.heightSegments) } }
var Tu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
    Eu = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    Au = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
    Cu = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
    Ru = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
    Lu = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
    Pu = "vec3 transformed = vec3( position );",
    Du = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
    Iu = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
    Fu = `#ifdef USE_BUMPMAP
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
    Nu = `#if NUM_CLIPPING_PLANES > 0
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
    Bu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
    zu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
    Ou = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
    Uu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
    Hu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
    Gu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
    ku = `#if defined( USE_COLOR_ALPHA )
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
    Vu = `#define PI 3.141592653589793
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
    Wu = `#ifdef ENVMAP_TYPE_CUBE_UV
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
    qu = `vec3 transformedNormal = objectNormal;
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
    Xu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
    Ju = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
    Yu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
    Zu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
    $u = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    Ku = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
    Qu = `#ifdef USE_ENVMAP
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
    ju = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
    ed = `#ifdef USE_ENVMAP
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
    td = `#ifdef USE_ENVMAP
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
    nd = `#ifdef USE_ENVMAP
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
    id = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
    rd = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
    sd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
    od = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
    ad = `#ifdef USE_GRADIENTMAP
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
    ld = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
    cd = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
    hd = `vec3 diffuse = vec3( 1.0 );
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
    ud = `uniform bool receiveShadow;
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
    dd = `#if defined( USE_ENVMAP )
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
    fd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
    pd = `varying vec3 vViewPosition;
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
    md = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
    gd = `varying vec3 vViewPosition;
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
    xd = `PhysicalMaterial material;
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
    yd = `struct PhysicalMaterial {
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
    vd = `
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
    _d = `#if defined( RE_IndirectDiffuse )
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
    Md = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
    bd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
    wd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
    Sd = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
    Td = `#ifdef USE_LOGDEPTHBUF
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
    Ed = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
    Ad = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
    Cd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
    Rd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    Ld = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
    Pd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
    Dd = `#ifdef USE_MORPHNORMALS
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
    Id = `#ifdef USE_MORPHTARGETS
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
    Fd = `#ifdef USE_MORPHTARGETS
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
    Nd = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
    Bd = `#ifdef OBJECTSPACE_NORMALMAP
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
    zd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    Od = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    Ud = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
    Hd = `#ifdef USE_NORMALMAP
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
    Gd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
    kd = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
    Vd = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
    Wd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
    qd = `vec3 packNormalToRGB( const in vec3 normal ) {
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
    Xd = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
    Jd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
    Yd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
    Zd = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
    $d = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
    Kd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
    Qd = `#ifdef USE_SHADOWMAP
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
    jd = `#ifdef USE_SHADOWMAP
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
    ef = `#ifdef USE_SHADOWMAP
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
    tf = `float getShadowMask() {
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
    nf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
    rf = `#ifdef USE_SKINNING
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
    sf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
    of = `#ifdef USE_SKINNING
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
    af = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
    lf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
    cf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
    hf = `#ifndef saturate
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
    uf = `#ifdef USE_TRANSMISSION
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
    df = `#ifdef USE_TRANSMISSION
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
    ff = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
    pf = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
    mf = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
    gf = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
    xf = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
    yf = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
    vf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const _f = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
    Mf = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    bf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
    wf = `#include <envmap_common_pars_fragment>
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
    Sf = `#include <common>
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
    Tf = `#if DEPTH_PACKING == 3200
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
    Ef = `#define DISTANCE
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
    Af = `#define DISTANCE
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
    Cf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
    Rf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    Lf = `uniform float scale;
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
    Pf = `uniform vec3 diffuse;
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
    Df = `#include <common>
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
    If = `uniform vec3 diffuse;
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
    Ff = `#define LAMBERT
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
    Nf = `uniform vec3 diffuse;
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
    Bf = `#define MATCAP
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
    zf = `#define MATCAP
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
    Of = `#define NORMAL
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
    Uf = `#define NORMAL
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
    Hf = `#define PHONG
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
    Gf = `#define PHONG
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
    kf = `#define STANDARD
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
    Vf = `#define STANDARD
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
    Wf = `#define TOON
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
    qf = `#define TOON
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
    Xf = `uniform float size;
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
    Jf = `uniform vec3 diffuse;
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
    Yf = `#include <common>
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
    Zf = `uniform vec3 color;
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
    $f = `uniform float rotation;
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
    Kf = `uniform vec3 diffuse;
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
    Ie = { alphamap_fragment: Tu, alphamap_pars_fragment: Eu, alphatest_fragment: Au, alphatest_pars_fragment: Cu, aomap_fragment: Ru, aomap_pars_fragment: Lu, begin_vertex: Pu, beginnormal_vertex: Du, bsdfs: Iu, bumpmap_pars_fragment: Fu, clipping_planes_fragment: Nu, clipping_planes_pars_fragment: Bu, clipping_planes_pars_vertex: zu, clipping_planes_vertex: Ou, color_fragment: Uu, color_pars_fragment: Hu, color_pars_vertex: Gu, color_vertex: ku, common: Vu, cube_uv_reflection_fragment: Wu, defaultnormal_vertex: qu, displacementmap_pars_vertex: Xu, displacementmap_vertex: Ju, emissivemap_fragment: Yu, emissivemap_pars_fragment: Zu, encodings_fragment: $u, encodings_pars_fragment: Ku, envmap_fragment: Qu, envmap_common_pars_fragment: ju, envmap_pars_fragment: ed, envmap_pars_vertex: td, envmap_physical_pars_fragment: dd, envmap_vertex: nd, fog_vertex: id, fog_pars_vertex: rd, fog_fragment: sd, fog_pars_fragment: od, gradientmap_pars_fragment: ad, lightmap_fragment: ld, lightmap_pars_fragment: cd, lights_lambert_vertex: hd, lights_pars_begin: ud, lights_toon_fragment: fd, lights_toon_pars_fragment: pd, lights_phong_fragment: md, lights_phong_pars_fragment: gd, lights_physical_fragment: xd, lights_physical_pars_fragment: yd, lights_fragment_begin: vd, lights_fragment_maps: _d, lights_fragment_end: Md, logdepthbuf_fragment: bd, logdepthbuf_pars_fragment: wd, logdepthbuf_pars_vertex: Sd, logdepthbuf_vertex: Td, map_fragment: Ed, map_pars_fragment: Ad, map_particle_fragment: Cd, map_particle_pars_fragment: Rd, metalnessmap_fragment: Ld, metalnessmap_pars_fragment: Pd, morphnormal_vertex: Dd, morphtarget_pars_vertex: Id, morphtarget_vertex: Fd, normal_fragment_begin: Nd, normal_fragment_maps: Bd, normal_pars_fragment: zd, normal_pars_vertex: Od, normal_vertex: Ud, normalmap_pars_fragment: Hd, clearcoat_normal_fragment_begin: Gd, clearcoat_normal_fragment_maps: kd, clearcoat_pars_fragment: Vd, output_fragment: Wd, packing: qd, premultiplied_alpha_fragment: Xd, project_vertex: Jd, dithering_fragment: Yd, dithering_pars_fragment: Zd, roughnessmap_fragment: $d, roughnessmap_pars_fragment: Kd, shadowmap_pars_fragment: Qd, shadowmap_pars_vertex: jd, shadowmap_vertex: ef, shadowmask_pars_fragment: tf, skinbase_vertex: nf, skinning_pars_vertex: rf, skinning_vertex: sf, skinnormal_vertex: of, specularmap_fragment: af, specularmap_pars_fragment: lf, tonemapping_fragment: cf, tonemapping_pars_fragment: hf, transmission_fragment: uf, transmission_pars_fragment: df, uv_pars_fragment: ff, uv_pars_vertex: pf, uv_vertex: mf, uv2_pars_fragment: gf, uv2_pars_vertex: xf, uv2_vertex: yf, worldpos_vertex: vf, background_vert: _f, background_frag: Mf, cube_vert: bf, cube_frag: wf, depth_vert: Sf, depth_frag: Tf, distanceRGBA_vert: Ef, distanceRGBA_frag: Af, equirect_vert: Cf, equirect_frag: Rf, linedashed_vert: Lf, linedashed_frag: Pf, meshbasic_vert: Df, meshbasic_frag: If, meshlambert_vert: Ff, meshlambert_frag: Nf, meshmatcap_vert: Bf, meshmatcap_frag: zf, meshnormal_vert: Of, meshnormal_frag: Uf, meshphong_vert: Hf, meshphong_frag: Gf, meshphysical_vert: kf, meshphysical_frag: Vf, meshtoon_vert: Wf, meshtoon_frag: qf, points_vert: Xf, points_frag: Jf, shadow_vert: Yf, shadow_frag: Zf, sprite_vert: $f, sprite_frag: Kf },
    te = { common: { diffuse: { value: new he(16777215) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new at }, uv2Transform: { value: new at }, alphaMap: { value: null }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } }, emissivemap: { emissiveMap: { value: null } }, bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalScale: { value: new $(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, roughnessmap: { roughnessMap: { value: null } }, metalnessmap: { metalnessMap: { value: null } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new he(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotShadowMap: { value: [] }, spotShadowMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new he(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaTest: { value: 0 }, uvTransform: { value: new at } }, sprite: { diffuse: { value: new he(16777215) }, opacity: { value: 1 }, center: { value: new $(.5, .5) }, rotation: { value: 0 }, map: { value: null }, alphaMap: { value: null }, alphaTest: { value: 0 }, uvTransform: { value: new at } } },
    Gt = { basic: { uniforms: mt([te.common, te.specularmap, te.envmap, te.aomap, te.lightmap, te.fog]), vertexShader: Ie.meshbasic_vert, fragmentShader: Ie.meshbasic_frag }, lambert: { uniforms: mt([te.common, te.specularmap, te.envmap, te.aomap, te.lightmap, te.emissivemap, te.fog, te.lights, { emissive: { value: new he(0) } }]), vertexShader: Ie.meshlambert_vert, fragmentShader: Ie.meshlambert_frag }, phong: { uniforms: mt([te.common, te.specularmap, te.envmap, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.fog, te.lights, { emissive: { value: new he(0) }, specular: { value: new he(1118481) }, shininess: { value: 30 } }]), vertexShader: Ie.meshphong_vert, fragmentShader: Ie.meshphong_frag }, standard: { uniforms: mt([te.common, te.envmap, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.roughnessmap, te.metalnessmap, te.fog, te.lights, { emissive: { value: new he(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ie.meshphysical_vert, fragmentShader: Ie.meshphysical_frag }, toon: { uniforms: mt([te.common, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.gradientmap, te.fog, te.lights, { emissive: { value: new he(0) } }]), vertexShader: Ie.meshtoon_vert, fragmentShader: Ie.meshtoon_frag }, matcap: { uniforms: mt([te.common, te.bumpmap, te.normalmap, te.displacementmap, te.fog, { matcap: { value: null } }]), vertexShader: Ie.meshmatcap_vert, fragmentShader: Ie.meshmatcap_frag }, points: { uniforms: mt([te.points, te.fog]), vertexShader: Ie.points_vert, fragmentShader: Ie.points_frag }, dashed: { uniforms: mt([te.common, te.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ie.linedashed_vert, fragmentShader: Ie.linedashed_frag }, depth: { uniforms: mt([te.common, te.displacementmap]), vertexShader: Ie.depth_vert, fragmentShader: Ie.depth_frag }, normal: { uniforms: mt([te.common, te.bumpmap, te.normalmap, te.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ie.meshnormal_vert, fragmentShader: Ie.meshnormal_frag }, sprite: { uniforms: mt([te.sprite, te.fog]), vertexShader: Ie.sprite_vert, fragmentShader: Ie.sprite_frag }, background: { uniforms: { uvTransform: { value: new at }, t2D: { value: null } }, vertexShader: Ie.background_vert, fragmentShader: Ie.background_frag }, cube: { uniforms: mt([te.envmap, { opacity: { value: 1 } }]), vertexShader: Ie.cube_vert, fragmentShader: Ie.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ie.equirect_vert, fragmentShader: Ie.equirect_frag }, distanceRGBA: { uniforms: mt([te.common, te.displacementmap, { referencePosition: { value: new S }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ie.distanceRGBA_vert, fragmentShader: Ie.distanceRGBA_frag }, shadow: { uniforms: mt([te.lights, te.fog, { color: { value: new he(0) }, opacity: { value: 1 } }]), vertexShader: Ie.shadow_vert, fragmentShader: Ie.shadow_frag } };
Gt.physical = { uniforms: mt([Gt.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatNormalScale: { value: new $(1, 1) }, clearcoatNormalMap: { value: null }, sheen: { value: 0 }, sheenColor: { value: new he(0) }, sheenColorMap: { value: null }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionSamplerSize: { value: new $ }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, attenuationDistance: { value: 0 }, attenuationColor: { value: new he(0) }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularColor: { value: new he(1, 1, 1) }, specularColorMap: { value: null } }]), vertexShader: Ie.meshphysical_vert, fragmentShader: Ie.meshphysical_frag };

function Qf(o, e, t, n, i, r) { const s = new he(0); let a = i === !0 ? 0 : 1,
        l, c, h = null,
        u = 0,
        d = null;

    function f(x, v) { let g = !1,
            p = v.isScene === !0 ? v.background : null;
        p && p.isTexture && (p = e.get(p)); const M = o.xr,
            y = M.getSession && M.getSession();
        y && y.environmentBlendMode === "additive" && (p = null), p === null ? m(s, a) : p && p.isColor && (m(p, 1), g = !0), (o.autoClear || g) && o.clear(o.autoClearColor, o.autoClearDepth, o.autoClearStencil), p && (p.isCubeTexture || p.mapping === Ri) ? (c === void 0 && (c = new pt(new Ln(1, 1, 1), new mn({ name: "BackgroundCubeMaterial", uniforms: si(Gt.cube.uniforms), vertexShader: Gt.cube.vertexShader, fragmentShader: Gt.cube.fragmentShader, side: st, depthTest: !1, depthWrite: !1, fog: !1 })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(b, E, C) { this.matrixWorld.copyPosition(C.matrixWorld) }, Object.defineProperty(c.material, "envMap", { get: function() { return this.uniforms.envMap.value } }), n.update(c)), c.material.uniforms.envMap.value = p, c.material.uniforms.flipEnvMap.value = p.isCubeTexture && p.isRenderTargetTexture === !1 ? -1 : 1, (h !== p || u !== p.version || d !== o.toneMapping) && (c.material.needsUpdate = !0, h = p, u = p.version, d = o.toneMapping), x.unshift(c, c.geometry, c.material, 0, 0, null)) : p && p.isTexture && (l === void 0 && (l = new pt(new Oi(2, 2), new mn({ name: "BackgroundMaterial", uniforms: si(Gt.background.uniforms), vertexShader: Gt.background.vertexShader, fragmentShader: Gt.background.fragmentShader, side: Ai, depthTest: !1, depthWrite: !1, fog: !1 })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function() { return this.uniforms.t2D.value } }), n.update(l)), l.material.uniforms.t2D.value = p, p.matrixAutoUpdate === !0 && p.updateMatrix(), l.material.uniforms.uvTransform.value.copy(p.matrix), (h !== p || u !== p.version || d !== o.toneMapping) && (l.material.needsUpdate = !0, h = p, u = p.version, d = o.toneMapping), x.unshift(l, l.geometry, l.material, 0, 0, null)) }

    function m(x, v) { t.buffers.color.setClear(x.r, x.g, x.b, v, r) } return { getClearColor: function() { return s }, setClearColor: function(x, v = 1) { s.set(x), a = v, m(s, a) }, getClearAlpha: function() { return a }, setClearAlpha: function(x) { a = x, m(s, a) }, render: f } }

function jf(o, e, t, n) { const i = o.getParameter(34921),
        r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
        s = n.isWebGL2 || r !== null,
        a = {},
        l = x(null); let c = l;

    function h(D, N, z, F, W) { let K = !1; if (s) { const ce = m(F, z, N);
            c !== ce && (c = ce, d(c.object)), K = v(F, W), K && g(F, W) } else { const ce = N.wireframe === !0;
            (c.geometry !== F.id || c.program !== z.id || c.wireframe !== ce) && (c.geometry = F.id, c.program = z.id, c.wireframe = ce, K = !0) }
        D.isInstancedMesh === !0 && (K = !0), W !== null && t.update(W, 34963), K && (C(D, N, z, F), W !== null && o.bindBuffer(34963, t.get(W).buffer)) }

    function u() { return n.isWebGL2 ? o.createVertexArray() : r.createVertexArrayOES() }

    function d(D) { return n.isWebGL2 ? o.bindVertexArray(D) : r.bindVertexArrayOES(D) }

    function f(D) { return n.isWebGL2 ? o.deleteVertexArray(D) : r.deleteVertexArrayOES(D) }

    function m(D, N, z) { const F = z.wireframe === !0; let W = a[D.id];
        W === void 0 && (W = {}, a[D.id] = W); let K = W[N.id];
        K === void 0 && (K = {}, W[N.id] = K); let ce = K[F]; return ce === void 0 && (ce = x(u()), K[F] = ce), ce }

    function x(D) { const N = [],
            z = [],
            F = []; for (let W = 0; W < i; W++) N[W] = 0, z[W] = 0, F[W] = 0; return { geometry: null, program: null, wireframe: !1, newAttributes: N, enabledAttributes: z, attributeDivisors: F, object: D, attributes: {}, index: null } }

    function v(D, N) { const z = c.attributes,
            F = D.attributes; let W = 0; for (const K in F) { const ce = z[K],
                k = F[K]; if (ce === void 0 || ce.attribute !== k || ce.data !== k.data) return !0;
            W++ } return c.attributesNum !== W || c.index !== N }

    function g(D, N) { const z = {},
            F = D.attributes; let W = 0; for (const K in F) { const ce = F[K],
                k = {};
            k.attribute = ce, ce.data && (k.data = ce.data), z[K] = k, W++ }
        c.attributes = z, c.attributesNum = W, c.index = N }

    function p() { const D = c.newAttributes; for (let N = 0, z = D.length; N < z; N++) D[N] = 0 }

    function M(D) { y(D, 0) }

    function y(D, N) { const z = c.newAttributes,
            F = c.enabledAttributes,
            W = c.attributeDivisors;
        z[D] = 1, F[D] === 0 && (o.enableVertexAttribArray(D), F[D] = 1), W[D] !== N && ((n.isWebGL2 ? o : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](D, N), W[D] = N) }

    function b() { const D = c.newAttributes,
            N = c.enabledAttributes; for (let z = 0, F = N.length; z < F; z++) N[z] !== D[z] && (o.disableVertexAttribArray(z), N[z] = 0) }

    function E(D, N, z, F, W, K) { n.isWebGL2 === !0 && (z === 5124 || z === 5125) ? o.vertexAttribIPointer(D, N, z, W, K) : o.vertexAttribPointer(D, N, z, F, W, K) }

    function C(D, N, z, F) { if (n.isWebGL2 === !1 && (D.isInstancedMesh || F.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return;
        p(); const W = F.attributes,
            K = z.getAttributes(),
            ce = N.defaultAttributeValues; for (const k in K) { const Z = K[k]; if (Z.location >= 0) { let ie = W[k]; if (ie === void 0 && (k === "instanceMatrix" && D.instanceMatrix && (ie = D.instanceMatrix), k === "instanceColor" && D.instanceColor && (ie = D.instanceColor)), ie !== void 0) { const de = ie.normalized,
                        xe = ie.itemSize,
                        G = t.get(ie); if (G === void 0) continue; const Oe = G.buffer,
                        pe = G.type,
                        we = G.bytesPerElement; if (ie.isInterleavedBufferAttribute) { const ae = ie.data,
                            Re = ae.stride,
                            Se = ie.offset; if (ae && ae.isInstancedInterleavedBuffer) { for (let X = 0; X < Z.locationSize; X++) y(Z.location + X, ae.meshPerAttribute);
                            D.isInstancedMesh !== !0 && F._maxInstanceCount === void 0 && (F._maxInstanceCount = ae.meshPerAttribute * ae.count) } else
                            for (let X = 0; X < Z.locationSize; X++) M(Z.location + X);
                        o.bindBuffer(34962, Oe); for (let X = 0; X < Z.locationSize; X++) E(Z.location + X, xe / Z.locationSize, pe, de, Re * we, (Se + xe / Z.locationSize * X) * we) } else { if (ie.isInstancedBufferAttribute) { for (let ae = 0; ae < Z.locationSize; ae++) y(Z.location + ae, ie.meshPerAttribute);
                            D.isInstancedMesh !== !0 && F._maxInstanceCount === void 0 && (F._maxInstanceCount = ie.meshPerAttribute * ie.count) } else
                            for (let ae = 0; ae < Z.locationSize; ae++) M(Z.location + ae);
                        o.bindBuffer(34962, Oe); for (let ae = 0; ae < Z.locationSize; ae++) E(Z.location + ae, xe / Z.locationSize, pe, de, xe * we, xe / Z.locationSize * ae * we) } } else if (ce !== void 0) { const de = ce[k]; if (de !== void 0) switch (de.length) {
                        case 2:
                            o.vertexAttrib2fv(Z.location, de); break;
                        case 3:
                            o.vertexAttrib3fv(Z.location, de); break;
                        case 4:
                            o.vertexAttrib4fv(Z.location, de); break;
                        default:
                            o.vertexAttrib1fv(Z.location, de) } } } }
        b() }

    function P() { _(); for (const D in a) { const N = a[D]; for (const z in N) { const F = N[z]; for (const W in F) f(F[W].object), delete F[W];
                delete N[z] }
            delete a[D] } }

    function H(D) { if (a[D.id] === void 0) return; const N = a[D.id]; for (const z in N) { const F = N[z]; for (const W in F) f(F[W].object), delete F[W];
            delete N[z] }
        delete a[D.id] }

    function B(D) { for (const N in a) { const z = a[N]; if (z[D.id] === void 0) continue; const F = z[D.id]; for (const W in F) f(F[W].object), delete F[W];
            delete z[D.id] } }

    function _() { R(), c !== l && (c = l, d(c.object)) }

    function R() { l.geometry = null, l.program = null, l.wireframe = !1 } return { setup: h, reset: _, resetDefaultState: R, dispose: P, releaseStatesOfGeometry: H, releaseStatesOfProgram: B, initAttributes: p, enableAttribute: M, disableUnusedAttributes: b } }

function ep(o, e, t, n) { const i = n.isWebGL2; let r;

    function s(c) { r = c }

    function a(c, h) { o.drawArrays(r, c, h), t.update(h, r, 1) }

    function l(c, h, u) { if (u === 0) return; let d, f; if (i) d = o, f = "drawArraysInstanced";
        else if (d = e.get("ANGLE_instanced_arrays"), f = "drawArraysInstancedANGLE", d === null) { console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); return }
        d[f](r, c, h, u), t.update(h, r, u) }
    this.setMode = s, this.render = a, this.renderInstances = l }

function tp(o, e, t) { let n;

    function i() { if (n !== void 0) return n; if (e.has("EXT_texture_filter_anisotropic") === !0) { const C = e.get("EXT_texture_filter_anisotropic");
            n = o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT) } else n = 0; return n }

    function r(C) { if (C === "highp") { if (o.getShaderPrecisionFormat(35633, 36338).precision > 0 && o.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
            C = "mediump" } return C === "mediump" && o.getShaderPrecisionFormat(35633, 36337).precision > 0 && o.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp" } const s = typeof WebGL2RenderingContext != "undefined" && o instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext != "undefined" && o instanceof WebGL2ComputeRenderingContext; let a = t.precision !== void 0 ? t.precision : "highp"; const l = r(a);
    l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a = l); const c = s || e.has("WEBGL_draw_buffers"),
        h = t.logarithmicDepthBuffer === !0,
        u = o.getParameter(34930),
        d = o.getParameter(35660),
        f = o.getParameter(3379),
        m = o.getParameter(34076),
        x = o.getParameter(34921),
        v = o.getParameter(36347),
        g = o.getParameter(36348),
        p = o.getParameter(36349),
        M = d > 0,
        y = s || e.has("OES_texture_float"),
        b = M && y,
        E = s ? o.getParameter(36183) : 0; return { isWebGL2: s, drawBuffers: c, getMaxAnisotropy: i, getMaxPrecision: r, precision: a, logarithmicDepthBuffer: h, maxTextures: u, maxVertexTextures: d, maxTextureSize: f, maxCubemapSize: m, maxAttributes: x, maxVertexUniforms: v, maxVaryings: g, maxFragmentUniforms: p, vertexTextures: M, floatFragmentTextures: y, floatVertexTextures: b, maxSamples: E } }

function np(o) { const e = this; let t = null,
        n = 0,
        i = !1,
        r = !1; const s = new Ht,
        a = new at,
        l = { value: null, needsUpdate: !1 };
    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d, f) { const m = u.length !== 0 || d || n !== 0 || i; return i = d, t = h(u, f, 0), n = u.length, m }, this.beginShadows = function() { r = !0, h(null) }, this.endShadows = function() { r = !1, c() }, this.setState = function(u, d, f) { const m = u.clippingPlanes,
            x = u.clipIntersection,
            v = u.clipShadows,
            g = o.get(u); if (!i || m === null || m.length === 0 || r && !v) r ? h(null) : c();
        else { const p = r ? 0 : n,
                M = p * 4; let y = g.clippingState || null;
            l.value = y, y = h(m, d, M, f); for (let b = 0; b !== M; ++b) y[b] = t[b];
            g.clippingState = y, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += p } };

    function c() { l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0 }

    function h(u, d, f, m) { const x = u !== null ? u.length : 0; let v = null; if (x !== 0) { if (v = l.value, m !== !0 || v === null) { const g = f + x * 4,
                    p = d.matrixWorldInverse;
                a.getNormalMatrix(p), (v === null || v.length < g) && (v = new Float32Array(g)); for (let M = 0, y = f; M !== x; ++M, y += 4) s.copy(u[M]).applyMatrix4(p, a), s.normal.toArray(v, y), v[y + 3] = s.constant }
            l.value = v, l.needsUpdate = !0 } return e.numPlanes = x, e.numIntersection = 0, v } }

function ip(o) { let e = new WeakMap;

    function t(s, a) { return a === sr ? s.mapping = zn : a === or && (s.mapping = On), s }

    function n(s) { if (s && s.isTexture && s.isRenderTargetTexture === !1) { const a = s.mapping; if (a === sr || a === or)
                if (e.has(s)) { const l = e.get(s).texture; return t(l, s.mapping) } else { const l = s.image; if (l && l.height > 0) { const c = new tl(l.height / 2); return c.fromEquirectangularTexture(o, s), e.set(s, c), s.addEventListener("dispose", i), t(c.texture, s.mapping) } else return null } } return s }

    function i(s) { const a = s.target;
        a.removeEventListener("dispose", i); const l = e.get(a);
        l !== void 0 && (e.delete(a), l.dispose()) }

    function r() { e = new WeakMap } return { get: n, dispose: r } }
class Br extends fo { constructor(e = -1, t = 1, n = 1, i = -1, r = .1, s = 2e3) { super();
        this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix() }
    copy(e, t) { return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this }
    setViewOffset(e, t, n, i, r, s) { this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix() }
    clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() }
    updateProjectionMatrix() { const e = (this.right - this.left) / (2 * this.zoom),
            t = (this.top - this.bottom) / (2 * this.zoom),
            n = (this.right + this.left) / 2,
            i = (this.top + this.bottom) / 2; let r = n - e,
            s = n + e,
            a = i + t,
            l = i - t; if (this.view !== null && this.view.enabled) { const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
                h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            r += c * this.view.offsetX, s = r + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height }
        this.projectionMatrix.makeOrthographic(r, s, a, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() }
    toJSON(e) { const t = super.toJSON(e); return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t } }
Br.prototype.isOrthographicCamera = !0;
class Ui extends mn { constructor(e) { super(e);
        this.type = "RawShaderMaterial" } }
Ui.prototype.isRawShaderMaterial = !0;
const ci = 4,
    gn = 8,
    kt = Math.pow(2, gn),
    il = [.125, .215, .35, .446, .526, .582],
    rl = gn - ci + 1 + il.length,
    hi = 20,
    go = new Br,
    { _lodPlanes: Hi, _sizeLods: sl, _sigmas: zr } = rp(),
    ol = new he;
let xo = null;
const Pn = (1 + Math.sqrt(5)) / 2,
    ui = 1 / Pn,
    al = [new S(1, 1, 1), new S(-1, 1, 1), new S(1, 1, -1), new S(-1, 1, -1), new S(0, Pn, ui), new S(0, Pn, -ui), new S(ui, 0, Pn), new S(-ui, 0, Pn), new S(Pn, ui, 0), new S(-Pn, ui, 0)];
class ll { constructor(e) { this._renderer = e, this._pingPongRenderTarget = null, this._blurMaterial = sp(hi), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial) }
    fromScene(e, t = 0, n = .1, i = 100) { xo = this._renderer.getRenderTarget(); const r = this._allocateTargets(); return this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r }
    fromEquirectangular(e, t = null) { return this._fromTexture(e, t) }
    fromCubemap(e, t = null) { return this._fromTexture(e, t) }
    compileCubemapShader() { this._cubemapShader === null && (this._cubemapShader = ul(), this._compileMaterial(this._cubemapShader)) }
    compileEquirectangularShader() { this._equirectShader === null && (this._equirectShader = hl(), this._compileMaterial(this._equirectShader)) }
    dispose() { this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose(), this._cubemapShader !== null && this._cubemapShader.dispose(), this._equirectShader !== null && this._equirectShader.dispose(); for (let e = 0; e < Hi.length; e++) Hi[e].dispose() }
    _cleanup(e) { this._renderer.setRenderTarget(xo), e.scissorTest = !1, Or(e, 0, 0, e.width, e.height) }
    _fromTexture(e, t) { xo = this._renderer.getRenderTarget(); const n = t || this._allocateTargets(e); return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n }
    _allocateTargets(e) { const t = { magFilter: ct, minFilter: ct, generateMipmaps: !1, type: Un, format: ft, encoding: an, depthBuffer: !1 },
            n = cl(t); return n.depthBuffer = !e, this._pingPongRenderTarget === null && (this._pingPongRenderTarget = cl(t)), n }
    _compileMaterial(e) { const t = new pt(Hi[0], e);
        this._renderer.compile(t, go) }
    _sceneToCubeUV(e, t, n, i) { const r = 90,
            s = 1,
            a = new yt(r, s, t, n),
            l = [1, -1, 1, 1, 1, 1],
            c = [1, 1, 1, -1, -1, -1],
            h = this._renderer,
            u = h.autoClear,
            d = h.toneMapping;
        h.getClearColor(ol), h.toneMapping = rn, h.autoClear = !1; const f = new Sr({ name: "PMREM.Background", side: st, depthWrite: !1, depthTest: !1 }),
            m = new pt(new Ln, f); let x = !1; const v = e.background;
        v ? v.isColor && (f.color.copy(v), e.background = null, x = !0) : (f.color.copy(ol), x = !0); for (let g = 0; g < 6; g++) { const p = g % 3;
            p === 0 ? (a.up.set(0, l[g], 0), a.lookAt(c[g], 0, 0)) : p === 1 ? (a.up.set(0, 0, l[g]), a.lookAt(0, c[g], 0)) : (a.up.set(0, l[g], 0), a.lookAt(0, 0, c[g])), Or(i, p * kt, g > 2 ? kt : 0, kt, kt), h.setRenderTarget(i), x && h.render(m, a), h.render(e, a) }
        m.geometry.dispose(), m.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = v }
    _textureToCubeUV(e, t) { const n = this._renderer,
            i = e.mapping === zn || e.mapping === On;
        i ? (this._cubemapShader === null && (this._cubemapShader = ul()), this._cubemapShader.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectShader === null && (this._equirectShader = hl()); const r = i ? this._cubemapShader : this._equirectShader,
            s = new pt(Hi[0], r),
            a = r.uniforms;
        a.envMap.value = e, i || a.texelSize.value.set(1 / e.image.width, 1 / e.image.height), Or(t, 0, 0, 3 * kt, 2 * kt), n.setRenderTarget(t), n.render(s, go) }
    _applyPMREM(e) { const t = this._renderer,
            n = t.autoClear;
        t.autoClear = !1; for (let i = 1; i < rl; i++) { const r = Math.sqrt(zr[i] * zr[i] - zr[i - 1] * zr[i - 1]),
                s = al[(i - 1) % al.length];
            this._blur(e, i - 1, i, r, s) }
        t.autoClear = n }
    _blur(e, t, n, i, r) { const s = this._pingPongRenderTarget;
        this._halfBlur(e, s, t, n, i, "latitudinal", r), this._halfBlur(s, e, n, n, i, "longitudinal", r) }
    _halfBlur(e, t, n, i, r, s, a) { const l = this._renderer,
            c = this._blurMaterial;
        s !== "latitudinal" && s !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!"); const h = 3,
            u = new pt(Hi[i], c),
            d = c.uniforms,
            f = sl[n] - 1,
            m = isFinite(r) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * hi - 1),
            x = r / m,
            v = isFinite(r) ? 1 + Math.floor(h * x) : hi;
        v > hi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${hi}`); const g = []; let p = 0; for (let E = 0; E < hi; ++E) { const C = E / x,
                P = Math.exp(-C * C / 2);
            g.push(P), E === 0 ? p += P : E < v && (p += 2 * P) } for (let E = 0; E < g.length; E++) g[E] = g[E] / p;
        d.envMap.value = e.texture, d.samples.value = v, d.weights.value = g, d.latitudinal.value = s === "latitudinal", a && (d.poleAxis.value = a), d.dTheta.value = m, d.mipInt.value = gn - n; const M = sl[i],
            y = 3 * Math.max(0, kt - 2 * M),
            b = (i === 0 ? 0 : 2 * kt) + 2 * M * (i > gn - ci ? i - gn + ci : 0);
        Or(t, y, b, 3 * M, 2 * M), l.setRenderTarget(t), l.render(u, go) } }

function rp() { const o = [],
        e = [],
        t = []; let n = gn; for (let i = 0; i < rl; i++) { const r = Math.pow(2, n);
        e.push(r); let s = 1 / r;
        i > gn - ci ? s = il[i - gn + ci - 1] : i === 0 && (s = 0), t.push(s); const a = 1 / (r - 1),
            l = -a / 2,
            c = 1 + a / 2,
            h = [l, l, c, l, c, c, l, l, c, c, l, c],
            u = 6,
            d = 6,
            f = 3,
            m = 2,
            x = 1,
            v = new Float32Array(f * d * u),
            g = new Float32Array(m * d * u),
            p = new Float32Array(x * d * u); for (let y = 0; y < u; y++) { const b = y % 3 * 2 / 3 - 1,
                E = y > 2 ? 0 : -1,
                C = [b, E, 0, b + 2 / 3, E, 0, b + 2 / 3, E + 1, 0, b, E, 0, b + 2 / 3, E + 1, 0, b, E + 1, 0];
            v.set(C, f * d * y), g.set(h, m * d * y); const P = [y, y, y, y, y, y];
            p.set(P, x * d * y) } const M = new De;
        M.setAttribute("position", new et(v, f)), M.setAttribute("uv", new et(g, m)), M.setAttribute("faceIndex", new et(p, x)), o.push(M), n > ci && n-- } return { _lodPlanes: o, _sizeLods: e, _sigmas: t } }

function cl(o) { const e = new Tt(3 * kt, 3 * kt, o); return e.texture.mapping = Ri, e.texture.name = "PMREM.cubeUv", e.scissorTest = !0, e }

function Or(o, e, t, n, i) { o.viewport.set(e, t, n, i), o.scissor.set(e, t, n, i) }

function sp(o) { const e = new Float32Array(o),
        t = new S(0, 1, 0); return new Ui({ name: "SphericalGaussianBlur", defines: { n: o }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: e }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: t } }, vertexShader: yo(), fragmentShader: `

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
		`, blending: nn, depthTest: !1, depthWrite: !1 }) }

function hl() { const o = new $(1, 1); return new Ui({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null }, texelSize: { value: o } }, vertexShader: yo(), fragmentShader: `

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
		`, blending: nn, depthTest: !1, depthWrite: !1 }) }

function ul() { return new Ui({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: yo(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: nn, depthTest: !1, depthWrite: !1 }) }

function yo() { return `

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

function op(o) { let e = new WeakMap,
        t = null;

    function n(a) { if (a && a.isTexture) { const l = a.mapping,
                c = l === sr || l === or,
                h = l === zn || l === On; if (c || h)
                if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) { a.needsPMREMUpdate = !1; let u = e.get(a); return t === null && (t = new ll(o)), u = c ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), e.set(a, u), u.texture } else { if (e.has(a)) return e.get(a).texture; { const u = a.image; if (c && u && u.height > 0 || h && u && i(u)) { t === null && (t = new ll(o)); const d = c ? t.fromEquirectangular(a) : t.fromCubemap(a); return e.set(a, d), a.addEventListener("dispose", r), d.texture } else return null } } } return a }

    function i(a) { let l = 0; const c = 6; for (let h = 0; h < c; h++) a[h] !== void 0 && l++; return l === c }

    function r(a) { const l = a.target;
        l.removeEventListener("dispose", r); const c = e.get(l);
        c !== void 0 && (e.delete(l), c.dispose()) }

    function s() { e = new WeakMap, t !== null && (t.dispose(), t = null) } return { get: n, dispose: s } }

function ap(o) { const e = {};

    function t(n) { if (e[n] !== void 0) return e[n]; let i; switch (n) {
            case "WEBGL_depth_texture":
                i = o.getExtension("WEBGL_depth_texture") || o.getExtension("MOZ_WEBGL_depth_texture") || o.getExtension("WEBKIT_WEBGL_depth_texture"); break;
            case "EXT_texture_filter_anisotropic":
                i = o.getExtension("EXT_texture_filter_anisotropic") || o.getExtension("MOZ_EXT_texture_filter_anisotropic") || o.getExtension("WEBKIT_EXT_texture_filter_anisotropic"); break;
            case "WEBGL_compressed_texture_s3tc":
                i = o.getExtension("WEBGL_compressed_texture_s3tc") || o.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"); break;
            case "WEBGL_compressed_texture_pvrtc":
                i = o.getExtension("WEBGL_compressed_texture_pvrtc") || o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"); break;
            default:
                i = o.getExtension(n) } return e[n] = i, i } return { has: function(n) { return t(n) !== null }, init: function(n) { n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture") }, get: function(n) { const i = t(n); return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i } } }

function lp(o, e, t, n) { const i = {},
        r = new WeakMap;

    function s(u) { const d = u.target;
        d.index !== null && e.remove(d.index); for (const m in d.attributes) e.remove(d.attributes[m]);
        d.removeEventListener("dispose", s), delete i[d.id]; const f = r.get(d);
        f && (e.remove(f), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries-- }

    function a(u, d) { return i[d.id] === !0 || (d.addEventListener("dispose", s), i[d.id] = !0, t.memory.geometries++), d }

    function l(u) { const d = u.attributes; for (const m in d) e.update(d[m], 34962); const f = u.morphAttributes; for (const m in f) { const x = f[m]; for (let v = 0, g = x.length; v < g; v++) e.update(x[v], 34962) } }

    function c(u) { const d = [],
            f = u.index,
            m = u.attributes.position; let x = 0; if (f !== null) { const p = f.array;
            x = f.version; for (let M = 0, y = p.length; M < y; M += 3) { const b = p[M + 0],
                    E = p[M + 1],
                    C = p[M + 2];
                d.push(b, E, E, C, C, b) } } else { const p = m.array;
            x = m.version; for (let M = 0, y = p.length / 3 - 1; M < y; M += 3) { const b = M + 0,
                    E = M + 1,
                    C = M + 2;
                d.push(b, E, E, C, C, b) } } const v = new(Ua(d) ? ja : Qa)(d, 1);
        v.version = x; const g = r.get(u);
        g && e.remove(g), r.set(u, v) }

    function h(u) { const d = r.get(u); if (d) { const f = u.index;
            f !== null && d.version < f.version && c(u) } else c(u); return r.get(u) } return { get: a, update: l, getWireframeAttribute: h } }

function cp(o, e, t, n) { const i = n.isWebGL2; let r;

    function s(d) { r = d } let a, l;

    function c(d) { a = d.type, l = d.bytesPerElement }

    function h(d, f) { o.drawElements(r, f, a, d * l), t.update(f, r, 1) }

    function u(d, f, m) { if (m === 0) return; let x, v; if (i) x = o, v = "drawElementsInstanced";
        else if (x = e.get("ANGLE_instanced_arrays"), v = "drawElementsInstancedANGLE", x === null) { console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); return }
        x[v](r, f, a, d * l, m), t.update(f, r, m) }
    this.setMode = s, this.setIndex = c, this.render = h, this.renderInstances = u }

function hp(o) { const e = { geometries: 0, textures: 0 },
        t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };

    function n(r, s, a) { switch (t.calls++, s) {
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
                console.error("THREE.WebGLInfo: Unknown draw mode:", s); break } }

    function i() { t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0 } return { memory: e, render: t, programs: null, autoReset: !0, reset: i, update: n } }
class vo extends ot { constructor(e = null, t = 1, n = 1, i = 1) { super(null);
        this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = it, this.minFilter = it, this.wrapR = _t, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } }
vo.prototype.isDataTexture2DArray = !0;

function up(o, e) { return o[0] - e[0] }

function dp(o, e) { return Math.abs(e[1]) - Math.abs(o[1]) }

function dl(o, e) { let t = 1; const n = e.isInterleavedBufferAttribute ? e.data.array : e.array;
    n instanceof Int8Array ? t = 127 : n instanceof Int16Array ? t = 32767 : n instanceof Int32Array ? t = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", n), o.divideScalar(t) }

function fp(o, e, t) { const n = {},
        i = new Float32Array(8),
        r = new WeakMap,
        s = new S,
        a = []; for (let c = 0; c < 8; c++) a[c] = [c, 0];

    function l(c, h, u, d) { const f = c.morphTargetInfluences; if (e.isWebGL2 === !0) { const m = h.morphAttributes.position.length; let x = r.get(h); if (x === void 0 || x.count !== m) { let R = function() { B.dispose(), r.delete(h), h.removeEventListener("dispose", R) };
                x !== void 0 && x.texture.dispose(); const p = h.morphAttributes.normal !== void 0,
                    M = h.morphAttributes.position,
                    y = h.morphAttributes.normal || [],
                    b = h.attributes.position.count,
                    E = p === !0 ? 2 : 1; let C = b * E,
                    P = 1;
                C > e.maxTextureSize && (P = Math.ceil(C / e.maxTextureSize), C = e.maxTextureSize); const H = new Float32Array(C * P * 4 * m),
                    B = new vo(H, C, P, m);
                B.format = ft, B.type = on, B.needsUpdate = !0; const _ = E * 4; for (let D = 0; D < m; D++) { const N = M[D],
                        z = y[D],
                        F = C * P * 4 * D; for (let W = 0; W < N.count; W++) { s.fromBufferAttribute(N, W), N.normalized === !0 && dl(s, N); const K = W * _;
                        H[F + K + 0] = s.x, H[F + K + 1] = s.y, H[F + K + 2] = s.z, H[F + K + 3] = 0, p === !0 && (s.fromBufferAttribute(z, W), z.normalized === !0 && dl(s, z), H[F + K + 4] = s.x, H[F + K + 5] = s.y, H[F + K + 6] = s.z, H[F + K + 7] = 0) } }
                x = { count: m, texture: B, size: new $(C, P) }, r.set(h, x), h.addEventListener("dispose", R) } let v = 0; for (let p = 0; p < f.length; p++) v += f[p]; const g = h.morphTargetsRelative ? 1 : 1 - v;
            d.getUniforms().setValue(o, "morphTargetBaseInfluence", g), d.getUniforms().setValue(o, "morphTargetInfluences", f), d.getUniforms().setValue(o, "morphTargetsTexture", x.texture, t), d.getUniforms().setValue(o, "morphTargetsTextureSize", x.size) } else { const m = f === void 0 ? 0 : f.length; let x = n[h.id]; if (x === void 0 || x.length !== m) { x = []; for (let y = 0; y < m; y++) x[y] = [y, 0];
                n[h.id] = x } for (let y = 0; y < m; y++) { const b = x[y];
                b[0] = y, b[1] = f[y] }
            x.sort(dp); for (let y = 0; y < 8; y++) y < m && x[y][1] ? (a[y][0] = x[y][0], a[y][1] = x[y][1]) : (a[y][0] = Number.MAX_SAFE_INTEGER, a[y][1] = 0);
            a.sort(up); const v = h.morphAttributes.position,
                g = h.morphAttributes.normal; let p = 0; for (let y = 0; y < 8; y++) { const b = a[y],
                    E = b[0],
                    C = b[1];
                E !== Number.MAX_SAFE_INTEGER && C ? (v && h.getAttribute("morphTarget" + y) !== v[E] && h.setAttribute("morphTarget" + y, v[E]), g && h.getAttribute("morphNormal" + y) !== g[E] && h.setAttribute("morphNormal" + y, g[E]), i[y] = C, p += C) : (v && h.hasAttribute("morphTarget" + y) === !0 && h.deleteAttribute("morphTarget" + y), g && h.hasAttribute("morphNormal" + y) === !0 && h.deleteAttribute("morphNormal" + y), i[y] = 0) } const M = h.morphTargetsRelative ? 1 : 1 - p;
            d.getUniforms().setValue(o, "morphTargetBaseInfluence", M), d.getUniforms().setValue(o, "morphTargetInfluences", i) } } return { update: l } }

function pp(o, e, t, n) { let i = new WeakMap;

    function r(l) { const c = n.render.frame,
            h = l.geometry,
            u = e.get(l, h); return i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), t.update(l.instanceMatrix, 34962), l.instanceColor !== null && t.update(l.instanceColor, 34962)), u }

    function s() { i = new WeakMap }

    function a(l) { const c = l.target;
        c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor) } return { update: r, dispose: s } }
class fl extends ot { constructor(e = null, t = 1, n = 1, i = 1) { super(null);
        this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = it, this.minFilter = it, this.wrapR = _t, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } }
fl.prototype.isDataTexture3D = !0;
const pl = new ot,
    ml = new vo,
    gl = new fl,
    xl = new zi,
    yl = [],
    vl = [],
    _l = new Float32Array(16),
    Ml = new Float32Array(9),
    bl = new Float32Array(4);

function di(o, e, t) { const n = o[0]; if (n <= 0 || n > 0) return o; const i = e * t; let r = yl[i]; if (r === void 0 && (r = new Float32Array(i), yl[i] = r), e !== 0) { n.toArray(r, 0); for (let s = 1, a = 0; s !== e; ++s) a += t, o[s].toArray(r, a) } return r }

function vt(o, e) { if (o.length !== e.length) return !1; for (let t = 0, n = o.length; t < n; t++)
        if (o[t] !== e[t]) return !1;
    return !0 }

function gt(o, e) { for (let t = 0, n = e.length; t < n; t++) o[t] = e[t] }

function Ur(o, e) { let t = vl[e];
    t === void 0 && (t = new Int32Array(e), vl[e] = t); for (let n = 0; n !== e; ++n) t[n] = o.allocateTextureUnit(); return t }

function mp(o, e) { const t = this.cache;
    t[0] !== e && (o.uniform1f(this.addr, e), t[0] = e) }

function gp(o, e) { const t = this.cache; if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y) && (o.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else { if (vt(t, e)) return;
        o.uniform2fv(this.addr, e), gt(t, e) } }

function xp(o, e) { const t = this.cache; if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (o.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else if (e.r !== void 0)(t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (o.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
    else { if (vt(t, e)) return;
        o.uniform3fv(this.addr, e), gt(t, e) } }

function yp(o, e) { const t = this.cache; if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (o.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else { if (vt(t, e)) return;
        o.uniform4fv(this.addr, e), gt(t, e) } }

function vp(o, e) { const t = this.cache,
        n = e.elements; if (n === void 0) { if (vt(t, e)) return;
        o.uniformMatrix2fv(this.addr, !1, e), gt(t, e) } else { if (vt(t, n)) return;
        bl.set(n), o.uniformMatrix2fv(this.addr, !1, bl), gt(t, n) } }

function _p(o, e) { const t = this.cache,
        n = e.elements; if (n === void 0) { if (vt(t, e)) return;
        o.uniformMatrix3fv(this.addr, !1, e), gt(t, e) } else { if (vt(t, n)) return;
        Ml.set(n), o.uniformMatrix3fv(this.addr, !1, Ml), gt(t, n) } }

function Mp(o, e) { const t = this.cache,
        n = e.elements; if (n === void 0) { if (vt(t, e)) return;
        o.uniformMatrix4fv(this.addr, !1, e), gt(t, e) } else { if (vt(t, n)) return;
        _l.set(n), o.uniformMatrix4fv(this.addr, !1, _l), gt(t, n) } }

function bp(o, e) { const t = this.cache;
    t[0] !== e && (o.uniform1i(this.addr, e), t[0] = e) }

function wp(o, e) { const t = this.cache;
    vt(t, e) || (o.uniform2iv(this.addr, e), gt(t, e)) }

function Sp(o, e) { const t = this.cache;
    vt(t, e) || (o.uniform3iv(this.addr, e), gt(t, e)) }

function Tp(o, e) { const t = this.cache;
    vt(t, e) || (o.uniform4iv(this.addr, e), gt(t, e)) }

function Ep(o, e) { const t = this.cache;
    t[0] !== e && (o.uniform1ui(this.addr, e), t[0] = e) }

function Ap(o, e) { const t = this.cache;
    vt(t, e) || (o.uniform2uiv(this.addr, e), gt(t, e)) }

function Cp(o, e) { const t = this.cache;
    vt(t, e) || (o.uniform3uiv(this.addr, e), gt(t, e)) }

function Rp(o, e) { const t = this.cache;
    vt(t, e) || (o.uniform4uiv(this.addr, e), gt(t, e)) }

function Lp(o, e, t) { const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.safeSetTexture2D(e || pl, i) }

function Pp(o, e, t) { const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || gl, i) }

function Dp(o, e, t) { const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.safeSetTextureCube(e || xl, i) }

function Ip(o, e, t) { const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || ml, i) }

function Fp(o) { switch (o) {
        case 5126:
            return mp;
        case 35664:
            return gp;
        case 35665:
            return xp;
        case 35666:
            return yp;
        case 35674:
            return vp;
        case 35675:
            return _p;
        case 35676:
            return Mp;
        case 5124:
        case 35670:
            return bp;
        case 35667:
        case 35671:
            return wp;
        case 35668:
        case 35672:
            return Sp;
        case 35669:
        case 35673:
            return Tp;
        case 5125:
            return Ep;
        case 36294:
            return Ap;
        case 36295:
            return Cp;
        case 36296:
            return Rp;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return Lp;
        case 35679:
        case 36299:
        case 36307:
            return Pp;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return Dp;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return Ip } }

function Np(o, e) { o.uniform1fv(this.addr, e) }

function Bp(o, e) { const t = di(e, this.size, 2);
    o.uniform2fv(this.addr, t) }

function zp(o, e) { const t = di(e, this.size, 3);
    o.uniform3fv(this.addr, t) }

function Op(o, e) { const t = di(e, this.size, 4);
    o.uniform4fv(this.addr, t) }

function Up(o, e) { const t = di(e, this.size, 4);
    o.uniformMatrix2fv(this.addr, !1, t) }

function Hp(o, e) { const t = di(e, this.size, 9);
    o.uniformMatrix3fv(this.addr, !1, t) }

function Gp(o, e) { const t = di(e, this.size, 16);
    o.uniformMatrix4fv(this.addr, !1, t) }

function kp(o, e) { o.uniform1iv(this.addr, e) }

function Vp(o, e) { o.uniform2iv(this.addr, e) }

function Wp(o, e) { o.uniform3iv(this.addr, e) }

function qp(o, e) { o.uniform4iv(this.addr, e) }

function Xp(o, e) { o.uniform1uiv(this.addr, e) }

function Jp(o, e) { o.uniform2uiv(this.addr, e) }

function Yp(o, e) { o.uniform3uiv(this.addr, e) }

function Zp(o, e) { o.uniform4uiv(this.addr, e) }

function $p(o, e, t) { const n = e.length,
        i = Ur(t, n);
    o.uniform1iv(this.addr, i); for (let r = 0; r !== n; ++r) t.safeSetTexture2D(e[r] || pl, i[r]) }

function Kp(o, e, t) { const n = e.length,
        i = Ur(t, n);
    o.uniform1iv(this.addr, i); for (let r = 0; r !== n; ++r) t.setTexture3D(e[r] || gl, i[r]) }

function Qp(o, e, t) { const n = e.length,
        i = Ur(t, n);
    o.uniform1iv(this.addr, i); for (let r = 0; r !== n; ++r) t.safeSetTextureCube(e[r] || xl, i[r]) }

function jp(o, e, t) { const n = e.length,
        i = Ur(t, n);
    o.uniform1iv(this.addr, i); for (let r = 0; r !== n; ++r) t.setTexture2DArray(e[r] || ml, i[r]) }

function em(o) { switch (o) {
        case 5126:
            return Np;
        case 35664:
            return Bp;
        case 35665:
            return zp;
        case 35666:
            return Op;
        case 35674:
            return Up;
        case 35675:
            return Hp;
        case 35676:
            return Gp;
        case 5124:
        case 35670:
            return kp;
        case 35667:
        case 35671:
            return Vp;
        case 35668:
        case 35672:
            return Wp;
        case 35669:
        case 35673:
            return qp;
        case 5125:
            return Xp;
        case 36294:
            return Jp;
        case 36295:
            return Yp;
        case 36296:
            return Zp;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return $p;
        case 35679:
        case 36299:
        case 36307:
            return Kp;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return Qp;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return jp } }

function tm(o, e, t) { this.id = o, this.addr = t, this.cache = [], this.setValue = Fp(e.type) }

function wl(o, e, t) { this.id = o, this.addr = t, this.cache = [], this.size = e.size, this.setValue = em(e.type) }
wl.prototype.updateCache = function(o) { const e = this.cache;
    o instanceof Float32Array && e.length !== o.length && (this.cache = new Float32Array(o.length)), gt(e, o) };

function Sl(o) { this.id = o, this.seq = [], this.map = {} }
Sl.prototype.setValue = function(o, e, t) { const n = this.seq; for (let i = 0, r = n.length; i !== r; ++i) { const s = n[i];
        s.setValue(o, e[s.id], t) } };
const _o = /(\w+)(\])?(\[|\.)?/g;

function Tl(o, e) { o.seq.push(e), o.map[e.id] = e }

function nm(o, e, t) { const n = o.name,
        i = n.length; for (_o.lastIndex = 0;;) { const r = _o.exec(n),
            s = _o.lastIndex; let a = r[1]; const l = r[2] === "]",
            c = r[3]; if (l && (a = a | 0), c === void 0 || c === "[" && s + 2 === i) { Tl(t, c === void 0 ? new tm(a, o, e) : new wl(a, o, e)); break } else { let u = t.map[a];
            u === void 0 && (u = new Sl(a), Tl(t, u)), t = u } } }

function xn(o, e) { this.seq = [], this.map = {}; const t = o.getProgramParameter(e, 35718); for (let n = 0; n < t; ++n) { const i = o.getActiveUniform(e, n),
            r = o.getUniformLocation(e, i.name);
        nm(i, r, this) } }
xn.prototype.setValue = function(o, e, t, n) { const i = this.map[e];
    i !== void 0 && i.setValue(o, t, n) };
xn.prototype.setOptional = function(o, e, t) { const n = e[t];
    n !== void 0 && this.setValue(o, t, n) };
xn.upload = function(o, e, t, n) { for (let i = 0, r = e.length; i !== r; ++i) { const s = e[i],
            a = t[s.id];
        a.needsUpdate !== !1 && s.setValue(o, a.value, n) } };
xn.seqWithValue = function(o, e) { const t = []; for (let n = 0, i = o.length; n !== i; ++n) { const r = o[n];
        r.id in e && t.push(r) } return t };

function El(o, e, t) { const n = o.createShader(e); return o.shaderSource(n, t), o.compileShader(n), n }
let im = 0;

function rm(o) { const e = o.split(`
`); for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t]; return e.join(`
`) }

function sm(o) { switch (o) {
        case an:
            return ["Linear", "( value )"];
        case Ye:
            return ["sRGB", "( value )"];
        default:
            return console.warn("THREE.WebGLProgram: Unsupported encoding:", o), ["Linear", "( value )"] } }

function Al(o, e, t) { const n = o.getShaderParameter(e, 35713),
        i = o.getShaderInfoLog(e).trim(); return n && i === "" ? "" : t.toUpperCase() + `

` + i + `

` + rm(o.getShaderSource(e)) }

function om(o, e) { const t = sm(e); return "vec4 " + o + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }" }

function am(o, e) { let t; switch (e) {
        case Ch:
            t = "Linear"; break;
        case Rh:
            t = "Reinhard"; break;
        case Lh:
            t = "OptimizedCineon"; break;
        case Ph:
            t = "ACESFilmic"; break;
        case Dh:
            t = "Custom"; break;
        default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear" } return "vec3 " + o + "( vec3 color ) { return " + t + "ToneMapping( color ); }" }

function lm(o) { return [o.extensionDerivatives || o.envMapCubeUV || o.bumpMap || o.tangentSpaceNormalMap || o.clearcoatNormalMap || o.flatShading || o.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (o.extensionFragDepth || o.logarithmicDepthBuffer) && o.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", o.extensionDrawBuffers && o.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (o.extensionShaderTextureLOD || o.envMap || o.transmission) && o.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Gi).join(`
`) }

function cm(o) { const e = []; for (const t in o) { const n = o[t];
        n !== !1 && e.push("#define " + t + " " + n) } return e.join(`
`) }

function hm(o, e) { const t = {},
        n = o.getProgramParameter(e, 35721); for (let i = 0; i < n; i++) { const r = o.getActiveAttrib(e, i),
            s = r.name; let a = 1;
        r.type === 35674 && (a = 2), r.type === 35675 && (a = 3), r.type === 35676 && (a = 4), t[s] = { type: r.type, location: o.getAttribLocation(e, s), locationSize: a } } return t }

function Gi(o) { return o !== "" }

function Cl(o, e) { return o.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows) }

function Rl(o, e) { return o.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection) }
const um = /^[ \t]*#include +<([\w\d./]+)>/gm;

function Mo(o) { return o.replace(um, dm) }

function dm(o, e) { const t = Ie[e]; if (t === void 0) throw new Error("Can not resolve #include <" + e + ">"); return Mo(t) }
const fm = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
    pm = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

function Ll(o) { return o.replace(pm, Pl).replace(fm, mm) }

function mm(o, e, t, n) { return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Pl(o, e, t, n) }

function Pl(o, e, t, n) { let i = ""; for (let r = parseInt(e); r < parseInt(t); r++) i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r); return i }

function Dl(o) { let e = "precision " + o.precision + ` float;
precision ` + o.precision + " int;"; return o.precision === "highp" ? e += `
#define HIGH_PRECISION` : o.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : o.precision === "lowp" && (e += `
#define LOW_PRECISION`), e }

function gm(o) { let e = "SHADOWMAP_TYPE_BASIC"; return o.shadowMapType === sa ? e = "SHADOWMAP_TYPE_PCF" : o.shadowMapType === oh ? e = "SHADOWMAP_TYPE_PCF_SOFT" : o.shadowMapType === Ei && (e = "SHADOWMAP_TYPE_VSM"), e }

function xm(o) { let e = "ENVMAP_TYPE_CUBE"; if (o.envMap) switch (o.envMapMode) {
        case zn:
        case On:
            e = "ENVMAP_TYPE_CUBE"; break;
        case Ri:
        case ar:
            e = "ENVMAP_TYPE_CUBE_UV"; break }
    return e }

function ym(o) { let e = "ENVMAP_MODE_REFLECTION"; if (o.envMap) switch (o.envMapMode) {
        case On:
        case ar:
            e = "ENVMAP_MODE_REFRACTION"; break }
    return e }

function vm(o) { let e = "ENVMAP_BLENDING_NONE"; if (o.envMap) switch (o.combine) {
        case rr:
            e = "ENVMAP_BLENDING_MULTIPLY"; break;
        case Eh:
            e = "ENVMAP_BLENDING_MIX"; break;
        case Ah:
            e = "ENVMAP_BLENDING_ADD"; break }
    return e }

function _m(o, e, t, n) { const i = o.getContext(),
        r = t.defines; let s = t.vertexShader,
        a = t.fragmentShader; const l = gm(t),
        c = xm(t),
        h = ym(t),
        u = vm(t),
        d = t.isWebGL2 ? "" : lm(t),
        f = cm(r),
        m = i.createProgram(); let x, v, g = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
    t.isRawShaderMaterial ? (x = [f].filter(Gi).join(`
`), x.length > 0 && (x += `
`), v = [d, f].filter(Gi).join(`
`), v.length > 0 && (v += `
`)) : (x = [Dl(t), "#define SHADER_NAME " + t.shaderName, f, t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define MAX_BONES " + t.maxBones, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.useVertexTexture ? "#define BONE_TEXTURE" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphTargets && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", t.morphTargets && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Gi).join(`
`), v = [d, Dl(t), "#define SHADER_NAME " + t.shaderName, f, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== rn ? "#define TONE_MAPPING" : "", t.toneMapping !== rn ? Ie.tonemapping_pars_fragment : "", t.toneMapping !== rn ? am("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.transparent ? "" : "#define OPAQUE", Ie.encodings_pars_fragment, om("linearToOutputTexel", t.outputEncoding), t.depthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Gi).join(`
`)), s = Mo(s), s = Cl(s, t), s = Rl(s, t), a = Mo(a), a = Cl(a, t), a = Rl(a, t), s = Ll(s), a = Ll(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (g = `#version 300 es
`, x = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + x, v = ["#define varying in", t.glslVersion === za ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === za ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + v); const p = g + x + s,
        M = g + v + a,
        y = El(i, 35633, p),
        b = El(i, 35632, M); if (i.attachShader(m, y), i.attachShader(m, b), t.index0AttributeName !== void 0 ? i.bindAttribLocation(m, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(m, 0, "position"), i.linkProgram(m), o.debug.checkShaderErrors) { const P = i.getProgramInfoLog(m).trim(),
            H = i.getShaderInfoLog(y).trim(),
            B = i.getShaderInfoLog(b).trim(); let _ = !0,
            R = !0; if (i.getProgramParameter(m, 35714) === !1) { _ = !1; const D = Al(i, y, "vertex"),
                N = Al(i, b, "fragment");
            console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(m, 35715) + `

Program Info Log: ` + P + `
` + D + `
` + N) } else P !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", P) : (H === "" || B === "") && (R = !1);
        R && (this.diagnostics = { runnable: _, programLog: P, vertexShader: { log: H, prefix: x }, fragmentShader: { log: B, prefix: v } }) }
    i.deleteShader(y), i.deleteShader(b); let E;
    this.getUniforms = function() { return E === void 0 && (E = new xn(i, m)), E }; let C; return this.getAttributes = function() { return C === void 0 && (C = hm(i, m)), C }, this.destroy = function() { n.releaseStatesOfProgram(this), i.deleteProgram(m), this.program = void 0 }, this.name = t.shaderName, this.id = im++, this.cacheKey = e, this.usedTimes = 1, this.program = m, this.vertexShader = y, this.fragmentShader = b, this }
let Mm = 0;
class bm { constructor() { this.shaderCache = new Map, this.materialCache = new Map }
    update(e) { const t = e.vertexShader,
            n = e.fragmentShader,
            i = this._getShaderStage(t),
            r = this._getShaderStage(n),
            s = this._getShaderCacheForMaterial(e); return s.has(i) === !1 && (s.add(i), i.usedTimes++), s.has(r) === !1 && (s.add(r), r.usedTimes++), this }
    remove(e) { const t = this.materialCache.get(e); for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n); return this.materialCache.delete(e), this }
    getVertexShaderID(e) { return this._getShaderStage(e.vertexShader).id }
    getFragmentShaderID(e) { return this._getShaderStage(e.fragmentShader).id }
    dispose() { this.shaderCache.clear(), this.materialCache.clear() }
    _getShaderCacheForMaterial(e) { const t = this.materialCache; return t.has(e) === !1 && t.set(e, new Set), t.get(e) }
    _getShaderStage(e) { const t = this.shaderCache; if (t.has(e) === !1) { const n = new wm;
            t.set(e, n) } return t.get(e) } }
class wm { constructor() { this.id = Mm++, this.usedTimes = 0 } }

function Sm(o, e, t, n, i, r, s) { const a = new qa,
        l = new bm,
        c = [],
        h = i.isWebGL2,
        u = i.logarithmicDepthBuffer,
        d = i.floatVertexTextures,
        f = i.maxVertexUniforms,
        m = i.vertexTextures; let x = i.precision; const v = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };

    function g(_) { const D = _.skeleton.bones; if (d) return 1024; { const z = Math.floor((f - 20) / 4),
                F = Math.min(z, D.length); return F < D.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + D.length + " bones. This GPU supports " + F + "."), 0) : F } }

    function p(_, R, D, N, z) { const F = N.fog,
            W = _.isMeshStandardMaterial ? N.environment : null,
            K = (_.isMeshStandardMaterial ? t : e).get(_.envMap || W),
            ce = v[_.type],
            k = z.isSkinnedMesh ? g(z) : 0;
        _.precision !== null && (x = i.getMaxPrecision(_.precision), x !== _.precision && console.warn("THREE.WebGLProgram.getParameters:", _.precision, "not supported, using", x, "instead.")); let Z, ie, de, xe; if (ce) { const ae = Gt[ce];
            Z = ae.vertexShader, ie = ae.fragmentShader } else Z = _.vertexShader, ie = _.fragmentShader, l.update(_), de = l.getVertexShaderID(_), xe = l.getFragmentShaderID(_); const G = o.getRenderTarget(),
            Oe = _.alphaTest > 0,
            pe = _.clearcoat > 0; return { isWebGL2: h, shaderID: ce, shaderName: _.type, vertexShader: Z, fragmentShader: ie, defines: _.defines, customVertexShaderID: de, customFragmentShaderID: xe, isRawShaderMaterial: _.isRawShaderMaterial === !0, glslVersion: _.glslVersion, precision: x, instancing: z.isInstancedMesh === !0, instancingColor: z.isInstancedMesh === !0 && z.instanceColor !== null, supportsVertexTextures: m, outputEncoding: G === null ? o.outputEncoding : G.isXRRenderTarget === !0 ? G.texture.encoding : an, map: !!_.map, matcap: !!_.matcap, envMap: !!K, envMapMode: K && K.mapping, envMapCubeUV: !!K && (K.mapping === Ri || K.mapping === ar), lightMap: !!_.lightMap, aoMap: !!_.aoMap, emissiveMap: !!_.emissiveMap, bumpMap: !!_.bumpMap, normalMap: !!_.normalMap, objectSpaceNormalMap: _.normalMapType === eu, tangentSpaceNormalMap: _.normalMapType === Wn, decodeVideoTexture: !!_.map && _.map.isVideoTexture === !0 && _.map.encoding === Ye, clearcoat: pe, clearcoatMap: pe && !!_.clearcoatMap, clearcoatRoughnessMap: pe && !!_.clearcoatRoughnessMap, clearcoatNormalMap: pe && !!_.clearcoatNormalMap, displacementMap: !!_.displacementMap, roughnessMap: !!_.roughnessMap, metalnessMap: !!_.metalnessMap, specularMap: !!_.specularMap, specularIntensityMap: !!_.specularIntensityMap, specularColorMap: !!_.specularColorMap, transparent: _.transparent, alphaMap: !!_.alphaMap, alphaTest: Oe, gradientMap: !!_.gradientMap, sheen: _.sheen > 0, sheenColorMap: !!_.sheenColorMap, sheenRoughnessMap: !!_.sheenRoughnessMap, transmission: _.transmission > 0, transmissionMap: !!_.transmissionMap, thicknessMap: !!_.thicknessMap, combine: _.combine, vertexTangents: !!_.normalMap && !!z.geometry && !!z.geometry.attributes.tangent, vertexColors: _.vertexColors, vertexAlphas: _.vertexColors === !0 && !!z.geometry && !!z.geometry.attributes.color && z.geometry.attributes.color.itemSize === 4, vertexUvs: !!_.map || !!_.bumpMap || !!_.normalMap || !!_.specularMap || !!_.alphaMap || !!_.emissiveMap || !!_.roughnessMap || !!_.metalnessMap || !!_.clearcoatMap || !!_.clearcoatRoughnessMap || !!_.clearcoatNormalMap || !!_.displacementMap || !!_.transmissionMap || !!_.thicknessMap || !!_.specularIntensityMap || !!_.specularColorMap || !!_.sheenColorMap || !!_.sheenRoughnessMap, uvsVertexOnly: !(!!_.map || !!_.bumpMap || !!_.normalMap || !!_.specularMap || !!_.alphaMap || !!_.emissiveMap || !!_.roughnessMap || !!_.metalnessMap || !!_.clearcoatNormalMap || _.transmission > 0 || !!_.transmissionMap || !!_.thicknessMap || !!_.specularIntensityMap || !!_.specularColorMap || _.sheen > 0 || !!_.sheenColorMap || !!_.sheenRoughnessMap) && !!_.displacementMap, fog: !!F, useFog: _.fog, fogExp2: F && F.isFogExp2, flatShading: !!_.flatShading, sizeAttenuation: _.sizeAttenuation, logarithmicDepthBuffer: u, skinning: z.isSkinnedMesh === !0 && k > 0, maxBones: k, useVertexTexture: d, morphTargets: !!z.geometry && !!z.geometry.morphAttributes.position, morphNormals: !!z.geometry && !!z.geometry.morphAttributes.normal, morphTargetsCount: !!z.geometry && !!z.geometry.morphAttributes.position ? z.geometry.morphAttributes.position.length : 0, numDirLights: R.directional.length, numPointLights: R.point.length, numSpotLights: R.spot.length, numRectAreaLights: R.rectArea.length, numHemiLights: R.hemi.length, numDirLightShadows: R.directionalShadowMap.length, numPointLightShadows: R.pointShadowMap.length, numSpotLightShadows: R.spotShadowMap.length, numClippingPlanes: s.numPlanes, numClipIntersection: s.numIntersection, dithering: _.dithering, shadowMapEnabled: o.shadowMap.enabled && D.length > 0, shadowMapType: o.shadowMap.type, toneMapping: _.toneMapped ? o.toneMapping : rn, physicallyCorrectLights: o.physicallyCorrectLights, premultipliedAlpha: _.premultipliedAlpha, doubleSided: _.side === Nn, flipSided: _.side === st, depthPacking: _.depthPacking !== void 0 ? _.depthPacking : !1, index0AttributeName: _.index0AttributeName, extensionDerivatives: _.extensions && _.extensions.derivatives, extensionFragDepth: _.extensions && _.extensions.fragDepth, extensionDrawBuffers: _.extensions && _.extensions.drawBuffers, extensionShaderTextureLOD: _.extensions && _.extensions.shaderTextureLOD, rendererExtensionFragDepth: h || n.has("EXT_frag_depth"), rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"), customProgramCacheKey: _.customProgramCacheKey() } }

    function M(_) { const R = []; if (_.shaderID ? R.push(_.shaderID) : (R.push(_.customVertexShaderID), R.push(_.customFragmentShaderID)), _.defines !== void 0)
            for (const D in _.defines) R.push(D), R.push(_.defines[D]); return _.isRawShaderMaterial === !1 && (y(R, _), b(R, _), R.push(o.outputEncoding)), R.push(_.customProgramCacheKey), R.join() }

    function y(_, R) { _.push(R.precision), _.push(R.outputEncoding), _.push(R.envMapMode), _.push(R.combine), _.push(R.vertexUvs), _.push(R.fogExp2), _.push(R.sizeAttenuation), _.push(R.maxBones), _.push(R.morphTargetsCount), _.push(R.numDirLights), _.push(R.numPointLights), _.push(R.numSpotLights), _.push(R.numHemiLights), _.push(R.numRectAreaLights), _.push(R.numDirLightShadows), _.push(R.numPointLightShadows), _.push(R.numSpotLightShadows), _.push(R.shadowMapType), _.push(R.toneMapping), _.push(R.numClippingPlanes), _.push(R.numClipIntersection) }

    function b(_, R) { a.disableAll(), R.isWebGL2 && a.enable(0), R.supportsVertexTextures && a.enable(1), R.instancing && a.enable(2), R.instancingColor && a.enable(3), R.map && a.enable(4), R.matcap && a.enable(5), R.envMap && a.enable(6), R.envMapCubeUV && a.enable(7), R.lightMap && a.enable(8), R.aoMap && a.enable(9), R.emissiveMap && a.enable(10), R.bumpMap && a.enable(11), R.normalMap && a.enable(12), R.objectSpaceNormalMap && a.enable(13), R.tangentSpaceNormalMap && a.enable(14), R.clearcoat && a.enable(15), R.clearcoatMap && a.enable(16), R.clearcoatRoughnessMap && a.enable(17), R.clearcoatNormalMap && a.enable(18), R.displacementMap && a.enable(19), R.specularMap && a.enable(20), R.roughnessMap && a.enable(21), R.metalnessMap && a.enable(22), R.gradientMap && a.enable(23), R.alphaMap && a.enable(24), R.alphaTest && a.enable(25), R.vertexColors && a.enable(26), R.vertexAlphas && a.enable(27), R.vertexUvs && a.enable(28), R.vertexTangents && a.enable(29), R.uvsVertexOnly && a.enable(30), R.fog && a.enable(31), _.push(a.mask), a.disableAll(), R.useFog && a.enable(0), R.flatShading && a.enable(1), R.logarithmicDepthBuffer && a.enable(2), R.skinning && a.enable(3), R.useVertexTexture && a.enable(4), R.morphTargets && a.enable(5), R.morphNormals && a.enable(6), R.premultipliedAlpha && a.enable(7), R.shadowMapEnabled && a.enable(8), R.physicallyCorrectLights && a.enable(9), R.doubleSided && a.enable(10), R.flipSided && a.enable(11), R.depthPacking && a.enable(12), R.dithering && a.enable(13), R.specularIntensityMap && a.enable(14), R.specularColorMap && a.enable(15), R.transmission && a.enable(16), R.transmissionMap && a.enable(17), R.thicknessMap && a.enable(18), R.sheen && a.enable(19), R.sheenColorMap && a.enable(20), R.sheenRoughnessMap && a.enable(21), R.decodeVideoTexture && a.enable(22), R.transparent && a.enable(23), _.push(a.mask) }

    function E(_) { const R = v[_.type]; let D; if (R) { const N = Gt[R];
            D = vu.clone(N.uniforms) } else D = _.uniforms; return D }

    function C(_, R) { let D; for (let N = 0, z = c.length; N < z; N++) { const F = c[N]; if (F.cacheKey === R) { D = F, ++D.usedTimes; break } } return D === void 0 && (D = new _m(o, R, _, r), c.push(D)), D }

    function P(_) { if (--_.usedTimes == 0) { const R = c.indexOf(_);
            c[R] = c[c.length - 1], c.pop(), _.destroy() } }

    function H(_) { l.remove(_) }

    function B() { l.dispose() } return { getParameters: p, getProgramCacheKey: M, getUniforms: E, acquireProgram: C, releaseProgram: P, releaseShaderCache: H, programs: c, dispose: B } }

function Tm() { let o = new WeakMap;

    function e(r) { let s = o.get(r); return s === void 0 && (s = {}, o.set(r, s)), s }

    function t(r) { o.delete(r) }

    function n(r, s, a) { o.get(r)[s] = a }

    function i() { o = new WeakMap } return { get: e, remove: t, update: n, dispose: i } }

function Em(o, e) { return o.groupOrder !== e.groupOrder ? o.groupOrder - e.groupOrder : o.renderOrder !== e.renderOrder ? o.renderOrder - e.renderOrder : o.material.id !== e.material.id ? o.material.id - e.material.id : o.z !== e.z ? o.z - e.z : o.id - e.id }

function Il(o, e) { return o.groupOrder !== e.groupOrder ? o.groupOrder - e.groupOrder : o.renderOrder !== e.renderOrder ? o.renderOrder - e.renderOrder : o.z !== e.z ? e.z - o.z : o.id - e.id }

function Fl() { const o = []; let e = 0; const t = [],
        n = [],
        i = [];

    function r() { e = 0, t.length = 0, n.length = 0, i.length = 0 }

    function s(u, d, f, m, x, v) { let g = o[e]; return g === void 0 ? (g = { id: u.id, object: u, geometry: d, material: f, groupOrder: m, renderOrder: u.renderOrder, z: x, group: v }, o[e] = g) : (g.id = u.id, g.object = u, g.geometry = d, g.material = f, g.groupOrder = m, g.renderOrder = u.renderOrder, g.z = x, g.group = v), e++, g }

    function a(u, d, f, m, x, v) { const g = s(u, d, f, m, x, v);
        f.transmission > 0 ? n.push(g) : f.transparent === !0 ? i.push(g) : t.push(g) }

    function l(u, d, f, m, x, v) { const g = s(u, d, f, m, x, v);
        f.transmission > 0 ? n.unshift(g) : f.transparent === !0 ? i.unshift(g) : t.unshift(g) }

    function c(u, d) { t.length > 1 && t.sort(u || Em), n.length > 1 && n.sort(d || Il), i.length > 1 && i.sort(d || Il) }

    function h() { for (let u = e, d = o.length; u < d; u++) { const f = o[u]; if (f.id === null) break;
            f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null } } return { opaque: t, transmissive: n, transparent: i, init: r, push: a, unshift: l, finish: h, sort: c } }

function Am() { let o = new WeakMap;

    function e(n, i) { let r; return o.has(n) === !1 ? (r = new Fl, o.set(n, [r])) : i >= o.get(n).length ? (r = new Fl, o.get(n).push(r)) : r = o.get(n)[i], r }

    function t() { o = new WeakMap } return { get: e, dispose: t } }

function Cm() { const o = {}; return { get: function(e) { if (o[e.id] !== void 0) return o[e.id]; let t; switch (e.type) {
                case "DirectionalLight":
                    t = { direction: new S, color: new he }; break;
                case "SpotLight":
                    t = { position: new S, direction: new S, color: new he, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 }; break;
                case "PointLight":
                    t = { position: new S, color: new he, distance: 0, decay: 0 }; break;
                case "HemisphereLight":
                    t = { direction: new S, skyColor: new he, groundColor: new he }; break;
                case "RectAreaLight":
                    t = { color: new he, position: new S, halfWidth: new S, halfHeight: new S }; break } return o[e.id] = t, t } } }

function Rm() { const o = {}; return { get: function(e) { if (o[e.id] !== void 0) return o[e.id]; let t; switch (e.type) {
                case "DirectionalLight":
                    t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new $ }; break;
                case "SpotLight":
                    t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new $ }; break;
                case "PointLight":
                    t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new $, shadowCameraNear: 1, shadowCameraFar: 1e3 }; break } return o[e.id] = t, t } } }
let Lm = 0;

function Pm(o, e) { return (e.castShadow ? 1 : 0) - (o.castShadow ? 1 : 0) }

function Dm(o, e) { const t = new Cm,
        n = Rm(),
        i = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotShadow: [], spotShadowMap: [], spotShadowMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [] }; for (let h = 0; h < 9; h++) i.probe.push(new S); const r = new S,
        s = new ge,
        a = new ge;

    function l(h, u) { let d = 0,
            f = 0,
            m = 0; for (let H = 0; H < 9; H++) i.probe[H].set(0, 0, 0); let x = 0,
            v = 0,
            g = 0,
            p = 0,
            M = 0,
            y = 0,
            b = 0,
            E = 0;
        h.sort(Pm); const C = u !== !0 ? Math.PI : 1; for (let H = 0, B = h.length; H < B; H++) { const _ = h[H],
                R = _.color,
                D = _.intensity,
                N = _.distance,
                z = _.shadow && _.shadow.map ? _.shadow.map.texture : null; if (_.isAmbientLight) d += R.r * D * C, f += R.g * D * C, m += R.b * D * C;
            else if (_.isLightProbe)
                for (let F = 0; F < 9; F++) i.probe[F].addScaledVector(_.sh.coefficients[F], D);
            else if (_.isDirectionalLight) { const F = t.get(_); if (F.color.copy(_.color).multiplyScalar(_.intensity * C), _.castShadow) { const W = _.shadow,
                        K = n.get(_);
                    K.shadowBias = W.bias, K.shadowNormalBias = W.normalBias, K.shadowRadius = W.radius, K.shadowMapSize = W.mapSize, i.directionalShadow[x] = K, i.directionalShadowMap[x] = z, i.directionalShadowMatrix[x] = _.shadow.matrix, y++ }
                i.directional[x] = F, x++ } else if (_.isSpotLight) { const F = t.get(_); if (F.position.setFromMatrixPosition(_.matrixWorld), F.color.copy(R).multiplyScalar(D * C), F.distance = N, F.coneCos = Math.cos(_.angle), F.penumbraCos = Math.cos(_.angle * (1 - _.penumbra)), F.decay = _.decay, _.castShadow) { const W = _.shadow,
                        K = n.get(_);
                    K.shadowBias = W.bias, K.shadowNormalBias = W.normalBias, K.shadowRadius = W.radius, K.shadowMapSize = W.mapSize, i.spotShadow[g] = K, i.spotShadowMap[g] = z, i.spotShadowMatrix[g] = _.shadow.matrix, E++ }
                i.spot[g] = F, g++ } else if (_.isRectAreaLight) { const F = t.get(_);
                F.color.copy(R).multiplyScalar(D), F.halfWidth.set(_.width * .5, 0, 0), F.halfHeight.set(0, _.height * .5, 0), i.rectArea[p] = F, p++ } else if (_.isPointLight) { const F = t.get(_); if (F.color.copy(_.color).multiplyScalar(_.intensity * C), F.distance = _.distance, F.decay = _.decay, _.castShadow) { const W = _.shadow,
                        K = n.get(_);
                    K.shadowBias = W.bias, K.shadowNormalBias = W.normalBias, K.shadowRadius = W.radius, K.shadowMapSize = W.mapSize, K.shadowCameraNear = W.camera.near, K.shadowCameraFar = W.camera.far, i.pointShadow[v] = K, i.pointShadowMap[v] = z, i.pointShadowMatrix[v] = _.shadow.matrix, b++ }
                i.point[v] = F, v++ } else if (_.isHemisphereLight) { const F = t.get(_);
                F.skyColor.copy(_.color).multiplyScalar(D * C), F.groundColor.copy(_.groundColor).multiplyScalar(D * C), i.hemi[M] = F, M++ } }
        p > 0 && (e.isWebGL2 || o.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = te.LTC_FLOAT_1, i.rectAreaLTC2 = te.LTC_FLOAT_2) : o.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = te.LTC_HALF_1, i.rectAreaLTC2 = te.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = f, i.ambient[2] = m; const P = i.hash;
        (P.directionalLength !== x || P.pointLength !== v || P.spotLength !== g || P.rectAreaLength !== p || P.hemiLength !== M || P.numDirectionalShadows !== y || P.numPointShadows !== b || P.numSpotShadows !== E) && (i.directional.length = x, i.spot.length = g, i.rectArea.length = p, i.point.length = v, i.hemi.length = M, i.directionalShadow.length = y, i.directionalShadowMap.length = y, i.pointShadow.length = b, i.pointShadowMap.length = b, i.spotShadow.length = E, i.spotShadowMap.length = E, i.directionalShadowMatrix.length = y, i.pointShadowMatrix.length = b, i.spotShadowMatrix.length = E, P.directionalLength = x, P.pointLength = v, P.spotLength = g, P.rectAreaLength = p, P.hemiLength = M, P.numDirectionalShadows = y, P.numPointShadows = b, P.numSpotShadows = E, i.version = Lm++) }

    function c(h, u) { let d = 0,
            f = 0,
            m = 0,
            x = 0,
            v = 0; const g = u.matrixWorldInverse; for (let p = 0, M = h.length; p < M; p++) { const y = h[p]; if (y.isDirectionalLight) { const b = i.directional[d];
                b.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(g), d++ } else if (y.isSpotLight) { const b = i.spot[m];
                b.position.setFromMatrixPosition(y.matrixWorld), b.position.applyMatrix4(g), b.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(g), m++ } else if (y.isRectAreaLight) { const b = i.rectArea[x];
                b.position.setFromMatrixPosition(y.matrixWorld), b.position.applyMatrix4(g), a.identity(), s.copy(y.matrixWorld), s.premultiply(g), a.extractRotation(s), b.halfWidth.set(y.width * .5, 0, 0), b.halfHeight.set(0, y.height * .5, 0), b.halfWidth.applyMatrix4(a), b.halfHeight.applyMatrix4(a), x++ } else if (y.isPointLight) { const b = i.point[f];
                b.position.setFromMatrixPosition(y.matrixWorld), b.position.applyMatrix4(g), f++ } else if (y.isHemisphereLight) { const b = i.hemi[v];
                b.direction.setFromMatrixPosition(y.matrixWorld), b.direction.transformDirection(g), b.direction.normalize(), v++ } } } return { setup: l, setupView: c, state: i } }

function Nl(o, e) { const t = new Dm(o, e),
        n = [],
        i = [];

    function r() { n.length = 0, i.length = 0 }

    function s(u) { n.push(u) }

    function a(u) { i.push(u) }

    function l(u) { t.setup(n, u) }

    function c(u) { t.setupView(n, u) } return { init: r, state: { lightsArray: n, shadowsArray: i, lights: t }, setupLights: l, setupLightsView: c, pushLight: s, pushShadow: a } }

function Im(o, e) { let t = new WeakMap;

    function n(r, s = 0) { let a; return t.has(r) === !1 ? (a = new Nl(o, e), t.set(r, [a])) : s >= t.get(r).length ? (a = new Nl(o, e), t.get(r).push(a)) : a = t.get(r)[s], a }

    function i() { t = new WeakMap } return { get: n, dispose: i } }
class bo extends ut { constructor(e) { super();
        this.type = "MeshDepthMaterial", this.depthPacking = Qh, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e) }
    copy(e) { return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this } }
bo.prototype.isMeshDepthMaterial = !0;
class wo extends ut { constructor(e) { super();
        this.type = "MeshDistanceMaterial", this.referencePosition = new S, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e) }
    copy(e) { return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this } }
wo.prototype.isMeshDistanceMaterial = !0;
const Fm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
    Nm = `uniform sampler2D shadow_pass;
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

function Bl(o, e, t) { let n = new Nr; const i = new $,
        r = new $,
        s = new We,
        a = new bo({ depthPacking: jh }),
        l = new wo,
        c = {},
        h = t.maxTextureSize,
        u = { 0: st, 1: Ai, 2: Nn },
        d = new mn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new $ }, radius: { value: 4 } }, vertexShader: Fm, fragmentShader: Nm }),
        f = d.clone();
    f.defines.HORIZONTAL_PASS = 1; const m = new De;
    m.setAttribute("position", new et(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); const x = new pt(m, d),
        v = this;
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = sa, this.render = function(y, b, E) { if (v.enabled === !1 || v.autoUpdate === !1 && v.needsUpdate === !1 || y.length === 0) return; const C = o.getRenderTarget(),
            P = o.getActiveCubeFace(),
            H = o.getActiveMipmapLevel(),
            B = o.state;
        B.setBlending(nn), B.buffers.color.setClear(1, 1, 1, 1), B.buffers.depth.setTest(!0), B.setScissorTest(!1); for (let _ = 0, R = y.length; _ < R; _++) { const D = y[_],
                N = D.shadow; if (N === void 0) { console.warn("THREE.WebGLShadowMap:", D, "has no shadow."); continue } if (N.autoUpdate === !1 && N.needsUpdate === !1) continue;
            i.copy(N.mapSize); const z = N.getFrameExtents(); if (i.multiply(z), r.copy(N.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / z.x), i.x = r.x * z.x, N.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / z.y), i.y = r.y * z.y, N.mapSize.y = r.y)), N.map === null && !N.isPointLightShadow && this.type === Ei) { const W = { minFilter: ct, magFilter: ct, format: ft };
                N.map = new Tt(i.x, i.y, W), N.map.texture.name = D.name + ".shadowMap", N.mapPass = new Tt(i.x, i.y, W), N.camera.updateProjectionMatrix() } if (N.map === null) { const W = { minFilter: it, magFilter: it, format: ft };
                N.map = new Tt(i.x, i.y, W), N.map.texture.name = D.name + ".shadowMap", N.camera.updateProjectionMatrix() }
            o.setRenderTarget(N.map), o.clear(); const F = N.getViewportCount(); for (let W = 0; W < F; W++) { const K = N.getViewport(W);
                s.set(r.x * K.x, r.y * K.y, r.x * K.z, r.y * K.w), B.viewport(s), N.updateMatrices(D, W), n = N.getFrustum(), M(b, E, N.camera, D, this.type) }!N.isPointLightShadow && this.type === Ei && g(N, E), N.needsUpdate = !1 }
        v.needsUpdate = !1, o.setRenderTarget(C, P, H) };

    function g(y, b) { const E = e.update(x);
        d.defines.VSM_SAMPLES !== y.blurSamples && (d.defines.VSM_SAMPLES = y.blurSamples, f.defines.VSM_SAMPLES = y.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), d.uniforms.shadow_pass.value = y.map.texture, d.uniforms.resolution.value = y.mapSize, d.uniforms.radius.value = y.radius, o.setRenderTarget(y.mapPass), o.clear(), o.renderBufferDirect(b, null, E, d, x, null), f.uniforms.shadow_pass.value = y.mapPass.texture, f.uniforms.resolution.value = y.mapSize, f.uniforms.radius.value = y.radius, o.setRenderTarget(y.map), o.clear(), o.renderBufferDirect(b, null, E, f, x, null) }

    function p(y, b, E, C, P, H, B) { let _ = null; const R = C.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial; if (R !== void 0 ? _ = R : _ = C.isPointLight === !0 ? l : a, o.localClippingEnabled && E.clipShadows === !0 && E.clippingPlanes.length !== 0 || E.displacementMap && E.displacementScale !== 0 || E.alphaMap && E.alphaTest > 0) { const D = _.uuid,
                N = E.uuid; let z = c[D];
            z === void 0 && (z = {}, c[D] = z); let F = z[N];
            F === void 0 && (F = _.clone(), z[N] = F), _ = F } return _.visible = E.visible, _.wireframe = E.wireframe, B === Ei ? _.side = E.shadowSide !== null ? E.shadowSide : E.side : _.side = E.shadowSide !== null ? E.shadowSide : u[E.side], _.alphaMap = E.alphaMap, _.alphaTest = E.alphaTest, _.clipShadows = E.clipShadows, _.clippingPlanes = E.clippingPlanes, _.clipIntersection = E.clipIntersection, _.displacementMap = E.displacementMap, _.displacementScale = E.displacementScale, _.displacementBias = E.displacementBias, _.wireframeLinewidth = E.wireframeLinewidth, _.linewidth = E.linewidth, C.isPointLight === !0 && _.isMeshDistanceMaterial === !0 && (_.referencePosition.setFromMatrixPosition(C.matrixWorld), _.nearDistance = P, _.farDistance = H), _ }

    function M(y, b, E, C, P) { if (y.visible === !1) return; if (y.layers.test(b.layers) && (y.isMesh || y.isLine || y.isPoints) && (y.castShadow || y.receiveShadow && P === Ei) && (!y.frustumCulled || n.intersectsObject(y))) { y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse, y.matrixWorld); const _ = e.update(y),
                R = y.material; if (Array.isArray(R)) { const D = _.groups; for (let N = 0, z = D.length; N < z; N++) { const F = D[N],
                        W = R[F.materialIndex]; if (W && W.visible) { const K = p(y, _, W, C, E.near, E.far, P);
                        o.renderBufferDirect(E, null, _, K, y, F) } } } else if (R.visible) { const D = p(y, _, R, C, E.near, E.far, P);
                o.renderBufferDirect(E, null, _, D, y, null) } } const B = y.children; for (let _ = 0, R = B.length; _ < R; _++) M(B[_], b, E, C, P) } }

function Bm(o, e, t) { const n = t.isWebGL2;

    function i() { let L = !1; const ue = new We; let oe = null; const be = new We(0, 0, 0, 0); return { setMask: function(J) { oe !== J && !L && (o.colorMask(J, J, J, J), oe = J) }, setLocked: function(J) { L = J }, setClear: function(J, ve, Fe, $e, bt) { bt === !0 && (J *= $e, ve *= $e, Fe *= $e), ue.set(J, ve, Fe, $e), be.equals(ue) === !1 && (o.clearColor(J, ve, Fe, $e), be.copy(ue)) }, reset: function() { L = !1, oe = null, be.set(-1, 0, 0, 0) } } }

    function r() { let L = !1,
            ue = null,
            oe = null,
            be = null; return { setTest: function(J) { J ? G(2929) : Oe(2929) }, setMask: function(J) { ue !== J && !L && (o.depthMask(J), ue = J) }, setFunc: function(J) { if (oe !== J) { if (J) switch (J) {
                        case vh:
                            o.depthFunc(512); break;
                        case _h:
                            o.depthFunc(519); break;
                        case Mh:
                            o.depthFunc(513); break;
                        case Ps:
                            o.depthFunc(515); break;
                        case bh:
                            o.depthFunc(514); break;
                        case wh:
                            o.depthFunc(518); break;
                        case Sh:
                            o.depthFunc(516); break;
                        case Th:
                            o.depthFunc(517); break;
                        default:
                            o.depthFunc(515) } else o.depthFunc(515);
                    oe = J } }, setLocked: function(J) { L = J }, setClear: function(J) { be !== J && (o.clearDepth(J), be = J) }, reset: function() { L = !1, ue = null, oe = null, be = null } } }

    function s() { let L = !1,
            ue = null,
            oe = null,
            be = null,
            J = null,
            ve = null,
            Fe = null,
            $e = null,
            bt = null; return { setTest: function(Qe) { L || (Qe ? G(2960) : Oe(2960)) }, setMask: function(Qe) { ue !== Qe && !L && (o.stencilMask(Qe), ue = Qe) }, setFunc: function(Qe, Bt, qt) {
                (oe !== Qe || be !== Bt || J !== qt) && (o.stencilFunc(Qe, Bt, qt), oe = Qe, be = Bt, J = qt) }, setOp: function(Qe, Bt, qt) {
                (ve !== Qe || Fe !== Bt || $e !== qt) && (o.stencilOp(Qe, Bt, qt), ve = Qe, Fe = Bt, $e = qt) }, setLocked: function(Qe) { L = Qe }, setClear: function(Qe) { bt !== Qe && (o.clearStencil(Qe), bt = Qe) }, reset: function() { L = !1, ue = null, oe = null, be = null, J = null, ve = null, Fe = null, $e = null, bt = null } } } const a = new i,
        l = new r,
        c = new s; let h = {},
        u = {},
        d = new WeakMap,
        f = [],
        m = null,
        x = !1,
        v = null,
        g = null,
        p = null,
        M = null,
        y = null,
        b = null,
        E = null,
        C = !1,
        P = null,
        H = null,
        B = null,
        _ = null,
        R = null; const D = o.getParameter(35661); let N = !1,
        z = 0; const F = o.getParameter(7938);
    F.indexOf("WebGL") !== -1 ? (z = parseFloat(/^WebGL (\d)/.exec(F)[1]), N = z >= 1) : F.indexOf("OpenGL ES") !== -1 && (z = parseFloat(/^OpenGL ES (\d)/.exec(F)[1]), N = z >= 2); let W = null,
        K = {}; const ce = o.getParameter(3088),
        k = o.getParameter(2978),
        Z = new We().fromArray(ce),
        ie = new We().fromArray(k);

    function de(L, ue, oe) { const be = new Uint8Array(4),
            J = o.createTexture();
        o.bindTexture(L, J), o.texParameteri(L, 10241, 9728), o.texParameteri(L, 10240, 9728); for (let ve = 0; ve < oe; ve++) o.texImage2D(ue + ve, 0, 6408, 1, 1, 0, 6408, 5121, be); return J } const xe = {};
    xe[3553] = de(3553, 3553, 1), xe[34067] = de(34067, 34069, 6), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), G(2929), l.setFunc(Ps), Q(!1), le(ra), G(2884), X(nn);

    function G(L) { h[L] !== !0 && (o.enable(L), h[L] = !0) }

    function Oe(L) { h[L] !== !1 && (o.disable(L), h[L] = !1) }

    function pe(L, ue) { return u[L] !== ue ? (o.bindFramebuffer(L, ue), u[L] = ue, n && (L === 36009 && (u[36160] = ue), L === 36160 && (u[36009] = ue)), !0) : !1 }

    function we(L, ue) { let oe = f,
            be = !1; if (L)
            if (oe = d.get(ue), oe === void 0 && (oe = [], d.set(ue, oe)), L.isWebGLMultipleRenderTargets) { const J = L.texture; if (oe.length !== J.length || oe[0] !== 36064) { for (let ve = 0, Fe = J.length; ve < Fe; ve++) oe[ve] = 36064 + ve;
                    oe.length = J.length, be = !0 } } else oe[0] !== 36064 && (oe[0] = 36064, be = !0);
        else oe[0] !== 1029 && (oe[0] = 1029, be = !0);
        be && (t.isWebGL2 ? o.drawBuffers(oe) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe)) }

    function ae(L) { return m !== L ? (o.useProgram(L), m = L, !0) : !1 } const Re = {
        [Bn]: 32774, [lh]: 32778, [ch]: 32779 }; if (n) Re[ha] = 32775, Re[ua] = 32776;
    else { const L = e.get("EXT_blend_minmax");
        L !== null && (Re[ha] = L.MIN_EXT, Re[ua] = L.MAX_EXT) } const Se = {
        [hh]: 0, [uh]: 1, [dh]: 768, [da]: 770, [yh]: 776, [gh]: 774, [ph]: 772, [fh]: 769, [fa]: 771, [xh]: 775, [mh]: 773 };

    function X(L, ue, oe, be, J, ve, Fe, $e) { if (L === nn) { x === !0 && (Oe(3042), x = !1); return } if (x === !1 && (G(3042), x = !0), L !== ah) { if (L !== v || $e !== C) { if ((g !== Bn || y !== Bn) && (o.blendEquation(32774), g = Bn, y = Bn), $e) switch (L) {
                    case Ci:
                        o.blendFuncSeparate(1, 771, 1, 771); break;
                    case aa:
                        o.blendFunc(1, 1); break;
                    case la:
                        o.blendFuncSeparate(0, 769, 0, 1); break;
                    case ca:
                        o.blendFuncSeparate(0, 768, 0, 770); break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", L); break } else switch (L) {
                    case Ci:
                        o.blendFuncSeparate(770, 771, 1, 771); break;
                    case aa:
                        o.blendFunc(770, 1); break;
                    case la:
                        o.blendFuncSeparate(0, 769, 0, 1); break;
                    case ca:
                        o.blendFunc(0, 768); break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", L); break }
                p = null, M = null, b = null, E = null, v = L, C = $e } return }
        J = J || ue, ve = ve || oe, Fe = Fe || be, (ue !== g || J !== y) && (o.blendEquationSeparate(Re[ue], Re[J]), g = ue, y = J), (oe !== p || be !== M || ve !== b || Fe !== E) && (o.blendFuncSeparate(Se[oe], Se[be], Se[ve], Se[Fe]), p = oe, M = be, b = ve, E = Fe), v = L, C = null }

    function ee(L, ue) { L.side === Nn ? Oe(2884) : G(2884); let oe = L.side === st;
        ue && (oe = !oe), Q(oe), L.blending === Ci && L.transparent === !1 ? X(nn) : X(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.premultipliedAlpha), l.setFunc(L.depthFunc), l.setTest(L.depthTest), l.setMask(L.depthWrite), a.setMask(L.colorWrite); const be = L.stencilWrite;
        c.setTest(be), be && (c.setMask(L.stencilWriteMask), c.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), c.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), Me(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? G(32926) : Oe(32926) }

    function Q(L) { P !== L && (L ? o.frontFace(2304) : o.frontFace(2305), P = L) }

    function le(L) { L !== rh ? (G(2884), L !== H && (L === ra ? o.cullFace(1029) : L === sh ? o.cullFace(1028) : o.cullFace(1032))) : Oe(2884), H = L }

    function se(L) { L !== B && (N && o.lineWidth(L), B = L) }

    function Me(L, ue, oe) { L ? (G(32823), (_ !== ue || R !== oe) && (o.polygonOffset(ue, oe), _ = ue, R = oe)) : Oe(32823) }

    function Te(L) { L ? G(3089) : Oe(3089) }

    function Ne(L) { L === void 0 && (L = 33984 + D - 1), W !== L && (o.activeTexture(L), W = L) }

    function Xe(L, ue) { W === null && Ne(); let oe = K[W];
        oe === void 0 && (oe = { type: void 0, texture: void 0 }, K[W] = oe), (oe.type !== L || oe.texture !== ue) && (o.bindTexture(L, ue || xe[L]), oe.type = L, oe.texture = ue) }

    function Ve() { const L = K[W];
        L !== void 0 && L.type !== void 0 && (o.bindTexture(L.type, null), L.type = void 0, L.texture = void 0) }

    function A() { try { o.compressedTexImage2D.apply(o, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } }

    function w() { try { o.texSubImage2D.apply(o, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } }

    function q() { try { o.texSubImage3D.apply(o, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } }

    function j() { try { o.compressedTexSubImage2D.apply(o, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } }

    function fe() { try { o.texStorage2D.apply(o, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } }

    function V() { try { o.texStorage3D.apply(o, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } }

    function ye() { try { o.texImage2D.apply(o, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } }

    function me() { try { o.texImage3D.apply(o, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } }

    function re(L) { Z.equals(L) === !1 && (o.scissor(L.x, L.y, L.z, L.w), Z.copy(L)) }

    function ne(L) { ie.equals(L) === !1 && (o.viewport(L.x, L.y, L.z, L.w), ie.copy(L)) }

    function Ae() { o.disable(3042), o.disable(2884), o.disable(2929), o.disable(32823), o.disable(3089), o.disable(2960), o.disable(32926), o.blendEquation(32774), o.blendFunc(1, 0), o.blendFuncSeparate(1, 0, 1, 0), o.colorMask(!0, !0, !0, !0), o.clearColor(0, 0, 0, 0), o.depthMask(!0), o.depthFunc(513), o.clearDepth(1), o.stencilMask(4294967295), o.stencilFunc(519, 0, 4294967295), o.stencilOp(7680, 7680, 7680), o.clearStencil(0), o.cullFace(1029), o.frontFace(2305), o.polygonOffset(0, 0), o.activeTexture(33984), o.bindFramebuffer(36160, null), n === !0 && (o.bindFramebuffer(36009, null), o.bindFramebuffer(36008, null)), o.useProgram(null), o.lineWidth(1), o.scissor(0, 0, o.canvas.width, o.canvas.height), o.viewport(0, 0, o.canvas.width, o.canvas.height), h = {}, W = null, K = {}, u = {}, d = new WeakMap, f = [], m = null, x = !1, v = null, g = null, p = null, M = null, y = null, b = null, E = null, C = !1, P = null, H = null, B = null, _ = null, R = null, Z.set(0, 0, o.canvas.width, o.canvas.height), ie.set(0, 0, o.canvas.width, o.canvas.height), a.reset(), l.reset(), c.reset() } return { buffers: { color: a, depth: l, stencil: c }, enable: G, disable: Oe, bindFramebuffer: pe, drawBuffers: we, useProgram: ae, setBlending: X, setMaterial: ee, setFlipSided: Q, setCullFace: le, setLineWidth: se, setPolygonOffset: Me, setScissorTest: Te, activeTexture: Ne, bindTexture: Xe, unbindTexture: Ve, compressedTexImage2D: A, texImage2D: ye, texImage3D: me, texStorage2D: fe, texStorage3D: V, texSubImage2D: w, texSubImage3D: q, compressedTexSubImage2D: j, scissor: re, viewport: ne, reset: Ae } }

function zm(o, e, t, n, i, r, s) { const a = i.isWebGL2,
        l = i.maxTextures,
        c = i.maxCubemapSize,
        h = i.maxTextureSize,
        u = i.maxSamples,
        f = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : void 0,
        m = new WeakMap; let x, v = !1; try { v = typeof OffscreenCanvas != "undefined" && new OffscreenCanvas(1, 1).getContext("2d") !== null } catch {}

    function g(A, w) { return v ? new OffscreenCanvas(A, w) : Ii("canvas") }

    function p(A, w, q, j) { let fe = 1; if ((A.width > j || A.height > j) && (fe = j / Math.max(A.width, A.height)), fe < 1 || w === !0)
            if (typeof HTMLImageElement != "undefined" && A instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && A instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && A instanceof ImageBitmap) { const V = w ? ru : Math.floor,
                    ye = V(fe * A.width),
                    me = V(fe * A.height);
                x === void 0 && (x = g(ye, me)); const re = q ? g(ye, me) : x; return re.width = ye, re.height = me, re.getContext("2d").drawImage(A, 0, 0, ye, me), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + A.width + "x" + A.height + ") to (" + ye + "x" + me + ")."), re } else return "data" in A && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + A.width + "x" + A.height + ")."), A;
        return A }

    function M(A) { return Oa(A.width) && Oa(A.height) }

    function y(A) { return a ? !1 : A.wrapS !== _t || A.wrapT !== _t || A.minFilter !== it && A.minFilter !== ct }

    function b(A, w) { return A.generateMipmaps && w && A.minFilter !== it && A.minFilter !== ct }

    function E(A) { o.generateMipmap(A) }

    function C(A, w, q, j, fe = !1) { if (a === !1) return w; if (A !== null) { if (o[A] !== void 0) return o[A];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'") } let V = w; return w === 6403 && (q === 5126 && (V = 33326), q === 5131 && (V = 33325), q === 5121 && (V = 33321)), w === 33319 && (q === 5126 && (V = 33328), q === 5131 && (V = 33327), q === 5121 && (V = 33323)), w === 6408 && (q === 5126 && (V = 34836), q === 5131 && (V = 34842), q === 5121 && (V = j === Ye && fe === !1 ? 35907 : 32856), q === 32819 && (V = 32854), q === 32820 && (V = 32855)), (V === 33325 || V === 33326 || V === 33327 || V === 33328 || V === 34842 || V === 34836) && e.get("EXT_color_buffer_float"), V }

    function P(A, w, q) { return b(A, q) === !0 || A.isFramebufferTexture && A.minFilter !== it && A.minFilter !== ct ? Math.log2(Math.max(w.width, w.height)) + 1 : A.mipmaps !== void 0 && A.mipmaps.length > 0 ? A.mipmaps.length : A.isCompressedTexture && Array.isArray(A.image) ? w.mipmaps.length : 1 }

    function H(A) { return A === it || A === Is || A === Fs ? 9728 : 9729 }

    function B(A) { const w = A.target;
        w.removeEventListener("dispose", B), R(w), w.isVideoTexture && m.delete(w), s.memory.textures-- }

    function _(A) { const w = A.target;
        w.removeEventListener("dispose", _), D(w) }

    function R(A) { const w = n.get(A);
        w.__webglInit !== void 0 && (o.deleteTexture(w.__webglTexture), n.remove(A)) }

    function D(A) { const w = A.texture,
            q = n.get(A),
            j = n.get(w); if (!!A) { if (j.__webglTexture !== void 0 && (o.deleteTexture(j.__webglTexture), s.memory.textures--), A.depthTexture && A.depthTexture.dispose(), A.isWebGLCubeRenderTarget)
                for (let fe = 0; fe < 6; fe++) o.deleteFramebuffer(q.__webglFramebuffer[fe]), q.__webglDepthbuffer && o.deleteRenderbuffer(q.__webglDepthbuffer[fe]);
            else o.deleteFramebuffer(q.__webglFramebuffer), q.__webglDepthbuffer && o.deleteRenderbuffer(q.__webglDepthbuffer), q.__webglMultisampledFramebuffer && o.deleteFramebuffer(q.__webglMultisampledFramebuffer), q.__webglColorRenderbuffer && o.deleteRenderbuffer(q.__webglColorRenderbuffer), q.__webglDepthRenderbuffer && o.deleteRenderbuffer(q.__webglDepthRenderbuffer); if (A.isWebGLMultipleRenderTargets)
                for (let fe = 0, V = w.length; fe < V; fe++) { const ye = n.get(w[fe]);
                    ye.__webglTexture && (o.deleteTexture(ye.__webglTexture), s.memory.textures--), n.remove(w[fe]) }
            n.remove(w), n.remove(A) } } let N = 0;

    function z() { N = 0 }

    function F() { const A = N; return A >= l && console.warn("THREE.WebGLTextures: Trying to use " + A + " texture units while this GPU supports only " + l), N += 1, A }

    function W(A, w) { const q = n.get(A); if (A.isVideoTexture && se(A), A.version > 0 && q.__version !== A.version) { const j = A.image; if (j === void 0) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
            else if (j.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
            else { G(q, A, w); return } }
        t.activeTexture(33984 + w), t.bindTexture(3553, q.__webglTexture) }

    function K(A, w) { const q = n.get(A); if (A.version > 0 && q.__version !== A.version) { G(q, A, w); return }
        t.activeTexture(33984 + w), t.bindTexture(35866, q.__webglTexture) }

    function ce(A, w) { const q = n.get(A); if (A.version > 0 && q.__version !== A.version) { G(q, A, w); return }
        t.activeTexture(33984 + w), t.bindTexture(32879, q.__webglTexture) }

    function k(A, w) { const q = n.get(A); if (A.version > 0 && q.__version !== A.version) { Oe(q, A, w); return }
        t.activeTexture(33984 + w), t.bindTexture(34067, q.__webglTexture) } const Z = {
            [lr]: 10497, [_t]: 33071, [cr]: 33648 },
        ie = {
            [it]: 9728, [Is]: 9984, [Fs]: 9986, [ct]: 9729, [pa]: 9985, [Li]: 9987 };

    function de(A, w, q) { if (q ? (o.texParameteri(A, 10242, Z[w.wrapS]), o.texParameteri(A, 10243, Z[w.wrapT]), (A === 32879 || A === 35866) && o.texParameteri(A, 32882, Z[w.wrapR]), o.texParameteri(A, 10240, ie[w.magFilter]), o.texParameteri(A, 10241, ie[w.minFilter])) : (o.texParameteri(A, 10242, 33071), o.texParameteri(A, 10243, 33071), (A === 32879 || A === 35866) && o.texParameteri(A, 32882, 33071), (w.wrapS !== _t || w.wrapT !== _t) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), o.texParameteri(A, 10240, H(w.magFilter)), o.texParameteri(A, 10241, H(w.minFilter)), w.minFilter !== it && w.minFilter !== ct && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) { const j = e.get("EXT_texture_filter_anisotropic"); if (w.type === on && e.has("OES_texture_float_linear") === !1 || a === !1 && w.type === Un && e.has("OES_texture_half_float_linear") === !1) return;
            (w.anisotropy > 1 || n.get(w).__currentAnisotropy) && (o.texParameterf(A, j.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(w.anisotropy, i.getMaxAnisotropy())), n.get(w).__currentAnisotropy = w.anisotropy) } }

    function xe(A, w) { A.__webglInit === void 0 && (A.__webglInit = !0, w.addEventListener("dispose", B), A.__webglTexture = o.createTexture(), s.memory.textures++) }

    function G(A, w, q) { let j = 3553;
        w.isDataTexture2DArray && (j = 35866), w.isDataTexture3D && (j = 32879), xe(A, w), t.activeTexture(33984 + q), t.bindTexture(j, A.__webglTexture), o.pixelStorei(37440, w.flipY), o.pixelStorei(37441, w.premultiplyAlpha), o.pixelStorei(3317, w.unpackAlignment), o.pixelStorei(37443, 0); const fe = y(w) && M(w.image) === !1; let V = p(w.image, fe, !1, h);
        V = Me(w, V); const ye = M(V) || a,
            me = r.convert(w.format, w.encoding); let re = r.convert(w.type),
            ne = C(w.internalFormat, me, re, w.encoding, w.isVideoTexture);
        de(j, w, ye); let Ae; const L = w.mipmaps,
            ue = a && w.isVideoTexture !== !0,
            oe = A.__version === void 0,
            be = P(w, V, ye); if (w.isDepthTexture) ne = 6402, a ? w.type === on ? ne = 36012 : w.type === hr ? ne = 33190 : w.type === Hn ? ne = 35056 : ne = 33189 : w.type === on && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), w.format === wn && ne === 6402 && w.type !== Pi && w.type !== hr && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), w.type = Pi, re = r.convert(w.type)), w.format === Gn && ne === 6402 && (ne = 34041, w.type !== Hn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), w.type = Hn, re = r.convert(w.type))), ue && oe ? t.texStorage2D(3553, 1, ne, V.width, V.height) : t.texImage2D(3553, 0, ne, V.width, V.height, 0, me, re, null);
        else if (w.isDataTexture)
            if (L.length > 0 && ye) { ue && oe && t.texStorage2D(3553, be, ne, L[0].width, L[0].height); for (let J = 0, ve = L.length; J < ve; J++) Ae = L[J], ue ? t.texSubImage2D(3553, 0, 0, 0, Ae.width, Ae.height, me, re, Ae.data) : t.texImage2D(3553, J, ne, Ae.width, Ae.height, 0, me, re, Ae.data);
                w.generateMipmaps = !1 } else ue ? (oe && t.texStorage2D(3553, be, ne, V.width, V.height), t.texSubImage2D(3553, 0, 0, 0, V.width, V.height, me, re, V.data)) : t.texImage2D(3553, 0, ne, V.width, V.height, 0, me, re, V.data);
        else if (w.isCompressedTexture) { ue && oe && t.texStorage2D(3553, be, ne, L[0].width, L[0].height); for (let J = 0, ve = L.length; J < ve; J++) Ae = L[J], w.format !== ft ? me !== null ? ue ? t.compressedTexSubImage2D(3553, J, 0, 0, Ae.width, Ae.height, me, Ae.data) : t.compressedTexImage2D(3553, J, ne, Ae.width, Ae.height, 0, Ae.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ue ? t.texSubImage2D(3553, J, 0, 0, Ae.width, Ae.height, me, re, Ae.data) : t.texImage2D(3553, J, ne, Ae.width, Ae.height, 0, me, re, Ae.data) } else if (w.isDataTexture2DArray) ue ? (oe && t.texStorage3D(35866, be, ne, V.width, V.height, V.depth), t.texSubImage3D(35866, 0, 0, 0, 0, V.width, V.height, V.depth, me, re, V.data)) : t.texImage3D(35866, 0, ne, V.width, V.height, V.depth, 0, me, re, V.data);
        else if (w.isDataTexture3D) ue ? (oe && t.texStorage3D(32879, be, ne, V.width, V.height, V.depth), t.texSubImage3D(32879, 0, 0, 0, 0, V.width, V.height, V.depth, me, re, V.data)) : t.texImage3D(32879, 0, ne, V.width, V.height, V.depth, 0, me, re, V.data);
        else if (w.isFramebufferTexture) ue && oe ? t.texStorage2D(3553, be, ne, V.width, V.height) : t.texImage2D(3553, 0, ne, V.width, V.height, 0, me, re, null);
        else if (L.length > 0 && ye) { ue && oe && t.texStorage2D(3553, be, ne, L[0].width, L[0].height); for (let J = 0, ve = L.length; J < ve; J++) Ae = L[J], ue ? t.texSubImage2D(3553, J, 0, 0, me, re, Ae) : t.texImage2D(3553, J, ne, me, re, Ae);
            w.generateMipmaps = !1 } else ue ? (oe && t.texStorage2D(3553, be, ne, V.width, V.height), t.texSubImage2D(3553, 0, 0, 0, me, re, V)) : t.texImage2D(3553, 0, ne, me, re, V);
        b(w, ye) && E(j), A.__version = w.version, w.onUpdate && w.onUpdate(w) }

    function Oe(A, w, q) { if (w.image.length !== 6) return;
        xe(A, w), t.activeTexture(33984 + q), t.bindTexture(34067, A.__webglTexture), o.pixelStorei(37440, w.flipY), o.pixelStorei(37441, w.premultiplyAlpha), o.pixelStorei(3317, w.unpackAlignment), o.pixelStorei(37443, 0); const j = w && (w.isCompressedTexture || w.image[0].isCompressedTexture),
            fe = w.image[0] && w.image[0].isDataTexture,
            V = []; for (let J = 0; J < 6; J++) !j && !fe ? V[J] = p(w.image[J], !1, !0, c) : V[J] = fe ? w.image[J].image : w.image[J], V[J] = Me(w, V[J]); const ye = V[0],
            me = M(ye) || a,
            re = r.convert(w.format, w.encoding),
            ne = r.convert(w.type),
            Ae = C(w.internalFormat, re, ne, w.encoding),
            L = a && w.isVideoTexture !== !0,
            ue = A.__version === void 0; let oe = P(w, ye, me);
        de(34067, w, me); let be; if (j) { L && ue && t.texStorage2D(34067, oe, Ae, ye.width, ye.height); for (let J = 0; J < 6; J++) { be = V[J].mipmaps; for (let ve = 0; ve < be.length; ve++) { const Fe = be[ve];
                    w.format !== ft ? re !== null ? L ? t.compressedTexSubImage2D(34069 + J, ve, 0, 0, Fe.width, Fe.height, re, Fe.data) : t.compressedTexImage2D(34069 + J, ve, Ae, Fe.width, Fe.height, 0, Fe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : L ? t.texSubImage2D(34069 + J, ve, 0, 0, Fe.width, Fe.height, re, ne, Fe.data) : t.texImage2D(34069 + J, ve, Ae, Fe.width, Fe.height, 0, re, ne, Fe.data) } } } else { be = w.mipmaps, L && ue && (be.length > 0 && oe++, t.texStorage2D(34067, oe, Ae, V[0].width, V[0].height)); for (let J = 0; J < 6; J++)
                if (fe) { L ? t.texSubImage2D(34069 + J, 0, 0, 0, V[J].width, V[J].height, re, ne, V[J].data) : t.texImage2D(34069 + J, 0, Ae, V[J].width, V[J].height, 0, re, ne, V[J].data); for (let ve = 0; ve < be.length; ve++) { const $e = be[ve].image[J].image;
                        L ? t.texSubImage2D(34069 + J, ve + 1, 0, 0, $e.width, $e.height, re, ne, $e.data) : t.texImage2D(34069 + J, ve + 1, Ae, $e.width, $e.height, 0, re, ne, $e.data) } } else { L ? t.texSubImage2D(34069 + J, 0, 0, 0, re, ne, V[J]) : t.texImage2D(34069 + J, 0, Ae, re, ne, V[J]); for (let ve = 0; ve < be.length; ve++) { const Fe = be[ve];
                        L ? t.texSubImage2D(34069 + J, ve + 1, 0, 0, re, ne, Fe.image[J]) : t.texImage2D(34069 + J, ve + 1, Ae, re, ne, Fe.image[J]) } } }
        b(w, me) && E(34067), A.__version = w.version, w.onUpdate && w.onUpdate(w) }

    function pe(A, w, q, j, fe) { const V = r.convert(q.format, q.encoding),
            ye = r.convert(q.type),
            me = C(q.internalFormat, V, ye, q.encoding);
        n.get(w).__hasExternalTextures || (fe === 32879 || fe === 35866 ? t.texImage3D(fe, 0, me, w.width, w.height, w.depth, 0, V, ye, null) : t.texImage2D(fe, 0, me, w.width, w.height, 0, V, ye, null)), t.bindFramebuffer(36160, A), w.useRenderToTexture ? f.framebufferTexture2DMultisampleEXT(36160, j, fe, n.get(q).__webglTexture, 0, le(w)) : o.framebufferTexture2D(36160, j, fe, n.get(q).__webglTexture, 0), t.bindFramebuffer(36160, null) }

    function we(A, w, q) { if (o.bindRenderbuffer(36161, A), w.depthBuffer && !w.stencilBuffer) { let j = 33189; if (q || w.useRenderToTexture) { const fe = w.depthTexture;
                fe && fe.isDepthTexture && (fe.type === on ? j = 36012 : fe.type === hr && (j = 33190)); const V = le(w);
                w.useRenderToTexture ? f.renderbufferStorageMultisampleEXT(36161, V, j, w.width, w.height) : o.renderbufferStorageMultisample(36161, V, j, w.width, w.height) } else o.renderbufferStorage(36161, j, w.width, w.height);
            o.framebufferRenderbuffer(36160, 36096, 36161, A) } else if (w.depthBuffer && w.stencilBuffer) { const j = le(w);
            q && w.useRenderbuffer ? o.renderbufferStorageMultisample(36161, j, 35056, w.width, w.height) : w.useRenderToTexture ? f.renderbufferStorageMultisampleEXT(36161, j, 35056, w.width, w.height) : o.renderbufferStorage(36161, 34041, w.width, w.height), o.framebufferRenderbuffer(36160, 33306, 36161, A) } else { const j = w.isWebGLMultipleRenderTargets === !0 ? w.texture[0] : w.texture,
                fe = r.convert(j.format, j.encoding),
                V = r.convert(j.type),
                ye = C(j.internalFormat, fe, V, j.encoding),
                me = le(w);
            q && w.useRenderbuffer ? o.renderbufferStorageMultisample(36161, me, ye, w.width, w.height) : w.useRenderToTexture ? f.renderbufferStorageMultisampleEXT(36161, me, ye, w.width, w.height) : o.renderbufferStorage(36161, ye, w.width, w.height) }
        o.bindRenderbuffer(36161, null) }

    function ae(A, w) { if (w && w.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported"); if (t.bindFramebuffer(36160, A), !(w.depthTexture && w.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        (!n.get(w.depthTexture).__webglTexture || w.depthTexture.image.width !== w.width || w.depthTexture.image.height !== w.height) && (w.depthTexture.image.width = w.width, w.depthTexture.image.height = w.height, w.depthTexture.needsUpdate = !0), W(w.depthTexture, 0); const j = n.get(w.depthTexture).__webglTexture,
            fe = le(w); if (w.depthTexture.format === wn) w.useRenderToTexture ? f.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, j, 0, fe) : o.framebufferTexture2D(36160, 36096, 3553, j, 0);
        else if (w.depthTexture.format === Gn) w.useRenderToTexture ? f.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, j, 0, fe) : o.framebufferTexture2D(36160, 33306, 3553, j, 0);
        else throw new Error("Unknown depthTexture format") }

    function Re(A) { const w = n.get(A),
            q = A.isWebGLCubeRenderTarget === !0; if (A.depthTexture && !w.__autoAllocateDepthBuffer) { if (q) throw new Error("target.depthTexture not supported in Cube render targets");
            ae(w.__webglFramebuffer, A) } else if (q) { w.__webglDepthbuffer = []; for (let j = 0; j < 6; j++) t.bindFramebuffer(36160, w.__webglFramebuffer[j]), w.__webglDepthbuffer[j] = o.createRenderbuffer(), we(w.__webglDepthbuffer[j], A, !1) } else t.bindFramebuffer(36160, w.__webglFramebuffer), w.__webglDepthbuffer = o.createRenderbuffer(), we(w.__webglDepthbuffer, A, !1);
        t.bindFramebuffer(36160, null) }

    function Se(A, w, q) { const j = n.get(A);
        w !== void 0 && pe(j.__webglFramebuffer, A, A.texture, 36064, 3553), q !== void 0 && Re(A) }

    function X(A) { const w = A.texture,
            q = n.get(A),
            j = n.get(w);
        A.addEventListener("dispose", _), A.isWebGLMultipleRenderTargets !== !0 && (j.__webglTexture === void 0 && (j.__webglTexture = o.createTexture()), j.__version = w.version, s.memory.textures++); const fe = A.isWebGLCubeRenderTarget === !0,
            V = A.isWebGLMultipleRenderTargets === !0,
            ye = w.isDataTexture3D || w.isDataTexture2DArray,
            me = M(A) || a; if (fe) { q.__webglFramebuffer = []; for (let re = 0; re < 6; re++) q.__webglFramebuffer[re] = o.createFramebuffer() } else if (q.__webglFramebuffer = o.createFramebuffer(), V)
            if (i.drawBuffers) { const re = A.texture; for (let ne = 0, Ae = re.length; ne < Ae; ne++) { const L = n.get(re[ne]);
                    L.__webglTexture === void 0 && (L.__webglTexture = o.createTexture(), s.memory.textures++) } } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
        else if (A.useRenderbuffer)
            if (a) { q.__webglMultisampledFramebuffer = o.createFramebuffer(), q.__webglColorRenderbuffer = o.createRenderbuffer(), o.bindRenderbuffer(36161, q.__webglColorRenderbuffer); const re = r.convert(w.format, w.encoding),
                    ne = r.convert(w.type),
                    Ae = C(w.internalFormat, re, ne, w.encoding),
                    L = le(A);
                o.renderbufferStorageMultisample(36161, L, Ae, A.width, A.height), t.bindFramebuffer(36160, q.__webglMultisampledFramebuffer), o.framebufferRenderbuffer(36160, 36064, 36161, q.__webglColorRenderbuffer), o.bindRenderbuffer(36161, null), A.depthBuffer && (q.__webglDepthRenderbuffer = o.createRenderbuffer(), we(q.__webglDepthRenderbuffer, A, !0)), t.bindFramebuffer(36160, null) } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
        if (fe) { t.bindTexture(34067, j.__webglTexture), de(34067, w, me); for (let re = 0; re < 6; re++) pe(q.__webglFramebuffer[re], A, w, 36064, 34069 + re);
            b(w, me) && E(34067), t.unbindTexture() } else if (V) { const re = A.texture; for (let ne = 0, Ae = re.length; ne < Ae; ne++) { const L = re[ne],
                    ue = n.get(L);
                t.bindTexture(3553, ue.__webglTexture), de(3553, L, me), pe(q.__webglFramebuffer, A, L, 36064 + ne, 3553), b(L, me) && E(3553) }
            t.unbindTexture() } else { let re = 3553;
            ye && (a ? re = w.isDataTexture3D ? 32879 : 35866 : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")), t.bindTexture(re, j.__webglTexture), de(re, w, me), pe(q.__webglFramebuffer, A, w, 36064, re), b(w, me) && E(re), t.unbindTexture() }
        A.depthBuffer && Re(A) }

    function ee(A) { const w = M(A) || a,
            q = A.isWebGLMultipleRenderTargets === !0 ? A.texture : [A.texture]; for (let j = 0, fe = q.length; j < fe; j++) { const V = q[j]; if (b(V, w)) { const ye = A.isWebGLCubeRenderTarget ? 34067 : 3553,
                    me = n.get(V).__webglTexture;
                t.bindTexture(ye, me), E(ye), t.unbindTexture() } } }

    function Q(A) { if (A.useRenderbuffer)
            if (a) { const w = A.width,
                    q = A.height; let j = 16384; const fe = [36064],
                    V = A.stencilBuffer ? 33306 : 36096;
                A.depthBuffer && fe.push(V), A.ignoreDepthForMultisampleCopy || (A.depthBuffer && (j |= 256), A.stencilBuffer && (j |= 1024)); const ye = n.get(A);
                t.bindFramebuffer(36008, ye.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, ye.__webglFramebuffer), A.ignoreDepthForMultisampleCopy && (o.invalidateFramebuffer(36008, [V]), o.invalidateFramebuffer(36009, [V])), o.blitFramebuffer(0, 0, w, q, 0, 0, w, q, j, 9728), o.invalidateFramebuffer(36008, fe), t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, ye.__webglMultisampledFramebuffer) } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.") }

    function le(A) { return a && (A.useRenderbuffer || A.useRenderToTexture) ? Math.min(u, A.samples) : 0 }

    function se(A) { const w = s.render.frame;
        m.get(A) !== w && (m.set(A, w), A.update()) }

    function Me(A, w) { const q = A.encoding,
            j = A.format,
            fe = A.type; return A.isCompressedTexture === !0 || A.isVideoTexture === !0 || A.format === ks || q !== an && (q === Ye ? a === !1 ? e.has("EXT_sRGB") === !0 && j === ft ? (A.format = ks, A.minFilter = ct, A.generateMipmaps = !1) : w = Tn.sRGBToLinear(w) : (j !== ft || fe !== sn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", q)), w } let Te = !1,
        Ne = !1;

    function Xe(A, w) { A && A.isWebGLRenderTarget && (Te === !1 && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), Te = !0), A = A.texture), W(A, w) }

    function Ve(A, w) { A && A.isWebGLCubeRenderTarget && (Ne === !1 && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), Ne = !0), A = A.texture), k(A, w) }
    this.allocateTextureUnit = F, this.resetTextureUnits = z, this.setTexture2D = W, this.setTexture2DArray = K, this.setTexture3D = ce, this.setTextureCube = k, this.rebindTextures = Se, this.setupRenderTarget = X, this.updateRenderTargetMipmap = ee, this.updateMultisampleRenderTarget = Q, this.setupDepthRenderbuffer = Re, this.setupFrameBufferTexture = pe, this.safeSetTexture2D = Xe, this.safeSetTextureCube = Ve }

function Om(o, e, t) { const n = t.isWebGL2;

    function i(r, s = null) { let a; if (r === sn) return 5121; if (r === Bh) return 32819; if (r === zh) return 32820; if (r === Ih) return 5120; if (r === Fh) return 5122; if (r === Pi) return 5123; if (r === Nh) return 5124; if (r === hr) return 5125; if (r === on) return 5126; if (r === Un) return n ? 5131 : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null); if (r === Oh) return 6406; if (r === ft) return 6408; if (r === Hh) return 6409; if (r === Gh) return 6410; if (r === wn) return 6402; if (r === Gn) return 34041; if (r === kh) return 6403; if (r === Uh) return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408; if (r === ks) return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null; if (r === Vh) return 36244; if (r === Wh) return 33319; if (r === qh) return 33320; if (r === Xh) return 36249; if (r === Ns || r === Bs || r === zs || r === Os)
            if (s === Ye)
                if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) { if (r === Ns) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT; if (r === Bs) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT; if (r === zs) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT; if (r === Os) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT } else return null;
        else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) { if (r === Ns) return a.COMPRESSED_RGB_S3TC_DXT1_EXT; if (r === Bs) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (r === zs) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (r === Os) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT } else return null; if (r === ma || r === ga || r === xa || r === ya)
            if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) { if (r === ma) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (r === ga) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (r === xa) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (r === ya) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } else return null;
        if (r === Jh) return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null; if (r === va || r === _a)
            if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) { if (r === va) return s === Ye ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2; if (r === _a) return s === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC } else return null;
        if (r === Ma || r === ba || r === wa || r === Sa || r === Ta || r === Ea || r === Aa || r === Ca || r === Ra || r === La || r === Pa || r === Da || r === Ia || r === Fa)
            if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) { if (r === Ma) return s === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR; if (r === ba) return s === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR; if (r === wa) return s === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR; if (r === Sa) return s === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR; if (r === Ta) return s === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR; if (r === Ea) return s === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR; if (r === Aa) return s === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR; if (r === Ca) return s === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR; if (r === Ra) return s === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR; if (r === La) return s === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR; if (r === Pa) return s === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR; if (r === Da) return s === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR; if (r === Ia) return s === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR; if (r === Fa) return s === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR } else return null;
        if (r === Na)
            if (a = e.get("EXT_texture_compression_bptc"), a !== null) { if (r === Na) return s === Ye ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT } else return null;
        if (r === Hn) return n ? 34042 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) } return { convert: i } }
class zl extends yt { constructor(e = []) { super();
        this.cameras = e } }
zl.prototype.isArrayCamera = !0;
class Dn extends He { constructor() { super();
        this.type = "Group" } }
Dn.prototype.isGroup = !0;
const Um = { type: "move" };
class So { constructor() { this._targetRay = null, this._grip = null, this._hand = null }
    getHandSpace() { return this._hand === null && (this._hand = new Dn, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand }
    getTargetRaySpace() { return this._targetRay === null && (this._targetRay = new Dn, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new S, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new S), this._targetRay }
    getGripSpace() { return this._grip === null && (this._grip = new Dn, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new S, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new S), this._grip }
    dispatchEvent(e) { return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this }
    disconnect(e) { return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this }
    update(e, t, n) { let i = null,
            r = null,
            s = null; const a = this._targetRay,
            l = this._grip,
            c = this._hand; if (e && t.session.visibilityState !== "visible-blurred")
            if (a !== null && (i = t.getPose(e.targetRaySpace, n), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Um))), c && e.hand) { s = !0; for (const x of e.hand.values()) { const v = t.getJointPose(x, n); if (c.joints[x.jointName] === void 0) { const p = new Dn;
                        p.matrixAutoUpdate = !1, p.visible = !1, c.joints[x.jointName] = p, c.add(p) } const g = c.joints[x.jointName];
                    v !== null && (g.matrix.fromArray(v.transform.matrix), g.matrix.decompose(g.position, g.rotation, g.scale), g.jointRadius = v.radius), g.visible = v !== null } const h = c.joints["index-finger-tip"],
                    u = c.joints["thumb-tip"],
                    d = h.position.distanceTo(u.position),
                    f = .02,
                    m = .005;
                c.inputState.pinching && d > f + m ? (c.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && d <= f - m && (c.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this })) } else l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
        return a !== null && (a.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = s !== null), this } }
class To extends ot { constructor(e, t, n, i, r, s, a, l, c, h) { if (h = h !== void 0 ? h : wn, h !== wn && h !== Gn) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        n === void 0 && h === wn && (n = Pi), n === void 0 && h === Gn && (n = Hn);
        super(null, i, r, s, a, l, h, n, c);
        this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : it, this.minFilter = l !== void 0 ? l : it, this.flipY = !1, this.generateMipmaps = !1 } }
To.prototype.isDepthTexture = !0;
class Hm extends Sn { constructor(e, t) { super(); const n = this; let i = null,
            r = 1,
            s = null,
            a = "local-floor"; const l = e.extensions.has("WEBGL_multisampled_render_to_texture"); let c = null,
            h = null,
            u = null,
            d = null,
            f = !1,
            m = null; const x = t.getContextAttributes(); let v = null,
            g = null; const p = [],
            M = new Map,
            y = new yt;
        y.layers.enable(1), y.viewport = new We; const b = new yt;
        b.layers.enable(2), b.viewport = new We; const E = [y, b],
            C = new zl;
        C.layers.enable(1), C.layers.enable(2); let P = null,
            H = null;
        this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(k) { let Z = p[k]; return Z === void 0 && (Z = new So, p[k] = Z), Z.getTargetRaySpace() }, this.getControllerGrip = function(k) { let Z = p[k]; return Z === void 0 && (Z = new So, p[k] = Z), Z.getGripSpace() }, this.getHand = function(k) { let Z = p[k]; return Z === void 0 && (Z = new So, p[k] = Z), Z.getHandSpace() };

        function B(k) { const Z = M.get(k.inputSource);
            Z && Z.dispatchEvent({ type: k.type, data: k.inputSource }) }

        function _() { M.forEach(function(k, Z) { k.disconnect(Z) }), M.clear(), P = null, H = null, e.setRenderTarget(v), d = null, u = null, h = null, i = null, g = null, ce.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" }) }
        this.setFramebufferScaleFactor = function(k) { r = k, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.") }, this.setReferenceSpaceType = function(k) { a = k, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.") }, this.getReferenceSpace = function() { return s }, this.getBaseLayer = function() { return u !== null ? u : d }, this.getBinding = function() { return h }, this.getFrame = function() { return m }, this.getSession = function() { return i }, this.setSession = async function(k) { if (i = k, i !== null) { if (v = e.getRenderTarget(), i.addEventListener("select", B), i.addEventListener("selectstart", B), i.addEventListener("selectend", B), i.addEventListener("squeeze", B), i.addEventListener("squeezestart", B), i.addEventListener("squeezeend", B), i.addEventListener("end", _), i.addEventListener("inputsourceschange", R), x.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) { const Z = { antialias: i.renderState.layers === void 0 ? x.antialias : !0, alpha: x.alpha, depth: x.depth, stencil: x.stencil, framebufferScaleFactor: r };
                    d = new XRWebGLLayer(i, t, Z), i.updateRenderState({ baseLayer: d }), g = new Tt(d.framebufferWidth, d.framebufferHeight, { format: ft, type: sn, encoding: e.outputEncoding }) } else { f = x.antialias; let Z = null,
                        ie = null,
                        de = null;
                    x.depth && (de = x.stencil ? 35056 : 33190, Z = x.stencil ? Gn : wn, ie = x.stencil ? Hn : Pi); const xe = { colorFormat: e.outputEncoding === Ye ? 35907 : 32856, depthFormat: de, scaleFactor: r };
                    h = new XRWebGLBinding(i, t), u = h.createProjectionLayer(xe), i.updateRenderState({ layers: [u] }), f ? g = new Ys(u.textureWidth, u.textureHeight, { format: ft, type: sn, depthTexture: new To(u.textureWidth, u.textureHeight, ie, void 0, void 0, void 0, void 0, void 0, void 0, Z), stencilBuffer: x.stencil, ignoreDepth: u.ignoreDepthValues, useRenderToTexture: l, encoding: e.outputEncoding }) : g = new Tt(u.textureWidth, u.textureHeight, { format: ft, type: sn, depthTexture: new To(u.textureWidth, u.textureHeight, ie, void 0, void 0, void 0, void 0, void 0, void 0, Z), stencilBuffer: x.stencil, ignoreDepth: u.ignoreDepthValues, encoding: e.outputEncoding }) }
                g.isXRRenderTarget = !0, this.setFoveation(1), s = await i.requestReferenceSpace(a), ce.setContext(i), ce.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" }) } };

        function R(k) { const Z = i.inputSources; for (let ie = 0; ie < p.length; ie++) M.set(Z[ie], p[ie]); for (let ie = 0; ie < k.removed.length; ie++) { const de = k.removed[ie],
                    xe = M.get(de);
                xe && (xe.dispatchEvent({ type: "disconnected", data: de }), M.delete(de)) } for (let ie = 0; ie < k.added.length; ie++) { const de = k.added[ie],
                    xe = M.get(de);
                xe && xe.dispatchEvent({ type: "connected", data: de }) } } const D = new S,
            N = new S;

        function z(k, Z, ie) { D.setFromMatrixPosition(Z.matrixWorld), N.setFromMatrixPosition(ie.matrixWorld); const de = D.distanceTo(N),
                xe = Z.projectionMatrix.elements,
                G = ie.projectionMatrix.elements,
                Oe = xe[14] / (xe[10] - 1),
                pe = xe[14] / (xe[10] + 1),
                we = (xe[9] + 1) / xe[5],
                ae = (xe[9] - 1) / xe[5],
                Re = (xe[8] - 1) / xe[0],
                Se = (G[8] + 1) / G[0],
                X = Oe * Re,
                ee = Oe * Se,
                Q = de / (-Re + Se),
                le = Q * -Re;
            Z.matrixWorld.decompose(k.position, k.quaternion, k.scale), k.translateX(le), k.translateZ(Q), k.matrixWorld.compose(k.position, k.quaternion, k.scale), k.matrixWorldInverse.copy(k.matrixWorld).invert(); const se = Oe + Q,
                Me = pe + Q,
                Te = X - le,
                Ne = ee + (de - le),
                Xe = we * pe / Me * se,
                Ve = ae * pe / Me * se;
            k.projectionMatrix.makePerspective(Te, Ne, Xe, Ve, se, Me) }

        function F(k, Z) { Z === null ? k.matrixWorld.copy(k.matrix) : k.matrixWorld.multiplyMatrices(Z.matrixWorld, k.matrix), k.matrixWorldInverse.copy(k.matrixWorld).invert() }
        this.updateCamera = function(k) { if (i === null) return;
            C.near = b.near = y.near = k.near, C.far = b.far = y.far = k.far, (P !== C.near || H !== C.far) && (i.updateRenderState({ depthNear: C.near, depthFar: C.far }), P = C.near, H = C.far); const Z = k.parent,
                ie = C.cameras;
            F(C, Z); for (let xe = 0; xe < ie.length; xe++) F(ie[xe], Z);
            C.matrixWorld.decompose(C.position, C.quaternion, C.scale), k.position.copy(C.position), k.quaternion.copy(C.quaternion), k.scale.copy(C.scale), k.matrix.copy(C.matrix), k.matrixWorld.copy(C.matrixWorld); const de = k.children; for (let xe = 0, G = de.length; xe < G; xe++) de[xe].updateMatrixWorld(!0);
            ie.length === 2 ? z(C, y, b) : C.projectionMatrix.copy(y.projectionMatrix) }, this.getCamera = function() { return C }, this.getFoveation = function() { if (u !== null) return u.fixedFoveation; if (d !== null) return d.fixedFoveation }, this.setFoveation = function(k) { u !== null && (u.fixedFoveation = k), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = k) }; let W = null;

        function K(k, Z) { if (c = Z.getViewerPose(s), m = Z, c !== null) { const de = c.views;
                d !== null && (e.setRenderTargetFramebuffer(g, d.framebuffer), e.setRenderTarget(g)); let xe = !1;
                de.length !== C.cameras.length && (C.cameras.length = 0, xe = !0); for (let G = 0; G < de.length; G++) { const Oe = de[G]; let pe = null; if (d !== null) pe = d.getViewport(Oe);
                    else { const ae = h.getViewSubImage(u, Oe);
                        pe = ae.viewport, G === 0 && (e.setRenderTargetTextures(g, ae.colorTexture, u.ignoreDepthValues ? void 0 : ae.depthStencilTexture), e.setRenderTarget(g)) } const we = E[G];
                    we.matrix.fromArray(Oe.transform.matrix), we.projectionMatrix.fromArray(Oe.projectionMatrix), we.viewport.set(pe.x, pe.y, pe.width, pe.height), G === 0 && C.matrix.copy(we.matrix), xe === !0 && C.cameras.push(we) } } const ie = i.inputSources; for (let de = 0; de < p.length; de++) { const xe = p[de],
                    G = ie[de];
                xe.update(G, Z, s) }
            W && W(k, Z), m = null } const ce = new nl;
        ce.setAnimationLoop(K), this.setAnimationLoop = function(k) { W = k }, this.dispose = function() {} } }

function Gm(o) {
    function e(g, p) { g.fogColor.value.copy(p.color), p.isFog ? (g.fogNear.value = p.near, g.fogFar.value = p.far) : p.isFogExp2 && (g.fogDensity.value = p.density) }

    function t(g, p, M, y, b) { p.isMeshBasicMaterial ? n(g, p) : p.isMeshLambertMaterial ? (n(g, p), l(g, p)) : p.isMeshToonMaterial ? (n(g, p), h(g, p)) : p.isMeshPhongMaterial ? (n(g, p), c(g, p)) : p.isMeshStandardMaterial ? (n(g, p), p.isMeshPhysicalMaterial ? d(g, p, b) : u(g, p)) : p.isMeshMatcapMaterial ? (n(g, p), f(g, p)) : p.isMeshDepthMaterial ? (n(g, p), m(g, p)) : p.isMeshDistanceMaterial ? (n(g, p), x(g, p)) : p.isMeshNormalMaterial ? (n(g, p), v(g, p)) : p.isLineBasicMaterial ? (i(g, p), p.isLineDashedMaterial && r(g, p)) : p.isPointsMaterial ? s(g, p, M, y) : p.isSpriteMaterial ? a(g, p) : p.isShadowMaterial ? (g.color.value.copy(p.color), g.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1) }

    function n(g, p) { g.opacity.value = p.opacity, p.color && g.diffuse.value.copy(p.color), p.emissive && g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (g.map.value = p.map), p.alphaMap && (g.alphaMap.value = p.alphaMap), p.specularMap && (g.specularMap.value = p.specularMap), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest); const M = o.get(p).envMap;
        M && (g.envMap.value = M, g.flipEnvMap.value = M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1, g.reflectivity.value = p.reflectivity, g.ior.value = p.ior, g.refractionRatio.value = p.refractionRatio), p.lightMap && (g.lightMap.value = p.lightMap, g.lightMapIntensity.value = p.lightMapIntensity), p.aoMap && (g.aoMap.value = p.aoMap, g.aoMapIntensity.value = p.aoMapIntensity); let y;
        p.map ? y = p.map : p.specularMap ? y = p.specularMap : p.displacementMap ? y = p.displacementMap : p.normalMap ? y = p.normalMap : p.bumpMap ? y = p.bumpMap : p.roughnessMap ? y = p.roughnessMap : p.metalnessMap ? y = p.metalnessMap : p.alphaMap ? y = p.alphaMap : p.emissiveMap ? y = p.emissiveMap : p.clearcoatMap ? y = p.clearcoatMap : p.clearcoatNormalMap ? y = p.clearcoatNormalMap : p.clearcoatRoughnessMap ? y = p.clearcoatRoughnessMap : p.specularIntensityMap ? y = p.specularIntensityMap : p.specularColorMap ? y = p.specularColorMap : p.transmissionMap ? y = p.transmissionMap : p.thicknessMap ? y = p.thicknessMap : p.sheenColorMap ? y = p.sheenColorMap : p.sheenRoughnessMap && (y = p.sheenRoughnessMap), y !== void 0 && (y.isWebGLRenderTarget && (y = y.texture), y.matrixAutoUpdate === !0 && y.updateMatrix(), g.uvTransform.value.copy(y.matrix)); let b;
        p.aoMap ? b = p.aoMap : p.lightMap && (b = p.lightMap), b !== void 0 && (b.isWebGLRenderTarget && (b = b.texture), b.matrixAutoUpdate === !0 && b.updateMatrix(), g.uv2Transform.value.copy(b.matrix)) }

    function i(g, p) { g.diffuse.value.copy(p.color), g.opacity.value = p.opacity }

    function r(g, p) { g.dashSize.value = p.dashSize, g.totalSize.value = p.dashSize + p.gapSize, g.scale.value = p.scale }

    function s(g, p, M, y) { g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.size.value = p.size * M, g.scale.value = y * .5, p.map && (g.map.value = p.map), p.alphaMap && (g.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest); let b;
        p.map ? b = p.map : p.alphaMap && (b = p.alphaMap), b !== void 0 && (b.matrixAutoUpdate === !0 && b.updateMatrix(), g.uvTransform.value.copy(b.matrix)) }

    function a(g, p) { g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.rotation.value = p.rotation, p.map && (g.map.value = p.map), p.alphaMap && (g.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest); let M;
        p.map ? M = p.map : p.alphaMap && (M = p.alphaMap), M !== void 0 && (M.matrixAutoUpdate === !0 && M.updateMatrix(), g.uvTransform.value.copy(M.matrix)) }

    function l(g, p) { p.emissiveMap && (g.emissiveMap.value = p.emissiveMap) }

    function c(g, p) { g.specular.value.copy(p.specular), g.shininess.value = Math.max(p.shininess, 1e-4), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap), p.bumpMap && (g.bumpMap.value = p.bumpMap, g.bumpScale.value = p.bumpScale, p.side === st && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, g.normalScale.value.copy(p.normalScale), p.side === st && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias) }

    function h(g, p) { p.gradientMap && (g.gradientMap.value = p.gradientMap), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap), p.bumpMap && (g.bumpMap.value = p.bumpMap, g.bumpScale.value = p.bumpScale, p.side === st && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, g.normalScale.value.copy(p.normalScale), p.side === st && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias) }

    function u(g, p) { g.roughness.value = p.roughness, g.metalness.value = p.metalness, p.roughnessMap && (g.roughnessMap.value = p.roughnessMap), p.metalnessMap && (g.metalnessMap.value = p.metalnessMap), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap), p.bumpMap && (g.bumpMap.value = p.bumpMap, g.bumpScale.value = p.bumpScale, p.side === st && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, g.normalScale.value.copy(p.normalScale), p.side === st && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias), o.get(p).envMap && (g.envMapIntensity.value = p.envMapIntensity) }

    function d(g, p, M) { u(g, p), g.ior.value = p.ior, p.sheen > 0 && (g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), g.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (g.sheenColorMap.value = p.sheenColorMap), p.sheenRoughnessMap && (g.sheenRoughnessMap.value = p.sheenRoughnessMap)), p.clearcoat > 0 && (g.clearcoat.value = p.clearcoat, g.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (g.clearcoatMap.value = p.clearcoatMap), p.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap), p.clearcoatNormalMap && (g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), g.clearcoatNormalMap.value = p.clearcoatNormalMap, p.side === st && g.clearcoatNormalScale.value.negate())), p.transmission > 0 && (g.transmission.value = p.transmission, g.transmissionSamplerMap.value = M.texture, g.transmissionSamplerSize.value.set(M.width, M.height), p.transmissionMap && (g.transmissionMap.value = p.transmissionMap), g.thickness.value = p.thickness, p.thicknessMap && (g.thicknessMap.value = p.thicknessMap), g.attenuationDistance.value = p.attenuationDistance, g.attenuationColor.value.copy(p.attenuationColor)), g.specularIntensity.value = p.specularIntensity, g.specularColor.value.copy(p.specularColor), p.specularIntensityMap && (g.specularIntensityMap.value = p.specularIntensityMap), p.specularColorMap && (g.specularColorMap.value = p.specularColorMap) }

    function f(g, p) { p.matcap && (g.matcap.value = p.matcap), p.bumpMap && (g.bumpMap.value = p.bumpMap, g.bumpScale.value = p.bumpScale, p.side === st && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, g.normalScale.value.copy(p.normalScale), p.side === st && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias) }

    function m(g, p) { p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias) }

    function x(g, p) { p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias), g.referencePosition.value.copy(p.referencePosition), g.nearDistance.value = p.nearDistance, g.farDistance.value = p.farDistance }

    function v(g, p) { p.bumpMap && (g.bumpMap.value = p.bumpMap, g.bumpScale.value = p.bumpScale, p.side === st && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, g.normalScale.value.copy(p.normalScale), p.side === st && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias) } return { refreshFogUniforms: e, refreshMaterialUniforms: t } }

function km() { const o = Ii("canvas"); return o.style.display = "block", o }

function qe(o = {}) { const e = o.canvas !== void 0 ? o.canvas : km(),
        t = o.context !== void 0 ? o.context : null,
        n = o.alpha !== void 0 ? o.alpha : !1,
        i = o.depth !== void 0 ? o.depth : !0,
        r = o.stencil !== void 0 ? o.stencil : !0,
        s = o.antialias !== void 0 ? o.antialias : !1,
        a = o.premultipliedAlpha !== void 0 ? o.premultipliedAlpha : !0,
        l = o.preserveDrawingBuffer !== void 0 ? o.preserveDrawingBuffer : !1,
        c = o.powerPreference !== void 0 ? o.powerPreference : "default",
        h = o.failIfMajorPerformanceCaveat !== void 0 ? o.failIfMajorPerformanceCaveat : !1; let u = null,
        d = null; const f = [],
        m = [];
    this.domElement = e, this.debug = { checkShaderErrors: !0 }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = an, this.physicallyCorrectLights = !1, this.toneMapping = rn, this.toneMappingExposure = 1; const x = this; let v = !1,
        g = 0,
        p = 0,
        M = null,
        y = -1,
        b = null; const E = new We,
        C = new We; let P = null,
        H = e.width,
        B = e.height,
        _ = 1,
        R = null,
        D = null; const N = new We(0, 0, H, B),
        z = new We(0, 0, H, B); let F = !1; const W = new Nr; let K = !1,
        ce = !1,
        k = null; const Z = new ge,
        ie = new S,
        de = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };

    function xe() { return M === null ? _ : 1 } let G = t;

    function Oe(T, I) { for (let U = 0; U < T.length; U++) { const O = T[U],
                Y = e.getContext(O, I); if (Y !== null) return Y } return null } try { const T = { alpha: !0, depth: i, stencil: r, antialias: s, premultipliedAlpha: a, preserveDrawingBuffer: l, powerPreference: c, failIfMajorPerformanceCaveat: h }; if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Ls}`), e.addEventListener("webglcontextlost", Ae, !1), e.addEventListener("webglcontextrestored", L, !1), G === null) { const I = ["webgl2", "webgl", "experimental-webgl"]; if (x.isWebGL1Renderer === !0 && I.shift(), G = Oe(I, T), G === null) throw Oe(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.") }
        G.getShaderPrecisionFormat === void 0 && (G.getShaderPrecisionFormat = function() { return { rangeMin: 1, rangeMax: 1, precision: 1 } }) } catch (T) { throw console.error("THREE.WebGLRenderer: " + T.message), T } let pe, we, ae, Re, Se, X, ee, Q, le, se, Me, Te, Ne, Xe, Ve, A, w, q, j, fe, V, ye, me;

    function re() { pe = new ap(G), we = new tp(G, pe, o), pe.init(we), ye = new Om(G, pe, we), ae = new Bm(G, pe, we), Re = new hp(G), Se = new Tm, X = new zm(G, pe, ae, Se, we, ye, Re), ee = new ip(x), Q = new op(x), le = new Su(G, we), me = new jf(G, pe, le, we), se = new lp(G, le, Re, me), Me = new pp(G, se, le, Re), j = new fp(G, we, X), A = new np(Se), Te = new Sm(x, ee, Q, pe, we, me, A), Ne = new Gm(Se), Xe = new Am, Ve = new Im(pe, we), q = new Qf(x, ee, ae, Me, n, a), w = new Bl(x, Me, we), fe = new ep(G, pe, Re, we), V = new cp(G, pe, Re, we), Re.programs = Te.programs, x.capabilities = we, x.extensions = pe, x.properties = Se, x.renderLists = Xe, x.shadowMap = w, x.state = ae, x.info = Re }
    re(); const ne = new Hm(x, G);
    this.xr = ne, this.getContext = function() { return G }, this.getContextAttributes = function() { return G.getContextAttributes() }, this.forceContextLoss = function() { const T = pe.get("WEBGL_lose_context");
        T && T.loseContext() }, this.forceContextRestore = function() { const T = pe.get("WEBGL_lose_context");
        T && T.restoreContext() }, this.getPixelRatio = function() { return _ }, this.setPixelRatio = function(T) { T !== void 0 && (_ = T, this.setSize(H, B, !1)) }, this.getSize = function(T) { return T.set(H, B) }, this.setSize = function(T, I, U) { if (ne.isPresenting) { console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."); return }
        H = T, B = I, e.width = Math.floor(T * _), e.height = Math.floor(I * _), U !== !1 && (e.style.width = T + "px", e.style.height = I + "px"), this.setViewport(0, 0, T, I) }, this.getDrawingBufferSize = function(T) { return T.set(H * _, B * _).floor() }, this.setDrawingBufferSize = function(T, I, U) { H = T, B = I, _ = U, e.width = Math.floor(T * U), e.height = Math.floor(I * U), this.setViewport(0, 0, T, I) }, this.getCurrentViewport = function(T) { return T.copy(E) }, this.getViewport = function(T) { return T.copy(N) }, this.setViewport = function(T, I, U, O) { T.isVector4 ? N.set(T.x, T.y, T.z, T.w) : N.set(T, I, U, O), ae.viewport(E.copy(N).multiplyScalar(_).floor()) }, this.getScissor = function(T) { return T.copy(z) }, this.setScissor = function(T, I, U, O) { T.isVector4 ? z.set(T.x, T.y, T.z, T.w) : z.set(T, I, U, O), ae.scissor(C.copy(z).multiplyScalar(_).floor()) }, this.getScissorTest = function() { return F }, this.setScissorTest = function(T) { ae.setScissorTest(F = T) }, this.setOpaqueSort = function(T) { R = T }, this.setTransparentSort = function(T) { D = T }, this.getClearColor = function(T) { return T.copy(q.getClearColor()) }, this.setClearColor = function() { q.setClearColor.apply(q, arguments) }, this.getClearAlpha = function() { return q.getClearAlpha() }, this.setClearAlpha = function() { q.setClearAlpha.apply(q, arguments) }, this.clear = function(T, I, U) { let O = 0;
        (T === void 0 || T) && (O |= 16384), (I === void 0 || I) && (O |= 256), (U === void 0 || U) && (O |= 1024), G.clear(O) }, this.clearColor = function() { this.clear(!0, !1, !1) }, this.clearDepth = function() { this.clear(!1, !0, !1) }, this.clearStencil = function() { this.clear(!1, !1, !0) }, this.dispose = function() { e.removeEventListener("webglcontextlost", Ae, !1), e.removeEventListener("webglcontextrestored", L, !1), Xe.dispose(), Ve.dispose(), Se.dispose(), ee.dispose(), Q.dispose(), Me.dispose(), me.dispose(), Te.dispose(), ne.dispose(), ne.removeEventListener("sessionstart", Fe), ne.removeEventListener("sessionend", $e), k && (k.dispose(), k = null), bt.stop() };

    function Ae(T) { T.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), v = !0 }

    function L() { console.log("THREE.WebGLRenderer: Context Restored."), v = !1; const T = Re.autoReset,
            I = w.enabled,
            U = w.autoUpdate,
            O = w.needsUpdate,
            Y = w.type;
        re(), Re.autoReset = T, w.enabled = I, w.autoUpdate = U, w.needsUpdate = O, w.type = Y }

    function ue(T) { const I = T.target;
        I.removeEventListener("dispose", ue), oe(I) }

    function oe(T) { be(T), Se.remove(T) }

    function be(T) { const I = Se.get(T).programs;
        I !== void 0 && (I.forEach(function(U) { Te.releaseProgram(U) }), T.isShaderMaterial && Te.releaseShaderCache(T)) }
    this.renderBufferDirect = function(T, I, U, O, Y, Ee) { I === null && (I = de); const Ce = Y.isMesh && Y.matrixWorld.determinant() < 0,
            Pe = th(T, I, U, O, Y);
        ae.setMaterial(O, Ce); let Le = U.index; const Ge = U.attributes.position; if (Le === null) { if (Ge === void 0 || Ge.count === 0) return } else if (Le.count === 0) return; let Be = 1;
        O.wireframe === !0 && (Le = se.getWireframeAttribute(U), Be = 2), me.setup(Y, O, Pe, U, Le); let ze, je = fe;
        Le !== null && (ze = le.get(Le), je = V, je.setIndex(ze)); const bn = Le !== null ? Le.count : Ge.count,
            Fn = U.drawRange.start * Be,
            Ue = U.drawRange.count * Be,
            zt = Ee !== null ? Ee.start * Be : 0,
            rt = Ee !== null ? Ee.count * Be : 1 / 0,
            Ot = Math.max(Fn, zt),
            ir = Math.min(bn, Fn + Ue, zt + rt) - 1,
            Ut = Math.max(0, ir - Ot + 1); if (Ut !== 0) { if (Y.isMesh) O.wireframe === !0 ? (ae.setLineWidth(O.wireframeLinewidth * xe()), je.setMode(1)) : je.setMode(4);
            else if (Y.isLine) { let Xt = O.linewidth;
                Xt === void 0 && (Xt = 1), ae.setLineWidth(Xt * xe()), Y.isLineSegments ? je.setMode(1) : Y.isLineLoop ? je.setMode(2) : je.setMode(3) } else Y.isPoints ? je.setMode(0) : Y.isSprite && je.setMode(4); if (Y.isInstancedMesh) je.renderInstances(Ot, Ut, Y.count);
            else if (U.isInstancedBufferGeometry) { const Xt = Math.min(U.instanceCount, U._maxInstanceCount);
                je.renderInstances(Ot, Ut, Xt) } else je.render(Ot, Ut) } }, this.compile = function(T, I) { d = Ve.get(T), d.init(), m.push(d), T.traverseVisible(function(U) { U.isLight && U.layers.test(I.layers) && (d.pushLight(U), U.castShadow && d.pushShadow(U)) }), d.setupLights(x.physicallyCorrectLights), T.traverse(function(U) { const O = U.material; if (O)
                if (Array.isArray(O))
                    for (let Y = 0; Y < O.length; Y++) { const Ee = O[Y];
                        Rs(Ee, T, U) } else Rs(O, T, U) }), m.pop(), d = null }; let J = null;

    function ve(T) { J && J(T) }

    function Fe() { bt.stop() }

    function $e() { bt.start() } const bt = new nl;
    bt.setAnimationLoop(ve), typeof window != "undefined" && bt.setContext(window), this.setAnimationLoop = function(T) { J = T, ne.setAnimationLoop(T), T === null ? bt.stop() : bt.start() }, ne.addEventListener("sessionstart", Fe), ne.addEventListener("sessionend", $e), this.render = function(T, I) { if (I !== void 0 && I.isCamera !== !0) { console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); return } if (v === !0) return;
        T.autoUpdate === !0 && T.updateMatrixWorld(), I.parent === null && I.updateMatrixWorld(), ne.enabled === !0 && ne.isPresenting === !0 && (ne.cameraAutoUpdate === !0 && ne.updateCamera(I), I = ne.getCamera()), T.isScene === !0 && T.onBeforeRender(x, T, I, M), d = Ve.get(T, m.length), d.init(), m.push(d), Z.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), W.setFromProjectionMatrix(Z), ce = this.localClippingEnabled, K = A.init(this.clippingPlanes, ce, I), u = Xe.get(T, f.length), u.init(), f.push(u), Qe(T, I, 0, x.sortObjects), u.finish(), x.sortObjects === !0 && u.sort(R, D), K === !0 && A.beginShadows(); const U = d.state.shadowsArray; if (w.render(U, T, I), K === !0 && A.endShadows(), this.info.autoReset === !0 && this.info.reset(), q.render(u, T), d.setupLights(x.physicallyCorrectLights), I.isArrayCamera) { const O = I.cameras; for (let Y = 0, Ee = O.length; Y < Ee; Y++) { const Ce = O[Y];
                Bt(u, T, Ce, Ce.viewport) } } else Bt(u, T, I);
        M !== null && (X.updateMultisampleRenderTarget(M), X.updateRenderTargetMipmap(M)), T.isScene === !0 && T.onAfterRender(x, T, I), ae.buffers.depth.setTest(!0), ae.buffers.depth.setMask(!0), ae.buffers.color.setMask(!0), ae.setPolygonOffset(!1), me.resetDefaultState(), y = -1, b = null, m.pop(), m.length > 0 ? d = m[m.length - 1] : d = null, f.pop(), f.length > 0 ? u = f[f.length - 1] : u = null };

    function Qe(T, I, U, O) { if (T.visible === !1) return; if (T.layers.test(I.layers)) { if (T.isGroup) U = T.renderOrder;
            else if (T.isLOD) T.autoUpdate === !0 && T.update(I);
            else if (T.isLight) d.pushLight(T), T.castShadow && d.pushShadow(T);
            else if (T.isSprite) { if (!T.frustumCulled || W.intersectsSprite(T)) { O && ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Z); const Ce = Me.update(T),
                        Pe = T.material;
                    Pe.visible && u.push(T, Ce, Pe, U, ie.z, null) } } else if ((T.isMesh || T.isLine || T.isPoints) && (T.isSkinnedMesh && T.skeleton.frame !== Re.render.frame && (T.skeleton.update(), T.skeleton.frame = Re.render.frame), !T.frustumCulled || W.intersectsObject(T))) { O && ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Z); const Ce = Me.update(T),
                    Pe = T.material; if (Array.isArray(Pe)) { const Le = Ce.groups; for (let Ge = 0, Be = Le.length; Ge < Be; Ge++) { const ze = Le[Ge],
                            je = Pe[ze.materialIndex];
                        je && je.visible && u.push(T, Ce, je, U, ie.z, ze) } } else Pe.visible && u.push(T, Ce, Pe, U, ie.z, null) } } const Ee = T.children; for (let Ce = 0, Pe = Ee.length; Ce < Pe; Ce++) Qe(Ee[Ce], I, U, O) }

    function Bt(T, I, U, O) { const Y = T.opaque,
            Ee = T.transmissive,
            Ce = T.transparent;
        d.setupLightsView(U), Ee.length > 0 && qt(Y, I, U), O && ae.viewport(E.copy(O)), Y.length > 0 && nr(Y, I, U), Ee.length > 0 && nr(Ee, I, U), Ce.length > 0 && nr(Ce, I, U) }

    function qt(T, I, U) { if (k === null) { const Ce = s === !0 && we.isWebGL2 === !0 ? Ys : Tt;
            k = new Ce(1024, 1024, { generateMipmaps: !0, type: ye.convert(Un) !== null ? Un : sn, minFilter: Li, magFilter: it, wrapS: _t, wrapT: _t, useRenderToTexture: pe.has("WEBGL_multisampled_render_to_texture") }) } const O = x.getRenderTarget();
        x.setRenderTarget(k), x.clear(); const Y = x.toneMapping;
        x.toneMapping = rn, nr(T, I, U), x.toneMapping = Y, X.updateMultisampleRenderTarget(k), X.updateRenderTargetMipmap(k), x.setRenderTarget(O) }

    function nr(T, I, U) { const O = I.isScene === !0 ? I.overrideMaterial : null; for (let Y = 0, Ee = T.length; Y < Ee; Y++) { const Ce = T[Y],
                Pe = Ce.object,
                Le = Ce.geometry,
                Ge = O === null ? Ce.material : O,
                Be = Ce.group;
            Pe.layers.test(U.layers) && eh(Pe, I, U, Le, Ge, Be) } }

    function eh(T, I, U, O, Y, Ee) { T.onBeforeRender(x, I, U, O, Y, Ee), T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, T.matrixWorld), T.normalMatrix.getNormalMatrix(T.modelViewMatrix), Y.onBeforeRender(x, I, U, O, T, Ee), Y.transparent === !0 && Y.side === Nn ? (Y.side = st, Y.needsUpdate = !0, x.renderBufferDirect(U, I, O, Y, T, Ee), Y.side = Ai, Y.needsUpdate = !0, x.renderBufferDirect(U, I, O, Y, T, Ee), Y.side = Nn) : x.renderBufferDirect(U, I, O, Y, T, Ee), T.onAfterRender(x, I, U, O, Y, Ee) }

    function Rs(T, I, U) { I.isScene !== !0 && (I = de); const O = Se.get(T),
            Y = d.state.lights,
            Ee = d.state.shadowsArray,
            Ce = Y.state.version,
            Pe = Te.getParameters(T, Y.state, Ee, I, U),
            Le = Te.getProgramCacheKey(Pe); let Ge = O.programs;
        O.environment = T.isMeshStandardMaterial ? I.environment : null, O.fog = I.fog, O.envMap = (T.isMeshStandardMaterial ? Q : ee).get(T.envMap || O.environment), Ge === void 0 && (T.addEventListener("dispose", ue), Ge = new Map, O.programs = Ge); let Be = Ge.get(Le); if (Be !== void 0) { if (O.currentProgram === Be && O.lightsStateVersion === Ce) return ia(T, Pe), Be } else Pe.uniforms = Te.getUniforms(T), T.onBuild(U, Pe, x), T.onBeforeCompile(Pe, x), Be = Te.acquireProgram(Pe, Le), Ge.set(Le, Be), O.uniforms = Pe.uniforms; const ze = O.uniforms;
        (!T.isShaderMaterial && !T.isRawShaderMaterial || T.clipping === !0) && (ze.clippingPlanes = A.uniform), ia(T, Pe), O.needsLights = ih(T), O.lightsStateVersion = Ce, O.needsLights && (ze.ambientLightColor.value = Y.state.ambient, ze.lightProbe.value = Y.state.probe, ze.directionalLights.value = Y.state.directional, ze.directionalLightShadows.value = Y.state.directionalShadow, ze.spotLights.value = Y.state.spot, ze.spotLightShadows.value = Y.state.spotShadow, ze.rectAreaLights.value = Y.state.rectArea, ze.ltc_1.value = Y.state.rectAreaLTC1, ze.ltc_2.value = Y.state.rectAreaLTC2, ze.pointLights.value = Y.state.point, ze.pointLightShadows.value = Y.state.pointShadow, ze.hemisphereLights.value = Y.state.hemi, ze.directionalShadowMap.value = Y.state.directionalShadowMap, ze.directionalShadowMatrix.value = Y.state.directionalShadowMatrix, ze.spotShadowMap.value = Y.state.spotShadowMap, ze.spotShadowMatrix.value = Y.state.spotShadowMatrix, ze.pointShadowMap.value = Y.state.pointShadowMap, ze.pointShadowMatrix.value = Y.state.pointShadowMatrix); const je = Be.getUniforms(),
            bn = xn.seqWithValue(je.seq, ze); return O.currentProgram = Be, O.uniformsList = bn, Be }

    function ia(T, I) { const U = Se.get(T);
        U.outputEncoding = I.outputEncoding, U.instancing = I.instancing, U.skinning = I.skinning, U.morphTargets = I.morphTargets, U.morphNormals = I.morphNormals, U.morphTargetsCount = I.morphTargetsCount, U.numClippingPlanes = I.numClippingPlanes, U.numIntersection = I.numClipIntersection, U.vertexAlphas = I.vertexAlphas, U.vertexTangents = I.vertexTangents, U.toneMapping = I.toneMapping }

    function th(T, I, U, O, Y) { I.isScene !== !0 && (I = de), X.resetTextureUnits(); const Ee = I.fog,
            Ce = O.isMeshStandardMaterial ? I.environment : null,
            Pe = M === null ? x.outputEncoding : M.isXRRenderTarget === !0 ? M.texture.encoding : an,
            Le = (O.isMeshStandardMaterial ? Q : ee).get(O.envMap || Ce),
            Ge = O.vertexColors === !0 && !!U.attributes.color && U.attributes.color.itemSize === 4,
            Be = !!O.normalMap && !!U.attributes.tangent,
            ze = !!U.morphAttributes.position,
            je = !!U.morphAttributes.normal,
            bn = U.morphAttributes.position ? U.morphAttributes.position.length : 0,
            Fn = O.toneMapped ? x.toneMapping : rn,
            Ue = Se.get(O),
            zt = d.state.lights; if (K === !0 && (ce === !0 || T !== b)) { const Rt = T === b && O.id === y;
            A.setState(O, T, Rt) } let rt = !1;
        O.version === Ue.__version ? (Ue.needsLights && Ue.lightsStateVersion !== zt.state.version || Ue.outputEncoding !== Pe || Y.isInstancedMesh && Ue.instancing === !1 || !Y.isInstancedMesh && Ue.instancing === !0 || Y.isSkinnedMesh && Ue.skinning === !1 || !Y.isSkinnedMesh && Ue.skinning === !0 || Ue.envMap !== Le || O.fog && Ue.fog !== Ee || Ue.numClippingPlanes !== void 0 && (Ue.numClippingPlanes !== A.numPlanes || Ue.numIntersection !== A.numIntersection) || Ue.vertexAlphas !== Ge || Ue.vertexTangents !== Be || Ue.morphTargets !== ze || Ue.morphNormals !== je || Ue.toneMapping !== Fn || we.isWebGL2 === !0 && Ue.morphTargetsCount !== bn) && (rt = !0) : (rt = !0, Ue.__version = O.version); let Ot = Ue.currentProgram;
        rt === !0 && (Ot = Rs(O, I, Y)); let ir = !1,
            Ut = !1,
            Xt = !1; const dt = Ot.getUniforms(),
            Ti = Ue.uniforms; if (ae.useProgram(Ot.program) && (ir = !0, Ut = !0, Xt = !0), O.id !== y && (y = O.id, Ut = !0), ir || b !== T) { if (dt.setValue(G, "projectionMatrix", T.projectionMatrix), we.logarithmicDepthBuffer && dt.setValue(G, "logDepthBufFC", 2 / (Math.log(T.far + 1) / Math.LN2)), b !== T && (b = T, Ut = !0, Xt = !0), O.isShaderMaterial || O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshStandardMaterial || O.envMap) { const Rt = dt.map.cameraPosition;
                Rt !== void 0 && Rt.setValue(G, ie.setFromMatrixPosition(T.matrixWorld)) }(O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && dt.setValue(G, "isOrthographic", T.isOrthographicCamera === !0), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial || O.isShadowMaterial || Y.isSkinnedMesh) && dt.setValue(G, "viewMatrix", T.matrixWorldInverse) } if (Y.isSkinnedMesh) { dt.setOptional(G, Y, "bindMatrix"), dt.setOptional(G, Y, "bindMatrixInverse"); const Rt = Y.skeleton;
            Rt && (we.floatVertexTextures ? (Rt.boneTexture === null && Rt.computeBoneTexture(), dt.setValue(G, "boneTexture", Rt.boneTexture, X), dt.setValue(G, "boneTextureSize", Rt.boneTextureSize)) : dt.setOptional(G, Rt, "boneMatrices")) } return !!U && (U.morphAttributes.position !== void 0 || U.morphAttributes.normal !== void 0) && j.update(Y, U, O, Ot), (Ut || Ue.receiveShadow !== Y.receiveShadow) && (Ue.receiveShadow = Y.receiveShadow, dt.setValue(G, "receiveShadow", Y.receiveShadow)), Ut && (dt.setValue(G, "toneMappingExposure", x.toneMappingExposure), Ue.needsLights && nh(Ti, Xt), Ee && O.fog && Ne.refreshFogUniforms(Ti, Ee), Ne.refreshMaterialUniforms(Ti, O, _, B, k), xn.upload(G, Ue.uniformsList, Ti, X)), O.isShaderMaterial && O.uniformsNeedUpdate === !0 && (xn.upload(G, Ue.uniformsList, Ti, X), O.uniformsNeedUpdate = !1), O.isSpriteMaterial && dt.setValue(G, "center", Y.center), dt.setValue(G, "modelViewMatrix", Y.modelViewMatrix), dt.setValue(G, "normalMatrix", Y.normalMatrix), dt.setValue(G, "modelMatrix", Y.matrixWorld), Ot }

    function nh(T, I) { T.ambientLightColor.needsUpdate = I, T.lightProbe.needsUpdate = I, T.directionalLights.needsUpdate = I, T.directionalLightShadows.needsUpdate = I, T.pointLights.needsUpdate = I, T.pointLightShadows.needsUpdate = I, T.spotLights.needsUpdate = I, T.spotLightShadows.needsUpdate = I, T.rectAreaLights.needsUpdate = I, T.hemisphereLights.needsUpdate = I }

    function ih(T) { return T.isMeshLambertMaterial || T.isMeshToonMaterial || T.isMeshPhongMaterial || T.isMeshStandardMaterial || T.isShadowMaterial || T.isShaderMaterial && T.lights === !0 }
    this.getActiveCubeFace = function() { return g }, this.getActiveMipmapLevel = function() { return p }, this.getRenderTarget = function() { return M }, this.setRenderTargetTextures = function(T, I, U) { Se.get(T.texture).__webglTexture = I, Se.get(T.depthTexture).__webglTexture = U; const O = Se.get(T);
        O.__hasExternalTextures = !0, O.__hasExternalTextures && (O.__autoAllocateDepthBuffer = U === void 0, O.__autoAllocateDepthBuffer || T.useRenderToTexture && (console.warn("render-to-texture extension was disabled because an external texture was provided"), T.useRenderToTexture = !1, T.useRenderbuffer = !0)) }, this.setRenderTargetFramebuffer = function(T, I) { const U = Se.get(T);
        U.__webglFramebuffer = I, U.__useDefaultFramebuffer = I === void 0 }, this.setRenderTarget = function(T, I = 0, U = 0) { M = T, g = I, p = U; let O = !0; if (T) { const Le = Se.get(T);
            Le.__useDefaultFramebuffer !== void 0 ? (ae.bindFramebuffer(36160, null), O = !1) : Le.__webglFramebuffer === void 0 ? X.setupRenderTarget(T) : Le.__hasExternalTextures && X.rebindTextures(T, Se.get(T.texture).__webglTexture, Se.get(T.depthTexture).__webglTexture) } let Y = null,
            Ee = !1,
            Ce = !1; if (T) { const Le = T.texture;
            (Le.isDataTexture3D || Le.isDataTexture2DArray) && (Ce = !0); const Ge = Se.get(T).__webglFramebuffer;
            T.isWebGLCubeRenderTarget ? (Y = Ge[I], Ee = !0) : T.useRenderbuffer ? Y = Se.get(T).__webglMultisampledFramebuffer : Y = Ge, E.copy(T.viewport), C.copy(T.scissor), P = T.scissorTest } else E.copy(N).multiplyScalar(_).floor(), C.copy(z).multiplyScalar(_).floor(), P = F; if (ae.bindFramebuffer(36160, Y) && we.drawBuffers && O && ae.drawBuffers(T, Y), ae.viewport(E), ae.scissor(C), ae.setScissorTest(P), Ee) { const Le = Se.get(T.texture);
            G.framebufferTexture2D(36160, 36064, 34069 + I, Le.__webglTexture, U) } else if (Ce) { const Le = Se.get(T.texture),
                Ge = I || 0;
            G.framebufferTextureLayer(36160, 36064, Le.__webglTexture, U || 0, Ge) }
        y = -1 }, this.readRenderTargetPixels = function(T, I, U, O, Y, Ee, Ce) { if (!(T && T.isWebGLRenderTarget)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); return } let Pe = Se.get(T).__webglFramebuffer; if (T.isWebGLCubeRenderTarget && Ce !== void 0 && (Pe = Pe[Ce]), Pe) { ae.bindFramebuffer(36160, Pe); try { const Le = T.texture,
                    Ge = Le.format,
                    Be = Le.type; if (Ge !== ft && ye.convert(Ge) !== G.getParameter(35739)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."); return } const ze = Be === Un && (pe.has("EXT_color_buffer_half_float") || we.isWebGL2 && pe.has("EXT_color_buffer_float")); if (Be !== sn && ye.convert(Be) !== G.getParameter(35738) && !(Be === on && (we.isWebGL2 || pe.has("OES_texture_float") || pe.has("WEBGL_color_buffer_float"))) && !ze) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."); return }
                G.checkFramebufferStatus(36160) === 36053 ? I >= 0 && I <= T.width - O && U >= 0 && U <= T.height - Y && G.readPixels(I, U, O, Y, ye.convert(Ge), ye.convert(Be), Ee) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") } finally { const Le = M !== null ? Se.get(M).__webglFramebuffer : null;
                ae.bindFramebuffer(36160, Le) } } }, this.copyFramebufferToTexture = function(T, I, U = 0) { if (I.isFramebufferTexture !== !0) { console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture."); return } const O = Math.pow(2, -U),
            Y = Math.floor(I.image.width * O),
            Ee = Math.floor(I.image.height * O);
        X.setTexture2D(I, 0), G.copyTexSubImage2D(3553, U, 0, 0, T.x, T.y, Y, Ee), ae.unbindTexture() }, this.copyTextureToTexture = function(T, I, U, O = 0) { const Y = I.image.width,
            Ee = I.image.height,
            Ce = ye.convert(U.format),
            Pe = ye.convert(U.type);
        X.setTexture2D(U, 0), G.pixelStorei(37440, U.flipY), G.pixelStorei(37441, U.premultiplyAlpha), G.pixelStorei(3317, U.unpackAlignment), I.isDataTexture ? G.texSubImage2D(3553, O, T.x, T.y, Y, Ee, Ce, Pe, I.image.data) : I.isCompressedTexture ? G.compressedTexSubImage2D(3553, O, T.x, T.y, I.mipmaps[0].width, I.mipmaps[0].height, Ce, I.mipmaps[0].data) : G.texSubImage2D(3553, O, T.x, T.y, Ce, Pe, I.image), O === 0 && U.generateMipmaps && G.generateMipmap(3553), ae.unbindTexture() }, this.copyTextureToTexture3D = function(T, I, U, O, Y = 0) { if (x.isWebGL1Renderer) { console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."); return } const Ee = T.max.x - T.min.x + 1,
            Ce = T.max.y - T.min.y + 1,
            Pe = T.max.z - T.min.z + 1,
            Le = ye.convert(O.format),
            Ge = ye.convert(O.type); let Be; if (O.isDataTexture3D) X.setTexture3D(O, 0), Be = 32879;
        else if (O.isDataTexture2DArray) X.setTexture2DArray(O, 0), Be = 35866;
        else { console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."); return }
        G.pixelStorei(37440, O.flipY), G.pixelStorei(37441, O.premultiplyAlpha), G.pixelStorei(3317, O.unpackAlignment); const ze = G.getParameter(3314),
            je = G.getParameter(32878),
            bn = G.getParameter(3316),
            Fn = G.getParameter(3315),
            Ue = G.getParameter(32877),
            zt = U.isCompressedTexture ? U.mipmaps[0] : U.image;
        G.pixelStorei(3314, zt.width), G.pixelStorei(32878, zt.height), G.pixelStorei(3316, T.min.x), G.pixelStorei(3315, T.min.y), G.pixelStorei(32877, T.min.z), U.isDataTexture || U.isDataTexture3D ? G.texSubImage3D(Be, Y, I.x, I.y, I.z, Ee, Ce, Pe, Le, Ge, zt.data) : U.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), G.compressedTexSubImage3D(Be, Y, I.x, I.y, I.z, Ee, Ce, Pe, Le, zt.data)) : G.texSubImage3D(Be, Y, I.x, I.y, I.z, Ee, Ce, Pe, Le, Ge, zt), G.pixelStorei(3314, ze), G.pixelStorei(32878, je), G.pixelStorei(3316, bn), G.pixelStorei(3315, Fn), G.pixelStorei(32877, Ue), Y === 0 && O.generateMipmaps && G.generateMipmap(Be), ae.unbindTexture() }, this.initTexture = function(T) { X.setTexture2D(T, 0), ae.unbindTexture() }, this.resetState = function() { g = 0, p = 0, M = null, ae.reset(), me.reset() }, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) }
qe.prototype.isWebGLRenderer = !0;
class Vm extends qe {}
Vm.prototype.isWebGL1Renderer = !0;
class Hr { constructor(e, t = 25e-5) { this.name = "", this.color = new he(e), this.density = t }
    clone() { return new Hr(this.color, this.density) }
    toJSON() { return { type: "FogExp2", color: this.color.getHex(), density: this.density } } }
Hr.prototype.isFogExp2 = !0;
class Gr { constructor(e, t = 1, n = 1e3) { this.name = "", this.color = new he(e), this.near = t, this.far = n }
    clone() { return new Gr(this.color, this.near, this.far) }
    toJSON() { return { type: "Fog", color: this.color.getHex(), near: this.near, far: this.far } } }
Gr.prototype.isFog = !0;
class Eo extends He { constructor() { super();
        this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) }
    copy(e, t) { return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this }
    toJSON(e) { const t = super.toJSON(e); return this.fog !== null && (t.object.fog = this.fog.toJSON()), t } }
Eo.prototype.isScene = !0;
class fi { constructor(e, t) { this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Di, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = Lt() }
    onUploadCallback() {}
    set needsUpdate(e) { e === !0 && this.version++ }
    setUsage(e) { return this.usage = e, this }
    copy(e) { return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this }
    copyAt(e, t, n) { e *= this.stride, n *= t.stride; for (let i = 0, r = this.stride; i < r; i++) this.array[e + i] = t.array[n + i]; return this }
    set(e, t = 0) { return this.array.set(e, t), this }
    clone(e) { e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Lt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer); const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),
            n = new this.constructor(t, this.stride); return n.setUsage(this.usage), n }
    onUpload(e) { return this.onUploadCallback = e, this }
    toJSON(e) { return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Lt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride } } }
fi.prototype.isInterleavedBuffer = !0;
const nt = new S;
class In { constructor(e, t, n, i = !1) { this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i === !0 }
    get count() { return this.data.count }
    get array() { return this.data.array }
    set needsUpdate(e) { this.data.needsUpdate = e }
    applyMatrix4(e) { for (let t = 0, n = this.data.count; t < n; t++) nt.x = this.getX(t), nt.y = this.getY(t), nt.z = this.getZ(t), nt.applyMatrix4(e), this.setXYZ(t, nt.x, nt.y, nt.z); return this }
    applyNormalMatrix(e) { for (let t = 0, n = this.count; t < n; t++) nt.x = this.getX(t), nt.y = this.getY(t), nt.z = this.getZ(t), nt.applyNormalMatrix(e), this.setXYZ(t, nt.x, nt.y, nt.z); return this }
    transformDirection(e) { for (let t = 0, n = this.count; t < n; t++) nt.x = this.getX(t), nt.y = this.getY(t), nt.z = this.getZ(t), nt.transformDirection(e), this.setXYZ(t, nt.x, nt.y, nt.z); return this }
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
    clone(e) { if (e === void 0) { console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data."); const t = []; for (let n = 0; n < this.count; n++) { const i = n * this.data.stride + this.offset; for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]) } return new et(new this.array.constructor(t), this.itemSize, this.normalized) } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new In(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized) }
    toJSON(e) { if (e === void 0) { console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data."); const t = []; for (let n = 0; n < this.count; n++) { const i = n * this.data.stride + this.offset; for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]) } return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized } } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: !0, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized } } }
In.prototype.isInterleavedBufferAttribute = !0;
class Ao extends ut { constructor(e) { super();
        this.type = "SpriteMaterial", this.color = new he(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(e) }
    copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this } }
Ao.prototype.isSpriteMaterial = !0;
let pi;
const ki = new S,
    mi = new S,
    gi = new S,
    xi = new $,
    Vi = new $,
    Ol = new ge,
    kr = new S,
    Wi = new S,
    Vr = new S,
    Ul = new $,
    Co = new $,
    Hl = new $;
class Gl extends He { constructor(e) { super(); if (this.type = "Sprite", pi === void 0) { pi = new De; const t = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),
                n = new fi(t, 5);
            pi.setIndex([0, 1, 2, 0, 2, 3]), pi.setAttribute("position", new In(n, 3, 0, !1)), pi.setAttribute("uv", new In(n, 2, 3, !1)) }
        this.geometry = pi, this.material = e !== void 0 ? e : new Ao, this.center = new $(.5, .5) }
    raycast(e, t) { e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), mi.setFromMatrixScale(this.matrixWorld), Ol.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), gi.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && mi.multiplyScalar(-gi.z); const n = this.material.rotation; let i, r;
        n !== 0 && (r = Math.cos(n), i = Math.sin(n)); const s = this.center;
        Wr(kr.set(-.5, -.5, 0), gi, s, mi, i, r), Wr(Wi.set(.5, -.5, 0), gi, s, mi, i, r), Wr(Vr.set(.5, .5, 0), gi, s, mi, i, r), Ul.set(0, 0), Co.set(1, 0), Hl.set(1, 1); let a = e.ray.intersectTriangle(kr, Wi, Vr, !1, ki); if (a === null && (Wr(Wi.set(-.5, .5, 0), gi, s, mi, i, r), Co.set(0, 1), a = e.ray.intersectTriangle(kr, Vr, Wi, !1, ki), a === null)) return; const l = e.ray.origin.distanceTo(ki);
        l < e.near || l > e.far || t.push({ distance: l, point: ki.clone(), uv: tt.getUV(ki, kr, Wi, Vr, Ul, Co, Hl, new $), face: null, object: this }) }
    copy(e) { return super.copy(e), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this } }
Gl.prototype.isSprite = !0;

function Wr(o, e, t, n, i, r) { xi.subVectors(o, t).addScalar(.5).multiply(n), i !== void 0 ? (Vi.x = r * xi.x - i * xi.y, Vi.y = i * xi.x + r * xi.y) : Vi.copy(xi), o.copy(e), o.x += Vi.x, o.y += Vi.y, o.applyMatrix4(Ol) }
const qr = new S,
    kl = new S;
class Wm extends He { constructor() { super();
        this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, { levels: { enumerable: !0, value: [] }, isLOD: { value: !0 } }), this.autoUpdate = !0 }
    copy(e) { super.copy(e, !1); const t = e.levels; for (let n = 0, i = t.length; n < i; n++) { const r = t[n];
            this.addLevel(r.object.clone(), r.distance) } return this.autoUpdate = e.autoUpdate, this }
    addLevel(e, t = 0) { t = Math.abs(t); const n = this.levels; let i; for (i = 0; i < n.length && !(t < n[i].distance); i++); return n.splice(i, 0, { distance: t, object: e }), this.add(e), this }
    getCurrentLevel() { return this._currentLevel }
    getObjectForDistance(e) { const t = this.levels; if (t.length > 0) { let n, i; for (n = 1, i = t.length; n < i && !(e < t[n].distance); n++); return t[n - 1].object } return null }
    raycast(e, t) { if (this.levels.length > 0) { qr.setFromMatrixPosition(this.matrixWorld); const i = e.ray.origin.distanceTo(qr);
            this.getObjectForDistance(i).raycast(e, t) } }
    update(e) { const t = this.levels; if (t.length > 1) { qr.setFromMatrixPosition(e.matrixWorld), kl.setFromMatrixPosition(this.matrixWorld); const n = qr.distanceTo(kl) / e.zoom;
            t[0].object.visible = !0; let i, r; for (i = 1, r = t.length; i < r && n >= t[i].distance; i++) t[i - 1].object.visible = !1, t[i].object.visible = !0; for (this._currentLevel = i - 1; i < r; i++) t[i].object.visible = !1 } }
    toJSON(e) { const t = super.toJSON(e);
        this.autoUpdate === !1 && (t.object.autoUpdate = !1), t.object.levels = []; const n = this.levels; for (let i = 0, r = n.length; i < r; i++) { const s = n[i];
            t.object.levels.push({ object: s.object.uuid, distance: s.distance }) } return t } }
const Vl = new S,
    Wl = new We,
    ql = new We,
    qm = new S,
    Xl = new ge;
class Ro extends pt { constructor(e, t) { super(e, t);
        this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new ge, this.bindMatrixInverse = new ge }
    copy(e) { return super.copy(e), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this }
    bind(e, t) { this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert() }
    pose() { this.skeleton.pose() }
    normalizeSkinWeights() { const e = new We,
            t = this.geometry.attributes.skinWeight; for (let n = 0, i = t.count; n < i; n++) { e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.w = t.getW(n); const r = 1 / e.manhattanLength();
            r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w) } }
    updateMatrixWorld(e) { super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode) }
    boneTransform(e, t) { const n = this.skeleton,
            i = this.geometry;
        Wl.fromBufferAttribute(i.attributes.skinIndex, e), ql.fromBufferAttribute(i.attributes.skinWeight, e), Vl.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0); for (let r = 0; r < 4; r++) { const s = ql.getComponent(r); if (s !== 0) { const a = Wl.getComponent(r);
                Xl.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(qm.copy(Vl).applyMatrix4(Xl), s) } } return t.applyMatrix4(this.bindMatrixInverse) } }
Ro.prototype.isSkinnedMesh = !0;
class Lo extends He { constructor() { super();
        this.type = "Bone" } }
Lo.prototype.isBone = !0;
class qi extends ot { constructor(e = null, t = 1, n = 1, i, r, s, a, l, c = it, h = it, u, d) { super(null, s, a, l, c, h, i, r, u, d);
        this.image = { data: e, width: t, height: n }, this.magFilter = c, this.minFilter = h, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } }
qi.prototype.isDataTexture = !0;
const Jl = new ge,
    Xm = new ge;
class Po { constructor(e = [], t = []) { this.uuid = Lt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init() }
    init() { const e = this.bones,
            t = this.boneInverses; if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
        else if (e.length !== t.length) { console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = []; for (let n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new ge) } }
    calculateInverses() { this.boneInverses.length = 0; for (let e = 0, t = this.bones.length; e < t; e++) { const n = new ge;
            this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n) } }
    pose() { for (let e = 0, t = this.bones.length; e < t; e++) { const n = this.bones[e];
            n && n.matrixWorld.copy(this.boneInverses[e]).invert() } for (let e = 0, t = this.bones.length; e < t; e++) { const n = this.bones[e];
            n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale)) } }
    update() { const e = this.bones,
            t = this.boneInverses,
            n = this.boneMatrices,
            i = this.boneTexture; for (let r = 0, s = e.length; r < s; r++) { const a = e[r] ? e[r].matrixWorld : Xm;
            Jl.multiplyMatrices(a, t[r]), Jl.toArray(n, r * 16) }
        i !== null && (i.needsUpdate = !0) }
    clone() { return new Po(this.bones, this.boneInverses) }
    computeBoneTexture() { let e = Math.sqrt(this.bones.length * 4);
        e = iu(e), e = Math.max(e, 4); const t = new Float32Array(e * e * 4);
        t.set(this.boneMatrices); const n = new qi(t, e, e, ft, on); return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this.boneTextureSize = e, this }
    getBoneByName(e) { for (let t = 0, n = this.bones.length; t < n; t++) { const i = this.bones[t]; if (i.name === e) return i } }
    dispose() { this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null) }
    fromJSON(e, t) { this.uuid = e.uuid; for (let n = 0, i = e.bones.length; n < i; n++) { const r = e.bones[n]; let s = t[r];
            s === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), s = new Lo), this.bones.push(s), this.boneInverses.push(new ge().fromArray(e.boneInverses[n])) } return this.init(), this }
    toJSON() { const e = { metadata: { version: 4.5, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
        e.uuid = this.uuid; const t = this.bones,
            n = this.boneInverses; for (let i = 0, r = t.length; i < r; i++) { const s = t[i];
            e.bones.push(s.uuid); const a = n[i];
            e.boneInverses.push(a.toArray()) } return e } }
class yi extends et { constructor(e, t, n, i = 1) { typeof n == "number" && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));
        super(e, t, n);
        this.meshPerAttribute = i }
    copy(e) { return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this }
    toJSON() { const e = super.toJSON(); return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e } }
yi.prototype.isInstancedBufferAttribute = !0;
const Yl = new ge,
    Zl = new ge,
    Xr = [],
    Xi = new pt;
class $l extends pt { constructor(e, t, n) { super(e, t);
        this.instanceMatrix = new yi(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1 }
    copy(e) { return super.copy(e), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this }
    getColorAt(e, t) { t.fromArray(this.instanceColor.array, e * 3) }
    getMatrixAt(e, t) { t.fromArray(this.instanceMatrix.array, e * 16) }
    raycast(e, t) { const n = this.matrixWorld,
            i = this.count; if (Xi.geometry = this.geometry, Xi.material = this.material, Xi.material !== void 0)
            for (let r = 0; r < i; r++) { this.getMatrixAt(r, Yl), Zl.multiplyMatrices(n, Yl), Xi.matrixWorld = Zl, Xi.raycast(e, Xr); for (let s = 0, a = Xr.length; s < a; s++) { const l = Xr[s];
                    l.instanceId = r, l.object = this, t.push(l) }
                Xr.length = 0 } }
    setColorAt(e, t) { this.instanceColor === null && (this.instanceColor = new yi(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3) }
    setMatrixAt(e, t) { t.toArray(this.instanceMatrix.array, e * 16) }
    updateMorphTargets() {}
    dispose() { this.dispatchEvent({ type: "dispose" }) } }
$l.prototype.isInstancedMesh = !0;
class vi extends ut { constructor(e) { super();
        this.type = "LineBasicMaterial", this.color = new he(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(e) }
    copy(e) { return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this } }
vi.prototype.isLineBasicMaterial = !0;
const Kl = new S,
    Ql = new S,
    jl = new ge,
    Do = new Kn,
    Jr = new Rn;
class Yr extends He { constructor(e = new De, t = new vi) { super();
        this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets() }
    copy(e) { return super.copy(e), this.material = e.material, this.geometry = e.geometry, this }
    computeLineDistances() { const e = this.geometry; if (e.isBufferGeometry)
            if (e.index === null) { const t = e.attributes.position,
                    n = [0]; for (let i = 1, r = t.count; i < r; i++) Kl.fromBufferAttribute(t, i - 1), Ql.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Kl.distanceTo(Ql);
                e.setAttribute("lineDistance", new _e(n, 1)) } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else e.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."); return this }
    raycast(e, t) { const n = this.geometry,
            i = this.matrixWorld,
            r = e.params.Line.threshold,
            s = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), Jr.copy(n.boundingSphere), Jr.applyMatrix4(i), Jr.radius += r, e.ray.intersectsSphere(Jr) === !1) return;
        jl.copy(i).invert(), Do.copy(e.ray).applyMatrix4(jl); const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            l = a * a,
            c = new S,
            h = new S,
            u = new S,
            d = new S,
            f = this.isLineSegments ? 2 : 1; if (n.isBufferGeometry) { const m = n.index,
                v = n.attributes.position; if (m !== null) { const g = Math.max(0, s.start),
                    p = Math.min(m.count, s.start + s.count); for (let M = g, y = p - 1; M < y; M += f) { const b = m.getX(M),
                        E = m.getX(M + 1); if (c.fromBufferAttribute(v, b), h.fromBufferAttribute(v, E), Do.distanceSqToSegment(c, h, d, u) > l) continue;
                    d.applyMatrix4(this.matrixWorld); const P = e.ray.origin.distanceTo(d);
                    P < e.near || P > e.far || t.push({ distance: P, point: u.clone().applyMatrix4(this.matrixWorld), index: M, face: null, faceIndex: null, object: this }) } } else { const g = Math.max(0, s.start),
                    p = Math.min(v.count, s.start + s.count); for (let M = g, y = p - 1; M < y; M += f) { if (c.fromBufferAttribute(v, M), h.fromBufferAttribute(v, M + 1), Do.distanceSqToSegment(c, h, d, u) > l) continue;
                    d.applyMatrix4(this.matrixWorld); const E = e.ray.origin.distanceTo(d);
                    E < e.near || E > e.far || t.push({ distance: E, point: u.clone().applyMatrix4(this.matrixWorld), index: M, face: null, faceIndex: null, object: this }) } } } else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.") }
    updateMorphTargets() { const e = this.geometry; if (e.isBufferGeometry) { const t = e.morphAttributes,
                n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, s = i.length; r < s; r++) { const a = i[r].name || String(r);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r } } } } else { const t = e.morphTargets;
            t !== void 0 && t.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.") } } }
Yr.prototype.isLine = !0;
const ec = new S,
    tc = new S;
class Zr extends Yr { constructor(e, t) { super(e, t);
        this.type = "LineSegments" }
    computeLineDistances() { const e = this.geometry; if (e.isBufferGeometry)
            if (e.index === null) { const t = e.attributes.position,
                    n = []; for (let i = 0, r = t.count; i < r; i += 2) ec.fromBufferAttribute(t, i), tc.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + ec.distanceTo(tc);
                e.setAttribute("lineDistance", new _e(n, 1)) } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else e.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."); return this } }
Zr.prototype.isLineSegments = !0;
class nc extends Yr { constructor(e, t) { super(e, t);
        this.type = "LineLoop" } }
nc.prototype.isLineLoop = !0;
class Io extends ut { constructor(e) { super();
        this.type = "PointsMaterial", this.color = new he(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.setValues(e) }
    copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this } }
Io.prototype.isPointsMaterial = !0;
const ic = new ge,
    Fo = new Kn,
    $r = new Rn,
    Kr = new S;
class rc extends He { constructor(e = new De, t = new Io) { super();
        this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets() }
    copy(e) { return super.copy(e), this.material = e.material, this.geometry = e.geometry, this }
    raycast(e, t) { const n = this.geometry,
            i = this.matrixWorld,
            r = e.params.Points.threshold,
            s = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), $r.copy(n.boundingSphere), $r.applyMatrix4(i), $r.radius += r, e.ray.intersectsSphere($r) === !1) return;
        ic.copy(i).invert(), Fo.copy(e.ray).applyMatrix4(ic); const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            l = a * a; if (n.isBufferGeometry) { const c = n.index,
                u = n.attributes.position; if (c !== null) { const d = Math.max(0, s.start),
                    f = Math.min(c.count, s.start + s.count); for (let m = d, x = f; m < x; m++) { const v = c.getX(m);
                    Kr.fromBufferAttribute(u, v), sc(Kr, v, l, i, e, t, this) } } else { const d = Math.max(0, s.start),
                    f = Math.min(u.count, s.start + s.count); for (let m = d, x = f; m < x; m++) Kr.fromBufferAttribute(u, m), sc(Kr, m, l, i, e, t, this) } } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.") }
    updateMorphTargets() { const e = this.geometry; if (e.isBufferGeometry) { const t = e.morphAttributes,
                n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, s = i.length; r < s; r++) { const a = i[r].name || String(r);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r } } } } else { const t = e.morphTargets;
            t !== void 0 && t.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.") } } }
rc.prototype.isPoints = !0;

function sc(o, e, t, n, i, r, s) { const a = Fo.distanceSqToPoint(o); if (a < t) { const l = new S;
        Fo.closestPointToPoint(o, l), l.applyMatrix4(n); const c = i.ray.origin.distanceTo(l); if (c < i.near || c > i.far) return;
        r.push({ distance: c, distanceToRay: Math.sqrt(a), point: l, index: e, face: null, object: s }) } }
class Jm extends ot { constructor(e, t, n, i, r, s, a, l, c) { super(e, t, n, i, r, s, a, l, c);
        this.minFilter = s !== void 0 ? s : ct, this.magFilter = r !== void 0 ? r : ct, this.generateMipmaps = !1; const h = this;

        function u() { h.needsUpdate = !0, e.requestVideoFrameCallback(u) } "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(u) }
    clone() { return new this.constructor(this.image).copy(this) }
    update() { const e = this.image; "requestVideoFrameCallback" in e === !1 && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0) } }
Jm.prototype.isVideoTexture = !0;
class Ym extends ot { constructor(e, t, n) { super({ width: e, height: t });
        this.format = n, this.magFilter = it, this.minFilter = it, this.generateMipmaps = !1, this.needsUpdate = !0 } }
Ym.prototype.isFramebufferTexture = !0;
class Zm extends ot { constructor(e, t, n, i, r, s, a, l, c, h, u, d) { super(null, s, a, l, c, h, i, r, u, d);
        this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1 } }
Zm.prototype.isCompressedTexture = !0;
class $m extends ot { constructor(e, t, n, i, r, s, a, l, c) { super(e, t, n, i, r, s, a, l, c);
        this.needsUpdate = !0 } }
$m.prototype.isCanvasTexture = !0;
class Qr extends De { constructor(e = 1, t = 8, n = 0, i = Math.PI * 2) { super();
        this.type = "CircleGeometry", this.parameters = { radius: e, segments: t, thetaStart: n, thetaLength: i }, t = Math.max(3, t); const r = [],
            s = [],
            a = [],
            l = [],
            c = new S,
            h = new $;
        s.push(0, 0, 0), a.push(0, 0, 1), l.push(.5, .5); for (let u = 0, d = 3; u <= t; u++, d += 3) { const f = n + u / t * i;
            c.x = e * Math.cos(f), c.y = e * Math.sin(f), s.push(c.x, c.y, c.z), a.push(0, 0, 1), h.x = (s[d] / e + 1) / 2, h.y = (s[d + 1] / e + 1) / 2, l.push(h.x, h.y) } for (let u = 1; u <= t; u++) r.push(u, u + 1, 0);
        this.setIndex(r), this.setAttribute("position", new _e(s, 3)), this.setAttribute("normal", new _e(a, 3)), this.setAttribute("uv", new _e(l, 2)) }
    static fromJSON(e) { return new Qr(e.radius, e.segments, e.thetaStart, e.thetaLength) } }
class Ji extends De { constructor(e = 1, t = 1, n = 1, i = 8, r = 1, s = !1, a = 0, l = Math.PI * 2) { super();
        this.type = "CylinderGeometry", this.parameters = { radiusTop: e, radiusBottom: t, height: n, radialSegments: i, heightSegments: r, openEnded: s, thetaStart: a, thetaLength: l }; const c = this;
        i = Math.floor(i), r = Math.floor(r); const h = [],
            u = [],
            d = [],
            f = []; let m = 0; const x = [],
            v = n / 2; let g = 0;
        p(), s === !1 && (e > 0 && M(!0), t > 0 && M(!1)), this.setIndex(h), this.setAttribute("position", new _e(u, 3)), this.setAttribute("normal", new _e(d, 3)), this.setAttribute("uv", new _e(f, 2));

        function p() { const y = new S,
                b = new S; let E = 0; const C = (t - e) / n; for (let P = 0; P <= r; P++) { const H = [],
                    B = P / r,
                    _ = B * (t - e) + e; for (let R = 0; R <= i; R++) { const D = R / i,
                        N = D * l + a,
                        z = Math.sin(N),
                        F = Math.cos(N);
                    b.x = _ * z, b.y = -B * n + v, b.z = _ * F, u.push(b.x, b.y, b.z), y.set(z, C, F).normalize(), d.push(y.x, y.y, y.z), f.push(D, 1 - B), H.push(m++) }
                x.push(H) } for (let P = 0; P < i; P++)
                for (let H = 0; H < r; H++) { const B = x[H][P],
                        _ = x[H + 1][P],
                        R = x[H + 1][P + 1],
                        D = x[H][P + 1];
                    h.push(B, _, D), h.push(_, R, D), E += 6 }
            c.addGroup(g, E, 0), g += E }

        function M(y) { const b = m,
                E = new $,
                C = new S; let P = 0; const H = y === !0 ? e : t,
                B = y === !0 ? 1 : -1; for (let R = 1; R <= i; R++) u.push(0, v * B, 0), d.push(0, B, 0), f.push(.5, .5), m++; const _ = m; for (let R = 0; R <= i; R++) { const N = R / i * l + a,
                    z = Math.cos(N),
                    F = Math.sin(N);
                C.x = H * F, C.y = v * B, C.z = H * z, u.push(C.x, C.y, C.z), d.push(0, B, 0), E.x = z * .5 + .5, E.y = F * .5 * B + .5, f.push(E.x, E.y), m++ } for (let R = 0; R < i; R++) { const D = b + R,
                    N = _ + R;
                y === !0 ? h.push(N, N + 1, D) : h.push(N + 1, N, D), P += 3 }
            c.addGroup(g, P, y === !0 ? 1 : 2), g += P } }
    static fromJSON(e) { return new Ji(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength) } }
class jr extends Ji { constructor(e = 1, t = 1, n = 8, i = 1, r = !1, s = 0, a = Math.PI * 2) { super(0, e, t, n, i, r, s, a);
        this.type = "ConeGeometry", this.parameters = { radius: e, height: t, radialSegments: n, heightSegments: i, openEnded: r, thetaStart: s, thetaLength: a } }
    static fromJSON(e) { return new jr(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength) } }
class yn extends De { constructor(e = [], t = [], n = 1, i = 0) { super();
        this.type = "PolyhedronGeometry", this.parameters = { vertices: e, indices: t, radius: n, detail: i }; const r = [],
            s = [];
        a(i), c(n), h(), this.setAttribute("position", new _e(r, 3)), this.setAttribute("normal", new _e(r.slice(), 3)), this.setAttribute("uv", new _e(s, 2)), i === 0 ? this.computeVertexNormals() : this.normalizeNormals();

        function a(p) { const M = new S,
                y = new S,
                b = new S; for (let E = 0; E < t.length; E += 3) f(t[E + 0], M), f(t[E + 1], y), f(t[E + 2], b), l(M, y, b, p) }

        function l(p, M, y, b) { const E = b + 1,
                C = []; for (let P = 0; P <= E; P++) { C[P] = []; const H = p.clone().lerp(y, P / E),
                    B = M.clone().lerp(y, P / E),
                    _ = E - P; for (let R = 0; R <= _; R++) R === 0 && P === E ? C[P][R] = H : C[P][R] = H.clone().lerp(B, R / _) } for (let P = 0; P < E; P++)
                for (let H = 0; H < 2 * (E - P) - 1; H++) { const B = Math.floor(H / 2);
                    H % 2 == 0 ? (d(C[P][B + 1]), d(C[P + 1][B]), d(C[P][B])) : (d(C[P][B + 1]), d(C[P + 1][B + 1]), d(C[P + 1][B])) } }

        function c(p) { const M = new S; for (let y = 0; y < r.length; y += 3) M.x = r[y + 0], M.y = r[y + 1], M.z = r[y + 2], M.normalize().multiplyScalar(p), r[y + 0] = M.x, r[y + 1] = M.y, r[y + 2] = M.z }

        function h() { const p = new S; for (let M = 0; M < r.length; M += 3) { p.x = r[M + 0], p.y = r[M + 1], p.z = r[M + 2]; const y = v(p) / 2 / Math.PI + .5,
                    b = g(p) / Math.PI + .5;
                s.push(y, 1 - b) }
            m(), u() }

        function u() { for (let p = 0; p < s.length; p += 6) { const M = s[p + 0],
                    y = s[p + 2],
                    b = s[p + 4],
                    E = Math.max(M, y, b),
                    C = Math.min(M, y, b);
                E > .9 && C < .1 && (M < .2 && (s[p + 0] += 1), y < .2 && (s[p + 2] += 1), b < .2 && (s[p + 4] += 1)) } }

        function d(p) { r.push(p.x, p.y, p.z) }

        function f(p, M) { const y = p * 3;
            M.x = e[y + 0], M.y = e[y + 1], M.z = e[y + 2] }

        function m() { const p = new S,
                M = new S,
                y = new S,
                b = new S,
                E = new $,
                C = new $,
                P = new $; for (let H = 0, B = 0; H < r.length; H += 9, B += 6) { p.set(r[H + 0], r[H + 1], r[H + 2]), M.set(r[H + 3], r[H + 4], r[H + 5]), y.set(r[H + 6], r[H + 7], r[H + 8]), E.set(s[B + 0], s[B + 1]), C.set(s[B + 2], s[B + 3]), P.set(s[B + 4], s[B + 5]), b.copy(p).add(M).add(y).divideScalar(3); const _ = v(b);
                x(E, B + 0, p, _), x(C, B + 2, M, _), x(P, B + 4, y, _) } }

        function x(p, M, y, b) { b < 0 && p.x === 1 && (s[M] = p.x - 1), y.x === 0 && y.z === 0 && (s[M] = b / 2 / Math.PI + .5) }

        function v(p) { return Math.atan2(p.z, -p.x) }

        function g(p) { return Math.atan2(-p.y, Math.sqrt(p.x * p.x + p.z * p.z)) } }
    static fromJSON(e) { return new yn(e.vertices, e.indices, e.radius, e.details) } }
class es extends yn { constructor(e = 1, t = 0) { const n = (1 + Math.sqrt(5)) / 2,
            i = 1 / n,
            r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i],
            s = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
        super(r, s, e, t);
        this.type = "DodecahedronGeometry", this.parameters = { radius: e, detail: t } }
    static fromJSON(e) { return new es(e.radius, e.detail) } }
const ts = new S,
    ns = new S,
    No = new S,
    is = new tt;
class Km extends De { constructor(e = null, t = 1) { super(); if (this.type = "EdgesGeometry", this.parameters = { geometry: e, thresholdAngle: t }, e !== null) { const i = Math.pow(10, 4),
                r = Math.cos(mr * t),
                s = e.getIndex(),
                a = e.getAttribute("position"),
                l = s ? s.count : a.count,
                c = [0, 0, 0],
                h = ["a", "b", "c"],
                u = new Array(3),
                d = {},
                f = []; for (let m = 0; m < l; m += 3) { s ? (c[0] = s.getX(m), c[1] = s.getX(m + 1), c[2] = s.getX(m + 2)) : (c[0] = m, c[1] = m + 1, c[2] = m + 2); const { a: x, b: v, c: g } = is; if (x.fromBufferAttribute(a, c[0]), v.fromBufferAttribute(a, c[1]), g.fromBufferAttribute(a, c[2]), is.getNormal(No), u[0] = `${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`, u[1] = `${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`, u[2] = `${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0]))
                    for (let p = 0; p < 3; p++) { const M = (p + 1) % 3,
                            y = u[p],
                            b = u[M],
                            E = is[h[p]],
                            C = is[h[M]],
                            P = `${y}_${b}`,
                            H = `${b}_${y}`;
                        H in d && d[H] ? (No.dot(d[H].normal) <= r && (f.push(E.x, E.y, E.z), f.push(C.x, C.y, C.z)), d[H] = null) : P in d || (d[P] = { index0: c[p], index1: c[M], normal: No.clone() }) } } for (const m in d)
                if (d[m]) { const { index0: x, index1: v } = d[m];
                    ts.fromBufferAttribute(a, x), ns.fromBufferAttribute(a, v), f.push(ts.x, ts.y, ts.z), f.push(ns.x, ns.y, ns.z) }
            this.setAttribute("position", new _e(f, 3)) } } }
class At { constructor() { this.type = "Curve", this.arcLengthDivisions = 200 }
    getPoint() { return console.warn("THREE.Curve: .getPoint() not implemented."), null }
    getPointAt(e, t) { const n = this.getUtoTmapping(e); return this.getPoint(n, t) }
    getPoints(e = 5) { const t = []; for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e)); return t }
    getSpacedPoints(e = 5) { const t = []; for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e)); return t }
    getLength() { const e = this.getLengths(); return e[e.length - 1] }
    getLengths(e = this.arcLengthDivisions) { if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
        this.needsUpdate = !1; const t = []; let n, i = this.getPoint(0),
            r = 0;
        t.push(0); for (let s = 1; s <= e; s++) n = this.getPoint(s / e), r += n.distanceTo(i), t.push(r), i = n; return this.cacheArcLengths = t, t }
    updateArcLengths() { this.needsUpdate = !0, this.getLengths() }
    getUtoTmapping(e, t) { const n = this.getLengths(); let i = 0; const r = n.length; let s;
        t ? s = t : s = e * n[r - 1]; let a = 0,
            l = r - 1,
            c; for (; a <= l;)
            if (i = Math.floor(a + (l - a) / 2), c = n[i] - s, c < 0) a = i + 1;
            else if (c > 0) l = i - 1;
        else { l = i; break } if (i = l, n[i] === s) return i / (r - 1); const h = n[i],
            d = n[i + 1] - h,
            f = (s - h) / d; return (i + f) / (r - 1) }
    getTangent(e, t) { const n = 1e-4; let i = e - n,
            r = e + n;
        i < 0 && (i = 0), r > 1 && (r = 1); const s = this.getPoint(i),
            a = this.getPoint(r),
            l = t || (s.isVector2 ? new $ : new S); return l.copy(a).sub(s).normalize(), l }
    getTangentAt(e, t) { const n = this.getUtoTmapping(e); return this.getTangent(n, t) }
    computeFrenetFrames(e, t) { const n = new S,
            i = [],
            r = [],
            s = [],
            a = new S,
            l = new ge; for (let f = 0; f <= e; f++) { const m = f / e;
            i[f] = this.getTangentAt(m, new S) }
        r[0] = new S, s[0] = new S; let c = Number.MAX_VALUE; const h = Math.abs(i[0].x),
            u = Math.abs(i[0].y),
            d = Math.abs(i[0].z);
        h <= c && (c = h, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]); for (let f = 1; f <= e; f++) { if (r[f] = r[f - 1].clone(), s[f] = s[f - 1].clone(), a.crossVectors(i[f - 1], i[f]), a.length() > Number.EPSILON) { a.normalize(); const m = Math.acos(xt(i[f - 1].dot(i[f]), -1, 1));
                r[f].applyMatrix4(l.makeRotationAxis(a, m)) }
            s[f].crossVectors(i[f], r[f]) } if (t === !0) { let f = Math.acos(xt(r[0].dot(r[e]), -1, 1));
            f /= e, i[0].dot(a.crossVectors(r[0], r[e])) > 0 && (f = -f); for (let m = 1; m <= e; m++) r[m].applyMatrix4(l.makeRotationAxis(i[m], f * m)), s[m].crossVectors(i[m], r[m]) } return { tangents: i, normals: r, binormals: s } }
    clone() { return new this.constructor().copy(this) }
    copy(e) { return this.arcLengthDivisions = e.arcLengthDivisions, this }
    toJSON() { const e = { metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" } }; return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e }
    fromJSON(e) { return this.arcLengthDivisions = e.arcLengthDivisions, this } }
class rs extends At { constructor(e = 0, t = 0, n = 1, i = 1, r = 0, s = Math.PI * 2, a = !1, l = 0) { super();
        this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = l }
    getPoint(e, t) { const n = t || new $,
            i = Math.PI * 2; let r = this.aEndAngle - this.aStartAngle; const s = Math.abs(r) < Number.EPSILON; for (; r < 0;) r += i; for (; r > i;) r -= i;
        r < Number.EPSILON && (s ? r = 0 : r = i), this.aClockwise === !0 && !s && (r === i ? r = -i : r = r - i); const a = this.aStartAngle + e * r; let l = this.aX + this.xRadius * Math.cos(a),
            c = this.aY + this.yRadius * Math.sin(a); if (this.aRotation !== 0) { const h = Math.cos(this.aRotation),
                u = Math.sin(this.aRotation),
                d = l - this.aX,
                f = c - this.aY;
            l = d * h - f * u + this.aX, c = d * u + f * h + this.aY } return n.set(l, c) }
    copy(e) { return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this }
    toJSON() { const e = super.toJSON(); return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e }
    fromJSON(e) { return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this } }
rs.prototype.isEllipseCurve = !0;
class oc extends rs { constructor(e, t, n, i, r, s) { super(e, t, n, n, i, r, s);
        this.type = "ArcCurve" } }
oc.prototype.isArcCurve = !0;

function Bo() { let o = 0,
        e = 0,
        t = 0,
        n = 0;

    function i(r, s, a, l) { o = r, e = a, t = -3 * r + 3 * s - 2 * a - l, n = 2 * r - 2 * s + a + l } return { initCatmullRom: function(r, s, a, l, c) { i(s, a, c * (a - r), c * (l - s)) }, initNonuniformCatmullRom: function(r, s, a, l, c, h, u) { let d = (s - r) / c - (a - r) / (c + h) + (a - s) / h,
                f = (a - s) / h - (l - s) / (h + u) + (l - a) / u;
            d *= h, f *= h, i(s, a, d, f) }, calc: function(r) { const s = r * r,
                a = s * r; return o + e * r + t * s + n * a } } }
const ss = new S,
    zo = new Bo,
    Oo = new Bo,
    Uo = new Bo;
class ac extends At { constructor(e = [], t = !1, n = "centripetal", i = .5) { super();
        this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i }
    getPoint(e, t = new S) { const n = t,
            i = this.points,
            r = i.length,
            s = (r - (this.closed ? 0 : 1)) * e; let a = Math.floor(s),
            l = s - a;
        this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / r) + 1) * r : l === 0 && a === r - 1 && (a = r - 2, l = 1); let c, h;
        this.closed || a > 0 ? c = i[(a - 1) % r] : (ss.subVectors(i[0], i[1]).add(i[0]), c = ss); const u = i[a % r],
            d = i[(a + 1) % r]; if (this.closed || a + 2 < r ? h = i[(a + 2) % r] : (ss.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), h = ss), this.curveType === "centripetal" || this.curveType === "chordal") { const f = this.curveType === "chordal" ? .5 : .25; let m = Math.pow(c.distanceToSquared(u), f),
                x = Math.pow(u.distanceToSquared(d), f),
                v = Math.pow(d.distanceToSquared(h), f);
            x < 1e-4 && (x = 1), m < 1e-4 && (m = x), v < 1e-4 && (v = x), zo.initNonuniformCatmullRom(c.x, u.x, d.x, h.x, m, x, v), Oo.initNonuniformCatmullRom(c.y, u.y, d.y, h.y, m, x, v), Uo.initNonuniformCatmullRom(c.z, u.z, d.z, h.z, m, x, v) } else this.curveType === "catmullrom" && (zo.initCatmullRom(c.x, u.x, d.x, h.x, this.tension), Oo.initCatmullRom(c.y, u.y, d.y, h.y, this.tension), Uo.initCatmullRom(c.z, u.z, d.z, h.z, this.tension)); return n.set(zo.calc(l), Oo.calc(l), Uo.calc(l)), n }
    copy(e) { super.copy(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t];
            this.points.push(i.clone()) } return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this }
    toJSON() { const e = super.toJSON();
        e.points = []; for (let t = 0, n = this.points.length; t < n; t++) { const i = this.points[t];
            e.points.push(i.toArray()) } return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e }
    fromJSON(e) { super.fromJSON(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t];
            this.points.push(new S().fromArray(i)) } return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this } }
ac.prototype.isCatmullRomCurve3 = !0;

function lc(o, e, t, n, i) { const r = (n - e) * .5,
        s = (i - t) * .5,
        a = o * o,
        l = o * a; return (2 * t - 2 * n + r + s) * l + (-3 * t + 3 * n - 2 * r - s) * a + r * o + t }

function Qm(o, e) { const t = 1 - o; return t * t * e }

function jm(o, e) { return 2 * (1 - o) * o * e }

function eg(o, e) { return o * o * e }

function Yi(o, e, t, n) { return Qm(o, e) + jm(o, t) + eg(o, n) }

function tg(o, e) { const t = 1 - o; return t * t * t * e }

function ng(o, e) { const t = 1 - o; return 3 * t * t * o * e }

function ig(o, e) { return 3 * (1 - o) * o * o * e }

function rg(o, e) { return o * o * o * e }

function Zi(o, e, t, n, i) { return tg(o, e) + ng(o, t) + ig(o, n) + rg(o, i) }
class Ho extends At { constructor(e = new $, t = new $, n = new $, i = new $) { super();
        this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i }
    getPoint(e, t = new $) { const n = t,
            i = this.v0,
            r = this.v1,
            s = this.v2,
            a = this.v3; return n.set(Zi(e, i.x, r.x, s.x, a.x), Zi(e, i.y, r.y, s.y, a.y)), n }
    copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this }
    toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e }
    fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this } }
Ho.prototype.isCubicBezierCurve = !0;
class cc extends At { constructor(e = new S, t = new S, n = new S, i = new S) { super();
        this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i }
    getPoint(e, t = new S) { const n = t,
            i = this.v0,
            r = this.v1,
            s = this.v2,
            a = this.v3; return n.set(Zi(e, i.x, r.x, s.x, a.x), Zi(e, i.y, r.y, s.y, a.y), Zi(e, i.z, r.z, s.z, a.z)), n }
    copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this }
    toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e }
    fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this } }
cc.prototype.isCubicBezierCurve3 = !0;
class os extends At { constructor(e = new $, t = new $) { super();
        this.type = "LineCurve", this.v1 = e, this.v2 = t }
    getPoint(e, t = new $) { const n = t; return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n }
    getPointAt(e, t) { return this.getPoint(e, t) }
    getTangent(e, t) { const n = t || new $; return n.copy(this.v2).sub(this.v1).normalize(), n }
    copy(e) { return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this }
    toJSON() { const e = super.toJSON(); return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e }
    fromJSON(e) { return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } }
os.prototype.isLineCurve = !0;
class sg extends At { constructor(e = new S, t = new S) { super();
        this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = e, this.v2 = t }
    getPoint(e, t = new S) { const n = t; return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n }
    getPointAt(e, t) { return this.getPoint(e, t) }
    copy(e) { return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this }
    toJSON() { const e = super.toJSON(); return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e }
    fromJSON(e) { return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } }
class Go extends At { constructor(e = new $, t = new $, n = new $) { super();
        this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n }
    getPoint(e, t = new $) { const n = t,
            i = this.v0,
            r = this.v1,
            s = this.v2; return n.set(Yi(e, i.x, r.x, s.x), Yi(e, i.y, r.y, s.y)), n }
    copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this }
    toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e }
    fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } }
Go.prototype.isQuadraticBezierCurve = !0;
class ko extends At { constructor(e = new S, t = new S, n = new S) { super();
        this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n }
    getPoint(e, t = new S) { const n = t,
            i = this.v0,
            r = this.v1,
            s = this.v2; return n.set(Yi(e, i.x, r.x, s.x), Yi(e, i.y, r.y, s.y), Yi(e, i.z, r.z, s.z)), n }
    copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this }
    toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e }
    fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } }
ko.prototype.isQuadraticBezierCurve3 = !0;
class Vo extends At { constructor(e = []) { super();
        this.type = "SplineCurve", this.points = e }
    getPoint(e, t = new $) { const n = t,
            i = this.points,
            r = (i.length - 1) * e,
            s = Math.floor(r),
            a = r - s,
            l = i[s === 0 ? s : s - 1],
            c = i[s],
            h = i[s > i.length - 2 ? i.length - 1 : s + 1],
            u = i[s > i.length - 3 ? i.length - 1 : s + 2]; return n.set(lc(a, l.x, c.x, h.x, u.x), lc(a, l.y, c.y, h.y, u.y)), n }
    copy(e) { super.copy(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t];
            this.points.push(i.clone()) } return this }
    toJSON() { const e = super.toJSON();
        e.points = []; for (let t = 0, n = this.points.length; t < n; t++) { const i = this.points[t];
            e.points.push(i.toArray()) } return e }
    fromJSON(e) { super.fromJSON(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t];
            this.points.push(new $().fromArray(i)) } return this } }
Vo.prototype.isSplineCurve = !0;
var Wo = Object.freeze({ __proto__: null, ArcCurve: oc, CatmullRomCurve3: ac, CubicBezierCurve: Ho, CubicBezierCurve3: cc, EllipseCurve: rs, LineCurve: os, LineCurve3: sg, QuadraticBezierCurve: Go, QuadraticBezierCurve3: ko, SplineCurve: Vo });
class og extends At { constructor() { super();
        this.type = "CurvePath", this.curves = [], this.autoClose = !1 }
    add(e) { this.curves.push(e) }
    closePath() { const e = this.curves[0].getPoint(0),
            t = this.curves[this.curves.length - 1].getPoint(1);
        e.equals(t) || this.curves.push(new os(t, e)) }
    getPoint(e, t) { const n = e * this.getLength(),
            i = this.getCurveLengths(); let r = 0; for (; r < i.length;) { if (i[r] >= n) { const s = i[r] - n,
                    a = this.curves[r],
                    l = a.getLength(),
                    c = l === 0 ? 0 : 1 - s / l; return a.getPointAt(c, t) }
            r++ } return null }
    getLength() { const e = this.getCurveLengths(); return e[e.length - 1] }
    updateArcLengths() { this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths() }
    getCurveLengths() { if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths; const e = []; let t = 0; for (let n = 0, i = this.curves.length; n < i; n++) t += this.curves[n].getLength(), e.push(t); return this.cacheLengths = e, e }
    getSpacedPoints(e = 40) { const t = []; for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e)); return this.autoClose && t.push(t[0]), t }
    getPoints(e = 12) { const t = []; let n; for (let i = 0, r = this.curves; i < r.length; i++) { const s = r[i],
                a = s && s.isEllipseCurve ? e * 2 : s && (s.isLineCurve || s.isLineCurve3) ? 1 : s && s.isSplineCurve ? e * s.points.length : e,
                l = s.getPoints(a); for (let c = 0; c < l.length; c++) { const h = l[c];
                n && n.equals(h) || (t.push(h), n = h) } } return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t }
    copy(e) { super.copy(e), this.curves = []; for (let t = 0, n = e.curves.length; t < n; t++) { const i = e.curves[t];
            this.curves.push(i.clone()) } return this.autoClose = e.autoClose, this }
    toJSON() { const e = super.toJSON();
        e.autoClose = this.autoClose, e.curves = []; for (let t = 0, n = this.curves.length; t < n; t++) { const i = this.curves[t];
            e.curves.push(i.toJSON()) } return e }
    fromJSON(e) { super.fromJSON(e), this.autoClose = e.autoClose, this.curves = []; for (let t = 0, n = e.curves.length; t < n; t++) { const i = e.curves[t];
            this.curves.push(new Wo[i.type]().fromJSON(i)) } return this } }
class as extends og { constructor(e) { super();
        this.type = "Path", this.currentPoint = new $, e && this.setFromPoints(e) }
    setFromPoints(e) { this.moveTo(e[0].x, e[0].y); for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y); return this }
    moveTo(e, t) { return this.currentPoint.set(e, t), this }
    lineTo(e, t) { const n = new os(this.currentPoint.clone(), new $(e, t)); return this.curves.push(n), this.currentPoint.set(e, t), this }
    quadraticCurveTo(e, t, n, i) { const r = new Go(this.currentPoint.clone(), new $(e, t), new $(n, i)); return this.curves.push(r), this.currentPoint.set(n, i), this }
    bezierCurveTo(e, t, n, i, r, s) { const a = new Ho(this.currentPoint.clone(), new $(e, t), new $(n, i), new $(r, s)); return this.curves.push(a), this.currentPoint.set(r, s), this }
    splineThru(e) { const t = [this.currentPoint.clone()].concat(e),
            n = new Vo(t); return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this }
    arc(e, t, n, i, r, s) { const a = this.currentPoint.x,
            l = this.currentPoint.y; return this.absarc(e + a, t + l, n, i, r, s), this }
    absarc(e, t, n, i, r, s) { return this.absellipse(e, t, n, n, i, r, s), this }
    ellipse(e, t, n, i, r, s, a, l) { const c = this.currentPoint.x,
            h = this.currentPoint.y; return this.absellipse(e + c, t + h, n, i, r, s, a, l), this }
    absellipse(e, t, n, i, r, s, a, l) { const c = new rs(e, t, n, i, r, s, a, l); if (this.curves.length > 0) { const u = c.getPoint(0);
            u.equals(this.currentPoint) || this.lineTo(u.x, u.y) }
        this.curves.push(c); const h = c.getPoint(1); return this.currentPoint.copy(h), this }
    copy(e) { return super.copy(e), this.currentPoint.copy(e.currentPoint), this }
    toJSON() { const e = super.toJSON(); return e.currentPoint = this.currentPoint.toArray(), e }
    fromJSON(e) { return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this } }
class Qt extends as { constructor(e) { super(e);
        this.uuid = Lt(), this.type = "Shape", this.holes = [] }
    getPointsHoles(e) { const t = []; for (let n = 0, i = this.holes.length; n < i; n++) t[n] = this.holes[n].getPoints(e); return t }
    extractPoints(e) { return { shape: this.getPoints(e), holes: this.getPointsHoles(e) } }
    copy(e) { super.copy(e), this.holes = []; for (let t = 0, n = e.holes.length; t < n; t++) { const i = e.holes[t];
            this.holes.push(i.clone()) } return this }
    toJSON() { const e = super.toJSON();
        e.uuid = this.uuid, e.holes = []; for (let t = 0, n = this.holes.length; t < n; t++) { const i = this.holes[t];
            e.holes.push(i.toJSON()) } return e }
    fromJSON(e) { super.fromJSON(e), this.uuid = e.uuid, this.holes = []; for (let t = 0, n = e.holes.length; t < n; t++) { const i = e.holes[t];
            this.holes.push(new as().fromJSON(i)) } return this } }
const ag = { triangulate: function(o, e, t = 2) { const n = e && e.length,
            i = n ? e[0] * t : o.length; let r = hc(o, 0, i, t, !0); const s = []; if (!r || r.next === r.prev) return s; let a, l, c, h, u, d, f; if (n && (r = dg(o, e, r, t)), o.length > 80 * t) { a = c = o[0], l = h = o[1]; for (let m = t; m < i; m += t) u = o[m], d = o[m + 1], u < a && (a = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
            f = Math.max(c - a, h - l), f = f !== 0 ? 1 / f : 0 } return $i(r, s, t, a, l, f), s } };

function hc(o, e, t, n, i) { let r, s; if (i === wg(o, e, t, n) > 0)
        for (r = e; r < t; r += n) s = fc(r, o[r], o[r + 1], s);
    else
        for (r = t - n; r >= e; r -= n) s = fc(r, o[r], o[r + 1], s); return s && ls(s, s.next) && (Qi(s), s = s.next), s }

function vn(o, e) { if (!o) return o;
    e || (e = o); let t = o,
        n;
    do
        if (n = !1, !t.steiner && (ls(t, t.next) || Ke(t.prev, t, t.next) === 0)) { if (Qi(t), t = e = t.prev, t === t.next) break;
            n = !0 } else t = t.next; while (n || t !== e);
    return e }

function $i(o, e, t, n, i, r, s) { if (!o) return;!s && r && xg(o, n, i, r); let a = o,
        l, c; for (; o.prev !== o.next;) { if (l = o.prev, c = o.next, r ? cg(o, n, i, r) : lg(o)) { e.push(l.i / t), e.push(o.i / t), e.push(c.i / t), Qi(o), o = c.next, a = c.next; continue } if (o = c, o === a) { s ? s === 1 ? (o = hg(vn(o), e, t), $i(o, e, t, n, i, r, 2)) : s === 2 && ug(o, e, t, n, i, r) : $i(vn(o), e, t, n, i, r, 1); break } } }

function lg(o) { const e = o.prev,
        t = o,
        n = o.next; if (Ke(e, t, n) >= 0) return !1; let i = o.next.next; for (; i !== o.prev;) { if (_i(e.x, e.y, t.x, t.y, n.x, n.y, i.x, i.y) && Ke(i.prev, i, i.next) >= 0) return !1;
        i = i.next } return !0 }

function cg(o, e, t, n) { const i = o.prev,
        r = o,
        s = o.next; if (Ke(i, r, s) >= 0) return !1; const a = i.x < r.x ? i.x < s.x ? i.x : s.x : r.x < s.x ? r.x : s.x,
        l = i.y < r.y ? i.y < s.y ? i.y : s.y : r.y < s.y ? r.y : s.y,
        c = i.x > r.x ? i.x > s.x ? i.x : s.x : r.x > s.x ? r.x : s.x,
        h = i.y > r.y ? i.y > s.y ? i.y : s.y : r.y > s.y ? r.y : s.y,
        u = qo(a, l, e, t, n),
        d = qo(c, h, e, t, n); let f = o.prevZ,
        m = o.nextZ; for (; f && f.z >= u && m && m.z <= d;) { if (f !== o.prev && f !== o.next && _i(i.x, i.y, r.x, r.y, s.x, s.y, f.x, f.y) && Ke(f.prev, f, f.next) >= 0 || (f = f.prevZ, m !== o.prev && m !== o.next && _i(i.x, i.y, r.x, r.y, s.x, s.y, m.x, m.y) && Ke(m.prev, m, m.next) >= 0)) return !1;
        m = m.nextZ } for (; f && f.z >= u;) { if (f !== o.prev && f !== o.next && _i(i.x, i.y, r.x, r.y, s.x, s.y, f.x, f.y) && Ke(f.prev, f, f.next) >= 0) return !1;
        f = f.prevZ } for (; m && m.z <= d;) { if (m !== o.prev && m !== o.next && _i(i.x, i.y, r.x, r.y, s.x, s.y, m.x, m.y) && Ke(m.prev, m, m.next) >= 0) return !1;
        m = m.nextZ } return !0 }

function hg(o, e, t) { let n = o;
    do { const i = n.prev,
            r = n.next.next;!ls(i, r) && uc(i, n, n.next, r) && Ki(i, r) && Ki(r, i) && (e.push(i.i / t), e.push(n.i / t), e.push(r.i / t), Qi(n), Qi(n.next), n = o = r), n = n.next } while (n !== o); return vn(n) }

function ug(o, e, t, n, i, r) { let s = o;
    do { let a = s.next.next; for (; a !== s.prev;) { if (s.i !== a.i && _g(s, a)) { let l = dc(s, a);
                s = vn(s, s.next), l = vn(l, l.next), $i(s, e, t, n, i, r), $i(l, e, t, n, i, r); return }
            a = a.next }
        s = s.next } while (s !== o) }

function dg(o, e, t, n) { const i = []; let r, s, a, l, c; for (r = 0, s = e.length; r < s; r++) a = e[r] * n, l = r < s - 1 ? e[r + 1] * n : o.length, c = hc(o, a, l, n, !1), c === c.next && (c.steiner = !0), i.push(vg(c)); for (i.sort(fg), r = 0; r < i.length; r++) pg(i[r], t), t = vn(t, t.next); return t }

function fg(o, e) { return o.x - e.x }

function pg(o, e) { if (e = mg(o, e), e) { const t = dc(e, o);
        vn(e, e.next), vn(t, t.next) } }

function mg(o, e) { let t = e; const n = o.x,
        i = o.y; let r = -1 / 0,
        s;
    do { if (i <= t.y && i >= t.next.y && t.next.y !== t.y) { const d = t.x + (i - t.y) * (t.next.x - t.x) / (t.next.y - t.y); if (d <= n && d > r) { if (r = d, d === n) { if (i === t.y) return t; if (i === t.next.y) return t.next }
                s = t.x < t.next.x ? t : t.next } }
        t = t.next } while (t !== e); if (!s) return null; if (n === r) return s; const a = s,
        l = s.x,
        c = s.y; let h = 1 / 0,
        u;
    t = s;
    do n >= t.x && t.x >= l && n !== t.x && _i(i < c ? n : r, i, l, c, i < c ? r : n, i, t.x, t.y) && (u = Math.abs(i - t.y) / (n - t.x), Ki(t, o) && (u < h || u === h && (t.x > s.x || t.x === s.x && gg(s, t))) && (s = t, h = u)), t = t.next; while (t !== a); return s }

function gg(o, e) { return Ke(o.prev, o, e.prev) < 0 && Ke(e.next, o, o.next) < 0 }

function xg(o, e, t, n) { let i = o;
    do i.z === null && (i.z = qo(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next; while (i !== o);
    i.prevZ.nextZ = null, i.prevZ = null, yg(i) }

function yg(o) { let e, t, n, i, r, s, a, l, c = 1;
    do { for (t = o, o = null, r = null, s = 0; t;) { for (s++, n = t, a = 0, e = 0; e < c && (a++, n = n.nextZ, !!n); e++); for (l = c; a > 0 || l > 0 && n;) a !== 0 && (l === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, a--) : (i = n, n = n.nextZ, l--), r ? r.nextZ = i : o = i, i.prevZ = r, r = i;
            t = n }
        r.nextZ = null, c *= 2 } while (s > 1); return o }

function qo(o, e, t, n, i) { return o = 32767 * (o - t) * i, e = 32767 * (e - n) * i, o = (o | o << 8) & 16711935, o = (o | o << 4) & 252645135, o = (o | o << 2) & 858993459, o = (o | o << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, o | e << 1 }

function vg(o) { let e = o,
        t = o;
    do(e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next; while (e !== o); return t }

function _i(o, e, t, n, i, r, s, a) { return (i - s) * (e - a) - (o - s) * (r - a) >= 0 && (o - s) * (n - a) - (t - s) * (e - a) >= 0 && (t - s) * (r - a) - (i - s) * (n - a) >= 0 }

function _g(o, e) { return o.next.i !== e.i && o.prev.i !== e.i && !Mg(o, e) && (Ki(o, e) && Ki(e, o) && bg(o, e) && (Ke(o.prev, o, e.prev) || Ke(o, e.prev, e)) || ls(o, e) && Ke(o.prev, o, o.next) > 0 && Ke(e.prev, e, e.next) > 0) }

function Ke(o, e, t) { return (e.y - o.y) * (t.x - e.x) - (e.x - o.x) * (t.y - e.y) }

function ls(o, e) { return o.x === e.x && o.y === e.y }

function uc(o, e, t, n) { const i = hs(Ke(o, e, t)),
        r = hs(Ke(o, e, n)),
        s = hs(Ke(t, n, o)),
        a = hs(Ke(t, n, e)); return !!(i !== r && s !== a || i === 0 && cs(o, t, e) || r === 0 && cs(o, n, e) || s === 0 && cs(t, o, n) || a === 0 && cs(t, e, n)) }

function cs(o, e, t) { return e.x <= Math.max(o.x, t.x) && e.x >= Math.min(o.x, t.x) && e.y <= Math.max(o.y, t.y) && e.y >= Math.min(o.y, t.y) }

function hs(o) { return o > 0 ? 1 : o < 0 ? -1 : 0 }

function Mg(o, e) { let t = o;
    do { if (t.i !== o.i && t.next.i !== o.i && t.i !== e.i && t.next.i !== e.i && uc(t, t.next, o, e)) return !0;
        t = t.next } while (t !== o); return !1 }

function Ki(o, e) { return Ke(o.prev, o, o.next) < 0 ? Ke(o, e, o.next) >= 0 && Ke(o, o.prev, e) >= 0 : Ke(o, e, o.prev) < 0 || Ke(o, o.next, e) < 0 }

function bg(o, e) { let t = o,
        n = !1; const i = (o.x + e.x) / 2,
        r = (o.y + e.y) / 2;
    do t.y > r != t.next.y > r && t.next.y !== t.y && i < (t.next.x - t.x) * (r - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next; while (t !== o); return n }

function dc(o, e) { const t = new Xo(o.i, o.x, o.y),
        n = new Xo(e.i, e.x, e.y),
        i = o.next,
        r = e.prev; return o.next = e, e.prev = o, t.next = i, i.prev = t, n.next = t, t.prev = n, r.next = n, n.prev = r, n }

function fc(o, e, t, n) { const i = new Xo(o, e, t); return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i }

function Qi(o) { o.next.prev = o.prev, o.prev.next = o.next, o.prevZ && (o.prevZ.nextZ = o.nextZ), o.nextZ && (o.nextZ.prevZ = o.prevZ) }

function Xo(o, e, t) { this.i = o, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1 }

function wg(o, e, t, n) { let i = 0; for (let r = e, s = t - n; r < t; r += n) i += (o[s] - o[r]) * (o[r + 1] + o[s + 1]), s = r; return i }
class jt { static area(e) { const t = e.length; let n = 0; for (let i = t - 1, r = 0; r < t; i = r++) n += e[i].x * e[r].y - e[r].x * e[i].y; return n * .5 }
    static isClockWise(e) { return jt.area(e) < 0 }
    static triangulateShape(e, t) { const n = [],
            i = [],
            r = [];
        pc(e), mc(n, e); let s = e.length;
        t.forEach(pc); for (let l = 0; l < t.length; l++) i.push(s), s += t[l].length, mc(n, t[l]); const a = ag.triangulate(n, i); for (let l = 0; l < a.length; l += 3) r.push(a.slice(l, l + 3)); return r } }

function pc(o) { const e = o.length;
    e > 2 && o[e - 1].equals(o[0]) && o.pop() }

function mc(o, e) { for (let t = 0; t < e.length; t++) o.push(e[t].x), o.push(e[t].y) }
class en extends De { constructor(e = new Qt([new $(.5, .5), new $(-.5, .5), new $(-.5, -.5), new $(.5, -.5)]), t = {}) { super();
        this.type = "ExtrudeGeometry", this.parameters = { shapes: e, options: t }, e = Array.isArray(e) ? e : [e]; const n = this,
            i = [],
            r = []; for (let a = 0, l = e.length; a < l; a++) { const c = e[a];
            s(c) }
        this.setAttribute("position", new _e(i, 3)), this.setAttribute("uv", new _e(r, 2)), this.computeVertexNormals();

        function s(a) { const l = [],
                c = t.curveSegments !== void 0 ? t.curveSegments : 12,
                h = t.steps !== void 0 ? t.steps : 1; let u = t.depth !== void 0 ? t.depth : 1,
                d = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0,
                f = t.bevelThickness !== void 0 ? t.bevelThickness : .2,
                m = t.bevelSize !== void 0 ? t.bevelSize : f - .1,
                x = t.bevelOffset !== void 0 ? t.bevelOffset : 0,
                v = t.bevelSegments !== void 0 ? t.bevelSegments : 3; const g = t.extrudePath,
                p = t.UVGenerator !== void 0 ? t.UVGenerator : Sg;
            t.amount !== void 0 && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), u = t.amount); let M, y = !1,
                b, E, C, P;
            g && (M = g.getSpacedPoints(h), y = !0, d = !1, b = g.computeFrenetFrames(h, !1), E = new S, C = new S, P = new S), d || (v = 0, f = 0, m = 0, x = 0); const H = a.extractPoints(c); let B = H.shape; const _ = H.holes; if (!jt.isClockWise(B)) { B = B.reverse(); for (let X = 0, ee = _.length; X < ee; X++) { const Q = _[X];
                    jt.isClockWise(Q) && (_[X] = Q.reverse()) } } const D = jt.triangulateShape(B, _),
                N = B; for (let X = 0, ee = _.length; X < ee; X++) { const Q = _[X];
                B = B.concat(Q) }

            function z(X, ee, Q) { return ee || console.error("THREE.ExtrudeGeometry: vec does not exist"), ee.clone().multiplyScalar(Q).add(X) } const F = B.length,
                W = D.length;

            function K(X, ee, Q) { let le, se, Me; const Te = X.x - ee.x,
                    Ne = X.y - ee.y,
                    Xe = Q.x - X.x,
                    Ve = Q.y - X.y,
                    A = Te * Te + Ne * Ne,
                    w = Te * Ve - Ne * Xe; if (Math.abs(w) > Number.EPSILON) { const q = Math.sqrt(A),
                        j = Math.sqrt(Xe * Xe + Ve * Ve),
                        fe = ee.x - Ne / q,
                        V = ee.y + Te / q,
                        ye = Q.x - Ve / j,
                        me = Q.y + Xe / j,
                        re = ((ye - fe) * Ve - (me - V) * Xe) / (Te * Ve - Ne * Xe);
                    le = fe + Te * re - X.x, se = V + Ne * re - X.y; const ne = le * le + se * se; if (ne <= 2) return new $(le, se);
                    Me = Math.sqrt(ne / 2) } else { let q = !1;
                    Te > Number.EPSILON ? Xe > Number.EPSILON && (q = !0) : Te < -Number.EPSILON ? Xe < -Number.EPSILON && (q = !0) : Math.sign(Ne) === Math.sign(Ve) && (q = !0), q ? (le = -Ne, se = Te, Me = Math.sqrt(A)) : (le = Te, se = Ne, Me = Math.sqrt(A / 2)) } return new $(le / Me, se / Me) } const ce = []; for (let X = 0, ee = N.length, Q = ee - 1, le = X + 1; X < ee; X++, Q++, le++) Q === ee && (Q = 0), le === ee && (le = 0), ce[X] = K(N[X], N[Q], N[le]); const k = []; let Z, ie = ce.concat(); for (let X = 0, ee = _.length; X < ee; X++) { const Q = _[X];
                Z = []; for (let le = 0, se = Q.length, Me = se - 1, Te = le + 1; le < se; le++, Me++, Te++) Me === se && (Me = 0), Te === se && (Te = 0), Z[le] = K(Q[le], Q[Me], Q[Te]);
                k.push(Z), ie = ie.concat(Z) } for (let X = 0; X < v; X++) { const ee = X / v,
                    Q = f * Math.cos(ee * Math.PI / 2),
                    le = m * Math.sin(ee * Math.PI / 2) + x; for (let se = 0, Me = N.length; se < Me; se++) { const Te = z(N[se], ce[se], le);
                    pe(Te.x, Te.y, -Q) } for (let se = 0, Me = _.length; se < Me; se++) { const Te = _[se];
                    Z = k[se]; for (let Ne = 0, Xe = Te.length; Ne < Xe; Ne++) { const Ve = z(Te[Ne], Z[Ne], le);
                        pe(Ve.x, Ve.y, -Q) } } } const de = m + x; for (let X = 0; X < F; X++) { const ee = d ? z(B[X], ie[X], de) : B[X];
                y ? (C.copy(b.normals[0]).multiplyScalar(ee.x), E.copy(b.binormals[0]).multiplyScalar(ee.y), P.copy(M[0]).add(C).add(E), pe(P.x, P.y, P.z)) : pe(ee.x, ee.y, 0) } for (let X = 1; X <= h; X++)
                for (let ee = 0; ee < F; ee++) { const Q = d ? z(B[ee], ie[ee], de) : B[ee];
                    y ? (C.copy(b.normals[X]).multiplyScalar(Q.x), E.copy(b.binormals[X]).multiplyScalar(Q.y), P.copy(M[X]).add(C).add(E), pe(P.x, P.y, P.z)) : pe(Q.x, Q.y, u / h * X) }
            for (let X = v - 1; X >= 0; X--) { const ee = X / v,
                    Q = f * Math.cos(ee * Math.PI / 2),
                    le = m * Math.sin(ee * Math.PI / 2) + x; for (let se = 0, Me = N.length; se < Me; se++) { const Te = z(N[se], ce[se], le);
                    pe(Te.x, Te.y, u + Q) } for (let se = 0, Me = _.length; se < Me; se++) { const Te = _[se];
                    Z = k[se]; for (let Ne = 0, Xe = Te.length; Ne < Xe; Ne++) { const Ve = z(Te[Ne], Z[Ne], le);
                        y ? pe(Ve.x, Ve.y + M[h - 1].y, M[h - 1].x + Q) : pe(Ve.x, Ve.y, u + Q) } } }
            xe(), G();

            function xe() { const X = i.length / 3; if (d) { let ee = 0,
                        Q = F * ee; for (let le = 0; le < W; le++) { const se = D[le];
                        we(se[2] + Q, se[1] + Q, se[0] + Q) }
                    ee = h + v * 2, Q = F * ee; for (let le = 0; le < W; le++) { const se = D[le];
                        we(se[0] + Q, se[1] + Q, se[2] + Q) } } else { for (let ee = 0; ee < W; ee++) { const Q = D[ee];
                        we(Q[2], Q[1], Q[0]) } for (let ee = 0; ee < W; ee++) { const Q = D[ee];
                        we(Q[0] + F * h, Q[1] + F * h, Q[2] + F * h) } }
                n.addGroup(X, i.length / 3 - X, 0) }

            function G() { const X = i.length / 3; let ee = 0;
                Oe(N, ee), ee += N.length; for (let Q = 0, le = _.length; Q < le; Q++) { const se = _[Q];
                    Oe(se, ee), ee += se.length }
                n.addGroup(X, i.length / 3 - X, 1) }

            function Oe(X, ee) { let Q = X.length; for (; --Q >= 0;) { const le = Q; let se = Q - 1;
                    se < 0 && (se = X.length - 1); for (let Me = 0, Te = h + v * 2; Me < Te; Me++) { const Ne = F * Me,
                            Xe = F * (Me + 1),
                            Ve = ee + le + Ne,
                            A = ee + se + Ne,
                            w = ee + se + Xe,
                            q = ee + le + Xe;
                        ae(Ve, A, w, q) } } }

            function pe(X, ee, Q) { l.push(X), l.push(ee), l.push(Q) }

            function we(X, ee, Q) { Re(X), Re(ee), Re(Q); const le = i.length / 3,
                    se = p.generateTopUV(n, i, le - 3, le - 2, le - 1);
                Se(se[0]), Se(se[1]), Se(se[2]) }

            function ae(X, ee, Q, le) { Re(X), Re(ee), Re(le), Re(ee), Re(Q), Re(le); const se = i.length / 3,
                    Me = p.generateSideWallUV(n, i, se - 6, se - 3, se - 2, se - 1);
                Se(Me[0]), Se(Me[1]), Se(Me[3]), Se(Me[1]), Se(Me[2]), Se(Me[3]) }

            function Re(X) { i.push(l[X * 3 + 0]), i.push(l[X * 3 + 1]), i.push(l[X * 3 + 2]) }

            function Se(X) { r.push(X.x), r.push(X.y) } } }
    toJSON() { const e = super.toJSON(),
            t = this.parameters.shapes,
            n = this.parameters.options; return Tg(t, n, e) }
    static fromJSON(e, t) { const n = []; for (let r = 0, s = e.shapes.length; r < s; r++) { const a = t[e.shapes[r]];
            n.push(a) } const i = e.options.extrudePath; return i !== void 0 && (e.options.extrudePath = new Wo[i.type]().fromJSON(i)), new en(n, e.options) } }
const Sg = { generateTopUV: function(o, e, t, n, i) { const r = e[t * 3],
            s = e[t * 3 + 1],
            a = e[n * 3],
            l = e[n * 3 + 1],
            c = e[i * 3],
            h = e[i * 3 + 1]; return [new $(r, s), new $(a, l), new $(c, h)] }, generateSideWallUV: function(o, e, t, n, i, r) { const s = e[t * 3],
            a = e[t * 3 + 1],
            l = e[t * 3 + 2],
            c = e[n * 3],
            h = e[n * 3 + 1],
            u = e[n * 3 + 2],
            d = e[i * 3],
            f = e[i * 3 + 1],
            m = e[i * 3 + 2],
            x = e[r * 3],
            v = e[r * 3 + 1],
            g = e[r * 3 + 2]; return Math.abs(a - h) < Math.abs(s - c) ? [new $(s, 1 - l), new $(c, 1 - u), new $(d, 1 - m), new $(x, 1 - g)] : [new $(a, 1 - l), new $(h, 1 - u), new $(f, 1 - m), new $(v, 1 - g)] } };

function Tg(o, e, t) { if (t.shapes = [], Array.isArray(o))
        for (let n = 0, i = o.length; n < i; n++) { const r = o[n];
            t.shapes.push(r.uuid) } else t.shapes.push(o.uuid); return e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t }
class us extends yn { constructor(e = 1, t = 0) { const n = (1 + Math.sqrt(5)) / 2,
            i = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1],
            r = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
        super(i, r, e, t);
        this.type = "IcosahedronGeometry", this.parameters = { radius: e, detail: t } }
    static fromJSON(e) { return new us(e.radius, e.detail) } }
class ds extends De { constructor(e = [new $(0, .5), new $(.5, 0), new $(0, -.5)], t = 12, n = 0, i = Math.PI * 2) { super();
        this.type = "LatheGeometry", this.parameters = { points: e, segments: t, phiStart: n, phiLength: i }, t = Math.floor(t), i = xt(i, 0, Math.PI * 2); const r = [],
            s = [],
            a = [],
            l = [],
            c = [],
            h = 1 / t,
            u = new S,
            d = new $,
            f = new S,
            m = new S,
            x = new S; let v = 0,
            g = 0; for (let p = 0; p <= e.length - 1; p++) switch (p) {
            case 0:
                v = e[p + 1].x - e[p].x, g = e[p + 1].y - e[p].y, f.x = g * 1, f.y = -v, f.z = g * 0, x.copy(f), f.normalize(), l.push(f.x, f.y, f.z); break;
            case e.length - 1:
                l.push(x.x, x.y, x.z); break;
            default:
                v = e[p + 1].x - e[p].x, g = e[p + 1].y - e[p].y, f.x = g * 1, f.y = -v, f.z = g * 0, m.copy(f), f.x += x.x, f.y += x.y, f.z += x.z, f.normalize(), l.push(f.x, f.y, f.z), x.copy(m) }
        for (let p = 0; p <= t; p++) { const M = n + p * h * i,
                y = Math.sin(M),
                b = Math.cos(M); for (let E = 0; E <= e.length - 1; E++) { u.x = e[E].x * y, u.y = e[E].y, u.z = e[E].x * b, s.push(u.x, u.y, u.z), d.x = p / t, d.y = E / (e.length - 1), a.push(d.x, d.y); const C = l[3 * E + 0] * y,
                    P = l[3 * E + 1],
                    H = l[3 * E + 0] * b;
                c.push(C, P, H) } } for (let p = 0; p < t; p++)
            for (let M = 0; M < e.length - 1; M++) { const y = M + p * e.length,
                    b = y,
                    E = y + e.length,
                    C = y + e.length + 1,
                    P = y + 1;
                r.push(b, E, P), r.push(C, P, E) }
        this.setIndex(r), this.setAttribute("position", new _e(s, 3)), this.setAttribute("uv", new _e(a, 2)), this.setAttribute("normal", new _e(c, 3)) }
    static fromJSON(e) { return new ds(e.points, e.segments, e.phiStart, e.phiLength) } }
class fs extends yn { constructor(e = 1, t = 0) { const n = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
            i = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
        super(n, i, e, t);
        this.type = "OctahedronGeometry", this.parameters = { radius: e, detail: t } }
    static fromJSON(e) { return new fs(e.radius, e.detail) } }
class ps extends De { constructor(e = .5, t = 1, n = 8, i = 1, r = 0, s = Math.PI * 2) { super();
        this.type = "RingGeometry", this.parameters = { innerRadius: e, outerRadius: t, thetaSegments: n, phiSegments: i, thetaStart: r, thetaLength: s }, n = Math.max(3, n), i = Math.max(1, i); const a = [],
            l = [],
            c = [],
            h = []; let u = e; const d = (t - e) / i,
            f = new S,
            m = new $; for (let x = 0; x <= i; x++) { for (let v = 0; v <= n; v++) { const g = r + v / n * s;
                f.x = u * Math.cos(g), f.y = u * Math.sin(g), l.push(f.x, f.y, f.z), c.push(0, 0, 1), m.x = (f.x / t + 1) / 2, m.y = (f.y / t + 1) / 2, h.push(m.x, m.y) }
            u += d } for (let x = 0; x < i; x++) { const v = x * (n + 1); for (let g = 0; g < n; g++) { const p = g + v,
                    M = p,
                    y = p + n + 1,
                    b = p + n + 2,
                    E = p + 1;
                a.push(M, y, E), a.push(y, b, E) } }
        this.setIndex(a), this.setAttribute("position", new _e(l, 3)), this.setAttribute("normal", new _e(c, 3)), this.setAttribute("uv", new _e(h, 2)) }
    static fromJSON(e) { return new ps(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength) } }
class ji extends De { constructor(e = new Qt([new $(0, .5), new $(-.5, -.5), new $(.5, -.5)]), t = 12) { super();
        this.type = "ShapeGeometry", this.parameters = { shapes: e, curveSegments: t }; const n = [],
            i = [],
            r = [],
            s = []; let a = 0,
            l = 0; if (Array.isArray(e) === !1) c(e);
        else
            for (let h = 0; h < e.length; h++) c(e[h]), this.addGroup(a, l, h), a += l, l = 0;
        this.setIndex(n), this.setAttribute("position", new _e(i, 3)), this.setAttribute("normal", new _e(r, 3)), this.setAttribute("uv", new _e(s, 2));

        function c(h) { const u = i.length / 3,
                d = h.extractPoints(t); let f = d.shape; const m = d.holes;
            jt.isClockWise(f) === !1 && (f = f.reverse()); for (let v = 0, g = m.length; v < g; v++) { const p = m[v];
                jt.isClockWise(p) === !0 && (m[v] = p.reverse()) } const x = jt.triangulateShape(f, m); for (let v = 0, g = m.length; v < g; v++) { const p = m[v];
                f = f.concat(p) } for (let v = 0, g = f.length; v < g; v++) { const p = f[v];
                i.push(p.x, p.y, 0), r.push(0, 0, 1), s.push(p.x, p.y) } for (let v = 0, g = x.length; v < g; v++) { const p = x[v],
                    M = p[0] + u,
                    y = p[1] + u,
                    b = p[2] + u;
                n.push(M, y, b), l += 3 } } }
    toJSON() { const e = super.toJSON(),
            t = this.parameters.shapes; return Eg(t, e) }
    static fromJSON(e, t) { const n = []; for (let i = 0, r = e.shapes.length; i < r; i++) { const s = t[e.shapes[i]];
            n.push(s) } return new ji(n, e.curveSegments) } }

function Eg(o, e) { if (e.shapes = [], Array.isArray(o))
        for (let t = 0, n = o.length; t < n; t++) { const i = o[t];
            e.shapes.push(i.uuid) } else e.shapes.push(o.uuid); return e }
class ms extends De { constructor(e = 1, t = 32, n = 16, i = 0, r = Math.PI * 2, s = 0, a = Math.PI) { super();
        this.type = "SphereGeometry", this.parameters = { radius: e, widthSegments: t, heightSegments: n, phiStart: i, phiLength: r, thetaStart: s, thetaLength: a }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n)); const l = Math.min(s + a, Math.PI); let c = 0; const h = [],
            u = new S,
            d = new S,
            f = [],
            m = [],
            x = [],
            v = []; for (let g = 0; g <= n; g++) { const p = [],
                M = g / n; let y = 0;
            g == 0 && s == 0 ? y = .5 / t : g == n && l == Math.PI && (y = -.5 / t); for (let b = 0; b <= t; b++) { const E = b / t;
                u.x = -e * Math.cos(i + E * r) * Math.sin(s + M * a), u.y = e * Math.cos(s + M * a), u.z = e * Math.sin(i + E * r) * Math.sin(s + M * a), m.push(u.x, u.y, u.z), d.copy(u).normalize(), x.push(d.x, d.y, d.z), v.push(E + y, 1 - M), p.push(c++) }
            h.push(p) } for (let g = 0; g < n; g++)
            for (let p = 0; p < t; p++) { const M = h[g][p + 1],
                    y = h[g][p],
                    b = h[g + 1][p],
                    E = h[g + 1][p + 1];
                (g !== 0 || s > 0) && f.push(M, y, E), (g !== n - 1 || l < Math.PI) && f.push(y, b, E) }
        this.setIndex(f), this.setAttribute("position", new _e(m, 3)), this.setAttribute("normal", new _e(x, 3)), this.setAttribute("uv", new _e(v, 2)) }
    static fromJSON(e) { return new ms(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength) } }
class gs extends yn { constructor(e = 1, t = 0) { const n = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
            i = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
        super(n, i, e, t);
        this.type = "TetrahedronGeometry", this.parameters = { radius: e, detail: t } }
    static fromJSON(e) { return new gs(e.radius, e.detail) } }
class xs extends De { constructor(e = 1, t = .4, n = 8, i = 6, r = Math.PI * 2) { super();
        this.type = "TorusGeometry", this.parameters = { radius: e, tube: t, radialSegments: n, tubularSegments: i, arc: r }, n = Math.floor(n), i = Math.floor(i); const s = [],
            a = [],
            l = [],
            c = [],
            h = new S,
            u = new S,
            d = new S; for (let f = 0; f <= n; f++)
            for (let m = 0; m <= i; m++) { const x = m / i * r,
                    v = f / n * Math.PI * 2;
                u.x = (e + t * Math.cos(v)) * Math.cos(x), u.y = (e + t * Math.cos(v)) * Math.sin(x), u.z = t * Math.sin(v), a.push(u.x, u.y, u.z), h.x = e * Math.cos(x), h.y = e * Math.sin(x), d.subVectors(u, h).normalize(), l.push(d.x, d.y, d.z), c.push(m / i), c.push(f / n) }
        for (let f = 1; f <= n; f++)
            for (let m = 1; m <= i; m++) { const x = (i + 1) * f + m - 1,
                    v = (i + 1) * (f - 1) + m - 1,
                    g = (i + 1) * (f - 1) + m,
                    p = (i + 1) * f + m;
                s.push(x, v, p), s.push(v, g, p) }
        this.setIndex(s), this.setAttribute("position", new _e(a, 3)), this.setAttribute("normal", new _e(l, 3)), this.setAttribute("uv", new _e(c, 2)) }
    static fromJSON(e) { return new xs(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc) } }
class ys extends De { constructor(e = 1, t = .4, n = 64, i = 8, r = 2, s = 3) { super();
        this.type = "TorusKnotGeometry", this.parameters = { radius: e, tube: t, tubularSegments: n, radialSegments: i, p: r, q: s }, n = Math.floor(n), i = Math.floor(i); const a = [],
            l = [],
            c = [],
            h = [],
            u = new S,
            d = new S,
            f = new S,
            m = new S,
            x = new S,
            v = new S,
            g = new S; for (let M = 0; M <= n; ++M) { const y = M / n * r * Math.PI * 2;
            p(y, r, s, e, f), p(y + .01, r, s, e, m), v.subVectors(m, f), g.addVectors(m, f), x.crossVectors(v, g), g.crossVectors(x, v), x.normalize(), g.normalize(); for (let b = 0; b <= i; ++b) { const E = b / i * Math.PI * 2,
                    C = -t * Math.cos(E),
                    P = t * Math.sin(E);
                u.x = f.x + (C * g.x + P * x.x), u.y = f.y + (C * g.y + P * x.y), u.z = f.z + (C * g.z + P * x.z), l.push(u.x, u.y, u.z), d.subVectors(u, f).normalize(), c.push(d.x, d.y, d.z), h.push(M / n), h.push(b / i) } } for (let M = 1; M <= n; M++)
            for (let y = 1; y <= i; y++) { const b = (i + 1) * (M - 1) + (y - 1),
                    E = (i + 1) * M + (y - 1),
                    C = (i + 1) * M + y,
                    P = (i + 1) * (M - 1) + y;
                a.push(b, E, P), a.push(E, C, P) }
        this.setIndex(a), this.setAttribute("position", new _e(l, 3)), this.setAttribute("normal", new _e(c, 3)), this.setAttribute("uv", new _e(h, 2));

        function p(M, y, b, E, C) { const P = Math.cos(M),
                H = Math.sin(M),
                B = b / y * M,
                _ = Math.cos(B);
            C.x = E * (2 + _) * .5 * P, C.y = E * (2 + _) * H * .5, C.z = E * Math.sin(B) * .5 } }
    static fromJSON(e) { return new ys(e.radius, e.tube, e.tubularSegments, e.radialSegments, e.p, e.q) } }
class vs extends De { constructor(e = new ko(new S(-1, -1, 0), new S(-1, 1, 0), new S(1, 1, 0)), t = 64, n = 1, i = 8, r = !1) { super();
        this.type = "TubeGeometry", this.parameters = { path: e, tubularSegments: t, radius: n, radialSegments: i, closed: r }; const s = e.computeFrenetFrames(t, r);
        this.tangents = s.tangents, this.normals = s.normals, this.binormals = s.binormals; const a = new S,
            l = new S,
            c = new $; let h = new S; const u = [],
            d = [],
            f = [],
            m = [];
        x(), this.setIndex(m), this.setAttribute("position", new _e(u, 3)), this.setAttribute("normal", new _e(d, 3)), this.setAttribute("uv", new _e(f, 2));

        function x() { for (let M = 0; M < t; M++) v(M);
            v(r === !1 ? t : 0), p(), g() }

        function v(M) { h = e.getPointAt(M / t, h); const y = s.normals[M],
                b = s.binormals[M]; for (let E = 0; E <= i; E++) { const C = E / i * Math.PI * 2,
                    P = Math.sin(C),
                    H = -Math.cos(C);
                l.x = H * y.x + P * b.x, l.y = H * y.y + P * b.y, l.z = H * y.z + P * b.z, l.normalize(), d.push(l.x, l.y, l.z), a.x = h.x + n * l.x, a.y = h.y + n * l.y, a.z = h.z + n * l.z, u.push(a.x, a.y, a.z) } }

        function g() { for (let M = 1; M <= t; M++)
                for (let y = 1; y <= i; y++) { const b = (i + 1) * (M - 1) + (y - 1),
                        E = (i + 1) * M + (y - 1),
                        C = (i + 1) * M + y,
                        P = (i + 1) * (M - 1) + y;
                    m.push(b, E, P), m.push(E, C, P) } }

        function p() { for (let M = 0; M <= t; M++)
                for (let y = 0; y <= i; y++) c.x = M / t, c.y = y / i, f.push(c.x, c.y) } }
    toJSON() { const e = super.toJSON(); return e.path = this.parameters.path.toJSON(), e }
    static fromJSON(e) { return new vs(new Wo[e.path.type]().fromJSON(e.path), e.tubularSegments, e.radius, e.radialSegments, e.closed) } }
class Ag extends De { constructor(e = null) { super(); if (this.type = "WireframeGeometry", this.parameters = { geometry: e }, e !== null) { const t = [],
                n = new Set,
                i = new S,
                r = new S; if (e.index !== null) { const s = e.attributes.position,
                    a = e.index; let l = e.groups;
                l.length === 0 && (l = [{ start: 0, count: a.count, materialIndex: 0 }]); for (let c = 0, h = l.length; c < h; ++c) { const u = l[c],
                        d = u.start,
                        f = u.count; for (let m = d, x = d + f; m < x; m += 3)
                        for (let v = 0; v < 3; v++) { const g = a.getX(m + v),
                                p = a.getX(m + (v + 1) % 3);
                            i.fromBufferAttribute(s, g), r.fromBufferAttribute(s, p), gc(i, r, n) === !0 && (t.push(i.x, i.y, i.z), t.push(r.x, r.y, r.z)) } } } else { const s = e.attributes.position; for (let a = 0, l = s.count / 3; a < l; a++)
                    for (let c = 0; c < 3; c++) { const h = 3 * a + c,
                            u = 3 * a + (c + 1) % 3;
                        i.fromBufferAttribute(s, h), r.fromBufferAttribute(s, u), gc(i, r, n) === !0 && (t.push(i.x, i.y, i.z), t.push(r.x, r.y, r.z)) } }
            this.setAttribute("position", new _e(t, 3)) } } }

function gc(o, e, t) { const n = `${o.x},${o.y},${o.z}-${e.x},${e.y},${e.z}`,
        i = `${e.x},${e.y},${e.z}-${o.x},${o.y},${o.z}`; return t.has(n) === !0 || t.has(i) === !0 ? !1 : (t.add(n, i), !0) }
var xc = Object.freeze({ __proto__: null, BoxGeometry: Ln, BoxBufferGeometry: Ln, CircleGeometry: Qr, CircleBufferGeometry: Qr, ConeGeometry: jr, ConeBufferGeometry: jr, CylinderGeometry: Ji, CylinderBufferGeometry: Ji, DodecahedronGeometry: es, DodecahedronBufferGeometry: es, EdgesGeometry: Km, ExtrudeGeometry: en, ExtrudeBufferGeometry: en, IcosahedronGeometry: us, IcosahedronBufferGeometry: us, LatheGeometry: ds, LatheBufferGeometry: ds, OctahedronGeometry: fs, OctahedronBufferGeometry: fs, PlaneGeometry: Oi, PlaneBufferGeometry: Oi, PolyhedronGeometry: yn, PolyhedronBufferGeometry: yn, RingGeometry: ps, RingBufferGeometry: ps, ShapeGeometry: ji, ShapeBufferGeometry: ji, SphereGeometry: ms, SphereBufferGeometry: ms, TetrahedronGeometry: gs, TetrahedronBufferGeometry: gs, TorusGeometry: xs, TorusBufferGeometry: xs, TorusKnotGeometry: ys, TorusKnotBufferGeometry: ys, TubeGeometry: vs, TubeBufferGeometry: vs, WireframeGeometry: Ag });
class yc extends ut { constructor(e) { super();
        this.type = "ShadowMaterial", this.color = new he(0), this.transparent = !0, this.setValues(e) }
    copy(e) { return super.copy(e), this.color.copy(e.color), this } }
yc.prototype.isShadowMaterial = !0;
class Jo extends ut { constructor(e) { super();
        this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new he(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new he(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Wn, this.normalScale = new $(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(e) }
    copy(e) { return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this } }
Jo.prototype.isMeshStandardMaterial = !0;
class vc extends Jo { constructor(e) { super();
        this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new $(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() { return xt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1) }, set: function(t) { this.ior = (1 + .4 * t) / (1 - .4 * t) } }), this.sheenColor = new he(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationColor = new he(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new he(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._transmission = 0, this.setValues(e) }
    get sheen() { return this._sheen }
    set sheen(e) { this._sheen > 0 != e > 0 && this.version++, this._sheen = e }
    get clearcoat() { return this._clearcoat }
    set clearcoat(e) { this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e }
    get transmission() { return this._transmission }
    set transmission(e) { this._transmission > 0 != e > 0 && this.version++, this._transmission = e }
    copy(e) { return super.copy(e), this.defines = { STANDARD: "", PHYSICAL: "" }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this } }
vc.prototype.isMeshPhysicalMaterial = !0;
class _c extends ut { constructor(e) { super();
        this.type = "MeshPhongMaterial", this.color = new he(16777215), this.specular = new he(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new he(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Wn, this.normalScale = new $(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = rr, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(e) }
    copy(e) { return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this } }
_c.prototype.isMeshPhongMaterial = !0;
class Mc extends ut { constructor(e) { super();
        this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new he(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new he(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Wn, this.normalScale = new $(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e) }
    copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this } }
Mc.prototype.isMeshToonMaterial = !0;
class bc extends ut { constructor(e) { super();
        this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Wn, this.normalScale = new $(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.flatShading = !1, this.setValues(e) }
    copy(e) { return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this } }
bc.prototype.isMeshNormalMaterial = !0;
class wc extends ut { constructor(e) { super();
        this.type = "MeshLambertMaterial", this.color = new he(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new he(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = rr, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e) }
    copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this } }
wc.prototype.isMeshLambertMaterial = !0;
class Sc extends ut { constructor(e) { super();
        this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new he(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Wn, this.normalScale = new $(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.setValues(e) }
    copy(e) { return super.copy(e), this.defines = { MATCAP: "" }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.flatShading = e.flatShading, this } }
Sc.prototype.isMeshMatcapMaterial = !0;
class Tc extends vi { constructor(e) { super();
        this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e) }
    copy(e) { return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this } }
Tc.prototype.isLineDashedMaterial = !0;
var Cg = Object.freeze({ __proto__: null, ShadowMaterial: yc, SpriteMaterial: Ao, RawShaderMaterial: Ui, ShaderMaterial: mn, PointsMaterial: Io, MeshPhysicalMaterial: vc, MeshStandardMaterial: Jo, MeshPhongMaterial: _c, MeshToonMaterial: Mc, MeshNormalMaterial: bc, MeshLambertMaterial: wc, MeshDepthMaterial: bo, MeshDistanceMaterial: wo, MeshBasicMaterial: Sr, MeshMatcapMaterial: Sc, LineDashedMaterial: Tc, LineBasicMaterial: vi, Material: ut });
const Ze = { arraySlice: function(o, e, t) { return Ze.isTypedArray(o) ? new o.constructor(o.subarray(e, t !== void 0 ? t : o.length)) : o.slice(e, t) }, convertArray: function(o, e, t) { return !o || !t && o.constructor === e ? o : typeof e.BYTES_PER_ELEMENT == "number" ? new e(o) : Array.prototype.slice.call(o) }, isTypedArray: function(o) { return ArrayBuffer.isView(o) && !(o instanceof DataView) }, getKeyframeOrder: function(o) {
        function e(i, r) { return o[i] - o[r] } const t = o.length,
            n = new Array(t); for (let i = 0; i !== t; ++i) n[i] = i; return n.sort(e), n }, sortedArray: function(o, e, t) { const n = o.length,
            i = new o.constructor(n); for (let r = 0, s = 0; s !== n; ++r) { const a = t[r] * e; for (let l = 0; l !== e; ++l) i[s++] = o[a + l] } return i }, flattenJSON: function(o, e, t, n) { let i = 1,
            r = o[0]; for (; r !== void 0 && r[n] === void 0;) r = o[i++]; if (r === void 0) return; let s = r[n]; if (s !== void 0)
            if (Array.isArray(s))
                do s = r[n], s !== void 0 && (e.push(r.time), t.push.apply(t, s)), r = o[i++]; while (r !== void 0);
            else if (s.toArray !== void 0)
            do s = r[n], s !== void 0 && (e.push(r.time), s.toArray(t, t.length)), r = o[i++]; while (r !== void 0);
        else
            do s = r[n], s !== void 0 && (e.push(r.time), t.push(s)), r = o[i++]; while (r !== void 0) }, subclip: function(o, e, t, n, i = 30) { const r = o.clone();
        r.name = e; const s = []; for (let l = 0; l < r.tracks.length; ++l) { const c = r.tracks[l],
                h = c.getValueSize(),
                u = [],
                d = []; for (let f = 0; f < c.times.length; ++f) { const m = c.times[f] * i; if (!(m < t || m >= n)) { u.push(c.times[f]); for (let x = 0; x < h; ++x) d.push(c.values[f * h + x]) } }
            u.length !== 0 && (c.times = Ze.convertArray(u, c.times.constructor), c.values = Ze.convertArray(d, c.values.constructor), s.push(c)) }
        r.tracks = s; let a = 1 / 0; for (let l = 0; l < r.tracks.length; ++l) a > r.tracks[l].times[0] && (a = r.tracks[l].times[0]); for (let l = 0; l < r.tracks.length; ++l) r.tracks[l].shift(-1 * a); return r.resetDuration(), r }, makeClipAdditive: function(o, e = 0, t = o, n = 30) { n <= 0 && (n = 30); const i = t.tracks.length,
            r = e / n; for (let s = 0; s < i; ++s) { const a = t.tracks[s],
                l = a.ValueTypeName; if (l === "bool" || l === "string") continue; const c = o.tracks.find(function(g) { return g.name === a.name && g.ValueTypeName === l }); if (c === void 0) continue; let h = 0; const u = a.getValueSize();
            a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (h = u / 3); let d = 0; const f = c.getValueSize();
            c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (d = f / 3); const m = a.times.length - 1; let x; if (r <= a.times[0]) { const g = h,
                    p = u - h;
                x = Ze.arraySlice(a.values, g, p) } else if (r >= a.times[m]) { const g = m * u + h,
                    p = g + u - h;
                x = Ze.arraySlice(a.values, g, p) } else { const g = a.createInterpolant(),
                    p = h,
                    M = u - h;
                g.evaluate(r), x = Ze.arraySlice(g.resultBuffer, p, M) }
            l === "quaternion" && new Mt().fromArray(x).normalize().conjugate().toArray(x); const v = c.times.length; for (let g = 0; g < v; ++g) { const p = g * f + d; if (l === "quaternion") Mt.multiplyQuaternionsFlat(c.values, p, x, 0, c.values, p);
                else { const M = f - d * 2; for (let y = 0; y < M; ++y) c.values[p + y] -= x[y] } } } return o.blendMode = Ba, o } };
class _n { constructor(e, t, n, i) { this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {} }
    evaluate(e) { const t = this.parameterPositions; let n = this._cachedIndex,
            i = t[n],
            r = t[n - 1];
        e: { t: { let s;n: { i: if (!(e < i)) { for (let a = n + 2;;) { if (i === void 0) { if (e < r) break i; return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, r) } if (n === a) break; if (r = i, i = t[++n], e < i) break t }
                        s = t.length; break n } if (!(e >= r)) { const a = t[1];
                        e < a && (n = 2, r = a); for (let l = n - 2;;) { if (r === void 0) return this._cachedIndex = 0, this.beforeStart_(0, e, i); if (n === l) break; if (i = r, r = t[--n - 1], e >= r) break t }
                        s = n, n = 0; break n } break e } for (; n < s;) { const a = n + s >>> 1;
                    e < t[a] ? s = a : n = a + 1 } if (i = t[n], r = t[n - 1], r === void 0) return this._cachedIndex = 0, this.beforeStart_(0, e, i); if (i === void 0) return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, r, e) }
            this._cachedIndex = n, this.intervalChanged_(n, r, i) }
        return this.interpolate_(n, r, e, i) }
    getSettings_() { return this.settings || this.DefaultSettings_ }
    copySampleValue_(e) { const t = this.resultBuffer,
            n = this.sampleValues,
            i = this.valueSize,
            r = e * i; for (let s = 0; s !== i; ++s) t[s] = n[r + s]; return t }
    interpolate_() { throw new Error("call to abstract method") }
    intervalChanged_() {} }
_n.prototype.beforeStart_ = _n.prototype.copySampleValue_;
_n.prototype.afterEnd_ = _n.prototype.copySampleValue_;
class Rg extends _n { constructor(e, t, n, i) { super(e, t, n, i);
        this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: kn, endingEnd: kn } }
    intervalChanged_(e, t, n) { const i = this.parameterPositions; let r = e - 2,
            s = e + 1,
            a = i[r],
            l = i[s]; if (a === void 0) switch (this.getSettings_().endingStart) {
            case Vn:
                r = e, a = 2 * t - n; break;
            case fr:
                r = i.length - 2, a = t + i[r] - i[r + 1]; break;
            default:
                r = e, a = n }
        if (l === void 0) switch (this.getSettings_().endingEnd) {
            case Vn:
                s = e, l = 2 * n - t; break;
            case fr:
                s = 1, l = n + i[1] - i[0]; break;
            default:
                s = e - 1, l = t }
        const c = (n - t) * .5,
            h = this.valueSize;
        this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = r * h, this._offsetNext = s * h }
    interpolate_(e, t, n, i) { const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            l = e * a,
            c = l - a,
            h = this._offsetPrev,
            u = this._offsetNext,
            d = this._weightPrev,
            f = this._weightNext,
            m = (n - t) / (i - t),
            x = m * m,
            v = x * m,
            g = -d * v + 2 * d * x - d * m,
            p = (1 + d) * v + (-1.5 - 2 * d) * x + (-.5 + d) * m + 1,
            M = (-1 - f) * v + (1.5 + f) * x + .5 * m,
            y = f * v - f * x; for (let b = 0; b !== a; ++b) r[b] = g * s[h + b] + p * s[c + b] + M * s[l + b] + y * s[u + b]; return r } }
class Ec extends _n { constructor(e, t, n, i) { super(e, t, n, i) }
    interpolate_(e, t, n, i) { const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            l = e * a,
            c = l - a,
            h = (n - t) / (i - t),
            u = 1 - h; for (let d = 0; d !== a; ++d) r[d] = s[c + d] * u + s[l + d] * h; return r } }
class Lg extends _n { constructor(e, t, n, i) { super(e, t, n, i) }
    interpolate_(e) { return this.copySampleValue_(e - 1) } }
class Vt { constructor(e, t, n, i) { if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined"); if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
        this.name = e, this.times = Ze.convertArray(t, this.TimeBufferType), this.values = Ze.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation) }
    static toJSON(e) { const t = e.constructor; let n; if (t.toJSON !== this.toJSON) n = t.toJSON(e);
        else { n = { name: e.name, times: Ze.convertArray(e.times, Array), values: Ze.convertArray(e.values, Array) }; const i = e.getInterpolation();
            i !== e.DefaultInterpolation && (n.interpolation = i) } return n.type = e.ValueTypeName, n }
    InterpolantFactoryMethodDiscrete(e) { return new Lg(this.times, this.values, this.getValueSize(), e) }
    InterpolantFactoryMethodLinear(e) { return new Ec(this.times, this.values, this.getValueSize(), e) }
    InterpolantFactoryMethodSmooth(e) { return new Rg(this.times, this.values, this.getValueSize(), e) }
    setInterpolation(e) { let t; switch (e) {
            case ur:
                t = this.InterpolantFactoryMethodDiscrete; break;
            case dr:
                t = this.InterpolantFactoryMethodLinear; break;
            case Us:
                t = this.InterpolantFactoryMethodSmooth; break } if (t === void 0) { const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name; if (this.createInterpolant === void 0)
                if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
                else throw new Error(n);
            return console.warn("THREE.KeyframeTrack:", n), this } return this.createInterpolant = t, this }
    getInterpolation() { switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return ur;
            case this.InterpolantFactoryMethodLinear:
                return dr;
            case this.InterpolantFactoryMethodSmooth:
                return Us } }
    getValueSize() { return this.values.length / this.times.length }
    shift(e) { if (e !== 0) { const t = this.times; for (let n = 0, i = t.length; n !== i; ++n) t[n] += e } return this }
    scale(e) { if (e !== 1) { const t = this.times; for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e } return this }
    trim(e, t) { const n = this.times,
            i = n.length; let r = 0,
            s = i - 1; for (; r !== i && n[r] < e;) ++r; for (; s !== -1 && n[s] > t;) --s; if (++s, r !== 0 || s !== i) { r >= s && (s = Math.max(s, 1), r = s - 1); const a = this.getValueSize();
            this.times = Ze.arraySlice(n, r, s), this.values = Ze.arraySlice(this.values, r * a, s * a) } return this }
    validate() { let e = !0; const t = this.getValueSize();
        t - Math.floor(t) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1); const n = this.times,
            i = this.values,
            r = n.length;
        r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1); let s = null; for (let a = 0; a !== r; a++) { const l = n[a]; if (typeof l == "number" && isNaN(l)) { console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, l), e = !1; break } if (s !== null && s > l) { console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, s), e = !1; break }
            s = l } if (i !== void 0 && Ze.isTypedArray(i))
            for (let a = 0, l = i.length; a !== l; ++a) { const c = i[a]; if (isNaN(c)) { console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, c), e = !1; break } }
        return e }
    optimize() { const e = Ze.arraySlice(this.times),
            t = Ze.arraySlice(this.values),
            n = this.getValueSize(),
            i = this.getInterpolation() === Us,
            r = e.length - 1; let s = 1; for (let a = 1; a < r; ++a) { let l = !1; const c = e[a],
                h = e[a + 1]; if (c !== h && (a !== 1 || c !== e[0]))
                if (i) l = !0;
                else { const u = a * n,
                        d = u - n,
                        f = u + n; for (let m = 0; m !== n; ++m) { const x = t[u + m]; if (x !== t[d + m] || x !== t[f + m]) { l = !0; break } } }
            if (l) { if (a !== s) { e[s] = e[a]; const u = a * n,
                        d = s * n; for (let f = 0; f !== n; ++f) t[d + f] = t[u + f] }++s } } if (r > 0) { e[s] = e[r]; for (let a = r * n, l = s * n, c = 0; c !== n; ++c) t[l + c] = t[a + c];++s } return s !== e.length ? (this.times = Ze.arraySlice(e, 0, s), this.values = Ze.arraySlice(t, 0, s * n)) : (this.times = e, this.values = t), this }
    clone() { const e = Ze.arraySlice(this.times, 0),
            t = Ze.arraySlice(this.values, 0),
            n = this.constructor,
            i = new n(this.name, e, t); return i.createInterpolant = this.createInterpolant, i } }
Vt.prototype.TimeBufferType = Float32Array;
Vt.prototype.ValueBufferType = Float32Array;
Vt.prototype.DefaultInterpolation = dr;
class Mi extends Vt {}
Mi.prototype.ValueTypeName = "bool";
Mi.prototype.ValueBufferType = Array;
Mi.prototype.DefaultInterpolation = ur;
Mi.prototype.InterpolantFactoryMethodLinear = void 0;
Mi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ac extends Vt {}
Ac.prototype.ValueTypeName = "color";
class _s extends Vt {}
_s.prototype.ValueTypeName = "number";
class Pg extends _n { constructor(e, t, n, i) { super(e, t, n, i) }
    interpolate_(e, t, n, i) { const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            l = (n - t) / (i - t); let c = e * a; for (let h = c + a; c !== h; c += 4) Mt.slerpFlat(r, 0, s, c - a, s, c, l); return r } }
class er extends Vt { InterpolantFactoryMethodLinear(e) { return new Pg(this.times, this.values, this.getValueSize(), e) } }
er.prototype.ValueTypeName = "quaternion";
er.prototype.DefaultInterpolation = dr;
er.prototype.InterpolantFactoryMethodSmooth = void 0;
class bi extends Vt {}
bi.prototype.ValueTypeName = "string";
bi.prototype.ValueBufferType = Array;
bi.prototype.DefaultInterpolation = ur;
bi.prototype.InterpolantFactoryMethodLinear = void 0;
bi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ms extends Vt {}
Ms.prototype.ValueTypeName = "vector";
class Yo { constructor(e, t = -1, n, i = Hs) { this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Lt(), this.duration < 0 && this.resetDuration() }
    static parse(e) { const t = [],
            n = e.tracks,
            i = 1 / (e.fps || 1); for (let s = 0, a = n.length; s !== a; ++s) t.push(Ig(n[s]).scale(i)); const r = new this(e.name, e.duration, t, e.blendMode); return r.uuid = e.uuid, r }
    static toJSON(e) { const t = [],
            n = e.tracks,
            i = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode }; for (let r = 0, s = n.length; r !== s; ++r) t.push(Vt.toJSON(n[r])); return i }
    static CreateFromMorphTargetSequence(e, t, n, i) { const r = t.length,
            s = []; for (let a = 0; a < r; a++) { let l = [],
                c = [];
            l.push((a + r - 1) % r, a, (a + 1) % r), c.push(0, 1, 0); const h = Ze.getKeyframeOrder(l);
            l = Ze.sortedArray(l, 1, h), c = Ze.sortedArray(c, 1, h), !i && l[0] === 0 && (l.push(r), c.push(c[0])), s.push(new _s(".morphTargetInfluences[" + t[a].name + "]", l, c).scale(1 / n)) } return new this(e, -1, s) }
    static findByName(e, t) { let n = e; if (!Array.isArray(e)) { const i = e;
            n = i.geometry && i.geometry.animations || i.animations } for (let i = 0; i < n.length; i++)
            if (n[i].name === t) return n[i];
        return null }
    static CreateClipsFromMorphTargetSequences(e, t, n) { const i = {},
            r = /^([\w-]*?)([\d]+)$/; for (let a = 0, l = e.length; a < l; a++) { const c = e[a],
                h = c.name.match(r); if (h && h.length > 1) { const u = h[1]; let d = i[u];
                d || (i[u] = d = []), d.push(c) } } const s = []; for (const a in i) s.push(this.CreateFromMorphTargetSequence(a, i[a], t, n)); return s }
    static parseAnimation(e, t) { if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null; const n = function(u, d, f, m, x) { if (f.length !== 0) { const v = [],
                        g = [];
                    Ze.flattenJSON(f, v, g, m), v.length !== 0 && x.push(new u(d, v, g)) } },
            i = [],
            r = e.name || "default",
            s = e.fps || 30,
            a = e.blendMode; let l = e.length || -1; const c = e.hierarchy || []; for (let u = 0; u < c.length; u++) { const d = c[u].keys; if (!(!d || d.length === 0))
                if (d[0].morphTargets) { const f = {}; let m; for (m = 0; m < d.length; m++)
                        if (d[m].morphTargets)
                            for (let x = 0; x < d[m].morphTargets.length; x++) f[d[m].morphTargets[x]] = -1;
                    for (const x in f) { const v = [],
                            g = []; for (let p = 0; p !== d[m].morphTargets.length; ++p) { const M = d[m];
                            v.push(M.time), g.push(M.morphTarget === x ? 1 : 0) }
                        i.push(new _s(".morphTargetInfluence[" + x + "]", v, g)) }
                    l = f.length * (s || 1) } else { const f = ".bones[" + t[u].name + "]";
                    n(Ms, f + ".position", d, "pos", i), n(er, f + ".quaternion", d, "rot", i), n(Ms, f + ".scale", d, "scl", i) } } return i.length === 0 ? null : new this(r, l, i, a) }
    resetDuration() { const e = this.tracks; let t = 0; for (let n = 0, i = e.length; n !== i; ++n) { const r = this.tracks[n];
            t = Math.max(t, r.times[r.times.length - 1]) } return this.duration = t, this }
    trim() { for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration); return this }
    validate() { let e = !0; for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate(); return e }
    optimize() { for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize(); return this }
    clone() { const e = []; for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone()); return new this.constructor(this.name, this.duration, e, this.blendMode) }
    toJSON() { return this.constructor.toJSON(this) } }

function Dg(o) { switch (o.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
            return _s;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
            return Ms;
        case "color":
            return Ac;
        case "quaternion":
            return er;
        case "bool":
        case "boolean":
            return Mi;
        case "string":
            return bi } throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + o) }

function Ig(o) { if (o.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse"); const e = Dg(o.type); if (o.times === void 0) { const t = [],
            n = [];
        Ze.flattenJSON(o.keys, t, n, "value"), o.times = t, o.values = n } return e.parse !== void 0 ? e.parse(o) : new e(o.name, o.times, o.values, o.interpolation) }
const wi = { enabled: !1, files: {}, add: function(o, e) { this.enabled !== !1 && (this.files[o] = e) }, get: function(o) { if (this.enabled !== !1) return this.files[o] }, remove: function(o) { delete this.files[o] }, clear: function() { this.files = {} } };
class Cc { constructor(e, t, n) { const i = this; let r = !1,
            s = 0,
            a = 0,
            l; const c = [];
        this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) { a++, r === !1 && i.onStart !== void 0 && i.onStart(h, s, a), r = !0 }, this.itemEnd = function(h) { s++, i.onProgress !== void 0 && i.onProgress(h, s, a), s === a && (r = !1, i.onLoad !== void 0 && i.onLoad()) }, this.itemError = function(h) { i.onError !== void 0 && i.onError(h) }, this.resolveURL = function(h) { return l ? l(h) : h }, this.setURLModifier = function(h) { return l = h, this }, this.addHandler = function(h, u) { return c.push(h, u), this }, this.removeHandler = function(h) { const u = c.indexOf(h); return u !== -1 && c.splice(u, 2), this }, this.getHandler = function(h) { for (let u = 0, d = c.length; u < d; u += 2) { const f = c[u],
                    m = c[u + 1]; if (f.global && (f.lastIndex = 0), f.test(h)) return m } return null } } }
const Fg = new Cc;
class Ct { constructor(e) { this.manager = e !== void 0 ? e : Fg, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {} }
    load() {}
    loadAsync(e, t) { const n = this; return new Promise(function(i, r) { n.load(e, i, t, r) }) }
    parse() {}
    setCrossOrigin(e) { return this.crossOrigin = e, this }
    setWithCredentials(e) { return this.withCredentials = e, this }
    setPath(e) { return this.path = e, this }
    setResourcePath(e) { return this.resourcePath = e, this }
    setRequestHeader(e) { return this.requestHeader = e, this } }
const tn = {};
class Si extends Ct { constructor(e) { super(e) }
    load(e, t, n, i) { e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const r = wi.get(e); if (r !== void 0) return this.manager.itemStart(e), setTimeout(() => { t && t(r), this.manager.itemEnd(e) }, 0), r; if (tn[e] !== void 0) { tn[e].push({ onLoad: t, onProgress: n, onError: i }); return }
        tn[e] = [], tn[e].push({ onLoad: t, onProgress: n, onError: i }); const s = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }),
            a = this.mimeType,
            l = this.responseType;
        fetch(s).then(c => { if (c.status === 200 || c.status === 0) { if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream == "undefined" || c.body.getReader === void 0) return c; const h = tn[e],
                    u = c.body.getReader(),
                    d = c.headers.get("Content-Length"),
                    f = d ? parseInt(d) : 0,
                    m = f !== 0; let x = 0; const v = new ReadableStream({ start(g) { p();

                        function p() { u.read().then(({ done: M, value: y }) => { if (M) g.close();
                                else { x += y.byteLength; const b = new ProgressEvent("progress", { lengthComputable: m, loaded: x, total: f }); for (let E = 0, C = h.length; E < C; E++) { const P = h[E];
                                        P.onProgress && P.onProgress(b) }
                                    g.enqueue(y), p() } }) } } }); return new Response(v) } else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`) }).then(c => { switch (l) {
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
                            f = new TextDecoder(d); return c.arrayBuffer().then(m => f.decode(m)) } } }).then(c => { wi.add(e, c); const h = tn[e];
            delete tn[e]; for (let u = 0, d = h.length; u < d; u++) { const f = h[u];
                f.onLoad && f.onLoad(c) } }).catch(c => { const h = tn[e]; if (h === void 0) throw this.manager.itemError(e), c;
            delete tn[e]; for (let u = 0, d = h.length; u < d; u++) { const f = h[u];
                f.onError && f.onError(c) }
            this.manager.itemError(e) }).finally(() => { this.manager.itemEnd(e) }), this.manager.itemStart(e) }
    setResponseType(e) { return this.responseType = e, this }
    setMimeType(e) { return this.mimeType = e, this } }
class bs extends Ct { constructor(e) { super(e) }
    load(e, t, n, i) { this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const r = this,
            s = wi.get(e); if (s !== void 0) return r.manager.itemStart(e), setTimeout(function() { t && t(s), r.manager.itemEnd(e) }, 0), s; const a = Ii("img");

        function l() { h(), wi.add(e, this), t && t(this), r.manager.itemEnd(e) }

        function c(u) { h(), i && i(u), r.manager.itemError(e), r.manager.itemEnd(e) }

        function h() { a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1) } return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), e.substr(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a } }
class Ng extends Ct { constructor(e) { super(e) }
    load(e, t, n, i) { const r = new zi,
            s = new bs(this.manager);
        s.setCrossOrigin(this.crossOrigin), s.setPath(this.path); let a = 0;

        function l(c) { s.load(e[c], function(h) { r.images[c] = h, a++, a === 6 && (r.needsUpdate = !0, t && t(r)) }, void 0, i) } for (let c = 0; c < e.length; ++c) l(c); return r } }
class Bg extends Ct { constructor(e) { super(e) }
    load(e, t, n, i) { const r = new ot,
            s = new bs(this.manager); return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(e, function(a) { r.image = a, r.needsUpdate = !0, t !== void 0 && t(r) }, n, i), r } }
class Wt extends He { constructor(e, t = 1) { super();
        this.type = "Light", this.color = new he(e), this.intensity = t }
    dispose() {}
    copy(e) { return super.copy(e), this.color.copy(e.color), this.intensity = e.intensity, this }
    toJSON(e) { const t = super.toJSON(e); return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t } }
Wt.prototype.isLight = !0;
class Rc extends Wt { constructor(e, t, n) { super(e, n);
        this.type = "HemisphereLight", this.position.copy(He.DefaultUp), this.updateMatrix(), this.groundColor = new he(t) }
    copy(e) { return Wt.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this } }
Rc.prototype.isHemisphereLight = !0;
const Lc = new ge,
    Pc = new S,
    Dc = new S;
class Zo { constructor(e) { this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new $(512, 512), this.map = null, this.mapPass = null, this.matrix = new ge, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Nr, this._frameExtents = new $(1, 1), this._viewportCount = 1, this._viewports = [new We(0, 0, 1, 1)] }
    getViewportCount() { return this._viewportCount }
    getFrustum() { return this._frustum }
    updateMatrices(e) { const t = this.camera,
            n = this.matrix;
        Pc.setFromMatrixPosition(e.matrixWorld), t.position.copy(Pc), Dc.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Dc), t.updateMatrixWorld(), Lc.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Lc), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse) }
    getViewport(e) { return this._viewports[e] }
    getFrameExtents() { return this._frameExtents }
    dispose() { this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose() }
    copy(e) { return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this }
    clone() { return new this.constructor().copy(this) }
    toJSON() { const e = {}; return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e } }
class Ic extends Zo { constructor() { super(new yt(50, 1, .5, 500));
        this.focus = 1 }
    updateMatrices(e) { const t = this.camera,
            n = Vs * 2 * e.angle * this.focus,
            i = this.mapSize.width / this.mapSize.height,
            r = e.distance || t.far;
        (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e) }
    copy(e) { return super.copy(e), this.focus = e.focus, this } }
Ic.prototype.isSpotLightShadow = !0;
class Fc extends Wt { constructor(e, t, n = 0, i = Math.PI / 3, r = 0, s = 1) { super(e, t);
        this.type = "SpotLight", this.position.copy(He.DefaultUp), this.updateMatrix(), this.target = new He, this.distance = n, this.angle = i, this.penumbra = r, this.decay = s, this.shadow = new Ic }
    get power() { return this.intensity * Math.PI }
    set power(e) { this.intensity = e / Math.PI }
    dispose() { this.shadow.dispose() }
    copy(e) { return super.copy(e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this } }
Fc.prototype.isSpotLight = !0;
const Nc = new ge,
    tr = new S,
    $o = new S;
class Bc extends Zo { constructor() { super(new yt(90, 1, .5, 500));
        this._frameExtents = new $(4, 2), this._viewportCount = 6, this._viewports = [new We(2, 1, 1, 1), new We(0, 1, 1, 1), new We(3, 1, 1, 1), new We(1, 1, 1, 1), new We(3, 0, 1, 1), new We(1, 0, 1, 1)], this._cubeDirections = [new S(1, 0, 0), new S(-1, 0, 0), new S(0, 0, 1), new S(0, 0, -1), new S(0, 1, 0), new S(0, -1, 0)], this._cubeUps = [new S(0, 1, 0), new S(0, 1, 0), new S(0, 1, 0), new S(0, 1, 0), new S(0, 0, 1), new S(0, 0, -1)] }
    updateMatrices(e, t = 0) { const n = this.camera,
            i = this.matrix,
            r = e.distance || n.far;
        r !== n.far && (n.far = r, n.updateProjectionMatrix()), tr.setFromMatrixPosition(e.matrixWorld), n.position.copy(tr), $o.copy(n.position), $o.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt($o), n.updateMatrixWorld(), i.makeTranslation(-tr.x, -tr.y, -tr.z), Nc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Nc) } }
Bc.prototype.isPointLightShadow = !0;
class zc extends Wt { constructor(e, t, n = 0, i = 1) { super(e, t);
        this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Bc }
    get power() { return this.intensity * 4 * Math.PI }
    set power(e) { this.intensity = e / (4 * Math.PI) }
    dispose() { this.shadow.dispose() }
    copy(e) { return super.copy(e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this } }
zc.prototype.isPointLight = !0;
class Oc extends Zo { constructor() { super(new Br(-5, 5, 5, -5, .5, 500)) } }
Oc.prototype.isDirectionalLightShadow = !0;
class Uc extends Wt { constructor(e, t) { super(e, t);
        this.type = "DirectionalLight", this.position.copy(He.DefaultUp), this.updateMatrix(), this.target = new He, this.shadow = new Oc }
    dispose() { this.shadow.dispose() }
    copy(e) { return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this } }
Uc.prototype.isDirectionalLight = !0;
class Hc extends Wt { constructor(e, t) { super(e, t);
        this.type = "AmbientLight" } }
Hc.prototype.isAmbientLight = !0;
class Gc extends Wt { constructor(e, t, n = 10, i = 10) { super(e, t);
        this.type = "RectAreaLight", this.width = n, this.height = i }
    get power() { return this.intensity * this.width * this.height * Math.PI }
    set power(e) { this.intensity = e / (this.width * this.height * Math.PI) }
    copy(e) { return super.copy(e), this.width = e.width, this.height = e.height, this }
    toJSON(e) { const t = super.toJSON(e); return t.object.width = this.width, t.object.height = this.height, t } }
Gc.prototype.isRectAreaLight = !0;
class kc { constructor() { this.coefficients = []; for (let e = 0; e < 9; e++) this.coefficients.push(new S) }
    set(e) { for (let t = 0; t < 9; t++) this.coefficients[t].copy(e[t]); return this }
    zero() { for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0); return this }
    getAt(e, t) { const n = e.x,
            i = e.y,
            r = e.z,
            s = this.coefficients; return t.copy(s[0]).multiplyScalar(.282095), t.addScaledVector(s[1], .488603 * i), t.addScaledVector(s[2], .488603 * r), t.addScaledVector(s[3], .488603 * n), t.addScaledVector(s[4], 1.092548 * (n * i)), t.addScaledVector(s[5], 1.092548 * (i * r)), t.addScaledVector(s[6], .315392 * (3 * r * r - 1)), t.addScaledVector(s[7], 1.092548 * (n * r)), t.addScaledVector(s[8], .546274 * (n * n - i * i)), t }
    getIrradianceAt(e, t) { const n = e.x,
            i = e.y,
            r = e.z,
            s = this.coefficients; return t.copy(s[0]).multiplyScalar(.886227), t.addScaledVector(s[1], 2 * .511664 * i), t.addScaledVector(s[2], 2 * .511664 * r), t.addScaledVector(s[3], 2 * .511664 * n), t.addScaledVector(s[4], 2 * .429043 * n * i), t.addScaledVector(s[5], 2 * .429043 * i * r), t.addScaledVector(s[6], .743125 * r * r - .247708), t.addScaledVector(s[7], 2 * .429043 * n * r), t.addScaledVector(s[8], .429043 * (n * n - i * i)), t }
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
kc.prototype.isSphericalHarmonics3 = !0;
class ws extends Wt { constructor(e = new kc, t = 1) { super(void 0, t);
        this.sh = e }
    copy(e) { return super.copy(e), this.sh.copy(e.sh), this }
    fromJSON(e) { return this.intensity = e.intensity, this.sh.fromArray(e.sh), this }
    toJSON(e) { const t = super.toJSON(e); return t.object.sh = this.sh.toArray(), t } }
ws.prototype.isLightProbe = !0;
class zg extends Ct { constructor(e) { super(e);
        this.textures = {} }
    load(e, t, n, i) { const r = this,
            s = new Si(r.manager);
        s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(e, function(a) { try { t(r.parse(JSON.parse(a))) } catch (l) { i ? i(l) : console.error(l), r.manager.itemError(e) } }, n, i) }
    parse(e) { const t = this.textures;

        function n(r) { return t[r] === void 0 && console.warn("THREE.MaterialLoader: Undefined texture", r), t[r] } const i = new Cg[e.type]; if (e.uuid !== void 0 && (i.uuid = e.uuid), e.name !== void 0 && (i.name = e.name), e.color !== void 0 && i.color !== void 0 && i.color.setHex(e.color), e.roughness !== void 0 && (i.roughness = e.roughness), e.metalness !== void 0 && (i.metalness = e.metalness), e.sheen !== void 0 && (i.sheen = e.sheen), e.sheenColor !== void 0 && (i.sheenColor = new he().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (i.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && i.emissive !== void 0 && i.emissive.setHex(e.emissive), e.specular !== void 0 && i.specular !== void 0 && i.specular.setHex(e.specular), e.specularIntensity !== void 0 && (i.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && i.specularColor !== void 0 && i.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (i.shininess = e.shininess), e.clearcoat !== void 0 && (i.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = e.clearcoatRoughness), e.transmission !== void 0 && (i.transmission = e.transmission), e.thickness !== void 0 && (i.thickness = e.thickness), e.attenuationDistance !== void 0 && (i.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && i.attenuationColor !== void 0 && i.attenuationColor.setHex(e.attenuationColor), e.fog !== void 0 && (i.fog = e.fog), e.flatShading !== void 0 && (i.flatShading = e.flatShading), e.blending !== void 0 && (i.blending = e.blending), e.combine !== void 0 && (i.combine = e.combine), e.side !== void 0 && (i.side = e.side), e.shadowSide !== void 0 && (i.shadowSide = e.shadowSide), e.opacity !== void 0 && (i.opacity = e.opacity), e.transparent !== void 0 && (i.transparent = e.transparent), e.alphaTest !== void 0 && (i.alphaTest = e.alphaTest), e.depthTest !== void 0 && (i.depthTest = e.depthTest), e.depthWrite !== void 0 && (i.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (i.colorWrite = e.colorWrite), e.stencilWrite !== void 0 && (i.stencilWrite = e.stencilWrite), e.stencilWriteMask !== void 0 && (i.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (i.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (i.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (i.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (i.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (i.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (i.stencilZPass = e.stencilZPass), e.wireframe !== void 0 && (i.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (i.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (i.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (i.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (i.rotation = e.rotation), e.linewidth !== 1 && (i.linewidth = e.linewidth), e.dashSize !== void 0 && (i.dashSize = e.dashSize), e.gapSize !== void 0 && (i.gapSize = e.gapSize), e.scale !== void 0 && (i.scale = e.scale), e.polygonOffset !== void 0 && (i.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (i.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (i.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (i.dithering = e.dithering), e.alphaToCoverage !== void 0 && (i.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (i.premultipliedAlpha = e.premultipliedAlpha), e.visible !== void 0 && (i.visible = e.visible), e.toneMapped !== void 0 && (i.toneMapped = e.toneMapped), e.userData !== void 0 && (i.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? i.vertexColors = e.vertexColors > 0 : i.vertexColors = e.vertexColors), e.uniforms !== void 0)
            for (const r in e.uniforms) { const s = e.uniforms[r]; switch (i.uniforms[r] = {}, s.type) {
                    case "t":
                        i.uniforms[r].value = n(s.value); break;
                    case "c":
                        i.uniforms[r].value = new he().setHex(s.value); break;
                    case "v2":
                        i.uniforms[r].value = new $().fromArray(s.value); break;
                    case "v3":
                        i.uniforms[r].value = new S().fromArray(s.value); break;
                    case "v4":
                        i.uniforms[r].value = new We().fromArray(s.value); break;
                    case "m3":
                        i.uniforms[r].value = new at().fromArray(s.value); break;
                    case "m4":
                        i.uniforms[r].value = new ge().fromArray(s.value); break;
                    default:
                        i.uniforms[r].value = s.value } }
        if (e.defines !== void 0 && (i.defines = e.defines), e.vertexShader !== void 0 && (i.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (i.fragmentShader = e.fragmentShader), e.extensions !== void 0)
            for (const r in e.extensions) i.extensions[r] = e.extensions[r]; if (e.shading !== void 0 && (i.flatShading = e.shading === 1), e.size !== void 0 && (i.size = e.size), e.sizeAttenuation !== void 0 && (i.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (i.map = n(e.map)), e.matcap !== void 0 && (i.matcap = n(e.matcap)), e.alphaMap !== void 0 && (i.alphaMap = n(e.alphaMap)), e.bumpMap !== void 0 && (i.bumpMap = n(e.bumpMap)), e.bumpScale !== void 0 && (i.bumpScale = e.bumpScale), e.normalMap !== void 0 && (i.normalMap = n(e.normalMap)), e.normalMapType !== void 0 && (i.normalMapType = e.normalMapType), e.normalScale !== void 0) { let r = e.normalScale;
            Array.isArray(r) === !1 && (r = [r, r]), i.normalScale = new $().fromArray(r) } return e.displacementMap !== void 0 && (i.displacementMap = n(e.displacementMap)), e.displacementScale !== void 0 && (i.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (i.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (i.roughnessMap = n(e.roughnessMap)), e.metalnessMap !== void 0 && (i.metalnessMap = n(e.metalnessMap)), e.emissiveMap !== void 0 && (i.emissiveMap = n(e.emissiveMap)), e.emissiveIntensity !== void 0 && (i.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (i.specularMap = n(e.specularMap)), e.specularIntensityMap !== void 0 && (i.specularIntensityMap = n(e.specularIntensityMap)), e.specularColorMap !== void 0 && (i.specularColorMap = n(e.specularColorMap)), e.envMap !== void 0 && (i.envMap = n(e.envMap)), e.envMapIntensity !== void 0 && (i.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (i.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (i.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (i.lightMap = n(e.lightMap)), e.lightMapIntensity !== void 0 && (i.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (i.aoMap = n(e.aoMap)), e.aoMapIntensity !== void 0 && (i.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (i.gradientMap = n(e.gradientMap)), e.clearcoatMap !== void 0 && (i.clearcoatMap = n(e.clearcoatMap)), e.clearcoatRoughnessMap !== void 0 && (i.clearcoatRoughnessMap = n(e.clearcoatRoughnessMap)), e.clearcoatNormalMap !== void 0 && (i.clearcoatNormalMap = n(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (i.clearcoatNormalScale = new $().fromArray(e.clearcoatNormalScale)), e.transmissionMap !== void 0 && (i.transmissionMap = n(e.transmissionMap)), e.thicknessMap !== void 0 && (i.thicknessMap = n(e.thicknessMap)), e.sheenColorMap !== void 0 && (i.sheenColorMap = n(e.sheenColorMap)), e.sheenRoughnessMap !== void 0 && (i.sheenRoughnessMap = n(e.sheenRoughnessMap)), i }
    setTextures(e) { return this.textures = e, this } }
class Ko { static decodeText(e) { if (typeof TextDecoder != "undefined") return new TextDecoder().decode(e); let t = ""; for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]); try { return decodeURIComponent(escape(t)) } catch { return t } }
    static extractUrlBase(e) { const t = e.lastIndexOf("/"); return t === -1 ? "./" : e.substr(0, t + 1) }
    static resolveURL(e, t) { return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e) } }
class Vc extends De { constructor() { super();
        this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0 }
    copy(e) { return super.copy(e), this.instanceCount = e.instanceCount, this }
    clone() { return new this.constructor().copy(this) }
    toJSON() { const e = super.toJSON(this); return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e } }
Vc.prototype.isInstancedBufferGeometry = !0;
class Og extends Ct { constructor(e) { super(e) }
    load(e, t, n, i) { const r = this,
            s = new Si(r.manager);
        s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(e, function(a) { try { t(r.parse(JSON.parse(a))) } catch (l) { i ? i(l) : console.error(l), r.manager.itemError(e) } }, n, i) }
    parse(e) { const t = {},
            n = {};

        function i(f, m) { if (t[m] !== void 0) return t[m]; const v = f.interleavedBuffers[m],
                g = r(f, v.buffer),
                p = qn(v.type, g),
                M = new fi(p, v.stride); return M.uuid = v.uuid, t[m] = M, M }

        function r(f, m) { if (n[m] !== void 0) return n[m]; const v = f.arrayBuffers[m],
                g = new Uint32Array(v).buffer; return n[m] = g, g } const s = e.isInstancedBufferGeometry ? new Vc : new De,
            a = e.data.index; if (a !== void 0) { const f = qn(a.type, a.array);
            s.setIndex(new et(f, 1)) } const l = e.data.attributes; for (const f in l) { const m = l[f]; let x; if (m.isInterleavedBufferAttribute) { const v = i(e.data, m.data);
                x = new In(v, m.itemSize, m.offset, m.normalized) } else { const v = qn(m.type, m.array),
                    g = m.isInstancedBufferAttribute ? yi : et;
                x = new g(v, m.itemSize, m.normalized) }
            m.name !== void 0 && (x.name = m.name), m.usage !== void 0 && x.setUsage(m.usage), m.updateRange !== void 0 && (x.updateRange.offset = m.updateRange.offset, x.updateRange.count = m.updateRange.count), s.setAttribute(f, x) } const c = e.data.morphAttributes; if (c)
            for (const f in c) { const m = c[f],
                    x = []; for (let v = 0, g = m.length; v < g; v++) { const p = m[v]; let M; if (p.isInterleavedBufferAttribute) { const y = i(e.data, p.data);
                        M = new In(y, p.itemSize, p.offset, p.normalized) } else { const y = qn(p.type, p.array);
                        M = new et(y, p.itemSize, p.normalized) }
                    p.name !== void 0 && (M.name = p.name), x.push(M) }
                s.morphAttributes[f] = x }
        e.data.morphTargetsRelative && (s.morphTargetsRelative = !0); const u = e.data.groups || e.data.drawcalls || e.data.offsets; if (u !== void 0)
            for (let f = 0, m = u.length; f !== m; ++f) { const x = u[f];
                s.addGroup(x.start, x.count, x.materialIndex) }
        const d = e.data.boundingSphere; if (d !== void 0) { const f = new S;
            d.center !== void 0 && f.fromArray(d.center), s.boundingSphere = new Rn(f, d.radius) } return e.name && (s.name = e.name), e.userData && (s.userData = e.userData), s } }
class px extends Ct { constructor(e) { super(e) }
    load(e, t, n, i) { const r = this,
            s = this.path === "" ? Ko.extractUrlBase(e) : this.path;
        this.resourcePath = this.resourcePath || s; const a = new Si(this.manager);
        a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(l) { let c = null; try { c = JSON.parse(l) } catch (u) { i !== void 0 && i(u), console.error("THREE:ObjectLoader: Can't parse " + e + ".", u.message); return } const h = c.metadata; if (h === void 0 || h.type === void 0 || h.type.toLowerCase() === "geometry") { console.error("THREE.ObjectLoader: Can't load " + e); return }
            r.parse(c, t) }, n, i) }
    async loadAsync(e, t) { const n = this,
            i = this.path === "" ? Ko.extractUrlBase(e) : this.path;
        this.resourcePath = this.resourcePath || i; const r = new Si(this.manager);
        r.setPath(this.path), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials); const s = await r.loadAsync(e, t),
            a = JSON.parse(s),
            l = a.metadata; if (l === void 0 || l.type === void 0 || l.type.toLowerCase() === "geometry") throw new Error("THREE.ObjectLoader: Can't load " + e); return await n.parseAsync(a) }
    parse(e, t) { const n = this.parseAnimations(e.animations),
            i = this.parseShapes(e.shapes),
            r = this.parseGeometries(e.geometries, i),
            s = this.parseImages(e.images, function() { t !== void 0 && t(c) }),
            a = this.parseTextures(e.textures, s),
            l = this.parseMaterials(e.materials, a),
            c = this.parseObject(e.object, r, l, a, n),
            h = this.parseSkeletons(e.skeletons, c); if (this.bindSkeletons(c, h), t !== void 0) { let u = !1; for (const d in s)
                if (s[d] instanceof HTMLImageElement) { u = !0; break }
            u === !1 && t(c) } return c }
    async parseAsync(e) { const t = this.parseAnimations(e.animations),
            n = this.parseShapes(e.shapes),
            i = this.parseGeometries(e.geometries, n),
            r = await this.parseImagesAsync(e.images),
            s = this.parseTextures(e.textures, r),
            a = this.parseMaterials(e.materials, s),
            l = this.parseObject(e.object, i, a, s, t),
            c = this.parseSkeletons(e.skeletons, l); return this.bindSkeletons(l, c), l }
    parseShapes(e) { const t = {}; if (e !== void 0)
            for (let n = 0, i = e.length; n < i; n++) { const r = new Qt().fromJSON(e[n]);
                t[r.uuid] = r }
        return t }
    parseSkeletons(e, t) { const n = {},
            i = {}; if (t.traverse(function(r) { r.isBone && (i[r.uuid] = r) }), e !== void 0)
            for (let r = 0, s = e.length; r < s; r++) { const a = new Po().fromJSON(e[r], i);
                n[a.uuid] = a }
        return n }
    parseGeometries(e, t) { const n = {}; if (e !== void 0) { const i = new Og; for (let r = 0, s = e.length; r < s; r++) { let a; const l = e[r]; switch (l.type) {
                    case "BufferGeometry":
                    case "InstancedBufferGeometry":
                        a = i.parse(l); break;
                    case "Geometry":
                        console.error("THREE.ObjectLoader: The legacy Geometry type is no longer supported."); break;
                    default:
                        l.type in xc ? a = xc[l.type].fromJSON(l, t) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`) }
                a.uuid = l.uuid, l.name !== void 0 && (a.name = l.name), a.isBufferGeometry === !0 && l.userData !== void 0 && (a.userData = l.userData), n[l.uuid] = a } } return n }
    parseMaterials(e, t) { const n = {},
            i = {}; if (e !== void 0) { const r = new zg;
            r.setTextures(t); for (let s = 0, a = e.length; s < a; s++) { const l = e[s]; if (l.type === "MultiMaterial") { const c = []; for (let h = 0; h < l.materials.length; h++) { const u = l.materials[h];
                        n[u.uuid] === void 0 && (n[u.uuid] = r.parse(u)), c.push(n[u.uuid]) }
                    i[l.uuid] = c } else n[l.uuid] === void 0 && (n[l.uuid] = r.parse(l)), i[l.uuid] = n[l.uuid] } } return i }
    parseAnimations(e) { const t = {}; if (e !== void 0)
            for (let n = 0; n < e.length; n++) { const i = e[n],
                    r = Yo.parse(i);
                t[r.uuid] = r }
        return t }
    parseImages(e, t) { const n = this,
            i = {}; let r;

        function s(l) { return n.manager.itemStart(l), r.load(l, function() { n.manager.itemEnd(l) }, void 0, function() { n.manager.itemError(l), n.manager.itemEnd(l) }) }

        function a(l) { if (typeof l == "string") { const c = l,
                    h = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c) ? c : n.resourcePath + c; return s(h) } else return l.data ? { data: qn(l.type, l.data), width: l.width, height: l.height } : null } if (e !== void 0 && e.length > 0) { const l = new Cc(t);
            r = new bs(l), r.setCrossOrigin(this.crossOrigin); for (let c = 0, h = e.length; c < h; c++) { const u = e[c],
                    d = u.url; if (Array.isArray(d)) { i[u.uuid] = []; for (let f = 0, m = d.length; f < m; f++) { const x = d[f],
                            v = a(x);
                        v !== null && (v instanceof HTMLImageElement ? i[u.uuid].push(v) : i[u.uuid].push(new qi(v.data, v.width, v.height))) } } else { const f = a(u.url);
                    f !== null && (i[u.uuid] = f) } } } return i }
    async parseImagesAsync(e) { const t = this,
            n = {}; let i;
        async function r(s) { if (typeof s == "string") { const a = s,
                    l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(a) ? a : t.resourcePath + a; return await i.loadAsync(l) } else return s.data ? { data: qn(s.type, s.data), width: s.width, height: s.height } : null } if (e !== void 0 && e.length > 0) { i = new bs(this.manager), i.setCrossOrigin(this.crossOrigin); for (let s = 0, a = e.length; s < a; s++) { const l = e[s],
                    c = l.url; if (Array.isArray(c)) { n[l.uuid] = []; for (let h = 0, u = c.length; h < u; h++) { const d = c[h],
                            f = await r(d);
                        f !== null && (f instanceof HTMLImageElement ? n[l.uuid].push(f) : n[l.uuid].push(new qi(f.data, f.width, f.height))) } } else { const h = await r(l.url);
                    h !== null && (n[l.uuid] = h) } } } return n }
    parseTextures(e, t) {
        function n(r, s) { return typeof r == "number" ? r : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", r), s[r]) } const i = {}; if (e !== void 0)
            for (let r = 0, s = e.length; r < s; r++) { const a = e[r];
                a.image === void 0 && console.warn('THREE.ObjectLoader: No "image" specified for', a.uuid), t[a.image] === void 0 && console.warn("THREE.ObjectLoader: Undefined image", a.image); let l; const c = t[a.image];
                Array.isArray(c) ? (l = new zi(c), c.length === 6 && (l.needsUpdate = !0)) : (c && c.data ? l = new qi(c.data, c.width, c.height) : l = new ot(c), c && (l.needsUpdate = !0)), l.uuid = a.uuid, a.name !== void 0 && (l.name = a.name), a.mapping !== void 0 && (l.mapping = n(a.mapping, Ug)), a.offset !== void 0 && l.offset.fromArray(a.offset), a.repeat !== void 0 && l.repeat.fromArray(a.repeat), a.center !== void 0 && l.center.fromArray(a.center), a.rotation !== void 0 && (l.rotation = a.rotation), a.wrap !== void 0 && (l.wrapS = n(a.wrap[0], Wc), l.wrapT = n(a.wrap[1], Wc)), a.format !== void 0 && (l.format = a.format), a.type !== void 0 && (l.type = a.type), a.encoding !== void 0 && (l.encoding = a.encoding), a.minFilter !== void 0 && (l.minFilter = n(a.minFilter, qc)), a.magFilter !== void 0 && (l.magFilter = n(a.magFilter, qc)), a.anisotropy !== void 0 && (l.anisotropy = a.anisotropy), a.flipY !== void 0 && (l.flipY = a.flipY), a.premultiplyAlpha !== void 0 && (l.premultiplyAlpha = a.premultiplyAlpha), a.unpackAlignment !== void 0 && (l.unpackAlignment = a.unpackAlignment), a.userData !== void 0 && (l.userData = a.userData), i[a.uuid] = l }
        return i }
    parseObject(e, t, n, i, r) { let s;

        function a(d) { return t[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined geometry", d), t[d] }

        function l(d) { if (d !== void 0) { if (Array.isArray(d)) { const f = []; for (let m = 0, x = d.length; m < x; m++) { const v = d[m];
                        n[v] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", v), f.push(n[v]) } return f } return n[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", d), n[d] } }

        function c(d) { return i[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined texture", d), i[d] } let h, u; switch (e.type) {
            case "Scene":
                s = new Eo, e.background !== void 0 && (Number.isInteger(e.background) ? s.background = new he(e.background) : s.background = c(e.background)), e.environment !== void 0 && (s.environment = c(e.environment)), e.fog !== void 0 && (e.fog.type === "Fog" ? s.fog = new Gr(e.fog.color, e.fog.near, e.fog.far) : e.fog.type === "FogExp2" && (s.fog = new Hr(e.fog.color, e.fog.density))); break;
            case "PerspectiveCamera":
                s = new yt(e.fov, e.aspect, e.near, e.far), e.focus !== void 0 && (s.focus = e.focus), e.zoom !== void 0 && (s.zoom = e.zoom), e.filmGauge !== void 0 && (s.filmGauge = e.filmGauge), e.filmOffset !== void 0 && (s.filmOffset = e.filmOffset), e.view !== void 0 && (s.view = Object.assign({}, e.view)); break;
            case "OrthographicCamera":
                s = new Br(e.left, e.right, e.top, e.bottom, e.near, e.far), e.zoom !== void 0 && (s.zoom = e.zoom), e.view !== void 0 && (s.view = Object.assign({}, e.view)); break;
            case "AmbientLight":
                s = new Hc(e.color, e.intensity); break;
            case "DirectionalLight":
                s = new Uc(e.color, e.intensity); break;
            case "PointLight":
                s = new zc(e.color, e.intensity, e.distance, e.decay); break;
            case "RectAreaLight":
                s = new Gc(e.color, e.intensity, e.width, e.height); break;
            case "SpotLight":
                s = new Fc(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay); break;
            case "HemisphereLight":
                s = new Rc(e.color, e.groundColor, e.intensity); break;
            case "LightProbe":
                s = new ws().fromJSON(e); break;
            case "SkinnedMesh":
                h = a(e.geometry), u = l(e.material), s = new Ro(h, u), e.bindMode !== void 0 && (s.bindMode = e.bindMode), e.bindMatrix !== void 0 && s.bindMatrix.fromArray(e.bindMatrix), e.skeleton !== void 0 && (s.skeleton = e.skeleton); break;
            case "Mesh":
                h = a(e.geometry), u = l(e.material), s = new pt(h, u); break;
            case "InstancedMesh":
                h = a(e.geometry), u = l(e.material); const d = e.count,
                    f = e.instanceMatrix,
                    m = e.instanceColor;
                s = new $l(h, u, d), s.instanceMatrix = new yi(new Float32Array(f.array), 16), m !== void 0 && (s.instanceColor = new yi(new Float32Array(m.array), m.itemSize)); break;
            case "LOD":
                s = new Wm; break;
            case "Line":
                s = new Yr(a(e.geometry), l(e.material)); break;
            case "LineLoop":
                s = new nc(a(e.geometry), l(e.material)); break;
            case "LineSegments":
                s = new Zr(a(e.geometry), l(e.material)); break;
            case "PointCloud":
            case "Points":
                s = new rc(a(e.geometry), l(e.material)); break;
            case "Sprite":
                s = new Gl(l(e.material)); break;
            case "Group":
                s = new Dn; break;
            case "Bone":
                s = new Lo; break;
            default:
                s = new He } if (s.uuid = e.uuid, e.name !== void 0 && (s.name = e.name), e.matrix !== void 0 ? (s.matrix.fromArray(e.matrix), e.matrixAutoUpdate !== void 0 && (s.matrixAutoUpdate = e.matrixAutoUpdate), s.matrixAutoUpdate && s.matrix.decompose(s.position, s.quaternion, s.scale)) : (e.position !== void 0 && s.position.fromArray(e.position), e.rotation !== void 0 && s.rotation.fromArray(e.rotation), e.quaternion !== void 0 && s.quaternion.fromArray(e.quaternion), e.scale !== void 0 && s.scale.fromArray(e.scale)), e.castShadow !== void 0 && (s.castShadow = e.castShadow), e.receiveShadow !== void 0 && (s.receiveShadow = e.receiveShadow), e.shadow && (e.shadow.bias !== void 0 && (s.shadow.bias = e.shadow.bias), e.shadow.normalBias !== void 0 && (s.shadow.normalBias = e.shadow.normalBias), e.shadow.radius !== void 0 && (s.shadow.radius = e.shadow.radius), e.shadow.mapSize !== void 0 && s.shadow.mapSize.fromArray(e.shadow.mapSize), e.shadow.camera !== void 0 && (s.shadow.camera = this.parseObject(e.shadow.camera))), e.visible !== void 0 && (s.visible = e.visible), e.frustumCulled !== void 0 && (s.frustumCulled = e.frustumCulled), e.renderOrder !== void 0 && (s.renderOrder = e.renderOrder), e.userData !== void 0 && (s.userData = e.userData), e.layers !== void 0 && (s.layers.mask = e.layers), e.children !== void 0) { const d = e.children; for (let f = 0; f < d.length; f++) s.add(this.parseObject(d[f], t, n, i, r)) } if (e.animations !== void 0) { const d = e.animations; for (let f = 0; f < d.length; f++) { const m = d[f];
                s.animations.push(r[m]) } } if (e.type === "LOD") { e.autoUpdate !== void 0 && (s.autoUpdate = e.autoUpdate); const d = e.levels; for (let f = 0; f < d.length; f++) { const m = d[f],
                    x = s.getObjectByProperty("uuid", m.object);
                x !== void 0 && s.addLevel(x, m.distance) } } return s }
    bindSkeletons(e, t) { Object.keys(t).length !== 0 && e.traverse(function(n) { if (n.isSkinnedMesh === !0 && n.skeleton !== void 0) { const i = t[n.skeleton];
                i === void 0 ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", n.skeleton) : n.bind(i, n.bindMatrix) } }) }
    setTexturePath(e) { return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(e) } }
const Ug = { UVMapping: Ds, CubeReflectionMapping: zn, CubeRefractionMapping: On, EquirectangularReflectionMapping: sr, EquirectangularRefractionMapping: or, CubeUVReflectionMapping: Ri, CubeUVRefractionMapping: ar },
    Wc = { RepeatWrapping: lr, ClampToEdgeWrapping: _t, MirroredRepeatWrapping: cr },
    qc = { NearestFilter: it, NearestMipmapNearestFilter: Is, NearestMipmapLinearFilter: Fs, LinearFilter: ct, LinearMipmapNearestFilter: pa, LinearMipmapLinearFilter: Li };
class Hg extends Ct { constructor(e) { super(e);
        typeof createImageBitmap == "undefined" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch == "undefined" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" } }
    setOptions(e) { return this.options = e, this }
    load(e, t, n, i) { e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const r = this,
            s = wi.get(e); if (s !== void 0) return r.manager.itemStart(e), setTimeout(function() { t && t(s), r.manager.itemEnd(e) }, 0), s; const a = {};
        a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader, fetch(e, a).then(function(l) { return l.blob() }).then(function(l) { return createImageBitmap(l, Object.assign(r.options, { colorSpaceConversion: "none" })) }).then(function(l) { wi.add(e, l), t && t(l), r.manager.itemEnd(e) }).catch(function(l) { i && i(l), r.manager.itemError(e), r.manager.itemEnd(e) }), r.manager.itemStart(e) } }
Hg.prototype.isImageBitmapLoader = !0;
let Ss;
const Gg = { getContext: function() { return Ss === void 0 && (Ss = new(window.AudioContext || window.webkitAudioContext)), Ss }, setContext: function(o) { Ss = o } };
class kg extends Ct { constructor(e) { super(e) }
    load(e, t, n, i) { const r = this,
            s = new Si(this.manager);
        s.setResponseType("arraybuffer"), s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, function(a) { try { const l = a.slice(0);
                Gg.getContext().decodeAudioData(l, function(h) { t(h) }) } catch (l) { i ? i(l) : console.error(l), r.manager.itemError(e) } }, n, i) } }
class Vg extends ws { constructor(e, t, n = 1) { super(void 0, n); const i = new he().set(e),
            r = new he().set(t),
            s = new S(i.r, i.g, i.b),
            a = new S(r.r, r.g, r.b),
            l = Math.sqrt(Math.PI),
            c = l * Math.sqrt(.75);
        this.sh.coefficients[0].copy(s).add(a).multiplyScalar(l), this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(c) } }
Vg.prototype.isHemisphereLightProbe = !0;
class Wg extends ws { constructor(e, t = 1) { super(void 0, t); const n = new he().set(e);
        this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI)) } }
Wg.prototype.isAmbientLightProbe = !0;
class qg extends He { constructor(e) { super();
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
class Xg { constructor(e, t, n) { this.binding = e, this.valueSize = n; let i, r, s; switch (t) {
            case "quaternion":
                i = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5; break;
            case "string":
            case "bool":
                i = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5); break;
            default:
                i = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5) }
        this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0 }
    accumulate(e, t) { const n = this.buffer,
            i = this.valueSize,
            r = e * i + i; let s = this.cumulativeWeight; if (s === 0) { for (let a = 0; a !== i; ++a) n[r + a] = n[a];
            s = t } else { s += t; const a = t / s;
            this._mixBufferRegion(n, r, 0, a, i) }
        this.cumulativeWeight = s }
    accumulateAdditive(e) { const t = this.buffer,
            n = this.valueSize,
            i = n * this._addIndex;
        this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e }
    apply(e) { const t = this.valueSize,
            n = this.buffer,
            i = e * t + t,
            r = this.cumulativeWeight,
            s = this.cumulativeWeightAdditive,
            a = this.binding; if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) { const l = t * this._origIndex;
            this._mixBufferRegion(n, i, l, 1 - r, t) }
        s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t); for (let l = t, c = t + t; l !== c; ++l)
            if (n[l] !== n[l + t]) { a.setValue(n, i); break } }
    saveOriginalState() { const e = this.binding,
            t = this.buffer,
            n = this.valueSize,
            i = n * this._origIndex;
        e.getValue(t, i); for (let r = n, s = i; r !== s; ++r) t[r] = t[i + r % n];
        this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0 }
    restoreOriginalState() { const e = this.valueSize * 3;
        this.binding.setValue(this.buffer, e) }
    _setAdditiveIdentityNumeric() { const e = this._addIndex * this.valueSize,
            t = e + this.valueSize; for (let n = e; n < t; n++) this.buffer[n] = 0 }
    _setAdditiveIdentityQuaternion() { this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1 }
    _setAdditiveIdentityOther() { const e = this._origIndex * this.valueSize,
            t = this._addIndex * this.valueSize; for (let n = 0; n < this.valueSize; n++) this.buffer[t + n] = this.buffer[e + n] }
    _select(e, t, n, i, r) { if (i >= .5)
            for (let s = 0; s !== r; ++s) e[t + s] = e[n + s] }
    _slerp(e, t, n, i) { Mt.slerpFlat(e, t, e, t, e, n, i) }
    _slerpAdditive(e, t, n, i, r) { const s = this._workIndex * r;
        Mt.multiplyQuaternionsFlat(e, s, e, t, e, n), Mt.slerpFlat(e, t, e, t, e, s, i) }
    _lerp(e, t, n, i, r) { const s = 1 - i; for (let a = 0; a !== r; ++a) { const l = t + a;
            e[l] = e[l] * s + e[n + a] * i } }
    _lerpAdditive(e, t, n, i, r) { for (let s = 0; s !== r; ++s) { const a = t + s;
            e[a] = e[a] + e[n + s] * i } } }
const Qo = "\\[\\]\\.:\\/",
    Jg = new RegExp("[" + Qo + "]", "g"),
    jo = "[^" + Qo + "]",
    Yg = "[^" + Qo.replace("\\.", "") + "]",
    Zg = /((?:WC+[\/:])*)/.source.replace("WC", jo),
    $g = /(WCOD+)?/.source.replace("WCOD", Yg),
    Kg = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", jo),
    Qg = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", jo),
    jg = new RegExp("^" + Zg + $g + Kg + Qg + "$"),
    ex = ["material", "materials", "bones"];
class tx { constructor(e, t, n) { const i = n || ke.parseTrackName(t);
        this._targetGroup = e, this._bindings = e.subscribe_(t, i) }
    getValue(e, t) { this.bind(); const n = this._targetGroup.nCachedObjects_,
            i = this._bindings[n];
        i !== void 0 && i.getValue(e, t) }
    setValue(e, t) { const n = this._bindings; for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(e, t) }
    bind() { const e = this._bindings; for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind() }
    unbind() { const e = this._bindings; for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind() } }
class ke { constructor(e, t, n) { this.path = t, this.parsedPath = n || ke.parseTrackName(t), this.node = ke.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound }
    static create(e, t, n) { return e && e.isAnimationObjectGroup ? new ke.Composite(e, t, n) : new ke(e, t, n) }
    static sanitizeNodeName(e) { return e.replace(/\s/g, "_").replace(Jg, "") }
    static parseTrackName(e) { const t = jg.exec(e); if (!t) throw new Error("PropertyBinding: Cannot parse trackName: " + e); const n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] },
            i = n.nodeName && n.nodeName.lastIndexOf("."); if (i !== void 0 && i !== -1) { const r = n.nodeName.substring(i + 1);
            ex.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r) } if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e); return n }
    static findNode(e, t) { if (!t || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e; if (e.skeleton) { const n = e.skeleton.getBoneByName(t); if (n !== void 0) return n } if (e.children) { const n = function(r) { for (let s = 0; s < r.length; s++) { const a = r[s]; if (a.name === t || a.uuid === t) return a; const l = n(a.children); if (l) return l } return null },
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
            i = t.propertyName; let r = t.propertyIndex; if (e || (e = ke.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) { console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found."); return } if (n) { let c = t.objectIndex; switch (n) {
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
                e = e[c] } } const s = e[i]; if (s === void 0) { const c = t.nodeName;
            console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e); return } let a = this.Versioning.None;
        this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate); let l = this.BindingType.Direct; if (r !== void 0) { if (i === "morphTargetInfluences") { if (!e.geometry) { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this); return } if (e.geometry.isBufferGeometry) { if (!e.geometry.morphAttributes) { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this); return }
                    e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]) } else { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this); return } }
            l = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r } else s.fromArray !== void 0 && s.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (l = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
        this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a] }
    unbind() { this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound } }
ke.Composite = tx;
ke.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
ke.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
ke.prototype.GetterByBindingType = [ke.prototype._getValue_direct, ke.prototype._getValue_array, ke.prototype._getValue_arrayElement, ke.prototype._getValue_toArray];
ke.prototype.SetterByBindingTypeAndVersioning = [
    [ke.prototype._setValue_direct, ke.prototype._setValue_direct_setNeedsUpdate, ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],
    [ke.prototype._setValue_array, ke.prototype._setValue_array_setNeedsUpdate, ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],
    [ke.prototype._setValue_arrayElement, ke.prototype._setValue_arrayElement_setNeedsUpdate, ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],
    [ke.prototype._setValue_fromArray, ke.prototype._setValue_fromArray_setNeedsUpdate, ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]
];
class nx { constructor(e, t, n = null, i = t.blendMode) { this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i; const r = t.tracks,
            s = r.length,
            a = new Array(s),
            l = { endingStart: kn, endingEnd: kn }; for (let c = 0; c !== s; ++c) { const h = r[c].createInterpolant(null);
            a[c] = h, h.settings = l }
        this._interpolantSettings = l, this._interpolants = a, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Zh, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0 }
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
                s = r / i,
                a = i / r;
            e.warp(1, s, t), this.warp(a, 1, t) } return this }
    crossFadeTo(e, t, n) { return e.crossFadeFrom(this, t, n) }
    stopFading() { const e = this._weightInterpolant; return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this }
    setEffectiveTimeScale(e) { return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping() }
    getEffectiveTimeScale() { return this._effectiveTimeScale }
    setDuration(e) { return this.timeScale = this._clip.duration / e, this.stopWarping() }
    syncWith(e) { return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping() }
    halt(e) { return this.warp(this._effectiveTimeScale, 0, e) }
    warp(e, t, n) { const i = this._mixer,
            r = i.time,
            s = this.timeScale; let a = this._timeScaleInterpolant;
        a === null && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a); const l = a.parameterPositions,
            c = a.sampleValues; return l[0] = r, l[1] = r + n, c[0] = e / s, c[1] = t / s, this }
    stopWarping() { const e = this._timeScaleInterpolant; return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this }
    getMixer() { return this._mixer }
    getClip() { return this._clip }
    getRoot() { return this._localRoot || this._mixer._root }
    _update(e, t, n, i) { if (!this.enabled) { this._updateWeight(e); return } const r = this._startTime; if (r !== null) { const l = (e - r) * n; if (l < 0 || n === 0) return;
            this._startTime = null, t = n * l }
        t *= this._updateTimeScale(e); const s = this._updateTime(t),
            a = this._updateWeight(e); if (a > 0) { const l = this._interpolants,
                c = this._propertyBindings; switch (this.blendMode) {
                case Ba:
                    for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(s), c[h].accumulateAdditive(a); break;
                case Hs:
                default:
                    for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(s), c[h].accumulate(i, a) } } }
    _updateWeight(e) { let t = 0; if (this.enabled) { t = this.weight; const n = this._weightInterpolant; if (n !== null) { const i = n.evaluate(e)[0];
                t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1)) } } return this._effectiveWeight = t, t }
    _updateTimeScale(e) { let t = 0; if (!this.paused) { t = this.timeScale; const n = this._timeScaleInterpolant;
            n !== null && (t *= n.evaluate(e)[0], e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t)) } return this._effectiveTimeScale = t, t }
    _updateTime(e) { const t = this._clip.duration,
            n = this.loop; let i = this.time + e,
            r = this._loopCount; const s = n === $h; if (e === 0) return r === -1 ? i : s && (r & 1) == 1 ? t - i : i; if (n === Yh) { r === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
            e: { if (i >= t) i = t;
                else if (i < 0) i = 0;
                else { this.time = i; break e }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e < 0 ? -1 : 1 }) } } else { if (r === -1 && (e >= 0 ? (r = 0, this._setEndings(!0, this.repetitions === 0, s)) : this._setEndings(this.repetitions === 0, !0, s)), i >= t || i < 0) { const a = Math.floor(i / t);
                i -= t * a, r += Math.abs(a); const l = this.repetitions - r; if (l <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e > 0 ? 1 : -1 });
                else { if (l === 1) { const c = e < 0;
                        this._setEndings(c, !c, s) } else this._setEndings(!1, !1, s);
                    this._loopCount = r, this.time = i, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: a }) } } else this.time = i; if (s && (r & 1) == 1) return t - i } return i }
    _setEndings(e, t, n) { const i = this._interpolantSettings;
        n ? (i.endingStart = Vn, i.endingEnd = Vn) : (e ? i.endingStart = this.zeroSlopeAtStart ? Vn : kn : i.endingStart = fr, t ? i.endingEnd = this.zeroSlopeAtEnd ? Vn : kn : i.endingEnd = fr) }
    _scheduleFading(e, t, n) { const i = this._mixer,
            r = i.time; let s = this._weightInterpolant;
        s === null && (s = i._lendControlInterpolant(), this._weightInterpolant = s); const a = s.parameterPositions,
            l = s.sampleValues; return a[0] = r, l[0] = t, a[1] = r + e, l[1] = n, this } }
class ix extends Sn { constructor(e) { super();
        this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1 }
    _bindAction(e, t) { const n = e._localRoot || this._root,
            i = e._clip.tracks,
            r = i.length,
            s = e._propertyBindings,
            a = e._interpolants,
            l = n.uuid,
            c = this._bindingsByRootAndName; let h = c[l];
        h === void 0 && (h = {}, c[l] = h); for (let u = 0; u !== r; ++u) { const d = i[u],
                f = d.name; let m = h[f]; if (m !== void 0) ++m.referenceCount, s[u] = m;
            else { if (m = s[u], m !== void 0) { m._cacheIndex === null && (++m.referenceCount, this._addInactiveBinding(m, l, f)); continue } const x = t && t._propertyBindings[u].binding.parsedPath;
                m = new Xg(ke.create(n, f, x), d.ValueTypeName, d.getValueSize()), ++m.referenceCount, this._addInactiveBinding(m, l, f), s[u] = m }
            a[u].resultBuffer = m.buffer } }
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
            r = this._actionsByClip; let s = r[t]; if (s === void 0) s = { knownActions: [e], actionByRoot: {} }, e._byClipCacheIndex = 0, r[t] = s;
        else { const a = s.knownActions;
            e._byClipCacheIndex = a.length, a.push(e) }
        e._cacheIndex = i.length, i.push(e), s.actionByRoot[n] = e }
    _removeInactiveAction(e) { const t = this._actions,
            n = t[t.length - 1],
            i = e._cacheIndex;
        n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null; const r = e._clip.uuid,
            s = this._actionsByClip,
            a = s[r],
            l = a.knownActions,
            c = l[l.length - 1],
            h = e._byClipCacheIndex;
        c._byClipCacheIndex = h, l[h] = c, l.pop(), e._byClipCacheIndex = null; const u = a.actionByRoot,
            d = (e._localRoot || this._root).uuid;
        delete u[d], l.length === 0 && delete s[r], this._removeInactiveBindingsForAction(e) }
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
            r = this._bindings; let s = i[t];
        s === void 0 && (s = {}, i[t] = s), s[n] = e, e._cacheIndex = r.length, r.push(e) }
    _removeInactiveBinding(e) { const t = this._bindings,
            n = e.binding,
            i = n.rootNode.uuid,
            r = n.path,
            s = this._bindingsByRootAndName,
            a = s[i],
            l = t[t.length - 1],
            c = e._cacheIndex;
        l._cacheIndex = c, t[c] = l, t.pop(), delete a[r], Object.keys(a).length === 0 && delete s[i] }
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
            t = this._nActiveControlInterpolants++; let n = e[t]; return n === void 0 && (n = new Ec(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = t, e[t] = n), n }
    _takeBackControlInterpolant(e) { const t = this._controlInterpolants,
            n = e.__cacheIndex,
            i = --this._nActiveControlInterpolants,
            r = t[i];
        e.__cacheIndex = i, t[i] = e, r.__cacheIndex = n, t[n] = r }
    clipAction(e, t, n) { const i = t || this._root,
            r = i.uuid; let s = typeof e == "string" ? Yo.findByName(i, e) : e; const a = s !== null ? s.uuid : e,
            l = this._actionsByClip[a]; let c = null; if (n === void 0 && (s !== null ? n = s.blendMode : n = Hs), l !== void 0) { const u = l.actionByRoot[r]; if (u !== void 0 && u.blendMode === n) return u;
            c = l.knownActions[0], s === null && (s = c._clip) } if (s === null) return null; const h = new nx(this, s, t, n); return this._bindAction(h, c), this._addInactiveAction(h, a, r), h }
    existingAction(e, t) { const n = t || this._root,
            i = n.uuid,
            r = typeof e == "string" ? Yo.findByName(n, e) : e,
            s = r ? r.uuid : e,
            a = this._actionsByClip[s]; return a !== void 0 && a.actionByRoot[i] || null }
    stopAllAction() { const e = this._actions,
            t = this._nActiveActions; for (let n = t - 1; n >= 0; --n) e[n].stop(); return this }
    update(e) { e *= this.timeScale; const t = this._actions,
            n = this._nActiveActions,
            i = this.time += e,
            r = Math.sign(e),
            s = this._accuIndex ^= 1; for (let c = 0; c !== n; ++c) t[c]._update(i, e, r, s); const a = this._bindings,
            l = this._nActiveBindings; for (let c = 0; c !== l; ++c) a[c].apply(s); return this }
    setTime(e) { this.time = 0; for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0; return this.update(e) }
    getRoot() { return this._root }
    uncacheClip(e) { const t = this._actions,
            n = e.uuid,
            i = this._actionsByClip,
            r = i[n]; if (r !== void 0) { const s = r.knownActions; for (let a = 0, l = s.length; a !== l; ++a) { const c = s[a];
                this._deactivateAction(c); const h = c._cacheIndex,
                    u = t[t.length - 1];
                c._cacheIndex = null, c._byClipCacheIndex = null, u._cacheIndex = h, t[h] = u, t.pop(), this._removeInactiveBindingsForAction(c) }
            delete i[n] } }
    uncacheRoot(e) { const t = e.uuid,
            n = this._actionsByClip; for (const s in n) { const a = n[s].actionByRoot,
                l = a[t];
            l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l)) } const i = this._bindingsByRootAndName,
            r = i[t]; if (r !== void 0)
            for (const s in r) { const a = r[s];
                a.restoreOriginalState(), this._removeInactiveBinding(a) } }
    uncacheAction(e, t) { const n = this.existingAction(e, t);
        n !== null && (this._deactivateAction(n), this._removeInactiveAction(n)) } }
ix.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
class rx extends fi { constructor(e, t, n = 1) { super(e, t);
        this.meshPerAttribute = n }
    copy(e) { return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this }
    clone(e) { const t = super.clone(e); return t.meshPerAttribute = this.meshPerAttribute, t }
    toJSON(e) { const t = super.toJSON(e); return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t } }
rx.prototype.isInstancedInterleavedBuffer = !0;
const Xc = new S,
    Ts = new S;
class Jc { constructor(e = new S, t = new S) { this.start = e, this.end = t }
    set(e, t) { return this.start.copy(e), this.end.copy(t), this }
    copy(e) { return this.start.copy(e.start), this.end.copy(e.end), this }
    getCenter(e) { return e.addVectors(this.start, this.end).multiplyScalar(.5) }
    delta(e) { return e.subVectors(this.end, this.start) }
    distanceSq() { return this.start.distanceToSquared(this.end) }
    distance() { return this.start.distanceTo(this.end) }
    at(e, t) { return this.delta(t).multiplyScalar(e).add(this.start) }
    closestPointToPointParameter(e, t) { Xc.subVectors(e, this.start), Ts.subVectors(this.end, this.start); const n = Ts.dot(Ts); let r = Ts.dot(Xc) / n; return t && (r = xt(r, 0, 1)), r }
    closestPointToPoint(e, t, n) { const i = this.closestPointToPointParameter(e, t); return this.delta(n).multiplyScalar(i).add(this.start) }
    applyMatrix4(e) { return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this }
    equals(e) { return e.start.equals(this.start) && e.end.equals(this.end) }
    clone() { return new this.constructor().copy(this) } }
const Mn = new S,
    Es = new ge,
    ea = new ge;
class sx extends Zr { constructor(e) { const t = Yc(e),
            n = new De,
            i = [],
            r = [],
            s = new he(0, 0, 1),
            a = new he(0, 1, 0); for (let c = 0; c < t.length; c++) { const h = t[c];
            h.parent && h.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(a.r, a.g, a.b)) }
        n.setAttribute("position", new _e(i, 3)), n.setAttribute("color", new _e(r, 3)); const l = new vi({ vertexColors: !0, depthTest: !1, depthWrite: !1, toneMapped: !1, transparent: !0 });
        super(n, l);
        this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1 }
    updateMatrixWorld(e) { const t = this.bones,
            n = this.geometry,
            i = n.getAttribute("position");
        ea.copy(this.root.matrixWorld).invert(); for (let r = 0, s = 0; r < t.length; r++) { const a = t[r];
            a.parent && a.parent.isBone && (Es.multiplyMatrices(ea, a.matrixWorld), Mn.setFromMatrixPosition(Es), i.setXYZ(s, Mn.x, Mn.y, Mn.z), Es.multiplyMatrices(ea, a.parent.matrixWorld), Mn.setFromMatrixPosition(Es), i.setXYZ(s + 1, Mn.x, Mn.y, Mn.z), s += 2) }
        n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(e) } }

function Yc(o) { const e = [];
    o && o.isBone && e.push(o); for (let t = 0; t < o.children.length; t++) e.push.apply(e, Yc(o.children[t])); return e }
class ox extends Zr { constructor(e = 10, t = 10, n = 4473924, i = 8947848) { n = new he(n), i = new he(i); const r = t / 2,
            s = e / t,
            a = e / 2,
            l = [],
            c = []; for (let d = 0, f = 0, m = -a; d <= t; d++, m += s) { l.push(-a, 0, m, a, 0, m), l.push(m, 0, -a, m, 0, a); const x = d === r ? n : i;
            x.toArray(c, f), f += 3, x.toArray(c, f), f += 3, x.toArray(c, f), f += 3, x.toArray(c, f), f += 3 } const h = new De;
        h.setAttribute("position", new _e(l, 3)), h.setAttribute("color", new _e(c, 3)); const u = new vi({ vertexColors: !0, toneMapped: !1 });
        super(h, u);
        this.type = "GridHelper" } }
class ax { constructor() { this.type = "ShapePath", this.color = new he, this.subPaths = [], this.currentPath = null }
    moveTo(e, t) { return this.currentPath = new as, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this }
    lineTo(e, t) { return this.currentPath.lineTo(e, t), this }
    quadraticCurveTo(e, t, n, i) { return this.currentPath.quadraticCurveTo(e, t, n, i), this }
    bezierCurveTo(e, t, n, i, r, s) { return this.currentPath.bezierCurveTo(e, t, n, i, r, s), this }
    splineThru(e) { return this.currentPath.splineThru(e), this }
    toShapes(e, t) {
        function n(p) { const M = []; for (let y = 0, b = p.length; y < b; y++) { const E = p[y],
                    C = new Qt;
                C.curves = E.curves, M.push(C) } return M }

        function i(p, M) { const y = M.length; let b = !1; for (let E = y - 1, C = 0; C < y; E = C++) { let P = M[E],
                    H = M[C],
                    B = H.x - P.x,
                    _ = H.y - P.y; if (Math.abs(_) > Number.EPSILON) { if (_ < 0 && (P = M[C], B = -B, H = M[E], _ = -_), p.y < P.y || p.y > H.y) continue; if (p.y === P.y) { if (p.x === P.x) return !0 } else { const R = _ * (p.x - P.x) - B * (p.y - P.y); if (R === 0) return !0; if (R < 0) continue;
                        b = !b } } else { if (p.y !== P.y) continue; if (H.x <= p.x && p.x <= P.x || P.x <= p.x && p.x <= H.x) return !0 } } return b } const r = jt.isClockWise,
            s = this.subPaths; if (s.length === 0) return []; if (t === !0) return n(s); let a, l, c; const h = []; if (s.length === 1) return l = s[0], c = new Qt, c.curves = l.curves, h.push(c), h; let u = !r(s[0].getPoints());
        u = e ? !u : u; const d = [],
            f = []; let m = [],
            x = 0,
            v;
        f[x] = void 0, m[x] = []; for (let p = 0, M = s.length; p < M; p++) l = s[p], v = l.getPoints(), a = r(v), a = e ? !a : a, a ? (!u && f[x] && x++, f[x] = { s: new Qt, p: v }, f[x].s.curves = l.curves, u && x++, m[x] = []) : m[x].push({ h: l, p: v[0] }); if (!f[0]) return n(s); if (f.length > 1) { let p = !1; const M = []; for (let y = 0, b = f.length; y < b; y++) d[y] = []; for (let y = 0, b = f.length; y < b; y++) { const E = m[y]; for (let C = 0; C < E.length; C++) { const P = E[C]; let H = !0; for (let B = 0; B < f.length; B++) i(P.p, f[B].p) && (y !== B && M.push({ froms: y, tos: B, hole: C }), H ? (H = !1, d[B].push(P)) : p = !0);
                    H && d[y].push(P) } }
            M.length > 0 && (p || (m = d)) } let g; for (let p = 0, M = f.length; p < M; p++) { c = f[p].s, h.push(c), g = m[p]; for (let y = 0, b = g.length; y < b; y++) c.holes.push(g[y].h) } return h } }
const lx = new Float32Array(1);
new Int32Array(lx.buffer);
At.create = function(o, e) { return console.log("THREE.Curve.create() has been deprecated"), o.prototype = Object.create(At.prototype), o.prototype.constructor = o, o.prototype.getPoint = e, o };
as.prototype.fromPoints = function(o) { return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(o) };
ox.prototype.setColors = function() { console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.") };
sx.prototype.update = function() { console.error("THREE.SkeletonHelper: update() no longer needs to be called.") };
Ct.prototype.extractUrlBase = function(o) { return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Ko.extractUrlBase(o) };
Ct.Handlers = { add: function() { console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.") }, get: function() { console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.") } };
Dt.prototype.center = function(o) { return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(o) };
Dt.prototype.empty = function() { return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty() };
Dt.prototype.isIntersectionBox = function(o) { return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(o) };
Dt.prototype.isIntersectionSphere = function(o) { return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(o) };
Dt.prototype.size = function(o) { return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(o) };
Rn.prototype.empty = function() { return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty() };
Nr.prototype.setFromMatrix = function(o) { return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(o) };
Jc.prototype.center = function(o) { return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(o) };
at.prototype.flattenToArrayOffset = function(o, e) { return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(o, e) };
at.prototype.multiplyVector3 = function(o) { return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), o.applyMatrix3(this) };
at.prototype.multiplyVector3Array = function() { console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.") };
at.prototype.applyToBufferAttribute = function(o) { return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), o.applyMatrix3(this) };
at.prototype.applyToVector3Array = function() { console.error("THREE.Matrix3: .applyToVector3Array() has been removed.") };
at.prototype.getInverse = function(o) { return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(o).invert() };
ge.prototype.extractPosition = function(o) { return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(o) };
ge.prototype.flattenToArrayOffset = function(o, e) { return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(o, e) };
ge.prototype.getPosition = function() { return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new S().setFromMatrixColumn(this, 3) };
ge.prototype.setRotationFromQuaternion = function(o) { return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(o) };
ge.prototype.multiplyToArray = function() { console.warn("THREE.Matrix4: .multiplyToArray() has been removed.") };
ge.prototype.multiplyVector3 = function(o) { return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), o.applyMatrix4(this) };
ge.prototype.multiplyVector4 = function(o) { return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), o.applyMatrix4(this) };
ge.prototype.multiplyVector3Array = function() { console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.") };
ge.prototype.rotateAxis = function(o) { console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), o.transformDirection(this) };
ge.prototype.crossVector = function(o) { return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), o.applyMatrix4(this) };
ge.prototype.translate = function() { console.error("THREE.Matrix4: .translate() has been removed.") };
ge.prototype.rotateX = function() { console.error("THREE.Matrix4: .rotateX() has been removed.") };
ge.prototype.rotateY = function() { console.error("THREE.Matrix4: .rotateY() has been removed.") };
ge.prototype.rotateZ = function() { console.error("THREE.Matrix4: .rotateZ() has been removed.") };
ge.prototype.rotateByAxis = function() { console.error("THREE.Matrix4: .rotateByAxis() has been removed.") };
ge.prototype.applyToBufferAttribute = function(o) { return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), o.applyMatrix4(this) };
ge.prototype.applyToVector3Array = function() { console.error("THREE.Matrix4: .applyToVector3Array() has been removed.") };
ge.prototype.makeFrustum = function(o, e, t, n, i, r) { return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(o, e, n, t, i, r) };
ge.prototype.getInverse = function(o) { return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(o).invert() };
Ht.prototype.isIntersectionLine = function(o) { return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(o) };
Mt.prototype.multiplyVector3 = function(o) { return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), o.applyQuaternion(this) };
Mt.prototype.inverse = function() { return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert() };
Kn.prototype.isIntersectionBox = function(o) { return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(o) };
Kn.prototype.isIntersectionPlane = function(o) { return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(o) };
Kn.prototype.isIntersectionSphere = function(o) { return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(o) };
tt.prototype.area = function() { return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea() };
tt.prototype.barycoordFromPoint = function(o, e) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(o, e) };
tt.prototype.midpoint = function(o) { return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(o) };
tt.prototypenormal = function(o) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(o) };
tt.prototype.plane = function(o) { return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(o) };
tt.barycoordFromPoint = function(o, e, t, n, i) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), tt.getBarycoord(o, e, t, n, i) };
tt.normal = function(o, e, t, n) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), tt.getNormal(o, e, t, n) };
Qt.prototype.extractAllPoints = function(o) { return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(o) };
Qt.prototype.extrude = function(o) { return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new en(this, o) };
Qt.prototype.makeGeometry = function(o) { return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new ji(this, o) };
$.prototype.fromAttribute = function(o, e, t) { return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(o, e, t) };
$.prototype.distanceToManhattan = function(o) { return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(o) };
$.prototype.lengthManhattan = function() { return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() };
S.prototype.setEulerFromRotationMatrix = function() { console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.") };
S.prototype.setEulerFromQuaternion = function() { console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.") };
S.prototype.getPositionFromMatrix = function(o) { return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(o) };
S.prototype.getScaleFromMatrix = function(o) { return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(o) };
S.prototype.getColumnFromMatrix = function(o, e) { return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, o) };
S.prototype.applyProjection = function(o) { return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(o) };
S.prototype.fromAttribute = function(o, e, t) { return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(o, e, t) };
S.prototype.distanceToManhattan = function(o) { return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(o) };
S.prototype.lengthManhattan = function() { return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() };
We.prototype.fromAttribute = function(o, e, t) { return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(o, e, t) };
We.prototype.lengthManhattan = function() { return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() };
He.prototype.getChildByName = function(o) { return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(o) };
He.prototype.renderDepth = function() { console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.") };
He.prototype.translate = function(o, e) { return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, o) };
He.prototype.getWorldRotation = function() { console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.") };
He.prototype.applyMatrix = function(o) { return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(o) };
Object.defineProperties(He.prototype, { eulerOrder: { get: function() { return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order }, set: function(o) { console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = o } }, useQuaternion: { get: function() { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.") }, set: function() { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.") } } });
pt.prototype.setDrawMode = function() { console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.") };
Object.defineProperties(pt.prototype, { drawMode: { get: function() { return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), Kh }, set: function() { console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.") } } });
Ro.prototype.initBones = function() { console.error("THREE.SkinnedMesh: initBones() has been removed.") };
yt.prototype.setLens = function(o, e) { console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), e !== void 0 && (this.filmGauge = e), this.setFocalLength(o) };
Object.defineProperties(Wt.prototype, { onlyShadow: { set: function() { console.warn("THREE.Light: .onlyShadow has been removed.") } }, shadowCameraFov: { set: function(o) { console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = o } }, shadowCameraLeft: { set: function(o) { console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = o } }, shadowCameraRight: { set: function(o) { console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = o } }, shadowCameraTop: { set: function(o) { console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = o } }, shadowCameraBottom: { set: function(o) { console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = o } }, shadowCameraNear: { set: function(o) { console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = o } }, shadowCameraFar: { set: function(o) { console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = o } }, shadowCameraVisible: { set: function() { console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.") } }, shadowBias: { set: function(o) { console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = o } }, shadowDarkness: { set: function() { console.warn("THREE.Light: .shadowDarkness has been removed.") } }, shadowMapWidth: { set: function(o) { console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = o } }, shadowMapHeight: { set: function(o) { console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = o } } });
Object.defineProperties(et.prototype, { length: { get: function() { return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length } }, dynamic: { get: function() { return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === pr }, set: function() { console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(pr) } } });
et.prototype.setDynamic = function(o) { return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(o === !0 ? pr : Di), this };
et.prototype.copyIndicesArray = function() { console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.") }, et.prototype.setArray = function() { console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers") };
De.prototype.addIndex = function(o) { console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(o) };
De.prototype.addAttribute = function(o, e) { return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), !(e && e.isBufferAttribute) && !(e && e.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(o, new et(arguments[1], arguments[2]))) : o === "index" ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(o, e) };
De.prototype.addDrawCall = function(o, e, t) { t !== void 0 && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(o, e) };
De.prototype.clearDrawCalls = function() { console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups() };
De.prototype.computeOffsets = function() { console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.") };
De.prototype.removeAttribute = function(o) { return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(o) };
De.prototype.applyMatrix = function(o) { return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(o) };
Object.defineProperties(De.prototype, { drawcalls: { get: function() { return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups } }, offsets: { get: function() { return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups } } });
fi.prototype.setDynamic = function(o) { return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(o === !0 ? pr : Di), this };
fi.prototype.setArray = function() { console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers") };
en.prototype.getArrays = function() { console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.") };
en.prototype.addShapeList = function() { console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.") };
en.prototype.addShape = function() { console.error("THREE.ExtrudeGeometry: .addShape() has been removed.") };
Eo.prototype.dispose = function() { console.error("THREE.Scene: .dispose() has been removed.") };
Object.defineProperties(ut.prototype, { wrapAround: { get: function() { console.warn("THREE.Material: .wrapAround has been removed.") }, set: function() { console.warn("THREE.Material: .wrapAround has been removed.") } }, overdraw: { get: function() { console.warn("THREE.Material: .overdraw has been removed.") }, set: function() { console.warn("THREE.Material: .overdraw has been removed.") } }, wrapRGB: { get: function() { return console.warn("THREE.Material: .wrapRGB has been removed."), new he } }, shading: { get: function() { console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.") }, set: function(o) { console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = o === oa } }, stencilMask: { get: function() { return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask }, set: function(o) { console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = o } }, vertexTangents: { get: function() { console.warn("THREE." + this.type + ": .vertexTangents has been removed.") }, set: function() { console.warn("THREE." + this.type + ": .vertexTangents has been removed.") } } });
Object.defineProperties(mn.prototype, { derivatives: { get: function() { return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives }, set: function(o) { console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = o } } });
qe.prototype.clearTarget = function(o, e, t, n) { console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(o), this.clear(e, t, n) };
qe.prototype.animate = function(o) { console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(o) };
qe.prototype.getCurrentRenderTarget = function() { return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget() };
qe.prototype.getMaxAnisotropy = function() { return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy() };
qe.prototype.getPrecision = function() { return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision };
qe.prototype.resetGLState = function() { return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset() };
qe.prototype.supportsFloatTextures = function() { return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float") };
qe.prototype.supportsHalfFloatTextures = function() { return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float") };
qe.prototype.supportsStandardDerivatives = function() { return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives") };
qe.prototype.supportsCompressedTextureS3TC = function() { return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc") };
qe.prototype.supportsCompressedTexturePVRTC = function() { return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc") };
qe.prototype.supportsBlendMinMax = function() { return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax") };
qe.prototype.supportsVertexTextures = function() { return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures };
qe.prototype.supportsInstancedArrays = function() { return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays") };
qe.prototype.enableScissorTest = function(o) { console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(o) };
qe.prototype.initMaterial = function() { console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.") };
qe.prototype.addPrePlugin = function() { console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.") };
qe.prototype.addPostPlugin = function() { console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.") };
qe.prototype.updateShadowMap = function() { console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.") };
qe.prototype.setFaceCulling = function() { console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.") };
qe.prototype.allocTextureUnit = function() { console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.") };
qe.prototype.setTexture = function() { console.warn("THREE.WebGLRenderer: .setTexture() has been removed.") };
qe.prototype.setTexture2D = function() { console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.") };
qe.prototype.setTextureCube = function() { console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.") };
qe.prototype.getActiveMipMapLevel = function() { return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel() };
Object.defineProperties(qe.prototype, { shadowMapEnabled: { get: function() { return this.shadowMap.enabled }, set: function(o) { console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = o } }, shadowMapType: { get: function() { return this.shadowMap.type }, set: function(o) { console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = o } }, shadowMapCullFace: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.") } }, context: { get: function() { return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext() } }, vr: { get: function() { return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr } }, gammaInput: { get: function() { return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1 }, set: function() { console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.") } }, gammaOutput: { get: function() { return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1 }, set: function(o) { console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = o === !0 ? Ye : an } }, toneMappingWhitePoint: { get: function() { return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1 }, set: function() { console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.") } }, gammaFactor: { get: function() { return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2 }, set: function() { console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.") } } });
Object.defineProperties(Bl.prototype, { cullFace: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.") } }, renderReverseSided: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.") } }, renderSingleSided: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.") } } });
Object.defineProperties(Tt.prototype, { wrapS: { get: function() { return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS }, set: function(o) { console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = o } }, wrapT: { get: function() { return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT }, set: function(o) { console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = o } }, magFilter: { get: function() { return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter }, set: function(o) { console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = o } }, minFilter: { get: function() { return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter }, set: function(o) { console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = o } }, anisotropy: { get: function() { return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy }, set: function(o) { console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = o } }, offset: { get: function() { return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset }, set: function(o) { console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = o } }, repeat: { get: function() { return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat }, set: function(o) { console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = o } }, format: { get: function() { return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format }, set: function(o) { console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = o } }, type: { get: function() { return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type }, set: function(o) { console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = o } }, generateMipmaps: { get: function() { return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps }, set: function(o) { console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = o } } });
qg.prototype.load = function(o) { console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."); const e = this; return new kg().load(o, function(n) { e.setBuffer(n) }), this };
po.prototype.updateCubeMap = function(o, e) { return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(o, e) };
po.prototype.clear = function(o, e, t, n) { return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(o, e, t, n) };
Tn.crossOrigin = void 0;
Tn.loadTexture = function(o, e, t, n) { console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."); const i = new Bg;
    i.setCrossOrigin(this.crossOrigin); const r = i.load(o, t, void 0, n); return e && (r.mapping = e), r };
Tn.loadTextureCube = function(o, e, t, n) { console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."); const i = new Ng;
    i.setCrossOrigin(this.crossOrigin); const r = i.load(o, t, void 0, n); return e && (r.mapping = e), r };
Tn.loadCompressedTexture = function() { console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.") };
Tn.loadCompressedTextureCube = function() { console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.") };
typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: Ls } }));
typeof window != "undefined" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ls);
class mx extends Ct { constructor(e) { super(e) }
    load(e, t, n, i) { const r = this,
            s = new Si(this.manager);
        s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(r.withCredentials), s.load(e, function(a) { let l; try { l = JSON.parse(a) } catch { console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), l = JSON.parse(a.substring(65, a.length - 2)) } const c = r.parse(l);
            t && t(c) }, n, i) }
    parse(e) { return new Zc(e) } }
class Zc { constructor(e) { this.type = "Font", this.data = e }
    generateShapes(e, t = 100) { const n = [],
            i = cx(e, t, this.data); for (let r = 0, s = i.length; r < s; r++) Array.prototype.push.apply(n, i[r].toShapes()); return n } }

function cx(o, e, t) { const n = Array.from(o),
        i = e / t.resolution,
        r = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * i,
        s = []; let a = 0,
        l = 0; for (let c = 0; c < n.length; c++) { const h = n[c]; if (h === `
`) a = 0, l -= r;
        else { const u = hx(h, i, a, l, t);
            a += u.offsetX, s.push(u.path) } } return s }

function hx(o, e, t, n, i) { const r = i.glyphs[o] || i.glyphs["?"]; if (!r) { console.error('THREE.Font: character "' + o + '" does not exists in font family ' + i.familyName + "."); return } const s = new ax; let a, l, c, h, u, d, f, m; if (r.o) { const x = r._cachedOutline || (r._cachedOutline = r.o.split(" ")); for (let v = 0, g = x.length; v < g;) switch (x[v++]) {
            case "m":
                a = x[v++] * e + t, l = x[v++] * e + n, s.moveTo(a, l); break;
            case "l":
                a = x[v++] * e + t, l = x[v++] * e + n, s.lineTo(a, l); break;
            case "q":
                c = x[v++] * e + t, h = x[v++] * e + n, u = x[v++] * e + t, d = x[v++] * e + n, s.quadraticCurveTo(u, d, c, h); break;
            case "b":
                c = x[v++] * e + t, h = x[v++] * e + n, u = x[v++] * e + t, d = x[v++] * e + n, f = x[v++] * e + t, m = x[v++] * e + n, s.bezierCurveTo(u, d, f, m, c, h); break } } return { offsetX: r.ha * e, path: s } }
Zc.prototype.isFont = !0;
class gx extends en { constructor(e, t = {}) { const n = t.font; if (n === void 0) super();
        else { const i = n.generateShapes(e, t.size);
            t.depth = t.height !== void 0 ? t.height : 50, t.bevelThickness === void 0 && (t.bevelThickness = 10), t.bevelSize === void 0 && (t.bevelSize = 8), t.bevelEnabled === void 0 && (t.bevelEnabled = !1);
            super(i, t) }
        this.type = "TextGeometry" } }
const As = 0,
    ux = 1,
    dx = new S,
    $c = new Jc,
    ta = new Ht,
    Kc = new S,
    Cs = new tt;
class Qc { constructor() { this.tolerance = -1, this.faces = [], this.newFaces = [], this.assigned = new jc, this.unassigned = new jc, this.vertices = [] }
    setFromPoints(e) { if (e.length >= 4) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t++) this.vertices.push(new fx(e[t]));
            this.compute() } return this }
    setFromObject(e) { const t = []; return e.updateMatrixWorld(!0), e.traverse(function(n) { const i = n.geometry; if (i !== void 0) { if (i.isGeometry) { console.error("THREE.ConvexHull no longer supports Geometry. Use THREE.BufferGeometry instead."); return } else if (i.isBufferGeometry) { const r = i.attributes.position; if (r !== void 0)
                        for (let s = 0, a = r.count; s < a; s++) { const l = new S;
                            l.fromBufferAttribute(r, s).applyMatrix4(n.matrixWorld), t.push(l) } } } }), this.setFromPoints(t) }
    containsPoint(e) { const t = this.faces; for (let n = 0, i = t.length; n < i; n++)
            if (t[n].distanceToPoint(e) > this.tolerance) return !1;
        return !0 }
    intersectRay(e, t) { const n = this.faces; let i = -1 / 0,
            r = 1 / 0; for (let s = 0, a = n.length; s < a; s++) { const l = n[s],
                c = l.distanceToPoint(e.origin),
                h = l.normal.dot(e.direction); if (c > 0 && h >= 0) return null; const u = h !== 0 ? -c / h : 0; if (!(u <= 0) && (h > 0 ? r = Math.min(u, r) : i = Math.max(u, i), i > r)) return null } return i !== -1 / 0 ? e.at(i, t) : e.at(r, t), t }
    intersectsRay(e) { return this.intersectRay(e, dx) !== null }
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
                    r = null; for (let s = 0; s < e.length; s++) { const a = e[s]; if (a.mark === As) { const l = a.distanceToPoint(t.point); if (l > i && (i = l, r = a), i > 1e3 * this.tolerance) break } }
                r !== null && this.addVertexToFace(t, r), t = n } while (t !== null) } return this }
    computeExtremes() { const e = new S,
            t = new S,
            n = [],
            i = []; for (let r = 0; r < 3; r++) n[r] = i[r] = this.vertices[0];
        e.copy(this.vertices[0].point), t.copy(this.vertices[0].point); for (let r = 0, s = this.vertices.length; r < s; r++) { const a = this.vertices[r],
                l = a.point; for (let c = 0; c < 3; c++) l.getComponent(c) < e.getComponent(c) && (e.setComponent(c, l.getComponent(c)), n[c] = a); for (let c = 0; c < 3; c++) l.getComponent(c) > t.getComponent(c) && (t.setComponent(c, l.getComponent(c)), i[c] = a) } return this.tolerance = 3 * Number.EPSILON * (Math.max(Math.abs(e.x), Math.abs(t.x)) + Math.max(Math.abs(e.y), Math.abs(t.y)) + Math.max(Math.abs(e.z), Math.abs(t.z))), { min: n, max: i } }
    computeInitialHull() { const e = this.vertices,
            t = this.computeExtremes(),
            n = t.min,
            i = t.max; let r = 0,
            s = 0; for (let d = 0; d < 3; d++) { const f = i[d].point.getComponent(d) - n[d].point.getComponent(d);
            f > r && (r = f, s = d) } const a = n[s],
            l = i[s]; let c, h;
        r = 0, $c.set(a.point, l.point); for (let d = 0, f = this.vertices.length; d < f; d++) { const m = e[d]; if (m !== a && m !== l) { $c.closestPointToPoint(m.point, !0, Kc); const x = Kc.distanceToSquared(m.point);
                x > r && (r = x, c = m) } }
        r = -1, ta.setFromCoplanarPoints(a.point, l.point, c.point); for (let d = 0, f = this.vertices.length; d < f; d++) { const m = e[d]; if (m !== a && m !== l && m !== c) { const x = Math.abs(ta.distanceToPoint(m.point));
                x > r && (r = x, h = m) } } const u = []; if (ta.distanceToPoint(h.point) < 0) { u.push(Nt.create(a, l, c), Nt.create(h, l, a), Nt.create(h, c, l), Nt.create(h, a, c)); for (let d = 0; d < 3; d++) { const f = (d + 1) % 3;
                u[d + 1].getEdge(2).setTwin(u[0].getEdge(f)), u[d + 1].getEdge(1).setTwin(u[f + 1].getEdge(0)) } } else { u.push(Nt.create(a, c, l), Nt.create(h, a, l), Nt.create(h, l, c), Nt.create(h, c, a)); for (let d = 0; d < 3; d++) { const f = (d + 1) % 3;
                u[d + 1].getEdge(2).setTwin(u[0].getEdge((3 - d) % 3)), u[d + 1].getEdge(0).setTwin(u[f + 1].getEdge(1)) } } for (let d = 0; d < 4; d++) this.faces.push(u[d]); for (let d = 0, f = e.length; d < f; d++) { const m = e[d]; if (m !== a && m !== l && m !== c && m !== h) { r = this.tolerance; let x = null; for (let v = 0; v < 4; v++) { const g = this.faces[v].distanceToPoint(m.point);
                    g > r && (r = g, x = this.faces[v]) }
                x !== null && this.addVertexToFace(m, x) } } return this }
    reindexFaces() { const e = []; for (let t = 0; t < this.faces.length; t++) { const n = this.faces[t];
            n.mark === As && e.push(n) } return this.faces = e, this }
    nextVertexToAdd() { if (this.assigned.isEmpty() === !1) { let e, t = 0; const n = this.assigned.first().face; let i = n.outside;
            do { const r = n.distanceToPoint(i.point);
                r > t && (t = r, e = i), i = i.next } while (i !== null && i.face === n); return e } }
    computeHorizon(e, t, n, i) { this.deleteFaceVertices(n), n.mark = ux; let r;
        t === null ? r = t = n.getEdge(0) : r = t.next;
        do { const s = r.twin,
                a = s.face;
            a.mark === As && (a.distanceToPoint(e) > this.tolerance ? this.computeHorizon(e, s, a, i) : i.push(r)), r = r.next } while (r !== t); return this }
    addAdjoiningFace(e, t) { const n = Nt.create(e, t.tail(), t.head()); return this.faces.push(n), n.getEdge(-1).setTwin(t.twin), n.getEdge(0) }
    addNewFaces(e, t) { this.newFaces = []; let n = null,
            i = null; for (let r = 0; r < t.length; r++) { const s = t[r],
                a = this.addAdjoiningFace(e, s);
            n === null ? n = a : a.next.setTwin(i), this.newFaces.push(a.face), i = a } return n.next.setTwin(i), this }
    addVertexToHull(e) { const t = []; return this.unassigned.clear(), this.removeVertexFromFace(e, e.face), this.computeHorizon(e.point, null, e.face, t), this.addNewFaces(e, t), this.resolveUnassignedPoints(this.newFaces), this }
    cleanup() { return this.assigned.clear(), this.unassigned.clear(), this.newFaces = [], this }
    compute() { let e; for (this.computeInitialHull();
            (e = this.nextVertexToAdd()) !== void 0;) this.addVertexToHull(e); return this.reindexFaces(), this.cleanup(), this } }
class Nt { constructor() { this.normal = new S, this.midpoint = new S, this.area = 0, this.constant = 0, this.outside = null, this.mark = As, this.edge = null }
    static create(e, t, n) { const i = new Nt,
            r = new na(e, i),
            s = new na(t, i),
            a = new na(n, i); return r.next = a.prev = s, s.next = r.prev = a, a.next = s.prev = r, i.edge = r, i.compute() }
    getEdge(e) { let t = this.edge; for (; e > 0;) t = t.next, e--; for (; e < 0;) t = t.prev, e++; return t }
    compute() { const e = this.edge.tail(),
            t = this.edge.head(),
            n = this.edge.next.head(); return Cs.set(e.point, t.point, n.point), Cs.getNormal(this.normal), Cs.getMidpoint(this.midpoint), this.area = Cs.getArea(), this.constant = this.normal.dot(this.midpoint), this }
    distanceToPoint(e) { return this.normal.dot(e) - this.constant } }
class na { constructor(e, t) { this.vertex = e, this.prev = null, this.next = null, this.twin = null, this.face = t }
    head() { return this.vertex }
    tail() { return this.prev ? this.prev.vertex : null }
    length() { const e = this.head(),
            t = this.tail(); return t !== null ? t.point.distanceTo(e.point) : -1 }
    lengthSquared() { const e = this.head(),
            t = this.tail(); return t !== null ? t.point.distanceToSquared(e.point) : -1 }
    setTwin(e) { return this.twin = e, e.twin = this, this } }
class fx { constructor(e) { this.point = e, this.prev = null, this.next = null, this.face = null } }
class jc { constructor() { this.head = null, this.tail = null }
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
class xx extends De { constructor(e = []) { super(); const t = [],
            n = [];
        Qc === void 0 && console.error("THREE.ConvexBufferGeometry: ConvexBufferGeometry relies on ConvexHull"); const r = new Qc().setFromPoints(e).faces; for (let s = 0; s < r.length; s++) { const a = r[s]; let l = a.edge;
            do { const c = l.head().point;
                t.push(c.x, c.y, c.z), n.push(a.normal.x, a.normal.y, a.normal.z), l = l.next } while (l !== a.edge) }
        this.setAttribute("position", new _e(t, 3)), this.setAttribute("normal", new _e(n, 3)) } }

function yx(o, e) { const t = new Dn; for (let n = 0, i = e.length; n < i; n++) t.add(new pt(o, e[n])); return t }
export { Hc as A, xx as C, Nn as D, Km as E, mx as F, vi as L, _c as M, He as O, oh as P, ms as S, Bg as T, S as V, qe as W, pt as a, Jo as b, yx as c, gx as d, Zr as e, Eo as f, yt as g, px as h, Fc as i };