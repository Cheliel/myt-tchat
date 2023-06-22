


export const onMessageHandler = (e: any) => {

    console.log(" <============> type: ", e.type, " <=============>")  
    console.log("|")
    console.log("|")

    const message : string = e.data
    if(typeof message === 'string'){
        if (message.includes('PRIVMSG')) {
            const parts = message?.split('PRIVMSG');
            const sender = parts[0].split('!')[0].slice(1);
            const content = parts[1].trim();
            console.log('| Expéditeur :', sender);
            console.log('| Contenu du message :', content);
          } else {
            console.log("| message : ", message)
          }
    } 
    console.log("|")
    console.log("|")
    console.log("|==============================================>")
    //oauth:9kccggpp7bg3cbplilm3m98zryai6x
}