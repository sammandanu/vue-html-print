module.exports = (function(e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var n = {};
  return (
    (t.m = e),
    (t.c = n),
    (t.d = function(e, n, r) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: r
        });
    }),
    (t.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = ""),
    t((t.s = 0))
  );
})([
  function(e, t, n) {
    "use strict";
    function r(e, t) {
      t.forEach(function(t) {
        var n = e.document.createElement("link");
        n.setAttribute("rel", "stylesheet"),
          n.setAttribute("type", "text/css"),
          n.setAttribute("href", t),
          e.document.getElementsByTagName("head")[0].appendChild(n);
      });
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = {
        install: function(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          e.prototype.$htmlToPaper = function(e, n) {
            var o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : function() {
                      return !0;
                    },
              l = ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
              u = [],
              i = t.name,
              s = void 0 === i ? "_blank" : i,
              c = t.specs,
              a = void 0 === c ? l : c,
              d = t.replace,
              p = void 0 === d || d,
              f = t.styles,
              m = void 0 === f ? u : f;
            n &&
              (n.name && (s = n.name),
              n.specs && (a = n.specs),
              n.replace && (p = n.replace),
              n.styles && (m = n.styles)),
              console.warn(m),
              (a = a.length ? a.join(",") : "");
            var y = document.getElementById(e);
            if (!y) return void alert("Element to print #" + e + " not found!");
            var v = window.open("", s, a, p);
            return (
              v.document.write(
                "\n        <html>\n          <head>\n            <title>" +
                  localStorage.print_title +
                  "</title>\n<style>.loading-container {position: fixed;background-color: #66773b;-webkit-transition: all 0.5s linear;transition: all 0.5s linear;width: 100%;height: 100%;top: 0;left: 0;z-index: 1041; display: flex; justify-content: center; align-items: center;} </style>\n          </head>\n          <body>\n            " +
                  y.innerHTML +
                  "\n          <div class='loading-container'>Please wait, Your Print copy preparing...</div>\n          </body>\n        </html>\n      "
              ),
              r(v, m),
              setTimeout(function() {
                v.document.querySelector(".loading-container").remove(),
                  v.document.close(),
                  v.focus(),
                  v.print(),
                  v.close(),
                  o();
              }, 3e3),
              !0
            );
          };
        }
      });
  }
]);
