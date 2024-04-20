import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      edad: ['', Validators.required],
      direccion: ['', Validators.required],
    })
  }

  ngOnInit(): void {}

  addStudent(){

    // console.log(this.form);
    // Dos formas de obtener los valores
        // console.log(this.form.value.name);
        // console.log(this.form.get('name')?.value);

    const student: Student = {
      name: this.form.value.name,
      lastName: this.form.value.lastName,
      edad: this.form.value.edad,
      direccion: this.form.value.direccion,
     }

     console.log(student);
  }


}
