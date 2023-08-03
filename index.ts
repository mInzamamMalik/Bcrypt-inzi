import { genSalt, hash, compare } from "bcrypt";

const stringToHash = (
  PasswordString: string,
  saltRounds = 10
): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      const salt = await genSalt(saltRounds);
      const hashedPassword = await hash(PasswordString, salt);
      resolve(hashedPassword);
    } catch (err) {
      reject(err);
    }
  });
};

const verifyHash = (
  realPassword: string,
  hashString: string
): Promise<boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await compare(realPassword, hashString);
      resolve(result); //return with boolean 'Hash' is matched or not
    } catch (err) {
      reject(false); //it means hash is invalid
    }
  });
};

const validateHash = (hashString: string): Promise<boolean> => {
  //true or false in resolve, no reject
  return new Promise(async (resolve, reject) => {
    try {
      const result = await compare("dummy", hashString);
      resolve(result); //return with boolean 'Hash' is matched or not
    } catch (err) {
      reject(false); //it means hash is invalid
    }
  });
};

export { stringToHash, verifyHash, verifyHash as varifyHash, validateHash };
