(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n=s(4),r=s.n(n),o=s(5),c=s(6),i=s(8),a=s(7),l=s(1),u=s.n(l),h=(s(13),s(14),s(2)),b=s.n(h),d=s(0),j=function(t){var e=t.goods;return Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)("li",{"data-cy":"Good",children:t},t)}))})},g=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(t){Object(i.a)(s,t);var e=Object(a.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isReversed:!1,sortBy:"id"},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByAlphabet=function(){t.setState({sortBy:"alphabet"})},t.sortByLength=function(){t.setState({sortBy:"length"})},t.reset=function(){t.setState({sortBy:"id",isReversed:!1})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isReversed,s=t.sortBy,n=[].concat(g);return n.sort((function(t,e){switch(s){case"length":return t.length-e.length;case"alphabet":return t.localeCompare(e);default:return 0}})),e&&n.reverse(),Object(d.jsxs)("div",{className:"section content",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",className:b()("button is-info",{"is-light":"alphabet"!==s}),onClick:this.sortByAlphabet,children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:b()("button is-success",{"is-light":"length"!==s}),onClick:this.sortByLength,children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:b()("button is-warning",{"is-light":!1===e}),onClick:this.reverse,children:"Reverse"}),(e||"id"!==s)&&Object(d.jsx)("button",{type:"button",className:"button btn-reset is-danger is-light",onClick:this.reset,children:"Reset"})]}),Object(d.jsx)(j,{goods:n})]})}}]),s}(u.a.Component);r.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.45bd10a5.chunk.js.map