"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[799],{392:function(e,t,n){n.d(t,{H:function(){return o}});var r="MovieItem_Label__nCKGa",a="MovieItem_Img__uPx3v",s=n(461),u=n(731),c=n(184),o=function(e){var t=e.url,n=e.title,o=e.activeId,i=e.location;return(0,c.jsx)("li",{children:(0,c.jsxs)(u.rU,{to:"/movies/".concat(o),state:{from:i},children:[(0,c.jsx)("img",{className:a,src:null!==t?"https://image.tmdb.org/t/p/w300".concat(t):s,alt:n}),(0,c.jsx)("h2",{className:r,children:n})]})})}},414:function(e,t,n){n.d(t,{x:function(){return s}});var r="Box_Box__vnYME",a=n(184),s=function(e){var t=e.children;return(0,a.jsx)("div",{className:r,children:t})}},799:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var r=n(861),a=n(885),s=n(757),u=n.n(s),c=n(791),o="SearchForm_form__o80os",i="SearchForm_add__VDd3X",l="SearchForm_full__vV29r",p="SearchForm_Label__bFpHJ",f=n(184),m=function(e){var t=e.onSubmit,n=(0,c.useState)(""),r=(0,a.Z)(n,2),s=r[0],u=r[1];return(0,f.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault(),t(s),u("")},children:[(0,f.jsx)("label",{className:p,htmlFor:"search",children:"Find movie by name"}),(0,f.jsx)("input",{className:l,type:"text",name:"search",value:s,onChange:function(e){u(e.target.value)},placeholder:"Search movie...",autoComplete:"off"}),(0,f.jsx)("button",{className:i,type:"submit",children:"Search"})]})},v=n(392),h="Error_Error__lH5Db",d=function(e){var t=e.text;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("h3",{className:h,children:t})})},x=n(739),g="SearchMovie_MovieList__qy4pl",_="success",b=function(e){var t=e.value,n=e.status,r=e.movies,a=(0,x.TH)();return console.log("value",typeof t),console.log("status",typeof n),console.log("movies",typeof r),(0,f.jsxs)(f.Fragment,{children:[n===_&&r.length>0&&(0,f.jsx)("ul",{className:g,children:null===r||void 0===r?void 0:r.map((function(e){return(0,f.jsx)(v.H,{location:a,title:e.original_title,url:e.poster_path,activeId:e.id},e.id)}))}),n===_&&0===r.length&&(0,f.jsx)(d,{text:'Sorry, but nothing was found for "'.concat(t,'"! try again!')})]})},y=n(414),w=n(731),j=n(390),k="init",S="success",Z="error",F=function(){var e,t,n=(0,w.lr)(),s=(0,a.Z)(n,2),o=s[0],i=s[1],l=(0,c.useState)([]),p=(0,a.Z)(l,2),v=p[0],h=p[1],d=(0,c.useState)(k),x=(0,a.Z)(d,2),g=x[0],_=x[1],F=null!==(e=o.get("page"))&&void 0!==e?e:1,N=null!==(t=o.get("search"))&&void 0!==t?t:"";(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,j.Pt)(N,F);case 3:t=e.sent,h(t),_(S),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),_(Z),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();N?e():h([])}),[N,F]);return(0,f.jsxs)(y.x,{children:[(0,f.jsx)(m,{onSubmit:function(e){i({search:e,page:1})}}),(0,f.jsx)(b,{value:N,movies:v,status:g})]})}},390:function(e,t,n){n.d(t,{M1:function(){return v},Pt:function(){return l},bc:function(){return o},fv:function(){return f},tx:function(){return d}});var r=n(861),a=n(757),s=n.n(a),u=n(44),c="ee23ab55503b4831e257c10a3a06bf9b";function o(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("/trending/movie/week",{params:{api_key:c}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("/search/movie",{params:{api_key:c,language:"en-US",page:n,query:t}});case 2:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("/movie/".concat(t),{params:{api_key:c,language:"en-US"}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("/movie/".concat(t,"/credits"),{params:{api_key:c,language:"en-US"}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("/movie/".concat(t,"/reviews\n"),{params:{api_key:c,language:"en-US"}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.ZP.defaults.baseURL="https://api.themoviedb.org/3"},461:function(e,t,n){e.exports=n.p+"static/media/default-movie.71253f31d01ef6cdd4cc.jpeg"}}]);
//# sourceMappingURL=799.11284bd0.chunk.js.map