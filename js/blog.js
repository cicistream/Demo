$(document).ready( function() {
  var $submenu = $('.submenu');
  var $mainmenu = $('.mainmenu');
  
  $submenu.hide();
  $submenu.first().delay(400).slideDown(700);
  
  $submenu.on('click','li', function() {
    $submenu.siblings().find('li').removeClass('chosen');
    $(this).addClass('chosen');
  });
  
  $mainmenu.on('click', 'li', function() {
    $(this).next('.submenu').slideToggle()
    .siblings('.submenu').slideUp();
  });
  
  $mainmenu.children('li:last-child').on('click', function() {
    $mainmenu.fadeOut().delay(500).fadeIn();
  });
});    
$(document).ready(function(){
	var $airt=$('.airt');
	var $outtext=$('.out');
	var $intext=$('.in');
	$intext.hide();
	var $all=$('.all');
	$all.click(function(){
		if($intext.is(":visible")){
			$intext.hide();
			$all.text("了解更多");
			$(this).closest('.airt').siblings('.airt').toggleClass("hid");
		}
		else{
			$intext.show();
			$all.text("收起文章");
			$(this).closest('.airt').siblings('.airt').toggleClass("hid");
		}
	})
})