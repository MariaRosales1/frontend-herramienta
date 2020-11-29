import { Component, Input, OnInit } from '@angular/core';
import { OrderChange } from '../shared/orderChange.model';
import {OrderChangeService} from '../services/order-change.service';

@Component({
  selector: 'app-list-order-changes',
  templateUrl: './list-order-changes.component.html',
  styleUrls: ['./list-order-changes.component.css']
})
export class ListOrderChangesComponent implements OnInit {

  displayedColumns: string[] = ['Numero', 'Prioridad', 'Sprint', 'Fase', 'Estado del sprint'];
  orderChangeArray: any = [];

  constructor(private orderChangeService:OrderChangeService) {

   }

  ngOnInit() {
    this.orderChangeService.listOrderChange().subscribe((res)=>{
      this.orderChangeArray = res;
      console.log(res);
    }, err =>{
      console.log(err);
      this.orderChangeArray = []
    });
  }

}
