"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[614],{603:function(n,e,t){t.d(e,{BG:function(){return c},bT:function(){return r},kD:function(){return o}});var r="0402ef8c6d0b2370fa6ac2b572dad398",c="https://api.themoviedb.org/3/",o="https://image.tmdb.org/t/p/w500/"},79:function(n,e,t){t.d(e,{XR:function(){return c},fO:function(){return a},jF:function(){return o},x6:function(){return u}});var r=t(603),c=function(n,e,t){fetch("".concat(r.BG,"movie/").concat(e,"/").concat(n,"?api_key=").concat(r.bT,"&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Insert other name"))})).then((function(n){return t(n)})).catch((function(n){return console.log(n)}))},o=function(n){fetch("".concat(r.BG,"trending/movie/week?api_key=").concat(r.bT,"&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Insert other name"))})).then((function(e){var t=e.results;return n(t)})).catch((function(n){return console.log(n)}))},u=function(n,e){fetch("".concat(r.BG,"movie/").concat(n,"?api_key=").concat(r.bT,"&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Insert other name"))})).then((function(n){return e(n)})).catch((function(n){return console.log(n)}))},a=function(n,e,t){fetch("".concat(r.BG,"search/movie?api_key=").concat(r.bT,"&").concat(n).concat(e,"&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Insert other name"))})).then((function(n){var e=n.results;return t(e)})).catch((function(n){return console.log(n)}))}},614:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});var r=t(439),c=t(791),o=t(87),u=t(79),a=t(184),i=function(n){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),i=t[0],s=t[1],f=n.searchName;return(0,c.useEffect)((function(){""!==n.searchName&&(0,u.fO)("query=",f,s)}),[n.searchName]),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:i.map((function(n){return(0,a.jsx)("li",{children:(0,a.jsx)(o.rU,{to:"/movies/".concat(n.id),state:{from:"/movies"},children:n.title})},n.id)}))})})},s=function(){var n=(0,o.lr)(),e=(0,r.Z)(n,2),t=e[0],u=e[1],s=t.get("search")||"",f=(0,c.useState)(s),h=(0,r.Z)(f,2),l=h[0],m=h[1],d=(0,c.useState)(""),p=(0,r.Z)(d,2),v=p[0],g=p[1];(0,c.useEffect)((function(){g(s),j()}),[]);var j=function(){m("")};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{children:(0,a.jsxs)("form",{onSubmit:function(n){n.preventDefault(),g(l),u({search:l}),j()},children:[(0,a.jsx)("input",{id:"movie_input",name:"search",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films",value:l,onChange:function(n){var e=n.currentTarget.value;""!==e.trim()&&m(e)}}),(0,a.jsx)("button",{type:"submit",children:(0,a.jsx)("span",{children:"Search"})})]})}),(0,a.jsx)(i,{searchName:v})]})}}}]);
//# sourceMappingURL=614.b741f21a.chunk.js.map