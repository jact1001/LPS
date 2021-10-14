import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { CentralPanelComponent } from './central-panel.component';
import { slideReducer } from 'src/app/store/slide.reducer';



describe('CentralPanelComponent', () => {
  let component: CentralPanelComponent;
  let fixture: ComponentFixture<CentralPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ 
        StoreModule.forRoot({slides: slideReducer}, {})
      ],
      declarations: [
        CentralPanelComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralPanelComponent);
    
    component = fixture.componentInstance;
  
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
