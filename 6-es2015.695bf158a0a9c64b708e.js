(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"rp/+":function(n,l,u){"use strict";u.r(l);var t=u("8Y7J");class e{}var o=u("pMnS"),i=u("s7LF"),c=u("VTKs"),a=u("EtQq"),r=u("KDUW"),s=u("SVse"),b=u("0LF7"),d=u("kBGf");class g{constructor(n,l,u){this.reportService=n,this.screenWidthService=l,this.router=u,this.incidentComment="",this.listOfTags=["fire","accident","water"],this.selectedTags=[]}ngOnInit(){this.reportService.incidentComment&&(this.incidentComment=this.reportService.incidentComment,this.selectedTags=this.reportService.selectedTags)}selectTag(n){this.selectedTags.includes(n)||this.selectedTags.unshift(n)}removeTag(n){this.selectedTags=this.selectedTags.filter(l=>l!==n)}submitForm(n){this.reportService.setInfo(n.incidentComment,this.selectedTags),this.router.navigate(["/report/confirmation"])}}let p=(()=>{class n{constructor(){this.incidentComment="",this.selectedTags=[],window.sessionStorage.getItem("incidentComment")&&(this.incidentComment=window.sessionStorage.getItem("incidentComment"),this.selectedTags=window.sessionStorage.getItem("selectedTags").split(","))}setInfo(n,l){window.sessionStorage.setItem("incidentComment",n),window.sessionStorage.setItem("selectedTags",l),this.incidentComment=n,this.selectedTags=l}}return n.ngInjectableDef=t.Lb({factory:function(){return new n},token:n,providedIn:"root"}),n})();var m=u("6C7I"),f=u("iInd"),h=t.nb({encapsulation:0,styles:[[".main[_ngcontent-%COMP%]{min-height:87%;padding:0 15px 15px}.main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#ff4848;font-weight:700;margin-bottom:10px}.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:10px;color:#444;display:block}.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border-radius:4px;border:1px solid #a0a0a0;width:96%;padding:10px 0 0 10px;margin-bottom:20px}.main[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;padding:10px;margin-top:15px}.main[_ngcontent-%COMP%]   ul.selected-tags-list[_ngcontent-%COMP%]{display:flex;list-style:none;flex-wrap:wrap;margin:0;padding:0}.main[_ngcontent-%COMP%]   ul.selected-tags-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-radius:50px;background-color:#ff4848;color:#fff;padding:8px 15px;font-weight:700;margin-right:10px;margin-top:15px}.main[_ngcontent-%COMP%]   ul.selected-tags-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-radius:100px;color:#ff4848;background-color:#fff;padding:2px 7px;margin-left:10px;cursor:pointer}.main[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;color:#fff;font-size:16px;font-weight:700;background-color:#10d610;padding:19px;border:none;margin-top:30px}.main[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{background-color:#9e9e9e}"]],data:{}});function C(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,3,"option",[],null,null,null,null,null)),t.ob(1,147456,null,0,i.l,[t.k,t.B,[8,null]],{value:[0,"value"]},null),t.ob(2,147456,null,0,i.q,[t.k,t.B,[8,null]],{value:[0,"value"]},null),(n()(),t.Gb(3,null,["",""]))],(function(n,l){n(l,1,0,t.tb(1,"",l.context.$implicit,"")),n(l,2,0,t.tb(1,"",l.context.$implicit,""))}),(function(n,l){n(l,3,0,l.context.$implicit)}))}function v(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,3,"li",[["class","single-tag"]],null,null,null,null,null)),(n()(),t.Gb(1,null,[" "," "])),(n()(),t.pb(2,0,null,null,1,"span",[],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.removeTag(n.context.$implicit)&&t),t}),null,null)),(n()(),t.Gb(-1,null,["\xd7"]))],null,(function(n,l){n(l,1,0,l.context.$implicit)}))}function M(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,42,"div",[],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,1,"app-navbar",[],null,null,null,c.b,c.a)),t.ob(2,114688,null,0,a.a,[r.a],null,null),(n()(),t.pb(3,0,null,null,39,"div",[["class","main"]],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,38,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,u){var e=!0,o=n.component;return"submit"===l&&(e=!1!==t.Bb(n,6).onSubmit(u)&&e),"reset"===l&&(e=!1!==t.Bb(n,6).onReset()&&e),"ngSubmit"===l&&(e=!1!==o.submitForm(t.Bb(n,6).value)&&e),e}),null,null)),t.ob(5,16384,null,0,i.r,[],null,null),t.ob(6,4210688,[["form",4]],0,i.j,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Db(2048,null,i.b,null,[i.j]),t.ob(8,16384,null,0,i.i,[[4,i.b]],null,null),(n()(),t.pb(9,0,null,null,13,"div",[],null,null,null,null,null)),(n()(),t.pb(10,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Gb(-1,null,["Describe Incident"])),(n()(),t.pb(12,0,null,null,10,"div",[],null,null,null,null,null)),(n()(),t.pb(13,0,null,null,1,"label",[["for","incident-comment"]],null,null,null,null,null)),(n()(),t.Gb(-1,null,["Comments about incident"])),(n()(),t.pb(15,0,null,null,7,"textarea",[["cols","30"],["id","incident-comment"],["name","incidentComment"],["placeholder","Briefly describe the incident e.g Highway accident with 3 severe casualties."],["required",""],["rows","10"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,u){var e=!0,o=n.component;return"input"===l&&(e=!1!==t.Bb(n,16)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.Bb(n,16).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.Bb(n,16)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.Bb(n,16)._compositionEnd(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.incidentComment=u)&&e),e}),null,null)),t.ob(16,16384,null,0,i.c,[t.B,t.k,[2,i.a]],null,null),t.ob(17,16384,null,0,i.n,[],{required:[0,"required"]},null),t.Db(1024,null,i.e,(function(n){return[n]}),[i.n]),t.Db(1024,null,i.f,(function(n){return[n]}),[i.c]),t.ob(20,671744,[["comment",4]],0,i.k,[[2,i.b],[6,i.e],[8,null],[6,i.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Db(2048,null,i.g,null,[i.k]),t.ob(22,16384,null,0,i.h,[[4,i.g]],null,null),(n()(),t.pb(23,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t.pb(24,0,null,null,16,"div",[],null,null,null,null,null)),(n()(),t.pb(25,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Gb(-1,null,["Add tags"])),(n()(),t.pb(27,0,null,null,13,"div",[],null,null,null,null,null)),(n()(),t.pb(28,0,null,null,1,"span",[["class","tag"]],null,null,null,null,null)),(n()(),t.Gb(-1,null,["Tags keep responders more informed"])),(n()(),t.pb(30,0,null,null,6,"select",[["id","add-tags"],["name",""]],null,[[null,"change"]],(function(n,l,u){var t=!0;return"change"===l&&(t=!1!==n.component.selectTag(u.target.value)&&t),t}),null,null)),(n()(),t.pb(31,0,null,null,3,"option",[["disabled",""],["selected",""]],null,null,null,null,null)),t.ob(32,147456,null,0,i.l,[t.k,t.B,[8,null]],null,null),t.ob(33,147456,null,0,i.q,[t.k,t.B,[8,null]],null,null),(n()(),t.Gb(-1,null,["Select Tags"])),(n()(),t.eb(16777216,null,null,1,null,C)),t.ob(36,278528,null,0,s.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(n()(),t.pb(37,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),t.pb(38,0,null,null,2,"ul",[["class","selected-tags-list"]],null,null,null,null,null)),(n()(),t.eb(16777216,null,null,1,null,v)),t.ob(40,278528,null,0,s.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(n()(),t.pb(41,0,null,null,1,"button",[["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t.Gb(-1,null,["Continue"]))],(function(n,l){var u=l.component;n(l,2,0),n(l,17,0,""),n(l,20,0,"incidentComment",u.incidentComment),n(l,36,0,u.listOfTags),n(l,40,0,u.selectedTags)}),(function(n,l){n(l,4,0,t.Bb(l,8).ngClassUntouched,t.Bb(l,8).ngClassTouched,t.Bb(l,8).ngClassPristine,t.Bb(l,8).ngClassDirty,t.Bb(l,8).ngClassValid,t.Bb(l,8).ngClassInvalid,t.Bb(l,8).ngClassPending),n(l,15,0,t.Bb(l,17).required?"":null,t.Bb(l,22).ngClassUntouched,t.Bb(l,22).ngClassTouched,t.Bb(l,22).ngClassPristine,t.Bb(l,22).ngClassDirty,t.Bb(l,22).ngClassValid,t.Bb(l,22).ngClassInvalid,t.Bb(l,22).ngClassPending),n(l,41,0,t.Bb(l,20).invalid)}))}function O(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,1,"app-large-device-error",[],null,null,null,b.b,b.a)),t.ob(1,114688,null,0,d.a,[],null,null)],(function(n,l){n(l,1,0)}),null)}function P(n){return t.Hb(0,[(n()(),t.eb(16777216,null,null,1,null,M)),t.ob(1,16384,null,0,s.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,null,1,null,O)),t.ob(3,16384,null,0,s.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var u=l.component;n(l,1,0,u.screenWidthService.screenWidth<=450),n(l,3,0,u.screenWidthService.screenWidth>450)}),null)}function _(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,1,"app-reporters-dashboard",[],null,null,null,P,h)),t.ob(1,114688,null,0,g,[p,m.a,f.k],null,null)],(function(n,l){n(l,1,0)}),null)}var x=t.lb("app-reporters-dashboard",g,_,{},{},[]),k=u("fNgX"),w=u("Nv++"),B=u("cUpR"),T=u("wHSu");class S{constructor(n,l){this.screenWidthService=n,this.reportService=l,this.faChevronLeft=T.b}ngOnInit(){}}var y=t.nb({encapsulation:0,styles:[['.main[_ngcontent-%COMP%]{padding:0 15px;margin-top:30px;color:#444}.main[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:30px 0}.main[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]{font-size:12px}.main[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{margin-right:5px}.main[_ngcontent-%COMP%]   .incident-comment-container[_ngcontent-%COMP%]{margin-bottom:30px}.main[_ngcontent-%COMP%]   .incident-comment-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0;margin:0}.main[_ngcontent-%COMP%]   .tag-list[_ngcontent-%COMP%]{padding:0;margin:0;list-style:none;display:flex}.main[_ngcontent-%COMP%]   .tag-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:10px}.main[_ngcontent-%COMP%]   .tag-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after{content:","}.main[_ngcontent-%COMP%]   .tag-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after{content:""}.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{color:#ff4848;font-weight:700;margin-bottom:10px;display:block}.bottom-section[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%;padding:15px 15px 10px;background-color:#f4f4f4}.bottom-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:700}.bottom-section[_ngcontent-%COMP%]   div#location[_ngcontent-%COMP%]{width:100%;margin-top:12px}.bottom-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:92%;color:#fff;font-size:16px;font-weight:700;background-color:#10d610;padding:19px;border:none;margin-top:30px}#makeAnonymous[_ngcontent-%COMP%]:checked   #makeAnonymous[_ngcontent-%COMP%]{display:none}']],data:{}});function I(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t.Gb(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.context.$implicit)}))}function G(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,33,"div",[],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,1,"app-navbar",[],null,null,null,c.b,c.a)),t.ob(2,114688,null,0,a.a,[r.a],null,null),(n()(),t.pb(3,0,null,null,22,"div",[["class","main"]],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,4,"div",[["class","back-link"],["routerLink","/report/dashboard"]],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t.Bb(n,5).onClick()&&e),e}),null,null)),t.ob(5,16384,null,0,f.l,[f.k,f.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),(n()(),t.pb(6,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[1,"title",0],[8,"innerHTML",1]],null,null,k.d,k.c)),t.ob(7,573440,null,0,w.c,[B.b,w.a,w.d,[2,w.i]],{icon:[0,"icon"]},null),(n()(),t.Gb(-1,null,[" Back "])),(n()(),t.pb(9,0,null,null,16,"div",[["style","margin-top: 40px;"]],null,null,null,null,null)),(n()(),t.pb(10,0,null,null,4,"div",[["class","incident-comment-container"]],null,null,null,null,null)),(n()(),t.pb(11,0,null,null,1,"label",[["for","incident-comment"]],null,null,null,null,null)),(n()(),t.Gb(-1,null,["Incident comment"])),(n()(),t.pb(13,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Gb(14,null,["",""])),(n()(),t.pb(15,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),t.pb(16,0,null,null,1,"label",[["for","tags"]],null,null,null,null,null)),(n()(),t.Gb(-1,null,["Tags"])),(n()(),t.pb(18,0,null,null,2,"ul",[["class","tag-list"]],null,null,null,null,null)),(n()(),t.eb(16777216,null,null,1,null,I)),t.ob(20,278528,null,0,s.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(n()(),t.pb(21,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t.pb(22,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),t.pb(23,0,null,null,0,"input",[["id","makeAnonymous"],["name","makeAnonymous"],["type","checkbox"]],null,null,null,null,null)),(n()(),t.pb(24,0,null,null,1,"label",[["for","makeAnonymous"]],null,null,null,null,null)),(n()(),t.Gb(-1,null,["Make me anonymous"])),(n()(),t.pb(26,0,null,null,7,"div",[["class","bottom-section"]],null,null,null,null,null)),(n()(),t.pb(27,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),t.pb(28,0,null,null,1,"label",[["for","location"]],null,null,null,null,null)),(n()(),t.Gb(-1,null,["Your location"])),(n()(),t.pb(30,0,null,null,1,"div",[["id","location"]],null,null,null,null,null)),(n()(),t.Gb(-1,null,["xyz avenue"])),(n()(),t.pb(32,0,null,null,1,"button",[],null,null,null,null,null)),(n()(),t.Gb(-1,null,["Send Report"]))],(function(n,l){var u=l.component;n(l,2,0),n(l,5,0,"/report/dashboard"),n(l,7,0,u.faChevronLeft),n(l,20,0,u.reportService.selectedTags)}),(function(n,l){var u=l.component;n(l,6,0,t.Bb(l,7).title,t.Bb(l,7).renderedIconHTML),n(l,14,0,u.reportService.incidentComment)}))}function z(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,1,"app-large-device-error",[],null,null,null,b.b,b.a)),t.ob(1,114688,null,0,d.a,[],null,null)],(function(n,l){n(l,1,0)}),null)}function H(n){return t.Hb(0,[(n()(),t.eb(16777216,null,null,1,null,G)),t.ob(1,16384,null,0,s.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,null,1,null,z)),t.ob(3,16384,null,0,s.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var u=l.component;n(l,1,0,u.screenWidthService.screenWidth<=450),n(l,3,0,u.screenWidthService.screenWidth>450)}),null)}function j(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,1,"app-report-confirmation",[],null,null,null,H,y)),t.ob(1,114688,null,0,S,[m.a,p],null,null)],(function(n,l){n(l,1,0)}),null)}var q=t.lb("app-report-confirmation",S,j,{},{},[]);class F{}var W=u("PCNd");u.d(l,"ReportersDashboardModuleNgFactory",(function(){return D}));var D=t.mb(e,[],(function(n){return t.yb([t.zb(512,t.j,t.X,[[8,[o.a,x,q,k.b,k.a]],[3,t.j],t.v]),t.zb(4608,s.l,s.k,[t.s,[2,s.t]]),t.zb(4608,i.p,i.p,[]),t.zb(1073742336,s.b,s.b,[]),t.zb(1073742336,f.o,f.o,[[2,f.t],[2,f.k]]),t.zb(1073742336,F,F,[]),t.zb(1073742336,w.j,w.j,[]),t.zb(1073742336,W.a,W.a,[]),t.zb(1073742336,i.o,i.o,[]),t.zb(1073742336,i.d,i.d,[]),t.zb(1073742336,e,e,[]),t.zb(1024,f.i,(function(){return[[{path:"dashboard",component:g},{path:"confirmation",component:S},{path:"",redirectTo:"dashboard",pathMatch:"full"}]]}),[])])}))}}]);