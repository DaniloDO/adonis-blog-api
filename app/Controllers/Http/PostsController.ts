import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

import Post from 'App/Models/Post';


export default class PostsController {

  /**
   * Display a listing of the resource.
   */
  public async index({}: HttpContextContract) {
    const post = await Post.query()

    return post;
  }

  /**
   * Store newly created resource in storage.
   */
  public async store({request}: HttpContextContract) {
    const postSchema = schema.create({
      'uid': schema.string(),
      'title': schema.string(),
      'slug': schema.string(),
      'description': schema.string.optional(),
      'content': schema.string(),
      'image': schema.string.optional(),
      'published_at': schema.date.optional(),
      'userId': schema.number()
    });

    const validated = await request.validate({schema: postSchema});

    const post = await Post.create({
      'uid': validated.uid,
      'title': validated.title,
      'slug': validated.slug,
      'description': validated.description,
      'content': validated.description,
      'image': validated.image,
      'published_at': validated.published_at,
      'userId': validated.userId
    });

    return post;

  }

  /**
   * Display the specified resource.
   */
  public async show({params}: HttpContextContract) {
    const { uid } = params;
    const post = await Post.findByOrFail('uid', uid);

    return post;
  }

  /**
   * Update the specified resource in storage.
   */
  public async update({request, params}: HttpContextContract) {
    const postSchema = schema.create({
      'uid': schema.string(),
      'title': schema.string(),
      'slug': schema.string(),
      'description': schema.string.optional(),
      'content': schema.string(),
      'image': schema.string.optional(),
      'published_at': schema.date.optional(),
      'userId': schema.number()
    });

    const validated = await request.validate({schema: postSchema});

    const { uid } = params;
    const post = await Post.findByOrFail('uid', uid);

    await post.merge({
      'uid': validated.uid,
      'title': validated.title,
      'slug': validated.slug,
      'description': validated.description,
      'content': validated.description,
      'image': validated.image,
      'published_at': validated.published_at,
      'userId': validated.userId
    })
    .save()

    return post;
  }

  /**
   * Remove specified resource from storage.
   */
  public async destroy({params}: HttpContextContract) {
    const { uid } = params;
    const post = await Post.findByOrFail('uid', uid);
    await post.delete();

    return {'success': true};
  }
}
