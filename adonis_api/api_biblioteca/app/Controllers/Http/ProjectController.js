'use strict'

const Database = use('Database')
const Project = use("App/Models/Project")
const Course = use("App/Models/Course")

class ProjectController {
  async store({  request, params }) {

    const course = await Course.findOrFail(params.id)
    const data = request.only([
      "pt_username",
      "pt_students",
      "pt_year"
    ])

    const project = await Project.create({...data, course_id: course.$originalAttributes.id})

    return project
  }


  async index() {
    const projects = await Database.select('*').from('projects')

    const project = Project
      .query()
      .with('courses')
      .fetch()
    return projects, project
  }

  // async show({ params }) {
  //   const project = await Project.findOrFail(params.id)

  //   return project
  // }

  async show({ params }) {

    const project = Project
      .query()
      .where('course_id',  params.id)
      .fetch()
    return  project
  }

  async showProject({ params }) {
    const project = await Project.findOrFail(params.id)

    return project
  }

  async update({ params, request }) {
    const project = await Project.findOrFail(params.id)

    const data  = request.only([
      "pt_username",
      "pt_students",
      "pt_year"
    ])

    project.merge(data)

    await project.save()

    return project
  }

  async filterProjects({ request, params }) {
    const {
      pt_username,
      pt_students,
      pt_year
    } = request.all()

    const filters = await Project.query()
      .when(request.input('pt_username'), (q, value) => q.where('pt_username',  'LIKE', '%' + value + '%'))
      .when(request.input('pt_students'), (q, value) => q.where('pt_students', 'LIKE', '%' + value + '%'))
      .when(request.input('pt_students'), (q, value) => q.where('pt_students',  'LIKE', '%' + value + '%'))
      .where('course_id',  params.id)
      .fetch()

    return filters
  }

  async destroy({ params }) {
    const project = await Project.findOrFail(params.id);
    await project.delete();
    return 'TCC deletado com sucesso'
  }

}

module.exports = ProjectController
