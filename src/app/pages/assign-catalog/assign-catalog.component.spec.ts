import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCatalogComponent } from './assign-catalog.component';

describe('AssignCatalogComponent', () => {
  let component: AssignCatalogComponent;
  let fixture: ComponentFixture<AssignCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
