$(document).ready(function () {

    $('.blurred').hide();
    $('.header-menu a').click(function () {
       // e.preventDefault();
        let that = $(".menu-slider");
        let img = $(".header-menu img");
        if (that.css("left") != "-500px") {
            that.css("left", -500);
            img.removeClass("rotate")
            img.animate({opacity:1}, 350, function () {
                img.attr("src", "img/icons/menu.png")
            })
            $('.blurred').fadeOut("slow")
        } else {
            that.css("left", 0);
            img.addClass("rotate");
            img.animate({opacity:1}, 150, function () {
                img.attr("src", "img/icons/cross.png")
            })
            $('.blurred').fadeIn("slow")
        }


    });

});