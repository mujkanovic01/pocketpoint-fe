"use strict";(self["webpackChunkPocketpoint"]=self["webpackChunkPocketpoint"]||[]).push([[344],{5344:function(e,a,i){i.r(a),i.d(a,{default:function(){return v}});var l=i(3396),n=i(7139),t=i(5174);const s={class:"flex flex-column align-items-center text-800"},o={class:"col-12 relative"},r=(0,l._)("img",{alt:"logo",src:t,height:"65",class:"mr-2"},null,-1),c=(0,l._)("div",{class:"text-5xl ml-4 my-4"},"Leaderboard",-1),d={class:"text-l"},p={class:"text-l"},u=(0,l._)("i",{class:"pi pi-angle-right"},null,-1);function m(e,a,i,t,m,f){const b=(0,l.up)("Menubar"),g=(0,l.up)("Column"),h=(0,l.up)("Avatar"),w=(0,l.up)("Flag"),v=(0,l.up)("DataTable");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",o,[(0,l.Wm)(b,{model:e.items},{start:(0,l.w5)((()=>[r])),_:1},8,["model"])]),c,(0,l.Wm)(v,{value:e.players,class:"lg:w-8 w-12"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{field:"rank",header:"Rank"},{body:(0,l.w5)((e=>[(0,l._)("div",d,"#"+(0,n.zw)(e.index+1),1)])),_:1}),(0,l.Wm)(g,{field:"name",header:"Player"},{body:(0,l.w5)((e=>[(0,l.Wm)(h,{label:e.data.name.split(" ").map((e=>e.charAt(0))).join(""),class:"mr-2",shape:"circle",size:"medium",style:{"background-color":"#2196F3",color:"#ffffff"}},null,8,["label"]),(0,l.Uk)(" "+(0,n.zw)(e.data.name),1)])),_:1}),(0,l.Wm)(g,{field:"code",header:"Nationality"},{body:(0,l.w5)((e=>[(0,l.Wm)(w,{code:e.data.code},null,8,["code"])])),_:1}),(0,l.Wm)(g,{field:"age",header:"Age"}),(0,l.Wm)(g,{field:"age",header:"Win percentage"},{body:(0,l.w5)((e=>[(0,l._)("div",p,(0,n.zw)(e.data.winPercentage)+"% ",1)])),_:1}),(0,l.Wm)(g,{field:"icon",header:""},{body:(0,l.w5)((()=>[u])),_:1})])),_:1},8,["value"])])}var f=i(450),b=i(909),g={name:"LeaderboardPage",components:{Flag:b.Z},data:function(){const e=Object.values(f.Z);return e.sort(((e,a)=>a.winPercentage-e.winPercentage)),{players:e,items:[{separator:!0},{label:"Home",icon:"pi pi-fw pi-home",url:"/"},{label:"Tournaments",icon:"pi pi-fw pi-sitemap",url:"/tournaments"},{label:"Leaderboards",icon:"pi pi-fw pi-chart-bar",class:"p-focus",url:"/leaderboard"},{separator:!0}]}},methods:{openSigninComponent:function(){this.isSignUpVisible=!1,this.isSignInVisible=!0},openSignupComponent:function(){this.isSignUpVisible=!0,this.isSignInVisible=!1}}},h=i(89);const w=(0,h.Z)(g,[["render",m]]);var v=w}}]);
//# sourceMappingURL=344.fee817a9.js.map