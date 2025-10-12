

const express = require("express")

const app = express()

const port = 8080

app.get('/', (req, res)=>{
    res.send("home page")
})

app.get("/app" , (req, res) => {

    res.send(
        `
 <html>
      <head>
        <title>Express Routing</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          h1 { color: #0066cc; }
          p { margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <h1>HTML Response from Express</h1>
        <p>This response was sent using Express routing.</p>
        <p>Try other routes: <a href="/">/</a> | <a href="/contact">/contact</a> | <a href="/reservation">/reserve</a></p>
      </body>
    </html>

        `
    )
})

app.get("/contact", (req, res)=>{
    res.send(
        `
        
        
<html>
<head>
  
  
  <title>Signup Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f2f2f2;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .signup-container {
      background: white;
      padding: 30px 40px;
      border-radius: 8px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
      width: 350px;
    }

    h2 {
      text-align: center;
      margin-bottom: 25px;
      color: #333;
    }

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
      color: #555;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 10px 12px;
      margin-bottom: 20px;
      border: 1.5px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      transition: border-color 0.3s ease;
    }

    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="password"]:focus {
      border-color: #007BFF;
      outline: none;
    }

    button {
      width: 100%;
      padding: 12px;
      background-color: #007BFF;
      border: none;
      color: white;
      font-size: 18px;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #0056b3;
    }

    .terms {
      font-size: 14px;
      color: #777;
      margin-top: -15px;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div class="signup-container">
    <h2>Create Account</h2>
    <form>
      <label for="name">Full Name</label>
      <input type="text" id="name" name="name" placeholder="Your full name" required />

      <label for="email">Email Address</label>
      <input type="email" id="email" name="email" placeholder="you@example.com" required />

      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="Enter password" required />

      <label for="confirm-password">Confirm Password</label>
      <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm password" required />

      <div class="terms">
        <input type="checkbox" id="terms" required />
        <label for="terms"> I agree to the Terms and Conditions</label>
      </div>

      <button type="submit">Sign Up</button>
    </form>
  </div>
</body>
</html>

        
        `)
})


app.get('/reservation', (req, res)=>{


    res.send("reservation page!!")

})


app.listen(port, ()=>{
    console.log(`app runing on server:${port}`);
    
})