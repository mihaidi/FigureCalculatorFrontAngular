import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreasService {
  URL: string = "//localhost:8080/result/";


  constructor(private http: HttpClient) { }
  
  getArea(shapeDate: any, shapeName: string): Observable<Rez> {
    return this.http.post<Rez>(this.URL + shapeName, shapeDate);
  }


}
