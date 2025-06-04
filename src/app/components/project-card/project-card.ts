import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface dataInput {
  name: string;
  description: string;
  pic1Ref: string;
  pic2Ref?: string;
}

@Component({
  selector: 'app-project-card',
  imports: [NgOptimizedImage],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  data = input<dataInput>({name: 'Unknown!', description: 'Not Passed Through!', pic1Ref: 'urmom.jpg', pic2Ref: ''})
}
