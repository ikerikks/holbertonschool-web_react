interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
  
}

function createEmployee(salary: number): DirectorInterface | TeacherInterface {
  return salary < 500? new Teacher(): new Director();
}

function isDirector(employee: DirectorInterface | TeacherInterface) {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if(isDirector(employee)) {
    return (employee as DirectorInterface).workDirectorTasks();
  } else {
    return (employee as TeacherInterface).workTeacherTasks();
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
  return 'Teaching ' + todayClass;
}
