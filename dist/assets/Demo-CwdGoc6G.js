import{d as T,c as p,a as n,F as x,b as y,p as i,t as u,f as d,m as C,X as k,z as g,Y as _,l as a,i as h,o}from"./index-DT75n-Bz.js";const E={class:"stack"},F={class:"row"},f=["onClick"],S=T({__name:"Demo",setup(w){const c=[{name:"CounterTab",setup(){const s=a(0),e=a(0);return g(()=>{e.value++}),_(()=>{e.value++}),{count:s,activations:e}},template:`
    <div class="card">
      <div class="row row--between">
        <b>🔢 Счётчик</b>
        <span class="tag ok">alive</span>
      </div>
      <p class="muted" style="margin: 6px 0 0">count = {{ count }} — сохраняется при переключении вкладок.</p>
      <div class="row" style="margin-top: 8px">
        <button class="btn small primary" @click="count++">+1</button>
        <span class="muted mono">activate-событий: {{ activations }}</span>
      </div>
    </div>
  `},{name:"FormTab",setup(){return{text:a("")}},template:`
    <div class="card">
      <b>📝 Черновик</b>
      <p class="muted" style="margin: 6px 0 0">Введите текст и переключите вкладку — он останется здесь.</p>
      <input v-model="text" class="input" style="margin-top: 8px" placeholder="черновик…" />
    </div>
  `},{name:"EphemeralTab",setup(){return{stamp:a(Date.now())}},template:`
    <div class="card">
      <b>⏱ Одноразовая</b>
      <p class="muted" style="margin: 6px 0 0">Этот компонент в exclude: каждое переключение пересоздаёт его.</p>
      <p class="muted mono" style="margin: 6px 0 0">создан: {{ new Date(stamp).toLocaleTimeString() }}</p>
    </div>
  `}],b={CounterTab:"Счётчик",FormTab:"Черновик",EphemeralTab:"Одноразовая"},l=a(0),t=a(!1),v=h(()=>t.value?"CounterTab,FormTab,EphemeralTab":"CounterTab,FormTab");return(s,e)=>(o(),p("div",E,[n("div",F,[(o(),p(x,null,y(c,(r,m)=>n("button",{key:r.name,class:i(["btn",{primary:m===l.value}]),onClick:z=>l.value=m},u(b[r.name]),11,f)),64)),n("button",{class:i(["btn",{primary:t.value}]),onClick:e[0]||(e[0]=r=>t.value=!t.value)}," include: "+u(t.value?"все три":"без EphemeralTab"),3)]),(o(),d(k,{include:v.value},[(o(),d(C(c[l.value])))],1032,["include"])),e[1]||(e[1]=n("p",{class:"muted"}," Счётчик и черновик сохраняются. «Одноразовая» вкладка пересоздаётся при каждом возвращении, пока она вне include — заметьте её метку времени. ",-1))]))}});export{S as default};
