
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { IDatabase} from './database';
 const dabaseURL = '/src/app/database/database.json';


 @Injectable({
    providedIn: 'root'
  }) 

   
 @Injectable()
 export class DatabaseService {
 
     constructor(private http: HttpClient) { }
 
     getCarsSmall() {
         return this.http.get<any>('/src/app/database/database.json')
         .toPromise()
         .then(res => <IDatabase[]>res.data)
         .then(data => { return data; });
     }
 }