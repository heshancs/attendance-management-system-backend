const db = require('../util/database');

module.exports = class Student {
    constructor(registrationNo, studentName, degreeProgram, mentorId) {
        this.registrationNo = registrationNo;
        this.studentName = studentName;
        this.degreeProgram = degreeProgram;
        this.mentorId = mentorId;
    }

    static fetchAll() {
        //return all the students from the database
        return db.execute('SELECT * FROM student');
    }

    static async getMahapola() {
        return await db.execute('SELECT * FROM mahapola ORDER BY id DESC LIMIT 1');
    }

    static findByRegistrationNo(registrationNo) {
        //return a specific student from the database 
        return db.execute('SELECT * FROM student INNER JOIN degree_program ON student.degree_id=degree_program.degree_id WHERE student.registration_no = ?', [registrationNo]);
    }

    static findByMentorId(mentorId) {
        //return a set of students from the database by their mentor id
        return db.execute('SELECT * FROM student WHERE mentor_id = ?', [mentorId]);
    }

    static getStudentTimetable(student_id) {
        const currentYear = new Date(). getFullYear();
        return db.execute('SELECT o.co_id,c.course_code,c.course_title,o.type,o.start_time,o.end_time,o.day_of_week FROM course c, course_offering o,register r '+
        'WHERE o.course_code=c.course_code AND r.co_id=o.co_id AND r.registration_no=? AND o.year=?',[student_id,currentYear]);
    }

    static findByCourseCode(courseCode){
        return db.execute('select register.registration_no , student_name from register, student , course_offering where course_offering.co_id = register.co_id and student.registration_no = register.registration_no and course_code =?',[courseCode]);
    }

    //static getAttendanceSheetDetails(coId,date){
    //    return db.execute('select student.registration_no , student_name , status from student , attendance where attendance.student_id = student.registration_no and attendance.co_id = ? and date_time = ?',[coId,date]);
    //}

    
};