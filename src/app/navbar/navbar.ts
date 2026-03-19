import { Component, inject } from '@angular/core';
import { TranslationService, Lang } from '../translation.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  tr = inject(TranslationService);

  setLang(lang: Lang) { this.tr.setLang(lang); }
}
