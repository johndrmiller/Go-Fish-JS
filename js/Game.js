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
    _player1 = new Player(),//create player 1
    _otherPlayers = options[0] || ["computer"],
    _allPlayers = [_player1].concat(_otherPlayers),
    _difficulty = options[1],
    _drawPile,
    _deck;
    
    function DrawPile() {
        var _cards = [],//array of cards in the pile
        _element;//dom element that represents the card pile
        _element = document.createElement('div');
        _element.setAttribute("id", "drawPile");

        this.addCard = function (cardsIn) {//cards in is either an array of cards, or a single card object
            var _cardsIn = cardsIn;
            if (Array.isArray(_cardsIn)){
                _cardsIn.forEach(insertCard);//if array, run "insertCard" on each item in array
            } else {
                insertCard(_cardsIn);
            }
            
            function insertCard(card) {
                _cards.push(card);
            }
        };
        this.removeCard = function (cardsOut){
            var _cardsOut = cardsOut;
            if (Array.isArray(_cardsOut)){
                _cardsOut.forEach(removeCard);//if array, run "insertCard" on each item in array
            } else {
                removeCard(_cardsOut);
            }
            
            function removeCard(card) {
                var index = _cards.indexOf(card);
                _cards.splice(index, 1);
                return _cards
            }
        };
        this.getDrawPile = function(){return _cards};
        this.seeDrawPile = function(){//is this necessary in the final game?
            var cardnames =[];
            for (var i=0; i< _cards.length;i++) {
                cardnames.push(_cards[i].getName());
            }
            console.log(cardnames);
        }
        
    }

    _deck = new Deck();
    _drawPile = new DrawPile();
    _deck.shuffle();

    for (var i=0; i<_otherPlayers.length; i++) {
        if (_otherPlayers[i] == "human") {
            //create human player connected to other device
        } else if (_otherPlayers[i] == "computer") {
            var np = "_player"+(i+1);
            this[np] = new Computer(_difficulty, _otherPlayers.length);
            _allPlayers.push(this[np]);
        }
    }
    //_drawPile.addCard(_deck.getDeck());
    //_drawPile.seeDrawPile();
}