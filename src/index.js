third = document.getElementsByClassName("third")[0];
firstcontent = third.getElementsByClassName("firstcontent")[0];
secondcontent = third.getElementsByClassName("secondcontent")[0];
secondcontent.addEventListener("mouseenter", () => {
  firstcontent.classList.add("s-white");
});
secondcontent.addEventListener("mouseleave", () => {
  firstcontent.classList.remove("s-white");
});

second = document.getElementsByClassName("second")[0];
about = second.getElementsByClassName("about")[0];
latin = about.getElementsByTagName("p")[2];
latin.addEventListener("mouseenter", () => {
  latin.innerHTML = "I shall either find a way or make one";
});
latin.addEventListener("mouseleave", () => {
  latin.innerHTML = "Aut inveniam viam aut faciam";
});
footer = document.getElementsByClassName("footer")[0];
social_button = footer.getElementsByClassName("social-button")[0];
trigger_button = footer.getElementsByClassName("trigger-button")[0];
function mango() {
  social_button.classList.toggle("social-button-old");
  social_button.classList.toggle("social-button-new");
  trigger_button.classList.toggle("rotate");
}
trigger_button.addEventListener("click", mango);

function setTransitionInSkill() {
  dialog = document.getElementsByClassName("dialog")[1];
  skill = dialog.getElementsByClassName("skill")[0];
  showp = Array.from(skill.getElementsByClassName("showp"));
  button = Array.from(skill.getElementsByClassName("button"));
  current_show = 0;
  visibleClass = config.isLandscape ? "main-visible" : "dialog-visible";
  hiddenClass = config.isLandscape ? "main-hidden" : "dialog-hidden";
  showp[0].classList.add(visibleClass)
  showp[1].classList.add(hiddenClass)
  showp[2].classList.add(hiddenClass)
  button[1].addEventListener("click", () => {
    if (current_show != 0) {
      button[1].classList.remove("none");
      button[0].classList.remove("none");
      showp[current_show].classList.add(hiddenClass);
      showp[current_show].classList.remove(visibleClass);
      current_show--;
      if (current_show == 0) {
        button[1].classList.add("none");
      }
    }
  });
  button[0].addEventListener("click", () => {
    if (current_show != 2) {
      button[0].classList.remove("none");
      button[1].classList.remove("none");
      showp[current_show + 1].classList.add(visibleClass);
      showp[current_show + 1].classList.remove(hiddenClass);
      current_show++;
      if (current_show == 2) {
        button[0].classList.add("none");
      }
    }
  });
}
class Skill {
  constructor(ele) {
    this.ele = document.getElementsByClassName("showp")[ele];
    this.currentSkillDiv = 1;
    this.transitionValueInSkill = 0;
    this.grid = this.ele.getElementsByClassName("grid")[0];
    this.row = Array.from(this.grid.getElementsByClassName("row"));
    // this.x = this.grid.clientHeight/this.row.length;
    this.x = config.isLandscape ?(this.ele.offsetHeight>560)?180:90 : 90;
    this.m;
    this.n;
  }
  skilldivuppereventfunction() {
    if (this.currentSkillDiv != this.row.length - 1) {
      this.row[this.currentSkillDiv + 1].removeEventListener("click", this.n);
      this.row[this.currentSkillDiv + 1].classList.remove("blurr");
    }
    this.row[this.currentSkillDiv - 1].removeEventListener("click", this.m);
    this.row[this.currentSkillDiv - 1].classList.remove("blurr");
    if (this.currentSkillDiv > 0) {
      this.row.forEach((e) => {
        e.style.transform = `translateY(${
          this.transitionValueInSkill + this.x
        }px)`;
      });
      this.row[
        this.currentSkillDiv - 1
      ].style.transform = `translateY(${(this.transitionValueInSkill =
        this.transitionValueInSkill + this.x)}px) scale(1.3)`;
      this.currentSkillDiv -= 1;
    }
    this.setTransition();
  }
  skilldivbeloweventfunc() {
    this.row[this.currentSkillDiv + 1].removeEventListener("click", this.n);
    this.row[this.currentSkillDiv + 1].classList.remove("blurr");
    if (this.currentSkillDiv != 0) {
      this.row[this.currentSkillDiv - 1].removeEventListener("click", this.m);
      this.row[this.currentSkillDiv - 1].classList.remove("blurr");
    }
    if (this.currentSkillDiv < this.row.length - 1) {
      this.row.forEach((e) => {
        e.style.transform = `translateY(${
          this.transitionValueInSkill - this.x
        }px)`;
      });
      this.row[
        this.currentSkillDiv + 1
      ].style.transform = `translateY(${(this.transitionValueInSkill =
        this.transitionValueInSkill - this.x)}px) scale(1.3)`;
      this.currentSkillDiv += 1;
    }

    this.setTransition();
  }
  setTransition() {
    this.m = this.skilldivuppereventfunction.bind(this);
    this.n = this.skilldivbeloweventfunc.bind(this);
    if (this.currentSkillDiv > 0) {
      this.row[this.currentSkillDiv - 1].addEventListener("click", this.m);
      this.row[this.currentSkillDiv - 1].classList.add("blurr");
    }
    if (this.currentSkillDiv < this.row.length - 1) {
      this.row[this.currentSkillDiv + 1].addEventListener("click", this.n);
      this.row[this.currentSkillDiv + 1].classList.add("blurr");
    }
  }
}

projects = ["restaurent", "tic"];

