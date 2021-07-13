import { Component, OnInit } from '@angular/core';
import { Sport } from '../sport';
import { SportService } from "../sport.service";
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})

export class SportsComponent implements OnInit {

    sports: Sport[] = [];

    constructor(private sportService: SportService) { }


  getSports(): void {
    this.sportService.getSports()
        .subscribe(sports => this.sports = sports);
  }

  add(name: string, format: string, description: string): void {
    name = name.trim();
    format = format.trim();
    description = description.trim();

    if (!name) { return; }
    if (!format) { return; }
    if (!description) { return; }

    this.sportService.addSport({ name,format,description } as Sport)
      .subscribe(sport => {
        this.sports.push(sport);
      });
  }

  delete(sport: Sport): void {
    this.sports = this.sports.filter(elt => elt !== sport);
    this.sportService.deleteSport(sport.id).subscribe();
  }

  ngOnInit() {
    this.getSports();
  }
}
