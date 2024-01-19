interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 35,
  location: "Kansas"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 30,
  location: "Kansas"
};

const studentList: Student[] = [student1, student2];

document.addEventListener('DOMContentLoaded', () => {
  const table = document.createElement('table');
  
  studentList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    
    cell1.innerText = student.firstName;
    cell2.innerText = student.location;
    
  })

  document.body.append(table);

})
