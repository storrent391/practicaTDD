import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupComponent } from './singup.component';

describe('SingupComponent', () => {
  let component: SingupComponent;
  let fixture: ComponentFixture<SingupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Has title Sign Up', () => {
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Sign Up');
  });
});
