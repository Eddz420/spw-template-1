import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { AppConfig } from '../../config/app.config';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  imports: [NgFor, NgIf],
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {
  languages: { code: string; label: string; flag: string }[] = [];
  currentLang = this.translateService.currentLang || 'en';
  currentLanguageFlag = '';
  currentLanguageLabel = '';
  isDropdownOpen = false;

  constructor(private translateService: TranslateService, private http: HttpClient) {}

  ngOnInit(): void {
    const savedLang = localStorage.getItem('selectedLanguage') || 'fr';
    this.currentLang = savedLang;
    this.translateService.use(this.currentLang);

    this.loadLanguages();
  }

  loadLanguages(): void {
    AppConfig.languageCodes.forEach((code) => {
      this.loadLanguage(code);
    });
  }

  loadLanguage(code: string): void {
    const languageFilePath = `/assets/i18n/languages/${code}.json`;

    this.http.get<{ label: string, flag: string }>(languageFilePath).subscribe(
      (data) => {
        this.languages.push({
          code: code,
          label: data.label,
          flag: data.flag.toUpperCase() || '🏳️'// ensure lowercase for flag-icon-css
        });

        if (this.currentLang === code) {
          this.currentLanguageFlag = data.flag.toUpperCase();
          this.currentLanguageLabel = data.label;
        }
      },
      (error) => {
        console.error(`Error loading language ${code}:`, error);
      }
    );
  }

  changeLanguage(lang: string): void {
    this.translateService.use(lang);
    this.currentLang = lang;

    const currentLanguage = this.languages.find((language) => language.code === lang);
    if (currentLanguage) {
      this.currentLanguageFlag = currentLanguage.flag.toUpperCase();
      this.currentLanguageLabel = currentLanguage.label;
    }

    localStorage.setItem('selectedLanguage', lang);
  }
}
