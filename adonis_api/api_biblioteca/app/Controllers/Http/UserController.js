'use strict'

class UserController {
  async store({ request }) {
    const { data } = request.only([
      "username",
      "email",
      "password",
      "controller"
    ])

    const user = await User.create(data)

    return user
  }

  async index() {
    const users = await Database.select('*').from('users')

    const user = User
      .query()
      .fetch()
    return users, user
  }


  async show({ params }) {
    const user = await User.findOrFail(params.id)

    return user
  }

  async update({ params, request, response }) {
    const user = await User.findOrFail(params.id)

    const { data } = request.only([
      "username",
      "surname",
      "email",
      "controller"
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

}

module.exports = UserController
