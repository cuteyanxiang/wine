function Zoom() {
  function $id(id) {
    return document.getElementById(id);
  }
  this.Detail = $id("detail");
  //console.log(this.Detail);
  this.imgZoom = $id("imgZoom");
  this.yidong = $id("yidong")
  this.imgImg = this.imgZoom.children[0];
  //console.log(this.imgImg);
  this.fdqk = $id("fdqk");
  this.bigImg = this.fdqk.children[0];
  //console.log(this.bigImg);
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
    // var y = evt.offsetY - this.yidong.offsetHeight / 2;
    var x = evt.pageX - this.fdqk.offsetLeft - this.yidong.offsetWidth / 2;
    var y = evt.pageY - this.fdqk.offsetTop - this.yidong.offsetHeight / 2;
    //console.log(x,y);
    var maxt = this.imgZoom.offsetHeight - this.yidong.offsetHeight;
    var maxl = this.imgZoom.offsetWidth - this.yidong.offsetWidth;
    console.log(maxt, maxl);
    x = x <= 0 ? 0 : x >= maxl ? maxl : x;
    y = y <= 0 ? 0 : y >= maxt ? maxt : y;

    this.yidong.style.left = x + "px";
    this.yidong.style.top = y + "px";


    this.bigImg.style.left = -x / this.imgZoom.offsetWidth * this.bigImg.offsetWidth + "px";
    this.bigImg.style.top = -y / this.imgZoom.offsetHeight * this.bigImg.offsetHeight + "px";

  }
}
new Zoom();