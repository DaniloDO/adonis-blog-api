/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.get('/', 'UsersController.index').as('index');
  Route.post('/', 'UsersController.store').as('store');
  Route.group(() => {
    Route.put('/', 'UsersController.update').as('update');
    Route.delete('/', 'UsersController.destroy').as('destroy');
    Route.get('/', 'UsersController.show').as('show');
  }).prefix('/:uid');
}).prefix('/users').as('users');

Route.group(() => {
  Route.get('/', 'PostsController.index').as('index');
  Route.post('/', 'PostsController.store').as('store');
  Route.group(() => {
    Route.get('/', 'PostsController.show').as('show');
    Route.put('/', 'PostsController.update').as('update');
    Route.delete('/', 'PostsController.destroy').as('destroy');
  }).prefix('/:uid');
}).prefix('/posts').as('posts');

Route.group(() => {
  Route.get('/', 'CategoriesController.index').as('index');
  Route.post('/', 'CategoriesController.store').as('store');
  Route.group(() => {
    Route.get('/', 'CategoriesController.show').as('show');
    Route.put('/', 'CategoriesController.update').as('update');
    Route.delete('/', 'CategoriesController.destroy').as('destroy');
  }).prefix('/:uid');
}).prefix('/categories').as('categories');

Route.group(() => {
  Route.get('/', 'CommentsController.index').as('index');
  Route.post('/', 'CommentsController.store').as('store');
  Route.group(() => {
    Route.get('/', 'CommentsController.show').as('show');
    Route.put('/', 'CommentsController.update').as('update');
    Route.delete('/', 'CommentsController.destroy').as('destroy');
  }).prefix('/:uid');
}).prefix('/comments').as('comments');