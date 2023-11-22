import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Binds express routes.
 * @param {Express} app The Express application.
 * @author Timilehin Aliyu <https://github.com/TangoIndiaMango>
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
