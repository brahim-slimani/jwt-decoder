## jwt-decoder-claims is a JS Library that allows to decode JWT (JSON Web Token), resolving the claims payload and header from the tokens.
This library doesn't serve to verify the signature of the token or to validate it, this only allows to decode the content of the token namely the payload and the header.

## Installation
Install through NPM : `npm install jwt-decoder-claims`<br/>
Install through Yarn : `yarn add jwt-decoder-claims`

## Usage
```javascript
import JWTDecoder from "jwt-decoder-claims";

const token = "eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Imp3dC1kZWNvZGVyIiwiaXNzIjoic2xpbWFuaSIsImlhdCI6MTUxNjIzOTAyMn0.mCi4zZRP7d9NQD-ULjBL9vB1NvicJD_FnmuFa1zJSfY88yBEpkLX_VExyAXG9XvLxRmrdocHlfzEHB6TTC3HrQ";

/*** decode the payload ***/
const claims = JWTDecoder.payload(token);
console.info(claims);

// prints : 
// {
//   "sub": "1234567890",
//   "name": "jwt-decoder",
//   "iss": "slimani",
//   "iat": 1516239022
// }

/*** decode the header ***/
const header = JWTDecoder.header(token);
console.info(header);

// prints: 
// {
//   "type": "JWT",
//   "alg": "HS512"
// }

/*** get the decoded entire claims data : header + payload ***/
const decodedToken = JWTDecoder.resolve(token);
console.info(decodedToken);

// prints :
// {
//     "header" : {
//         "type": "JWT",
//         "alg": "HS512"
//     },
//     "payload" : {
//         {
//             "sub": "1234567890",
//             "name": "jwt-decoder",
//             "iss": "slimani",
//             "iat": 1516239022
//         }
//     }
// }
```

**Important!** In case of malformed token it will throw an exception of invalid token error.<br/>
It is recommanded to combine the decoding function with a Promise object or add try/catch block
<br/>

**Usage with promise object**
```javascript
import JWTDecoder from "jwt-decoder-claims";

decodeJWT = (token) => new Promise((resolve, reject) => {
    try {
        const claims = JWTDecoder.payload(token);
        resolve(claims);
    } catch (err) {
        reject(err);
    }
});

//use .then() implicitly to return a promise
decodeJWT(token).then((decoded) => {
    console.info(decoded);

    // prints : 
    // {
    //     "sub": "1234567890",
    //     "name": "jwt-decoder",
    //     "iss": "slimani",
    //     "iat": 1516239022
    // }

}, (error) => {
    console.error("Invalid token error "+error);
})
```

## For CommonJS usage
```javascript
const JWTDecoder = require('jwt-decoder-claims');
```

## Github repository
If you have any contribution request, feature or if you found a bug or any issue please report them to this [github repository](https://github.com/slimani-ibrahim/jwt-decoder)

## Demo application
jwt-decoder-claims has been used to decode the JWTs in this simple tool [checkout here](https://slimani-ibrahim.github.io/jwt-decoder-tool/)<br/>
Here is the [github repository](https://github.com/Slimani-Ibrahim/jwt-decoder-tool) for any feature or contribution.

## Author
[Ibrahim Slimani](https://slimani-ibrahim.github.io/profile)