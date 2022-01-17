/* Preloader */
setTimeout(function() {
  const l = doc.getElementById("preloader").style,
    s = (s, p) => l.setProperty(s, p),
    t = "transition",
    w = "opacity 4.5s",
    v = "visible";
  s("-webkit-" + t, w), s("-moz-" + t, w), s("-ms-" + t, w), s("-o-" + t, w), s(t, w), s("opacity", "0"), s("overflow", v), s("visibility", "hidden"), doc.getElementsByTagName("body")[0].style.overflow = v
}, 1500);
