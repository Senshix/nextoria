import { Component, inject, effect } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { HowItWorks } from './how-it-works/how-it-works';
import { SmartTest } from './smart-test/smart-test';
import { Impact } from './impact/impact';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, HowItWorks, SmartTest, Impact, About, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private tr = inject(TranslationService);

  constructor() {
    // Apply saved or default language direction on startup
    this.tr.setLang(this.tr.lang);
  }
}
