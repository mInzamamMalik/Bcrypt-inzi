import { stringToHash, verifyHash, validateHash } from "../dist/index.js";

(async () => {
  const hash = await stringToHash("pakistan", 12);
  console.log("hash: ", hash);
})();

const result = await verifyHash(
  "pakistan",
  "$2a$10$W3/bbpG0rexRwKBabxbp7efehubSnxDLM7OCEj0MEPAac98EUa9mW"
);
if (result) {
  console.log("hash matched");
} else {
  console.log("hash not matched");
}

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

const result2 = await validateHash(
  "$2b$10$qkxhZpDlwU15DhEXOzjeYeRinfmQ/Txjhtg31x.dmg84oop4cq2Zm"
);
if (result2) {
  console.log("hash is valid");
} else {
  console.log("hash is invalid");
}

validateHash(
  "$2a$10$W3/bbpG0rexRwKBabxbp7efehubSnxDLM7OCEj0MEPAac98EUa9m"
).then((result) => {
  if (result) {
    console.log("hash is valid");
  } else {
    console.log("hash is invalid");
  }
});

