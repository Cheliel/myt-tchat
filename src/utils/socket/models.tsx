
export interface ConnexionState {
    password: string,
    username: string,
    channels: [string]
}

export interface WSConnecion {
    identity: {
        password: string,
        username: string
    },
    channels: [string]
}

export const WSConnecion = (
    token : string, 
    name: string,
    channels : [string]
): WSConnecion =>({
    identity: {
        password: token,
        username: name
    },
    channels : channels
})

// export interface wsHandeler {
//     wsHandeler: SocketHandeler | undefined
// }