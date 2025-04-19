import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [NgIf],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {
  themeService = inject(ThemeService);
  
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}