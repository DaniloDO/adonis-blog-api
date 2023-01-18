import { test } from '@japa/runner'
import CommentFactory from 'Database/factories/CommentFactory'

test.group('Comment test', () => {
  test('test_if_comment_index_route_returns_data', async ({client}) => {
    const comment = await CommentFactory
      .with('post', 1, (post) => post.with('user', 1))
      .with('user', 1, (user) => user.with('posts', 1))
      .createMany(3);

    const response = await client.get('/comments');

    response.assertStatus(200);
    response.body().assert?.properties(
      response.body(),
      ['uid', 'content', 'published_at', 'user_id', 'post_id']
    );
  });

  test('test_if_comment_show_route_returns_data', async ({client}) => {
    const comment = await CommentFactory
    .with('post', 1, (post) => post.with('user', 1))
    .with('user', 1, (user) => user.with('posts', 1))
    .create();

    const response = await client.get(`/comments/${comment.uid}`);

    response.assertStatus(200);
    response.body().assert?.properties(
      response.body(),
      ['uid', 'content', 'published_at', 'user_id', 'post_id']
    );
  });
  
  test('test_if_post_destroy_route_erases_data', async ({client}) => {
    const comment = await CommentFactory
    .with('post', 1, (post) => post.with('user', 1))
    .with('user', 1, (user) => user.with('posts', 1))
    .create();

    const response = await client.delete(`/comments/${comment.uid}`);

    response.assertStatus(200);
    response.body().assert?.propertyVal(
      response.body(),
      ['success', true]
    );
  });  
})
