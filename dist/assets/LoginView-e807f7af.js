import{d as U,u as D,r as f,o as E,w as R,a as O,b as r,c as S,h as m,_ as w,e as H,f as h,g as s,i as I,j as _,v as C,k as j,l as g,n as q,p as $,m as P,q as F,s as J,t as z,x as G}from"./index-7eaf7c41.js";import{a as K,S as W}from"./sweetalert2.all-1e3fb24f.js";const Y=U({props:{value:{default:""},chars:{default:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"},count:{default:5},hideLines:{type:Boolean,default:!1},customTextColor:{default:""},textColors:{default:()=>[]},isDirty:{type:Boolean,default:!0},width:{default:function(o){return o.count*30}},height:{default:50},canvasClass:{default:""},icon:{default:"refresh"},captchaFont:{default:"bold 28px sans-serif"}},emits:["isValid","getCode","update:modelValue"],setup(o,{emit:t}){const e=o,a=D(),c=f();let n=f(""),i=e.width,u=e.height;E(()=>{b()});const b=()=>{c.value.width=i,c.value.height=u;let l=c.value.getContext("2d");for(let d=0;d<e.count;d++){let v=Math.floor(Math.random()*e.chars.length),y=Math.random()*30*Math.PI/180,x=e.chars[v];n.value+=x;let V=10+d*25,M=30+Math.random()*8;l.font=e.captchaFont,l.translate(V,M),e.customTextColor?l.fillStyle=e.customTextColor:e.textColors.length?l.fillStyle=e.textColors[Math.floor(Math.random()*e.textColors.length)]:l.fillStyle=k(),l.rotate(y),l.fillText(x,0,0),l.rotate(-y),l.translate(-V,-M)}e.hideLines||N(),T()},N=()=>{let l=c.value.getContext("2d");for(let d=0;d<e.count;d++)l.strokeStyle=k(),l.beginPath(),l.moveTo(Math.random()*i,Math.random()*u),l.lineTo(Math.random()*i,Math.random()*u),l.stroke()},T=()=>{t("getCode",n.value)};R(()=>{n.value&&n.value===e.value?t("isValid",!0):t("isValid",!1)}),O(n,l=>{t("update:modelValue",l)});const k=()=>{let l=Math.floor(Math.random()*256),d=Math.floor(Math.random()*256),v=Math.floor(Math.random()*256);return"rgb("+l+","+d+","+v+")"},A=()=>{c.value.getContext("2d").clearRect(0,0,i,u),n.value="",b()},L=()=>m("div",{class:"vue_client_recaptcha"},[m("div",{class:"vue_client_recaptcha_icon",onClick:()=>A()},[m(a.icon?a.icon:"svg",{class:"vue_client_recaptcha_icon_svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[m("path",{d:"M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z",fill:"#333333"})])]),m("canvas",{id:"captcha_canvas",class:`captcha_canvas ${e.canvasClass}`,ref:c},n.value)]);return(l,d)=>(r(),S(L))}});const Z={components:{VueClientRecaptcha:Y},setup(){const o=f(""),t=j(),e=i=>{n.captchaCode=i},a=i=>{n.isValid=i,i&&c()},c=()=>{t.emit("emitCaptcha",!1)},n=f({captchaCode:null,isValid:!1});return{inputValue:o,data:n,getCaptchaCode:e,checkValidCaptcha:a,captchaM:c}}},Q={class:"sample-captcha"},X={class:"row"},tt={class:"col-sm-6"},et={class:"captcha-box"},st={class:"col-sm-6"},ot={class:"data-box"};function at(o,t,e,a,c,n){const i=H("VueClientRecaptcha");return r(),h("div",Q,[s("div",X,[s("div",tt,[s("section",et,[I(i,{value:a.inputValue,onGetCode:a.getCaptchaCode,onIsValid:a.checkValidCaptcha},null,8,["value","onGetCode","onIsValid"])])]),s("div",st,[s("section",ot,[_(s("input",{"onUpdate:modelValue":t[0]||(t[0]=u=>a.inputValue=u),placeholder:"Masukkan captcha",class:"input",type:"text"},null,512),[[C,a.inputValue]])])])])])}const lt=w(Z,[["render",at]]);const nt={data(){return{showChatBox:!1,message:"",phoneNumber:"081907150504",nama:"",lokasi:""}},methods:{toggleChatBox(){this.showChatBox=!this.showChatBox,this.showChatBox||(this.message="")},async sendMessage(){const o=encodeURIComponent(this.message),t=sessionStorage.getItem("token");if(t)try{const e=JSON.parse(atob(t.split(".")[1]));this.nama=e.name,this.lokasi=e.namaLokasi;const a=`https://wa.me/${this.phoneNumber}?text=Nama%3A%20${this.nama}%0ALokasi%3A%20${this.lokasi}%0APath%3A%20${this.$route.path}%0APesan%3A%20${o}`;window.open(a,"_blank"),this.message="",this.toggleChatBox()}catch(e){console.error("Error decoding token:",e)}else{const e=`https://wa.me/${this.phoneNumber}?text=${o}`;window.open(e,"_blank"),this.message="",this.toggleChatBox()}}},created(){}},B=o=>($("data-v-9dfd0356"),o=o(),P(),o),it={class:"chat-container"},ct={key:0,class:"chat-box"},dt=B(()=>s("div",{class:"text-primary fw-bold"},"Halo, ada yang bisa dibantu?",-1)),rt=B(()=>s("i",{class:"fab fa-whatsapp"},null,-1)),ht=[rt];function ut(o,t,e,a,c,n){return r(),h("div",it,[c.showChatBox?(r(),h("div",ct,[dt,_(s("textarea",{class:"form-control",id:"chat","onUpdate:modelValue":t[0]||(t[0]=i=>c.message=i),rows:"2"},null,512),[[C,c.message]]),s("button",{onClick:t[1]||(t[1]=(...i)=>n.sendMessage&&n.sendMessage(...i)),class:"float-end"},"Kirim")])):g("",!0),s("div",{class:q(["whatsapp-icon",{active:c.showChatBox}]),onClick:t[2]||(t[2]=(...i)=>n.toggleChatBox&&n.toggleChatBox(...i))},ht,2)])}const pt=w(nt,[["render",ut],["__scopeId","data-v-9dfd0356"]]);const p=o=>($("data-v-fcb38e49"),o=o(),P(),o),mt={class:"container"},gt={class:"row justify-content-center"},_t={class:"col-xl-10 col-lg-12 col-md-9"},ft={class:"card o-hidden border-0 shadow-lg my-5"},vt={class:"card-body p-0"},wt={class:"row"},Ct=p(()=>s("div",{class:"col-lg-6 d-none d-lg-block bg-login-image"},null,-1)),bt={class:"col-lg-6"},kt={class:"p-5"},yt=p(()=>s("div",{class:"text-center"},[s("h1",{class:"h4 text-gray-900 mb-4"},"Selamat Datang!")],-1)),xt={class:"form-group"},Vt={class:"form-group"},Mt={class:"row"},St={class:"col-10"},It=["type"],$t={class:"col-2"},Pt={class:"form-group"},Bt={class:"custom-control custom-checkbox small"},Nt=p(()=>s("label",{class:"custom-control-label",for:"customCheck"},"Ingat Saya",-1)),Tt={key:0,class:"confirmHuman"},At=p(()=>s("img",{width:"48",height:"48",src:"https://img.icons8.com/fluency/48/checked.png",alt:"checked"},null,-1)),Lt=p(()=>s("button",{type:"submit",class:"btn btn-primary btn-user btn-block mt-3"}," Masuk ",-1)),Ut=p(()=>s("hr",null,null,-1)),Dt={data(){return{form:{email:null,password:null},uniqueValue:"",cheked:!1,captchaValidate:!0,showPassword:!1}},methods:{togglePasswordVisibility(){this.showPassword=!this.showPassword},captchaCode(o){this.captchaValidate=o},login(){const o=new FormData;o.append("email",this.form.email),o.append("password",this.form.password),K.post("https://apiamitie.lumirainternational.com/api/api/auth/login",o).then(t=>{if(this.cheked===!0){const a=JSON.stringify(this.form);localStorage.setItem("login",a)}else localStorage.getItem("login")&&localStorage.removeItem("login");const e=t.data.access_token;sessionStorage.setItem("token",e),this.$router.push("/dashboard")}).catch(t=>{console.error(t),this.captchaValidate=!0,W.fire({icon:"error",title:"Oops...",text:"Login gagal. Periksa kembali email dan password Anda."})})}},mounted(){const o=document.querySelector("body");o.style.backgroundImage="url(/img/bg-login.webp)",o.style.backgroundRepeat="no-repeat",o.style.backgroundSize="cover"},created(){const o=localStorage.getItem("login");o&&(this.form=JSON.parse(o),this.cheked=!0)}},Et=Object.assign(Dt,{__name:"LoginView",setup(o){return(t,e)=>(r(),h("div",mt,[I(pt),s("div",gt,[s("div",_t,[s("div",ft,[s("div",vt,[s("div",wt,[Ct,s("div",bt,[s("div",kt,[yt,s("form",{class:"user",onSubmit:e[5]||(e[5]=F((...a)=>t.login&&t.login(...a),["prevent"]))},[s("div",xt,[_(s("input",{type:"email",class:"form-control form-control-user",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Masukkan Email","onUpdate:modelValue":e[0]||(e[0]=a=>t.form.email=a)},null,512),[[C,t.form.email]])]),s("div",Vt,[s("div",Mt,[s("div",St,[_(s("input",{type:t.showPassword?"text":"password",class:"form-control form-control-user",id:"exampleInputPassword",placeholder:"Masukkan Password","onUpdate:modelValue":e[1]||(e[1]=a=>t.form.password=a)},null,8,It),[[J,t.form.password]])]),s("div",$t,[t.showPassword?g("",!0):(r(),h("i",{key:0,class:"bi customIcon bi-eye-slash-fill",onClick:e[2]||(e[2]=(...a)=>t.togglePasswordVisibility&&t.togglePasswordVisibility(...a))})),t.showPassword?(r(),h("i",{key:1,class:"bi customIcon bi-eye-fill",onClick:e[3]||(e[3]=(...a)=>t.togglePasswordVisibility&&t.togglePasswordVisibility(...a))})):g("",!0)])])]),s("div",Pt,[s("div",Bt,[_(s("input",{type:"checkbox",class:"custom-control-input",id:"customCheck","onUpdate:modelValue":e[4]||(e[4]=a=>t.cheked=a)},null,512),[[z,t.cheked]]),Nt])]),t.captchaValidate===!1?(r(),h("div",Tt,[At,G(" You are human ")])):g("",!0),t.captchaValidate===!0?(r(),S(lt,{key:1,onEmitCaptcha:t.captchaCode},null,8,["onEmitCaptcha"])):g("",!0),Lt],32),Ut])])])])])])])]))}}),Ht=w(Et,[["__scopeId","data-v-fcb38e49"]]);export{Ht as default};
