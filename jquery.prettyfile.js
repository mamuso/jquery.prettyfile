/**
* Flexible file replacement
*--------------------------------------------------------------------------*/
$.fn.prettyfile = function(opts){

  var defaults = {
    setvalue: true,
    placeholderclass: "pf_placeholder",
    placeholderdefault: "<span class='pf_placeholder'>Browse files</span>",
    placeholdercontclass: "pf_placeholder_cont",
    wrapclass: "pf_wrap_class"
  };
  var options = $.extend(defaults, opts||{});

  // replace me baby
  return this.each(function() {
    var _self = $(this),
        _wrap = document.createElement("span"),
        _fakeinput = document.createElement("span"),
        _placeholder;

    $(_wrap).css({"position":"relative", "overflow":"hidden", "display":"block"}).attr("class", options.wrapclass);
    $(_fakeinput).append(options.html !== undefined ? options.html : options.placeholderdefault).attr("class", options.placeholdercontclass);
    
    _self.wrap(_wrap);
    _self.attr("size", 1);
    _self.css({"position":"absolute", "margin": "0", "padding": "0", "right":"0", "top": "0", "font-size":"200em", "z-index":"3", "width":"auto", "opacity": "0"}).after(_fakeinput);
    
    // selecting fakeinput and wrap
    _fakeinput = $("."+ options.placeholdercontclass, _self.parent());
    _wrap = _self.parent();
    _wrap.css({"height":_fakeinput.height() + "px", "width":_fakeinput.width() + "px"});
    
    // trigering change
    _placeholder = $("."+ options.placeholderclass, _self.parent());
    if(options.setvalue && _placeholder.length > 0) {
      _self.change(function(){
        _placeholder.html(this.value);
        // change width if is a flexible input
        _wrap.css("width", _fakeinput.width() + "px");
      });
    }
  });

};