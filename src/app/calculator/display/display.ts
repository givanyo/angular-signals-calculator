import { Component, inject } from '@angular/core';
import { CalculatorService } from '../calculator.service';


@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.html',
  styleUrl: './display.css',
})
export class Display {
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
