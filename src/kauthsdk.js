/*
K Auth JS SDK (0.0.1)
Author(s) Kabeer Jaffri, Kabeers Network
© 2020 Kabeers Network All Rights Reserved
*/
class KAuth {
  constructor(method, sdk_uri) {
    this.main = {
         method:method,
         sdk_uri:'http://auth.kabeersnetwork.rf.gd/js-sdk/compiled/'+sdk_uri+'.php'
    }
  }
    uniqid(a = "", b = false) {
        const c = Date.now() / 1000;
        let d = c.toString(16).split(".").join("");
        while (d.length < 14) d += "0";
        let e = "";
        if (b) {
            e = ".";
            e += Math.round(Math.random() * 100000000);
        }
        return a + d + e;
    }
 	render(e,height,width,theme){
 	    if(theme == 'light'){
		    e.innerHTML = '<div class="k-net-auth-btn KAuth-'+this.uniqid()+'"><a href="'+this.main.sdk_uri+'?method='+this.main.method+'"><img alt="Login With Kabeers Network" src="https://cdn.jsdelivr.net/gh/kabeer11000/k-auth-sdk/dist/light.svg" style="width:'+width+';height:'+height+';"></a></div>';
 	    }else{
 	        e.innerHTML = '<div class="k-net-auth-btn KAuth-'+this.uniqid()+'"><a href="'+this.main.sdk_uri+'?method='+this.main.method+'"><img alt="Login With Kabeers Network" src="https://cdn.jsdelivr.net/gh/kabeer11000/k-auth-sdk/dist/dark.svg" style="width:'+width+';height:'+height+';"></a></div>';
 	    }
	}
	go(){
	    window.location.href= this.main.sdk_uri+'?method='+this.main.method;
	}
    export (KAuth){}
}
