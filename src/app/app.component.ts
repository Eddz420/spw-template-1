import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgClass } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular with Tailwind';

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
  
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang && browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}