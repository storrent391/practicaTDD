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
    expect(compiled.querySelector('h1')?.textContent).toBe('Sign Up');
  });
  it('Has label for Username', () => {
    
    const compiled:HTMLElement = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('label')?.textContent).toBe('Username');
  });

  it('Has label for Email', () => {
    
    const compiled:HTMLElement = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('label')[1]?.textContent).toBe('Email');
  });
});
