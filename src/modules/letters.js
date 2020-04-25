var mouse = { x: window.innerWidth / 2, y: 0.75 * window.innerHeight },
  pos = { x: window.innerWidth / 2, y: 0.75 * window.innerHeight };
document.addEventListener(
  "mousemove",
  function (e) {
    (pos.x = e.clientX), (pos.y = e.clientY);
  },
  !1
),
  window.addEventListener(
    "touchmove",
    function (e) {
      var t = e.touches[0];
      (pos.x = t.clientX), (pos.y = t.clientY);
    },
    { passive: !0 }
  ),
  window.addEventListener(
    "touchstart",
    function (e) {
      var t = e.touches[0];
      (pos.x = t.clientX), (pos.y = t.clientY);
    },
    { passive: !0 }
  );
var div = document.getElementById("letters"),
  path = document.getElementById("path"),
  settings = {
    svg: document.getElementById("svg"),
    wrapper: { w: div.offsetWidth, h: div.offsetHeight },
    helpers: void 0,
    layout: void 0,
    d: void 0,
    letterGap: 7,
    letterRatioH: 100,
    _P: {
      ratio: { w: 112, h: 100 },
      data: [
        { type: "M", x: 0, xRef: "l", y: 0, yRef: "t" },
        { type: "L", x: 22, xRef: "r", y: 0, yRef: "t" },
        { type: "c", x: [12.15, 22, 22], y: [0, 9.85, 22] },
        { type: "L", x: 0, xRef: "r", y: 47, yRef: "b" },
        { type: "c", x: [0, -9.85, -22], y: [12.15, 22, 22] },
        { type: "L", x: -5, xRef: "c", y: 25, yRef: "b" },
        { type: "L", x: -5, xRef: "c", y: 0, yRef: "b" },
        { type: "L", x: 0, xRef: "l", y: 0, yRef: "b" },
        { type: "M", x: -5, xRef: "c", y: 25, yRef: "t" },
        { type: "L", x: -5, xRef: "c", y: 50, yRef: "b" },
        { type: "l", x: [10], y: [0] },
        { type: "L", x: 5, xRef: "c", y: 25, yRef: "t" },
      ],
    },
    _B:{
      ratio:{w:112,h:110},
      data:[
        { type: "M", x: 0, xRef: "l", y: 0, yRef: "t" },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "t" },
        { type: "L", x: 0, xRef: "r", y: -10, yRef: "c" },
        { type: "L", x: 22, xRef: "l", y: -10, yRef: "c" },
        { type: "L", x: 22, xRef: "l", y: 10, yRef: "c" },
        { type: "L", x: 0, xRef: "r", y: 10, yRef: "c" },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "b" },
        { type: "L", x: 0, xRef: "l", y: 0, yRef: "b" },
        { type: "L", x: 0, xRef: "l", y: 0, yRef: "t" },  
        { type: "M", x: -10, xRef: "c", y: -40, yRef: "c" }, 
        { type: "L", x: 10, xRef: "c", y: -40, yRef: "c" },
        { type: "L", x: 10, xRef: "c", y: -20, yRef: "c" },  
        { type: "L", x: -10, xRef: "c", y: -20, yRef: "c" },  
        { type: "L", x: -10, xRef: "c", y: -40, yRef: "c" },
      ]
    },
    _Y:{
      ratio:{w:112,h:100},
      data:[
        {type: "M",x:0,xRef:"l",y:0,yRef:"t"},
        { type: "L", x: -5, xRef: "c", y: 0, yRef: "t" },
        { type: "L", x: -5, xRef: "c", y: -5, yRef: "c" },
        { type: "L", x: 5, xRef: "c", y: -5, yRef: "c" },
        { type: "L", x: 5, xRef: "c", y: 0, yRef: "t" },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "t" },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "b" },
        { type: "L", x: 0, xRef: "l", y: 0, yRef : "b" },
        { type: "L", x: 0, xRef: "l", y: 20, yRef: "c" },
        { type: "L", x: 50, xRef: "c", y: 20, yRef: "c" },
        { type: "L", x: 50, xRef: "c", y: 5, yRef: "c" },
        { type: "L", x: 0, xRef: "l", y: 5, yRef: "c" },
      ]
    },
    _L:{
      ratio:{w:112,h:100},
      data:[
        {type: "M",x:0,xRef:"l",y:0,yRef:"t"},
        { type: "L", x: 0, xRef: "c", y: 0, yRef: "t" },
        { type: "L", x: 0, xRef: "c", y: 40, yRef: "c" },
        { type: "L", x: 0, xRef: "r", y: 40, yRef: "c" },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "b" },
        { type: "L", x: 0, xRef: "l", y: 0, yRef: "b" },
      ]
    },
    _U:{
      ratio:{w:112,h:100},
      data:[
        {type: "M",x:0,xRef:"l",y:0,yRef:"t"},
        { type: "L", x: -5, xRef: "c", y: 0, yRef: "t" },
        { type: "L", x: -5, xRef: "c", y: 10, yRef: "c" },
        { type: "L", x: 5, xRef: "c", y: 10, yRef: "c" },
        { type: "L", x: 5, xRef: "c", y: 0, yRef: "t" },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "t" },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "b" }, 
        { type: "L", x: 0, xRef: "l", y: 0, yRef: "b" },   
      ]
    },
    _H:{
      ratio:{w:112,h:100},
      data:[
        {type: "M",x:0,xRef:"l",y:0,yRef:"t"},
        { type: "L", x: -20, xRef: "c", y: 0, yRef: "t" },
        { type: "L", x: -20, xRef: "c", y: -20, yRef: "c" },
        { type: "l", x: [40], y: [0] },
        { type: "L", x: 20, xRef: "c", y: 0, yRef: "t" },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "t" },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "b" },
        { type: "L", x: 20, xRef: "c", y: 0, yRef: "b" },
        { type: "L", x: 20, xRef: "c", y: 20, yRef: "c" },
        { type: "L", x: -20, xRef: "c", y: 20, yRef: "c" },
        { type: "L", x: -20, xRef: "c", y: 0, yRef: "b" },
        { type: "L", x: 0, xRef: "l", y: 0, yRef: "b" },

      ]
    },
    _R: {
      ratio: { w: 112, h: 100 },
      data: [
        { type: "M", x: 0, xRef: "l", y: 0, yRef: "t" },
        { type: "L", x: 22, xRef: "r", y: 0, yRef: "t" },
        { type: "c", x: [12.15, 22, 22], y: [0, 9.85, 22] },
        { type: "L", x: 0, xRef: "r", y: 38, yRef: "b" },
        { type: "l", x: [-13, 10], y: [13, 25] },
        { type: "L", x: 10, xRef: "c", y: 0, yRef: "b" },
        { type: "L", x: 0, xRef: "c", y: 25, yRef: "b" },
        { type: "L", x: -5, xRef: "c", y: 25, yRef: "b" },
        { type: "L", x: -5, xRef: "c", y: 0, yRef: "b" },
        { type: "L", x: 0, xRef: "l", y: 0, yRef: "b" },
        { type: "M", x: -5, xRef: "c", y: 25, yRef: "t" },
        { type: "L", x: -5, xRef: "c", y: 50, yRef: "b" },
        { type: "l", x: [10], y: [0] },
        { type: "L", x: 5, xRef: "c", y: 25, yRef: "t" },
      ],
    },
    _I: {
      ratio: { w: 50, h: 100 },
      data: [
        { type: "M", x: 0, xRef: "l", y: 0, yRef: "t" },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "t" },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "b" },
        { type: "L", x: 0, xRef: "l", y: 0, yRef: "b" },
      ],
    },
    _F: {
      ratio: { w: 112, h: 100 },
      data: [
        { type: "M", x: 0, xRef: "l", y: 0, yRef: "t" },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "t" },
        {
          type: "l",
          x: [0, -62, 0, 30.5, 0, -30.5],
          y: [25, 0, 12.5, 0, 25, 0],
        },
        { type: "L", x: 62, xRef: "r", y: 0, yRef: "b" },
        { type: "L", x: 0, xRef: "l", y: 0, yRef: "b" },
      ],
    },
    _E: {
      ratio: { w: 112, h: 100 },
      data: [
        { type: "M", x: 0, xRef: "l", y: 0, yRef: "t" },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "t" },
        {
          type: "l",
          x: [0, -62, 0, 30.5, 0, -30.5, 0, 62],
          y: [25, 0, 12.5, 0, 25, 0, 12.5, 0],
        },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "b" },
        { type: "L", x: 0, xRef: "l", y: 0, yRef: "b" },
      ],
    },
    _A: {
      ratio: { w: 136, h: 100 },
      data: [
        { type: "M", x: 0, xRef: "l", y: 0, yRef: "b" },
        { type: "L", x: 29, xRef: "l", y: 0, yRef: "t" },
        { type: "L", x: 29, xRef: "r", y: 0, yRef: "t" },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "b" },
        { type: "L", x: 52.8, xRef: "r", y: 0, yRef: "b" },
        { type: "L", x: 58, xRef: "r", y: 17.5, yRef: "b" },
        { type: "L", x: 58, xRef: "l", y: 17.5, yRef: "b" },
        { type: "L", x: 52.8, xRef: "l", y: 0, yRef: "b" },
        // { type: "M", x: 0, xRef: "c", y: 10, yRef: "t"},
        // { type: "l", x: [20, -40  ], y: [20, 0] },

      ],
    },
    _T: {
      ratio: { w: 112, h: 100 },
      data: [
        { type: "M", x: 0, xRef: "l", y: 0, yRef: "t" },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "t" },
        { type: "L", x: 0, xRef: "r", y: 25, yRef: "t" },
        { type: "L", x: 30, xRef: "r", y: 25, yRef: "t" },
        { type: "L", x: 30, xRef: "r", y: 0, yRef: "b" },
        { type: "L", x: 30, xRef: "l", y: 0, yRef: "b" },
        { type: "L", x: 30, xRef: "l", y: 25, yRef: "t" },
        { type: "L", x: 0, xRef: "l", y: 25, yRef: "t" },
      ],
    },
    _N: {
      ratio: { w: 112, h: 100 },
      data: [
        { type: "M", x: 0, xRef: "l", y: 0, yRef: "t" },
        { type: "L", x: -6, xRef: "c", y: 0, yRef: "t" },
        { type: "l", x: [12, 0], y: [26, -26] },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "t" },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "b" },
        { type: "L", x: 6, xRef: "c", y: 0, yRef: "b" },
        { type: "l", x: [-12, 0], y: [-26, 26] },
        { type: "L", x: 0, xRef: "l", y: 0, yRef: "b" },
      ],
    },
    _O: {
      ratio: { w: 112, h: 100 },
      data: [
        { type: "M", x: 22, xRef: "l", y: 0, yRef: "t" },
        { type: "L", x: 22, xRef: "r", y: 0, yRef: "t" },
        { type: "c", x: [12.15, 22, 22], y: [0, 9.85, 22] },
        { type: "L", x: 0, xRef: "r", y: 22, yRef: "b" },
        { type: "c", x: [0, -9.85, -22], y: [12.15, 22, 22] },
        { type: "L", x: 22, xRef: "l", y: 0, yRef: "b" },
        { type: "c", x: [-12.15, -22, -22], y: [0, -9.85, -22] },
        { type: "L", x: 0, xRef: "l", y: 22, yRef: "t" },
        { type: "c", x: [0, 9.85, 22], y: [-12.15, -22, -22] },
        { type: "M", x: -5, xRef: "c", y: 25, yRef: "t" },
        { type: "L", x: -5, xRef: "c", y: 25, yRef: "b" },
        { type: "l", x: [10], y: [0] },
        { type: "L", x: 5, xRef: "c", y: 25, yRef: "t" },
      ],
    },
    _S: {
      ratio: { w: 112, h: 100 },
      data: [
        { type: "M", x: 0, xRef: "l", y: 22, yRef: "t" },
        { type: "c", x: [0, 9.85, 22], y: [-12.15, -22, -22] },
        { type: "L", x: 0, xRef: "r", y: 0, yRef: "t" },
        { type: "l", x: [0, -52, 52], y: [25, 0, 25] },
        { type: "L", x: 0, xRef: "r", y: 22, yRef: "b" },
        { type: "c", x: [0, -9.85, -22], y: [12.15, 22, 22] },
        { type: "L", x: 0, xRef: "l", y: 0, yRef: "b" },
        { type: "l", x: [0, 52, -52], y: [-25, 0, -25] },
      ],
    },
  },
  textDesk = [
    [
      { letter: settings._A, flex: 1 },
      { letter: settings._Y },
      { letter: settings._U },
      { letter: settings._S },
      { letter: settings._H, flex: 0 },
    ],
    // [
    //   { letter: settings._T },
    //   { letter: settings._R, flex: 1 },
    //   { letter: settings._I, flex: 0 },
    //   { letter: settings._O },
    // ],
    [
      { letter: settings._B,flex:1 },
      { letter: settings._A },
      { letter: settings._N },
      { letter: settings._S },
      { letter: settings._A},
      { letter: settings._L,flex:0},
    ],
  ],
  textMob = [
    [{ letter: settings._A }],
    [{ letter: settings._B }],
    // [{ letter: settings._F }],
  ],
  text = textDesk,
  easeInOutCubic = function (e, t) {
    return e <= t.before
      ? 0
      : e >= t.after
      ? 1
      : ((e -= t.before),
        (function (e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 3)
            : 0.5 * (Math.pow(e - 2, 3) + 2);
        })((e /= t.after - t.before)));
  };
