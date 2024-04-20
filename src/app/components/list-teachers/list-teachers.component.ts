import { Component } from '@angular/core';
import { Teacher } from 'src/app/interfaces/teacher';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css']
})

export class ListTeachersComponent {
   ListTeachers: Teacher[] = [
      {id: 1, name: 'Vladimir', lastName: 'Diaz', materia: ['Informatica'], cedula: '0015748399', edad: 24, direccion: 'Villa Olimpica'},
      {id: 1, name: 'Yadier', lastName: 'Martinez', materia: ['Desarrollo Web'], cedula: '0015748399', edad: 24, direccion: 'Alma Rosa'},
    ]
}

