import { Component, Input, OnInit } from '@angular/core';
import { OrderChange } from '../shared/orderChange.model';

@Component({
  selector: 'app-list-order-changes',
  templateUrl: './list-order-changes.component.html',
  styleUrls: ['./list-order-changes.component.css']
})
export class ListOrderChangesComponent implements OnInit {

  displayedColumns: string[] = ['numero', 'prioridad', 'descripcion'];
  orderChangeArray: any[] = [
    {numero: 2324, prioridad: "alta", descripcion: "muy duro"}
  ];

  constructor() {

   }

  ngOnInit() {
    
  }

}
