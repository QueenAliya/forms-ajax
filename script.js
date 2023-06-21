$(document).ready(function ($) {
  
  
  var submitButtons = document.querySelectorAll('.send-btn');

  for(var i = 0; i < submitButtons.length; i++)
  submitButtons[i].onclick = function (){  
      var sendingForm = $(this).closest('form');
      sendingForm.submit(function (e) {
        e.preventDefault();
        var formID = sendingForm.attr('class');
        var formNm = $('.' + formID);
        jQuery.ajax({
          type: "POST",
          url: '/thanks.php',
          data: formNm.serialize(),
          success: function (data) {
            formNm.html(data);
          },
          error: function (jqXHR, text, error) {
            formNm.html(error);
          }
        });
        return false;
      });
    }
  
  });
