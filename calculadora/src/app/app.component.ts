import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('result', {static: true}) result : any ;
  ngOnInit(): void {
   
  }
  title = 'calculadora';

  public add(num1:number, num2:number): number{
      return Number(num1)+Number(num2);

  }

  public PrintAdd(num1:number, num2:number):any{
    this.result.nativeElement.value = this.add(num1,num2);
  }


}
