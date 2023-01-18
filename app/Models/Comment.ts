import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import User from './User'
import Post from './Post'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({})
  public uid: string

  @column({})
  public content: string

  @column.dateTime({ autoCreate: true })
  public published_at: DateTime  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column({})
  public userId: number

  @column({})
  public postId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Post)
  public post: BelongsTo<typeof Post>

}
