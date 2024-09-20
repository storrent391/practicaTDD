import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupComponent } from './singup.component';

describe('SingupComponent', () => {
  let component: SingupComponent;
  let fixture: ComponentFixture<SingupComponent>;
  let compiled: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled=fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Has title Sign Up', () => {
    
    expect(compiled.querySelector('h1')?.textContent).toBe('Sign Up');
  });
  it('Has label for Username', () => {
    
    expect(getNthLabelContent(0).textContent).toBe('Username: ');
  });

  it('Has label for Email', () => {
    
    expect(getNthLabelContent(1).textContent).toBe('Email: ');
  });
  
  it('Has label for Password', () => {
        
    expect(getNthLabelContent(2).textContent).toBe('Password');
  });

  it('Has input of type text for Username', () => {

    const inputUsername:HTMLInputElement = getNthLabelContent(0).querySelector('input') as HTMLInputElement;
    expect(inputUsername!.getAttribute('type')).toBe('text');
  });

  it('Has input of type text for Email', () => {

    const inputUsername:HTMLInputElement = getNthLabelContent(1).querySelector('input') as HTMLInputElement;
    expect(inputUsername!.getAttribute('type')).toBe('email');
  });

  function getNthLabelContent(index:number) {
    return compiled.querySelectorAll('label')[index];
  }
});
