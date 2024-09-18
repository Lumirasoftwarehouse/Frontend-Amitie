<template>
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
          <!-- Header Section -->
          <div class="row">
            <div class="col-sm-4">
              <input
                v-model="header.alamat"
                type="text"
                class="form-control"
                placeholder="Alamat"
              />
            </div>
            <div class="col-sm-4">
              <input
                v-model="header.tanggal"
                type="date"
                class="form-control"
              />
            </div>
            <div class="col-sm-4">
              <input
                v-model="header.pelanggan"
                type="text"
                class="form-control"
                placeholder="Nama Customer"
              />
            </div>
          </div>

          <!-- Button to Add Notes -->
          <div class="row mt-3 mb-2">
            <div class="col-12">
              <button
                type="button"
                class="btn btn-primary mb-2 float-end"
                @click="addNote"
              >
                Tambah Nota
              </button>
            </div>
          </div>

          <form @submit.prevent="submitNotes">
            <!-- Looping for Notes -->
            <div v-for="(note, index) in notes" :key="index" class="mb-4">
              <div class="row border border-dark p-2">
                <div class="row mt-2 mb-2">
                  <div class="col-8">
                    <span class="text-center h4 fw-bold text-dark float-end">
                      RECEIPT {{ index + 1 }}
                    </span>
                  </div>
                  <div class="col-4">
                    <button
                      type="button"
                      class="btn btn-danger fload-end"
                      @click="removeNote(index)"
                    >
                      <i class="bi bi-trash3-fill"></i>
                    </button>
                  </div>
                </div>

                <!-- Note Content Section -->
                <div class="row">
                  <div class="col-md-6 col-12 mb-3 border border-dark p-3">
                    <div class="form-group row">
                      <label class="col-md-4 col-12 col-form-label"
                        >Proses:</label
                      >
                      <div class="col-md-8 col-12">
                        <input
                          v-model="note.proses"
                          type="text"
                          class="form-control"
                          placeholder="Proses"
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-md-4 col-12 col-form-label"
                        >Atas Nama:</label
                      >
                      <div class="col-md-8 col-12">
                        <input
                          v-model="note.atas_nama"
                          type="text"
                          class="form-control"
                          placeholder="Atas Nama"
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-md-4 col-12 col-form-label"
                        >Kendaraan:</label
                      >
                      <div class="col-md-8 col-12">
                        <input
                          v-model="note.kendaraan"
                          type="text"
                          class="form-control"
                          placeholder="Kendaraan"
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-md-4 col-12 col-form-label"
                        >No Polisi:</label
                      >
                      <div class="col-md-8 col-12">
                        <input
                          v-model="note.no_polisi"
                          type="text"
                          class="form-control"
                          placeholder="No Polisi"
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-md-4 col-12 col-form-label"
                        >Keterangan:</label
                      >
                      <div class="col-md-8 col-12">
                        <textarea
                          v-model="note.keterangan"
                          class="form-control"
                          placeholder="Keterangan"
                          rows="5"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 col-12 mb-3 border border-dark p-3">
                    <div class="form-group row">
                      <label class="col-md-4 col-12 col-form-label"
                        >Resmi STNK</label
                      >
                      <div class="col-md-8 col-12">
                        <input
                          v-model="note.formattedStnkResmi"
                          @input="updateCurrency(note, 'stnk_resmi', $event)"
                          type="text"
                          class="form-control"
                          placeholder="Harga Resmi STNK"
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-md-4 col-12 col-form-label"
                        >Jasa</label
                      >
                      <div class="col-md-8 col-12">
                        <input
                          v-model="note.formattedJasa"
                          @input="updateCurrency(note, 'jasa', $event)"
                          type="text"
                          class="form-control"
                          placeholder="Harga Jasa"
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-md-4 col-12 col-form-label"
                        >Lain-lain</label
                      >
                      <div class="col-md-8 col-12">
                        <input
                          v-model="note.formattedLain1"
                          @input="updateCurrency(note, 'lain_1', $event)"
                          type="text"
                          class="form-control"
                          placeholder="Harga Lain-lain 1"
                        />
                      </div>
                    </div>

                    <div class="form-group row" v-if="note.lain_1!=0">
                      <label class="col-md-4 col-12 col-form-label"></label>
                      <div class="col-md-8 col-12 float-end">
                        <input
                          v-model="note.formattedLain2"
                          @input="updateCurrency(note, 'lain_2', $event)"
                          type="text"
                          class="form-control"
                          placeholder="Harga Lain-lain 2"
                        />
                      </div>
                    </div>

                    <div class="form-group row" v-if="note.lain_2!=0">
                      <label class="col-md-4 col-12 col-form-label"></label>
                      <div class="col-md-8 col-12">
                        <input
                          v-model="note.formattedLain3"
                          @input="updateCurrency(note, 'lain_3', $event)"
                          type="text"
                          class="form-control"
                          placeholder="Harga Lain-lain 3"
                        />
                      </div>
                    </div>

                    <div class="form-group row" v-if="note.lain_3!=0">
                      <label class="col-md-4 col-12 col-form-label"></label>
                      <div class="col-md-8 col-12">
                        <input
                          v-model="note.formattedLain4"
                          @input="updateCurrency(note, 'lain_4', $event)"
                          type="text"
                          class="form-control"
                          placeholder="Harga Lain-lain 4"
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-md-4 col-12 col-form-label"
                        >Total (Rp.):</label
                      >
                      <div class="col-md-8 col-12">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Total"
                          :value="
                            formatCurrency(
                              note.stnk_resmi + note.jasa + note.lain_1 + note.lain_2 + note.lain_3 + note.lain_4 
                            )
                          "
                          readonly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Grand Total Section -->
            <div class="row mt-3">
              <div class="col-12 text-end">
                <h5>Jumlah Keseluruhan: {{ formatCurrency(grandTotal) }}</h5>
              </div>
            </div>

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
</template>

