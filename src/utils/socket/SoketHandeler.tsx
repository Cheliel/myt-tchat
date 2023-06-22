import { WSConnecion } from "./models";
import { onMessageHandler } from "./messageHandeler";


export default class SocketHandeler {
    public static ws : WebSocket

    constructor(){
  
        // this.ws.on('message', this.onMessageHandler)
        // this.ws.connect()
    }

    static connect(conn: WSConnecion){
        console.log(conn)
        SocketHandeler.ws = new WebSocket('wss://irc-ws.chat.twitch.tv:443')
        SocketHandeler.ws.addEventListener('open', () => {
            SocketHandeler.ws.send(`PASS ${conn.identity.password}`);
            SocketHandeler.ws.send(`NICK ${conn.identity.username}`);
            SocketHandeler.ws.send(`JOIN #${conn.channels}`);
            console.log(SocketHandeler.ws.OPEN)
        })

        SocketHandeler.ws.onmessage = (e) => onMessageHandler(e)

        SocketHandeler.ws.onclose = (e) => onMessageHandler(e)

        SocketHandeler.ws.onerror = (e) => onMessageHandler(e)
    }

    static switchChannel(channel : string){
        SocketHandeler.ws.send(`JOIN ${channel}`);
    }

}