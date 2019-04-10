function Zoom() {
	function $id(id) {
		return document.getElementById(id);
	}
	this.zoomArea = $id("zoomArea");
	this.midArea = $id("midArea");
	this.zoom = $id("zoom");
	this.midImg = this.midArea.children[0];
	this.bigArea = $id("bigArea");
	this.bigImg = this.bigArea.children[0];

	this.midArea.onmouseover = () => {
		this.zoom.style.display = "block";
		this.bigArea.style.display = "block";
	}
	this.midArea.onmouseout = () => {
		this.zoom.style.display = "none";
		this.bigArea.style.display = "none";
	}
	this.midArea.onmousemove = (e) => {
		var evt = e || event;
		/*var x = evt.offsetX - this.zoom.offsetWidth/2;
		var y = evt.offsetY - this.zoom.offsetHeight/2;*/
		var x = evt.pageX - this.zoomArea.offsetLeft - this.zoom.offsetWidth / 2;
		var y = evt.pageY - this.zoomArea.offsetTop - this.zoom.offsetHeight / 2;

		var maxt = this.midArea.offsetHeight - this.zoom.offsetHeight;
		var maxl = this.midArea.offsetWidth - this.zoom.offsetWidth;

		x = x <= 0 ? 0 : x >= maxl ? maxl : x;
		y = y <= 0 ? 0 : y >= maxt ? maxt : y;

		this.zoom.style.left = x + "px";
		this.zoom.style.top = y + "px";

		this.bigImg.style.left = -x / this.midArea.offsetWidth * this.bigImg.offsetWidth + "px";
		this.bigImg.style.top = -y / this.midArea.offsetHeight * this.bigImg.offsetHeight + "px";
	}

}

