function extensiveStudentData(){
  console.clear();
  let students = [
    {
      name: "Amna",
      gender: "f",
      dob: new Date("02-04-1990"),
      address: {
        ilaqa: "Gulistan-e-Johar",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 47114
      },
      phoneNo: "0331-2324243",
      admissionTestScore: 56,
      hasInternet: true,
      hasComputer: false,
      hasJob: true,
      hasSchoolBefore: false
    },
    {
      name: "Hadia",
      gender: "f",
      dob: new Date("05-15-1984"),
      address: {
        ilaqa: "Lyari",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 75660
      },
      phoneNo: "0345-3452953",
      admissionTestScore: 48,
      hasInternet: false,
      hasComputer: false,
      hasJob: false,
      hasSchoolBefore: true
    },
    {
      name: "Ahmed",
      gender: "m",
      dob: new Date("06-27-2002"),
      address: {
        ilaqa: "University Road",
        city: "Quetta",
        country: "Pakistan",
        postalCode: 82215
      },
      phoneNo: "0333-0124325",
      admissionTestScore: 33,
      hasInternet: true,
      hasComputer: false,
      hasJob: false,
      hasSchoolBefore: false
    },
    {
      name: "Fariha",
      gender: "f",
      dob: new Date("09-13-1998"),
      address: {
        ilaqa: "University Road",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 82215
      },
      phoneNo: "0331-9432532",
      admissionTestScore: 33,
      hasInternet: true,
      hasComputer: false,
      hasJob: false,
      hasSchoolBefore: false
    },
    {
      name: "Abdullah",
      gender: "m",
      dob: new Date("01-24-1972"),
      address: {
        ilaqa: "Bazar Colony",
        city: "Lahore",
        country: "Pakistan",
        postalCode: 32212
      },
      phoneNo: "0345-9912121",
      admissionTestScore: 33,
      hasInternet: false,
      hasComputer: false,
      hasJob: true,
      hasSchoolBefore: true
    }
  ];

  //  Task 1

  // Print each student in this format:
  // Name: Amna
  // Gender: Female
  // City: Karachi
  // Score: 56 marks
    console.log("*****Task 1*****");
    console.log("Print each student in given format: ");
    console.log(" ");
    students.forEach(function(item,index){
      console.log("student : "+ (++index) );
      console.log("Name : "+ item.name);
      if(item.gender == "f"){
         console.log("Gender : female");
      }else{
        console.log("Gender : male");
      }
      
      console.log("City : "+ item.address.city);
      console.log("score : 56 marks");
    });

  //  Task 2

  // Print names of female students only.
  console.log(" ");
  console.log("*****Task 2******");
  console.log("Print names of female students only. ");
  console.log(" ");
  let count=1;

  students.filter(item => item.gender == "f").forEach(element => {
    console.log("student : "+ count++ );
        console.log("Name : "+ element.name);
  });
        

  //  Task 3

  // Print names of male students only.
  console.log(" ");
  console.log("*****Task 3*****");
  console.log(" Print names of male students only.");
  console.log(" ");
  count=1;
  students.filter(item => item.gender == "m").forEach(element => {
    console.log("student : "+ count++ );
        console.log("Name : "+ element.name);
  });
  // Task 4
  // Print names of students who have passed the admission test.
  // Passing marks are 50.

  console.log(" ");
  console.log("*****Task 4*****");
  console.log("Print names of students who have passed the admission test.Passing marks are 50. ");
  console.log(" ");
  count=1;

  students.filter(item => (item.admissionTestScore >= 50)).forEach(element => {
    console.log("student : "+ count++ );
        console.log("Name : "+ element.name);
  });


  // Task 5
  // Print names of eligible students 
  // only (students who have internet and live in Karachi are eligible)
  console.log(" ");
  console.log("*****Task 5*****");
  console.log("Print names of eligible students only (students who have internet and live in Karachi are eligible) ");
  console.log(" ");
  count=1;

  students.filter(item => (item.address.city == "Karachi" && item.hasInternet == true)).forEach(element => {
    console.log("student : "+ count++ );
        console.log("Name : "+ element.name);
  });

  // Task 6
  // Print address of each student in this format:
  // Amna's address:
  // Gulistan-e-Johar in Karachi, Pakistan
  console.log(" ");
  console.log("*****Task 6*****");
  console.log("Print address of each student ");
  console.log(" ");
  count=1;
  students.forEach(function(item){
        console.log("student " + count++);
        console.log(item.name+ "'s address: ");
        console.log(item.address.ilaqa + " in "+ item.address.city +", "+ item.address.country);
      
  });

  // Task 7
  // Print names and phone number of students who have Ufone.
  console.log(" ");
  console.log("*****Task 7*****");
  console.log("Print names and phone number of students who have Ufone. ");
  console.log(" ");
  count=1;
  students.filter(item => { 
    let phoneCode = item.phoneNo;
    if(phoneCode.slice(0,3) == "033"){
        console.log("student " + count++);
        console.log("Name : "+ item.name);
        console.log("Phone Number : " + item.phoneNo);
    }
  });

  // Task 8
  // Students who have a job or a class are placed in Group B. Print the names of students in Group A, and in Group B, in the below format:
  // Group A:  name1, name2
  // Group B:  name3, name4, name5
  console.log(" ");
  console.log("*****Task 8*****");
  console.log("Students who have a job or a class are placed in Group B. Print the names of students in Group A, and in Group B ");
  console.log(" ");
  count=1;
  let groupB = [];
  let groupA = [];
  students.forEach(function(item){
       
       
        if(item.hasJob == true || item.hasSchoolBefore == true){
           groupB.push(item.name);

        }else{
           groupA.push(item.name);
         
        }
  });
  console.log("Group A: " + groupA);
  console.log("Group B: " + groupB);

  // Task 9
  // Print age of each student in the below format:
  // Amna's age is 29 years
  console.log(" ");
  console.log("*****Task 9*****");
  console.log("Print age of each student in given format: ");
  console.log(" ");
  count=1;
  let age ;
  let studentsAge = [];
  students.forEach(function(item){
        let year =item.dob.getFullYear();
        let currentYear = new Date().getFullYear();
       
        age = currentYear - year;
        studentsAge.push(age);
        console.log(item.name + "'s age is " + age + " years");
       
  });

  // Task 10
  // Print the name of the oldest student
  console.log(" ");
  let studentNo;
  console.log("*****Task 10*****");
  console.log(" Print the name of the oldest student");
  console.log(" ");

  let oldestStudent = Math.max(...studentsAge);

  studentsAge.forEach(function(item,index){

        if(item == oldestStudent) {
          console.log("oldest student is " + students[index].name );

        }
  });


}