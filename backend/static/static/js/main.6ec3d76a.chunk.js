(this["webpackJsonpbigbluebutton-analytics"]=this["webpackJsonpbigbluebutton-analytics"]||[]).push([[0],{231:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(41),s=n.n(c),i=n(87),o=n(146),l=n(70),d=n.n(l),u=n(114),h=n(137),j=n(138),b=n(150),O=n(147),m=n(254),f=n(145),x=n(255),p=n(52),g=n(253),y=n(111),S=n.n(y),v=n(68),C=n(20),k=m.a.Text,w=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={searchText:"",searchedColumn:""},e.getColumnSearchProps=function(t){return{filterDropdown:function(n){var r=n.setSelectedKeys,a=n.selectedKeys,c=n.confirm,s=n.clearFilters;return Object(C.jsxs)("div",{style:{padding:8},children:[Object(C.jsx)(f.a,{ref:function(t){e.searchInput=t},placeholder:"Search ".concat(t),value:a[0],onChange:function(e){return r(e.target.value?[e.target.value]:[])},onPressEnter:function(){return e.handleSearch(a,c,t)},style:{marginBottom:8,display:"block"}}),Object(C.jsxs)(x.b,{children:[Object(C.jsx)(p.a,{type:"primary",onClick:function(){return e.handleSearch(a,c,t)},icon:Object(C.jsx)(v.a,{}),size:"small",style:{width:90},children:"Search"}),Object(C.jsx)(p.a,{onClick:function(){return e.handleReset(s)},size:"small",style:{width:90},children:"Reset"}),Object(C.jsx)(p.a,{type:"link",size:"small",onClick:function(){c({closeDropdown:!1}),e.setState({searchText:a[0],searchedColumn:t})},children:"Filter"})]})]})},filterIcon:function(e){return Object(C.jsx)(v.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(e,n){return n[t]?n[t].toString().toLowerCase().includes(e.toLowerCase()):""},onFilterDropdownVisibleChange:function(t){t&&setTimeout((function(){return e.searchInput.select()}),100)},render:function(n){e.state.searchedColumn===t&&(S.a,e.state.searchText,n&&n.toString())}}},e.handleSearch=function(t,n,r){console.log(r),n(),e.setState({searchText:t[0],searchedColumn:r}),console.log(t[0])},e.handleReset=function(t){t(),e.setState({searchText:null})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=[Object(u.a)(Object(u.a)({title:"Class Name",dataIndex:"name",key:"name",width:"35%",fixed:"left"},this.getColumnSearchProps("name")),{},{render:function(t,n,r){return Object(C.jsxs)("span",{children:[e.state.searchedColumn===r?Object(C.jsx)(S.a,{highlightStyle:{backgroundColor:"blue",padding:0},searchWords:[e.state.searchText],autoEscape:!0,textToHighlight:t?t.toString():""}):t,Object(C.jsx)("br",{}),Object(C.jsx)(k,{className:"d-sm-none d-md-block d-none p-0 m-0 text-muted",children:n.meetingId})]},n.token.toString())}}),{title:"Start Date",dataIndex:"createdOn",key:"createdOn",sorter:function(e,t){return new Date(t.createdOn)-new Date(e.createdOn)},sortDirections:["descend"],render:function(e){return Object(C.jsx)(x.b,{size:"middle",children:new Date(e).toLocaleString()},e.toString())}},{title:"End Date",dataIndex:"endedOn",key:"endedOn",render:function(e){return Object(C.jsx)(x.b,{size:"middle",children:new Date(e).toLocaleString()},e.toString())}},{title:"Action",key:"action",render:function(e,t){return Object(C.jsxs)(x.b,{size:"middle",children:[Object(C.jsx)("a",{href:"/learning-analytics-dashboard/?meeting=".concat(t.meetingId,"&report=").concat(t.token),children:"Analytics"}),Object(C.jsx)("a",{href:"/playback/presentation/2.3/".concat(t.meetingId),children:"Recording"})]},t.token.toString())}}];return Object(C.jsx)(g.a,{rowKey:"token",columns:t,dataSource:this.props.data,scroll:{y:500}})}}]),n}(a.a.Component),T=w,D=n(252),E=n(143),I=(n(231),n(144)),N=n.n(I);Object({NODE_ENV:"production",PUBLIC_URL:"/analytics",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).analytics_path;function _(){return A.apply(this,arguments)}function A(){return(A=Object(i.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/analytics/data.json");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.analytics);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}D.a.Header,D.a.Content;var B=D.a.Footer,z=m.a.Title,R=m.a.Text;function F(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)(Object(i.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,n=t.sort((function(e,t){return t.createdOn-e.createdOn})),a(n);case 5:case"end":return e.stop()}}),e)}))),[]),Object(C.jsxs)("div",{className:"container-fluid px-5 ",children:[Object(C.jsxs)("div",{className:"mt-4 mb-4",children:[Object(C.jsx)(z,{className:"mb-1 pb-0 ",level:3,children:"BigBlueButton Analytics"}),Object(C.jsx)(R,{className:" mt-0 pt-0 ",children:"Access analytics of your BigBlueButton online classes"})]}),Object(C.jsx)("div",{className:"App",children:n&&n.length?Object(C.jsx)("div",{className:"rounded  mb-4 ",children:Object(C.jsx)(T,{data:n})}):Object(C.jsx)(x.b,{size:"middle",children:Object(C.jsx)(E.a,{size:"large"})})}),Object(C.jsxs)(B,{className:"bg-white",style:{textAlign:"center"},children:[Object(C.jsx)("a",{href:"https://higheredlab.com",children:"HigherEdLab.com \xa92022"})," "]})]})}var L=document.getElementById("root");s.a.render(Object(C.jsx)(r.StrictMode,{children:Object(C.jsx)(F,{})}),L)}},[[249,1,2]]]);
//# sourceMappingURL=main.6ec3d76a.chunk.js.map