import $ from "jquery";
// import { useEffect } from "react";

// useEffect(()=>{
$(document).ready(function () {
    if ($(window).width() <= 768) {
        $('.footer-links-wrapper').addClass("collapseClass");
    } else {
        $('.footer-links-wrapper').removeClass("collapseClass");
        $('.footer-links-wrapper ul').show();
    }
 
    $(window).on('resize', function (event) {
        if ($(window).width() <= 768) {
            $('.footer-links-wrapper').addClass("collapseClass");
            $('.footer-links-wrapper ul').hide();

        } else {
             $('.footer-links-wrapper').removeClass("collapseClass");
            $('.footer-links-wrapper h3').removeClass("addXToClose");

            $('.footer-links-wrapper ul').show();
        }
    });
    $(document).on("click", ".collapseClass h3", function () {
        $(this).next('ul').slideToggle();
        $(this).toggleClass("addXToClose");
    });

  
});

// })
