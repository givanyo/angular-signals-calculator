import { Component, input } from '@angular/core';

@Component({
  selector: 'app-keypad-item',
  imports: [],
  templateUrl: './keypad-item.html',
  styleUrl: './keypad-item.css',
})
export class KeypadItem {
  keyValue = input.required<string>()
  keyType = input.required<string | undefined>()
}
