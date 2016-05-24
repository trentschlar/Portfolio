function adjustStyle(width) {
  width = parseInt(width);
  if (width < 601) {
    $("#size-stylesheet").attr("href", "stylesheets/style-narrow.css");
  } else if (width < 900) {
    $("#size-stylesheet").attr("href", "stylesheets/styles.css");
  } else {
     $("#size-stylesheet").attr("href", "stylesheets/style-wide.css"); 
  }
}

$(function() {
  adjustStyle($(this).width());
  $(window).resize(function() {
    adjustStyle($(this).width());
  });
});
