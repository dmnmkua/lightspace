$(function() {
      $('#ajaxform').submit( e => {
        $.ajax({
          type: this.attr('method'),
          url: this.attr('action'),
          data: this.serialize()
        }).done(function() {
          console.log('success');
        }).fail(function() {
          console.log('fail');
        });
        e.preventDefault();
      });
    });
