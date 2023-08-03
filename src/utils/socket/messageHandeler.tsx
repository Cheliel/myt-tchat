
import store from "../../store"
import { addMessage } from "../../reducer/tchatsReducer"
import { getMessage } from "../../components/tchatBox/message/model"

export const onMessageHandler = (e: any) => {

    // console.log(" <============> type: ", e.type, " <=============>")  
    // console.log("|")
    // console.log("|")

    const data : string = e.data
    if(typeof data === 'string'){
        if (data.includes('PRIVMSG')) {
            const parts = data?.split('PRIVMSG');
            const sender : string = parts[0].split('!')[0].slice(1);
            const content : string = parts[1].trim();
            const {message, channel} = splitMessageChannel(content)
            // console.log('| Expéditeur :', sender);
            // console.log('| Contenu du message :', message);
            store.dispatch(addMessage(getMessage(sender, message, e.type, channel, generateUniqueID(sender))))
          } else {
            console.log(" listen : ", data)
          }
    } 
    // console.log("|")
    // console.log("|")
    // console.log("|==============================================>")

}

const splitMessageChannel = (content: string) => {
  const start = content.indexOf('#')
  const result : MessageAndChannel = MessageAndChannel('', '')
  for(let i = start; i < content.length ; i++){
    if(content.charAt(i) == " "){
      result.channel = content.substring(start + 1, i)
      result.message= content.substring(i+2)
      break;
    } 
  }
  return result
}

interface MessageAndChannel {
  message: string, 
  channel: string
}

const MessageAndChannel = (
  message: string, 
  channel : string
): MessageAndChannel => ({
  message : message,
  channel : channel
})

export const generateUniqueID = (sender : string) => {
  const timestamp = Date.now();
  const uniqueID = `${timestamp}_${sender}`;
  return uniqueID;
}