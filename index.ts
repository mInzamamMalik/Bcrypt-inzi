import * as bcrypt from "bcrypt-nodejs";

export let stringToHash = (PasswordString: string, round = 10): Promise<string> => {
    return new Promise((resolve, reject) => {

        bcrypt.genSalt(round, function (err, salt) {
            if (err) {
                reject(err);
            }
            bcrypt.hash(PasswordString, salt, function () { }, function (err, hashedPassword: string) {
                if (err) {
                    reject(err);
                }
                resolve(hashedPassword);
            });
        });
    })
}

export let varifyHash = (realPassword: string, hashString: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(realPassword, hashString, function (err, result) {//'result'' will be boolean 
            if (err) {
                resolve(false);//it means hash is invalid
            }
            resolve(result);//return with boolean 'Hash' is matched or not
        });
    })
}

export let validateHash = (hashString: string): Promise<boolean> => {//true or false in resolve, no reject
    return new Promise((resolve, reject) => {
        bcrypt.compare("dummy", hashString, function (err, result) {//'result'' will be boolean 
            if (err) {
                resolve(false);//it means Hash is invalid
            }
            resolve(true);//it means hash is either matched or not but it is a valid Hash
        });
    })
}