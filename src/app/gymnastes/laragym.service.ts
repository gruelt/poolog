import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaragymService {

  constructor(private http: HttpClient ) {}


  getGymnastes(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8000/api/admin/gymnastes/saison/2');//.map(response => response.json());
  }

  getGymnaste(): Observable<any>{
    return this.http.get<any>('http://localhost:8000/api/admin/gymnastes/2');//.map(response => response.json());
  }


}
