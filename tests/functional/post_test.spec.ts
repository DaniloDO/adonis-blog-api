import { test } from '@japa/runner'
import PostFactory from 'Database/factories/PostFactory';
import UserFactory from 'Database/factories/UserFactory';

test.group('Post test', () => {
  test('test_if_post_index_route_returns_data', async ({client}) => {
    const post = await PostFactory.with('user', 1).createMany(3);

    const response = await client.get('/posts');

    response.assertStatus(200);
    response.body().assert?.properties(
      response.body(),
      ['uid', 'title', 'slug', 'description', 'content', 'image', 'published_at', 'user_id']
    );
  });

  test('test_if_post_show_route_returns_data', async ({client}) => {
    const post = await PostFactory.with('user', 1).create();

    const response = await client.get(`/posts/${post.uid}`);

    response.assertStatus(200);
    response.body().assert?.properties(
      response.body(),
      ['uid', 'title', 'slug', 'description', 'content', 'image', 'published_at', 'user_id']    
    );
  });

  test('test_if_post_destroy_route_erases_data', async ({client}) => {
    const post = await PostFactory.with('user', 1).create();

    const response = await client.delete(`/posts/${post.uid}`);

    response.assertStatus(200);
    response.body().assert?.propertyVal(
      response.body(),
      ['success', true]
    )
  });


})
