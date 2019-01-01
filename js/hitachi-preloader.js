jQuery(window).load(function() {
    if (!sessionStorage.isVisited) {
        sessionStorage.isVisited = 'true'
        jQuery(".preloader-container").delay(5000).fadeOut(500);
        jQuery(".preloader").delay(5000).fadeOut(500);
        jQuery(".preloader-title").delay(5000).fadeOut(500);
        jQuery(".preloader-subtitle").delay(5000).fadeOut(500);
        jQuery(".sub2").delay(5000).fadeOut(500);

        $("#home").addClass("hide-overflow");
        $("footer").addClass("pos-absolute");
    } 
    else {
        jQuery(".preloader-wrapper").remove()
        $("#home").removeClass("hide-overflow");
        $("footer").removeClass("pos-absolute");
        $("footer").addClass("pos-relative");
    }
});
$(document).ready(function() {
    $("#home").addClass("hide-overflow");
    $("footer").addClass("pos-absolute");
    
    setTimeout(function() {
        $("#home").removeClass("hide-overflow");
        $("footer").removeClass("pos-absolute");
        $("footer").addClass("pos-relative");
        
    }, 6000);
});