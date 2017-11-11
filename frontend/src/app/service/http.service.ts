import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {BeerEntity} from '../content/BeerEntity';


@Injectable()
export class HttpService {

  private apiUrl = 'http://localhost:8080/api/v1/beer/';
  constructor(private http: Http) {
  }

  getAllBeers(): Observable<any> {
    return this.http.get(this.apiUrl)
      .map(res => res.json());
  }

  getBeer(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id)
      .map(res => res.json());
  }

  addBeer(beer: BeerEntity): Observable<any> {
    return this.http.post(this.apiUrl, beer)
      .map(res => res.text());
  }

  editBeer(beer: BeerEntity, id: number): Observable<any> {
    return this.http.put(this.apiUrl + '/' + id, beer)
      .map(res => res.text());
  }

  deleteBeer(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id)
      .map(res => res.text());
  }

}

