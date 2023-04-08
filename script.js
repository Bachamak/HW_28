$('#close-view').on('mouseover', function() {
  $(".open-view").slideDown(300);
});

$(document).on('mouseover', function(e) {
  if (!$('#close-view').is(e.target) && !$('.open-view').is(e.target)) {
    $(".open-view").slideUp(300); 
  }
});