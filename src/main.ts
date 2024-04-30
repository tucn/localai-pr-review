import { getInput } from "@actions/core";
import { Bot } from "./bot";
import { Options } from "./options";

async function run(): Promise<void> {
  const options: Options = new Options(getInput("base_url"));
}

process
  .on("unhandledRejection", (reason, p) => {
    warning(`Unhandled Rejection at Promise: ${reason}, promise is ${p}`);
  })
  .on("uncaughtException", (e: any) => {
    warning(`Uncaught Exception thrown: ${e}, backtrace: ${e.stack}`);
  });

await run();
