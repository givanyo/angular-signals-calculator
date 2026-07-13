import { Injectable, signal } from '@angular/core';

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
  
  private operator = signal(['÷', '×', '-', '+', '=']);
  private darkerBgColor = signal(['%', 'CE', 'C', '⌫', '1/x', 'x²', '√x']);

  getKeyStyle(keyValue: string) {
    if (this.operator().includes(keyValue)) {
      return 'operator';
    }

    if (this.darkerBgColor().includes(keyValue)) {
      return 'darker';
    }
    return 'number';
  }

  getKeypadItems() {
    return this.keypadItems;
  }
}
