Zuora.js
========
> Node.js API client for Zuora REST API https://www.zuora.com/developer/api-reference/

## Install

```
$ npm install --save zuorajs
```
 
Oauth v2 authentication https://www.zuora.com/developer/api-reference/#section/Authentication/OAuth-v2.0
 
Usage
```javascript
 
var Zuora = require("../zuora.js");
 
var client = new Zuora({
    url: "ZUORA_INSTANCE_URL",
    oauthType: "oauth_v2"
    client_id: "YOUR_CLIENT_ID",
    client_secret: "YOUR_CLIENT_SECRET"
});
 
```

## License

MIT

## Contributions are welcome

See https://github.com/AirVantage/zuorajs/issues.
