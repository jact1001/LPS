import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudComponent } from './cloud.component';
import {CloudRoutingModule} from './cloud-routing.module';

@NgModule({
  declarations: [CloudComponent],
  imports: [
    CommonModule,
    CloudRoutingModule
  ]
})
export class CloudModule { }
