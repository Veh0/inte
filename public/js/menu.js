$(document).ready(function () {

    $('.blurred').hide();
    let that = $(".menu-slider");
    let img = $(".header-menu img");
    let left = that.css("left");
    $('.header-menu a').click(function () {
       // e.preventDefault();


        console.log(left);
        if (that.css("left") != left) {
            that.css("left", left);
            img.removeClass("rotate")
            img.animate({opacity:1}, 350, function () {
                img.attr("src", "img/icons/menu.png")
            });
            setTimeout(function () {
                $('header').css("background-color", "#e7e7e7")
            }, 550);
            $('.blurred').fadeOut("slow")
        } else {
            that.css("left", 0);
            img.addClass("rotate");
            img.animate({opacity:1}, 150, function () {
                img.attr("src", "img/icons/cross.png")
            });
            $('header').css("background-color", "transparent")
            $('.blurred').fadeIn("slow")
        }


    });

});