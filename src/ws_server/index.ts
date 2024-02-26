import { WebSocket, WebSocketServer } from 'ws'
import { httpServer } from '../http_server';
import { CreateRoom, Player, RequestType, UpdateRoom, UpdateWinners, UserData } from '../types/types';
import { sendUserData } from '../utils/sendUserData';
import { sendUpdateRoomData } from '../utils/sendUpdateRoomData';
import { sendUpdateWinnersData } from '../utils/sendUpdateWinnersData';

const WS_PORT = 3000;
const wsServer = new WebSocketServer({ port: WS_PORT });
const clients: WebSocket[] = [];
const users: UserData[] = [];

wsServer.on('connection', function connection(ws: WebSocket) {
  clients.push(ws);
  console.log(clients);
  console.log(`Started websocket server on the ${WS_PORT} port`);
  ws.on('message', function incoming(message) {
    const resultMessage = message.toString('utf-8');
    if (ws.readyState === ws.OPEN) {
      const parsedMessage = JSON.parse(resultMessage);
      switch (parsedMessage.type) {
        case RequestType.REG:
          console.log('Received registration message:', parsedMessage.data);
          users.push(parsedMessage.data);
          console.log(users);
          console.log(parsedMessage.data.name);

          sendUserData(ws, parsedMessage.data);
          sendUpdateRoomData(ws, parsedMessage.data);
          sendUpdateWinnersData(ws, parsedMessage.data);
          break;
        case RequestType.CREATE_ROOM:
          console.log('Received CREATE_ROOM:', parsedMessage.data);
          break;
        default:
          console.log('Unknown message type:', parsedMessage.type);
      }
    } else {
      console.log('WebSocket is not open, message not sent');
    }
  });
});

export { wsServer };