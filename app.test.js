const supertest = require('supertest')
const app = require('./app')
const request = supertest(app)

describe('GET /', () => {
  test('should return success respond', async () => {
    const res = await request.get('/')
    expect(res.text).toBe('this app run properly')
  })
})

describe('GET /call/:name', () => {
  describe('when params defined', () => {
    test('should respond with a 200 status code', async () => {
      const res = await request.get('/call/eza')
      expect(res.statusCode).toBe(200)
    })
    test('should return "hello name!"', async () => {
      const res = await request.get('/call/eza')
      expect(res.body.message).toBe('hello eza!')
    })
  })

  describe('when params undefined', () => {
    test('should return null', async () => {
      const res = await request.get('/call')
      expect(res.body.message).toBe()
    })
  })
})
