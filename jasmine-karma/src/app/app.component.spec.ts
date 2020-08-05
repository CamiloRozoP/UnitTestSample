import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let n=0;

  afterEach(()=>{
    n++;

  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se debe crear', () => {
    expect(component).toBeTruthy(); //Comprueba si el valor actual se evalúa como "verdadero".
    console.log("test",n);
  });

  it('crear titulo en etiqueta h1', () => {
    
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.innerHTML).toBe('jasmine-karma');
    console.log("test",n);
  });
  //Encontrar un elemento usando la clase y verificando su contenido
  it('debe haber contrenido en clase  board ', () => {
    const board = fixture.debugElement.query(By.css('.board')).nativeElement;
    expect(board.innerHTML).not.toBeNull();
    // console.log(board.innerHTML)
    expect(board.innerHTML.length).toBeGreaterThan(0);
    console.log("test",n);
  });
//encontrar elemento usando id y verificando su contenido
  it('Debe haber un yes en yes button"', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#yes-btn');
    expect(btn.innerHTML).toBe('Yes');
    console.log("test",n);
  });
  
//Recreate a “Click” event on a button
  it('debe asignar un userresponse cuando el boton yes es clickeado ', () => {
    expect(component.userResponse).toBeUndefined();
    const btn = fixture.debugElement.nativeElement.querySelector('#yes-btn');
    btn.click();
    expect(component.userResponse).toBe('I am In');
    console.log("test",n);
  });

  it('debe tener el boton no desactivado', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#no-btn');
    expect(btn.disabled).toBeTruthy();
    console.log("test",n);
  });

  it('disablenobutton asignado por default', () => {
    expect(component.disableNoButton).toBeTruthy();
    console.log("test",n);
  });

  it('contiene boarding', () => {
    const title = document.getElementById('titulo').innerHTML;
    expect(title).toContain('Boarding'); //contiene una palabra
    console.log("test",n);
  });


});



