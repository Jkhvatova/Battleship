import { RequestType, UpdateWinners } from '../types/types';

export function sendUpdateWinnersData(ws: any, data) {
  const updateWinnersData = [
    {
        name: "userName",
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