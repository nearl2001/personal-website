import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export interface MessageResponse {
  readonly message: string;
  readonly success: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class Email {
  private emailjsTemplateId = 'YOUR_TEMPLATE_ID';
  private emailjsServiceId = 'YOUR_USER_ID';
  private emailjsPublicKey = 'YOUR_PUBLIC_KEY';

  constructor() {}

  sendMessage(name: string, email: string, message: string): Promise<MessageResponse> {
    const templateParams = {
      name,
      email,
      message,
    };

    return emailjs
      .send(this.emailjsServiceId, this.emailjsTemplateId, templateParams, {
        publicKey: this.emailjsPublicKey,
      })
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        return { message: 'Message sent successfully', success: true };
      })
      .catch((error) => {
        console.log(error);
        if (error instanceof EmailJSResponseStatus) {
          return {
            message: `Error sending message: ${error.text}`,
            success: false,
          };
        } else {
          return {
            message: 'An unknown error occurred while sending message.',
            success: false,
          };
        }
      })
  }
}
