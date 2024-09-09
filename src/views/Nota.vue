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
          <h1 class="h3 mb-0 text-gray-800 text-center">List Nota</h1>

          <button
            type="button"
            class="btn btn-primary float-end"
            data-toggle="modal"
            data-target="#modalAdd"
          >
            Tambah Nota<i class="bi bi-info"></i>
          </button>
          <div class="table-responsive">
            <div v-if="!ready" class="preloader text-center">Loading...</div>
            <DataTable class="display table table-striped" v-if="ready">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Aksi</th>
                  <th scope="col">Proses</th>
                  <th scope="col">Atas Nama</th>
                  <th scope="col">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in notes" :key="item.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#modalDetail"
                        @click="setData(item)"
                      >
                        <i class="bi bi-info"></i>
                      </button>

                      <button
                        type="button"
                        class="btn btn-warning"
                        data-toggle="modal"
                        data-target="#modalUpdate"
                        @click="setData(item)"
                      >
                        <i class="bi bi-pencil-square"></i>
                      </button>
                      <button type="button" class="btn btn-danger">
                        <i class="bi bi-trash-fill"></i>
                      </button>
                    </div>
                  </td>
                  <td>{{ item.proses }}</td>
                  <td>{{ item.atas_nama }}</td>
                  <td>{{ item.keterangan }}</td>
                </tr>
              </tbody>
            </DataTable>
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

  <!-- modal tambah nota -->
  <div
    class="modal fade"
    id="modalAdd"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalAddLabel"
    aria-hidden="true"
    ref="modalAddRef"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalAddLabel">Modal Tambah Nota</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createNote">
            <div class="row">
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Tempat"
                />
              </div>
              <div class="col-sm-4">
                <input
                  type="date"
                  class="form-control"
                />
              </div>
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="nama customer"
                />
              </div>
            </div>

            <div class="row mt-2">
              <span class="text-center h4 fw-bold text-dark">RECEIPT</span>
            </div>

            <div class="row">
              <!-- Kolom Kiri: Proses, Atas Nama, Kendaraan, No Polisi, Keterangan -->
              <div class="col-md-6 col-12 mb-3 border border-dark p-3">
                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label">Proses:</label>
                  <div class="col-md-8 col-12">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Proses"
                      v-model="newNota.proses"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label"
                    >Atas Nama:</label
                  >
                  <div class="col-md-8 col-12">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Atas Nama"
                      v-model="newNota.atas_nama"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label"
                    >Kendaraan:</label
                  >
                  <div class="col-md-8 col-12">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Kendaraan"
                      v-model="newNota.kendaraan"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label"
                    >No Polisi:</label
                  >
                  <div class="col-md-8 col-12">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="No Polisi"
                      v-model="newNota.no_polisi"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label"
                    >Keterangan:</label
                  >
                  <div class="col-md-8 col-12">
                    <textarea
                      class="form-control"
                      placeholder="Keterangan"
                      v-model="newNota.keterangan"
                    ></textarea>
                  </div>
                </div>
              </div>

              <!-- Kolom Kanan: Resmi STNK, Jasa, Lain-lain, Total -->
              <div class="col-md-6 col-12 mb-3 border border-dark p-3">
                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label"
                    >Resmi STNK (Rp.):</label
                  >
                  <div class="col-md-8 col-12">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Harga Resmi STNK"
                      v-model="newNota.stnk_resmi"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label"
                    >Jasa (Rp.):</label
                  >
                  <div class="col-md-8 col-12">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Harga Jasa"
                      v-model="newNota.jasa"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label"
                    >Lain-lain (Rp.):</label
                  >
                  <div class="col-md-8 col-12">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Harga Lain-lain"
                      v-model="newNota.lain_lain"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label"
                    >Total (Rp.):</label
                  >
                  <div class="col-md-8 col-12">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Total"
                      :value="newNota.jasa + newNota.lain_lain + newNota.stnk_resmi"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- test -->

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- end modal tambah nota -->

  <!-- modal detail -->
  <div
    class="modal fade"
    id="modalDetail"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalDetailLabel"
    aria-hidden="true"
    ref="modalDetailRef"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalDetailLabel">Modal Detail Nota</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createNote">
            <div class="row">
              <div class="col-sm-4"></div>
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Tempat, DD MONTH YYYY"
                  disabled
                />
              </div>
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="nama customer"
                  disabled
                />
              </div>
            </div>

            <div class="row mt-2">
              <span class="text-center h4 fw-bold text-dark">RECEIPT</span>
            </div>

            <div class="row">
              <!-- Kolom Kiri: Proses, Atas Nama, Kendaraan, No Polisi, Keterangan -->
              <div class="col-md-6 col-12 mb-3 border border-dark p-3">
                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label">Proses:</label>
                  <div class="col-md-8 col-12">
                    <input
                      type="text"
                      class="form-control"
                      v-model="detailNota.proses"
                      disabled
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label"
                    >Atas Nama:</label
                  >
                  <div class="col-md-8 col-12">
                    <input
                      type="text"
                      class="form-control"
                      v-model="detailNota.atas_nama"
                      disabled
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label"
                    >Kendaraan:</label
                  >
                  <div class="col-md-8 col-12">
                    <input
                      type="text"
                      class="form-control"
                      v-model="detailNota.kendaraan"
                      disabled
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label"
                    >No Polisi:</label
                  >
                  <div class="col-md-8 col-12">
                    <input
                      type="text"
                      class="form-control"
                      v-model="detailNota.no_polisi"
                      disabled
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label"
                    >Keterangan:</label
                  >
                  <div class="col-md-8 col-12">
                    <textarea
                      class="form-control"
                      v-model="detailNota.keterangan"
                      disabled
                    ></textarea>
                  </div>
                </div>
              </div>

              <!-- Kolom Kanan: Resmi STNK, Jasa, Lain-lain, Total -->
              <div class="col-md-6 col-12 mb-3 border border-dark p-3">
                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label"
                    >Resmi STNK (Rp.):</label
                  >
                  <div class="col-md-8 col-12">
                    <input
                      type="number"
                      class="form-control"
                      v-model="detailNota.stnk_resmi"
                      disabled
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label"
                    >Jasa (Rp.):</label
                  >
                  <div class="col-md-8 col-12">
                    <input
                      type="number"
                      class="form-control"
                      v-model="detailNota.jasa"
                      disabled
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label"
                    >Lain-lain (Rp.):</label
                  >
                  <div class="col-md-8 col-12">
                    <input
                      type="number"
                      class="form-control"
                      v-model="detailNota.lain_lain"
                      disabled
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-4 col-12 col-form-label"
                    >Total (Rp.):</label
                  >
                  <div class="col-md-8 col-12">
                    <input
                      type="number"
                      class="form-control"
