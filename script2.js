// Profile page
const profileDetails = document.getElementById("profileDetails");
const usernameSpan = document.getElementById("username");
const emailSpan = document.getElementById("email");
const passwordSpan = document.getElementById("password");
const tokenSpan = document.getElementById("token");
const logoutButton = document.getElementById("logoutButton");

// Check if the user is logged in and has an access token
const user = JSON.parse(localStorage.getItem("user"));

if (!user || !user.accessToken) {
  window.location.href = "index.html"; // Redirect to signup page
} else {
  // Display user details on the profile page

  usernameSpan.innerText = user.username;
  emailSpan.innerText = user.email;
  passwordSpan.innerText = user.password;
  tokenSpan.innerText = user.accessToken;
}

logoutButton.addEventListener("click", () => {
  console.log("user");
  // Clear local storage and redirect to signup page on logout
  localStorage.removeItem("user");
  window.location.href = "index.html";
});
