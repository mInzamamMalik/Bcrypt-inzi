# What is Bcrypt:
bcrypt is a password hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher 

it is ideal for convert password into hash when saving in database,  Besides incorporating a salt to protect against **Rainbow table attacks**, bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to **brute-force search attacks** even with increasing computation power.



# Install:

`npm i bcrypt-inzi --save`


# ES6 Usage:

```
import { 
    stringToHash,
    varifyHash, 
    validateHash 
} from "bcrypt-inzi"

stringToHash("pakistan").then(string => {
    console.log("hash: ", string);
})

varifyHash("pakistan", "$2a$10$W3/bbpG0rexRwKBabxbp7efehubSnxDLM7OCEj0MEPAac98EUa9mW").then(result => {
    if (result) {
        console.log("matched");
    } else {
        console.log("not matched");
    }
}).catch(e => {
    console.log("error: ", e)
})

validateHash("$2a$10$W3/bbpG0rexRwKBabxbp7efehubSnxDLM7OCEj0MEPAac98EUa9mW").then(result => {
    if (result) {
        console.log("hash is valid")
    } else {
        console.log("hash is invalid")
    }
})
```

# ES5 Usage:

```


var bcrypt = require("bcrypt-inzi")

bcrypt.stringToHash("pakistan").then(string => {
    console.log("hash: ", string);
})

bcrypt.varifyHash("pakistan", "$2a$10$W3/bbpG0rexRwKBabxbp7efehubSnxDLM7OCEj0MEPAac98EUa9mW").then(result => {
    if (result) {
        console.log("matched");
    } else {
        console.log("not matched");
    }
}).catch(e => {
    console.log("error: ", e)
})

bcrypt.validateHash("$2a$10$W3/bbpG0rexRwKBabxbp7efehubSnxDLM7OCEj0MEPAac98EUa9mW").then(result => {
    if (result) {
        console.log("hash is valid")
    } else {
        console.log("hash is invalid")
    }
})

```