import{_ as n,E as _,o as r,c as i,a as t,h as u,A as g,n as h,C as b,w as v,t as k,B as c,p as m,g as p}from"./index-a4fa4119.js";const w={},x=b('<a class="sidebar-brand d-flex align-items-center justify-content-center" href="#"><div class="sidebar-brand-icon mt-2"></div><div class="sidebar-brand-text ms-3"><span class="text-primary">Biro Jasa AMITIE</span></div></a><div class="sidebar-heading mt-5 text-primary">Menu</div>',2),y={class:"nav-item"},B=t("i",{class:"bi bi-journal-text text-primary fw-bold"},null,-1),$=t("span",null,"Nota",-1),S=t("hr",{class:"sidebar-divider d-none d-md-block"},null,-1);function T(o,a){const d=_("router-link");return r(),i("ul",{class:h(["navbar-nav bg-light sidebar sidebar-dark accordion",{toggled:o.sidebarToggled}]),id:"accordionSidebar"},[x,t("li",y,[u(d,{class:"nav-link text-primary",to:"/nota","active-class":"font-weight-bold text-primary active-link"},{default:g(()=>[B,$]),_:1})]),S],2)}const Y=n(w,[["render",T]]),C="/img/nobi.jpg";const I={props:{sidebarToggled:Boolean},data(){return{name:"",gambar:"",user_id:""}},methods:{sidebarToggled(){this.$emit("toggle-sidebar",!this.sidebarToggled)},konfirmasi(){Swal.fire({title:"Apakah Anda yakin ingin logout?",text:"Anda akan keluar dari akun ini.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Logout",cancelButtonText:"Batal"}).then(o=>{o.isConfirmed})},logout(){const o=sessionStorage.getItem("token");if(!o){Swal.fire({title:"Logout gagal",text:"Token tidak ditemukan.",icon:"error",confirmButtonColor:"#d33"});return}axios.post("https://backend-sblf.lumirainternational.com/api/auth/logout",null,{headers:{Authorization:"Bearer "+o}}).then(a=>{Swal.fire({title:"Logout berhasil!",icon:"success",timer:1500,timerProgressBar:!0,showConfirmButton:!1}),sessionStorage.removeItem("token"),this.$router.push("/")}).catch(a=>{console.error(a),Swal.fire({title:"Logout gagal",text:"Terjadi kesalahan saat melakukan logout.",icon:"error",confirmButtonColor:"#d33"})})}},created(){}},e=o=>(m("data-v-a28d8efd"),o=o(),p(),o),N={class:"navbar navbar-expand navbar-light customNav bg-primary topbar mb-4 static-top shadow"},A=e(()=>t("i",{class:"fa fa-bars"},null,-1)),M=[A],L={class:"navbar-nav ml-auto"},j=e(()=>t("div",{class:"topbar-divider d-none d-sm-block"},null,-1)),E={class:"nav-item dropdown no-arrow"},V={class:"nav-link dropdown-toggle",href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},D={class:"mr-2 d-none d-lg-inline text-white small"},F=e(()=>t("img",{class:"img-profile rounded-circle",src:C},null,-1)),z={class:"dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userDropdown"},J=e(()=>t("i",{class:"fas fa-solid fa-user fa-sm fa-fw mr-2 text-gray-400"},null,-1)),P=e(()=>t("i",{class:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"},null,-1));function q(o,a,d,U,W,s){const f=_("router-link");return r(),i("nav",N,[t("form",{class:"form-inline",onSubmit:a[1]||(a[1]=v(()=>{},["prevent"]))},[t("button",{id:"sidebarToggleTop",class:"btn btn-link d-md-none rounded-circle mr-3 text-light",onClick:a[0]||(a[0]=(...l)=>s.sidebarToggled&&s.sidebarToggled(...l))},M)],32),t("ul",L,[j,t("li",E,[t("a",V,[t("span",D,k(this.name),1),F]),t("div",z,[u(f,{class:"dropdown-item",to:"/admin-profile","data-toggle":"modal","data-target":"#logoutModal"},{default:g(()=>[J,c(" Profil ")]),_:1}),t("a",{class:"dropdown-item",href:"#","data-toggle":"modal","data-target":"#logoutModal",onClick:a[2]||(a[2]=l=>s.konfirmasi())},[P,c(" Logout ")])])])])])}const Z=n(I,[["render",q],["__scopeId","data-v-a28d8efd"]]);const G={},H=o=>(m("data-v-c290040e"),o=o(),p(),o),K={class:"sticky-footer customNav bg-primary"},O=H(()=>t("div",{class:"container my-auto"},[t("div",{class:"copyright text-center my-auto"},[t("strong",null,"Copyright © Biro Jasa AMITIE 2024")])],-1)),Q=[O];function R(o,a){return r(),i("footer",K,Q)}const tt=n(G,[["render",R],["__scopeId","data-v-c290040e"]]);export{tt as F,Z as N,Y as S};
