(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mall-order-index"],{"635d":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".address[data-v-473f5281]{align-items:center}.address uni-image[data-v-473f5281]{width:%?30?%}.address uni-text[data-v-473f5281]{color:#999;font-size:%?28?%;margin-left:%?10?%}.select[data-v-473f5281]{padding-bottom:%?40?%;border-bottom:%?1?% solid #eee}.selecta[data-v-473f5281]{align-items:center;margin-top:%?50?%}.selecta>uni-image[data-v-473f5281]{width:%?80?%;height:%?80?%;border-radius:50%;display:block}.selecta uni-view uni-image[data-v-473f5281]{width:%?13?%;height:%?25?%}.selecta uni-text[data-v-473f5281]{font-size:%?28?%;margin:0 %?15?%}.noseit[data-v-473f5281]{color:#999}.goods[data-v-473f5281]{margin-top:%?40?%}.goods--img[data-v-473f5281]{width:48%;height:%?280?%}.popTopR[data-v-473f5281]{width:48%}.popTopR uni-view[data-v-473f5281]{color:#ff5306}.popTopR uni-view uni-text[data-v-473f5281]{font-weight:700;font-size:%?50?%}.popTopR .popTopRtab[data-v-473f5281]{font-size:%?30?%;display:block;margin-top:%?10?%}.popTopnav[data-v-473f5281]{font-size:%?26?%;display:block;margin-top:%?10?%}.city[data-v-473f5281]{margin-top:%?30?%}.citya[data-v-473f5281]{align-items:center}.citya uni-image[data-v-473f5281]{width:%?40?%;margin-right:%?10?%}.citya uni-text[data-v-473f5281]{font-size:%?28?%}.cityb[data-v-473f5281]{margin-left:%?50?%;margin-top:%?10?%;color:#999;font-size:%?28?%;align-items:center}.cityb uni-view[data-v-473f5281]{width:90%}.cityb uni-view uni-text[data-v-473f5281]{color:#000;display:block}.cityb .right2[data-v-473f5281]{width:%?15?%;height:%?25?%}.footer[data-v-473f5281]{padding:%?20?% 0;border-top:%?1?% solid #f5f5f5;background-color:#fff;position:fixed;left:0;bottom:0;width:100%}.foot[data-v-473f5281]{align-items:center}.footerL[data-v-473f5281]{color:#ff5306;font-size:%?30?%}.footerL uni-text[data-v-473f5281]{font-weight:700;font-size:%?40?%}.footerR[data-v-473f5281]{width:30%;background-color:#999;color:#fff;text-align:center;font-size:%?28?%;padding:%?20?% 0;border-radius:%?50?%}.footerRa[data-v-473f5281]{width:30%;background-color:#ff5306;color:#fff;text-align:center;font-size:%?28?%;padding:%?20?% 0;border-radius:%?50?%}.deposit[data-v-473f5281]{background-color:#f5f5f5;color:#038578;font-size:%?28?%;margin-top:%?40?%;box-sizing:border-box;padding:%?30?% %?20?%;border-radius:%?20?%}.deposit uni-text[data-v-473f5281]{font-weight:700;font-size:%?36?%;margin-right:%?10?%}.payTitle[data-v-473f5281]{text-align:center;margin-top:%?20?%;margin-bottom:%?40?%}.spaya[data-v-473f5281]{margin-top:%?30?%;border-bottom:%?1?% solid #eee;padding-bottom:%?30?%}.spaya uni-image[data-v-473f5281]{width:%?50?%;height:%?50?%;margin-right:%?20?%}.spaya uni-text[data-v-473f5281]{color:#333;font-size:%?30?%}.confirm[data-v-473f5281]{color:#fff;background-color:#ff5306;font-size:%?28?%;border-radius:%?40?%;text-align:center;padding:%?20?%;margin:%?30?% auto;width:90%}",""]),t.exports=e},"716a":function(t,e,i){var a=i("635d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("f325ea6c",a,!0,{sourceMap:!1,shadowMode:!1})},7400:function(t,e,i){"use strict";i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.getLogin=n,e.sendRegisterCode=s,e.register=r,e.updateMemberData=d,e.getMemberInfo=u,e.upAvatar=c,e.shiming=l,e.memberPwdChange=f,e.sendForgotCode=v,e.loginSetp=g,e.logOut=p,e.getIndexData=m,e.getEqptList=h,e.getComplaintData=b,e.getAbout=w,e.getGoodDetail=_,e.getGoodIndex=y,e.getGoodSite=x,e.getGoodRepairType=C,e.getCreateShare=S,e.getAboutContract=q,e.orderAutograph=T,e.signatureCheck=A,e.orderBuy=k,e.payMoney=I,e.getOrderlist=O,e.getOrderZulist=P,e.buyOrderList=F,e.confirmPickup=$,e.getMemberAddressedit=z,e.getDeleteaddress=E,e.getAddress=G,e.getAddressDetail=L,e.getMydeposit=R,e.loginByPwd=M,e.getBaseInfo=j;var a=i("d858");function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get";return new Promise((function(o,n){uni.request({url:a.server_url+t,data:e,method:i,success:function(t){o(t.data)},fail:function(t){n(t)}})}))}function n(t){return o("/web/login/login",t,"get")}function s(t){return o("/web/login/send",t,"get")}function r(t){return o("/web/login/verify",t,"post")}function d(t){return(0,a.request)({url:"/web/member/update",method:"get",data:t})}function u(t){return(0,a.request)({url:"/web/member/index",method:"get",data:t})}function c(t){return(0,a.request)({url:"/web/member/save_img",method:"get",data:t})}function l(t){return(0,a.request)({url:"/web/member/shiming",method:"post",data:t})}function f(t){return(0,a.request)({url:"/web/member/change",method:"post",data:t})}function v(t){return o("/web/login/forgot",t,"post")}function g(t){return o("/web/login/setp",t,"get")}function p(t){return(0,a.request)({url:"/web/login/logout",method:"get",data:t})}function m(t){return(0,a.request)({url:"/web/index/index",method:"get",data:t})}function h(t){return(0,a.request)({url:"/web/member/list",method:"get",data:t})}function b(t){return(0,a.request)({url:"/web/about/create",method:"post",data:t})}function w(t){return(0,a.request)({url:"/web/about/about",method:"get",data:t})}function _(t,e){return(0,a.request)({url:"/web/good/detail/"+e,method:"get",data:t})}function y(t){return(0,a.request)({url:"/web/good/index",method:"get",data:t})}function x(t){return(0,a.request)({url:"/web/good/site",method:"get",data:t})}function C(t){return(0,a.request)({url:"/web/good/repairType",method:"get",data:t})}function S(t){return(0,a.request)({url:"/web/member/create_share",method:"get",data:t})}function q(t){return(0,a.request)({url:"/web/about/contract",method:"get",data:t})}function T(t){return(0,a.request)({url:"/web/order/autograph",method:"post",data:t})}function A(t){return(0,a.request)({url:"/web/order/autograph_check",method:"post",data:t})}function k(t){return(0,a.request)({url:"/web/order/buy",method:"post",data:t})}function I(t){return(0,a.request)({url:"/web/pay/apppay",method:"get",data:t})}function O(t){return(0,a.request)({url:"/web/order/orderlist",method:"get",data:t})}function P(t){return(0,a.request)({url:"/web/order/zulist",method:"get",data:t})}function F(t){return(0,a.request)({url:"/web/order/orderlist",method:"get",data:t})}function $(t){return(0,a.request)({url:"/weg/order/confirmReceivingGoods",method:"post",data:t})}function z(t){return(0,a.request)({url:"/web/member/addressedit",method:"get",data:t})}function E(t){return(0,a.request)({url:"/web/member/deleteaddress",method:"get",data:t})}function G(t){return(0,a.request)({url:"/web/member/getaddress",method:"get",data:t})}function L(t){return(0,a.request)({url:"/web/member/getaddressdetail",method:"get",data:t})}function R(t){return(0,a.request)({url:"/web/member/mydeposit",method:"get",data:t})}function M(t){return(0,a.request)({url:"/mobile/account/loginByPwd",method:"post",data:t})}function j(t){return(0,a.request)({url:"/mobile/user/getBaseInfo",method:"get",data:t})}},"888e":function(t,e,i){"use strict";i.r(e);var a=i("9f00"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},9926:function(t,e,i){"use strict";i.r(e);var a=i("b115"),o=i("888e");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("e27e");var s,r=i("f0c5"),d=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"473f5281",null,!1,a["a"],s);e["default"]=d.exports},"9f00":function(t,e,i){"use strict";i("4de4"),i("4160"),i("d81d"),i("a9e3"),i("acd8"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("7400"),o=i("7400"),n={data:function(){return{pop:!1,closeable:!0,items:[{id:"1",url:"/static/images/pay1.png",name:"支付宝支付"},{id:"2",url:"/static/images/pay2.png",name:"微信支付"},{id:"3",url:"/static/images/pay3.png",name:"线下支付"}],current:"0",orderType:0,orderGoods:{shop_img:{http_img:""}},defaultSit:{},sitList:[],chooseId:0,attrInfo:{price:0},defaultAddress:{address:"添加收货地址。。。"},yaJin:0,btnInfo:["提交订单","确认支付"],isSubmitOrder:0,order_no:"",orderGoodsInfo:{},address_id:""}},onLoad:function(t){console.log(this.$pageQuery(t));var e=this.$pageQuery(t);uni.setNavigationBarTitle({title:e.isSubmitOrder?"订单支付":"提交订单"}),this.id=e.id,this.orderType=e.orderType,this.chooseId=e.chooseId,this.isSubmitOrder=e.isSubmitOrder?e.isSubmitOrder:0,this.order_no=e.order_no,this.getSite()},computed:{allPrice:function(t){var e=t.orderGoods.shop_price,i=t.orderType,a=t.attrInfo.price,o=t.yaJin,n=0,s=0;return 1===i?n=parseFloat(e):(n=parseFloat(a),s=parseFloat(o)),n+s}},methods:{getSite:function(){var t=this,e=(this.chooseId,this.id,this.orderType);(0,a.getGoodSite)({id:this.id,q:uni.getStorageSync("cityName"),latitude:uni.getStorageSync("latitude"),longitude:uni.getStorageSync("longitude")}).then((function(i){if(0===i.code){t.orderGoods=i.data,t.yaJin=parseFloat(i.data.shop_deposit),e||(t.attrInfo=i.data.attrinfo.filter((function(e){return e.id===t.chooseId}))[0]);var a=i.users;if(a.length){a.forEach((function(t){return t.distance=Number(t.distance.toFixed(3))}));var o=a[0].distance;a.map((function(t){t.img=i.url+t.img,o=Math.min(t.distance,o)})),t.defaultSit=a.filter((function(t){return t.distance===o}))[0]}t.sitList=a}}))},submitOrder:function(){var t=this,e=this.id,i=this.chooseId,a=this.defaultSit.id,n=this.orderType,s=this.address_id;this.order_no;console.log({id:e,attr_id:i,users_id:a}),(0,o.orderBuy)({id:e,attr_id:i,users_id:a,address_id:s}).then((function(a){t.$msg(a.msg),console.log(a),0===a.code?(t.order_no=a.data.order_no,n?t.$openPage("postOrder",{id:e,orderType:n,chooseId:i,isSubmitOrder:1,order_no:a.data.order_no},{type:2}):t.getSignatureCheck(a.data.order_no)):t.isSubmitOrder=1}))},getSignatureCheck:function(t){var e=this,i=this.id,a=this.chooseId,n=this.orderType;(0,o.signatureCheck)({order_no:t}).then((function(o){1===o.code&&(e.$msg(o.msg),setTimeout((function(){e.$openPage("contractSignature",{id:i,orderType:n,chooseId:a,order_no:t},{type:2})}),1500))}))},btnHandleEvent:function(){var t=this.isSubmitOrder;0===t?this.submitOrder():this.popOpen()},selectSite:function(){this.isSubmitOrder||uni.navigateTo({url:"/pages/mall/site/index"})},selectAdd:function(){this.isSubmitOrder||uni.navigateTo({url:"/pages/my/address/index?from=mallOrder"})},open:function(){this.pop=!1},close:function(){this.pop=!1},popOpen:function(){this.pop=!0},radioChange:function(t){this.current=t.detail.value},confirmPay:function(){var t=this;console.log("confirmPay====");var e=this.order_no,i=this.current;console.log({order_no:e,type:i});var a="";1==i?a="alipay":2==i&&(a="wxpay");var n="";(0,o.payMoney)({order_no:e,type:i}).then((function(e){t.$msg(e.msg),10===e.code?(n=e.data,t.toAppPay(a,n)):20===e.code?(n=e.data2,t.toAppPay(a,n)):30===e.code?console.log("线下支付"):console.log("其它情况")})),this.pop=!1},toAppPay:function(t,e){console.log("provider",t),console.log("orderInfo",e),uni.getProvider({service:"payment",success:function(i){uni.requestPayment({provider:t,orderInfo:e,success:function(t){console.log("成功回调",t)},fail:function(t){console.log("支付失败,原因为: ",t)}})}})}}};e.default=n},b115:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={uPopup:i("8fba").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.orderType?[i("v-uni-view",{staticClass:"address flex box"},[i("v-uni-image",{attrs:{src:"/static/images/address2.png",mode:"widthFix"}}),i("v-uni-text",[t._v("合肥市")])],1),i("v-uni-view",{staticClass:"select"},[t.sitList.length?i("v-uni-view",{staticClass:"selecta box flex"},[i("v-uni-image",{attrs:{src:t.defaultSit.img}}),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectSite.apply(void 0,arguments)}}},[i("v-uni-text",[t._v(t._s(t.defaultSit.username))]),i("v-uni-image",{attrs:{src:"/static/images/right.png"}})],1)],1):i("v-uni-view",{staticClass:"selecta box flex"},[i("v-uni-image",{attrs:{src:"/static/images/tx.png",mode:"widthFix"}}),i("v-uni-text",{staticClass:"noseit"},[t._v("城市无站点")])],1),i("v-uni-view",{staticClass:"goods flexj box"},[i("v-uni-image",{staticClass:"goods--img",attrs:{src:t.orderGoods.shop_img.http_img,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"popTopR"},[i("v-uni-view",[t._v("￥"),i("v-uni-text",[t._v(t._s(t.orderGoods.shop_price))])],1),i("v-uni-text",{staticClass:"popTopRtab"},[t._v(t._s(t.orderGoods.shop_name))]),i("v-uni-text",{staticClass:"popTopnav"},[t._v("配送方式："+t._s(t.sitList.length?"自取":"邮寄"))]),i("v-uni-text",{staticClass:"popTopnav"},[t._v("商品数量：1")])],1)],1)],1),t.sitList.length?i("v-uni-view",{staticClass:"city box"},[i("v-uni-view",{staticClass:"flex citya"},[i("v-uni-image",{attrs:{src:"/static/images/city.png",mode:"widthFix"}}),i("v-uni-text",[t._v("自取地址")])],1),i("v-uni-view",{staticClass:"cityb"},[t._v(t._s(t.defaultSit.address)+"|"+t._s(t.defaultSit.distance)+"KM")])],1):i("v-uni-view",{staticClass:"city box"},[i("v-uni-view",{staticClass:"flex citya"},[i("v-uni-image",{attrs:{src:"/static/images/cargo.png",mode:"widthFix"}}),i("v-uni-text",[t._v("收货地址")])],1),i("v-uni-view",{staticClass:"cityb flexj",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectAdd.apply(void 0,arguments)}}},[i("v-uni-view",[i("v-uni-text",[t._v(t._s(t.defaultAddress.cname)+" "+t._s(t.defaultAddress.phone))]),i("v-uni-text",[t._v(t._s(t.defaultAddress.prov)+" "+t._s(t.defaultAddress.city)+" "+t._s(t.defaultAddress.country)+" "+t._s(t.defaultAddress.address))])],1),i("v-uni-image",{staticClass:"right2",attrs:{src:"/static/images/right2.png"}})],1)],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"foot flexj box"},[i("v-uni-view",{staticClass:"footerL"},[t._v("合计:￥"),i("v-uni-text",[t._v(t._s(t.allPrice))])],1),i("v-uni-view",{staticClass:"footerRa",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnHandleEvent.apply(void 0,arguments)}}},[t._v(t._s(t.btnInfo[t.isSubmitOrder]))])],1)],1)]:[i("v-uni-view",{staticClass:"address flex box"},[i("v-uni-image",{attrs:{src:"/static/images/address2.png",mode:"widthFix"}}),i("v-uni-text",[t._v("合肥市")])],1),i("v-uni-view",{staticClass:"select"},[t.sitList.length?i("v-uni-view",{staticClass:"selecta box flex"},[i("v-uni-image",{attrs:{src:t.defaultSit.img}}),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectSite.apply(void 0,arguments)}}},[i("v-uni-text",[t._v(t._s(t.defaultSit.username))]),i("v-uni-image",{attrs:{src:"/static/images/right.png"}})],1)],1):i("v-uni-view",{staticClass:"selecta box flex"},[i("v-uni-image",{attrs:{src:"/static/images/tx.png",mode:"widthFix"}}),i("v-uni-text",{staticClass:"noseit"},[t._v("城市无站点")])],1),i("v-uni-view",{staticClass:"goods flexj box"},[i("v-uni-image",{staticClass:"goods--img",attrs:{src:t.orderGoods.shop_img.http_img,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"popTopR"},[i("v-uni-view",[t._v("￥"),i("v-uni-text",[t._v(t._s(t.attrInfo.price))]),t._v("/"+t._s(t.attrInfo.number)+"月")],1),i("v-uni-text",{staticClass:"popTopRtab"},[t._v(t._s(t.orderGoods.shop_name))]),i("v-uni-text",{staticClass:"popTopnav"},[t._v("配送方式："+t._s(t.sitList.length?"自取":"邮寄"))]),i("v-uni-text",{staticClass:"popTopnav"},[t._v("商品数量：1")])],1)],1),i("v-uni-view",{staticClass:"deposit box"},[i("v-uni-text",[t._v(t._s(t.orderGoods.shop_deposit)+"元押金")]),t._v("押金交纳，随时可退")],1)],1),t.sitList.length?i("v-uni-view",{staticClass:"city box"},[i("v-uni-view",{staticClass:"flex citya"},[i("v-uni-image",{attrs:{src:"/static/images/city.png",mode:"widthFix"}}),i("v-uni-text",[t._v("自取地址")])],1),i("v-uni-view",{staticClass:"cityb"},[t._v(t._s(t.defaultSit.address)+"|"+t._s(t.defaultSit.distance)+"KM")])],1):i("v-uni-view",{staticClass:"city box"},[i("v-uni-view",{staticClass:"flex citya"},[i("v-uni-image",{attrs:{src:"/static/images/cargo.png",mode:"widthFix"}}),i("v-uni-text",[t._v("收货地址")])],1),i("v-uni-view",{staticClass:"cityb flexj",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectAdd.apply(void 0,arguments)}}},[i("v-uni-view",[i("v-uni-text",[t._v(t._s(t.defaultAddress.cname)+" "+t._s(t.defaultAddress.phone))]),i("v-uni-text",[t._v(t._s(t.defaultAddress.prov)+" "+t._s(t.defaultAddress.city)+" "+t._s(t.defaultAddress.country)+" "+t._s(t.defaultAddress.address))])],1),i("v-uni-image",{staticClass:"right2",attrs:{src:"/static/images/right2.png"}})],1)],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"foot flexj box"},[i("v-uni-view",{staticClass:"footerL"},[t._v("合计:￥"),i("v-uni-text",[t._v(t._s(t.allPrice))])],1),i("v-uni-view",{staticClass:"footerRa",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnHandleEvent.apply(void 0,arguments)}}},[t._v(t._s(t.btnInfo[t.isSubmitOrder]))])],1)],1)],i("u-popup",{attrs:{show:t.pop,round:10,mode:"bottom",closeable:t.closeable},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)},open:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"payTitle"},[t._v("支付")]),i("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.items,(function(e,a){return i("v-uni-label",{key:e.value,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",{staticClass:"flexj spaya box"},[i("v-uni-view",{staticClass:"flex spayb"},[i("v-uni-image",{attrs:{src:e.url,mode:""}}),i("v-uni-text",[t._v(t._s(e.name))])],1),i("v-uni-radio",{attrs:{value:e.id,color:"#FF5306"}})],1)],1)})),1),i("v-uni-view",{staticClass:"confirm box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmPay.apply(void 0,arguments)}}},[t._v("确认")])],1)],2)},n=[]},e27e:function(t,e,i){"use strict";var a=i("716a"),o=i.n(a);o.a}}]);