$(function() {
    $( ".nav" ).sortable();
    $(".nav").disableSelection();
  });

  $(function () {
    $('.text').fadeIn(1000).removeClass('.text');
});


 
$(".cta").click(function () {

    $(this).toggleClass("active").next().slideToggle("fast");
    if ($.trim($(this).text()) === 'Reduce this button') {
        $(this).text('Button reduced').css("color", "#0f5c94", "width", "100%", "font-weight", "bolder");
    }
    return false; 
});