:value="Number(detailNota.jasa) + Number(detailNota.lain_lain) + Number(detailNota.stnk_resmi)"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- test -->

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- end modal detail -->
</template>
<script>
import axios from "axios";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
DataTable.use(DataTablesCore);
import Swal from "sweetalert2";

export default {
  data() {
    return {
      notes: [],
      newNota: {
        proses: "",
        atas_nama: "",
        kendaraan: "",
        no_polisi: "",
        keterangan: "",
        stnk_resmi: "",
        jasa: "",
        lain_lain: "",
      },
      detailNota:[],
      user_id: "",
      ready: false,
      remainingTime: "Loading",
    };
  },
  methods: {
    setData(nota){
      this.detailNota = nota;
    },
    async createNote() {
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/api/nota/create`,
          this.newNota,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.fetchDataNotes();
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: `Data ${this.currentTab} berhasil diupdate`,
        });
        $("#modalAdd").modal("hide");
        this.resetForm(); // Reset form
      } catch (error) {
        console.error("Error creating note:", error);
      }
    },
    resetForm() {
      this.newNota = {
        proses: "",
        atas_nama: "",
        kendaraan: "",
        no_polisi: "",
        keterangan: "",
        stnk_resmi: "",
        jasa: 0,
        lain_lain: "",
      };
    },
    async fetchDataNotes() {
      try {
        this.ready = false;
        const response = await axios.get(
          `http://127.0.0.1:8000/api/nota/list`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.notes = response.data.data;
        this.ready = true;
      } catch (error) {
        this.ready = true;
        console.error(error);
      }
    },
  },
  created() {
    this.fetchDataNotes();
  },
};
</script>


<style>
#content-wrapper {
  min-height: 780px !important;
}
</style>
