interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName:string, lastName:string) {
  return `${firstName[0]}. ${lastName}`;
}

class StudentClass {
  firstName;
  lastName;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() { console.log('Currently working') }
  displayName() { return this.firstName; }
}

interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
}
