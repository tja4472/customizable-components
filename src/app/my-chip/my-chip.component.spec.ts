import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChipComponent } from './my-chip.component';

describe('MyChipComponent', () => {
  let component: MyChipComponent;
  let fixture: ComponentFixture<MyChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
