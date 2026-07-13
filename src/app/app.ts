import { Component, signal, inject } from '@angular/core';
import { Calculator } from './calculator/calculator';
import { KeypadItemService } from './calculator/keypad-item/keypad-item.service';
import { KeypadItem } from './calculator/keypad-item/keypad-item';
@Component({
  selector: 'app-root',
  imports: [Calculator, KeypadItem],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  keypadItemService = inject(KeypadItemService);
  keypadItemsMatrix = signal(this.keypadItemService.getKeypadItems());
}
