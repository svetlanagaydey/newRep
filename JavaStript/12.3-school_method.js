const school = {
    teachers:
    [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],  
    students: 
    [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id:13,
            name: "Houston",
            age: 21,
        },
    ],
    findPerson(type, id) {
        if (type == 'teachers') {
            return this.teachers.find(teacher => teacher.id === id);
        }
        if (type == 'students') {
            return this.students.find(studend => studend.id === id);
        }

        // return (this.students && this.teachers).find(el => el.id === id);
    },
    assignStudent(subject) {

        this.teachers.forEach(element => {
            if (element.subjects === subject) {
                element.capacityLeft -=1;
            }

        })
        //console.log(this.teachers.filter(teacher => teacher.subjects == subjects));
       // console.log(this.students.find(studend => studend.id == id));
        //return this.teachers.find(teacher => teacher.subjects === subject);

    //    console.log(this.students.find(studend => studend.id === id));
    //    console.log(this.students.find(teacher => teacher.subjects == subject));
       
    },
};
console.log(school.findPerson('students', 13));
console.log(school.findPerson('teachers', 1));
console.log(school.assignStudent(11, 'history'));
console.log(school.assignStudent(12, 'history'));
console.log(school.assignStudent(13, 'history'));
console.log(school.findPerson('teachers', 1));

