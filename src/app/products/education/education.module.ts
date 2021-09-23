import { NgModule } from '@angular/core';
import {AppComponent} from '../../app.component';
import {FactoryComponent} from '../../factory/factory.component';
import {NavbarComponent} from '../../components/shared/navbar/navbar.component';
import {CentralPanelComponent} from '../../components/shared/central-panel/central-panel.component';
import {LeftPanelComponent} from '../../components/shared/left-panel/left-panel.component';
import {ContainerComponent} from '../../components/shared/container/container.component';
import {EducationComponent} from './education.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing.module';
import {slideReducer} from '../../store/slide.reducer';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    FactoryComponent,
    NavbarComponent,
    CentralPanelComponent,
    LeftPanelComponent,
    ContainerComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({slides: slideReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class EducationModule { }
