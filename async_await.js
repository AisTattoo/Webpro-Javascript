function sarapan() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sudahSarapan = true; // Simulasi keputusan
            if (sudahSarapan) {
                resolve("Saya sudah sarapan 🍳");
            } else {
                reject("Saya BELUM sarapan");
            }
        }, 1500);
    });
}

function menyapu() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sudahMenyapu = true; // Simulasi keputusan
            if (sudahMenyapu) {
                resolve("Saya sudah menyapu 🧹");
            } else {
                reject("Saya BELUM menyapu");
            }
        }, 2500);
    });
}

async function selesaikanTugasPagi() {
    try {
        const hasilSarapan = await sarapan();
        console.log(hasilSarapan);

        const hasilMenyapu = await menyapu();
        console.log(hasilMenyapu);

        console.log("Anda sudah menyelesaikan semua tugas pagi!");
    } catch (error) {
        console.error(error);
    }
}

selesaikanTugasPagi();