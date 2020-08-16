function studentsNameandHobbiesData(){
    console.clear();
    let students = [
        {
            name: "Amna",
            hobbies: ["eating", "cooking"]
        },
        {
            name: "Daniyal",
            hobbies: ["arts", "shopping"]
        },
        {
            name: "Fahad",
            hobbies: ["coding", "cooking"]
        },
        {
            name: "Hajra",
            hobbies: ["sleep", "reading"]
        }
    ];

    // Console Output:

    // Hobbies of Amna
    // 1. eating
    // 2. cooking

    // Hobbies of Daniyal
    // 1. arts
    // 2. shopping

    // Hobbies of Fahad
    // 1. coding
    // 2. cooking

    // Hobbies of Hajra
    // 1. sleep
    // 2. reading

    students.forEach((student,index) =>{
        console.log(`Hobbies of ${student.name} `);
        for(let i=0; i<student.hobbies.length; i++){
            console.log(`${++i}. ${student.hobbies[--i]} `);
        }
       
    });
}
