import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeyStyleService {
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
}
