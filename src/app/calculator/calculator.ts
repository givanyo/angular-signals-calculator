import { Component, computed, inject, signal } from '@angular/core';
import { Display } from "./display/display";
import { KeypadItemService } from './keypad-item/keypad-item.service';
import { KeypadItem } from './keypad-item/keypad-item';

@Component({
  selector: 'app-calculator',
  imports: [Display, KeypadItem],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  keypadItemService = inject(KeypadItemService);
  keypadItemsMatrix = signal(this.keypadItemService.getKeypadItems());
}
