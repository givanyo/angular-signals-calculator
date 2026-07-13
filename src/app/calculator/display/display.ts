import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@Component({
  selector: 'app-display',
  imports: [DecimalPipe],
  templateUrl: './display.html',
  styleUrl: './display.css',
})
export class Display {
  displayValue = input.required<string>();
  memory = input<string | null>();
  operator = input<string | null>();
}
