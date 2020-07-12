/*
K Auth JS SDK (0.0.1)
Author(s) Kabeer Jaffri, Kabeers Network
© 2020 Kabeers Network All Rights Reserved
*/
var KAuth = function(a, b) {
  this.main = {method:a, sdk_uri:"http://auth.kabeersnetwork.rf.gd/js-sdk/compiled/" + b + ".php"};
};
KAuth.prototype.uniqid = function(a, b) {
  a = void 0 === a ? "" : a;
  b = void 0 === b ? !1 : b;
  for (var c = (Date.now() / 1000).toString(16).split(".").join(""); 14 > c.length;) {
    c += "0";
  }
  var d = "";
  b && (d = "." + Math.round(100000000 * Math.random()));
  return a + c + d;
};
KAuth.prototype.render = function(a, b, c, d) {
  a.innerHTML = "light" == d ? '<div class="k-net-auth-btn KAuth-' + this.uniqid() + '"><a href="' + this.main.sdk_uri + "?method=" + this.main.method + '"><img alt="Login With Kabeers Network" src="https://cdn.jsdelivr.net/gh/kabeer11000/k-auth-sdk/dist/light.svg" style="width:' + c + ";height:" + b + ';"></a></div>' : '<div class="k-net-auth-btn KAuth-' + this.uniqid() + '"><a href="' + this.main.sdk_uri + "?method=" + this.main.method + '"><img alt="Login With Kabeers Network" src="https://cdn.jsdelivr.net/gh/kabeer11000/k-auth-sdk/dist/dark.svg" style="width:' + 
  c + ";height:" + b + ';"></a></div>';
};
KAuth.prototype.go = function() {
  window.location.href = this.main.sdk_uri + "?method=" + this.main.method;
};
KAuth.prototype["export"] = function(a) {
};
