webpackJsonp([32],{509:function(e,o,t){t(753);var n=t(0)(t(570),t(696),"data-v-743fe797",null);n.options.__file="/zuv/wui/zuv-front/view/src/demo/page/page_form_upload.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] page_form_upload.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},570:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(62),i=function(e){return e&&e.__esModule?e:{default:e}}(n);o.default={data:function(){return{message:"文件上传",action:"http://gslb-mykid.xbdedu.cn/file",headers:{Authorization:"Token 1234"},data:{filetype:4},init_files1:[],init_files2:[{name:"1.jpg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"2.ppt",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}},methods:{_is_error:function(e,o){return console.log("_is_error",e,o),!1},_on_upload_terminate:function(e,o){console.log("_on_upload_terminate",e,o),this.$toast.show(o,1e3)},_on_upload_prepare:function(e){console.log("_on_upload_prepare",e)},_on_upload_finish:function(){console.log("_on_upload_finish"),this.$loading.hide()},_on_item_prepare:function(e){console.log("_on_item_prepare",e),this.$loading.show("正在上传")},_on_item_progress:function(e,o,t){console.log("_on_item_progress",e.percent,e.loaded,e.total,o,t)},_on_item_success:function(e,o,t){console.log("_on_item_success",e,o,t);var n=this;if(t&&t.length){var s=!0,a=!1,r=void 0;try{for(var l,_=(0,i.default)(t);!(s=(l=_.next()).done);s=!0){l.value}}catch(e){a=!0,r=e}finally{try{!s&&_.return&&_.return()}finally{if(a)throw r}}}n.$loading.hide()},_on_item_error:function(e,o,t){console.log("_on_item_error",e,o,t);var n=this,i=o.message||o;n.$toast.show(i,1500)},_on_list_preview:function(e){console.log("_on_list_preview",e),this.$toast.show("文件列表预览",1e3)},_on_list_remove:function(e,o){console.log("_on_list_remove",e,o),this.$toast.show("文件列表移除",1e3)},_on_get_value1:function(){var e=this;console.log("_on_get_value1",e.init_files1),e.$toast.show("文件列表"+e.init_files1.length,1e3)},_on_get_value2:function(){var e=this;console.log("_on_get_value2",e.init_files2),e.$toast.show("文件列表"+e.init_files2.length,1e3)}}}},638:function(e,o,t){o=e.exports=t(20)(),o.push([e.i,"",""])},696:function(e,o,t){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"page-upload"},[t("List",[t("Item",[e._v(e._s(e.message))]),e._v(" "),t("Item",[t("Upload",{attrs:{accept:"*/*",label:"单文件上传",action:e.action,"cross-domain":!1,headers:e.headers,data:e.data,"show-upload-list":!0},on:{terminate:e._on_upload_terminate,prepare:e._on_upload_prepare,finish:e._on_upload_finish},model:{value:e.init_files1,callback:function(o){e.init_files1=o},expression:"init_files1"}},[t("Icon",{attrs:{icon:"ion-ios-plus-outline"}}),e._v("单文件上传\n\n            ")],1)],1),e._v(" "),t("Item",[t("Button",{attrs:{type:"block","bg-color":"positive"},on:{click:e._on_get_value1}},[e._v("取值")])],1),e._v(" "),t("Item",[t("Upload",{attrs:{accept:"image/*",label:"多文件上传",action:e.action,"cross-domain":!1,"is-error":e._is_error,headers:e.headers,data:e.data,format:["jpg","jpeg","png"],"per-size":4096,"max-size":16384,"max-num":4,compress:!0,"show-preview-local":!1,"show-files":!0,"show-file-info":!1,"load-local-data":!1,"file-list-type":"grid","file-list-colnum":3,"on-item-prepare":e._on_item_prepare,"on-item-progress":e._on_item_progress,"on-item-success":e._on_item_success,"on-item-error":e._on_item_error,"on-list-preview":e._on_list_preview,"on-list-remove":e._on_list_remove,multiple:""},on:{terminate:e._on_upload_terminate,prepare:e._on_upload_prepare,finish:e._on_upload_finish},model:{value:e.init_files2,callback:function(o){e.init_files2=o},expression:"init_files2"}},[t("Icon",{attrs:{icon:"ion-ios-plus-outline"}}),e._v("多文件上传\n\n            ")],1)],1),e._v(" "),t("Item",[t("Button",{attrs:{type:"block","bg-color":"positive"},on:{click:e._on_get_value2}},[e._v("取值")])],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},753:function(e,o,t){var n=t(638);"string"==typeof n&&(n=[[e.i,n,""]]);t(25)(n,{});n.locals&&(e.exports=n.locals)}});