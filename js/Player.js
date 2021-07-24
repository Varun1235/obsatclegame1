class Player{
    constructor(){
        this.name = null
        this.index = 0
        this.x = 0
        this.y = 0

    }
    //This function reads playerCount value from the database and changes it from Json object to normal object.
    getPlayerCount() {
        var playerCountRef = database.ref("playerCount"); 
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        })
    }
    //This function is used to update the playerCount value in the database in Json object.
    updatePlayerCount(count) {
        database.ref("/").update({
            playerCount : count

        })
    }

    readPos() {
        var playerIndex = "players/player" + this.index;
        var nodeRef = database.ref(playerIndex);
        nodeRef.on("value",(data)=>{
           
            var pos = data.val();
            
            this.x = pos.x;
            this.y = pos.y;
        });
    }
    //This function is used to update the players' information.
    updatePlayer() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name : this.name,
            x : this.x,
            y: this.y 
        })
    }
    //To read all players' information from the database once all four players are registered.
    static getPlayersInfo() {
        var playersRef = database.ref("players");
        playersRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}