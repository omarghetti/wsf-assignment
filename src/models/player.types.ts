export interface Player {
  id: string;
  name: string;
  position: PositionTypes;
  odds: number;
  margin: number;
}

export enum PositionTypes {
  Goalkeeper = "Goalkeeper",
  Defender = "Defender",
  Midfielder = "Midfielder",
  Forward = "Forward",
}
