import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Gymnaste} from './gymnaste';


@Injectable({
  providedIn: 'root'
})
export class LaragymService {

  constructor(private http: HttpClient ) {}


  getGymnastes(): Observable<Gymnaste[]>{
    return this.http.get<any>('http://localhost:8000/api/admin/gymnastes/saison/2/simple');//.map(response => response.json());
  }

  getGymnaste(): Observable<any>{
    return this.http.get<any>('http://localhost:8000/api/admin/gymnastes/2');//.map(response => response.json());
  }

  getSaisons(): Observable<any>{
    return this.http.get<any>('http://localhost:8000/api/saisons');//.map(response => response.json());
  }

}
