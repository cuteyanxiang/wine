function Zoom() {
  function $id(id) {
    return document.getElementById(id);
  }
  this.Detail = $id("detail");

  this.imgZoom = $id("imgZoom");
  this.yidong = $id("yidong")
  this.imgImg = this.imgZoom.children[0];

  this.fdqk = $id("fdqk");
  this.bigImg = this.fdqk.children[0];

  this.imgZoom.onmouseover = () => {
    this.yidong.style.display = "block";
    this.fdqk.style.display = "block";
  }
  this.imgZoom.onmouseout = () => {
    this.yidong.style.display = "none";
    this.fdqk.style.display = "none";
  }
  this.imgZoom.onmousemove = (e) => {
    var evt = e || event;
    var y = evt.pageY -  this.yidong.offsetHeight/2-this.imgZoom.offsetTop-this.Detail.offsetTop;
    var x = evt.pageX - this.yidong.offsetWidth/2-this.imgZoom.offsetLeft-this.Detail.offsetLeft;

    var maxt = this.imgZoom.offsetHeight- this.yidong.offsetHeight;
    var maxl = this.imgZoom.offsetWidth-this.yidong.offsetWidth;

    x = x <= 0 ? 0 : x >= maxl ? maxl : x;
    y = y <= 0 ? 0 : y >= maxt ? maxt : y;

    this.yidong.style.left = x + "px";
    this.yidong.style.top = y + "px";


    this.bigImg.style.left = -2*x  + "px";
    this.bigImg.style.top = -2*y  + "px";

  }
}
new Zoom();