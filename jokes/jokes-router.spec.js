const request = require('supertest');
const server = require('../api/server.js')
const db = require('../database/dbConfig.js')

describe('GET ', function() {

    
    
  describe('GET /jokes', () => {
    it('should return 200 status', async () => {
        const res = await request(server)
        .get('/api/jokes')
        .set('Authorization',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6InByZW0yIiwiaWF0IjoxNTgyOTExOTYyLCJleHAiOjE1ODI5MTU1NjJ9.BBSGR7BRvbuuonUj2mURHO8YNdkbzeh55iYZTHmKgg0")
        
        expect(res.status).toBe(200)

    })

    it('should return 200 status', async () => {
        const res = await request(server)
        .get('/api/jokes')
        .set('Authorization',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6InByZW0yIiwiaWF0IjoxNTgyOTExOTYyLCJleHAiOjE1ODI5MTU1NjJ9.BBSGR7BRvbuuonUj2mURHO8YNdkbzeh55iYZTHmKgg0")
        
        expect.arrayContaining(res.body);

    })
   
})
})