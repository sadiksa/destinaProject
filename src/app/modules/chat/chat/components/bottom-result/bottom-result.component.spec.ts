import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomResultComponent } from './bottom-result.component';

describe('BottomResultComponent', () => {
  let component: BottomResultComponent;
  let fixture: ComponentFixture<BottomResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
