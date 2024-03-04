import{a as h,c as G,r as g,n as H,o as Y,h as m,a5 as J,b as K,a4 as D,_ as W,G as X,J as y,K as N,L as V,M as r,O as q,aA as T,Q as $,aB as x,a7 as k,aF as Z,aG as ee,Y as B,aC as te,aD as le,a8 as M}from"./index.181651b6.js";import{Q as oe}from"./QPage.fffa2538.js";import{u as R}from"./useProject.45bbd441.js";import{Q as S,a as ae}from"./QForm.8fc05feb.js";import{Q as z}from"./QSelect.92bfe2dd.js";import{u as ne}from"./use-quasar.e573c060.js";import"./use-key-composition.19db8c27.js";import"./uid.42677368.js";import"./scroll.76abc915.js";const re={ratio:[String,Number]};function ie(t,n){return h(()=>{const s=Number(t.ratio||(n!==void 0?n.value:void 0));return isNaN(s)!==!0&&s>0?{paddingBottom:`${100/s}%`}:null})}const se=16/9;var I=G({name:"QImg",props:{...re,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:se},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(t,{slots:n,emit:s}){const f=g(t.initialRatio),p=ie(t,f);let e=null,v=!1;const i=[g(null),g(w())],u=g(0),c=g(!1),l=g(!1),a=h(()=>`q-img q-img--${t.noNativeMenu===!0?"no-":""}menu`),d=h(()=>({width:t.width,height:t.height})),b=h(()=>`q-img__image ${t.imgClass!==void 0?t.imgClass+" ":""}q-img__image--with${t.noTransition===!0?"out":""}-transition`),L=h(()=>({...t.imgStyle,objectFit:t.fit,objectPosition:t.position}));H(()=>C(),U);function C(){return t.src||t.srcset||t.sizes?{src:t.src,srcset:t.srcset,sizes:t.sizes}:null}function w(){return t.placeholderSrc!==void 0?{src:t.placeholderSrc}:null}function U(o){e!==null&&(clearTimeout(e),e=null),l.value=!1,o===null?(c.value=!1,i[u.value^1].value=w()):c.value=!0,i[u.value].value=o}function F({target:o}){v!==!0&&(e!==null&&(clearTimeout(e),e=null),f.value=o.naturalHeight===0?.5:o.naturalWidth/o.naturalHeight,P(o,1))}function P(o,_){v===!0||_===1e3||(o.complete===!0?O(o):e=setTimeout(()=>{e=null,P(o,_+1)},50))}function O(o){v!==!0&&(u.value=u.value^1,i[u.value].value=null,c.value=!1,l.value=!1,s("load",o.currentSrc||o.src))}function E(o){e!==null&&(clearTimeout(e),e=null),c.value=!1,l.value=!0,i[u.value].value=null,i[u.value^1].value=w(),s("error",o)}function Q(o){const _=i[o].value,j={key:"img_"+o,class:b.value,style:L.value,crossorigin:t.crossorigin,decoding:t.decoding,referrerpolicy:t.referrerpolicy,height:t.height,width:t.width,loading:t.loading,fetchpriority:t.fetchpriority,"aria-hidden":"true",draggable:t.draggable,..._};return u.value===o?(j.class+=" q-img__image--waiting",Object.assign(j,{onLoad:F,onError:E})):j.class+=" q-img__image--loaded",m("div",{class:"q-img__container absolute-full",key:"img"+o},m("img",j))}function A(){return c.value!==!0?m("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},K(n[l.value===!0?"error":"default"])):m("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},n.loading!==void 0?n.loading():t.noSpinner===!0?void 0:[m(D,{color:t.spinnerColor,size:t.spinnerSize})])}return U(C()),Y(()=>{v=!0,e!==null&&(clearTimeout(e),e=null)}),()=>{const o=[];return p.value!==null&&o.push(m("div",{key:"filler",style:p.value})),l.value!==!0&&(i[0].value!==null&&o.push(Q(0)),i[1].value!==null&&o.push(Q(1))),o.push(m(J,{name:"q-transition--fade"},A)),m("div",{class:a.value,style:d.value,role:"img","aria-label":t.alt},o)}}});const ue=t=>(te("data-v-0eebfd11"),t=t(),le(),t),ce={class:"row q-py-xs"},de=ue(()=>q("div",{class:"h5-text q-pt-md"},"Photos:",-1)),me={class:"row justify-start"},ve={class:"row justify-center"},ge={__name:"ModifyProjectTable",props:{project:Object},setup(t){const n=t,s=X(),f=ne(),p=h(()=>e.value.photos.filter((c,l)=>e.value.photos.indexOf(c)===l)),e=g({name:n.project.name,category:n.project.category,year:n.project.year,projectDescription:n.project.projectDescription,photoUrl:n.project.photoUrl,countries:n.project.countries,photos:n.project.photos});e.value.photos||(e.value.photos=[]);const{updateProject:v,errorMess:i}=R();async function u(){e.value.photos=e.value.photos.filter(c=>c.length>0),e.value.photos=p.value,await v(e.value.name,e.value.category,e.value.year,e.value.projectDescription,e.value.photoUrl,e.value.countries,e.value.photos),console.log(i.value),i.value?alert(i.value):(f.notify({message:"Project has been successfully modified",color:"green",textColor:"white"}),setTimeout(()=>s.push({path:"/Projects"}),1500))}return(c,l)=>(y(),N(ae,{style:{width:"600px"},class:"q-pa-md q-mx-auto"},{default:V(()=>[r(S,{label:"Project name",modelValue:e.value.name,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value.name=a)},null,8,["modelValue"]),r(z,{label:"Category",modelValue:e.value.category,"onUpdate:modelValue":l[1]||(l[1]=a=>e.value.category=a)},null,8,["modelValue"]),r(z,{label:"Year",modelValue:e.value.year,"onUpdate:modelValue":l[2]||(l[2]=a=>e.value.year=a)},null,8,["modelValue"]),r(S,{label:"Description of project",modelValue:e.value.projectDescription,"onUpdate:modelValue":l[3]||(l[3]=a=>e.value.projectDescription=a),type:"textarea"},null,8,["modelValue"]),q("div",ce,[r(S,{label:"Main photo URL",modelValue:e.value.photoUrl,"onUpdate:modelValue":l[5]||(l[5]=a=>e.value.photoUrl=a),class:"col-10 q-pr-sm",filled:""},T({_:2},[e.value.photoUrl?{name:"append",fn:V(()=>[r($,{name:"cancel",onClick:l[4]||(l[4]=x(a=>e.value.photoUrl="",["stop","prevent"])),class:"cursor-pointer"})]),key:"0"}:void 0]),1032,["modelValue"]),r(I,{src:e.value.photoUrl,ratio:16/9,width:"80px",class:"q-ml-sm",loading:"lazy",onLoad:l[6]||(l[6]=a=>console.log("loading")),onError:l[7]||(l[7]=a=>console.log("cannot load"))},null,8,["src"])]),r(S,{label:"Participants' countries",modelValue:e.value.countries,"onUpdate:modelValue":l[8]||(l[8]=a=>e.value.countries=a)},null,8,["modelValue"]),de,(y(!0),k(Z,null,ee(e.value.photos,(a,d)=>(y(),k("div",{key:d,class:"row q-py-xs"},[r(S,{label:"Photo "+(d+1),modelValue:e.value.photos[d],"onUpdate:modelValue":b=>e.value.photos[d]=b,class:"col-10 q-pr-sm",filled:""},T({_:2},[e.value.photos[d]?{name:"append",fn:V(()=>[r($,{name:"cancel",onClick:x(b=>e.value.photos[d]="",["stop","prevent"]),class:"cursor-pointer"},null,8,["onClick"])]),key:"0"}:void 0]),1032,["label","modelValue","onUpdate:modelValue"]),r(I,{src:a,ratio:16/9,width:"80px",class:"q-ml-sm",loading:"lazy",d:""},null,8,["src"])]))),128)),q("div",me,[r(B,{label:"Add Photo",onClick:l[9]||(l[9]=a=>e.value.photos.length++),class:"q-mt-md bg-blue-2 text-black"})]),q("div",ve,[r(B,{label:"Confirm Changes",onClick:u,class:"q-mt-md bg-green-2 text-black"})])]),_:1}))}};var fe=W(ge,[["__scopeId","data-v-0eebfd11"]]);const pe={key:0},he={key:1},Ce={__name:"ModifyProject",props:{name:String},setup(t){const n=t,{loadProject:s,data:f,dataLoaded:p,errorMess:e}=R();return s(n.name),e.value&&console.log(e.value),(v,i)=>(y(),N(oe,{padding:""},{default:V(()=>[M(p)?(y(),k("div",pe,[r(fe,{project:M(f)},null,8,["project"])])):(y(),k("div",he,[r(D)]))]),_:1}))}};export{Ce as default};