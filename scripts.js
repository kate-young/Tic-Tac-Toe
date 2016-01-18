$(document).ready(function() {
    var x = true;
    var reset = function() {
        $(".box").each(function() {
            $(this).text("");
        });
    }

    $(".box").on("click", function() {
        if($(this).text().length > 0) {
            return;
        }
        if(x) {
            $(this).text("X");
        } else {
            $(this).text("O");
        }
        x = !x;
    });

    $("#reset").on("click", reset);
});
