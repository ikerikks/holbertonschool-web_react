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
declare class Director implements DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}
declare class Teacher implements TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}
declare function createEmployee(salary: number): DirectorInterface | TeacherInterface;
declare function isDirector(employee: DirectorInterface | TeacherInterface): boolean;
declare function executeWork(employee: DirectorInterface | TeacherInterface): string;
type Subjects = 'Math' | 'History';
declare function teachClass(todayClass: Subjects): string;
