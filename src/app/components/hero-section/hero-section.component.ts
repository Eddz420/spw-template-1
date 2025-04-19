import { Component } from '@angular/core';
import { AppConfig } from '../../config/app.config';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  readonly config = AppConfig;
}