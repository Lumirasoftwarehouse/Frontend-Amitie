import{_ as p,o as l,c as n,w as h,v as g,a as o,b as m,n as b,p as u,d as _,e as f,f as k,g as y,h as v}from"./index-b700193f.js";import{a as C,S as x}from"./sweetalert2.all-1e3fb24f.js";const S={data(){return{showChatBox:!1,message:"",phoneNumber:"081907150504",nama:"",lokasi:""}},methods:{toggleChatBox(){this.showChatBox=!this.showChatBox,this.showChatBox||(this.message="")},async sendMessage(){const e=encodeURIComponent(this.message),s=sessionStorage.getItem("token");if(s)try{const t=JSON.parse(atob(s.split(".")[1]));this.nama=t.name,this.lokasi=t.namaLokasi;const a=`https://wa.me/${this.phoneNumber}?text=Nama%3A%20${this.nama}%0ALokasi%3A%20${this.lokasi}%0APath%3A%20${this.$route.path}%0APesan%3A%20${e}`;window.open(a,"_blank"),this.message="",this.toggleChatBox()}catch(t){console.error("Error decoding token:",t)}else{const t=`https://wa.me/${this.phoneNumber}?text=${e}`;window.open(t,"_blank"),this.message="",this.toggleChatBox()}}},created(){}},w=e=>(u("data-v-9dfd0356"),e=e(),_(),e),I={class:"chat-container"},V={key:0,class:"chat-box"},P=w(()=>o("div",{class:"text-primary fw-bold"},"Halo, ada yang bisa dibantu?",-1)),B=w(()=>o("i",{class:"fab fa-whatsapp"},null,-1)),M=[B];function $(e,s,t,a,r,c){return l(),n("div",I,[r.showChatBox?(l(),n("div",V,[P,h(o("textarea",{class:"form-control",id:"chat","onUpdate:modelValue":s[0]||(s[0]=i=>r.message=i),rows:"2"},null,512),[[g,r.message]]),o("button",{onClick:s[1]||(s[1]=(...i)=>c.sendMessage&&c.sendMessage(...i)),class:"float-end"},"Kirim")])):m("",!0),o("div",{class:b(["whatsapp-icon",{active:r.showChatBox}]),onClick:s[2]||(s[2]=(...i)=>c.toggleChatBox&&c.toggleChatBox(...i))},M,2)])}const N=p(S,[["render",$],["__scopeId","data-v-9dfd0356"]]);const d=e=>(u("data-v-eb6a4222"),e=e(),_(),e),A={class:"container"},U={class:"row justify-content-center"},L={class:"col-xl-10 col-lg-12 col-md-9"},D={class:"card o-hidden border-0 shadow-lg my-5"},O={class:"card-body p-0"},E={class:"row"},J=d(()=>o("div",{class:"col-lg-6 d-none d-lg-block bg-login-image"},null,-1)),j={class:"col-lg-6"},q={class:"p-5"},z=d(()=>o("div",{class:"text-center"},[o("h1",{class:"h4 text-gray-900 mb-4"},"Selamat Datang!")],-1)),H={class:"form-group"},R={class:"form-group"},F={class:"row"},K={class:"col-10"},T=["type"],G={class:"col-2"},Q={class:"form-group"},W={class:"custom-control custom-checkbox small"},X=d(()=>o("label",{class:"custom-control-label",for:"customCheck"},"Ingat Saya",-1)),Y=d(()=>o("button",{type:"submit",class:"btn btn-primary btn-user btn-block mt-3"}," Masuk ",-1)),Z=d(()=>o("hr",null,null,-1)),ss={data(){return{form:{email:null,password:null},uniqueValue:"",cheked:!1,captchaValidate:!0,showPassword:!1}},methods:{togglePasswordVisibility(){this.showPassword=!this.showPassword},captchaCode(e){this.captchaValidate=e},login(){const e=new FormData;e.append("email",this.form.email),e.append("password",this.form.password),C.post("https://apiamitie.lumirainternational.com/api/auth/login",e).then(s=>{if(this.cheked===!0){const a=JSON.stringify(this.form);localStorage.setItem("login",a)}else localStorage.getItem("login")&&localStorage.removeItem("login");const t=s.data.access_token;sessionStorage.setItem("token",t),this.$router.push("/dashboard")}).catch(s=>{console.error(s),this.captchaValidate=!0,x.fire({icon:"error",title:"Oops...",text:"Login gagal. Periksa kembali email dan password Anda."})})}},mounted(){const e=document.querySelector("body");e.style.backgroundImage="url(/img/bg-login.webp)",e.style.backgroundRepeat="no-repeat",e.style.backgroundSize="cover"},created(){const e=localStorage.getItem("login");e&&(this.form=JSON.parse(e),this.cheked=!0)}},os=Object.assign(ss,{__name:"LoginView",setup(e){return(s,t)=>(l(),n("div",A,[f(N),o("div",U,[o("div",L,[o("div",D,[o("div",O,[o("div",E,[J,o("div",j,[o("div",q,[z,o("form",{class:"user",onSubmit:t[5]||(t[5]=k((...a)=>s.login&&s.login(...a),["prevent"]))},[o("div",H,[h(o("input",{type:"email",class:"form-control form-control-user",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Masukkan Email","onUpdate:modelValue":t[0]||(t[0]=a=>s.form.email=a)},null,512),[[g,s.form.email]])]),o("div",R,[o("div",F,[o("div",K,[h(o("input",{type:s.showPassword?"text":"password",class:"form-control form-control-user",id:"exampleInputPassword",placeholder:"Masukkan Password","onUpdate:modelValue":t[1]||(t[1]=a=>s.form.password=a)},null,8,T),[[y,s.form.password]])]),o("div",G,[s.showPassword?m("",!0):(l(),n("i",{key:0,class:"bi customIcon bi-eye-slash-fill",onClick:t[2]||(t[2]=(...a)=>s.togglePasswordVisibility&&s.togglePasswordVisibility(...a))})),s.showPassword?(l(),n("i",{key:1,class:"bi customIcon bi-eye-fill",onClick:t[3]||(t[3]=(...a)=>s.togglePasswordVisibility&&s.togglePasswordVisibility(...a))})):m("",!0)])])]),o("div",Q,[o("div",W,[h(o("input",{type:"checkbox",class:"custom-control-input",id:"customCheck","onUpdate:modelValue":t[4]||(t[4]=a=>s.cheked=a)},null,512),[[v,s.cheked]]),X])]),Y],32),Z])])])])])])])]))}}),as=p(os,[["__scopeId","data-v-eb6a4222"]]);export{as as default};
