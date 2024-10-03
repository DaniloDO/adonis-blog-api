import { DateTime } from 'luxon'
import { BaseModel, column, Has, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'
import Comment from './Comment'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({})
  public uid: string

  @column({})
  public name: string

  @column({})
  public email: string

  @column.dateTime({autoCreate: true})
  public email_verified_at: DateTime

  @column({})
  public phone: string

  @column({serializeAs: null})
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Post)
  public posts: HasMany<typeof Post>

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>

}
