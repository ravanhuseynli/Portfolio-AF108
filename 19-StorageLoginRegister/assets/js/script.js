const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const allUsers = JSON.parse(localStorage.getItem("userData")) || [];
const displayUsername = document.getElementById("displayUsername");
const settingsForm = document.getElementById("settingsForm");
const newUsername = document.getElementById("newUsername");
const newEmail = document.getElementById("newEmail");
const newPassword = document.getElementById("newPassword");

if (currentUser) {
  displayUsername.textContent = currentUser.username;
  newUsername.value = currentUser.username;
  newEmail.value = currentUser.email;
  newPassword.value = currentUser.password;
} else {
  window.location.href = "login.html"; 
}

settingsForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const usernameVal = newUsername.value.trim();
    const emailVal = newEmail.value.trim();
    const passwordVal = newPassword.value;
  
    if (!usernameVal || !emailVal || passwordVal.length < 8) {
      Toastify({
        text: "Bütün sahələri düzgün doldurun. (Şifrə ən az 8 simvol olmalıdır)",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: { background: "red" },
      }).showToast();
      return;
    }
  
    const index = allUsers.findIndex(user => user.id === currentUser.id);
    if (index !== -1) {
      allUsers[index].username = usernameVal;
      allUsers[index].email = emailVal;
      allUsers[index].password = passwordVal;
  
      localStorage.setItem("userData", JSON.stringify(allUsers));
      localStorage.setItem("currentUser", JSON.stringify(allUsers[index]));
  
      Toastify({
        text: "Məlumatlar uğurla yeniləndi!",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: { background: "green" },
      }).showToast();
  
      setTimeout(() => location.reload(), 1500);
    } else {
      Toastify({
        text: "İstifadəçi tapılmadı!",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: { background: "orange" },
      }).showToast();
    }
  });
