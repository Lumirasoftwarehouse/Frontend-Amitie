<script setup>
import Sidebar from "../components/admin/Sidebar.vue";
import Navbar from "../components/general/Navbar.vue";
import Footer from "../components/general/Footer.vue";
import Card from "../components/general/Card.vue";
import { ref } from "vue";

const sidebarToggled = ref(false);
const sidebarClass = ref("");

const toggleSidebar = () => {
  sidebarToggled.value = !sidebarToggled.value;
  sidebarClass.value = sidebarToggled.value ? "toggle-sidebar" : "";
};
</script>
<template>
  <div id="wrapper">
    <Sidebar :class="sidebarClass" />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Navbar @toggle-sidebar="toggleSidebar" />

        <!-- Begin Page Content -->
        <div class="container-fluid mt-4">
          <h1 class="h3 mb-0 text-gray-800 text-center">Dashboard</h1>
          
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <Footer />
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dataDashboard: [],
      user_id: "",
      ready: false,
      remainingTime: "Loading"
    };
  },
  methods: {
  },
  created() {
   
  },
};
</script>


<style>
#content-wrapper {
  min-height: 780px !important;
}
</style>
