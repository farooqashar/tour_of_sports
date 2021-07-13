import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Sport } from './sport';
import { SPORTS } from './sports';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService {

  createDb() {
    const sports = SPORTS;
    return {sports};
  }

  genId(sports: Sport[]): number {
    return sports.length > 0 ? Math.max(...sports.map(sport => sport.id)) + 1 : 102;
  }
}