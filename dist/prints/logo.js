"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nukingMenuOptions = exports.mainMenuLogo = exports.startMenuLogo = exports.logo = void 0;
const chalk_1 = require("chalk");
const getTheme_1 = require("../functions/utils/getTheme");
let mainColor = getTheme_1.getTheme();
function logo() {
    console.log(` `);
    console.log(mainColor("              ╔═╗═╗ ╦╔╦╗╔═╗╦═╗╔╗╔╔═╗╦    ╔╗╔╦ ╦╦╔═╔═╗╦═╗"));
    console.log(chalk_1.blackBright("              ║╣ ╔╩╦╝ ║ ║╣ ╠╦╝║║║╠═╣║    ║║║║ ║╠╩╗║╣ ╠╦╝"));
    console.log(chalk_1.white("              ╚═╝╩ ╚═ ╩ ╚═╝╩╚═╝╚╝╩ ╩╩═╝  ╝╚╝╚═╝╩ ╩╚═╝╩╚═"));
    console.log(` `);
}
exports.logo = logo;
function startMenuLogo() {
    console.log(mainColor("                ╔═════════════════╦═════════════════╗"));
    console.log(mainColor("                ║ [") +
        chalk_1.white(1) +
        mainColor("] ") +
        chalk_1.white("Login      ") +
        mainColor(" ║ [") +
        chalk_1.white(2) +
        mainColor("] ") +
        chalk_1.white("Register    ") +
        mainColor("║"));
    console.log(mainColor("                ║ [") +
        chalk_1.white(3) +
        mainColor("] ") +
        chalk_1.white("Get key    ") +
        mainColor(" ║ [") +
        chalk_1.white(4) +
        mainColor("] ") +
        chalk_1.white("Can't login ") +
        mainColor("║"));
    console.log(mainColor("                ╚═════════════════╩═════════════════╝"));
    console.log(" ");
}
exports.startMenuLogo = startMenuLogo;
function mainMenuLogo() {
    logo();
    console.log(mainColor("              [") +
        chalk_1.white(1) +
        mainColor("] ") +
        chalk_1.white("Wizz         ") +
        mainColor("[") +
        chalk_1.white(2) +
        mainColor("] ") +
        chalk_1.white("Token   ") +
        mainColor("[") +
        chalk_1.white("3") +
        mainColor("] ") +
        chalk_1.white("Support"));
    console.log(mainColor("              [") +
        chalk_1.white("x") +
        mainColor("] ") +
        chalk_1.white("Change theme ") +
        mainColor("[") +
        chalk_1.white("c") +
        mainColor("] ") +
        chalk_1.white("Log out ") +
        mainColor("[") +
        chalk_1.white("n") +
        mainColor("] ") +
        chalk_1.white("Create template"));
    console.log(mainColor("              [") +
        chalk_1.white("v") +
        mainColor("] ") +
        chalk_1.white("Utils        ") +
        mainColor("[") +
        chalk_1.white("z") +
        mainColor("] ") +
        chalk_1.white("Credits ") +
        mainColor("[") +
        chalk_1.white("m") +
        mainColor("] ") +
        chalk_1.white("Delete template"));
    console.log(" ");
    console.log(" ");
}
exports.mainMenuLogo = mainMenuLogo;
function nukingMenuOptions() {
    console.log(mainColor("          ╔═════════════════════╦══════════════════╦══════════════════╗"));
    console.log(mainColor("          ║ [") +
        chalk_1.white(1) +
        mainColor("] ") +
        chalk_1.white("Nuke            ") +
        mainColor("║ [") +
        chalk_1.white(2) +
        mainColor("] ") +
        chalk_1.white("Ban          ") +
        mainColor("║ [") +
        chalk_1.white("3") +
        mainColor("] ") +
        chalk_1.white("Kick         ") +
        mainColor("║"));
    console.log(mainColor("          ║ [") +
        chalk_1.white(4) +
        mainColor("] ") +
        chalk_1.white("Create channels ") +
        mainColor("║ [") +
        chalk_1.white(5) +
        mainColor("] ") +
        chalk_1.white("Del channels ") +
        mainColor("║ [") +
        chalk_1.white(6) +
        mainColor("] ") +
        chalk_1.white("Create roles ") +
        mainColor("║"));
    console.log(mainColor("          ║ [") +
        chalk_1.white(7) +
        mainColor("] ") +
        chalk_1.white("Delete roles    ") +
        mainColor("║ [") +
        chalk_1.white(8) +
        mainColor("] ") +
        chalk_1.white("----         ") +
        mainColor("║ [") +
        chalk_1.white(9) +
        mainColor("] ") +
        chalk_1.white("-------      ") +
        mainColor("║"));
    console.log(mainColor("          ╚═════════════════════╩══════════════════╩══════════════════╝"));
    console.log(" ");
    console.log(" ");
}
exports.nukingMenuOptions = nukingMenuOptions;
