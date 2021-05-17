import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private laravelapi = 'http://localhost:8000/api/auth/';



  constructor(private http: HttpClient ) { }

  login(): Observable<any>{
    return this.http.post<any>(this.laravelapi + 'login','data');
  }

  getLogin(): Observable<any> {
    console.log(this.laravelapi + 'login');


    return this.http.get<any>(this.laravelapi + 'login');
  }

}
