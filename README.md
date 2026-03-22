# csce477-owasp-juice-shop

### Simple Front-End Form
A simple front-end login form using HTML and Vanilla JavaScript, setup with Vite.

Client side validation:
- Email must contain '@'
- Password must be at least 8 characters long

If either of the above conditions are not met, an alert will be displayed.

Upon successful login, the user will be greeted with a welcome message displaying their email. This is done by altering innerHTML, to intentionally create a vulnerability.

### Instructions
```
cd frontend
npm i
npm run dev
```

### XSS Attack
The login requirements used in this demo are weak on purpose. A valid email simply needs to have an '@' symbol. No standard regex is used in this case.

We can demonstrate an XSS attack by using the email: ```<img src=x onerror=alert("hello!")>@test.com```, and any password that is at least 8 characters long.