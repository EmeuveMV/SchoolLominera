import { Component } from '@angular/core';
import { Class } from 'src/app/interfaces/class';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent {
  listClass: Class[] = [
    {id: 1, classRoom: 'Desarrollo Web', level: 'Secundaria', teacher: 'Yadier Martinez'},
  ]
}
