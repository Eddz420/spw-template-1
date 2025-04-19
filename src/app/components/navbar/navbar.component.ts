import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { AppConfig } from '../../config/app.config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeSwitcherComponent, NgFor],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  readonly config = AppConfig;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
