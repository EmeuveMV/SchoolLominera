import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Class } from 'src/app/interfaces/class';
import { Teacher } from '../../interfaces/teacher';

@Component({
  selector: 'app-add-edit-class',
  templateUrl: './add-edit-class.component.html',
  styleUrls: ['./add-edit-class.component.css']
})
export class AddEditClassComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      classRoom: ['', Validators.required],
      level: ['', Validators.required],
      teacher: ['', Validators.required],
      })
  }

  ngOnInit(): void {}

  addClass(){

    // console.log(this.form);
    // Dos formas de obtener los valores
        // console.log(this.form.value.name);
        // console.log(this.form.get('name')?.value);

    const classRoom: Class = {
      classRoom: this.form.value.classRoom,
      level: this.form.value.level,
      teacher: this.form.value.teacher,
     }

     console.log(classRoom);
  }
}
