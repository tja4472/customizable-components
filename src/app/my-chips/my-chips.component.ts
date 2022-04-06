import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-chips',
  templateUrl: './my-chips.component.html',
  styleUrls: ['./my-chips.component.scss'],
})
export class MyChipsComponent {
  @Input() chips: string[] = [];
}
