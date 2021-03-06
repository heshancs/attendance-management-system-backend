// import 3rd party package
const express = require('express');

//import student controller
const studentController = require('../controllers/student');

//import authentication controller
const isAuth = require('../middleware/is-auth');

const router = express.Router();


// /api/student/course_codes => POST
router.post('/course_code/', studentController.getStudentsByCourseCode);

// /api/student/co_id => POST
router.post('/co_id/', studentController.getStudentsByCourseId);

// /api/student/mentor/ => POST
router.post('/mentor/', studentController.getStudentsByMentorId);

// /api/student/courses => POST
router.post('/courses/', isAuth, studentController.getStudentsCourses);

// /api/student/attendance => POST
router.post('/attendance/', studentController.getStudentsAttendance);

// /api/student/markattendance => POST
router.post('/markattendance/', studentController.setAttendance);
// /api/student/attendance => POST
router.post('/attendance_sheet/', studentController.getStudentsAttendanceSheet);

// /api/student/all_courses => get
router.get('/all_courses/', studentController.getAllStudentsCourses);

// /api/student/registration_no/ => POST
router.post('/registration_no/', studentController.getStudent);

// /api/student/mahapola/ => POST
router.post('/mahapola/', studentController.getMahapolaEligibility);

//counts for dashboard
router.post('/registered_student/', studentController.getRegisteredStudent);
router.post('/lecturer_days/', studentController.getLecturerDays);
router.post('/present_days/', studentController.getPresentDays);
router.post('/absent_days/', studentController.getAbsentDays);
router.post('/total_courses/', studentController.getTotalCourses);
router.post('/total_conducted/', studentController.getTotalConducted);
router.post('/total_mentoring/', studentController.getTotalMentoring);
router.post('/total_dep_courses/', studentController.getTotalDepCourses);
router.post('/total_dep_days/', studentController.getTotalDepDays);

// /api/student/everyone/ => GET
router.get('/everyone/', isAuth, studentController.getAllStudents);

// /api/student/ => GET
router.get('/', studentController.getStudents);



module.exports = router;