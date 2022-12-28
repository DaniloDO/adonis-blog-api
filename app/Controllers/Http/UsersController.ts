import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

import User from 'App/Models/User'

export default class UsersController {

  /**
   * Display a listing of the resource.
   */
  public async index({}: HttpContextContract) {
    const user = User.all();

    return user;
  }

  /**
   * Store newly created resource in storage.
   */
  public async store({request}: HttpContextContract) {
    const postSchema = schema.create({
      'uid': schema.string({}, [rules.uuid()]),
      'name': schema.string(),
      'email': schema.string({}, [rules.email()]),
      'email_verified_at': schema.date.optional(),
      'phone': schema.string.optional(),
      'password': schema.string()
    });

    const validated = await request.validate({schema: postSchema});

    const user = User.create({
      'uid': validated.uid,
      'name': validated.name,
      'email': validated.email,
      'email_verified_at': validated.email_verified_at,
      'phone': validated.phone,
      'password': validated.password
    });

    return user;
  }

  /**
   * Display the specified resource.
   */
  public async show({params}: HttpContextContract) {
    const { uid } = params;
    const user = await User.findByOrFail('uid', uid);

    return user;
  }

  /**
   * Update the specified resource in storage.
   */
  public async update({request, params}: HttpContextContract) {
    const postSchema = schema.create({
      'uid': schema.string({}, [rules.uuid()]),
      'name': schema.string(),
      'email': schema.string({}, [rules.email()]),
      'email_verified_at': schema.date.optional(),
      'phone': schema.string.optional(),
      'password': schema.string()
    });

    const validated = await request.validate({schema: postSchema});

    const { uid } = params;
    const user = await User.findByOrFail('uid', uid);

    await user.merge({
      'uid': validated.uid,
      'name': validated.name,
      'email': validated.email,
      'email_verified_at': validated.email_verified_at,
      'phone': validated.phone,
      'password': validated.password
    })
    .save();

    return user;
  }

  /**
   * Remove specified resource from storage.
   */
  public async destroy({params}: HttpContextContract) {
    const { uid } = params;
    const user = await User.findByOrFail('uid', uid);
    await user.delete();

    return {'success': true}
  }
}
