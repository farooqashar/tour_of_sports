import { Component, OnInit } from '@angular/core';
import { Sport } from "../sport";
import { SportService } from "../sport.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sports: Sport[] = [];

  constructor(private sportService:SportService) { }


  ngOnInit() {
    this.getSports();
  }

  getSports():void {
    this.sportService.getSports().subscribe(sports => this.sports = sports.slice(1,5))
  }

}
