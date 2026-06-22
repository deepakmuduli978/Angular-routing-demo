import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet} from '@angular/router';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { BaseNgValidationError } from '@angular/forms/signals';
import { Banner } from './banner/banner';
import { Footer } from './footer/footer';
import { Body } from './body/body';

@Component({
  selector: 'app-root',
  imports: [Header,Navbar,Banner,Footer,Body,RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
