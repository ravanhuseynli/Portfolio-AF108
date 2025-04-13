const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const btnRegister = document.querySelector(".submit");

let storageData = [];

try {
  const data = JSON.parse(localStorage.getItem("userData"));
  if (Array.isArray(data)) {
    storageData = data;
  }
} catch (err) {
  console.error(err);
}

const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*'];


btnRegister.addEventListener("click", (event) => {
  event.preventDefault();

  const pass = password.value;
  let hasUpper = false;
  let hasSpecial = false;

  for (let i = 0; i < pass.length; i++) {
    const char = pass[i];
    if (char >= 'A' && char <= 'Z') {
      hasUpper = true;
    }
    if (specialChars.includes(char)) {
      hasSpecial = true;
    }
  }

  if (pass.length < 8) {
    Toastify({
      text: "Şifrə minimum 8 simvol olmalıdır!",
      style: { background: "red" },
      duration: 3000,
    }).showToast();
    return;
  }

  if (!hasUpper) {
    Toastify({
      text: "Şifrə ən az bir böyük hərfdən ibarət olmalıdır!",
      style: { background: "red" },
      duration: 3000,
    }).showToast();
    return;
  }

  if (!hasSpecial) {
    Toastify({
      text: "Şifrə ən az bir xüsusi simvoldan ibarət olmalıdır",
      style: { background: "red" },
      duration: 3000,
    }).showToast();
    return;
  }

  if (password.value !== confirmPassword.value) {
    Toastify({
      text: "Şifrə və təkrarı eyni olmalıdır!",
      style: { background: "orange" },
      duration: 3000,
    }).showToast();
    return;
  }

  const isDuplicate = storageData.some(user =>
    user.username === username.value || user.email === email.value
  );

  if (isDuplicate) {
    Toastify({
      text: "Bu istifadəçi adı və ya emiil artıq istifadə olunub!",
      style: { background: "orange" },
      duration: 3000,
    }).showToast();
    return;
  }

 
  const userID = Math.floor(Math.random() * 2000);

  const userData = {
    id: userID,
    username: username.value,
    email: email.value,
    password: password.value,
    isLogin: false,
    wishList: []
  };

  storageData.push(userData);
  localStorage.setItem("userData", JSON.stringify(storageData));

  Toastify({
    text: "Qeydiyyat uğurla tamamlandı!",
    style: { background: "green" },
    duration: 3000,
  }).showToast();

  document.querySelector("form").reset();

  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});
