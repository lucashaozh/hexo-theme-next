'use strict';

hexo.extend.filter.register('theme_inject', function (injects) {
  injects.postBodyEnd.raw('jquery', '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>', {}, { cache: true });
  injects.postBodyEnd.raw('jquerymove', '<script src="https://cdnjs.cloudflare.com/ajax/libs/mhayes-twentytwenty/1.0.0/js/jquery.event.move.min.js"></script>', {}, { cache: true });
  injects.postBodyEnd.raw('twtwscript', '<script src="https://cdnjs.cloudflare.com/ajax/libs/mhayes-twentytwenty/1.0.0/js/jquery.twentytwenty.min.js"></script>', {}, { cache: true });
  injects.postBodyEnd.raw('twtwcss', '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mhayes-twentytwenty/1.0.0/css/twentytwenty.min.css"/>', {}, { cache: true });
  injects.postBodyEnd.file('twtwscripts', 'js/twtw.swig', {}, { cache: true });
});

hexo.extend.tag.register('twtw', function(args, content){
  var beforeImg       = args[0];
  var afterImg        = args[1];
  var imgWidth        = "";
  var maxWidth        = "";
  var imgHeight       = "";

  if(args.length > 2){
    imgWidth = ' data-width="' + args[2] + '"';
    maxWidth = ' style="max-width:' + args[2] + 'px"';
  }
  if(args.length > 3){
    imgHeight = ' data-height="' + args[3] + '"';
  }

  var returnHTML  = '<div class="twentytwenty-container"' + maxWidth + '>\n'
            + '<img src="'+ beforeImg +'"' + imgWidth + imgHeight + '>\n'
            + '<img src="'+ afterImg +'"' + imgWidth + imgHeight + '>\n'
            + '</div>';
  return returnHTML;
}, {
  async: true,
  ends: false
});