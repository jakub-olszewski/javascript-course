$(function() {
    $("h2").append('<em></em>')
    $(".galeria a").click(function () {
        var do_zdj = $(this).attr("href");
        var do_tyt = $(this).attr("title");
        $("#zdjecie_d").attr({ src: do_zdj, alt: do_tyt });
        $("h2 em").html(" (" + do_tyt + ") "); return false;
    });
});