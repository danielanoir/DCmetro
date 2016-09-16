$(document).ready(function(){

  $(function() {
      var params = {
          client_id: 'CLIENT_ID',
          client_secret: 'CLIENT_SECRET',
          server_token: 'SERVER_TOKEN',
          redirect_uri: 'REDIRECT URL',
          name: 'APP_NAME',
          language: 'en_US', // optional, defaults to en_US
          sandbox: true // optional, defaults to false
        };

      $.ajax({
           url: "'https://api.uber.com/v1/products?latitude=37.7759792&longitude=-122.41823'?" + $.param(params),
           type: "GET",
         })
      .done(function(data) {
          alert("success");
          console.log(data);
      })
      .fail(function() {
          alert("error");
      });
  });
});
