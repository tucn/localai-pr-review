"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenLimits = void 0;
class TokenLimits {
    constructor(model = "codellama") {
        this.knowledgeCutOff = "2021-09-01";
        this.maxTokens = 32600;
        this.responseTokens = 4000;
        this.requestTokens = this.maxTokens - this.responseTokens - 100;
    }
    string() {
        return `max_tokens=${this.maxTokens}, request_tokens=${this.requestTokens}, response_tokens=${this.responseTokens}`;
    }
}
exports.TokenLimits = TokenLimits;
