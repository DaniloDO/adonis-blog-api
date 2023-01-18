import Comment from 'App/Models/Comment'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { DateTime } from 'luxon'

import UserFactory from './UserFactory'
import PostFactory from './PostFactory'

export default Factory.define(Comment, ({ faker }) => {
  return {
    'uid': faker.datatype.uuid(),
    'content': faker.lorem.paragraph(),
    'published_at': DateTime.now()
  }
}).relation('user', () => UserFactory)
  .relation('post', () => PostFactory)
  .build()
