"use strict";(self.webpackChunkseller=self.webpackChunkseller||[]).push([[187],{5187:(C,y,r)=>{r.r(y),r.d(y,{DashboardModule:()=>H});var c=r(6814),g=r(9232),m=r(707),A=r(6697),S=r(4825),h=r(9773),p=r(4664),x=r(7494),t=r(2029),f=r(6306),d=r(6232),s=r(4963),i=r(723),a=r(5219);let v=(()=>{class e{constructor(n,o,u,_){this.reportClient=n,this.ozonRatingClient=o,this.timeService=u,this.messageService=_}getLatestSalesInfo(){return this.reportClient.getLatestSalesReport().pipe((0,f.K)(n=>(this.messageService.add({summary:"\u041e\u0448\u0438\u0431\u043a\u0430",severity:"error",detail:n}),d.E)))}getOzonLocalizationIndex(){return this.ozonRatingClient.getOzonLocalizationIndex()}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(s.f.ReportClient),t.LFG(s.f.OzonRatingClient),t.LFG(i.O),t.LFG(a.ez))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Z=r(6593);let D=(()=>{class e{styleClass;style;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";containerClass(){return{"p-skeleton p-component":!0,"p-skeleton-circle":"circle"===this.shape,"p-skeleton-none":"none"===this.animation}}containerStyle(){return this.size?{...this.style,width:this.size,height:this.size,borderRadius:this.borderRadius}:{...this.style,width:this.width,height:this.height,borderRadius:this.borderRadius}}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=t.Xpm({type:e,selectors:[["p-skeleton"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},decls:1,vars:7,consts:[[3,"ngClass","ngStyle"]],template:function(o,u){1&o&&t._UZ(0,"div",0),2&o&&(t.Tol(u.styleClass),t.Q6J("ngClass",u.containerClass())("ngStyle",u.containerStyle()),t.uIk("data-pc-name","skeleton")("aria-hidden",!0)("data-pc-section","root"))},dependencies:[c.mk,c.PC],styles:['@layer primeng{.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:"";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n'],encapsulation:2,changeDetection:0})}return e})(),w=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=t.oAB({type:e});static \u0275inj=t.cJS({imports:[c.ez]})}return e})();function I(e,l){if(1&e&&(t.TgZ(0,"div"),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&e){const n=l.$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,n))}}function k(e,l){if(1&e&&(t.ynx(0),t.TgZ(1,"div"),t._uU(2),t.qZA(),t.BQk()),2&e){const n=t.oxw(3);t.xp6(2),t.hij("... \u0438 \u0435\u0449\u0451 ",n.data.clusters.length-n.maxClusters," \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043e\u0432")}}function U(e,l){if(1&e&&(t.TgZ(0,"div")(1,"span",3)(2,"b"),t._uU(3),t.qZA(),t._uU(4),t.ALo(5,"slice"),t.qZA(),t.TgZ(6,"span",4)(7,"b"),t._uU(8),t.qZA(),t._uU(9),t.qZA()()),2&e){const n=l.$implicit;t.xp6(3),t.Oqu(n.productPackageID),t.xp6(1),t.AsE(" ",n.productPackageName.length>20?t.Dn7(5,6,n.productPackageName,0,20)+"...":n.productPackageName," (",n.stockDays," \u0434\u043d\u0435\u0439) "),t.xp6(4),t.Oqu(n.productPackageID),t.xp6(1),t.AsE(" ",n.productPackageName," (",n.stockDays," \u0434\u043d\u0435\u0439) ")}}function q(e,l){if(1&e&&(t.ynx(0),t.TgZ(1,"div"),t._uU(2),t.qZA(),t.BQk()),2&e){const n=t.oxw(3);t.xp6(2),t.hij("... \u0438 \u0435\u0449\u0451 ",n.data.articles.excessiveCount," \u0430\u0440\u0442\u0438\u043a\u0443\u043b\u043e\u0432")}}function z(e,l){if(1&e&&(t.ynx(0),t.TgZ(1,"div",1),t._uU(2,"\u0414\u0435\u0444\u0438\u0446\u0438\u0442 \u043e\u0441\u0442\u0430\u0442\u043a\u043e\u0432 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430\u0445"),t.qZA(),t.YNc(3,I,3,3,"div",2),t.ALo(4,"slice"),t.YNc(5,k,3,1,"ng-container",0),t.TgZ(6,"div",1),t._uU(7,"\u0417\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u044e\u0449\u0438\u0435\u0441\u044f \u0430\u0440\u0442\u0438\u043a\u0443\u043b\u044b"),t.qZA(),t.YNc(8,U,10,10,"div",2),t.YNc(9,q,3,1,"ng-container",0),t.BQk()),2&e){const n=t.oxw(2);t.xp6(3),t.Q6J("ngForOf",t.Dn7(4,4,n.data.clusters,0,n.maxClusters)),t.xp6(2),t.Q6J("ngIf",n.data.articles.length>n.maxClusters),t.xp6(3),t.Q6J("ngForOf",n.data.articles.articles),t.xp6(1),t.Q6J("ngIf",n.data.articles.excessiveCount)}}function J(e,l){if(1&e&&(t.TgZ(0,"span"),t.YNc(1,z,10,8,"ng-container",0),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.data.clusters.length)}}function N(e,l){1&e&&(t.TgZ(0,"span"),t._UZ(1,"p-skeleton",5),t.qZA())}let b=(()=>{class e{constructor(n,o){this.reportClient=n,this.messageService=o,this.data=null,this.maxArticles=3,this.maxClusters=3}ngOnInit(){this.reportClient.getOzonStockStarvationReport(7,7,null,!0,!0,!0).pipe((0,f.K)(n=>(this.messageService.add({summary:"\u041e\u0448\u0438\u0431\u043a\u0430",severity:"error",detail:n}),d.E))).subscribe(n=>{const o=new Set;for(const _ of n)o.add(_.warehouseClusterName);const u=n.sort((_,W)=>W.stockDays-_.stockDays).slice(0,this.maxArticles+1);this.data={clusters:[...o].sort(),articles:{articles:u,excessiveCount:Math.max(n.length-u.length,0)}}})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(s.f.ReportClient),t.Y36(a.ez))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-stock-starvation-summary"]],inputs:{maxArticles:"maxArticles",maxClusters:"maxClusters"},standalone:!0,features:[t.jDz],decls:2,vars:2,consts:[[4,"ngIf"],[1,"text-900","font-medium","text-xl"],[4,"ngFor","ngForOf"],["title","article.productPackageName",1,"inline","sm:hidden","md:hidden","lg:hidden","xl:inline"],["title","article.productPackageName",1,"hidden","sm:inline","md:inline","lg:inline","xl:hidden"],["width","10rem","height","4rem"]],template:function(o,u){1&o&&(t.YNc(0,J,2,1,"span",0),t.YNc(1,N,2,0,"span",0)),2&o&&(t.Q6J("ngIf",u.data),t.xp6(1),t.Q6J("ngIf",!u.data))},dependencies:[c.ez,c.sg,c.O5,c.OU,c.rS]})}return e})();function Q(e,l){if(1&e&&(t.TgZ(0,"span")(1,"div",13),t._uU(2),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.AsE("",n.data.lastDayOrderCount," (",n.data.lastDayOrderSum,"\u20bd)")}}function B(e,l){1&e&&(t.TgZ(0,"span"),t._UZ(1,"p-skeleton",22),t.qZA())}function E(e,l){if(1&e&&(t.TgZ(0,"span")(1,"div",13),t._uU(2),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.hij("",n.data.weekSales.lastWeekIncome,"\u20bd")}}function O(e,l){1&e&&(t.TgZ(0,"span"),t._UZ(1,"p-skeleton",22),t.qZA())}function Y(e,l){if(1&e&&(t.TgZ(0,"span")(1,"span",16),t._uU(2),t.ALo(3,"number"),t.qZA(),t.TgZ(4,"span",8),t._uU(5,"\u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e"),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.hij(" ",t.xi3(3,1,(n.data.weekSales.lastWeekIncome-n.data.weekSales.previousWeekIncome)/n.data.weekSales.previousWeekIncome*100,"1.0-0"),"% ")}}function R(e,l){if(1&e&&(t.TgZ(0,"span")(1,"div",13),t._uU(2),t.ALo(3,"number"),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.hij("",t.xi3(3,1,100*n.localizationIndex,"1.0-1"),"%")}}function F(e,l){1&e&&(t.TgZ(0,"span"),t._UZ(1,"p-skeleton",22),t.qZA())}function L(e,l){1&e&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Image"),t.qZA(),t.TgZ(3,"th",26),t._uU(4,"Name "),t._UZ(5,"p-sortIcon",27),t.qZA(),t.TgZ(6,"th",28),t._uU(7,"Price "),t._UZ(8,"p-sortIcon",29),t.qZA(),t.TgZ(9,"th"),t._uU(10,"View"),t.qZA()())}function P(e,l){if(1&e&&(t.TgZ(0,"tr")(1,"td",30),t._UZ(2,"img",31),t.qZA(),t.TgZ(3,"td",32),t._uU(4),t.qZA(),t.TgZ(5,"td",33),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"td",34),t._UZ(9,"button",35),t.qZA()()),2&e){const n=l.$implicit;t.xp6(2),t.MGl("src","assets/seller/images/product/",n.image,"",t.LSH),t.s9C("alt",n.name),t.xp6(2),t.Oqu(n.name),t.xp6(2),t.Oqu(t.xi3(7,4,n.price,"USD"))}}function j(e,l){if(1&e&&(t.TgZ(0,"p-table",23),t.YNc(1,L,11,0,"ng-template",24),t.YNc(2,P,10,7,"ng-template",25),t.qZA()),2&e){const n=t.oxw();t.Q6J("value",n.data.lastSales)("paginator",!0)("rows",5)}}const T=function(){return{width:"2.5rem",height:"2.5rem"}};let M=(()=>{class e extends x.V{constructor(n,o){super(o),this.dashboardService=n,this.localizationIndex=null}ngOnInit(){this.titleService.setTitle("Dashboard"),(0,S.H)(0,3e4).pipe((0,h.R)(this.destroyed),(0,p.w)(()=>this.dashboardService.getLatestSalesInfo())).subscribe(n=>{this.data=n}),this.dashboardService.getOzonLocalizationIndex().subscribe(n=>{this.localizationIndex=n})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(v),t.Y36(Z.Dx))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],features:[t.qOj],decls:63,vars:18,consts:[[1,"grid"],[1,"col-12","lg:col-6","xl:col-3"],[1,"card","mb-0"],[1,"flex","justify-content-between","mb-3"],[1,"block","text-500","font-medium","mb-3"],[4,"ngIf"],[1,"flex","align-items-center","justify-content-center","bg-blue-100","border-round",3,"ngStyle"],[1,"pi","pi-shopping-cart","text-blue-500","text-xl"],[1,"text-500"],[1,"flex","align-items-center","justify-content-center","bg-orange-100","border-round",3,"ngStyle"],[1,"pi","pi-dollar","text-orange-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-cyan-100","border-round",3,"ngStyle"],[1,"pi","pi-map-marker","text-orange-500","text-xl"],[1,"text-900","font-medium","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-purple-100","border-round",3,"ngStyle"],[1,"pi","pi-comment","text-purple-500","text-xl"],[1,"text-green-500","font-medium"],[1,"col-12","xl:col-6"],["maxArticles","3","maxClusters","5"],[1,"pi","pi-warehouse","text-red-500","text-xl"],[1,"card"],["responsiveLayout","scroll",3,"value","paginator","rows",4,"ngIf"],["width","10rem","height","4rem"],["responsiveLayout","scroll",3,"value","paginator","rows"],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","name"],["field","name"],["pSortableColumn","price"],["field","price"],[2,"width","15%","min-width","5rem"],["width","50",1,"shadow-4",3,"src","alt"],[2,"width","35%","min-width","7rem"],[2,"width","35%","min-width","8rem"],[2,"width","15%"],["pButton","","pRipple","","type","button","icon","pi pi-search",1,"p-button","p-component","p-button-text","p-button-icon-only"]],template:function(o,u){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"span",4),t._uU(6,"\u0417\u0430\u043a\u0430\u0437\u044b"),t.qZA(),t.YNc(7,Q,3,2,"span",5),t.YNc(8,B,2,0,"span",5),t.qZA(),t.TgZ(9,"div",6),t._UZ(10,"i",7),t.qZA()(),t.TgZ(11,"span",8),t._uU(12,"\u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 24 \u0447\u0430\u0441\u0430"),t.qZA()()(),t.TgZ(13,"div",1)(14,"div",2)(15,"div",3)(16,"div")(17,"span",4),t._uU(18,"\u0414\u043e\u0445\u043e\u0434"),t.qZA(),t.YNc(19,E,3,1,"span",5),t.YNc(20,O,2,0,"span",5),t.qZA(),t.TgZ(21,"div",9),t._UZ(22,"i",10),t.qZA()(),t.YNc(23,Y,6,4,"span",5),t.qZA()(),t.TgZ(24,"div",1)(25,"div",2)(26,"div",3)(27,"div")(28,"span",4),t._uU(29,"\u0418\u043d\u0434\u0435\u043a\u0441 \u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),t.qZA(),t.YNc(30,R,4,4,"span",5),t.YNc(31,F,2,0,"span",5),t.qZA(),t.TgZ(32,"div",11),t._UZ(33,"i",12),t.qZA()(),t.TgZ(34,"span",8),t._uU(35,"\u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 14 \u0434\u043d\u0435\u0439"),t.qZA()()(),t.TgZ(36,"div",1)(37,"div",2)(38,"div",3)(39,"div")(40,"span",4),t._uU(41,"Comments"),t.qZA(),t.TgZ(42,"div",13),t._uU(43,"152 Unread"),t.qZA()(),t.TgZ(44,"div",14),t._UZ(45,"i",15),t.qZA()(),t.TgZ(46,"span",16),t._uU(47,"85 "),t.qZA(),t.TgZ(48,"span",8),t._uU(49,"responded"),t.qZA()()(),t.TgZ(50,"div",17)(51,"div",2)(52,"div",3),t._UZ(53,"app-stock-starvation-summary",18),t.TgZ(54,"div",6),t._UZ(55,"i",19),t.qZA()(),t.TgZ(56,"span",8),t._uU(57,"\u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 7 \u0434\u043d\u0435\u0439"),t.qZA()()(),t.TgZ(58,"div",17)(59,"div",20)(60,"h5"),t._uU(61,"Recent Sales"),t.qZA(),t.YNc(62,j,3,3,"p-table",21),t.qZA()()()),2&o&&(t.xp6(7),t.Q6J("ngIf",u.data),t.xp6(1),t.Q6J("ngIf",!u.data),t.xp6(1),t.Q6J("ngStyle",t.DdM(13,T)),t.xp6(10),t.Q6J("ngIf",u.data),t.xp6(1),t.Q6J("ngIf",!u.data),t.xp6(1),t.Q6J("ngStyle",t.DdM(14,T)),t.xp6(2),t.Q6J("ngIf",u.data&&u.data.weekSales.previousWeekIncome),t.xp6(7),t.Q6J("ngIf",u.data),t.xp6(1),t.Q6J("ngIf",!u.data),t.xp6(1),t.Q6J("ngStyle",t.DdM(15,T)),t.xp6(12),t.Q6J("ngStyle",t.DdM(16,T)),t.xp6(10),t.Q6J("ngStyle",t.DdM(17,T)),t.xp6(8),t.Q6J("ngIf",!1))},dependencies:[c.O5,c.PC,g.iA,a.jx,g.lQ,g.fz,m.Hq,D,b,c.JJ,c.H9],encapsulation:2})}return e})(),G=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[A.Bz.forChild([{path:"",component:M}]),A.Bz]})}return e})(),H=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({providers:[s.f.OzonSalesOrderClient,s.f.ReportClient,s.f.OzonRatingClient,v],imports:[c.ez,g.U$,m.hJ,G,w,b]})}return e})()},4825:(C,y,r)=>{r.d(y,{H:()=>S});var c=r(5592),g=r(2832),m=r(671);function S(h=0,p,x=g.P){let t=-1;return null!=p&&((0,m.K)(p)?x=p:t=p),new c.y(f=>{let d=function A(h){return h instanceof Date&&!isNaN(h)}(h)?+h-x.now():h;d<0&&(d=0);let s=0;return x.schedule(function(){f.closed||(f.next(s++),0<=t?this.schedule(void 0,t):f.complete())},d)})}},2832:(C,y,r)=>{r.d(y,{P:()=>f,z:()=>t});var c=r(7394);class g extends c.w0{constructor(s,i){super()}schedule(s,i=0){return this}}const m={setInterval(d,s,...i){const{delegate:a}=m;return a?.setInterval?a.setInterval(d,s,...i):setInterval(d,s,...i)},clearInterval(d){const{delegate:s}=m;return(s?.clearInterval||clearInterval)(d)},delegate:void 0};var A=r(9039),h=r(4552);class p{constructor(s,i=p.now){this.schedulerActionCtor=s,this.now=i}schedule(s,i=0,a){return new this.schedulerActionCtor(this,s).schedule(a,i)}}p.now=h.l.now;const t=new class x extends p{constructor(s,i=p.now){super(s,i),this.actions=[],this._active=!1}flush(s){const{actions:i}=this;if(this._active)return void i.push(s);let a;this._active=!0;do{if(a=s.execute(s.state,s.delay))break}while(s=i.shift());if(this._active=!1,a){for(;s=i.shift();)s.unsubscribe();throw a}}}(class S extends g{constructor(s,i){super(s,i),this.scheduler=s,this.work=i,this.pending=!1}schedule(s,i=0){var a;if(this.closed)return this;this.state=s;const v=this.id,Z=this.scheduler;return null!=v&&(this.id=this.recycleAsyncId(Z,v,i)),this.pending=!0,this.delay=i,this.id=null!==(a=this.id)&&void 0!==a?a:this.requestAsyncId(Z,this.id,i),this}requestAsyncId(s,i,a=0){return m.setInterval(s.flush.bind(s,this),a)}recycleAsyncId(s,i,a=0){if(null!=a&&this.delay===a&&!1===this.pending)return i;null!=i&&m.clearInterval(i)}execute(s,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const a=this._execute(s,i);if(a)return a;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(s,i){let v,a=!1;try{this.work(s)}catch(Z){a=!0,v=Z||new Error("Scheduled action threw falsy error")}if(a)return this.unsubscribe(),v}unsubscribe(){if(!this.closed){const{id:s,scheduler:i}=this,{actions:a}=i;this.work=this.state=this.scheduler=null,this.pending=!1,(0,A.P)(a,this),null!=s&&(this.id=this.recycleAsyncId(i,s,null)),this.delay=null,super.unsubscribe()}}}),f=t}}]);