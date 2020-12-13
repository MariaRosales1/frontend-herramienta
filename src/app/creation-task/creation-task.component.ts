import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-creation-task',
  templateUrl: './creation-task.component.html',
  styleUrls: ['./creation-task.component.css']
})
export class CreationTaskComponent implements OnInit {

  taskForm: FormGroup;
  COMPLEXITY = [3, 5, 8, 13];
  constructor(public dialogRef: MatDialogRef<CreationTaskComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {
    this.createTaskForm();
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.taskForm);
   
    this.data['complexity'] = this.taskForm.get('complexity').value;
    this.data['description'] = this.taskForm.get('description').value;
    
     
    console.log("Informacion para enviar al dialogo de las listas de OC");
    console.log(this.data);
    this.dialogRef.close(this.data);
  }
  createTaskForm() {
    console.log(this.data.orderChange);
    this.taskForm = this.fb.group({
      oc: [{ value: this.data.orderChange, disabled: true }, Validators.required],
      complexity: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  isValidTaskForm() {
    let valid: boolean = false;
    if (this.taskForm) {
      valid = this.taskForm.valid;
    }
    return valid;
  }
}
