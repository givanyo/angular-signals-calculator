import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeypadItemService {
  private keypadItems = [
    ['%', 'CE', 'C', '⌫'],
    ['1/x', 'x²', '√x', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['±', '0', ',', '='],
  ];

  getKeypadItems() {
    return this.keypadItems;
  }
}
