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
            capacityLeft: 6,
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

        return this[type].find(el => el.id === id);
        // if (type == 'teachers') {
        //     return this.teachers.find(teacher => teacher.id === id);
        // }
        // if (type == 'students') {
        //     return this.students.find(studend => studend.id === id);
        // }

        // return (this.students && this.teachers).find(el => el.id === id);
    },

    assignStudent(id, subject) {

        const stud = this.findPerson('students', id);
        const teach = this.teachers.find(teacher => teacher.subjects.includes(subject) && teacher.capacityLeft > 0);

        if (teach !== undefined) {
            teach.students.push(stud);
            teach.capacityLeft--;
        }
       return (teach);
    },
    
    assignTeachersSubject(id, subject) {
        const teach = this.findPerson('teachers', id);
        if (!teach.subjects.includes(subject)) {
            teach.subjects.push(subject);
        }

    }
};



// console.log(school.findPerson('students', 13));

// assignStudents 
console.log(school.findPerson('teachers', 2));
school.assignStudent(11, 'history');
school.assignStudent(12, 'history');
school.assignStudent(13, 'history');
console.log(school.findPerson('teachers', 2));
console.log('----------------------');

school.assignTeachersSubject(2, 'magic');
console.log(school.findPerson('teachers', 2));
    
    console.log('----------------------'); 

    function peopleWithAgeDrink(old) {
  
        if (old < 14) {
          return "drink toddy";
          } else if (14 <= old && old < 18) {
            return "drink coke";
          } else if (18 <= old && old <= 20) {
            return "drink beer";
          } else if (old >= 21 ) {
            return "drink whisky";
        }
     };
    console.log(peopleWithAgeDrink(22)); 



