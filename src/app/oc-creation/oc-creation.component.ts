import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { OrderChangeService } from '../services/order-change.service';
import { OrderChange } from '../shared/orderChange.model';

@Component({
  selector: 'app-oc-creation',
  templateUrl: './oc-creation.component.html',
  styleUrls: ['./oc-creation.component.css']
})
export class OcCreationComponent implements OnInit {
  
  @ViewChild('fform') orderChangeFormDirective;
  changeOrderForm: FormGroup;
  PRIORITIES = ["Alta", "Media", "Baja"];
  showMessageCreationSuccessful: boolean;
  showMessageCreationError: boolean;
  messageCreation: string;

  constructor(private fb: FormBuilder, private orderChangeService: OrderChangeService, private _snackBar: MatSnackBar) {
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
      if (orderChange) {
        this.orderChangeService.createOrderChange(orderChange).subscribe(
          (res) => {
            console.log(res);
            this.resertOrderChangeForm();
            let response: any = res;
            if (response.error) {
              this.showMessageCreationError = true;
              this.showMessageCreationSuccessful = false;
              this.messageCreation = "Ocurrio un error en la creación de la orden de cambio";
            } else {
              this.showMessageCreationSuccessful = true;
              this.showMessageCreationError = false;
              this.messageCreation = "Orden de cambio creada con exito";
            }


          },
          err => {
            console.log(err)
            this.showMessageCreationError = true;
            this.messageCreation = "Ocurrio un error en la creación de la orden de cambio";
          }
        );
      }
      //this.orderChangeService.subscribe()
    }
    catch (error) {
      console.log(error);
    }
  }
  createOrderChange(): OrderChange {
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
  resertOrderChangeForm() {
    this.changeOrderForm.reset({
      numberOrder: '',
      priority: '',
      description: ''
    });
    this.orderChangeFormDirective.resetForm();
  }

  configurationSnackBar() {
    let config = new MatSnackBarConfig();
    config.duration = 4000;
    config.panelClass = ['success-message'];
    config.horizontalPosition = 'center';
    config.verticalPosition = 'bottom';
    this._snackBar.open("Usuario correctamente registrado", "", config);
  }

}
