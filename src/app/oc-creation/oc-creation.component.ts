import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { OrderChangeService } from '../services/order-change.service';
import { OrderChange } from '../shared/orderChange.model';

@Component({
  selector: 'app-oc-creation',
  templateUrl: './oc-creation.component.html',
  styleUrls: ['./oc-creation.component.css']
})
export class OcCreationComponent implements OnInit {

  changeOrderForm: FormGroup;
  PRIORITIES = ["Alta", "Media", "Baja"];

  constructor(private fb: FormBuilder, private orderChangeService: OrderChangeService) {
    this.createForm();
  }

  ngOnInit() {
  }

  isValidOrderChangeForm() {
    let valid: boolean = false;
    if (this.changeOrderForm) {
      valid = this.changeOrderForm.valid;
    }
    return valid;
  }

  createForm() {
    this.changeOrderForm = this.fb.group({
      nameOrder: ['', Validators.required],
      priority: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  onSubmit() {
    try {
      console.log(this.changeOrderForm);
      let orderChange = this.createOrderChange();
      if(orderChange){
        this.orderChangeService.createOrderChange(orderChange).subscribe(
          (res) =>{
            console.log(res);
          },  
          err => console.log(err)
        );
      }
      //this.orderChangeService.subscribe()
    }
    catch (error) {

    }
  }
  createOrderChange():OrderChange  {
    let orderChange = null;
    if (this.isValidOrderChangeForm()) {
      orderChange = new OrderChange();
      orderChange.numberOrder = this.changeOrderForm.get('nameOrder').value;
      orderChange.priority = this.changeOrderForm.get('priority').value;
      orderChange.description = this.changeOrderForm.get('description').value;
      orderChange.state = 'Abierta'
    }
    return orderChange;
  }


}
