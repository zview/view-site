webpackJsonp([13],{532:function(e,t,o){o(748);var n=o(0)(o(594),o(691),"data-v-667906c6",null);n.options.__file="/zuv/wui/zuv-front/view/src/demo/page/page_service_popup.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] page_service_popup.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},594:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{message:"自定义弹层"}},methods:{_on_popup1:function(){var e=this,t={effect:"scale",title:"",buttons:[{text:"确定"},{text:"取消"}]};e.$popup.fromTemplate('<p style="margin-bottom: 0; text-align: center;">自定义内容</p>',t).show().then(function(e){console.log(e)})},_on_popup2:function(){var e=this,t={effect:"scale",title:"",buttons:[{text:"确定",theme:"assertive"}],showClose:!0};e.$popup.fromTemplate('\n              <p style="margin-bottom: 10px; text-align: center; font-size: 16px;">带有关闭按钮</p>\n              <p style="margin-bottom: 0; text-align: center;">自定义内容</p>\n            ',t).show().then(function(e){console.log(e)})}}}},633:function(e,t,o){t=e.exports=o(20)(),t.push([e.i,"",""])},691:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page-actionsheet"},[o("List",{attrs:{"header-content":"自定义弹层"}},[o("Item",{attrs:{"icon-right":"ion-ios-arrow-right"},nativeOn:{click:function(t){e._on_popup1(t)}}},[e._v("自定义1")]),e._v(" "),o("Item",{attrs:{"icon-right":"ion-ios-arrow-right"},nativeOn:{click:function(t){e._on_popup2(t)}}},[e._v("自定义2")])],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},748:function(e,t,o){var n=o(633);"string"==typeof n&&(n=[[e.i,n,""]]);o(25)(n,{});n.locals&&(e.exports=n.locals)}});