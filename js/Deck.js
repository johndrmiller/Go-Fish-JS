function Deck ( origin, style) {
    //style options for decks are "standard" and "euchre" more to come in the future
    var _deck=[],//Array: the actual deck of cards
	    _origin=origin || [0,0],//Array: two values, an "x" and a "y" coordinate, the location on the screen from which the delt cards appear
        _style = style || "standard", //String: type of deck. Standard 52 is "default"
	    _suits = ["H", "S", "D", "C"],//Array
	    _values;//Array: A list of the card values within the deck based on value of _style
    switch (_style) { //using switch statement for future implementations with more deck style options
        case "euchre":
            _values = ["9", "10", "J", "Q", "K", "A"];
       	    break;
        case "standard":
       	    _values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
       	    break;
        default:
       	    throw "I'm not familiar with that type of deck."
    }

    for (val in _suits) {//runs the creation of the deck's cards and adds them to the "_deck" array
        for (var i = 0; i<_values.length; i++) {
            var _card = new Card(_suits[val], _values[i]);//class Card: creates "Card" objects, see below (approx. line 40)
            _deck.push(_card);//add card to the deck 
        }
    }
   
    //Deck methods: dealCard, deckSize, seeDeck, shuffle
    this.dealCard = function (player) {//returns the first card in the deck
        var p = player;
        p.addToHand(_deck.splice(0, 1)[0]);
        //create animation for cards going to hands and pile
    }
    this.deckSize = function () {//returns number of cards currently in "_deck"
        return _deck.length;
    }
    this.seeDeck = function () {//outputs the names of the cards currently in the deck (for behind the scenes only)
        var cardnames =[];
        for (var i=0; i< _deck.length;i++) {
            cardnames.push(_deck[i].getName());
        }
        console.log(cardnames);
    }
    this.shuffle = function () {
        var temp = [];//Array: the temporary array for holding the shuffeled deck
        while ( _deck.length > 0 ) {
            var randomIndex = Math.floor(Math.random()*_deck.length);//picks a random value from the available options in the places array
            temp.push(_deck.splice(randomIndex, 1)[0]);//splice method returns an array so I take the value i need out of the array of 1 here
        }
        _deck = temp;//transfer the temp array back into _deck now that _deck is empty
    }
    
    //Below is the class for creating cards. I put it within the Deck class because I believe that it should only be accessible from the deck and not open to outside influence
    function Card (suit, value) {
        var _cardImage,//HTML <img>: the 'img' tag that will hold the card's png file
            _displayName,//String: The display name of the card
            _element,//HTML <div>: The div that will hold the card's image
            _imageFile,//String (png file name/path): The Image file associated with the card ** Make image css background?
            _name,//String: The short name of the card for reference behind the scenes
            _suit,//String: The suit of the card, not abbreviated
            _value;//Number: The value of the card

        switch (suit) {
            case "H":
                _suit = "Hearts";
                break;
            case "C":
                _suit = "Clubs";
                break;
            case "D":
                _suit = "Diamonds";
                break;
            case "S":
                _suit = "Spades";
                break;
            default:
                throw "That is not a valid suit."
        }
        if (value <=10) {//if "value" is 10 or less, convert it to a number and use it as the card value
            _displayName = value + " of " + _suit;
            _value = Number(value);
        } else {//else us a switch statement to set the name and value of the face cards
            switch (value) {
                case "J":
                    _displayName = "Jack of " + _suit;
                    _value = 11;
                    break;
                case "Q":
                    _displayName = "Queen of " + _suit;
                    _value = 12;
                    break;
                case "K":
                    _displayName = "King of " + _suit;
                    _value = 13;
                    break;
                case "A":
                    _displayName = "Ace of " + _suit;
                    _value = 1;
                    break;
                default:
                    throw "That is not a valid value."
            }
        }    
        _name = value + suit;
        _imageFile = _name + ".png";
        //create a corresponding element for each card created
        _element = document.createElement('div');
        _element.setAttribute("id", _name);
        _cardImage=document.createElement("img");
        _cardImage.setAttribute("src", "images/cardpng/"+_imageFile);
        _element.appendChild(_cardImage);

        //these are the methods to get all of the values
        this.getSuit = function () {
            return _suit;
        }
        this.getValue = function () {
            return _value;
        }
        this.getName = function () {
            return _displayName;
        }
        this.getImage = function () {
            return _imageFile;
        }
        this.getSimple = function () {
            return _name;
        }
        this.getElement = function () {
            return _element;
        }
    }  
    //End of Card Class//
}
//End of Deck Class//