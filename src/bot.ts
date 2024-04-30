import './fetch-polyfill'

import {AIOptions, Options} from './options'

// define type to save parentMessageId and conversationId
export interface Ids {
    parentMessageId?: string
    conversationId?: string
}

export class Bot {
    private readonly api: null  
    private readonly options: Options
    
    constructor(options: Options, aiOptions: AIOptions) {
        this.options = options
        this.api = null
    }
}
