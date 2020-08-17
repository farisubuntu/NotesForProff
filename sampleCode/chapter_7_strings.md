### Section 7.1 Basic

Strings in JavaScript can be enclosed in Single quotes 'hello', Double quotes "Hello" and (from ES2015, ES6) in Template Literals (backticks) \`hello\`.

Strings can be created from other types using

- the `String()` function.
```js
var intString = String(32); // "32"
var booleanString = String(true); // "true"
var nullString = String(null); // "null"
```
- `toString`  to convert Numbers, Booleans or Objects to Strings:
```js
var intString = (5232).toString(); // "5232"
var booleanString = (false).toString(); // "false"
var objString = ({}).toString(); // "[object Object]"
```
- `String.fromCharCode` method:
```js
String.fromCharCode(104,101,108,108,111) //"hello"
```
- Creating a String object using `new` keyword is allowed, but is not recommended:
```js
var objectString = new String("Yes, I am a String object");
typeof objectString;//"object"
typeof objectString.valueOf();//"string"
```
#### Concatenating Strings:

- using `+` operator:
```js
var foo = "Foo";
var bar = "Bar";
var s="string";
var n=44;
var boolean=true;
console.log(foo+bar+s+n+boolean); // FooBarstring44true
```
- Using template literals (backticks) `hello`:
```js
var place=`World`;
var greet=`Hello ${place}!`; // "Hello World!"
```
- Use `String.raw` to get backslashes to be in the string without modification.

```js
`a\\b` // = a\b
String.raw`a\\b` // = a\\b
```

### Section 7.2: Reverse String:

The most "popular" way of reversing a string in JavaScript is:

```js
function reverseString(str) {
 return str.split('').reverse().join('');
}
reverseString('string');
 // "gnirts"
```

> However, this will work only so long as the string being reversed does not contain surrogate pairs (زوج بديل) ,  Astral symbols (رموز نجمية).

  > ```js
  > '?????.'.split('').reverse().join(''); //fails

#### Using spread operator [Version ≥ 6]

```js
function reverseString(str) {
return [...String(str)].reverse().join('');
}
```

#### Custom reverse() function

```js
function reverse(string) {
  var strRev = "";
  for (var i = string.length - 1; i >= 0; i--) {
  strRev += string[i];
 }
 return strRev;
}
reverse("zebra"); // "arbez"
```

### Section 7.3: Comparing Strings Lexicographically

- To compare strings alphabetically, use localeCompare(). This returns a negative value if the reference string is lexicographically (alphabetically) before the compared string (the parameter), a positive value if it comes afterwards, and a value of 0 if they are equal.

```js
var a = "hello";
var b = "world";
console.log(a.localeCompare(b)); // -1
```

- The `>` and `<` operators can also be used to compare strings `lexicographically`:

```js
function strcmp(a, b) {
  if(a === b) {
    return 0;
  }
  if (a > b) {
    return 1;
  }
}
 return -1;

console.log(strcmp("hello", "world")); // -1
console.log(strcmp("hello", "hello")); // 0
console.log(strcmp("world", "hello")); // 1
```
