import { CaseKeyword } from "typescript";

export class TokenLimits {
  maxTokens: number;
  requestTokens: number;
  responseTokens: number;
  knowledgeCutOff: string;
  constructor(model = "codellama") {
    this.knowledgeCutOff = "2021-09-01";
    this.maxTokens = 32600;
    this.responseTokens = 4000;
    this.requestTokens = this.maxTokens - this.responseTokens - 100;
  }
  string(): string {
    return `max_tokens=${this.maxTokens}, request_tokens=${this.requestTokens}, response_tokens=${this.responseTokens}`;
  }
}
