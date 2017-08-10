webpackJsonp([8],{262:function(e,t,a){function n(e){a(316)}var o=a(6)(a(291),a(368),n,null,null);e.exports=o.exports},291:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(99),o=a.n(n),l=a(54),r=a.n(l),s=a(32);a(18),a(98);t.default={data:function(){return{editable:!1,personalInfo:{},newImageUrl:""}},computed:r()({},a.i(s.b)({personalInfo_init:"userInfo"})),mounted:function(){this.resetForm()},methods:{submitForm:function(){var e=this;e.editable=!1;var t={account:e.personalInfo.account,nickname:e.personalInfo.nickname,trueName:e.personalInfo.trueName,sex:e.personalInfo.sex,level:e.personalInfo.level,email:e.personalInfo.email,introduction:e.personalInfo.introduction};console.log("修改信息入参为：",t)},resetForm:function(){var e=this;e.editable=!1,e.personalInfo=JSON.parse(o()(e.personalInfo_init))},uploadAvatar:function(){alert("稍后补上")},handleAvatarSuccess:function(e,t){this.newImageUrl=URL.createObjectURL(t.raw),alert("修改头像成功")},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a}}}},302:function(e,t,a){t=e.exports=a(236)(!1),t.push([e.i,".user_img{padding:20px;text-align:center;border:1px solid #dee1e2}.user_img img{max-width:200px;max-height:200px;border-radius:50%}.user_info{padding-bottom:20px;border:1px solid #dee1e2}.user_info h2{margin:0;font-weight:400;padding:10px 20px;border-bottom:1px solid #dee1e2}.user_info h2 .i_edit{float:right;font-size:16px;color:#7ab8ed}.user_info_form,.user_info_text{padding:20px}",""])},316:function(e,t,a){var n=a(302);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(237)("9a49501c",n,!0)},368:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"user_img"},[e.newImageUrl?a("img",{attrs:{src:e.newImageUrl,alt:"用户头像"}}):a("img",{attrs:{src:e.personalInfo.avatar,alt:"用户头像"}}),e._v(" "),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[a("button",{staticClass:"el-button filter-item el-button--primary",staticStyle:{"margin-top":"10px"},attrs:{type:"button"}},[a("i",{staticClass:"fa fa-cloud-upload",attrs:{"aria-hidden":"true"}}),a("span",[e._v("上传头像")])])])],1)]),e._v(" "),a("el-col",{attrs:{span:16}},[a("div",{staticClass:"user_info"},[a("h2",[e._v("个人信息 "),e.editable?e._e():a("el-button",{staticStyle:{float:"right"},attrs:{size:"small",icon:"edit"},on:{click:function(t){e.editable=!0}}},[e._v("编辑")])],1),e._v(" "),e.editable?a("div",{staticClass:"user_info_form"},[a("el-form",{attrs:{"label-position":"right","label-width":"100px",model:e.personalInfo}},[a("el-form-item",{attrs:{label:"昵称"}},[a("el-input",{model:{value:e.personalInfo.nickname,callback:function(t){e.personalInfo.nickname=t},expression:"personalInfo.nickname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"真实姓名"}},[a("el-input",{model:{value:e.personalInfo.trueName,callback:function(t){e.personalInfo.trueName=t},expression:"personalInfo.trueName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别"}},[a("el-radio-group",{model:{value:e.personalInfo.sex,callback:function(t){e.personalInfo.sex=t},expression:"personalInfo.sex"}},[a("el-radio",{attrs:{label:"man"}},[e._v("男")]),e._v(" "),a("el-radio",{attrs:{label:"woman"}},[e._v("女")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"等级"}},[a("el-input",{attrs:{disabled:""},model:{value:e.personalInfo.level,callback:function(t){e.personalInfo.level=t},expression:"personalInfo.level"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮件地址"}},[a("el-input",{attrs:{disabled:""},model:{value:e.personalInfo.email,callback:function(t){e.personalInfo.email=t},expression:"personalInfo.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"个人简介"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.personalInfo.introduction,callback:function(t){e.personalInfo.introduction=t},expression:"personalInfo.introduction"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm()}}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm()}}},[e._v("取消")])],1)],1)],1):a("div",{staticClass:"user_info_text"},[a("el-form",{attrs:{"label-position":"right","label-width":"100px",model:e.personalInfo}},[a("el-form-item",{attrs:{label:"昵称："}},[e._v("\n                              "+e._s(e.personalInfo.nickname)+"\n                            ")]),e._v(" "),a("el-form-item",{attrs:{label:"真实姓名："}},[e._v("\n                              "+e._s(e.personalInfo.trueName)+"\n                             \n                            ")]),e._v(" "),a("el-form-item",{attrs:{label:"性别："}},["man"==e.personalInfo.sex?a("span",[e._v("男")]):a("span",[e._v("女")])]),e._v(" "),a("el-form-item",{attrs:{label:"等级："}},[e._v("\n                              "+e._s(e.personalInfo.level)+"\n                             \n                            ")]),e._v(" "),a("el-form-item",{attrs:{label:"邮件地址："}},[e._v("\n                              "+e._s(e.personalInfo.email)+"\n                             \n                            ")]),e._v(" "),a("el-form-item",{attrs:{label:"个人简介："}},[e._v("\n                              "+e._s(e.personalInfo.introduction)+"\n                             \n                            ")])],1)],1)])])],1)],1)},staticRenderFns:[]}}});