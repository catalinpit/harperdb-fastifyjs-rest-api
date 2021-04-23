const courseController = require('../controllers/courseController');

async function routes(app, opts) {

    // Get all courses
    app.route({
        method: 'GET',
        url: '/courses',
        handler: courseController.getCourses
    });

    // Get a specific course
    app.route({
        method: 'GET',
        url: '/courses/:name',
        handler: courseController.getSpecificCourse
    });

    // Add a course
    app.route({
        method: 'POST',
        url: '/courses',
        handler: courseController.addCourse
    });

    // Edit a course
    app.route({
        method: 'PUT',
        url: '/courses/:name',
        handler: courseController.editCourse
    });

    // Delete a course
    app.route({
        method: 'DELETE',
        url: '/courses/:name',
        handler: courseController.deleteCourse
    });
}

module.exports = routes;