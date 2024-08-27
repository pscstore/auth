let showHideButton = document.querySelectorAll(".show-hide");
let password = document.querySelectorAll(".password");

showHideButton.forEach((el, i) => {
  el.addEventListener("click", function() {
    if (password[i].type === "text") {
      password[i].type = "password";
      el.innerHTML = "<img width='100%' src='./img/hide.svg' alt='Hide Password' >";
    } else {
      password[i].type = "text";
      el.innerHTML = "<img width='100%' src='./img/show.svg' alt='Hide Password' >";
    }
  })
})