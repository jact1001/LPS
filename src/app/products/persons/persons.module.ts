import { NgModule } from '@angular/core';
import {NavbarComponent} from '../../components/shared/navbar/navbar.component';
import {CentralPanelComponent} from '../../components/shared/central-panel/central-panel.component';
import {LeftPanelComponent} from '../../components/shared/left-panel/left-panel.component';
import {ContainerComponent} from '../../components/shared/container/container.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './persons-routing.module';
import {slideReducer} from '../../store/slide.reducer';
import {PersonsComponent} from './persons.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    NavbarComponent,
    CentralPanelComponent,
    LeftPanelComponent,
    ContainerComponent,
    PersonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({slides: slideReducer}, {})
  ],
  providers: [],
  bootstrap: [PersonsComponent]
})
export class PersonsModule { }
