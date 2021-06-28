// function expression to select elements
const selectElement = ($) => document.querySelector($);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
  selectElement(".nav-list").classList.toggle("active");
  // X
  selectElement(".burger-menu-icon").classList.toggle("toggle");
  //animation
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkAnimate 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
      console.log(index / 7 + 0.5);
    }
  });
});

//close
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkAnimate 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
        console.log(index / 7 + 0.5);
      }
    });
  });
});

/*
function validation(){
   var name = document.getElementById("name").value;
   var subject = document.getElementById("subject").value;
   var phone = document.getElementById("phone").value;
   var email = document.getElementById("email").value;
   var message = document.getElementById("message").value;
   var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(name.length < 5){
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }

    
    if(subject.length < 10){
        text = "Please Enter correct Subject";
        error_message.innerHTML = text;
        return false;
    }

    
    if(isNaN(phone) || phone.length !=11){
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <= 140){
    text = "Please Enter moore than 140 characters";
    error_message.innerHTML = text;
    return false;
    }
    alert("Form Submitted Successfully!");

    return true;
   
}
*/
