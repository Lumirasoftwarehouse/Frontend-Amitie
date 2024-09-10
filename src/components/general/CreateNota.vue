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
              <div class="row">
                <div class="col-6"></div>
                <div class="col-6">
                  <button type="button" class="btn btn-primary mb-2 float-end" @click="addNote">
                    Tambah Nota
                  </button>
                </div>
              </div>
          <form @submit.prevent="submitNotes">
            <div v-for="(note, index) in notes" :key="index" class="mb-4">
              <div class="row border border-dark p-2">
                              <div class="row mt-2 mb-2">
                <div class="col-8">
                  <span class="text-center h4 fw-bold text-dark float-end"
                    >RECEIPT {{ index + 1 }}</span
                  >
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
              <div class="row">
                <div class="col-sm-4">
                  <input
                    v-model="note.alamat"
                    type="text"
                    class="form-control"
                    placeholder="Alamat"
                  />
                </div>
                <div class="col-sm-4">
                  <input
                    v-model="note.tanggal"
                    type="date"
                    class="form-control"
                  />
                </div>
                <div class="col-sm-4">
                  <input
                    v-model="note.pelanggan"
                    type="text"
                    class="form-control"
                    placeholder="Nama Customer"
                  />
                </div>
              </div>

              </div>
              
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
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-12 mb-3 border border-dark p-3">
                  <div class="form-group row">
                    <label class="col-md-4 col-12 col-form-label"
                      >Resmi STNK (Rp.):</label
                    >
                    <div class="col-md-8 col-12">
                      <input
                        v-model="note.stnk_resmi"
                        type="number"
                        class="form-control"
                        placeholder="Harga Resmi STNK"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-md-4 col-12 col-form-label"
                      >Jasa (Rp.):</label
                    >
                    <div class="col-md-8 col-12">
                      <input
                        v-model="note.jasa"
                        type="number"
                        class="form-control"
                        placeholder="Harga Jasa"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-md-4 col-12 col-form-label"
                      >Lain-lain (Rp.):</label
                    >
                    <div class="col-md-8 col-12">
                      <input
                        v-model="note.lain_lain"
                        type="number"
                        class="form-control"
                        placeholder="Harga Lain-lain"
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
                        :value="note.jasa + note.lain_lain + note.stnk_resmi"
                        readonly
                      />
                    </div>
                  </div>
                </div>
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
      notes: [
        {
          alamat: "",
          tanggal: "",
          pelanggan: "",
          proses: "",
          atas_nama: "",
          kendaraan: "",
          no_polisi: "",
          keterangan: "",
          stnk_resmi: 0,
          jasa: 0,
          lain_lain: 0,
        },
      ],
    };
  },
  methods: {
    addNote() {
      this.notes.push({
        alamat: "",
        tanggal: "",
        pelanggan: "",
        proses: "",
        atas_nama: "",
        kendaraan: "",
        no_polisi: "",
        keterangan: "",
        stnk_resmi: 0,
        jasa: 0,
        lain_lain: 0,
      });
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
    submitNotes() {
      // Emit the data to parent
      this.$emit("save-notes", this.notes);
    },
  },
};
</script>

<style scoped>
/* Add any necessary styles */
</style>
