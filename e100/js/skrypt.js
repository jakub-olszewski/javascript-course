$(function() {
    $("button").click(function() {
    $("#pl").css("color", "red")
        .slideUp(2000)
        .slideDown(2000);
    });
});