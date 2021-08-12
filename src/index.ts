import db from "./database/db";
import readline from "readline";
import { createString } from "./functions/utils/createString";
import { logo, startMenuLogo } from "./prints/logo";
import login from "./functions/start-menu/login";
import register from "./functions/start-menu/register";
import child_process from "child_process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function toolStart() {
  // child_process.exec("mode 85,20");
  console.clear();
  logo();
  startMenuLogo();
  rl.question(createString("Enter option"), (option) => {
    if (option === "1") {
      login(rl);
    } else if (option === "2") {
      register(rl);
    } else {
      console.log("");
      console.log(createString("COMING SOON!", "semi", "fail"));
      setTimeout(() => {
        toolStart();
      }, 1500);
      return;
    }
  });
}
toolStart();

export default toolStart;
