// $("div").css("background-color", "purple");
// $(".highlight").css("width", "200px");
// $("#third").css("border", "solid 2px orange");
// $("div").first().css("color", "pink");

// console.log($("body").text());

$("img").css("width", "200px");
//changing the image from chocolate image from the HTML one, to crisps image in .js
$("img:first-of-type").attr("src", "https://cdn.images.express.co.uk/img/dynamic/109/590x/974020_1.jpg?r=1533722212472");

//changing the text input box to a checkbox using 'attr'
// $("input").attr("type", "checkbox");

//using 'val'
$("input").val("melissa");

//Know which 'option' the user has selected?
$("selected").val();

//adding classes
$("h1").addClass("correct");
$("h1").removeClass("correct");
//$("li").addClass("wrong");
$("li").addClass("correct");

//toggle class
$("li").toggleClass("correct");
$("li").first().toggleClass("done");