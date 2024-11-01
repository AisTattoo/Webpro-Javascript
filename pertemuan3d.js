function siramTanaman() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tanamanTersiram = true; // Ubah ini untuk mensimulasikan hasil
            if (tanamanTersiram) {
                resolve("Anda sudah menyiram tanaman 🌱");
            } else {
                reject("Anda BELUM menyiram tanaman");
            }
        }, 1000);
    });
}

function pangkasDaun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const daunTerpangkas = true; // Ubah ini untuk mensimulasikan hasil
            if (daunTerpangkas) {
                resolve("Anda sudah memangkas daun ✂️");
            } else {
                reject("Anda BELUM memangkas daun");
            }
        }, 1500);
    });
}

function pupukTanah() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tanahTerpupuk = true; // Ubah ini untuk mensimulasikan hasil
            if (tanahTerpupuk) {
                resolve("Anda sudah memupuk tanah 🌿");
            } else {
                reject("Anda BELUM memupuk tanah");
            }
        }, 500);
    });
}

siramTanaman()
    .then(hasil => {
        console.log(hasil);
        return pangkasDaun();
    })
    .then(hasil => {
        console.log(hasil);
        return pupukTanah();
    })
    .then(hasil => {
        console.log(hasil);
        console.log("Anda sudah selesai merawat tanaman!");
    })
    .catch(error => console.error(error));