function projectdivselector(projects) {
  x = Array(3);
  x[0] = projects.map((e) => {
    return `#${e}-slideshow > div:gt(0)`;
  });
  x[1] = projects.map((e) => {
    return `#${e}-slideshow > div:first`;
  });
  x[2] = projects.map((e) => {
    return `#${e}-slideshow`;
  });
  return x;
}
projectsdiv = projectdivselector(projects);
for (let i = 0; i < projects.length; i++) {
  $(projectsdiv[0][i]).hide();
  setInterval(function () {
    $(projectsdiv[1][i])
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo(projectsdiv[2][i]);
  }, 3000);
}

// ---------------init functions ---------------------------------------
const disableBodyScroll = bodyScrollLock.disableBodyScroll,
  enableBodyScroll = bodyScrollLock.enableBodyScroll;
(config = { boards: [] }),
  (d = {
    num: void 0,
    board: void 0,
    dialog: void 0,
    main: document.getElementsByTagName("main")[0],
    isBgBlocked: !1,
    isLandscape: void 0,
  });
function configurate() {
  let e = {
      isTouch: "ontouchstart" in window || navigator.maxTouchPoints,
      isLandscape: window.innerWidth / window.innerHeight > 1,
      isAnimate: !1,
      scrollNow: window.config.scrollNow || 0,
      delta: 0,
      boards: [],
      animation: 500,
      animStart: 0,
    },
    n = Array.from(document.getElementsByClassName("dialog"));
  function o(e, n) {
    let o =
      (window.config.boards.hasOwnProperty(n) &&
        window.config.boards[n].current) ||
      0;
    (this.el = e),
      (this.w = (function (e) {
        let n = Array.from(e.children),
          o = window.innerWidth;
        return (
          n.forEach(function (e) {
            o -= e.offsetWidth;
          }),
          o
        );
      })(e)),
      (this.prev = o),
      (this.current = o);
  }
  n.unshift(document.getElementsByTagName("main")[0]);
  n.forEach(function (n, i) {
    e.boards.push(new o(n.children[0], i));
  });
  return e;
}
function init() {
  !(config = configurate()).isTouch && config.isLandscape
    ? (document.body.classList.add("notouch"),
      attachScroll(),
      (config.isAnimate = !0))
    : (detachScroll(),
      document.body.classList.remove("notouch"),
      (config.isAnimate = !1),
      config.boards.forEach(function (e) {
        (e.el.style = ""), (e.prev = 0), (e.current = 0);
      })),
    config.isLandscape &&
      d.isBgBlocked &&
      config.isLandscape != d.isLandscape &&
      (enableBodyScroll(d.dialog), (d.isBgBlocked = !1));
}
function attachScroll() {
  "onwheel" in document
    ? window.addEventListener("wheel", onWheel)
    : "onmousewheel" in document
    ? window.addEventListener("mousewheel", onWheel)
    : window.addEventListener("MozMousePixelScroll", onWheel);
}
function detachScroll() {
  "onwheel" in document
    ? window.removeEventListener("wheel", onWheel)
    : "onmousewheel" in document
    ? window.removeEventListener("mousewheel", onWheel)
    : window.removeEventListener("MozMousePixelScroll", onWheel);
}
function onWheel(e) {
  var n = (e = e || window.event).deltaY || e.detail || -e.wheelDelta;
  (n *= 1 === e.deltaMode ? 16 : 1), (config.delta = -0.5 * n);
}
function animate() {
  let e = performance.now(),
    n = config.animation + config.animStart <= e;
  config.isAnimate && n && drawFrame(), requestAnimationFrame(animate);
}
function drawFrame() {
  let e = config.boards[config.scrollNow];
  e.current > 0
    ? (e.current = 0.9 * e.current + config.delta / 4)
    : e.current < e.w
    ? (e.current = e.w - 0.9 * (e.w - e.current) + config.delta / 4)
    : (e.current = e.prev + config.delta),
    (config.delta *= 0.9),
    (e.el.style = "transform: translate3D(" + e.current + "px, 0, 0 );"),
    (e.prev = e.current);
}

function openDialog(e) {
  (d.num = e),
    (d.board = config.boards[e]),
    (d.dialog = config.boards[e].el.parentNode),
    (d.board.prev = 0),
    (d.board.current = 0),
    (d.board.el.style = ""),
    d.dialog.scroll(0, 0),
    d.dialog.classList.add("dialog-visible"),
    d.dialog.classList.remove("dialog-hidden"),
    d.main.classList.add("main-hidden"),
    d.main.classList.remove("main-visible"),
    config.isLandscape ||
      (disableBodyScroll(d.dialog),
      (d.isBgBlocked = !0),
      (d.isLandscape = config.isLandscape)),
    (config.animStart = performance.now()),
    (config.scrollNow = e);
}
function closeDialog(e) {
  d.dialog.classList.remove("dialog-visible"),
    d.dialog.classList.add("dialog-hidden"),
    d.main.classList.remove("main-hidden"),
    d.main.classList.add("main-visible"),
    config.isLandscape || (enableBodyScroll(d.dialog), (d.isBgBlocked = !1)),
    (config.animStart = performance.now());
  config.scrollNow = 0;
}

function setVh() {
  let e = 0.01 * window.innerHeight;
  document.documentElement.style.setProperty("--vh", `${e}px`);
}
document.addEventListener("DOMContentLoaded", function () {
  setVh();
}),
  window.addEventListener("load", function () {
    init();
  }),
  window.addEventListener("resize", function () {
    init(), setVh();
  }),
  init(),
  animate();
setTransitionInSkill();

for (let i = 0; i < 3; i++) {
  a = new Skill(i);
  a.setTransition();
  document
    .getElementsByClassName("showp")
    [i].getElementsByClassName("row")[0]
    .click();
}
