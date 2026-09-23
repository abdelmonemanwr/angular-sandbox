
import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header-component/header-component';
import { FooterComponent } from './components/footer-component/footer-component';
import { ContentComponent } from './components/content-component/content-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
  ]
})
export class App {
  protected readonly title = signal('my-app');
}
