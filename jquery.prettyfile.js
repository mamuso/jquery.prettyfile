/**
* Flexible file replacement
*--------------------------------------------------------------------------*/
$.fn.prettyfile = function(options){

  var defaults = {
    setvalue: true,
    placeholderclass: "pf_placeholder",
    placeholderdefault: "<span class='pf_placeholder'>Browse files</span>"
  };
  var options = $.extend(defaults, options||{});

  // replace me baby
  return this.each(function() {
    var $self = $(this),
        $wrap = document.createElement("span"),
        $fakeinput = options.html !== undefined ? options.html : options.placeholderdefault;
    $($wrap).css({"position":"relative", "overflow":"hidden", "display":"block", "overflow":"hidden"});
    
    $self.wrap($wrap);
    $self.attr("size", 1);
    $self.css({"position":"absolute", "right":"0", "font-size":"200em", "z-index":"2", "opacity":0}).after($fakeinput);
  });

}