import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id'),
      table.string('uid'),
      table.text('content'),
      table.timestamp('published_at'),

      table.integer('user_id').unsigned(),
      table.foreign('user_id').references('users.id'),

      table.integer('post_id').unsigned(),
      table.foreign('post_id').references('posts.id'),
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.alterTable('comments', (table) => {
      table.dropForeign('user_id');
      table.dropForeign('post_id');
    })
    
    this.schema.dropTable(this.tableName)
  }
}
