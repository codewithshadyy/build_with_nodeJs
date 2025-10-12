
const express = require('express');
const app = express();
const port = 3030;

// array of users
const users = [
  { id: "1", name: 'Alice', email: 'alice@example.com' },
  { id: "2", name: 'Bob', email: 'bob@example.com' },
  { id: "3", name: 'Charlie', email: 'charlie@example.com' }
];

//get all users
app.get("/users", (req, res)=>{
    res.json(users)
})

//get users by id

app.get("/users/:id", (req, res)=>{
    const user = users.find(u => {
       return  u.id === req.params.id}
    )

     if (!user) {
    return res.status(404).send('User not found');
  }
  res.json(user)
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

