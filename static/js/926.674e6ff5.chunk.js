"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[926],{603:function(e,t,n){n.d(t,{Cx:function(){return d},Fb:function(){return o},Pg:function(){return c},UN:function(){return u},sR:function(){return j}});var i=n(294),r=i.Z.create({baseURL:"https://api.themoviedb.org/3"}),a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2E0Y2E0MDFjZjUzYzEzYzA4MDBhNzMyZjZhMGE1MSIsInN1YiI6IjY1YjQwNmU2ZDIzNmU2MDE0OWMwMGYxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nq2jMd6hIdv7fjxdz21OXbcbZk7RUYyfP5JVR90HZ60"}},o=function(){return r.get("/trending/all/day",a)},s={method:"GET",url:"https://api.themoviedb.org/3/movie/572802",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2E0Y2E0MDFjZjUzYzEzYzA4MDBhNzMyZjZhMGE1MSIsInN1YiI6IjY1YjQwNmU2ZDIzNmU2MDE0OWMwMGYxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nq2jMd6hIdv7fjxdz21OXbcbZk7RUYyfP5JVR90HZ60"}},c=function(e){return s.url="https://api.themoviedb.org/3/movie/".concat(e),i.Z.request(s)},h={method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{query:"a",include_adult:"false",language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2E0Y2E0MDFjZjUzYzEzYzA4MDBhNzMyZjZhMGE1MSIsInN1YiI6IjY1YjQwNmU2ZDIzNmU2MDE0OWMwMGYxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nq2jMd6hIdv7fjxdz21OXbcbZk7RUYyfP5JVR90HZ60"}},u=function(e,t){return h.params.query=e,h.params.page=t,console.log(h),i.Z.request(h)},l={method:"GET",url:"https://api.themoviedb.org/3/movie/933131/credits",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2E0Y2E0MDFjZjUzYzEzYzA4MDBhNzMyZjZhMGE1MSIsInN1YiI6IjY1YjQwNmU2ZDIzNmU2MDE0OWMwMGYxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nq2jMd6hIdv7fjxdz21OXbcbZk7RUYyfP5JVR90HZ60"}},d=function(e){return l.url="https://api.themoviedb.org/3/movie/".concat(e,"/credits"),i.Z.request(l)},m={method:"GET",url:"https://api.themoviedb.org/3/movie/933131/reviews",params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2E0Y2E0MDFjZjUzYzEzYzA4MDBhNzMyZjZhMGE1MSIsInN1YiI6IjY1YjQwNmU2ZDIzNmU2MDE0OWMwMGYxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nq2jMd6hIdv7fjxdz21OXbcbZk7RUYyfP5JVR90HZ60"}},j=function(e){return m.url="https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),i.Z.request(m)}},926:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var i=n(689),r=n(861),a=n(439),o=n(757),s=n.n(o),c=n(791),h=n(87),u=n(603),l={section:"single-movie_section__1hIwB",button:"single-movie_button__295iC",movieContainer:"single-movie_movieContainer__pLqqF",link__box:"single-movie_link__box__9+tgt",link:"single-movie_link__xR8TK"},d=n(184),m=function(){var e,t=(0,c.useState)(),n=(0,a.Z)(t,2),o=n[0],m=n[1],j=(0,c.useState)(!1),p=(0,a.Z)(j,2),I=p[0],f=p[1],v=(0,i.UO)().id,z=(null===(e=(0,i.TH)().state)||void 0===e?void 0:e.from)||"/",J=(0,i.s0)();(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),e.next=4,(0,u.Pg)(v);case 4:t=e.sent,n=t.data,m(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:return e.prev=12,f(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]);return(0,d.jsxs)("section",{className:"section",children:[I&&(0,d.jsx)("p",{children:"...Loading"}),(0,d.jsx)("button",{onClick:function(){return J(z)},type:"button",className:l.button,children:"Go back"}),o&&(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{style:{backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original/"+o.backdrop_path,")")},className:l.movieContainer}),(0,d.jsxs)("div",{className:l.flex,children:[(0,d.jsx)("h2",{children:o.title}),(0,d.jsx)("p",{children:o.overview}),(0,d.jsxs)("p",{children:["Vote:",o.vote_average]}),(0,d.jsxs)("div",{className:l.link__box,children:[(0,d.jsx)(h.rU,{to:"cast",state:{from:z},className:l.link,children:"Cast"}),(0,d.jsx)(h.rU,{to:"reviews ",state:{from:z},className:l.link,children:"Reviews"})]})]})]})]})},j=function(){return(0,d.jsxs)("div",{children:[(0,d.jsx)(m,{}),(0,d.jsx)(i.j3,{})]})}}}]);
//# sourceMappingURL=926.674e6ff5.chunk.js.map