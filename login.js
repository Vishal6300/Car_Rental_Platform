var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("login");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// document.querySelector("form").addEventListener("submit", loginFunc);
// let loginArr = JSON.parse(localStorage.getItem("loginData")) || [];
let signinLS = JSON.parse(localStorage.getItem("email")) || [];
let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   if (signinLS.length == 0) {
//     alert("No user till now");
//     return;
//   }

//   let obj = {
//     email: document.getElementById("email").value,
//     password: document.getElementById("password").value,
//   };
//   let flag = false;
//   signinLS.forEach(function (ele) {
//     if (ele.email === obj.email && ele.password === obj.password) {
//       flag = true;
//       localStorage.setItem("email", JSON.stringify(ele));
//       alert("signIn successfull");
//       window.location.href = "homePage.html";
//     }
//   });
//   if (flag === false) {
//     alert("User doesn't Exist");
//   }
// });

// if (obj.email == "" || obj.password == "") {
//   alert("field empty");
//   return;
// }
// loginArr.push(obj);
// localStorage.setItem("loginData", JSON.stringify(loginArr));

function Login() {
  var emails = $("#email").val();
  var email = localStorage.getItem("email");
  console.log(emails);
  var password = localStorage.getItem("password");

  var password1 = $("#password").val();
  if (emails == email) {
    alert("User login successfully");
  } else {
    alert("Wrong username or password !!!");
  }
}
