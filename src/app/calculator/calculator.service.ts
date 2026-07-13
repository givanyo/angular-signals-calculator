import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private displayValue = signal('0');
  private memory = signal<string | null>(null);
  private operator = signal<string | null>(null);

  addDigit(keyValue: string) {
    if (this.displayValue() === '0') {
      this.displayValue.set(keyValue);
      return;
    }
    const newDisplayValue = computed(() => this.displayValue() + keyValue);
    this.displayValue.set(newDisplayValue());
  }

  private displayToMemory() {
    this.memory.set(this.displayValue());
  }
  setOperator(keyValue: string) {
    this.operator.set(keyValue);
    this.displayToMemory();
  }
  getDisplayValue() {
    return this.displayValue;
  }

  getMemory() {
    return this.memory;
  }

  getOperator() {
    return this.operator;
  }
}
