webpackJsonp([31],{510:function(t,o,e){e(717);var n=e(0)(e(571),e(660),"data-v-00662834",null);n.options.__file="/zuv/wui/zuv-front/view/src/demo/page/page_home.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] page_home.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},571:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{message:"示例",sidebarLeft:void 0,sidebarRight:void 0}},mounted:function(){var t=this;t.sidebarLeft=t.$sidebar.fromTemplate("\n            <p style=\"font-size: 13px;\">\n            No man is an island,<br>\n            entire of itself.<br>\n            Every man is a piece of the continent,<br>\n            a part of the main.<br>\n            If a clod be washed away by the sea,<br>\n            Europe is the less,<br>\n            as well as if a promontory were,<br>\n            as well as if a manor of thy friend's or of thine own were.<br>\n            Any man's death diminishes me.<br>\n            Because I am involved in mankind.<br>\n            And,<br>\n            therefore,<br>\n            never send to know for whom the bells tolls,<br>\n            it tolls for thee.<br>\n            </p>\n          ",{position:"left"}),t.sidebarRight=t.$sidebar.fromTemplate("<h5>右边栏</h5>",{position:"right"})},destroyed:function(){this.$sidebar.destroy()},methods:{_on_goto_page:function(t){console.log("_on_goto_page",t),this.$router.push(t)},_on_toast:function(){console.log("_on_toast"),this.$toast.show("发送成功",1500).then(function(){console.log("toast hide")})},_on_loading:function(){console.log("_on_loading");var t=this;t.$loading.show("正在加载中"),setTimeout(function(){t.$loading.hide()},2e3)},_on_backdrop:function(){console.log("_on_backdrop");var t=this;t.$backdrop.show(!0),setTimeout(function(){t.$backdrop.hide()},2e3)},_on_toggle_sidebar_left:function(){this.sidebarLeft.toggle()},_on_toggle_sidebar_right:function(){this.sidebarRight.toggle()}}}},602:function(t,o,e){o=t.exports=e(20)(),o.push([t.i,"",""])},660:function(t,o,e){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"page-home"},[e("List",[e("Item",{attrs:{color:"light","bg-color":"positive",note:"Basic"}},[t._v("基础")]),t._v(" "),e("Item",{attrs:{note:"Color"},nativeOn:{click:function(o){t._on_goto_page("/demo/color")}}},[t._v("颜色")]),t._v(" "),e("Item",{attrs:{note:"Font"},nativeOn:{click:function(o){t._on_goto_page("/demo/font")}}},[t._v("字体")]),t._v(" "),e("Item",{attrs:{note:"Theme"},nativeOn:{click:function(o){t._on_goto_page("/demo/theme")}}},[t._v("多主题")]),t._v(" "),e("Item",{attrs:{note:"Locale"},nativeOn:{click:function(o){t._on_goto_page("/demo/locale")}}},[t._v("国际化")]),t._v(" "),e("Item",{attrs:{note:"Animation/Transition"},nativeOn:{click:function(o){t._on_goto_page("/demo/transition")}}},[t._v("动画/过渡")]),t._v(" "),e("Item",{attrs:{note:"Icon"},nativeOn:{click:function(o){t._on_goto_page("/demo/icon")}}},[t._v("图标")]),t._v(" "),e("Item",{attrs:{note:"Button"},nativeOn:{click:function(o){t._on_goto_page("/demo/button")}}},[t._v("按钮")]),t._v(" "),e("Item",{attrs:{color:"light","bg-color":"positive",note:"Layout"}},[t._v("布局")]),t._v(" "),e("Item",{attrs:{note:"Row/Col/Grid"},nativeOn:{click:function(o){t._on_goto_page("/demo/grid")}}},[t._v("栅格")]),t._v(" "),e("Item",{attrs:{note:"Cells"},nativeOn:{click:function(o){t._on_goto_page("/demo/cells")}}},[t._v("宫格")]),t._v(" "),e("Item",{attrs:{note:"List/Item"},nativeOn:{click:function(o){t._on_goto_page("/demo/list")}}},[t._v("列表")]),t._v(" "),e("Item",{attrs:{note:"Table"},nativeOn:{click:function(o){t._on_goto_page("/demo/table")}}},[t._v("表格")]),t._v(" "),e("Item",{attrs:{note:"Panel"},nativeOn:{click:function(o){t._on_goto_page("/demo/panel")}}},[t._v("面板")]),t._v(" "),e("Item",{attrs:{note:"Card"},nativeOn:{click:function(o){t._on_goto_page("/demo/card")}}},[t._v("卡片")]),t._v(" "),e("Item",{attrs:{note:"Accordion/Collapse"},nativeOn:{click:function(o){t._on_goto_page("/demo/accordion")}}},[t._v("折叠面板")]),t._v(" "),e("Item",{attrs:{note:"Scalable"},nativeOn:{click:function(o){t._on_goto_page("/demo/scalable")}}},[t._v("缩放")]),t._v(" "),e("Item",{attrs:{note:"Swiper"},nativeOn:{click:function(o){t._on_goto_page("/demo/swiper")}}},[t._v("轮播")]),t._v(" "),e("Item",{attrs:{note:"Refresh/Infinite"},nativeOn:{click:function(o){t._on_goto_page("/demo/scroller")}}},[t._v("下拉刷新/自动加载")]),t._v(" "),e("Item",{attrs:{note:"Page/Navbar/Tabbar"},nativeOn:{click:function(o){t._on_goto_page("/container1")}}},[t._v("容器1")]),t._v(" "),e("Item",{attrs:{note:"Content/Header/Footer"},nativeOn:{click:function(o){t._on_goto_page("/container2")}}},[t._v("容器2")]),t._v(" "),e("Item",{attrs:{color:"light","bg-color":"positive",note:"Navigation"}},[t._v("导航")]),t._v(" "),e("Item",{attrs:{note:"Tabs"},nativeOn:{click:function(o){t._on_goto_page("/demo/tabs")}}},[t._v("标签页")]),t._v(" "),e("Item",{attrs:{note:"ButtonBar"},nativeOn:{click:function(o){t._on_goto_page("/demo/buttonbar")}}},[t._v("按钮栏")]),t._v(" "),e("Item",{attrs:{note:"ActionBar/ToolBar"},nativeOn:{click:function(o){t._on_goto_page("/demo/actionbar")}}},[t._v("工具栏")]),t._v(" "),e("Item",{attrs:{note:"Tabbar/Page"},nativeOn:{click:function(o){t._on_goto_page("/demo/tabbar")}}},[t._v("底部栏")]),t._v(" "),e("Item",{attrs:{note:"Navbar/Page"},nativeOn:{click:function(o){t._on_goto_page("/navbar")}}},[t._v("导航栏")]),t._v(" "),e("Item",{attrs:{color:"light","bg-color":"positive",note:"Form"}},[t._v("表单")]),t._v(" "),e("Item",{attrs:{note:"Input"},nativeOn:{click:function(o){t._on_goto_page("/demo/input")}}},[t._v("输入框")]),t._v(" "),e("Item",{attrs:{note:"Radio"},nativeOn:{click:function(o){t._on_goto_page("/demo/radio")}}},[t._v("单选框")]),t._v(" "),e("Item",{attrs:{note:"Check"},nativeOn:{click:function(o){t._on_goto_page("/demo/check")}}},[t._v("复选框")]),t._v(" "),e("Item",{attrs:{note:"Toggle"},nativeOn:{click:function(o){t._on_goto_page("/demo/toggle")}}},[t._v("切换器")]),t._v(" "),e("Item",{attrs:{note:"Select"},nativeOn:{click:function(o){t._on_goto_page("/demo/select")}}},[t._v("下拉框")]),t._v(" "),e("Item",{attrs:{note:"Search"},nativeOn:{click:function(o){t._on_goto_page("/demo/search")}}},[t._v("搜索框")]),t._v(" "),e("Item",{attrs:{note:"Slider"},nativeOn:{click:function(o){t._on_goto_page("/demo/slider")}}},[t._v("滑动条")]),t._v(" "),e("Item",{attrs:{note:"Cascade"},nativeOn:{click:function(o){t._on_goto_page("/demo/cascade")}}},[t._v("级联选择")]),t._v(" "),e("Item",{attrs:{note:"Picker"},nativeOn:{click:function(o){t._on_goto_page("/demo/picker")}}},[t._v("选择器")]),t._v(" "),e("Item",{attrs:{note:"DatePicker"},nativeOn:{click:function(o){t._on_goto_page("/demo/datepicker")}}},[t._v("日期时间选择")]),t._v(" "),e("Item",{attrs:{note:"RegionPicker"},nativeOn:{click:function(o){t._on_goto_page("/demo/regionpicker")}}},[t._v("地区选择")]),t._v(" "),e("Item",{attrs:{note:"ItemPicker"},nativeOn:{click:function(o){t._on_goto_page("/demo/itempicker")}}},[t._v("分栏选择")]),t._v(" "),e("Item",{attrs:{note:"Upload"},nativeOn:{click:function(o){t._on_goto_page("/demo/upload")}}},[t._v("文件上传")]),t._v(" "),e("Item",{attrs:{note:"Form"},nativeOn:{click:function(o){t._on_goto_page("/demo/form")}}},[t._v("表单")]),t._v(" "),e("Item",{attrs:{color:"light","bg-color":"positive",note:"View"}},[t._v("视图")]),t._v(" "),e("Item",{attrs:{note:"Progress"},nativeOn:{click:function(o){t._on_goto_page("/demo/progress")}}},[t._v("进度条")]),t._v(" "),e("Item",{attrs:{note:"Badge"},nativeOn:{click:function(o){t._on_goto_page("/demo/badge")}}},[t._v("徽标")]),t._v(" "),e("Item",{attrs:{note:"Tag"},nativeOn:{click:function(o){t._on_goto_page("/demo/tag")}}},[t._v("标签")]),t._v(" "),e("Item",{attrs:{note:"Stars"},nativeOn:{click:function(o){t._on_goto_page("/demo/stars")}}},[t._v("星级")]),t._v(" "),e("Item",{attrs:{color:"light","bg-color":"positive",note:"Chart"}},[t._v("图表")]),t._v(" "),e("Item",{attrs:{note:"Circle"},nativeOn:{click:function(o){t._on_goto_page("/demo/circle")}}},[t._v("进度环")]),t._v(" "),e("Item",{attrs:{note:"ChinaMap"},nativeOn:{click:function(o){t._on_goto_page("/demo/chinamap")}}},[t._v("中国省市图")]),t._v(" "),e("Item",{attrs:{color:"light","bg-color":"positive",note:"Other"}},[t._v("其他")]),t._v(" "),e("Item",{attrs:{note:"Editor"},nativeOn:{click:function(o){t._on_goto_page("/demo/editor")}}},[t._v("编辑器")]),t._v(" "),e("Item",{attrs:{color:"light","bg-color":"positive",note:"Service"}},[t._v("服务")]),t._v(" "),e("Item",{attrs:{note:"Backdrop"},nativeOn:{click:function(o){t._on_backdrop(o)}}},[t._v("全屏遮罩")]),t._v(" "),e("Item",{attrs:{note:"Toast"},nativeOn:{click:function(o){t._on_toast(o)}}},[t._v("一般提示")]),t._v(" "),e("Item",{attrs:{note:"Loading/Spin"},nativeOn:{click:function(o){t._on_loading(o)}}},[t._v("加载提示")]),t._v(" "),e("Item",{attrs:{note:"ActionSheet"},nativeOn:{click:function(o){t._on_goto_page("/demo/actionsheet")}}},[t._v("操作列表")]),t._v(" "),e("Item",{attrs:{note:"Alert/Confirm"},nativeOn:{click:function(o){t._on_goto_page("/demo/dialog")}}},[t._v("对话框")]),t._v(" "),e("Item",{attrs:{note:"Popup"},nativeOn:{click:function(o){t._on_goto_page("/demo/popup")}}},[t._v("自定义弹层")]),t._v(" "),e("Item",{attrs:{note:"Sidebar"},nativeOn:{click:function(o){t._on_toggle_sidebar_left(o)}}},[t._v("侧边栏")]),t._v(" "),e("Item",{attrs:{note:"Modal"},nativeOn:{click:function(o){t._on_goto_page("/demo/modal")}}},[t._v("模态框")]),t._v(" "),e("Item",{attrs:{color:"light","bg-color":"positive",note:"Advanced"}},[t._v("高级")]),t._v(" "),e("Item",{attrs:{note:"Directive"},nativeOn:{click:function(o){t._on_goto_page("/directive")}}},[t._v("指令")]),t._v(" "),e("Item",{attrs:{note:"Filter"},nativeOn:{click:function(o){t._on_goto_page("/filter")}}},[t._v("过滤器")]),t._v(" "),e("Item",{attrs:{color:"light","bg-color":"positive",note:"Sample"}},[t._v("示例")]),t._v(" "),e("Item",{attrs:{note:"CSS/SCSS"},nativeOn:{click:function(o){t._on_goto_page("/sample_css")}}},[t._v("样式表")]),t._v(" "),e("Item",{attrs:{note:"Transition"},nativeOn:{click:function(o){t._on_goto_page("/sample_transition")}}},[t._v("过渡效果")]),t._v(" "),e("Item",{attrs:{note:"Animation"},nativeOn:{click:function(o){t._on_goto_page("/sample_animation")}}},[t._v("动画效果")]),t._v(" "),e("Item",{attrs:{note:"MediaQuery"},nativeOn:{click:function(o){t._on_goto_page("/sample_mediaquery")}}},[t._v("媒体查询")]),t._v(" "),e("Item",{attrs:{note:"DynamicContent"},nativeOn:{click:function(o){t._on_goto_page("/sample_dyncontent")}}},[t._v("动态内容")]),t._v(" "),e("Item",{attrs:{note:"DiceLayout"},nativeOn:{click:function(o){t._on_goto_page("/sample_dice")}}},[t._v("骰子布局")]),t._v(" "),e("Item",{attrs:{note:"GridLayout"},nativeOn:{click:function(o){t._on_goto_page("/sample_grid")}}},[t._v("网格布局")]),t._v(" "),e("Item",{attrs:{note:"HolyGrailLayout"},nativeOn:{click:function(o){t._on_goto_page("/sample_holy")}}},[t._v("圣杯布局")]),t._v(" "),e("Item",{attrs:{note:"InputLayout"},nativeOn:{click:function(o){t._on_goto_page("/sample_input")}}},[t._v("输入框布局")]),t._v(" "),e("Item",{attrs:{note:"HangLayout"},nativeOn:{click:function(o){t._on_goto_page("/sample_hang")}}},[t._v("悬挂式布局")]),t._v(" "),e("Item",{attrs:{note:"FixedLayout"},nativeOn:{click:function(o){t._on_goto_page("/sample_fixed")}}},[t._v("固定底栏")]),t._v(" "),e("Item",{attrs:{note:"FlowLayout"},nativeOn:{click:function(o){t._on_goto_page("/sample_flow")}}},[t._v("流式布局")])],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},717:function(t,o,e){var n=e(602);"string"==typeof n&&(n=[[t.i,n,""]]);e(25)(n,{});n.locals&&(t.exports=n.locals)}});