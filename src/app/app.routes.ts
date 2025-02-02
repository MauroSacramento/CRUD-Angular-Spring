import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses/courses.component';


export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'courses'},
  {
    path: 'courses',
    //loadComponent: () => import('./courses/courses/courses.component').then((mod) => mod.CoursesComponent),
    component: CoursesComponent,
    children: [
      { path: 'new', loadComponent: () => import('./courses/course-form/course-form.component').then((mod) => mod.default)}
    ]
  },
  //{path: 'courses', component: CoursesComponent}
];
