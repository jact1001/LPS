import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CentralPanelComponent } from './components/shared/central-panel/central-panel.component';
import { LeftPanelComponent } from './components/shared/left-panel/left-panel.component';
import { environment } from 'src/environments/environment';
/*import { HomeThreeComponent } from './pages/homethree/homethree.component';
import { HomeOneComponent } from './pages/homeone/homeone.component';
import { HomeTwoComponent } from './pages/hometwo/hometwo.component';*/
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    /*environment.configOne.encuesta && environment.configOne.answers && environment.configOne.cloud ? HomeThreeComponent : [],
    environment.configOne.encuesta && ! environment.configOne.answers && ! environment.configOne.cloud ? HomeOneComponent : [],
    environment.configOne.encuesta && environment.configOne.answers && ! environment.configOne.cloud ? HomeTwoComponent : [],*/
    HomeComponent,
    NavbarComponent,
    CentralPanelComponent,
    LeftPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
