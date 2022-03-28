 
 function myFunctionimg(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgbig");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
    }


    var click_s=0;
    $('#login').click(function(e){
        if(click_s % 2 == 0){
            $("#userdata").append('<div class="login " id="login1">' +
            
            '<form class="formdata" action="">' +
            '<button id="close" class="close">&times;</button>' +
               '<img src="img/LMLogo.png" alt="">' +
               '<h2>Sign in</h2>' +
               '<div class="userinput">' +
                   '<input type="email" placeholder="Email*" name="email"><br>' +
                   '<input type="password" placeholder="Password*" name="password"><br>' +
                   '<input type="checkbox" name="rememberme"> <label for="rememberme">Remember me</label> <br>'+
                   '<button>Sign in</button>' +
                  
                  " <p><a href=''>Forgot password </a></p> <p>Don't have an account? Sign up</p> " +
                   '<div class="download">' +
                      ' <button><ul>' +
                           '<li class="formicon"><i class="fab fa-google-play fa-2x"></i></li>' +
                           '<li> Got it from Playstore</li>' +
                      ' </ul>' +
                          ' </button>' +
                    '   <button><ul>' +
                           '<li class="formicon"><i class="fab fa-apple fa-2x"></i></li>' +
                           '<li> Got it from Appstore</li>' +
                      ' </ul>' +
                           '</button>' +
                  ' </div>' +
               '</div>' +
               '<footer class="footerdata">Copurighter © ThinkTech 2021</footer>' +
            '</form>' +
           '</div>')
           document.body.style.backgroundColor = "#707070";
           $(".signup").remove();
          e.preventDefault();
        }
        else{
            $('.login').remove();
          e.preventDefault();
        }
        click_s++;
    });

    $(document).on('click', '#close', function(e){ 
      $('.login').remove();
      $(".signup").remove();
      document.body.style.backgroundColor = '';
      e.preventDefault();
  });
      
      $('#signup').click(function(e){
          if(click_s % 2 == 0){
            $("#userdata").append(' <div class="signup ">' +
            '<form class="formdata" action="">' +
            '<button id="close" class="close">&times;</button>' +
              '<img src="img/LMLogo.png" alt="">' +
              '<h2>Sign up</h2>' +
              '<div class="userinput">' +
                  '<input type="text" placeholder="First Name*" name="firstname"><br>' +
                  '<input type="text" placeholder="Last Name*" name="lastname"><br>' +
                  '<input type="email" placeholder="Email*" name="email"><br>'+
                  '<input type="text" placeholder="Company*" name="company"><br>'+
                  '<button>Sign up</button>'+
                  "<p>Don't have an account? Sign in</p>" +
                  '<div class="download">'+
                    '  <button><ul>' +
                         ' <li class="formicon"><i class="fab fa-google-play fa-2x"></i></li>' +
                        '  <li> Got it from Playstore</li>' +
                     ' </ul>' +
                          '</button>' +
                      '<button><ul>' +
                          '<li class="formicon"><i class="fab fa-apple fa-2x"></i></li>'+
                          '<li> Got it from Appstore</li>'+
                     ' </ul>'+
                          '</button>'+
                 ' </div>'+
             ' </div>'+
             '<footer>Copurighter © ThinkTech 2021</footer>' +
           '</form>'+
          '</div>'); 
          document.body.style.backgroundColor = '#707070';
          $('.login').remove();
          e.preventDefault();
          }
          else{
              $(".signup").remove();
              e.preventDefault();
          }
          click_s++;
      });

      function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
 