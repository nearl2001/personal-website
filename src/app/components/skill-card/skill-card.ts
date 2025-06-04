import { Component, input } from '@angular/core';

interface dataInput {
  name: string;
  iconRef: string;
}

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css'
})
export class SkillCard {
  data = input<dataInput>({name: 'Unknown!', iconRef: ''})
}
