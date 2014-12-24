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