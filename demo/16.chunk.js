webpackJsonp([16],{528:function(t,e,o){o(765);var n=o(0)(o(589),o(708),"data-v-a89e8f22",null);n.options.__file="/zuv/wui/zuv-front/view/src/demo/page/page_nav_tabs.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] page_nav_tabs.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},589:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{message:"标签页",tabs:[{id:1,text:"tab 1",icon:"ion-ios-telephone"},{id:2,text:"tab 2",icon:"ion-ios-clock"},{id:3,text:"tab 3",icon:"ion-ios-clock"}],tabIndex:0,categories:[{id:1,text:"女装"},{id:2,text:"男装"},{id:3,text:"内衣"},{id:4,text:"鞋靴"},{id:5,text:"箱包"},{id:6,text:"更多"}],categoryIndex:0}},methods:{onTabClick:function(t){console.log("onTabClick",t),this.tabIndex=t},onCategoryClick:function(t){console.log("onCategoryClick",t),this.categoryIndex=t}}}},650:function(t,e,o){e=t.exports=o(20)(),e.push([t.i,"",""])},708:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-tabs"},[o("Tabs",{attrs:{"tab-items":t.tabs,"tab-index":t.tabIndex,"icon-align":"top","on-tab-click":t.onTabClick}}),t._v(" "),o("Panel",{staticStyle:{"margin-top":"50px"},attrs:{type:"inset","bg-color":"white"}},[o("p",[t._v("\n            激活索引: "+t._s(t.tabIndex)+"\n        ")]),t._v(" "),o("p",[t._v("\n            激活分类: "+t._s(t.categories[t.categoryIndex].text)+"\n        ")])]),t._v(" "),o("Tabs",{attrs:{"tab-items":t.categories,"tab-index":t.categoryIndex,"on-tab-click":t.onCategoryClick,position:"bottom","bg-color":"assertive","tab-color":"light"}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},765:function(t,e,o){var n=o(650);"string"==typeof n&&(n=[[t.i,n,""]]);o(25)(n,{});n.locals&&(t.exports=n.locals)}});