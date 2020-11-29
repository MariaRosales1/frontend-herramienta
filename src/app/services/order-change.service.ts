import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderChange } from '../shared/orderChange.model';

@Injectable({
  providedIn: 'root'
})
export class OrderChangeService {

  API_URI = 'http://localhost:3000/order';

  constructor(private http: HttpClient) {
  }

  createOrderChange(orderChange: OrderChange) {
    return this.http.post(`${this.API_URI}/creation`, orderChange);
  }

  listOrderChange() {
    return this.http.get(`${this.API_URI}/list-OCs`);
  }

}
