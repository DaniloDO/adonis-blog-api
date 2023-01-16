import PostFactory from 'App/Models/Post'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { DateTime } from 'luxon'

import UserFactory from './UserFactory'

export default Factory.define(PostFactory, async ({ faker }) => {
  const title = faker.lorem.sentence(3);

  return {
    'uid': faker.datatype.uuid(),
    'title': title,
    'slug': title,
    'description': faker.lorem.word(),
    'content': faker.lorem.paragraph(),
    'image': faker.image.imageUrl(), 
    'published_at': DateTime.now(),
  }
}).relation('user', () => UserFactory)
  .build()
