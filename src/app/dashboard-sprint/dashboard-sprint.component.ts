import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-dashboard-sprint',
  templateUrl: './dashboard-sprint.component.html',
  styleUrls: ['./dashboard-sprint.component.css']
})
export class DashboardSprintComponent implements OnInit {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    const idSprint = this.route.snapshot.params['idSprint'];
    console.log(idSprint);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  openDialog(){
    this.dialog.open(DialogComponent, { width: '500px', height: '350px' });
  }
}
