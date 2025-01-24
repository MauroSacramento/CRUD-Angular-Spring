import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  imports: [MatTableModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {
      _id: '1',
      name: 'Angular',
      categoria: 'Front-end'
    }
  ];
  displayedColumns = ['name', 'category']

  ngOnInit(): void {

  }

}
