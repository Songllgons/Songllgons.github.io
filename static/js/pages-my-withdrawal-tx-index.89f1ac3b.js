(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-withdrawal-tx-index"],{"0573":function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,".txTop[data-v-1610988c]{background-color:#f9f9fb;padding:%?50?% 8%;box-sizing:border-box;align-items:flex-start}.txTop>uni-text[data-v-1610988c]{color:#333;font-size:%?26?%}.txTop_r[data-v-1610988c]{width:70%}.txTop_ra uni-image[data-v-1610988c]{width:%?30?%;height:%?30?%;margin-top:%?10?%}.txTop_ra uni-view[data-v-1610988c]{margin-left:%?10?%}.txTop_ra uni-view uni-text[data-v-1610988c]{display:block}.txTop_ra uni-view uni-text[data-v-1610988c]:nth-child(1){font-size:%?30?%}.txTop_ra uni-view uni-text[data-v-1610988c]:nth-child(2){font-size:%?26?%;color:#999}.txTop_r>uni-image[data-v-1610988c]{width:%?15?%;margin-top:%?5?%}.txBtn[data-v-1610988c]{margin:0 auto;margin-top:%?60?%;width:84%}.txBtn .txBtna[data-v-1610988c]{color:#333;font-size:%?13?%}.txBtn uni-view[data-v-1610988c]{border-bottom:%?1?% solid #f5f5f5;padding-bottom:%?20?%;margin:%?30?% 0 %?10?%;align-items:center}.txBtn uni-view uni-text[data-v-1610988c]{font-size:%?50?%}.txBtn uni-view uni-input[data-v-1610988c]{margin-left:%?20?%}.txBtn .txBtnc[data-v-1610988c]{color:#999;font-size:%?13?%}.sub[data-v-1610988c]{width:60%;padding:%?15?%;background-color:#038578;color:#fff;text-align:center;border-radius:%?40?%;margin:0 auto;margin-top:%?100?%}.pop[data-v-1610988c]{margin-top:%?80?%}.bankx[data-v-1610988c]{align-items:center;border-bottom:%?1?% solid #f5f5f5;padding-bottom:%?20?%;margin-bottom:%?20?%}.bankx uni-view[data-v-1610988c]{align-items:center}.bankx uni-image[data-v-1610988c]{width:%?40?%;height:%?40?%;margin-right:%?10?%}.addAccount[data-v-1610988c]{margin-bottom:%?40?%;border-bottom:%?1?% solid #f5f5f5;padding-bottom:%?20?%;align-items:center}.addAccount uni-view[data-v-1610988c]{align-items:center}.addAccount uni-view uni-image[data-v-1610988c]{width:%?40?%;height:%?40?%}.addAccount uni-view uni-text[data-v-1610988c]{font-size:%?30?%;margin-left:%?10?%}.addAccount>uni-image[data-v-1610988c]{width:%?15?%}",""]),t.exports=i},"0b87":function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return n}));var n={uPopup:a("8fba").default},e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("v-uni-view",{staticClass:"flexj txTop"},[a("v-uni-text",[t._v("到账支付宝")]),a("v-uni-view",{staticClass:"flexj txTop_r",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.open.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"flex txTop_ra"},[a("v-uni-image",{attrs:{src:"/static/images/bank_1.png",mode:""}}),a("v-uni-view",[a("v-uni-text",[t._v("邮政银行")]),a("v-uni-text",[t._v("2小时内到账")])],1)],1),a("v-uni-image",{attrs:{src:"/static/images/right4.png",mode:"widthFix"}})],1)],1),a("v-uni-view",{staticClass:"txBtn"},[a("v-uni-text",{staticClass:"txBtna"},[t._v("提现金额")]),a("v-uni-view",{staticClass:"flex"},[a("v-uni-text",[t._v("￥")]),a("v-uni-input",{attrs:{type:"text",value:""}})],1),a("v-uni-text",{staticClass:"txBtnc"},[t._v("当前钱包余额为1000元")])],1),a("v-uni-view",{staticClass:"sub"},[t._v("确定")]),a("u-popup",{attrs:{show:t.show,mode:"bottom",closeable:!0},on:{close:function(i){arguments[0]=i=t.$handleEvent(i),t.close.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"pop box"},[a("v-uni-radio-group",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.radioChange.apply(void 0,arguments)}}},t._l(t.items,(function(i,n){return a("v-uni-label",{key:i.value},[a("v-uni-view",{staticClass:"flexj bankx"},[a("v-uni-view",{staticClass:"flex"},[a("v-uni-image",{attrs:{src:"/static/images/bank_1.png",mode:""}}),a("v-uni-view",{staticClass:"flex txTop_ra"},[a("v-uni-view",[a("v-uni-text",[t._v(t._s(i.name))]),a("v-uni-text",[t._v("2小时内到账")])],1)],1)],1),a("v-uni-radio",{attrs:{value:i.value,checked:n===t.current}})],1)],1)})),1),a("v-uni-view",{staticClass:"flexj addAccount",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addAccount.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"flex"},[a("v-uni-image",{attrs:{src:"/static/images/add2.png",mode:""}}),a("v-uni-text",[t._v("添加到账途径")])],1),a("v-uni-image",{attrs:{src:"/static/images/right4.png",mode:"widthFix"}})],1)],1)],1)],1)},o=[]},"1c30":function(t,i,a){var n=a("0573");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("957b21e0",n,!0,{sourceMap:!1,shadowMode:!1})},"435d":function(t,i,a){"use strict";a.r(i);var n=a("0b87"),e=a("6fd3");for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);a("6b95");var u,c=a("f0c5"),s=Object(c["a"])(e["default"],n["b"],n["c"],!1,null,"1610988c",null,!1,n["a"],u);i["default"]=s.exports},"6b95":function(t,i,a){"use strict";var n=a("1c30"),e=a.n(n);e.a},"6fd3":function(t,i,a){"use strict";a.r(i);var n=a("bb16"),e=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);i["default"]=e.a},bb16:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{show:!1,items:[{value:"1",name:"建设银行"},{value:"2",name:"农业银行"},{value:"3",name:"人民银行"},{value:"4",name:"工商银行"}],current:0}},onLoad:function(){},methods:{open:function(){this.show=!0},close:function(){this.show=!1},radioChange:function(t){this.current=evt.detail.value,console.log(t.detail.value)},addAccount:function(){uni.navigateTo({url:"/pages/my/withdrawal/binding/index"})}}};i.default=n}}]);