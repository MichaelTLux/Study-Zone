String.prototype.isEmpty = function() {// Returns if a string has only whitespace
            return (this.length === 0 || !this.trim());
        };

        function Card(front){
            this.frontVal = front;

            this.display = function(side){
                    return this.frontVal;
            };
        }

        var cardsHandle = {
            cards: [],
            cardInd: 0,
            cardButton: document.getElementById("cardButton"),
            cardText: document.getElementById("cardText"),
            cardTPosition: document.getElementById("positionIndex"),
            cardSide: 0,

            cardAdd: function(back, front){
                this.cards.push( new Card(back, front) );
            },
            cardUpdate: function(){
                var curCard = this.cards[ this.cardInd ];
                this.cardText.innerHTML = curCard.display( this.cardSide );
                this.cardTPosition.innerHTML = (this.cardInd+1)+"/"+this.cards.length;
            },
            cardFlip: function(){
                this.cardSide = (this.cardSide + 1) % 2;
            },
            cardMove: function(moveBy){
                this.cardInd += moveBy;
                if( this. cardInd < 0 ){
                    this.cardInd += this.cards.length;
                }
                this.cardInd = this.cardInd % this.cards.length;

                this.cardSide = 0;// Set back to front
                this.cardUpdate();
            },
            cardTap: function(){
                this.cardFlip();
                this.cardUpdate();// Display card
            }
        };

        cardsHandle.cardAdd("Hello this is the first flashcard","Here is the back");
        cardsHandle.cardUpdate();

        var userEnter = function(){
            var nFront = document.getElementById("newFrontNote");

            if( nFront.value.isEmpty())
                return;

            cardsHandle.cardAdd(nFront.value);
            nFront.value="";
            cardsHandle.cardUpdate();
        }

        cardsHandle.cardButton.addEventListener('click', function(){ cardsHandle.cardTap();} );