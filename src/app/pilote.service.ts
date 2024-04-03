import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PiloteService {

  private apiUrl ='https://localhost:7033/api/pilote';
  private apiVolUrl = 'https://localhost:7033/api/Vol/pilote/';

  constructor(private http: HttpClient) { }


  getPilotes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }  
  
  getVolsByPilote(numPilote : number): Observable<any> {
    return this.http.get<any>(this.apiVolUrl + numPilote);
    }
}
