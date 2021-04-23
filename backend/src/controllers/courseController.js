const client = require("../db/db_config");

const getCourses = async (req, res) => {
    const allCourses = await client.query('select * from mydb.courses');
    res.send({ allCourses });
};

const getSpecificCourse = (req, res) => {
    res.send({ specific: 'course' });
};

const addCourse = (req, res) => {
    res.send({ msg: 'added course!' });
};

const editCourse = (req, res) => {
    res.send({ msg: 'course edited!' });
};

const deleteCourse = (req, res) => {
    res.send({ msg: 'course deleted!' });
};

module.exports = {
    getCourses,
    getSpecificCourse,
    addCourse,
    editCourse,
    deleteCourse
}