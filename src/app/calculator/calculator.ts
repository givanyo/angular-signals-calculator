import { Component, inject, signal } from '@angular/core';
import { Display } from './display/display';
import { CalculatorService } from './calculator.service';
import { KeyboardInput } from './keyboard-input/keyboard-input';

@Component({
  selector: 'app-calculator',
  imports: [Display, KeyboardInput],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  isMobile = signal(window.innerWidth < 768);
  constructor() {
    window.addEventListener('resize', () => this.isMobile.set(window.innerWidth < 768));
  }
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
