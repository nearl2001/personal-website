import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Email } from '../../services/email/email';
import { AboutMeButtons } from '../about-me-buttons/about-me-buttons';

@Component({
  selector: 'app-footer',
  imports: [AboutMeButtons, FormsModule, ReactiveFormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  emailForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  messageTimeout: any;
  showMessage = false;
  feedbackMessage = '';
  feedbackSuccessClass = '';
  loading = false;

  constructor(private emailService: Email) {}

  showTemporaryMessage(message: string, success: boolean = true) {
    this.feedbackMessage = message;
    this.feedbackSuccessClass = success ? 'bg-green-300/80' : 'bg-red-300/80';
    this.showMessage = true;

    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }

    this.messageTimeout = setTimeout(() => {
      this.showMessage = false;
    }, 5000);
  }

  onSubmit() {
    if (
      this.emailForm.controls.name.value == '' ||
      this.emailForm.controls.email.value == '' ||
      this.emailForm.controls.message.value == ''
    ) {
      this.showTemporaryMessage('Please fill out all fields.', false);
      return;
    }

    this.loading = true;

    // Break out function execution so that Angular updates the template with the loading variable above. This took too long to figure out lol
    setTimeout(() => {
      this.runAsyncSubmit();
    });
  }

  async runAsyncSubmit() {
    try {
      const response = await this.emailService.sendMessages(
        this.emailForm.controls.name.value ?? '',
        this.emailForm.controls.email.value ?? '',
        this.emailForm.controls.message.value ?? ''
      );
      this.loading = false;
      this.showTemporaryMessage(response.message, response.success);
    } catch (error) {
      console.error('Error sending message:', error);
      this.showTemporaryMessage('Unexpected error while sending message.', false);
    }
  }
}
