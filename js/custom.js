$(function () {
    // bar filler js
    // $("#banner .banner_content h1").waypoint(function (direction) {
    //     if (direction == "down") {

    //     }
    // });

    // $(document).ready(function () {
    //     var barfillRun = false;

    //     $("#about").waypoint(
    //         function () {
    //             if (!barfillRun) {
    //                 console.log("Triggered animation");
    //                 $("#bar1").barfiller({ duration: 1500 });
    //                 $("#bar2").barfiller({ duration: 1500 });
    //                 $("#bar3").barfiller({ duration: 1500 });
    //                 barfillRun = true;
    //             }
    //         },
    //         {
    //             offset: "75%", // Adjust this if needed
    //         }
    //     );
    // });

    lightbox.option({
        resizeDuration: 200,
        wrapAround: true,
    });

    //back to top js
    var $backToTop = $(".back-to-top");
    $backToTop.hide();

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $backToTop.fadeIn();
        } else {
            $backToTop.fadeOut();
        }
    });

    $backToTop.on("click", function (e) {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
});
