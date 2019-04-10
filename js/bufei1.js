
function foo(item) {
  var str = "";
  for (let i = 0; i < data.length; i++) {
    //console.log(i);
    str += `
				<li>
				<a href="detail.html?id=${data[i].id}">
				<img src="${data[i].imgSrc}">
				<h3>${data[i].title}</h3>
				<p>${data[i].price}</p>
				</a></li>
				`;
  }
  item.innerHTML = str;
}
var oList = document.getElementById("list");
foo(oList);
var oList = document.getElementById("list1");
foo(oList);
var oList = document.getElementById("list2");
foo(oList);
var oList = document.getElementById("list3");
foo(oList);
var oList = document.getElementById("list5");
foo(oList);

var oList2 = document.querySelectorAll(".list");
oList2.forEach(item => {
  insertMsg(itemhe);
})