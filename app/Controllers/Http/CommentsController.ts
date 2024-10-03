import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

import Comment from 'App/Models/Comment';


export default class CommentsController {

  /**
   * Display a listing of the resource.
   */
  public async index({}: HttpContextContract) {
    const comment = await Comment.query();

    return comment;
  }

  /**
   * Store newly created resource in storage.
   */
  public async store({request}: HttpContextContract) {
    const commentSchema = schema.create({
      'uid': schema.string(),
      'content': schema.string(),
      'published_at': schema.date.optional(),
      'userId': schema.number(),
      'postId': schema.number()
    });

    const validated = await request.validate({schema: commentSchema});

    const comment = await Comment.create({
      'uid': validated.uid,
      'content': validated.content,
      'published_at': validated.published_at,
      'userId': validated.userId,
      'postId': validated.postId
    });

    return comment;
    
  }

  /**
   * Display the specified resource.
   */
  public async show({params}: HttpContextContract) {
    const { uid } = params;
    const comment = await Comment.findByOrFail('uid', uid);

    return comment; 
  }

  /**
   * Update the specified resource in storage.
   */
  public async update({request, params}: HttpContextContract) {
    const commentSchema = schema.create({
      'uid': schema.string(),
      'content': schema.string(),
      'published_at': schema.date.optional(),
      'userId': schema.number(),
      'postId': schema.number()
    });

    const validated = await request.validate({schema: commentSchema});

    const { uid } = params;
    const comment = await Comment.findByOrFail('uid', uid);

    await comment.merge({
      'uid': validated.uid,
      'content': validated.content,
      'published_at': validated.published_at,
      'userId': validated.userId,
      'postId': validated.postId
    })
    .save();

    return comment; 
  }

  /**
   * Remove specified resource from storage.
   */
  public async destroy({params}: HttpContextContract) {
    const { uid } = params;
    const comment = await Comment.findByOrFail('uid', uid);
    await comment.delete();

    return {'success': true};
  }
}
