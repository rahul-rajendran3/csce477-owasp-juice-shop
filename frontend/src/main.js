import './style.css'

function validate() {
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  if (!email.includes("@")) {
    return false;
  }
  else if (password.length < 8) {
    return false;
  }
  else {
    const result = document.getElementById("result")
    result.innerHTML = `<p>Welcome, ${email}</p>`
    return true;
  }
}

document.querySelector('#app').innerHTML = `
<section id="center">
  <div>
    <h1>Juice Shop</h1>
    <input id="email" type="text" placeholder="email" class="login"/>
    </br>
    <input id="password" type="password" placeholder="password" class="login"/>
    <p>Enter the email: &lt;img src=x onerror=alert("hello!")&gt;@test.com</p>
    <p>Enter any password with 8+ characters.</p>
    <div id="result"></div>
  </div>
  <button id="login-btn" type="button" class="login-btn">log in</button>
</section>
`
document.querySelector('#login-btn').addEventListener('click', () => {
  const isValid = validate();
  if (!isValid) {
    alert("Invalid email or password. Please try again.");
    return;
  }
  else {
    alert("Login successful!");
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    return;
  }
});