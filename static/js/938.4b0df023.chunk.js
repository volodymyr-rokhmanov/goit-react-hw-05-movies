"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[938],{938:function(e,s,n){n.r(s);var r=n(439),t=n(689),c=n(87),o=n(791),i=n(184);s.default=function(){var e=(0,t.UO)(),s=Number(e.moviesId),n=(0,o.useState)(),a=(0,r.Z)(n,2),l=a[0],h=a[1];console.log(e.moviesId),console.log(s),console.log(l);return(0,o.useEffect)((function(){console.log(3),fetch("".concat("https://api.themoviedb.org/3/","movie/").concat(s,"?api_key=").concat("0402ef8c6d0b2370fa6ac2b572dad398","&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Insert other name"))})).then((function(e){return h(e)})).catch((function(e){return console.log(e)}))}),[]),(0,i.jsxs)("section",{children:[l&&(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(l.poster_path),alt:l.title}),(0,i.jsxs)("p",{children:[l.title,l.release_date?(0,i.jsxs)("span",{children:[" (",l.release_date.slice(0,4),")"]}):(0,i.jsx)("span",{children:" (----)"})]}),(0,i.jsxs)("p",{children:["User score: ",Number.parseInt(10*l.vote_average)," %"]}),(0,i.jsxs)("p",{children:["Overview:",l.overview]}),(0,i.jsxs)("p",{children:["Genres:",l.genres.map((function(e){return(0,i.jsxs)("span",{children:[" ",e.name," "]})}))]})]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]}),(0,i.jsx)(o.Suspense,{fallback:(0,i.jsx)("p",{children:"Loading..."}),children:(0,i.jsx)(t.j3,{})})]})}}}]);
//# sourceMappingURL=938.4b0df023.chunk.js.map