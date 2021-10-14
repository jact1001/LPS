import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { CloudComponent } from './cloud.component';

describe('CloudComponent', () => {
  let component: CloudComponent;
  let fixture: ComponentFixture<CloudComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ 
        StoreModule.forRoot({}),
        ReactiveFormsModule,
      ],
      declarations: [
        CloudComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not updated', () => {
    expect(component.slidesForm.controls.size.value).toEqual("Tamaño");
  });

  it('should on update', () => {
    component.update("Prueba");
    expect(component.slidesForm.controls.size.value).toEqual("Prueba");
  });

  it('should on create message', () => {
    component.onCreateMessage();
    expect(component).toBeTruthy();
  });

});
