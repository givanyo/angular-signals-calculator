import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private displayValue = signal('0');

  addDigit(keyValue: string) {
    if(this.displayValue() === '0') {
      this.displayValue.set(keyValue);
      return;
    }
    const newDisplayValue = computed(() => this.displayValue() + keyValue);
    this.displayValue.set(newDisplayValue());
  }

  getDisplayValue() {
    return this.displayValue;
  }
}
