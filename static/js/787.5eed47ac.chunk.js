"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[787],{603:function(n,t,e){e.d(t,{BG:function(){return a},bT:function(){return c},kD:function(){return r}});var c="0402ef8c6d0b2370fa6ac2b572dad398",a="https://api.themoviedb.org/3/",r="https://image.tmdb.org/t/p/w500/"},79:function(n,t,e){e.d(t,{XR:function(){return r},fO:function(){return u},jF:function(){return o},x6:function(){return i}});var c=e(263),a=e(603),r=function(n,t,e){var r="".concat(a.BG,"movie/").concat(t,"/").concat(n,"?api_key=").concat(a.bT,"&language=en-US");c.Z.get(r).then((function(n){var t=n.data;e(t)}))},o=function(n){var t="".concat(a.BG,"trending/movie/week?api_key=").concat(a.bT,"&language=en-US");c.Z.get(t).then((function(t){var e=t.data.results;n(e)}))},i=function(n,t){var e="".concat(a.BG,"movie/").concat(n,"?api_key=").concat(a.bT,"&language=en-US");c.Z.get(e).then((function(n){var e=n.data;t(e)}))},u=function(n,t,e){var r="".concat(a.BG,"search/movie?api_key=").concat(a.bT,"&").concat(n).concat(t,"&language=en-US");c.Z.get(r).then((function(n){var t=n.data.results;e(t)}))}},787:function(n,t,e){e.r(t);var c=e(439),a=e(791),r=e(689),o=e(79),i=e(184);t.default=function(){var n=(0,r.UO)(),t=Number(n.moviesId),e=(0,a.useState)(),u=(0,c.Z)(e,2),f=u[0],s=u[1];return(0,a.useEffect)((function(){(0,o.XR)("reviews",t,s)}),[]),(0,i.jsx)("section",{children:f&&(0,i.jsx)("ul",{children:f.results.length>0?f.results.map((function(n){return(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{children:n.author}),(0,i.jsx)("p",{children:n.content})]},n.id)})):(0,i.jsx)("li",{children:"We don't have any reviews for this movie"})})})}}}]);
//# sourceMappingURL=787.5eed47ac.chunk.js.map