<script>
export default {
  data() {
    return {
      header: {
        alamat: "",
        tanggal: "",
        pelanggan: "",
      },
      notes: [
        {
          proses: "",
          atas_nama: "",
          kendaraan: "",
          no_polisi: "",
          keterangan: "",
          stnk_resmi: 0,
          formattedStnkResmi: "Rp. 0",
          jasa: 0,
          formattedJasa: "Rp. 0",
          lain_lain: 0,
          formattedLainLain: "Rp. 0",
          lain_1: 0,
          formattedLain1: "Rp. 0",
          lain_2: 0,
          formattedLain2: "Rp. 0",
          lain_3: 0,
          formattedLain3: "Rp. 0",
          lain_4: 0,
          formattedLain4: "Rp. 0",
          total: 0,
        },
      ],
    };
  },

  computed: {
    grandTotal() {
      return this.notes.reduce((sum, note) => {
        return (
          sum +
          (parseFloat(note.stnk_resmi) || 0) +
          (parseFloat(note.jasa) || 0) +
          (parseFloat(note.lain_1) || 0) +
          (parseFloat(note.lain_2) || 0) +
          (parseFloat(note.lain_3) || 0) +
          (parseFloat(note.lain_4) || 0) 
        );
      }, 0);
    },
  },
  methods: {
    addNote() {
      this.notes.push({
        proses: "",
        atas_nama: "",
        kendaraan: "",
        no_polisi: "",
        keterangan: "",
        stnk_resmi: 0,
        formattedStnkResmi: "Rp. 0",
        jasa: 0,
        formattedJasa: "Rp. 0",
        lain_1: 0,
        formattedLain1: "Rp. 0",
        lain_2: 0,
        formattedLain2: "Rp. 0",
        lain_3: 0,
        formattedLain3: "Rp. 0",
        lain_4: 0,
        formattedLain4: "Rp. 0",
        total: 0,
      });
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
    submitNotes() {
      // Emit the data to parent
      this.$emit("save-notes", { header: this.header, notes: this.notes });
    },
    updateCurrency(note, field, event) {
  let value = event.target.value.replace(/\D/g, ""); 
  note[field] = parseInt(value) || 0;

  if (field === "stnk_resmi") {
    note.formattedStnkResmi = this.formatCurrency(note.stnk_resmi);
  } else if (field === "jasa") {
    note.formattedJasa = this.formatCurrency(note.jasa);
  } else if (field === "lain_lain") {
    note.formattedLainLain = this.formatCurrency(note.lain_lain);
  } else if (field === "lain_1") {
    note.formattedLain1 = this.formatCurrency(note.lain_1);
  } else if (field === "lain_2") {
    note.formattedLain2 = this.formatCurrency(note.lain_2);
  } else if (field === "lain_3") {
    note.formattedLain3 = this.formatCurrency(note.lain_3);
  } else if (field === "lain_4") {
    note.formattedLain4 = this.formatCurrency(note.lain_4);
  }
},

    formatCurrency(value) {
      let val = (value / 1).toFixed(0).replace(",", ".");
      return "Rp. " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
