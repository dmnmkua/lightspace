$('#ajaxform').submit(function(e){
    e.preventDefault();
    $.ajax({
      url: "app/send.php",
      type: "POST",
      data: $('#ajaxform').serialize(),
      success: function(response) {
        $('.callback__btn').html('Отправлено');
        $('.callback__btn').attr('disabled', 'disabled');
        //обработка успешной отправки
      },
      error: function(response) {
        $('.callback__btn').html('Ошибка');
        //обработка ошибок при отправке
     }
    });
});
