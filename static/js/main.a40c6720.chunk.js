(this["webpackJsonpweddi-app"]=this["webpackJsonpweddi-app"]||[]).push([[0],{33:function(e,t,n){},41:function(e,t,n){e.exports=n.p+"static/media/loading.822699a4.gif"},44:function(e,t,n){e.exports=n(76)},49:function(e,t,n){},67:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(37),o=n.n(r),s=n(21),c=n(9),l=(n(49),n(22)),u=n.n(l),m=n(38),d=n(15),p=n(3),g=n(4),h=n(14),f=n(11),v=n(6),b=n(13),y=n(16),w=n.n(y),k=n(39),I=n.n(k),E=(n(67),{doc:{title:"<3 YaYun & ChinHui <3"},firebase:{apiKey:"AIzaSyD_1irJWOgT9x5fvmbXJm0fRRRZ8DNUfpU",authDomain:"weddi-app.firebaseapp.com",databaseURL:"https://weddi-app.firebaseio.com/",projectId:"weddi-app",storageBucket:"image.weddi.app",messagingSenderId:"324415165027",appId:"1:324415165027:web:76b8291835ef32c5c75e56"},img:{namespace:"chyy",endpoint:"https://storage.googleapis.com/image.weddi.app/",totalImgs:114,bgImgsShouldBePicked:40,fmImgsShouldBePicked:5}}),O={doc:{title:"<3 Tony & Claire <3"},firebase:{apiKey:"AIzaSyD_1irJWOgT9x5fvmbXJm0fRRRZ8DNUfpU",authDomain:"weddi-app.firebaseapp.com",databaseURL:"https://weddi-app-test.firebaseio.com/",projectId:"weddi-app",storageBucket:"image.weddi.app",messagingSenderId:"324415165027",appId:"1:324415165027:web:76b8291835ef32c5c75e56"},img:{namespace:"tlty",endpoint:"https://storage.googleapis.com/image.weddi.app/",totalImgs:30,bgImgsShouldBePicked:30,fmImgsShouldBePicked:5}},j={doc:{title:"<3 Groom & Bride <3"},firebase:{apiKey:"AIzaSyD_1irJWOgT9x5fvmbXJm0fRRRZ8DNUfpU",authDomain:"weddi-app.firebaseapp.com",databaseURL:"https://weddi-app-test.firebaseio.com/",projectId:"weddi-app",storageBucket:"image.weddi.app",messagingSenderId:"324415165027",appId:"1:324415165027:web:76b8291835ef32c5c75e56"},img:{namespace:"chyy",endpoint:"https://storage.googleapis.com/image.weddi.app/",totalImgs:114,bgImgsShouldBePicked:40,fmImgsShouldBePicked:5}},S=new(function(){function e(){Object(p.a)(this,e),this.config=void 0}return Object(g.a)(e,[{key:"init",value:function(e){this.config||(this.config=function(e){switch(e){case"chyy":return E;case"tlty":return O;default:return j}}(e))}},{key:"doc",get:function(){if(this.config)return this.config.doc;throw Error("config is not set yet")}},{key:"firebase",get:function(){if(this.config)return this.config.firebase;throw Error("config is not set yet")}},{key:"img",get:function(){if(this.config)return this.config.img;throw Error("config is not set yet")}}]),e}()),U=n(23),D=n.n(U),N=function(e,t){for(var n=[],a=e.length-t;a<e.length;a++){var i=D()(a);n.includes(e[i])?n.push(e[a]):n.push(e[i])}return n},P=function(e){for(var t=0;t<=e.length-2;t++){var n=D()(t,e.length-1),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e},x=function(e,t){var n=new Image;n.src=e,n.onload=t},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_small";return"".concat(S.img.endpoint).concat(S.img.namespace,"/").concat(e).concat(t,".jpg")},C=(n(33),function(e){function t(){var e;Object(p.a)(this,t),(e=Object(h.a)(this,Object(f.a)(t).call(this))).img=new Image;var n=Object(v.a)(e);return e.img.onload=function(){var e=this;n.setState((function(){return{imgWidth:e.width||0,imgHeight:e.height||0}}))},e.state={imgWidth:0,imgHeight:0},e}return Object(b.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.img.src=this.props.show?this.props.user.imgUrl:""}},{key:"componentDidUpdate",value:function(){this.img.src=this.props.show?this.props.user.imgUrl:""}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.show,a=window.innerWidth<1e3,r=this.state.imgWidth<this.state.imgHeight,o=n&&a&&r?{margin:"10% 20% 50px"}:{};return i.a.createElement("div",{className:n?"dialog show-dialog":"dialog"},i.a.createElement("div",{className:"modal-sm",style:o},i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{className:"user-image",src:t.imgUrl,alt:"images"})),i.a.createElement("div",{className:"message"},i.a.createElement("h2",null,"@ ",t.name),i.a.createElement("p",null,t.greetings))))}}]),t}(a.Component)),R=n(40);n(69),n(77);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var F=new(function(){function e(){Object(p.a)(this,e),this.config=void 0,this.app=void 0}return Object(g.a)(e,[{key:"init",value:function(e){this.app||(this.config=e,this.app=R.initializeApp(this.config.firebase))}},{key:"database",get:function(){if(!this.app)throw new Error("app is not initial yet");return this.app.database()}},{key:"storage",get:function(){if(!this.app)throw new Error("app is not initial yet");return this.app.storage()}}]),e}()),T=F,W=function(e){var t=F.database.ref("posts").push().key;if(!t)throw new Error("post id is empty");var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{modifiedTime:(new Date).toISOString(),userAgent:navigator.userAgent,id:t});return F.database.ref("posts").child(t).set(n)},L=function(e,t){if(!F.config)throw new Error("app is not initial yet");return F.storage.ref(F.config.img.namespace).child("public_upload").child(e).put(t)};function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).allImgUrls=w()(S.img.totalImgs).map((function(e){return B(e)})),n.fmImgsShouldBePicked=S.img.fmImgsShouldBePicked,n.imgUrls=N(n.allImgUrls,n.fmImgsShouldBePicked),n.state={form:{name:"",greetings:"",pickedImg:{idx:0,url:n.imgUrls[0]},file:""},upload:!1,modalDisplay:!1},n.onFileChangeHandler=n.onFileChangeHandler.bind(Object(v.a)(n)),n.onTextChangeHandler=n.onTextChangeHandler.bind(Object(v.a)(n)),n.onSubmitHandler=n.onSubmitHandler.bind(Object(v.a)(n)),n.isValid=n.isValid.bind(Object(v.a)(n)),n.getImg=n.getImg.bind(Object(v.a)(n)),n.plusImgIdx=n.plusImgIdx.bind(Object(v.a)(n)),n.renderPhotoRadios=function(){return n.imgUrls.map((function(e,t){var a=n.state.form.pickedImg.idx===t&&n.state.form.pickedImg.url===e;return i.a.createElement(i.a.Fragment,{key:"image_".concat(t)},i.a.createElement("input",{hidden:!0,type:"radio",name:"imgUrl",value:e,checked:a,readOnly:!0}),i.a.createElement("div",{className:"layer"+(a?"":" hidden"),style:{backgroundImage:"url(".concat(e,")")}}),i.a.createElement("img",{className:"fade"+(a?"":" hidden"),src:e,alt:e}))}))},n}return Object(b.a)(t,e),Object(g.a)(t,[{key:"getUpperUrl",value:function(){var e=this.props.match.url.split("/");return e.pop(),e.join("/")}},{key:"getFormData",value:function(){return J({},this.state.form,{imgUrl:this.state.form.pickedImg.url})}},{key:"onFileChangeHandler",value:function(e){var t=e.target.name,n=e.target.files[0];t&&n&&n.type.startsWith("image/")&&this.setState((function(e){return{form:J({},e.form,Object(d.a)({},t,n))}}))}},{key:"onTextChangeHandler",value:function(e){var t=e.target.name,n=e.target.value.trim();this.setState((function(e){return{form:J({},e.form,Object(d.a)({},t,n))}}))}},{key:"onSubmitHandler",value:function(e){if(e.preventDefault(),this.isValid())return this.uploadFlow()}},{key:"uploadFlow",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,a,i=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.form.pickedImg.url,!this.state.upload){e.next=10;break}return n=I.a.v4(),e.next=5,L(n,this.state.form.upload);case 5:return a=e.sent,e.next=8,a.ref.getDownloadURL();case 8:t=e.sent,this.setState({form:J({},this.state.form,{pickedImg:{idx:-1,url:t}})});case 10:return e.next=12,W(this.getFormData());case 12:x(t,(function(){i.setState({modalDisplay:!0}),setTimeout((function(){i.props.history.push(i.getUpperUrl())}),5e3)}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getImg",value:function(e){return{idx:e,url:this.imgUrls[e]}}},{key:"plusImgIdx",value:function(e){var t=this,n=(this.state.form.pickedImg.idx+e+this.fmImgsShouldBePicked)%this.fmImgsShouldBePicked;this.setState((function(e){return{form:J({},e.form,{pickedImg:t.getImg(n)})}}))}},{key:"isValid",value:function(){var e=this.state.form,t=e.name,n=e.greetings,a=e.pickedImg;return""!==t.trim()&&""!==n.trim()&&void 0!==a.url}},{key:"renderUploadImageSection",value:function(){return i.a.createElement("label",{className:"img-window upload"},i.a.createElement("input",{hidden:!0,type:"file",name:"upload",placeholder:"\u4e0a\u50b3\u7167\u7247",accept:"image/*",onChange:this.onFileChangeHandler}),this.state.form.upload&&i.a.createElement("img",{src:URL.createObjectURL(this.state.form.upload),alt:"upload preview"}),!this.state.form.upload&&i.a.createElement("span",{className:"upload-field"},"\u8acb\u4e0a\u50b3\u5716\u7247"))}},{key:"renderPickImageSection",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"img-window"},i.a.createElement("div",{className:"numbertext"},this.state.form.pickedImg.idx+1," / ",this.fmImgsShouldBePicked),this.renderPhotoRadios()),i.a.createElement("span",{className:"prev",onClick:function(){return e.plusImgIdx(-1)}},"\u276e"),i.a.createElement("span",{className:"next",onClick:function(){return e.plusImgIdx(1)}},"\u276f"))}},{key:"renderGreetingForm",value:function(){var e=this;return i.a.createElement("form",{className:"greeting-form",onSubmit:this.onSubmitHandler},i.a.createElement("ul",{className:"tabs-view"},i.a.createElement("li",{className:this.state.upload?"pick":"pick active",onClick:function(){return e.setState({upload:!1})}},"\u6311\u4e00\u5f35\u7167\u7247"),i.a.createElement("li",{className:this.state.upload?"pick active":"pick",onClick:function(){return e.setState({upload:!0})}},"\u4e0a\u50b3\u4e00\u5f35\u7167\u7247")),i.a.createElement("div",{className:"slideshow-container"},i.a.createElement("div",{hidden:!this.state.upload},this.renderUploadImageSection()),i.a.createElement("div",{hidden:this.state.upload},this.renderPickImageSection())),i.a.createElement("div",{className:"greeting-message-block"},i.a.createElement("label",{className:"input"},i.a.createElement("h2",null,"@"),i.a.createElement("input",{type:"text",name:"name",placeholder:"\u59d3\u540d",onChange:this.onTextChangeHandler,required:!0})),i.a.createElement("label",{className:"input"},i.a.createElement("textarea",{name:"greetings",placeholder:"\u795d\u8cc0\u8a5e",onChange:this.onTextChangeHandler,required:!0}))),i.a.createElement("input",{className:"btn",type:"submit",value:"\u7559\u8a00"}),i.a.createElement("a",{className:"link orange-font",href:this.getUpperUrl()},"\u53bb\u7167\u7247\u7246\u77a7\u77a7"))}},{key:"render",value:function(){return i.a.createElement("div",{className:"greeting"},i.a.createElement("header",{className:"greeting-header"},i.a.createElement("h1",{className:"greeting-title orange-font"},"\u795d\u798f\u7559\u8a00\u7248")),!this.state.modalDisplay&&this.renderGreetingForm(),i.a.createElement(C,{user:this.getFormData(),show:this.state.modalDisplay}))}}]),t}(a.Component),q=n(41),z=n.n(q),V=function(){function e(){Object(p.a)(this,e),this.q=[]}return Object(g.a)(e,[{key:"push",value:function(e){this.q.push(e)}},{key:"pop",value:function(){return this.q.splice(0,1)[0]}},{key:"isEmpty",value:function(){return 0===this.q.length}}]),e}(),G=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).allImgUrls=w()(S.img.totalImgs).map((function(e){return B(e)})),n.bgImgUrls=N(n.allImgUrls,S.img.bgImgsShouldBePicked),n.intervals=[],n.state={isLoading:!0,modalDisplay:!1,user:{},permutation:P(w()(n.bgImgUrls.length)),isBgSwitching:!1},n.showDialog=function(e){n.setState({user:Object.assign({},e)});x(e.imgUrl,(function(){n.setState((function(){return{modalDisplay:!0}})),setTimeout((function(){n.setState((function(){return{modalDisplay:!1}}))}),5e3)}))},n.pickUpFeed=function(e,t){var a=e.isEmpty()?t.pop():e.pop();n.showDialog(a),t.push(a)},n}return Object(b.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,n=new V,a=new V;e=function(e){return n.push(e)},F.database.ref("posts").on("child_added",(function(t){e(t.val())})),window.onload=function(){t.setState((function(e){return{isLoading:!e.isLoading}})),t.intervals.push(setInterval((function(){t.pickUpFeed(n,a)}),8e3))},this.intervals.push(setInterval((function(){t.setState({isBgSwitching:!0}),setTimeout((function(){t.setState({permutation:P(w()(t.bgImgUrls.length))}),setTimeout((function(){t.setState({isBgSwitching:!1})}),1e3)}),1e3)}),3e5))}},{key:"componentWillUnmount",value:function(){this.intervals.forEach(clearInterval)}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container"},this.state.isLoading&&i.a.createElement("div",{className:"loading"},i.a.createElement("img",{src:z.a,alt:""}),i.a.createElement("span",null,"Loading...")),this.bgImgUrls.map((function(t,n){return i.a.createElement("img",{key:t,className:e.state.isLoading||e.state.isBgSwitching?"hidden":"visible",style:{order:e.state.permutation[n]},src:t,alt:""})}))),i.a.createElement(C,{user:this.state.user,show:this.state.modalDisplay}),i.a.createElement("a",{className:"message-link",href:"".concat(this.props.match.url,"/greetings")},"<< \u7559\u4e0b\u4f60\u7684\u795d\u798f"))}}]),t}(a.Component),K=function(e){var t,n=e.match;S.init(n.params.gnbId),T.init(S),t=S.doc.title,document.title=t;var a=n.url;return i.a.createElement(c.c,null,i.a.createElement(c.a,{path:"".concat(a,"/greetings"),component:_}),i.a.createElement(c.a,{path:a,component:G}))},X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var M=function(){return i.a.createElement("div",null,"Weddi App")};o.a.render(i.a.createElement((function(){return i.a.createElement(s.a,{basename:"",forceRefresh:!0},i.a.createElement(c.c,null,i.a.createElement(c.a,{path:"/:gnbId/",component:K}),i.a.createElement(c.a,{path:"/",component:M})))}),null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");X?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Z(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):Z(e)}))}}()}},[[44,1,2]]]);
//# sourceMappingURL=main.a40c6720.chunk.js.map