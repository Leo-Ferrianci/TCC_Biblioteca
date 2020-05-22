'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
  static boot() {
    super.boot()
    this.addTrait('@provider:Lucid/When')
  }

  courses () {
    return this.belongsTo('App/Models/Course')
  }
}

module.exports = Project
