import{d as m,c as r,a as n,F as u,b,f as v,m as _,t as l,l as s,i as k,z as f,o as i,p as g}from"./index-DT75n-Bz.js";const y={class:"stack"},T={class:"row"},h=["onClick"],x={class:"muted"},S={class:"muted mono"},$=m({__name:"Demo",setup(C){const c=[{id:"stats",label:"Статистика",component:{name:"StaticTab",setup(){const e=s(0);return f(()=>{e.value++}),{views:e}},template:`
    <div class="card">
      <b>📊 Статистика</b>
      <p class="muted" style="margin: 6px 0 0">Локальное состояние: просмотров = {{ views }}.</p>
      <p class="muted" style="margin: 6px 0 0">При переключении вкладок компонент <b>уничтожается</b> — счётчик сбрасывается.</p>
    </div>
  `}},{id:"profile",label:"Профиль",component:{name:"ProfileTab",setup(){return{edits:s(0)}},template:`
    <div class="card">
      <b>👤 Профиль</b>
      <p class="muted" style="margin: 6px 0 0">Это другой компонент со своим состоянием (edits = {{ edits }}).</p>
    </div>
  `}},{id:"settings",label:"Настройки",component:{name:"SettingsTab",setup(){return{dark:s(!0)}},template:`
    <div class="card">
      <b>⚙️ Настройки</b>
      <p class="muted" style="margin: 6px 0 0">Своё состояние: dark = {{ dark }} (кликните переключатель).</p>
      <label style="margin-top: 8px; display: block"><input type="checkbox" v-model="dark" /> тёмная тема</label>
    </div>
  `}}],t=s(c[0]),o=s(0);function d(e){e.id!==t.value.id&&(t.value=e,o.value++)}const p=k(()=>o.value===0?"Состояние вкладок пока не сбрасывалось.":`Вкладок сменено: ${o.value} — состояние каждой вкладки при этом терялось (кроме KeepAlive, о нём дальше).`);return(e,P)=>(i(),r("div",y,[n("div",T,[(i(),r(u,null,b(c,a=>n("button",{key:a.id,class:g(["btn",{primary:a.id===t.value.id}]),onClick:z=>d(a)},l(a.label),11,h)),64))]),(i(),v(_(t.value.component))),n("p",x,l(p.value),1),n("p",S,"Сейчас отрендерен: "+l(t.value.component.name),1)]))}});export{$ as default};
