import Category from 'App/Models/Category'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Category, ({ faker }) => {
  return {
    'uid': faker.datatype.uuid(),
    'name': faker.lorem.word(),
    'image': faker.image.imageUrl()
  }
}).build()
