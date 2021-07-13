import { Component, OnInit,Input } from '@angular/core';
import { Sport } from "../sport";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SportService } from "../sport.service";

@Component({
  selector: 'app-sport-detail',
  templateUrl: './sport-detail.component.html',
  styleUrls: ['./sport-detail.component.css']
})
export class SportDetailComponent implements OnInit {

  sport?: Sport;

  constructor(private route: ActivatedRoute, private location: Location, private sportService:SportService) { }

  getSport(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.sportService.getSport(id).subscribe(sport => this.sport = sport)
  }

  ngOnInit(): void {
    this.getSport();
  }

  goBack(): void {
    this.location.back();
}

  save(): void {
    if (this.sport) {
      this.sportService.updateSport(this.sport)
        .subscribe(() => this.goBack());
    }
  }

}
