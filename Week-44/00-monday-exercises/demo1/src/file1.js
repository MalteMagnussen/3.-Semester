// a) In the src folder, create a new JavaScript file called file1.js and paste in the following content.
export const text1 = "Hello";
export const text2 = "Hello World";
export const text3 = "Hello Wonderful World";

export default function(str) {
  return str.toUpperCase();
}

/* Observe how we export "many" named values using the export keyword, 
and a single value using export default. 
Usually, it's not recommended to mix default exports with “named” exports. 
However, for simplicity, we do it here. */
