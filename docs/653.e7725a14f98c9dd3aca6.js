(self.webpackChunkstar_wars=self.webpackChunkstar_wars||[]).push([[653],{5653:(e,t,i)=>{"use strict";i.r(t),i.d(t,{DashboardModule:()=>Y});var s=i(1116),n=i(8272),r=i(3559),c=i(8318),a=i(8470),o=i(5024),l=i(9996);function p(e,t,i,s){return(0,o.m)(i)&&(s=i,i=void 0),s?p(e,t,i).pipe((0,l.U)(e=>(0,a.k)(e)?s(...e):s(e))):new c.y(s=>{u(e,t,function(e){s.next(arguments.length>1?Array.prototype.slice.call(arguments):e)},s,i)})}function u(e,t,i,s,n){let r;if(function(e){return e&&"function"==typeof e.addEventListener&&"function"==typeof e.removeEventListener}(e)){const s=e;e.addEventListener(t,i,n),r=()=>s.removeEventListener(t,i,n)}else if(function(e){return e&&"function"==typeof e.on&&"function"==typeof e.off}(e)){const s=e;e.on(t,i),r=()=>s.off(t,i)}else if(function(e){return e&&"function"==typeof e.addListener&&"function"==typeof e.removeListener}(e)){const s=e;e.addListener(t,i),r=()=>s.removeListener(t,i)}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(let r=0,c=e.length;r<c;r++)u(e[r],t,i,s,n)}s.add(r)}var h=i(6882);function d(e){return t=>t.lift(new f(e))}class f{constructor(e){this.notifier=e}call(e,t){const i=new m(e),s=(0,h.ft)(this.notifier,new h.IY(i));return s&&!i.seenValue?(i.add(s),t.subscribe(i)):i}}class m extends h.Ds{constructor(e){super(e),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var g=i(6673),x=i(8277);const b=new(i(1098).v)(x.o);class v{constructor(e,t){this.dueTime=e,this.scheduler=t}call(e,t){return t.subscribe(new w(e,this.dueTime,this.scheduler))}}class w extends g.L{constructor(e,t,i){super(e),this.dueTime=t,this.scheduler=i,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(Z,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:e}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}}clearDebounce(){const e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)}}function Z(e){e.debouncedNext()}var O=i(8720),_=i(7368),T=i(1036),y=i(3020);function C(e,t){if(1&e&&(_.TgZ(0,"option",11),_._uU(1),_.qZA()),2&e){const e=t.$implicit;_.Q6J("value",e.name),_.xp6(1),_.Oqu(null==e?null:e.name)}}const A=function(e){return["../characters/",e]};function q(e,t){if(1&e&&(_.TgZ(0,"a",12),_._uU(1),_.qZA()),2&e){const e=t.$implicit;_.Q6J("routerLink",_.VKq(2,A,t.index+1)),_.xp6(1),_.Oqu(null==e?null:e.name)}}let M=(()=>{class e{constructor(e,t){this.store=e,this.starWarService=t,this.character=null,this.specieList=[],this.characterList=[],this.lifeTimeObject=new r.xQ,this.store.select("people").pipe(d(this.lifeTimeObject)).subscribe(e=>{e&&!0===e.isLoaded&&(this.characterList=e.people)}),this.store.select("species").pipe(d(this.lifeTimeObject)).subscribe(e=>{e&&!0===e.isLoaded&&(this.specieList=e.species)}),p(this.character.nativeElement,"input").pipe((0,l.U)(e=>e.taret.value),function(e,t=b){return i=>i.lift(new v(e,t))}(500),(0,O.x)(),d(this.lifeTimeObject)).subscribe(e=>{})}onSpecie(e){this.starWarService.getSpeciesList(e).pipe(d(this.lifeTimeObject)).subscribe(t=>{console.log(`Specie type ${e}`,t.results)})}ngOnInit(){}ngOnDestroy(){this.lifeTimeObject.next(!0),this.lifeTimeObject.complete()}}return e.\u0275fac=function(t){return new(t||e)(_.Y36(T.yh),_.Y36(y.G))},e.\u0275cmp=_.Xpm({type:e,selectors:[["app-dashboard"]],inputs:{character:"character"},decls:14,vars:2,consts:[[1,"dashboard"],[1,"filter-wrapper"],["for","character"],["type","text","name","character"],["character",""],[1,"filter"],["for","specieType"],["name","specieType",3,"change"],["specieType",""],[3,"value",4,"ngFor","ngForOf"],["class","character",3,"routerLink",4,"ngFor","ngForOf"],[3,"value"],[1,"character",3,"routerLink"]],template:function(e,t){if(1&e){const e=_.EpF();_.TgZ(0,"div",0),_.TgZ(1,"div",1),_.TgZ(2,"div"),_.TgZ(3,"label",2),_._uU(4,"character:"),_.qZA(),_._UZ(5,"input",3,4),_.qZA(),_.TgZ(7,"div",5),_.TgZ(8,"label",6),_._uU(9,"Specie:"),_.qZA(),_.TgZ(10,"select",7,8),_.NdJ("change",function(){_.CHM(e);const i=_.MAs(11);return t.onSpecie(i.value)}),_.YNc(12,C,2,2,"option",9),_.qZA(),_.qZA(),_.qZA(),_.YNc(13,q,2,4,"a",10),_.qZA()}2&e&&(_.xp6(12),_.Q6J("ngForOf",t.specieList),_.xp6(1),_.Q6J("ngForOf",t.characterList))},directives:[s.sg,n.yS],styles:["[_nghost-%COMP%]{width:100%;padding:10px}.dashboard[_ngcontent-%COMP%]{align-items:center;justify-content:center}.character[_ngcontent-%COMP%], .dashboard[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.character[_ngcontent-%COMP%]{align-items:flex-start;max-width:360px;color:#000;text-decoration:none;padding:15px;margin:10px 0;word-wrap:break-word;border-radius:5px;box-shadow:0 0 10px #0000001a;transition:.3s}.character[_ngcontent-%COMP%]:hover{cursor:pointer;box-shadow:5px 5px 20px #0000004d;transform:scale(1.01)}"]}),e})();function j(e,t){if(1&e&&(_.TgZ(0,"span"),_._uU(1),_.qZA()),2&e){const e=t.index,i=_.oxw(2);_.xp6(1),_.hij(" ",i.mapCharacterData(e,"specie")," ")}}function L(e,t){if(1&e&&(_.TgZ(0,"span"),_._uU(1),_.qZA()),2&e){const e=t.index,i=_.oxw(2);_.xp6(1),_.hij(" ",i.mapCharacterData(e,"film")," ")}}function P(e,t){if(1&e&&(_.TgZ(0,"span"),_._uU(1),_.qZA()),2&e){const e=t.index,i=_.oxw(2);_.xp6(1),_.hij(" ",i.mapCharacterData(e,"spaceship")," ")}}function U(e,t){if(1&e&&(_.TgZ(0,"div",1),_.TgZ(1,"p",2),_.TgZ(2,"b"),_._uU(3,"Name: "),_.qZA(),_._uU(4),_.qZA(),_.TgZ(5,"p",2),_.TgZ(6,"b"),_._uU(7,"Species:"),_.qZA(),_.YNc(8,j,2,1,"span",3),_.qZA(),_._UZ(9,"hr"),_.TgZ(10,"p",2),_.TgZ(11,"b"),_._uU(12,"Movies:"),_.qZA(),_.YNc(13,L,2,1,"span",3),_.qZA(),_._UZ(14,"hr"),_.TgZ(15,"p",2),_.TgZ(16,"b"),_._uU(17,"Spaceships:"),_.qZA(),_.YNc(18,P,2,1,"span",3),_.qZA(),_.qZA()),2&e){const e=_.oxw();_.xp6(4),_.hij(" ",null==e.character?null:e.character.name," "),_.xp6(4),_.Q6J("ngForOf",null==e.character?null:e.character.species),_.xp6(5),_.Q6J("ngForOf",null==e.character?null:e.character.films),_.xp6(5),_.Q6J("ngForOf",null==e.character?null:e.character.starships)}}let k=(()=>{class e{constructor(e){this.store=e,this.character=null,this.movies=null,this.spaceships=null,this.species=null,this.lifeTimeObject=new r.xQ,this.store.select("movies").pipe(d(this.lifeTimeObject)).subscribe(e=>{e&&!0===e.isLoaded&&(this.movies=e.movies)}),this.store.select("spaceships").pipe(d(this.lifeTimeObject)).subscribe(e=>{e&&!0===e.isLoaded&&(this.spaceships=e.spaceships)}),this.store.select("species").pipe(d(this.lifeTimeObject)).subscribe(e=>{e&&!0===e.isLoaded&&(this.species=e.species)})}mapCharacterData(e,t){switch(t){case"specie":return null!==this.species?this.species[e].name:"";case"spaceship":return null!==this.spaceships?this.spaceships[e].name:"";case"film":return null!==this.movies?this.movies[e].title:"";default:return""}}ngOnInit(){}ngOnDestroy(){this.lifeTimeObject.next(!0),this.lifeTimeObject.complete()}}return e.\u0275fac=function(t){return new(t||e)(_.Y36(T.yh))},e.\u0275cmp=_.Xpm({type:e,selectors:[["app-character"]],inputs:{character:"character"},decls:1,vars:1,consts:[["class","card",4,"ngIf"],[1,"card"],[1,"title"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&_.YNc(0,U,19,4,"div",0),2&e&&_.Q6J("ngIf",t.character)},directives:[s.O5,s.sg],styles:["[_nghost-%COMP%]{flex:0 0 25%;display:flex;align-items:center;justify-content:center;margin:15px 0}@media (max-width:768px){[_nghost-%COMP%]{flex:1 1 100%}}.card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;max-width:360px;width:100%;padding:10px;word-wrap:break-word;border-radius:5px;box-shadow:0 0 10px #0000001a;transition:.3s}.card[_ngcontent-%COMP%]:hover{cursor:pointer;box-shadow:5px 5px 20px #0000004d;transform:scale(1.01)}.card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:3px;word-break:break-word}"]}),e})();function S(e,t){if(1&e&&(_.TgZ(0,"div",4),_._UZ(1,"app-character",5),_.qZA()),2&e){const e=_.oxw();_.xp6(1),_.Q6J("character",e.character)}}const J=[{path:"characters",component:M},{path:"characters/:id",component:(()=>{class e{constructor(e,t,i){this.route=e,this.router=t,this.starWarsService=i,this.character=null,this.lifeTimeObject=new r.xQ,this.router.params.subscribe(e=>{this.starWarsService.getCharacter(e.id).pipe(d(this.lifeTimeObject)).subscribe(e=>{this.character=e})})}goBack(){this.route.navigate(["../"])}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(_.Y36(n.F0),_.Y36(n.gz),_.Y36(y.G))},e.\u0275cmp=_.Xpm({type:e,selectors:[["app-current"]],decls:5,vars:1,consts:[[1,"current-item"],[1,"current-item__navigation"],[1,"current-item__button",3,"click"],["class","character-wrapper",4,"ngIf"],[1,"character-wrapper"],[3,"character"]],template:function(e,t){1&e&&(_.TgZ(0,"div",0),_.TgZ(1,"div",1),_.TgZ(2,"button",2),_.NdJ("click",function(){return t.goBack()}),_._uU(3,"Back"),_.qZA(),_.qZA(),_.YNc(4,S,2,1,"div",3),_.qZA()),2&e&&(_.xp6(4),_.Q6J("ngIf",t.character))},directives:[s.O5,k],styles:["[_nghost-%COMP%]{width:100%;padding:10px}.current-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%}.current-item[_ngcontent-%COMP%]   .current-item__navigation[_ngcontent-%COMP%]{max-width:460px;width:100%;display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.current-item[_ngcontent-%COMP%]   .current-item__button[_ngcontent-%COMP%]{width:100px;padding:10px;border:1px solid #d2d2d2;border-radius:3px;background:#0000;box-shadow:0 0 10px #0000001a;transition:.3s}.current-item[_ngcontent-%COMP%]   .current-item__button[_ngcontent-%COMP%]:hover{cursor:pointer;box-shadow:5px 5px 20px #0000004d;transform:scale(1.01)}"]}),e})()},{path:"",redirectTo:"characters",pathMatch:"full"},{path:"**",redirectTo:"characters",pathMatch:"full"}];let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=_.oAB({type:e}),e.\u0275inj=_.cJS({imports:[[n.Bz.forChild(J)],n.Bz]}),e})(),Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=_.oAB({type:e,bootstrap:[M]}),e.\u0275inj=_.cJS({providers:[],imports:[[s.ez,N]]}),e})()}}]);