import { logo } from "../../prints/logo";
import { createString } from "../utils/createString";
import { Client } from "discord.js";
import request from "request";
import toolStart from "../..";
import db from "../../database/db";
import main from "../tool/main";
import sleep from "../utils/sleep";

export default function (rl) {
  console.clear();
  logo();

  rl.question(createString("Enter username"), (username) => {
    username = username.trim();
    rl.question(createString("Enter password"), (password) => {
      password = password.trim();
      request(
        {
          url: "https://external-nuker-api-1.0w218021.repl.co/login",
          method: "POST",
          json: {
            Username: username,
            Password: password,
          },
        },
        async (err, res, body) => {
          if (res.body.message === "That account does not exist.") {
            console.log(" ");
            console.log(createString("Unknown account", "semi", "fail"));
            setTimeout(() => {
              toolStart();
            }, 1000);
            return;
          }
          if (res.body.message === "Incorrect password.") {
            console.log(" ");
            console.log(createString("Incorrect password", "semi", "fail"));
            setTimeout(() => {
              toolStart();
            }, 1000);
            return;
          }
          if (res.body.message === "Exception fail") {
            console.log(" ");
            console.log(createString("Unknown exception", "semi", "fail"));
            setTimeout(() => {
              toolStart();
            }, 1000);
            return;
          }
          if (!res.body) {
            console.log(" ");
            console.log(createString("Please try again later", "semi", "fail"));
            setTimeout(() => {
              toolStart();
            }, 1000);
            return;
          } else if (res.body.status === false) {
            console.log(" ");
            console.log(createString("Please try again later", "semi", "fail"));
            setTimeout(() => {
              toolStart();
            }, 1000);
          }
          let preTokenRes = res;
          request(
            {
              url: "https://external-nuker-api-1.0w218021.repl.co/gettoken",
              method: "GET",
              json: {
                Authorization: res.body.message,
              },
            },
            (err, res, body) => {
              const client = new Client();

              if (res.body.message === "No token has been added.") {
                console.clear();
                logo();
                console.log(createString("No token saved", "semi", "fail"));
                console.log(" ");
                rl.question(createString("Enter token"), (token) => {
                  if (token === "menu") {
                    toolStart();
                    return;
                  }
                  client.on("ready", () => {
                    client.destroy();
                    console.log(" ");
                    request(
                      {
                        url: "https://external-nuker-api-1.0w218021.repl.co/addtoken",
                        json: {
                          Authorization: preTokenRes.body.message,
                          Token: token,
                        },
                        method: "POST",
                      },
                      (err, res, body) => {}
                    );
                    console.log(
                      createString("Token saved! Please re-login", "semi")
                    );
                    setTimeout(() => {
                      toolStart();
                    }, 1000);
                  });
                  client.login(token).catch(() => {
                    console.log(createString("Invalid token", "semi", "fail"));
                    setTimeout(() => {
                      toolStart();
                    }, 1000);
                  });
                });
                return;
              }
              db.set("auth-code", preTokenRes.body.message);
              db.set("username", preTokenRes.body.username);
              db.set("curtoken", res.body.message);

              client.login(res.body.message);

              main(client, rl);
            }
          );
        }
      );
    });
  });
}
