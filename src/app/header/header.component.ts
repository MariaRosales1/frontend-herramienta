import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  roleUser: any;
  constructor(private userService:UserService) {
    this.roleUser = this.userService.getRole();
    console.log(this.roleUser);
   }

  ngOnInit() {
  }

}
