'use strict'

const Database = use('Database')
const User = use("App/Models/User")

class UserController {
  async store({ request }) {
    const data = request.only([
      "username",
      "email",
      "password",
      "controller"
    ])

    const user = await User.create(data)

    return user
  }

  async indexAdmin() {
    const users = await Database.select('*').from('users')

    const user = User
      .query()
      .where('controller', 1)
      .fetch()
    return users, user
  }

  async indexUser() {
    const users = await Database.select('*').from('users')

    const user = User
      .query()
      .where('controller', 0)
      .fetch()
    return users, user
  }


  async show({ params }) {
    const user = await User.findOrFail(params.id)

    return user
  }

  async update({ params, request }) {
    const user = await User.findOrFail(params.id)

    const data = request.only([
      "username",
      "email",
    ])

    user.merge(data)

    await user.save()

    return user
  }

  async updatePassword({ params, request, response }) {
    const user = await User.findOrFail(params.id)

    const { data } = request.only([
      "password",
    ])

    user.merge(data)

    await user.save()

    return user
  }

  async destroy({ params }) {
    const user = await User.findOrFail(params.id);
    await user.delete();
    return 'usuário deletado com sucesso'
  }
}

module.exports = UserController
