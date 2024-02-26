import { RequestType, UpdateRoom, UpdatedRoomData, WebSocketType } from '../types/types';

export function sendUpdateRoomData(ws: WebSocketType, data: string, id: number): void {
  const roomData: UpdatedRoomData = [
    {
        roomId: id,
        roomUsers:
            [
                {
                  name: JSON.parse(data).name,
                    index: 0,
                },
            ],
    },
]
const updateRoomMessage: UpdateRoom = {
  type: RequestType.UPDATE_ROOM,
  data:  JSON.stringify(roomData),
  id: 0,
};
ws.send(JSON.stringify(updateRoomMessage));
console.log('Sent updateRoom response to app:', updateRoomMessage);
}