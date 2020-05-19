'use strict'

const Database = use('Database')
const Project = use("App/Models/Project")
const Course = use("App/Models/Course")

class ProjectController {
  async store({  request, params }) {

    const course = await Course.findOrFail(params.id)
    const data = request.only([
      "username",
      "students",
      "year"
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

  async destroy({ params }) {
    const project = await Project.findOrFail(params.id);
    await project.delete();
    return 'TCC deletado com sucesso'
  }

}

module.exports = ProjectController
