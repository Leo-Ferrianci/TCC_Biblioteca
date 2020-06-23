'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments()
      table
      .integer('course_id')
      .unsigned()
      .references('id')
      .inTable('courses')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('pt_username', 80).notNullable().unique()
      table.string('pt_students', 80).notNullable()
      table.string('pt_year', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
