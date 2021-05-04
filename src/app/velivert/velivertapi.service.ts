import { Injectable } from '@angular/core';
import {Velivert} from './velivert';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VelivertapiService {

  private velivertUrl = 'https://saint-etienne-gbfs.klervi.net/gbfs/en/station_information.json';

  private ammibourl = 'https://www.amiiboapi.com/api/amiibo/?character=zelda&showusage';

  constructor(private http: HttpClient) {

  }

  getVeliverts(): Observable<Velivert[]> {
    return this.http.get<Velivert[]>(this.velivertUrl);
    //return this.http.get<Velivert[]>(this.velivertUrl);
  }

  getVelivertstr(): Observable<string>{
    return this.http.get<string>(this.velivertUrl);
    //return this.http.get<Velivert[]>(this.velivertUrl);
  }

  getVelivertsany(): Observable<any>{
    return this.http.get<any>(this.velivertUrl);
    // return this.http.get<Velivert[]>(this.velivertUrl);
  }

  getAngularany(): Observable<any>{
  return this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular'); //.subscribe(data => {
    //this.totalAngularPackages = data.total;
  }

  getAmiibo(): Observable<any>{
    return this.http.get<any>(this.ammibourl);
  }

  getGymnastes(): Observable<any>{
    return this.http.get<any>('http://my.fjepgym.fr/api/admin/gymnastes/saison/3');
  }



}
