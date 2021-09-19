import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FactoryComponent} from './factory/factory.component';

const children = [
    {
      path: 'nube',
      loadChildren: () => import('./features/cloud/cloud.module').then((mod) => mod.CloudModule)
    },
    {
      path: 'encuesta',
      loadChildren: () => import('./features/poll/poll.module').then((mod) => mod.PollModule)
    },
    {
      path: 'preguntas',
      loadChildren: () => import('./features/answers/answers.module').then((mod) => mod.AnswersModule)
    }
];

const routes: Routes = [
  {
    path: '',
    component: FactoryComponent,
    children
  },
  { path: '', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
