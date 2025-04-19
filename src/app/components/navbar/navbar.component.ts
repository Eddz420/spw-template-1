import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { AppConfig } from '../../config/app.config';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeSwitcherComponent, NgFor,TranslateModule,LanguageSwitcherComponent],
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
