// Signup page
const signupForm = document.getElementById("signupForm");
const signupMessage = document.getElementById("signupMessage");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false; // Prevent form submission
  }

  // Generate a random access token (16-byte string)
  const accessToken = generateAccessToken();

  // Store user data in local storage
  localStorage.setItem(
    "user",
    JSON.stringify({ username, email, accessToken, password })
  );

  signupForm.reset();
  signupMessage.innerText = "Signup successful.";
  setTimeout(() => {
    window.location.href = "profile.html";
  }, 500);
});

// Function to generate a random access token (16-byte string)
function generateAccessToken() {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let accessToken = "";
  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    accessToken += charset[randomIndex];
  }
  return accessToken;
}
