import { info } from "@actions/core";
import {TokenLimits} from './token'

export class Options {
  baseUrl: string;
  lightModel: string;
  lightTokenLimits: TokenLimits;

  constructor(
    baseUrl = "http://localhost:8080/api/chat/completions",
    lightModel = 'codellama',
  ) {
    this.baseUrl = baseUrl;
    this.lightModel = lightModel;
    this.lightTokenLimits = new TokenLimits(lightModel)
  }

  print(): void {
    info(`base_url: ${this.baseUrl}`);
  }
}

export class AIOptions {
  model: string;
  tokenLimits: TokenLimits;
  // TokenLimits is a class that choose the limit base on model
  constructor(model = "codellama", tokenLimits: TokenLimits | null = null){
    this.model = model
    if (tokenLimits != null) {
      this.tokenLimits = tokenLimits
      return
    }
    this.tokenLimits = new TokenLimits(model)
  }
}
