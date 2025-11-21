//TODO : isi variabel di bawah dengan fungsi get elementByID sesuai ID

var inputGram = document.getElementById("emas-gram");
var tombol = document.getElementById("hitung");
var hasil = document.getElementById("hasil");
var historyList = document.getElementById("history");   

//TODO : isi dengan nilai harga emas/gram rumahan
var hargaEmas = 1100000;
function muatHistory() {
    let data = localStorage.getItem(`zakatHistory`);

    if (data === null) {
        data = []
    } else {
        data = JSON.parse(data);
    }

    historyList.innerHTML = ""
    for (var i = 0; i < data.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = `<span> ${data[i]} <span>`;
        historyList.appendChild(li);
    }
    
    console.log(data);
}

//Ambil data dari locaStorage key `zakatHistory`
//Parsing ke array, tampilkan list ke historyList innerHTML

function simpanHistory(text) {
    let data = localStorage.getItem('zakatHistory');
    if (data === null) {
        data = [];
    } else {
        data = JSON.parse(data);
    }
    data.unshift(text); 
    if (data.length > 10) {
        data = data.slice(0, 10);
    }
    localStorage.setItem('zakatHistory', JSON.stringify(data))
    muatHistory();

    console.log(data);
}

//TODO : ambil daftar lama dari localStorage,
//tambah item baru, batasi 10 max data terakhir 
//simpan ulang, lalu tampilkan ulang riwayat

tombol.addEventListener("click", function() {
    //TODO : ambil nilai input emas, parsing ke number, nisab = 85
    var input = inputGram.value.trim();
    var emas = parseFloat(input);
    var nisab = 85;
    console.log(emas)
    //TODO : jika in[put tidak valid maka tampilkan pesan eror
    if ( input === ""){
        alert("KOSONG!!");
        hasil.textContent = "Tolong coba lagi!"
        return;
    }; 

    //TODO : jika emas < nisab, tampilkan pesan belum wajib zakat
    if (emas<nisab) {
        hasil.textContent = "belum wajib zakat";
        simpanHistory(` ${emas} gram maka "Belum wajib zakat`);
    } else {
        //TODO : hitung zakat = emas * 0.025, rupiah = zakat * harga emas rupiah
        let zakat = emas*0.025;
        let rupiah = zakat*hargaEmas;
        hasil.textContent = `Wajib zakat emas ${zakat} gram atau Rp.${rupiah.toLocaleString()}`
        simpanHistory (`${emas}gram wajib zakat sebesar Rp.${rupiah.toLocaleString()}`)
    }

    console.log(hasil);
    //TODO : kosongkan input gram setelah proses
    inputGram.value = "";
});

//TODO : panggil muatHistory() agar riwayat langsung tampil
muatHistory();