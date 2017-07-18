webpackJsonp([1],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      items: ["item1", "item2"],
      selectedItems: []
    };
  }
});

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row col-sm-12"
  }, [_vm._l((_vm.items), function(i) {
    return [_c('span', {
      staticClass: "checkToggle1-01"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.selectedItems),
        expression: "selectedItems"
      }],
      attrs: {
        "type": "checkbox",
        "id": i
      },
      domProps: {
        "value": i,
        "checked": Array.isArray(_vm.selectedItems) ? _vm._i(_vm.selectedItems, i) > -1 : (_vm.selectedItems)
      },
      on: {
        "__c": function($event) {
          var $$a = _vm.selectedItems,
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = i,
              $$i = _vm._i($$a, $$v);
            if ($$c) {
              $$i < 0 && (_vm.selectedItems = $$a.concat($$v))
            } else {
              $$i > -1 && (_vm.selectedItems = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
            }
          } else {
            _vm.selectedItems = $$c
          }
        }
      }
    }), _vm._v(" "), _c('label', {
      staticClass: "checkToggle1-01_bg",
      attrs: {
        "for": i
      }
    }, [_c('span', {
      staticClass: "checkToggle1-01_switch"
    }, [_vm._v("\n           \n        ")])]), _vm._v(" "), _c('label', {
      staticClass: "checkToggle1-01_vlabel",
      attrs: {
        "for": i
      }
    }, [_vm._v("\n        " + _vm._s(i) + "\n      ")])])]
  }), _vm._v(" "), _c('p', [_vm._v("Selected: " + _vm._s(_vm.selectedItems))])], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-41dc639e", module.exports)
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(12),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\WINDOWS\\GD2\\web\\_node_dev\\td_git_vueCheckToggle1\\src\\vue-components\\CheckToggle1.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CheckToggle1.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41dc639e", Component.options)
  } else {
    hotAPI.reload("data-v-41dc639e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});