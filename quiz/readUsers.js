const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/usernames', (req, res) => {
  let users = req.users.map(user => ({ id: user.id, username: user.username }));
  res.send(users);
});

router.get('/username/:name', (req, res) => {
    const name = req.params.name;
    const users = req.users.filter(person => person.username === name);

    if (users.length === 0) {
      console.log('User not found');
      return res.status(404).send('User not found');
    }
    res.send(users);
  });

module.exports = router;