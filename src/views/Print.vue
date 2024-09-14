<template>
  <div id="wrapper">
    <Sidebar :class="sidebarClass" />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Navbar @toggle-sidebar="toggleSidebar" />

        <!-- Begin Page Content -->
        <div id="app" ref="document">
          <div class="row mt-4">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row">
                <div class="col-6">
                  <router-link to="/" class="btn btn-danger mb-5"
                    >Kembali</router-link
                  >
                </div>
                <div class="col-6">
                  <button
                    @click="exportToPDF"
                    class="btn btn-success float-end"
                  >
                    Export to PDF
                  </button>
                </div>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
          <div id="element-to-convert">
            <div class="text-black bg-white">
              <!-- header -->
              <!-- Detail Nota -->
                  <div v-if="note.length > 0">
                    <div v-for="(item, index) in note" :key="index">
                      <div class="row border border-dark p-3 mb-3">
                        <div class="col-6">
                          <div class="row">
                            <div class="col-4">
                              <img
                                src="/img/amitie.jpg"
                                alt="logo"
                                width="100"
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="text-center">Biro Jasa</h5>
                              <h3 class="fw-bold text-center">"AMITIE"</h3>
                              <span style="font-size: 12px"
                                >Jl. Bidara Raya No. 9 RT.02 RW.04 Jembatan Dua,
                                Jakarta Utara Telp. 021-6620191,
                                021-6625312</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="row mt-5">
                            <div class="col-6">
                              <p>{{ alamat + ", " + tanggal }}</p>
                            </div>
                            <div class="col-6">
                              <p>{{ pelanggan }}</p>
                            </div>
                          </div>
                        </div>
                        <h4 class="text-center mt-3">Receipt {{ index + 1 }}</h4>
                      <div class="row">
                        <div class="col-6 border border-dark p-3 mb-3">
                          <p><strong>Proses:</strong> {{ item.proses }}</p>
                          <p>
                            <strong>Atas Nama:</strong> {{ item.atas_nama }}
                          </p>
                          <p>
                            <strong>Kendaraan:</strong> {{ item.kendaraan }}
                          </p>
                          <p>
                            <strong>No Polisi:</strong> {{ item.no_polisi }}
                          </p>
                          <p>
                            <strong>Keterangan:</strong> {{ item.keterangan }}
                          </p>
                        </div>
                        <div class="col-6 border border-dark p-3 mb-3">
                          <p>
                            <strong>STNK Resmi:</strong>
                            {{ formatCurrency(item.stnk_resmi) }}
                          </p>
                          <p>
                            <strong>Jasa:</strong>
                            {{ formatCurrency(item.jasa) }}
                          </p>
                          <p>
                            <strong>Lain-lain:</strong>
                            {{ formatCurrency(item.lain_lain) }}
                          </p>
                          <p>
                            <strong>Total:</strong>
                            {{ formatCurrency(item.total) }}
                          </p>
                        </div>
                      </div>
                      </div>
                      
                    </div>
                    <h5 class="text-end">
                      Jumlah Keseluruhan: {{ formatCurrency(grandTotal) }}
                    </h5>
                  </div>

                  <!-- keterangan cetak -->
                  <div class="row mt-2">
                    <small
                      >Dokument ini dicetak pada: {{ now.date }}
                      {{ now.time }}</small
                    >
                  </div>
            </div>
          </div>
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

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import html2pdf from "html2pdf.js";
import Navbar from "../components/general/Navbar.vue";
import Footer from "../components/general/Footer.vue";
import Sidebar from "../components/admin/Sidebar.vue"; // Assuming Sidebar component exists

const route = useRoute();
const note = ref([]);
const alamat = ref("");
const tanggal = ref("");
const pelanggan = ref("");
const now = ref({});

const getCurrentDateTime = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  now.value = {
    date: `${day}-${month}-${year}`,
    time: `${hours}:${minutes}:${seconds}`,
  };
};

const fetchData = async (id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_ENDPOINT}/nota/detail/${id}`
    );
    note.value = response.data.data.notes;
    alamat.value = response.data.data.alamat;
    tanggal.value = response.data.data.tanggal;
    pelanggan.value = response.data.data.nama_pelanggan;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const exportToPDF = () => {
  const element = document.getElementById("element-to-convert");
  const opt = {
    margin: 1,
    filename: "document.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().from(element).set(opt).save();
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};

const grandTotal = computed(() => {
  return note.value.reduce((sum, item) => sum + parseFloat(item.total), 0);
});

onMounted(() => {
  getCurrentDateTime();
  const id = route.query.id;
  if (id) {
    fetchData(id);
  }
});
</script>

<style scoped>
@media (max-width: 768px) {
  .imageCustom {
    width: 100% !important;
  }
}

.surat {
  background-color: #ffffff !important;
}
hr {
  border: none;
  height: 3px;
  color: #000000 !important; /* old IE */
  background-color: #000000 !important; /* Modern Browsers */
}
#app {
  margin-top: 60px;
}
</style>
