import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-me-buttons',
  imports: [NgOptimizedImage],
  templateUrl: './about-me-buttons.html',
  styleUrl: './about-me-buttons.css'
})
export class AboutMeButtons {
  inNav = input.required<boolean>();
}
