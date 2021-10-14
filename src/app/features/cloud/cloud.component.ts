import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ISlidesState} from '../../store/slide.reducer';
import {addSlideToList} from '../../store/slide.actions';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.css']
})
export class CloudComponent implements OnInit {

  slidesForm: FormGroup;

  constructor(
      private store: Store<ISlidesState>,
      private fb: FormBuilder,
  ) {
    this.slidesForm = this.fb.group({
      type: ['Nube de Palabras'],
      name: [null, Validators.required],
      size: ['Tamaño']
    });
  }

  ngOnInit(): void {
    // SonarQube: Empty constructor
  }

  update(value){
    this.slidesForm.controls.size.setValue(value);
  }

  onCreateMessage(): void {
    this.store.dispatch(addSlideToList({ slide: this.slidesForm.value }));
    this.slidesForm.controls.name.reset();
  }
}
