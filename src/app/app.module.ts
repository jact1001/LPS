import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CentralPanelComponent } from './components/shared/central-panel/central-panel.component';
import { LeftPanelComponent } from './components/shared/left-panel/left-panel.component';
import { FactoryComponent } from './factory/factory.component';
import { ContainerComponent } from './components/shared/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    FactoryComponent,
    NavbarComponent,
    CentralPanelComponent,
    LeftPanelComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
