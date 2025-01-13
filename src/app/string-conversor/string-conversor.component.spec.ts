import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringConversorComponent } from './string-conversor.component';

describe('StringConversorComponent', () => {
  let component: StringConversorComponent;
  let fixture: ComponentFixture<StringConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringConversorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
