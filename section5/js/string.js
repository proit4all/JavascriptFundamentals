let st = "Welcome, Hello world!";

console.log(st);

console.log(st.toUpperCase());
console.log(st.toLowerCase());

st.split(" ").forEach(function (item) {
  console.log(item);
});

console.log(st.repeat(5));
console.log(st.indexOf("Hello"));

console.log(st.slice(0, 7));
