import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-support-tool',
  templateUrl: './support-tool.component.html',
  styleUrls: ['./support-tool.component.css']
})
export class SupportToolComponent implements OnInit {

  accessProductOwner: boolean;
  accessScrumMaster: boolean;
  accessDesarrollador: boolean;

  constructor(private userService: UserService) {
    switch(this.userService.getRole()){
      case "Product Owner":
        this.accessProductOwner = true;
        break;
      case "Scrum Master":
        this.accessScrumMaster = true;
        break;
      case "Desarrollador":
        this.accessDesarrollador = true;
    }
   }

  loadScript() {

  }
  ngOnInit() {
  }

}
