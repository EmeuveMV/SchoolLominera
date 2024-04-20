import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos
import {ReactiveFormsModule} from '@angular/forms';


// Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { AddEditStudentComponent } from './components/add-edit-student/add-edit-student.component';
import { ListTeachersComponent } from './components/list-teachers/list-teachers.component';
import { AddEditTeacherComponent } from './components/add-edit-teacher/add-edit-teacher.component';
import { ListClassComponent } from './components/list-class/list-class.component';
import { AddEditClassComponent } from './components/add-edit-class/add-edit-class.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListStudentsComponent,
    AddEditStudentComponent,
    ListTeachersComponent,
    AddEditTeacherComponent,
    ListClassComponent,
    AddEditClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
