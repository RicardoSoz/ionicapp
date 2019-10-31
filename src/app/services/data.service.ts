import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../models/data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { 
   }

   getData(): Observable<Data[]>{
    return this.http.get<Data[]>(this.getDataUrl).pipe(
      map(rawData => {
        return rawData.map((data) => data as Data)
      })
    );
  }

  private readonly getDataUrl = "http://10.49.184.48:8888/usuarios/getUsuarios.php";
}
