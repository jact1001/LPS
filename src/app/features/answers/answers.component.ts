import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ISlidesState} from '../../store/slide.reducer';
import {addSlideToList} from '../../store/slide.actions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  slidesForm: FormGroup;

  constructor(
      private store: Store<ISlidesState>,
      private fb: FormBuilder,
  ) {
    this.slidesForm = this.fb.group({
      type: ['Preguntas y Respuestas'],
      name: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onCreateMessage(): void {
    this.store.dispatch(addSlideToList({ slide: this.slidesForm.value }));
    this.slidesForm.controls.name.reset();
  }
}
