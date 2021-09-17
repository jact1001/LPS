import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*import { HomeOneComponent } from './pages/homeone/homeone.component';
import { HomeTwoComponent } from './pages/hometwo/hometwo.component';
import { HomeThreeComponent } from './pages/homethree/homethree.component';*/
import { HomeComponent } from './pages/home/home.component';

const children = [
    {
      path: 'nube',
      loadChildren: () => import('../app/pages/cloud/cloud.module').then((mod) => mod.CloudModule)
    },
    {
      path: 'encuesta',
      loadChildren: () => import('../app/pages/poll/poll.module').then((mod) => mod.PollModule)
    },
    {
      path: 'preguntas',
      loadChildren: () => import('../app/pages/answers/answers.module').then((mod) => mod.AnswersModule)
    }
];

const routes: Routes = [
  /*{
    path: '',
    component: HomeOneComponent,
    children
  },
  {
    path: '',
    component: HomeTwoComponent,
    children
  },
  {
    path: '',
    component: HomeThreeComponent,
    children
  },*/
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
