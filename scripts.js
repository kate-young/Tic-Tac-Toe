var board;

$(document).ready(function() {
    board = new Board();
    board.init();
});

var Board = function() {
    var rows = 3;
    var columns = 3;
    var $board = $("#board");
    this.$rows = $(".row");
    this.squares = new Array();
    
    this.init = function() {
        for(var r = 0; r < rows; r++) {
            for(var c = 0; c < columns; c++) {
               var btn = $(this.$rows[r]).children()[c];
               var sqr = new Square(r, c, btn);
               this.squares.push(sqr);
            }
        }
    }
}

var Square = function(row, column, btn) { 
    this.value = null;
    this.$button = btn;  

    var set = function(val) {
        if(!value) {
            this.value = val;
        }
    }
}
