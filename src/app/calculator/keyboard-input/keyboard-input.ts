import { Component, ElementRef, viewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KeyPressService } from '../key-press.service';

@Component({
  selector: 'app-keyboard-input',
  imports: [FormsModule],
  templateUrl: './keyboard-input.html',
  styleUrl: './keyboard-input.css',
})
export class KeyboardInput {
  keyPressService = inject(KeyPressService);
  keyboardInput = viewChild<ElementRef<HTMLInputElement>>('keyboardInput');

  constructor() {
    setInterval(() => this.keyboardInput()!.nativeElement.focus(), 150);
  }

  onInput(event: KeyboardEvent) {
    switch (event.key) {
      case 'Backspace':
        this.keyPressService.handleKeyPress('⌫');
        break;
      case 'Enter':
        this.keyPressService.handleKeyPress('=');
        break;
      case '*':
        this.keyPressService.handleKeyPress('×');
        break;
      case '/':
        this.keyPressService.handleKeyPress('÷');
        break;
      case 'c':
        this.keyPressService.handleKeyPress('C');
        break;
      default:
        this.keyPressService.handleKeyPress(event.key);
    }
  }
}
