import{Q as r,a as V}from"./QForm.8fc05feb.js";import{Q as x}from"./QSelect.92bfe2dd.js";import{_ as q,G as j,r as d,a as k,J as u,K as w,L as p,O as l,M as a,a7 as v,Y as _,aB as U,aC as P,aD as Q,H as I}from"./index.181651b6.js";import{Q as A}from"./QPage.fffa2538.js";import{u as B}from"./use-quasar.e573c060.js";import"./use-key-composition.19db8c27.js";import"./uid.42677368.js";import"./scroll.76abc915.js";const i=s=>(P("data-v-1288dfe8"),s=s(),Q(),s),S=i(()=>l("h2",{class:"q-mx-auto text-center"},"Add new projecto :-)",-1)),C={style:{width:"700px"},class:"q-mx-auto"},M=i(()=>l("div",{class:"q-pt-sm text-h4"},"Main photo",-1)),G={class:"row q-col-gutter-lg q-py-xs"},H={class:"row justify-center col-3"},L=["src"],N={key:1},O=i(()=>l("div",{class:"q-pt-sm text-h4"},"Gallery slide show",-1)),Y={class:"row justify-start"},$={class:"row justify-center"},z={__name:"AddProject",setup(s){const f=B(),y=j(),c=d(!1),n=d(""),h=k(()=>n.value.split(/\r?\n|\r|\n/g)),g=d(["international","forUkraine"]),o=d({name:"",category:null,year:null,photos:h,photoUrl:null});o.value.photos.length=15;async function b(){const{data:m,error:e}=await I.from("projects").insert(o.value).select();m&&(f.notify("Project has been successfully added"),setTimeout(()=>y.push({path:"/Projects"}),1500)),e&&console.log(e)}return(m,e)=>(u(),w(A,{padding:""},{default:p(()=>[S,l("div",C,[a(V,{action:"",onSubmit:U(b,["prevent"])},{default:p(()=>[a(r,{filled:"",modelValue:o.value.name,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value.name=t),label:"Project name",dense:c.value,class:"q-my-sm",required:""},null,8,["modelValue","dense"]),a(x,{filled:"",modelValue:o.value.category,"onUpdate:modelValue":e[1]||(e[1]=t=>o.value.category=t),options:g.value,label:"Category"},null,8,["modelValue","options"]),a(r,{filled:"",modelValue:o.value.year,"onUpdate:modelValue":e[2]||(e[2]=t=>o.value.year=t),label:"Year",dense:c.value,class:"q-my-sm q-mb-xl",required:""},null,8,["modelValue","dense"]),M,l("div",G,[a(r,{modelValue:o.value.photoUrl,"onUpdate:modelValue":e[3]||(e[3]=t=>o.value.photoUrl=t),label:"Main photo",class:"col-9"},null,8,["modelValue"]),l("div",H,[o.value.photoUrl?(u(),v("img",{key:0,src:o.value.photoUrl,alt:"",class:"obrazek"},null,8,L)):(u(),v("p",N,"(Image)"))])]),O,l("div",null,[a(r,{type:"textarea",label:"Here copy direct links from Imgur.com",modelValue:n.value,"onUpdate:modelValue":e[4]||(e[4]=t=>n.value=t)},null,8,["modelValue"])]),l("div",Y,[a(_,{label:"Add Photo",onClick:e[5]||(e[5]=t=>o.value.photos.length++),class:"q-mt-md bg-blue-2 text-black"})]),l("div",$,[a(_,{class:"glossy q-mt-md",color:"teal",label:"Add Project",type:"submit"})])]),_:1})])]),_:1}))}};var X=q(z,[["__scopeId","data-v-1288dfe8"]]);export{X as default};
