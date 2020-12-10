import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { OrderChangeService } from '../services/order-change.service';
import {OrderChangeForTask} from '../shared/orderChangeForTask.model';
import { CreationTaskComponent } from '../creation-task/creation-task.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  orderChangeArray:any = [];
  displayedColumns: string[] = ['Checked', 'Oc', 'Prioridad', 'Fase'];
  
  constructor(public dialogRef: MatDialogRef<DialogComponent>, private orderChangeService: OrderChangeService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.orderChangeService.listOrderChange().subscribe((res) => {
     this.orderChangeArray = res;
     console.log(res);
     this.addCheckedToOrderChange();
      //let array = this.createOrderChangeForTaskArray(res);
      console.log("aquii");
      
    }, err => {
      console.log(err);
      this.orderChangeArray = []
    });
  }

  // createOrderChangeForTaskArray(res:any){
    
  //   console.log(res.length);
  //   var i:number;
  //   for( i = 0; i < res.length; i++ ){
  //     let orderChangeForTask  = new OrderChangeForTask();
  //     orderChangeForTask.numberOrder = res[i].id_order;
  //     orderChangeForTask.priority = res[i].priority;
  //     orderChangeForTask.stateTask = res[i].state_task;
  //     orderChangeForTask.idSprint = res[i].id_sprint;
  //     orderChangeForTask.phase = res[i].id_phase;
  //     orderChangeForTask.description = res[i].description;
  //     this.orderChangeArray.push(orderChangeForTask);
  //   }
  //   console.log('Array--->');
  //   console.log(this.orderChangeArray);
  // }
  addCheckedToOrderChange(){
    var i:number;
    for( i = 0; i <  this.orderChangeArray.length; i++ ){
      let orderChangeForTask  = new OrderChangeForTask();
      this.orderChangeArray[i]['checked'] = false;
    }
    console.log('Array--->');
    console.log(this.orderChangeArray);
  }
  openDialogTask(orderChange:any){
    console.log(orderChange);
    this.dialog.open(CreationTaskComponent, { width: '400px', height: '300px', data:{orderChange: orderChange} });
  }
}
