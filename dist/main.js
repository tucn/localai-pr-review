"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const options_1 = require("./options");
async function run() {
    const options = new options_1.Options((0, core_1.getInput)("base_url"));
}
process
    .on("unhandledRejection", (reason, p) => {
    warning(`Unhandled Rejection at Promise: ${reason}, promise is ${p}`);
})
    .on("uncaughtException", (e) => {
    warning(`Uncaught Exception thrown: ${e}, backtrace: ${e.stack}`);
});
await run();
