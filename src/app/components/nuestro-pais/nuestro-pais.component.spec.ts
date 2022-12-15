import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroPaisComponent } from './nuestro-pais.component';

describe('NuestroPaisComponent', () => {
  let component: NuestroPaisComponent;
  let fixture: ComponentFixture<NuestroPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestroPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestroPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
