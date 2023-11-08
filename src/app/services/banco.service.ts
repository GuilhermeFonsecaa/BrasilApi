import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/enviroment';

@Injectable({
  providedIn: 'root'
})

export class BancoService {

  private apiUrl = environment.apiURL;

  constructor(private http: HttpClient) { }

  getBank(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get(url);
  }

  getBankCode(code: string): Observable<any> {
    const url = `${this.apiUrl}/${code}`;
    return this.http.get(url);
  }


}