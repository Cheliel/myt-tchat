
export interface Message {
    sender: string, 
    message: string,
    type: string,
    channel: string,
    index: string
}

export const Message = (
    sender: string, 
    message: string, 
    type: string, 
    channel: string,
    index: string
    ) : Message => ({
        sender: sender,
        message : message,
        type: type,
        channel: channel,
        index: index
    })