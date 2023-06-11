import {
    WebSocketGateway,
    OnGatewayConnection,
    OnGatewayDisconnect,
    WebSocketServer,
    OnGatewayInit,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  
  @WebSocketGateway()
  export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
    @WebSocketServer() server: Server;
    afterInit(server: any) {
      console.log("yara");
    }
  
    handleConnection(client: Socket) {
      console.log(`${client.id} bağlandı`);
    }
  
    handleDisconnect(client: Socket) {
      console.log(`${client.id} bağlantısı koptu`);
    }
  }
  