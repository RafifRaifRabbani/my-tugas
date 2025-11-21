var tampilan= document.getElementById("tampilan");

var angkaTombol= document.getElementsByClassName("angka");

var operatorTombol= document.getElementsByClassName("operator");

var samaDenganTombol= document.getElementsByClassName("sama-dengan");

var resetTombol= document.getElementsByClassName("reset");



var sementara= "";
var operator= "";
var angka1= null;
var angka2= null;
var hasilBaru= false;


//event angka dan titik
for(var i=0; i<angkaTombol.length; i++){
    angkaTombol[i].addEventListener("click",function(){
       if(hasilBaru) {
        sementara = ""; 
        hasilBaru = false;
       }
       sementara += this.textContent;
       tampilan.value = sementara;
    });
}

//event operator
for( let index = 0; index < operatorTombol.length; index++) {
    operatorTombol[index].addEventListener("click", function(){
        if(sementara === "" && this.textContent !=="-"){
            return;
        }

        if(operator !==""){
            return;
        }

        angka1 = parseFloat(sementara);
        operator= this.textContent;
        sementara = ""
        tampilan.value = operator;

    });
}
//parsefloat itu untuk membuat dari string ke angka

//event sama dengan
for(let k=0; k<samaDenganTombol.length;k++) {
    samaDenganTombol[k].addEventListener("click",function (){
        //stop proses berikutnya jika operator dan data sementara tidak ada
        if( operator===""||sementara===""){
            return;
        } 
        angka2 = parseFloat(sementara)
        let hasil;
        //cara baca:jika operator sama dgn +
        if(operator==="+"){
            //maka hasil adalah angka1 + angka2
            hasil = angka1 + angka2
            //selain itu, jika ...
        } else if(operator ==="-"){
            hasil = angka1 - angka2
        }else if ( operator ==="x"){
            hasil =angka1 * angka2
        }else if(operator === "/"){
            hasil = angka1 / angka2
        }else{
            return;
        }

        tampilan.value = hasil;
        sementara = String(hasil);
        angka1 = null;
        angka2 = null;
        operator = "";
        hasilBaru = true;
    })
}

//tombol reset
for (let r= 0; r<resetTombol.length;r++){
    resetTombol[r].addEventListener("click",function(){
        tampilan.value ="";
        sementara = "";
        operator = "";
        angka1 = null;
        angka2 = null;
        hasilBaru = false;
    })
}