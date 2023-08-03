declare const stringToHash: (PasswordString: string, saltRounds?: number) => Promise<string>;
declare const verifyHash: (realPassword: string, hashString: string) => Promise<boolean>;
declare const validateHash: (hashString: string) => Promise<boolean>;

export { stringToHash, validateHash, verifyHash };
