import { Injectable } from '@angular/core';
import { Sport } from "./sport";
import { SPORTS } from "./sports";
import {Observable, of} from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SportService {


  private sportsURL = 'api/sports';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      this.messageService.add(`${operation} failed: ${error.message}`)
      return of(result as T);
    };

}

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(this.sportsURL).pipe(tap(_ => this.messageService.add('fetched all sports')),catchError(this.handleError<Sport[]>('getSports', [])));
  }

  getSport(id: number): Observable<Sport> {
    const url = `${this.sportsURL}/${id}`;
    return this.http.get<Sport>(url).pipe(
      tap(_ => this.messageService.add(`fetched sport with id=${id}`)),
      catchError(this.handleError<Sport>(`getSport id=${id}`))
    );
  }

  updateSport(sport: Sport): Observable<any> {
    return this.http.put(this.sportsURL, sport, this.httpOptions).pipe(
      tap(_ => this.messageService.add(`updated sport with id=${sport.id}`)),
      catchError(this.handleError<any>('updateSport'))
    );
}

  addSport(sport: Sport): Observable<Sport> {
    return this.http.post<Sport>(this.sportsURL, sport, this.httpOptions).pipe(
      tap((newSport: Sport) => this.messageService.add(`added sport with id=${newSport.id}`)),
      catchError(this.handleError<Sport>('addSport'))
    );
  }

  deleteSport(id: number): Observable<Sport> {
    const url = `${this.sportsURL}/${id}`;

    return this.http.delete<Sport>(url, this.httpOptions).pipe(
      tap(_ => this.messageService.add(`deleted sport with id=${id}`)),
      catchError(this.handleError<Sport>('deleteSport'))
    );
  }

  searchSports(term: string): Observable<Sport[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Sport[]>(`${this.sportsURL}/?name=${term}`).pipe(
      tap(elt => elt.length ?
        this.messageService.add(`found sports matching "${term}"`) :
        this.messageService.add(`no sports matching "${term}"`)),
      catchError(this.handleError<Sport[]>('searchSports', []))
    );
  }

  constructor(private http: HttpClient, private messageService: MessageService) { }
  
}
