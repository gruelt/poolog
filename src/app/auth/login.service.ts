import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private laravelapi = 'http://localhost:8000/';



  constructor(private http: HttpClient ) { }

  login(data): Observable<any>{

    return this.http.post<any>(this.laravelapi + 'oauth/token', data);
  }

  getLogin(): Observable<any> {
    console.log(this.laravelapi + 'login');


    return this.http.get<any>(this.laravelapi + '/api/auth/login');
  }

}
