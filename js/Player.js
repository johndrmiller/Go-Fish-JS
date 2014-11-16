function Player(kind){
    var kind,//String: "player" or "computer"
        _hand = [],//Array: the player's hand of cards
        _matches = [];//Array: the player's match pile
        this.initialAnimation = function(player) {
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
        this.checkMatches = function () {
            //animate container onto screen and populate it with the player's match pile
        }
        this.expandHand = function() {
            //swiping up on hand brings the cards up and expands them slightly for better view
            //then add listeners to grab cards and drag around
        }
        this.modifyHand = function () {

        }
        //player needs to be able to draw cards from pile--the game will handle this, pick a card to ask for--the game will handle this, reply to asked for card--the game will handle this, check matches pile, rearrange hand, accept card from deal into hand, 

}