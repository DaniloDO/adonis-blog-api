import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, manyToMany, ManyToMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import Category from './Category'
import User from './User'
import Comment from './Comment'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({})
  public uid: string

  @column({})
  public title: string

  @column({})
  public slug: string

  @column({})
  public description: string

  @column({})
  public content: string

  @column({})
  public image: string

  @column.dateTime({ autoCreate: true })
  public published_at: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>

  @manyToMany(() => Category)
  public categories: ManyToMany<typeof Category>


}
