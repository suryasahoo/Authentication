const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    // Add more users as needed
];

function authenticate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        messageElement.textContent = "Login successful!";
        messageElement.style.color = "#00cc00";
    } else {
        messageElement.textContent = "Invalid username or password.";
        messageElement.style.color = "#ff4444";
    }
}