import{_ as d,o as l,c as i,a as s,w as c,b as n,v as m,d as u,e as r,f as p}from"./index-a4dfc1b9.js";import{a as g}from"./axios-8e4517c3.js";import{S as h}from"./sweetalert2-50e64164.js";const b={class:"container"},f={class:"row justify-content-center"},w={class:"col-xl-10 col-lg-12 col-md-9"},k={class:"card o-hidden border-0 shadow-lg my-5"},y={class:"card-body p-0"},v={class:"row"},_={class:"col-lg-6"},V={class:"p-5"},P={class:"form-group"},S={class:"form-group"},I={class:"row"},C={class:"col-10"},M=["type"],D={class:"col-2"},L={class:"form-group"},N={class:"custom-control custom-checkbox small"},O={data(){return{form:{email:null,password:null},uniqueValue:"",cheked:!1,captchaValidate:!0,showPassword:!1}},methods:{togglePasswordVisibility(){this.showPassword=!this.showPassword},captchaCode(a){this.captchaValidate=a},login(){const a=new FormData;a.append("email",this.form.email),a.append("password",this.form.password),g.post("https://apirental.keuanganfpti.com/api/auth/login",a).then(e=>{if(this.cheked===!0){const t=JSON.stringify(this.form);localStorage.setItem("login",t)}else localStorage.getItem("login")&&localStorage.removeItem("login");const o=e.data.access_token;sessionStorage.setItem("token",o),e.data.level==="0"?this.$router.push("/stok"):this.$router.push("/pemesanan-ps")}).catch(e=>{console.error(e),this.captchaValidate=!0,h.fire({icon:"error",title:"Oops...",text:"Login gagal. Periksa kembali email dan password Anda."})})}},mounted(){const a=document.querySelector("body");a.style.backgroundImage="url(/img/bg-login.webp)",a.style.backgroundRepeat="no-repeat",a.style.backgroundSize="cover"},created(){const a=localStorage.getItem("login");a&&(this.form=JSON.parse(a),this.cheked=!0)}},B=Object.assign(O,{__name:"LoginView",setup(a){return(e,o)=>(l(),i("div",b,[s("div",f,[s("div",w,[s("div",k,[s("div",y,[s("div",v,[o[10]||(o[10]=s("div",{class:"col-lg-6 d-none d-lg-block bg-login-image"},null,-1)),s("div",_,[s("div",V,[o[8]||(o[8]=s("div",{class:"text-center"},[s("h1",{class:"h4 text-gray-900 mb-4"},"Selamat Datang!")],-1)),s("form",{class:"user",onSubmit:o[5]||(o[5]=c((...t)=>e.login&&e.login(...t),["prevent"]))},[s("div",P,[n(s("input",{type:"email",class:"form-control form-control-user",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Masukkan Email","onUpdate:modelValue":o[0]||(o[0]=t=>e.form.email=t)},null,512),[[m,e.form.email]])]),s("div",S,[s("div",I,[s("div",C,[n(s("input",{type:e.showPassword?"text":"password",class:"form-control form-control-user",id:"exampleInputPassword",placeholder:"Masukkan Password","onUpdate:modelValue":o[1]||(o[1]=t=>e.form.password=t)},null,8,M),[[u,e.form.password]])]),s("div",D,[e.showPassword?r("",!0):(l(),i("i",{key:0,class:"bi customIcon bi-eye-slash-fill",onClick:o[2]||(o[2]=(...t)=>e.togglePasswordVisibility&&e.togglePasswordVisibility(...t))})),e.showPassword?(l(),i("i",{key:1,class:"bi customIcon bi-eye-fill",onClick:o[3]||(o[3]=(...t)=>e.togglePasswordVisibility&&e.togglePasswordVisibility(...t))})):r("",!0)])])]),s("div",L,[s("div",N,[n(s("input",{type:"checkbox",class:"custom-control-input",id:"customCheck","onUpdate:modelValue":o[4]||(o[4]=t=>e.cheked=t)},null,512),[[p,e.cheked]]),o[6]||(o[6]=s("label",{class:"custom-control-label",for:"customCheck"},"Ingat Saya",-1))])]),o[7]||(o[7]=s("button",{type:"submit",class:"btn btn-primary btn-user btn-block mt-3"}," Masuk ",-1))],32),o[9]||(o[9]=s("hr",null,null,-1))])])])])])])])]))}}),j=d(B,[["__scopeId","data-v-49abb996"]]);export{j as default};
