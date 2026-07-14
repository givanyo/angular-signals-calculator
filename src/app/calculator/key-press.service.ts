import { inject, Injectable } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Injectable({
  providedIn: 'root',
})
export class KeyPressService {
  private operators = ['÷', '×', '-', '+', '='];
  private altOperators = ['1/x', 'x²', '√x', '÷', '%', '±'];

  private calculatorService = inject(CalculatorService);
  handleKeyPress(keyValue: string) {
    if (Number(keyValue) || keyValue === '0') {
      this.calculatorService.addDigit(keyValue);
      return;
    }
    if (keyValue === '=') {
      this.calculatorService.handleEqual();
      return;
    }
    if (this.operators.includes(keyValue)) {
      this.calculatorService.setOperator(keyValue);
      return;
    }

    if (keyValue === '⌫') {
      this.calculatorService.backspace();
      return;
    }

    if (keyValue === 'C') {
      this.calculatorService.clearAll();
      return;
    }

    if (keyValue === 'CE') {
      this.calculatorService.clearEntry();
      return;
    }

    if (keyValue === ',') {
      this.calculatorService.handleDecimal();
      return;
    }
    if (this.altOperators.includes(keyValue)) {
      this.calculatorService.handleAltOperator(keyValue);
    }
    return;
  }
}
