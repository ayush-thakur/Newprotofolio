<script>
    function myfun(){
        //firstname
                var name=document.forms["contactform"]["firstname"].value;
                if(name==""){
                    alert("First Name is required");
                    document.contactform.firstname.focus();
                    return false;
                }
                var regs=/^[A-Za-z]+$/;
                 if (regs.test(document.contactform.firstname.value)==false) {
                    alert("Only letters and white space allowed");
                    document.contactform.firstname.focus();
                    return false;
                   }
        //lastname     
               var lname = document.forms["contactform"]["lastname"].value;
                   if(lname==""){
                       alert("Last Name is required");
                       document.contactform.lastname.focus();
                       return false;
                   }
                 if (regs.test(document.contactform.lastname.value)==false) {
                    alert("Only letters and white space allowed");
                    document.contactform.lastname.focus();
                    return false;
                   }
        //phone
                  var lname = document.forms["contactform"]["phone_no"].value;
                  if(lname==""){
                          alert("phone number is required");
                      document.contactform.phone_no.focus();
                      return false;
                  }
                  var regsx=/^[0-9]+$/;
                 if (regsx.test(document.contactform.phone_no.value)==false) {
                    alert("Only numbers allowed");
                    document.contactform.phone_no.focus();
                    return false;
                   }
          //location 
               
                  var lname = document.forms["contactform"]["location"].value;
                  if(lname==""){
                          alert("location is required");
                      document.contactform.location.focus();
                      return false;
                  }
        //email
                  var lname = document.forms["contactform"]["email"].value;
                  if(lname==""){
                          alert("Email is required");
                      document.contactform.email.focus();
                      return false;
                  }
                  var regxx=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/;
                  if (regxx.test(document.contactform.email.value)==false) {
                    alert("Invalid email format");
                    document.contactform.email.focus();
                    return false;
                   }
        //message
                  var lname = document.forms["contactform"]["enquiry"].value;
                  if(lname==""){
                          alert("Message is required");
                      document.contactform.enquiry.focus();
                      return false;
                  }
            
       
    }
    
    </script>