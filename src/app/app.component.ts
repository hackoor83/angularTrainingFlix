import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ChilFlix';

  public changeTitle(): void {
    this.title = 'Hi, just changed the title!';
  }
}
