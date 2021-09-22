import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollComponent } from './poll.component';
import {PollRoutingModule} from './poll-routing.module';

@NgModule({
  declarations: [PollComponent],
  imports: [
    CommonModule,
    PollRoutingModule
  ]
})
export class FeatureModule { }
