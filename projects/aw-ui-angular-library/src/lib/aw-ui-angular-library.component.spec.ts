import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwUiAngularLibraryComponent } from './aw-ui-angular-library.component';

describe('AwUiAngularLibraryComponent', () => {
  let component: AwUiAngularLibraryComponent;
  let fixture: ComponentFixture<AwUiAngularLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwUiAngularLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwUiAngularLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
