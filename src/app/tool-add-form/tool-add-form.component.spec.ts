import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolAddFormComponent } from './tool-add-form.component';

describe('ToolAddFormComponent', () => {
  let component: ToolAddFormComponent;
  let fixture: ComponentFixture<ToolAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolAddFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
