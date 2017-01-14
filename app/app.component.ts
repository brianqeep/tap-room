import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <h1>Tap Room</h1>
  <div>
    <p><strong>{{kegName}}:</strong> <span>Brand: </span>{{kegBrand}} <span>Price: </span>{{kegPrice}}/=  <span>Alcohol content: </span>{{alcoholContent}}%</p>
    <button (click) = "sellPint()">Sell a Pint</button>
    <p>Pints remaining: {{pintsLeft}}</p>
  </div>
  `
})

export class AppComponent {
    kegName: string;
    kegBrand: string;
    kegPrice: number;
    alcoholContent: number;
    pintsLeft: number;

  constructor (){

      this.kegName = "Heineken";
      this.kegBrand = "Lite";
      this.kegPrice = 200;
      this.alcoholContent = 3;
      this.pintsLeft = 40;

  }
  sellPint(){
    this.pintsLeft += -1;

  }
}
