jQuery(document).ready(function() {
  var sections = getSections();
  jQuery('body').append('Sections: ' + sections.length);
  for (var i = 0; i < sections.length; i++) {
    jQuery('body').append(sections[i].name);
  }
});
