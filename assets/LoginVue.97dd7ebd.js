import{Q as v}from"./QPage.1b4ea7c2.js";import{Q as r,a as f}from"./QForm.5e2e73ec.js";import{_ as g,r as u,G as b,J as n,K as d,L as i,M as t,P as x,Z as V,H as w}from"./index.54b6f0d8.js";import"./use-key-composition.5f80a910.js";import"./uid.42677368.js";const y={class:"row justify-around q-gutter-sm"},L={__name:"LoginTable",setup(p){const a=u(""),s=u(""),m=u(null),_=b();async function c(){const{data:o,error:e}=await w.auth.signInWithPassword({email:a.value,password:s.value});o&&(a.value="",s.value="",m.value=o,_.push({name:"Index"})),e&&(console.log(e),a.value="",s.value="")}return(o,e)=>(n(),d(f,{class:"q-mx-auto q-pa-md",style:{width:"450px"},onSubmit:c},{default:i(()=>[t(r,{label:"Login",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),type:"email",required:""},null,8,["modelValue"]),t(r,{label:"Password",modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=l=>s.value=l),required:"",type:"password"},null,8,["modelValue"]),x("div",y,[t(V,{label:"Login",class:"q-mt-md",type:"submit"})])]),_:1}))}};var q=g(L,[["__scopeId","data-v-355d59dc"]]);const T={__name:"LoginVue",setup(p){return(a,s)=>(n(),d(v,{padding:""},{default:i(()=>[t(q)]),_:1}))}};export{T as default};