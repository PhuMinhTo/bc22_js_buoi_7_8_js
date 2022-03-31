//Khai báo mảng
var numberList = [];

/**
 * Thêm số
 */
document.getElementById("btnThemSo").onclick = function () {
  //Lấy giá trị từ người dùng nhập
  var number = document.getElementById("txt_number4").value * 1;

  //Thêm number vào mảng numberList
  numberList.push(number);

  console.log(numberList);
};

/**
 * Tong chan
 */
document.getElementById("btnTongChan").onclick = function () {
  /**
   * 0. Tạo tích luỹ tong = 0;
   * 1. Duyệt mảng vong lap for
   * 2. Nếu phần tử chia hết cho 2 === 0
   *      => Tính tổng
   */
  var tong = 0;

  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
      tong += numberList[i];
    }
  }

  console.log(tong);
};

/**
 * Dem so am
 */
document.getElementById("btnDemSoAm").onclick = function () {
  /**
   * 0. Tạo biến count = 0;
   * 1. Duyệt mảng
   * 2. Nếu như phần tử < 0
   *      => tăng biến count 1 đơn vị
   */
  var count = 0;

  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] < 0) {
      count++;
    }
  }

  console.log(count);
};
