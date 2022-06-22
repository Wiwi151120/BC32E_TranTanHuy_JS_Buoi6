// Bài 1:
document.getElementById('btnTimSo').onclick = function(){
    var so = Number(document.getElementById('nhapSo').value);
    var tong = 0;
    var soHang = 0;

    while(tong <= so){   
        soHang++;     
        tong += soHang; 
       
    }
   
    document.getElementById('ketQua1').innerHTML = 'Kết quả là: ' + soHang;
    
}
// Bài 2:
document.getElementById('btnTinhTong').onclick = function(){
    var tong = 0;
    var tong = tinhTong('nhapX','nhapN');
    document.getElementById('ketQua2').innerHTML = 'Tổng là: ' + tong;
}

function tinhTong(x,n){
    var nhapX = Number(document.getElementById(x).value);
    var nhapN = Number(document.getElementById(n).value);
    var tinhTong = 0;
    for(var i = 1; i <= nhapN; i++){
        tinhTong = tinhTong +  Math.pow(nhapX,i);
    }
    return tinhTong;
}




//Bài 3:

function giaiThua(g){
    var g = Number(document.getElementById('nhapGiaiThua').value);
    var giaiThua = 1;
    var i = 1;
    while (i <= g) {
   
        giaiThua = giaiThua *i;
        i++;
    }
    return giaiThua;

}
document.getElementById('btnTinhGiaiThua').onclick = function(){
    var ketQua = 0;
    ketQua = giaiThua('g');
    document.getElementById('ketQua3').innerHTML = 'Giai thừa là: ' + ketQua;
}


//Bài 4:
 function indiv(the){
    var theDiv = Number(document.getElementById(the).value);
    var html = '';
    var d = 1;
    while(d <= theDiv){
        if(d%2 === 0){
            var divC = "<div class='bg-danger text-white p-2'>Div chẵn</div>";
            html += divC;
            d++;
        }else{
            var divL = "<div class='bg-primary text-white p-2'>Div lẻ</div>";
            html += divL;
            d++;
        }
    } 
    return html;
 }

 document.getElementById('btnTaoDiv').onclick = function(){
    var ketQua = 0 ;
    ketQua = indiv('nhapDiv');
    document.getElementById('ketQua4').innerHTML = ketQua;
 }

