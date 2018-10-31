$(function () {
    $.scrollify({
        section: ".panel",
        // sectionName: false,
        setHeights: false,
        scrollSpeed: 1100,
        overflowScroll: true,
    });

    $(window).scroll(function () {
        const scrollVal = $(this).scrollTop();
        if (scrollVal > 300){
            $("#back-to-top").addClass('show-top-arrow');
        } else {
            $("#back-to-top").removeClass('show-top-arrow');
        }
    });

    $.scrollify.disable();

    $("#warm-up-link").click(function(){
        warmupScrollify("#2");
    });

    $("#timetable-link").click(function(){
        warmupScrollify("#3");
    });

    $("#ticket-link").click(function(){
        warmupScrollify("#4");
    });

    $("#spthank-link").click(function(){
        warmupScrollify("#5");
    });

    $("#warm-arrow-go").click(function(){
        warmupScrollify("#3");
    });

    $("#back-to-top").click(function(){
        warmupScrollify("#1");
    });

    function warmupScrollify(target) {
        $.scrollify.enable();
        $.scrollify.move(target);
        $.scrollify.disable();
    }
});