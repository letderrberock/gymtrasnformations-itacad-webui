const email = document
  .getElementById("email")
  .addEventListener("change", onChange);
const btn = document.querySelector(".btn-submit");
let isValid = false;

function onChange(e) {
  const email = e.target.value;
  if (/^\S+@\S+\.\S+$/.test(email)) {
    e.target.className = "form-control";
    isValid = true;
  } else {
    e.target.className = "error";
    isValid = false;
  }
}
btn.addEventListener("click", function (e) {
  if (isValid) {
    alert("You have successfully signed up for the newsletter!");
  } else {
    alert("Please, enter a valid email!");
  }
});
