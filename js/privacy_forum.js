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

(function($) {
    $(function() {
    
        var center_content =  $('#center_content_holder');
        // add proper length to the center column for administration 
        if(center_content.find('.admin-content').length) {
                 center_content.find('.center-column').removeClass('center-column').addClass('center-column-admin');
        }

       // add alternating row class for schedule program 
       var presentation_td = $(".presentation", "#center_content");
       if(presentation_td.length) {   
           presentation_td.filter(':nth-child(2n)').addClass('even').end().filter(':nth-child(2n+1)').addClass('odd');
       }

        // add facebook_link and twitter_link class on frontpage coresponding entities
        var social_media = $(".center_portlet_content .folder_social_icons a");
        var count = 0;
        social_media.each( function() {
            if(count == 0) {
                $(this).addClass("facebook_link");
            }
            else {
                $(this).addClass("twitter_link");
            }
        count = count + 1;
        });
   
    });

})(jQuery);

}
/*
     FILE ARCHIVED ON 05:44:19 Sep 07, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:13:34 Feb 05, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.516
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.011
  esindex: 0.01
  cdx.remote: 24.833
  LoadShardBlock: 174.183 (3)
  PetaboxLoader3.datanode: 192.31 (4)
  load_resource: 162.027
  PetaboxLoader3.resolve: 92.427
*/