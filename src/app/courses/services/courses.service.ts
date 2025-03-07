import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }


  getList(){
    return this.httpClient.get<Course[]>(this.API).pipe(
      tap( courses => console.log(courses))
    );

  }


}
