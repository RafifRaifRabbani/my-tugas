//pilih element
const lampuMerah = document.getElementById("lampu-merah")
const lampuKuning = document.getElementById("lampu-kuning")
const lampuHijau = document.getElementById("lampu-hijau")
const tombolMulai = document.getElementById("mulai")
const tombolBerhenti = document.getElementById("berhenti")
const btnMerah = document.getElementById("btn-merah")
const btnKuning = document.getElementById("btn-kuning")
const btnHijau = document.getElementById("btn-hijau")
const textStatus = document.getElementById("status")

let intervalOtomatis;
let indexLampu =0;

const urutan = ["merah", "kuning", "hijau"];

//fungsi matikan semua lampu 
function matikanSemua () {
    lampuMerah.classList.remove("nyala");
    lampuKuning.classList.remove("nyala");
    lampuHijau.classList.remove("nyala");
}
//fungsi nyalakan lampu sesuai warna
function nyalakanLampu (warna) {
    matikanSemua();

    //switch/pilih sesuai warna
    switch (warna) {
        //jika warna adalah merah
        case "merah":
            //maka... lakukan lah hal berikut
            lampuMerah.classList.add("nyala")
            textStatus.textContent = "Status : BERHENTI";
            //selesai
            break;

            case "kuning":
                lampuKuning.classList.add("nyala")
                textStatus.textContent = "Status : HATI-HATi";
                break;

                case "hijau":
                    lampuHijau.classList.add("nyala")
                    textStatus.textContent = "Status : SILAHKAN JALAN";
                    break;
    }
}

//buatt nyalainnn lampu nya
tombolBerhenti.addEventListener("click", function() {
    matikanSemua();
    textStatus.textContent = "Status : MATI";
});

//tombol manual
btnMerah.addEventListener ("click", function () {
    console.log("Cek lampu merah")
    nyalakanLampu ("merah");
});

btnKuning.addEventListener("click", function () {
    console.log("Cek lampu kuning")
    nyalakanLampu ("kuning");
});

btnHijau.addEventListener("click", function () {
    console.log("Cek lampu hijau")
    nyalakanLampu ("hijau");
});

//fungsi mode otomatis
function jalanOtomatis() {
    const warna = urutan[indexLampu];
    console.log(warna)
    nyalakanLampu(warna);
    indexLampu++;
    if (indexLampu >= urutan.length) {
        indexLampu = 0;
    }
}

//event tombol mulai
tombolMulai.addEventListener("click", function () {
    clearInterval(intervalOtomatis); //ini membersihkan interval sebelum nya
    //jalan otomatis!
    jalanOtomatis();

    //jalanin jalan fungsi otomatis(), tiap 2 detik
    intervalOtomatis = setInterval (jalanOtomatis, 1000); //ganti tiapp 2 detik
});

//event tombol berenti nya
tombolBerhenti.addEventListener("click", function () {
    clearInterval(intervalOtomatis);
    matikanSemua();
    textStatus.textContent = "Status : MATI";
});