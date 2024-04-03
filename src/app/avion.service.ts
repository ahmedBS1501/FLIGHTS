import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  private apiUrl ='https://localhost:7033/api/avion';
  private apiVolUrl = 'https://localhost:7033/api/Vol/avion/';

  constructor(private http: HttpClient ) { }

  getAvions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }  
  
  getVolsByAvion(numAvion : number): Observable<any> {
    return this.http.get<any>(this.apiVolUrl + numAvion);
    }
  
}
