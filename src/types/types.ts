
export enum Type {
  REG = "reg",
  CREATE_ROOM = "create_room",
  UPDATE_ROOM = "update_room",
  ADD_USER = "add_user_to_room",
  ADD_SHIPS = "add_ships",
  CREATE = "create_game",
  START = "start_game",
  ATTACK = "attack",
  RANDOM_ATTACK = "randomAttack",
  FINISH = "finish"
}
const ID = 0;

export type Player = {
  type: Type;
  data: {
    name: string;
    index: number;
    error?: boolean;
    errorText?: string;
  };
  id: typeof ID;
}

export type UpdateWInners = {
  type: Type;
  data:  [
    {
        name: string;
        wins: string;
    }
],
id: typeof ID;
}

export type CreateRoom =  {
  type: Type;
  data: string;
  id: typeof ID;
}
export type UpdateRoom =  {
  type: Type;
  data:
      [
          {
              roomId: number;
              roomUsers:
                  [
                      {
                          name: string;
                          index: number;
                      }
                  ],
          },
      ],
  id: typeof ID;
}
export type AddUser =  {
  type: Type;
  data:
  {
      indexRoom: number;
  },
  id: typeof ID;
}

export type CreateGame =  {
  type: Type;
  data:   {
    idGame: number;
    idPlayer: number;
},
  id: typeof ID;
}
export type StartGame =  {
  type: Type;
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
  type: Type;
  data:   {
    winPlayer: number;
},
  id: typeof ID;
}
// game process
export type AddShips =  {
  type: Type;
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
  type: Type;
  data:   {
    gameId: number;
    x: number;
    y: number;
    indexPlayer: number;
},
  id: typeof ID;
}

export type AttackFeedback =  {
  type: Type;
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
  type: Type;
  data:   {
    gameId: number;
    indexPlayer: number;
},
  id: typeof ID;
}

export type SendPlayerTurn =  {
  type: Type;
  data:   {
    currentPlayer: number;
},
  id: typeof ID;
}