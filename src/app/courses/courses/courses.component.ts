import { CoursesService } from './../services/courses.service';
import { Component, DestroyRef, inject, OnInit, Signal, signal, PipeTransform } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Course } from '../model/course';
import { Observable, catchError } from 'rxjs';
import { CategoryPipe } from '../../shared/pipes/category.pipe';

@Component({
  selector: 'app-courses',
  imports: [MatTableModule, MatCardModule, MatToolbarModule, MatIconModule, CategoryPipe],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  private destroyRef = inject(DestroyRef);
  private CoursesService = inject(CoursesService);

  courses : Course[] = [];
  displayedColumns = ['name', 'category']

  constructor(){
    this.CoursesService.getList().subscribe(courses => this.courses = courses);
    console.log(this.courses)
  }

}
