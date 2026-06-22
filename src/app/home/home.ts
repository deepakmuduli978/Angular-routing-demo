import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
    name="Deepak Muduli";
    city="Berhampur";
    State="Odisha";
     getFullName(firstname:string, lastname:string):string{
      return firstname+lastname;

     }
     getSum(a:number,b:number):number{
      return a+b;
     }
     onSave(University:string){
      alert('Data saved to '+University);

     }
}
