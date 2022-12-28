import { assert } from '@japa/preset-adonis';
// import { assert } from '@japa/assert'
import { test } from '@japa/runner'
import UserFactory from 'Database/factories/UserFactory'


test.group('User test', () => {
    test('test_if_user_index_route_returns_data', async ({client}) => {
      const user = await UserFactory.createMany(3);

      const response = await client.get('/users');

      response.assertStatus(200);
      response.body().assert?.properties(
        response.body(),
        ['uid', 'name', 'email', 'email_verified_at', 'phone', 'password']
      );      
    });

    test('test_if_user_show_route_returns_data', async ({client}) => {
      const user = await UserFactory.create();

      const response = await client.get(`/users/${user.uid}`);

      response.assertStatus(200);
      response.body().assert?.properties(
        response.body(),
        ['uid', 'name', 'email', 'email_verified_at', 'phone', 'password']
      );  
    });

    test('test_if_user_destroy_route_erases_data', async({client}) => {
      const user = await UserFactory.create();

      const response = await client.delete(`/users/${user.uid}`)

      response.assertStatus(200);
      response.body().assert?.propertyVal(
        response.body(),
        ['success', true]
      );
    });


})
