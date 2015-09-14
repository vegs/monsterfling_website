function ajax_addUser() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("response-register").innerHTML = xmlhttp.responseText;
    }
  }
  //var user=document.getElementById("form-usr").value;
  var email=document.getElementById("form-email").value

  xmlhttp.open("GET", "php/addUser.php?u=" + "" + "&e=" + email, true);
  //xmlhttp.open("GET", "gethint.php?q=" + str, true);
  xmlhttp.send();
}

function ajax_mailAll() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("response-mailAll").innerHTML = xmlhttp.responseText;
    }
  }
  //var user=document.getElementById("form-usr").value;
  //var email=document.getElementById("form-email").value

  xmlhttp.open("GET", "php/mailAll.php", true);
  //xmlhttp.open("GET", "gethint.php?q=" + str, true);
  xmlhttp.send();
}


function ajax_addEmail() {
  // fetch the data for the form
  var email =  document.getElementById("form-email").value;

  // setup the ajax request
  $.ajax({
      type: 'POST',
      url: 'php/addEmail.php',
      data: {'email': email},
      success: function(rsp) {
        console.log(rsp);
        if(rsp=="success"){
          $("#form-email").hide();
          $("#register-button").hide();
          $("#response-register").show();
        }else{
          alert(rsp);
        }
        
      }
  });
  // return false so the form does not actually
  // submit to the page
  return false;
}