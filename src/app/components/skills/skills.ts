import { Component } from '@angular/core';
import { SkillCard } from '../skill-card/skill-card';

@Component({
  selector: 'app-skills',
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  languages = [{name: 'TypeScript', iconRef: ''},
    {name: "JavaScript", iconRef: ''},
    {name: "Python3", iconRef: ''},
    // ... To be continued
  ]

  frontEndTools = [{name: 'React', iconRef: ''},
    {name: 'Angular', iconRef: ''},
    {name: 'HTMX', iconRef: ''},
    // ... To be continued
  ]

  backEndTools = [{name: 'NodeJS', iconRef: ''},
    {name: 'Docker', iconRef: ''},
    {name: 'SQL', iconRef: ''},
    // ... To be continued
  ]
}
