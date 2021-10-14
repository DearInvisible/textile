$(document).ready(function () {
  $("#show_hide_password a").on("click", function (event) {
    event.preventDefault();
    if ($("#show_hide_password input").attr("type") == "text") {
      $("#show_hide_password input").attr("type", "password");
      $("#show_hide_password a i").addClass("fa-eye-slash");
      $("#show_hide_password a i").removeClass("fa-eye");
    } else if ($("#show_hide_password input").attr("type") == "password") {
      $("#show_hide_password input").attr("type", "text");
      $("#show_hide_password a i").removeClass("fa-eye-slash");
      $("#show_hide_password a i").addClass("fa-eye");
    }
  });
});


