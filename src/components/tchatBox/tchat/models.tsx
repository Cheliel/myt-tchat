import { channel } from "diagnostics_channel"
import { Message } from "../message/model"

export interface TChat {
    messages: Message [] 
    channel: string
}

export const TChatConstructor = (
    messages:  Message [] ,
    channel: string
) : TChat => ({
    messages: messages,
    channel: channel
})

