### Verification Code Generator.

This is a package that generate verification code using random numbers. For example you can generate numbers like `12789` and use it as a verification code with your magic.

### Why this simple package?

I created this package, when i was working on a certain application where I have to send the verification codes to the users via email. So I take it as a good idea to create it as a package that using regular functions for reusability.

### Installation

### yarn

```
yarn add @crispengari/random-verification-codes
```

### npm

```
npm install @crispengari/random-verification-codes
```

### TypeScript

You don't have to explicitly install the types for this package because it was created using typescript.

### Basic usage

```ts
import {
  generateVerificationCode,
  generateInteger,
} from "@crispengari/random-verification-codes";

const randomInt = generateInteger(); // returns a random number between 0 and 9 inclusive

const generated = await generateVerificationCode(); // generate a random verification 5 digit as a string by default
```

1. `generateVerificationCode()`
   A promise function that accepts three argument and returns a string or an integer based on the arguments passed:

- `**numberOfDigits**`- a `number` which specifies length of the generated code default is `5`.
- `**allowZeroStart**`- a `boolean` which specifies wether the verification code to start with a zero or not default is `true`.
- `**returnAsString**`- a `boolean` which specifies wether the verification should be a string or a number default is `true`.

### Basic example

1. `es6`

```ts
import {
  generateVerificationCode,
  generateInteger,
} from "@crispengari/random-verification-codes";

const main = async () => {
  const generated = await generateVerificationCode();
  console.log(generated);
};
main();
```

2. `es5`

```ts
import {
  generateVerificationCode,
  generateInteger,
} from "@crispengari/random-verification-codes";

generateVerificationCode().then((generatedCode) => console.log(generatedCode));
```
