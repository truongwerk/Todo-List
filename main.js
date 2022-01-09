(()=>{"use strict";function e(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function n(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(e){t(1,arguments);var o=n(e);return o.setHours(0,0,0,0),o}var a=864e5;function l(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function r(e,o){t(1,arguments);var a=o||{},r=a.locale,c=r&&r.options&&r.options.weekStartsOn,s=null==c?0:l(c),i=null==a.weekStartsOn?s:l(a.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=n(e),u=d.getDay(),m=(u<i?7:0)+u-i;return d.setDate(d.getDate()-m),d.setHours(0,0,0,0),d}function c(e,n,o){t(2,arguments);var a=r(e,o),l=r(n,o);return a.getTime()===l.getTime()}const s=function(e,t,n){const o=document.getElementById("task"),a=document.querySelectorAll(".menuButton");for(let e=0;e<a.length;e++)a[e].style.color=null,a[e].style.borderColor=null;const l=document.getElementById(t);switch(l.style.color="red",l.style.borderColor="orange",function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(o),t){case"allButton":!function(e){for(let t=0;t<e.length;t++)i(e[t],t)}(e);break;case"todayButton":!function(e){for(let t=0;t<e.length;t++)(new Date).getDate()==new Date(e[t].targetDate).getDate()&&i(e[t],t)}(e);break;case"thisWeekButton":!function(e){for(let t=0;t<e.length;t++)c(new Date,new Date(e[t].targetDate))&&i(e[t],t)}(e);break;default:!function(e,t){for(let n=0;n<e.length;n++)e[n].project==t&&i(e[n],n)}(e,n[t[7]])}};function i(n,l){let r=document.createElement("div");r.className="taskButton",r.id="task"+l,task.appendChild(r);let c=document.createElement("div");c.className="mainContent",c.id="task"+l+"Main",r.appendChild(c);let s=document.createElement("img");s.className="completeIcon",s.id="task"+l+"Complete",1==n.completed?(s.src="images/checkIcon.svg",s.alt="checkIcon",r.style.borderColor="green"):(s.src="images/uncheckIcon.svg",s.alt="uncheckIcon"),c.appendChild(s);let i=document.createElement("p");i.className="taskProject",i.id="task"+l+"Project",i.innerText=n.project,c.append(i);let d=document.createElement("p");d.className="taskContent",d.id="task"+l+"Content",d.innerHTML=n.task,c.appendChild(d);let u=document.createElement("p");u.className="taskDueDate",u.id="task"+l+"DueDate";let m=function(n,l){t(2,arguments);var r=o(n),c=o(l),s=r.getTime()-e(r),i=c.getTime()-e(c);return Math.round((s-i)/a)}(new Date(n.targetDate),new Date);m>1&&0==n.completed&&(u.innerText=m+"days"),0==m&&0==n.completed&&(u.innerText="Today",r.style.borderColor="#FF8C00"),1==m&&0==n.completed&&(u.innerText="Tomorrow",r.style.borderColor="\t#FFFF66"),m<0&&0==n.completed&&(u.innerText=m+"days",r.style.borderColor="red"),c.appendChild(u);let g=document.createElement("img");g.className="deleteIcon",g.id="task"+l+"Delete",g.src="images/deleteIcon.svg",g.alt="deleteIcon",c.appendChild(g);let p=document.createElement("div");p.className="subContent",p.id="task"+l+"Sub",r.appendChild(p);let f=document.createElement("div");f.className="targetEdit",p.appendChild(f);let y=document.createElement("p");if(y.id="task"+l+"TargetDate",""!=n.targetDate){let e=n.targetDate;y.innerText="Target Date: "+e[8]+e[9]+"-"+e[5]+e[6]+"-"+e[0]+e[1]+e[2]+e[3]}else y.innerText="Target Date: None";f.appendChild(y);let k=document.createElement("img");k.className="editIcon",k.id="task"+l+"Edit",k.src="images/editIcon.svg",k.alt="editIcon",f.appendChild(k);let h=document.createElement("p");h.id="task"+l+"Description",h.innerText="Description: "+n.description,p.appendChild(h)}function d(e,t,n,o){this.task=e,this.targetDate=t,this.description=n,this.project=o,this.completed=!1}let u=[],m="allButton",g=["Coding"];window.localStorage.getItem("myTodo")&&(u=JSON.parse(window.localStorage.getItem("myTodo"))),s(u,m,g),f();const p=document.querySelectorAll(".menuButton");for(let e=0;e<p.length;e++)p[e].addEventListener("click",(function(){for(let e=0;e<p.length;e++);m=p[e].id,s(u,m,g),f()}));function f(){document.querySelectorAll(".taskButton").forEach((e=>{!function(e){const t=document.getElementById("task"+e+"Content"),n=document.getElementById("task"+e+"DueDate"),o=document.getElementById("task"+e+"Sub");function a(){"subContent"==o.className?o.className="subContentShow":o.className="subContent"}t.addEventListener("click",a),n.addEventListener("click",a)}(e.id[4])}))}!function(){const e=document.getElementById("taskForm");document.getElementById("addTaskButton").addEventListener("click",(function(){e.style.display="flex"})),window.addEventListener("click",(function(t){t.target==e&&(e.style.display="none")}))}(),document.getElementById("newTaskForm").addEventListener("submit",(function(){u.push(function(){document.getElementById("newTaskForm");const e=new d(document.getElementById("inputTask").value,document.getElementById("inputDate").value,document.getElementById("inputDescription").value,document.getElementById("addToProject").value);return taskForm.style.display="none",document.getElementById("inputTask").value=null,document.getElementById("inputDate").value=null,document.getElementById("inputDescription").value=null,e}()),s(u,m,g),console.table(u),f(),window.localStorage.setItem("myTodo",JSON.stringify(u)),console.log(localStorage)}))})();