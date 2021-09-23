import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ISlidesState} from '../../../store/slide.reducer';

@Component({
  selector: 'app-central-panel',
  templateUrl: './central-panel.component.html'
})
export class CentralPanelComponent implements OnInit {

  slides = [];

  constructor(private store: Store<ISlidesState>) { }

  ngOnInit(): void {
    this.listMessages();
  }

  listMessages(): void {
    this.store.select('slides').subscribe((value: any) => {
      console.log(value);
      this.slides = value.slides;
    });
  }
}
