"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logo_1 = require("../../prints/logo");
const createString_1 = require("../utils/createString");
const menu_1 = __importDefault(require("./nuke/menu"));
function mainMenu(client, rl) {
    console.clear();
    logo_1.mainMenuLogo();
    rl.question(createString_1.createString("Enter option"), (option) => {
        let comingSoonOptions = ["2", "3", "x", "c", "n", "m", "z", "v"];
        if (option === "1") {
            menu_1.default(client, rl);
        }
        else if (comingSoonOptions.includes(option)) {
            console.log("");
            console.log(createString_1.createString("COMING SOON!", "semi", "fail"));
            setTimeout(() => {
                mainMenu(client, rl);
            }, 1500);
            return;
        }
        else {
            mainMenu(client, rl);
        }
    });
}
exports.default = mainMenu;
