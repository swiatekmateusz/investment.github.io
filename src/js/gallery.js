/* eslint-disable */
const initPhotoSwipeFromDOM = function (e) { const t = function (e) { (e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1; const t = function e(t, n) { return t && (n(t) ? t : e(t.parentNode, n)) }(e.target || e.srcElement, e => e.tagName && "FIGURE" === e.tagName.toUpperCase()); if (!t) return; const i = t.parentNode, { childNodes: o } = t.parentNode, r = o.length; let l, s = 0; for (let e = 0; e < r; e++)if (1 === o[e].nodeType) { if (o[e] === t) { l = s; break } s++ } return l >= 0 && n(l, i), !1 }; var n = function (e, t, n, i) { const o = document.querySelectorAll(".pswp")[0]; let r, l, s; if (s = function (e) { const t = e.childNodes, n = t.length, i = []; let o, r, l, s; for (let e = 0; e < n; e++)1 === (o = t[e]).nodeType && (l = (r = o.children[0]).getAttribute("data-size").split("x"), s = { src: r.getAttribute("href"), w: parseInt(l[0], 10), h: parseInt(l[1], 10) }, o.children.length > 1 && (s.title = o.children[1].innerHTML), r.children.length > 0 && (s.msrc = r.children[0].getAttribute("src")), s.el = o, i.push(s)); return i }(t), l = { galleryUID: t.getAttribute("data-pswp-uid"), getThumbBoundsFn(e) { const t = s[e].el.getElementsByTagName("img")[0], n = window.pageYOffset || document.documentElement.scrollTop, i = t.getBoundingClientRect(); return { x: i.left, y: i.top + n, w: i.width } } }, i) if (l.galleryPIDs) { for (let t = 0; t < s.length; t++)if (s[t].pid == e) { l.index = t; break } } else l.index = parseInt(e, 10) - 1; else l.index = parseInt(e, 10); isNaN(l.index) || (n && (l.showAnimationDuration = 0), (r = new PhotoSwipe(o, PhotoSwipeUI_Default, s, l)).init()) }; const i = document.querySelectorAll(e); for (let e = 0, n = i.length; e < n; e++)i[e].setAttribute("data-pswp-uid", e + 1), i[e].onclick = t; const o = function () { const e = window.location.hash.substring(1), t = {}; if (e.length < 5) return t; const n = e.split("&"); for (let e = 0; e < n.length; e++) { if (!n[e]) continue; const i = n[e].split("="); i.length < 2 || (t[i[0]] = i[1]) } return t.gid && (t.gid = parseInt(t.gid, 10)), t }(); o.pid && o.gid && n(o.pid, i[o.gid - 1], !0, !0) }; initPhotoSwipeFromDOM(".my-gallery");