webpackJsonp([55],{484:function(o,t,e){e(736);var n=e(0)(e(545),e(679),"data-v-4ae63977",null);n.options.__file="/zuv/wui/zuv-front/view/src/demo/page/index.vue",n.esModule&&Object.keys(n.esModule).some(function(o){return"default"!==o&&"__esModule"!==o})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),o.exports=n.exports},545:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{message:"首页"}},mounted:function(){console.log("mounted"),this.$info("mounted")},methods:{_on_goto_page:function(o){console.log("_on_goto_page",o),this.$router.push(o)},_on_goto_docs:function(){console.log("_on_goto_docs"),window.location.href="http://www.zuv.cc/view/"},_on_goto_github:function(){console.log("_on_goto_github"),window.location.href="https://github.com/zview/view"}}}},621:function(o,t,e){t=o.exports=e(20)(),t.push([o.i,"",""])},679:function(o,t,e){o.exports={render:function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"page-index"},[e("Navbar",{attrs:{title:"首页",color:"balanced"}}),o._v(" "),e("Page",{attrs:{"has-navbar":!0,"has-tabbar":!0}},[e("List",[e("Item",{attrs:{note:"Demo"},nativeOn:{click:function(t){o._on_goto_page("/demo")}}},[o._v("示例")]),o._v(" "),e("Item",{attrs:{note:"Docs"},nativeOn:{click:function(t){o._on_goto_docs(t)}}},[o._v("文档")]),o._v(" "),e("Item",{attrs:{note:"Github"},nativeOn:{click:function(t){o._on_goto_github(t)}}},[o._v("源码")])],1)],1)],1)},staticRenderFns:[]},o.exports.render._withStripped=!0},736:function(o,t,e){var n=e(621);"string"==typeof n&&(n=[[o.i,n,""]]);e(25)(n,{});n.locals&&(o.exports=n.locals)}});