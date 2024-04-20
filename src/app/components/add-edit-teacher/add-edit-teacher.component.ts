import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teacher } from 'src/app/interfaces/teacher';

@Component({
  selector: 'app-add-edit-teacher',
  templateUrl: './add-edit-teacher.component.html',
  styleUrls: ['./add-edit-teacher.component.css']
})
export class AddEditTeacherComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      materia: ['', Validators.required],
      cedula: ['', Validators.required],
      edad: ['', Validators.required],
      direccion: ['', Validators.required],
    })
  }

  ngOnInit(): void {}

  addTeacher(){

    // console.log(this.form);
    // Dos formas de obtener los valores
        // console.log(this.form.value.name);
        // console.log(this.form.get('name')?.value);

    const teacher: Teacher = {
      name: this.form.value.name,
      lastName: this.form.value.lastName,
      materia: this.form.value.materia,
      cedula: this.form.value.cedula,
      edad: this.form.value.edad,
      direccion: this.form.value.direccion,
     }

     console.log(teacher);
  }


}
