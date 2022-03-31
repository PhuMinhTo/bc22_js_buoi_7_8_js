var arr = []

function $(id) {
  return document.getElementById(id);
}

//hàm tìm số dương
function timSoDuong(number) {
  var flag = false;

  if(number > 0) {
    flag = true;
  }
  return flag;
}

//hàm tìm số chẵn
function timSoChan(number) {
  var flag = false;

  if(number % 2 === 0) {
    flag = true;
  }
  return flag;
}

//hàm kiểm tra số nguyên tố
function timSoNguyenTo(number) {
  var flag = true;

  if(number < 2) {
    return flag = false;
  }
  var i = 2;
  while(i < number) {
    if(number % i == 0) {
      flag = false;
      break;
    }
    i++;
  }
  return flag;
}

//hàm kiểm tra số nguyên
function timSoNguyen(number) {
  var flag = false;

  if(number % Math.round(number) === 0) {
    flag = true;
  }
  return flag;
}


/**
 * Thêm số vào mảng
*/
$("btnThemSo").onclick = function() {
  var number = $("txt_number").value*1;

  arr.push(number);
  $("footerCard3").innerHTML = arr;
}


/**
 * Tính tổng số dương
*/
$("btnTongSoDuong").onclick = function() {
  var tongDuong = 0;
  for(var i = 0; i < arr.length; i++) {
    var soDuong = timSoDuong(arr[i]);

    if(soDuong) {
      tongDuong += arr[i]
    }
  }
  var kq = "<p class='alert alert-primary'>Tổng của các số dương là: " + tongDuong + "</p>";
  $("footerCard4").innerHTML = kq;
}


/**
 * Đếm số dương
*/
$("btnDemSoDuong").onclick = function() {
  var count = 0;
  for(var i = 0; i < arr.length; i++) {
    var soDuong = timSoDuong(arr[i]);

    if(soDuong) {
      count += 1;
    }
  }
  var kq = "<p class='alert alert-primary'>Có " + count + " số dương</p>";
  $("footerCard4").innerHTML = kq;
}


/**
 * Tìm số dương nhỏ nhất
*/
$("btnSoDuongNhoNhat").onclick = function() {
  var soDuongNhoNhat = arr[0];
  for(var i = 0; i < arr.length; i++) {
    var soDuong = timSoDuong(arr[i]);

    if(soDuong) {
      if(soDuongNhoNhat > arr[i]) {
        soDuongNhoNhat = arr[i]
      }
    }
  }
  var kq = "<p class='alert alert-primary'>Số dương nhỏ nhất là: " + soDuongNhoNhat + "</p>";
  $("footerCard4").innerHTML = kq;
}

/**
 * Tìm số chẵn cuối cùng trong mảng, trả về -1 nếu không tìm thấy
*/
$("btnSoChanCuoi").onclick = function() {
  var soChanCuoi = 0;
  for(var i = 0; i < arr.length; i++) {
    var soChan = timSoChan(arr[i]);

    if(soChan) {
      soChanCuoi = arr[i];
    }
  }
  if(soChanCuoi === 0) {
    soChanCuoi = -1;
  }
  var kq = "<p class='alert alert-primary'>Số chẳn cuối cùng trong mảng là: " + soChanCuoi + "</p>";
  $("footerCard4").innerHTML = kq;
}


/**
 * Sắp Xếp mảng tăng dần
*/
$("btnSapXep").onclick = function() {
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        var temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  var kq = "<p class='alert alert-primary'>" + arr + "</p>";
  $("footerCard4").innerHTML = kq;
}

/**
 * Tìm số nguyên tố đầu tiên trong mảng, nếu ko có trả về -1
*/
$("btnSoNguyenTo").onclick = function() {
  var soNguyenTo = arr[0];
  for(var k = 0; k < arr.length; k++) {
    var soNT = timSoNguyenTo(arr[k]);

    if(soNT) {
      soNguyenTo = arr[k];
      break;
    }
  }
  var kq = "<p class='alert alert-primary'>Số nguyên tố đầu tiên: " + soNguyenTo + "</p>";
  $("footerCard4").innerHTML = kq;
}


/**
 * Nhập thêm số thực, tìm tất cả số nguyên trong mảng
*/
$("btnDemSoNguyen").onclick = function() {
  var count = 0;
  for(var i = 0; i < arr.length; i++) {
    var soNguyen = timSoNguyen(arr[i]);
    if(soNguyen) {
      count += 1;
    } else if(arr[i] === 0) {
      count += 1;
    }
  }
  var kq = "<p class='alert alert-primary'>Mảng có " + count + " số nguyên</p>";
  $("footerCard4").innerHTML = kq;
}


/**
 * So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
*/
$("btnSoSanh").onclick = function() {
  var am = 0;
  var duong = 0;
  var kq = "";
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      am += 1;
    } else {
      duong += 1;
    }
  }
  if(am > duong) {
    kq = "Số âm nhiều hơn số dương"
  } else if(am == duong) {
    kq = "Số âm bằng số dương"
  } else {
    kq = "Số dương nhiều hơn số âm"
  }
  $("footerCard4").innerHTML = kq;
}


/**
 * Đổi chỗ 2 giá trị trong mảng theo vị trí.
*/
$("btnDoiCho").onclick = function() {
  var viTri1 = $("txt_index1").value;
  var viTri2 = $("txt_index2").value;
  var temp;

  temp = arr[viTri1];
  arr[viTri1] = arr[viTri2];
  arr[viTri2] = temp;
  $("footerCard3").innerHTML = arr;
}