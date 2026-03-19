import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-impact',
  imports: [],
  templateUrl: './impact.html',
  styleUrl: './impact.css',
})
export class Impact {
  tr = inject(TranslationService);
}
