$(function() {
  
  $.get(
    'http://data.fixer.io/api/latest',
    {'access_key': '7556a4a9e24d262b95e2bdc7193a5b65'},
    function(response) {
      // console.log(response);
      $('#currency').text(response.base + 
        ' ' + 
        response.rates.RUB.toFixed(2))
      
    }
  );
  

  // !!!!!!!!!!!!!SHOW THE POPUP WINDOW!!!!!!!!!!
  $('#changeButton')
    .click(function() {
      
      $('#popup-container').fadeIn(600);
    });
  
  $('#popup-container').click(function(event) {
    if (event.target == this) {
      $(this).fadeOut();
    }
    
  })
  // !!!!!!!!!!!!!SHOW THE POPUP WINDOW!!!!!!!!!!

});