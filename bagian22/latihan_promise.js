let status = "pending";

const promise = new Promise((resolve, reject) => {

    console.log("Status:", status);

    const success = true;

    if (success) {
        status = "fulfilled";
        resolve("Data berhasil diambil");
    } else {
        status = "rejected";
        reject("Terjadi error");
    }

});

promise
    .then(result => {
        console.log(result);
        console.log("Status:", status);
    })
    .catch(error => {
        console.error(error);
        console.log("Status:", status);
    })
    .finally(() => {
        console.log("Selesai, apa pun hasilnya");
    });