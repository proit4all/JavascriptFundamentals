let contents = document.getElementsByClassName("content");

console.log(contents);

for (let i = 0; i < contents.length; i++) {
  let content = contents[i];

  content.textContent = "text " + i;
}
