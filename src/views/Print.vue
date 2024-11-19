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
                  <router-link to="/nota" class="btn btn-danger mb-5"
                    >Kembali</router-link
                  >
                </div>
                <div class="col-6">
                  <button
                    @click="exportToPDF()"
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
              <!-- Detail Nota -->
              <div v-if="note.length > 0">
                <div v-for="(item, index) in note" :key="index">
                  <div class="row border border-dark mb-3">
                    <div class="row border border-dark">
                      <div class="col-6">
                        <h3 class="fw-bold text-center mt-4">INVOICE</h3>
                      </div>
                      <div class="col-6">
                        <div class="row">
                          <div class="col-8">
                            <h6 class="text-center">Biro Jasa</h6>
                            <h5 class="fw-bold text-center">"AMITIE"</h5>
                            
                          </div>
                          <div class="col-4">
                            <img src="/img/amitie.jpg" alt="logo" width="80" />
                          </div>
                          <span style="font-size: 10px"
                          >Jl. Bidara Raya No. 9 RT.02 RW.04 Jembatan Dua,
                          Jakarta Utara Telp. 021-6620191, 021-6625312</span
                        >
                        </div>
                      </div>
                    </div>
                  

                    <div class="row ms-2 mt-3">
                      <div class="col-9">
                        <h5>Kepada:</h5>
                        <h5>{{ alamat }}</h5>
                        <h5>{{ pelanggan }}</h5>

                      </div>
                      <div class="col-3">
                        <h6 class="">Tanggal:</h6>
                        <h6 class="">{{ tanggal }}</h6>
                      </div>
                    </div>
                    
                    <h4 class="text-center mt-3">Receipt {{ index + 1 }}</h4>
                    <div class="row">
                      <div class="col-6 border border-dark p-3 mb-3">
                        <div class="row">
                          <div class="col-4"><strong>Proses</strong></div>
                          <div class="col-8">: {{ item.proses }}</div>
                        </div>
                        <div class="row">
                          <div class="col-4"><strong>Atas Nama</strong></div>
                          <div class="col-8">: {{ item.atas_nama }}</div>
                        </div>
                        <div class="row">
                          <div class="col-4"><strong>Kendaraan</strong></div>
                          <div class="col-8">: {{ item.kendaraan }}</div>
                        </div>
                        <div class="row">
                          <div class="col-4"><strong>No Polisi</strong></div>
                          <div class="col-8">: {{ item.no_polisi }}</div>
                        </div>
                        <div class="row">
                          <div class="col-4"><strong>Keterangan</strong></div>
                          <div class="col-8">
                            :<span
                              v-html="formatKeterangan(item.keterangan)"
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div class="col-6 border border-dark p-3 mb-3">
                        <div class="row">
                          <div class="col-4"><strong>STNK Resmi</strong></div>
                          <div class="col-8">
                            : {{ formatCurrency(item.stnk_resmi) }}
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4"><strong>Jasa</strong></div>
                          <div class="col-8">
                            : {{ formatCurrency(item.jasa) }}
                          </div>
                        </div>
                        <strong>Biaya Lain</strong>
                        <div v-for="lain in item.biaya_lain" :key="lain.id">
                          <div class="row">
                            <div class="col-4">{{ lain.label }}</div>
                            <div class="col-8">
                              : {{ formatCurrency(lain.nominal) }}
                            </div>
                          </div>
                        </div>
                        <!-- <div class="row">
                          <div class="col-4"><strong>Lain-lain</strong></div>
                          <div class="col-8">: {{ formatCurrency(item.lain_1) }}</div>
                        </div>
                        <div class="row">
                          <div class="col-4"></div>
                          <div class="col-8">: {{ formatCurrency(item.lain_2) }}</div>
                        </div>
                        <div class="row">
                          <div class="col-4"></div>
                          <div class="col-8">: {{ formatCurrency(item.lain_3) }}</div>
                        </div>
                        <div class="row">
                          <div class="col-4"></div>
                          <div class="col-8">: {{ formatCurrency(item.lain_4) }}</div>
                        </div> -->
                        <div class="row">
                          <div class="col-4"><strong>Total</strong></div>
                          <div class="col-8">
                            : {{ formatCurrency(item.total) }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h5 class="text-end" v-if="note.length - 1 == index">
                    Jumlah Keseluruhan: {{ formatCurrency(grandTotal) }}
                  </h5>
                  <br /><br /><br /><br /><br /><br />
                  <!-- Keterangan Cetak -->
                  <div class="row mt-2" v-if="note.length - 1 == index">
                    <small
                      >Dokument ini dicetak pada: {{ now.date }}
                      {{ now.time }}</small
                    >
                  </div>
                  <br /><br /><br /><br /><br /><br />
                  <br /><br /><br /><br /><br /><br /><br />
                  <br><br><br>
                </div>
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

<script>
import axios from "axios";
import html2pdf from "html2pdf.js";
import Navbar from "../components/general/Navbar.vue";
import Footer from "../components/general/Footer.vue";
import Sidebar from "../components/admin/Sidebar.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Navbar,
    Footer,
    Sidebar,
  },
  props: {
    id: {
      type: Number, // Karena sudah di-convert ke integer
      required: true,
    },
    index: {
      type: Number, // Karena sudah di-convert ke integer
      required: true,
    },
  },
  data() {
    return {
      note: [],
      alamat: "",
      tanggal: "",
      pelanggan: "",
      now: {},
      load: true,
    };
  },
  computed: {
    grandTotal() {
      return this.note.reduce((sum, item) => sum + parseFloat(item.total), 0);
    },
  },
  methods: {
    formatKeterangan(keterangan) {
      // Ganti semua newline (\n) dengan <br> untuk membuat baris baru
      return keterangan ? keterangan.replace(/\n/g, "<br> ") : "";
    },
    getCurrentDateTime() {
      const date = new Date();
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      this.now = {
        date: `${day}-${month}-${year}`,
        time: `${hours}:${minutes}:${seconds}`,
      };
    },
    async fetchData() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/nota/detail/${this.id}`
        );
        this.note = response.data.data.notes;
        this.alamat = response.data.data.alamat;
        this.tanggal = response.data.data.tanggal;
        this.pelanggan = response.data.data.nama_pelanggan;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    exportToPDF() {
      const element = document.getElementById("element-to-convert");
      const opt = {
        margin: 1,
        filename: `nota_${this.pelanggan}_${this.tanggal}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };
      html2pdf().from(element).set(opt).save();
    },
    formatCurrency(value) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(value);
    },
  },
  created() {
    if (this.index == 1) {
      //window.location.href = `http://localhost:5173/print?id=${this.id}`;
      window.location.href = `https://amitie.lumirainternational.com/print?id=${this.id}`;
    }
    // this.idNota = this.$route.query.id;
    this.getCurrentDateTime();
    this.fetchData();
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .imageCustom {
    width: 100% !important;
  }
}
#app {
  margin-top: 60px;
}
</style>