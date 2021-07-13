import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Sport } from '../sport';
import { SportService } from '../sport.service';

@Component({
  selector: 'app-sport-search',
  templateUrl: './sport-search.component.html',
  styleUrls: [ './sport-search.component.css' ]
})

export class SportSearchComponent implements OnInit {

  sports$!: Observable<Sport[]>;

  private searchTerms = new Subject<string>();

  constructor(private sportService: SportService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.sports$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.sportService.searchSports(term)),
    );
  }
}