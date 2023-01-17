import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

import Category from 'App/Models/Category'

export default class CategoriesController {
  /**
   * Display a listing of the resource.
   */
  public async index({}: HttpContextContract) {
    const category = await Category.query();

    return category;
  }

  /**
   * Store newly created resource in storage.
   */
  public async store({request}: HttpContextContract) {
    const categorySchema = schema.create({
      'uid': schema.string(),
      'name': schema.string(),
      'image': schema.string(),
    });

    const validated = await request.validate({schema: categorySchema});

    const category = await Category.create({
      'uid': validated.uid,
      'name': validated.name,
      'image': validated.image
    });

    return category; 

  }

  /**
   * Display the specified resource.
   */
  public async show({params}: HttpContextContract) {
    const { uid } = params;
    const category = await Category.findByOrFail('uid', uid);

    return category;
  }

  /**
   * Update the specified resource in storage.
   */
  public async update({request, params}: HttpContextContract) {
    const categorySchema = schema.create({
      'uid': schema.string(),
      'name': schema.string(),
      'image': schema.string(),
    });

    const validated = await request.validate({schema: categorySchema});

    const { uid } = params;
    const category = await Category.findByOrFail('uid', uid);

    await category.merge({
      'uid': validated.uid,
      'name': validated.name,
      'image': validated.image
    })
    .save();

    return category; 
  }

  /**
   * Remove specified resource from storage.
   */
  public async destroy({params}: HttpContextContract) {
    const { uid } = params; 
    const category = await Category.findByOrFail('uid', uid);
    await category.delete();

    return {'success': true};
  }
}
