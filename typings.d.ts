interface Message {

    clientId: string;
    connectionId: string;
    encoding: null;
    id:string;
    name: string;
    timestamp: number;
    data:{
        id: number; //Date.now() gives a unix of string
        message: string;
        createdAt : Date | string; //gives date in form of string
    }


}