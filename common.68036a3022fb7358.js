"use strict";(self.webpackChunkseller=self.webpackChunkseller||[]).push([[76],{8805:(v,m,n)=>{n.d(m,{t:()=>d});var l=n(9437),s=n(983),t=n(4412),r=n(4153),o=n(4438),_=n(6557),h=n(5779);let d=(()=>{class a{importOzonWarehouses(){return this.warehouseCommandHandlerClient.importOzonWarehouses().pipe((0,l.W)(p=>(this.messageService.add({summary:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0438\u043c\u043f\u043e\u0440\u0442\u0430 \u0441\u043a\u043b\u0430\u0434\u043e\u0432 \u041e\u0437\u043e\u043d",severity:"error",detail:p}),s.w)))}constructor(p,f,y){this.ozonWarehouseClient=p,this.warehouseCommandHandlerClient=f,this.messageService=y,this.warehouses=new t.t(null)}getWarehouses(){return this.ozonWarehouseClient.getOzonWarehouses(new r.D.FindOzonWarehousesModel({includeAliases:!0}))}updateWarehouse(p){return this.warehouseCommandHandlerClient.updateOzonWarehouse(p)}static{this.\u0275fac=function(f){return new(f||a)(o.KVO(r.D.WarehouseClient),o.KVO(_.X.WarehouseClient),o.KVO(h.bg))}}static{this.\u0275prov=o.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})()},605:(v,m,n)=>{n.d(m,{Y:()=>t});var l=n(8839),s=n(1584);function t(r=0,o=l.E){return r<0&&(r=0),(0,s.O)(r,r,o)}},3294:(v,m,n)=>{n.d(m,{F:()=>r});var l=n(3669),s=n(9974),t=n(4360);function r(_,h=l.D){return _=_??o,(0,s.N)((d,a)=>{let C,p=!0;d.subscribe((0,t._)(a,f=>{const y=h(f);(p||!_(C,y))&&(p=!1,C=y,a.next(f))}))})}function o(_,h){return _===h}},3227:(v,m,n)=>{n.d(m,{F:()=>S,l:()=>P});var l=n(9969),s=n(177),t=n(4438),r=n(5779),o=n(1455),_=n(2016),h=n(4420);const d=(i,g)=>({showTransitionParams:i,hideTransitionParams:g}),a=i=>({value:"open",params:i}),C=()=>({styleClass:"p-scrolltop-icon"}),p=()=>({"font-size":"1rem",scale:"1.5"});function f(i,g){if(1&i&&t.nrm(0,"span",6),2&i){const e=t.XpG(3);t.HbH(e.icon),t.Y8G("ngClass","p-scrolltop-icon")}}function y(i,g){1&i&&t.nrm(0,"ChevronUpIcon",7),2&i&&t.Y8G("styleClass","p-scrolltop-icon")("ngStyle",t.lJ4(2,p))}function D(i,g){if(1&i&&(t.qex(0),t.DNE(1,f,1,3,"span",4)(2,y,1,3,"ChevronUpIcon",5),t.bVm()),2&i){const e=t.XpG(2);t.R7$(),t.Y8G("ngIf",e.icon),t.R7$(),t.Y8G("ngIf",!e.icon)}}function O(i,g){}function M(i,g){if(1&i&&t.DNE(0,O,0,0,"ng-template",8),2&i){const e=t.XpG(2);t.Y8G("ngIf",!e.icon)}}function b(i,g){if(1&i){const e=t.RV6();t.j41(0,"button",1),t.bIt("@animation.start",function(u){t.eBV(e);const E=t.XpG();return t.Njj(E.onEnter(u))})("@animation.done",function(u){t.eBV(e);const E=t.XpG();return t.Njj(E.onLeave(u))})("click",function(){t.eBV(e);const u=t.XpG();return t.Njj(u.onClick())}),t.DNE(1,D,3,2,"ng-container",2)(2,M,1,1,null,3),t.k0s()}if(2&i){const e=t.XpG();t.HbH(e.styleClass),t.Y8G("@animation",t.eq3(12,a,t.l_i(9,d,e.showTransitionOptions,e.hideTransitionOptions)))("ngClass",e.containerClass())("ngStyle",e.style),t.BMQ("aria-label",e.buttonAriaLabel),t.R7$(),t.Y8G("ngIf",!e.iconTemplate),t.R7$(),t.Y8G("ngTemplateOutlet",e.iconTemplate)("ngTemplateOutletContext",t.lJ4(14,C))}}let P=(()=>{class i{document;platformId;renderer;el;cd;config;styleClass;style;target="window";threshold=400;icon;behavior="smooth";showTransitionOptions=".15s";hideTransitionOptions=".15s";buttonAriaLabel;templates;iconTemplate;documentScrollListener;parentScrollListener;visible=!1;overlay;window;constructor(e,c,u,E,T,L){this.document=e,this.platformId=c,this.renderer=u,this.el=E,this.cd=T,this.config=L,this.window=this.document.defaultView}ngOnInit(){"window"===this.target?this.bindDocumentScrollListener():"parent"===this.target&&this.bindParentScrollListener()}ngAfterContentInit(){this.templates.forEach(e=>{"icon"===e.getType()&&(this.iconTemplate=e.template)})}onClick(){("window"===this.target?this.window:this.el.nativeElement.parentElement).scroll({top:0,behavior:this.behavior})}onEnter(e){switch(e.toState){case"open":this.overlay=e.element,h.Q$.set("overlay",this.overlay,this.config.zIndex.overlay);break;case"void":this.overlay=null}}onLeave(e){"void"===e.toState&&h.Q$.clear(e.element)}checkVisibility(e){this.visible=e>this.threshold,this.cd.markForCheck()}bindParentScrollListener(){(0,s.UE)(this.platformId)&&(this.parentScrollListener=this.renderer.listen(this.el.nativeElement.parentElement,"scroll",()=>{this.checkVisibility(this.el.nativeElement.parentElement.scrollTop)}))}bindDocumentScrollListener(){(0,s.UE)(this.platformId)&&(this.documentScrollListener=this.renderer.listen(this.window,"scroll",()=>{this.checkVisibility(o.D.getWindowScrollTop())}))}unbindParentScrollListener(){this.parentScrollListener&&(this.parentScrollListener(),this.parentScrollListener=null)}unbindDocumentScrollListener(){this.documentScrollListener&&(this.documentScrollListener(),this.documentScrollListener=null)}containerClass(){return{"p-scrolltop p-link p-component":!0,"p-scrolltop-sticky":"window"!==this.target}}ngOnDestroy(){"window"===this.target?this.unbindDocumentScrollListener():"parent"===this.target&&this.unbindParentScrollListener(),this.overlay&&(h.Q$.clear(this.overlay),this.overlay=null)}static \u0275fac=function(c){return new(c||i)(t.rXU(s.qQ),t.rXU(t.Agw),t.rXU(t.sFG),t.rXU(t.aKT),t.rXU(t.gRc),t.rXU(r.r1))};static \u0275cmp=t.VBU({type:i,selectors:[["p-scrollTop"]],contentQueries:function(c,u,E){if(1&c&&t.wni(E,r.Ei,4),2&c){let T;t.mGM(T=t.lsd())&&(u.templates=T)}},hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",target:"target",threshold:[2,"threshold","threshold",t.Udg],icon:"icon",behavior:"behavior",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",buttonAriaLabel:"buttonAriaLabel"},features:[t.GFd],decls:1,vars:1,consts:[["type","button",3,"ngClass","class","ngStyle","click",4,"ngIf"],["type","button",3,"click","ngClass","ngStyle"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass",4,"ngIf"],[3,"styleClass","ngStyle",4,"ngIf"],[3,"ngClass"],[3,"styleClass","ngStyle"],[3,"ngIf"]],template:function(c,u){1&c&&t.DNE(0,b,3,15,"button",0),2&c&&t.Y8G("ngIf",u.visible)},dependencies:()=>[s.YU,s.bT,s.T3,s.B3,_.M],styles:["@layer primeng{.p-scrolltop{position:fixed;bottom:20px;right:20px;display:flex;align-items:center;justify-content:center}.p-scrolltop-sticky{position:sticky}.p-scrolltop-sticky.p-link{margin-left:auto}}\n"],encapsulation:2,data:{animation:[(0,l.hZ)("animation",[(0,l.wk)("void",(0,l.iF)({opacity:0})),(0,l.wk)("open",(0,l.iF)({opacity:1})),(0,l.kY)("void => open",(0,l.i0)("{{showTransitionParams}}")),(0,l.kY)("open => void",(0,l.i0)("{{hideTransitionParams}}"))])]},changeDetection:0})}return i})(),S=(()=>{class i{static \u0275fac=function(c){return new(c||i)};static \u0275mod=t.$C({type:i});static \u0275inj=t.G2t({imports:[s.MD,_.M,r.Gg,r.Gg]})}return i})()},5716:(v,m,n)=>{n.d(m,{E:()=>t,k:()=>r});var l=n(177),s=n(4438);let t=(()=>{class o{styleClass;style;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";containerClass(){return{"p-skeleton p-component":!0,"p-skeleton-circle":"circle"===this.shape,"p-skeleton-none":"none"===this.animation}}get containerStyle(){return this.size?{...this.style,width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius,...this.style}}static \u0275fac=function(d){return new(d||o)};static \u0275cmp=s.VBU({type:o,selectors:[["p-skeleton"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},decls:1,vars:7,consts:[[3,"ngClass","ngStyle"]],template:function(d,a){1&d&&s.nrm(0,"div",0),2&d&&(s.HbH(a.styleClass),s.Y8G("ngClass",a.containerClass())("ngStyle",a.containerStyle),s.BMQ("data-pc-name","skeleton")("aria-hidden",!0)("data-pc-section","root"))},dependencies:[l.YU,l.B3],styles:['@layer primeng{.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:"";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n'],encapsulation:2,changeDetection:0})}return o})(),r=(()=>{class o{static \u0275fac=function(d){return new(d||o)};static \u0275mod=s.$C({type:o});static \u0275inj=s.G2t({imports:[l.MD]})}return o})()}}]);