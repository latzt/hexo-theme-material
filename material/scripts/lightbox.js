/**
 * Lightbox tag for images
 *
 * Syntax:
 *   {% lightbox /path/to/image [title] %}
 */
hexo.extend.tag.register('lightbox', function(args){

  var image = args.shift();
  var title = args.join(' ');
  
  return '<img width="662" class="materialboxed" src="' + image + '" alt="' + title + '" data-caption="' + title + '">';
});
