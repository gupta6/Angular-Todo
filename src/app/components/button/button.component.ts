import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  // All dynamic data that we are using in html must available here

  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter(); // As we want to reuse this btn component we want to have dynamic click functionality. That's why we will emit an event everytime button is clicked to inform the component from where the button is clicked.

  onClick() {
    this.btnClick.emit();
  }
}
