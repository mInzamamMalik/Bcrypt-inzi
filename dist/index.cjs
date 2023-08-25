"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// index.ts
var bcrypt_inzi_exports = {};
__export(bcrypt_inzi_exports, {
  stringToHash: () => stringToHash,
  validateHash: () => validateHash,
  varifyHash: () => verifyHash,
  verifyHash: () => verifyHash
});
module.exports = __toCommonJS(bcrypt_inzi_exports);
var import_bcrypt = require("bcrypt");
var stringToHash = (PasswordString, saltRounds = 10) => {
  return new Promise((resolve, reject) => __async(void 0, null, function* () {
    try {
      const salt = yield (0, import_bcrypt.genSalt)(saltRounds);
      const hashedPassword = yield (0, import_bcrypt.hash)(PasswordString, salt);
      resolve(hashedPassword);
    } catch (err) {
      reject(err);
    }
  }));
};
var verifyHash = (realPassword, hashString) => {
  return new Promise((resolve, reject) => __async(void 0, null, function* () {
    try {
      const result = yield (0, import_bcrypt.compare)(realPassword, hashString);
      resolve(result);
    } catch (err) {
      reject(false);
    }
  }));
};
var validateHash = (hashString) => {
  return new Promise((resolve, reject) => __async(void 0, null, function* () {
    try {
      const result = yield (0, import_bcrypt.compare)("dummy", hashString);
      resolve(result);
    } catch (err) {
      reject(false);
    }
  }));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  stringToHash,
  validateHash,
  varifyHash,
  verifyHash
});
