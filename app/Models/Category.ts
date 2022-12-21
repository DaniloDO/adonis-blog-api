import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import Post from './Post'


export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({})
  public uid: string

  @column({})
  public name: string

  @column({})
  public image: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Post)
  public posts: ManyToMany<typeof Post>

}
