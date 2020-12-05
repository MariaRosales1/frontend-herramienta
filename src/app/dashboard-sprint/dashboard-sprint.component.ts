import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-sprint',
  templateUrl: './dashboard-sprint.component.html',
  styleUrls: ['./dashboard-sprint.component.css']
})
export class DashboardSprintComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    const idSprint = this.route.snapshot.params['idSprint'];
    console.log(idSprint);
  }

}
