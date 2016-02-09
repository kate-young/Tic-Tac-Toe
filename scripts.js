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
        }
        this.$button.text(val);
    }
    this.x = function() {
        this.set("X");
    }
    this.o = function() {
        this.set("O");
    }
    this.surrounding = function() { 
    }
}
