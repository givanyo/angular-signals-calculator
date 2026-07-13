import { Component } from '@angular/core';
import { Display } from "./display/display";

@Component({
  selector: 'app-calculator',
  imports: [Display],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {}
