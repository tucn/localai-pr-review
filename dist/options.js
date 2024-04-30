"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIOptions = exports.Options = void 0;
const core_1 = require("@actions/core");
const token_1 = require("./token");
class Options {
    constructor(baseUrl = "http://localhost:8080/api/chat/completions") {
        this.baseUrl = baseUrl;
    }
    print() {
        (0, core_1.info)(`base_url: ${this.baseUrl}`);
    }
}
exports.Options = Options;
class AIOptions {
    // TokenLimits is a class that choose the limit base on model
    constructor(model = "codellama", tokenLimits = null) {
        this.model = model;
        if (tokenLimits != null) {
            this.tokenLimits = tokenLimits;
            return;
        }
        this.tokenLimits = new token_1.TokenLimits(model);
    }
}
exports.AIOptions = AIOptions;
