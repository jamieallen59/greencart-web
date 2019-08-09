webpackHotUpdate("styles",{

/***/ "./components/Headers/index.scss":
/*!***************************************!*\
  !*** ./components/Headers/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"headerBase":"headerBase___x1Nbr","headerOne":"headerOne___2aBHH headerBase___x1Nbr","headerThree":"headerThree___23PtV headerBase___x1Nbr"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1565371542598");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.6e4b08c9a51dce94551f.hot-update.js.map