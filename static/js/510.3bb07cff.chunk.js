"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[510],{510:function(e,s,t){t.r(s),t.d(s,{default:function(){return f}});var n=t(439),a=t(87),r=t(689),c=t(791),i=t(417),o="BackLink_link__1cqwz",l=t(184),d=function(){var e=(0,r.s0)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("button",{type:"button",className:o,onClick:function(){return e(-1)},children:"\u27f5 Go back"})})},u="MovieDetails_section__rnZrF",m="MovieDetails_image__p4xaz",h="MovieDetails_main_title__ARSkb",p="MovieDetails_title__SBO4C",_="MovieDetails_line__+yv3B",j="MovieDetails_link_list__xkSP-",x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,s){return e+=(s&=63)<36?s.toString(36):s<62?(s-26).toString(36).toUpperCase():s>62?"-":"_"}),"")},f=function(){var e=(0,r.UO)(),s=Number(e.moviesId),t=(0,c.useState)(),o=(0,n.Z)(t,2),f=o[0],v=o[1],g=(0,r.TH)();return(0,c.useEffect)((function(){fetch("".concat("https://api.themoviedb.org/3/","movie/").concat(s,"?api_key=").concat("0402ef8c6d0b2370fa6ac2b572dad398","&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Insert other name"))})).then((function(e){return v(e)})).catch((function(e){return console.log(e)}))}),[]),(0,l.jsxs)("section",{children:[(0,l.jsx)(d,{}),f&&(0,l.jsxs)("div",{className:u,children:[f.poster_path?(0,l.jsx)("img",{className:m,src:"".concat("https://image.tmdb.org/t/p/w500/").concat(f.poster_path),alt:f.title}):(0,l.jsx)("img",{className:m,src:i,alt:"No foto"}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{className:h,children:[f.title,f.release_date?(0,l.jsxs)("span",{children:[" (",f.release_date.slice(0,4),")"]}):(0,l.jsx)("span",{children:" (----)"})]},x()),(0,l.jsxs)("p",{className:p,children:["User score: ",(0,l.jsxs)("span",{className:_,children:[Number.parseInt(10*f.vote_average)," %"]})]},x()),(0,l.jsxs)("p",{className:p,children:["Overview: ",(0,l.jsx)("br",{}),(0,l.jsx)("span",{className:_,children:f.overview})]},x()),(0,l.jsxs)("p",{className:p,children:["Genres:",(0,l.jsx)("br",{}),f.genres.map((function(e){return(0,l.jsxs)("span",{className:_,children:[" ",e.name," "]})}))]},x())]})]}),(0,l.jsxs)("ul",{className:j,children:[(0,l.jsx)("li",{children:(0,l.jsx)(a.rU,{to:"cast",state:{from:g.state.from},children:"Cast"})},x()),(0,l.jsx)("li",{children:(0,l.jsx)(a.rU,{to:"reviews",state:{from:g.state.from},children:"Reviews"})},x())]}),(0,l.jsx)(c.Suspense,{fallback:(0,l.jsx)("p",{children:"Loading..."}),children:(0,l.jsx)(r.j3,{})})]})}},417:function(e,s,t){e.exports=t.p+"static/media/NoFoto.5882c20d3ddf67c36e30.jpg"}}]);
//# sourceMappingURL=510.3bb07cff.chunk.js.map