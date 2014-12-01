function Game(options) {
    var _options = options,//options is an array of possible options, TBD
    //[[player2:human/computer, player3:human/computer,...],]
    _player1 = new Player(),//create player 1
    _otherPlayers = options[0];
    
    for (var i=0; i<_otherPlayers.length; i++) {
        if (_otherPlayers[i] == "human") {
            //create human player connected to other device
        } else if (_otherPlayers[i] == "computer") {
            this[_player + i] = new Computer();
        }

        
    }
}