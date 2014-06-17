$(document).on('ready page:load', function() {
  $('#cookie_policy form').on('ajax:success', function() {
    $('#cookie_policy').hide();
  });
});
