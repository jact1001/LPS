import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudComponent } from './cloud.component';
import {CloudRoutingModule} from './cloud-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [CloudComponent],
  imports: [
    CommonModule,
    CloudRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CloudModule { }
