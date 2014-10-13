//need to add html parts to Card class and figure out how to reference them via the html
//add "id" and "class" as properties of card class, or recreate card as <div> with properties built in?
function Deck (style) {
    //style options for decks are "standard" and "euchre" more to come in the future
    var _deck=[],//The final build of te deck
	    _style = style || "standard", //type of deck. Standard 52 is "default"
	    _suits = ["H", "S", "D", "C"],//Standard card suits "H"= Hearts, "S"= Spades, "D"= Diamonds, "C"= Clubs
	    _values,//A list of the card values within the deck based on value of _style
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

    for (val in _suits) {
        for (var i = 0; i<_values.length; i++) {
            var _card = new Card(_suits[val], _values[i]);//create cards
            _deck.push(_card);//add them to the deck
        }
    }
   
    //Deck methods: shuffle,
    this.shuffle = function () {
        var places = [],//array that will hold the indexes to be pulled from the original deck
            temp = [];//the temporary array for holding the shuffeled deck
        for (var i = 0; i < _deck.length; i++) {
            places.push(i);
        }
        while (_deck.length > 0 ) {
            var ranIndex = Math.floor(Math.random()*places.length);
            temp.push(_deck.splice(ranIndex, 1)[0]);//splice method returns an array so I take the value i need out of the array of 1 here instead of later
            places.splice(ranIndex,1);
        }
        _deck = temp;//transfer the temp array back into _deck now that it is empty
        //_deck.forEach(function (element, index, array) {console.log(element.getName());});
    }

    //Below is the class for creating cards. I put it within the Deck class because I believe that it should only be accessible from the deck and not open to outside influence
    function Card (suit, value) {
        var _cardImage,//the 'img' tag that will hold the card's png file
            _displayName,//The display name of the card
            _element,//The div that will hold the card's image
            _imageFile,//The Image file associated with the card ** Make image css background?
            _name,//The short name of the card for reference behind the scenes
            _suit,//The suit of the card, not abbreviated
            _value;//The value of the card (as Number)
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
        _element.setAttribute("id")=_name;
        _cardImage=document.createElement("img");
        _cardImage.setAttribute("src")= "images/cardpng/"+_imageFile;
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
    }   
}