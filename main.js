$(".sheader").sticky({
  getWidthFrom: "body",
  responsiveWidth: true
});
$(".stickyh3").sticky({
  topSpacing:93,
  getWidthFrom: "",
  responsiveWidth:true,
});

$(".stickyh3").on("sticky-start", function(){
  $(".description").html("Email Us Here.");
});

$(".stickyh3").on("sticky-end", function(){
  $(".description").html("Contact Us - <i>sticky element</i>");
});
