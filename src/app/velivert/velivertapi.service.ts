import { Injectable } from '@angular/core';
import {Velivert} from './velivert';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VelivertapiService {

  private velivertUrl = 'https://saint-etienne-gbfs.klervi.net/gbfs/en/station_information.json';

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


}
