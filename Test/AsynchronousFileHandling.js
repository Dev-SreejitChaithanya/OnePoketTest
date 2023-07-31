const fs = require("fs");

//function to count the words in the file
function countWordsIn(text) {
  const words = text.split(/\s+|\.+|\,/).filter((word) => word !== "");
  return words.length;
}

//read the data.text file
fs.readFile("data.text", "utf8", (err, data) => {
  console.log(data);
  if (err) {
    console.log("Error reading file !!");
    return;
  }

  const words = countWordsIn(data);
  console.log(`The file contains ${words} words`);
});
