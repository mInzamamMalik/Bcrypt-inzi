/*jslint node: true, indent: 4, stupid: true */
import { genSaltSync, hashSync, compareSync } from "../dist/index.js";

console.log("\n\n Salts \n");

var salt1 = genSaltSync(8);
console.log(salt1);

var salt2 = genSaltSync(10);
console.log(salt2);

console.log("\n\n Hashes \n");

var hash1 = hashSync("super secret", salt1, null);
console.log(hash1);

var hash2 = hashSync("super secret", salt1, null);
console.log(hash2);

var hash3 = hashSync("supersecret", salt1, null);
console.log(hash3);

var hash4 = hashSync("supersecret", salt1, null);
console.log(hash4);

var hash5 = hashSync("super secret", salt2, null);
console.log(hash5);

var hash6 = hashSync("super secret", salt2, null);
console.log(hash6);

var hash7 = hashSync("supersecret", salt2, null);
console.log(hash7);

var hash8 = hashSync("supersecret", salt2, null);
console.log(hash8);

var hash9 = hashSync("super secret", null, null);
console.log(hash9);

var hash0 = hashSync("supersecret", null, null);
console.log(hash0);

console.log("\n\n First Set of Compares \n");

console.log(compareSync("super secret", hash1) ? "PASSED" : "FAILED");
console.log(compareSync("super secret", hash2) ? "PASSED" : "FAILED");
console.log(compareSync("super secret", hash5) ? "PASSED" : "FAILED");
console.log(compareSync("super secret", hash6) ? "PASSED" : "FAILED");
console.log(compareSync("super secret", hash9) ? "PASSED" : "FAILED");
console.log(compareSync("super secret", hash3) ? "FAILED" : "PASSED");
console.log(compareSync("super secret", hash4) ? "FAILED" : "PASSED");
console.log(compareSync("super secret", hash7) ? "FAILED" : "PASSED");
console.log(compareSync("super secret", hash8) ? "FAILED" : "PASSED");
console.log(compareSync("super secret", hash0) ? "FAILED" : "PASSED");

console.log("\n\n Second Set of Compares \n");

console.log(compareSync("supersecret", hash1) ? "FAILED" : "PASSED");
console.log(compareSync("supersecret", hash2) ? "FAILED" : "PASSED");
console.log(compareSync("supersecret", hash5) ? "FAILED" : "PASSED");
console.log(compareSync("supersecret", hash6) ? "FAILED" : "PASSED");
console.log(compareSync("supersecret", hash9) ? "FAILED" : "PASSED");
console.log(compareSync("supersecret", hash3) ? "PASSED" : "FAILED");
console.log(compareSync("supersecret", hash4) ? "PASSED" : "FAILED");
console.log(compareSync("supersecret", hash7) ? "PASSED" : "FAILED");
console.log(compareSync("supersecret", hash8) ? "PASSED" : "FAILED");
console.log(compareSync("supersecret", hash0) ? "PASSED" : "FAILED");

console.log("\n\n -------------------- UTF-8 passwords --------------------");
var pw1 = "\u6e2f", // http://www.fileformat.info/info/unicode/char/6e2f/index.htm
  pw2 = "港", // Character 0x6e2f same as pw1.
  pw3 = "\u6f2f", // http://www.fileformat.info/info/unicode/char/6f2f/index.htm
  pw4 = "漯", // Character 0x6f2f same as pw3.
  salt = "$2a$05$0000000000000000000000",
  hash_pw1 = hashSync(pw1, salt, null),
  hash_pw2 = hashSync(pw2, salt, null),
  hash_pw3 = hashSync(pw3, salt, null),
  hash_pw4 = hashSync(pw4, salt, null);

console.log("\n\n Hashes \n");
console.log(hash_pw1);
console.log(hash_pw2);
console.log(hash_pw3);
console.log(hash_pw4);

console.log("\n\n Third Set of Compares \n");

console.log(compareSync(pw1, hash_pw1) ? "PASSED" : "FAILED");
console.log(compareSync(pw2, hash_pw2) ? "PASSED" : "FAILED");
console.log(compareSync(pw3, hash_pw3) ? "PASSED" : "FAILED");
console.log(compareSync(pw4, hash_pw4) ? "PASSED" : "FAILED");
console.log(
  "Hashes 1 and 3 are different: " + (hash_pw1 !== hash_pw3)
    ? "PASSED"
    : "FAILED"
);
console.log(
  "Hashes 2 and 4 are different: " + (hash_pw2 !== hash_pw4)
    ? "PASSED"
    : "FAILED"
);
console.log(
  "Hashes 1 and 2 are the same: " + (hash_pw1 !== hash_pw2)
    ? "PASSED"
    : "FAILED"
);
console.log(
  "Hashes 3 and 4 are the same: " + (hash_pw3 !== hash_pw4)
    ? "PASSED"
    : "FAILED"
);
