const { Router } = require('express');

const UserController = require('./controllers/UserController');
const CourseController = require('./controllers/CourseController');
const ProjectController = require('./controllers/ProjectController');
const SearchController = require('./controllers/SearchCourse');
const SearchProject = require('./controllers/SearchProject');

//Importar cada rota para cada item que for usado abaixo

const routes = Router();

//Criar uma rota para cada item (CRUD)

routes.get("/register", UserController.index);
routes.get("/register/:_id", UserController.show);
routes.post("/register", UserController.store);
routes.put("/register/:_id", UserController.update);
routes.delete("/register/:_id", UserController.delete);

routes.get("/course", CourseController.index);
routes.get("/course/:_id", CourseController.show);
routes.post("/course", CourseController.store);
routes.put("/course/:_id", CourseController.update);
routes.delete("/course/:_id", CourseController.delete);

routes.get("/project", ProjectController.index);
routes.get("/project/:_id", ProjectController.show);
routes.post("/project", ProjectController.store);
routes.put("/project/:_id", ProjectController.update);
routes.delete("/project/:_id", ProjectController.delete);

routes.get('/search', SearchController.listCourse);
routes.get('/project', SearchProject.listProject);


module.exports = routes;