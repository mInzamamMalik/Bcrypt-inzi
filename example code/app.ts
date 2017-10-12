

import { stringToHash, varifyHash, validateHash } from "bcrypt-inzi"

stringToHash("pakistan", 10).then(string => {
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
