## Kabeers Authorization SDK for JavaScript

#Outdated! and Unmaintained Visit (https://github.com/kauthsdk2.js)[KauthSDK JS 2]

Include This SDK to send Requests to Kabeers Network Account API.
```
let sdk_id = '';
let method = 'login';
let kauth = new KAuth(method, sdk_id);

kauth.go();
//To Imediatly Redirect


kauth.render(/*Container Element*/ document.querySelector('div'), /*Height*/ '3rem', /*Width*/ 'auto', 'dark');
//To Render Button
```

For UMD Modules
```
import {KAuth} from 'path/to/kauthsdk.js';
```
Register Your Javascript SDK to get SDK id [HERE](http://auth.kabeersnetwork.rf.gd/js-sdk/)
