!function(t){function n(n){for(var r,s,o=n[0],u=n[1],c=n[2],f=0,p=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(n);p.length;)p.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,o=1;o<e.length;o++){var u=e[o];0!==a[u]&&(r=!1)}r&&(i.splice(n--,1),t=s(s.s=e[0]))}return t}var r={},a={0:0},i=[];function s(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)s.d(e,r,function(n){return t[n]}.bind(null,r));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="";var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=n,o=o.slice();for(var c=0;c<o.length;c++)n(o[c]);var l=u;i.push([69,1]),e()}({10:function(t,n,e){"use strict";var r=e(11),a=e.n(r);n.default=a.a},11:function(t,n){t.exports={}},12:function(t,n,e){var r=e(63);"string"==typeof r&&(r=[[t.i,r,""]]);var a={insert:"head",singleton:!1};e(28)(r,a);r.locals&&(t.exports=r.locals)},13:function(t,n,e){var r=e(65);"string"==typeof r&&(r=[[t.i,r,""]]);var a={insert:"head",singleton:!1};e(28)(r,a);r.locals&&(t.exports=r.locals)},17:function(t){t.exports=JSON.parse('{"BASE_URL":"/","SITE_NAME":"Sample Site","FIREBASE":{"apiKey":"AIzaSyC_o0CCrQ50V7M-2sQ3F0WoD5NdA1c5BSo","authDomain":"sample-site-da24c.firebaseapp.com","databaseURL":"https://sample-site-da24c.firebaseio.com","projectId":"sample-site-da24c","storageBucket":"sample-site-da24c.appspot.com","messagingSenderId":"sender-id"}}')},18:function(t,n,e){"use strict";var r=function(){var t=this.$createElement;this._self._c;return this._m(0)},a=[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"notfound"},[n("h3",[this._v("404: Not Found")])])}];r._withStripped=!0,e.d(n,"a",function(){return r}),e.d(n,"b",function(){return a})},31:function(t,n,e){"use strict";var r=e(18),a=e(10),i=e(5),s=Object(i.a)(a.default,r.a,r.b,!1,null,null,null);s.options.__file="src/js/templates/Notfound.vue",n.default=s.exports},62:function(t,n,e){"use strict";var r=e(12);e.n(r).a},63:function(t,n,e){(t.exports=e(27)(!1)).push([t.i,"\nh1[data-v-6145488b], h2[data-v-6145488b] {\n  font-weight: normal;\n}\nul[data-v-6145488b] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-6145488b] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-6145488b] {\n  color: #42b983;\n}\n.signup[data-v-6145488b] {\n  margin-top: 20px;\n\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center\n}\ninput[data-v-6145488b] {\n  margin: 10px 0;\n  padding: 10px;\n}\n",""])},64:function(t,n,e){"use strict";var r=e(13);e.n(r).a},65:function(t,n,e){(t.exports=e(27)(!1)).push([t.i,"\n.signin[data-v-4caef215] {\n  margin-top: 20px;\n\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center\n}\n",""])},66:function(t,n){document.addEventListener("DOMContentLoaded",function(){})},69:function(t,n,e){"use strict";e.r(n);e(33);var r=e(2),a=e(16),i=e(15),s=e(29),o=e.n(s).a.create({baseURL:"/api/",headers:{ContentType:"application/json","X-Requested-With":"XMLHttpRequest"},responseType:"json"}),u=void 0;function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l,f={isEmpty:function(t){if(null===t)return!0;if(void 0===t)return!0;if(!1===t)return!0;if(""===t)return!0;if("0"===t)return!0;if(0===t)return!0;if("object"===c(t)){if(Array.isArray(t))return 0===t.length;if(Object.keys(t).length>0)return!1;if(void 0!==Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).length>0)return!1;if(void 0!==t.valueOf().length)return 0===t.valueOf().length;if("object"!==c(t.valueOf()))return u.isEmpty(t.valueOf())}return!1},inArray:function(t,n){return[].indexOf.call(n,t)>-1},compareValues:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(e,r){if(e.hasOwnProperty(t)&&r.hasOwnProperty(t)){var a="string"==typeof e[t]?e[t].toUpperCase():e[t],i="string"==typeof r[t]?r[t].toUpperCase():r[t],s=0;return a>i?s=1:a<i&&(s=-1),"desc"==n?-1*s:s}return e.hasOwnProperty(t)&&r.hasOwnProperty(t)?0:-1}},substr:function(t,n){for(var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=t.split(""),a=0,i="",s=0,o=r.length;s<o;s++){var u=escape(r[s]);if(u.length<4?a++:a+=2,a>n)return i+e;i+=t.charAt(s)}return t}},p=function(t){var n={params:t};return new Promise(function(t,e){o.get("transactions",n).then(function(n){return t({lists:n.data})}).catch(function(t){e(new Error(t.response.data.message||t.message))})})},d=function(t){return new Promise(function(n,e){for(var r=["name","amount","date","category_id","account_code"],a=new URLSearchParams,i=0,s=r.length;i<s;i++){var u=r[i];if(null===t[u])throw new Error("No value '".concat(u,"'"));if(!t.hasOwnProperty(u))throw new Error("No value '".concat(u,"'"));a.append(u,t[u])}o.post("transactions",a).then(function(t){return n(t.data)}).catch(function(t){e(new Error(t.response.data.message||t.message))})})},h=function(t,n){return new Promise(function(e,r){var a=["name","amount","date","category_id","account_code","is_disabled"],i=new URLSearchParams;for(var s in n)if(f.inArray(s,a)&&n.hasOwnProperty(s)){var u=n[s];i.append(s,u)}o.post("transactions/".concat(t),i).then(function(t){return e(t.data)}).catch(function(t){r(new Error(t.response.data.message||t.message))})})},m=function(t){return new Promise(function(n,e){o.delete("transactions/".concat(t)).then(function(t){return n(t.data)}).catch(function(t){e(new Error(t.response.data.message||t.message))})})},v=e(4),_=e.n(v),g=function(t){return new Promise(function(n,e){_.a.auth().signInWithEmailAndPassword(t.username,t.password).then(function(t){return n(t)}).catch(function(t){return e(t)})})},E=function(){var t=new _.a.auth.GoogleAuthProvider;return new Promise(function(n,e){_.a.auth().signInWithPopup(t).then(function(t){return n(t)}).catch(function(t){return e(t)})})},O=function(){return new Promise(function(t,n){_.a.auth().signOut().then(function(n){return t(n)}).catch(function(t){return n(t)})})},T={setHeaderMenuOpen:function(t,n){(0,t.commit)("SET_COMMON_HEADER_MENU_OPEN",n)},setIsLoading:function(t,n){(0,t.commit)("SET_COMMON_LOADING",n)},signIn:function(t,n){var e=t.commit;return e("SET_COMMON_LOADING",!0),g(n).then(function(t){e("SET_COMMON_LOADING",!1),e("AUTH_SET_USER",t.user.uid),e("AUTH_UPDATE_STATE",!0),e("AUTH_SET_ERROR",null)}).catch(function(t){e("SET_COMMON_LOADING",!1),e("AUTH_UPDATE_STATE",!1),e("AUTH_SET_ERROR",t.message)})},googleSignIn:function(t){var n=t.commit;return n("SET_COMMON_LOADING",!0),E().then(function(t){n("SET_COMMON_LOADING",!1),n("AUTH_SET_USER",t.user.uid),n("AUTH_UPDATE_STATE",!0),n("AUTH_SET_ERROR",null)}).catch(function(t){n("SET_COMMON_LOADING",!1),n("AUTH_UPDATE_STATE",!1),n("AUTH_SET_ERROR",t.message)})},signOut:function(t){var n=t.commit;return n("SET_COMMON_LOADING",!0),O().then(function(t){console.log(t),n("SET_COMMON_LOADING",!1),n("AUTH_SET_USER",null),n("AUTH_UPDATE_STATE",!1),n("AUTH_SET_ERROR",null)}).catch(function(t){n("SET_COMMON_LOADING",!1),n("AUTH_SET_ERROR",t.message)})},updateAuthState:function(t,n){var e=t.commit;e("AUTH_SET_USER",(n=n||{}).uid),e("AUTH_UPDATE_STATE",!!n.uid),e("AUTH_SET_ERROR",null)},fetchTransactions:function(t,n){var e=t.commit;return e("SET_COMMON_LOADING",!0),p(n).then(function(t){var n=t.lists;e("FETCH_TRANSACTIONS_LIST",n),e("SET_COMMON_LOADING",!1)}).catch(function(t){throw e("SET_COMMON_LOADING",!1),t})},createTransaction:function(t,n){var e=t.commit;return d(n).then(function(t){e("CREATE_TRANSACTION",t)}).catch(function(t){throw t})},updateTransaction:function(t,n){var e=t.commit;return h(n.transactionId,n.values).then(function(t){e("UPDATE_TRANSACTION",{transactionId:n.transactionId,values:t})}).catch(function(t){throw t})},deleteTransaction:function(t,n){var e=t.commit;return m(n).then(function(t){e("DELETE_TRANSACTION",{transactionId:n,values:t})}).catch(function(t){throw t})}};function S(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var A=(S(l={},"SET_COMMON_LOADING",function(t,n){t.common.isLoading=n}),S(l,"SET_COMMON_HEADER_MENU_OPEN",function(t,n){t.common.isHeaderMenuOpen=n}),S(l,"AUTH_SET_USER",function(t,n){t.auth.user=n}),S(l,"AUTH_REMOVE_USER",function(t){t.auth.user=null}),S(l,"AUTH_UPDATE_STATE",function(t,n){t.auth.state=n}),S(l,"AUTH_SET_ERROR",function(t,n){t.auth.error=n}),S(l,"FETCH_TRANSACTIONS_LIST",function(t,n){t.transaction.list=n}),S(l,"CREATE_TRANSACTION",function(t,n){t.transaction.list.push(n)}),S(l,"UPDATE_TRANSACTION",function(t,n){var e=n.transactionId,r=n.values,a=t.transaction.list.findIndex(function(t){return t.id===e});t.transaction.list.splice(a,1,r)}),S(l,"DELETE_TRANSACTION",function(t,n){for(var e=n.transactionId,r=0,a=t.transaction.list.length;r<a;r++){if(t.transaction.list[r].id===e){t.transaction.list.splice(r,1);break}}}),l);r.a.use(i.a);var b=new i.a.Store({state:{common:{isLoading:!1,isHeaderMenuOpen:!1},auth:{state:!1,user:null,error:null},transaction:{list:[]}},getters:{user:function(t){return t.auth.user},error:function(t){return t.auth.error},transaction:function(t){return function(n){return t.transaction.list.find(function(t){return t.id===n})}}},actions:T,mutations:A,strict:!1}),w=function(){var t=this.$createElement;this._self._c;return this._m(0)};w._withStripped=!0;var y={data:function(){return{}},created:function(){}},C=e(5),R=Object(C.a)(y,w,[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h1",{staticClass:"title"},[this._v("Top")])])}],!1,null,null,null);R.options.__file="src/js/templates/Top.vue";var N=R.exports,I=function(){var t=this.$createElement;this._self._c;return this._m(0)};I._withStripped=!0;var U={data:function(){return{}},created:function(){}},M=Object(C.a)(U,I,[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h1",{staticClass:"title"},[this._v("About")])])}],!1,null,null,null);M.options.__file="src/js/templates/About.vue";var P=M.exports,L=e(31),j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"signup"},[e("h1",{staticClass:"title"},[t._v("Sign Up")]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Username")]),t._v(" "),e("div",{staticClass:"control has-icons-left has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(n){n.target.composing||(t.username=n.target.value)}}})])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Password")]),t._v(" "),e("div",{staticClass:"control has-icons-left has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(n){n.target.composing||(t.password=n.target.value)}}})])]),t._v(" "),e("div",{staticClass:"field is-grouped"},[e("div",{staticClass:"control"},[e("button",{staticClass:"button is-link",on:{click:t.signUp}},[t._v("Register")])])]),t._v(" "),e("p",[t._v("Do you have an account? \n    "),e("router-link",{attrs:{to:"/signin"}},[t._v("sign in now!!")])],1)])};j._withStripped=!0;var x={name:"Signup",data:function(){return{username:"",password:""}},methods:{signUp:function(){_.a.auth().createUserWithEmailAndPassword(this.username,this.password).then(function(t){alert("Create account: ",t.email)}).catch(function(t){alert(t.message)})}}},H=(e(62),Object(C.a)(x,j,[],!1,null,"6145488b",null));H.options.__file="src/js/templates/Signup.vue";var D=H.exports,$=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"signin"},[e("h1",{staticClass:"title"},[t._v("Sign in")]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Username")]),t._v(" "),e("div",{staticClass:"control has-icons-left has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(n){n.target.composing||(t.username=n.target.value)}}})])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Password")]),t._v(" "),e("div",{staticClass:"control has-icons-left has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(n){n.target.composing||(t.password=n.target.value)}}})])]),t._v(" "),e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("button",{staticClass:"button is-link",on:{click:t.signIn}},[t._v("Sign In")])])]),t._v(" "),e("div",{staticClass:"field is-grouped"},[e("div",{staticClass:"control"},[e("b-button",{attrs:{block:"",variant:"primary"},on:{click:t.googleSignIn}},[t._v("Google Sign In")])],1)]),t._v(" "),e("p",[t._v("You don't have an account? \n    "),e("router-link",{attrs:{to:"/signup"}},[t._v("create account now!!")])],1)])};$._withStripped=!0;var k={name:"Signin",data:function(){return{username:"",password:""}},created:function(){this.$store.state.auth.state&&this.$router.push("/member")},methods:{signIn:function(){var t=this,n={username:this.username,password:this.password};this.$store.dispatch("signIn",n).then(function(){t.$router.push("/member")}).catch(function(n){t.throwReject(n)})},googleSignIn:function(){var t=this;this.$store.dispatch("googleSignIn").then(function(){t.$router.push("/member")}).catch(function(n){t.throwReject(n)})},throwReject:function(t){return Promise.reject(t)}}},G=(e(64),Object(C.a)(k,$,[],!1,null,"4caef215",null));G.options.__file="src/js/templates/Signin.vue";var B=G.exports,F=function(){var t=this.$createElement;this._self._c;return this._m(0)};F._withStripped=!0;var q={data:function(){return{}},created:function(){}},W=Object(C.a)(q,F,[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h1",{staticClass:"title"},[this._v("Member Top")]),this._v(" "),n("p",[this._v("This page needs Sign in")])])}],!1,null,null,null);W.options.__file="src/js/templates/MemberTop.vue";var J=[{path:"/",component:N},{path:"/signup",name:"Signup",component:D},{path:"/signin",name:"Signin",component:B},{path:"/member",name:"MemberTop",component:W.exports,meta:{requiresAuth:!0}},{path:"/about",component:P},{path:"/notfound",component:L.default},{path:"*",redirect:"/notfound"}];r.a.use(a.a);var K=new a.a({mode:"history",saveScrollPosition:!0,routes:J,scrollBehavior:function(t,n,e){return t.hash?{selector:t.hash}:e||{x:0,y:0}}});K.beforeEach(function(t,n,e){b.dispatch("setHeaderMenuOpen",!1),b.dispatch("setIsLoading",!0);var r=t.matched.some(function(t){return t.meta.requiresAuth});_.a.auth().onAuthStateChanged(function(n){b.dispatch("setIsLoading",!1),b.dispatch("updateAuthState",n),r?b.state.auth.state?e():e({path:"/signin",query:{redirect:t.fullPath}}):"/signin"===t.path&&b.state.auth.state?e({path:"/member"}):e()})});var V=K,z=(e(66),e(17)),Q={uri:function(t){return z.BASE_URL+t.replace(/^\//,"")},get:function(t){for(var n=t.split("."),e=z,r=0,a=n.length;r<a;r++){if(void 0===(e=e[n[r]]))return}return e}},X={apiKey:Q.get("FIREBASE.apiKey"),authDomain:Q.get("FIREBASE.authDomain"),databaseURL:Q.get("FIREBASE.databaseURL"),projectId:Q.get("FIREBASE.projectId"),storageBucket:Q.get("FIREBASE.storageBucket")},Y=function(){_.a.initializeApp(X),_.a.auth().setPersistence(_.a.auth.Auth.Persistence.LOCAL)},Z=e(32),tt=e(14),nt=e.n(tt),et=(e(68),{listen:function(t,n,e){this._eventRemovers||(this._eventRemovers=[]),t.addEventListener(n,e),this._eventRemovers.push({remove:function(){t.removeEventListener(n,e)}})},destroyed:function(){this._eventRemovers&&this._eventRemovers.forEach(function(t){t.remove()})}});Y(),r.a.use(Z.a),nt.a.locale("ja"),r.a.filter("dateFormat",function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"LLL";return nt()(t).format(n)}),r.a.mixin({computed:{isAuth:function(){return this.$store.state.auth.state}},methods:{siteUri:Q.uri,getConfig:Q.get,isEmpty:f.isEmpty,inArray:f.inArray,listen:et.listen,destroyed:et.destroyed,getCategoryLabel:function(t){return f.isEmpty(t)?"":f.isEmpty(t.sublabel)?t.name:t.sublabel},signout:function(){var t=this;this.$store.dispatch("signOut").then(function(){t.$router.push({path:"/signin"})}).catch(function(n){return t.throwReject(n)})}}}),r.a.filter("numFormat",function(t){return t=parseInt(t),isNaN(t)?0:String(t).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")}),r.a.filter("substr",function(t,n){return f.substr(t,n,"...")}),new r.a({el:"#app",computed:{isLoading:function(){return b.state.common.isLoading},isHeaderMenuOpen:function(){return b.state.common.isHeaderMenuOpen}},created:function(){},methods:{toggleHeaderMenuOpen:function(){b.dispatch("setHeaderMenuOpen",!this.isHeaderMenuOpen)}},store:b,router:V})}});