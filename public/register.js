document.getElementById("registerBtn").addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !phone || !email || !password) {
        alert("All fields are required!");
        return;
    }

    try {
        const response = await fetch("https://trial-n22u.onrender.com/register", { // Replace with actual backend URL
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone, email, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert("User registered successfully! User ID: " + data.userId);
        } else {
            alert("Error: " + data.error);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to connect to server. Please try again later.");
    }
});
