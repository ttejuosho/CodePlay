const fs = require("fs");
const files = fs.readdirSync(__dirname + "/pic");

for (const file of files) {
  if (file.endsWith(".heic")) {
    fs.rename(
      __dirname + "/pic/" + file,
      __dirname + "/renamed/" + file.replace(".heic", ".jpg"),
      (err) => {
        console.log(err);
      }
    );
  }
}
