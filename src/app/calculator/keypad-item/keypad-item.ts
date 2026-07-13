import { Component, inject, input, output } from '@angular/core';
import { KeypadItemService } from './keypad-item.service';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-keypad-item',
  imports: [],
  templateUrl: './keypad-item.html',
  styleUrl: './keypad-item.css',
})
export class KeypadItem {
  keypadItemService = inject(KeypadItemService);
  calculatorService = inject(CalculatorService);

  keyValue = input.required<string>();

  get keyStyle() {
    return this.keypadItemService.getKeyStyle(this.keyValue());
  }

  onKeyPress() {
    if (Number(this.keyValue()) || this.keyValue() === '0') {
      this.calculatorService.addDigit(this.keyValue());
    }
  }
}
