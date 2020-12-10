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
  constructor(public dialogRef: MatDialogRef<CreationTaskComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) { }

  ngOnInit() {
  }
  createTaskForm() {
    
  }

}
