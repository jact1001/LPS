import { NgModule } from '@angular/core';
import {FactoryComponent} from '../../factory/factory.component';
import {NavbarComponent} from '../../components/shared/navbar/navbar.component';
import {CentralPanelComponent} from '../../components/shared/central-panel/central-panel.component';
import {LeftPanelComponent} from '../../components/shared/left-panel/left-panel.component';
import {ContainerComponent} from '../../components/shared/container/container.component';
import {EducationComponent} from '../education/education.component';
import {EnterpriseComponent} from './enterprise.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './enterprise-routing.module';
import {slideReducer} from '../../store/slide.reducer';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    FactoryComponent,
    NavbarComponent,
    CentralPanelComponent,
    LeftPanelComponent,
    ContainerComponent,
    EnterpriseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({slides: slideReducer}, {})
  ],
  providers: [],
  bootstrap: [EnterpriseComponent]
})
export class EnterpriseModule { }
