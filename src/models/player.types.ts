export interface Player {
    Id: String,
    Name: String,
    Position: PositionTypes
    odds: Number,
    margin: Number
    
}

export enum PositionTypes {
    Goalkeeper = "Goalkeeper",
    Defender = "Defender",
    Midfielder = "Midfielder",
    Forward = "Forward"
}