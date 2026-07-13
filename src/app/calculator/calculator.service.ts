import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private displayValue = signal('0');
  private memory = signal<string | null>(null);
  private operator = signal<string | null>(null);
  private displayToMemory() {
    this.memory.set(this.displayValue());
  }

  private calculate(displayNumber: number, operator: string, memory: number) {
    let result = 'Erro';

    switch (operator) {
      case '+':
        result = String(memory + displayNumber);
        break;
      case '-':
        result = String(memory - displayNumber);
        break;
      case '×':
        result = String(memory * displayNumber);
        break;
      case '÷':
        if (displayNumber === 0) {
          break;
        }
        result = String(memory / displayNumber);
        break;
    }
    
    if(result === 'NaN') {
      result = 'Erro';
    } 

    this.memory.set(null);
    this.operator.set(null);
    this.displayValue.set(result);
  }

  get displayIsNull() {
    return this.displayValue() === '0' || this.displayValue() === 'Erro';
  }

  get waitingNext() {
    return this.displayValue() === this.memory();
  }
  addDigit(keyValue: string) {
    if (this.displayIsNull || this.waitingNext) {
      this.displayValue.set(keyValue);
      return;
    }
    const newDisplayValue = computed(() => this.displayValue() + keyValue);
    this.displayValue.set(newDisplayValue());
  }
  setOperator(keyValue: string) {
    if (this.displayValue() === 'Erro') {
      return;
    }
    this.operator.set(keyValue);
    this.displayToMemory();
  }

  backspace() {
    if (this.displayIsNull || this.displayValue().length === 1) {
      this.displayValue.set('0');
      return;
    }

    const newDisplayValue = computed(() => this.displayValue().slice(0, -1));
    this.displayValue.set(newDisplayValue());
  }

  clearAll() {
    this.displayValue.set('0');
    this.memory.set(null);
    this.operator.set(null);
  }

  clearEntry() {
    this.displayValue.set('0');
  }
  handleEqual() {
    if (this.memory() === null || this.operator() === null) {
      return;
    }
    const memory = Number(this.memory());
    const display = Number(this.displayValue());
    const operator = this.operator();

    this.calculate(display, operator!, memory);
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
