import{r as i}from"./react-53a35672.js";function m(d){let e;const n=new Set,c=(r,s)=>{const t=typeof r=="function"?r(e):r;if(t!==e){const u=e;e=s?t:Object.assign({},e,t),n.forEach(f=>f(e,u))}},o=()=>e,l=(r,s=o,t=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let u=s(e);function f(){const R=s(e);if(!t(u,R)){const g=u;r(u=R,g)}}return n.add(f),()=>n.delete(f)},S={setState:c,getState:o,subscribe:(r,s,t)=>s||t?l(r,s,t):(n.add(r),()=>n.delete(r)),destroy:()=>n.clear()};return e=d(c,o,S),S}const x=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),h=x?i.useEffect:i.useLayoutEffect;function j(d){const e=typeof d=="function"?m(d):d,n=(c=e.getState,o=Object.is)=>{const[,l]=i.useReducer(p=>p+1,0),a=e.getState(),b=i.useRef(a),S=i.useRef(c),r=i.useRef(o),s=i.useRef(!1),t=i.useRef();t.current===void 0&&(t.current=c(a));let u,f=!1;(b.current!==a||S.current!==c||r.current!==o||s.current)&&(u=c(a),f=!o(t.current,u)),h(()=>{f&&(t.current=u),b.current=a,S.current=c,r.current=o,s.current=!1});const R=i.useRef(a);h(()=>{const p=()=>{try{const w=e.getState(),v=S.current(w);r.current(t.current,v)||(b.current=w,t.current=v,l())}catch{s.current=!0,l()}},E=e.subscribe(p);return e.getState()!==R.current&&p(),E},[]);const g=f?u:t.current;return i.useDebugValue(g),g};return Object.assign(n,e),n[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const c=[n,e];return{next(){const o=c.length<=0;return{value:c.shift(),done:o}}}},n}export{j as c};
