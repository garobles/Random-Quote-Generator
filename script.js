$(document).ready(function(){
  $.ajax({url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", success: function(a) {
  $("#random").html(a[0].content +"<p style=\"text-align:right\">&mdash;" + a[0].title+"</p>");
    },
 cache: false
 });
  $("#quote").click(function(){
    var h=(100+Math.round(Math.random()*160));
    var s=(30+Math.round(Math.random()*40));
    var l=(35+Math.round(Math.random()*40));
    var l2=l*1.5;
    var color="hsl("+h+","+s+"%,"+l+"%)";
    var color2="hsl("+h+","+s+"%,"+l2+"%)";
    $(".head").css("background-color", color);
    $("body").css("background-color", color2);
    $("button").css("background-color", color);
    $.ajax({url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", success: function(a) {
      $("#random").html(a[0].content +"<p style=\"text-align:right\">&mdash;" + a[0].title+"</p>");
    },
 cache: false
 });
  });
  $("#tweet").click(function(){
    var quote;
    quote=$("#random").text(); $(this).attr("href","https://twitter.com/intent/tweet?text="+quote)
  });
});