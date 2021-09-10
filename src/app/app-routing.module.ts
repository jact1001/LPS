import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

import {environment} from '../environments/environment';

const children = [];
if (environment.configOne.cloud) {
  children.push(
    {
      path: 'nube',
      loadChildren: () => import('../app/pages/cloud/cloud.module').then((mod) => mod.CloudModule)
    }
  );
}
if (environment.configOne.encuesta) {
  children.push(
    {
      path: 'encuesta',
      loadChildren: () => import('../app/pages/poll/poll.module').then((mod) => mod.PollModule)
    }
  );
}

if (environment.configOne.answers) {
  children.push(
    {
      path: 'preguntas',
      loadChildren: () => import('../app/pages/answers/answers.module').then((mod) => mod.AnswersModule)
    }
  );
}

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, 
    children
  },
  { path: '', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
