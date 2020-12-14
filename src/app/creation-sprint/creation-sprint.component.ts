import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SprintService } from '../services/sprint.service';
import { Sprint } from '../shared/sprint.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creation-sprint',
  templateUrl: './creation-sprint.component.html',
  styleUrls: ['./creation-sprint.component.css']
})
export class CreationSprintComponent implements OnInit {

  @ViewChild('fform') sprintFormDirective;
  sprintForm: FormGroup;
  nextSprint: number;
  constructor(private fb: FormBuilder, private sprintService: SprintService, 
    private router:Router) {

  }
  createForm() {
    this.sprintForm = this.fb.group({
      numberSprint: [{ value: this.nextSprint, disabled: true }, Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.createForm();
    this.sprintService.nextSprint().subscribe((res) => {
      if (res != null) {
        let response: any = res;
        this.nextSprint = response.idSprint;
        this.sprintForm.get('numberSprint').setValue(this.nextSprint);
      }
      console.log(res);
    }, err => console.log(err));
  }

  isValidSprintForm() {
    let valid: boolean = false;
    if (this.sprintForm) {
      valid = this.sprintForm.valid;
    }
    return valid;
  }
  onSubmit() {
    console.log(this.sprintForm);
    let sprint:Sprint = this.creationSprint();
    console.log(sprint);
    if (sprint) {
      this.sprintService.createSprint(sprint).subscribe(
        (res) =>{
          console.log(res);
          this.router.navigate(['/tool/dashboardSprint', sprint.numberSprint ])
        },
        err => console.log(err));
    }
  }

  creationSprint():Sprint {
    let sprint = null;
    if (this.isValidSprintForm()) {
      sprint = new Sprint();
      sprint.numberSprint = this.sprintForm.get('numberSprint').value;
      sprint.start_date = this.sprintForm.get('start_date').value.toLocaleDateString();
      sprint.end_date = this.sprintForm.get('end_date').value.toLocaleDateString();
    }
    return sprint;
  }

}
