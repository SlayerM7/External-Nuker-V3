import { Client } from "discord.js";
import db from "../../database/db";
import { mainMenuLogo } from "../../prints/logo";
import register from "../start-menu/register";
import { createString } from "../utils/createString";
import nukeMenu from "./nuke/menu";

export default function mainMenu(client, rl) {
    console.clear();
    mainMenuLogo();
    rl.question(createString("Enter option"), (option) => {
      let comingSoonOptions = ["2", "3", "x", "c", "n", "m", "z", "v"];
      if (option === "1") {
        nukeMenu(client, rl);
      } else if (comingSoonOptions.includes(option)) {
        console.log("");
        console.log(createString("COMING SOON!", "semi", "fail"));
        setTimeout(() => {
          mainMenu(client, rl);
        }, 1500);
        return;
      } else {
        mainMenu(client, rl);
      }
    });
  }
