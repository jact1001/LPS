import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollComponent } from './poll.component';
import {PollRoutingModule} from './poll-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [PollComponent],
  imports: [
    CommonModule,
    PollRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PollModule { }
