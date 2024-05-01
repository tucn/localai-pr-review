import { getInput, warning } from "@actions/core";
import { Bot } from "./bot";
import { Options, AIOptions } from "./options";
import {Prompts} from './prompts';

async function run(): Promise<void> {
  const options: Options = new Options(getInput("base_url"));
  // print to see which options are using 
  options.print()
  // create promt
  const prompts: Prompts = new Prompts(
    getInput('summarize'),
    getInput('summarize_release_notes')
  )
  // Create summary bot
  let lightBot: Bot | null = null
  try {
    lightBot = new Bot(
      options,
      new AIOptions(options.lightModel, options.lightTokenLimits)
    )
  } catch (e: any) {
    warning(
      `Skipped: failed to create summary bot`
    )
    return
  }
}

process
  .on("unhandledRejection", (reason, p) => {
    warning(`Unhandled Rejection at Promise: ${reason}, promise is ${p}`);
  })
  .on("uncaughtException", (e: any) => {
    warning(`Uncaught Exception thrown: ${e}, backtrace: ${e.stack}`);
  });

await run();
