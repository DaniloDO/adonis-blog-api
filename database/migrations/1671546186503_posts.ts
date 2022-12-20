import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id'),
      table.string('uid').unique(),
      table.string('title'),
      table.string('slug').unique(),
      table.string('description').nullable(),
      table.text('content'),
      table.string('image').nullable(),
      table.timestamp('published_at'),

      table.integer('user_id').unsigned(),
      table.foreign('user_id').references('users.id'),
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.alterTable('posts', (table) => {
      table.dropForeign('user_id');
    })

    this.schema.dropTable(this.tableName)
  }
}
