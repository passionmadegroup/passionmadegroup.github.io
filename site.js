(function () {
  // Highlight active nav link based on the current page filename
  var path = location.pathname.split("/").pop().toLowerCase();
  if (!path || path === "" || path === "index" || path === "index.html") path = "index.html";
  var links = document.querySelectorAll(".top-nav a[data-page]");
  links.forEach(function (a) {
    if (a.dataset.page === path) a.classList.add("is-active");
    else a.classList.remove("is-active");
  });
})();
