import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface dataInput {
  name: string;
  iconRef: string;
}

@Component({
  selector: 'app-skill-card',
  imports: [NgOptimizedImage],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css'
})
export class SkillCard {
  data = input<dataInput>({name: 'Unknown!', iconRef: ''})
}
