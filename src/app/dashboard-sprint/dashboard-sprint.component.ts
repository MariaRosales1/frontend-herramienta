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
  cardsOrderChange: any;
  todo = [];
  done = [];
  doing = [];
  cardsEmpty:boolean;
  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    const idSprint = this.route.snapshot.params['idSprint'];
    console.log(idSprint);
    if(this.todo.length == 0){
      this.cardsEmpty = true;
    }

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
  openDialogOrdersChange() {
    const dialogRef = this.dialog.open(DialogComponent, { width: '500px', height: '370px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.cardsOrderChange = result;
      console.log(this.cardsOrderChange);
      if (!this.cardsOrderChange.eventCancel) {
        this.todo = this.cardsOrderChange.ordersChangeNotSelected;
        this.doing = this.cardsOrderChange.taskArray;
      }
    });
  }
}
