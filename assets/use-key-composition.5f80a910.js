import{a as i,p as ne,r as g,d as T,i as ue,n as q,o as j,a1 as ae,k as O,a2 as ie,$ as se,a3 as de,s as fe,v as ce,z as ve,A as pe,h as a,a4 as w,Q as Z,a5 as ge,b as E,a6 as me,a7 as be}from"./index.54b6f0d8.js";import{u as Y}from"./uid.42677368.js";const he={dark:{type:Boolean,default:null}};function Ce(e,o){return i(()=>e.dark===null?o.dark.isActive:e.dark)}function ee(e,o){return e===void 0?o===!0?`f_${Y()}`:void 0:e}function ye(e,o=!0){if(ne.value===!0){const t=g(e);return o===!0&&e===void 0&&T(()=>{t.value=`f_${Y()}`}),t}return g(ee(e,o))}function qe({validate:e,resetValidation:o,requiresQForm:t}){const r=ue(ae,!1);if(r!==!1){const{props:c,proxy:s}=O();Object.assign(s,{validate:e,resetValidation:o}),q(()=>c.disable,u=>{u===!0?(typeof o=="function"&&o(),r.unbindComponent(s)):r.bindComponent(s)}),T(()=>{c.disable!==!0&&r.bindComponent(s)}),j(()=>{c.disable!==!0&&r.unbindComponent(s)})}else t===!0&&console.error("Parent QForm not found on useFormChild()!")}const W=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,J=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,G=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,P=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,I=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,M={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>W.test(e),hexaColor:e=>J.test(e),hexOrHexaColor:e=>G.test(e),rgbColor:e=>P.test(e),rgbaColor:e=>I.test(e),rgbOrRgbaColor:e=>P.test(e)||I.test(e),hexOrRgbColor:e=>W.test(e)||P.test(e),hexaOrRgbaColor:e=>J.test(e)||I.test(e),anyColor:e=>G.test(e)||P.test(e)||I.test(e)},_e=[!0,!1,"ondemand"],xe={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>_e.includes(e)}};function Se(e,o){const{props:t,proxy:r}=O(),c=g(!1),s=g(null),u=g(!1);qe({validate:F,resetValidation:S});let d=0,m;const B=i(()=>t.rules!==void 0&&t.rules!==null&&t.rules.length!==0),b=i(()=>t.disable!==!0&&B.value===!0&&o.value===!1),x=i(()=>t.error===!0||c.value===!0),z=i(()=>typeof t.errorMessage=="string"&&t.errorMessage.length!==0?t.errorMessage:s.value);q(()=>t.modelValue,()=>{u.value=!0,b.value===!0&&t.lazyRules===!1&&C()});function V(){t.lazyRules!=="ondemand"&&b.value===!0&&u.value===!0&&C()}q(()=>t.reactiveRules,h=>{h===!0?m===void 0&&(m=q(()=>t.rules,V,{immediate:!0,deep:!0})):m!==void 0&&(m(),m=void 0)},{immediate:!0}),q(()=>t.lazyRules,V),q(e,h=>{h===!0?u.value=!0:b.value===!0&&t.lazyRules!=="ondemand"&&C()});function S(){d++,o.value=!1,u.value=!1,c.value=!1,s.value=null,C.cancel()}function F(h=t.modelValue){if(t.disable===!0||B.value===!1)return!0;const R=++d,D=o.value!==!0?()=>{u.value=!0}:()=>{},y=(f,v)=>{f===!0&&D(),c.value=f,s.value=v||null,o.value=!1},A=[];for(let f=0;f<t.rules.length;f++){const v=t.rules[f];let p;if(typeof v=="function"?p=v(h,M):typeof v=="string"&&M[v]!==void 0&&(p=M[v](h)),p===!1||typeof p=="string")return y(!0,p),!1;p!==!0&&p!==void 0&&A.push(p)}return A.length===0?(y(!1),!0):(o.value=!0,Promise.all(A).then(f=>{if(f===void 0||Array.isArray(f)===!1||f.length===0)return R===d&&y(!1),!0;const v=f.find(p=>p===!1||typeof p=="string");return R===d&&y(v!==void 0,v),v===void 0},f=>(R===d&&(console.error(f),y(!0)),!1)))}const C=ie(F,0);return j(()=>{m!==void 0&&m(),C.cancel()}),Object.assign(r,{resetValidation:S,validate:F}),se(r,"hasError",()=>x.value),{isDirtyModel:u,hasRules:B,hasError:x,errorMessage:z,validate:F,resetValidation:S}}const X=/^on[A-Z]/;function Fe(e,o){const t={listeners:g({}),attributes:g({})};function r(){const c={},s={};for(const u in e)u!=="class"&&u!=="style"&&X.test(u)===!1&&(c[u]=e[u]);for(const u in o.props)X.test(u)===!0&&(s[u]=o.props[u]);t.attributes.value=c,t.listeners.value=s}return de(r),r(),t}let _=[],k=[];function oe(e){k=k.filter(o=>o!==e)}function Ie(e){oe(e),k.push(e)}function Oe(e){oe(e),k.length===0&&_.length!==0&&(_[_.length-1](),_=[])}function Re(e){k.length===0?e():_.push(e)}function Ae(e){_=_.filter(o=>o!==e)}function Be(e){return e!=null&&(""+e).length!==0}const ze={...he,...xe,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},De=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Me({requiredForAttr:e=!0,tagProp:o}={}){const{props:t,attrs:r,proxy:c,vnode:s}=O(),u=Ce(t,c.$q),d=ye(t.for,e);return{requiredForAttr:e,tag:o===!0?i(()=>t.tag):{value:"label"},isDark:u,editable:i(()=>t.disable!==!0&&t.readonly!==!0),innerLoading:g(!1),focused:g(!1),hasPopupOpen:!1,splitAttrs:Fe(r,s),targetUid:d,rootRef:g(null),targetRef:g(null),controlRef:g(null)}}function Te(e){const{props:o,emit:t,slots:r,attrs:c,proxy:s}=O(),{$q:u}=s;let d=null;e.hasValue===void 0&&(e.hasValue=i(()=>Be(o.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{t("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:U,onFocusout:H}),Object.assign(e,{clearValue:L,onControlFocusin:U,onControlFocusout:H,focus:v}),e.computedCounter===void 0&&(e.computedCounter=i(()=>{if(o.counter!==!1){const l=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,n=o.maxlength!==void 0?o.maxlength:o.maxValues;return l+(n!==void 0?" / "+n:"")}}));const{isDirtyModel:m,hasRules:B,hasError:b,errorMessage:x,resetValidation:z}=Se(e.focused,e.innerLoading),V=e.floatingLabel!==void 0?i(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):i(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),S=i(()=>o.bottomSlots===!0||o.hint!==void 0||B.value===!0||o.counter===!0||o.error!==null),F=i(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),C=i(()=>`q-field row no-wrap items-start q-field--${F.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(V.value===!0?" q-field--float":"")+(R.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(b.value===!0?" q-field--error":"")+(b.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&S.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),h=i(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(b.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length!==0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),R=i(()=>o.labelSlot===!0||o.label!==void 0),D=i(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&b.value!==!0?` text-${o.labelColor}`:"")),y=i(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:V.value,modelValue:o.modelValue,emitValue:e.emitValue})),A=i(()=>{const l={};return e.targetUid.value&&(l.for=e.targetUid.value),o.disable===!0&&(l["aria-disabled"]="true"),l});q(()=>o.for,l=>{e.targetUid.value=ee(l,e.requiredForAttr)});function f(){const l=document.activeElement;let n=e.targetRef!==void 0&&e.targetRef.value;n&&(l===null||l.id!==e.targetUid.value)&&(n.hasAttribute("tabindex")===!0||(n=n.querySelector("[tabindex]")),n&&n!==l&&n.focus({preventScroll:!0}))}function v(){Re(f)}function p(){Ae(f);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function U(l){d!==null&&(clearTimeout(d),d=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,t("focus",l))}function H(l,n){d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,t("blur",l)),n!==void 0&&n())})}function L(l){fe(l),u.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),t("update:modelValue",null),t("clear",o.modelValue),ce(()=>{const n=m.value;z(),m.value=n})}function te(){const l=[];return r.prepend!==void 0&&l.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:w},r.prepend())),l.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},le())),b.value===!0&&o.noErrorIcon===!1&&l.push($("error",[a(Z,{name:u.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?l.push($("inner-loading-append",r.loading!==void 0?r.loading():[a(ge,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push($("inner-clearable-append",[a(Z,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||u.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:L})])),r.append!==void 0&&l.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:w},r.append())),e.getInnerAppend!==void 0&&l.push($("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function le(){const l=[];return o.prefix!==void 0&&o.prefix!==null&&l.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):r.rawControl!==void 0?l.push(r.rawControl()):r.control!==void 0&&l.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},r.control(y.value))),R.value===!0&&l.push(a("div",{class:D.value},E(r.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&l.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),l.concat(E(r.default))}function re(){let l,n;b.value===!0?x.value!==null?(l=[a("div",{role:"alert"},x.value)],n=`q--slot-error-${x.value}`):(l=E(r.error),n="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(l=[a("div",o.hint)],n=`q--slot-hint-${o.hint}`):(l=E(r.hint),n="q--slot-hint"));const K=o.counter===!0||r.counter!==void 0;if(o.hideBottomSpace===!0&&K===!1&&l===void 0)return;const N=a("div",{key:n,class:"q-field__messages col"},l);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:w},[o.hideBottomSpace===!0?N:a(me,{name:"q-transition--field-message"},()=>N),K===!0?a("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function $(l,n){return n===null?null:a("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},n)}let Q=!1;return ve(()=>{Q=!0}),pe(()=>{Q===!0&&o.autofocus===!0&&s.focus()}),o.autofocus===!0&&T(()=>{s.focus()}),j(()=>{d!==null&&clearTimeout(d)}),Object.assign(s,{focus:v,blur:p}),function(){const n=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...A.value}:A.value;return a(e.tag.value,{ref:e.rootRef,class:[C.value,c.class],style:c.style,...n},[r.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:w},r.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:h.value,tabindex:-1,...e.controlEvents},te()),S.value===!0?re():null]),r.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:w},r.after()):null])}}const je={name:String};function Ue(e={}){return(o,t,r)=>{o[t](a("input",{class:"hidden"+(r||""),...e.value}))}}function He(e){return i(()=>e.name||e.for)}const Ve=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,we=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,ke=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,$e=/[a-z0-9_ -]$/i;function Le(e){return function(t){if(t.type==="compositionend"||t.type==="change"){if(t.target.qComposing!==!0)return;t.target.qComposing=!1,e(t)}else t.type==="compositionupdate"&&t.target.qComposing!==!0&&typeof t.data=="string"&&(be.is.firefox===!0?$e.test(t.data)===!1:Ve.test(t.data)===!0||we.test(t.data)===!0||ke.test(t.data)===!0)===!0&&(t.target.qComposing=!0)}}export{je as a,De as b,He as c,Me as d,Te as e,Be as f,Re as g,Le as h,he as i,Ce as j,Ie as k,Ue as l,Oe as r,ze as u};
