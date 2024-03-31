(()=>{"use strict";var e={477:e=>{e.exports=wangEditor}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,r),c.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=axios;var t=r.n(e);t().defaults.baseURL="http://geek.itheima.net",t().interceptors.request.use((function(e){const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e}),(function(e){return Promise.reject(e)})),t().interceptors.response.use((function(e){return e.data}),(function(e){return console.dir(e),401===e?.response?.status&&(alert("身份验证失败，请重新登录"),localStorage.clear(),location.href="../login/index.html"),Promise.reject(e)}));const o=t();localStorage.getItem("token")||(location.href="../login/index.html"),o({url:"/v1_0/user/profile"}).then((e=>{const t=e.data.name;document.querySelector(".nick-name").innerHTML=t})),document.querySelector(".quit").addEventListener("click",(e=>{localStorage.clear(),location.href="../login/index.html"}));const n=function(e,t){const r=document.querySelector(".alert");r.classList.add(e?"alert-success":"alert-danger"),r.innerHTML=t,r.classList.add("show"),setTimeout((()=>{r.classList.remove(e?"alert-success":"alert-danger"),r.innerHTML="",r.classList.remove("show")}),2e3)},c=serialize;var a=r.n(c);const s=r(477),{createEditor:d,createToolbar:l}=s,i={placeholder:"发布文章内容...",onChange(e){const t=e.getHtml();document.querySelector(".publish-content").value=t}},u=d({selector:"#editor-container",html:"<p><br></p>",config:i,mode:"default"}),m=(l({editor:u,selector:"#toolbar-container",config:{},mode:"default"}),u);!async function(){const e='<option value="" selected="">请选择文章频道</option>'+(await o({url:"/v1_0/channels"})).data.channels.map((e=>`<option value="${e.id}">${e.name}</option>`)).join("");document.querySelector(".form-select").innerHTML=e}(),document.querySelector(".img-file").addEventListener("change",(async e=>{const t=e.target.files[0],r=new FormData;r.append("image",t);const n=(await o({url:"/v1_0/upload",method:"POST",data:r})).data.url;document.querySelector(".rounded").src=n,document.querySelector(".rounded").classList.add("show"),document.querySelector(".place").classList.add("hide")})),document.querySelector(".rounded").addEventListener("click",(()=>{document.querySelector(".img-file").click()})),document.querySelector(".send").addEventListener("click",(async e=>{if("发布"!==e.target.innerHTML)return;const t=document.querySelector(".art-form"),r=a()(t,{hash:!0,empty:!0});delete r.id,console.log(r),r.cover={type:1,images:[document.querySelector(".rounded").src]};try{await o({url:"/v1_0/mp/articles",method:"POST",data:r}),n(!0,"发布成功"),t.reset(),document.querySelector(".rounded").src="",document.querySelector(".rounded").classList.remove("show"),document.querySelector(".place").classList.remove("hide"),m.setHtml(""),setTimeout((()=>{location.href="../content/index.html"}),1500)}catch(e){n(!1,e.response.data.message)}})),function(){const e=location.search;new URLSearchParams(e).forEach((async(e,t)=>{if("id"===t){document.querySelector(".title span").innerHTML="修改文章",document.querySelector(".send").innerHTML="修改";const t=await o({url:`/v1_0/mp/articles/${e}`});console.log(t);const r={channel_id:t.data.channel_id,title:t.data.title,rounded:t.data.cover.images[0],content:t.data.content,id:t.data.id};Object.keys(r).forEach((e=>{"rounded"===e?r[e]&&(document.querySelector(".rounded").src=r[e],document.querySelector(".rounded").classList.add("show"),document.querySelector(".place").classList.add("hide")):"content"===e?m.setHtml(r[e]):document.querySelector(`[name=${e}]`).value=r[e]}))}}))}(),document.querySelector(".send").addEventListener("click",(async e=>{if("修改"!==e.target.innerHTML)return;const t=document.querySelector(".art-form"),r=a()(t,{hash:!0,empty:!0});try{const e=await o({url:`/v1_0/mp/articles/${r.id}`,method:"PUT",data:{...r,cover:{type:document.querySelector(".rounded").src?1:0,images:[document.querySelector(".rounded").src]}}});console.log(e),n(!0,"修改文章成功")}catch(e){n(!1,e.response.data.message)}}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0IsVUFBb0IsT0FFakMsTUFBTXdDLEVBQU8xQyxTQUFTQyxjQUFjLGFBQzlCZCxFQUFPLElBQVV1RCxFQUFNLENBQUVDLE1BQU0sRUFBTUMsT0FBTyxJQUVsRCxJQUNFLE1BQU1ZLFFBQVksRUFBTSxDQUN0QjdELElBQUsscUJBQXFCUixFQUFLMEMsS0FDL0JVLE9BQVEsTUFDUnBELEtBQU0sSUFDREEsRUFDSDJELE1BQU8sQ0FDTEMsS0FBTS9DLFNBQVNDLGNBQWMsWUFBWXVDLElBQU0sRUFBSSxFQUNuRFEsT0FBUSxDQUFDaEQsU0FBU0MsY0FBYyxZQUFZdUMsU0FJbERwRCxRQUFReUQsSUFBSVcsR0FDWixHQUFRLEVBQU0sU0FDaEIsQ0FBRSxNQUFPekUsR0FDUCxHQUFRLEVBQU9BLEVBQU1HLFNBQVNDLEtBQUtnRSxRQUNyQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja18wMi9leHRlcm5hbCB2YXIgXCJ3YW5nRWRpdG9yXCIiLCJ3ZWJwYWNrOi8vd2VicGFja18wMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrXzAyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2tfMDIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2tfMDIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrXzAyL2V4dGVybmFsIHZhciBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vd2VicGFja18wMi8uL3NyYy91dGlscy9yZXF1ZXN0LmpzIiwid2VicGFjazovL3dlYnBhY2tfMDIvLi9zcmMvdXRpbHMvYXV0aC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrXzAyLy4vc3JjL3V0aWxzL2FsZXJ0LmpzIiwid2VicGFjazovL3dlYnBhY2tfMDIvZXh0ZXJuYWwgdmFyIFwic2VyaWFsaXplXCIiLCJ3ZWJwYWNrOi8vd2VicGFja18wMi8uL3NyYy91dGlscy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFja18wMi8uL3NyYy9wdWJsaXNoL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gd2FuZ0VkaXRvcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IGF4aW9zOyIsIi8vIOW8leWFpWF4aW9zXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbi8vIGF4aW9zIOWFrOWFsemFjee9rlxyXG4vLyDln7rlnLDlnYBcclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vZ2Vlay5pdGhlaW1hLm5ldCdcclxuXHJcbi8vIOa3u+WKoOivt+axguaLpuaIquWZqFxyXG5heGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gIC8vIOWcqOWPkemAgeivt+axguS5i+WJjeWBmuS6m+S7gOS5iFxyXG4gIC8vIOe7n+S4gOaQuuW4piB0b2tlbiDku6TniYzlrZfnrKbkuLLlnKjor7fmsYLlpLTkuIpcclxuICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXHJcbiAgdG9rZW4gJiYgKGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7dG9rZW59YClcclxuICByZXR1cm4gY29uZmlnO1xyXG59LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAvLyDlr7nor7fmsYLplJnor6/lgZrkupvku4DkuYhcclxuICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG59KTtcclxuXHJcbi8vIOa3u+WKoOWTjeW6lOaLpuaIquWZqFxyXG5heGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gIC8vIDJ4eCDojIPlm7TlhoXnmoTnirbmgIHnoIHpg73kvJrop6blj5Hor6Xlh73mlbDjgIJcclxuICAvLyDlr7nlk43lupTmlbDmja7lgZrngrnku4DkuYjvvIzkvovlpoLvvJrnm7TmjqXov5Tlm57mnI3liqHlmajnmoTlk43lupTnu5Pmnpzlr7nosaFcclxuICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5kYXRhXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgLy8g6LaF5Ye6IDJ4eCDojIPlm7TnmoTnirbmgIHnoIHpg73kvJrop6blj5Hor6Xlh73mlbDjgIJcclxuICAvLyDlr7nlk43lupTplJnor6/lgZrngrnku4DkuYjvvIzkvovlpoLvvJrnu5/kuIDlr7kgNDAxIOi6q+S7vemqjOivgeWksei0peaDheWGteWBmuWHuuWkhOeQhlxyXG4gIGNvbnNvbGUuZGlyKGVycm9yKVxyXG4gIGlmIChlcnJvcj8ucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICBhbGVydCgn6Lqr5Lu96aqM6K+B5aSx6LSl77yM6K+36YeN5paw55m75b2VJylcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXHJcbiAgICBsb2NhdGlvbi5ocmVmID0gJy4uL2xvZ2luL2luZGV4Lmh0bWwnXHJcbiAgfVxyXG4gIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBheGlvcyIsIi8vIOadg+mZkOaPkuS7tu+8iOW8leWFpeWIsOS6humZpOeZu+W9lemhtemdou+8jOS7peWklueahOWFtuS7luaJgOaciemhtemdou+8iVxyXG5pbXBvcnQgJ0AvdXRpbHMvYXV0aC5qcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ0AvdXRpbHMvcmVxdWVzdC5qcydcclxuLyoqXHJcbiAqIOebruaghzHvvJrorr/pl67mnYPpmZDmjqfliLZcclxuICogMS4xIOWIpOaWreaXoCB0b2tlbiDku6TniYzlrZfnrKbkuLLvvIzliJnlvLrliLbot7PovazliLDnmbvlvZXpobVcclxuICogMS4yIOeZu+W9leaIkOWKn+WQju+8jOS/neWtmCB0b2tlbiDku6TniYzlrZfnrKbkuLLliLDmnKzlnLDvvIzlubbot7PovazliLDlhoXlrrnliJfooajpobXpnaJcclxuICovXHJcbi8vIDEuMSDliKTmlq3ml6AgdG9rZW4g5Luk54mM5a2X56ym5Liy77yM5YiZ5by65Yi26Lez6L2s5Yiw55m75b2V6aG1XHJcbmNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcclxuaWYgKCF0b2tlbikge1xyXG4gIGxvY2F0aW9uLmhyZWYgPSAnLi4vbG9naW4vaW5kZXguaHRtbCdcclxufVxyXG5cclxuLyoqXHJcbiAqIOebruaghzLvvJrorr7nva7kuKrkurrkv6Hmga9cclxuICogMi4xIOWcqCB1dGlscy9yZXF1ZXN0LmpzIOiuvue9ruivt+axguaLpuaIquWZqO+8jOe7n+S4gOaQuuW4piB0b2tlblxyXG4gKiAyLjIg6K+35rGC5Liq5Lq65L+h5oGv5bm26K6+572u5Yiw6aG16Z2iXHJcbiAqL1xyXG4vLyAyLjIg6K+35rGC5Liq5Lq65L+h5oGv5bm26K6+572u5Yiw6aG16Z2iXHJcbmF4aW9zKHtcclxuICB1cmw6ICcvdjFfMC91c2VyL3Byb2ZpbGUnXHJcbn0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICBjb25zdCB1c2VybmFtZSA9IHJlc3VsdC5kYXRhLm5hbWVcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmljay1uYW1lJykuaW5uZXJIVE1MID0gdXNlcm5hbWVcclxufSlcclxuXHJcbi8qKlxyXG4gKiDnm67moIcz77ya6YCA5Ye655m75b2VXHJcbiAqICAzLjEg57uR5a6a54K55Ye75LqL5Lu2XHJcbiAqICAzLjIg5riF56m65pys5Zyw57yT5a2Y77yM6Lez6L2s5Yiw55m75b2V6aG16Z2iXHJcbiAqL1xyXG4vLyAzLjEg57uR5a6a54K55Ye75LqL5Lu2XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAvLyAzLjIg5riF56m65pys5Zyw57yT5a2Y77yM6Lez6L2s5Yiw55m75b2V6aG16Z2iXHJcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICBsb2NhdGlvbi5ocmVmID0gJy4uL2xvZ2luL2luZGV4Lmh0bWwnXHJcbn0pXHJcbiIsIi8vIOW8ueeql+aPkuS7tlxyXG4vLyDpnIDopoHlhYjlh4blpIcgYWxlcnQg5qC35byP55u45YWz55qEIERPTVxyXG4vKipcclxuICogQlMg55qEIEFsZXJ0IOitpuWRiuahhuWHveaVsO+8jDLnp5LlkI7oh6rliqjmtojlpLFcclxuICogQHBhcmFtIHsqfSBpc1N1Y2Nlc3Mg5oiQ5YqfIHRydWXvvIzlpLHotKUgZmFsc2VcclxuICogQHBhcmFtIHsqfSBtc2cg5o+Q56S65raI5oGvXHJcbiAqL1xyXG5mdW5jdGlvbiBteUFsZXJ0KGlzU3VjY2VzcywgbXNnKSB7XHJcbiAgY29uc3QgbXlBbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpXHJcbiAgbXlBbGVydC5jbGFzc0xpc3QuYWRkKGlzU3VjY2VzcyA/ICdhbGVydC1zdWNjZXNzJyA6ICdhbGVydC1kYW5nZXInKVxyXG4gIG15QWxlcnQuaW5uZXJIVE1MID0gbXNnXHJcbiAgbXlBbGVydC5jbGFzc0xpc3QuYWRkKCdzaG93JylcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBteUFsZXJ0LmNsYXNzTGlzdC5yZW1vdmUoaXNTdWNjZXNzID8gJ2FsZXJ0LXN1Y2Nlc3MnIDogJ2FsZXJ0LWRhbmdlcicpXHJcbiAgICBteUFsZXJ0LmlubmVySFRNTCA9ICcnXHJcbiAgICBteUFsZXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxyXG4gIH0sIDIwMDApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbXlBbGVydCIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSBzZXJpYWxpemU7IiwiY29uc3Qgd2FuZ0VkaXRvciA9IHJlcXVpcmUoJ0B3YW5nZWRpdG9yL2VkaXRvcicpXHJcbi8vIOWvjOaWh+acrOe8lui+keWZqFxyXG4vLyDliJvlu7rnvJbovpHlmajlh73mlbDvvIzliJvlu7rlt6XlhbfmoI/lh73mlbBcclxuY29uc3QgeyBjcmVhdGVFZGl0b3IsIGNyZWF0ZVRvb2xiYXIgfSA9IHdhbmdFZGl0b3JcclxuXHJcbi8vIOe8lui+keWZqOmFjee9ruWvueixoVxyXG5jb25zdCBlZGl0b3JDb25maWcgPSB7XHJcbiAgLy8g5Y2g5L2N5o+Q56S65paH5a2XXHJcbiAgcGxhY2Vob2xkZXI6ICflj5HluIPmlofnq6DlhoXlrrkuLi4nLFxyXG4gIC8vIOe8lui+keWZqOWPmOWMluaXtuWbnuiwg+WHveaVsFxyXG4gIG9uQ2hhbmdlKGVkaXRvcikge1xyXG4gICAgLy8g6I635Y+W5a+M5paH5pys5YaF5a65XHJcbiAgICBjb25zdCBodG1sID0gZWRpdG9yLmdldEh0bWwoKVxyXG4gICAgLy8g5Lmf5Y+v5Lul5ZCM5q2l5YiwIDx0ZXh0YXJlYT5cclxuICAgIC8vIOS4uuS6huWQjue7reW/q+mAn+aUtumbhuaVtOS4quihqOWNleWGheWuueWBmumTuuWeq1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnB1Ymxpc2gtY29udGVudCcpLnZhbHVlID0gaHRtbFxyXG4gIH1cclxufVxyXG5cclxuLy8g5Yib5bu657yW6L6R5ZmoXHJcbmNvbnN0IGVkaXRvciA9IGNyZWF0ZUVkaXRvcih7XHJcbiAgLy8g5Yib5bu65L2N572uXHJcbiAgc2VsZWN0b3I6ICcjZWRpdG9yLWNvbnRhaW5lcicsXHJcbiAgLy8g6buY6K6k5YaF5a65XHJcbiAgaHRtbDogJzxwPjxicj48L3A+JyxcclxuICAvLyDphY3nva7poblcclxuICBjb25maWc6IGVkaXRvckNvbmZpZyxcclxuICAvLyDphY3nva7pm4bmiJDmqKHlvI/vvIhkZWZhdWx0IOWFqOmDqO+8ie+8iHNpbXBsZSDnroDmtIHvvIlcclxuICBtb2RlOiAnZGVmYXVsdCcsIC8vIG9yICdzaW1wbGUnXHJcbn0pXHJcblxyXG4vLyDlt6XlhbfmoI/phY3nva7lr7nosaFcclxuY29uc3QgdG9vbGJhckNvbmZpZyA9IHt9XHJcblxyXG4vLyDliJvlu7rlt6XlhbfmoI9cclxuY29uc3QgdG9vbGJhciA9IGNyZWF0ZVRvb2xiYXIoe1xyXG4gIC8vIOS4uuaMh+Wumue8lui+keWZqOWIm+W7uuW3peWFt+agj1xyXG4gIGVkaXRvcixcclxuICAvLyDlt6XlhbfmoI/liJvlu7rnmoTkvY3nva5cclxuICBzZWxlY3RvcjogJyN0b29sYmFyLWNvbnRhaW5lcicsXHJcbiAgLy8g5bel5YW35qCP6YWN572u5a+56LGhXHJcbiAgY29uZmlnOiB0b29sYmFyQ29uZmlnLFxyXG4gIC8vIOmFjee9rumbhuaIkOaooeW8j1xyXG4gIG1vZGU6ICdkZWZhdWx0JywgLy8gb3IgJ3NpbXBsZSdcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgZWRpdG9yXHJcbiIsIi8qKlxyXG4gKiDnm67moIcx77ya6K6+572u6aKR6YGT5LiL5ouJ6I+c5Y2VXHJcbiAqICAxLjEg6I635Y+W6aKR6YGT5YiX6KGo5pWw5o2uXHJcbiAqICAxLjIg5bGV56S65Yiw5LiL5ouJ6I+c5Y2V5LitXHJcbiAqL1xyXG5pbXBvcnQgJy4vaW5kZXguY3NzJ1xyXG5pbXBvcnQgJ0AvdXRpbHMvYXV0aC5qcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ0AvdXRpbHMvcmVxdWVzdC5qcydcclxuaW1wb3J0IG15QWxlcnQgZnJvbSAnLi4vdXRpbHMvYWxlcnQnXHJcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnZm9ybS1zZXJpYWxpemUnXHJcbmltcG9ydCBlZGl0b3IgZnJvbSAnQC91dGlscy9lZGl0b3IuanMnXHJcblxyXG4vLyAxLjEg6I635Y+W6aKR6YGT5YiX6KGo5pWw5o2uXHJcbmFzeW5jIGZ1bmN0aW9uIHNldENoYW5ubGVMaXN0KCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKHtcclxuICAgIHVybDogJy92MV8wL2NoYW5uZWxzJ1xyXG4gIH0pXHJcbiAgLy8gMS4yIOWxleekuuWIsOS4i+aLieiPnOWNleS4rVxyXG4gIGNvbnN0IGh0bWxTdHIgPSBgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPVwiXCI+6K+36YCJ5oup5paH56ug6aKR6YGTPC9vcHRpb24+YCArIHJlcy5kYXRhLmNoYW5uZWxzLm1hcChpdGVtID0+IGA8b3B0aW9uIHZhbHVlPVwiJHtpdGVtLmlkfVwiPiR7aXRlbS5uYW1lfTwvb3B0aW9uPmApLmpvaW4oJycpXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc2VsZWN0JykuaW5uZXJIVE1MID0gaHRtbFN0clxyXG59XHJcbi8vIOe9kemhtei/kOihjOWQju+8jOm7mOiupOiwg+eUqOS4gOasoVxyXG5zZXRDaGFubmxlTGlzdCgpXHJcblxyXG4vKipcclxuICog55uu5qCHMu+8muaWh+eroOWwgemdouiuvue9rlxyXG4gKiAgMi4xIOWHhuWkh+agh+etvue7k+aehOWSjOagt+W8j1xyXG4gKiAgMi4yIOmAieaLqeaWh+S7tuW5tuS/neWtmOWcqCBGb3JtRGF0YVxyXG4gKiAgMi4zIOWNleeLrOS4iuS8oOWbvueJh+W5tuW+l+WIsOWbvueJhyBVUkwg572R5Z2AXHJcbiAqICAyLjQg5Zue5pi+5bm25YiH5o2iIGltZyDmoIfnrb7lsZXnpLrvvIjpmpDol48gKyDlj7fkuIrkvKDmoIfnrb7vvIlcclxuICovXHJcbi8vIDIuMiDpgInmi6nmlofku7blubbkv53lrZjlnKggRm9ybURhdGFcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZy1maWxlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgYXN5bmMgZSA9PiB7XHJcbiAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXHJcbiAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKVxyXG4gIGZkLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKVxyXG4gIC8vIDIuMyDljZXni6zkuIrkvKDlm77niYflubblvpfliLDlm77niYcgVVJMIOe9keWdgFxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKHtcclxuICAgIHVybDogJy92MV8wL3VwbG9hZCcsXHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGRhdGE6IGZkXHJcbiAgfSlcclxuICAvLyAyLjQg5Zue5pi+5bm25YiH5o2iIGltZyDmoIfnrb7lsZXnpLrvvIjpmpDol48gKyDlj7fkuIrkvKDmoIfnrb7vvIlcclxuICBjb25zdCBpbWdVcmwgPSByZXMuZGF0YS51cmxcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm91bmRlZCcpLnNyYyA9IGltZ1VybFxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3VuZGVkJykuY2xhc3NMaXN0LmFkZCgnc2hvdycpXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbn0pXHJcbi8vIOS8mOWMlu+8mueCueWHuyBpbWcg5Y+v5Lul6YeN5paw5YiH5o2i5bCB6Z2iXHJcbi8vIOaAnei3r++8mmltZyDngrnlh7sgPT4g55SoIEpTIOaWueW8j+inpuWPkeaWh+S7tumAieaLqeWFg+e0oCBjbGljayDkuovku7bmlrnms5VcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdW5kZWQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLWZpbGUnKS5jbGljaygpXHJcbn0pXHJcblxyXG4vKipcclxuICog55uu5qCHM++8muWPkeW4g+aWh+eroOS/neWtmFxyXG4gKiAgMy4xIOWfuuS6jiBmb3JtLXNlcmlhbGl6ZSDmj5Lku7bmlLbpm4booajljZXmlbDmja7lr7nosaFcclxuICogIDMuMiDln7rkuo4gYXhpb3Mg5o+Q5Lqk5Yiw5pyN5Yqh5Zmo5L+d5a2YXHJcbiAqICAzLjMg6LCD55SoIEFsZXJ0IOitpuWRiuahhuWPjemmiOe7k+aenOe7meeUqOaIt1xyXG4gKiAgMy40IOmHjee9ruihqOWNleW5tui3s+i9rOWIsOWIl+ihqOmhtVxyXG4gKi9cclxuLy8gMy4xIOWfuuS6jiBmb3JtLXNlcmlhbGl6ZSDmj5Lku7bmlLbpm4booajljZXmlbDmja7lr7nosaFcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbmQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGUgPT4ge1xyXG4gIGlmIChlLnRhcmdldC5pbm5lckhUTUwgIT09ICflj5HluIMnKSByZXR1cm5cclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydC1mb3JtJylcclxuICBjb25zdCBkYXRhID0gc2VyaWFsaXplKGZvcm0sIHsgaGFzaDogdHJ1ZSwgZW1wdHk6IHRydWUgfSlcclxuICAvLyDlj5HluIPmlofnq6DnmoTml7blgJnvvIzkuI3pnIDopoEgaWQg5bGe5oCn77yM5omA5Lul5Y+v5Lul5Yig6Zmk5o6J77yIaWQg5Li65LqG5ZCO57ut5YGa57yW6L6R5L2/55So77yJXHJcbiAgZGVsZXRlIGRhdGEuaWRcclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIC8vIOiHquW3seaUtumbhuWwgemdouWbvueJh+WcsOWdgOW5tuS/neWtmOWIsCBkYXRhIOWvueixoeS4rVxyXG4gIGRhdGEuY292ZXIgPSB7XHJcbiAgICB0eXBlOiAxLCAvLyDlsIHpnaLnsbvlnotcclxuICAgIGltYWdlczogW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3VuZGVkJykuc3JjXSAvLyDlsIHpnaLlm77niYcgVVJMIOe9keWdgFxyXG4gIH1cclxuXHJcbiAgLy8gMy4yIOWfuuS6jiBheGlvcyDmj5DkuqTliLDmnI3liqHlmajkv53lrZhcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICB1cmw6ICcvdjFfMC9tcC9hcnRpY2xlcycsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG4gICAgLy8gMy4zIOiwg+eUqCBBbGVydCDorablkYrmoYblj43ppojnu5Pmnpznu5nnlKjmiLdcclxuICAgIG15QWxlcnQodHJ1ZSwgJ+WPkeW4g+aIkOWKnycpXHJcbiAgICAvLyAzLjQg6YeN572u6KGo5Y2V5bm26Lez6L2s5Yiw5YiX6KGo6aG1XHJcbiAgICBmb3JtLnJlc2V0KClcclxuICAgIC8vIOWwgemdoumcgOimgeaJi+WKqOmHjee9rlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdW5kZWQnKS5zcmMgPSAnJ1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdW5kZWQnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgLy8g5a+M5paH5pys57yW6L6R5Zmo6YeN572uXHJcbiAgICBlZGl0b3Iuc2V0SHRtbCgnJylcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbG9jYXRpb24uaHJlZiA9ICcuLi9jb250ZW50L2luZGV4Lmh0bWwnXHJcbiAgICB9LCAxNTAwKVxyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbXlBbGVydChmYWxzZSwgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gIH1cclxufSlcclxuXHJcbiAgLyoqXHJcbiAgICog55uu5qCHNO+8mue8lui+kS3lm57mmL7mlofnq6BcclxuICAgKiAgNC4xIOmhtemdoui3s+i9rOS8oOWPgu+8iFVSTCDmn6Xor6Llj4LmlbDmlrnlvI/vvIlcclxuICAgKiAgNC4yIOWPkeW4g+aWh+eroOmhtemdouaOpeaUtuWPguaVsOWIpOaWre+8iOWFseeUqOWQjOS4gOWll+ihqOWNle+8iVxyXG4gICAqICA0LjMg5L+u5pS55qCH6aKY5ZKM5oyJ6ZKu5paH5a2XXHJcbiAgICogIDQuNCDojrflj5bmlofnq6Dor6bmg4XmlbDmja7lubblm57mmL7ooajljZVcclxuICAgKi9cclxuICA7IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyA0LjIg5Y+R5biD5paH56ug6aG16Z2i5o6l5pS25Y+C5pWw5Yik5pat77yI5YWx55So5ZCM5LiA5aWX6KGo5Y2V77yJXHJcbiAgICBjb25zdCBwYXJhbXNTdHIgPSBsb2NhdGlvbi5zZWFyY2hcclxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zU3RyKVxyXG4gICAgcGFyYW1zLmZvckVhY2goYXN5bmMgKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgLy8g5b2T5YmN5pyJ6KaB57yW6L6R55qE5paH56ugIGlkIOiiq+S8oOWFpei/h+adpVxyXG4gICAgICBpZiAoa2V5ID09PSAnaWQnKSB7XHJcbiAgICAgICAgLy8gNC4zIOS/ruaUueagh+mimOWSjOaMiemSruaWh+Wtl1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZSBzcGFuJykuaW5uZXJIVE1MID0gJ+S/ruaUueaWh+eroCdcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VuZCcpLmlubmVySFRNTCA9ICfkv67mlLknXHJcbiAgICAgICAgLy8gNC40IOiOt+WPluaWh+eroOivpuaDheaVsOaNruW5tuWbnuaYvuihqOWNlVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgIHVybDogYC92MV8wL21wL2FydGljbGVzLyR7dmFsdWV9YFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIC8vIOe7hOe7h+aIkeS7heS7hemcgOimgeeahOaVsOaNruWvueixoe+8jOS4uuWQjue7remBjeWOhuWbnuaYvuWIsOmhtemdouS4iuWBmumTuuWeq1xyXG4gICAgICAgIGNvbnN0IGRhdGFPYmogPSB7XHJcbiAgICAgICAgICBjaGFubmVsX2lkOiByZXMuZGF0YS5jaGFubmVsX2lkLFxyXG4gICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLnRpdGxlLFxyXG4gICAgICAgICAgcm91bmRlZDogcmVzLmRhdGEuY292ZXIuaW1hZ2VzWzBdLCAvLyDlsIHpnaLlm77niYflnLDlnYBcclxuICAgICAgICAgIGNvbnRlbnQ6IHJlcy5kYXRhLmNvbnRlbnQsXHJcbiAgICAgICAgICBpZDogcmVzLmRhdGEuaWRcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6YGN5Y6G5pWw5o2u5a+56LGh5bGe5oCn77yM5pig5bCE5Yiw6aG16Z2i5YWD57Sg5LiK77yM5b+r6YCf6LWL5YC8XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YU9iaikuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JvdW5kZWQnKSB7XHJcbiAgICAgICAgICAgIC8vIOWwgemdouiuvue9rlxyXG4gICAgICAgICAgICBpZiAoZGF0YU9ialtrZXldKSB7XHJcbiAgICAgICAgICAgICAgLy8g5pyJ5bCB6Z2iXHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdW5kZWQnKS5zcmMgPSBkYXRhT2JqW2tleV1cclxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm91bmRlZCcpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxyXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZScpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2NvbnRlbnQnKSB7XHJcbiAgICAgICAgICAgIC8vIOWvjOaWh+acrOWGheWuuVxyXG4gICAgICAgICAgICBlZGl0b3Iuc2V0SHRtbChkYXRhT2JqW2tleV0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDnlKjmlbDmja7lr7nosaHlsZ7mgKflkI3vvIzkvZzkuLrmoIfnrb4gbmFtZSDlsZ7mgKfpgInmi6nlmajlgLzmnaXmib7liLDljLnphY3nmoTmoIfnrb5cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9JHtrZXl9XWApLnZhbHVlID0gZGF0YU9ialtrZXldXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KSgpO1xyXG5cclxuLyoqXHJcbiAqIOebruaghzXvvJrnvJbovpEt5L+d5a2Y5paH56ugXHJcbiAqICA1LjEg5Yik5pat5oyJ6ZKu5paH5a2X77yM5Yy65YiG5Lia5Yqh77yI5Zug5Li65YWx55So5LiA5aWX6KGo5Y2V77yJXHJcbiAqICA1LjIg6LCD55So57yW6L6R5paH56ug5o6l5Y+j77yM5L+d5a2Y5L+h5oGv5Yiw5pyN5Yqh5ZmoXHJcbiAqICA1LjMg5Z+65LqOIEFsZXJ0IOWPjemmiOe7k+aenOa2iOaBr+e7meeUqOaIt1xyXG4gKi9cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbmQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGUgPT4ge1xyXG4gIC8vIDUuMSDliKTmlq3mjInpkq7mloflrZfvvIzljLrliIbkuJrliqHvvIjlm6DkuLrlhbHnlKjkuIDlpZfooajljZXvvIlcclxuICBpZiAoZS50YXJnZXQuaW5uZXJIVE1MICE9PSAn5L+u5pS5JykgcmV0dXJuXHJcbiAgLy8g5L+u5pS55paH56ug6YC76L6RXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnQtZm9ybScpXHJcbiAgY29uc3QgZGF0YSA9IHNlcmlhbGl6ZShmb3JtLCB7IGhhc2g6IHRydWUsIGVtcHR5OiB0cnVlIH0pXHJcbiAgLy8gNS4yIOiwg+eUqOe8lui+keaWh+eroOaOpeWPo++8jOS/neWtmOS/oeaBr+WIsOacjeWKoeWZqFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgIHVybDogYC92MV8wL21wL2FydGljbGVzLyR7ZGF0YS5pZH1gLFxyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICBjb3Zlcjoge1xyXG4gICAgICAgICAgdHlwZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdW5kZWQnKS5zcmMgPyAxIDogMCxcclxuICAgICAgICAgIGltYWdlczogW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3VuZGVkJykuc3JjXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIG15QWxlcnQodHJ1ZSwgJ+S/ruaUueaWh+eroOaIkOWKnycpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIG15QWxlcnQoZmFsc2UsIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICB9XHJcbn0pIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ3YW5nRWRpdG9yIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm4iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJheGlvcyIsImJhc2VVUkwiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwiZGlyIiwic3RhdHVzIiwiYWxlcnQiLCJjbGVhciIsImxvY2F0aW9uIiwiaHJlZiIsInVybCIsInRoZW4iLCJyZXN1bHQiLCJ1c2VybmFtZSIsIm5hbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImlzU3VjY2VzcyIsIm1zZyIsIm15QWxlcnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwic2VyaWFsaXplIiwiY3JlYXRlRWRpdG9yIiwiY3JlYXRlVG9vbGJhciIsImVkaXRvckNvbmZpZyIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlZGl0b3IiLCJodG1sIiwiZ2V0SHRtbCIsInZhbHVlIiwic2VsZWN0b3IiLCJtb2RlIiwiYXN5bmMiLCJodG1sU3RyIiwiY2hhbm5lbHMiLCJtYXAiLCJpdGVtIiwiaWQiLCJqb2luIiwic2V0Q2hhbm5sZUxpc3QiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJmZCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaW1nVXJsIiwibWV0aG9kIiwic3JjIiwiY2xpY2siLCJmb3JtIiwiaGFzaCIsImVtcHR5IiwibG9nIiwiY292ZXIiLCJ0eXBlIiwiaW1hZ2VzIiwicmVzZXQiLCJzZXRIdG1sIiwibWVzc2FnZSIsInBhcmFtc1N0ciIsInNlYXJjaCIsIlVSTFNlYXJjaFBhcmFtcyIsImZvckVhY2giLCJyZXMiLCJkYXRhT2JqIiwiY2hhbm5lbF9pZCIsInRpdGxlIiwicm91bmRlZCIsImNvbnRlbnQiLCJrZXlzIl0sInNvdXJjZVJvb3QiOiIifQ==