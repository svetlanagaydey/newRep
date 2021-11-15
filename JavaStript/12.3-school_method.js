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
    students: [
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
        // if (type == 'teachers') {
        //     return this.teachers.find(teacher => teacher.id === id);
        // }
        // if (type == 'students') {
        //     return this.students.find(studend => studend.id === id);
        // }

        return (this.students || this.teachers).find(el => el.id === id);
    }
};
console.log(school.findPerson('students', 13));

