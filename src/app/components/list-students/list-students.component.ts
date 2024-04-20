import { Component } from '@angular/core';
import { Student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent {
  listStudents: Student[] = [
    {id: 1, name: 'Vladimir', lastName: 'Diaz', edad: 24, direccion: 'Villa Olimpica'},
    {id: 2, name: 'Marianny', lastName: 'Estevez', edad: 24, direccion: 'Los Salados'},
  ]
}
