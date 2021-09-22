import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

import {environment} from '../environments/environment';

const children = [];

environment.features.forEach((feature) => {
    console.log(feature);
    children.push({
        path: feature,
        loadChildren: () => import(`src/app/pages/${feature}/${feature}.module`).then((mod) => mod.FeatureModule)
    });
});

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
