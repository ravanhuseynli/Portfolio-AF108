const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.querySelector(".submit");

let userData = JSON.parse(localStorage.getItem("userData")) || [];

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let isLoginSuccessful = false;

  userData.forEach((user) => {
    if (
      (usernameInput.value === user.username || usernameInput.value === user.email) &&
      passwordInput.value === user.password
    ) {
      isLoginSuccessful = true;
      user.isLogin = true; 
      localStorage.setItem("currentUser", JSON.stringify(user));
    }
  });

  if (isLoginSuccessful) {
    Toastify({
      text: "Giriş uğurlu oldu!",
      duration: 3000,
      gravity: "top",
      position: "right",
      style: {
        background: "green",
      },
    }).showToast();

    localStorage.setItem("userData", JSON.stringify(userData));

    setTimeout(() => {
      window.location.href = "index.html"; 
    }, 1500);
  } else {
    Toastify({
      text: "İstifadəçi adı və ya şifrə yanlışdır.",
      duration: 3000,
      gravity: "top",
      position: "right",
      style: {
        background: "red",
      },
    }).showToast();
  }
});
