
export enum RequestType {
  REG = "reg",
  CREATE_ROOM = "create_room",
  UPDATE_ROOM = "update_room",
  UPDATE_WINNERS = "update_winners",
  ADD_USER = "add_user_to_room",
  ADD_SHIPS = "add_ships",
  CREATE = "create_game",
  START = "start_game",
  ATTACK = "attack",
  RANDOM_ATTACK = "randomAttack",
  FINISH = "finish"
}
const ID = 0;

export type UserData = {
  name: string;
  index: number;
  error?: boolean;
  errorText?: string;
}
export type Player = {
  type: RequestType;
  data: string;
  id: typeof ID;
}

// export type UpdateWinners = {
//   type: RequestType;
//   data:  [
//     {
//         name: string;
//         wins: number;
//     }
// ],
// id: typeof ID;
// }
export type UpdateWinners = {
  type: RequestType;
  data:  string,
id: typeof ID;
}
export type CreateRoom =  {
  type: RequestType;
  data: string;
  id: typeof ID;
}
// export type UpdateRoom =  {
//   type: RequestType;
//   data:
//       [
//           {
//               roomId: number;
//               roomUsers:
//                   [
//                       {
//                           name: string;
//                           index: number;
//                       }
//                   ],
//           },
//       ],
//   id: typeof ID;
// }
export type UpdateRoom =  {
  type: RequestType;
  data: string,
  id: typeof ID;
}
export type AddUser =  {
  type: RequestType;
  data:
  {
      indexRoom: number;
  },
  id: typeof ID;
}

export type CreateGame =  {
  type: RequestType;
  data:   {
    idGame: number;
    idPlayer: number;
},
  id: typeof ID;
}
export type StartGame =  {
  type: RequestType;
  data:   {
    ships:
        [
            {
                position: {
                    x: number;
                    y: number;
                },
                direction: boolean;
                length: number;
                type: "small"|"medium"|"large"|"huge",
            }
        ],
        currentPlayerIndex: number;
}
id: typeof ID;
}
export type FinishGame =  {
  type: RequestType;
  data:   {
    winPlayer: number;
},
  id: typeof ID;
}
// game process
export type AddShips =  {
  type: RequestType;
  data:   {
    gameId: number;
    ships:
        [
            {
                position: {
                    x: number;
                    y: number;
                },
                direction: boolean;
                length: number;
                type: "small"|"medium"|"large"|"huge",
            }
        ],
    indexPlayer: number;
  id: typeof ID;
}
}

export type SendAttack =  {
  type: RequestType;
  data:   {
    gameId: number;
    x: number;
    y: number;
    indexPlayer: number;
},
  id: typeof ID;
}

export type AttackFeedback =  {
  type: RequestType;
  data:   {
    position:
    {
        x: number;
        y: number;
    },
    currentPlayer: number;
    status: "miss"|"killed"|"shot",
},
  id: typeof ID;
}
export type RandomAttack =  {
  type: RequestType;
  data:   {
    gameId: number;
    indexPlayer: number;
},
  id: typeof ID;
}

export type SendPlayerTurn =  {
  type: RequestType;
  data:   {
    currentPlayer: number;
},
  id: typeof ID;
}