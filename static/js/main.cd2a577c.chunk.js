(this.webpackJsonpmahjong=this.webpackJsonpmahjong||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=n(5),s=(n(11),n(12),function(e){return r.a.createElement("div",{className:"card",onClick:e.onCardClick},r.a.createElement("div",{className:"front"}),r.a.createElement("div",{className:"back"},e.back))}),u=function(e){var t=e.ids,n=e.isSort,a=e.onCardClick;return n&&t.sort(),r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(s,{back:e,key:"card ".concat(t),onCardClick:a})})))},l=n(3),f=n(4),d=function(){function e(t){Object(l.a)(this,e),this.$selector="string"===t?new Error("Dom node did not find"):t}return Object(f.a)(e,[{key:"addClass",value:function(e){this.$selector.classList.add(e)}},{key:"removeClass",value:function(e){this.$selector.classList.remove(e)}},{key:"classContains",value:function(e){return this.$selector.classList.contains(e)}},{key:"text",get:function(){return this.$selector.textContent}}]),e}();var m=function(e,t){e.forEach((function(e){return e.addClass(t)}))},v=function(e,t){e.forEach((function(e){return e.removeClass(t)}))};function h(){var e=[];return function(t){if(C(e))!function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];if(!C(e))return;n.text===a.text?function(e){setTimeout((function(){m(e,"hide")}),1e3)}(e):function(e){setTimeout((function(){v(e,"opened"),m(e,"wait")}),1e3),setTimeout((function(){v(e,"wait")}),1600)}(e)}(e),e=[];else{var n=(a=t.target,new d(a));e.push(n),n.addClass("opened")}var a}}function C(e){return e.length<2}var k=function(){var e=function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(100*Math.random()));return t}(15),t=h();return r.a.createElement("div",{className:"wrapper"},r.a.createElement(u,{ids:e,onCardClick:t}),r.a.createElement(u,{ids:e,onCardClick:t,isSort:!0}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.cd2a577c.chunk.js.map