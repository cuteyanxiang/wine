function Cart() {
	if(getCookie("cart")) {
		this.cartData = JSON.parse(getCookie("cart"));
	} else {
		this.cartData = {};
	}

}
//直接点击加入购物车按钮的话，正常是+1，也可能一次加入的数量不是1
//在购物车页面的数量展示框里的那个值是一个最终的值，而不是累加的值
//tm 来表示是累加还是最终值 true
Cart.prototype.addData = function(id, num, tm) {
	if(!this.cartData[id] || tm) {
		this.cartData[id] = num;
	} else {
		this.cartData[id] = Number(this.cartData[id]) + num;
	}
	setCookie("cart", JSON.stringify(this.cartData), 7);

}
Cart.prototype.showData = function(domID) {
	var str = '';
	for(var id in this.cartData) {
		data.forEach(item=>{
			if(item.id==id){
				str += `<li data-id = "${id}">
				<input type="checkbox" class="ch">
				<img src="${item.imgSrc}">
				<span>${item.title}</span>
				<span class="minus">-</span>
				<input type="text" class="num" value="${this.cartData[id]}">
				<span class="plus">+</span>
				<span class="perPrice">${item.price}</span>
				<span class="totalPrice">${this.cartData[id]*item.price}</span>
				<span class="delBtn">删除</span>
				</li>`
			}
		})
		
	};
	this.oCartList = document.getElementById(domID);
	this.oCartList.innerHTML = str;
	var aMinus = document.getElementsByClassName("minus");
	var aPlus = document.getElementsByClassName("plus");
	var aNums = document.getElementsByClassName("num");
	var aDelBtns = document.getElementsByClassName("delBtn");
	this.aTotalPrice = document.getElementsByClassName("totalPrice");
	this.aCheckBox = document.getElementsByClassName("ch");
	var aPerPrice = document.getElementsByClassName("perPrice");
	for(let i = 0; i < aMinus.length; i++) {
		aMinus[i].onclick = () => {
			let id = aMinus[i].parentNode.getAttribute('data-id');
			if(aNums[i].value <= 1) {
				alert("最少购买一件商品");
				return;
			}
			aNums[i].value--;
			this.aTotalPrice[i].innerHTML = aNums[i].value * aPerPrice[i].innerHTML;
			this.addData(id, -1, false);
			this.getTotalPrice();
		}
		aPlus[i].onclick = () => {
			let id = aMinus[i].parentNode.getAttribute('data-id');
			aNums[i].value++;
			this.aTotalPrice[i].innerHTML = aNums[i].value * aPerPrice[i].innerHTML;
			this.addData(id, 1, false);
		}
		aNums[i].onchange = () => {
			let id = aMinus[i].parentNode.getAttribute('data-id');
			this.aTotalPrice[i].innerHTML = aNums[i].value * aPerPrice[i].innerHTML;
			this.addData(id, aNums[i].value, true);
		}
		aDelBtns[i].onclick = () => {
			let id = aMinus[i].parentNode.getAttribute('data-id');
			this.removeData(id, aDelBtns[i].parentNode);
		}

		this.aCheckBox[i].onclick = () => {
			this.getTotalPrice();
		}

	}

}
Cart.prototype.removeData = function(id, domObj) {
	delete this.cartData[id];
	setCookie("cart", JSON.stringify(this.cartData), 7);
	this.oCartList.removeChild(domObj);
}

Cart.prototype.getTotalPrice = function() {
	var sum = 0;
	for(let i = 0; i < this.aCheckBox.length; i++) {
		if(this.aCheckBox[i].checked == true) {
			sum += Number(this.aTotalPrice[i].innerHTML);
		}
	}
	this.totalPrice = document.getElementById("totalPrice");
	this.totalPrice.innerHTML = sum;
}