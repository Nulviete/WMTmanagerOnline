import{r as _,H as k,_ as w,G as v,J as c,S as f,M as e,L as o,O as d,T as m,K as y,Q as M,U as h,a8 as b,P as g,Z as T,a5 as Q}from"./index.54b6f0d8.js";import{Q as x}from"./QPage.1b4ea7c2.js";import{Q as C,a as l,b as S}from"./QTable.c09dacf5.js";import"./use-key-composition.5f80a910.js";import"./uid.42677368.js";import"./QSelect.d3342a9a.js";import"./scroll.29190ff5.js";import"./QCheckbox.c2627c58.js";const B=()=>{const i=_(null),n=_(!1),s=_(null);return{loadMembers:async()=>{try{const{data:a}=await k.from("members").select("*");s.value&&console.log(s),a&&(i.value=a,n.value=!0)}catch(a){s.value=a.message}},data:i,dataLoaded:n,error:s}};const E={class:"q-pa-md"},N={__name:"MembersTable",props:{members:{type:Array,default:()=>[]}},setup(i){const n=v(),s=i,u=[{name:"name",required:!0,label:"Name",align:"left",field:r=>r.name},{name:"position",label:"Position",align:"left",field:"position",format:r=>`${r}`,sortable:!0},{name:"country",label:"Country",align:"left",field:"country"},{name:"dateOfJoin",label:"Start",align:"left",field:"dateSince"},{name:"dateOfEnd",label:"End",align:"left",field:"dateTill"},{name:"edit",label:"Edit",align:"left",field:"dateTill"}],a=s.members,p=r=>{n.push({path:"/Members/"+r})};return(r,L)=>(c(),f("div",E,[e(S,{title:"Members",rows:b(a),columns:u,"row-key":"name",style:{width:"600px"}},{body:o(t=>[e(C,{props:t},{default:o(()=>[e(l,{key:"name"},{default:o(()=>[d(m(t.row.name),1)]),_:2},1024),e(l,{key:"position"},{default:o(()=>[d(m(t.row.position),1)]),_:2},1024),e(l,{key:"country"},{default:o(()=>[d(m(t.row.country),1)]),_:2},1024),e(l,{key:"dateOfJoin"},{default:o(()=>[d(m(t.row.dateSince),1)]),_:2},1024),e(l,{key:"dateOfEnd"},{default:o(()=>[d(m(t.row.dateTill),1)]),_:2},1024),e(l,{key:"edit"},{default:o(()=>[t.row.position==="Volunteer"||t.row.position==="Root Member"?(c(),y(M,{key:0,name:"mdi-pencil",size:"sm",onClick:P=>p(t.row.name)},null,8,["onClick"])):h("",!0)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["rows"])]))}};var O=w(N,[["__scopeId","data-v-ce33a9b8"]]);const V={class:"row"},$=g("h5",null,"Membas",-1),q={key:0},J={key:1},U={__name:"MembersManager",setup(i){const{loadMembers:n,data:s,dataLoaded:u,error:a}=B();return n(),a.value!==null&&console.log(a,"error message"),(p,r)=>(c(),y(x,{padding:""},{default:o(()=>[g("div",V,[$,e(T,{round:"",color:"primary",icon:"add",class:"self-center q-mx-sm",to:{name:"AddMember"}})]),b(u)?(c(),f("div",q,[e(O,{members:b(s)},null,8,["members"])])):(c(),f("div",J,[e(Q)]))]),_:1}))}};export{U as default};
