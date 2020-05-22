'use strict'

const Database = use('Database')
const Course = use("App/Models/Course")

class CourseController {
  async store({ request }) {
    const data = request.only([
      "cs_username",
    ])

    const course = await Course.create(data)

    return course
  }

  async index() {
    const courses = await Database.select('*').from('courses')

    const course = Course
      .query()
      .with('projects')
      .fetch()
    return courses, course
  }


  async show({ params }) {

    const course = Course
      .query()
      .with('projects')
      .where('id',  params.id)
      .fetch()
    return  course
  }

  async update({ params, request, response }) {
    const course = await Course.findOrFail(params.id)

    const data  = request.only([
      "cs_username"
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
