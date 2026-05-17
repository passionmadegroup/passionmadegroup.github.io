(function () {
  // Highlight active nav link based on current page
  var path = location.pathname.split("/").pop().toLowerCase();
  if (!path || path === "" || path === "index" || path === "index.html") path = "index.html";
  var links = document.querySelectorAll(".top-nav a[data-page]");
  links.forEach(function (a) {
    if (a.dataset.page === path) a.classList.add("is-active");
    else a.classList.remove("is-active");
  });

  // Mobile hamburger toggle
  var topBar = document.querySelector(".top-bar");
  var btn = document.querySelector(".nav__toggle");
  if (!topBar || !btn) return;

  function setOpen(open) {
    topBar.setAttribute("data-nav-open", open ? "true" : "false");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("has-nav-open", open);
  }
  setOpen(false);

  btn.addEventListener("click", function () {
    var isOpen = topBar.getAttribute("data-nav-open") === "true";
    setOpen(!isOpen);
  });

  // Close menu when any nav link is clicked
  links.forEach(function (a) {
    a.addEventListener("click", function () { setOpen(false); });
  });

  // Close on Esc
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && topBar.getAttribute("data-nav-open") === "true") setOpen(false);
  });

  // Reset state if viewport crosses the breakpoint
  var mq = window.matchMedia("(min-width: 721px)");
  function onChange() { if (mq.matches) setOpen(false); }
  if (mq.addEventListener) mq.addEventListener("change", onChange);
  else mq.addListener(onChange);
})();
