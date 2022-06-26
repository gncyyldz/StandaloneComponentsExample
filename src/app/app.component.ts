import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloDirective } from './directives/hello.directive';
import { HelloComponent } from './hello/hello.component';
import { HelloPipe } from './pipes/hello.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HelloComponent, HelloPipe, HelloDirective, RouterModule]
})
export class AppComponent {
  title = 'standaloneExample';
}
