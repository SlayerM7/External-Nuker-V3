import { blackBright, white } from "chalk";
import db from "../database/db";
import { getTheme } from "../functions/utils/getTheme";

let mainColor = getTheme();

function logo() {
  console.log(` `);
  console.log(
    mainColor("              ╔═╗═╗ ╦╔╦╗╔═╗╦═╗╔╗╔╔═╗╦    ╔╗╔╦ ╦╦╔═╔═╗╦═╗")
  );
  console.log(
    blackBright("              ║╣ ╔╩╦╝ ║ ║╣ ╠╦╝║║║╠═╣║    ║║║║ ║╠╩╗║╣ ╠╦╝")
  );
  console.log(
    white("              ╚═╝╩ ╚═ ╩ ╚═╝╩╚═╝╚╝╩ ╩╩═╝  ╝╚╝╚═╝╩ ╩╚═╝╩╚═")
  );
  console.log(` `);
}

function startMenuLogo() {
  console.log(
    mainColor("                ╔═════════════════╦═════════════════╗")
  );
  console.log(
    mainColor("                ║ [") +
      white(1) +
      mainColor("] ") +
      white("Login      ") +
      mainColor(" ║ [") +
      white(2) +
      mainColor("] ") +
      white("Register    ") +
      mainColor("║")
  );
  console.log(
    mainColor("                ║ [") +
      white(3) +
      mainColor("] ") +
      white("Get key    ") +
      mainColor(" ║ [") +
      white(4) +
      mainColor("] ") +
      white("Can't login ") +
      mainColor("║")
  );
  console.log(
    mainColor("                ╚═════════════════╩═════════════════╝")
  );
  console.log(" ");
}

function mainMenuLogo() {
  logo();
  console.log(
    mainColor("              [") +
      white(1) +
      mainColor("] ") +
      white("Wizz         ") +
      mainColor("[") +
      white(2) +
      mainColor("] ") +
      white("Token   ") +
      mainColor("[") +
      white("3") +
      mainColor("] ") +
      white("Support")
  );
  console.log(
    mainColor("              [") +
      white("x") +
      mainColor("] ") +
      white("Change theme ") +
      mainColor("[") +
      white("c") +
      mainColor("] ") +
      white("Log out ") +
      mainColor("[") +
      white("n") +
      mainColor("] ") +
      white("Create template")
  );
  console.log(
    mainColor("              [") +
      white("v") +
      mainColor("] ") +
      white("Utils        ") +
      mainColor("[") +
      white("z") +
      mainColor("] ") +
      white("Credits ") +
      mainColor("[") +
      white("m") +
      mainColor("] ") +
      white("Delete template")
  );
  console.log(" ");
  console.log(" ");
}

function nukingMenuOptions() {
  console.log(
    mainColor(
      "          ╔═════════════════════╦══════════════════╦══════════════════╗"
    )
  );
  console.log(
    mainColor("          ║ [") +
      white(1) +
      mainColor("] ") +
      white("Nuke            ") +
      mainColor("║ [") +
      white(2) +
      mainColor("] ") +
      white("Ban          ") +
      mainColor("║ [") +
      white("3") +
      mainColor("] ") +
      white("Kick         ") +
      mainColor("║")
  );
  console.log(
    mainColor("          ║ [") +
      white(4) +
      mainColor("] ") +
      white("Create channels ") +
      mainColor("║ [") +
      white(5) +
      mainColor("] ") +
      white("Del channels ") +
      mainColor("║ [") +
      white(6) +
      mainColor("] ") +
      white("Create roles ") +
      mainColor("║")
  );
  console.log(
    mainColor("          ║ [") +
      white(7) +
      mainColor("] ") +
      white("Delete roles    ") +
      mainColor("║ [") +
      white(8) +
      mainColor("] ") +
      white("----         ") +
      mainColor("║ [") +
      white(9) +
      mainColor("] ") +
      white("-------      ") +
      mainColor("║")
  );
  console.log(
    mainColor(
      "          ╚═════════════════════╩══════════════════╩══════════════════╝"
    )
  );
  console.log(" ");
  console.log(" ");
}

export { logo, startMenuLogo, mainMenuLogo, nukingMenuOptions };
