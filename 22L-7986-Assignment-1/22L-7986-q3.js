const students = [
    { name: "Ali", age: 22, marks: 85 },
    { name: "Ayesha", age: 20, marks: 92 },
    { name: "Bilal", age: 23, marks: 78 },
    { name: "Ibrahim", age: 22, marks: 76 },
    {name: "Usama", age: 21, marks :80}
    ];
    console.log(students);


     // 1. Sort students by marks in descending order.

     students.sort((a,b) => b.marks - a.marks);
     console.log(students);
     // 2. Return student names with marks greater than 80.
        const result = students.filter((student) => student.marks > 80);
    //3. Return students older than 21.
    const result1 = students.filter((student) => student.age > 21);