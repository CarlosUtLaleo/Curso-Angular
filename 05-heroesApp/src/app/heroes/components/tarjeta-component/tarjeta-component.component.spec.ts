import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaComponentComponent } from './tarjeta-component.component';

describe('TarjetaComponentComponent', () => {
  let component: TarjetaComponentComponent;
  let fixture: ComponentFixture<TarjetaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
