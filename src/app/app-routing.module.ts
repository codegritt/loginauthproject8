import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { StudentsListComponent } from './students/students-list/students-list.component';





const routes: Routes = [
    {
        path: '',
        redirectTo: '/fileupload',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'dashboard3',
        
        component: Dashboard3Component
      },
      {
        path: 'special',
        // canActivate: [AuthGuard],
        component: SpecialEventsComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
     
      {
        path: 'fileupload',
        
        component: FileuploadComponent
      },
      {
        path: 'students',
        loadChildren: () => import('./students/students.module').then(mod => mod.StudentsModule)
    },
    {
      path: '/students/list',
      
      component: StudentsListComponent
    }
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  