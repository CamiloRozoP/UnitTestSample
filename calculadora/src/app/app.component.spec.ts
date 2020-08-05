import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let n = 0;
  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  afterEach(async()=>{
    n++;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
   
  });

  it(`should have as title 'calculadora'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('calculadora');
    
  });

  it ('la suma debe dar 4', async(()=> {
    
    //beforeEach
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    console.log(n);
    expect (app.add(n,2)).toBe(4);         //toBe igual a ==
    //afterEach                            //toEqual estrictamente igual ===
  }))

});
