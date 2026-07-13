import { Component, inject, signal } from '@angular/core';
import { Display } from "./display/display";
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  imports: [Display],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  calculatorService = inject(CalculatorService);
  get displayValue() {
    return this.calculatorService.getDisplayValue();
  }

  get memory() {
    return this.calculatorService.getMemory();
  }

  get operator() {
    return this.calculatorService.getOperator();
  }
}
