var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("signup");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal
btn1.onclick = function () {
  modal1.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};
let signupArr = JSON.parse(localStorage.getItem("SignupData")) || [];
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let obj = {
    email: document.getElementById("email1").value,
    password: document.getElementById("password1").value,
  };
  if (obj.email == "" || obj.password == "") {
    alert("field empty");
    return;
  }
  signupArr.push(obj);
  localStorage.setItem("SignupData", JSON.stringify(signupArr));
});
