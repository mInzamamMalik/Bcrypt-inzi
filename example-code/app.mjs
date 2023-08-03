import { stringToHash, verifyHash, validateHash } from "../dist/index.js";

stringToHash("pakistan", 10).then((string) => {
  console.log("hash: ", string);
});

verifyHash(
  "pakistan",
  "$2a$10$W3/bbpG0rexRwKBabxbp7efehubSnxDLM7OCEj0MEPAac98EUa9mW"
)
  .then((result) => {
    if (result) {
      console.log("hash matched");
    } else {
      console.log("hash not matched");
    }
  })
  .catch((e) => {
    console.log("error: ", e);
  });

verifyHash(
  "someOther",
  "$2a$10$W3/bbpG0rexRwKBabxbp7efehubSnxDLM7OCEj0MEPAac98EUa9mW"
)
  .then((result) => {
    if (result) {
      console.log("matched");
    } else {
      console.log("not matched");
    }
  })
  .catch((e) => {
    console.log("error: ", e);
  });

validateHash(
  "$2b$10$qkxhZpDlwU15DhEXOzjeYeRinfmQ/Txjhtg31x.dmg84oop4cq2Zm"
).then((result) => {
  console.log("result",result);
  if (result) {
    console.log("hash is valid");
  } else {
    console.log("hash is invalid");
  }
});

validateHash(
  "$2a$10$W3/bbpG0rexRwKBabxbp7efehubSnxDLM7OCEj0MEPAac98EUa9m"
).then((result) => {
  if (result) {
    console.log("hash is valid");
  } else {
    console.log("hash is invalid");
  }
});
