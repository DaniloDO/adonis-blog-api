import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, manyToMany, ManyToMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { slugify, Slugify } from '@ioc:Adonis/Addons/LucidSlugify'

import Category from './Category'
import User from './User'
import Comment from './Comment'

export default class Post extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  public id: number

  @column({})
  public uid: string

  @column({})
  public title: string

  @column({})
  @slugify({
    'strategy': 'dbIncrement',
    'fields': ['title'],
    'allowUpdates': true
  })
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

  @column({})
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>

  @manyToMany(() => Category)
  public categories: ManyToMany<typeof Category>


}
