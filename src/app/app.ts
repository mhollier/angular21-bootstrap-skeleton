import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBasic } from "./nav-basic/nav-basic";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBasic],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular21-skeleton');
}
