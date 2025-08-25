const express = require("express");
const app = express();

app.use(express.json());

// Step 1: Create array of 20 objects
const users = [
  { name: "Ali", age: 25, language: "Arabic" },
  { name: "Omar", age: 30, language: "Arabic" },
  { name: "Sara", age: 22, language: "Arabic" },
  { name: "Mona", age: 28, language: "Arabic" },
  { name: "Hassan", age: 35, language: "Arabic" },
  { name: "Ahmed", age: 40, language: "Arabic" },

  { name: "John", age: 21, language: "English" },
  { name: "Emma", age: 27, language: "English" },
  { name: "Michael", age: 33, language: "English" },
  { name: "Sophia", age: 29, language: "English" },
  { name: "David", age: 24, language: "English" },
  { name: "Linda", age: 26, language: "English" },

  { name: "Pierre", age: 23, language: "French" },
  { name: "Marie", age: 31, language: "French" },
  { name: "Jacques", age: 36, language: "French" },
  { name: "Sophie", age: 28, language: "French" },
  { name: "Luc", age: 34, language: "French" },
  { name: "Isabelle", age: 22, language: "French" },
  { name: "Nicolas", age: 27, language: "French" },
  { name: "Claire", age: 25, language: "French" }
];

// Step 2: GET route with filter by language
app.get("/users", (req, res) => {
  const language = req.query.language;

  if (!language) {
    return res.status(400).json({ message: "Please provide a language (Arabic, English, French)" });
  }

  // Step 3: Filter users by requested language
  const filteredUsers = users.filter(user => user.language.toLowerCase() === language.toLowerCase());

  if (filteredUsers.length === 0) {
    return res.status(404).json({ message: `No users found with language: ${language}` });
  }

  res.json(filteredUsers);
});

app.listen(3000, () => {
  console.log("I am index2 ready now in port 3000");
});
