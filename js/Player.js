function Player(){
        var _hand = [],//Array: the player's hand of cards
        _matches = [];//Array: the player's match pile
        
        this.initialAnimation = function() {
            //animating the card graphics into the hand from deal
            //must be different for each player
            //maybe "deal" function from deck handles the animation to the hand
                //and this function handles animation once it gets to the hand?
        }

        this.addToHand = function (card) {
			_hand.push(card);	
        }
        this.removeFromHand = function (card) {
            var index = _hand.indexOf(card);
            return _hand.splice(index, 1);
        }
        this.getHand = function () {
            return _hand;
        }
        this.viewMatches = function () {
            //animate container onto screen and populate it with the player's match pile
        }
        this.expandHand = function() {
            //swiping up on hand brings the cards up and expands them slightly for better view
            //then add listeners to grab cards and drag around
        }
        this.modifyHand = function () {

        }
        this.checkForMatch = function (card) {
            var l = _hand.length,
            _card = card;
            for (var i=0; i < l; i++){
                if (_hand[i].getValue() == card.getValue()) {
                    return true;
                }
            }
            return false;
        }
        //player needs to be able to draw cards from pile--the game will handle this, pick a card to ask for--the game will handle this, reply to asked for card--the game will handle this, check matches pile, rearrange hand, accept card from deal into hand, 

}

function Computer(difficulty) {
    var _memory = [],//the computer player's memory
    //length of the computer's memory based on difficulty level
    _memoryLength = difficulty || 7;//"easy"=5,"normal"=7, or "hard"=10
    
    //adding and subtracting from memory
    this.addToMemory = function(card) {
        var c = card;
        _memory.unshift(c);
        if (_memory.length>_memoryLength) {
            var over = _memory.length - _memoryLength;
            _memory.splice(5,over);
        }
    }
    this.removeFromMemory = function(card){
        var c = card,
        indexOfc = _memory.indexOf(c);
        if (indexOfc != -1) {
            _memory.splice(indexOfc, 1);
            removeFromMemory(c);
        }
    }

    this.getMemory = function() {
        return _memory
    }
    Player.apply(this, arguments);//adds all player capabilities to computer player
}   

Computer.prototype = Player.prototype;
Computer.prototype.constructor = Computer;

//test comment
