$(document).ready(function () {


    $('.main-body img').mouseover(function () {
        $(this).css("filter", "grayscale(0%)");
        $(this).css("transform", "scale(1.1)")
        $(this).css("z-index", 2);
    }).mouseout(function () {
        $(this).css("filter", "grayscale(40%");
        $(this).css("transform", "scale(1)")
        $(this).css("z-index", 1)
    })
})

