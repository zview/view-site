webpackJsonp([27],{515:function(e,t,a){a(763);var o=a(0)(a(576),a(706),"data-v-a3b5bafe",null);o.options.__file="/zuv/wui/zuv-front/view/src/demo/page/page_layout_container2.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] page_layout_container2.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},576:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{message:"容器2",theme_value:0,themes:[{name:"light",value:0},{name:"stable",value:1},{name:"positive",value:2},{name:"calm",value:3},{name:"balanced",value:4},{name:"energized",value:5},{name:"assertive",value:6},{name:"dark",value:7}]}},methods:{}}},648:function(e,t,a){t=e.exports=a(20)(),t.push([e.i,"",""])},706:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container2"},[a("Header",{attrs:{color:e.themes[e.theme_value].name}},[a("button",{staticClass:"button button-icon ion-ios-arrow-back",attrs:{slot:"left"},slot:"left"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("容器2")]),e._v(" "),a("button",{staticClass:"button button-icon ion-navicon",attrs:{slot:"right"},slot:"right"})]),e._v(" "),a("SubHeader",{attrs:{color:"stable"}},[a("h1",{staticClass:"title"},[e._v("SubHeader")])]),e._v(" "),a("Content",{attrs:{"has-header":!0,"has-sub-header":!0,"has-footer":!0,"has-sub-footer":!0,scroll:!0}},[a("Radio",{attrs:{options:e.themes},model:{value:e.theme_value,callback:function(t){e.theme_value=t},expression:"theme_value"}})],1),e._v(" "),a("SubFooter",{attrs:{color:"stable"}},[a("h1",{staticClass:"title"},[e._v("SubFooter")])]),e._v(" "),a("Footer",{attrs:{color:"dark"}},[a("h1",{staticClass:"title"},[e._v("Footer")])])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},763:function(e,t,a){var o=a(648);"string"==typeof o&&(o=[[e.i,o,""]]);a(25)(o,{});o.locals&&(e.exports=o.locals)}});