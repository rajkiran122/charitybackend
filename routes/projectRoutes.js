const router = require('express').Router();
const projectController = require('../controllers/projectController');

router.route('/projects')
    .post(projectController.createNewProject)
    .get(projectController.getAllProjects);

router.route('/projects/:projectId')
    .get(projectController.getAProject);

module.exports = router;