"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const createString_1 = require("./functions/utils/createString");
const logo_1 = require("./prints/logo");
const login_1 = __importDefault(require("./functions/start-menu/login"));
const register_1 = __importDefault(require("./functions/start-menu/register"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function toolStart() {
    // child_process.exec("mode 85,20");
    console.clear();
    logo_1.logo();
    logo_1.startMenuLogo();
    rl.question(createString_1.createString("Enter option"), (option) => {
        if (option === "1") {
            login_1.default(rl);
        }
        else if (option === "2") {
            register_1.default(rl);
        }
        else {
            console.log("");
            console.log(createString_1.createString("COMING SOON!", "semi", "fail"));
            setTimeout(() => {
                toolStart();
            }, 1500);
            return;
        }
    });
}
toolStart();
exports.default = toolStart;
