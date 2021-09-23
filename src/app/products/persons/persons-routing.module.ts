import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FactoryComponent} from '../../factory/factory.component';

const routes: Routes = [
  {
    path: '',
    component: FactoryComponent,
    children: [
      {
        path: 'encuesta',
        loadChildren: () => import('../../features/poll/poll.module').then((mod) => mod.PollModule)
      }
    ]
  },
  { path: '', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
