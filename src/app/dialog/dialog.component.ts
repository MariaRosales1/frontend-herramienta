import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { OrderChangeService } from '../services/order-change.service';
import { OrderChangeForTask } from '../shared/orderChangeForTask.model';
import { CreationTaskComponent } from '../creation-task/creation-task.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  orderChangeArray: any = [];
  displayedColumns: string[] = ['Checked', 'Oc', 'Prioridad', 'Fase'];
  task: any;
  taskArray: any = [];
  cardsOrderChange: any;
  ordersChangeNotSelectedArray: any = [];

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

  createSprint() {
    this.searchOrdersChangeNotSelected();
    this.cardsOrderChange = { taskArray: this.taskArray, ordersChangeNotSelected: this.ordersChangeNotSelectedArray, eventCancel:false};
    this.dialogRef.close(this.cardsOrderChange);
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
  addCheckedToOrderChange() {
    var i: number;
    for (i = 0; i < this.orderChangeArray.length; i++) {
      let orderChangeForTask = new OrderChangeForTask();
      this.orderChangeArray[i]['checked'] = false;
    }
    console.log('Array--->');
    console.log(this.orderChangeArray);
  }
  openDialogTask(orderChange: any) {
    console.log(orderChange);
    const dialogRef = this.dialog.open(CreationTaskComponent, { width: '400px', height: '350px', data: { orderChange: orderChange } });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.task = result;
      console.log(result);
      this.changeCheckedOfOrderChange(this.task.orderChange);
      this.taskArray.push(this.task);
      console.log(this.orderChangeArray);
    })

  }
  changeCheckedOfOrderChange(idOrder: number) {
    for (let i = 0; i < this.orderChangeArray.length; i++) {
      if (this.orderChangeArray[i].id_order == idOrder) {
        this.orderChangeArray[i]['checked'] = true;
        console.log("entreeee a changeCheckedOfOrderChange");
      }
    }
  }

  searchOrdersChangeNotSelected() {

    for (let i = 0; i < this.orderChangeArray.length; i++) {
      console.log("OrderChange", this.orderChangeArray[i]);
      if (!this.orderChangeArray[i].checked) {
        this.ordersChangeNotSelectedArray.push(this.orderChangeArray[i]);
      }
    }
  }

  cancelDialogOrdersChange(){
    this.cardsOrderChange = { taskArray: [], ordersChangeNotSelected: [], eventCancel:true };
    this.dialogRef.close(this.cardsOrderChange);
  }
}