function drawFrameBg() {
  (settings.layout = calcLayout2(text, settings.helpers)),
    (settings.d = drawLetters(text, settings.layout, settings.helpers.mf)),
    path.setAttribute("d", settings.d);
}
function animateBg() {
  drawFrameBg(), requestAnimationFrame(animateBg);
}
function setSvgViewbox() {
  text = window.innerWidth < window.innerHeight ? textMob : textDesk;
  let e = parseFloat(40);
  (settings.wrapper.w = div.offsetWidth - 2 * e),
    (settings.wrapper.h = div.offsetHeight - 2 * e);
  let t = "0 0 " + settings.wrapper.w + " " + settings.wrapper.h;
  svg.setAttribute("viewBox", t);
}
function calcHelpers(e) {
  let t = { w: void 0, h: void 0 };
  t.h = (e.length - 1) * settings.letterGap + e.length * settings.letterRatioH;
  let y = [],
    r = [];
  for (var f = 0; f < e.length; f++) {
    let t = 0;
    r[f] = [];
    for (var x = 0; x < e[f].length; x++)
      (t += e[f][x].letter.ratio.w), (r[f][x] = { add: 1, start: "left" });
    (t += (e[f].length - 1) * settings.letterGap), y.push(t);
  }
  t.w = Math.max(...y);
  let s = t.w / t.h,
    n = settings.wrapper.w / settings.wrapper.h;
  return i(
    n > s ? settings.wrapper.h / t.h : n < s ? settings.wrapper.w / t.w : 1
  );
  function i(e) {
    let t = y.map(function (t) {
      return settings.wrapper.w - t * e;
    });
    return { mf: e, spaces: t, structure: r };
  }
}
function calcLayout2(e, t) {
  let y = [],
    r = settings.letterGap * t.mf,
    f = (0.7 * (settings.wrapper.h - r * (e.length - 1))) / e.length,
    x = 0.3 * (settings.wrapper.h - r * (e.length - 1)),
    s = 0,
    n = 0;
  mouse.x += (pos.x - mouse.x) / 10;
  let i = mouse.x / window.innerWidth;
  mouse.y += (pos.y - mouse.y) / 10;
  let a = mouse.y / window.innerHeight,
    p = { before: i <= 0.3 ? 0 : i - 0.3, after: i >= 0.7 ? 1 : i + 0.3 },
    R = { before: a <= 0.3 ? 0 : a - 0.3, after: a >= 0.7 ? 1 : a + 0.3 },
    l = 1 / e.length,
    o = 0;
  for (var c = 0; c < e.length; c++) {
    let i = easeInOutCubic(l * (c + 1), R) - o;
    o += i;
    let a = f + i * x;
    y[c] = [];
    let d = t.spaces[c],
      g = 1 / e[c].length,
      h = 0;
    for (var u = 0; u < e[c].length; u++) {
      let f,
        x = e[c][u].letter.ratio.w * t.mf,
        i = easeInOutCubic(g * (u + 1), p) - h,
        R = i * d;
      if (((h += i), R > 0 && t.structure[c][u].add >= 1))
        (t.structure[c][u].add = 0.5),
          (f = R * t.structure[c][u].add),
          (t.structure[c][u].start =
            pos.x > settings.wrapper.w / 2 ? "right" : "left");
      else if (R > 0 && t.structure[c][u].add < 1) {
        let e = (1 - t.structure[c][u].add) / 10;
        (t.structure[c][u].add += e), (f = R * t.structure[c][u].add);
      } else (f = 0), (t.structure[c][u].add = 1);
      let l = x + R,
        o = x + R,
        w = "right" == t.structure[c][u].start ? o - l : 0;
      y[c].push({ w: l, h: a, x: s + w, y: n }), (s += o + r);
    }
    (s = 0), (n += a + r);
  }
  return y;
}
function drawLetters(e, t, y) {
  let r = "";
  for (var f = 0; f < e.length; f++)
    for (var x = 0; x < e[f].length; x++)
      r += makePathD(e[f][x].letter.data, t[f][x], 0.7 * y) + " ";
  return r;
}
function makePathD(e, t, y) {
  let r = "";
  for (var f = 0; f < e.length; f++)
    switch (e[f].type) {
      case "M":
        r +=
          "" === r
            ? "M " + s(e[f].x, e[f].xRef) + "," + n(e[f].y, e[f].yRef) + " "
            : "z M " + s(e[f].x, e[f].xRef) + "," + n(e[f].y, e[f].yRef) + " ";
        break;
      case "L":
        r += "L " + s(e[f].x, e[f].xRef) + "," + n(e[f].y, e[f].yRef) + " ";
        break;
      case "l":
        for (var x = 0; x < e[f].x.length; x++)
          r += "l " + s(e[f].x[x]) + "," + n(e[f].y[x]) + " ";
        break;
      case "c":
        r +=
          "c " +
          s(e[f].x[0]) +
          "," +
          n(e[f].y[0]) +
          "," +
          s(e[f].x[1]) +
          "," +
          n(e[f].y[1]) +
          "," +
          s(e[f].x[2]) +
          "," +
          n(e[f].y[2]) +
          " ";
    }
  return r + "z";
  function s(e, y) {
    switch (y) {
      case "l":
        return i(e, 0) + t.x;
      case "c":
        return i(e, t.w / 2) + t.x;
      case "r":
        return i(-e, t.w) + t.x;
      default:
        return i(e);
    }
  }
  function n(e, y) {
    switch (y) {
      case "t":
        return i(e, 0) + t.y;
      case "c":
        return i(e, t.h / 2) + t.y;
      case "b":
        return i(-e, t.h) + t.y;
      default:
        return i(e);
    }
  }
  function i(e, t = 0) {
    return "object" == typeof e
      ? e.forEach(function (e) {
          e = t + e * y;
        })
      : "number" == typeof e
      ? t + e * y
      : void 0;
  }
}
// window.addEventListener("load", function () {
  div.classList.add("transition"),
    setSvgViewbox(),
    (settings.helpers = calcHelpers(text)),
    drawFrameBg(),
    animateBg();
// }),
  window.addEventListener("resize", function () {
    setSvgViewbox(), (settings.helpers = calcHelpers(text));
  });
window.addEventListener("load", function () {
  div.classList.add("transition"),
    setSvgViewbox(),
    (settings.helpers = calcHelpers(text)),
    drawFrameBg(),
    animateBg();
})