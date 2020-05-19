'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments()
      table.integer('course_id').unsigned().references('id').inTable('courses')
      table.string('username', 80).notNullable().unique()
      table.string('students', 80).notNullable()
      table.string('year', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
