import { Contract, GlobalState } from '@algorandfoundation/algorand-typescript';

export class StudentRecord extends Contract {
  // GlobalState to store student records as a JSON string
  records = GlobalState<string>({ key: "records", initialValue: "{}" });

  // Add or update a student record with studentName and grade
  AddRecord(studentName: string, grade: string): string {
    let currentRecords = JSON.parse(this.records.value);
    currentRecords[studentName] = grade; // store or update grade for student
    this.records.value = JSON.stringify(currentRecords);
    return studentName;
  }
}
//hello