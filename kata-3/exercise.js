const { hashString } = require("./hash-string");

console.log(`
  Lets crack a password!

  Cracking passwords can take a lot of time and effort, but
  fortunately for us, this password was generated from a limited set of
  lowercase-only characters (a-z) where the maximum length is 5!

  Traditionally, user's passwords are stored in a database as a "hash". 
  Hashes use a one-way function and are not reversible. In other words,
  once a string has been "hashed", the original string cannot be recovered. This means that
  if the contents are the database are ever hacked and exposed, the attacker will not be able to
  easily recover user passwords.

  When a user logs in, the password they entered is hashed using the same algorithm,
  and compared against the value in the database. 

  But lets have some fun, and crack the password below! We know that the password
  only contains alphanumeric lowercase characters and is of varying length. Therefore,
  we should be able to crack the password by looping through all the possible passwords, 
  otherwise known as brute forcing.

  You will need to implement an algorithm that tests "a", "b", "c", etc. then continues to
  test "aa", "ab", "ba", "bb", etc. until it finds the password.
`);

const PASSWORD_TO_CRACK = "1610838743cc90e3e4fdda748282d9b8";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

const MAXIMUM_LENGTH = 5;

const hack = (prefix) => {
  for (const letter of ALPHABET) {
    const testingPassword = prefix + letter;

    console.log(`testing password: ${testingPassword}`);

    /**
     * Did you know you can recursively call functions from within a function?
     *
     * Try calling: hack(testingPassword) from inside this function!
     */

    /**
     * Note: You will also need to check the length of the string as the
     * password won't be longer than MAXIMUM_LENGTH
     */

    /**
     * Note: The hashString function will return the hashed value and
     * is already implemented for you.
     */
    const hash = hashString(testingPassword);

    console.log(`testing hash: ${hash}`);
  }
};

console.log(hack(""));
