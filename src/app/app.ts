import { RouterOutlet } from '@angular/router';
import { Component, signal } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { FooterComponent } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterOutlet
  ]
})

export class App {
  protected readonly title = signal('Shoply');
}
