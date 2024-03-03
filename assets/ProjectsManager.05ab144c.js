import{c as k,a as x,h as Q,b as P,aw as U,ax as Y,k as F,ay as G,f as H,_ as J,r as u,G as O,J as V,K as R,L as n,H as W,az as X,O as g,M as t,Y as b,aA as B,Q as _,aB as $,a7 as Z,S as C,P as q,a8 as ee,T as ae,N as te,w as D,aC as re,aD as le}from"./index.181651b6.js";import{g as oe,b as se,Q as A,d as ne}from"./QSelect.92bfe2dd.js";import{Q as ce,a as v,b as de}from"./QTable.4b516d1e.js";import{i as ue,j as ie}from"./use-key-composition.19db8c27.js";import{Q as pe}from"./QPage.fffa2538.js";import{u as fe}from"./useProject.45bbd441.js";import"./scroll.76abc915.js";import"./QCheckbox.708760d2.js";import"./uid.42677368.js";var me=k({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:r}){const o=x(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>Q(e.tag,{class:o.value},P(r.default))}}),ve=k({name:"QCardActions",props:{...U,vertical:Boolean},setup(e,{slots:r}){const o=Y(e),l=x(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>Q("div",{class:l.value},P(r.default))}}),ye=k({name:"QCard",props:{...ue,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:r}){const{proxy:{$q:o}}=F(),l=ie(e,o),i=x(()=>"q-card"+(l.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>Q(e.tag,{class:i.value},P(r.default))}});function N(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const r=parseInt(e,10);return isNaN(r)?0:r}var z=G({name:"close-popup",beforeMount(e,{value:r}){const o={depth:N(r),handler(l){o.depth!==0&&setTimeout(()=>{const i=oe(e);i!==void 0&&se(i,l,o.depth)})},handlerKey(l){H(l,13)===!0&&o.handler(l)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:r,oldValue:o}){r!==o&&(e.__qclosepopup.depth=N(r))},beforeUnmount(e){const r=e.__qclosepopup;e.removeEventListener("click",r.handler),e.removeEventListener("keyup",r.handlerKey),delete e.__qclosepopup}});const S=e=>(re("data-v-4cc30bd4"),e=e(),le(),e),_e={class:"row"},ge=S(()=>g("h5",{style:{padding:"0"}},"Projects",-1)),he=S(()=>g("p",{class:"self-center",style:{"padding-left":"80px","padding-right":"20px"}},"Filters:",-1)),we={key:0,class:"q-pa-md"},be=S(()=>g("span",{class:"q-ml-sm"},"Are you sure you want to delete the project?",-1)),Ce={__name:"ProjectsManager",setup(e){const r=u(null),o=O(),l=u(null),i=u(null),E=u(!1),y=u([]),h=u([]),f=u(""),m=u("");(async()=>{const{data:c}=await W.from("projects").select();l.value=c,E.value=!0;for(let a=0;a<l.value.length;a++)y.value.includes(l.value[a].year)||y.value.push(l.value[a].year),h.value.includes(l.value[a].category)||h.value.push(l.value[a].category);y.value.sort(function(a,d){return d-a});const s=(a,d)=>a===""&&d===""?l.value:a===""&&d!==""?l.value.filter(p=>p.category===d):a!==""&&d===""?l.value.filter(p=>p.year===a):l.value.filter(p=>p.year===a&&p.category===d);X(()=>{i.value=s(f.value,m.value)})})();const I=[{name:"name",required:!0,label:"Name of Project",align:"left",field:c=>c.name,sortable:!0},{name:"year",label:"Year",align:"left",field:"year",format:c=>`${c}`,sortable:!0},{name:"category",label:"Category",align:"left",field:"category",format:c=>`${c}`,sortable:!0},{name:"edit",label:"Edit",align:"left"},{name:"delete",label:"Delete",align:"left"}],M=i,T=c=>{o.push({path:"/Projects/"+c})},w=u(!1),{errorMess:j,deleteProject:L}=fe(),K=async c=>{await L(c),j.value?alert(j.value):o.go()};return(c,s)=>(V(),R(pe,{padding:""},{default:n(()=>[g("div",_e,[ge,t(b,{round:"",color:"primary",icon:"add",class:"self-center q-mx-sm",to:"Projects/AddProject"}),he,t(A,{modelValue:f.value,"onUpdate:modelValue":s[1]||(s[1]=a=>f.value=a),options:y.value,label:"Year",style:{width:"180px"},class:"q-pa-md self-center"},B({_:2},[f.value?{name:"append",fn:n(()=>[t(_,{name:"cancel",onClick:s[0]||(s[0]=$(a=>f.value="",["stop","prevent"])),class:"cursor-pointer"})]),key:"0"}:void 0]),1032,["modelValue","options"]),t(A,{modelValue:m.value,"onUpdate:modelValue":s[3]||(s[3]=a=>m.value=a),options:h.value,label:"Category",style:{width:"200px"},class:"q-pa-md self-center"},B({_:2},[m.value?{name:"append",fn:n(()=>[t(_,{name:"cancel",onClick:s[2]||(s[2]=$(a=>m.value="",["stop","prevent"])),class:"cursor-pointer"})]),key:"0"}:void 0]),1032,["modelValue","options"])]),i.value?(V(),Z("div",we,[t(de,{rows:ee(M),columns:I,"row-key":"name","rows-per-page-options":[10,20],style:{width:"600px"}},{body:n(a=>[t(ce,{props:a},{default:n(()=>[t(v,{key:"name"},{default:n(()=>[C(q(a.row.name),1)]),_:2},1024),t(v,{key:"year"},{default:n(()=>[C(q(a.row.year),1)]),_:2},1024),t(v,{key:"category"},{default:n(()=>[C(q(a.row.category),1)]),_:2},1024),t(v,{key:"edit"},{default:n(()=>[t(_,{name:"mdi-pencil",size:"sm",onClick:d=>T(a.row.name),class:"edit"},null,8,["onClick"])]),_:2},1024),t(v,{key:"delete"},{default:n(()=>[t(_,{name:"mdi-delete",size:"sm",onClick:d=>{r.value=a.row.id,w.value=!0},class:"edit"},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["rows"])])):ae("",!0),t(ne,{modelValue:w.value,"onUpdate:modelValue":s[5]||(s[5]=a=>w.value=a),persistent:""},{default:n(()=>[t(ye,null,{default:n(()=>[t(me,{class:"row items-center"},{default:n(()=>[t(te,{icon:"signal_wifi_off",color:"primary","text-color":"white"}),be]),_:1}),t(ve,{align:"right"},{default:n(()=>[D(t(b,{flat:"",label:"Cancel",color:"primary"},null,512),[[z]]),D(t(b,{flat:"",label:"Delete",color:"primary",onClick:s[4]||(s[4]=a=>K(r.value))},null,512),[[z]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};var De=J(Ce,[["__scopeId","data-v-4cc30bd4"]]);export{De as default};
