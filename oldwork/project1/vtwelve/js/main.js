$(function(){
	let scrollHeader = 300;
  
    $(window).scroll(function(){
    	let scroll = getCurrentScroll();
        if(scroll >= scrollHeader){
          $(".header-menu").css("background", "rgba(255, 255, 255, 0.7)");
        	$('.header-inner').css("line-height", "50px");
        	$('.header-inner').css("height", "50px");
        	$('.header-inner').css("padding-top", "0px");
        } else {
        	$('.header-inner').css("line-height", "80px");
        	$('.header-inner').css("height", "80px");
        	$('.header-inner').css("padding-top", "20px");
          $(".header-menu").css("background","#fff");
        }
    });
  
    function getCurrentScroll(){
    	return window.pageYOffset || document.documentElement.scrollTop;
    }
});

    function change1() {
      document.querySelector("iframe").src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3164.5263349921875!2d127.02545801557189!3d37.519088334601186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sko!2skr!4v1650427768089!5m2!1sko!2skr";
    }

    function change2() {
      document.querySelector("iframe").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.6995082907256!2d127.03665911557121!3d37.49141683618384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca153219f7df7%3A0x8162b0584bd06e35!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrj4Tqs6HroZwgMTc2!5e0!3m2!1sko!2skr!4v1650427838785!5m2!1sko!2skr";
    }

    function change3() {
      document.querySelector("iframe").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4482.821791258697!2d127.10873382625007!3d37.39376522330503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b585b10f7d4eb%3A0x23cd030dd3635aea!2z7ZiE64yA67Cx7ZmU7KCQIO2MkOq1kOygkA!5e0!3m2!1sko!2skr!4v1650428004189!5m2!1sko!2skr";
    }