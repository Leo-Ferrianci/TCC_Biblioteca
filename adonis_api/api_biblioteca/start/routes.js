'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.get('/', () => {
  return { greeting: 'Bem Vindo a API do Team ->  Biblioteca Virtual de TCC' }
})

// Capturando as rotas de Usuário e sessão
Route.get('/users', 'UserController.index')

Route.get('/users/:id', 'UserController.show')

Route.post('/users', 'UserController.store')

Route.put('/users/:id', 'UserController.update')
  .middleware('auth')
  .validator('update')

Route.delete('/users/:id', 'UserController.destroy')
  .middleware('auth')

Route.post('/sessions', 'SessionController.create')

//Rotas do Curso

Route.get('/courses', 'CourseController.index')

Route.get('/courses/:id', 'CourseController.show')

Route.post('/courses', 'CourseController.store')
.middleware('auth')

Route.put('/courses/:id', 'CourseController.update')
  .middleware('auth')

Route.delete('/courses/:id', 'CourseController.destroy')
  .middleware('auth')
