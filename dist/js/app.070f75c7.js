(function(e){function t(t){for(var r,i,u=t[0],s=t[1],l=t[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);a&&a(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var a=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"124e":function(e,t,n){},1579:function(e,t,n){"use strict";n("124e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=Object(r["i"])("data-v-7397460e");Object(r["g"])("data-v-7397460e");var c={style:{"font-size":"xx-large",padding:"20px","text-align":"center"}};Object(r["f"])();var i=o((function(e,t,n,o,i,u){return Object(r["e"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("div",{style:[{width:"500px",height:"500px",border:"10px solid #000","font-size":"400px","text-align":"center","vertical-align":"middle","line-height":"500px",margin:"auto"},{color:e.clickNumberColor}],onClick:t[1]||(t[1]=function(e){return u.clickHandler(e)}),onContextmenu:t[2]||(t[2]=function(e){return u.clickHandler(e)}),class:"noselect"},Object(r["h"])(e.clickAmount),37),Object(r["d"])("div",c,Object(r["h"])(e.cpsResult)+" cps ",1)],64)})),u=(n("99af"),n("d81d"),n("ac1f"),n("5319"),n("1276"),n("3835"));function s(e){return e.substring(4,e.length-1).replace(/ /g,"").split(",").map((function(e){return+e}))}function l(e,t,n){return"rgb(".concat(e,",").concat(t,",").concat(n,")")}var a={name:"App",data:function(){return{isTestRunning:!1,clickAmount:0,testDurationMs:5e3,cpsResult:0,clickNumberColor:l(0,0,0)}},methods:{clickHandler:function(e){var t=this;e.preventDefault(),this.isTestRunning||(this.isTestRunning=!0,this.clickAmount=0,setTimeout((function(){return t.evaluateTest()}),this.testDurationMs)),this.clickAmount+=1,console.log(this.clickNumberColor);var n=s(this.clickNumberColor),r=Object(u["a"])(n,3),o=r[0],c=r[1],i=r[2];o+=10,this.clickNumberColor=l(o,c,i)},evaluateTest:function(){this.isTestRunning=!1;var e=1e3*this.clickAmount/this.testDurationMs;this.cpsResult=e,this.clickAmount=0,setTimeout((function(){return alert("".concat(e," CPS"))}),10)}}};n("1579");a.render=i,a.__scopeId="data-v-7397460e";var f=a,p=n("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(r["b"])(f).mount("#app")}});
//# sourceMappingURL=app.070f75c7.js.map