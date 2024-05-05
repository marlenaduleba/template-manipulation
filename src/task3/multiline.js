function multiline(templateString) {
  let text = "";
  let i = 1;
  const strings = templateString[0].split("\n");
  strings.forEach((str) => {
    if (str) {
      text += `${i} ${str} \n`;
      i++;
    }
  });
  return text;
}

const code = multiline`
function add(a, b) {
return a + b;
}
`;

console.log(code);
// Expected:
// "1 function add(a, b) {
//  2 return a + b;
//  3 }"
