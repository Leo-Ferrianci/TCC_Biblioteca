'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
  courses () {
    return this.belongsTo('App/Models/Course')
  }
}

module.exports = Project
