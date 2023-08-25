// import { stringToHash, verifyHash, validateHash } from "../dist/index.js";
const { stringToHash, verifyHash, validateHash } = require("../dist/index.cjs");

describe("using bcrypt library and simplifying its Password hashing functions", () => {
  const samplePassword = "password123";

  it("should hash the password and return a valid hash", async () => {
    const hashedPassword = await stringToHash(samplePassword);
    expect(hashedPassword).toBeTruthy(); // Check if the hash is truthy (non-empty)
  });

  it("should verify a valid password against its hash", async () => {
    const hashedPassword = await stringToHash(samplePassword);
    const isMatched = await verifyHash(samplePassword, hashedPassword);
    expect(isMatched).toBe(true); // The provided password should match the hash
  });

  it("should return false for an invalid password against its hash", async () => {
    const hashedPassword = await stringToHash(samplePassword);
    const isMatched = await verifyHash("invalidpassword", hashedPassword);
    expect(isMatched).toBe(false); // The invalid password should not match the hash
  });

  it("should validate a valid hash", async () => {
    const hashedPassword = await stringToHash(samplePassword);
    const isValidHash = await validateHash(hashedPassword);
    expect(isValidHash).toBe(true); // The provided hash should be valid
  });

  it("should return false for an invalid hash", async () => {
    const isValidHash = await validateHash("invalidhash");
    expect(isValidHash).toBe(false); // An invalid hash should return false
  });
});
