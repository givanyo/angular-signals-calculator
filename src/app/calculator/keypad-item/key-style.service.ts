import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeyStyleService {
  private operator = signal(['÷', '×', '-', '+', '=']);
  private darkerBgColor = signal(['%', 'CE', 'C', '⌫', '1/x', 'x²', '√x']);

  getKeyStyle(keyValue: string) {
    if (this.operator().includes(keyValue)) {
      console.log('operator');
      return 'operator';
    }

    if (this.darkerBgColor().includes(keyValue)) {
      console.log('darker')
      return 'darker';
    }
    console.log('number')
    return 'number';
  }
}
