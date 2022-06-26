import { Component, OnInit } from '@angular/core';
import { HelloPipe } from '../pipes/hello.pipe';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hello',
  template: `
    <h3>Hello</h3>
    {{ "" | hello }}
    <button mat-raised-button color="primary">Primary</button>
            `,
  styleUrls: ['./hello.component.scss'],
  standalone: true,
  imports: [HelloPipe, MatButtonModule]
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
