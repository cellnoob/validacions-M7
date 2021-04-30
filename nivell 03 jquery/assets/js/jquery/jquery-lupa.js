
$(function() {
    event.stopImmediatePropagation()
  $("#search-field").on("input.highlight", function() {
    // Determine specified search term
    var searchTerm = $(this).val();
    // Highlight search term inside a specific context
    $("#body-web").unmark().mark(searchTerm);
  }).trigger("input.highlight").focus();
});