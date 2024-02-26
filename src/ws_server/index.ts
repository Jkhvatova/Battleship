import { WebSocket, WebSocketServer } from 'ws'
import { RequestType, UserData } from '../types/types';
import { sendUserData } from '../utils/sendUserData';
import { sendUpdateRoomData } from '../utils/sendUpdateRoomData';
import { sendUpdateWinnersData } from '../utils/sendUpdateWinnersData';

const WS_PORT = 3000;
const wsServer = new WebSocketServer({ port: WS_PORT });
const clients: WebSocket[] = [];
const users: UserData[] = [];

wsServer.on('connection', function connection(ws: WebSocket) {
  clients.push(ws);
  console.log(`Started websocket server on the ${WS_PORT} port`);
  ws.on('message', function incoming(message) {
    if (message){
      const resultMessage = message.toString('utf-8');
      const parsedMessage = JSON.parse(resultMessage);
      try {
    if (ws.readyState === ws.OPEN) {
      switch (parsedMessage.type) {
        case RequestType.REG:
          console.log('Received registration message:', parsedMessage.data);
          users.push(parsedMessage.data);
          sendUserData(ws, parsedMessage.data);
          sendUpdateRoomData(ws, parsedMessage.data, 1);
          sendUpdateWinnersData(ws, parsedMessage.data);
          break;
        case RequestType.CREATE_ROOM:
          console.log('Received create_room message:', parsedMessage);
          break;
        case RequestType.ADD_USER:
          console.log('Received add_user_to_room message:', parsedMessage);
          break;
        case RequestType.CREATE:
          console.log('Received create_game message:', parsedMessage);
          break;
        case RequestType.START:
          console.log('Received start_game message:', parsedMessage);
          break;
          case RequestType.SINGLE:
            console.log('Received single_play message:', parsedMessage);
            break;
        case RequestType.ADD_SHIPS:
          console.log('Received add_ships message:', parsedMessage);
          break;
        case RequestType.ATTACK:
          console.log('Received attack message:', parsedMessage);
          break;
        case RequestType.RANDOM_ATTACK:
          console.log('Received randomAttack message:', parsedMessage);
          break;
        case RequestType.FINISH:
          console.log('Received finish message:', parsedMessage);
          break;
          default:
          console.log('Unknown message type:', parsedMessage.type);
      }
    }
  } catch(error) {
    console.error('Error parsing incoming message:', error);
  }
    } else {
      console.log('WebSocket is not open, message not sent');
    }
  });
});

export { wsServer };