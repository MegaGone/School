import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { Global } from '../services/global';

@Injectable()

export class StudentService {
  public url: String;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  testService() {
    return 'Probando el servicio de angular'
  }

  saveComment(student: Student): Observable<any> {
    let params = JSON.stringify(student);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'nuevo', params, { headers: headers });
  };

  getComments(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/josn');

    return this._http.get(this.url + 'getComments', { headers: headers });
  }
}
