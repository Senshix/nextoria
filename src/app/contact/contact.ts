import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  tr = inject(TranslationService);
  formData = { name: '', email: '', message: '' };
  submitted = false;

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.formData = { name: '', email: '', message: '' };
    }, 4000);
  }
}
