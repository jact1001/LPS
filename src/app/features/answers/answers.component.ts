import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ISlidesState} from '../../store/slide.reducer';
import {addSlideToList} from '../../store/slide.actions';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  constructor(private store: Store<ISlidesState>) { }

  ngOnInit(): void {
    this.onCreateMessage();
  }

  onCreateMessage(): void {
    this.store.dispatch(addSlideToList({ slide: {nombre: 'prueba'} }));
  }
}
