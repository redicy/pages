"use strict";(self.webpackChunkseller=self.webpackChunkseller||[]).push([[938],{9058:(B,I,i)=>{i.d(I,{b:()=>P});var g=i(4438),c=i(4153),v=i(6557);let P=(()=>{class t{constructor(n,M){this.productService=n,this.productCommandHandler=M}findProducts(n){return this.productService.findProducts(n)}findProductPackages(n){return this.productService.findProductPackages(n)}updateProductPackage(n){return this.productCommandHandler.updateProductPackage(n)}updateProduct(n){return this.productCommandHandler.updateProduct(n)}removeProductPackage(n){return this.productCommandHandler.removeProductPackage(n)}removeProduct(n){return this.productCommandHandler.removeProduct(n)}addProductPackage(n){return this.productCommandHandler.addProductPackage(n)}addProduct(n){return this.productCommandHandler.addProduct(n)}static{this.\u0275fac=function(M){return new(M||t)(g.KVO(c.D.ProductClient),g.KVO(v.X.ProductClient))}}static{this.\u0275prov=g.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})()},7546:(B,I,i)=>{i.r(I),i.d(I,{ProductModule:()=>$});var g=i(177),c=i(6160),v=i(9909),P=i(467),t=i(4438),y=i(5779),n=i(9417),M=i(9998),C=i(9615),h=i(1141),p=i(1802);function a(r,b){}function u(r,b){}function l(r,b){1&r&&t.DNE(0,u,0,0,"ng-template",22)}function E(r,b){if(1&r&&(t.qSk(),t.qex(0),t.nrm(1,"image"),t.bVm()),2&r){const d=b.$implicit,e=b.index,s=t.XpG(3);t.R7$(),t.BMQ("href",d.image)("x",e*s.width)("width",s.width)("height",s.height)}}function A(r,b){if(1&r&&(t.qSk(),t.j41(0,"svg",25),t.nrm(1,"animate",26),t.DNE(2,E,2,4,"ng-container",27),t.nrm(3,"image"),t.k0s()),2&r){const d=b.ngIf,e=t.XpG(2);t.R7$(),t.BMQ("values",d.values)("keyTimes",d.keyTimes.join(";"))("dur",e.duration)("repeatCount",e.recording?"1":"indefinite"),t.R7$(),t.Y8G("ngForOf",e.images),t.R7$(),t.BMQ("href",e.images[0].image)("x",e.images.length*e.width)("width",e.width)("height",e.height)}}function R(r,b){if(1&r&&(t.j41(0,"div",23),t.DNE(1,A,4,9,"svg",24),t.k0s()),2&r){const d=t.XpG();t.R7$(),t.Y8G("ngIf",d.getAnimation())}}const F=[{path:"image-editor",loadChildren:()=>Promise.all([i.e(158),i.e(146)]).then(i.bind(i,146)).then(r=>r.ProductImageEditorModule)},{path:"edit",component:(()=>{class r{static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275cmp=t.VBU({type:r,selectors:[["app-product-editor"]],decls:2,vars:0,template:function(e,s){1&e&&(t.j41(0,"p"),t.EFF(1,"product-editor works!"),t.k0s())}})}}return r})()},{path:"list",loadChildren:()=>i.e(937).then(i.bind(i,1937)).then(r=>r.ProductListModule)},{path:"animator",component:(()=>{class r{constructor(d){this.messageService=d,this.width=300,this.height=300,this.frameRate=30,this.animationDuration=1,this.exposureDuration=3,this.recording=!1,this.recordButtonEnabled=!1,this.showVideo=!1}get duration(){return this.images?.length>0?this.images?.length*(this.exposureDuration+this.animationDuration)+this.exposureDuration:0}getAnimation(){const d=[],e=[0],s=this.duration,f=this.exposureDuration/s,o=this.animationDuration/s;let m=0;return this.images.forEach((D,U)=>{const w=`${U*this.width} 0 ${this.width} ${this.height}`;d.push(w),d.push(w),m+=f,e.push(Math.round(1e3*m)/1e3),m+=o,e.push(Math.round(1e3*m)/1e3)}),d.push(`${this.images.length*this.width} 0 ${this.width} ${this.height}`),d.push(`${this.images.length*this.width} 0 ${this.width} ${this.height}`),e.push(1),{values:d.join(";"),keyTimes:e}}readImageContent(d,e){const s=new FileReader;s.onload=f=>{e(f.target.result)},s.readAsDataURL(d)}onImagesSelected(d){const e=[];let s=!1;for(const f of d.currentFiles){const o={fileName:f.name,image:""};this.readImageContent(f,m=>{if(o.image=m,!s){s=!0;const D=new Image;D.onload=()=>{this.width=D.width,this.height=D.height},D.src=m}}),e.push(o)}this.recordButtonEnabled=!!e.length,this.images=e}delay(d){return new Promise(e=>setTimeout(e,d))}generateVideo(){return(0,P.A)(function*(){})()}removeAnimation(d){d.querySelectorAll("animate").forEach(e=>e.parentNode.removeChild(e))}traverse(d,e){let s=!1;const f=(o,m)=>`${o.x.toFixed(m)} ${o.y.toFixed(m)} ${o.width.toFixed(m)} ${o.height.toFixed(m)}`;for(const o in e)if(e[o]?.animVal)switch(e[o][Symbol.toStringTag]){case"SVGAnimatedRect":{const m=f(e[o].baseVal,0),D=f(d[o].animVal,0);m!=D&&(s=!0,e.setAttribute(o,D))}break;case"SVGAnimatedString":{const D=d[o].animVal;e[o].baseVal!=D&&(s=!0,e.setAttribute(o,D))}}for(let o=0,m=0;o<e.children.length;o++,m++){for(;o<d.children.length&&"animate"==d.children[o].nodeName;)o++;s||=this.traverse(d.children[o],e.children[m])}return s}static{this.\u0275fac=function(e){return new(e||r)(t.rXU(y.bg))}}static{this.\u0275cmp=t.VBU({type:r,selectors:[["app-product-image-animator"]],decls:34,vars:23,consts:[["multiple","true","chooseLabel","\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438","accept","image/*",3,"onSelect","showUploadButton","disabled","showCancelButton"],["pTemplate","file"],[4,"ngIf"],[1,"card","flex","flex-wrap","gap-3","p-fluid"],[1,"flex-auto"],["for","width",1,"mb-2","block","font-bold"],["inputId","width",3,"ngModelChange","ngModel","disabled"],["for","height",1,"mb-2","block","font-bold"],["inputId","height",3,"ngModelChange","ngModel","disabled"],["for","animationDuration",1,"mb-2","block","font-bold"],["inputId","animationDuration",3,"ngModelChange","ngModel","step","maxFractionDigits","disabled"],["for","exposureDuration",1,"mb-2","block","font-bold"],["inputId","exposureDuration",3,"ngModelChange","ngModel","step","maxFractionDigits","disabled"],["for","frameRate",1,"mb-2","block","font-bold"],["inputId","frameRate",3,"ngModelChange","ngModel","disabled"],["for","duration",1,"mb-2","block","font-bold"],["inputId","duration",3,"ngModel","maxFractionDigits","disabled"],[1,"card"],["label","\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0438\u0434\u0435\u043e",3,"click","disabled"],[1,"flex"],["style","max-width: 300px",4,"ngIf"],["id","video"],["pTemplate","content"],[2,"max-width","300px"],["id","preview","xmlns","http://www.w3.org/2000/svg","width","100%","height","100%","version","1.1",4,"ngIf"],["id","preview","xmlns","http://www.w3.org/2000/svg","width","100%","height","100%","version","1.1"],["attributeName","viewBox","begin","0s"],[4,"ngFor","ngForOf"]],template:function(e,s){1&e&&(t.nrm(0,"p-toast"),t.j41(1,"p-fileUpload",0),t.bIt("onSelect",function(o){return s.onImagesSelected(o)}),t.DNE(2,a,0,0,"ng-template",1)(3,l,1,0,null,2),t.k0s(),t.j41(4,"div",3)(5,"div",4)(6,"label",5),t.EFF(7,"\u0428\u0438\u0440\u0438\u043d\u0430"),t.k0s(),t.j41(8,"p-inputNumber",6),t.mxI("ngModelChange",function(o){return t.DH7(s.width,o)||(s.width=o),o}),t.k0s()(),t.j41(9,"div",4)(10,"label",7),t.EFF(11,"\u0412\u044b\u0441\u043e\u0442\u0430"),t.k0s(),t.j41(12,"p-inputNumber",8),t.mxI("ngModelChange",function(o){return t.DH7(s.height,o)||(s.height=o),o}),t.k0s()(),t.j41(13,"div",4)(14,"label",9),t.EFF(15,"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0438"),t.k0s(),t.j41(16,"p-inputNumber",10),t.mxI("ngModelChange",function(o){return t.DH7(s.animationDuration,o)||(s.animationDuration=o),o}),t.k0s()(),t.j41(17,"div",4)(18,"label",11),t.EFF(19,"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u043a\u0430\u0437\u0430"),t.k0s(),t.j41(20,"p-inputNumber",12),t.mxI("ngModelChange",function(o){return t.DH7(s.exposureDuration,o)||(s.exposureDuration=o),o}),t.k0s()(),t.j41(21,"div",4)(22,"label",13),t.EFF(23,"Fps"),t.k0s(),t.j41(24,"p-inputNumber",14),t.mxI("ngModelChange",function(o){return t.DH7(s.frameRate,o)||(s.frameRate=o),o}),t.k0s()(),t.j41(25,"div",4)(26,"label",15),t.EFF(27,"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0440\u043e\u043b\u0438\u043a\u0430"),t.k0s(),t.nrm(28,"p-inputNumber",16),t.k0s()(),t.j41(29,"div",17)(30,"p-button",18),t.bIt("click",function(){return s.generateVideo()}),t.k0s(),t.j41(31,"div",19),t.DNE(32,R,2,1,"div",20),t.nrm(33,"div",21),t.k0s()()),2&e&&(t.R7$(),t.Y8G("showUploadButton",!1)("disabled",s.recording)("showCancelButton",!1),t.R7$(2),t.Y8G("ngIf",!1),t.R7$(5),t.R50("ngModel",s.width),t.Y8G("disabled",!s.recordButtonEnabled),t.R7$(4),t.R50("ngModel",s.height),t.Y8G("disabled",!s.recordButtonEnabled),t.R7$(4),t.R50("ngModel",s.animationDuration),t.Y8G("step",.1)("maxFractionDigits",2)("disabled",!s.recordButtonEnabled),t.R7$(4),t.R50("ngModel",s.exposureDuration),t.Y8G("step",.1)("maxFractionDigits",2)("disabled",!s.recordButtonEnabled),t.R7$(4),t.R50("ngModel",s.frameRate),t.Y8G("disabled",!s.recordButtonEnabled),t.R7$(4),t.Y8G("ngModel",s.duration)("maxFractionDigits",2)("disabled",!0),t.R7$(2),t.Y8G("disabled",!s.recordButtonEnabled),t.R7$(2),t.Y8G("ngIf",s.images))},dependencies:[n.BC,n.vS,g.Sq,g.bT,y.Ei,M.y8,C.N,h.$n,p.YI]})}}return r})()}];let T=(()=>{class r{static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275mod=t.$C({type:r})}static{this.\u0275inj=t.G2t({imports:[v.iI.forChild(F),v.iI]})}}return r})();var G=i(9058),S=i(544),x=i(2242),j=i(4799),k=i(4153),N=i(6557),O=i(4602);let $=(()=>{class r{static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275mod=t.$C({type:r})}static{this.\u0275inj=t.G2t({providers:[k.D.ProductClient,N.X.ProductClient,G.b,y.td],imports:[n.YN,g.MD,T,S.bG,M.MB,C.e,O.k,c.I,p.O3,x.u,h.tm,j.F]})}}return r})()},8839:(B,I,i)=>{i.d(I,{b:()=>h,E:()=>C});var g=i(8359);class c extends g.yU{constructor(a,u){super()}schedule(a,u=0){return this}}const v={setInterval(p,a,...u){const{delegate:l}=v;return l?.setInterval?l.setInterval(p,a,...u):setInterval(p,a,...u)},clearInterval(p){const{delegate:a}=v;return(a?.clearInterval||clearInterval)(p)},delegate:void 0};var P=i(7908),y=i(6129);class n{constructor(a,u=n.now){this.schedulerActionCtor=a,this.now=u}schedule(a,u=0,l){return new this.schedulerActionCtor(this,a).schedule(l,u)}}n.now=y.U.now;const C=new class M extends n{constructor(a,u=n.now){super(a,u),this.actions=[],this._active=!1}flush(a){const{actions:u}=this;if(this._active)return void u.push(a);let l;this._active=!0;do{if(l=a.execute(a.state,a.delay))break}while(a=u.shift());if(this._active=!1,l){for(;a=u.shift();)a.unsubscribe();throw l}}}(class t extends c{constructor(a,u){super(a,u),this.scheduler=a,this.work=u,this.pending=!1}schedule(a,u=0){var l;if(this.closed)return this;this.state=a;const E=this.id,A=this.scheduler;return null!=E&&(this.id=this.recycleAsyncId(A,E,u)),this.pending=!0,this.delay=u,this.id=null!==(l=this.id)&&void 0!==l?l:this.requestAsyncId(A,this.id,u),this}requestAsyncId(a,u,l=0){return v.setInterval(a.flush.bind(a,this),l)}recycleAsyncId(a,u,l=0){if(null!=l&&this.delay===l&&!1===this.pending)return u;null!=u&&v.clearInterval(u)}execute(a,u){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const l=this._execute(a,u);if(l)return l;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(a,u){let E,l=!1;try{this.work(a)}catch(A){l=!0,E=A||new Error("Scheduled action threw falsy error")}if(l)return this.unsubscribe(),E}unsubscribe(){if(!this.closed){const{id:a,scheduler:u}=this,{actions:l}=u;this.work=this.state=this.scheduler=null,this.pending=!1,(0,P.o)(l,this),null!=a&&(this.id=this.recycleAsyncId(u,a,null)),this.delay=null,super.unsubscribe()}}}),h=C},6160:(B,I,i)=>{i.d(I,{I:()=>y,M:()=>t});var g=i(177),c=i(4438),v=i(5779);const P=["*"];let t=(()=>{class n{style;styleClass;static \u0275fac=function(h){return new(h||n)};static \u0275cmp=c.VBU({type:n,selectors:[["p-inputGroup"]],hostAttrs:[1,"p-element","p-inputgroup"],inputs:{style:"style",styleClass:"styleClass"},ngContentSelectors:P,decls:2,vars:3,consts:[[1,"p-inputgroup",3,"ngClass","ngStyle"]],template:function(h,p){1&h&&(c.NAR(),c.j41(0,"div",0),c.SdG(1),c.k0s()),2&h&&(c.Y8G("ngClass",p.styleClass)("ngStyle",p.style),c.BMQ("data-pc-name","inputgroup"))},dependencies:[g.YU,g.B3],encapsulation:2})}return n})(),y=(()=>{class n{static \u0275fac=function(h){return new(h||n)};static \u0275mod=c.$C({type:n});static \u0275inj=c.G2t({imports:[g.MD,v.Gg]})}return n})()},4602:(B,I,i)=>{i.d(I,{S:()=>t,k:()=>y});var g=i(177),c=i(4438),v=i(5779);const P=["*"];let t=(()=>{class n{style;styleClass;static \u0275fac=function(h){return new(h||n)};static \u0275cmp=c.VBU({type:n,selectors:[["p-inputGroupAddon"]],hostAttrs:[1,"p-element","p-inputgroup-addon"],inputs:{style:"style",styleClass:"styleClass"},ngContentSelectors:P,decls:2,vars:3,consts:[[3,"ngClass","ngStyle"]],template:function(h,p){1&h&&(c.NAR(),c.j41(0,"div",0),c.SdG(1),c.k0s()),2&h&&(c.Y8G("ngClass",p.styleClass)("ngStyle",p.style),c.BMQ("data-pc-name","inputgroupaddon"))},dependencies:[g.YU,g.B3],encapsulation:2})}return n})(),y=(()=>{class n{static \u0275fac=function(h){return new(h||n)};static \u0275mod=c.$C({type:n});static \u0275inj=c.G2t({imports:[g.MD,v.Gg]})}return n})()}}]);