import UserFactory from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { DateTime } from 'luxon'
import PostFactory from './PostFactory'

export default Factory.define(UserFactory, ({ faker }) => {
  return {
    'uid': faker.datatype.uuid(),
    'name': faker.internet.userName(),
    'email': faker.internet.email(),
    'email_verified_at': DateTime.now(),
    'phone': faker.phone.number(),
    'password': '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'
  }
}).relation('posts', () => PostFactory )
  .build()
