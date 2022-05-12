type Student = string;
type Grade = number;
type StudentRoster = Record<string,
    Student[]>;
type StudentGrades = Map<Student, Grade>;


export class GradeSchool {

    students: StudentGrades;


    constructor() {
        this.students = new Map();
    }

    add(student: Student, level: Grade): void {
        this.students.set(student, level)
    }

    grade(level: Grade): Student[] {
        return Array.from(this.students.entries())
            .filter(([, studentGrade]) => studentGrade === level)
            .map(([student]) => student)
            .sort()
    }

    roster(): StudentRoster {
        const result: StudentRoster = {};
        Array.from(this.students.entries()).forEach(([, studentGrade]) => {
            if (!result[studentGrade]) {
                result[studentGrade] = this.grade(studentGrade);
            }
        });
        return result;
    }


}
