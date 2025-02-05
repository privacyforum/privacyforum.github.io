var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function(){
	$('.js-enabled').remove();
	
	$('.menu-bar').each(function() {
		var top_items = $('li.menu-bar-level1', this);
		top_items.mouseenter(function(evt) {
			$(this).addClass('menu-bar-hover');
		});
		top_items.mouseleave(function(evt) {
			$(this).removeClass('menu-bar-hover');
		});
	});
});

}
/*
     FILE ARCHIVED ON 05:50:00 Sep 07, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:13:34 Feb 05, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.494
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.009
  cdx.remote: 10.834
  LoadShardBlock: 123.741 (3)
  PetaboxLoader3.datanode: 145.038 (4)
  load_resource: 214.57
  PetaboxLoader3.resolve: 139.859
*/