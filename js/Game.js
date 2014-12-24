function Game(options) {
    //GAME PHASES
        // Create deck, draw pile, players
        // Deal cards to players, put rest of deck in draw pile
        // Remove any matches from players hands
        // Player 1 turn:
            //P1 asks for match
                //Selects card to ask for
                //Confirm selection?
            //P2 responds
                //hand spreads and "go fish" button appears
                //selects card to be sent or
                //taps "go fish button"
            //resolution:
                //matches resolve automatically or
                //P1 is prompted to select a card from the draw pile
                //drawn card is either matched or put into hand
            //turn ends
            //Check to see if either player's hand is empty
                //if so count matches 
                //player with most matches wins game
        //Player 2 turn
        //
    var _options = options,//options is an array of possible options, TBD
    //[[player2:human/computer, player3:human/computer,...],difficulty]
    _otherPlayers = options[0],
    _difficulty = options[1],
    _deck = new Deck(),
    _drawPile = new DrawPile(), 
    _players = createPlayers();
    //computer players need to have separate memory for each player in the game, or else larger combined memory that keeps track of which player makes which guess
    
    for (var i=0; i<_otherPlayers.length; i++) {
        if (_otherPlayers[i] == "human") {
            //create human player connected to other device
        } else if (_otherPlayers[i] == "computer") {
            var np = "_player"+(i+1);
            this[np] = new Computer(_difficulty, _otherPlayers.length);
            _allPlayers.push(this[np]);
        }
    }
    //create all players at once in a function?
    _deck.shuffle();

    //_drawPile.addCard(_deck.getDeck());
    //_drawPile.seeDrawPile();
}