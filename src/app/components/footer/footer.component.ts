import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { AppConfig } from '../../config/app.config';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor,TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly config = AppConfig;
}