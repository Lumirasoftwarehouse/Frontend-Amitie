import{_ as c,o as l,c as n,a as o,w as m,b as r,v as p,d as u,e as d,f as g,p as h,g as _}from"./index-0d5f1814.js";import{a as f}from"./_commonjsHelpers-c7e3bb74.js";import{S as w}from"./sweetalert2.all-41f6cf70.js";const i=e=>(h("data-v-f841c4df"),e=e(),_(),e),b={class:"container"},y={class:"row justify-content-center"},k={class:"col-xl-10 col-lg-12 col-md-9"},v={class:"card o-hidden border-0 shadow-lg my-5"},S={class:"card-body p-0"},V={class:"row"},I=i(()=>o("div",{class:"col-lg-6 d-none d-lg-block bg-login-image"},null,-1)),P={class:"col-lg-6"},C={class:"p-5"},M=i(()=>o("div",{class:"text-center"},[o("h1",{class:"h4 text-gray-900 mb-4"},"Selamat Datang!")],-1)),D={class:"form-group"},L={class:"form-group"},N={class:"row"},O={class:"col-10"},B=["type"],E={class:"col-2"},U={class:"form-group"},j={class:"custom-control custom-checkbox small"},q=i(()=>o("label",{class:"custom-control-label",for:"customCheck"},"Ingat Saya",-1)),x=i(()=>o("button",{type:"submit",class:"btn btn-primary btn-user btn-block mt-3"}," Masuk ",-1)),J=i(()=>o("hr",null,null,-1)),$={data(){return{form:{email:null,password:null},uniqueValue:"",cheked:!1,captchaValidate:!0,showPassword:!1}},methods:{togglePasswordVisibility(){this.showPassword=!this.showPassword},captchaCode(e){this.captchaValidate=e},login(){const e=new FormData;e.append("email",this.form.email),e.append("password",this.form.password),f.post("https://apiamitie.lumirainternational.com/api/auth/login",e).then(s=>{if(this.cheked===!0){const a=JSON.stringify(this.form);localStorage.setItem("login",a)}else localStorage.getItem("login")&&localStorage.removeItem("login");const t=s.data.access_token;sessionStorage.setItem("token",t),this.$router.push("/nota")}).catch(s=>{console.error(s),this.captchaValidate=!0,w.fire({icon:"error",title:"Oops...",text:"Login gagal. Periksa kembali email dan password Anda."})})}},mounted(){const e=document.querySelector("body");e.style.backgroundImage="url(/img/bg-login.webp)",e.style.backgroundRepeat="no-repeat",e.style.backgroundSize="cover"},created(){const e=localStorage.getItem("login");e&&(this.form=JSON.parse(e),this.cheked=!0)}},z=Object.assign($,{__name:"LoginView",setup(e){return(s,t)=>(l(),n("div",b,[o("div",y,[o("div",k,[o("div",v,[o("div",S,[o("div",V,[I,o("div",P,[o("div",C,[M,o("form",{class:"user",onSubmit:t[5]||(t[5]=m((...a)=>s.login&&s.login(...a),["prevent"]))},[o("div",D,[r(o("input",{type:"email",class:"form-control form-control-user",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Masukkan Email","onUpdate:modelValue":t[0]||(t[0]=a=>s.form.email=a)},null,512),[[p,s.form.email]])]),o("div",L,[o("div",N,[o("div",O,[r(o("input",{type:s.showPassword?"text":"password",class:"form-control form-control-user",id:"exampleInputPassword",placeholder:"Masukkan Password","onUpdate:modelValue":t[1]||(t[1]=a=>s.form.password=a)},null,8,B),[[u,s.form.password]])]),o("div",E,[s.showPassword?d("",!0):(l(),n("i",{key:0,class:"bi customIcon bi-eye-slash-fill",onClick:t[2]||(t[2]=(...a)=>s.togglePasswordVisibility&&s.togglePasswordVisibility(...a))})),s.showPassword?(l(),n("i",{key:1,class:"bi customIcon bi-eye-fill",onClick:t[3]||(t[3]=(...a)=>s.togglePasswordVisibility&&s.togglePasswordVisibility(...a))})):d("",!0)])])]),o("div",U,[o("div",j,[r(o("input",{type:"checkbox",class:"custom-control-input",id:"customCheck","onUpdate:modelValue":t[4]||(t[4]=a=>s.cheked=a)},null,512),[[g,s.cheked]]),q])]),x],32),J])])])])])])])]))}}),R=c(z,[["__scopeId","data-v-f841c4df"]]);export{R as default};
