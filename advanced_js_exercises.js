// const Account = (function () {
//   let _email;
//   let _password;
//   let _firstName;
//   let _lastName;
//
//   function generateDisplayName() {
//     // This just generates an array of the digits 0 - 9 and letters a - z.
//     const characters = Array(10)
//       .fill(null)
//       .map((_, i) => String.fromCharCode(i + 48))
//       .concat(
//         Array(26)
//           .fill(null)
//           .map((_, i) => String.fromCharCode(i + 97)),
//       );
//     return Array(16)
//       .fill(null)
//       .reduce(
//         (dName) =>
//           dName + characters[Math.floor(Math.random() * characters.length)],
//         "",
//       );
//   }
//
//   function checkPasswordThen(password, fnIfTrue) {
//     if (password === _password) {
//       return fnIfTrue();
//     } else {
//       return "Invalid Password";
//     }
//   }
//
//   return {
//     init(email, password, firstName, lastName) {
//       _email = email;
//       _password = password;
//       _firstName = firstName;
//       _lastName = lastName;
//       this.displayName = generateDisplayName();
//       return this;
//     },
//
//     reanonymize(password) {
//       return checkPasswordThen(password, () => {
//         this.displayName = generateDisplayName();
//         return true;
//       });
//     },
//
//     resetPassword(password, newPassword) {
//       return checkPasswordThen(password, (newPassword) => {
//         _password = newPassword;
//         return true;
//       });
//     },
//
//     firstName(password) {
//       return checkPasswordThen(password, () => _firstName);
//     },
//
//     lastName(password) {
//       return checkPasswordThen(password, () => _lastName);
//     },
//
//     email(password) {
//       return checkPasswordThen(password, () => _email);
//     },
//   };
// })();
//
// let fooBar = Object.create(Account).init("foo@bar.com", "123456", "foo", "bar");
// console.log(fooBar.firstName); // returns the firstName function
// console.log(fooBar.email); // returns the email function
// console.log(fooBar.firstName("123456")); // logs 'foo'
// console.log(fooBar.firstName("abc")); // logs 'Invalid Password'
// console.log(fooBar.displayName); // logs 16 character sequence
// console.log(fooBar.resetPassword("123", "abc")); // logs 'Invalid Password';
// console.log(fooBar.resetPassword("123456", "abc")); // logs true
//
// let displayName = fooBar.displayName;
// fooBar.reanonymize("abc"); // returns true
// console.log(displayName === fooBar.displayName); // logs false
//
// console.log(fooBar.displayName);
// let barBar = Object.create(Account).init("nate", "654321", "bar", "baz");
// console.log(barBar.displayName);
// console.log(fooBar.displayName);
// console.log(barBar.firstName("654321"));
// console.log(fooBar.firstName("abc"));
// console.log(fooBar.firstName("654321"));
// function Account(email, password, firstName, lastName) {
//   let _email = email;
//   let _password = password;
//   let _firstName = firstName;
//   let _lastName = lastName;
//
//   function generateDisplayName() {
//     // This just generates an array of the digits 0 - 9 and letters a - z.
//     const characters = Array(10)
//       .fill(null)
//       .map((_, i) => String.fromCharCode(i + 48))
//       .concat(
//         Array(26)
//           .fill(null)
//           .map((_, i) => String.fromCharCode(i + 97)),
//       );
//     return Array(16)
//       .fill(null)
//       .reduce(
//         (dName) =>
//           dName + characters[Math.floor(Math.random() * characters.length)],
//         "",
//       );
//   }
//
//   function checkPasswordThen(password, fnIfTrue) {
//     if (password === _password) {
//       return fnIfTrue();
//     } else {
//       return "Invalid Password";
//     }
//   }
//
//   this.displayName = generateDisplayName();
//   this.reanonymize = function reanonymize(password) {
//     return checkPasswordThen(password, () => {
//       this.displayName = generateDisplayName();
//       return true;
//     });
//   };
//   this.resetPassword = function resetPassword(password, newPassword) {
//     return checkPasswordThen(password, () => {
//       _password = newPassword;
//       return true;
//     });
//   };
//   this.firstName = function firstName(password) {
//     return checkPasswordThen(password, () => _firstName);
//   };
//   this.lastName = function lastName(password) {
//     return checkPasswordThen(password, () => _lastName);
//   };
//
//   this.email = function email(password) {
//     return checkPasswordThen(password, () => _email);
//   };
// }
//
// let fooBar = new Account("foo@bar.com", "123456", "foo", "bar");
// console.log(fooBar.firstName); // logs the firstName function
// console.log(fooBar.email); // logs the email function
// console.log(fooBar.firstName("123456")); // logs 'foo'
// console.log(fooBar.firstName("abc")); // logs 'Invalid Password'
// console.log(fooBar.displayName); // logs 16 character sequence
// console.log(fooBar.resetPassword("123", "abc")); // logs 'Invalid Password'
// console.log(fooBar.resetPassword("123456", "abc")); // logs true
//
// let displayName = fooBar.displayName;
// console.log(fooBar.reanonymize("abc")); // logs true
// console.log(displayName === fooBar.displayName); // logs false
//
// let bazQux = new Account("baz@qux.com", "123456", "baz", "qux");
// // Note that the following two lines of code are correct as written.
// // There are no mistakes. We are attempting to demonstrate that the
// // code does not work as might be intended.
// console.log(fooBar.firstName("abc")); // logs 'baz' but should log foo.
// console.log(fooBar.email("abc")); // 'baz@qux.com' but should 'foo@bar.com'

