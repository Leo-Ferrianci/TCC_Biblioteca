'use strict'

const Database = use('Database')
const Course = use("App/Models/Course")

class CourseController {
  async store({ request }) {
    const data = request.only([
      "username",
    ])

    const course = await Course.create(data)

    return course
  }

  async index() {
    const courses = await Database.select('*').from('courses')

    const course = Course
      .query()
      .fetch()
    return courses, course
  }


  async show({ params }) {
    const course = await Course.findOrFail(params.id)

    return course
  }

  async update({ params, request, response }) {
    const course = await Course.findOrFail(params.id)

    const { data } = request.only([
      "username"
    ])

    course.merge(data)

    await course.save()

    return course
  }

  async destroy({ params }) {
    const course = await Course.findOrFail(params.id);
    await course.delete();
    return 'Curso deletado com sucesso'
  }
}

module.exports = CourseController
