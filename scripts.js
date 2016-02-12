var board;

$(document).ready(function() {
    board = new Board();
    board.init();
    $(".square").on("click", function() {
        var row = $(this).parent().prevAll().length;
        var column = $(this).prevAll().length;
        board.play(row, column);
    });
});

var Board = function() {
    var rows = 3;
    var columns = 3;
    var $board = $("#board");
    this.$rows = $(".row");
    this.squares = new Map();
    this.last_play;
    
    this.init = function() {
        for(var r = 0; r < rows; r++) {
            for(var c = 0; c < columns; c++) {
               var btn = $(this.$rows[r]).children()[c];
               var sqr = new Square(r, c, btn);
               this.squares[[r, c]] = sqr;
            }
        }
    }

    this.getSquare = function(row, column) {
        return this.squares[[row, column]];
    }

    this.play = function(row, column) {
       var square = this.getSquare(row, column); 
       if(this.last_play === "x") {
          square.o();
          this.last_play = "o";
       } else {
          square.x();
          this.last_play = "x";
       }
       if(this.check_for_win()) {
           alert(this.last_play + " Wins!");
       }
    }
    this.compareSquares = function(sqr1, sqr2, sqr3) {
        return (sqr1.value != null && sqr2.value != null && sqr3.value != null) && (sqr1.value === sqr2.value && sqr1.value === sqr3.value);
    }
    this.check_for_win = function() {
        //horizontal
        if(this.compareSquares(this.getSquare(0,0),this.getSquare(0,1),this.getSquare(0,2))) 
            return true;
        if(this.compareSquares(this.getSquare(1,0),this.getSquare(1,1),this.getSquare(1,2)))
            return true;
        if(this.compareSquares(this.getSquare(2,0),this.getSquare(2,1),this.getSquare(2,2)))
            return true;
        //diagonal
        if(this.compareSquares(this.getSquare(0,0),this.getSquare(1,1),this.getSquare(2,2)))
            return true;
        if(this.compareSquares(this.getSquare(2,0),this.getSquare(1,1),this.getSquare(0,2)))
            return true;
        //vertical 
        if(this.compareSquares(this.getSquare(0,0),this.getSquare(1,0),this.getSquare(2,0)))
            return true;
        if(this.compareSquares(this.getSquare(0,1),this.getSquare(1,1),this.getSquare(2,1)))
            return true;
        if(this.compareSquares(this.getSquare(0,2),this.getSquare(1,2),this.getSquare(2,2)))
            return true;
        return false;
    }
}

var Square = function(row, column, btn) { 
    this.row = row;
    this.column = column;
    this.value = null;
    this.$button = $(btn);  

    this.set = function(val) {
        if(!this.value) {
            this.value = val;
            this.$button.text(val);
        }
    }
    this.x = function() {
        this.set("X");
    }
    this.o = function() {
        this.set("O");
    }
}
