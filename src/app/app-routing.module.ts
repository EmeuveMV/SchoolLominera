import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { AddEditStudentComponent } from './components/add-edit-student/add-edit-student.component';
import { ListTeachersComponent } from './components/list-teachers/list-teachers.component';
import { AddEditTeacherComponent } from './components/add-edit-teacher/add-edit-teacher.component';
import { ListClassComponent } from './components/list-class/list-class.component';
import { AddEditClassComponent } from './components/add-edit-class/add-edit-class.component';

const routes: Routes = [
  {path: '', component: ListStudentsComponent },
  {path: 'add', component: AddEditStudentComponent },
  {path: 'edit/:id', component: AddEditStudentComponent },
  {path: 'teachers', component: ListTeachersComponent },
  {path: 'add-teacher', component: AddEditTeacherComponent },
  {path: 'edit-teacher/:id', component: AddEditTeacherComponent },
  {path: 'class', component: ListClassComponent },
  {path: 'add-class', component: AddEditClassComponent },
  {path: 'edit-class/:id', component: AddEditClassComponent },
  {path: '**', redirectTo: '', pathMatch: 'full' }, // Esta linea sirve para cuando pongan en el url cualquier cosa redirige a la pagina principal (va siempre de ultimo)

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
