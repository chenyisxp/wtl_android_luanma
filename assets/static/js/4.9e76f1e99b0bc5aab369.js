webpackJsonp([4],{"+rW0":function(e,t,n){var a=n("xzPU");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("FIqI")("b3304938",a,!0,{})},"/a2c":function(e,t,n){e.exports=n.p+"static/img/weld_icon_unit_unchoose.a78012b.png"},P2EI:function(e,t,n){e.exports=n.p+"static/img/weld_icon_unit_choosed.dc51b19.png"},"b+kE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("wSez"),i={name:"",components:{},data:function(){return{loginName:"",nowchoose:"mm",chooseModel:4,clickTimes:0}},methods:{handleLoginOut:function(){this.loginName="",localStorage.setItem("wtl_login_email","")},handleLoginin:function(){this.$router.push("/loginIndex")},handleOpen:function(){this.$store.state.logFaceFlag=!0},handleRestore:function(){this.chooseModel=4,this.callSendDataToBleUtil("setmanage","DA4000001470","1470")},goDevleper:function(){this.clickTimes+=1,10==this.clickTimes&&(this.clickTimes=0,this.$router.push("/develeperManage"))},chooseIMG:function(e){this.chooseModel=e},openWeb:function(e){"env_ios"==this.envType?this.globalSendMsgToIos("handOpenWeb",e,""):window.android.openWeb(e)},go:function(e){this.$router.push(e)},choose:function(e){if(!this.GLOBAL_CONFIG.TESTFLAG){if("connected"!=this.getConnectStatus)return void Object(a.Toast)({message:"Please connect Bluetooth first",position:"middle",iconClass:"icon icon-success",duration:1500});this.nowchoose=e,"mm"==e?this.callSendDataToBleUtil("setmanage","DA4000001470","1470"):this.callSendDataToBleUtil("setmanage","DA400100D4B1","D4B1")}},goBack:function(){this.$router.back(),console.log("触发回退")}},mounted:function(){this.loginName=localStorage.getItem("wtl_login_email"),window.history&&window.history.pushState&&(history.pushState(null,null,document.URL),window.addEventListener("popstate",this.goBack,!1))},created:function(){console.log("created")},destroyed:function(){console.log("destoryed"),window.removeEventListener("popstate",this.goBack,!1)},computed:{envType:function(){return this.$store.state.envType},getConnectStatus:function(){return this.$store.state.getConnectStatus}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"setmanage",class:"env_ios"==e.envType?"env_ios_gClass":""},[n("div",{staticClass:"header"},[n("Icon",{attrs:{type:"ios-arrow-back"},on:{click:function(t){return e.go("/newIndex")}}}),e._v("SETTING")],1),e._v(" "),n("div",{staticClass:"contain"},[n("div",{staticClass:"editunit"},[e._v("Change unit")]),e._v(" "),n("div",{staticClass:"checklist"},[n("div",{staticClass:"u-mm cooh",class:"mm"==e.nowchoose?"choosed":"",on:{click:function(t){return e.choose("mm")}}},[e._v("MM")]),e._v(" "),n("div",{staticClass:"u-inch cooh",class:"inch"==e.nowchoose?"choosed":"",on:{click:function(t){return e.choose("inch")}}},[e._v("inch")])]),e._v(" "),n("div",{staticClass:"company"},[e._v("Official website")]),e._v(" "),n("div",{staticClass:"company-link"},[n("a",{on:{click:function(t){return e.openWeb("https://kowax.cz/")}}},[e._v("https://kowax.cz/")])]),e._v(" "),n("div",{staticClass:"helpDetail"}),e._v(" "),e.loginName?n("div",{staticClass:"help"},[e._v("Login name:"+e._s(e.loginName||"未登录"))]):n("div",{staticClass:"help"},[e._v("Not logged in")]),e._v(" "),e.loginName?n("div",{staticClass:"loginBtn",staticStyle:{"margin-top":"2rem"},on:{click:e.handleLoginOut}},[e._v("Log out")]):e._e(),e._v(" "),e.loginName?e._e():n("div",{staticClass:"loginBtn",staticStyle:{"margin-top":"2rem"},on:{click:e.handleLoginin}},[e._v("Go log in")])])])},staticRenderFns:[]};var d=n("C7Lr")(i,o,!1,function(e){n("+rW0")},"data-v-ed260812",null);t.default=d.exports},xzPU:function(e,t,n){var a=n("L4zZ");(e.exports=n("UTlt")(!0)).push([e.i,"\n.setmanage[data-v-ed260812]{color:#61808c;min-height:100vh;background:-webkit-linear-gradient(to top, #002c3a, #174d60);background:-o-linear-gradient(to top, #002c3a, #174d60);background:-mos-linear-gradient(to top, #002c3a, #174d60);background:-webkit-gradient(linear, left bottom, left top, from(#002c3a), to(#174d60));background:-webkit-linear-gradient(bottom, #002c3a, #174d60);background:-o-linear-gradient(bottom, #002c3a, #174d60);background:linear-gradient(to top, #002c3a, #174d60);width:100%\n}\n.setmanage .header[data-v-ed260812]{position:relative;height:60px;line-height:1;padding-top:35px;font-size:14px;text-align:center;color:#fff;background:#010101\n}\n.setmanage .header .ivu-icon[data-v-ed260812]{font-size:20px;position:absolute;left:15px;top:30px;left:10px\n}\n.setmanage .contain[data-v-ed260812]{margin:0 15px;padding-bottom:60px\n}\n.setmanage .contain .checklist[data-v-ed260812]{height:30px;line-height:30px\n}\n.setmanage .contain .checklist .u-mm[data-v-ed260812]{width:70px;float:left\n}\n.setmanage .contain .checklist .u-inch[data-v-ed260812]{width:70px;float:left\n}\n.setmanage .contain .checklist .cooh[data-v-ed260812]{background:url("+a(n("/a2c"))+") no-repeat;background-size:20px;background-position:left center;padding-left:25px\n}\n.setmanage .contain .checklist .cooh.choosed[data-v-ed260812]{font-size:14px;color:#dcedf3;background:url("+a(n("P2EI"))+") no-repeat;background-size:20px;background-position:left center;padding-left:25px\n}\n.setmanage .contain .editunit[data-v-ed260812]{height:30x;font-size:14px;color:#7dc1d4;margin-top:20px;margin-bottom:20px\n}\n.setmanage .contain .checkboxs[data-v-ed260812]{height:40px;line-height:40px\n}\n.setmanage .contain .company[data-v-ed260812]{height:15px;margin-top:20px;color:#7dc1d4\n}\n.setmanage .contain .company-link[data-v-ed260812]{height:20px;margin-top:10px;margin-bottom:20px\n}\n.setmanage .contain .help[data-v-ed260812]{height:20px;color:#7dc1d4\n}\n.setmanage .contain .helpDetail[data-v-ed260812]{margin:10px 5px\n}\n.setmanage .contain .connnect[data-v-ed260812]{color:#7dc1d4;margin-top:20px;height:20px\n}\n.setmanage .contain .tabs[data-v-ed260812]{margin-bottom:20px\n}\n.setmanage .contain .tabs .m-li[data-v-ed260812]{color:#839baa;height:40px;line-height:40px;margin:10px 0px;border-radius:2px;background:-webkit-gradient(linear, left bottom, left top, from(#0a3b46), color-stop(50%, #022e38), to(#0a3b46));background:-webkit-linear-gradient(bottom, #0a3b46 0%, #022e38 50%, #0a3b46 100%);background:-o-linear-gradient(bottom, #0a3b46 0%, #022e38 50%, #0a3b46 100%);background:linear-gradient(to top, #0a3b46 0%, #022e38 50%, #0a3b46 100%);-webkit-box-shadow:0px 0px 2px 1px #103f4b;box-shadow:0px 0px 2px 1px #103f4b\n}\n.setmanage .contain .tabs .m-li .tab[data-v-ed260812]{text-align:center;height:40px;width:33.33%;float:left;border-right:2px solid;　-webkit-border-image:-webkit-linear-gradient(#16404c, #b7d4dc, #16404c) 1 10 1;-webkit-border-image:-webkit-gradient(linear, left top, left bottom, from(#16404c), color-stop(#b7d4dc), to(#16404c)) 1 10 1;-webkit-border-image:-webkit-linear-gradient(#16404c, #b7d4dc, #16404c) 1 10 1;-o-border-image:-o-linear-gradient(#16404c, #b7d4dc, #16404c) 1 10 1;border-image:-webkit-gradient(linear, left top, left bottom, from(#16404c), color-stop(#b7d4dc), to(#16404c)) 1 10 1;border-image:linear-gradient(#16404c, #b7d4dc, #16404c) 1 10 1\n}\n.setmanage .contain .tabs .m-li[data-v-ed260812] :last-child{border-right:none\n}\n.setmanage .contain .tabs .m-li .tab.choosedImg[data-v-ed260812]{font-weight:bold;background:#10566a;color:#fff\n}\n.setmanage .contain .connect-linesImg[data-v-ed260812]{height:150px;margin:0 20px;background:#eee\n}\n.setmanage .contain .connect-linesImg img[data-v-ed260812]{height:100%;width:100%\n}\n.setmanage .contain .resetBtn[data-v-ed260812]{margin:0 30px;margin-top:20px;border-radius:5px;height:50px;line-height:50px;text-align:center;font-size:16px;color:#fff;background:#ffb300\n}\n.setmanage .contain .loginBtn[data-v-ed260812]{margin:0 4rem;margin-top:20px;border-radius:5px;height:2rem;line-height:2rem;text-align:center;font-size:16px;color:#fff;background:#ffb300\n}\n@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3){\n.setmanage .header[data-v-ed260812]{height:60px;line-height:1;padding-top:30px\n}\n.setmanage .header .ivu-icon[data-v-ed260812]{top:37px\n}\n}\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2){\n.blueToothManage .blockHig[data-v-ed260812]{height:60px\n}\n.blueToothManage .blockHig .scanning[data-v-ed260812]{margin-top:10px;margin-left:10px\n}\n}\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3){\n.blueToothManage .blockHig[data-v-ed260812]{height:60px\n}\n.blueToothManage .blockHig .scanning[data-v-ed260812]{margin-top:10px;margin-left:10px\n}\n}\n","",{version:3,sources:["/Users/lijiangyong/lijiangyong/Documents/a_wtl/混合开发用www_ios/www/src/pages/setting/setmanage.vue"],names:[],mappings:";AACA,4BAA4B,cAAc,iBAAiB,6DAA6D,wDAAwD,0DAA0D,uFAAuF,6DAA6D,wDAAwD,qDAAqD,UAAU;CACpf;AACD,oCAAoC,kBAAkB,YAAY,cAAc,iBAAiB,eAAe,kBAAkB,WAAW,kBAAkB;CAC9J;AACD,8CAA8C,eAAe,kBAAkB,UAAU,SAAS,SAAS;CAC1G;AACD,qCAAqC,cAAc,mBAAmB;CACrE;AACD,gDAAgD,YAAY,gBAAgB;CAC3E;AACD,sDAAsD,WAAW,UAAU;CAC1E;AACD,wDAAwD,WAAW,UAAU;CAC5E;AACD,sDAAsD,mDAA0E,qBAAqB,gCAAgC,iBAAiB;CACrM;AACD,8DAA8D,eAAe,cAAc,mDAAyE,qBAAqB,gCAAgC,iBAAiB;CACzO;AACD,+CAA+C,WAAW,eAAe,cAAc,gBAAgB,kBAAkB;CACxH;AACD,gDAAgD,YAAY,gBAAgB;CAC3E;AACD,8CAA8C,YAAY,gBAAgB,aAAa;CACtF;AACD,mDAAmD,YAAY,gBAAgB,kBAAkB;CAChG;AACD,2CAA2C,YAAY,aAAa;CACnE;AACD,iDAAiD,eAAe;CAC/D;AACD,+CAA+C,cAAc,gBAAgB,WAAW;CACvF;AACD,2CAA2C,kBAAkB;CAC5D;AACD,iDAAiD,cAAc,YAAY,iBAAiB,gBAAgB,kBAAkB,iHAAiH,kFAAkF,6EAA6E,0EAA0E,2CAA2C,kCAAkC;CACpiB;AACD,sDAAsD,kBAAkB,YAAY,aAAa,WAAW,uBAAuB,gFAAgF,6HAA6H,+EAA+E,qEAAqE,qHAAqH,8DAA8D;CACtpB;AACD,6DAA6D,iBAAiB;CAC7E;AACD,iEAAiE,iBAAiB,mBAAmB,UAAU;CAC9G;AACD,uDAAuD,aAAa,cAAc,eAAe;CAChG;AACD,2DAA2D,YAAY,UAAU;CAChF;AACD,+CAA+C,cAAc,gBAAgB,kBAAkB,YAAY,iBAAiB,kBAAkB,eAAe,WAAW,kBAAkB;CACzL;AACD,+CAA+C,cAAc,gBAAgB,kBAAkB,YAAY,iBAAiB,kBAAkB,eAAe,WAAW,kBAAkB;CACzL;AACD;AACA,oCAAoC,YAAY,cAAc,gBAAgB;CAC7E;AACD,8CAA8C,QAAQ;CACrD;CACA;AACD;AACA,4CAA4C,WAAW;CACtD;AACD,sDAAsD,gBAAgB,gBAAgB;CACrF;CACA;AACD;AACA,4CAA4C,WAAW;CACtD;AACD,sDAAsD,gBAAgB,gBAAgB;CACrF;CACA",file:"setmanage.vue",sourcesContent:["\n.setmanage[data-v-ed260812]{color:#61808c;min-height:100vh;background:-webkit-linear-gradient(to top, #002c3a, #174d60);background:-o-linear-gradient(to top, #002c3a, #174d60);background:-mos-linear-gradient(to top, #002c3a, #174d60);background:-webkit-gradient(linear, left bottom, left top, from(#002c3a), to(#174d60));background:-webkit-linear-gradient(bottom, #002c3a, #174d60);background:-o-linear-gradient(bottom, #002c3a, #174d60);background:linear-gradient(to top, #002c3a, #174d60);width:100%\n}\n.setmanage .header[data-v-ed260812]{position:relative;height:60px;line-height:1;padding-top:35px;font-size:14px;text-align:center;color:#fff;background:#010101\n}\n.setmanage .header .ivu-icon[data-v-ed260812]{font-size:20px;position:absolute;left:15px;top:30px;left:10px\n}\n.setmanage .contain[data-v-ed260812]{margin:0 15px;padding-bottom:60px\n}\n.setmanage .contain .checklist[data-v-ed260812]{height:30px;line-height:30px\n}\n.setmanage .contain .checklist .u-mm[data-v-ed260812]{width:70px;float:left\n}\n.setmanage .contain .checklist .u-inch[data-v-ed260812]{width:70px;float:left\n}\n.setmanage .contain .checklist .cooh[data-v-ed260812]{background:url(../../assets/images/weld_icon_unit_unchoose.png) no-repeat;background-size:20px;background-position:left center;padding-left:25px\n}\n.setmanage .contain .checklist .cooh.choosed[data-v-ed260812]{font-size:14px;color:#dcedf3;background:url(../../assets/images/weld_icon_unit_choosed.png) no-repeat;background-size:20px;background-position:left center;padding-left:25px\n}\n.setmanage .contain .editunit[data-v-ed260812]{height:30x;font-size:14px;color:#7dc1d4;margin-top:20px;margin-bottom:20px\n}\n.setmanage .contain .checkboxs[data-v-ed260812]{height:40px;line-height:40px\n}\n.setmanage .contain .company[data-v-ed260812]{height:15px;margin-top:20px;color:#7dc1d4\n}\n.setmanage .contain .company-link[data-v-ed260812]{height:20px;margin-top:10px;margin-bottom:20px\n}\n.setmanage .contain .help[data-v-ed260812]{height:20px;color:#7dc1d4\n}\n.setmanage .contain .helpDetail[data-v-ed260812]{margin:10px 5px\n}\n.setmanage .contain .connnect[data-v-ed260812]{color:#7dc1d4;margin-top:20px;height:20px\n}\n.setmanage .contain .tabs[data-v-ed260812]{margin-bottom:20px\n}\n.setmanage .contain .tabs .m-li[data-v-ed260812]{color:#839baa;height:40px;line-height:40px;margin:10px 0px;border-radius:2px;background:-webkit-gradient(linear, left bottom, left top, from(#0a3b46), color-stop(50%, #022e38), to(#0a3b46));background:-webkit-linear-gradient(bottom, #0a3b46 0%, #022e38 50%, #0a3b46 100%);background:-o-linear-gradient(bottom, #0a3b46 0%, #022e38 50%, #0a3b46 100%);background:linear-gradient(to top, #0a3b46 0%, #022e38 50%, #0a3b46 100%);-webkit-box-shadow:0px 0px 2px 1px #103f4b;box-shadow:0px 0px 2px 1px #103f4b\n}\n.setmanage .contain .tabs .m-li .tab[data-v-ed260812]{text-align:center;height:40px;width:33.33%;float:left;border-right:2px solid;　-webkit-border-image:-webkit-linear-gradient(#16404c, #b7d4dc, #16404c) 1 10 1;-webkit-border-image:-webkit-gradient(linear, left top, left bottom, from(#16404c), color-stop(#b7d4dc), to(#16404c)) 1 10 1;-webkit-border-image:-webkit-linear-gradient(#16404c, #b7d4dc, #16404c) 1 10 1;-o-border-image:-o-linear-gradient(#16404c, #b7d4dc, #16404c) 1 10 1;border-image:-webkit-gradient(linear, left top, left bottom, from(#16404c), color-stop(#b7d4dc), to(#16404c)) 1 10 1;border-image:linear-gradient(#16404c, #b7d4dc, #16404c) 1 10 1\n}\n.setmanage .contain .tabs .m-li[data-v-ed260812] :last-child{border-right:none\n}\n.setmanage .contain .tabs .m-li .tab.choosedImg[data-v-ed260812]{font-weight:bold;background:#10566a;color:#fff\n}\n.setmanage .contain .connect-linesImg[data-v-ed260812]{height:150px;margin:0 20px;background:#eee\n}\n.setmanage .contain .connect-linesImg img[data-v-ed260812]{height:100%;width:100%\n}\n.setmanage .contain .resetBtn[data-v-ed260812]{margin:0 30px;margin-top:20px;border-radius:5px;height:50px;line-height:50px;text-align:center;font-size:16px;color:#fff;background:#ffb300\n}\n.setmanage .contain .loginBtn[data-v-ed260812]{margin:0 4rem;margin-top:20px;border-radius:5px;height:2rem;line-height:2rem;text-align:center;font-size:16px;color:#fff;background:#ffb300\n}\n@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3){\n.setmanage .header[data-v-ed260812]{height:60px;line-height:1;padding-top:30px\n}\n.setmanage .header .ivu-icon[data-v-ed260812]{top:37px\n}\n}\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2){\n.blueToothManage .blockHig[data-v-ed260812]{height:60px\n}\n.blueToothManage .blockHig .scanning[data-v-ed260812]{margin-top:10px;margin-left:10px\n}\n}\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3){\n.blueToothManage .blockHig[data-v-ed260812]{height:60px\n}\n.blueToothManage .blockHig .scanning[data-v-ed260812]{margin-top:10px;margin-left:10px\n}\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=4.9e76f1e99b0bc5aab369.js.map