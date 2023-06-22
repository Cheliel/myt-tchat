


export const onMessageHandler = (e: any) => {
    const message : string = e.data
    if(typeof message === 'string'){
        if (message.includes('PRIVMSG')) {
            const parts = message?.split('PRIVMSG');
            const sender = parts[0].split('!')[0].slice(1);
            const content = parts[1].trim();
            console.log('Expéditeur :', sender);
            console.log('Contenu du message :', content);
          }
    }   
}