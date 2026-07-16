import { Injectable, signal, computed, effect } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private displayValue = signal('0');
  private memory = signal<string | null>(null);
  private operator = signal<string | null>(null);
  private waitingNext = signal(false);
  private displayToMemory() {
    if (this.displayValue().at(-1) === ',') {
      this.memory.set(this.displayValue().slice(0, -1));
      return;
    }
    this.memory.set(this.displayValue());
  }
  constructor() {
    const invalidValues = ['Infinity', '-Infinity', 'NaN'];
    effect(() => {
      if (invalidValues.includes(this.displayValue())) {
        this.displayValue.set('Erro');
      }
    });
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

    if (result === 'NaN') {
      result = 'Erro';
    }

    this.memory.set(null);
    this.operator.set(null);
    this.displayValue.set(result.replace('.', ','));
  }

  get displayIsNull() {
    return this.displayValue() === '0' || this.displayValue() === 'Erro';
  }

  addDigit(keyValue: string) {
    if (this.displayIsNull || this.waitingNext()) {
      this.waitingNext.set(false);
      this.displayValue.set(keyValue);

      return;
    }
    this.waitingNext.set(false);
    const newDisplayValue = computed(() => this.displayValue() + keyValue);
    this.displayValue.set(newDisplayValue());
  }
  setOperator(keyValue: string) {
    if (this.displayValue() === 'Erro') {
      return;
    }
    if (this.operator() && this.displayValue() !== this.memory()) {
      this.handleEqual();
    }
    this.operator.set(keyValue);
    this.displayToMemory();
    this.waitingNext.set(true);
  }

  backspace() {
    const cancelCondition =
      this.displayIsNull ||
      this.displayValue().length === 1 ||
      (this.displayValue().length === 2 && this.displayValue().at(0) === '-');
    if (cancelCondition) {
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
    const memory = Number(this.memory()?.replace(',', '.'));
    const display = Number(this.displayValue().replace(',', '.'));
    const operator = this.operator();

    this.calculate(display, operator!, memory);
  }

  handleDecimal() {
    const displayValueChars = [...this.displayValue()];
    if (displayValueChars.includes(',') || this.displayValue() === 'Erro') {
      return;
    }
    const newDisplayValue = computed(() => this.displayValue() + ',');
    this.waitingNext.set(false);
    this.displayValue.set(newDisplayValue());
  }

  handleAltOperator(keyValue: string) {
    if (this.displayValue() === 'Erro') {
      return;
    }

    let result = 'Erro';

    const memory = Number(this.memory()?.replace(',', '.'));
    const displayNumber = Number(this.displayValue()?.replace(',', '.'));

    switch (keyValue) {
      case '%':
        if (memory === 0) {
          result = String((memory * displayNumber) / 100);
          break;
        }
        result = String((memory || 1) * (displayNumber / 100));
        break;

      case '1/x':
        if (displayNumber === 0) {
          break;
        }
        result = String(1 / displayNumber);
        break;

      case 'x²':
        result = String(displayNumber ** 2);
        break;

      case '√x':
        if (displayNumber < 0) {
          break;
        }
        result = String(displayNumber ** (1 / 2));
        break;

      case '±':
        result = String(displayNumber * -1);
        
    }
    this.waitingNext.set(false);
    this.displayValue.set(result.replace('.', ','));
  }

  getDisplayValue() {
    if (this.displayValue().length > 16) {
      return signal(this.displayValue().slice(0, 16) + '...');
    }
    return this.displayValue;
  }

  getMemory() {
    if (this.memory() && this.memory()!.length > 16) {
      return signal(this.memory()!.slice(0, 16) + '...');
    }
    return this.memory;
  }

  getOperator() {
    return this.operator;
  }
}
