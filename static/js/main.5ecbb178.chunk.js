(this["webpackJsonpcity-walk"]=this["webpackJsonpcity-walk"]||[]).push([[0],{14:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(8),r=a.n(i),c=(a(14),a(2)),l=a(4),d=a(6),u={width:"20%",maxWidth:"400px",position:"absolute",padding:"10px 26px 3px",left:0,background:"rgba(33,33,33,.5)",color:"#fff",backgroundColor:"black",zIndex:1,opacity:.5,top:"5%"},s={position:"absolute",left:0,zIndex:2,opacity:.5,top:"5%",color:"white"},m={textAlign:"center",fontSize:"2rem",fontFamily:"Cookie",padding:"20px",margin:"15px",zIndex:1,opacity:.7},p={padding:"1% 2%",left:0,bottom:0,height:"170px",background:"rgba(33,33,33,.6)",borderRadius:"3px",overflowY:"auto"},h={background:p.background,width:"100%",color:"white",border:0,textAlign:"initial",fontWeight:400,fontSize:"14px"};var b=function(e){var t,a=Object(o.useState)(""),i=Object(c.a)(a,2),r=i[0],b=i[1],y=Object(o.useState)(!0),f=Object(c.a)(y,2),g=f[0],w=f[1],v=function(e){var t=e.target;t.style.fontWeight=700,t.style.fontSize="14px"},E=function(e){var t=e.target;t.style.fontWeight=400,t.style.fontSize="14px"},C=e.allCities.map((function(e){return n.a.createElement("button",{key:e.country,style:h,onClick:function(){return b(e.country)},onMouseEnter:function(e){return v(e)},onMouseOut:function(e){return E(e)}},e.country)}));return""!==r&&(t=e.allCities.find((function(e){return e.country===r})).cities.map((function(t){return n.a.createElement("button",{key:t.videoId,style:h,onClick:function(){return e.changeVideo(t)},onMouseEnter:function(e){return v(e)},onMouseOut:function(e){return E(e)}},t.name)}))),n.a.createElement("div",null,n.a.createElement(l.a,{icon:d.a,style:s,onClick:function(){w(!g)}}),g&&n.a.createElement("div",{style:u},n.a.createElement("h1",{style:m},"City Walk"),n.a.createElement("p",null,"Aperte F11 para uma melhor experi\xeancia!"),n.a.createElement("label",null,"Escolha uma pa\xeds para caminhar"),n.a.createElement("div",{style:p},C),""!==r&&n.a.createElement("div",null,n.a.createElement("label",null,"Escolha uma cidade para caminhar"),t),n.a.createElement("a",{href:e.source,target:"_blank",rel:"noopener noreferrer"},"Fonte"),n.a.createElement("p",null,"Me ajude a comprar pizza ",n.a.createElement(l.a,{icon:d.b})),n.a.createElement("form",{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_top"},n.a.createElement("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),n.a.createElement("input",{type:"hidden",name:"hosted_button_id",value:"LTM5QNLL4WA52"}),n.a.createElement("input",{type:"image",src:"https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Fa\xe7a doa\xe7\xf5es com o bot\xe3o do PayPal"}),n.a.createElement("img",{alt:"",border:"0",src:"https://www.paypal.com/pt_BR/i/scr/pixel.gif",width:"1",height:"1"}))))},y={width:"100%",height:"100%",position:"absolute"},f={position:"relative",width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},g={position:"absolute",width:"100%",height:"100%"};var w=function(){var e=[{country:"Brasil",cities:[{name:"Curitiba - Paran\xe1",videoId:"1w5eAshOono"},{name:"S\xe3o Paulo (Av Paulista) - S\xe3o Paulo",videoId:"UFP3YLjaCXk",customCommand:"&start=23"},{name:"S\xe3o Paulo (Ibirapuera) - S\xe3o Paulo",videoId:"FJaE8lg_l7w",customCommand:"&start=10"},{name:"S\xe3o Paulo (Oscar Freire) - S\xe3o Paulo",videoId:"yPSVCVFgZng",customCommand:"&start=10"},{name:"S\xe3o Paulo (Itaim BIbi) - S\xe3o Paulo",videoId:"zQQZsmdVouE",customCommand:"&start=10"},{name:"Aparecida - S\xe3o Paulo",videoId:"UkiVENO6btk",customCommand:"&start=8"},{name:"Rio de Janeiro - Rio de Janeiro",videoId:"zOVFrYL3F8o",customCommand:"&start=23"},{name:"Paraty - Rio de Janeiro",videoId:"712S2ureJG4",customCommand:"&start=10"},{name:"Gramado - Rio Grande do Sul",videoId:"56zbMbin1h4",customCommand:"&start=10"}]},{country:"Mexico",cities:[{name:"Cidade do Mexico",videoId:"ER_szwLxHYk",customCommand:"&start=19"}]},{country:"Uruguai",cities:[{name:"Punta del Este",videoId:"hjSc_zaO6CY",customCommand:"&start=20"}]},{country:"Argentina",cities:[{name:"Buenos Aires",videoId:"oTaxO9HnEL0",customCommand:"&start=14"}]}],t=e[0].cities[Math.floor(Math.random()*e[0].cities.length)],a=Object(o.useState)(t),i=Object(c.a)(a,2),r=i[0],l=i[1],d="https://www.youtube.com/embed/".concat(r.videoId,"?\n    loop=1&&autoplay=1&playsinline=1&rel=0&showinfo=0&enablejsapi=1&widgetid=1&modestbranding=1&controls=0&disablekb=1&fs=0\n    &iv_load_policy=3&hd=1&").concat(r.customCommand),u="https://www.youtube.com/watch?v=".concat(r.videoId);return n.a.createElement("div",null,n.a.createElement("div",{style:f},n.a.createElement(b,{allCities:e,changeVideo:l,source:u}),n.a.createElement("div",{style:g},n.a.createElement("iframe",{frameBorder:"0",allowFullScreen:"1",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",style:y,src:d,disablekb:"1",title:"video"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.5ecbb178.chunk.js.map