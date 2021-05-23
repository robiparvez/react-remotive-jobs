(this["webpackJsonpgithub-jobs-tm-wds"]=this["webpackJsonpgithub-jobs-tm-wds"]||[]).push([[0],{220:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(23),s=a.n(n),r=a(32),o=a(11),i=a(18),j=a(224),l=a(19),b=a.n(l),d="/positions.json",u="make-request",h="get-data",O="error",x="update-has-next-page",m=function(e,t){switch(t.type){case u:return{loading:!0,jobs:[]};case h:return Object(o.a)(Object(o.a)({},e),{},{loading:!1,jobs:t.payload.jobs});case O:return Object(o.a)(Object(o.a)({},e),{},{loading:!1,error:t.payload.error,jobs:[]});case x:return Object(o.a)(Object(o.a)({},e),{},{hasNextPage:t.payload.hasNextPage});default:return e}},p=function(e,t){var a=Object(c.useReducer)(m,{jobs:[],loading:!0}),n=Object(i.a)(a,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){r({type:u});var a=b.a.CancelToken.source();b.a.get(d,{cancelToken:a.token,params:Object(o.a)({markdown:!0,page:t},e)}).then((function(e){r({type:h,payload:{jobs:e.data}})})).catch((function(e){b.a.isCancel(e)||r({type:O,payload:{error:e}})}));var c=b.a.CancelToken.source();return b.a.get(d,{cancelToken:c.token,params:Object(o.a)({markdown:!0,page:t},e)}).then((function(e){r({type:x,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){b.a.isCancel(e)||r({type:O,payload:{error:e}})})),function(){a.cancel(),c.cancel()}}),[e,t]),s},g=a(227),f=a(222),y=a(223),v=a(225),k=a(44),N=a.n(k),C=a(2),w=function(e){var t,a=e.job,n=Object(c.useState)(!1),s=Object(i.a)(n,2),r=s[0],o=s[1];return Object(C.jsx)(g.a,{className:"mb-3",children:Object(C.jsxs)(g.a.Body,{children:[Object(C.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(C.jsxs)("div",{children:[Object(C.jsxs)(g.a.Title,{children:[a.title," - ",Object(C.jsx)("span",{className:"text-muted",children:a.company})]}),Object(C.jsx)(g.a.Subtitle,{className:"text-muted mb-2",children:new Date(a.created_at).toLocaleDateString()}),Object(C.jsx)(f.a,{variant:"secondary mr-2",children:a.type}),Object(C.jsx)(f.a,{variant:"secondary",children:a.location}),Object(C.jsx)("div",{style:{wordBreak:"break-all"},children:Object(C.jsx)(N.a,{children:a.how_to_apply})})]}),Object(C.jsx)("img",{className:"d-none d-md-block",height:"50",alt:"company-logo",src:null!==(t=a.company_logo)&&void 0!==t?t:"https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"})]}),Object(C.jsx)(g.a.Text,{children:Object(C.jsx)(y.a,{onClick:function(){o((function(e){return!e}))},variant:"primary",children:r?"Hide Details":"View Details"})}),Object(C.jsx)(v.a,{in:r,children:Object(C.jsx)("div",{className:"mt-4",children:Object(C.jsx)(N.a,{children:a.description})})})]})})},P=a(228),T=function(e){var t=e.page,a=e.setPage,c=e.hasNextPage,n=function(e){a((function(t){return t+e}))};return Object(C.jsxs)(P.a,{children:[1!==t&&Object(C.jsx)(P.a.Prev,{onClick:function(){return n(-1)}}),1!==t&&Object(C.jsx)(P.a.Item,{onClick:function(){return a(1)},children:"1"}),t>2&&Object(C.jsx)(P.a.Ellipsis,{}),t>2&&Object(C.jsx)(P.a.Item,{onClick:function(){return n(-1)},children:t-1}),Object(C.jsx)(P.a.Item,{active:!0,children:t}),c&&Object(C.jsx)(P.a.Item,{onClick:function(){return n(1)},children:t+1}),c&&Object(C.jsx)(P.a.Next,{onClick:function(){return n(1)}})]})},I=a(226),S=a(89),_=function(e){var t=e.params,a=e.onParamChange;return Object(C.jsx)(I.a,{className:"mb-4",children:Object(C.jsxs)(I.a.Row,{className:"align-items-end",children:[Object(C.jsxs)(I.a.Group,{as:S.a,children:[Object(C.jsx)(I.a.Label,{children:"Description"}),Object(C.jsx)(I.a.Control,{type:"text",name:"description",onChange:a,value:t.description})]}),Object(C.jsxs)(I.a.Group,{as:S.a,children:[Object(C.jsx)(I.a.Label,{children:"Location"}),Object(C.jsx)(I.a.Control,{type:"text",name:"location",onChange:a,value:t.location})]}),Object(C.jsx)(I.a.Group,{as:S.a,xs:"auto",children:Object(C.jsx)(I.a.Check,{onChange:a,value:t.full_time,name:"full_time",id:"full-time",label:"Only Full Time",type:"switch",className:"mb-2"})})]})})};var B=function(){var e=Object(c.useState)({}),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(1),l=Object(i.a)(s,2),b=l[0],d=l[1],u=p(a,b),h=u.jobs,O=u.loading,x=u.error,m=u.hasNextPage;return Object(C.jsxs)(j.a,{className:"my-4",children:[Object(C.jsx)("h1",{className:"mb-4",children:"GITHUB JOBS"}),Object(C.jsx)(_,{params:a,onParamChange:function(e){var t=e.target.name,a=e.target.value;d(1),n((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(r.a)({},t,a))}))}}),Object(C.jsx)(T,{page:b,setPage:d,hasNextPage:m}),O&&Object(C.jsx)("h1",{children:"Loading..."}),x&&Object(C.jsx)("h1",{children:"Try refreshing..."}),h.map((function(e){return Object(C.jsx)(w,{job:e},e.id)})),Object(C.jsx)(T,{page:b,setPage:d,hasNextPage:m})]})};s.a.render(Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(B,{})}),document.getElementById("root"))}},[[220,1,2]]]);
//# sourceMappingURL=main.6af1d888.chunk.js.map