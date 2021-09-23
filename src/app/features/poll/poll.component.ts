import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ISlidesState} from '../../store/slide.reducer';
import {addSlideToList} from '../../store/slide.actions';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  slidesForm: FormGroup;

  constructor(
      private store: Store<ISlidesState>,
      private fb: FormBuilder,
  ) {
    this.slidesForm = this.fb.group({
      type: ['Encuesta'],
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
