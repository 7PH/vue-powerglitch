import { defineComponent as p, ref as b, onMounted as w, openBlock as $, createElementBlock as E } from "vue";
var g = {};
Object.defineProperty(g, "__esModule", { value: !0 });
var f = g.PowerGlitch = void 0;
const h = () => ({
  backgroundColor: "transparent",
  hideOverflow: !1,
  timing: {
    duration: 2 * 1e3,
    iterations: 1 / 0
  },
  glitchTimeSpan: {
    start: 0.5,
    end: 0.7
  },
  shake: {
    velocity: 15,
    amplitudeX: 0.4,
    amplitudeY: 0.4
  },
  slice: {
    count: 6,
    velocity: 15,
    minHeight: 0.02,
    maxHeight: 0.15,
    hueRotate: !0
  }
}), c = (e, n) => {
  let t = 0;
  if (e.glitchTimeSpan) {
    const r = e.glitchTimeSpan.start, l = e.glitchTimeSpan.end;
    if (n < r || n > l)
      return 0;
    const i = r + (l - r) / 2;
    n < i ? t = (n - r) / (i - r) : t = (l - n) / (l - i);
  } else
    t = 1;
  return (Math.random() - 0.5) * 2 * t;
}, M = ({ minHeight: e, maxHeight: n, minWidth: t, maxWidth: a }) => {
  const r = Math.floor(Math.random() * ((n - e) * 100 + 1)) + e * 100, l = Math.floor(Math.random() * ((a - t) * 100 + 1)) + t * 100, i = Math.floor(Math.random() * (100 - r)), s = Math.floor(Math.random() * (100 - l));
  return { top: i, left: s, height: r, width: l };
}, v = ({ top: e, left: n, height: t, width: a }) => {
  const r = `${n + a}% ${e}%`, l = `${n + a}% ${e + t}%`, i = `${n}% ${e + t}%`, s = `${n}% ${e}%`;
  return `polygon(${r}, ${l}, ${i}, ${s})`;
}, m = (e) => Object.assign(Object.assign({}, h().timing), { easing: `steps(${e}, jump-start)` }), C = (e) => {
  if (!e.slice)
    throw new Error("Slice are not enabled");
  const n = Math.floor(e.slice.velocity * e.timing.duration / 1e3) + 1, t = [];
  for (let a = 0; a < n; ++a) {
    const r = M({ minHeight: e.slice.minHeight, maxHeight: e.slice.maxHeight, minWidth: 1, maxWidth: 1 }), l = c(e, a / n) * 30, i = {};
    i.transform = `translate3d(${l}%, 0, 0)`, i.clipPath = v(r), e.slice.hueRotate && (i.filter = `hue-rotate(${Math.floor(c(e, a / n) * 360)}deg)`), t.push(i);
  }
  return { steps: t, timing: Object.assign(Object.assign({}, m(n)), e.timing) };
}, k = (e) => {
  if (!e.shake)
    return { steps: [], timing: m(1) };
  const n = Math.floor(e.shake.velocity * e.timing.duration / 1e3) + 1, t = [];
  for (let a = 0; a < n; ++a) {
    const r = c(e, a / n) * e.shake.amplitudeX * 100, l = c(e, a / n) * e.shake.amplitudeY * 100, i = {};
    i.transform = `translate3d(${r}%, ${l}%, 0)`, t.push(i);
  }
  return { steps: t, timing: Object.assign(Object.assign({}, m(n)), e.timing) };
}, u = (e) => {
  const n = [];
  if (n.push(k(e)), e.slice)
    for (let t = 0; t < e.slice.count; ++t)
      n.push(C(e));
  return n;
}, d = (e, n, t, a) => {
  const r = document.createElement("div");
  for (r.classList.add("layer"), r.style.backgroundColor = t.backgroundColor, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.width = "100%", r.style.height = "100%", r.style.top = "0", r.style.left = "0", r.style.position = "absolute", e.style.position = "relative", t.hideOverflow ? e.style.overflow = "hidden" : e.style.overflow = "visible"; e.firstChild; )
    e.removeChild(e.firstChild);
  for (const l of n) {
    const i = r.cloneNode(!1);
    i.style.backgroundImage = `url(${a})`, i.animate(l.steps, l.timing), e.appendChild(i);
  }
};
function y(...e) {
  const n = (t) => t && typeof t == "object";
  return e.reduce((t, a) => (Object.keys(a).forEach((r) => {
    const l = t[r], i = a[r];
    if (Array.isArray(l) && Array.isArray(i)) {
      t[r] = l.concat(...i);
      return;
    }
    if (n(l) && n(i)) {
      t[r] = y(l, i);
      return;
    }
    i !== void 0 && (t[r] = i);
  }), t), {});
}
const x = (e = ".powerglitch", n = {}) => {
  const t = y(h(), n);
  let a = [];
  if (typeof e == "string") {
    const s = document.querySelectorAll(e);
    if (!s.length)
      throw new Error(`Could not find any element with selector ${e}`);
    a = Array.from(s);
  } else
    a = [e];
  const r = a.filter((s) => s instanceof HTMLImageElement), l = a.filter((s) => s instanceof HTMLDivElement), i = u(t);
  for (const s of r) {
    const o = document.createElement("div");
    if (o.style.width = s.clientWidth + "px", o.style.height = s.clientHeight + "px", !s.parentElement)
      throw new Error("Unable to glitch image, it is not attached to a parent element");
    s.parentElement.insertBefore(o, s), s.style.display = "none", d(o, i, t, t.imageUrl || s.src);
  }
  for (const s of l) {
    if (!t.imageUrl)
      throw new Error("Options.imageUrl must be set if there are div elements to glitch");
    d(s, i, t, t.imageUrl);
  }
};
f = g.PowerGlitch = {
  glitch: x,
  generateLayers: u,
  getDefaultOptions: h
};
const O = /* @__PURE__ */ p({
  __name: "GlitchedImage",
  props: {
    imageUrl: {
      type: String,
      required: !0
    },
    options: {
      type: Object,
      required: !1,
      default: () => ({})
    }
  },
  setup(e) {
    const n = e, t = b(null);
    return w(() => {
      f.glitch(
        t.value,
        {
          ...n.options,
          imageUrl: n.imageUrl
        }
      );
    }), (a, r) => ($(), E("div", {
      ref_key: "glitched",
      ref: t
    }, null, 512));
  }
}), L = {
  install: (e) => {
    e.component("GlitchedImage", O);
  }
};
export {
  O as GlitchedImage,
  L as default
};
