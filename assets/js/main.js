/* =========================================================
   站点交互：导航高亮 / 侧边目录跟随 / 一键复制
   ========================================================= */
(function () {
  "use strict";

  /* ---------- 1. 顶栏高亮 ---------- */
  var current = document.body.getAttribute("data-page");
  if (current) {
    document.querySelectorAll(".nav a").forEach(function (a) {
      if (a.getAttribute("data-nav") === current) a.classList.add("active");
    });
  }

  /* ---------- 2. 侧边目录滚动跟随 ---------- */
  var sideLinks = Array.prototype.slice.call(
    document.querySelectorAll(".side a[href^='#']")
  );

  if (sideLinks.length) {
    var targets = sideLinks
      .map(function (a) {
        var el = document.getElementById(a.getAttribute("href").slice(1));
        return el ? { link: a, el: el } : null;
      })
      .filter(Boolean);

    var ticking = false;

    function update() {
      var pos = window.scrollY + 120;
      var activeIdx = -1;

      for (var i = 0; i < targets.length; i++) {
        if (targets[i].el.offsetTop <= pos) activeIdx = i;
      }

      sideLinks.forEach(function (a) {
        a.classList.remove("active");
      });

      if (activeIdx >= 0) targets[activeIdx].link.classList.add("active");
      else if (targets.length) targets[0].link.classList.remove("active");

      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(update);
        }
      },
      { passive: true }
    );

    update();
  }

  /* ---------- 3. 复制按钮 ---------- */
  function legacyCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-1000px";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
    } catch (e) {
      /* 忽略：浏览器不支持时用户可手动选择 */
    }
    document.body.removeChild(ta);
  }

  document.querySelectorAll(".copy").forEach(function (box) {
    var btn = box.querySelector(".copy-btn");
    var pre = box.querySelector("pre");
    if (!btn || !pre) return;

    btn.addEventListener("click", function () {
      var text = pre.innerText;

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).catch(function () {
          legacyCopy(text);
        });
      } else {
        legacyCopy(text);
      }

      var old = btn.textContent;
      btn.textContent = "已复制";
      btn.classList.add("done");
      window.setTimeout(function () {
        btn.textContent = old;
        btn.classList.remove("done");
      }, 1600);
    });
  });
})();
