const request = require('supertest');
const server = require('../api/server.js')
const db = require('../database/dbConfig.js')
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { jwtSecret } = require('../config/secrets.js')

describe('Register', function() {
    beforeEach(async ()=> {
        await db('users').truncate();
    })
  describe('POST /api/register', () => {
    it('should return 201 created', async () => {
        const res = await request(server)
        .post('/api/auth/register')
        .send({username: 'john', 
               password:'pass',
               }
               )
        expect(res.status).toBe(201)
    })

    it('should return 201 created', async () => {
        const res = await request(server)
        .post('/api/auth/register')
        .send({username: 'john', 
               password:'pass',
               }
               )
        expect(res.body).toEqual({id:1, username:'john'})
    })
})
})


describe('Login', function() {
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

    const user  = {username: 'john', 
    password:'pass',
    };
    const authorization = {}
  
    beforeEach(async () => {
        authorization.token = generateToken(user)
    })
    
  describe('POST /api/login', () => {
    it('should return 200 status', async () => {
        const res = await request(server)
        .post('/api/auth/login')
        .send(user)
        expect(res.status).toBe(200)
    })

    it('should return token object', async () => {
        //helper function
        
        const res = await request(server)
        .post('/api/auth/login')
        .send(user)

        expect.objectContaining({token:authorization.token})
        
        
    })
})
})


