import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'nube',
    loadChildren: () => import('../../features/cloud/cloud.module').then((mod) => mod.CloudModule)
  },
  {
    path: 'encuesta',
    loadChildren: () => import('../../features/poll/poll.module').then((mod) => mod.PollModule)
  },
  {
    path: 'preguntas',
    loadChildren: () => import('../../features/answers/answers.module').then((mod) => mod.AnswersModule)
  },
  { path: '', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
