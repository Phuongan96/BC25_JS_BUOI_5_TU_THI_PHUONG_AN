/**Bài tập 1: Quản lý tuyển sinh  
 *  - Đầu vào:
 *      + Điểm 3 môn, điểm chuẩn
 *      + Khu vực: A,B,C,X
 *      + Đối tượng dự thi: 0,1,2,3
 *      + Điểm tổng kết = 3 môn + điểm ưu tiên
 *  - Đầu ra:
 *      + Show đậu/rớt so sánh với điểm chuẩn
 *      + Show điểm tổng số đạt được
*/

document.getElementById("btnKetQua").onclick = function () {
    var khuVuc = document.getElementById("txtKhuVuc").value;
    console.log(khuVuc);
    var doiTuong = document.getElementById("txtDoiTuong").value;
    console.log(doiTuong);
    var diem_1 = document.getElementById("txtDiem_1").value;
    var diem_2 = document.getElementById("txtDiem_2").value;
    var diem_3 = document.getElementById("txtDiem_3").value;
    var diemChuan = document.getElementById("txtDiemChuan").value;
    var diemTong = diem_1*1 + diem_2*1 + diem_3*1 + khuVuc*1 + doiTuong*1;
    console.log(diemChuan,diem_1, diem_2, diem_3);
    checkSelect(khuVuc, doiTuong);
    checkDiem(diem_1, diem_2, diem_3, diemChuan);
    if (+diem_1 ===0 || +diem_2===0 || +diem_3===0) {
        var ketQua = "<div class='alert alert-danger'>Rất tiếc, bạn đã trượt rồi :( <br> Tổng số điểm đạt được "+diemTong+"</br></div>"
        document.getElementById("showKetQua").innerHTML = ketQua;
    }
    else if (checkKetQua(diemTong, diemChuan) && (khuVuc != "") && (doiTuong != "")){
        var ketQua = "<div class='alert alert-success'>Chúc mừng, bạn đã đậu!<br> Tổng số điểm đạt được "+diemTong+"</br></div>";
        document.getElementById("showKetQua").innerHTML = ketQua;
    } else if (checkKetQua(diemTong, diemChuan) && (khuVuc != "") && (doiTuong != "")) {
        var ketQua = "<div class='alert alert-danger'>Rất tiếc, bạn đã trượt rồi :(<br> Tổng số điểm đạt được "+diemTong+"</br></div>"
        document.getElementById("showKetQua").innerHTML = ketQua;
    }
}

function checkSelect(khuVuc,doiTuong) {
    if (khuVuc ==="" && doiTuong ==="") {
        alert("Vui lòng chọn Khu vực và Đối tượng");
    }
    else if (khuVuc === "") {
            alert("Vui lòng chọn Khu vực");
        }
    else if (doiTuong === "") {
        alert("Vui lòng chọn Đối tượng");
    }
}

function checkKetQua(diemTong,diemChuan){
    if (diemTong > +diemChuan) {
        return true;
    } else {
        return false;
    }

}

function checkDiem(diem_1, diem_2, diem_3, diemChuan) {
    if ((diem_1==="")&& (diem_2!=="" && diem_3 !=="")){
        alert("Vui lòng nhập điểm thứ 1");
    }
    else if ((diem_2==="")&& (diem_1!=="" && diem_3 !=="")) {
        alert("Vui lòng nhập điểm thứ 2");
    }
    else if ((diem_3==="")&& (diem_1!=="" && diem_2 !=="")) {
        alert("Vui lòng nhập điểm thứ 3");
    }
    else if ((diem_1 !=="")&& (diem_2==="" && diem_3==="")) {
        alert("Vui lòng nhập điểm thứ 2 và 3")
    }
    else if ((diem_2 !=="")&& (diem_1== "" && diem_3 ==="")) {
        alert("Vui lòng nhập điểm thứ 1 và 3")
    }
    else if ((diem_3 !=="")&& (diem_1==="" && diem_2 ==="")) {
        alert("Vui lòng nhập điểm thứ 1 và 2")
    }
    else if((diem_1==="" && diem_2 ==="" && diem_3==="")){
        alert("Vui lòng nhập điểm thứ 1 và 2 và 3")
    }
    if (diemChuan ==="") {
        alert("Vui lòng nhập điểm chuẩn của Hội đồng")
    }
}

