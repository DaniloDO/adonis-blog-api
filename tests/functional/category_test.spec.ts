import { test } from '@japa/runner'
import CategoryFactory from 'Database/factories/CategoryFactory'

test.group('Category test', () => {
  test('test_if_category_index_route_returns_data', async ({client}) => {
    const category = await CategoryFactory.createMany(2);

    const response = await client.get('/categories');

    response.assertStatus(200);
    response.body().assert?.properties(
      response.body(),
      ['uid', 'name', 'image']
    );
  });

  test('test_if_category_show_route_returns_data', async ({client}) => {
    const category = await CategoryFactory.create();

    const response = await client.get(`/categories/${category.uid}`);

    response.assertStatus(200);
    response.body().assert?.properties(
      response.body(),
      ['uid', 'name', 'image']
    );
  });

  test('test_if_category_destroy_route_erases_data', async ({client}) => {
    const category = await CategoryFactory.create();

    const response = await client.delete(`/categories/${category.uid}`);

    response.assertStatus(200);
    response.body().assert?.propertyVal(
      response.body(),
      ['success', true]
    )
  });

})
