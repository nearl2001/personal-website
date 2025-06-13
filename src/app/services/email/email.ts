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
  private templateId = 'template_vtq10dw';
  private serviceId = 'service_nounjqs';
  private publicKey = 'Ef1uFWd7j2XXDfqSF';

  constructor() {}

  async sendMessages(
    name: string,
    email: string,
    message: string
  ): Promise<MessageResponse> {
    const templateParams = {
      name,
      email,
      message,
    };

    // Send message to self. This will also handle auto-reply confirmation to the user
    try {
      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams,
        {
          publicKey: this.publicKey,
        }
      );
      console.log('SUCCESS!', response.status, response.text);
    } catch (error) {
      console.log(error);
      if (error instanceof EmailJSResponseStatus) {
        return {
          message: `Error sending message: ${error.text}. Try again later or email me directly at nikolasaearl@gmail.com.`,
          success: false,
        };
      } else {
        return {
          message: 'An unknown error occurred while sending. Feel free to email me directly at nikolasaearl@gmail.com, or try again later.',
          success: false,
        };
      }
    }

    return { message: 'Message sent successfully', success: true };
  }
}