const Account = (function () {
  let userInfo = {};

  function generateDisplayName() {
    // This just generates an array of the digits 0 - 9 and letters a - z.
    const characters = Array(10)
      .fill(null)
      .map((_, i) => String.fromCharCode(i + 48))
      .concat(
        Array(26)
          .fill(null)
          .map((_, i) => String.fromCharCode(i + 97)),
      );
    return Array(16)
      .fill(null)
      .reduce(
        (dName) =>
          dName + characters[Math.floor(Math.random() * characters.length)],
        "",
      );
  }

  function checkPasswordThen(password, displayName, fnIfTrue) {
    if (password === userInfo[displayName].password) {
      return fnIfTrue();
    } else {
      return "Invalid Password";
    }
  }

  return {
    init(email, password, firstName, lastName) {
      this.displayName = generateDisplayName();
      userInfo[this.displayName] = {};
      userInfo[this.displayName].email = email;
      userInfo[this.displayName].password = password;
      userInfo[this.displayName].firstName = firstName;
      userInfo[this.displayName].lastName = lastName;
      return this;
    },

    reanonymize(password) {
      return checkPasswordThen(password, this.displayName, () => {
        let newDisplayName = generateDisplayName();
        userInfo[newDisplayName] = userInfo[this.displayName];
        delete userInfo[this.displayName];
        this.displayName = newDisplayName;
        return true;
      });
    },

    resetPassword(password, newPassword) {
      return checkPasswordThen(password, this.displayName, () => {
        userInfo[this.displayName].password = newPassword;
        return true;
      });
    },

    firstName(password) {
      return checkPasswordThen(password, this.displayName, () => userInfo[this.displayName].firstName);
    },

    lastName(password) {
      return checkPasswordThen(password, this.displayname, () => userInfo[this.displayName].lastName);
    },

    email(password) {
      return checkPasswordThen(password, this.displayName, () => userInfo[this.displayName].email);
    },
  };
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // logs the firstName function
console.log(fooBar.email);                         // logs the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));            // logs true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// Note that the following two lines of code are correct as written.
// There are no mistakes. We are attempting to demonstrate that the
// code does not work as might be intended.
console.log(fooBar.firstName('abc'));           // logs 'baz' but should log foo.
console.log(fooBar.email('abc'));               // 'baz@qux.com' but should 'foo@bar.com'
