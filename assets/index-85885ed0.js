import{d as i,r as v,a as p,o as m,c as u,e as C,u as n}from"./index-e6eb3734.js";const x=i({__name:"index",setup(_){let a=v([{title:"购物",start:"2023-3-13 08:00",end:"2023-3-13 12:00",editable:!0},{title:"敲代码",start:"2023-3-14 10:00",end:"2023-3-14 16:00"}]),o=e=>{console.log("dateClick",e),a.value.push({start:e.dateStr+" 12:00",end:e.dateStr+" 18:00",title:"学习",editable:!0})},r=e=>{console.log("eventClick",e)},c=e=>{console.log("eventContent",e);let l=document.createElement("div"),t=e.timeText.split("-"),s=t[0].replace("上午","").replace("下午","").replace("时",""),d=t[1].replace("上午","").replace("下午","").replace("时","");return l.innerHTML=`
                    <img src="src/assets/vue.svg" style="width: 30px; height: 30px;">
                    <div>开始时间: ${s}</div>
                    <div>结束时间: ${d}</div>
                    <div>标题: ${e.event._def.title}</div>
                `,{domNodes:[l]}};return(e,l)=>{const t=p("m-calendar");return m(),u("div",null,[C(t,{events:n(a),displayEventEnd:"",eventContent:n(c),onDateClick:n(o),onEventClick:n(r)},null,8,["events","eventContent","onDateClick","onEventClick"])])}}});export{x as default};
