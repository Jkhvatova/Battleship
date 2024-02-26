import { RequestType, UpdateRoom } from '../types/types';

export function sendUpdateRoomData(ws: any, data) {
  const updateRoomData = [
    {
        roomId: 1,
        roomUsers:
            [
                {
                    name: "userName",
                    index: 0,
                }
            ],
    },
]
const updateRoomMessage: UpdateRoom = {
  type: RequestType.UPDATE_ROOM,
  data:  JSON.stringify(updateRoomData),
  id: 0,
};
ws.send(JSON.stringify(updateRoomMessage));
console.log('Sent updateRoom response to app:', updateRoomMessage);
}