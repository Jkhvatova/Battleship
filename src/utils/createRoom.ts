import { CreateRoom, RequestType, UserData, WebSocketType } from '../types/types';
import { sendUpdateRoomData } from './sendUpdateRoomData';

export function createRoom(ws: WebSocketType, data: UserData): void {
  const newUserData: UserData = {
    name: data[0].name,
    index: 1,
  }

  const createRoomMessage: CreateRoom = {
    type: RequestType.CREATE_ROOM,
    data:  "",
    id: 0,
  };

 sendUpdateRoomData(ws, JSON.stringify(newUserData), 1);
  console.log('Sent newUser response to app:', createRoomMessage);
}