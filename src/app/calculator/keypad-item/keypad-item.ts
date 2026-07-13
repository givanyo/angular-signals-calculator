import { Component, inject, input, output } from '@angular/core';
import { KeyStyleService } from './key-style.service';

@Component({
  selector: 'app-keypad-item',
  imports: [],
  templateUrl: './keypad-item.html',
  styleUrl: './keypad-item.css',
})
export class KeypadItem {
  keyPress = output<string>();
  keyStyleService = inject(KeyStyleService);
  keyValue = input.required<string>()
  get keyStyle() {
    return this.keyStyleService.getKeyStyle(this.keyValue());
  }

  onKeyPress() {
    this.keyPress.emit(this.keyValue());
  }
}
