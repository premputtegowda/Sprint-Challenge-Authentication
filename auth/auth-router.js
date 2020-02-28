const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/user-model.js')
const jwt = require("jsonwebtoken");
const { jwtSecret } = require('../config/secrets.js')


router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;
  Users.register(user)
    .then(user => res.status(201).json(user))
    .catch(({name, message, stack, code })=> res.status(500).json({name, message, stack, code }))

}
)

router.post('/login', (req, res) => {
  // implement login
  let {username, password} = req.body;
    Users.findBy(username)
    .then(user => {
      console.log(user)
        if (user && bcrypt.compareSync(password, user.password)){
          console.log(user);
          const token = generateToken(user)
          res.status(200).json({token});

        } else {
          res.status(401).json({ message: "Invalid Credentials" })

        }
    
    })
    .catch(err => res.status(500).json({error: "Invalid credentials"}))
});

function generateToken(user){
  const payload = {
    subject: user.id,
    username: user.username,
   
  };
  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
