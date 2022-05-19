import userTestHelper from '../utils/tests/usersTestHelper'
import supertest from 'supertest'
import { app } from '../app'
import { NewUserEntry } from '../models/user'

const api = supertest(app)


describe('Users tests', () => {

  beforeEach(async () => {
    await userTestHelper.deleteUsers()
    await userTestHelper.createUsers()
  })

  test('can get all users', async () => {
    const response = await api
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      
    
    expect(response.body).toEqual(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      expect.arrayContaining(userTestHelper.initialUsers.map(user => expect.objectContaining({username: user.username})))
    )
  })

  test('can add a new user', async () => {

    const newUser: NewUserEntry = {
      username: 'monje',
      password: 'sovietmonk'
    }

    const usersAtStart = await userTestHelper.usersInDb()

    const response = await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)


    const usersAtEnd = await userTestHelper.usersInDb()

    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)
    expect(usersAtEnd).toEqual(expect.objectContaining({username: response.body.username}))
  })
})
