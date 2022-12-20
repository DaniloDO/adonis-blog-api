import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'categories_posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {      
      table.integer('post_id').unsigned(),
      table.foreign('post_id').references('posts.id'),

      table.integer('category_id').unsigned(),
      table.foreign('category_id').references('categories.id'),
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.alterTable('posts', (table) => {
      table.dropForeign('post_id');
      table.dropForeign('category_id');
    });

    this.schema.dropTable(this.tableName);
  }
}
