import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswersComponent } from './answers.component';
import {AnswersRoutingModule} from './answers-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AnswersComponent],
  imports: [
    CommonModule,
    AnswersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AnswersModule { }
