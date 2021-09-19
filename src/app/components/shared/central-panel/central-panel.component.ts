import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ISlidesState} from '../../../store/slide.reducer';
import {Observable} from 'rxjs';
import {selectSlides} from '../../../store/slide.selector';

@Component({
  selector: 'app-central-panel',
  templateUrl: './central-panel.component.html'
})
export class CentralPanelComponent implements OnInit {

  slides: Observable<any[]>;

  constructor(private store: Store<ISlidesState>) { }

  ngOnInit(): void {
  }

  listMessages(): void {
    this.slides = this.store.pipe(select(selectSlides));
    console.log(this.slides);
  }
}
