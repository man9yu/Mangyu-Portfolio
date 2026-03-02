$(document).ready(function(){
  $("#fullpage").fullpage({
      autoScrolling:true,
      scrollHorizontally:true
  });
});

$(function(){
  $(".section1_img_con1").click(function(){
    $(".section1_img_con1").fadeOut(500);
    $(".section1_img_con2").fadeIn(500);
    $(".section1_img_con3").fadeIn(2000);
    $(".section1_text_con1").fadeOut(1000);
    $(".section1_text1").delay(1000).animate({opacity:"1"},2000);
  });
});

$(window).scroll(function () {
  var height = $(document).scrollTop();
  log(height);
});
function log(str){
$('.aa').text(str);
}

$(window).scroll(function(){
	if($(window).scrollTop() > 310){
		$('.section1_title').animate({opacity:"1"},1500);
  }
});

$(window).scroll(function(){
	if($(window).scrollTop() > 1730){
		$('.section4_title').animate({opacity:"1"},1500);
  }
});

$(window).scroll(function(){
	if($(window).scrollTop() > 1410){
		$('.a1').animate({left: "29%"}, 600);
    $('.a2').delay(300).animate({left: "39%"}, 600);
    $('.a3').delay(500).animate({left: "57%"}, 700);

	}
});

$(window).scroll(function(){
	if($(window).scrollTop() > 2290){
		$('.section3_title').animate({opacity:"1"},1500);
  }
});