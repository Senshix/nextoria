import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-smart-test',
  imports: [CommonModule],
  templateUrl: './smart-test.html',
  styleUrl: './smart-test.css',
})
export class SmartTest {
  tr = inject(TranslationService);

  currentQuestion = 1;
  selectedOption: number | null = null;

  get totalQuestions(): number {
    return this.tr.t.test.questions.length;
  }

  get questions(): string[] {
    return this.tr.t.test.questions;
  }

  get options(): string[] {
    return this.tr.t.test.options;
  }

  get progress(): number {
    return Math.round(((this.currentQuestion - 1) / this.totalQuestions) * 100);
  }

  get questionLabel(): string {
    return this.tr.t.test.questionOf
      .replace('{current}', String(this.currentQuestion))
      .replace('{total}', String(this.totalQuestions));
  }

  selectOption(opt: number) {
    this.selectedOption = opt;
  }

  nextQuestion() {
    if (this.currentQuestion < this.totalQuestions) {
      this.currentQuestion++;
      this.selectedOption = null;
    }
  }
}
