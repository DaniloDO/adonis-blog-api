# AdonisJS Blog API
This is a RESTful API for a blog application, built with AdonisJS 5.

## Requirements

- Node.js
- npm or yarn

## Installation
1. Clone the repository

```
$ git clone https://github.com/[username]/adonis-blog-api.git
```
2. Install the dependencies
```
$ cd adonis-blog-api
$ npm install
```
or
```
$ yarn
```

3. Create a .env file based on the .env.example file and configure the database settings

4. Run the migrations

```
$ adonis migration:run
```

5. Start the development server
```
$ adonis serve --dev
```

## Endpoints
The API has the following endpoints for categories, users, posts and comments management:

## Categories

| Method | Endpoint         | Description                   |
|--------|------------------|-------------------------------|
| GET    | /categories      | List all categories           |
| POST   | /categories      | Create a new category         |
| GET    | /categories/:uid | Show a single category by uid |
| PUT    | /categories/:uid | Update a category by uid      |
| DELETE | /categories/:uid | Delete a category by uid      |

## Users

| Method | Endpoint   | Description              |
|--------|------------|--------------------------|
| GET    | /users     | List all users           |
| POST   | /users     | Create a new user        |
| GET    | /users/:id | Show a single user by id |
| PUT    | /users/:id | Update a user by id      |
| DELETE | /users/:id | Delete a user by id      |

## Posts

| Method | Endpoint   | Description              |
|--------|------------|--------------------------|
| GET    | /posts     | List all posts           |
| POST   | /posts     | Create a new post        |
| GET    | /posts/:id | Show a single post by id |
| PUT    | /posts/:id | Update a post by id      |
| DELETE | /posts/:id | Delete a post by id      |

## Comments

| Method | Endpoint      | Description                 |
|--------|---------------|-----------------------------|
| GET    | /comments     | List all comments           |
| POST   | /comments     | Create a new comment        |
| GET    | /comments/:id | Show a single comment by id |
| PUT    | /comments/:id | Update a comment by id      |
| DELETE | /comments/:id | Delete a comment by id      |

## Contributing
All contributions are welcome. Feel free to open an issue or a pull request.

## License
The code is open-sourced software licensed under the MIT license.
