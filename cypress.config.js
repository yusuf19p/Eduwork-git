const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("after:run", (results) => {
        console.log("Cypress selesai menjalankan pengujian");
      });
    },
  },
});

//Kegunannya untuk kostumisasi dalam pengujian agar bisa menyesuaikan dengan kebutuhan tester
//Contohnya seperti code tersebut untuk menampilkan pesan ketika pengujian sudah selesai dilakukan