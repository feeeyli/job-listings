(this["webpackJsonpjob-listings"]=this["webpackJsonpjob-listings"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,o){},,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(1),a=o(7),i=o.n(a),s=o(2),l=o(5),c=[{id:1,company:"Photosnap",logo:"companys/photosnap.svg",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{id:2,company:"Manage",logo:"companys/manage.svg",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:"companys/account.svg",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:"companys/myhome.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{id:5,company:"Loop Studios",logo:"companys/loop-studios.svg",new:!1,featured:!1,position:"Software Engineer",role:"Fullstack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:"companys/faceit.svg",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{id:7,company:"Shortly",logo:"companys/shortly.svg",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:"companys/insure.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{id:9,company:"Eyecam Co.",logo:"companys/eyecam-co.svg",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:"companys/the-air-filter-company.svg",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}],r=(o(12),o(0)),d=function(e){var t=e.filterName,o=e.filterActions,n=o.filterList,a=o.setFilterList;return Object(r.jsxs)("div",{className:"filter-item",children:[Object(r.jsx)("span",{className:"filter-item__name",children:t}),Object(r.jsx)("button",{className:"filter-item__delete","data-filter":t,onClick:function(e){var t=e.target.dataset.filter;a(n.filter((function(e){return e!==t})))},children:Object(r.jsx)("img",{src:"icon-remove.svg",alt:""})})]})},u=(o(14),function(e){var t=e.filterList,o=e.filterActions;return Object(r.jsx)(r.Fragment,{children:t.length>0&&Object(r.jsxs)("div",{className:"filter-list",children:[Object(r.jsx)("div",{className:"filter-list__filters",children:t.map((function(e){return Object(r.jsx)(d,{filterName:e,filterActions:o},e)}))}),Object(r.jsx)("button",{className:"filter-list__clear-filters",onClick:function(){o.setFilterList([])},children:"Clear"})]})})}),f=(o(15),function(e){var t=e.filterName,o=e.filterActions,n=o.filterList,a=o.setFilterList;return Object(r.jsx)("button",{href:"#",className:"filter-method","data-filter":t,onClick:function(e){var t=e.target.dataset.filter;n.includes(t)||a([].concat(Object(s.a)(n),[t]))},children:t})}),j=(o(16),function(e){var t=e.job,o=e.filterActions,n=[t.role,t.level].concat(Object(s.a)(t.languages),Object(s.a)(t.tools));return Object(r.jsxs)("li",{className:"job-item".concat(t.featured?" feature":""),children:[Object(r.jsx)("img",{src:t.logo,alt:"Logo Photosnap",className:"job-item__logo"}),Object(r.jsxs)("div",{className:"job-item__infos",children:[Object(r.jsxs)("div",{className:"infos__header",children:[Object(r.jsx)("h3",{className:"header__company",children:t.company}),Object(r.jsxs)("div",{className:"header__labels",children:[t.new&&Object(r.jsx)("span",{className:"label new",children:"NEW!"}),t.featured&&Object(r.jsx)("span",{className:"label featured",children:"FEATURED"})]})]}),Object(r.jsx)("h2",{className:"infos__position",children:t.position}),Object(r.jsxs)("div",{className:"infos__footer",children:[Object(r.jsx)("span",{className:"footer__posted",children:t.postedAt}),Object(r.jsx)("span",{className:"footer__contract",children:t.contract}),Object(r.jsx)("span",{className:"footer__location",children:t.location})]})]}),Object(r.jsx)("div",{className:"job-item__filters",children:n.map((function(e,t){return Object(r.jsx)(f,{filterName:e,filterActions:o},t)}))})]})}),m=(o(17),function(e){var t=e.jobsList,o=e.filterActions,a=e.filterList,i=Object(n.useState)(t),c=Object(l.a)(i,2),d=c[0],u=c[1];return Object(n.useEffect)((function(){u(0!==a.length?t.filter((function(e){return t=[e.role,e.level].concat(Object(s.a)(e.languages),Object(s.a)(e.tools)),a.every((function(e){return t.includes(e)}));var t})):t)}),[a,t]),Object(r.jsx)("ul",{className:"jobs-list",children:d.map((function(e){return Object(r.jsx)(j,{job:e,filterActions:o},e.id)}))})}),p=function(){var e=function(){var e=c.filter((function(e){return e.new})),t=c.filter((function(e){return!e.new}));return[].concat(Object(s.a)(e),Object(s.a)(t.sort((function(){return.5-Math.random()}))))}(),t=Object(n.useState)([]),o=Object(l.a)(t,2),a=o[0],i=o[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u,{filterList:a,filterActions:{filterList:a,setFilterList:i}}),Object(r.jsx)(m,{jobsList:e,filterActions:{filterList:a,setFilterList:i},filterList:a})]})};o(18);i.a.render(Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.8f9978f6.chunk.js.map