import { httpServer } from "./src/http_server/index";
import { wsServer } from "./src/ws_server/index";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT, () => {
  console.log('HTTP server is listening on port ' + HTTP_PORT);
});

wsServer.on('listening', () => {
  console.log('WebSocket server is listening');
});
function shutdown() {
  wsServer.close(() => {
    console.log('WebSocket server closed');
    httpServer.close(() => {
      console.log('HTTP server closed');
      process.exit(0);
    });
  });
}

process.on('SIGINT', () => {
  console.log('Received SIGINT signal');
  shutdown();
});