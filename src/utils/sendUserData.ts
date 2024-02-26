import ws from 'ws';
import { Player, RequestType } from '../types/types';

export function sendUserData(ws: any, data) {
  const newUserData = {
    name: "IsUserName",
    index: 1,
    error: false,
    errorText: ''
  }

  const createUserMessage: Player = {
    type: RequestType.REG,
    data:  JSON.stringify(newUserData),
    id: 0,
  };

  ws.send(JSON.stringify(createUserMessage));
  console.log('Sent newUser response to app:', createUserMessage);
}
