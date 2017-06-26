//opens overlay
$("img.hamburger").click(function(){
	$("div.overlay").slideDown(); 
});
// closes overlay
$("img.close").click(function(){
	$("div.overlay").slideUp(); 
});