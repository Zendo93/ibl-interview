import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  @Input() label = "";
  @Input({transform: checkboxId}) id: string = ""; 
  @Input() name = "";
  @Input() value = "";
  @Input({transform: checkboxChecked}) checked: boolean = false; 
}

function checkboxId(value: string) {
  return `${value}-checkbox`;
}

function checkboxChecked() {
  return true;
}
