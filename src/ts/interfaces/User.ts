// package structs

// type User struct {
// 	Id             string `bson:"_id"`
// 	Name           string `bson:"name,omitempty"`
// 	GamesOwned     int    `bson:"games_owned"`
// 	MostPlayedGame string `bson:"most_played_game"`
// }

interface User {
    id: string;
    name: string;
    games_owned: number;
    most_played_game: string;
}

export default User;