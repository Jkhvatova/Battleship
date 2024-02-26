import { RequestType, UpdateWinners, WebSocketType, Winner } from '../types/types';

export function sendUpdateWinnersData(ws: WebSocketType, data: string): void {
  const updateWinnersData: Winner[] = [
    {
        name: JSON.parse(data).name,
        wins: 0,
    }
]
const updateWinnersMessage: UpdateWinners = {
  type: RequestType.UPDATE_WINNERS,
  data:  JSON.stringify(updateWinnersData),
  id: 0
}
ws.send(JSON.stringify(updateWinnersMessage));
console.log('Sent updateWinners response to app:', updateWinnersMessage);
}