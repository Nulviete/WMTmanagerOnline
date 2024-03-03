import{Q as I}from"./QPage.1b4ea7c2.js";import{Q as T,a as N}from"./QForm.5e2e73ec.js";import{Q as p}from"./QSelect.d3342a9a.js";import{Q as h}from"./QCheckbox.c2627c58.js";import{_ as O,G as $,r as s,J as f,S,M as t,L as q,P as n,Z as E,H as C,aC as j,aD as F,K as J,a8 as k,U}from"./index.54b6f0d8.js";import{u as P}from"./use-quasar.77fa20f4.js";import"./use-key-composition.5f80a910.js";import"./uid.42677368.js";import"./scroll.29190ff5.js";const M=i=>(j("data-v-08b4141d"),i=i(),F(),i),Y={key:0},L={key:1},z=M(()=>n("h5",{class:"text-center"},"Memba modifajar",-1)),H={class:"row q-gutter-sm justify-center"},R={class:"leftBlock"},A={class:"row items-center"},G=M(()=>n("div",{class:"h3-text"},"Start of cooperation",-1)),K={class:"row q-gutter-xs"},W={class:"rightBlock"},Z={class:"row items-center"},X=M(()=>n("div",{class:"h3-text"},"End of cooperation",-1)),ee=M(()=>n("div",{class:"h3-text"},"Currently working",-1)),le={class:"row q-gutter-xs"},oe={class:"row justify-center"},ae={__name:"ModifyMemberTable",props:{member:Object},setup(i){const a=i,r=P(),V=$(),l=s({name:a.member.name,country:a.member.country,position:a.member.position,positionDescription:a.member.positionDescription,dateSince:a.member.dateSince,dateTill:a.member.dateTill}),u=s(""),c=s("");l.value.dateSince&&(u.value=a.member.dateSince.substr(0,3),c.value=a.member.dateSince.substr(4,7));const v=s(a.member.dateTill==="now"),y=s(""),_=s(""),b=s(!1),d=s(!1);a.member.dateTill!=="now"&&(d.value=!0,y.value=a.member.dateTill.substr(0,3),_.value=a.member.dateTill.substr(4,7));const Q=s([{label:"Poland",value:"pl"},{label:"Ukraine",value:"ua"},{label:"Czech republic",value:"cz"},{label:"Spain",value:"sp"},{label:"Italy",value:"it"},{label:"Morocco",value:"mo"}]),D=s([{label:"Root Member"},{label:"Volunteer"}]),w=new Date().getFullYear(),x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Sep","Oct","Nov","Dec"],g=s([]);for(let m=w-5;m<w+5;m++)g.value.push(m);async function B(){l.value.country=l.value.country.value,b.value&&(l.value.dateSince=u.value+" of "+c.value),d.value&&(l.value.dateTill=y.value+" of "+_.value),v.value&&(l.value.dateTill="now");const{data:m,error:e}=await C.from("members").update({name:l.value.name,country:l.value.country,position:l.value.position,positionDescription:l.value.positionDescription,dateSince:l.value.dateSince,dateTill:l.value.dateTill}).eq("name",a.member.name).select();e&&console.log(e),m&&console.log(m),r.notify("Member has been successfully modified"),setTimeout(()=>V.push({path:"/Members"}),1500)}return(m,e)=>a.member.position==="Head of the Foundation"||a.member.position==="Vice"?(f(),S("div",Y,"Not elligible to modify head members of foundation")):(f(),S("div",L,[t(N,{style:{},class:"q-mx-auto q-pa-md",onSubmit:B},{default:q(()=>[z,t(T,{modelValue:l.value.name,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value.name=o),label:"Name",required:""},null,8,["modelValue"]),t(p,{modelValue:l.value.country,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value.country=o),options:Q.value,label:"Country",required:""},null,8,["modelValue","options"]),t(p,{modelValue:l.value.position,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value.position=o),options:D.value,label:"Position",required:""},null,8,["modelValue","options"]),t(T,{modelValue:l.value.positionDescription,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value.positionDescription=o),label:"Description of position"},null,8,["modelValue"]),n("div",H,[n("div",R,[n("div",A,[t(h,{modelValue:b.value,"onUpdate:modelValue":e[4]||(e[4]=o=>b.value=o)},null,8,["modelValue"]),G]),n("div",K,[t(p,{filled:"",modelValue:u.value,"onUpdate:modelValue":e[5]||(e[5]=o=>u.value=o),options:x,label:"Month",disable:!b.value},null,8,["modelValue","disable"]),t(p,{filled:"",modelValue:c.value,"onUpdate:modelValue":e[6]||(e[6]=o=>c.value=o),options:g.value,label:"Year",disable:!b.value},null,8,["modelValue","options","disable"])])]),n("div",W,[n("div",Z,[t(h,{modelValue:d.value,"onUpdate:modelValue":e[7]||(e[7]=o=>d.value=o),onClick:e[8]||(e[8]=o=>v.value=!d.value)},null,8,["modelValue"]),X,t(h,{modelValue:v.value,"onUpdate:modelValue":e[9]||(e[9]=o=>v.value=o),onClick:e[10]||(e[10]=o=>d.value=!v.value)},null,8,["modelValue"]),ee]),n("div",le,[t(p,{filled:"",modelValue:y.value,"onUpdate:modelValue":e[11]||(e[11]=o=>y.value=o),options:x,label:"Month",class:"",disable:!d.value},null,8,["modelValue","disable"]),t(p,{filled:"",modelValue:_.value,"onUpdate:modelValue":e[12]||(e[12]=o=>_.value=o),options:g.value,label:"Year",class:"",disable:!d.value},null,8,["modelValue","options","disable"])])])]),n("div",oe,[t(E,{label:"Update Membo",class:"q-mt-md bg-green-3",type:"submit"})])]),_:1})]))}};var te=O(ae,[["__scopeId","data-v-08b4141d"]]);const se=()=>{const i=s(null),a=s(!1),r=s(null);return{loadMember:async l=>{try{const{data:u}=await C.from("members").select("*").eq("name",l);r.value&&console.log(r),u&&(i.value=u[0],a.value=!0)}catch(u){r.value=u.message}},data:i,dataLoaded:a,error:r}},ne={key:0},ue={key:1},ye={__name:"ModifyMember",props:{name:String},setup(i){const a=i,{loadMember:r,data:V,dataLoaded:l,error:u}=se();return r(a.name),(c,v)=>(f(),J(I,{padding:""},{default:q(()=>[k(l)?(f(),S("div",ne,[t(te,{member:k(V)},null,8,["member"])])):U("",!0),k(u)?(f(),S("div",ue,"Chybicka")):U("",!0)]),_:1}))}};export{ye as default};