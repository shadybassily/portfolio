import{R as $}from"./react.ef76592b.js";var se=e=>e.type==="checkbox",X=e=>e instanceof Date,O=e=>e==null;const We=e=>typeof e=="object";var V=e=>!O(e)&&!Array.isArray(e)&&We(e)&&!X(e),nr=e=>V(e)&&e.target?se(e.target)?e.target.checked:e.target.value:e,lr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ar=(e,s)=>e.has(lr(s)),ie=e=>Array.isArray(e)?e.filter(Boolean):[],k=e=>e===void 0,d=(e,s,r)=>{if(!s||!V(e))return r;const a=ie(s.split(/[,[\].]+?/)).reduce((l,u)=>O(l)?l:l[u],e);return k(a)||a===e?k(e[s])?r:e[s]:a};const Me={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},B={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},W={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};$.createContext(null);var or=(e,s,r,a=!0)=>{const l={defaultValues:s._defaultValues};for(const u in e)Object.defineProperty(l,u,{get:()=>{const h=u;return s._proxyFormState[h]!==B.all&&(s._proxyFormState[h]=!a||B.all),r&&(r[h]=!0),e[h]}});return l},R=e=>V(e)&&!Object.keys(e).length,ur=(e,s,r)=>{const{name:a,...l}=e;return R(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(u=>s[u]===(!r||B.all))},_e=e=>Array.isArray(e)?e:[e];function cr(e){const s=$.useRef(e);s.current=e,$.useEffect(()=>{const r=!e.disabled&&s.current.subject.subscribe({next:s.current.callback});return()=>{r&&r.unsubscribe()}},[e.disabled])}var p=e=>typeof e=="string",fr=(e,s,r,a)=>{const l=Array.isArray(e);return p(e)?(a&&s.watch.add(e),d(r,e)):l?e.map(u=>(a&&s.watch.add(u),d(r,u))):(a&&(s.watchAll=!0),r)},dr=e=>{const s=e.constructor&&e.constructor.prototype;return V(s)&&s.hasOwnProperty("isPrototypeOf")},me=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function z(e){let s;const r=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(me&&(e instanceof Blob||e instanceof FileList))&&(r||V(e)))if(s=r?[]:{},!Array.isArray(e)&&!dr(e))s=e;else for(const a in e)s[a]=z(e[a]);else return e;return s}var yr=(e,s,r,a,l)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:l||!0}}:{},Se=e=>/^\w*$/.test(e),$e=e=>ie(e.replace(/["|']|\]/g,"").split(/\.|\[/));function w(e,s,r){let a=-1;const l=Se(s)?[s]:$e(s),u=l.length,h=u-1;for(;++a<u;){const g=l[a];let F=r;if(a!==h){const T=e[g];F=V(T)||Array.isArray(T)?T:isNaN(+l[a+1])?{}:[]}e[g]=F,e=e[g]}return e}const ke=(e,s,r)=>{for(const a of r||Object.keys(e)){const l=d(e,a);if(l){const{_f:u,...h}=l;if(u&&s(u.name)){if(u.ref.focus){u.ref.focus();break}else if(u.refs&&u.refs[0].focus){u.refs[0].focus();break}}else V(h)&&ke(h,s)}}};var Ue=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length)))),hr=(e,s,r)=>{const a=ie(d(e,r));return w(a,"root",s[r]),w(e,r,a),e},Z=e=>typeof e=="boolean",Ee=e=>e.type==="file",fe=e=>typeof e=="function",ce=e=>p(e)||$.isValidElement(e),Ce=e=>e.type==="radio",de=e=>e instanceof RegExp;const Ne={value:!1,isValid:!1},Pe={value:!0,isValid:!0};var Ke=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!k(e[0].attributes.value)?k(e[0].value)||e[0].value===""?Pe:{value:e[0].value,isValid:!0}:Pe:Ne}return Ne};const Be={isValid:!1,value:null};var je=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,Be):Be;function pe(e,s,r="validate"){if(ce(e)||Array.isArray(e)&&e.every(ce)||Z(e)&&!e)return{type:r,message:ce(e)?e:"",ref:s}}var Q=e=>V(e)&&!de(e)?e:{value:e,message:""},Ie=async(e,s,r,a,l)=>{const{ref:u,refs:h,required:g,maxLength:F,minLength:T,min:M,max:_,pattern:b,validate:K,name:U,valueAsNumber:ne,mount:ge,disabled:I}=e._f;if(!ge||I)return{};const q=h?h[0]:u,H=v=>{a&&q.reportValidity&&(q.setCustomValidity(Z(v)?"":v||""),q.reportValidity())},D={},ee=Ce(u),le=se(u),j=ee||le,G=(ne||Ee(u))&&!u.value||s===""||Array.isArray(s)&&!s.length,N=yr.bind(null,U,r,D),ae=(v,A,m,S=W.maxLength,P=W.minLength)=>{const L=v?A:m;D[U]={type:v?S:P,message:L,ref:u,...N(v?S:P,L)}};if(l?!Array.isArray(s)||!s.length:g&&(!j&&(G||O(s))||Z(s)&&!s||le&&!Ke(h).isValid||ee&&!je(h).isValid)){const{value:v,message:A}=ce(g)?{value:!!g,message:g}:Q(g);if(v&&(D[U]={type:W.required,message:A,ref:q,...N(W.required,A)},!r))return H(A),D}if(!G&&(!O(M)||!O(_))){let v,A;const m=Q(_),S=Q(M);if(!O(s)&&!isNaN(s)){const P=u.valueAsNumber||s&&+s;O(m.value)||(v=P>m.value),O(S.value)||(A=P<S.value)}else{const P=u.valueAsDate||new Date(s),L=oe=>new Date(new Date().toDateString()+" "+oe),re=u.type=="time",J=u.type=="week";p(m.value)&&s&&(v=re?L(s)>L(m.value):J?s>m.value:P>new Date(m.value)),p(S.value)&&s&&(A=re?L(s)<L(S.value):J?s<S.value:P<new Date(S.value))}if((v||A)&&(ae(!!v,m.message,S.message,W.max,W.min),!r))return H(D[U].message),D}if((F||T)&&!G&&(p(s)||l&&Array.isArray(s))){const v=Q(F),A=Q(T),m=!O(v.value)&&s.length>v.value,S=!O(A.value)&&s.length<A.value;if((m||S)&&(ae(m,v.message,A.message),!r))return H(D[U].message),D}if(b&&!G&&p(s)){const{value:v,message:A}=Q(b);if(de(v)&&!s.match(v)&&(D[U]={type:W.pattern,message:A,ref:u,...N(W.pattern,A)},!r))return H(A),D}if(K){if(fe(K)){const v=await K(s),A=pe(v,q);if(A&&(D[U]={...A,...N(W.validate,A.message)},!r))return H(A.message),D}else if(V(K)){let v={};for(const A in K){if(!R(v)&&!r)break;const m=pe(await K[A](s),q,A);m&&(v={...m,...N(A,m.message)},H(m.message),r&&(D[U]=v))}if(!R(v)&&(D[U]={ref:q,...v},!r))return D}}return H(!0),D},qe=e=>({isOnSubmit:!e||e===B.onSubmit,isOnBlur:e===B.onBlur,isOnChange:e===B.onChange,isOnAll:e===B.all,isOnTouch:e===B.onTouched});function gr(e,s){const r=s.slice(0,-1).length;let a=0;for(;a<r;)e=k(e)?a++:e[s[a++]];return e}function vr(e){for(const s in e)if(!k(e[s]))return!1;return!0}function C(e,s){const r=Se(s)?[s]:$e(s),a=r.length==1?e:gr(e,r),l=r[r.length-1];let u;a&&delete a[l];for(let h=0;h<r.slice(0,-1).length;h++){let g=-1,F;const T=r.slice(0,-(h+1)),M=T.length-1;for(h>0&&(u=e);++g<T.length;){const _=T[g];F=F?F[_]:e[_],M===g&&(V(F)&&R(F)||Array.isArray(F)&&vr(F))&&(u?delete u[_]:delete e[_]),u=F}}return e}function we(){let e=[];return{get observers(){return e},next:l=>{for(const u of e)u.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(u=>u!==l)}}),unsubscribe:()=>{e=[]}}}var ye=e=>O(e)||!We(e);function Y(e,s){if(ye(e)||ye(s))return e===s;if(X(e)&&X(s))return e.getTime()===s.getTime();const r=Object.keys(e),a=Object.keys(s);if(r.length!==a.length)return!1;for(const l of r){const u=e[l];if(!a.includes(l))return!1;if(l!=="ref"){const h=s[l];if(X(u)&&X(h)||V(u)&&V(h)||Array.isArray(u)&&Array.isArray(h)?!Y(u,h):u!==h)return!1}}return!0}var Ve=e=>{const s=e?e.ownerDocument:0,r=s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement;return e instanceof r},ze=e=>e.type==="select-multiple",br=e=>Ce(e)||se(e),Fe=e=>Ve(e)&&e.isConnected,Ge=e=>{for(const s in e)if(fe(e[s]))return!0;return!1};function he(e,s={}){const r=Array.isArray(e);if(V(e)||r)for(const a in e)Array.isArray(e[a])||V(e[a])&&!Ge(e[a])?(s[a]=Array.isArray(e[a])?[]:{},he(e[a],s[a])):O(e[a])||(s[a]=!0);return s}function Je(e,s,r){const a=Array.isArray(e);if(V(e)||a)for(const l in e)Array.isArray(e[l])||V(e[l])&&!Ge(e[l])?k(s)||ye(r[l])?r[l]=Array.isArray(e[l])?he(e[l],[]):{...he(e[l])}:Je(e[l],O(s)?{}:s[l],r[l]):Y(e[l],s[l])?delete r[l]:r[l]=!0;return r}var xe=(e,s)=>Je(e,s,he(s)),Qe=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:a})=>k(e)?e:s?e===""?NaN:e&&+e:r&&p(e)?new Date(e):a?a(e):e;function De(e){const s=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):s.disabled))return Ee(s)?s.files:Ce(s)?je(e.refs).value:ze(s)?[...s.selectedOptions].map(({value:r})=>r):se(s)?Ke(e.refs).value:Qe(k(s.value)?e.ref.value:s.value,e)}var Ar=(e,s,r,a)=>{const l={};for(const u of e){const h=d(s,u);h&&w(l,u,h._f)}return{criteriaMode:r,names:[...e],fields:l,shouldUseNativeValidation:a}},te=e=>k(e)?void 0:de(e)?e.source:V(e)?de(e.value)?e.value.source:e.value:e,_r=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function He(e,s,r){const a=d(e,r);if(a||Se(r))return{error:a,name:r};const l=r.split(".");for(;l.length;){const u=l.join("."),h=d(s,u),g=d(e,u);if(h&&!Array.isArray(h)&&r!==u)return{name:r};if(g&&g.type)return{name:u,error:g};l.pop()}return{name:r}}var wr=(e,s,r,a,l)=>l.isOnAll?!1:!r&&l.isOnTouch?!(s||e):(r?a.isOnBlur:l.isOnBlur)?!e:(r?a.isOnChange:l.isOnChange)?e:!0,Fr=(e,s)=>!ie(d(e,s)).length&&C(e,s);const xr={mode:B.onSubmit,reValidateMode:B.onChange,shouldFocusError:!0};function Dr(e={}){let s={...xr,...e},r={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},a={},l=z(s.defaultValues)||{},u=s.shouldUnregister?{}:z(l),h={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},F,T=0,M={};const _={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={watch:we(),array:we(),state:we()},K=qe(s.mode),U=qe(s.reValidateMode),ne=s.criteriaMode===B.all,ge=t=>i=>{clearTimeout(T),T=window.setTimeout(t,i)},I=async()=>{let t=!1;return _.isValid&&(t=s.resolver?R((await j()).errors):await N(a,!0),t!==r.isValid&&(r.isValid=t,b.state.next({isValid:t}))),t},q=(t,i=[],n,c,f=!0,o=!0)=>{if(c&&n){if(h.action=!0,o&&Array.isArray(d(a,t))){const y=n(d(a,t),c.argA,c.argB);f&&w(a,t,y)}if(_.errors&&o&&Array.isArray(d(r.errors,t))){const y=n(d(r.errors,t),c.argA,c.argB);f&&w(r.errors,t,y),Fr(r.errors,t)}if(_.touchedFields&&o&&Array.isArray(d(r.touchedFields,t))){const y=n(d(r.touchedFields,t),c.argA,c.argB);f&&w(r.touchedFields,t,y)}_.dirtyFields&&(r.dirtyFields=xe(l,u)),b.state.next({isDirty:v(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else w(u,t,i)},H=(t,i)=>{w(r.errors,t,i),b.state.next({errors:r.errors})},D=(t,i,n,c)=>{const f=d(a,t);if(f){const o=d(u,t,k(n)?d(l,t):n);k(o)||c&&c.defaultChecked||i?w(u,t,i?o:De(f._f)):S(t,o),h.mount&&I()}},ee=(t,i,n,c,f)=>{let o=!1;const y={name:t},x=d(r.touchedFields,t);if(_.isDirty){const E=r.isDirty;r.isDirty=y.isDirty=v(),o=E!==y.isDirty}if(_.dirtyFields&&(!n||c)){const E=d(r.dirtyFields,t);Y(d(l,t),i)?C(r.dirtyFields,t):w(r.dirtyFields,t,!0),y.dirtyFields=r.dirtyFields,o=o||E!==d(r.dirtyFields,t)}return n&&!x&&(w(r.touchedFields,t,n),y.touchedFields=r.touchedFields,o=o||_.touchedFields&&x!==n),o&&f&&b.state.next(y),o?y:{}},le=(t,i,n,c)=>{const f=d(r.errors,t),o=_.isValid&&Z(i)&&r.isValid!==i;if(e.delayError&&n?(F=ge(()=>H(t,n)),F(e.delayError)):(clearTimeout(T),F=null,n?w(r.errors,t,n):C(r.errors,t)),(n?!Y(f,n):f)||!R(c)||o){const y={...c,...o&&Z(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...y},b.state.next(y)}M[t]--,_.isValidating&&!Object.values(M).some(y=>y)&&(b.state.next({isValidating:!1}),M={})},j=async t=>s.resolver?await s.resolver({...u},s.context,Ar(t||g.mount,a,s.criteriaMode,s.shouldUseNativeValidation)):{},G=async t=>{const{errors:i}=await j();if(t)for(const n of t){const c=d(i,n);c?w(r.errors,n,c):C(r.errors,n)}else r.errors=i;return i},N=async(t,i,n={valid:!0})=>{for(const c in t){const f=t[c];if(f){const{_f:o,...y}=f;if(o){const x=g.array.has(o.name),E=await Ie(f,d(u,o.name),ne,s.shouldUseNativeValidation,x);if(E[o.name]&&(n.valid=!1,i))break;!i&&(d(E,o.name)?x?hr(r.errors,E,o.name):w(r.errors,o.name,E[o.name]):C(r.errors,o.name))}y&&await N(y,i,n)}}return n.valid},ae=()=>{for(const t of g.unMount){const i=d(a,t);i&&(i._f.refs?i._f.refs.every(n=>!Fe(n)):!Fe(i._f.ref))&&ve(t)}g.unMount=new Set},v=(t,i)=>(t&&i&&w(u,t,i),!Y(oe(),l)),A=(t,i,n)=>{const c={...h.mount?u:k(i)?l:p(t)?{[t]:i}:i};return fr(t,g,c,n)},m=t=>ie(d(h.mount?u:l,t,e.shouldUnregister?d(l,t,[]):[])),S=(t,i,n={})=>{const c=d(a,t);let f=i;if(c){const o=c._f;o&&(!o.disabled&&w(u,t,Qe(i,o)),f=me&&Ve(o.ref)&&O(i)?"":i,ze(o.ref)?[...o.ref.options].forEach(y=>y.selected=f.includes(y.value)):o.refs?se(o.ref)?o.refs.length>1?o.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(f)?!!f.find(x=>x===y.value):f===y.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(y=>y.checked=y.value===f):Ee(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||b.watch.next({name:t})))}(n.shouldDirty||n.shouldTouch)&&ee(t,f,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&J(t)},P=(t,i,n)=>{for(const c in i){const f=i[c],o=`${t}.${c}`,y=d(a,o);(g.array.has(t)||!ye(f)||y&&!y._f)&&!X(f)?P(o,f,n):S(o,f,n)}},L=(t,i,n={})=>{const c=d(a,t),f=g.array.has(t),o=z(i);w(u,t,o),f?(b.array.next({name:t,values:u}),(_.isDirty||_.dirtyFields)&&n.shouldDirty&&(r.dirtyFields=xe(l,u),b.state.next({name:t,dirtyFields:r.dirtyFields,isDirty:v(t,o)}))):c&&!c._f&&!O(o)?P(t,o,n):S(t,o,n),Ue(t,g)&&b.state.next({}),b.watch.next({name:t})},re=async t=>{const i=t.target;let n=i.name;const c=d(a,n);if(c){let f,o;const y=i.type?De(c._f):nr(t),x=t.type===Me.BLUR||t.type===Me.FOCUS_OUT,E=!_r(c._f)&&!s.resolver&&!d(r.errors,n)&&!c._f.deps||wr(x,d(r.touchedFields,n),r.isSubmitted,U,K),ue=Ue(n,g,x);w(u,n,y),x?(c._f.onBlur&&c._f.onBlur(t),F&&F(0)):c._f.onChange&&c._f.onChange(t);const Ae=ee(n,y,x,!1),sr=!R(Ae)||ue;if(!x&&b.watch.next({name:n,type:t.type}),E)return _.isValid&&I(),sr&&b.state.next({name:n,...ue?{}:Ae});if(!x&&ue&&b.state.next({}),M[n]=M[n]?M[n]+1:1,b.state.next({isValidating:!0}),s.resolver){const{errors:Le}=await j([n]),ir=He(r.errors,a,n),Re=He(Le,a,ir.name||n);f=Re.error,n=Re.name,o=R(Le)}else f=(await Ie(c,d(u,n),ne,s.shouldUseNativeValidation))[n],I();c._f.deps&&J(c._f.deps),le(n,o,f,Ae)}},J=async(t,i={})=>{let n,c;const f=_e(t);if(b.state.next({isValidating:!0}),s.resolver){const o=await G(k(t)?t:f);n=R(o),c=t?!f.some(y=>d(o,y)):n}else t?(c=(await Promise.all(f.map(async o=>{const y=d(a,o);return await N(y&&y._f?{[o]:y}:y)}))).every(Boolean),!(!c&&!r.isValid)&&I()):c=n=await N(a);return b.state.next({...!p(t)||_.isValid&&n!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:n}:{},errors:r.errors,isValidating:!1}),i.shouldFocus&&!c&&ke(a,o=>o&&d(r.errors,o),t?f:g.mount),c},oe=t=>{const i={...l,...h.mount?u:{}};return k(t)?i:p(t)?d(i,t):t.map(n=>d(i,n))},Oe=(t,i)=>({invalid:!!d((i||r).errors,t),isDirty:!!d((i||r).dirtyFields,t),isTouched:!!d((i||r).touchedFields,t),error:d((i||r).errors,t)}),Xe=t=>{t?_e(t).forEach(i=>C(r.errors,i)):r.errors={},b.state.next({errors:r.errors})},Ye=(t,i,n)=>{const c=(d(a,t,{_f:{}})._f||{}).ref;w(r.errors,t,{...i,ref:c}),b.state.next({name:t,errors:r.errors,isValid:!1}),n&&n.shouldFocus&&c&&c.focus&&c.focus()},Ze=(t,i)=>fe(t)?b.watch.subscribe({next:n=>t(A(void 0,i),n)}):A(t,i,!0),ve=(t,i={})=>{for(const n of t?_e(t):g.mount)g.mount.delete(n),g.array.delete(n),d(a,n)&&(i.keepValue||(C(a,n),C(u,n)),!i.keepError&&C(r.errors,n),!i.keepDirty&&C(r.dirtyFields,n),!i.keepTouched&&C(r.touchedFields,n),!s.shouldUnregister&&!i.keepDefaultValue&&C(l,n));b.watch.next({}),b.state.next({...r,...i.keepDirty?{isDirty:v()}:{}}),!i.keepIsValid&&I()},be=(t,i={})=>{let n=d(a,t);const c=Z(i.disabled);return w(a,t,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:t}},name:t,mount:!0,...i}}),g.mount.add(t),n?c&&w(u,t,i.disabled?void 0:d(u,t,De(n._f))):D(t,!0,i.value),{...c?{disabled:i.disabled}:{},...s.shouldUseNativeValidation?{required:!!i.required,min:te(i.min),max:te(i.max),minLength:te(i.minLength),maxLength:te(i.maxLength),pattern:te(i.pattern)}:{},name:t,onChange:re,onBlur:re,ref:f=>{if(f){be(t,i),n=d(a,t);const o=k(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,y=br(o),x=n._f.refs||[];if(y?x.find(E=>E===o):o===n._f.ref)return;w(a,t,{_f:{...n._f,...y?{refs:[...x.filter(Fe),o,...Array.isArray(d(l,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),D(t,!1,void 0,o)}else n=d(a,t,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(ar(g.array,t)&&h.action)&&g.unMount.add(t)}}},Te=()=>s.shouldFocusError&&ke(a,t=>t&&d(r.errors,t),g.mount),er=(t,i)=>async n=>{n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let c=!0,f=z(u);b.state.next({isSubmitting:!0});try{if(s.resolver){const{errors:o,values:y}=await j();r.errors=o,f=y}else await N(a);R(r.errors)?(b.state.next({errors:{},isSubmitting:!0}),await t(f,n)):(i&&await i({...r.errors},n),Te())}catch(o){throw c=!1,o}finally{r.isSubmitted=!0,b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:R(r.errors)&&c,submitCount:r.submitCount+1,errors:r.errors})}},rr=(t,i={})=>{d(a,t)&&(k(i.defaultValue)?L(t,d(l,t)):(L(t,i.defaultValue),w(l,t,i.defaultValue)),i.keepTouched||C(r.touchedFields,t),i.keepDirty||(C(r.dirtyFields,t),r.isDirty=i.defaultValue?v(t,d(l,t)):v()),i.keepError||(C(r.errors,t),_.isValid&&I()),b.state.next({...r}))},tr=(t,i={})=>{const n=t||l,c=z(n),f=t&&!R(t)?c:l;if(i.keepDefaultValues||(l=n),!i.keepValues){if(i.keepDirtyValues)for(const o of g.mount)d(r.dirtyFields,o)?w(f,o,d(u,o)):L(o,d(f,o));else{if(me&&k(t))for(const o of g.mount){const y=d(a,o);if(y&&y._f){const x=Array.isArray(y._f.refs)?y._f.refs[0]:y._f.ref;if(Ve(x)){const E=x.closest("form");if(E){E.reset();break}}}}a={}}u=e.shouldUnregister?i.keepDefaultValues?z(l):{}:c,b.array.next({values:f}),b.watch.next({values:f})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!_.isValid||!!i.keepIsValid,h.watch=!!e.shouldUnregister,b.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:i.keepDirty||i.keepDirtyValues?r.isDirty:!!(i.keepDefaultValues&&!Y(t,l)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:i.keepDirty||i.keepDirtyValues?r.dirtyFields:i.keepDefaultValues&&t?xe(l,t):{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})};return{control:{register:be,unregister:ve,getFieldState:Oe,_executeSchema:j,_focusError:Te,_getWatch:A,_getDirty:v,_updateValid:I,_removeUnmounted:ae,_updateFieldArray:q,_getFieldArray:m,_subjects:b,_proxyFormState:_,get _fields(){return a},get _formValues(){return u},get _stateFlags(){return h},set _stateFlags(t){h=t},get _defaultValues(){return l},get _names(){return g},set _names(t){g=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:J,register:be,handleSubmit:er,watch:Ze,setValue:L,getValues:oe,reset:(t,i)=>tr(fe(t)?t(u):t,i),resetField:rr,clearErrors:Xe,unregister:ve,setError:Ye,setFocus:(t,i={})=>{const n=d(a,t),c=n&&n._f;if(c){const f=c.refs?c.refs[0]:c.ref;f.focus&&(f.focus(),i.shouldSelect&&f.select())}},getFieldState:Oe}}function Sr(e={}){const s=$.useRef(),[r,a]=$.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});s.current||(s.current={...Dr(e),formState:r});const l=s.current.control;return l._options=e,cr({subject:l._subjects.state,callback:$.useCallback(u=>{ur(u,l._proxyFormState,!0)&&(l._formState={...l._formState,...u},a({...l._formState}))},[l])}),$.useEffect(()=>{l._stateFlags.mount||(l._proxyFormState.isValid&&l._updateValid(),l._stateFlags.mount=!0),l._stateFlags.watch&&(l._stateFlags.watch=!1,l._subjects.state.next({})),l._removeUnmounted()}),$.useEffect(()=>{r.submitCount&&l._focusError()},[l,r.submitCount]),s.current.formState=or(r,l),s.current}export{yr as a,d as g,w as s,Sr as u};