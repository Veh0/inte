$(document).ready(function () {
    $.ajax({
        url: '../source/index.php',
        dataType: "json",
        success: function (data) {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                let item = '../img/' + data[i];

                switch (true) {
                    case i % 4 == 0:
                        console.log("4."+item);
                        $('.fourth-img-col').append("<div class='main-img-container'><img src='"+item+"' alt='"+data[i]+"'><div class='item-infos'><h3>Lorem Ipsum</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque, dolores dolorum eos eum harum magnam modi molestias nisi odio omnis praesentium quam sit tenetur ut velit voluptatibus. Amet, odit!</p></div></div>");
                        break;

                    case i % 3 == 0:
                        console.log("3."+item);
                        $('.third-img-col').append("<div class='main-img-container'><img src='"+item+"' alt='"+data[i]+"'><div class='item-infos'><h3>Lorem Ipsum</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque, dolores dolorum eos eum harum magnam modi molestias nisi odio omnis praesentium quam sit tenetur ut velit voluptatibus. Amet, odit!</p></div></div>");
                        break;
                    case i % 2 == 0:
                        console.log("2."+item);
                        $('.second-img-col').append("<div class='main-img-container'><img src='"+item+"' alt='"+data[i]+"'><div class='item-infos'><h3>Lorem Ipsum</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque, dolores dolorum eos eum harum magnam modi molestias nisi odio omnis praesentium quam sit tenetur ut velit voluptatibus. Amet, odit!</p></div></div>");
                        break;
                    default:
                        console.log("1."+item);
                        $('.first-img-col').append("<div class='main-img-container'><img src='"+item+"' alt='"+data[i]+"'><div class='item-infos'><h3>Lorem Ipsum</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque, dolores dolorum eos eum harum magnam modi molestias nisi odio omnis praesentium quam sit tenetur ut velit voluptatibus. Amet, odit!</p></div></div>");
                        break;
                }

            }
        }
    });

});