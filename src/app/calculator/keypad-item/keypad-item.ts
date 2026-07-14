import { Component, inject, input } from '@angular/core';
import { KeypadItemService } from './keypad-item.service';
import { KeyPressService } from '../key-press.service';

@Component({
  selector: 'app-keypad-item',
  imports: [],
  templateUrl: './keypad-item.html',
  styleUrl: './keypad-item.css',
})
export class KeypadItem {
  keypadItemService = inject(KeypadItemService);
  keyPressService = inject(KeyPressService);

  keyValue = input.required<string>();

  get keyStyle() {
    return this.keypadItemService.getKeyStyle(this.keyValue());
  }

  onKeyPress() {
    this.keyPressService.handleKeyPress(this.keyValue());
  }
}
