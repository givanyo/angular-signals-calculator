import { Component, input } from '@angular/core';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.html',
  styleUrl: './display.css',
})
export class Display {
  displayValue = input.required<string>();
  memory = input<string | null>();
  operator = input<string | null>();
}
