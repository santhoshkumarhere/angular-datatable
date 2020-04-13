import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IntoxavisorSearchResponse } from './IntoxavisorSearchResponse';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {searchInput} from './SearchInput';


@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'http://localhost:54538/api';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch employees list
  getIntoxavisorSearchResults(): Observable<IntoxavisorSearchResponse> {
    return this.http.get<IntoxavisorSearchResponse>(this.apiURL + `/DeviceLogService/IntoxavisorScoreManagerSearch?FirstName&LastName&CustomerID=804646&DeviceUsageID=5908073&AlgorithmID=2&ScoreID=1&LogEntryTimeFrom=11-01-2019&LogEntryTimeTo=01-01-2020`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

   // HttpClient API get() method => Fetch employees list
   getIntoxavisorSearchResultsByCriteria(searchInput:searchInput): Observable<IntoxavisorSearchResponse> {
    return this.http.get<IntoxavisorSearchResponse>(this.apiURL + `/DeviceLogService/IntoxavisorScoreManagerSearch?FirstName=${searchInput.firstName}&LastName=${searchInput.lastName}&CustomerID=${searchInput.customerID}&DeviceUsageID=${searchInput.deviceUsageID}&AlgorithmID=${searchInput.algorithmID}&ScoreID=${searchInput.scoreID}&LogEntryTimeFrom=${searchInput.logentryTimeFrom}&LogEntryTimeTo=${searchInput.logentryTimeTo}`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

   // Error handling 
   handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}