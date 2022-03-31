// document.getElementById("btnClick").onclick = function () {
//   console.log("btnClick");
// };

// document.getElementById("btnClick").addEventListener("click", function () {
//   console.log("btnClick");
// });

function demoClick() {
  //TagName
  var tagName = document.getElementsByTagName("input")[0].value;
  console.log(tagName);

  //Classname
  var classname = document.getElementsByClassName("btn")[5].innerHTML;
  console.log(classname);

  //Selector
  var selector = document.querySelector(".container #txt_number").value;
  console.log(selector);

  //SelectorAll
  var selectorAll = document.querySelectorAll(".container .btn-success")[3]
    .innerHTML;
  console.log(selectorAll);
}
