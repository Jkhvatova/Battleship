import { WebSocketServer } from 'ws'
import { httpServer } from '../http_server';

const WS_PORT = 3000;
const wsServer = new WebSocketServer({ port: WS_PORT });

wsServer.on('connection', function connection(ws) {
  console.log(`Started websocket server on the ${WS_PORT} port`);
  ws.on('message', function incoming(message) {
    console.log('received command:', message);
    ws.send('Result for command: ' + message);
    console.log('sent result for command:', message);
  });
});

export { wsServer };