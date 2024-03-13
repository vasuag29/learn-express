const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.post('/adduser', (req, res) => {
  let newUser = req.body;
  req.users.push(newUser);
  fs.writeFile(path.resolve(__dirname, '../data/users.json'), JSON.stringify(req.users), (err) => {
    console.log(newUser);
    if (err) {
      console.log('Failed to write');
      res.status(500).send('Failed to write user data');
    } else {
      console.log('User Saved');
      res.send('User added successfully');
    }
  });
});

module.exports = router;