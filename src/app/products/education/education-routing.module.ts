import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
