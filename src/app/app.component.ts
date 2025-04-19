import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroSectionComponent, FooterComponent, NgClass],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-light-background to-light-surface dark:from-dark-background dark:to-dark-surface transition-colors duration-300">
      <app-navbar></app-navbar>
      <app-hero-section></app-hero-section>
      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent {
  title = 'Angular with Tailwind';
}