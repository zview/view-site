webpackJsonp([40],{500:function(e,t,l){l(740);var a=l(0)(l(561),l(683),"data-v-557fc3b8",null);a.options.__file="/zuv/wui/zuv-front/view/src/demo/page/page_form_input.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] page_form_input.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},561:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{message:"输入框",val1:"",val2:"",val3:"",val4:"",v_password:"",v_tel:"",v_url:"",v_email:"",v_number:1,v_date:"",v_time:"",v_color:"",v_textarea1:"",v_textarea2:"",v_floating:"",v_stacked:"",v_name:""}},methods:{_on_set_value:function(){console.log("_on_set_value"),this.val4="1234"},_on_send_smscode:function(){console.log("_on_send_smscode")},_on_button_click:function(e,t){console.log("_on_button_click",e,t)}}}},625:function(e,t,l){t=e.exports=l(20)(),t.push([e.i,"",""])},683:function(e,t,l){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"page-input"},[l("List",{attrs:{"header-content":"普通"}},[l("Input",{attrs:{type:"text",placeholder:"图标文字","label-icon":"ion-android-person",label:"姓名"},model:{value:e.val1,callback:function(t){e.val1=t},expression:"val1"}}),e._v(" "),l("Input",{attrs:{type:"text",placeholder:"只有图标","label-icon":"ion-android-person"},model:{value:e.val2,callback:function(t){e.val2=t},expression:"val2"}}),e._v(" "),l("Input",{attrs:{type:"text",placeholder:"只有文字",label:"籍贯"},model:{value:e.val3,callback:function(t){e.val3=t},expression:"val3"}})],1),e._v(" "),l("List",{attrs:{"header-content":"包装"}},[l("Input",{attrs:{type:"text",placeholder:"请输入","label-icon":"ion-android-person","is-wrapper":!0,"button-label":"发送验证码","button-color":"calm","show-clear":!1,"on-button-click":e._on_send_smscode,label:"文字"},model:{value:e.val4,callback:function(t){e.val4=t},expression:"val4"}}),e._v(" "),l("Input",{attrs:{type:"text",placeholder:"请输入","label-icon":"ion-android-person","is-wrapper":!0,name:"wrapper_val4","button-icon":"ion-android-person","show-clear":!1,label:"图标"},on:{"button-click":e._on_button_click},model:{value:e.val4,callback:function(t){e.val4=t},expression:"val4"}}),e._v(" "),l("Input",{attrs:{type:"password",placeholder:"请输入","label-icon":"ion-android-person","is-wrapper":!0,"button-label":" ","show-clear":!1,label:"空白"},model:{value:e.val4,callback:function(t){e.val4=t},expression:"val4"}}),e._v(" "),l("Input",{attrs:{type:"textarea",placeholder:"请输入","label-icon":"ion-android-person","is-wrapper":!0,"button-label":"发送验证码","show-clear":!1,label:"空白"},model:{value:e.val4,callback:function(t){e.val4=t},expression:"val4"}})],1),e._v(" "),l("List",{attrs:{"header-content":"特殊类型"}},[l("Input",{attrs:{type:"password",label:"密码",placeholder:"password"},model:{value:e.v_password,callback:function(t){e.v_password=t},expression:"v_password"}}),e._v(" "),l("Input",{attrs:{type:"tel",label:"电话",placeholder:"tel"},model:{value:e.v_tel,callback:function(t){e.v_tel=t},expression:"v_tel"}}),e._v(" "),l("Input",{attrs:{type:"url",label:"网址",placeholder:"url"},model:{value:e.v_url,callback:function(t){e.v_url=t},expression:"v_url"}}),e._v(" "),l("Input",{attrs:{type:"email",label:"邮箱",placeholder:"email"},model:{value:e.v_email,callback:function(t){e.v_email=t},expression:"v_email"}}),e._v(" "),l("Input",{attrs:{type:"number",label:"数字",placeholder:"number"},model:{value:e.v_number,callback:function(t){e.v_number=t},expression:"v_number"}}),e._v(" "),l("Input",{attrs:{type:"date",label:"日期",placeholder:"date"},model:{value:e.v_date,callback:function(t){e.v_date=t},expression:"v_date"}}),e._v(" "),l("Input",{attrs:{type:"time",label:"时间",placeholder:"time"},model:{value:e.v_time,callback:function(t){e.v_time=t},expression:"v_time"}}),e._v(" "),l("Input",{attrs:{type:"color",label:"颜色",placeholder:"color"},model:{value:e.v_color,callback:function(t){e.v_color=t},expression:"v_color"}}),e._v(" "),l("Input",{attrs:{type:"textarea",label:"描述",placeholder:"默认文本区域"},model:{value:e.v_textarea1,callback:function(t){e.v_textarea1=t},expression:"v_textarea1"}}),e._v(" "),l("Input",{attrs:{type:"textarea"},model:{value:e.v_textarea2,callback:function(t){e.v_textarea2=t},expression:"v_textarea2"}})],1),e._v(" "),l("List",{attrs:{"header-content":"堆叠"}},[l("Input",{attrs:{type:"text",label:"堆叠","display-style":"stacked-label",placeholder:"stacked"},model:{value:e.v_stacked,callback:function(t){e.v_stacked=t},expression:"v_stacked"}}),e._v(" "),l("Input",{attrs:{type:"text",label:"堆叠","display-style":"stacked-label",placeholder:"stacked"},model:{value:e.v_stacked,callback:function(t){e.v_stacked=t},expression:"v_stacked"}}),e._v(" "),l("Input",{attrs:{type:"textarea",label:"堆叠","display-style":"stacked-label",placeholder:"stacked"},model:{value:e.v_stacked,callback:function(t){e.v_stacked=t},expression:"v_stacked"}})],1),e._v(" "),l("List",{attrs:{"header-content":"内联"}},[l("Input",{attrs:{type:"text","display-style":"inset",placeholder:"姓名"}}),e._v(" "),l("Input",{attrs:{type:"email","display-style":"inset",placeholder:"邮箱"}})],1),e._v(" "),l("List",{attrs:{"header-content":"浮动"}},[l("Input",{attrs:{type:"text",label:"浮动","display-style":"floating-label",placeholder:"floating"},model:{value:e.v_floating,callback:function(t){e.v_floating=t},expression:"v_floating"}}),e._v(" "),l("Input",{attrs:{type:"text",label:"浮动","display-style":"floating-label",placeholder:"floating"},model:{value:e.v_floating,callback:function(t){e.v_floating=t},expression:"v_floating"}})],1),e._v(" "),l("List",{attrs:{"header-content":"有标签"}},[l("Input",{attrs:{type:"text",placeholder:"姓名",label:"姓名"},model:{value:e.v_name,callback:function(t){e.v_name=t},expression:"v_name"}}),e._v(" "),l("Input",{attrs:{type:"text",placeholder:"密码",label:"密码"}}),e._v(" "),l("Button",{attrs:{type:"block","bg-color":"assertive"}},[e._v("提交")])],1),e._v(" "),l("List",{attrs:{"header-content":"无标签"}},[l("Input",{attrs:{type:"text",placeholder:"姓名"}}),e._v(" "),l("Input",{attrs:{type:"text",placeholder:"密码"}}),e._v(" "),l("Button",{attrs:{type:"block","bg-color":"assertive"}},[e._v("提交")])],1),e._v(" "),l("List",{attrs:{"header-content":"按钮"}},[l("Input",{attrs:{type:"button","input-label":"按钮"},nativeOn:{click:function(t){e._on_set_value(t)}}}),e._v(" "),l("Input",{attrs:{type:"reset","input-label":"重置"}}),e._v(" "),l("Input",{attrs:{type:"submit",color:"balanced","input-label":"提交"}})],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},740:function(e,t,l){var a=l(625);"string"==typeof a&&(a=[[e.i,a,""]]);l(25)(a,{});a.locals&&(e.exports=a.locals)}});