import { Contract, GlobalState } from '@algorandfoundation/algorand-typescript';

export class StudentRecord extends Contract {
  // Single global state key
  studentName = GlobalState<string>({ key: "studentName", initialValue: "" });
  grade = GlobalState<string>({ key: "grade", initialValue: "" });

  AddRecord(name: string, g: string): string {
    this.studentName.value = name;
    this.grade.value = g;
    return name;
  }

  GetRecord(): string {
    return `${this.studentName.value}: ${this.grade.value}`;
  }
}
