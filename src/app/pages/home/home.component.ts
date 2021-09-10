import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pollIsActive = true;
  cloudIsActive = true;
  answersIsActive = true;

  constructor() { }

  ngOnInit(): void {
    this.pollIsActive = environment.configOne.encuesta;
    this.answersIsActive = environment.configOne.answers;
    this.cloudIsActive = environment.configOne.cloud;
  }

}
