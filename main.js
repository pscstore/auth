let showHideButton = document.querySelectorAll(".show-hide");
let password = document.querySelectorAll(".password");

showHideButton.forEach((el, i) => {
  el.addEventListener("click", function() {
    if (password[i].type === "text") {
      password[i].type = "password";
      el.innerHTML = "S";
    } else {
      password[i].type = "text";
      el.innerHTML = "H";
    }
  })
})