/**Bài tập 2: Tính tiền điện
 *  - Đầu vào:
 *      + Nhập tên chủ hộ để show ra output
 *      + Nhập số kW điện tiêu thụ
    - Xử lý:
        < 50kw: 500d
        0 < luongDien < 50kw: 650d
        100kw kế: 850d
        150kw kế: 1100d
        còn lại: 1300d
 *  - Đầu ra:
 *      + Show tên Chủ hộ
 *      + Show tổng tiền (bill)
*/
const dien_1 = 500;
const dien_2 = 650;
const dien_3 = 850;
const dien_4 = 1100;
const dien_5 = 1300;
document.getElementById("btnKetQua_2").onclick = function () {
    var tenChuHo = document.getElementById("txtTenChuHo").value;
    var luongDien = document.getElementById("txtLuongDien").value*1;
    tinhTienDetail(luongDien, dien_1, dien_2, dien_3, dien_4,dien_5);
    if (tenChuHo === ""){
        alert ("Vui lòng nhập đầy đủ tên chủ hộ");
    } else {
        if (tongTienDien = "sai") {
       document.getElementById("showKetQua_2").innerHTML = "<div class='alert alert-info'>Vui lòng nhập đúng tiền điện</div>";   
    }
    document.getElementById("showKetQua_2").innerHTML = "<div class='alert alert-info'>Chủ hộ: "+tenChuHo+" cần thanh toán số tiền điện là: "+tongTienDien+" VNĐ</div>";
    }
}

function tinhDien_1(luongDien, dien_1) {
    var tongTienDien = 0;
    var tongTienDien = luongDien * dien_1;
    return tongTienDien;
}
function tinhDien_2(luongDien, dien_2) {
    var tongTienDien = 0;
    var tongTienDien = (luongDien)*dien_2;
    return tongTienDien;
}
function tinhDien_3(luongDien, dien_3) {
    var tongTienDien = 0;
    var tongTienDien = (luongDien)* dien_3;
    return tongTienDien;
}
function tinhDien_4(luongDien, dien_4) {
    var  tongTienDien = 0;
    var  tongTienDien = (luongDien)* dien_4;
    return tongTienDien;
}
function tinhDien_5(luongDien, dien_5) {
    var tongTienDien = 0;
    var tongTienDien = (luongDien)* dien_5;
    return tongTienDien;
}
function tinhTienDetail(luongDien, dien_1, dien_2, dien_3, dien_4, dien_5) {
    if (0 < luongDien && luongDien<= 50) {
        return tongTienDien = tinhDien_1(luongDien, dien_1);
    } else if (50 < luongDien && luongDien <= 100) {
        return tongTienDien = tinhDien_1(50, dien_1) + tinhDien_2(luongDien-50, dien_2);
    } else if (100 < luongDien && luongDien <= 200) {
        return tongTienDien = tinhDien_1(50, dien_1) + tinhDien_2(50, dien_2) + tinhDien_3(luongDien-100, dien_3);
    } else if (200 < luongDien && luongDien <= 350) {
        return tongTienDien = tinhDien_1(50, dien_1) + tinhDien_2(50, dien_2) + tinhDien_3(100, dien_3) + tinhDien_4(luongDien-200, dien_4);
    } else if (luongDien > 350) {
        return tongTienDien = tinhDien_1(50, dien_1) + tinhDien_2(50, dien_2) + tinhDien_3(100, dien_3) + tinhDien_4(150, dien_4) + tinhDien_5(luongDien-350, dien_5)  ;
    } else {
        return tongTienDien = "sai";
    }

} 