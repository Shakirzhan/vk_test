(this.webpackJsonpcurrency=this.webpackJsonpcurrency||[]).push([[0],{114:function(e,t,r){e.exports=r(136)},133:function(e,t,r){},134:function(e,t,r){},135:function(e,t,r){},136:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(19),o=r.n(c),u=r(14),i=r(33),s=r(32),l=r(43),h=r(44),m=[{name:"currency",path:"/currency"},{name:"about",path:"/about"}];var d=r(34),v=r.n(d),p=r(45),y=r.n(p),b=v()({currencyRates:void 0});function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"currency_rates.CBR_DAILY_FETCHED":return e.merge({cbrDaily:t.daily});case"currency_rates.USD_EUR_RATE_FETCHED":return e.merge({usdEurRate:t.daily});default:return e}}function g(e){return e.currencyRates.cbrDaily}function _(e){return e.currencyRates.usdEurRate}function C(e){return e.currencyRates.cbrDaily?y.a.keyBy(e.currencyRates.cbrDaily.Valute,(function(e){return e.CharCode})):[]}var E=v()({vk:void 0});function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"vk.accessTokenFetched":return e.merge({accessToken:t.accessToken});case"vk.notificationsStatusFetched":return e.merge({notificationStatus:t.notificationStatus});case"vk.insetsFetched":return e.merge({insets:t.insets});case"vk.accessTokenFailed":case"vk.notificationsStatusFailed":return e.merge({logs:t.error});default:return e}}function j(e){return e.vk.accessToken}function w(e){return e.vk.notificationStatus}function O(e){return e.vk.insets}function R(e){return JSON.stringify(e.vk.logs)}var S=r(27),A=r(38),D=r(46),U=r(47);var N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var x=r(7),P=r(8),F=r(16),B=r(15),V=r(4),W=(r(31),r(17)),H=r.n(W),I=r(25),M=r(40);var L=r(54),Y=r.n(L),K=r(55),$=r.n(K),J=(r(133),r(56)),q=r.n(J),z=function(e){Object(F.a)(r,e);var t=Object(B.a)(r);function r(){return Object(x.a)(this,r),t.apply(this,arguments)}return Object(P.a)(r,[{key:"render",value:function(){return a.a.createElement(V.d,{className:"footer"},a.a.createElement(V.a,{level:"3",component:"a",target:"_blank",href:"https://vk.me/currency_app",before:a.a.createElement(q.a,null)}),a.a.createElement(V.a,{level:"3",component:"a",target:"_blank",href:"https://vk.com/currency_app"},"\u0413\u0440\u0443\u043f\u043f\u0430"),a.a.createElement(V.a,{level:"3",component:"a",onClick:this.openAbout.bind(this)},"\u041e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435"))}},{key:"openAbout",value:function(){this.props.router.navigate("about")}}]),r}(n.Component);var G=Object(u.b)((function(e){return{}}))(z),Q=function(e){Object(F.a)(r,e);var t=Object(B.a)(r);function r(){return Object(x.a)(this,r),t.apply(this,arguments)}return Object(P.a)(r,[{key:"render",value:function(){var e=Object(V.p)();return a.a.createElement(V.k,{id:this.props.id},a.a.createElement(V.l,{left:a.a.createElement(V.f,{onClick:this.navigationBack.bind(this)},e===V.g?a.a.createElement(Y.a,null):a.a.createElement($.a,null))},"\u041e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435"),a.a.createElement(V.e,{title:"\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434"},a.a.createElement(V.d,null,"\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u043d\u0430 ",a.a.createElement(V.i,{href:"https://github.com/tsivarev/currency"},"GitHub"),".",a.a.createElement("br",null),a.a.createElement("br",null),"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f ",a.a.createElement(V.i,{href:"https://vk.com/dev/vk_apps_docs"},"VK Apps \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b"),".")),a.a.createElement(V.e,{title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b"},a.a.createElement(V.j,null,a.a.createElement(V.b,{multiline:!0},"\u0418\u043a\u043e\u043d\u043a\u0438 \u2013 ",a.a.createElement(V.i,{href:"https://www.flaticon.com/authors/smashicons"},"Smashicons"),". \u041b\u0438\u0446\u0435\u043d\u0437\u0438\u044f ",a.a.createElement(V.i,{href:"http://creativecommons.org/licenses/by/3.0/"},"CC 3.0 BY"),"."),a.a.createElement(V.b,{multiline:!0},"\u041a\u0443\u0440\u0441\u044b \u0426\u0411 \u0420\u0424 \u2013 ",a.a.createElement(V.i,{href:"https://www.cbr-xml-daily.ru/"},"API"),"."),a.a.createElement(V.b,{multiline:!0},"\u041a\u0443\u0440\u0441 USD/EUR \u2013 ",a.a.createElement(V.i,{href:"https://free.currencyconverterapi.com/"},"API"),"."))),a.a.createElement(G,{router:this.props.router}))}},{key:"navigationBack",value:function(){this.props.router.navigate("currency")}}]),r}(n.Component);var X=Object(u.b)((function(e){return{}}))(Q),Z=(r(57),r(20)),ee=(r(134),function(e){Object(F.a)(r,e);var t=Object(B.a)(r);function r(e){var n;return Object(x.a)(this,r),(n=t.call(this,e)).renderRow=n.renderRow.bind(Object(Z.a)(n)),n}return Object(P.a)(r,[{key:"getPrettyDate",value:function(e){var t=new Date(Date.parse(e)),r=t.getDate(),n=t.getMonth(),a=t.getFullYear();return("0"+r).slice(-2)+"."+("0"+(n+1)).slice(-2)+"."+a.toString().substr(-2)}},{key:"render",value:function(){if(!this.props.rates)return a.a.createElement(V.d,null);var e=this.getPrettyDate(this.props.rates.Date),t=this.getPrettyDate(this.props.rates.PreviousDate);return a.a.createElement(V.j,null,a.a.createElement(V.b,{before:a.a.createElement("div",{className:"currency_rate_dashboard__item_before"})},a.a.createElement("div",{className:"currency_rate_dashboard__item"},a.a.createElement("div",{className:"currency_rate_dashboard__item__column currency_rate_dashboard__header"},e),a.a.createElement("div",{className:"currency_rate_dashboard__item__column currency_rate_dashboard__header"},t))),this.renderRow("$",this.props.cbrCurrencies.USD),this.renderRow("\u20ac",this.props.cbrCurrencies.EUR))}},{key:"renderRow",value:function(e,t){var r=t.Value>t.Previous,n=r?"#1BEA60":"#FF0000",c=r?"\u2191":"\u2193";return a.a.createElement(V.b,{before:a.a.createElement("div",{className:"currency_rate_dashboard__item_before"},e)},a.a.createElement("div",{className:"currency_rate_dashboard__item"},a.a.createElement("div",{className:"currency_rate_dashboard__item__column",style:{color:n}},t.Value," \u20bd ",c),a.a.createElement("div",{className:"currency_rate_dashboard__item__column"},t.Previous," \u20bd")))}}]),r}(n.Component));Object(u.b)((function(e){return{rates:g(e),cbrCurrencies:C(e)}}))(ee),r(135);var te="USD",re="RUB",ne="EUR",ae=function(e){Object(F.a)(r,e);var t=Object(B.a)(r);function r(e){var n;return Object(x.a)(this,r),(n=t.call(this,e)).state={sourceCurrencyCode:te,targetCurrencyCode:re,amount:0,convertedAmount:"0"},n.changeSourceCurrencyCode=n.changeSourceCurrencyCode.bind(Object(Z.a)(n)),n.changeTargetCurrencyCode=n.changeTargetCurrencyCode.bind(Object(Z.a)(n)),n.changeAmount=n.changeAmount.bind(Object(Z.a)(n)),n.getCurrencyRate=n.getCurrencyRate.bind(Object(Z.a)(n)),n.calculateAmount=n.calculateAmount.bind(Object(Z.a)(n)),n}return Object(P.a)(r,[{key:"changeSourceCurrencyCode",value:function(e){var t=this.state.targetCurrencyCode,r=e.target.value;this.state.targetCurrencyCode===e.target.value&&(t=this.state.sourceCurrencyCode),this.setState({sourceCurrencyCode:r,targetCurrencyCode:t,convertedAmount:this.calculateAmount(this.state.amount,r,t)})}},{key:"changeTargetCurrencyCode",value:function(e){var t=e.target.value,r=this.state.sourceCurrencyCode;this.state.sourceCurrencyCode===e.target.value&&(r=this.state.targetCurrencyCode),this.setState({sourceCurrencyCode:r,targetCurrencyCode:t,convertedAmount:this.calculateAmount(this.state.amount,r,t)})}},{key:"getCurrencyRate",value:function(e,t){return this.props.cbrCurrencies?e===re?this.props.cbrCurrencies[t]?1/this.props.cbrCurrencies[t].Value:1:t===re?this.props.cbrCurrencies[e]?this.props.cbrCurrencies[e].Value:1:t===te?1/this.props.usdEurRate.USD_EUR.val:t===ne?this.props.usdEurRate.USD_EUR.val:1:1}},{key:"calculateAmount",value:function(e,t,r){return this.getCurrencyRate(t,r)*e}},{key:"getPrettyAmount",value:function(e){return(Math.round(e*Math.pow(10,2))/Math.pow(10,2)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}},{key:"changeAmount",value:function(e){this.setState({amount:e.target.value,convertedAmount:this.calculateAmount(e.target.value,this.state.sourceCurrencyCode,this.state.targetCurrencyCode)})}},{key:"getCurrencySymbol",value:function(e){switch(e){case te:return"$";case ne:return"\u20ac";case re:return"\u20bd";default:return""}}},{key:"render",value:function(){return a.a.createElement(V.d,{className:"currency_converter"},a.a.createElement("div",{style:{color:"#71757A"}},"\u041a\u0443\u0440\u0441 1 ",this.getCurrencySymbol(this.state.sourceCurrencyCode)," = ",this.getPrettyAmount(this.getCurrencyRate(this.state.sourceCurrencyCode,this.state.targetCurrencyCode))," ",this.getCurrencySymbol(this.state.targetCurrencyCode)),a.a.createElement("div",{className:"currency_converter__amount_input"},a.a.createElement("div",{className:"currency_converter__amount_input__input"},a.a.createElement(V.h,{type:"number",placeholder:"0",pattern:"\\d*",value:this.state.amount?this.state.amount.toLocaleString():"",alignment:"right",onChange:this.changeAmount})),a.a.createElement("div",{className:"currency_converter__amount_input__selector"},a.a.createElement(V.n,{value:this.state.sourceCurrencyCode,onChange:this.changeSourceCurrencyCode},a.a.createElement("option",{value:te},this.getCurrencySymbol(te)),a.a.createElement("option",{value:ne},this.getCurrencySymbol(ne)),a.a.createElement("option",{value:re},this.getCurrencySymbol(re))))),a.a.createElement("div",{className:"currency_converter__amount_input"},a.a.createElement("div",{className:"currency_converter__amount_input__input"},a.a.createElement(V.h,{type:"text",alignment:"right",disabled:!0,value:this.getPrettyAmount(this.state.convertedAmount)})),a.a.createElement("div",{className:"currency_converter__amount_input__selector"},a.a.createElement(V.n,{value:this.state.targetCurrencyCode,onChange:this.changeTargetCurrencyCode},a.a.createElement("option",{value:te},this.getCurrencySymbol(te)),a.a.createElement("option",{value:ne},this.getCurrencySymbol(ne)),a.a.createElement("option",{value:re},this.getCurrencySymbol(re))))))}}]),r}(n.Component);Object(u.b)((function(e){return{cbrCurrencies:C(e),usdEurRate:_(e)}}))(ae);var ce=new(function(){function e(){Object(x.a)(this,e)}return Object(P.a)(e,[{key:"getDaily",value:function(){var e=Object(I.a)(H.a.mark((function e(t){var r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.getDate()+"_"+(t.getMonth()+1)+"_"+t.getFullYear(),e.abrupt("return",fetch("https://www.cbr-xml-daily.ru/daily_json.js?"+r).then((function(e){return e.json()})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}],[{key:"pad",value:function(e){return e<10?"0"+e:e}}]),e}()),oe=new(function(){function e(){Object(x.a)(this,e)}return Object(P.a)(e,[{key:"getUsdEurRate",value:function(){var e=Object(I.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://free.currencyconverterapi.com/api/v5/convert?q=USD_EUR&compact=y&apiKey=88bb8bbba9a29716dfd5").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}());var ue=function(e){Object(F.a)(r,e);var t=Object(B.a)(r);function r(){return Object(x.a)(this,r),t.apply(this,arguments)}return Object(P.a)(r,[{key:"render",value:function(){return a.a.createElement(V.d,null,this.props.logs)}}]),r}(n.Component);Object(u.b)((function(e){return{logs:R(e)}}))(ue);var ie=function(e){Object(F.a)(r,e);var t=Object(B.a)(r);function r(){return Object(x.a)(this,r),t.apply(this,arguments)}return Object(P.a)(r,[{key:"componentWillMount",value:function(){this.props.dispatch(function(){var e=Object(I.a)(H.a.mark((function e(t,r){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.getUsdEurRate();case 3:n=e.sent,t({type:"currency_rates.USD_EUR_RATE_FETCHED",daily:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}()),this.props.dispatch(function(){var e=Object(I.a)(H.a.mark((function e(t,r){var n,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new Date,e.next=4,ce.getDaily(n);case 4:a=e.sent,t({type:"currency_rates.CBR_DAILY_FETCHED",daily:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}())}},{key:"render",value:function(){return a.a.createElement(V.k,{id:this.props.id},a.a.createElement(V.l,null,"\u041b\u043e\u0433\u043e - \u041b\u0430\u043f\u044b \u0438 \u0445\u0432\u043e\u0441\u0442\u044b"),a.a.createElement(V.d,{style:{textAlign:"center"}},a.a.createElement("h1",null,"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u041d\u0438\u043a!"),a.a.createElement("div",{style:{marginBottom:16,fontSize:"15px",lineHeight:"20px"}},"\u0421 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c '\u041b\u0430\u043f\u044b \u0438 \u0445\u0432\u043e\u0441\u0442\u044b' \u0441\u043b\u0435\u0434\u0438\u0442\u044c \u0437\u0430 \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435\u043c \u0412\u0430\u0448\u0435\u0433\u043e \u043f\u0438\u0442\u043e\u043c\u0446\u0430 \u043b\u0435\u0433\u043a\u043e \u0438 \u043f\u0440\u043e\u0441\u0442\u043e"),a.a.createElement(V.a,null,"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c")))}}]),r}(n.Component);var se=Object(u.b)((function(e){return{notificationStatus:w(e)}}))(ie),le=function(e){Object(F.a)(r,e);var t=Object(B.a)(r);function r(){return Object(x.a)(this,r),t.apply(this,arguments)}return Object(P.a)(r,[{key:"componentWillMount",value:function(){this.props.dispatch(function(){var e=Object(I.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M.subscribe((function(e){var r=e.detail;if(r){var n=r.type,a=r.data;switch(n){case"VKWebAppUpdateInsets":t({type:"vk.insetsFetched",insets:a.insets})}}else console.error("invalid event",e)})),M.send("VKWebAppInit",{no_toolbar:!0});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e="about"===this.props.route.name?"aboutPanel":"mainPanel";return a.a.createElement(V.c,{insets:this.props.insets},a.a.createElement(V.m,{activeView:"mainView"},a.a.createElement(V.o,{id:"mainView",activePanel:e},a.a.createElement(se,{router:this.props.router,id:"mainPanel",accessToken:this.props.accessToken}),a.a.createElement(X,{router:this.props.router,id:"aboutPanel"}))))}}]),r}(n.Component);var he=Object(u.b)((function(e){return{accessToken:j(e),insets:O(e)}}))((function(e){return a.a.createElement(i.a,{nodeName:""},(function(t){var r=t.route;return a.a.createElement(le,Object.assign({route:r},e))}))})),me=function(){var e=Object(s.b)(m,{defaultRoute:"currency"});return e.usePlugin(l.a),e.usePlugin(Object(h.a)({useHash:!0})),e}(),de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Object(S.a)(U.a,Object(A.a)(e),Object(D.createLogger)())(S.d),n=r(Object(S.c)({router:A.b,currencyRates:f,vk:k}),t);return window.store=n,n}(me);me.start((function(){o.a.render(a.a.createElement(u.a,{store:de},a.a.createElement(i.b,{router:me},a.a.createElement(he,{router:me}))),document.getElementById("root"))})),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");N?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):T(e)}))}}()},57:function(e,t,r){e.exports=r.p+"static/media/logo.592f30a9.svg"}},[[114,1,2]]]);
//# sourceMappingURL=main.9a90a3c7.chunk.js.map