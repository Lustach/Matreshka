(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about","chunk-2d2bb58c"],{"0789":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return h}));n("99af");var r=n("d9f7");function a(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return(t=Array()).concat.apply(t,[e].concat(r))}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var i="transition".concat(n.props.group?"-group":""),s={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(s.on.leave=a(s.on.leave,(function(t){return t.style.position="absolute"}))),n.props.hideOnLeave&&(s.on.leave=a(s.on.leave,(function(t){return t.style.display="none"}))),e(i,Object(r["a"])(n.data,s),n.children)}}}function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,a){return n("transition",Object(r["a"])(a.data,{props:{name:t},on:e}),a.children)}}}var o=n("ade3"),l=n("80d2"),c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",r="offset".concat(Object(l["s"])(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(o["a"])({transition:t.style.transition,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var a=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";var i="".concat(e[r],"px");e.style[n]="0",e.offsetHeight,e.style.transition=a.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=i}))},afterEnter:i,enterCancelled:i,leave:function(t){t._initialStyle=Object(o["a"])({transition:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[r],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:a,leaveCancelled:a};function a(e){t&&e._parent&&e._parent.classList.remove(t),i(e)}function i(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}},u=(i("carousel-transition"),i("carousel-reverse-transition"),i("tab-transition"),i("tab-reverse-transition"),i("menu-transition"),i("fab-transition","center center","out-in"),i("dialog-transition"),i("dialog-bottom-transition"),i("fade-transition")),d=(i("scale-transition"),i("scroll-x-transition"),i("scroll-x-reverse-transition"),i("scroll-y-transition"),i("scroll-y-reverse-transition"),i("slide-x-transition")),h=(i("slide-x-reverse-transition"),i("slide-y-transition"),i("slide-y-reverse-transition"),s("expand-transition",c()));s("expand-x-transition",c("",!0))},1225:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"justify-center"},[n("v-col",{attrs:{cols:"6"}},[n("taskList",{attrs:{data:t.tasksByCategory(this.$route.params.id)}})],1)],1)],1)},a=[],i=(n("d3b7"),n("5530")),s=n("2f62"),o={name:"TaskAbout",components:{taskList:function(){return n.e("chunk-28d77816").then(n.bind(null,"8e02"))}},beforeMount:function(){},methods:{},computed:Object(i["a"])({},Object(s["b"])(["tasksByCategory"]))},l=o,c=n("2877"),u=n("6544"),d=n.n(u),h=n("62ad"),f=n("a523"),v=n("0fd9"),p=Object(c["a"])(l,r,a,!1,null,"2a99ae63",null);e["default"]=p.exports;d()(p,{VCol:h["a"],VContainer:f["a"],VRow:v["a"]})},"297c":function(t,e,n){"use strict";n("a9e3");var r=n("2b0e"),a=(n("c7cd"),n("5530")),i=n("ade3"),s=(n("6ece"),n("0789")),o=n("a9ad"),l=n("fe6c"),c=n("a452"),u=n("7560"),d=n("80d2"),h=n("58df"),f=Object(h["a"])(o["a"],Object(l["b"])(["absolute","fixed","top","bottom"]),c["a"],u["a"]),v=f.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["d"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["d"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(i["a"])(t,this.isReversed?"right":"left",Object(d["d"])(this.normalizedValue,"%")),Object(i["a"])(t,"width",Object(d["d"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(a["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?s["b"]:s["c"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["d"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(d["j"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(i["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),n=e.width;this.internalValue=t.offsetX/n*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["d"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),p=v;e["a"]=r["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(p,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"615b":function(t,e,n){},"6ece":function(t,e,n){},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return l}));var r=n("b0af"),a=n("80d2"),i=Object(a["e"])("v-card__actions"),s=Object(a["e"])("v-card__subtitle"),o=Object(a["e"])("v-card__text"),l=Object(a["e"])("v-card__title");r["a"]},a452:function(t,e,n){"use strict";var r=n("ade3"),a=n("2b0e");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return a["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(r["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(r["a"])({},t,(function(t){this.internalLazyValue=t}))})}var s=i();e["a"]=s},b0af:function(t,e,n){"use strict";n("0481"),n("4069"),n("a9e3");var r=n("5530"),a=(n("615b"),n("10d2")),i=n("297c"),s=n("1c87"),o=n("58df");e["a"]=Object(o["a"])(i["a"],s["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-card":!0},s["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},a["a"].options.computed.classes.call(this))},styles:function(){var t=Object(r["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,r=e.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},f820:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about d-flex justify-center align-center flex-column",staticStyle:{height:"calc(100vh - 65px)"}},[n("h1",[t._v("This is an about page")]),t.taskInfo?n("v-card",{attrs:{"max-width":"500px"}},[n("v-card-title",[t._v("Название: "+t._s(t.taskInfo.title))]),n("v-card-text",[n("h2",{staticClass:"mb-4"},[t._v("Категория: "+t._s(t.$route.params.id))]),n("h3",{staticClass:"mb-4"},[t._v("Описание:"+t._s(t.taskInfo.description))]),n("h3",{staticClass:"mb-4"},[t._v(" Выполнено : "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.taskInfo.state,expression:"taskInfo.state"}]},[t._v("Да")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.taskInfo.state,expression:"!taskInfo.state"}]},[t._v("Нет")])])]),n("v-card-actions",[n("v-btn",{attrs:{color:"error",text:"",rounded:""},on:{click:t.deleteOneTask}},[t._v("Удалить")])],1)],1):t._e()],1)},a=[],i=(n("4de4"),n("b0c0"),n("5530")),s=n("2f62"),o=n("4360"),l={name:"App",beforeMount:function(){},data:function(){return{DELETE_TASK:o["a"]}},methods:{deleteOneTask:function(){this.$store.dispatch(this.DELETE_TASK,{categoryId:this.$route.params.id,index:this.$route.params.name}),this.$router.go(-1)}},computed:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["tasksByCategory"])),{},{taskInfo:function(){var t=this;return this.tasksByCategory(this.$route.params.id).tasks.filter((function(e){return e.title===t.$route.params.name}))[0]}})},c=l,u=n("2877"),d=n("6544"),h=n.n(d),f=n("8336"),v=n("b0af"),p=n("99d9"),g=Object(u["a"])(c,r,a,!1,null,null,null);e["default"]=g.exports;h()(g,{VBtn:f["a"],VCard:v["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"]})}}]);
//# sourceMappingURL=about.a1005b1f.js.map