import { httpServer } from "./src/http_server/index.ts";
import { wsServer } from "./src/ws_server/index.ts";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

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