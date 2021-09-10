import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswersComponent } from './answers.component';
import {AnswersRoutingModule} from './answers-routing.module';

@NgModule({
  declarations: [AnswersComponent],
  imports: [
    CommonModule,
    AnswersRoutingModule
  ]
})
export class AnswersModule { }
